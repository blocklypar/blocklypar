/**
 * Blockly Games: Maze Blocks
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
 * @fileoverview Blocks for Maze game.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Maze.Blocks');

goog.require('Blockly');
goog.require('Blockly.JavaScript');
goog.require('BlocklyGames');


/**
 * Common HSV hue for all movement blocks.
 */
Maze.Blocks.MOVEMENT_HUE = 290;

/**
 * HSV hue for loop block.
 */
Maze.Blocks.LOOPS_HUE = 120;

/**
 * Common HSV hue for all logic blocks.
 */
Maze.Blocks.LOGIC_HUE = 210;

/**
 * Common HSV hue for student dropbox.
 */
Maze.Blocks.STUDENT_HUE = 45;

/**
 * Common HSV hue for task block.
 */
Maze.Blocks.TASK_HUE = 182;

/**
 * Common HSV hue for tasks in parallel.
 */
Maze.Blocks.TASK_PAR = 90;


/**
 * Left turn arrow to be appended to messages.
 */
Maze.Blocks.LEFT_TURN = ' \u21BA';

/**
 * Left turn arrow to be appended to messages.
 */
Maze.Blocks.RIGHT_TURN = ' \u21BB';

// Extensions to Blockly's existing blocks and JavaScript generator.
Blockly.Blocks['maze_moveForward'] = {
  /**
   * Block for moving forward.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": BlocklyGames.getMsg('Maze_moveForward'),
      "previousStatement": null,
      "nextStatement": null,
      "colour": Maze.Blocks.MOVEMENT_HUE,
      "tooltip": BlocklyGames.getMsg('Maze_moveForwardTooltip')
    });
  }
};

Blockly.JavaScript['maze_moveForward'] = function(block) {
  // Generate JavaScript for moving forward.
  return 'moveForward(\'block_id_' + block.id + '\');\n';
};

Blockly.Blocks['maze_turn'] = {
  /**
   * Block for turning left or right.
   * @this Blockly.Block
   */
  init: function() {
    var DIRECTIONS =
        [[BlocklyGames.getMsg('Maze_turnLeft'), 'turnLeft'],
         [BlocklyGames.getMsg('Maze_turnRight'), 'turnRight']];
    // Append arrows to direction messages.
    DIRECTIONS[0][0] += Maze.Blocks.LEFT_TURN;
    DIRECTIONS[1][0] += Maze.Blocks.RIGHT_TURN;
    this.setColour(Maze.Blocks.MOVEMENT_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(DIRECTIONS), 'DIR');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyGames.getMsg('Maze_turnTooltip'));
  }
};

Blockly.JavaScript['maze_turn'] = function(block) {
  // Generate JavaScript for turning left or right.
  var dir = block.getFieldValue('DIR');
  return dir + '(\'block_id_' + block.id + '\');\n';
};

