var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // GROUND CLASS ++++++++++++++++++++++++++++++++++++
    var Ground = (function (_super) {
        __extends(Ground, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Ground() {
            _super.call(this, "ground");
            this._speed.x = -5;
            this.y = config.Screen.HEIGHT - this.getBounds().height;
            this._reset(0);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Ground.prototype._checkBounds = function (value) {
            // check to see if the edge of the ground
            // met the edge of the screen
            if (this.x <= value) {
                this._reset(0);
            }
        };
        // reset the sky offscreen
        Ground.prototype._reset = function (value) {
            this.x = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Ground.prototype.update = function () {
            // scroll the ground
            this.x += this._speed.x;
            this._checkBounds(640 - 2880); // Screen dimensions - width
        };
        return Ground;
    }(objects.GameObject));
    objects.Ground = Ground;
})(objects || (objects = {}));

//# sourceMappingURL=ground.js.map
