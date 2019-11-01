'use strict';

goog.provide('Maze.Level2');
goog.require('Blockly.FieldDropdown');
goog.require('BlocklyDialogs');
goog.require('BlocklyGames');
goog.require('BlocklyInterface');
goog.require('Maze.Blocks');
goog.require('Maze.soy');

goog.require('Maze.Avatar');

var start_;
var finish_;
var student;
var activity_pos = [];
var pidList = [];
var log = [];

Maze.Level2.activity_ = {
    num:0,
    pos: 0,
    pos0: 0,
    pos1: 0
};


/**
 * Background and other elements
 */
Maze.Level2.VIEW = {
    background: 'maze/level1-2.png',
    tiles: 'maze/tiles_ufsm.png',
    finishMarker: 'maze/classroom.png',
    activity: 'maze/activity.png',
    skin: 'maze/pegman.png',
    graph:false
};

Maze.Level2 = function(){

    if (BlocklyGames.workspace.getAllBlocks().length < 2) {

        Maze.content = document.getElementById('dialogHelpStack');
        Maze.style = {'width': '370px', 'top': '130px'};
        Maze.style[Maze.rtl ? 'right' : 'left'] = '215px';
        Maze.origin = Maze.toolbar[0].getSvgRoot();

    } else {

        var topBlocks = BlocklyGames.workspace.getTopBlocks(true);
        if (topBlocks.length > 1) {
            var xml = [
                '<xml>',
                    '<block type="maze_moveForward" x="10" y="10">',
                    '<next>',
                        '<block type="maze_moveForward"></block>',
                    '</next>',
                    '</block>',
                '</xml>'];
            BlocklyInterface.injectReadonly('sampleOneTopBlock', xml);
            Maze.content = document.getElementById('dialogHelpOneTopBlock');
            Maze.style = {'width': '360px', 'top': '120px'};
            Maze.style[Maze.rtl ? 'right' : 'left'] = '225px';
            Maze.origin = topBlocks[0].getSvgRoot();
        } else if (Maze.result == Maze.ResultType.UNSET) {
            // Show run help dialog.
            Maze.content = document.getElementById('dialogHelpRun');
            Maze.style = {'width': '360px', 'top': '410px'};
            Maze.style[Maze.rtl ? 'right' : 'left'] = '400px';
            Maze.origin = document.getElementById('runButton');
        }
    }
};

/**
 * First function to be called
 */
