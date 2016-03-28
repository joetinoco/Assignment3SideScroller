// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _sky: objects.Sky;
        private _island: objects.Island;
        private _birds: objects.Birds[];
        private _flockCount:number;
        private _player: objects.Player;
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
                
            // added sky to the scene
            this._sky = new objects.Sky();
            this.addChild(this._sky);

            // added island to the scene
            this._island = new objects.Island();
            this.addChild(this._island);

            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            
            //added clouds to the scene
            for(var flock:number = 0; flock < this._flockCount; flock++) {
                this._birds[flock] = new objects.Birds();
               this.addChild(this._birds[flock]);
            }
            
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._sky.update();
            this._island.update();
           
            this._player.update();
           
            this._birds.forEach(bird => {
                bird.update();
                this._collision.check(bird);
            });
            
            this._collision.check(this._island);
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}