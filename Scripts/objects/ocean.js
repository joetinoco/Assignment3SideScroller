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
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Ocean() {
            _super.call(this, assets.getResult("ocean"));
            this._speed = 5; //ocean speed
            this._reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Ocean.prototype._checkBounds = function () {
            // check to see if the top of the ocean 
            // has met the top of the scene
            if (this.y >= 0) {
                this._reset();
            }
        };
        // reset the ocean offscreen
        Ocean.prototype._reset = function () {
            this.y = -960;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Ocean.prototype.update = function () {
            // scroll the ocean 5 px per frame
            this.y += this._speed;
            this._checkBounds();
        };
        return Ocean;
    }(createjs.Bitmap));
    objects.Ocean = Ocean;
})(objects || (objects = {}));

//# sourceMappingURL=ocean.js.map
