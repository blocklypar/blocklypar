// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly m\u00E4ngud</span><span id="Games_puzzle">pusle</span><span id="Games_maze">Lab\u00FCrint</span><span id="Games_bird">Lind</span><span id="Games_turtle">Kilpkonn</span><span id="Games_movie">Film</span><span id="Games_music">Music</span><span id="Games_pondTutor">Tiigi lahing</span><span id="Games_pond">Tiik</span><span id="Games_genetics">Genetics</span><span id="Games_linesOfCode1">Lahendasid selle taseme kasutades \u00FChe rea JavaScript koodi</span><span id="Games_linesOfCode2">Lahendasid selle taseme kasutades %1 rida JavaScript koodi</span><span id="Games_nextLevel">Oled sa valmis tasemeks %1 ?</span><span id="Games_finalLevel">Kas oled j\u00E4rgmiseks v\u00E4ljakutseks valmis?</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip">K\u00E4ivita koostatud programm</span><span id="Games_runProgram">K\u00E4ivita programm</span><span id="Games_resetTooltip">Peata programm ja mine algusesse.</span><span id="Games_resetProgram">T\u00FChjenda</span><span id="Games_help">Abi</span><span id="Games_dialogOk">Sobib</span><span id="Games_dialogCancel">Loobu</span><span id="Games_catLogic">Loogika</span><span id="Games_catLoops">Silmad</span><span id="Games_catMath">Matemaatika</span><span id="Games_catText">Tekst</span><span id="Games_catLists">Loendid</span><span id="Games_catColour">V\u00E4rv</span><span id="Games_catVariables">Muutujad</span><span id="Games_catProcedures">Funktsioonid</span><span id="Games_httpRequestError">V\u00E4ike tehniline probleem</span><span id="Games_linkAlert">Jaga oma plokke selle lingiga: %1</span><span id="Games_hashError">Kahjuks \'%1\' ei vasta \u00FChelegi salvestatud programmile.</span><span id="Games_xmlError">Ei saa laadida salvestatud faili. V\u00F5ib-olla see on loodud erineva Blokli versiooniga?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">loend</span><span id="Games_textVariable">tekst</span><span id="Games_breakLink">Once you start editing JavaScript, you can\'t go back to editing blocks. Is this OK?</span><span id="Games_blocks">Blocks</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blockly m\u00E4ngud</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Palju \u00F5nne!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Loobu</button><button id="doneOk" class="secondary">Sobib</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">See tase on v\u00E4ga raske. Kas soovid selle vahele j\u00E4tta ja alustada j\u00E4rgmist m\u00E4ngu? Sa v\u00F5id alati hiljem tagasi tulla.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Loobu</button><button id="abortOk" class="secondary">Sobib</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">Sobib</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
