/// <reference path="../../typings/tsd.d.ts"/>
//Nashia Amourdon

module objects {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Control { 
        //PUBLIC INSTANCE VARIABLES +++++++++++++++++++++++++++
        public rotationSpeed: number;
        //public cameraZoom:PerspectiveCamera;
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(rotationSpeed: number) {
            this.rotationSpeed = rotationSpeed;
        }
        
        
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
       
        public zoomCameraOut(): void {
            camera = new PerspectiveCamera(60, config.Screen.RATIO, 0.1, 1000);
            camera.position.x = 90;
            camera.position.y = 40;
            camera.position.z = 10;
            camera.lookAt(new Vector3(0, 0, 0));
            console.log("Finished setting up Camera...");
            scene.add(camera);
        }
        public zoomCameraIn():void{
            camera = new PerspectiveCamera(60, config.Screen.RATIO, 0.1, 1000);
            camera.position.x = 40;
            camera.position.y = 10;
            camera.position.z = 0;
            camera.lookAt(new Vector3(1, 1, 0));
            console.log("Finished setting up Camera...");
            fistemptyRotation.add(camera);
        }
       
        public zoomFourthPlanet():void{
            camera = new PerspectiveCamera(60, config.Screen.RATIO, 0.1, 1000);
            camera.position.x = 56;
            camera.position.y = 6;
            camera.position.z = 55;
            camera.lookAt(new Vector3(1, 1, 0));
            console.log("Finished setting up Camera...");
            //cameraFollow = new Object3D();
            //cameraFollow.position.set(0, 0, 0);
           // cameraFollow.add(camera);
            fourthPlanet.add(camera);
        }
        


}

