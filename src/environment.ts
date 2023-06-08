import * as THREE from "three";
import { camera, controls, gui, renderer, scene, sizes, MainAnimationLoop, } from "./init";

export function drawSkybox() {
    const front = new THREE.TextureLoader().load("assets/textures/front2.bmp");
    const back = new THREE.TextureLoader().load("assets/textures/back2.bmp");
    const left = new THREE.TextureLoader().load("assets/textures/left2.bmp");
    const right = new THREE.TextureLoader().load("assets/textures/right2.bmp");
    const top = new THREE.TextureLoader().load("assets/textures/top2.bmp");
    const bottom = new THREE.TextureLoader().load("assets/textures/bottom2.bmp");

    const geometry = new THREE.BoxGeometry(1000, 1000, 1000);
    const material = [
        new THREE.MeshBasicMaterial({ map: front, side: THREE.BackSide }),
        new THREE.MeshBasicMaterial({ map: back, side: THREE.BackSide }),
        new THREE.MeshBasicMaterial({ map: top, side: THREE.BackSide }),
        new THREE.MeshBasicMaterial({ map: bottom, side: THREE.BackSide }),
        new THREE.MeshBasicMaterial({ map: left, side: THREE.BackSide }),
        new THREE.MeshBasicMaterial({ map: right, side: THREE.BackSide }),
    ];

    const skybox = new THREE.Mesh(geometry, material);
    scene.add(skybox);
}
export function drawFloor(x: number, y: number, z: number, texture: string, repeatX: number, repeatY: number) {

    const floorTexture = new THREE.TextureLoader().load(texture);
    floorTexture.repeat.x = repeatX;
    floorTexture.repeat.y = repeatY;
    floorTexture.wrapS = THREE.RepeatWrapping
    floorTexture.wrapT = THREE.RepeatWrapping

    const floorGeometry = new THREE.BoxGeometry(x, y, z);
    const floorMaterial = new THREE.MeshBasicMaterial({
        side: THREE.BackSide,
        map: floorTexture
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    scene.add(floor);
    return floor;
}
export function drawTunnel() {
    const geometry = new THREE.BoxGeometry(30, 20, 100);
    const material = new THREE.MeshBasicMaterial({ color: 0xF23412, side: THREE.DoubleSide })
    const tunnel = new THREE.Mesh(geometry, material);
    scene.add(tunnel);
}

export function light() {
    const light = new THREE.PointLight(0xFFFFFF, 1);
    light.position.set(0, 0, 0);
    scene.add(light);
}