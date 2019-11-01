// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Index.soy.
 */

goog.provide('Index.soy');

goog.require('soy');
goog.require('soydata');


Index.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="title">\u0BB5\u0BBF\u0BB3\u0BC8\u0BAA\u0BBE\u0B9F\u0BC1\u0B95\u0BB3\u0BCD</span><span id="Index_clear">\u0BB5\u0BBF\u0B9F\u0BC8\u0B95\u0BB3\u0BC8 \u0B85\u0BB4\u0BBF</span></div>';
};
if (goog.DEBUG) {
  Index.soy.messages.soyTemplateName = 'Index.soy.messages';
}


Index.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Index.soy.messages(null, null, opt_ijData) + '<div id="header"><img id="banner" src="index/title-beta.png" height="51" width="244" alt="Blockly Games"><div id="subtitle">\u0BA8\u0BBE\u0BB3\u0BC8\u0BAF \u0BA8\u0BBF\u0BB0\u0BB2\u0BBE\u0BB3\u0BB0\u0BBF\u0BA9\u0BCD \u0BB5\u0BBF\u0BB3\u0BC8\u0BAF\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1\u0B95\u0BCD\u0B95\u0BB3\u0BCD &nbsp;' + ((opt_ijData.html) ? '<a href="about.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="about?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + '\u0BAE\u0BC7\u0BB2\u0BA4\u0BBF\u0B95 \u0BA4\u0B95\u0BB5\u0BB2\u0BCD</a></div></div><svg height="100%" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="translate(-150,-60)"><svg height="100%" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="none" x="150" y="60"><path id="path" d="M 10,15 C 15,60 35,100 50,70 S 80,20 90,85"' + ((opt_ijData.rtl) ? 'transform="translate(100) scale(-1, 1)"' : '') + '/></svg>' + Index.soy.appLink({app: 'puzzle', x: 10, y: 15, contentText: '\u0BAA\u0BC1\u0BA4\u0BBF\u0BB0\u0BCD'}, null, opt_ijData) + Index.soy.appLink({app: 'maze', x: 16, y: 45, contentText: '\u0BAA\u0BC1\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BA4\u0BC8'}, null, opt_ijData) + Index.soy.appLink({app: 'bird', x: 26, y: 69, contentText: '\u0BAA\u0BB1\u0BB5\u0BC8'}, null, opt_ijData) + Index.soy.appLink({app: 'turtle', x: 41, y: 80, contentText: '\u0B86\u0BAE\u0BC8'}, null, opt_ijData) + Index.soy.appLink({app: 'movie', x: 55, y: 61, contentText: '\u0BA4\u0BBF\u0BB0\u0BC8\u0BAA\u0BCD\u0BAA\u0B9F\u0BAE\u0BCD'}, null, opt_ijData) + Index.soy.appLink({app: 'music', x: 69, y: 43, contentText: '\u0B87\u0B9A\u0BC8'}, null, opt_ijData) + Index.soy.appLink({app: 'pond-tutor', x: 83, y: 55, contentText: 'Pond Tutor'}, null, opt_ijData) + Index.soy.appLink({app: 'pond-duck', x: 90, y: 85, contentText: '\u0B95\u0BC1\u0BB3\u0BAE\u0BCD'}, null, opt_ijData) + '</g></svg><select id="languageMenu"></select><p id="clearDataPara" style="visibility: hidden">\u0BAE\u0BC0\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD \u0BA4\u0BCA\u0B9F\u0B99\u0BCD\u0B95\u0BB5\u0BBE?<button class="secondary" id="clearData">\u0BAE\u0BBE\u0BB1\u0BBF\u0B95\u0BB3\u0BC8 \u0B85\u0BB4\u0BBF</span></button></p>';
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
