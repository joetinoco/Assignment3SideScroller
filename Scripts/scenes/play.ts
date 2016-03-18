// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _ocean: objects.Ocean;
        private _island: objects.Island;
        private _clouds: objects.Cloud[];
        private _cloudCount:number;
        private _player: objects.Player;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
           
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // Set Cloud Count
            this._cloudCount = 3;
            
            // Instantiate Cloud array
            this._clouds = new Array<objects.Cloud>();
                
            // added ocean to the scene
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);

            // added island to the scene
            this._island = new objects.Island();
            this.addChild(this._island);

            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            
            //added clouds to the scene
            for(var cloud:number = 0; cloud < this._cloudCount; cloud++) {
                this._clouds[cloud] = new objects.Cloud();
               this.addChild(this._clouds[cloud]);
            }
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._ocean.update();
            this._island.update();
           
            this._player.update();
           
            this._clouds.forEach(cloud => {
                cloud.update();
            });
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}