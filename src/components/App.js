import React from 'react';
import Display from "./Display";
import Drumpad from "./Drumpad";
import drumpadData from "./drumpadData";
//import './App.scss';

export default function App() {
  return (
    <article className="App">
      <header>
        <h1>Drum machine</h1>
      </header>
      <section data-testid="drum-machine" id="drum-machine">
        <Display value="" />
        <section className="drumpad-container">
          {drumpadData()
            .map(function (obj, index) {
              return <Drumpad
                key={`${obj.id}${index}`}
                id={obj.id}
                textContent={obj.textContent}
                audioSrc={obj.audioSrc}
              />
            })
          }
        </section>
      </section>
      <footer>
        <small>Sounds courtesy of Zapstan.com</small>
      </footer>
    </article >
  );
}
