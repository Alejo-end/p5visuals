

import p5 from "p5";
import React from "react";
import Sketch from "react-p5";


const App: React.FC = () => {

  // See annotations in JS for more information
  function setup(p5: p5, canvasParentRef: Element) {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
  }

  function draw(p5: p5) {
    p5.fill(p5.random(75), p5.random(0), p5.random(45));
    p5.ellipse(p5.mouseX, p5.mouseY, 50, 50);

    /* for (let i = 0; i < 10; i++) {
      p5.ellipse(p5.random(p5.width), p5.random(p5.height), 50, 50);
    } */
    /* if (y > p5.height) direction = '';
    if (y < 0) {
      direction = '^';
    }
    if (direction === '^') y +=` 8;
    else y -= 4; */
  }

  function windowResized(p5: p5) {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  }

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};

export default App;