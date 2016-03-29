/// <reference path = "_reference.ts" />

// global variables
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;

var currentScene: objects.Scene;
var scene: number;

// Game Scenes
var menu: scenes.Menu;
var instructions: scenes.Instructions;
var play: scenes.Play;
var end: scenes.End;

var assetData:objects.Asset[] = [
    // Buttons
    {id: "StartButton", src:"../../Assets/images/StartButton.png"},
    {id: "RestartButton", src:"../../Assets/images/RestartButton.png"},
    {id: "InstructionsButton", src:"../../Assets/images/InstructionsButton.png"},
    {id: "BackButton", src:"../../Assets/images/BackButton.png"},
    // Screen elements
    {id: "sky", src:"../../Assets/images/sky.jpg"},
    {id: "ground", src:"../../Assets/images/ground.png"},
    {id: "plane", src:"../../Assets/images/plane.png"},
    {id: "plane_flames", src:"../../Assets/images/plane_flames.png"},
    {id: "extinguisher", src:"../../Assets/images/extinguisher.png"},
    {id: "birds", src:"../../Assets/images/birds.png"},
    // Title screens
    {id: "titlescreen", src:"../../Assets/images/titlescreen.jpg"},
    {id: "instructionsscreen", src:"../../Assets/images/instructionsscreen.png"},
    {id: "gameoverscreen", src:"../../Assets/images/gameoverscreen.jpg"},
    // Sounds
    {id: "aircraftdive", src:"../../Assets/audio/aircraftdive.wav"},
    {id: "enginedamaged", src:"../../Assets/audio/enginedamaged.wav"},
    {id: "enginenormal", src:"../../Assets/audio/enginenormal.wav"},
    {id: "extinguish", src:"../../Assets/audio/extinguish.wav"},
    {id: "hit", src:"../../Assets/audio/hit.wav"},
    // Music (by The Chemical Brothers - please don't sue)
    {id: "titlescreenmusic", src:"../../Assets/audio/fubeats.ogg"},
    {id: "gameplaymusic", src:"../../Assets/audio/superflash.ogg"},
    {id: "gameovermusic", src:"../../Assets/audio/onetoomany.ogg"},
    
];

function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}

function init(): void {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    
    // create our main display list container
    stage = new createjs.Stage(canvas);
    
    // Enable mouse events
    stage.enableMouseOver(20);
    
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    
    // sets up our stats counting workflow
    setupStats(); 
    
    // set initial scene
    scene = config.Scene.MENU;
    changeScene();
}

// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event: createjs.Event): void {
    // start collecting stats for this frame
    stats.begin(); 
    
    // calling State's update method
    currentScene.update(); 
    
    // redraw/refresh stage every frame
    stage.update();
    
    // stop collecting stats for this frame
    stats.end();
}

// Setup Game Stats
function setupStats(): void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Finite State Machine used to change Scenes
function changeScene(): void {
    
    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            break;
        case config.Scene.INSTRUCTIONS:
            // show the PLAY scene
            stage.removeAllChildren();
            instructions = new scenes.Instructions();
            currentScene = instructions;
            break;
        case config.Scene.PLAY:
            // show the PLAY scene
            stage.removeAllChildren();
            play = new scenes.Play();
            currentScene = play;
            break;
        case config.Scene.END:
            // show the END scene
            stage.removeAllChildren();
            end = new scenes.End();
            currentScene = end;
            break;
    }

}

window.onload = preload;