import { useState } from 'react';
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
      imagem: Ragnar,
      nome: 'Ragnar Lothbrok',
      apelido: 'Rei dos Vikings',
      posição: 'Líder e explorador',
      Legado: "Lenda Viking que unificou tribos e liderou expedições, incluindo ataques à França e Inglaterra",
    },
    {
      imagem: Rollo,
      nome: 'Rollo',
      apelido: 'O Lobo',
      posição: 'Guerreiro e irmão de Ragnar',
      Legado: 'Fundador do Ducado da Normandia, conhecido por sua aliança com os francos e conquistas militares',
    },
    {
      imagem: Lagertha,
      nome: 'Lagertha',
      apelido: 'A Donzela do Escudo',
      posição: 'Guerreira e esposa de Ragnar',
      Legado: 'Famosa por sua habilidade em combate e por ser uma líder guerreira independente',
    },
    {
      imagem: Bjorn,
      nome: 'Bjorn Ironside',
      apelido: 'Bjorn Braço-de-Ferro',
      posição: 'Explorador e filho de Ragnar',
      Legado: "Famoso por suas expedições, fundação de cidades e por ser um dos maiores guerreiros vikings, consolidando seu nome como líder na Escandinávia"
    },

    {

      imagem: Floki,
      nome: 'Floki Vilgerðarson',
      apelido: 'O Construtor de Navios',
      posição: 'Engenheiro Naval e Visionário',
      Legado: 'Criador de navios e amigo próximo de Ragnar, com um papel fundamental nas viagens vikings.',


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
        <p>Legado: {Personagens[Vikings].Legado}</p>
        <p>Posição: {Personagens[Vikings].posição}</p>
        <button onClick={proximoViking}>Próximo Viking</button>
      </div>
    </div>

  )
}




