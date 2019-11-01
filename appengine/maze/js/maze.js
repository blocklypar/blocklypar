/**
 * Blockly Games: Maze
 *
 * Copyright 2012 Google Inc.
 * https://github.com/google/blockly-games
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview JavaScript for Maze game.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Maze');

goog.require('Blockly.FieldDropdown');
goog.require('BlocklyDialogs');
goog.require('BlocklyGames');
goog.require('BlocklyInterface');
goog.require('Maze.Blocks');
goog.require('Maze.soy');

goog.require('Maze.Level1');
goog.require('Maze.Level2');
goog.require('Maze.Level3');
goog.require('Maze.Level4');
goog.require('Maze.Level5');
goog.require('Maze.Level6');

BlocklyGames.NAME = 'maze';

/**
 * Background and other elements
 */
Maze.VIEW = {
  winSound: ['maze/win.mp3', 'maze/win.ogg'],
  crashSound: ['maze/fail_pegman.mp3', 'maze/fail_pegman.ogg']
};


/**
 * Go to the next level.  Add skin parameter.
 * @suppress {duplicate}
 */
BlocklyInterface.nextLevel = function() {
  if (BlocklyGames.LEVEL < BlocklyGames.MAX_LEVEL) {
    window.location = window.location.protocol + '//' +
        window.location.host + window.location.pathname +
        '?lang=' + BlocklyGames.LANG + '&level=' + (BlocklyGames.LEVEL + 1) +
        '&skin=' + 0;
  } else {
    BlocklyInterface.indexPage();
  }
};

Maze.MAX_BLOCKS = [undefined, // Level 0.
    2, 4, 5, 11, 10, 13, Infinity][BlocklyGames.LEVEL];

/**
 * Milliseconds between each animation frame.
 */
Maze.stepSpeed;

/**
 * Execution time of each level
 */
Maze.executionTime = document.getElementById("number");

/**
 * The types of squares in the maze, which is represented
 * as a 2D array of SquareType values.
 * @enum {number}
 */
Maze.SquareType = {
  WALL: 0,
  OPEN: 1,
  START: 2,
  FINISH: 3,
  ITEM: 4
};

Maze.map = [
// Level 0.
  undefined,
// Level 1.
 [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 1, 4, 1, 4, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]],
  // Level 2.
  [[0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 2, 1, 4, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 1, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 4, 0, 0],
  [0, 0, 0, 0, 0, 0, 3, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]],
  // Level 3.
  [[0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]],
  // Level 4.
  [[0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 2, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]],
  // Level 5.
  [[0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 2, 1, 1, 1, 1, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]],
  //Level 6
  [[0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 2, 1, 1, 1, 1, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 2, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]],
  //Level 7
  [[0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 0, 0, 0, 0, 1, 0],
  [0, 0, 2, 1, 1, 1, 1, 3, 0],
  [0, 0, 1, 0, 0, 0, 0, 1, 0],
  [0, 0, 2, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]]
][BlocklyGames.LEVEL];

/**
 * Measure maze dimensions and set sizes.
 * ROWS: Number of tiles down.
 * COLS: Number of tiles across.
 * SQUARE_SIZE: Pixel height and width of each maze square (i.e. tile).
 */
Maze.ROWS = Maze.map.length;
Maze.COLS = Maze.map[0].length;
Maze.SQUARE_SIZE = 50;
Maze.PEGMAN_HEIGHT = 52;
Maze.PEGMAN_WIDTH = 49;

Maze.MAZE_WIDTH = Maze.SQUARE_SIZE * Maze.COLS;
Maze.MAZE_HEIGHT = Maze.SQUARE_SIZE * Maze.ROWS;
Maze.PATH_WIDTH = Maze.SQUARE_SIZE / 3;

/**
 * Constants for cardinal directions.  Subsequent code assumes these are
 * in the range 0..3 and that opposites have an absolute difference of 2.
 * @enum {number}
 */
Maze.DirectionType = {
  NORTH: 0,
  EAST: 1,
  SOUTH: 2,
  WEST: 3
};

/**
 * Outcomes of running the user program.
 */
