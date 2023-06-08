import * as THREE from "three";
import { Airplane } from "./airplane";
import {
  camera,
  controls,
  gui,
  renderer,
  scene,
  sizes,
  MainAnimationLoop,
} from "./init";
import { mainAmbientLights } from "./lights/mainAmbient";
import { mainDirectionalLights } from "./lights/mainDirectional";
import { drawFloor, drawSkybox } from "./environment";

// light();
drawSkybox();
drawFloor(498, 0, 1000, "assets/textures/ground.bmp", 300, 300).position.set(-249.5, 0, 0);
drawFloor(1, 0, 1000, "assets/textures/road-texture2.jpeg", 1, 400).position.set(0, 0, 0);
drawFloor(498, 0, 1000, "assets/textures/ground.bmp", 300, 300).position.set(+249.5, 0, 0);
// drawTunnel();

scene.add(mainAmbientLights, mainDirectionalLights);
Airplane.scale.set(0.02, 0.02, 0.02);

Airplane.position.setY(0.1);
Airplane.position.setX(0);
Airplane.rotateY(1.5)

scene.add(Airplane);
MainAnimationLoop();
