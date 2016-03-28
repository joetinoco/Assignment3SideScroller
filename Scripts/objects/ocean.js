var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // OCEAN CLASS ++++++++++++++++++++++++++++++++++++
    var Ocean = (function (_super) {
        __extends(Ocean, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Ocean() {
            _super.call(this, "ocean");
            this._speed.x = -5; //ocean speed
            this._reset(0);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Ocean.prototype._checkBounds = function (value) {
            // check to see if the top of the ocean 
            // is met the top of the scene
            if (this.x <= value) {
                this._reset(0);
            }
        };
        // reset the ocean offscreen
        Ocean.prototype._reset = function (value) {
            this.x = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Ocean.prototype.update = function () {
            // scroll the ocean 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(640 - 1440); // Screen dimensions - ocean width
        };
        return Ocean;
    }(objects.GameObject));
    objects.Ocean = Ocean;
})(objects || (objects = {}));

//# sourceMappingURL=ocean.js.map
