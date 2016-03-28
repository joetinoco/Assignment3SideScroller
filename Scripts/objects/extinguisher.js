var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // EXTINGUISHER CLASS ++++++++++++++++++++++++++++++++++++
    var Extinguisher = (function (_super) {
        __extends(Extinguisher, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Extinguisher() {
            _super.call(this, "extinguisher");
            this._speed.x = -4;
            this._reset(this._rightBounds);
            this.name = "extinguisher";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Extinguisher.prototype._checkBounds = function (value) {
            // check to see if the right of the extinguisher 
            // is outside the viewport         
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        };
        // reset the bitmap offscreen
        Extinguisher.prototype._reset = function (value) {
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Extinguisher.prototype.update = function () {
            // scroll the bitmap
            this.x += this._speed.x;
            this._checkBounds(this._leftBounds);
        };
        return Extinguisher;
    }(objects.GameObject));
    objects.Extinguisher = Extinguisher;
})(objects || (objects = {}));

//# sourceMappingURL=extinguisher.js.map