Maze.Level2.DrawMap = function(svg){

    //Create cenario:
    if (Maze.Level2.VIEW.background) {
        var tile = document.createElementNS(Blockly.utils.dom.SVG_NS, 'image');
        tile.setAttributeNS(Blockly.utils.dom.XLINK_NS, 'xlink:href', Maze.Level2.VIEW.background);
        tile.setAttribute('height', Maze.MAZE_HEIGHT);
        tile.setAttribute('width', Maze.MAZE_WIDTH);
        tile.setAttribute('x', 0);
        tile.setAttribute('y', 0);
        svg.appendChild(tile);
    }

    if (Maze.Level2.VIEW.graph) {
        // Draw the grid lines.
        // The grid lines are offset so that the lines pass through the centre of
        // each square.  A half-pixel offset is also added to as standard SVG
        // practice to avoid blurriness.
        var offset = Maze.SQUARE_SIZE / 2 + 0.5;
        for (var k = 0; k < Maze.ROWS; k++) {
          var h_line = document.createElementNS(Blockly.utils.dom.SVG_NS, 'line');
          h_line.setAttribute('y1', k * Maze.SQUARE_SIZE + offset);
          h_line.setAttribute('x2', Maze.MAZE_WIDTH);
          h_line.setAttribute('y2', k * Maze.SQUARE_SIZE + offset);
          h_line.setAttribute('stroke', Maze.Level2.VIEW.graph);
          h_line.setAttribute('stroke-width', 1);
          svg.appendChild(h_line);
        }
        for (var k = 0; k < Maze.COLS; k++) {
          var v_line = document.createElementNS(Blockly.utils.dom.SVG_NS, 'line');
          v_line.setAttribute('x1', k * Maze.SQUARE_SIZE + offset);
          v_line.setAttribute('x2', k * Maze.SQUARE_SIZE + offset);
          v_line.setAttribute('y2', Maze.MAZE_HEIGHT);
          v_line.setAttribute('stroke', Maze.Level2.VIEW.graph);
          v_line.setAttribute('stroke-width', 1);
          svg.appendChild(v_line);
        }
    }

    // Return a value of '0' if the specified square is wall or out of bounds,
    // '1' otherwise (empty, start, finish).
    var normalize = function(x, y) {
        if (x < 0 || x >= Maze.COLS || y < 0 || y >= Maze.ROWS) {
            return '0';
        }
        return (Maze.map[y][x] == Maze.SquareType.WALL) ? '0' : '1';
    };

    // Compute and draw the tile for each square.
    var tileId = 0;
    for (var y = 0; y < Maze.ROWS; y++) {
        for (var x = 0; x < Maze.COLS; x++) {
            // Compute the tile shape.
            var tileShape = normalize(x, y) +
                normalize(x, y - 1) +  // North.
                normalize(x + 1, y) +  // West.
                normalize(x, y + 1) +  // South.
                normalize(x - 1, y);   // East.

            // Draw the tile.
            if (!Maze.tile_SHAPES[tileShape]) {
            if (tileShape == '00000' && Math.random() > 0.3) {
                tileShape = 'null0';
            } else {
                tileShape = 'null' + Math.floor(1 + Math.random() * 4);
            }
            }
            var left = Maze.tile_SHAPES[tileShape][0];
            var top = Maze.tile_SHAPES[tileShape][1];
            
            // Tile's clipPath element.
            var tileClip = document.createElementNS(Blockly.utils.dom.SVG_NS, 'clipPath');
            tileClip.id = 'tileClipPath' + tileId;

            var clipRect = document.createElementNS(Blockly.utils.dom.SVG_NS, 'rect');
            clipRect.setAttribute('width', Maze.SQUARE_SIZE);
            clipRect.setAttribute('height', Maze.SQUARE_SIZE);

            clipRect.setAttribute('x', x * Maze.SQUARE_SIZE);
            clipRect.setAttribute('y', y * Maze.SQUARE_SIZE);

            tileClip.appendChild(clipRect);
            svg.appendChild(tileClip);

            // Tile sprite.
            var tile = document.createElementNS(Blockly.utils.dom.SVG_NS, 'image');
            tile.setAttributeNS(Blockly.utils.dom.XLINK_NS, 'xlink:href', Maze.Level2.VIEW.tiles);
            // Position the tile sprite relative to the clipRect.
            tile.setAttribute('height', Maze.SQUARE_SIZE * 4);
            tile.setAttribute('width', Maze.SQUARE_SIZE * 5);
            tile.setAttribute('clip-path', 'url(#tileClipPath' + tileId + ')');
            tile.setAttribute('x', (x - left) * Maze.SQUARE_SIZE);
            tile.setAttribute('y', (y - top) * Maze.SQUARE_SIZE);
            svg.appendChild(tile);
            tileId++;
        }
    }

    var cont = 0;
    // Locate the start, finish and itens squares.
    for (var y = 0; y < Maze.ROWS; y++) {
        for (var x = 0; x < Maze.COLS; x++) {
            if (Maze.map[y][x] == Maze.SquareType.START) {
                start_ = {x: x, y: y};
                student = new Maze.Avatar(0, Maze.startDirection, x, y, Maze.Level2.VIEW.skin);
            } else if (Maze.map[y][x] == Maze.SquareType.FINISH) {
                finish_ = {x: x, y: y};
            } else if(Maze.map[y][x] == Maze.SquareType.ITEM) {
                if(Maze.Level2.activity_.pos0 == 0)
                    Maze.Level2.activity_.pos0 = {x: x, y:y};
                else
                    Maze.Level2.activity_.pos1 = {x: x, y:y};
            }
        }
    }
};

