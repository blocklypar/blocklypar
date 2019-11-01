// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly igre</span><span id="Games_puzzle">Sestavljanka</span><span id="Games_maze">Labirint</span><span id="Games_bird">Pti\u010D</span><span id="Games_turtle">\u017Delva</span><span id="Games_movie">Film</span><span id="Games_music">Glasba</span><span id="Games_pondTutor">Ribnik Mentor</span><span id="Games_pond">Ribnik</span><span id="Games_genetics">Genetika</span><span id="Games_linesOfCode1">Stopnjo si re\u0161il/-a z 1 vrstico JavaScript-a:</span><span id="Games_linesOfCode2">To stopnjo si re\u0161il z %1 vrsticami Javascript-a.</span><span id="Games_nextLevel">Ali ste pripravljeni na stopnjo %1?</span><span id="Games_finalLevel">Si pripravljen na naslednji izziv?</span><span id="Games_submitTitle">Naslov:</span><span id="Games_linkTooltip">Shrani in pove\u017Ei do blokov.</span><span id="Games_runTooltip">Po\u017Eeni program, ki si ga napisal/-a.</span><span id="Games_runProgram">Po\u017Eeni program</span><span id="Games_resetTooltip">Ustavi program in ponastavi stopnjo.</span><span id="Games_resetProgram">Ponastavi</span><span id="Games_help">Pomo\u010D</span><span id="Games_dialogOk">V redu</span><span id="Games_dialogCancel">Prekli\u010Di</span><span id="Games_catLogic">Logika</span><span id="Games_catLoops">Zanke</span><span id="Games_catMath">Matematika</span><span id="Games_catText">Besedilo</span><span id="Games_catLists">Seznami</span><span id="Games_catColour">Barva</span><span id="Games_catVariables">Spremenljivke</span><span id="Games_catProcedures">Funkcije</span><span id="Games_httpRequestError">Nastala je te\u017Eava z zahtevo.</span><span id="Games_linkAlert">Delite svoje bloke s to povezavo: %1</span><span id="Games_hashError">Oprostite, \'%1\' se ne ujema z nobenim shranjenim programom.</span><span id="Games_xmlError">Ni bilo mogo\u010De nalo\u017Eiti shranjene datoteke. Mogo\u010De je bila ustvarjena z drugo razli\u010Dico Blocklyja?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">seznam</span><span id="Games_textVariable">besedilo</span><span id="Games_breakLink">Ko za\u010Dnete urejati JavaScript, se ne morete vrniti nazaj na urejanje blokov. Je to OK?</span><span id="Games_blocks">Bloki</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blockly igre</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">\u010Cestitke!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Prekli\u010Di</button><button id="doneOk" class="secondary">V redu</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Ta stopnja je zelo te\u017Eka. Jo \u017Eelite presko\u010Diti in za\u010Deti z naslednjo igro? Vedno lahko kasneje pridete nazaj.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Prekli\u010Di</button><button id="abortOk" class="secondary">V redu</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">V redu</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
