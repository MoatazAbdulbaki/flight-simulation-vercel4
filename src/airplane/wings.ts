import * as THREE from "three";
import TrapezoidGeometry from "../trapezoid";
import TriangleGeometry from "../triangle";
import { degreesToRadians, radiansToDegrees } from "../utils";
import { mainTexture, MAIN_SIDE_WINGS_MAX_ROTATION_ANGLE } from "./constants";
import Engine from "./engine";

const leftWingPart1 = new TrapezoidGeometry(
  9,
  5.5,
  10,
  0.5,
  new THREE.MeshStandardMaterial({
    color: "#fff",
    roughness: 0.5,
    metalness: 0.5,
  }),
  new THREE.Vector3(10, 0, 5.29),
  new THREE.Euler(-190.05, 0, 0)
);

const leftWingPart2 = new TriangleGeometry(
  [18, 10, 6.5],
  [Math.PI / 2, 1.7, Math.PI / 3],
  0.5,
  new THREE.Vector3(7.2, -0.25, 10.3),
  new THREE.Euler(degreesToRadians(-90), 0, degreesToRadians(-70)),
  new THREE.Vector3(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: mainTexture })
);

const leftEngine = new Engine(
  2,
  1,
  new THREE.Vector3(12, -2, -8),
  new THREE.Euler(0, 0, Math.PI / 2),
  new THREE.Vector3(0.7, 0.7, 0.7)
);

export const AirplaneLeftWing = new THREE.Group();
AirplaneLeftWing.add(
  leftWingPart1.getMesh(),
  leftWingPart2.getMesh(),
  leftEngine.getMesh()
);

const rightWingPart1 = new TrapezoidGeometry(
  5.5,
  9,
  10,
  0.5,
  new THREE.MeshStandardMaterial({
    color: "#fff",
    roughness: 0.5,
    metalness: 0.5,
  }),
  new THREE.Vector3(10, 0.15, -5.29),
  new THREE.Euler(-190.05, 0, 0)
);

const rightWingPart2 = new TriangleGeometry(
  [18, 10, 6.5],
  [Math.PI / 2, -1.7, Math.PI / 3],
  0.5,
  new THREE.Vector3(7.2, 0, -10.3),
  new THREE.Euler(degreesToRadians(-90), 0, degreesToRadians(70)),
  new THREE.Vector3(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: mainTexture })
);

const rightEngine = new Engine(
  2,
  1,
  new THREE.Vector3(14, -2, 14),
  new THREE.Euler(0, 0.5, Math.PI / 2),
  new THREE.Vector3(0.7, 0.7, 0.7)
);

export const AirplaneRightWing = new THREE.Group();
AirplaneRightWing.add(
  rightWingPart1.getMesh(),
  rightWingPart2.getMesh(),
  rightEngine.getMesh()
);

export function moveMailSideWings(value: number) {
  console.log(radiansToDegrees(rightWingPart1.getMesh().rotation.y));
  if (
    value > 0 &&
    leftWingPart1.getMesh().rotation.y <
      degreesToRadians(MAIN_SIDE_WINGS_MAX_ROTATION_ANGLE)
  ) {
    leftWingPart1.getMesh().rotateY(value);
    rightWingPart1.getMesh().rotateY(value);
  }
  if (
    value < 0 &&
    leftWingPart1.getMesh().rotation.y >
      degreesToRadians(-MAIN_SIDE_WINGS_MAX_ROTATION_ANGLE)
  ) {
    leftWingPart1.getMesh().rotateY(value);
    rightWingPart1.getMesh().rotateY(value);
  }
}