Maze.ResultType = {
  UNSET: 0,
  SUCCESS: 1,
  FAILURE: -1,
  TIMEOUT: 2,
  ERROR: -2
};

Maze.result = Maze.ResultType.UNSET;
Maze.startDirection = Maze.DirectionType.EAST;

// Map each possible shape to a sprite.
// Input: Binary string representing Centre/North/West/South/East squares.
// Output: [x, y] coordinates of each tile's sprite in tiles.png.
Maze.tile_SHAPES = {
  '10010': [4, 0],  // Dead ends
  '10001': [3, 3],
  '11000': [0, 1],
  '10100': [0, 2],
  '11010': [4, 1],  // Vertical
  '10101': [3, 2],  // Horizontal
  '10110': [0, 0],  // Elbows
  '10011': [2, 0],
  '11001': [4, 2],
  '11100': [2, 3],
  '11110': [1, 1],  // Junctions
  '10111': [1, 0],
  '11011': [2, 1],
  '11101': [1, 2],
  '11111': [2, 2],  // Cross
  'null0': [4, 3],  // Empty
  'null1': [3, 0],
  'null2': [3, 1],
  'null3': [0, 3],
  'null4': [1, 3]
};

/**
 * Create and layout all the nodes for the path, scenery, Pegman, and goal.
 */
Maze.drawMap = function() {

  var svg = document.getElementById('svgMaze');
  var scale = Math.max(Maze.ROWS, Maze.COLS) * Maze.SQUARE_SIZE;
  svg.setAttribute('viewBox', '0 0 ' + scale + ' ' + scale);

  // Draw the outer square.
  var square = document.createElementNS(Blockly.utils.dom.SVG_NS, 'rect');
  square.setAttribute('width', Maze.MAZE_WIDTH);
  square.setAttribute('height', Maze.MAZE_HEIGHT);
  square.setAttribute('fill', '#F1EEE7');
  square.setAttribute('stroke-width', 1);
  square.setAttribute('stroke', '#CCB');
  svg.appendChild(square);
  
  switch(BlocklyGames.LEVEL){

    case 1: 
      Maze.Level1.DrawMap(svg);
      Maze.Level1.AddSprites(svg, document);
      Maze.Level1.AddActivitySprites();
    break;

    case 2: 
      Maze.Level2.DrawMap(svg);
      Maze.Level2.AddSprites(svg, document);
      Maze.Level2.AddActivitySprites();
    break;

    case 3:
      Maze.Level3.DrawMap(svg);
      Maze.Level3.AddBooks();
      Maze.Level3.AddSprites(svg, document);
    break;
    
    case 4:
      Maze.Level4.DrawMap(svg);
      Maze.Level4.AddBooks();
      Maze.Level4.AddSprites(svg, document);
    break;
    
    case 5:
      Maze.Level5.DrawMap(svg);
      Maze.Level5.AddBooks();
      Maze.Level5.AddSprites(svg, document);
    break;
    
    case 6:
      Maze.Level6.DrawMap(svg);
      Maze.Level6.AddBooks();
      Maze.Level6.AddSprites(svg, document);
    break;
  }
};

/**
 * Initialize Blockly and the maze. Called on page load.
 */
