module objects {
    // PLAYER CLASS ++++++++++++++++++++++++++++++
    export class Player extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES
        private _topBounds: number;
        private _bottomBounds: number;
        private _pitch: number; // Plane nose angle
        private _damage: number;
        private _lastCollidedObject: GameObject;
        private _defaultImage: any;
        private _damagedImage: any;

        // PUBLIC INSTANCE VARIABLES
        public width: number;
        public height: number;
        constructor() {
            super(assets.getResult("plane"));
            this._defaultImage = assets.getResult("plane");
            this._damagedImage = assets.getResult("plane_flames");

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - (this.height * 0.5);

            this.x = (this.width * 0.5) + 20;
            this._pitch = 0;
            this._damage = 0;
            this._lastCollidedObject = new GameObject("plane"); // 'Dummy' startup object 
        }

        // PRIVATE METHODS
        private _checkBounds(): void {
            if (this.y < this._topBounds) {
                this.y = this._topBounds;
            }

            if (this.y > this._bottomBounds) {
                this.y = this._bottomBounds;
            }
        }


        // PUBLIC METHODS
        public update(): void {
            this._pitch = -(this.y - stage.mouseY);
            this.y += (this._pitch / 10) + (this._damage * 3);
            this.rotation = this._pitch / 3;
            this._checkBounds();
        }

        public registerCollision(obj: GameObject): void {
            if (this._lastCollidedObject.id != obj.id) {
                switch (obj.name) {
                    case "extinguisher":
                        this._damage = 0;
                        console.log('Plane fixed');
                        this.image = this._defaultImage;
                        break;
                    case "birds":
                        this._damage++;
                        console.log('Plane is damaged');
                        this.image = this._damagedImage;
                        break;
                }
            }

            this._lastCollidedObject = obj;
        }
    }
}