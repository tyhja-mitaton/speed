/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0), function (a, b, c) {
    function d(c) {
        var d = b.console;
        f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
    }

    function e(b, c, e, f) {
        if (Object.defineProperty) try {
            return void Object.defineProperty(b, c, {
                configurable: !0, enumerable: !0, get: function () {
                    return d(f), e
                }, set: function (a) {
                    d(f), e = a
                }
            })
        } catch (g) {
        }
        a._definePropertyBroken = !0, b[c] = e
    }

    a.migrateVersion = "1.4.1";
    var f = {};
    a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function () {
        f = {}, a.migrateWarnings.length = 0
    }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
    var g = a("<input/>", {size: 1}).attr("size") && a.attrFn, h = a.attr,
        i = a.attrHooks.value && a.attrHooks.value.get || function () {
            return null
        }, j = a.attrHooks.value && a.attrHooks.value.set || function () {
            return c
        }, k = /^(?:input|button)$/i, l = /^[238]$/,
        m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        n = /^(?:checked|selected)$/i;
    e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function (b, e, f, i) {
        var j = e.toLowerCase(), o = b && b.nodeType;
        return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
            get: function (b, d) {
                var e, f = a.prop(b, d);
                return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
            }, set: function (b, c, d) {
                var e;
                return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
            }
        }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
    }, a.attrHooks.value = {
        get: function (a, b) {
            var c = (a.nodeName || "").toLowerCase();
            return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
        }, set: function (a, b) {
            var c = (a.nodeName || "").toLowerCase();
            return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void (a.value = b))
        }
    };
    var o, p, q = a.fn.init, r = a.find, s = a.parseJSON, t = /^\s*</,
        u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
        v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g, w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    a.fn.init = function (b, e, f) {
        var g, h;
        return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
    }, a.fn.init.prototype = a.fn, a.find = function (a) {
        var b = Array.prototype.slice.call(arguments);
        if ("string" == typeof a && u.test(a)) try {
            document.querySelector(a)
        } catch (c) {
            a = a.replace(v, function (a, b, c, d) {
                return "[" + b + c + '"' + d + '"]'
            });
            try {
                document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
            } catch (e) {
                d("Attribute selector with '#' was not fixed: " + b[0])
            }
        }
        return r.apply(this, b)
    };
    var x;
    for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
    a.parseJSON = function (a) {
        return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
    }, a.uaMatch = function (a) {
        a = a.toLowerCase();
        var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
        return {browser: b[1] || "", version: b[2] || "0"}
    }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function () {
        function b(a, c) {
            return new b.fn.init(a, c)
        }

        a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function (d, e) {
            var f = a.fn.init.call(this, d, e, c);
            return f instanceof b ? f : b(f)
        }, b.fn.init.prototype = b.fn;
        var c = b(document);
        return d("jQuery.sub() is deprecated"), b
    }, a.fn.size = function () {
        return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
    };
    var y = !1;
    a.swap && a.each(["height", "width", "reliableMarginRight"], function (b, c) {
        var d = a.cssHooks[c] && a.cssHooks[c].get;
        d && (a.cssHooks[c].get = function () {
            var a;
            return y = !0, a = d.apply(this, arguments), y = !1, a
        })
    }), a.swap = function (a, b, c, e) {
        var f, g, h = {};
        y || d("jQuery.swap() is undocumented and deprecated");
        for (g in b) h[g] = a.style[g], a.style[g] = b[g];
        f = c.apply(a, e || []);
        for (g in b) a.style[g] = h[g];
        return f
    }, a.ajaxSetup({converters: {"text json": a.parseJSON}});
    var z = a.fn.data;
    a.fn.data = function (b) {
        var e, f, g = this[0];
        return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
    };
    var A = /\/(java|ecma)script/i;
    a.clean || (a.clean = function (b, c, e, f) {
        c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
        var g, h, i, j, k = [];
        if (a.merge(k, a.buildFragment(b, c).childNodes), e) for (i = function (a) {
            return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
        }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
        return k
    });
    var B = a.event.add, C = a.event.remove, D = a.event.trigger, E = a.fn.toggle, F = a.fn.live, G = a.fn.die,
        H = a.fn.load, I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
        J = new RegExp("\\b(?:" + I + ")\\b"), K = /(?:^|\s)hover(\.\S+|)\b/, L = function (b) {
            return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
        };
    a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function (a, b, c, e, f) {
        a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
    }, a.event.remove = function (a, b, c, d, e) {
        C.call(this, a, L(b) || "", c, d, e)
    }, a.each(["load", "unload", "error"], function (b, c) {
        a.fn[c] = function () {
            var a = Array.prototype.slice.call(arguments, 0);
            return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
        }
    }), a.fn.toggle = function (b, c) {
        if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
        d("jQuery.fn.toggle(handler, handler...) is deprecated");
        var e = arguments, f = b.guid || a.guid++, g = 0, h = function (c) {
            var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
            return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
        };
        for (h.guid = f; g < e.length;) e[g++].guid = f;
        return this.click(h)
    }, a.fn.live = function (b, c, e) {
        return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
    }, a.fn.die = function (b, c) {
        return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
    }, a.event.trigger = function (a, b, c, e) {
        return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
    }, a.each(I.split("|"), function (b, c) {
        a.event.special[c] = {
            setup: function () {
                var b = this;
                return b !== document && (a.event.add(document, c + "." + a.guid, function () {
                    a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
                }), a._data(this, c, a.guid++)), !1
            }, teardown: function () {
                return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
            }
        }
    }), a.event.special.ready = {
        setup: function () {
            this === document && d("'ready' event is deprecated")
        }
    };
    var M = a.fn.andSelf || a.fn.addBack, N = a.fn.find;
    if (a.fn.andSelf = function () {
        return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
    }, a.fn.find = function (a) {
        var b = N.apply(this, arguments);
        return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
    }, a.Callbacks) {
        var O = a.Deferred,
            P = [["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"], ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"], ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]];
        a.Deferred = function (b) {
            var c = O(), e = c.promise();
            return c.pipe = e.pipe = function () {
                var b = arguments;
                return d("deferred.pipe() is deprecated"), a.Deferred(function (d) {
                    a.each(P, function (f, g) {
                        var h = a.isFunction(b[f]) && b[f];
                        c[g[1]](function () {
                            var b = h && h.apply(this, arguments);
                            b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
                        })
                    }), b = null
                }).promise()
            }, c.isResolved = function () {
                return d("deferred.isResolved is deprecated"), "resolved" === c.state()
            }, c.isRejected = function () {
                return d("deferred.isRejected is deprecated"), "rejected" === c.state()
            }, b && b.call(c, c), c
        }
    }
}(jQuery, window);
/*!
 * Font Awesome Free 5.9.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
var l, a;
l = this, a = function () {
    "use strict";
    var l = {}, a = {};
    try {
        "undefined" != typeof window && (l = window), "undefined" != typeof document && (a = document)
    } catch (l) {
    }
    var e = (l.navigator || {}).userAgent, r = void 0 === e ? "" : e, n = l, o = a,
        u = (n.document, !!o.documentElement && !!o.head && "function" == typeof o.addEventListener && o.createElement, ~r.indexOf("MSIE") || r.indexOf("Trident/"), "___FONT_AWESOME___"),
        f = function () {
            try {
                return "production" === process.env.NODE_ENV
            } catch (l) {
                return !1
            }
        }();
    var t = n || {};
    t[u] || (t[u] = {}), t[u].styles || (t[u].styles = {}), t[u].hooks || (t[u].hooks = {}), t[u].shims || (t[u].shims = []);
    var i = t[u],
        s = [["glass", null, "glass-martini"], ["meetup", "fab", null], ["star-o", "far", "star"], ["remove", null, "times"], ["close", null, "times"], ["gear", null, "cog"], ["trash-o", "far", "trash-alt"], ["file-o", "far", "file"], ["clock-o", "far", "clock"], ["arrow-circle-o-down", "far", "arrow-alt-circle-down"], ["arrow-circle-o-up", "far", "arrow-alt-circle-up"], ["play-circle-o", "far", "play-circle"], ["repeat", null, "redo"], ["rotate-right", null, "redo"], ["refresh", null, "sync"], ["list-alt", "far", null], ["dedent", null, "outdent"], ["video-camera", null, "video"], ["picture-o", "far", "image"], ["photo", "far", "image"], ["image", "far", "image"], ["pencil", null, "pencil-alt"], ["map-marker", null, "map-marker-alt"], ["pencil-square-o", "far", "edit"], ["share-square-o", "far", "share-square"], ["check-square-o", "far", "check-square"], ["arrows", null, "arrows-alt"], ["times-circle-o", "far", "times-circle"], ["check-circle-o", "far", "check-circle"], ["mail-forward", null, "share"], ["eye", "far", null], ["eye-slash", "far", null], ["warning", null, "exclamation-triangle"], ["calendar", null, "calendar-alt"], ["arrows-v", null, "arrows-alt-v"], ["arrows-h", null, "arrows-alt-h"], ["bar-chart", "far", "chart-bar"], ["bar-chart-o", "far", "chart-bar"], ["twitter-square", "fab", null], ["facebook-square", "fab", null], ["gears", null, "cogs"], ["thumbs-o-up", "far", "thumbs-up"], ["thumbs-o-down", "far", "thumbs-down"], ["heart-o", "far", "heart"], ["sign-out", null, "sign-out-alt"], ["linkedin-square", "fab", "linkedin"], ["thumb-tack", null, "thumbtack"], ["external-link", null, "external-link-alt"], ["sign-in", null, "sign-in-alt"], ["github-square", "fab", null], ["lemon-o", "far", "lemon"], ["square-o", "far", "square"], ["bookmark-o", "far", "bookmark"], ["twitter", "fab", null], ["facebook", "fab", "facebook-f"], ["facebook-f", "fab", "facebook-f"], ["github", "fab", null], ["credit-card", "far", null], ["feed", null, "rss"], ["hdd-o", "far", "hdd"], ["hand-o-right", "far", "hand-point-right"], ["hand-o-left", "far", "hand-point-left"], ["hand-o-up", "far", "hand-point-up"], ["hand-o-down", "far", "hand-point-down"], ["arrows-alt", null, "expand-arrows-alt"], ["group", null, "users"], ["chain", null, "link"], ["scissors", null, "cut"], ["files-o", "far", "copy"], ["floppy-o", "far", "save"], ["navicon", null, "bars"], ["reorder", null, "bars"], ["pinterest", "fab", null], ["pinterest-square", "fab", null], ["google-plus-square", "fab", null], ["google-plus", "fab", "google-plus-g"], ["money", "far", "money-bill-alt"], ["unsorted", null, "sort"], ["sort-desc", null, "sort-down"], ["sort-asc", null, "sort-up"], ["linkedin", "fab", "linkedin-in"], ["rotate-left", null, "undo"], ["legal", null, "gavel"], ["tachometer", null, "tachometer-alt"], ["dashboard", null, "tachometer-alt"], ["comment-o", "far", "comment"], ["comments-o", "far", "comments"], ["flash", null, "bolt"], ["clipboard", "far", null], ["paste", "far", "clipboard"], ["lightbulb-o", "far", "lightbulb"], ["exchange", null, "exchange-alt"], ["cloud-download", null, "cloud-download-alt"], ["cloud-upload", null, "cloud-upload-alt"], ["bell-o", "far", "bell"], ["cutlery", null, "utensils"], ["file-text-o", "far", "file-alt"], ["building-o", "far", "building"], ["hospital-o", "far", "hospital"], ["tablet", null, "tablet-alt"], ["mobile", null, "mobile-alt"], ["mobile-phone", null, "mobile-alt"], ["circle-o", "far", "circle"], ["mail-reply", null, "reply"], ["github-alt", "fab", null], ["folder-o", "far", "folder"], ["folder-open-o", "far", "folder-open"], ["smile-o", "far", "smile"], ["frown-o", "far", "frown"], ["meh-o", "far", "meh"], ["keyboard-o", "far", "keyboard"], ["flag-o", "far", "flag"], ["mail-reply-all", null, "reply-all"], ["star-half-o", "far", "star-half"], ["star-half-empty", "far", "star-half"], ["star-half-full", "far", "star-half"], ["code-fork", null, "code-branch"], ["chain-broken", null, "unlink"], ["shield", null, "shield-alt"], ["calendar-o", "far", "calendar"], ["maxcdn", "fab", null], ["html5", "fab", null], ["css3", "fab", null], ["ticket", null, "ticket-alt"], ["minus-square-o", "far", "minus-square"], ["level-up", null, "level-up-alt"], ["level-down", null, "level-down-alt"], ["pencil-square", null, "pen-square"], ["external-link-square", null, "external-link-square-alt"], ["compass", "far", null], ["caret-square-o-down", "far", "caret-square-down"], ["toggle-down", "far", "caret-square-down"], ["caret-square-o-up", "far", "caret-square-up"], ["toggle-up", "far", "caret-square-up"], ["caret-square-o-right", "far", "caret-square-right"], ["toggle-right", "far", "caret-square-right"], ["eur", null, "euro-sign"], ["euro", null, "euro-sign"], ["gbp", null, "pound-sign"], ["usd", null, "dollar-sign"], ["dollar", null, "dollar-sign"], ["inr", null, "rupee-sign"], ["rupee", null, "rupee-sign"], ["jpy", null, "yen-sign"], ["cny", null, "yen-sign"], ["rmb", null, "yen-sign"], ["yen", null, "yen-sign"], ["rub", null, "ruble-sign"], ["ruble", null, "ruble-sign"], ["rouble", null, "ruble-sign"], ["krw", null, "won-sign"], ["won", null, "won-sign"], ["btc", "fab", null], ["bitcoin", "fab", "btc"], ["file-text", null, "file-alt"], ["sort-alpha-asc", null, "sort-alpha-down"], ["sort-alpha-desc", null, "sort-alpha-up"], ["sort-amount-asc", null, "sort-amount-down"], ["sort-amount-desc", null, "sort-amount-up"], ["sort-numeric-asc", null, "sort-numeric-down"], ["sort-numeric-desc", null, "sort-numeric-up"], ["youtube-square", "fab", null], ["youtube", "fab", null], ["xing", "fab", null], ["xing-square", "fab", null], ["youtube-play", "fab", "youtube"], ["dropbox", "fab", null], ["stack-overflow", "fab", null], ["instagram", "fab", null], ["flickr", "fab", null], ["adn", "fab", null], ["bitbucket", "fab", null], ["bitbucket-square", "fab", "bitbucket"], ["tumblr", "fab", null], ["tumblr-square", "fab", null], ["long-arrow-down", null, "long-arrow-alt-down"], ["long-arrow-up", null, "long-arrow-alt-up"], ["long-arrow-left", null, "long-arrow-alt-left"], ["long-arrow-right", null, "long-arrow-alt-right"], ["apple", "fab", null], ["windows", "fab", null], ["android", "fab", null], ["linux", "fab", null], ["dribbble", "fab", null], ["skype", "fab", null], ["foursquare", "fab", null], ["trello", "fab", null], ["gratipay", "fab", null], ["gittip", "fab", "gratipay"], ["sun-o", "far", "sun"], ["moon-o", "far", "moon"], ["vk", "fab", null], ["weibo", "fab", null], ["renren", "fab", null], ["pagelines", "fab", null], ["stack-exchange", "fab", null], ["arrow-circle-o-right", "far", "arrow-alt-circle-right"], ["arrow-circle-o-left", "far", "arrow-alt-circle-left"], ["caret-square-o-left", "far", "caret-square-left"], ["toggle-left", "far", "caret-square-left"], ["dot-circle-o", "far", "dot-circle"], ["vimeo-square", "fab", null], ["try", null, "lira-sign"], ["turkish-lira", null, "lira-sign"], ["plus-square-o", "far", "plus-square"], ["slack", "fab", null], ["wordpress", "fab", null], ["openid", "fab", null], ["institution", null, "university"], ["bank", null, "university"], ["mortar-board", null, "graduation-cap"], ["yahoo", "fab", null], ["google", "fab", null], ["reddit", "fab", null], ["reddit-square", "fab", null], ["stumbleupon-circle", "fab", null], ["stumbleupon", "fab", null], ["delicious", "fab", null], ["digg", "fab", null], ["pied-piper-pp", "fab", null], ["pied-piper-alt", "fab", null], ["drupal", "fab", null], ["joomla", "fab", null], ["spoon", null, "utensil-spoon"], ["behance", "fab", null], ["behance-square", "fab", null], ["steam", "fab", null], ["steam-square", "fab", null], ["automobile", null, "car"], ["cab", null, "taxi"], ["envelope-o", "far", "envelope"], ["deviantart", "fab", null], ["soundcloud", "fab", null], ["file-pdf-o", "far", "file-pdf"], ["file-word-o", "far", "file-word"], ["file-excel-o", "far", "file-excel"], ["file-powerpoint-o", "far", "file-powerpoint"], ["file-image-o", "far", "file-image"], ["file-photo-o", "far", "file-image"], ["file-picture-o", "far", "file-image"], ["file-archive-o", "far", "file-archive"], ["file-zip-o", "far", "file-archive"], ["file-audio-o", "far", "file-audio"], ["file-sound-o", "far", "file-audio"], ["file-video-o", "far", "file-video"], ["file-movie-o", "far", "file-video"], ["file-code-o", "far", "file-code"], ["vine", "fab", null], ["codepen", "fab", null], ["jsfiddle", "fab", null], ["life-ring", "far", null], ["life-bouy", "far", "life-ring"], ["life-buoy", "far", "life-ring"], ["life-saver", "far", "life-ring"], ["support", "far", "life-ring"], ["circle-o-notch", null, "circle-notch"], ["rebel", "fab", null], ["ra", "fab", "rebel"], ["resistance", "fab", "rebel"], ["empire", "fab", null], ["ge", "fab", "empire"], ["git-square", "fab", null], ["git", "fab", null], ["hacker-news", "fab", null], ["y-combinator-square", "fab", "hacker-news"], ["yc-square", "fab", "hacker-news"], ["tencent-weibo", "fab", null], ["qq", "fab", null], ["weixin", "fab", null], ["wechat", "fab", "weixin"], ["send", null, "paper-plane"], ["paper-plane-o", "far", "paper-plane"], ["send-o", "far", "paper-plane"], ["circle-thin", "far", "circle"], ["header", null, "heading"], ["sliders", null, "sliders-h"], ["futbol-o", "far", "futbol"], ["soccer-ball-o", "far", "futbol"], ["slideshare", "fab", null], ["twitch", "fab", null], ["yelp", "fab", null], ["newspaper-o", "far", "newspaper"], ["paypal", "fab", null], ["google-wallet", "fab", null], ["cc-visa", "fab", null], ["cc-mastercard", "fab", null], ["cc-discover", "fab", null], ["cc-amex", "fab", null], ["cc-paypal", "fab", null], ["cc-stripe", "fab", null], ["bell-slash-o", "far", "bell-slash"], ["trash", null, "trash-alt"], ["copyright", "far", null], ["eyedropper", null, "eye-dropper"], ["area-chart", null, "chart-area"], ["pie-chart", null, "chart-pie"], ["line-chart", null, "chart-line"], ["lastfm", "fab", null], ["lastfm-square", "fab", null], ["ioxhost", "fab", null], ["angellist", "fab", null], ["cc", "far", "closed-captioning"], ["ils", null, "shekel-sign"], ["shekel", null, "shekel-sign"], ["sheqel", null, "shekel-sign"], ["meanpath", "fab", "font-awesome"], ["buysellads", "fab", null], ["connectdevelop", "fab", null], ["dashcube", "fab", null], ["forumbee", "fab", null], ["leanpub", "fab", null], ["sellsy", "fab", null], ["shirtsinbulk", "fab", null], ["simplybuilt", "fab", null], ["skyatlas", "fab", null], ["diamond", "far", "gem"], ["intersex", null, "transgender"], ["facebook-official", "fab", "facebook"], ["pinterest-p", "fab", null], ["whatsapp", "fab", null], ["hotel", null, "bed"], ["viacoin", "fab", null], ["medium", "fab", null], ["y-combinator", "fab", null], ["yc", "fab", "y-combinator"], ["optin-monster", "fab", null], ["opencart", "fab", null], ["expeditedssl", "fab", null], ["battery-4", null, "battery-full"], ["battery", null, "battery-full"], ["battery-3", null, "battery-three-quarters"], ["battery-2", null, "battery-half"], ["battery-1", null, "battery-quarter"], ["battery-0", null, "battery-empty"], ["object-group", "far", null], ["object-ungroup", "far", null], ["sticky-note-o", "far", "sticky-note"], ["cc-jcb", "fab", null], ["cc-diners-club", "fab", null], ["clone", "far", null], ["hourglass-o", "far", "hourglass"], ["hourglass-1", null, "hourglass-start"], ["hourglass-2", null, "hourglass-half"], ["hourglass-3", null, "hourglass-end"], ["hand-rock-o", "far", "hand-rock"], ["hand-grab-o", "far", "hand-rock"], ["hand-paper-o", "far", "hand-paper"], ["hand-stop-o", "far", "hand-paper"], ["hand-scissors-o", "far", "hand-scissors"], ["hand-lizard-o", "far", "hand-lizard"], ["hand-spock-o", "far", "hand-spock"], ["hand-pointer-o", "far", "hand-pointer"], ["hand-peace-o", "far", "hand-peace"], ["registered", "far", null], ["creative-commons", "fab", null], ["gg", "fab", null], ["gg-circle", "fab", null], ["tripadvisor", "fab", null], ["odnoklassniki", "fab", null], ["odnoklassniki-square", "fab", null], ["get-pocket", "fab", null], ["wikipedia-w", "fab", null], ["safari", "fab", null], ["chrome", "fab", null], ["firefox", "fab", null], ["opera", "fab", null], ["internet-explorer", "fab", null], ["television", null, "tv"], ["contao", "fab", null], ["500px", "fab", null], ["amazon", "fab", null], ["calendar-plus-o", "far", "calendar-plus"], ["calendar-minus-o", "far", "calendar-minus"], ["calendar-times-o", "far", "calendar-times"], ["calendar-check-o", "far", "calendar-check"], ["map-o", "far", "map"], ["commenting", null, "comment-dots"], ["commenting-o", "far", "comment-dots"], ["houzz", "fab", null], ["vimeo", "fab", "vimeo-v"], ["black-tie", "fab", null], ["fonticons", "fab", null], ["reddit-alien", "fab", null], ["edge", "fab", null], ["credit-card-alt", null, "credit-card"], ["codiepie", "fab", null], ["modx", "fab", null], ["fort-awesome", "fab", null], ["usb", "fab", null], ["product-hunt", "fab", null], ["mixcloud", "fab", null], ["scribd", "fab", null], ["pause-circle-o", "far", "pause-circle"], ["stop-circle-o", "far", "stop-circle"], ["bluetooth", "fab", null], ["bluetooth-b", "fab", null], ["gitlab", "fab", null], ["wpbeginner", "fab", null], ["wpforms", "fab", null], ["envira", "fab", null], ["wheelchair-alt", "fab", "accessible-icon"], ["question-circle-o", "far", "question-circle"], ["volume-control-phone", null, "phone-volume"], ["asl-interpreting", null, "american-sign-language-interpreting"], ["deafness", null, "deaf"], ["hard-of-hearing", null, "deaf"], ["glide", "fab", null], ["glide-g", "fab", null], ["signing", null, "sign-language"], ["viadeo", "fab", null], ["viadeo-square", "fab", null], ["snapchat", "fab", null], ["snapchat-ghost", "fab", null], ["snapchat-square", "fab", null], ["pied-piper", "fab", null], ["first-order", "fab", null], ["yoast", "fab", null], ["themeisle", "fab", null], ["google-plus-official", "fab", "google-plus"], ["google-plus-circle", "fab", "google-plus"], ["font-awesome", "fab", null], ["fa", "fab", "font-awesome"], ["handshake-o", "far", "handshake"], ["envelope-open-o", "far", "envelope-open"], ["linode", "fab", null], ["address-book-o", "far", "address-book"], ["vcard", null, "address-card"], ["address-card-o", "far", "address-card"], ["vcard-o", "far", "address-card"], ["user-circle-o", "far", "user-circle"], ["user-o", "far", "user"], ["id-badge", "far", null], ["drivers-license", null, "id-card"], ["id-card-o", "far", "id-card"], ["drivers-license-o", "far", "id-card"], ["quora", "fab", null], ["free-code-camp", "fab", null], ["telegram", "fab", null], ["thermometer-4", null, "thermometer-full"], ["thermometer", null, "thermometer-full"], ["thermometer-3", null, "thermometer-three-quarters"], ["thermometer-2", null, "thermometer-half"], ["thermometer-1", null, "thermometer-quarter"], ["thermometer-0", null, "thermometer-empty"], ["bathtub", null, "bath"], ["s15", null, "bath"], ["window-maximize", "far", null], ["window-restore", "far", null], ["times-rectangle", null, "window-close"], ["window-close-o", "far", "window-close"], ["times-rectangle-o", "far", "window-close"], ["bandcamp", "fab", null], ["grav", "fab", null], ["etsy", "fab", null], ["imdb", "fab", null], ["ravelry", "fab", null], ["eercast", "fab", "sellcast"], ["snowflake-o", "far", "snowflake"], ["superpowers", "fab", null], ["wpexplorer", "fab", null], ["spotify", "fab", null]];
    return function (l) {
        try {
            l()
        } catch (l) {
            if (!f) throw l
        }
    }(function () {
        var l;
        "function" == typeof i.hooks.addShims ? i.hooks.addShims(s) : (l = i.shims).push.apply(l, s)
    }), s
}, "object" == typeof exports && "undefined" != typeof module ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : l["fontawesome-free-shims"] = a();
(function ($) {
    'use strict';
    if (typeof wpcf7 === 'undefined' || wpcf7 === null) {
        return;
    }
    wpcf7 = $.extend({cached: 0, inputs: []}, wpcf7);
    $(function () {
        wpcf7.supportHtml5 = (function () {
            var features = {};
            var input = document.createElement('input');
            features.placeholder = 'placeholder' in input;
            var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];
            $.each(inputTypes, function (index, value) {
                input.setAttribute('type', value);
                features[value] = input.type !== 'text';
            });
            return features;
        })();
        $('div.wpcf7 > form').each(function () {
            var $form = $(this);
            wpcf7.initForm($form);
            if (wpcf7.cached) {
                wpcf7.refill($form);
            }
        });
    });
    wpcf7.getId = function (form) {
        return parseInt($('input[name="_wpcf7"]', form).val(), 10);
    };
    wpcf7.initForm = function (form) {
        var $form = $(form);
        $form.submit(function (event) {
            if (!wpcf7.supportHtml5.placeholder) {
                $('[placeholder].placeheld', $form).each(function (i, n) {
                    $(n).val('').removeClass('placeheld');
                });
            }
            if (typeof window.FormData === 'function') {
                wpcf7.submit($form);
                event.preventDefault();
            }
        });
        $('.wpcf7-submit', $form).after('<span class="ajax-loader"></span>');
        wpcf7.toggleSubmit($form);
        $form.on('click', '.wpcf7-acceptance', function () {
            wpcf7.toggleSubmit($form);
        });
        $('.wpcf7-exclusive-checkbox', $form).on('click', 'input:checkbox', function () {
            var name = $(this).attr('name');
            $form.find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
        });
        $('.wpcf7-list-item.has-free-text', $form).each(function () {
            var $freetext = $(':input.wpcf7-free-text', this);
            var $wrap = $(this).closest('.wpcf7-form-control');
            if ($(':checkbox, :radio', this).is(':checked')) {
                $freetext.prop('disabled', false);
            } else {
                $freetext.prop('disabled', true);
            }
            $wrap.on('change', ':checkbox, :radio', function () {
                var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');
                if ($cb.is(':checked')) {
                    $freetext.prop('disabled', false).focus();
                } else {
                    $freetext.prop('disabled', true);
                }
            });
        });
        if (!wpcf7.supportHtml5.placeholder) {
            $('[placeholder]', $form).each(function () {
                $(this).val($(this).attr('placeholder'));
                $(this).addClass('placeheld');
                $(this).focus(function () {
                    if ($(this).hasClass('placeheld')) {
                        $(this).val('').removeClass('placeheld');
                    }
                });
                $(this).blur(function () {
                    if ('' === $(this).val()) {
                        $(this).val($(this).attr('placeholder'));
                        $(this).addClass('placeheld');
                    }
                });
            });
        }
        if (wpcf7.jqueryUi && !wpcf7.supportHtml5.date) {
            $form.find('input.wpcf7-date[type="date"]').each(function () {
                $(this).datepicker({
                    dateFormat: 'yy-mm-dd',
                    minDate: new Date($(this).attr('min')),
                    maxDate: new Date($(this).attr('max'))
                });
            });
        }
        if (wpcf7.jqueryUi && !wpcf7.supportHtml5.number) {
            $form.find('input.wpcf7-number[type="number"]').each(function () {
                $(this).spinner({min: $(this).attr('min'), max: $(this).attr('max'), step: $(this).attr('step')});
            });
        }
        $('.wpcf7-character-count', $form).each(function () {
            var $count = $(this);
            var name = $count.attr('data-target-name');
            var down = $count.hasClass('down');
            var starting = parseInt($count.attr('data-starting-value'), 10);
            var maximum = parseInt($count.attr('data-maximum-value'), 10);
            var minimum = parseInt($count.attr('data-minimum-value'), 10);
            var updateCount = function (target) {
                var $target = $(target);
                var length = $target.val().length;
                var count = down ? starting - length : length;
                $count.attr('data-current-value', count);
                $count.text(count);
                if (maximum && maximum < length) {
                    $count.addClass('too-long');
                } else {
                    $count.removeClass('too-long');
                }
                if (minimum && length < minimum) {
                    $count.addClass('too-short');
                } else {
                    $count.removeClass('too-short');
                }
            };
            $(':input[name="' + name + '"]', $form).each(function () {
                updateCount(this);
                $(this).keyup(function () {
                    updateCount(this);
                });
            });
        });
        $form.on('change', '.wpcf7-validates-as-url', function () {
            var val = $.trim($(this).val());
            if (val && !val.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== val.indexOf('.')) {
                val = val.replace(/^\/+/, '');
                val = 'http://' + val;
            }
            $(this).val(val);
        });
    };
    wpcf7.submit = function (form) {
        if (typeof window.FormData !== 'function') {
            return;
        }
        var $form = $(form);
        $('.ajax-loader', $form).addClass('is-active');
        wpcf7.clearResponse($form);
        var formData = new FormData($form.get(0));
        var detail = {id: $form.closest('div.wpcf7').attr('id'), status: 'init', inputs: [], formData: formData};
        $.each($form.serializeArray(), function (i, field) {
            if ('_wpcf7' == field.name) {
                detail.contactFormId = field.value;
            } else if ('_wpcf7_version' == field.name) {
                detail.pluginVersion = field.value;
            } else if ('_wpcf7_locale' == field.name) {
                detail.contactFormLocale = field.value;
            } else if ('_wpcf7_unit_tag' == field.name) {
                detail.unitTag = field.value;
            } else if ('_wpcf7_container_post' == field.name) {
                detail.containerPostId = field.value;
            } else if (field.name.match(/^_wpcf7_\w+_free_text_/)) {
                var owner = field.name.replace(/^_wpcf7_\w+_free_text_/, '');
                detail.inputs.push({name: owner + '-free-text', value: field.value});
            } else if (field.name.match(/^_/)) {
            } else {
                detail.inputs.push(field);
            }
        });
        wpcf7.triggerEvent($form.closest('div.wpcf7'), 'beforesubmit', detail);
        var ajaxSuccess = function (data, status, xhr, $form) {
            detail.id = $(data.into).attr('id');
            detail.status = data.status;
            detail.apiResponse = data;
            var $message = $('.wpcf7-response-output', $form);
            switch (data.status) {
                case'validation_failed':
                    $.each(data.invalidFields, function (i, n) {
                        $(n.into, $form).each(function () {
                            wpcf7.notValidTip(this, n.message);
                            $('.wpcf7-form-control', this).addClass('wpcf7-not-valid');
                            $('[aria-invalid]', this).attr('aria-invalid', 'true');
                        });
                    });
                    $message.addClass('wpcf7-validation-errors');
                    $form.addClass('invalid');
                    wpcf7.triggerEvent(data.into, 'invalid', detail);
                    break;
                case'acceptance_missing':
                    $message.addClass('wpcf7-acceptance-missing');
                    $form.addClass('unaccepted');
                    wpcf7.triggerEvent(data.into, 'unaccepted', detail);
                    break;
                case'spam':
                    $message.addClass('wpcf7-spam-blocked');
                    $form.addClass('spam');
                    wpcf7.triggerEvent(data.into, 'spam', detail);
                    break;
                case'aborted':
                    $message.addClass('wpcf7-aborted');
                    $form.addClass('aborted');
                    wpcf7.triggerEvent(data.into, 'aborted', detail);
                    break;
                case'mail_sent':
                    $message.addClass('wpcf7-mail-sent-ok');
                    $form.addClass('sent');
                    wpcf7.triggerEvent(data.into, 'mailsent', detail);
                    break;
                case'mail_failed':
                    $message.addClass('wpcf7-mail-sent-ng');
                    $form.addClass('failed');
                    wpcf7.triggerEvent(data.into, 'mailfailed', detail);
                    break;
                default:
                    var customStatusClass = 'custom-'
                        + data.status.replace(/[^0-9a-z]+/i, '-');
                    $message.addClass('wpcf7-' + customStatusClass);
                    $form.addClass(customStatusClass);
            }
            wpcf7.refill($form, data);
            wpcf7.triggerEvent(data.into, 'submit', detail);
            if ('mail_sent' == data.status) {
                $form.each(function () {
                    this.reset();
                });
                wpcf7.toggleSubmit($form);
            }
            if (!wpcf7.supportHtml5.placeholder) {
                $form.find('[placeholder].placeheld').each(function (i, n) {
                    $(n).val($(n).attr('placeholder'));
                });
            }
            $message.html('').append(data.message).slideDown('fast');
            $message.attr('role', 'alert');
            $('.screen-reader-response', $form.closest('.wpcf7')).each(function () {
                var $response = $(this);
                $response.html('').attr('role', '').append(data.message);
                if (data.invalidFields) {
                    var $invalids = $('<ul></ul>');
                    $.each(data.invalidFields, function (i, n) {
                        if (n.idref) {
                            var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
                        } else {
                            var $li = $('<li></li>').append(n.message);
                        }
                        $invalids.append($li);
                    });
                    $response.append($invalids);
                }
                $response.attr('role', 'alert').focus();
            });
        };
        $.ajax({
            type: 'POST',
            url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/feedback'),
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false
        }).done(function (data, status, xhr) {
            ajaxSuccess(data, status, xhr, $form);
            $('.ajax-loader', $form).removeClass('is-active');
        }).fail(function (xhr, status, error) {
            var $e = $('<div class="ajax-error"></div>').text(error.message);
            $form.after($e);
        });
    };
    wpcf7.triggerEvent = function (target, name, detail) {
        var $target = $(target);
        var event = new CustomEvent('wpcf7' + name, {bubbles: true, detail: detail});
        $target.get(0).dispatchEvent(event);
        $target.trigger('wpcf7:' + name, detail);
        $target.trigger(name + '.wpcf7', detail);
    };
    wpcf7.toggleSubmit = function (form, state) {
        var $form = $(form);
        var $submit = $('input:submit', $form);
        if (typeof state !== 'undefined') {
            $submit.prop('disabled', !state);
            return;
        }
        if ($form.hasClass('wpcf7-acceptance-as-validation')) {
            return;
        }
        $submit.prop('disabled', false);
        $('.wpcf7-acceptance', $form).each(function () {
            var $span = $(this);
            var $input = $('input:checkbox', $span);
            if (!$span.hasClass('optional')) {
                if ($span.hasClass('invert') && $input.is(':checked') || !$span.hasClass('invert') && !$input.is(':checked')) {
                    $submit.prop('disabled', true);
                    return false;
                }
            }
        });
    };
    wpcf7.notValidTip = function (target, message) {
        var $target = $(target);
        $('.wpcf7-not-valid-tip', $target).remove();
        $('<span role="alert" class="wpcf7-not-valid-tip"></span>').text(message).appendTo($target);
        if ($target.is('.use-floating-validation-tip *')) {
            var fadeOut = function (target) {
                $(target).not(':hidden').animate({opacity: 0}, 'fast', function () {
                    $(this).css({'z-index': -100});
                });
            };
            $target.on('mouseover', '.wpcf7-not-valid-tip', function () {
                fadeOut(this);
            });
            $target.on('focus', ':input', function () {
                fadeOut($('.wpcf7-not-valid-tip', $target));
            });
        }
    };
    wpcf7.refill = function (form, data) {
        var $form = $(form);
        var refillCaptcha = function ($form, items) {
            $.each(items, function (i, n) {
                $form.find(':input[name="' + i + '"]').val('');
                $form.find('img.wpcf7-captcha-' + i).attr('src', n);
                var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
                $form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
            });
        };
        var refillQuiz = function ($form, items) {
            $.each(items, function (i, n) {
                $form.find(':input[name="' + i + '"]').val('');
                $form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
                $form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
            });
        };
        if (typeof data === 'undefined') {
            $.ajax({
                type: 'GET',
                url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/refill'),
                beforeSend: function (xhr) {
                    var nonce = $form.find(':input[name="_wpnonce"]').val();
                    if (nonce) {
                        xhr.setRequestHeader('X-WP-Nonce', nonce);
                    }
                },
                dataType: 'json'
            }).done(function (data, status, xhr) {
                if (data.captcha) {
                    refillCaptcha($form, data.captcha);
                }
                if (data.quiz) {
                    refillQuiz($form, data.quiz);
                }
            });
        } else {
            if (data.captcha) {
                refillCaptcha($form, data.captcha);
            }
            if (data.quiz) {
                refillQuiz($form, data.quiz);
            }
        }
    };
    wpcf7.clearResponse = function (form) {
        var $form = $(form);
        $form.removeClass('invalid spam sent failed');
        $form.siblings('.screen-reader-response').html('').attr('role', '');
        $('.wpcf7-not-valid-tip', $form).remove();
        $('[aria-invalid]', $form).attr('aria-invalid', 'false');
        $('.wpcf7-form-control', $form).removeClass('wpcf7-not-valid');
        $('.wpcf7-response-output', $form).hide().empty().removeAttr('role').removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked');
    };
    wpcf7.apiSettings.getRoute = function (path) {
        var url = wpcf7.apiSettings.root;
        url = url.replace(wpcf7.apiSettings.namespace, wpcf7.apiSettings.namespace + path);
        return url;
    };
})(jQuery);
(function () {
    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
        params = params || {bubbles: false, cancelable: false, detail: undefined};
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
})();
const kavaResponsiveMenu = (options = {}) => {
    const defaults = {
        wrapper: '.main-navigation',
        menu: '.menu',
        threshold: 640,
        mobileMenuClass: 'mobile-menu',
        mobileMenuOpenClass: 'mobile-menu-open',
        mobileMenuToggleButtonClass: 'mobile-menu-toggle-button',
        toggleButtonTemplate: '<i class="mobile-menu-close fa fa-bars" aria-hidden="true"></i><i class="mobile-menu-open fa fa-times" aria-hidden="true"></i>'
    }
    options = Object.assign(defaults, options);
    const wrapper = options.wrapper.nodeType ? options.wrapper : document.querySelector(options.wrapper);
    const menu = options.menu.nodeType ? options.menu : document.querySelector(options.menu);
    let toggleButton, toggleButtonOpenBlock, toggleButtonCloseBlock, isMobileMenu, isMobileMenuOpen;
    const init = [addToggleButton, checkScreenWidth, addResizeHandler]
    if (wrapper && menu) {
        runSeries(init);
    }

    function addToggleButton() {
        toggleButton = document.createElement('button');
        toggleButton.innerHTML = options.toggleButtonTemplate.trim();
        toggleButton.className = options.mobileMenuToggleButtonClass;
        wrapper.insertBefore(toggleButton, wrapper.children[0]);
        toggleButtonOpenBlock = toggleButton.querySelector('.mobile-menu-open');
        toggleButtonCloseBlock = toggleButton.querySelector('.mobile-menu-close');
        toggleButton.addEventListener('click', mobileMenuToggle);
    }

    function switchToMobileMenu() {
        wrapper.classList.add(options.mobileMenuClass);
        toggleButton.style.display = "block";
        isMobileMenuOpen = false;
        hideMenu();
    }

    function switchToDesktopMenu() {
        wrapper.classList.remove(options.mobileMenuClass);
        toggleButton.style.display = "none";
        showMenu();
    }

    function mobileMenuToggle() {
        if (isMobileMenuOpen) {
            hideMenu();
        } else {
            showMenu();
        }
        isMobileMenuOpen = !isMobileMenuOpen;
    }

    function hideMenu() {
        wrapper.classList.remove(options.mobileMenuOpenClass);
        menu.style.display = "none";
        toggleButtonOpenBlock.style.display = "none";
        toggleButtonCloseBlock.style.display = "block";
    }

    function showMenu() {
        wrapper.classList.add(options.mobileMenuOpenClass);
        menu.style.display = "block";
        toggleButtonOpenBlock.style.display = "block";
        toggleButtonCloseBlock.style.display = "none";
    }

    function checkScreenWidth() {
        let currentMobileMenuStatus = window.innerWidth < options.threshold ? true : false;
        if (isMobileMenu !== currentMobileMenuStatus) {
            isMobileMenu = currentMobileMenuStatus;
            isMobileMenu ? switchToMobileMenu() : switchToDesktopMenu();
        }
    }

    function addResizeHandler() {
        window.addEventListener('resize', resizeHandler);
    }

    function resizeHandler() {
        window.requestAnimationFrame(checkScreenWidth)
    }

    function runSeries(functions) {
        functions.forEach(func => func());
    }
};
!function (n) {
    n.fn.UItoTop = function (o) {
        var e = {
            text: "To Top",
            min: 200,
            inDelay: 600,
            outDelay: 400,
            containerID: "toTop",
            containerHoverID: "toTopHover",
            scrollSpeed: 1200,
            easingType: "linear"
        }, t = n.extend(e, o), i = "#" + t.containerID, a = "#" + t.containerHoverID;
        n("body").append('<a href="#" id="' + t.containerID + '"><span>' + t.text + "</span></a>"), n(i).hide().on("click.UItoTop", function () {
            return n("html, body").animate({scrollTop: 0}, t.scrollSpeed, t.easingType), n("#" + t.containerHoverID, this).stop().animate({opacity: 0}, t.inDelay, t.easingType), !1
        }).hover(function () {
            n(a, this).stop().animate({opacity: 1}, 600, "linear")
        }, function () {
            n(a, this).stop().animate({opacity: 0}, 700, "linear")
        }), n(window).scroll(function () {
            var o = n(window).scrollTop();
            "undefined" == typeof document.body.style.maxHeight && n(i).css({
                position: "absolute",
                top: o + n(window).height() - 50
            }), o > t.min ? n(i).fadeIn(t.inDelay) : n(i).fadeOut(t.Outdelay)
        })
    }
}(jQuery);
;var Kava_Theme_JS;
(function ($) {
    'use strict';
    Kava_Theme_JS = {
        init: function () {
            this.page_preloader_init();
            this.toTopInit();
            this.responsiveMenuInit();
            this.magnificPopupInit();
            this.swiperInit();
        }, page_preloader_init: function (self) {
            if ($('.page-preloader-cover')[0]) {
                $('.page-preloader-cover').delay(500).fadeTo(500, 0, function () {
                    $(this).remove();
                });
            }
        }, toTopInit: function () {
            if ($.isFunction(jQuery.fn.UItoTop)) {
                $().UItoTop({text: '', scrollSpeed: 600});
            }
        }, responsiveMenuInit: function () {
            if (typeof kavaResponsiveMenu !== 'undefined') {
                kavaResponsiveMenu();
            }
        }, magnificPopupInit: function () {
            if (typeof $.magnificPopup !== 'undefined') {
                $('[data-popup="magnificPopup"]').magnificPopup({type: 'image'});
                $(".gallery > .gallery-item a").filter("[href$='.png'],[href$='.jpg']").magnificPopup({
                    type: 'image',
                    gallery: {enabled: true, navigateByImgClick: true,},
                });
            }
        }, swiperInit: function () {
            if (typeof Swiper !== 'undefined') {
                var mySwiper = new Swiper('.swiper-container', {
                    loop: true,
                    spaceBetween: 10,
                    autoHeight: true,
                    navigation: {nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}
                })
            }
        }
    };
    Kava_Theme_JS.init();
}(jQuery));

!function (m, y, e, o) {
    var p = "lazyLoadXT", w = "lazied", z = "load error", t = "lazy-hidden", C = e.documentElement || e.body, b = {
            autoInit: !0,
            selector: "img[data-src]",
            blankImage: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            throttle: 99,
            forceLoad: y.onscroll === o || !!y.operamini || !C.getBoundingClientRect,
            loadEvent: "pageshow",
            updateEvent: "load orientationchange resize scroll touchmove focus",
            forceEvent: "lazyloadall",
            oninit: {removeClass: "lazy"},
            onshow: {addClass: t},
            onload: {removeClass: t, addClass: "lazy-loaded"},
            onerror: {removeClass: t},
            checkDuplicates: !0
        }, n = {srcAttr: "data-src", edgeX: 0, edgeY: 0, visibleOnly: !0}, a = m(y), E = m.isFunction, d = m.extend,
        T = m.data || function (e, t) {
            return m(e).data(t)
        }, L = [], I = 0, r = 0;

    function c(e, t) {
        return e[t] === o ? b[t] : e[t]
    }

    function X() {
        var e = y.pageYOffset;
        return e === o ? C.scrollTop : e
    }

    function B(e, t) {
        var o = b["on" + e];
        o && (E(o) ? o.call(t[0]) : (o.addClass && t.addClass(o.addClass), o.removeClass && t.removeClass(o.removeClass))), t.trigger("lazy" + e, [t]), u()
    }

    function k(e) {
        B(e.type, m(this).off(z, k))
    }

    function i(e) {
        if (L.length) {
            e = e || b.forceLoad, I = 1 / 0;
            var t, o, n = X(), a = y.innerHeight || C.clientHeight, r = y.innerWidth || C.clientWidth;
            for (t = 0, o = L.length; t < o; t++) {
                var i, s = L[t], l = s[0], d = s[p], c = !1, u = e || T(l, w) < 0;
                if (m.contains(C, l)) {
                    if (e || !d.visibleOnly || l.offsetWidth || l.offsetHeight) {
                        if (!u) {
                            var f = l.getBoundingClientRect(), h = d.edgeX, v = d.edgeY;
                            u = (i = f.top + n - v - a) <= n && f.bottom > -v && f.left <= r + h && f.right > -h
                        }
                        if (u) {
                            s.on(z, k), B("show", s);
                            var A = d.srcAttr, g = E(A) ? A(s) : l.getAttribute(A);
                            g && (l.src = g), c = !0
                        } else i < I && (I = i)
                    }
                } else c = !0;
                c && (L.splice(t--, 1), o--)
            }
            o || B("complete", m(C))
        }
    }

    function s() {
        1 < r ? (r = 1, i(), setTimeout(s, b.throttle)) : r = 0
    }

    function u(e) {
        L.length && (e && "scroll" === e.type && e.currentTarget === y && I >= X() || (r || setTimeout(s, 0), r = 2))
    }

    function l() {
        a.lazyLoadXT()
    }

    function f() {
        i(!0)
    }

    m[p] = d(b, n, m[p]), m.fn[p] = function (a) {
        var e, r = c(a = a || {}, "blankImage"), i = c(a, "checkDuplicates"), t = c(a, "scrollContainer"),
            s = c(a, "show"), l = {};
        for (e in m(t).on("scroll", u), n) l[e] = c(a, e);
        return this.each(function (e, t) {
            if (t === y) m(b.selector).lazyLoadXT(a); else {
                var o = i && T(t, w), n = m(t).data(w, s ? -1 : 1);
                if (o) return void u();
                r && "IMG" === t.tagName && !t.src && (t.src = r), n[p] = d({}, l), B("init", n), L.push(n), u()
            }
        })
    }, m(e).ready(function () {
        B("start", a), a.on(b.updateEvent, u).on(b.forceEvent, f), m(e).on(b.updateEvent, u), b.autoInit && (a.on(b.loadEvent, l), l())
    })
}(window.jQuery || window.Zepto || window.$, window, document), function (s) {
    var o = s.lazyLoadXT;
    o.selector += ",video,iframe[data-src],embed[data-src]", o.videoPoster = "data-poster", s(document).on("lazyshow", "video", function (e, t) {
        var a = t.lazyLoadXT.srcAttr, r = s.isFunction(a), i = !1;
        t.attr("poster", t.attr(o.videoPoster)), t.children("source,track").each(function (e, t) {
            var o = s(t), n = r ? a(o) : o.attr(a);
            n && (o.attr("src", n), i = !0)
        }), i && void 0 !== s(this).attr("preload") && "none" != s(this).attr("preload") && this.load(), s(this).removeClass("lazy-hidden")
    }), s(document).on("lazyshow", "embed", function (e, t) {
        s(this).removeClass("lazy-hidden")
    })
}(window.jQuery || window.Zepto || window.$);

!function (c, i, o, t) {
    var d, u, l = c.lazyLoadXT, n = "srcset" in new Image, x = /^\s*(\S*)/, w = /\S\s+(\d+)w/, f = /\S\s+(\d+)h/,
        h = /\S\s+([\d\.]+)x/, p = [0, 1 / 0], m = [0, 1], e = {
            srcsetAttr: "data-srcset",
            srcsetExtended: !0,
            srcsetBaseAttr: "data-srcset-base",
            srcsetExtAttr: "data-srcset-ext"
        }, g = {w: 0, h: 0, x: 0};
    for (d in e) void 0 === l[d] && (l[d] = e[d]);

    function A(t, e) {
        return Math[e].apply(null, c.map(t, function (t) {
            return t[d]
        }))
    }

    function v(t) {
        return t[d] >= g[d] || t[d] === u
    }

    function E(t) {
        return t[d] === u
    }

    function s(t) {
        var e = t.attr(l.srcsetAttr);
        if (!e) return !1;
        var r = c.map(e.replace(/(\s[\d.]+[whx]),/g, "$1 @,@ ").split(" @,@ "), function (t) {
            return {
                url: x.exec(t)[1],
                w: parseFloat((w.exec(t) || p)[1]),
                h: parseFloat((f.exec(t) || p)[1]),
                x: parseFloat((h.exec(t) || m)[1])
            }
        });
        if (!r.length) return !1;
        var n, s, a = o.documentElement;
        for (n in g = {
            w: i.innerWidth || a.clientWidth,
            h: i.innerHeight || a.clientHeight,
            x: i.devicePixelRatio || 1
        }) d = n, u = A(r, "max"), r = c.grep(r, v);
        for (n in g) d = n, u = A(r, "min"), r = c.grep(r, E);
        return s = r[0].url, l.srcsetExtended && (s = (t.attr(l.srcsetBaseAttr) || "") + s + (t.attr(l.srcsetExtAttr) || "")), s
    }

    l.selector += ",img[" + l.srcsetAttr + "]", c(o).on("lazyshow", "img", function (t, e) {
        var r = e.attr(l.srcsetAttr);
        r && (!l.srcsetExtended && n ? (e.attr("srcset", r), e.attr("data-srcset", "")) : e.lazyLoadXT.srcAttr = s)
    })
}(window.jQuery || window.Zepto || window.$, window, document);
jQuery.lazyLoadXT.updateEvent = 'load orientationchange resize scroll touchmove focus click customlazyloadxtevent';
jQuery.lazyLoadXT.edgeY = a3_lazyload_extend_params.edgeY;
jQuery.lazyLoadXT.srcsetExtended = false;
jQuery(document).ready(function ($) {
    jQuery(document).on('mouseenter', '.site-header-cart', function () {
        jQuery(document).trigger('customlazyloadxtevent');
    });
    jQuery(document).on('mouseenter', '.widget_shopping_cart', function () {
        jQuery(document).trigger('customlazyloadxtevent');
    });
    jQuery(document).on('mouseover', '#wp-admin-bar-top-secondary', function () {
        jQuery(document).trigger('customlazyloadxtevent');
    });
});
jQuery(window).on('ajaxComplete', function () {
    setTimeout(function () {
        jQuery(window).lazyLoadXT();
    }, 1000);
});
!function (a, b) {
    "use strict";

    function c() {
        if (!e) {
            e = !0;
            var a, c, d, f, g = -1 !== navigator.appVersion.indexOf("MSIE 10"),
                h = !!navigator.userAgent.match(/Trident.*rv:11\./),
                i = b.querySelectorAll("iframe.wp-embedded-content");
            for (c = 0; c < i.length; c++) {
                if (d = i[c], !d.getAttribute("data-secret")) f = Math.random().toString(36).substr(2, 10), d.src += "#?secret=" + f, d.setAttribute("data-secret", f);
                if (g || h) a = d.cloneNode(!0), a.removeAttribute("security"), d.parentNode.replaceChild(a, d)
            }
        }
    }

    var d = !1, e = !1;
    if (b.querySelector) if (a.addEventListener) d = !0;
    if (a.wp = a.wp || {}, !a.wp.receiveEmbedMessage) if (a.wp.receiveEmbedMessage = function (c) {
        var d = c.data;
        if (d) if (d.secret || d.message || d.value) if (!/[^a-zA-Z0-9]/.test(d.secret)) {
            var e, f, g, h, i, j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'),
                k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
            for (e = 0; e < k.length; e++) k[e].style.display = "none";
            for (e = 0; e < j.length; e++) if (f = j[e], c.source === f.contentWindow) {
                if (f.removeAttribute("style"), "height" === d.message) {
                    if (g = parseInt(d.value, 10), g > 1e3) g = 1e3; else if (~~g < 200) g = 200;
                    f.height = g
                }
                if ("link" === d.message) if (h = b.createElement("a"), i = b.createElement("a"), h.href = f.getAttribute("src"), i.href = d.value, i.host === h.host) if (b.activeElement === f) a.top.location.href = d.value
            } else ;
        }
    }, d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1)
}(window, document);
!function (a) {
    a.fn.hoverIntent = function (b, c, d) {
        var e = {interval: 100, sensitivity: 6, timeout: 0};
        e = "object" == typeof b ? a.extend(e, b) : a.isFunction(c) ? a.extend(e, {
            over: b,
            out: c,
            selector: d
        }) : a.extend(e, {over: b, out: b, selector: c});
        var f, g, h, i, j = function (a) {
            f = a.pageX, g = a.pageY
        }, k = function (b, c) {
            return c.hoverIntent_t = clearTimeout(c.hoverIntent_t), Math.sqrt((h - f) * (h - f) + (i - g) * (i - g)) < e.sensitivity ? (a(c).off("mousemove.hoverIntent", j), c.hoverIntent_s = !0, e.over.apply(c, [b])) : (h = f, i = g, c.hoverIntent_t = setTimeout(function () {
                k(b, c)
            }, e.interval), void 0)
        }, l = function (a, b) {
            return b.hoverIntent_t = clearTimeout(b.hoverIntent_t), b.hoverIntent_s = !1, e.out.apply(b, [a])
        }, m = function (b) {
            var c = a.extend({}, b), d = this;
            d.hoverIntent_t && (d.hoverIntent_t = clearTimeout(d.hoverIntent_t)), "mouseenter" === b.type ? (h = c.pageX, i = c.pageY, a(d).on("mousemove.hoverIntent", j), d.hoverIntent_s || (d.hoverIntent_t = setTimeout(function () {
                k(c, d)
            }, e.interval))) : (a(d).off("mousemove.hoverIntent", j), d.hoverIntent_s && (d.hoverIntent_t = setTimeout(function () {
                l(c, d)
            }, e.timeout)))
        };
        return this.on({"mouseenter.hoverIntent": m, "mouseleave.hoverIntent": m}, e.selector)
    }
}(jQuery);
/*!
 * imagesLoaded PACKAGED v3.2.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function () {
    "use strict";

    function e() {
    }

    function t(e, t) {
        for (var n = e.length; n--;) if (e[n].listener === t) return n;
        return -1
    }

    function n(e) {
        return function () {
            return this[e].apply(this, arguments)
        }
    }

    var i = e.prototype, r = this, s = r.EventEmitter;
    i.getListeners = function (e) {
        var t, n, i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
        } else t = i[e] || (i[e] = []);
        return t
    }, i.flattenListeners = function (e) {
        var t, n = [];
        for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
        return n
    }, i.getListenersAsObject = function (e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, i.addListener = function (e, n) {
        var i, r = this.getListenersAsObject(e), s = "object" == typeof n;
        for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(s ? n : {listener: n, once: !1});
        return this
    }, i.on = n("addListener"), i.addOnceListener = function (e, t) {
        return this.addListener(e, {listener: t, once: !0})
    }, i.once = n("addOnceListener"), i.defineEvent = function (e) {
        return this.getListeners(e), this
    }, i.defineEvents = function (e) {
        for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
        return this
    }, i.removeListener = function (e, n) {
        var i, r, s = this.getListenersAsObject(e);
        for (r in s) s.hasOwnProperty(r) && (i = t(s[r], n), -1 !== i && s[r].splice(i, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function (e, t) {
        return this.manipulateListeners(!1, e, t)
    }, i.removeListeners = function (e, t) {
        return this.manipulateListeners(!0, e, t)
    }, i.manipulateListeners = function (e, t, n) {
        var i, r, s = e ? this.removeListener : this.addListener, o = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp) for (i = n.length; i--;) s.call(this, t, n[i]); else for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? s.call(this, i, r) : o.call(this, i, r));
        return this
    }, i.removeEvent = function (e) {
        var t, n = typeof e, i = this._getEvents();
        if ("string" === n) delete i[e]; else if ("object" === n) for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t]; else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function (e, t) {
        var n, i, r, s, o = this.getListenersAsObject(e);
        for (r in o) if (o.hasOwnProperty(r)) for (i = o[r].length; i--;) n = o[r][i], n.once === !0 && this.removeListener(e, n.listener), s = n.listener.apply(this, t || []), s === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function (e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, i.setOnceReturnValue = function (e) {
        return this._onceReturnValue = e, this
    }, i._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function () {
        return this._events || (this._events = {})
    }, e.noConflict = function () {
        return r.EventEmitter = s, e
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this), function (e) {
    function t(t) {
        var n = e.event;
        return n.target = n.target || n.srcElement || t, n
    }

    var n = document.documentElement, i = function () {
    };
    n.addEventListener ? i = function (e, t, n) {
        e.addEventListener(t, n, !1)
    } : n.attachEvent && (i = function (e, n, i) {
        e[n + i] = i.handleEvent ? function () {
            var n = t(e);
            i.handleEvent.call(i, n)
        } : function () {
            var n = t(e);
            i.call(e, n)
        }, e.attachEvent("on" + n, e[n + i])
    });
    var r = function () {
    };
    n.removeEventListener ? r = function (e, t, n) {
        e.removeEventListener(t, n, !1)
    } : n.detachEvent && (r = function (e, t, n) {
        e.detachEvent("on" + t, e[t + n]);
        try {
            delete e[t + n]
        } catch (i) {
            e[t + n] = void 0
        }
    });
    var s = {bind: i, unbind: r};
    "function" == typeof define && define.amd ? define("eventie/eventie", s) : e.eventie = s
}(this), function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (n, i) {
        return t(e, n, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
}(window, function (e, t, n) {
    function i(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function r(e) {
        return "[object Array]" == f.call(e)
    }

    function s(e) {
        var t = [];
        if (r(e)) t = e; else if ("number" == typeof e.length) for (var n = 0; n < e.length; n++) t.push(e[n]); else t.push(e);
        return t
    }

    function o(e, t, n) {
        if (!(this instanceof o)) return new o(e, t, n);
        "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = s(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), u && (this.jqDeferred = new u.Deferred);
        var r = this;
        setTimeout(function () {
            r.check()
        })
    }

    function h(e) {
        this.img = e
    }

    function a(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }

    var u = e.jQuery, c = e.console, f = Object.prototype.toString;
    o.prototype = new t, o.prototype.options = {}, o.prototype.getImages = function () {
        this.images = [];
        for (var e = 0; e < this.elements.length; e++) {
            var t = this.elements[e];
            this.addElementImages(t)
        }
    }, o.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && d[t]) {
            for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
                var r = n[i];
                this.addImage(r)
            }
            if ("string" == typeof this.options.background) {
                var s = e.querySelectorAll(this.options.background);
                for (i = 0; i < s.length; i++) {
                    var o = s[i];
                    this.addElementBackgroundImages(o)
                }
            }
        }
    };
    var d = {1: !0, 9: !0, 11: !0};
    o.prototype.addElementBackgroundImages = function (e) {
        for (var t = m(e), n = /url\(['"]*([^'"\)]+)['"]*\)/gi, i = n.exec(t.backgroundImage); null !== i;) {
            var r = i && i[1];
            r && this.addBackground(r, e), i = n.exec(t.backgroundImage)
        }
    };
    var m = e.getComputedStyle || function (e) {
        return e.currentStyle
    };
    return o.prototype.addImage = function (e) {
        var t = new h(e);
        this.images.push(t)
    }, o.prototype.addBackground = function (e, t) {
        var n = new a(e, t);
        this.images.push(n)
    }, o.prototype.check = function () {
        function e(e, n, i) {
            setTimeout(function () {
                t.progress(e, n, i)
            })
        }

        var t = this;
        if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
        for (var n = 0; n < this.images.length; n++) {
            var i = this.images[n];
            i.once("progress", e), i.check()
        }
    }, o.prototype.progress = function (e, t, n) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emit("progress", this, e, t), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && c && c.log("progress: " + n, e, t)
    }, o.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emit(e, this), this.emit("always", this), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, h.prototype = new t, h.prototype.check = function () {
        var e = this.getIsImageComplete();
        return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, n.bind(this.proxyImage, "load", this), n.bind(this.proxyImage, "error", this), n.bind(this.img, "load", this), n.bind(this.img, "error", this), void (this.proxyImage.src = this.img.src))
    }, h.prototype.getIsImageComplete = function () {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }, h.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emit("progress", this, this.img, t)
    }, h.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, h.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, h.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, h.prototype.unbindEvents = function () {
        n.unbind(this.proxyImage, "load", this), n.unbind(this.proxyImage, "error", this), n.unbind(this.img, "load", this), n.unbind(this.img, "error", this)
    }, a.prototype = new h, a.prototype.check = function () {
        n.bind(this.img, "load", this), n.bind(this.img, "error", this), this.img.src = this.url;
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, a.prototype.unbindEvents = function () {
        n.unbind(this.img, "load", this), n.unbind(this.img, "error", this)
    }, a.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emit("progress", this, this.element, t)
    }, o.makeJQueryPlugin = function (t) {
        t = t || e.jQuery, t && (u = t, u.fn.imagesLoaded = function (e, t) {
            var n = new o(this, e, t);
            return n.jqDeferred.promise(u(this))
        })
    }, o.makeJQueryPlugin(), o
});
/*!
*  - v1.4.0
* Homepage: http://bqworks.com/slider-pro/
* Author: bqworks
* Author URL: http://bqworks.com/
*/
!function (a, b) {
    "use strict";
    b.SliderPro = {
        modules: [], addModule: function (a, c) {
            this.modules.push(a), b.extend(d.prototype, c)
        }
    };
    var c = b.SliderPro.namespace = "SliderPro", d = function (a, c) {
        this.instance = a, this.$slider = b(this.instance), this.$slides = null, this.$slidesMask = null, this.$slidesContainer = null, this.slides = [], this.slidesOrder = [], this.options = c, this.settings = {}, this.originalSettings = {}, this.originalGotoSlide = null, this.selectedSlideIndex = 0, this.previousSlideIndex = 0, this.middleSlidePosition = 0, this.supportedAnimation = null, this.vendorPrefix = null, this.transitionEvent = null, this.positionProperty = null, this.sizeProperty = null, this.isIE = null, this.slidesPosition = 0, this.slidesSize = 0, this.averageSlideSize = 0, this.slideWidth = 0, this.slideHeight = 0, this.previousSlideWidth = 0, this.previousSlideHeight = 0, this.previousWindowWidth = 0, this.previousWindowHeight = 0, this.allowResize = !0, this.uniqueId = (new Date).valueOf(), this.breakpoints = [], this.currentBreakpoint = -1, this.shuffledIndexes = [], this._init()
    };
    d.prototype = {
        _init: function () {
            var d = this;
            this.supportedAnimation = f.getSupportedAnimation(), this.vendorPrefix = f.getVendorPrefix(), this.transitionEvent = f.getTransitionEvent(), this.isIE = f.checkIE(), this.$slider.removeClass("sp-no-js"), a.navigator.userAgent.match(/(iPad|iPhone|iPod)/g) && this.$slider.addClass("ios");
            var e = /(msie) ([\w.]+)/, g = e.exec(a.navigator.userAgent.toLowerCase());
            this.isIE && this.$slider.addClass("ie"), null !== g && this.$slider.addClass("ie" + parseInt(g[2], 10)), this.$slidesContainer = b('<div class="sp-slides-container"></div>').appendTo(this.$slider), this.$slidesMask = b('<div class="sp-mask"></div>').appendTo(this.$slidesContainer), this.$slides = this.$slider.find(".sp-slides").appendTo(this.$slidesMask), this.$slider.find(".sp-slide").appendTo(this.$slides);
            var h = b.SliderPro.modules;
            if ("undefined" != typeof h) for (var i = 0; i < h.length; i++) {
                var j = h[i].substring(0, 1).toLowerCase() + h[i].substring(1) + "Defaults";
                "undefined" != typeof this[j] && b.extend(this.defaults, this[j])
            }
            if (this.settings = b.extend({}, this.defaults, this.options), "undefined" != typeof h) for (var k = 0; k < h.length; k++) "undefined" != typeof this["init" + h[k]] && this["init" + h[k]]();
            if (this.originalSettings = b.extend({}, this.settings), this.originalGotoSlide = this.gotoSlide, null !== this.settings.breakpoints) {
                for (var l in this.settings.breakpoints) this.breakpoints.push({
                    size: parseInt(l, 10),
                    properties: this.settings.breakpoints[l]
                });
                this.breakpoints = this.breakpoints.sort(function (a, b) {
                    return a.size >= b.size ? 1 : -1
                })
            }
            if (this.selectedSlideIndex = this.settings.startSlide, this.settings.shuffle === !0) {
                var m = this.$slides.find(".sp-slide"), n = [];
                m.each(function (a) {
                    d.shuffledIndexes.push(a)
                });
                for (var o = this.shuffledIndexes.length - 1; o > 0; o--) {
                    var p = Math.floor(Math.random() * (o + 1)), q = this.shuffledIndexes[o];
                    this.shuffledIndexes[o] = this.shuffledIndexes[p], this.shuffledIndexes[p] = q
                }
                b.each(this.shuffledIndexes, function (a, b) {
                    n.push(m[b])
                }), this.$slides.empty().append(n)
            }
            b(a).on("resize." + this.uniqueId + "." + c, function () {
                var c = b(a).width(), e = b(a).height();
                d.allowResize === !1 || d.previousWindowWidth === c && d.previousWindowHeight === e || (d.previousWindowWidth = c, d.previousWindowHeight = e, d.allowResize = !1, setTimeout(function () {
                    d.resize(), d.allowResize = !0
                }, 200))
            }), this.on("update." + c, function () {
                d.previousSlideWidth = 0, d.resize()
            }), this.update(), this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).addClass("sp-selected"), this.trigger({type: "init"}), b.isFunction(this.settings.init) && this.settings.init.call(this, {type: "init"})
        },
        update: function () {
            var a = this;
            "horizontal" === this.settings.orientation ? (this.$slider.removeClass("sp-vertical").addClass("sp-horizontal"), this.$slider.css({
                height: "",
                "max-height": ""
            }), this.$slides.find(".sp-slide").css("top", "")) : "vertical" === this.settings.orientation && (this.$slider.removeClass("sp-horizontal").addClass("sp-vertical"), this.$slides.find(".sp-slide").css("left", "")), this.settings.rightToLeft === !0 ? this.$slider.addClass("sp-rtl") : this.$slider.removeClass("sp-rtl"), this.positionProperty = "horizontal" === this.settings.orientation ? "left" : "top", this.sizeProperty = "horizontal" === this.settings.orientation ? "width" : "height", this.gotoSlide = this.originalGotoSlide;
            for (var d = this.slides.length - 1; d >= 0; d--) if (0 === this.$slider.find('.sp-slide[data-index="' + d + '"]').length) {
                var e = this.slides[d];
                e.off("imagesLoaded." + c), e.destroy(), this.slides.splice(d, 1)
            }
            this.slidesOrder.length = 0, this.$slider.find(".sp-slide").each(function (c) {
                var d = b(this);
                "undefined" == typeof d.attr("data-init") ? a._createSlide(c, d) : a.slides[c].setIndex(c), a.slidesOrder.push(c)
            }), this.middleSlidePosition = parseInt((a.slidesOrder.length - 1) / 2, 10), this.settings.loop === !0 && this._updateSlidesOrder(), this.trigger({type: "update"}), b.isFunction(this.settings.update) && this.settings.update.call(this, {type: "update"})
        },
        _createSlide: function (a, d) {
            var f = this, g = new e(b(d), a, this.settings);
            this.slides.splice(a, 0, g), g.on("imagesLoaded." + c, function (a) {
                f.settings.autoSlideSize === !0 && (f.$slides.hasClass("sp-animated") === !1 && f._resetSlidesPosition(), f._calculateSlidesSize()), f.settings.autoHeight === !0 && a.index === f.selectedSlideIndex && f._resizeHeightTo(g.getSize().height)
            })
        },
        _updateSlidesOrder: function () {
            var a, c, d = b.inArray(this.selectedSlideIndex, this.slidesOrder) - this.middleSlidePosition;
            if (0 > d) for (a = this.slidesOrder.splice(d, Math.abs(d)), c = a.length - 1; c >= 0; c--) this.slidesOrder.unshift(a[c]); else if (d > 0) for (a = this.slidesOrder.splice(0, d), c = 0; c <= a.length - 1; c++) this.slidesOrder.push(a[c])
        },
        _updateSlidesPosition: function () {
            var a, b, c, d, e,
                f = parseInt(this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).css(this.positionProperty), 10),
                g = f;
            if (this.settings.autoSlideSize === !0) if (this.settings.rightToLeft === !0 && "horizontal" === this.settings.orientation) {
                for (c = this.middleSlidePosition; c >= 0; c--) a = this.getSlideAt(this.slidesOrder[c]), b = a.$slide, b.css(this.positionProperty, g), g = parseInt(b.css(this.positionProperty), 10) + a.getSize()[this.sizeProperty] + this.settings.slideDistance;
                for (g = f, c = this.middleSlidePosition + 1; c < this.slidesOrder.length; c++) a = this.getSlideAt(this.slidesOrder[c]), b = a.$slide, b.css(this.positionProperty, g - (a.getSize()[this.sizeProperty] + this.settings.slideDistance)), g = parseInt(b.css(this.positionProperty), 10)
            } else {
                for (c = this.middleSlidePosition - 1; c >= 0; c--) a = this.getSlideAt(this.slidesOrder[c]), b = a.$slide, b.css(this.positionProperty, g - (a.getSize()[this.sizeProperty] + this.settings.slideDistance)), g = parseInt(b.css(this.positionProperty), 10);
                for (g = f, c = this.middleSlidePosition; c < this.slidesOrder.length; c++) a = this.getSlideAt(this.slidesOrder[c]), b = a.$slide, b.css(this.positionProperty, g), g = parseInt(b.css(this.positionProperty), 10) + a.getSize()[this.sizeProperty] + this.settings.slideDistance
            } else for (d = this.settings.rightToLeft === !0 && "horizontal" === this.settings.orientation ? -1 : 1, e = "horizontal" === this.settings.orientation ? this.slideWidth : this.slideHeight, c = 0; c < this.slidesOrder.length; c++) b = this.$slides.find(".sp-slide").eq(this.slidesOrder[c]), b.css(this.positionProperty, f + d * (c - this.middleSlidePosition) * (e + this.settings.slideDistance))
        },
        _resetSlidesPosition: function () {
            var a, b, c, d, e, f, g = 0;
            if (this.settings.autoSlideSize === !0) {
                if (this.settings.rightToLeft === !0 && "horizontal" === this.settings.orientation) for (c = 0; c < this.slidesOrder.length; c++) a = this.getSlideAt(this.slidesOrder[c]), b = a.$slide, b.css(this.positionProperty, g - (a.getSize()[this.sizeProperty] + this.settings.slideDistance)), g = parseInt(b.css(this.positionProperty), 10); else for (c = 0; c < this.slidesOrder.length; c++) a = this.getSlideAt(this.slidesOrder[c]), b = a.$slide, b.css(this.positionProperty, g), g = parseInt(b.css(this.positionProperty), 10) + a.getSize()[this.sizeProperty] + this.settings.slideDistance;
                d = this.getSlideAt(this.selectedSlideIndex).getSize()[this.sizeProperty]
            } else {
                for (e = (this.settings.rightToLeft === !0 && "horizontal" === this.settings.orientation) == !0 ? -1 : 1, f = "horizontal" === this.settings.orientation ? this.slideWidth : this.slideHeight, c = 0; c < this.slidesOrder.length; c++) b = this.$slides.find(".sp-slide").eq(this.slidesOrder[c]), b.css(this.positionProperty, e * c * (f + this.settings.slideDistance));
                d = f
            }
            var h = this.settings.centerSelectedSlide === !0 ? Math.round((parseInt(this.$slidesMask.css(this.sizeProperty), 10) - d) / 2) : 0,
                i = -parseInt(this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).css(this.positionProperty), 10) + h;
            this._moveTo(i, !0)
        },
        _calculateSlidesSize: function () {
            if (this.settings.autoSlideSize === !0) {
                var a = this.$slides.find(".sp-slide").eq(this.slidesOrder[0]),
                    b = parseInt(a.css(this.positionProperty), 10),
                    c = this.$slides.find(".sp-slide").eq(this.slidesOrder[this.slidesOrder.length - 1]),
                    d = parseInt(c.css(this.positionProperty), 10) + (this.settings.rightToLeft === !0 && "horizontal" === this.settings.orientation ? -1 : 1) * parseInt(c.css(this.sizeProperty), 10);
                this.slidesSize = Math.abs(d - b), this.averageSlideSize = Math.round(this.slidesSize / this.slides.length)
            } else this.slidesSize = (("horizontal" === this.settings.orientation ? this.slideWidth : this.slideHeight) + this.settings.slideDistance) * this.slides.length - this.settings.slideDistance, this.averageSlideSize = "horizontal" === this.settings.orientation ? this.slideWidth : this.slideHeight
        },
        resize: function () {
            var c = this;
            if (null !== this.settings.breakpoints && this.breakpoints.length > 0) if (b(a).width() > this.breakpoints[this.breakpoints.length - 1].size && -1 !== this.currentBreakpoint) this.currentBreakpoint = -1, this._setProperties(this.originalSettings, !1); else for (var d = 0, e = this.breakpoints.length; e > d; d++) if (b(a).width() <= this.breakpoints[d].size) {
                if (this.currentBreakpoint !== this.breakpoints[d].size) {
                    var f = {
                        type: "breakpointReach",
                        size: this.breakpoints[d].size,
                        settings: this.breakpoints[d].properties
                    };
                    this.trigger(f), b.isFunction(this.settings.breakpointReach) && this.settings.breakpointReach.call(this, f), this.currentBreakpoint = this.breakpoints[d].size;
                    var g = b.extend({}, this.originalSettings, this.breakpoints[d].properties);
                    return void this._setProperties(g, !1)
                }
                break
            }
            this.settings.responsive === !0 ? "fullWidth" !== this.settings.forceSize && "fullWindow" !== this.settings.forceSize || "auto" !== this.settings.visibleSize && ("auto" === this.settings.visibleSize || "vertical" !== this.settings.orientation) ? this.$slider.css({
                width: "100%",
                "max-width": this.settings.width,
                marginLeft: ""
            }) : (this.$slider.css("margin", 0), this.$slider.css({
                width: b(a).width(),
                "max-width": "",
                marginLeft: -this.$slider.offset().left
            })) : this.$slider.css({width: this.settings.width}), -1 === this.settings.aspectRatio && (this.settings.aspectRatio = this.settings.width / this.settings.height), this.slideWidth = this.$slider.width(), "fullWindow" === this.settings.forceSize ? this.slideHeight = b(a).height() : this.slideHeight = isNaN(this.settings.aspectRatio) ? this.settings.height : this.slideWidth / this.settings.aspectRatio, (this.previousSlideWidth !== this.slideWidth || this.previousSlideHeight !== this.slideHeight || "auto" !== this.settings.visibleSize || this.$slider.outerWidth() > this.$slider.parent().width() || this.$slider.width() !== this.$slidesMask.width()) && (this.previousSlideWidth = this.slideWidth, this.previousSlideHeight = this.slideHeight, this._resizeSlides(), this.$slidesMask.css({
                width: this.slideWidth,
                height: this.slideHeight
            }), this.settings.autoHeight === !0 ? setTimeout(function () {
                c._resizeHeight()
            }, 1) : this.$slidesMask.css(this.vendorPrefix + "transition", ""), "auto" !== this.settings.visibleSize && ("horizontal" === this.settings.orientation ? ("fullWidth" === this.settings.forceSize || "fullWindow" === this.settings.forceSize ? (this.$slider.css("margin", 0), this.$slider.css({
                width: b(a).width(),
                "max-width": "",
                marginLeft: -this.$slider.offset().left
            })) : this.$slider.css({
                width: this.settings.visibleSize,
                "max-width": "100%",
                marginLeft: 0
            }), this.$slidesMask.css("width", this.$slider.width())) : ("fullWindow" === this.settings.forceSize ? this.$slider.css({
                height: b(a).height(),
                "max-height": ""
            }) : this.$slider.css({
                height: this.settings.visibleSize,
                "max-height": "100%"
            }), this.$slidesMask.css("height", this.$slider.height()))), this._resetSlidesPosition(), this._calculateSlidesSize(), this.trigger({type: "sliderResize"}), b.isFunction(this.settings.sliderResize) && this.settings.sliderResize.call(this, {type: "sliderResize"}))
        },
        _resizeSlides: function () {
            var a = this.slideWidth, c = this.slideHeight;
            this.settings.autoSlideSize === !0 ? "horizontal" === this.settings.orientation ? a = "auto" : "vertical" === this.settings.orientation && (c = "auto") : this.settings.autoHeight === !0 && (c = "auto"), b.each(this.slides, function (b, d) {
                d.setSize(a, c)
            })
        },
        _resizeHeight: function () {
            var a = this.getSlideAt(this.selectedSlideIndex);
            this._resizeHeightTo(a.getSize().height)
        },
        gotoSlide: function (a) {
            if (a !== this.selectedSlideIndex && "undefined" != typeof this.slides[a]) {
                var c = this;
                this.previousSlideIndex = this.selectedSlideIndex, this.selectedSlideIndex = a, this.$slides.find(".sp-selected").removeClass("sp-selected"), this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).addClass("sp-selected"), this.settings.loop === !0 && (this._updateSlidesOrder(), this._updateSlidesPosition()), this.settings.autoHeight === !0 && this._resizeHeight();
                var d = this.settings.centerSelectedSlide === !0 ? Math.round((parseInt(this.$slidesMask.css(this.sizeProperty), 10) - this.getSlideAt(this.selectedSlideIndex).getSize()[this.sizeProperty]) / 2) : 0,
                    e = -parseInt(this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).css(this.positionProperty), 10) + d;
                this._moveTo(e, !1, function () {
                    c._resetSlidesPosition(), c.trigger({
                        type: "gotoSlideComplete",
                        index: a,
                        previousIndex: c.previousSlideIndex
                    }), b.isFunction(c.settings.gotoSlideComplete) && c.settings.gotoSlideComplete.call(c, {
                        type: "gotoSlideComplete",
                        index: a,
                        previousIndex: c.previousSlideIndex
                    })
                }), this.trigger({
                    type: "gotoSlide",
                    index: a,
                    previousIndex: this.previousSlideIndex
                }), b.isFunction(this.settings.gotoSlide) && this.settings.gotoSlide.call(this, {
                    type: "gotoSlide",
                    index: a,
                    previousIndex: this.previousSlideIndex
                })
            }
        },
        nextSlide: function () {
            var a = this.selectedSlideIndex >= this.getTotalSlides() - 1 ? 0 : this.selectedSlideIndex + 1;
            this.gotoSlide(a)
        },
        previousSlide: function () {
            var a = this.selectedSlideIndex <= 0 ? this.getTotalSlides() - 1 : this.selectedSlideIndex - 1;
            this.gotoSlide(a)
        },
        _moveTo: function (a, b, c) {
            var d = this, e = {};
            if (a !== this.slidesPosition) if (this.slidesPosition = a, "css-3d" !== this.supportedAnimation && "css-2d" !== this.supportedAnimation || this.isIE !== !1) e["margin-" + this.positionProperty] = a, "undefined" != typeof b && b === !0 ? this.$slides.css(e) : (this.$slides.addClass("sp-animated"), this.$slides.animate(e, this.settings.slideAnimationDuration, function () {
                d.$slides.removeClass("sp-animated"), "function" == typeof c && c()
            })); else {
                var f, g = "horizontal" === this.settings.orientation ? a : 0,
                    h = "horizontal" === this.settings.orientation ? 0 : a;
                "css-3d" === this.supportedAnimation ? e[this.vendorPrefix + "transform"] = "translate3d(" + g + "px, " + h + "px, 0)" : e[this.vendorPrefix + "transform"] = "translate(" + g + "px, " + h + "px)", "undefined" != typeof b && b === !0 ? f = "" : (this.$slides.addClass("sp-animated"), f = this.vendorPrefix + "transform " + this.settings.slideAnimationDuration / 1e3 + "s", this.$slides.on(this.transitionEvent, function (a) {
                    a.target === a.currentTarget && (d.$slides.off(d.transitionEvent), d.$slides.removeClass("sp-animated"), "function" == typeof c && c())
                })), e[this.vendorPrefix + "transition"] = f, this.$slides.css(e)
            }
        },
        _stopMovement: function () {
            var a = {};
            if ("css-3d" !== this.supportedAnimation && "css-2d" !== this.supportedAnimation || this.isIE !== !1) this.$slides.stop(), this.slidesPosition = parseInt(this.$slides.css("margin-" + this.positionProperty), 10); else {
                var b = this.$slides.css(this.vendorPrefix + "transform"),
                    c = -1 !== b.indexOf("matrix3d") ? "matrix3d" : "matrix", d = b.replace(c, "").match(/-?[0-9\.]+/g),
                    e = "matrix3d" === c ? parseInt(d[12], 10) : parseInt(d[4], 10),
                    f = "matrix3d" === c ? parseInt(d[13], 10) : parseInt(d[5], 10);
                "css-3d" === this.supportedAnimation ? a[this.vendorPrefix + "transform"] = "translate3d(" + e + "px, " + f + "px, 0)" : a[this.vendorPrefix + "transform"] = "translate(" + e + "px, " + f + "px)", a[this.vendorPrefix + "transition"] = "", this.$slides.css(a), this.$slides.off(this.transitionEvent), this.slidesPosition = "horizontal" === this.settings.orientation ? e : f
            }
            this.$slides.removeClass("sp-animated")
        },
        _resizeHeightTo: function (a) {
            var c = this, d = {height: a};
            "css-3d" === this.supportedAnimation || "css-2d" === this.supportedAnimation ? (d[this.vendorPrefix + "transition"] = "height " + this.settings.heightAnimationDuration / 1e3 + "s", this.$slidesMask.off(this.transitionEvent), this.$slidesMask.on(this.transitionEvent, function (a) {
                a.target === a.currentTarget && (c.$slidesMask.off(c.transitionEvent), c.trigger({type: "resizeHeightComplete"}), b.isFunction(c.settings.resizeHeightComplete) && c.settings.resizeHeightComplete.call(c, {type: "resizeHeightComplete"}))
            }), this.$slidesMask.css(d)) : this.$slidesMask.stop().animate(d, this.settings.heightAnimationDuration, function (a) {
                c.trigger({type: "resizeHeightComplete"}), b.isFunction(c.settings.resizeHeightComplete) && c.settings.resizeHeightComplete.call(c, {type: "resizeHeightComplete"})
            })
        },
        destroy: function () {
            this.$slider.removeData("sliderPro"), this.$slider.removeAttr("style"), this.$slides.removeAttr("style"), this.off("update." + c), b(a).off("resize." + this.uniqueId + "." + c);
            var d = b.SliderPro.modules;
            if ("undefined" != typeof d) for (var e = 0; e < d.length; e++) "undefined" != typeof this["destroy" + d[e]] && this["destroy" + d[e]]();
            b.each(this.slides, function (a, b) {
                b.destroy()
            }), this.slides.length = 0, this.$slides.prependTo(this.$slider), this.$slidesContainer.remove()
        },
        _setProperties: function (a, b) {
            for (var c in a) this.settings[c] = a[c], b !== !1 && (this.originalSettings[c] = a[c]);
            this.update()
        },
        on: function (a, b) {
            return this.$slider.on(a, b)
        },
        off: function (a) {
            return this.$slider.off(a)
        },
        trigger: function (a) {
            return this.$slider.triggerHandler(a)
        },
        getSlideAt: function (a) {
            return this.slides[a]
        },
        getSelectedSlide: function () {
            return this.selectedSlideIndex
        },
        getTotalSlides: function () {
            return this.slides.length
        },
        defaults: {
            width: 500,
            height: 300,
            responsive: !0,
            aspectRatio: -1,
            imageScaleMode: "cover",
            centerImage: !0,
            allowScaleUp: !0,
            autoHeight: !1,
            autoSlideSize: !1,
            startSlide: 0,
            shuffle: !1,
            orientation: "horizontal",
            forceSize: "none",
            loop: !0,
            slideDistance: 10,
            slideAnimationDuration: 700,
            heightAnimationDuration: 700,
            visibleSize: "auto",
            centerSelectedSlide: !0,
            rightToLeft: !1,
            breakpoints: null,
            init: function () {
            },
            update: function () {
            },
            sliderResize: function () {
            },
            gotoSlide: function () {
            },
            gotoSlideComplete: function () {
            },
            resizeHeightComplete: function () {
            },
            breakpointReach: function () {
            }
        }
    };
    var e = function (a, b, c) {
        this.$slide = a, this.$mainImage = null, this.$imageContainer = null, this.hasMainImage = !1, this.isMainImageLoaded = !1, this.isMainImageLoading = !1, this.hasImages = !1, this.areImagesLoaded = !1, this.areImagesLoading = !1, this.width = 0, this.height = 0, this.settings = c, this.setIndex(b), this._init()
    };
    e.prototype = {
        _init: function () {
            this.$slide.attr("data-init", !0), this.$mainImage = 0 !== this.$slide.find(".sp-image").length ? this.$slide.find(".sp-image") : null, null !== this.$mainImage && (this.hasMainImage = !0, this.$imageContainer = b('<div class="sp-image-container"></div>').prependTo(this.$slide), 0 !== this.$mainImage.parent("a").length ? this.$mainImage.parent("a").appendTo(this.$imageContainer) : this.$mainImage.appendTo(this.$imageContainer)), this.hasImages = 0 !== this.$slide.find("img").length ? !0 : !1
        }, setSize: function (a, b) {
            this.width = a, this.height = b, this.$slide.css({
                width: this.width,
                height: this.height
            }), this.hasMainImage === !0 && (this.$imageContainer.css({
                width: this.settings.width,
                height: this.settings.height
            }), "undefined" == typeof this.$mainImage.attr("data-src") && this.resizeMainImage())
        }, getSize: function () {
            var a, b = this;
            if (this.hasImages === !0 && this.areImagesLoaded === !1 && this.areImagesLoading === !1) {
                this.areImagesLoading = !0;
                var d = f.checkImagesStatus(this.$slide);
                if ("complete" !== d) return f.checkImagesComplete(this.$slide, function () {
                    b.areImagesLoaded = !0, b.areImagesLoading = !1, b.trigger({
                        type: "imagesLoaded." + c,
                        index: b.index
                    })
                }), {width: this.settings.width, height: this.settings.height}
            }
            return a = this.calculateSize(), {width: a.width, height: a.height}
        }, calculateSize: function () {
            var a = this.$slide.width(), c = this.$slide.height();
            return this.$slide.children().each(function (d, e) {
                var f = b(e);
                if (f.is(":hidden") !== !0) {
                    var g = e.getBoundingClientRect(), h = f.position().top + (g.bottom - g.top),
                        i = f.position().left + (g.right - g.left);
                    h > c && (c = h), i > a && (a = i)
                }
            }), {width: a, height: c}
        }, resizeMainImage: function (a) {
            var b = this;
            return a === !0 && (this.isMainImageLoaded = !1, this.isMainImageLoading = !1), this.isMainImageLoaded === !1 && this.isMainImageLoading === !1 ? (this.isMainImageLoading = !0, void f.checkImagesComplete(this.$mainImage, function () {
                b.isMainImageLoaded = !0, b.isMainImageLoading = !1, b.resizeMainImage(), b.trigger({
                    type: "imagesLoaded." + c,
                    index: b.index
                })
            })) : (this.$imageContainer.css({
                width: this.width,
                height: this.height
            }), this.settings.allowScaleUp === !1 && (this.$mainImage.css({
                width: "",
                height: "",
                maxWidth: "",
                maxHeight: ""
            }), this.$mainImage.css({
                maxWidth: this.$mainImage.width(),
                maxHeight: this.$mainImage.height()
            })), void (this.settings.autoSlideSize === !0 ? "horizontal" === this.settings.orientation ? (this.$mainImage.css({
                width: "auto",
                height: "100%"
            }), this.$slide.css("width", this.$mainImage.width())) : "vertical" === this.settings.orientation && (this.$mainImage.css({
                width: "100%",
                height: "auto"
            }), this.$slide.css("height", this.$mainImage.height())) : this.settings.autoHeight === !0 ? this.$mainImage.css({
                width: "100%",
                height: "auto"
            }) : ("cover" === this.settings.imageScaleMode ? this.$mainImage.width() / this.$mainImage.height() <= this.width / this.height ? this.$mainImage.css({
                width: "100%",
                height: "auto"
            }) : this.$mainImage.css({
                width: "auto",
                height: "100%"
            }) : "contain" === this.settings.imageScaleMode ? this.$mainImage.width() / this.$mainImage.height() >= this.width / this.height ? this.$mainImage.css({
                width: "100%",
                height: "auto"
            }) : this.$mainImage.css({
                width: "auto",
                height: "100%"
            }) : "exact" === this.settings.imageScaleMode && this.$mainImage.css({
                width: "100%",
                height: "100%"
            }), this.settings.centerImage === !0 && this.$mainImage.css({
                marginLeft: .5 * (this.$imageContainer.width() - this.$mainImage.width()),
                marginTop: .5 * (this.$imageContainer.height() - this.$mainImage.height())
            }))))
        }, destroy: function () {
            this.$slide.removeAttr("style"), this.$slide.removeAttr("data-init"), this.$slide.removeAttr("data-index"), this.$slide.removeAttr("data-loaded"), this.hasMainImage === !0 && (this.$slide.find(".sp-image").removeAttr("style").appendTo(this.$slide), this.$slide.find(".sp-image-container").remove())
        }, getIndex: function () {
            return this.index
        }, setIndex: function (a) {
            this.index = a, this.$slide.attr("data-index", this.index)
        }, on: function (a, b) {
            return this.$slide.on(a, b)
        }, off: function (a) {
            return this.$slide.off(a)
        }, trigger: function (a) {
            return this.$slide.triggerHandler(a)
        }
    }, a.SliderPro = d, a.SliderProSlide = e, b.fn.sliderPro = function (a) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            if ("undefined" == typeof b(this).data("sliderPro")) {
                var e = new d(this, a);
                b(this).data("sliderPro", e)
            } else if ("undefined" != typeof a) {
                var f = b(this).data("sliderPro");
                if ("function" == typeof f[a]) f[a].apply(f, c); else if ("undefined" != typeof f.settings[a]) {
                    var g = {};
                    g[a] = c[0], f._setProperties(g)
                } else "object" == typeof a ? f._setProperties(a) : b.error(a + " does not exist in sliderPro.")
            }
        })
    };
    var f = {
        supportedAnimation: null,
        vendorPrefix: null,
        transitionEvent: null,
        isIE: null,
        getSupportedAnimation: function () {
            if (null !== this.supportedAnimation) return this.supportedAnimation;
            var a = document.body || document.documentElement, b = a.style,
                c = "undefined" != typeof b.transition || "undefined" != typeof b.WebkitTransition || "undefined" != typeof b.MozTransition || "undefined" != typeof b.OTransition;
            if (c === !0) {
                var d = document.createElement("div");
                if (("undefined" != typeof d.style.WebkitPerspective || "undefined" != typeof d.style.perspective) && (this.supportedAnimation = "css-3d"), "css-3d" === this.supportedAnimation && "undefined" != typeof d.styleWebkitPerspective) {
                    var e = document.createElement("style");
                    e.textContent = "@media (transform-3d),(-webkit-transform-3d){#test-3d{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0;}}", document.getElementsByTagName("head")[0].appendChild(e), d.id = "test-3d", document.body.appendChild(d), (9 !== d.offsetLeft || 5 !== d.offsetHeight) && (this.supportedAnimation = null), e.parentNode.removeChild(e), d.parentNode.removeChild(d)
                }
                null !== this.supportedAnimation || "undefined" == typeof d.style["-webkit-transform"] && "undefined" == typeof d.style.transform || (this.supportedAnimation = "css-2d")
            } else this.supportedAnimation = "javascript";
            return this.supportedAnimation
        },
        getVendorPrefix: function () {
            if (null !== this.vendorPrefix) return this.vendorPrefix;
            var a = document.createElement("div"), b = ["Webkit", "Moz", "ms", "O"];
            if ("transform" in a.style) return this.vendorPrefix = "", this.vendorPrefix;
            for (var c = 0; c < b.length; c++) if (b[c] + "Transform" in a.style) {
                this.vendorPrefix = "-" + b[c].toLowerCase() + "-";
                break
            }
            return this.vendorPrefix
        },
        getTransitionEvent: function () {
            if (null !== this.transitionEvent) return this.transitionEvent;
            var a = document.createElement("div"), b = {
                transition: "transitionend",
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd"
            };
            for (var c in b) if (c in a.style) {
                this.transitionEvent = b[c];
                break
            }
            return this.transitionEvent
        },
        checkImagesComplete: function (a, b) {
            var c = this, d = this.checkImagesStatus(a);
            if ("loading" === d) var e = setInterval(function () {
                d = c.checkImagesStatus(a), "complete" === d && (clearInterval(e), "function" == typeof b && b())
            }, 100); else "function" == typeof b && b();
            return d
        },
        checkImagesStatus: function (a) {
            var c = "complete";
            return a.is("img") && a[0].complete === !1 ? c = "loading" : a.find("img").each(function (a) {
                var d = b(this)[0];
                d.complete === !1 && (c = "loading")
            }), c
        },
        checkIE: function () {
            if (null !== this.isIE) return this.isIE;
            var b = a.navigator.userAgent;
            b.indexOf("MSIE");
            return -1 !== b.indexOf("MSIE") || b.match(/Trident.*rv\:11\./) ? this.isIE = !0 : this.isIE = !1, this.isIE
        }
    };
    a.SliderProUtils = f
}(window, jQuery), function (a, b) {
    "use strict";
    var c = "Thumbnails." + b.SliderPro.namespace, d = {
        $thumbnails: null,
        $thumbnailsContainer: null,
        thumbnails: null,
        selectedThumbnailIndex: 0,
        thumbnailsSize: 0,
        thumbnailsContainerSize: 0,
        thumbnailsPosition: 0,
        thumbnailsOrientation: null,
        thumbnailsPositionProperty: null,
        isThumbnailScroller: !1,
        initThumbnails: function () {
            var a = this;
            this.thumbnails = [], this.on("update." + c, b.proxy(this._thumbnailsOnUpdate, this)), this.on("sliderResize." + c, b.proxy(this._thumbnailsOnResize, this)), this.on("gotoSlide." + c, function (b) {
                a._gotoThumbnail(b.index)
            })
        },
        _thumbnailsOnUpdate: function () {
            var a = this;
            if (0 === this.$slider.find(".sp-thumbnail").length && 0 === this.thumbnails.length) return void (this.isThumbnailScroller = !1);
            if (this.isThumbnailScroller = !0, null === this.$thumbnailsContainer && (this.$thumbnailsContainer = b('<div class="sp-thumbnails-container"></div>').insertAfter(this.$slidesContainer)), null === this.$thumbnails) if (0 !== this.$slider.find(".sp-thumbnails").length) {
                if (this.$thumbnails = this.$slider.find(".sp-thumbnails").appendTo(this.$thumbnailsContainer), this.settings.shuffle === !0) {
                    var c = this.$thumbnails.find(".sp-thumbnail"), d = [];
                    b.each(this.shuffledIndexes, function (a, e) {
                        var f = b(c[e]);
                        0 !== f.parent("a").length && (f = f.parent("a")), d.push(f)
                    }), this.$thumbnails.empty().append(d)
                }
            } else this.$thumbnails = b('<div class="sp-thumbnails"></div>').appendTo(this.$thumbnailsContainer);
            this.$slides.find(".sp-thumbnail").each(function (c) {
                var d = b(this), e = d.parents(".sp-slide").index(), f = a.$thumbnails.find(".sp-thumbnail").length - 1;
                0 !== d.parent("a").length && (d = d.parent("a")), e > f ? d.appendTo(a.$thumbnails) : d.insertBefore(a.$thumbnails.find(".sp-thumbnail").eq(e))
            });
            for (var e = this.thumbnails.length - 1; e >= 0; e--) if (0 === this.$thumbnails.find('.sp-thumbnail[data-index="' + e + '"]').length) {
                var f = this.thumbnails[e];
                f.destroy(), this.thumbnails.splice(e, 1)
            }
            this.$thumbnails.find(".sp-thumbnail").each(function (c) {
                var d = b(this);
                "undefined" == typeof d.attr("data-init") ? a._createThumbnail(d, c) : a.thumbnails[c].setIndex(c)
            }), this.$thumbnailsContainer.removeClass("sp-top-thumbnails sp-bottom-thumbnails sp-left-thumbnails sp-right-thumbnails"), "top" === this.settings.thumbnailsPosition ? (this.$thumbnailsContainer.addClass("sp-top-thumbnails"), this.thumbnailsOrientation = "horizontal") : "bottom" === this.settings.thumbnailsPosition ? (this.$thumbnailsContainer.addClass("sp-bottom-thumbnails"), this.thumbnailsOrientation = "horizontal") : "left" === this.settings.thumbnailsPosition ? (this.$thumbnailsContainer.addClass("sp-left-thumbnails"), this.thumbnailsOrientation = "vertical") : "right" === this.settings.thumbnailsPosition && (this.$thumbnailsContainer.addClass("sp-right-thumbnails"), this.thumbnailsOrientation = "vertical"), this.settings.thumbnailPointer === !0 ? this.$thumbnailsContainer.addClass("sp-has-pointer") : this.$thumbnailsContainer.removeClass("sp-has-pointer"), this.selectedThumbnailIndex = this.selectedSlideIndex, this.$thumbnails.find(".sp-thumbnail-container").eq(this.selectedThumbnailIndex).addClass("sp-selected-thumbnail"), this.thumbnailsSize = 0, b.each(this.thumbnails, function (b, c) {
                c.setSize(a.settings.thumbnailWidth, a.settings.thumbnailHeight), a.thumbnailsSize += "horizontal" === a.thumbnailsOrientation ? c.getSize().width : c.getSize().height
            }), "horizontal" === this.thumbnailsOrientation ? (this.$thumbnails.css({
                width: this.thumbnailsSize,
                height: this.settings.thumbnailHeight
            }), this.$thumbnailsContainer.css("height", ""), this.thumbnailsPositionProperty = "left") : (this.$thumbnails.css({
                width: this.settings.thumbnailWidth,
                height: this.thumbnailsSize
            }), this.$thumbnailsContainer.css("width", ""), this.thumbnailsPositionProperty = "top"), this.trigger({type: "thumbnailsUpdate"}), b.isFunction(this.settings.thumbnailsUpdate) && this.settings.thumbnailsUpdate.call(this, {type: "thumbnailsUpdate"})
        },
        _createThumbnail: function (a, b) {
            var d = this, f = new e(a, this.$thumbnails, b);
            f.on("thumbnailClick." + c, function (a) {
                d.gotoSlide(a.index)
            }), this.thumbnails.splice(b, 0, f)
        },
        _thumbnailsOnResize: function () {
            if (this.isThumbnailScroller !== !1) {
                var c;
                "horizontal" === this.thumbnailsOrientation ? (this.thumbnailsContainerSize = Math.min(this.$slidesMask.width(), this.thumbnailsSize), this.$thumbnailsContainer.css("width", this.thumbnailsContainerSize), "fullWindow" === this.settings.forceSize && (this.$slidesMask.css("height", this.$slidesMask.height() - this.$thumbnailsContainer.outerHeight(!0)), this.slideHeight = this.$slidesMask.height(), this._resizeSlides(), this._resetSlidesPosition())) : "vertical" === this.thumbnailsOrientation && (this.$slidesMask.width() + this.$thumbnailsContainer.outerWidth(!0) > this.$slider.parent().width() && ("fullWidth" === this.settings.forceSize || "fullWindow" === this.settings.forceSize ? this.$slider.css("max-width", b(a).width() - this.$thumbnailsContainer.outerWidth(!0)) : this.$slider.css("max-width", this.$slider.parent().width() - this.$thumbnailsContainer.outerWidth(!0)), this.$slidesMask.css("width", this.$slider.width()), "vertical" === this.settings.orientation && (this.slideWidth = this.$slider.width(), this._resizeSlides()), this._resetSlidesPosition()), this.thumbnailsContainerSize = Math.min(this.$slidesMask.height(), this.thumbnailsSize), this.$thumbnailsContainer.css("height", this.thumbnailsContainerSize)), c = this.thumbnailsSize <= this.thumbnailsContainerSize || 0 === this.$thumbnails.find(".sp-selected-thumbnail").length ? 0 : Math.max(-this.thumbnails[this.selectedThumbnailIndex].getPosition()[this.thumbnailsPositionProperty], this.thumbnailsContainerSize - this.thumbnailsSize), "top" === this.settings.thumbnailsPosition ? this.$slider.css({
                    paddingTop: this.$thumbnailsContainer.outerHeight(!0),
                    paddingLeft: "",
                    paddingRight: ""
                }) : "bottom" === this.settings.thumbnailsPosition ? this.$slider.css({
                    paddingTop: "",
                    paddingLeft: "",
                    paddingRight: ""
                }) : "left" === this.settings.thumbnailsPosition ? this.$slider.css({
                    paddingTop: "",
                    paddingLeft: this.$thumbnailsContainer.outerWidth(!0),
                    paddingRight: ""
                }) : "right" === this.settings.thumbnailsPosition && this.$slider.css({
                    paddingTop: "",
                    paddingLeft: "",
                    paddingRight: this.$thumbnailsContainer.outerWidth(!0)
                }), this._moveThumbnailsTo(c, !0)
            }
        },
        _gotoThumbnail: function (a) {
            if (this.isThumbnailScroller !== !1 && "undefined" != typeof this.thumbnails[a]) {
                var c = this.selectedThumbnailIndex, d = this.thumbnailsPosition;
                if (this.selectedThumbnailIndex = a, this.$thumbnails.find(".sp-selected-thumbnail").removeClass("sp-selected-thumbnail"), this.$thumbnails.find(".sp-thumbnail-container").eq(this.selectedThumbnailIndex).addClass("sp-selected-thumbnail"), this.settings.rightToLeft === !0 && "horizontal" === this.thumbnailsOrientation) {
                    if (this.selectedThumbnailIndex >= c) {
                        var e = this.selectedThumbnailIndex === this.thumbnails.length - 1 ? this.selectedThumbnailIndex : this.selectedThumbnailIndex + 1,
                            f = this.thumbnails[e];
                        f.getPosition().left < -this.thumbnailsPosition && (d = -f.getPosition().left)
                    } else if (this.selectedThumbnailIndex < c) {
                        var g = 0 === this.selectedThumbnailIndex ? this.selectedThumbnailIndex : this.selectedThumbnailIndex - 1,
                            h = this.thumbnails[g], i = -this.thumbnailsPosition + this.thumbnailsContainerSize;
                        h.getPosition().right > i && (d = this.thumbnailsPosition - (h.getPosition().right - i))
                    }
                } else if (this.selectedThumbnailIndex >= c) {
                    var j = this.selectedThumbnailIndex === this.thumbnails.length - 1 ? this.selectedThumbnailIndex : this.selectedThumbnailIndex + 1,
                        k = this.thumbnails[j],
                        l = "horizontal" === this.thumbnailsOrientation ? k.getPosition().right : k.getPosition().bottom,
                        m = -this.thumbnailsPosition + this.thumbnailsContainerSize;
                    l > m && (d = this.thumbnailsPosition - (l - m))
                } else if (this.selectedThumbnailIndex < c) {
                    var n = 0 === this.selectedThumbnailIndex ? this.selectedThumbnailIndex : this.selectedThumbnailIndex - 1,
                        o = this.thumbnails[n],
                        p = "horizontal" === this.thumbnailsOrientation ? o.getPosition().left : o.getPosition().top;
                    p < -this.thumbnailsPosition && (d = -p)
                }
                this._moveThumbnailsTo(d), this.trigger({type: "gotoThumbnail"}), b.isFunction(this.settings.gotoThumbnail) && this.settings.gotoThumbnail.call(this, {type: "gotoThumbnail"})
            }
        },
        _moveThumbnailsTo: function (a, c, d) {
            var e = this, f = {};
            if (a !== this.thumbnailsPosition) if (this.thumbnailsPosition = a, "css-3d" === this.supportedAnimation || "css-2d" === this.supportedAnimation) {
                var g, h = "horizontal" === this.thumbnailsOrientation ? a : 0,
                    i = "horizontal" === this.thumbnailsOrientation ? 0 : a;
                "css-3d" === this.supportedAnimation ? f[this.vendorPrefix + "transform"] = "translate3d(" + h + "px, " + i + "px, 0)" : f[this.vendorPrefix + "transform"] = "translate(" + h + "px, " + i + "px)", "undefined" != typeof c && c === !0 ? g = "" : (this.$thumbnails.addClass("sp-animated"), g = this.vendorPrefix + "transform 0.7s", this.$thumbnails.on(this.transitionEvent, function (a) {
                    a.target === a.currentTarget && (e.$thumbnails.off(e.transitionEvent), e.$thumbnails.removeClass("sp-animated"), "function" == typeof d && d(), e.trigger({type: "thumbnailsMoveComplete"}), b.isFunction(e.settings.thumbnailsMoveComplete) && e.settings.thumbnailsMoveComplete.call(e, {type: "thumbnailsMoveComplete"}))
                })), f[this.vendorPrefix + "transition"] = g, this.$thumbnails.css(f)
            } else f["margin-" + this.thumbnailsPositionProperty] = a, "undefined" != typeof c && c === !0 ? this.$thumbnails.css(f) : this.$thumbnails.addClass("sp-animated").animate(f, 700, function () {
                e.$thumbnails.removeClass("sp-animated"), "function" == typeof d && d(), e.trigger({type: "thumbnailsMoveComplete"}), b.isFunction(e.settings.thumbnailsMoveComplete) && e.settings.thumbnailsMoveComplete.call(e, {type: "thumbnailsMoveComplete"})
            })
        },
        _stopThumbnailsMovement: function () {
            var a = {};
            if ("css-3d" === this.supportedAnimation || "css-2d" === this.supportedAnimation) {
                var b = this.$thumbnails.css(this.vendorPrefix + "transform"),
                    c = -1 !== b.indexOf("matrix3d") ? "matrix3d" : "matrix", d = b.replace(c, "").match(/-?[0-9\.]+/g),
                    e = "matrix3d" === c ? parseInt(d[12], 10) : parseInt(d[4], 10),
                    f = "matrix3d" === c ? parseInt(d[13], 10) : parseInt(d[5], 10);
                "css-3d" === this.supportedAnimation ? a[this.vendorPrefix + "transform"] = "translate3d(" + e + "px, " + f + "px, 0)" : a[this.vendorPrefix + "transform"] = "translate(" + e + "px, " + f + "px)", a[this.vendorPrefix + "transition"] = "", this.$thumbnails.css(a), this.$thumbnails.off(this.transitionEvent), this.thumbnailsPosition = "horizontal" === this.thumbnailsOrientation ? parseInt(d[4], 10) : parseInt(d[5], 10)
            } else this.$thumbnails.stop(), this.thumbnailsPosition = parseInt(this.$thumbnails.css("margin-" + this.thumbnailsPositionProperty), 10);
            this.$thumbnails.removeClass("sp-animated")
        },
        destroyThumbnails: function () {
            var d = this;
            this.off("update." + c), this.isThumbnailScroller !== !1 && (this.off("sliderResize." + c), this.off("gotoSlide." + c), b(a).off("resize." + this.uniqueId + "." + c), this.$thumbnails.find(".sp-thumbnail").each(function () {
                var a = b(this), e = parseInt(a.attr("data-index"), 10), f = d.thumbnails[e];
                f.off("thumbnailClick." + c), f.destroy()
            }), this.thumbnails.length = 0, this.$thumbnails.appendTo(this.$slider), this.$thumbnailsContainer.remove(), this.$slider.css({
                paddingTop: "",
                paddingLeft: "",
                paddingRight: ""
            }))
        },
        thumbnailsDefaults: {
            thumbnailWidth: 100,
            thumbnailHeight: 80,
            thumbnailsPosition: "bottom",
            thumbnailPointer: !1,
            thumbnailsUpdate: function () {
            },
            gotoThumbnail: function () {
            },
            thumbnailsMoveComplete: function () {
            }
        }
    }, e = function (a, b, c) {
        this.$thumbnail = a, this.$thumbnails = b, this.$thumbnailContainer = null, this.width = 0, this.height = 0, this.isImageLoaded = !1, this.setIndex(c), this._init()
    };
    e.prototype = {
        _init: function () {
            var a = this;
            this.$thumbnail.attr("data-init", !0), this.$thumbnailContainer = b('<div class="sp-thumbnail-container"></div>').appendTo(this.$thumbnails), 0 !== this.$thumbnail.parent("a").length ? this.$thumbnail.parent("a").appendTo(this.$thumbnailContainer) : this.$thumbnail.appendTo(this.$thumbnailContainer), this.$thumbnailContainer.on("click." + c, function () {
                a.trigger({type: "thumbnailClick." + c, index: a.index})
            })
        }, setSize: function (a, b) {
            this.width = a, this.height = b, this.$thumbnailContainer.css({
                width: this.width,
                height: this.height
            }), this.$thumbnail.is("img") && "undefined" == typeof this.$thumbnail.attr("data-src") && this.resizeImage()
        }, getSize: function () {
            return {width: this.$thumbnailContainer.outerWidth(!0), height: this.$thumbnailContainer.outerHeight(!0)}
        }, getPosition: function () {
            return {
                left: this.$thumbnailContainer.position().left + parseInt(this.$thumbnailContainer.css("marginLeft"), 10),
                right: this.$thumbnailContainer.position().left + parseInt(this.$thumbnailContainer.css("marginLeft"), 10) + this.$thumbnailContainer.outerWidth(),
                top: this.$thumbnailContainer.position().top + parseInt(this.$thumbnailContainer.css("marginTop"), 10),
                bottom: this.$thumbnailContainer.position().top + parseInt(this.$thumbnailContainer.css("marginTop"), 10) + this.$thumbnailContainer.outerHeight()
            }
        }, setIndex: function (a) {
            this.index = a, this.$thumbnail.attr("data-index", this.index)
        }, resizeImage: function () {
            var a = this;
            if (this.isImageLoaded === !1) return void SliderProUtils.checkImagesComplete(this.$thumbnailContainer, function () {
                a.isImageLoaded = !0, a.resizeImage()
            });
            this.$thumbnail = this.$thumbnailContainer.find(".sp-thumbnail");
            var b = this.$thumbnail.width(), c = this.$thumbnail.height();
            b / c <= this.width / this.height ? this.$thumbnail.css({
                width: "100%",
                height: "auto"
            }) : this.$thumbnail.css({
                width: "auto",
                height: "100%"
            }), this.$thumbnail.css({
                marginLeft: .5 * (this.$thumbnailContainer.width() - this.$thumbnail.width()),
                marginTop: .5 * (this.$thumbnailContainer.height() - this.$thumbnail.height())
            })
        }, destroy: function () {
            this.$thumbnailContainer.off("click." + c), this.$thumbnail.removeAttr("data-init"), this.$thumbnail.removeAttr("data-index"), 0 !== this.$thumbnail.parent("a").length ? this.$thumbnail.parent("a").insertBefore(this.$thumbnailContainer) : this.$thumbnail.insertBefore(this.$thumbnailContainer), this.$thumbnailContainer.remove()
        }, on: function (a, b) {
            return this.$thumbnailContainer.on(a, b)
        }, off: function (a) {
            return this.$thumbnailContainer.off(a)
        }, trigger: function (a) {
            return this.$thumbnailContainer.triggerHandler(a)
        }
    }, b.SliderPro.addModule("Thumbnails", d)
}(window, jQuery), function (a, b) {
    "use strict";
    var c = "ConditionalImages." + b.SliderPro.namespace, d = {
        previousImageSize: null, currentImageSize: null, isRetinaScreen: !1, initConditionalImages: function () {
            this.currentImageSize = this.previousImageSize = "default", this.isRetinaScreen = "undefined" != typeof this._isRetina && this._isRetina() === !0, this.on("update." + c, b.proxy(this._conditionalImagesOnUpdate, this)), this.on("sliderResize." + c, b.proxy(this._conditionalImagesOnResize, this))
        }, _conditionalImagesOnUpdate: function () {
            b.each(this.slides, function (a, c) {
                var d = c.$slide;
                d.find("img:not([ data-default ])").each(function () {
                    var a = b(this);
                    "undefined" != typeof a.attr("data-src") ? a.attr("data-default", a.attr("data-src")) : a.attr("data-default", a.attr("src"))
                })
            })
        }, _conditionalImagesOnResize: function () {
            if (this.slideWidth <= this.settings.smallSize ? this.currentImageSize = "small" : this.slideWidth <= this.settings.mediumSize ? this.currentImageSize = "medium" : this.slideWidth <= this.settings.largeSize ? this.currentImageSize = "large" : this.currentImageSize = "default", this.previousImageSize !== this.currentImageSize) {
                var a = this;
                b.each(this.slides, function (c, d) {
                    var e = d.$slide;
                    e.find("img").each(function () {
                        var c = b(this), e = "";
                        a.isRetinaScreen === !0 && "undefined" != typeof c.attr("data-retina" + a.currentImageSize) ? (e = c.attr("data-retina" + a.currentImageSize), "undefined" != typeof c.attr("data-retina") && c.attr("data-retina") !== e && c.attr("data-retina", e)) : (a.isRetinaScreen === !1 || a.isRetinaScreen === !0 && "undefined" == typeof c.attr("data-retina")) && "undefined" != typeof c.attr("data-" + a.currentImageSize) && (e = c.attr("data-" + a.currentImageSize), "undefined" != typeof c.attr("data-src") && c.attr("data-src") !== e && c.attr("data-src", e)), "" !== e && "undefined" == typeof c.attr("data-src") && c.attr("src") !== e && a._loadConditionalImage(c, e, function (a) {
                            a.hasClass("sp-image") && (d.$mainImage = a, d.resizeMainImage(!0))
                        })
                    })
                }), this.previousImageSize = this.currentImageSize
            }
        }, _loadConditionalImage: function (a, c, d) {
            var e = b(new Image);
            e.attr("class", a.attr("class")), e.attr("style", a.attr("style")), b.each(a.data(), function (a, b) {
                e.attr("data-" + a, b)
            }), "undefined" != typeof a.attr("width") && e.attr("width", a.attr("width")), "undefined" != typeof a.attr("height") && e.attr("height", a.attr("height")), "undefined" != typeof a.attr("alt") && e.attr("alt", a.attr("alt")), "undefined" != typeof a.attr("title") && e.attr("title", a.attr("title")), e.attr("src", c), e.insertAfter(a), a.remove(), a = null, "function" == typeof d && d(e)
        }, destroyConditionalImages: function () {
            this.off("update." + c), this.off("sliderResize." + c)
        }, conditionalImagesDefaults: {smallSize: 480, mediumSize: 768, largeSize: 1024}
    };
    b.SliderPro.addModule("ConditionalImages", d)
}(window, jQuery), function (a, b) {
    "use strict";
    var c = "Retina." + b.SliderPro.namespace, d = {
        initRetina: function () {
            this._isRetina() !== !1 && (this.on("sliderResize." + c, b.proxy(this._checkRetinaImages, this)), 0 !== this.$slider.find(".sp-thumbnail").length && this.on("update.Thumbnails." + c, b.proxy(this._checkRetinaThumbnailImages, this)))
        }, _isRetina: function () {
            return a.devicePixelRatio >= 2 ? !0 : a.matchMedia && a.matchMedia("(-webkit-min-device-pixel-ratio: 2),(min-resolution: 2dppx)").matches ? !0 : !1
        }, _checkRetinaImages: function () {
            var a = this;
            b.each(this.slides, function (c, d) {
                var e = d.$slide;
                "undefined" == typeof e.attr("data-retina-loaded") && (e.attr("data-retina-loaded", !0), e.find("img[data-retina]").each(function () {
                    var c = b(this);
                    "undefined" != typeof c.attr("data-src") ? c.attr("data-src", c.attr("data-retina")) : a._loadRetinaImage(c, function (a) {
                        a.hasClass("sp-image") && (d.$mainImage = a, d.resizeMainImage(!0))
                    })
                }))
            })
        }, _checkRetinaThumbnailImages: function () {
            var a = this;
            b.each(this.thumbnails, function (c, d) {
                var e = d.$thumbnailContainer;
                "undefined" == typeof e.attr("data-retina-loaded") && (e.attr("data-retina-loaded", !0), e.find("img[data-retina]").each(function () {
                    var c = b(this);
                    "undefined" != typeof c.attr("data-src") ? c.attr("data-src", c.attr("data-retina")) : a._loadRetinaImage(c, function (a) {
                        a.hasClass("sp-thumbnail") && d.resizeImage()
                    })
                }))
            })
        }, _loadRetinaImage: function (a, c) {
            var d = !1, e = "";
            if ("undefined" != typeof a.attr("data-retina") && (d = !0, e = a.attr("data-retina")), "undefined" != typeof a.attr("data-src") && (d === !1 && (e = a.attr("data-src")), a.removeAttr("data-src")), "" !== e) {
                var f = b(new Image);
                f.attr("class", a.attr("class")), f.attr("style", a.attr("style")), b.each(a.data(), function (a, b) {
                    f.attr("data-" + a, b)
                }), "undefined" != typeof a.attr("width") && f.attr("width", a.attr("width")), "undefined" != typeof a.attr("height") && f.attr("height", a.attr("height")), "undefined" != typeof a.attr("alt") && f.attr("alt", a.attr("alt")), "undefined" != typeof a.attr("title") && f.attr("title", a.attr("title")), f.insertAfter(a), a.remove(), a = null, f.attr("src", e), "function" == typeof c && c(f)
            }
        }, destroyRetina: function () {
            this.off("update." + c), this.off("update.Thumbnails." + c)
        }
    };
    b.SliderPro.addModule("Retina", d)
}(window, jQuery), function (a, b) {
    "use strict";
    var c = "LazyLoading." + b.SliderPro.namespace, d = {
        allowLazyLoadingCheck: !0, initLazyLoading: function () {
            this.on("sliderResize." + c, b.proxy(this._lazyLoadingOnResize, this)), this.on("gotoSlide." + c, b.proxy(this._checkAndLoadVisibleImages, this)), this.on("thumbnailsUpdate." + c + " thumbnailsMoveComplete." + c, b.proxy(this._checkAndLoadVisibleThumbnailImages, this))
        }, _lazyLoadingOnResize: function () {
            var a = this;
            this.allowLazyLoadingCheck !== !1 && (this.allowLazyLoadingCheck = !1, this._checkAndLoadVisibleImages(), 0 !== this.$slider.find(".sp-thumbnail").length && this._checkAndLoadVisibleThumbnailImages(), setTimeout(function () {
                a.allowLazyLoadingCheck = !0
            }, 500))
        }, _checkAndLoadVisibleImages: function () {
            if (0 !== this.$slider.find(".sp-slide:not([ data-loaded ])").length) {
                var a = this, c = this.settings.loop === !0 ? this.middleSlidePosition : this.selectedSlideIndex,
                    d = Math.ceil((parseInt(this.$slidesMask.css(this.sizeProperty), 10) - this.averageSlideSize) / 2 / this.averageSlideSize),
                    e = this.settings.centerSelectedSlide === !0 ? Math.max(c - d - 1, 0) : Math.max(c - 1, 0),
                    f = this.settings.centerSelectedSlide === !0 ? Math.min(c + d + 1, this.getTotalSlides() - 1) : Math.min(c + 2 * d + 1, this.getTotalSlides() - 1),
                    g = this.slidesOrder.slice(e, f + 1);
                b.each(g, function (c, d) {
                    var e = a.slides[d], f = e.$slide;
                    "undefined" == typeof f.attr("data-loaded") && (f.attr("data-loaded", !0), f.find("img[ data-src ]").each(function () {
                        var c = b(this);
                        a._loadImage(c, function (a) {
                            a.hasClass("sp-image") && (e.$mainImage = a, e.resizeMainImage(!0))
                        })
                    }))
                })
            }
        }, _checkAndLoadVisibleThumbnailImages: function () {
            if (0 !== this.$slider.find(".sp-thumbnail-container:not([ data-loaded ])").length) {
                var a = this, c = this.thumbnailsSize / this.thumbnails.length,
                    d = Math.floor(Math.abs(this.thumbnailsPosition / c)),
                    e = Math.floor((-this.thumbnailsPosition + this.thumbnailsContainerSize) / c),
                    f = this.thumbnails.slice(d, e + 1);
                b.each(f, function (c, d) {
                    var e = d.$thumbnailContainer;
                    "undefined" == typeof e.attr("data-loaded") && (e.attr("data-loaded", !0), e.find("img[ data-src ]").each(function () {
                        var c = b(this);
                        a._loadImage(c, function () {
                            d.resizeImage()
                        })
                    }))
                })
            }
        }, _loadImage: function (a, c) {
            var d = b(new Image);
            d.attr("class", a.attr("class")), d.attr("style", a.attr("style")), b.each(a.data(), function (a, b) {
                d.attr("data-" + a, b)
            }), "undefined" != typeof a.attr("width") && d.attr("width", a.attr("width")), "undefined" != typeof a.attr("height") && d.attr("height", a.attr("height")), "undefined" != typeof a.attr("alt") && d.attr("alt", a.attr("alt")), "undefined" != typeof a.attr("title") && d.attr("title", a.attr("title")), d.attr("src", a.attr("data-src")), d.removeAttr("data-src"), d.insertAfter(a), a.remove(), a = null, "function" == typeof c && c(d)
        }, destroyLazyLoading: function () {
            this.off("update." + c), this.off("gotoSlide." + c), this.off("sliderResize." + c), this.off("thumbnailsUpdate." + c), this.off("thumbnailsMoveComplete." + c)
        }
    };
    b.SliderPro.addModule("LazyLoading", d)
}(window, jQuery), function (a, b) {
    "use strict";
    var c = "Layers." + b.SliderPro.namespace, d = {
        layersGotoSlideReference: null,
        waitForLayersTimer: null,
        initLayers: function () {
            this.on("update." + c, b.proxy(this._layersOnUpdate, this)), this.on("sliderResize." + c, b.proxy(this._layersOnResize, this)), this.on("gotoSlide." + c, b.proxy(this._layersOnGotoSlide, this))
        },
        _layersOnUpdate: function (a) {
            var c = this;
            b.each(this.slides, function (a, c) {
                c.$slide;
                this.$slide.find(".sp-layer:not([ data-layer-init ])").each(function () {
                    var a = new f(b(this));
                    "undefined" == typeof c.layers && (c.layers = []), c.layers.push(a), b(this).hasClass("sp-static") === !1 && ("undefined" == typeof c.animatedLayers && (c.animatedLayers = []), c.animatedLayers.push(a))
                })
            }), this.settings.waitForLayers === !0 && (clearTimeout(this.waitForLayersTimer), this.waitForLayersTimer = setTimeout(function () {
                c.layersGotoSlideReference = c.gotoSlide, c.gotoSlide = c._layersGotoSlide
            }, 1)), setTimeout(function () {
                c.showLayers(c.selectedSlideIndex)
            }, 1)
        },
        _layersOnResize: function () {
            var a, c, d = this, e = this.settings.autoScaleLayers;
            this.settings.autoScaleLayers !== !1 && (-1 === this.settings.autoScaleReference ? "string" == typeof this.settings.width && -1 !== this.settings.width.indexOf("%") ? e = !1 : a = parseInt(this.settings.width, 10) : a = this.settings.autoScaleReference, c = e === !0 && this.slideWidth < a ? d.slideWidth / a : 1, b.each(this.slides, function (a, d) {
                "undefined" != typeof d.layers && b.each(d.layers, function (a, b) {
                    b.scale(c)
                })
            }))
        },
        _layersGotoSlide: function (a) {
            var b = this, d = this.slides[this.selectedSlideIndex].animatedLayers;
            this.$slider.hasClass("sp-swiping") || "undefined" == typeof d || 0 === d.length ? this.layersGotoSlideReference(a) : (this.on("hideLayersComplete." + c, function () {
                b.off("hideLayersComplete." + c), b.layersGotoSlideReference(a)
            }), this.hideLayers(this.selectedSlideIndex))
        },
        _layersOnGotoSlide: function (a) {
            this.previousSlideIndex !== this.selectedSlideIndex && this.hideLayers(this.previousSlideIndex), this.showLayers(this.selectedSlideIndex)
        },
        showLayers: function (a) {
            var c = this, d = this.slides[a].animatedLayers, e = 0;
            "undefined" != typeof d && b.each(d, function (a, f) {
                f.isVisible() === !0 ? (e++, e === d.length && (c.trigger({
                    type: "showLayersComplete",
                    index: a
                }), b.isFunction(c.settings.showLayersComplete) && c.settings.showLayersComplete.call(c, {
                    type: "showLayersComplete",
                    index: a
                }))) : f.show(function () {
                    e++, e === d.length && (c.trigger({
                        type: "showLayersComplete",
                        index: a
                    }), b.isFunction(c.settings.showLayersComplete) && c.settings.showLayersComplete.call(c, {
                        type: "showLayersComplete",
                        index: a
                    }))
                })
            })
        },
        hideLayers: function (a) {
            var c = this, d = this.slides[a].animatedLayers, e = 0;
            "undefined" != typeof d && b.each(d, function (a, f) {
                f.isVisible() === !1 ? (e++, e === d.length && (c.trigger({
                    type: "hideLayersComplete",
                    index: a
                }), b.isFunction(c.settings.hideLayersComplete) && c.settings.hideLayersComplete.call(c, {
                    type: "hideLayersComplete",
                    index: a
                }))) : f.hide(function () {
                    e++, e === d.length && (c.trigger({
                        type: "hideLayersComplete",
                        index: a
                    }), b.isFunction(c.settings.hideLayersComplete) && c.settings.hideLayersComplete.call(c, {
                        type: "hideLayersComplete",
                        index: a
                    }))
                })
            })
        },
        destroyLayers: function () {
            this.off("update." + c), this.off("sliderResize." + c), this.off("gotoSlide." + c), this.off("hideLayersComplete." + c)
        },
        layersDefaults: {
            waitForLayers: !1,
            autoScaleLayers: !0,
            autoScaleReference: -1,
            showLayersComplete: function () {
            },
            hideLayersComplete: function () {
            }
        }
    }, e = a.SliderProSlide.prototype.destroy;
    a.SliderProSlide.prototype.destroy = function () {
        "undefined" != typeof this.layers && (b.each(this.layers, function (a, b) {
            b.destroy()
        }), this.layers.length = 0), "undefined" != typeof this.animatedLayers && (this.animatedLayers.length = 0), e.apply(this)
    };
    var f = function (a) {
        this.$layer = a, this.visible = !1, this.styled = !1, this.data = null, this.position = null, this.horizontalProperty = null, this.verticalProperty = null, this.horizontalPosition = null, this.verticalPosition = null, this.scaleRatio = 1, this.supportedAnimation = SliderProUtils.getSupportedAnimation(), this.vendorPrefix = SliderProUtils.getVendorPrefix(), this.transitionEvent = SliderProUtils.getTransitionEvent(), this.delayTimer = null, this.stayTimer = null, this._init()
    };
    f.prototype = {
        _init: function () {
            this.$layer.attr("data-layer-init", !0), this.$layer.hasClass("sp-static") ? this._setStyle() : this.$layer.css({visibility: "hidden"})
        }, _setStyle: function () {
            this.styled = !0, this.data = this.$layer.data(), "undefined" != typeof this.data.width && this.$layer.css("width", this.data.width), "undefined" != typeof this.data.height && this.$layer.css("height", this.data.height), "undefined" != typeof this.data.depth && this.$layer.css("z-index", this.data.depth), this.position = this.data.position ? this.data.position.toLowerCase() : "topleft", -1 !== this.position.indexOf("right") ? this.horizontalProperty = "right" : -1 !== this.position.indexOf("left") ? this.horizontalProperty = "left" : this.horizontalProperty = "center", -1 !== this.position.indexOf("bottom") ? this.verticalProperty = "bottom" : -1 !== this.position.indexOf("top") ? this.verticalProperty = "top" : this.verticalProperty = "center", this._setPosition(), this.scale(this.scaleRatio)
        }, _setPosition: function () {
            var a = this.$layer.attr("style");
            this.horizontalPosition = "undefined" != typeof this.data.horizontal ? this.data.horizontal : 0, this.verticalPosition = "undefined" != typeof this.data.vertical ? this.data.vertical : 0, "center" === this.horizontalProperty ? (this.$layer.is("img") === !1 && ("undefined" == typeof a || "undefined" != typeof a && -1 === a.indexOf("width")) && (this.$layer.css("white-space", "nowrap"), this.$layer.css("width", this.$layer.outerWidth(!0))), this.$layer.css({
                marginLeft: "auto",
                marginRight: "auto",
                left: this.horizontalPosition,
                right: 0
            })) : this.$layer.css(this.horizontalProperty, this.horizontalPosition), "center" === this.verticalProperty ? (this.$layer.is("img") === !1 && ("undefined" == typeof a || "undefined" != typeof a && -1 === a.indexOf("height")) && (this.$layer.css("white-space", "nowrap"), this.$layer.css("height", this.$layer.outerHeight(!0))), this.$layer.css({
                marginTop: "auto",
                marginBottom: "auto",
                top: this.verticalPosition,
                bottom: 0
            })) : this.$layer.css(this.verticalProperty, this.verticalPosition)
        }, scale: function (a) {
            if (!this.$layer.hasClass("sp-no-scale") && (this.scaleRatio = a, this.styled !== !1)) {
                var b = "center" === this.horizontalProperty ? "left" : this.horizontalProperty,
                    c = "center" === this.verticalProperty ? "top" : this.verticalProperty, d = {};
                d[this.vendorPrefix + "transform-origin"] = this.horizontalProperty + " " + this.verticalProperty, d[this.vendorPrefix + "transform"] = "scale(" + this.scaleRatio + ")", "string" != typeof this.horizontalPosition && (d[b] = this.horizontalPosition * this.scaleRatio), "string" != typeof this.verticalPosition && (d[c] = this.verticalPosition * this.scaleRatio), "string" == typeof this.data.width && -1 !== this.data.width.indexOf("%") && (d.width = (parseInt(this.data.width, 10) / this.scaleRatio).toString() + "%"), "string" == typeof this.data.height && -1 !== this.data.height.indexOf("%") && (d.height = (parseInt(this.data.height, 10) / this.scaleRatio).toString() + "%"), this.$layer.css(d)
            }
        }, show: function (a) {
            if (this.visible !== !0) {
                this.visible = !0, this.styled === !1 && this._setStyle();
                var b = this, c = "undefined" != typeof this.data.showOffset ? this.data.showOffset : 50,
                    d = "undefined" != typeof this.data.showDuration ? this.data.showDuration / 1e3 : .4,
                    e = "undefined" != typeof this.data.showDelay ? this.data.showDelay : 10,
                    f = "undefined" != typeof b.data.stayDuration ? parseInt(b.data.stayDuration, 10) : -1;
                if ("javascript" === this.supportedAnimation) this.$layer.stop().delay(e).css({
                    opacity: 0,
                    visibility: "visible"
                }).animate({opacity: 1}, 1e3 * d, function () {
                    -1 !== f && (b.stayTimer = setTimeout(function () {
                        b.hide(), b.stayTimer = null
                    }, f)), "undefined" != typeof a && a()
                }); else {
                    var g = {opacity: 0, visibility: "visible"}, h = {opacity: 1}, i = "";
                    g[this.vendorPrefix + "transform"] = "scale(" + this.scaleRatio + ")", h[this.vendorPrefix + "transform"] = "scale(" + this.scaleRatio + ")", h[this.vendorPrefix + "transition"] = "opacity " + d + "s", "undefined" != typeof this.data.showTransition && ("left" === this.data.showTransition ? i = c + "px, 0" : "right" === this.data.showTransition ? i = "-" + c + "px, 0" : "up" === this.data.showTransition ? i = "0, " + c + "px" : "down" === this.data.showTransition && (i = "0, -" + c + "px"), g[this.vendorPrefix + "transform"] += "css-3d" === this.supportedAnimation ? " translate3d(" + i + ", 0)" : " translate(" + i + ")", h[this.vendorPrefix + "transform"] += "css-3d" === this.supportedAnimation ? " translate3d(0, 0, 0)" : " translate(0, 0)", h[this.vendorPrefix + "transition"] += ", " + this.vendorPrefix + "transform " + d + "s"), this.$layer.on(this.transitionEvent, function (c) {
                        c.target === c.currentTarget && (b.$layer.off(b.transitionEvent).css(b.vendorPrefix + "transition", ""), -1 !== f && (b.stayTimer = setTimeout(function () {
                            b.hide(), b.stayTimer = null
                        }, f)), "undefined" != typeof a && a())
                    }), this.$layer.css(g), this.delayTimer = setTimeout(function () {
                        b.$layer.css(h)
                    }, e)
                }
            }
        }, hide: function (a) {
            if (this.visible !== !1) {
                var c = this, d = "undefined" != typeof this.data.hideOffset ? this.data.hideOffset : 50,
                    e = "undefined" != typeof this.data.hideDuration ? this.data.hideDuration / 1e3 : .4,
                    f = "undefined" != typeof this.data.hideDelay ? this.data.hideDelay : 10;
                if (this.visible = !1, null !== this.stayTimer && clearTimeout(this.stayTimer), "javascript" === this.supportedAnimation) this.$layer.stop().delay(f).animate({opacity: 0}, 1e3 * e, function () {
                    b(this).css("visibility", "hidden"), "undefined" != typeof a && a()
                }); else {
                    var g = "", h = {opacity: 0};
                    h[this.vendorPrefix + "transform"] = "scale(" + this.scaleRatio + ")", h[this.vendorPrefix + "transition"] = "opacity " + e + "s", "undefined" != typeof this.data.hideTransition && ("left" === this.data.hideTransition ? g = "-" + d + "px, 0" : "right" === this.data.hideTransition ? g = d + "px, 0" : "up" === this.data.hideTransition ? g = "0, -" + d + "px" : "down" === this.data.hideTransition && (g = "0, " + d + "px"), h[this.vendorPrefix + "transform"] += "css-3d" === this.supportedAnimation ? " translate3d(" + g + ", 0)" : " translate(" + g + ")", h[this.vendorPrefix + "transition"] += ", " + this.vendorPrefix + "transform " + e + "s"), this.$layer.on(this.transitionEvent, function (b) {
                        b.target === b.currentTarget && (c.$layer.off(c.transitionEvent).css(c.vendorPrefix + "transition", ""), c.visible === !1 && c.$layer.css("visibility", "hidden"), "undefined" != typeof a && a())
                    }), this.delayTimer = setTimeout(function () {
                        c.$layer.css(h)
                    }, f)
                }
            }
        }, isVisible: function () {
            return this.visible === !1 || this.$layer.is(":hidden") ? !1 : !0
        }, destroy: function () {
            this.$layer.removeAttr("style"), this.$layer.removeAttr("data-layer-init"), clearTimeout(this.delayTimer), clearTimeout(this.stayTimer), this.delayTimer = null, this.stayTimer = null
        }
    }, b.SliderPro.addModule("Layers", d)
}(window, jQuery), function (a, b) {
    "use strict";
    var c = "Fade." + b.SliderPro.namespace, d = {
        fadeGotoSlideReference: null, initFade: function () {
            this.on("update." + c, b.proxy(this._fadeOnUpdate, this))
        }, _fadeOnUpdate: function () {
            this.settings.fade === !0 && (this.fadeGotoSlideReference = this.gotoSlide, this.gotoSlide = this._fadeGotoSlide)
        }, _fadeGotoSlide: function (a) {
            if (a !== this.selectedSlideIndex) if (this.$slider.hasClass("sp-swiping")) this.fadeGotoSlideReference(a); else {
                var c, d, e = this, f = a;
                b.each(this.slides, function (a, b) {
                    var g = b.getIndex(), h = b.$slide;
                    g === f ? (h.css({
                        opacity: 0,
                        left: 0,
                        top: 0,
                        "z-index": 20,
                        visibility: "visible"
                    }), c = h) : g === e.selectedSlideIndex ? (h.css({
                        opacity: 1,
                        left: 0,
                        top: 0,
                        "z-index": 10,
                        visibility: "visible"
                    }), d = h) : h.css({opacity: 1, visibility: "hidden", "z-index": ""})
                }), this.previousSlideIndex = this.selectedSlideIndex, this.selectedSlideIndex = a, this.$slides.find(".sp-selected").removeClass("sp-selected"), this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).addClass("sp-selected"), e.settings.loop === !0 && e._updateSlidesOrder(), this._moveTo(0, !0), this._fadeSlideTo(c, 1, function () {
                    var c = !0;
                    b.each(e.slides, function (a, b) {
                        "undefined" != typeof b.$slide.attr("data-transitioning") && (c = !1)
                    }), c === !0 && (b.each(e.slides, function (a, b) {
                        var c = b.$slide;
                        c.css({visibility: "", opacity: "", "z-index": ""})
                    }), e._resetSlidesPosition()), e.trigger({
                        type: "gotoSlideComplete",
                        index: a,
                        previousIndex: e.previousSlideIndex
                    }), b.isFunction(e.settings.gotoSlideComplete) && e.settings.gotoSlideComplete.call(e, {
                        type: "gotoSlideComplete",
                        index: a,
                        previousIndex: e.previousSlideIndex
                    })
                }), this.settings.fadeOutPreviousSlide === !0 && this._fadeSlideTo(d, 0), this.settings.autoHeight === !0 && this._resizeHeight(), this.trigger({
                    type: "gotoSlide",
                    index: a,
                    previousIndex: this.previousSlideIndex
                }), b.isFunction(this.settings.gotoSlide) && this.settings.gotoSlide.call(this, {
                    type: "gotoSlide",
                    index: a,
                    previousIndex: this.previousSlideIndex
                })
            }
        }, _fadeSlideTo: function (a, b, c) {
            var d = this;
            1 === b && a.attr("data-transitioning", !0), "css-3d" === this.supportedAnimation || "css-2d" === this.supportedAnimation ? (setTimeout(function () {
                var c = {opacity: b};
                c[d.vendorPrefix + "transition"] = "opacity " + d.settings.fadeDuration / 1e3 + "s", a.css(c)
            }, 100), a.on(this.transitionEvent, function (b) {
                b.target === b.currentTarget && (a.off(d.transitionEvent), a.css(d.vendorPrefix + "transition", ""), a.removeAttr("data-transitioning"), "function" == typeof c && c())
            })) : a.stop().animate({opacity: b}, this.settings.fadeDuration, function () {
                a.removeAttr("data-transitioning"), "function" == typeof c && c()
            })
        }, destroyFade: function () {
            this.off("update." + c), null !== this.fadeGotoSlideReference && (this.gotoSlide = this.fadeGotoSlideReference)
        }, fadeDefaults: {fade: !1, fadeOutPreviousSlide: !0, fadeDuration: 500}
    };
    b.SliderPro.addModule("Fade", d)
}(window, jQuery), function (a, b) {
    "use strict";
    var c = "TouchSwipe." + b.SliderPro.namespace, d = {
        touchStartPoint: {x: 0, y: 0},
        touchEndPoint: {x: 0, y: 0},
        touchDistance: {x: 0, y: 0},
        touchStartPosition: 0,
        isTouchMoving: !1,
        touchSwipeEvents: {startEvent: "", moveEvent: "", endEvent: ""},
        allowOppositeScrolling: !0,
        initTouchSwipe: function () {
            var a = this;
            this.settings.touchSwipe !== !1 && (this.touchSwipeEvents.startEvent = "touchstart." + c + " mousedown." + c, this.touchSwipeEvents.moveEvent = "touchmove." + c + " mousemove." + c, this.touchSwipeEvents.endEvent = "touchend." + this.uniqueId + "." + c + " mouseup." + this.uniqueId + "." + c, this.$slidesMask.on(this.touchSwipeEvents.startEvent, b.proxy(this._onTouchStart, this)), this.$slidesMask.on("dragstart." + c, function (a) {
                a.preventDefault()
            }), this.$slidesMask.find("a").on("click." + c, function (b) {
                "undefined" == typeof b.originalEvent.touches && a.$slider.hasClass("sp-swiping") && b.preventDefault()
            }), this.$slidesMask.addClass("sp-grab"))
        },
        _onTouchStart: function (a) {
            if (!(b(a.target).closest(".sp-selectable").length >= 1)) {
                var c = "undefined" != typeof a.originalEvent.touches ? a.originalEvent.touches[0] : a.originalEvent;
                this.touchStartPoint.x = c.pageX || c.clientX, this.touchStartPoint.y = c.pageY || c.clientY, this.touchStartPosition = this.slidesPosition, this.touchDistance.x = this.touchDistance.y = 0, this.$slides.hasClass("sp-animated") && (this.isTouchMoving = !0, this._stopMovement(), this.touchStartPosition = this.slidesPosition), b(document).on(this.touchSwipeEvents.moveEvent, b.proxy(this._onTouchMove, this)), b(document).on(this.touchSwipeEvents.endEvent, b.proxy(this._onTouchEnd, this)), this.$slidesMask.removeClass("sp-grab").addClass("sp-grabbing"), this.$slider.addClass("sp-swiping")
            }
        },
        _onTouchMove: function (a) {
            var b = "undefined" != typeof a.originalEvent.touches ? a.originalEvent.touches[0] : a.originalEvent;
            this.isTouchMoving = !0, this.touchEndPoint.x = b.pageX || b.clientX, this.touchEndPoint.y = b.pageY || b.clientY, this.touchDistance.x = this.touchEndPoint.x - this.touchStartPoint.x, this.touchDistance.y = this.touchEndPoint.y - this.touchStartPoint.y;
            var c = "horizontal" === this.settings.orientation ? this.touchDistance.x : this.touchDistance.y,
                d = "horizontal" === this.settings.orientation ? this.touchDistance.y : this.touchDistance.x;
            Math.abs(c) > Math.abs(d) && (this.allowOppositeScrolling = !1), this.allowOppositeScrolling !== !0 && (a.preventDefault(), this.settings.loop === !1 && (this.slidesPosition > this.touchStartPosition && 0 === this.selectedSlideIndex || this.slidesPosition < this.touchStartPosition && this.selectedSlideIndex === this.getTotalSlides() - 1) && (c = .2 * c), this._moveTo(this.touchStartPosition + c, !0))
        },
        _onTouchEnd: function (a) {
            var c = this, d = "horizontal" === this.settings.orientation ? this.touchDistance.x : this.touchDistance.y;
            if (b(document).off(this.touchSwipeEvents.moveEvent), b(document).off(this.touchSwipeEvents.endEvent), this.allowOppositeScrolling = !0, this.$slidesMask.removeClass("sp-grabbing").addClass("sp-grab"), (this.isTouchMoving === !1 || this.isTouchMoving === !0 && Math.abs(this.touchDistance.x) < 10 && Math.abs(this.touchDistance.y) < 10) && this.$slider.removeClass("sp-swiping"), setTimeout(function () {
                c.$slider.removeClass("sp-swiping")
            }, 1), this.isTouchMoving !== !1) {
                this.isTouchMoving = !1;
                var e = this.settings.centerSelectedSlide === !0 ? Math.round((parseInt(this.$slidesMask.css(this.sizeProperty), 10) - this.getSlideAt(this.selectedSlideIndex).getSize()[this.sizeProperty]) / 2) : 0,
                    f = -parseInt(this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).css(this.positionProperty), 10) + e;
                if (Math.abs(d) < this.settings.touchSwipeThreshold) this._moveTo(f); else {
                    var g = (this.settings.rightToLeft === !0 && "horizontal" === this.settings.orientation ? -1 : 1) * d / (this.averageSlideSize + this.settings.slideDistance);
                    g = parseInt(g, 10) + (g > 0 ? 1 : -1);
                    var h = this.slidesOrder[b.inArray(this.selectedSlideIndex, this.slidesOrder) - g];
                    this.settings.loop === !0 ? this.gotoSlide(h) : "undefined" != typeof h ? this.gotoSlide(h) : this._moveTo(f)
                }
            }
        },
        destroyTouchSwipe: function () {
            this.$slidesMask.off("dragstart." + c), this.$slidesMask.find("a").off("click." + c), this.$slidesMask.off(this.touchSwipeEvents.startEvent), b(document).off(this.touchSwipeEvents.moveEvent), b(document).off(this.touchSwipeEvents.endEvent), this.$slidesMask.removeClass("sp-grab")
        },
        touchSwipeDefaults: {touchSwipe: !0, touchSwipeThreshold: 50}
    };
    b.SliderPro.addModule("TouchSwipe", d)
}(window, jQuery), function (a, b) {
    "use strict";
    var c = "Caption." + b.SliderPro.namespace, d = {
        $captionContainer: null, captionContent: "", initCaption: function () {
            this.on("update." + c, b.proxy(this._captionOnUpdate, this)), this.on("gotoSlide." + c, b.proxy(this._updateCaptionContent, this))
        }, _captionOnUpdate: function () {
            this.$captionContainer = this.$slider.find(".sp-caption-container"),
            this.$slider.find(".sp-caption").length && 0 === this.$captionContainer.length && (this.$captionContainer = b('<div class="sp-caption-container"></div>').appendTo(this.$slider), this._updateCaptionContent()), this.$slides.find(".sp-caption").each(function () {
                b(this).css("display", "none")
            })
        }, _updateCaptionContent: function () {
            var a = this, b = this.$slider.find(".sp-slide").eq(this.selectedSlideIndex).find(".sp-caption"),
                c = 0 !== b.length ? b.html() : "";
            this.settings.fadeCaption === !0 ? "" !== this.captionContent ? (0 === parseFloat(this.$captionContainer.css("opacity"), 10) && (this.$captionContainer.css(this.vendorPrefix + "transition", ""), this.$captionContainer.css("opacity", 1)), this._fadeCaptionTo(0, function () {
                a.captionContent = c, "" !== c ? (a.$captionContainer.html(a.captionContent), a._fadeCaptionTo(1)) : a.$captionContainer.empty()
            })) : (this.captionContent = c, this.$captionContainer.html(this.captionContent), this.$captionContainer.css("opacity", 0), this._fadeCaptionTo(1)) : (this.captionContent = c, this.$captionContainer.html(this.captionContent))
        }, _fadeCaptionTo: function (a, b) {
            var c = this;
            "css-3d" === this.supportedAnimation || "css-2d" === this.supportedAnimation ? (setTimeout(function () {
                var b = {opacity: a};
                b[c.vendorPrefix + "transition"] = "opacity " + c.settings.captionFadeDuration / 1e3 + "s", c.$captionContainer.css(b)
            }, 1), this.$captionContainer.on(this.transitionEvent, function (a) {
                a.target === a.currentTarget && (c.$captionContainer.off(c.transitionEvent), c.$captionContainer.css(c.vendorPrefix + "transition", ""), "function" == typeof b && b())
            })) : this.$captionContainer.stop().animate({opacity: a}, this.settings.captionFadeDuration, function () {
                "function" == typeof b && b()
            })
        }, destroyCaption: function () {
            this.off("update." + c), this.off("gotoSlide." + c), this.$captionContainer.remove(), this.$slider.find(".sp-caption").each(function () {
                b(this).css("display", "")
            })
        }, captionDefaults: {fadeCaption: !0, captionFadeDuration: 500}
    };
    b.SliderPro.addModule("Caption", d)
}(window, jQuery), function (a, b) {
    "use strict";
    var c = "DeepLinking." + b.SliderPro.namespace, d = {
        initDeepLinking: function () {
            var d = this;
            this.on("init." + c, function () {
                d._gotoHash(a.location.hash)
            }), this.on("gotoSlide." + c, function (b) {
                if (d.settings.updateHash === !0) {
                    var c = d.$slider.find(".sp-slide").eq(b.index).attr("id");
                    "undefined" == typeof c && (c = b.index), a.location.hash = d.$slider.attr("id") + "/" + c
                }
            }), b(a).on("hashchange." + this.uniqueId + "." + c, function () {
                d._gotoHash(a.location.hash)
            })
        }, _parseHash: function (a) {
            if ("" !== a) {
                a = a.substring(1);
                var b = a.split("/"), c = b.pop(), d = a.slice(0, -c.toString().length - 1);
                if (this.$slider.attr("id") === d) return {sliderID: d, slideId: c}
            }
            return !1
        }, _gotoHash: function (a) {
            var b = this._parseHash(a);
            if (b !== !1) {
                var c = b.slideId, d = parseInt(c, 10);
                if (isNaN(d)) {
                    var e = this.$slider.find(".sp-slide#" + c).index();
                    -1 !== e && e !== this.selectedSlideIndex && this.gotoSlide(e)
                } else d !== this.selectedSlideIndex && this.gotoSlide(d)
            }
        }, destroyDeepLinking: function () {
            this.off("init." + c), this.off("gotoSlide." + c), b(a).off("hashchange." + this.uniqueId + "." + c)
        }, deepLinkingDefaults: {updateHash: !1}
    };
    b.SliderPro.addModule("DeepLinking", d)
}(window, jQuery), function (a, b) {
    "use strict";
    var c = "Autoplay." + b.SliderPro.namespace, d = {
        autoplayTimer: null, isTimerRunning: !1, isTimerPaused: !1, initAutoplay: function () {
            this.on("update." + c, b.proxy(this._autoplayOnUpdate, this))
        }, _autoplayOnUpdate: function (a) {
            this.settings.autoplay === !0 ? (this.on("gotoSlide." + c, b.proxy(this._autoplayOnGotoSlide, this)), this.on("mouseenter." + c, b.proxy(this._autoplayOnMouseEnter, this)), this.on("mouseleave." + c, b.proxy(this._autoplayOnMouseLeave, this)), this.startAutoplay()) : (this.off("gotoSlide." + c), this.off("mouseenter." + c), this.off("mouseleave." + c), this.stopAutoplay())
        }, _autoplayOnGotoSlide: function (a) {
            this.isTimerRunning === !0 && this.stopAutoplay(), this.isTimerPaused === !1 && this.startAutoplay()
        }, _autoplayOnMouseEnter: function (a) {
            !this.isTimerRunning || "pause" !== this.settings.autoplayOnHover && "stop" !== this.settings.autoplayOnHover || (this.stopAutoplay(), this.isTimerPaused = !0)
        }, _autoplayOnMouseLeave: function (a) {
            this.settings.autoplay === !0 && this.isTimerRunning === !1 && "stop" !== this.settings.autoplayOnHover && (this.startAutoplay(), this.isTimerPaused = !1)
        }, startAutoplay: function () {
            var a = this;
            this.isTimerRunning = !0, this.autoplayTimer = setTimeout(function () {
                "normal" === a.settings.autoplayDirection ? a.nextSlide() : "backwards" === a.settings.autoplayDirection && a.previousSlide()
            }, this.settings.autoplayDelay)
        }, stopAutoplay: function () {
            this.isTimerRunning = !1, this.isTimerPaused = !1, clearTimeout(this.autoplayTimer)
        }, destroyAutoplay: function () {
            clearTimeout(this.autoplayTimer), this.off("update." + c), this.off("gotoSlide." + c), this.off("mouseenter." + c), this.off("mouseleave." + c)
        }, autoplayDefaults: {autoplay: !0, autoplayDelay: 5e3, autoplayDirection: "normal", autoplayOnHover: "pause"}
    };
    b.SliderPro.addModule("Autoplay", d)
}(window, jQuery), function (a, b) {
    "use strict";
    var c = "Keyboard." + b.SliderPro.namespace, d = {
        initKeyboard: function () {
            var a = this, d = !1;
            this.settings.keyboard !== !1 && (this.$slider.on("focus." + c, function () {
                d = !0
            }), this.$slider.on("blur." + c, function () {
                d = !1
            }), b(document).on("keydown." + this.uniqueId + "." + c, function (b) {
                if (a.settings.keyboardOnlyOnFocus !== !0 || d !== !1) if (37 === b.which) a.previousSlide(); else if (39 === b.which) a.nextSlide(); else if (13 === b.which) {
                    var c = a.$slider.find(".sp-slide").eq(a.selectedSlideIndex).find(".sp-image-container a");
                    0 !== c.length && c[0].click()
                }
            }))
        }, destroyKeyboard: function () {
            this.$slider.off("focus." + c), this.$slider.off("blur." + c), b(document).off("keydown." + this.uniqueId + "." + c)
        }, keyboardDefaults: {keyboard: !0, keyboardOnlyOnFocus: !1}
    };
    b.SliderPro.addModule("Keyboard", d)
}(window, jQuery), function (a, b) {
    "use strict";
    var c = "FullScreen." + b.SliderPro.namespace, d = {
        isFullScreen: !1, $fullScreenButton: null, sizeBeforeFullScreen: {}, initFullScreen: function () {
            (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) && this.on("update." + c, b.proxy(this._fullScreenOnUpdate, this))
        }, _fullScreenOnUpdate: function () {
            this.settings.fullScreen === !0 && null === this.$fullScreenButton ? this._addFullScreen() : this.settings.fullScreen === !1 && null !== this.$fullScreenButton && this._removeFullScreen(), this.settings.fullScreen === !0 && (this.settings.fadeFullScreen === !0 ? this.$fullScreenButton.addClass("sp-fade-full-screen") : this.settings.fadeFullScreen === !1 && this.$fullScreenButton.removeClass("sp-fade-full-screen"))
        }, _addFullScreen: function () {
            this.$fullScreenButton = b('<div class="sp-full-screen-button"></div>').appendTo(this.$slider), this.$fullScreenButton.on("click." + c, b.proxy(this._onFullScreenButtonClick, this)), document.addEventListener("fullscreenchange", b.proxy(this._onFullScreenChange, this)), document.addEventListener("mozfullscreenchange", b.proxy(this._onFullScreenChange, this)), document.addEventListener("webkitfullscreenchange", b.proxy(this._onFullScreenChange, this)), document.addEventListener("MSFullscreenChange", b.proxy(this._onFullScreenChange, this))
        }, _removeFullScreen: function () {
            null !== this.$fullScreenButton && (this.$fullScreenButton.off("click." + c), this.$fullScreenButton.remove(), this.$fullScreenButton = null, document.removeEventListener("fullscreenchange", this._onFullScreenChange), document.removeEventListener("mozfullscreenchange", this._onFullScreenChange), document.removeEventListener("webkitfullscreenchange", this._onFullScreenChange), document.removeEventListener("MSFullscreenChange", this._onFullScreenChange))
        }, _onFullScreenButtonClick: function () {
            this.isFullScreen === !1 ? this.instance.requestFullScreen ? this.instance.requestFullScreen() : this.instance.mozRequestFullScreen ? this.instance.mozRequestFullScreen() : this.instance.webkitRequestFullScreen ? this.instance.webkitRequestFullScreen() : this.instance.msRequestFullscreen && this.instance.msRequestFullscreen() : document.exitFullScreen ? document.exitFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()
        }, _onFullScreenChange: function () {
            this.isFullScreen = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement ? !0 : !1, this.isFullScreen === !0 ? (this.sizeBeforeFullScreen = {
                forceSize: this.settings.forceSize,
                autoHeight: this.settings.autoHeight
            }, this.$slider.addClass("sp-full-screen"), this.settings.forceSize = "fullWindow", this.settings.autoHeight = !1) : (this.$slider.css("margin", ""), this.$slider.removeClass("sp-full-screen"), this.settings.forceSize = this.sizeBeforeFullScreen.forceSize, this.settings.autoHeight = this.sizeBeforeFullScreen.autoHeight), this.resize()
        }, destroyFullScreen: function () {
            this.off("update." + c), this._removeFullScreen()
        }, fullScreenDefaults: {fullScreen: !1, fadeFullScreen: !0}
    };
    b.SliderPro.addModule("FullScreen", d)
}(window, jQuery), function (a, b) {
    "use strict";
    var c = "Buttons." + b.SliderPro.namespace, d = {
        $buttons: null, initButtons: function () {
            this.on("update." + c, b.proxy(this._buttonsOnUpdate, this))
        }, _buttonsOnUpdate: function () {
            this.$buttons = this.$slider.find(".sp-buttons"), this.settings.buttons === !0 && this.getTotalSlides() > 1 && 0 === this.$buttons.length ? this._createButtons() : this.settings.buttons === !0 && this.getTotalSlides() !== this.$buttons.find(".sp-button").length && 0 !== this.$buttons.length ? this._adjustButtons() : (this.settings.buttons === !1 || this.getTotalSlides() <= 1 && 0 !== this.$buttons.length) && this._removeButtons()
        }, _createButtons: function () {
            var a = this;
            this.$buttons = b('<div class="sp-buttons"></div>').appendTo(this.$slider);
            for (var d = 0; d < this.getTotalSlides(); d++) b('<div class="sp-button"></div>').appendTo(this.$buttons);
            this.$buttons.on("click." + c, ".sp-button", function () {
                a.gotoSlide(b(this).index())
            }), this.$buttons.find(".sp-button").eq(this.selectedSlideIndex).addClass("sp-selected-button"), this.on("gotoSlide." + c, function (b) {
                a.$buttons.find(".sp-selected-button").removeClass("sp-selected-button"), a.$buttons.find(".sp-button").eq(b.index).addClass("sp-selected-button")
            }), this.$slider.addClass("sp-has-buttons")
        }, _adjustButtons: function () {
            this.$buttons.empty();
            for (var a = 0; a < this.getTotalSlides(); a++) b('<div class="sp-button"></div>').appendTo(this.$buttons);
            this.$buttons.find(".sp-selected-button").removeClass("sp-selected-button"), this.$buttons.find(".sp-button").eq(this.selectedSlideIndex).addClass("sp-selected-button")
        }, _removeButtons: function () {
            this.$buttons.off("click." + c, ".sp-button"), this.off("gotoSlide." + c), this.$buttons.remove(), this.$slider.removeClass("sp-has-buttons")
        }, destroyButtons: function () {
            this._removeButtons(), this.off("update." + c)
        }, buttonsDefaults: {buttons: !0}
    };
    b.SliderPro.addModule("Buttons", d)
}(window, jQuery), function (a, b) {
    "use strict";
    var c = "Arrows." + b.SliderPro.namespace, d = {
        $arrows: null, $previousArrow: null, $nextArrow: null, initArrows: function () {
            this.on("update." + c, b.proxy(this._arrowsOnUpdate, this)), this.on("gotoSlide." + c, b.proxy(this._checkArrowsVisibility, this))
        }, _arrowsOnUpdate: function () {
            var a = this;
            this.settings.arrows === !0 && null === this.$arrows ? (this.$arrows = b('<div class="sp-arrows"></div>').appendTo(this.$slidesContainer), this.$previousArrow = b('<div class="sp-arrow sp-previous-arrow"></div>').appendTo(this.$arrows), this.$nextArrow = b('<div class="sp-arrow sp-next-arrow"></div>').appendTo(this.$arrows), this.$previousArrow.on("click." + c, function () {
                a.previousSlide()
            }), this.$nextArrow.on("click." + c, function () {
                a.nextSlide()
            }), this._checkArrowsVisibility()) : this.settings.arrows === !1 && null !== this.$arrows && this._removeArrows(), this.settings.arrows === !0 && (this.settings.fadeArrows === !0 ? this.$arrows.addClass("sp-fade-arrows") : this.settings.fadeArrows === !1 && this.$arrows.removeClass("sp-fade-arrows"))
        }, _checkArrowsVisibility: function () {
            this.settings.arrows !== !1 && this.settings.loop !== !0 && (0 === this.selectedSlideIndex ? this.$previousArrow.css("display", "none") : this.$previousArrow.css("display", "block"), this.selectedSlideIndex === this.getTotalSlides() - 1 ? this.$nextArrow.css("display", "none") : this.$nextArrow.css("display", "block"))
        }, _removeArrows: function () {
            null !== this.$arrows && (this.$previousArrow.off("click." + c), this.$nextArrow.off("click." + c), this.$arrows.remove(), this.$arrows = null)
        }, destroyArrows: function () {
            this._removeArrows(), this.off("update." + c), this.off("gotoSlide." + c)
        }, arrowsDefaults: {arrows: !1, fadeArrows: !0}
    };
    b.SliderPro.addModule("Arrows", d)
}(window, jQuery), function (a, b) {
    "use strict";
    var c = "ThumbnailTouchSwipe." + b.SliderPro.namespace, d = {
        thumbnailTouchStartPoint: {x: 0, y: 0},
        thumbnailTouchEndPoint: {x: 0, y: 0},
        thumbnailTouchDistance: {x: 0, y: 0},
        thumbnailTouchStartPosition: 0,
        isThumbnailTouchMoving: !1,
        isThumbnailTouchSwipe: !1,
        thumbnailTouchSwipeEvents: {startEvent: "", moveEvent: "", endEvent: ""},
        initThumbnailTouchSwipe: function () {
            this.on("update." + c, b.proxy(this._thumbnailTouchSwipeOnUpdate, this))
        },
        _thumbnailTouchSwipeOnUpdate: function () {
            this.isThumbnailScroller !== !1 && (this.settings.thumbnailTouchSwipe === !0 && this.isThumbnailTouchSwipe === !1 && (this.isThumbnailTouchSwipe = !0, this.thumbnailTouchSwipeEvents.startEvent = "touchstart." + c + " mousedown." + c, this.thumbnailTouchSwipeEvents.moveEvent = "touchmove." + c + " mousemove." + c, this.thumbnailTouchSwipeEvents.endEvent = "touchend." + this.uniqueId + "." + c + " mouseup." + this.uniqueId + "." + c, this.$thumbnails.on(this.thumbnailTouchSwipeEvents.startEvent, b.proxy(this._onThumbnailTouchStart, this)), this.$thumbnails.on("dragstart." + c, function (a) {
                a.preventDefault()
            }), this.$thumbnails.addClass("sp-grab")), b.each(this.thumbnails, function (a, b) {
                b.off("thumbnailClick")
            }))
        },
        _onThumbnailTouchStart: function (a) {
            if (!(b(a.target).closest(".sp-selectable").length >= 1)) {
                var d = "undefined" != typeof a.originalEvent.touches ? a.originalEvent.touches[0] : a.originalEvent;
                "undefined" == typeof a.originalEvent.touches && a.preventDefault(), b(a.target).parents(".sp-thumbnail-container").find("a").one("click." + c, function (a) {
                    a.preventDefault()
                }), this.thumbnailTouchStartPoint.x = d.pageX || d.clientX, this.thumbnailTouchStartPoint.y = d.pageY || d.clientY, this.thumbnailTouchStartPosition = this.thumbnailsPosition, this.thumbnailTouchDistance.x = this.thumbnailTouchDistance.y = 0, this.$thumbnails.hasClass("sp-animated") && (this.isThumbnailTouchMoving = !0, this._stopThumbnailsMovement(), this.thumbnailTouchStartPosition = this.thumbnailsPosition), this.$thumbnails.on(this.thumbnailTouchSwipeEvents.moveEvent, b.proxy(this._onThumbnailTouchMove, this)), b(document).on(this.thumbnailTouchSwipeEvents.endEvent, b.proxy(this._onThumbnailTouchEnd, this)), this.$thumbnails.removeClass("sp-grab").addClass("sp-grabbing"), this.$thumbnailsContainer.addClass("sp-swiping")
            }
        },
        _onThumbnailTouchMove: function (a) {
            var b = "undefined" != typeof a.originalEvent.touches ? a.originalEvent.touches[0] : a.originalEvent;
            this.isThumbnailTouchMoving = !0, this.thumbnailTouchEndPoint.x = b.pageX || b.clientX, this.thumbnailTouchEndPoint.y = b.pageY || b.clientY, this.thumbnailTouchDistance.x = this.thumbnailTouchEndPoint.x - this.thumbnailTouchStartPoint.x, this.thumbnailTouchDistance.y = this.thumbnailTouchEndPoint.y - this.thumbnailTouchStartPoint.y;
            var c = "horizontal" === this.thumbnailsOrientation ? this.thumbnailTouchDistance.x : this.thumbnailTouchDistance.y,
                d = "horizontal" === this.thumbnailsOrientation ? this.thumbnailTouchDistance.y : this.thumbnailTouchDistance.x;
            if (Math.abs(c) > Math.abs(d)) {
                if (a.preventDefault(), this.thumbnailsPosition >= 0) {
                    var e = -this.thumbnailTouchStartPosition;
                    c = e + .2 * (c - e)
                } else if (this.thumbnailsPosition <= -this.thumbnailsSize + this.thumbnailsContainerSize) {
                    var f = this.thumbnailsSize - this.thumbnailsContainerSize + this.thumbnailTouchStartPosition;
                    c = -f + .2 * (c + f)
                }
                this._moveThumbnailsTo(this.thumbnailTouchStartPosition + c, !0)
            }
        },
        _onThumbnailTouchEnd: function (a) {
            var d = this;
            "horizontal" === this.thumbnailsOrientation ? this.thumbnailTouchDistance.x : this.thumbnailTouchDistance.y;
            if (this.$thumbnails.off(this.thumbnailTouchSwipeEvents.moveEvent), b(document).off(this.thumbnailTouchSwipeEvents.endEvent), this.$thumbnails.removeClass("sp-grabbing").addClass("sp-grab"), this.isThumbnailTouchMoving === !1 || this.isThumbnailTouchMoving === !0 && Math.abs(this.thumbnailTouchDistance.x) < 10 && Math.abs(this.thumbnailTouchDistance.y) < 10) {
                var e = b(a.target).hasClass("sp-thumbnail-container") ? b(a.target) : b(a.target).parents(".sp-thumbnail-container"),
                    f = e.index();
                return void (0 !== b(a.target).parents("a").length ? (b(a.target).parents("a").off("click." + c), this.$thumbnailsContainer.removeClass("sp-swiping")) : f !== this.selectedThumbnailIndex && -1 !== f && this.gotoSlide(f))
            }
            this.isThumbnailTouchMoving = !1, b(a.target).parents(".sp-thumbnail").one("click", function (a) {
                a.preventDefault()
            }), setTimeout(function () {
                d.$thumbnailsContainer.removeClass("sp-swiping")
            }, 1), this.thumbnailsPosition > 0 ? this._moveThumbnailsTo(0) : this.thumbnailsPosition < this.thumbnailsContainerSize - this.thumbnailsSize && this._moveThumbnailsTo(this.thumbnailsContainerSize - this.thumbnailsSize), this.trigger({type: "thumbnailsMoveComplete"}), b.isFunction(this.settings.thumbnailsMoveComplete) && this.settings.thumbnailsMoveComplete.call(this, {type: "thumbnailsMoveComplete"})
        },
        destroyThumbnailTouchSwipe: function () {
            this.off("update." + c), this.isThumbnailScroller !== !1 && (this.$thumbnails.off(this.thumbnailTouchSwipeEvents.startEvent), this.$thumbnails.off(this.thumbnailTouchSwipeEvents.moveEvent), this.$thumbnails.off("dragstart." + c), b(document).off(this.thumbnailTouchSwipeEvents.endEvent), this.$thumbnails.removeClass("sp-grab"))
        },
        thumbnailTouchSwipeDefaults: {thumbnailTouchSwipe: !0}
    };
    b.SliderPro.addModule("ThumbnailTouchSwipe", d)
}(window, jQuery), function (a, b) {
    "use strict";
    var c = "ThumbnailArrows." + b.SliderPro.namespace, d = {
        $thumbnailArrows: null,
        $previousThumbnailArrow: null,
        $nextThumbnailArrow: null,
        initThumbnailArrows: function () {
            var a = this;
            this.on("update." + c, b.proxy(this._thumbnailArrowsOnUpdate, this)), this.on("sliderResize." + c + " thumbnailsMoveComplete." + c, function () {
                a.isThumbnailScroller === !0 && a.settings.thumbnailArrows === !0 && a._checkThumbnailArrowsVisibility()
            })
        },
        _thumbnailArrowsOnUpdate: function () {
            var a = this;
            this.isThumbnailScroller !== !1 && (this.settings.thumbnailArrows === !0 && null === this.$thumbnailArrows ? (this.$thumbnailArrows = b('<div class="sp-thumbnail-arrows"></div>').appendTo(this.$thumbnailsContainer), this.$previousThumbnailArrow = b('<div class="sp-thumbnail-arrow sp-previous-thumbnail-arrow"></div>').appendTo(this.$thumbnailArrows), this.$nextThumbnailArrow = b('<div class="sp-thumbnail-arrow sp-next-thumbnail-arrow"></div>').appendTo(this.$thumbnailArrows), this.$previousThumbnailArrow.on("click." + c, function () {
                var b = Math.min(0, a.thumbnailsPosition + a.thumbnailsContainerSize);
                a._moveThumbnailsTo(b)
            }), this.$nextThumbnailArrow.on("click." + c, function () {
                var b = Math.max(a.thumbnailsContainerSize - a.thumbnailsSize, a.thumbnailsPosition - a.thumbnailsContainerSize);
                a._moveThumbnailsTo(b)
            })) : this.settings.thumbnailArrows === !1 && null !== this.$thumbnailArrows && this._removeThumbnailArrows(), this.settings.thumbnailArrows === !0 && (this.settings.fadeThumbnailArrows === !0 ? this.$thumbnailArrows.addClass("sp-fade-thumbnail-arrows") : this.settings.fadeThumbnailArrows === !1 && this.$thumbnailArrows.removeClass("sp-fade-thumbnail-arrows"), this._checkThumbnailArrowsVisibility()))
        },
        _checkThumbnailArrowsVisibility: function () {
            0 === this.thumbnailsPosition ? this.$previousThumbnailArrow.css("display", "none") : this.$previousThumbnailArrow.css("display", "block"), this.thumbnailsPosition === this.thumbnailsContainerSize - this.thumbnailsSize ? this.$nextThumbnailArrow.css("display", "none") : this.$nextThumbnailArrow.css("display", "block")
        },
        _removeThumbnailArrows: function () {
            null !== this.$thumbnailArrows && (this.$previousThumbnailArrow.off("click." + c), this.$nextThumbnailArrow.off("click." + c), this.$thumbnailArrows.remove(), this.$thumbnailArrows = null)
        },
        destroyThumbnailArrows: function () {
            this._removeThumbnailArrows(), this.off("update." + c), this.off("sliderResize." + c), this.off("thumbnailsMoveComplete." + c)
        },
        thumbnailArrowsDefaults: {thumbnailArrows: !1, fadeThumbnailArrows: !0}
    };
    b.SliderPro.addModule("ThumbnailArrows", d)
}(window, jQuery), function (a, b) {
    "use strict";
    var c = "Video." + b.SliderPro.namespace, d = {
        firstInit: !1,
        initVideo: function () {
            this.on("update." + c, b.proxy(this._videoOnUpdate, this)), this.on("gotoSlideComplete." + c, b.proxy(this._videoOnGotoSlideComplete, this))
        },
        _videoOnUpdate: function () {
            var a = this;
            this.$slider.find(".sp-video").not("a, [data-video-init]").each(function () {
                var c = b(this);
                a._initVideo(c)
            }), this.$slider.find("a.sp-video").not("[data-video-preinit]").each(function () {
                var c = b(this);
                a._preinitVideo(c)
            }), this.firstInit === !1 && (this.firstInit = !0, this._videoOnGotoSlideComplete({
                index: this.selectedSlideIndex,
                previousIndex: -1
            }))
        },
        _initVideo: function (a) {
            var d = this;
            a.attr("data-video-init", !0).videoController(), a.on("videoPlay." + c, function () {
                "stopAutoplay" === d.settings.playVideoAction && "undefined" != typeof d.stopAutoplay && (d.stopAutoplay(), d.settings.autoplay = !1);
                var c = {type: "videoPlay", video: a};
                d.trigger(c), b.isFunction(d.settings.videoPlay) && d.settings.videoPlay.call(d, c)
            }), a.on("videoPause." + c, function () {
                "startAutoplay" === d.settings.pauseVideoAction && "undefined" != typeof d.startAutoplay && (d.startAutoplay(), d.settings.autoplay = !0);
                var c = {type: "videoPause", video: a};
                d.trigger(c), b.isFunction(d.settings.videoPause) && d.settings.videoPause.call(d, c)
            }), a.on("videoEnded." + c, function () {
                "startAutoplay" === d.settings.endVideoAction && "undefined" != typeof d.startAutoplay ? (d.startAutoplay(), d.settings.autoplay = !0) : "nextSlide" === d.settings.endVideoAction ? d.nextSlide() : "replayVideo" === d.settings.endVideoAction && a.videoController("replay");
                var c = {type: "videoEnd", video: a};
                d.trigger(c), b.isFunction(d.settings.videoEnd) && d.settings.videoEnd.call(d, c)
            })
        },
        _preinitVideo: function (a) {
            var d = this;
            a.attr("data-video-preinit", !0), a.on("click." + c, function (c) {
                if (!d.$slider.hasClass("sp-swiping")) {
                    c.preventDefault();
                    var e, f, g, h, i, j, k, l = a.attr("href"),
                        m = a.children("img").attr("width") || a.children("img").width(),
                        n = a.children("img").attr("height") || a.children("img").height();
                    -1 !== l.indexOf("youtube") || -1 !== l.indexOf("youtu.be") ? f = "youtube" : -1 !== l.indexOf("vimeo") && (f = "vimeo"), g = "youtube" === f ? /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/ : /http:\/\/(www\.)?vimeo.com\/(\d+)/, h = l.match(g), i = h[2], j = "youtube" === f ? "//www.youtube.com/embed/" + i + "?enablejsapi=1&wmode=opaque" : "//player.vimeo.com/video/" + i + "?api=1", k = l.split("?")[1], "undefined" != typeof k && (k = k.split("&"), b.each(k, function (a, b) {
                        -1 === b.indexOf(i) && (j += "&" + b)
                    })), e = b("<iframe></iframe>").attr({
                        src: j,
                        width: m,
                        height: n,
                        "class": a.attr("class"),
                        frameborder: 0,
                        allowfullscreen: "allowfullscreen"
                    }).insertBefore(a), d._initVideo(e), e.videoController("play"), a.css("display", "none")
                }
            })
        },
        _videoOnGotoSlideComplete: function (a) {
            var b = this.$slides.find(".sp-slide").eq(a.previousIndex).find(".sp-video[data-video-init]");
            if (-1 !== a.previousIndex && 0 !== b.length && ("stopVideo" === this.settings.leaveVideoAction ? b.videoController("stop") : "pauseVideo" === this.settings.leaveVideoAction ? b.videoController("pause") : "removeVideo" === this.settings.leaveVideoAction && (0 !== b.siblings("a.sp-video").length ? (b.siblings("a.sp-video").css("display", ""), b.videoController("destroy"), b.remove()) : b.videoController("stop"))), "playVideo" === this.settings.reachVideoAction) {
                var d = this.$slides.find(".sp-slide").eq(a.index).find(".sp-video[data-video-init]"),
                    e = this.$slides.find(".sp-slide").eq(a.index).find(".sp-video[data-video-preinit]");
                0 !== d.length ? d.videoController("play") : 0 !== e.length && e.trigger("click." + c)
            }
        },
        destroyVideo: function () {
            this.$slider.find(".sp-video[ data-video-preinit ]").each(function () {
                var a = b(this);
                a.removeAttr("data-video-preinit"), a.off("click." + c)
            }), this.$slider.find(".sp-video[ data-video-init ]").each(function () {
                var a = b(this);
                a.removeAttr("data-video-init"), a.off("Video"), a.videoController("destroy")
            }), this.off("update." + c), this.off("gotoSlideComplete." + c)
        },
        videoDefaults: {
            reachVideoAction: "none",
            leaveVideoAction: "pauseVideo",
            playVideoAction: "stopAutoplay",
            pauseVideoAction: "none",
            endVideoAction: "none",
            videoPlay: function () {
            },
            videoPause: function () {
            },
            videoEnd: function () {
            }
        }
    };
    b.SliderPro.addModule("Video", d)
}(window, jQuery), function (a) {
    "use strict";
    var b = window.navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? !0 : !1, c = function (b, c) {
        this.$video = a(b), this.options = c, this.settings = {}, this.player = null, this._init()
    };
    c.prototype = {
        _init: function () {
            this.settings = a.extend({}, this.defaults, this.options);
            var b = this, c = a.VideoController.players, d = this.$video.attr("id");
            for (var e in c) if ("undefined" != typeof c[e] && c[e].isType(this.$video)) {
                this.player = new c[e](this.$video);
                break
            }
            if (null !== this.player) {
                var f = ["ready", "start", "play", "pause", "ended"];
                a.each(f, function (c, e) {
                    var f = "video" + e.charAt(0).toUpperCase() + e.slice(1);
                    b.player.on(e, function () {
                        b.trigger({type: f, video: d}), a.isFunction(b.settings[f]) && b.settings[f].call(b, {
                            type: f,
                            video: d
                        })
                    })
                })
            }
        }, play: function () {
            b === !0 && this.player.isStarted() === !1 || "playing" === this.player.getState() || this.player.play()
        }, stop: function () {
            b === !0 && this.player.isStarted() === !1 || "stopped" === this.player.getState() || this.player.stop()
        }, pause: function () {
            b === !0 && this.player.isStarted() === !1 || "paused" === this.player.getState() || this.player.pause()
        }, replay: function () {
            (b !== !0 || this.player.isStarted() !== !1) && this.player.replay()
        }, on: function (a, b) {
            return this.$video.on(a, b)
        }, off: function (a) {
            return this.$video.off(a)
        }, trigger: function (a) {
            return this.$video.triggerHandler(a)
        }, destroy: function () {
            this.player.isStarted() === !0 && this.stop(), this.player.off("ready"), this.player.off("start"), this.player.off("play"), this.player.off("pause"), this.player.off("ended"), this.$video.removeData("videoController")
        }, defaults: {
            videoReady: function () {
            }, videoStart: function () {
            }, videoPlay: function () {
            }, videoPause: function () {
            }, videoEnded: function () {
            }
        }
    }, a.VideoController = {
        players: {}, addPlayer: function (a, b) {
            this.players[a] = b
        }
    }, a.fn.videoController = function (b) {
        var d = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            if ("undefined" == typeof a(this).data("videoController")) {
                var e = new c(this, b);
                a(this).data("videoController", e)
            } else if ("undefined" != typeof b) {
                var f = a(this).data("videoController");
                "function" == typeof f[b] ? f[b].apply(f, d) : a.error(b + " does not exist in videoController.")
            }
        })
    };
    var d = function (b) {
        this.$video = b, this.player = null, this.ready = !1, this.started = !1, this.state = "", this.events = a({}), this._init()
    };
    d.prototype = {
        _init: function () {
        }, play: function () {
        }, pause: function () {
        }, stop: function () {
        }, replay: function () {
        }, isType: function () {
        }, isReady: function () {
            return this.ready
        }, isStarted: function () {
            return this.started
        }, getState: function () {
            return this.state
        }, on: function (a, b) {
            return this.events.on(a, b)
        }, off: function (a) {
            return this.events.off(a)
        }, trigger: function (a) {
            return this.events.triggerHandler(a)
        }
    };
    var e = {youtubeAPIAdded: !1, youtubeVideos: []}, f = function (b) {
        this.init = !1;
        var c = window.YT && window.YT.Player;
        if ("undefined" != typeof c) d.call(this, b); else if (e.youtubeVideos.push({
            video: b,
            scope: this
        }), e.youtubeAPIAdded === !1) {
            e.youtubeAPIAdded = !0;
            var f = document.createElement("script");
            f.src = "//www.youtube.com/player_api";
            var g = document.getElementsByTagName("script")[0];
            g.parentNode.insertBefore(f, g), window.onYouTubePlayerAPIReady = function () {
                a.each(e.youtubeVideos, function (a, b) {
                    d.call(b.scope, b.video)
                })
            }
        }
    };
    f.prototype = new d, f.prototype.constructor = f, a.VideoController.addPlayer("YoutubeVideo", f), f.isType = function (a) {
        if (a.is("iframe")) {
            var b = a.attr("src");
            if (-1 !== b.indexOf("youtube.com") || -1 !== b.indexOf("youtu.be")) return !0
        }
        return !1
    }, f.prototype._init = function () {
        this.init = !0, this._setup()
    }, f.prototype._setup = function () {
        var a = this;
        this.player = new YT.Player(this.$video[0], {
            events: {
                onReady: function () {
                    a.trigger({type: "ready"}), a.ready = !0
                }, onStateChange: function (b) {
                    switch (b.data) {
                        case YT.PlayerState.PLAYING:
                            a.started === !1 && (a.started = !0, a.trigger({type: "start"})), a.state = "playing", a.trigger({type: "play"});
                            break;
                        case YT.PlayerState.PAUSED:
                            a.state = "paused", a.trigger({type: "pause"});
                            break;
                        case YT.PlayerState.ENDED:
                            a.state = "ended", a.trigger({type: "ended"})
                    }
                }
            }
        })
    }, f.prototype.play = function () {
        var a = this;
        if (this.ready === !0) this.player.playVideo(); else var b = setInterval(function () {
            a.ready === !0 && (clearInterval(b), a.player.playVideo())
        }, 100)
    }, f.prototype.pause = function () {
        b === !0 ? this.stop() : this.player.pauseVideo()
    }, f.prototype.stop = function () {
        this.player.seekTo(1), this.player.stopVideo(), this.state = "stopped"
    }, f.prototype.replay = function () {
        this.player.seekTo(1), this.player.playVideo()
    }, f.prototype.on = function (a, b) {
        var c = this;
        if (this.init === !0) d.prototype.on.call(this, a, b); else var e = setInterval(function () {
            c.init === !0 && (clearInterval(e), d.prototype.on.call(c, a, b))
        }, 100)
    };
    var g = {vimeoAPIAdded: !1, vimeoVideos: []}, h = function (b) {
        if (this.init = !1, "undefined" != typeof window.Froogaloop) d.call(this, b); else if (g.vimeoVideos.push({
            video: b,
            scope: this
        }), g.vimeoAPIAdded === !1) {
            g.vimeoAPIAdded = !0;
            var c = document.createElement("script");
            c.src = "//a.vimeocdn.com/js/froogaloop2.min.js";
            var e = document.getElementsByTagName("script")[0];
            e.parentNode.insertBefore(c, e);
            var f = setInterval(function () {
                "undefined" != typeof window.Froogaloop && (clearInterval(f), a.each(g.vimeoVideos, function (a, b) {
                    d.call(b.scope, b.video)
                }))
            }, 100)
        }
    };
    h.prototype = new d, h.prototype.constructor = h, a.VideoController.addPlayer("VimeoVideo", h), h.isType = function (a) {
        if (a.is("iframe")) {
            var b = a.attr("src");
            if (-1 !== b.indexOf("vimeo.com")) return !0
        }
        return !1
    }, h.prototype._init = function () {
        this.init = !0, this._setup()
    }, h.prototype._setup = function () {
        var a = this;
        this.player = $f(this.$video[0]), this.player.addEvent("ready", function () {
            a.ready = !0, a.trigger({type: "ready"}), a.player.addEvent("play", function () {
                a.started === !1 && (a.started = !0, a.trigger({type: "start"})), a.state = "playing", a.trigger({type: "play"})
            }), a.player.addEvent("pause", function () {
                a.state = "paused", a.trigger({type: "pause"})
            }), a.player.addEvent("finish", function () {
                a.state = "ended", a.trigger({type: "ended"})
            })
        })
    }, h.prototype.play = function () {
        var a = this;
        if (this.ready === !0) this.player.api("play"); else var b = setInterval(function () {
            a.ready === !0 && (clearInterval(b), a.player.api("play"))
        }, 100)
    }, h.prototype.pause = function () {
        this.player.api("pause")
    }, h.prototype.stop = function () {
        this.player.api("seekTo", 0), this.player.api("pause"), this.state = "stopped"
    }, h.prototype.replay = function () {
        this.player.api("seekTo", 0), this.player.api("play")
    }, h.prototype.on = function (a, b) {
        var c = this;
        if (this.init === !0) d.prototype.on.call(this, a, b); else var e = setInterval(function () {
            c.init === !0 && (clearInterval(e), d.prototype.on.call(c, a, b))
        }, 100)
    };
    var i = function (a) {
        d.call(this, a)
    };
    i.prototype = new d, i.prototype.constructor = i, a.VideoController.addPlayer("HTML5Video", i), i.isType = function (a) {
        return a.is("video") && a.hasClass("video-js") === !1 && a.hasClass("sublime") === !1 ? !0 : !1
    }, i.prototype._init = function () {
        var a = this;
        this.player = this.$video[0];
        var b = setInterval(function () {
            4 === a.player.readyState && (clearInterval(b), a.ready = !0, a.trigger({type: "ready"}), a.player.addEventListener("play", function () {
                a.started === !1 && (a.started = !0, a.trigger({type: "start"})), a.state = "playing", a.trigger({type: "play"})
            }), a.player.addEventListener("pause", function () {
                a.state = "paused", a.trigger({type: "pause"})
            }), a.player.addEventListener("ended", function () {
                a.state = "ended", a.trigger({type: "ended"})
            }))
        }, 100)
    }, i.prototype.play = function () {
        var a = this;
        if (this.ready === !0) this.player.play(); else var b = setInterval(function () {
            a.ready === !0 && (clearInterval(b), a.player.play())
        }, 100)
    }, i.prototype.pause = function () {
        this.player.pause()
    }, i.prototype.stop = function () {
        this.player.currentTime = 0, this.player.pause(), this.state = "stopped"
    }, i.prototype.replay = function () {
        this.player.currentTime = 0, this.player.play()
    };
    var j = function (a) {
        d.call(this, a)
    };
    j.prototype = new d, j.prototype.constructor = j, a.VideoController.addPlayer("VideoJSVideo", j), j.isType = function (a) {
        return "undefined" == typeof a.attr("data-videojs-id") && !a.hasClass("video-js") || "undefined" == typeof videojs ? !1 : !0
    }, j.prototype._init = function () {
        var a = this,
            b = this.$video.hasClass("video-js") ? this.$video.attr("id") : this.$video.attr("data-videojs-id");
        this.player = videojs(b), this.player.ready(function () {
            a.ready = !0, a.trigger({type: "ready"}), a.player.on("play", function () {
                a.started === !1 && (a.started = !0, a.trigger({type: "start"})), a.state = "playing", a.trigger({type: "play"})
            }), a.player.on("pause", function () {
                a.state = "paused", a.trigger({type: "pause"})
            }), a.player.on("ended", function () {
                a.state = "ended", a.trigger({type: "ended"})
            })
        })
    }, j.prototype.play = function () {
        this.player.play()
    }, j.prototype.pause = function () {
        this.player.pause()
    }, j.prototype.stop = function () {
        this.player.currentTime(0), this.player.pause(), this.state = "stopped"
    }, j.prototype.replay = function () {
        this.player.currentTime(0), this.player.play()
    };
    var k = function (a) {
        d.call(this, a)
    };
    k.prototype = new d, k.prototype.constructor = k, a.VideoController.addPlayer("SublimeVideo", k), k.isType = function (a) {
        return a.hasClass("sublime") && "undefined" != typeof sublime ? !0 : !1
    }, k.prototype._init = function () {
        var a = this;
        sublime.ready(function () {
            a.player = sublime.player(a.$video.attr("id")), a.ready = !0, a.trigger({type: "ready"}), a.player.on("play", function () {
                a.started === !1 && (a.started = !0, a.trigger({type: "start"})), a.state = "playing", a.trigger({type: "play"})
            }), a.player.on("pause", function () {
                a.state = "paused", a.trigger({type: "pause"})
            }), a.player.on("stop", function () {
                a.state = "stopped", a.trigger({type: "stop"})
            }), a.player.on("end", function () {
                a.state = "ended", a.trigger({type: "ended"})
            })
        })
    }, k.prototype.play = function () {
        this.player.play()
    }, k.prototype.pause = function () {
        this.player.pause()
    }, k.prototype.stop = function () {
        this.player.stop()
    }, k.prototype.replay = function () {
        this.player.stop(), this.player.play()
    };
    var l = function (a) {
        d.call(this, a)
    };
    l.prototype = new d, l.prototype.constructor = l, a.VideoController.addPlayer("JWPlayerVideo", l), l.isType = function (a) {
        return "undefined" == typeof a.attr("data-jwplayer-id") && !a.hasClass("jwplayer") && 0 === a.find("object[data*='jwplayer']").length || "undefined" == typeof jwplayer ? !1 : !0
    }, l.prototype._init = function () {
        var a, b = this;
        this.$video.hasClass("jwplayer") ? a = this.$video.attr("id") : "undefined" != typeof this.$video.attr("data-jwplayer-id") ? a = this.$video.attr("data-jwplayer-id") : 0 !== this.$video.find("object[data*='jwplayer']").length && (a = this.$video.find("object").attr("id")), this.player = jwplayer(a), this.player.onReady(function () {
            b.ready = !0, b.trigger({type: "ready"}), b.player.onPlay(function () {
                b.started === !1 && (b.started = !0, b.trigger({type: "start"})), b.state = "playing", b.trigger({type: "play"})
            }), b.player.onPause(function () {
                b.state = "paused", b.trigger({type: "pause"})
            }), b.player.onComplete(function () {
                b.state = "ended", b.trigger({type: "ended"})
            })
        })
    }, l.prototype.play = function () {
        this.player.play(!0)
    }, l.prototype.pause = function () {
        this.player.pause(!0)
    }, l.prototype.stop = function () {
        this.player.stop(), this.state = "stopped"
    }, l.prototype.replay = function () {
        this.player.seek(0), this.player.play(!0)
    }
}(jQuery);
!function (i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function (i) {
    "use strict";
    var e = window.Slick || {};
    (e = function () {
        var e = 0;
        return function (t, o) {
            var s, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (e, t) {
                    return i('<button type="button" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
        }
    }()).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
    }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
        var s = this;
        if ("boolean" == typeof t) o = t, t = null; else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e)
        }), s.$slidesCache = s.$slides, s.reinit()
    }, e.prototype.animateHeight = function () {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({height: e}, i.options.speed)
        }
    }, e.prototype.animateSlide = function (e, t) {
        var o = {}, s = this;
        s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({left: e}, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({top: e}, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({animStart: s.currentLeft}).animate({animStart: e}, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function (i) {
                i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o))
            },
            complete: function () {
                t && t.call()
            }
        })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
            s.disableTransition(), t.call()
        }, s.options.speed))
    }, e.prototype.getNavTarget = function () {
        var e = this, t = e.options.asNavFor;
        return t && null !== t && (t = i(t).not(e.$slider)), t
    }, e.prototype.asNavFor = function (e) {
        var t = this.getNavTarget();
        null !== t && "object" == typeof t && t.each(function () {
            var t = i(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function (i) {
        var e = this, t = {};
        !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.autoPlay = function () {
        var i = this;
        i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function () {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function () {
        var i = this, e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e))
    }, e.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function () {
        var e, t, o = this;
        if (!0 === o.options.dots) {
            for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
            o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
        }
    }, e.prototype.buildOut = function () {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function () {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
            for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
                var d = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var a = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && a.appendChild(n.get(c))
                    }
                    d.appendChild(a)
                }
                o.appendChild(d)
            }
            l.$slider.empty().append(o), l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, e.prototype.checkResponsive = function (e, t) {
        var o, s, n, r = this, l = !1, d = r.$slider.width(), a = window.innerWidth || i(window).width();
        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;
            for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
        }
    }, e.prototype.changeSlide = function (e, t) {
        var o, s, n, r = this, l = i(e.currentTarget);
        switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
            case"previous":
                s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                break;
            case"next":
                s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                break;
            case"index":
                var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function (i) {
        var e, t;
        if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1]; else for (var o in e) {
            if (i < e[o]) {
                i = t;
                break
            }
            t = e[o]
        }
        return i
    }, e.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function () {
        var e = this;
        e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function () {
        var i, e = this;
        e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i))
    }, e.prototype.clickHandler = function (i) {
        !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
    }, e.prototype.destroy = function (e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            i(this).attr("style", i(this).data("originalStyling"))
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, e.prototype.disableTransition = function (i) {
        var e = this, t = {};
        t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.fadeSlide = function (i, e) {
        var t = this;
        !1 === t.cssTransitions ? (t.$slides.eq(i).css({zIndex: t.options.zIndex}), t.$slides.eq(i).animate({opacity: 1}, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }), e && setTimeout(function () {
            t.disableTransition(i), e.call()
        }, t.options.speed))
    }, e.prototype.fadeSlideOut = function (i) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(i).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function () {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
            t.stopImmediatePropagation();
            var o = i(this);
            setTimeout(function () {
                e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay())
            }, 0)
        })
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
        return this.currentSlide
    }, e.prototype.getDotCount = function () {
        var i = this, e = 0, t = 0, o = 0;
        if (!0 === i.options.infinite) if (i.slideCount <= i.options.slidesToShow) ++o; else for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else if (!0 === i.options.centerMode) o = i.slideCount; else if (i.options.asNavFor) for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1
    }, e.prototype.getLeft = function (i) {
        var e, t, o, s, n = this, r = 0;
        return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
        return this.options[i]
    }, e.prototype.getNavigableIndexes = function () {
        var i, e = this, t = 0, o = 0, s = [];
        for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }, e.prototype.getSlick = function () {
        return this
    }, e.prototype.getSlideCount = function () {
        var e, t, o = this;
        return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
            if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1
        }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
        this.changeSlide({data: {message: "index", index: parseInt(i)}}, e)
    }, e.prototype.init = function (e) {
        var t = this;
        i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, e.prototype.initADA = function () {
        var e = this, t = Math.ceil(e.slideCount / e.options.slidesToShow),
            o = e.getNavigableIndexes().filter(function (i) {
                return i >= 0 && i < e.slideCount
            });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({tabindex: "-1"}), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
            var s = o.indexOf(t);
            i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1
            }), -1 !== s && i(this).attr({"aria-describedby": "slick-slide-control" + e.instanceUid + s})
        }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
            var n = o[s];
            i(this).attr({role: "presentation"}), i(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + s,
                "aria-controls": "slick-slide" + e.instanceUid + n,
                "aria-label": s + 1 + " of " + t,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({"aria-selected": "true", tabindex: "0"}).end());
        for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
        e.activateADA()
    }, e.prototype.initArrowEvents = function () {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)))
    }, e.prototype.initDotEvents = function () {
        var e = this;
        !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {message: "index"}, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.initSlideEvents = function () {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {action: "start"}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {action: "move"}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {action: "end"}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition)
    }, e.prototype.initUI = function () {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
    }, e.prototype.keyHandler = function (i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({data: {message: !0 === e.options.rtl ? "next" : "previous"}}) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({data: {message: !0 === e.options.rtl ? "previous" : "next"}}))
    }, e.prototype.lazyLoad = function () {
        function e(e) {
            i("img[data-lazy]", e).each(function () {
                var e = i(this), t = i(this).attr("data-lazy"), o = i(this).attr("data-srcset"),
                    s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"), r = document.createElement("img");
                r.onload = function () {
                    e.animate({opacity: 0}, 100, function () {
                        o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({opacity: 1}, 200, function () {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), n.$slider.trigger("lazyLoaded", [n, e, t])
                    })
                }, r.onerror = function () {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t])
                }, r.src = t
            })
        }

        var t, o, s, n = this;
        if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
        e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }, e.prototype.loadSlider = function () {
        var i = this;
        i.setPosition(), i.$slideTrack.css({opacity: 1}), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function () {
        this.changeSlide({data: {message: "next"}})
    }, e.prototype.orientationChange = function () {
        var i = this;
        i.checkResponsive(), i.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function () {
        var i = this;
        i.autoPlayClear(), i.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function () {
        var i = this;
        i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
    }, e.prototype.postSlide = function (e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    }, e.prototype.prev = e.prototype.slickPrev = function () {
        this.changeSlide({data: {message: "previous"}})
    }, e.prototype.preventDefault = function (i) {
        i.preventDefault()
    }, e.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var t, o, s, n, r, l = this, d = i("img[data-lazy]", l.$slider);
        d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad()
        }, r.onerror = function () {
            e < 3 ? setTimeout(function () {
                l.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad())
        }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
    }, e.prototype.refresh = function (e) {
        var t, o, s = this;
        o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {currentSlide: t}), s.init(), e || s.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }, e.prototype.registerBreakpoints = function () {
        var e, t, o, s = this, n = s.options.responsive || null;
        if ("array" === i.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for (e in n) if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
                for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
            }
            s.breakpoints.sort(function (i, e) {
                return s.options.mobileFirst ? i - e : e - i
            })
        }
    }, e.prototype.reinit = function () {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function () {
        var e = this;
        i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
            e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
        var o = this;
        if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
        o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
    }, e.prototype.setCSS = function (i) {
        var e, t, o = this, s = {};
        !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
    }, e.prototype.setDimensions = function () {
        var i = this;
        !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({padding: "0px " + i.options.centerPadding}) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({padding: i.options.centerPadding + " 0px"})), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
    }, e.prototype.setFade = function () {
        var e, t = this;
        t.$slides.each(function (o, s) {
            e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : i(s).css({position: "relative", left: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0})
        }), t.$slides.eq(t.currentSlide).css({zIndex: t.options.zIndex - 1, opacity: 1})
    }, e.prototype.setHeight = function () {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function () {
        var e, t, o, s, n, r = this, l = !1;
        if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s; else if ("multiple" === n) i.each(o, function (i, e) {
            r.options[i] = e
        }); else if ("responsive" === n) for (t in s) if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]]; else {
            for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
            r.options.responsive.push(s[t])
        }
        l && (r.unload(), r.reinit())
    }, e.prototype.setPosition = function () {
        var i = this;
        i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
    }, e.prototype.setProps = function () {
        var i = this, e = document.body.style;
        i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
    }, e.prototype.setSlideClasses = function (i) {
        var e, t, o, s, n = this;
        if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
            var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")
        } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }, e.prototype.setupInfinite = function () {
        var e, t, o, s = this;
        if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
            for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                i(this).attr("id", "")
            })
        }
    }, e.prototype.interrupt = function (i) {
        var e = this;
        i || e.autoPlay(), e.interrupted = i
    }, e.prototype.selectHandler = function (e) {
        var t = this, o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
            s = parseInt(o.attr("data-slick-index"));
        s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
    }, e.prototype.slideHandler = function (i, e, t) {
        var o, s, n, r, l, d = null, a = this;
        if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
            a.postSlide(o)
        }) : a.postSlide(o)); else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
            a.postSlide(o)
        }) : a.postSlide(o)); else {
            if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
                a.postSlide(s)
            })) : a.postSlide(s), void a.animateHeight();
            !0 !== t ? a.animateSlide(d, function () {
                a.postSlide(s)
            }) : a.postSlide(s)
        }
    }, e.prototype.startLoad = function () {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function () {
        var i, e, t, o, s = this;
        return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
    }, e.prototype.swipeEnd = function (i) {
        var e, t, o = this;
        if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
        if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
                case"left":
                case"down":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                    break;
                case"right":
                case"up":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
            }
            "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
    }, e.prototype.swipeHandler = function (i) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
            case"start":
                e.swipeStart(i);
                break;
            case"move":
                e.swipeMove(i);
                break;
            case"end":
                e.swipeEnd(i)
        }
    }, e.prototype.swipeMove = function (i) {
        var e, t, o, s, n, r, l = this;
        return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))))
    }, e.prototype.swipeStart = function (i) {
        var e, t = this;
        if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
        void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
        var i = this;
        null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
    }, e.prototype.unload = function () {
        var e = this;
        i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function (i) {
        var e = this;
        e.$slider.trigger("unslick", [e, i]), e.destroy()
    }, e.prototype.updateArrows = function () {
        var i = this;
        Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function () {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
    }, e.prototype.visibility = function () {
        var i = this;
        i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
    }, i.fn.slick = function () {
        var i, t, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = o.length;
        for (i = 0; i < r; i++) if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
        return o
    }
});
/*! elementor - v2.7.2 - 16-09-2019 */
!function (t) {
    var e = {};

    function __webpack_require__(n) {
        if (e[n]) return e[n].exports;
        var r = e[n] = {i: n, l: !1, exports: {}};
        return t[n].call(r.exports, r, r.exports, __webpack_require__), r.l = !0, r.exports
    }

    __webpack_require__.m = t, __webpack_require__.c = e, __webpack_require__.d = function (t, e, n) {
        __webpack_require__.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
    }, __webpack_require__.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, __webpack_require__.t = function (t, e) {
        if (1 & e && (t = __webpack_require__(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (__webpack_require__.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var r in t) __webpack_require__.d(n, r, function (e) {
            return t[e]
        }.bind(null, r));
        return n
    }, __webpack_require__.n = function (t) {
        var e = t && t.__esModule ? function getDefault() {
            return t.default
        } : function getModuleExports() {
            return t
        };
        return __webpack_require__.d(e, "a", e), e
    }, __webpack_require__.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 509)
}([function (t, e) {
    t.exports = function _interopRequireDefault(t) {
        return t && t.__esModule ? t : {default: t}
    }
}, function (t, e) {
    var n = t.exports = {version: "2.6.9"};
    "number" == typeof __e && (__e = n)
}, function (t, e, n) {
    t.exports = n(107)
}, function (t, e, n) {
    var r = n(128), o = n(79);

    function _getPrototypeOf(e) {
        return t.exports = _getPrototypeOf = o ? r : function _getPrototypeOf(t) {
            return t.__proto__ || r(t)
        }, _getPrototypeOf(e)
    }

    t.exports = _getPrototypeOf
}, function (t, e) {
    t.exports = function _classCallCheck(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
}, function (t, e, n) {
    var r = n(2);

    function _defineProperties(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), r(t, o.key, o)
        }
    }

    t.exports = function _createClass(t, e, n) {
        return e && _defineProperties(t.prototype, e), n && _defineProperties(t, n), t
    }
}, function (t, e, n) {
    var r = n(65), o = n(81);
    t.exports = function _possibleConstructorReturn(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? o(t) : e
    }
}, function (t, e, n) {
    var r = n(96), o = n(136);
    t.exports = function _inherits(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = r(e && e.prototype, {constructor: {value: t, writable: !0, configurable: !0}}), e && o(t, e)
    }
}, function (t, e, n) {
    var r = n(10), o = n(1), i = n(68), u = n(23), c = n(12), s = function (t, e, n) {
        var f, a, l, p = t & s.F, g = t & s.G, d = t & s.S, v = t & s.P, h = t & s.B, y = t & s.W,
            m = g ? o : o[e] || (o[e] = {}), _ = m.prototype, x = g ? r : d ? r[e] : (r[e] || {}).prototype;
        for (f in g && (n = e), n) (a = !p && x && void 0 !== x[f]) && c(m, f) || (l = a ? x[f] : n[f], m[f] = g && "function" != typeof x[f] ? n[f] : h && a ? i(l, r) : y && x[f] == l ? function (t) {
            var e = function (e, n, r) {
                if (this instanceof t) {
                    switch (arguments.length) {
                        case 0:
                            return new t;
                        case 1:
                            return new t(e);
                        case 2:
                            return new t(e, n)
                    }
                    return new t(e, n, r)
                }
                return t.apply(this, arguments)
            };
            return e.prototype = t.prototype, e
        }(l) : v && "function" == typeof l ? i(Function.call, l) : l, v && ((m.virtual || (m.virtual = {}))[f] = l, t & s.R && _ && !_[f] && u(_, f, l)))
    };
    s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, t.exports = s
}, function (t, e, n) {
    var r = n(45)("wks"), o = n(46), i = n(11).Symbol, u = "function" == typeof i;
    (t.exports = function (t) {
        return r[t] || (r[t] = u && i[t] || (u ? i : o)("Symbol." + t))
    }).store = r
}, function (t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function (t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function (t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function (t, e) {
        return n.call(t, e)
    }
}, function (t, e, n) {
    t.exports = !n(25)(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (t, e, n) {
    var r = n(18), o = n(74), i = n(49), u = Object.defineProperty;
    e.f = n(13) ? Object.defineProperty : function defineProperty(t, e, n) {
        if (r(t), e = i(e, !0), r(n), o) try {
            return u(t, e, n)
        } catch (t) {
        }
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, function (t, e, n) {
    var r = n(94), o = n(39);
    t.exports = function (t) {
        return r(o(t))
    }
}, function (t, e, n) {
    var r = n(53)("wks"), o = n(35), i = n(10).Symbol, u = "function" == typeof i;
    (t.exports = function (t) {
        return r[t] || (r[t] = u && i[t] || (u ? i : o)("Symbol." + t))
    }).store = r
}, function (t, e) {
    t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function (t, e, n) {
    var r = n(17);
    t.exports = function (t) {
        if (!r(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function (t, e, n) {
    var r = n(22);
    t.exports = function (t) {
        if (!r(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function (t, e, n) {
    t.exports = !n(24)(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (t, e, n) {
    var r = n(36), o = n(67);
    t.exports = n(20) ? function (t, e, n) {
        return r.f(t, e, o(1, n))
    } : function (t, e, n) {
        return t[e] = n, t
    }
}, function (t, e) {
    t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function (t, e, n) {
    var r = n(14), o = n(30);
    t.exports = n(13) ? function (t, e, n) {
        return r.f(t, e, o(1, n))
    } : function (t, e, n) {
        return t[e] = n, t
    }
}, function (t, e) {
    t.exports = function (t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function (t, e) {
    t.exports = function (t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function (t, e, n) {
    "use strict";
    var r = n(37), o = n(100)(5), i = !0;
    "find" in [] && Array(1).find(function () {
        i = !1
    }), r(r.P + r.F * i, "Array", {
        find: function find(t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(73)("find")
}, function (t, e, n) {
    var r = n(11), o = n(21), i = n(47), u = n(46)("src"), c = n(87), s = ("" + c).split("toString");
    n(33).inspectSource = function (t) {
        return c.call(t)
    }, (t.exports = function (t, e, n, c) {
        var f = "function" == typeof n;
        f && (i(n, "name") || o(n, "name", e)), t[e] !== n && (f && (i(n, u) || o(n, u, t[e] ? "" + t[e] : s.join(String(e)))), t === r ? t[e] = n : c ? t[e] ? t[e] = n : o(t, e, n) : (delete t[e], o(t, e, n)))
    })(Function.prototype, "toString", function toString() {
        return "function" == typeof this && this[u] || c.call(this)
    })
}, function (t, e, n) {
    var r = n(78), o = n(54);
    t.exports = Object.keys || function keys(t) {
        return r(t, o)
    }
}, function (t, e) {
    var n = {}.toString;
    t.exports = function (t) {
        return n.call(t).slice(8, -1)
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
    }
}, function (t, e, n) {
    var r = n(39);
    t.exports = function (t) {
        return Object(r(t))
    }
}, function (t, e) {
    t.exports = function (t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function (t, e) {
    var n = t.exports = {version: "2.6.9"};
    "number" == typeof __e && (__e = n)
}, function (t, e) {
    t.exports = !0
}, function (t, e) {
    var n = 0, r = Math.random();
    t.exports = function (t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
    }
}, function (t, e, n) {
    var r = n(19), o = n(84), i = n(82), u = Object.defineProperty;
    e.f = n(20) ? Object.defineProperty : function defineProperty(t, e, n) {
        if (r(t), e = i(e, !0), r(n), o) try {
            return u(t, e, n)
        } catch (t) {
        }
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, function (t, e, n) {
    var r = n(11), o = n(33), i = n(21), u = n(27), c = n(60), s = function (t, e, n) {
        var f, a, l, p, g = t & s.F, d = t & s.G, v = t & s.S, h = t & s.P, y = t & s.B,
            m = d ? r : v ? r[e] || (r[e] = {}) : (r[e] || {}).prototype, _ = d ? o : o[e] || (o[e] = {}),
            x = _.prototype || (_.prototype = {});
        for (f in d && (n = e), n) l = ((a = !g && m && void 0 !== m[f]) ? m : n)[f], p = y && a ? c(l, r) : h && "function" == typeof l ? c(Function.call, l) : l, m && u(m, f, l, t & s.U), _[f] != l && i(_, f, p), h && x[f] != l && (x[f] = l)
    };
    r.core = o, s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, t.exports = s
}, function (t, e, n) {
    var r = n(41), o = n(30), i = n(15), u = n(49), c = n(12), s = n(74), f = Object.getOwnPropertyDescriptor;
    e.f = n(13) ? f : function getOwnPropertyDescriptor(t, e) {
        if (t = i(t), e = u(e, !0), s) try {
            return f(t, e)
        } catch (t) {
        }
        if (c(t, e)) return o(!r.f.call(t, e), t[e])
    }
}, function (t, e) {
    t.exports = function (t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function (t, e) {
    t.exports = {}
}, function (t, e) {
    e.f = {}.propertyIsEnumerable
}, function (t, e, n) {
    var r = n(43), o = Math.min;
    t.exports = function (t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0
    }
}, function (t, e) {
    var n = Math.ceil, r = Math.floor;
    t.exports = function (t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
    }
}, function (t, e, n) {
    var r = n(141), o = n(148), i = (n(3), n(151));

    function _get(e, n, u) {
        return "undefined" != typeof Reflect && o ? t.exports = _get = o : t.exports = _get = function _get(t, e, n) {
            var o = i(t, e);
            if (o) {
                var u = r(o, e);
                return u.get ? u.get.call(n) : u.value
            }
        }, _get(e, n, u || e)
    }

    t.exports = _get
}, function (t, e, n) {
    var r = n(33), o = n(11), i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (t.exports = function (t, e) {
        return i[t] || (i[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: r.version,
        mode: n(71) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function (t, e) {
    var n = 0, r = Math.random();
    t.exports = function (t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
    }
}, function (t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function (t, e) {
        return n.call(t, e)
    }
}, function (t, e, n) {
    var r = n(36).f, o = Function.prototype, i = /^\s*function ([^ (]*)/;
    "name" in o || n(20) && r(o, "name", {
        configurable: !0, get: function () {
            try {
                return ("" + this).match(i)[1]
            } catch (t) {
                return ""
            }
        }
    })
}, function (t, e, n) {
    var r = n(17);
    t.exports = function (t, e) {
        if (!r(t)) return t;
        var n, o;
        if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
        if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t))) return o;
        if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (t, e) {
    var n = Math.ceil, r = Math.floor;
    t.exports = function (t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
    }
}, function (t, e, n) {
    var r = n(18), o = n(101), i = n(54), u = n(52)("IE_PROTO"), c = function () {
    }, s = function () {
        var t, e = n(75)("iframe"), r = i.length;
        for (e.style.display = "none", n(116).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), s = t.F; r--;) delete s.prototype[i[r]];
        return s()
    };
    t.exports = Object.create || function create(t, e) {
        var n;
        return null !== t ? (c.prototype = r(t), n = new c, c.prototype = null, n[u] = t) : n = s(), void 0 === e ? n : o(n, e)
    }
}, function (t, e, n) {
    var r = n(53)("keys"), o = n(35);
    t.exports = function (t) {
        return r[t] || (r[t] = o(t))
    }
}, function (t, e, n) {
    var r = n(1), o = n(10), i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (t.exports = function (t, e) {
        return i[t] || (i[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: r.version,
        mode: n(34) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function (t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (t, e, n) {
    var r = n(14).f, o = n(12), i = n(16)("toStringTag");
    t.exports = function (t, e, n) {
        t && !o(t = n ? t : t.prototype, i) && r(t, i, {configurable: !0, value: e})
    }
}, function (t, e, n) {
    e.f = n(16)
}, function (t, e, n) {
    var r = n(10), o = n(1), i = n(34), u = n(56), c = n(14).f;
    t.exports = function (t) {
        var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
        "_" == t.charAt(0) || t in e || c(e, t, {value: u.f(t)})
    }
}, function (t, e, n) {
    t.exports = n(152)
}, function (t, e, n) {
    var r = n(12), o = n(31), i = n(52)("IE_PROTO"), u = Object.prototype;
    t.exports = Object.getPrototypeOf || function (t) {
        return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
    }
}, function (t, e, n) {
    var r = n(61);
    t.exports = function (t, e, n) {
        if (r(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function (n) {
                    return t.call(e, n)
                };
            case 2:
                return function (n, r) {
                    return t.call(e, n, r)
                };
            case 3:
                return function (n, r, o) {
                    return t.call(e, n, r, o)
                }
        }
        return function () {
            return t.apply(e, arguments)
        }
    }
}, function (t, e) {
    t.exports = function (t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function (t, e, n) {
    var r = n(32);
    t.exports = function (t) {
        return Object(r(t))
    }
}, function (t, e, n) {
    var r = n(8), o = n(1), i = n(25);
    t.exports = function (t, e) {
        var n = (o.Object || {})[t] || Object[t], u = {};
        u[t] = e(n), r(r.S + r.F * i(function () {
            n(1)
        }), "Object", u)
    }
}, function (t, e) {
    e.f = Object.getOwnPropertySymbols
}, function (t, e, n) {
    var r = n(110), o = n(120);

    function _typeof2(t) {
        return (_typeof2 = "function" == typeof o && "symbol" == typeof r ? function _typeof2(t) {
            return typeof t
        } : function _typeof2(t) {
            return t && "function" == typeof o && t.constructor === o && t !== o.prototype ? "symbol" : typeof t
        })(t)
    }

    function _typeof(e) {
        return "function" == typeof o && "symbol" === _typeof2(r) ? t.exports = _typeof = function _typeof(t) {
            return _typeof2(t)
        } : t.exports = _typeof = function _typeof(t) {
            return t && "function" == typeof o && t.constructor === o && t !== o.prototype ? "symbol" : _typeof2(t)
        }, _typeof(e)
    }

    t.exports = _typeof
}, function (t, e) {
    var n = {}.toString;
    t.exports = function (t) {
        return n.call(t).slice(8, -1)
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
    }
}, function (t, e, n) {
    var r = n(109);
    t.exports = function (t, e, n) {
        if (r(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function (n) {
                    return t.call(e, n)
                };
            case 2:
                return function (n, r) {
                    return t.call(e, n, r)
                };
            case 3:
                return function (n, r, o) {
                    return t.call(e, n, r, o)
                }
        }
        return function () {
            return t.apply(e, arguments)
        }
    }
}, function (t, e, n) {
    var r = n(78), o = n(54).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function getOwnPropertyNames(t) {
        return r(t, o)
    }
}, function (t, e, n) {
    var r = n(22), o = n(11).document, i = r(o) && r(o.createElement);
    t.exports = function (t) {
        return i ? o.createElement(t) : {}
    }
}, function (t, e) {
    t.exports = !1
}, function (t, e, n) {
    "use strict";
    var r, o, i = n(99), u = RegExp.prototype.exec, c = String.prototype.replace, s = u,
        f = (r = /a/, o = /b*/g, u.call(r, "a"), u.call(o, "a"), 0 !== r.lastIndex || 0 !== o.lastIndex),
        a = void 0 !== /()??/.exec("")[1];
    (f || a) && (s = function exec(t) {
        var e, n, r, o, s = this;
        return a && (n = new RegExp("^" + s.source + "$(?!\\s)", i.call(s))), f && (e = s.lastIndex), r = u.call(s, t), f && r && (s.lastIndex = s.global ? r.index + r[0].length : e), a && r && r.length > 1 && c.call(r[0], n, function () {
            for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0)
        }), r
    }), t.exports = s
}, function (t, e, n) {
    var r = n(9)("unscopables"), o = Array.prototype;
    null == o[r] && n(21)(o, r, {}), t.exports = function (t) {
        o[r][t] = !0
    }
}, function (t, e, n) {
    t.exports = !n(13) && !n(25)(function () {
        return 7 != Object.defineProperty(n(75)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (t, e, n) {
    var r = n(17), o = n(10).document, i = r(o) && r(o.createElement);
    t.exports = function (t) {
        return i ? o.createElement(t) : {}
    }
}, function (t, e, n) {
    "use strict";
    var r = n(34), o = n(8), i = n(77), u = n(23), c = n(40), s = n(113), f = n(55), a = n(59), l = n(16)("iterator"),
        p = !([].keys && "next" in [].keys()), g = function () {
            return this
        };
    t.exports = function (t, e, n, d, v, h, y) {
        s(n, e, d);
        var m, _, x, b = function (t) {
                if (!p && t in E) return E[t];
                switch (t) {
                    case"keys":
                        return function keys() {
                            return new n(this, t)
                        };
                    case"values":
                        return function values() {
                            return new n(this, t)
                        }
                }
                return function entries() {
                    return new n(this, t)
                }
            }, S = e + " Iterator", O = "values" == v, w = !1, E = t.prototype, P = E[l] || E["@@iterator"] || v && E[v],
            j = P || b(v), k = v ? O ? b("entries") : j : void 0, L = "Array" == e && E.entries || P;
        if (L && (x = a(L.call(new t))) !== Object.prototype && x.next && (f(x, S, !0), r || "function" == typeof x[l] || u(x, l, g)), O && P && "values" !== P.name && (w = !0, j = function values() {
            return P.call(this)
        }), r && !y || !p && !w && E[l] || u(E, l, j), c[e] = j, c[S] = g, v) if (m = {
            values: O ? j : b("values"),
            keys: h ? j : b("keys"),
            entries: k
        }, y) for (_ in m) _ in E || i(E, _, m[_]); else o(o.P + o.F * (p || w), e, m);
        return m
    }
}, function (t, e, n) {
    t.exports = n(23)
}, function (t, e, n) {
    var r = n(12), o = n(15), i = n(114)(!1), u = n(52)("IE_PROTO");
    t.exports = function (t, e) {
        var n, c = o(t), s = 0, f = [];
        for (n in c) n != u && r(c, n) && f.push(n);
        for (; e.length > s;) r(c, n = e[s++]) && (~i(f, n) || f.push(n));
        return f
    }
}, function (t, e, n) {
    t.exports = n(131)
}, , function (t, e) {
    t.exports = function _assertThisInitialized(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
}, function (t, e, n) {
    var r = n(22);
    t.exports = function (t, e) {
        if (!r(t)) return t;
        var n, o;
        if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
        if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t))) return o;
        if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (t, e, n) {
    var r = n(29);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
        return "String" == r(t) ? t.split("") : Object(t)
    }
}, function (t, e, n) {
    t.exports = !n(20) && !n(24)(function () {
        return 7 != Object.defineProperty(n(70)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (t, e, n) {
    "use strict";
    var r = n(93), o = RegExp.prototype.exec;
    t.exports = function (t, e) {
        var n = t.exec;
        if ("function" == typeof n) {
            var i = n.call(t, e);
            if ("object" != typeof i) throw new TypeError("RegExp exec method returned something other than an Object or null");
            return i
        }
        if ("RegExp" !== r(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
        return o.call(t, e)
    }
}, function (t, e, n) {
    "use strict";
    n(145);
    var r = n(27), o = n(21), i = n(24), u = n(32), c = n(9), s = n(72), f = c("species"), a = !i(function () {
        var t = /./;
        return t.exec = function () {
            var t = [];
            return t.groups = {a: "7"}, t
        }, "7" !== "".replace(t, "$<a>")
    }), l = function () {
        var t = /(?:)/, e = t.exec;
        t.exec = function () {
            return e.apply(this, arguments)
        };
        var n = "ab".split(t);
        return 2 === n.length && "a" === n[0] && "b" === n[1]
    }();
    t.exports = function (t, e, n) {
        var p = c(t), g = !i(function () {
            var e = {};
            return e[p] = function () {
                return 7
            }, 7 != ""[t](e)
        }), d = g ? !i(function () {
            var e = !1, n = /a/;
            return n.exec = function () {
                return e = !0, null
            }, "split" === t && (n.constructor = {}, n.constructor[f] = function () {
                return n
            }), n[p](""), !e
        }) : void 0;
        if (!g || !d || "replace" === t && !a || "split" === t && !l) {
            var v = /./[p], h = n(u, p, ""[t], function maybeCallNative(t, e, n, r, o) {
                return e.exec === s ? g && !o ? {done: !0, value: v.call(e, n, r)} : {
                    done: !0,
                    value: t.call(n, e, r)
                } : {done: !1}
            }), y = h[0], m = h[1];
            r(String.prototype, t, y), o(RegExp.prototype, p, 2 == e ? function (t, e) {
                return m.call(t, this, e)
            } : function (t) {
                return m.call(t, this)
            })
        }
    }
}, function (t, e, n) {
    t.exports = n(45)("native-function-to-string", Function.toString)
}, function (t, e, n) {
    "use strict";
    var r = n(112)(!0);
    n(76)(String, "String", function (t) {
        this._t = String(t), this._i = 0
    }, function () {
        var t, e = this._t, n = this._i;
        return n >= e.length ? {value: void 0, done: !0} : (t = r(e, n), this._i += t.length, {value: t, done: !1})
    })
}, function (t, e, n) {
    "use strict";
    var r = n(139), o = n(19), i = n(156), u = n(92), c = n(42), s = n(85), f = n(72), a = n(24), l = Math.min,
        p = [].push, g = !a(function () {
            RegExp(4294967295, "y")
        });
    n(86)("split", 2, function (t, e, n, a) {
        var d;
        return d = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (t, e) {
            var o = String(this);
            if (void 0 === t && 0 === e) return [];
            if (!r(t)) return n.call(o, t, e);
            for (var i, u, c, s = [], a = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), l = 0, g = void 0 === e ? 4294967295 : e >>> 0, d = new RegExp(t.source, a + "g"); (i = f.call(d, o)) && !((u = d.lastIndex) > l && (s.push(o.slice(l, i.index)), i.length > 1 && i.index < o.length && p.apply(s, i.slice(1)), c = i[0].length, l = u, s.length >= g));) d.lastIndex === i.index && d.lastIndex++;
            return l === o.length ? !c && d.test("") || s.push("") : s.push(o.slice(l)), s.length > g ? s.slice(0, g) : s
        } : "0".split(void 0, 0).length ? function (t, e) {
            return void 0 === t && 0 === e ? [] : n.call(this, t, e)
        } : n, [function split(n, r) {
            var o = t(this), i = null == n ? void 0 : n[e];
            return void 0 !== i ? i.call(n, o, r) : d.call(String(o), n, r)
        }, function (t, e) {
            var r = a(d, t, this, e, d !== n);
            if (r.done) return r.value;
            var f = o(t), p = String(this), v = i(f, RegExp), h = f.unicode,
                y = (f.ignoreCase ? "i" : "") + (f.multiline ? "m" : "") + (f.unicode ? "u" : "") + (g ? "y" : "g"),
                m = new v(g ? f : "^(?:" + f.source + ")", y), _ = void 0 === e ? 4294967295 : e >>> 0;
            if (0 === _) return [];
            if (0 === p.length) return null === s(m, p) ? [p] : [];
            for (var x = 0, b = 0, S = []; b < p.length;) {
                m.lastIndex = g ? b : 0;
                var O, w = s(m, g ? p : p.slice(b));
                if (null === w || (O = l(c(m.lastIndex + (g ? 0 : b)), p.length)) === x) b = u(p, b, h); else {
                    if (S.push(p.slice(x, b)), S.length === _) return S;
                    for (var E = 1; E <= w.length - 1; E++) if (S.push(w[E]), S.length === _) return S;
                    b = x = O
                }
            }
            return S.push(p.slice(x)), S
        }]
    })
}, function (t, e, n) {
    n(117);
    for (var r = n(10), o = n(23), i = n(40), u = n(16)("toStringTag"), c = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), s = 0; s < c.length; s++) {
        var f = c[s], a = r[f], l = a && a.prototype;
        l && !l[u] && o(l, u, f), i[f] = i.Array
    }
}, function (t, e, n) {
    var r = n(83), o = n(32);
    t.exports = function (t) {
        return r(o(t))
    }
}, function (t, e, n) {
    "use strict";
    var r = n(144)(!0);
    t.exports = function (t, e, n) {
        return e + (n ? r(t, e).length : 1)
    }
}, function (t, e, n) {
    var r = n(29), o = n(9)("toStringTag"), i = "Arguments" == r(function () {
        return arguments
    }());
    t.exports = function (t) {
        var e, n, u;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
            try {
                return t[e]
            } catch (t) {
            }
        }(e = Object(t), o)) ? n : i ? r(e) : "Object" == (u = r(e)) && "function" == typeof e.callee ? "Arguments" : u
    }
}, function (t, e, n) {
    var r = n(66);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
        return "String" == r(t) ? t.split("") : Object(t)
    }
}, function (t, e, n) {
    var r = n(66);
    t.exports = Array.isArray || function isArray(t) {
        return "Array" == r(t)
    }
}, function (t, e, n) {
    t.exports = n(134)
}, , , function (t, e, n) {
    "use strict";
    var r = n(19);
    t.exports = function () {
        var t = r(this), e = "";
        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
    }
}, function (t, e, n) {
    var r = n(60), o = n(83), i = n(62), u = n(42), c = n(104);
    t.exports = function (t, e) {
        var n = 1 == t, s = 2 == t, f = 3 == t, a = 4 == t, l = 6 == t, p = 5 == t || l, g = e || c;
        return function (e, c, d) {
            for (var v, h, y = i(e), m = o(y), _ = r(c, d, 3), x = u(m.length), b = 0, S = n ? g(e, x) : s ? g(e, 0) : void 0; x > b; b++) if ((p || b in m) && (h = _(v = m[b], b, y), t)) if (n) S[b] = h; else if (h) switch (t) {
                case 3:
                    return !0;
                case 5:
                    return v;
                case 6:
                    return b;
                case 2:
                    S.push(v)
            } else if (a) return !1;
            return l ? -1 : f || a ? a : S
        }
    }
}, function (t, e, n) {
    var r = n(14), o = n(18), i = n(28);
    t.exports = n(13) ? Object.defineProperties : function defineProperties(t, e) {
        o(t);
        for (var n, u = i(e), c = u.length, s = 0; c > s;) r.f(t, n = u[s++], e[n]);
        return t
    }
}, function (t, e, n) {
    var r = n(50), o = Math.min;
    t.exports = function (t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0
    }
}, function (t, e, n) {
    "use strict";
    var r = n(10), o = n(12), i = n(13), u = n(8), c = n(77), s = n(122).KEY, f = n(25), a = n(53), l = n(55),
        p = n(35), g = n(16), d = n(56), v = n(57), h = n(123), y = n(95), m = n(18), _ = n(17), x = n(31), b = n(15),
        S = n(49), O = n(30), w = n(51), E = n(124), P = n(38), j = n(64), k = n(14), L = n(28), M = P.f, D = k.f,
        C = E.f, I = r.Symbol, T = r.JSON, A = T && T.stringify, F = g("_hidden"), R = g("toPrimitive"),
        $ = {}.propertyIsEnumerable, N = a("symbol-registry"), q = a("symbols"), G = a("op-symbols"),
        H = Object.prototype, V = "function" == typeof I && !!j.f, Q = r.QObject,
        W = !Q || !Q.prototype || !Q.prototype.findChild, U = i && f(function () {
            return 7 != w(D({}, "a", {
                get: function () {
                    return D(this, "a", {value: 7}).a
                }
            })).a
        }) ? function (t, e, n) {
            var r = M(H, e);
            r && delete H[e], D(t, e, n), r && t !== H && D(H, e, r)
        } : D, B = function (t) {
            var e = q[t] = w(I.prototype);
            return e._k = t, e
        }, z = V && "symbol" == typeof I.iterator ? function (t) {
            return "symbol" == typeof t
        } : function (t) {
            return t instanceof I
        }, J = function defineProperty(t, e, n) {
            return t === H && J(G, e, n), m(t), e = S(e, !0), m(n), o(q, e) ? (n.enumerable ? (o(t, F) && t[F][e] && (t[F][e] = !1), n = w(n, {enumerable: O(0, !1)})) : (o(t, F) || D(t, F, O(1, {})), t[F][e] = !0), U(t, e, n)) : D(t, e, n)
        }, K = function defineProperties(t, e) {
            m(t);
            for (var n, r = h(e = b(e)), o = 0, i = r.length; i > o;) J(t, n = r[o++], e[n]);
            return t
        }, Y = function propertyIsEnumerable(t) {
            var e = $.call(this, t = S(t, !0));
            return !(this === H && o(q, t) && !o(G, t)) && (!(e || !o(this, t) || !o(q, t) || o(this, F) && this[F][t]) || e)
        }, X = function getOwnPropertyDescriptor(t, e) {
            if (t = b(t), e = S(e, !0), t !== H || !o(q, e) || o(G, e)) {
                var n = M(t, e);
                return !n || !o(q, e) || o(t, F) && t[F][e] || (n.enumerable = !0), n
            }
        }, Z = function getOwnPropertyNames(t) {
            for (var e, n = C(b(t)), r = [], i = 0; n.length > i;) o(q, e = n[i++]) || e == F || e == s || r.push(e);
            return r
        }, tt = function getOwnPropertySymbols(t) {
            for (var e, n = t === H, r = C(n ? G : b(t)), i = [], u = 0; r.length > u;) !o(q, e = r[u++]) || n && !o(H, e) || i.push(q[e]);
            return i
        };
    V || (c((I = function Symbol() {
        if (this instanceof I) throw TypeError("Symbol is not a constructor!");
        var t = p(arguments.length > 0 ? arguments[0] : void 0), e = function (n) {
            this === H && e.call(G, n), o(this, F) && o(this[F], t) && (this[F][t] = !1), U(this, t, O(1, n))
        };
        return i && W && U(H, t, {configurable: !0, set: e}), B(t)
    }).prototype, "toString", function toString() {
        return this._k
    }), P.f = X, k.f = J, n(69).f = E.f = Z, n(41).f = Y, j.f = tt, i && !n(34) && c(H, "propertyIsEnumerable", Y, !0), d.f = function (t) {
        return B(g(t))
    }), u(u.G + u.W + u.F * !V, {Symbol: I});
    for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) g(et[nt++]);
    for (var rt = L(g.store), ot = 0; rt.length > ot;) v(rt[ot++]);
    u(u.S + u.F * !V, "Symbol", {
        for: function (t) {
            return o(N, t += "") ? N[t] : N[t] = I(t)
        }, keyFor: function keyFor(t) {
            if (!z(t)) throw TypeError(t + " is not a symbol!");
            for (var e in N) if (N[e] === t) return e
        }, useSetter: function () {
            W = !0
        }, useSimple: function () {
            W = !1
        }
    }), u(u.S + u.F * !V, "Object", {
        create: function create(t, e) {
            return void 0 === e ? w(t) : K(w(t), e)
        },
        defineProperty: J,
        defineProperties: K,
        getOwnPropertyDescriptor: X,
        getOwnPropertyNames: Z,
        getOwnPropertySymbols: tt
    });
    var it = f(function () {
        j.f(1)
    });
    u(u.S + u.F * it, "Object", {
        getOwnPropertySymbols: function getOwnPropertySymbols(t) {
            return j.f(x(t))
        }
    }), T && u(u.S + u.F * (!V || f(function () {
        var t = I();
        return "[null]" != A([t]) || "{}" != A({a: t}) || "{}" != A(Object(t))
    })), "JSON", {
        stringify: function stringify(t) {
            for (var e, n, r = [t], o = 1; arguments.length > o;) r.push(arguments[o++]);
            if (n = e = r[1], (_(e) || void 0 !== t) && !z(t)) return y(e) || (e = function (t, e) {
                if ("function" == typeof n && (e = n.call(this, t, e)), !z(e)) return e
            }), r[1] = e, A.apply(T, r)
        }
    }), I.prototype[R] || n(23)(I.prototype, R, I.prototype.valueOf), l(I, "Symbol"), l(Math, "Math", !0), l(r.JSON, "JSON", !0)
}, function (t, e, n) {
    var r = n(105);
    t.exports = function (t, e) {
        return new (r(t))(e)
    }
}, function (t, e, n) {
    var r = n(22), o = n(106), i = n(9)("species");
    t.exports = function (t) {
        var e;
        return o(t) && ("function" != typeof (e = t.constructor) || e !== Array && !o(e.prototype) || (e = void 0), r(e) && null === (e = e[i]) && (e = void 0)), void 0 === e ? Array : e
    }
}, function (t, e, n) {
    var r = n(29);
    t.exports = Array.isArray || function isArray(t) {
        return "Array" == r(t)
    }
}, function (t, e, n) {
    n(108);
    var r = n(1).Object;
    t.exports = function defineProperty(t, e, n) {
        return r.defineProperty(t, e, n)
    }
}, function (t, e, n) {
    var r = n(8);
    r(r.S + r.F * !n(13), "Object", {defineProperty: n(14).f})
}, function (t, e) {
    t.exports = function (t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function (t, e, n) {
    t.exports = n(111)
}, function (t, e, n) {
    n(88), n(90), t.exports = n(56).f("iterator")
}, function (t, e, n) {
    var r = n(50), o = n(39);
    t.exports = function (t) {
        return function (e, n) {
            var i, u, c = String(o(e)), s = r(n), f = c.length;
            return s < 0 || s >= f ? t ? "" : void 0 : (i = c.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === f || (u = c.charCodeAt(s + 1)) < 56320 || u > 57343 ? t ? c.charAt(s) : i : t ? c.slice(s, s + 2) : u - 56320 + (i - 55296 << 10) + 65536
        }
    }
}, function (t, e, n) {
    "use strict";
    var r = n(51), o = n(30), i = n(55), u = {};
    n(23)(u, n(16)("iterator"), function () {
        return this
    }), t.exports = function (t, e, n) {
        t.prototype = r(u, {next: o(1, n)}), i(t, e + " Iterator")
    }
}, function (t, e, n) {
    var r = n(15), o = n(102), i = n(115);
    t.exports = function (t) {
        return function (e, n, u) {
            var c, s = r(e), f = o(s.length), a = i(u, f);
            if (t && n != n) {
                for (; f > a;) if ((c = s[a++]) != c) return !0
            } else for (; f > a; a++) if ((t || a in s) && s[a] === n) return t || a || 0;
            return !t && -1
        }
    }
}, function (t, e, n) {
    var r = n(50), o = Math.max, i = Math.min;
    t.exports = function (t, e) {
        return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e)
    }
}, function (t, e, n) {
    var r = n(10).document;
    t.exports = r && r.documentElement
}, function (t, e, n) {
    "use strict";
    var r = n(118), o = n(119), i = n(40), u = n(15);
    t.exports = n(76)(Array, "Array", function (t, e) {
        this._t = u(t), this._i = 0, this._k = e
    }, function () {
        var t = this._t, e = this._k, n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
    }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
}, function (t, e) {
    t.exports = function () {
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return {value: e, done: !!t}
    }
}, function (t, e, n) {
    t.exports = n(121)
}, function (t, e, n) {
    n(103), n(125), n(126), n(127), t.exports = n(1).Symbol
}, function (t, e, n) {
    var r = n(35)("meta"), o = n(17), i = n(12), u = n(14).f, c = 0, s = Object.isExtensible || function () {
        return !0
    }, f = !n(25)(function () {
        return s(Object.preventExtensions({}))
    }), a = function (t) {
        u(t, r, {value: {i: "O" + ++c, w: {}}})
    }, l = t.exports = {
        KEY: r, NEED: !1, fastKey: function (t, e) {
            if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!i(t, r)) {
                if (!s(t)) return "F";
                if (!e) return "E";
                a(t)
            }
            return t[r].i
        }, getWeak: function (t, e) {
            if (!i(t, r)) {
                if (!s(t)) return !0;
                if (!e) return !1;
                a(t)
            }
            return t[r].w
        }, onFreeze: function (t) {
            return f && l.NEED && s(t) && !i(t, r) && a(t), t
        }
    }
}, function (t, e, n) {
    var r = n(28), o = n(64), i = n(41);
    t.exports = function (t) {
        var e = r(t), n = o.f;
        if (n) for (var u, c = n(t), s = i.f, f = 0; c.length > f;) s.call(t, u = c[f++]) && e.push(u);
        return e
    }
}, function (t, e, n) {
    var r = n(15), o = n(69).f, i = {}.toString,
        u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function getOwnPropertyNames(t) {
        return u && "[object Window]" == i.call(t) ? function (t) {
            try {
                return o(t)
            } catch (t) {
                return u.slice()
            }
        }(t) : o(r(t))
    }
}, function (t, e) {
}, function (t, e, n) {
    n(57)("asyncIterator")
}, function (t, e, n) {
    n(57)("observable")
}, function (t, e, n) {
    t.exports = n(129)
}, function (t, e, n) {
    n(130), t.exports = n(1).Object.getPrototypeOf
}, function (t, e, n) {
    var r = n(31), o = n(59);
    n(63)("getPrototypeOf", function () {
        return function getPrototypeOf(t) {
            return o(r(t))
        }
    })
}, function (t, e, n) {
    n(132), t.exports = n(1).Object.setPrototypeOf
}, function (t, e, n) {
    var r = n(8);
    r(r.S, "Object", {setPrototypeOf: n(133).set})
}, function (t, e, n) {
    var r = n(17), o = n(18), i = function (t, e) {
        if (o(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
    };
    t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, r) {
            try {
                (r = n(68)(Function.call, n(38).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
            } catch (t) {
                e = !0
            }
            return function setPrototypeOf(t, n) {
                return i(t, n), e ? t.__proto__ = n : r(t, n), t
            }
        }({}, !1) : void 0), check: i
    }
}, function (t, e, n) {
    n(135);
    var r = n(1).Object;
    t.exports = function create(t, e) {
        return r.create(t, e)
    }
}, function (t, e, n) {
    var r = n(8);
    r(r.S, "Object", {create: n(51)})
}, function (t, e, n) {
    var r = n(79);

    function _setPrototypeOf(e, n) {
        return t.exports = _setPrototypeOf = r || function _setPrototypeOf(t, e) {
            return t.__proto__ = e, t
        }, _setPrototypeOf(e, n)
    }

    t.exports = _setPrototypeOf
}, function (t, e) {
    t.exports = {}
}, function (t, e, n) {
    var r = n(45)("keys"), o = n(46);
    t.exports = function (t) {
        return r[t] || (r[t] = o(t))
    }
}, function (t, e, n) {
    var r = n(22), o = n(29), i = n(9)("match");
    t.exports = function (t) {
        var e;
        return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t))
    }
}, function (t, e, n) {
    "use strict";
    var r = n(93), o = {};
    o[n(9)("toStringTag")] = "z", o + "" != "[object z]" && n(27)(Object.prototype, "toString", function toString() {
        return "[object " + r(this) + "]"
    }, !0)
}, function (t, e, n) {
    t.exports = n(146)
}, function (t, e, n) {
    "use strict";
    var r = n(73), o = n(170), i = n(137), u = n(91);
    t.exports = n(171)(Array, "Array", function (t, e) {
        this._t = u(t), this._i = 0, this._k = e
    }, function () {
        var t = this._t, e = this._k, n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
    }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
}, function (t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (t, e, n) {
    var r = n(43), o = n(32);
    t.exports = function (t) {
        return function (e, n) {
            var i, u, c = String(o(e)), s = r(n), f = c.length;
            return s < 0 || s >= f ? t ? "" : void 0 : (i = c.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === f || (u = c.charCodeAt(s + 1)) < 56320 || u > 57343 ? t ? c.charAt(s) : i : t ? c.slice(s, s + 2) : u - 56320 + (i - 55296 << 10) + 65536
        }
    }
}, function (t, e, n) {
    "use strict";
    var r = n(72);
    n(37)({target: "RegExp", proto: !0, forced: r !== /./.exec}, {exec: r})
}, function (t, e, n) {
    n(147);
    var r = n(1).Object;
    t.exports = function getOwnPropertyDescriptor(t, e) {
        return r.getOwnPropertyDescriptor(t, e)
    }
}, function (t, e, n) {
    var r = n(15), o = n(38).f;
    n(63)("getOwnPropertyDescriptor", function () {
        return function getOwnPropertyDescriptor(t, e) {
            return o(r(t), e)
        }
    })
}, function (t, e, n) {
    t.exports = n(149)
}, function (t, e, n) {
    n(150), t.exports = n(1).Reflect.get
}, function (t, e, n) {
    var r = n(38), o = n(59), i = n(12), u = n(8), c = n(17), s = n(18);
    u(u.S, "Reflect", {
        get: function get(t, e) {
            var n, u, f = arguments.length < 3 ? t : arguments[2];
            return s(t) === f ? t[e] : (n = r.f(t, e)) ? i(n, "value") ? n.value : void 0 !== n.get ? n.get.call(f) : void 0 : c(u = o(t)) ? get(u, e, f) : void 0
        }
    })
}, function (t, e, n) {
    var r = n(3);
    t.exports = function _superPropBase(t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = r(t));) ;
        return t
    }
}, function (t, e, n) {
    n(153), t.exports = n(1).Object.keys
}, function (t, e, n) {
    var r = n(31), o = n(28);
    n(63)("keys", function () {
        return function keys(t) {
            return o(r(t))
        }
    })
}, function (t, e, n) {
    var r = n(166), o = n(143);
    t.exports = Object.keys || function keys(t) {
        return r(t, o)
    }
}, function (t, e, n) {
    var r = n(36).f, o = n(47), i = n(9)("toStringTag");
    t.exports = function (t, e, n) {
        t && !o(t = n ? t : t.prototype, i) && r(t, i, {configurable: !0, value: e})
    }
}, function (t, e, n) {
    var r = n(19), o = n(61), i = n(9)("species");
    t.exports = function (t, e) {
        var n, u = r(t).constructor;
        return void 0 === u || null == (n = r(u)[i]) ? e : o(n)
    }
}, function (t, e) {
    t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
}, , function (t, e, n) {
    var r = n(91), o = n(42), i = n(160);
    t.exports = function (t) {
        return function (e, n, u) {
            var c, s = r(e), f = o(s.length), a = i(u, f);
            if (t && n != n) {
                for (; f > a;) if ((c = s[a++]) != c) return !0
            } else for (; f > a; a++) if ((t || a in s) && s[a] === n) return t || a || 0;
            return !t && -1
        }
    }
}, function (t, e, n) {
    var r = n(43), o = Math.max, i = Math.min;
    t.exports = function (t, e) {
        return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e)
    }
}, , function (t, e, n) {
    t.exports = n(176)
}, , function (t, e, n) {
    for (var r = n(142), o = n(154), i = n(27), u = n(11), c = n(21), s = n(137), f = n(9), a = f("iterator"), l = f("toStringTag"), p = s.Array, g = {
        CSSRuleList: !0,
        CSSStyleDeclaration: !1,
        CSSValueList: !1,
        ClientRectList: !1,
        DOMRectList: !1,
        DOMStringList: !1,
        DOMTokenList: !0,
        DataTransferItemList: !1,
        FileList: !1,
        HTMLAllCollection: !1,
        HTMLCollection: !1,
        HTMLFormElement: !1,
        HTMLSelectElement: !1,
        MediaList: !0,
        MimeTypeArray: !1,
        NamedNodeMap: !1,
        NodeList: !0,
        PaintRequestList: !1,
        Plugin: !1,
        PluginArray: !1,
        SVGLengthList: !1,
        SVGNumberList: !1,
        SVGPathSegList: !1,
        SVGPointList: !1,
        SVGStringList: !1,
        SVGTransformList: !1,
        SourceBufferList: !1,
        StyleSheetList: !0,
        TextTrackCueList: !1,
        TextTrackList: !1,
        TouchList: !1
    }, d = o(g), v = 0; v < d.length; v++) {
        var h, y = d[v], m = g[y], _ = u[y], x = _ && _.prototype;
        if (x && (x[a] || c(x, a, p), x[l] || c(x, l, y), s[y] = p, m)) for (h in r) x[h] || i(x, h, r[h], !0)
    }
}, function (t, e, n) {
    var r = n(19), o = n(173), i = n(143), u = n(138)("IE_PROTO"), c = function () {
    }, s = function () {
        var t, e = n(70)("iframe"), r = i.length;
        for (e.style.display = "none", n(174).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), s = t.F; r--;) delete s.prototype[i[r]];
        return s()
    };
    t.exports = Object.create || function create(t, e) {
        var n;
        return null !== t ? (c.prototype = r(t), n = new c, c.prototype = null, n[u] = t) : n = s(), void 0 === e ? n : o(n, e)
    }
}, function (t, e, n) {
    var r = n(47), o = n(91), i = n(159)(!1), u = n(138)("IE_PROTO");
    t.exports = function (t, e) {
        var n, c = o(t), s = 0, f = [];
        for (n in c) n != u && r(c, n) && f.push(n);
        for (; e.length > s;) r(c, n = e[s++]) && (~i(f, n) || f.push(n));
        return f
    }
}, , , , function (t, e) {
    t.exports = function (t, e) {
        return {value: e, done: !!t}
    }
}, function (t, e, n) {
    "use strict";
    var r = n(71), o = n(37), i = n(27), u = n(21), c = n(137), s = n(172), f = n(155), a = n(175),
        l = n(9)("iterator"), p = !([].keys && "next" in [].keys()), g = function () {
            return this
        };
    t.exports = function (t, e, n, d, v, h, y) {
        s(n, e, d);
        var m, _, x, b = function (t) {
                if (!p && t in E) return E[t];
                switch (t) {
                    case"keys":
                        return function keys() {
                            return new n(this, t)
                        };
                    case"values":
                        return function values() {
                            return new n(this, t)
                        }
                }
                return function entries() {
                    return new n(this, t)
                }
            }, S = e + " Iterator", O = "values" == v, w = !1, E = t.prototype, P = E[l] || E["@@iterator"] || v && E[v],
            j = P || b(v), k = v ? O ? b("entries") : j : void 0, L = "Array" == e && E.entries || P;
        if (L && (x = a(L.call(new t))) !== Object.prototype && x.next && (f(x, S, !0), r || "function" == typeof x[l] || u(x, l, g)), O && P && "values" !== P.name && (w = !0, j = function values() {
            return P.call(this)
        }), r && !y || !p && !w && E[l] || u(E, l, j), c[e] = j, c[S] = g, v) if (m = {
            values: O ? j : b("values"),
            keys: h ? j : b("keys"),
            entries: k
        }, y) for (_ in m) _ in E || i(E, _, m[_]); else o(o.P + o.F * (p || w), e, m);
        return m
    }
}, function (t, e, n) {
    "use strict";
    var r = n(165), o = n(67), i = n(155), u = {};
    n(21)(u, n(9)("iterator"), function () {
        return this
    }), t.exports = function (t, e, n) {
        t.prototype = r(u, {next: o(1, n)}), i(t, e + " Iterator")
    }
}, function (t, e, n) {
    var r = n(36), o = n(19), i = n(154);
    t.exports = n(20) ? Object.defineProperties : function defineProperties(t, e) {
        o(t);
        for (var n, u = i(e), c = u.length, s = 0; c > s;) r.f(t, n = u[s++], e[n]);
        return t
    }
}, function (t, e, n) {
    var r = n(11).document;
    t.exports = r && r.documentElement
}, function (t, e, n) {
    var r = n(47), o = n(62), i = n(138)("IE_PROTO"), u = Object.prototype;
    t.exports = Object.getPrototypeOf || function (t) {
        return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
    }
}, function (t, e, n) {
    n(177), t.exports = n(1).parseInt
}, function (t, e, n) {
    var r = n(8), o = n(178);
    r(r.G + r.F * (parseInt != o), {parseInt: o})
}, function (t, e, n) {
    var r = n(10).parseInt, o = n(179).trim, i = n(157), u = /^[-+]?0[xX]/;
    t.exports = 8 !== r(i + "08") || 22 !== r(i + "0x16") ? function parseInt(t, e) {
        var n = o(String(t), 3);
        return r(n, e >>> 0 || (u.test(n) ? 16 : 10))
    } : r
}, function (t, e, n) {
    var r = n(8), o = n(39), i = n(25), u = n(157), c = "[" + u + "]", s = RegExp("^" + c + c + "*"),
        f = RegExp(c + c + "*$"), a = function (t, e, n) {
            var o = {}, c = i(function () {
                return !!u[t]() || "​" != "​"[t]()
            }), s = o[t] = c ? e(l) : u[t];
            n && (o[n] = s), r(r.P + r.F * c, "String", o)
        }, l = a.trim = function (t, e) {
            return t = String(o(t)), 1 & e && (t = t.replace(s, "")), 2 & e && (t = t.replace(f, "")), t
        };
    t.exports = a
}, , , , , , , , , , , function (t, e, n) {
    "use strict";
    var r = n(0), o = r(n(96));
    n(48);
    var i = r(n(65));
    n(89);
    var u = function Module() {
        var t, e = jQuery, n = arguments, r = this, o = {}, u = function ensureClosureMethods() {
            e.each(r, function (t) {
                var e = r[t];
                "function" == typeof e && (r[t] = function () {
                    return e.apply(r, arguments)
                })
            })
        }, c = function initSettings() {
            t = r.getDefaultSettings();
            var o = n[0];
            o && e.extend(!0, t, o)
        }, s = function init() {
            r.__construct.apply(r, n), u(), c(), r.trigger("init")
        };
        this.getItems = function (t, e) {
            if (e) {
                var n = e.split("."), r = n.splice(0, 1);
                if (!n.length) return t[r];
                if (!t[r]) return;
                return this.getItems(t[r], n.join("."))
            }
            return t
        }, this.getSettings = function (e) {
            return this.getItems(t, e)
        }, this.setSettings = function (n, o, u) {
            if (u || (u = t), "object" === (0, i.default)(n)) return e.extend(u, n), r;
            var c = n.split("."), s = c.splice(0, 1);
            return c.length ? (u[s] || (u[s] = {}), r.setSettings(c.join("."), o, u[s])) : (u[s] = o, r)
        }, this.getErrorMessage = function (t, e) {
            var n;
            switch (t) {
                case"forceMethodImplementation":
                    n = "The method '".concat(e, "' must to be implemented in the inheritor child.");
                    break;
                default:
                    n = "An error occurs"
            }
            return n
        }, this.forceMethodImplementation = function (t) {
            throw new Error(this.getErrorMessage("forceMethodImplementation", t))
        }, this.on = function (t, n) {
            return "object" === (0, i.default)(t) ? (e.each(t, function (t) {
                r.on(t, this)
            }), r) : (t.split(" ").forEach(function (t) {
                o[t] || (o[t] = []), o[t].push(n)
            }), r)
        }, this.off = function (t, e) {
            if (!o[t]) return r;
            if (!e) return delete o[t], r;
            var n = o[t].indexOf(e);
            return -1 !== n && delete o[t][n], r
        }, this.trigger = function (t) {
            var n = "on" + t[0].toUpperCase() + t.slice(1), i = Array.prototype.slice.call(arguments, 1);
            r[n] && r[n].apply(r, i);
            var u = o[t];
            return u ? (e.each(u, function (t, e) {
                e.apply(r, i)
            }), r) : r
        }, s()
    };
    u.prototype.__construct = function () {
    }, u.prototype.getDefaultSettings = function () {
        return {}
    }, u.prototype.getConstructorID = function () {
        return this.constructor.name
    }, u.extend = function (t) {
        var e = jQuery, n = this, r = function child() {
            return n.apply(this, arguments)
        };
        return e.extend(r, n), (r.prototype = (0, o.default)(e.extend({}, n.prototype, t))).constructor = r, r.__super__ = n.prototype, r
    }, t.exports = u
}, function (t, e, n) {
    "use strict";
    var r = n(0)(n(190));
    t.exports = r.default.extend({
        elements: null, getDefaultElements: function getDefaultElements() {
            return {}
        }, bindEvents: function bindEvents() {
        }, onInit: function onInit() {
            this.initElements(), this.bindEvents()
        }, initElements: function initElements() {
            this.elements = this.getDefaultElements()
        }
    })
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e, n) {
    "use strict";
    var r = n(0);
    n(2)(e, "__esModule", {value: !0}), e.default = void 0, n(26);
    var o = r(n(4)), i = r(n(5)), u = r(n(6)), c = r(n(3)), s = r(n(44)), f = r(n(7)), a = function (t) {
        function _default() {
            return (0, o.default)(this, _default), (0, u.default)(this, (0, c.default)(_default).apply(this, arguments))
        }

        return (0, f.default)(_default, t), (0, i.default)(_default, [{
            key: "getDefaultSettings",
            value: function getDefaultSettings() {
                return {
                    selectors: {
                        elements: ".elementor-element",
                        nestedDocumentElements: ".elementor .elementor-element"
                    }, classes: {editMode: "elementor-edit-mode"}
                }
            }
        }, {
            key: "getDefaultElements", value: function getDefaultElements() {
                var t = this.getSettings("selectors");
                return {$elements: this.$element.find(t.elements).not(this.$element.find(t.nestedDocumentElements))}
            }
        }, {
            key: "getDocumentSettings", value: function getDocumentSettings(t) {
                var e;
                if (this.isEdit) {
                    e = {};
                    var n = elementor.settings.page.model;
                    jQuery.each(n.getActiveControls(), function (t) {
                        e[t] = n.attributes[t]
                    })
                } else e = this.$element.data("elementor-settings") || {};
                return this.getItems(e, t)
            }
        }, {
            key: "runElementsHandlers", value: function runElementsHandlers() {
                this.elements.$elements.each(function (t, e) {
                    return elementorFrontend.elementsHandler.runReadyTrigger(e)
                })
            }
        }, {
            key: "onInit", value: function onInit() {
                this.$element = this.getSettings("$element"), (0, s.default)((0, c.default)(_default.prototype), "onInit", this).call(this), this.isEdit = this.$element.hasClass(this.getSettings("classes.editMode")), this.isEdit ? elementor.settings.page.model.on("change", this.onSettingsChange.bind(this)) : this.runElementsHandlers()
            }
        }, {
            key: "onSettingsChange", value: function onSettingsChange() {
            }
        }]), _default
    }(elementorModules.ViewModule);
    e.default = a
}, , function (t, e, n) {
    "use strict";
    var r = n(0);
    n(2)(e, "__esModule", {value: !0}), e.default = void 0;
    var o = r(n(190)), i = r(n(191)), u = r(n(235)),
        c = window.elementorModules = {Module: o.default, ViewModule: i.default, utils: {Masonry: u.default}};
    e.default = c
}, function (t, e, n) {
    "use strict";
    var r = n(0), o = r(n(162)), i = r(n(191));
    t.exports = i.default.extend({
        getDefaultSettings: function getDefaultSettings() {
            return {container: null, items: null, columnsCount: 3, verticalSpaceBetween: 30}
        }, getDefaultElements: function getDefaultElements() {
            return {$container: jQuery(this.getSettings("container")), $items: jQuery(this.getSettings("items"))}
        }, run: function run() {
            var t = [], e = this.elements.$container.position().top, n = this.getSettings(), r = n.columnsCount;
            e += (0, o.default)(this.elements.$container.css("margin-top"), 10), this.elements.$items.each(function (i) {
                var u = Math.floor(i / r), c = jQuery(this),
                    s = c[0].getBoundingClientRect().height + n.verticalSpaceBetween;
                if (u) {
                    var f = c.position(), a = i % r, l = f.top - e - t[a];
                    l -= (0, o.default)(c.css("margin-top"), 10), l *= -1, c.css("margin-top", l + "px"), t[a] += s
                } else t.push(s)
            })
        }
    })
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e, n) {
    "use strict";
    var r = n(0), o = r(n(234)), i = r(n(232)), u = r(n(510)), c = r(n(511));
    o.default.frontend = {Document: i.default, tools: {StretchElement: u.default}, handlers: {Base: c.default}}
}, function (t, e, n) {
    "use strict";
    t.exports = elementorModules.ViewModule.extend({
        getDefaultSettings: function getDefaultSettings() {
            return {
                element: null,
                direction: elementorFrontend.config.is_rtl ? "right" : "left",
                selectors: {container: window}
            }
        }, getDefaultElements: function getDefaultElements() {
            return {$element: jQuery(this.getSettings("element"))}
        }, stretch: function stretch() {
            var t, e = this.getSettings("selectors.container");
            try {
                t = jQuery(e)
            } catch (t) {
            }
            t && t.length || (t = jQuery(this.getDefaultSettings().selectors.container)), this.reset();
            var n = this.elements.$element, r = t.outerWidth(), o = n.offset().left, i = "fixed" === n.css("position"),
                u = i ? 0 : o;
            if (window !== t[0]) {
                var c = t.offset().left;
                i && (u = c), o > c && (u = o - c)
            }
            i || (elementorFrontend.config.is_rtl && (u = r - (n.outerWidth() + u)), u = -u);
            var s = {};
            s.width = r + "px", s[this.getSettings("direction")] = u + "px", n.css(s)
        }, reset: function reset() {
            var t = {width: ""};
            t[this.getSettings("direction")] = "", this.elements.$element.css(t)
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(0);
    n(164), n(142), n(140), n(89);
    var o = r(n(58));
    n(26), t.exports = elementorModules.ViewModule.extend({
        $element: null,
        editorListeners: null,
        onElementChange: null,
        onEditSettingsChange: null,
        onGeneralSettingsChange: null,
        onPageSettingsChange: null,
        isEdit: null,
        __construct: function __construct(t) {
            this.$element = t.$element, this.isEdit = this.$element.hasClass("elementor-element-edit-mode"), this.isEdit && this.addEditorListeners()
        },
        findElement: function findElement(t) {
            var e = this.$element;
            return e.find(t).filter(function () {
                return jQuery(this).closest(".elementor-element").is(e)
            })
        },
        getUniqueHandlerID: function getUniqueHandlerID(t, e) {
            return t || (t = this.getModelCID()), e || (e = this.$element), t + e.attr("data-element_type") + this.getConstructorID()
        },
        initEditorListeners: function initEditorListeners() {
            var t = this;
            if (t.editorListeners = [{
                event: "element:destroy",
                to: elementor.channels.data,
                callback: function callback(e) {
                    e.cid === t.getModelCID() && t.onDestroy()
                }
            }], t.onElementChange) {
                var e = t.getWidgetType() || t.getElementType(), n = "change";
                "global" !== e && (n += ":" + e), t.editorListeners.push({
                    event: n,
                    to: elementor.channels.editor,
                    callback: function callback(e, n) {
                        t.getUniqueHandlerID(n.model.cid, n.$el) === t.getUniqueHandlerID() && t.onElementChange(e.model.get("name"), e, n)
                    }
                })
            }
            t.onEditSettingsChange && t.editorListeners.push({
                event: "change:editSettings",
                to: elementor.channels.editor,
                callback: function callback(e, n) {
                    n.model.cid === t.getModelCID() && t.onEditSettingsChange((0, o.default)(e.changed)[0])
                }
            }), ["page", "general"].forEach(function (e) {
                var n = "on" + e[0].toUpperCase() + e.slice(1) + "SettingsChange";
                t[n] && t.editorListeners.push({
                    event: "change",
                    to: elementor.settings[e].model,
                    callback: function callback(e) {
                        t[n](e.changed)
                    }
                })
            })
        },
        getEditorListeners: function getEditorListeners() {
            return this.editorListeners || this.initEditorListeners(), this.editorListeners
        },
        addEditorListeners: function addEditorListeners() {
            var t = this.getUniqueHandlerID();
            this.getEditorListeners().forEach(function (e) {
                elementorFrontend.addListenerOnce(t, e.event, e.callback, e.to)
            })
        },
        removeEditorListeners: function removeEditorListeners() {
            var t = this.getUniqueHandlerID();
            this.getEditorListeners().forEach(function (e) {
                elementorFrontend.removeListeners(t, e.event, null, e.to)
            })
        },
        getElementType: function getElementType() {
            return this.$element.data("element_type")
        },
        getWidgetType: function getWidgetType() {
            var t = this.$element.data("widget_type");
            if (t) return t.split(".")[0]
        },
        getID: function getID() {
            return this.$element.data("id")
        },
        getModelCID: function getModelCID() {
            return this.$element.data("model-cid")
        },
        getElementSettings: function getElementSettings(t) {
            var e = {}, n = this.getModelCID();
            if (this.isEdit && n) {
                var r = elementorFrontend.config.elements.data[n], o = r.attributes, i = o.widgetType || o.elType;
                o.isInner && (i = "inner-" + i);
                var u = elementorFrontend.config.elements.keys[i];
                u || (u = elementorFrontend.config.elements.keys[i] = [], jQuery.each(r.controls, function (t, e) {
                    e.frontend_available && u.push(t)
                })), jQuery.each(r.getActiveControls(), function (t) {
                    if (-1 !== u.indexOf(t)) {
                        var n = o[t];
                        n.toJSON && (n = n.toJSON()), e[t] = n
                    }
                })
            } else e = this.$element.data("settings") || {};
            return this.getItems(e, t)
        },
        getEditSettings: function getEditSettings(t) {
            var e = {};
            return this.isEdit && (e = elementorFrontend.config.elements.editSettings[this.getModelCID()].attributes), this.getItems(e, t)
        },
        getCurrentDeviceSetting: function getCurrentDeviceSetting(t) {
            return elementorFrontend.getCurrentDeviceSetting(this.getElementSettings(), t)
        },
        onDestroy: function onDestroy() {
            this.isEdit && this.removeEditorListeners(), this.unbindEvents && this.unbindEvents()
        }
    })
}]);
/*!
 * jQuery UI Position 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
    return function () {
        function b(a, b, c) {
            return [parseFloat(a[0]) * (n.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (n.test(a[1]) ? c / 100 : 1)]
        }

        function c(b, c) {
            return parseInt(a.css(b, c), 10) || 0
        }

        function d(b) {
            var c = b[0];
            return 9 === c.nodeType ? {
                width: b.width(),
                height: b.height(),
                offset: {top: 0, left: 0}
            } : a.isWindow(c) ? {
                width: b.width(),
                height: b.height(),
                offset: {top: b.scrollTop(), left: b.scrollLeft()}
            } : c.preventDefault ? {
                width: 0,
                height: 0,
                offset: {top: c.pageY, left: c.pageX}
            } : {width: b.outerWidth(), height: b.outerHeight(), offset: b.offset()}
        }

        a.ui = a.ui || {};
        var e, f, g = Math.max, h = Math.abs, i = Math.round, j = /left|center|right/, k = /top|center|bottom/,
            l = /[\+\-]\d+(\.[\d]+)?%?/, m = /^\w+/, n = /%$/, o = a.fn.position;
        a.position = {
            scrollbarWidth: function () {
                if (void 0 !== e) return e;
                var b, c,
                    d = a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    f = d.children()[0];
                return a("body").append(d), b = f.offsetWidth, d.css("overflow", "scroll"), c = f.offsetWidth, b === c && (c = d[0].clientWidth), d.remove(), e = b - c
            }, getScrollInfo: function (b) {
                var c = b.isWindow || b.isDocument ? "" : b.element.css("overflow-x"),
                    d = b.isWindow || b.isDocument ? "" : b.element.css("overflow-y"),
                    e = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth,
                    f = "scroll" === d || "auto" === d && b.height < b.element[0].scrollHeight;
                return {width: f ? a.position.scrollbarWidth() : 0, height: e ? a.position.scrollbarWidth() : 0}
            }, getWithinInfo: function (b) {
                var c = a(b || window), d = a.isWindow(c[0]), e = !!c[0] && 9 === c[0].nodeType;
                return {
                    element: c,
                    isWindow: d,
                    isDocument: e,
                    offset: c.offset() || {left: 0, top: 0},
                    scrollLeft: c.scrollLeft(),
                    scrollTop: c.scrollTop(),
                    width: d || e ? c.width() : c.outerWidth(),
                    height: d || e ? c.height() : c.outerHeight()
                }
            }
        }, a.fn.position = function (e) {
            if (!e || !e.of) return o.apply(this, arguments);
            e = a.extend({}, e);
            var n, p, q, r, s, t, u = a(e.of), v = a.position.getWithinInfo(e.within), w = a.position.getScrollInfo(v),
                x = (e.collision || "flip").split(" "), y = {};
            return t = d(u), u[0].preventDefault && (e.at = "left top"), p = t.width, q = t.height, r = t.offset, s = a.extend({}, r), a.each(["my", "at"], function () {
                var a, b, c = (e[this] || "").split(" ");
                1 === c.length && (c = j.test(c[0]) ? c.concat(["center"]) : k.test(c[0]) ? ["center"].concat(c) : ["center", "center"]), c[0] = j.test(c[0]) ? c[0] : "center", c[1] = k.test(c[1]) ? c[1] : "center", a = l.exec(c[0]), b = l.exec(c[1]), y[this] = [a ? a[0] : 0, b ? b[0] : 0], e[this] = [m.exec(c[0])[0], m.exec(c[1])[0]]
            }), 1 === x.length && (x[1] = x[0]), "right" === e.at[0] ? s.left += p : "center" === e.at[0] && (s.left += p / 2), "bottom" === e.at[1] ? s.top += q : "center" === e.at[1] && (s.top += q / 2), n = b(y.at, p, q), s.left += n[0], s.top += n[1], this.each(function () {
                var d, j, k = a(this), l = k.outerWidth(), m = k.outerHeight(), o = c(this, "marginLeft"),
                    t = c(this, "marginTop"), z = l + o + c(this, "marginRight") + w.width,
                    A = m + t + c(this, "marginBottom") + w.height, B = a.extend({}, s),
                    C = b(y.my, k.outerWidth(), k.outerHeight());
                "right" === e.my[0] ? B.left -= l : "center" === e.my[0] && (B.left -= l / 2), "bottom" === e.my[1] ? B.top -= m : "center" === e.my[1] && (B.top -= m / 2), B.left += C[0], B.top += C[1], f || (B.left = i(B.left), B.top = i(B.top)), d = {
                    marginLeft: o,
                    marginTop: t
                }, a.each(["left", "top"], function (b, c) {
                    a.ui.position[x[b]] && a.ui.position[x[b]][c](B, {
                        targetWidth: p,
                        targetHeight: q,
                        elemWidth: l,
                        elemHeight: m,
                        collisionPosition: d,
                        collisionWidth: z,
                        collisionHeight: A,
                        offset: [n[0] + C[0], n[1] + C[1]],
                        my: e.my,
                        at: e.at,
                        within: v,
                        elem: k
                    })
                }), e.using && (j = function (a) {
                    var b = r.left - B.left, c = b + p - l, d = r.top - B.top, f = d + q - m, i = {
                        target: {element: u, left: r.left, top: r.top, width: p, height: q},
                        element: {element: k, left: B.left, top: B.top, width: l, height: m},
                        horizontal: c < 0 ? "left" : b > 0 ? "right" : "center",
                        vertical: f < 0 ? "top" : d > 0 ? "bottom" : "middle"
                    };
                    p < l && h(b + c) < p && (i.horizontal = "center"), q < m && h(d + f) < q && (i.vertical = "middle"), g(h(b), h(c)) > g(h(d), h(f)) ? i.important = "horizontal" : i.important = "vertical", e.using.call(this, a, i)
                }), k.offset(a.extend(B, {using: j}))
            })
        }, a.ui.position = {
            fit: {
                left: function (a, b) {
                    var c, d = b.within, e = d.isWindow ? d.scrollLeft : d.offset.left, f = d.width,
                        h = a.left - b.collisionPosition.marginLeft, i = e - h, j = h + b.collisionWidth - f - e;
                    b.collisionWidth > f ? i > 0 && j <= 0 ? (c = a.left + i + b.collisionWidth - f - e, a.left += i - c) : j > 0 && i <= 0 ? a.left = e : i > j ? a.left = e + f - b.collisionWidth : a.left = e : i > 0 ? a.left += i : j > 0 ? a.left -= j : a.left = g(a.left - h, a.left)
                }, top: function (a, b) {
                    var c, d = b.within, e = d.isWindow ? d.scrollTop : d.offset.top, f = b.within.height,
                        h = a.top - b.collisionPosition.marginTop, i = e - h, j = h + b.collisionHeight - f - e;
                    b.collisionHeight > f ? i > 0 && j <= 0 ? (c = a.top + i + b.collisionHeight - f - e, a.top += i - c) : j > 0 && i <= 0 ? a.top = e : i > j ? a.top = e + f - b.collisionHeight : a.top = e : i > 0 ? a.top += i : j > 0 ? a.top -= j : a.top = g(a.top - h, a.top)
                }
            }, flip: {
                left: function (a, b) {
                    var c, d, e = b.within, f = e.offset.left + e.scrollLeft, g = e.width,
                        i = e.isWindow ? e.scrollLeft : e.offset.left, j = a.left - b.collisionPosition.marginLeft,
                        k = j - i, l = j + b.collisionWidth - g - i,
                        m = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0,
                        n = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0,
                        o = -2 * b.offset[0];
                    k < 0 ? (c = a.left + m + n + o + b.collisionWidth - g - f, (c < 0 || c < h(k)) && (a.left += m + n + o)) : l > 0 && (d = a.left - b.collisionPosition.marginLeft + m + n + o - i, (d > 0 || h(d) < l) && (a.left += m + n + o))
                }, top: function (a, b) {
                    var c, d, e = b.within, f = e.offset.top + e.scrollTop, g = e.height,
                        i = e.isWindow ? e.scrollTop : e.offset.top, j = a.top - b.collisionPosition.marginTop,
                        k = j - i, l = j + b.collisionHeight - g - i, m = "top" === b.my[1],
                        n = m ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0,
                        o = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0,
                        p = -2 * b.offset[1];
                    k < 0 ? (d = a.top + n + o + p + b.collisionHeight - g - f, (d < 0 || d < h(k)) && (a.top += n + o + p)) : l > 0 && (c = a.top - b.collisionPosition.marginTop + n + o + p - i, (c > 0 || h(c) < l) && (a.top += n + o + p))
                }
            }, flipfit: {
                left: function () {
                    a.ui.position.flip.left.apply(this, arguments), a.ui.position.fit.left.apply(this, arguments)
                }, top: function () {
                    a.ui.position.flip.top.apply(this, arguments), a.ui.position.fit.top.apply(this, arguments)
                }
            }
        }, function () {
            var b, c, d, e, g, h = document.getElementsByTagName("body")[0], i = document.createElement("div");
            b = document.createElement(h ? "div" : "body"), d = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            }, h && a.extend(d, {position: "absolute", left: "-1000px", top: "-1000px"});
            for (g in d) b.style[g] = d[g];
            b.appendChild(i), c = h || document.documentElement, c.insertBefore(b, c.firstChild), i.style.cssText = "position: absolute; left: 10.7432222px;", e = a(i).offset().left, f = e > 10 && e < 11, b.innerHTML = "", c.removeChild(b)
        }()
    }(), a.ui.position
});
/*! dialogs-manager v4.7.3 | (c) Kobi Zaltzberg | https://github.com/kobizz/dialogs-manager/blob/master/LICENSE.txt
 2019-07-15 18:16 */
!function (a, b) {
    "use strict";
    var c = {
        widgetsTypes: {}, createWidgetType: function (b, d, e) {
            e || (e = this.Widget);
            var f = function () {
                e.apply(this, arguments)
            }, g = f.prototype = new e(b);
            return g.types = g.types.concat([b]), a.extend(g, d), g.constructor = f, f.extend = function (a, b) {
                return c.createWidgetType(a, b, f)
            }, f
        }, addWidgetType: function (a, b, c) {
            return b && b.prototype instanceof this.Widget ? this.widgetsTypes[a] = b : this.widgetsTypes[a] = this.createWidgetType(a, b, c)
        }, getWidgetType: function (a) {
            return this.widgetsTypes[a]
        }
    };
    c.Instance = function () {
        var b = this, d = {}, e = {}, f = function () {
            d.body = a("body")
        }, g = function (b) {
            var c = {classPrefix: "dialog", effects: {show: "fadeIn", hide: "fadeOut"}};
            a.extend(e, c, b)
        };
        this.createWidget = function (a, d) {
            var e = c.getWidgetType(a), f = new e(a);
            return d = d || {}, f.init(b, d), f
        }, this.getSettings = function (a) {
            return a ? e[a] : Object.create(e)
        }, this.init = function (a) {
            return g(a), f(), b
        }, b.init()
    }, c.Widget = function (b) {
        var d = this, e = {}, f = {}, g = {}, h = 0, i = ["refreshPosition"], j = function () {
            var a = [g.window];
            g.iframe && a.push(jQuery(g.iframe[0].contentWindow)), a.forEach(function (a) {
                e.hide.onEscKeyPress && a.on("keyup", v), e.hide.onOutsideClick && a[0].addEventListener("click", p, !0), e.hide.onOutsideContextMenu && a[0].addEventListener("contextmenu", p, !0), e.position.autoRefresh && a.on("resize", d.refreshPosition)
            }), (e.hide.onClick || e.hide.onBackgroundClick) && g.widget.on("click", n)
        }, k = function (b, c) {
            var d = e.effects[b], f = g.widget;
            if (a.isFunction(d)) d.apply(f, c); else {
                if (!f[d]) throw"Reference Error: The effect " + d + " not found";
                f[d].apply(f, c)
            }
        }, l = function () {
            var b = i.concat(d.getClosureMethods());
            a.each(b, function () {
                var a = this, b = d[a];
                d[a] = function () {
                    b.apply(d, arguments)
                }
            })
        }, m = function (a) {
            if (a.my) {
                var b = /left|right/, c = /([+-]\d+)?$/, d = g.iframe.offset(), e = g.iframe[0].contentWindow,
                    f = a.my.split(" "), h = [];
                1 === f.length && (b.test(f[0]) ? f.push("center") : f.unshift("center")), f.forEach(function (a, b) {
                    var f = a.replace(c, function (a) {
                        return a = +a || 0, a += b ? d.top - e.scrollY : d.left - e.scrollX, a >= 0 && (a = "+" + a), a
                    });
                    h.push(f)
                }), a.my = h.join(" ")
            }
        }, n = function (b) {
            if (!t(b)) {
                if (e.hide.onClick) {
                    if (a(b.target).closest(e.selectors.preventClose).length) return
                } else if (b.target !== this) return;
                d.hide()
            }
        }, o = function (b) {
            return !!e.hide.ignore && !!a(b.target).closest(e.hide.ignore).length
        }, p = function (b) {
            t(b) || a(b.target).closest(g.widget).length || o(b) || d.hide()
        }, q = function () {
            d.addElement("widget"), d.addElement("header"), d.addElement("message"), d.addElement("window", window), d.addElement("body", document.body), d.addElement("container", e.container), e.iframe && d.addElement("iframe", e.iframe), e.closeButton && d.addElement("closeButton", '<div><i class="' + e.closeButtonClass + '"></i></div>');
            var b = d.getSettings("id");
            b && d.setID(b);
            var c = [];
            a.each(d.types, function () {
                c.push(e.classes.globalPrefix + "-type-" + this)
            }), c.push(d.getSettings("className")), g.widget.addClass(c.join(" "))
        }, r = function (c, f) {
            var g = a.extend(!0, {}, c.getSettings());
            e = {
                headerMessage: "",
                message: "",
                effects: g.effects,
                classes: {
                    globalPrefix: g.classPrefix,
                    prefix: g.classPrefix + "-" + b,
                    preventScroll: g.classPrefix + "-prevent-scroll"
                },
                selectors: {preventClose: "." + g.classPrefix + "-prevent-close"},
                container: "body",
                preventScroll: !1,
                iframe: null,
                closeButton: !1,
                closeButtonClass: g.classPrefix + "-close-button-icon",
                position: {element: "widget", my: "center", at: "center", enable: !0, autoRefresh: !1},
                hide: {
                    auto: !1,
                    autoDelay: 5e3,
                    onClick: !1,
                    onOutsideClick: !0,
                    onOutsideContextMenu: !1,
                    onBackgroundClick: !0,
                    onEscKeyPress: !0,
                    ignore: ""
                }
            }, a.extend(!0, e, d.getDefaultSettings(), f), s()
        }, s = function () {
            a.each(e, function (a) {
                var b = a.match(/^on([A-Z].*)/);
                b && (b = b[1].charAt(0).toLowerCase() + b[1].slice(1), d.on(b, this))
            })
        }, t = function (a) {
            return "click" === a.type && 2 === a.button
        }, u = function (a) {
            return a.replace(/([a-z])([A-Z])/g, function () {
                return arguments[1] + "-" + arguments[2].toLowerCase()
            })
        }, v = function (a) {
            var b = 27, c = a.which;
            b === c && d.hide()
        }, w = function () {
            var a = [g.window];
            g.iframe && a.push(jQuery(g.iframe[0].contentWindow)), a.forEach(function (a) {
                e.hide.onEscKeyPress && a.off("keyup", v), e.hide.onOutsideClick && a[0].removeEventListener("click", p, !0), e.hide.onOutsideContextMenu && a[0].removeEventListener("contextmenu", p, !0), e.position.autoRefresh && a.off("resize", d.refreshPosition)
            }), (e.hide.onClick || e.hide.onBackgroundClick) && g.widget.off("click", n)
        };
        this.addElement = function (b, c, d) {
            var f = g[b] = a(c || "<div>"), h = u(b);
            return d = d ? d + " " : "", d += e.classes.globalPrefix + "-" + h, d += " " + e.classes.prefix + "-" + h, f.addClass(d), f
        }, this.destroy = function () {
            return w(), g.widget.remove(), d.trigger("destroy"), d
        }, this.getElements = function (a) {
            return a ? g[a] : g
        }, this.getSettings = function (a) {
            var b = Object.create(e);
            return a ? b[a] : b
        }, this.hide = function () {
            return clearTimeout(h), k("hide", arguments), w(), e.preventScroll && d.getElements("body").removeClass(e.classes.preventScroll), d.trigger("hide"), d
        }, this.init = function (a, b) {
            if (!(a instanceof c.Instance)) throw"The " + d.widgetName + " must to be initialized from an instance of DialogsManager.Instance";
            return l(), d.trigger("init", b), r(a, b), q(), d.buildWidget(), d.attachEvents(), d.trigger("ready"), d
        }, this.isVisible = function () {
            return g.widget.is(":visible")
        }, this.on = function (b, c) {
            if ("object" == typeof b) return a.each(b, function (a) {
                d.on(a, this)
            }), d;
            var e = b.split(" ");
            return e.forEach(function (a) {
                f[a] || (f[a] = []), f[a].push(c)
            }), d
        }, this.off = function (a, b) {
            if (!f[a]) return d;
            if (!b) return delete f[a], d;
            var c = f[a].indexOf(b);
            return -1 !== c && f[a].splice(c, 1), d
        }, this.refreshPosition = function () {
            if (e.position.enable) {
                var b = a.extend({}, e.position);
                g[b.of] && (b.of = g[b.of]), b.of || (b.of = window), e.iframe && m(b), g[b.element].position(b)
            }
        }, this.setID = function (a) {
            return g.widget.attr("id", a), d
        }, this.setHeaderMessage = function (a) {
            return d.getElements("header").html(a), this
        }, this.setMessage = function (a) {
            return g.message.html(a), d
        }, this.setSettings = function (b, c) {
            return jQuery.isPlainObject(c) ? a.extend(!0, e[b], c) : e[b] = c, d
        }, this.show = function () {
            return clearTimeout(h), g.widget.appendTo(g.container).hide(), k("show", arguments), d.refreshPosition(), e.hide.auto && (h = setTimeout(d.hide, e.hide.autoDelay)), j(), e.preventScroll && d.getElements("body").addClass(e.classes.preventScroll), d.trigger("show"), d
        }, this.trigger = function (b, c) {
            var e = "on" + b[0].toUpperCase() + b.slice(1);
            d[e] && d[e](c);
            var g = f[b];
            if (g) return a.each(g, function (a, b) {
                b.call(d, c)
            }), d
        }
    }, c.Widget.prototype.types = [], c.Widget.prototype.buildWidget = function () {
        var a = this.getElements(), b = this.getSettings();
        a.widget.append(a.header, a.message), this.setHeaderMessage(b.headerMessage), this.setMessage(b.message), this.getSettings("closeButton") && a.widget.prepend(a.closeButton)
    }, c.Widget.prototype.attachEvents = function () {
        var a = this;
        a.getSettings("closeButton") && a.getElements("closeButton").on("click", function () {
            a.hide()
        })
    }, c.Widget.prototype.getDefaultSettings = function () {
        return {}
    }, c.Widget.prototype.getClosureMethods = function () {
        return []
    }, c.Widget.prototype.onHide = function () {
    }, c.Widget.prototype.onShow = function () {
    }, c.Widget.prototype.onInit = function () {
    }, c.Widget.prototype.onReady = function () {
    }, c.widgetsTypes.simple = c.Widget, c.addWidgetType("buttons", {
        activeKeyUp: function (a) {
            var b = 9;
            a.which === b && a.preventDefault(), this.hotKeys[a.which] && this.hotKeys[a.which](this)
        }, activeKeyDown: function (a) {
            if (this.focusedButton) {
                var b = 9;
                if (a.which === b) {
                    a.preventDefault();
                    var c, d = this.focusedButton.index();
                    a.shiftKey ? (c = d - 1, c < 0 && (c = this.buttons.length - 1)) : (c = d + 1, c >= this.buttons.length && (c = 0)), this.focusedButton = this.buttons[c].focus()
                }
            }
        }, addButton: function (b) {
            var c = this, d = c.getSettings(), e = jQuery.extend(d.button, b), f = b.classes ? b.classes + " " : "";
            f += d.classes.globalPrefix + "-button";
            var g = c.addElement(b.name, a("<" + e.tag + ">").text(b.text), f);
            c.buttons.push(g);
            var h = function () {
                d.hide.onButtonClick && c.hide(), a.isFunction(b.callback) && b.callback.call(this, c)
            };
            return g.on("click", h), b.hotKey && (this.hotKeys[b.hotKey] = h), this.getElements("buttonsWrapper").append(g), b.focus && (this.focusedButton = g), c
        }, bindHotKeys: function () {
            this.getElements("window").on({keyup: this.activeKeyUp, keydown: this.activeKeyDown})
        }, buildWidget: function () {
            c.Widget.prototype.buildWidget.apply(this, arguments);
            var a = this.addElement("buttonsWrapper");
            this.getElements("widget").append(a)
        }, getClosureMethods: function () {
            return ["activeKeyUp", "activeKeyDown"]
        }, getDefaultSettings: function () {
            return {hide: {onButtonClick: !0}, button: {tag: "button"}}
        }, onHide: function () {
            this.unbindHotKeys()
        }, onInit: function () {
            this.buttons = [], this.hotKeys = {}, this.focusedButton = null
        }, onShow: function () {
            this.bindHotKeys(), this.focusedButton || (this.focusedButton = this.buttons[0]), this.focusedButton && this.focusedButton.focus()
        }, unbindHotKeys: function () {
            this.getElements("window").off({keyup: this.activeKeyUp, keydown: this.activeKeyDown})
        }
    }), c.addWidgetType("lightbox", c.getWidgetType("buttons").extend("lightbox", {
        getDefaultSettings: function () {
            var b = c.getWidgetType("buttons").prototype.getDefaultSettings.apply(this, arguments);
            return a.extend(!0, b, {
                contentWidth: "auto",
                contentHeight: "auto",
                position: {element: "widgetContent", of: "widget", autoRefresh: !0}
            })
        }, buildWidget: function () {
            c.getWidgetType("buttons").prototype.buildWidget.apply(this, arguments);
            var a = this.addElement("widgetContent"), b = this.getElements();
            a.append(b.header, b.message, b.buttonsWrapper), b.widget.html(a), b.closeButton && a.prepend(b.closeButton)
        }, onReady: function () {
            var a = this.getElements(), b = this.getSettings();
            "auto" !== b.contentWidth && a.message.width(b.contentWidth), "auto" !== b.contentHeight && a.message.height(b.contentHeight)
        }
    })), c.addWidgetType("confirm", c.getWidgetType("lightbox").extend("confirm", {
        onReady: function () {
            c.getWidgetType("lightbox").prototype.onReady.apply(this, arguments);
            var a = this.getSettings("strings"), b = "cancel" === this.getSettings("defaultOption");
            this.addButton({
                name: "cancel", text: a.cancel, callback: function (a) {
                    a.trigger("cancel")
                }, focus: b
            }), this.addButton({
                name: "ok", text: a.confirm, callback: function (a) {
                    a.trigger("confirm")
                }, focus: !b
            })
        }, getDefaultSettings: function () {
            var a = c.getWidgetType("lightbox").prototype.getDefaultSettings.apply(this, arguments);
            return a.strings = {confirm: "OK", cancel: "Cancel"}, a.defaultOption = "cancel", a
        }
    })), c.addWidgetType("alert", c.getWidgetType("lightbox").extend("alert", {
        onReady: function () {
            c.getWidgetType("lightbox").prototype.onReady.apply(this, arguments);
            var a = this.getSettings("strings");
            this.addButton({
                name: "ok", text: a.confirm, callback: function (a) {
                    a.trigger("confirm")
                }
            })
        }, getDefaultSettings: function () {
            var a = c.getWidgetType("lightbox").prototype.getDefaultSettings.apply(this, arguments);
            return a.strings = {confirm: "OK"}, a
        }
    })), b.DialogsManager = c
}("undefined" != typeof jQuery ? jQuery : "function" == typeof require && require("jquery"), "undefined" != typeof module ? module.exports : window);
!function () {
    "use strict";

    function Waypoint(options) {
        if (!options) throw new Error("No options passed to Waypoint constructor");
        if (!options.element) throw new Error("No element option passed to Waypoint constructor");
        if (!options.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + keyCounter, this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options), this.element = this.options.element, this.adapter = new Waypoint.Adapter(this.element), this.callback = options.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = Waypoint.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = Waypoint.Context.findOrCreateByElement(this.options.context), Waypoint.offsetAliases[this.options.offset] && (this.options.offset = Waypoint.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), allWaypoints[this.key] = this, keyCounter += 1
    }

    var keyCounter = 0, allWaypoints = {};
    Waypoint.prototype.queueTrigger = function (direction) {
        this.group.queueTrigger(this, direction)
    }, Waypoint.prototype.trigger = function (args) {
        this.enabled && this.callback && this.callback.apply(this, args)
    }, Waypoint.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete allWaypoints[this.key]
    }, Waypoint.prototype.disable = function () {
        return this.enabled = !1, this
    }, Waypoint.prototype.enable = function () {
        return this.context.refresh(), this.enabled = !0, this
    }, Waypoint.prototype.next = function () {
        return this.group.next(this)
    }, Waypoint.prototype.previous = function () {
        return this.group.previous(this)
    }, Waypoint.invokeAll = function (method) {
        var allWaypointsArray = [];
        for (var waypointKey in allWaypoints) allWaypointsArray.push(allWaypoints[waypointKey]);
        for (var i = 0, end = allWaypointsArray.length; i < end; i++) allWaypointsArray[i][method]()
    }, Waypoint.destroyAll = function () {
        Waypoint.invokeAll("destroy")
    }, Waypoint.disableAll = function () {
        Waypoint.invokeAll("disable")
    }, Waypoint.enableAll = function () {
        Waypoint.Context.refreshAll();
        for (var waypointKey in allWaypoints) allWaypoints[waypointKey].enabled = !0;
        return this
    }, Waypoint.refreshAll = function () {
        Waypoint.Context.refreshAll()
    }, Waypoint.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight
    }, Waypoint.viewportWidth = function () {
        return document.documentElement.clientWidth
    }, Waypoint.adapters = [], Waypoint.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, Waypoint.offsetAliases = {
        "bottom-in-view": function () {
            return this.context.innerHeight() - this.adapter.outerHeight()
        }, "right-in-view": function () {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = Waypoint
}(), function () {
    "use strict";

    function requestAnimationFrameShim(callback) {
        window.setTimeout(callback, 1e3 / 60)
    }

    function Context(element) {
        this.element = element, this.Adapter = Waypoint.Adapter, this.adapter = new this.Adapter(element), this.key = "waypoint-context-" + keyCounter, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, element.waypointContextKey = this.key, contexts[element.waypointContextKey] = this, keyCounter += 1, Waypoint.windowContext || (Waypoint.windowContext = !0, Waypoint.windowContext = new Context(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }

    var keyCounter = 0, contexts = {}, Waypoint = window.Waypoint, oldWindowLoad = window.onload;
    Context.prototype.add = function (waypoint) {
        var axis = waypoint.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[axis][waypoint.key] = waypoint, this.refresh()
    }, Context.prototype.checkEmpty = function () {
        var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical),
            isWindow = this.element == this.element.window;
        horizontalEmpty && verticalEmpty && !isWindow && (this.adapter.off(".waypoints"), delete contexts[this.key])
    }, Context.prototype.createThrottledResizeHandler = function () {
        function resizeHandler() {
            self.handleResize(), self.didResize = !1
        }

        var self = this;
        this.adapter.on("resize.waypoints", function () {
            self.didResize || (self.didResize = !0, Waypoint.requestAnimationFrame(resizeHandler))
        })
    }, Context.prototype.createThrottledScrollHandler = function () {
        function scrollHandler() {
            self.handleScroll(), self.didScroll = !1
        }

        var self = this;
        this.adapter.on("scroll.waypoints", function () {
            self.didScroll && !Waypoint.isTouch || (self.didScroll = !0, Waypoint.requestAnimationFrame(scrollHandler))
        })
    }, Context.prototype.handleResize = function () {
        Waypoint.Context.refreshAll()
    }, Context.prototype.handleScroll = function () {
        var triggeredGroups = {}, axes = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
        for (var axisKey in axes) {
            var axis = axes[axisKey], isForward = axis.newScroll > axis.oldScroll,
                direction = isForward ? axis.forward : axis.backward;
            for (var waypointKey in this.waypoints[axisKey]) {
                var waypoint = this.waypoints[axisKey][waypointKey];
                if (null !== waypoint.triggerPoint) {
                    var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint,
                        nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint,
                        crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint,
                        crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint;
                    (crossedForward || crossedBackward) && (waypoint.queueTrigger(direction), triggeredGroups[waypoint.group.id] = waypoint.group)
                }
            }
        }
        for (var groupKey in triggeredGroups) triggeredGroups[groupKey].flushTriggers();
        this.oldScroll = {x: axes.horizontal.newScroll, y: axes.vertical.newScroll}
    }, Context.prototype.innerHeight = function () {
        return this.element == this.element.window ? Waypoint.viewportHeight() : this.adapter.innerHeight()
    }, Context.prototype.remove = function (waypoint) {
        delete this.waypoints[waypoint.axis][waypoint.key], this.checkEmpty()
    }, Context.prototype.innerWidth = function () {
        return this.element == this.element.window ? Waypoint.viewportWidth() : this.adapter.innerWidth()
    }, Context.prototype.destroy = function () {
        var allWaypoints = [];
        for (var axis in this.waypoints) for (var waypointKey in this.waypoints[axis]) allWaypoints.push(this.waypoints[axis][waypointKey]);
        for (var i = 0, end = allWaypoints.length; i < end; i++) allWaypoints[i].destroy()
    }, Context.prototype.refresh = function () {
        var axes, isWindow = this.element == this.element.window,
            contextOffset = isWindow ? void 0 : this.adapter.offset(), triggeredGroups = {};
        this.handleScroll(), axes = {
            horizontal: {
                contextOffset: isWindow ? 0 : contextOffset.left,
                contextScroll: isWindow ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: isWindow ? 0 : contextOffset.top,
                contextScroll: isWindow ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var axisKey in axes) {
            var axis = axes[axisKey];
            for (var waypointKey in this.waypoints[axisKey]) {
                var contextModifier, wasBeforeScroll, nowAfterScroll, triggeredBackward, triggeredForward,
                    waypoint = this.waypoints[axisKey][waypointKey], adjustment = waypoint.options.offset,
                    oldTriggerPoint = waypoint.triggerPoint, elementOffset = 0, freshWaypoint = null == oldTriggerPoint;
                waypoint.element !== waypoint.element.window && (elementOffset = waypoint.adapter.offset()[axis.offsetProp]), "function" == typeof adjustment ? adjustment = adjustment.apply(waypoint) : "string" == typeof adjustment && (adjustment = parseFloat(adjustment), waypoint.options.offset.indexOf("%") > -1 && (adjustment = Math.ceil(axis.contextDimension * adjustment / 100))), contextModifier = axis.contextScroll - axis.contextOffset, waypoint.triggerPoint = Math.floor(elementOffset + contextModifier - adjustment), wasBeforeScroll = oldTriggerPoint < axis.oldScroll, nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll, triggeredBackward = wasBeforeScroll && nowAfterScroll, triggeredForward = !wasBeforeScroll && !nowAfterScroll, !freshWaypoint && triggeredBackward ? (waypoint.queueTrigger(axis.backward), triggeredGroups[waypoint.group.id] = waypoint.group) : !freshWaypoint && triggeredForward ? (waypoint.queueTrigger(axis.forward), triggeredGroups[waypoint.group.id] = waypoint.group) : freshWaypoint && axis.oldScroll >= waypoint.triggerPoint && (waypoint.queueTrigger(axis.forward), triggeredGroups[waypoint.group.id] = waypoint.group)
            }
        }
        return Waypoint.requestAnimationFrame(function () {
            for (var groupKey in triggeredGroups) triggeredGroups[groupKey].flushTriggers()
        }), this
    }, Context.findOrCreateByElement = function (element) {
        return Context.findByElement(element) || new Context(element)
    }, Context.refreshAll = function () {
        for (var contextId in contexts) contexts[contextId].refresh()
    }, Context.findByElement = function (element) {
        return contexts[element.waypointContextKey]
    }, window.onload = function () {
        oldWindowLoad && oldWindowLoad(), Context.refreshAll()
    }, Waypoint.requestAnimationFrame = function (callback) {
        var requestFn = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || requestAnimationFrameShim;
        requestFn.call(window, callback)
    }, Waypoint.Context = Context
}(), function () {
    "use strict";

    function byTriggerPoint(a, b) {
        return a.triggerPoint - b.triggerPoint
    }

    function byReverseTriggerPoint(a, b) {
        return b.triggerPoint - a.triggerPoint
    }

    function Group(options) {
        this.name = options.name, this.axis = options.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), groups[this.axis][this.name] = this
    }

    var groups = {vertical: {}, horizontal: {}}, Waypoint = window.Waypoint;
    Group.prototype.add = function (waypoint) {
        this.waypoints.push(waypoint)
    }, Group.prototype.clearTriggerQueues = function () {
        this.triggerQueues = {up: [], down: [], left: [], right: []}
    }, Group.prototype.flushTriggers = function () {
        for (var direction in this.triggerQueues) {
            var waypoints = this.triggerQueues[direction], reverse = "up" === direction || "left" === direction;
            waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint);
            for (var i = 0, end = waypoints.length; i < end; i += 1) {
                var waypoint = waypoints[i];
                (waypoint.options.continuous || i === waypoints.length - 1) && waypoint.trigger([direction])
            }
        }
        this.clearTriggerQueues()
    }, Group.prototype.next = function (waypoint) {
        this.waypoints.sort(byTriggerPoint);
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints), isLast = index === this.waypoints.length - 1;
        return isLast ? null : this.waypoints[index + 1]
    }, Group.prototype.previous = function (waypoint) {
        this.waypoints.sort(byTriggerPoint);
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
        return index ? this.waypoints[index - 1] : null
    }, Group.prototype.queueTrigger = function (waypoint, direction) {
        this.triggerQueues[direction].push(waypoint)
    }, Group.prototype.remove = function (waypoint) {
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
        index > -1 && this.waypoints.splice(index, 1)
    }, Group.prototype.first = function () {
        return this.waypoints[0]
    }, Group.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1]
    }, Group.findOrCreate = function (options) {
        return groups[options.axis][options.name] || new Group(options)
    }, Waypoint.Group = Group
}(), function () {
    "use strict";

    function JQueryAdapter(element) {
        this.$element = $(element)
    }

    var $ = window.jQuery, Waypoint = window.Waypoint;
    $.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (i, method) {
        JQueryAdapter.prototype[method] = function () {
            var args = Array.prototype.slice.call(arguments);
            return this.$element[method].apply(this.$element, args)
        }
    }), $.each(["extend", "inArray", "isEmptyObject"], function (i, method) {
        JQueryAdapter[method] = $[method]
    }), Waypoint.adapters.push({name: "jquery", Adapter: JQueryAdapter}), Waypoint.Adapter = JQueryAdapter
}(), function () {
    "use strict";

    function createExtension(framework) {
        return function () {
            var waypoints = [], overrides = arguments[0];
            return framework.isFunction(arguments[0]) && (overrides = framework.extend({}, arguments[1]), overrides.handler = arguments[0]), this.each(function () {
                var options = framework.extend({}, overrides, {element: this});
                "string" == typeof options.context && (options.context = framework(this).closest(options.context)[0]), waypoints.push(new Waypoint(options))
            }), waypoints
        }
    }

    var Waypoint = window.Waypoint;
    window.jQuery && (window.jQuery.fn.elementorWaypoint = createExtension(window.jQuery)), window.Zepto && (window.Zepto.fn.elementorWaypoint = createExtension(window.Zepto))
}();

!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, function () {
    "use strict";
    var f = "undefined" == typeof document ? {
        body: {}, addEventListener: function () {
        }, removeEventListener: function () {
        }, activeElement: {
            blur: function () {
            }, nodeName: ""
        }, querySelector: function () {
            return null
        }, querySelectorAll: function () {
            return []
        }, getElementById: function () {
            return null
        }, createEvent: function () {
            return {
                initEvent: function () {
                }
            }
        }, createElement: function () {
            return {
                children: [], childNodes: [], style: {}, setAttribute: function () {
                }, getElementsByTagName: function () {
                    return []
                }
            }
        }, location: {hash: ""}
    } : document, J = "undefined" == typeof window ? {
        document: f,
        navigator: {userAgent: ""},
        location: {},
        history: {},
        CustomEvent: function () {
            return this
        },
        addEventListener: function () {
        },
        removeEventListener: function () {
        },
        getComputedStyle: function () {
            return {
                getPropertyValue: function () {
                    return ""
                }
            }
        },
        Image: function () {
        },
        Date: function () {
        },
        screen: {},
        setTimeout: function () {
        },
        clearTimeout: function () {
        }
    } : window, l = function (e) {
        for (var t = 0; t < e.length; t += 1) this[t] = e[t];
        return this.length = e.length, this
    };

    function L(e, t) {
        var a = [], i = 0;
        if (e && !t && e instanceof l) return e;
        if (e) if ("string" == typeof e) {
            var s, r, n = e.trim();
            if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) {
                var o = "div";
                for (0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select"), (r = f.createElement(o)).innerHTML = n, i = 0; i < r.childNodes.length; i += 1) a.push(r.childNodes[i])
            } else for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || f).querySelectorAll(e.trim()) : [f.getElementById(e.trim().split("#")[1])], i = 0; i < s.length; i += 1) s[i] && a.push(s[i])
        } else if (e.nodeType || e === J || e === f) a.push(e); else if (0 < e.length && e[0].nodeType) for (i = 0; i < e.length; i += 1) a.push(e[i]);
        return new l(a)
    }

    function r(e) {
        for (var t = [], a = 0; a < e.length; a += 1) -1 === t.indexOf(e[a]) && t.push(e[a]);
        return t
    }

    L.fn = l.prototype, L.Class = l, L.Dom7 = l;
    var t = {
        addClass: function (e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), a = 0; a < t.length; a += 1) for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[a]);
            return this
        }, removeClass: function (e) {
            for (var t = e.split(" "), a = 0; a < t.length; a += 1) for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[a]);
            return this
        }, hasClass: function (e) {
            return !!this[0] && this[0].classList.contains(e)
        }, toggleClass: function (e) {
            for (var t = e.split(" "), a = 0; a < t.length; a += 1) for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[a]);
            return this
        }, attr: function (e, t) {
            var a = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var i = 0; i < this.length; i += 1) if (2 === a.length) this[i].setAttribute(e, t); else for (var s in e) this[i][s] = e[s], this[i].setAttribute(s, e[s]);
            return this
        }, removeAttr: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        }, data: function (e, t) {
            var a;
            if (void 0 !== t) {
                for (var i = 0; i < this.length; i += 1) (a = this[i]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), a.dom7ElementDataStorage[e] = t;
                return this
            }
            if (a = this[0]) {
                if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[e];
                var s = a.getAttribute("data-" + e);
                return s || void 0
            }
        }, transform: function (e) {
            for (var t = 0; t < this.length; t += 1) {
                var a = this[t].style;
                a.webkitTransform = e, a.transform = e
            }
            return this
        }, transition: function (e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var a = this[t].style;
                a.webkitTransitionDuration = e, a.transitionDuration = e
            }
            return this
        }, on: function () {
            for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
            var i = t[0], r = t[1], n = t[2], s = t[3];

            function o(e) {
                var t = e.target;
                if (t) {
                    var a = e.target.dom7EventData || [];
                    if (a.indexOf(e) < 0 && a.unshift(e), L(t).is(r)) n.apply(t, a); else for (var i = L(t).parents(), s = 0; s < i.length; s += 1) L(i[s]).is(r) && n.apply(i[s], a)
                }
            }

            function l(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t)
            }

            "function" == typeof t[1] && (i = (e = t)[0], n = e[1], s = e[2], r = void 0), s || (s = !1);
            for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (r) for (d = 0; d < p.length; d += 1) {
                    var h = p[d];
                    u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []), u.dom7LiveListeners[h].push({
                        listener: n,
                        proxyListener: o
                    }), u.addEventListener(h, o, s)
                } else for (d = 0; d < p.length; d += 1) {
                    var v = p[d];
                    u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({
                        listener: n,
                        proxyListener: l
                    }), u.addEventListener(v, l, s)
                }
            }
            return this
        }, off: function () {
            for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
            var i = t[0], s = t[1], r = t[2], n = t[3];
            "function" == typeof t[1] && (i = (e = t)[0], r = e[1], n = e[2], s = void 0), n || (n = !1);
            for (var o = i.split(" "), l = 0; l < o.length; l += 1) for (var d = o[l], p = 0; p < this.length; p += 1) {
                var c = this[p], u = void 0;
                if (!s && c.dom7Listeners ? u = c.dom7Listeners[d] : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]), u && u.length) for (var h = u.length - 1; 0 <= h; h -= 1) {
                    var v = u[h];
                    r && v.listener === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r || (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1))
                }
            }
            return this
        }, trigger: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var a = e[0].split(" "), i = e[1], s = 0; s < a.length; s += 1) for (var r = a[s], n = 0; n < this.length; n += 1) {
                var o = this[n], l = void 0;
                try {
                    l = new J.CustomEvent(r, {detail: i, bubbles: !0, cancelable: !0})
                } catch (e) {
                    (l = f.createEvent("Event")).initEvent(r, !0, !0), l.detail = i
                }
                o.dom7EventData = e.filter(function (e, t) {
                    return 0 < t
                }), o.dispatchEvent(l), o.dom7EventData = [], delete o.dom7EventData
            }
            return this
        }, transitionEnd: function (t) {
            var a, i = ["webkitTransitionEnd", "transitionend"], s = this;

            function r(e) {
                if (e.target === this) for (t.call(this, e), a = 0; a < i.length; a += 1) s.off(i[a], r)
            }

            if (t) for (a = 0; a < i.length; a += 1) s.on(i[a], r);
            return this
        }, outerWidth: function (e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        }, outerHeight: function (e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        }, offset: function () {
            if (0 < this.length) {
                var e = this[0], t = e.getBoundingClientRect(), a = f.body, i = e.clientTop || a.clientTop || 0,
                    s = e.clientLeft || a.clientLeft || 0, r = e === J ? J.scrollY : e.scrollTop,
                    n = e === J ? J.scrollX : e.scrollLeft;
                return {top: t.top + r - i, left: t.left + n - s}
            }
            return null
        }, css: function (e, t) {
            var a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1) for (var i in e) this[a].style[i] = e[i];
                    return this
                }
                if (this[0]) return J.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
                return this
            }
            return this
        }, each: function (e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        }, html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        }, text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        }, is: function (e) {
            var t, a, i = this[0];
            if (!i || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (i.matches) return i.matches(e);
                if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector) return i.msMatchesSelector(e);
                for (t = L(e), a = 0; a < t.length; a += 1) if (t[a] === i) return !0;
                return !1
            }
            if (e === f) return i === f;
            if (e === J) return i === J;
            if (e.nodeType || e instanceof l) {
                for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1) if (t[a] === i) return !0;
                return !1
            }
            return !1
        }, index: function () {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        }, eq: function (e) {
            if (void 0 === e) return this;
            var t, a = this.length;
            return new l(a - 1 < e ? [] : e < 0 ? (t = a + e) < 0 ? [] : [this[t]] : [this[e]])
        }, append: function () {
            for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
            for (var i = 0; i < t.length; i += 1) {
                e = t[i];
                for (var s = 0; s < this.length; s += 1) if ("string" == typeof e) {
                    var r = f.createElement("div");
                    for (r.innerHTML = e; r.firstChild;) this[s].appendChild(r.firstChild)
                } else if (e instanceof l) for (var n = 0; n < e.length; n += 1) this[s].appendChild(e[n]); else this[s].appendChild(e)
            }
            return this
        }, prepend: function (e) {
            var t, a;
            for (t = 0; t < this.length; t += 1) if ("string" == typeof e) {
                var i = f.createElement("div");
                for (i.innerHTML = e, a = i.childNodes.length - 1; 0 <= a; a -= 1) this[t].insertBefore(i.childNodes[a], this[t].childNodes[0])
            } else if (e instanceof l) for (a = 0; a < e.length; a += 1) this[t].insertBefore(e[a], this[t].childNodes[0]); else this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        }, next: function (e) {
            return 0 < this.length ? e ? this[0].nextElementSibling && L(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
        }, nextAll: function (e) {
            var t = [], a = this[0];
            if (!a) return new l([]);
            for (; a.nextElementSibling;) {
                var i = a.nextElementSibling;
                e ? L(i).is(e) && t.push(i) : t.push(i), a = i
            }
            return new l(t)
        }, prev: function (e) {
            if (0 < this.length) {
                var t = this[0];
                return e ? t.previousElementSibling && L(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([])
            }
            return new l([])
        }, prevAll: function (e) {
            var t = [], a = this[0];
            if (!a) return new l([]);
            for (; a.previousElementSibling;) {
                var i = a.previousElementSibling;
                e ? L(i).is(e) && t.push(i) : t.push(i), a = i
            }
            return new l(t)
        }, parent: function (e) {
            for (var t = [], a = 0; a < this.length; a += 1) null !== this[a].parentNode && (e ? L(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
            return L(r(t))
        }, parents: function (e) {
            for (var t = [], a = 0; a < this.length; a += 1) for (var i = this[a].parentNode; i;) e ? L(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
            return L(r(t))
        }, closest: function (e) {
            var t = this;
            return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        }, find: function (e) {
            for (var t = [], a = 0; a < this.length; a += 1) for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1) t.push(i[s]);
            return new l(t)
        }, children: function (e) {
            for (var t = [], a = 0; a < this.length; a += 1) for (var i = this[a].childNodes, s = 0; s < i.length; s += 1) e ? 1 === i[s].nodeType && L(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s]);
            return new l(r(t))
        }, remove: function () {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }, add: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var a, i;
            for (a = 0; a < e.length; a += 1) {
                var s = L(e[a]);
                for (i = 0; i < s.length; i += 1) this[this.length] = s[i], this.length += 1
            }
            return this
        }, styles: function () {
            return this[0] ? J.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(t).forEach(function (e) {
        L.fn[e] = t[e]
    });
    var e, a, i, ee = {
        deleteProps: function (e) {
            var t = e;
            Object.keys(t).forEach(function (e) {
                try {
                    t[e] = null
                } catch (e) {
                }
                try {
                    delete t[e]
                } catch (e) {
                }
            })
        }, nextTick: function (e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t)
        }, now: function () {
            return Date.now()
        }, getTranslate: function (e, t) {
            var a, i, s;
            void 0 === t && (t = "x");
            var r = J.getComputedStyle(e, null);
            return J.WebKitCSSMatrix ? (6 < (i = r.transform || r.webkitTransform).split(",").length && (i = i.split(", ").map(function (e) {
                return e.replace(",", ".")
            }).join(", ")), s = new J.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = J.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = J.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
        }, parseUrlQuery: function (e) {
            var t, a, i, s, r = {}, n = e || J.location.href;
            if ("string" == typeof n && n.length) for (s = (a = (n = -1 < n.indexOf("?") ? n.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
                return "" !== e
            })).length, t = 0; t < s; t += 1) i = a[t].replace(/#\S+/g, "").split("="), r[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
            return r
        }, isObject: function (e) {
            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        }, extend: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
                var s = e[i];
                if (null != s) for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
                    var l = r[n], d = Object.getOwnPropertyDescriptor(s, l);
                    void 0 !== d && d.enumerable && (ee.isObject(a[l]) && ee.isObject(s[l]) ? ee.extend(a[l], s[l]) : !ee.isObject(a[l]) && ee.isObject(s[l]) ? (a[l] = {}, ee.extend(a[l], s[l])) : a[l] = s[l])
                }
            }
            return a
        }
    }, te = (i = f.createElement("div"), {
        touch: J.Modernizr && !0 === J.Modernizr.touch || !!(0 < J.navigator.maxTouchPoints || "ontouchstart" in J || J.DocumentTouch && f instanceof J.DocumentTouch),
        pointerEvents: !!(J.navigator.pointerEnabled || J.PointerEvent || "maxTouchPoints" in J.navigator),
        prefixedPointerEvents: !!J.navigator.msPointerEnabled,
        transition: (a = i.style, "transition" in a || "webkitTransition" in a || "MozTransition" in a),
        transforms3d: J.Modernizr && !0 === J.Modernizr.csstransforms3d || (e = i.style, "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e),
        flexbox: function () {
            for (var e = i.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1) if (t[a] in e) return !0;
            return !1
        }(),
        observer: "MutationObserver" in J || "WebkitMutationObserver" in J,
        passiveListener: function () {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function () {
                        e = !0
                    }
                });
                J.addEventListener("testPassiveListener", null, t)
            } catch (e) {
            }
            return e
        }(),
        gestures: "ongesturestart" in J
    }), s = function (e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
            t.on(e, t.params.on[e])
        })
    }, n = {components: {configurable: !0}};
    s.prototype.on = function (e, t, a) {
        var i = this;
        if ("function" != typeof t) return i;
        var s = a ? "unshift" : "push";
        return e.split(" ").forEach(function (e) {
            i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t)
        }), i
    }, s.prototype.once = function (i, s, e) {
        var r = this;
        if ("function" != typeof s) return r;
        return r.on(i, function e() {
            for (var t = [], a = arguments.length; a--;) t[a] = arguments[a];
            s.apply(r, t), r.off(i, e)
        }, e)
    }, s.prototype.off = function (e, i) {
        var s = this;
        return s.eventsListeners && e.split(" ").forEach(function (a) {
            void 0 === i ? s.eventsListeners[a] = [] : s.eventsListeners[a] && s.eventsListeners[a].length && s.eventsListeners[a].forEach(function (e, t) {
                e === i && s.eventsListeners[a].splice(t, 1)
            })
        }), s
    }, s.prototype.emit = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var a, i, s, r = this;
        return r.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (a = e[0], i = e.slice(1, e.length), s = r) : (a = e[0].events, i = e[0].data, s = e[0].context || r), (Array.isArray(a) ? a : a.split(" ")).forEach(function (e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
                var t = [];
                r.eventsListeners[e].forEach(function (e) {
                    t.push(e)
                }), t.forEach(function (e) {
                    e.apply(s, i)
                })
            }
        })), r
    }, s.prototype.useModulesParams = function (a) {
        var i = this;
        i.modules && Object.keys(i.modules).forEach(function (e) {
            var t = i.modules[e];
            t.params && ee.extend(a, t.params)
        })
    }, s.prototype.useModules = function (i) {
        void 0 === i && (i = {});
        var s = this;
        s.modules && Object.keys(s.modules).forEach(function (e) {
            var a = s.modules[e], t = i[e] || {};
            a.instance && Object.keys(a.instance).forEach(function (e) {
                var t = a.instance[e];
                s[e] = "function" == typeof t ? t.bind(s) : t
            }), a.on && s.on && Object.keys(a.on).forEach(function (e) {
                s.on(e, a.on[e])
            }), a.create && a.create.bind(s)(t)
        })
    }, n.components.set = function (e) {
        this.use && this.use(e)
    }, s.installModule = function (t) {
        for (var e = [], a = arguments.length - 1; 0 < a--;) e[a] = arguments[a + 1];
        var i = this;
        i.prototype.modules || (i.prototype.modules = {});
        var s = t.name || Object.keys(i.prototype.modules).length + "_" + ee.now();
        return (i.prototype.modules[s] = t).proto && Object.keys(t.proto).forEach(function (e) {
            i.prototype[e] = t.proto[e]
        }), t.static && Object.keys(t.static).forEach(function (e) {
            i[e] = t.static[e]
        }), t.install && t.install.apply(i, e), i
    }, s.use = function (e) {
        for (var t = [], a = arguments.length - 1; 0 < a--;) t[a] = arguments[a + 1];
        var i = this;
        return Array.isArray(e) ? (e.forEach(function (e) {
            return i.installModule(e)
        }), i) : i.installModule.apply(i, [e].concat(t))
    }, Object.defineProperties(s, n);
    var o = {
        updateSize: function () {
            var e, t, a = this, i = a.$el;
            e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), ee.extend(a, {
                width: e,
                height: t,
                size: a.isHorizontal() ? e : t
            }))
        }, updateSlides: function () {
            var e = this, t = e.params, a = e.$wrapperEl, i = e.size, s = e.rtlTranslate, r = e.wrongRTL,
                n = e.virtual && t.virtual.enabled, o = n ? e.virtual.slides.length : e.slides.length,
                l = a.children("." + e.params.slideClass), d = n ? e.virtual.slides.length : l.length, p = [], c = [],
                u = [], h = t.slidesOffsetBefore;
            "function" == typeof h && (h = t.slidesOffsetBefore.call(e));
            var v = t.slidesOffsetAfter;
            "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
            var f = e.snapGrid.length, m = e.snapGrid.length, g = t.spaceBetween, b = -h, w = 0, y = 0;
            if (void 0 !== i) {
                var x, T;
                "string" == typeof g && 0 <= g.indexOf("%") && (g = parseFloat(g.replace("%", "")) / 100 * i), e.virtualSize = -g, s ? l.css({
                    marginLeft: "",
                    marginTop: ""
                }) : l.css({
                    marginRight: "",
                    marginBottom: ""
                }), 1 < t.slidesPerColumn && (x = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
                for (var E, S = t.slidesPerColumn, C = x / S, M = Math.floor(d / t.slidesPerColumn), k = 0; k < d; k += 1) {
                    T = 0;
                    var P = l.eq(k);
                    if (1 < t.slidesPerColumn) {
                        var z = void 0, $ = void 0, L = void 0;
                        "column" === t.slidesPerColumnFill ? (L = k - ($ = Math.floor(k / S)) * S, (M < $ || $ === M && L === S - 1) && S <= (L += 1) && (L = 0, $ += 1), z = $ + L * x / S, P.css({
                            "-webkit-box-ordinal-group": z,
                            "-moz-box-ordinal-group": z,
                            "-ms-flex-order": z,
                            "-webkit-order": z,
                            order: z
                        })) : $ = k - (L = Math.floor(k / C)) * C, P.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== L && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", $).attr("data-swiper-row", L)
                    }
                    if ("none" !== P.css("display")) {
                        if ("auto" === t.slidesPerView) {
                            var I = J.getComputedStyle(P[0], null), D = P[0].style.transform,
                                O = P[0].style.webkitTransform;
                            if (D && (P[0].style.transform = "none"), O && (P[0].style.webkitTransform = "none"), t.roundLengths) T = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0); else if (e.isHorizontal()) {
                                var A = parseFloat(I.getPropertyValue("width")),
                                    N = parseFloat(I.getPropertyValue("padding-left")),
                                    H = parseFloat(I.getPropertyValue("padding-right")),
                                    G = parseFloat(I.getPropertyValue("margin-left")),
                                    B = parseFloat(I.getPropertyValue("margin-right")),
                                    X = I.getPropertyValue("box-sizing");
                                T = X && "border-box" === X ? A + G + B : A + N + H + G + B
                            } else {
                                var Y = parseFloat(I.getPropertyValue("height")),
                                    V = parseFloat(I.getPropertyValue("padding-top")),
                                    F = parseFloat(I.getPropertyValue("padding-bottom")),
                                    R = parseFloat(I.getPropertyValue("margin-top")),
                                    q = parseFloat(I.getPropertyValue("margin-bottom")),
                                    W = I.getPropertyValue("box-sizing");
                                T = W && "border-box" === W ? Y + R + q : Y + V + F + R + q
                            }
                            D && (P[0].style.transform = D), O && (P[0].style.webkitTransform = O), t.roundLengths && (T = Math.floor(T))
                        } else T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView, t.roundLengths && (T = Math.floor(T)), l[k] && (e.isHorizontal() ? l[k].style.width = T + "px" : l[k].style.height = T + "px");
                        l[k] && (l[k].swiperSlideSize = T), u.push(T), t.centeredSlides ? (b = b + T / 2 + w / 2 + g, 0 === w && 0 !== k && (b = b - i / 2 - g), 0 === k && (b = b - i / 2 - g), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b)) : (t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b), b = b + T + g), e.virtualSize += T + g, w = T, y += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, i) + v, s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({width: e.virtualSize + t.spaceBetween + "px"}), te.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({width: e.virtualSize + t.spaceBetween + "px"}) : a.css({height: e.virtualSize + t.spaceBetween + "px"})), 1 < t.slidesPerColumn && (e.virtualSize = (T + t.spaceBetween) * x, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? a.css({width: e.virtualSize + t.spaceBetween + "px"}) : a.css({height: e.virtualSize + t.spaceBetween + "px"}), t.centeredSlides)) {
                    E = [];
                    for (var j = 0; j < p.length; j += 1) {
                        var U = p[j];
                        t.roundLengths && (U = Math.floor(U)), p[j] < e.virtualSize + p[0] && E.push(U)
                    }
                    p = E
                }
                if (!t.centeredSlides) {
                    E = [];
                    for (var K = 0; K < p.length; K += 1) {
                        var _ = p[K];
                        t.roundLengths && (_ = Math.floor(_)), p[K] <= e.virtualSize - i && E.push(_)
                    }
                    p = E, 1 < Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) && p.push(e.virtualSize - i)
                }
                if (0 === p.length && (p = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? s ? l.css({marginLeft: g + "px"}) : l.css({marginRight: g + "px"}) : l.css({marginBottom: g + "px"})), t.centerInsufficientSlides) {
                    var Z = 0;
                    if (u.forEach(function (e) {
                        Z += e + (t.spaceBetween ? t.spaceBetween : 0)
                    }), (Z -= t.spaceBetween) < i) {
                        var Q = (i - Z) / 2;
                        p.forEach(function (e, t) {
                            p[t] = e - Q
                        }), c.forEach(function (e, t) {
                            c[t] = e + Q
                        })
                    }
                }
                ee.extend(e, {
                    slides: l,
                    snapGrid: p,
                    slidesGrid: c,
                    slidesSizesGrid: u
                }), d !== o && e.emit("slidesLengthChange"), p.length !== f && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), c.length !== m && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
            }
        }, updateAutoHeight: function (e) {
            var t, a = this, i = [], s = 0;
            if ("number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed), "auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView) for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
                var r = a.activeIndex + t;
                if (r > a.slides.length) break;
                i.push(a.slides.eq(r)[0])
            } else i.push(a.slides.eq(a.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1) if (void 0 !== i[t]) {
                var n = i[t].offsetHeight;
                s = s < n ? n : s
            }
            s && a.$wrapperEl.css("height", s + "px")
        }, updateSlidesOffset: function () {
            for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        }, updateSlidesProgress: function (e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this, a = t.params, i = t.slides, s = t.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                var r = -e;
                s && (r = e), i.removeClass(a.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                for (var n = 0; n < i.length; n += 1) {
                    var o = i[n],
                        l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);
                    if (a.watchSlidesVisibility) {
                        var d = -(r - o.swiperSlideOffset), p = d + t.slidesSizesGrid[n];
                        (0 <= d && d < t.size || 0 < p && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(n), i.eq(n).addClass(a.slideVisibleClass))
                    }
                    o.progress = s ? -l : l
                }
                t.visibleSlides = L(t.visibleSlides)
            }
        }, updateProgress: function (e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this, a = t.params, i = t.maxTranslate() - t.minTranslate(), s = t.progress, r = t.isBeginning,
                n = t.isEnd, o = r, l = n;
            0 === i ? n = r = !(s = 0) : (r = (s = (e - t.minTranslate()) / i) <= 0, n = 1 <= s), ee.extend(t, {
                progress: s,
                isBeginning: r,
                isEnd: n
            }), (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !l && t.emit("reachEnd toEdge"), (o && !r || l && !n) && t.emit("fromEdge"), t.emit("progress", s)
        }, updateSlidesClasses: function () {
            var e, t = this, a = t.slides, i = t.params, s = t.$wrapperEl, r = t.activeIndex, n = t.realIndex,
                o = t.virtual && i.virtual.enabled;
            a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
            var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass);
            var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
        }, updateActiveIndex: function (e) {
            var t, a = this, i = a.rtlTranslate ? a.translate : -a.translate, s = a.slidesGrid, r = a.snapGrid,
                n = a.params, o = a.activeIndex, l = a.realIndex, d = a.snapIndex, p = e;
            if (void 0 === p) {
                for (var c = 0; c < s.length; c += 1) void 0 !== s[c + 1] ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2 ? p = c : i >= s[c] && i < s[c + 1] && (p = c + 1) : i >= s[c] && (p = c);
                n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0)
            }
            if ((t = 0 <= r.indexOf(i) ? r.indexOf(i) : Math.floor(p / n.slidesPerGroup)) >= r.length && (t = r.length - 1), p !== o) {
                var u = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
                ee.extend(a, {
                    snapIndex: t,
                    realIndex: u,
                    previousIndex: o,
                    activeIndex: p
                }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), l !== u && a.emit("realIndexChange"), a.emit("slideChange")
            } else t !== d && (a.snapIndex = t, a.emit("snapIndexChange"))
        }, updateClickedSlide: function (e) {
            var t = this, a = t.params, i = L(e.target).closest("." + a.slideClass)[0], s = !1;
            if (i) for (var r = 0; r < t.slides.length; r += 1) t.slides[r] === i && (s = !0);
            if (!i || !s) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
            t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(L(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = L(i).index(), a.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    };
    var d = {
        getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params, a = this.rtlTranslate, i = this.translate, s = this.$wrapperEl;
            if (t.virtualTranslate) return a ? -i : i;
            var r = ee.getTranslate(s[0], e);
            return a && (r = -r), r || 0
        }, setTranslate: function (e, t) {
            var a = this, i = a.rtlTranslate, s = a.params, r = a.$wrapperEl, n = a.progress, o = 0, l = 0;
            a.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.virtualTranslate || (te.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : l;
            var d = a.maxTranslate() - a.minTranslate();
            (0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t)
        }, minTranslate: function () {
            return -this.snapGrid[0]
        }, maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1]
        }
    };
    var p = {
        setTransition: function (e, t) {
            this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
        }, transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            var a = this, i = a.activeIndex, s = a.params, r = a.previousIndex;
            s.autoHeight && a.updateAutoHeight();
            var n = t;
            if (n || (n = r < i ? "next" : i < r ? "prev" : "reset"), a.emit("transitionStart"), e && i !== r) {
                if ("reset" === n) return void a.emit("slideResetTransitionStart");
                a.emit("slideChangeTransitionStart"), "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart")
            }
        }, transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            var a = this, i = a.activeIndex, s = a.previousIndex;
            a.animating = !1, a.setTransition(0);
            var r = t;
            if (r || (r = s < i ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s) {
                if ("reset" === r) return void a.emit("slideResetTransitionEnd");
                a.emit("slideChangeTransitionEnd"), "next" === r ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd")
            }
        }
    };
    var c = {
        slideTo: function (e, t, a, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
            var s = this, r = e;
            r < 0 && (r = 0);
            var n = s.params, o = s.snapGrid, l = s.slidesGrid, d = s.previousIndex, p = s.activeIndex,
                c = s.rtlTranslate;
            if (s.animating && n.preventInteractionOnTransition) return !1;
            var u = Math.floor(r / n.slidesPerGroup);
            u >= o.length && (u = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");
            var h, v = -o[u];
            if (s.updateProgress(v), n.normalizeSlideIndex) for (var f = 0; f < l.length; f += 1) -Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
            if (s.initialized && r !== p) {
                if (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) return !1;
                if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r) return !1
            }
            return h = p < r ? "next" : r < p ? "prev" : "reset", c && -v === s.translate || !c && v === s.translate ? (s.updateActiveIndex(r), n.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== n.effect && s.setTranslate(v), "reset" !== h && (s.transitionStart(a, h), s.transitionEnd(a, h)), !1) : (0 !== t && te.transition ? (s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (e) {
                s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(a, h))
            }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.transitionEnd(a, h)), !0)
        }, slideToLoop: function (e, t, a, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
            var s = e;
            return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, a, i)
        }, slideNext: function (e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this, s = i.params, r = i.animating;
            return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)
        }, slidePrev: function (e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this, s = i.params, r = i.animating, n = i.snapGrid, o = i.slidesGrid, l = i.rtlTranslate;
            if (s.loop) {
                if (r) return !1;
                i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
            }

            function d(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }

            var p, c = d(l ? i.translate : -i.translate), u = n.map(function (e) {
                return d(e)
            }), h = (o.map(function (e) {
                return d(e)
            }), n[u.indexOf(c)], n[u.indexOf(c) - 1]);
            return void 0 !== h && (p = o.indexOf(h)) < 0 && (p = i.activeIndex - 1), i.slideTo(p, e, t, a)
        }, slideReset: function (e, t, a) {
            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a)
        }, slideToClosest: function (e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this, s = i.activeIndex, r = Math.floor(s / i.params.slidesPerGroup);
            if (r < i.snapGrid.length - 1) {
                var n = i.rtlTranslate ? i.translate : -i.translate, o = i.snapGrid[r];
                (i.snapGrid[r + 1] - o) / 2 < n - o && (s = i.params.slidesPerGroup)
            }
            return i.slideTo(s, e, t, a)
        }, slideToClickedSlide: function () {
            var e, t = this, a = t.params, i = t.$wrapperEl,
                s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView, r = t.clickedIndex;
            if (a.loop) {
                if (t.animating) return;
                e = parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), ee.nextTick(function () {
                    t.slideTo(r)
                })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), ee.nextTick(function () {
                    t.slideTo(r)
                })) : t.slideTo(r)
            } else t.slideTo(r)
        }
    };
    var u = {
        loopCreate: function () {
            var i = this, e = i.params, t = i.$wrapperEl;
            t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
            var s = t.children("." + e.slideClass);
            if (e.loopFillGroupWithBlank) {
                var a = e.slidesPerGroup - s.length % e.slidesPerGroup;
                if (a !== e.slidesPerGroup) {
                    for (var r = 0; r < a; r += 1) {
                        var n = L(f.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
                        t.append(n)
                    }
                    s = t.children("." + e.slideClass)
                }
            }
            "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = s.length), i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10), i.loopedSlides += e.loopAdditionalSlides, i.loopedSlides > s.length && (i.loopedSlides = s.length);
            var o = [], l = [];
            s.each(function (e, t) {
                var a = L(t);
                e < i.loopedSlides && l.push(t), e < s.length && e >= s.length - i.loopedSlides && o.push(t), a.attr("data-swiper-slide-index", e)
            });
            for (var d = 0; d < l.length; d += 1) t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
            for (var p = o.length - 1; 0 <= p; p -= 1) t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass))
        }, loopFix: function () {
            var e, t = this, a = t.params, i = t.activeIndex, s = t.slides, r = t.loopedSlides, n = t.allowSlidePrev,
                o = t.allowSlideNext, l = t.snapGrid, d = t.rtlTranslate;
            t.allowSlidePrev = !0, t.allowSlideNext = !0;
            var p = -l[i] - t.getTranslate();
            i < r ? (e = s.length - 3 * r + i, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p)) : ("auto" === a.slidesPerView && 2 * r <= i || i >= s.length - r) && (e = -s.length + i + r, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p));
            t.allowSlidePrev = n, t.allowSlideNext = o
        }, loopDestroy: function () {
            var e = this.$wrapperEl, t = this.params, a = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), a.removeAttr("data-swiper-slide-index")
        }
    };
    var h = {
        setGrabCursor: function (e) {
            if (!(te.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                var t = this.el;
                t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
            }
        }, unsetGrabCursor: function () {
            te.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
        }
    };
    var v = {
        appendSlide: function (e) {
            var t = this, a = t.$wrapperEl, i = t.params;
            if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e) for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]); else a.append(e);
            i.loop && t.loopCreate(), i.observer && te.observer || t.update()
        }, prependSlide: function (e) {
            var t = this, a = t.params, i = t.$wrapperEl, s = t.activeIndex;
            a.loop && t.loopDestroy();
            var r = s + 1;
            if ("object" == typeof e && "length" in e) {
                for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
                r = s + e.length
            } else i.prepend(e);
            a.loop && t.loopCreate(), a.observer && te.observer || t.update(), t.slideTo(r, 0, !1)
        }, addSlide: function (e, t) {
            var a = this, i = a.$wrapperEl, s = a.params, r = a.activeIndex;
            s.loop && (r -= a.loopedSlides, a.loopDestroy(), a.slides = i.children("." + s.slideClass));
            var n = a.slides.length;
            if (e <= 0) a.prependSlide(t); else if (n <= e) a.appendSlide(t); else {
                for (var o = e < r ? r + 1 : r, l = [], d = n - 1; e <= d; d -= 1) {
                    var p = a.slides.eq(d);
                    p.remove(), l.unshift(p)
                }
                if ("object" == typeof t && "length" in t) {
                    for (var c = 0; c < t.length; c += 1) t[c] && i.append(t[c]);
                    o = e < r ? r + t.length : r
                } else i.append(t);
                for (var u = 0; u < l.length; u += 1) i.append(l[u]);
                s.loop && a.loopCreate(), s.observer && te.observer || a.update(), s.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1)
            }
        }, removeSlide: function (e) {
            var t = this, a = t.params, i = t.$wrapperEl, s = t.activeIndex;
            a.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + a.slideClass));
            var r, n = s;
            if ("object" == typeof e && "length" in e) {
                for (var o = 0; o < e.length; o += 1) r = e[o], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
                n = Math.max(n, 0)
            } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);
            a.loop && t.loopCreate(), a.observer && te.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
        }, removeAllSlides: function () {
            for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
            this.removeSlide(e)
        }
    }, m = function () {
        var e = J.navigator.userAgent, t = {
                ios: !1,
                android: !1,
                androidChrome: !1,
                desktop: !1,
                windows: !1,
                iphone: !1,
                ipod: !1,
                ipad: !1,
                cordova: J.cordova || J.phonegap,
                phonegap: J.cordova || J.phonegap
            }, a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/), i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
            s = e.match(/(iPad).*OS\s([\d_]+)/), r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
            n = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (a && (t.os = "windows", t.osVersion = a[2], t.windows = !0), i && !a && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")), (s || n || r) && (t.os = "ios", t.ios = !0), n && !r && (t.osVersion = n[2].replace(/_/g, "."), t.iphone = !0), s && (t.osVersion = s[2].replace(/_/g, "."), t.ipad = !0), r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (n || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
            var o = t.osVersion.split("."), l = f.querySelector('meta[name="viewport"]');
            t.minimalUi = !t.webView && (r || n) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui")
        }
        return t.pixelRatio = J.devicePixelRatio || 1, t
    }();

    function g() {
        var e = this, t = e.params, a = e.el;
        if (!a || 0 !== a.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var i = e.allowSlideNext, s = e.allowSlidePrev, r = e.snapGrid;
            if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
                var n = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
            } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
            e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
        }
    }

    var b = {
        attachEvents: function () {
            var e = this, t = e.params, a = e.touchEvents, i = e.el, s = e.wrapperEl;
            e.onTouchStart = function (e) {
                var t = this, a = t.touchEventsData, i = t.params, s = t.touches;
                if (!t.animating || !i.preventInteractionOnTransition) {
                    var r = e;
                    if (r.originalEvent && (r = r.originalEvent), a.isTouchEvent = "touchstart" === r.type, (a.isTouchEvent || !("which" in r) || 3 !== r.which) && !(!a.isTouchEvent && "button" in r && 0 < r.button || a.isTouched && a.isMoved)) if (i.noSwiping && L(r.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0]) t.allowClick = !0; else if (!i.swipeHandler || L(r).closest(i.swipeHandler)[0]) {
                        s.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX, s.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY;
                        var n = s.currentX, o = s.currentY, l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
                            d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
                        if (!l || !(n <= d || n >= J.screen.width - d)) {
                            if (ee.extend(a, {
                                isTouched: !0,
                                isMoved: !1,
                                allowTouchCallbacks: !0,
                                isScrolling: void 0,
                                startMoving: void 0
                            }), s.startX = n, s.startY = o, a.touchStartTime = ee.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, 0 < i.threshold && (a.allowThresholdMove = !1), "touchstart" !== r.type) {
                                var p = !0;
                                L(r.target).is(a.formElements) && (p = !1), f.activeElement && L(f.activeElement).is(a.formElements) && f.activeElement !== r.target && f.activeElement.blur();
                                var c = p && t.allowTouchMove && i.touchStartPreventDefault;
                                (i.touchStartForcePreventDefault || c) && r.preventDefault()
                            }
                            t.emit("touchStart", r)
                        }
                    }
                }
            }.bind(e), e.onTouchMove = function (e) {
                var t = this, a = t.touchEventsData, i = t.params, s = t.touches, r = t.rtlTranslate, n = e;
                if (n.originalEvent && (n = n.originalEvent), a.isTouched) {
                    if (!a.isTouchEvent || "mousemove" !== n.type) {
                        var o = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX,
                            l = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY;
                        if (n.preventedByNestedSwiper) return s.startX = o, void (s.startY = l);
                        if (!t.allowTouchMove) return t.allowClick = !1, void (a.isTouched && (ee.extend(s, {
                            startX: o,
                            startY: l,
                            currentX: o,
                            currentY: l
                        }), a.touchStartTime = ee.now()));
                        if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop) if (t.isVertical()) {
                            if (l < s.startY && t.translate <= t.maxTranslate() || l > s.startY && t.translate >= t.minTranslate()) return a.isTouched = !1, void (a.isMoved = !1)
                        } else if (o < s.startX && t.translate <= t.maxTranslate() || o > s.startX && t.translate >= t.minTranslate()) return;
                        if (a.isTouchEvent && f.activeElement && n.target === f.activeElement && L(n.target).is(a.formElements)) return a.isMoved = !0, void (t.allowClick = !1);
                        if (a.allowTouchCallbacks && t.emit("touchMove", n), !(n.targetTouches && 1 < n.targetTouches.length)) {
                            s.currentX = o, s.currentY = l;
                            var d, p = s.currentX - s.startX, c = s.currentY - s.startY;
                            if (!(t.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(c, 2)) < t.params.threshold)) if (void 0 === a.isScrolling && (t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? a.isScrolling = !1 : 25 <= p * p + c * c && (d = 180 * Math.atan2(Math.abs(c), Math.abs(p)) / Math.PI, a.isScrolling = t.isHorizontal() ? d > i.touchAngle : 90 - d > i.touchAngle)), a.isScrolling && t.emit("touchMoveOpposite", n), void 0 === a.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (a.startMoving = !0)), a.isScrolling) a.isTouched = !1; else if (a.startMoving) {
                                t.allowClick = !1, n.preventDefault(), i.touchMoveStopPropagation && !i.nested && n.stopPropagation(), a.isMoved || (i.loop && t.loopFix(), a.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), a.allowMomentumBounce = !1, !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", n)), t.emit("sliderMove", n), a.isMoved = !0;
                                var u = t.isHorizontal() ? p : c;
                                s.diff = u, u *= i.touchRatio, r && (u = -u), t.swipeDirection = 0 < u ? "prev" : "next", a.currentTranslate = u + a.startTranslate;
                                var h = !0, v = i.resistanceRatio;
                                if (i.touchReleaseOnEdges && (v = 0), 0 < u && a.currentTranslate > t.minTranslate() ? (h = !1, i.resistance && (a.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + a.startTranslate + u, v))) : u < 0 && a.currentTranslate < t.maxTranslate() && (h = !1, i.resistance && (a.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - a.startTranslate - u, v))), h && (n.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate), 0 < i.threshold) {
                                    if (!(Math.abs(u) > i.threshold || a.allowThresholdMove)) return void (a.currentTranslate = a.startTranslate);
                                    if (!a.allowThresholdMove) return a.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, a.currentTranslate = a.startTranslate, void (s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                                }
                                i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), i.freeMode && (0 === a.velocities.length && a.velocities.push({
                                    position: s[t.isHorizontal() ? "startX" : "startY"],
                                    time: a.touchStartTime
                                }), a.velocities.push({
                                    position: s[t.isHorizontal() ? "currentX" : "currentY"],
                                    time: ee.now()
                                })), t.updateProgress(a.currentTranslate), t.setTranslate(a.currentTranslate))
                            }
                        }
                    }
                } else a.startMoving && a.isScrolling && t.emit("touchMoveOpposite", n)
            }.bind(e), e.onTouchEnd = function (e) {
                var t = this, a = t.touchEventsData, i = t.params, s = t.touches, r = t.rtlTranslate, n = t.$wrapperEl,
                    o = t.slidesGrid, l = t.snapGrid, d = e;
                if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && i.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, void (a.startMoving = !1);
                i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                var p, c = ee.now(), u = c - a.touchStartTime;
                if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), u < 300 && 300 < c - a.lastClickTime && (a.clickTimeout && clearTimeout(a.clickTimeout), a.clickTimeout = ee.nextTick(function () {
                    t && !t.destroyed && t.emit("click", d)
                }, 300)), u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit("doubleTap", d))), a.lastClickTime = ee.now(), ee.nextTick(function () {
                    t.destroyed || (t.allowClick = !0)
                }), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void (a.startMoving = !1);
                if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, i.freeMode) {
                    if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                    if (p > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                    if (i.freeModeMomentum) {
                        if (1 < a.velocities.length) {
                            var h = a.velocities.pop(), v = a.velocities.pop(), f = h.position - v.position,
                                m = h.time - v.time;
                            t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (150 < m || 300 < ee.now() - h.time) && (t.velocity = 0)
                        } else t.velocity = 0;
                        t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
                        var g = 1e3 * i.freeModeMomentumRatio, b = t.velocity * g, w = t.translate + b;
                        r && (w = -w);
                        var y, x, T = !1, E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                        if (w < t.maxTranslate()) i.freeModeMomentumBounce ? (w + t.maxTranslate() < -E && (w = t.maxTranslate() - E), y = t.maxTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.maxTranslate(), i.loop && i.centeredSlides && (x = !0); else if (w > t.minTranslate()) i.freeModeMomentumBounce ? (w - t.minTranslate() > E && (w = t.minTranslate() + E), y = t.minTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.minTranslate(), i.loop && i.centeredSlides && (x = !0); else if (i.freeModeSticky) {
                            for (var S, C = 0; C < l.length; C += 1) if (l[C] > -w) {
                                S = C;
                                break
                            }
                            w = -(w = Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) || "next" === t.swipeDirection ? l[S] : l[S - 1])
                        }
                        if (x && t.once("transitionEnd", function () {
                            t.loopFix()
                        }), 0 !== t.velocity) g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity); else if (i.freeModeSticky) return void t.slideToClosest();
                        i.freeModeMomentumBounce && T ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
                            t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(y), n.transitionEnd(function () {
                                t && !t.destroyed && t.transitionEnd()
                            }))
                        })) : t.velocity ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
                            t && !t.destroyed && t.transitionEnd()
                        }))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses()
                    } else if (i.freeModeSticky) return void t.slideToClosest();
                    (!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                } else {
                    for (var M = 0, k = t.slidesSizesGrid[0], P = 0; P < o.length; P += i.slidesPerGroup) void 0 !== o[P + i.slidesPerGroup] ? p >= o[P] && p < o[P + i.slidesPerGroup] && (k = o[(M = P) + i.slidesPerGroup] - o[P]) : p >= o[P] && (M = P, k = o[o.length - 1] - o[o.length - 2]);
                    var z = (p - o[M]) / k;
                    if (u > i.longSwipesMs) {
                        if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && (z >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (z > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M))
                    } else {
                        if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M)
                    }
                }
            }.bind(e), e.onClick = function (e) {
                this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }.bind(e);
            var r = "container" === t.touchEventsTarget ? i : s, n = !!t.nested;
            if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
                if (te.touch) {
                    var o = !("touchstart" !== a.start || !te.passiveListener || !t.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    r.addEventListener(a.start, e.onTouchStart, o), r.addEventListener(a.move, e.onTouchMove, te.passiveListener ? {
                        passive: !1,
                        capture: n
                    } : n), r.addEventListener(a.end, e.onTouchEnd, o)
                }
                (t.simulateTouch && !m.ios && !m.android || t.simulateTouch && !te.touch && m.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), f.addEventListener("mousemove", e.onTouchMove, n), f.addEventListener("mouseup", e.onTouchEnd, !1))
            } else r.addEventListener(a.start, e.onTouchStart, !1), f.addEventListener(a.move, e.onTouchMove, n), f.addEventListener(a.end, e.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g, !0)
        }, detachEvents: function () {
            var e = this, t = e.params, a = e.touchEvents, i = e.el, s = e.wrapperEl,
                r = "container" === t.touchEventsTarget ? i : s, n = !!t.nested;
            if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
                if (te.touch) {
                    var o = !("onTouchStart" !== a.start || !te.passiveListener || !t.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    r.removeEventListener(a.start, e.onTouchStart, o), r.removeEventListener(a.move, e.onTouchMove, n), r.removeEventListener(a.end, e.onTouchEnd, o)
                }
                (t.simulateTouch && !m.ios && !m.android || t.simulateTouch && !te.touch && m.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), f.removeEventListener("mousemove", e.onTouchMove, n), f.removeEventListener("mouseup", e.onTouchEnd, !1))
            } else r.removeEventListener(a.start, e.onTouchStart, !1), f.removeEventListener(a.move, e.onTouchMove, n), f.removeEventListener(a.end, e.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g)
        }
    };
    var w, y = {
        setBreakpoint: function () {
            var e = this, t = e.activeIndex, a = e.initialized, i = e.loopedSlides;
            void 0 === i && (i = 0);
            var s = e.params, r = s.breakpoints;
            if (r && (!r || 0 !== Object.keys(r).length)) {
                var n = e.getBreakpoint(r);
                if (n && e.currentBreakpoint !== n) {
                    var o = n in r ? r[n] : void 0;
                    o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function (e) {
                        var t = o[e];
                        void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                    });
                    var l = o || e.originalParams, d = s.loop && l.slidesPerView !== s.slidesPerView;
                    ee.extend(e.params, l), ee.extend(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), e.currentBreakpoint = n, d && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                }
            }
        }, getBreakpoint: function (e) {
            if (e) {
                var t = !1, a = [];
                Object.keys(e).forEach(function (e) {
                    a.push(e)
                }), a.sort(function (e, t) {
                    return parseInt(e, 10) - parseInt(t, 10)
                });
                for (var i = 0; i < a.length; i += 1) {
                    var s = a[i];
                    this.params.breakpointsInverse ? s <= J.innerWidth && (t = s) : s >= J.innerWidth && !t && (t = s)
                }
                return t || "max"
            }
        }
    }, I = {
        isIE: !!J.navigator.userAgent.match(/Trident/g) || !!J.navigator.userAgent.match(/MSIE/g),
        isEdge: !!J.navigator.userAgent.match(/Edge/g),
        isSafari: (w = J.navigator.userAgent.toLowerCase(), 0 <= w.indexOf("safari") && w.indexOf("chrome") < 0 && w.indexOf("android") < 0),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(J.navigator.userAgent)
    };
    var x = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsInverse: !1,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        }, T = {
            update: o,
            translate: d,
            transition: p,
            slide: c,
            loop: u,
            grabCursor: h,
            manipulation: v,
            events: b,
            breakpoints: y,
            checkOverflow: {
                checkOverflow: function () {
                    var e = this, t = e.isLocked;
                    e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
                }
            },
            classes: {
                addClasses: function () {
                    var t = this.classNames, a = this.params, e = this.rtl, i = this.$el, s = [];
                    s.push(a.direction), a.freeMode && s.push("free-mode"), te.flexbox || s.push("no-flexbox"), a.autoHeight && s.push("autoheight"), e && s.push("rtl"), 1 < a.slidesPerColumn && s.push("multirow"), m.android && s.push("android"), m.ios && s.push("ios"), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && s.push("wp8-" + a.direction), s.forEach(function (e) {
                        t.push(a.containerModifierClass + e)
                    }), i.addClass(t.join(" "))
                }, removeClasses: function () {
                    var e = this.$el, t = this.classNames;
                    e.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function (e, t, a, i, s, r) {
                    var n;

                    function o() {
                        r && r()
                    }

                    e.complete && s ? o() : t ? ((n = new J.Image).onload = o, n.onerror = o, i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : o()
                }, preloadImages: function () {
                    var e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }

                    e.imagesToLoad = e.$el.find("img");
                    for (var a = 0; a < e.imagesToLoad.length; a += 1) {
                        var i = e.imagesToLoad[a];
                        e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                    }
                }
            }
        }, E = {}, S = function (u) {
            function h() {
                for (var e, t, s, a = [], i = arguments.length; i--;) a[i] = arguments[i];
                1 === a.length && a[0].constructor && a[0].constructor === Object ? s = a[0] : (t = (e = a)[0], s = e[1]), s || (s = {}), s = ee.extend({}, s), t && !s.el && (s.el = t), u.call(this, s), Object.keys(T).forEach(function (t) {
                    Object.keys(T[t]).forEach(function (e) {
                        h.prototype[e] || (h.prototype[e] = T[t][e])
                    })
                });
                var r = this;
                void 0 === r.modules && (r.modules = {}), Object.keys(r.modules).forEach(function (e) {
                    var t = r.modules[e];
                    if (t.params) {
                        var a = Object.keys(t.params)[0], i = t.params[a];
                        if ("object" != typeof i || null === i) return;
                        if (!(a in s && "enabled" in i)) return;
                        !0 === s[a] && (s[a] = {enabled: !0}), "object" != typeof s[a] || "enabled" in s[a] || (s[a].enabled = !0), s[a] || (s[a] = {enabled: !1})
                    }
                });
                var n = ee.extend({}, x);
                r.useModulesParams(n), r.params = ee.extend({}, n, E, s), r.originalParams = ee.extend({}, r.params), r.passedParams = ee.extend({}, s);
                var o = (r.$ = L)(r.params.el);
                if (t = o[0]) {
                    if (1 < o.length) {
                        var l = [];
                        return o.each(function (e, t) {
                            var a = ee.extend({}, s, {el: t});
                            l.push(new h(a))
                        }), l
                    }
                    t.swiper = r, o.data("swiper", r);
                    var d, p, c = o.children("." + r.params.wrapperClass);
                    return ee.extend(r, {
                        $el: o,
                        el: t,
                        $wrapperEl: c,
                        wrapperEl: c[0],
                        classNames: [],
                        slides: L(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function () {
                            return "horizontal" === r.params.direction
                        },
                        isVertical: function () {
                            return "vertical" === r.params.direction
                        },
                        rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"),
                        rtlTranslate: "horizontal" === r.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")),
                        wrongRTL: "-webkit-box" === c.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: r.params.allowSlideNext,
                        allowSlidePrev: r.params.allowSlidePrev,
                        touchEvents: (d = ["touchstart", "touchmove", "touchend"], p = ["mousedown", "mousemove", "mouseup"], te.pointerEvents ? p = ["pointerdown", "pointermove", "pointerup"] : te.prefixedPointerEvents && (p = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), r.touchEventsTouch = {
                            start: d[0],
                            move: d[1],
                            end: d[2]
                        }, r.touchEventsDesktop = {
                            start: p[0],
                            move: p[1],
                            end: p[2]
                        }, te.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video",
                            lastClickTime: ee.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: r.params.allowTouchMove,
                        touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), r.useModules(), r.params.init && r.init(), r
                }
            }

            u && (h.__proto__ = u);
            var e = {
                extendedDefaults: {configurable: !0},
                defaults: {configurable: !0},
                Class: {configurable: !0},
                $: {configurable: !0}
            };
            return ((h.prototype = Object.create(u && u.prototype)).constructor = h).prototype.slidesPerViewDynamic = function () {
                var e = this, t = e.params, a = e.slides, i = e.slidesGrid, s = e.size, r = e.activeIndex, n = 1;
                if (t.centeredSlides) {
                    for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) a[d] && !o && (n += 1, s < (l += a[d].swiperSlideSize) && (o = !0));
                    for (var p = r - 1; 0 <= p; p -= 1) a[p] && !o && (n += 1, s < (l += a[p].swiperSlideSize) && (o = !0))
                } else for (var c = r + 1; c < a.length; c += 1) i[c] - i[r] < s && (n += 1);
                return n
            }, h.prototype.update = function () {
                var a = this;
                if (a && !a.destroyed) {
                    var e = a.snapGrid, t = a.params;
                    t.breakpoints && a.setBreakpoint(), a.updateSize(), a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.params.freeMode ? (i(), a.params.autoHeight && a.updateAutoHeight()) : (("auto" === a.params.slidesPerView || 1 < a.params.slidesPerView) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || i(), t.watchOverflow && e !== a.snapGrid && a.checkOverflow(), a.emit("update")
                }

                function i() {
                    var e = a.rtlTranslate ? -1 * a.translate : a.translate,
                        t = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate());
                    a.setTranslate(t), a.updateActiveIndex(), a.updateSlidesClasses()
                }
            }, h.prototype.init = function () {
                var e = this;
                e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
            }, h.prototype.destroy = function (e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var a = this, i = a.params, s = a.$el, r = a.$wrapperEl, n = a.slides;
                return void 0 === a.params || a.destroyed || (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), t && (a.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(function (e) {
                    a.off(e)
                }), !1 !== e && (a.$el[0].swiper = null, a.$el.data("swiper", null), ee.deleteProps(a)), a.destroyed = !0), null
            }, h.extendDefaults = function (e) {
                ee.extend(E, e)
            }, e.extendedDefaults.get = function () {
                return E
            }, e.defaults.get = function () {
                return x
            }, e.Class.get = function () {
                return u
            }, e.$.get = function () {
                return L
            }, Object.defineProperties(h, e), h
        }(s), C = {name: "device", proto: {device: m}, static: {device: m}},
        M = {name: "support", proto: {support: te}, static: {support: te}},
        k = {name: "browser", proto: {browser: I}, static: {browser: I}}, P = {
            name: "resize", create: function () {
                var e = this;
                ee.extend(e, {
                    resize: {
                        resizeHandler: function () {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        }, orientationChangeHandler: function () {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            }, on: {
                init: function () {
                    J.addEventListener("resize", this.resize.resizeHandler), J.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                }, destroy: function () {
                    J.removeEventListener("resize", this.resize.resizeHandler), J.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        }, z = {
            func: J.MutationObserver || J.WebkitMutationObserver, attach: function (e, t) {
                void 0 === t && (t = {});
                var a = this, i = new z.func(function (e) {
                    if (1 !== e.length) {
                        var t = function () {
                            a.emit("observerUpdate", e[0])
                        };
                        J.requestAnimationFrame ? J.requestAnimationFrame(t) : J.setTimeout(t, 0)
                    } else a.emit("observerUpdate", e[0])
                });
                i.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), a.observer.observers.push(i)
            }, init: function () {
                var e = this;
                if (te.observer && e.params.observer) {
                    if (e.params.observeParents) for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) e.observer.attach(t[a]);
                    e.observer.attach(e.$el[0], {childList: e.params.observeSlideChildren}), e.observer.attach(e.$wrapperEl[0], {attributes: !1})
                }
            }, destroy: function () {
                this.observer.observers.forEach(function (e) {
                    e.disconnect()
                }), this.observer.observers = []
            }
        }, $ = {
            name: "observer",
            params: {observer: !1, observeParents: !1, observeSlideChildren: !1},
            create: function () {
                ee.extend(this, {
                    observer: {
                        init: z.init.bind(this),
                        attach: z.attach.bind(this),
                        destroy: z.destroy.bind(this),
                        observers: []
                    }
                })
            },
            on: {
                init: function () {
                    this.observer.init()
                }, destroy: function () {
                    this.observer.destroy()
                }
            }
        }, D = {
            update: function (e) {
                var t = this, a = t.params, i = a.slidesPerView, s = a.slidesPerGroup, r = a.centeredSlides,
                    n = t.params.virtual, o = n.addSlidesBefore, l = n.addSlidesAfter, d = t.virtual, p = d.from, c = d.to,
                    u = d.slides, h = d.slidesGrid, v = d.renderSlide, f = d.offset;
                t.updateActiveIndex();
                var m, g, b, w = t.activeIndex || 0;
                m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(i / 2) + s + o, b = Math.floor(i / 2) + s + l) : (g = i + (s - 1) + o, b = s + l);
                var y = Math.max((w || 0) - b, 0), x = Math.min((w || 0) + g, u.length - 1),
                    T = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);

                function E() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                }

                if (ee.extend(t.virtual, {
                    from: y,
                    to: x,
                    offset: T,
                    slidesGrid: t.slidesGrid
                }), p === y && c === x && !e) return t.slidesGrid !== h && T !== f && t.slides.css(m, T + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                    offset: T,
                    from: y,
                    to: x,
                    slides: function () {
                        for (var e = [], t = y; t <= x; t += 1) e.push(u[t]);
                        return e
                    }()
                }), void E();
                var S = [], C = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove(); else for (var M = p; M <= c; M += 1) (M < y || x < M) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
                for (var k = 0; k < u.length; k += 1) y <= k && k <= x && (void 0 === c || e ? C.push(k) : (c < k && C.push(k), k < p && S.push(k)));
                C.forEach(function (e) {
                    t.$wrapperEl.append(v(u[e], e))
                }), S.sort(function (e, t) {
                    return t - e
                }).forEach(function (e) {
                    t.$wrapperEl.prepend(v(u[e], e))
                }), t.$wrapperEl.children(".swiper-slide").css(m, T + "px"), E()
            }, renderSlide: function (e, t) {
                var a = this, i = a.params.virtual;
                if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
                var s = i.renderSlide ? L(i.renderSlide.call(a, e, t)) : L('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s
            }, appendSlide: function (e) {
                this.virtual.slides.push(e), this.virtual.update(!0)
            }, prependSlide: function (e) {
                var t = this;
                if (t.virtual.slides.unshift(e), t.params.virtual.cache) {
                    var a = t.virtual.cache, i = {};
                    Object.keys(a).forEach(function (e) {
                        i[e + 1] = a[e]
                    }), t.virtual.cache = i
                }
                t.virtual.update(!0), t.slideNext(0)
            }
        }, O = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            },
            create: function () {
                var e = this;
                ee.extend(e, {
                    virtual: {
                        update: D.update.bind(e),
                        appendSlide: D.appendSlide.bind(e),
                        prependSlide: D.prependSlide.bind(e),
                        renderSlide: D.renderSlide.bind(e),
                        slides: e.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    if (e.params.virtual.enabled) {
                        e.classNames.push(e.params.containerModifierClass + "virtual");
                        var t = {watchSlidesProgress: !0};
                        ee.extend(e.params, t), ee.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update()
                    }
                }, setTranslate: function () {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        }, A = {
            handle: function (e) {
                var t = this, a = t.rtlTranslate, i = e;
                i.originalEvent && (i = i.originalEvent);
                var s = i.keyCode || i.charCode;
                if (!t.allowSlideNext && (t.isHorizontal() && 39 === s || t.isVertical() && 40 === s)) return !1;
                if (!t.allowSlidePrev && (t.isHorizontal() && 37 === s || t.isVertical() && 38 === s)) return !1;
                if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || f.activeElement && f.activeElement.nodeName && ("input" === f.activeElement.nodeName.toLowerCase() || "textarea" === f.activeElement.nodeName.toLowerCase()))) {
                    if (t.params.keyboard.onlyInViewport && (37 === s || 39 === s || 38 === s || 40 === s)) {
                        var r = !1;
                        if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                        var n = J.innerWidth, o = J.innerHeight, l = t.$el.offset();
                        a && (l.left -= t.$el[0].scrollLeft);
                        for (var d = [[l.left, l.top], [l.left + t.width, l.top], [l.left, l.top + t.height], [l.left + t.width, l.top + t.height]], p = 0; p < d.length; p += 1) {
                            var c = d[p];
                            0 <= c[0] && c[0] <= n && 0 <= c[1] && c[1] <= o && (r = !0)
                        }
                        if (!r) return
                    }
                    t.isHorizontal() ? (37 !== s && 39 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === s && !a || 37 === s && a) && t.slideNext(), (37 === s && !a || 39 === s && a) && t.slidePrev()) : (38 !== s && 40 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === s && t.slideNext(), 38 === s && t.slidePrev()), t.emit("keyPress", s)
                }
            }, enable: function () {
                this.keyboard.enabled || (L(f).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            }, disable: function () {
                this.keyboard.enabled && (L(f).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        }, N = {
            name: "keyboard", params: {keyboard: {enabled: !1, onlyInViewport: !0}}, create: function () {
                ee.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: A.enable.bind(this),
                        disable: A.disable.bind(this),
                        handle: A.handle.bind(this)
                    }
                })
            }, on: {
                init: function () {
                    this.params.keyboard.enabled && this.keyboard.enable()
                }, destroy: function () {
                    this.keyboard.enabled && this.keyboard.disable()
                }
            }
        };
    var H = {
        lastScrollTime: ee.now(),
        event: -1 < J.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function () {
            var e = "onwheel", t = e in f;
            if (!t) {
                var a = f.createElement("div");
                a.setAttribute(e, "return;"), t = "function" == typeof a[e]
            }
            return !t && f.implementation && f.implementation.hasFeature && !0 !== f.implementation.hasFeature("", "") && (t = f.implementation.hasFeature("Events.wheel", "3.0")), t
        }() ? "wheel" : "mousewheel",
        normalize: function (e) {
            var t = 0, a = 0, i = 0, s = 0;
            return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), {
                spinX: t,
                spinY: a,
                pixelX: i,
                pixelY: s
            }
        },
        handleMouseEnter: function () {
            this.mouseEntered = !0
        },
        handleMouseLeave: function () {
            this.mouseEntered = !1
        },
        handle: function (e) {
            var t = e, a = this, i = a.params.mousewheel;
            if (!a.mouseEntered && !i.releaseOnEdges) return !0;
            t.originalEvent && (t = t.originalEvent);
            var s = 0, r = a.rtlTranslate ? -1 : 1, n = H.normalize(t);
            if (i.forceToAxis) if (a.isHorizontal()) {
                if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return !0;
                s = n.pixelX * r
            } else {
                if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return !0;
                s = n.pixelY
            } else s = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY;
            if (0 === s) return !0;
            if (i.invert && (s = -s), a.params.freeMode) {
                a.params.loop && a.loopFix();
                var o = a.getTranslate() + s * i.sensitivity, l = a.isBeginning, d = a.isEnd;
                if (o >= a.minTranslate() && (o = a.minTranslate()), o <= a.maxTranslate() && (o = a.maxTranslate()), a.setTransition(0), a.setTranslate(o), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!l && a.isBeginning || !d && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = ee.nextTick(function () {
                    a.slideToClosest()
                }, 300)), a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), o === a.minTranslate() || o === a.maxTranslate()) return !0
            } else {
                if (60 < ee.now() - a.mousewheel.lastScrollTime) if (s < 0) if (a.isEnd && !a.params.loop || a.animating) {
                    if (i.releaseOnEdges) return !0
                } else a.slideNext(), a.emit("scroll", t); else if (a.isBeginning && !a.params.loop || a.animating) {
                    if (i.releaseOnEdges) return !0
                } else a.slidePrev(), a.emit("scroll", t);
                a.mousewheel.lastScrollTime = (new J.Date).getTime()
            }
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
        },
        enable: function () {
            var e = this;
            if (!H.event) return !1;
            if (e.mousewheel.enabled) return !1;
            var t = e.$el;
            return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(H.event, e.mousewheel.handle), e.mousewheel.enabled = !0
        },
        disable: function () {
            var e = this;
            if (!H.event) return !1;
            if (!e.mousewheel.enabled) return !1;
            var t = e.$el;
            return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.off(H.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1)
        }
    }, G = {
        update: function () {
            var e = this, t = e.params.navigation;
            if (!e.params.loop) {
                var a = e.navigation, i = a.$nextEl, s = a.$prevEl;
                s && 0 < s.length && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && 0 < i.length && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
            }
        }, onPrevClick: function (e) {
            e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
        }, onNextClick: function (e) {
            e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
        }, init: function () {
            var e, t, a = this, i = a.params.navigation;
            (i.nextEl || i.prevEl) && (i.nextEl && (e = L(i.nextEl), a.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))), i.prevEl && (t = L(i.prevEl), a.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))), e && 0 < e.length && e.on("click", a.navigation.onNextClick), t && 0 < t.length && t.on("click", a.navigation.onPrevClick), ee.extend(a.navigation, {
                $nextEl: e,
                nextEl: e && e[0],
                $prevEl: t,
                prevEl: t && t[0]
            }))
        }, destroy: function () {
            var e = this, t = e.navigation, a = t.$nextEl, i = t.$prevEl;
            a && a.length && (a.off("click", e.navigation.onNextClick), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass))
        }
    }, B = {
        update: function () {
            var e = this, t = e.rtl, s = e.params.pagination;
            if (s.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var r, a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                    i = e.pagination.$el,
                    n = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides), n - 1 < r && (r -= n), r < 0 && "bullets" !== e.params.paginationType && (r = n + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
                    var o, l, d, p = e.pagination.bullets;
                    if (s.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), i.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"), 1 < s.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex, e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = r - e.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(p.length, s.dynamicMainBullets) - 1)) + o) / 2), p.removeClass(s.bulletActiveClass + " " + s.bulletActiveClass + "-next " + s.bulletActiveClass + "-next-next " + s.bulletActiveClass + "-prev " + s.bulletActiveClass + "-prev-prev " + s.bulletActiveClass + "-main"), 1 < i.length) p.each(function (e, t) {
                        var a = L(t), i = a.index();
                        i === r && a.addClass(s.bulletActiveClass), s.dynamicBullets && (o <= i && i <= l && a.addClass(s.bulletActiveClass + "-main"), i === o && a.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), i === l && a.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next"))
                    }); else if (p.eq(r).addClass(s.bulletActiveClass), s.dynamicBullets) {
                        for (var c = p.eq(o), u = p.eq(l), h = o; h <= l; h += 1) p.eq(h).addClass(s.bulletActiveClass + "-main");
                        c.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), u.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next")
                    }
                    if (s.dynamicBullets) {
                        var v = Math.min(p.length, s.dynamicMainBullets + 4),
                            f = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
                            m = t ? "right" : "left";
                        p.css(e.isHorizontal() ? m : "top", f + "px")
                    }
                }
                if ("fraction" === s.type && (i.find("." + s.currentClass).text(s.formatFractionCurrent(r + 1)), i.find("." + s.totalClass).text(s.formatFractionTotal(n))), "progressbar" === s.type) {
                    var g;
                    g = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                    var b = (r + 1) / n, w = 1, y = 1;
                    "horizontal" === g ? w = b : y = b, i.find("." + s.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(e.params.speed)
                }
                "custom" === s.type && s.renderCustom ? (i.html(s.renderCustom(e, r + 1, n)), e.emit("paginationRender", e, i[0])) : e.emit("paginationUpdate", e, i[0]), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass)
            }
        }, render: function () {
            var e = this, t = e.params.pagination;
            if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                    i = e.pagination.$el, s = "";
                if ("bullets" === t.type) {
                    for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1) t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                    i.html(s), e.pagination.bullets = i.find("." + t.bulletClass)
                }
                "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
            }
        }, init: function () {
            var a = this, e = a.params.pagination;
            if (e.el) {
                var t = L(e.el);
                0 !== t.length && (a.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === a.$el.find(e.el).length && (t = a.$el.find(e.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), a.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", "." + e.bulletClass, function (e) {
                    e.preventDefault();
                    var t = L(this).index() * a.params.slidesPerGroup;
                    a.params.loop && (t += a.loopedSlides), a.slideTo(t)
                }), ee.extend(a.pagination, {$el: t, el: t[0]}))
            }
        }, destroy: function () {
            var e = this, t = e.params.pagination;
            if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var a = e.pagination.$el;
                a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass)
            }
        }
    }, X = {
        setTranslate: function () {
            var e = this;
            if (e.params.scrollbar.el && e.scrollbar.el) {
                var t = e.scrollbar, a = e.rtlTranslate, i = e.progress, s = t.dragSize, r = t.trackSize, n = t.$dragEl,
                    o = t.$el, l = e.params.scrollbar, d = s, p = (r - s) * i;
                a ? 0 < (p = -p) ? (d = s - p, p = 0) : r < -p + s && (d = r + p) : p < 0 ? (d = s + p, p = 0) : r < p + s && (d = r - p), e.isHorizontal() ? (te.transforms3d ? n.transform("translate3d(" + p + "px, 0, 0)") : n.transform("translateX(" + p + "px)"), n[0].style.width = d + "px") : (te.transforms3d ? n.transform("translate3d(0px, " + p + "px, 0)") : n.transform("translateY(" + p + "px)"), n[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
                    o[0].style.opacity = 0, o.transition(400)
                }, 1e3))
            }
        }, setTransition: function (e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
        }, updateSize: function () {
            var e = this;
            if (e.params.scrollbar.el && e.scrollbar.el) {
                var t = e.scrollbar, a = t.$dragEl, i = t.$el;
                a[0].style.width = "", a[0].style.height = "";
                var s, r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, n = e.size / e.virtualSize,
                    o = n * (r / e.size);
                s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = 1 <= n ? "none" : "", e.params.scrollbarHide && (i[0].style.opacity = 0), ee.extend(t, {
                    trackSize: r,
                    divider: n,
                    moveDivider: o,
                    dragSize: s
                }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
            }
        }, setDragPosition: function (e) {
            var t, a = this, i = a.scrollbar, s = a.rtlTranslate, r = i.$el, n = i.dragSize, o = i.trackSize;
            t = ((a.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - r.offset()[a.isHorizontal() ? "left" : "top"] - n / 2) / (o - n), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
            var l = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
            a.updateProgress(l), a.setTranslate(l), a.updateActiveIndex(), a.updateSlidesClasses()
        }, onDragStart: function (e) {
            var t = this, a = t.params.scrollbar, i = t.scrollbar, s = t.$wrapperEl, r = i.$el, n = i.$dragEl;
            t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.emit("scrollbarDragStart", e)
        }, onDragMove: function (e) {
            var t = this.scrollbar, a = this.$wrapperEl, i = t.$el, s = t.$dragEl;
            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), a.transition(0), i.transition(0), s.transition(0), this.emit("scrollbarDragMove", e))
        }, onDragEnd: function (e) {
            var t = this, a = t.params.scrollbar, i = t.scrollbar.$el;
            t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = ee.nextTick(function () {
                i.css("opacity", 0), i.transition(400)
            }, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideToClosest())
        }, enableDraggable: function () {
            var e = this;
            if (e.params.scrollbar.el) {
                var t = e.scrollbar, a = e.touchEventsTouch, i = e.touchEventsDesktop, s = e.params, r = t.$el[0],
                    n = !(!te.passiveListener || !s.passiveListeners) && {passive: !1, capture: !1},
                    o = !(!te.passiveListener || !s.passiveListeners) && {passive: !0, capture: !1};
                te.touch ? (r.addEventListener(a.start, e.scrollbar.onDragStart, n), r.addEventListener(a.move, e.scrollbar.onDragMove, n), r.addEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.addEventListener(i.start, e.scrollbar.onDragStart, n), f.addEventListener(i.move, e.scrollbar.onDragMove, n), f.addEventListener(i.end, e.scrollbar.onDragEnd, o))
            }
        }, disableDraggable: function () {
            var e = this;
            if (e.params.scrollbar.el) {
                var t = e.scrollbar, a = e.touchEventsTouch, i = e.touchEventsDesktop, s = e.params, r = t.$el[0],
                    n = !(!te.passiveListener || !s.passiveListeners) && {passive: !1, capture: !1},
                    o = !(!te.passiveListener || !s.passiveListeners) && {passive: !0, capture: !1};
                te.touch ? (r.removeEventListener(a.start, e.scrollbar.onDragStart, n), r.removeEventListener(a.move, e.scrollbar.onDragMove, n), r.removeEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.removeEventListener(i.start, e.scrollbar.onDragStart, n), f.removeEventListener(i.move, e.scrollbar.onDragMove, n), f.removeEventListener(i.end, e.scrollbar.onDragEnd, o))
            }
        }, init: function () {
            var e = this;
            if (e.params.scrollbar.el) {
                var t = e.scrollbar, a = e.$el, i = e.params.scrollbar, s = L(i.el);
                e.params.uniqueNavElements && "string" == typeof i.el && 1 < s.length && 1 === a.find(i.el).length && (s = a.find(i.el));
                var r = s.find("." + e.params.scrollbar.dragClass);
                0 === r.length && (r = L('<div class="' + e.params.scrollbar.dragClass + '"></div>'), s.append(r)), ee.extend(t, {
                    $el: s,
                    el: s[0],
                    $dragEl: r,
                    dragEl: r[0]
                }), i.draggable && t.enableDraggable()
            }
        }, destroy: function () {
            this.scrollbar.disableDraggable()
        }
    }, Y = {
        setTransform: function (e, t) {
            var a = this.rtl, i = L(e), s = a ? -1 : 1, r = i.attr("data-swiper-parallax") || "0",
                n = i.attr("data-swiper-parallax-x"), o = i.attr("data-swiper-parallax-y"),
                l = i.attr("data-swiper-parallax-scale"), d = i.attr("data-swiper-parallax-opacity");
            if (n || o ? (n = n || "0", o = o || "0") : this.isHorizontal() ? (n = r, o = "0") : (o = r, n = "0"), n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t * s + "%" : n * t * s + "px", o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px", null != d) {
                var p = d - (d - 1) * (1 - Math.abs(t));
                i[0].style.opacity = p
            }
            if (null == l) i.transform("translate3d(" + n + ", " + o + ", 0px)"); else {
                var c = l - (l - 1) * (1 - Math.abs(t));
                i.transform("translate3d(" + n + ", " + o + ", 0px) scale(" + c + ")")
            }
        }, setTranslate: function () {
            var i = this, e = i.$el, t = i.slides, s = i.progress, r = i.snapGrid;
            e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
                i.parallax.setTransform(t, s)
            }), t.each(function (e, t) {
                var a = t.progress;
                1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (a += Math.ceil(e / 2) - s * (r.length - 1)), a = Math.min(Math.max(a, -1), 1), L(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
                    i.parallax.setTransform(t, a)
                })
            })
        }, setTransition: function (s) {
            void 0 === s && (s = this.params.speed);
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
                var a = L(t), i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || s;
                0 === s && (i = 0), a.transition(i)
            })
        }
    }, V = {
        getDistanceBetweenTouches: function (e) {
            if (e.targetTouches.length < 2) return 1;
            var t = e.targetTouches[0].pageX, a = e.targetTouches[0].pageY, i = e.targetTouches[1].pageX,
                s = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2))
        }, onGestureStart: function (e) {
            var t = this, a = t.params.zoom, i = t.zoom, s = i.gesture;
            if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !te.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                i.fakeGestureTouched = !0, s.scaleStart = V.getDistanceBetweenTouches(e)
            }
            s.$slideEl && s.$slideEl.length || (s.$slideEl = L(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), t.zoom.isScaling = !0) : s.$imageEl = void 0
        }, onGestureChange: function (e) {
            var t = this.params.zoom, a = this.zoom, i = a.gesture;
            if (!te.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                a.fakeGestureMoved = !0, i.scaleMove = V.getDistanceBetweenTouches(e)
            }
            i.$imageEl && 0 !== i.$imageEl.length && (a.scale = te.gestures ? e.scale * a.currentScale : i.scaleMove / i.scaleStart * a.currentScale, a.scale > i.maxRatio && (a.scale = i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, .5)), a.scale < t.minRatio && (a.scale = t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")"))
        }, onGestureEnd: function (e) {
            var t = this.params.zoom, a = this.zoom, i = a.gesture;
            if (!te.gestures) {
                if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !m.android) return;
                a.fakeGestureTouched = !1, a.fakeGestureMoved = !1
            }
            i.$imageEl && 0 !== i.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (i.$slideEl = void 0))
        }, onTouchStart: function (e) {
            var t = this.zoom, a = t.gesture, i = t.image;
            a.$imageEl && 0 !== a.$imageEl.length && (i.isTouched || (m.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        }, onTouchMove: function (e) {
            var t = this, a = t.zoom, i = a.gesture, s = a.image, r = a.velocity;
            if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
                s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = ee.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = ee.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                var n = s.width * a.scale, o = s.height * a.scale;
                if (!(n < i.slideWidth && o < i.slideHeight)) {
                    if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
                        if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
                        if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1)
                    }
                    e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                }
            }
        }, onTouchEnd: function () {
            var e = this.zoom, t = e.gesture, a = e.image, i = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void (a.isMoved = !1);
                a.isTouched = !1, a.isMoved = !1;
                var s = 300, r = 300, n = i.x * s, o = a.currentX + n, l = i.y * r, d = a.currentY + l;
                0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
                var p = Math.max(s, r);
                a.currentX = o, a.currentY = d;
                var c = a.width * e.scale, u = a.height * e.scale;
                a.minX = Math.min(t.slideWidth / 2 - c / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - u / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)")
            }
        }, onTransitionEnd: function () {
            var e = this.zoom, t = e.gesture;
            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
        }, toggle: function (e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e)
        }, in: function (e) {
            var t, a, i, s, r, n, o, l, d, p, c, u, h, v, f, m, g = this, b = g.zoom, w = g.params.zoom, y = b.gesture,
                x = b.image;
            (y.$slideEl || (y.$slideEl = g.clickedSlide ? L(g.clickedSlide) : g.slides.eq(g.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, a = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (f = y.$slideEl[0].offsetWidth, m = y.$slideEl[0].offsetHeight, i = y.$slideEl.offset().left + f / 2 - t, s = y.$slideEl.offset().top + m / 2 - a, o = y.$imageEl[0].offsetWidth, l = y.$imageEl[0].offsetHeight, d = o * b.scale, p = l * b.scale, h = -(c = Math.min(f / 2 - d / 2, 0)), v = -(u = Math.min(m / 2 - p / 2, 0)), (r = i * b.scale) < c && (r = c), h < r && (r = h), (n = s * b.scale) < u && (n = u), v < n && (n = v)) : n = r = 0, y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"))
        }, out: function () {
            var e = this, t = e.zoom, a = e.params.zoom, i = t.gesture;
            i.$slideEl || (i.$slideEl = e.clickedSlide ? L(e.clickedSlide) : e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + a.zoomedSlideClass), i.$slideEl = void 0)
        }, enable: function () {
            var e = this, t = e.zoom;
            if (!t.enabled) {
                t.enabled = !0;
                var a = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                te.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
            }
        }, disable: function () {
            var e = this, t = e.zoom;
            if (t.enabled) {
                e.zoom.enabled = !1;
                var a = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                te.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
            }
        }
    }, F = {
        loadInSlide: function (e, l) {
            void 0 === l && (l = !0);
            var d = this, p = d.params.lazy;
            if (void 0 !== e && 0 !== d.slides.length) {
                var c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : d.slides.eq(e),
                    t = c.find("." + p.elementClass + ":not(." + p.loadedClass + "):not(." + p.loadingClass + ")");
                !c.hasClass(p.elementClass) || c.hasClass(p.loadedClass) || c.hasClass(p.loadingClass) || (t = t.add(c[0])), 0 !== t.length && t.each(function (e, t) {
                    var i = L(t);
                    i.addClass(p.loadingClass);
                    var s = i.attr("data-background"), r = i.attr("data-src"), n = i.attr("data-srcset"),
                        o = i.attr("data-sizes");
                    d.loadImage(i[0], r || s, n, o, !1, function () {
                        if (null != d && d && (!d || d.params) && !d.destroyed) {
                            if (s ? (i.css("background-image", 'url("' + s + '")'), i.removeAttr("data-background")) : (n && (i.attr("srcset", n), i.removeAttr("data-srcset")), o && (i.attr("sizes", o), i.removeAttr("data-sizes")), r && (i.attr("src", r), i.removeAttr("data-src"))), i.addClass(p.loadedClass).removeClass(p.loadingClass), c.find("." + p.preloaderClass).remove(), d.params.loop && l) {
                                var e = c.attr("data-swiper-slide-index");
                                if (c.hasClass(d.params.slideDuplicateClass)) {
                                    var t = d.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + d.params.slideDuplicateClass + ")");
                                    d.lazy.loadInSlide(t.index(), !1)
                                } else {
                                    var a = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                    d.lazy.loadInSlide(a.index(), !1)
                                }
                            }
                            d.emit("lazyImageReady", c[0], i[0])
                        }
                    }), d.emit("lazyImageLoad", c[0], i[0])
                })
            }
        }, load: function () {
            var i = this, t = i.$wrapperEl, a = i.params, s = i.slides, e = i.activeIndex,
                r = i.virtual && a.virtual.enabled, n = a.lazy, o = a.slidesPerView;

            function l(e) {
                if (r) {
                    if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                } else if (s[e]) return !0;
                return !1
            }

            function d(e) {
                return r ? L(e).attr("data-swiper-slide-index") : L(e).index()
            }

            if ("auto" === o && (o = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) t.children("." + a.slideVisibleClass).each(function (e, t) {
                var a = r ? L(t).attr("data-swiper-slide-index") : L(t).index();
                i.lazy.loadInSlide(a)
            }); else if (1 < o) for (var p = e; p < e + o; p += 1) l(p) && i.lazy.loadInSlide(p); else i.lazy.loadInSlide(e);
            if (n.loadPrevNext) if (1 < o || n.loadPrevNextAmount && 1 < n.loadPrevNextAmount) {
                for (var c = n.loadPrevNextAmount, u = o, h = Math.min(e + u + Math.max(c, u), s.length), v = Math.max(e - Math.max(u, c), 0), f = e + o; f < h; f += 1) l(f) && i.lazy.loadInSlide(f);
                for (var m = v; m < e; m += 1) l(m) && i.lazy.loadInSlide(m)
            } else {
                var g = t.children("." + a.slideNextClass);
                0 < g.length && i.lazy.loadInSlide(d(g));
                var b = t.children("." + a.slidePrevClass);
                0 < b.length && i.lazy.loadInSlide(d(b))
            }
        }
    }, R = {
        LinearSpline: function (e, t) {
            var a, i, s, r, n, o = function (e, t) {
                for (i = -1, a = e.length; 1 < a - i;) e[s = a + i >> 1] <= t ? i = s : a = s;
                return a
            };
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
            }, this
        }, getInterpolateFunction: function (e) {
            var t = this;
            t.controller.spline || (t.controller.spline = t.params.loop ? new R.LinearSpline(t.slidesGrid, e.slidesGrid) : new R.LinearSpline(t.snapGrid, e.snapGrid))
        }, setTranslate: function (e, t) {
            var a, i, s = this, r = s.controller.control;

            function n(e) {
                var t = s.rtlTranslate ? -s.translate : s.translate;
                "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(-t)), i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), i = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, s), e.updateActiveIndex(), e.updateSlidesClasses()
            }

            if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof S && n(r[o]); else r instanceof S && t !== r && n(r)
        }, setTransition: function (t, e) {
            var a, i = this, s = i.controller.control;

            function r(e) {
                e.setTransition(t, i), 0 !== t && (e.transitionStart(), e.params.autoHeight && ee.nextTick(function () {
                    e.updateAutoHeight()
                }), e.$wrapperEl.transitionEnd(function () {
                    s && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(), e.transitionEnd())
                }))
            }

            if (Array.isArray(s)) for (a = 0; a < s.length; a += 1) s[a] !== e && s[a] instanceof S && r(s[a]); else s instanceof S && e !== s && r(s)
        }
    }, q = {
        makeElFocusable: function (e) {
            return e.attr("tabIndex", "0"), e
        }, addElRole: function (e, t) {
            return e.attr("role", t), e
        }, addElLabel: function (e, t) {
            return e.attr("aria-label", t), e
        }, disableEl: function (e) {
            return e.attr("aria-disabled", !0), e
        }, enableEl: function (e) {
            return e.attr("aria-disabled", !1), e
        }, onEnterKey: function (e) {
            var t = this, a = t.params.a11y;
            if (13 === e.keyCode) {
                var i = L(e.target);
                t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)), t.pagination && i.is("." + t.params.pagination.bulletClass) && i[0].click()
            }
        }, notify: function (e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""), t.html(e))
        }, updateNavigation: function () {
            var e = this;
            if (!e.params.loop) {
                var t = e.navigation, a = t.$nextEl, i = t.$prevEl;
                i && 0 < i.length && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && 0 < a.length && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a))
            }
        }, updatePagination: function () {
            var i = this, s = i.params.a11y;
            i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.bullets.each(function (e, t) {
                var a = L(t);
                i.a11y.makeElFocusable(a), i.a11y.addElRole(a, "button"), i.a11y.addElLabel(a, s.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
            })
        }, init: function () {
            var e = this;
            e.$el.append(e.a11y.liveRegion);
            var t, a, i = e.params.a11y;
            e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
        }, destroy: function () {
            var e, t, a = this;
            a.a11y.liveRegion && 0 < a.a11y.liveRegion.length && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off("keydown", a.a11y.onEnterKey), t && t.off("keydown", a.a11y.onEnterKey), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass, a.a11y.onEnterKey)
        }
    }, W = {
        init: function () {
            var e = this;
            if (e.params.history) {
                if (!J.history || !J.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
                var t = e.history;
                t.initialized = !0, t.paths = W.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || J.addEventListener("popstate", e.history.setHistoryPopState))
            }
        }, destroy: function () {
            this.params.history.replaceState || J.removeEventListener("popstate", this.history.setHistoryPopState)
        }, setHistoryPopState: function () {
            this.history.paths = W.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
        }, getPathValues: function () {
            var e = J.location.pathname.slice(1).split("/").filter(function (e) {
                return "" !== e
            }), t = e.length;
            return {key: e[t - 2], value: e[t - 1]}
        }, setHistory: function (e, t) {
            if (this.history.initialized && this.params.history.enabled) {
                var a = this.slides.eq(t), i = W.slugify(a.attr("data-history"));
                J.location.pathname.includes(e) || (i = e + "/" + i);
                var s = J.history.state;
                s && s.value === i || (this.params.history.replaceState ? J.history.replaceState({value: i}, null, i) : J.history.pushState({value: i}, null, i))
            }
        }, slugify: function (e) {
            return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        }, scrollToSlide: function (e, t, a) {
            var i = this;
            if (t) for (var s = 0, r = i.slides.length; s < r; s += 1) {
                var n = i.slides.eq(s);
                if (W.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
                    var o = n.index();
                    i.slideTo(o, e, a)
                }
            } else i.slideTo(0, e, a)
        }
    }, j = {
        onHashCange: function () {
            var e = this, t = f.location.hash.replace("#", "");
            if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                var a = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index();
                if (void 0 === a) return;
                e.slideTo(a)
            }
        }, setHash: function () {
            var e = this;
            if (e.hashNavigation.initialized && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && J.history && J.history.replaceState) J.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""); else {
                var t = e.slides.eq(e.activeIndex), a = t.attr("data-hash") || t.attr("data-history");
                f.location.hash = a || ""
            }
        }, init: function () {
            var e = this;
            if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
                e.hashNavigation.initialized = !0;
                var t = f.location.hash.replace("#", "");
                if (t) for (var a = 0, i = e.slides.length; a < i; a += 1) {
                    var s = e.slides.eq(a);
                    if ((s.attr("data-hash") || s.attr("data-history")) === t && !s.hasClass(e.params.slideDuplicateClass)) {
                        var r = s.index();
                        e.slideTo(r, 0, e.params.runCallbacksOnInit, !0)
                    }
                }
                e.params.hashNavigation.watchState && L(J).on("hashchange", e.hashNavigation.onHashCange)
            }
        }, destroy: function () {
            this.params.hashNavigation.watchState && L(J).off("hashchange", this.hashNavigation.onHashCange)
        }
    }, U = {
        run: function () {
            var e = this, t = e.slides.eq(e.activeIndex), a = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = ee.nextTick(function () {
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
            }, a)
        }, start: function () {
            var e = this;
            return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0))
        }, stop: function () {
            var e = this;
            return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
        }, pause: function (e) {
            var t = this;
            t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
        }
    }, K = {
        setTranslate: function () {
            for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
                var i = e.slides.eq(a), s = -i[0].swiperSlideOffset;
                e.params.virtualTranslate || (s -= e.translate);
                var r = 0;
                e.isHorizontal() || (r = s, s = 0);
                var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                i.css({opacity: n}).transform("translate3d(" + s + "px, " + r + "px, 0px)")
            }
        }, setTransition: function (e) {
            var a = this, t = a.slides, i = a.$wrapperEl;
            if (t.transition(e), a.params.virtualTranslate && 0 !== e) {
                var s = !1;
                t.transitionEnd(function () {
                    if (!s && a && !a.destroyed) {
                        s = !0, a.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) i.trigger(e[t])
                    }
                })
            }
        }
    }, _ = {
        setTranslate: function () {
            var e, t = this, a = t.$el, i = t.$wrapperEl, s = t.slides, r = t.width, n = t.height, o = t.rtlTranslate,
                l = t.size, d = t.params.cubeEffect, p = t.isHorizontal(), c = t.virtual && t.params.virtual.enabled,
                u = 0;
            d.shadow && (p ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({height: r + "px"})) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), a.append(e)));
            for (var h = 0; h < s.length; h += 1) {
                var v = s.eq(h), f = h;
                c && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                var m = 90 * f, g = Math.floor(m / 360);
                o && (m = -m, g = Math.floor(-m / 360));
                var b = Math.max(Math.min(v[0].progress, 1), -1), w = 0, y = 0, x = 0;
                f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), p || (y = w, w = 0);
                var T = "rotateX(" + (p ? 0 : -m) + "deg) rotateY(" + (p ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                if (b <= 1 && -1 < b && (u = 90 * f + 90 * b, o && (u = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) {
                    var E = p ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                        S = p ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                    0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (p ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (p ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0))
                }
            }
            if (i.css({
                "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                "transform-origin": "50% 50% -" + l / 2 + "px"
            }), d.shadow) if (p) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")"); else {
                var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
                    M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
                    k = d.shadowScale, P = d.shadowScale / M, z = d.shadowOffset;
                e.transform("scale3d(" + k + ", 1, " + P + ") translate3d(0px, " + (n / 2 + z) + "px, " + -n / 2 / P + "px) rotateX(-90deg)")
            }
            var $ = I.isSafari || I.isUiWebView ? -l / 2 : 0;
            i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (t.isHorizontal() ? 0 : u) + "deg) rotateY(" + (t.isHorizontal() ? -u : 0) + "deg)")
        }, setTransition: function (e) {
            var t = this.$el;
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
        }
    }, Z = {
        setTranslate: function () {
            for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
                var s = t.eq(i), r = s[0].progress;
                e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
                var n = -180 * r, o = 0, l = -s[0].swiperSlideOffset, d = 0;
                if (e.isHorizontal() ? a && (n = -n) : (d = l, o = -n, n = l = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) {
                    var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                        c = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                    0 === p.length && (p = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === c.length && (c = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(c)), p.length && (p[0].style.opacity = Math.max(-r, 0)), c.length && (c[0].style.opacity = Math.max(r, 0))
                }
                s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
            }
        }, setTransition: function (e) {
            var a = this, t = a.slides, i = a.activeIndex, s = a.$wrapperEl;
            if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), a.params.virtualTranslate && 0 !== e) {
                var r = !1;
                t.eq(i).transitionEnd(function () {
                    if (!r && a && !a.destroyed) {
                        r = !0, a.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) s.trigger(e[t])
                    }
                })
            }
        }
    }, Q = {
        setTranslate: function () {
            for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.$wrapperEl, r = e.slidesSizesGrid, n = e.params.coverflowEffect, o = e.isHorizontal(), l = e.translate, d = o ? t / 2 - l : a / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, h = i.length; u < h; u += 1) {
                var v = i.eq(u), f = r[u], m = (d - v[0].swiperSlideOffset - f / 2) / f * n.modifier, g = o ? p * m : 0,
                    b = o ? 0 : p * m, w = -c * Math.abs(m), y = o ? 0 : n.stretch * m, x = o ? n.stretch * m : 0;
                Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0), Math.abs(g) < .001 && (g = 0), Math.abs(b) < .001 && (b = 0);
                var T = "translate3d(" + x + "px," + y + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + g + "deg)";
                if (v.transform(T), v[0].style.zIndex = 1 - Math.abs(Math.round(m)), n.slideShadows) {
                    var E = o ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                        S = o ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                    0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = 0 < m ? m : 0), S.length && (S[0].style.opacity = 0 < -m ? -m : 0)
                }
            }
            (te.pointerEvents || te.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%")
        }, setTransition: function (e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
    }, ae = {
        init: function () {
            var e = this, t = e.params.thumbs, a = e.constructor;
            t.swiper instanceof a ? (e.thumbs.swiper = t.swiper, ee.extend(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), ee.extend(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })) : ee.isObject(t.swiper) && (e.thumbs.swiper = new a(ee.extend({}, t.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
        }, onThumbClick: function () {
            var e = this, t = e.thumbs.swiper;
            if (t) {
                var a = t.clickedIndex, i = t.clickedSlide;
                if (!(i && L(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == a)) {
                    var s;
                    if (s = t.params.loop ? parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a, e.params.loop) {
                        var r = e.activeIndex;
                        e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, r = e.activeIndex);
                        var n = e.slides.eq(r).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                            o = e.slides.eq(r).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
                        s = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n
                    }
                    e.slideTo(s)
                }
            }
        }, update: function (e) {
            var t = this, a = t.thumbs.swiper;
            if (a) {
                var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView;
                if (t.realIndex !== a.realIndex) {
                    var s, r = a.activeIndex;
                    if (a.params.loop) {
                        a.slides.eq(r).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, r = a.activeIndex);
                        var n = a.slides.eq(r).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                            o = a.slides.eq(r).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
                        s = void 0 === n ? o : void 0 === o ? n : o - r == r - n ? r : o - r < r - n ? o : n
                    } else s = t.realIndex;
                    a.visibleSlidesIndexes.indexOf(s) < 0 && (a.params.centeredSlides ? s = r < s ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : r < s && (s = s - i + 1), a.slideTo(s, e ? 0 : void 0))
                }
                var l = 1, d = t.params.thumbs.slideThumbActiveClass;
                if (1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView), a.slides.removeClass(d), a.params.loop) for (var p = 0; p < l; p += 1) a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + p) + '"]').addClass(d); else for (var c = 0; c < l; c += 1) a.slides.eq(t.realIndex + c).addClass(d)
            }
        }
    }, ie = [C, M, k, P, $, O, N, {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container"
            }
        },
        create: function () {
            var e = this;
            ee.extend(e, {
                mousewheel: {
                    enabled: !1,
                    enable: H.enable.bind(e),
                    disable: H.disable.bind(e),
                    handle: H.handle.bind(e),
                    handleMouseEnter: H.handleMouseEnter.bind(e),
                    handleMouseLeave: H.handleMouseLeave.bind(e),
                    lastScrollTime: ee.now()
                }
            })
        },
        on: {
            init: function () {
                this.params.mousewheel.enabled && this.mousewheel.enable()
            }, destroy: function () {
                this.mousewheel.enabled && this.mousewheel.disable()
            }
        }
    }, {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        },
        create: function () {
            var e = this;
            ee.extend(e, {
                navigation: {
                    init: G.init.bind(e),
                    update: G.update.bind(e),
                    destroy: G.destroy.bind(e),
                    onNextClick: G.onNextClick.bind(e),
                    onPrevClick: G.onPrevClick.bind(e)
                }
            })
        },
        on: {
            init: function () {
                this.navigation.init(), this.navigation.update()
            }, toEdge: function () {
                this.navigation.update()
            }, fromEdge: function () {
                this.navigation.update()
            }, destroy: function () {
                this.navigation.destroy()
            }, click: function (e) {
                var t = this.navigation, a = t.$nextEl, i = t.$prevEl;
                !this.params.navigation.hideOnClick || L(e.target).is(i) || L(e.target).is(a) || (a && a.toggleClass(this.params.navigation.hiddenClass), i && i.toggleClass(this.params.navigation.hiddenClass))
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function (e) {
                    return e
                },
                formatFractionTotal: function (e) {
                    return e
                },
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create: function () {
            var e = this;
            ee.extend(e, {
                pagination: {
                    init: B.init.bind(e),
                    render: B.render.bind(e),
                    update: B.update.bind(e),
                    destroy: B.destroy.bind(e),
                    dynamicBulletIndex: 0
                }
            })
        },
        on: {
            init: function () {
                this.pagination.init(), this.pagination.render(), this.pagination.update()
            }, activeIndexChange: function () {
                this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
            }, snapIndexChange: function () {
                this.params.loop || this.pagination.update()
            }, slidesLengthChange: function () {
                this.params.loop && (this.pagination.render(), this.pagination.update())
            }, snapGridLengthChange: function () {
                this.params.loop || (this.pagination.render(), this.pagination.update())
            }, destroy: function () {
                this.pagination.destroy()
            }, click: function (e) {
                var t = this;
                t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !L(e.target).hasClass(t.params.pagination.bulletClass) && t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)
            }
        }
    }, {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        },
        create: function () {
            var e = this;
            ee.extend(e, {
                scrollbar: {
                    init: X.init.bind(e),
                    destroy: X.destroy.bind(e),
                    updateSize: X.updateSize.bind(e),
                    setTranslate: X.setTranslate.bind(e),
                    setTransition: X.setTransition.bind(e),
                    enableDraggable: X.enableDraggable.bind(e),
                    disableDraggable: X.disableDraggable.bind(e),
                    setDragPosition: X.setDragPosition.bind(e),
                    onDragStart: X.onDragStart.bind(e),
                    onDragMove: X.onDragMove.bind(e),
                    onDragEnd: X.onDragEnd.bind(e),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            })
        },
        on: {
            init: function () {
                this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
            }, update: function () {
                this.scrollbar.updateSize()
            }, resize: function () {
                this.scrollbar.updateSize()
            }, observerUpdate: function () {
                this.scrollbar.updateSize()
            }, setTranslate: function () {
                this.scrollbar.setTranslate()
            }, setTransition: function (e) {
                this.scrollbar.setTransition(e)
            }, destroy: function () {
                this.scrollbar.destroy()
            }
        }
    }, {
        name: "parallax", params: {parallax: {enabled: !1}}, create: function () {
            ee.extend(this, {
                parallax: {
                    setTransform: Y.setTransform.bind(this),
                    setTranslate: Y.setTranslate.bind(this),
                    setTransition: Y.setTransition.bind(this)
                }
            })
        }, on: {
            beforeInit: function () {
                this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
            }, init: function () {
                this.params.parallax && this.parallax.setTranslate()
            }, setTranslate: function () {
                this.params.parallax && this.parallax.setTranslate()
            }, setTransition: function (e) {
                this.params.parallax && this.parallax.setTransition(e)
            }
        }
    }, {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create: function () {
            var i = this, t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0}
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (e) {
                t[e] = V[e].bind(i)
            }), ee.extend(i, {zoom: t});
            var s = 1;
            Object.defineProperty(i.zoom, "scale", {
                get: function () {
                    return s
                }, set: function (e) {
                    if (s !== e) {
                        var t = i.zoom.gesture.$imageEl ? i.zoom.gesture.$imageEl[0] : void 0,
                            a = i.zoom.gesture.$slideEl ? i.zoom.gesture.$slideEl[0] : void 0;
                        i.emit("zoomChange", e, t, a)
                    }
                    s = e
                }
            })
        },
        on: {
            init: function () {
                this.params.zoom.enabled && this.zoom.enable()
            }, destroy: function () {
                this.zoom.disable()
            }, touchStart: function (e) {
                this.zoom.enabled && this.zoom.onTouchStart(e)
            }, touchEnd: function (e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e)
            }, doubleTap: function (e) {
                this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
            }, transitionEnd: function () {
                this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create: function () {
            ee.extend(this, {
                lazy: {
                    initialImageLoaded: !1,
                    load: F.load.bind(this),
                    loadInSlide: F.loadInSlide.bind(this)
                }
            })
        },
        on: {
            beforeInit: function () {
                this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
            }, init: function () {
                this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
            }, scroll: function () {
                this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
            }, resize: function () {
                this.params.lazy.enabled && this.lazy.load()
            }, scrollbarDragMove: function () {
                this.params.lazy.enabled && this.lazy.load()
            }, transitionStart: function () {
                var e = this;
                e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
            }, transitionEnd: function () {
                this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
            }
        }
    }, {
        name: "controller", params: {controller: {control: void 0, inverse: !1, by: "slide"}}, create: function () {
            var e = this;
            ee.extend(e, {
                controller: {
                    control: e.params.controller.control,
                    getInterpolateFunction: R.getInterpolateFunction.bind(e),
                    setTranslate: R.setTranslate.bind(e),
                    setTransition: R.setTransition.bind(e)
                }
            })
        }, on: {
            update: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, resize: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, observerUpdate: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, setTranslate: function (e, t) {
                this.controller.control && this.controller.setTranslate(e, t)
            }, setTransition: function (e, t) {
                this.controller.control && this.controller.setTransition(e, t)
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create: function () {
            var t = this;
            ee.extend(t, {a11y: {liveRegion: L('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')}}), Object.keys(q).forEach(function (e) {
                t.a11y[e] = q[e].bind(t)
            })
        },
        on: {
            init: function () {
                this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
            }, toEdge: function () {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            }, fromEdge: function () {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            }, paginationUpdate: function () {
                this.params.a11y.enabled && this.a11y.updatePagination()
            }, destroy: function () {
                this.params.a11y.enabled && this.a11y.destroy()
            }
        }
    }, {
        name: "history", params: {history: {enabled: !1, replaceState: !1, key: "slides"}}, create: function () {
            var e = this;
            ee.extend(e, {
                history: {
                    init: W.init.bind(e),
                    setHistory: W.setHistory.bind(e),
                    setHistoryPopState: W.setHistoryPopState.bind(e),
                    scrollToSlide: W.scrollToSlide.bind(e),
                    destroy: W.destroy.bind(e)
                }
            })
        }, on: {
            init: function () {
                this.params.history.enabled && this.history.init()
            }, destroy: function () {
                this.params.history.enabled && this.history.destroy()
            }, transitionEnd: function () {
                this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
            }
        }
    }, {
        name: "hash-navigation",
        params: {hashNavigation: {enabled: !1, replaceState: !1, watchState: !1}},
        create: function () {
            var e = this;
            ee.extend(e, {
                hashNavigation: {
                    initialized: !1,
                    init: j.init.bind(e),
                    destroy: j.destroy.bind(e),
                    setHash: j.setHash.bind(e),
                    onHashCange: j.onHashCange.bind(e)
                }
            })
        },
        on: {
            init: function () {
                this.params.hashNavigation.enabled && this.hashNavigation.init()
            }, destroy: function () {
                this.params.hashNavigation.enabled && this.hashNavigation.destroy()
            }, transitionEnd: function () {
                this.hashNavigation.initialized && this.hashNavigation.setHash()
            }
        }
    }, {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1
            }
        },
        create: function () {
            var t = this;
            ee.extend(t, {
                autoplay: {
                    running: !1,
                    paused: !1,
                    run: U.run.bind(t),
                    start: U.start.bind(t),
                    stop: U.stop.bind(t),
                    pause: U.pause.bind(t),
                    onTransitionEnd: function (e) {
                        t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                    }
                }
            })
        },
        on: {
            init: function () {
                this.params.autoplay.enabled && this.autoplay.start()
            }, beforeTransitionStart: function (e, t) {
                this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
            }, sliderFirstMove: function () {
                this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
            }, destroy: function () {
                this.autoplay.running && this.autoplay.stop()
            }
        }
    }, {
        name: "effect-fade", params: {fadeEffect: {crossFade: !1}}, create: function () {
            ee.extend(this, {
                fadeEffect: {
                    setTranslate: K.setTranslate.bind(this),
                    setTransition: K.setTransition.bind(this)
                }
            })
        }, on: {
            beforeInit: function () {
                var e = this;
                if ("fade" === e.params.effect) {
                    e.classNames.push(e.params.containerModifierClass + "fade");
                    var t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    ee.extend(e.params, t), ee.extend(e.originalParams, t)
                }
            }, setTranslate: function () {
                "fade" === this.params.effect && this.fadeEffect.setTranslate()
            }, setTransition: function (e) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-cube",
        params: {cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}},
        create: function () {
            ee.extend(this, {
                cubeEffect: {
                    setTranslate: _.setTranslate.bind(this),
                    setTransition: _.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function () {
                var e = this;
                if ("cube" === e.params.effect) {
                    e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                    var t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    };
                    ee.extend(e.params, t), ee.extend(e.originalParams, t)
                }
            }, setTranslate: function () {
                "cube" === this.params.effect && this.cubeEffect.setTranslate()
            }, setTransition: function (e) {
                "cube" === this.params.effect && this.cubeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-flip", params: {flipEffect: {slideShadows: !0, limitRotation: !0}}, create: function () {
            ee.extend(this, {
                flipEffect: {
                    setTranslate: Z.setTranslate.bind(this),
                    setTransition: Z.setTransition.bind(this)
                }
            })
        }, on: {
            beforeInit: function () {
                var e = this;
                if ("flip" === e.params.effect) {
                    e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                    var t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    ee.extend(e.params, t), ee.extend(e.originalParams, t)
                }
            }, setTranslate: function () {
                "flip" === this.params.effect && this.flipEffect.setTranslate()
            }, setTransition: function (e) {
                "flip" === this.params.effect && this.flipEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-coverflow",
        params: {coverflowEffect: {rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0}},
        create: function () {
            ee.extend(this, {
                coverflowEffect: {
                    setTranslate: Q.setTranslate.bind(this),
                    setTransition: Q.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function () {
                var e = this;
                "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
            }, setTranslate: function () {
                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
            }, setTransition: function (e) {
                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
            }
        }
    }, {
        name: "thumbs",
        params: {
            thumbs: {
                swiper: null,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-container-thumbs"
            }
        },
        create: function () {
            ee.extend(this, {
                thumbs: {
                    swiper: null,
                    init: ae.init.bind(this),
                    update: ae.update.bind(this),
                    onThumbClick: ae.onThumbClick.bind(this)
                }
            })
        },
        on: {
            beforeInit: function () {
                var e = this.params.thumbs;
                e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
            }, slideChange: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, update: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, resize: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, observerUpdate: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, setTransition: function (e) {
                var t = this.thumbs.swiper;
                t && t.setTransition(e)
            }, beforeDestroy: function () {
                var e = this.thumbs.swiper;
                e && this.thumbs.swiperCreated && e && e.destroy()
            }
        }
    }];
    return void 0 === S.use && (S.use = S.Class.use, S.installModule = S.Class.installModule), S.use(ie), S
});
/*! elementor - v2.7.2 - 16-09-2019 */
!function (e) {
    var t = {};

    function __webpack_require__(n) {
        if (t[n]) return t[n].exports;
        var i = t[n] = {i: n, l: !1, exports: {}};
        return e[n].call(i.exports, i, i.exports, __webpack_require__), i.l = !0, i.exports
    }

    __webpack_require__.m = e, __webpack_require__.c = t, __webpack_require__.d = function (e, t, n) {
        __webpack_require__.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, __webpack_require__.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, __webpack_require__.t = function (e, t) {
        if (1 & t && (e = __webpack_require__(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (__webpack_require__.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var i in e) __webpack_require__.d(n, i, function (t) {
            return e[t]
        }.bind(null, i));
        return n
    }, __webpack_require__.n = function (e) {
        var t = e && e.__esModule ? function getDefault() {
            return e.default
        } : function getModuleExports() {
            return e
        };
        return __webpack_require__.d(t, "a", t), t
    }, __webpack_require__.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 479)
}([function (e, t) {
    e.exports = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {default: e}
    }
}, function (e, t) {
    var n = e.exports = {version: "2.6.9"};
    "number" == typeof __e && (__e = n)
}, function (e, t, n) {
    e.exports = n(107)
}, function (e, t, n) {
    var i = n(128), r = n(79);

    function _getPrototypeOf(t) {
        return e.exports = _getPrototypeOf = r ? i : function _getPrototypeOf(e) {
            return e.__proto__ || i(e)
        }, _getPrototypeOf(t)
    }

    e.exports = _getPrototypeOf
}, function (e, t) {
    e.exports = function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function (e, t, n) {
    var i = n(2);

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), i(e, r.key, r)
        }
    }

    e.exports = function _createClass(e, t, n) {
        return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
    }
}, function (e, t, n) {
    var i = n(65), r = n(81);
    e.exports = function _possibleConstructorReturn(e, t) {
        return !t || "object" !== i(t) && "function" != typeof t ? r(e) : t
    }
}, function (e, t, n) {
    var i = n(96), r = n(136);
    e.exports = function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = i(t && t.prototype, {constructor: {value: e, writable: !0, configurable: !0}}), t && r(e, t)
    }
}, function (e, t, n) {
    var i = n(10), r = n(1), o = n(68), a = n(23), s = n(12), l = function (e, t, n) {
        var u, c, d, f = e & l.F, p = e & l.G, h = e & l.S, g = e & l.P, v = e & l.B, m = e & l.W,
            y = p ? r : r[t] || (r[t] = {}), b = y.prototype, _ = p ? i : h ? i[t] : (i[t] || {}).prototype;
        for (u in p && (n = t), n) (c = !f && _ && void 0 !== _[u]) && s(y, u) || (d = c ? _[u] : n[u], y[u] = p && "function" != typeof _[u] ? n[u] : v && c ? o(d, i) : m && _[u] == d ? function (e) {
            var t = function (t, n, i) {
                if (this instanceof e) {
                    switch (arguments.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t);
                        case 2:
                            return new e(t, n)
                    }
                    return new e(t, n, i)
                }
                return e.apply(this, arguments)
            };
            return t.prototype = e.prototype, t
        }(d) : g && "function" == typeof d ? o(Function.call, d) : d, g && ((y.virtual || (y.virtual = {}))[u] = d, e & l.R && b && !b[u] && a(b, u, d)))
    };
    l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
}, function (e, t, n) {
    var i = n(45)("wks"), r = n(46), o = n(11).Symbol, a = "function" == typeof o;
    (e.exports = function (e) {
        return i[e] || (i[e] = a && o[e] || (a ? o : r)("Symbol." + e))
    }).store = i
}, function (e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function (e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
        return n.call(e, t)
    }
}, function (e, t, n) {
    e.exports = !n(25)(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (e, t, n) {
    var i = n(18), r = n(74), o = n(49), a = Object.defineProperty;
    t.f = n(13) ? Object.defineProperty : function defineProperty(e, t, n) {
        if (i(e), t = o(t, !0), i(n), r) try {
            return a(e, t, n)
        } catch (e) {
        }
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e
    }
}, function (e, t, n) {
    var i = n(94), r = n(39);
    e.exports = function (e) {
        return i(r(e))
    }
}, function (e, t, n) {
    var i = n(53)("wks"), r = n(35), o = n(10).Symbol, a = "function" == typeof o;
    (e.exports = function (e) {
        return i[e] || (i[e] = a && o[e] || (a ? o : r)("Symbol." + e))
    }).store = i
}, function (e, t) {
    e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function (e, t, n) {
    var i = n(17);
    e.exports = function (e) {
        if (!i(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function (e, t, n) {
    var i = n(22);
    e.exports = function (e) {
        if (!i(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function (e, t, n) {
    e.exports = !n(24)(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (e, t, n) {
    var i = n(36), r = n(67);
    e.exports = n(20) ? function (e, t, n) {
        return i.f(e, t, r(1, n))
    } : function (e, t, n) {
        return e[t] = n, e
    }
}, function (e, t) {
    e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function (e, t, n) {
    var i = n(14), r = n(30);
    e.exports = n(13) ? function (e, t, n) {
        return i.f(e, t, r(1, n))
    } : function (e, t, n) {
        return e[t] = n, e
    }
}, function (e, t) {
    e.exports = function (e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function (e, t) {
    e.exports = function (e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function (e, t, n) {
    "use strict";
    var i = n(37), r = n(100)(5), o = !0;
    "find" in [] && Array(1).find(function () {
        o = !1
    }), i(i.P + i.F * o, "Array", {
        find: function find(e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(73)("find")
}, function (e, t, n) {
    var i = n(11), r = n(21), o = n(47), a = n(46)("src"), s = n(87), l = ("" + s).split("toString");
    n(33).inspectSource = function (e) {
        return s.call(e)
    }, (e.exports = function (e, t, n, s) {
        var u = "function" == typeof n;
        u && (o(n, "name") || r(n, "name", t)), e[t] !== n && (u && (o(n, a) || r(n, a, e[t] ? "" + e[t] : l.join(String(t)))), e === i ? e[t] = n : s ? e[t] ? e[t] = n : r(e, t, n) : (delete e[t], r(e, t, n)))
    })(Function.prototype, "toString", function toString() {
        return "function" == typeof this && this[a] || s.call(this)
    })
}, function (e, t, n) {
    var i = n(78), r = n(54);
    e.exports = Object.keys || function keys(e) {
        return i(e, r)
    }
}, function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
        return n.call(e).slice(8, -1)
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
    }
}, function (e, t, n) {
    var i = n(39);
    e.exports = function (e) {
        return Object(i(e))
    }
}, function (e, t) {
    e.exports = function (e) {
        if (null == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function (e, t) {
    var n = e.exports = {version: "2.6.9"};
    "number" == typeof __e && (__e = n)
}, function (e, t) {
    e.exports = !0
}, function (e, t) {
    var n = 0, i = Math.random();
    e.exports = function (e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36))
    }
}, function (e, t, n) {
    var i = n(19), r = n(84), o = n(82), a = Object.defineProperty;
    t.f = n(20) ? Object.defineProperty : function defineProperty(e, t, n) {
        if (i(e), t = o(t, !0), i(n), r) try {
            return a(e, t, n)
        } catch (e) {
        }
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e
    }
}, function (e, t, n) {
    var i = n(11), r = n(33), o = n(21), a = n(27), s = n(60), l = function (e, t, n) {
        var u, c, d, f, p = e & l.F, h = e & l.G, g = e & l.S, v = e & l.P, m = e & l.B,
            y = h ? i : g ? i[t] || (i[t] = {}) : (i[t] || {}).prototype, b = h ? r : r[t] || (r[t] = {}),
            _ = b.prototype || (b.prototype = {});
        for (u in h && (n = t), n) d = ((c = !p && y && void 0 !== y[u]) ? y : n)[u], f = m && c ? s(d, i) : v && "function" == typeof d ? s(Function.call, d) : d, y && a(y, u, d, e & l.U), b[u] != d && o(b, u, f), v && _[u] != d && (_[u] = d)
    };
    i.core = r, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
}, function (e, t, n) {
    var i = n(41), r = n(30), o = n(15), a = n(49), s = n(12), l = n(74), u = Object.getOwnPropertyDescriptor;
    t.f = n(13) ? u : function getOwnPropertyDescriptor(e, t) {
        if (e = o(e), t = a(t, !0), l) try {
            return u(e, t)
        } catch (e) {
        }
        if (s(e, t)) return r(!i.f.call(e, t), e[t])
    }
}, function (e, t) {
    e.exports = function (e) {
        if (null == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function (e, t) {
    e.exports = {}
}, function (e, t) {
    t.f = {}.propertyIsEnumerable
}, function (e, t, n) {
    var i = n(43), r = Math.min;
    e.exports = function (e) {
        return e > 0 ? r(i(e), 9007199254740991) : 0
    }
}, function (e, t) {
    var n = Math.ceil, i = Math.floor;
    e.exports = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? i : n)(e)
    }
}, function (e, t, n) {
    var i = n(141), r = n(148), o = (n(3), n(151));

    function _get(t, n, a) {
        return "undefined" != typeof Reflect && r ? e.exports = _get = r : e.exports = _get = function _get(e, t, n) {
            var r = o(e, t);
            if (r) {
                var a = i(r, t);
                return a.get ? a.get.call(n) : a.value
            }
        }, _get(t, n, a || t)
    }

    e.exports = _get
}, function (e, t, n) {
    var i = n(33), r = n(11), o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    (e.exports = function (e, t) {
        return o[e] || (o[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: i.version,
        mode: n(71) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function (e, t) {
    var n = 0, i = Math.random();
    e.exports = function (e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36))
    }
}, function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
        return n.call(e, t)
    }
}, , function (e, t, n) {
    var i = n(17);
    e.exports = function (e, t) {
        if (!i(e)) return e;
        var n, r;
        if (t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
        if ("function" == typeof (n = e.valueOf) && !i(r = n.call(e))) return r;
        if (!t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (e, t) {
    var n = Math.ceil, i = Math.floor;
    e.exports = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? i : n)(e)
    }
}, function (e, t, n) {
    var i = n(18), r = n(101), o = n(54), a = n(52)("IE_PROTO"), s = function () {
    }, l = function () {
        var e, t = n(75)("iframe"), i = o.length;
        for (t.style.display = "none", n(116).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; i--;) delete l.prototype[o[i]];
        return l()
    };
    e.exports = Object.create || function create(e, t) {
        var n;
        return null !== e ? (s.prototype = i(e), n = new s, s.prototype = null, n[a] = e) : n = l(), void 0 === t ? n : r(n, t)
    }
}, function (e, t, n) {
    var i = n(53)("keys"), r = n(35);
    e.exports = function (e) {
        return i[e] || (i[e] = r(e))
    }
}, function (e, t, n) {
    var i = n(1), r = n(10), o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    (e.exports = function (e, t) {
        return o[e] || (o[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: i.version,
        mode: n(34) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function (e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (e, t, n) {
    var i = n(14).f, r = n(12), o = n(16)("toStringTag");
    e.exports = function (e, t, n) {
        e && !r(e = n ? e : e.prototype, o) && i(e, o, {configurable: !0, value: t})
    }
}, function (e, t, n) {
    t.f = n(16)
}, function (e, t, n) {
    var i = n(10), r = n(1), o = n(34), a = n(56), s = n(14).f;
    e.exports = function (e) {
        var t = r.Symbol || (r.Symbol = o ? {} : i.Symbol || {});
        "_" == e.charAt(0) || e in t || s(t, e, {value: a.f(e)})
    }
}, function (e, t, n) {
    e.exports = n(152)
}, function (e, t, n) {
    var i = n(12), r = n(31), o = n(52)("IE_PROTO"), a = Object.prototype;
    e.exports = Object.getPrototypeOf || function (e) {
        return e = r(e), i(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
    }
}, function (e, t, n) {
    var i = n(61);
    e.exports = function (e, t, n) {
        if (i(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function (n) {
                    return e.call(t, n)
                };
            case 2:
                return function (n, i) {
                    return e.call(t, n, i)
                };
            case 3:
                return function (n, i, r) {
                    return e.call(t, n, i, r)
                }
        }
        return function () {
            return e.apply(t, arguments)
        }
    }
}, function (e, t) {
    e.exports = function (e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function (e, t, n) {
    var i = n(32);
    e.exports = function (e) {
        return Object(i(e))
    }
}, function (e, t, n) {
    var i = n(8), r = n(1), o = n(25);
    e.exports = function (e, t) {
        var n = (r.Object || {})[e] || Object[e], a = {};
        a[e] = t(n), i(i.S + i.F * o(function () {
            n(1)
        }), "Object", a)
    }
}, function (e, t) {
    t.f = Object.getOwnPropertySymbols
}, function (e, t, n) {
    var i = n(110), r = n(120);

    function _typeof2(e) {
        return (_typeof2 = "function" == typeof r && "symbol" == typeof i ? function _typeof2(e) {
            return typeof e
        } : function _typeof2(e) {
            return e && "function" == typeof r && e.constructor === r && e !== r.prototype ? "symbol" : typeof e
        })(e)
    }

    function _typeof(t) {
        return "function" == typeof r && "symbol" === _typeof2(i) ? e.exports = _typeof = function _typeof(e) {
            return _typeof2(e)
        } : e.exports = _typeof = function _typeof(e) {
            return e && "function" == typeof r && e.constructor === r && e !== r.prototype ? "symbol" : _typeof2(e)
        }, _typeof(t)
    }

    e.exports = _typeof
}, function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
        return n.call(e).slice(8, -1)
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
    }
}, function (e, t, n) {
    var i = n(109);
    e.exports = function (e, t, n) {
        if (i(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function (n) {
                    return e.call(t, n)
                };
            case 2:
                return function (n, i) {
                    return e.call(t, n, i)
                };
            case 3:
                return function (n, i, r) {
                    return e.call(t, n, i, r)
                }
        }
        return function () {
            return e.apply(t, arguments)
        }
    }
}, function (e, t, n) {
    var i = n(78), r = n(54).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function getOwnPropertyNames(e) {
        return i(e, r)
    }
}, function (e, t, n) {
    var i = n(22), r = n(11).document, o = i(r) && i(r.createElement);
    e.exports = function (e) {
        return o ? r.createElement(e) : {}
    }
}, function (e, t) {
    e.exports = !1
}, function (e, t, n) {
    "use strict";
    var i, r, o = n(99), a = RegExp.prototype.exec, s = String.prototype.replace, l = a,
        u = (i = /a/, r = /b*/g, a.call(i, "a"), a.call(r, "a"), 0 !== i.lastIndex || 0 !== r.lastIndex),
        c = void 0 !== /()??/.exec("")[1];
    (u || c) && (l = function exec(e) {
        var t, n, i, r, l = this;
        return c && (n = new RegExp("^" + l.source + "$(?!\\s)", o.call(l))), u && (t = l.lastIndex), i = a.call(l, e), u && i && (l.lastIndex = l.global ? i.index + i[0].length : t), c && i && i.length > 1 && s.call(i[0], n, function () {
            for (r = 1; r < arguments.length - 2; r++) void 0 === arguments[r] && (i[r] = void 0)
        }), i
    }), e.exports = l
}, function (e, t, n) {
    var i = n(9)("unscopables"), r = Array.prototype;
    null == r[i] && n(21)(r, i, {}), e.exports = function (e) {
        r[i][e] = !0
    }
}, function (e, t, n) {
    e.exports = !n(13) && !n(25)(function () {
        return 7 != Object.defineProperty(n(75)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (e, t, n) {
    var i = n(17), r = n(10).document, o = i(r) && i(r.createElement);
    e.exports = function (e) {
        return o ? r.createElement(e) : {}
    }
}, function (e, t, n) {
    "use strict";
    var i = n(34), r = n(8), o = n(77), a = n(23), s = n(40), l = n(113), u = n(55), c = n(59), d = n(16)("iterator"),
        f = !([].keys && "next" in [].keys()), p = function () {
            return this
        };
    e.exports = function (e, t, n, h, g, v, m) {
        l(n, t, h);
        var y, b, _, S = function (e) {
                if (!f && e in E) return E[e];
                switch (e) {
                    case"keys":
                        return function keys() {
                            return new n(this, e)
                        };
                    case"values":
                        return function values() {
                            return new n(this, e)
                        }
                }
                return function entries() {
                    return new n(this, e)
                }
            }, w = t + " Iterator", k = "values" == g, x = !1, E = e.prototype, C = E[d] || E["@@iterator"] || g && E[g],
            O = C || S(g), M = g ? k ? S("entries") : O : void 0, D = "Array" == t && E.entries || C;
        if (D && (_ = c(D.call(new e))) !== Object.prototype && _.next && (u(_, w, !0), i || "function" == typeof _[d] || a(_, d, p)), k && C && "values" !== C.name && (x = !0, O = function values() {
            return C.call(this)
        }), i && !m || !f && !x && E[d] || a(E, d, O), s[t] = O, s[w] = p, g) if (y = {
            values: k ? O : S("values"),
            keys: v ? O : S("keys"),
            entries: M
        }, m) for (b in y) b in E || o(E, b, y[b]); else r(r.P + r.F * (f || x), t, y);
        return y
    }
}, function (e, t, n) {
    e.exports = n(23)
}, function (e, t, n) {
    var i = n(12), r = n(15), o = n(114)(!1), a = n(52)("IE_PROTO");
    e.exports = function (e, t) {
        var n, s = r(e), l = 0, u = [];
        for (n in s) n != a && i(s, n) && u.push(n);
        for (; t.length > l;) i(s, n = t[l++]) && (~o(u, n) || u.push(n));
        return u
    }
}, function (e, t, n) {
    e.exports = n(131)
}, function (e, t, n) {
    "use strict";
    var i = n(19), r = n(62), o = n(42), a = n(43), s = n(92), l = n(85), u = Math.max, c = Math.min, d = Math.floor,
        f = /\$([$&`']|\d\d?|<[^>]*>)/g, p = /\$([$&`']|\d\d?)/g;
    n(86)("replace", 2, function (e, t, n, h) {
        return [function replace(i, r) {
            var o = e(this), a = null == i ? void 0 : i[t];
            return void 0 !== a ? a.call(i, o, r) : n.call(String(o), i, r)
        }, function (e, t) {
            var r = h(n, e, this, t);
            if (r.done) return r.value;
            var d = i(e), f = String(this), p = "function" == typeof t;
            p || (t = String(t));
            var g = d.global;
            if (g) {
                var v = d.unicode;
                d.lastIndex = 0
            }
            for (var m = []; ;) {
                var y = l(d, f);
                if (null === y) break;
                if (m.push(y), !g) break;
                "" === String(y[0]) && (d.lastIndex = s(f, o(d.lastIndex), v))
            }
            for (var b, _ = "", S = 0, w = 0; w < m.length; w++) {
                y = m[w];
                for (var k = String(y[0]), x = u(c(a(y.index), f.length), 0), E = [], C = 1; C < y.length; C++) E.push(void 0 === (b = y[C]) ? b : String(b));
                var O = y.groups;
                if (p) {
                    var M = [k].concat(E, x, f);
                    void 0 !== O && M.push(O);
                    var D = String(t.apply(void 0, M))
                } else D = getSubstitution(k, f, x, E, O, t);
                x >= S && (_ += f.slice(S, x) + D, S = x + k.length)
            }
            return _ + f.slice(S)
        }];

        function getSubstitution(e, t, i, o, a, s) {
            var l = i + e.length, u = o.length, c = p;
            return void 0 !== a && (a = r(a), c = f), n.call(s, c, function (n, r) {
                var s;
                switch (r.charAt(0)) {
                    case"$":
                        return "$";
                    case"&":
                        return e;
                    case"`":
                        return t.slice(0, i);
                    case"'":
                        return t.slice(l);
                    case"<":
                        s = a[r.slice(1, -1)];
                        break;
                    default:
                        var c = +r;
                        if (0 === c) return n;
                        if (c > u) {
                            var f = d(c / 10);
                            return 0 === f ? n : f <= u ? void 0 === o[f - 1] ? r.charAt(1) : o[f - 1] + r.charAt(1) : n
                        }
                        s = o[c - 1]
                }
                return void 0 === s ? "" : s
            })
        }
    })
}, function (e, t) {
    e.exports = function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
}, function (e, t, n) {
    var i = n(22);
    e.exports = function (e, t) {
        if (!i(e)) return e;
        var n, r;
        if (t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
        if ("function" == typeof (n = e.valueOf) && !i(r = n.call(e))) return r;
        if (!t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (e, t, n) {
    var i = n(29);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
        return "String" == i(e) ? e.split("") : Object(e)
    }
}, function (e, t, n) {
    e.exports = !n(20) && !n(24)(function () {
        return 7 != Object.defineProperty(n(70)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (e, t, n) {
    "use strict";
    var i = n(93), r = RegExp.prototype.exec;
    e.exports = function (e, t) {
        var n = e.exec;
        if ("function" == typeof n) {
            var o = n.call(e, t);
            if ("object" != typeof o) throw new TypeError("RegExp exec method returned something other than an Object or null");
            return o
        }
        if ("RegExp" !== i(e)) throw new TypeError("RegExp#exec called on incompatible receiver");
        return r.call(e, t)
    }
}, function (e, t, n) {
    "use strict";
    n(145);
    var i = n(27), r = n(21), o = n(24), a = n(32), s = n(9), l = n(72), u = s("species"), c = !o(function () {
        var e = /./;
        return e.exec = function () {
            var e = [];
            return e.groups = {a: "7"}, e
        }, "7" !== "".replace(e, "$<a>")
    }), d = function () {
        var e = /(?:)/, t = e.exec;
        e.exec = function () {
            return t.apply(this, arguments)
        };
        var n = "ab".split(e);
        return 2 === n.length && "a" === n[0] && "b" === n[1]
    }();
    e.exports = function (e, t, n) {
        var f = s(e), p = !o(function () {
            var t = {};
            return t[f] = function () {
                return 7
            }, 7 != ""[e](t)
        }), h = p ? !o(function () {
            var t = !1, n = /a/;
            return n.exec = function () {
                return t = !0, null
            }, "split" === e && (n.constructor = {}, n.constructor[u] = function () {
                return n
            }), n[f](""), !t
        }) : void 0;
        if (!p || !h || "replace" === e && !c || "split" === e && !d) {
            var g = /./[f], v = n(a, f, ""[e], function maybeCallNative(e, t, n, i, r) {
                return t.exec === l ? p && !r ? {done: !0, value: g.call(t, n, i)} : {
                    done: !0,
                    value: e.call(n, t, i)
                } : {done: !1}
            }), m = v[0], y = v[1];
            i(String.prototype, e, m), r(RegExp.prototype, f, 2 == t ? function (e, t) {
                return y.call(e, this, t)
            } : function (e) {
                return y.call(e, this)
            })
        }
    }
}, function (e, t, n) {
    e.exports = n(45)("native-function-to-string", Function.toString)
}, function (e, t, n) {
    "use strict";
    var i = n(112)(!0);
    n(76)(String, "String", function (e) {
        this._t = String(e), this._i = 0
    }, function () {
        var e, t = this._t, n = this._i;
        return n >= t.length ? {value: void 0, done: !0} : (e = i(t, n), this._i += e.length, {value: e, done: !1})
    })
}, function (e, t, n) {
    "use strict";
    var i = n(139), r = n(19), o = n(156), a = n(92), s = n(42), l = n(85), u = n(72), c = n(24), d = Math.min,
        f = [].push, p = !c(function () {
            RegExp(4294967295, "y")
        });
    n(86)("split", 2, function (e, t, n, c) {
        var h;
        return h = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (e, t) {
            var r = String(this);
            if (void 0 === e && 0 === t) return [];
            if (!i(e)) return n.call(r, e, t);
            for (var o, a, s, l = [], c = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), d = 0, p = void 0 === t ? 4294967295 : t >>> 0, h = new RegExp(e.source, c + "g"); (o = u.call(h, r)) && !((a = h.lastIndex) > d && (l.push(r.slice(d, o.index)), o.length > 1 && o.index < r.length && f.apply(l, o.slice(1)), s = o[0].length, d = a, l.length >= p));) h.lastIndex === o.index && h.lastIndex++;
            return d === r.length ? !s && h.test("") || l.push("") : l.push(r.slice(d)), l.length > p ? l.slice(0, p) : l
        } : "0".split(void 0, 0).length ? function (e, t) {
            return void 0 === e && 0 === t ? [] : n.call(this, e, t)
        } : n, [function split(n, i) {
            var r = e(this), o = null == n ? void 0 : n[t];
            return void 0 !== o ? o.call(n, r, i) : h.call(String(r), n, i)
        }, function (e, t) {
            var i = c(h, e, this, t, h !== n);
            if (i.done) return i.value;
            var u = r(e), f = String(this), g = o(u, RegExp), v = u.unicode,
                m = (u.ignoreCase ? "i" : "") + (u.multiline ? "m" : "") + (u.unicode ? "u" : "") + (p ? "y" : "g"),
                y = new g(p ? u : "^(?:" + u.source + ")", m), b = void 0 === t ? 4294967295 : t >>> 0;
            if (0 === b) return [];
            if (0 === f.length) return null === l(y, f) ? [f] : [];
            for (var _ = 0, S = 0, w = []; S < f.length;) {
                y.lastIndex = p ? S : 0;
                var k, x = l(y, p ? f : f.slice(S));
                if (null === x || (k = d(s(y.lastIndex + (p ? 0 : S)), f.length)) === _) S = a(f, S, v); else {
                    if (w.push(f.slice(_, S)), w.length === b) return w;
                    for (var E = 1; E <= x.length - 1; E++) if (w.push(x[E]), w.length === b) return w;
                    S = _ = k
                }
            }
            return w.push(f.slice(_)), w
        }]
    })
}, function (e, t, n) {
    n(117);
    for (var i = n(10), r = n(23), o = n(40), a = n(16)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < s.length; l++) {
        var u = s[l], c = i[u], d = c && c.prototype;
        d && !d[a] && r(d, a, u), o[u] = o.Array
    }
}, function (e, t, n) {
    var i = n(83), r = n(32);
    e.exports = function (e) {
        return i(r(e))
    }
}, function (e, t, n) {
    "use strict";
    var i = n(144)(!0);
    e.exports = function (e, t, n) {
        return t + (n ? i(e, t).length : 1)
    }
}, function (e, t, n) {
    var i = n(29), r = n(9)("toStringTag"), o = "Arguments" == i(function () {
        return arguments
    }());
    e.exports = function (e) {
        var t, n, a;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
            try {
                return e[t]
            } catch (e) {
            }
        }(t = Object(e), r)) ? n : o ? i(t) : "Object" == (a = i(t)) && "function" == typeof t.callee ? "Arguments" : a
    }
}, function (e, t, n) {
    var i = n(66);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
        return "String" == i(e) ? e.split("") : Object(e)
    }
}, function (e, t, n) {
    var i = n(66);
    e.exports = Array.isArray || function isArray(e) {
        return "Array" == i(e)
    }
}, function (e, t, n) {
    e.exports = n(134)
}, , function (e, t, n) {
    "use strict";
    var i = n(19), r = n(42), o = n(92), a = n(85);
    n(86)("match", 1, function (e, t, n, s) {
        return [function match(n) {
            var i = e(this), r = null == n ? void 0 : n[t];
            return void 0 !== r ? r.call(n, i) : new RegExp(n)[t](String(i))
        }, function (e) {
            var t = s(n, e, this);
            if (t.done) return t.value;
            var l = i(e), u = String(this);
            if (!l.global) return a(l, u);
            var c = l.unicode;
            l.lastIndex = 0;
            for (var d, f = [], p = 0; null !== (d = a(l, u));) {
                var h = String(d[0]);
                f[p] = h, "" === h && (l.lastIndex = o(u, r(l.lastIndex), c)), p++
            }
            return 0 === p ? null : f
        }]
    })
}, function (e, t, n) {
    "use strict";
    var i = n(19);
    e.exports = function () {
        var e = i(this), t = "";
        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
    }
}, function (e, t, n) {
    var i = n(60), r = n(83), o = n(62), a = n(42), s = n(104);
    e.exports = function (e, t) {
        var n = 1 == e, l = 2 == e, u = 3 == e, c = 4 == e, d = 6 == e, f = 5 == e || d, p = t || s;
        return function (t, s, h) {
            for (var g, v, m = o(t), y = r(m), b = i(s, h, 3), _ = a(y.length), S = 0, w = n ? p(t, _) : l ? p(t, 0) : void 0; _ > S; S++) if ((f || S in y) && (v = b(g = y[S], S, m), e)) if (n) w[S] = v; else if (v) switch (e) {
                case 3:
                    return !0;
                case 5:
                    return g;
                case 6:
                    return S;
                case 2:
                    w.push(g)
            } else if (c) return !1;
            return d ? -1 : u || c ? c : w
        }
    }
}, function (e, t, n) {
    var i = n(14), r = n(18), o = n(28);
    e.exports = n(13) ? Object.defineProperties : function defineProperties(e, t) {
        r(e);
        for (var n, a = o(t), s = a.length, l = 0; s > l;) i.f(e, n = a[l++], t[n]);
        return e
    }
}, function (e, t, n) {
    var i = n(50), r = Math.min;
    e.exports = function (e) {
        return e > 0 ? r(i(e), 9007199254740991) : 0
    }
}, function (e, t, n) {
    "use strict";
    var i = n(10), r = n(12), o = n(13), a = n(8), s = n(77), l = n(122).KEY, u = n(25), c = n(53), d = n(55),
        f = n(35), p = n(16), h = n(56), g = n(57), v = n(123), m = n(95), y = n(18), b = n(17), _ = n(31), S = n(15),
        w = n(49), k = n(30), x = n(51), E = n(124), C = n(38), O = n(64), M = n(14), D = n(28), $ = C.f, T = M.f,
        A = E.f, I = i.Symbol, P = i.JSON, j = P && P.stringify, V = p("_hidden"), F = p("toPrimitive"),
        L = {}.propertyIsEnumerable, H = c("symbol-registry"), R = c("symbols"), B = c("op-symbols"),
        Q = Object.prototype, N = "function" == typeof I && !!O.f, G = i.QObject,
        z = !G || !G.prototype || !G.prototype.findChild, U = o && u(function () {
            return 7 != x(T({}, "a", {
                get: function () {
                    return T(this, "a", {value: 7}).a
                }
            })).a
        }) ? function (e, t, n) {
            var i = $(Q, t);
            i && delete Q[t], T(e, t, n), i && e !== Q && T(Q, t, i)
        } : T, W = function (e) {
            var t = R[e] = x(I.prototype);
            return t._k = e, t
        }, q = N && "symbol" == typeof I.iterator ? function (e) {
            return "symbol" == typeof e
        } : function (e) {
            return e instanceof I
        }, Y = function defineProperty(e, t, n) {
            return e === Q && Y(B, t, n), y(e), t = w(t, !0), y(n), r(R, t) ? (n.enumerable ? (r(e, V) && e[V][t] && (e[V][t] = !1), n = x(n, {enumerable: k(0, !1)})) : (r(e, V) || T(e, V, k(1, {})), e[V][t] = !0), U(e, t, n)) : T(e, t, n)
        }, J = function defineProperties(e, t) {
            y(e);
            for (var n, i = v(t = S(t)), r = 0, o = i.length; o > r;) Y(e, n = i[r++], t[n]);
            return e
        }, K = function propertyIsEnumerable(e) {
            var t = L.call(this, e = w(e, !0));
            return !(this === Q && r(R, e) && !r(B, e)) && (!(t || !r(this, e) || !r(R, e) || r(this, V) && this[V][e]) || t)
        }, X = function getOwnPropertyDescriptor(e, t) {
            if (e = S(e), t = w(t, !0), e !== Q || !r(R, t) || r(B, t)) {
                var n = $(e, t);
                return !n || !r(R, t) || r(e, V) && e[V][t] || (n.enumerable = !0), n
            }
        }, Z = function getOwnPropertyNames(e) {
            for (var t, n = A(S(e)), i = [], o = 0; n.length > o;) r(R, t = n[o++]) || t == V || t == l || i.push(t);
            return i
        }, ee = function getOwnPropertySymbols(e) {
            for (var t, n = e === Q, i = A(n ? B : S(e)), o = [], a = 0; i.length > a;) !r(R, t = i[a++]) || n && !r(Q, t) || o.push(R[t]);
            return o
        };
    N || (s((I = function Symbol() {
        if (this instanceof I) throw TypeError("Symbol is not a constructor!");
        var e = f(arguments.length > 0 ? arguments[0] : void 0), t = function (n) {
            this === Q && t.call(B, n), r(this, V) && r(this[V], e) && (this[V][e] = !1), U(this, e, k(1, n))
        };
        return o && z && U(Q, e, {configurable: !0, set: t}), W(e)
    }).prototype, "toString", function toString() {
        return this._k
    }), C.f = X, M.f = Y, n(69).f = E.f = Z, n(41).f = K, O.f = ee, o && !n(34) && s(Q, "propertyIsEnumerable", K, !0), h.f = function (e) {
        return W(p(e))
    }), a(a.G + a.W + a.F * !N, {Symbol: I});
    for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;) p(te[ne++]);
    for (var ie = D(p.store), re = 0; ie.length > re;) g(ie[re++]);
    a(a.S + a.F * !N, "Symbol", {
        for: function (e) {
            return r(H, e += "") ? H[e] : H[e] = I(e)
        }, keyFor: function keyFor(e) {
            if (!q(e)) throw TypeError(e + " is not a symbol!");
            for (var t in H) if (H[t] === e) return t
        }, useSetter: function () {
            z = !0
        }, useSimple: function () {
            z = !1
        }
    }), a(a.S + a.F * !N, "Object", {
        create: function create(e, t) {
            return void 0 === t ? x(e) : J(x(e), t)
        },
        defineProperty: Y,
        defineProperties: J,
        getOwnPropertyDescriptor: X,
        getOwnPropertyNames: Z,
        getOwnPropertySymbols: ee
    });
    var oe = u(function () {
        O.f(1)
    });
    a(a.S + a.F * oe, "Object", {
        getOwnPropertySymbols: function getOwnPropertySymbols(e) {
            return O.f(_(e))
        }
    }), P && a(a.S + a.F * (!N || u(function () {
        var e = I();
        return "[null]" != j([e]) || "{}" != j({a: e}) || "{}" != j(Object(e))
    })), "JSON", {
        stringify: function stringify(e) {
            for (var t, n, i = [e], r = 1; arguments.length > r;) i.push(arguments[r++]);
            if (n = t = i[1], (b(t) || void 0 !== e) && !q(e)) return m(t) || (t = function (e, t) {
                if ("function" == typeof n && (t = n.call(this, e, t)), !q(t)) return t
            }), i[1] = t, j.apply(P, i)
        }
    }), I.prototype[F] || n(23)(I.prototype, F, I.prototype.valueOf), d(I, "Symbol"), d(Math, "Math", !0), d(i.JSON, "JSON", !0)
}, function (e, t, n) {
    var i = n(105);
    e.exports = function (e, t) {
        return new (i(e))(t)
    }
}, function (e, t, n) {
    var i = n(22), r = n(106), o = n(9)("species");
    e.exports = function (e) {
        var t;
        return r(e) && ("function" != typeof (t = e.constructor) || t !== Array && !r(t.prototype) || (t = void 0), i(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t
    }
}, function (e, t, n) {
    var i = n(29);
    e.exports = Array.isArray || function isArray(e) {
        return "Array" == i(e)
    }
}, function (e, t, n) {
    n(108);
    var i = n(1).Object;
    e.exports = function defineProperty(e, t, n) {
        return i.defineProperty(e, t, n)
    }
}, function (e, t, n) {
    var i = n(8);
    i(i.S + i.F * !n(13), "Object", {defineProperty: n(14).f})
}, function (e, t) {
    e.exports = function (e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function (e, t, n) {
    e.exports = n(111)
}, function (e, t, n) {
    n(88), n(90), e.exports = n(56).f("iterator")
}, function (e, t, n) {
    var i = n(50), r = n(39);
    e.exports = function (e) {
        return function (t, n) {
            var o, a, s = String(r(t)), l = i(n), u = s.length;
            return l < 0 || l >= u ? e ? "" : void 0 : (o = s.charCodeAt(l)) < 55296 || o > 56319 || l + 1 === u || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? s.charAt(l) : o : e ? s.slice(l, l + 2) : a - 56320 + (o - 55296 << 10) + 65536
        }
    }
}, function (e, t, n) {
    "use strict";
    var i = n(51), r = n(30), o = n(55), a = {};
    n(23)(a, n(16)("iterator"), function () {
        return this
    }), e.exports = function (e, t, n) {
        e.prototype = i(a, {next: r(1, n)}), o(e, t + " Iterator")
    }
}, function (e, t, n) {
    var i = n(15), r = n(102), o = n(115);
    e.exports = function (e) {
        return function (t, n, a) {
            var s, l = i(t), u = r(l.length), c = o(a, u);
            if (e && n != n) {
                for (; u > c;) if ((s = l[c++]) != s) return !0
            } else for (; u > c; c++) if ((e || c in l) && l[c] === n) return e || c || 0;
            return !e && -1
        }
    }
}, function (e, t, n) {
    var i = n(50), r = Math.max, o = Math.min;
    e.exports = function (e, t) {
        return (e = i(e)) < 0 ? r(e + t, 0) : o(e, t)
    }
}, function (e, t, n) {
    var i = n(10).document;
    e.exports = i && i.documentElement
}, function (e, t, n) {
    "use strict";
    var i = n(118), r = n(119), o = n(40), a = n(15);
    e.exports = n(76)(Array, "Array", function (e, t) {
        this._t = a(e), this._i = 0, this._k = t
    }, function () {
        var e = this._t, t = this._k, n = this._i++;
        return !e || n >= e.length ? (this._t = void 0, r(1)) : r(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
    }, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
}, function (e, t) {
    e.exports = function () {
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return {value: t, done: !!e}
    }
}, function (e, t, n) {
    e.exports = n(121)
}, function (e, t, n) {
    n(103), n(125), n(126), n(127), e.exports = n(1).Symbol
}, function (e, t, n) {
    var i = n(35)("meta"), r = n(17), o = n(12), a = n(14).f, s = 0, l = Object.isExtensible || function () {
        return !0
    }, u = !n(25)(function () {
        return l(Object.preventExtensions({}))
    }), c = function (e) {
        a(e, i, {value: {i: "O" + ++s, w: {}}})
    }, d = e.exports = {
        KEY: i, NEED: !1, fastKey: function (e, t) {
            if (!r(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
            if (!o(e, i)) {
                if (!l(e)) return "F";
                if (!t) return "E";
                c(e)
            }
            return e[i].i
        }, getWeak: function (e, t) {
            if (!o(e, i)) {
                if (!l(e)) return !0;
                if (!t) return !1;
                c(e)
            }
            return e[i].w
        }, onFreeze: function (e) {
            return u && d.NEED && l(e) && !o(e, i) && c(e), e
        }
    }
}, function (e, t, n) {
    var i = n(28), r = n(64), o = n(41);
    e.exports = function (e) {
        var t = i(e), n = r.f;
        if (n) for (var a, s = n(e), l = o.f, u = 0; s.length > u;) l.call(e, a = s[u++]) && t.push(a);
        return t
    }
}, function (e, t, n) {
    var i = n(15), r = n(69).f, o = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    e.exports.f = function getOwnPropertyNames(e) {
        return a && "[object Window]" == o.call(e) ? function (e) {
            try {
                return r(e)
            } catch (e) {
                return a.slice()
            }
        }(e) : r(i(e))
    }
}, function (e, t) {
}, function (e, t, n) {
    n(57)("asyncIterator")
}, function (e, t, n) {
    n(57)("observable")
}, function (e, t, n) {
    e.exports = n(129)
}, function (e, t, n) {
    n(130), e.exports = n(1).Object.getPrototypeOf
}, function (e, t, n) {
    var i = n(31), r = n(59);
    n(63)("getPrototypeOf", function () {
        return function getPrototypeOf(e) {
            return r(i(e))
        }
    })
}, function (e, t, n) {
    n(132), e.exports = n(1).Object.setPrototypeOf
}, function (e, t, n) {
    var i = n(8);
    i(i.S, "Object", {setPrototypeOf: n(133).set})
}, function (e, t, n) {
    var i = n(17), r = n(18), o = function (e, t) {
        if (r(e), !i(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
    };
    e.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function (e, t, i) {
            try {
                (i = n(68)(Function.call, n(38).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
            } catch (e) {
                t = !0
            }
            return function setPrototypeOf(e, n) {
                return o(e, n), t ? e.__proto__ = n : i(e, n), e
            }
        }({}, !1) : void 0), check: o
    }
}, function (e, t, n) {
    n(135);
    var i = n(1).Object;
    e.exports = function create(e, t) {
        return i.create(e, t)
    }
}, function (e, t, n) {
    var i = n(8);
    i(i.S, "Object", {create: n(51)})
}, function (e, t, n) {
    var i = n(79);

    function _setPrototypeOf(t, n) {
        return e.exports = _setPrototypeOf = i || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        }, _setPrototypeOf(t, n)
    }

    e.exports = _setPrototypeOf
}, , , function (e, t, n) {
    var i = n(22), r = n(29), o = n(9)("match");
    e.exports = function (e) {
        var t;
        return i(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == r(e))
    }
}, function (e, t, n) {
    "use strict";
    var i = n(93), r = {};
    r[n(9)("toStringTag")] = "z", r + "" != "[object z]" && n(27)(Object.prototype, "toString", function toString() {
        return "[object " + i(this) + "]"
    }, !0)
}, function (e, t, n) {
    e.exports = n(146)
}, , , function (e, t, n) {
    var i = n(43), r = n(32);
    e.exports = function (e) {
        return function (t, n) {
            var o, a, s = String(r(t)), l = i(n), u = s.length;
            return l < 0 || l >= u ? e ? "" : void 0 : (o = s.charCodeAt(l)) < 55296 || o > 56319 || l + 1 === u || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? s.charAt(l) : o : e ? s.slice(l, l + 2) : a - 56320 + (o - 55296 << 10) + 65536
        }
    }
}, function (e, t, n) {
    "use strict";
    var i = n(72);
    n(37)({target: "RegExp", proto: !0, forced: i !== /./.exec}, {exec: i})
}, function (e, t, n) {
    n(147);
    var i = n(1).Object;
    e.exports = function getOwnPropertyDescriptor(e, t) {
        return i.getOwnPropertyDescriptor(e, t)
    }
}, function (e, t, n) {
    var i = n(15), r = n(38).f;
    n(63)("getOwnPropertyDescriptor", function () {
        return function getOwnPropertyDescriptor(e, t) {
            return r(i(e), t)
        }
    })
}, function (e, t, n) {
    e.exports = n(149)
}, function (e, t, n) {
    n(150), e.exports = n(1).Reflect.get
}, function (e, t, n) {
    var i = n(38), r = n(59), o = n(12), a = n(8), s = n(17), l = n(18);
    a(a.S, "Reflect", {
        get: function get(e, t) {
            var n, a, u = arguments.length < 3 ? e : arguments[2];
            return l(e) === u ? e[t] : (n = i.f(e, t)) ? o(n, "value") ? n.value : void 0 !== n.get ? n.get.call(u) : void 0 : s(a = r(e)) ? get(a, t, u) : void 0
        }
    })
}, function (e, t, n) {
    var i = n(3);
    e.exports = function _superPropBase(e, t) {
        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = i(e));) ;
        return e
    }
}, function (e, t, n) {
    n(153), e.exports = n(1).Object.keys
}, function (e, t, n) {
    var i = n(31), r = n(28);
    n(63)("keys", function () {
        return function keys(e) {
            return r(i(e))
        }
    })
}, , , function (e, t, n) {
    var i = n(19), r = n(61), o = n(9)("species");
    e.exports = function (e, t) {
        var n, a = i(e).constructor;
        return void 0 === a || null == (n = i(a)[o]) ? t : r(n)
    }
}, function (e, t) {
    e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
}, function (e, t, n) {
    e.exports = n(183)
}, function (e, t, n) {
    var i = n(91), r = n(42), o = n(160);
    e.exports = function (e) {
        return function (t, n, a) {
            var s, l = i(t), u = r(l.length), c = o(a, u);
            if (e && n != n) {
                for (; u > c;) if ((s = l[c++]) != s) return !0
            } else for (; u > c; c++) if ((e || c in l) && l[c] === n) return e || c || 0;
            return !e && -1
        }
    }
}, function (e, t, n) {
    var i = n(43), r = Math.max, o = Math.min;
    e.exports = function (e, t) {
        return (e = i(e)) < 0 ? r(e + t, 0) : o(e, t)
    }
}, function (e, t, n) {
    "use strict";
    var i = n(37), r = n(61), o = n(62), a = n(24), s = [].sort, l = [1, 2, 3];
    i(i.P + i.F * (a(function () {
        l.sort(void 0)
    }) || !a(function () {
        l.sort(null)
    }) || !n(189)(s)), "Array", {
        sort: function sort(e) {
            return void 0 === e ? s.call(o(this)) : s.call(o(this), r(e))
        }
    })
}, function (e, t, n) {
    e.exports = n(176)
}, , , , , , function (e, t, n) {
    "use strict";
    n(2)(t, "__esModule", {value: !0}), t.default = void 0;
    var i = navigator.userAgent, r = {
        webkit: -1 !== i.indexOf("AppleWebKit"),
        firefox: -1 !== i.indexOf("Firefox"),
        ie: /Trident|MSIE/.test(i),
        edge: -1 !== i.indexOf("Edge"),
        mac: -1 !== i.indexOf("Macintosh")
    };
    t.default = r
}, , , , , , , , function (e, t, n) {
    n(177), e.exports = n(1).parseInt
}, function (e, t, n) {
    var i = n(8), r = n(178);
    i(i.G + i.F * (parseInt != r), {parseInt: r})
}, function (e, t, n) {
    var i = n(10).parseInt, r = n(179).trim, o = n(157), a = /^[-+]?0[xX]/;
    e.exports = 8 !== i(o + "08") || 22 !== i(o + "0x16") ? function parseInt(e, t) {
        var n = r(String(e), 3);
        return i(n, t >>> 0 || (a.test(n) ? 16 : 10))
    } : i
}, function (e, t, n) {
    var i = n(8), r = n(39), o = n(25), a = n(157), s = "[" + a + "]", l = RegExp("^" + s + s + "*"),
        u = RegExp(s + s + "*$"), c = function (e, t, n) {
            var r = {}, s = o(function () {
                return !!a[e]() || "​" != "​"[e]()
            }), l = r[e] = s ? t(d) : a[e];
            n && (r[n] = l), i(i.P + i.F * s, "String", r)
        }, d = c.trim = function (e, t) {
            return e = String(r(e)), 1 & t && (e = e.replace(l, "")), 2 & t && (e = e.replace(u, "")), e
        };
    e.exports = c
}, , function (e, t, n) {
    "use strict";
    n(225);
    var i = n(19), r = n(99), o = n(20), a = /./.toString, s = function (e) {
        n(27)(RegExp.prototype, "toString", e, !0)
    };
    n(24)(function () {
        return "/a/b" != a.call({source: "a", flags: "b"})
    }) ? s(function toString() {
        var e = i(this);
        return "/".concat(e.source, "/", "flags" in e ? e.flags : !o && e instanceof RegExp ? r.call(e) : void 0)
    }) : "toString" != a.name && s(function toString() {
        return a.call(this)
    })
}, , function (e, t, n) {
    var i = n(1), r = i.JSON || (i.JSON = {stringify: JSON.stringify});
    e.exports = function stringify(e) {
        return r.stringify.apply(r, arguments)
    }
}, , , , , , function (e, t, n) {
    "use strict";
    var i = n(24);
    e.exports = function (e, t) {
        return !!e && i(function () {
            t ? e.call(null, function () {
            }, 1) : e.call(null)
        })
    }
}, , , function (e, t, n) {
    "use strict";
    var i = n(37), r = n(159)(!0);
    i(i.P, "Array", {
        includes: function includes(e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(73)("includes")
}, function (e, t, n) {
    "use strict";
    var i = n(37), r = n(203);
    i(i.P + i.F * n(204)("includes"), "String", {
        includes: function includes(e) {
            return !!~r(this, e, "includes").indexOf(e, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, , , , , , , , , , function (e, t, n) {
    var i = n(139), r = n(32);
    e.exports = function (e, t, n) {
        if (i(t)) throw TypeError("String#" + n + " doesn't accept regex!");
        return String(r(e))
    }
}, function (e, t, n) {
    var i = n(9)("match");
    e.exports = function (e) {
        var t = /./;
        try {
            "/./"[e](t)
        } catch (n) {
            try {
                return t[i] = !1, !"/./"[e](t)
            } catch (e) {
            }
        }
        return !0
    }
}, , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    n(20) && "g" != /./g.flags && n(36).f(RegExp.prototype, "flags", {configurable: !0, get: n(99)})
}, , , , function (e, t, n) {
    "use strict";
    var i = n(0)(n(162));
    e.exports = function EventManager() {
        var e, t = Array.prototype.slice, n = {actions: {}, filters: {}};

        function _removeHook(e, t, i, r) {
            var o, a, s;
            if (n[e][t]) if (i) if (o = n[e][t], r) for (s = o.length; s--;) (a = o[s]).callback === i && a.context === r && o.splice(s, 1); else for (s = o.length; s--;) o[s].callback === i && o.splice(s, 1); else n[e][t] = []
        }

        function _addHook(e, t, i, r, o) {
            var a = {callback: i, priority: r, context: o}, s = n[e][t];
            if (s) {
                var l = !1;
                if (jQuery.each(s, function () {
                    if (this.callback === i) return l = !0, !1
                }), l) return;
                s.push(a), s = function _hookInsertSort(e) {
                    for (var t, n, i, r = 1, o = e.length; r < o; r++) {
                        for (t = e[r], n = r; (i = e[n - 1]) && i.priority > t.priority;) e[n] = e[n - 1], --n;
                        e[n] = t
                    }
                    return e
                }(s)
            } else s = [a];
            n[e][t] = s
        }

        function _runHook(e, t, i) {
            var r, o, a = n[e][t];
            if (!a) return "filters" === e && i[0];
            if (o = a.length, "filters" === e) for (r = 0; r < o; r++) i[0] = a[r].callback.apply(a[r].context, i); else for (r = 0; r < o; r++) a[r].callback.apply(a[r].context, i);
            return "filters" !== e || i[0]
        }

        return e = {
            removeFilter: function removeFilter(t, n) {
                return "string" == typeof t && _removeHook("filters", t, n), e
            }, applyFilters: function applyFilters() {
                var n = t.call(arguments), i = n.shift();
                return "string" == typeof i ? _runHook("filters", i, n) : e
            }, addFilter: function addFilter(t, n, r, o) {
                return "string" == typeof t && "function" == typeof n && _addHook("filters", t, n, r = (0, i.default)(r || 10, 10), o), e
            }, removeAction: function removeAction(t, n) {
                return "string" == typeof t && _removeHook("actions", t, n), e
            }, doAction: function doAction() {
                var n = t.call(arguments), i = n.shift();
                return "string" == typeof i && _runHook("actions", i, n), e
            }, addAction: function addAction(t, n, r, o) {
                return "string" == typeof t && "function" == typeof n && _addHook("actions", t, n, r = (0, i.default)(r || 10, 10), o), e
            }
        }
    }
}, , function (e, t, n) {
    "use strict";
    var i = n(0);
    n(2)(t, "__esModule", {value: !0}), t.default = void 0;
    var r = i(n(158)), o = i(n(58)), a = i(n(4)), s = i(n(5)), l = i(n(6)), u = i(n(3)), c = i(n(7)), d = function (e) {
        function _default() {
            return (0, a.default)(this, _default), (0, l.default)(this, (0, u.default)(_default).apply(this, arguments))
        }

        return (0, c.default)(_default, e), (0, s.default)(_default, [{
            key: "get", value: function get(e, t) {
                var n;
                t = t || {};
                try {
                    n = t.session ? sessionStorage : localStorage
                } catch (t) {
                    return e ? void 0 : {}
                }
                var i = n.getItem("elementor");
                (i = i ? JSON.parse(i) : {}).__expiration || (i.__expiration = {});
                var r = i.__expiration, a = [];
                e ? r[e] && (a = [e]) : a = (0, o.default)(r);
                var s = !1;
                return a.forEach(function (e) {
                    new Date(r[e]) < new Date && (delete i[e], delete r[e], s = !0)
                }), s && this.save(i, t.session), e ? i[e] : i
            }
        }, {
            key: "set", value: function set(e, t, n) {
                n = n || {};
                var i = this.get(null, n);
                if (i[e] = t, n.lifetimeInSeconds) {
                    var r = new Date;
                    r.setTime(r.getTime() + 1e3 * n.lifetimeInSeconds), i.__expiration[e] = r.getTime()
                }
                this.save(i, n.session)
            }
        }, {
            key: "save", value: function save(e, t) {
                var n;
                try {
                    n = t ? sessionStorage : localStorage
                } catch (e) {
                    return
                }
                n.setItem("elementor", (0, r.default)(e))
            }
        }]), _default
    }(elementorModules.Module);
    t.default = d
}, function (e, t, n) {
    "use strict";
    var i = n(0);
    n(2)(t, "__esModule", {value: !0}), t.default = void 0, n(26);
    var r = i(n(4)), o = i(n(5)), a = i(n(6)), s = i(n(3)), l = i(n(44)), u = i(n(7)), c = function (e) {
        function _default() {
            return (0, r.default)(this, _default), (0, a.default)(this, (0, s.default)(_default).apply(this, arguments))
        }

        return (0, u.default)(_default, e), (0, o.default)(_default, [{
            key: "getDefaultSettings",
            value: function getDefaultSettings() {
                return {
                    selectors: {
                        elements: ".elementor-element",
                        nestedDocumentElements: ".elementor .elementor-element"
                    }, classes: {editMode: "elementor-edit-mode"}
                }
            }
        }, {
            key: "getDefaultElements", value: function getDefaultElements() {
                var e = this.getSettings("selectors");
                return {$elements: this.$element.find(e.elements).not(this.$element.find(e.nestedDocumentElements))}
            }
        }, {
            key: "getDocumentSettings", value: function getDocumentSettings(e) {
                var t;
                if (this.isEdit) {
                    t = {};
                    var n = elementor.settings.page.model;
                    jQuery.each(n.getActiveControls(), function (e) {
                        t[e] = n.attributes[e]
                    })
                } else t = this.$element.data("elementor-settings") || {};
                return this.getItems(t, e)
            }
        }, {
            key: "runElementsHandlers", value: function runElementsHandlers() {
                this.elements.$elements.each(function (e, t) {
                    return elementorFrontend.elementsHandler.runReadyTrigger(t)
                })
            }
        }, {
            key: "onInit", value: function onInit() {
                this.$element = this.getSettings("$element"), (0, l.default)((0, s.default)(_default.prototype), "onInit", this).call(this), this.isEdit = this.$element.hasClass(this.getSettings("classes.editMode")), this.isEdit ? elementor.settings.page.model.on("change", this.onSettingsChange.bind(this)) : this.runElementsHandlers()
            }
        }, {
            key: "onSettingsChange", value: function onSettingsChange() {
            }
        }]), _default
    }(elementorModules.ViewModule);
    t.default = c
}, function (e, t, n) {
    "use strict";
    var i = n(0);
    n(2)(t, "__esModule", {value: !0}), t.default = void 0;
    var r = i(n(4)), o = i(n(5)), a = i(n(6)), s = i(n(3)), l = i(n(44)), u = i(n(7)), c = function (e) {
        function baseTabs() {
            return (0, r.default)(this, baseTabs), (0, a.default)(this, (0, s.default)(baseTabs).apply(this, arguments))
        }

        return (0, u.default)(baseTabs, e), (0, o.default)(baseTabs, [{
            key: "getDefaultSettings",
            value: function getDefaultSettings() {
                return {
                    selectors: {tabTitle: ".elementor-tab-title", tabContent: ".elementor-tab-content"},
                    classes: {active: "elementor-active"},
                    showTabFn: "show",
                    hideTabFn: "hide",
                    toggleSelf: !0,
                    hidePrevious: !0,
                    autoExpand: !0
                }
            }
        }, {
            key: "getDefaultElements", value: function getDefaultElements() {
                var e = this.getSettings("selectors");
                return {$tabTitles: this.findElement(e.tabTitle), $tabContents: this.findElement(e.tabContent)}
            }
        }, {
            key: "activateDefaultTab", value: function activateDefaultTab() {
                var e = this.getSettings();
                if (e.autoExpand && ("editor" !== e.autoExpand || this.isEdit)) {
                    var t = this.getEditSettings("activeItemIndex") || 1,
                        n = {showTabFn: e.showTabFn, hideTabFn: e.hideTabFn};
                    this.setSettings({
                        showTabFn: "show",
                        hideTabFn: "hide"
                    }), this.changeActiveTab(t), this.setSettings(n)
                }
            }
        }, {
            key: "deactivateActiveTab", value: function deactivateActiveTab(e) {
                var t = this.getSettings(), n = t.classes.active, i = e ? '[data-tab="' + e + '"]' : "." + n,
                    r = this.elements.$tabTitles.filter(i), o = this.elements.$tabContents.filter(i);
                r.add(o).removeClass(n), o[t.hideTabFn]()
            }
        }, {
            key: "activateTab", value: function activateTab(e) {
                var t = this.getSettings(), n = t.classes.active,
                    i = this.elements.$tabTitles.filter('[data-tab="' + e + '"]'),
                    r = this.elements.$tabContents.filter('[data-tab="' + e + '"]');
                i.add(r).addClass(n), r[t.showTabFn]()
            }
        }, {
            key: "isActiveTab", value: function isActiveTab(e) {
                return this.elements.$tabTitles.filter('[data-tab="' + e + '"]').hasClass(this.getSettings("classes.active"))
            }
        }, {
            key: "bindEvents", value: function bindEvents() {
                var e = this;
                this.elements.$tabTitles.on({
                    keydown: function keydown(t) {
                        "Enter" === t.key && (t.preventDefault(), e.changeActiveTab(t.currentTarget.getAttribute("data-tab")))
                    }, click: function click(t) {
                        t.preventDefault(), e.changeActiveTab(t.currentTarget.getAttribute("data-tab"))
                    }
                })
            }
        }, {
            key: "onInit", value: function onInit() {
                for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                (e = (0, l.default)((0, s.default)(baseTabs.prototype), "onInit", this)).call.apply(e, [this].concat(n)), this.activateDefaultTab()
            }
        }, {
            key: "onEditSettingsChange", value: function onEditSettingsChange(e) {
                "activeItemIndex" === e && this.activateDefaultTab()
            }
        }, {
            key: "changeActiveTab", value: function changeActiveTab(e) {
                var t = this.isActiveTab(e), n = this.getSettings();
                !n.toggleSelf && t || !n.hidePrevious || this.deactivateActiveTab(), !n.hidePrevious && t && this.deactivateActiveTab(e), t || this.activateTab(e)
            }
        }]), baseTabs
    }(elementorModules.frontend.handlers.Base);
    t.default = c
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    var i = n(0);
    n(2)(t, "__esModule", {value: !0}), t.default = void 0, n(98);
    var r = i(n(4)), o = i(n(5)), a = i(n(6)), s = i(n(3)), l = i(n(7)), u = function (e) {
        function BaseLoader() {
            return (0, r.default)(this, BaseLoader), (0, a.default)(this, (0, s.default)(BaseLoader).apply(this, arguments))
        }

        return (0, l.default)(BaseLoader, e), (0, o.default)(BaseLoader, [{
            key: "getDefaultSettings",
            value: function getDefaultSettings() {
                return {isInserted: !1, selectors: {firstScript: "script:first"}}
            }
        }, {
            key: "getDefaultElements", value: function getDefaultElements() {
                return {$firstScript: jQuery(this.getSettings("selectors.firstScript"))}
            }
        }, {
            key: "insertAPI", value: function insertAPI() {
                this.elements.$firstScript.before(jQuery("<script>", {src: this.getApiURL()})), this.setSettings("isInserted", !0)
            }
        }, {
            key: "getVideoIDFromURL", value: function getVideoIDFromURL(e) {
                var t = e.match(this.getURLRegex());
                return t && t[1]
            }
        }, {
            key: "onApiReady", value: function onApiReady(e) {
                var t = this;
                this.getSettings("isInserted") || this.insertAPI(), this.isApiLoaded() ? e(this.getApiObject()) : setTimeout(function () {
                    t.onApiReady(e)
                }, 350)
            }
        }]), BaseLoader
    }(elementorModules.ViewModule);
    t.default = u
}, function (e, t, n) {
    "use strict";
    var i = n(0);
    n(2)(t, "__esModule", {value: !0}), t.default = void 0;
    var r = i(n(4)), o = i(n(5)), a = i(n(6)), s = i(n(3)), l = i(n(44)), u = i(n(7)), c = function (e) {
        function BackgroundSlideshow() {
            return (0, r.default)(this, BackgroundSlideshow), (0, a.default)(this, (0, s.default)(BackgroundSlideshow).apply(this, arguments))
        }

        return (0, u.default)(BackgroundSlideshow, e), (0, o.default)(BackgroundSlideshow, [{
            key: "getDefaultSettings",
            value: function getDefaultSettings() {
                return {
                    classes: {
                        swiperContainer: "elementor-background-slideshow swiper-container",
                        swiperWrapper: "swiper-wrapper",
                        swiperSlide: "elementor-background-slideshow__slide swiper-slide",
                        swiperSlideInner: "elementor-background-slideshow__slide__image",
                        kenBurns: "elementor-ken-burns",
                        kenBurnsActive: "elementor-ken-burns--active",
                        kenBurnsIn: "elementor-ken-burns--in",
                        kenBurnsOut: "elementor-ken-burns--out"
                    }
                }
            }
        }, {
            key: "getSwiperOptions", value: function getSwiperOptions() {
                var e = this.getElementSettings(), t = this.getSettings("classes.kenBurnsActive"), n = {
                    grabCursor: !1,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    loop: "yes" === e.background_slideshow_loop,
                    speed: e.background_slideshow_transition_duration,
                    autoplay: {
                        delay: e.background_slideshow_slide_duration,
                        stopOnLastSlide: !e.background_slideshow_loop
                    },
                    on: {
                        slideChange: function slideChange() {
                            this.$activeImage && this.$activeImage.removeClass(t), this.$activeImage = jQuery(this.slides[this.activeIndex]).children(), this.$activeImage.addClass(t)
                        }
                    }
                };
                switch ("yes" === e.background_slideshow_loop && (n.loopedSlides = this.getSlidesCount()), e.background_slideshow_slide_transition) {
                    case"fade":
                        n.effect = "fade", n.fadeEffect = {crossFade: !0};
                        break;
                    case"slide_down":
                        n.autoplay.reverseDirection = !0;
                    case"slide_up":
                        n.direction = "vertical"
                }
                return n
            }
        }, {
            key: "getSlidesCount", value: function getSlidesCount() {
                return this.elements.$slides.length
            }
        }, {
            key: "buildSwiperElements", value: function buildSwiperElements() {
                var e = this, t = this.getSettings("classes"), n = this.getElementSettings(),
                    i = "slide_left" === n.background_slideshow_slide_transition ? "ltr" : "rtl",
                    r = jQuery("<div>", {class: t.swiperContainer, dir: i}),
                    o = jQuery("<div>", {class: t.swiperWrapper}), a = n.background_slideshow_ken_burns,
                    s = t.swiperSlideInner;
                if (a) {
                    s += " " + t.kenBurns;
                    var l = "in" === n.background_slideshow_ken_burns_zoom_direction ? "kenBurnsIn" : "kenBurnsOut";
                    s += " " + t[l]
                }
                this.elements.$slides = jQuery(), n.background_slideshow_gallery.forEach(function (n) {
                    var i = jQuery("<div>", {class: t.swiperSlide}),
                        r = jQuery("<div>", {class: s, style: 'background-image: url("' + n.url + '");'});
                    i.append(r), o.append(i), e.elements.$slides = e.elements.$slides.add(i)
                }), r.append(o), this.$element.prepend(r), this.elements.$backgroundSlideShowContainer = r
            }
        }, {
            key: "initSlider", value: function initSlider() {
                1 >= this.getSlidesCount() || (this.swiper = new Swiper(this.elements.$backgroundSlideShowContainer, this.getSwiperOptions()))
            }
        }, {
            key: "activate", value: function activate() {
                this.buildSwiperElements(), this.initSlider()
            }
        }, {
            key: "deactivate", value: function deactivate() {
                this.swiper && (this.swiper.destroy(), this.elements.$backgroundSlideShowContainer.remove())
            }
        }, {
            key: "run", value: function run() {
                "slideshow" === this.getElementSettings("background_background") ? this.activate() : this.deactivate()
            }
        }, {
            key: "onInit", value: function onInit() {
                (0, l.default)((0, s.default)(BackgroundSlideshow.prototype), "onInit", this).call(this), this.run()
            }
        }, {
            key: "onDestroy", value: function onDestroy() {
                (0, l.default)((0, s.default)(BackgroundSlideshow.prototype), "onDestroy", this).call(this), this.deactivate()
            }
        }, {
            key: "onElementChange", value: function onElementChange(e) {
                "background_background" === e && this.run()
            }
        }]), BackgroundSlideshow
    }(elementorModules.frontend.handlers.Base);
    t.default = c
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    var i = n(0);
    n(26), n(80);
    var r = i(n(4)), o = i(n(5)), a = i(n(6)), s = i(n(3)), l = i(n(7)), u = i(n(480)), c = i(n(231)), d = i(n(168)),
        f = i(n(481)), p = i(n(482)), h = n(229), g = n(483), v = n(500), m = n(501), y = function (e) {
            function Frontend() {
                var e, t;
                (0, r.default)(this, Frontend);
                for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                return (t = (0, a.default)(this, (e = (0, s.default)(Frontend)).call.apply(e, [this].concat(i)))).config = elementorFrontendConfig, t
            }

            return (0, l.default)(Frontend, e), (0, o.default)(Frontend, [{
                key: "getDefaultSettings",
                value: function getDefaultSettings() {
                    return {selectors: {elementor: ".elementor", adminBar: "#wpadminbar"}, classes: {ie: "elementor-msie"}}
                }
            }, {
                key: "getDefaultElements", value: function getDefaultElements() {
                    var e = {
                        window: window,
                        $window: jQuery(window),
                        $document: jQuery(document),
                        $head: jQuery(document.head),
                        $body: jQuery(document.body),
                        $deviceMode: jQuery("<span>", {id: "elementor-device-mode", class: "elementor-screen-only"})
                    };
                    return e.$body.append(e.$deviceMode), e
                }
            }, {
                key: "bindEvents", value: function bindEvents() {
                    var e = this;
                    this.elements.$window.on("resize", function () {
                        return e.setDeviceModeData()
                    })
                }
            }, {
                key: "getElements", value: function getElements(e) {
                    return this.getItems(this.elements, e)
                }
            }, {
                key: "getPageSettings", value: function getPageSettings(e) {
                    var t = this.isEditMode() ? elementor.settings.page.model.attributes : this.config.settings.page;
                    return this.getItems(t, e)
                }
            }, {
                key: "getGeneralSettings", value: function getGeneralSettings(e) {
                    var t = this.isEditMode() ? elementor.settings.general.model.attributes : this.config.settings.general;
                    return this.getItems(t, e)
                }
            }, {
                key: "getCurrentDeviceMode", value: function getCurrentDeviceMode() {
                    return getComputedStyle(this.elements.$deviceMode[0], ":after").content.replace(/"/g, "")
                }
            }, {
                key: "getDeviceSetting", value: function getDeviceSetting(e, t, n) {
                    for (var i = ["desktop", "tablet", "mobile"], r = i.indexOf(e); r > 0;) {
                        var o = t[n + "_" + i[r]];
                        if (o) return o;
                        r--
                    }
                    return t[n]
                }
            }, {
                key: "getCurrentDeviceSetting", value: function getCurrentDeviceSetting(e, t) {
                    return this.getDeviceSetting(elementorFrontend.getCurrentDeviceMode(), e, t)
                }
            }, {
                key: "isEditMode", value: function isEditMode() {
                    return this.config.environmentMode.edit
                }
            }, {
                key: "isWPPreviewMode", value: function isWPPreviewMode() {
                    return this.config.environmentMode.wpPreview
                }
            }, {
                key: "initDialogsManager", value: function initDialogsManager() {
                    var e;
                    this.getDialogsManager = function () {
                        return e || (e = new DialogsManager.Instance), e
                    }
                }
            }, {
                key: "initOnReadyComponents", value: function initOnReadyComponents() {
                    this.utils = {
                        youtube: new f.default,
                        vimeo: new p.default,
                        anchors: new v,
                        lightbox: new m
                    }, this.modules = {
                        StretchElement: elementorModules.frontend.tools.StretchElement,
                        Masonry: elementorModules.utils.Masonry
                    }, this.elementsHandler = new g(jQuery), this.documentsManager = new u.default, this.trigger("components:init")
                }
            }, {
                key: "initOnReadyElements", value: function initOnReadyElements() {
                    this.elements.$wpAdminBar = this.elements.$document.find(this.getSettings("selectors.adminBar"))
                }
            }, {
                key: "addIeCompatibility", value: function addIeCompatibility() {
                    var e = "string" == typeof document.createElement("div").style.grid;
                    if (d.default.ie || !e) {
                        this.elements.$body.addClass(this.getSettings("classes.ie"));
                        var t = '<link rel="stylesheet" id="elementor-frontend-css-msie" href="' + this.config.urls.assets + "css/frontend-msie.min.css?" + this.config.version + '" type="text/css" />';
                        this.elements.$body.append(t)
                    }
                }
            }, {
                key: "setDeviceModeData", value: function setDeviceModeData() {
                    this.elements.$body.attr("data-elementor-device-mode", this.getCurrentDeviceMode())
                }
            }, {
                key: "addListenerOnce", value: function addListenerOnce(e, t, n, i) {
                    if (i || (i = this.elements.$window), this.isEditMode()) if (this.removeListeners(e, t, i), i instanceof jQuery) {
                        var r = t + "." + e;
                        i.on(r, n)
                    } else i.on(t, n, e); else i.on(t, n)
                }
            }, {
                key: "removeListeners", value: function removeListeners(e, t, n, i) {
                    if (i || (i = this.elements.$window), i instanceof jQuery) {
                        var r = t + "." + e;
                        i.off(r, n)
                    } else i.off(t, n, e)
                }
            }, {
                key: "debounce", value: function debounce(e, t) {
                    var n;
                    return function () {
                        var i = this, r = arguments, o = function later() {
                            n = null, e.apply(i, r)
                        }, a = !n;
                        clearTimeout(n), n = setTimeout(o, t), a && e.apply(i, r)
                    }
                }
            }, {
                key: "waypoint", value: function waypoint(e, t, n) {
                    n = jQuery.extend({offset: "100%", triggerOnce: !0}, n);
                    return e.elementorWaypoint(function correctCallback() {
                        var e = this.element || this, i = t.apply(e, arguments);
                        return n.triggerOnce && this.destroy && this.destroy(), i
                    }, n)
                }
            }, {
                key: "muteMigrationTraces", value: function muteMigrationTraces() {
                    jQuery.migrateMute = !0, jQuery.migrateTrace = !1
                }
            }, {
                key: "init", value: function init() {
                    this.hooks = new h, this.storage = new c.default, this.addIeCompatibility(), this.setDeviceModeData(), this.initDialogsManager(), this.isEditMode() && this.muteMigrationTraces(), this.elements.$window.trigger("elementor/frontend/init"), this.initOnReadyElements(), this.initOnReadyComponents()
                }
            }, {
                key: "Module", get: function get() {
                    return this.isEditMode() && parent.elementorCommon.helpers.deprecatedMethod("elementorFrontend.Module", "2.5.0", "elementorModules.frontend.handlers.Base"), elementorModules.frontend.handlers.Base
                }
            }]), Frontend
        }(elementorModules.ViewModule);
    window.elementorFrontend = new y, elementorFrontend.isEditMode() || jQuery(function () {
        return elementorFrontend.init()
    })
}, function (e, t, n) {
    "use strict";
    var i = n(0);
    n(2)(t, "__esModule", {value: !0}), t.default = void 0;
    var r = i(n(4)), o = i(n(5)), a = i(n(6)), s = i(n(3)), l = i(n(7)), u = i(n(232)), c = function (e) {
        function _default() {
            var e, t;
            (0, r.default)(this, _default);
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
            return (t = (0, a.default)(this, (e = (0, s.default)(_default)).call.apply(e, [this].concat(i)))).documents = {}, t.initDocumentClasses(), t.attachDocumentsClasses(), t
        }

        return (0, l.default)(_default, e), (0, o.default)(_default, [{
            key: "getDefaultSettings",
            value: function getDefaultSettings() {
                return {selectors: {document: ".elementor"}}
            }
        }, {
            key: "getDefaultElements", value: function getDefaultElements() {
                var e = this.getSettings("selectors");
                return {$documents: jQuery(e.document)}
            }
        }, {
            key: "initDocumentClasses", value: function initDocumentClasses() {
                this.documentClasses = {base: u.default}, elementorFrontend.hooks.doAction("elementor/frontend/documents-manager/init-classes", this)
            }
        }, {
            key: "addDocumentClass", value: function addDocumentClass(e, t) {
                this.documentClasses[e] = t
            }
        }, {
            key: "attachDocumentsClasses", value: function attachDocumentsClasses() {
                var e = this;
                this.elements.$documents.each(function (t, n) {
                    return e.attachDocumentClass(jQuery(n))
                })
            }
        }, {
            key: "attachDocumentClass", value: function attachDocumentClass(e) {
                var t = e.data(), n = t.elementorId, i = t.elementorType,
                    r = this.documentClasses[i] || this.documentClasses.base;
                this.documents[n] = new r({$element: e, id: n})
            }
        }]), _default
    }(elementorModules.ViewModule);
    t.default = c
}, function (e, t, n) {
    "use strict";
    var i = n(0);
    n(2)(t, "__esModule", {value: !0}), t.default = void 0;
    var r = i(n(4)), o = i(n(5)), a = i(n(6)), s = i(n(3)), l = i(n(7)), u = function (e) {
        function YoutubeLoader() {
            return (0, r.default)(this, YoutubeLoader), (0, a.default)(this, (0, s.default)(YoutubeLoader).apply(this, arguments))
        }

        return (0, l.default)(YoutubeLoader, e), (0, o.default)(YoutubeLoader, [{
            key: "getApiURL",
            value: function getApiURL() {
                return "https://www.youtube.com/iframe_api"
            }
        }, {
            key: "getURLRegex", value: function getURLRegex() {
                return /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user)\/))([^?&"'>]+)/
            }
        }, {
            key: "isApiLoaded", value: function isApiLoaded() {
                return window.YT && YT.loaded
            }
        }, {
            key: "getApiObject", value: function getApiObject() {
                return YT
            }
        }]), YoutubeLoader
    }(i(n(266)).default);
    t.default = u
}, function (e, t, n) {
    "use strict";
    var i = n(0);
    n(2)(t, "__esModule", {value: !0}), t.default = void 0;
    var r = i(n(4)), o = i(n(5)), a = i(n(6)), s = i(n(3)), l = i(n(7)), u = function (e) {
        function VimeoLoader() {
            return (0, r.default)(this, VimeoLoader), (0, a.default)(this, (0, s.default)(VimeoLoader).apply(this, arguments))
        }

        return (0, l.default)(VimeoLoader, e), (0, o.default)(VimeoLoader, [{
            key: "getApiURL",
            value: function getApiURL() {
                return "https://player.vimeo.com/api/player.js"
            }
        }, {
            key: "getURLRegex", value: function getURLRegex() {
                return /^(?:https?:\/\/)?(?:www|player\.)?(?:vimeo\.com\/)?(?:video\/)?(\d+)([^?&#"'>]?)/
            }
        }, {
            key: "isApiLoaded", value: function isApiLoaded() {
                return window.Vimeo
            }
        }, {
            key: "getApiObject", value: function getApiObject() {
                return Vimeo
            }
        }]), VimeoLoader
    }(i(n(266)).default);
    t.default = u
}, function (e, t, n) {
    "use strict";
    var i = n(0), r = i(n(484)), o = i(n(485)), a = i(n(486)), s = i(n(487)), l = i(n(488)), u = i(n(489)),
        c = i(n(490)), d = i(n(491)), f = i(n(492)), p = i(n(493)), h = i(n(498)), g = i(n(499));
    e.exports = function (e) {
        var t = this, n = {
            section: p.default,
            column: h.default,
            "accordion.default": r.default,
            "alert.default": o.default,
            "counter.default": a.default,
            "progress.default": s.default,
            "tabs.default": l.default,
            "toggle.default": u.default,
            "video.default": c.default,
            "image-carousel.default": d.default,
            "text-editor.default": f.default
        }, i = {};
        this.initHandlers = function () {
            !function addGlobalHandlers() {
                elementorFrontend.hooks.addAction("frontend/element_ready/global", g.default)
            }(), function addElementsHandlers() {
                e.each(n, function (e, t) {
                    elementorFrontend.hooks.addAction("frontend/element_ready/" + e, t)
                })
            }()
        }, this.addHandler = function (e, t) {
            var n, r = t.$element.data("model-cid");
            if (r) {
                n = e.prototype.getConstructorID(), i[r] || (i[r] = {});
                var o = i[r][n];
                o && o.onDestroy()
            }
            var a = new e(t);
            r && (i[r][n] = a)
        }, this.getHandlers = function (e) {
            return e ? n[e] : n
        }, this.runReadyTrigger = function (t) {
            var n = jQuery(t), i = n.attr("data-element_type");
            i && (elementorFrontend.hooks.doAction("frontend/element_ready/global", n, e), elementorFrontend.hooks.doAction("frontend/element_ready/" + i, n, e), "widget" === i && elementorFrontend.hooks.doAction("frontend/element_ready/" + n.attr("data-widget_type"), n, e))
        }, function init() {
            t.initHandlers()
        }()
    }
}, function (e, t, n) {
    "use strict";
    var i = n(0);
    n(2)(t, "__esModule", {value: !0}), t.default = void 0;
    var r = i(n(233));
    t.default = function _default(e) {
        elementorFrontend.elementsHandler.addHandler(r.default, {
            $element: e,
            showTabFn: "slideDown",
            hideTabFn: "slideUp"
        })
    }
}, function (e, t, n) {
    "use strict";
    var i = n(0);
    n(2)(t, "__esModule", {value: !0}), t.default = void 0, n(26);
    var r = i(n(4)), o = i(n(5)), a = i(n(6)), s = i(n(3)), l = i(n(7)), u = function (e) {
        function Alert() {
            return (0, r.default)(this, Alert), (0, a.default)(this, (0, s.default)(Alert).apply(this, arguments))
        }

        return (0, l.default)(Alert, e), (0, o.default)(Alert, [{
            key: "getDefaultSettings",
            value: function getDefaultSettings() {
                return {selectors: {dismissButton: ".elementor-alert-dismiss"}}
            }
        }, {
            key: "getDefaultElements", value: function getDefaultElements() {
                var e = this.getSettings("selectors");
                return {$dismissButton: this.$element.find(e.dismissButton)}
            }
        }, {
            key: "bindEvents", value: function bindEvents() {
                this.elements.$dismissButton.on("click", this.onDismissButtonClick.bind(this))
            }
        }, {
            key: "onDismissButtonClick", value: function onDismissButtonClick() {
                this.$element.fadeOut()
            }
        }]), Alert
    }(elementorModules.frontend.handlers.Base);
    t.default = function _default(e) {
        elementorFrontend.elementsHandler.addHandler(u, {$element: e})
    }
}, function (e, t, n) {
    "use strict";
    var i = n(0);
    n(2)(t, "__esModule", {value: !0}), t.default = void 0, n(181), n(140), n(98), n(26);
    var r = i(n(4)), o = i(n(5)), a = i(n(6)), s = i(n(3)), l = i(n(44)), u = i(n(7)), c = function (e) {
        function Counter() {
            return (0, r.default)(this, Counter), (0, a.default)(this, (0, s.default)(Counter).apply(this, arguments))
        }

        return (0, u.default)(Counter, e), (0, o.default)(Counter, [{
            key: "getDefaultSettings",
            value: function getDefaultSettings() {
                return {selectors: {counterNumber: ".elementor-counter-number"}}
            }
        }, {
            key: "getDefaultElements", value: function getDefaultElements() {
                var e = this.getSettings("selectors");
                return {$counterNumber: this.$element.find(e.counterNumber)}
            }
        }, {
            key: "onInit", value: function onInit() {
                var e = this;
                (0, l.default)((0, s.default)(Counter.prototype), "onInit", this).call(this), elementorFrontend.waypoint(this.elements.$counterNumber, function () {
                    var t = e.elements.$counterNumber.data(), n = t.toValue.toString().match(/\.(.*)/);
                    n && (t.rounding = n[1].length), e.elements.$counterNumber.numerator(t)
                })
            }
        }]), Counter
    }(elementorModules.frontend.handlers.Base);
    t.default = function _default(e) {
        elementorFrontend.elementsHandler.addHandler(c, {$element: e})
    }
}, function (e, t, n) {
    "use strict";
    var i = n(0);
    n(2)(t, "__esModule", {value: !0}), t.default = void 0, n(26);
    var r = i(n(4)), o = i(n(5)), a = i(n(6)), s = i(n(3)), l = i(n(44)), u = i(n(7)), c = function (e) {
        function Progress() {
            return (0, r.default)(this, Progress), (0, a.default)(this, (0, s.default)(Progress).apply(this, arguments))
        }

        return (0, u.default)(Progress, e), (0, o.default)(Progress, [{
            key: "getDefaultSettings",
            value: function getDefaultSettings() {
                return {selectors: {progressNumber: ".elementor-progress-bar"}}
            }
        }, {
            key: "getDefaultElements", value: function getDefaultElements() {
                var e = this.getSettings("selectors");
                return {$progressNumber: this.$element.find(e.progressNumber)}
            }
        }, {
            key: "onInit", value: function onInit() {
                var e = this;
                (0, l.default)((0, s.default)(Progress.prototype), "onInit", this).call(this), elementorFrontend.waypoint(this.elements.$progressNumber, function () {
                    var t = e.elements.$progressNumber;
                    t.css("width", t.data("max") + "%")
                })
            }
        }]), Progress
    }(elementorModules.frontend.handlers.Base);
    t.default = function _default(e) {
        elementorFrontend.elementsHandler.addHandler(c, {$element: e})
    }
}, function (e, t, n) {
    "use strict";
    var i = n(0);
    n(2)(t, "__esModule", {value: !0}), t.default = void 0;
    var r = i(n(233));
    t.default = function _default(e) {
        elementorFrontend.elementsHandler.addHandler(r.default, {$element: e, toggleSelf: !1})
    }
}, function (e, t, n) {
    "use strict";
    var i = n(0);
    n(2)(t, "__esModule", {value: !0}), t.default = void 0;
    var r = i(n(233));
    t.default = function _default(e) {
        elementorFrontend.elementsHandler.addHandler(r.default, {
            $element: e,
            showTabFn: "slideDown",
            hideTabFn: "slideUp",
            hidePrevious: !1,
            autoExpand: "editor"
        })
    }
}, function (e, t, n) {
    "use strict";
    var i = n(0);
    n(2)(t, "__esModule", {value: !0}), t.default = void 0, n(192), n(193), n(80), n(26);
    var r = i(n(4)), o = i(n(5)), a = i(n(6)), s = i(n(3)), l = i(n(7)), u = function (e) {
        function VideoModule() {
            return (0, r.default)(this, VideoModule), (0, a.default)(this, (0, s.default)(VideoModule).apply(this, arguments))
        }

        return (0, l.default)(VideoModule, e), (0, o.default)(VideoModule, [{
            key: "getDefaultSettings",
            value: function getDefaultSettings() {
                return {
                    selectors: {
                        imageOverlay: ".elementor-custom-embed-image-overlay",
                        video: ".elementor-video",
                        videoIframe: ".elementor-video-iframe"
                    }
                }
            }
        }, {
            key: "getDefaultElements", value: function getDefaultElements() {
                var e = this.getSettings("selectors");
                return {
                    $imageOverlay: this.$element.find(e.imageOverlay),
                    $video: this.$element.find(e.video),
                    $videoIframe: this.$element.find(e.videoIframe)
                }
            }
        }, {
            key: "getLightBox", value: function getLightBox() {
                return elementorFrontend.utils.lightbox
            }
        }, {
            key: "handleVideo", value: function handleVideo() {
                this.getElementSettings("lightbox") || (this.elements.$imageOverlay.remove(), this.playVideo())
            }
        }, {
            key: "playVideo", value: function playVideo() {
                if (this.elements.$video.length) this.elements.$video[0].play(); else {
                    var e = this.elements.$videoIframe, t = e.data("lazy-load");
                    t && e.attr("src", t);
                    var n = e[0].src.replace("&autoplay=0", "");
                    if (e[0].src = n + "&autoplay=1", e[0].src.includes("vimeo.com")) {
                        var i = e[0].src, r = /#t=[^&]*/.exec(i);
                        e[0].src = i.slice(0, r.index) + i.slice(r.index + r[0].length) + r[0]
                    }
                }
            }
        }, {
            key: "animateVideo", value: function animateVideo() {
                this.getLightBox().setEntranceAnimation(this.getCurrentDeviceSetting("lightbox_content_animation"))
            }
        }, {
            key: "handleAspectRatio", value: function handleAspectRatio() {
                this.getLightBox().setVideoAspectRatio(this.getElementSettings("aspect_ratio"))
            }
        }, {
            key: "bindEvents", value: function bindEvents() {
                this.elements.$imageOverlay.on("click", this.handleVideo.bind(this))
            }
        }, {
            key: "onElementChange", value: function onElementChange(e) {
                if (0 !== e.indexOf("lightbox_content_animation")) {
                    var t = this.getElementSettings("lightbox");
                    "lightbox" !== e || t ? "aspect_ratio" === e && t && this.handleAspectRatio() : this.getLightBox().getModal().hide()
                } else this.animateVideo()
            }
        }]), VideoModule
    }(elementorModules.frontend.handlers.Base);
    t.default = function _default(e) {
        elementorFrontend.elementsHandler.addHandler(u, {$element: e})
    }
}, function (e, t, n) {
    "use strict";
    var i = n(0);
    n(2)(t, "__esModule", {value: !0}), t.default = void 0, n(26);
    var r = i(n(4)), o = i(n(5)), a = i(n(6)), s = i(n(3)), l = i(n(44)), u = i(n(7)), c = function (e) {
        function ImageCarouselHandler() {
            return (0, r.default)(this, ImageCarouselHandler), (0, a.default)(this, (0, s.default)(ImageCarouselHandler).apply(this, arguments))
        }

        return (0, u.default)(ImageCarouselHandler, e), (0, o.default)(ImageCarouselHandler, [{
            key: "getDefaultSettings",
            value: function getDefaultSettings() {
                return {selectors: {carousel: ".elementor-image-carousel-wrapper", slideContent: ".swiper-slide"}}
            }
        }, {
            key: "getDefaultElements", value: function getDefaultElements() {
                var e = this.getSettings("selectors"), t = {$carousel: this.$element.find(e.carousel)};
                return t.$swiperSlides = t.$carousel.find(e.slideContent), t
            }
        }, {
            key: "getSlidesCount", value: function getSlidesCount() {
                return this.elements.$swiperSlides.length
            }
        }, {
            key: "getSwiperSettings", value: function getSwiperSettings() {
                var e = this.getElementSettings(), t = +e.slides_to_show || 3, n = 1 === t, i = n ? 1 : 2,
                    r = elementorFrontend.config.breakpoints,
                    o = {slidesPerView: t, loop: "yes" === e.infinite, speed: e.speed, breakpoints: {}};
                o.breakpoints[r.md] = {
                    slidesPerView: +e.slides_to_show_mobile || 1,
                    slidesPerGroup: +e.slides_to_scroll_mobile || 1
                }, o.breakpoints[r.lg] = {
                    slidesPerView: +e.slides_to_show_tablet || i,
                    slidesPerGroup: +e.slides_to_scroll_tablet || 1
                }, this.isEdit || "yes" !== e.autoplay || (o.autoplay = {
                    delay: e.autoplay_speed,
                    disableOnInteraction: !!e.pause_on_hover
                }), !0 === o.loop && (o.loopedSlides = this.getSlidesCount()), n ? o.effect = e.effect : o.slidesPerGroup = +e.slides_to_scroll || 1, e.image_spacing_custom && (o.spaceBetween = e.image_spacing_custom.size);
                var a = "arrows" === e.navigation || "both" === e.navigation,
                    s = "dots" === e.navigation || "both" === e.navigation;
                return a && (o.navigation = {
                    prevEl: ".elementor-swiper-button-prev",
                    nextEl: ".elementor-swiper-button-next"
                }), s && (o.pagination = {el: ".swiper-pagination", type: "bullets", clickable: !0}), o
            }
        }, {
            key: "updateSpaceBetween", value: function updateSpaceBetween() {
                this.swiper.params.spaceBetween = this.getElementSettings("image_spacing_custom").size || 0, this.swiper.update()
            }
        }, {
            key: "onInit", value: function onInit() {
                for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                (e = (0, l.default)((0, s.default)(ImageCarouselHandler.prototype), "onInit", this)).call.apply(e, [this].concat(n)), this.elements.$carousel.length && (this.swiper = new Swiper(this.elements.$carousel, this.getSwiperSettings()))
            }
        }, {
            key: "onElementChange", value: function onElementChange(e) {
                0 === e.indexOf("image_spacing_custom") ? this.updateSpaceBetween() : "arrows_position" === e && this.swiper.update()
            }
        }, {
            key: "onEditSettingsChange", value: function onEditSettingsChange(e) {
                "activeItemIndex" === e && this.swiper.slideToLoop(this.getEditSettings("activeItemIndex") - 1)
            }
        }]), ImageCarouselHandler
    }(elementorModules.frontend.handlers.Base);
    t.default = function _default(e) {
        elementorFrontend.elementsHandler.addHandler(c, {$element: e})
    }
}, function (e, t, n) {
    "use strict";
    var i = n(0);
    n(2)(t, "__esModule", {value: !0}), t.default = void 0, n(98), n(80), n(26);
    var r = i(n(4)), o = i(n(5)), a = i(n(6)), s = i(n(3)), l = i(n(44)), u = i(n(7)), c = function (e) {
        function TextEditor() {
            return (0, r.default)(this, TextEditor), (0, a.default)(this, (0, s.default)(TextEditor).apply(this, arguments))
        }

        return (0, u.default)(TextEditor, e), (0, o.default)(TextEditor, [{
            key: "getDefaultSettings",
            value: function getDefaultSettings() {
                return {
                    selectors: {paragraph: "p:first"},
                    classes: {dropCap: "elementor-drop-cap", dropCapLetter: "elementor-drop-cap-letter"}
                }
            }
        }, {
            key: "getDefaultElements", value: function getDefaultElements() {
                var e = this.getSettings("selectors"), t = this.getSettings("classes"),
                    n = jQuery("<span>", {class: t.dropCap}), i = jQuery("<span>", {class: t.dropCapLetter});
                return n.append(i), {$paragraph: this.$element.find(e.paragraph), $dropCap: n, $dropCapLetter: i}
            }
        }, {
            key: "wrapDropCap", value: function wrapDropCap() {
                if (this.getElementSettings("drop_cap")) {
                    var e = this.elements.$paragraph;
                    if (e.length) {
                        var t = e.html().replace(/&nbsp;/g, " "), n = t.match(/^ *([^ ] ?)/);
                        if (n) {
                            var i = n[1], r = i.trim();
                            if ("<" !== r) {
                                this.dropCapLetter = i, this.elements.$dropCapLetter.text(r);
                                var o = t.slice(i.length).replace(/^ */, function (e) {
                                    return new Array(e.length + 1).join("&nbsp;")
                                });
                                e.html(o).prepend(this.elements.$dropCap)
                            }
                        }
                    }
                } else this.dropCapLetter && (this.elements.$dropCap.remove(), this.elements.$paragraph.prepend(this.dropCapLetter), this.dropCapLetter = "")
            }
        }, {
            key: "onInit", value: function onInit() {
                for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                (e = (0, l.default)((0, s.default)(TextEditor.prototype), "onInit", this)).call.apply(e, [this].concat(n)), this.wrapDropCap()
            }
        }, {
            key: "onElementChange", value: function onElementChange(e) {
                "drop_cap" === e && this.wrapDropCap()
            }
        }]), TextEditor
    }(elementorModules.frontend.handlers.Base);
    t.default = function _default(e) {
        elementorFrontend.elementsHandler.addHandler(c, {$element: e})
    }
}, function (e, t, n) {
    "use strict";
    var i = n(0);
    n(2)(t, "__esModule", {value: !0}), t.default = void 0;
    var r = i(n(267)), o = i(n(494)), a = i(n(495)), s = i(n(496)), l = i(n(497));
    t.default = function _default(e) {
        (elementorFrontend.isEditMode() || e.hasClass("elementor-section-stretched")) && elementorFrontend.elementsHandler.addHandler(s.default, {$element: e}), elementorFrontend.isEditMode() && (elementorFrontend.elementsHandler.addHandler(l.default, {$element: e}), elementorFrontend.elementsHandler.addHandler(a.default, {$element: e})), elementorFrontend.elementsHandler.addHandler(o.default, {$element: e}), elementorFrontend.elementsHandler.addHandler(r.default, {$element: e})
    }
}, function (e, t, n) {
    "use strict";
    var i = n(0);
    n(2)(t, "__esModule", {value: !0}), t.default = void 0, n(98), n(89), n(26);
    var r = i(n(4)), o = i(n(5)), a = i(n(6)), s = i(n(3)), l = i(n(44)), u = i(n(7)), c = function (e) {
        function BackgroundVideo() {
            return (0, r.default)(this, BackgroundVideo), (0, a.default)(this, (0, s.default)(BackgroundVideo).apply(this, arguments))
        }

        return (0, u.default)(BackgroundVideo, e), (0, o.default)(BackgroundVideo, [{
            key: "getDefaultSettings",
            value: function getDefaultSettings() {
                return {
                    selectors: {
                        backgroundVideoContainer: ".elementor-background-video-container",
                        backgroundVideoEmbed: ".elementor-background-video-embed",
                        backgroundVideoHosted: ".elementor-background-video-hosted"
                    }
                }
            }
        }, {
            key: "getDefaultElements", value: function getDefaultElements() {
                var e = this.getSettings("selectors"),
                    t = {$backgroundVideoContainer: this.$element.find(e.backgroundVideoContainer)};
                return t.$backgroundVideoEmbed = t.$backgroundVideoContainer.children(e.backgroundVideoEmbed), t.$backgroundVideoHosted = t.$backgroundVideoContainer.children(e.backgroundVideoHosted), t
            }
        }, {
            key: "calcVideosSize", value: function calcVideosSize(e) {
                var t = "16:9";
                "vimeo" === this.videoType && (t = e[0].width + ":" + e[0].height);
                var n = this.elements.$backgroundVideoContainer.outerWidth(),
                    i = this.elements.$backgroundVideoContainer.outerHeight(), r = t.split(":"), o = r[0] / r[1],
                    a = n / i > o;
                return {width: a ? n : i * o, height: a ? n / o : i}
            }
        }, {
            key: "changeVideoSize", value: function changeVideoSize() {
                var e;
                if (("hosted" === this.videoType || this.player) && ("youtube" === this.videoType ? e = jQuery(this.player.getIframe()) : "vimeo" === this.videoType ? e = jQuery(this.player.element) : "hosted" === this.videoType && (e = this.elements.$backgroundVideoHosted), e)) {
                    var t = this.calcVideosSize(e);
                    e.width(t.width).height(t.height)
                }
            }
        }, {
            key: "startVideoLoop", value: function startVideoLoop(e) {
                var t = this;
                if (this.player.getIframe().contentWindow) {
                    var n = this.getElementSettings(), i = n.background_video_start || 0, r = n.background_video_end;
                    if (!n.background_play_once || e) {
                        if (this.player.seekTo(i), r) setTimeout(function () {
                            t.startVideoLoop(!1)
                        }, 1e3 * (r - i + 1))
                    } else this.player.stopVideo()
                }
            }
        }, {
            key: "prepareVimeoVideo", value: function prepareVimeoVideo(e, t) {
                var n = this, i = this.getElementSettings(),
                    r = i.background_video_start ? i.background_video_start : 0, o = {
                        id: t,
                        width: this.elements.$backgroundVideoContainer.outerWidth().width,
                        autoplay: !0,
                        loop: !i.background_play_once,
                        transparent: !1,
                        playsinline: !1,
                        background: !0,
                        muted: !0
                    };
                this.player = new e.Player(this.elements.$backgroundVideoContainer, o), this.handleVimeoStartEndTimes(i, r), this.player.ready().then(function () {
                    jQuery(n.player.element).addClass("elementor-background-video-embed"), n.changeVideoSize()
                })
            }
        }, {
            key: "handleVimeoStartEndTimes", value: function handleVimeoStartEndTimes(e, t) {
                var n = this;
                t && this.player.on("play", function (e) {
                    0 === e.seconds && n.player.setCurrentTime(t)
                }), this.player.on("timeupdate", function (i) {
                    e.background_video_end && e.background_video_end < i.seconds && (e.background_play_once ? n.player.pause() : n.player.setCurrentTime(t)), n.player.getDuration().then(function (r) {
                        t && !e.background_video_end && i.seconds > r - .5 && n.player.setCurrentTime(t)
                    })
                })
            }
        }, {
            key: "prepareYTVideo", value: function prepareYTVideo(e, t) {
                var n = this, i = this.elements.$backgroundVideoContainer, r = this.getElementSettings(),
                    o = e.PlayerState.PLAYING;
                window.chrome && (o = e.PlayerState.UNSTARTED), i.addClass("elementor-loading elementor-invisible"), this.player = new e.Player(this.elements.$backgroundVideoEmbed[0], {
                    videoId: t,
                    events: {
                        onReady: function onReady() {
                            n.player.mute(), n.changeVideoSize(), n.startVideoLoop(!0), n.player.playVideo()
                        }, onStateChange: function onStateChange(t) {
                            switch (t.data) {
                                case o:
                                    i.removeClass("elementor-invisible elementor-loading");
                                    break;
                                case e.PlayerState.ENDED:
                                    n.player.seekTo(r.background_video_start || 0), r.background_play_once && n.player.destroy()
                            }
                        }
                    },
                    playerVars: {controls: 0, rel: 0}
                })
            }
        }, {
            key: "activate", value: function activate() {
                var e, t = this, n = this.getElementSettings("background_video_link"),
                    i = this.getElementSettings("background_play_once");
                if (-1 !== n.indexOf("vimeo.com") ? (this.videoType = "vimeo", this.apiProvider = elementorFrontend.utils.vimeo) : n.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com)/) && (this.videoType = "youtube", this.apiProvider = elementorFrontend.utils.youtube), this.apiProvider) e = this.apiProvider.getVideoIDFromURL(n), this.apiProvider.onApiReady(function (n) {
                    "youtube" === t.videoType && t.prepareYTVideo(n, e), "vimeo" === t.videoType && t.prepareVimeoVideo(n, e)
                }); else {
                    this.videoType = "hosted";
                    var r = this.getElementSettings("background_video_start"),
                        o = this.getElementSettings("background_video_end");
                    (r || o) && (n += "#t=" + (r || 0) + (o ? "," + o : "")), this.elements.$backgroundVideoHosted.attr("src", n).one("canplay", this.changeVideoSize.bind(this)), i && this.elements.$backgroundVideoHosted.on("ended", function () {
                        t.elements.$backgroundVideoHosted.hide()
                    })
                }
                elementorFrontend.elements.$window.on("resize", this.changeVideoSize)
            }
        }, {
            key: "deactivate", value: function deactivate() {
                "youtube" === this.videoType && this.player.getIframe() || "vimeo" === this.videoType ? this.player.destroy() : this.elements.$backgroundVideoHosted.removeAttr("src").off("ended"), elementorFrontend.elements.$window.off("resize", this.changeVideoSize)
            }
        }, {
            key: "run", value: function run() {
                var e = this.getElementSettings();
                (e.background_play_on_mobile || "mobile" !== elementorFrontend.getCurrentDeviceMode()) && ("video" === e.background_background && e.background_video_link ? this.activate() : this.deactivate())
            }
        }, {
            key: "onInit", value: function onInit() {
                for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                (e = (0, l.default)((0, s.default)(BackgroundVideo.prototype), "onInit", this)).call.apply(e, [this].concat(n)), this.changeVideoSize = this.changeVideoSize.bind(this), this.run()
            }
        }, {
            key: "onElementChange", value: function onElementChange(e) {
                "background_background" === e && this.run()
            }
        }]), BackgroundVideo
    }(elementorModules.frontend.handlers.Base);
    t.default = c
}, function (e, t, n) {
    "use strict";
    var i = n(0);
    n(2)(t, "__esModule", {value: !0}), t.default = void 0, n(26);
    var r = i(n(4)), o = i(n(5)), a = i(n(6)), s = i(n(3)), l = i(n(7)), u = function (e) {
        function HandlesPosition() {
            return (0, r.default)(this, HandlesPosition), (0, a.default)(this, (0, s.default)(HandlesPosition).apply(this, arguments))
        }

        return (0, l.default)(HandlesPosition, e), (0, o.default)(HandlesPosition, [{
            key: "isFirstSection",
            value: function isFirstSection() {
                return this.$element.is(".elementor-edit-mode .elementor-top-section:first")
            }
        }, {
            key: "isOverflowHidden", value: function isOverflowHidden() {
                return "hidden" === this.$element.css("overflow")
            }
        }, {
            key: "getOffset", value: function getOffset() {
                if ("body" === elementor.config.document.container) return this.$element.offset().top;
                var e = jQuery(elementor.config.document.container);
                return this.$element.offset().top - e.offset().top
            }
        }, {
            key: "setHandlesPosition", value: function setHandlesPosition() {
                var e = this.isOverflowHidden();
                if (e || this.isFirstSection()) {
                    var t = e ? 0 : this.getOffset(),
                        n = this.$element.find("> .elementor-element-overlay > .elementor-editor-section-settings");
                    t < 25 ? (this.$element.addClass("elementor-section--handles-inside"), t < -5 ? n.css("top", -t) : n.css("top", "")) : this.$element.removeClass("elementor-section--handles-inside")
                }
            }
        }, {
            key: "onInit", value: function onInit() {
                this.setHandlesPosition(), this.$element.on("mouseenter", this.setHandlesPosition.bind(this))
            }
        }]), HandlesPosition
    }(elementorModules.frontend.handlers.Base);
    t.default = u
}, function (e, t, n) {
    "use strict";
    var i = n(0);
    n(2)(t, "__esModule", {value: !0}), t.default = void 0;
    var r = i(n(4)), o = i(n(5)), a = i(n(6)), s = i(n(3)), l = i(n(44)), u = i(n(7)), c = function (e) {
        function StretchedSection() {
            return (0, r.default)(this, StretchedSection), (0, a.default)(this, (0, s.default)(StretchedSection).apply(this, arguments))
        }

        return (0, u.default)(StretchedSection, e), (0, o.default)(StretchedSection, [{
            key: "bindEvents",
            value: function bindEvents() {
                var e = this.getUniqueHandlerID();
                elementorFrontend.addListenerOnce(e, "resize", this.stretch), elementorFrontend.addListenerOnce(e, "sticky:stick", this.stretch, this.$element), elementorFrontend.addListenerOnce(e, "sticky:unstick", this.stretch, this.$element)
            }
        }, {
            key: "unbindEvents", value: function unbindEvents() {
                elementorFrontend.removeListeners(this.getUniqueHandlerID(), "resize", this.stretch)
            }
        }, {
            key: "initStretch", value: function initStretch() {
                this.stretch = this.stretch.bind(this), this.stretchElement = new elementorModules.frontend.tools.StretchElement({
                    element: this.$element,
                    selectors: {container: this.getStretchContainer()}
                })
            }
        }, {
            key: "getStretchContainer", value: function getStretchContainer() {
                return elementorFrontend.getGeneralSettings("elementor_stretched_section_container") || window
            }
        }, {
            key: "stretch", value: function stretch() {
                this.getElementSettings("stretch_section") && this.stretchElement.stretch()
            }
        }, {
            key: "onInit", value: function onInit() {
                var e;
                this.initStretch();
                for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                (e = (0, l.default)((0, s.default)(StretchedSection.prototype), "onInit", this)).call.apply(e, [this].concat(n)), this.stretch()
            }
        }, {
            key: "onElementChange", value: function onElementChange(e) {
                "stretch_section" === e && (this.getElementSettings("stretch_section") ? this.stretch() : this.stretchElement.reset())
            }
        }, {
            key: "onGeneralSettingsChange", value: function onGeneralSettingsChange(e) {
                "elementor_stretched_section_container" in e && (this.stretchElement.setSettings("selectors.container", this.getStretchContainer()), this.stretch())
            }
        }]), StretchedSection
    }(elementorModules.frontend.handlers.Base);
    t.default = c
}, function (e, t, n) {
    "use strict";
    var i = n(0);
    n(2)(t, "__esModule", {value: !0}), t.default = void 0, n(98), n(80), n(26);
    var r = i(n(4)), o = i(n(5)), a = i(n(6)), s = i(n(3)), l = i(n(44)), u = i(n(7)), c = function (e) {
        function Shapes() {
            return (0, r.default)(this, Shapes), (0, a.default)(this, (0, s.default)(Shapes).apply(this, arguments))
        }

        return (0, u.default)(Shapes, e), (0, o.default)(Shapes, [{
            key: "getDefaultSettings",
            value: function getDefaultSettings() {
                return {
                    selectors: {container: "> .elementor-shape-%s"},
                    svgURL: elementorFrontend.config.urls.assets + "shapes/"
                }
            }
        }, {
            key: "getDefaultElements", value: function getDefaultElements() {
                var e = {}, t = this.getSettings("selectors");
                return e.$topContainer = this.$element.find(t.container.replace("%s", "top")), e.$bottomContainer = this.$element.find(t.container.replace("%s", "bottom")), e
            }
        }, {
            key: "getSvgURL", value: function getSvgURL(e, t) {
                var n = this.getSettings("svgURL") + t + ".svg";
                return elementor.config.additional_shapes && e in elementor.config.additional_shapes && (n = elementor.config.additional_shapes[e]), n
            }
        }, {
            key: "buildSVG", value: function buildSVG(e) {
                var t = "shape_divider_" + e, n = this.getElementSettings(t), i = this.elements["$" + e + "Container"];
                if (i.attr("data-shape", n), n) {
                    var r = n;
                    this.getElementSettings(t + "_negative") && (r += "-negative");
                    var o = this.getSvgURL(n, r);
                    jQuery.get(o, function (e) {
                        i.empty().append(e.childNodes[0])
                    }), this.setNegative(e)
                } else i.empty()
            }
        }, {
            key: "setNegative", value: function setNegative(e) {
                this.elements["$" + e + "Container"].attr("data-negative", !!this.getElementSettings("shape_divider_" + e + "_negative"))
            }
        }, {
            key: "onInit", value: function onInit() {
                for (var e, t = this, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                (e = (0, l.default)((0, s.default)(Shapes.prototype), "onInit", this)).call.apply(e, [this].concat(i)), ["top", "bottom"].forEach(function (e) {
                    t.getElementSettings("shape_divider_" + e) && t.buildSVG(e)
                })
            }
        }, {
            key: "onElementChange", value: function onElementChange(e) {
                var t = e.match(/^shape_divider_(top|bottom)$/);
                if (t) this.buildSVG(t[1]); else {
                    var n = e.match(/^shape_divider_(top|bottom)_negative$/);
                    n && (this.buildSVG(n[1]), this.setNegative(n[1]))
                }
            }
        }]), Shapes
    }(elementorModules.frontend.handlers.Base);
    t.default = c
}, function (e, t, n) {
    "use strict";
    var i = n(0);
    n(2)(t, "__esModule", {value: !0}), t.default = void 0;
    var r = i(n(267));
    t.default = function _default(e) {
        elementorFrontend.elementsHandler.addHandler(r.default, {$element: e})
    }
}, function (e, t, n) {
    "use strict";
    var i = n(0);
    n(2)(t, "__esModule", {value: !0}), t.default = void 0;
    var r = i(n(4)), o = i(n(5)), a = i(n(6)), s = i(n(3)), l = i(n(44)), u = i(n(7)), c = function (e) {
        function GlobalHandler() {
            return (0, r.default)(this, GlobalHandler), (0, a.default)(this, (0, s.default)(GlobalHandler).apply(this, arguments))
        }

        return (0, u.default)(GlobalHandler, e), (0, o.default)(GlobalHandler, [{
            key: "getWidgetType",
            value: function getWidgetType() {
                return "global"
            }
        }, {
            key: "animate", value: function animate() {
                var e = this.$element, t = this.getAnimation();
                if ("none" !== t) {
                    var n = this.getElementSettings(), i = n._animation_delay || n.animation_delay || 0;
                    e.removeClass(t), this.currentAnimation && e.removeClass(this.currentAnimation), this.currentAnimation = t, setTimeout(function () {
                        e.removeClass("elementor-invisible").addClass("animated " + t)
                    }, i)
                } else e.removeClass("elementor-invisible")
            }
        }, {
            key: "getAnimation", value: function getAnimation() {
                return this.getCurrentDeviceSetting("animation") || this.getCurrentDeviceSetting("_animation")
            }
        }, {
            key: "onInit", value: function onInit() {
                for (var e, t = this, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                (e = (0, l.default)((0, s.default)(GlobalHandler.prototype), "onInit", this)).call.apply(e, [this].concat(i)), this.getAnimation() && elementorFrontend.waypoint(this.$element, function () {
                    return t.animate()
                })
            }
        }, {
            key: "onElementChange", value: function onElementChange(e) {
                /^_?animation/.test(e) && this.animate()
            }
        }]), GlobalHandler
    }(elementorModules.frontend.handlers.Base);
    t.default = function _default(e) {
        elementorFrontend.elementsHandler.addHandler(c, {$element: e})
    }
}, function (e, t, n) {
    "use strict";
    e.exports = elementorModules.ViewModule.extend({
        getDefaultSettings: function getDefaultSettings() {
            return {
                scrollDuration: 500,
                selectors: {
                    links: 'a[href*="#"]',
                    targets: ".elementor-element, .elementor-menu-anchor",
                    scrollable: "html, body"
                }
            }
        }, getDefaultElements: function getDefaultElements() {
            return {$scrollable: jQuery(this.getSettings("selectors").scrollable)}
        }, bindEvents: function bindEvents() {
            elementorFrontend.elements.$document.on("click", this.getSettings("selectors.links"), this.handleAnchorLinks)
        }, handleAnchorLinks: function handleAnchorLinks(e) {
            var t, n = e.currentTarget, i = location.pathname === n.pathname;
            if (location.hostname === n.hostname && i && !(n.hash.length < 2)) {
                try {
                    t = jQuery(n.hash).filter(this.getSettings("selectors.targets"))
                } catch (e) {
                    return
                }
                if (t.length) {
                    var r = t.offset().top, o = elementorFrontend.elements.$wpAdminBar,
                        a = jQuery(".elementor-section.elementor-sticky--active");
                    o.length > 0 && (r -= o.height()), a.length > 0 && (r -= Math.max.apply(null, a.map(function () {
                        return jQuery(this).outerHeight()
                    }).get())), e.preventDefault(), r = elementorFrontend.hooks.applyFilters("frontend/handlers/menu_anchor/scroll_top_distance", r), this.elements.$scrollable.animate({scrollTop: r}, this.getSettings("scrollDuration"), "linear")
                }
            }
        }, onInit: function onInit() {
            elementorModules.ViewModule.prototype.onInit.apply(this, arguments), this.bindEvents()
        }
    })
}, function (e, t, n) {
    "use strict";
    n(26), n(161), n(98), n(80), e.exports = elementorModules.ViewModule.extend({
        oldAspectRatio: null,
        oldAnimation: null,
        swiper: null,
        player: null,
        getDefaultSettings: function getDefaultSettings() {
            return {
                classes: {
                    aspectRatio: "elementor-aspect-ratio-%s",
                    item: "elementor-lightbox-item",
                    image: "elementor-lightbox-image",
                    videoContainer: "elementor-video-container",
                    videoWrapper: "elementor-fit-aspect-ratio",
                    playButton: "elementor-custom-embed-play",
                    playButtonIcon: "fa",
                    playing: "elementor-playing",
                    hidden: "elementor-hidden",
                    invisible: "elementor-invisible",
                    preventClose: "elementor-lightbox-prevent-close",
                    slideshow: {
                        container: "swiper-container",
                        slidesWrapper: "swiper-wrapper",
                        prevButton: "elementor-swiper-button elementor-swiper-button-prev",
                        nextButton: "elementor-swiper-button elementor-swiper-button-next",
                        prevButtonIcon: "eicon-chevron-left",
                        nextButtonIcon: "eicon-chevron-right",
                        slide: "swiper-slide"
                    }
                },
                selectors: {
                    links: "a, [data-elementor-lightbox]",
                    slideshow: {
                        activeSlide: ".swiper-slide-active",
                        prevSlide: ".swiper-slide-prev",
                        nextSlide: ".swiper-slide-next"
                    }
                },
                modalOptions: {
                    id: "elementor-lightbox",
                    entranceAnimation: "zoomIn",
                    videoAspectRatio: 169,
                    position: {enable: !1}
                }
            }
        },
        getModal: function getModal() {
            return e.exports.modal || this.initModal(), e.exports.modal
        },
        initModal: function initModal() {
            var t = e.exports.modal = elementorFrontend.getDialogsManager().createWidget("lightbox", {
                className: "elementor-lightbox",
                closeButton: !0,
                closeButtonClass: "eicon-close",
                selectors: {preventClose: "." + this.getSettings("classes.preventClose")},
                hide: {onClick: !0}
            });
            t.on("hide", function () {
                t.setMessage("")
            })
        },
        showModal: function showModal(e) {
            var t = this, n = t.getDefaultSettings().modalOptions;
            t.setSettings("modalOptions", jQuery.extend(n, e.modalOptions));
            var i = t.getModal();
            switch (i.setID(t.getSettings("modalOptions.id")), i.onShow = function () {
                DialogsManager.getWidgetType("lightbox").prototype.onShow.apply(i, arguments), t.setEntranceAnimation()
            }, i.onHide = function () {
                DialogsManager.getWidgetType("lightbox").prototype.onHide.apply(i, arguments), i.getElements("message").removeClass("animated")
            }, e.type) {
                case"image":
                    t.setImageContent(e.url);
                    break;
                case"video":
                    t.setVideoContent(e);
                    break;
                case"slideshow":
                    t.setSlideshowContent(e.slideshow);
                    break;
                default:
                    t.setHTMLContent(e.html)
            }
            i.show()
        },
        setHTMLContent: function setHTMLContent(e) {
            this.getModal().setMessage(e)
        },
        setImageContent: function setImageContent(e) {
            var t = this.getSettings("classes"),
                n = jQuery("<div>", {class: "".concat(t.item, " ").concat(t.preventClose)}),
                i = jQuery("<img>", {src: e, class: t.image});
            n.append(i), this.getModal().setMessage(n)
        },
        setVideoContent: function setVideoContent(e) {
            var t, n = this.getSettings("classes"),
                i = jQuery("<div>", {class: "".concat(n.videoContainer, " ").concat(n.preventClose)}),
                r = jQuery("<div>", {class: n.videoWrapper}), o = this.getModal();
            if ("hosted" === e.videoType) {
                var a = jQuery.extend({src: e.url, autoplay: ""}, e.videoParams);
                t = jQuery("<video>", a)
            } else {
                var s = e.url.replace("&autoplay=0", "") + "&autoplay=1";
                t = jQuery("<iframe>", {src: s, allowfullscreen: 1})
            }
            i.append(r), r.append(t), o.setMessage(i), this.setVideoAspectRatio();
            var l = o.onHide;
            o.onHide = function () {
                l(), o.getElements("message").removeClass("elementor-fit-aspect-ratio")
            }
        },
        setSlideshowContent: function setSlideshowContent(e) {
            var t = jQuery, n = this, i = n.getSettings("classes"), r = i.slideshow,
                o = t("<div>", {class: r.container}), a = t("<div>", {class: r.slidesWrapper}),
                s = t("<div>", {class: r.prevButton + " " + i.preventClose}).html(t("<i>", {class: r.prevButtonIcon})),
                l = t("<div>", {class: r.nextButton + " " + i.preventClose}).html(t("<i>", {class: r.nextButtonIcon}));
            e.slides.forEach(function (e) {
                var n = r.slide + " " + i.item;
                e.video && (n += " " + i.video);
                var o = t("<div>", {class: n});
                if (e.video) {
                    o.attr("data-elementor-slideshow-video", e.video);
                    var s = t("<div>", {class: i.playButton}).html(t("<i>", {class: i.playButtonIcon}));
                    o.append(s)
                } else {
                    var l = t("<div>", {class: "swiper-zoom-container"}),
                        u = t("<img>", {class: i.image + " " + i.preventClose, src: e.image});
                    l.append(u), o.append(l)
                }
                a.append(o)
            }), o.append(a, s, l);
            var u = n.getModal();
            u.setMessage(o);
            var c = u.onShow;
            u.onShow = function () {
                c();
                var i = {
                    navigation: {prevEl: s, nextEl: l},
                    pagination: {clickable: !0},
                    on: {slideChangeTransitionEnd: n.onSlideChange},
                    grabCursor: !0,
                    runCallbacksOnInit: !1,
                    loop: !0,
                    keyboard: !0
                };
                e.swiper && t.extend(i, e.swiper), n.swiper = new Swiper(o, i), n.setVideoAspectRatio(), n.playSlideVideo()
            }
        },
        setVideoAspectRatio: function setVideoAspectRatio(e) {
            e = e || this.getSettings("modalOptions.videoAspectRatio");
            var t = this.getModal().getElements("widgetContent"), n = this.oldAspectRatio,
                i = this.getSettings("classes.aspectRatio");
            this.oldAspectRatio = e, n && t.removeClass(i.replace("%s", n)), e && t.addClass(i.replace("%s", e))
        },
        getSlide: function getSlide(e) {
            return jQuery(this.swiper.slides).filter(this.getSettings("selectors.slideshow." + e + "Slide"))
        },
        playSlideVideo: function playSlideVideo() {
            var e = this, t = this.getSlide("active"), n = t.data("elementor-slideshow-video");
            if (n) {
                var i, r, o = this.getSettings("classes"),
                    a = jQuery("<div>", {class: o.videoContainer + " " + o.invisible}),
                    s = jQuery("<div>", {class: o.videoWrapper}), l = t.children("." + o.playButton);
                a.append(s), t.append(a), -1 !== n.indexOf("vimeo.com") ? (i = "vimeo", r = elementorFrontend.utils.vimeo) : n.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com)/) && (i = "youtube", r = elementorFrontend.utils.youtube);
                var u = r.getVideoIDFromURL(n);
                r.onApiReady(function (t) {
                    "youtube" === i ? e.prepareYTVideo(t, u, a, s, l) : "vimeo" === i && e.prepareVimeoVideo(t, u, a, s, l)
                }), l.addClass(o.playing).removeClass(o.hidden)
            }
        },
        prepareYTVideo: function prepareYTVideo(e, t, n, i, r) {
            var o = this, a = this.getSettings("classes"), s = jQuery("<div>"), l = e.PlayerState.PLAYING;
            i.append(s), window.chrome && (l = e.PlayerState.UNSTARTED), n.addClass("elementor-loading " + a.invisible), this.player = new e.Player(s[0], {
                videoId: t,
                events: {
                    onReady: function onReady() {
                        r.addClass(a.hidden), n.removeClass(a.invisible), o.player.playVideo()
                    }, onStateChange: function onStateChange(e) {
                        e.data === l && n.removeClass("elementor-loading " + a.invisible)
                    }
                },
                playerVars: {controls: 0, rel: 0}
            })
        },
        prepareVimeoVideo: function prepareVimeoVideo(e, t, n, i, r) {
            var o = this.getSettings("classes"), a = {id: t, autoplay: !0, transparent: !1, playsinline: !1};
            this.player = new e.Player(i, a), this.player.ready().then(function () {
                r.addClass(o.hidden), n.removeClass(o.invisible)
            })
        },
        setEntranceAnimation: function setEntranceAnimation(e) {
            e = e || elementorFrontend.getCurrentDeviceSetting(this.getSettings("modalOptions"), "entranceAnimation");
            var t = this.getModal().getElements("message");
            this.oldAnimation && t.removeClass(this.oldAnimation), this.oldAnimation = e, e && t.addClass("animated " + e)
        },
        isLightboxLink: function isLightboxLink(e) {
            if ("A" === e.tagName && (e.hasAttribute("download") || !/\.(png|jpe?g|gif|svg)(\?.*)?$/i.test(e.href))) return !1;
            var t = elementorFrontend.getGeneralSettings("elementor_global_image_lightbox"),
                n = e.dataset.elementorOpenLightbox;
            return "yes" === n || t && "no" !== n
        },
        openLink: function openLink(e) {
            var t = e.currentTarget, n = jQuery(e.target), i = elementorFrontend.isEditMode(),
                r = !!n.closest("#elementor").length;
            if (this.isLightboxLink(t)) {
                if (e.preventDefault(), !i || elementorFrontend.getGeneralSettings("elementor_enable_lightbox_in_editor")) {
                    var o = {};
                    if (t.dataset.elementorLightbox && (o = JSON.parse(t.dataset.elementorLightbox)), o.type && "slideshow" !== o.type) this.showModal(o); else if (t.dataset.elementorLightboxSlideshow) {
                        var a = t.dataset.elementorLightboxSlideshow,
                            s = jQuery(this.getSettings("selectors.links")).filter(function () {
                                var e = jQuery(this);
                                return a === this.dataset.elementorLightboxSlideshow && !e.parent(".swiper-slide-duplicate").length && !e.parents(".slick-cloned").length
                            }), l = [];
                        s.each(function () {
                            var e = this.dataset.elementorLightboxVideo, t = this.dataset.elementorLightboxIndex;
                            void 0 === t && (t = s.index(this));
                            var n = {image: this.href, index: t};
                            e && (n.video = e), l.push(n)
                        }), l.sort(function (e, t) {
                            return e.index - t.index
                        });
                        var u = t.dataset.elementorLightboxIndex;
                        void 0 === u && (u = s.index(t)), this.showModal({
                            type: "slideshow",
                            modalOptions: {id: "elementor-lightbox-slideshow-" + a},
                            slideshow: {slides: l, swiper: {initialSlide: +u}}
                        })
                    } else this.showModal({type: "image", url: t.href})
                }
            } else i && r && e.preventDefault()
        },
        bindEvents: function bindEvents() {
            elementorFrontend.elements.$document.on("click", this.getSettings("selectors.links"), this.openLink)
        },
        onSlideChange: function onSlideChange() {
            this.getSlide("prev").add(this.getSlide("next")).add(this.getSlide("active")).find("." + this.getSettings("classes.videoWrapper")).remove(), this.playSlideVideo()
        }
    })
}]);
!function (h, r, o) {
    "use strict";
    var c = {
        init: function () {
            var e = {
                "jet-nav-menu.default": c.navMenu,
                "jet-search.default": c.searchBox,
                "jet-auth-links.default": c.authLinks,
                "jet-hamburger-panel.default": c.hamburgerPanel,
                "jet-blocks-cart.default": c.refreshCart
            };
            h.each(e, function (e, t) {
                r.hooks.addAction("frontend/element_ready/" + e, t)
            }), h(document).on("click.jetBlocks", ".jet-search__popup-trigger", c.searchPopupSwitch).on("click.jetBlocks", ".jet-search__popup-close", c.searchPopupSwitch), r.hooks.addAction("frontend/element_ready/section", c.setStickySection), h(document).on("ready", c.stickySection)
        },
        refreshCart: function (e) {
            if (o && window.JetBlocksEditor && window.JetBlocksEditor.activeSection) {
                var t = window.JetBlocksEditor.activeSection;
                -1 !== ["cart_list_style", "cart_list_items_style", "cart_buttons_style"].indexOf(t) ? e.find(".jet-blocks-cart").addClass("jet-cart-hover") : e.find(".jet-blocks-cart").removeClass("jet-cart-hover"), h(".widget_shopping_cart_content").empty(), h(document.body).trigger("wc_fragment_refresh")
            }
        },
        navMenu: function (l) {
            if (!l.data("initialized")) {
                l.data("initialized", !0);
                var s, d = "jet-nav-hover", n = "jet-nav-hover-out", u = "jet-mobile-menu-active";
                l.find(".jet-nav:not(.jet-nav--vertical-sub-bottom)").hoverIntent({
                    over: function () {
                        h(this).addClass(d)
                    }, out: function () {
                        var e = h(this);
                        e.removeClass(d), e.addClass(n), setTimeout(function () {
                            e.removeClass(n)
                        }, 200)
                    }, timeout: 200, selector: ".menu-item-has-children"
                }), c.mobileAndTabletCheck() ? (l.find(".jet-nav:not(.jet-nav--vertical-sub-bottom)").on("touchstart.jetNavMenu", ".menu-item > a", function (e) {
                    var t = h(e.currentTarget).closest(".menu-item");
                    t.data("offset", h(window).scrollTop()), t.data("elemOffset", t.offset().top)
                }), l.find(".jet-nav:not(.jet-nav--vertical-sub-bottom)").on("touchend.jetNavMenu", ".menu-item > a", function (e) {
                    var t, i, n, o, s, a, c, r;
                    if (e.preventDefault(), o = h(e.currentTarget), t = o.closest(".menu-item"), i = t.siblings(".menu-item.menu-item-has-children"), n = h("> a", t), s = h(".jet-nav__sub:first", t), a = t.data("offset"), c = t.data("elemOffset"), r = t.closest(".jet-hamburger-panel"), a !== h(window).scrollTop() || c !== t.offset().top) return !1;
                    i[0] && (i.removeClass(d), h(".menu-item-has-children", i).removeClass(d));
                    if (!h(".jet-nav__sub", t)[0] || t.hasClass(d)) return n.trigger("click"), window.location.href = n.attr("href"), l.find(".jet-nav-wrap").hasClass(u) && l.find(".jet-nav-wrap").removeClass(u), r[0] && r.hasClass("open-state") && (r.removeClass("open-state"), h("html").removeClass("jet-hamburger-panel-visible")), !1;
                    s[0] && t.addClass(d)
                }), h(document).on("touchstart.jetNavMenu", function (e) {
                    s = h(window).scrollTop()
                }), h(document).on("touchend.jetNavMenu", t)) : l.find(".jet-nav:not(.jet-nav--vertical-sub-bottom)").on("click.jetNavMenu", ".menu-item > a", function (e) {
                    var t = h(e.currentTarget).closest(".menu-item"), i = t.closest(".jet-hamburger-panel");
                    t.hasClass("menu-item-has-children") && !t.hasClass(d) || i[0] && i.hasClass("open-state") && (i.removeClass("open-state"), h("html").removeClass("jet-hamburger-panel-visible"))
                }), l.find(".jet-nav--vertical-sub-bottom").on("click.jetNavMenu", ".menu-item > a", function (e) {
                    var t = h(e.currentTarget).closest(".menu-item"),
                        i = t.siblings(".menu-item.menu-item-has-children"), n = h(".jet-nav__sub:first", t),
                        o = t.closest(".jet-hamburger-panel");
                    if (!t.hasClass("menu-item-has-children") || t.hasClass(d)) return l.find(".jet-nav-wrap").hasClass(u) && l.find(".jet-nav-wrap").removeClass(u), void (o[0] && o.hasClass("open-state") && (o.removeClass("open-state"), h("html").removeClass("jet-hamburger-panel-visible")));
                    e.preventDefault(), e.stopPropagation(), i[0] && (i.removeClass(d), h(".menu-item-has-children", i).removeClass(d), h(".jet-nav__sub", i).slideUp(200));
                    n[0] && (n.slideDown(200), t.addClass(d))
                }), h(document).on("click.jetNavMenu", function (e) {
                    if (!l.find(".jet-nav").hasClass("jet-nav--vertical-sub-bottom")) return;
                    t(e)
                }), h(".jet-nav__mobile-trigger", l).on("click.jetNavMenu", function (e) {
                    h(this).closest(".jet-nav-wrap").toggleClass(u)
                }), "ontouchend" in window ? h(document).on("touchend.jetMobileNavMenu", e) : h(document).on("click.jetMobileNavMenu", e), h(".jet-nav__mobile-close-btn", l).on("click.jetMobileNavMenu", function (e) {
                    h(this).closest(".jet-nav-wrap").removeClass(u)
                });
                var i = !1;
                o(), h(window).on("resize.jetMobileNavMenu", o), c.isEditMode() && l.data("initialized", !1)
            }

            function t(e) {
                var t = l.find(".jet-nav");
                if (("touchend" !== e.type || s === h(window).scrollTop()) && !h(e.target).closest(t).length) {
                    var i = h(".menu-item-has-children." + d, t);
                    i[0] && (i.removeClass(d), i.addClass(n), setTimeout(function () {
                        i.removeClass(n)
                    }, 200), t.hasClass("jet-nav--vertical-sub-bottom") && h(".jet-nav__sub", i).slideUp(200), e.stopPropagation())
                }
            }

            function e(e) {
                var t = l.find(".jet-nav-wrap").data("mobile-layout"), i = l.find(".jet-nav-wrap"),
                    n = l.find(".jet-nav__mobile-trigger"), o = l.find(".jet-nav");
                "left-side" !== t && "right-side" !== t || "touchend" === e.type && s !== h(window).scrollTop() || h(e.target).closest(n).length || h(e.target).closest(o).length || i.hasClass(u) && (i.removeClass(u), e.stopPropagation())
            }

            function o() {
                if ("full-width" === l.find(".jet-nav-wrap").data("mobile-layout")) {
                    var e = l.find(".jet-nav");
                    if ("mobile" === r.getCurrentDeviceMode()) {
                        i && e.css({left: ""});
                        var t = -e.offset().left;
                        e.css({left: t}), i = !0
                    } else i && (e.css({left: ""}), i = !1)
                }
            }
        },
        searchBox: function (a) {
            c.onSearchSectionActivated(a), h(document).on("click.jetBlocks", function (e) {
                var t = a.find(".jet-search"), i = h(".jet-search__popup-trigger", t),
                    n = h(".jet-search__popup-content", t), o = "jet-search-popup-active", s = "jet-transition-out";
                h(e.target).closest(i).length || h(e.target).closest(n).length || t.hasClass(o) && (t.removeClass(o), t.addClass(s), setTimeout(function () {
                    t.removeClass(s)
                }, 300), e.stopPropagation())
            })
        },
        onSearchSectionActivated: function (e) {
            if (o && window.JetBlocksEditor && window.JetBlocksEditor.activeSection) {
                var t = window.JetBlocksEditor.activeSection;
                -1 !== ["section_popup_style", "section_popup_close_style", "section_form_style"].indexOf(t) ? e.find(".jet-search").addClass("jet-search-popup-active") : e.find(".jet-search").removeClass("jet-search-popup-active")
            }
        },
        authLinks: function (e) {
            if (o && window.JetBlocksEditor) {
                if (!window.JetBlocksEditor.activeSection) return e.find(".jet-auth-links__logout").css("display", "none"), void e.find(".jet-auth-links__registered").css("display", "none");
                var t = window.JetBlocksEditor.activeSection,
                    i = -1 !== ["section_logout_link", "section_logout_link_style"].indexOf(t),
                    n = -1 !== ["section_registered_link", "section_registered_link_style"].indexOf(t);
                i ? e.find(".jet-auth-links__login").css("display", "none") : e.find(".jet-auth-links__logout").css("display", "none"), n ? e.find(".jet-auth-links__register").css("display", "none") : e.find(".jet-auth-links__registered").css("display", "none")
            }
        },
        hamburgerPanel: function (e) {
            var t, i, n = h(".jet-hamburger-panel", e), o = h(".jet-hamburger-panel__toggle", e),
                s = (h(".jet-hamburger-panel__cover", e), h(".jet-hamburger-panel__inner", e)),
                a = h(".jet-hamburger-panel__close-button", e), c = (Boolean(r.isEditMode()), h("html"));
            "ontouchend" in window || "ontouchstart" in window ? (o.on("touchstart", function (e) {
                t = h(window).scrollTop()
            }), o.on("touchend", function (e) {
                if (t !== h(window).scrollTop()) return !1;
                i && clearTimeout(i), n.hasClass("open-state") ? (n.removeClass("open-state"), c.removeClass("jet-hamburger-panel-visible")) : (i = setTimeout(function () {
                    n.addClass("open-state")
                }, 10), c.addClass("jet-hamburger-panel-visible"))
            })) : o.on("click", function (e) {
                n.hasClass("open-state") ? (n.removeClass("open-state"), c.removeClass("jet-hamburger-panel-visible")) : (n.addClass("open-state"), c.addClass("jet-hamburger-panel-visible"))
            }), a.on("click", function (e) {
                n.hasClass("open-state") ? (n.removeClass("open-state"), c.removeClass("jet-hamburger-panel-visible")) : (n.addClass("open-state"), c.addClass("jet-hamburger-panel-visible"))
            }), h(document).on("click.JetHamburgerPanel", function (e) {
                h(e.target).closest(o).length || h(e.target).closest(s).length || n.hasClass("open-state") && (n.removeClass("open-state"), h(e.target).closest(".jet-hamburger-panel__toggle").length || c.removeClass("jet-hamburger-panel-visible"), e.stopPropagation())
            })
        },
        searchPopupSwitch: function (e) {
            var t = h(this).closest(".jet-search"), i = h(".jet-search__field", t), n = "jet-search-popup-active",
                o = "jet-transition-in", s = "jet-transition-out";
            t.hasClass(n) ? (t.removeClass(n), t.addClass(s), setTimeout(function () {
                t.removeClass(s)
            }, 300)) : (t.addClass(o), setTimeout(function () {
                t.removeClass(o), t.addClass(n)
            }, 300), i.focus())
        },
        stickySection: function () {
            ({
                isEditMode: Boolean(r.isEditMode()),
                correctionSelector: h("#wpadminbar"),
                initDesktop: !1,
                initTablet: !1,
                initMobile: !1,
                init: function () {
                    this.isEditMode || (this.run(), h(window).on("resize.JetStickySection orientationchange.JetStickySection", this.run.bind(this)))
                },
                getOffset: function () {
                    var e = 0;
                    return this.correctionSelector[0] && "fixed" === this.correctionSelector.css("position") && (e = this.correctionSelector.outerHeight(!0)), e
                },
                run: function () {
                    var e = r.getCurrentDeviceMode(), i = "jet-sticky-transition-in", n = "jet-sticky-transition-out",
                        o = {stickyClass: "jet-sticky-section--stuck", topSpacing: this.getOffset()};

                    function s(e, t) {
                        e.jetStickySection(t).on("jetStickySection:stick", function (e) {
                            h(e.target).addClass(i), setTimeout(function () {
                                h(e.target).removeClass(i)
                            }, 3e3)
                        }).on("jetStickySection:unstick", function (e) {
                            h(e.target).addClass(n), setTimeout(function () {
                                h(e.target).removeClass(n)
                            }, 3e3)
                        }), e.trigger("jetStickySection:activated")
                    }

                    "desktop" !== e || this.initDesktop || (this.initTablet && (c.getStickySectionsTablet.forEach(function (e, t) {
                        e.trigger("jetStickySection:detach")
                    }), this.initTablet = !1), this.initMobile && (c.getStickySectionsMobile.forEach(function (e, t) {
                        e.trigger("jetStickySection:detach")
                    }), this.initMobile = !1), c.getStickySectionsDesktop[0] && (c.getStickySectionsDesktop.forEach(function (e, t) {
                        c.getStickySectionsDesktop[t + 1] ? o.stopper = c.getStickySectionsDesktop[t + 1] : o.stopper = "", s(e, o)
                    }), this.initDesktop = !0)), "tablet" !== e || this.initTablet || (this.initDesktop && (c.getStickySectionsDesktop.forEach(function (e, t) {
                        e.trigger("jetStickySection:detach")
                    }), this.initDesktop = !1), this.initMobile && (c.getStickySectionsMobile.forEach(function (e, t) {
                        e.trigger("jetStickySection:detach")
                    }), this.initMobile = !1), c.getStickySectionsTablet[0] && (c.getStickySectionsTablet.forEach(function (e, t) {
                        c.getStickySectionsTablet[t + 1] ? o.stopper = c.getStickySectionsTablet[t + 1] : o.stopper = "", s(e, o)
                    }), this.initTablet = !0)), "mobile" !== e || this.initMobile || (this.initDesktop && (c.getStickySectionsDesktop.forEach(function (e, t) {
                        e.trigger("jetStickySection:detach")
                    }), this.initDesktop = !1), this.initTablet && (c.getStickySectionsTablet.forEach(function (e, t) {
                        e.trigger("jetStickySection:detach")
                    }), this.initTablet = !1), c.getStickySectionsMobile[0] && (c.getStickySectionsMobile.forEach(function (e, t) {
                        c.getStickySectionsMobile[t + 1] ? o.stopper = c.getStickySectionsMobile[t + 1] : o.stopper = "", s(e, o)
                    }), this.initMobile = !0))
                }
            }).init()
        },
        getStickySectionsDesktop: [],
        getStickySectionsTablet: [],
        getStickySectionsMobile: [],
        setStickySection: function (t) {
            ({
                target: t, isEditMode: Boolean(r.isEditMode()), init: function () {
                    if (!this.isEditMode && "yes" === this.getSectionSetting("jet_sticky_section")) {
                        var e = this.getSectionSetting("jet_sticky_section_visibility") || [];
                        if (!e[0]) return;
                        -1 !== e.indexOf("desktop") && c.getStickySectionsDesktop.push(t), -1 !== e.indexOf("tablet") && c.getStickySectionsTablet.push(t), -1 !== e.indexOf("mobile") && c.getStickySectionsMobile.push(t)
                    }
                }, getSectionSetting: function (e) {
                    var t = {};
                    if (Boolean(r.isEditMode())) {
                        if (!r.hasOwnProperty("config")) return;
                        if (!r.config.hasOwnProperty("elements")) return;
                        if (!r.config.elements.hasOwnProperty("data")) return;
                        var i = this.target.data("model-cid"), n = r.config.elements.data[i];
                        if (!n) return;
                        if (!n.hasOwnProperty("attributes")) return;
                        t = n.attributes || {}
                    } else t = this.target.data("settings") || {};
                    if (t[e]) return t[e]
                }
            }).init()
        },
        mobileAndTabletCheck: function () {
            var e, t = !1;
            return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0), t
        },
        isEditMode: function () {
            return Boolean(r.isEditMode())
        }
    };
    h(window).on("elementor/frontend/init", c.init)
}(jQuery, window.elementorFrontend, window.elementor);
!function (j, f) {
    "use strict";
    var u = {
        init: function () {
            var e = {
                "jet-carousel.default": u.widgetCarousel,
                "jet-circle-progress.default": u.widgetProgress,
                "jet-map.default": u.widgetMap,
                "jet-countdown-timer.default": u.widgetCountdown,
                "jet-posts.default": u.widgetPosts,
                "jet-animated-text.default": u.widgetAnimatedText,
                "jet-animated-box.default": u.widgetAnimatedBox,
                "jet-images-layout.default": u.widgetImagesLayout,
                "jet-slider.default": u.widgetSlider,
                "jet-testimonials.default": u.widgetTestimonials,
                "jet-image-comparison.default": u.widgetImageComparison,
                "jet-instagram-gallery.default": u.widgetInstagramGallery,
                "jet-scroll-navigation.default": u.widgetScrollNavigation,
                "jet-subscribe-form.default": u.widgetSubscribeForm,
                "jet-progress-bar.default": u.widgetProgressBar,
                "jet-portfolio.default": u.widgetPortfolio,
                "jet-timeline.default": u.widgetTimeLine,
                "jet-table.default": u.widgetTable,
                "jet-dropbar.default": u.widgetDropbar,
                "jet-video.default": u.widgetVideo,
                "jet-audio.default": u.widgetAudio,
                "jet-horizontal-timeline.default": u.widgetHorizontalTimeline,
                "mp-timetable.default": u.widgetTimeTable,
                "jet-pie-chart.default": u.widgetPieChart
            };
            j.each(e, function (e, t) {
                f.hooks.addAction("frontend/element_ready/" + e, t)
            }), f.hooks.addAction("frontend/element_ready/section", u.elementorSection)
        }, widgetCountdown: function (s) {
            var a, n = s.find(".jet-countdown-timer"), t = n.data("type"), o = null, i = n.data("due-date"),
                r = n.data("start-date"), e = n.data("expire-actions"), l = n.data("evergreen-interval"),
                d = n.data("restart-interval"), c = {
                    days: n.find('[data-value="days"]'),
                    hours: n.find('[data-value="hours"]'),
                    minutes: n.find('[data-value="minutes"]'),
                    seconds: n.find('[data-value="seconds"]')
                };
            u.widgetCountdown.initClock = function () {
                switch (t) {
                    case"due_date":
                        o = new Date(1e3 * i);
                        break;
                    case"evergreen":
                        0 < l && (o = u.widgetCountdown.getEvergreenDate());
                        break;
                    case"endless":
                        var e = new Date;
                        new Date(1e3 * r) < e && (o = new Date(1e3 * (r + d))), o && o < e && (o = o.setSeconds(o.getSeconds() + (Math.floor((e - o) / (1e3 * d)) + 1) * d))
                }
                u.widgetCountdown.updateClock(), a = setInterval(u.widgetCountdown.updateClock, 1e3)
            }, u.widgetCountdown.updateClock = function () {
                if (o) {
                    var e = u.widgetCountdown.getTimeRemaining(o);
                    j.each(e.parts, function (e) {
                        var t = c[e];
                        t.length && t.html(this)
                    }), e.total <= 0 && (clearInterval(a), u.widgetCountdown.runActions())
                }
            }, u.widgetCountdown.splitNum = function (e) {
                e = e.toString();
                var t, i = "";
                return 1 === e.length && (e = 0 + e), t = e.match(/\d{1}/g), j.each(t, function (e, t) {
                    i += '<span class="jet-countdown-timer__digit">' + t + "</span>"
                }), i
            }, u.widgetCountdown.getTimeRemaining = function (e) {
                var t = e - new Date, i = Math.floor(t / 1e3 % 60), a = Math.floor(t / 1e3 / 60 % 60),
                    n = Math.floor(t / 36e5 % 24), o = Math.floor(t / 864e5);
                return (o < 0 || n < 0 || a < 0) && (i = a = n = o = 0), {
                    total: t,
                    parts: {
                        days: u.widgetCountdown.splitNum(o),
                        hours: u.widgetCountdown.splitNum(n),
                        minutes: u.widgetCountdown.splitNum(a),
                        seconds: u.widgetCountdown.splitNum(i)
                    }
                }
            }, u.widgetCountdown.runActions = function () {
                s.trigger("jetCountdownTimerExpire", s), e && j.each(e, function (e, t) {
                    switch (t) {
                        case"redirect":
                            var i = n.data("expire-redirect-url");
                            i && (window.location.href = i);
                            break;
                        case"message":
                            s.find(".jet-countdown-timer-message").show();
                            break;
                        case"hide":
                            n.hide();
                            break;
                        case"restart":
                            o = (o = new Date).setSeconds(o.getSeconds() + d), u.widgetCountdown.updateClock(), a = setInterval(u.widgetCountdown.updateClock, 1e3)
                    }
                })
            }, u.widgetCountdown.getEvergreenDate = function () {
                function e() {
                    var e = new Date, t = e.setSeconds(e.getSeconds() + l);
                    return localStorage.setItem(i, t), localStorage.setItem(a, l), t
                }

                var t = s.data("id"), i = "jet_evergreen_countdown_due_date_" + t,
                    a = "jet_evergreen_countdown_interval_" + t, n = localStorage.getItem(i),
                    o = localStorage.getItem(a);
                return null === n && null === o ? e() : null !== n && l !== parseInt(o, 10) ? e() : 0 < n && parseInt(o, 10) === l ? n : void 0
            }, u.widgetCountdown.initClock()
        }, widgetMap: function (e) {
            var o, t, i, a = e.find(".jet-map");
            window.google && a.length && (t = a.data("init"), i = a.data("pins"), o = new google.maps.Map(a[0], t), i && j.each(i, function (e, t) {
                var i, a, n = {position: t.position, map: o};
                "" !== t.image && (n.icon = t.image), i = new google.maps.Marker(n), "" !== t.desc && (a = new google.maps.InfoWindow({
                    content: t.desc,
                    disableAutoPan: !0
                })), i.addListener("click", function () {
                    a.setOptions({disableAutoPan: !1}), a.open(o, i)
                }), "visible" === t.state && "" !== t.desc && a.open(o, i)
            }))
        }, widgetProgress: function (n) {
            var l = n.find(".circle-progress");
            if (l.length) {
                var d = l.find(".circle-progress__value"), c = l.find(".circle-progress__meter"),
                    u = parseInt(d.data("value")) / 100, o = n.find(".circle-progress-wrap").data("duration"),
                    e = l.data("responsive-sizes"), t = e.desktop, i = e.tablet, a = e.mobile,
                    s = elementorFrontend.getCurrentDeviceMode(), r = s, m = !1;
                "tablet" === s && g(i.size, i.viewBox, i.center, i.radius, i.valStroke, i.bgStroke, i.circumference), "mobile" === s && g(a.size, a.viewBox, a.center, a.radius, a.valStroke, a.bgStroke, a.circumference), elementorFrontend.waypoint(n, function () {
                    var e = n.find(".circle-counter__number"), t = e.data(), i = t.toValue.toString().match(/\.(.*)/);
                    i && (t.rounding = i[1].length), t.duration = o, e.numerator(t);
                    var a = parseInt(l.data("circumference")) * (1 - u);
                    d.css({transitionDuration: o + "ms", strokeDashoffset: a}), m = !0
                }, {offset: "bottom-in-view"}), j(window).on("resize.jetCircleProgress orientationchange.jetCircleProgress", function (e) {
                    "desktop" === (s = elementorFrontend.getCurrentDeviceMode()) && "desktop" !== r && (g(t.size, t.viewBox, t.center, t.radius, t.valStroke, t.bgStroke, t.circumference), r = "desktop");
                    "tablet" === s && "tablet" !== r && (g(i.size, i.viewBox, i.center, i.radius, i.valStroke, i.bgStroke, i.circumference), r = "tablet");
                    "mobile" === s && "mobile" !== r && (g(a.size, a.viewBox, a.center, a.radius, a.valStroke, a.bgStroke, a.circumference), r = "mobile")
                })
            }

            function g(e, t, i, a, n, o, s) {
                var r = s * (1 - u);
                l.attr({
                    width: e,
                    height: e,
                    "data-radius": a,
                    "data-circumference": s
                }), l[0].setAttribute("viewBox", t), c.attr({
                    cx: i,
                    cy: i,
                    r: a,
                    "stroke-width": o
                }), m && d.css({transitionDuration: ""}), d.attr({
                    cx: i,
                    cy: i,
                    r: a,
                    "stroke-width": n
                }), d.css({strokeDasharray: s, strokeDashoffset: m ? r : s})
            }
        }, widgetCarousel: function (e) {
            var t = e.find(".jet-carousel");
            t.length && u.initCarousel(t.find(".elementor-slick-slider"), t.data("slider_options"))
        }, widgetPosts: function (e) {
            var t = e.find(".jet-carousel"), i = t.data("slider_options");
            t.length && (i.slide = ".jet-posts__item", u.initCarousel(t.find(".jet-posts"), i))
        }, widgetAnimatedText: function (e) {
            var t, i = e.find(".jet-animated-text");
            i.length && (t = i.data("settings"), new jetAnimatedText(i, t).init())
        }, widgetAnimatedBox: function (e) {
            u.onAnimatedBoxSectionActivated(e);
            var t = e.find(".jet-animated-box"), i = t.data("settings"),
                a = (i = j.extend({}, {switchEventType: "hover"}, i), j(window).scrollTop()), n = !0;
            if (t.length) switch (i.switchEventType) {
                case"hover":
                    "ontouchend" in window || "ontouchstart" in window ? (t.on("touchstart", function (e) {
                        a = j(window).scrollTop()
                    }), t.on("touchend", function (e) {
                        if (a !== j(window).scrollTop()) return !1;
                        j(this).hasClass("flipped-stop") || j(this).toggleClass("flipped")
                    }), j(document).on("touchend", function (e) {
                        j(e.target).closest(t).length || t.hasClass("flipped-stop") || t.hasClass("flipped") && t.removeClass("flipped")
                    })) : t.on("mouseenter mouseleave", function (e) {
                        n && "mouseleave" === e.type || (n && "mouseenter" === e.type && (n = !1), j(this).hasClass("flipped-stop") || j(this).toggleClass("flipped"))
                    });
                    break;
                case"click":
                    t.on("click", function (e) {
                        t.hasClass("flipped-stop") || t.toggleClass("flipped")
                    });
                    break;
                case"toggle":
                    t.on("click", ".jet-animated-box__toggle", function (e) {
                        t.hasClass("flipped-stop") || t.toggleClass("flipped")
                    })
            }
        }, onAnimatedBoxSectionActivated: function (e) {
            if (window.elementor && window.JetElementsEditor && window.JetElementsEditor.activeSection) {
                var t = window.JetElementsEditor.activeSection;
                -1 !== ["section_back_content", "section_action_button_style"].indexOf(t) ? (e.find(".jet-animated-box").addClass("flipped"), e.find(".jet-animated-box").addClass("flipped-stop")) : (e.find(".jet-animated-box").removeClass("flipped"), e.find(".jet-animated-box").removeClass("flipped-stop"))
            }
        }, widgetImagesLayout: function (e) {
            var t, i = e.find(".jet-images-layout");
            i.length && (t = i.data("settings"), new jetImagesLayout(i, t).init())
        }, widgetPortfolio: function (e) {
            var t, i = e.find(".jet-portfolio");
            i.length && (t = i.data("settings"), new jetPortfolio(i, t).init())
        }, widgetInstagramGallery: function (e) {
            var t, i, a = e.find(".jet-instagram-gallery__instance");
            a.length && (i = a.data("settings"), t = {
                layoutType: "masonry",
                columns: 3,
                columnsTablet: 2,
                columnsMobile: 1
            }, j.extend(t, i), "masonry" === i.layoutType && salvattore.init())
        }, widgetScrollNavigation: function (e) {
            var t = e.find(".jet-scroll-navigation"), i = t.data("settings");
            new jetScrollNavigation(t, i).init()
        }, widgetSubscribeForm: function (e) {
            var n = e.find(".jet-subscribe-form"), o = e.data("id"), s = n.data("settings"), r = null, l = !1,
                d = j(".jet-subscribe-form__form", n),
                c = (j(".jet-subscribe-form__fields", n), j(".jet-subscribe-form__mail-field", n)),
                u = c.data("instance-data"), m = j(".jet-subscribe-form__submit", n),
                g = j(".jet-subscribe-form__message", n),
                p = window.jetElements.messages.invalidMail || "Please specify a valid email";

            function t() {
                var e = c.val(), i = {
                    email: e,
                    use_target_list_id: s.use_target_list_id || !1,
                    target_list_id: s.target_list_id || "",
                    data: u
                }, t = d.serializeArray(), a = {};
                h.validateEmail(e) ? (j.each(t, function (e, t) {
                    "email" === t.name ? i[t.name] = t.value : a[t.name] = t.value
                }), i.additional = a, !l && r && r.abort(), r = j.ajax({
                    type: "POST",
                    url: window.jetElements.ajaxUrl,
                    data: {action: "jet_subscribe_form_ajax", data: i},
                    cache: !1,
                    beforeSend: function () {
                        m.addClass("loading"), l = !1
                    },
                    success: function (e) {
                        var t = e.type, i = e.message || "", a = "jet-subscribe-form--response-" + t;
                        m.removeClass("loading"), l = !0, n.removeClass("jet-subscribe-form--response-error"), n.addClass(a), j("span", g).html(i), g.css({visibility: "visible"}), setTimeout(function () {
                            g.css({visibility: "hidden"}), n.removeClass(a)
                        }, 2e4), s.redirect && (window.location.href = s.redirect_url), j(window).trigger({
                            type: "jet-elements/subscribe",
                            elementId: o,
                            successType: t,
                            inputData: u
                        })
                    }
                })) : (c.addClass("mail-invalid"), n.addClass("jet-subscribe-form--response-error"), j("span", g).html(p), g.css({visibility: "visible"}), setTimeout(function () {
                    n.removeClass("jet-subscribe-form--response-error"), g.css({visibility: "hidden"}), c.removeClass("mail-invalid")
                }, 2e4))
            }

            c.on("focus", function () {
                c.removeClass("mail-invalid")
            }), j(document).keydown(function (e) {
                if (13 === e.keyCode && c.is(":focus")) return t(), !1
            }), m.on("click", function () {
                return t(), !1
            })
        }, widgetProgressBar: function (e) {
            var t = e.find(".jet-progress-bar"), o = t.data("percent"), s = t.data("type");
            elementorFrontend.waypoint(t, function (e) {
                var t = j(this), i = {charged: 0}, a = j(".jet-progress-bar__status-bar", t),
                    n = j(".jet-progress-bar__percent-value", t);
                "type-7" == s ? a.css({height: o + "%"}) : a.css({width: o + "%"}), anime({
                    targets: i,
                    charged: o,
                    round: 1,
                    duration: 1e3,
                    easing: "easeInOutQuad",
                    update: function () {
                        n.html(i.charged)
                    }
                })
            })
        }, widgetSlider: function (e) {
            var a = e.find(".jet-slider"), n = j(".sp-image", a), t = a.data("settings") || {}, i = j.extend({}, {
                imageScaleMode: "cover",
                slideDistance: {size: 10, unit: "px"},
                slideDuration: 500,
                sliderAutoplay: !0,
                sliderAutoplayDelay: 2e3,
                sliderAutoplayOnHover: "pause",
                sliderFadeMode: !1,
                sliderFullScreen: !0,
                sliderFullscreenIcon: "",
                sliderHeight: {size: 600, unit: "px"},
                sliderHeightTablet: {size: 400, unit: "px"},
                sliderHeightMobile: {size: 300, unit: "px"},
                sliderLoop: !0,
                sliderNaviOnHover: !1,
                sliderNavigation: !0,
                sliderNavigationIcon: "",
                sliderPagination: !1,
                sliderShuffle: !1,
                sliderWidth: {size: 100, unit: "%"},
                thumbnailWidth: 120,
                thumbnailHeight: 80,
                thumbnails: !0,
                rightToLeft: !1
            }, t);
            if (a.length) {
                n.imagesLoaded().progress(function (e, t) {
                    var i = null;
                    t.isLoaded && (j(t.img).hasClass("sp-image") && j(t.img).addClass("image-loaded"), i = j(".image-loaded", a).length / n.length * 100 + "%", j(".jet-slider-loader", a).css({width: i}))
                }).done(function (e) {
                    j(".slider-pro", a).addClass("slider-loaded"), j(".jet-slider-loader", a).css({display: "none"})
                });
                var o = "" !== i.sliderHeightTablet.size ? i.sliderHeightTablet.size + i.sliderHeightTablet.unit : i.sliderHeight.size + i.sliderHeight.unit,
                    s = "" !== i.sliderHeightMobile.size ? i.sliderHeightMobile.size + i.sliderHeightMobile.unit : o,
                    r = "" !== i.thumbnailWidthTablet ? i.thumbnailWidthTablet : i.thumbnailWidth,
                    l = "" !== i.thumbnailWidthMobile ? i.thumbnailWidthMobile : r,
                    d = "" !== i.thumbnailHeightTablet ? i.thumbnailHeightTablet : i.thumbnailHeight,
                    c = "" !== i.thumbnailHeightMobile ? i.thumbnailHeightMobile : r,
                    u = void 0 !== f.config.breakpoints.lg ? f.config.breakpoints.lg - 1 : 1023,
                    m = void 0 !== f.config.breakpoints.md ? f.config.breakpoints.md - 1 : 767, g = {};
                f.isEditMode() && (m -= 17), g[u] = {
                    height: o,
                    thumbnailWidth: r,
                    thumbnailHeight: d
                }, g[m] = {
                    height: s,
                    thumbnailWidth: l,
                    thumbnailHeight: c
                }, j(".slider-pro", a).sliderPro({
                    width: i.sliderWidth.size + i.sliderWidth.unit,
                    height: i.sliderHeight.size + i.sliderHeight.unit,
                    arrows: i.sliderNavigation,
                    fadeArrows: i.sliderNaviOnHover,
                    buttons: i.sliderPagination,
                    autoplay: i.sliderAutoplay,
                    autoplayDelay: i.sliderAutoplayDelay,
                    autoplayOnHover: i.sliderAutoplayOnHover,
                    fullScreen: i.sliderFullScreen,
                    shuffle: i.sliderShuffle,
                    loop: i.sliderLoop,
                    fade: i.sliderFadeMode,
                    slideDistance: "string" != typeof i.slideDistance.size ? i.slideDistance.size : 0,
                    slideAnimationDuration: +i.slideDuration,
                    imageScaleMode: "exact",
                    waitForLayers: !1,
                    grabCursor: !1,
                    thumbnailWidth: i.thumbnailWidth,
                    thumbnailHeight: i.thumbnailHeight,
                    rightToLeft: i.rightToLeft,
                    init: function () {
                        var e = j("." + i.sliderFullscreenIcon).html(), t = j("." + i.sliderNavigationIcon).html();
                        j(".sp-full-screen-button", a).html(e), j(".sp-previous-arrow", a).html(t), j(".sp-next-arrow", a).html(t), this.resize()
                    },
                    breakpoints: g
                })
            }
        }, widgetTestimonials: function (e) {
            var t = e.find(".jet-testimonials__instance"), i = (j(".jet-testimonials__figure", t), t.data("settings"));
            t.length && (i.adaptiveHeight = i.adaptiveHeight, i.slide = ".jet-testimonials__item", u.initCarousel(t, i))
        }, widgetImageComparison: function (e) {
            var t = e.find(".jet-image-comparison__instance"),
                i = (j(".jet-image-comparison__container", t), t.data("settings"));
            e.data("id");
            t.length && (window.juxtapose.scanPage(".jet-juxtapose"), i.draggable = !1, i.infinite = !1, u.initCarousel(t, i))
        }, widgetTimeTable: function (e) {
            var t = e.find(".mptt-shortcode-wrapper");
            if ("undefined" != typeof typenow && pagenow === typenow) switch (typenow) {
                case"mp-event":
                    Registry._get("Event").init();
                    break;
                case"mp-column":
                    Registry._get("Event").initDatePicker(), Registry._get("Event").columnRadioBox()
            }
            t.length && (Registry._get("Event").initTableData(), Registry._get("Event").filterShortcodeEvents(), Registry._get("Event").getFilterByHash(), t.show()), (j(".upcoming-events-widget").length || t.length) && Registry._get("Event").setColorSettings()
        }, elementorSection: function (e) {
            var t = e, i = Boolean(f.isEditMode());
            (window.jetElements.hasOwnProperty("jetParallaxSections") || i) && new jetSectionParallax(t).init()
        }, initCarousel: function (e, t) {
            var i, a, n, o;
            i = t.slidesToShow.tablet ? t.slidesToShow.tablet : 1 === t.slidesToShow.desktop ? 1 : 2, a = t.slidesToShow.mobile ? t.slidesToShow.mobile : 1, t.slidesToShow = t.slidesToShow.desktop, n = {
                customPaging: function (e, t) {
                    return j("<span />").text(t + 1)
                },
                dotsClass: "jet-slick-dots",
                responsive: [{breakpoint: 1025, settings: {slidesToShow: i}}, {
                    breakpoint: 768,
                    settings: {slidesToShow: a, slidesToScroll: 1}
                }]
            }, o = j.extend({}, n, t), e.slick(o)
        }, widgetTimeLine: function (e) {
            var t = e.find(".jet-timeline");
            t.length && new jetTimeLine(t).init()
        }, widgetTable: function (e) {
            var t = e.find(".jet-table");
            t.length && t.hasClass("jet-table--sorting") && t.tablesorter({
                cssHeader: "jet-table-header-sort",
                cssAsc: "jet-table-header-sort--up",
                cssDesc: "jet-table-header-sort--down",
                initWidgets: !1
            })
        }, widgetDropbar: function (e) {
            var t, i, a = e.find(".jet-dropbar"), n = a.find(".jet-dropbar__inner"), o = a.find(".jet-dropbar__button"),
                s = a.find(".jet-dropbar__content"), r = a.data("settings") || {}, l = r.mode || "hover",
                d = +r.hide_delay || 0, c = "jet-dropbar-open";
            "click" === l ? o.on("click.jetDropbar", function (e) {
                a.toggleClass(c)
            }) : "ontouchstart" in window || "ontouchend" in window ? o.on("touchend.jetDropbar", function (e) {
                j(window).scrollTop() === t && a.toggleClass(c)
            }) : (n.on("mouseenter.jetDropbar", function (e) {
                clearTimeout(i), a.addClass(c)
            }), n.on("mouseleave.jetDropbar", function (e) {
                i = setTimeout(function () {
                    a.removeClass(c)
                }, d)
            })), j(document).on("touchstart.jetDropbar", function (e) {
                t = j(window).scrollTop()
            }), j(document).on("click.jetDropbar touchend.jetDropbar", function (e) {
                "touchend" === e.type && j(window).scrollTop() !== t || j(e.target).closest(o).length || j(e.target).closest(s).length || a.hasClass(c) && a.removeClass(c)
            })
        }, widgetVideo: function (n) {
            var e = n.find(".jet-video"), t = n.find(".jet-video-iframe"), i = n.find(".jet-video-player"),
                a = n.find(".jet-video-mejs-player"),
                o = a.data("controls") || ["playpause", "current", "progress", "duration", "volume", "fullscreen"],
                s = n.find(".jet-video__overlay"), r = 0 < s.length, l = (e.data("settings") || {}).autoplay || !1;

            function d() {
                var e = t.data("lazy-load");
                e && t.attr("src", e), l || (t[0].src = t[0].src.replace("&autoplay=0", "&autoplay=1")), s.remove(), r = !1
            }

            s[0] && s.on("click.jetVideo", function (e) {
                if (i[0]) return i[0].play(), s.remove(), void (r = !1);
                t[0] && d()
            }), l && t[0] && s[0] && d(), i[0] && i.on("play.jetVideo", function (e) {
                r && (s.remove(), r = !1)
            }), a[0] && a.mediaelementplayer({
                videoVolume: "horizontal",
                hideVolumeOnTouchDevices: !1,
                enableProgressTooltip: !1,
                features: o,
                success: function (e) {
                    e.addEventListener("timeupdate", function (e) {
                        var t = n.find(".mejs-time-current"), i = t.attr("style");
                        if (i) {
                            var a = i.match(/scaleX\([0-9.]*\)/gi)[0].replace("scaleX(", "").replace(")", "");
                            a && t.css("width", 100 * a + "%")
                        }
                    }, !1)
                }
            })
        }, widgetAudio: function (n) {
            var e = n.find(".jet-audio"), t = n.find(".jet-audio-player"), i = e.data("settings");
            t[0] && t.mediaelementplayer({
                features: i.controls || ["playpause", "current", "progress", "duration", "volume"],
                audioVolume: i.audioVolume || "horizontal",
                startVolume: i.startVolume || .8,
                hideVolumeOnTouchDevices: i.hideVolumeOnTouchDevices,
                enableProgressTooltip: !1,
                success: function (e) {
                    e.addEventListener("timeupdate", function (e) {
                        var t = n.find(".mejs-time-current"), i = t.attr("style");
                        if (i) {
                            var a = i.match(/scaleX\([0-9.]*\)/gi)[0].replace("scaleX(", "").replace(")", "");
                            a && t.css("width", 100 * a + "%")
                        }
                    }, !1)
                }
            })
        }, widgetHorizontalTimeline: function (s) {
            var a = s.find(".jet-hor-timeline"), n = s.find(".jet-hor-timeline-track"),
                e = s.find(".jet-hor-timeline-item"), o = s.find(".jet-arrow"), r = s.find(".jet-next-arrow"),
                l = s.find(".jet-prev-arrow"), t = a.data("columns") || {}, i = t.desktop || 3, d = t.tablet || i,
                c = t.mobile || d, u = !0, m = elementorFrontend.getCurrentDeviceMode(), g = m,
                p = s.find(".jet-hor-timeline-list--middle .jet-hor-timeline-item").length, f = 0, h = 0,
                v = {desktop: 100 / i, tablet: 100 / d, mobile: 100 / c},
                w = {desktop: Math.max(0, p - i), tablet: Math.max(0, p - d), mobile: Math.max(0, p - c)};

            function b() {
                var e = s.find(".jet-hor-timeline__line"), t = s.find(".jet-hor-timeline-item__point-content:first"),
                    i = s.find(".jet-hor-timeline-item__point-content:last"),
                    a = t.position().left + parseInt(t.css("marginLeft")),
                    n = i.position().left + parseInt(i.css("marginLeft")), o = t.outerWidth();
                e.css({left: a + o / 2, width: n - a})
            }

            function y() {
                if (o[0]) {
                    var e = s.find(".jet-hor-timeline-list--middle"), t = e.position().top, i = e.outerHeight();
                    o.css({top: t + i / 2})
                }
            }

            "ontouchstart" in window || "ontouchend" in window ? e.on("touchend.jetHorTimeline", function (e) {
                var t = j(this).data("item-id");
                s.find(".elementor-repeater-item-" + t).toggleClass("is-hover")
            }) : e.on("mouseenter.jetHorTimeline mouseleave.jetHorTimeline", function (e) {
                if (!u || "mouseleave" !== e.type) {
                    u && "mouseenter" === e.type && (u = !1);
                    var t = j(this).data("item-id");
                    s.find(".elementor-repeater-item-" + t).toggleClass("is-hover")
                }
            }), b(), j(window).on("resize.jetHorTimeline orientationchange.jetHorTimeline", b), r[0] && 0 === w[m] && r.addClass("jet-arrow-disabled"), o[0] && o.on("click.jetHorTimeline", function (e) {
                var t = j(this).hasClass("jet-next-arrow") ? "next" : "prev",
                    i = elementorFrontend.getCurrentDeviceMode();
                "next" == t && h < w[i] && (f -= v[i], h += 1), "prev" == t && 0 < h && (f += v[i], h -= 1), 0 < h ? l.removeClass("jet-arrow-disabled") : l.addClass("jet-arrow-disabled"), h === w[i] ? r.addClass("jet-arrow-disabled") : r.removeClass("jet-arrow-disabled"), 0 === h && (f = 0), n.css({transform: "translateX(" + f + "%)"})
            }), y(), j(window).on("resize.jetHorTimeline orientationchange.jetHorTimeline", y), j(window).on("resize.jetHorTimeline orientationchange.jetHorTimeline", function (e) {
                if (!a.hasClass("jet-hor-timeline--arrows-nav")) return;

                function t() {
                    l.addClass("jet-arrow-disabled"), r.hasClass("jet-arrow-disabled") && r.removeClass("jet-arrow-disabled"), 0 === w[i] && r.addClass("jet-arrow-disabled"), h = f = 0, n.css({transform: "translateX(0%)"})
                }

                var i = elementorFrontend.getCurrentDeviceMode();
                switch (i) {
                    case"desktop":
                        "desktop" !== g && (t(), g = "desktop");
                        break;
                    case"tablet":
                        "tablet" !== g && (t(), g = "tablet");
                        break;
                    case"mobile":
                        "mobile" !== g && (t(), g = "mobile")
                }
            })
        }, widgetPieChart: function (e) {
            var t = e.find(".jet-pie-chart-container"), i = e.find(".jet-pie-chart")[0], a = t.data("chart") || {},
                n = t.data("options") || {};
            n = j.extend({}, {maintainAspectRatio: !1}, n), elementorFrontend.waypoint(e, function () {
                new Chart(i, {type: "pie", data: a, options: n})
            }, {offset: "bottom-in-view"})
        }
    };
    j(window).on("elementor/frontend/init", u.init);
    var h = {
        debounce: function (t, i) {
            var a;
            return function (e) {
                a && clearTimeout(a), a = setTimeout(function () {
                    i.call(this, e), a = null
                }, t)
            }
        }, getObjectNextKey: function (e, t) {
            var i = Object.keys(e), a = i.indexOf(t), n = a += 1;
            return !(n >= i.length) && i[n]
        }, getObjectPrevKey: function (e, t) {
            var i = Object.keys(e), a = i.indexOf(t), n = --a;
            return !(a < 0) && i[n]
        }, getObjectFirstKey: function (e) {
            return Object.keys(e)[0]
        }, getObjectLastKey: function (e) {
            return Object.keys(e)[Object.keys(e).length - 1]
        }, getObjectValues: function (t) {
            return Object.values ? Object.values(t) : Object.keys(t).map(function (e) {
                return t[e]
            })
        }, validateEmail: function (e) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
        }, mobileAndTabletcheck: function () {
            var e, t = !1;
            return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0), t
        }
    };
    window.jetAnimatedText = function (e, n) {
        var s = this, t = j(".jet-animated-text__animated-text", e), o = j(".jet-animated-text__animated-text-item", t),
            r = null, l = (n = j.extend({effect: "fx1", delay: 3e3}, n || {}), 0), d = n.delay;
        s.avaliableEffects = {
            fx1: {
                in: {
                    duration: 1e3,
                    delay: function (e, t) {
                        return 75 + 100 * t
                    },
                    easing: "easeOutElastic",
                    elasticity: 650,
                    opacity: {value: [0, 1], easing: "easeOutExpo"},
                    translateY: ["100%", "0%"]
                }, out: {
                    duration: 300, delay: function (e, t) {
                        return 40 * t
                    }, easing: "easeInOutExpo", opacity: 0, translateY: "-100%"
                }
            }, fx2: {
                in: {
                    duration: 800,
                    delay: function (e, t) {
                        return 50 * t
                    },
                    easing: "easeOutElastic",
                    opacity: {value: [0, 1], easing: "easeOutExpo"},
                    translateY: function (e, t) {
                        return t % 2 == 0 ? ["-80%", "0%"] : ["80%", "0%"]
                    }
                }, out: {
                    duration: 300, delay: function (e, t) {
                        return 20 * t
                    }, easing: "easeOutExpo", opacity: 0, translateY: function (e, t) {
                        return t % 2 == 0 ? "80%" : "-80%"
                    }
                }
            }, fx3: {
                in: {
                    duration: 700,
                    delay: function (e, t) {
                        return 80 * (e.parentNode.children.length - t - 1)
                    },
                    easing: "easeOutElastic",
                    opacity: {value: [0, 1], easing: "easeOutExpo"},
                    translateY: function (e, t) {
                        return t % 2 == 0 ? ["-80%", "0%"] : ["80%", "0%"]
                    },
                    rotateZ: [90, 0]
                }, out: {
                    duration: 300, delay: function (e, t) {
                        return 50 * (e.parentNode.children.length - t - 1)
                    }, easing: "easeOutExpo", opacity: 0, translateY: function (e, t) {
                        return t % 2 == 0 ? "80%" : "-80%"
                    }, rotateZ: function (e, t) {
                        return t % 2 == 0 ? -25 : 25
                    }
                }
            }, fx4: {
                in: {
                    duration: 700,
                    delay: function (e, t) {
                        return 550 + 50 * t
                    },
                    easing: "easeOutQuint",
                    opacity: {value: [0, 1], easing: "easeOutExpo"},
                    translateY: ["-150%", "0%"],
                    rotateY: [180, 0]
                }, out: {
                    duration: 200, delay: function (e, t) {
                        return 30 * t
                    }, easing: "easeInQuint", opacity: {value: 0, easing: "linear"}, translateY: "100%", rotateY: -180
                }
            }, fx5: {
                in: {
                    duration: 250,
                    delay: function (e, t) {
                        return 200 + 25 * t
                    },
                    easing: "easeOutCubic",
                    opacity: {value: [0, 1], easing: "easeOutExpo"},
                    translateY: ["-50%", "0%"]
                }, out: {
                    duration: 250, delay: function (e, t) {
                        return 25 * t
                    }, easing: "easeOutCubic", opacity: 0, translateY: "50%"
                }
            }, fx6: {
                in: {
                    duration: 400, delay: function (e, t) {
                        return 50 * t
                    }, easing: "easeOutSine", opacity: {value: [0, 1], easing: "easeOutExpo"}, rotateY: [-90, 0]
                }, out: {
                    duration: 200, delay: function (e, t) {
                        return 50 * t
                    }, easing: "easeOutSine", opacity: 0, rotateY: 45
                }
            }, fx7: {
                in: {
                    duration: 1e3,
                    delay: function (e, t) {
                        return 100 + 30 * t
                    },
                    easing: "easeOutElastic",
                    opacity: {value: [0, 1], easing: "easeOutExpo"},
                    rotateZ: function (e, t) {
                        return [anime.random(20, 40), 0]
                    }
                }, out: {duration: 300, opacity: {value: [1, 0], easing: "easeOutExpo"}}
            }, fx8: {
                in: {
                    duration: 400, delay: function (e, t) {
                        return 200 + 20 * t
                    }, easing: "easeOutExpo", opacity: 1, rotateY: [-90, 0], translateY: ["50%", "0%"]
                }, out: {
                    duration: 250, delay: function (e, t) {
                        return 20 * t
                    }, easing: "easeOutExpo", opacity: 0, rotateY: 90
                }
            }, fx9: {
                in: {
                    duration: 400, delay: function (e, t) {
                        return 200 + 30 * t
                    }, easing: "easeOutExpo", opacity: 1, rotateX: [90, 0]
                }, out: {
                    duration: 250, delay: function (e, t) {
                        return 30 * t
                    }, easing: "easeOutExpo", opacity: 0, rotateX: -90
                }
            }, fx10: {
                in: {
                    duration: 400, delay: function (e, t) {
                        return 100 + 50 * t
                    }, easing: "easeOutExpo", opacity: {value: [0, 1], easing: "easeOutExpo"}, rotateX: [110, 0]
                }, out: {
                    duration: 250, delay: function (e, t) {
                        return 50 * t
                    }, easing: "easeOutExpo", opacity: 0, rotateX: -110
                }
            }, fx11: {
                in: {
                    duration: function (e, t) {
                        return anime.random(800, 1e3)
                    },
                    delay: function (e, t) {
                        return anime.random(100, 300)
                    },
                    easing: "easeOutExpo",
                    opacity: {value: [0, 1], easing: "easeOutExpo"},
                    translateY: ["-150%", "0%"],
                    rotateZ: function (e, t) {
                        return [anime.random(-50, 50), 0]
                    }
                }, out: {
                    duration: function (e, t) {
                        return anime.random(200, 300)
                    }, delay: function (e, t) {
                        return anime.random(0, 80)
                    }, easing: "easeInQuart", opacity: 0, translateY: "50%", rotateZ: function (e, t) {
                        return anime.random(-50, 50)
                    }
                }
            }, fx12: {
                in: {
                    elasticity: !1, duration: 1, delay: function (e, t) {
                        return 100 * t + anime.random(50, 100)
                    }, width: [0, function (e, t) {
                        return j(e).width()
                    }]
                }, out: {
                    duration: 1, delay: function (e, t) {
                        return 20 * (e.parentNode.children.length - t - 1)
                    }, easing: "linear", width: {value: 0}
                }
            }
        }, s.textChange = function () {
            var i, a = o.eq(l);
            l < o.length - 1 ? l++ : l = 0, i = o.eq(l), s.hideText(a, n.effect, null, function (e) {
                a.toggleClass("visible");
                var t = d;
                r && clearTimeout(r), s.showText(i, n.effect, function () {
                    i.toggleClass("active"), a.toggleClass("active"), i.toggleClass("visible")
                }, function () {
                    r = setTimeout(function () {
                        s.textChange()
                    }, t)
                })
            })
        }, s.showText = function (e, t, i, a) {
            var n = [];
            j("span", e).each(function () {
                j(this).css({width: "auto", opacity: 1, WebkitTransform: "", transform: ""}), n.push(this)
            }), s.animateText(n, "in", t, i, a)
        }, s.hideText = function (e, t, i, a) {
            var n = [];
            j("span", e).each(function () {
                n.push(this)
            }), s.animateText(n, "out", t, i, a)
        }, s.animateText = function (e, t, i, a, n) {
            var o = (s.avaliableEffects[i] || {})[t];
            o.targets = e, o.begin = a, o.complete = n, anime(o)
        }, s.init = function () {
            var e = o.eq(l);
            s.showText(e, n.effect, null, function () {
                var e = d;
                r && clearTimeout(r), r = setTimeout(function () {
                    s.textChange()
                }, e)
            })
        }
    }, window.jetImagesLayout = function (e, o) {
        var t, i = this, a = e, n = (j(".jet-images-layout__list", a), j(".jet-images-layout__item", a));
        o = o || {};
        t = {
            layoutType: "masonry",
            columns: 3,
            columnsTablet: 2,
            columnsMobile: 1,
            justifyHeight: 300
        }, j.extend(t, o), i.layoutBuild = function () {
            switch (o.layoutType) {
                case"masonry":
                    salvattore.init();
                    break;
                case"justify":
                    n.each(function () {
                        var e = j(this), t = j(".jet-images-layout__image-instance", e),
                            i = +t.data("width") / +t.data("height"), a = 100 * i, n = +o.justifyHeight * i;
                        e.css({"flex-grow": a, "flex-basis": n})
                    })
            }
            if (j.isFunction(j.fn.imagesLoaded)) j(".jet-images-layout__image", n).imagesLoaded().progress(function (e, t) {
                var i = j(t.img).closest(".jet-images-layout__item"), a = j(".jet-images-layout__image-loader", i);
                i.addClass("image-loaded"), a.fadeTo(500, 0, function () {
                    j(this).remove()
                })
            }); else {
                var e = j(".jet-images-layout__image-loader", n);
                n.addClass("image-loaded"), e.fadeTo(500, 0, function () {
                    j(this).remove()
                })
            }
        }, i.init = function () {
            i.layoutBuild()
        }
    }, window.jetScrollNavigation = function (e, l) {
        var g = this, p = j(window), t = j(document), n = (j("body"), e), a = j("html, body"),
            o = j(".jet-scroll-navigation__item", n), f = (l = j.extend({}, {
                speed: 500,
                blockSpeed: 500,
                offset: 0,
                sectionSwitch: !1,
                sectionSwitchOnMobile: !0
            }, l), {}), s = null, d = !1, i = window.location.hash.slice(1), c = 0, u = navigator.platform;
        jQuery.extend(jQuery.easing, {
            easeInOutCirc: function (e, t, i, a, n) {
                return (t /= n / 2) < 1 ? -a / 2 * (Math.sqrt(1 - t * t) - 1) + i : a / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
            }
        }), g.init = function () {
            g.setSectionsData(), i && f.hasOwnProperty(i) && o.addClass("invert"), o.on("click.jetScrollNavigation", function (e) {
                var t = j(this).data("anchor");
                g.onAnchorChange(t)
            }), p.on("resize.jetScrollNavigation orientationchange.jetScrollNavigation", h.debounce(50, g.onResize)), p.on("load", function () {
                g.setSectionsData()
            }), t.keydown(function (e) {
                38 == e.keyCode && g.directionSwitch(e, "up"), 40 == e.keyCode && g.directionSwitch(e, "down")
            }), g.waypointHandler(), g.hijakingHandler()
        }, g.setSectionsData = function () {
            o.each(function () {
                var e = j(this), t = e.data("anchor"), i = "yes" === e.data("invert"), a = j("#" + t);
                a[0] && (a.addClass("jet-scroll-navigation-section"), a[0].dataset.sectionName = t, f[t] = {
                    selector: a,
                    offset: Math.round(a.offset().top),
                    height: a.outerHeight(),
                    invert: i
                })
            })
        }, g.waypointHandler = function () {
            for (var e in f) {
                var t = f[e].selector;
                elementorFrontend.waypoint(t, function (e) {
                    var t = j(this).attr("id");
                    "down" !== e || d || (window.history.pushState(null, null, "#" + t), s = t, o.removeClass("active"), j("[data-anchor=" + t + "]", n).addClass("active"), o.removeClass("invert"), f[t].invert && o.addClass("invert"))
                }, {offset: "70%", triggerOnce: !1}), elementorFrontend.waypoint(t, function (e) {
                    var t = j(this).attr("id");
                    "up" !== e || d || (window.history.pushState(null, null, "#" + t), s = t, o.removeClass("active"), j("[data-anchor=" + t + "]", n).addClass("active"), o.removeClass("invert"), f[t].invert && o.addClass("invert"))
                }, {offset: "0%", triggerOnce: !1})
            }
        }, g.onAnchorChange = function (e) {
            var t, i = j("[data-anchor=" + e + "]", n);
            if (!f.hasOwnProperty(e)) return !1;
            t = f[e].offset - l.offset, d || (d = !0, window.history.pushState(null, null, "#" + e), s = e, o.removeClass("active"), i.addClass("active"), o.removeClass("invert"), f[e].invert && o.addClass("invert"), a.animate({scrollTop: t}, l.speed, "easeInOutCirc", function () {
                d = !1
            }))
        }, g.directionSwitch = function (e, t) {
            t = t || "up";
            var i = j("[data-anchor=" + s + "]", n).next(), a = j("[data-anchor=" + s + "]", n).prev();
            if (d) return !1;
            "up" === t && a[0] && a.trigger("click.jetScrollNavigation"), "down" === t && i[0] && i.trigger("click.jetScrollNavigation")
        }, g.hijakingHandler = function () {
            var e = h.mobileAndTabletcheck(), m = 0;
            l.sectionSwitch && (e || document.addEventListener("wheel", g.onWheel, {passive: !1}), e && l.sectionSwitchOnMobile && (document.addEventListener("touchstart", function (e) {
                var t = j(e.target).closest(".elementor-top-section").attr("id") || !1;
                m = e.changedTouches[0].clientY, t && d && e.preventDefault()
            }, {passive: !1}), document.addEventListener("touchend", function (e) {
                var t = j(e.target), i = t.closest(".jet-scroll-navigation") || !1,
                    a = (t.closest(".elementor-top-section") || !1).attr("id") || !1, n = p.scrollTop(),
                    o = e.changedTouches[0].clientY, s = m < o ? "up" : "down", r = !1, l = !1, d = !1, c = !1,
                    u = window.screen.availHeight / 8;
                return !(Math.abs(o - m) < 20) && (!i[0] && void (a && f.hasOwnProperty(a) && (d = h.getObjectPrevKey(f, a), c = h.getObjectNextKey(f, a), r = f[a].offset, "up" == s && (r - u < n && (d = a), d && (l = d)), "down" == s && (n < r + u && (c = a), c && (l = c)), l && g.onAnchorChange(l))))
            }, {passive: !1})))
        }, g.onScroll = function (e) {
            e.preventDefault()
        }, g.onWheel = function (e) {
            d && e.preventDefault();
            var t = j(e.target).closest(".elementor-top-section").attr("id") || !1, i = e.deltaY < 0 ? "up" : "down",
                a = !1, n = !1, o = !1, s = !1, r = p.scrollTop();
            if (t && f.hasOwnProperty(t) && (o = h.getObjectPrevKey(f, t), s = h.getObjectNextKey(f, t), a = f[t].offset, "up" == i && (a < r + l.offset - 10 && (o = t), o && (n = o)), "down" == i && (a > r + l.offset + 10 && (s = t), s && (n = s)), n)) {
                if (e.preventDefault(), 10 < e.timeStamp - c && "MacIntel" == u) return c = e.timeStamp, !1;
                g.onAnchorChange(n)
            }
            return !1
        }, g.onResize = function (e) {
            g.setSectionsData()
        }, g.scrollStop = function () {
            a.stop(!0)
        }, g.mobileAndTabletcheck = function () {
            var e, t = !1;
            return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0), t
        }
    }, window.jetSectionParallax = function (v) {
        var r = this, e = v.data("id"), t = !1, i = Boolean(f.isEditMode()), l = j(window), w = (j("body"), []), b = [],
            u = l.scrollTop(), m = l.height(), g = 0, p = 0,
            y = (navigator.userAgent.match(/Version\/[\d\.]+.*Safari/), navigator.platform);
        r.init = function () {
            if (!(t = i ? r.generateEditorSettings(e) : jetElements.jetParallaxSections[e] || !1)) return !1;
            r.generateLayouts(), 0 !== w.length && l.on("scroll.jetSectionParallax resize.jetSectionParallax", r.scrollHandler), 0 !== b.length && (v.on("mousemove.jetSectionParallax resize.jetSectionParallax", r.mouseMoveHandler), v.on("mouseleave.jetSectionParallax", r.mouseLeaveHandler)), r.scrollUpdate()
        }, r.generateEditorSettings = function (i) {
            var e, t, a = {}, n = [];
            return !!window.elementor.hasOwnProperty("elements") && (!!(e = window.elementor.elements).models && (j.each(e.models, function (e, t) {
                i == t.id && (a = t.attributes.settings.attributes)
            }), !(!a.hasOwnProperty("jet_parallax_layout_list") || 0 === Object.keys(a).length) && (t = a.jet_parallax_layout_list.models, j.each(t, function (e, t) {
                n.push(t.attributes)
            }), 0 !== n.length && n)))
        }, r.generateLayouts = function () {
            j(".jet-parallax-section__layout", v).remove(), j.each(t, function (e, t) {
                var i, a, n = t.jet_parallax_layout_image, o = t.jet_parallax_layout_speed.size || 50,
                    s = t.jet_parallax_layout_z_index, r = t.jet_parallax_layout_bg_size || "auto",
                    l = t.jet_parallax_layout_animation_prop || "bgposition", d = t.jet_parallax_layout_bg_x,
                    c = t.jet_parallax_layout_bg_y, u = t.jet_parallax_layout_type || "none",
                    m = t.jet_parallax_layout_on || ["desktop", "tablet"], g = t._id,
                    p = t.hasOwnProperty("__dynamic__") && t.__dynamic__.hasOwnProperty("jet_parallax_layout_image"),
                    f = "MacIntel" == y ? " is-mac" : "";
                if ("" === n.url && !p) return !1;
                v.hasClass("jet-parallax-section") || v.addClass("jet-parallax-section"), i = j('<div class="jet-parallax-section__layout elementor-repeater-item-' + g + " jet-parallax-section__" + u + "-layout" + f + '"><div class="jet-parallax-section__image"></div></div>').prependTo(v).css({"z-index": s});
                var h = {"background-size": r, "background-position-x": d + "%", "background-position-y": c + "%"};
                "" !== n.url && (h["background-image"] = "url(" + n.url + ")"), j("> .jet-parallax-section__image", i).css(h), a = {
                    selector: i,
                    image: n.url,
                    size: r,
                    prop: l,
                    type: u,
                    device: m,
                    xPos: d,
                    yPos: c,
                    speed: o / 100 * 2
                }, "none" !== u && ("scroll" !== u && "zoom" !== u || w.push(a), "mouse" === u && b.push(a))
            })
        }, r.scrollHandler = function (e) {
            u = l.scrollTop(), m = l.height(), r.scrollUpdate()
        }, r.scrollUpdate = function () {
            j.each(w, function (e, t) {
                var i = t.selector, a = j(".jet-parallax-section__image", i), n = t.speed, o = i.offset().top,
                    s = i.outerHeight(), r = (t.prop, t.type), l = (u - o + m) / s * 100,
                    d = elementorFrontend.getCurrentDeviceMode();
                if (-1 == t.device.indexOf(d)) return a.css({
                    transform: "translateY(0)",
                    "background-position-y": t.yPos
                }), !1;
                switch (u < o - m && (l = 0), o + s < u && (l = 200), l = parseFloat(n * l).toFixed(1), r) {
                    case"scroll":
                        "bgposition" === t.prop ? a.css({"background-position-y": "calc(" + t.yPos + "% + " + l + "px)"}) : a.css({transform: "translateY(" + l + "px)"});
                        break;
                    case"zoom":
                        var c = (u - o + m) / m * n;
                        c += 1, a.css({transform: "scale(" + c + ")"})
                }
            })
        }, r.mouseMoveHandler = function (e) {
            var t = l.width(), i = l.height(), a = Math.ceil(t / 2), n = Math.ceil(i / 2), o = e.clientX - a,
                s = e.clientY - n;
            g = o / a * -1, p = s / n * -1, r.mouseMoveUpdate()
        }, r.mouseLeaveHandler = function (e) {
            j.each(b, function (e, t) {
                var i = t.selector, a = j(".jet-parallax-section__image", i);
                switch (t.prop) {
                    case"transform3d":
                        TweenMax.to(a[0], 1.2, {x: 0, y: 0, z: 0, rotationX: 0, rotationY: 0, ease: Power2.easeOut})
                }
            })
        }, r.mouseMoveUpdate = function () {
            j.each(b, function (e, t) {
                var i = t.selector, a = j(".jet-parallax-section__image", i), n = t.speed, o = t.prop,
                    s = parseFloat(125 * g * n).toFixed(1), r = parseFloat(125 * p * n).toFixed(1), l = 50 * t.zIndex,
                    d = parseFloat(25 * g * n).toFixed(1), c = parseFloat(25 * p * n).toFixed(1),
                    u = elementorFrontend.getCurrentDeviceMode();
                if (-1 == t.device.indexOf(u)) return a.css({
                    transform: "translateX(0) translateY(0)",
                    "background-position-x": t.xPos,
                    "background-position-y": t.yPos
                }), !1;
                switch (o) {
                    case"bgposition":
                        TweenMax.to(a[0], 1, {
                            backgroundPositionX: "calc(" + t.xPos + "% + " + s + "px)",
                            backgroundPositionY: "calc(" + t.yPos + "% + " + r + "px)",
                            ease: Power2.easeOut
                        });
                        break;
                    case"transform":
                        TweenMax.to(a[0], 1, {x: s, y: r, ease: Power2.easeOut});
                        break;
                    case"transform3d":
                        TweenMax.to(a[0], 2, {x: s, y: r, z: l, rotationX: c, rotationY: -d, ease: Power2.easeOut})
                }
            })
        }
    }, window.jetPortfolio = function (e, n) {
        var a, s = this, o = e, t = j(".jet-portfolio__list", o), i = j(".jet-portfolio__item", o),
            r = j(".jet-portfolio__filter-item", o), l = j(".jet-portfolio__view-more", o),
            d = j(".jet-portfolio__view-more-button", o), c = d[0], u = {}, m = {},
            g = {itemSelector: ".jet-portfolio__item", percentPosition: !0};
        n = j.extend({layoutType: "masonry", columns: 3, columnsTablet: 2, columnsMobile: 1, perPage: 6}, n);
        s.init = function () {
            s.layoutBuild()
        }, s.layoutBuild = function () {
            if (s.generateData(), r.data("showItems", c ? n.perPage : "all"), "justify" == n.layoutType && (g.columnWidth = ".grid-sizer"), a = t.masonry(g), j.isFunction(j.fn.imagesLoaded)) j(".jet-portfolio__image", i).imagesLoaded().progress(function (e, t) {
                var i = j(t.img).closest(".jet-portfolio__item");
                j(".jet-portfolio__image-loader", i).remove(), i.addClass("item-loaded"), a.masonry("layout")
            }); else {
                var e = j(".jet-portfolio__image-loader", i);
                i.addClass("item-loaded"), e.remove()
            }
            r.on("click.jetPortfolio", s.filterHandler), d.on("click.jetPortfolio", s.moreButtonHandler), s.render(), s.checkMoreButton()
        }, s.generateData = function () {
            r[0] ? r.each(function (e) {
                var t = j(this).data("slug");
                m[t] = !1, "all" == t && (m[t] = !0)
            }) : m.all = !0, i.each(function (e) {
                var t = j(this), i = t.data("slug");
                u[e] = {
                    selector: t,
                    slug: i,
                    visible: !!t.hasClass("visible-status"),
                    more: !!t.hasClass("hidden-status")
                }
            })
        }, s.filterHandler = function (e) {
            var t = j(this), a = 1, i = t.data("slug"), n = t.data("showItems");
            for (var o in r.removeClass("active"), t.addClass("active"), m) m[o] = !1, o == i && (m[o] = !0);
            j.each(u, function (e, t) {
                var i = !1;
                "all" === n ? s.isItemVisible(t.slug) && !t.more && (i = !0) : s.isItemVisible(t.slug) && (t.more = !(a <= n) || !(i = !0), a++), t.visible = i
            }), s.render(), s.checkMoreButton()
        }, s.moreButtonHandler = function (e) {
            j(this);
            var t, i = 1, a = j(".jet-portfolio__filter-item.active", o);
            j.each(u, function (e, t) {
                s.isItemVisible(t.slug) && t.more && i <= n.perPage && (t.more = !1, t.visible = !0, i++)
            }), a[0] && (t = a.data("showItems"), a.data("showItems", t + i - 1)), s.render(), s.checkMoreButton()
        }, s.checkMoreButton = function () {
            var i = !1;
            j.each(u, function (e, t) {
                s.isItemVisible(t.slug) && t.more && (i = !0)
            }), i ? l.removeClass("hidden-status") : l.addClass("hidden-status")
        }, s.isItemVisible = function (e) {
            var t = h.getObjectValues(e);
            for (var i in m) {
                if (m[i] && -1 !== t.indexOf(i)) return !0
            }
            return !1
        }, s.anyFilterEnabled = function () {
            for (var e in m) if (m[e]) return !0;
            return !1
        }, s.render = function () {
            i.removeClass("visible-status").removeClass("hidden-status"), j.each(u, function (e, t) {
                var i = j(".jet-portfolio__inner", t.selector);
                t.visible ? (t.selector.addClass("visible-status"), anime({
                    targets: i[0],
                    opacity: {value: 1, duration: 400},
                    scale: {value: 1, duration: 500, easing: "easeOutExpo"},
                    delay: 50,
                    elasticity: !1
                })) : (t.selector.addClass("hidden-status"), anime({
                    targets: i[0],
                    opacity: 0,
                    scale: 0,
                    duration: 500,
                    elasticity: !1
                }))
            }), a.masonry("layout")
        }
    }, window.jetTimeLine = function (e) {
        var t = j(window), i = this, a = e.find(".jet-timeline__line"), n = a.find(".jet-timeline__line-progress"),
            o = e.find(".jet-timeline-item"), s = e.find(".timeline-item__point"), r = t.scrollTop(), l = -1,
            d = j(window).height(), c = t.outerHeight(), u = !1;
        i.onScroll = function () {
            r = t.scrollTop(), i.updateFrame(), i.animateCards()
        }, i.onResize = function () {
            r = t.scrollTop(), d = t.height(), i.updateFrame()
        }, i.updateWindow = function () {
            u = !1, a.css({
                top: o.first().find(s).offset().top - o.first().offset().top,
                bottom: e.offset().top + e.outerHeight() - o.last().find(s).offset().top
            }), l !== r && (l = r, d, i.updateProgress())
        }, i.updateProgress = function () {
            var e = o.last().find(s).offset().top, t = r - n.offset().top + c / 2;
            e <= r + c / 2 && (t = e - n.offset().top), n.css({height: t + "px"}), o.each(function () {
                j(this).find(s).offset().top < r + .5 * c ? j(this).addClass("is--active") : j(this).removeClass("is--active")
            })
        }, i.updateFrame = function () {
            u || requestAnimationFrame(i.updateWindow), u = !0
        }, i.animateCards = function () {
            o.each(function () {
                j(this).offset().top <= r + .9 * c && j(this).hasClass("jet-timeline-item--animated") && j(this).addClass("is--show")
            })
        }, i.init = function () {
            j(document).ready(i.onScroll), j(window).on("scroll.jetTimeline", i.onScroll), j(window).on("resize.jetTimeline orientationchange.jetTimeline", h.debounce(50, i.onResize))
        }
    }
}(jQuery, window.elementorFrontend);
!function (t, e, a) {
    "use strict";
    var o = {
        addedScripts: {},
        addedStyles: {},
        addedAssetsPromises: [],
        devMode: JetTabsSettings.devMode || "false",
        init: function () {
            var a = {
                "jet-tabs.default": o.tabsInit,
                "jet-accordion.default": o.accordionInit,
                "jet-image-accordion.default": o.imageAccordionInit,
                "jet-switcher.default": o.switcherInit
            };
            t.each(a, function (t, a) {
                e.hooks.addAction("frontend/element_ready/" + t, a)
            })
        },
        tabsInit: function (e) {
            var a, n = t(".jet-tabs", e).first(), i = n.data("id"), r = t(window),
                s = t(".jet-tabs__control-wrapper", n).first(), c = t(".jet-tabs__content-wrapper", n).first(),
                d = t("> .jet-tabs__control", s), l = t("> .jet-tabs__content", c), h = n.data("settings") || {},
                g = null, u = window.location.hash || !1, w = !!u && u.replace("#", "").split("&");
            if ("click" === h.event ? d.on("click.jetTabs", function () {
                var e = t(this), a = +e.data("tab") - 1;
                clearInterval(g), h.ajaxTemplate && p(a), v(a)
            }) : "ontouchend" in window || "ontouchstart" in window ? (d.on("touchstart", function (e) {
                a = t(window).scrollTop()
            }), d.on("touchend", function (e) {
                var o = t(this), n = +o.data("tab") - 1;
                if (a !== t(window).scrollTop()) return !1;
                clearInterval(g), h.ajaxTemplate && p(n), v(n)
            })) : d.on("mouseenter", function (e) {
                var a = t(this), o = +a.data("tab") - 1;
                clearInterval(g), h.ajaxTemplate && p(o), v(o)
            }), h.autoSwitch) {
                var m = h.activeIndex, f = d.length;
                g = setInterval(function () {
                    m < f - 1 ? m++ : m = 0, h.ajaxTemplate && p(m), v(m)
                }, +h.autoSwitchDelay)
            }

            function v(t) {
                var e, a = d.eq(t), o = l.eq(t), n = "auto";
                c.css({height: c.outerHeight(!0)}), d.removeClass("active-tab"), a.addClass("active-tab"), d.attr("aria-expanded", "false"), a.attr("aria-expanded", "true"), l.removeClass("active-content"), n = o.outerHeight(!0), n += parseInt(c.css("border-top-width")) + parseInt(c.css("border-bottom-width")), o.addClass("active-content"), l.attr("aria-hidden", "true"), o.attr("aria-hidden", "false"), c.css({height: n}), r.trigger("jet-tabs/tabs/show-tab-event/before", {
                    widgetId: i,
                    tabIndex: t
                }), e && clearTimeout(e), e = setTimeout(function () {
                    r.trigger("jet-tabs/tabs/show-tab-event/after", {widgetId: i, tabIndex: t}), c.css({height: "auto"})
                }, 500)
            }

            function p(e) {
                var a = l.eq(e), n = a.data("template-loaded") || !1, i = a.data("template-id"),
                    r = t(".jet-tabs-loader", a);
                if (n) return !1;
                a.data("template-loaded", !0), t.ajax({
                    type: "GET",
                    url: window.JetTabsSettings.templateApiUrl,
                    dataType: "json",
                    data: {id: i, dev: window.JetTabsSettings.devMode},
                    success: function (t, e, n) {
                        var i = t.template_content, s = t.template_scripts, c = t.template_styles;
                        for (var d in s) o.addedAssetsPromises.push(o.loadScriptAsync(d, s[d]));
                        for (var l in c) o.addedAssetsPromises.push(o.loadStyle(l, c[l]));
                        Promise.all(o.addedAssetsPromises).then(t => {
                            r.remove(), a.append(i), o.elementorFrontendInit(a)
                        }, t => {
                            console.log("Script Loaded Error")
                        })
                    }
                })
            }

            h.ajaxTemplate && p(h.activeIndex), t(window).on("resize.jetTabs orientationchange.jetTabs", function () {
                c.css({height: "auto"})
            }), w && d.each(function (e) {
                var a = t(this).attr("id"), o = e;
                w.forEach(function (t, e) {
                    t === a && (h.ajaxTemplate && p(o), v(o))
                })
            }), t(document).on("click.jetTabAnchor", 'a[href*="#jet-tabs-control-"]', function (a) {
                var o = t(this.hash);
                if (o.closest(e)[0]) {
                    var n = o.data("tab") - 1;
                    h.ajaxTemplate && p(n), v(n)
                }
            })
        },
        switcherInit: function (e) {
            var a, o = t(".jet-switcher", e).first(), n = o.data("id"), i = t(window),
                r = t(".jet-switcher__control-wrapper", o).first(), s = t(".jet-switcher__content-wrapper", o).first(),
                c = t("> .jet-switcher__control-instance", r),
                d = t("> .jet-switcher__control-instance > .jet-switcher__control, > .jet-switcher__control", r),
                l = t("> .jet-switcher__content", s),
                h = (t("> .jet-switcher__content--disable", s), t("> .jet-switcher__content--enable", s), o.hasClass("jet-switcher--disable"));
            o.data("settings");

            function g(t) {
                var e, a, r, c = "auto";
                s.css({height: s.outerHeight(!0)}), o.toggleClass("jet-switcher--disable jet-switcher--enable"), e = (h = !o.hasClass("jet-switcher--disable")) ? d.eq(1) : d.eq(0), a = h ? l.eq(1) : l.eq(0), l.removeClass("active-content"), c = a.outerHeight(!0), c += parseInt(s.css("border-top-width")) + parseInt(s.css("border-bottom-width")), a.addClass("active-content"), d.attr("aria-expanded", "false"), e.attr("aria-expanded", "true"), l.attr("aria-hidden", "true"), a.attr("aria-hidden", "false"), s.css({height: c}), i.trigger("jet-tabs/switcher/show-case-event/before", {
                    widgetId: n,
                    caseIndex: t
                }), r && clearTimeout(r), r = setTimeout(function () {
                    i.trigger("jet-tabs/switcher/show-case-event/after", {
                        widgetId: n,
                        caseIndex: t
                    }), s.css({height: "auto"})
                }, 500)
            }

            "ontouchend" in window || "ontouchstart" in window ? (c.on("touchstart", function (e) {
                a = t(window).scrollTop()
            }), c.on("touchend", function (e) {
                if (a !== t(window).scrollTop()) return !1;
                g()
            })) : c.on("click.jetSwitcher", function () {
                g()
            }), t(window).on("resize.jetSwitcher orientationchange.jetSwitcher", function () {
                s.css({height: "auto"})
            })
        },
        accordionInit: function (e) {
            var a, n, i = t(".jet-accordion", e).first(), r = i.data("id"), s = t(window),
                c = t("> .jet-accordion__inner > .jet-toggle > .jet-toggle__control", i), d = i.data("settings"),
                l = t("> .jet-accordion__inner > .jet-toggle", i), h = window.location.hash || !1,
                g = !!h && h.replace("#", "").split("&");

            function u(e) {
                var a = l.eq(e), n = t("> .jet-toggle__content", a),
                    i = t("> .jet-toggle__content > .jet-toggle__content-inner", a),
                    r = n.data("template-loaded") || !1, s = n.data("template-id"), c = t(".jet-tabs-loader", i);
                if (r) return !1;
                n.data("template-loaded", !0), t.ajax({
                    type: "GET",
                    url: window.JetTabsSettings.templateApiUrl,
                    dataType: "json",
                    data: {id: s, dev: window.JetTabsSettings.devMode},
                    success: function (t, e, a) {
                        var n = t.template_content, r = t.template_scripts, s = t.template_styles;
                        for (var d in r) o.addedAssetsPromises.push(o.loadScriptAsync(d, r[d]));
                        for (var l in s) o.addedAssetsPromises.push(o.loadStyle(l, s[l]));
                        Promise.all(o.addedAssetsPromises).then(t => {
                            c.remove(), i.append(n), o.elementorFrontendInit(i)
                        }, t => {
                            console.log("Script Loaded Error")
                        })
                    }
                })
            }

            t(window).on("resize.jetAccordion orientationchange.jetAccordion", function () {
                var e = t("> .jet-accordion__inner > .active-toggle", i);
                t("> .jet-toggle__content", e).css({height: "auto"})
            }), c.on("click.jetAccordion", function () {
                var e = t(this), o = e.closest(".jet-toggle"), i = +e.data("toggle") - 1;
                if (d.collapsible) o.hasClass("active-toggle") || l.each(function (e) {
                    var o = t(this), c = t("> .jet-toggle__control", o), l = t("> .jet-toggle__content", o),
                        h = t("> .jet-toggle__content > .jet-toggle__content-inner", o).outerHeight();
                    h += parseInt(l.css("border-top-width")) + parseInt(l.css("border-bottom-width")), e === i ? (o.addClass("active-toggle"), l.css({height: h}), c.attr("aria-expanded", "true"), l.attr("aria-hidden", "false"), d.ajaxTemplate && u(i), s.trigger("jet-tabs/accordion/show-toggle-event/before", {
                        widgetId: r,
                        toggleIndex: i
                    }), a && clearTimeout(a), a = setTimeout(function () {
                        s.trigger("jet-tabs/accordion/show-toggle-event/after", {
                            widgetId: r,
                            toggleIndex: i
                        }), l.css({height: "auto"})
                    }, 300)) : o.hasClass("active-toggle") && (l.css({height: l.outerHeight()}), o.removeClass("active-toggle"), c.attr("aria-expanded", "false"), l.attr("aria-hidden", "true"), n && clearTimeout(n), n = setTimeout(function () {
                        l.css({height: 0})
                    }, 5))
                }); else {
                    var c = t("> .jet-toggle__content", o),
                        h = t("> .jet-toggle__content > .jet-toggle__content-inner", o).outerHeight();
                    h += parseInt(c.css("border-top-width")) + parseInt(c.css("border-bottom-width")), o.toggleClass("active-toggle"), o.hasClass("active-toggle") ? (c.css({height: h}), e.attr("aria-expanded", "true"), c.attr("aria-hidden", "false"), d.ajaxTemplate && u(i), s.trigger("jet-tabs/accordion/show-toggle-event/before", {
                        widgetId: r,
                        toggleIndex: i
                    }), a && clearTimeout(a), a = setTimeout(function () {
                        s.trigger("jet-tabs/accordion/show-toggle-event/after", {
                            widgetId: r,
                            toggleIndex: i
                        }), c.css({height: "auto"})
                    }, 300)) : (c.css({height: c.outerHeight()}), e.attr("aria-expanded", "false"), c.attr("aria-hidden", "true"), n && clearTimeout(n), n = setTimeout(function () {
                        c.css({height: 0})
                    }, 5))
                }
            }), g && c.each(function (e) {
                var a = t(this), o = a.attr("id");
                g.forEach(function (t, e) {
                    t === o && a.trigger("click.jetAccordion")
                })
            }), t(document).on("click.jetAccordionAnchor", 'a[href*="#jet-toggle-control-"]', function (a) {
                var o = t(this.hash);
                o.closest(e)[0] && o.trigger("click.jetAccordion")
            })
        },
        imageAccordionInit: function (e) {
            var a, o = t(".jet-image-accordion", e);
            o.length && (a = o.data("settings"), new jetImageAccordion(o, a).init())
        },
        loadScriptAsync: function (t, e) {
            return o.addedScripts.hasOwnProperty(t) ? t : (o.addedScripts[t] = e, new Promise((a, o) => {
                var n = document.createElement("script");
                n.src = e, n.async = !0, n.onload = (() => {
                    a(t)
                }), document.head.appendChild(n)
            }))
        },
        loadStyle: function (t, e) {
            return o.addedStyles.hasOwnProperty(t) && o.addedStyles[t] === e ? t : (o.addedStyles[t] = e, new Promise((a, o) => {
                var n = document.createElement("link");
                n.id = t, n.rel = "stylesheet", n.href = e, n.type = "text/css", n.media = "all", n.onload = (() => {
                    a(t)
                }), document.head.appendChild(n)
            }))
        },
        elementorFrontendInit: function (e) {
            e.find("div[data-element_type]").each(function () {
                var e = t(this), a = e.data("element_type");
                if (a) try {
                    "widget" === a && (a = e.data("widget_type"), window.elementorFrontend.hooks.doAction("frontend/element_ready/widget", e, t)), window.elementorFrontend.hooks.doAction("frontend/element_ready/global", e, t), window.elementorFrontend.hooks.doAction("frontend/element_ready/" + a, e, t)
                } catch (t) {
                    return console.log(t), e.remove(), !1
                }
            })
        }
    };
    window.jetImageAccordion = function (e, a) {
        var o, n = this, i = e, r = t(".jet-image-accordion__item", i), s = r.length;
        a = a || {};
        a = t.extend({
            orientation: "vertical",
            activeSize: {size: 50, unit: "%"},
            duration: 500,
            activeItem: -1
        }, a), o = a.activeItem, this.layoutBuild = function () {
            r.css({"transition-duration": a.duration + "ms"}), r.each(function (e) {
                e === o && (t(this).addClass("active-accordion"), n.layoutRender())
            }), t(".jet-image-accordion__image-instance", r).imagesLoaded().progress(function (e, a) {
                var o = t(a.img), n = o.closest(".jet-image-accordion__item"),
                    i = t(".jet-image-accordion__item-loader", n);
                o.addClass("loaded"), i.fadeTo(250, 0, function () {
                    t(this).remove()
                })
            }), n.layoutRender(), n.addEvents()
        }, this.layoutRender = function (e) {
            var o = a.activeSize.size, n = ((100 / s).toFixed(2), o / ((100 - o) / (s - 1)));
            t(".jet-image-accordion__item:not(.active-accordion)", i).css({"flex-grow": 1}), t(".active-accordion", i).css({"flex-grow": n})
        }, this.addEvents = function () {
            var e = t(window).scrollTop();
            "ontouchend" in window || "ontouchstart" in window ? (r.on("touchstart.jetImageAccordion", function (a) {
                e = t(window).scrollTop()
            }), r.on("touchend.jetImageAccordion", function (a) {
                a.stopPropagation();
                var o = t(this);
                if (e !== t(window).scrollTop()) return !1;
                o.hasClass("active-accordion") ? r.removeClass("active-accordion") : (r.removeClass("active-accordion"), o.addClass("active-accordion")), n.layoutRender()
            })) : r.on("mouseenter", function (e) {
                var a = t(this);
                a.hasClass("active-accordion") || (r.removeClass("active-accordion"), a.addClass("active-accordion")), n.layoutRender()
            }), i.on("mouseleave.jetImageAccordion", function (t) {
                r.removeClass("active-accordion"), -1 !== o && r.eq(o).addClass("active-accordion"), n.layoutRender()
            })
        }, this.init = function () {
            n.layoutBuild()
        }
    }, t(window).on("elementor/frontend/init", o.init)
}(jQuery, window.elementorFrontend, window.JetTabsSettings);
(function ($, elementor) {
    'use strict';
    var JetTricks = {
        init: function () {
            elementor.hooks.addAction('frontend/element_ready/section', JetTricks.elementorSection);
            elementor.hooks.addAction('frontend/element_ready/column', JetTricks.elementorColumn);
            elementor.hooks.addAction('frontend/element_ready/widget', JetTricks.elementorWidget);
            var widgets = {
                'jet-view-more.default': JetTricks.widgetViewMore,
                'jet-unfold.default': JetTricks.widgetUnfold,
                'jet-hotspots.default': JetTricks.widgetHotspots
            };
            $.each(widgets, function (widget, callback) {
                elementor.hooks.addAction('frontend/element_ready/' + widget, callback);
            });
        }, elementorSection: function ($scope) {
            var $target = $scope, sectionId = $scope.data('id'), editMode = Boolean(elementor.isEditMode()),
                settings = {};
            if (window.JetTricksSettings && window.JetTricksSettings.elements_data.sections.hasOwnProperty(sectionId)) {
                settings = window.JetTricksSettings.elements_data.sections[sectionId];
            }
            if (editMode) {
                settings = JetTricks.sectionEditorSettings(sectionId);
            }
            if (!settings) {
                return false;
            }
            if (jQuery.isEmptyObject(settings)) {
                return false;
            }
            if ('false' === settings.particles || '' === settings.particles_json) {
                return false;
            }
            var particlesId = 'jet-tricks-particles-instance-' + sectionId,
                particlesJson = JSON.parse(settings.particles_json);
            $scope.prepend('<div id="' + particlesId + '" class="jet-tricks-particles-section__instance"></div>');
            particlesJS(particlesId, particlesJson);
        }, elementorColumn: function ($scope) {
            var $target = $scope, $window = $(window), columnId = $target.data('id'),
                editMode = Boolean(elementor.isEditMode()), settings = {}, stickyInstance = null,
                stickyInstanceOptions = {
                    topSpacing: 50,
                    bottomSpacing: 50,
                    containerSelector: '.elementor-row',
                    innerWrapperSelector: '.elementor-column-wrap',
                };
            if (!editMode) {
                settings = $target.data('jet-settings');
                if ($target.hasClass('jet-sticky-column')) {
                    if (-1 !== settings['stickyOn'].indexOf(elementorFrontend.getCurrentDeviceMode())) {
                        stickyInstanceOptions.topSpacing = settings['topSpacing'];
                        stickyInstanceOptions.bottomSpacing = settings['bottomSpacing'];
                        $target.data('stickyColumnInit', true);
                        stickyInstance = new StickySidebar($target[0], stickyInstanceOptions);
                        $window.on('resize.JetTricksStickyColumn orientationchange.JetTricksStickyColumn', JetTricksTools.debounce(50, resizeDebounce));
                    }
                }
            } else {
                return false;
                settings = JetTricks.columnEditorSettings(columnId);
                if ('true' === settings['sticky']) {
                    $target.addClass('jet-sticky-column');
                    if (-1 !== settings['stickyOn'].indexOf(elementorFrontend.getCurrentDeviceMode())) {
                        stickyInstanceOptions.topSpacing = settings['topSpacing'];
                        stickyInstanceOptions.bottomSpacing = settings['bottomSpacing'];
                        $target.data('stickyColumnInit', true);
                        stickyInstance = new StickySidebar($target[0], stickyInstanceOptions);
                        $window.on('resize.JetTricksStickyColumn orientationchange.JetTricksStickyColumn', JetTricksTools.debounce(50, resizeDebounce));
                    }
                }
            }

            function resizeDebounce() {
                var currentDeviceMode = elementorFrontend.getCurrentDeviceMode(),
                    availableDevices = settings['stickyOn'] || [], isInit = $target.data('stickyColumnInit');
                if (-1 !== availableDevices.indexOf(currentDeviceMode)) {
                    if (!isInit) {
                        $target.data('stickyColumnInit', true);
                        stickyInstance = new StickySidebar($target[0], stickyInstanceOptions);
                        stickyInstance.updateSticky();
                    }
                } else {
                    $target.data('stickyColumnInit', false);
                    stickyInstance.destroy();
                }
            }
        }, elementorWidget: function ($scope) {
            var parallaxInstance = null, satelliteInstance = null, tooltipInstance = null;
            parallaxInstance = new jetWidgetParallax($scope);
            parallaxInstance.init();
            satelliteInstance = new jetWidgetSatellite($scope);
            satelliteInstance.init();
            tooltipInstance = new jetWidgetTooltip($scope);
            tooltipInstance.init();
        }, widgetViewMore: function ($scope) {
            var $target = $scope.find('.jet-view-more'), instance = null, settings = $target.data('settings');
            instance = new jetViewMore($target, settings);
            instance.init();
        }, widgetUnfold: function ($scope) {
            var $target = $scope.find('.jet-unfold'), $body = $('body'), $button = $('.jet-unfold__button', $target),
                $mask = $('.jet-unfold__mask', $target), $content = $('.jet-unfold__content', $target),
                settings = $target.data('settings'), maskHeight = +settings['height']['size'] || 100,
                maskTabletHeight = +settings['heightTablet']['size'] || maskHeight,
                maskMobileHeight = +settings['heightMobile']['size'] || maskHeight,
                separatorHeight = +settings['separatorHeight']['size'] || 20,
                unfoldDuration = settings['unfoldDuration'], foldDuration = settings['unfoldDuration'],
                unfoldEasing = settings['unfoldEasing'], foldEasing = settings['foldEasing'];
            if (!$target.hasClass('jet-unfold-state')) {
                $mask.css({'height': maskHeight});
            }
            $button.on('click.jetUnfold', function () {
                var $this = $(this), $buttonText = $('.jet-unfold__button-text', $this),
                    unfoldText = $this.data('unfold-text'), foldText = $this.data('fold-text'),
                    $buttonIcon = $('.jet-unfold__button-icon', $this), unfoldIcon = $this.data('unfold-icon'),
                    foldIcon = $this.data('fold-icon'), contentHeight = $content.outerHeight(),
                    deviceHeight = getDeviceHeight();
                if (!$target.hasClass('jet-unfold-state')) {
                    $target.addClass('jet-unfold-state');
                    $buttonIcon.html('<i class="' + foldIcon + '"></i>');
                    $buttonText.html(foldText);
                    anime({
                        targets: $mask[0],
                        height: contentHeight,
                        duration: unfoldDuration['size'],
                        easing: unfoldEasing
                    });
                } else {
                    $target.removeClass('jet-unfold-state');
                    $buttonIcon.html('<i class="' + unfoldIcon + '"></i>');
                    $buttonText.html(unfoldText);
                    anime({
                        targets: $mask[0],
                        height: deviceHeight,
                        duration: foldDuration['size'],
                        easing: foldEasing
                    });
                }
            });
            $(window).on('resize.jetWidgetUnfold orientationchange.jetWidgetUnfold', JetTricksTools.debounce(50, function () {
                var deviceHeight = getDeviceHeight(), contentHeight = $content.outerHeight();
                if (!$target.hasClass('jet-unfold-state')) {
                    $mask.css({'height': deviceHeight});
                } else {
                    $mask.css({'height': contentHeight});
                }
            }));

            function getDeviceHeight() {
                var $deviceMode = elementor.getCurrentDeviceMode(), deviceHeight = maskHeight;
                switch ($deviceMode) {
                    case'desktop':
                        deviceHeight = maskHeight;
                        break;
                    case'tablet':
                        deviceHeight = maskTabletHeight;
                        break;
                    case'mobile':
                        deviceHeight = maskMobileHeight;
                        break;
                }
                return deviceHeight;
            }
        }, widgetHotspots: function ($scope) {
            var $target = $scope.find('.jet-hotspots'), $hotspots = $('.jet-hotspots__item', $target),
                settings = $target.data('settings'), editMode = Boolean(elementor.isEditMode());
            $target.imagesLoaded().progress(function () {
                $target.addClass('image-loaded');
            });
            $hotspots.each(function (index) {
                var $this = $(this), horizontal = $this.data('horizontal-position'),
                    vertical = $this.data('vertical-position'), itemSelector = $this[0];
                $this.css({'left': horizontal + '%', 'top': vertical + '%'});
                if (itemSelector._tippy) {
                    itemSelector._tippy.destroy();
                }
                tippy([itemSelector], {
                    arrow: settings['tooltipArrow'],
                    arrowType: settings['tooltipArrowType'],
                    arrowTransform: settings['tooltipArrowSize'],
                    duration: [settings['tooltipShowDuration']['size'], settings['tooltipHideDuration']['size']],
                    distance: settings['tooltipDistance']['size'],
                    placement: settings['tooltipPlacement'],
                    trigger: settings['tooltipTrigger'],
                    animation: settings['tooltipAnimation'],
                    flipBehavior: 'clockwise',
                    appendTo: itemSelector,
                    hideOnClick: 'manual' !== settings['tooltipTrigger'],
                });
                if ('manual' === settings['tooltipTrigger'] && itemSelector._tippy) {
                    itemSelector._tippy.show();
                }
                if (settings['tooltipShowOnInit'] && itemSelector._tippy) {
                    itemSelector._tippy.show();
                }
                if (editMode && itemSelector._tippy) {
                    itemSelector._tippy.show();
                }
            });
        }, columnEditorSettings: function (columnId) {
            var editorElements = null, columnData = {};
            if (!window.elementor.hasOwnProperty('elements')) {
                return false;
            }
            editorElements = window.elementor.elements;
            if (!editorElements.models) {
                return false;
            }
            $.each(editorElements.models, function (index, obj) {
                $.each(obj.attributes.elements.models, function (index, obj) {
                    if (columnId == obj.id) {
                        columnData = obj.attributes.settings.attributes;
                    }
                });
            });
            return {
                'sticky': columnData['jet_tricks_column_sticky'] || false,
                'topSpacing': columnData['jet_tricks_top_spacing'] || 50,
                'bottomSpacing': columnData['jet_tricks_bottom_spacing'] || 50,
                'stickyOn': columnData['jet_tricks_column_sticky_on'] || ['desktop', 'tablet', 'mobile']
            }
        }, sectionEditorSettings: function (sectionId) {
            var editorElements = null, sectionData = {};
            if (!window.elementor.hasOwnProperty('elements')) {
                return false;
            }
            editorElements = window.elementor.elements;
            if (!editorElements.models) {
                return false;
            }
            $.each(editorElements.models, function (index, obj) {
                if (sectionId == obj.id) {
                    sectionData = obj.attributes.settings.attributes;
                }
            });
            return {
                'particles': sectionData['section_jet_tricks_particles'] || 'false',
                'particles_json': sectionData['section_jet_tricks_particles_json'] || '',
            }
        }
    };
    $(window).on('elementor/frontend/init', JetTricks.init);
    var JetTricksTools = {
        debounce: function (threshold, callback) {
            var timeout;
            return function debounced($event) {
                function delayed() {
                    callback.call(this, $event);
                    timeout = null;
                }

                if (timeout) {
                    clearTimeout(timeout);
                }
                timeout = setTimeout(delayed, threshold);
            };
        }, widgetEditorSettings: function (widgetId) {
            var editorElements = null, widgetData = {};
            if (!window.elementor.hasOwnProperty('elements')) {
                return false;
            }
            editorElements = window.elementor.elements;
            if (!editorElements.models) {
                return false;
            }
            $.each(editorElements.models, function (index, obj) {
                $.each(obj.attributes.elements.models, function (index, obj) {
                    $.each(obj.attributes.elements.models, function (index, obj) {
                        if (widgetId == obj.id) {
                            widgetData = obj.attributes.settings.attributes;
                        }
                    });
                });
            });
            return {
                'speed': widgetData['jet_tricks_widget_parallax_speed'] || {'size': 50, 'unit': '%'},
                'parallax': widgetData['jet_tricks_widget_parallax'] || 'false',
                'invert': widgetData['jet_tricks_widget_parallax_invert'] || 'false',
                'stickyOn': widgetData['jet_tricks_widget_parallax_on'] || ['desktop', 'tablet', 'mobile'],
                'satellite': widgetData['jet_tricks_widget_satellite'] || 'false',
                'satelliteType': widgetData['jet_tricks_widget_satellite_type'] || 'text',
                'satellitePosition': widgetData['jet_tricks_widget_satellite_position'] || 'top-center',
                'tooltip': widgetData['jet_tricks_widget_tooltip'] || 'false',
                'tooltipDescription': widgetData['jet_tricks_widget_tooltip_description'] || 'Lorem Ipsum',
                'tooltipPlacement': widgetData['jet_tricks_widget_tooltip_placement'] || 'top',
                'xOffset': widgetData['jet_tricks_widget_tooltip_x_offset'] || 0,
                'yOffset': widgetData['jet_tricks_widget_tooltip_y_offset'] || 0,
                'tooltipAnimation': widgetData['jet_tricks_widget_tooltip_animation'] || 'shift-toward',
                'zIndex': widgetData['jet_tricks_widget_tooltip_z_index'] || '999'
            }
        }
    }
    window.jetViewMore = function ($selector, settings) {
        var self = this, $window = $(window), $button = $('.jet-view-more__button', $selector),
            defaultSettings = {sections: {}, effect: 'move-up', showall: false},
            settings = $.extend({}, defaultSettings, settings), sections = settings['sections'], sectionsData = {},
            buttonVisible = true, editMode = Boolean(elementor.isEditMode());
        self.init = function () {
            self.setSectionsData();
            if (editMode) {
                return false;
            }
            $button.on('click', function () {
                for (var section in sectionsData) {
                    var $section = sectionsData[section]['selector'];
                    if (!settings.showall) {
                        if (!sectionsData[section]['visible']) {
                            sectionsData[section]['visible'] = true;
                            $section.addClass('view-more-visible');
                            $section.addClass('jet-tricks-' + settings['effect'] + '-effect');
                            break;
                        }
                    } else {
                        sectionsData[section]['visible'] = true;
                        $section.addClass('view-more-visible');
                        $section.addClass('jet-tricks-' + settings['effect'] + '-effect');
                    }
                }
                for (var section in sectionsData) {
                    buttonVisible = true;
                    if (sectionsData[section]['visible']) {
                        buttonVisible = false;
                    }
                }
                if (!buttonVisible) {
                    $button.css({'display': 'none'});
                }
            });
        };
        self.setSectionsData = function () {
            for (var section in sections) {
                var $selector = $('#' + sections[section]);
                if (!editMode) {
                    $selector.addClass('jet-view-more-section');
                } else {
                    $selector.addClass('jet-view-more-section-edit-mode');
                }
                sectionsData[section] = {'section_id': sections[section], 'selector': $selector, 'visible': false,}
            }
        };
    };
    window.jetWidgetParallax = function ($scope) {
        var self = this, $target = $('> .elementor-widget-container', $scope),
            $section = $scope.closest('.elementor-top-section'), widgetId = $scope.data('id'), settings = {},
            editMode = Boolean(elementor.isEditMode()), $window = $(window),
            isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/), platform = navigator.platform,
            safariClass = isSafari ? 'is-safari' : '', macClass = 'MacIntel' == platform ? ' is-mac' : '';
        self.init = function () {
            $scope.addClass(macClass);
            if (!editMode) {
                settings = $scope.data('jet-tricks-settings');
            } else {
                settings = JetTricksTools.widgetEditorSettings(widgetId);
            }
            if (!settings) {
                return false;
            }
            if ('undefined' === typeof settings) {
                return false;
            }
            if ('false' === settings['parallax'] || 'undefined' === typeof settings['parallax']) {
                return false;
            }
            $window.on('scroll.jetWidgetParallax resize.jetWidgetParallax', self.scrollHandler).trigger('resize.jetWidgetParallax');
        };
        self.scrollHandler = function (event) {
            var speed = +settings['speed']['size'] * 0.01, invert = 'true' == settings['invert'] ? -1 : 1,
                winHeight = $window.height(), winScrollTop = $window.scrollTop(), offsetTop = $scope.offset().top,
                thisHeight = $scope.outerHeight(), sectionHeight = $section.outerHeight(),
                positionDelta = winScrollTop - offsetTop + (winHeight / 2), abs = positionDelta > 0 ? 1 : -1,
                posY = abs * Math.pow(Math.abs(positionDelta), 0.85), availableDevices = settings['stickyOn'] || [],
                currentDeviceMode = elementorFrontend.getCurrentDeviceMode();
            posY = invert * Math.ceil(speed * posY);
            if (-1 !== availableDevices.indexOf(currentDeviceMode)) {
                $target.css({'transform': 'translateY(' + posY + 'px)'});
            } else {
                $target.css({'transform': 'translateY(0)'});
            }
        };
    };
    window.jetWidgetSatellite = function ($scope) {
        var self = this, widgetId = $scope.data('id'), settings = {}, editMode = Boolean(elementor.isEditMode());
        self.init = function () {
            if (!editMode) {
                settings = $scope.data('jet-tricks-settings');
            } else {
                settings = JetTricksTools.widgetEditorSettings(widgetId);
            }
            if (!settings) {
                return false;
            }
            if ('undefined' === typeof settings) {
                return false;
            }
            if ('false' === settings['satellite'] || 'undefined' === typeof settings['satellite']) {
                return false;
            }
            $scope.addClass('jet-satellite-widget');
            $('.jet-tricks-satellite', $scope).addClass('jet-tricks-satellite--' + settings['satellitePosition']);
        };
    };
    window.jetWidgetTooltip = function ($scope) {
        var self = this, widgetId = $scope.data('id'), widgetSelector = $scope[0], settings = {},
            editMode = Boolean(elementor.isEditMode()), tooltipEvent = editMode ? 'click' : 'mouseenter';
        self.init = function () {
            if (!editMode) {
                settings = $scope.data('jet-tricks-settings');
            } else {
                settings = JetTricksTools.widgetEditorSettings(widgetId);
            }
            if (!settings) {
                return false;
            }
            if ('undefined' === typeof settings) {
                return false;
            }
            if ('false' === settings['tooltip'] || 'undefined' === typeof settings['tooltip'] || '' === settings['tooltipDescription']) {
                return false;
            }
            $scope.addClass('jet-tooltip-widget');
            if (widgetSelector._tippy) {
                widgetSelector._tippy.destroy();
            }
            var tippyInstance = tippy([widgetSelector], {
                html: document.querySelector('#jet-tricks-tooltip-content-' + widgetId),
                appendTo: widgetSelector,
                arrow: true,
                placement: settings['tooltipPlacement'],
                flipBehavior: 'clockwise',
                trigger: tooltipEvent,
                offset: settings['xOffset'] + ', ' + settings['yOffset'],
                animation: settings['tooltipAnimation'],
                zIndex: settings['zIndex']
            });
            if (editMode && widgetSelector._tippy) {
                widgetSelector._tippy.show();
            }
        };
    };
}(jQuery, window.elementorFrontend));
if (function (c, i, a) {
    "use strict";
    var o = {
        YT: null, init: function () {
            var t = {
                "jet-blog-smart-listing.default": o.initSmartListing,
                "jet-blog-smart-tiles.default": o.initSmartTiles,
                "jet-blog-text-ticker.default": o.initTextTicker,
                "jet-blog-video-playlist.default": o.initPlayList
            };
            c.each(t, function (t, e) {
                i.hooks.addAction("frontend/element_ready/" + t, e)
            })
        }, initPlayList: function (i) {
            void 0 !== YT.Player ? o.initPlayListCb(i, YT) : c(document).on("JetYouTubeIframeAPIReady", function (t, e) {
                o.initPlayListCb(i, e)
            })
        }, initPlayListCb: function (t, e) {
            null === o.YT && (o.YT = e), t.hasClass("players-initialized") || (t.addClass("players-initialized"), o.switchVideo(t.find(".jet-blog-playlist__item.jet-blog-active")), t.on("click.JetBlog", ".jet-blog-playlist__item", function () {
                t.find(".jet-blog-playlist__canvas").addClass("jet-blog-canvas-active"), o.switchVideo(c(this))
            }), t.on("click.JetBlog", ".jet-blog-playlist__canvas-overlay", o.stopVideo))
        }, initTextTicker: function (t) {
            var r = null, d = t.find(".jet-text-ticker__posts"), e = d.data("typing"), i = d.data("slider-atts");

            function o(t) {
                var e = 0, i = t.closest(".jet-text-ticker__item-typed"), a = t.data("typing-text"), s = a.length;
                i.addClass("jet-text-typing"), t.text(a.substr(0, e++)), r = setInterval(function () {
                    e <= s ? t.text(a.substr(0, e++)) : (clearInterval(r), i.removeClass("jet-text-typing"))
                }, 40)
            }

            e && (d.on("init", function (t, e) {
                o(c('[data-slick-index="' + e.currentSlide + '"] .jet-text-ticker__item-typed-inner', d))
            }), d.on("beforeChange", function (t, e, i, a) {
                var s = c('[data-slick-index="' + i + '"] .jet-text-ticker__item-typed', d),
                    n = c('[data-slick-index="' + i + '"] .jet-text-ticker__item-typed-inner', d),
                    l = c('[data-slick-index="' + a + '"] .jet-text-ticker__item-typed-inner', d);
                clearInterval(r), s.removeClass("jet-text-typing"), n.text(""), o(l)
            })), d.slick(i)
        }, initSmartListing: function (t) {
            t.on("click.JetBlog", ".jet-smart-listing__filter-item a", o.handleSmartListingFilter), t.on("click.JetBlog", ".jet-smart-listing__arrow", o.handleSmartListingPager);
            var e = t.find(".jet-smart-listing__filter");
            e.data("rollup") && e.JetBlogMore(), c(document).trigger("jet-blog-smart-list/init", [t, o])
        }, initSmartTiles: function (t) {
            var e = t.find(".jet-smart-tiles-carousel");
            if (0 === e.length) return !1;
            var i = e.data("slider-atts");
            e.slick(i)
        }, stopVideo: function (t) {
            var e = c(t.currentTarget).closest(".jet-blog-playlist__canvas"), i = e.data("player"),
                a = e.data("provider");
            e.hasClass("jet-blog-canvas-active") && (e.removeClass("jet-blog-canvas-active"), o.pauseCurrentPlayer(i, a))
        }, switchVideo: function (t) {
            var e = t.closest(".jet-blog-playlist").find(".jet-blog-playlist__canvas"),
                i = t.closest(".jet-blog-playlist").find(".jet-blog-playlist__counter-val"), a = t.data("id"),
                s = e.find("#embed_wrap_" + a), n = t.data("player"), l = t.data("provider"), r = e.data("player"),
                d = e.data("provider");
            if (n && (o.startNewPlayer(n, l), e.data("provider", l), e.data("player", n)), r && o.pauseCurrentPlayer(r, d), i.length && i.html(t.data("video_index")), t.siblings().removeClass("jet-blog-active"), t.hasClass("jet-blog-active") || t.addClass("jet-blog-active"), !s.length) {
                switch (s = c('<div id="embed_wrap_' + a + '"></div>').appendTo(e), l) {
                    case"youtube":
                        o.intYouTubePlayer(t, {
                            id: a,
                            canvas: e,
                            currentPlayer: r,
                            playerTarget: s,
                            height: t.data("height"),
                            videoId: t.data("video_id")
                        });
                        break;
                    case"vimeo":
                        o.intVimeoPlayer(t, {
                            id: a,
                            canvas: e,
                            currentPlayer: r,
                            playerTarget: s,
                            html: c.parseJSON(t.data("html"))
                        })
                }
                s.addClass("jet-blog-playlist__embed-wrap")
            }
            s.addClass("jet-blog-active").siblings().removeClass("jet-blog-active")
        }, intYouTubePlayer: function (i, a) {
            var t = c('<div id="embed_' + a.id + '"></div>').appendTo(a.playerTarget);
            new o.YT.Player(t[0], {
                height: a.height,
                width: "100%",
                videoId: a.videoId,
                playerVars: {showinfo: 0, rel: 0},
                events: {
                    onReady: function (t) {
                        i.data("player", t.target), a.currentPlayer && t.target.playVideo(), a.canvas.data("provider", "youtube"), a.canvas.data("player", t.target)
                    }, onStateChange: function (t) {
                        var e = i.find(".jet-blog-playlist__item-index");
                        if (e.length) switch (t.data) {
                            case 1:
                                e.removeClass("jet-is-paused").addClass("jet-is-playing"), a.canvas.hasClass("jet-blog-canvas-active") || a.canvas.addClass("jet-blog-canvas-active");
                                break;
                            case 2:
                                e.removeClass("jet-is-playing").addClass("jet-is-paused")
                        }
                    }
                }
            })
        }, intVimeoPlayer: function (e, i) {
            var t = c(i.html).appendTo(i.playerTarget), a = new Vimeo.Player(t[0]),
                s = e.find(".jet-blog-playlist__item-index");
            a.on("loaded", function (t) {
                e.data("player", this), i.currentPlayer && this.play(), i.canvas.data("provider", "vimeo"), i.canvas.data("player", this)
            }), a.on("play", function () {
                s.length && (s.removeClass("jet-is-paused").addClass("jet-is-playing"), i.canvas.hasClass("jet-blog-canvas-active") || i.canvas.addClass("jet-blog-canvas-active"))
            }), a.on("pause", function () {
                s.length && s.removeClass("jet-is-playing").addClass("jet-is-paused")
            })
        }, pauseCurrentPlayer: function (t, e) {
            switch (e) {
                case"youtube":
                    t.pauseVideo();
                    break;
                case"vimeo":
                    t.pause()
            }
        }, startNewPlayer: function (t, e) {
            switch (e) {
                case"youtube":
                    setTimeout(function () {
                        t.playVideo()
                    }, 300);
                    break;
                case"vimeo":
                    t.play()
            }
        }, handleSmartListingFilter: function (t) {
            var e = c(this), i = e.closest(".jet-smart-listing__filter-item"), a = e.data("term");
            t.preventDefault(), i.closest(".jet-smart-listing__filter").find(".jet-active-item").removeClass("jet-active-item"), i.addClass("jet-active-item"), o.requestPosts(e, {
                term: a,
                paged: 1
            })
        }, handleSmartListingPager: function () {
            var t = c(this), e = t.closest(".jet-smart-listing-wrap"), i = parseInt(e.data("page"), 10), a = 1,
                s = parseInt(e.data("term"), 10), n = t.data("dir");
            t.hasClass("jet-arrow-disabled") || ("next" === n && (a = i + 1), "prev" === n && (a = i - 1), o.requestPosts(t, {
                term: s,
                paged: a
            }))
        }, requestPosts: function (t, e) {
            var i = t.closest(".jet-smart-listing-wrap");
            i.next(".jet-smart-listing-loading");
            i.hasClass("jet-processing") || (i.addClass("jet-processing"), c.ajax({
                url: a.ajaxurl,
                type: "POST",
                dataType: "json",
                data: {
                    action: "jet_blog_smart_listing_get_posts",
                    jet_request_data: e,
                    jet_widget_settings: i.data("settings")
                }
            }).done(function (t) {
                var e = i.find(".jet-smart-listing__arrows");
                i.removeClass("jet-processing").find(".jet-smart-listing").html(t.data.posts), e.length && e.replaceWith(t.data.arrows)
            }).fail(function () {
                i.removeClass("jet-processing")
            }), void 0 !== e.paged && i.data("page", e.paged), void 0 !== e.term && i.data("term", e.term))
        }
    };
    c(window).on("elementor/frontend/init", o.init);

    function t(t) {
        this.$el = c(t), this.$container = this.$el.closest(".jet-smart-listing__heading"), this.$container.find(".jet-smart-listing__title").length ? this.$heading = this.$container.find(".jet-smart-listing__title") : this.$heading = this.$container.find(".jet-smart-listing__title-placeholder"), this.settings = c.extend({
            icon: "fa fa-ellipsis-h",
            tag: "i",
            className: "jet-smart-listing__filter-item jet-smart-listing__filter-more"
        }, this.$el.data("more")), this.containerWidth = 0, this.itemsWidth = 0, this.heading = 0, this.init()
    }

    t.prototype = {
        constructor: t, init: function () {
            var t = this;
            this.containerWidth = this.$container.width(), this.heading = this.$heading.outerWidth(), this.$hiddenWrap = c('<div class="' + this.settings.className + '" hidden="hidden"><' + this.settings.tag + ' class="' + this.settings.icon + '"></' + this.settings.tag + "></div>").appendTo(this.$el), this.$hidden = c('<div class="jet-smart-listing__filter-hidden-items"></div>').appendTo(this.$hiddenWrap), this.iter = 0, this.rebuildItems(), setTimeout(function () {
                t.watch(), t.rebuildItems()
            }, 300)
        }, watch: function () {
            c(window).on("resize.JetBlogMore orientationchange.JetBlogMore", this.debounce(100, this.watcher.bind(this)))
        }, watcher: function (t) {
            this.containerWidth = this.$container.width(), this.itemsWidth = 0, this.$hidden.html(""), this.$hiddenWrap.attr("hidden", "hidden"), this.$el.find("> div[hidden]:not(.jet-smart-listing__filter-more)").each(function () {
                c(this).removeAttr("hidden")
            }), this.rebuildItems()
        }, rebuildItems: function () {
            var i = this, t = this.$el.find("> div:not(.jet-smart-listing__filter-more):not([hidden])"), a = 0,
                s = parseInt(this.$hiddenWrap.outerWidth(), 10);
            this.itemsWidth = 0, t.each(function () {
                var t = c(this), e = null;
                i.itemsWidth += t.outerWidth(), a = i.$heading.outerWidth() + s + i.itemsWidth, i.containerWidth - a < 0 && t.is(":visible") && (e = t.clone(), t.attr({hidden: "hidden"}), i.$hidden.append(e), i.$hiddenWrap.removeAttr("hidden"))
            })
        }, debounce: function (e, i) {
            var a;
            return function (t) {
                a && clearTimeout(a), a = setTimeout(function () {
                    i.call(this, t), a = null
                }, e)
            }
        }
    }, c.fn.JetBlogMore = function () {
        return this.each(function () {
            new t(this)
        })
    }
}(jQuery, window.elementorFrontend, window.JetBlogSettings), 1 === window.hasJetBlogPlaylist)function onYouTubeIframeAPIReady() {
    jQuery(document).trigger("JetYouTubeIframeAPIReady", [YT])
}
;