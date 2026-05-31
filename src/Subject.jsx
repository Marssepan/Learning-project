import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { curriculumData } from './data';

export default function Subject() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('notes');
  const subject = curriculumData[id];

  // --- QUIZ ENGINE STATE ---
  const [quizState, setQuizState] = useState('setup'); // 'setup', 'active', 'results'
  const [settings, setSettings] = useState({ questionCount: 10, timePerQuestion: 60 });
  
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);
  
  // NEW: State to store all user answers for the final review
  const [userAnswers, setUserAnswers] = useState([]); 

  // --- TIMER LOGIC ---
  useEffect(() => {
    let timer;
    if (quizState === 'active' && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (quizState === 'active' && timeLeft === 0) {
      handleNext();
    }
    return () => clearTimeout(timer);
  }, [timeLeft, quizState]);

  if (!subject) {
    return (
      <div className="container">
        <Link to="/" className="back-link">&larr; Back to Curriculum</Link>
        <h1 className="page-header">Module not found</h1>
      </div>
    );
  }

  // --- START QUIZ ---
  const startQuiz = () => {
    const shuffledQuestions = [...subject.quiz].sort(() => Math.random() - 0.5);
    const selected = shuffledQuestions.slice(0, settings.questionCount);

    const preparedQuestions = selected.map(q => {
      const secureOptions = q.options.map((optText, index) => ({
        text: optText,
        isCorrect: q.correctIndices.includes(index)
      }));
      secureOptions.sort(() => Math.random() - 0.5);
      return { ...q, secureOptions };
    });

    setActiveQuestions(preparedQuestions);
    setCurrentIndex(0);
    setScore(0);
    setSelectedOptions([]);
    setUserAnswers([]); // Clear history on new quiz
    setTimeLeft(settings.timePerQuestion);
    setQuizState('active');
  };

  // --- HANDLE SELECTIONS ---
  const toggleOption = (index) => {
    setSelectedOptions(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  // --- GRADING & ADVANCING ---
  const handleNext = () => {
    const currentQ = activeQuestions[currentIndex];
    
    // Check correctness
    const correctOptionIndices = currentQ.secureOptions
      .map((opt, idx) => opt.isCorrect ? idx : -1)
      .filter(idx => idx !== -1);

    const isPerfectMatch = 
      correctOptionIndices.length === selectedOptions.length &&
      correctOptionIndices.every(idx => selectedOptions.includes(idx));

    if (isPerfectMatch) {
      setScore(prev => prev + 1);
    }

    // Save the answers for the review screen
    setUserAnswers(prev => [...prev, selectedOptions]);

    // Move to next question or end quiz
    if (currentIndex + 1 < activeQuestions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOptions([]);
      setTimeLeft(settings.timePerQuestion);
    } else {
      setQuizState('results');
    }
  };

  return (
    <div className="container">
      <Link to="/" className="back-link">&larr; Back to Curriculum</Link>
      
      <header className="page-header" style={{ marginBottom: '2rem' }}>
        <h1>{subject.title}</h1>
        <div className="tabs">
          <button onClick={() => setActiveTab('notes')} className={`tab-btn ${activeTab === 'notes' ? 'active' : ''}`}>
            Notes
          </button>
          <button onClick={() => setActiveTab('quiz')} className={`tab-btn ${activeTab === 'quiz' ? 'active' : ''}`}>
            Knowledge Check
          </button>
        </div>
      </header>

      <main className="content-panel">
        {activeTab === 'notes' ? (
          <div>
            <h2 style={{ marginBottom: '1rem' }}>Module Overview</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '2rem' }}>{subject.overview}</p>
            <div className="notes-content" style={{ lineHeight: '1.8' }} dangerouslySetInnerHTML={{ __html: subject.notes }} />
          </div>
        ) : (
          
          <div>
            {/* STATE 1: SETUP */}
            {quizState === 'setup' && (
              <div style={{ maxWidth: '400px' }}>
                <h2 style={{ marginBottom: '2rem' }}>Configure Evaluation</h2>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
                    Number of Questions (Max: {subject.quiz.length})
                  </label>
                  <input 
                    type="number" min="1" max={subject.quiz.length} 
                    value={settings.questionCount}
                    onChange={(e) => setSettings({...settings, questionCount: Number(e.target.value)})}
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-light)' }}
                  />
                </div>
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
                    Time per Question (Seconds)
                  </label>
                  <input 
                    type="number" min="10" step="10"
                    value={settings.timePerQuestion}
                    onChange={(e) => setSettings({...settings, timePerQuestion: Number(e.target.value)})}
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-light)' }}
                  />
                </div>
                <button 
                  onClick={startQuiz}
                  style={{ width: '100%', padding: '1rem', backgroundColor: 'var(--text-main)', color: 'white', border: 'none', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem' }}
                >
                  Start Evaluation
                </button>
              </div>
            )}

            {/* STATE 2: ACTIVE QUIZ */}
            {quizState === 'active' && activeQuestions.length > 0 && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-light)' }}>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Question {currentIndex + 1} of {activeQuestions.length}
                  </span>
                  <span style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: timeLeft <= 10 ? '#dc2626' : 'var(--text-main)' }}>
                    {timeLeft}s
                  </span>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '2rem', lineHeight: '1.6' }}>
                  {activeQuestions[currentIndex].question}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '3rem' }}>
                  {activeQuestions[currentIndex].secureOptions.map((opt, i) => {
                    const isSelected = selectedOptions.includes(i);
                    return (
                      <label 
                        key={i} 
                        style={{ padding: '1rem', border: `1px solid ${isSelected ? 'var(--border-dark)' : 'var(--border-light)'}`, backgroundColor: isSelected ? '#f3f4f6' : 'transparent', cursor: 'pointer', transition: 'var(--transition)', display: 'flex', alignItems: 'center' }}
                      >
                        <input 
                          type="checkbox" 
                          style={{ marginRight: '1rem', width: '1.2rem', height: '1.2rem' }}
                          checked={isSelected}
                          onChange={() => toggleOption(i)}
                        />
                        <span style={{ lineHeight: '1.4' }}>{opt.text}</span>
                      </label>
                    );
                  })}
                </div>
                
                {/* BUG FIX: Replaced &rarr; with the actual unicode arrow → */}
                <button 
                  onClick={handleNext}
                  style={{ padding: '1rem 2rem', backgroundColor: 'var(--border-light)', color: 'var(--text-main)', border: '1px solid var(--border-dark)', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem', transition: 'var(--transition)' }}
                  onMouseOver={(e) => { e.target.style.backgroundColor = 'var(--text-main)'; e.target.style.color = 'white'; }}
                  onMouseOut={(e) => { e.target.style.backgroundColor = 'var(--border-light)'; e.target.style.color = 'var(--text-main)'; }}
                >
                  {currentIndex + 1 === activeQuestions.length ? 'Submit Final Answer' : 'Next Question →'}
                </button>
              </div>
            )}

            {/* STATE 3: RESULTS & REVIEW */}
            {quizState === 'results' && (
              <div>
                <div style={{ textAlign: 'center', padding: '3rem 0', borderBottom: '1px solid var(--border-light)', marginBottom: '3rem' }}>
                  <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Evaluation Complete</h2>
                  <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                    You scored <strong style={{ color: 'var(--text-main)', fontSize: '1.5rem' }}>{score}</strong> out of {activeQuestions.length}.
                  </p>
                  <button 
                    onClick={() => setQuizState('setup')}
                    style={{ padding: '1rem 3rem', backgroundColor: 'var(--text-main)', color: 'white', border: 'none', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem' }}
                  >
                    Configure New Quiz
                  </button>
                </div>

                {/* --- DETAILED REVIEW SECTION --- */}
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontFamily: 'var(--font-serif)' }}>Performance Review</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    
                    {activeQuestions.map((q, qIndex) => {
                      const userSelectedIndices = userAnswers[qIndex] || [];
                      
                      return (
                        <div key={qIndex} style={{ padding: '2rem', backgroundColor: '#fff', border: '1px solid var(--border-light)' }}>
                          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Question {qIndex + 1}
                          </p>
                          <h4 style={{ fontSize: '1.125rem', marginBottom: '1.5rem', lineHeight: '1.6', fontWeight: '500' }}>
                            {q.question}
                          </h4>
                          
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {q.secureOptions.map((opt, optIndex) => {
                              const isSelected = userSelectedIndices.includes(optIndex);
                              const isCorrect = opt.isCorrect;
                              
                              // Logic to determine highlight colors
                              let bgColor = 'transparent';
                              let borderColor = 'var(--border-light)';
                              let textColor = 'var(--text-main)';

                              if (isSelected && isCorrect) {
                                bgColor = '#dcfce7'; // Light Green
                                borderColor = '#22c55e'; // Strong Green
                              } else if (isSelected && !isCorrect) {
                                bgColor = '#fee2e2'; // Light Red
                                borderColor = '#ef4444'; // Strong Red
                              } else if (!isSelected && isCorrect) {
                                // User missed this correct answer
                                borderColor = '#22c55e'; // Just a green outline
                                textColor = '#166534';
                              }

                              return (
                                <div 
                                  key={optIndex} 
                                  style={{ 
                                    padding: '1rem', 
                                    border: `1px solid ${borderColor}`, 
                                    backgroundColor: bgColor,
                                    color: textColor,
                                    display: 'flex',
                                    alignItems: 'center'
                                  }}
                                >
                                  <input 
                                    type="checkbox" 
                                    disabled 
                                    checked={isSelected}
                                    style={{ marginRight: '1rem', width: '1.2rem', height: '1.2rem' }}
                                  />
                                  <span style={{ lineHeight: '1.4' }}>{opt.text}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                    
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}