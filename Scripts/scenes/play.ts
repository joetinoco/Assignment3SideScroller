// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _sky: objects.Sky;
        private _ground: objects.Ground;
        private _extinguisher: objects.Extinguisher;
        private _birds: objects.Birds[];
        private _flockCount: number;
        private _player: objects.Player;
        private _damageLabel: objects.Label;
        private _distanceLabel: objects.Label;
        private _collision: managers.Collision;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();

        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            // Set bird flock count
            this._flockCount = 3;

            // Instantiate Cloud array
            this._birds = new Array<objects.Birds>();

            // add sky to the scene
            this._sky = new objects.Sky();
            this.addChild(this._sky);

            // add ground to the scene
            this._ground = new objects.Ground();
            this.addChild(this._ground);

            // add extinguisher to the scene
            this._extinguisher = new objects.Extinguisher();
            this.addChild(this._extinguisher);

            // add player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);

            // add birds to the scene
            for (var flock: number = 0; flock < this._flockCount; flock++) {
                this._birds[flock] = new objects.Birds();
                this.addChild(this._birds[flock]);
            }

            // add collision manager to the scene
            this._collision = new managers.Collision(this._player);

            // add labels
            this._damageLabel = new objects.Label(
                "Damage: ", "15px Consolas",
                "#000000",
                10, 10, false);
            this._distanceLabel = new objects.Label(
                "Distance: ", "15px Consolas",
                "#000000",
                10, 30, false);
            this.addChild(this._damageLabel);
            this.addChild(this._distanceLabel);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._sky.update();
            this._ground.update();
            this._extinguisher.update();

            this._player.update();

            this._birds.forEach(bird => {
                bird.update();
                this._collision.check(bird);
            });
            
            // Update labels
            var scoreElements = this._player.scores();
            this._damageLabel.updateText('Damage: ' + 
                scoreElements.damage);
            this._distanceLabel.updateText('Distance: ' + 
                scoreElements.distance);

            this._collision.check(this._extinguisher);
        }


        //EVENT HANDLERS ++++++++++++++++++++

    }
}