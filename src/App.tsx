import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import Error from './pages/Error';
import { EStatus } from './models/task';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="mx-auto min-w-[320px] max-w-[1440px]">
        <Header />
        <Routes>
          <Route path="/" element={<Main filterVal={EStatus.active} />} />
          <Route path="/active" element={<Main filterVal={EStatus.active} />} />
          <Route path="/done" element={<Main filterVal={EStatus.done} />} />
          <Route path="/archive" element={<Main filterVal={EStatus.archived} />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
