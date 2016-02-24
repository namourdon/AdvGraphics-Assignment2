var config;
(function (config) {
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 1024;
        Screen.HEIGHT = 600;
        Screen.RATIO = 1.333333;
        return Screen;
    })();
    config.Screen = Screen;
})(config || (config = {}));

//# sourceMappingURL=screen.js.map
