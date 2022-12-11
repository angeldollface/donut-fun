/*
DONUT FUN by Alexander Abraham, a.k.a. "Angel Dollface".
Licensed under the MIT license.
*/

// Importing the three.js library.
import * as THREE from 'three';

// A function to render our rotating donut.
export function renderDonuts(): void {

    // The URL to our texture.
    const textureURL: string = 'https://angeldollface.art/assets/images/matcaps/05.png';

    // Instantiating a new three.js color.
    const sceneColor: THREE.Color = new THREE.Color(0xf0cce5);

    // Instantiating a new three.js perspective camera.
    const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
        90,
        window.innerWidth/window.innerHeight,
        0.01,
        1000
    );

    // Setting the X, Y, and Z position
    // of the camera. (X = horizontal pos.
    // Y = vertcial pos. Z = depth pos.)
    camera.position.set(0,0,2);

    // Instantiating a new three.js scene.
    const scene: THREE.Scene = new THREE.Scene();

    // We set the scene's background color to a light pink.
    scene.background = sceneColor;
    
    // Something has to render our scene.
    // We use the "standard" WebGL renderer.
    var renderer = new THREE.WebGLRenderer(
        {
          antialias: true
        }
    );

    // A loader to load a remote texture file.
    const textureLoader: THREE.TextureLoader = new THREE.TextureLoader();

    // Loading our remote texture from the URL above.
    const texture: THREE.Texture = textureLoader.load(textureURL);

    // Setting up our material for our meshes.
    const material: THREE.MeshMatcapMaterial = new THREE.MeshMatcapMaterial(
        {
            matcap: texture
        }
    );

    // Donut geometry.
    let donutGeometry: THREE.TorusGeometry = new THREE.TorusGeometry(
        1, 0.3, 30, 200
    );

    // First donut.
    let torusMeshOne: THREE.Mesh = new THREE.Mesh(donutGeometry, material);

    // Setting the horizontal position
    // of the donut.
    torusMeshOne.position.x = 0;

    // Setting the vertical position
    // of the donut.
    torusMeshOne.position.y = 0;

    // Setting the depth position
    // of the donut.
    torusMeshOne.position.y = 0;

    // Adding the first donut to the scene.
    scene.add(torusMeshOne);

    // We set the width of and height of the renderer.
    renderer.setSize(window.innerWidth, window.innerHeight);

    // We add the renderer to the document.
    document.body.appendChild(renderer.domElement);

    // Defining a render loop function.
    const frameUpdate = () => {

        // Updating the scene on every frame bounce.
        window.requestAnimationFrame(frameUpdate);

        // Rotating horizontally the donut 
        // on every frame bounce.
        torusMeshOne.rotation.x += 0.01;

        // Rotating vertically the donut 
        // on every frame bounce.
        torusMeshOne.rotation.y += 0.01;

        // Re-rendering the scene
        // on every frame bounce.
        renderer.render(scene, camera);
    }

    // Calling our render loop function.
    frameUpdate();
    
}

export default renderDonuts;