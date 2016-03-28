var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // ISLAND CLASS ++++++++++++++++++++++++++++++++++++
    var Island = (function (_super) {
        __extends(Island, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Island() {
            _super.call(this, "island");
            this._speed.x = -5; //island speed
            this._reset(this._rightBounds);
            this.name = "island";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Island.prototype._checkBounds = function (value) {
            // check to see if the right of the island 
            // is outside the viewport         
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        };
        // reset the island offscreen
        Island.prototype._reset = function (value) {
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Island.prototype.update = function () {
            // scroll the island 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(this._leftBounds);
        };
        return Island;
    }(objects.GameObject));
    objects.Island = Island;
})(objects || (objects = {}));

//# sourceMappingURL=island.js.map
