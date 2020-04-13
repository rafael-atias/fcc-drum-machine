import React, { useState } from 'react';
import Display from "./Display";
import Drumpad from "./Drumpad";
import drumpadData from "./drumpadData";

export default function App() {
  const [displayContent, setDisplayContent] = useState("");

  const clickHandler = function (event) {
    const isADrumpad = function (event) {
      return event.target.className === "drum-pad" || event.target.parentElement.className === "drum-pad";
    }

    if (isADrumpad(event) === false) {
      return;
    }

    setDisplayContent(event.target.textContent);
  };
  return (
    <article className="App">
      <header>
        <h1>Drum machine</h1>
      </header>
      <section data-testid="drum-machine" id="drum-machine">
        <Display text={displayContent} />
        <section className="drumpad-container"
          onClick={clickHandler} >
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
