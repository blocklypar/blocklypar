// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly-spill</span><span id="Games_puzzle">Puslespill</span><span id="Games_maze">Labyrint</span><span id="Games_bird">Fugl</span><span id="Games_turtle">Skilpadde</span><span id="Games_movie">Film</span><span id="Games_music">Musikk</span><span id="Games_pondTutor">Daml\u00E6rer</span><span id="Games_pond">Dam</span><span id="Games_genetics">Genetikk</span><span id="Games_linesOfCode1">Du l\u00F8ste dette niv\u00E5et med 1 linje JavaScript:</span><span id="Games_linesOfCode2">Du l\u00F8ste dette niv\u00E5et med %1 linjer JavaScript:</span><span id="Games_nextLevel">Er du klar for niv\u00E5 %1?</span><span id="Games_finalLevel">Er du klar for neste utfordring?</span><span id="Games_submitTitle">Tittel:</span><span id="Games_linkTooltip">Lagre og lenke til blokker.</span><span id="Games_runTooltip">Kj\u00F8r programmet du skrev.</span><span id="Games_runProgram">Kj\u00F8r Programmet</span><span id="Games_resetTooltip">Stopp programmet og nullstill niv\u00E5et.</span><span id="Games_resetProgram">Nullstill</span><span id="Games_help">Hjelp</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Avbryt</span><span id="Games_catLogic">Logikk</span><span id="Games_catLoops">L\u00F8kker</span><span id="Games_catMath">Matte</span><span id="Games_catText">Tekst</span><span id="Games_catLists">Lister</span><span id="Games_catColour">Farge</span><span id="Games_catVariables">Variabler</span><span id="Games_catProcedures">Funksjoner</span><span id="Games_httpRequestError">Det oppsto et problem med foresp\u00F8rselen din</span><span id="Games_linkAlert">Del dine blokker med denne lenken:\n\n%1</span><span id="Games_hashError">Beklager, \'%1\' samsvarer ikke med noe lagret program.</span><span id="Games_xmlError">Kunne ikke laste inn filen. Kanskje den ble laget med en annen versjon av Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">Liste</span><span id="Games_textVariable">Tekst</span><span id="Games_breakLink">N\u00E5r du begynner \u00E5 redigere JavaScript kan du ikke g\u00E5 tilbake til redigeringsblokker. Er det greit?</span><span id="Games_blocks">Blokker</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blockly-spill</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Gratulerer!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Avbryt</button><button id="doneOk" class="secondary">OK</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Dette niv\u00E5et er veldig vanskelig. \u00D8nsker du \u00E5 hoppe over det og fortsette til neste spill? Du kan alltids komme tilbake senere.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Avbryt</button><button id="abortOk" class="secondary">OK</button></div></div>';
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
