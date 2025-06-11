import React from 'react';
import { ToDoList } from './components/ToDoList';
import { GlobalStyles } from './styles/GlobalStyles';
import { DynamicBackground } from './components/DynamicBackground';

function App() {
  return (
    <>
      <GlobalStyles />
      <DynamicBackground />
      <ToDoList />
    </>
  );
}

export default App;