module objects {
    // GAMEOBJECT SUPER CLASS ++++++++++++++++++++++++++++++++++++
    export class GameObject extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        protected _speed:createjs.Point;
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor(bitmapString:string) {
            super(assets.getResult(bitmapString));
            
           this._speed = new createjs.Point(0, 0);
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            var resetValue:number = 0;
            // check if y value has met the reset criteria
            if(this.y >= value) {
                this._reset(resetValue);
            }
        }
        
        // Reset the Object offscreen
        protected _reset(value:number):void {
            this.y = value;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            var boundValue:number = 0;
            // scroll the ocean 5 px per frame
            this.y += this._speed.y;
            this._checkBounds(boundValue);
        }
    }
}