/**
 * Add sprites to the svg of the game
 */
Maze.Level2.AddSprites = function(svg, document){

    // Create finish markers.
    var finishMarkers = document.createElementNS(Blockly.utils.dom.SVG_NS, 'image');
    finishMarkers.id = 'finish';
    finishMarkers.setAttributeNS(Blockly.utils.dom.XLINK_NS, 'xlink:href', Maze.Level2.VIEW.finishMarker);
    finishMarkers.setAttribute('height', 85);
    finishMarkers.setAttribute('width', 60);
    svg.appendChild(finishMarkers);

    //student
    var pegmanClip = document.createElementNS(Blockly.utils.dom.SVG_NS, 'clipPath');
    pegmanClip.id = 'pegmanClipPath';
    var clipRect = document.createElementNS(Blockly.utils.dom.SVG_NS, 'rect');
    clipRect.id = 'clipRect';
    clipRect.setAttribute('width', Maze.PEGMAN_WIDTH);
    clipRect.setAttribute('height', Maze.PEGMAN_HEIGHT);
    pegmanClip.appendChild(clipRect);
    svg.appendChild(pegmanClip);
  
    var pegmanIcon = document.createElementNS(Blockly.utils.dom.SVG_NS, 'image');
    pegmanIcon.id = 'student';
    pegmanIcon.setAttributeNS(Blockly.utils.dom.XLINK_NS, 'xlink:href', Maze.Level2.VIEW.skin);
    pegmanIcon.setAttribute('height', Maze.PEGMAN_HEIGHT);
    pegmanIcon.setAttribute('width', Maze.PEGMAN_WIDTH * 21); // 49 * 21 = 1029
    pegmanIcon.setAttribute('clip-path', 'url(#pegmanClipPath)');
    svg.appendChild(pegmanIcon);
};

/**
 * Create the activities to be display in the maze
 * and move them to they initial positions
 */
Maze.Level2.AddActivitySprites = function(){

    var svg = document.getElementById('svgMaze');

    var activity1 = document.createElementNS(Blockly.utils.dom.SVG_NS, 'image');
    activity1.id = 'activity0';
    activity1.setAttributeNS(Blockly.utils.dom.XLINK_NS, 'xlink:href', Maze.Level2.VIEW.activity);
    activity1.setAttribute('height', 45);
    activity1.setAttribute('width', 35);

    svg.appendChild(activity1);
    activity1.setAttribute('x', Maze.SQUARE_SIZE * (Maze.Level2.activity_.pos0.x + 0.5) -
    activity1.getAttribute('width') / 2);
    activity1.setAttribute('y', Maze.SQUARE_SIZE * (Maze.Level2.activity_.pos0.y + 0.6) - activity1.getAttribute('height'));


    var activity2 = document.createElementNS(Blockly.utils.dom.SVG_NS, 'image');
    activity2.id = 'activity1';
    activity2.setAttributeNS(Blockly.utils.dom.XLINK_NS, 'xlink:href', Maze.Level2.VIEW.activity);
    activity2.setAttribute('height', 45);
    activity2.setAttribute('width', 35);
    svg.appendChild(activity2);
    activity2.setAttribute('x', Maze.SQUARE_SIZE * (Maze.Level2.activity_.pos1.x + 0.5) -
    activity2.getAttribute('width') / 2);
    activity2.setAttribute('y', Maze.SQUARE_SIZE * (Maze.Level2.activity_.pos1.y + 0.6) - activity2.getAttribute('height'));

};

/**
 * Add activity to the list of activities completed
 * Remove the respective activity of the maze
 */
