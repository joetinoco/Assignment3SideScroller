module objects {
    // PLAYER CLASS ++++++++++++++++++++++++++++++
    export class Player extends createjs.Bitmap {
        private _width: number;
        private _height: number;
        private _leftBounds: number;
        private _rightBounds: number;

        constructor() {
            super(assets.getResult("plane"));

            this._width = this.getBounds().width;
            this._height = this.getBounds().height;

            this.regX = this._width * 0.5;
            this.regY = this._height * 0.5;

            this._leftBounds = this._width * 0.5;
            this._rightBounds = config.Screen.WIDTH - (this._width * 0.5);

            this.y = 430;
        }

        // PRIVATE METHODS
        private _checkBounds(): void {
            if (this.x < this._leftBounds) {
                this.x = this._leftBounds;
            }

            if (this.x > this._rightBounds) {
                this.x = this._rightBounds;
            }
        }


        // PUBLIC METHODS
        public update(): void {
            this.x = stage.mouseX;
            this._checkBounds();
        }
    }
}