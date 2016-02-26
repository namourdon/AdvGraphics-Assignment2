/// <reference path="../../typings/tsd.d.ts"/>
//Nashia Amourdon
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
        Control.prototype.zoomCameraIn = function () {
            //camera = new THREE.PerspectiveCamera(60, config.Screen.RATIO, 0.1, 1000);
            camera.position.x = 40;
            camera.position.y = 10;
            camera.position.z = 0;
            camera.lookAt(new Vector3(0, 0, 0));
            console.log("added zoomed camera");
        };
        Control.prototype.zoomCameraOut = function () {
            camera.position.x = 90;
            camera.position.y = 40;
            camera.position.z = 30;
            camera.lookAt(new Vector3(0, 0, 0));
            console.log("Finished setting up Camera...");
        };
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));

//# sourceMappingURL=control.js.map
