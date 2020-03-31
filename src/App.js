import React from 'react';
import './App.scss';

export default function App() {
  return (
    <article className="App">
      <header>
        <h1>Drum machine</h1>
      </header>
      <section id="drum-machine">
        <div id="display">
          <p>Q</p>
        </div>
        <section className="drumpad-container">
          <div className="drum-pad">
            <p>Q</p>
            <audio src="#" className="clip" id=""></audio>
          </div>
          <div className="drum-pad">
            <p>W</p>
            <audio src="#" className="clip" id=""></audio>
          </div>
          <div className="drum-pad">
            <p>E</p>
            <audio src="#" className="clip" id=""></audio>
          </div>
          <div className="drum-pad">
            <p>A</p>
            <audio src="#" className="clip" id=""></audio>
          </div>
          <div className="drum-pad">
            <p>S</p>
            <audio src="#" className="clip" id=""></audio>
          </div>
          <div className="drum-pad">
            <p>D</p>
            <audio src="#" className="clip" id=""></audio>
          </div>
          <div className="drum-pad">
            <p>Z</p>
            <audio src="#" className="clip" id=""></audio>
          </div>
          <div className="drum-pad">
            <p>X</p>
            <audio src="#" className="clip" id=""></audio>
          </div>
          <div className="drum-pad">
            <p>C</p>
            <audio src="#" className="clip" id=""></audio>
          </div>
        </section>
      </section>
      <footer>
        <small>Sounds courtesy of Zapstan.com</small>
      </footer>
    </article>
  );
}
