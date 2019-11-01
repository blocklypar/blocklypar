// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Index.soy.
 */

goog.provide('Index.soy');

goog.require('soy');
goog.require('soydata');


Index.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="title">\u30D6\u30ED\u30C3\u30AF\u30EA\u30FC\u30FB\u30B2\u30FC\u30E0</span><span id="Index_clear">\u3059\u3079\u3066\u306E\u56DE\u7B54\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F</span></div>';
};
if (goog.DEBUG) {
  Index.soy.messages.soyTemplateName = 'Index.soy.messages';
}


Index.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Index.soy.messages(null, null, opt_ijData) + '<div id="header"><img id="banner" src="index/title-beta.png" height="51" width="244" alt="Blockly Games"><div id="subtitle">\u660E\u65E5\u306E\u30D7\u30ED\u30B0\u30E9\u30DE\u30FC\u306E\u305F\u3081\u306E\u30B2\u30FC\u30E0 &nbsp;' + ((opt_ijData.html) ? '<a href="about.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="about?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + '\u304F\u308F\u3057\u3044\u60C5\u5831\u306F\u3053\u3061\u3089</a></div></div><svg height="100%" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="translate(-150,-60)"><svg height="100%" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="none" x="150" y="60"><path id="path" d="M 10,15 C 15,60 35,100 50,70 S 80,20 90,85"' + ((opt_ijData.rtl) ? 'transform="translate(100) scale(-1, 1)"' : '') + '/></svg>' + Index.soy.appLink({app: 'puzzle', x: 10, y: 15, contentText: '\u30D1\u30BA\u30EB'}, null, opt_ijData) + Index.soy.appLink({app: 'maze', x: 16, y: 45, contentText: '\u8FF7\u8DEF'}, null, opt_ijData) + Index.soy.appLink({app: 'bird', x: 26, y: 69, contentText: '\u9CE5'}, null, opt_ijData) + Index.soy.appLink({app: 'turtle', x: 41, y: 80, contentText: '\u30BF\u30FC\u30C8\u30EB'}, null, opt_ijData) + Index.soy.appLink({app: 'movie', x: 55, y: 61, contentText: '\u52D5\u753B'}, null, opt_ijData) + Index.soy.appLink({app: 'music', x: 69, y: 43, contentText: '\u97F3\u697D'}, null, opt_ijData) + Index.soy.appLink({app: 'pond-tutor', x: 83, y: 55, contentText: '\u30DD\u30F3\u30C9\u30FB\u30C1\u30E5\u30FC\u30BF\u30FC'}, null, opt_ijData) + Index.soy.appLink({app: 'pond-duck', x: 90, y: 85, contentText: '\u30DD\u30F3\u30C9'}, null, opt_ijData) + '</g></svg><select id="languageMenu"></select><p id="clearDataPara" style="visibility: hidden">\u3084\u308A\u76F4\u3057\u307E\u3059\u304B\uFF1F<button class="secondary" id="clearData">\u30C7\u30FC\u30BF\u3092\u30AF\u30EA\u30A2</span></button></p>';
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
