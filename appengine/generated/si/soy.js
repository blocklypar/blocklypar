// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly Games</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Maze</span><span id="Games_bird">Bird</span><span id="Games_turtle">Turtle</span><span id="Games_movie">Movie</span><span id="Games_music">Music</span><span id="Games_pondTutor">Pond Tutor</span><span id="Games_pond">Pond</span><span id="Games_genetics">Genetics</span><span id="Games_linesOfCode1">You solved this level with 1 line of JavaScript:</span><span id="Games_linesOfCode2">You solved this level with %1 lines of JavaScript:</span><span id="Games_nextLevel">Are you ready for level %1?</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">\u0DB8\u0DD8\u0DAF\u0DD4\u0D9A\u0DCF\u0D82\u0D9C\u0DBA \u0D9A\u0DCA\u200D\u0DBB\u0DD2\u0DBA\u0DCF\u0DAD\u0DCA\u0DB8\u0D9A \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">\u0DB1\u0DD0\u0DC0\u0DAD \u0DC3\u0D9A\u0DC3\u0DB1\u0DCA\u0DB1</span><span id="Games_help">\u0D8B\u0DAF\u0DC0\u0DCA</span><span id="Games_dialogOk">\u0DC4\u0DBB\u0DD2</span><span id="Games_dialogCancel">\u0D85\u0DC0\u0DBD\u0D82\u0D9C\u0DD4 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1</span><span id="Games_catLogic">\u0DAD\u0DBB\u0DCA\u0D9A\u0DBA</span><span id="Games_catLoops">Loops</span><span id="Games_catMath">\u0D9C\u0DAB\u0DD2\u0DAD</span><span id="Games_catText">\u0DB4\u0DD9\u0DC5</span><span id="Games_catLists">\u0DBD\u0DD0\u0DBA\u0DD2\u0DC3\u0DCA\u0DAD\u0DD4</span><span id="Games_catColour">\u0DC0\u0DBB\u0DCA\u0DAB\u0DBA</span><span id="Games_catVariables">\u0DC0\u0DD2\u0DA0\u0DBD\u0DCA\u200D\u0DBA\u0DBA\u0DB1\u0DCA</span><span id="Games_catProcedures">\u0DC1\u0DCA\u200D\u0DBB\u0DD2\u0DAD</span><span id="Games_httpRequestError">\u0D89\u0DBD\u0DCA\u0DBD\u0DD3\u0DB8\u0DD9\u0DC4\u0DD2 \u0DAF\u0DDD\u0DC2\u0DBA\u0D9A\u0DCA \u0DAD\u0DD2\u0DB6\u0DD4\u0DB1\u0DD2.</span><span id="Games_linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">\u0DBD\u0DD0\u0DBA\u0DD2\u0DC3\u0DCA\u0DAD\u0DD4\u0DC0</span><span id="Games_textVariable">\u0DB4\u0DD9\u0DC5</span><span id="Games_breakLink">Once you start editing JavaScript, you can\'t go back to editing blocks. Is this OK?</span><span id="Games_blocks">Blocks</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blockly Games</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.titleSpan.soyTemplateName = 'BlocklyGames.soy.titleSpan';
}


BlocklyGames.soy.levelLinks = function(opt_data, opt_ignored, opt_ijData) {
  var output = ' &nbsp; ';
  var iLimit183 = opt_data.maxLevel + 1;
  for (var i183 = 1; i183 < iLimit183; i183++) {
    output += ' ' + ((i183 == opt_data.level) ? '<span class="level_number level_done" id="level' + soy.$$escapeHtml(i183) + '">' + soy.$$escapeHtml(i183) + '</span>' : (i183 == opt_data.maxLevel) ? '<a class="level_number" id="level' + soy.$$escapeHtml(i183) + '" href="?lang=' + soy.$$escapeHtml(opt_data.lang) + '&level=' + soy.$$escapeHtml(i183) + soy.$$escapeHtml(opt_data.suffix) + '">' + soy.$$escapeHtml(i183) + '</a>' : '<a class="level_dot" id="level' + soy.$$escapeHtml(i183) + '" href="?lang=' + soy.$$escapeHtml(opt_data.lang) + '&level=' + soy.$$escapeHtml(i183) + soy.$$escapeHtml(opt_data.suffix) + '"></a>');
  }
  return output;
};
if (goog.DEBUG) {
  BlocklyGames.soy.levelLinks.soyTemplateName = 'BlocklyGames.soy.levelLinks';
}


BlocklyGames.soy.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.dialog.soyTemplateName = 'BlocklyGames.soy.dialog';
}


BlocklyGames.soy.doneDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Congratulations!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">\u0D85\u0DC0\u0DBD\u0D82\u0D9C\u0DD4 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1</button><button id="doneOk" class="secondary">\u0DC4\u0DBB\u0DD2</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">This level is extremely difficult. Would you like to skip it and go onto the next game? You can always come back later.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">\u0D85\u0DC0\u0DBD\u0D82\u0D9C\u0DD4 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1</button><button id="abortOk" class="secondary">\u0DC4\u0DBB\u0DD2</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.abortDialog.soyTemplateName = 'BlocklyGames.soy.abortDialog';
}


BlocklyGames.soy.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.storageDialog.soyTemplateName = 'BlocklyGames.soy.storageDialog';
}


BlocklyGames.soy.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">\u0DC4\u0DBB\u0DD2</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
