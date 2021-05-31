import "aframe";
import "aframe-room-component";
import React from "react";
import "./App.css";

function App() {
  return (
    <a-scene>
      {/* <a-light type="ambient" position="1 1 1"></a-light> */}
      <a-camera id="camera" position="0 0 10"></a-camera>
      <a-gltf-model src="./assets/scene.gltf"></a-gltf-model>
      <a-box
        position="0 0 0"
        color="rgb(255, 204, 153)"
        width="20"
        height="10"
      ></a-box>
      <a-box
        position="10 0 10"
        rotation="0 90 0"
        color="rgb(255, 204, 204)"
        width="20"
        height="10"
      ></a-box>
      <a-box
        position="-10 0 10"
        rotation="0 90 0"
        color="rgb(179, 179, 255)"
        width="20"
        height="10"
      ></a-box>
      <a-box
        position="0 0 20"
        color="rgb(255, 204, 153)"
        width="20"
        height="10"
      ></a-box>
      {/* floor */}
      <a-box
        position="0 5 10"
        color="rgb(255, 204, 153)"
        rotation="90 0 0"
        width="20"
        height="20"
      ></a-box>
      <a-box
        position="0 -5 10"
        color="rgb(255, 191, 128)"
        rotation="90 0 0"
        width="20"
        height="20"
      ></a-box>
    </a-scene>
  );
}

export default App;