Maze.init = function() {
  // Render the Soy template.
  document.body.innerHTML = Maze.soy.start({}, null,
      {lang: BlocklyGames.LANG,
       level: BlocklyGames.LEVEL,
       maxLevel: BlocklyGames.MAX_LEVEL,
       skin: 0,
       html: BlocklyGames.IS_HTML});

  BlocklyInterface.init();
  
  var rtl = BlocklyGames.isRtl();
  var blocklyDiv = document.getElementById('blockly');
  var visualization = document.getElementById('visualization');
  var onresize = function(e) {
    var top = visualization.offsetTop;
    blocklyDiv.style.top = Math.max(10, top - window.pageYOffset) + 'px';
    blocklyDiv.style.left = rtl ? '10px' : '420px';
    blocklyDiv.style.width = (window.innerWidth - 440) + 'px';
  };
  window.addEventListener('scroll', function() {
    onresize(null);
    Blockly.svgResize(BlocklyGames.workspace);
  });
  window.addEventListener('resize', onresize);
  onresize(null);

  var toolbox = document.getElementById('toolbox');
  // Scale the workspace so level 1 = 1.3, and level 10 = 1.0.
  var scale = 1 + (1 - (BlocklyGames.LEVEL / BlocklyGames.MAX_LEVEL)) / 3;
  BlocklyGames.workspace = Blockly.inject('blockly',
      {'media': 'third-party/blockly/media/',
       'maxBlocks': Maze.MAX_BLOCKS,
       'rtl': rtl,
       'toolbox': toolbox,
       'trashcan': true,
       'zoom': {'startScale': scale}});

  BlocklyGames.workspace.getAudioManager().load(Maze.VIEW.winSound, 'win');
  BlocklyGames.workspace.getAudioManager().load(Maze.VIEW.crashSound, 'fail');
  
  // Not really needed, there are no user-defined functions or variables.
  Blockly.JavaScript.addReservedWords('moveForward,moveBackward,booksZero,activitiesComplete0,activitiesComplete' +
      'turnRight,turnLeft,isPathForward,isPathRight,isPathBackward,isPathLeft');

  //Level 1 must use the tasks block
  if(BlocklyGames.LEVEL == 1){
    var defaultXml =
    '<xml>' +
      '<block movable="' + '" ' +
      'type="maze_forever_2activities" x="70" y="70"></block>' +
    '</xml>';
  }
  //Level 1 must use the tasks block
  else if(BlocklyGames.LEVEL == 2){
    var defaultXml =
    '<xml>' +
      '<block movable="' + '" ' +
      'type="maze_forever_4activities" x="70" y="70"></block>' +
    '</xml>';
  }
  else if(BlocklyGames.LEVEL == 3){
    var defaultXml =
    '<xml>' +
      '<block movable="' + (BlocklyGames.LEVEL != 1) + '" ' +
      'type="maze_forever_books" x="70" y="70"></block>' +
    '</xml>';
  }
  else if(BlocklyGames.LEVEL > 3){
    var defaultXml =
    '<xml>' +
      '<block movable="' + (BlocklyGames.LEVEL != 1) + '" ' +
      'type="maze_forever_booksPar" x="70" y="70"></block>' +
    '</xml>';
  }

  BlocklyInterface.loadBlocks(defaultXml, false);
  
  Maze.drawMap();
  Maze.reset(true);

  BlocklyGames.workspace.addChangeListener(function() {Maze.updateCapacity();});

  if(BlocklyGames.LEVEL > 2)
    BlocklyGames.workspace.addChangeListener(function() {Maze.updateTime(0);});
  
  BlocklyGames.bindClick('runButton', Maze.runButtonClick);
  BlocklyGames.bindClick('resetButton', Maze.resetButtonClick);

  // Make connecting blocks easier for beginners.
  if (BlocklyGames.LEVEL == 1 || BlocklyGames.LEVEL == 2) {
    Blockly.SNAP_RADIUS *= 2;
    Blockly.CONNECTING_SNAP_RADIUS = Blockly.SNAP_RADIUS;
  }
  setTimeout(function() {
    BlocklyGames.workspace.addChangeListener(Maze.levelHelp);
    Maze.levelHelp();
  }, 5000);
  
  // Lazy-load the JavaScript interpreter.
  setTimeout(BlocklyInterface.importInterpreter, 1);
  // Lazy-load the syntax-highlighting.
  setTimeout(BlocklyInterface.importPrettify, 1);
};

/**
 * When the workspace changes, update the help as needed.
 * @param {Blockly.Events.Abstract=} opt_event Custom data for event.
 */
