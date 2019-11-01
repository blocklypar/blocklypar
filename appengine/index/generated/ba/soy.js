// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Index.soy.
 */

goog.provide('Index.soy');

goog.require('soy');
goog.require('soydata');


Index.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="title">Blockly \u0443\u0439\u044B\u043D\u0434\u0430\u0440\u044B</span><span id="Index_clear"> \u0411\u04E9\u0442\u04D9 \u0441\u0438\u0441\u0435\u043B\u0435\u0448\u0442\u04D9\u0440\u0499\u0435 \u043B\u04D9 \u044E\u0439\u044B\u0440\u0493\u0430\u043C\u044B?</span></div>';
};
if (goog.DEBUG) {
  Index.soy.messages.soyTemplateName = 'Index.soy.messages';
}


Index.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Index.soy.messages(null, null, opt_ijData) + '<div id="header"><img id="banner" src="index/title-beta.png" height="51" width="244" alt="Blockly Games"><div id="subtitle"> \u0411\u0443\u043B\u0430\u0441\u0430\u04A1 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442\u0430\u0440 \u04E9\u0441\u04E9\u043D \u0443\u0439\u044B\u043D\u0434\u0430\u0440. &nbsp;' + ((opt_ijData.html) ? '<a href="about.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="about?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + '\u0415\u043D\u0442\u0435\u043A\u043B\u04D9\u0431\u0435\u0440\u04D9\u043A</a></div></div><svg height="100%" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="translate(-150,-60)"><svg height="100%" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="none" x="150" y="60"><path id="path" d="M 10,15 C 15,60 35,100 50,70 S 80,20 90,85"' + ((opt_ijData.rtl) ? 'transform="translate(100) scale(-1, 1)"' : '') + '/></svg>' + Index.soy.appLink({app: 'puzzle', x: 10, y: 15, contentText: '\u0411\u0430\u0448\u0432\u0430\u0442\u04A1\u044B\u0441'}, null, opt_ijData) + Index.soy.appLink({app: 'maze', x: 16, y: 45, contentText: '\u041B\u0430\u0431\u0438\u0440\u0438\u043D\u0442'}, null, opt_ijData) + Index.soy.appLink({app: 'bird', x: 26, y: 69, contentText: '\u04A0\u043E\u0448'}, null, opt_ijData) + Index.soy.appLink({app: 'turtle', x: 41, y: 80, contentText: '\u0422\u0430\u0448\u0431\u0430\u04A1\u0430'}, null, opt_ijData) + Index.soy.appLink({app: 'movie', x: 55, y: 61, contentText: ' \u0424\u0438\u043B\u044C\u043C'}, null, opt_ijData) + Index.soy.appLink({app: 'music', x: 69, y: 43, contentText: 'Music'}, null, opt_ijData) + Index.soy.appLink({app: 'pond-tutor', x: 83, y: 55, contentText: 'Tutor \u0431\u044B\u0443\u0430\u04BB\u044B'}, null, opt_ijData) + Index.soy.appLink({app: 'pond-duck', x: 90, y: 85, contentText: '\u0411\u044B\u0443\u0430'}, null, opt_ijData) + '</g></svg><select id="languageMenu"></select><p id="clearDataPara" style="visibility: hidden">\u042F\u04A3\u044B\u043D\u0430\u043D \u0431\u0430\u0448\u043B\u0430\u0440\u0493\u0430 \u0442\u0435\u043B\u04D9\u0439\u04BB\u0435\u0433\u0435\u0499\u043C\u0435?<button class="secondary" id="clearData"> \u041C\u04D9\u0493\u043B\u04AF\u043C\u04D9\u0442\u0442\u04D9\u0440\u0499\u0435 \u044E\u0439\u044B\u0440\u0493\u0430</span></button></p>';
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
