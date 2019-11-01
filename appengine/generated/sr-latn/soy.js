// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blokli igre</span><span id="Games_puzzle">Slagalica</span><span id="Games_maze">Lavirint</span><span id="Games_bird">Ptica</span><span id="Games_turtle">Kornja\u010Da</span><span id="Games_movie">Film</span><span id="Games_music">Muzika</span><span id="Games_pondTutor">Tutor za Ribnjak</span><span id="Games_pond">Ribnjak</span><span id="Games_genetics">Genetika</span><span id="Games_linesOfCode1">Mo\u017Ee\u0161 re\u0161iti ovaj nivo jednom linijom javaskript koda:</span><span id="Games_linesOfCode2">Mo\u017Ee\u0161 re\u0161iti ovaj nivo sa %1 linija javaskript koda:</span><span id="Games_nextLevel">Da li si spreman za nivo %1?</span><span id="Games_finalLevel">Da li si spreman za slede\u0107i izazov?</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">Snima i pravi vezu ka blokovima.</span><span id="Games_runTooltip">Pokre\u0107e program koji si napisao.</span><span id="Games_runProgram">Pokreni program</span><span id="Games_resetTooltip">Zaustavlja program i ponovo postavlja nivo.</span><span id="Games_resetProgram">Ponovo postavi</span><span id="Games_help">Pomo\u0107</span><span id="Games_dialogOk">U redu</span><span id="Games_dialogCancel">Otka\u017Ei</span><span id="Games_catLogic">Logika</span><span id="Games_catLoops">Petlje</span><span id="Games_catMath">Matematika</span><span id="Games_catText">Tekst</span><span id="Games_catLists">Spiskovi</span><span id="Games_catColour">Boja</span><span id="Games_catVariables">Promenljive</span><span id="Games_catProcedures">Funkcije</span><span id="Games_httpRequestError">Do\u0161lo je do problema u zahtevu.</span><span id="Games_linkAlert">Delite svoje blokove ovom vezom:\n\n%1</span><span id="Games_hashError">\u201E%1\u201C ne odgovara nijednom sa\u010Duvanom programu.</span><span id="Games_xmlError">Ne mogu da u\u010Ditam sa\u010Duvanu datoteku. Mo\u017Eda je napravljena drugom verzijom Blockly-ja.</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">spisak</span><span id="Games_textVariable">tekst</span><span id="Games_breakLink">Jednom kada po\u010Dnete ure\u0111ivanje JavaScript, ne mo\u017Eete se vratiti na ure\u0111ivanje blokova. Da li je to u redu?</span><span id="Games_blocks">Blokovi</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blokli igre</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">\u010Cestitamo!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Otka\u017Ei</button><button id="doneOk" class="secondary">U redu</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Ovaj nivo je veoma te\u0161ko. \u017Delite da ga presko\u010Dite i idite na slede\u0107u igru? Uvek mo\u017Eete da se vratite kasnije.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Otka\u017Ei</button><button id="abortOk" class="secondary">U redu</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">U redu</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
