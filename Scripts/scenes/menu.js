var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Menu.prototype.start = function () {
            // Add background
            this._background = new createjs.Bitmap(assets.getResult('titlescreen'));
            this.addChild(this._background);
            // add the Start button to the MENU scene
            this._startButton = new objects.Button("StartButton", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._startButton);
            // add the 'instructions' button to the menu scene
            this._instructionsButton = new objects.Button("InstructionsButton", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._instructionsButton);
            // Event listeners
            this._startButton.on("click", this._startButtonClick, this);
            this._instructionsButton.on("click", this._instructionsButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Menu.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        Menu.prototype._startButtonClick = function (event) {
            scene = config.Scene.PLAY;
            changeScene();
        };
        Menu.prototype._instructionsButtonClick = function (event) {
            scene = config.Scene.INSTRUCTIONS;
            changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));

//# sourceMappingURL=menu.js.map
