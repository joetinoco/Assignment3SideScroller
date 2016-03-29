var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // BIRDS CLASS ++++++++++++++++++++++++++++++++++++
    var Birds = (function (_super) {
        __extends(Birds, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // PUBLIC INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Birds() {
            _super.call(this, "birds");
            this._reset(this._rightBounds);
            this.name = "birds";
            this.id = Math.floor(Math.random() * 100000);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Birds.prototype._checkBounds = function (value) {
            // check to see if the right of the flock 
            // is outside the viewport         
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        };
        // reset the birds offscreen
        Birds.prototype._reset = function (value) {
            this._speed.x = -(Math.floor(Math.random() * 5) + 5);
            this._speed.y = Math.floor(Math.random() * 4) - 2;
            this.id = Math.floor(Math.random() * 100000);
            this.x = value;
            this.y = Math.floor(Math.random() * (config.Screen.HEIGHT - this.height)) + this._topBounds;
        };
        // Keep birds flying above the ground
        Birds.prototype._keepAboveGround = function (value) {
            if (this.y >= value && this._speed.y > 0) {
                this._speed.y = -this._speed.y;
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Birds.prototype.update = function () {
            // scroll the birds across the screen
            this.y += this._speed.y;
            this.x += this._speed.x;
            this._checkBounds(this._leftBounds);
            this._keepAboveGround(config.Screen.HEIGHT - this.height);
        };
        return Birds;
    }(objects.GameObject));
    objects.Birds = Birds;
})(objects || (objects = {}));

//# sourceMappingURL=birds.js.map
