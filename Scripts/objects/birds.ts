module objects {
    // BIRDS CLASS ++++++++++++++++++++++++++++++++++++
    export class Birds extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // PUBLIC INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("birds");
            
           this._reset(this._rightBounds);
           this.name = "birds";
           this.id = Math.floor(Math.random() * 100000);
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the right of the flock 
            // is outside the viewport         
            if(this.x <= value) {
                this._reset(this._rightBounds);
            }
        }
        
        // reset the birds offscreen
        protected _reset(value:number):void {
            this._speed.x = - (Math.floor(Math.random() * 5) + 5);
            this._speed.y = Math.floor(Math.random() * 4) - 2;
            this.id = Math.floor(Math.random() * 100000);
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the birds across the screen
            this.y += this._speed.y;
            this.x += this._speed.x;
            this._checkBounds(this._leftBounds);
        }
    }
}