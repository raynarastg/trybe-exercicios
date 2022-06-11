import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['limpar', 'varrer', 'lavar'];

class App extends React.Component {
  render() {
    return (
    tarefas.map((tarefa) => Task(tarefa ))
  )
}
}

export default App;