Maze.levelHelp = function(opt_event) {

  if (opt_event && opt_event.type == Blockly.Events.UI) {
    // Just a change to highlighting or somesuch.
    return;
  } else if (BlocklyGames.workspace.isDragging()) {
    // Don't change helps during drags.
    return;
  } else if (Maze.result == Maze.ResultType.SUCCESS ||
             BlocklyGames.loadFromLocalStorage(BlocklyGames.NAME,
                                               BlocklyGames.LEVEL)) {
    // The user has already won.  They are just playing around.
    return;
  }
  var rtl = BlocklyGames.isRtl();
  var userBlocks = Blockly.Xml.domToText(
      Blockly.Xml.workspaceToDom(BlocklyGames.workspace));
  var toolbar = BlocklyGames.workspace.flyout_.workspace_.getTopBlocks(true);
  var content = null;
  var origin = null;
  var style = null;

  //If fail shows message with remaining blocks or to help with the repeat block
  if (BlocklyGames.LEVEL == 1) {

    Maze.Level1();

    //Dialog presenting the block repeat
    content = document.getElementById('dialogHelpRepeat');
    style = {'width': '360px', 'top': '360px'};
    style[rtl ? 'right' : 'left'] = '425px';
    origin = toolbar[3].getSvgRoot();
    
    // if (userBlocks.indexOf('maze_forever_2activities') == -1) {
    //   if (BlocklyGames.workspace.remainingCapacity() == 0) {
    //     content = document.getElementById('dialogHelpCapacity');
    //     style = {'width': '430px', 'top': '310px'};
    //     style[rtl ? 'right' : 'left'] = '50px';
    //     origin = document.getElementById('capacityBubble');
    //   } else {
    //     content = document.getElementById('dialogHelpRepeat');
    //     style = {'width': '360px', 'top': '360px'};
    //     style[rtl ? 'right' : 'left'] = '425px';
    //     origin = toolbar[3].getSvgRoot();
    //   }
    // }
  }

  //   if (userBlocks.indexOf('maze_forever') == -1) {
  //     // if (BlocklyGames.workspace.remainingCapacity() == 0) {
  //     //   content = document.getElementById('dialogHelpCapacity');
  //     //   style = {'width': '430px', 'top': '310px'};
  //     //   style[rtl ? 'right' : 'left'] = '50px';
  //     //   origin = document.getElementById('capacityBubble');
  //     // } else {
  //     //   var showHelp = true;
  //     //   // Only show help if there is not a loop with two nested blocks.
  //     //   var blocks = BlocklyGames.workspace.getAllBlocks();
  //     //   for (var i = 0; i < blocks.length; i++) {
  //     //     var block = blocks[i];
  //     //     if (block.type != 'maze_forever') {
  //     //       continue;
  //     //     }
  //     //     var j = 0;
  //     //     while (block) {
  //     //       var kids = block.getChildren();
  //     //       block = kids.length ? kids[0] : null;
  //     //       j++;
  //     //     }
  //     //     if (j > 2) {
  //     //       showHelp = false;
  //     //       break;
  //     //     }
  //     //   }
  //       // if (showHelp) {
  //       //   content = document.getElementById('dialogHelpRepeatMany');
  //       //   style = {'width': '360px', 'top': '360px'};
  //       //   style[rtl ? 'right' : 'left'] = '425px';
  //       //   origin = toolbar[3].getSvgRoot();
  //       // }
  //     //}
  //   }

  // } else if (BlocklyGames.LEVEL == 2) {
  //   // if (Maze.result != Maze.ResultType.UNSET &&
  //   //     document.getElementById('runButton').style.display == 'none') {
  //   //   content = document.getElementById('dialogHelpReset');
  //   //   style = {'width': '360px', 'top': '410px'};
  //   //   style[rtl ? 'right' : 'left'] = '400px';
  //   //   origin = document.getElementById('resetButton');
  //   // }
  // } else if (BlocklyGames.LEVEL == 3) {
  //   if (userBlocks.indexOf('maze_forever_books') == -1) {
  //     if (BlocklyGames.workspace.remainingCapacity() == 0) {
  //       content = document.getElementById('dialogHelpCapacity');
  //       style = {'width': '430px', 'top': '310px'};
  //       style[rtl ? 'right' : 'left'] = '50px';
  //       origin = document.getElementById('capacityBubble');
  //     } else {
  //       content = document.getElementById('dialogHelpRepeat');
  //       style = {'width': '360px', 'top': '360px'};
  //       style[rtl ? 'right' : 'left'] = '425px';
  //       origin = toolbar[3].getSvgRoot();
  //     }
  //   }
  // } else if (BlocklyGames.LEVEL == 4) {
  //   if (userBlocks.indexOf('maze_if') == -1) {
  //     content = document.getElementById('dialogHelpIf');
  //     style = {'width': '360px', 'top': '430px'};
  //     style[rtl ? 'right' : 'left'] = '425px';
  //     origin = toolbar[4].getSvgRoot();
  //   }
  // } else if (BlocklyGames.LEVEL == 5) {
  //   if (userBlocks.indexOf('maze_ifElse') == -1) {
  //     content = document.getElementById('dialogHelpIfElse');
  //     style = {'width': '360px', 'top': '305px'};
  //     style[rtl ? 'right' : 'left'] = '425px';
  //     origin = toolbar[5].getSvgRoot();
  //   }
  // }
  
  if (content) {
    if (content.parentNode != document.getElementById('dialog')) {
      BlocklyDialogs.showDialog(content, origin, true, false, style, null);
    }
  } else {
    BlocklyDialogs.hideDialog(false);
  }
};

