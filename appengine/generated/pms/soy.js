// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Gieugh \u00EBd Blockly</span><span id="Games_puzzle">S-ciapatesta</span><span id="Games_maze">Labirint</span><span id="Games_bird">Osel</span><span id="Games_turtle">Bissa copera</span><span id="Games_movie">Film</span><span id="Games_music">M\u00F9sica</span><span id="Games_pondTutor">Mag\u00ECster \u00EBd Pond</span><span id="Games_pond">Baciass</span><span id="Games_genetics">Gen\u00E9tica</span><span id="Games_linesOfCode1">A l\'ha arzolv\u00F9 \'s livel con 1 linia \u00EBd JavaScript:</span><span id="Games_linesOfCode2">A l\'ha arzolv\u00F9 \'s livel con %1 linie \u00EBd JavaScript:</span><span id="Games_nextLevel">\u00C9-lo pront p\u00EBr \u00EBl livel %1?</span><span id="Games_finalLevel">\u00C9-lo pront p\u00EBr n\'\u00E0utra d\u00EBsfida?</span><span id="Games_submitTitle">T\u00ECtol:</span><span id="Games_linkTooltip">Argistr\u00E9 e lij\u00E9 ai bl\u00F2ch.</span><span id="Games_runTooltip">F\u00E9 and\u00E9 \u00EBl programa ch\'a l\'ha scriv\u00F9.</span><span id="Games_runProgram">F\u00E9 and\u00E9 \u00EBl programa</span><span id="Games_resetTooltip">F\u00EBrm\u00E9 \u00EBl programa e inissialis\u00E9 torna \u00EBl livel.</span><span id="Games_resetProgram">But\u00E9 torna coma al prinsipi</span><span id="Games_help">Giut\u00E9</span><span id="Games_dialogOk">Va bin</span><span id="Games_dialogCancel">Anul\u00E9</span><span id="Games_catLogic">L\u00F2gica</span><span id="Games_catLoops">Liasse</span><span id="Games_catMath">Matem\u00E0tica</span><span id="Games_catText">Test</span><span id="Games_catLists">Liste</span><span id="Games_catColour">Color</span><span id="Games_catVariables">Vari\u00E0bij</span><span id="Games_catProcedures">Fonsion</span><span id="Games_httpRequestError">A-i \u00E9 staje un problema con l\'arcesta.</span><span id="Games_linkAlert">Ch\'a partagia ij s\u00F2 bl\u00F2ch grassie a sta liura: %1</span><span id="Games_hashError">An d\u00EBspias, \'%1 a cor\u00EBspond a gnun programa salv\u00E0.</span><span id="Games_xmlError">A l\'\u00E9 nen podusse cari\u00E9 so archivi salv\u00E0. Miraco a l\'\u00E9 st\u00E0it cre\u00E0 con na version diferenta \u00EBd Blockly?</span><span id="Games_submitted">Mers\u00EC p\u00EBr \u00EBs programa! S\'a-j pias a n\u00F2stra echip \u00EBd sumie anlen\u00E0, a lo publich\u00EBran da si dontr\u00E9 di.</span><span id="Games_listVariable">lista</span><span id="Games_textVariable">test</span><span id="Games_breakLink">Na vira ch\'a l\'avr\u00E0 ancamin\u00E0 a modifich\u00E9 \u00EBl JavaScript, a podr\u00E0 pi nen torn\u00E9 a la mod\u00ECfica dij bl\u00F2ch. A va bin?</span><span id="Games_blocks">Bl\u00F2ch</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Gieugh \u00EBd Blockly</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Compliment!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Anul\u00E9</button><button id="doneOk" class="secondary">Va bin</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">\u00CBs livel a l\'\u00E9 motobin dif\u00ECcil. Veul-lo autelo e passer al gieugh apress? A peul sempe torn\u00E9 andr\u00E9 pi tard.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Anul\u00E9</button><button id="abortOk" class="secondary">Va bin</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">Va bin</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
