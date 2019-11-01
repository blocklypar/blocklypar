// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly \u6E38\u620F</span><span id="Games_puzzle">\u62FC\u56FE</span><span id="Games_maze">\u8FF7\u5BAB</span><span id="Games_bird">\u9E1F</span><span id="Games_turtle">\u4E4C\u9F9F</span><span id="Games_movie">\u7535\u5F71</span><span id="Games_music">\u97F3\u4E50</span><span id="Games_pondTutor">\u6C60\u5858\u6559\u5B66</span><span id="Games_pond">\u6C60\u5858</span><span id="Games_genetics">\u9057\u4F20\u5B66</span><span id="Games_linesOfCode1">\u4F60\u901A\u8FC7\u4E00\u884CJavaScript\u901A\u8FC7\u4E86\u8FD9\u4E00\u5173\uFF1A</span><span id="Games_linesOfCode2">\u4F60\u901A\u8FC7 %1 \u884CJavaScript\u901A\u8FC7\u4E86\u8FD9\u4E00\u5173\uFF1A</span><span id="Games_nextLevel">\u4F60\u51C6\u5907\u597D\u5F00\u59CB\u7B2C%1\u5173\u4E86\u5417?</span><span id="Games_finalLevel">\u4F60\u51C6\u5907\u597D\u4E0B\u4E00\u4E2A\u6311\u6218\u4E86\u5417\uFF1F</span><span id="Games_submitTitle">\u6807\u9898\uFF1A</span><span id="Games_linkTooltip">\u4FDD\u5B58\u8FDB\u5EA6\uFF0C\u5E76\u521B\u5EFA\u94FE\u63A5\u3002</span><span id="Games_runTooltip">\u8FD0\u884C\u60A8\u7F16\u5199\u7684\u7A0B\u5E8F\u3002</span><span id="Games_runProgram">\u8FD0\u884C\u7A0B\u5E8F</span><span id="Games_resetTooltip">\u505C\u6B62\u7A0B\u5E8F\u8FD0\u884C\u5E76\u91CD\u7F6E\u672C\u5173\u3002</span><span id="Games_resetProgram">\u91CD\u7F6E</span><span id="Games_help">\u5E2E\u52A9</span><span id="Games_dialogOk">\u786E\u8BA4</span><span id="Games_dialogCancel">\u53D6\u6D88</span><span id="Games_catLogic">\u903B\u8F91</span><span id="Games_catLoops">\u5FAA\u73AF</span><span id="Games_catMath">\u6570\u5B66</span><span id="Games_catText">\u6587\u672C</span><span id="Games_catLists">\u5217\u8868</span><span id="Games_catColour">\u989C\u8272</span><span id="Games_catVariables">\u53D8\u91CF</span><span id="Games_catProcedures">\u51FD\u6570</span><span id="Games_httpRequestError">\u8BF7\u6C42\u53D1\u751F\u4E86\u95EE\u9898\u3002</span><span id="Games_linkAlert">\u901A\u8FC7\u8FD9\u4E2A\u94FE\u63A5\u5206\u4EAB\u60A8\u7F16\u5199\u7684\u5757\uFF1A\n\n%1</span><span id="Games_hashError">\u62B1\u6B49\uFF0C\u6CA1\u6709\u4EFB\u4F55\u5DF2\u4FDD\u5B58\u7684\u7A0B\u5E8F\u5BF9\u5E94\u201C%1\u201D \u3002</span><span id="Games_xmlError">\u65E0\u6CD5\u8F7D\u5165\u60A8\u4FDD\u5B58\u7684\u6587\u4EF6\u3002\u53EF\u80FD\u60A8\u4F7F\u7528\u4E86\u5176\u4ED6\u7248\u672C\u7684Blockly\u521B\u5EFA\u8BE5\u6587\u4EF6\uFF1F</span><span id="Games_submitted">\u611F\u8C22\u60A8\u63D0\u4F9B\u7684\u7A0B\u5E8F\uFF01\u5982\u679C\u6211\u4EEC\u8BAD\u7EC3\u6709\u7D20\u7684\u7334\u5B50\u5DE5\u4F5C\u4EBA\u5458\u4EEC\u559C\u6B22\u5B83\uFF0C\u5B83\u4EEC\u4F1A\u5728\u51E0\u5929\u4E4B\u5185\u628A\u60A8\u7684\u4F5C\u54C1\u6302\u5230\u753B\u5ECA\u91CC\u53BB\u3002</span><span id="Games_listVariable">\u5217\u8868</span><span id="Games_textVariable">\u6587\u672C</span><span id="Games_breakLink">\u4E00\u65E6\u60A8\u5F00\u59CB\u7F16\u8F91JavaScript\uFF0C\u60A8\u5C31\u4E0D\u80FD\u518D\u8FD4\u56DE\u5757\u7F16\u8F91\u6A21\u5F0F\u3002\u786E\u5B9A\u8981\u8FD9\u6837\u505A\u5417\uFF1F</span><span id="Games_blocks">\u5757</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blockly \u6E38\u620F</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">\u606D\u559C\u4F60\uFF01</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">\u53D6\u6D88</button><button id="doneOk" class="secondary">\u786E\u8BA4</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">\u8FD9\u4E00\u5173\u975E\u5E38\u56F0\u96BE\u3002\u60A8\u4E5F\u8BB8\u5E0C\u671B\u8DF3\u8FC7\u5B83\u5E76\u5F00\u59CB\u4E0B\u4E00\u4E2A\u6E38\u620F\uFF1F\u60A8\u7A0D\u540E\u53EF\u4EE5\u518D\u56DE\u5230\u8FD9\u5173\u3002<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">\u53D6\u6D88</button><button id="abortOk" class="secondary">\u786E\u8BA4</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">\u786E\u8BA4</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
