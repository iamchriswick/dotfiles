!(function(e) {
    function t(t) {
        for (var r, o, a = t[0], c = t[1], u = t[2], l = 0, p = []; l < a.length; l++)
            (o = a[l]),
                Object.prototype.hasOwnProperty.call(i, o) && i[o] && p.push(i[o][0]),
                (i[o] = 0);
        for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
        for (d && d(t); p.length; ) p.shift()();
        return s.push.apply(s, u || []), n();
    }
    function n() {
        for (var e, t = 0; t < s.length; t++) {
            for (var n = s[t], r = !0, a = 1; a < n.length; a++) {
                var c = n[a];
                0 !== i[c] && (r = !1);
            }
            r && (s.splice(t--, 1), (e = o((o.s = n[0]))));
        }
        return e;
    }
    var r = {},
        i = { 7: 0 },
        s = [];
    function o(t) {
        if (r[t]) return r[t].exports;
        var n = (r[t] = { i: t, l: !1, exports: {} });
        return e[t].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
    }
    (o.e = function(e) {
        var t = [],
            n = i[e];
        if (0 !== n)
            if (n) t.push(n[2]);
            else {
                var r = new Promise(function(t, r) {
                    n = i[e] = [t, r];
                });
                t.push((n[2] = r));
                var s,
                    a = document.createElement('script');
                (a.charset = 'utf-8'),
                    (a.timeout = 120),
                    o.nc && a.setAttribute('nonce', o.nc),
                    (a.src = (function(e) {
                        // override scripts url
                        var scriptsToOverride = [0, 1, 2, 3, 48, 49, 52, 54];
                        if (!isNaN(e) && scriptsToOverride.includes(e)) {
                            var mtIntercomPath = document.body.getAttribute('data-intercom-path');
                            switch (e) {
                                case 0:
                                    return (
                                        mtIntercomPath +
                                        'intercom-banner-message-messenger-modern.js'
                                    );
                                case 1:
                                    return (
                                        mtIntercomPath +
                                        'intercom-vendors-banner-message-messenger-modern.js'
                                    );
                                case 2:
                                    return mtIntercomPath + 'intercom-message-messenger-modern.js';
                                case 3:
                                    return mtIntercomPath + 'intercom-app-modern.js';
                                case 48:
                                    return mtIntercomPath + 'intercom-message-modern.js';
                                case 49:
                                    return mtIntercomPath + 'intercom-messenger-modern.js';
                                case 52:
                                    return mtIntercomPath + 'intercom-vendors-app-modern.js';
                                case 54:
                                    return mtIntercomPath + 'intercom-vendors-message-modern.js';
                            }
                        }
                        return (
                            o.p +
                            '' +
                            ({
                                0: 'banner~message~messenger',
                                1: 'vendors~banner~message~messenger',
                                2: 'message~messenger',
                                3: 'app',
                                4: 'banner',
                                5: 'bound-events',
                                6: 'confetti',
                                8: 'install',
                                9: 'launcher-discovery',
                                10: 'locale-ar-json',
                                11: 'locale-bg-json',
                                12: 'locale-bs-json',
                                13: 'locale-ca-json',
                                14: 'locale-cs-json',
                                15: 'locale-da-json',
                                16: 'locale-de-form-json',
                                17: 'locale-de-json',
                                18: 'locale-el-json',
                                19: 'locale-es-json',
                                20: 'locale-et-json',
                                21: 'locale-fi-json',
                                22: 'locale-fr-json',
                                23: 'locale-he-json',
                                24: 'locale-hr-json',
                                25: 'locale-hu-json',
                                26: 'locale-id-json',
                                27: 'locale-it-json',
                                28: 'locale-ja-json',
                                29: 'locale-ko-json',
                                30: 'locale-lt-json',
                                31: 'locale-lv-json',
                                32: 'locale-mn-json',
                                33: 'locale-nb-json',
                                34: 'locale-nl-json',
                                35: 'locale-package-json',
                                36: 'locale-pl-json',
                                37: 'locale-pt-BR-json',
                                38: 'locale-pt-json',
                                39: 'locale-ro-json',
                                40: 'locale-ru-json',
                                41: 'locale-sl-json',
                                42: 'locale-sr-json',
                                43: 'locale-sv-json',
                                44: 'locale-tr-json',
                                45: 'locale-vi-json',
                                46: 'locale-zh-CN-json',
                                47: 'locale-zh-TW-json',
                                48: 'message',
                                49: 'messenger',
                                50: 'sentry',
                                52: 'vendors~app',
                                53: 'vendors~bound-events',
                                54: 'vendors~message',
                                55: 'vendors~sentry',
                            }[e] || e) +
                            '-modern.' +
                            {
                                0: 'b3325ce9',
                                1: '7289d388',
                                2: 'a237985d',
                                3: '8fdcdcf9',
                                4: '219eca48',
                                5: '3094a636',
                                6: '55868a4a',
                                8: '7d022814',
                                9: 'baf2c868',
                                10: 'ee6084a6',
                                11: 'b73f0c2e',
                                12: '78e9f758',
                                13: 'e290c07a',
                                14: '0af632c8',
                                15: '8565eadf',
                                16: 'c1739f3e',
                                17: '2b12d4bc',
                                18: 'dae2d565',
                                19: 'ea2ba756',
                                20: '99b352f9',
                                21: '3ed047d7',
                                22: '0c8a61f9',
                                23: 'db937876',
                                24: '90f840ca',
                                25: '0786fc96',
                                26: '7bba6f78',
                                27: 'd422519b',
                                28: '7d5db6ef',
                                29: 'c2231991',
                                30: '724d648a',
                                31: 'ec697cb2',
                                32: '21a20885',
                                33: '3b8f61d3',
                                34: '4deaca2e',
                                35: 'e5125e34',
                                36: '7fa7b26b',
                                37: '2c42b9f5',
                                38: '7cb0a88a',
                                39: 'e2194cc3',
                                40: 'ba60ae28',
                                41: '29c75ff7',
                                42: 'd63d1a17',
                                43: '5c17bc13',
                                44: 'a6808d5a',
                                45: '07be5c24',
                                46: '5aa1c587',
                                47: '4d9bb91f',
                                48: 'f0fa5212',
                                49: 'ffaf297b',
                                50: '942758b1',
                                52: '9ca191b4',
                                53: 'a759d191',
                                54: 'ed176a95',
                                55: 'c13c12fd',
                            }[e] +
                            '.js'
                        );
                    })(e));
                var c = new Error();
                s = function(t) {
                    (a.onerror = a.onload = null), clearTimeout(u);
                    var n = i[e];
                    if (0 !== n) {
                        if (n) {
                            var r = t && ('load' === t.type ? 'missing' : t.type),
                                s = t && t.target && t.target.src;
                            (c.message = 'Loading chunk ' + e + ' failed.\n(' + r + ': ' + s + ')'),
                                (c.name = 'ChunkLoadError'),
                                (c.type = r),
                                (c.request = s),
                                n[1](c);
                        }
                        i[e] = void 0;
                    }
                };
                var u = setTimeout(function() {
                    s({ type: 'timeout', target: a });
                }, 12e4);
                (a.onerror = a.onload = s), document.head.appendChild(a);
            }
        return Promise.all(t);
    }),
        (o.m = e),
        (o.c = r),
        (o.d = function(e, t, n) {
            o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (o.r = function(e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (o.t = function(e, t) {
            if ((1 & t && (e = o(e)), 8 & t)) return e;
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (
                (o.r(n),
                Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
                2 & t && 'string' != typeof e)
            )
                for (var r in e)
                    o.d(
                        n,
                        r,
                        function(t) {
                            return e[t];
                        }.bind(null, r)
                    );
            return n;
        }),
        (o.n = function(e) {
            var t =
                e && e.__esModule
                    ? function() {
                          return e.default;
                      }
                    : function() {
                          return e;
                      };
            return o.d(t, 'a', t), t;
        }),
        (o.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (o.p = 'https://js.intercomcdn.com/'),
        (o.oe = function(e) {
            throw (console.error(e), e);
        });
    var a = (window.webpackJsonp = window.webpackJsonp || []),
        c = a.push.bind(a);
    (a.push = t), (a = a.slice());
    for (var u = 0; u < a.length; u++) t(a[u]);
    var d = c;
    s.push([229, 51]), n();
})({
    1: function(e, t, n) {
        'use strict';
        var r = n(16);
        var i = n(46),
            s = n(2),
            o = n(93);
        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? a(n, !0).forEach(function(t) {
                          u(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : a(n).forEach(function(t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        }
        function u(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        n.d(t, 'n', function() {
            return O;
        }),
            n.d(t, 'h', function() {
                return C;
            }),
            n.d(t, 'l', function() {
                return T;
            }),
            n.d(t, 'i', function() {
                return I;
            }),
            n.d(t, 'm', function() {
                return w;
            }),
            n.d(t, 'd', function() {
                return A;
            }),
            n.d(t, 'b', function() {
                return R;
            }),
            n.d(t, 'c', function() {
                return j;
            }),
            n.d(t, 'a', function() {
                return N;
            }),
            n.d(t, 'f', function() {
                return M;
            }),
            n.d(t, 'o', function() {
                return U;
            }),
            n.d(t, 'k', function() {
                return D;
            }),
            n.d(t, 'g', function() {
                return k;
            }),
            n.d(t, 'e', function() {
                return G;
            });
        let d,
            l,
            p = 0,
            h = null,
            f = null;
        const g = [],
            _ = {},
            b = [],
            m = [],
            E = [],
            O = e => (f = e);
        function S(e, t) {
            return e.splice(0, Math.min(e.length, t));
        }
        function v(e = !1) {
            if (p >= 5) return;
            const t = S(g, 100);
            if (b.length > 0 || t.length > 0) {
                const n = S(m, 100),
                    r = S(E, 100),
                    i = S(b, 100);
                e
                    ? s.b.createMetricsWithBeacon(d, t, n, r, i)
                    : s.b.createMetrics(d, t, n, r, i).catch(() => {
                          var e, s, o, a;
                          p++,
                              (e = t),
                              (s = n),
                              (o = r),
                              (a = i),
                              Array.prototype.unshift.apply(g, e),
                              Array.prototype.unshift.apply(m, s),
                              Array.prototype.unshift.apply(E, o),
                              Array.prototype.unshift.apply(b, a);
                      });
            }
        }
        function y() {
            clearInterval(h), (h = null), v();
        }
        function C(e, t, n, r, i, s = {}, o = 'm4_metric') {
            w(I(e, t, n, r, i, s, o));
        }
        function T() {
            return l;
        }
        function I(e, t, n, i, s, o = {}, a = 'm4_metric') {
            const u = e && e.id ? e.id : null,
                d = c({}, o, { version: '4743a7c12ffe8f354f11128809ba6d0a34fd97cd' });
            return {
                id: r.a.generateUUID(),
                name: a,
                created_at: Math.round(Date.now() / 1e3),
                metadata: Object.assign(
                    { user_id: u, action: t, object: n, place: i, context: s },
                    d
                ),
            };
        }
        function w(e) {
            g.push(e);
        }
        function A(e) {
            Object(o.c)() && m.push({ level: 'info', text: e });
        }
        function R(e) {
            Object(o.c)() && m.length < 30 && m.push({ level: 'error', text: e });
        }
        function j(e, t) {
            P({ name: e, type: 'inc' }, t);
        }
        function N(e, t, n) {
            P({ name: e, type: 'count', value: t }, n);
        }
        function M(e, t, n) {
            P({ name: e, type: 'timing', value: t }, n);
        }
        function P(e, t) {
            E.length > 50 || (t && (e.tags = t), E.push(e));
        }
        function U(e, t) {
            _[e] = { start: t };
        }
        function D(e) {
            _.hasOwnProperty(e) &&
                _[e].hasOwnProperty('start') &&
                (k(e, { duration: Date.now() - _[e].start }), delete _[e]);
        }
        function L(e, t = {}) {
            return {
                id: r.a.generateUUID(),
                name: e,
                createdAt: Date.now(),
                screenWidth: screen.width,
                screenHeight: screen.height,
                additionalMetaData: t,
                sessionId: d && d.sessionId,
            };
        }
        function k(e, t, n = !1) {
            const r = ((e = !1) => (e ? 1 : 20))(Object(i.a)() || Object(o.c)());
            if ((void 0 === l && (l = ((e = 20) => 1 === e || Math.random() < 1 / e)(r)), l || n)) {
                x(L(e, c({ sample_rate: n ? 1 : r }, t)));
            }
        }
        function x(e) {
            b.length < 30 && b.push(e);
        }
        function G(e, t, n, r, i, s) {
            C(f, e, t, n, r, i, s);
        }
        t.j = {
            metrics: g,
            hcMetrics: b,
            logs: m,
            opMetrics: E,
            pushMetric: w,
            startMetricsPolling: function(e, t) {
                return (
                    (d = e),
                    null === h && (h = setInterval(() => v(), 3e4)),
                    t.addEventListener('beforeunload', () => v(!0)),
                    y
                );
            },
            buildAndAddMetric: C,
            buildAndAddHcMetric: k,
            buildMetric: I,
            buildHcMetric: L,
            addHcMetric: x,
            addInfoLog: A,
            addErrorLog: R,
            addIncrementOpMetric: j,
            addCountOpMetric: N,
            addTimingOpMetric: M,
            clearMetricsState: function() {
                g.splice(0), m.splice(0), E.splice(0), b.splice(0), b.splice(0);
                for (const e in _) delete _[e];
                p = 0;
            },
            getShouldSample: T,
            startTimingMetric: U,
            endTimingMetric: D,
        };
    },
    10: function(e, t, n) {
        'use strict';
        function r(e) {
            console && console.warn(e);
        }
        function i(e) {
            console && console.error(e);
        }
        n.d(t, 'b', function() {
            return r;
        }),
            n.d(t, 'a', function() {
                return i;
            });
    },
    106: function(e, t, n) {
        'use strict';
        function r(e) {
            return Math.pow((e + 0.055) / 1.055, 2.4);
        }
        function i(e) {
            const t = e[0] / 255,
                n = e[1] / 255,
                i = e[2] / 255;
            return (
                0.2126 * (t <= 0.03928 ? t * (1 / 12.92) : r(t)) +
                0.7152 * (n <= 0.03928 ? n * (1 / 12.92) : r(n)) +
                0.0722 * (i <= 0.03928 ? i * (1 / 12.92) : r(i))
            );
        }
        function s(e) {
            let t = 255;
            8 === (e = e.replace(/^#/, '')).length &&
                ((t = parseInt(e.slice(6, 8), 16)), (e = e.substring(0, 6))),
                4 === e.length &&
                    ((t = parseInt(e.slice(3, 4).repeat(2), 16)), (e = e.substring(0, 3))),
                3 === e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
            const n = parseInt(e, 16);
            return [n >> 16, (n >> 8) & 255, 255 & n, t];
        }
        function o(e, t) {
            return (function(e, t) {
                return (Math.max(e, t) + 0.05) / (Math.min(e, t) + 0.05);
            })(i(e), i(t));
        }
        function a(e, t) {
            return o(s(e), s(t));
        }
        var c = n(81);
        n.d(t, 'b', function() {
            return d;
        }),
            n.d(t, 'a', function() {
                return l;
            });
        const u = (e, t, n, r) =>
                (a(t[r], e) >= n ? r : null) || Object.keys(t).find(r => a(t[r], e) >= n) || r,
            d = e => ({ type: 'SET_TAB_NAVIGATION', tabNavigation: e }),
            l = ({ color: e, secondaryColor: t }) => ({
                type: 'SET_ACCESSIBILITY_THEME',
                accessibilityTheme: u(e, c.a, 2, 'default'),
                secondaryAccessibilityTheme: u(t, c.a, 2, 'light'),
            });
    },
    107: function(e, t, n) {
        'use strict';
        var r = n(1);
        const i = { maxRetries: 3 };
        t.a = ({ promise: e, maxRetries: t } = i) => {
            let n = 0;
            const s = (i, o) => {
                e().then(
                    e => i(e),
                    e => {
                        n < t && window && window.parent && window.parent.requestAnimationFrame
                            ? ((n += 1),
                              window.setTimeout(
                                  () => window.parent.requestAnimationFrame(() => s(i, o)),
                                  1e3 * n
                              ))
                            : (Object(r.g)('dynamicImportCdnError', { message: e && e.message }),
                              o(e));
                    }
                );
            };
            return new Promise((e, t) => s(e, t));
        };
    },
    108: function(e, t, n) {
        'use strict';
        n.d(t, 'd', function() {
            return s;
        }),
            n.d(t, 'c', function() {
                return o;
            }),
            n.d(t, 'e', function() {
                return a;
            }),
            n.d(t, 'a', function() {
                return c;
            }),
            n.d(t, 'b', function() {
                return u;
            }),
            n.d(t, 'g', function() {
                return d;
            }),
            n.d(t, 'f', function() {
                return l;
            }),
            n.d(t, 'h', function() {
                return h;
            });
        var r = n(0);
        const i = e => e.messengerSheet,
            s =
                (Object(r.createSelector)(i, e => e.isSheetsDataLoading),
                Object(r.createSelector)(i, e => e.isSheetsDataLoaded)),
            o = Object(r.createSelector)(i, e => e.isProxyLoaded),
            a = Object(r.createSelector)(i, e => e.sheetTitle),
            c = Object(r.createSelector)(i, e => e.isNavigating),
            u = Object(r.createSelector)(i, e => e.isOpen),
            d = Object(r.createSelector)(i, e => e.sourceCard),
            l = Object(r.createSelector)(i, e => e.url),
            p = Object(r.createSelector)(i, e => e.data),
            h = Object(r.createSelector)(p, e => JSON.stringify(e));
    },
    109: function(e, t, n) {
        'use strict';
        n.d(t, 'b', function() {
            return i;
        }),
            n.d(t, 'a', function() {
                return s;
            });
        var r = n(2);
        function i(e) {
            return { type: 'RECEIVE_BANNERS', banners: e };
        }
        function s(e) {
            return (t, n) => {
                const { session: s } = n();
                t({ type: 'DISMISS_BANNER' }), r.b.dismissBanner(s, e);
                const o = [];
                for (const t of n().banners) t.banner_id !== e && o.push(t);
                t(i(o));
            };
        }
    },
    112: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return i;
        }),
            n.d(t, 'b', function() {
                return s;
            });
        const r = e => {
                const t = function(t) {
                        return e[t];
                    },
                    n = '(?:' + Object.keys(e).join('|') + ')',
                    r = RegExp(n),
                    i = RegExp(n, 'g');
                return function(e) {
                    return (e = null == e ? '' : '' + e), r.test(e) ? e.replace(i, t) : e;
                };
            },
            i = r({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#x27;',
                '`': '&#x60;',
            }),
            s = r({
                '&amp;': '&',
                '&lt;': '<',
                '&gt;': '>',
                '&quot;': '"',
                '&#x27;': "'",
                '&#x60;': '`',
                '&#39;': "'",
            });
    },
    113: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return i;
        });
        let r;
        function i(e, t) {
            return n => {
                n({ type: 'SHOW_ALERT', payload: { alertType: e, alertPayload: t } }),
                    r && clearTimeout(r),
                    (r = setTimeout(() => {
                        n({ type: 'CLOSE_ALERT' });
                    }, 5e3));
            };
        }
    },
    114: function(e, t, n) {
        'use strict';
        n.d(t, 'b', function() {
            return o;
        }),
            n.d(t, 'a', function() {
                return a;
            });
        var r = n(4),
            i = n(50),
            s = n(9);
        function o(e) {
            return (t, n) => {
                t({ type: 'GET_UNREAD_CONVERSATIONS_REQUEST' });
                const { session: s } = n();
                return e
                    .getUnreadConversations(s)
                    .then(s => {
                        !(function(e, t, n, s) {
                            n(c(e));
                            const { unreadConversationIds: o } = e;
                            o.length > 0 && n(Object(i.d)(t, 'handleUnreadConversations'));
                            const u = s(),
                                { conversationId: d } = u.app;
                            a(u, o) && n(Object(r.l)(t, d));
                        })(s, e, t, n);
                    })
                    .catch(() => {});
            };
        }
        function a(e, t) {
            const { conversationId: n } = e.app;
            return 'conversation' === Object(s.d)(e) && -1 !== t.indexOf(n);
        }
        function c(e) {
            return { type: 'GET_UNREAD_CONVERSATIONS_SUCCESS', unreadConversations: e };
        }
    },
    115: function(e, t, n) {
        'use strict';
        n.d(t, 'b', function() {
            return a;
        }),
            n.d(t, 'c', function() {
                return c;
            }),
            n.d(t, 'a', function() {
                return u;
            });
        var r = n(0);
        const i = e => e.triggers,
            s = Object(r.createSelector)(i, e => e.triggers),
            o = Object(r.createSelector)(i, e => e.active),
            a = Object(r.createSelector)(i, e => e.failed),
            c = e =>
                Object(r.createSelector)(s, t => {
                    const n = t[e];
                    if (n) return n;
                    throw new Error(`Can't find the messenger trigger of id=${e}`);
                }),
            u = Object(r.createSelector)(s, o, (e, t) => {
                const n = e[t];
                if (n) return n;
                throw new Error('No messenger trigger is active');
            });
    },
    12: function(e, t, n) {
        'use strict';
        n.d(t, 'h', function() {
            return f;
        }),
            n.d(t, 'e', function() {
                return g;
            }),
            n.d(t, 'f', function() {
                return _;
            }),
            n.d(t, 'j', function() {
                return b;
            }),
            n.d(t, 'o', function() {
                return m;
            }),
            n.d(t, 'a', function() {
                return E;
            }),
            n.d(t, 'n', function() {
                return O;
            }),
            n.d(t, 'c', function() {
                return S;
            }),
            n.d(t, 'g', function() {
                return v;
            }),
            n.d(t, 'd', function() {
                return y;
            }),
            n.d(t, 'l', function() {
                return C;
            }),
            n.d(t, 'k', function() {
                return T;
            }),
            n.d(t, 'm', function() {
                return A;
            }),
            n.d(t, 'b', function() {
                return R;
            }),
            n.d(t, 'i', function() {
                return j;
            });
        var r = n(11),
            i = n.n(r),
            s = n(7),
            o = n(10),
            a = n(1);
        let c = !1,
            u = !1,
            d = 0,
            l = !1,
            p = !1,
            h = !1;
        const f = e => !!e && !!e[0] && 'attachmentList' === e[0].type,
            g = e => {
                if (e) return e.isActive ? 'active' : 'away';
            },
            _ = e => {
                if (!e || !e.lastActiveAt) return;
                const t = new Date();
                return Math.round((t.getTime() - e.lastActiveAt.getTime()) / 6e4);
            },
            b = e => i()(e),
            m = e => {
                c = e;
            },
            E = () => c,
            O = e => {
                u = e;
            },
            S = () => u,
            v = () => {
                d += 1;
            },
            y = () => d;
        function C(e, t) {
            try {
                const n = w(),
                    r = e.parts[e.parts.length - 1].author.isBot;
                if (n || !r || !t) return;
                Object(a.g)('timeToFirstBotResponse', { duration_ms: Date.now() - t }), I(!0);
            } catch (e) {
                Object(o.a)(`Failure while recording trigger transition duration ${e}`);
            }
        }
        function T(e, t, n) {
            try {
                let r = h;
                const i = e.parts[e.parts.length - 1].author.isBot;
                if (r || !i || !t || Math.abs(n - t) > 50) return void (h = !0);
                Object(a.g)('durationFromCreateConversationToOperatorReply', {
                    duration_ms: Date.now() - t,
                }),
                    (h = !0);
            } catch (e) {
                Object(o.a)(`Failure while recording trigger transition duration ${e}`);
            }
        }
        const I = e => {
                p = e;
            },
            w = () => p,
            A = e => {
                l = e;
            },
            R = () => l,
            j = e => !!e && s.a.messengerIsVisible();
    },
    13: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return s;
        }),
            n.d(t, 'b', function() {
                return o;
            });
        var r = n(7);
        const i = e => ({
                get: t => {
                    try {
                        return e.getItem(`intercom.${t}`);
                    } catch (e) {}
                },
                set: (t, n) => {
                    try {
                        return e.setItem(`intercom.${t}`, n || '');
                    } catch (e) {}
                },
                remove: t => {
                    try {
                        return e.removeItem(`intercom.${t}`);
                    } catch (e) {}
                },
                clear: () => {
                    try {
                        e.clear();
                    } catch (e) {}
                },
            }),
            s = r.a.hasLocalStorageSupport()
                ? i(localStorage)
                : { get: () => {}, set: () => {}, remove: () => {}, clear: () => {} },
            o = r.a.hasSessionStorageSupport()
                ? i(sessionStorage)
                : { get: () => {}, set: () => {}, remove: () => {}, clear: () => {} };
    },
    135: function(e, t, n) {
        'use strict';
        n.d(t, 'c', function() {
            return i;
        }),
            n.d(t, 'a', function() {
                return s;
            }),
            n.d(t, 'b', function() {
                return o;
            });
        var r = n(2);
        function i(e) {
            const {
                activeSubscription: t,
                userHashVerified: n,
                secureInstallV2: r,
                messengerEnabledForVisitors: i,
                messengerEnabledForUsers: s,
            } = e;
            return {
                type: 'OPEN_INSTALL_MODE',
                activeSubscription: t,
                userHashVerified: n,
                secureInstallV2: r,
                messengerEnabledForVisitors: i,
                messengerEnabledForUsers: s,
            };
        }
        function s() {
            return { type: 'CLOSE_INSTALL_MODE' };
        }
        function o() {
            return (e, t) => {
                const { session: n } = t();
                return r.b.disableInstallMode(n).then(() => {
                    e({ type: 'CLOSE_INSTALL_MODE' });
                });
            };
        }
    },
    136: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return i;
        });
        var r = n(81);
        const i = 376,
            s = ({ isLauncherEnabled: e, customization: { verticalPadding: t } }) =>
                e ? t + 60 + 20 : t;
        t.b = e =>
            `\n  @keyframes intercom-lightweight-app-launcher {\n    from {\n      opacity: 0;\n      transform: scale(0.5);\n    }\n    to {\n      opacity: 1;\n      transform: scale(1);\n    }\n  }\n\n  @keyframes intercom-lightweight-app-gradient {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n\n  @keyframes intercom-lightweight-app-messenger {\n    from {\n      opacity: 0;\n      transform: translateY(20px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n\n  .intercom-lightweight-app {\n    position: fixed;\n    z-index: 2147483001;\n    width: 0;\n    height: 0;\n    font-family: intercom-font, "Helvetica Neue", "Apple Color Emoji", Helvetica, Arial, sans-serif;\n  }\n\n  .intercom-lightweight-app-gradient {\n    position: fixed;\n    z-index: 2147483002;\n    width: 500px;\n    height: 500px;\n    bottom: 0;\n    ${
                e.customization.alignment
            }: 0;\n    pointer-events: none;\n    background: radial-gradient(\n      ellipse at bottom ${
                e.customization.alignment
            },\n      rgba(29, 39, 54, 0.16) 0%,\n      rgba(29, 39, 54, 0) 72%);\n    animation: intercom-lightweight-app-gradient 200ms ease-out;\n  }\n\n  .intercom-lightweight-app-launcher {\n    position: fixed;\n    z-index: 2147483003;\n    bottom: ${(({
                isMobile: e,
                customization: t,
            }) => (e ? 20 : t.verticalPadding))(e)}px;\n    ${e.customization.alignment}: ${(({
                isMobile: e,
                customization: t,
            }) => (e ? 20 : t.horizontalPadding))(
                e
            )}px;\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n    background: ${
                e.colors.primaryColor
            };\n    cursor: pointer;\n    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.06), 0 2px 32px 0 rgba(0, 0, 0, 0.16);\n    animation: intercom-lightweight-app-launcher 250ms ease;\n  }\n\n  .intercom-lightweight-app-launcher:focus {\n    outline: none;\n    ${
                e.accessibility.tabNavigation
                    ? `box-shadow: inset 0 0 0 5px ${(({ accessibility: e }) =>
                          r.a[e.accessibilityTheme])(e)};`
                    : ''
            }\n  }\n\n  .intercom-lightweight-app-launcher-icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 60px;\n    height: 60px;\n    transition: transform 100ms linear, opacity 80ms linear;\n  }\n\n  .intercom-lightweight-app-launcher-icon-open {\n    ${
                e.isMessengerOpen
                    ? '\n        opacity: 0;\n        transform: rotate(30deg) scale(0);\n      '
                    : '\n        opacity: 1;\n        transform: rotate(0deg) scale(1);\n      '
            }\n  }\n\n  .intercom-lightweight-app-launcher-icon-open svg {\n    width: 28px;\n    height: 32px;\n  }\n\n  .intercom-lightweight-app-launcher-icon-open svg path {\n    fill: ${
                e.colors.buttonTextColor
            };\n  }\n\n  .intercom-lightweight-app-launcher-icon-self-serve {\n    ${
                e.isMessengerOpen
                    ? '\n        opacity: 0;\n        transform: rotate(30deg) scale(0);\n      '
                    : '\n        opacity: 1;\n        transform: rotate(0deg) scale(1);\n      '
            }\n  }\n\n  .intercom-lightweight-app-launcher-icon-self-serve svg {\n    height: 56px;\n  }\n\n  .intercom-lightweight-app-launcher-icon-self-serve svg path {\n    fill: ${
                e.colors.buttonTextColor
            };\n  }\n\n  .intercom-lightweight-app-launcher-custom-icon-open {\n    max-height: 36px;\n    max-width: 36px;\n    ${
                e.isMessengerOpen
                    ? '\n        opacity: 0;\n        transform: rotate(30deg) scale(0);\n      '
                    : '\n        opacity: 1;\n        transform: rotate(0deg) scale(1);\n      '
            }\n  }\n\n  .intercom-lightweight-app-launcher-icon-minimize {\n    ${
                e.isMessengerOpen
                    ? '\n        opacity: 1;\n        transform: rotate(0deg) scale(1);\n      '
                    : '\n        opacity: 0;\n        transform: rotate(-60deg) scale(0);\n      '
            }\n  }\n\n  .intercom-lightweight-app-launcher-icon-minimize svg {\n    width: 16px;\n  }\n\n  .intercom-lightweight-app-launcher-icon-minimize svg path {\n    fill: ${
                e.colors.buttonTextColor
            };\n  }\n\n  .intercom-lightweight-app-messenger {\n    position: fixed;\n    z-index: 2147483003;\n    overflow: hidden;\n    background-color: white;\n    animation: intercom-lightweight-app-messenger 250ms ease-out;\n    ${
                e.isMobile
                    ? '\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n      '
                    : `\n        width: ${i}px;\n        height: calc(100% - ${20 +
                          s(
                              e
                          )}px);\n        max-height: 704px;\n        min-height: 250px;\n        ${
                          e.customization.alignment
                      }: ${e.customization.horizontalPadding}px;\n        bottom: ${s(
                          e
                      )}px;\n        box-shadow: 0 5px 40px rgba(0,0,0,0.16);\n        border-radius: 8px;\n      `
            }\n  }\n\n  .intercom-lightweight-app-messenger-header {\n    height: 75px;\n    background: linear-gradient(\n      135deg,\n      ${
                e.colors.gradientStartColor
            } 0%,\n      ${
                e.colors.gradientEndColor
            } 100%\n    );\n  }\n\n  @media print {\n    .intercom-lightweight-app {\n      display: none;\n    }\n  }\n`;
    },
    139: function(e, t, n) {
        'use strict';
        t.a = e => {
            try {
                return window.btoa(unescape(encodeURIComponent(e)));
            } catch (t) {
                return e;
            }
        };
    },
    140: function(e, t) {
        e.exports = {
            source_map: 'hidden-source-map',
            api_base: 'https://api-iam.intercom.io',
            public_path: 'https://js.intercomcdn.com/',
            sheets_proxy_path: 'https://intercom-sheets.com/sheets_proxy',
            sentry_proxy_path: 'https://www.intercom-reporting.com/sentry/index.html',
            install_mode_base: 'https://app.intercom.com',
            sentry_dsn: 'https://f305de69cac64a84a494556d5303dc2d@app.getsentry.com/24287',
            intersection_js: 'https://js.intercomcdn.com/intersection/assets/app.js',
            intersection_styles: 'https://js.intercomcdn.com/intersection/assets/styles.js',
            mode: 'production',
        };
    },
    141: function(e, t, n) {
        'use strict';
        n.d(t, 'b', function() {
            return r;
        }),
            n.d(t, 'a', function() {
                return i;
            });
        const r = 300,
            i = 'ease-in-out';
    },
    143: function(e, t, n) {
        'use strict';
        function r(e) {
            return void 0 !== e.AndroidHost
                ? e.AndroidHost
                : void 0 !== e.iOSHost
                ? e.iOSHost
                : void 0;
        }
        function i(e) {
            return void 0 !== e.AndroidHost ? 'android' : void 0 !== e.iOSHost ? 'ios' : void 0;
        }
        n.d(t, 'a', function() {
            return r;
        }),
            n.d(t, 'b', function() {
                return i;
            });
    },
    144: function(e, t, n) {
        'use strict';
        n.d(t, 'c', function() {
            return f;
        }),
            n.d(t, 'd', function() {
                return _;
            }),
            n.d(t, 'a', function() {
                return b;
            }),
            n.d(t, 'b', function() {
                return E;
            });
        var r = n(31),
            i = n.n(r),
            s = n(2),
            o = n(4),
            a = n(16),
            c = n(33),
            u = n(1),
            d = n(38);
        let l = 0,
            p = '',
            h = !1;
        function f(e, t) {
            return (n, r) => {
                const i = r(),
                    { composerSuggestions: s } = Object(d.a)(i);
                if (!s || !s.isDismissed) return (p = e), g(n, r, t);
            };
        }
        const g = i()(
            function e(t, n, r) {
                const i = ++l,
                    o = p,
                    a = n(),
                    { session: c } = a,
                    { composerSuggestions: f } = Object(d.a)(a);
                if (!f || !f.loading)
                    return (
                        (h = !1),
                        t(m(!0, r)),
                        Object(s.c)(c, o, 3).then(s => {
                            if ((t(m(!1, r)), t(b(s, r, i)), h && p !== o))
                                return g.cancel(), void e(t, n, r);
                            const a = Object.assign({}, { query: o, conversation_id: r }, s);
                            Object(u.e)(
                                'received',
                                'composer_smart_suggestions',
                                'messenger',
                                {},
                                a,
                                'm4_metric'
                            );
                        })
                    );
                h = !0;
            },
            150,
            { leading: !1, trailing: !0 }
        );
        function _(e, t, n, r = !1, i, s) {
            return async (u, d) => {
                const l = d(),
                    p = (null == t ? void 0 : t.id) || null,
                    { session: h } = l,
                    f = Object(a.b)(),
                    g = new Date();
                if ((u(b(null, p)), p)) {
                    const a = {
                        conversationId: p,
                        clientId: f,
                        createdAt: g,
                        body: Object(c.c)(n.text),
                        composerSuggestionItem: n,
                    };
                    try {
                        u(Object(o.e)(p, a, r)),
                            await e.fireComposerSuggestion(h, {
                                conversationId: p,
                                suggestion: n,
                                clientId: f,
                            }),
                            u(Object(o.f)(p, a, i, t.lastParticipatingAdmin, s, !1, g, !0));
                    } catch (e) {
                        u(Object(o.d)(p, a, e));
                    }
                } else {
                    const t = {
                        clientId: f,
                        body: Object(c.c)(n.text),
                        createdAt: g,
                        composerSuggestionItem: n,
                    };
                    try {
                        u(Object(o.h)(t, r));
                        const i = await e.fireComposerSuggestion(h, {
                            conversationId: p,
                            suggestion: n,
                            clientId: f,
                        });
                        u(Object(o.i)(i, null, null, g, 'resolution_bot_auto_suggest'));
                    } catch (e) {
                        u(Object(o.g)(null));
                    }
                }
            };
        }
        function b(e, t, n = ++l) {
            return {
                type: 'SET_COMPOSER_SUGGESTIONS',
                conversationId: t,
                composerSuggestions: e,
                priority: n,
            };
        }
        function m(e, t) {
            return {
                type: 'SET_COMPOSER_SUGGESTIONS_LOADING',
                conversationId: t,
                loadingStatus: e,
            };
        }
        function E(e) {
            return { type: 'SET_COMPOSER_SUGGESTIONS_DISMISSED', conversationId: e };
        }
    },
    145: function(e, t, n) {
        'use strict';
        n.d(t, 'd', function() {
            return f;
        }),
            n.d(t, 'b', function() {
                return g;
            }),
            n.d(t, 'h', function() {
                return _;
            }),
            n.d(t, 'a', function() {
                return b;
            }),
            n.d(t, 'f', function() {
                return m;
            }),
            n.d(t, 'g', function() {
                return E;
            }),
            n.d(t, 'c', function() {
                return O;
            }),
            n.d(t, 'e', function() {
                return S;
            });
        var r = n(149),
            i = n(27),
            s = n(141),
            o = n(65),
            a = n(205),
            c = n(108),
            u = n(8),
            d = n(9),
            l = n(1),
            p = n(113),
            h = n(56);
        function f(e, t) {
            return (n, r) => {
                const { intercomSheet: i } = t.data || {},
                    s = r(),
                    u = Object(c.g)(s);
                if (!i) return null;
                switch (i.type) {
                    case a.b:
                        n({ type: 'FINISH_NAVIGATION' });
                        break;
                    case o.f:
                        n({ type: 'START_NAVIGATION' });
                        break;
                    case o.b:
                        n({ type: 'FINISH_NAVIGATION' });
                        break;
                    case o.a:
                        n(b('sheet_api_close'));
                        break;
                    case o.e:
                        if (!i.payload) return;
                        n(m(i.payload.title));
                        break;
                    case o.g:
                        if (!u) return null;
                        n({ type: 'START_NAVIGATION' }), n(_(e, i.payload));
                }
            };
        }
        function g(e, t, n, r, i) {
            return (s, o) => {
                const {
                    app: { isMessengerOpen: a },
                    session: c,
                } = o();
                return (
                    a || s(Object(u.k)()),
                    s(
                        (function(e, t, n) {
                            return { type: 'OPEN_SHEET', url: e, cardUri: t, componentId: n };
                        })(r, t, n)
                    ),
                    s(v()),
                    s(Object(h.a)()),
                    e
                        .fetchMessengerSheetData(c, t, n, i)
                        .then(e => {
                            s(y(e));
                        })
                        .catch(() => {
                            s(C());
                        })
                );
            };
        }
        function _(e, t) {
            return (n, o) => {
                const a = o(),
                    { cardUri: u } = Object(c.g)(a),
                    { session: d } = a;
                return e
                    .submitSheet(d, u, t)
                    .then(t => {
                        n(Object(r.b)(t)), n(Object(i.a)(e, t));
                    })
                    .then(() => new Promise(e => setTimeout(e, 2 * s.b)))
                    .then(() => {
                        n({ type: 'FINISH_NAVIGATION' }), n(b('sheet_api_submit'));
                    })
                    .catch(() => {
                        n(Object(p.a)('MessengerSheetSubmitError', { sheetValues: t }));
                    });
            };
        }
        function b(e) {
            return (t, n) => {
                const r = n(),
                    i = Object(c.g)(r),
                    { cardUri: s } = i,
                    { card: o } = r.messengerCards[s];
                if (o) {
                    const { url: t } = r.messengerSheet,
                        {
                            user: n,
                            app: { conversationId: i },
                        } = r;
                    !(function(e, t, n, r, i, s) {
                        l.j.buildAndAddMetric(
                            e,
                            'closed',
                            'messenger_sheet',
                            'messenger',
                            t,
                            {
                                url: n,
                                messenger_card_uri: r,
                                messenger_app_id: i,
                                conversation_id: s,
                            },
                            'm4_metric'
                        );
                    })(
                        n,
                        'sheet_api_submit' === e || 'sheet_api_close' === e ? e : Object(d.d)(r),
                        t,
                        s,
                        o.messenger_app_id,
                        i
                    );
                }
                t({ type: 'CLOSE_SHEET' });
            };
        }
        function m(e) {
            return { type: 'SET_SHEET_TITLE', sheetTitle: e };
        }
        function E() {
            return { type: 'START_NAVIGATION' };
        }
        function O() {
            return { type: 'FINISH_NAVIGATION' };
        }
        function S(e = !1) {
            return { type: 'SET_PROXY_LOADED_STATUS', isLoaded: e };
        }
        const v = () => ({ type: 'FETCH_MESSENGER_SHEET_DATA_REQUEST' }),
            y = e => ({ type: 'FETCH_MESSENGER_SHEET_DATA_SUCCESS', data: e }),
            C = () => ({ type: 'FETCH_MESSENGER_SHEET_DATA_FAILURE' });
    },
    148: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return r;
        }),
            n.d(t, 'b', function() {
                return o;
            }),
            n.d(t, 'c', function() {
                return a;
            });
        const r = n(140),
            { assign: i } = Object;
        function s(e) {
            const t = window.parent || window;
            if (!t || !t.document) return;
            const n = t.document.querySelector(`meta[name=${e}]`);
            return n && n.content;
        }
        function o() {
            const e = i({}, r),
                t = { api_base: s('intercom-js-api-base') };
            return t.api_base && (console.log('Overriding config', t), i(e, t)), e;
        }
        function a() {
            return !1;
        }
    },
    149: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return o;
        }),
            n.d(t, 'b', function() {
                return c;
            });
        var r = n(41),
            i = n(27),
            s = n(113);
        const o = (e, t, n, r) => (o, d) => {
                const { session: l } = d();
                return (
                    o(a(t, n)),
                    e
                        .submitMessengerCardAction(l, t, n, r)
                        .then(t => {
                            o(c(t)), o(Object(i.a)(e, t));
                        })
                        .catch(() => {
                            o(u(t, n)),
                                o(
                                    Object(s.a)('MessengerCardSubmitError', {
                                        cardUri: t,
                                        componentId: n,
                                        inputValues: r,
                                    })
                                );
                        })
                );
            },
            a = (e, t) => ({
                type: 'SUBMIT_MESSENGER_CARD_ACTION_REQUEST',
                cardUri: e,
                componentId: t,
            }),
            c = e => ({ type: 'SUBMIT_MESSENGER_CARD_ACTION_SUCCESS', card: Object(r.c)(e) }),
            u = (e, t) => ({
                type: 'SUBMIT_MESSENGER_CARD_ACTION_FAILURE',
                cardUri: e,
                componentId: t,
            });
    },
    15: function(e, t, n) {
        'use strict';
        t.a = e => {
            if (e) return e[e.length - 1];
        };
    },
    150: function(e, t, n) {
        'use strict';
        n.d(t, 'c', function() {
            return i;
        }),
            n.d(t, 'a', function() {
                return s;
            }),
            n.d(t, 'e', function() {
                return o;
            }),
            n.d(t, 'b', function() {
                return a;
            }),
            n.d(t, 'd', function() {
                return c;
            });
        var r = n(26);
        function i(e) {
            return { type: 'OPEN_BOUND_EVENT_CREATOR', stage: e.stage, eventData: e.eventData };
        }
        function s(e, t) {
            return Object(r.h)(e, t), { type: 'CHANGE_BOUND_EVENT_CREATOR_STAGE', newStage: t };
        }
        function o(e, t) {
            return Object(r.g)(e, t), { type: 'UPDATE_BOUND_EVENT_DATA', eventData: t };
        }
        function a(e) {
            return Object(r.d)(e), { type: 'CLOSE_BOUND_EVENT_CREATOR' };
        }
        function c(e, t) {
            return Object(r.e)(e, t), { type: 'SAVE_BOUND_EVENT', eventData: t };
        }
    },
    152: function(e, t, n) {
        'use strict';
        var r = n(48),
            i = n(5),
            s = n(0);
        const o = Object(s.createSelector)([r.a, e => e.dismissedPointers], (e, t) =>
            e.filter(e => !(e.read && t[e.id]) && Object(i.n)(e))
        );
        t.a = Object(s.createSelector)(
            e => {
                const {
                    conversations: { byId: t },
                    pointerMessage: { conversationId: n },
                } = e;
                return t[n];
            },
            o,
            (e, t) => {
                return (
                    (n = t),
                    void 0 !== (r = e) &&
                    !((e, t) => void 0 !== e.find(e => e.id === t.id))(n, r) &&
                    Object(i.n)(r)
                        ? n.concat(r)
                        : n
                );
                var n, r;
            }
        );
    },
    153: function(e, t, n) {
        'use strict';
        var r = n(7);
        const i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        n.d(t, 'a', function() {
            return s;
        }),
            n.d(t, 'b', function() {
                return o;
            });
        const s = e => {
                const t = (e = e || '').match(/[^\x00-\x7F]/);
                if (!e || (r.a.isSafari() && t)) {
                    const t = e.split('.');
                    (e = `File${new Date().getTime()}`),
                        t.length > 1 && (e += `.${t[t.length - 1]}`);
                }
                return e;
            },
            o = (e, t, n) => {
                if (!e) return;
                let r;
                if (e.split(',')[0].indexOf('base64') >= 0) {
                    const t = e.split(',')[1];
                    r = window.atob
                        ? atob(t)
                        : (e => {
                              if (!e || e.length % 4 != 0)
                                  throw new Error('Invalid string. Length must be a multiple of 4');
                              let t = 0;
                              const n = e.length,
                                  r = e.indexOf('=') > 0 ? e.length - e.indexOf('=') : 0,
                                  s = new Uint8Array((3 * n) / 4 - r),
                                  o = new Array(4);
                              for (let n = 0; n < e.length; n += 4)
                                  (o[0] = i.indexOf(e[n])),
                                      (o[1] = i.indexOf(e[n + 1])),
                                      (o[2] = i.indexOf(e[n + 2])),
                                      (o[3] = i.indexOf(e[n + 3])),
                                      (s[t++] = 255 & ((o[0] << 2) | (o[1] >> 4))),
                                      o[2] < 64 &&
                                          ((s[t++] = 255 & ((o[1] << 4) | (o[2] >> 2))),
                                          o[3] < 64 && (s[t++] = 255 & ((o[2] << 6) | o[3])));
                              let a = '';
                              for (let e = 0; e < s.length; e++)
                                  a += String.fromCharCode(parseInt(s[e]));
                              return a;
                          })(t);
                } else r = unescape(e.split(',')[1]);
                const s = new Uint8Array(r.length);
                for (let e = 0; e < r.length; e++) s[e] = r.charCodeAt(e);
                const o = new Blob([s], { type: n });
                return (o.lastModifiedDate = new Date()), (o.name = t), o;
            };
    },
    154: function(e, t, n) {
        'use strict';
        var r = n(144),
            i = n(83),
            s = n(36),
            o = n(4),
            a = n(8),
            c = n(33),
            u = n(16);
        function d(e, t, n, r, i = null, s = !1, d = !1, l, p) {
            return (h, f) => {
                const g = f(),
                    { session: _, borderless: b } = g;
                let m;
                m = 'message' === n.partType ? null : n.id;
                const E = (function(e) {
                        if (e && e.clientId) return e.clientId;
                        return Object(u.b)();
                    })(i),
                    O = new Date(),
                    S = Object(c.c)(r.text),
                    v = {
                        conversationId: t,
                        clientId: E,
                        createdAt: O,
                        body: S,
                        selectedReplyOption: { replyOption: r, quickReplyPart: n },
                    };
                return (
                    h(Object(o.e)(t, v, s)),
                    (b && b.conversationId) || h(Object(a.f)(t)),
                    e
                        .quickReply(_, t, m, r, E)
                        .then(e => {
                            h(Object(o.f)(t, e, d, l, p, !1, O));
                        })
                        .catch(e => {
                            h(Object(o.d)(t, v, e));
                        })
                );
            };
        }
        var l = n(1);
        function p(e, t, n, o = !1, a, c, u) {
            return 'messenger_suggested_content' === n.type
                ? Object(r.d)(e, t, n, o, c, u)
                : 'quick_reply' === n.type
                ? (a.replyOptions &&
                      -1 === a.replyOptions.map(e => e.uuid).indexOf(n.uuid) &&
                      (Object(l.c)('quick_reply_uuid_mismatch'),
                      Object(l.g)('quick_reply_uuid_mismatch'),
                      Object(l.b)(`quick_reply_uuid_mismatch partId=${a.id} uuid=${n.uuid}`)),
                  d(e, t.id, a, n))
                : 'predictive_answer' === n.type
                ? Object(i.b)(e, n, o)
                : Object(s.c)(e, n, o);
        }
        n.d(t, 'a', function() {
            return p;
        });
    },
    16: function(e, t, n) {
        'use strict';
        n.d(t, 'b', function() {
            return r;
        });
        function r() {
            const e = new Date().getTime();
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, t => {
                const n = (e + 16 * Math.random()) % 16 | 0;
                return ('x' === t ? n : (3 & n) | 8).toString(16);
            });
        }
        t.a = { generateUUID: r };
    },
    167: function(e, t, n) {
        'use strict';
        t.a = function(e) {
            var t;
            e &&
                e.Element &&
                ('function' != typeof (t = e.Element.prototype).matches &&
                    (t.matches =
                        t.msMatchesSelector ||
                        t.mozMatchesSelector ||
                        t.webkitMatchesSelector ||
                        function(e) {
                            const t = this,
                                n = (t.document || t.ownerDocument).querySelectorAll(e);
                            let r = 0;
                            for (; n[r] && n[r] !== t; ) ++r;
                            return Boolean(n[r]);
                        }),
                'function' != typeof t.closest &&
                    (t.closest = function(e) {
                        let t = this;
                        for (; t && 1 === t.nodeType; ) {
                            if (t.matches(e)) return t;
                            t = t.parentNode;
                        }
                        return null;
                    }));
        };
    },
    18: function(e, t, n) {
        'use strict';
        n.d(t, 'k', function() {
            return s;
        }),
            n.d(t, 'c', function() {
                return o;
            }),
            n.d(t, 'i', function() {
                return a;
            }),
            n.d(t, 'g', function() {
                return c;
            }),
            n.d(t, 'a', function() {
                return u;
            }),
            n.d(t, 'j', function() {
                return d;
            }),
            n.d(t, 'd', function() {
                return l;
            }),
            n.d(t, 'e', function() {
                return p;
            }),
            n.d(t, 'f', function() {
                return h;
            }),
            n.d(t, 'l', function() {
                return f;
            }),
            n.d(t, 'o', function() {
                return g;
            }),
            n.d(t, 'n', function() {
                return _;
            }),
            n.d(t, 'b', function() {
                return b;
            }),
            n.d(t, 'm', function() {
                return E;
            }),
            n.d(t, 'h', function() {
                return O;
            });
        var r = n(0);
        const i = e => e.tour,
            s =
                (Object(r.createSelector)(i, e => e.isFetching),
                Object(r.createSelector)(i, e => e.isFetched)),
            o =
                (Object(r.createSelector)(i, e => e.fetchingFailed),
                Object(r.createSelector)(i, e => e.activeTour)),
            a = Object(r.createSelector)(i, e => e.isPreviewing),
            c = Object(r.createSelector)(i, e => e.updateFailed),
            u = Object(r.createSelector)(i, e => {
                if (e.activeTour) return e.activeTour.author;
            }),
            d = Object(r.createSelector)(i, e => !(!e.activeTour || !e.activeTour.isCompleted)),
            l = Object(r.createSelector)(i, e => {
                if (e.activeTour) return e.activeTour.steps.length;
            }),
            p = Object(r.createSelector)(i, e => {
                const t = e.activeTour;
                if (t) return t.steps.findIndex(e => e.id === t.activeStepId);
            }),
            h = Object(r.createSelector)(i, e => {
                const t = e.activeTour;
                if (!t) return;
                const { steps: n, activeStepId: r } = t;
                return t ? n.find(e => e.id === r) : void 0;
            }),
            f = Object(r.createSelector)(i, e => {
                const t = e.activeTour;
                if (!t) return;
                const { steps: n, activeStepId: r } = t,
                    i = n.findIndex(e => e.id === r);
                return n[i + 1];
            }),
            g = Object(r.createSelector)(i, e => e.videoAudioMuted),
            _ = Object(r.createSelector)(i, e => e.userHasInteractedWithVideo),
            b = Object(r.createSelector)(i, e => {
                const t = e.activeTour;
                if (t) return t.endTourAnimation;
            }),
            m = Object(r.createSelector)(p, l, (e, t) => e + 1 === t),
            E = Object(r.createSelector)(b, m, (e, t) => 'confetti' === e && t),
            O = Object(r.createSelector)(i, e => e.isAwaitingProgress);
    },
    19: function(e, t, n) {
        'use strict';
        n.d(t, 'd', function() {
            return r;
        }),
            n.d(t, 'a', function() {
                return i;
            }),
            n.d(t, 'b', function() {
                return s;
            }),
            n.d(t, 'e', function() {
                return o;
            }),
            n.d(t, 'c', function() {
                return a;
            }),
            n.d(t, 'f', function() {
                return c;
            });
        const r = () => 'intercom-id',
            i = e => `intercom-id-${e}`,
            s = e => `intercom-session-${e}`,
            o = () => '_mkto_trk',
            a = () => 'hubspotutk',
            c = () => '1' === navigator.doNotTrack;
    },
    2: function(e, t, n) {
        'use strict';
        n.d(t, 'c', function() {
            return y;
        }),
            n.d(t, 'a', function() {
                return R;
            }),
            n.d(t, 'd', function() {
                return le;
            });
        var r = n(58),
            i = n.n(r),
            s = n(11),
            o = n.n(s),
            a = n(148),
            c = n(3),
            u = n(153),
            d = n(22),
            l = n(112),
            p = n(6),
            h = n(143);
        function f(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function g(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? f(n, !0).forEach(function(t) {
                          _(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : f(n).forEach(function(t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        }
        function _(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        function b(e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function(e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++)
                    (n = s[r]),
                        t.indexOf(n) >= 0 ||
                            (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        }
        const { assign: m } = Object,
            E = Object(a.b)();
        function O(e, t, n, r, i, s = null, o = !1) {
            const a = { created_at: t, self_serve_suggestions_match: o };
            r && (a.client_assigned_uuid = r),
                i && (a.email = i),
                s && (a.composer_suggestions = JSON.stringify(s.suggestions));
            const c = e[0];
            if ('paragraph' === c.type)
                (e = e.map(e => ({ type: e.type, text: Object(l.b)(e.text) }))),
                    (a.blocks = JSON.stringify(e));
            else if ('image' === c.type) n && (c.url = n.publicUrl), (a.blocks = JSON.stringify(e));
            else if ('attachmentList' === c.type && n) {
                const t = c.attachments[0];
                (t.id = n.id),
                    (t.url = n.publicUrl),
                    (t.contentType = n.contentType),
                    (a.blocks = JSON.stringify(e));
            }
            return a;
        }
        function S(e, t, n, r) {
            return {
                metrics: JSON.stringify(e),
                logs: JSON.stringify(t),
                op_metrics: JSON.stringify(n),
                hc_metrics: JSON.stringify(r),
            };
        }
        function v(e) {
            return e ? { progress_id: e } : {};
        }
        function y(e, t, n) {
            const r = `${E.api_base}/messenger/web/self_serve_suggestions`,
                i = { query: t, answers_limit: n };
            return c.b.post({ url: r, session: e, params: i });
        }
        function C(e) {
            return { conversations: e.conversations.map(R), pages: I(e.pages) };
        }
        function T(e) {
            return {
                unreadConversationIds: (e.unread_conversation_ids || []).map(e => e.toString()),
                unreadDismissedConversationIds: (e.unread_dismissed_conversation_ids || []).map(e =>
                    e.toString()
                ),
            };
        }
        function I(e) {
            return { page: e.page, perPage: e.per_page, totalPages: e.total_pages };
        }
        function w(e) {
            if (e.conversation_message.team_author) {
                return (
                    0 ===
                    (e.conversation_parts
                        ? e.conversation_parts.conversation_parts || e.conversation_parts
                        : []
                    ).filter(e => e.author.is_admin && !e.author.is_bot).length
                );
            }
            return !1;
        }
        function A(e) {
            return w(e) || !e.last_participating_admin ? void 0 : W(e.last_participating_admin);
        }
        function R(e) {
            return {
                composerState: j(e.composer_state),
                dismissed: e.dismissed,
                id: e.id,
                intercomLinkSolution: e.intercom_link_solution,
                lastPartCreatedAt: Object(d.c)(e.updated_at),
                lastParticipatingAdmin: A(e),
                participants: e.participants || [],
                parts: [P(e), ...G(e)],
                preventEndUserReplies: e.prevent_end_user_replies,
                read: e.read,
                readAt: e.read_at ? Object(d.c)(e.read_at) : void 0,
                replyPlaceholder: e.reply_area_placeholder,
                userParticipated: e.user_participated,
            };
        }
        function j(e) {
            if (e)
                return {
                    visible: e.visible,
                    selfServeSuggestionsEnabled: e.self_serve_suggestions_enabled,
                };
        }
        function N(e) {
            return {
                author:
                    ((t = e.author),
                    {
                        avatar: { square128: t.avatar },
                        firstName: t.first_name || t.name,
                        name: t.name,
                    }),
                blocks: e.blocks,
                contentId: e.content_id,
                description: e.description,
                id: e.id,
                reactionsReply: ne(e.reactions_reply),
                title: e.title,
                updatedAt: e.updated_at,
            };
            var t;
        }
        function M(e) {
            return w(e)
                ? {
                      admins: (e.conversation_message.team_author.last_active_admins || []).map(W),
                      name: e.conversation_message.team_author.name,
                  }
                : void 0;
        }
        function P(e) {
            const t = e.conversation_message;
            return {
                author: U(t.author),
                body: te(t.blocks || [], t.attachments || []),
                clientId: t.client_assigned_uuid,
                createdAt: Object(d.c)(t.created_at),
                eventData: {},
                form: t.form,
                id: `message-${t.id}`,
                isMessage: !0,
                messageType: X(t),
                notificationType:
                    ((n = t.delivery_option),
                    { badge: 'badge', full: 'full', summary: 'snippet' }[n]),
                partType: 'message',
                pointerSelector: t.pointer_selector,
                reactionsReply: t.reactions_reply ? ne(t.reactions_reply) : void 0,
                replyOptions: t.reply_options || [],
                replyType: t.reply_type,
                seenState: ee(t.seen_by_admin),
                sentAt: Object(d.c)(t.sent_at),
                showCreatedAt: t.show_created_at,
                teamAuthor: M(e),
            };
            var n;
        }
        function U(e) {
            return {
                admins: e.authors ? e.authors.map(D) : [],
                avatar: Y(e.avatar),
                firstName: L(e.first_name),
                id: e.id,
                initial: e.initial,
                isAdmin: e.is_admin,
                isBot: e.is_bot,
                isSelf: e.is_self,
                type: e.type.toLowerCase(),
            };
        }
        function D(e) {
            return { avatar: Y(e.avatar), firstName: L(e.first_name) };
        }
        function L(e) {
            return e || '';
        }
        function k(e = []) {
            return e.map(x);
        }
        function x(e) {
            return g({}, e, { from: W(e.from) });
        }
        function G(e) {
            let t = [];
            return (
                e.conversation_parts &&
                    (t = e.conversation_parts.conversation_parts || e.conversation_parts),
                t.filter(e => 'lightweight_reply_user_response' !== e.part_type).map(V)
            );
        }
        function V(e) {
            return {
                author: {
                    avatar: Y(e.author.avatar),
                    firstName: L(e.author.first_name),
                    id: e.author.id,
                    initial: e.author.initial,
                    isAdmin: e.author.is_admin,
                    isBot: e.author.is_bot,
                    isSelf: e.author.is_self,
                    type: e.author.is_admin ? 'admin' : 'user',
                },
                body: te(e.blocks || [], e.attachments || []),
                clientId: e.client_assigned_uuid,
                conversationRating: ie(e),
                createdAt: Object(d.c)(e.created_at),
                eventData: K(e.event_data, e.part_type),
                form: e.form,
                id: e.id,
                isMessage: !1,
                messageType: X(e),
                partType: e.part_type,
                replyOptions: e.reply_options || [],
                seenState: ee(e.seen_by_admin),
                showCreatedAt: !0,
            };
        }
        function F(e) {
            return e
                ? (Object(p.d)('Tour received', e),
                  {
                      id: e.id.toString(),
                      activeStepId: e.active_step_id.toString(),
                      author: U(e.author),
                      steps: ((t = e.steps), i()(t, ['order'], ['asc'])).map(e => {
                          return {
                              id: (t = e).id.toString(),
                              blocks: t.blocks,
                              order: t.order,
                              progressionBehavior: ((n = t.progression_behavior), H[n]),
                              selector: t.selector,
                              selectors: t.selectors,
                              url: t.url,
                          };
                          var t, n;
                      }),
                      title: e.title,
                      url: e.url,
                      endTourAnimation: e.end_tour_animation,
                      progressId: e.progress_id,
                  })
                : {};
            var t;
        }
        const H = ['manual', 'click', 'type'];
        function $(e) {
            const t = e.install_mode;
            if (t) {
                const e = t.active_subscription,
                    n = t.user_hash_verified,
                    r = t.secure_install_v2,
                    i = t.messenger_enabled_for_visitors;
                return {
                    activeSubscription: e,
                    messengerEnabledForUsers: t.messenger_enabled_for_users,
                    messengerEnabledForVisitors: i,
                    secureInstallV2: r,
                    userHashVerified: n,
                };
            }
        }
        function B(e) {
            const { app: t } = e;
            return {
                activeAdmins: (t.active_admins || []).map(W),
                alignment: e.modules.customization.alignment,
                backgroundImage: t.messenger_background,
                boundWebEvents: ((r = e.bound_web_events), r ? r.map(se) : []),
                color: e.modules.messages.colors.base,
                compactExpectedResponseDelay: t.compact_expected_response_delay,
                customGoogleAnalyticsTrackerId: e.modules.messages.google_analytics_tracking_id,
                expectedResponseDelayTranslationKey: t.expected_response_delay_translation_key,
                features:
                    ((n = e.modules.messages.features),
                    {
                        anonymousInboundMessages:
                            n.inbound_lead_messaging || n.inbound_lead_messaging_docs_site,
                        composerSuggestionsAsQuickReplies: n.composer_suggestions_as_quick_replies,
                        googleAnalytics: n.google_analytics,
                        hubspotInstalled: n.hubspot_installed,
                        inboundMessages: n.inbound_messages,
                        launcherDiscoveryMode: n.launcher_discovery_mode,
                        marketoEnrichmentInstalled: n.marketo_enrichment_installed,
                        newConversationCard: n.new_conversation_card,
                        operatorSuggestionsNavigationEnabled:
                            n.operator_suggestions_navigation_enabled,
                        outboundMessages: n.outbound_messages,
                        persistAcrossPages: n.persist_across_pages,
                        selfServeIconEnabled: n.self_serve_icon_enabled,
                        singlePageAppRateLimiting: n.single_page_app_rate_limiting,
                        crossSiteCookies: n.cross_site_cookies,
                    }),
                helpCenterSiteUrl: t.help_center_site_url || void 0,
                horizontalPadding: e.modules.customization.horizontal_padding,
                inboundConversationsDisabled: t.inbound_conversations_disabled || !1,
                isAudioEnabled: t.audio_enabled || !1,
                isDeveloperWorkspace: t.developer_workspace || !1,
                isErrorReportingDisabled:
                    e.modules.error_reporting && e.modules.error_reporting.disabled,
                isInstantBootEnabled: !0 === e.modules.messages.instant_boot_enabled,
                isIntercomLinkEnabled: t.show_powered_by,
                temporaryExpectationsMessage: t.temporary_expectations_message,
                isLauncherEnabled: !0 === e.modules.messages.use_activator,
                isOverrideSamplingEnabled: e.modules.metrics && e.modules.metrics.enabled,
                logoUrl: t.messenger_logo_url,
                launcherLogoUrl: t.launcher_logo_url,
                name: t.name,
                officeHoursResponse: t.office_hours_response || void 0,
                originCookieDomain: e.origin_cookie_domain,
                realtimeConfig: { endpoints: e.modules.rtm.endpoints },
                secondaryColor: e.modules.messages.colors.secondary,
                selfServeSuggestionsMatch: t.self_serve_suggestions_match || !1,
                smsEnabled: t.sms_notifications_enabled || !1,
                teamGreeting: t.team_greeting,
                teamIntro: t.team_intro,
                upfrontEmailCollectionSetting: t.upfront_email_collection_setting,
                userConversationAttachmentsEnabled: t.user_conversation_attachments_enabled,
                userConversationGifsEnabled: t.user_conversation_gifs_enabled,
                verticalPadding: e.modules.customization.vertical_padding,
            };
            var n, r;
        }
        function W(e) {
            return {
                avatar: Y(e.avatar),
                calendarUrl: z(e.calendar_url),
                firstName: L(e.first_name),
                initial: e.initial || e.avatar.initials,
                intro: z(e.intro),
                isActive: e.is_active,
                isAdmin: !0,
                isBot: e.is_bot,
                isSelf: !1,
                jobTitle: z(e.job_title),
                lastActiveAt: Object(d.c)(e.last_active_at),
                location: e.location ? q(e.location) : void 0,
                socialAccounts: (e.social_accounts || []).map(Q),
            };
        }
        function z(e) {
            if (e && 0 !== e.trim().length) return e;
        }
        function q(e) {
            return {
                cityName: e.city_name,
                countryCode: e.country_code,
                countryName: e.country_name,
                timezoneOffset: e.timezone_offset,
            };
        }
        function Q(e) {
            return {
                imageUrl: e.image_url,
                profileUrl: e.profile_url,
                provider: e.provider,
                username: e.username,
            };
        }
        function Y(e) {
            let t;
            return (
                e.square_128
                    ? (t = e.square_128)
                    : e.image_urls && e.image_urls.square_128 && (t = e.image_urls.square_128),
                t ? { square128: t } : {}
            );
        }
        function J(e) {
            return e;
        }
        function K(e, t) {
            return (
                ('participant_added' !== t && 'participant_removed' !== t) ||
                    (e.participant.avatar = Y(e.participant.avatar)),
                e || {}
            );
        }
        function X(e) {
            const t = ['chat', 'post', 'note', 'video', 'pointer'][e.message_style];
            return (
                t ||
                ('attribute_collector' === e.part_type
                    ? 'attributeCollector'
                    : Z(e, 'link') ||
                      (function(e, t) {
                          let n = !0;
                          return (
                              e.blocks.forEach(e => {
                                  e.type !== t && (n = !1);
                              }),
                              n && e.blocks.length > 1
                          );
                      })(e, 'link')
                    ? 'link'
                    : Z(e, 'notificationChannelsCard')
                    ? 'notificationChannels'
                    : Z(e, 'conversationRating')
                    ? 'conversationRating'
                    : void 0)
            );
        }
        function Z(e, t) {
            const n = e.blocks && 1 === e.blocks.length && e.blocks[0];
            return n && n.type === t;
        }
        function ee(e) {
            return { unseen: 'not-seen-yet', seen: 'seen' }[e] || 'not-seen-yet';
        }
        function te(e, t) {
            if (
                (function(e) {
                    return 1 === e.length && 'videoReply' === e[0].type;
                })(e)
            )
                return e;
            if (
                (function(e) {
                    return 1 === e.length && 'videoFile' === e[0].type;
                })(e)
            )
                return (function(e) {
                    return [Object.assign({}, e[0])];
                })(e);
            const n = [];
            return (
                (function(e, t) {
                    if (0 === e.length) return t;
                    const n = [];
                    return (
                        e.map(e => {
                            e.attachments.map(e => n.push(e.url));
                        }),
                        t.filter(e => n.indexOf(e.url) < 0)
                    );
                })(
                    e.filter(e => 'attachmentList' === e.type),
                    t
                ).forEach(e => {
                    !(function(e) {
                        return e.content_type.indexOf('image') >= 0;
                    })(e)
                        ? n.push(
                              (function(e) {
                                  return {
                                      type: 'attachmentList',
                                      attachments: [
                                          {
                                              contentType: e.content_type,
                                              name: e.name,
                                              size: e.size,
                                              url: e.url,
                                          },
                                      ],
                                  };
                              })(e)
                          )
                        : n.push(
                              (function(e) {
                                  return {
                                      height: parseInt(e.height, 10),
                                      type: 'image',
                                      url: e.url,
                                      width: parseInt(e.width, 10),
                                  };
                              })(e)
                          );
                }),
                e.concat(n)
            );
        }
        function ne(e) {
            return { reactionIndex: e.reaction_index, reactionSet: (e.reaction_set || []).map(re) };
        }
        function re(e) {
            return { emoji: e.unicode_emoticon, index: e.index };
        }
        function ie(e) {
            if ('conversationRating' !== X(e)) return {};
            const { remark: t } = e.blocks[0];
            return { chosenRating: e.blocks[0].rating_index, remark: t };
        }
        function se(e) {
            return {
                id: e.id,
                description: e.description,
                name: e.name,
                selector: e.selector,
                sourceUrl: e.source_url,
                trigger: e.trigger,
                urlRegex: e.url_regex,
            };
        }
        function oe(e) {
            return {
                cards: e.cards,
                cardsSuccess: e.cards_success,
                conversations: e.conversations.map(R),
                hasMoreConversations: e.has_more_conversations,
            };
        }
        function ae(e) {
            return e
                ? e.map(e =>
                      g({}, e, {
                          serialized_object: ce(e.ruleset_link_object_type, e.serialized_object),
                      })
                  )
                : [];
        }
        function ce(e, t) {
            switch (e) {
                case 'inbound_trigger':
                    return ue(t);
                case 'messenger_trigger':
                    return {
                        id: (n = t).id,
                        event: n.event,
                        preAction: n.messenger_pre_action,
                        selector: n.selector,
                    };
                default:
                    return t;
            }
            var n;
        }
        function ue(e) {
            return e
                ? {
                      composerDisabled: e.composer_disabled,
                      prompt: e.prompt,
                      rulesetId: e.ruleset_id,
                      suggestions: e.suggestions.map(e =>
                          (function(e) {
                              return { preAction: e.pre_action, text: e.text, uuid: e.uuid };
                          })(e)
                      ),
                      updatedAt: e.updated_at,
                  }
                : null;
        }
        function de(e) {
            const t = Object(h.b)(window);
            t && (e.sdk_webview_platform = t);
        }
        function le() {
            return `${E.api_base}/messenger/web/conversations/transcript`;
        }
        t.b = {
            addConversationRatingRemark: function(e, t, n) {
                const r = `${E.api_base}/messenger/web/conversations/${t}/remark`,
                    i = { remark: n };
                return c.b.post({ url: r, session: e, params: i }).then(() => {});
            },
            buildBanner: x,
            buildComment: V,
            buildComposerSuggestions: ue,
            buildTour: F,
            changeConversationRatingIndex: function(e, t, n) {
                const r = `${E.api_base}/messenger/web/conversations/${t}/rate`,
                    i = { rating_index: n };
                return c.b.post({ url: r, session: e, params: i }).then(() => {});
            },
            completeTour: function(e, t, n) {
                const r = `${E.api_base}/messenger/web/tours/${t}/complete`,
                    i = v(n);
                return c.b.post({ url: r, session: e, params: i });
            },
            conditionsSatisfied: function(e, t, n) {
                const r = `${E.api_base}/messenger/web/conversations/${t}/conditions_satisfied`,
                    i = { condition_id: n };
                return c.b.post({ url: r, session: e, params: i }).then(R);
            },
            createArticleReaction: function(e, t, n, r = !1, i = null) {
                const s = `${E.api_base}/messenger/web/articles/${t}/react`,
                    o = { reaction_index: n, allow_auto_responses: r, article_content_id: i };
                return c.b.post({ url: s, session: e, params: o }).then(() => {});
            },
            createComment: function(e, t, n, r, i, s, o) {
                const a = `${E.api_base}/messenger/web/conversations/${t}/reply`,
                    u = O(r, i, s, n, o);
                return c.b
                    .post({ url: a, session: e, params: u })
                    .then(e => Object.assign({}, V(e), { clientId: n }));
            },
            createConversation: function(
                e,
                {
                    blocks: t,
                    createdAt: n,
                    upload: r,
                    email: i,
                    composerSuggestions: s,
                    selfServeSuggestionsMatch: o,
                }
            ) {
                const a = `${E.api_base}/messenger/web/messages`,
                    u = O(t, n, r, null, i, s, o);
                return c.b.post({ url: a, session: e, params: u }).then(R);
            },
            createEvent: function(e, t, n) {
                const r = `${E.api_base}/messenger/web/events`,
                    i = { event_name: t, metadata: n },
                    s = { event_list: JSON.stringify({ data: [i] }) };
                return c.b.post({ url: r, session: e, params: s });
            },
            createMetrics: function(e, t, n = [], r = [], i = []) {
                const s = `${E.api_base}/messenger/web/metrics`,
                    o = S(t, n, r, i);
                return c.b.post({ url: s, session: e, params: o });
            },
            createMetricsWithBeacon: function(e, t, n = [], r = [], i = []) {
                const s = S(t, n, r, i);
                return c.b.sendBeacon(`${E.api_base}/messenger/web/metrics`, e, s);
            },
            createOrUpdateUser: function(e, t = {}, n, r, i, s, o = !1) {
                (t = m({}, t)), void 0 !== n && (t.anonymous_email = n);
                const a = { source: i, sampling: o };
                void 0 !== r && (a._intercomEncryptedPayload = r);
                const u = `${E.api_base}/messenger/web/ping`;
                return c.b
                    .post({ url: u, session: e, params: a, customAttributes: t, internal: s })
                    .then(e => {
                        const { errors: t } = e;
                        return t
                            ? { errors: t }
                            : (function(e) {
                                  const { user: t } = e;
                                  e.active_tour &&
                                      Object(p.d)(
                                          'Tour attempting to resume from ping',
                                          e.active_tour
                                      );
                                  return {
                                      id: t.id,
                                      activeCompanyId: t.active_company_id || '-1',
                                      activeTour: F(e.active_tour),
                                      anonymousId: t.anonymous_id,
                                      anonymousSession: e.anonymous_session,
                                      app: B(e),
                                      articleConversationId: JSON.stringify(
                                          e.article_conversation_id
                                      ),
                                      banners: k(e.banners),
                                      cdasBreachingLimit: e.cdas_breaching_limit || [],
                                      clientsideMessageConditions: e.client_messages,
                                      clientsideRulesetConditions: ae(e.client_matches),
                                      composerSuggestions: ue(e.composer_suggestions),
                                      countryCode: t.country_code,
                                      hasConversations: !1 !== t.has_conversations,
                                      homeScreenSlots: t.home_screen_slots || [],
                                      identityVerificationReady: e.identity_verification_ready,
                                      identityVerified: e.identity_verified,
                                      installModeConfig: $(e),
                                      lastContactedAt: t.last_contacted_at,
                                      locale: t.locale,
                                      newConversationComposerState: j(e.composer_state),
                                      notificationLinkConversationId:
                                          e.notification_link_conversation_id,
                                      phoneNumber: t.phone_number,
                                      role:
                                          ((n = t.role),
                                          {
                                              contact_role: 'lead',
                                              user_role: 'user',
                                              visitor_role: 'visitor',
                                          }[n]),
                                      unreadConversationIds: (
                                          e.unread_conversation_ids || []
                                      ).map(e => e.toString()),
                                      unreadDismissedConversationIds: (
                                          e.unread_dismissed_conversation_ids || []
                                      ).map(e => e.toString()),
                                      userSuppliedEmail: t.anonymous_email,
                                  };
                                  var n;
                              })(e);
                    });
            },
            createReaction: function(e, t, n) {
                const r = `${E.api_base}/messenger/web/conversations/${t}/react`,
                    i = { reaction_index: n };
                return c.b.post({ url: r, session: e, params: i }).then(() => {});
            },
            createUpload: function(e, t, n) {
                return new Promise((r, i) => {
                    const s = new FormData();
                    s.append('key', e.key),
                        s.append('acl', e.acl),
                        s.append('Content-Type', e.content_type),
                        s.append('AWSAccessKeyId', e.aws_access_key),
                        s.append('policy', e.policy),
                        s.append('signature', e.signature),
                        s.append('success_action_status', e.success_action_status),
                        s.append('file', t);
                    const o = new XMLHttpRequest();
                    o.upload.addEventListener(
                        'progress',
                        function(e) {
                            const { lengthComputable: t, loaded: r, total: i } = e;
                            if (!n || !t) return;
                            const s = parseInt((r / i) * 100);
                            n(s);
                        },
                        !1
                    ),
                        o.addEventListener(
                            'error',
                            function() {
                                i();
                            },
                            !1
                        ),
                        o.addEventListener(
                            'abort',
                            function() {
                                i();
                            },
                            !1
                        ),
                        o.addEventListener(
                            'load',
                            function(t) {
                                201 === t.target.status
                                    ? r({
                                          id: e.id,
                                          publicUrl: e.public_url,
                                          contentType: e.content_type,
                                      })
                                    : i();
                            },
                            !1
                        ),
                        o.open('POST', e.upload_destination, !0),
                        o.send(s);
                });
            },
            createUploadPolicy: function(e, t, n, r) {
                const i = `${E.api_base}/messenger/web/uploads`,
                    s = {
                        upload: JSON.stringify({
                            original_filename: Object(u.a)(t.name),
                            size_in_bytes: t.size,
                            content_type: t.type,
                            width: n,
                            height: r,
                        }),
                    };
                return c.b.post({ url: i, session: e, params: s }).then(J);
            },
            disableInstallMode: function(e) {
                const t = `${E.api_base}/messenger/web/install`;
                return c.b.post({ url: t, session: e });
            },
            dismissBanner: function(e, t) {
                const n = `${E.api_base}/messenger/web/banners/${t}/dismiss`;
                return c.b.post({ url: n, session: e });
            },
            dismissNotifications: function(e, t) {
                const n = `${E.api_base}/messenger/web/conversations/dismiss`,
                    r = { conversation_ids: t };
                return c.b.post({ url: n, session: e, params: r }).then(() => {});
            },
            fetchMessengerSheetData: function(e, t, n, r) {
                const i = `${E.api_base}/messenger/web/sheets/open`,
                    s = { action_id: n, uri: t, values: JSON.stringify(r) };
                return c.b.post({ url: i, session: e, params: s });
            },
            fetchMessengerSheetDataWithToken: function(e, t, n) {
                const r = `${E.api_base}/messenger/web/messenger_card_view/open_sheet`,
                    i = { action_id: t, token: e, values: JSON.stringify(n) };
                return c.b.post({ url: r, params: i });
            },
            fetchTour: function({ session: e, tourId: t, token: n } = {}) {
                if (!e && !n)
                    return (
                        Object(p.d)('A session or a token must be supplied when fetching a tour'),
                        Promise.reject('missing_session_and_token')
                    );
                if (e)
                    return (
                        Object(p.d)('Attempting to fetch tour with session data.'),
                        c.b
                            .post({
                                url: `${E.api_base}/messenger/web/tours/${t}/fetch`,
                                session: e,
                            })
                            .then(F)
                    );
                {
                    Object(p.d)('Attempting to fetch tour for messenger card in fallback state.');
                    const e = { token: n };
                    return c.b
                        .post({
                            url: `${E.api_base}/messenger/web/tours/${t}/fetch_with_token`,
                            params: e,
                        })
                        .then(F);
                }
            },
            fireComposerSuggestion: function(e, { conversationId: t, suggestion: n, clientId: r }) {
                const i = t
                        ? `${E.api_base}/messenger/web/conversations/${t}/reply`
                        : `${E.api_base}/messenger/web/messages`,
                    s = { composer_suggestion: JSON.stringify(n), client_assigned_uuid: r };
                return (
                    t && (s.conversation_id = t),
                    c.b.post({ url: i, session: e, params: s }).then(t ? V : R)
                );
            },
            fireTrigger: function(e, { triggerId: t, clientAssignedUUID: n }) {
                const r = `${E.api_base}/messenger/web/triggers/${t}/fire`,
                    i = { client_assigned_uuid: n };
                return c.b.post({ url: r, session: e, params: i });
            },
            getArticle: function(e, t, n) {
                const r = `${E.api_base}/messenger/web/articles/${t}`,
                    i = (function(e) {
                        return { conversation_id: e };
                    })(n);
                return c.b.post({ url: r, session: e, params: i }).then(N);
            },
            getArticleReaction: function(e, t, n, r) {
                const i = `${E.api_base}/messenger/web/articles/get_reaction`,
                    s = { article_id: t, article_content_id: n };
                c.b
                    .post({ url: i, session: e, params: s })
                    .then(e => {
                        e ? r(null, e) : r();
                    })
                    .catch(e => {
                        r(e);
                    });
            },
            getCardView: function(e) {
                const t = `${E.api_base}/messenger/web/messenger_card_view/`,
                    n = { token: e };
                return c.b.post({ url: t, params: n });
            },
            getConversation: function(e, t, n) {
                const r = `${E.api_base}/messenger/web/conversations/${t}`,
                    i = { self_serve_suggestions_match: n };
                return c.b.post({ url: r, session: e, params: i }).then(R);
            },
            getConversationTranscriptURL: le,
            getConversations: function(
                e,
                { source: t, page: n, perPage: r, selfServeSuggestionsMatch: i }
            ) {
                const s = `${E.api_base}/messenger/web/conversations`,
                    o = { page: n, per_page: r, source: t, self_serve_suggestions_match: i };
                return c.b.post({ url: s, session: e, params: o }).then(C);
            },
            getHomeScreenCards: function(e, { homeScreenSlots: t, selfServeSuggestionsMatch: n }) {
                const r = `${E.api_base}/messenger/web/home_cards`,
                    i = {
                        slot_card_ids: t.map(e => e.messenger_card_id),
                        self_serve_suggestions_match: n,
                    };
                return c.b.post({ url: r, session: e, params: i }).then(oe);
            },
            getMessengerCanvasContentWithToken: function(e, t) {
                const n = `${E.api_base}/messenger/web/messenger_card_view/live_content`,
                    r = { token: e, canvas_id: t };
                return c.b.post({ url: n, params: r }).then(e => Object.assign(e, { id: t }));
            },
            getMessengerCanvasWithContent: function(e, t, n) {
                const r = `${E.api_base}/messenger/web/messenger_cards/content`,
                    i = { canvas_id: t, uri: n };
                return (
                    de(i),
                    c.b
                        .post({ url: r, session: e, params: i })
                        .then(e => Object.assign(e, { id: t }))
                );
            },
            getUnreadConversations: function(e) {
                const t = `${E.api_base}/messenger/web/conversations/unread`;
                return c.b.post({ url: t, session: e }).then(T);
            },
            markConversationAsRead: function(e, t) {
                const n = `${E.api_base}/messenger/web/conversations/${t}/read`;
                return c.b.post({ url: n, session: e }).then(R);
            },
            outboundPreview: function(e, t) {
                const n = `${E.api_base}/messenger/web/custom_bots/${t}/outbound_preview`;
                return c.b.post({ url: n, session: e });
            },
            progressTour: function(e, t, n, r) {
                const i = Object.assign({ step_id: n }, v(r));
                return c.b.sendBeacon(`${E.api_base}/messenger/web/tours/${t}/progress`, e, i);
            },
            quickReply: function(e, t, n, r, i) {
                const s = `${E.api_base}/messenger/web/conversations/${t}/quick_reply`,
                    o = (function(e, t, n) {
                        return {
                            client_assigned_uuid: n,
                            conversation_part: JSON.stringify({ id: e, reply_option: t }),
                        };
                    })(n, r, i);
                return c.b.post({ url: s, session: e, params: o }).then(V);
            },
            recordTourFailure: function(e, t, n, r, i, s) {
                const o = `${E.api_base}/messenger/web/tours/${t}/record_failure`,
                    a = { failed_selector: r, failure_url: i, tour_step_id: n },
                    u = Object.assign(a, v(s));
                return c.b.post({ url: o, session: e, params: u });
            },
            rulesetConditionSatisfied: function(e, t, n, r, i, s, o) {
                const a = `${E.api_base}/messenger/web/rulesets/${t}/match`,
                    u = {
                        user_id: r,
                        company_id: i,
                        ruleset_link_id: n,
                        predicates: JSON.stringify(s),
                    };
                return (
                    o && (u.checkpoint_id = o),
                    c.b.post({ url: a, session: e, params: u }).then(e => {
                        let { composer_suggestions: t, predictive_answers_suggestions: n } = e;
                        return g(
                            {},
                            b(e, ['composer_suggestions', 'predictive_answers_suggestions']),
                            { composerSuggestions: ue(t), answerbotPredictiveContexts: n }
                        );
                    })
                );
            },
            searchGifs: function(e, t) {
                const n = `${E.api_base}/messenger/web/gifs`,
                    r = { query: t };
                return c.b.post({ url: n, session: e, params: r });
            },
            sendBeaconEvent: function(e, t, n) {
                const r = { event_name: t, metadata: n };
                return c.b.sendBeacon(`${E.api_base}/messenger/web/events`, e, {
                    event_list: JSON.stringify({ data: [r] }),
                });
            },
            startConversationFromSuggestion: function(
                e,
                { suggestionUuid: t, clientAssignedUUID: n }
            ) {
                const r = `${E.api_base}/messenger/web/custom_bots/trigger_inbound_conversation`,
                    i = { id: t, client_assigned_uuid: n };
                return c.b.post({ url: r, session: e, params: i }).then(R);
            },
            stopTour: function(e, t, n) {
                const r = `${E.api_base}/messenger/web/tours/${t}/stop`,
                    i = v(n);
                return c.b.post({ url: r, session: e, params: i });
            },
            submitMessengerCardAction: function(e, t, n, r) {
                const i = `${E.api_base}/messenger/web/messenger_cards`,
                    s = { action_id: n, uri: t, values: JSON.stringify(r) };
                return de(s), c.b.post({ url: i, session: e, params: s });
            },
            submitMessengerCardActionWithToken: function(e, t, n) {
                const r = `${E.api_base}/messenger/web/messenger_card_view/submit`,
                    i = { action_id: t, token: e, values: JSON.stringify(n) };
                return c.b.post({ url: r, params: i });
            },
            submitSheet: function(e, t, n) {
                const r = `${E.api_base}/messenger/web/sheets/submit`,
                    i = { uri: t, sheet_values: JSON.stringify(n) };
                return c.b.post({ url: r, session: e, params: i });
            },
            submitSheetWithToken: function(e, t) {
                const n = `${E.api_base}/messenger/web/messenger_card_view/submit_sheet`,
                    r = { token: e, sheet_values: JSON.stringify(t) };
                return c.b.post({ url: n, params: r });
            },
            triggerTransitions: function(e, t, n) {
                const r = `${E.api_base}/messenger/web/operator/trigger`,
                    i = (function(
                        e,
                        { type: t, payload: { composerHasContent: n, executionTime: r } = {} }
                    ) {
                        return {
                            type: t,
                            payload: JSON.stringify({ composer_has_content: n, execution_time: r }),
                            meta: JSON.stringify({ conversation_id: e }),
                        };
                    })(t, n);
                return c.b.post({ url: r, session: e, params: i }).then(R);
            },
            updateConversationForm: function(e, t, n, r, i, s) {
                const o = s
                        ? {
                              identifier: r,
                              value: i,
                              conversation_part_id: n,
                              upfront_email_collection: s,
                          }
                        : { identifier: r, value: i, conversation_part_id: n },
                    a = `${E.api_base}/messenger/web/conversations/${t}/form`,
                    u = { form_params: JSON.stringify(o) };
                return c.b.post({ url: a, session: e, params: u }).then(R);
            },
            updatePhoneNumber: function(e, t) {
                const n = `${E.api_base}/apps/${e.appId}/notification_channels/phone_number`,
                    r = { phone_number: t };
                return c.b.post({ url: n, session: e, params: r });
            },
            visitorAutoMessageConditionSatisfied: function(e, t) {
                const n = `${E.api_base}/messenger/web/messages/${t.id}/match`,
                    r = { predicates: JSON.stringify(t.predicates) };
                return c.b.post({ url: n, session: e, params: r }).then(e => {
                    if (!o()(e)) return R(e);
                });
            },
        };
    },
    20: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return i;
        }),
            n.d(t, 'l', function() {
                return s;
            }),
            n.d(t, 'm', function() {
                return o;
            }),
            n.d(t, 'B', function() {
                return a;
            }),
            n.d(t, 's', function() {
                return c;
            }),
            n.d(t, 'f', function() {
                return u;
            }),
            n.d(t, 'r', function() {
                return d;
            }),
            n.d(t, 'z', function() {
                return l;
            }),
            n.d(t, 'e', function() {
                return p;
            }),
            n.d(t, 'A', function() {
                return h;
            }),
            n.d(t, 'b', function() {
                return f;
            }),
            n.d(t, 'x', function() {
                return g;
            }),
            n.d(t, 'c', function() {
                return _;
            }),
            n.d(t, 'y', function() {
                return b;
            }),
            n.d(t, 'd', function() {
                return m;
            }),
            n.d(t, 'j', function() {
                return E;
            }),
            n.d(t, 'o', function() {
                return O;
            }),
            n.d(t, 'h', function() {
                return S;
            }),
            n.d(t, 'g', function() {
                return v;
            }),
            n.d(t, 'q', function() {
                return y;
            }),
            n.d(t, 'n', function() {
                return C;
            }),
            n.d(t, 'w', function() {
                return T;
            }),
            n.d(t, 'v', function() {
                return I;
            }),
            n.d(t, 't', function() {
                return w;
            }),
            n.d(t, 'u', function() {
                return A;
            }),
            n.d(t, 'p', function() {
                return R;
            }),
            n.d(t, 'i', function() {
                return j;
            }),
            n.d(t, 'k', function() {
                return N;
            });
        var r = n(29);
        const i = { TAB: 9, ENTER: 13, ESC: 27, SPACE: 32 },
            s = e => e.scrollHeight - e.clientHeight - e.scrollTop,
            o = e => e.scrollTop / (e.scrollHeight - e.clientHeight),
            a = (e, t = 0) => {
                e && (e.scrollTop = t);
            },
            c = (e, t = 0) => {
                const { scrollTop: n, scrollHeight: r, clientHeight: i } = e;
                return r - n - i < t + 1;
            },
            u = e => {
                if (!e) return 0;
                const { scrollTop: t, scrollHeight: n, clientHeight: r } = e;
                return n - r - t;
            },
            d = e => {
                const { scrollHeight: t, clientHeight: n } = e;
                return t > n;
            },
            l = e => {
                const { scrollHeight: t, clientHeight: n } = e;
                e.scrollTop = t - n;
            },
            p = e => {
                const { scrollHeight: t, clientHeight: n } = e;
                if (!e.scrollBy) return l(e);
                e.scrollBy({ top: t - n, left: 0, behavior: 'smooth' });
            },
            h = (e, t) => {
                const { bottom: n, top: r, height: i } = e.getBoundingClientRect(),
                    { bottom: s, top: o, height: a } = t.getBoundingClientRect();
                if (!(r < o) && !(n > s)) return;
                let c = e.offsetTop;
                for (; e; ) {
                    const { position: t } = window.getComputedStyle(e);
                    'relative' === t && (c += e.offsetTop - e.scrollTop + e.clientTop),
                        (e = e.offsetParent);
                }
                t.scrollTop = c - Math.trunc(a / 2) + Math.trunc(i / 2);
            },
            f = (e, t) => {
                const n = e.className.split(' ');
                n.some(e => e === t) || (n.push(t), (e.className = n.join(' ').trim()));
            },
            g = (e, t) => {
                e.className = e.className
                    .split(' ')
                    .filter(e => e !== t)
                    .join(' ');
            },
            _ = (e, t, n, r = !1) => {
                null != e &&
                    (e.addEventListener
                        ? e.addEventListener(t, n, r)
                        : e.attachEvent && e.attachEvent(`on${t}`, n));
            },
            b = (e, t, n) => {
                null != e &&
                    (e.removeEventListener
                        ? e.removeEventListener(t, n)
                        : e.detachEvent && e.detachEvent(`on${t}`, n));
            },
            m = e => {
                const t = e.currentTarget,
                    { scrollTop: n, scrollHeight: r, clientHeight: i } = t,
                    { deltaY: s } = e,
                    o = s > 0;
                o && s > r - i - n
                    ? (t.scrollTop = r)
                    : !o && -s > n
                    ? (t.scrollTop = 0)
                    : e.stopPropagation();
            },
            E = e => {
                if (e && 'selectionStart' in e) return e.selectionStart;
            },
            O = (e, t, n) => e.slice(0, n) + t + e.slice(n),
            S = (e, t = -1) => {
                e && (e.focus(), 'setSelectionRange' in e && t >= 0 && e.setSelectionRange(t, t));
            };
        function v(e, t, n) {
            const r = e.document || e.ownerDocument;
            return e => {
                const i = [];
                Array.from(r.querySelectorAll(t)).forEach(e => i.push(e));
                let { target: s } = e;
                for (; s && s !== this; ) {
                    if (i.indexOf(s) > -1) {
                        n.call(s, e);
                        break;
                    }
                    s = s.parentNode;
                }
            };
        }
        const y = e =>
                void 0 !== e.hidden
                    ? !e.hidden
                    : void 0 !== e.mozHidden
                    ? !e.mozHidden
                    : void 0 !== e.msHidden
                    ? !e.msHidden
                    : void 0 === e.webkitHidden || !e.webkitHidden,
            C = () => {
                let e;
                return (
                    void 0 !== document.hidden
                        ? (e = 'visibilitychange')
                        : void 0 !== document.mozHidden
                        ? (e = 'mozvisibilitychange')
                        : void 0 !== document.msHidden
                        ? (e = 'msvisibilitychange')
                        : void 0 !== document.webkitHidden && (e = 'webkitvisibilitychange'),
                    e
                );
            },
            T = (e, t = {}) => {
                const n = document.createElement('form');
                n.setAttribute('target', '_blank'),
                    n.setAttribute('method', 'post'),
                    n.setAttribute('action', e),
                    Object.keys(t).forEach(e => {
                        const r = document.createElement('input');
                        (r.type = 'hidden'), (r.name = e), (r.value = t[e]), n.appendChild(r);
                    }),
                    document.body.appendChild(n),
                    n.submit(),
                    document.body.removeChild(n);
            },
            I = e => t => (t.keyCode === i.ENTER || t.keyCode === i.SPACE) && e(t),
            w = e =>
                e.keyCode === i.TAB &&
                !(-1 !== ['INPUT', 'TEXTAREA', 'BUTTON'].indexOf(e.target.tagName)),
            A = e => {
                if (e) return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
            },
            R = e => e.keyCode === i.ESC,
            j = e =>
                Array.from(
                    e.querySelectorAll(
                        'button, [href], input:not([type="file"]):not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'
                    )
                ).filter(e => !e.closest('[aria-hidden="true"]')),
            N = e => (Object(r.b)(e) ? 'rtl' : 'ltr');
    },
    200: function(e, t, n) {
        'use strict';
        var r = n(0);
        t.a = Object(r.createSelector)([e => e.session], e => !(!e || !e.token));
    },
    202: function(e, t, n) {
        'use strict';
        n.d(t, 'c', function() {
            return i;
        }),
            n.d(t, 'd', function() {
                return o;
            }),
            n.d(t, 'b', function() {
                return a;
            }),
            n.d(t, 'a', function() {
                return c;
            });
        var r = n(50);
        function i(e, t) {
            return (n, i) => {
                const { session: a } = i();
                return (
                    n(s(a, t)),
                    e.createOrUpdateUser(a, null, t, 'updateUserSuppliedEmail').then(i => {
                        n(o(i, t)),
                            i.unreadConversationIds.length > 0 &&
                                n(Object(r.d)(e, 'updateUserSuppliedEmail'));
                    })
                );
            };
        }
        function s(e, t) {
            return { type: 'UPDATE_USER_SUPPLIED_EMAIL_REQUEST', session: e, userSuppliedEmail: t };
        }
        function o(e, t) {
            return { type: 'UPDATE_USER_SUPPLIED_EMAIL_SUCCESS', user: e, userSuppliedEmail: t };
        }
        function a(e, t) {
            return (n, r) => {
                const { session: i } = r();
                return (
                    n({ type: 'UPDATE_PHONE_NUMBER_REQUEST' }),
                    e
                        .updatePhoneNumber(i, t)
                        .then(() => {
                            n(
                                (function(e) {
                                    return { type: 'UPDATE_PHONE_NUMBER_SUCCESS', phoneNumber: e };
                                })(t)
                            );
                        })
                        .catch(e => {
                            let t;
                            e && (t = JSON.parse(e).message),
                                n(
                                    (function(e) {
                                        return { type: 'UPDATE_PHONE_NUMBER_FAILURE', message: e };
                                    })(t)
                                );
                        })
                );
            };
        }
        function c() {
            return { type: 'INPUT_VALUE_CHANGED' };
        }
    },
    203: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return r;
        });
        const r = e => ({ type: 'DISMISS_POINTER_MESSAGE', conversationId: e });
    },
    204: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return c;
        });
        var r = n(213),
            i = n.n(r),
            s = n(58),
            o = n.n(s),
            a = n(0);
        const c = Object(a.createSelector)(
            e => e.inboundSuggestions,
            e => {
                if (!e) return null;
                if (e.previewSuggestions) return e.previewSuggestions;
                return e.allSuggestions && e.allSuggestions.length > 0
                    ? i()(o()(e.allSuggestions, 'updatedAt', 'desc'))
                    : null;
            }
        );
    },
    205: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return r;
        }),
            n.d(t, 'b', function() {
                return i;
            });
        const r = 'html-loaded',
            i = 'sheet-loaded';
    },
    207: function(e, t, n) {
        var r = {
            './failed.mp3': 385,
            './notification.mp3': 386,
            './operator.mp3': 387,
            './submit.mp3': 388,
        };
        function i(e) {
            var t = s(e);
            return n(t);
        }
        function s(e) {
            if (!n.o(r, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw ((t.code = 'MODULE_NOT_FOUND'), t);
            }
            return r[e];
        }
        (i.keys = function() {
            return Object.keys(r);
        }),
            (i.resolve = s),
            (e.exports = i),
            (i.id = 207);
    },
    208: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return i;
        });
        var r = n(13);
        const i = () => !!r.b.get('intercom-snippet__intersection-mode');
    },
    22: function(e, t, n) {
        'use strict';
        function r(e) {
            if (null != e) return new Date(1e3 * e);
        }
        function i(e) {
            return Date.now() - 1e3 * e;
        }
        n.d(t, 'c', function() {
            return r;
        }),
            n.d(t, 'a', function() {
                return i;
            }),
            (t.b = {
                timestampToDate: r,
                now: function() {
                    return (function() {
                        const e = Date.now;
                        return 'function' == typeof e && !('prototype' in e);
                    })()
                        ? Date.now()
                        : new Date().getTime();
                },
                calculateDurationInMs: i,
            });
    },
    229: function(e, t, n) {
        e.exports = n(230);
    },
    230: function(e, t, n) {
        'use strict';
        n.r(t);
        n(231);
        void 0 !== window &&
            void 0 !== window.Object &&
            (window.parent.__INTERCOM_REACT_DEV_TOOLS__ &&
                (window.__REACT_DEVTOOLS_GLOBAL_HOOK__ =
                    window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__),
            n(393));
    },
    26: function(e, t, n) {
        'use strict';
        n.d(t, 'b', function() {
            return o;
        }),
            n.d(t, 'a', function() {
                return a;
            }),
            n.d(t, 'c', function() {
                return c;
            }),
            n.d(t, 'f', function() {
                return u;
            }),
            n.d(t, 'h', function() {
                return d;
            }),
            n.d(t, 'g', function() {
                return l;
            }),
            n.d(t, 'e', function() {
                return p;
            }),
            n.d(t, 'd', function() {
                return h;
            });
        const r = ['https://app.intercom.com', 'https://app.intercom.io'];
        function i(e, t) {
            e.opener && e.opener.postMessage(t, '*');
        }
        function s(e, t = {}) {
            return { boundEventCreator: Object.assign({ type: e }, t) };
        }
        const o = {
                CLICK: {
                    key: 'click',
                    title: 'Clicks',
                    description: 'When people click on a button or link',
                },
                VISIT: {
                    key: 'visit',
                    title: 'Page views',
                    description: 'When people view a page',
                },
            },
            a = {
                CHOOSE_EVENT_TYPE: 'CHOOSE_EVENT_TYPE',
                CONFIRM_URL: 'CONFIRM_URL',
                SELECT_CLICK_ELEMENT: 'SELECT_CLICK_ELEMENT',
            };
        function c(e, t) {
            e.addEventListener('message', e => {
                if (-1 === r.indexOf(e.origin)) return;
                const { boundEventCreator: n } = e.data;
                n && 'open' === n.type && t(n.boundEventCreatorState);
            });
        }
        function u(e) {
            i(e, s('ready'));
        }
        function d(e, t) {
            i(e, s('updateStage', { newStage: t }));
        }
        function l(e, t) {
            i(e, s('updateData', { eventData: t }));
        }
        function p(e, t) {
            i(e, s('newEvent', { newEvent: t }));
        }
        function h(e) {
            i(e, s('closed'));
        }
    },
    27: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return s;
        });
        var r = n(10),
            i = n(41);
        const s = (e, t, n) => (s, d) => {
                const { messengerCards: l } = d(),
                    p = n && l && l[t.uri],
                    h = Object(i.c)(t);
                if (
                    (s(a(h)),
                    p &&
                        o(p.card) &&
                        !h.canvas.content &&
                        (h.canvas = Object.assign({}, h.canvas, p.card.canvas)),
                    h.canvas.content)
                )
                    return void s(c(h, h.canvas.content));
                const { session: f } = d();
                return e
                    .getMessengerCanvasWithContent(f, h.canvas.id, h.uri)
                    .then(e => {
                        s(c(h, e.content));
                    })
                    .catch(e => {
                        s(u(h)),
                            Object(r.a)(
                                `There was a problem retrieving the live card content: ${e}`
                            );
                    });
            },
            o = e => !(!e || !e.canvas),
            a = e => ({ type: 'GET_CARD_CONTENT_REQUEST', card: e }),
            c = (e, t) => ({ type: 'GET_CARD_CONTENT_SUCCESS', card: e, content: t }),
            u = e => ({ type: 'GET_CARD_CONTENT_FAILURE', card: e });
    },
    28: function(e, t, n) {
        'use strict';
        var r = n(11),
            i = n.n(r),
            s = n(62),
            o = n.n(s),
            a = n(18),
            c = n(8),
            u = n(78),
            d = n(1),
            l = n(6),
            p = n(2),
            h = n(46);
        function f(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        class tour_progress_CheckIfTourReadyToProgress {
            constructor(e, t) {
                f(this, 'whenReady', void 0),
                    f(this, 'document', void 0),
                    f(this, 'state', void 0),
                    f(this, 'activeStep', void 0),
                    f(this, 'nextStep', void 0),
                    (this.state = e),
                    (this.whenReady = t),
                    (this.document = window.parent.document),
                    (this.activeStep = Object(a.f)(e)),
                    (this.nextStep = Object(a.l)(e)),
                    this._check();
            }
            _check() {
                return 'click' === this.activeStep.progressionBehavior
                    ? (Object(l.d)('Click to progress behavior detected.'),
                      this._evaluateProgressionByClick())
                    : this.whenReady();
            }
            _evaluateProgressionByClick() {
                let e = 0,
                    t = 0;
                this._pageNeedsRedirection()
                    ? (Object(l.d)(
                          'Step url for the next step is different so the tour will wait 2s for the page to reload'
                      ),
                      (e = 2e3))
                    : Object(l.d)('No page redirection detected.'),
                    this._nextStepIsPointer() &&
                        (Object(l.d)(
                            "The page is going to wait upto 5s for the next step's selector to become visible in page"
                        ),
                        (t = 5e3)),
                    new l.a(this.nextStep.selector, t, e, this.whenReady);
            }
            _pageNeedsRedirection() {
                return this.activeStep.url !== this.nextStep.url;
            }
            _nextStepIsPointer() {
                return !!this.nextStep.selector;
            }
        }
        var g = n(13);
        n.d(t, 'e', function() {
            return b;
        }),
            n.d(t, 'c', function() {
                return O;
            }),
            n.d(t, 'f', function() {
                return S;
            }),
            n.d(t, 'b', function() {
                return v;
            }),
            n.d(t, 'd', function() {
                return C;
            }),
            n.d(t, 'a', function() {
                return I;
            }),
            n.d(t, 'j', function() {
                return w;
            }),
            n.d(t, 'h', function() {
                return A;
            }),
            n.d(t, 'g', function() {
                return R;
            }),
            n.d(t, 'i', function() {
                return j;
            });
        function _(e) {
            return Object(a.g)(e) || Object(a.i)(e) || Object(a.j)(e);
        }
        function b() {
            return async (e, t) => {
                const n = t(),
                    { session: r } = t(),
                    { id: i, progressId: s } = Object(a.c)(n),
                    o = Object(a.l)(n);
                if (o) {
                    if (
                        (Object(l.d)(`Tour with id ${i} is attempting to progress to step ${o}`),
                        !_(n))
                    ) {
                        e({ type: 'PROGRESS_TOUR_REQUEST_STARTED' });
                        try {
                            await p.b.progressTour(r, i, o.id, s);
                        } catch (t) {
                            e({ type: 'TOUR_UPDATE_FAILED' }),
                                Object(l.d)(`Could not update tour due to e=${t}`);
                        }
                    }
                    Object(a.i)(n) && g.b.set('tour_progress_preview', o.id),
                        new tour_progress_CheckIfTourReadyToProgress(n, () => {
                            e(
                                (function(e, t) {
                                    return {
                                        type: 'PROGRESS_TOUR',
                                        activeStepId: e,
                                        progressId: t,
                                    };
                                })(o.id, s)
                            ),
                                e({ type: 'PROGRESS_TOUR_REQUEST_FINISHED' });
                        });
                } else
                    window.parent && window.parent.postMessage('exit_tour_preview', '*'),
                        (function(e) {
                            m('intercom:tourComplete', { tourId: e });
                        })(i),
                        e(
                            (function(e) {
                                return { type: 'COMPLETE_TOUR', progressId: e };
                            })(s)
                        );
            };
        }
        function m(e, t) {
            if (!Object(h.a)()) return;
            const n = new CustomEvent(e, { detail: t });
            window.parent.document.dispatchEvent(n);
        }
        function E(e) {
            m('intercom:tourError', { tourId: e });
        }
        function O() {
            return (e, t) => {
                const n = t(),
                    { id: r, progressId: i } = Object(a.c)(n),
                    { session: s } = t();
                Object(l.d)(`Tour with id ${r} marked as complete`),
                    _(n) ||
                        (e({ type: 'MARK_ACTIVE_TOUR_AS_COMPLETED' }), p.b.completeTour(s, r, i));
            };
        }
        function S() {
            return (e, t) => {
                const n = t(),
                    { id: r, progressId: i } = Object(a.c)(n),
                    s = Object(a.f)(n);
                var o, c, u;
                if (!_(n))
                    return (
                        E(r),
                        p.b.recordTourFailure(
                            n.session,
                            r,
                            s.id,
                            s.selector,
                            null === (o = window) || void 0 === o
                                ? void 0
                                : null === (c = o.parent) || void 0 === c
                                ? void 0
                                : null === (u = c.location) || void 0 === u
                                ? void 0
                                : u.pathname,
                            i
                        )
                    );
            };
        }
        function v() {
            return e => {
                var t, n;
                const r = y(
                    null === (t = window) || void 0 === t
                        ? void 0
                        : null === (n = t.parent) || void 0 === n
                        ? void 0
                        : n.location
                );
                if ((Object(l.d)('Checking if URL has tour attached'), r)) {
                    const t = 'tour_triggered_from_url';
                    let n = JSON.parse(g.b.get(t));
                    (n = n || []),
                        n.indexOf(r) > -1
                            ? Object(l.d)(`Tour with id ${r} has already been triggered`)
                            : (Object(l.d)(`Tour id ${r} attached in the url`),
                              e(C(r)),
                              n.push(r),
                              g.b.set(t, JSON.stringify(n)));
                } else Object(l.d)('No attached tour found in the URL');
            };
        }
        const y = e => {
            if (!e) return;
            let t = Object(u.a)(e).product_tour_id;
            if (!t) {
                const n = e.toString();
                if (!n) return;
                const r = n.match(/product_tour_id=(\d+)/i);
                r && (t = r[1]);
            }
            return t;
        };
        function C(e) {
            return async (t, n) => {
                const r = Object(a.c)(n()),
                    { session: i } = n();
                if (r)
                    Object(l.d)(
                        `Active tour with id ${r.id} already found so tour id ${e} won't be fetched`
                    );
                else {
                    Object(l.d)(`Will attempt to fetch tour with id ${e}`);
                    try {
                        t(w(await p.b.fetchTour({ session: i, tourId: e })));
                    } catch (t) {
                        e && E(e), Object(l.d)(`Could not fetch or start tour due to e=${t}`);
                    }
                }
            };
        }
        function T(e, t) {
            return { type: 'FETCH_TOUR_SUCCESS', tour: e, isPreviewingTour: t };
        }
        function I(e) {
            return { type: 'CHANGE_VIDEO_MUTED', muted: e };
        }
        function w(e) {
            return (t, n) => {
                const { user: r } = n(),
                    s = Object(a.c)(n());
                if (!i()(s))
                    return (
                        Object(l.d)('There is already an active tour', s),
                        void Object(l.d)("The tour won't attempt to start", e)
                    );
                const u = (function(e) {
                    if (!e.steps) return;
                    const { activeStepId: t, steps: n } = e,
                        r = n.findIndex(e => parseInt(e.id, 10) === parseInt(t, 10)),
                        i = n.slice(r).find(e => !o()(e.selector));
                    return i ? i.selector : void 0;
                })(e);
                u
                    ? (Object(l.d)(
                          'Checking if selector of the first active pointer step is visible on the page',
                          e
                      ),
                      new l.a(u, null, 0, n => {
                          n
                              ? (Object(l.d)('Node is visible. Tour is attempting to start', e),
                                t(T(e, !1)),
                                t(Object(c.a)()),
                                Object(d.h)(r, 'received', 'tour', 'messenger', null, {
                                    tour_id: e.id,
                                }))
                              : (Object(l.d)('Node is not visible. Tour will not start', e),
                                (function(e, t) {
                                    Object(h.a)() &&
                                        (Object(d.c)('tour_failed_css_evaluation', { tour_id: e }),
                                        Object(d.b)(`tour_failed_css_evaluation tour_id=${e}`)),
                                        Object(d.h)(
                                            t,
                                            'received_but_failed_css_evaluation',
                                            'tour',
                                            'messenger',
                                            null,
                                            { tour_id: e }
                                        );
                                })(e.id, r),
                                E(e.id));
                      }))
                    : (Object(l.d)('Tour is attempting to start', e),
                      t(T(e, !1)),
                      t(Object(c.a)()),
                      Object(d.h)(r, 'received', 'tour', 'messenger', null, { tour_id: e.id }));
            };
        }
        function A(e) {
            return t => {
                t(T(e, !0)), t(Object(c.a)());
            };
        }
        function R(e) {
            return async (t, n) => {
                const { session: r } = n();
                try {
                    var i, s;
                    const n = await p.b.fetchTour({ session: r, tourId: e }),
                        o = window.parent,
                        a = Object(u.b)(n.url);
                    n.url &&
                    !Object(l.b)(
                        a,
                        null === (i = window) || void 0 === i
                            ? void 0
                            : null === (s = i.parent) || void 0 === s
                            ? void 0
                            : s.location
                    )
                        ? o.location.assign(n.url)
                        : (t(T(n, !1)), t(Object(c.a)()));
                } catch (t) {
                    E(e), Object(l.d)(`Could not fetch or start tour due to e=${t}`);
                }
            };
        }
        function j() {
            return (e, t) => {
                const n = t();
                if (_(n)) e(N(''));
                else {
                    const { session: r } = t(),
                        { id: i, progressId: s } = Object(a.c)(n);
                    e(N(s)), p.b.stopTour(r, i, s);
                }
            };
        }
        function N(e) {
            return { type: 'STOP_TOUR', progressId: e };
        }
    },
    29: function(e, t, n) {
        'use strict';
        n.d(t, 'c', function() {
            return a;
        }),
            n.d(t, 'd', function() {
                return p;
            }),
            n.d(t, 'a', function() {
                return h;
            }),
            n.d(t, 'e', function() {
                return f;
            }),
            n.d(t, 'b', function() {
                return g;
            });
        var r = n(1),
            i = n(10),
            s = n(107);
        const o = [
                'ar',
                'bg',
                'bs',
                'ca',
                'cs',
                'da',
                'de',
                'de-form',
                'el',
                'en',
                'es',
                'et',
                'fi',
                'fr',
                'he',
                'hr',
                'hu',
                'id',
                'it',
                'ja',
                'ko',
                'lt',
                'lv',
                'mn',
                'nb',
                'nl',
                'pl',
                'pt',
                'pt-BR',
                'ro',
                'ru',
                'sl',
                'sr',
                'sv',
                'tr',
                'vi',
                'zh-CN',
                'zh-TW',
            ],
            a = ['ar', 'he'],
            c = {};
        c.en = n(199);
        let u = c,
            d = 'en';
        const l = (e, t) => e && e.replace(/{([\s\S]+?)}/g, (e, n) => t[n]),
            p = async e => {
                if (-1 === o.indexOf(e)) return Object(i.b)(`Unsupported locale: ${e}`);
                if (!c[e]) {
                    const t = await Object(s.a)({ promise: () => n(355)(`./${e}.json`) });
                    c[e] = t;
                }
                d = e;
            },
            h = () => d,
            f = (e, t) => {
                const n = u[d];
                if (!n) return Object(r.b)(`Unknown locale '${d}'`), '';
                const i = n[e];
                if (!i)
                    return Object(r.b)(`Unknown key '${e}' in locale '${d}'`), l(u.en[e], t) || '';
                try {
                    return l(i, t);
                } catch (t) {
                    return Object(r.b)(`Interpolation failed for key '${e}' in locale '${d}'`), '';
                }
            },
            g = e => -1 !== a.indexOf(e);
    },
    3: function(e, t, n) {
        'use strict';
        var r = n(7);
        var i = function(e, t, n, r, i, s) {
            const o = new XMLHttpRequest();
            (o.onerror = () => s()),
                (o.onabort = () => s()),
                (o.onload = () => {
                    const { readyState: e, status: t, response: n } = o;
                    4 === e && (t >= 200 && t < 300 ? i(n) : s(n));
                }),
                o.open(t, e, !0),
                (o.withCredentials = !0),
                Object.keys(n).forEach(e => {
                    o.setRequestHeader(e, n[e]);
                }),
                o.send(r);
        };
        const s = r.a.hasXhr2Support();
        var o = (e, t, n) =>
            new Promise((r, o) => {
                if (!s) throw new Error('Browser does not support XMLHttpRequest.');
                i(e, 'POST', t, n, r, o);
            });
        function a(e) {
            return Math.floor(4294967296 * (1 + e()))
                .toString(16)
                .substring(1);
        }
        const c = e =>
            !!(e && e.analytics && e.analytics.Integrations && e.analytics.Integrations.Intercom);
        var u = n(79);
        n.d(t, 'a', function() {
            return d;
        });
        function d(e, t, n, i, s, o, d) {
            var p, h, f, g, _, b;
            (i = Object(u.b)(
                i ||
                    (null === (p = window) || void 0 === p
                        ? void 0
                        : null === (h = p.parent) || void 0 === h
                        ? void 0
                        : null === (f = h.location) || void 0 === f
                        ? void 0
                        : f.href)
            )),
                (o = Object(u.b)(
                    o ||
                        (null === (g = window) || void 0 === g
                            ? void 0
                            : null === (_ = g.parent) || void 0 === _
                            ? void 0
                            : null === (b = _.document) || void 0 === b
                            ? void 0
                            : b.referrer)
                )),
                r.a.isNativeMobile() && (i = void 0),
                (s =
                    s ||
                    (function(e = Math.random) {
                        return a(e) + a(e);
                    })());
            const {
                    appId: m,
                    anonymousSession: E,
                    sessionId: O,
                    hostUserAgent: S,
                    activeCompanyId: v,
                } = e,
                y = Object.assign(
                    {
                        app_id: m,
                        v: 3,
                        g: '4743a7c12ffe8f354f11128809ba6d0a34fd97cd',
                        s: O,
                        i: c(window.parent) ? 's' : '',
                        r: o,
                        platform: r.a.isMobileBrowser() ? 'mobile_web' : 'web',
                        'Idempotency-Key': s,
                        user_data: l(e, n),
                        internal: d ? JSON.stringify(d) : '',
                        page_title:
                            null === (C = window) || void 0 === C
                                ? void 0
                                : null === (T = C.parent) || void 0 === T
                                ? void 0
                                : null === (I = T.document) || void 0 === I
                                ? void 0
                                : I.title,
                        user_active_company_id: v,
                    },
                    t,
                    { h: window.parent.document.hidden }
                );
            var C, T, I;
            return (
                void 0 !== i && (y.referer = i),
                void 0 !== E && (y.anonymous_session = E),
                void 0 !== S && (y.host_user_agent = S),
                y
            );
        }
        function l(e, t) {
            const { userId: n, email: r, userHash: i, anonymousId: s } = e,
                o = Object.assign({ email: r, user_id: n, user_hash: i, anonymous_id: s }, t);
            return JSON.stringify(o);
        }
        function p(e) {
            const t = [];
            return (
                Object.keys(e).forEach(n => {
                    const r = e[n];
                    (n = encodeURIComponent(n)),
                        Array.isArray(r)
                            ? r.forEach(e => t.push(`${n}[]=${encodeURIComponent(e)}`))
                            : t.push(`${n}=${encodeURIComponent(r)}`);
                }),
                t.join('&')
            );
        }
        function h(e) {
            try {
                return JSON.parse(e);
            } catch (t) {
                return e;
            }
        }
        t.b = {
            buildBody: d,
            post: function({
                url: e,
                session: t = {},
                params: n = {},
                customAttributes: r = null,
                currentUrl: i = null,
                idempotencyKey: s = null,
                referrer: a = null,
                internal: c = null,
            }) {
                if (!t) return Promise.reject('http_post_session_empty');
                const u = d(t, n, r, i, s, a, c);
                return o(e, { 'Content-Type': 'application/x-www-form-urlencoded' }, p(u)).then(h);
            },
            sendBeacon: function(e, t, n, r, i, s, a, c) {
                var u, l, f;
                if (!t) return Promise.reject('http_post_session_empty');
                const g = d(t, n, r, i, s, a, c);
                if (
                    null === (u = window) || void 0 === u
                        ? void 0
                        : null === (l = u.parent) || void 0 === l
                        ? void 0
                        : null === (f = l.navigator) || void 0 === f
                        ? void 0
                        : f.sendBeacon
                ) {
                    const t = { type: 'application/x-www-form-urlencoded' };
                    return window.parent.navigator.sendBeacon(e, new Blob([p(g)], t))
                        ? Promise.resolve()
                        : Promise.reject();
                }
                return o(e, { 'Content-Type': 'application/x-www-form-urlencoded' }, p(g)).then(h);
            },
        };
    },
    32: function(e, t, n) {
        'use strict';
        t.a = {
            read(e, t) {
                t = t || parent.document.cookie;
                const n =
                        '(?:(?:^|[^]*;)\\s*' +
                        encodeURIComponent(e).replace(/[\-\.\+\*]/g, '\\$&') +
                        '\\s*\\=\\s*([^;]*).*$)|^.*$',
                    r = t.match(new RegExp(n));
                if (null !== r && void 0 !== r[1]) return decodeURIComponent(r[1]);
            },
            write(e, t, n = {}) {
                const { domain: r, path: i, expires: s, secure: o, sameSite: a } = n;
                let c = `${e}=${t}`;
                return (
                    r && (c += `; domain=${r}`),
                    i && (c += `; path=${i}`),
                    s && (c += `; expires=${s.toUTCString()}`),
                    a && (c += `; samesite=${a}`),
                    o && (c += '; secure'),
                    (parent.document.cookie = c),
                    c
                );
            },
            clear(e, t = {}) {
                const { domain: n, path: r } = t,
                    i = new Date(0);
                return this.write(e, '', { domain: n, path: r, expires: i });
            },
        };
    },
    33: function(e, t, n) {
        'use strict';
        var r = n(29),
            i = n(59),
            s = n.n(i),
            o = n(112);
        n.d(t, 'g', function() {
            return d;
        }),
            n.d(t, 'f', function() {
                return l;
            }),
            n.d(t, 'd', function() {
                return p;
            }),
            n.d(t, 'e', function() {
                return h;
            }),
            n.d(t, 'c', function() {
                return f;
            }),
            n.d(t, 'a', function() {
                return g;
            }),
            n.d(t, 'b', function() {
                return _;
            });
        const a = ['image', 'attachmentList', 'video', 'videoReply', 'videoFile', 'messengerCard'],
            c = ['image', 'video', 'videoReply', 'videoFile', 'notificationChannelsCard'],
            u = [
                { user: 'sent_an_image', admin: 'sent_you_an_image' },
                { user: 'sent_an_attachment', admin: 'sent_you_an_attachment' },
                { user: 'sent_a_video', admin: 'sent_you_a_video' },
                { user: 'sent_a_video_reply', admin: 'sent_you_a_video_reply' },
                { user: 'sent_a_video', admin: 'sent_you_a_video' },
                { user: 'sent_an_app', admin: 'sent_you_an_app' },
            ],
            d = e => e && e.type && 'videoFile' === e.type,
            l = e => c.indexOf(e.type) > -1,
            p = e => e.text || e.content,
            h = e => {
                const t = e[e.length - 1],
                    n = t.body,
                    i = t.author;
                let s,
                    o = t.body.some(l);
                v(n[0]) && (s = E(n));
                const a = m(n),
                    c = S(n, i);
                return (
                    (s = 0 === a.length && c ? c : a),
                    'quick_reply' === t.partType
                        ? h(e.slice(0, e.length - 1))
                        : ((function(e) {
                              return 'attribute_collector' === e.partType;
                          })(t) &&
                              ((s = Object(r.e)('operator_asked_for_attribute', {
                                  attribute: b(t),
                              })),
                              (o = !0)),
                          { author: i, summaryText: s, isMetadata: o })
                );
            },
            f = e => {
                const t = Object(o.a)(e);
                return y(t).map(e => ({ type: 'paragraph', text: e }));
            },
            g = (e, t, n) => [
                { type: 'attachmentList', attachments: [{ contentType: t, name: e, size: n }] },
            ],
            _ = (e, t, n, r, i) => [
                { type: 'image', url: e, width: t, height: n, attribution: r, title: i },
            ],
            b = e => e.form.attributes[0].identifier.toLowerCase().replace('.', ' '),
            m = e => {
                const t = e
                    .filter(e => 'button' !== e.type && !v(e))
                    .map(e => O(e))
                    .filter(e => !!e)
                    .join(' ');
                return s()(t.replace(/<br>/g, ' '));
            },
            E = e => {
                const t = e.filter(e => v(e))[0];
                if (t && t.title) return s()(t.title);
            },
            O = e => {
                switch (e.type) {
                    case 'videoFile':
                    case 'messengerCard':
                        return '';
                    case 'orderedList':
                        return e.items.map((e, t) => `${t + 1}. ${e}`).join(', ');
                    case 'unorderedList':
                        return e.items.join(', ');
                    default:
                        return e.text || e.content;
                }
            },
            S = (e, t) => {
                const n = (e => e.filter(e => a.indexOf(e.type) > -1)[0])(e);
                if (!n) return;
                const i = a.indexOf(n.type),
                    s = u[i];
                return t.isAdmin ? Object(r.e)(s.admin) : Object(r.e)(s.user);
            },
            v = e => e && e.type && 'link' === e.type,
            y = e => {
                const t = e.split('\n\n');
                for (let e = 0; e < t.length; e++) t[e] = t[e].replace(/\n/g, '<br>');
                return t.filter(e => e);
            };
    },
    35: function(e, t, n) {
        'use strict';
        var r = n(0),
            i = n(5),
            s = n(48),
            o = n(15),
            a = n(86);
        t.a = Object(r.createSelector)(s.a, e =>
            e.filter(e => {
                return (
                    !Object(i.m)(e) &&
                    !e.read &&
                    !e.dismissed &&
                    !Object(a.a)(Object(o.a)(e.parts).partType) &&
                    !e.suppress &&
                    ((t = e),
                    'snippet' === Object(o.a)(t.parts).notificationType || t.forceSnippet) &&
                    !Object(i.n)(e)
                );
                var t;
            })
        );
    },
    355: function(e, t, n) {
        var r = {
            './ar.json': [394, 10],
            './bg.json': [395, 11],
            './bs.json': [396, 12],
            './ca.json': [397, 13],
            './cs.json': [398, 14],
            './da.json': [399, 15],
            './de-form.json': [400, 16],
            './de.json': [401, 17],
            './el.json': [402, 18],
            './en.json': [199],
            './es.json': [403, 19],
            './et.json': [404, 20],
            './fi.json': [405, 21],
            './fr.json': [406, 22],
            './he.json': [407, 23],
            './hr.json': [408, 24],
            './hu.json': [409, 25],
            './id.json': [410, 26],
            './it.json': [411, 27],
            './ja.json': [412, 28],
            './ko.json': [413, 29],
            './lt.json': [414, 30],
            './lv.json': [415, 31],
            './mn.json': [416, 32],
            './nb.json': [417, 33],
            './nl.json': [418, 34],
            './package.json': [419, 35],
            './pl.json': [420, 36],
            './pt-BR.json': [421, 37],
            './pt.json': [422, 38],
            './ro.json': [423, 39],
            './ru.json': [424, 40],
            './sl.json': [425, 41],
            './sr.json': [426, 42],
            './sv.json': [427, 43],
            './tr.json': [428, 44],
            './vi.json': [429, 45],
            './zh-CN.json': [430, 46],
            './zh-TW.json': [431, 47],
        };
        function i(e) {
            if (!n.o(r, e))
                return Promise.resolve().then(function() {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw ((t.code = 'MODULE_NOT_FOUND'), t);
                });
            var t = r[e],
                i = t[0];
            return Promise.all(t.slice(1).map(n.e)).then(function() {
                return n.t(i, 3);
            });
        }
        (i.keys = function() {
            return Object.keys(r);
        }),
            (i.id = 355),
            (e.exports = i);
    },
    36: function(e, t, n) {
        'use strict';
        n.d(t, 'c', function() {
            return u;
        }),
            n.d(t, 'a', function() {
                return d;
            }),
            n.d(t, 'e', function() {
                return l;
            }),
            n.d(t, 'd', function() {
                return p;
            }),
            n.d(t, 'b', function() {
                return h;
            });
        var r = n(23),
            i = n.n(r),
            s = n(4),
            o = n(16),
            a = n(33);
        const c = i()('intercom.actions.inbound-triggers');
        function u(e, t, n = !1) {
            return async (r, i) => {
                try {
                    const c = i(),
                        { session: u, newConversation: d } = c,
                        l = Object(o.b)(),
                        p = {
                            clientId: l,
                            body: Object(a.c)(t.text),
                            createdAt: new Date(),
                            composerSuggestionItem: t,
                        },
                        h = d.composerState.visible;
                    r(
                        (function(e) {
                            switch (e.preAction) {
                                case 'close-composer':
                                    return Object(s.q)({ visible: !1 });
                                default:
                                    throw `Invalid PRE ACTION type for suggestion=${e.preAction}`;
                            }
                        })(t)
                    ),
                        r(Object(s.h)(p, n));
                    const f = await e.startConversationFromSuggestion(u, {
                        suggestionUuid: t.uuid,
                        clientAssignedUUID: l,
                    });
                    r(Object(s.i)(f, null, null, Date.now(), 'custom_bot')),
                        h && r(Object(s.q)({ visible: !0 }));
                } catch (e) {
                    r(Object(s.g)(null)),
                        c(`Couldnt start conversation from suggestion due to e=${e}`);
                }
            };
        }
        function d(e) {
            return { type: 'ADD_INBOUND_SUGGESTIONS', composerSuggestions: e };
        }
        function l(e) {
            return { type: 'UPDATE_SERVER_SIDE_INBOUND_SUGGESTIONS', composerSuggestions: e };
        }
        function p(e) {
            return { type: 'UPDATE_PREVIEW_INBOUND_SUGGESTIONS', composerSuggestions: e };
        }
        function h(e) {
            return { type: 'REMOVE_INBOUND_SUGGESTIONS', rulesetId: e };
        }
    },
    38: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return i;
        });
        var r = n(0);
        const i = Object(r.createSelector)(
            [e => e.app.conversationId, e => e.conversations.byId, e => e.newConversation],
            (e, t, n) => {
                const r = null === e ? n : t[e];
                if (r) return r.composerState || (r.composerState = n.composerState), r;
            }
        );
    },
    385: function(e, t, n) {
        e.exports = n.p + 'audio/failed.4da3027c.mp3';
    },
    386: function(e, t, n) {
        e.exports = n.p + 'audio/notification.20576730.mp3';
    },
    387: function(e, t, n) {
        e.exports = n.p + 'audio/operator.2b750c4a.mp3';
    },
    388: function(e, t, n) {
        e.exports = n.p + 'audio/submit.3abafccd.mp3';
    },
    393: function(e, t, n) {
        'use strict';
        n.r(t);
        var r = n(167),
            i = n(9),
            s = n(84),
            o = n(32),
            a = n(19),
            c = n(85),
            u = n(12),
            d = n(36);
        var l = n(28),
            p = n(145),
            h = n(2),
            f = n(0);
        const g = e => e.operator,
            _ = Object(f.createSelector)(g, e => e.lastComposerEvent),
            b = Object(f.createSelector)(g, e => e.clientsideMessageConditions);
        class Predicate {
            constructor(e) {
                (this.chain = e), (this.matched = !1);
            }
            trigger() {
                this.triggering ||
                    ((this.triggering = !0),
                    (this.matched = !0),
                    this.chain.evaluate(),
                    (this.triggering = !1));
            }
            evaluate() {
                return this.matched;
            }
            cancel() {}
        }
        class composite_predicate_CompositePredicate extends Predicate {
            constructor(e, t) {
                super(e), (this.predicates = t);
            }
            cancel() {
                this.predicates.forEach(e => e.cancel());
            }
        }
        class and_predicate_AndPredicate extends composite_predicate_CompositePredicate {
            evaluate() {
                return this.predicates.every(e => e.evaluate());
            }
        }
        class duration_predicate_DurationPredicate extends Predicate {
            constructor(e, t) {
                super(e), (this.interval = t), (this.timer = setTimeout(() => this.trigger(), t));
            }
            cancel() {
                clearTimeout(this.timer);
            }
        }
        class duration_delta_predicate_DurationDeltaPredicate extends Predicate {
            constructor(e, t, n) {
                super(e),
                    (this.attribute = n),
                    (this.interval = t),
                    setTimeout(() => this._createDeltaTimer(), 0);
            }
            _createDeltaTimer() {
                this.timer = setTimeout(() => {
                    this._evaluateDeltaPredicate() ? this.trigger() : this._createDeltaTimer();
                }, this._getInterval());
            }
            _getInterval() {
                const e = this.getTimestamp();
                if (!e) return this.interval;
                const t = Date.now() - e;
                return Math.max(100, this.interval - t);
            }
            _evaluateDeltaPredicate() {
                const e = this.getTimestamp();
                return !!e && Date.now() - e > this.interval;
            }
            getTimestamp() {
                return this.chain.getAttribute(this.attribute);
            }
            cancel() {
                clearTimeout(this.timer);
            }
        }
        class periodic_predicate_PeriodicPredicate extends Predicate {
            constructor(e, t, n) {
                super(e),
                    (this.missing = n || !1),
                    (this.interval = t),
                    (this.intervalTimer = setInterval(() => {
                        this._check();
                    }, t));
            }
            _check() {
                this.check() ? this.trigger() : (this.matched = !1);
            }
            evaluate() {
                return this._check(), this.matched;
            }
            cancel() {
                clearInterval(this.intervalTimer);
            }
        }
        class duration_since_predicate_DurationSincePredicate extends periodic_predicate_PeriodicPredicate {
            constructor(e, t, n, r) {
                super(e, t, r), (this.attribute = n);
            }
            check() {
                const e = this.chain.getAttribute(this.attribute);
                return e ? Date.now() - e >= this.interval : this.missing;
            }
        }
        class equals_predicate_EqualsPredicate extends periodic_predicate_PeriodicPredicate {
            constructor(e, t, n, r, i) {
                super(e, t), (this.attribute = n), (this.value = r), (this.other = i);
            }
            check() {
                return this.other
                    ? this.chain.getAttribute(this.other) ===
                          this.chain.getAttribute(this.attribute)
                    : this.value === this.chain.getAttribute(this.attribute);
            }
        }
        class or_predicate_OrPredicate extends composite_predicate_CompositePredicate {
            evaluate() {
                return this.predicates.some(e => e.evaluate());
            }
        }
        var m = n(92),
            E = n.n(m),
            O = n(20);
        class css_selector_predicate_CssSelectorPredicate extends Predicate {
            constructor(e, t) {
                var n, r, i;
                super(e),
                    (i = () => {
                        const e = this.document.querySelector(this.selector);
                        this.isNodeVisible(e) ? this.trigger() : (this.matched = !1);
                    }),
                    (r = '_check') in (n = this)
                        ? Object.defineProperty(n, r, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (n[r] = i),
                    (this.observer = new MutationObserver(E()(this._check, 200))),
                    (this.selector = t),
                    (this.document = window.parent.document),
                    this._initObserver();
            }
            _initObserver() {
                this.observer.observe(this.document.body, {
                    attributes: !0,
                    childList: !0,
                    subtree: !0,
                });
            }
            evaluate() {
                return this._check(), this.matched;
            }
            isNodeVisible(e) {
                return e && Object(O.u)(e);
            }
            cancel() {
                this.observer.disconnect();
            }
        }
        class string_predicate_StringPredicate extends Predicate {
            constructor(e, t, n, r) {
                super(e),
                    (this.targetString = t),
                    (this.comparison = n),
                    (this.candidateString = r);
            }
            evaluate() {
                return (this.matched = this._check()), this.matched;
            }
            _check() {
                switch (this.comparison) {
                    case 'eq':
                        return this.candidateString === this.targetString;
                    case 'ne':
                        return this.candidateString !== this.targetString;
                    case 'starts_with':
                        return this.targetString.startsWith(this.candidateString);
                    case 'ends_with':
                        return this.targetString.endsWith(this.candidateString);
                    case 'contains':
                        return -1 !== this.targetString.indexOf(this.candidateString);
                    case 'not_contains':
                        return !(-1 !== this.targetString.indexOf(this.candidateString));
                    case 'known':
                        return !!this.targetString && '' !== this.targetString;
                    default:
                        return !1;
                }
            }
        }
        class url_predicate_UrlPredicate extends string_predicate_StringPredicate {
            constructor(e, t, n) {
                var r, i, s;
                super(e),
                    (s = () => this.window.location.href.toLowerCase()),
                    (i = '_getURL') in (r = this)
                        ? Object.defineProperty(r, i, {
                              value: s,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (r[i] = s),
                    (this.window = window.parent),
                    (this.targetString = this._getURL()),
                    (this.comparison = t),
                    (this.candidateString = n.toLowerCase()),
                    setTimeout(() => this.evaluate(), 0),
                    (this.interval = setInterval(() => this.evaluate(), 1e3));
            }
            evaluate() {
                return (
                    (this.targetString = this._getURL()),
                    this._check() ? this.trigger() : (this.matched = !1),
                    this.matched
                );
            }
            _check() {
                switch (this.comparison) {
                    case 'regex':
                        return new RegExp(this.candidateString).test(this.targetString);
                    default:
                        return super._check();
                }
            }
            cancel() {
                clearInterval(this.interval);
            }
        }
        var S = n(7);
        class predicate_chain_PredicateChain {
            constructor(e, t) {
                (this.condition = e),
                    (this.callback = t),
                    (this.root = new and_predicate_AndPredicate(
                        this,
                        this.processSubpredicates(e.predicates)
                    ));
            }
            evaluate() {
                if (!this.evaluating) {
                    this.evaluating = !0;
                    const e = this.root.evaluate();
                    return (
                        e && (this.cancel(), setTimeout(() => this.callback(this.condition), 0)),
                        (this.evaluating = !1),
                        e
                    );
                }
            }
            cancel() {
                this.root.cancel();
            }
            setContext(e) {
                this.context = e;
            }
            getAttribute(e) {
                if (this.context) return this.context[e];
            }
            processPredicate(e) {
                switch (e.type) {
                    case 'or':
                        return new or_predicate_OrPredicate(
                            this,
                            this.processSubpredicates(e.predicates)
                        );
                    case 'and':
                        return new and_predicate_AndPredicate(
                            this,
                            this.processSubpredicates(e.predicates)
                        );
                    case 'eq':
                        return new equals_predicate_EqualsPredicate(
                            this,
                            this.parseInterval(e.interval),
                            e.attribute,
                            e.value,
                            e.other
                        );
                    case 'string':
                        if ('client_attributes.last_visited_url' === e.attribute)
                            return new url_predicate_UrlPredicate(this, e.comparison, e.value);
                    case 'duration_integer':
                        return new duration_predicate_DurationPredicate(
                            this,
                            1e3 * this.parseInterval(e.value)
                        );
                    case 'duration_integer_ms':
                        return new duration_predicate_DurationPredicate(
                            this,
                            this.parseInterval(e.value)
                        );
                    case 'duration_delta':
                        return new duration_delta_predicate_DurationDeltaPredicate(
                            this,
                            this.parseInterval(e.value),
                            e.attribute
                        );
                    case 'duration_since':
                        return new duration_since_predicate_DurationSincePredicate(
                            this,
                            this.parseInterval(e.value),
                            e.attribute,
                            e.missing
                        );
                    case 'css_selector':
                        if (!Object(S.g)())
                            return new css_selector_predicate_CssSelectorPredicate(this, e.value);
                }
            }
            parseInterval(e) {
                return parseInt(e, 10);
            }
            processSubpredicates(e) {
                return e ? e.map(e => this.processPredicate(e)).filter(Boolean) : [];
            }
        }
        class predicates_matcher_PredicatesMatcher {
            constructor(e) {
                (this.callback = e), (this.isStarted = !1), (this.context = {});
            }
            start(e) {
                this.isStarted && this.shutdown(),
                    (this.conditions = e),
                    this._setupPredicates(e),
                    (this.isStarted = !0);
            }
            shutdown() {
                this.predicateChains && this.predicateChains.forEach(e => e.cancel()),
                    (this.isStarted = !1);
            }
            setContext(e) {
                this.predicateChains && this.predicateChains.forEach(t => t.setContext(e));
            }
            _setupPredicates(e) {
                this.predicateChains = e.map(
                    e => new predicate_chain_PredicateChain(e, this.callback)
                );
            }
        }
        var v = n(4),
            y = n(27),
            C = n(5);
        const T = Object(f.createStructuredSelector)({ clientsideMessageConditions: b });
        var I = function(e) {
                const t = new predicates_matcher_PredicatesMatcher(t => {
                    var n;
                    e.dispatch(
                        ((n = t),
                        (e, t) => {
                            const { session: r } = t();
                            return h.b.visitorAutoMessageConditionSatisfied(r, n).then(
                                t => {
                                    t &&
                                        (Object(C.s)(t).forEach(t => e(Object(y.a)(h.b, t, !1))),
                                        e({
                                            type:
                                                'VISITOR_AUTO_MESSAGE_CONDITION_SATISFIED_SUCCESS',
                                        }),
                                        e(Object(v.m)(t, !1, Date.now())));
                                },
                                () => e({ type: 'VISITOR_AUTO_MESSAGE_CONDITION_SATISFIED_ERROR' })
                            );
                        })
                    );
                });
                return () => {
                    const { clientsideMessageConditions: n } = T(e.getState()),
                        { conditions: r } = t;
                    ((e, t) => {
                        if (!t) return !1;
                        if (!e && t) return !0;
                        if (e.length !== t.length) return !0;
                        const n = e.map(e => e.id),
                            r = t.map(e => e.id);
                        return !n.every(e => r.indexOf(e) >= 0);
                    })(r, n) && t.start(n);
                };
            },
            w = n(54),
            A = n(35);
        var R = n(15),
            j = n(1);
        function N(e) {
            return e.reduce((e, t) => (Object(C.m)(t) ? e : ((e[Object(C.g)(t)] = !0), e)), {});
        }
        function M(e, t) {
            const n =
                Object(A.a)(t).length > 0 &&
                (function(e, t) {
                    const { forceSnippet: n } = t.notificationTypeOverrides;
                    return e.filter(e => {
                        if (Object(C.m)(e)) return !1;
                        const t = `${e.id}-${Object(R.a)(e.parts).id}`;
                        return void 0 === n[t];
                    });
                })(e, t).length > 0;
            if (Object(S.g)() && void 0 !== e.find(e => Object(C.i)(e))) return !0;
            const r = new Date();
            return (
                r.setDate(r.getDate() - 2),
                !((t.user ? new Date(t.user.lastContactedAt) : new Date()) < r) &&
                    (e.length > 1 || n)
            );
        }
        var P = function(e) {
                return () => {
                    const t = e.getState(),
                        n = N(Object(A.a)(t).slice(0, -3)),
                        r = Object(w.a)(t),
                        i = N(M(r, t) ? r : []);
                    (Object.keys(n).length > 0 || Object.keys(i).length > 0) &&
                        e.dispatch({
                            type: 'UPDATE_NOTIFICATION_TYPE_OVERRIDES',
                            suppress: n,
                            forceSnippet: i,
                        }),
                        (function(e, t, n) {
                            if (Object.keys(e).length <= 1) return;
                            const r = t.filter(e => !e.dismissed);
                            if (1 !== r.length || 'full' !== r[0].parts[0].notificationType) return;
                            Object(j.g)('fullMessageSuppressed', {
                                messageType: r[0].parts[0].messageType,
                                dismissedCount: t.length - r.length,
                                isLauncherEnabled: n.isLauncherEnabled,
                            });
                        })(i, r, t.launcher);
                };
            },
            U = n(55),
            D = n(214),
            L = n.n(D);
        function k(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function x(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? k(n, !0).forEach(function(t) {
                          G(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : k(n).forEach(function(t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        }
        function G(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        const { assign: V } = Object,
            F = {
                isBooting: !1,
                isBooted: !1,
                bootFailed: !1,
                isMessengerOpen: !1,
                isErrorReportingDisabled: !1,
                isOverrideSamplingEnabled: !1,
                isIntercomLinkEnabled: !1,
                conversationId: null,
                features: {
                    anonymousInboundMessages: !1,
                    googleAnalytics: !1,
                    inboundMessages: !1,
                    outboundMessages: !1,
                },
                boundWebEvents: [],
                isBoundEventCreatorOpen: !1,
                isInstantBootEnabled: !0,
                cookieDomain: void 0,
                viewStack: [],
                userConversationAttachmentsEnabled: !0,
                userConversationGifsEnabled: !0,
                isDeveloperWorkspace: !1,
                upfrontEmailCollection: {
                    upfrontEmailCollectionSubmitted: !1,
                    upfrontEmailCollectionSetting: 'never',
                    upfrontEmailCollectorShowing: !1,
                },
                launcherLogoUrl: void 0,
                customGoogleAnalyticsTrackerId: void 0,
                temporaryExpectationsMessage: void 0,
            };
        function H(e, t) {
            if (t === Object(i.c)(e)) return V({}, e);
            const n = [].concat(e.viewStack, [t]);
            return V({}, e, { viewStack: n });
        }
        function $(e) {
            return V({}, e, { viewStack: e.viewStack.slice(0, -1) });
        }
        const { assign: B } = Object,
            W = { isLauncherEnabled: !1, launcherEnabledOverride: 'not-present' };
        const { assign: z } = Object,
            q = { isPresent: !1, homeScreenSlots: [] };
        const { assign: Q } = Object;
        const Y = {};
        const J = {};
        function K(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function X(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        const Z = {};
        const { assign: ee } = Object,
            te = {};
        var ne = n(111),
            re = n.n(ne),
            ie = n(61),
            se = n.n(ie),
            oe = n(62),
            ae = n.n(oe);
        var ce = function(e, t) {
            switch (t.type) {
                case 'TRIGGER_TRANSITIONS_SUCCESS':
                case 'CREATE_CONVERSATION_SUCCESS':
                case 'GET_CONVERSATION_SUCCESS':
                    return Object.assign({}, e, {
                        attributes: e.attributes.map(e =>
                            Object.assign({}, e, {
                                saveState: ae()(e.value) || '' === e.value ? 'unsaved' : 'saved',
                            })
                        ),
                    });
                case 'UPDATE_CONVERSATION_FORM_REQUEST': {
                    const { identifier: n, value: r } = t;
                    return Object.assign({}, e, {
                        attributes: e.attributes.map(e =>
                            e.identifier === n
                                ? Object.assign({}, e, { value: r, saveState: 'saving' })
                                : e
                        ),
                    });
                }
                case 'UPDATE_CONVERSATION_FORM_SUCCESS':
                    return Object.assign({}, e, {
                        attributes: e.attributes.map(e =>
                            e.identifier === t.identifier
                                ? Object.assign({}, e, { saveState: 'saved' })
                                : e
                        ),
                    });
                case 'UPDATE_CONVERSATION_FORM_FAILURE':
                    return Object.assign({}, e, {
                        attributes: e.attributes.map(e =>
                            e.identifier === t.identifier
                                ? Object.assign({}, e, { saveState: 'failed' })
                                : e
                        ),
                    });
                default:
                    return e;
            }
        };
        const { assign: ue } = Object;
        function de({
            createdAt: e,
            body: t,
            clientId: n,
            file: r,
            isMessage: i,
            selectedReplyOption: s,
            composerSuggestionItem: o,
        }) {
            return {
                body: t,
                createdAt: e,
                clientId: n,
                isMessage: i,
                file: r,
                selectedReplyOption: s,
                composerSuggestionItem: o,
                partType: i ? 'message' : 'comment',
                eventData: {},
                saveState: 'saving',
                seenState: 'not-seen-yet',
                replyOptions: [],
                author: { isAdmin: !1, isSelf: !0 },
            };
        }
        var le = function(e = [], t) {
                switch (t.type) {
                    case 'CREATE_CONVERSATION_REQUEST': {
                        const {
                            body: n,
                            createdAt: r,
                            file: i,
                            composerSuggestionItem: s,
                            clientId: o,
                        } = t.part;
                        return t.isRetry
                            ? e.map(e => ue({}, e, { saveState: 'saving' }))
                            : e.concat(
                                  de({
                                      createdAt: r,
                                      body: n,
                                      file: i,
                                      isMessage: !0,
                                      composerSuggestionItem: s,
                                      clientId: o,
                                  })
                              );
                    }
                    case 'CREATE_CONVERSATION_FAILURE':
                        return e.map(e =>
                            ue({}, e, { saveState: 'failed', saveFailureReason: t.reason })
                        );
                    case 'CREATE_COMMENT_REQUEST': {
                        const {
                            body: n,
                            createdAt: r,
                            clientId: i,
                            file: s,
                            selectedReplyOption: o,
                        } = t.part;
                        return t.isRetry
                            ? e.map(e =>
                                  i === e.clientId ? ue({}, e, { saveState: 'saving' }) : e
                              )
                            : e.concat(
                                  de({
                                      createdAt: r,
                                      body: n,
                                      clientId: i,
                                      file: s,
                                      isMessage: !1,
                                      selectedReplyOption: o,
                                  })
                              );
                    }
                    case 'CREATE_COMMENT_SUCCESS':
                        return e.map(e =>
                            t.part.clientId === e.clientId
                                ? ue({}, e, t.part, { saveState: 'saved' })
                                : e
                        );
                    case 'CREATE_COMMENT_FAILURE':
                        return e.map(e =>
                            t.part.clientId === e.clientId
                                ? ue({}, e, { saveState: 'failed', saveFailureReason: t.reason })
                                : e
                        );
                    case 'TRIGGER_TRANSITIONS_SUCCESS':
                    case 'GET_CONVERSATION_SUCCESS':
                    case 'CREATE_CONVERSATION_SUCCESS':
                        return t.conversation.parts.map(e =>
                            e.form
                                ? ue({}, e, {
                                      form: ce(e.form, t),
                                      saveState: e.saveState || 'saved',
                                  })
                                : ue({}, e, { saveState: e.saveState || 'saved' })
                        );
                    case 'CREATE_REACTION_FAILURE':
                    case 'CREATE_REACTION_REQUEST':
                        return e.map(e =>
                            e.reactionsReply
                                ? ue({}, e, {
                                      reactionsReply: {
                                          reactionIndex: t.reactionIndex,
                                          reactionSet: e.reactionsReply.reactionSet,
                                      },
                                  })
                                : e
                        );
                    case 'CHANGE_CONVERSATION_RATING_INDEX':
                        return e.map(e =>
                            'conversationRating' === e.messageType
                                ? ue({}, e, { conversationRating: { chosenRating: t.ratingIndex } })
                                : e
                        );
                    case 'ADD_CONVERSATION_RATING_REMARK':
                        return e.map(e =>
                            'conversationRating' === e.messageType
                                ? ue({}, e, {
                                      conversationRating: ue({}, e.conversationRating, {
                                          remark: t.remark,
                                          submitted: !0,
                                      }),
                                  })
                                : e
                        );
                    case 'UPDATE_UPLOAD_PROGRESS':
                        return e.map(e =>
                            t.part.clientId === e.clientId
                                ? ue({}, e, { body: [ue({}, e.body[0], { progress: t.progress })] })
                                : e
                        );
                    case 'USER_CONTENT_SEEN_BY_ADMIN':
                    case 'ADMIN_IS_TYPING':
                        return e.map(e =>
                            'not-seen-yet' === e.seenState ? ue({}, e, { seenState: 'seen' }) : e
                        );
                    case 'UPDATE_CONVERSATION_FORM_REQUEST':
                    case 'UPDATE_CONVERSATION_FORM_SUCCESS':
                    case 'UPDATE_CONVERSATION_FORM_FAILURE':
                        return e.map(e =>
                            e.id === t.partId ? ue({}, e, { form: ce(e.form, t) }) : e
                        );
                    default:
                        return e;
                }
            },
            pe = function(e = {}, t) {
                switch (t.type) {
                    case 'ADMIN_IS_TYPING': {
                        const { lastActiveAt: e, firstName: n, avatarUrl: r, adminId: i } = t;
                        return { id: i, lastActiveAt: e, firstName: n, avatar: { square128: r } };
                    }
                    default:
                        return e;
                }
            },
            he = n(63);
        function fe(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function ge(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        const { assign: _e } = Object,
            be = {
                fetchState: 'partial',
                isFetching: !1,
                isUpdating: !1,
                read: !0,
                dismissed: !1,
                preventEndUserReplies: !1,
                parts: [],
                participants: [],
                isEmailAttributeCollectorInserted: !1,
                composerSuggestions: he.b,
            };
        function me(e, t) {
            return void 0 !== e ? e : t;
        }
        var Ee = function(e = be, t) {
            switch (t.type) {
                case 'GET_CONVERSATION_REQUEST': {
                    const { conversationId: n, isUpdating: r } = t;
                    return _e({}, e, {
                        id: me(e.id, n),
                        fetchState: me(e.fetchState, 'partial'),
                        isFetching: !0,
                        isUpdating: r,
                        read: me(e.read, !0),
                        dismissed: me(e.dismissed, !1),
                        preventEndUserReplies: me(e.preventEndUserReplies, !1),
                        parts: me(e.parts, []),
                    });
                }
                case 'TRIGGER_TRANSITIONS_SUCCESS':
                case 'GET_CONVERSATION_SUCCESS': {
                    const { conversation: n } = t,
                        r = n.parts.some(e => !e.author.isAdmin);
                    return (
                        (n.parts = Object(C.q)(n, e)),
                        (n.composerState = Object(C.p)(n, e)),
                        _e({}, e, n, {
                            fetchState: 'all',
                            isFetching: !1,
                            isUpdating: !1,
                            userParticipated: r,
                            parts: le(e.parts, t),
                        })
                    );
                }
                case 'UPDATE_CONVERSATION_FORM_FAILURE':
                case 'UPDATE_CONVERSATION_FORM_SUCCESS':
                case 'CREATE_CONVERSATION_SUCCESS': {
                    const { conversation: n } = t;
                    return _e({}, e, n, {
                        fetchState: 'all',
                        isFetching: !1,
                        isUpdating: !1,
                        userParticipated: !0,
                        parts: le(e.parts, t),
                    });
                }
                case 'CONVERSATION_READ_ELSEWHERE':
                case 'MARK_CONVERSATION_AS_READ_REQUEST':
                    return _e({}, e, { read: !0 });
                case 'DISMISS_NOTIFICATIONS_REQUEST':
                    return _e({}, e, { dismissed: !0 });
                case 'CREATE_COMMENT_SUCCESS':
                case 'CREATE_COMMENT_REQUEST': {
                    const { createdAt: n } = t.part;
                    return _e({}, e, {
                        userParticipated: !0,
                        lastPartCreatedAt: n,
                        parts: le(e.parts, t),
                    });
                }
                case 'UPDATE_CONVERSATION_FORM_REQUEST':
                case 'CREATE_REACTION_REQUEST':
                case 'CREATE_COMMENT_FAILURE':
                case 'UPDATE_UPLOAD_PROGRESS':
                case 'CHANGE_CONVERSATION_RATING_INDEX':
                case 'ADD_CONVERSATION_RATING_REMARK':
                case 'USER_CONTENT_SEEN_BY_ADMIN':
                    return _e({}, e, { parts: le(e.parts, t) });
                case 'ADMIN_IS_TYPING':
                    return _e({}, e, {
                        lastTypingAdmin: pe(e.lastTypingAdmin, t),
                        parts: le(e.parts, t),
                    });
                case 'EMAIL_ATTRIBUTE_COLLECTOR_INSERTED':
                    return _e({}, e, { isEmailAttributeCollectorInserted: !0 });
                case 'SET_COMPOSER_SUGGESTIONS':
                case 'SET_COMPOSER_SUGGESTIONS_DISMISSED':
                case 'SET_COMPOSER_SUGGESTIONS_LOADING':
                    return null == t.conversationId
                        ? e
                        : (function(e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {};
                                  t % 2
                                      ? fe(n, !0).forEach(function(t) {
                                            ge(e, t, n[t]);
                                        })
                                      : Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(
                                            e,
                                            Object.getOwnPropertyDescriptors(n)
                                        )
                                      : fe(n).forEach(function(t) {
                                            Object.defineProperty(
                                                e,
                                                t,
                                                Object.getOwnPropertyDescriptor(n, t)
                                            );
                                        });
                              }
                              return e;
                          })({}, e, {
                              composerSuggestions: Object(he.a)(e.composerSuggestions, t),
                          });
                default:
                    return e;
            }
        };
        const { assign: Oe } = Object,
            Se = { isFetching: !1, pagesFetched: 0, scrollPosition: 0, byId: {} };
        function ve(e = {}, t, n, r) {
            const { fetchState: i } = e;
            return Oe({}, e, { id: t, fetchState: i || 'partial', dismissed: n, read: r });
        }
        function ye(e = {}, t) {
            switch (t.type) {
                case 'CREATE_OR_UPDATE_USER_SUCCESS':
                case 'UPDATE_USER_SUPPLIED_EMAIL_SUCCESS': {
                    const { unreadConversationIds: n, unreadDismissedConversationIds: r } = t.user,
                        i = {};
                    return (
                        r && r.forEach(t => (i[t] = ve(e[t], t, !0, !1))),
                        n && n.forEach(t => (i[t] = ve(e[t], t, !1, !1))),
                        Oe({}, e, i)
                    );
                }
                case 'GET_UNREAD_CONVERSATIONS_SUCCESS': {
                    const {
                            unreadConversationIds: n,
                            unreadDismissedConversationIds: r,
                        } = t.unreadConversations,
                        i = {};
                    return (
                        r.forEach(t => (i[t] = ve(e[t], t, !0, !1))),
                        n.forEach(t => (i[t] = ve(e[t], t, !1, !1))),
                        Oe({}, e, i)
                    );
                }
                case 'GET_CONVERSATIONS_SUCCESS':
                case 'GET_HOME_SCREEN_CONVERSATIONS_SUCCESS':
                case 'GET_HOME_SCREEN_CARDS_SUCCESS': {
                    const n = (t.conversations.conversations || t.conversations).reduce((t, n) => {
                        const { id: r } = n;
                        return e[r] &&
                            'all' === e[r].fetchState &&
                            !(function(e, t = {}, n = {}) {
                                const r = se()(t, [e, 'parts']),
                                    i = se()(n, 'parts');
                                return re()(r).id !== re()(i).id;
                            })(r, e, n)
                            ? t
                            : ((t[r] = (function(e = {}) {
                                  return Oe({}, e, {
                                      fetchState: 'summary',
                                      isFetching: !1,
                                      isUpdating: !1,
                                      parts: e.parts.map(e => Oe({}, e, { saveState: 'saved' })),
                                  });
                              })(n)),
                              t);
                    }, {});
                    return Oe({}, e, n);
                }
                case 'UPDATE_CONVERSATION_FORM_SUCCESS':
                case 'CREATE_CONVERSATION_SUCCESS':
                case 'GET_CONVERSATION_SUCCESS':
                case 'TRIGGER_TRANSITIONS_SUCCESS': {
                    const { id: n } = t.conversation,
                        r = { [n]: Ee(e[n], t) };
                    return Oe({}, e, r);
                }
                case 'UPDATE_CONVERSATION_FORM_REQUEST':
                case 'CREATE_REACTION_REQUEST':
                case 'CREATE_REACTION_SUCCESS':
                case 'GET_CONVERSATION_REQUEST':
                case 'CREATE_COMMENT_REQUEST':
                case 'CREATE_COMMENT_SUCCESS':
                case 'CREATE_COMMENT_FAILURE':
                case 'CONVERSATION_READ_ELSEWHERE':
                case 'MARK_CONVERSATION_AS_READ_REQUEST':
                case 'CHANGE_CONVERSATION_RATING_INDEX':
                case 'UPDATE_CONVERSATION_FORM_FAILURE':
                case 'ADD_CONVERSATION_RATING_REMARK':
                case 'SET_COMPOSER_SUGGESTIONS_DISMISSED':
                case 'SET_COMPOSER_SUGGESTIONS':
                case 'SET_COMPOSER_SUGGESTIONS_LOADING': {
                    const n = t.conversationId;
                    if (null == n) return e;
                    const r = { [n]: Ee(e[n], t) };
                    return Oe({}, e, r);
                }
                case 'ADMIN_IS_TYPING':
                case 'USER_CONTENT_SEEN_BY_ADMIN': {
                    const n = t.conversationId;
                    if (void 0 === e[n]) return e;
                    const r = { [n]: Ee(e[n], t) };
                    return Oe({}, e, r);
                }
                case 'UPDATE_UPLOAD_PROGRESS': {
                    const n = t.conversationId;
                    if (void 0 === n) return e;
                    const r = { [n]: Ee(e[n], t) };
                    return Oe({}, e, r);
                }
                case 'DISMISS_NOTIFICATIONS_REQUEST': {
                    const n = t.conversationIds.reduce((n, r) => ((n[r] = Ee(e[r], t)), n), {});
                    return Oe({}, e, n);
                }
                case 'EMAIL_ATTRIBUTE_COLLECTOR_INSERTED': {
                    const n = t.conversationId;
                    if (void 0 === e[n]) return e;
                    const r = { [n]: Ee(e[n], t) };
                    return Oe({}, e, r);
                }
                default:
                    return e;
            }
        }
        function Ce(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function Te(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        const { assign: Ie } = Object,
            we = {
                isFetching: !1,
                isUpdating: !1,
                fetchState: 'all',
                read: !0,
                intercomLinkSolution: 'live-chat',
                parts: [],
                participants: [],
                composerState: { visible: !0 },
                composerSuggestions: he.b,
            };
        const Ae = {};
        const Re = { suppress: {}, forceSnippet: {} };
        const { assign: je } = Object,
            Ne = { isSaving: !1, showErrorMessage: !1, errorMessage: null };
        const { assign: Me } = Object,
            Pe = {
                isInstallModeOpen: !1,
                installModeConfig: {
                    activeSubscription: !1,
                    userHashVerified: !1,
                    secureInstallV2: !1,
                    messengerEnabledForVisitors: !0,
                    messengerEnabledForUsers: !0,
                },
            };
        const { assign: Ue } = Object,
            De = { isFetching: !1, gifs: [], fetchingFailed: !1, searchTerm: null };
        var Le = n(26);
        const ke = {
            eventData: {
                selector: '',
                eventTrigger: Le.b.CLICK.key,
                name: '',
                sourceUrl: '',
                urlRegex: '',
            },
            stage: Le.a.CHOOSE_EVENT_TYPE,
        };
        var xe = n(11),
            Ge = n.n(xe);
        const { assign: Ve } = Object,
            Fe = {
                isLauncherDiscoveryModeEnabled: !1,
                isLauncherDiscoveryModeOpening: !1,
                isLauncherDiscoveryModeClosing: !1,
                hasDiscoveredLauncher: !1,
            };
        function He(e) {
            const {
                app: { features: t, inboundConversationsDisabled: n, officeHoursResponse: r },
                clientsideMessageConditions: i,
                clientsideRulesetConditions: s,
                role: o,
            } = e;
            return (
                !!t.launcherDiscoveryMode &&
                !n &&
                !(!Ge()(i) || !Ge()(s)) &&
                !!ae()(r) &&
                'visitor' === o
            );
        }
        var $e = n(47),
            Be = n.n($e),
            We = n(17),
            ze = n.n(We),
            qe = n(41);
        function Qe(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function Ye(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? Qe(n, !0).forEach(function(t) {
                          Je(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : Qe(n).forEach(function(t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        }
        function Je(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        const Ke = {};
        function Xe(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function Ze(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        const et = {
            userRole: null,
            isFetching: !1,
            isFetched: !1,
            isFailed: !1,
            cardUris: null,
            hasMoreConversations: !1,
        };
        function tt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function nt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? tt(n, !0).forEach(function(t) {
                          rt(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : tt(n).forEach(function(t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        }
        function rt(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        const it = {
            isOpen: !1,
            isSheetsDataLoading: !1,
            isSheetsDataLoaded: !1,
            isProxyLoaded: !1,
            isNavigating: !1,
            sourceCard: null,
            data: null,
            url: null,
            sheetTitle: '',
        };
        function st(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function ot(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? st(n, !0).forEach(function(t) {
                          at(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : st(n).forEach(function(t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        }
        function at(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        const ct = {
            composerHasContent: !1,
            lastComposerEvent: 0,
            lastArticleClosedAt: null,
            conversationIdOfLastViewedArticle: null,
            clientsideMessageConditions: null,
            clientsideRulesetConditions: null,
            lastTriggerTransitionTimestamp: null,
            userCreatedConversationAt: null,
        };
        function ut(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function dt(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        const lt = { isShown: !1, alertType: void 0, alertPayload: void 0 };
        function pt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function ht(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        const ft = {};
        function gt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function _t(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? gt(n, !0).forEach(function(t) {
                          bt(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : gt(n).forEach(function(t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        }
        function bt(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        const mt = {
            tabNavigation: !1,
            accessibilityTheme: 'default',
            secondaryAccessibilityTheme: 'light',
        };
        function Et(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function Ot(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? Et(n, !0).forEach(function(t) {
                          St(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : Et(n).forEach(function(t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        }
        function St(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        const vt = {
            isFetching: !1,
            isFetched: !1,
            isPreviewing: !1,
            fetchingFailed: !1,
            activeTour: void 0,
            updateFailed: !1,
            videoAudioMuted: !0,
            userHasInteractedWithVideo: !1,
            endTourAnimation: '',
            isAwaitingProgress: !1,
        };
        function yt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function Ct(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? yt(n, !0).forEach(function(t) {
                          Tt(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : yt(n).forEach(function(t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        }
        function Tt(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        const It = { triggers: {}, active: null, failed: !1 };
        var wt = n(110),
            At = n.n(wt),
            Rt = n(82),
            jt = n.n(Rt);
        function Nt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function Mt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? Nt(n, !0).forEach(function(t) {
                          Pt(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : Nt(n).forEach(function(t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        }
        function Pt(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        const Ut = {
            allSuggestions: [],
            isDismissed: !1,
            serverSideSuggestions: null,
            previewSuggestions: null,
        };
        const Dt = [];
        function Lt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function kt(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        const xt = { content: null };
        function Gt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function Vt(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        const Ft = { composerSuggestions: null };
        function Ht(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function $t(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        const Bt = { isActive: !1 };
        function Wt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function zt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? Wt(n, !0).forEach(function(t) {
                          qt(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : Wt(n).forEach(function(t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        }
        function qt(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        const Qt = { type: null, metadata: {} };
        var Yt = Object(U.combineReducers)({
                app: function(e = F, t) {
                    switch (t.type) {
                        case 'CREATE_OR_UPDATE_USER_REQUEST': {
                            const { cookieDomain: n } = t.customizationAttributes;
                            return V({}, e, {
                                bootFailed: !1,
                                isBooting: !e.isBooted,
                                cookieDomain: n,
                            });
                        }
                        case 'CREATE_OR_UPDATE_USER_SUCCESS': {
                            const {
                                activeAdmins: n,
                                alignment: r,
                                backgroundImage: i,
                                boundWebEvents: s,
                                color: o,
                                compactExpectedResponseDelay: a,
                                customGoogleAnalyticsTrackerId: c,
                                expectedResponseDelay: u,
                                expectedResponseDelayTranslationKey: d,
                                features: l,
                                helpCenterSiteUrl: p,
                                horizontalPadding: h,
                                inboundConversationsDisabled: f,
                                isAudioEnabled: g,
                                isDeveloperWorkspace: _,
                                isErrorReportingDisabled: b,
                                isInstantBootEnabled: m,
                                isIntercomLinkEnabled: E,
                                isOverrideSamplingEnabled: O,
                                lastActiveAt: S,
                                launcherExpectedResponseDelayTranslationKey: v,
                                launcherLogoUrl: y,
                                logoUrl: C,
                                name: T,
                                officeHoursResponse: I,
                                originCookieDomain: w,
                                realtimeConfig: A,
                                secondaryColor: R,
                                selfServeSuggestionsMatch: j,
                                smsEnabled: N,
                                teamGreeting: M,
                                teamIntro: P,
                                temporaryExpectationsMessage: U,
                                upfrontEmailCollectionSetting: D,
                                userConversationAttachmentsEnabled: L,
                                userConversationGifsEnabled: k,
                                verticalPadding: G,
                            } = t.user.app;
                            return V({}, e, {
                                activeAdmins: n,
                                alignment: r,
                                backgroundImage: i,
                                bootFailed: !1,
                                boundWebEvents: s,
                                color: o,
                                compactExpectedResponseDelay: a,
                                customGoogleAnalyticsTrackerId: c,
                                expectedResponseDelay: u,
                                expectedResponseDelayTranslationKey: d,
                                features: l,
                                helpCenterSiteUrl: p,
                                horizontalPadding: h,
                                inboundConversationsDisabled: f,
                                isAudioEnabled: g,
                                isBooted: !0,
                                isBooting: !1,
                                isDeveloperWorkspace: _,
                                isErrorReportingDisabled: b,
                                isInstantBootEnabled: m,
                                isIntercomLinkEnabled: E,
                                isOverrideSamplingEnabled: O,
                                lastActiveAt: S,
                                launcherExpectedResponseDelayTranslationKey: v,
                                launcherLogoUrl: y,
                                logoUrl: C,
                                name: T,
                                officeHoursResponse: I,
                                originCookieDomain: w,
                                realtimeConfig: A,
                                secondaryColor: R,
                                selfServeSuggestionsMatch: j,
                                smsEnabled: N,
                                teamGreeting: M,
                                teamIntro: P,
                                temporaryExpectationsMessage: U,
                                userConversationAttachmentsEnabled: L,
                                userConversationGifsEnabled: k,
                                verticalPadding: G,
                                upfrontEmailCollection: x({}, e.upfrontEmailCollection, {
                                    upfrontEmailCollectionSetting: D,
                                }),
                            });
                        }
                        case 'CREATE_OR_UPDATE_USER_FAILURE':
                            return t.isIdentityVerificationError
                                ? V({}, e, { bootFailed: !0, isBooting: !1, isBooted: !1 })
                                : V({}, e, { bootFailed: e.isBooting });
                        case 'OPEN_MESSENGER':
                            return V({}, e, {
                                isMessengerOpen: !0,
                                viewStack: Object(i.f)(e) ? ['home-screen'] : e.viewStack,
                            });
                        case 'CLOSE_MESSENGER':
                            return V({}, e, { isMessengerOpen: !1 });
                        case 'SHOW_NEW_CONVERSATION':
                            return V(H(t.replaceCurrentView ? $(e) : e, 'new-conversation'), {
                                conversationId: null,
                            });
                        case 'SHOW_CONVERSATION':
                            return V(H(t.replaceCurrentView ? $(e) : e, 'conversation'), {
                                conversationId: t.conversationId,
                            });
                        case 'SHOW_CONVERSATIONS':
                            return t.resetNavigationHistory
                                ? H(
                                      (function(e) {
                                          return V({}, e, { viewStack: [] });
                                      })(e),
                                      'conversations'
                                  )
                                : H(e, 'conversations');
                        case 'SHOW_EMPTY_SCREEN':
                            return H(e, 'empty-screen');
                        case 'SHOW_MESSENGER_TRIGGER_SCREEN':
                            return H(t.replaceCurrentView ? $(e) : e, 'messenger-trigger');
                        case 'SHOW_HOME_SCREEN':
                            return H(e, 'home-screen');
                        case 'CREATE_CONVERSATION_SUCCESS':
                            return 'new-conversation' === Object(i.c)(e)
                                ? V({}, H($(e), 'conversation'), {
                                      conversationId: t.conversation.id,
                                  })
                                : e;
                        case 'OPEN_BORDERLESS_CONVERSATION':
                            return V({}, e, { conversationId: t.conversationId });
                        case 'REHYDRATE':
                            return V({}, e, t.state.app, {
                                features: V({}, e.features, t.state.app.features),
                            });
                        case 'OPEN_BOUND_EVENT_CREATOR':
                            return V({}, e, { isBoundEventCreatorOpen: !0 });
                        case 'MESSENGER_NAVIGATE_BACK':
                            return $(e);
                        case 'TOGGLE_UPFRONT_EMAIL_COLLECTOR_STATE':
                            return V({}, e, {
                                upfrontEmailCollection: x({}, e.upfrontEmailCollection, {
                                    upfrontEmailCollectorShowing: !e.upfrontEmailCollection
                                        .upfrontEmailCollectorShowing,
                                }),
                            });
                        case 'UPFRONT_EMAIL_COLLECTION_SUBMITTED':
                            return V({}, e, {
                                upfrontEmailCollection: x({}, e.upfrontEmailCollection, {
                                    upfrontEmailCollectionSubmitted: !0,
                                }),
                            });
                        default:
                            return e;
                    }
                },
                launcher: function(e = W, t) {
                    switch (t.type) {
                        case 'CREATE_OR_UPDATE_USER_REQUEST': {
                            const n =
                                'not-present' === t.launcherEnabledOverride
                                    ? e.launcherEnabledOverride
                                    : t.launcherEnabledOverride;
                            return B({}, e, { launcherEnabledOverride: n });
                        }
                        case 'CREATE_OR_UPDATE_USER_SUCCESS': {
                            const { isLauncherEnabled: n } = t.user.app;
                            return B({}, e, { isLauncherEnabled: n });
                        }
                        case 'CREATE_OR_UPDATE_USER_FAILURE':
                            return t.isIdentityVerificationError
                                ? B({}, e, { isLauncherEnabled: !1 })
                                : e;
                        case 'REHYDRATE':
                            return B({}, e, t.state.launcher);
                        default:
                            return e;
                    }
                },
                user: function(e = q, t) {
                    switch (t.type) {
                        case 'CREATE_OR_UPDATE_USER_REQUEST': {
                            const {
                                url: n,
                                customAttributes: r,
                                anonymousSessionDuration: i,
                                activeCompanyId: s,
                            } = t;
                            return z({}, e, {
                                url: n,
                                customAttributes: r,
                                anonymousSessionDuration: i,
                                activeCompanyId: s,
                            });
                        }
                        case 'CREATE_OR_UPDATE_USER_SUCCESS': {
                            const {
                                    id: n,
                                    locale: r,
                                    countryCode: i,
                                    role: s,
                                    name: o,
                                    userSuppliedEmail: a,
                                    unreadConversationIds: c,
                                    unreadDismissedConversationIds: u,
                                    notificationLinkConversationId: d,
                                    phoneNumber: l,
                                    articleConversationId: p,
                                    homeScreenSlots: h,
                                    cdasBreachingLimit: f,
                                    lastContactedAt: g,
                                } = t.user,
                                _ = t.user.hasConversations || c.length > 0 || u.length > 0;
                            return z({}, e, {
                                id: n,
                                locale: r,
                                countryCode: i,
                                role: s,
                                name: o,
                                userSuppliedEmail: a,
                                hasConversations: _,
                                phoneNumber: l,
                                articleConversationId: p,
                                notificationLinkConversationId: d,
                                homeScreenSlots: h,
                                cdasBreachingLimit: f,
                                lastContactedAt: g,
                            });
                        }
                        case 'CREATE_CONVERSATION_REQUEST':
                        case 'VISITOR_AUTO_MESSAGE_CONDITION_SATISFIED_SUCCESS':
                        case 'GET_CONVERSATION_SUCCESS':
                            return z({}, e, { hasConversations: !0 });
                        case 'GET_CONVERSATIONS_SUCCESS': {
                            const { conversations: n } = t.conversations,
                                r = void 0 !== n && n.length > 0;
                            return z({}, e, { hasConversations: r });
                        }
                        case 'UPDATE_USER_SUPPLIED_EMAIL_SUCCESS': {
                            const { userSuppliedEmail: n } = t;
                            return z({}, e, { userSuppliedEmail: n });
                        }
                        case 'UPDATE_PHONE_NUMBER_SUCCESS': {
                            const { phoneNumber: n } = t;
                            return z({}, e, { phoneNumber: n });
                        }
                        case 'USER_IS_PRESENT':
                            return z({}, e, { isPresent: !0 });
                        case 'USER_IS_ABSENT':
                            return z({}, e, { isPresent: !1 });
                        case 'REHYDRATE':
                            return z({}, e, t.state.user);
                        default:
                            return e;
                    }
                },
                session: function(e = null, t) {
                    switch (t.type) {
                        case 'CREATE_OR_UPDATE_USER_REQUEST': {
                            const {
                                appId: n,
                                userId: r,
                                email: i,
                                userHash: s,
                                anonymousId: o,
                                anonymousSession: a,
                                sessionId: c,
                            } = t.session;
                            return Q({}, e, {
                                appId: n,
                                userId: r,
                                email: i,
                                userHash: s,
                                anonymousId: o,
                                anonymousSession: a,
                                sessionId: c,
                            });
                        }
                        case 'CREATE_OR_UPDATE_USER_SUCCESS': {
                            const {
                                anonymousId: n,
                                anonymousSession: r,
                                activeCompanyId: i,
                            } = t.user;
                            return Q({}, e, {
                                anonymousId: n || e.anonymousId,
                                anonymousSession: r || e.anonymousSession,
                                activeCompanyId: i,
                            });
                        }
                        case 'DESTROY_SESSION':
                            return null;
                        case 'ANONYMOUS_SESSION_CHANGED':
                            return Q({}, e, { anonymousSession: t.anonymousSession });
                        default:
                            return e;
                    }
                },
                openOnBoot: function(e = Qt, t) {
                    var n;
                    switch (t.type) {
                        case 'CLOSE_MESSENGER':
                        case 'MESSENGER_NAVIGATE_BACK':
                        case 'SHOW_HOME_SCREEN':
                            return zt({}, Qt);
                        case 'SHOW_CONVERSATION':
                            return {
                                type: 'conversation',
                                metadata: { conversationId: t.conversationId },
                            };
                        case 'CREATE_CONVERSATION_SUCCESS':
                            return {
                                type: 'conversation',
                                metadata: { conversationId: t.conversation.id },
                            };
                        case 'SHOW_NEW_CONVERSATION':
                            return { type: 'new_conversation', metadata: {} };
                        case 'OPEN_SHEET':
                            if ('article-link' === t.componentId) {
                                const n = zt({}, e);
                                return {
                                    type: 'article',
                                    metadata: {
                                        url: t.url,
                                        cardUri: t.cardUri,
                                        componentId: t.componentId,
                                        previousState: n,
                                    },
                                };
                            }
                            return e;
                        case 'CLOSE_SHEET':
                            return (null === (n = e.metadata) || void 0 === n
                              ? void 0
                              : n.previousState)
                                ? zt({}, e.metadata.previousState)
                                : zt({}, Qt);
                        case 'REHYDRATE':
                            return zt({}, e, {}, t.state.openOnBoot);
                        default:
                            return e;
                    }
                },
                operator: (e = ct, t) => {
                    switch (t.type) {
                        case 'SHOW_NEW_CONVERSATION':
                        case 'SHOW_CONVERSATION':
                            return ot({}, e, {
                                lastArticleClosedAt: null,
                                conversationIdOfLastViewedArticle: null,
                            });
                        case 'COMPOSER_CONTENT_CHANGED':
                            return ot({}, e, {
                                lastComposerEvent: t.lastActiveAt.getTime(),
                                composerHasContent: '' !== t.composerContent,
                            });
                        case 'CREATE_CONVERSATION_REQUEST':
                            return ot({}, e, { userCreatedConversationAt: t.timestamp });
                        case 'OPEN_ARTICLE':
                            return ot({}, e, {
                                lastArticleClosedAt: null,
                                conversationIdOfLastViewedArticle: t.conversationId,
                            });
                        case 'CLOSE_ARTICLE':
                            return ot({}, e, { lastArticleClosedAt: t.closedAt });
                        case 'CREATE_OR_UPDATE_USER_SUCCESS':
                        case 'UPDATE_USER_SUPPLIED_EMAIL_SUCCESS':
                            return ot({}, e, {
                                clientsideMessageConditions: t.user.clientsideMessageConditions,
                                clientsideRulesetConditions: t.user.clientsideRulesetConditions,
                            });
                        case 'TRIGGER_TRANSITIONS_REQUEST':
                            return ot({}, e, {
                                lastTriggerTransitionTimestamp: t.payload.timestamp,
                            });
                        case 'REHYDRATE':
                            return ot({}, e, {}, t.state.operator);
                        default:
                            return e;
                    }
                },
                message: function(e = Y, t) {
                    switch (t.type) {
                        case 'OPEN_MESSAGE': {
                            const { conversationId: e, partId: n } = t;
                            return { conversationId: e, partId: n };
                        }
                        case 'CLOSE_MESSAGE':
                            return Y;
                        default:
                            return e;
                    }
                },
                pointerMessage: function(e = J, t) {
                    switch (t.type) {
                        case 'OPEN_POINTER_MESSAGE': {
                            const { conversationId: e, partId: n } = t;
                            return { conversationId: e, partId: n };
                        }
                        case 'CLOSE_POINTER_MESSAGE':
                            return J;
                        default:
                            return e;
                    }
                },
                dismissedPointers: function(e = Z, t) {
                    switch (t.type) {
                        case 'DISMISS_POINTER_MESSAGE':
                            return (function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                        ? K(n, !0).forEach(function(t) {
                                              X(e, t, n[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(
                                              e,
                                              Object.getOwnPropertyDescriptors(n)
                                          )
                                        : K(n).forEach(function(t) {
                                              Object.defineProperty(
                                                  e,
                                                  t,
                                                  Object.getOwnPropertyDescriptor(n, t)
                                              );
                                          });
                                }
                                return e;
                            })({}, e, { [t.conversationId]: !0 });
                        default:
                            return e;
                    }
                },
                article: function(e = te, t) {
                    switch (t.type) {
                        case 'OPEN_ARTICLE':
                            return t.article;
                        case 'CLOSE_ARTICLE':
                            return te;
                        case 'CREATE_ARTICLE_REACTION_REQUEST': {
                            const { articleId: n, reactionIndex: r } = t;
                            return e.id !== n
                                ? e
                                : ee({}, e, {
                                      reactionsReply: ee({}, e.reactionsReply, {
                                          reactionIndex: r,
                                      }),
                                  });
                        }
                        default:
                            return e;
                    }
                },
                conversations: function(e = Se, t) {
                    switch (t.type) {
                        case 'CREATE_OR_UPDATE_USER_SUCCESS':
                        case 'UPDATE_USER_SUPPLIED_EMAIL_SUCCESS':
                        case 'GET_UNREAD_CONVERSATIONS_SUCCESS':
                            return Oe({}, e, { byId: ye(e.byId, t) });
                        case 'GET_CONVERSATIONS_REQUEST':
                            return Oe({}, e, { isFetching: !0 });
                        case 'GET_CONVERSATIONS_SUCCESS': {
                            const { page: n, totalPages: r } = t.conversations.pages;
                            return Oe({}, e, {
                                isFetching: !1,
                                pagesFetched: n,
                                totalPages: r,
                                byId: ye(e.byId, t),
                            });
                        }
                        case 'GET_CONVERSATIONS_FAILURE':
                            return Oe({}, e, { isFetching: !1 });
                        case 'UPDATE_CONVERSATION_FORM_REQUEST':
                        case 'CREATE_REACTION_REQUEST':
                        case 'CREATE_REACTION_FAILURE':
                        case 'GET_CONVERSATION_REQUEST':
                        case 'GET_CONVERSATION_SUCCESS':
                        case 'CREATE_COMMENT_REQUEST':
                        case 'CREATE_COMMENT_SUCCESS':
                        case 'CREATE_COMMENT_FAILURE':
                        case 'CONVERSATION_READ_ELSEWHERE':
                        case 'MARK_CONVERSATION_AS_READ_REQUEST':
                        case 'DISMISS_NOTIFICATIONS_REQUEST':
                        case 'CREATE_CONVERSATION_SUCCESS':
                        case 'ADMIN_IS_TYPING':
                        case 'UPDATE_UPLOAD_PROGRESS':
                        case 'CHANGE_CONVERSATION_RATING_INDEX':
                        case 'ADD_CONVERSATION_RATING_REMARK':
                        case 'UPDATE_CONVERSATION_FORM_SUCCESS':
                        case 'USER_CONTENT_SEEN_BY_ADMIN':
                        case 'UPDATE_CONVERSATION_FORM_FAILURE':
                        case 'TRIGGER_TRANSITIONS_SUCCESS':
                        case 'GET_HOME_SCREEN_CARDS_SUCCESS':
                        case 'GET_HOME_SCREEN_CONVERSATIONS_SUCCESS':
                        case 'SET_COMPOSER_SUGGESTIONS_DISMISSED':
                        case 'SET_COMPOSER_SUGGESTIONS':
                        case 'SET_COMPOSER_SUGGESTIONS_LOADING':
                            return Oe({}, e, { byId: ye(e.byId, t) });
                        case 'CONVERSATIONS_SCROLLED':
                            return Oe({}, e, { scrollPosition: t.scrollPosition });
                        case 'EMAIL_ATTRIBUTE_COLLECTOR_INSERTED':
                            return Oe({}, e, { byId: ye(e.byId, t) });
                        default:
                            return e;
                    }
                },
                newConversation: function(e = we, t) {
                    switch (t.type) {
                        case 'SHOW_NEW_CONVERSATION':
                            return Ie({}, e, { defaultMessage: t.defaultMessage });
                        case 'CREATE_CONVERSATION_REQUEST':
                        case 'CREATE_CONVERSATION_FAILURE':
                            return Ie({}, e, { userParticipated: !0, parts: le(e.parts, t) });
                        case 'SET_NEW_CONVERSATION_COMPOSER_STATE':
                            return Ie({}, e, { composerState: t.composerState });
                        case 'CREATE_CONVERSATION_SUCCESS':
                            return Ie({}, we, { composerState: e.composerState });
                        case 'UPDATE_UPLOAD_PROGRESS': {
                            const { conversationId: n } = t;
                            return void 0 !== n ? e : Ie({}, e, { parts: le(e.parts, t) });
                        }
                        case 'SET_COMPOSER_SUGGESTIONS':
                        case 'SET_COMPOSER_SUGGESTIONS_DISMISSED':
                        case 'SET_COMPOSER_SUGGESTIONS_LOADING':
                            return (function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                        ? Ce(n, !0).forEach(function(t) {
                                              Te(e, t, n[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(
                                              e,
                                              Object.getOwnPropertyDescriptors(n)
                                          )
                                        : Ce(n).forEach(function(t) {
                                              Object.defineProperty(
                                                  e,
                                                  t,
                                                  Object.getOwnPropertyDescriptor(n, t)
                                              );
                                          });
                                }
                                return e;
                            })({}, e, {
                                composerSuggestions: Object(he.a)(e.composerSuggestions, t),
                            });
                        default:
                            return e;
                    }
                },
                borderless: function(e = Ae, t) {
                    switch (t.type) {
                        case 'OPEN_BORDERLESS_CONVERSATION':
                            return Object.assign({}, e, { conversationId: t.conversationId });
                        case 'CLOSE_MESSAGE':
                            return Ae;
                        default:
                            return e;
                    }
                },
                notificationChannels: function(e = Ne, t) {
                    switch (t.type) {
                        case 'UPDATE_USER_SUPPLIED_EMAIL_REQUEST':
                            return je({}, e, { isSaving: !0 });
                        case 'CREATE_OR_UPDATE_USER_SUCCESS':
                        case 'UPDATE_USER_SUPPLIED_EMAIL_SUCCESS':
                            return je({}, e, { isSaving: !1 });
                        case 'UPDATE_PHONE_NUMBER_REQUEST':
                            return je({}, e, {
                                isSaving: !0,
                                errorMessage: null,
                                showErrorMessage: !1,
                            });
                        case 'UPDATE_PHONE_NUMBER_SUCCESS':
                            return je({}, e, { phoneNumber: t.phoneNumber, isSaving: !1 });
                        case 'UPDATE_PHONE_NUMBER_FAILURE':
                            return je({}, e, {
                                errorMessage: t.message,
                                isSaving: !1,
                                showErrorMessage: !0,
                            });
                        case 'INPUT_VALUE_CHANGED':
                            return je({}, e, { errorMessage: null, showErrorMessage: !1 });
                        default:
                            return e;
                    }
                },
                notificationTypeOverrides: function(e = Re, t) {
                    switch (t.type) {
                        case 'UPDATE_NOTIFICATION_TYPE_OVERRIDES':
                            return Object.assign({}, e, {
                                suppress: Object.assign({}, e.suppress, t.suppress),
                                forceSnippet: Object.assign({}, e.forceSnippet, t.forceSnippet),
                            });
                        default:
                            return e;
                    }
                },
                install: function(e = Pe, t) {
                    switch (t.type) {
                        case 'OPEN_INSTALL_MODE': {
                            const {
                                activeSubscription: n,
                                userHashVerified: r,
                                secureInstallV2: i,
                                messengerEnabledForVisitors: s,
                                messengerEnabledForUsers: o,
                            } = t;
                            return Me({}, e, {
                                isInstallModeOpen: !0,
                                installModeConfig: {
                                    activeSubscription: n,
                                    userHashVerified: r,
                                    secureInstallV2: i,
                                    messengerEnabledForVisitors: s,
                                    messengerEnabledForUsers: o,
                                },
                            });
                        }
                        case 'CLOSE_INSTALL_MODE':
                            return Me({}, e, { isInstallModeOpen: !1 });
                        default:
                            return e;
                    }
                },
                gifs: function(e = De, t) {
                    switch (t.type) {
                        case 'SEARCH_GIFS_REQUEST': {
                            const { searchTerm: n } = t;
                            return Ue({}, e, { isFetching: !0, fetchingFailed: !1, searchTerm: n });
                        }
                        case 'SEARCH_GIFS_SUCCESS': {
                            const { gifs: n, searchTerm: r } = t;
                            return r !== e.searchTerm
                                ? e
                                : Ue({}, e, {
                                      isFetching: !1,
                                      gifs: n,
                                      fetchingFailed: !1,
                                      searchTerm: r,
                                  });
                        }
                        case 'SEARCH_GIFS_FAILURE': {
                            const { searchTerm: n } = t;
                            return n !== e.searchTerm
                                ? e
                                : Ue({}, e, { isFetching: !1, fetchingFailed: !0, searchTerm: n });
                        }
                        default:
                            return e;
                    }
                },
                boundEventCreator: function(e = ke, t) {
                    switch (t.type) {
                        case 'OPEN_BOUND_EVENT_CREATOR':
                            return {
                                stage: t.stage,
                                eventData: Object.assign({}, e.eventData, t.eventData),
                            };
                        case 'CHANGE_BOUND_EVENT_CREATOR_STAGE':
                            return Object.assign({}, e, { stage: t.newStage });
                        case 'UPDATE_BOUND_EVENT_DATA':
                            return Object.assign({}, e, {
                                eventData: Object.assign({}, e.eventData, t.eventData),
                            });
                        case 'CLOSE_BOUND_EVENT_CREATOR':
                            return ke;
                        default:
                            return e;
                    }
                },
                launcherDiscoveryMode: (e = Fe, t) => {
                    const { isLauncherDiscoveryModeEnabled: n } = e;
                    switch (t.type) {
                        case 'CREATE_OR_UPDATE_USER_SUCCESS': {
                            const { user: n } = t;
                            return Ve({}, e, { isLauncherDiscoveryModeEnabled: He(n) });
                        }
                        case 'GET_CONVERSATIONS_REQUEST':
                            return Ve({}, e, {
                                isLauncherDiscoveryModeEnabled: !1,
                                hasDiscoveredLauncher: !0,
                            });
                        case 'OPEN_MESSENGER':
                            return Ve({}, e, {
                                hasDiscoveredLauncher: !0,
                                isLauncherDiscoveryModeEnabled: !1,
                            });
                        case 'OPEN_LAUNCHER_DISCOVERY_MODE':
                            return Ve({}, e, {
                                isLauncherDiscoveryModeOpening: n,
                                hasDiscoveredLauncher: !0,
                            });
                        case 'CLOSE_LAUNCHER_DISCOVERY_MODE':
                            return Ve({}, e, {
                                isLauncherDiscoveryModeOpening: !1,
                                isLauncherDiscoveryModeClosing: n,
                            });
                        case 'SHOW_NEW_CONVERSATION':
                        case 'OPENING_MESSENGER_FROM_LAUNCHER_DISCOVERY_MODE':
                            return Ve({}, e, {
                                isLauncherDiscoveryModeClosing: !1,
                                isLauncherDiscoveryModeOpening: !1,
                            });
                        case 'DISABLE_LAUNCHER_DISCOVERY_MODE':
                            return Ve({}, e, {
                                isLauncherDiscoveryModeEnabled: !1,
                                isLauncherDiscoveryModeClosing: !1,
                            });
                        case 'REHYDRATE':
                            const { launcherDiscoveryMode: r } = t.state;
                            return Ve({}, e, r);
                        default:
                            return e;
                    }
                },
                messengerCards: (e = Ke, t) => {
                    switch (t.type) {
                        case 'SUBMIT_MESSENGER_CARD_ACTION_FAILURE': {
                            const n = t.componentId,
                                r = Ye({}, e);
                            return (
                                ze()(r, `${t.cardUri}.isFetching`, !1),
                                Be()(r, `${t.cardUri}.card.canvas.content.components`, e =>
                                    Object(qe.d)(n, e, !1)
                                )
                            );
                        }
                        case 'SUBMIT_MESSENGER_CARD_ACTION_SUCCESS': {
                            const n = Ye({}, e);
                            return (
                                ze()(n, `${t.card.uri}.isFetching`, !1),
                                ze()(n, `${t.card.uri}.isFetched`, !0),
                                ze()(n, `${t.card.uri}.partialCard`, t.card)
                            );
                        }
                        case 'SUBMIT_MESSENGER_CARD_ACTION_REQUEST': {
                            const n = t.componentId,
                                r = Ye({}, e);
                            return (
                                ze()(r, `${t.cardUri}.isFetching`, !0),
                                Be()(r, `${t.cardUri}.card.canvas.content.components`, e =>
                                    Object(qe.d)(n, e, !0)
                                )
                            );
                        }
                        case 'GET_CARD_CONTENT_REQUEST': {
                            const n = Ye({}, e);
                            return ze()(n, `${t.card.uri}.isContentFetching`, !0);
                        }
                        case 'GET_CARD_CONTENT_SUCCESS': {
                            const n = Ye({}, e);
                            return (
                                ze()(n, `${t.card.uri}.isFetching`, !1),
                                ze()(n, `${t.card.uri}.isFetched`, !0),
                                ze()(n, `${t.card.uri}.isContentFetched`, !0),
                                ze()(n, `${t.card.uri}.isContentError`, !1),
                                ze()(n, `${t.card.uri}.isContentFetching`, !1),
                                ze()(n, `${t.card.uri}.card`, t.card),
                                ze()(n, `${t.card.uri}.card.canvas.content`, t.content),
                                Be()(n, `${t.card.uri}.card`, qe.e)
                            );
                        }
                        case 'GET_CARD_CONTENT_FAILURE': {
                            const n = Ye({}, e);
                            return (
                                ze()(n, `${t.card.uri}.isContentError`, !0),
                                ze()(n, `${t.card.uri}.isContentFetching`, !1),
                                ze()(n, `${t.card.uri}.partialCard`, t.card)
                            );
                        }
                        default:
                            return e;
                    }
                },
                homeScreen: (e = et, t) => {
                    switch (t.type) {
                        case 'GET_HOME_SCREEN_CARDS_REQUEST':
                            return Object.assign({}, e, {
                                isFetching: !0,
                                isFetched: !1,
                                isFailed: !1,
                            });
                        case 'GET_HOME_SCREEN_CARDS_SUCCESS':
                            return Object.assign({}, e, {
                                isFetching: !1,
                                isFetched: !0,
                                isFailed: !1,
                                cardUris: t.cardUris,
                                hasMoreConversations: t.hasMoreConversations,
                            });
                        case 'GET_HOME_SCREEN_CARDS_FAILURE':
                            return Object.assign({}, e, {
                                isFetching: !1,
                                isFetched: !1,
                                isFailed: !0,
                                error: t.error,
                            });
                        case 'CREATE_OR_UPDATE_USER_SUCCESS': {
                            const n = t.user.role;
                            return n === e.userRole
                                ? e
                                : (function(e) {
                                      for (var t = 1; t < arguments.length; t++) {
                                          var n = null != arguments[t] ? arguments[t] : {};
                                          t % 2
                                              ? Xe(n, !0).forEach(function(t) {
                                                    Ze(e, t, n[t]);
                                                })
                                              : Object.getOwnPropertyDescriptors
                                              ? Object.defineProperties(
                                                    e,
                                                    Object.getOwnPropertyDescriptors(n)
                                                )
                                              : Xe(n).forEach(function(t) {
                                                    Object.defineProperty(
                                                        e,
                                                        t,
                                                        Object.getOwnPropertyDescriptor(n, t)
                                                    );
                                                });
                                      }
                                      return e;
                                  })({}, et, { userRole: n });
                        }
                        default:
                            return e;
                    }
                },
                messengerSheet: (e = it, t) => {
                    switch (t.type) {
                        case 'START_NAVIGATION':
                            return nt({}, e, { isNavigating: !0 });
                        case 'FINISH_NAVIGATION':
                            return nt({}, e, { isNavigating: !1 });
                        case 'SET_PROXY_LOADED_STATUS':
                            return nt({}, e, { isProxyLoaded: t.isLoaded });
                        case 'OPEN_SHEET':
                            return nt({}, e, {
                                url: t.url,
                                isOpen: !0,
                                sourceCard: { cardUri: t.cardUri, componentId: t.componentId },
                            });
                        case 'OPEN_SHEET_WITH_TOKEN':
                            return nt({}, e, {
                                url: t.url,
                                isOpen: !0,
                                sourceCard: { token: t.token, componentId: t.componentId },
                            });
                        case 'CLOSE_SHEET':
                            return it;
                        case 'SET_SHEET_TITLE':
                            return nt({}, e, { sheetTitle: t.sheetTitle });
                        case 'FETCH_MESSENGER_SHEET_DATA_REQUEST':
                            return nt({}, e, { isSheetsDataLoading: !0 });
                        case 'FETCH_MESSENGER_SHEET_DATA_SUCCESS':
                            return nt({}, e, {
                                isSheetsDataLoading: !1,
                                isSheetsDataLoaded: !0,
                                data: t.data,
                            });
                        case 'FETCH_MESSENGER_SHEET_DATA_FAILURE':
                            return nt({}, e, { isSheetsDataLoading: !1 });
                        default:
                            return e;
                    }
                },
                messengerAlerts: function(e = lt, t) {
                    switch (t.type) {
                        case 'SHOW_ALERT':
                            return (function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                        ? ut(n, !0).forEach(function(t) {
                                              dt(e, t, n[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(
                                              e,
                                              Object.getOwnPropertyDescriptors(n)
                                          )
                                        : ut(n).forEach(function(t) {
                                              Object.defineProperty(
                                                  e,
                                                  t,
                                                  Object.getOwnPropertyDescriptor(n, t)
                                              );
                                          });
                                }
                                return e;
                            })({}, e, {
                                isShown: !0,
                                alertType: t.payload.alertType,
                                alertPayload: t.payload.alertPayload,
                            });
                        case 'CLOSE_ALERT':
                            return lt;
                        default:
                            return e;
                    }
                },
                customizationOverrides: function(e = ft, t) {
                    switch (t.type) {
                        case 'CREATE_CUSTOMIZATION_OVERRIDE':
                            return (function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                        ? pt(n, !0).forEach(function(t) {
                                              ht(e, t, n[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(
                                              e,
                                              Object.getOwnPropertyDescriptors(n)
                                          )
                                        : pt(n).forEach(function(t) {
                                              Object.defineProperty(
                                                  e,
                                                  t,
                                                  Object.getOwnPropertyDescriptor(n, t)
                                              );
                                          });
                                }
                                return e;
                            })({}, e, {}, t.customizationAttributes);
                        default:
                            return e;
                    }
                },
                accessibility: function(e = mt, t) {
                    switch (t.type) {
                        case 'SET_TAB_NAVIGATION':
                            return _t({}, e, { tabNavigation: t.tabNavigation });
                        case 'SET_ACCESSIBILITY_THEME':
                            return _t({}, e, {
                                accessibilityTheme: t.accessibilityTheme,
                                secondaryAccessibilityTheme: t.secondaryAccessibilityTheme,
                            });
                        default:
                            return e;
                    }
                },
                tour: (e = vt, t) => {
                    switch (t.type) {
                        case 'FETCH_TOUR_REQUEST':
                            return Ot({}, e, { isFetching: !0, isFetched: !1, fetchingFailed: !1 });
                        case 'TOUR_UPDATE_FAILED':
                            return Ot({}, e, { updateFailed: !0 });
                        case 'FETCH_TOUR_SUCCESS':
                            return Ot({}, e, {
                                isFetching: !1,
                                isFetched: !0,
                                fetchingFailed: !1,
                                isPreviewing: t.isPreviewingTour,
                                activeTour: t.tour,
                            });
                        case 'FETCH_TOUR_FAILURE':
                            return Ot({}, e, { isFetching: !1, isFetched: !1, fetchingFailed: !0 });
                        case 'PROGRESS_TOUR':
                            return e.activeTour
                                ? Ot({}, e, {
                                      activeTour: Ot({}, e.activeTour, {
                                          activeStepId: t.activeStepId,
                                      }),
                                  })
                                : Ot({}, e);
                        case 'START_TOUR_PREVIEW':
                            return Ot({}, e, {
                                isFetched: !0,
                                isPreviewing: !0,
                                activeTour: t.tour,
                            });
                        case 'STOP_TOUR_PREVIEW':
                            return Ot({}, e, {
                                isFetched: !1,
                                isPreviewing: !1,
                                activeTour: void 0,
                            });
                        case 'COMPLETE_TOUR':
                        case 'STOP_TOUR':
                            return vt;
                        case 'MARK_ACTIVE_TOUR_AS_COMPLETED':
                            return e.activeTour
                                ? Ot({}, e, {
                                      activeTour: Ot({}, e.activeTour, { isCompleted: !0 }),
                                  })
                                : Ot({}, e);
                        case 'CHANGE_VIDEO_MUTED':
                            return Ot({}, e, {
                                videoAudioMuted: t.muted,
                                userHasInteractedWithVideo: !0,
                            });
                        case 'PROGRESS_TOUR_REQUEST_STARTED':
                            return Ot({}, e, { isAwaitingProgress: !0 });
                        case 'PROGRESS_TOUR_REQUEST_FINISHED':
                            return Ot({}, e, { isAwaitingProgress: !1 });
                        default:
                            return e;
                    }
                },
                triggers: function(e = It, t) {
                    const n = Ct({}, e.triggers);
                    switch (t.type) {
                        case 'ADD_TRIGGER':
                            return (n[t.trigger.id] = t.trigger), Ct({}, e, { triggers: n });
                        case 'REMOVE_TRIGGER':
                            return delete n[t.triggerId], Ct({}, e, { triggers: n });
                        case 'ACTIVATE_TRIGGER':
                            return Ct({}, e, { active: t.triggerId, failed: !1 });
                        case 'DEACTIVATE_TRIGGER':
                            return Ct({}, e, { active: null });
                        case 'ACTIVATE_TRIGGER_FAILED':
                            return Ct({}, e, { failed: !0 });
                        default:
                            return e;
                    }
                },
                inboundSuggestions: function(e = Ut, t) {
                    switch (t.type) {
                        case 'ADD_INBOUND_SUGGESTIONS':
                            return Mt({}, e, {
                                allSuggestions: [...e.allSuggestions, t.composerSuggestions],
                            });
                        case 'REMOVE_INBOUND_SUGGESTIONS':
                            return Mt({}, e, {
                                allSuggestions: jt()(
                                    e.allSuggestions,
                                    e => e.rulesetId !== t.rulesetId
                                ),
                            });
                        case 'UPDATE_SERVER_SIDE_INBOUND_SUGGESTIONS': {
                            let n = e.allSuggestions;
                            return (
                                e.serverSideSuggestions &&
                                    (n = jt()(
                                        n,
                                        t =>
                                            e.serverSideSuggestions &&
                                            t.rulesetId !== e.serverSideSuggestions.rulesetId
                                    )),
                                t.composerSuggestions &&
                                    (n = At()([...n, t.composerSuggestions], 'rulesetId')),
                                Mt({}, e, {
                                    allSuggestions: n,
                                    serverSideSuggestions: t.composerSuggestions,
                                })
                            );
                        }
                        case 'UPDATE_PREVIEW_INBOUND_SUGGESTIONS':
                            return Mt({}, e, { previewSuggestions: t.composerSuggestions });
                        default:
                            return e;
                    }
                },
                banners: function(e = Dt, t) {
                    switch (t.type) {
                        case 'RECEIVE_BANNERS':
                            if (t.banners) return t.banners;
                    }
                    return e;
                },
                composer: (e = xt, t) => {
                    switch (t.type) {
                        case 'COMPOSER_CONTENT_CHANGED':
                            return (function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                        ? Lt(n, !0).forEach(function(t) {
                                              kt(e, t, n[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(
                                              e,
                                              Object.getOwnPropertyDescriptors(n)
                                          )
                                        : Lt(n).forEach(function(t) {
                                              Object.defineProperty(
                                                  e,
                                                  t,
                                                  Object.getOwnPropertyDescriptor(n, t)
                                              );
                                          });
                                }
                                return e;
                            })({}, e, { content: t.composerContent });
                        default:
                            return e;
                    }
                },
                predictiveAnswers: (e = Ft, t) => {
                    switch (t.type) {
                        case 'SET_PREDICTIVE_ANSWERS':
                            return (function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                        ? Gt(n, !0).forEach(function(t) {
                                              Vt(e, t, n[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(
                                              e,
                                              Object.getOwnPropertyDescriptors(n)
                                          )
                                        : Gt(n).forEach(function(t) {
                                              Object.defineProperty(
                                                  e,
                                                  t,
                                                  Object.getOwnPropertyDescriptor(n, t)
                                              );
                                          });
                                }
                                return e;
                            })({}, e, { composerSuggestions: t.predictiveAnswersSuggestions });
                        default:
                            return e;
                    }
                },
                lightweightApp: (e = Bt, t) => {
                    switch (t.type) {
                        case 'SET_LIGHTWEIGHT_APP_ACTIVE':
                            return (function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                        ? Ht(n, !0).forEach(function(t) {
                                              $t(e, t, n[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(
                                              e,
                                              Object.getOwnPropertyDescriptors(n)
                                          )
                                        : Ht(n).forEach(function(t) {
                                              Object.defineProperty(
                                                  e,
                                                  t,
                                                  Object.getOwnPropertyDescriptor(n, t)
                                              );
                                          });
                                }
                                return e;
                            })({}, e, { isActive: t.isActive });
                        default:
                            return e;
                    }
                },
            }),
            Jt = n(215),
            Kt = n.n(Jt),
            Xt = n(14),
            Zt = n.n(Xt),
            en = n(10);
        function tn(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function nn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? tn(n, !0).forEach(function(t) {
                          rn(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : tn(n).forEach(function(t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        }
        function rn(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        const sn = e => {
                if (
                    !(() => {
                        var e, t;
                        const n =
                            null === (e = window) || void 0 === e
                                ? void 0
                                : null === (t = e.parent) || void 0 === t
                                ? void 0
                                : t.ga;
                        return (
                            'function' == typeof n &&
                            'function' == typeof (null == n ? void 0 : n.getAll) &&
                            (null == n ? void 0 : n.loaded)
                        );
                    })()
                )
                    return;
                const t = window.parent.ga.getAll();
                if (Zt()(t) && t.length) {
                    if (e) {
                        const n = on(t, e);
                        return (
                            n ||
                            (window.parent.ga('create', e, 'auto', 'intercomMessenger'),
                            on(window.parent.ga.getAll(), e))
                        );
                    }
                    return t[0];
                }
            },
            on = (e, t) =>
                Kt()(e, function(e) {
                    try {
                        return e.b.data.values[':trackingId'] === t;
                    } catch (e) {}
                }),
            an = e =>
                Object.entries(e).reduce((e, [t, n]) => {
                    if (n) return e ? e + `, ${t}: ${n}` : `${t}: '${n}'`;
                }, null),
            cn = (e, t) => {
                const { parts: n, composerState: r } = e,
                    i = n[0],
                    s = t || (i && i.id),
                    o = s && -1 !== s.indexOf('message-'),
                    a = {
                        isCustomBot: !r.visible,
                        isAdmin: i && i.author && n[0] && n[0].author.isAdmin,
                    },
                    c = { messageId: s && s.replace('message-', '') };
                return nn({}, a, {}, o ? c : {});
            },
            un = [
                'OPEN_MESSENGER',
                'CLOSE_MESSENGER',
                'CREATE_CONVERSATION_SUCCESS',
                'CREATE_COMMENT_SUCCESS',
                'UPDATE_USER_SUPPLIED_EMAIL_SUCCESS',
                'SUBMIT_MESSENGER_CARD_ACTION_SUCCESS',
                'RECORD_MESSAGE_SENT',
                'MARK_CONVERSATION_AS_READ_REQUEST',
                'UPFRONT_EMAIL_COLLECTION_SUBMITTED',
            ];
        var dn = e => t => n => {
                const r = e.getState(),
                    i = t(n);
                if (-1 === un.indexOf(n.type) || !r.app.features.googleAnalytics) return i;
                const s = r.app.customGoogleAnalyticsTrackerId,
                    o = sn(s);
                if (!o)
                    return (
                        Object(en.b)(
                            'Intercom - Google Analytics is not installed or configured, have you forgotten to include it?'
                        ),
                        i
                    );
                const a = (e => ({ name: t, metadata: n = {}, nonInteraction: r = !1 } = {}) => {
                    try {
                        e.send(
                            'event',
                            nn(
                                {
                                    eventCategory: 'Intercom Messenger',
                                    eventAction: t,
                                    eventLabel: an(n),
                                },
                                r ? { nonInteraction: r } : {}
                            )
                        );
                    } catch (e) {
                        Object(en.b)(
                            'Intercom - Something went wrong sending the Google Analytics event',
                            e
                        );
                    }
                })(o);
                switch (n.type) {
                    case 'OPEN_MESSENGER':
                        a({ name: 'Opened Messenger' });
                        break;
                    case 'CLOSE_MESSENGER':
                        a({ name: 'Closed Messenger' });
                        break;
                    case 'CREATE_CONVERSATION_SUCCESS':
                        a({ name: 'Started New Conversation' });
                        break;
                    case 'CREATE_COMMENT_SUCCESS': {
                        const e = r.conversations.byId[n.conversationId],
                            { isCustomBot: t, messageId: i, isAdmin: s } = cn(e),
                            o = { [`${t ? 'Custom Bot' : 'Message'} ID`]: i };
                        a({ name: 'Sent a Reply', metadata: s || t ? o : void 0 });
                        break;
                    }
                    case 'UPFRONT_EMAIL_COLLECTION_SUBMITTED':
                    case 'UPDATE_USER_SUPPLIED_EMAIL_SUCCESS':
                        a({ name: 'Provided Email Address' });
                        break;
                    case 'SUBMIT_MESSENGER_CARD_ACTION_SUCCESS':
                        a({
                            name: n.card.completed ? 'Completed App Flow' : 'Interacted with App',
                            metadata: {
                                'App Name': n.card.app_package_name,
                                Location:
                                    ((c = r.app.viewStack),
                                    c.length > 0
                                        ? { 'home-screen': 'Home', conversation: 'Conversation' }[
                                              c[c.length - 1]
                                          ]
                                        : 'Conversation'),
                            },
                        });
                        break;
                    case 'RECORD_MESSAGE_SENT': {
                        const e = r.conversations.byId[n.conversationId],
                            { isCustomBot: t, messageId: i } = cn(e, n.partId);
                        i &&
                            a({
                                name: 'Triggered Message',
                                metadata: { [`${t ? 'Custom Bot' : 'Message'} ID`]: i },
                                nonInteraction: !0,
                            });
                        break;
                    }
                    case 'MARK_CONVERSATION_AS_READ_REQUEST': {
                        if (r.conversations.byId[n.conversationId].read) return;
                        const e = r.conversations.byId[n.conversationId],
                            { isCustomBot: t, messageId: i } = cn(e);
                        a({
                            name: 'Viewed Message',
                            metadata: { [`${t ? 'Custom Bot' : 'Message'} ID`]: i },
                            nonInteraction: !0,
                        });
                        break;
                    }
                }
                var c;
                return i;
            },
            ln = n(22),
            pn = n(79);
        function hn(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function fn(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        function gn(e, t) {
            return void 0 !== t && t !== e;
        }
        function _n(e, t, n, r, i, s) {
            e.write(t, n, {
                domain: i,
                path: '/',
                expires: new Date(ln.b.now() + r),
                sameSite: s ? 'none' : 'lax',
                secure: s,
            });
        }
        function bn(e, t) {
            return (function(e) {
                return null != e;
            })(e)
                ? e
                : t;
        }
        function mn({ domainSetting: e, originCookieDomain: t, meta: n = {} }) {
            if ('none' !== e) {
                if (
                    (void 0 !== e &&
                        Object(en.b)(
                            'Intercom Messenger error: cookie_domain attribute supports only `none` option'
                        ),
                    t)
                )
                    return `.${t}`;
                {
                    const e = Object(pn.a)(),
                        t = (e || '').split(':')[0];
                    return (
                        Object(j.g)(
                            'missingOriginDomain',
                            (function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                        ? hn(n, !0).forEach(function(t) {
                                              fn(e, t, n[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(
                                              e,
                                              Object.getOwnPropertyDescriptors(n)
                                          )
                                        : hn(n).forEach(function(t) {
                                              Object.defineProperty(
                                                  e,
                                                  t,
                                                  Object.getOwnPropertyDescriptor(n, t)
                                              );
                                          });
                                }
                                return e;
                            })({}, n, { host: t, rawHost: e })
                        ),
                        'localhost' === t ? '' : t
                    );
                }
            }
        }
        var En = n(45),
            On = n(31),
            Sn = n.n(On),
            vn = n(218),
            yn = n.n(vn),
            Cn = n(38);
        const Tn = { increment: j.c, count: j.a, timing: j.f },
            In = { info: j.d, error: j.b };
        function wn(e, t, n, r, i) {
            let s;
            try {
                s = new t(e.endpoints, In, Tn, n, r, () => {}, i);
            } catch (e) {
                Object(j.b)(e), An(s);
            }
            return s;
        }
        function An(e) {
            if (void 0 !== e)
                try {
                    e.shutdown();
                } catch (e) {
                    Object(j.b)(e);
                }
        }
        function Rn(e, t, n, r, i, s, o, a, c, u, d) {
            if (!xn(t, n, u)) return e;
            if ((An(e), !Dn(n))) return;
            let p = 'pending';
            const h = wn(
                n,
                yn.a,
                () => {
                    p = Nn(p, r, s);
                },
                () => {
                    p = Mn();
                },
                d
            );
            try {
                h.subscribeToAllTopics(), Pn(h, r, i, o, a, c, l.g);
            } catch (e) {
                Object(j.b)(e), An(h);
            }
            return h;
        }
        const jn = Sn()(e => e(), 5e3, { leading: !0, trailing: !0 });
        function Nn(e, t, n) {
            return (
                'disconnected' === e &&
                    (Object(u.d)() <= 5 &&
                        (Object(j.g)('debounceGetUnreadConversations'), Object(u.g)()),
                    jn(() => t.dispatch(n(h.b)))),
                Object(u.c)() || (Object(j.g)('realTimeConnected'), Object(u.n)(!0)),
                'connected'
            );
        }
        function Mn() {
            return 'disconnected';
        }
        function Pn(e, t, n, r, i, s, o) {
            const a = Sn()(e => e(), 5e3);
            e.addListener('NewComment', e => {
                const {
                    deliveryChannel: r,
                    conversationId: i,
                    createdByUserId: s,
                    createdAt: o,
                } = e.eventData;
                if (r && -1 === r.indexOf('web')) return;
                const { user: c } = t.getState(),
                    u = () => t.dispatch(n(h.b, i, !0, o));
                s === c.id ? a(u) : u();
            }),
                e.addListener('UserContentSeenByAdmin', e => {
                    const { conversationId: n } = e.eventData;
                    t.dispatch(r(n));
                }),
                e.addListener('ConversationSeen', e => {
                    const { conversationId: n } = e.eventData;
                    t.dispatch(s(n));
                }),
                e.addListener('AdminIsTyping', e => {
                    const {
                        conversationId: n,
                        adminId: r,
                        adminName: s,
                        adminAvatar: o,
                        hasDefaultAvatar: a,
                    } = e.eventData;
                    t.dispatch(i(n, r, s, Un(o, a)));
                }),
                e.addListener('MessengerCardUpdated', e => {
                    const { cardUri: r } = e.eventData,
                        i = Object(Cn.a)(t.getState());
                    i && Object(C.h)(i, r) && t.dispatch(n(h.b, i.id, !0));
                }),
                e.addListener('ConversationPartUpdated', e => {
                    const { conversationId: r } = e.eventData;
                    Object(Cn.a)(t.getState()).id === String(r) && t.dispatch(n(h.b, r, !0));
                }),
                e.addListener('StartTour', e => {
                    const { tour: n } = e.eventData,
                        { user: r } = t.getState();
                    Object(j.h)(r, 'received_nexus', 'tour', 'messenger', null, { tour_id: n.id }),
                        r.isPresent && t.dispatch(o(n.id));
                });
        }
        const Un = (e, t) => (t || 0 !== e.indexOf('http') ? void 0 : e),
            Dn = e => void 0 !== e && Array.isArray(e.endpoints) && e.endpoints.length > 0,
            Ln = e => Object(R.a)(e.split('/')).split('-')[0],
            kn = (e, t) => Ln(e) !== Ln(t),
            xn = (e, t, n) =>
                Dn(e) && Dn(t)
                    ? n || kn(e.endpoints[0], t.endpoints[0])
                    : (!Dn(e) && Dn(t)) || (Dn(e) && !Dn(t));
        const Gn = e => {
                const {
                        app: {
                            color: t,
                            secondaryColor: n,
                            name: r,
                            features: {
                                anonymousInboundMessages: i,
                                googleAnalytics: s,
                                hubspotInstalled: o,
                                inboundMessages: a,
                                marketoEnrichmentInstalled: c,
                                newConversationCard: u,
                                operatorSuggestionsNavigationEnabled: d,
                                outboundMessages: l,
                                persistAcrossPages: p,
                                selfServeIconEnabled: h,
                            },
                            launcherLogoUrl: f,
                            boundWebEvents: g,
                            helpCenterSiteUrl: b,
                            inboundConversationsDisabled: m,
                            isInstantBootEnabled: E,
                            alignment: O,
                            horizontalPadding: S,
                            verticalPadding: v,
                            isDeveloperWorkspace: y,
                            upfrontEmailCollectionSetting: C,
                            customGoogleAnalyticsTrackerId: T,
                        },
                        launcher: { isLauncherEnabled: I },
                        launcherDiscoveryMode: { hasDiscoveredLauncher: w },
                        message: { conversationId: A },
                        openOnBoot: { type: R, metadata: j },
                        user: { role: N, locale: M, hasConversations: P },
                    } = e,
                    { conversations: U } = e,
                    D = U ? U.byId : {};
                return {
                    app: {
                        color: t,
                        secondaryColor: n,
                        name: r,
                        features: {
                            anonymousInboundMessages: i,
                            googleAnalytics: s,
                            hubspotInstalled: o,
                            inboundMessages: a,
                            marketoEnrichmentInstalled: c,
                            newConversationCard: u,
                            operatorSuggestionsNavigationEnabled: d,
                            outboundMessages: l,
                            persistAcrossPages: p,
                            selfServeIconEnabled: h,
                        },
                        launcherLogoUrl: f,
                        boundWebEvents: g,
                        helpCenterSiteUrl: b,
                        inboundConversationsDisabled: m,
                        isInstantBootEnabled: E,
                        alignment: O,
                        horizontalPadding: S,
                        verticalPadding: v,
                        isDeveloperWorkspace: y,
                        upfrontEmailCollectionSetting: C,
                        customGoogleAnalyticsTrackerId: T,
                    },
                    launcher: { isLauncherEnabled: I },
                    launcherDiscoveryMode: { hasDiscoveredLauncher: w },
                    user: { role: N, locale: M, hasConversations: P },
                    message: { conversationId: A },
                    conversations: { byId: Vn(D) },
                    openOnBoot: { type: R, metadata: j },
                    operator: { lastComposerEvent: _(e) },
                };
            },
            Vn = e => {
                const t = Object.keys(e),
                    n = {};
                return (
                    t.forEach(t => {
                        const { dismissed: r, read: i } = e[t];
                        n[t] = { fetchState: 'partial', dismissed: r, read: i };
                    }),
                    n
                );
            };
        var Fn = n(114);
        let Hn = void 0,
            $n = void 0,
            Bn = void 0;
        var Wn = ({
            updateRealtimeClient: e,
            shutdownRealtimeClient: t,
            getConversation: n,
            getUnreadConversations: r,
            userContentSeenByAdmin: i,
            adminIsTyping: s,
            conversationReadElsewhere: o,
        }) => a => c => u => {
            const d = c(u);
            switch (u.type) {
                case 'CREATE_OR_UPDATE_USER_SUCCESS': {
                    const t = u.user.app.realtimeConfig,
                        c = u.user.id;
                    (Hn = e(Hn, $n, t, a, n, r, i, s, o, c !== Bn, u.user.role)),
                        ($n = t),
                        (Bn = c);
                    break;
                }
                case 'DESTROY_SESSION':
                    t(Hn), (Hn = void 0), ($n = void 0), (Bn = void 0);
            }
            if (!Hn) return d;
            switch (u.type) {
                case 'MARK_CONVERSATION_AS_READ_REQUEST':
                    Hn.sendEvent('ConversationSeen', { conversationId: u.conversationId });
                    break;
                case 'USER_IS_TYPING':
                    Hn.throttleSendEvent('UserIsTyping', { conversationId: u.conversationId }, !0);
                    break;
                case 'SUBMIT_MESSENGER_CARD_ACTION_SUCCESS':
                    Hn.sendEvent('MessengerCardUpdated', { cardUri: u.card.uri });
            }
            return d;
        };
        const zn = e => (
                window.parent &&
                    window.parent.intercomSettings &&
                    window.parent.intercomSettings.app_id &&
                    (e = `${e}-${window.parent.intercomSettings.app_id}`),
                e
            ),
            qn = e => {
                try {
                    return JSON.parse(localStorage.getItem(e));
                } catch (e) {
                    Object(j.c)('hydrate_read_error');
                }
            },
            Qn = (e, t) => {
                try {
                    localStorage.setItem(e, JSON.stringify(t));
                } catch (e) {
                    Object(j.c)('hydrate_write_error');
                }
            };
        const Yn = e => ({ type: 'REHYDRATE', state: e });
        var Jn = (e, t = 'intercom-state') => n => (...r) => {
            const i = n(...r);
            if (((t = zn(t)), !Object(S.d)())) return i;
            const s = qn(t);
            if (s) {
                const e = i.getState();
                try {
                    i.dispatch(Yn(s));
                } catch (n) {
                    Object(j.c)('hydrate_error'),
                        (function(e) {
                            try {
                                localStorage.removeItem(e);
                            } catch (e) {
                                Object(j.c)('hydrate_remove_error');
                            }
                        })(t),
                        i.dispatch(Yn(e));
                }
            }
            return (
                i.subscribe(() => {
                    Qn(t, e(i.getState()));
                }),
                i
            );
        };
        var Kn = () => e => t => {
                const n = e(t);
                switch (t.type) {
                    case 'DESTROY_SESSION':
                        Object(S.d)() &&
                            t.clearCookies &&
                            localStorage.removeItem(zn('intercom-state'));
                }
                return n;
            },
            Xn = {
                play(e) {
                    if (!S.a.hasAudioSupport()) return;
                    const t = this.load(e);
                    if (t) {
                        const e = t.play();
                        e && e.catch(() => {});
                    }
                },
                playFile(e) {
                    e && S.a.hasAudioSupport() && this.play(n(207)(`./${e}`));
                },
                load(e) {
                    return this.audio[e] || (this.audio[e] = new Audio(e)), this.audio[e];
                },
                playNotification: Sn()(
                    function(e) {
                        this.play(n(207)(`./${e}`));
                    },
                    3e3,
                    { leading: !0, trailing: !1 }
                ),
                audio: {},
            },
            Zn = n(13),
            er = n(86);
        let tr = (() => {
            const e = Zn.b.get('played-notifications');
            return e ? JSON.parse(e) : {};
        })();
        const nr = (e, t) => {
                (tr[e] = t), Zn.b.set('played-notifications', JSON.stringify(tr));
            },
            rr = (e, t) =>
                !((e, t) => {
                    const n = tr[e];
                    return n === t || -1 === n;
                })(e, t.id),
            ir = (e, t) => {
                let n = !1;
                e.forEach(e => {
                    const t = Object(R.a)(e.parts);
                    rr(e.id, t) && (n = !0), nr(e.id, t.id);
                }),
                    n && Xn.playNotification(t);
            },
            sr = (e, t) => {
                switch (e) {
                    case 'CREATE_COMMENT_FAILURE':
                    case 'CREATE_CONVERSATION_FAILURE':
                        return 'failed.mp3';
                    case 'CREATE_COMMENT_REQUEST':
                    case 'CREATE_CONVERSATION_REQUEST':
                        return 'submit.mp3';
                    default:
                        return t && t.author.isBot ? 'operator.mp3' : 'notification.mp3';
                }
            };
        var or = e => t => n => {
            const r = t(n),
                i = e.getState();
            if (i.app.isAudioEnabled && !i.app.isBoundEventCreatorOpen) {
                switch (n.type) {
                    case 'CREATE_COMMENT_REQUEST':
                    case 'CREATE_CONVERSATION_REQUEST':
                        Xn.playFile(sr(n.type));
                        break;
                    case 'CREATE_COMMENT_FAILURE':
                    case 'CREATE_CONVERSATION_FAILURE':
                        Xn.playFile(sr(n.type));
                        break;
                    case 'OPEN_MESSAGE': {
                        const e = i.conversations.byId[n.conversationId];
                        ir([e], sr(n.type));
                        break;
                    }
                    case 'GET_CONVERSATION_SUCCESS': {
                        const { conversation: e, skipNotification: t } = n;
                        if (e.read) return;
                        const r = Object(R.a)(e.parts);
                        if (!0 === t || Object(er.a)(r.partType)) return void nr(e.id, r.id);
                        ir([e], sr(n.type, r));
                        break;
                    }
                    case 'GET_CONVERSATIONS_SUCCESS': {
                        const e = Object(A.a)(i);
                        ir(e, sr(n.type));
                        break;
                    }
                    case 'CREATE_OR_UPDATE_USER_SUCCESS': {
                        const { unreadDismissedConversationIds: e } = n.user;
                        e.forEach(e => {
                            nr(e, -1);
                        });
                        break;
                    }
                }
                return r;
            }
        };
        const ar = [],
            cr = [];
        var ur = ({ getState: e }) => t => n => (
                (function(e, t) {
                    const { user: n, app: r, article: i } = e();
                    switch (t.type) {
                        case 'OPEN_LAUNCHER_DISCOVERY_MODE':
                            return [
                                Object(j.i)(
                                    n,
                                    'received',
                                    'message',
                                    'messenger',
                                    'from_launcher_discovery_mode'
                                ),
                            ];
                        case 'CREATE_COMMENT_SUCCESS':
                            return [
                                Object(j.i)(
                                    n,
                                    'sent',
                                    'reply',
                                    t.isBorderless ? 'borderless' : 'messenger',
                                    'in_conversation',
                                    {
                                        conversation_id: t.conversationId,
                                        comment_id: t.part.id,
                                        is_attachment: Object(u.h)(t.part.body),
                                        is_annotated: t.isAnnotatedImage || !1,
                                        within_office_hours: Object(u.j)(t.officeHoursResponse),
                                        teammate_status: Object(u.e)(t.lastParticipatingAdmin),
                                        time_since_last_active_in_minutes: Object(u.f)(
                                            t.lastParticipatingAdmin
                                        ),
                                        from_messenger_suggested_content:
                                            t.fromMessengerSuggestedContent,
                                    }
                                ),
                            ];
                        case 'CREATE_CONVERSATION_SUCCESS':
                            const e =
                                    -1 !==
                                    ['custom_bot', 'resolution_bot_auto_suggest'].indexOf(
                                        t.conversationTriggerType
                                    ),
                                s = 'resolution_bot_auto_suggest' === t.conversationTriggerType;
                            return [
                                Object(j.i)(
                                    n,
                                    'sent',
                                    'message',
                                    'messenger',
                                    'in_new_conversation',
                                    {
                                        conversation_id: t.conversation.id,
                                        is_attachment: Object(u.h)(t.conversation.parts[0].body),
                                        is_annotated: t.isAnnotatedImage || !1,
                                        within_office_hours: Object(u.j)(t.officeHoursResponse),
                                        from_suggestion: e,
                                        from_messenger_suggested_content: s,
                                        trigger_type: t.conversationTriggerType,
                                    }
                                ),
                            ];
                        case 'UPDATE_CONVERSATION_FORM_REQUEST':
                            return [
                                Object(j.i)(n, 'sent', 'reply', 'messenger', 'in_conversation', {
                                    type: 'automated_lead_qualification',
                                    conversation_id: t.conversationId,
                                    part_id: t.partId,
                                    attribute_identifier: t.identifier,
                                    reply: t.value,
                                    attribute_type: t.identifierType,
                                    form_type: t.formType,
                                    attribute_is_custom_data: t.isCustomData,
                                }),
                            ];
                        case 'CREATE_REACTION_REQUEST':
                            return [
                                Object(j.i)(
                                    n,
                                    'sent',
                                    'reaction',
                                    t.isFromConversation ? 'messenger' : 'in_app',
                                    t.isFromConversation ? 'in_conversation' : 'from_full',
                                    { conversation_id: t.conversationId }
                                ),
                            ];
                        case 'OPEN_ARTICLE':
                            const o = Object.assign(
                                {
                                    owner: 'educate',
                                    article_id: t.article.id,
                                    conversation_id: r.conversationId,
                                },
                                t.metricMetadata
                            );
                            return [
                                Object(j.i)(
                                    n,
                                    'viewed',
                                    'article',
                                    'in_app',
                                    'from_conversation',
                                    o,
                                    'educate_event'
                                ),
                            ];
                        case 'CREATE_ARTICLE_REACTION_REQUEST':
                            const a =
                                i &&
                                i.reactionsReply &&
                                i.reactionsReply.reactionSet[t.reactionIndex] &&
                                i.reactionsReply.reactionSet[t.reactionIndex].emoji;
                            return [
                                Object(j.i)(
                                    n,
                                    'sent',
                                    'reaction',
                                    'in_app',
                                    'on_article',
                                    {
                                        owner: 'educate',
                                        reaction: a,
                                        article_id: t.articleId,
                                        conversation_id: r.conversationId,
                                    },
                                    'educate_event'
                                ),
                            ];
                        case 'CREATE_EVENT':
                            return t.boundEventMetadata
                                ? [
                                      Object(j.i)(
                                          n,
                                          'triggered',
                                          'bound_event',
                                          'in_app',
                                          'from_customer_site',
                                          Object.assign(t.boundEventMetadata, {
                                              event_name: t.name,
                                          })
                                      ),
                                  ]
                                : [];
                        default:
                            return [];
                    }
                })(e, n).forEach(e => Object(j.m)(e)),
                'DESTROY_SESSION' === n.type && (ar.splice(0), cr.splice(0)),
                t(n)
            ),
            dr =
                !0 === parent.__INTERCOM_REDUX_DEV_TOOLS__ &&
                parent.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
                    ? parent.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: !1, traceLimit: 25 })
                    : () => e => e;
        const lr = Wn({
                updateRealtimeClient: Rn,
                shutdownRealtimeClient: An,
                getConversation: v.l,
                getUnreadConversations: Fn.b,
                userContentSeenByAdmin: v.s,
                adminIsTyping: v.a,
                conversationReadElsewhere: v.c,
            }),
            pr = (function(e) {
                let t, n;
                return r => i => s => {
                    const o = r.getState();
                    switch (s.type) {
                        case 'CREATE_OR_UPDATE_USER_SUCCESS': {
                            if (!o.session) return;
                            const { appId: r } = o.session,
                                { anonymousSessionDuration: i } = o.user,
                                { anonymousId: c, anonymousSession: u } = s.user,
                                { originCookieDomain: d } = s.user.app,
                                { crossSiteCookies: l } = s.user.app.features,
                                p = mn({
                                    domainSetting: o.app.cookieDomain,
                                    originCookieDomain: d,
                                    meta: { action: s.type, role: s.user && s.user.role },
                                });
                            if (gn(t, c)) {
                                const n = bn(i, 2333e7);
                                _n(e, Object(a.a)(r), c, n, p, l), (t = c);
                            }
                            if (gn(n, u)) {
                                const t = bn(i, 6048e5);
                                _n(e, Object(a.b)(r), u, t, p, l), (n = u);
                            }
                            break;
                        }
                        case 'DESTROY_SESSION': {
                            const { session: t } = o,
                                { originCookieDomain: n } = o.app,
                                r = mn({
                                    domainSetting: o.app.cookieDomain,
                                    originCookieDomain: n,
                                    meta: { action: s.type, role: s.user && s.user.role },
                                });
                            if (t && s.clearCookies) {
                                const { appId: n } = t;
                                e.clear(Object(a.b)(n), { domain: r, path: '/' }),
                                    e.clear(Object(a.a)(n), { domain: r, path: '/' }),
                                    e.clear(Object(a.d)(n), { domain: r, path: '/' });
                            }
                            break;
                        }
                    }
                    return i(s);
                };
            })(o.a),
            hr = dr(),
            fr = Jn(Gn);
        var gr = e =>
            Object(U.createStore)(
                Yt,
                e,
                Object(U.compose)(
                    Object(U.applyMiddleware)(L.a, ur, or, dn, lr, pr, Kn, En.d),
                    fr,
                    hr
                )
            );
        var _r = n(8),
            br = n(57),
            mr = n(64),
            Er = n(44),
            Or = n(219),
            Sr = n.n(Or),
            vr = n(220),
            yr = n.n(vr);
        const Cr = [
            'app_id',
            'user_id',
            'email',
            'user_hash',
            'session_duration',
            'custom_data',
            'user_data',
            'widget',
            'custom_launcher_selector',
            'hide_default_launcher',
            'alignment',
            'horizontal_padding',
            'vertical_padding',
            'cookie_domain',
            'background_color',
            'action_color',
        ];
        function Tr(e) {
            return !Ge()(e);
        }
        function Ir(e) {
            return Cr.indexOf(e) < 0;
        }
        function wr(e) {
            return Object.keys(e)
                .filter(Ir)
                .filter(Tr)
                .reduce((t, n) => ((t[n] = e[n]), t), {});
        }
        function Ar(e) {
            return Object.keys(e)
                .filter(Tr)
                .reduce((t, n) => {
                    const r = e[n];
                    return (
                        (function(e) {
                            return null != e;
                        })(r) && (t[n] = r),
                        t
                    );
                }, {});
        }
        function Rr(e) {
            return Object.assign(
                (function(e) {
                    return e.custom_data ? wr(e.custom_data) : {};
                })(e),
                wr(e)
            );
        }
        function jr(e) {
            return (
                (function(e) {
                    if (!e.user_data) return;
                    return Ar({
                        appId: e.app_id,
                        email: e.user_data.email,
                        userId: e.user_data.user_id,
                        userHash: e.user_data.user_hash,
                    });
                })(e) ||
                (function(e) {
                    return Ar({
                        appId: e.app_id,
                        email: e.email,
                        userId: e.user_id,
                        userHash: e.user_hash,
                    });
                })(e)
            );
        }
        function Nr(e) {
            return e &&
                e.widget &&
                !Ge()(e.widget.activator) &&
                '#IntercomDefaultWidget' !== e.widget.activator
                ? e.widget.activator
                : null;
        }
        function Mr(e) {
            return Ge()(e.custom_launcher_selector) ? Nr(e) : e.custom_launcher_selector;
        }
        function Pr(e) {
            return yr()(e.hide_default_launcher)
                ? e.hide_default_launcher
                    ? 'hide'
                    : 'show'
                : (function(e) {
                      return e.widget && '#IntercomDefaultWidget' === e.widget.activator
                          ? 'show'
                          : 'not-present';
                  })(e);
        }
        function Ur(e) {
            return e.session_duration || null;
        }
        function Dr(e) {
            const t = {
                alignment: e.alignment,
                horizontalPadding: e.horizontal_padding,
                verticalPadding: e.vertical_padding,
                cookieDomain: e.cookie_domain,
                color: e.action_color,
                secondaryColor: e.background_color,
            };
            return Sr()(t, e => void 0 !== e);
        }
        var Lr = n(16),
            kr = n(150),
            xr = n(23),
            Gr = n.n(xr);
        function Vr(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        const Fr = Gr()('intercom.client-matching.client-match-object.base');
        class base_BaseClientMatchObject {
            constructor(e) {
                Vr(this, '_ruleset', void 0),
                    Vr(this, '_predicateChain', void 0),
                    (this._ruleset = e),
                    (this._predicateChain = new predicate_chain_PredicateChain(e, () => {}));
            }
            getRuleset() {
                return this._ruleset;
            }
            getRulesetId() {
                return this._ruleset.ruleset_id;
            }
            getObjectType() {
                return this._ruleset.ruleset_link_object_type;
            }
            getSerializedObject() {
                return this._ruleset.serialized_object;
            }
            evaluatePredicates() {
                return this._predicateChain.evaluate();
            }
            canRematch() {
                return 'transient_match' === this.getRuleset().ruleset_match_behavior;
            }
            async match(e, t) {
                Fr(`.match called [${this.getObjectType()}]`, this.getRuleset());
                const n = e.getState(),
                    r = this.getRuleset(),
                    i = this.onPreMatch(e);
                let s;
                try {
                    const e = h.b
                            .rulesetConditionSatisfied(
                                n.session,
                                r.ruleset_id,
                                r.ruleset_link_id,
                                r.user_id,
                                r.company_id,
                                r.predicates,
                                r.checkpoint_id
                            )
                            .then(e => this.selectMatchObject(e)),
                        t = this.getSerializedObject();
                    s = t ? await Promise.resolve(t) : await e;
                } catch (e) {
                    return Object(j.b)(
                        `Call to /match failed, unable to complete client match rulesetId=${this.getRulesetId()}`
                    );
                }
                this.onMatch(s, e, i, t);
            }
            selectMatchObject(e) {
                return e;
            }
            onPreMatch(e) {}
            onMatch(e, t, n, r) {}
            unmatch(e) {
                Fr(`.unmatch called [${this.getObjectType()}]`, this.getRuleset()),
                    this.onUnmatch(e);
            }
            onUnmatch(e) {}
        }
        var Hr = n(109);
        class banner_BannerClientMatchObject extends base_BaseClientMatchObject {
            selectMatchObject(e) {
                return e.banner;
            }
            onMatch(e, t) {
                if (e) {
                    const n = t.getState().banners || [];
                    n.push(h.b.buildBanner(e)), t.dispatch(Object(Hr.b)(n));
                }
            }
        }
        class tour_TourClientMatchObject extends base_BaseClientMatchObject {
            selectMatchObject(e) {
                return e.tour;
            }
            onPreMatch() {
                var e, t, n;
                return {
                    currentUrl:
                        null === (e = window) || void 0 === e
                            ? void 0
                            : null === (t = e.parent) || void 0 === t
                            ? void 0
                            : null === (n = t.location) || void 0 === n
                            ? void 0
                            : n.pathname,
                };
            }
            onMatch(e, t, n) {
                var r, i, s;
                t.dispatch(Object(l.j)(h.b.buildTour(e))),
                    n.currentUrl !==
                        (null === (r = window) || void 0 === r
                            ? void 0
                            : null === (i = r.parent) || void 0 === i
                            ? void 0
                            : null === (s = i.location) || void 0 === s
                            ? void 0
                            : s.pathname) &&
                        (Object(j.c)('tour_match_url_mismatch'),
                        Object(j.b)(`tour_match_url_mismatch rulesetId=${this.getRulesetId()}`));
            }
        }
        class inbound_trigger_InboundTriggerClientMatchObject extends base_BaseClientMatchObject {
            selectMatchObject(e) {
                return e.composerSuggestions;
            }
            onMatch(e, t) {
                t.dispatch(Object(d.a)(e));
            }
            onUnmatch(e) {
                e.dispatch(Object(d.b)(this.getRulesetId()));
            }
        }
        var $r = n(83);
        class answerbot_predictive_context_AnswerbotPredictiveContextClientMatchObject extends base_BaseClientMatchObject {
            selectMatchObject(e) {
                return e.answerbotPredictiveContexts;
            }
            onMatch(e, t) {
                t.dispatch(Object($r.a)(e)),
                    Object(j.e)('matched', 'answerbot_predictive_context', 'messenger', '', {
                        composerSuggestions: e,
                        url: window.parent.location.href,
                    });
            }
            onUnmatch(e) {
                e.dispatch(Object($r.a)(null)),
                    Object(j.e)(
                        'stopped_matching',
                        'answerbot_predictive_context',
                        'messenger',
                        '',
                        { url: window.parent.location.href }
                    );
            }
        }
        class messenger_trigger_MessengerTriggerClientMatchObject extends base_BaseClientMatchObject {
            selectMatchObject() {
                return null;
            }
            onMatch(e, t) {
                t.dispatch(Object(mr.a)(e, h.b));
            }
            onUnmatch(e) {
                e.dispatch(Object(mr.b)(this.messengerTriggerId()));
            }
            messengerTriggerId() {
                return this.getSerializedObject().id;
            }
        }
        class chat_ChatClientMatchObject extends base_BaseClientMatchObject {
            selectMatchObject(e) {
                return e.chat;
            }
            onMatch(e, t) {
                e && t.dispatch(Object(v.m)(Object(h.a)(e)));
            }
        }
        class post_PostClientMatchObject extends base_BaseClientMatchObject {
            selectMatchObject(e) {
                return e.post;
            }
            onMatch(e, t) {
                e && t.dispatch(Object(v.m)(Object(h.a)(e)));
            }
        }
        class seriesCondition_SeriesConditionClientMatchObject extends base_BaseClientMatchObject {
            selectMatchObject(e) {
                return e.seriesCondition;
            }
            onMatch(e, t, n, r) {
                r.createOrUpdateUser({}, 'apiUpdate', !0);
            }
        }
        function Br(e) {
            switch (e.ruleset_link_object_type) {
                case 'banner':
                    return new banner_BannerClientMatchObject(e);
                case 'tour':
                    return new tour_TourClientMatchObject(e);
                case 'inbound_trigger':
                    return new inbound_trigger_InboundTriggerClientMatchObject(e);
                case 'chat':
                    return new chat_ChatClientMatchObject(e);
                case 'post':
                    return new post_PostClientMatchObject(e);
                case 'messenger_trigger':
                    return new messenger_trigger_MessengerTriggerClientMatchObject(e);
                case 'answerbot_predictive_context':
                    return new answerbot_predictive_context_AnswerbotPredictiveContextClientMatchObject(
                        e
                    );
                case 'series_condition':
                    return new seriesCondition_SeriesConditionClientMatchObject(e);
                default:
                    return new base_BaseClientMatchObject(e);
            }
        }
        function Wr(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        const zr = Gr()('intercom.client-matching.client-match-runner');
        class client_match_runner_ClientMatchRunner {
            constructor(e, t) {
                Wr(this, 'clientMatches', []),
                    Wr(this, 'activeClientMatchIds', {}),
                    Wr(this, 'evalLoop', null),
                    Wr(this, 'store', void 0),
                    Wr(this, 'session', void 0),
                    (this.store = e),
                    (this.session = t);
            }
            start() {
                null === this.evalLoop &&
                    (zr('Starting evaluation loop'),
                    (this.evalLoop = setInterval(() => this.performClientMatching(), 500)));
            }
            stop() {
                null !== this.evalLoop &&
                    (zr('Stopping evaluation loop'),
                    window.clearInterval(this.evalLoop),
                    (this.evalLoop = null));
            }
            updateClientMatches(e) {
                this._removeMissingMatches(e), this._addNewMatches(e), this.performClientMatching();
            }
            performClientMatching() {
                const e = this._evaluateClientMatches();
                this._processResults(e);
            }
            _evaluateClientMatches() {
                const e = { positiveMatches: [], negativeMatches: [] };
                return (
                    this.clientMatches.forEach(t => {
                        t.evaluatePredicates()
                            ? e.positiveMatches.push(t)
                            : e.negativeMatches.push(t);
                    }),
                    e
                );
            }
            _processResults(e) {
                e.negativeMatches.forEach(e => {
                    const t = e.getRulesetId();
                    this.activeClientMatchIds[t] &&
                        (e.unmatch(this.store),
                        delete this.activeClientMatchIds[t],
                        e.canRematch() || this._removeClientMatch(e));
                }),
                    e.positiveMatches.forEach(e => {
                        const t = e.getRulesetId();
                        this.activeClientMatchIds[t] ||
                            (e.match(this.store, this.session),
                            (this.activeClientMatchIds[t] = !0));
                    });
            }
            _addNewMatches(e) {
                for (const t of e)
                    this.clientMatches.find(e => e.getRulesetId() === t.ruleset_id) ||
                        this.clientMatches.push(Br(t));
                this._evaluateClientMatches();
            }
            _removeMissingMatches(e) {
                for (const t of this.clientMatches)
                    e.find(e => e.ruleset_id === t.getRulesetId()) ||
                        (this.activeClientMatchIds[t.getRulesetId()] && t.unmatch(this.store),
                        this._removeClientMatch(t));
            }
            _removeClientMatch(e) {
                this.clientMatches.splice(this.clientMatches.indexOf(e), 1);
            }
        }
        var qr = n(208);
        function Qr(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        const { assign: Yr } = Object;
        function Jr(e, t, n) {
            let r = t(e.getState());
            return () => {
                const i = t(e.getState());
                r !== i && ((r = i), n(i));
            };
        }
        function Kr(e) {
            return e.intercomSettings;
        }
        var Xr = class session_Session {
                constructor(e, t, n) {
                    Qr(
                        this,
                        'handleCustomLauncherClick',
                        e => (
                            e.preventDefault(),
                            this.toggleMessenger(),
                            this.addLauncherClickedMetric(),
                            Nr(Kr(this.window)) &&
                                (j.j.addIncrementOpMetric('legacyCustomLauncherClick'),
                                j.j.buildAndAddHcMetric('legacyCustomLauncherClick')),
                            !1
                        )
                    ),
                        Qr(this, 'handleMessengerChange', e => {
                            (e
                                ? this.messengerOpenCallbacks
                                : this.messengerCloseCallbacks
                            ).forEach(e => e()),
                                e ||
                                    'messenger-trigger' !== Object(i.d)(this.store.getState()) ||
                                    this.store.dispatch(_r.b.navigateBack());
                        }),
                        Qr(this, 'handleUnreadConversationCountChange', e => {
                            this.unreadConversationCountChangeCallbacks.forEach(t => t(e));
                        }),
                        (this.window = e),
                        (this.store =
                            t ||
                            (e => {
                                const t = gr(e);
                                return t.subscribe(I(t)), t.subscribe(P(t)), t;
                            })()),
                        (this.destroyApp = n),
                        (this.isReady = !1),
                        (this.hasScrapedCookies = !1),
                        (this.readyCallbacks = []),
                        (this.messengerOpenCallbacks = []),
                        (this.messengerCloseCallbacks = []),
                        (this.unreadConversationCountChangeCallbacks = []),
                        (this.storeSubscribers = []),
                        (this.clientMatchRunner = new client_match_runner_ClientMatchRunner(
                            this.store,
                            this
                        )),
                        this.startClientMatchRunner(),
                        this.createMessengerChangeSubscriber(),
                        this.createUnreadConversationCountChangeSubscriber();
                }
                createOrUpdateUser(e = {}, t, n = !1) {
                    const r = this.getSettings(e),
                        i = this.window.intercomEncryptedPayload;
                    const s = this.store.getState().app;
                    let { session: c } = this.store.getState();
                    const d = jr(r);
                    if (
                        ((c = Yr({}, c, d)),
                        !(function(e) {
                            return e && e.appId;
                        })(c))
                    )
                        return Promise.resolve();
                    const { appId: l } = c;
                    c = Yr(
                        {},
                        c,
                        (function(e) {
                            const t = {},
                                n = o.a.read(Object(a.a)(e)) || o.a.read(Object(a.d)(e)),
                                r = o.a.read(Object(a.b)(e));
                            n && Yr(t, { anonymousId: n });
                            r && Yr(t, { anonymousSession: r });
                            return t;
                        })(l)
                    );
                    const p = Rr(r),
                        f = {};
                    if (Object(a.f)())
                        (f.marketo_tracking_cookie = null), (f.hubspot_tracking_cookie = null);
                    else {
                        if (s.features.marketoEnrichmentInstalled) {
                            this.hasScrapedCookies = !0;
                            const e = o.a.read(Object(a.e)());
                            e && (f.marketo_tracking_cookie = e);
                        }
                        if (s.features.hubspotInstalled) {
                            this.hasScrapedCookies = !0;
                            const e = o.a.read(Object(a.c)());
                            e && (f.hubspot_tracking_cookie = e);
                        }
                    }
                    const g = Mr(r);
                    g && this.enableCustomLauncher(g),
                        (this.stopMetricsPolling = j.j.startMetricsPolling(c, this.window)),
                        Object(u.a)() || (j.j.buildAndAddHcMetric('apiBoot'), Object(u.o)(!0));
                    const _ = this.window.document.URL,
                        b = Dr(r);
                    return (
                        (function(e, t) {
                            Object(Le.c)(e, e => t.dispatch(Object(kr.c)(e))), Object(Le.f)(e);
                        })(this.window, this.store),
                        this.store
                            .dispatch(
                                br.c.createOrUpdateUser(
                                    h.b,
                                    c,
                                    _,
                                    p,
                                    Pr(r),
                                    Ur(r),
                                    b,
                                    n,
                                    i,
                                    t,
                                    f,
                                    this.destroyApp
                                )
                            )
                            .then(e => e && this.handleUserCreateOrUpdate(e, r))
                    );
                }
                createCustomizationOverride(e) {
                    const t = Dr(this.getSettings(e));
                    return this.store.dispatch(
                        (function(e) {
                            return {
                                type: 'CREATE_CUSTOMIZATION_OVERRIDE',
                                customizationAttributes: e,
                            };
                        })(t)
                    );
                }
                destroy(e = !0) {
                    this.store.dispatch(br.c.destroySession(e)),
                        this.stopMetricsPolling && this.stopMetricsPolling(),
                        this.disableCustomLauncher(),
                        this.removeStoreSubscribers(),
                        this.stopClientMatchRunner(),
                        br.c.setupDefaultCreateOrUpdateUserRateLimiting(),
                        br.c.isDuplicateCreateOrUpdateUserRequest.reset();
                }
                openMessenger() {
                    this.whenReady(() => {
                        const { borderless: e } = this.store.getState();
                        e.conversationId
                            ? this.store.dispatch(
                                  _r.b.openConversationInMessenger(e.conversationId)
                              )
                            : (this.store.dispatch(_r.b.showInitialScreen()),
                              this.store.dispatch(_r.b.openMessenger()));
                    });
                }
                openOnBoot() {
                    var e;
                    const t = this.store.getState(),
                        n = t.app,
                        r = t.openOnBoot;
                    if (
                        !Object(s.b)() &&
                        r &&
                        (null == n
                            ? void 0
                            : null === (e = n.features) || void 0 === e
                            ? void 0
                            : e.persistAcrossPages)
                    )
                        switch (r.type) {
                            case 'conversation':
                                const e = r.metadata.conversationId;
                                e && this.store.dispatch(_r.b.openConversationInMessenger(e));
                                break;
                            case 'new_conversation':
                                this.store.dispatch(_r.b.openMessenger()),
                                    this.store.dispatch(_r.b.showNewConversation());
                                break;
                            case 'article':
                                if ('article-link' === r.metadata.componentId && r.metadata.url) {
                                    var i, o;
                                    const e =
                                        null === (i = r.metadata) || void 0 === i
                                            ? void 0
                                            : null === (o = i.previousState) || void 0 === o
                                            ? void 0
                                            : o.metadata;
                                    if (e) {
                                        const t = e.conversationId;
                                        t &&
                                            this.store.dispatch(
                                                _r.b.openConversationInMessenger(t)
                                            );
                                    }
                                    this.store.dispatch(
                                        Object(p.b)(
                                            h.b,
                                            r.metadata.cardUri,
                                            r.metadata.componentId,
                                            r.metadata.url,
                                            {}
                                        )
                                    );
                                }
                        }
                }
                closeMessenger() {
                    this.whenReady(() => {
                        this.store.dispatch(_r.b.closeMessenger());
                    });
                }
                toggleMessenger() {
                    this.whenReady(() => {
                        this.store.dispatch(_r.b.toggleMessenger());
                    });
                }
                showConversations() {
                    this.whenReady(() => {
                        this.store.dispatch(_r.b.openConversations());
                    });
                }
                showNewConversation(e) {
                    this.whenReady(() => {
                        this.store.dispatch(_r.b.openNewConversation(e));
                    });
                }
                startTour(e) {
                    this.whenReady(() => {
                        this.store.dispatch(Object(l.d)(e));
                    });
                }
                createEvent(e, t) {
                    this.whenReady(() => {
                        this.store.dispatch(br.c.createEvent(h.b, e, t));
                    });
                }
                createArticleReaction(e, t, n) {
                    this.whenReady(() => {
                        const {
                                session: r,
                                app: { isMessengerOpen: s },
                            } = this.store.getState(),
                            o = !('conversation' === Object(i.d)(this.store.getState()) && s);
                        h.b.createArticleReaction(r, e, t, o, n);
                    });
                }
                previewInboundCustomBot(e) {
                    this.whenReady(() => {
                        (e = h.b.buildComposerSuggestions(e)), this.store.dispatch(Object(d.d)(e));
                    });
                }
                previewOutboundCustomBot(e) {
                    this.store.dispatch(Object(mr.d)(h.b, e));
                }
                createMetric(e, t) {
                    this.whenReady(() => {
                        const { session: n, user: r } = this.store.getState();
                        t = Yr(
                            {
                                anonymous_id: n.anonymousId,
                                end_user_id: r.id,
                                user_id: r.id,
                                user_role: r.role,
                            },
                            t
                        );
                        const i = n.appId,
                            s = [
                                {
                                    name: e.toString(),
                                    id: Lr.a.generateUUID(),
                                    app_id_code: i,
                                    created_at: Math.round(Date.now() / 1e3),
                                    metadata: t,
                                },
                            ];
                        h.b.createMetrics(n, s);
                    });
                }
                trigger(e) {
                    this.store.dispatch(Object(mr.c)(e, h.b));
                }
                getSettings(e) {
                    return Yr({}, Kr(this.window), e);
                }
                getArticleReaction(e, t, n) {
                    this.whenReady(() => {
                        const { session: r } = this.store.getState();
                        h.b.getArticleReaction(r, e, t, n);
                    });
                }
                enterTourPreviewMode(e) {
                    this.whenReady(() => {
                        this.store.dispatch(Object(l.h)(h.b.buildTour(e), !0));
                    });
                }
                exitTourPreviewMode() {
                    this.whenReady(() => {
                        this.store.dispatch(Object(l.i)());
                    });
                }
                getVisitorId() {
                    const { session: e } = this.store.getState();
                    if (!e) return;
                    const { appId: t } = e;
                    return o.a.read(Object(a.a)(t)) || o.a.read(Object(a.d)(t));
                }
                onMessengerOpen(e) {
                    this.messengerOpenCallbacks.push(e);
                }
                onMessengerClose(e) {
                    this.messengerCloseCallbacks.push(e);
                }
                onUnreadConversationCountChange(e) {
                    const t = this.store.getState(),
                        n = Object(Er.b)(t);
                    this.unreadConversationCountChangeCallbacks.push(e), e(n);
                }
                enableCustomLauncher(e) {
                    this.disableCustomLauncher();
                    const t = this.window.document.getElementsByTagName('body')[0];
                    (this.customLauncherClickHandler = Object(O.g)(
                        t,
                        e,
                        this.handleCustomLauncherClick
                    )),
                        Object(O.c)(t, 'click', this.customLauncherClickHandler);
                }
                disableCustomLauncher() {
                    if (!this.customLauncherClickHandler) return;
                    const e = this.window.document.getElementsByTagName('body')[0];
                    Object(O.y)(e, 'click', this.customLauncherClickHandler),
                        (this.customLauncherClickHandler = null);
                }
                whenReady(e) {
                    if (this.isReady) return setTimeout(e, 1);
                    this.readyCallbacks.push(e);
                }
                executeReadyCallbacks() {
                    const { readyCallbacks: e } = this;
                    for (; e.length; ) e.shift()();
                    this.readyCallbacks = [];
                }
                addLauncherClickedMetric() {
                    this.whenReady(() => {
                        const {
                                user: e,
                                app: { isMessengerOpen: t },
                            } = this.store.getState(),
                            n = { is_messenger_open: t, is_custom_launcher: !0 };
                        j.j.buildAndAddMetric(e, 'clicked', 'launcher', 'in_app', '', n);
                    });
                }
                handleUserCreateOrUpdate(e, t) {
                    if (
                        (this.shouldSendTrackingCookies() &&
                            this.createOrUpdateUser(t, 'apiUpdate'),
                        e.clientsideRulesetConditions &&
                            this.clientMatchRunner.updateClientMatches(
                                e.clientsideRulesetConditions
                            ),
                        this.isReady)
                    )
                        return e;
                    if (
                        (this.executeReadyCallbacks(),
                        (this.isReady = !0),
                        Object(qr.a)() &&
                            this.window.parent.postMessage('messenger_session_ready', '*'),
                        !Object(u.b)())
                    ) {
                        const e = this.store.getState(),
                            t = Object(c.a)(e),
                            n = Object(S.j)();
                        j.j.buildAndAddHcMetric('createOrUpdateUser', {
                            messengerIsVisible: Object(u.i)(t),
                            isLauncherEnabled: t,
                            hasDisplayNoneSet: n,
                        }),
                            Object(u.m)(!0);
                    }
                    return e;
                }
                shouldSendTrackingCookies() {
                    const e = this.store.getState().app;
                    return (
                        !this.hasScrapedCookies &&
                        (e.features.hubspotInstalled || e.features.marketoEnrichmentInstalled)
                    );
                }
                startClientMatchRunner() {
                    this.clientMatchRunner.start();
                }
                stopClientMatchRunner() {
                    this.clientMatchRunner.stop();
                }
                createMessengerChangeSubscriber() {
                    this.addStoreSubscriber(
                        Jr(this.store, e => e.app.isMessengerOpen, this.handleMessengerChange)
                    );
                }
                createUnreadConversationCountChangeSubscriber() {
                    this.addStoreSubscriber(
                        Jr(this.store, Er.b, this.handleUnreadConversationCountChange)
                    );
                }
                addStoreSubscriber(e) {
                    this.storeSubscribers.push(this.store.subscribe(e));
                }
                removeStoreSubscribers() {
                    this.storeSubscribers.forEach(e => !!e && e());
                }
            },
            Zr = n(221),
            ei = n.n(Zr),
            ti = Object(f.createSelector)([e => e.app], e => e.isMessengerOpen),
            ni = n(87),
            ri = Object(f.createSelector)([e => e.accessibility], e => e),
            ii = n(151),
            si = n.n(ii);
        var oi = Object(f.createSelector)(ni.b, ({ color: e, secondaryColor: t }) => {
                if (!e || !t) return {};
                const {
                    gradient_start_color: n,
                    gradient_end_color: r,
                    button_text_color: i,
                } = si()({ primaryColor: e, secondaryColor: t, darkenAmount: 20 });
                return {
                    primaryColor: e,
                    secondaryColor: t,
                    gradientStartColor: n,
                    gradientEndColor: r,
                    buttonTextColor: i,
                };
            }),
            ai = n(136),
            ci = n(29);
        const ui = (e, t) => {
                const { onLauncherClick: n, launcherLogoUrl: r, allowSelfServeIcon: i } = t,
                    s = hi(t),
                    o = e.document.createElement('div');
                o.addEventListener('click', n, !0),
                    o.addEventListener('keydown', s, !0),
                    o.setAttribute('class', 'intercom-lightweight-app-launcher intercom-launcher'),
                    o.setAttribute('role', 'button'),
                    o.setAttribute('tabindex', '0'),
                    o.setAttribute('aria-label', Object(ci.e)('open_intercom_messenger'));
                const a = e.document.createElement('div');
                if (
                    (a.setAttribute(
                        'class',
                        'intercom-lightweight-app-launcher-icon intercom-lightweight-app-launcher-icon-open'
                    ),
                    r)
                ) {
                    const t = e.document.createElement('img');
                    t.setAttribute('src', r),
                        t.setAttribute('alt', 'Messenger launcher logo'),
                        t.setAttribute(
                            'class',
                            'intercom-lightweight-app-launcher-custom-icon-open'
                        ),
                        a.appendChild(t);
                } else
                    i
                        ? (a.setAttribute(
                              'class',
                              'intercom-lightweight-app-launcher-icon intercom-lightweight-app-launcher-icon-self-serve'
                          ),
                          (a.innerHTML =
                              '<svg aria-hidden="true" viewBox="1 1 60 60"><path d="M27.765 42.244c-8.614 0-15.622-7.008-15.622-15.622S19.151 11 27.765 11s15.622 7.008 15.622 15.622-7.007 15.622-15.622 15.622zm0-28.398c-7.045 0-12.775 5.73-12.775 12.775s5.73 12.775 12.775 12.775 12.775-5.73 12.775-12.775-5.73-12.775-12.775-12.775z"/><path d="M34.869 39.146l4.014-3.738 9.286 9.114a3.164 3.164 0 01-.07 4.562l-.071.066a3.163 3.163 0 01-4.561-.257l-8.598-9.747zM27.77 34.173c-2.882 0-5.412-.876-7.656-2.526a1.002 1.002 0 01-.35-.81c.008-.461.445-.969 1.02-.959.284.005.493.153.713.308 1.837 1.302 3.832 1.971 6.275 1.971 1.875 0 4.492-.476 6.314-2.118a.98.98 0 01.638-.261.92.92 0 01.686.241c.222.209.33.527.336.735a1.02 1.02 0 01-.318.775c-1.333 1.237-4.262 2.644-7.658 2.644z"/></svg>\n'))
                        : (a.innerHTML =
                              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 32"><path d="M28 32s-4.714-1.855-8.527-3.34H3.437C1.54 28.66 0 27.026 0 25.013V3.644C0 1.633 1.54 0 3.437 0h21.125c1.898 0 3.437 1.632 3.437 3.645v18.404H28V32zm-4.139-11.982a.88.88 0 00-1.292-.105c-.03.026-3.015 2.681-8.57 2.681-5.486 0-8.517-2.636-8.571-2.684a.88.88 0 00-1.29.107 1.01 1.01 0 00-.219.708.992.992 0 00.318.664c.142.128 3.537 3.15 9.762 3.15 6.226 0 9.621-3.022 9.763-3.15a.992.992 0 00.317-.664 1.01 1.01 0 00-.218-.707z"/></svg>');
                o.appendChild(a);
                const c = e.document.createElement('div');
                return (
                    c.setAttribute(
                        'class',
                        'intercom-lightweight-app-launcher-icon intercom-lightweight-app-launcher-icon-minimize'
                    ),
                    (c.innerHTML =
                        '<svg viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M.116 4.884l1.768-1.768L8 9.232l6.116-6.116 1.768 1.768L8 12.768.116 4.884z"/></svg>'),
                    o.appendChild(c),
                    o
                );
            },
            di = (e, t) => {
                const n = t.querySelector('.intercom-lightweight-app-launcher-custom-icon-open');
                !n || n.complete
                    ? e.appendChild(t)
                    : (n.addEventListener('load', () => e.appendChild(t)),
                      n.addEventListener('error', () => e.appendChild(t)));
            },
            li = (e, t, n, r, i, s) => o => {
                if (
                    ((s.textContent = Object(ai.b)(o)),
                    t.locale !== o.locale && Object(ci.d)(o.locale),
                    !t.isAppActive && o.isAppActive
                        ? e.document.body.appendChild(n)
                        : t.isAppActive && !o.isAppActive && e.document.body.removeChild(n),
                    !t.isLauncherEnabled && o.isLauncherEnabled)
                ) {
                    const t = ui(e, o);
                    di(n, t);
                } else if (t.isLauncherEnabled && !o.isLauncherEnabled) {
                    const t = (e => e.document.querySelector('.intercom-lightweight-app-launcher'))(
                        e
                    );
                    t && n.contains(t) && n.removeChild(t);
                }
                !t.isMessengerOpen && o.isMessengerOpen
                    ? (n.appendChild(r), n.appendChild(i))
                    : t.isMessengerOpen &&
                      !o.isMessengerOpen &&
                      (n.removeChild(r), n.removeChild(i)),
                    (t = o);
            },
            pi = (e, t) => () => {
                const { body: n } = e.document;
                t && n.contains(t) && n.removeChild(t);
            },
            hi = ({ onLauncherClick: e }) => ({ keyCode: t }) => {
                (t !== O.a.ENTER && t !== O.a.SPACE) || e();
            },
            fi = ({ onTabKeyDown: e }) => ({ keyCode: t }) => {
                t === O.a.TAB && e();
            };
        var gi = (e, t) => {
                const { isAppActive: n, isLauncherEnabled: r, isMessengerOpen: i, locale: s } = t;
                void 0 !== s && Object(ci.d)(s);
                const o = fi(t);
                e.document.addEventListener('keydown', o, !0);
                const a = e.document.createElement('div');
                if (
                    (a.setAttribute('class', 'intercom-lightweight-app'),
                    a.setAttribute('aria-live', 'polite'),
                    n && e.document.body.appendChild(a),
                    r)
                ) {
                    const n = ui(e, t);
                    di(a, n);
                }
                const c = e.document.createElement('div');
                c.setAttribute('class', 'intercom-lightweight-app-messenger intercom-messenger');
                const u = e.document.createElement('div');
                u.setAttribute('class', 'intercom-lightweight-app-messenger-header'),
                    c.appendChild(u);
                const d = e.document.createElement('div');
                d.setAttribute('class', 'intercom-lightweight-app-gradient'),
                    i && (a.appendChild(c), a.appendChild(d));
                const l = e.document.createElement('style');
                l.setAttribute('id', 'intercom-lightweight-app-style');
                const p = e.document.createTextNode(Object(ai.b)(t));
                return (
                    l.appendChild(p),
                    a.appendChild(l),
                    { updateLightweightApp: li(e, t, a, c, d, p), removeLightweightApp: pi(e, a) }
                );
            },
            _i = Object(f.createSelector)(
                [e => e.app],
                e => e.isBooted || e.bootFailed || (e.isBooting && e.isInstantBootEnabled)
            ),
            bi = Object(f.createSelector)([e => e.user], e => (e ? e.locale : void 0));
        const mi = e => ({ type: 'SET_LIGHTWEIGHT_APP_ACTIVE', isActive: e });
        var Ei = n(106);
        function Oi(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function Si(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? Oi(n, !0).forEach(function(t) {
                          vi(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : Oi(n).forEach(function(t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        }
        function vi(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        const yi = Object(f.createStructuredSelector)({
            isAppActive: _i,
            isLauncherEnabled: c.a,
            isMessengerOpen: ti,
            customization: ni.b,
            accessibility: ri,
            colors: oi,
            launcherLogoUrl: i.h,
            allowSelfServeIcon: i.b,
            locale: bi,
        });
        var Ci = (e, t) => {
                const n = ((e, t) => ({
                        isMobile: Object(s.b)(e),
                        onLauncherClick: () => {
                            Object(j.e)('clicked', 'launcher', 'in_app', '', {
                                is_messenger_open: !1,
                                is_custom_launcher: !1,
                                is_borderless_open: !1,
                            }),
                                t.dispatch(Object(_r.k)());
                        },
                        onTabKeyDown: () => {
                            t.dispatch(Object(Ei.b)(!0));
                        },
                    }))(e, t),
                    r = yi(t.getState()),
                    i = Si({}, r, {}, n),
                    { updateLightweightApp: o, removeLightweightApp: a } = gi(e, i);
                t.dispatch(mi(!0));
                const c = t.subscribe(() => {
                    const e = yi(t.getState());
                    if (e === r) return;
                    const i = Si({}, e, {}, n);
                    o(i);
                });
                return () => {
                    c(), a(e), t.dispatch(mi(!1));
                };
            },
            Ti = n(152);
        const Ii = Object(f.createSelector)([e => e.app.isMessengerOpen], e => e),
            wi = Object(f.createSelector)([w.a], e => e.length > 0),
            Ai = Object(f.createSelector)([A.a], e => e.length > 0),
            Ri = Object(f.createSelector)([Ti.a], e => e.length > 0),
            ji = Object(f.createSelector)([e => e.install.isInstallModeOpen], e => e),
            Ni = Object(f.createSelector)([e => e.banners], e => e.length > 0),
            Mi = Object(f.createSelector)([Er.b], e => e > 0),
            Pi = Object(f.createSelector)(
                [e => e.launcherDiscoveryMode.isLauncherDiscoveryModeOpening],
                e => e
            ),
            Ui = Object(f.createSelector)([e => e.tour.activeTour], e => null != e);
        var Di = Object(f.createSelector)(
            [Ii, wi, Ai, Ri, ji, Ni, Mi, Pi, Ui],
            (e, t, n, r, i, s, o, a, c) => Boolean(e || t || n || r || i || s || o || a || c)
        );
        const Li = (e, t) => {
                const n = e.document.querySelector('.intercom-launcher-frame'),
                    r = n
                        ? n.contentDocument.querySelector('.intercom-app-launcher-custom-icon-open')
                        : null;
                !r || r.complete
                    ? t()
                    : (r.addEventListener('load', t), r.addEventListener('error', t));
            },
            ki = async (e = 3) => {
                try {
                    const t = Date.now(),
                        r = await ei()(
                            async () =>
                                await Promise.all([n.e(52), n.e(3)]).then(n.bind(null, 833)),
                            { retries: e }
                        ),
                        i = Date.now();
                    return Object(j.f)('load_app_bundle_duration', i - t), r.default;
                } catch (e) {
                    throw (Object(j.c)('load_app_bundle_failed'), e);
                }
            };
        var xi = async (e, t) => {
            const n = Ci(e, t);
            let r,
                i = !0;
            return (
                (e =>
                    new Promise(t => {
                        const n = e.subscribe(() => {
                            Di(e.getState()) && (n(), t());
                        });
                    }))(t).then(async () => {
                    if (!i) return;
                    const [, s] = await Promise.all([
                        ((o = 250),
                        new Promise(e => {
                            setTimeout(e, o);
                        })),
                        ki(),
                    ]);
                    var o;
                    (r = await s(e, t)), ti(t.getState()) ? n() : Li(e, n);
                }),
                () => {
                    i && (r ? r() : n(), (i = !1));
                }
            );
        };
        var Gi = class app_App {
            constructor(e) {
                var t, n, r;
                (r = e => {
                    this.session.destroy(e),
                        (this.session = new Xr(this.window)),
                        this.renderApp && this.renderApp.then(e => e()),
                        (this.renderApp = void 0);
                }),
                    (n = 'destroySession') in (t = this)
                        ? Object.defineProperty(t, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[n] = r),
                    (this.window = e),
                    (this.session = new Xr(this.window, null, this.destroySession));
            }
            createOrUpdateUser(e, t) {
                const n = this.session.createOrUpdateUser(e, t);
                return this.renderApp || (this.renderApp = xi(this.window, this.session.store)), n;
            }
            openOnBoot() {
                this.session.openOnBoot();
            }
            createCustomizationOverride(e) {
                return this.session.createCustomizationOverride(e);
            }
            openMessenger() {
                this.session.openMessenger();
            }
            openMessengerFromAPI() {
                this.session.openMessenger();
                const { user: e } = this.session.store.getState();
                Object(j.h)(e, 'opened', 'messenger', 'in_app', 'from_api');
            }
            closeMessenger() {
                this.session.closeMessenger();
            }
            closeMessengerFromAPI() {
                this.session.closeMessenger();
                const { user: e } = this.session.store.getState();
                Object(j.h)(e, 'closed', 'messenger', 'messenger', 'from_api');
            }
            showConversations() {
                this.session.showConversations();
            }
            showNewConversation(e) {
                this.session.showNewConversation(e);
            }
            startTour(e) {
                const t = parseInt(e, 10);
                if (isNaN(t))
                    return void Object(en.a)(
                        'Invalid tourId passed to startTour. tourId must be a number'
                    );
                this.session.startTour(t);
                const { user: n } = this.session.store.getState();
                Object(j.h)(n, 'requested', 'messenger', 'tour', 'from_api', { tour_id: t });
            }
            createEvent(e, t) {
                this.session.createEvent(e, t);
            }
            onMessengerOpen(e) {
                this.session.onMessengerOpen(e);
            }
            onMessengerClose(e) {
                this.session.onMessengerClose(e);
            }
            onUnreadConversationCountChange(e) {
                this.session.onUnreadConversationCountChange(e);
            }
            getArticleReaction(e, t, n) {
                this.session.getArticleReaction(e, t, n);
            }
            createArticleReaction(e, t, n) {
                this.session.createArticleReaction(e, t, n);
            }
            previewInboundCustomBot(e) {
                this.session.previewInboundCustomBot(e);
            }
            previewOutboundCustomBot(e) {
                this.session.previewOutboundCustomBot(e);
            }
            createMetric(e, t) {
                this.session.createMetric(e, t);
            }
            getVisitorId() {
                return this.session.getVisitorId();
            }
            enterTourPreviewMode(e) {
                return this.session.enterTourPreviewMode(e);
            }
            exitTourPreviewMode() {
                return this.session.exitTourPreviewMode();
            }
            trigger(e) {
                if (this.session.isReady) return this.session.trigger(e);
                Object(en.a)('Intercom is not ready. Aborting MessengerTrigger request');
            }
        };
        function Vi(e) {
            return (...t) => {
                const n = {
                        boot(t) {
                            e.createCustomizationOverride(t),
                                e.createOrUpdateUser(t, 'apiBoot'),
                                e.openOnBoot();
                        },
                        update(t) {
                            e.createCustomizationOverride(t), e.createOrUpdateUser(t, 'apiUpdate');
                        },
                        shutdown(t = !0) {
                            e.destroySession(t);
                        },
                        show() {
                            e.openMessengerFromAPI();
                        },
                        showMessages() {
                            e.showConversations();
                        },
                        showNewMessage(t) {
                            e.showNewConversation(t);
                        },
                        startTour(t) {
                            e.startTour(t);
                        },
                        hide() {
                            e.closeMessengerFromAPI();
                        },
                        trackEvent(t, n) {
                            e.createEvent(t, n);
                        },
                        onShow(t) {
                            e.onMessengerOpen(t);
                        },
                        onHide(t) {
                            e.onMessengerClose(t);
                        },
                        onUnreadCountChange(t) {
                            e.onUnreadConversationCountChange(t);
                        },
                        trigger(t) {
                            e.trigger(t);
                        },
                        getVisitorId: () => e.getVisitorId(),
                        version: () => '4743a7c12ffe8f354f11128809ba6d0a34fd97cd',
                        'private:getArticleReaction': (t, n, r) => {
                            e.getArticleReaction(t, n, r);
                        },
                        'private:createMetric': (t, n) => {
                            e.createMetric(t, n);
                        },
                        'private:createArticleReaction': (t, n, r) => {
                            e.createArticleReaction(t, n, r);
                        },
                        'private:enterTourPreviewMode': t => {
                            e.enterTourPreviewMode(t);
                        },
                        'private:exitTourPreviewMode': () => {
                            e.exitTourPreviewMode();
                        },
                        'private:previewInboundCustomBot': t => {
                            e.previewInboundCustomBot(t);
                        },
                        'private:previewOutboundCustomBot': t => {
                            e.previewOutboundCustomBot(t);
                        },
                    },
                    r = t[0];
                if (r && n[r]) return n[r](...t.slice(1));
            };
        }
        function Fi(e, t) {
            (t.Intercom = e), (t.Intercom.booted = !0);
        }
        function Hi(e) {
            const t = (function(e) {
                return e.Intercom;
            })(e);
            return (t && t.q) || [];
        }
        function $i(e) {
            return Hi(e).some(e => 'boot' === e[0] || 'shutdown' === e[0]);
        }
        function Bi(e, t) {
            const n = Hi(t);
            for (; n.length; ) e(...n.shift());
        }
        var Wi = n(59),
            zi = n.n(Wi);
        const qi = n(140);
        Object(r.a)(window),
            (function(e) {
                if (void 0 !== e)
                    try {
                        const t = new e.CustomEvent('test', { cancelable: !0 });
                        if ((t.preventDefault(), !0 !== t.defaultPrevented))
                            throw new Error('Could not prevent default');
                    } catch (t) {
                        const n = function(e, t) {
                            ((t = t || {}).bubbles = !!t.bubbles), (t.cancelable = !!t.cancelable);
                            const n = document.createEvent('CustomEvent');
                            n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail);
                            const r = n.preventDefault;
                            return (
                                (n.preventDefault = function() {
                                    r.call(this);
                                    try {
                                        Object.defineProperty(this, 'defaultPrevented', {
                                            get: function() {
                                                return !0;
                                            },
                                        });
                                    } catch (e) {
                                        this.defaultPrevented = !0;
                                    }
                                }),
                                n
                            );
                        };
                        (n.prototype = e.Event.prototype), (e.CustomEvent = n);
                    }
            })(window),
            (window.requestAnimationFrame =
                window.parent.requestAnimationFrame || window.requestAnimationFrame);
        const Qi = parent;
        Object(En.a)(window);
        const Yi = new Gi(Qi);
        Object(En.b)(Yi.session.store);
        const Ji = Vi(Yi),
            Ki = $i(Qi);
        Bi(Ji, Qi),
            Fi(Ji, Qi),
            Ki || Ji('boot'),
            new (class intersection_Intersection {
                constructor(e) {
                    var t, n, r;
                    (r = [
                        'http://intercom.test',
                        'http://app.intercom.test',
                        'https://app.intercom.com',
                        'https://app.intercom.io',
                        'https://intercomrades.intercom.io',
                        'https://intercomrades.intercom.com',
                    ]),
                        (n = 'intercomDomains') in (t = this)
                            ? Object.defineProperty(t, n, {
                                  value: r,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                              })
                            : (t[n] = r),
                        (this.window = e),
                        this.setupIntersection();
                }
                setupIntersection() {
                    this.openerExists() &&
                        (this.modeExists()
                            ? this.injectIntersection()
                            : (this.setupMessageListener(),
                              this.sendMessageToOpener({ type: 'intercom-snippet__ready' })));
                }
                sendMessageToOpener(e) {
                    this.window.opener.postMessage(e, '*');
                }
                openerExists() {
                    return !!this.window.opener;
                }
                modeExists() {
                    return !!Zn.b.get('intercom-snippet__intersection-mode');
                }
                setupMessageListener() {
                    this.window.addEventListener('message', this.bootIntersection.bind(this));
                }
                getMode() {
                    return Zn.b.get('intercom-snippet__intersection-mode');
                }
                getAppId() {
                    return Zn.b.get('intercom-snippet__intersection-app-id');
                }
                bootIntersection(e) {
                    -1 !== this.intercomDomains.indexOf(e.origin) &&
                        'intercom-snippet__boot-intersection' === e.data.type &&
                        (this.removeMessageListener(),
                        this.saveOpenerOrigin(e.origin),
                        this.injectIntersection(e.data.mode, e.data.appId));
                }
                removeMessageListener() {
                    this.window.removeEventListener('message', this.bootIntersection.bind(this));
                }
                saveOpenerOrigin(e) {
                    Zn.b.set('intercom-snippet__intersection-opener-origin', e);
                }
                injectIntersection(e, t) {
                    this.window.document.getElementById('intersection-container') ||
                        (this.injectIntersectionFrame(), this.injectEmberApp(e, t));
                }
                injectIntersectionFrame() {
                    const e = this.window.document.createElement('div'),
                        t = this.window.document.createElement('iframe');
                    (e.id = 'intersection-container'),
                        (t.id = 'intersection-frame'),
                        (t.frameBorder = 0),
                        e.appendChild(t),
                        this.window.document.body.insertAdjacentElement('beforeend', e);
                }
                createScriptTag(e) {
                    const t = document.createElement('script');
                    return (t.type = 'text/javascript'), (t.charset = 'utf-8'), (t.src = e), t;
                }
                injectFrameTemplate(e, t = this.getMode(), n = this.getAppId()) {
                    const r = zi()(t),
                        i = zi()(n);
                    e.open(),
                        e.write(
                            `\n    <!doctype html>\n      <head>\n        <title>Intersection </title>\n        <meta name="intersection-mode" content=${r}>\n        <meta name="intersection-appId" content=${i}>\n      </head>\n      <body></body>\n    </html>\n    `
                        ),
                        e.close();
                }
                injectIntersectionScripts(e) {
                    const t = this.createScriptTag(qi.intersection_js),
                        n = this.createScriptTag(qi.intersection_styles);
                    e.contentWindow.document.head.appendChild(t),
                        e.contentWindow.document.head.appendChild(n);
                }
                injectEmberApp(e, t) {
                    const n = this.window.document.getElementById('intersection-frame');
                    this.injectFrameTemplate(n.contentDocument, e, t),
                        this.injectIntersectionScripts(n);
                }
            })(Qi);
    },
    4: function(e, t, n) {
        'use strict';
        n.d(t, 'l', function() {
            return m;
        }),
            n.d(t, 'm', function() {
                return O;
            }),
            n.d(t, 'n', function() {
                return S;
            }),
            n.d(t, 'c', function() {
                return v;
            }),
            n.d(t, 's', function() {
                return y;
            }),
            n.d(t, 'k', function() {
                return C;
            }),
            n.d(t, 'j', function() {
                return T;
            }),
            n.d(t, 'h', function() {
                return I;
            }),
            n.d(t, 'i', function() {
                return w;
            }),
            n.d(t, 'g', function() {
                return A;
            }),
            n.d(t, 'e', function() {
                return R;
            }),
            n.d(t, 'f', function() {
                return j;
            }),
            n.d(t, 'd', function() {
                return N;
            }),
            n.d(t, 'p', function() {
                return M;
            }),
            n.d(t, 'a', function() {
                return D;
            }),
            n.d(t, 't', function() {
                return L;
            }),
            n.d(t, 'b', function() {
                return k;
            }),
            n.d(t, 'r', function() {
                return x;
            }),
            n.d(t, 'o', function() {
                return G;
            }),
            n.d(t, 'q', function() {
                return V;
            });
        var r = n(7),
            i = n(27),
            s = n(5),
            o = n(20),
            a = n(2),
            c = n(3),
            u = n(202),
            d = n(1),
            l = n(12),
            p = n(22),
            h = n(46),
            f = n(154),
            g = n(9),
            _ = n(204),
            b = n(40);
        function m(e, t, n = !1, r = null) {
            return (o, a) => {
                o(
                    (function(e, t = !1) {
                        return {
                            type: 'GET_CONVERSATION_REQUEST',
                            conversationId: e,
                            isUpdating: t,
                        };
                    })(t, n)
                );
                const { session: c, operator: u, app: f } = a();
                return e
                    .getConversation(c, t, f.selfServeSuggestionsMatch)
                    .then(t => {
                        if (
                            (o(
                                (function(e) {
                                    return (t, n) => {
                                        const r = n(),
                                            { newConversation: i } = r,
                                            o = Object(g.d)(r);
                                        try {
                                            Object(s.e)(e).clientId === Object(s.e)(i).clientId &&
                                                'conversation' !== o &&
                                                (t(w(e, null, null, Date.now(), 'custom_bot')),
                                                t(Object(b.a)(e.id, !0)));
                                        } catch (e) {}
                                    };
                                })(t)
                            ),
                            Object(s.s)(t).forEach(t => o(Object(i.a)(e, t, n))),
                            o(O(t, !1, Date.now())),
                            u)
                        ) {
                            const {
                                lastComposerEvent: e,
                                userCreatedConversationAt: n,
                                lastTriggerTransitionTimestamp: r,
                            } = u;
                            Object(l.l)(t, r), Object(l.k)(t, n, e);
                        }
                        r &&
                            Object(h.a)() &&
                            Object(d.g)('newCommentEvent', { duration_ms: Object(p.a)(r) });
                    })
                    .catch(e => o(E(t, e)));
            };
        }
        function E(e, t) {
            return { type: 'GET_CONVERSATION_FAILURE', conversationId: e, error: t };
        }
        function O(e, t = !1, n) {
            return {
                type: 'GET_CONVERSATION_SUCCESS',
                conversation: e,
                skipNotification: t,
                createdAt: n,
            };
        }
        function S(e, t) {
            return (n, r) => {
                n(
                    (function(e) {
                        return { type: 'MARK_CONVERSATION_AS_READ_REQUEST', conversationId: e };
                    })(t)
                );
                const { session: i } = r();
                return e
                    .markConversationAsRead(i, t)
                    .then(() =>
                        n(
                            (function(e) {
                                return {
                                    type: 'MARK_CONVERSATION_AS_READ_SUCCESS',
                                    conversationId: e,
                                };
                            })(t)
                        )
                    )
                    .catch(e =>
                        n(
                            (function(e, t) {
                                return {
                                    type: 'MARK_CONVERSATION_AS_READ_FAILURE',
                                    conversationId: e,
                                    error: t,
                                };
                            })(t, e)
                        )
                    );
            };
        }
        function v(e) {
            return { type: 'CONVERSATION_READ_ELSEWHERE', conversationId: e };
        }
        function y(e) {
            return { type: 'USER_CONTENT_SEEN_BY_ADMIN', conversationId: e };
        }
        function C(e, t, n, r) {
            return (i, s) => {
                i(
                    (function(e, t, n) {
                        return {
                            type: 'CREATE_REACTION_REQUEST',
                            conversationId: e,
                            reactionIndex: t,
                            isFromConversation: !!n,
                        };
                    })(t, n, r)
                );
                const { session: o } = s();
                return e
                    .createReaction(o, t, n)
                    .then(() =>
                        i(
                            (function(e, t) {
                                return {
                                    type: 'CREATE_REACTION_SUCCESS',
                                    conversationId: e,
                                    reactionIndex: t,
                                };
                            })(t, n)
                        )
                    )
                    .catch(e =>
                        i(
                            (function(e, t, n) {
                                return {
                                    type: 'CREATE_REACTION_FAILURE',
                                    conversationId: e,
                                    reactionIndex: t,
                                    error: n,
                                };
                            })(t, n, e)
                        )
                    );
            };
        }
        function T(e, t, n, r = !1, i = !1, s = null, o = null, a = !1, c) {
            return void 0 === t
                ? (function(e, t, n = !1, r, i, s) {
                      return (o, a) => {
                          const c = a(),
                              { session: u, app: d } = c,
                              { body: l, createdAt: p } = t;
                          return (
                              o(I(t, n, s, Date.now())),
                              s && o({ type: 'UPFRONT_EMAIL_COLLECTION_SUBMITTED' }),
                              P(e, u, t, e => o(U(t, e)))
                                  .then(t =>
                                      e.createConversation(u, {
                                          blocks: l,
                                          createdAt: p,
                                          upload: t,
                                          email: s,
                                          composerSuggestions: Object(_.a)(c),
                                          selfServeSuggestionsMatch: d.selfServeSuggestionsMatch,
                                      })
                                  )
                                  .then(e => {
                                      o(w(e, r, i, Date.now()));
                                  })
                                  .catch(e => o(A(e)))
                          );
                      };
                  })(e, n, r, o, a, c)
                : (function(e, t, n, r = !1, i = !1, s, o, a, c) {
                      return (u, d) => {
                          const { session: l } = d(),
                              { body: p, createdAt: h, clientId: f } = n;
                          return (
                              u(R(t, n, r, c)),
                              c && u({ type: 'UPFRONT_EMAIL_COLLECTION_SUBMITTED' }),
                              P(e, l, n, e => u(U(n, e, t)))
                                  .then(n => e.createComment(l, t, f, p, h, n, c))
                                  .then(e => {
                                      u(j(t, e, i, s, o, a, Date.now()));
                                  })
                                  .catch(e => u(N(t, n, e)))
                          );
                      };
                  })(e, t, n, r, i, s, o, a, c);
        }
        function I(e, t, n, r = Date.now()) {
            return {
                type: 'CREATE_CONVERSATION_REQUEST',
                part: e,
                isRetry: t,
                timestamp: r,
                email: n,
            };
        }
        function w(e, t, n, r, i) {
            return {
                type: 'CREATE_CONVERSATION_SUCCESS',
                conversation: e,
                officeHoursResponse: t,
                isAnnotatedImage: n,
                createdAt: r,
                conversationTriggerType: i,
            };
        }
        function A(e) {
            return { type: 'CREATE_CONVERSATION_FAILURE', reason: e };
        }
        function R(e, t, n, r) {
            return {
                type: 'CREATE_COMMENT_REQUEST',
                conversationId: e,
                part: t,
                isRetry: n,
                email: r,
            };
        }
        function j(e, t, n, r, i, s, o, a = !1) {
            return {
                type: 'CREATE_COMMENT_SUCCESS',
                conversationId: e,
                part: t,
                isBorderless: n,
                lastParticipatingAdmin: r,
                officeHoursResponse: i,
                isAnnotatedImage: s,
                createdAt: o,
                fromMessengerSuggestedContent: a,
            };
        }
        function N(e, t, n) {
            return { type: 'CREATE_COMMENT_FAILURE', conversationId: e, part: t, reason: n };
        }
        function M(e, t, n) {
            const { id: r } = t;
            return i => {
                if (n.selectedReplyOption || n.composerSuggestionItem) {
                    let r, s;
                    return (
                        n.selectedReplyOption
                            ? ((r = n.selectedReplyOption.replyOption),
                              (s = n.selectedReplyOption.quickReplyPart))
                            : (r = n.composerSuggestionItem),
                        i(Object(f.a)(e, t, r, !0, s))
                    );
                }
                return i(T(e, r, n, !0));
            };
        }
        function P(e, t, n, r) {
            const { file: i, body: s } = n,
                { width: o, height: a } = s[0];
            return i
                ? i.size > 41943040
                    ? Promise.reject('file_size')
                    : e.createUploadPolicy(t, i, o, a).then(t => e.createUpload(t, i, r))
                : Promise.resolve();
        }
        function U(e, t, n) {
            return { type: 'UPDATE_UPLOAD_PROGRESS', conversationId: n, part: e, progress: t };
        }
        function D(e, t, n, r, i = new Date()) {
            return {
                type: 'ADMIN_IS_TYPING',
                conversationId: e,
                adminId: t,
                firstName: n,
                avatarUrl: r,
                lastActiveAt: i,
            };
        }
        function L(e) {
            return { type: 'USER_IS_TYPING', conversationId: e };
        }
        function k(e, t, n = new Date()) {
            return {
                type: 'COMPOSER_CONTENT_CHANGED',
                conversationId: e,
                composerContent: t,
                lastActiveAt: n,
            };
        }
        function x(e, t, n, r, i, s, o, a, c) {
            return (d, l) => {
                const { session: p, user: h } = l();
                return (
                    d(
                        (function(e, t, n, r, i, s, o) {
                            return {
                                type: 'UPDATE_CONVERSATION_FORM_REQUEST',
                                conversationId: e,
                                partId: t,
                                identifier: n,
                                value: r,
                                identifierType: i,
                                formType: s,
                                isCustomData: o,
                            };
                        })(t, n, r, i, s, o, a)
                    ),
                    e
                        .updateConversationForm(p, t, n, r, i, c)
                        .then(e => {
                            d(
                                (function(e, t, n, r) {
                                    return {
                                        type: 'UPDATE_CONVERSATION_FORM_SUCCESS',
                                        conversation: e,
                                        partId: t,
                                        identifier: n,
                                        createdAt: r,
                                    };
                                })(e, n, r, Date.now())
                            ),
                                'email' === r && d(Object(u.d)(h, i));
                        })
                        .catch(e => {
                            d(
                                (function(e, t, n, r) {
                                    return {
                                        type: 'UPDATE_CONVERSATION_FORM_FAILURE',
                                        conversationId: e,
                                        partId: t,
                                        identifier: n,
                                        error: r,
                                    };
                                })(t, n, r, e, Date.now())
                            );
                        })
                );
            };
        }
        function G(e) {
            return (t, n) => {
                const { session: i } = n();
                let s = Object(a.d)();
                Object(r.h)() && (s += `?v=${Math.floor(1e8 * Math.random())}`),
                    Object(o.w)(s, Object(c.a)(i, { conversation_id: e }));
            };
        }
        function V(e) {
            return { type: 'SET_NEW_CONVERSATION_COMPOSER_STATE', composerState: e };
        }
    },
    40: function(e, t, n) {
        'use strict';
        function r(e, t = !1) {
            const n = { type: 'SHOW_CONVERSATION', conversationId: e };
            return t && (n.replaceCurrentView = t), n;
        }
        n.d(t, 'a', function() {
            return r;
        });
    },
    41: function(e, t, n) {
        'use strict';
        var r = n(47),
            i = n.n(r),
            s = n(138),
            o = n.n(s),
            a = n(66),
            c = n.n(a),
            u = n(134),
            d = n.n(u),
            l = n(211),
            p = n.n(l);
        const h = e => {
            if (!d()(e)) return e;
            const t = {};
            return (
                Object.keys(e).forEach(n => {
                    let r = h(e[n]);
                    Array.isArray(r) && (r = r.map(e => h(e))), (t[p()(n)] = r);
                }),
                t
            );
        };
        var f = n(61),
            g = n.n(f),
            _ = n(116),
            b = n.n(_),
            m = n(212),
            E = n.n(m);
        const O = {
            button: function(e) {
                return e.action.id ? ((e.id = e.action.id), b()(e, 'action.id'), e) : e;
            },
            input: function(e) {
                return e.action && e.action.id ? ((e.id = e.action.id), b()(e, 'action.id'), e) : e;
            },
            list: function(e) {
                const t = e.items.map(e => {
                    if (e.action) {
                        if (!e.action.id) return e;
                        (e.id = e.action.id), b()(e, 'action.id');
                    }
                    return e;
                });
                return (e.items = t), e;
            },
        };
        function S(e) {
            return e.components.map(e =>
                (function(e) {
                    const t = E()({}, e);
                    return g()(O, e.type, () => {})(t), t;
                })(e)
            );
        }
        var v = n(139);
        function y(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function C(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        n.d(t, 'a', function() {
            return I;
        }),
            n.d(t, 'c', function() {
                return w;
            }),
            n.d(t, 'e', function() {
                return A;
            }),
            n.d(t, 'b', function() {
                return j;
            }),
            n.d(t, 'd', function() {
                return N;
            });
        const T = e => (e ? Object(v.a)(e.toString()) : ''),
            I = (e, t) => {
                switch (e.type) {
                    case 'button':
                        return `button-${T(e.id)}`;
                    case 'text':
                        return `text-${t}-${T(e.text)}`;
                    case 'input':
                        return `input-${T(e.id)}`;
                    case 'spacer':
                        return `spacer-${t}`;
                    case 'divider':
                        return `divider-${t}`;
                    case 'image':
                        return `image-${t}-${T(e.url)}`;
                    case 'list':
                        return `list-${e.items.map(e => T(e.id)).join('-')}`;
                    case 'dropdown':
                        return `dropdown-${T(e.id)}`;
                    case 'single-select':
                        return `single-select-${T(e.id)}`;
                    default:
                        return `unknown-${t}`;
                }
            },
            w = e => (e.state ? { uri: e.uri, canvas: { id: '', content: e.state } } : e),
            A = e => {
                const t = (function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2
                            ? y(n, !0).forEach(function(t) {
                                  C(e, t, n[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                            : y(n).forEach(function(t) {
                                  Object.defineProperty(
                                      e,
                                      t,
                                      Object.getOwnPropertyDescriptor(n, t)
                                  );
                              });
                    }
                    return e;
                })({}, e);
                return (
                    i()(t, ['canvas', 'content'], e =>
                        (e => ('0.1' === e.version ? e : { version: '0.1', components: S(e) }))(
                            c()(e)
                        )
                    ),
                    i()(t, ['canvas', 'content', 'components'], e => e.map(h))
                );
            },
            R = (e, t, n) => {
                const r = [];
                return (
                    e.forEach(e => {
                        'list' === e.type ? r.push(...e.items) : r.push(e);
                    }),
                    r.find(e => e[t] && (!n || e[t] === n))
                );
            },
            j = (e, t, n) => !!R(e, t, n),
            N = (e, t, n = !0) => {
                const r = ((e, t) => R(e, 'id', t))(t, e),
                    i = M(r, t);
                return i && r && r.type
                    ? 'button' === r.type || 'item' === r.type
                        ? o()(c()(t), `${i}.loading`, n, c.a)
                        : 'input' === r.type || 'dropdown' === r.type || 'single-select' === r.type
                        ? o()(c()(t), `${i}.saveState`, n ? 'saving' : 'unsaved', c.a)
                        : void 0
                    : t;
            },
            M = (e, t) => {
                for (const n in t)
                    if (t.hasOwnProperty(n)) {
                        if (e === t[n]) return `[${n}]`;
                        if (t[n] && 'object' == typeof t[n]) {
                            const r = M(e, t[n]);
                            if (r) return `[${n}]` + r;
                        }
                    }
            };
    },
    44: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return c;
        }),
            n.d(t, 'c', function() {
                return u;
            }),
            n.d(t, 'b', function() {
                return d;
            });
        var r = n(9),
            i = n(60),
            s = n(0),
            o = n(5),
            a = n(54);
        const c = (e, t) => !e.read && e.id !== t && (e.dismissed || !Object(o.m)(e)),
            u = Object(s.createSelector)(
                e => Object(i.a)(e.conversations.byId),
                e => {
                    const {
                        app: { conversationId: t, isMessengerOpen: n },
                        user: { isPresent: i },
                    } = e;
                    if (n && 'conversation' === Object(r.d)(e)) return t;
                    if (!n) {
                        const t = Object(a.a)(e);
                        if (1 === t.length && i) return t[0].id;
                    }
                },
                (e, t) => e.reduce((e, n) => (c(n, t) && e.push(n.id), e), [])
            ),
            d = Object(s.createSelector)(u, e => e.length);
    },
    45: function(e, t, n) {
        'use strict';
        n.d(t, 'c', function() {
            return S;
        }),
            n.d(t, 'a', function() {
                return v;
            }),
            n.d(t, 'e', function() {
                return y;
            }),
            n.d(t, 'b', function() {
                return C;
            }),
            n.d(t, 'd', function() {
                return T;
            });
        var r,
            i,
            s = n(216),
            o = n.n(s),
            a = n(21),
            c = n.n(a),
            u = n(217),
            d = n.n(u),
            l = n(206),
            p = n.n(l),
            h = n(107);
        const f = '1' === window.navigator.doNotTrack,
            g = [
                'address',
                'addresses',
                'email',
                'emailAddress',
                'emailAddresses',
                'phoneNumber',
                'phone',
                'number',
                'name',
                'firstName',
                'lastName',
                'userSuppliedEmail',
                'initial',
                'socialAccounts',
                'text',
                'messengerCards',
                'url',
            ],
            _ = [];
        let b, m;
        const E = e =>
                d()(e, (e, t, n) => {
                    g.indexOf(n) >= 0
                        ? (e[n] = 'removedIdentifyingInfo')
                        : c()(t) && !o()(t)
                        ? (e[n] = E(t.toJS ? t.toJS() : t))
                        : (e[n] = t);
                }),
            O = e =>
                f
                    ? 'removedIdentifyingInfo'
                    : (e => {
                          const t = p()(e);
                          return E(t);
                      })(e),
            S = async e => {
                const { addTag: t, addExtra: r, logError: i, addBreadcrumb: s } = await Object(h.a)(
                    {
                        promise: () => {
                            // Do not load sentry lib because it causes problems with CORS
                            // return Promise.all([n.e(55), n.e(50)]).then(n.bind(null, 432));
                            console.warn('Sentry lib was prevented from loading');
                            return Promise.resolve({
                                addTag: '',
                                addExtra: '',
                                logError: 'mt-error',
                                addBreadcrumb: '',
                            });
                        },
                    }
                );

                // Prevent errors due to avoid sentry lib load
                if (i === 'mt-error') {
                    return;
                }

                t('app.id', b),
                    _.forEach(({ type: e }) => s('redux-action', e)),
                    m && m.getState && r('state', O(m.getState())),
                    i(e);
            },
            v = e => {
                (e.onerror = (e, t, n, r, i) => S(i)), (e.onunhandledrejection = e => S(e.reason));
            },
            y = e => {
                e && (b = e);
            },
            C = e => {
                e && (m = e);
            },
            T = () =>
                function(e) {
                    return function(t) {
                        return _.push({ type: t.type, timestamp: +new Date() }), e(t);
                    };
                };
        (null === (r = window) || void 0 === r
            ? void 0
            : null === (i = r.parent) || void 0 === i
            ? void 0
            : i.intercomSettings) && y(window.parent.intercomSettings.app_id);
    },
    46: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return r;
        });
        const r = () =>
            window.parent &&
            window.parent.intercomSettings &&
            'tx2p130c' === window.parent.intercomSettings.app_id;
    },
    48: function(e, t, n) {
        'use strict';
        var r = n(60),
            i = n(0),
            s = n(5);
        t.a = Object(i.createSelector)(
            [e => Object(r.a)(e.conversations.byId), e => e.notificationTypeOverrides],
            (e, t) =>
                e
                    .filter(e => !Object(s.m)(e))
                    .map(e =>
                        ((e, t) => {
                            const n = Object(s.g)(e);
                            return Object.assign({}, e, {
                                suppress: t.suppress[n] || !1,
                                forceSnippet: t.forceSnippet[n] || !1,
                            });
                        })(e, t)
                    )
        );
    },
    5: function(e, t, n) {
        'use strict';
        n.d(t, 'b', function() {
            return O;
        }),
            n.d(t, 'd', function() {
                return S;
            }),
            n.d(t, 'a', function() {
                return v;
            }),
            n.d(t, 'j', function() {
                return y;
            }),
            n.d(t, 'i', function() {
                return C;
            }),
            n.d(t, 'l', function() {
                return T;
            }),
            n.d(t, 'q', function() {
                return I;
            }),
            n.d(t, 'p', function() {
                return w;
            }),
            n.d(t, 'g', function() {
                return A;
            }),
            n.d(t, 'm', function() {
                return R;
            }),
            n.d(t, 'r', function() {
                return j;
            }),
            n.d(t, 'e', function() {
                return N;
            }),
            n.d(t, 'f', function() {
                return M;
            }),
            n.d(t, 'k', function() {
                return P;
            }),
            n.d(t, 'c', function() {
                return U;
            }),
            n.d(t, 's', function() {
                return L;
            }),
            n.d(t, 'h', function() {
                return k;
            }),
            n.d(t, 't', function() {
                return x;
            }),
            n.d(t, 'o', function() {
                return G;
            }),
            n.d(t, 'n', function() {
                return V;
            });
        var r = n(58),
            i = n.n(r),
            s = n(11),
            o = n.n(s),
            a = n(110),
            c = n.n(a),
            u = n(209),
            d = n.n(u),
            l = n(82),
            p = n.n(l),
            h = n(137),
            f = n.n(h),
            g = n(210),
            _ = n.n(g),
            b = n(15),
            m = n(1);
        const { assign: E } = Object,
            O = e => e.parts.filter(e => e.author.isAdmin)[0],
            S = e => Object(b.a)(e.parts.filter(e => e.author.isAdmin)),
            v = e => e.parts.reduce((e, t) => e + (t.author.isAdmin ? 1 : 0), 0),
            y = e => 1 === e.parts.length && 'chat' === e.parts[0].messageType,
            C = e => e.parts.length > 1 && Object(b.a)(e.parts).author.isAdmin,
            T = e => e.author.isBot && 'Operator' === e.author.firstName,
            I = (e, t) => {
                if (!o()(t)) {
                    const n = e => e.clientId || e.id,
                        r = c()([...e.parts, ...t.parts], n);
                    return i()(r, ['createdAt'], ['asc']);
                }
                return e.parts;
            },
            w = (e, t) => {
                if (!o()(t) && t.composerState) {
                    if (t.composerState.version > e.composerState.version) return t.composerState;
                    t.composerState.version === e.composerState.version &&
                        t.composerState.visible !== e.composerState.visible &&
                        Object(m.b)(
                            `Different composerState visibibility with same version number for conversation with id=${e.id}`
                        );
                }
                return e.composerState;
            },
            A = e => {
                if (e && e.parts && 0 !== e.parts.length)
                    return `${e.id}-${Object(b.a)(e.parts).id}`;
            },
            R = e => 'partial' === e.fetchState,
            j = e => {
                const t = S(e);
                return 1 === e.parts.length ? N(e) : E({}, t, { messageType: M(t) });
            },
            N = e => {
                const { lastParticipatingAdmin: t } = e,
                    n = t ? t.lastActiveAt : void 0,
                    r = t ? t.isActive : void 0;
                return E({}, e.parts[0], { lastActiveAt: n, isActive: r });
            },
            M = e => e.messageType || 'adminReply',
            P = e =>
                !(
                    !e.identifier.startsWith('custom_data.') &&
                    !e.identifier.startsWith('company.custom_data.')
                ),
            U = (e, t) => {
                const n = e.attributes.find(e => e.identifier === t);
                if (n)
                    return 'string' === n.type && Array.isArray(n.options)
                        ? 'list'
                        : 'email' === n.identifier
                        ? 'email'
                        : 'phone' === n.identifier
                        ? 'phone'
                        : n.type;
            },
            D = e => {
                const t = f()(e.parts, e => e.body);
                return p()(t, e => 'messengerCard' === e.type);
            },
            L = e => f()(D(e), e => d()(e, 'type')),
            k = (e, t) => _()(D(e), { uri: t }),
            x = e => e.sort((e, t) => t.lastPartCreatedAt - e.lastPartCreatedAt),
            G = e =>
                (e => e.composerState.visible)(e) &&
                !(e => 'attribute_collector' === e.parts[0].replyType)(e),
            V = e =>
                e.parts && Object(b.a)(e.parts) && 'pointer' === Object(b.a)(e.parts).messageType;
    },
    50: function(e, t, n) {
        'use strict';
        n.d(t, 'd', function() {
            return o;
        }),
            n.d(t, 'b', function() {
                return u;
            }),
            n.d(t, 'a', function() {
                return p;
            }),
            n.d(t, 'c', function() {
                return h;
            }),
            n.d(t, 'e', function() {
                return f;
            });
        var r = n(27),
            i = n(5),
            s = n(203);
        function o(e, t = 'unknown', n = 1, s = 10) {
            return (o, u) => {
                o({ type: 'GET_CONVERSATIONS_REQUEST' });
                const { session: d, app: l } = u();
                return e
                    .getConversations(d, {
                        source: t,
                        page: n,
                        perPage: s,
                        selfServeSuggestionsMatch: l.selfServeSuggestionsMatch,
                    })
                    .then(t => {
                        t.conversations.forEach(t => {
                            Object(i.s)(t).forEach(t => {
                                o(Object(r.a)(e, t));
                            });
                        }),
                            o(f(t)),
                            o(a(t));
                    })
                    .catch(() => {
                        o(c());
                    });
            };
        }
        function a(e) {
            return { type: 'GET_CONVERSATIONS_SUCCESS', conversations: e };
        }
        function c(e) {
            return { type: 'GET_CONVERSATIONS_FAILURE', error: e };
        }
        function u(e, t) {
            return (n, r) => {
                n(d(t));
                const { session: i } = r();
                return e.dismissNotifications(i, t).then(() => n(l(t)));
            };
        }
        function d(e) {
            return { type: 'DISMISS_NOTIFICATIONS_REQUEST', conversationIds: e };
        }
        function l(e) {
            return { type: 'DISMISS_NOTIFICATIONS_SUCCESS', conversationIds: e };
        }
        function p(e) {
            return { type: 'CONVERSATIONS_SCROLLED', scrollPosition: e };
        }
        function h(e) {
            return { type: 'EMAIL_ATTRIBUTE_COLLECTOR_INSERTED', conversationId: e };
        }
        function f(e) {
            return t => {
                const n = e.conversations;
                n &&
                    n.forEach(e => {
                        Object(i.n)(e) && e.read && t(Object(s.a)(e.id));
                    });
            };
        }
    },
    54: function(e, t, n) {
        'use strict';
        var r = n(0),
            i = n(48),
            s = n(5);
        const o = Object(r.createSelector)(i.a, e =>
            e.filter(e => {
                return (
                    !e.read &&
                    !e.forceSnippet &&
                    ((1 === (t = e).parts.length && 'full' === t.parts[0].notificationType) ||
                        Object(s.i)(e)) &&
                    'pointer' !== e.messageType &&
                    !Object(s.n)(e) &&
                    !e.preventEndUserReplies
                );
                var t;
            })
        );
        t.a = Object(r.createSelector)(
            e => {
                const {
                    conversations: { byId: t },
                    message: { conversationId: n },
                } = e;
                return t[n];
            },
            o,
            (e, t) => {
                return (
                    (n = t),
                    void 0 === (r = e) ||
                    ((e, t) => void 0 !== e.find(e => e.id === t.id))(n, r) ||
                    Object(s.n)(r)
                        ? n
                        : n.concat(r)
                );
                var n, r;
            }
        );
    },
    56: function(e, t, n) {
        'use strict';
        function r(e, t) {
            return { type: 'OPEN_MESSAGE', conversationId: e, partId: t };
        }
        function i() {
            return { type: 'CLOSE_MESSAGE' };
        }
        function s(e, t) {
            return { type: 'RECORD_MESSAGE_SENT', conversationId: e, partId: t };
        }
        n.d(t, 'b', function() {
            return r;
        }),
            n.d(t, 'a', function() {
                return i;
            }),
            n.d(t, 'c', function() {
                return s;
            });
    },
    57: function(e, t, n) {
        'use strict';
        var r = n(11),
            i = n.n(r),
            s = n(80),
            o = n(36),
            a = n(8),
            c = n(109),
            u = n(50),
            d = n(4),
            l = n(106),
            p = n(114),
            h = n(135);
        var f = n(1),
            g = n(22);
        const _ = e => {
                let t;
                return (...n) => {
                    const r = () => e(...n);
                    return (t = Promise.resolve(t).then(r, r)), t;
                };
            },
            b = (e, t, n, r) => {
                let i = 0,
                    s = 0;
                return (...o) => {
                    const a = g.b.now();
                    return (
                        a - s >= n && ((i = 0), (s = a)),
                        i++,
                        i <= t
                            ? e(...o)
                            : (Object(f.c)(`rate_limiting.${r}`),
                              Object(f.g)(
                                  `rate_limit_check_${r}`,
                                  { rate_limited: !0, rate_limit_count: n },
                                  !0
                              ),
                              Promise.reject('rate_limited_update'))
                    );
                };
            };
        var m = n(6),
            E = n(45),
            O = n(10);
        const S = e => {
            if ('rate_limited_update' === e) return null;
            try {
                return e.errors || JSON.parse(e).errors;
            } catch (t) {
                Object(O.a)(e), Object(E.c)(e);
            }
        };
        var v = n(78),
            y = n(28),
            C = n(16),
            T = n(7);
        const I =
                'https://docs.intercom.com/configure-intercom-for-your-product-or-site/staying-secure/enable-identity-verification-on-your-web-product',
            w = {
                IDENTITY_VERIFICATION_READY_WARNING: `Intercom Messenger warning: Identity Verification is set up correctly but not enabled. For details on how to enable it, see ${I}.`,
                IDENTITY_VERIFICATION_FAILURE_WITH_USER_ID_WARNING: `Intercom Messenger warning: Your Identity Verification user_hash is invalid. Check that you are generating the user_hash with your user's user_id and your app's secret key. For more details, see ${I}.`,
                IDENTITY_VERIFICATION_FAILURE_WITH_EMAIL_WARNING: `Intercom Messenger warning: Your Identity Verification user_hash is invalid. Check that you are generating the user_hash with your user's email and your app's secret key. For more details, see ${I}.`,
            };
        n.d(t, 'b', function() {
            return N;
        }),
            n.d(t, 'a', function() {
                return D;
            }),
            n.d(t, 'f', function() {
                return L;
            }),
            n.d(t, 'e', function() {
                return k;
            }),
            n.d(t, 'd', function() {
                return x;
            });
        let A, R;
        const j = ((e, t = 6e4) => {
            let n;
            const r = () => {
                    n = {};
                },
                i = (...r) => {
                    const i = e(...r),
                        s = n[i],
                        o = Date.now();
                    return !((e, n) => void 0 === n || e - n > t)(o, s) || ((n[i] = o), !1);
                };
            return (i.reset = r), r(), i;
        })((e, t, n, r) => {
            const { email: i, userId: s, userHash: o, anonymousId: a } = e;
            return JSON.stringify(
                Object.assign(
                    { encryptedPayload: r },
                    { url: t, email: i, userId: s, userHash: o, anonymousId: a },
                    n
                )
            );
        }, 6e4);
        function N(e, t, n, r, g, _, b, E = !1, I, w = 'unknown', N, D) {
            return async (L, k) => {
                var x, V, B;
                let W,
                    { app: z, session: q } = k();
                if (
                    ((!A || (R !== n && z && z.features && z.features.singlePageAppRateLimiting)) &&
                        G(n),
                    (q = t || q),
                    q.sessionId || (q.sessionId = C.a.generateUUID()),
                    L(M(q, n, r, g, _, b, N)),
                    !E && j(q, n, r, I))
                )
                    return null;
                try {
                    W = await A(e, k, r, I, w, N);
                } catch (e) {
                    const t = S(e);
                    if ('403' === (e => e && e[0].code)(t) && D)
                        return (
                            Object(O.b)(
                                'This domain is not white-listed for the Intercom Messenger. Whitelist your domain here: https://app.intercom.com/a/apps/_/messenger'
                            ),
                            D(!0),
                            null
                        );
                    t &&
                        t.find(e => 'App Not Found' === e.message) &&
                        Object(O.b)(
                            'The App ID in your code snippet is incorrect. Change it to your App ID found in settings to complete installation: http://app.intercom.com/a/apps/_/settings/web'
                        ),
                        L(U(e, $(e)));
                    const n = (e => {
                        const t = S(e);
                        if (!t) return;
                        const n = t.find(e => e.data);
                        if (!n) return;
                        const r = n.data;
                        return {
                            activeSubscription: r.active_subscription,
                            userHashVerified: r.user_hash_verified,
                            secureInstallV2: r.secure_install_v2,
                            messengerEnabledForVisitors: r.messenger_enabled_for_visitors,
                            messengerEnabledForUsers: r.messenger_enabled_for_users,
                        };
                    })(e);
                    return n && L(Object(h.c)(n)), null;
                }
                Object(f.n)(W);
                const { errors: Q, installModeConfig: Y, notificationLinkConversationId: J } = W;
                if ((Y && L(Object(h.c)(Y)), Q)) return null;
                if (
                    (H(W, q, Y),
                    F(W),
                    L(P(W)),
                    L(Object(o.e)(W.composerSuggestions)),
                    W.newConversationComposerState &&
                        L(Object(d.q)(W.newConversationComposerState)),
                    L(Object(y.b)()),
                    L(Object(l.a)({ color: W.app.color, secondaryColor: W.app.secondaryColor })),
                    J && L(Object(a.c)(J)),
                    W.unreadConversationIds.length > 0)
                ) {
                    const t = k();
                    Object(p.a)(t, W.unreadConversationIds)
                        ? L(Object(d.l)(e, t.app.conversationId))
                        : L(Object(u.d)(e, 'createOrUpdateUser'));
                }
                !Object(T.g)() && W.app.features.launcherDiscoveryMode && L(Object(s.e)());
                const { activeTour: K } = W,
                    X =
                        null ===
                            (x = Object(v.a)(
                                null === (V = window) || void 0 === V
                                    ? void 0
                                    : null === (B = V.parent) || void 0 === B
                                    ? void 0
                                    : B.location
                            )) || void 0 === x
                            ? void 0
                            : x.product_tour_id;
                i()(K) ||
                    (i()(X)
                        ? L(Object(y.j)(K))
                        : Object(m.d)(
                              `Tour with id ${K.id} received from ping won't start because there is a tourId in the query params`
                          ));
                const { banners: Z } = W;
                return i()(Z) || L(Object(c.b)(Z)), W;
            };
        }
        function M(e, t, n, r, i, s, o) {
            return {
                type: 'CREATE_OR_UPDATE_USER_REQUEST',
                session: e,
                url: t,
                customAttributes: n,
                launcherEnabledOverride: r,
                anonymousSessionDuration: i,
                customizationAttributes: s,
                internal: o,
            };
        }
        function P(e) {
            return { type: 'CREATE_OR_UPDATE_USER_SUCCESS', user: e };
        }
        function U(e, t = !1) {
            return {
                type: 'CREATE_OR_UPDATE_USER_FAILURE',
                error: e,
                isIdentityVerificationError: t,
            };
        }
        function D(e) {
            return { type: 'ANONYMOUS_SESSION_CHANGED', anonymousSession: e };
        }
        function L() {
            return { type: 'USER_IS_PRESENT' };
        }
        function k() {
            return { type: 'USER_IS_ABSENT' };
        }
        function x(e, t, n) {
            return (r, i) => {
                const { session: s } = i();
                if (s)
                    return (
                        r({ type: 'CREATE_EVENT', name: t, boundEventMetadata: n }),
                        e.sendBeaconEvent(s, t).catch(() => r({ type: 'CREATE_EVENT_FAILED' }))
                    );
            };
        }
        function G(e) {
            V(30, 18e5, e);
        }
        function V(e, t, n) {
            (R = n),
                (A = ((e, t, n, r) => _(b(e, t, n, r)))(
                    (e, t, n, r, i, s) => {
                        const { session: o } = t();
                        return e.createOrUpdateUser(o, n, void 0, r, i, s, Object(f.l)());
                    },
                    e,
                    t,
                    'user_update'
                ));
        }
        function F(e) {
            const t = e.cdasBreachingLimit;
            if (!t.length) return;
            const n = 1 === t.length ? 'attribute' : 'attributes',
                r = t.join(', ');
            Object(O.b)(
                `You have reached your CDA limit and we were not able to create or update the following ${n}: ${r}. For more details, see: https://www.intercom.com/help/configure-intercom/customize-intercom-to-be-about-your-users/send-custom-user-attributes-to-intercom`
            );
        }
        function H(e, t, n = {}) {
            const { userHash: r, userId: i, email: s } = t,
                { secureInstallV2: o, secureInstallV3: a } = n;
            if (o || a) {
                if (!i && !s) return;
            } else if (!r) return;
            const c = (function(e, t) {
                if (e.identityVerificationReady) return w.IDENTITY_VERIFICATION_READY_WARNING;
                if (!e.identityVerified && t.userId)
                    return w.IDENTITY_VERIFICATION_FAILURE_WITH_USER_ID_WARNING;
                if (!e.identityVerified && !t.userId)
                    return w.IDENTITY_VERIFICATION_FAILURE_WITH_EMAIL_WARNING;
                return null;
            })(e, t);
            c && Object(O.b)(c);
        }
        function $(e) {
            const t = S(e);
            if (!t) return !1;
            let n = !1;
            return (
                t.forEach(e => {
                    -1 !== e.code.indexOf('identity_verification') &&
                        ((n = !0),
                        Object(O.a)(
                            `Intercom Messenger error: ${e.message} For more details, see ${I}.`
                        ));
                }),
                n
            );
        }
        t.c = {
            createOrUpdateUser: N,
            createOrUpdateUserRequest: M,
            createOrUpdateUserSuccess: P,
            createOrUpdateUserFailure: U,
            destroySession: function(e = !0) {
                return { type: 'DESTROY_SESSION', clearCookies: e };
            },
            anonymousSessionChanged: D,
            userIsPresent: L,
            userIsAbsent: k,
            createEvent: function(e, t, n) {
                return (r, i) => {
                    const { session: s } = i();
                    if (s)
                        return (
                            r({ type: 'CREATE_EVENT', name: t, metadata: n }),
                            e.createEvent(s, t, n).catch(() => r({ type: 'CREATE_EVENT_FAILED' }))
                        );
                };
            },
            triggerBoundEvent: x,
            setupCreateOrUpdateUserRateLimiting: V,
            setupDefaultCreateOrUpdateUserRateLimiting: G,
            isDuplicateCreateOrUpdateUserRequest: j,
            checkCdasBreachingLimit: F,
            checkIdentityVerificationInstall: H,
            checkIdentityVerificationError: $,
        };
    },
    6: function(e, t, n) {
        'use strict';
        n.d(t, 'b', function() {
            return u;
        }),
            n.d(t, 'c', function() {
                return findAndValidateInputField;
            }),
            n.d(t, 'd', function() {
                return l;
            }),
            n.d(t, 'a', function() {
                return DelayedNodeVisibilityCheck;
            });
        var r = n(92),
            i = n.n(r),
            s = n(20),
            o = n(23),
            a = n.n(o);
        function c(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        function u(e, t) {
            return t.hostname === e.hostname && t.pathname === e.pathname && t.hash === e.hash;
        }
        const d = e => e.replace(/[\u200B-\u200D\uFEFF]/g, '');
        class findAndValidateInputField {
            constructor(e, t) {
                c(this, 'elements', void 0),
                    c(this, 'callback', void 0),
                    c(this, 'destroyed', void 0),
                    c(this, 'validateInputs', () => {
                        let e = !0;
                        this.elements.forEach(t => {
                            'checkbox' !== t.type &&
                                'radio' !== t.type &&
                                this.elementHasEmptyValue(t) &&
                                (e = !1);
                        }),
                            this.onChange(e);
                    }),
                    (this.callback = t),
                    (this.destroyed = !1),
                    (this.elements = []);
                const n = window.parent.document.querySelector(e);
                if (n) {
                    const e = n.tagName.toLowerCase(),
                        t =
                            'input' === e ||
                            'textarea' === e ||
                            'select' === e ||
                            n.isContentEditable;
                    this.elements = t
                        ? [n]
                        : n.querySelectorAll('input, textarea, select, div[contenteditable]');
                }
            }
            onChange(e) {
                this.destroyed || this.callback(e);
            }
            destroy() {
                (this.destroyed = !0), this.removeListeners();
            }
            elementHasEmptyValue(e) {
                return e instanceof HTMLSelectElement
                    ? !d(e.options[e.selectedIndex].value)
                    : e.isContentEditable
                    ? !d(e.innerText || '')
                    : !d(e.value);
            }
            addListeners() {
                this.elements.forEach(e => {
                    'select' === e.tagName.toLowerCase()
                        ? e.addEventListener('change', this.validateInputs)
                        : e.addEventListener('input', this.validateInputs);
                });
            }
            removeListeners() {
                this.elements.forEach(e => {
                    'select' === e.type
                        ? e.removeEventListener('change', this.validateInputs)
                        : e.removeEventListener('input', this.validateInputs);
                });
            }
            run() {
                if (!this.elements.length) return this.callback(!0);
                this.validateInputs(), this.addListeners();
            }
        }
        const l = function(...e) {
            a()('tours:debug')(...e);
        };
        class DelayedNodeVisibilityCheck {
            constructor(e, t, n, r) {
                c(this, 'selector', void 0),
                    c(this, 'timeoutValue', void 0),
                    c(this, 'callback', void 0),
                    c(this, 'timeout', void 0),
                    c(this, 'waitTimeout', void 0),
                    c(this, 'document', void 0),
                    c(this, 'observer', void 0),
                    (this.selector = e),
                    (this.timeoutValue = t),
                    (this.document = window.parent.document),
                    (this.callback = r),
                    (this.observer = new MutationObserver(i()(this._check.bind(this), 200))),
                    (this.waitTimeout = window.setTimeout(() => {
                        this._initObserver(), this._startTimer(), this._check();
                    }, n || 0));
            }
            _initObserver() {
                this.document.body &&
                    this.observer.observe(this.document.body, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0,
                    });
            }
            _check() {
                const e = this.document.querySelector(this.selector);
                Object(s.u)(e) && (this.callback(!0), this.cancel());
            }
            _startTimer() {
                (this.timeoutValue || 0 === this.timeoutValue) &&
                    (this.timeout = window.setTimeout(() => {
                        this.callback(!1), this.cancel();
                    }, this.timeoutValue));
            }
            cancel() {
                this.observer.disconnect(),
                    this.timeout && clearTimeout(this.timeout),
                    this.waitTimeout && clearTimeout(this.waitTimeout);
            }
        }
    },
    60: function(e, t, n) {
        'use strict';
        t.a = e => Object.keys(e).map(t => e[t]);
    },
    63: function(e, t, n) {
        'use strict';
        n.d(t, 'b', function() {
            return c;
        });
        var r = n(13);
        function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? i(n, !0).forEach(function(t) {
                          o(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : i(n).forEach(function(t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        }
        function o(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        const a = (() => {
            var e, t, n;
            const r = 'composer-suggestions-disabled-at',
                i =
                    null === (e = window) || void 0 === e
                        ? void 0
                        : null === (t = e.parent) || void 0 === t
                        ? void 0
                        : null === (n = t.intercomSettings) || void 0 === n
                        ? void 0
                        : n.app_id;
            return i ? `${i}-${r}` : r;
        })();
        const c = {
            loading: !1,
            isDismissed:
                (function() {
                    const e = parseInt(r.a.get(a));
                    return !!e && Date.now() - e < 2592e6;
                })() || !1,
            suggestions: [],
            prompt: [],
            priority: 0,
        };
        t.a = function(e = c, t) {
            switch (t.type) {
                case 'SET_COMPOSER_SUGGESTIONS': {
                    const { priority: n } = t;
                    return n < e.priority
                        ? e
                        : t.composerSuggestions
                        ? s({}, e, {}, t.composerSuggestions, { priority: n, loading: !1 })
                        : s({}, c, { isDismissed: e.isDismissed, priority: n });
                }
                case 'SET_COMPOSER_SUGGESTIONS_LOADING':
                    return s({}, e, { loading: t.loadingStatus });
                case 'SET_COMPOSER_SUGGESTIONS_DISMISSED':
                    return (n = Date.now()), r.a.set(a, n), s({}, e, { isDismissed: !0 });
                default:
                    return e;
            }
            var n;
        };
    },
    64: function(e, t, n) {
        'use strict';
        var r = n(31),
            i = n.n(r),
            s = n(115),
            o = n(8),
            a = n(40),
            c = n(4),
            u = n(9);
        var d = n(16),
            l = n(23),
            p = n.n(l);
        n.d(t, 'a', function() {
            return b;
        }),
            n.d(t, 'b', function() {
                return m;
            }),
            n.d(t, 'c', function() {
                return E;
            }),
            n.d(t, 'd', function() {
                return O;
            }),
            n.d(t, 'e', function() {
                return S;
            });
        const h = p()('intercom.actions.triggers'),
            f = { 'open-messenger-loading-view': o.h },
            g = {
                'show-conversation': function(e, t) {
                    return async (n, r) => {
                        if ('conversation' !== Object(u.d)(r()))
                            return await n(Object(c.l)(e, t.id)), n(Object(a.a)(t.id, !0));
                    };
                },
            },
            _ = {};
        function b(e, t) {
            return n => {
                n(
                    (function(e) {
                        return { type: 'ADD_TRIGGER', trigger: e };
                    })(e)
                ),
                    (function(e, t, n) {
                        try {
                            const { selector: r, event: s, id: o } = e,
                                a = window.parent.document.querySelector(r),
                                c = i()(
                                    () =>
                                        (function(e, t, n) {
                                            t(E(e, n));
                                        })(o, t, n),
                                    3e3,
                                    { leading: !0, trailing: !1 }
                                );
                            a.addEventListener(s, c),
                                (_[o] = c),
                                h(`Attached ${s} event handler to ${r}`);
                        } catch (e) {
                            h(`Couldnt attach the messenger trigger to the DOM due to e=${e}`);
                        }
                    })(e, n, t);
            };
        }
        function m(e) {
            return (t, n) => {
                !(function(e, t) {
                    try {
                        const { selector: n, event: r } = Object(s.c)(e)(t);
                        window.parent.document.querySelector(n).removeEventListener(r, _[e]);
                    } catch (e) {
                        h(`Couldn't detach the messenger trigger to the DOM due to e=${e}`);
                    } finally {
                        delete _[e];
                    }
                })(e, n()),
                    t(
                        (function(e) {
                            return { type: 'REMOVE_TRIGGER', triggerId: e };
                        })(e)
                    );
            };
        }
        function E(e, t) {
            return async (n, r) => {
                try {
                    const i = r(),
                        { session: o } = i,
                        a = Object(s.c)(e)(i),
                        u = Object(d.b)(),
                        l = { clientId: u, createdAt: new Date() };
                    n(
                        (function(e) {
                            return { type: 'ACTIVATE_TRIGGER', triggerId: e };
                        })(e)
                    ),
                        n(
                            (function(e) {
                                return t => {
                                    const n = f[e.preAction];
                                    if ('function' == typeof n) return t(n());
                                    throw `Invalid PRE ACTION type for trigger=${e.id}`;
                                };
                            })(a)
                        ),
                        n(Object(c.h)(l, !1));
                    const p = await t.fireTrigger(o, {
                        triggerId: String(e),
                        clientAssignedUUID: u,
                    });
                    n(v(t, p)), n({ type: 'DEACTIVATE_TRIGGER' });
                } catch (e) {
                    n({ type: 'ACTIVATE_TRIGGER_FAILED' }),
                        n(Object(c.g)(null)),
                        h(`Couldnt fire messenger trigger due to e=${e}`);
                }
            };
        }
        function O(e, t) {
            return async (n, r) => {
                const i = r(),
                    { session: s } = i,
                    o = await e.outboundPreview(s, t);
                n(v(e, o));
            };
        }
        function S(e) {
            return (t, n) => {
                try {
                    const r = n();
                    t(E(Object(s.a)(r).id, e));
                } catch (e) {
                    h('Couldnt retry firing messenger trigger');
                }
            };
        }
        function v(e, t) {
            return n => {
                const { action: r, data: i } = t,
                    s = g[r];
                if (s) return n(s(e, i));
                throw `Invalid POST ACTION type for trigger_action=${r}`;
            };
        }
    },
    65: function(e, t, n) {
        'use strict';
        n.d(t, 'c', function() {
            return r;
        }),
            n.d(t, 'd', function() {
                return i;
            }),
            n.d(t, 'a', function() {
                return s;
            }),
            n.d(t, 'g', function() {
                return o;
            }),
            n.d(t, 'f', function() {
                return a;
            }),
            n.d(t, 'b', function() {
                return c;
            }),
            n.d(t, 'e', function() {
                return u;
            }),
            n.d(t, 'h', function() {
                return d;
            });
        const r = 'send-data-to-messenger',
            i = 'send-data-to-sheet',
            s = 'close',
            o = 'submit-sheet',
            a = 'start-navigation',
            c = 'finish-navigation',
            u = 'set-title';
        function d(e, t, n) {
            return { intercomSheet: { type: e, payload: t, meta: { proxy: n } } };
        }
    },
    7: function(e, t, n) {
        'use strict';
        n.d(t, 'd', function() {
            return o;
        }),
            n.d(t, 'c', function() {
                return a;
            }),
            n.d(t, 'g', function() {
                return c;
            }),
            n.d(t, 'h', function() {
                return u;
            }),
            n.d(t, 'e', function() {
                return d;
            }),
            n.d(t, 'b', function() {
                return l;
            }),
            n.d(t, 'f', function() {
                return p;
            }),
            n.d(t, 'j', function() {
                return h;
            }),
            n.d(t, 'i', function() {
                return f;
            });
        const r = /iphone|ipad|ipod|android|blackberry|opera mini|iemobile/i,
            i = [
                '.intercom-lightweight-app-launcher',
                '.intercom-launcher-frame',
                '#intercom-container',
                '.intercom-messenger',
                '.intercom-notifications',
            ];
        function s(e) {
            try {
                if (!(e in window)) return !1;
                const t = window[e];
                return (
                    null !== t &&
                    (t.setItem('intercom-test', '0'), t.removeItem('intercom-test'), !0)
                );
            } catch (e) {
                return !1;
            }
        }
        function o() {
            return s('localStorage');
        }
        function a() {
            return !!(window.FileReader && window.File && window.FileList && window.FormData);
        }
        function c() {
            const e = l().userAgent;
            return !!e && null !== e.match(r) && void 0 !== window.parent;
        }
        function u() {
            const e = l().vendor || '',
                t = l().userAgent || '';
            return 0 === e.indexOf('Apple') && /\sSafari\//.test(t);
        }
        function d(e = window) {
            const t = l(),
                n = 'Google Inc.' === t.vendor && !e.chrome;
            return '' === t.languages && (t.webdriver || n);
        }
        function l() {
            return navigator || {};
        }
        function p(e = l().userAgent) {
            return /iPad|iPhone|iPod/.test(e) && !window.MSStream;
        }
        function h() {
            return i.some(e => {
                const t = window.parent.document.querySelector(e);
                if (t) {
                    const e = window.getComputedStyle(t);
                    return null === e || 'none' === e.display;
                }
            });
        }
        const f = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        t.a = {
            hasXhr2Support: function() {
                return 'XMLHttpRequest' in window && 'withCredentials' in new XMLHttpRequest();
            },
            hasLocalStorageSupport: o,
            hasSessionStorageSupport: function() {
                return s('sessionStorage');
            },
            hasFileSupport: a,
            hasAudioSupport: function() {
                const e = document.createElement('audio');
                return !!e.canPlayType && !!e.canPlayType('audio/mpeg;').replace(/^no$/, '');
            },
            hasVisibilitySupport: function() {
                return (
                    void 0 !== document.hidden ||
                    void 0 !== document.mozHidden ||
                    void 0 !== document.msHidden ||
                    void 0 !== document.webkitHidden
                );
            },
            messengerIsVisible: function() {
                return i.some(e => {
                    const t = window.parent.document.querySelector(e);
                    if (t) {
                        const e = t.getBoundingClientRect();
                        return e && e.width > 0 && e.height > 0;
                    }
                });
            },
            messengerHasDisplayNoneSet: h,
            isMobileBrowser: c,
            isIOSFirefox: function() {
                return !!l().userAgent.match('FxiOS');
            },
            isFirefox: function() {
                return !!l().userAgent.match('Firefox');
            },
            isSafari: u,
            isElectron: function() {
                const e = l().userAgent || '',
                    t = window.parent || {},
                    n = t.process && t.versions && t.versions.electron;
                return /\sElectron\//.test(e) || n;
            },
            isIE: function() {
                const e = l().userAgent || '';
                return e.indexOf('MSIE') > 0 || e.indexOf('Trident') > 0;
            },
            isEdge: function() {
                return (l().userAgent || '').indexOf('Edge') > 0;
            },
            isNativeMobile: function() {
                return l().isNativeMobile;
            },
            isChrome: function() {
                const e = window.chrome,
                    t = l().vendor,
                    n = l().userAgent.indexOf('OPR') > -1,
                    r = l().userAgent.indexOf('Edge') > -1;
                return (
                    !!l().userAgent.match('CriOS') ||
                    (null != e && 'Google Inc.' === t && !1 === n && !1 === r)
                );
            },
            isIOS: p,
            isAndroid: function(e = l().userAgent) {
                return e && e.toLowerCase().indexOf('android') > -1;
            },
        };
    },
    78: function(e, t, n) {
        'use strict';
        function r(e) {
            const t = document.createElement('a');
            return (
                (t.href = e),
                {
                    protocol: t.protocol,
                    host: t.host,
                    port: t.port,
                    pathname: t.pathname,
                    hash: t.hash,
                    search: t.search,
                    hostname: t.hostname,
                    origin: t.origin,
                }
            );
        }
        function i(e) {
            const t = r(e).search;
            return t
                ? (/^[?#]/.test(t) ? t.slice(1) : t).split('&').reduce((e, t) => {
                      const [n, r] = t.split('=');
                      return (e[n] = r ? decodeURIComponent(r.replace(/\+/g, ' ')) : ''), e;
                  }, {})
                : {};
        }
        n.d(t, 'b', function() {
            return r;
        }),
            n.d(t, 'a', function() {
                return i;
            });
    },
    79: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return i;
        }),
            n.d(t, 'b', function() {
                return s;
            });
        const r = [
                'password',
                'passwd',
                'secret',
                'api_key',
                'apikey',
                'access_token',
                'auth_token',
                'credentials',
                'mysql_pwd',
                'stripetoken',
            ],
            i = () => {
                var e, t, n;
                return null === (e = window) || void 0 === e
                    ? void 0
                    : null === (t = e.parent) || void 0 === t
                    ? void 0
                    : null === (n = t.location) || void 0 === n
                    ? void 0
                    : n.host;
            },
            s = e =>
                e
                    ? (r.forEach(t => {
                          e = o(e, t, '***');
                      }),
                      e)
                    : e,
            o = (e, t, n) => {
                const r = new RegExp('([?&])' + t + '=.*?(&|$)', 'i');
                return e.match(r) ? e.replace(r, '$1' + t + '=' + n + '$2') : e;
            };
    },
    8: function(e, t, n) {
        'use strict';
        var r = n(9),
            i = n(80),
            s = n(35),
            o = n(60),
            a = n(0),
            c = Object(a.createSelector)(
                e => Object(o.a)(e.conversations.byId),
                e => e.filter(e => !e.read && e.dismissed)
            ),
            u = n(44),
            d = n(2),
            l = n(4),
            p = n(56),
            h = n(40),
            f = n(1);
        n.d(t, 'e', function() {
            return _;
        }),
            n.d(t, 'k', function() {
                return b;
            }),
            n.d(t, 'a', function() {
                return E;
            }),
            n.d(t, 'j', function() {
                return O;
            }),
            n.d(t, 'i', function() {
                return S;
            }),
            n.d(t, 'h', function() {
                return C;
            }),
            n.d(t, 'f', function() {
                return T;
            }),
            n.d(t, 'g', function() {
                return I;
            }),
            n.d(t, 'c', function() {
                return A;
            }),
            n.d(t, 'd', function() {
                return M;
            }),
            n.d(t, 'l', function() {
                return P;
            });
        const { assign: g } = Object;
        function _() {
            return (e, t) => {
                const {
                    launcherDiscoveryMode: { isLauncherDiscoveryModeOpening: n },
                } = t();
                n
                    ? (e(Object(i.d)()),
                      setTimeout(() => e(b()), 100),
                      setTimeout(() => e(Object(i.a)()), 100))
                    : e(b());
            };
        }
        function b() {
            return (e, t) => {
                const {
                    borderless: { conversationId: n },
                } = t();
                e(
                    n
                        ? I(n)
                        : (e, t) => {
                              const {
                                  app: { isMessengerOpen: n },
                              } = t();
                              e(
                                  n
                                      ? E()
                                      : e => {
                                            e(R()), e({ type: 'OPEN_MESSENGER' }), e(Object(p.a)());
                                        }
                              );
                          }
                );
            };
        }
        function m() {
            return { type: 'OPEN_MESSENGER' };
        }
        function E(e = !1) {
            return { type: 'CLOSE_MESSENGER', fromCloseButton: e };
        }
        function O(e = '', t = !1) {
            return { type: 'SHOW_NEW_CONVERSATION', defaultMessage: e, replaceCurrentView: t };
        }
        function S() {
            return { type: 'SHOW_CONVERSATIONS' };
        }
        function v() {
            return { type: 'SHOW_EMPTY_SCREEN' };
        }
        function y(e = !1) {
            return { type: 'SHOW_MESSENGER_TRIGGER_SCREEN', replaceCurrentView: e };
        }
        function C() {
            return e => {
                e(y(!0)), e({ type: 'OPEN_MESSENGER' });
            };
        }
        function T(e) {
            return t => {
                t(Object(h.a)(e)), t({ type: 'OPEN_MESSENGER' });
            };
        }
        function I(e) {
            return t => {
                t(Object(p.a)()), t(T(e)), t(Object(l.l)(d.b, e));
            };
        }
        function w(e) {
            return t => {
                t(Object(h.a)(e)), t(Object(l.l)(d.b, e));
            };
        }
        function A(e) {
            return t => t(Object(l.l)(d.b, e)).then(() => t(T(e)));
        }
        function R() {
            return (e, t) => {
                const n = t(),
                    { app: r, user: i, message: o } = n,
                    {
                        features: a,
                        inboundConversationsDisabled: d,
                        viewStack: l,
                        isBooting: h,
                    } = r,
                    { hasConversations: f, homeScreenSlots: g, articleConversationId: _ } = i,
                    b = Object(u.b)(n),
                    m = g && g.length > 0,
                    E = Object(s.a)(n),
                    S = c(n),
                    v = (function(e, t) {
                        return (
                            ('user' === e.role && t.inboundMessages) ||
                            ('user' !== e.role && t.anonymousInboundMessages)
                        );
                    })(i, a),
                    y = a.operatorSuggestionsNavigationEnabled;
                h ||
                    (v
                        ? !y && b > 1
                            ? (e({ type: 'SHOW_HOME_SCREEN' }), j(i, 'homescreen'))
                            : o && o.conversationId
                            ? (e(w(o.conversationId)),
                              e(Object(p.a)()),
                              j(i, 'conversation-from-auto-message'))
                            : 1 === E.length
                            ? (e(w(E[0].id)), j(i, 'conversation-from-notification'))
                            : 1 === S.length
                            ? (e(w(S[0].id)), j(i, 'conversation-from-dismissed'))
                            : _
                            ? (e(w(_)), j(i, 'conversation-from-article'))
                            : l.length ||
                              (y || (!m && !f)
                                  ? d
                                      ? m
                                          ? y
                                              ? (e({ type: 'SHOW_CONVERSATIONS' }),
                                                j(i, 'conversations'))
                                              : (e({ type: 'SHOW_HOME_SCREEN' }),
                                                j(i, 'homescreen'))
                                          : (e({ type: 'SHOW_EMPTY_SCREEN' }), j(i, 'empty-screen'))
                                      : (e(O()), j(i, 'new-conversation'))
                                  : (e({ type: 'SHOW_HOME_SCREEN' }), j(i, 'homescreen')))
                        : (e({ type: 'SHOW_EMPTY_SCREEN' }), j(i, 'empty-screen')));
            };
        }
        function j(e, t = 'homescreen') {
            f.j.buildAndAddMetric(e, t, 'initial-screen', 'messenger', 'from_launcher');
        }
        function N(e, t) {
            const n = t(),
                i = (function(e) {
                    return g({}, e, { viewStack: e.viewStack.slice(0, -1) });
                })(n.app);
            Object(r.e)(n) && 'messenger-trigger' === Object(r.c)(i)
                ? e({ type: 'SHOW_HOME_SCREEN' })
                : Object(r.e)(n)
                ? e({ type: 'MESSENGER_NAVIGATE_BACK' })
                : n.app.features.operatorSuggestionsNavigationEnabled
                ? e({ type: 'SHOW_CONVERSATIONS' })
                : e({ type: 'SHOW_HOME_SCREEN' });
        }
        function M() {
            return N;
        }
        function P() {
            return { type: 'TOGGLE_UPFRONT_EMAIL_COLLECTOR_STATE' };
        }
        t.b = {
            closeMessenger: E,
            getAndOpenConversation: A,
            navigateBack: M,
            onLauncherClick: _,
            openConversation: T,
            openConversationInMessenger: I,
            openConversations: function() {
                return e => {
                    e({ type: 'SHOW_CONVERSATIONS' }), e({ type: 'OPEN_MESSENGER' });
                };
            },
            openMessenger: m,
            openNewConversation: function(e) {
                return (t, n) => {
                    n().app.inboundConversationsDisabled || t(O(e)), t({ type: 'OPEN_MESSENGER' });
                };
            },
            showAndGetConversation: w,
            showConversation: h.a,
            showConversations: S,
            showEmptyScreen: v,
            showMessengerTriggerScreen: y,
            showInitialScreen: R,
            showNewConversation: O,
            toggleMessenger: b,
            toggleUpfrontEmailCollectorState: P,
            openMessengerLoadingView: C,
        };
    },
    80: function(e, t, n) {
        'use strict';
        n.d(t, 'e', function() {
            return s;
        }),
            n.d(t, 'b', function() {
                return o;
            }),
            n.d(t, 'c', function() {
                return a;
            }),
            n.d(t, 'd', function() {
                return u;
            }),
            n.d(t, 'a', function() {
                return d;
            });
        let r, i;
        function s() {
            return (e, t) => {
                const {
                    launcherDiscoveryMode: {
                        hasDiscoveredLauncher: n,
                        isLauncherDiscoveryModeOpening: r,
                        isLauncherDiscoveryModeClosing: i,
                    },
                } = t();
                n ||
                    r ||
                    i ||
                    (setTimeout(() => {
                        e({ type: 'OPEN_LAUNCHER_DISCOVERY_MODE' });
                    }, 6e3),
                    c(e));
            };
        }
        function o() {
            r && clearTimeout(r), i && clearTimeout(i);
        }
        function a() {
            return e => {
                c(e);
            };
        }
        const c = e => {
            (r = setTimeout(() => e({ type: 'CLOSE_LAUNCHER_DISCOVERY_MODE' }), 9500)),
                (i = setTimeout(() => e({ type: 'DISABLE_LAUNCHER_DISCOVERY_MODE' }), 10200));
        };
        function u() {
            return { type: 'OPENING_MESSENGER_FROM_LAUNCHER_DISCOVERY_MODE' };
        }
        function d() {
            return { type: 'DISABLE_LAUNCHER_DISCOVERY_MODE' };
        }
    },
    81: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return r;
        });
        const r = { default: '#3b99fc', dark: '#38373e', light: '#cdcecd' };
    },
    83: function(e, t, n) {
        'use strict';
        n.d(t, 'b', function() {
            return u;
        }),
            n.d(t, 'a', function() {
                return d;
            });
        var r = n(23),
            i = n.n(r),
            s = n(4),
            o = n(16),
            a = n(33);
        const c = i()('intercom.actions.predictive-answers');
        function u(e, t, n = !1) {
            return async (r, i) => {
                try {
                    const c = void 0,
                        u = i(),
                        { session: l } = u,
                        p = Object(o.b)(),
                        h = {
                            clientId: p,
                            body: Object(a.c)(t.text),
                            createdAt: new Date(),
                            composerSuggestionItem: t,
                        };
                    r(d(null)), r(Object(s.h)(h, n));
                    const f = await e.fireComposerSuggestion(l, {
                        conversationId: c,
                        suggestion: t,
                        clientId: p,
                    });
                    r(Object(s.i)(f, null, null, Date.now(), 'predictive_answer'));
                } catch (e) {
                    r(Object(s.g)(null)),
                        c(`Couldnt start conversation from suggestion due to e=${e}`);
                }
            };
        }
        function d(e) {
            return { type: 'SET_PREDICTIVE_ANSWERS', predictiveAnswersSuggestions: e };
        }
    },
    84: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return i;
        }),
            n.d(t, 'c', function() {
                return s;
            }),
            n.d(t, 'b', function() {
                return o;
            }),
            n.d(t, 'd', function() {
                return u;
            });
        const r = [],
            i = e => {
                a(e);
                const t = document.createElement('meta');
                (t.id = 'intercom-viewport-meta'),
                    (t.name = 'viewport'),
                    (t.content =
                        'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'),
                    e.document.getElementsByTagName('head')[0].appendChild(t);
            },
            s = e => {
                const t = e.document.getElementById('intercom-viewport-meta');
                t && (t.parentNode.removeChild(t), c(e));
            },
            o = (e = window.parent) =>
                e.innerWidth <= 450 || (e.innerWidth <= 900 && e.innerHeight <= 450),
            a = e => {
                [].slice.call(e.document.getElementsByTagName('meta')).forEach(e => {
                    'viewport' === e.name && (r.push(e.cloneNode()), e.parentNode.removeChild(e));
                });
            },
            c = e => {
                const t = r.length;
                for (let n = 0; n < t; n++)
                    e.document.getElementsByTagName('head')[0].appendChild(r.pop());
            },
            u = () => {
                try {
                    o() && !window.parent.navigator.standalone && window.parent.scrollTo(0, 0);
                } catch (e) {}
            };
    },
    85: function(e, t, n) {
        'use strict';
        var r = n(11),
            i = n.n(r),
            s = n(0),
            o = n(13),
            a = n(200);
        t.a = Object(s.createSelector)(
            [e => e.app, e => e.user, e => e.launcher, a.a],
            (e, t, n, r) =>
                !r &&
                (function(e, t) {
                    const {
                        inboundMessages: n,
                        outboundMessages: r,
                        anonymousInboundMessages: i,
                    } = e.features;
                    return 'user' === t.role ? n || r : i;
                })(e, t) &&
                (function(e) {
                    switch (e.launcherEnabledOverride) {
                        case 'show':
                            return !0;
                        case 'hide':
                            return !1;
                        default:
                            return e.isLauncherEnabled;
                    }
                })(n) &&
                !(function() {
                    const e = o.b.get('intercom-snippet__intersection-mode');
                    return (
                        !i()(e) &&
                        !(
                            -1 !==
                            ['inbound-custom-bot-preview', 'outbound-custom-bot-preview'].indexOf(e)
                        )
                    );
                })()
        );
    },
    86: function(e, t, n) {
        'use strict';
        t.a = e =>
            'participant_added' === e ||
            'participant_removed' === e ||
            'article_feedback_requested' === e ||
            'temporary_expectations' === e;
    },
    87: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return a;
        });
        var r = n(0);
        const i = ['left', 'right'],
            s = e => Math.max(e || 20, 20),
            o = e => ((e => i.indexOf(e) >= 0)(e) ? e : 'right'),
            a = Object(r.createSelector)(
                e => e.app,
                e => e.customizationOverrides,
                (e, t = {}) => {
                    const {
                            alignment: n,
                            horizontalPadding: r,
                            verticalPadding: i,
                            color: a,
                            secondaryColor: c,
                        } = e,
                        {
                            alignment: u,
                            horizontalPadding: d,
                            verticalPadding: l,
                            color: p,
                            secondaryColor: h,
                        } = t;
                    return {
                        alignment: o(u || n),
                        horizontalPadding: s(d || r),
                        verticalPadding: s(l || i),
                        color: p || a,
                        secondaryColor: h || c,
                    };
                }
            );
        t.b = a;
    },
    9: function(e, t, n) {
        'use strict';
        n.d(t, 'c', function() {
            return u;
        }),
            n.d(t, 'f', function() {
                return d;
            }),
            n.d(t, 'd', function() {
                return l;
            }),
            n.d(t, 'e', function() {
                return p;
            }),
            n.d(t, 'a', function() {
                return f;
            }),
            n.d(t, 'h', function() {
                return g;
            }),
            n.d(t, 'b', function() {
                return _;
            }),
            n.d(t, 'g', function() {
                return b;
            }),
            n.d(t, 'i', function() {
                return m;
            });
        var r = n(0),
            i = n(38),
            s = n(5),
            o = n(15);
        const a = ({ viewStack: e }) => e,
            c = Object(r.createSelector)(a, e => !!e && e.length > 1),
            u = Object(r.createSelector)(a, e => (e && e.length > 0 ? e[e.length - 1] : void 0)),
            d = Object(r.createSelector)(a, e => !e || 0 === e.length),
            l = ({ app: e }) => u(e),
            p = ({ app: e }) => c(e);
        function h(e) {
            const { user: t, app: n } = e;
            return (
                !n.inboundConversationsDisabled &&
                ('user' === t.role
                    ? n.features.inboundMessages
                    : n.features.anonymousInboundMessages)
            );
        }
        const f = e => ({ allowNewConversation: h(e) }),
            g = e => {
                const { app: t } = e;
                return t.launcherLogoUrl;
            },
            _ = e => !(h(e) || !e.app.helpCenterSiteUrl || !e.app.features.selfServeIconEnabled),
            b = (e, { currentView: t }) =>
                'home-screen' !== t &&
                'empty-screen' !== t &&
                (!e.app.features.operatorSuggestionsNavigationEnabled || 'conversations' !== t),
            m = e => {
                if (!e) return !1;
                const { officeHoursResponse: t } = e.app,
                    n = { only_outside_of_office_hours: !!t, always: !0, never: !1 },
                    { role: r, userSuppliedEmail: a } = e.user,
                    {
                        upfrontEmailCollectionSetting: c,
                        upfrontEmailCollectionSubmitted: u,
                    } = e.app.upfrontEmailCollection,
                    d = e.session && e.session.email,
                    l = Object(i.a)(e);
                return (
                    (!l || !l.isEmailAttributeCollectorInserted) &&
                    !a &&
                    -1 !== ['visitor', 'lead'].indexOf(r) &&
                    !d &&
                    !u &&
                    !(function(e) {
                        return !!e && Object(s.i)(e) && !Object(o.a)(e.parts).author.isBot;
                    })(l) &&
                    n[c]
                );
            };
    },
    93: function(e, t, n) {
        'use strict';
        let r, i;
        n.d(t, 'a', function() {
            return o;
        }),
            n.d(t, 'f', function() {
                return a;
            }),
            n.d(t, 'e', function() {
                return c;
            }),
            n.d(t, 'c', function() {
                return u;
            }),
            n.d(t, 'b', function() {
                return d;
            }),
            n.d(t, 'd', function() {
                return l;
            });
        let s = !1;
        const o = () => r,
            a = e => (r = e),
            c = e => (i = e),
            u = () => i,
            d = () => !s,
            l = e => (s = e);
    },
});
