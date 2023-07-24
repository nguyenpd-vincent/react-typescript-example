import React from 'react';
import logo from './logo.svg';
import MainLayout from './components/layout/MainLayout';
import RamenProductList from './components/ui/RamenProductList';
import './App.css';

function App() {
  return (
    <div className="App">
      <MainLayout>
        <RamenProductList />
      </MainLayout>
    </div>
  );
}

export default App;
