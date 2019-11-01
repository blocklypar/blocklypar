// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Permainan Blockly</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Labirin</span><span id="Games_bird">Burung</span><span id="Games_turtle">Kura-kura</span><span id="Games_movie">Film</span><span id="Games_music">Music</span><span id="Games_pondTutor">Kolam Pembimbing</span><span id="Games_pond">Kolam</span><span id="Games_genetics">Genetik</span><span id="Games_linesOfCode1">Anda menyelesaikan level ini dengan 1 baris JavaScript:</span><span id="Games_linesOfCode2">Anda menyelesaikan level ini dengan %1 baris JavaScript:</span><span id="Games_nextLevel">Apakah Anda siap untuk level\u00A0%1?</span><span id="Games_finalLevel">Apakah Anda siap untuk tantangan berikutnya?</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">Simpan dan link ke blok.</span><span id="Games_runTooltip">Jalankan program yang Anda tulis.</span><span id="Games_runProgram">Jalankan Program</span><span id="Games_resetTooltip">Hentikan program dan me-reset level.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Bantuan</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Batal</span><span id="Games_catLogic">Logika</span><span id="Games_catLoops">Perulangan</span><span id="Games_catMath">Matematika</span><span id="Games_catText">Teks</span><span id="Games_catLists">Daftar</span><span id="Games_catColour">Warna</span><span id="Games_catVariables">Variabel</span><span id="Games_catProcedures">Fungsi</span><span id="Games_httpRequestError">Ada masalah dengan permintaan.</span><span id="Games_linkAlert">Bagikan blok Anda dengan link ini:\n\n%1</span><span id="Games_hashError">Maaf, \'%1\' tidak sesuai dengan program yang tersimpan.</span><span id="Games_xmlError">Tidak dapat memuat file Anda yang tersimpan. Mungkin itu dibuat dengan versi yang berbeda dari Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">list</span><span id="Games_textVariable">teks</span><span id="Games_breakLink">Sekali Anda mengedit JavaScript, Anda tidak dapat kembali mengedit blok. OK?</span><span id="Games_blocks">Blok</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Permainan Blockly</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Selamat!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Batal</button><button id="doneOk" class="secondary">OK</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Tingkat ini sangat sulit. Apakah Anda ingin melewatkannya dan melanjutkan ke permainan berikutnya? Anda selalu bisa kembali lagi nanti.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Batal</button><button id="abortOk" class="secondary">OK</button></div></div>';
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