Maze.Level2.ActivityDone = function(){

    var svg = document.getElementById('svgMaze');

    var activity = document.createElementNS(Blockly.utils.dom.SVG_NS, 'image');

    activity.id = 'activity';
    activity.setAttributeNS(Blockly.utils.dom.XLINK_NS, 'xlink:href', Maze.Level2.VIEW.activity);
    activity.setAttribute('height', 45);
    activity.setAttribute('width', 35);
    svg.appendChild(activity);

    //Move the activity into the list
    activity.setAttribute('x', Maze.SQUARE_SIZE * (0.3 + 0.8) - activity.getAttribute('width') / 2);
    Maze.Level2.activity_.pos = Maze.Level2.activity_.pos + 1;
    activity.setAttribute('y', Maze.SQUARE_SIZE * (Maze.Level2.activity_.pos + 1.0) - activity.getAttribute('height'));

    //Remove activity from the maze
    var name = 'activity';
    var svg = document.getElementById('svgMaze');
    if(Maze.Level2.activity_.num == 2)
        activity = document.getElementById(name.concat('0'));
    else if(Maze.Level2.activity_.num == 3)
        activity = document.getElementById(name.concat('1'));
    else
        activity = document.getElementById(name.concat(Maze.Level2.activity_.num.toString()));

    svg.removeChild(activity);

};


/**
 * Second function to be called
 */
Maze.Level2.Reset = function(first){

    // Kill all activities.
    for(var i = 0; i < pidList.length; i++) {
        window.clearTimeout(pidList[i]);
    }
    pidList = [];

    student.reset(Maze.startDirection, start_.x, start_.y);

    // Move the student into initial position
    if (first) {
        student.startDirection++;
        pidList.push(setTimeout(function() {
            Maze.stepSpeed = 100;
            Maze.Level2.Schedule([student.startLoc.x, student.startLoc.y, student.startDirection * 4],
                        [student.startLoc.x, student.startLoc.y, student.startDirection * 4 - 4]);
                        student.startDirection++;
        }, Maze.stepSpeed * 5));
    } else {
        Maze.Level2.DisplayStudent(student.startLoc.x, student.startLoc.y, Maze.startDirection * 4);
    }

    // Move the finish icon into position
    var finishIcon = document.getElementById('finish');
    finishIcon.setAttribute('x', Maze.SQUARE_SIZE * (finish_.x + 0.5) -
        finishIcon.getAttribute('width') / 2);
    finishIcon.setAttribute('y', Maze.SQUARE_SIZE * (finish_.y + 0.6) -
        finishIcon.getAttribute('height') / 2);

};

Maze.Level2.Execute = function(){

    if (!('Interpreter' in window)) {
        // Interpreter lazy loads and hasn't arrived yet. Try again later.
        setTimeout(Maze.execute, 250);
        return;
    }

    log = [];
    Blockly.selected && Blockly.selected.unselect();
    Maze.result = Maze.ResultType.UNSET;

    var code = Blockly.JavaScript.workspaceToCode(BlocklyGames.workspace);
    var interpreter = new Interpreter(code, Maze.Level2.InitInterpreter);

    // Try running the user's code.  There are four possible outcomes:
    // 1. If pegman reaches the finish [SUCCESS], true is thrown.
    // 2. If the program is terminated due to running too long [TIMEOUT] false is thrown.
    // 3. If another error occurs [ERROR], that error is thrown.
    // 4. If the program ended normally but without solving the maze [FAILURE]
    try {
        var ticks = 100000;  // 10k ticks runs Pegman for about 8 minutes.
        while (interpreter.step()) {
            if (ticks-- == 0) {
                throw Infinity;
            }
        }
        // Verify if the user finish the Maze
        Maze.result = Maze.Level2.NotDone() ?
           Maze.ResultType.FAILURE : Maze.ResultType.SUCCESS;
    } catch (e) {
        // A boolean is thrown for normal termination.
        if (e === Infinity) {
            Maze.result = Maze.ResultType.TIMEOUT;
        } else if (e === false) {
            Maze.result = Maze.ResultType.ERROR;
        } else {
            // Syntax error, can't happen.
            Maze.result = Maze.ResultType.ERROR;
            alert(e);
        }
    }

    // Fast animation if execution is successful. Slow otherwise.
    if (Maze.result == Maze.ResultType.SUCCESS) {
        Maze.stepSpeed = 100;
        log.push(['finish', null]);
    } 

    Maze.Level2.Reset(false);
    pidList.push(setTimeout(Maze.Level2.Animate, 150));
};


