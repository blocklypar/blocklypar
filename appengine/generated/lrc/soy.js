// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly Games</span><span id="Games_puzzle">\u0686\u063D\u0646\u0671 \u0686\u063D\u0646\u0671</span><span id="Games_maze">\u067E\u0644\u0627\u0642 \u0628\u06CC\u0626\u0646</span><span id="Games_bird">\u0628\u0627\u0644\u0646\u0671</span><span id="Games_turtle">\u06A9\u06C9\u0633\u0671\u0644</span><span id="Games_movie">\u0641\u06CC\u0644\u065B\u0645</span><span id="Games_music">Music</span><span id="Games_pondTutor">Pond Tutor</span><span id="Games_pond">Pond</span><span id="Games_genetics">Genetics</span><span id="Games_linesOfCode1">You solved this level with 1 line of JavaScript:</span><span id="Games_linesOfCode2">You solved this level with %1 lines of JavaScript:</span><span id="Games_nextLevel">Are you ready for level %1?</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">\u0628\u0671\u062E\u0634\u063D\u0627\u0646\u0671 \u0632\u0671\u062E\u06CC\u0631\u0671 \u06C9 \u0647\u0648\u0645 \u067E\u0627\u065B\u06A4\u0671\u0646 \u0628\u0671\u06A9\u063D\u062A.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">\u0628\u0631\u0646\u0627\u0645\u0671 \u0646\u0627\u0652 \u0627\u0652\u062C\u0631\u0627 \u0628\u0671\u06A9\u063D\u062A</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">\u062F \u0646\u06CA \u0634\u0631\u06CA \u0643\u0631\u062F\u0646</span><span id="Games_help">\u0631\u0671 \u062F\u063D\u0627\u0631\u06CC</span><span id="Games_dialogOk">\u062E\u06CA\u0626\u0671</span><span id="Games_dialogCancel">\u0631\u0671\u062F \u0643\u0631\u062F\u0646</span><span id="Games_catLogic">\u0639\u0671\u0642\u0644\u0645\u0671\u0646\u06CC</span><span id="Games_catLoops">\u0647\u0671\u0644\u0642\u0671\u06CC\u0627</span><span id="Games_catMath">\u0647\u0633\u0627\u0648 \u06A9\u062A\u0627\u0648</span><span id="Games_catText">\u0645\u0671\u062A\u0646</span><span id="Games_catLists">\u0646\u0648\u0645\u06AF\u0671\u06CC\u0627</span><span id="Games_catColour">\u0631\u0671\u0646\u06B3</span><span id="Games_catVariables">\u0622\u0644\u0634\u062A\u063D\u0627</span><span id="Games_catProcedures">\u0631\u0648\u06CC\u0671\u06CC\u0627</span><span id="Games_httpRequestError">\u06CC\u0627\u065B \u0645\u0648\u0634\u06AF\u0644 \u06A4\u0627 \u062F\u0671\u0631\u0647\u0627\u0633\u062A \u0647\u063D</span><span id="Games_linkAlert">\u0628\u0671\u062E\u0634\u063D\u0627\u062A\u0648\u0646 \u06A4\u0627 \u0627\u063D \u0647\u0648\u0645 \u067E\u0627\u065B\u06A4\u0671\u0646 \u0628\u0671\u0626\u0631 \u0628\u0671\u06A9\u063D\u062A</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">\u0646\u0648\u0645\u06AF\u0671</span><span id="Games_textVariable">\u0645\u0671\u062A\u0646</span><span id="Games_breakLink">Once you start editing JavaScript, you can\'t go back to editing blocks. Is this OK?</span><span id="Games_blocks">Blocks</div></div>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Congratulations!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">\u0631\u0671\u062F \u0643\u0631\u062F\u0646</button><button id="doneOk" class="secondary">\u062E\u06CA\u0626\u0671</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">This level is extremely difficult. Would you like to skip it and go onto the next game? You can always come back later.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">\u0631\u0671\u062F \u0643\u0631\u062F\u0646</button><button id="abortOk" class="secondary">\u062E\u06CA\u0626\u0671</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">\u062E\u06CA\u0626\u0671</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
