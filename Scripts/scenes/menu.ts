// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _background: createjs.Bitmap;
        private _startButton: objects.Button;
        private _instructionsButton: objects.Button;
        private _sceneMusic: objects.Sound;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // Add background
            this._background = new createjs.Bitmap(assets.getResult('titlescreen'));
            this.addChild(this._background);
            
            // add the Start button to the MENU scene
            this._startButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X - 150,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._startButton);
            
            // add the 'instructions' button to the menu scene
            this._instructionsButton = new objects.Button(
                "InstructionsButton",
                config.Screen.CENTER_X + 150,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._instructionsButton);
            
            // Event listeners
            this._startButton.on("click", this._startButtonClick, this);
            this._instructionsButton.on("click", this._instructionsButtonClick, this);
            
            
            // add this scene to the global stage container
            stage.addChild(this);
            
            this._sceneMusic = new objects.Sound('titlescreenmusic');
            this._sceneMusic.play(-1);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        private _startButtonClick(event: createjs.MouseEvent) {
            this._sceneMusic.stop();
            scene = config.Scene.PLAY;
            changeScene();
        }
        
        private _instructionsButtonClick(event: createjs.MouseEvent) {
            this._sceneMusic.stop();
            scene = config.Scene.INSTRUCTIONS;
            changeScene();
        }

    }
}