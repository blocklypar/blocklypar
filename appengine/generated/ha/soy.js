// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Wasannin Blockly</span><span id="Games_puzzle">\u018Aaurin Gwarmai</span><span id="Games_maze">Kanannna\u0257o</span><span id="Games_bird">Tsuntsu</span><span id="Games_turtle">Kunkuru</span><span id="Games_movie">Sinima</span><span id="Games_music">Ki\u0257a</span><span id="Games_pondTutor">Malam-na-bakin-kogi</span><span id="Games_pond">Kogi</span><span id="Games_genetics">\u0198wayar halitta</span><span id="Games_linesOfCode1">Ka warware wannan mataki tare da layi 1 na JavaScript:</span><span id="Games_linesOfCode2">Ka warware wannan mataki tare da layi %1 na JavaScript:</span><span id="Games_nextLevel">Ka shiryawa mataki na %1?</span><span id="Games_finalLevel">Ka shiryawa \u0199alu-bale na gaba?</span><span id="Games_submitTitle">Suna:</span><span id="Games_linkTooltip">Ajiye kuma a ha\u0257a zuwa bululluka.</span><span id="Games_runTooltip">Gudanar da shirin da ka rubuta.</span><span id="Games_runProgram">Gudanar da Shiri</span><span id="Games_resetTooltip">Tsayar da shirin kuma a sake saita matakin.</span><span id="Games_resetProgram">Sake saiti</span><span id="Games_help">Help</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Cancel</span><span id="Games_catLogic">Dabara</span><span id="Games_catLoops">Tsallake-tsallake</span><span id="Games_catMath">Lissafi</span><span id="Games_catText">Rubutu</span><span id="Games_catLists">Jeri</span><span id="Games_catColour">Launi</span><span id="Games_catVariables">Siffofi</span><span id="Games_catProcedures">Aikace-aikace</span><span id="Games_httpRequestError">Akwai matsala tare da abin da aka nema.</span><span id="Games_linkAlert">Raba bulullukanka tare da wannan ha\u0257i:\n\n%1</span><span id="Games_hashError">Yi ha\u0199uri, \'%1\' bai dace da kowane shiri da aka ajiye ba.</span><span id="Games_xmlError">Ba za a iya loda fayil \u0257inka da ka ajiye ba. Wata kila an \u0199ir\u0199ire shi tare da wani nau\u2019i daban na Blockly?</span><span id="Games_submitted">Mun gode sabo da wannan shiri!  Idan ma\u2019aikatanmu suna son sa, za su \u0257abba\u2019a shi a cikin galari cikin \u2018yan kwanaki ka\u0257an.</span><span id="Games_listVariable">jeri</span><span id="Games_textVariable">rubutu</span><span id="Games_breakLink">Da zaran ka fara gyara JavaScript, ba za ka iya komawa domin gyaran bululluka ba. Wannan ya YI?</span><span id="Games_blocks">Bululluka</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Wasannin Blockly</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Muna taya ka murna!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancel</button><button id="doneOk" class="secondary">OK</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Wannan matakin yana da matu\u0199ar wahala. Kana so ka tsallake shi kuma ka tafi zuwa wasa na gaba? Koda yaushe za ka iya dawowa a nan gaba.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Cancel</button><button id="abortOk" class="secondary">OK</button></div></div>';
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
