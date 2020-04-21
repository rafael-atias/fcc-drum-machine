import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { activateDrumpad } from "../redux/reduxHelpers";
import Display from "./Display";
import Drumpad from "./Drumpad";
import Audio from "./Audio";
import drumpadData from "../helpers/drumpadData";
import { keyHandler } from "../helpers/keyHandler";
import { clickHandler as cHandler } from "../helpers/clickHandler";

export default function App() {
  const displayContent = useSelector(function (state) {
    return state;
  });

  const dispatch = useDispatch();

  const setDisplayContent = function (text) {
    return dispatch(activateDrumpad(text));
  };

  const [clickHandler, keyUpHandler] = [
    cHandler,
    keyHandler
  ].map(function (handler) {
    return handler(setDisplayContent);
  });

  useEffect(function () {
    document.addEventListener("keyup", keyUpHandler);
  });

  return (
    <article className="App">
      <header>
        <h1>Drum machine</h1>
      </header>
      <section data-testid="drum-machine" id="drum-machine">
        <Display text={displayContent} />
        <section className="drumpad-container"
          onClick={clickHandler}>
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
