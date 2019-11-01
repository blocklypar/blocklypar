// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly-spil</span><span id="Games_puzzle">Puslespil</span><span id="Games_maze">Labyrint</span><span id="Games_bird">Fugl</span><span id="Games_turtle">Skildpadde</span><span id="Games_movie">Film</span><span id="Games_music">Musik</span><span id="Games_pondTutor">Daml\u00E6rer</span><span id="Games_pond">Dam</span><span id="Games_genetics">Genetik</span><span id="Games_linesOfCode1">Du har l\u00F8st dette niveau med 1 linje JavaScript:</span><span id="Games_linesOfCode2">Du har l\u00F8st dette niveau med %1 linjer JavaScript:</span><span id="Games_nextLevel">Er du klar til niveau %1?</span><span id="Games_finalLevel">Er du klar til den n\u00E6ste udfordring?</span><span id="Games_submitTitle">Titel:</span><span id="Games_linkTooltip">Gem og link til blokkene.</span><span id="Games_runTooltip">K\u00F8r det program, du skrev.</span><span id="Games_runProgram">K\u00F8r program</span><span id="Games_resetTooltip">Stop programmet og nulstil niveauet.</span><span id="Games_resetProgram">Nulstil</span><span id="Games_help">Hj\u00E6lp</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Afbryd</span><span id="Games_catLogic">Logik</span><span id="Games_catLoops">L\u00F8kker</span><span id="Games_catMath">Matematik</span><span id="Games_catText">Tekst</span><span id="Games_catLists">Lister</span><span id="Games_catColour">Farve</span><span id="Games_catVariables">Variabler</span><span id="Games_catProcedures">Funktioner</span><span id="Games_httpRequestError">Der var et problem med foresp\u00F8rgslen.</span><span id="Games_linkAlert">Del dine blokke med dette link:\n\n%1</span><span id="Games_hashError">Beklager, \'%1\' passer ikke med nogen gemte programmer.</span><span id="Games_xmlError">Kunne ikke hente din gemte fil.  M\u00E5ske er den lavet med en anden version af Blockly?</span><span id="Games_submitted">Tak for dette program! Hvis vores personale af dresserede aber kan lide det, s\u00E5 vil de udgive det i galleriet indenfor et par dage.</span><span id="Games_listVariable">liste</span><span id="Games_textVariable">tekst</span><span id="Games_breakLink">N\u00E5r du begynder at redigere JavaScript kan du ikke g\u00E5 tilbage til redigeringblokke. Er det o.k.?</span><span id="Games_blocks">Blokke</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blockly-spil</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Tillykke!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Afbryd</button><button id="doneOk" class="secondary">OK</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Dette niveau er yderst vanskeligt. Vil du springe det over og g\u00E5 videre til det n\u00E6ste spil? Du kan altid komme tilbage senere.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Afbryd</button><button id="abortOk" class="secondary">OK</button></div></div>';
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
