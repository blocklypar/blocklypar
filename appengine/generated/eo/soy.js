// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Ludoj de Blockly</span><span id="Games_puzzle">Puzlo</span><span id="Games_maze">Labirinto</span><span id="Games_bird">Birdo</span><span id="Games_turtle">Testudo</span><span id="Games_movie">Filmo</span><span id="Games_music">Muziko</span><span id="Games_pondTutor">Gvidanto de lageto</span><span id="Games_pond">Lageto</span><span id="Games_genetics">Genetiko</span><span id="Games_linesOfCode1">Vi solvis tiun \u0109i nivelon per 1 linio de JavaScript:</span><span id="Games_linesOfCode2">Vi solvis tiun \u0109i nivelon per %1 linioj de JavaScript:</span><span id="Games_nextLevel">\u0108u vi pretas por nivelo %1?</span><span id="Games_finalLevel">\u0108u vi pretas por la venonta defio?</span><span id="Games_submitTitle">Titolo:</span><span id="Games_linkTooltip">Konservi kaj ligi al blokoj.</span><span id="Games_runTooltip">Ruli la programon, kiun vi skribis.</span><span id="Games_runProgram">Ruli programon</span><span id="Games_resetTooltip">Haltigi la programon kaj rekomenci la nivelon.</span><span id="Games_resetProgram">Remeti</span><span id="Games_help">Helpo</span><span id="Games_dialogOk">Bone</span><span id="Games_dialogCancel">Nuligi</span><span id="Games_catLogic">Logika</span><span id="Games_catLoops">Cikloj</span><span id="Games_catMath">Matematika</span><span id="Games_catText">Teksto</span><span id="Games_catLists">Listoj</span><span id="Games_catColour">Koloro</span><span id="Games_catVariables">Variabloj</span><span id="Games_catProcedures">Funkcioj</span><span id="Games_httpRequestError">Problemo okazis pri la peto.</span><span id="Games_linkAlert">Disponigu viajn blokojn per la jena ligilo:\n\n%1</span><span id="Games_hashError">Doma\u011De, \'%1\' ne respondas al ajna konservita programo.</span><span id="Games_xmlError">Ne povis \u015Dar\u011Di vian konservitan dosieron. Eble \u011Di estis kreita per alia versio de Blockly?</span><span id="Games_submitted">Dankon pro jena programo! Se \u011Di pla\u0109as al nia stabo de trejnitaj simioj, ili publikigos \u011Din \u0109e la galerio en kelkaj tagoj.</span><span id="Games_listVariable">listo</span><span id="Games_textVariable">teksto</span><span id="Games_breakLink">Se vi ekredaktas la JavaScript-kodon, vi ne povas rekomenci redaktadon de blokoj. \u0108u ekredakti?</span><span id="Games_blocks">Blokoj</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Ludoj de Blockly</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Gratulon!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Nuligi</button><button id="doneOk" class="secondary">Bone</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Tiu nivelo estas malfacilega. \u0108u vi volas preterpasi \u011Din al la sekva nivelo? Vi povas reveni poste.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Nuligi</button><button id="abortOk" class="secondary">Bone</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">Bone</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
