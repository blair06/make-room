import React, { useState, useMemo } from "react";
import "aframe";
import "aframe-room-component";
import "aframe-gltf-helpers";
import button1 from "./assets/button_emergance/scene.gltf";
import sky from "./assets/sky.jpg";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Automaking = () => {
  const [gltf, set] = useState();
  useMemo(() => new GLTFLoader().load(button1, set), [button1]);
  let isClicked = false;
  let interval = null;
  function makeSphere() {
    const scene = document.querySelector("a-scene");

    const x = (Math.random() - 0.5) * 10.5;
    const y = Math.random() + 1;
    const z = (Math.random() - 0.5) * 10.5 - 4;

    const attributes = ["position", "radius", "color", "animation"];
    const values = [
      `${x} ${y} ${z}`,
      1,
      `#${Math.round(Math.random() * 0xffffff).toString(16)}`,
      "property: object3D.position.y; to: -3; dir: alternate; dur: 1000; loop: true",
    ];

    const sphere = document.createElement("a-sphere");

    for (let i = 0; i < 4; i++) {
      sphere.setAttribute(attributes[i], values[i]);
    }
    scene.appendChild(sphere);
  }

  const onClickEvent = (evt) => {
    console.log("start");
    isClicked = !isClicked;

    if (isClicked) {
      interval = setInterval(makeSphere, 1000);
    } else {
      clearInterval(interval);
    }
  };
  return (
    <a-scene>
      <a-assets>
        <a-asset-item id="button" response-type="arraybuffer" src={button1} />
      </a-assets>
      {/* <a-entity
        position="0 -4 8"
        rotation="0 0 90"
        cursor-event
        scale="0.3 0.3 0.3"
        onClick={() => ClickEvent()}
      ></a-entity> */}
      {/* <a-entity
        gltf-part-plus="src: #button; part: SM3D_Bld_Mixed_Corner_4fl;"
        model-center
        anisotropy
      ></a-entity> */}

      <a-cylinder color="#ff9999" onClick={(e) => onClickEvent(e)}></a-cylinder>
      <a-sky src={sky}></a-sky>
      {/* <a-sky color="black"></a-sky> */}
      {/* <a-light position="0 0 15"></a-light> */}
      <a-camera position="0 0 14">
        <a-cursor color="red"></a-cursor>
      </a-camera>
    </a-scene>
  );
};

export default Automaking;
