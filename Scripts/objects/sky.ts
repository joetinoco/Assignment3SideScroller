module objects {
    // SKY CLASS ++++++++++++++++++++++++++++++++++++
    export class Sky extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("sky");
            
           this._speed.x = -3; 
           this._reset(0);
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the top of the sky 
            // met the top of the scene
            
            if(this.x <= value) {
                this._reset(0);
            }
        }
        
        // reset the sky offscreen
        protected _reset(value:number):void {
            this.x = value;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the sky 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(640-2880); // Screen dimensions - sky width
        }
    }
}