module objects {
    // GROUND CLASS ++++++++++++++++++++++++++++++++++++
    export class Ground extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("ground");
            this._speed.x = -5;
            this.y = config.Screen.HEIGHT - this.getBounds().height;
            this._reset(0);
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value: number): void {
            // check to see if the edge of the ground
            // met the edge of the screen

            if (this.x <= value) {
                this._reset(0);
            }
        }

        // reset the sky offscreen
        protected _reset(value: number): void {
            this.x = value;
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update(): void {
            // scroll the ground
            this.x += this._speed.x;
            this._checkBounds(640 - 2880); // Screen dimensions - width
        }
    }
}