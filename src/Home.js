
import { useEffect } from 'react';
import './App.css';

import * as THREE from 'three'
import gsap from 'gsap'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import Stats from 'three/examples/jsm/libs/stats.module'


function Home() {


  useEffect(() => {

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)

    const geometry = new THREE.SphereGeometry(19, 30, 16)

    const material = new THREE.MeshBasicMaterial(
      {
        color: "rgba(0,0,180,.2)",
        wireframe: true,
        roughness: 0.2
      }
    )

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000

    )

    camera.position.z = 50

    scene.add(camera)


    const ambientLight = new THREE.AmbientLight(0x00ff00)
    scene.add(ambientLight)


    const light = new THREE.DirectionalLight(0x009900, 1)
    light.position.set(5, 3, 5)
    scene.add(light)

    //WIREFRAME AND LINE
    //const wireframe = new THREE.WireframeGeometry(geometry)

    // const line = new THREE.LineSegments(wireframe)
    // line.material.color.setHex(0x0000f9)
    // scene.add(line)

    const sphere = new THREE.Mesh(geometry, material)
    scene.add(sphere)

    const canvas = document.querySelector(".cvs")
    const renderer = new THREE.WebGLRenderer({ canvas })

    renderer.setPixelRatio(devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)

    // renderer.render(scene, camera)

    document.body.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, canvas)

    controls.enableDamping = true
    controls.enablePan = false
    controls.enableRotate = true
    controls.enableZoom = false

    function Animate() {

      requestAnimationFrame(Animate)
      renderer.render(scene, camera)

      //SPHERE ROTATE
      //sphere.rotation.z += 0.01
      // sphere.rotation.x += 0.005
      // sphere.rotation.y += 0.009

      controls.update()

     const t1 = gsap.timeline({ defaults: { duration: 1 } })
   //  t1.fromTo(sphere.scale, { z: 0, x: 0, y: 0 }, { z: 20, x: 20, y: 20 })
     //t1.fromTo("nav", { y: "-100%" }, { y: "40%" })

    }

    Animate()



    window.addEventListener("resize", WindowResize)

    function WindowResize() {

      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()

      renderer.setSize(window.innerWidth, window.innerHeight)

    }

    controls.screenSpacePanning = true

  }, [])



  return (
    <div className="App">

      {/* <nav>

        <h3>Wisdom-<span>Samuel</span></h3>

        <div className='routes'>
          <div> <a href='/'>Home</a></div>
          <div> <a href='#about'>About</a></div>
          <div> <a href='#'> Works</a></div>
        </div>

        <button>Connect</button>

      </nav> */}

      <canvas className='cvs'> </canvas>

    </div>

  );
}

export default Home;
