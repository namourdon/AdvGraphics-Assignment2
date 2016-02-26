//Nashia Amourdon
//Last edited:25.02.2016
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
import Quaternion = THREE.Quaternion;
import PhongMaterial = THREE.MeshPhongMaterial;


//Custom Game Objects
import gameObject = objects.gameObject;

var scene: Scene;
var renderer: Renderer;
var camera: PerspectiveCamera;
var cameraZoom:PerspectiveCamera;
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
var sphereGeometry: SphereGeometry;
var sphereMaterial: PhongMaterial;
var sun: Mesh;
var fplanet: Mesh;
var splanet: Mesh;
var tplanet: Mesh;
var frplanet: Mesh;
var fiplanet: Mesh;
var quaternion;
var dirLight;
var hemiLight;
var moon: Mesh;
var secondMoon:Mesh;
var moonEmp: Object3D;
var fistemptyRotation: Object3D;
var secondPlanet: Object3D;
var thirdPlanet: Object3D;
var fourthPlanet: Object3D;
var fifthPlanet: Object3D;
var lightEmpty: Object3D;
var sMoonEmp:Object3D;

function init() {
    // Instantiate a new Scene object
    scene = new Scene();

    setupRenderer(); // setup the default renderer
	
    setupCamera(); // setup the camera
	
    // Add the sun to the Scene
    sphereGeometry = new SphereGeometry(8, 32, 32);

    sphereMaterial = new PhongMaterial({ map: THREE.ImageUtils.loadTexture('Content/Images/sun.jpg') });
    sphereMaterial.opacity = 0.1;
    //sphereMaterial.transparent= true;
    //sphereMaterial.map= THREE.ImageUtils.loadTexture('Stone03.jpg');
    sun = new gameObject(sphereGeometry, sphereMaterial, 0, 0, 0);
    scene.add(sun);
    console.log("Add the sun to the scene");
    
    //Add the first planet to the scene
    sphereGeometry = new SphereGeometry(7, 32, 32);
    sphereMaterial = new PhongMaterial({ map: THREE.ImageUtils.loadTexture('Content/Images/fourthPlanet.jpg') });
    fplanet = new gameObject(sphereGeometry, sphereMaterial, 20, 0, 1);
    fplanet.castShadow=true;
    scene.add(fplanet);
    console.log("Added the first planet to the scene");
    
    //empty object to hold the moon
    moonEmp = new Object3D();
    moonEmp.position.set(0, 0, 1);
    moonEmp.add(moon);
    console.log("Added empty object to the moon");
    scene.add(moonEmp);
    
    
    //Add the moon
    sphereGeometry = new SphereGeometry(2, 32, 32);
    sphereMaterial = new PhongMaterial({ map: THREE.ImageUtils.loadTexture
    ('Content/Images/moon.jpg', THREE.SphericalReflectionMapping) });
    moon = new gameObject(sphereGeometry, sphereMaterial, 10, 0, 1);
    fplanet.add(moon);
    console.log("Added a moon to the scene");
  
    //empty object to hold the moon and first planet
    fistemptyRotation = new Object3D();
    fistemptyRotation.position.set(0, 0, 0);
    fistemptyRotation.add(fplanet);
    fistemptyRotation.add(moonEmp);
    scene.add(fistemptyRotation);
    console.log("Added empty object for first planet rotation around the sun");
   
    //Add the second planet to the scene
    sphereGeometry = new SphereGeometry(3, 32, 32);
    sphereMaterial = new PhongMaterial({ map: THREE.ImageUtils.loadTexture('Content/Images/secondPlanet.jpg') });
    splanet = new gameObject(sphereGeometry, sphereMaterial, 30, 0, 20);
    scene.add(splanet);
    splanet.castShadow= true;
    console.log("Added the second planet to the scene");
    
    //Add the rotation to the Second Planet
    secondPlanet = new Object3D();
    secondPlanet.position.set(0, 0, 0);
    secondPlanet.add(splanet);
    scene.add(secondPlanet);
    
    //Add the third planet to the scene
    sphereGeometry = new SphereGeometry(4, 32, 32);
    sphereMaterial = new PhongMaterial({ map: THREE.ImageUtils.loadTexture('Content/Images/thirdPlanet.jpg') });
    tplanet = new gameObject(sphereGeometry, sphereMaterial, 35, 0, 25);
    scene.add(tplanet);
    console.log("Added the third planet to the scene");
    
    //Add a moon to the second planet
    sphereGeometry = new SphereGeometry(1, 32, 32);
    sphereMaterial = new PhongMaterial({ map: THREE.ImageUtils.loadTexture
    ('Content/Images/moon.jpg', THREE.SphericalReflectionMapping) });
    secondMoon = new gameObject(sphereGeometry, sphereMaterial, 5, 0, 1);
    tplanet.add(secondMoon);
    console.log("Added a moon to the scene");
    
    //Add the rotation to the third planet
    thirdPlanet = new Object3D();
    thirdPlanet.position.set(0, 0, 0);
    thirdPlanet.castShadow=true;
    thirdPlanet.add(tplanet);
    scene.add(thirdPlanet);
    
    //Add the fourth planet to the scene
    sphereGeometry = new SphereGeometry(3, 32, 32);
    sphereMaterial = new PhongMaterial({ map: THREE.ImageUtils.loadTexture('Content/Images/firstPlanet.jpg') });
    frplanet = new gameObject(sphereGeometry, sphereMaterial, 40, 0, 40);
    scene.add(frplanet);
    console.log("Added the fourth planet to the scene");
    
    //Add the rotation to the fourth planet
    fourthPlanet = new Object3D();
    fourthPlanet.position.set(0, 0, 0);
    fourthPlanet.castShadow= true;
    fourthPlanet.add(frplanet);
    scene.add(fourthPlanet);
    
    //Add the fifth planet to the scene
    sphereGeometry = new SphereGeometry(6, 32, 32);
    sphereMaterial = new PhongMaterial({ map: THREE.ImageUtils.loadTexture('Content/Images/fifthPlanet.jpg') });
    fiplanet = new gameObject(sphereGeometry, sphereMaterial, 45, 0, 50);
    scene.add(fiplanet);
    console.log("Added the fifth planet to the scene");
    
    //Add the rotation to the fourth planet
    fifthPlanet = new Object3D();
    fifthPlanet.position.set(0, 0, 0);
    fifthPlanet.castShadow= true;
    fifthPlanet.add(fiplanet);
    scene.add(fifthPlanet);
    
   
    // add an axis helper to the scene
    axes = new AxisHelper(10);
    scene.add(axes);
    console.log("Added Axis Helper to scene...");
    
    // Add an AmbientLight to the scene
   ambientLight = new AmbientLight(0x404040);
   scene.add(ambientLight);
    console.log("Added an Ambient Light to Scene");

    //Add empty objects for lights 
    //lightEmpty = new Object3D();
    //lightEmpty.position.set(8, 8, 8);
    //lightEmpty.add(hemiLight);
    //scene.add(lightEmpty);


    //    var lightEmpty2 = new Object3D();
    //  lightEmpty2.position.set(0, 0, 0);
    //lightEmpty2.add(spotLight2);
    //scene.add(lightEmpty2);

    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(8, 8, 8);
    //spotLight.position.set(10,1,1);
    spotLight.castShadow = true;
    spotLight.intensity = 10;
    scene.add(spotLight);

    var spotLight2 = new THREE.SpotLight(0xffffff);
    spotLight2.position.set(-8, -8, -8);
    spotLight2.castShadow = true;
    spotLight2.intensity = 3;
    scene.add(spotLight2)

    var spotLight3 = new THREE.SpotLight(0xffffff);
    spotLight3.position.set(-8, 8, -8);
    spotLight3.castShadow = true;
    spotLight3.intensity = 3;
    scene.add(spotLight3);

    var spotLight4 = new THREE.SpotLight(0xffffff);
    spotLight4.position.set(8, -8, 8);
    spotLight4.castShadow = true;
    spotLight4.intensity = 3;
    scene.add(spotLight4);

    var spotLight5 = new THREE.SpotLight(0xffffff);
    spotLight5.position.set(-8, -8, 8);
    spotLight5.castShadow = true;
    spotLight5.intensity = 3;
    scene.add(spotLight5);

    var spotLight6 = new THREE.SpotLight(0xffffff);
    spotLight6.position.set(8, 8, -8);
    spotLight6.castShadow = true;
    spotLight6.intensity = 3;
    scene.add(spotLight6);

    var spotLight7 = new THREE.SpotLight(0xffffff);
    spotLight7.position.set(8, -8, -8);
    spotLight7.castShadow = true;
    spotLight7.intensity = 3;
    scene.add(spotLight7);

    var spotLight8 = new THREE.SpotLight(0xffffff);
    spotLight8.position.set(-8, 8, 8);
    spotLight8.castShadow = true;
    spotLight8.intensity = 3;
    //spotLight3.decay = 5;
    //spotLight8.shadowMapWidth = 1024;
   // spotLight8.shadowMapHeight = 1024;
    //spotLight8.shadowCameraNear = 500;
    //spotLight8.shadowCameraFar = 4000;
   // spotLight8.shadowCameraFov = 30;
    scene.add(spotLight8);

    //var hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
   // hemiLight.color.setHSL(360, 100, 100);
    //hemiLight.groundColor.setHSL(0.095, 1, 0.75);
   // hemiLight.position.set(8, 8, 8);
    //scene.add(hemiLight);

    // add controls
    gui = new GUI();
    control = new Control(0.01);
    addControl(control);
    
    // Add framerate stats
    addStatsObject();
    console.log("Added Stats to scene...");
    document.body.appendChild(renderer.domElement);
    gameLoop(); // render the scene	
    window.addEventListener('resize', onResize, false);

}

