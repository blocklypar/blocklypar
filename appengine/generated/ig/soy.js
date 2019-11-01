// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Egwuregwu Blockly</span><span id="Games_puzzle">Mgbagwoju anya</span><span id="Games_maze">R\u1ECBg\u1ECDr\u1ECBg\u1ECD</span><span id="Games_bird">Nn\u1EE5n\u1EE5</span><span id="Games_turtle">Mbe</span><span id="Games_movie">Ihe nk\u1ECBr\u1ECB</span><span id="Games_music">Egwu</span><span id="Games_pondTutor">Onye nk\u1EE5z\u1ECB \u1ECCd\u1ECD mmiri</span><span id="Games_pond">\u1ECCd\u1ECD mmiri</span><span id="Games_genetics">Jenetiks</span><span id="Games_linesOfCode1">\u1ECA r\u1EE5tara ogo a site na akara 1 nke JavaScript:</span><span id="Games_linesOfCode2">\u1ECA r\u1EE5tara ogo a site na akara %1 nke JavaScript:</span><span id="Games_nextLevel">\u1ECA d\u1ECB njikere maka \u1ECDkwa %1?</span><span id="Games_finalLevel">\u1ECA d\u1ECB njikere maka nsogbu \u1ECDz\u1ECD?</span><span id="Games_submitTitle">Aha</span><span id="Games_linkTooltip">Z\u1ECDp\u1EE5ta ma jik\u1ECDta ng\u1ECDng\u1ECD.</span><span id="Games_runTooltip">B\u1ECBdo \u1EE5soro ihe omume i dere.</span><span id="Games_runProgram">B\u1ECBdo \u1EE4soro Ihe Omume</span><span id="Games_resetTooltip">Kw\u1EE5s\u1ECB ihe omume ah\u1EE5 ma t\u1ECDghar\u1ECBa ogo.</span><span id="Games_resetProgram">T\u1ECDghar\u1ECBa</span><span id="Games_help">Nkw\u00E1do</span><span id="Games_dialogOk">\u1ECC D\u1ECA MMA</span><span id="Games_dialogCancel">Hap\u1EE5\u0300</span><span id="Games_catLogic">L\u1ECDg\u1ECBk</span><span id="Games_catLoops">Meghachi</span><span id="Games_catMath">Mgbak\u1ECD na mwep\u1EE5</span><span id="Games_catText">Ederede</span><span id="Games_catLists">Ndep\u1EE5ta</span><span id="Games_catColour">Agba</span><span id="Games_catVariables">Agbanwe</span><span id="Games_catProcedures">\u1ECCr\u1EE5</span><span id="Games_httpRequestError">Enwere nsogbu na ar\u1ECBr\u1ECB\u1ECD ah\u1EE5.</span><span id="Games_linkAlert">J\u1ECBr\u1ECB ihe njik\u1ECD a kesaa ng\u1ECDng\u1ECD g\u1ECB: %1</span><span id="Games_hashError">Ndo, \'%1\' ekwenyegh\u1ECB na usoro ihe omume ihe \u1ECD b\u1EE5la e chedoro.</span><span id="Games_xmlError">Enwegh\u1ECB ike \u1ECBb\u1EE5p\u1EE5ta fa\u1ECBl\u1EE5 echekwara g\u1ECB. Ikekwe e mep\u1EE5tara ya na \u1EE5d\u1ECB Blockly d\u1ECB iche?</span><span id="Games_submitted">Daal\u1EE5 maka usoro ihe omume a! \u1ECC b\u1EE5r\u1EE5 na \u1ECDmas\u1ECB nd\u1ECB \u1ECDr\u1EE5 any\u1ECB, ha ga-ebip\u1EE5ta ya na ihe oyiyi galeri n\'ime \u1EE5b\u1ECDch\u1ECB ole na ole.</span><span id="Games_listVariable">ndep\u1EE5ta</span><span id="Games_textVariable">ederede</span><span id="Games_breakLink">Ozugbo \u1ECBmalitere nhazi ederede Javascript, \u1ECB nwegh\u1ECB ike \u1ECBlaghachi na nhazi ederede. Nke a \u1ECD d\u1ECB mma?</span><span id="Games_blocks">Ng\u1ECDng\u1ECD</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Egwuregwu Blockly</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Ekele!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Hap\u1EE5\u0300</button><button id="doneOk" class="secondary">\u1ECC D\u1ECA MMA</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Ogo a na ara ok\u00E9 ah\u1EE5. \u1ECC ga-amas\u1ECB g\u1ECB \u1ECBw\u1EE5 ya ma gaa na egwuregwu \u1ECDz\u1ECD? \u1ECA nwere ike \u1ECBlaghachi mgbe e mes\u1ECBr\u1ECB.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Hap\u1EE5\u0300</button><button id="abortOk" class="secondary">\u1ECC D\u1ECA MMA</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">\u1ECC D\u1ECA MMA</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
