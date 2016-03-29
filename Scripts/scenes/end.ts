// LEFT_CAVE SCENE
module scenes {
    export class End extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _background: createjs.Bitmap;
        private _restartButton: objects.Button;
        private _score: objects.Label;
        private _sceneMusic: objects.Sound;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS ++++++++++++++++++++


        // Start Method
        public start(): void {
            // Add background
            this._background = new createjs.Bitmap(assets.getResult('gameoverscreen'));
            this.addChild(this._background);

            // Add the final score
            this._score = new objects.Label(
                "You flew for " + play.totalDistance + ' meters\n\n' +
                'before your turbine\n\nsucked a seagull.',
                "20px Consolas",
                "#FFFFFF",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 50,
                false);
            this.addChild(this._score);

            // add the restart button
            this._restartButton = new objects.Button(
                "RestartButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._restartButton);

            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);

            // Play the scene soundtrack
            this._sceneMusic = new objects.Sound('gameovermusic');
            this._sceneMusic.play(-1);
        }

        // PLAY Scene updates here
        public update(): void {

        }


        //EVENT HANDLERS ++++++++++++++++++++

        // START_OVER Button click event handler
        private _restartButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            this._sceneMusic.stop();
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}