var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // SKY CLASS ++++++++++++++++++++++++++++++++++++
    var Sky = (function (_super) {
        __extends(Sky, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Sky() {
            _super.call(this, "sky");
            this._speed.x = -5;
            this._reset(0);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Sky.prototype._checkBounds = function (value) {
            // check to see if the top of the sky 
            // met the top of the scene
            if (this.x <= value) {
                this._reset(0);
            }
        };
        // reset the sky offscreen
        Sky.prototype._reset = function (value) {
            this.x = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Sky.prototype.update = function () {
            // scroll the sky 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(640 - 2880); // Screen dimensions - sky width
        };
        return Sky;
    }(objects.GameObject));
    objects.Sky = Sky;
})(objects || (objects = {}));

//# sourceMappingURL=sky.js.map
