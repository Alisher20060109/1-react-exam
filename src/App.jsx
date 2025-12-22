import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
const HomePage = React.lazy(() => import('./pages/Home/HomePage'));
const MenyuPage = React.lazy(() => import('./pages/Menyu/MenyuPage'));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/menyu" element={<MenyuPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
