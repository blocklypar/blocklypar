// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">\u092C\u094D\u0932\u094B\u0915\u094D\u0932\u0940 \u0917\u0947\u092E</span><span id="Games_puzzle">\u092A\u0939\u0947\u0932\u0940</span><span id="Games_maze">\u092D\u0942\u0932\u092D\u0941\u0932\u0948\u092F\u093E</span><span id="Games_bird">\u092A\u0915\u094D\u0937\u0940</span><span id="Games_turtle">\u0915\u091B\u0941\u0906</span><span id="Games_movie">\u091A\u093E\u0932</span><span id="Games_music">\u0938\u0902\u0917\u0940\u0924</span><span id="Games_pondTutor">\u0924\u093E\u0932\u093E\u092C \u0905\u0928\u0941\u0936\u093F\u0915\u094D\u0937\u0915</span><span id="Games_pond">\u0924\u093E\u0932\u093E\u092C</span><span id="Games_genetics">\u0906\u0928\u0941\u0935\u0902\u0936\u093F\u0915\u0940</span><span id="Games_linesOfCode1">\u0906\u092A\u0928\u0947 1 \u092A\u0902\u0915\u094D\u0924\u093F \u091C\u093E\u0935\u093E\u0938\u094D\u0915\u094D\u0930\u093F\u092A\u094D\u091F \u0915\u0947 \u0938\u093E\u0925 \u0907\u0938 \u0938\u094D\u0924\u0930 \u0915\u094B \u0939\u0932 \u0915\u093F\u092F\u093E:</span><span id="Games_linesOfCode2">\u0906\u092A\u0928\u0947 %1 \u0938\u094D\u0924\u0930 \u091C\u093E\u0935\u093E\u0938\u094D\u0915\u094D\u0930\u093F\u092A\u094D\u091F \u092A\u0902\u0915\u094D\u0924\u093F \u0915\u0947 \u0938\u093E\u0925 \u0907\u0938 \u0938\u094D\u0924\u0930 \u0915\u094B \u0939\u0932 \u0915\u093F\u092F\u093E:</span><span id="Games_nextLevel">\u0915\u094D\u092F\u093E \u0906\u092A \u0938\u094D\u0924\u0930 %1 \u0915\u0947 \u0932\u093F\u090F \u0924\u0948\u092F\u093E\u0930 \u0939\u0948\u0902?</span><span id="Games_finalLevel">\u0915\u094D\u092F\u093E \u0906\u092A \u0905\u0917\u0932\u0940 \u091A\u0941\u0928\u094C\u0924\u0940 \u0915\u0947 \u0932\u093F\u090F \u0924\u0948\u092F\u093E\u0930 \u0939\u0948\u0902?</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">\u0938\u0947\u0935 \u0915\u0930\u0947\u0902 \u0914\u0930 \u092C\u094D\u0932\u0949\u0915 \u0938\u0947 \u0932\u093F\u0902\u0915 \u0915\u0930\u0947\u0902\u0964.</span><span id="Games_runTooltip">\u0906\u092A\u0928\u0947 \u091C\u094B \u0932\u093F\u0916\u093E \u0939\u0948, \u0909\u0938\u0947 \u0930\u0928 \u0915\u0930\u0947\u0902\u0964</span><span id="Games_runProgram">\u092A\u094D\u0930\u094B\u0917\u094D\u0930\u093E\u092E \u091A\u0932\u093E\u090F\u0901</span><span id="Games_resetTooltip">\u0915\u093E\u0930\u094D\u092F\u0915\u094D\u0930\u092E \u0915\u094B \u092C\u0902\u0926 \u0915\u0930\u0947\u0902 \u0914\u0930 \u0938\u094D\u0924\u0930 \u0930\u0940\u0938\u0947\u091F \u0915\u0930\u0947\u0902\u0964.</span><span id="Games_resetProgram">\u0930\u0940\u0938\u0947\u091F \u0915\u0930\u0947\u0902</span><span id="Games_help">\u0938\u0939\u093E\u092F\u0924\u093E</span><span id="Games_dialogOk">\u0913\u0915\u0947</span><span id="Games_dialogCancel">\u0930\u0926\u094D\u0926 \u0915\u0930\u0947\u0902</span><span id="Games_catLogic">\u0924\u0930\u094D\u0915</span><span id="Games_catLoops">\u0932\u0942\u092A</span><span id="Games_catMath">\u0917\u0923\u093F\u0924</span><span id="Games_catText">\u091F\u0947\u0915\u094D\u0938\u094D\u091F</span><span id="Games_catLists">\u0938\u0942\u091A\u093F\u092F\u093E\u0901</span><span id="Games_catColour">\u0930\u0902\u0917</span><span id="Games_catVariables">\u091A\u0930</span><span id="Games_catProcedures">\u092A\u094D\u0930\u094B\u0938\u0940\u091C\u0930</span><span id="Games_httpRequestError">\u0905\u0928\u0941\u0930\u094B\u0927 \u0915\u0947 \u0938\u093E\u0925 \u0938\u092E\u0938\u094D\u092F\u093E \u0939\u0941\u0908\u0964</span><span id="Games_linkAlert">\u0907\u0938 \u0932\u093F\u0902\u0915 \u0915\u0947 \u0938\u093E\u0925 \u0915\u093E \u0905\u092A\u0928\u0947 \u092C\u094D\u0932\u0949\u0915 \u0915\u093E \u0938\u093E\u091D\u093E \u0915\u0930\u0947\u0902:\n\n %1</span><span id="Games_hashError">\u0916\u0947\u0926 \u0939\u0948, \'%1\' \u0915\u093F\u0938\u0940 \u0938\u0947\u0935 \u0915\u093F\u090F \u0917\u090F \u092A\u094D\u0930\u094B\u0917\u094D\u0930\u093E\u092E \u0938\u0947 \u0938\u0902\u092C\u0902\u0927\u093F\u0924 \u0928\u0939\u0940\u0902 \u0939\u0948\u0964</span><span id="Games_xmlError">\u0906\u092A\u0915\u0940 \u0938\u0947\u0935 \u0915\u0940 \u0917\u0908 \u092B\u093C\u093E\u0907\u0932 \u0932\u094B\u0921 \u0928\u0939\u0940\u0902 \u0939\u094B \u0938\u0915\u0940\u0964  \u0936\u093E\u092F\u0926 \u092F\u0939 \u092C\u094D\u0932\u0949\u0915\u0932\u0940 \u0915\u0947 \u0915\u093F\u0938\u0940 \u092D\u093F\u0928\u094D\u0928 \u0938\u0902\u0938\u094D\u0915\u0930\u0923 \u0915\u0947 \u0938\u093E\u0925 \u092C\u0928\u093E\u0908 \u0917\u092F\u0940 \u0925\u0940?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">\u0938\u0942\u091A\u0940</span><span id="Games_textVariable">\u091F\u0947\u0915\u094D\u0938\u094D\u091F</span><span id="Games_breakLink">\u090F\u0915 \u092C\u093E\u0930 \u091C\u092C \u0906\u092A \u091C\u093E\u0935\u093E\u0938\u094D\u0915\u094D\u0930\u093F\u092A\u094D\u091F \u0915\u094B \u0936\u0941\u0930\u0942 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902, \u0924\u094B \u0906\u092A \u0938\u0902\u092A\u093E\u0926\u0928 \u092C\u094D\u0932\u0949\u0915\u094B\u0902 \u092A\u0930 \u0935\u093E\u092A\u0938 \u0928\u0939\u0940\u0902 \u091C\u093E \u0938\u0915\u0924\u0947\u0964 \u0915\u094D\u092F\u093E \u092F\u0939 \u0920\u0940\u0915 \u0939\u0948?</span><span id="Games_blocks">\u0905\u0935\u0930\u094B\u0927</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + '\u092C\u094D\u0932\u094B\u0915\u094D\u0932\u0940 \u0917\u0947\u092E</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">\u092C\u0927\u093E\u0908 \u0939\u094B!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">\u0930\u0926\u094D\u0926 \u0915\u0930\u0947\u0902</button><button id="doneOk" class="secondary">\u0913\u0915\u0947</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">\u092F\u0939 \u0938\u094D\u0924\u0930 \u092C\u0947\u0939\u0926 \u092E\u0941\u0936\u094D\u0915\u093F\u0932 \u0939\u0948\u0964 \u0915\u094D\u092F\u093E \u0906\u092A \u0907\u0938\u0947 \u091B\u094B\u0921\u093C\u0928\u093E \u091A\u093E\u0939\u0924\u0947 \u0939\u0948\u0902 \u0914\u0930 \u0905\u0917\u0932\u0947 \u0916\u0947\u0932 \u092A\u0930 \u091C\u093E\u0928\u093E \u091A\u093E\u0939\u0947\u0902\u0917\u0947? \u0906\u092A \u0939\u092E\u0947\u0936\u093E \u092C\u093E\u0926 \u092E\u0947\u0902 \u0935\u093E\u092A\u0938 \u0906 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">\u0930\u0926\u094D\u0926 \u0915\u0930\u0947\u0902</button><button id="abortOk" class="secondary">\u0913\u0915\u0947</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">\u0913\u0915\u0947</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
