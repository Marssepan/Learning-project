import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Subject from './Subject';

const subjects = [
  { id: 'elektrotechnika', title: 'Podstawy Elektrotechniki', description: 'Pole elektrostatyczne, prąd stały, prąd przemienny i prawa Kirchhoffa.' },
  { id: 'elektronika', title: 'Elementy i Układy Elektroniczne', description: 'Półprzewodniki, złącze P-N, diody, tranzystory bipolarne (BJT), polowe (FET) oraz wzmacniacze.' }
];

function Home() {
  return (
    <div className="container">
      <header className="page-header">
        <h1>Curriculum</h1>
        <div className="divider"></div>
      </header>

      <main className="subject-grid">
        {subjects.map((subject) => (
          <Link to={`/subject/${subject.id}`} key={subject.id} className="subject-card">
            <h2>{subject.title}</h2>
            <p>{subject.description}</p>
          </Link>
        ))}
      </main>
    </div>
  );
}

// This helper component handles the redirect from our 404.html page
function Redirector() {
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const path = params.get('p');
    if (path) {
      navigate(path, { replace: true });
    }
  }, [navigate]);
  return null;
}

export default function App() {
  return (
    <Router basename="/Learning-project">
      <Redirector />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subject/:id" element={<Subject />} />
      </Routes>
    </Router>
  );
}