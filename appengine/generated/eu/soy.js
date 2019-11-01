// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blocky Jokoak</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Labirintoa</span><span id="Games_bird">Txoria</span><span id="Games_turtle">Dortoka</span><span id="Games_movie">Filma</span><span id="Games_music">Musika</span><span id="Games_pondTutor">Putzu Tutorea</span><span id="Games_pond">Urmaela</span><span id="Games_genetics">Genetika</span><span id="Games_linesOfCode1">Maila hau gainditu duzu JavaScript lerro bat erabiliz:</span><span id="Games_linesOfCode2">Maila hau gainditu duzu %1 JavaScript lerro erabiliz:</span><span id="Games_nextLevel">Prest zaude %1. mailarako?</span><span id="Games_finalLevel">Prest zaude hurrengo erronkarako?</span><span id="Games_submitTitle">Izenburua:</span><span id="Games_linkTooltip">Gorde eta lotura sortu.</span><span id="Games_runTooltip">Zuk idatzitako programa exekutatu.</span><span id="Games_runProgram">Programa exekutatu</span><span id="Games_resetTooltip">Gelditu programa eta berrezarri maila.</span><span id="Games_resetProgram">Berriz hasi</span><span id="Games_help">Laguntza</span><span id="Games_dialogOk">Ados</span><span id="Games_dialogCancel">Utzi</span><span id="Games_catLogic">Logika</span><span id="Games_catLoops">Begiztak</span><span id="Games_catMath">Matematika</span><span id="Games_catText">Testua</span><span id="Games_catLists">Zerrendak</span><span id="Games_catColour">Kolorea</span><span id="Games_catVariables">Aldagaiak</span><span id="Games_catProcedures">Prozedurak</span><span id="Games_httpRequestError">Eskaerarekin arazo bat egon da.</span><span id="Games_linkAlert">Elkarbanatu blokeak lotura honekin:\n\n%1</span><span id="Games_hashError">Barkatu, \u00AB%1\u00BB ez dator bat gordetako ezein programarekin.</span><span id="Games_xmlError">Ezin izan da zure fitxategia kargatu. Agian Blockly-ren beste bertsio batekin sortua izan zen?</span><span id="Games_submitted">Eskerrik asko programa honengatik! Gure tximino langile talde prestatuak gustoko badu, argitaratuko dute galerian egun batzuren buruan.</span><span id="Games_listVariable">zerrenda</span><span id="Games_textVariable">testua</span><span id="Games_breakLink">Behin Java Script aldatzen hasi, ezingo duzu atzera egin aldatze blokeetara. Ados zaude honekin?</span><span id="Games_blocks">Blokeak</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blocky Jokoak</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Zorionak!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Utzi</button><button id="doneOk" class="secondary">Ados</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Maila hau izugarri zaila da. Nahiko zenuke salto egin hurrengo jokora? Nahi izanez gero, itzul zaitezke geroago.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Utzi</button><button id="abortOk" class="secondary">Ados</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">Ados</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
