// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">\u0628\u0627\u0632\u06CC\u200C\u0647\u0627\u06CC \u0628\u0633\u062A\u0646</span><span id="Games_puzzle">\u067E\u0627\u0632\u0644</span><span id="Games_maze">\u067E\u06CC\u0686\u200C\u062F\u0631\u067E\u06CC\u0686</span><span id="Games_bird">\u0645\u0629\u0644/\u067E\u0631\u0646\u062F\u0647</span><span id="Games_turtle">\u06A9\u06CE\u0633\u0629\u0644/\u0644\u0627\u06A9\u067E\u0634\u062A</span><span id="Games_movie">\u0641\u06CC\u0644\u0645</span><span id="Games_music">Music</span><span id="Games_pondTutor">Pond Tutor</span><span id="Games_pond">\u0645\u0627\u062A \u0626\u0627\u0648\u0648/\u062A\u0627\u0644\u0627\u0628</span><span id="Games_genetics">Genetics</span><span id="Games_linesOfCode1">You solved this level with 1 line of JavaScript:</span><span id="Games_linesOfCode2">You solved this level with %1 lines of JavaScript:</span><span id="Games_nextLevel">\u0622\u06CC\u0627 \u0628\u0631\u0627\u06CC \u0645\u0631\u062D\u0644\u0647 %1 \u0622\u0645\u0627\u062F\u0647 \u0627\u06CC\u062F\u061F</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">\u0630\u062E\u06CC\u0631\u0647 \u0648 \u067E\u06CC\u0648\u0646\u062F \u0628\u0647 \u0628\u0644\u0648\u06A9\u200C\u0647\u0627.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">\u0627\u062C\u0631\u0627\u06CC \u0628\u0631\u0646\u0627\u0645\u0647</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">\u0625\u0698 \u062F\u0648\u0648\u0627\u0631\u0629</span><span id="Games_help">\u0631\u0627\u0647\u0646\u0645\u0627</span><span id="Games_dialogOk">\u062A\u0623\u06CC\u06CC\u062F</span><span id="Games_dialogCancel">\u0626\u0622\u0647\u0648\u0648\u0633\u0627\u0646\u0646/\u0644\u063A\u0648</span><span id="Games_catLogic">\u0645\u0646\u0637\u0642</span><span id="Games_catLoops">\u062D\u0644\u0642\u0647\u200C\u0647\u0627</span><span id="Games_catMath">\u0631\u06CC\u0627\u0636\u06CC</span><span id="Games_catText">\u0645\u062A\u0646</span><span id="Games_catLists">\u0644\u06CC\u0633\u062A\u0629\u0644</span><span id="Games_catColour">\u0631\u0629\u0646\u06AF</span><span id="Games_catVariables">\u0645\u062A\u063A\u06CC\u06CC\u0631\u0647\u0627</span><span id="Games_catProcedures">\u062A\u0648\u0627\u0628\u0639</span><span id="Games_httpRequestError">\u0645\u0634\u06A9\u0644\u06CC \u0628\u0627 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0648\u062C\u0648\u062F \u062F\u0627\u0634\u062A.</span><span id="Games_linkAlert">\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC \u0628\u0644\u0627\u06A9\u200C\u0647\u0627\u06CC\u062A\u0627\u0646 \u0628\u0627 \u0627\u06CC\u0646 \u067E\u06CC\u0648\u0646\u062F:\n\n%1</span><span id="Games_hashError">\u067E\u0648\u0632\u0634\u060C \u00AB%1\u00BB \u0628\u0627 \u0647\u06CC\u0686 \u0628\u0631\u0646\u0627\u0645\u0647\u0654 \u0630\u062E\u06CC\u0631\u0647\u200C\u0634\u062F\u0647\u200C\u0627\u06CC \u062A\u0637\u0628\u06CC\u0642 \u067E\u06CC\u062F\u0627 \u0646\u06A9\u0631\u062F.</span><span id="Games_xmlError">\u0646\u062A\u0648\u0627\u0646\u0633\u062A \u067E\u0631\u0648\u0646\u062F\u0647\u0654 \u0630\u062E\u06CC\u0631\u0647\u0654 \u0634\u0645\u0627 \u0628\u0627\u0631\u06AF\u06CC\u0631\u06CC \u0634\u0648\u062F.  \u0627\u062D\u062A\u0645\u0627\u0644\u0627\u064B \u0628\u0627 \u0646\u0633\u062E\u0647\u0654 \u0645\u062A\u0641\u0627\u0648\u062A\u06CC \u0627\u0632 \u0628\u0644\u0648\u06A9\u06CC \u062F\u0631\u0633\u062A \u0634\u062F\u0647\u200C\u0627\u0633\u062A\u061F</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">\u0644\u06CC\u0633\u062A</span><span id="Games_textVariable">\u0645\u062A\u0646</span><span id="Games_breakLink">Once you start editing JavaScript, you can\'t go back to editing blocks. Is this OK?</span><span id="Games_blocks">Blocks</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + '\u0628\u0627\u0632\u06CC\u200C\u0647\u0627\u06CC \u0628\u0633\u062A\u0646</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">\u062A\u0628\u0631\u06CC\u06A9 \u0645\u0648\u0648\u0634\u06CC\u0645!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">\u0626\u0622\u0647\u0648\u0648\u0633\u0627\u0646\u0646/\u0644\u063A\u0648</button><button id="doneOk" class="secondary">\u062A\u0623\u06CC\u06CC\u062F</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">This level is extremely difficult. Would you like to skip it and go onto the next game? You can always come back later.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">\u0626\u0622\u0647\u0648\u0648\u0633\u0627\u0646\u0646/\u0644\u063A\u0648</button><button id="abortOk" class="secondary">\u062A\u0623\u06CC\u06CC\u062F</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">\u062A\u0623\u06CC\u06CC\u062F</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
