module objects {
    // PLAYER CLASS ++++++++++++++++++++++++++++++
    export class Player extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES
        private _topBounds: number;
        private _bottomBounds: number;
        private _pitch: number; // Plane nose angle
        private _damage: number;
        private _distance: number;
        private _lastCollidedObject: GameObject;
        private _defaultImage: any;
        private _damagedImage: any;
        private _sndEngine: objects.Sound;
        private _sndEngineDamaged: objects.Sound;
        private _sndBirdStrike: objects.Sound;
        private _sndExtinguish: objects.Sound;
        private _sceneMusic: objects.Sound;

        // PUBLIC INSTANCE VARIABLES
        public width: number;
        public height: number;
        constructor() {
            super(assets.getResult("plane"));
            this._defaultImage = assets.getResult("plane");
            this._damagedImage = assets.getResult("plane_flames");

            this._sndEngine = new objects.Sound('enginenormal');
            this._sndEngineDamaged = new objects.Sound('enginedamaged');
            this._sndBirdStrike = new objects.Sound('hit');
            this._sndExtinguish = new objects.Sound('extinguish');

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - (this.height * 0.5);

            this.x = (this.width * 0.5) + 20;
            this.y = 350;
            this._pitch = 0;
            this._damage = 0;
            this._distance = 0;
            this._lastCollidedObject = new GameObject("plane"); // 'Dummy' startup object

            // Play the scene soundtrack
            this._sceneMusic = new objects.Sound('gameplaymusic');
            this._sceneMusic.play(-1);

            this._sndEngine.play(-1); // Gentlemen, start your engines
        }

        // PRIVATE METHODS
        private _checkBounds(): void {
            if (this.y < this._topBounds) {
                this.y = this._topBounds;
            }

            if (this.y > this._bottomBounds) {
                // Player crashed the plane
                this._sndEngine.stop();
                this._sndEngineDamaged.stop();
                this._sceneMusic.stop();
                scene = config.Scene.END;
                changeScene();
            }
        }


        // PUBLIC METHODS
        public update(): void {
            // Plane pitch control is only possible if the plane
            // is not completely damaged
            if (this._damage < 100) {
                this._pitch = -(this.y - stage.mouseY);
                this.y += (this._pitch / 10);
            } else this._damage = 100;

            // Add a random 'bump' according to the damage amount
            this.y += Math.random() * (this._damage / 2);

            var angle: number = this._pitch / 3;
            this.rotation = angle >= -30 ? angle : -30;
            this._distance++;
            this._checkBounds();

        }

        // Register and treat a collision
        public registerCollision(obj: GameObject): void {
            if (this._lastCollidedObject.id != obj.id) {
                switch (obj.name) {
                    case "extinguisher":
                        this._damage = 0;
                        this.image = this._defaultImage;
                        this._sndExtinguish.play();
                        this._sndEngineDamaged.stop();
                        this._sndEngine.play(-1);
                        break;
                    case "birds":
                        this._damage += 15;
                        this.image = this._damagedImage;
                        this._sndBirdStrike.play();
                        this._sndEngine.stop();
                        this._sndEngineDamaged.play(-1);
                        break;
                }
            }

            this._lastCollidedObject = obj;
        }

        // Return score elements to update screen labels
        public scores(): any {
            return {
                distance: this._distance,
                damage: this._damage
            }
        }
    }
}