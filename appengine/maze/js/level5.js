'use strict';

goog.provide('Maze.Level5');
goog.require('Blockly.FieldDropdown');
goog.require('BlocklyDialogs');
goog.require('BlocklyGames');
goog.require('BlocklyInterface');
goog.require('Maze.Blocks');
goog.require('Maze.soy');

goog.require('Maze.Avatar');

var bookslist_ = [];
var start_ = [];
var finish;
var student = [];
var pidList = [];
var log = [];

var speed = 100;

var booksCounterNum; //numero maximo de livros

//****** STUDENTS */
var studentsActive = [];
var action_std1 = [];
var action_std2 = [];
var std1, std2, action;
var action_ = [];
var executionTime = 0;
var std_names = ['estudante0', 'estudante1'];
var clip_names = ['clipRect0', 'clipRect1'];

/**
 * The student currently executing the code
 */
Maze.Level5.currentStudent = null;
// Maze.Level5.taskActivate = false;
/**
 * Background and other elements
 */
Maze.Level5.VIEW = {
    background: 'maze/library.png',
    tiles: 'maze/tiles_ufsm.png',
    finishMarker: 'maze/marker.png',
    book: 'maze/book.png',
    skin: 'maze/pegman.png',
    graph:false
};

Maze.Level5 = function(){

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
Maze.Level5.DrawMap = function(svg){

    //Create cenario:
    if (Maze.Level5.VIEW.background) {
        var tile = document.createElementNS(Blockly.utils.dom.SVG_NS, 'image');
        tile.setAttributeNS(Blockly.utils.dom.XLINK_NS, 'xlink:href', Maze.Level5.VIEW.background);
        tile.setAttribute('height', Maze.MAZE_HEIGHT);
        tile.setAttribute('width', Maze.MAZE_WIDTH);
        tile.setAttribute('x', 0);
        tile.setAttribute('y', 0);
        svg.appendChild(tile);
    }

    if (Maze.Level5.VIEW.graph) {
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
          h_line.setAttribute('stroke', Maze.Level5.VIEW.graph);
          h_line.setAttribute('stroke-width', 1);
          svg.appendChild(h_line);
        }
        for (var k = 0; k < Maze.COLS; k++) {
          var v_line = document.createElementNS(Blockly.utils.dom.SVG_NS, 'line');
          v_line.setAttribute('x1', k * Maze.SQUARE_SIZE + offset);
          v_line.setAttribute('x2', k * Maze.SQUARE_SIZE + offset);
          v_line.setAttribute('y2', Maze.MAZE_HEIGHT);
          v_line.setAttribute('stroke', Maze.Level5.VIEW.graph);
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
            tile.setAttributeNS(Blockly.utils.dom.XLINK_NS, 'xlink:href', Maze.Level5.VIEW.tiles);
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

    var cont_start = 0;
    // Locate the start and finish squares.
    for (var y = 0; y < Maze.ROWS; y++) {
        for (var x = 0; x < Maze.COLS; x++) {
            if (Maze.map[y][x] == Maze.SquareType.START) {
                start_[cont_start] = {x: x, y: y};
                var std = new Maze.Avatar(cont_start, Maze.startDirection, x, y, Maze.Level5.VIEW.skin);
                student.push(std);
                cont_start++;
            } else if (Maze.map[y][x] == Maze.SquareType.FINISH) {
                finish = {x: x, y: y};
            }
        }
    }

    //Initialize the list of books full
    var cont_book = 0;
    for(var i=0.9; i<10.9; i++){
        bookslist_[cont_book++] = {x: 0.6, y: i/1.3};
    }

    //Set the current student as the first student
    Maze.Level5.currentStudent = student[0];
    Maze.executionTime = document.getElementById("number");
};

/**
 * Add sprites of the books to the svg of the game
 */
Maze.Level5.AddBooks = function(){

    booksCounterNum = 8;
    var svg = document.getElementById('svgMaze');

    // Edit books list
    var books = [];
    var book = 'book';

    for(var i=0; i < booksCounterNum; i++){
        books[i] = document.createElementNS(Blockly.utils.dom.SVG_NS, 'image');
        books[i].id = book.concat(i.toString());
        books[i].setAttributeNS(Blockly.utils.dom.XLINK_NS, 'xlink:href', Maze.Level5.VIEW.book);
        books[i].setAttribute('height', 50);
        books[i].setAttribute('width', 45);
        svg.appendChild(books[i]);
        
        //Move the initial list of books into position
        books[i].setAttribute('x', Maze.SQUARE_SIZE * (bookslist_[i].x + 0.5) -
            books[i].getAttribute('width') / 2);
        books[i].setAttribute('y', Maze.SQUARE_SIZE * (bookslist_[i].y + 0.6) -
            books[i].getAttribute('height'));

    }

    // Edit books counter
    var bookscount = [];
    var name = 'booksCounter';
    
    for(var i=0; i<=booksCounterNum; i++){

        bookscount[i] = document.createElementNS(Blockly.utils.dom.SVG_NS, 'image');
        bookscount[i].id = name.concat(i.toString());
        bookscount[i].setAttributeNS(Blockly.utils.dom.XLINK_NS, 'xlink:href', 'maze/books/'.concat(i.toString()).concat('.png'));
        bookscount[i].setAttribute('height', 60);
        bookscount[i].setAttribute('width', 80);
        bookscount[i].setAttribute('x', Maze.SQUARE_SIZE * (0.1) -
        bookscount[i].getAttribute('width') / 2  + 35);
        bookscount[i].setAttribute('y', Maze.SQUARE_SIZE * (8) -
        bookscount[i].getAttribute('height') + 10);
        svg.appendChild(bookscount[i]);
    }

    student[0].time = 0;
    student[1].time = 0;
};

/**
 * Add sprites to the svg of the game
 */
Maze.Level5.AddSprites = function(svg, document){

    // Create finish markers.
    var finishMarkers = document.createElementNS(Blockly.utils.dom.SVG_NS, 'image');
    finishMarkers.id = 'finish';
    finishMarkers.setAttributeNS(Blockly.utils.dom.XLINK_NS, 'xlink:href', Maze.Level5.VIEW.finishMarker);
    finishMarkers.setAttribute('height', 34);
    finishMarkers.setAttribute('width', 20);
    svg.appendChild(finishMarkers);

    //Estudante 1
    var pegmanClip = document.createElementNS(Blockly.utils.dom.SVG_NS, 'clipPath');
    pegmanClip.id = 'pegmanClipPath';
    var clipRect = document.createElementNS(Blockly.utils.dom.SVG_NS, 'rect');
    clipRect.id = 'clipRect0';
    clipRect.setAttribute('width', Maze.PEGMAN_WIDTH);
    clipRect.setAttribute('height', Maze.PEGMAN_HEIGHT);
    pegmanClip.appendChild(clipRect);
    svg.appendChild(pegmanClip);
  
    var pegmanIcon = document.createElementNS(Blockly.utils.dom.SVG_NS, 'image');
    pegmanIcon.id = 'estudante0';
    pegmanIcon.setAttributeNS(Blockly.utils.dom.XLINK_NS, 'xlink:href', Maze.Level5.VIEW.skin);
    pegmanIcon.setAttribute('height', Maze.PEGMAN_HEIGHT);
    pegmanIcon.setAttribute('width', Maze.PEGMAN_WIDTH * 21); // 49 * 21 = 1029
    pegmanIcon.setAttribute('clip-path', 'url(#pegmanClipPath)');
    svg.appendChild(pegmanIcon);

    //Estudante 2
    var estudanteClip2 = document.createElementNS(Blockly.utils.dom.SVG_NS, 'clipPath');
    estudanteClip2.id = 'estudanteClip2Path';
    var clipRect2 = document.createElementNS(Blockly.utils.dom.SVG_NS, 'rect');
    clipRect2.id = 'clipRect1';
    clipRect2.setAttribute('width', Maze.PEGMAN_WIDTH);
    clipRect2.setAttribute('height', Maze.PEGMAN_HEIGHT);
    estudanteClip2.appendChild(clipRect2);
    svg.appendChild(estudanteClip2);

    var estudante2 = document.createElementNS(Blockly.utils.dom.SVG_NS, 'image');
    estudante2.id = 'estudante1';
    estudante2.setAttributeNS(Blockly.utils.dom.XLINK_NS, 'xlink:href', Maze.Level5.VIEW.skin);
    estudante2.setAttribute('height', Maze.PEGMAN_HEIGHT);
    estudante2.setAttribute('width', Maze.PEGMAN_WIDTH*21); // 49 * 21 = 1029
    estudante2.setAttribute('clip-path', 'url(#estudanteClip2Path)');
    svg.appendChild(estudante2);

};

/**
 * Second function to be called
 */
Maze.Level5.Reset = function(first){

    // Kill all tasks.
    for(var i = 0; i < pidList.length; i++) {
        window.clearTimeout(pidList[i]);
    }
    pidList = [];

    student[0].reset(Maze.startDirection, start_[student[0].id].x, start_[student[0].id].y);
    student[1].reset(Maze.startDirection, start_[student[1].id].x, start_[student[1].id].y);

    std1 = 0;
    std2 = 0;
    action = 0;
    action_std1 = [];
    action_std2 = [];
    action_ = [];

    // Move all students into initial position
    if (first) {

        // Student 1
        student[0].startDirection++;
        pidList.push(setTimeout(function() {
            Maze.stepSpeed = speed;
            Maze.Level5.Schedule([student[0].startLoc.x, student[0].startLoc.y, student[0].startDirection * 4],
                        [student[0].startLoc.x, student[0].startLoc.y, student[0].startDirection * 4 - 4], student[0].id);
                        student[0].startDirection++;
        }, Maze.stepSpeed * 5));

        // Student 2   
        student[1].startDirection++;
        pidList.push(setTimeout(function() {
            Maze.stepSpeed = speed;
            Maze.Level5.Schedule([student[1].startLoc.x, student[1].startLoc.y, student[1].startDirection * 4],
                        [student[1].startLoc.x, student[1].startLoc.y, student[1].startDirection * 4 - 4], student[1].id);
                        student[1].startDirection++;
        }, Maze.stepSpeed * 5));

    } else {
        Maze.Level5.DisplayStudent(0, student[0].startLoc.x, student[0].startLoc.y, Maze.startDirection * 4);
        Maze.Level5.DisplayStudent(1, student[1].startLoc.x, student[1].startLoc.y, Maze.startDirection * 4);
    }

    // Move the finish icons into positions.
    var finishIcon = document.getElementById('finish');
    finishIcon.setAttribute('x', Maze.SQUARE_SIZE * (finish.x + 0.5) -
        finishIcon.getAttribute('width') / 2);
    finishIcon.setAttribute('y', Maze.SQUARE_SIZE * (finish.y + 0.6) -
        finishIcon.getAttribute('height'));

};

Maze.Level5.ExecuteFirst = function(){

    if (!('Interpreter' in window)) {
        // Interpreter lazy loads and hasn't arrived yet. Try again later.
        setTimeout(Maze.execute, 250);
        return;
    }

    log = [];
    Blockly.selected && Blockly.selected.unselect();
    Maze.result = Maze.ResultType.UNSET;

    var code = Blockly.JavaScript.workspaceToCode(BlocklyGames.workspace);
    var interpreter = new Interpreter(code, Maze.Level5.InitInterpreter);

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
        Maze.result = Maze.Level5.NotDone() ?
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

    // Fast animation if execution is successful.  Slow otherwise.
    if (Maze.result == Maze.ResultType.SUCCESS) 
        log.push(['finish', null]);

    //Animate the transcript
    Maze.Level5.Reset(false);
    Maze.Level5.PreAnimate(0);
    pidList.push(setTimeout(Maze.Level5.Animate, 150));
};

Maze.Level5.PreAnimate = function(id){

    var action = log.shift();

    if(!action) {
        BlocklyInterface.highlight(null);
        Maze.levelHelp();
        return;
    }

    if(action[0] == 'student0')
        id = 1;
    else if(action[0] == 'student1')
        id = 2;

    switch(id){
        case 1:
            action_std1.push(action);
            break;
        case 2:
            action_std2.push(action);
            break;
        default:
            action_.push(action);
    }

    Maze.Level5.PreAnimate(id);
};


Maze.Level5.Execute = function(){

    if (!('Interpreter' in window)) {
        setTimeout(Maze.execute, 250);
        return;
    }

    Maze.result = Maze.Level5.NotDone() ? Maze.ResultType.FAILURE : Maze.ResultType.SUCCESS;

    //Fast animation if execution is successful. Slow otherwise.
    if (Maze.result == Maze.ResultType.SUCCESS) {

        BlocklyInterface.saveToLocalStorage();

        Maze.FinalCounter();
        Maze.updateTime(0);

        setTimeout(BlocklyDialogs.congratulations, 1000);
        return;
    }

    pidList.push(setTimeout(Maze.Level5.Animate, 150));
};

Maze.Level5.Animate = function(){

    var action1 = action_std1[++std1];
    var action2 = action_std2[++std2];

    if(action1)
        Maze.Level5.AnimateMove(student[0], action1);
    
    if(action2)
        Maze.Level5.AnimateMove(student[1], action2);

    if(action1 && action2)
        Maze.updateTime(((student[0].time + student[1].time)/2).toFixed(2));
    else if(!action1)
        Maze.updateTime(student[1].time);
    else if(!action2)
        Maze.updateTime(student[0].time);

    
    pidList.push(setTimeout(Maze.Level5.Animate, Maze.stepSpeed * 4));
}

Maze.Level5.AnimateMove = function(avatar, action){

    BlocklyInterface.highlight(action[1]);

    switch (action[0]) {
        case 'north': //value: 1
        Maze.Level5.Schedule([avatar.startLoc.x, avatar.startLoc.y, avatar.startDirection * 4],
            [avatar.startLoc.x, avatar.startLoc.y - 1, avatar.startDirection * 4], avatar.id);
        avatar.startLoc.y--;
        avatar.time++;
        break;

        case 'east': //value 1
        Maze.Level5.Schedule([avatar.startLoc.x, avatar.startLoc.y, avatar.startDirection * 4],
            [avatar.startLoc.x + 1, avatar.startLoc.y, avatar.startDirection * 4], avatar.id);
        avatar.startLoc.x++;
        avatar.time++;
        break;

        case 'south': //value 1
        Maze.Level5.Schedule([avatar.startLoc.x, avatar.startLoc.y, avatar.startDirection * 4],
            [avatar.startLoc.x, avatar.startLoc.y + 1, avatar.startDirection * 4], avatar.id);
        avatar.startLoc.y++;
        avatar.time++;
        break;

        case 'west': //value 1
        Maze.Level5.Schedule([avatar.startLoc.x, avatar.startLoc.y, avatar.startDirection * 4],
            [avatar.startLoc.x - 1, avatar.startLoc.y, avatar.startDirection * 4], avatar.id);
        avatar.startLoc.x--;
        avatar.time++;
        break;

        case 'look_north': //value 0.5
        Maze.Level5.ScheduleLook(Maze.DirectionType.NORTH, avatar.startLoc.x, avatar.startLoc.y);
        avatar.time = avatar.time + 0.5;
        break;

        case 'look_east': //value 0.5
        Maze.Level5.ScheduleLook(Maze.DirectionType.EAST, avatar.startLoc.x, avatar.startLoc.y);
        avatar.time = avatar.time + 0.5;
        break;
        
        case 'look_south': //value 0.5
        Maze.Level5.ScheduleLook(Maze.DirectionType.SOUTH, avatar.startLoc.x, avatar.startLoc.y);
        avatar.time = avatar.time + 0.5;
        break;
        
        case 'look_west': //value 0.5
        Maze.Level5.ScheduleLook(Maze.DirectionType.WEST, avatar.startLoc.x, avatar.startLoc.y);
        avatar.time = avatar.time + 0.5;
        break;
        
        case 'fail_forward':
        Maze.Level5.ScheduleFail(true, avatar);
        break;
        
        case 'fail_backward':
        Maze.Level5.ScheduleFail(false, avatar);
        break;
        
        case 'left': //value 1
        Maze.Level5.Schedule([avatar.startLoc.x, avatar.startLoc.y, avatar.startDirection * 4],
            [avatar.startLoc.x, avatar.startLoc.y, avatar.startDirection * 4 - 4], avatar.id);
        avatar.startDirection = Maze.constrainDirection4(avatar.startDirection - 1);
        avatar.time++;
        break;
        
        case 'right': //value 1
        Maze.Level5.Schedule([avatar.startLoc.x, avatar.startLoc.y, avatar.startDirection * 4],
            [avatar.startLoc.x, avatar.startLoc.y, avatar.startDirection * 4 + 4], avatar.id);
        avatar.startDirection = Maze.constrainDirection4(avatar.startDirection + 1);
        avatar.time++;
        break; 
        
        case 'finish':
        BlocklyInterface.saveToLocalStorage();
        setTimeout(BlocklyDialogs.congratulations, 1000);     
    }
}

/**
 * Inject the Maze API into a JavaScript interpreter.
 * @param {!Interpreter} interpreter The JS Interpreter.
 * @param {!Interpreter.Object} scope Global scope.
 */
Maze.Level5.InitInterpreter = function(interpreter, scope){

    // API
    var wrapper;

    wrapper = function(id) {
        Maze.Level5.move(0, id, Maze.Level5.currentStudent);
    };
    interpreter.setProperty(scope, 'moveForward',
        interpreter.createNativeFunction(wrapper));

    wrapper = function(id) {
        Maze.Level5.move(2, id, Maze.Level5.currentStudent);
    };
    interpreter.setProperty(scope, 'moveBackward',
        interpreter.createNativeFunction(wrapper));
        
    wrapper = function(id) {
        Maze.Level5.turn(0, id, Maze.Level5.currentStudent);
    };
    interpreter.setProperty(scope, 'turnLeft',
        interpreter.createNativeFunction(wrapper));

    wrapper = function(id) {
        Maze.Level5.turn(1, id, Maze.Level5.currentStudent);
    };
    interpreter.setProperty(scope, 'turnRight',
        interpreter.createNativeFunction(wrapper));

    wrapper = function(id) {
    return Maze.Level5.isPath(0, id, Maze.Level5.currentStudent);
    };
    interpreter.setProperty(scope, 'isPathForward',
    interpreter.createNativeFunction(wrapper));

    //Students control:
    wrapper = function(id) {
        return Maze.Level5.isStudent(0, id);
    };
    interpreter.setProperty(scope, 'isStudent0',
    interpreter.createNativeFunction(wrapper));

    wrapper = function(id) {
        return Maze.Level5.isStudent(1, id);
    };
    interpreter.setProperty(scope, 'isStudent1',
    interpreter.createNativeFunction(wrapper));
   
    wrapper = function(id) {
        return Maze.Level5.isPath(1, id, Maze.Level5.currentStudent);
    };
    interpreter.setProperty(scope, 'isPathRight',
        interpreter.createNativeFunction(wrapper));

    wrapper = function(id) {
        return Maze.Level5.isPath(2, id, Maze.Level5.currentStudent);
    };
    interpreter.setProperty(scope, 'isPathBackward',
        interpreter.createNativeFunction(wrapper));

    wrapper = function(id) {
        return Maze.Level5.isPath(3, id, Maze.Level5.currentStudent);
    };
    interpreter.setProperty(scope, 'isPathLeft',
        interpreter.createNativeFunction(wrapper));

    wrapper = function() {
        return Maze.Level5.NotDone();
    };
    interpreter.setProperty(scope, 'notDone',
        interpreter.createNativeFunction(wrapper));

    //Books == 0
    wrapper = function() {
        return Maze.Level5.ReturnBook(Maze.Level5.currentStudent.startLoc.x, Maze.Level5.currentStudent.startLoc.y);
    };
    interpreter.setProperty(scope, 'booksZero',
        interpreter.createNativeFunction(wrapper));
};

/**
 * Attempt to move pegman forward or backward.
 * @param {number} direction Direction to move (0 = forward, 2 = backward).
 * @param {string} id ID of block that triggered this action.
 * @throws {true} If the end of the maze is reached.
 * @throws {false} If Pegman collides with a wall.
 */
Maze.Level5.move = function(direction, id, avatar) {

    if (!Maze.Level5.isPath(direction, null, avatar)) {
      log.push(['fail_' + (direction ? 'backward' : 'forward'), id]);
      //throw false;
    }
    else{
        var effectiveDirection = avatar.startDirection + direction;
        var command;
        switch (Maze.constrainDirection4(effectiveDirection)) {
        case Maze.DirectionType.NORTH:
            avatar.startLoc.y--;
            command = 'north';
            break;
        case Maze.DirectionType.EAST:
            avatar.startLoc.x++;
            command = 'east';
            break;
        case Maze.DirectionType.SOUTH:
            avatar.startLoc.y++;
            command = 'south';
            break;
        case Maze.DirectionType.WEST:
            avatar.startLoc.x--;
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
Maze.Level5.turn = function(direction, id, avatar) {

    if (direction) {
      // Right turn (clockwise).
      avatar.startDirection++;
      log.push(['right', id]);
    } else {
      // Left turn (counterclockwise).
      avatar.startDirection--;
      log.push(['left', id]);
    }

    avatar.startDirection = Maze.constrainDirection4(avatar.startDirection);
};

/**
 * Is there a path next to pegman?
 * @param {number} direction Direction to look
 *     (0 = forward, 1 = right, 2 = backward, 3 = left).
 * @param {?string} id ID of block that triggered this action.
 *     Null if called as a helper function in Maze.move().
 * @return {boolean} True if there is a path.
 */
Maze.Level5.isPath = function(direction, id, avatar) {

    var effectiveDirection = avatar.startDirection + direction;
    var square;
    var command;
  
    switch (Maze.constrainDirection4(effectiveDirection)) {
      case Maze.DirectionType.NORTH:
        square = Maze.map[avatar.startLoc.y - 1] &&
            Maze.map[avatar.startLoc.y - 1][avatar.startLoc.x];
        command = 'look_north';
        break;
      case Maze.DirectionType.EAST:
        square = Maze.map[avatar.startLoc.y][avatar.startLoc.x + 1];
        command = 'look_east';
        break;
      case Maze.DirectionType.SOUTH:
        square = Maze.map[avatar.startLoc.y + 1] &&
            Maze.map[avatar.startLoc.y + 1][avatar.startLoc.x];
        command = 'look_south';
        break;
      case Maze.DirectionType.WEST:
        square = Maze.map[avatar.startLoc.y][avatar.startLoc.x - 1];
        command = 'look_west';
        break;
    }
    if (id) {
      log.push([command, id]);
    }
  
    return square !== Maze.SquareType.WALL && square !== undefined;
};

/**
 * Find the student setted using the block
 * @param {student_id} Student ID
 * @return {boolean} True if it is a student.
 */
Maze.Level5.isStudent = function(student_id, id) {
    var command;

    switch(student_id) {
      case 0:
        command = 'student0';
        Maze.Level5.currentStudent = student[0];
        break;
      case 1:
        command = 'student1';
        Maze.Level5.currentStudent = student[1];
        break;
      default:
        break;
    }

    if(id) {
        log.push([command, id]);
    }

    if(command == undefined)
        return false;

    return true;
};


/**
 * Schedule the animations for a move or turn.
 * @param {!Array.<number>} startPos X, Y and direction starting points.
 * @param {!Array.<number>} endPos X, Y and direction ending points.
 */
Maze.Level5.Schedule = function(startPos, endPos, est) {

    var deltas = [(endPos[0] - startPos[0])/4, (endPos[1] - startPos[1])/4, (endPos[2] - startPos[2])/4];

    pidList.push(setTimeout(function() {
    Maze.Level5.DisplayStudent(est, startPos[0] + deltas[0],
        startPos[1] + deltas[1],
        Maze.constrainDirection16(startPos[2] + deltas[2]));
    }, Maze.stepSpeed));

    pidList.push(setTimeout(function() {
        Maze.Level5.DisplayStudent(est, startPos[0] + deltas[0] * 2,
            startPos[1] + deltas[1] * 2,
            Maze.constrainDirection16(startPos[2] + deltas[2] * 2));
    }, Maze.stepSpeed));

    pidList.push(setTimeout(function() {
    Maze.Level5.DisplayStudent(est, startPos[0] + deltas[0] * 3,
        startPos[1] + deltas[1] * 3,
        Maze.constrainDirection16(startPos[2] + deltas[2] * 3));
    }, Maze.stepSpeed * 2));

    pidList.push(setTimeout(function() {
        Maze.Level5.DisplayStudent(est, endPos[0], endPos[1],
            Maze.constrainDirection16(endPos[2]));
        }, Maze.stepSpeed * 3));

};

/**
 * Schedule the animations and sounds for a failed move.
 * @param {boolean} forward True if forward, false if backward.
 */
Maze.Level5.ScheduleFail = function(forward, avatar) {

    var deltaX = 0;
    var deltaY = 0;

    switch (avatar.startDirection) {
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
    var direction16 = Maze.constrainDirection16(avatar.startDirection * 4);

    Maze.Level5.DisplayStudent(avatar.id, avatar.startLoc.x + deltaX,
                        avatar.startLoc.y + deltaY,
                        direction16);

    BlocklyGames.workspace.getAudioManager().play('fail', 0.5);
    pidList.push(setTimeout(function() {
        Maze.Level5.DisplayStudent(avatar.id, avatar.startLoc.x,
                            avatar.startLoc.y,
                            direction16);
    }, Maze.stepSpeed));

    pidList.push(setTimeout(function() {
        Maze.Level5.DisplayStudent(avatar.id, avatar.startLoc.x + deltaX,
                            avatar.startLoc.y + deltaY,
                            direction16);

        BlocklyGames.workspace.getAudioManager().play('fail', 0.5);
    }, Maze.stepSpeed * 2));

    pidList.push(setTimeout(function() {
        Maze.Level5.DisplayStudent(avatar.id, avatar.startLoc.x, avatar.startLoc.y, direction16);
    }, Maze.stepSpeed * 3));
};

Maze.Level5.ScheduleFinish = function(sound) {
    var direction16 = Maze.constrainDirection16(Maze.Level5.currentStudent.direction * 4);
    Maze.Level5.DisplayStudent(Maze.Level5.currentStudent.startLoc.x, Maze.Level5.currentStudent.startLoc.y, 16);
    if (sound) {
      BlocklyGames.workspace.getAudioManager().play('win', 0.5);
    }
    pidList.push(setTimeout(function() {
        Maze.Level5.DisplayStudent(Maze.Level5.currentStudent.startLoc.x, Maze.Level5.currentStudent.startLoc.y, 18);
      }, Maze.stepSpeed));
    pidList.push(setTimeout(function() {
        Maze.Level5.DisplayStudent(Maze.Level5.currentStudent.startLoc.x, Maze.Level5.currentStudent.startLoc.y, 16);
      }, Maze.stepSpeed * 2));
    pidList.push(setTimeout(function() {
        Maze.Level5.DisplayStudent(Maze.Level5.currentStudent.startLoc.x, Maze.Level5.currentStudent.startLoc.y, direction16);
      }, Maze.stepSpeed * 3));
  };

/**
 * Display one student at the specified location, facing the specified direction.
 * @param {number} x Horizontal grid (or fraction thereof).
 * @param {number} y Vertical grid (or fraction thereof).
 * @param {number} d Direction (0 - 15) or dance (16 - 17).
 * @param {number=} opt_angle Optional angle (in degrees) to rotate Pegman.
 */
Maze.Level5.DisplayStudent = function(est, x, y, d, opt_angle) {

    var estudante = document.getElementById(std_names[est]);
    estudante.setAttribute('x', x * Maze.SQUARE_SIZE - d * Maze.PEGMAN_WIDTH + 1);
    estudante.setAttribute('y', Maze.SQUARE_SIZE * (y + 0.5) - Maze.PEGMAN_HEIGHT / 2 - 8);

    if (opt_angle) {
        estudante.setAttribute('transform', 'rotate(' + opt_angle + ', ' +
            (x * Maze.SQUARE_SIZE + Maze.SQUARE_SIZE / 2) + ', ' +
            (y * Maze.SQUARE_SIZE + Maze.SQUARE_SIZE / 2) + ')');
    } else {
        estudante.setAttribute('transform', 'rotate(0, 0, 0)');
    }

    var clipRect = document.getElementById(clip_names[est]);
    clipRect.setAttribute('x', x * Maze.SQUARE_SIZE + 1);
    clipRect.setAttribute('y', estudante.getAttribute('y'));

    if(Maze.Level5.ReturnBook(x, y)){
        //Remove one book from the list and decrement the counter
        booksCounterNum--;
        //Move the student to the initial position and run the code again
        var svg = (document.getElementById('svgMaze'));
        Maze.Level5.ResetOneStd(est);
        Maze.Level5.RemoveBooks(svg, document);
        Maze.Level5.Execute();
    }
};


Maze.Level5.ResetOneStd = function(est){

    for(var i = 0; i < pidList.length; i++) {
        window.clearTimeout(pidList[i]);
    }
    
    pidList = [];
    student[est].reset(Maze.startDirection, start_[est].x, start_[est].y);
    Maze.Level5.DisplayStudent(est, student[est].startLoc.x, student[est].startLoc.y, Maze.startDirection * 4);

    if(est == 0)
        std1 = 0;
    else 
        std2 = 0;
};

/**
 * Display the look icon at Pegman's current location,
 * in the specified direction.
 * @param {!Maze.DirectionType} d Direction (0 - 3).
 */
Maze.Level5.ScheduleLook = function(d, x, y) {

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

/**
 * Verify if the student arrive on the library
 */
Maze.Level5.ReturnBook = function(x, y){
    if( (x == finish.x ) && (finish.y == y) )
        return true;

    return false;
}

/**
 * Remove the books one by one
 */
Maze.Level5.RemoveBooks = function(svg, document){
    var book = 'book';
    const bookremove = document.getElementById(book.concat(booksCounterNum.toString()));
    svg.removeChild(bookremove);

    var bookcont = 'booksCounter';
    var id = booksCounterNum + 1;
    const bookcontremove = document.getElementById(bookcont.concat(id.toString()));
    svg.removeChild(bookcontremove);
}

Maze.Level5.NotDone = function(){
    return booksCounterNum != 0;
};