Maze.Level2.Animate = function(){

    var action = log.shift();
    if (!action) {
      BlocklyInterface.highlight(null);
      Maze.levelHelp();
      return;
    }
    BlocklyInterface.highlight(action[1]);

    switch (action[0]) {
        case 'north':
        Maze.Level2.Schedule([student.startLoc.x, student.startLoc.y, student.startDirection * 4],
            [student.startLoc.x, student.startLoc.y - 1, student.startDirection * 4]);
        student.startLoc.y--;
        break;

        case 'east':
        Maze.Level2.Schedule([student.startLoc.x, student.startLoc.y, student.startDirection * 4],
            [student.startLoc.x + 1, student.startLoc.y, student.startDirection * 4]);
        student.startLoc.x++;
        break;

        case 'south':
        Maze.Level2.Schedule([student.startLoc.x, student.startLoc.y, student.startDirection * 4],
            [student.startLoc.x, student.startLoc.y + 1, student.startDirection * 4]);
        student.startLoc.y++;
        break;

        case 'west':
        Maze.Level2.Schedule([student.startLoc.x, student.startLoc.y, student.startDirection * 4],
            [student.startLoc.x - 1, student.startLoc.y, student.startDirection * 4]);
        student.startLoc.x--;
        break;

        case 'look_north':
        Maze.Level2.ScheduleLook(Maze.DirectionType.NORTH, student.startLoc.x, student.startLoc.y);
        break;

        case 'look_east':
        Maze.Level2.ScheduleLook(Maze.DirectionType.EAST, student.startLoc.x, student.startLoc.y);
        break;
        
        case 'look_south':
        Maze.Level2.ScheduleLook(Maze.DirectionType.SOUTH, student.startLoc.x, student.startLoc.y);
        break;
        
        case 'look_west':
        Maze.Level2.ScheduleLook(Maze.DirectionType.WEST, student.startLoc.x, student.startLoc.y);
        break;
        
        case 'fail_forward':
        Maze.Level2.ScheduleFail(true);
        break;
        
        case 'fail_backward':
        Maze.Level2.ScheduleFail(false);
        break;
        
        case 'left':
        Maze.Level2.Schedule([student.startLoc.x, student.startLoc.y, student.startDirection * 4],
            [student.startLoc.x, student.startLoc.y, student.startDirection * 4 - 4], student.id);
        student.startDirection = Maze.constrainDirection4(student.startDirection - 1);
        break;
        
        case 'right':
        Maze.Level2.Schedule([student.startLoc.x, student.startLoc.y, student.startDirection * 4],
            [student.startLoc.x, student.startLoc.y, student.startDirection * 4 + 4], student.id);
        student.startDirection = Maze.constrainDirection4(student.startDirection + 1);
        break; 

        case 'finish':
        BlocklyInterface.saveToLocalStorage();
        setTimeout(BlocklyDialogs.congratulations, 1000);  
        
    }
    pidList.push(setTimeout(Maze.Level2.Animate, Maze.stepSpeed * 5));
}

/**
 * Inject the Maze API into a JavaScript interpreter.
 * @param {!Interpreter} interpreter The JS Interpreter.
 * @param {!Interpreter.Object} scope Global scope.
 */
