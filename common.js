!function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                n.d(r, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return r
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "./",
    n(n.s = 433)
}({
    0: function(e, t, n) {
        "use strict";
        n.r(t),
        function(e) {
            n.d(t, "query", (function() {
                return s
            }
            )),
            n.d(t, "queryAll", (function() {
                return l
            }
            )),
            n.d(t, "findParent", (function() {
                return h
            }
            )),
            n.d(t, "nearestParent", (function() {
                return d
            }
            )),
            n.d(t, "getNodePropOrEmptyString", (function() {
                return p
            }
            )),
            n.d(t, "stripTagsExcept", (function() {
                return m
            }
            )),
            n.d(t, "toArray", (function() {
                return f
            }
            )),
            n.d(t, "unique", (function() {
                return v
            }
            )),
            n.d(t, "isMatches", (function() {
                return g
            }
            )),
            n.d(t, "getYoutubeInfo", (function() {
                return _
            }
            )),
            n.d(t, "getYoutubeDashMPDInfo", (function() {
                return y
            }
            )),
            n.d(t, "send", (function() {
                return O
            }
            )),
            n.d(t, "get", (function() {
                return E
            }
            )),
            n.d(t, "_getSize", (function() {
                return b
            }
            )),
            n.d(t, "getSize", (function() {
                return w
            }
            )),
            n.d(t, "logDownloadError", (function() {
                return T
            }
            )),
            n.d(t, "beautifyFileSize", (function() {
                return C
            }
            )),
            n.d(t, "detectMediaTypeAndExt", (function() {
                return S
            }
            )),
            n.d(t, "getFileNameFromContentDisposition", (function() {
                return N
            }
            )),
            n.d(t, "getMediaType", (function() {
                return x
            }
            )),
            n.d(t, "getProp", (function() {
                return P
            }
            )),
            n.d(t, "call", (function() {
                return k
            }
            )),
            n.d(t, "defined", (function() {
                return L
            }
            )),
            n.d(t, "debounce", (function() {
                return D
            }
            )),
            n.d(t, "flatten", (function() {
                return I
            }
            )),
            n.d(t, "generateId", (function() {
                return M
            }
            )),
            n.d(t, "sendMessage", (function() {
                return B
            }
            )),
            n.d(t, "isSpecialUrls", (function() {
                return H
            }
            )),
            n.d(t, "getFilenameFromTitleOfDownload", (function() {
                return q
            }
            )),
            n.d(t, "getVideoId", (function() {
                return j
            }
            )),
            n.d(t, "isValidData", (function() {
                return V
            }
            )),
            n.d(t, "getBestFitResolution", (function() {
                return W
            }
            )),
            n.d(t, "createMP3Resources", (function() {
                return G
            }
            )),
            n.d(t, "splitMediaByTitle", (function() {
                return Y
            }
            )),
            n.d(t, "i18n", (function() {
                return z
            }
            )),
            n.d(t, "isSameMedia", (function() {
                return F
            }
            )),
            n.d(t, "isTikTok", (function() {
                return K
            }
            )),
            n.d(t, "cleanSymbols", (function() {
                return X
            }
            )),
            n.d(t, "fetchWithTimeout", (function() {
                return $
            }
            )),
            n.d(t, "sleep", (function() {
                return Z
            }
            )),
            n.d(t, "beDefinedOr", (function() {
                return Q
            }
            )),
            n.d(t, "mergeArray", (function() {
                return J
            }
            )),
            n.d(t, "Storage", (function() {
                return ee
            }
            )),
            n.d(t, "nextTick", (function() {
                return te
            }
            )),
            n.d(t, "jwtDecode", (function() {
                return ne
            }
            )),
            n.d(t, "formatDomain", (function() {
                return re
            }
            )),
            n.d(t, "paddZero", (function() {
                return ie
            }
            )),
            n.d(t, "transformVersionToNumber", (function() {
                return oe
            }
            )),
            n.d(t, "getDateNumber", (function() {
                return ae
            }
            )),
            n.d(t, "useDebounce", (function() {
                return ue
            }
            )),
            n.d(t, "checkSameDate", (function() {
                return ce
            }
            )),
            n.d(t, "checkDateInRow", (function() {
                return se
            }
            )),
            n.d(t, "checkIsDarkMode", (function() {
                return le
            }
            ));
            var r = n(1)
              , i = n(8)
              , o = n(2)
              , a = n(3);
            function u() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                u = function() {
                    return e
                }
                ;
                var e = {}
                  , t = Object.prototype
                  , n = t.hasOwnProperty
                  , r = Object.defineProperty || function(e, t, n) {
                    e[t] = n.value
                }
                  , i = "function" == typeof Symbol ? Symbol : {}
                  , o = i.iterator || "@@iterator"
                  , a = i.asyncIterator || "@@asyncIterator"
                  , c = i.toStringTag || "@@toStringTag";
                function s(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }),
                    e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, n) {
                        return e[t] = n
                    }
                }
                function l(e, t, n, i) {
                    var o = t && t.prototype instanceof p ? t : p
                      , a = Object.create(o.prototype)
                      , u = new S(i || []);
                    return r(a, "_invoke", {
                        value: b(e, n, u)
                    }),
                    a
                }
                function h(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = l;
                var d = {};
                function p() {}
                function m() {}
                function f() {}
                var v = {};
                s(v, o, (function() {
                    return this
                }
                ));
                var g = Object.getPrototypeOf
                  , _ = g && g(g(N([])));
                _ && _ !== t && n.call(_, o) && (v = _);
                var y = f.prototype = p.prototype = Object.create(v);
                function O(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }
                        ))
                    }
                    ))
                }
                function E(e, t) {
                    var i;
                    r(this, "_invoke", {
                        value: function(r, o) {
                            function a() {
                                return new t((function(i, a) {
                                    !function r(i, o, a, u) {
                                        var c = h(e[i], e, o);
                                        if ("throw" !== c.type) {
                                            var s = c.arg
                                              , l = s.value;
                                            return l && "object" == typeof l && n.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                                                r("next", e, a, u)
                                            }
                                            ), (function(e) {
                                                r("throw", e, a, u)
                                            }
                                            )) : t.resolve(l).then((function(e) {
                                                s.value = e,
                                                a(s)
                                            }
                                            ), (function(e) {
                                                return r("throw", e, a, u)
                                            }
                                            ))
                                        }
                                        u(c.arg)
                                    }(r, o, i, a)
                                }
                                ))
                            }
                            return i = i ? i.then(a, a) : a()
                        }
                    })
                }
                function b(e, t, n) {
                    var r = "suspendedStart";
                    return function(i, o) {
                        if ("executing" === r)
                            throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === i)
                                throw o;
                            return x()
                        }
                        for (n.method = i,
                        n.arg = o; ; ) {
                            var a = n.delegate;
                            if (a) {
                                var u = w(a, n);
                                if (u) {
                                    if (u === d)
                                        continue;
                                    return u
                                }
                            }
                            if ("next" === n.method)
                                n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === r)
                                    throw r = "completed",
                                    n.arg;
                                n.dispatchException(n.arg)
                            } else
                                "return" === n.method && n.abrupt("return", n.arg);
                            r = "executing";
                            var c = h(e, t, n);
                            if ("normal" === c.type) {
                                if (r = n.done ? "completed" : "suspendedYield",
                                c.arg === d)
                                    continue;
                                return {
                                    value: c.arg,
                                    done: n.done
                                }
                            }
                            "throw" === c.type && (r = "completed",
                            n.method = "throw",
                            n.arg = c.arg)
                        }
                    }
                }
                function w(e, t) {
                    var n = t.method
                      , r = e.iterator[n];
                    if (void 0 === r)
                        return t.delegate = null,
                        "throw" === n && e.iterator.return && (t.method = "return",
                        t.arg = void 0,
                        w(e, t),
                        "throw" === t.method) || "return" !== n && (t.method = "throw",
                        t.arg = new TypeError("The iterator does not provide a '" + n + "' method")),
                        d;
                    var i = h(r, e.iterator, t.arg);
                    if ("throw" === i.type)
                        return t.method = "throw",
                        t.arg = i.arg,
                        t.delegate = null,
                        d;
                    var o = i.arg;
                    return o ? o.done ? (t[e.resultName] = o.value,
                    t.next = e.nextLoc,
                    "return" !== t.method && (t.method = "next",
                    t.arg = void 0),
                    t.delegate = null,
                    d) : o : (t.method = "throw",
                    t.arg = new TypeError("iterator result is not an object"),
                    t.delegate = null,
                    d)
                }
                function T(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]),
                    2 in e && (t.finallyLoc = e[2],
                    t.afterLoc = e[3]),
                    this.tryEntries.push(t)
                }
                function C(e) {
                    var t = e.completion || {};
                    t.type = "normal",
                    delete t.arg,
                    e.completion = t
                }
                function S(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }],
                    e.forEach(T, this),
                    this.reset(!0)
                }
                function N(e) {
                    if (e) {
                        var t = e[o];
                        if (t)
                            return t.call(e);
                        if ("function" == typeof e.next)
                            return e;
                        if (!isNaN(e.length)) {
                            var r = -1
                              , i = function t() {
                                for (; ++r < e.length; )
                                    if (n.call(e, r))
                                        return t.value = e[r],
                                        t.done = !1,
                                        t;
                                return t.value = void 0,
                                t.done = !0,
                                t
                            };
                            return i.next = i
                        }
                    }
                    return {
                        next: x
                    }
                }
                function x() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return m.prototype = f,
                r(y, "constructor", {
                    value: f,
                    configurable: !0
                }),
                r(f, "constructor", {
                    value: m,
                    configurable: !0
                }),
                m.displayName = s(f, c, "GeneratorFunction"),
                e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
                }
                ,
                e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f,
                    s(e, c, "GeneratorFunction")),
                    e.prototype = Object.create(y),
                    e
                }
                ,
                e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }
                ,
                O(E.prototype),
                s(E.prototype, a, (function() {
                    return this
                }
                )),
                e.AsyncIterator = E,
                e.async = function(t, n, r, i, o) {
                    void 0 === o && (o = Promise);
                    var a = new E(l(t, n, r, i),o);
                    return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                        return e.done ? e.value : a.next()
                    }
                    ))
                }
                ,
                O(y),
                s(y, c, "Generator"),
                s(y, o, (function() {
                    return this
                }
                )),
                s(y, "toString", (function() {
                    return "[object Generator]"
                }
                )),
                e.keys = function(e) {
                    var t = Object(e)
                      , n = [];
                    for (var r in t)
                        n.push(r);
                    return n.reverse(),
                    function e() {
                        for (; n.length; ) {
                            var r = n.pop();
                            if (r in t)
                                return e.value = r,
                                e.done = !1,
                                e
                        }
                        return e.done = !0,
                        e
                    }
                }
                ,
                e.values = N,
                S.prototype = {
                    constructor: S,
                    reset: function(e) {
                        if (this.prev = 0,
                        this.next = 0,
                        this.sent = this._sent = void 0,
                        this.done = !1,
                        this.delegate = null,
                        this.method = "next",
                        this.arg = void 0,
                        this.tryEntries.forEach(C),
                        !e)
                            for (var t in this)
                                "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type)
                            throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done)
                            throw e;
                        var t = this;
                        function r(n, r) {
                            return a.type = "throw",
                            a.arg = e,
                            t.next = n,
                            r && (t.method = "next",
                            t.arg = void 0),
                            !!r
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var o = this.tryEntries[i]
                              , a = o.completion;
                            if ("root" === o.tryLoc)
                                return r("end");
                            if (o.tryLoc <= this.prev) {
                                var u = n.call(o, "catchLoc")
                                  , c = n.call(o, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < o.catchLoc)
                                        return r(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc)
                                        return r(o.finallyLoc)
                                } else if (u) {
                                    if (this.prev < o.catchLoc)
                                        return r(o.catchLoc, !0)
                                } else {
                                    if (!c)
                                        throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc)
                                        return r(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var i = this.tryEntries[r];
                            if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var a = o ? o.completion : {};
                        return a.type = e,
                        a.arg = t,
                        o ? (this.method = "next",
                        this.next = o.finallyLoc,
                        d) : this.complete(a)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type)
                            throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                        this.method = "return",
                        this.next = "end") : "normal" === e.type && t && (this.next = t),
                        d
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e)
                                return this.complete(n.completion, n.afterLoc),
                                C(n),
                                d
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var i = r.arg;
                                    C(n)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: n
                        },
                        "next" === this.method && (this.arg = void 0),
                        d
                    }
                },
                e
            }
            var c = function(e, t, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }
                    function u(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, u)
                    }
                    c((r = r.apply(e, t || [])).next())
                }
                ))
            };
            function s(e, t) {
                return (t = t || document).querySelector(e)
            }
            function l(e, t) {
                var n, r;
                return f(null !== (r = null === (n = (t = t || document).querySelectorAll) || void 0 === n ? void 0 : n.call(t, e)) && void 0 !== r ? r : [])
            }
            function h(e, t) {
                for (; null !== e && e.classList && !e.classList.contains(t); )
                    e = e.parentNode;
                return e
            }
            function d(e, t) {
                for (var n, r = null === (n = document.body.parentNode) || void 0 === n ? void 0 : n.parentNode, i = e; null != i && i != r && !i.matches(t); )
                    i = i.parentElement;
                return r == i ? null : i
            }
            function p(e, t) {
                return e && e[t] || ""
            }
            function m(e) {
                return e.replace(/<(?!\/?(?:b|em))[^>]+>/g, "")
            }
            function f(e) {
                return Array.prototype.slice.call(e)
            }
            function v(e) {
                return Array.from(new Set(e))
            }
            function g(e, t) {
                var n, r, i;
                if (Array.isArray(e)) {
                    for (n = 0; n < e.length; ++n)
                        if (g(e[n], t))
                            return !0;
                    return !1
                }
                for (n = 0,
                r = (t = Array.isArray(t) ? t : [t]).length; n < r; ++n)
                    if ("string" == typeof (i = t[n]) && -1 !== e.indexOf(i) || i instanceof RegExp && e.match(i))
                        return !0;
                return !1
            }
            function _(e) {
                return c(this, void 0, void 0, u().mark((function t() {
                    return u().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", new Promise(t => {
                                    EE.emit("message.background.send", {
                                        type: "youtube_get_info",
                                        data: {
                                            method: "GET",
                                            url: e
                                        }
                                    }),
                                    EE.on("youtube_get_info_result", n => {
                                        n.data.url === e && t(n.data)
                                    }
                                    )
                                }
                                ));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))
            }
            function y(e) {
                return c(this, void 0, void 0, u().mark((function t() {
                    return u().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", new Promise(t => {
                                    EE.emit("message.background.send", {
                                        type: "youtube_get_mpd_info",
                                        data: {
                                            url: e,
                                            method: "GET"
                                        }
                                    }),
                                    EE.on("youtube_set_mpd_info", e => {
                                        var n, r;
                                        e && "resolve" === (null === (n = e.data) || void 0 === n ? void 0 : n.success) && t(null === (r = e.data) || void 0 === r ? void 0 : r.response)
                                    }
                                    )
                                }
                                ));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))
            }
            function O(t, n, i, o) {
                var a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
                  , u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "FormData";
                function c(e) {
                    return [/www\.facebook\.com\/video\/tahoe\/async\/\d+\/\?originalmediaid=\d.+&payloadtype=primary/, /vnecdn\.net/, /vnecdn\.net\/vnexpress\/video\/.+master.m3u8$/, /.smamuhh1metro/, /gpt[0-9]+\.phimmoi\.net/, /vtvgiaitri\.vn/, /hydra/, /www\.facebook\.com\/api\/graphql/, /www.facebook.com\/video\/tahoe\/async/, /www\.nhaccuatui\.com\/flash\/xml\?key3/, /content-aapm1\.uplynk\.com/, /master2-eu\.playerx\.stream/, /i\.instagram\.com\/api\/v1\/media/, /s\d+\.imacdn\.com/, /ok\d+-\d+\.vkuser\.net/, /vd\d+\.mycdn\.me/, /cdn\.javhd\..+\/stream\/.+\.m3u8/].some(t => e.match(t))
                }
                if (e.IS_CONTENT_SCRIPT && !c(n)) {
                    var s = "background_request." + M();
                    return EE.emit("message.background.send", {
                        type: r.a.FETCH,
                        data: {
                            id: s,
                            method: t,
                            url: n,
                            params: i,
                            headers: o,
                            includeCredentials: a,
                            paramType: u
                        }
                    }),
                    new Promise( (e, t) => {
                        EE.on("background_request_result", n => {
                            var r = n.data;
                            r.id === s && ("resolve" === r.success ? e(r.response) : t(r.response))
                        }
                        )
                    }
                    )
                }
                var l = null
                  , h = new Headers;
                if ("object" == typeof o)
                    for (var d in o)
                        location.href.includes("nhaccuatui.com/video/") && "X-Savior-Replace-Cookie" == d || h.append(d, o[d]);
                "object" == typeof i && ("FormData" === u ? (l = Object.keys(i).map(e => e + "=" + i[e]).join("&"),
                location.host.includes("facebook") && (l = Object.keys(i).map(e => `${e}=${encodeURIComponent(i[e])}`).join("&"))) : l = JSON.stringify(i)),
                "POST" === t && h.append("Content-type", "application/x-www-form-urlencoded");
                var p = {
                    method: t,
                    headers: h,
                    cache: "reload",
                    body: l || void 0
                };
                return a && (p.credentials = "include"),
                fetch(n, p).then(e => e.text().then(t => ({
                    status: e.status,
                    statusText: e.statusText,
                    ok: e.ok,
                    redirected: e.redirected,
                    url: e.url,
                    type: e.type,
                    bodyUsed: e.bodyUsed,
                    body: e.body,
                    headers: e.headers,
                    responseText: t
                })))
            }
            function E(e, t) {
                return O("GET", e, {}, t)
            }
            function b(e) {
                var t, n = new XMLHttpRequest;
                return e = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "http";
                    if ("//" === e.slice(0, 2))
                        return t + ":" + e;
                    return e
                }(e),
                new Promise( (r, i) => {
                    function o(e) {
                        e ? r(e) : i(e),
                        n.abort(),
                        clearTimeout(t),
                        t = void 0
                    }
                    n.open("GET", e),
                    n.onreadystatechange = function() {
                        if (!(this.readyState < 2)) {
                            var e = null;
                            try {
                                e = +(this.getResponseHeader("Content-Length") || ""),
                                Number.isNaN(e) && (e = null)
                            } catch (e) {}
                            null === e && 200 !== this.status || (200 !== this.status && (e = null),
                            o(e))
                        }
                    }
                    ,
                    n.send(null),
                    t = setTimeout(o, 1e4)
                }
                )
            }
            function w(e) {
                return new Promise(t => {
                    var n = M()
                      , r = e + "_size";
                    function i(i, o) {
                        i == n && (o ? t(o) : b(e).then(e => {
                            t(e),
                            EE.emit("media-provider.cache.put", M(), r, e)
                        }
                        ).catch( () => {
                            T({
                                url: JSON.stringify(e),
                                referrer: document.referrer || location.host || JSON.stringify(e),
                                error: "Error: Cannot get media size or media url is wrong"
                            }),
                            t(null),
                            EE.emit("media-provider.cache.put", M(), r, null)
                        }
                        ))
                    }
                    EE.emit("media-provider.cache.get", n, r),
                    EE.on("media-provider.cache.hit", i),
                    EE.on("media-provider.cache.miss", i)
                }
                )
            }
            function T(e) {
                o.a.log("recordCustomData", [{
                    key: "savior_download_error",
                    value: JSON.stringify(e)
                }])
            }
            function C(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , n = ["B", "KB", "MB", "GB", "TB", "PB"]
                  , r = -1 !== window.navigator.appVersion.indexOf("Win") ? 1024 : 1e3;
                if (!e)
                    return "";
                var i, o = r;
                for (i = 0; i < n.length && e >= o; ++i)
                    e /= o;
                var a = n[i]
                  , u = Math.round(10 * e) / 10;
                return t && a && "kb" === a.toLowerCase() && (u = u.toFixed(0)),
                u + n[i]
            }
            function S(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", o = ["application/x-mpegurl", "application/vnd.apple.mpegurl", "audio/x-mpegurl", "audio/mpegurl"];
                if (-1 !== o.indexOf(n))
                    return e.type = "video",
                    e.ext = "m3u8",
                    e;
                var u = ["application/dash+xml"];
                if (-1 !== u.indexOf(n))
                    return e.type = "video",
                    e.ext = "mpd",
                    e;
                var c = x(n, e.exts || []);
                if (c && r.m[c]) {
                    e.type = c;
                    var s = n.match(/mp4|webm/g);
                    e.exts && 0 !== e.exts.length || !s || !s[0] || (e.ext = s[0])
                }
                var l = Object(a.d)(n)
                  , h = l.ext;
                if (e.ext || (e.ext = h),
                H(e.url) && (e.ext = "m3u8",
                e.exts = ["m3u8"]),
                "application/octet-stream" == n) {
                    var d = (null === (t = N(i)) || void 0 === t ? void 0 : t.split(".")) || [];
                    if (d && d.length) {
                        var p = d.shift()
                          , m = d;
                        p && (e.filename = p),
                        m && m.length && (e.exts = m,
                        h = m[m.length - 1],
                        e.ext = h,
                        "mp4" == h && (e.type = "video"))
                    }
                }
                return "mp4" == h && (e.ext = "mp4"),
                e
            }
            function N(e) {
                var t;
                return null === (t = e.match(/filename=["']([^"']+)["']/i)) || void 0 === t ? void 0 : t[1]
            }
            function x(e, t) {
                var n;
                for (var i in r.m) {
                    if (n = r.m[i],
                    e && e.match(n.rgxp))
                        return i;
                    if (Array.isArray(t) && A(t, n.extensions) || -1 !== n.extensions.indexOf(t))
                        return i
                }
                return null
            }
            function A(e, t) {
                for (var n = e.concat(t), r = {}, i = 0; i < n.length; ++i) {
                    var o = n[i];
                    if (r[o])
                        return o;
                    r[o] = !0
                }
                return null
            }
            function P(e, t) {
                return function e(t, n) {
                    var r = n.shift();
                    return !r || "object" != typeof t && "function" != typeof t || null === t ? null : 0 === n.length ? t[r] : e(t[r], n)
                }(e, t.split("."))
            }
            function k(e, t) {
                if (e && !(e.length <= 0))
                    for (var n = [].slice.call(arguments, 2), r = 0; r < e.length; r++)
                        e[r].apply(t, n)
            }
            function L(e) {
                return void 0 !== e
            }
            function D(e, t, n) {
                var r, i = !1;
                function o() {
                    if (!i) {
                        var o = this
                          , a = arguments;
                        r ? clearTimeout(r) : n && e.apply(o, a),
                        r = setTimeout(u, t || 100)
                    }
                    function u() {
                        n || e.apply(o, a),
                        r = void 0
                    }
                }
                return o.destroy = () => {
                    clearTimeout(r),
                    i = !0
                }
                ,
                o
            }
            function I(e, t) {
                var n, r = Object.prototype.toString, i = [], o = t && e || e.slice();
                if (!e.length)
                    return i;
                n = o.pop();
                do {
                    "[object Array]" === r.call(n) ? o.push.apply(o, n.filter(e => !!e)) : i.push(n)
                } while (o.length && void 0 !== (n = o.pop()));
                return i.reverse(),
                i
            }
            var R, U = 0;
            function M() {
                return U++
            }
            function B(e) {
                return new Promise(t => {
                    var n = e.type + "_" + M();
                    e.id = n,
                    EE.emit("message.background.send", e),
                    EE.on("utils.send_message_result", e => {
                        e.id === n && t(e.data)
                    }
                    )
                }
                )
            }
            function H(e) {
                if (e && "object" != typeof e) {
                    return [/(http|https):\/\/[\s\S]*(streamasia\.|\.bongngo\.|\.manga123\.net)[\s\S]*\/playlist\/|stream\.vltv\.xyz\/m3u8\/|apix\.gooqlevideo\.com\/player|khophim18\.net\/m3u8|iamplayer\.xyz\/stream.*\/Manifest/g, /hls\.mediacdn\.vn\/.+\/\S+\.mp4\.json/gi, /hls\.(tuoitre)\.vn\/\1\/\S+\.mp4\.json/gi, /vdrm\.vtvgiaitri\.vn\/stream/, /api(-v[0-9]*)*\.soundcloud\.com\/media\/soundcloud:tracks:[0-9]+/gi, /https:\/\/zingmp3\.vn\/api\/v2\/.+\?id=/, /^\/sequence\/(play|full)\/([a-z0-9]+)/i, /\/video\/(\d+)\/config(\?|$)/i, /key[0-9]=[0-9a-f]{32}/i, /^\/(api|get)_video_info/, /\.mp4.+?\.ts\?nimblesessionid=/, /meo\.saku\.net\/player/, /get\.gooqlevideo\.com\/player/, /streamsb\.biz\/playlist\/json\/[a-z0-9]+\/[a-z0-9]+/i, /discordapp\.com\/attachments\/\d+\/\d+\/[a-z0-9_\- ]+\.mp4/, /vidsugar\.com\/.+api\.json/i, /\-hls.*\.cuoiia\.top\/(cdn|media|hls)/, /vkvd\d*\.mycdn\.me/, /vk[a-z0-9\-]+\.vkuser\.net/i, /v\.douyu\.com\/api\/stream\/getStreamUrl/, /api\-.+\.(play|plhq)[\s\S]*\.(xyz|net|site|click|cfd|com)\/api\/.+(playiframe|getblob)/, /ssplay\.net\/[a-z0-9]{2,4}\/(\d+\/(\d+)\/[a-z0-9]+\/[a-z0-9]+|[a-z\d]+\/[a-z\d]+)/i, /\.helurl\.com\/uploads\/.+filename/i, /((smutr\.com)|(cdnka\.net))\/remote_control\.php?.+&file=.+\.(mp4|m3u8)/i, /\.video-delivery\.net/i, /\.asiaplayer\.site\/m3u8\/.+\/[a-z0-9]+\/master\.txt/i, /.+\.play[\s\S]*(xyz|net)\/(m3u8|hls)/i, /.+\.plhqtv[\s\S]*(xyz|net)\/(type1rdv3)/i, /v[0-9]*\.sanstream\.xyz\/video\/.*\/master.html\?.*/i, /cdn.+\/segment.+\/?token.+/i, /helvid\.([a-z0-9]+)\/hash.php\?.+/i, /southeastasia1-mediap.svc.ms\/.+\/videomanifest/i, /cdn\.animevui\.[a-z]+\/file/i, /playhh3dhay.xyz\/cdn\/hls\/.+\/master\.txt/i, /\.xyz\/cdn\/hls\/.+\/master\.txt/i, /hls\.streamcdn\.[a-z]+\/m3u8\//i, /hls\.streamcdn\.xyz\/m3u8.+/i, /\.streamc\.xyz\/get[a-z0-9]*\.php\?hash=/i, /\.streamc\.xyz\/getPlaylist\.php+/i, /intl-api.iq.com.+\/cache\-video\.iq\.com\/dash\?.+/i, /api\.bilibili\.com\/.+\/wbi\/playurl/i, /cdn\/hls\/[a-z0-9\-_]+\/master\.txt/i, /stream12345\.online\/video\/[a-z0-9\-_]+\/master\.html/i, /content\.vdcdn\.top\/stream\/master\.php/i, /([a-z0-9\-_]+\.)?cliphub\.[a-z0-9\.\-]+\/videos/i, /https:\/\/hls\.fasthls\.top\/media\/.+/i, /eporner\.com\/xhr\/video\/.+\?hash\=.+/i, /phimlongtieng\.net\/pmm\/[a-z0-9]+\.html/i, /video\.twimg\.com\/.+video\/(\d+)(\/pu)?\/pl\/[a-z0-9\-_]+\.m3u8/i].some(t => t.test(e))
                }
            }
            function q(e) {
                var t = e.title || e.filename || document.title
                  , n = "." + e.ext;
                return t = (t = (null == t ? void 0 : t.replace(/\s+/g, " ").replace(/[/\\:*?"<>|\u200c\u200d]/g, "-")) + n).match(/[*~]/gi) ? "_" + t.replace(/[*~]/gi, ".") : t
            }
            function j(e) {
                var t;
                if (!e)
                    return null;
                for (var n, r = [/^https?:\/\/(?:www\.)?youtube(?:-nocookie)?(?:\.googleapis)?\.com\/(?:(?:v)|(?:embed)|(?:e))\/(?!videoseries)([^&?]+)/i, /https?:\/\/(?:www\.)?youtu\.be\/([^#&?]+)/i, /https?:\/\/(?:www\.)?youtube\.com\/.*(?:\?|&)v=([^#&?]+)/i, /https?:\/\/(?:www\.)?youtube\.com\/shorts\/(.*)$/, /^https?:\/\/music\.youtube\.com\/watch\?v=([^#&?]+)/, /^https?:\/\/m\.youtube\.com\/watch\?v=([^#&?]+)/, /youtube.*.com\/embed\/([a-z0-9\-_]+)/i, /^https?:\/\/(?:www\.)?youtube\.com\/live\/([^#&?]+)/], i = 0; i < r.length; ++i)
                    if (n = e.match(r[i]))
                        return n[1];
                if (e.match(/youtube\.com\/embed\/videoseries/i) && (null === (t = document.querySelector('link[rel="canonical"]')) || void 0 === t ? void 0 : t.href))
                    return j(e);
                return null
            }
            function V(e) {
                if (i.a.M3U8 && Object(r.A)(e.ext))
                    return !0;
                var t = e.type;
                if (!t)
                    return !1;
                var n = r.m[t]
                  , o = n && n.extensions;
                return n && -1 !== o.indexOf(e.ext)
            }
            function W(e) {
                for (var t = 0, n = r.s.length; t < n && r.s[t] >= e; )
                    t++;
                return r.s[t - 1]
            }
            function G(e) {
                var t = e.filter((function(e) {
                    return "video" === e.type && !(!i.a.DOWNLOAD.M3U8_AUDIO && ["m3u", "m3u8"].includes(e.ext)) && ("object" == typeof e.url && e.url.audioUrl || "string" == typeof e.url)
                }
                ))
                  , n = [{
                    bitrate: "128kbps",
                    name: "Medium",
                    qualityValue: 100,
                    itag: "140"
                }, {
                    bitrate: "192kbps",
                    name: "High",
                    qualityValue: 200,
                    itag: "22"
                }, {
                    bitrate: "192kbps",
                    name: "High",
                    qualityValue: 200,
                    itag: "37"
                }, {
                    bitrate: "192kbps",
                    name: "High",
                    qualityValue: 200,
                    itag: "38"
                }, {
                    bitrate: "192kbps",
                    name: "High",
                    qualityValue: 200,
                    itag: "45"
                }, {
                    bitrate: "192kbps",
                    name: "High",
                    qualityValue: 200,
                    itag: "46"
                }, {
                    bitrate: "192kbps",
                    name: "High",
                    qualityValue: 200,
                    itag: "84"
                }, {
                    bitrate: "192kbps",
                    name: "High",
                    qualityValue: 200,
                    itag: "85"
                }, {
                    bitrate: "192kbps",
                    name: "High",
                    qualityValue: 200,
                    itag: "101"
                }, {
                    bitrate: "192kbps",
                    name: "High",
                    qualityValue: 200,
                    itag: "102"
                }, {
                    bitrate: "192kbps",
                    name: "High",
                    qualityValue: 200,
                    itag: "172"
                }]
                  , r = "www.youtube.com" === location.host ? n : [n[0]]
                  , o = [];
                return t.length ? (Y(t).forEach((function(e) {
                    var t = e.media
                      , i = r.map((function(e) {
                        var r = function(e, t) {
                            t = t.toLowerCase();
                            var n = [...e]
                              , r = e.filter((function(e) {
                                return "mp4" === e.ext
                            }
                            ));
                            r.length && (n = r);
                            var i = n.filter((function(e) {
                                return e.quality && "full hd" === e.quality.toLowerCase()
                            }
                            ))
                              , o = n.filter((function(e) {
                                return e.quality && "hd" === e.quality.toLowerCase()
                            }
                            ))
                              , a = n.filter((function(e) {
                                return e.quality && ["normal", "medium", "standard"].includes(e.quality.toLowerCase())
                            }
                            ));
                            switch (t) {
                            case "high":
                                i.length ? n = i : o.length ? n = o : a.length && (n = a);
                                break;
                            case "medium":
                            default:
                                a.length ? n = a : o.length ? n = o : i.length && (n = i)
                            }
                            var u = n.filter((function(e) {
                                return "object" == typeof e.url && e.url.audioUrl
                            }
                            ));
                            u.length && (n = u);
                            return n[0]
                        }(t, e.name)
                          , i = Object.assign({}, r);
                        if (i.url = i.url.audioUrl || i.url,
                        ["m3u8", "m3u"].includes(i.ext) && (i._hls = !0,
                        delete i._isDashMPD),
                        i.ext = "mp3",
                        i.soundOnly = !0,
                        i.quality = e.name,
                        i.resolution = e.bitrate,
                        i.type = "audio",
                        i.sortValues = {
                            qualityValue: e.qualityValue
                        },
                        "www.youtube.com" === location.host) {
                            var o = i.url.audioUrl || i.url
                              , a = new URLSearchParams(o).get("itag")
                              , u = n.find(e => e.itag === a) || n[0];
                            i.resolution !== u.bitrate && i.quality !== u.name && (i.resolution = "0kbps")
                        }
                        return i
                    }
                    ));
                    i = i.reduce( (e, t) => (e.some(e => parseInt(e.resolution) >= parseInt(t.resolution)) || (e = []).push(t),
                    e), []),
                    o = o.concat(i)
                }
                )),
                o) : o
            }
            function Y(e) {
                var t = [];
                return e.forEach(e => {
                    e.title || (e.title = e.filename);
                    var n = e.title || e.filename
                      , r = t.find(e => e.title === n || e.filename === n);
                    r ? r.media.push(e) : t.push({
                        media: [e],
                        title: n
                    })
                }
                ),
                t
            }
            try {
                R = chrome.i18n.getMessage || ( () => "")
            } catch (e) {
                R = () => ""
            }
            var z = R
              , F = (e, t) => e.type === t.type && ("string" != typeof e.url && "string" != typeof t.url ? e.url.videoUrl == t.url.videoUrl : e.url === t.url)
              , K = t => {
                var n;
                return (t = null !== (n = null != t ? t : e.tab_url) && void 0 !== n ? n : window.location.href).match(/^https:\/\/(www\.)?tiktok\.com/)
            }
              , X = e => e ? e.replaceAll(/[^aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ0-9\s\,\.\<\>\/\?\;\:\'\"\!\@\#\$\%\^\&\*\(\)\-\_\+\=\\\|]/g, "").replaceAll(/\s+/g, " ") : e
              , $ = (e, t, n) => {
                var r = t.timeout;
                return delete t.timeout,
                r ? (n = null != n ? n : new AbortController,
                setTimeout( () => n.abort(), r),
                fetch(e, Object.assign({
                    signal: n.signal
                }, t))) : fetch(e, t)
            }
              , Z = e => new Promise(t => setTimeout(t, e));
            function Q(e) {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e;
                    return t
                }
            }
            function J(e, t, n) {
                return t.forEach(t => {
                    ("function" == typeof n && n(t, e) || e.includes(t)) && e.push(t)
                }
                ),
                e
            }
            class ee {
                static get(e) {
                    return new Promise(t => {
                        chrome.storage.local.get(e, e => {
                            t(e)
                        }
                        )
                    }
                    )
                }
            }
            function te(e) {
                "function" == typeof requestAnimationFrame ? requestAnimationFrame(e) : setTimeout(e, 20)
            }
            function ne(e) {
                var t = e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")
                  , n = decodeURIComponent(window.atob(t).split("").map((function(e) {
                    return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                }
                )).join(""));
                return JSON.parse(n)
            }
            function re(e) {
                return e.trim().replace("www.", "").replace(/^https?:\/\//i, "")
            }
            function ie(e) {
                try {
                    return e <= 9 ? "0" + e : "" + e
                } catch (e) {
                    return "00"
                }
            }
            function oe(e) {
                var t = e.split(".");
                return Number(t.map(e => ie(Number(e))).join(""))
            }
            function ae(e) {
                var t = e.getFullYear()
                  , n = e.getMonth()
                  , r = e.getDate();
                return parseInt(`${t}${ie(n)}${ie(r)}`)
            }
            function ue(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
                return function(r) {
                    clearTimeout(t),
                    t = setTimeout( () => {
                        e(r)
                    }
                    , n)
                }
            }
            function ce(e) {
                var t = new Date(e)
                  , n = new Date(Date.now());
                return t.getDate() == n.getDate() && t.getMonth() == n.getMonth() && t.getFullYear() == n.getFullYear()
            }
            function se(e) {
                var t = ce(e)
                  , n = (new Date(Date.now()).setHours(0, 0, 0, 0) - new Date(e).setHours(0, 0, 0, 0)) / 86400 / 1e3 == 1;
                return !t && n
            }
            function le() {
                var e, t;
                return !!(null === (t = null === (e = null === window || void 0 === window ? void 0 : window.matchMedia) || void 0 === e ? void 0 : e.call(window, "(prefers-color-scheme: dark)")) || void 0 === t ? void 0 : t.matches)
            }
        }
        .call(this, n(10))
    },
    1: function(e, t, n) {
        "use strict";
        n.d(t, "m", (function() {
            return r
        }
        )),
        n.d(t, "t", (function() {
            return i
        }
        )),
        n.d(t, "u", (function() {
            return o
        }
        )),
        n.d(t, "A", (function() {
            return a
        }
        )),
        n.d(t, "s", (function() {
            return u
        }
        )),
        n.d(t, "n", (function() {
            return c
        }
        )),
        n.d(t, "r", (function() {
            return s
        }
        )),
        n.d(t, "j", (function() {
            return l
        }
        )),
        n.d(t, "q", (function() {
            return h
        }
        )),
        n.d(t, "b", (function() {
            return d
        }
        )),
        n.d(t, "v", (function() {
            return p
        }
        )),
        n.d(t, "p", (function() {
            return m
        }
        )),
        n.d(t, "g", (function() {
            return f
        }
        )),
        n.d(t, "c", (function() {
            return v
        }
        )),
        n.d(t, "i", (function() {
            return g
        }
        )),
        n.d(t, "h", (function() {
            return _
        }
        )),
        n.d(t, "y", (function() {
            return y
        }
        )),
        n.d(t, "k", (function() {
            return O
        }
        )),
        n.d(t, "f", (function() {
            return E
        }
        )),
        n.d(t, "e", (function() {
            return b
        }
        )),
        n.d(t, "z", (function() {
            return w
        }
        )),
        n.d(t, "w", (function() {
            return T
        }
        )),
        n.d(t, "x", (function() {
            return C
        }
        )),
        n.d(t, "a", (function() {
            return S
        }
        )),
        n.d(t, "l", (function() {
            return N
        }
        )),
        n.d(t, "o", (function() {
            return x
        }
        )),
        n.d(t, "d", (function() {
            return A
        }
        ));
        var r = {
            audio: {
                title: "Audio",
                icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M3.34701 16.1464C3.91819 16.7176 4.60481 17.0032 5.40688 17.0032C6.20895 17.0032 6.89558 16.7176 7.46676 16.1464C8.03792 15.5752 8.3235 14.8886 8.3235 14.0865V5.72114H16.2603V11.7404C16.0263 11.5502 15.7699 11.4076 15.491 11.3125C15.2122 11.2174 14.913 11.1699 14.5936 11.1699C13.7915 11.1699 13.1049 11.4555 12.5337 12.0267C11.9625 12.5978 11.6769 13.2845 11.6769 14.0865C11.6769 14.8886 11.9625 15.5752 12.5337 16.1464C13.1049 16.7176 13.7915 17.0032 14.5936 17.0032C15.3957 17.0032 16.0823 16.7176 16.6535 16.1464C17.2246 15.5752 17.5102 14.8886 17.5102 14.0865V5.72114V2.99683H16.6768H16.2603H7.07355V11.7404C6.83957 11.5502 6.58316 11.4076 6.30432 11.3125C6.02547 11.2174 5.72632 11.1699 5.40688 11.1699C4.60481 11.1699 3.91819 11.4555 3.34701 12.0267C2.77582 12.5978 2.49023 13.2845 2.49023 14.0865C2.49023 14.8886 2.77582 15.5752 3.34701 16.1464Z" fill="currentColor"/>\n</svg>\n',
                rgxp: /audio/i,
                extensions: ["mp3", "flac", "m4a", "wma", "ogg", "wav", "aif", "mid", "opus"],
                extensions_weight: ["mp3", "flac", "m4a", "wma", "ogg", "wav", "aif", "mid", "opus"],
                ctype2extension: {
                    midi: "mid",
                    mp4: "m4a",
                    m4a: "m4a",
                    mpeg: "mp3",
                    mpeg3: "mp3",
                    wav: "wav",
                    aiff: "aif",
                    opus: "opus"
                }
            },
            video: {
                title: "Video",
                icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M3.79009 16.25C3.36914 16.25 3.01284 16.1041 2.72117 15.8125C2.42952 15.5208 2.28369 15.1645 2.28369 14.7435V5.25642C2.28369 4.83547 2.42952 4.47917 2.72117 4.1875C3.01284 3.89583 3.36914 3.75 3.79009 3.75H13.2772C13.6982 3.75 14.0545 3.89583 14.3461 4.1875C14.6378 4.47917 14.7836 4.83547 14.7836 5.25642V9.07052L17.7163 6.13785V13.8621L14.7836 10.9294V14.7435C14.7836 15.1645 14.6378 15.5208 14.3461 15.8125C14.0545 16.1041 13.6982 16.25 13.2772 16.25H3.79009ZM3.79009 15H13.2772C13.352 15 13.4135 14.9759 13.4615 14.9279C13.5096 14.8798 13.5337 14.8183 13.5337 14.7435V5.25642C13.5337 5.18162 13.5096 5.12019 13.4615 5.0721C13.4135 5.02402 13.352 4.99998 13.2772 4.99998H3.79009C3.7153 4.99998 3.65386 5.02402 3.60577 5.0721C3.55769 5.12019 3.53365 5.18162 3.53365 5.25642V14.7435C3.53365 14.8183 3.55769 14.8798 3.60577 14.9279C3.65386 14.9759 3.7153 15 3.79009 15Z" fill="currentColor"/>\n</svg>\n',
                rgxp: /video/i,
                extensions: ["mp4", "mpeg4", "mpg", "mpeg", "m4v", "avi", "divx", "mov", "wmv", "movie", "asf", "webm", "flv", "3gp", "m3u8", "m3u", "ogv", "mpd"],
                extensions_weight: ["mp4", "mpeg4", "mpg", "mpeg", "m4v", "avi", "divx", "mov", "wmv", "movie", "asf", "webm", "flv", "m3u8", "m3u", "3gp"],
                ctype2extension: {
                    mpeg: "mp4",
                    mp4: "mp4",
                    m4v: "mp4",
                    "3gpp": "3gp",
                    flv: "flv",
                    quicktime: "mov",
                    msvideo: "avi",
                    "ms-wmv": "wmv",
                    "ms-asf": "asf"
                }
            },
            no_watermark_video: {
                title: "No watermark video",
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21.53 7.15C21.378 7.06223 21.2055 7.01603 21.03 7.01603C20.8545 7.01603 20.682 7.06223 20.53 7.15L17 8.89C16.9715 8.11357 16.6429 7.37847 16.0834 6.83944C15.5238 6.3004 14.777 5.99948 14 6H5C4.20435 6 3.44129 6.31607 2.87868 6.87868C2.31607 7.44129 2 8.20435 2 9V15C2 15.7957 2.31607 16.5587 2.87868 17.1213C3.44129 17.6839 4.20435 18 5 18H14C14.777 18.0005 15.5238 17.6996 16.0834 17.1606C16.6429 16.6215 16.9715 15.8864 17 15.11L20.56 16.89C20.6963 16.9599 20.8468 16.9975 21 17C21.1872 17.0006 21.3709 16.9486 21.53 16.85C21.6741 16.7599 21.7929 16.6346 21.8751 16.4859C21.9574 16.3372 22.0003 16.1699 22 16V8C22.0003 7.83006 21.9574 7.66283 21.8751 7.51411C21.7929 7.36538 21.6741 7.24007 21.53 7.15ZM15 15C15 15.2652 14.8946 15.5196 14.7071 15.7071C14.5196 15.8946 14.2652 16 14 16H5C4.73478 16 4.48043 15.8946 4.29289 15.7071C4.10536 15.5196 4 15.2652 4 15V9C4 8.73478 4.10536 8.48043 4.29289 8.29289C4.48043 8.10536 4.73478 8 5 8H14C14.2652 8 14.5196 8.10536 14.7071 8.29289C14.8946 8.48043 15 8.73478 15 9V15ZM20 14.38L17 12.88V11.12L20 9.62V14.38Z" fill="currentColor"/></svg>',
                rgxp: /no watermark video/i,
                extensions: ["mp4", "mpeg4", "mpg", "mpeg", "m4v", "avi", "divx", "mov", "wmv", "movie", "asf", "webm", "flv", "3gp", "m3u8", "m3u", "ogv", "mpd"],
                extensions_weight: ["mp4", "mpeg4", "mpg", "mpeg", "m4v", "avi", "divx", "mov", "wmv", "movie", "asf", "webm", "flv", "m3u8", "m3u", "3gp"],
                ctype2extension: {
                    mpeg: "mp4",
                    mp4: "mp4",
                    m4v: "mp4",
                    "3gpp": "3gp",
                    flv: "flv",
                    quicktime: "mov",
                    msvideo: "avi",
                    "ms-wmv": "wmv",
                    "ms-asf": "asf"
                }
            },
            subtitles: {
                title: "Subtitles",
                icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M3.90869 13.6143V12.3643H11.8253V13.6143H3.90869ZM3.90869 10.2809V9.03096H16.8253V10.2809H3.90869ZM3.90869 6.94759V5.69763H16.8253V6.94759H3.90869Z" fill="currentColor"/>\n</svg>\n',
                rgxp: /subtitles/i,
                extensions: ["yt_srt", "srt", "vtt"],
                extensions_weight: ["yt_srt", "srt", "vtt"]
            }
        }
          , i = {
            "4320p": {
                i18n_label: "quality_8k_uhd",
                label: "8K UHD",
                value: 1600
            },
            "3072p": {
                i18n_label: "quality_4k_qfhd",
                label: "4K QFHD",
                value: 1400
            },
            "2160p": {
                i18n_label: "quality_4k_uhd",
                label: "4K UHD",
                value: 1200
            },
            "2048p": {
                i18n_label: "quality_qhd",
                label: "Quad HD",
                value: 1100
            },
            "1440p": {
                i18n_label: "quality_qhd",
                label: "Quad HD",
                value: 1e3
            },
            "1080p": {
                i18n_label: "quality_fhd",
                label: "Full HD",
                value: 800
            },
            "720p": {
                i18n_label: "quality_hd",
                label: "HD",
                value: 600
            },
            "540p": {
                i18n_label: "quality_standard",
                label: "Standard",
                value: 500
            },
            "480p": {
                i18n_label: "quality_standard",
                label: "Standard",
                value: 500
            },
            "360p": {
                i18n_label: "quality_medium",
                label: "Medium",
                value: 400
            },
            "320p": {
                i18n_label: "quality_medium",
                label: "Medium",
                value: 400
            },
            "270p": {
                i18n_label: "quality_small",
                label: "Small",
                value: 300
            },
            "240p": {
                i18n_label: "quality_small",
                label: "Small",
                value: 200
            },
            "144p": {
                i18n_label: "quality_mobile",
                label: "Mobile",
                value: 100
            }
        }
          , o = ["video", "audio", "subtitles"];
        function a(e) {
            return !!e && -1 !== ["m3u8", "m3u", "hls", "zip"].indexOf(e)
        }
        var u = [4320, 3072, 2160, 2048, 1440, 1080, 720, 540, 480, 360, 320, 270, 240, 144]
          , c = [/^(.+\.)?nixcdn\.com/im, /^(.+\.)?vcmedia\.vn/i, /^(.+\.)?kenhhd\.tv/i]
          , s = [/coccoc\.com\/sitemap\.xml/i]
          , l = [/m\.naver\.com\/\/?shorts/i]
          , h = "hidePermanent"
          , d = "customControlFromServer"
          , p = "youtubeControls"
          , m = "otherControls"
          , f = "116.0.0.0"
          , v = 1
          , g = 3
          , _ = 1
          , y = "youtubeTurnOffAdblock"
          , O = "gserpSelectors"
          , E = "off"
          , b = ["animevietsub", "vuighe", "anime47", "animehay", "phimmoi", "motchill", "dongchill", "dailymotion.com", "hhpanda", "bluphim", "phimtuoitho", "subnhanh", "tvhay", "phim33", "hoathinh3d", "phimtm", "hhkungfu", "motphimtv", "tvphim", "phimhay", "xem14", "animesub", "hh3dhay", "ghienphim", "vietsub", "vipphim", "khophim", "phimvsub", "ohitv"]
          , w = "ytbViewCount"
          , T = 9
          , C = "ytbMobileOnboardReady";
        class S {
        }
        S.PROMOTE_SERP = {
            _: "promote_serp",
            GET: "get_promote_serp",
            CLOSE: "close_promote_serp"
        },
        S.ONBOARD_TRACK = {
            GET: "get_onboard_track",
            SAVE: "save_onboard_track"
        },
        S.ONBOARD_IMPORTDATA = "get_onboard_importdata",
        S.DOWNLOAD = "download",
        S.PLAY = "play_video",
        S.SET_FEATURE = "set_feature",
        S.IS_SUPPORTED = "is_supported",
        S.FRAME_TYPE = "frame_type",
        S.FETCH = "background_request",
        S.YOUTUBE = {
            GET_INFO: "youtube_get_info",
            GET_MPD: "youtube_get_mpd_info"
        },
        S.OMNI = {
            ACTIVE: "active_omnibox",
            DEACTIVE: "deactive_omnibox"
        },
        S.METRICS = "metrics",
        S.CACHE = "cache.background",
        S.PIP = {
            REQUEST: "pip",
            INNER: "inner_frame_pip",
            ON: {
                ENTER: "inner_pip_enter",
                LEAVE: "inner_pip_leave"
            }
        },
        S.CONSOLE_LOG = "console.log",
        S.GET_URL = "get_url",
        S.SAVE_URL = "save_url",
        S.GET_MATCHED_REQUESTS = "get_matched_requests",
        S.GET_SERVER_TIME = "get_server_time",
        S.OPEN_SEARCH_SETTINGS = "open_search_engines_settings",
        S.SCRIPTING = {
            INJECT: "inject_script",
            NOTIFY: "script_executed",
            EXEC: "execute_script"
        },
        S.OPEN_SETTINGS = "open_settings",
        S.OFFSCREEN = {},
        S.TURN_OFF_ADBLOCK_ON_YOUTUBE = "turn_off_adblock_on_youtube",
        S.TURN_ON_ADBLOCK_ON_YOUTUBE = "turn_on_adblock_on_youtube",
        S.GET_FASTFORWARD_ENABLED = "get_ff_enabled";
        var N = ["chrome://", "coccoc://"]
          , x = ["coccoc.com/webhp", "about:blank"]
          , A = ["xoilac", "thapcam", "cakhia", "vebo", "gavang", "c19hcc", "90phut", "screenbid", "socolive", "luongson", "xembong", "livebong", "bongda", "caheo", "soco", "rakhoi", "tructiepbong", "antlive"]
    },
    10: function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    },
    17: function(e, t, n) {
        e.exports = function() {
            "use strict";
            /*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */
            var e = Object.prototype.toString
              , t = Array.isArray || function(t) {
                return "[object Array]" === e.call(t)
            }
            ;
            function n(e) {
                return "function" == typeof e
            }
            function r(e) {
                return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            function i(e, t) {
                return null != e && "object" == typeof e && t in e
            }
            var o = RegExp.prototype.test
              , a = /\S/;
            function u(e) {
                return !function(e, t) {
                    return o.call(e, t)
                }(a, e)
            }
            var c = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;"
            }
              , s = /\s*/
              , l = /\s+/
              , h = /\s*=/
              , d = /\s*\}/
              , p = /#|\^|\/|>|\{|&|=|!/;
            function m(e) {
                this.string = e,
                this.tail = e,
                this.pos = 0
            }
            function f(e, t) {
                this.view = e,
                this.cache = {
                    ".": this.view
                },
                this.parent = t
            }
            function v() {
                this.cache = {}
            }
            m.prototype.eos = function() {
                return "" === this.tail
            }
            ,
            m.prototype.scan = function(e) {
                var t = this.tail.match(e);
                if (!t || 0 !== t.index)
                    return "";
                var n = t[0];
                return this.tail = this.tail.substring(n.length),
                this.pos += n.length,
                n
            }
            ,
            m.prototype.scanUntil = function(e) {
                var t, n = this.tail.search(e);
                switch (n) {
                case -1:
                    t = this.tail,
                    this.tail = "";
                    break;
                case 0:
                    t = "";
                    break;
                default:
                    t = this.tail.substring(0, n),
                    this.tail = this.tail.substring(n)
                }
                return this.pos += t.length,
                t
            }
            ,
            f.prototype.push = function(e) {
                return new f(e,this)
            }
            ,
            f.prototype.lookup = function(e) {
                var t, r, o, a = this.cache;
                if (a.hasOwnProperty(e))
                    t = a[e];
                else {
                    for (var u, c, s, l = this, h = !1; l; ) {
                        if (e.indexOf(".") > 0)
                            for (u = l.view,
                            c = e.split("."),
                            s = 0; null != u && s < c.length; )
                                s === c.length - 1 && (h = i(u, c[s]) || (r = u,
                                o = c[s],
                                null != r && "object" != typeof r && r.hasOwnProperty && r.hasOwnProperty(o))),
                                u = u[c[s++]];
                        else
                            u = l.view[e],
                            h = i(l.view, e);
                        if (h) {
                            t = u;
                            break
                        }
                        l = l.parent
                    }
                    a[e] = t
                }
                return n(t) && (t = t.call(this.view)),
                t
            }
            ,
            v.prototype.clearCache = function() {
                this.cache = {}
            }
            ,
            v.prototype.parse = function(e, n) {
                var i = this.cache
                  , o = e + ":" + (n || g.tags).join(":")
                  , a = i[o];
                return null == a && (a = i[o] = function(e, n) {
                    if (!e)
                        return [];
                    var i, o, a, c = !1, f = [], v = [], _ = [], y = !1, O = !1, E = "", b = 0;
                    function w() {
                        if (y && !O)
                            for (; _.length; )
                                delete v[_.pop()];
                        else
                            _ = [];
                        y = !1,
                        O = !1
                    }
                    function T(e) {
                        if ("string" == typeof e && (e = e.split(l, 2)),
                        !t(e) || 2 !== e.length)
                            throw new Error("Invalid tags: " + e);
                        i = new RegExp(r(e[0]) + "\\s*"),
                        o = new RegExp("\\s*" + r(e[1])),
                        a = new RegExp("\\s*" + r("}" + e[1]))
                    }
                    T(n || g.tags);
                    for (var C, S, N, x, A, P, k = new m(e); !k.eos(); ) {
                        if (C = k.pos,
                        N = k.scanUntil(i))
                            for (var L = 0, D = N.length; L < D; ++L)
                                u(x = N.charAt(L)) ? (_.push(v.length),
                                E += x) : (O = !0,
                                c = !0,
                                E += " "),
                                v.push(["text", x, C, C + 1]),
                                C += 1,
                                "\n" === x && (w(),
                                E = "",
                                b = 0,
                                c = !1);
                        if (!k.scan(i))
                            break;
                        if (y = !0,
                        S = k.scan(p) || "name",
                        k.scan(s),
                        "=" === S ? (N = k.scanUntil(h),
                        k.scan(h),
                        k.scanUntil(o)) : "{" === S ? (N = k.scanUntil(a),
                        k.scan(d),
                        k.scanUntil(o),
                        S = "&") : N = k.scanUntil(o),
                        !k.scan(o))
                            throw new Error("Unclosed tag at " + k.pos);
                        if (A = ">" == S ? [S, N, C, k.pos, E, b, c] : [S, N, C, k.pos],
                        b++,
                        v.push(A),
                        "#" === S || "^" === S)
                            f.push(A);
                        else if ("/" === S) {
                            if (!(P = f.pop()))
                                throw new Error('Unopened section "' + N + '" at ' + C);
                            if (P[1] !== N)
                                throw new Error('Unclosed section "' + P[1] + '" at ' + C)
                        } else
                            "name" === S || "{" === S || "&" === S ? O = !0 : "=" === S && T(N)
                    }
                    if (w(),
                    P = f.pop())
                        throw new Error('Unclosed section "' + P[1] + '" at ' + k.pos);
                    return function(e) {
                        for (var t, n = [], r = n, i = [], o = 0, a = e.length; o < a; ++o)
                            switch ((t = e[o])[0]) {
                            case "#":
                            case "^":
                                r.push(t),
                                i.push(t),
                                r = t[4] = [];
                                break;
                            case "/":
                                i.pop()[5] = t[2],
                                r = i.length > 0 ? i[i.length - 1][4] : n;
                                break;
                            default:
                                r.push(t)
                            }
                        return n
                    }(function(e) {
                        for (var t, n, r = [], i = 0, o = e.length; i < o; ++i)
                            (t = e[i]) && ("text" === t[0] && n && "text" === n[0] ? (n[1] += t[1],
                            n[3] = t[3]) : (r.push(t),
                            n = t));
                        return r
                    }(v))
                }(e, n)),
                a
            }
            ,
            v.prototype.render = function(e, t, n, r) {
                var i = this.parse(e, r)
                  , o = t instanceof f ? t : new f(t,void 0);
                return this.renderTokens(i, o, n, e, r)
            }
            ,
            v.prototype.renderTokens = function(e, t, n, r, i) {
                for (var o, a, u, c = "", s = 0, l = e.length; s < l; ++s)
                    u = void 0,
                    "#" === (a = (o = e[s])[0]) ? u = this.renderSection(o, t, n, r) : "^" === a ? u = this.renderInverted(o, t, n, r) : ">" === a ? u = this.renderPartial(o, t, n, i) : "&" === a ? u = this.unescapedValue(o, t) : "name" === a ? u = this.escapedValue(o, t) : "text" === a && (u = this.rawValue(o)),
                    void 0 !== u && (c += u);
                return c
            }
            ,
            v.prototype.renderSection = function(e, r, i, o) {
                var a = this
                  , u = ""
                  , c = r.lookup(e[1]);
                if (c) {
                    if (t(c))
                        for (var s = 0, l = c.length; s < l; ++s)
                            u += this.renderTokens(e[4], r.push(c[s]), i, o);
                    else if ("object" == typeof c || "string" == typeof c || "number" == typeof c)
                        u += this.renderTokens(e[4], r.push(c), i, o);
                    else if (n(c)) {
                        if ("string" != typeof o)
                            throw new Error("Cannot use higher-order sections without the original template");
                        null != (c = c.call(r.view, o.slice(e[3], e[5]), (function(e) {
                            return a.render(e, r, i)
                        }
                        ))) && (u += c)
                    } else
                        u += this.renderTokens(e[4], r, i, o);
                    return u
                }
            }
            ,
            v.prototype.renderInverted = function(e, n, r, i) {
                var o = n.lookup(e[1]);
                if (!o || t(o) && 0 === o.length)
                    return this.renderTokens(e[4], n, r, i)
            }
            ,
            v.prototype.indentPartial = function(e, t, n) {
                for (var r = t.replace(/[^ \t]/g, ""), i = e.split("\n"), o = 0; o < i.length; o++)
                    i[o].length && (o > 0 || !n) && (i[o] = r + i[o]);
                return i.join("\n")
            }
            ,
            v.prototype.renderPartial = function(e, t, r, i) {
                if (r) {
                    var o = n(r) ? r(e[1]) : r[e[1]];
                    if (null != o) {
                        var a = e[6]
                          , u = e[5]
                          , c = e[4]
                          , s = o;
                        return 0 == u && c && (s = this.indentPartial(o, c, a)),
                        this.renderTokens(this.parse(s, i), t, r, s)
                    }
                }
            }
            ,
            v.prototype.unescapedValue = function(e, t) {
                var n = t.lookup(e[1]);
                if (null != n)
                    return n
            }
            ,
            v.prototype.escapedValue = function(e, t) {
                var n = t.lookup(e[1]);
                if (null != n)
                    return g.escape(n)
            }
            ,
            v.prototype.rawValue = function(e) {
                return e[1]
            }
            ;
            var g = {
                name: "mustache.js",
                version: "3.2.1",
                tags: ["{{", "}}"],
                clearCache: void 0,
                escape: void 0,
                parse: void 0,
                render: void 0,
                to_html: void 0,
                Scanner: void 0,
                Context: void 0,
                Writer: void 0
            }
              , _ = new v;
            return g.clearCache = function() {
                return _.clearCache()
            }
            ,
            g.parse = function(e, t) {
                return _.parse(e, t)
            }
            ,
            g.render = function(e, n, r, i) {
                if ("string" != typeof e)
                    throw new TypeError('Invalid template! Template should be a "string" but "' + (t(o = e) ? "array" : typeof o) + '" was given as the first argument for mustache#render(template, view, partials)');
                var o;
                return _.render(e, n, r, i)
            }
            ,
            g.to_html = function(e, t, r, i) {
                var o = g.render(e, t, r);
                if (!n(i))
                    return o;
                i(o)
            }
            ,
            g.escape = function(e) {
                return String(e).replace(/[&<>"'`=\/]/g, (function(e) {
                    return c[e]
                }
                ))
            }
            ,
            g.Scanner = m,
            g.Context = f,
            g.Writer = v,
            g
        }()
    },
    2: function(e, t, n) {
        "use strict";
        var r = n(8);
        class i {
            constructor() {
                this.SOURCE_POPUP_PAGE = 0,
                this.SOURCE_OPTIONS_PAGE = 10,
                this.SOURCE_CONTENT_SCRIPT = 20,
                this.SOURCE_BACKGROUND_PAGE = 30,
                this.LEGACY_METRICS_NAME_MAP = {
                    ButtonClicked: "TryItNowButtonClicked",
                    CheckBoxClicked: "OneClickCheckbox"
                },
                this.PAGE_WELCOME_SCREEN = 0,
                this.PAGE_DOWNLOADS_LIST = 1,
                this.PAGE_ONE_CLICK_DOWNLOAD = 2,
                this.PAGE_NO_MEDIA_FOUND = 3,
                this.PAGE_OPTIONS = 4,
                this.PAGE_CONTENT_SHOW_CONTROLS = 5,
                this.PAGE_CONTENT_NO_MEDIA = 9,
                this.YOUTUBE_ADS_BLOCK_ERROR = 0,
                this.YOUTUBE_ADS_BLOCK_ERROR_POPUP = 1,
                this.YOUTUBE_ADS_BLOCK_ERROR_BY_SAVIOR = 2,
                this.YOUTUBE_ADS_BLOCK_ERROR_POPUP_BY_SAVIOR = 3,
                this.YOUTUBE_SKIP_ADS_SHOWN = 1,
                this.YOUTUBE_SKIP_ADS_FAST_FWD = 2,
                this.YOUTUBE_SKIP_ADS_SEE = 3,
                this.DOWNLOAD_AUTO = 0,
                this.DOWNLOAD_BUTTON = 1,
                this.DOWNLOAD_ALL = 2,
                this.DOWNLOAD_REQUEST_SIZE = 3,
                this.DOWNLOAD_REQUEST_SIZE_FAILED = 4,
                this.DOWNLOAD_SOUND_ONLY = 5,
                this.DOWNLOAD_YOUTUBE_ERROR = 6,
                this.DOWNLOAD_CANCELED = 7,
                this.DOWNLOAD_SUBTITLES = 9,
                this.BUTTON_MAIN = 0,
                this.BUTTON_TRY_IT_NOW = 1,
                this.BUTTON_SHOW_DOWNLOADS = 2,
                this.BUTTON_OPEN_SETTINGS = 3,
                this.BUTTON_DOWNLOAD_ALL = 4,
                this.BUTTON_MORE_OPTIONS = 5,
                this.BUTTON_HIDE_PERMANENT = 6,
                this.BUTTON_FAKE_QUALITY = 7,
                this.BUTTON_DETACH = 8,
                this.BUTTON_HIDE = 9,
                this.CHECK_BOX_ENABLE_ONE_CLICK = 0,
                this.CHECK_BOX_SHOW_ON_PAGE_BUTTONS = 2,
                this.CHECK_BOX_PREFER_LAST_QUALITY = 4,
                this.CHECK_BOX_DETACH_ENABLED = 6,
                this.CHECK_BOX_DARK_THEM_ENABLED = 8,
                this.PIP_DETACH_CLICK = 0,
                this.PIP_RESTORE_CLICK = 1,
                this.PIP_SITE_LINK_CLICK = 2,
                this.PLAY_NOW_SHOWN = 0,
                this.PLAY_NOW_WIDGET_CLICKED = 1,
                this.PLAY_NOW_TOOLTIP_SHOWN = 2,
                this.PLAY_NOW_TOOLTIP_CLOSED = 3,
                this.PLAY_NOW_TOOLTIP_NOT_SHOW_AGAIN = 4,
                this.PLAY_NOW_TOOLTIP_BOTTOM_SHOWN = 5,
                this.PLAY_NOW_TOOLTIP_BOTTOM_CLOSED = 6,
                this.PLAY_NOW_TOOLTIP_BOTTOM_NOT_SHOW_AGAIN = 7,
                this.EXTENSION_MP4 = 1,
                this.EXTENSION_MP3 = 2,
                this.EXTENSION_WEBM = 3,
                this.EXTENSION_3GP = 4,
                this.EXTENSION_SRT = 5,
                this.EXTENSION_OTHER = 6,
                this.SEND_MOBILE_SHOW = 1,
                this.SEND_MOBILE_CLICK = 2,
                this.SEND_MOBILE_CLICK_CLOSE = 3,
                this.SEND_MOBILE_CLICK_A = 4,
                this.SEND_MOBILE_CLICK_G = 5,
                this.SEND_MOBILE_CLICK_W = 6,
                this.SEND_MOBILE_CLICK_AUDIO = 7,
                this.SEND_MOBILE_ERROR = 9,
                this.TURN_LIGHT_ON = 0,
                this.TURN_LIGHT_OFF = 1,
                this.ONBOARD_POPUP_SHOWN = 1,
                this.ONBOARD_POPUP_SHOWN_SECOND = 1,
                this.ONBOARD_POPUP_SHOWN_THIRD = 1,
                this.ONBOARD_TRY_NOW_BTN_CLICK = 1,
                this.CLOSE_ONBOARD_POPUP = 1,
                this.OPEN_SETTING_POPUP = 1,
                this.OPEN_SETTING_CONTENT = 2
            }
            get source() {
                if (!chrome.action && !chrome.pageAction)
                    return this.SOURCE_CONTENT_SCRIPT;
                switch (location.pathname) {
                case "/popup.html":
                    return this.SOURCE_POPUP_PAGE;
                case "/options.html":
                    return this.SOURCE_OPTIONS_PAGE;
                case "/background.js":
                case "/background.html":
                    return this.SOURCE_BACKGROUND_PAGE;
                default:
                    return null
                }
            }
            _getFullName(e) {
                return "Savior." + (this.LEGACY_METRICS_NAME_MAP[e] || e)
            }
            _getTotalValue(e, t, n) {
                return 0 === e.indexOf("Refr") || n || ["PageShown", "YTBlockType", "YTSkipAdShown", "ForceDisableAdblockOnYoutube"].includes(e) || (null == e ? void 0 : e.startsWith("Onboarding.")) || "number" != typeof t ? t : t + this.source
            }
            _doLog(e, t, n) {
                var r, i = this._getFullName(t);
                if (!(parseInt((null === (r = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)) || void 0 === r ? void 0 : r[2]) || "") <= 50))
                    if (this.source === this.SOURCE_CONTENT_SCRIPT)
                        EE.emit("message.background.send", {
                            type: "metrics",
                            method: "log",
                            params: {
                                name: t,
                                value: n
                            }
                        });
                    else if (chrome.metricsPrivate)
                        switch (e) {
                        case "recordSmallCount":
                            chrome.metricsPrivate.recordValue({
                                metricName: i,
                                type: chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LINEAR,
                                min: 0,
                                max: 100,
                                buckets: 100
                            }, n);
                            break;
                        case "recordValue":
                            chrome.metricsPrivate.recordValue({
                                metricName: i,
                                type: chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LINEAR,
                                min: 0,
                                max: 1e3,
                                buckets: 1002
                            }, n);
                            break;
                        case "recordCustomData":
                            chrome.metricsPrivate.recordCustomData(n)
                        }
                    else if ("recordCustomData" === e) {
                        if (n && 1 === n.length)
                            return void console.info("%c[Metrics] %crecordCustomData %c%s", "color:gray", "color:silver", "color: lightgreen", n[0].key, JSON.parse(n[0].value));
                        console.info("%c[Metrics]", "color:gray", "recordCustomData", n)
                    } else
                        console.info("%c[Metrics]", "color:gray", e, i, n)
            }
            static _getMethodByName(e) {
                switch (e) {
                case "Refr":
                case "RefrSE":
                case "RefrFE":
                case "RefrPin":
                    return "recordValue";
                case "recordCustomData":
                    return "recordCustomData";
                default:
                    return "recordSmallCount"
                }
            }
            log(e, t, n) {
                try {
                    var o = i._getMethodByName(e);
                    if ("recordCustomData" === o && r.a.CUSTOM_METRICS_JSON)
                        return void this._doLog(o, e, t);
                    var a = this._getTotalValue(e, t, n);
                    this._doLog(o, e, a)
                } catch (e) {
                    console.warn("Catched", e)
                }
            }
            logYtExtension(e) {
                switch (e.toLowerCase()) {
                case "mp4":
                    this.log("YtExtension", this.EXTENSION_MP4);
                    break;
                case "mp3":
                    this.log("YtExtension", this.EXTENSION_MP3);
                    break;
                case "webm":
                    this.log("YtExtension", this.EXTENSION_WEBM);
                    break;
                case "3gp":
                    this.log("YtExtension", this.EXTENSION_3GP);
                    break;
                case "srt":
                    this.log("YtExtension", this.EXTENSION_SRT);
                    break;
                default:
                    this.log("YtExtension", this.EXTENSION_OTHER)
                }
            }
            logSendMobile(e) {
                this.log("SendMobile", e)
            }
            logFromContentScript(e, t) {
                this.log(e, t, !0)
            }
            logRequest(e) {
                var t = Object.keys(e).reduce( (t, n, r) => t += `${r ? "&" : ""}${n}=${e[n]}`, "?");
                navigator.sendBeacon("https://coccoc.com/log" + t)
            }
        }
        t.a = new i
    },
    3: function(e, t, n) {
        "use strict";
        n.d(t, "d", (function() {
            return c
        }
        )),
        n.d(t, "f", (function() {
            return s
        }
        )),
        n.d(t, "e", (function() {
            return l
        }
        )),
        n.d(t, "b", (function() {
            return h
        }
        )),
        n.d(t, "g", (function() {
            return d
        }
        )),
        n.d(t, "c", (function() {
            return p
        }
        )),
        n.d(t, "a", (function() {
            return m
        }
        ));
        var r = n(1)
          , i = n(0)
          , o = /([^/]+)$/i
          , a = /\.([^/.]*)$/i;
        function u(e) {
            return e && 0 !== e.indexOf("data:image") ? /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/\.?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e) : []
        }
        function c(e) {
            var t = ""
              , n = "";
            try {
                var r = e.split("/");
                t = r[0];
                var i = r[1].split(";")[0];
                switch (n = i,
                i) {
                case "webm":
                    n = "video" == t ? "webm" : "weba";
                    break;
                case "3gpp":
                    n = "3gp";
                    break;
                case "3gpp2":
                    n = "3g2";
                    break;
                case "ogg":
                    n = "video" == t ? "ogv" : "oga";
                    break;
                case "mpeg":
                    n = "video" == t ? "mpeg" : "mp3";
                    break;
                case "x-midi":
                    n = "midi";
                    break;
                case "x-msvideo":
                    n = "avi";
                    break;
                case "mp2t":
                    n = "ts"
                }
                return {
                    type: t,
                    ext: n
                }
            } catch (e) {
                return {
                    type: t,
                    ext: n
                }
            }
        }
        function s(e, t) {
            var n = "object" == typeof e ? e.videoUrl : e
              , r = new URL(n,n.startsWith("http") ? void 0 : location.origin)
              , u = (r.pathname.match(o) || [])[1] || ""
              , s = u.split(".").map(e => e.toLowerCase());
            u = decodeURIComponent(u.replace(a, "")),
            s.shift(),
            0 === s.length && Object(i.isSpecialUrls)(e) && (s = ["m3u8"]);
            var l = s[s.length - 1] || ""
              , h = null;
            if (r.href.startsWith("data:")) {
                var d = c(r.href.match(/data:([a-z]+\/[a-z0-9]+);/i)[1]);
                l = d.ext,
                h = d.type
            }
            var p = {
                url: "object" == typeof e ? e : r.href,
                protocol: r.protocol,
                host: r.host,
                port: r.port,
                pathname: r.pathname,
                filename: u,
                ext: l,
                exts: s,
                hash: r.hash,
                search: r.search,
                type: h
            };
            if (p.port || delete p.port,
            t) {
                var m = {};
                r.search.replace(/^\?/, "").split(/&/).forEach(e => {
                    var t = e.split("=");
                    m[t[0]] = t[1]
                }
                ),
                p.query = m
            }
            return "flac" == l && (p.quality = "Lossless",
            p.resolution = "lossless"),
            p
        }
        function l(e) {
            var t, n = "object" == typeof e ? e.videoUrl : e;
            if (n.startsWith("data:")) {
                var i = n.match(/data:([a-z]+)/)[1];
                return ["audio", "video"].includes(i) ? i : ""
            }
            var o = (null === (t = u(n)) || void 0 === t ? void 0 : t[11]) || "";
            if (!o)
                return "";
            var a = new Map
              , c = ["no_watermark_video"];
            Object.keys(r.m).forEach(e => {
                if (!c.includes(e))
                    for (var t = r.m[e].extensions, n = 0; n < t.length; n++)
                        a.set(t[n], e)
            }
            ),
            n.includes("googlevideo.com/videoplayback") && "videoplayback" === o && n.includes("mp4") && (o = "video.mp4"),
            n.includes("videoplayback") && "videoplayback" === o && n.includes("mp4") && (o = "video.mp4");
            var s = o.split(".")
              , l = s.length - 1;
            if (l <= 0)
                return "";
            var h = s[l].toLowerCase();
            return a.get(h)
        }
        function h(e) {
            if ((e = Object.create(e)).query) {
                for (var t in e.search = [],
                e.query)
                    void 0 !== e.query[t] ? e.search.push(t + "=" + encodeURIComponent(e.query[t])) : e.search.push(t);
                e.search = "?" + e.search.join("&"),
                delete e.query
            }
            return e.href
        }
        function d(e) {
            var t = (e = e.replace(/^[#?]{1}/, "")).split("&")
              , n = {};
            return t.forEach(e => {
                var t = e.split("=");
                Object(i.defined)(t[0]) && Object(i.defined)(t[1]) && (n[t[0]] = decodeURIComponent(t[1].replace(/\+/g, " ")))
            }
            ),
            n
        }
        var p = ( () => {
            for (var e = ["facebook.com", "youtube.com", "video.vnexpress.net", "mp3.zing.vn", "radio.zing.vn", "tv.zing.vn", "nhaccuatui.com", "video.thethao247.vn", "video.ngoisao.net", "xvideos.com", "phimmoi.net", "clip.vn", "yan.vn", "xem.vn", "pornhub.com", "xhamster.com", "dailymotion.com", "xnxx.com", "hdonline.vn", "phim3s.net", "redtube.com", "phim14.net", "soundcloud.com", "youporn.com", "vimeo.com", "fptplay.net", "haivn.com", "chiasenhac.com", "movies.hdviet.com", "nhac.vui.vn", "nhacso.net", "anime47.com", "tube8.com", "talktv.vn", "chatvl.info", "cohet.tv", "vlxx.tv", "hayhaytv.vn", "xemphimso.com", "vivo.vn", "xemvtv.net", "vkool.net", "chimsedinang.com", "keeng.vn", "vuighe.net", "vetv.vn", "xemphimon.com", "ixxx.com", "biphim.com", "kenhvideo.com", "videogame.vn", "phim.in", "voh.com.vn", "phimsexporn.com", "porn99.net", "news.zing.vn", "me.zing.vn", "twitter.com", "24h.com.vn", "phim.clip.vn", "video.ringring.vn", "v.nhaccuatui.com", "clip.vietnamnet.vn", "afamily.vn", "media.bongdaplus.vn", "bongdaclip.com", "gamek.vn", "phapluattp.vn", "hdviet.com", "haiivl.com", "chatvl.com", "2sao.vn", "videos.vietgiaitri.com", "nhac.vietgiaitri.com", "megafun.vn", "phim.hayhd.vn", "cand.com.vn", "ohay.tv", "phim.megabox.vn", "anhtrang.org", "phim.anhtrang.org", "8bongda.com", "xemphimone.com", "bongda365.com.vn", "phimhd.vn", "dinotube.com", "phimvipvn.net", "animeax.com", "phimdata.com", "phimnhanh.net", "vipphim.net", "phimvon.com", "pubvn.tv", "phim22.com", "phim7.com", "hayxemphim.com", "m-viet.com", "thethaoclip.com", "nhac.hay365.com", "ssphim.com", "phimtructuyenhd.com", "xuongphim.tv", "vino.vn/mp3", "haivl.io", "nhacvang.org", "starmovies.mobi", "clipvuivn.com", "phimporn.com", "123tv.vn", "phimonlinehd.net", "hai24h.net", "jax.vn", "kenhgioitre.net", "chiaseclip.net", "phim.xixam.com", "bilutv.com", "phimbathu.com", "instagram.com", "banhtv.com", "txxx.com", "video.vietnamnet.vn", "video.bongdaplus.vn", "creatives.livejasmin.com", "tv.naver.com", "tv.tuoitre.vn", "icdrama.se", "video.thanhnien.vn", "spankbang.com", "dmm.co.jp", "v.youku.com", "v.qq.com", "daikynguyenvn.com", "thethao247.vn", "e.vnexpress.net", "ione.vnexpress.net", "kenh14.vn", "dantri.com.vn", "baomoi.com", "emdep.vn", "tuoitre.vn", "soha.vn", "video.congan.com.vn", "cafef.vn", "bongda.com.vn", "bongdaso.com", "eva.vn", "danviet.vn", "cliptv.vn", "bbc.co.uk", "edition.cnn.com", "buzzfeed.com", "businessinsider.com", "cnet.com", "dailymail.co.uk", "bilutvx.net", "chill123.gotdns.ch"], t = {}, n = 0, r = e.length; n < r; ++n) {
                var i = e[n];
                console.assert(!(i in t), 'Duplicate "' + i + '": ' + t[i] + ", " + n),
                t[i] = n + 1
            }
            return function(e) {
                for (var n = function(e) {
                    var t;
                    return (null === (t = u(e)) || void 0 === t ? void 0 : t[6]) || ""
                }(e), r = t[n]; !r && n; ) {
                    var i = n.indexOf(".") + 1;
                    if (0 === i)
                        break;
                    n = n.substr(i),
                    r = t[n]
                }
                return 100 + (0 | r)
            }
        }
        )();
        function m(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              , r = e || new URL(t);
            if (t.includes("https") || t.includes("//"))
                return t.includes("http") || (t = "https:" + t),
                t;
            if (n && t.startsWith("/"))
                return r.origin + t;
            var i = (r.host + r.pathname).split("/").filter(e => !!e).slice(0, -1)
              , o = t.split("/").filter(e => !!e)
              , a = o.lastIndexOf("..")
              , u = o.slice(0, a + 1)
              , c = o.slice(a + 1);
            u.length > 0 && (i = i.slice(0, -u.length));
            var s = i.indexOf(c[0]);
            if (-1 == s)
                i.push(...c);
            else {
                s += 1;
                for (var l = 1; l < c.length; ++l) {
                    var h = c[l];
                    i.includes(h) || (i[s - 1] === c[l - 1] ? i[s] = h : i.push(h)),
                    s += 1
                }
            }
            return r.protocol + "//" + i.join("/")
        }
    },
    433: function(e, t, n) {
        n(17),
        e.exports = n(0)
    },
    8: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "b", (function() {
                return a
            }
            ));
            var r = n(1);
            function i(e) {
                return e.split(".").map(e => parseInt(e))
            }
            function o(e, t) {
                if (!e)
                    return !1;
                var n = t.split(" ");
                if (2 !== n.length)
                    return !1;
                var r = -1;
                switch (n[0]) {
                case ">":
                    r = 1;
                    break;
                case ">=":
                    r = 0
                }
                var o, a, u, c = i(n[1]);
                return a = c,
                (0 !== (u = (o = e)[0] - a[0]) || 0 != (u = o[1] - a[1]) || 0 != (u = o[2] - a[2]) ? u : u = o[3] - a[3]) >= r
            }
            function a(e) {
                var t = e.match(/Chrome\/([\d.]+)/);
                return t && t[1] && (t = i(t[1])),
                o.bind(null, t)
            }
            var u = function(e) {
                var t = e.match(/Chrome\/([\d.]+)/);
                t && t[1] && (t = i(t[1]));
                var n = o.bind(null, t);
                return {
                    YT: {
                        mp4: !0,
                        m4a: !0,
                        webm: n(">= 39.0.2171.103"),
                        weba: n(">= 39.0.2171.103")
                    },
                    M3U8: n("> 62.4.3202.180"),
                    SOUND_ONLY: n("> 55.4.2883.114") || !!t && 50 === t[0] && n("> 50.3.2661.150"),
                    SUBTITLES: n("> 55.4.2883.114") || !!t && 50 === t[0] && n("> 50.3.2661.150"),
                    PLAY_NOW_BOTTOM_TOOLTIP: n("> 55.4.2883.126"),
                    IS_ADS_PIP_PARAMS: n("> 60.4.3112.120"),
                    MEDIA_WEB_REQUEST: n(">= 58.4.3029.118"),
                    SERP_ADD_STRUCTURES: n(">= 62.4.3202.176"),
                    SERP_ADD_INNER_STRUCTURES: n(">= 64.4.3282.200"),
                    MOBILE_TRANSFER_PANEL: !0,
                    CUSTOM_METRICS_JSON: n(">= 64.4.3282.236"),
                    DASH_DOWNLOAD: n(">= 72.0.3626.130"),
                    WEB_REQUEST_EXTRA_HEADERS: n(">= 72.0.0.0"),
                    NATIVE_PIP: n(">= 74.0.0.0"),
                    DOWNLOAD: {
                        EXTRA_DATAS: n(">= 103.0.0.0"),
                        M3U8_AUDIO: n(">= 109.0.0.0")
                    },
                    CHATGPT: n(">= 110.0.0.0"),
                    DO_NOT_ONBOARD_YOUTUBE_ANTI_ADBLOCKER: n(">= 117.0.0.0"),
                    DO_NOT_FAST_FORWARD_YOUTUBE_ADS: n(">= " + r.g),
                    SRT_V3_SUPPORT: n(">= 121.0.0.0")
                }
            }(e.navigator.userAgent);
            t.a = u
        }
        ).call(this, n(10))
    }
});
