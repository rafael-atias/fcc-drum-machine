import React, { useState } from 'react';
import Display from "./Display";
import Drumpad from "./Drumpad";
import Audio from "./Audio";
import drumpadData from "./drumpadData";

const clickHandler = function (stateUpdater) {
  const wasDrumpadClicked = function (target) {
    return target.className === "drum-pad" || target.parentElement.className === "drum-pad";
  }

  const getTheDrumpadsAudio = function (target) {
    return target.className === "drum-pad" ?
      target.firstElementChild.nextElementSibling :
      target.parentElement.firstElementChild.nextElementSibling;
  };

  return function (event) {
    const target = event.target;

    if (wasDrumpadClicked(target) === false) {
      return;
    }

    getTheDrumpadsAudio(target).play()
    // .then(function () { 

    // })
    stateUpdater(target.textContent);
  };
};

export default function App() {
  const [displayContent, setDisplayContent] = useState("");

  return (
    <article className="App">
      <header>
        <h1>Drum machine</h1>
      </header>
      <section data-testid="drum-machine" id="drum-machine">
        <Display text={displayContent} />
        <section className="drumpad-container"
          onClick={clickHandler(setDisplayContent)} >
          {
            drumpadData()
              .map(function (props, index) {
                const audio = (
                  <Audio
                    src={props.audioSrc}
                    id={props.textContent}
                    data-testid={props.textContent}
                  />
                );
                return <Drumpad
                  key={`${props.id}${index}`}
                  id={props.id}
                  textContent={props.textContent}
                  audio={audio}
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
