import * as THREE from "three";
import { AirplaneTail, moveCenterTailWing, moveSideTailWings } from "./tail";
import {
  AirplaneLeftWing,
  AirplaneRightWing,
  moveMailSideWings,
} from "./wings";
import { AirplaneBody } from "./body";

export const Airplane = new THREE.Group();

// control plane
window.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowRight":
      moveCenterTailWing(0.1);
      break;
    case "ArrowLeft":
      moveCenterTailWing(-0.1);
      break;
    case "ArrowUp":
      moveSideTailWings(0.01);
      moveMailSideWings(0.01);
      break;
    case "ArrowDown":
      moveSideTailWings(-0.01);
      moveMailSideWings(-0.01);
      break;
  }
});

Airplane.add(AirplaneBody, AirplaneLeftWing, AirplaneRightWing, AirplaneTail);
