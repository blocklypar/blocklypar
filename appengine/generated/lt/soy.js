// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">\u201EBlockly\u201C \u017Eaidimai</span><span id="Games_puzzle">D\u0117lion\u0117</span><span id="Games_maze">Labirintas</span><span id="Games_bird">Pauk\u0161tis</span><span id="Games_turtle">V\u0117\u017Elys</span><span id="Games_movie">Filmas</span><span id="Games_music">Muzika</span><span id="Games_pondTutor">Pond Tutor</span><span id="Games_pond">Tvenkinys</span><span id="Games_genetics">Genetika</span><span id="Games_linesOfCode1">J\u016Bs \u012Fveik\u0117te \u0161\u012F lyg\u012F su 1 JavaScript kodo eilute:</span><span id="Games_linesOfCode2">J\u016Bs \u012Fveik\u0117te \u0161\u012F lyg\u012F su %1 JavaScript kodo eilut\u0117mis:</span><span id="Games_nextLevel">Ar j\u016Bs pasiruo\u0161\u0119 lygiui %1?</span><span id="Games_finalLevel">Ar esate pasireng\u0119s kitam i\u0161\u0161\u016Bkiui?</span><span id="Games_submitTitle">Pavadinimas:</span><span id="Games_linkTooltip">I\u0161saugoti (sugeneruoti URL nuorod\u0105).</span><span id="Games_runTooltip">Paleisti j\u016Bs\u0173 para\u0161yt\u0105 program\u0105.</span><span id="Games_runProgram">Paleisti program\u0105</span><span id="Games_resetTooltip">Paleisti program\u0105 ir atkurti lyg\u012F.</span><span id="Games_resetProgram">I\u0161 naujo</span><span id="Games_help">Pagalba</span><span id="Games_dialogOk">Gerai</span><span id="Games_dialogCancel">At\u0161aukti</span><span id="Games_catLogic">Logika</span><span id="Games_catLoops">Kartojimas</span><span id="Games_catMath">Matematika</span><span id="Games_catText">Tekstas</span><span id="Games_catLists">S\u0105ra\u0161ai</span><span id="Games_catColour">Spalva</span><span id="Games_catVariables">Kintamieji</span><span id="Games_catProcedures">Funkcijos</span><span id="Games_httpRequestError">I\u0161kilo problema su pra\u0161ymu.</span><span id="Games_linkAlert">%1</span><span id="Games_hashError">Deja, \'%1\' neatitinka jokios i\u0161saugotos programos.</span><span id="Games_xmlError">Nesuprantu pateikto failo. Gal jis buvo sukurtas su kita Blocky versija?</span><span id="Games_submitted">A\u010Di\u016B u\u017E program\u0105! Jei m\u016Bs\u0173 proting\u0173 be\u017Ed\u017Eioni\u0173 komandai ji patiks, mes j\u0105 publikuosime savo galerijoje per artimiausias dienas.</span><span id="Games_listVariable">s\u0105ra\u0161as</span><span id="Games_textVariable">tekstas</span><span id="Games_breakLink">Jei prad\u0117site redaguoti JavaScript nebegal\u0117site redaguoti blok\u0173, sutinkate?</span><span id="Games_blocks">Blokai</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + '\u201EBlockly\u201C \u017Eaidimai</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Sveikiname!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">At\u0161aukti</button><button id="doneOk" class="secondary">Gerai</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">\u0160is lygis yra itin sud\u0117tingas. Ar nor\u0117tum\u0117te j\u012F praleisti ir pereiti prie kito \u017Eaidimo? Visada galite sugr\u012F\u017Eti v\u0117liau.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">At\u0161aukti</button><button id="abortOk" class="secondary">Gerai</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">Gerai</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
