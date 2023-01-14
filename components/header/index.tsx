import React from "react";
import style from "./style.module.css";
import * as THREE from "three";
import textureImg from "../../assets/texture_final.png"
import { motion } from "framer-motion"
export default function Header() {

  React.useEffect(() => {
    const canvas = document.getElementById("background") as HTMLCanvasElement;
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight);
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const scene = new THREE.Scene();
    // Change scene background color
    scene.background = new THREE.Color(0x282C34);
    const geometry_cube = new THREE.BoxGeometry(5, 5, 5);
    const geometry_cube_2 = new THREE.BoxGeometry(5, 5, 5);
    const geometry_pyramid = new THREE.ConeGeometry(5, 5, 4);
    // material is a png image
    const texture = new THREE.TextureLoader().load(textureImg.src);
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter; 
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const cube = new THREE.Mesh(geometry_cube, material);
    const sphere = new THREE.Mesh(geometry_cube_2, material);
    const pyramid = new THREE.Mesh(geometry_pyramid, material);
    const light = new THREE.PointLight(0xffffff, 1, 100);
    sphere.position.x = 10;
    sphere.position.y = 3;
    cube.position.x = -10;
    cube.position.y = -3;
    light.position.set(5,5,5);
    
    scene.add(cube);
    scene.add(sphere);
    scene.add(light);

    camera.position.z = 15;
    // Animate on scroll
    const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
        renderer.render(scene, camera);
    };
    
    animate();
    // Animate on scroll
    window.addEventListener("scroll", () => {
      cube.rotation.x += 0.04;
        cube.rotation.y += 0.04;
        sphere.rotation.x += 0.04;
        sphere.rotation.y += 0.04;
    });
    
  }, []);


  return (
    <div className={style.header}>
      <canvas id="background" className={style.background}></canvas>
      <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        Hi, I'm
        <span className={style.name}> David </span>
      </motion.h1>
    </div>
  );
}
