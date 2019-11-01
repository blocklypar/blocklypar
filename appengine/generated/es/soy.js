// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Juegos de Blockly</span><span id="Games_puzzle">Rompecabezas</span><span id="Games_maze">Laberinto</span><span id="Games_bird">P\u00E1jaro</span><span id="Games_turtle">Tortuga</span><span id="Games_movie">Pel\u00EDcula</span><span id="Games_music">M\u00FAsica</span><span id="Games_pondTutor">Tutor del estanque</span><span id="Games_pond">Estanque</span><span id="Games_genetics">Gen\u00E9tica</span><span id="Games_linesOfCode1">Resolviste este nivel con 1 l\u00EDnea de JavaScript:</span><span id="Games_linesOfCode2">Resolviste este nivel con %1 l\u00EDneas de JavaScript:</span><span id="Games_nextLevel">\u00BFEst\u00E1s listo/a para el nivel %1?</span><span id="Games_finalLevel">\u00BFEst\u00E1s listo/a para el siguiente desaf\u00EDo?</span><span id="Games_submitTitle">T\u00EDtulo:</span><span id="Games_linkTooltip">Guardar y enlazar a los bloques.</span><span id="Games_runTooltip">Ejecutar el programa que escribiste.</span><span id="Games_runProgram">Ejecutar el programa</span><span id="Games_resetTooltip">Detener el programa y restablecer el nivel.</span><span id="Games_resetProgram">Restablecer</span><span id="Games_help">Ayuda</span><span id="Games_dialogOk">Aceptar</span><span id="Games_dialogCancel">Cancelar</span><span id="Games_catLogic">L\u00F3gica</span><span id="Games_catLoops">Bucles</span><span id="Games_catMath">Matem\u00E1ticas</span><span id="Games_catText">Texto</span><span id="Games_catLists">Listas</span><span id="Games_catColour">Color</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Funciones</span><span id="Games_httpRequestError">Hubo un problema con la petici\u00F3n.</span><span id="Games_linkAlert">Comparte tus bloques con este enlace:\n\n%1</span><span id="Games_hashError">\u00AB%1\u00BB no corresponde con ning\u00FAn programa guardado.</span><span id="Games_xmlError">No se pudo cargar el archivo guardado.  \u00BFQuiz\u00E1 fue creado con otra versi\u00F3n de Blockly?</span><span id="Games_submitted">Gracias por tu programa! Si a nuestro grupo experto de monos entrenados le gusta, lo publicar\u00E1n en la galer\u00EDa en un par de d\u00EDas.</span><span id="Games_listVariable">lista</span><span id="Games_textVariable">texto</span><span id="Games_breakLink">Una vez que comiences la edici\u00F3n de JavaScript, no podr\u00E1s volver a la edici\u00F3n de bloques. \u00BFEst\u00E1s seguro?</span><span id="Games_blocks">Bloques</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Juegos de Blockly</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">\u00A1Felicitaciones!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancelar</button><button id="doneOk" class="secondary">Aceptar</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Este nivel es extremadamente dif\u00EDcil. \u00BFDeseas saltearlo e ir al siguiente nivel? Siempre puedes regresar m\u00E1s adelante.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Cancelar</button><button id="abortOk" class="secondary">Aceptar</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">Aceptar</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
