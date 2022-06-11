import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component{
  render() {
    return (
      <div className='content'>
        {conteudos.map((element) => (
          <span key={element.conteudo} className="card">
            <p>{`O conteúdo é: ${element.conteudo}`}</p>
            <p>{`status: ${element.status}`}</p>
            <p>{`bloco: ${element.bloco}`}</p>
          </span>
        )) }
</div>
  )
  }
}
export default Content; 
