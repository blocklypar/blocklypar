// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Hry Blockly</span><span id="Games_puzzle">Skl\u00E1da\u010Dka</span><span id="Games_maze">Bludi\u0161t\u011B</span><span id="Games_bird">Pt\u00E1k</span><span id="Games_turtle">\u017Delva</span><span id="Games_movie">Film</span><span id="Games_music">Music</span><span id="Games_pondTutor">Rybn\u00EDk s instruktorem</span><span id="Games_pond">Rybn\u00EDk</span><span id="Games_genetics">Genetics</span><span id="Games_linesOfCode1">Vy\u0159e\u0161il jste \u00FArove\u0148 jednou \u0159\u00E1dkou JavaScriptu:</span><span id="Games_linesOfCode2">Vy\u0159e\u0161il jste \u00FArove\u0148 %1 \u0159\u00E1dkami JavaScriptu:</span><span id="Games_nextLevel">P\u0159ipraveni na \u00FArove\u0148 %1?</span><span id="Games_finalLevel">P\u0159ipraveni na dal\u0161\u00ED v\u00FDzvu?</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">Ulo\u017E a spoj bloky..</span><span id="Games_runTooltip">Spust\u00ED program, kter\u00FD jste napsali.</span><span id="Games_runProgram">Spus\u0165 program</span><span id="Games_resetTooltip">Zastav\u00ED program a vr\u00E1t\u00ED \u00FArove\u0148 do v\u00FDchoz\u00EDho stavu.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">N\u00E1pov\u011Bda</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Zru\u0161it</span><span id="Games_catLogic">Logika</span><span id="Games_catLoops">Smy\u010Dky</span><span id="Games_catMath">Matika</span><span id="Games_catText">Text</span><span id="Games_catLists">Seznamy</span><span id="Games_catColour">Barva</span><span id="Games_catVariables">Prom\u011Bnn\u00E9</span><span id="Games_catProcedures">Procedury</span><span id="Games_httpRequestError">Do\u0161lo k pot\u00ED\u017E\u00EDm s po\u017Eadavkem.</span><span id="Games_linkAlert">Sd\u00EDlej bloky t\u00EDmto odkazem: \n\n%1</span><span id="Games_hashError">Omlouv\u00E1me se, \'%1\' nesouhlas\u00ED s \u017E\u00E1dn\u00FDm z ulo\u017Een\u00FDch soubor\u016F.</span><span id="Games_xmlError">Nepoda\u0159ilo se ulo\u017Eit v\u00E1s soubor.  Pravd\u011Bpodobn\u011B byl vytvo\u0159en jinou verz\u00ED Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">seznam</span><span id="Games_textVariable">text</span><span id="Games_breakLink">Jakmile za\u010Dnete upravovat JavaScript, nem\u016F\u017Eete se vr\u00E1tit k editaci blok\u016F. Je to v PO\u0158\u00C1DKU?</span><span id="Games_blocks">Bloky</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Hry Blockly</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Gratulace!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Zru\u0161it</button><button id="doneOk" class="secondary">OK</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Tato \u00FArove\u0148 je velmi obt\u00ED\u017En\u00E1. Chce\u0161 ji p\u0159esko\u010Dit a pokra\u010Dovat na dal\u0161\u00ED hru? Kdykoli se m\u016F\u017Ee\u0161 vr\u00E1tit zp\u011Bt.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Zru\u0161it</button><button id="abortOk" class="secondary">OK</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
