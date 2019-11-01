// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Index.soy.
 */

goog.provide('Index.soy');

goog.require('soy');
goog.require('soydata');


Index.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="title">\u1233\u1295\u12F1\u1245 \u1328\u12CB\u1273</span><span id="Index_clear">\u12A9\u120E\u121D \u1218\u120D\u1235\u1273\u1275\u12AB \u12AD\u1275\u1235\u122D\u12DE\u121D?</span></div>';
};
if (goog.DEBUG) {
  Index.soy.messages.soyTemplateName = 'Index.soy.messages';
}


Index.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Index.soy.messages(null, null, opt_ijData) + '<div id="header"><img id="banner" src="index/title-beta.png" height="51" width="244" alt="Blockly Games"><div id="subtitle">\u1328\u12CB\u1273 \u1355\u122E\u130D\u122B\u1218\u122B\u1275 \u1345\u1263\u1215\u1362 &nbsp;' + ((opt_ijData.html) ? '<a href="about.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="about?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + '\u1295\u12DD\u1260\u1208\u1340 \u1213\u1260\u122C\u1273...</a></div></div><svg height="100%" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="translate(-150,-60)"><svg height="100%" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="none" x="150" y="60"><path id="path" d="M 10,15 C 15,60 35,100 50,70 S 80,20 90,85"' + ((opt_ijData.rtl) ? 'transform="translate(100) scale(-1, 1)"' : '') + '/></svg>' + Index.soy.appLink({app: 'puzzle', x: 10, y: 15, contentText: '\u130D\u12F5\u120D'}, null, opt_ijData) + Index.soy.appLink({app: 'maze', x: 16, y: 45, contentText: '\u1213\u1341\u122D'}, null, opt_ijData) + Index.soy.appLink({app: 'bird', x: 26, y: 69, contentText: '\u12D2\u134D'}, null, opt_ijData) + Index.soy.appLink({app: 'turtle', x: 41, y: 80, contentText: '\u12A3\u1263\u130B\u12CD\u12E8'}, null, opt_ijData) + Index.soy.appLink({app: 'movie', x: 55, y: 61, contentText: '\u134A\u120D\u121D'}, null, opt_ijData) + Index.soy.appLink({app: 'music', x: 69, y: 43, contentText: '\u1219\u12DA\u1243'}, null, opt_ijData) + Index.soy.appLink({app: 'pond-tutor', x: 83, y: 55, contentText: '\u1243\u120B\u12ED \u1218\u121D\u1205\u122D'}, null, opt_ijData) + Index.soy.appLink({app: 'pond-duck', x: 90, y: 85, contentText: '\u1243\u120B\u12ED'}, null, opt_ijData) + '</g></svg><select id="languageMenu"></select><p id="clearDataPara" style="visibility: hidden">\u12A8\u121D\u1265\u1213\u12F5\u123D \u12AD\u1275\u1305\u121D\u122D \u1275\u12F0\u120A?<button class="secondary" id="clearData">\u12F3\u1273 \u12F0\u121D\u1235\u1235</span></button></p>';
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