Maze.Level2.InitInterpreter = function(interpreter, scope){

    // API
    var wrapper;

    wrapper = function(id) {
        Maze.Level2.move(0, id);
    };
    interpreter.setProperty(scope, 'moveForward',
        interpreter.createNativeFunction(wrapper));

    wrapper = function(id) {
        Maze.Level2.move(2, id);
    };
    interpreter.setProperty(scope, 'moveBackward',
        interpreter.createNativeFunction(wrapper));
        
    wrapper = function(id) {
        Maze.Level2.turn(0, id);
    };
    interpreter.setProperty(scope, 'turnLeft',
        interpreter.createNativeFunction(wrapper));

    wrapper = function(id) {
        Maze.Level2.turn(1, id);
    };
    interpreter.setProperty(scope, 'turnRight',
        interpreter.createNativeFunction(wrapper));

    wrapper = function(id) {
    return Maze.Level2.isPath(0, id);
    };
    interpreter.setProperty(scope, 'isPathForward',
    interpreter.createNativeFunction(wrapper));
   
    wrapper = function(id) {
        return Maze.Level2.isPath(1, id);
    };
    interpreter.setProperty(scope, 'isPathRight',
        interpreter.createNativeFunction(wrapper));

    wrapper = function(id) {
        return Maze.Level2.isPath(2, id);
    };
    interpreter.setProperty(scope, 'isPathBackward',
        interpreter.createNativeFunction(wrapper));

    wrapper = function(id) {
        return Maze.Level2.isPath(3, id);
    };
    interpreter.setProperty(scope, 'isPathLeft',
        interpreter.createNativeFunction(wrapper));

    wrapper = function() {
        return Maze.Level2.NotDone();
    };
    interpreter.setProperty(scope, 'notDone',
        interpreter.createNativeFunction(wrapper));

    wrapper = function() {
        // Maze.Level7.activityActivate = true;
        // return Maze.Level2.GetActivity(student.startLoc.x, student.startLoc.y);
    };
    interpreter.setProperty(scope, '4activitiesComplete',
        interpreter.createNativeFunction(wrapper));
};


/**
 * Attempt to move pegman forward or backward.
 * @param {number} direction Direction to move (0 = forward, 2 = backward).
 * @param {string} id ID of block that triggered this action.
 * @throws {true} If the end of the maze is reached.
 * @throws {false} If Pegman collides with a wall.
 */
Maze.Level2.move = function(direction, id) {

    if (!Maze.Level2.isPath(direction, null)) {
      log.push(['fail_' + (direction ? 'backward' : 'forward'), id]);
      //throw false;
    }
    else{
        var effectiveDirection = student.startDirection + direction;
        var command;
        switch (Maze.constrainDirection4(effectiveDirection)) {
        case Maze.DirectionType.NORTH:
            student.startLoc.y--;
            command = 'north';
            break;
        case Maze.DirectionType.EAST:
            student.startLoc.x++;
            command = 'east';
            break;
        case Maze.DirectionType.SOUTH:
            student.startLoc.y++;
            command = 'south';
            break;
        case Maze.DirectionType.WEST:
            student.startLoc.x--;
            command = 'west';
            break;
        }
        log.push([command, id]);
    }
};

/**
 * Turn pegman left or right.
 * @param {number} direction Direction to turn (0 = left, 1 = right).
 * @param {string} id ID of block that triggered this action.
 */
Maze.Level2.turn = function(direction, id) {

    if (direction) {
      // Right turn (clockwise).
      student.startDirection++;
      log.push(['right', id]);
    } else {
      // Left turn (counterclockwise).
      student.startDirection--;
      log.push(['left', id]);
    }

    student.startDirection = Maze.constrainDirection4(student.startDirection);
};

/**
 * Is there a path next to pegman?
 * @param {number} direction Direction to look
 *     (0 = forward, 1 = right, 2 = backward, 3 = left).
 * @param {?string} id ID of block that triggered this action.
 *     Null if called as a helper function in Maze.move().
 * @return {boolean} True if there is a path.
 */
