// import React, { useEffect } from "react"; 
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import "./designs/motionn.css";
// import logo from "../../public/vite.svg";
// import BlurText from "./BlurText.jsx";

// export default function Motionn() {
//   useEffect(() => {
//     const container = document.getElementById("globe-container");

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       45,
//       container.clientWidth / container.clientHeight,
//       0.1,
//       1000
//     );
//     camera.position.set(0, 0, 4);

//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(container.clientWidth, container.clientHeight);
//     renderer.setPixelRatio(window.devicePixelRatio);
//     container.appendChild(renderer.domElement);

//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;
//     controls.enableZoom = true;
//     controls.minDistance = 2;
//     controls.maxDistance = 8;

//     const loader = new THREE.TextureLoader();
//     const earthTexture = loader.load(
//       "https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg"
//     );
//     const bumpTexture = loader.load(
//       "https://threejs.org/examples/textures/earthbump1k.jpg"
//     );
//     const specularTexture = loader.load(
//       "https://threejs.org/examples/textures/earthspec1k.jpg"
//     );

//     const earthGeometry = new THREE.SphereGeometry(1, 64, 64);
//     const earthMaterial = new THREE.MeshPhongMaterial({
//       map: earthTexture,
//       bumpMap: bumpTexture,
//       bumpScale: 0.05,
//       specularMap: specularTexture,
//       specular: new THREE.Color("grey"),
//     });
//     const earth = new THREE.Mesh(earthGeometry, earthMaterial);
//     scene.add(earth);

//     const atmosphereMaterial = new THREE.ShaderMaterial({
//       vertexShader: `
//         varying vec3 vNormal;
//         void main() {
//           vNormal = normalize(normalMatrix * normal);
//           gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//         }
//       `,
//       fragmentShader: `
//         varying vec3 vNormal;
//         void main() {
//           float intensity = pow(0.6 - dot(vNormal, vec3(0, 0, 1.0)), 3.0);
//           gl_FragColor = vec4(0.2, 0.6, 1.0, 1.0) * intensity;
//         }
//       `,
//       blending: THREE.AdditiveBlending,
//       side: THREE.BackSide,
//     });
//     const atmosphere = new THREE.Mesh(
//       new THREE.SphereGeometry(1.1, 64, 64),
//       atmosphereMaterial
//     );
//     scene.add(atmosphere);

//     const ambientLight = new THREE.AmbientLight(0x333333);
//     scene.add(ambientLight);
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//     directionalLight.position.set(5, 3, 5);
//     scene.add(directionalLight);

//     const starGeometry = new THREE.BufferGeometry();
//     const starCount = 5000;
//     const starPositions = [];
//     for (let i = 0; i < starCount; i++) {
//       const x = (Math.random() - 0.5) * 2000;
//       const y = (Math.random() - 0.5) * 2000;
//       const z = (Math.random() - 0.5) * 2000;
//       starPositions.push(x, y, z);
//     }
//     starGeometry.setAttribute(
//       "position",
//       new THREE.Float32BufferAttribute(starPositions, 3)
//     );
//     const starMaterial = new THREE.PointsMaterial({
//       color: 0xffffff,
//       size: 0.7,
//     });
//     const stars = new THREE.Points(starGeometry, starMaterial);
//     scene.add(stars);

//     const animate = () => {
//       requestAnimationFrame(animate);
//       earth.rotation.y += 0.001;
//       controls.update();
//       renderer.render(scene, camera);
//     };
//     animate();

//     const handleResize = () => {
//       camera.aspect = container.clientWidth / container.clientHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(container.clientWidth, container.clientHeight);
//     };
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       container.removeChild(renderer.domElement);
//     };
//   }, []);

//   return (
//     <div className="motion-page">
//       <div className="content-container">
//         {/* Chapda card */}
//         <div className="info-card">
//           <img src={logo} alt="Logo" className="card-logo" />
//           <BlurText
//             text="Biz Navoiy Yoshlar TV"
//             delay={150}
//             animateBy="words"
//             direction="top"
//             className="card-title"
//           />
//           <p className="card-description">
//             Biz yoshlarning ovozimiz. <br />
//             Yangiliklar, qiziqarli shoular va madaniy dasturlar orqali <br />
//             sizlarga eng yaxshi kontentni taqdim etamiz. <br />
//             Kelajak yoshlar qo‘lida, biz esa ularni qo‘llab-quvvatlaymiz. <br />
//             Har bir ovoz biz uchun qadrli.
//           </p>
//           <button className="card-btn">Bizga qo‘shiling</button>
//         </div>

