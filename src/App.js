import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt ME"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "Havanese",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Pepper",
  //     animal: "Bird",
  //     breed: "Cockateil",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Doink",
  //     animal: "Cat",
  //     breed: "Mixed",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Tommy",
  //     animal: "Dog",
  //     breed: "Mixed",
  //   }),
  // ]);

  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name = "Luna" animal = "Dog" breed ="Havanese" />
      <Pet name = "Pepper" animal = "Bird" breed ="Cockateil" />
      <Pet name = "Doink" animal = "Cat" breed ="Mixed" />
    </div>
  )
};

render(<App/>, document.getElementById("root"));
