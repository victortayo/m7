import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLayout } from './contexts/LayoutContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import SpecialtyDetail from './pages/SpecialtyDetail';
import NoteDetail from './pages/NoteDetail';
import Qbank from './pages/Qbank';
import Search from './pages/Search';
import Downloads from './pages/Downloads';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/specialty/:id" element={<SpecialtyDetail />} />
        <Route path="/note/:specialtyId/:topicId" element={<NoteDetail />} />
        <Route path="/qbank" element={<Qbank />} />
        <Route path="/search" element={<Search />} />
        <Route path="/downloads" element={<Downloads />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const { layoutProps } = useLayout();
  return (
    <Layout {...layoutProps}>
      <AnimatedRoutes />
    </Layout>
  );
};

export default App;