Maze.Level2.isPath = function(direction, id) {

    var effectiveDirection = student.startDirection + direction;
    var square;
    var command;
  
    switch (Maze.constrainDirection4(effectiveDirection)) {
      case Maze.DirectionType.NORTH:
        square = Maze.map[student.startLoc.y - 1] &&
            Maze.map[student.startLoc.y - 1][student.startLoc.x];
        command = 'look_north';
        break;
      case Maze.DirectionType.EAST:
        square = Maze.map[student.startLoc.y][student.startLoc.x + 1];
        command = 'look_east';
        break;
      case Maze.DirectionType.SOUTH:
        square = Maze.map[student.startLoc.y + 1] &&
            Maze.map[student.startLoc.y + 1][student.startLoc.x];
        command = 'look_south';
        break;
      case Maze.DirectionType.WEST:
        square = Maze.map[student.startLoc.y][student.startLoc.x - 1];
        command = 'look_west';
        break;
    }
    if (id) {
      log.push([command, id]);
    }
  
    return square !== Maze.SquareType.WALL && square !== undefined;
};


/**
 * Schedule the animations for a move or turn.
 * @param {!Array.<number>} startPos X, Y and direction starting points.
 * @param {!Array.<number>} endPos X, Y and direction ending points.
 */
Maze.Level2.Schedule = function(startPos, endPos) {

    var deltas = [(endPos[0] - startPos[0])/4, (endPos[1] - startPos[1])/4, (endPos[2] - startPos[2])/4];

    pidList.push(setTimeout(function() {
    Maze.Level2.DisplayStudent(startPos[0] + deltas[0],
        startPos[1] + deltas[1],
        Maze.constrainDirection16(startPos[2] + deltas[2]));
    }, Maze.stepSpeed));

    pidList.push(setTimeout(function() {
        Maze.Level2.DisplayStudent(startPos[0] + deltas[0] * 2,
            startPos[1] + deltas[1] * 2,
            Maze.constrainDirection16(startPos[2] + deltas[2] * 2));
    }, Maze.stepSpeed));

    pidList.push(setTimeout(function() {
    Maze.Level2.DisplayStudent(startPos[0] + deltas[0] * 3,
        startPos[1] + deltas[1] * 3,
        Maze.constrainDirection16(startPos[2] + deltas[2] * 3));
    }, Maze.stepSpeed * 2));

    pidList.push(setTimeout(function() {
        Maze.Level2.DisplayStudent(endPos[0], endPos[1],
            Maze.constrainDirection16(endPos[2]));
        }, Maze.stepSpeed * 3));
};

/**
 * Schedule the animations and sounds for a failed move.
 * @param {boolean} forward True if forward, false if backward.
 */
Maze.Level2.ScheduleFail = function(forward) {

    var deltaX = 0;
    var deltaY = 0;

    switch (student.startDirection) {
        case Maze.DirectionType.NORTH:
        deltaY = -1;
        break;
        case Maze.DirectionType.EAST:
        deltaX = 1;
        break;
        case Maze.DirectionType.SOUTH:
        deltaY = 1;
        break;
        case Maze.DirectionType.WEST:
        deltaX = -1;
        break;
    }
    if (!forward) {
        deltaX = -deltaX;
        deltaY = -deltaY;
    }

    deltaX /= 4;
    deltaY /= 4;
    var direction16 = Maze.constrainDirection16(student.startDirection * 4);

    Maze.Level2.DisplayStudent(student.startLoc.x, student.startLoc.y + deltaY,
                        direction16);

    BlocklyGames.workspace.getAudioManager().play('fail', 0.5);
    pidList.push(setTimeout(function() {
        Maze.Level2.DisplayStudent(student.startLoc.x, student.startLoc.y,
                            direction16);
    }, Maze.stepSpeed));

    pidList.push(setTimeout(function() {
        Maze.Level2.DisplayStudent(student.startLoc.x + deltaX,
                            student.startLoc.y + deltaY,
                            direction16);

        BlocklyGames.workspace.getAudioManager().play('fail', 0.5);
    }, Maze.stepSpeed * 2));

    pidList.push(setTimeout(function() {
        Maze.Level2.DisplayStudent(student.startLoc.x, student.startLoc.y, direction16);
    }, Maze.stepSpeed * 3));
};