/**
 * Save the blocks for a one-time reload.
 */
Maze.saveToStorage = function() {
  // MSIE 11 does not support sessionStorage on file:// URLs.
  if (typeof Blockly != undefined && window.sessionStorage) {
    var xml = Blockly.Xml.workspaceToDom(BlocklyGames.workspace);
    var text = Blockly.Xml.domToText(xml);
    window.sessionStorage.loadOnceBlocks = text;
  }
};


/**
 * Reset the maze to the start position and kill any pending animation tasks.
 * @param {boolean} first True if an opening animation is to be played.
 */
Maze.reset = function(first) {

  switch(BlocklyGames.LEVEL){
    case 1:
      Maze.Level1.Reset(first);
      break;
    case 2:
      Maze.Level2.Reset(first);
      break;
    case 3:
      Maze.Level3.Reset(first);
      break;
    case 4:
      Maze.Level4.Reset(first);
      break;
    case 5:
        Maze.Level5.Reset(first);
    break;
    case 6:
      Maze.Level6.Reset(first);
    break;
  }
};

/**
 * Click the run button.  Start the program.
 * @param {!Event} e Mouse or touch event.
 */
Maze.runButtonClick = function(e) {
  // Prevent double-clicks or double-taps.
  if (BlocklyInterface.eventSpam(e)) {
    return;
  }
  BlocklyDialogs.hideDialog(false);

  // Only allow a single top block on level 1.
  if (BlocklyGames.LEVEL == 1 &&
      BlocklyGames.workspace.getTopBlocks(false).length > 1 &&
      Maze.result != Maze.ResultType.SUCCESS &&
      !BlocklyGames.loadFromLocalStorage(BlocklyGames.NAME,
                                         BlocklyGames.LEVEL)) {
    Maze.levelHelp();
    return;
  }
  var runButton = document.getElementById('runButton');
  var resetButton = document.getElementById('resetButton');
  // Ensure that Reset button is at least as wide as Run button.
  if (!resetButton.style.minWidth) {
    resetButton.style.minWidth = runButton.offsetWidth + 'px';
  }

  runButton.style.display = 'none';
  resetButton.style.display = 'inline';
  Maze.reset(false);
  Maze.execute();
};

/**
 * Updates the document's 'capacity' element with a message
 * indicating how many more blocks are permitted.  The capacity
 * is retrieved from BlocklyGames.workspace.remainingCapacity().
 */
Maze.updateCapacity = function() {
  var cap = BlocklyGames.workspace.remainingCapacity();
  var p = document.getElementById('capacity');
  if (cap == Infinity) {
    p.style.display = 'none';
  } else {
    p.style.display = 'inline';
    p.innerHTML = '';
    cap = Number(cap);
    var capSpan = document.createElement('span');
    capSpan.className = 'capacityNumber';
    capSpan.appendChild(document.createTextNode(cap));
    if (cap == 0) {
      var msg = BlocklyGames.getMsg('Maze_capacity0');
    } else if (cap == 1) {
      var msg = BlocklyGames.getMsg('Maze_capacity1');
    } else {
      var msg = BlocklyGames.getMsg('Maze_capacity2');
    }
    var parts = msg.split(/%\d/);
    for (var i = 0; i < parts.length; i++) {
      p.appendChild(document.createTextNode(parts[i]));
      if (i != parts.length - 1) {
        p.appendChild(capSpan.cloneNode(true));
      }
    }
  }
};



