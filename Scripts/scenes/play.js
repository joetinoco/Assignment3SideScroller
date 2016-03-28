var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            // Set bird flock count
            this._flockCount = 3;
            // Instantiate Cloud array
            this._birds = new Array();
            // add sky to the scene
            this._sky = new objects.Sky();
            this.addChild(this._sky);
            // add ground to the scene
            this._ground = new objects.Ground();
            this.addChild(this._ground);
            // add extinguisher to the scene
            this._extinguisher = new objects.Extinguisher();
            this.addChild(this._extinguisher);
            // add player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            // add birds to the scene
            for (var flock = 0; flock < this._flockCount; flock++) {
                this._birds[flock] = new objects.Birds();
                this.addChild(this._birds[flock]);
            }
            // add collision manager to the scene
            this._collision = new managers.Collision(this._player);
            // add labels
            this._damageLabel = new objects.Label("Damage: ", "15px Consolas", "#000000", 10, 10, false);
            this._distanceLabel = new objects.Label("Distance: ", "15px Consolas", "#000000", 10, 30, false);
            this.addChild(this._damageLabel);
            this.addChild(this._distanceLabel);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
            var _this = this;
            this._sky.update();
            this._ground.update();
            this._extinguisher.update();
            this._player.update();
            this._birds.forEach(function (bird) {
                bird.update();
                _this._collision.check(bird);
            });
            this._collision.check(this._extinguisher);
            // Update labels
            var scoreElements = this._player.scores();
            this._damageLabel.updateText('Damage: ' +
                scoreElements.damage + '%');
            this._distanceLabel.updateText('Distance: ' +
                scoreElements.distance + ' m');
            this.totalDistance = scoreElements.distance;
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));

//# sourceMappingURL=play.js.map
