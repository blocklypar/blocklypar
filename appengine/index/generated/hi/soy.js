// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Index.soy.
 */

goog.provide('Index.soy');

goog.require('soy');
goog.require('soydata');


Index.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="title">\u092C\u094D\u0932\u094B\u0915\u094D\u0932\u0940 \u0917\u0947\u092E</span><span id="Index_clear">\u0906\u092A\u0915\u0947 \u0938\u093E\u0930\u0947 \u0939\u0932 \u092E\u093F\u091F\u093E \u0926\u0947\u0902?</span></div>';
};
if (goog.DEBUG) {
  Index.soy.messages.soyTemplateName = 'Index.soy.messages';
}


Index.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Index.soy.messages(null, null, opt_ijData) + '<div id="header"><img id="banner" src="index/title-beta.png" height="51" width="244" alt="Blockly Games"><div id="subtitle">\u092D\u0935\u093F\u0937\u094D\u092F \u0915\u0947 \u092A\u094D\u0930\u094B\u0917\u094D\u0930\u093E\u092E\u0930\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u092C\u0928\u093E \u0916\u0947\u0932 &nbsp;' + ((opt_ijData.html) ? '<a href="about.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="about?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + '\u0905\u0927\u093F\u0915 \u091C\u093E\u0928\u0915\u093E\u0930\u0940...</a></div></div><svg height="100%" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="translate(-150,-60)"><svg height="100%" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="none" x="150" y="60"><path id="path" d="M 10,15 C 15,60 35,100 50,70 S 80,20 90,85"' + ((opt_ijData.rtl) ? 'transform="translate(100) scale(-1, 1)"' : '') + '/></svg>' + Index.soy.appLink({app: 'puzzle', x: 10, y: 15, contentText: '\u092A\u0939\u0947\u0932\u0940'}, null, opt_ijData) + Index.soy.appLink({app: 'maze', x: 16, y: 45, contentText: '\u092D\u0942\u0932\u092D\u0941\u0932\u0948\u092F\u093E'}, null, opt_ijData) + Index.soy.appLink({app: 'bird', x: 26, y: 69, contentText: '\u092A\u0915\u094D\u0937\u0940'}, null, opt_ijData) + Index.soy.appLink({app: 'turtle', x: 41, y: 80, contentText: '\u0915\u091B\u0941\u0906'}, null, opt_ijData) + Index.soy.appLink({app: 'movie', x: 55, y: 61, contentText: '\u091A\u093E\u0932'}, null, opt_ijData) + Index.soy.appLink({app: 'music', x: 69, y: 43, contentText: '\u0938\u0902\u0917\u0940\u0924'}, null, opt_ijData) + Index.soy.appLink({app: 'pond-tutor', x: 83, y: 55, contentText: '\u0924\u093E\u0932\u093E\u092C \u0905\u0928\u0941\u0936\u093F\u0915\u094D\u0937\u0915'}, null, opt_ijData) + Index.soy.appLink({app: 'pond-duck', x: 90, y: 85, contentText: '\u0924\u093E\u0932\u093E\u092C'}, null, opt_ijData) + '</g></svg><select id="languageMenu"></select><p id="clearDataPara" style="visibility: hidden">\u092B\u093F\u0930 \u0938\u0947 \u0936\u0941\u0930\u0942 \u0915\u0930\u0928\u093E \u091A\u093E\u0939\u0924\u0947 \u0939\u0948\u0902?<button class="secondary" id="clearData">\u0921\u093E\u091F\u093E \u0938\u093E\u092B \u0915\u0930\u0947\u0902</span></button></p>';
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
