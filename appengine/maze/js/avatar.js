'use strict';

goog.provide('Maze.Avatar');


Maze.Avatar = function(id, startDirection, startLocX, startLocY, sprite){
    this.id = id;
    //If the avatar can't move because the task is over
    this.locked = false;
    //If its already active by one block
    this.active = 0;
    //Execution time of the avatar actions
    this.time = 0;
    this.startLoc = {x: startLocX, y: startLocY};
    this.sprite = sprite;
    this.startDirection = startDirection;
    this.interpreter = null;
    this.reset(this.startDirection, this.startLoc.x, this.startLoc.y);
    //Number of blocks associated to this student
    // this.blocks = 0;
    // this.loc = new Blockly.utils.Coordinate();
    // this.reset();
    // console.log(this + ' loaded.');
};

Maze.Avatar.prototype.reset = function(startDirection, startLocX, startLocY) {

    this.locked = false;
    this.startLoc = {x: startLocX, y: startLocY};
    this.startDirection = startDirection;
    // this.action = null;

    //CRIAÇÃO DE UM NOVO INTERPRETADOR para cada um
    // var code = Blockly.JavaScript.workspaceToCode(BlocklyGames.workspace);

    // if (typeof code == 'function') {
    //   code = code();
    // } else if (typeof code != 'string') {
    //   throw Error('Avatar ' + this.name + ' has invalid code: ' + code);
    // }

    //if ('Interpreter' in window) {
    //this.interpreter = new Interpreter(code, Maze.Level1.InitInterpreter);
    // } else {
    //   this.interpreter = null;
    // }
};
  
// SONS RELACIONADOS AO JOGO NAO AO PERSONAGEM
// winSound: ['maze/win.mp3', 'maze/win.ogg'],
// crashSound: ['maze/fail_pegman.mp3', 'maze/fail_pegman.ogg'],
// crashType: Maze.CRASH_STOPstarted