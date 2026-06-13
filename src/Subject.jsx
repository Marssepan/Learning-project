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
    const finalCount = Math.min(Math.max(1, Number(settings.questionCount) || 1), subject.quiz.length);
    const shuffled = [...subject.quiz].sort(() => Math.random() - 0.5);
    setActiveQuestions(shuffled.slice(0, finalCount).map(q => ({
      ...q,
      secureOptions: q.options.map((text, i) => ({ text, isCorrect: q.correctIndices.includes(i) })).sort(() => Math.random() - 0.5)
    })));
    setQuizState('active');
    setCurrentIndex(0);
    setScore(0);
    setUserAnswers([]);
    setTimeLeft(Number(settings.timePerQuestion) || 60);
  };

  const toggleOption = (idx) => {
    setSelectedOptions(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
  };

  const handleNext = () => {
    const currentQ = activeQuestions[currentIndex];
    const correctIndices = currentQ.secureOptions.map((o, i) => o.isCorrect ? i : -1).filter(i => i !== -1);
    const isCorrect = correctIndices.length === selectedOptions.length && correctIndices.every(i => selectedOptions.includes(i));
    
    if (isCorrect) setScore(s => s + 1);
    setUserAnswers([...userAnswers, selectedOptions]);
    
    if (currentIndex + 1 < activeQuestions.length) {
      setCurrentIndex(c => c + 1);
      setSelectedOptions([]);
      setTimeLeft(Number(settings.timePerQuestion) || 60);
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
            {/* Added fallback to prevent blank screen if markdown fails */}
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {subject.notes || "Notes are currently unavailable."}
            </ReactMarkdown>
          </div>
        ) : (
          <div>
            {quizState === 'setup' && (
              <div className="quiz-setup">
                <h2>Configure Evaluation</h2>
                <label>Number of Questions (Max: {subject.quiz.length})</label>
                <input type="number" value={settings.questionCount} onChange={(e) => setSettings({...settings, questionCount: e.target.value})} />
                <label>Time per Question (s)</label>
                <input type="number" value={settings.timePerQuestion} onChange={(e) => setSettings({...settings, timePerQuestion: e.target.value})} />
                <button onClick={startQuiz} className="primary-btn">Start Evaluation</button>
              </div>
            )}

            {quizState === 'active' && activeQuestions.length > 0 && (
              <div>
                <div className="quiz-meta">
                  <span>Question {currentIndex + 1} / {activeQuestions.length}</span>
                  <span className="timer">{timeLeft}s</span>
                </div>
                <h3>{activeQuestions[currentIndex].question}</h3>
                {activeQuestions[currentIndex].image && <img src={activeQuestions[currentIndex].image} className="quiz-img" alt="Diagram" />}
                
                <div className="options-grid">
                  {activeQuestions[currentIndex].secureOptions.map((opt, i) => (
                    <label key={i} className={`option-card ${selectedOptions.includes(i) ? 'selected' : ''}`}>
                      <input type="checkbox" checked={selectedOptions.includes(i)} onChange={() => toggleOption(i)} />
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
                      {q.image && <img src={q.image} className="quiz-img" alt="Diagram" />}
                      {q.secureOptions.map((opt, j) => (
                        <div key={j} className={`review-option ${userAnswers[i].includes(j) && opt.isCorrect ? 'correct' : (userAnswers[i].includes(j) && !opt.isCorrect ? 'wrong' : '')}`}>
                          {opt.text}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <button onClick={() => setQuizState('setup')} className="primary-btn">Configure New Quiz</button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}