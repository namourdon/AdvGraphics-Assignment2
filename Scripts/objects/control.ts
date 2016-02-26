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
        public zoomCameraIn(): void {
            //camera = new THREE.PerspectiveCamera(60, config.Screen.RATIO, 0.1, 1000);
            camera.position.x = 40;
            camera.position.y = 10;
            camera.position.z = 0;
            camera.lookAt(new Vector3(0, 0, 0));
            console.log("added zoomed camera");

        }
        
        public zoomCameraOut():void{
            camera.position.x = 90;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(new Vector3(0, 0, 0));
    console.log("Finished setting up Camera...");
        }
    }


}
}
