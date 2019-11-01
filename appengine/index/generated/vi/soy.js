// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Index.soy.
 */

goog.provide('Index.soy');

goog.require('soy');
goog.require('soydata');


Index.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="title">Blockly Tr\u00F2 Ch\u01A1i</span><span id="Index_clear">X\u00F3a c\u00E1ch gi\u1EA3i quy\u1EBFt c\u1EE7a b\u1EA1n?</span></div>';
};
if (goog.DEBUG) {
  Index.soy.messages.soyTemplateName = 'Index.soy.messages';
}


Index.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Index.soy.messages(null, null, opt_ijData) + '<div id="header"><img id="banner" src="index/title-beta.png" height="51" width="244" alt="Blockly Games"><div id="subtitle">Tr\u00F2 ch\u01A1i cho ng\u01B0\u1EDDi l\u1EADp tr\u00ECnh c\u1EE7a ng\u00E0y mai. &nbsp;' + ((opt_ijData.html) ? '<a href="about.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="about?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Th\u00EAm th\u00F4ng tin...</a></div></div><svg height="100%" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="translate(-150,-60)"><svg height="100%" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="none" x="150" y="60"><path id="path" d="M 10,15 C 15,60 35,100 50,70 S 80,20 90,85"' + ((opt_ijData.rtl) ? 'transform="translate(100) scale(-1, 1)"' : '') + '/></svg>' + Index.soy.appLink({app: 'puzzle', x: 10, y: 15, contentText: '\u0110\u1ED1 vui'}, null, opt_ijData) + Index.soy.appLink({app: 'maze', x: 16, y: 45, contentText: 'Ma tr\u1EADn'}, null, opt_ijData) + Index.soy.appLink({app: 'bird', x: 26, y: 69, contentText: 'Chim'}, null, opt_ijData) + Index.soy.appLink({app: 'turtle', x: 41, y: 80, contentText: 'R\u00F9a'}, null, opt_ijData) + Index.soy.appLink({app: 'movie', x: 55, y: 61, contentText: 'Phim'}, null, opt_ijData) + Index.soy.appLink({app: 'music', x: 69, y: 43, contentText: '\u00C2m nh\u1EA1c'}, null, opt_ijData) + Index.soy.appLink({app: 'pond-tutor', x: 83, y: 55, contentText: 'H\u01B0\u1EDBng d\u1EABn ch\u01A1i Ao h\u1ED3'}, null, opt_ijData) + Index.soy.appLink({app: 'pond-duck', x: 90, y: 85, contentText: 'Ao h\u1ED3'}, null, opt_ijData) + '</g></svg><select id="languageMenu"></select><p id="clearDataPara" style="visibility: hidden">B\u1EA1n c\u00F3 mu\u1ED1n b\u1EAFt \u0111\u1EA7u l\u1EA1i t\u1EEB \u0111\u1EA7u?<button class="secondary" id="clearData">X\u00F3a d\u1EEF li\u1EC7u</span></button></p>';
};
if (goog.DEBUG) {
  Index.soy.start.soyTemplateName = 'Index.soy.start';
}


Index.soy.appLink = function(opt_data, opt_ignored, opt_ijData) {
  return '<svg height="150" width="300" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"' + ((opt_ijData.rtl) ? 'x="' + soy.$$escapeHtml(100 - opt_data.x) + '%"' : 'x="' + soy.$$escapeHtml(opt_data.x) + '%"') + 'y="' + soy.$$escapeHtml(opt_data.y) + '%"><path d="M 111.11,98.89 A 55 55 0 1 1 188.89,98.89" class="gaugeBack" id="back-' + soy.$$escapeHtml(opt_data.app) + '" /><g class="icon" id="icon-' + soy.$$escapeHtml(opt_data.app) + '"><circle cx="150" cy="60" r="50" class="iconBack" /><image xlink:href="index/' + soy.$$escapeHtml(opt_data.app) + '.png" height="100" width="100" x="100" y="10" />' + ((opt_ijData.html) ? '<a id="link-' + soy.$$escapeHtml(opt_data.app) + '" xlink:href="' + soy.$$escapeHtml(opt_data.app) + '.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a xlink:href="' + soy.$$escapeHtml(opt_data.app) + '?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + '<circle cx="150" cy="60" r="50" class="iconBorder" /><path class="gaugeFront" id="gauge-' + soy.$$escapeHtml(opt_data.app) + '" /><text x="150" y="135">' + soy.$$escapeHtml(opt_data.contentText) + '</text></a></g></svg>';
};
if (goog.DEBUG) {
  Index.soy.appLink.soyTemplateName = 'Index.soy.appLink';
}
