// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">\u0406\u0433\u0440\u0438 Blockly</span><span id="Games_puzzle">\u0413\u043E\u043B\u043E\u0432\u043E\u043B\u043E\u043C\u043A\u0430</span><span id="Games_maze">\u041B\u0430\u0431\u0456\u0440\u0438\u043D\u0442</span><span id="Games_bird">\u041F\u0442\u0430\u0448\u043A\u0430</span><span id="Games_turtle">\u0427\u0435\u0440\u0435\u043F\u0430\u0445\u0430</span><span id="Games_movie">\u0424\u0456\u043B\u044C\u043C</span><span id="Games_music">\u041C\u0443\u0437\u0438\u043A\u0430</span><span id="Games_pondTutor">\u0421\u0442\u0430\u0432\u043E\u0447\u043E\u043A</span><span id="Games_pond">\u0421\u0442\u0430\u0432</span><span id="Games_genetics">\u0413\u0435\u043D\u0435\u0442\u0438\u043A\u0430</span><span id="Games_linesOfCode1">\u0420\u0456\u0432\u0435\u043D\u044C \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u043E \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E 1 \u0440\u044F\u0434\u043A\u0430 JavaScript:</span><span id="Games_linesOfCode2">\u0420\u0456\u0432\u0435\u043D\u044C \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u043E \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E %1 \u0440\u044F\u0434\u043A\u0456\u0432 JavaScript:</span><span id="Games_nextLevel">\u0412\u0438 \u0433\u043E\u0442\u043E\u0432\u0456 \u0434\u043E \u0440\u0456\u0432\u043D\u044F %1?</span><span id="Games_finalLevel">\u0412\u0438 \u0433\u043E\u0442\u043E\u0432\u0456 \u0434\u043E \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0433\u043E \u0432\u0438\u043F\u0440\u043E\u0431\u0443\u0432\u0430\u043D\u043D\u044F?</span><span id="Games_submitTitle">\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A:</span><span id="Games_linkTooltip">\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0456 \u043F\u043E\u0432\'\u044F\u0437\u0430\u0442\u0438 \u0437 \u0431\u043B\u043E\u043A\u0430\u043C\u0438.</span><span id="Games_runTooltip">\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0438 \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0443 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0443.</span><span id="Games_runProgram">\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0443</span><span id="Games_resetTooltip">\u0417\u0443\u043F\u0438\u043D\u0438\u0442\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0443 \u0456 \u0441\u043A\u0438\u043D\u0443\u0442\u0438 \u0432 \u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u0438\u0439 \u0441\u0442\u0430\u043D.</span><span id="Games_resetProgram">\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438</span><span id="Games_help">\u0414\u043E\u0432\u0456\u0434\u043A\u0430</span><span id="Games_dialogOk">\u0413\u0430\u0440\u0430\u0437\u0434</span><span id="Games_dialogCancel">\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438</span><span id="Games_catLogic">\u041B\u043E\u0433\u0456\u043A\u0430</span><span id="Games_catLoops">\u0426\u0438\u043A\u043B\u0438</span><span id="Games_catMath">\u041C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430</span><span id="Games_catText">\u0422\u0435\u043A\u0441\u0442</span><span id="Games_catLists">\u0421\u043F\u0438\u0441\u043A\u0438</span><span id="Games_catColour">\u041A\u043E\u043B\u0456\u0440</span><span id="Games_catVariables">\u0417\u043C\u0456\u043D\u043D\u0456</span><span id="Games_catProcedures">\u0424\u0443\u043D\u043A\u0446\u0456\u0457</span><span id="Games_httpRequestError">\u0412\u0438\u043D\u0438\u043A\u043B\u0430 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u0456\u0437 \u0437\u0430\u043F\u0438\u0442\u043E\u043C.</span><span id="Games_linkAlert">\u041F\u043E\u0434\u0456\u043B\u0438\u0442\u0438\u0441\u044F \u0432\u0430\u0448\u0438\u043C\u0438 \u0431\u043B\u043E\u043A\u0430\u043C\u0438 \u0447\u0435\u0440\u0435\u0437 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F:\n\n%1</span><span id="Games_hashError">\u041D\u0430 \u0436\u0430\u043B\u044C, "%1" \u043D\u0435 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0454 \u0436\u043E\u0434\u043D\u0456\u0439 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u0456\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0456.</span><span id="Games_xmlError">\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0432\u0430\u0448 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u0438\u0439 \u0444\u0430\u0439\u043B. \u041C\u043E\u0436\u043B\u0438\u0432\u043E, \u0432\u0456\u043D \u0431\u0443\u0432 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u0438\u0439 \u0437 \u0456\u043D\u0448\u043E\u0457 \u0432\u0435\u0440\u0441\u0456\u0457 Blockly?</span><span id="Games_submitted">\u0414\u044F\u043A\u0443\u0454\u043C\u043E \u0437\u0430 \u0446\u044E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0443! \u042F\u043A\u0449\u043E \u043D\u0430\u0448\u0438\u043C \u0434\u0440\u0435\u0441\u043E\u0432\u0430\u043D\u0438\u043C \u043C\u0430\u0432\u043F\u043E\u0447\u043A\u0430\u043C \u0432\u043E\u043D\u0430 \u0441\u043F\u043E\u0434\u043E\u0431\u0430\u0454\u0442\u044C\u0441\u044F, \u0442\u043E \u0432\u043E\u043D\u0438 \u043E\u043F\u0443\u0431\u043B\u0456\u043A\u0443\u044E\u0442\u044C \u0457\u0457 \u0432 \u0433\u0430\u043B\u0435\u0440\u0435\u0457 \u0443\u043F\u0440\u043E\u0434\u043E\u0432\u0436 \u0434\u0435\u043A\u0456\u043B\u044C\u043A\u043E\u0445 \u0434\u043D\u0456\u0432.</span><span id="Games_listVariable">\u0441\u043F\u0438\u0441\u043E\u043A</span><span id="Games_textVariable">\u0442\u0435\u043A\u0441\u0442</span><span id="Games_breakLink">\u0420\u043E\u0437\u043F\u043E\u0447\u0430\u0432\u0448\u0438 \u0440\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 JavaScript, \u0432\u0438 \u043D\u0435 \u0437\u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044F \u0434\u043E \u0440\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u0431\u043B\u043E\u043A\u0456\u0432. \u0414\u043E\u0431\u0440\u0435?</span><span id="Games_blocks">\u0411\u043B\u043E\u043A\u0438</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + '\u0406\u0433\u0440\u0438 Blockly</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">\u0412\u0456\u0442\u0430\u0454\u043C\u043E!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438</button><button id="doneOk" class="secondary">\u0413\u0430\u0440\u0430\u0437\u0434</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">\u0426\u0435\u0439 \u0440\u0456\u0432\u0435\u043D\u044C \u0434\u0443\u0436\u0435 \u0441\u043A\u043B\u0430\u0434\u043D\u0438\u0439. \u0411\u0430\u0436\u0430\u0454\u0442\u0435 \u043F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u0438 \u0439\u043E\u0433\u043E \u0456 \u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u0434\u043E \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0457 \u0433\u0440\u0438? \u0412\u0438 \u0437\u0430\u0432\u0436\u0434\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044F \u043F\u0456\u0437\u043D\u0456\u0448\u0435.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438</button><button id="abortOk" class="secondary">\u0413\u0430\u0440\u0430\u0437\u0434</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">\u0413\u0430\u0440\u0430\u0437\u0434</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
