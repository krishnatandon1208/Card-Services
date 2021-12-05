import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary'
import Navbar from './components/Navbar/NavbarIndex';

function App() {

  function ErrorFallBack() {
    return <h1>Found Error. Try Again</h1>
  }

  return (
    <Router>
      <ErrorBoundary FallbackComponent={ErrorFallBack}>
        <Navbar />
      </ErrorBoundary>
    </Router>
  );
}

export default App;
