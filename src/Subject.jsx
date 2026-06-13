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

  if (!subject) return <div className="container">Module not found</div>;

  const startQuiz = () => {
    const shuffled = [...subject.quiz].sort(() => Math.random() - 0.5);
    setActiveQuestions(shuffled.slice(0, 10).map(q => ({
      ...q,
      secureOptions: q.options.map((text, i) => ({ text, isCorrect: q.correctIndices.includes(i) })).sort(() => Math.random() - 0.5)
    })));
    setQuizState('active');
  };

  return (
    <div className="container">
      <Link to="/" className="back-link">&larr; Back</Link>
      <header className="page-header">
        <h1>{subject.title}</h1>
        <div className="tabs">
          <button onClick={() => setActiveTab('notes')} className={activeTab === 'notes' ? 'tab-btn active' : 'tab-btn'}>Notes</button>
          <button onClick={() => setActiveTab('quiz')} className={activeTab === 'quiz' ? 'active' : 'tab-btn'}>Knowledge Check</button>
        </div>
      </header>

      <main className="content-panel">
        {activeTab === 'notes' ? (
          <div className="notes-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{subject.notes}</ReactMarkdown>
          </div>
        ) : (
          <div className="quiz-area">
             {quizState === 'setup' && <button onClick={startQuiz} className="primary-btn">Start Evaluation</button>}
             {quizState === 'active' && (
                <div>
                   <h3>{activeQuestions[currentIndex].question}</h3>
                   {activeQuestions[currentIndex].image && <img src={activeQuestions[currentIndex].image} className="quiz-img" />}
                   <div className="options-grid">
                     {activeQuestions[currentIndex].secureOptions.map((opt, i) => (
                       <label key={i} className="option-card">
                         <input type="checkbox" onChange={() => setSelectedOptions([...selectedOptions, i])} />
                         {opt.text}
                       </label>
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