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
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  if (!subject) return <div className="container">Module not found</div>;

  const startQuiz = () => {
    const shuffled = [...subject.quiz].sort(() => Math.random() - 0.5);
    setActiveQuestions(shuffled.slice(0, 10).map(q => ({
      ...q,
      secureOptions: q.options.map((text, i) => ({ text, isCorrect: q.correctIndices.includes(i) })).sort(() => Math.random() - 0.5)
    })));
    setQuizState('active');
  };

  const toggleOption = (idx) => {
    setSelectedOptions(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
  };

  const handleNext = () => {
    const q = activeQuestions[currentIndex];
    const correct = q.secureOptions.filter(o => o.isCorrect).map((o, i) => q.secureOptions.indexOf(o));
    const isCorrect = correct.length === selectedOptions.length && correct.every(i => selectedOptions.includes(i));
    
    if (isCorrect) setScore(s => s + 1);
    setUserAnswers([...userAnswers, selectedOptions]);
    
    if (currentIndex + 1 < activeQuestions.length) {
      setCurrentIndex(c => c + 1);
      setSelectedOptions([]);
    } else {
      setQuizState('results');
    }
  };

  return (
    <div className="container">
      <Link to="/" className="back-link">&larr; Back</Link>
      <header className="page-header">
        <h1>{subject.title}</h1>
        <div className="tabs">
          <button onClick={() => setActiveTab('notes')} className={activeTab === 'notes' ? 'tab-btn active' : 'tab-btn'}>Notes</button>
          <button onClick={() => setActiveTab('quiz')} className={activeTab === 'quiz' ? 'tab-btn active' : 'tab-btn'}>Knowledge Check</button>
        </div>
      </header>

      <main className="content-panel">
        {activeTab === 'notes' ? (
          <div className="notes-content"><ReactMarkdown remarkPlugins={[remarkGfm]}>{subject.notes}</ReactMarkdown></div>
        ) : (
          <div className="quiz-area">
             {quizState === 'setup' && <button onClick={startQuiz} className="tab-btn active">Start Evaluation</button>}
             
             {quizState === 'active' && (
                <div className="quiz-active">
                   <h3 style={{marginBottom: '1rem'}}>{activeQuestions[currentIndex].question}</h3>
                   {activeQuestions[currentIndex].image && <img src={activeQuestions[currentIndex].image} className="quiz-img" />}
                   <div className="options-grid" style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                     {activeQuestions[currentIndex].secureOptions.map((opt, i) => (
                       <label key={i} className={`option-card ${selectedOptions.includes(i) ? 'selected' : ''}`}>
                         <input type="checkbox" checked={selectedOptions.includes(i)} onChange={() => toggleOption(i)} style={{marginRight: '10px'}} />
                         {opt.text}
                       </label>
                     ))}
                   </div>
                   <button onClick={handleNext} className="tab-btn active" style={{marginTop: '20px'}}>Next →</button>
                </div>
             )}

             {quizState === 'results' && (
               <div className="results">
                 <h2>Score: {score} / {activeQuestions.length}</h2>
                 <button onClick={() => {setQuizState('setup'); setScore(0); setUserAnswers([]);}} className="tab-btn active">Restart</button>
               </div>
             )}
          </div>
        )}
      </main>
    </div>
  );
}