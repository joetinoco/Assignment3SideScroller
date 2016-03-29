var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // PLAYER CLASS ++++++++++++++++++++++++++++++
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player() {
            _super.call(this, assets.getResult("plane"));
            this._defaultImage = assets.getResult("plane");
            this._damagedImage = assets.getResult("plane_flames");
            this._sndEngine = new objects.Sound('enginenormal');
            this._sndEngineDamaged = new objects.Sound('enginedamaged');
            this._sndBirdStrike = new objects.Sound('hit');
            this._sndExtinguish = new objects.Sound('extinguish');
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - (this.height * 0.5);
            this.x = (this.width * 0.5) + 20;
            this.y = 350;
            this._pitch = 0;
            this._damage = 0;
            this._distance = 0;
            this._lastCollidedObject = new objects.GameObject("plane"); // 'Dummy' startup object
            // Play the scene soundtrack
            this._sceneMusic = new objects.Sound('gameplaymusic');
            this._sceneMusic.play(-1);
            this._sndEngine.play(-1); // Gentlemen, start your engines
        }
        // PRIVATE METHODS
        Player.prototype._checkBounds = function () {
            if (this.y < this._topBounds) {
                this.y = this._topBounds;
            }
            if (this.y > this._bottomBounds) {
                // Player crashed the plane
                this._sndEngine.stop();
                this._sndEngineDamaged.stop();
                this._sceneMusic.stop();
                scene = config.Scene.END;
                changeScene();
            }
        };
        // PUBLIC METHODS
        Player.prototype.update = function () {
            this._pitch = -(this.y - stage.mouseY);
            this.y += (this._pitch / 10);
            // Add a random 'bump' according to the damage amount
            this.y += Math.random() * (this._damage / 2);
            var angle = this._pitch / 3;
            this.rotation = angle >= -30 ? angle : -30;
            this._distance++;
            this._checkBounds();
        };
        // Register and treat a collision
        Player.prototype.registerCollision = function (obj) {
            if (this._lastCollidedObject.id != obj.id) {
                switch (obj.name) {
                    case "extinguisher":
                        this._damage = 0;
                        this.image = this._defaultImage;
                        this._sndExtinguish.play();
                        this._sndEngineDamaged.stop();
                        this._sndEngine.play(-1);
                        break;
                    case "birds":
                        this._damage += 15;
                        this.image = this._damagedImage;
                        this._sndBirdStrike.play();
                        this._sndEngine.stop();
                        this._sndEngineDamaged.play(-1);
                        break;
                }
            }
            this._lastCollidedObject = obj;
        };
        // Return score elements to update screen labels
        Player.prototype.scores = function () {
            return {
                distance: this._distance,
                damage: this._damage
            };
        };
        return Player;
    }(createjs.Bitmap));
    objects.Player = Player;
})(objects || (objects = {}));

//# sourceMappingURL=player.js.map
