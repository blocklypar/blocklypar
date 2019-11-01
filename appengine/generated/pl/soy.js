// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Gry Blockly</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Labirynt</span><span id="Games_bird">Ptak</span><span id="Games_turtle">\u017B\u00F3\u0142w</span><span id="Games_movie">Animacja</span><span id="Games_music">Muzyka</span><span id="Games_pondTutor">Staw: Jak gra\u0107</span><span id="Games_pond">Staw</span><span id="Games_genetics">Genetyka</span><span id="Games_linesOfCode1">Rozwi\u0105za\u0142e\u015B ten poziom za pomoc\u0105 1 linii JavaSkryptu:</span><span id="Games_linesOfCode2">Rozwi\u0105za\u0142e\u015B ten poziom za pomoc\u0105 %1 linii JavaSkryptu:</span><span id="Games_nextLevel">Jeste\u015B got\u00F3w na %1 poziom?</span><span id="Games_finalLevel">Jeste\u015B got\u00F3w na nast\u0119pne wyzwanie?</span><span id="Games_submitTitle">Tytu\u0142:</span><span id="Games_linkTooltip">Zapisz i podlinkuj do klock\u00F3w</span><span id="Games_runTooltip">Uruchom napisany przez Ciebie program.</span><span id="Games_runProgram">Uruchom Program</span><span id="Games_resetTooltip">Zatrzymaj program i zresetuj poziom.</span><span id="Games_resetProgram">Zresetuj</span><span id="Games_help">Pomoc</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Anuluj</span><span id="Games_catLogic">Logika</span><span id="Games_catLoops">P\u0119tle</span><span id="Games_catMath">Matematyka</span><span id="Games_catText">Tekst</span><span id="Games_catLists">Listy</span><span id="Games_catColour">Kolor</span><span id="Games_catVariables">Zmienne</span><span id="Games_catProcedures">Funkcje</span><span id="Games_httpRequestError">Wyst\u0105pi\u0142 problem z \u017C\u0105daniem.</span><span id="Games_linkAlert">Udost\u0119pnij swoje klocki korzystaj\u0105c z poni\u017Cszego linku: \n\n\n%1</span><span id="Games_hashError">Przepraszamy, "%1" nie odpowiada \u017Cadnemu zapisanemu programowi.</span><span id="Games_xmlError">Nie mo\u017Cna za\u0142adowa\u0107 zapisanego pliku. By\u0107 mo\u017Ce zosta\u0142 utworzony za pomoc\u0105 innej wersji Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">lista</span><span id="Games_textVariable">tekst</span><span id="Games_breakLink">Jak zaczniesz edytowa\u0107 JavaScript, nie mo\u017Cesz powr\u00F3ci\u0107 do edycji klock\u00F3w. Kontynuowa\u0107?</span><span id="Games_blocks">Klocki</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Gry Blockly</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Gratulacje!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Anuluj</button><button id="doneOk" class="secondary">OK</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Ten poziom jest bardzo trudny. Czy chcia\u0142by\u015B/chcia\u0142aby\u015B pomin\u0105\u0107 go i i\u015B\u0107 do nast\u0119pnej gry? Mo\u017Cesz zawsze powr\u00F3ci\u0107 p\u00F3\u017Aniej.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Anuluj</button><button id="abortOk" class="secondary">OK</button></div></div>';
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
