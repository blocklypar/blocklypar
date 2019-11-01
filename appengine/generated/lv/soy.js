// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly Games</span><span id="Games_puzzle">Saliekamatt\u0113ls</span><span id="Games_maze">Labirints</span><span id="Games_bird">Putns</span><span id="Games_turtle">Bru\u0146urupucis</span><span id="Games_movie">Filma</span><span id="Games_music">M\u016Bzika</span><span id="Games_pondTutor">D\u012B\u0137is (treni\u0146\u0161)</span><span id="Games_pond">D\u012B\u0137is</span><span id="Games_genetics">\u0122en\u0113tika</span><span id="Games_linesOfCode1">Tu atrisin\u0101ji \u0161o l\u012Bmeni izmantojot 1 JavaScript rindi\u0146u:</span><span id="Games_linesOfCode2">Tu atrisin\u0101ji \u0161o l\u012Bmeni izmantojot %1 JavaScript rindi\u0146as:</span><span id="Games_nextLevel">Vai esi gatavs %1 l\u012Bmenim?</span><span id="Games_finalLevel">Vai tu esi gatavs n\u0101kamajam izaicin\u0101jumam?</span><span id="Games_submitTitle">Nosaukums:</span><span id="Games_linkTooltip">Saglab\u0101t un izveidot saiti uz blokiem.</span><span id="Games_runTooltip">Palaist izveidoto programmu.</span><span id="Games_runProgram">Izpild\u012Bt programmu</span><span id="Games_resetTooltip">Apst\u0101din\u0101t programmu un atiestat\u012Bt l\u012Bmeni.</span><span id="Games_resetProgram">S\u0101kt no s\u0101kuma</span><span id="Games_help">Pal\u012Bdz\u012Bba</span><span id="Games_dialogOk">Labi</span><span id="Games_dialogCancel">Atcelt</span><span id="Games_catLogic">Lo\u0123ika</span><span id="Games_catLoops">Cikli</span><span id="Games_catMath">Matem\u0101tika</span><span id="Games_catText">Teksts</span><span id="Games_catLists">Saraksti</span><span id="Games_catColour">Kr\u0101sa</span><span id="Games_catVariables">Main\u012Bgie</span><span id="Games_catProcedures">Funkcijas</span><span id="Games_httpRequestError">Piepras\u012Bjuma k\u013C\u016Bda.</span><span id="Games_linkAlert">Dalies ar saviem blokiem ar \u0161o saiti:\n\n%1</span><span id="Games_hashError">Atvainojiet, bet \'%1\' neatbilst nevienai no saglab\u0101taj\u0101m programm\u0101m.</span><span id="Games_xmlError">Nevaru iel\u0101d\u0113t tavu saglab\u0101to failu. Iesp\u0113jams, tas tika izveidots ar citu Blockly versiju?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">saraksts</span><span id="Games_textVariable">teksts</span><span id="Games_breakLink">Ja j\u016Bs s\u0101kat redi\u0123\u0113t JavaScript, bloku redi\u0123\u0113\u0161ana vairs neb\u016Bs pieejama. Turpin\u0101t?</span><span id="Games_blocks">Bloki</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blockly Games</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Apsveicam!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Atcelt</button><button id="doneOk" class="secondary">Labi</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">\u0160is ir gr\u016Bts l\u012Bmenis. Vai J\u016Bs v\u0113l\u0113tos to izlaist un doties uz n\u0101kamo sp\u0113li? J\u016Bs v\u0113l\u0101k vienm\u0113r varat atgriezties.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Atcelt</button><button id="abortOk" class="secondary">Labi</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">Labi</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