//         {/* O‘ngda globus */}
//         <div id="globe-container"></div>
//       </div>
//     </div>
//   );
// }














































// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import "./designs/motionn.css";
// import logo from "../../public/NYoTv.png";

// export default function Motionn() {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     const currentMount = mountRef.current;

//     // Scene
//     const scene = new THREE.Scene();

//     // Camera
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       currentMount.clientWidth / currentMount.clientHeight,
//       0.1,
//       1000
//     );
//     camera.position.z = 3;

//     // Renderer
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
//     renderer.setPixelRatio(window.devicePixelRatio);
//     currentMount.appendChild(renderer.domElement);

//     // Light
//     const ambientLight = new THREE.AmbientLight(0xffffff, 1);
//     scene.add(ambientLight);
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//     directionalLight.position.set(5, 3, 5);
//     scene.add(directionalLight);

//     // Globe texture
//     const textureLoader = new THREE.TextureLoader();
//     const globeTexture = textureLoader.load(
//       "https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg"
//     );

//     // Globe mesh
//     const globeGeometry = new THREE.SphereGeometry(1, 64, 64);
//     const globeMaterial = new THREE.MeshPhongMaterial({
//       map: globeTexture,
//     });
//     const globe = new THREE.Mesh(globeGeometry, globeMaterial);
//     scene.add(globe);

//     // Stars background
//     const starGeometry = new THREE.BufferGeometry();
//     const starCount = 2000;
//     const starPositions = new Float32Array(starCount * 3);
//     for (let i = 0; i < starCount * 3; i++) {
//       starPositions[i] = (Math.random() - 0.5) * 2000;
//     }
//     starGeometry.setAttribute(
//       "position",
//       new THREE.BufferAttribute(starPositions, 3)
//     );
//     const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });
//     const stars = new THREE.Points(starGeometry, starMaterial);
//     scene.add(stars);

//     // Controls
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;
//     controls.enableZoom = false;
//     controls.autoRotate = true;
//     controls.autoRotateSpeed = 0.5;

//     // Animate
//     const animate = () => {
//       requestAnimationFrame(animate);
//       controls.update();
//       renderer.render(scene, camera);
//     };
//     animate();

//     // Resize
//     const handleResize = () => {
//       camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
//     };
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       currentMount.removeChild(renderer.domElement);
//     };
//   }, []);

//   return (
//     <div className="motion-container">
//       <div className="content-wrapper">
//         <div className="globe" ref={mountRef}></div>

//         <div className="info-card">
//           <div className="electric-border">
//             <img src={logo} alt="Logo" className="card-logo" />
//             <h2 className="card-title">Biz haqimizda</h2>
//             <p className="card-desc">
//               Biz Navoiy Yoshlar TVmiz. Yoshlar uchun qiziqarli, foydali va
//               motivatsion kontentlar yaratamiz. Bizning maqsadimiz – yoshlarni
//               qo‘llab-quvvatlash, ularni yangi imkoniyatlarga ilhomlantirish.
//               Har doim yangilik va rivojlanishga intilamiz.
//             </p>
//             <button className="card-btn">Batafsil</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }













import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./designs/motionn.css";
import logo from "../../public/NYoTv.png";
import { useTranslation } from "react-i18next";

export default function Motionn() {
  const mountRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const currentMount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Globe texture
    const textureLoader = new THREE.TextureLoader();
    const globeTexture = textureLoader.load(
      "https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg"
    );

    // Globe mesh
    const globeGeometry = new THREE.SphereGeometry(1, 64, 64);
    const globeMaterial = new THREE.MeshPhongMaterial({
      map: globeTexture,
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    // Stars background
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 2000;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      starPositions[i] = (Math.random() - 0.5) * 2000;
    }
    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3)
    );
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="motion-container">
      <div className="content-wrapper">
        <div className="globe" ref={mountRef}></div>

        <div className="info-card">
          <div className="electric-border">
            <img src={logo} alt="Logo" className="card-logo" />
            <h2 className="card-title">{t("motion.title")}</h2>
            <p className="card-desc">{t("motion.description")}</p>
            
             <a href="https://s3.storage.servisoft.uz/navoi-council/Navoiy%20YoshlarTv.docx">
              <button className="card-btn">
                {t("motion.button")}
              </button>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}