Blockly.Blocks['maze_if'] = {
  /**
   * Block for 'if' conditional if there is a path.
   * @this Blockly.Block
   */
  init: function() {
    var DIRECTIONS =
        [[BlocklyGames.getMsg('Maze_pathAhead'), 'isPathForward'],
         [BlocklyGames.getMsg('Maze_pathLeft'), 'isPathLeft'],
         [BlocklyGames.getMsg('Maze_pathRight'), 'isPathRight']];
    // Append arrows to direction messages.
    DIRECTIONS[1][0] += Maze.Blocks.LEFT_TURN;
    DIRECTIONS[2][0] += Maze.Blocks.RIGHT_TURN;
    this.setColour(Maze.Blocks.LOGIC_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(DIRECTIONS), 'DIR');
    this.appendStatementInput('DO')
        .appendField(BlocklyGames.getMsg('Maze_doCode'));
    this.setTooltip(BlocklyGames.getMsg('Maze_ifTooltip'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript['maze_if'] = function(block) {
  // Generate JavaScript for 'if' conditional if there is a path.
  var argument = block.getFieldValue('DIR') +
      '(\'block_id_' + block.id + '\')';
  var branch = Blockly.JavaScript.statementToCode(block, 'DO');
  var code = 'if (' + argument + ') {\n' + branch + '}\n';
  return code;
};

Blockly.Blocks['maze_ifElse'] = {
  /**
   * Block for 'if/else' conditional if there is a path.
   * @this Blockly.Block
   */
  init: function() {
    var DIRECTIONS =
        [[BlocklyGames.getMsg('Maze_pathAhead'), 'isPathForward'],
         [BlocklyGames.getMsg('Maze_pathLeft'), 'isPathLeft'],
         [BlocklyGames.getMsg('Maze_pathRight'), 'isPathRight']];
    // Append arrows to direction messages.
    DIRECTIONS[1][0] += Maze.Blocks.LEFT_TURN;
    DIRECTIONS[2][0] += Maze.Blocks.RIGHT_TURN;
    this.setColour(Maze.Blocks.LOGIC_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(DIRECTIONS), 'DIR');
    this.appendStatementInput('DO')
        .appendField(BlocklyGames.getMsg('Maze_doCode'));
    this.appendStatementInput('ELSE')
        .appendField(BlocklyGames.getMsg('Maze_elseCode'));
    this.setTooltip(BlocklyGames.getMsg('Maze_ifelseTooltip'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript['maze_ifElse'] = function(block) {
  // Generate JavaScript for 'if/else' conditional if there is a path.
  var argument = block.getFieldValue('DIR') +
      '(\'block_id_' + block.id + '\')';
  var branch0 = Blockly.JavaScript.statementToCode(block, 'DO');
  var branch1 = Blockly.JavaScript.statementToCode(block, 'ELSE');
  var code = 'if (' + argument + ') {\n' + branch0 +
             '} else {\n' + branch1 + '}\n';
  return code;
};

Blockly.Blocks['maze_forever'] = {
  /**
   * Block for repeat loop.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Maze.Blocks.LOOPS_HUE);
    this.appendDummyInput()
        .appendField(BlocklyGames.getMsg('Maze_repeatUntil'))
        .appendField(new Blockly.FieldImage(Maze.Level6.VIEW.finishMarker, 12, 16));
    this.appendStatementInput('DO')
        .appendField(BlocklyGames.getMsg('Maze_doCode'));
    this.setPreviousStatement(true);
    this.setTooltip(BlocklyGames.getMsg('Maze_whileTooltip'));
  }
};

Blockly.JavaScript['maze_forever'] = function(block) {
  // Generate JavaScript for repeat loop.
  var branch = Blockly.JavaScript.statementToCode(block, 'DO');
  if (Blockly.JavaScript.INFINITE_LOOP_TRAP) {
    branch = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'block_id_' + block.id + '\'') + branch;
  }
  return 'while (notDone()) {\n' + branch + '}\n';
};

/**
 * Books equal zero serial
 */
Blockly.Blocks['maze_forever_books'] = {
  /**
   * Block for repeat loop.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Maze.Blocks.TASK_HUE);
    this.appendDummyInput()
        .appendField(BlocklyGames.getMsg('Maze_repeatTaskUntil'))
        .appendField(new Blockly.FieldImage(Maze.Level6.VIEW.book, 20, 17))
        .appendField(BlocklyGames.getMsg('Maze_booksZero'), 'booksZero');
        // .appendField(BlocklyGames.getMsg('Maze_booksZero'));
    this.appendStatementInput('DO')
        .appendField(BlocklyGames.getMsg('Maze_doCode'));
    this.setPreviousStatement(true);
    this.setTooltip(BlocklyGames.getMsg('Maze_whileBooksTooltip'));
  }

};

Blockly.JavaScript['maze_forever_books'] = function(block) {

  // Generate JavaScript for repeat loop.
  var branch = Blockly.JavaScript.statementToCode(block, 'DO');
  if (Blockly.JavaScript.INFINITE_LOOP_TRAP) {
    branch = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'block_id_' + block.id + '\'') + branch;
  }
  return 'while (notDone()) {\n' + branch + '}\n';
};

/**
 * Books equal zero parallel
 */
Blockly.Blocks['maze_forever_booksPar'] = {
  /**
   * Block for repeat loop.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Maze.Blocks.TASK_PAR);
    this.appendDummyInput()
        .appendField(BlocklyGames.getMsg('Maze_repeatTaskUntil'))
        .appendField(new Blockly.FieldImage(Maze.Level6.VIEW.book, 20, 17))
        .appendField(BlocklyGames.getMsg('Maze_booksZeroPar'));
    this.appendStatementInput('DO')
        .appendField(BlocklyGames.getMsg('Maze_doCode'));
    this.setPreviousStatement(true);
    this.setTooltip(BlocklyGames.getMsg('Maze_whileBooksTooltipPar'));
  }
};

Blockly.JavaScript['maze_forever_booksPar'] = function(block) {

  // Generate JavaScript for repeat loop.
  var branch = Blockly.JavaScript.statementToCode(block, 'DO');
  if (Blockly.JavaScript.INFINITE_LOOP_TRAP) {
    branch = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'block_id_' + block.id + '\'') + branch;
  }
  return 'while (notDone()) {\n' + branch + '}\n';
};


Blockly.Blocks['maze_forever_4activities'] = {
  /**
   * Block for repeat loop.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Maze.Blocks.TASK_HUE);
    this.appendDummyInput()
        .appendField(BlocklyGames.getMsg('Maze_repeatTaskUntil'))
        .appendField(new Blockly.FieldImage(Maze.Level2.VIEW.activity, 20, 17))
        .appendField(BlocklyGames.getMsg('Maze_4activitiesComplete'));
    this.appendStatementInput('DO')
        .appendField(BlocklyGames.getMsg('Maze_doCode'));
    this.setPreviousStatement(true);
    this.setTooltip(BlocklyGames.getMsg('Maze_whileAct4Tooltip'));
  }
};

Blockly.JavaScript['maze_forever_4activities'] = function(block) {
  // Generate JavaScript for repeat loop.
  var branch = Blockly.JavaScript.statementToCode(block, 'DO');
  if (Blockly.JavaScript.INFINITE_LOOP_TRAP) {
    branch = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'block_id_' + block.id + '\'') + branch;
  }
  return 'while (notDone()) {\n' + branch + '}\n';
};

Blockly.Blocks['maze_forever_2activities'] = {
  /**
   * Block for repeat loop.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Maze.Blocks.TASK_HUE);
    this.appendDummyInput()
        .appendField(BlocklyGames.getMsg('Maze_repeatTaskUntil'))
        .appendField(new Blockly.FieldImage(Maze.Level2.VIEW.activity, 20, 17))
        .appendField(BlocklyGames.getMsg('Maze_2activitiesComplete'));
    this.appendStatementInput('DO')
        .appendField(BlocklyGames.getMsg('Maze_doCode'));
    this.setPreviousStatement(true);
    this.setTooltip(BlocklyGames.getMsg('Maze_whileAct2Tooltip'));
  }
};

Blockly.JavaScript['maze_forever_2activities'] = function(block) {
  // Generate JavaScript for repeat loop.
  var branch = Blockly.JavaScript.statementToCode(block, 'DO');
  if (Blockly.JavaScript.INFINITE_LOOP_TRAP) {
    branch = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'block_id_' + block.id + '\'') + branch;
  }
  return 'while (notDone()) {\n' + branch + '}\n';
};

/**
 * Set 1 student
 */
Blockly.Blocks['maze_1student'] = {
  /**
   * Block for 'if' conditional if there is a path.
   * @this Blockly.Block
   */
  init: function() {
    var STUDENTS =
        [[BlocklyGames.getMsg('Maze_student0'), 'isStudent0']];
    this.setColour(Maze.Blocks.STUDENT_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(STUDENTS), 'STD');
    this.appendStatementInput('DO')
        .appendField(BlocklyGames.getMsg('Maze_doCode'));
    this.setTooltip(BlocklyGames.getMsg('Maze_ifStdTooltip'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript['maze_1student'] = function(block) {
  // Generate JavaScript for 'if' conditional if there is a path.
  var argument = block.getFieldValue('STD') +
      '(\'block_id_' + block.id + '\')';
  var branch = Blockly.JavaScript.statementToCode(block, 'DO');
  var code = 'if (' + argument + ') {\n' + branch + '}\n';
  return code;
};

/**
 * Set 2 students
 */
Blockly.Blocks['maze_2students'] = {
  /**
   * Block for 'if' conditional if there is a path.
   * @this Blockly.Block
   */
  init: function() {
    var STUDENTS =
        [[BlocklyGames.getMsg('Maze_student0'), 'isStudent0'],
         [BlocklyGames.getMsg('Maze_student1'), 'isStudent1']];
    this.setColour(Maze.Blocks.STUDENT_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(STUDENTS), 'STD');
    this.appendStatementInput('DO')
        .appendField(BlocklyGames.getMsg('Maze_doCode'));
    this.setTooltip(BlocklyGames.getMsg('Maze_ifStdTooltip'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript['maze_2students'] = function(block) {
  // Generate JavaScript for 'if' conditional if there is a path.
  var argument = block.getFieldValue('STD') +
      '(\'block_id_' + block.id + '\')';
  var branch = Blockly.JavaScript.statementToCode(block, 'DO');
  var code = 'if (' + argument + ') {\n' + branch + '}\n';
  return code;
};

/*
 * Set three students
 */
Blockly.Blocks['maze_student'] = {
  /**
   * Block for 'if' conditional if there is a path.
   * @this Blockly.Block
   */
  init: function() {
    var STUDENTS =
        [[BlocklyGames.getMsg('Maze_student0'), 'isStudent0'],
         [BlocklyGames.getMsg('Maze_student1'), 'isStudent1'],
         [BlocklyGames.getMsg('Maze_student2'), 'isStudent2']];
    this.setColour(Maze.Blocks.STUDENT_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(STUDENTS), 'STD');
    this.appendStatementInput('DO')
        .appendField(BlocklyGames.getMsg('Maze_doCode'));
    this.setTooltip(BlocklyGames.getMsg('Maze_ifStdTooltip'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript['maze_student'] = function(block) {
  // Generate JavaScript for 'if' conditional if there is a path.
  var argument = block.getFieldValue('STD') +
      '(\'block_id_' + block.id + '\')';
  var branch = Blockly.JavaScript.statementToCode(block, 'DO');
  var code = 'if (' + argument + ') {\n' + branch + '}\n';
  return code;
};