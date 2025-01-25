import {useState} from 'react';
import './style.scss';

import Ragnar from './assets/Ragnar.jpg';
import Lagertha from './assets/Lagertha.jpg';
import Bjorn from './assets/Bjorn.jpg';
import Rollo from './assets/Rollo.jpg';
import Floki from './assets/Floki.jpg'


export default function App() {
const [Vikings, setVikings] = useState(0);
const Personagens = [
  {
    imagem:Ragnar,
    nome: 'Ragnar Lothbrok',
    apelido: 'Rei dos Vikings',
    idade: 'Desconhecida (histórica e mítica)',
    posição: 'Líder e explorador',
  },
  {
    imagem:Rollo,
    nome: 'Rollo',
    apelido: 'O Lobo',
    idade: 'Desconhecida (histórica e mítica)',
    posição: 'Guerreiro e irmão de Ragnar',
  },
  {
    imagem:Lagertha,
    nome: 'Lagertha',
    apelido: 'A Donzela do Escudo',
    idade: 'Desconhecida (histórica e mítica)',
    posição: 'Guerreira e esposa de Ragnar',
  },
  {
    imagem:Bjorn,
    nome: 'Bjorn Ironside',
    apelido: 'Bjorn Braço-de-Ferro',
    idade: 'Desconhecida (histórica e mítica)',
    posição: 'Explorador e filho de Ragnar',
  },

{

imagem: Floki,
nome: 'Floki Vilgerðarson',
apelido: 'O Construtor de Navios',
idade: 30, // Aproximadamente, considerando a série
posição: 'Engenheiro Naval e Visionário',


}

]

const proximoViking = () => {
  setVikings((prevMembro) => (prevMembro + 1) % Personagens.length);
}

  return (
    <div className='container'>
      <h1>VIKINGS</h1>
      <div className='dados'>
        <img src={Personagens[Vikings].imagem} alt={Personagens[Vikings].nome} />
        <h2>{Personagens[Vikings].nome}</h2>
        <p>Apelido: {Personagens[Vikings].apelido}</p>
        <p>Idade: {Personagens[Vikings].idade}</p>
        <p>Posição: {Personagens[Vikings].posição}</p>
        <button onClick={proximoViking}>Próximo Viking</button>
      </div>
    </div>
    
  )
}