function onResize(): void {
    camera.aspect = CScreen.RATIO;
    //camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
}

function addControl(controlObject: Control): void {
    gui.add(controlObject, 'rotationSpeed', -0.5, 0.5);
    gui.add(camera.position,'x',25,150);
    gui.add(camera.position,'y',0,75);
    gui.add(camera.position,'z',0,100);
    gui.add(controlObject,'zoomCameraIn');
    gui.add(controlObject,'zoomCameraOut');
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
    fplanet.rotation.y += control.rotationSpeed*3;
    moon.rotation.y += (control.rotationSpeed * 4);
    //rotation empty Object
    moonEmp.rotation.y += (control.rotationSpeed * 8);
    fistemptyRotation.rotation.y += (control.rotationSpeed );
    secondPlanet.rotation.y += (control.rotationSpeed * 2);
    thirdPlanet.rotation.y += control.rotationSpeed;
    fourthPlanet.rotation.y += (control.rotationSpeed / 2);
    fifthPlanet.rotation.y += (control.rotationSpeed / 5);
    // render using requestAnimationFrame
    requestAnimationFrame(gameLoop);
	
    // render the scene
    renderer.render(scene, camera);
}

// Setup default renderer
function setupRenderer(): void {
    renderer = new Renderer();
    //renderer.setClearColor(0xEEEEEE, 1.0);
    renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    console.log("Finished setting up Renderer...");
}

// Setup main camera for the scene
function setupCamera(): void {
    camera = new PerspectiveCamera(60, config.Screen.RATIO, 0.1, 1000);
    //camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    //Officiel:x=90,y=40,z=30
    //plus pres:30,30,0
    camera.position.x = 90;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(new Vector3(0, 0, 0));
    console.log("Finished setting up Camera...");
}
/*
function zoomCamera():void{
    cameraZoom= new PerspectiveCamera(60, config.Screen.RATIO,0.1,1000);
    cameraZoom.position.x= 40;
    cameraZoom.position.y=10;
    cameraZoom.position.z= 0;
    //camera.lookAt(fistemptyRotation);
    console.log("added zoomed camera");
}*/