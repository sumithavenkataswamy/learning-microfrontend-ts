// src/App.tsx
import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderLayout from './header-layout/HeaderLayout';
import './styles/global.css';

// Lazy load remote components
const Industries = lazy(() => import('remoteApp/Industries'));
const Channel = lazy(() => import('remoteApp/Channel'));
const Companies = lazy(() => import('remoteApp/Companies'));

const App: React.FC = () => {
  return (
    <Router>
      <HeaderLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/industries" element={<Industries />} />
          <Route path="/channel" element={<Channel />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="*" element={<Industries />}/>
        </Routes>
        </Suspense>
      </HeaderLayout>
    </Router>
  );
}


export default App;
