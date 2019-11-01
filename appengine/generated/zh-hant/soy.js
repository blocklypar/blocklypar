// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly \u904A\u6232</span><span id="Games_puzzle">\u62FC\u5716</span><span id="Games_maze">\u8FF7\u5BAE</span><span id="Games_bird">\u5C0F\u9CE5</span><span id="Games_turtle">\u70CF\u9F9C</span><span id="Games_movie">\u5F71\u7247</span><span id="Games_music">\u97F3\u6A02</span><span id="Games_pondTutor">\u6C60\u5858\u904A\u6232\u6559\u7A0B</span><span id="Games_pond">\u6C60\u5858</span><span id="Games_genetics">\u907A\u50B3</span><span id="Games_linesOfCode1">\u4F60\u7528\u4E86 1 \u884C JavaScript \u5B8C\u6210\u95DC\u5361\uFF1A</span><span id="Games_linesOfCode2">\u4F60\u7528\u4E86 %1 \u884C JavaScript \u5B8C\u6210\u95DC\u5361\uFF1A</span><span id="Games_nextLevel">\u6E96\u5099\u597D\u8981\u95D6\u7B2C %1 \u95DC\u4E86\u55CE\uFF1F</span><span id="Games_finalLevel">\u6E96\u5099\u597D\u8981\u9032\u884C\u4E0B\u4E00\u500B\u6311\u6230\u4E86\u55CE\uFF1F</span><span id="Games_submitTitle">\u6A19\u984C\uFF1A</span><span id="Games_linkTooltip">\u4FDD\u5B58\u4E26\u9023\u63A5\u5230\u5340\u584A\u3002</span><span id="Games_runTooltip">\u904B\u884C\u4F60\u5BEB\u7684\u7A0B\u5F0F\u3002</span><span id="Games_runProgram">\u904B\u884C\u7A0B\u5F0F</span><span id="Games_resetTooltip">\u505C\u6B62\u7A0B\u5F0F\u4E26\u91CD\u7F6E\u95DC\u5361\u3002</span><span id="Games_resetProgram">\u91CD\u7F6E</span><span id="Games_help">\u5E6B\u52A9</span><span id="Games_dialogOk">\u78BA\u5B9A</span><span id="Games_dialogCancel">\u53D6\u6D88</span><span id="Games_catLogic">\u908F\u8F2F</span><span id="Games_catLoops">\u8FF4\u5708</span><span id="Games_catMath">\u904B\u7B97</span><span id="Games_catText">\u6587\u5B57</span><span id="Games_catLists">\u6E05\u55AE</span><span id="Games_catColour">\u984F\u8272</span><span id="Games_catVariables">\u8B8A\u91CF</span><span id="Games_catProcedures">\u51FD\u5F0F</span><span id="Games_httpRequestError">\u9019\u500B\u8ACB\u6C42\u6709\u4E9B\u554F\u984C\u3002</span><span id="Games_linkAlert">\u900F\u904E\u6B64\u9023\u7D50\u5206\u4EAB\u60A8\u7684\u5340\u584A\uFF1A\n\n%1</span><span id="Games_hashError">\u5C0D\u4E0D\u8D77\uFF0C\u300C%1\u300D\u4E26\u672A\u5C0D\u61C9\u4EFB\u4F55\u5DF2\u4FDD\u5B58\u7684\u7A0B\u5F0F\u3002</span><span id="Games_xmlError">\u672A\u80FD\u8F09\u5165\u60A8\u4FDD\u5B58\u7684\u6A94\u6848\u3002\u6216\u8A31\u5B83\u662F\u7531\u5176\u4ED6\u7248\u672C\u7684 Blockly \u5275\u5EFA\uFF1F</span><span id="Games_submitted">\u611F\u8B1D\u60A8\u6240\u63D0\u4EA4\u7684\u7A0B\u5F0F\uFF01\u82E5\u6211\u5011\u7684\u90A3\u4E00\u7FA4\u8A13\u7DF4\u6709\u7D20\u7334\u5B50\u5011\u559C\u6B61\u5B83\u7684\u8A71\uFF0C\u5C07\u6703\u516C\u958B\u6B64\u5167\u5BB9\u81F3\u5C55\u5ECA\u88E1\u4E00\u9663\u5B50\u3002</span><span id="Games_listVariable">\u6E05\u55AE</span><span id="Games_textVariable">\u6587\u5B57</span><span id="Games_breakLink">\u4E00\u65E6\u4F60\u958B\u59CB\u7DE8\u8F2F JavaScript\uFF0C\u5C31\u4E0D\u80FD\u8FD4\u56DE\u7DE8\u8F2F\u5340\u584A\uFF0C\u78BA\u5B9A\u55CE\uFF1F</span><span id="Games_blocks">\u7A4D\u6728</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blockly \u904A\u6232</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">\u606D\u559C\uFF01</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">\u53D6\u6D88</button><button id="doneOk" class="secondary">\u78BA\u5B9A</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">\u6B64\u95DC\u5361\u975E\u5E38\u56F0\u96E3\u3002\u60A8\u662F\u5426\u8981\u8DF3\u904E\u4E26\u9032\u5165\u4E0B\u4E00\u95DC\uFF1F\u60A8\u96A8\u6642\u53EF\u4EE5\u8FD4\u56DE\u9019\u95DC\u3002<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">\u53D6\u6D88</button><button id="abortOk" class="secondary">\u78BA\u5B9A</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">\u78BA\u5B9A</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