/**
 * Display one student at the specified location, facing the specified direction.
 * @param {number} x Horizontal grid (or fraction thereof).
 * @param {number} y Vertical grid (or fraction thereof).
 * @param {number} d Direction (0 - 15) or dance (16 - 17).
 * @param {number=} opt_angle Optional angle (in degrees) to rotate Pegman.
 */
Maze.Level2.DisplayStudent = function(x, y, d, opt_angle) {
    
    var student = document.getElementById('student');
    student.setAttribute('x', x * Maze.SQUARE_SIZE - d * Maze.PEGMAN_WIDTH + 1);
    student.setAttribute('y', Maze.SQUARE_SIZE * (y + 0.5) - Maze.PEGMAN_HEIGHT / 2 - 8);

    if (opt_angle) {
        student.setAttribute('transform', 'rotate(' + opt_angle + ', ' +
            (x * Maze.SQUARE_SIZE + Maze.SQUARE_SIZE / 2) + ', ' +
            (y * Maze.SQUARE_SIZE + Maze.SQUARE_SIZE / 2) + ')');
    } else {
        student.setAttribute('transform', 'rotate(0, 0, 0)');
    }

    var clipRect = document.getElementById('clipRect');
    clipRect.setAttribute('x', x * Maze.SQUARE_SIZE + 1);
    clipRect.setAttribute('y', student.getAttribute('y'));

    if(Maze.Level2.isActivity(x, y)){
        Maze.Level2.ActivityDone();
        Maze.Level2.activity_.num++;
    }

    //Verify if student is at classroom and if the activities over
    if((x == finish_.x) && (y == finish_.y)){
        Maze.Level2.Reset(false);
        Maze.Level2.Execute();
        if(Maze.Level2.activity_.num == 2)
            Maze.Level2.AddActivitySprites();
    }
};

/**
 * Display the look icon at Pegman's current location,
 * in the specified direction.
 * @param {!Maze.DirectionType} d Direction (0 - 3).
 */
Maze.Level2.ScheduleLook = function(d, x, y) {

    switch (d) {
        case Maze.DirectionType.NORTH:
        x += 0.5;
        break;
        case Maze.DirectionType.EAST:
        x += 1;
        y += 0.5;
        break;
        case Maze.DirectionType.SOUTH:
        x += 0.5;
        y += 1;
        break;
        case Maze.DirectionType.WEST:
        y += 0.5;
        break;
    }
};

Maze.Level2.NotDone = function(){
    return Maze.Level2.activity_.num != 4;
};

Maze.Level2.isActivity = function(x, y){

    if((x == Maze.Level2.activity_.pos0.x) && (y == Maze.Level2.activity_.pos0.y))
        return true;
    
    if((x == Maze.Level2.activity_.pos1.x) && (y == Maze.Level2.activity_.pos1.y))
        return true;
    
    return false;
};

Maze.Level2.RemoveActivities = function(){

    var svg = document.getElementById('svgMaze');
    var actremove;

    for(var i=0 ; i<Maze.Level2.activity_.num; i++){
        actremove = document.getElementById('activity');
        svg.removeChild(actremove);
    }

    actremove = document.getElementById('activity0');
    if(actremove)
        svg.removeChild(actremove);

    actremove = document.getElementById('activity1');
    if(actremove)
        svg.removeChild(actremove);

    Maze.Level2.activity_.num = 0;
    Maze.Level2.activity_.pos = 0;
};