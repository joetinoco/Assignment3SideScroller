module objects {
    // OCEAN CLASS ++++++++++++++++++++++++++++++++++++
    export class Ocean extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        private _speed:number;
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super(assets.getResult("ocean"));
            
           this._speed = 5; //ocean speed
           this._reset();
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        private _checkBounds():void {
            // check to see if the top of the ocean 
            // has met the top of the scene
            
            if(this.y >= 0) {
                this._reset();
            }
        }
        
        // reset the ocean offscreen
        private _reset():void {
            this.y = -960;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the ocean 5 px per frame
            this.y += this._speed;
            this._checkBounds();
        }
    }
}