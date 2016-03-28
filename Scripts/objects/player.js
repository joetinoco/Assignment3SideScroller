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
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - (this.height * 0.5);
            this.x = (this.width * 0.5) + 20;
            this._pitch = 0;
            this._damage = 0;
            this._lastCollidedObject = new objects.GameObject("plane"); // 'Dummy' startup object 
        }
        // PRIVATE METHODS
        Player.prototype._checkBounds = function () {
            if (this.y < this._topBounds) {
                this.y = this._topBounds;
            }
            if (this.y > this._bottomBounds) {
                this.y = this._bottomBounds;
            }
        };
        // PUBLIC METHODS
        Player.prototype.update = function () {
            this._pitch = -(this.y - stage.mouseY);
            this.y += (this._pitch / 10) + (this._damage * 3);
            this.rotation = this._pitch / 3;
            this._checkBounds();
        };
        Player.prototype.registerCollision = function (obj) {
            if (this._lastCollidedObject.id != obj.id) {
                switch (obj.name) {
                    case "extinguisher":
                        this._damage = 0;
                        console.log('Plane fixed');
                        this.image = this._defaultImage;
                        break;
                    case "birds":
                        this._damage++;
                        console.log('Plane is damaged');
                        this.image = this._damagedImage;
                        break;
                }
            }
            this._lastCollidedObject = obj;
        };
        return Player;
    }(createjs.Bitmap));
    objects.Player = Player;
})(objects || (objects = {}));

//# sourceMappingURL=player.js.map
