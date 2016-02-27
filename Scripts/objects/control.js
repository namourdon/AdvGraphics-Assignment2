/// <reference path="../../typings/tsd.d.ts"/>
//Nashia Amourdon
//Last modified:26.02.2016
var objects;
(function (objects) {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Control = (function () {
        //public cameraZoom:PerspectiveCamera;
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Control(rotationSpeed) {
            this.rotationSpeed = rotationSpeed;
        }
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
        Control.prototype.zoomCameraOut = function () {
            camera = new PerspectiveCamera(60, config.Screen.RATIO, 0.1, 1000);
            camera.position.x = 90;
            camera.position.y = 40;
            camera.position.z = 10;
            camera.lookAt(new Vector3(0, 0, 0));
            console.log("Finished setting up Camera...");
            scene.add(camera);
        };
        Control.prototype.zoomCameraIn = function () {
            camera = new PerspectiveCamera(60, config.Screen.RATIO, 0.1, 1000);
            camera.position.x = 40;
            camera.position.y = 10;
            camera.position.z = 0;
            camera.lookAt(new Vector3(1, 1, 0));
            console.log("Finished setting up Camera...");
            fistemptyRotation.add(camera);
        };
        Control.prototype.zoomFourthPlanet = function () {
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
        };
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));

//# sourceMappingURL=control.js.map
