module objects {
    // EXTINGUISHER CLASS ++++++++++++++++++++++++++++++++++++
    export class Extinguisher extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("extinguisher");
            
           this._speed.x = -4;
           this._reset(this._rightBounds);
           this.name = "extinguisher";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the right of the extinguisher 
            // is outside the viewport         
            if(this.x <= value) {
                this._reset(this._rightBounds);
            }
        }
        
        // reset the bitmap offscreen
        protected _reset(value:number):void {          
            this.x = value;
            this.y = Math.floor(Math.random() * (config.Screen.HEIGHT - this.height)) + this._topBounds;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the bitmap
            this.x += this._speed.x;
            this._checkBounds(this._leftBounds);
        }
    }
}