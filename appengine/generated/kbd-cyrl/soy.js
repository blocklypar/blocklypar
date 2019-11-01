// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly \u0438 \u0434\u0436\u044D\u0433\u0443\u043AI\u044D\u0445\u044D\u0440</span><span id="Games_puzzle">\u0423\u0437\u044B\u0433\u044A\u044D\u0433\u0443\u043F\u0441\u044B\u0441\u044D</span><span id="Games_maze">\u0414\u044B\u0445\u044C\u044D-\u0434\u044D\u043AI</span><span id="Games_bird">\u0411\u0437\u0443</span><span id="Games_turtle">\u0428\u044B\u043B\u044A\u044D\u0433\u0443</span><span id="Games_movie">\u041D\u044D\u0442\u044B\u043D</span><span id="Games_music">Music</span><span id="Games_pondTutor">Pond Tutor</span><span id="Games_pond">\u041F\u0441\u044B\u0445\u044A\u0443\u0440\u0435\u0439</span><span id="Games_genetics">Genetics</span><span id="Games_linesOfCode1">You solved this level with 1 line of JavaScript:</span><span id="Games_linesOfCode2">You solved this level with %1 lines of JavaScript:</span><span id="Games_nextLevel">Are you ready for level %1?</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">\u0425\u044A\u0443\u043C\u0430\u0443\u044D \u0431\u043B\u043E\u043A\u0445\u044D\u043C \u044F \u0442\u0435\u0445\u044C\u044D\u043FI\u044D\u0440 \u043A\u044A\u044D\u0433\u044A\u044D\u043B\u044A\u0430\u0433\u044A\u0443\u044D\u043D.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044D\u0440 \u0435\u0433\u044A\u044D\u0436\u044C\u044D\u043D</span><span id="Games_resetTooltip">\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044D\u0440 \u043A\u044A\u044D\u0433\u044A\u044D\u0443\u0432\u044BI\u0430\u0443\u044D \u0437\u0434\u044B\u043D\u044D\u0441\u0430\u0440\u0438 \u0449\u044B\u0433\u044A\u044D\u0433\u044A\u0443\u043F\u0449\u044D\u043D.</span><span id="Games_resetProgram">\u041F\u0441\u043E\u0440\u0438 \u0449\u044B\u0433\u044A\u044D\u0433\u044A\u0443\u043F\u0449\u044D\u043D</span><span id="Games_help">\u0414\u044D\u04C0\u044D\u043F\u044B\u043A\u044A\u0443\u044D\u0433\u044A\u0443</span><span id="Games_dialogOk">\u0425\u042A\u0423\u0410\u0429</span><span id="Games_dialogCancel">\u0429\u04C0\u0435\u0433\u044A\u0443\u044D\u0436\u044B\u043D</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">Loops</span><span id="Games_catMath">\u041C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u044D</span><span id="Games_catText">\u0422\u0445\u044B\u0433\u044A\u044D</span><span id="Games_catLists">\u041A\u044A\u0435\u0431\u0436\u044D\u043AI</span><span id="Games_catColour">\u041F\u043B\u044A\u044B\u0444\u044D</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Functions</span><span id="Games_httpRequestError">There was a problem with the request.</span><span id="Games_linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">\u043A\u044A\u0435\u0431\u0436\u044D\u043AI</span><span id="Games_textVariable">text</span><span id="Games_breakLink">Once you start editing JavaScript, you can\'t go back to editing blocks. Is this OK?</span><span id="Games_blocks">Blocks</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blockly \u0438 \u0434\u0436\u044D\u0433\u0443\u043AI\u044D\u0445\u044D\u0440</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Congratulations!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">\u0429\u04C0\u0435\u0433\u044A\u0443\u044D\u0436\u044B\u043D</button><button id="doneOk" class="secondary">\u0425\u042A\u0423\u0410\u0429</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">This level is extremely difficult. Would you like to skip it and go onto the next game? You can always come back later.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">\u0429\u04C0\u0435\u0433\u044A\u0443\u044D\u0436\u044B\u043D</button><button id="abortOk" class="secondary">\u0425\u042A\u0423\u0410\u0429</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">\u0425\u042A\u0423\u0410\u0429</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
