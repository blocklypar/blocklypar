// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Uraren Blocky</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Tazibba</span><span id="Games_bird">Agdi\u1E0D</span><span id="Games_turtle">Afekrun</span><span id="Games_movie">Asaru</span><span id="Games_music">A\u1E93awan</span><span id="Games_pondTutor">Tamsirt Pond</span><span id="Games_pond">Pond</span><span id="Games_genetics">Tasnukkest</span><span id="Games_linesOfCode1">Tefri\u1E0D aswir-agi s 1 n izirig n JavaScript:</span><span id="Games_linesOfCode2">Tefri\u1E0D aswir-agi s %1 n izirig n JavaScript:</span><span id="Games_nextLevel">Thegga\u1E0D i uswir %1?</span><span id="Games_finalLevel">Thegga\u1E0D i ucqqirew d-iteddun?</span><span id="Games_submitTitle">Azwel:</span><span id="Games_linkTooltip">Sekles sakin n\u0263el akk i\u1E25edran. </span><span id="Games_runTooltip">Selkem ahil i turi\u1E0D.</span><span id="Games_runProgram">Selkem ahil</span><span id="Games_resetTooltip">Se\u1E25bes ahil sakin ales awennez n uswir.</span><span id="Games_resetProgram">Ales awennez</span><span id="Games_help">Tallelt</span><span id="Games_dialogOk">IH</span><span id="Games_dialogCancel">Sefsex</span><span id="Games_catLogic">Tame\u1E93la</span><span id="Games_catLoops">Tineddicin</span><span id="Games_catMath">Tusnakt</span><span id="Games_catText">A\u1E0Dris</span><span id="Games_catLists">Tibdarint</span><span id="Games_catColour">Initen</span><span id="Games_catVariables">Imuttiyen</span><span id="Games_catProcedures">Tiwura</span><span id="Games_httpRequestError">Yella ugur di tuttra.</span><span id="Games_linkAlert">B\u1E0Du i\u1E25edran-ik s use\u0263wan-agi:\n%1</span><span id="Games_hashError">Suref-a\u0263, %1 ur imen\u1E6Daf ula d yiwen seg wahilen yettwaskelsen.</span><span id="Games_xmlError">Ur izmir ara ad isnifel afaylu n usekles. Ahat yettwarna s lqem-nni\u1E0Den n Blockly?</span><span id="Games_submitted">Tanemmirt \u0263ef wahil-a! Ma t\u1E25emmel-it terbe\u025Bt-nne\u0263 n yibkan, ad t-id-suff\u0263en di tmidelt akka sin wussan.</span><span id="Games_listVariable">tabdart</span><span id="Games_textVariable">a\u1E0Dris</span><span id="Games_breakLink">Ticki tebdi\u1E0D asnifel n JavaScript, tzemre\u1E0D ad tu\u0263ale\u1E0D ar te\u1E93rigt n i\u1E25edran. Yelha waya?</span><span id="Games_blocks">I\u1E25edran</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Uraren Blocky</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Ayuz!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Sefsex</button><button id="doneOk" class="secondary">IH</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Aswir-agi yew\u025Ber a\u1E6Das. Teb\u0263i\u1E0D ad tzegle\u1E0D-t sakin ad teddu\u1E0D ar uswir d -iteddun? Tzemrem yal tikelt ad d-u\u0263ale\u1E0D \u0263ur-s.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Sefsex</button><button id="abortOk" class="secondary">IH</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">IH</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
