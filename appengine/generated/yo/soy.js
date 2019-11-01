// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Ere Blocky</span><span id="Games_puzzle">Adojuru</span><span id="Games_maze">Iruju</span><span id="Games_bird">\u1EB8y\u1EB9</span><span id="Games_turtle">Adaba</span><span id="Games_movie">Fiimu</span><span id="Games_music">Orin</span><span id="Games_pondTutor">Omi ikudu</span><span id="Games_pond">Oluk\u1ECD</span><span id="Games_genetics">Awon Jiini</span><span id="Games_linesOfCode1">O ti yanju ipele yii p\u1EB9lu 1 ila JavaScript:</span><span id="Games_linesOfCode2">O ti yanju ipele yii p\u1EB9lu %1 awon ila JavaScript:</span><span id="Games_nextLevel">\u1E62e o \u1E63etan fun ipele %1?</span><span id="Games_finalLevel">\u1E62e o \u1E63etan fun ipenija ti o kan?</span><span id="Games_submitTitle">Ak\u1ECDle:</span><span id="Games_linkTooltip">Fipam\u1ECD ki o si sop\u1ECD m\u1ECD aw\u1ECDn bul\u1ECD\u1ECDki.</span><span id="Games_runTooltip">\u1E62i\u1E63e lori eto naa ti o k\u1ECD</span><span id="Games_runProgram">\u1E62e Eto</span><span id="Games_resetTooltip">Da eto naa duro ki o si tun ipele naa to pada.</span><span id="Games_resetProgram">Atunto</span><span id="Games_help">\u00CCr\u00E0nw\u1ECD\u0301</span><span id="Games_dialogOk">O DARA</span><span id="Games_dialogCancel">Fagil\u00E9</span><span id="Games_catLogic">Irogun</span><span id="Games_catLoops">Ilosiwaju losehin</span><span id="Games_catMath">Isiro</span><span id="Games_catText">\u1ECCr\u1ECD</span><span id="Games_catLists">Akoj\u1ECD</span><span id="Games_catColour">Aw\u1ECD</span><span id="Games_catVariables">Oniruru</span><span id="Games_catProcedures">I\u1E63e</span><span id="Games_httpRequestError">Ii\u1E63oro wa p\u1EB9lu \u00ECbeere naa.</span><span id="Games_linkAlert">\u1E62e alabapin aw\u1ECDn bulooku r\u1EB9 p\u1EB9lu asop\u1ECD yii:\n\n%1</span><span id="Games_hashError">Ma binu, \'%1\' ko \u1E63e ibamu p\u1EB9lu eyikeyi eto ti a fipam\u1ECD.</span><span id="Games_xmlError">Ko le gbe faili ti o fipam\u1ECD jade. Boya o ti \u1E63\u1EB9da re p\u1EB9lu irufe ori\u1E63iri\u1E63i Blockly?</span><span id="Games_submitted">O \u1E63eun fun eto yii! Ti aw\u1ECDn o\u1E63i\u1E63e wa ba f\u1EB9ran r\u1EB9, w\u1ECDn yoo gbejade si ibi i\u1E63afiha f\u1ECDto ni arin \u1ECDj\u1ECD di\u1EB9.</span><span id="Games_listVariable">akoj\u1ECD</span><span id="Games_textVariable">\u1ECDr\u1ECD</span><span id="Games_breakLink">L\u1ECDgan ti o b\u1EB9r\u1EB9 \u1E63i \u1E63atunk\u1ECD JavaScript, o ko le pada si  idatunk\u1ECD bul\u1ECD\u1ECDku mo. \u1E62e eyi dara?</span><span id="Games_blocks">Bul\u1ECD\u1ECDku</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Ere Blocky</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Ku oriire!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Fagil\u00E9</button><button id="doneOk" class="secondary">O DARA</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Ipele yii niraa gidigidi. \u1E62e o f\u1EB9 foda ki o l\u1ECD si ere idaraya ti o t\u1EB9le? O le pada wa nigbamii.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Fagil\u00E9</button><button id="abortOk" class="secondary">O DARA</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">O DARA</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
