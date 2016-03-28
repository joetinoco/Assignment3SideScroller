var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
var scenes;
(function (scenes) {
    var Instructions = (function (_super) {
        __extends(Instructions, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Instructions() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Instructions.prototype.start = function () {
            // Add background
            this._background = new createjs.Bitmap(assets.getResult('instructionsscreen'));
            this.addChild(this._background);
            // add the Start button to the MENU scene
            this._backButton = new objects.Button("BackButton", config.Screen.CENTER_X - 200, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._backButton);
            // Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // Scene updates here
        Instructions.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        Instructions.prototype._backButtonClick = function (event) {
            // Switch to the MENU Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return Instructions;
    }(objects.Scene));
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));

//# sourceMappingURL=instructions.js.map
