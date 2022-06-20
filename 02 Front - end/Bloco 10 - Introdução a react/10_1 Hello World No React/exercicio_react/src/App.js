import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tarefas = ['limpar', 'varrer', 'lavar'];

class App extends React.Component {
  render() {
    return (
     <ol>{ tarefas.map((tarefa) => Task(tarefa)) }</ol>
  )
}
}

export default App;