/**
 * Click the reset button.  Reset the maze.
 * @param {!Event} e Mouse or touch event.
 */
Maze.resetButtonClick = function(e) {
  // Prevent double-clicks or double-taps.
  if (BlocklyInterface.eventSpam(e)) {
    return;
  }

  if(BlocklyGames.LEVEL > 2)
    Maze.updateTime(0);

  switch(BlocklyGames.LEVEL){
    case 1:
      Maze.Level1.RemoveActivities();
      Maze.Level1.AddActivitySprites();
    break;
    case 2:
      Maze.Level2.RemoveActivities();
      Maze.Level2.AddActivitySprites();
    break;
    case 3:
      Maze.Level3.AddBooks();
    break;
    case 4:
      Maze.Level4.AddBooks();
    break;
    case 5:
      Maze.Level5.AddBooks();
    break;
    case 6:
      Maze.Level6.AddBooks();
    break;
  }
    
  var runButton = document.getElementById('runButton');
  runButton.style.display = 'inline';
  document.getElementById('resetButton').style.display = 'none';

  BlocklyGames.workspace.highlightBlock(null);
  Maze.reset(false);
  Maze.levelHelp();
};

/**
 * Execute the user's code.  Heaven help us...
 */
Maze.execute = function() {

  // Insert and Reset counter
  // if (BlocklyGames.LEVEL > 2){
  //   Maze.InsertCounter();
  // }

  switch(BlocklyGames.LEVEL){
    case 1:
      Maze.Level1.Execute();
      break;
    case 2:
      Maze.Level2.Execute();
      break;
    case 3:
      Maze.Level3.ExecuteFirst();
      break;
    case 4:
      Maze.Level4.ExecuteFirst();
    break;
    case 5:
      Maze.Level5.ExecuteFirst();
    break;
    case 6:
      Maze.Level6.ExecuteFirst();
    break;
  }
  
};

/**
 * Keep the direction within 0-3, wrapping at both ends.
 * @param {number} d Potentially out-of-bounds direction value.
 * @return {number} Legal direction value.
 */
Maze.constrainDirection4 = function(d) {
  d = Math.round(d) % 4;
  if (d < 0) {
    d += 4;
  }
  return d;
};

/**
 * Keep the direction within 0-15, wrapping at both ends.
 * @param {number} d Potentially out-of-bounds direction value.
 * @return {number} Legal direction value.
 */
Maze.constrainDirection16 = function(d) {
  d = Math.round(d) % 16;
  if (d < 0) {
    d += 16;
  }
  return d;
};


Maze.FinalCounter = function(){

  var executionTime = document.getElementById("number").innerHTML;
  var doneDiv = document.getElementById('dialogLinesText');
  var exectime = document.createElement('P');
  exectime.innerText = executionTime.toString().concat(' execution time!');
  doneDiv.parentNode.insertBefore(exectime, doneDiv);

}

/**
 * Updates the document's 'capacity' element with a message
 * indicating how many more blocks are permitted.  The capacity
 * is retrieved from BlocklyGames.workspace.remainingCapacity().
 */
Maze.updateTime = function(time) {
  
  var cap = time;
  var p = document.getElementById('time');

  p.style.display = 'inline';
  p.innerHTML = '';
  cap = Number(cap);

  var capSpan = document.createElement('span');
  capSpan.className = 'timeNumber';
  capSpan.appendChild(document.createTextNode(cap));

  var msg = BlocklyGames.getMsg('Maze_time');
  var parts = msg.split(/%\d/);

  for (var i = 0; i < parts.length; i++) {
    p.appendChild(document.createTextNode(parts[i]));
    if (i != parts.length - 1) {
      p.appendChild(capSpan.cloneNode(true));
    }
  }
};

window.addEventListener('load', Maze.init);

