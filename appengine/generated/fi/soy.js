// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly-pelit</span><span id="Games_puzzle">Palapeli</span><span id="Games_maze">Sokkelo</span><span id="Games_bird">Lintu</span><span id="Games_turtle">Kilpikonna</span><span id="Games_movie">Elokuva</span><span id="Games_music">Musiikki</span><span id="Games_pondTutor">Lampi Tutor</span><span id="Games_pond">Lampi</span><span id="Games_genetics">Genetiikka</span><span id="Games_linesOfCode1">Ratkaisit t\u00E4m\u00E4n tason yhdell\u00E4 rivill\u00E4 JavaScripti\u00E4:</span><span id="Games_linesOfCode2">Ratkaisit t\u00E4m\u00E4n tason %1 rivill\u00E4 JavaScripti\u00E4:</span><span id="Games_nextLevel">Oletko valmis tasoon %1?</span><span id="Games_finalLevel">Oletko valmis seuraavaan haasteeseen?</span><span id="Games_submitTitle">Otsikko:</span><span id="Games_linkTooltip">Tallenna ja linkit\u00E4 lohkoihin. </span><span id="Games_runTooltip">Suorita kirjoittamasi ohjelma. </span><span id="Games_runProgram">Suorita ohjelma</span><span id="Games_resetTooltip">Lopeta ohjelma ja nollaa taso. </span><span id="Games_resetProgram">Nollaa</span><span id="Games_help">Ohje</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Peru</span><span id="Games_catLogic">Logiikka</span><span id="Games_catLoops">Silmukat</span><span id="Games_catMath">Matematiikka</span><span id="Games_catText">Teksti</span><span id="Games_catLists">Listat</span><span id="Games_catColour">V\u00E4ri</span><span id="Games_catVariables">Muuttujat</span><span id="Games_catProcedures">Funktiot</span><span id="Games_httpRequestError">Pyynt\u00F6 ep\u00E4onnistui.</span><span id="Games_linkAlert">Jaa lohkosi t\u00E4ll\u00E4 linkill\u00E4:</span><span id="Games_hashError">Valitettavasti \'%1\' ei vastaa mit\u00E4\u00E4n tallennettua ohjelmaa.</span><span id="Games_xmlError">Tallennuksen lataaminen ep\u00E4onnistui. Ehk\u00E4 se on tehty Blocklyn eri versiolla?</span><span id="Games_submitted">Kiitos ohjelmastasi! Jos meid\u00E4n koulutetuista apinoista koostuva henkil\u00F6st\u00F6mme pit\u00E4\u00E4 ohjelmasta, niin he julkaisevat sen galleriassa muutaman p\u00E4iv\u00E4n sis\u00E4ll\u00E4.</span><span id="Games_listVariable">lista</span><span id="Games_textVariable">teksti</span><span id="Games_breakLink">Kun alat muokkaamaan JavaScripti\u00E4, et voi en\u00E4\u00E4 palata muokkaamaan lohkoja. Haluatko jatkaa?</span><span id="Games_blocks">Lohkot</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blockly-pelit</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Onnittelut!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Peru</button><button id="doneOk" class="secondary">OK</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">T\u00E4m\u00E4 taso on eritt\u00E4in haastava. Haluatko ohittaa sen ja siirty\u00E4 seuraavaan peliin? Voit palata takaisin my\u00F6hemmin.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Peru</button><button id="abortOk" class="secondary">OK</button></div></div>';
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
