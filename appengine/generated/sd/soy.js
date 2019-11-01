// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">\u0628\u0644\u0627\u06AA\u064A \u0631\u0627\u0646\u062F\u064A\u0648\u0646</span><span id="Games_puzzle">\u06B3\u062C\u0647\u0627\u0631\u062A</span><span id="Games_maze">\u0648\u0631 \u0648\u06AA\u0699</span><span id="Games_bird">\u067E\u06A9\u064A</span><span id="Games_turtle">\u06AA\u0645\u064A</span><span id="Games_movie">\u0641\u0644\u0645</span><span id="Games_music">\u0645\u0648\u0633\u064A\u0642\u064A</span><span id="Games_pondTutor">\u062A\u0644\u0627\u0621\u064F \u0633\u064A\u0631</span><span id="Games_pond">\u062A\u0644\u0627\u0621\u064F</span><span id="Games_genetics">\u0639\u0644\u0645 \u062C\u064A\u0646\u064A\u0627\u062A</span><span id="Games_linesOfCode1">\u0627\u0648\u06BE\u0627\u0646 \u06BE\u064A \u0645\u0631\u062D\u0644\u0648 \u062C\u0627\u0648\u0627 \u0627\u0633\u06AA\u0631\u067E\u067D \u062C\u064A 1 \u0633\u067D \u0633\u0627\u0646 \u0645\u06AA\u0645\u0644 \u06AA\u0626\u064A:</span><span id="Games_linesOfCode2">\u0627\u0648\u06BE\u0627\u0646 \u06BE\u064A \u0645\u0631\u062D\u0644\u0648 \u062C\u0627\u0648\u0627 \u0627\u0633\u06AA\u0631\u067E\u067D \u062C\u064A %1 \u0633\u067D \u0633\u0627\u0646 \u0645\u06AA\u0645\u0644 \u06AA\u0626\u064A:</span><span id="Games_nextLevel">\u0627\u0648\u06BE\u0627\u0646 %1 \u0645\u0631\u062D\u0644\u064A \u0644\u0627\u0621\u0650 \u062A\u064A\u0627\u0631 \u0622\u06BE\u064A\u0648\u061F</span><span id="Games_finalLevel">\u0627\u0648\u06BE\u0627\u0646 \u067B\u064A \u0645\u0642\u0627\u0628\u0644\u064A \u0644\u0627\u0621\u0650 \u062A\u064A\u0627\u0631 \u0622\u06BE\u064A\u0648\u061F</span><span id="Games_submitTitle">\u0639\u0646\u0648\u0627\u0646:</span><span id="Games_linkTooltip">\u0645\u062D\u0641\u0648\u0638 \u06AA\u064A\u0648 \u06FD \u0628\u0644\u0627\u06AA\u0646 \u0633\u0627\u0646 \u06B3\u0646\u068D\u064A\u0648</span><span id="Games_runTooltip">\u067E\u0646\u06BE\u0646\u062C\u0648 \u0644\u06A9\u064A\u0644 \u067E\u0631\u0648\u06AF\u0631\u0627\u0645 \u06BE\u0644\u0627\u064A\u0648.</span><span id="Games_runProgram">\u067E\u0631\u0648\u06AF\u0631\u0627\u0645 \u0647\u0644\u0627\u064A\u0648</span><span id="Games_resetTooltip">\u067E\u0631\u0648\u06AF\u0631\u0627\u0645 \u06A9\u064A \u0628\u064A\u06BE\u0627\u0631\u064A \u0645\u0631\u062D\u0644\u064A \u06A9\u064A \u067B\u064A\u0647\u0631 \u062A\u0631\u062A\u064A\u0628 \u068F\u064A\u0648.</span><span id="Games_resetProgram">\u067B\u064A\u0647\u0631 \u062A\u0631\u062A\u064A\u0628 \u068F\u064A\u0648</span><span id="Games_help">\u0645\u062F\u062F</span><span id="Games_dialogOk">\u067A\u064A\u06AA</span><span id="Games_dialogCancel">\u0631\u062F</span><span id="Games_catLogic">\u0645\u0646\u0637\u0642</span><span id="Games_catLoops">\u0686\u06AA\u0631</span><span id="Games_catMath">\u0631\u064A\u0627\u0636\u064A</span><span id="Games_catText">\u0627\u06A9\u0631</span><span id="Games_catLists">\u0641\u06BE\u0631\u0633\u062A</span><span id="Games_catColour">\u0631\u0646\u06AF</span><span id="Games_catVariables">\u06A6\u0631\u06BB\u0627</span><span id="Games_catProcedures">\u0639\u0645\u0644</span><span id="Games_httpRequestError">\u06BE\u0646 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0633\u0627\u0646 \u0645\u0626\u0633\u0644\u0648 \u062F\u0631\u067E\u064A\u0634 \u0622\u06BE\u064A.</span><span id="Games_linkAlert">%1</span><span id="Games_hashError">\u0645\u0639\u0630\u0631\u062A %1 \u06AA\u0646\u06BE\u0646 \u0628\u06C1 \u0645\u062D\u0641\u0648\u0638 \u06AA\u064A\u0644 \u0631\u0627\u0646\u062F \u0633\u0627\u0646 \u0644\u0627\u06B3\u0627\u067E\u0648 \u0646\u067F\u064A \u0631\u06A9\u064A.</span><span id="Games_xmlError">\u0627\u0648\u06BE\u0627\u0646 \u062C\u0648 \u0645\u062D\u0641\u0648\u0638 \u06AA\u064A\u0644 \u0641\u0627\u0626\u0644 \u06A9\u064F\u0644\u064A \u0646\u06C1 \u067E\u064A\u0648\u060C \u0627\u0648\u06BE\u0627\u0646 \u06BE\u0646 \u0641\u0627\u0626\u0644 \u06A9\u064A \u06AA\u0646\u06BE\u0646 \u067B\u064A \u0628\u0644\u0627\u06AA\u064A \u0648\u0631\u0632\u0646 \u06FE \u0645\u062D\u0641\u0648\u0638 \u06AA\u064A\u0648 \u06BE\u0648\u061F</span><span id="Games_submitted">\u06BE\u0646 \u067E\u0631\u0648\u06AF\u0631\u0627\u0645 \u0644\u0627\u0621\u0650 \u0645\u06BE\u0631\u0628\u0627\u0646\u064A! \u062C\u064A\u06AA\u068F\u06BE\u0646 \u0627\u0633\u0627\u0646 \u062C\u064A \u0680\u0648\u0644\u0699\u064A\u064E \u0646\u0645\u0627 \u0639\u0645\u0644\u064A \u06A9\u064A \u067E\u0633\u0646\u062F \u0622\u064A\u0648\u060C \u062A\u06C1 \u06BE\u0646 \u06A9\u064A \u06AF\u064A\u0644\u0631\u064A \u06FE \u06AA\u062C\u06BE\u06C1 \u068F\u064A\u0646\u06BE\u0646 \u0627\u0646\u062F\u0631 \u0634\u0627\u064A\u0639 \u06AA\u064A\u0648 \u0648\u064A\u0646\u062F\u0648.</span><span id="Games_listVariable">\u0641\u0647\u0631\u0633\u062A</span><span id="Games_textVariable">\u0627\u06A9\u0631</span><span id="Games_breakLink">\u062C\u064A\u06AA\u068F\u06BE\u0646 \u06BE\u06AA \u062F\u0641\u0639\u064A \u0627\u0648\u06BE\u0627\u0646 \u062C\u0627\u0648\u0627 \u0627\u0633\u06AA\u067E\u0631\u067D \u062C\u064A \u0633\u0646\u0648\u0627\u0631 \u0634\u0631\u0648\u0639 \u06AA\u0626\u064A\u060C \u0627\u0648\u06BE\u0627\u0646 \u0628\u0644\u0627\u06AA\u0646 \u068F\u0627\u0646\u06BE\u0646 \u0648\u0627\u067E\u0633 \u0646\u06C1 \u0648\u0683\u064A \u0633\u06AF\u0647\u0646\u062F\u0648. \u0627\u06BE\u0648 \u067A\u064A\u06AA \u0622\u06BE\u064A\u061F</span><span id="Games_blocks">\u0628\u0644\u0627\u06AA\u0648\u0646</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + '\u0628\u0644\u0627\u06AA\u064A \u0631\u0627\u0646\u062F\u064A\u0648\u0646</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">\u0645\u0628\u0627\u0631\u06AA\u0648\u0646!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">\u0631\u062F</button><button id="doneOk" class="secondary">\u067A\u064A\u06AA</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">\u06BE\u064A \u0645\u0631\u062D\u0644\u0648 \u0627\u0646\u062A\u06BE\u0627\u0626\u064A \u0645\u0634\u06AA\u0644 \u0622\u06BE\u064A. \u0627\u0648\u06BE\u0627\u0646 \u0627\u0646 \u06A9\u064A \u0627\u06B3\u062A\u064A \u06AA\u0631\u06BB \u0686\u0627\u06BE\u064A\u0648 \u067F\u0627 \u06FD \u067B\u064A \u0645\u0631\u062D\u0644\u064A \u06FE \u062F\u0627\u062E\u0644 \u067F\u064A\u06BB \u0686\u0627\u06BE\u064A\u0648 \u067F\u0627\u061F \u0627\u0648\u06BE\u0627\u0646 \u06BE\u0645\u064A\u0634\u06C1 \u0648\u0627\u067E\u0633 \u0627\u0686\u064A \u0633\u06AF\u0647\u0648 \u067F\u0627.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">\u0631\u062F</button><button id="abortOk" class="secondary">\u067A\u064A\u06AA</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">\u067A\u064A\u06AA</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
