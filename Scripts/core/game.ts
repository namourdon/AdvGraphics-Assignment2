/// <reference path="_reference.ts"/>

// MAIN GAME FILE

// THREEJS Aliases
import Scene = THREE.Scene;
import Renderer = THREE.WebGLRenderer;
import PerspectiveCamera = THREE.PerspectiveCamera;
import BoxGeometry = THREE.BoxGeometry;
import CubeGeometry = THREE.CubeGeometry;
import PlaneGeometry = THREE.PlaneGeometry;
import SphereGeometry = THREE.SphereGeometry;
import Geometry = THREE.Geometry;
import AxisHelper = THREE.AxisHelper;
import LambertMaterial = THREE.MeshLambertMaterial;
import MeshBasicMaterial = THREE.MeshBasicMaterial;
import Material = THREE.Material;
import Mesh = THREE.Mesh;
import Object3D = THREE.Object3D;
import SpotLight = THREE.SpotLight;
import PointLight = THREE.PointLight;
import AmbientLight = THREE.AmbientLight;
import Control = objects.Control;
import GUI = dat.GUI;
import Color = THREE.Color;
import Vector3 = THREE.Vector3;
import Face3 = THREE.Face3;
import Point = objects.Point;
import CScreen = config.Screen;
import Quaternion= THREE.Quaternion;
import PhongMaterial= THREE.MeshPhongMaterial;


//Custom Game Objects
import gameObject = objects.gameObject;

var scene: Scene;
var renderer: Renderer;
var camera: PerspectiveCamera;
var axes: AxisHelper;
//var cube: Mesh;
var plane: Mesh;
var sphere: Mesh;
var ambientLight: AmbientLight;
var spotLight: SpotLight;
var control: Control;
var gui: GUI;
var stats: Stats;
var step: number = 0;
//var cubeGeometry:CubeGeometry;
//var cubeMaterial:LambertMaterial;
var sphereGeometry:SphereGeometry;
var sphereMaterial:PhongMaterial;
var sun:Mesh;
var fplanet:Mesh;
var splanet:Mesh;
var tplanet:Mesh;
var frplanet:Mesh;
var fiplanet:Mesh;
var quaternion;


function init() {
    // Instantiate a new Scene object
    scene = new Scene();

    setupRenderer(); // setup the default renderer
	
    setupCamera(); // setup the camera
	
    // Add the sun to the Scene
    sphereGeometry= new SphereGeometry(6,32,32);
    sphereMaterial= new PhongMaterial({map:THREE.ImageUtils.loadTexture('Content/Images/sun.jpg', THREE.SphericalReflectionMapping)});
    //sphereMaterial.map= THREE.ImageUtils.loadTexture('Stone03.jpg');
    sun = new gameObject(sphereGeometry,sphereMaterial,10,2,1);
    scene.add(sun);
    console.log("Add the sun to the scene");
    
    //Add the first planet to the scene
    sphereGeometry= new SphereGeometry(4,32,32);
    sphereMaterial= new PhongMaterial({map:THREE.ImageUtils.loadTexture('Content/Images/firstPlanet.jpg',THREE.SphericalReflectionMapping)});
    fplanet= new gameObject(sphereGeometry,sphereMaterial,30,20,1);
    scene.add(fplanet);
    console.log("Added the first planet to the scene");
    
      //Add the second planet to the scene
    sphereGeometry= new SphereGeometry(2,32,32);
    sphereMaterial= new PhongMaterial({map:THREE.ImageUtils.loadTexture('Content/Images/secondPlanet.jpg',THREE.SphericalReflectionMapping)});
    splanet= new gameObject(sphereGeometry,sphereMaterial,30,1,2);
    scene.add(splanet);
    console.log("Added the second planet to the scene");
    
    //Add the third planet to the scene
    sphereGeometry= new SphereGeometry(5,32,32);
    sphereMaterial= new PhongMaterial({map:THREE.ImageUtils.loadTexture('Content/Images/thirdPlanet.jpg',THREE.SphericalReflectionMapping)});
    tplanet= new gameObject(sphereGeometry,sphereMaterial,-35,10,0);
    scene.add(tplanet);
    console.log("Added the third planet to the scene");
    
    //Add the fourth planet to the scene
    sphereGeometry= new SphereGeometry(5,32,32);
    sphereMaterial= new PhongMaterial({map:THREE.ImageUtils.loadTexture('Content/Images/fourthPlanet.jpg',THREE.SphericalReflectionMapping)});
    frplanet= new gameObject(sphereGeometry,sphereMaterial,-10,3.5,1);
    scene.add(frplanet);
    console.log("Added the fourth planet to the scene");
    
    //Add the fifth planet to the scene
    sphereGeometry= new SphereGeometry(5,32,32);
    sphereMaterial= new PhongMaterial({map:THREE.ImageUtils.loadTexture('Content/Images/fifthPlanet.jpg',THREE.SphericalReflectionMapping)});
    fiplanet= new gameObject(sphereGeometry,sphereMaterial,10,20,1);
    scene.add(fiplanet);
    console.log("Added the fifth planet to the scene");
    
    // add an axis helper to the scene
    axes = new AxisHelper(10);
    scene.add(axes);
    console.log("Added Axis Helper to scene...");
    
    // Add an AmbientLight to the scene
    ambientLight = new AmbientLight(0x090909);
    scene.add(ambientLight);
    console.log("Added an Ambient Light to Scene");
	
    // Add a SpotLight to the scene
    spotLight = new SpotLight(0xffffff);
    spotLight.position.set(50,40, 5.4);
    spotLight.rotation.set(-0.8, 42.7, 19.5);
    spotLight.castShadow = true;
    scene.add(spotLight);
    console.log("Added a SpotLight Light to Scene");
    
    // add controls
    gui = new GUI();
    control = new Control(0.05);
    addControl(control);
    

    // Add framerate stats
    addStatsObject();
    console.log("Added Stats to scene...");

    document.body.appendChild(renderer.domElement);
    gameLoop(); // render the scene	
    
    window.addEventListener('resize', onResize, false);
    //test
  // quaternion.setFromAxisAngle((0,2,0),Math.PI/2);
   //sun.applyQuaternion(quaternion);
}

function onResize(): void {
    camera.aspect = CScreen.RATIO;
    //camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
}

function addControl(controlObject: Control): void {
    gui.add(controlObject, 'rotationSpeed',-0.5,0.5);
}

function addStatsObject() {
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
}

// Setup main game loop
function gameLoop(): void {
    stats.update();

   //cube.rotation.y += control.rotationSpeed;
   //sun.rotation.y+=control.rotationSpeed;
   fplanet.rotation.y+=control.rotationSpeed;
    
    // render using requestAnimationFrame
    requestAnimationFrame(gameLoop);
	
    // render the scene
    renderer.render(scene, camera);
}

// Setup default renderer
function setupRenderer(): void {
    renderer = new Renderer();
    renderer.setClearColor(0xEEEEEE, 1.0);
    renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    console.log("Finished setting up Renderer...");
}

// Setup main camera for the scene
function setupCamera(): void {
    camera = new PerspectiveCamera(45, config.Screen.RATIO, 0.1, 1000);
    //camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = 75;
    camera.position.y = 40;
    camera.position.z = 25;
    camera.lookAt(new Vector3(0, 0, 0));
    console.log("Finished setting up Camera...");
}
