/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'banner': '&#xe900;',
            'calendar-clock': '&#xe901;',
            'camera': '&#xe902;',
            'camera-open': '&#xe903;',
            'caret-circled-down': '&#xe938;',
            'caret-circled-up': '&#xe939;',
            'caret-circled-right': '&#xe93a;',
            'caret-circled-left': '&#xe904;',
            'caret-circled-open-down': '&#xe93b;',
            'caret-circled-open-up': '&#xe93c;',
            'caret-circled-open-right': '&#xe93d;',
            'caret-circled-open-left': '&#xe905;',
            'caret-down': '&#xe906;',
            'caret-up': '&#xe93e;',
            'caret-right': '&#xe93f;',
            'caret-left': '&#xe940;',
            'check': '&#xe907;',
            'check-circle': '&#xe908;',
            'clock': '&#xe909;',
            'close': '&#xe90a;',
            'comment': '&#xe90b;',
            'compass': '&#xe90c;',
            'conversation': '&#xe90d;',
            'conversation-open': '&#xe90e;',
            'diet': '&#xe90f;',
            'document': '&#xe910;',
            'error': '&#xe911;',
            'error-open': '&#xe912;',
            'error-triangle-open': '&#xe913;',
            'facebook': '&#xe914;',
            'feelings': '&#xe915;',
            'fitness': '&#xe916;',
            'gender': '&#xe917;',
            'google': '&#xe918;',
            'hamburger': '&#xe919;',
            'heart-pulse': '&#xe91a;',
            'info': '&#xe91b;',
            'info-open': '&#xe91c;',
            'instagram': '&#xe91d;',
            'insurance': '&#xe91e;',
            'languages': '&#xe91f;',
            'like-heart': '&#xe920;',
            'like-heart-open': '&#xe921;',
            'linkedin': '&#xe922;',
            'location': '&#xe923;',
            'location-open': '&#xe924;',
            'lock': '&#xe925;',
            'notifications': '&#xe926;',
            'notifications-open': '&#xe927;',
            'pinterest': '&#xe928;',
            'play': '&#xe929;',
            'plus-circle': '&#xe92a;',
            'qa-answer': '&#xe92b;',
            'qa-question': '&#xe92c;',
            'realage': '&#xe92d;',
            'search': '&#xe92e;',
            'share': '&#xe92f;',
            'sharecare': '&#xe930;',
            'star': '&#xe931;',
            'star-open': '&#xe932;',
            'tag': '&#xe933;',
            'tag-open': '&#xe934;',
            'twitter': '&#xe935;',
            'user': '&#xe936;',
            'website': '&#xe937;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/font-icon/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
