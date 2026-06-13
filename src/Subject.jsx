import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { curriculumData } from './data';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function Subject() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('notes');
  const subject = curriculumData[id];

  const [quizState, setQuizState] = useState('setup'); 
  const [settings, setSettings] = useState({ questionCount: 10, timePerQuestion: 60 });
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]); 

  useEffect(() => {
    let timer;
    if (quizState === 'active' && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (quizState === 'active' && timeLeft === 0) {
      handleNext();
    }
    return () => clearTimeout(timer);
  }, [timeLeft, quizState]);

  if (!subject) return <div className="container"><h1>Module not found</h1></div>;

  const startQuiz = () => {
    const finalCount = Math.min(Math.max(1, Number(settings.questionCount)), subject.quiz.length);
    const shuffled = [...subject.quiz].sort(() => Math.random() - 0.5);
    setActiveQuestions(shuffled.slice(0, finalCount).map(q => ({
      ...q,
      secureOptions: q.options.map((text, i) => ({ text, isCorrect: q.correctIndices.includes(i) })).sort(() => Math.random() - 0.5)
    })));
    setQuizState('active');
    setCurrentIndex(0);
    setTimeLeft(settings.timePerQuestion);
  };

  const handleNext = () => {
    const currentQ = activeQuestions[currentIndex];
    const isCorrect = currentQ.secureOptions.filter((o, i) => o.isCorrect).every(o => selectedOptions.includes(currentQ.secureOptions.indexOf(o))) && 
                      currentQ.secureOptions.filter((o, i) => selectedOptions.includes(i)).every(o => o.isCorrect);
    
    if (isCorrect) setScore(s => s + 1);
    setUserAnswers([...userAnswers, selectedOptions]);
    
    if (currentIndex + 1 < activeQuestions.length) {
      setCurrentIndex(c => c + 1);
      setSelectedOptions([]);
      setTimeLeft(settings.timePerQuestion);
    } else setQuizState('results');
  };

  return (
    <div className="container">
      <Link to="/" className="back-link">&larr; Back</Link>
      
      <header className="page-header">
        <h1>{subject.title}</h1>
        <div className="tabs">
          <button onClick={() => setActiveTab('notes')} className={`tab-btn ${activeTab === 'notes' ? 'active' : ''}`}>Notes</button>
          <button onClick={() => setActiveTab('quiz')} className={`tab-btn ${activeTab === 'quiz' ? 'active' : ''}`}>Knowledge Check</button>
        </div>
      </header>

      <main className="content-panel">
        {activeTab === 'notes' ? (
          <div className="notes-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {subject.notes}
          </ReactMarkdown>
        </div>
        ) : (
          <div>
            {quizState === 'setup' && (
              <div className="quiz-setup">
                <h2>Configure Evaluation</h2>
                <label>Questions (Max: {subject.quiz.length})</label>
                <input type="number" value={settings.questionCount} onChange={(e) => setSettings({...settings, questionCount: e.target.value})} />
                <label>Time per Question (s)</label>
                <input type="number" value={settings.timePerQuestion} onChange={(e) => setSettings({...settings, timePerQuestion: e.target.value})} />
                <button onClick={startQuiz} className="primary-btn">Start</button>
              </div>
            )}

            {quizState === 'active' && (
              <div>
                <div className="quiz-meta">
                  <span>Question {currentIndex + 1} / {activeQuestions.length}</span>
                  <span className="timer">{timeLeft}s</span>
                </div>
                <h3>{activeQuestions[currentIndex].question}</h3>
                {activeQuestions[currentIndex].image && <img src={activeQuestions[currentIndex].image} className="quiz-img" />}
                
                <div className="options-grid">
                  {activeQuestions[currentIndex].secureOptions.map((opt, i) => (
                    <label key={i} className={`option-card ${selectedOptions.includes(i) ? 'selected' : ''}`}>
                      <input type="checkbox" checked={selectedOptions.includes(i)} onChange={() => setSelectedOptions(selectedOptions.includes(i) ? selectedOptions.filter(x => x !== i) : [...selectedOptions, i])} />
                      {opt.text}
                    </label>
                  ))}
                </div>
                <button onClick={handleNext} className="primary-btn">Next →</button>
              </div>
            )}

            {quizState === 'results' && (
              <div>
                <h2>Result: {score} / {activeQuestions.length}</h2>
                <div className="review-grid">
                  {activeQuestions.map((q, i) => (
                    <div key={i} className="review-card">
                      <h4>{q.question}</h4>
                      {q.image && <img src={q.image} className="quiz-img" />}
                      {q.secureOptions.map((opt, j) => (
                        <div key={j} className={`review-option ${userAnswers[i].includes(j) && opt.isCorrect ? 'correct' : (userAnswers[i].includes(j) && !opt.isCorrect ? 'wrong' : '')}`}>
                          {opt.text}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}