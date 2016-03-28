// MENU SCENE
module scenes {
    export class Instructions extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _background: createjs.Bitmap;
        private _backButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // Add background
            this._background = new createjs.Bitmap(assets.getResult('instructionsscreen'));
            this.addChild(this._background);
            
            // add the Start button to the MENU scene
            this._backButton = new objects.Button(
                "BackButton",
                config.Screen.CENTER_X - 200,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._backButton);
            
            // Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        private _backButtonClick(event: createjs.MouseEvent) {
            // Switch to the MENU Scene
            scene = config.Scene.MENU;
            changeScene();
        }

    }
}