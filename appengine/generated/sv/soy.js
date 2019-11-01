// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blocklyspel</span><span id="Games_puzzle">Pussel</span><span id="Games_maze">Labyrint</span><span id="Games_bird">F\u00E5gel</span><span id="Games_turtle">Sk\u00F6ldpadda</span><span id="Games_movie">Film</span><span id="Games_music">Musik</span><span id="Games_pondTutor">Dammhandledare</span><span id="Games_pond">Damm</span><span id="Games_genetics">Genetik</span><span id="Games_linesOfCode1">Du l\u00F6ste niv\u00E5n med 1 rad JavaScript:</span><span id="Games_linesOfCode2">Du l\u00F6ste niv\u00E5n med %1 rader JavaScript:</span><span id="Games_nextLevel">\u00C4r du redo f\u00F6r niv\u00E5 %1?</span><span id="Games_finalLevel">\u00C4r du redo f\u00F6r n\u00E4sta utmaning?</span><span id="Games_submitTitle">Titel:</span><span id="Games_linkTooltip">Spara och l\u00E4nka till block.</span><span id="Games_runTooltip">K\u00F6r programmet du skrev.</span><span id="Games_runProgram">K\u00F6r program</span><span id="Games_resetTooltip">Stoppa programmet och \u00E5terst\u00E4ll niv\u00E5n.</span><span id="Games_resetProgram">\u00C5terst\u00E4ll</span><span id="Games_help">Hj\u00E4lp</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Avbryt</span><span id="Games_catLogic">Logik</span><span id="Games_catLoops">Loopar</span><span id="Games_catMath">Matematik</span><span id="Games_catText">Text</span><span id="Games_catLists">Listor</span><span id="Games_catColour">F\u00E4rg</span><span id="Games_catVariables">Variabler</span><span id="Games_catProcedures">Funktioner</span><span id="Games_httpRequestError">Det uppstod ett problem med beg\u00E4ran.</span><span id="Games_linkAlert">Dela dina block med l\u00E4nken: \n\n%1</span><span id="Games_hashError">Tyv\u00E4rr, \'%1\' \u00F6verensst\u00E4mmer inte med n\u00E5got sparat program.</span><span id="Games_xmlError">Kunde inte l\u00E4sa din sparade fil. Den skapades kanske med en annan version av Blockly?</span><span id="Games_submitted">Tack f\u00F6r programmet! Om v\u00E5r personal som best\u00E5r av dresserade apor gillar det kommer de publicera det i galleriet inom n\u00E5gra dagar.</span><span id="Games_listVariable">lista</span><span id="Games_textVariable">text</span><span id="Games_breakLink">N\u00E4r du v\u00E4l b\u00F6rjar redigera JavaScript kan du inte g\u00E5 tillbaka och redigera block. \u00C4r det okej med dig?</span><span id="Games_blocks">Block</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blocklyspel</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Gratulerar!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Avbryt</button><button id="doneOk" class="secondary">OK</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Den h\u00E4r niv\u00E5n \u00E4r extremt sv\u00E5r. Vill du hoppa \u00F6ver den och g\u00E5 till n\u00E4sta spel? Du kan alltid komma tillbaka senare.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Avbryt</button><button id="abortOk" class="secondary">OK</button></div></div>';
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
