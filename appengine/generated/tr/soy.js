// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly Oyunlar</span><span id="Games_puzzle">Bulmaca</span><span id="Games_maze">Labirent</span><span id="Games_bird">Ku\u015F</span><span id="Games_turtle">Kaplumba\u011Fa</span><span id="Games_movie">Film</span><span id="Games_music">M\u00FCzik</span><span id="Games_pondTutor">E\u011Fitim havuzu</span><span id="Games_pond">G\u00F6let</span><span id="Games_genetics">Genetik</span><span id="Games_linesOfCode1">Bu seviyeyi 1 sat\u0131r JavaScript ile \u00E7\u00F6zd\u00FCn\u00FCz:</span><span id="Games_linesOfCode2">Bu seviyeyi %1 sat\u0131r JavaScript ile \u00E7\u00F6zd\u00FCn\u00FCz:</span><span id="Games_nextLevel">%1. seviye i\u00E7in haz\u0131r m\u0131s\u0131n\u0131z?</span><span id="Games_finalLevel">Bir sonraki m\u00FCcadeleye haz\u0131r m\u0131s\u0131n?</span><span id="Games_submitTitle">Ba\u015Fl\u0131k:</span><span id="Games_linkTooltip">Bloklar\u0131 ve ba\u011Flant\u0131 adresini kaydet.</span><span id="Games_runTooltip">Yazd\u0131\u011F\u0131n program\u0131 \u00E7al\u0131\u015Ft\u0131r.</span><span id="Games_runProgram">Program\u0131 \u00C7al\u0131\u015Ft\u0131r</span><span id="Games_resetTooltip">Program\u0131 durdur ve seviyeyi s\u0131f\u0131rla.</span><span id="Games_resetProgram">Tekrar</span><span id="Games_help">Yard\u0131m</span><span id="Games_dialogOk">TAMAM</span><span id="Games_dialogCancel">\u0130ptal</span><span id="Games_catLogic">Mant\u0131k</span><span id="Games_catLoops">D\u00F6ng\u00FCler</span><span id="Games_catMath">Matematik</span><span id="Games_catText">Metin</span><span id="Games_catLists">Listeler</span><span id="Games_catColour">Renk</span><span id="Games_catVariables">De\u011Fi\u015Fkenler</span><span id="Games_catProcedures">\u0130\u015Flevler</span><span id="Games_httpRequestError">\u0130stek ile ilgili bir problem var.</span><span id="Games_linkAlert">Bloklar\u0131n\u0131 bu ba\u011Flant\u0131 ile payla\u015F:\n\n%1</span><span id="Games_hashError">\u00DCzg\u00FCn\u00FCz, \'%1\' hi\u00E7 bir kaydedilmi\u015F program ile uyu\u015Fmuyor.</span><span id="Games_xmlError">Kaydedilen dosyan\u0131z y\u00FCklenemiyor\nBlockly\'nin \u00F6nceki s\u00FCr\u00FCm\u00FC ile kaydedilmi\u015F olabilir mi?</span><span id="Games_submitted">Bu program i\u00E7in te\u015Fekk\u00FCrler! Bu, e\u011Fitimli maymunlar ekibimizin ho\u015Funa giderse birka\u00E7 g\u00FCn i\u00E7inde galeriye yay\u0131mlanacakt\u0131r.</span><span id="Games_listVariable">liste</span><span id="Games_textVariable">metin</span><span id="Games_breakLink">Bir kere JavaScripti d\u00FCzenlemeye ba\u015Flad\u0131\u011F\u0131n\u0131zda,bloklar\u0131 d\u00FCzenlemeye geri d\u00F6nemezsiniz.Bu iyi mi?</span><span id="Games_blocks">Bloklar</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blockly Oyunlar</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Tebrikler!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">\u0130ptal</button><button id="doneOk" class="secondary">TAMAM</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Bu seviye son derece zordur. Bunu atlay\u0131p bir sonraki oyuna gitmek ister misin? Her zaman daha sonra geri gelebilirsin.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">\u0130ptal</button><button id="abortOk" class="secondary">TAMAM</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">TAMAM</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
