!(function(e) {
    function t(t) {
        for (var r, a, s = t[0], c = t[1], u = t[2], l = 0, p = []; l < s.length; l++)
            (a = s[l]),
                Object.prototype.hasOwnProperty.call(i, a) && i[a] && p.push(i[a][0]),
                (i[a] = 0);
        for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
        for (d && d(t); p.length; ) p.shift()();
        return o.push.apply(o, u || []), n();
    }
    function n() {
        for (var e, t = 0; t < o.length; t++) {
            for (var n = o[t], r = !0, s = 1; s < n.length; s++) {
                var c = n[s];
                0 !== i[c] && (r = !1);
            }
            r && (o.splice(t--, 1), (e = a((a.s = n[0]))));
        }
        return e;
    }
    var r = {},
        i = { 8: 0 },
        o = [];
    function a(t) {
        if (r[t]) return r[t].exports;
        var n = (r[t] = { i: t, l: !1, exports: {} });
        return e[t].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
    }
    (a.e = function(e) {
        var t = [],
            n = i[e];
        if (0 !== n)
            if (n) t.push(n[2]);
            else {
                var r = new Promise(function(t, r) {
                    n = i[e] = [t, r];
                });
                t.push((n[2] = r));
                var o,
                    s = document.createElement('script');
                (s.charset = 'utf-8'),
                    (s.timeout = 120),
                    a.nc && s.setAttribute('nonce', a.nc),
                    (s.src = (function(e) {
                        return (
                            a.p +
                            '' +
                            ({
                                0: 'banner~message~messenger',
                                1: 'vendors~banner~message~messenger',
                                2: 'message~messenger',
                                3: 'app',
                                4: 'banner',
                                5: 'bound-events',
                                7: 'confetti',
                                9: 'install',
                                10: 'launcher-discovery',
                                11: 'locale-ar-json',
                                12: 'locale-bg-json',
                                13: 'locale-bs-json',
                                14: 'locale-ca-json',
                                15: 'locale-cs-json',
                                16: 'locale-da-json',
                                17: 'locale-de-form-json',
                                18: 'locale-de-json',
                                19: 'locale-el-json',
                                20: 'locale-es-json',
                                21: 'locale-et-json',
                                22: 'locale-fi-json',
                                23: 'locale-fr-json',
                                24: 'locale-he-json',
                                25: 'locale-hr-json',
                                26: 'locale-hu-json',
                                27: 'locale-id-json',
                                28: 'locale-it-json',
                                29: 'locale-ja-json',
                                30: 'locale-ko-json',
                                31: 'locale-lt-json',
                                32: 'locale-lv-json',
                                33: 'locale-mn-json',
                                34: 'locale-nb-json',
                                35: 'locale-nl-json',
                                36: 'locale-package-json',
                                37: 'locale-pl-json',
                                38: 'locale-pt-BR-json',
                                39: 'locale-pt-json',
                                40: 'locale-ro-json',
                                41: 'locale-ru-json',
                                42: 'locale-sl-json',
                                43: 'locale-sr-json',
                                44: 'locale-sv-json',
                                45: 'locale-tr-json',
                                46: 'locale-vi-json',
                                47: 'locale-zh-CN-json',
                                48: 'locale-zh-TW-json',
                                49: 'message',
                                50: 'messenger',
                                54: 'sentry',
                                58: 'vendors~app',
                                59: 'vendors~bound-events',
                                60: 'vendors~message',
                                61: 'vendors~sentry',
                            }[e] || e) +
                            '.' +
                            {
                                0: 'c16969ed',
                                1: 'd326c29f',
                                2: 'd9c92c84',
                                3: 'e3c9b7cf',
                                4: 'c3178595',
                                5: '6d9814e6',
                                7: 'b9ccb160',
                                9: 'cd9ca0b7',
                                10: '46625dfd',
                                11: '7d1a3cb4',
                                12: 'b21e8996',
                                13: '68f74773',
                                14: '86319c8e',
                                15: 'ae4bcd96',
                                16: '4ffce8a4',
                                17: 'f80781cb',
                                18: '5e008324',
                                19: '48ee20ee',
                                20: '200fc542',
                                21: '97ea7b65',
                                22: 'd81ac69c',
                                23: 'd4266e63',
                                24: '4e8666dc',
                                25: 'a164f015',
                                26: '18fcfcb4',
                                27: '76298bce',
                                28: 'df63cb84',
                                29: '3eee841f',
                                30: '80839981',
                                31: '62aae196',
                                32: 'cf6b99f6',
                                33: '0827032c',
                                34: '918981d5',
                                35: '83ed0f57',
                                36: '0a5325aa',
                                37: '6ecaa5f3',
                                38: '744602ab',
                                39: '6133c6a5',
                                40: '32685268',
                                41: '8c2589bb',
                                42: '30e0d474',
                                43: 'c7f7b777',
                                44: '524dd2b0',
                                45: 'adff9f6f',
                                46: 'a3f9fe91',
                                47: '9a050b9e',
                                48: 'f3272f58',
                                49: '88f51eaf',
                                50: '02f55faa',
                                54: '8c0bdda7',
                                58: '273ca945',
                                59: '431f5649',
                                60: '7572753b',
                                61: '04d160e8',
                            }[e] +
                            '.js'
                        );
                    })(e));
                var c = new Error();
                o = function(t) {
                    (s.onerror = s.onload = null), clearTimeout(u);
                    var n = i[e];
                    if (0 !== n) {
                        if (n) {
                            var r = t && ('load' === t.type ? 'missing' : t.type),
                                o = t && t.target && t.target.src;
                            (c.message = 'Loading chunk ' + e + ' failed.\n(' + r + ': ' + o + ')'),
                                (c.name = 'ChunkLoadError'),
                                (c.type = r),
                                (c.request = o),
                                n[1](c);
                        }
                        i[e] = void 0;
                    }
                };
                var u = setTimeout(function() {
                    o({ type: 'timeout', target: s });
                }, 12e4);
                (s.onerror = s.onload = o), document.head.appendChild(s);
            }
        return Promise.all(t);
    }),
        (a.m = e),
        (a.c = r),
        (a.d = function(e, t, n) {
            a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (a.r = function(e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (a.t = function(e, t) {
            if ((1 & t && (e = a(e)), 8 & t)) return e;
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (
                (a.r(n),
                Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
                2 & t && 'string' != typeof e)
            )
                for (var r in e)
                    a.d(
                        n,
                        r,
                        function(t) {
                            return e[t];
                        }.bind(null, r)
                    );
            return n;
        }),
        (a.n = function(e) {
            var t =
                e && e.__esModule
                    ? function() {
                          return e.default;
                      }
                    : function() {
                          return e;
                      };
            return a.d(t, 'a', t), t;
        }),
        (a.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (a.p = 'https://js.intercomcdn.com/'),
        (a.oe = function(e) {
            throw (console.error(e), e);
        });
    var s = (window.webpackJsonp = window.webpackJsonp || []),
        c = s.push.bind(s);
    (s.push = t), (s = s.slice());
    for (var u = 0; u < s.length; u++) t(s[u]);
    var d = c;
    o.push([921, 57]), n();
})({
    110: function(e, t, n) {
        'use strict';
        var r, i;
        n.d(t, 'a', function() {
            return a;
        }),
            n.d(t, 'f', function() {
                return s;
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
        var o = !1,
            a = function() {
                return r;
            },
            s = function(e) {
                return (r = e);
            },
            c = function(e) {
                return (i = e);
            },
            u = function() {
                return i;
            },
            d = function() {
                return !o;
            },
            l = function(e) {
                return (o = e);
            };
    },
    112: function(e, t, n) {
        'use strict';
        n.d(t, 'd', function() {
            return o;
        }),
            n.d(t, 'c', function() {
                return a;
            }),
            n.d(t, 'e', function() {
                return s;
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
                return f;
            });
        var r = n(4),
            i = function(e) {
                return e.messengerSheet;
            },
            o =
                (Object(r.createSelector)(i, function(e) {
                    return e.isSheetsDataLoading;
                }),
                Object(r.createSelector)(i, function(e) {
                    return e.isSheetsDataLoaded;
                })),
            a = Object(r.createSelector)(i, function(e) {
                return e.isProxyLoaded;
            }),
            s = Object(r.createSelector)(i, function(e) {
                return e.sheetTitle;
            }),
            c = Object(r.createSelector)(i, function(e) {
                return e.isNavigating;
            }),
            u = Object(r.createSelector)(i, function(e) {
                return e.isOpen;
            }),
            d = Object(r.createSelector)(i, function(e) {
                return e.sourceCard;
            }),
            l = Object(r.createSelector)(i, function(e) {
                return e.url;
            }),
            p = Object(r.createSelector)(i, function(e) {
                return e.data;
            }),
            f = Object(r.createSelector)(p, function(e) {
                return JSON.stringify(e);
            });
    },
    129: function(e, t, n) {
        'use strict';
        var r = n(22),
            i = n(285),
            o = n.n(i),
            a = n(214);
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
                return f;
            }),
            n.d(t, 'c', function() {
                return v;
            }),
            n.d(t, 'a', function() {
                return h;
            }),
            n.d(t, 'b', function() {
                return g;
            });
        var s = ['image', 'attachmentList', 'video', 'videoReply', 'videoFile', 'messengerCard'],
            c = ['image', 'video', 'videoReply', 'videoFile', 'notificationChannelsCard'],
            u = [
                { user: 'sent_an_image', admin: 'sent_you_an_image' },
                { user: 'sent_an_attachment', admin: 'sent_you_an_attachment' },
                { user: 'sent_a_video', admin: 'sent_you_a_video' },
                { user: 'sent_a_video_reply', admin: 'sent_you_a_video_reply' },
                { user: 'sent_a_video', admin: 'sent_you_a_video' },
                { user: 'sent_an_app', admin: 'sent_you_an_app' },
            ],
            d = function(e) {
                return e && e.type && 'videoFile' === e.type;
            },
            l = function(e) {
                return c.indexOf(e.type) > -1;
            },
            p = function(e) {
                return e.text || e.content;
            },
            f = function e(t) {
                var n,
                    i = t[t.length - 1],
                    o = i.body,
                    a = i.author,
                    s = i.body.some(l);
                S(o[0]) && (n = _(o));
                var c = b(o),
                    u = O(o, a);
                return (
                    (n = 0 === c.length && u ? u : c),
                    'quick_reply' === i.partType
                        ? e(t.slice(0, t.length - 1))
                        : ((function(e) {
                              return 'attribute_collector' === e.partType;
                          })(i) &&
                              ((n = Object(r.e)('operator_asked_for_attribute', {
                                  attribute: m(i),
                              })),
                              (s = !0)),
                          { author: a, summaryText: n, isMetadata: s })
                );
            },
            v = function(e) {
                var t = Object(a.a)(e);
                return y(t).map(function(e) {
                    return { type: 'paragraph', text: e };
                });
            },
            h = function(e, t, n) {
                return [
                    { type: 'attachmentList', attachments: [{ contentType: t, name: e, size: n }] },
                ];
            },
            g = function(e, t, n, r, i) {
                return [{ type: 'image', url: e, width: t, height: n, attribution: r, title: i }];
            },
            m = function(e) {
                return e.form.attributes[0].identifier.toLowerCase().replace('.', ' ');
            },
            b = function(e) {
                var t = e
                    .filter(function(e) {
                        return 'button' !== e.type && !S(e);
                    })
                    .map(function(e) {
                        return E(e);
                    })
                    .filter(function(e) {
                        return !!e;
                    })
                    .join(' ');
                return o()(t.replace(/<br>/g, ' '));
            },
            _ = function(e) {
                var t = e.filter(function(e) {
                    return S(e);
                })[0];
                if (t && t.title) return o()(t.title);
            },
            E = function(e) {
                switch (e.type) {
                    case 'videoFile':
                    case 'messengerCard':
                        return '';
                    case 'orderedList':
                        return e.items
                            .map(function(e, t) {
                                return t + 1 + '. ' + e;
                            })
                            .join(', ');
                    case 'unorderedList':
                        return e.items.join(', ');
                    default:
                        return e.text || e.content;
                }
            },
            O = function(e, t) {
                var n = (function(e) {
                    return e.filter(function(e) {
                        return s.indexOf(e.type) > -1;
                    })[0];
                })(e);
                if (n) {
                    var i = s.indexOf(n.type),
                        o = u[i];
                    return t.isAdmin ? Object(r.e)(o.admin) : Object(r.e)(o.user);
                }
            },
            S = function(e) {
                return e && e.type && 'link' === e.type;
            },
            y = function(e) {
                for (var t = e.split('\n\n'), n = 0; n < t.length; n++)
                    t[n] = t[n].replace(/\n/g, '<br>');
                return t.filter(function(e) {
                    return e;
                });
            };
    },
    130: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return r;
        });
        var r = { default: '#3b99fc', dark: '#38373e', light: '#cdcecd' };
    },
    133: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return i;
        });
        var r;
        function i(e, t) {
            return function(n) {
                n({ type: 'SHOW_ALERT', payload: { alertType: e, alertPayload: t } }),
                    r && clearTimeout(r),
                    (r = setTimeout(function() {
                        n({ type: 'CLOSE_ALERT' });
                    }, 5e3));
            };
        }
    },
    134: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return r;
        });
        var r = function() {
            return (
                window.parent &&
                window.parent.intercomSettings &&
                'tx2p130c' === window.parent.intercomSettings.app_id
            );
        };
    },
    136: function(e, t, n) {
        'use strict';
        n.d(t, 'g', function() {
            return v;
        }),
            n.d(t, 'b', function() {
                return h;
            }),
            n.d(t, 'k', function() {
                return g;
            }),
            n.d(t, 'a', function() {
                return m;
            }),
            n.d(t, 'i', function() {
                return b;
            }),
            n.d(t, 'j', function() {
                return _;
            }),
            n.d(t, 'f', function() {
                return E;
            }),
            n.d(t, 'h', function() {
                return O;
            }),
            n.d(t, 'd', function() {
                return S;
            }),
            n.d(t, 'e', function() {
                return y;
            }),
            n.d(t, 'c', function() {
                return C;
            });
        var r = n(149),
            i = n(62),
            o = n(85),
            a = n(43),
            s = n(195),
            c = n(112),
            u = n(52),
            d = n(46),
            l = n(7),
            p = n(133),
            f = n(203);
        function v(e, t) {
            return function(n, r) {
                var i = (t.data || {}).intercomSheet,
                    o = r(),
                    u = Object(c.g)(o);
                if (!i) return null;
                switch (i.type) {
                    case s.b:
                        n({ type: 'FINISH_NAVIGATION' });
                        break;
                    case a.f:
                        n({ type: 'START_NAVIGATION' });
                        break;
                    case a.b:
                        n({ type: 'FINISH_NAVIGATION' });
                        break;
                    case a.a:
                        n(m('sheet_api_close'));
                        break;
                    case a.e:
                        if (!i.payload) return;
                        n(b(i.payload.title));
                        break;
                    case a.g:
                        if (!u) return null;
                        n({ type: 'START_NAVIGATION' }), n(g(e, i.payload));
                }
            };
        }
        function h(e, t, n, r, i) {
            return function(o, a) {
                var s = a(),
                    c = s.app.isMessengerOpen,
                    d = s.session;
                return (
                    c || o(Object(u.k)()),
                    o(
                        (function(e, t, n) {
                            return { type: 'OPEN_SHEET', url: e, cardUri: t, componentId: n };
                        })(r, t, n)
                    ),
                    o(S()),
                    o(Object(f.a)()),
                    e
                        .fetchMessengerSheetData(d, t, n, i)
                        .then(function(e) {
                            o(y(e));
                        })
                        .catch(function() {
                            o(C());
                        })
                );
            };
        }
        function g(e, t) {
            return function(n, a) {
                var s = a(),
                    u = Object(c.g)(s).cardUri,
                    d = s.session;
                return e
                    .submitSheet(d, u, t)
                    .then(function(t) {
                        n(Object(r.d)(t)), n(Object(i.a)(e, t));
                    })
                    .then(function() {
                        return new Promise(function(e) {
                            return setTimeout(e, 2 * o.b);
                        });
                    })
                    .then(function() {
                        n({ type: 'FINISH_NAVIGATION' }), n(m('sheet_api_submit'));
                    })
                    .catch(function() {
                        n(Object(p.a)('MessengerSheetSubmitError', { sheetValues: t }));
                    });
            };
        }
        function m(e) {
            return function(t, n) {
                var r = n(),
                    i = Object(c.g)(r).cardUri,
                    o = r.messengerCards[i].card;
                if (o) {
                    var a = r.messengerSheet.url,
                        s = r.user,
                        u = r.app.conversationId;
                    !(function(e, t, n, r, i, o) {
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
                                conversation_id: o,
                            },
                            'm4_metric'
                        );
                    })(
                        s,
                        'sheet_api_submit' === e || 'sheet_api_close' === e ? e : Object(d.d)(r),
                        a,
                        i,
                        o.messenger_app_id,
                        u
                    );
                }
                t({ type: 'CLOSE_SHEET' });
            };
        }
        function b(e) {
            return { type: 'SET_SHEET_TITLE', sheetTitle: e };
        }
        function _() {
            return { type: 'START_NAVIGATION' };
        }
        function E() {
            return { type: 'FINISH_NAVIGATION' };
        }
        function O(e) {
            return void 0 === e && (e = !1), { type: 'SET_PROXY_LOADED_STATUS', isLoaded: e };
        }
        var S = function() {
                return { type: 'FETCH_MESSENGER_SHEET_DATA_REQUEST' };
            },
            y = function(e) {
                return { type: 'FETCH_MESSENGER_SHEET_DATA_SUCCESS', data: e };
            },
            C = function() {
                return { type: 'FETCH_MESSENGER_SHEET_DATA_FAILURE' };
            };
    },
    144: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return i;
        });
        var r = n(4),
            i = Object(r.createSelector)(
                [
                    function(e) {
                        return e.app.conversationId;
                    },
                    function(e) {
                        return e.conversations.byId;
                    },
                    function(e) {
                        return e.newConversation;
                    },
                ],
                function(e, t, n) {
                    var r = null === e ? n : t[e];
                    if (r) return r.composerState || (r.composerState = n.composerState), r;
                }
            );
    },
    145: function(e, t, n) {
        'use strict';
        n.d(t, 'c', function() {
            return O;
        }),
            n.d(t, 'a', function() {
                return S;
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
            o = n(343),
            a = n.n(o),
            s = n(37),
            c = n.n(s),
            u = n(344),
            d = n.n(u),
            l = n(212),
            p = n.n(l),
            f = n(193);
        function v(e, t, n, r, i, o, a) {
            try {
                var s = e[o](a),
                    c = s.value;
            } catch (e) {
                return void n(e);
            }
            s.done ? t(c) : Promise.resolve(c).then(r, i);
        }
        var h,
            g,
            m = '1' === window.navigator.doNotTrack,
            b = [
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
            _ = [],
            E = function(e) {
                return (function e(t) {
                    return d()(t, function(t, n, r) {
                        b.indexOf(r) >= 0
                            ? (t[r] = 'removedIdentifyingInfo')
                            : c()(n) && !a()(n)
                            ? (t[r] = e(n.toJS ? n.toJS() : n))
                            : (t[r] = n);
                    });
                })(p()(e));
            },
            O = (function() {
                var e,
                    t =
                        ((e = regeneratorRuntime.mark(function e(t) {
                            var r, i, o, a, s;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (e.next = 2),
                                                Object(f.a)({
                                                    promise: function() {
                                                        /*
                                                        Do not load sentry lib because it causes problems with CORS

                                                        return Promise.all([n.e(61), n.e(54)]).then(
                                                            n.bind(null, 880)
                                                        );*/
                                                        console.warn(
                                                            'Sentry lib was prevented from loading'
                                                        );
                                                        return Promise.resolve();
                                                    },
                                                })
                                            );
                                        case 2:
                                            // Prevent errors due to avoid sentry lib load
                                            if (e.sent)
                                                (r = e.sent),
                                                    (i = r.addTag),
                                                    (o = r.addExtra),
                                                    (a = r.logError),
                                                    (s = r.addBreadcrumb),
                                                    i('app.id', h),
                                                    _.forEach(function(e) {
                                                        var t = e.type;
                                                        return s('redux-action', t);
                                                    }),
                                                    g &&
                                                        g.getState &&
                                                        o(
                                                            'state',
                                                            ((c = g.getState()),
                                                            m ? 'removedIdentifyingInfo' : E(c))
                                                        ),
                                                    a(t);
                                        case 11:
                                        case 'end':
                                            return e.stop();
                                    }
                                var c;
                            }, e);
                        })),
                        function() {
                            var t = this,
                                n = arguments;
                            return new Promise(function(r, i) {
                                var o = e.apply(t, n);
                                function a(e) {
                                    v(o, r, i, a, s, 'next', e);
                                }
                                function s(e) {
                                    v(o, r, i, a, s, 'throw', e);
                                }
                                a(void 0);
                            });
                        });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })(),
            S = function(e) {
                (e.onerror = function(e, t, n, r, i) {
                    return O(i);
                }),
                    (e.onunhandledrejection = function(e) {
                        return O(e.reason);
                    });
            },
            y = function(e) {
                e && (h = e);
            },
            C = function(e) {
                e && (g = e);
            },
            T = function() {
                return function(e) {
                    return function(t) {
                        return _.push({ type: t.type, timestamp: +new Date() }), e(t);
                    };
                };
            };
        (null === (r = window) || void 0 === r
            ? void 0
            : null === (i = r.parent) || void 0 === i
            ? void 0
            : i.intercomSettings) && y(window.parent.intercomSettings.app_id);
    },
    149: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return a;
        }),
            n.d(t, 'c', function() {
                return s;
            }),
            n.d(t, 'd', function() {
                return c;
            }),
            n.d(t, 'b', function() {
                return u;
            });
        var r = n(53),
            i = n(62),
            o = n(133),
            a = function(e, t, n, r) {
                return function(a, d) {
                    var l = d().session;
                    return (
                        a(s(t, n)),
                        e
                            .submitMessengerCardAction(l, t, n, r)
                            .then(function(t) {
                                a(c(t)), a(Object(i.a)(e, t));
                            })
                            .catch(function() {
                                a(u(t, n)),
                                    a(
                                        Object(o.a)('MessengerCardSubmitError', {
                                            cardUri: t,
                                            componentId: n,
                                            inputValues: r,
                                        })
                                    );
                            })
                    );
                };
            },
            s = function(e, t) {
                return { type: 'SUBMIT_MESSENGER_CARD_ACTION_REQUEST', cardUri: e, componentId: t };
            },
            c = function(e) {
                return { type: 'SUBMIT_MESSENGER_CARD_ACTION_SUCCESS', card: Object(r.c)(e) };
            },
            u = function(e, t) {
                return { type: 'SUBMIT_MESSENGER_CARD_ACTION_FAILURE', cardUri: e, componentId: t };
            };
    },
    16: function(e, t, n) {
        'use strict';
        n.d(t, 'c', function() {
            return S;
        }),
            n.d(t, 'a', function() {
                return R;
            }),
            n.d(t, 'd', function() {
                return de;
            });
        var r = n(132),
            i = n.n(r),
            o = n(44),
            a = n.n(o),
            s = n(334),
            c = n(6),
            u = n(335),
            d = n(72),
            l = n(214),
            p = n(19),
            f = n(66);
        function v(e, t) {
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
        function h(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? v(n, !0).forEach(function(t) {
                          g(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : v(n).forEach(function(t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        }
        function g(e, t, n) {
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
        var m = Object.assign,
            b = Object(s.b)();
        function _(e, t, n, r, i, o, a) {
            void 0 === o && (o = null), void 0 === a && (a = !1);
            var s = { created_at: t, self_serve_suggestions_match: a };
            r && (s.client_assigned_uuid = r),
                i && (s.email = i),
                o && (s.composer_suggestions = JSON.stringify(o.suggestions));
            var c = e[0];
            if ('paragraph' === c.type)
                (e = e.map(function(e) {
                    return { type: e.type, text: Object(l.b)(e.text) };
                })),
                    (s.blocks = JSON.stringify(e));
            else if ('image' === c.type) n && (c.url = n.publicUrl), (s.blocks = JSON.stringify(e));
            else if ('attachmentList' === c.type && n) {
                var u = c.attachments[0];
                (u.id = n.id),
                    (u.url = n.publicUrl),
                    (u.contentType = n.contentType),
                    (s.blocks = JSON.stringify(e));
            }
            return s;
        }
        function E(e, t, n, r) {
            return {
                metrics: JSON.stringify(e),
                logs: JSON.stringify(t),
                op_metrics: JSON.stringify(n),
                hc_metrics: JSON.stringify(r),
            };
        }
        function O(e) {
            return e ? { progress_id: e } : {};
        }
        function S(e, t, n) {
            var r = b.api_base + '/messenger/web/self_serve_suggestions',
                i = { query: t, answers_limit: n };
            return c.b.post({ url: r, session: e, params: i });
        }
        function y(e) {
            return { conversations: e.conversations.map(R), pages: T(e.pages) };
        }
        function C(e) {
            return {
                unreadConversationIds: (e.unread_conversation_ids || []).map(function(e) {
                    return e.toString();
                }),
                unreadDismissedConversationIds: (e.unread_dismissed_conversation_ids || []).map(
                    function(e) {
                        return e.toString();
                    }
                ),
            };
        }
        function T(e) {
            return { page: e.page, perPage: e.per_page, totalPages: e.total_pages };
        }
        function I(e) {
            return (
                !!e.conversation_message.team_author &&
                0 ===
                    (e.conversation_parts
                        ? e.conversation_parts.conversation_parts || e.conversation_parts
                        : []
                    ).filter(function(e) {
                        return e.author.is_admin && !e.author.is_bot;
                    }).length
            );
        }
        function w(e) {
            return I(e) || !e.last_participating_admin ? void 0 : W(e.last_participating_admin);
        }
        function R(e) {
            return {
                composerState: A(e.composer_state),
                dismissed: e.dismissed,
                id: e.id,
                intercomLinkSolution: e.intercom_link_solution,
                lastPartCreatedAt: Object(d.c)(e.updated_at),
                lastParticipatingAdmin: w(e),
                participants: e.participants || [],
                parts: [M(e)].concat(x(e)),
                preventEndUserReplies: e.prevent_end_user_replies,
                read: e.read,
                readAt: e.read_at ? Object(d.c)(e.read_at) : void 0,
                replyPlaceholder: e.reply_area_placeholder,
                userParticipated: e.user_participated,
            };
        }
        function A(e) {
            if (e)
                return {
                    visible: e.visible,
                    selfServeSuggestionsEnabled: e.self_serve_suggestions_enabled,
                };
        }
        function j(e) {
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
                reactionsReply: te(e.reactions_reply),
                title: e.title,
                updatedAt: e.updated_at,
            };
            var t;
        }
        function N(e) {
            return I(e)
                ? {
                      admins: (e.conversation_message.team_author.last_active_admins || []).map(W),
                      name: e.conversation_message.team_author.name,
                  }
                : void 0;
        }
        function M(e) {
            var t,
                n = e.conversation_message;
            return {
                author: U(n.author),
                body: ee(n.blocks || [], n.attachments || []),
                clientId: n.client_assigned_uuid,
                createdAt: Object(d.c)(n.created_at),
                eventData: {},
                form: n.form,
                id: 'message-' + n.id,
                isMessage: !0,
                messageType: X(n),
                notificationType:
                    ((t = n.delivery_option),
                    { badge: 'badge', full: 'full', summary: 'snippet' }[t]),
                partType: 'message',
                pointerSelector: n.pointer_selector,
                reactionsReply: n.reactions_reply ? te(n.reactions_reply) : void 0,
                replyOptions: n.reply_options || [],
                replyType: n.reply_type,
                seenState: Z(n.seen_by_admin),
                sentAt: Object(d.c)(n.sent_at),
                showCreatedAt: n.show_created_at,
                teamAuthor: N(e),
            };
        }
        function U(e) {
            return {
                admins: e.authors ? e.authors.map(P) : [],
                avatar: Y(e.avatar),
                firstName: D(e.first_name),
                id: e.id,
                initial: e.initial,
                isAdmin: e.is_admin,
                isBot: e.is_bot,
                isSelf: e.is_self,
                type: e.type.toLowerCase(),
            };
        }
        function P(e) {
            return { avatar: Y(e.avatar), firstName: D(e.first_name) };
        }
        function D(e) {
            return e || '';
        }
        function k(e) {
            return void 0 === e && (e = []), e.map(L);
        }
        function L(e) {
            return h({}, e, { from: W(e.from) });
        }
        function x(e) {
            var t = [];
            return (
                e.conversation_parts &&
                    (t = e.conversation_parts.conversation_parts || e.conversation_parts),
                t
                    .filter(function(e) {
                        return 'lightweight_reply_user_response' !== e.part_type;
                    })
                    .map(G)
            );
        }
        function G(e) {
            return {
                author: {
                    avatar: Y(e.author.avatar),
                    firstName: D(e.author.first_name),
                    id: e.author.id,
                    initial: e.author.initial,
                    isAdmin: e.author.is_admin,
                    isBot: e.author.is_bot,
                    isSelf: e.author.is_self,
                    type: e.author.is_admin ? 'admin' : 'user',
                },
                body: ee(e.blocks || [], e.attachments || []),
                clientId: e.client_assigned_uuid,
                conversationRating: re(e),
                createdAt: Object(d.c)(e.created_at),
                eventData: K(e.event_data, e.part_type),
                form: e.form,
                id: e.id,
                isMessage: !1,
                messageType: X(e),
                partType: e.part_type,
                replyOptions: e.reply_options || [],
                seenState: Z(e.seen_by_admin),
                showCreatedAt: !0,
            };
        }
        function V(e) {
            return e
                ? (Object(p.d)('Tour received', e),
                  {
                      id: e.id.toString(),
                      activeStepId: e.active_step_id.toString(),
                      author: U(e.author),
                      steps: ((t = e.steps), i()(t, ['order'], ['asc'])).map(function(e) {
                          return {
                              id: (t = e).id.toString(),
                              blocks: t.blocks,
                              order: t.order,
                              progressionBehavior: ((n = t.progression_behavior), F[n]),
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
        var F = ['manual', 'click', 'type'];
        function H(e) {
            var t = e.install_mode;
            if (t) {
                var n = t.active_subscription,
                    r = t.user_hash_verified,
                    i = t.secure_install_v2,
                    o = t.messenger_enabled_for_visitors;
                return {
                    activeSubscription: n,
                    messengerEnabledForUsers: t.messenger_enabled_for_users,
                    messengerEnabledForVisitors: o,
                    secureInstallV2: i,
                    userHashVerified: r,
                };
            }
        }
        function B(e) {
            var t,
                n,
                r = e.app;
            return {
                activeAdmins: (r.active_admins || []).map(W),
                alignment: e.modules.customization.alignment,
                backgroundImage: r.messenger_background,
                boundWebEvents: ((n = e.bound_web_events), n ? n.map(ie) : []),
                color: e.modules.messages.colors.base,
                compactExpectedResponseDelay: r.compact_expected_response_delay,
                customGoogleAnalyticsTrackerId: e.modules.messages.google_analytics_tracking_id,
                expectedResponseDelayTranslationKey: r.expected_response_delay_translation_key,
                features:
                    ((t = e.modules.messages.features),
                    {
                        anonymousInboundMessages:
                            t.inbound_lead_messaging || t.inbound_lead_messaging_docs_site,
                        composerSuggestionsAsQuickReplies: t.composer_suggestions_as_quick_replies,
                        googleAnalytics: t.google_analytics,
                        hubspotInstalled: t.hubspot_installed,
                        inboundMessages: t.inbound_messages,
                        launcherDiscoveryMode: t.launcher_discovery_mode,
                        marketoEnrichmentInstalled: t.marketo_enrichment_installed,
                        newConversationCard: t.new_conversation_card,
                        operatorSuggestionsNavigationEnabled:
                            t.operator_suggestions_navigation_enabled,
                        outboundMessages: t.outbound_messages,
                        persistAcrossPages: t.persist_across_pages,
                        selfServeIconEnabled: t.self_serve_icon_enabled,
                        singlePageAppRateLimiting: t.single_page_app_rate_limiting,
                        crossSiteCookies: t.cross_site_cookies,
                    }),
                helpCenterSiteUrl: r.help_center_site_url || void 0,
                horizontalPadding: e.modules.customization.horizontal_padding,
                inboundConversationsDisabled: r.inbound_conversations_disabled || !1,
                isAudioEnabled: r.audio_enabled || !1,
                isDeveloperWorkspace: r.developer_workspace || !1,
                isErrorReportingDisabled:
                    e.modules.error_reporting && e.modules.error_reporting.disabled,
                isInstantBootEnabled: !0 === e.modules.messages.instant_boot_enabled,
                isIntercomLinkEnabled: r.show_powered_by,
                temporaryExpectationsMessage: r.temporary_expectations_message,
                isLauncherEnabled: !0 === e.modules.messages.use_activator,
                isOverrideSamplingEnabled: e.modules.metrics && e.modules.metrics.enabled,
                logoUrl: r.messenger_logo_url,
                launcherLogoUrl: r.launcher_logo_url,
                name: r.name,
                officeHoursResponse: r.office_hours_response || void 0,
                originCookieDomain: e.origin_cookie_domain,
                realtimeConfig: { endpoints: e.modules.rtm.endpoints },
                secondaryColor: e.modules.messages.colors.secondary,
                selfServeSuggestionsMatch: r.self_serve_suggestions_match || !1,
                smsEnabled: r.sms_notifications_enabled || !1,
                teamGreeting: r.team_greeting,
                teamIntro: r.team_intro,
                upfrontEmailCollectionSetting: r.upfront_email_collection_setting,
                userConversationAttachmentsEnabled: r.user_conversation_attachments_enabled,
                userConversationGifsEnabled: r.user_conversation_gifs_enabled,
                verticalPadding: e.modules.customization.vertical_padding,
            };
        }
        function W(e) {
            return {
                avatar: Y(e.avatar),
                calendarUrl: z(e.calendar_url),
                firstName: D(e.first_name),
                initial: e.initial || e.avatar.initials,
                intro: z(e.intro),
                isActive: e.is_active,
                isAdmin: !0,
                isBot: e.is_bot,
                isSelf: !1,
                jobTitle: z(e.job_title),
                lastActiveAt: Object(d.c)(e.last_active_at),
                location: e.location ? Q(e.location) : void 0,
                socialAccounts: (e.social_accounts || []).map(q),
            };
        }
        function z(e) {
            if (e && 0 !== e.trim().length) return e;
        }
        function Q(e) {
            return {
                cityName: e.city_name,
                countryCode: e.country_code,
                countryName: e.country_name,
                timezoneOffset: e.timezone_offset,
            };
        }
        function q(e) {
            return {
                imageUrl: e.image_url,
                profileUrl: e.profile_url,
                provider: e.provider,
                username: e.username,
            };
        }
        function Y(e) {
            var t;
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
            var t = ['chat', 'post', 'note', 'video', 'pointer'][e.message_style];
            return (
                t ||
                ('attribute_collector' === e.part_type
                    ? 'attributeCollector'
                    : $(e, 'link') ||
                      (function(e, t) {
                          var n = !0;
                          return (
                              e.blocks.forEach(function(e) {
                                  e.type !== t && (n = !1);
                              }),
                              n && e.blocks.length > 1
                          );
                      })(e, 'link')
                    ? 'link'
                    : $(e, 'notificationChannelsCard')
                    ? 'notificationChannels'
                    : $(e, 'conversationRating')
                    ? 'conversationRating'
                    : void 0)
            );
        }
        function $(e, t) {
            var n = e.blocks && 1 === e.blocks.length && e.blocks[0];
            return n && n.type === t;
        }
        function Z(e) {
            return { unseen: 'not-seen-yet', seen: 'seen' }[e] || 'not-seen-yet';
        }
        function ee(e, t) {
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
            var n = [];
            return (
                (function(e, t) {
                    if (0 === e.length) return t;
                    var n = [];
                    return (
                        e.map(function(e) {
                            e.attachments.map(function(e) {
                                return n.push(e.url);
                            });
                        }),
                        t.filter(function(e) {
                            return n.indexOf(e.url) < 0;
                        })
                    );
                })(
                    e.filter(function(e) {
                        return 'attachmentList' === e.type;
                    }),
                    t
                ).forEach(function(e) {
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
        function te(e) {
            return { reactionIndex: e.reaction_index, reactionSet: (e.reaction_set || []).map(ne) };
        }
        function ne(e) {
            return { emoji: e.unicode_emoticon, index: e.index };
        }
        function re(e) {
            if ('conversationRating' !== X(e)) return {};
            var t = e.blocks[0].remark;
            return { chosenRating: e.blocks[0].rating_index, remark: t };
        }
        function ie(e) {
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
                ? e.map(function(e) {
                      return h({}, e, {
                          serialized_object: se(e.ruleset_link_object_type, e.serialized_object),
                      });
                  })
                : [];
        }
        function se(e, t) {
            switch (e) {
                case 'inbound_trigger':
                    return ce(t);
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
        function ce(e) {
            return e
                ? {
                      composerDisabled: e.composer_disabled,
                      prompt: e.prompt,
                      rulesetId: e.ruleset_id,
                      suggestions: e.suggestions.map(function(e) {
                          return (function(e) {
                              return { preAction: e.pre_action, text: e.text, uuid: e.uuid };
                          })(e);
                      }),
                      updatedAt: e.updated_at,
                  }
                : null;
        }
        function ue(e) {
            var t = Object(f.b)(window);
            t && (e.sdk_webview_platform = t);
        }
        function de() {
            return b.api_base + '/messenger/web/conversations/transcript';
        }
        t.b = {
            addConversationRatingRemark: function(e, t, n) {
                var r = b.api_base + '/messenger/web/conversations/' + t + '/remark',
                    i = { remark: n };
                return c.b.post({ url: r, session: e, params: i }).then(function() {});
            },
            buildBanner: L,
            buildComment: G,
            buildComposerSuggestions: ce,
            buildTour: V,
            changeConversationRatingIndex: function(e, t, n) {
                var r = b.api_base + '/messenger/web/conversations/' + t + '/rate',
                    i = { rating_index: n };
                return c.b.post({ url: r, session: e, params: i }).then(function() {});
            },
            completeTour: function(e, t, n) {
                var r = b.api_base + '/messenger/web/tours/' + t + '/complete',
                    i = O(n);
                return c.b.post({ url: r, session: e, params: i });
            },
            conditionsSatisfied: function(e, t, n) {
                var r = b.api_base + '/messenger/web/conversations/' + t + '/conditions_satisfied',
                    i = { condition_id: n };
                return c.b.post({ url: r, session: e, params: i }).then(R);
            },
            createArticleReaction: function(e, t, n, r, i) {
                void 0 === r && (r = !1), void 0 === i && (i = null);
                var o = b.api_base + '/messenger/web/articles/' + t + '/react',
                    a = { reaction_index: n, allow_auto_responses: r, article_content_id: i };
                return c.b.post({ url: o, session: e, params: a }).then(function() {});
            },
            createComment: function(e, t, n, r, i, o, a) {
                var s = b.api_base + '/messenger/web/conversations/' + t + '/reply',
                    u = _(r, i, o, n, a);
                return c.b.post({ url: s, session: e, params: u }).then(function(e) {
                    return Object.assign({}, G(e), { clientId: n });
                });
            },
            createConversation: function(e, t) {
                var n = t.blocks,
                    r = t.createdAt,
                    i = t.upload,
                    o = t.email,
                    a = t.composerSuggestions,
                    s = t.selfServeSuggestionsMatch,
                    u = b.api_base + '/messenger/web/messages',
                    d = _(n, r, i, null, o, a, s);
                return c.b.post({ url: u, session: e, params: d }).then(R);
            },
            createEvent: function(e, t, n) {
                var r = b.api_base + '/messenger/web/events',
                    i = { event_name: t, metadata: n },
                    o = { event_list: JSON.stringify({ data: [i] }) };
                return c.b.post({ url: r, session: e, params: o });
            },
            createMetrics: function(e, t, n, r, i) {
                void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = []);
                var o = b.api_base + '/messenger/web/metrics',
                    a = E(t, n, r, i);
                return c.b.post({ url: o, session: e, params: a });
            },
            createMetricsWithBeacon: function(e, t, n, r, i) {
                void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = []);
                var o = E(t, n, r, i);
                return c.b.sendBeacon(b.api_base + '/messenger/web/metrics', e, o);
            },
            createOrUpdateUser: function(e, t, n, r, i, o, a) {
                void 0 === t && (t = {}),
                    void 0 === a && (a = !1),
                    (t = m({}, t)),
                    void 0 !== n && (t.anonymous_email = n);
                var s = { source: i, sampling: a };
                void 0 !== r && (s._intercomEncryptedPayload = r);
                var u = b.api_base + '/messenger/web/ping';
                return c.b
                    .post({ url: u, session: e, params: s, customAttributes: t, internal: o })
                    .then(function(e) {
                        var t = e.errors;
                        return t
                            ? { errors: t }
                            : (function(e) {
                                  var t = e.user;
                                  e.active_tour &&
                                      Object(p.d)(
                                          'Tour attempting to resume from ping',
                                          e.active_tour
                                      );
                                  return {
                                      id: t.id,
                                      activeCompanyId: t.active_company_id || '-1',
                                      activeTour: V(e.active_tour),
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
                                      composerSuggestions: ce(e.composer_suggestions),
                                      countryCode: t.country_code,
                                      hasConversations: !1 !== t.has_conversations,
                                      homeScreenSlots: t.home_screen_slots || [],
                                      identityVerificationReady: e.identity_verification_ready,
                                      identityVerified: e.identity_verified,
                                      installModeConfig: H(e),
                                      lastContactedAt: t.last_contacted_at,
                                      locale: t.locale,
                                      newConversationComposerState: A(e.composer_state),
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
                                      unreadConversationIds: (e.unread_conversation_ids || []).map(
                                          function(e) {
                                              return e.toString();
                                          }
                                      ),
                                      unreadDismissedConversationIds: (
                                          e.unread_dismissed_conversation_ids || []
                                      ).map(function(e) {
                                          return e.toString();
                                      }),
                                      userSuppliedEmail: t.anonymous_email,
                                  };
                                  var n;
                              })(e);
                    });
            },
            createReaction: function(e, t, n) {
                var r = b.api_base + '/messenger/web/conversations/' + t + '/react',
                    i = { reaction_index: n };
                return c.b.post({ url: r, session: e, params: i }).then(function() {});
            },
            createUpload: function(e, t, n) {
                return new Promise(function(r, i) {
                    var o = new FormData();
                    o.append('key', e.key),
                        o.append('acl', e.acl),
                        o.append('Content-Type', e.content_type),
                        o.append('AWSAccessKeyId', e.aws_access_key),
                        o.append('policy', e.policy),
                        o.append('signature', e.signature),
                        o.append('success_action_status', e.success_action_status),
                        o.append('file', t);
                    var a = new XMLHttpRequest();
                    a.upload.addEventListener(
                        'progress',
                        function(e) {
                            var t = e.lengthComputable,
                                r = e.loaded,
                                i = e.total;
                            if (n && t) {
                                var o = parseInt((r / i) * 100);
                                n(o);
                            }
                        },
                        !1
                    ),
                        a.addEventListener(
                            'error',
                            function() {
                                i();
                            },
                            !1
                        ),
                        a.addEventListener(
                            'abort',
                            function() {
                                i();
                            },
                            !1
                        ),
                        a.addEventListener(
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
                        a.open('POST', e.upload_destination, !0),
                        a.send(o);
                });
            },
            createUploadPolicy: function(e, t, n, r) {
                var i = b.api_base + '/messenger/web/uploads',
                    o = {
                        upload: JSON.stringify({
                            original_filename: Object(u.a)(t.name),
                            size_in_bytes: t.size,
                            content_type: t.type,
                            width: n,
                            height: r,
                        }),
                    };
                return c.b.post({ url: i, session: e, params: o }).then(J);
            },
            disableInstallMode: function(e) {
                var t = b.api_base + '/messenger/web/install';
                return c.b.post({ url: t, session: e });
            },
            dismissBanner: function(e, t) {
                var n = b.api_base + '/messenger/web/banners/' + t + '/dismiss';
                return c.b.post({ url: n, session: e });
            },
            dismissNotifications: function(e, t) {
                var n = b.api_base + '/messenger/web/conversations/dismiss',
                    r = { conversation_ids: t };
                return c.b.post({ url: n, session: e, params: r }).then(function() {});
            },
            fetchMessengerSheetData: function(e, t, n, r) {
                var i = b.api_base + '/messenger/web/sheets/open',
                    o = { action_id: n, uri: t, values: JSON.stringify(r) };
                return c.b.post({ url: i, session: e, params: o });
            },
            fetchMessengerSheetDataWithToken: function(e, t, n) {
                var r = b.api_base + '/messenger/web/messenger_card_view/open_sheet',
                    i = { action_id: t, token: e, values: JSON.stringify(n) };
                return c.b.post({ url: r, params: i });
            },
            fetchTour: function(e) {
                var t = void 0 === e ? {} : e,
                    n = t.session,
                    r = t.tourId,
                    i = t.token;
                if (!n && !i)
                    return (
                        Object(p.d)('A session or a token must be supplied when fetching a tour'),
                        Promise.reject('missing_session_and_token')
                    );
                if (n)
                    return (
                        Object(p.d)('Attempting to fetch tour with session data.'),
                        c.b
                            .post({
                                url: b.api_base + '/messenger/web/tours/' + r + '/fetch',
                                session: n,
                            })
                            .then(V)
                    );
                Object(p.d)('Attempting to fetch tour for messenger card in fallback state.');
                var o = { token: i };
                return c.b
                    .post({
                        url: b.api_base + '/messenger/web/tours/' + r + '/fetch_with_token',
                        params: o,
                    })
                    .then(V);
            },
            fireComposerSuggestion: function(e, t) {
                var n = t.conversationId,
                    r = t.suggestion,
                    i = t.clientId,
                    o = n
                        ? b.api_base + '/messenger/web/conversations/' + n + '/reply'
                        : b.api_base + '/messenger/web/messages',
                    a = { composer_suggestion: JSON.stringify(r), client_assigned_uuid: i };
                return (
                    n && (a.conversation_id = n),
                    c.b.post({ url: o, session: e, params: a }).then(n ? G : R)
                );
            },
            fireTrigger: function(e, t) {
                var n = t.triggerId,
                    r = t.clientAssignedUUID,
                    i = b.api_base + '/messenger/web/triggers/' + n + '/fire',
                    o = { client_assigned_uuid: r };
                return c.b.post({ url: i, session: e, params: o });
            },
            getArticle: function(e, t, n) {
                var r = b.api_base + '/messenger/web/articles/' + t,
                    i = (function(e) {
                        return { conversation_id: e };
                    })(n);
                return c.b.post({ url: r, session: e, params: i }).then(j);
            },
            getArticleReaction: function(e, t, n, r) {
                var i = b.api_base + '/messenger/web/articles/get_reaction',
                    o = { article_id: t, article_content_id: n };
                c.b
                    .post({ url: i, session: e, params: o })
                    .then(function(e) {
                        e ? r(null, e) : r();
                    })
                    .catch(function(e) {
                        r(e);
                    });
            },
            getCardView: function(e) {
                var t = b.api_base + '/messenger/web/messenger_card_view/',
                    n = { token: e };
                return c.b.post({ url: t, params: n });
            },
            getConversation: function(e, t, n) {
                var r = b.api_base + '/messenger/web/conversations/' + t,
                    i = { self_serve_suggestions_match: n };
                return c.b.post({ url: r, session: e, params: i }).then(R);
            },
            getConversationTranscriptURL: de,
            getConversations: function(e, t) {
                var n = t.source,
                    r = t.page,
                    i = t.perPage,
                    o = t.selfServeSuggestionsMatch,
                    a = b.api_base + '/messenger/web/conversations',
                    s = { page: r, per_page: i, source: n, self_serve_suggestions_match: o };
                return c.b.post({ url: a, session: e, params: s }).then(y);
            },
            getHomeScreenCards: function(e, t) {
                var n = t.homeScreenSlots,
                    r = t.selfServeSuggestionsMatch,
                    i = b.api_base + '/messenger/web/home_cards',
                    o = {
                        slot_card_ids: n.map(function(e) {
                            return e.messenger_card_id;
                        }),
                        self_serve_suggestions_match: r,
                    };
                return c.b.post({ url: i, session: e, params: o }).then(oe);
            },
            getMessengerCanvasContentWithToken: function(e, t) {
                var n = b.api_base + '/messenger/web/messenger_card_view/live_content',
                    r = { token: e, canvas_id: t };
                return c.b.post({ url: n, params: r }).then(function(e) {
                    return Object.assign(e, { id: t });
                });
            },
            getMessengerCanvasWithContent: function(e, t, n) {
                var r = b.api_base + '/messenger/web/messenger_cards/content',
                    i = { canvas_id: t, uri: n };
                return (
                    ue(i),
                    c.b.post({ url: r, session: e, params: i }).then(function(e) {
                        return Object.assign(e, { id: t });
                    })
                );
            },
            getUnreadConversations: function(e) {
                var t = b.api_base + '/messenger/web/conversations/unread';
                return c.b.post({ url: t, session: e }).then(C);
            },
            markConversationAsRead: function(e, t) {
                var n = b.api_base + '/messenger/web/conversations/' + t + '/read';
                return c.b.post({ url: n, session: e }).then(R);
            },
            outboundPreview: function(e, t) {
                var n = b.api_base + '/messenger/web/custom_bots/' + t + '/outbound_preview';
                return c.b.post({ url: n, session: e });
            },
            progressTour: function(e, t, n, r) {
                var i = Object.assign({ step_id: n }, O(r));
                return c.b.sendBeacon(b.api_base + '/messenger/web/tours/' + t + '/progress', e, i);
            },
            quickReply: function(e, t, n, r, i) {
                var o = b.api_base + '/messenger/web/conversations/' + t + '/quick_reply',
                    a = (function(e, t, n) {
                        return {
                            client_assigned_uuid: n,
                            conversation_part: JSON.stringify({ id: e, reply_option: t }),
                        };
                    })(n, r, i);
                return c.b.post({ url: o, session: e, params: a }).then(G);
            },
            recordTourFailure: function(e, t, n, r, i, o) {
                var a = b.api_base + '/messenger/web/tours/' + t + '/record_failure',
                    s = { failed_selector: r, failure_url: i, tour_step_id: n },
                    u = Object.assign(s, O(o));
                return c.b.post({ url: a, session: e, params: u });
            },
            rulesetConditionSatisfied: function(e, t, n, r, i, o, a) {
                var s = b.api_base + '/messenger/web/rulesets/' + t + '/match',
                    u = {
                        user_id: r,
                        company_id: i,
                        ruleset_link_id: n,
                        predicates: JSON.stringify(o),
                    };
                return (
                    a && (u.checkpoint_id = a),
                    c.b.post({ url: s, session: e, params: u }).then(function(e) {
                        var t = e.composer_suggestions,
                            n = e.predictive_answers_suggestions;
                        return h(
                            {},
                            (function(e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = {},
                                    o = Object.keys(e);
                                for (r = 0; r < o.length; r++)
                                    (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                return i;
                            })(e, ['composer_suggestions', 'predictive_answers_suggestions']),
                            { composerSuggestions: ce(t), answerbotPredictiveContexts: n }
                        );
                    })
                );
            },
            searchGifs: function(e, t) {
                var n = b.api_base + '/messenger/web/gifs',
                    r = { query: t };
                return c.b.post({ url: n, session: e, params: r });
            },
            sendBeaconEvent: function(e, t, n) {
                var r = { event_name: t, metadata: n };
                return c.b.sendBeacon(b.api_base + '/messenger/web/events', e, {
                    event_list: JSON.stringify({ data: [r] }),
                });
            },
            startConversationFromSuggestion: function(e, t) {
                var n = t.suggestionUuid,
                    r = t.clientAssignedUUID,
                    i = b.api_base + '/messenger/web/custom_bots/trigger_inbound_conversation',
                    o = { id: n, client_assigned_uuid: r };
                return c.b.post({ url: i, session: e, params: o }).then(R);
            },
            stopTour: function(e, t, n) {
                var r = b.api_base + '/messenger/web/tours/' + t + '/stop',
                    i = O(n);
                return c.b.post({ url: r, session: e, params: i });
            },
            submitMessengerCardAction: function(e, t, n, r) {
                var i = b.api_base + '/messenger/web/messenger_cards',
                    o = { action_id: n, uri: t, values: JSON.stringify(r) };
                return ue(o), c.b.post({ url: i, session: e, params: o });
            },
            submitMessengerCardActionWithToken: function(e, t, n) {
                var r = b.api_base + '/messenger/web/messenger_card_view/submit',
                    i = { action_id: t, token: e, values: JSON.stringify(n) };
                return c.b.post({ url: r, params: i });
            },
            submitSheet: function(e, t, n) {
                var r = b.api_base + '/messenger/web/sheets/submit',
                    i = { uri: t, sheet_values: JSON.stringify(n) };
                return c.b.post({ url: r, session: e, params: i });
            },
            submitSheetWithToken: function(e, t) {
                var n = b.api_base + '/messenger/web/messenger_card_view/submit_sheet',
                    r = { token: e, sheet_values: JSON.stringify(t) };
                return c.b.post({ url: n, params: r });
            },
            triggerTransitions: function(e, t, n) {
                var r = b.api_base + '/messenger/web/operator/trigger',
                    i = (function(e, t) {
                        var n = t.type,
                            r = t.payload,
                            i = (r = void 0 === r ? {} : r).composerHasContent,
                            o = r.executionTime;
                        return {
                            type: n,
                            payload: JSON.stringify({ composer_has_content: i, execution_time: o }),
                            meta: JSON.stringify({ conversation_id: e }),
                        };
                    })(t, n);
                return c.b.post({ url: r, session: e, params: i }).then(R);
            },
            updateConversationForm: function(e, t, n, r, i, o) {
                var a = o
                        ? {
                              identifier: r,
                              value: i,
                              conversation_part_id: n,
                              upfront_email_collection: o,
                          }
                        : { identifier: r, value: i, conversation_part_id: n },
                    s = b.api_base + '/messenger/web/conversations/' + t + '/form',
                    u = { form_params: JSON.stringify(a) };
                return c.b.post({ url: s, session: e, params: u }).then(R);
            },
            updatePhoneNumber: function(e, t) {
                var n = b.api_base + '/apps/' + e.appId + '/notification_channels/phone_number',
                    r = { phone_number: t };
                return c.b.post({ url: n, session: e, params: r });
            },
            visitorAutoMessageConditionSatisfied: function(e, t) {
                var n = b.api_base + '/messenger/web/messages/' + t.id + '/match',
                    r = { predicates: JSON.stringify(t.predicates) };
                return c.b.post({ url: n, session: e, params: r }).then(function(e) {
                    if (!a()(e)) return R(e);
                });
            },
        };
    },
    18: function(e, t, n) {
        'use strict';
        n.d(t, 'd', function() {
            return a;
        }),
            n.d(t, 'c', function() {
                return s;
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
                return f;
            }),
            n.d(t, 'i', function() {
                return v;
            });
        var r = /iphone|ipad|ipod|android|blackberry|opera mini|iemobile/i,
            i = [
                '.intercom-lightweight-app-launcher',
                '.intercom-launcher-frame',
                '#intercom-container',
                '.intercom-messenger',
                '.intercom-notifications',
            ];
        function o(e) {
            try {
                if (!(e in window)) return !1;
                var t = window[e];
                return (
                    null !== t &&
                    (t.setItem('intercom-test', '0'), t.removeItem('intercom-test'), !0)
                );
            } catch (e) {
                return !1;
            }
        }
        function a() {
            return o('localStorage');
        }
        function s() {
            return !!(window.FileReader && window.File && window.FileList && window.FormData);
        }
        function c() {
            var e = l().userAgent;
            return !!e && null !== e.match(r) && void 0 !== window.parent;
        }
        function u() {
            var e = l().vendor || '',
                t = l().userAgent || '';
            return 0 === e.indexOf('Apple') && /\sSafari\//.test(t);
        }
        function d(e) {
            void 0 === e && (e = window);
            var t = l(),
                n = 'Google Inc.' === t.vendor && !e.chrome;
            return '' === t.languages && (t.webdriver || n);
        }
        function l() {
            return navigator || {};
        }
        function p(e) {
            return (
                void 0 === e && (e = l().userAgent), /iPad|iPhone|iPod/.test(e) && !window.MSStream
            );
        }
        function f() {
            return i.some(function(e) {
                var t = window.parent.document.querySelector(e);
                if (t) {
                    var n = window.getComputedStyle(t);
                    return null === n || 'none' === n.display;
                }
            });
        }
        var v = function() {
            return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        };
        t.a = {
            hasXhr2Support: function() {
                return 'XMLHttpRequest' in window && 'withCredentials' in new XMLHttpRequest();
            },
            hasLocalStorageSupport: a,
            hasSessionStorageSupport: function() {
                return o('sessionStorage');
            },
            hasFileSupport: s,
            hasAudioSupport: function() {
                var e = document.createElement('audio');
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
                return i.some(function(e) {
                    var t = window.parent.document.querySelector(e);
                    if (t) {
                        var n = t.getBoundingClientRect();
                        return n && n.width > 0 && n.height > 0;
                    }
                });
            },
            messengerHasDisplayNoneSet: f,
            isMobileBrowser: c,
            isIOSFirefox: function() {
                return !!l().userAgent.match('FxiOS');
            },
            isFirefox: function() {
                return !!l().userAgent.match('Firefox');
            },
            isSafari: u,
            isElectron: function() {
                var e = l().userAgent || '',
                    t = window.parent || {},
                    n = t.process && t.versions && t.versions.electron;
                return /\sElectron\//.test(e) || n;
            },
            isIE: function() {
                var e = l().userAgent || '';
                return e.indexOf('MSIE') > 0 || e.indexOf('Trident') > 0;
            },
            isEdge: function() {
                return (l().userAgent || '').indexOf('Edge') > 0;
            },
            isNativeMobile: function() {
                return l().isNativeMobile;
            },
            isChrome: function() {
                var e = window.chrome,
                    t = l().vendor,
                    n = l().userAgent.indexOf('OPR') > -1,
                    r = l().userAgent.indexOf('Edge') > -1;
                return (
                    !!l().userAgent.match('CriOS') ||
                    (null != e && 'Google Inc.' === t && !1 === n && !1 === r)
                );
            },
            isIOS: p,
            isAndroid: function(e) {
                return (
                    void 0 === e && (e = l().userAgent),
                    e && e.toLowerCase().indexOf('android') > -1
                );
            },
        };
    },
    181: function(e, t, n) {
        'use strict';
        function r(e, t) {
            void 0 === t && (t = !1);
            var n = { type: 'SHOW_CONVERSATION', conversationId: e };
            return t && (n.replaceCurrentView = t), n;
        }
        n.d(t, 'a', function() {
            return r;
        });
    },
    182: function(e, t, n) {
        'use strict';
        n.d(t, 'd', function() {
            return r;
        }),
            n.d(t, 'a', function() {
                return i;
            }),
            n.d(t, 'b', function() {
                return o;
            }),
            n.d(t, 'e', function() {
                return a;
            }),
            n.d(t, 'c', function() {
                return s;
            }),
            n.d(t, 'f', function() {
                return c;
            });
        var r = function() {
                return 'intercom-id';
            },
            i = function(e) {
                return 'intercom-id-' + e;
            },
            o = function(e) {
                return 'intercom-session-' + e;
            },
            a = function() {
                return '_mkto_trk';
            },
            s = function() {
                return 'hubspotutk';
            },
            c = function() {
                return '1' === navigator.doNotTrack;
            };
    },
    19: function(e, t, n) {
        'use strict';
        n.d(t, 'b', function() {
            return u;
        }),
            n.d(t, 'c', function() {
                return l;
            }),
            n.d(t, 'd', function() {
                return p;
            }),
            n.d(t, 'a', function() {
                return f;
            });
        var r = n(281),
            i = n.n(r),
            o = n(26),
            a = n(108),
            s = n.n(a);
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
        var d = function(e) {
                return e.replace(/[\u200B-\u200D\uFEFF]/g, '');
            },
            l = (function() {
                function e(e, t) {
                    var n = this;
                    c(this, 'elements', void 0),
                        c(this, 'callback', void 0),
                        c(this, 'destroyed', void 0),
                        c(this, 'validateInputs', function() {
                            var e = !0;
                            n.elements.forEach(function(t) {
                                'checkbox' !== t.type &&
                                    'radio' !== t.type &&
                                    n.elementHasEmptyValue(t) &&
                                    (e = !1);
                            }),
                                n.onChange(e);
                        }),
                        (this.callback = t),
                        (this.destroyed = !1),
                        (this.elements = []);
                    var r = window.parent.document.querySelector(e);
                    if (r) {
                        var i = r.tagName.toLowerCase(),
                            o =
                                'input' === i ||
                                'textarea' === i ||
                                'select' === i ||
                                r.isContentEditable;
                        this.elements = o
                            ? [r]
                            : r.querySelectorAll('input, textarea, select, div[contenteditable]');
                    }
                }
                var t = e.prototype;
                return (
                    (t.onChange = function(e) {
                        this.destroyed || this.callback(e);
                    }),
                    (t.destroy = function() {
                        (this.destroyed = !0), this.removeListeners();
                    }),
                    (t.elementHasEmptyValue = function(e) {
                        return e instanceof HTMLSelectElement
                            ? !d(e.options[e.selectedIndex].value)
                            : e.isContentEditable
                            ? !d(e.innerText || '')
                            : !d(e.value);
                    }),
                    (t.addListeners = function() {
                        var e = this;
                        this.elements.forEach(function(t) {
                            'select' === t.tagName.toLowerCase()
                                ? t.addEventListener('change', e.validateInputs)
                                : t.addEventListener('input', e.validateInputs);
                        });
                    }),
                    (t.removeListeners = function() {
                        var e = this;
                        this.elements.forEach(function(t) {
                            'select' === t.type
                                ? t.removeEventListener('change', e.validateInputs)
                                : t.removeEventListener('input', e.validateInputs);
                        });
                    }),
                    (t.run = function() {
                        if (!this.elements.length) return this.callback(!0);
                        this.validateInputs(), this.addListeners();
                    }),
                    e
                );
            })(),
            p = function() {
                s()('tours:debug').apply(void 0, arguments);
            },
            f = (function() {
                function e(e, t, n, r) {
                    var o = this;
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
                        (this.waitTimeout = window.setTimeout(function() {
                            o._initObserver(), o._startTimer(), o._check();
                        }, n || 0));
                }
                var t = e.prototype;
                return (
                    (t._initObserver = function() {
                        this.document.body &&
                            this.observer.observe(this.document.body, {
                                attributes: !0,
                                childList: !0,
                                subtree: !0,
                            });
                    }),
                    (t._check = function() {
                        var e = this.document.querySelector(this.selector);
                        Object(o.u)(e) && (this.callback(!0), this.cancel());
                    }),
                    (t._startTimer = function() {
                        var e = this;
                        (this.timeoutValue || 0 === this.timeoutValue) &&
                            (this.timeout = window.setTimeout(function() {
                                e.callback(!1), e.cancel();
                            }, this.timeoutValue));
                    }),
                    (t.cancel = function() {
                        this.observer.disconnect(),
                            this.timeout && clearTimeout(this.timeout),
                            this.waitTimeout && clearTimeout(this.waitTimeout);
                    }),
                    e
                );
            })();
    },
    193: function(e, t, n) {
        'use strict';
        var r = n(7),
            i = { maxRetries: 3 };
        t.a = function(e) {
            var t = void 0 === e ? i : e,
                n = t.promise,
                o = t.maxRetries,
                a = 0;
            return new Promise(function(e, t) {
                return (function e(t, i) {
                    n().then(
                        function(e) {
                            return t(e);
                        },
                        function(n) {
                            a < o && window && window.parent && window.parent.requestAnimationFrame
                                ? ((a += 1),
                                  window.setTimeout(function() {
                                      return window.parent.requestAnimationFrame(function() {
                                          return e(t, i);
                                      });
                                  }, 1e3 * a))
                                : (Object(r.g)('dynamicImportCdnError', {
                                      message: n && n.message,
                                  }),
                                  i(n));
                        }
                    );
                })(e, t);
            });
        };
    },
    194: function(e, t, n) {
        'use strict';
        var r = n(44),
            i = n.n(r),
            o = n(301),
            a = n.n(o),
            s = n(65),
            c = n(52),
            u = n(270),
            d = n(7),
            l = n(19),
            p = n(16),
            f = n(134);
        function v(e, t, n) {
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
        var h = (function() {
                function e(e, t) {
                    v(this, 'whenReady', void 0),
                        v(this, 'document', void 0),
                        v(this, 'state', void 0),
                        v(this, 'activeStep', void 0),
                        v(this, 'nextStep', void 0),
                        (this.state = e),
                        (this.whenReady = t),
                        (this.document = window.parent.document),
                        (this.activeStep = Object(s.f)(e)),
                        (this.nextStep = Object(s.l)(e)),
                        this._check();
                }
                var t = e.prototype;
                return (
                    (t._check = function() {
                        return 'click' === this.activeStep.progressionBehavior
                            ? (Object(l.d)('Click to progress behavior detected.'),
                              this._evaluateProgressionByClick())
                            : this.whenReady();
                    }),
                    (t._evaluateProgressionByClick = function() {
                        var e = 0,
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
                    }),
                    (t._pageNeedsRedirection = function() {
                        return this.activeStep.url !== this.nextStep.url;
                    }),
                    (t._nextStepIsPointer = function() {
                        return !!this.nextStep.selector;
                    }),
                    e
                );
            })(),
            g = n(73);
        function m(e, t, n, r, i, o, a) {
            try {
                var s = e[o](a),
                    c = s.value;
            } catch (e) {
                return void n(e);
            }
            s.done ? t(c) : Promise.resolve(c).then(r, i);
        }
        function b(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise(function(r, i) {
                    var o = e.apply(t, n);
                    function a(e) {
                        m(o, r, i, a, s, 'next', e);
                    }
                    function s(e) {
                        m(o, r, i, a, s, 'throw', e);
                    }
                    a(void 0);
                });
            };
        }
        n.d(t, 'e', function() {
            return E;
        }),
            n.d(t, 'c', function() {
                return C;
            }),
            n.d(t, 'f', function() {
                return T;
            }),
            n.d(t, 'b', function() {
                return I;
            }),
            n.d(t, 'd', function() {
                return R;
            }),
            n.d(t, 'a', function() {
                return M;
            }),
            n.d(t, 'k', function() {
                return U;
            }),
            n.d(t, 'i', function() {
                return P;
            }),
            n.d(t, 'g', function() {
                return D;
            }),
            n.d(t, 'h', function() {
                return k;
            }),
            n.d(t, 'j', function() {
                return L;
            });
        function _(e) {
            return Object(s.g)(e) || Object(s.i)(e) || Object(s.j)(e);
        }
        function E() {
            return (function() {
                var e = b(
                    regeneratorRuntime.mark(function e(t, n) {
                        var r, i, o, a, c, u, d;
                        return regeneratorRuntime.wrap(
                            function(e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (
                                                ((r = n()),
                                                (i = n()),
                                                (o = i.session),
                                                (a = Object(s.c)(r)),
                                                (c = a.id),
                                                (u = a.progressId),
                                                !(d = Object(s.l)(r)))
                                            ) {
                                                e.next = 21;
                                                break;
                                            }
                                            if (
                                                (Object(l.d)(
                                                    'Tour with id ' +
                                                        c +
                                                        ' is attempting to progress to step ' +
                                                        d
                                                ),
                                                _(r))
                                            ) {
                                                e.next = 17;
                                                break;
                                            }
                                            return (
                                                t({ type: 'PROGRESS_TOUR_REQUEST_STARTED' }),
                                                (e.prev = 8),
                                                (e.next = 11),
                                                p.b.progressTour(o, c, d.id, u)
                                            );
                                        case 11:
                                            e.next = 17;
                                            break;
                                        case 13:
                                            (e.prev = 13),
                                                (e.t0 = e.catch(8)),
                                                t({ type: 'TOUR_UPDATE_FAILED' }),
                                                Object(l.d)(
                                                    'Could not update tour due to e=' + e.t0
                                                );
                                        case 17:
                                            Object(s.i)(r) &&
                                                g.b.set('tour_progress_preview', d.id),
                                                new h(r, function() {
                                                    t(A(d.id, u)),
                                                        t({
                                                            type: 'PROGRESS_TOUR_REQUEST_FINISHED',
                                                        });
                                                }),
                                                (e.next = 24);
                                            break;
                                        case 21:
                                            window.parent &&
                                                window.parent.postMessage('exit_tour_preview', '*'),
                                                S(c),
                                                t(j(u));
                                        case 24:
                                        case 'end':
                                            return e.stop();
                                    }
                            },
                            e,
                            null,
                            [[8, 13]]
                        );
                    })
                );
                return function(t, n) {
                    return e.apply(this, arguments);
                };
            })();
        }
        function O(e, t) {
            if (Object(f.a)()) {
                var n = new CustomEvent(e, { detail: t });
                window.parent.document.dispatchEvent(n);
            }
        }
        function S(e) {
            O('intercom:tourComplete', { tourId: e });
        }
        function y(e) {
            O('intercom:tourError', { tourId: e });
        }
        function C() {
            return function(e, t) {
                var n = t(),
                    r = Object(s.c)(n),
                    i = r.id,
                    o = r.progressId,
                    a = t().session;
                Object(l.d)('Tour with id ' + i + ' marked as complete'),
                    _(n) ||
                        (e({ type: 'MARK_ACTIVE_TOUR_AS_COMPLETED' }), p.b.completeTour(a, i, o));
            };
        }
        function T() {
            return function(e, t) {
                var n,
                    r,
                    i,
                    o = t(),
                    a = Object(s.c)(o),
                    c = a.id,
                    u = a.progressId,
                    d = Object(s.f)(o);
                if (!_(o))
                    return (
                        y(c),
                        p.b.recordTourFailure(
                            o.session,
                            c,
                            d.id,
                            d.selector,
                            null === (n = window) || void 0 === n
                                ? void 0
                                : null === (r = n.parent) || void 0 === r
                                ? void 0
                                : null === (i = r.location) || void 0 === i
                                ? void 0
                                : i.pathname,
                            u
                        )
                    );
            };
        }
        function I() {
            return function(e) {
                var t,
                    n,
                    r = w(
                        null === (t = window) || void 0 === t
                            ? void 0
                            : null === (n = t.parent) || void 0 === n
                            ? void 0
                            : n.location
                    );
                if ((Object(l.d)('Checking if URL has tour attached'), r)) {
                    var i = JSON.parse(g.b.get('tour_triggered_from_url'));
                    (i = i || []).indexOf(r) > -1
                        ? Object(l.d)('Tour with id ' + r + ' has already been triggered')
                        : (Object(l.d)('Tour id ' + r + ' attached in the url'),
                          e(R(r)),
                          i.push(r),
                          g.b.set('tour_triggered_from_url', JSON.stringify(i)));
                } else Object(l.d)('No attached tour found in the URL');
            };
        }
        var w = function(e) {
            if (e) {
                var t = Object(u.a)(e).product_tour_id;
                if (!t) {
                    var n = e.toString();
                    if (!n) return;
                    var r = n.match(/product_tour_id=(\d+)/i);
                    r && (t = r[1]);
                }
                return t;
            }
        };
        function R(e) {
            return (function() {
                var t = b(
                    regeneratorRuntime.mark(function t(n, r) {
                        var i, o, a, c;
                        return regeneratorRuntime.wrap(
                            function(t) {
                                for (;;)
                                    switch ((t.prev = t.next)) {
                                        case 0:
                                            if (
                                                ((i = Object(s.c)(r())),
                                                (o = r()),
                                                (a = o.session),
                                                i)
                                            ) {
                                                t.next = 17;
                                                break;
                                            }
                                            return (
                                                Object(l.d)(
                                                    'Will attempt to fetch tour with id ' + e
                                                ),
                                                (t.prev = 4),
                                                (t.next = 7),
                                                p.b.fetchTour({ session: a, tourId: e })
                                            );
                                        case 7:
                                            (c = t.sent), n(U(c)), (t.next = 15);
                                            break;
                                        case 11:
                                            (t.prev = 11),
                                                (t.t0 = t.catch(4)),
                                                e && y(e),
                                                Object(l.d)(
                                                    'Could not fetch or start tour due to e=' + t.t0
                                                );
                                        case 15:
                                            t.next = 18;
                                            break;
                                        case 17:
                                            Object(l.d)(
                                                'Active tour with id ' +
                                                    i.id +
                                                    ' already found so tour id ' +
                                                    e +
                                                    " won't be fetched"
                                            );
                                        case 18:
                                        case 'end':
                                            return t.stop();
                                    }
                            },
                            t,
                            null,
                            [[4, 11]]
                        );
                    })
                );
                return function(e, n) {
                    return t.apply(this, arguments);
                };
            })();
        }
        function A(e, t) {
            return { type: 'PROGRESS_TOUR', activeStepId: e, progressId: t };
        }
        function j(e) {
            return { type: 'COMPLETE_TOUR', progressId: e };
        }
        function N(e, t) {
            return { type: 'FETCH_TOUR_SUCCESS', tour: e, isPreviewingTour: t };
        }
        function M(e) {
            return { type: 'CHANGE_VIDEO_MUTED', muted: e };
        }
        function U(e) {
            return function(t, n) {
                var r = n().user,
                    o = Object(s.c)(n());
                if (!i()(o))
                    return (
                        Object(l.d)('There is already an active tour', o),
                        void Object(l.d)("The tour won't attempt to start", e)
                    );
                var u = (function(e) {
                    if (e.steps) {
                        var t = e.activeStepId,
                            n = e.steps,
                            r = n.findIndex(function(e) {
                                return parseInt(e.id, 10) === parseInt(t, 10);
                            }),
                            i = n.slice(r).find(function(e) {
                                return !a()(e.selector);
                            });
                        if (i) return i.selector;
                    }
                })(e);
                u
                    ? (Object(l.d)(
                          'Checking if selector of the first active pointer step is visible on the page',
                          e
                      ),
                      new l.a(u, null, 0, function(n) {
                          n
                              ? (Object(l.d)('Node is visible. Tour is attempting to start', e),
                                t(N(e, !1)),
                                t(Object(c.a)()),
                                Object(d.h)(r, 'received', 'tour', 'messenger', null, {
                                    tour_id: e.id,
                                }))
                              : (Object(l.d)('Node is not visible. Tour will not start', e),
                                (function(e, t) {
                                    Object(f.a)() &&
                                        (Object(d.c)('tour_failed_css_evaluation', { tour_id: e }),
                                        Object(d.b)('tour_failed_css_evaluation tour_id=' + e)),
                                        Object(d.h)(
                                            t,
                                            'received_but_failed_css_evaluation',
                                            'tour',
                                            'messenger',
                                            null,
                                            { tour_id: e }
                                        );
                                })(e.id, r),
                                y(e.id));
                      }))
                    : (Object(l.d)('Tour is attempting to start', e),
                      t(N(e, !1)),
                      t(Object(c.a)()),
                      Object(d.h)(r, 'received', 'tour', 'messenger', null, { tour_id: e.id }));
            };
        }
        function P(e) {
            return function(t) {
                t(N(e, !0)), t(Object(c.a)());
            };
        }
        function D(e) {
            return (function() {
                var t = b(
                    regeneratorRuntime.mark(function t(n, r) {
                        var i, o, a, s, d, f, v;
                        return regeneratorRuntime.wrap(
                            function(t) {
                                for (;;)
                                    switch ((t.prev = t.next)) {
                                        case 0:
                                            return (
                                                (i = r()),
                                                (o = i.session),
                                                (t.prev = 1),
                                                (t.next = 4),
                                                p.b.fetchTour({ session: o, tourId: e })
                                            );
                                        case 4:
                                            (d = t.sent),
                                                (f = window.parent),
                                                (v = Object(u.b)(d.url)),
                                                d.url &&
                                                !Object(l.b)(
                                                    v,
                                                    null === (a = window) || void 0 === a
                                                        ? void 0
                                                        : null === (s = a.parent) || void 0 === s
                                                        ? void 0
                                                        : s.location
                                                )
                                                    ? f.location.assign(d.url)
                                                    : (n(N(d, !1)), n(Object(c.a)())),
                                                (t.next = 14);
                                            break;
                                        case 10:
                                            (t.prev = 10),
                                                (t.t0 = t.catch(1)),
                                                y(e),
                                                Object(l.d)(
                                                    'Could not fetch or start tour due to e=' + t.t0
                                                );
                                        case 14:
                                        case 'end':
                                            return t.stop();
                                    }
                            },
                            t,
                            null,
                            [[1, 10]]
                        );
                    })
                );
                return function(e, n) {
                    return t.apply(this, arguments);
                };
            })();
        }
        function k(e) {
            return (function() {
                var t = b(
                    regeneratorRuntime.mark(function t(n, r) {
                        var i, o, a, s;
                        return regeneratorRuntime.wrap(
                            function(t) {
                                for (;;)
                                    switch ((t.prev = t.next)) {
                                        case 0:
                                            return (
                                                (i = r()),
                                                (o = i.session),
                                                (t.prev = 1),
                                                (a = o.token),
                                                (t.next = 5),
                                                p.b.fetchTour({ token: a, tourId: e })
                                            );
                                        case 5:
                                            (s = t.sent),
                                                window.location.assign(s.url),
                                                (t.next = 12);
                                            break;
                                        case 9:
                                            (t.prev = 9),
                                                (t.t0 = t.catch(1)),
                                                Object(l.d)(
                                                    'Could not fetch tour with token due to e=' +
                                                        t.t0
                                                );
                                        case 12:
                                        case 'end':
                                            return t.stop();
                                    }
                            },
                            t,
                            null,
                            [[1, 9]]
                        );
                    })
                );
                return function(e, n) {
                    return t.apply(this, arguments);
                };
            })();
        }
        function L() {
            return function(e, t) {
                var n = t();
                if (_(n)) e(x(''));
                else {
                    var r = t().session,
                        i = Object(s.c)(n),
                        o = i.id,
                        a = i.progressId;
                    e(x(a)), p.b.stopTour(r, o, a);
                }
            };
        }
        function x(e) {
            return { type: 'STOP_TOUR', progressId: e };
        }
    },
    195: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return r;
        }),
            n.d(t, 'b', function() {
                return i;
            });
        var r = 'html-loaded',
            i = 'sheet-loaded';
    },
    20: function(e, t, n) {
        'use strict';
        n.d(t, 'l', function() {
            return b;
        }),
            n.d(t, 'm', function() {
                return E;
            }),
            n.d(t, 'n', function() {
                return O;
            }),
            n.d(t, 'c', function() {
                return S;
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
                return R;
            }),
            n.d(t, 'e', function() {
                return A;
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
                return k;
            }),
            n.d(t, 'b', function() {
                return L;
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
        var r = n(18),
            i = n(62),
            o = n(25),
            a = n(26),
            s = n(16),
            c = n(6),
            u = n(749),
            d = n(7),
            l = n(84),
            p = n(72),
            f = n(134),
            v = n(748),
            h = n(46),
            g = n(751),
            m = n(181);
        function b(e, t, n, r) {
            return (
                void 0 === n && (n = !1),
                void 0 === r && (r = null),
                function(a, s) {
                    a(
                        (function(e, t) {
                            void 0 === t && (t = !1);
                            return {
                                type: 'GET_CONVERSATION_REQUEST',
                                conversationId: e,
                                isUpdating: t,
                            };
                        })(t, n)
                    );
                    var c = s(),
                        u = c.session,
                        v = c.operator,
                        g = c.app;
                    return e
                        .getConversation(u, t, g.selfServeSuggestionsMatch)
                        .then(function(t) {
                            if (
                                (a(
                                    (function(e) {
                                        return function(t, n) {
                                            var r = n(),
                                                i = r.newConversation,
                                                a = Object(h.d)(r);
                                            try {
                                                Object(o.e)(e).clientId ===
                                                    Object(o.e)(i).clientId &&
                                                    'conversation' !== a &&
                                                    (t(w(e, null, null, Date.now(), 'custom_bot')),
                                                    t(Object(m.a)(e.id, !0)));
                                            } catch (e) {}
                                        };
                                    })(t)
                                ),
                                Object(o.s)(t).forEach(function(t) {
                                    return a(Object(i.a)(e, t, n));
                                }),
                                a(E(t, !1, Date.now())),
                                v)
                            ) {
                                var s = v.lastComposerEvent,
                                    c = v.userCreatedConversationAt,
                                    u = v.lastTriggerTransitionTimestamp;
                                Object(l.l)(t, u), Object(l.k)(t, c, s);
                            }
                            r &&
                                Object(f.a)() &&
                                Object(d.g)('newCommentEvent', { duration_ms: Object(p.a)(r) });
                        })
                        .catch(function(e) {
                            return a(_(t, e));
                        });
                }
            );
        }
        function _(e, t) {
            return { type: 'GET_CONVERSATION_FAILURE', conversationId: e, error: t };
        }
        function E(e, t, n) {
            return (
                void 0 === t && (t = !1),
                {
                    type: 'GET_CONVERSATION_SUCCESS',
                    conversation: e,
                    skipNotification: t,
                    createdAt: n,
                }
            );
        }
        function O(e, t) {
            return function(n, r) {
                n(
                    (function(e) {
                        return { type: 'MARK_CONVERSATION_AS_READ_REQUEST', conversationId: e };
                    })(t)
                );
                var i = r().session;
                return e
                    .markConversationAsRead(i, t)
                    .then(function() {
                        return n(
                            (function(e) {
                                return {
                                    type: 'MARK_CONVERSATION_AS_READ_SUCCESS',
                                    conversationId: e,
                                };
                            })(t)
                        );
                    })
                    .catch(function(e) {
                        return n(
                            (function(e, t) {
                                return {
                                    type: 'MARK_CONVERSATION_AS_READ_FAILURE',
                                    conversationId: e,
                                    error: t,
                                };
                            })(t, e)
                        );
                    });
            };
        }
        function S(e) {
            return { type: 'CONVERSATION_READ_ELSEWHERE', conversationId: e };
        }
        function y(e) {
            return { type: 'USER_CONTENT_SEEN_BY_ADMIN', conversationId: e };
        }
        function C(e, t, n, r) {
            return function(i, o) {
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
                var a = o().session;
                return e
                    .createReaction(a, t, n)
                    .then(function() {
                        return i(
                            (function(e, t) {
                                return {
                                    type: 'CREATE_REACTION_SUCCESS',
                                    conversationId: e,
                                    reactionIndex: t,
                                };
                            })(t, n)
                        );
                    })
                    .catch(function(e) {
                        return i(
                            (function(e, t, n) {
                                return {
                                    type: 'CREATE_REACTION_FAILURE',
                                    conversationId: e,
                                    reactionIndex: t,
                                    error: n,
                                };
                            })(t, n, e)
                        );
                    });
            };
        }
        function T(e, t, n, r, i, o, a, s, c) {
            return (
                void 0 === r && (r = !1),
                void 0 === i && (i = !1),
                void 0 === o && (o = null),
                void 0 === a && (a = null),
                void 0 === s && (s = !1),
                void 0 === t
                    ? (function(e, t, n, r, i, o) {
                          void 0 === n && (n = !1);
                          return function(a, s) {
                              var c = s(),
                                  u = c.session,
                                  d = c.app,
                                  l = t.body,
                                  p = t.createdAt;
                              return (
                                  a(I(t, n, o, Date.now())),
                                  o && a({ type: 'UPFRONT_EMAIL_COLLECTION_SUBMITTED' }),
                                  U(e, u, t, function(e) {
                                      return a(P(t, e));
                                  })
                                      .then(function(t) {
                                          return e.createConversation(u, {
                                              blocks: l,
                                              createdAt: p,
                                              upload: t,
                                              email: o,
                                              composerSuggestions: Object(g.a)(c),
                                              selfServeSuggestionsMatch:
                                                  d.selfServeSuggestionsMatch,
                                          });
                                      })
                                      .then(function(e) {
                                          a(w(e, r, i, Date.now()));
                                      })
                                      .catch(function(e) {
                                          return a(R(e));
                                      })
                              );
                          };
                      })(e, n, r, a, s, c)
                    : (function(e, t, n, r, i, o, a, s, c) {
                          void 0 === r && (r = !1);
                          void 0 === i && (i = !1);
                          return function(u, d) {
                              var l = d().session,
                                  p = n.body,
                                  f = n.createdAt,
                                  v = n.clientId;
                              return (
                                  u(A(t, n, r, c)),
                                  c && u({ type: 'UPFRONT_EMAIL_COLLECTION_SUBMITTED' }),
                                  U(e, l, n, function(e) {
                                      return u(P(n, e, t));
                                  })
                                      .then(function(n) {
                                          return e.createComment(l, t, v, p, f, n, c);
                                      })
                                      .then(function(e) {
                                          u(j(t, e, i, o, a, s, Date.now()));
                                      })
                                      .catch(function(e) {
                                          return u(N(t, n, e));
                                      })
                              );
                          };
                      })(e, t, n, r, i, o, a, s, c)
            );
        }
        function I(e, t, n, r) {
            return (
                void 0 === n && (n = void 0),
                void 0 === r && (r = Date.now()),
                { type: 'CREATE_CONVERSATION_REQUEST', part: e, isRetry: t, timestamp: r, email: n }
            );
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
        function R(e) {
            return { type: 'CREATE_CONVERSATION_FAILURE', reason: e };
        }
        function A(e, t, n, r) {
            return {
                type: 'CREATE_COMMENT_REQUEST',
                conversationId: e,
                part: t,
                isRetry: n,
                email: r,
            };
        }
        function j(e, t, n, r, i, o, a, s) {
            return (
                void 0 === s && (s = !1),
                {
                    type: 'CREATE_COMMENT_SUCCESS',
                    conversationId: e,
                    part: t,
                    isBorderless: n,
                    lastParticipatingAdmin: r,
                    officeHoursResponse: i,
                    isAnnotatedImage: o,
                    createdAt: a,
                    fromMessengerSuggestedContent: s,
                }
            );
        }
        function N(e, t, n) {
            return { type: 'CREATE_COMMENT_FAILURE', conversationId: e, part: t, reason: n };
        }
        function M(e, t, n) {
            var r = t.id;
            return function(i) {
                var o, a;
                return n.selectedReplyOption || n.composerSuggestionItem
                    ? (n.selectedReplyOption
                          ? ((o = n.selectedReplyOption.replyOption),
                            (a = n.selectedReplyOption.quickReplyPart))
                          : (o = n.composerSuggestionItem),
                      i(Object(v.a)(e, t, o, !0, a)))
                    : i(T(e, r, n, !0));
            };
        }
        function U(e, t, n, r) {
            var i = n.file,
                o = n.body[0],
                a = o.width,
                s = o.height;
            return i
                ? i.size > 41943040
                    ? Promise.reject('file_size')
                    : e.createUploadPolicy(t, i, a, s).then(function(t) {
                          return e.createUpload(t, i, r);
                      })
                : Promise.resolve();
        }
        function P(e, t, n) {
            return { type: 'UPDATE_UPLOAD_PROGRESS', conversationId: n, part: e, progress: t };
        }
        function D(e, t, n, r, i) {
            return (
                void 0 === i && (i = new Date()),
                {
                    type: 'ADMIN_IS_TYPING',
                    conversationId: e,
                    adminId: t,
                    firstName: n,
                    avatarUrl: r,
                    lastActiveAt: i,
                }
            );
        }
        function k(e) {
            return { type: 'USER_IS_TYPING', conversationId: e };
        }
        function L(e, t, n) {
            return (
                void 0 === n && (n = new Date()),
                {
                    type: 'COMPOSER_CONTENT_CHANGED',
                    conversationId: e,
                    composerContent: t,
                    lastActiveAt: n,
                }
            );
        }
        function x(e, t, n, r, i, o, a, s, c) {
            return function(d, l) {
                var p = l(),
                    f = p.session,
                    v = p.user;
                return (
                    d(
                        (function(e, t, n, r, i, o, a) {
                            return {
                                type: 'UPDATE_CONVERSATION_FORM_REQUEST',
                                conversationId: e,
                                partId: t,
                                identifier: n,
                                value: r,
                                identifierType: i,
                                formType: o,
                                isCustomData: a,
                            };
                        })(t, n, r, i, o, a, s)
                    ),
                    e
                        .updateConversationForm(f, t, n, r, i, c)
                        .then(function(e) {
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
                                'email' === r && d(Object(u.d)(v, i));
                        })
                        .catch(function(e) {
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
            return function(t, n) {
                var i = n().session,
                    o = Object(s.d)();
                Object(r.h)() && (o += '?v=' + Math.floor(1e8 * Math.random())),
                    Object(a.w)(o, Object(c.a)(i, { conversation_id: e }));
            };
        }
        function V(e) {
            return { type: 'SET_NEW_CONVERSATION_COMPOSER_STATE', composerState: e };
        }
    },
    202: function(e, t, n) {
        'use strict';
        t.a = function(e) {
            return Object.keys(e).map(function(t) {
                return e[t];
            });
        };
    },
    203: function(e, t, n) {
        'use strict';
        function r(e, t) {
            return { type: 'OPEN_MESSAGE', conversationId: e, partId: t };
        }
        function i() {
            return { type: 'CLOSE_MESSAGE' };
        }
        function o(e, t) {
            return { type: 'RECORD_MESSAGE_SENT', conversationId: e, partId: t };
        }
        n.d(t, 'b', function() {
            return r;
        }),
            n.d(t, 'a', function() {
                return i;
            }),
            n.d(t, 'c', function() {
                return o;
            });
    },
    204: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return i;
        }),
            n.d(t, 'b', function() {
                return o;
            });
        var r = [
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
            i = function() {
                var e, t, n;
                return null === (e = window) || void 0 === e
                    ? void 0
                    : null === (t = e.parent) || void 0 === t
                    ? void 0
                    : null === (n = t.location) || void 0 === n
                    ? void 0
                    : n.host;
            },
            o = function(e) {
                return e
                    ? (r.forEach(function(t) {
                          e = a(e, t, '***');
                      }),
                      e)
                    : e;
            },
            a = function(e, t, n) {
                var r = new RegExp('([?&])' + t + '=.*?(&|$)', 'i');
                return e.match(r) ? e.replace(r, '$1' + t + '=' + n + '$2') : e;
            };
    },
    208: function(e, t, n) {
        'use strict';
        t.a = function(e) {
            try {
                return window.btoa(unescape(encodeURIComponent(e)));
            } catch (t) {
                return e;
            }
        };
    },
    209: function(e, t, n) {
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
                            for (
                                var t = (this.document || this.ownerDocument).querySelectorAll(e),
                                    n = 0;
                                t[n] && t[n] !== this;

                            )
                                ++n;
                            return Boolean(t[n]);
                        }),
                'function' != typeof t.closest &&
                    (t.closest = function(e) {
                        for (var t = this; t && 1 === t.nodeType; ) {
                            if (t.matches(e)) return t;
                            t = t.parentNode;
                        }
                        return null;
                    }));
        };
    },
    210: function(e, t, n) {
        'use strict';
        var r = n(4);
        t.a = Object(r.createSelector)(
            [
                function(e) {
                    return e.session;
                },
            ],
            function(e) {
                return !(!e || !e.token);
            }
        );
    },
    211: function(e, t, n) {
        'use strict';
        var r = n(4),
            i = n(25),
            o = n(268),
            a = n(50),
            s = n(361);
        t.a = Object(r.createSelector)(o.a, function(e) {
            return e.filter(function(e) {
                return (
                    !Object(i.m)(e) &&
                    !e.read &&
                    !e.dismissed &&
                    !Object(s.a)(Object(a.a)(e.parts).partType) &&
                    !e.suppress &&
                    ((t = e),
                    'snippet' === Object(a.a)(t.parts).notificationType || t.forceSnippet) &&
                    !Object(i.n)(e)
                );
                var t;
            });
        });
    },
    213: function(e, t, n) {
        'use strict';
        function r(e) {
            return Math.pow((e + 0.055) / 1.055, 2.4);
        }
        function i(e) {
            var t = e[0] / 255,
                n = e[1] / 255,
                i = e[2] / 255;
            return (
                0.2126 * (t <= 0.03928 ? t * (1 / 12.92) : r(t)) +
                0.7152 * (n <= 0.03928 ? n * (1 / 12.92) : r(n)) +
                0.0722 * (i <= 0.03928 ? i * (1 / 12.92) : r(i))
            );
        }
        function o(e) {
            var t = 255;
            8 === (e = e.replace(/^#/, '')).length &&
                ((t = parseInt(e.slice(6, 8), 16)), (e = e.substring(0, 6))),
                4 === e.length &&
                    ((t = parseInt(e.slice(3, 4).repeat(2), 16)), (e = e.substring(0, 3))),
                3 === e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
            var n = parseInt(e, 16);
            return [n >> 16, (n >> 8) & 255, 255 & n, t];
        }
        function a(e, t) {
            return (function(e, t) {
                return (Math.max(e, t) + 0.05) / (Math.min(e, t) + 0.05);
            })(i(e), i(t));
        }
        function s(e, t) {
            return a(o(e), o(t));
        }
        var c = n(130);
        n.d(t, 'b', function() {
            return d;
        }),
            n.d(t, 'a', function() {
                return l;
            });
        var u = function(e, t, n, r) {
                return (
                    (s(t[r], e) >= n ? r : null) ||
                    Object.keys(t).find(function(r) {
                        return s(t[r], e) >= n;
                    }) ||
                    r
                );
            },
            d = function(e) {
                return { type: 'SET_TAB_NAVIGATION', tabNavigation: e };
            },
            l = function(e) {
                var t = e.color,
                    n = e.secondaryColor;
                return {
                    type: 'SET_ACCESSIBILITY_THEME',
                    accessibilityTheme: u(t, c.a, 2, 'default'),
                    secondaryAccessibilityTheme: u(n, c.a, 2, 'light'),
                };
            };
    },
    214: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return i;
        }),
            n.d(t, 'b', function() {
                return o;
            });
        var r = function(e) {
                var t = function(t) {
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
            o = r({
                '&amp;': '&',
                '&lt;': '<',
                '&gt;': '>',
                '&quot;': '"',
                '&#x27;': "'",
                '&#x60;': '`',
                '&#39;': "'",
            });
    },
    215: function(e, t, n) {
        'use strict';
        n.d(t, 'c', function() {
            return d;
        }),
            n.d(t, 'a', function() {
                return p;
            }),
            n.d(t, 'e', function() {
                return f;
            }),
            n.d(t, 'd', function() {
                return v;
            }),
            n.d(t, 'b', function() {
                return h;
            });
        var r = n(108),
            i = n.n(r),
            o = n(20),
            a = n(64),
            s = n(129);
        function c(e, t, n, r, i, o, a) {
            try {
                var s = e[o](a),
                    c = s.value;
            } catch (e) {
                return void n(e);
            }
            s.done ? t(c) : Promise.resolve(c).then(r, i);
        }
        var u = i()('intercom.actions.inbound-triggers');
        function d(e, t, n) {
            return (
                void 0 === n && (n = !1),
                (function() {
                    var r,
                        i =
                            ((r = regeneratorRuntime.mark(function r(i, c) {
                                var d, p, f, v, h, g, m;
                                return regeneratorRuntime.wrap(
                                    function(r) {
                                        for (;;)
                                            switch ((r.prev = r.next)) {
                                                case 0:
                                                    return (
                                                        (r.prev = 0),
                                                        (d = c()),
                                                        (p = d.session),
                                                        (f = d.newConversation),
                                                        (v = Object(a.b)()),
                                                        (h = {
                                                            clientId: v,
                                                            body: Object(s.c)(t.text),
                                                            createdAt: new Date(),
                                                            composerSuggestionItem: t,
                                                        }),
                                                        (g = f.composerState.visible),
                                                        i(l(t)),
                                                        i(Object(o.h)(h, n)),
                                                        (r.next = 10),
                                                        e.startConversationFromSuggestion(p, {
                                                            suggestionUuid: t.uuid,
                                                            clientAssignedUUID: v,
                                                        })
                                                    );
                                                case 10:
                                                    (m = r.sent),
                                                        i(
                                                            Object(o.i)(
                                                                m,
                                                                null,
                                                                null,
                                                                Date.now(),
                                                                'custom_bot'
                                                            )
                                                        ),
                                                        g && i(Object(o.q)({ visible: !0 })),
                                                        (r.next = 19);
                                                    break;
                                                case 15:
                                                    (r.prev = 15),
                                                        (r.t0 = r.catch(0)),
                                                        i(Object(o.g)(null)),
                                                        u(
                                                            'Couldnt start conversation from suggestion due to e=' +
                                                                r.t0
                                                        );
                                                case 19:
                                                case 'end':
                                                    return r.stop();
                                            }
                                    },
                                    r,
                                    null,
                                    [[0, 15]]
                                );
                            })),
                            function() {
                                var e = this,
                                    t = arguments;
                                return new Promise(function(n, i) {
                                    var o = r.apply(e, t);
                                    function a(e) {
                                        c(o, n, i, a, s, 'next', e);
                                    }
                                    function s(e) {
                                        c(o, n, i, a, s, 'throw', e);
                                    }
                                    a(void 0);
                                });
                            });
                    return function(e, t) {
                        return i.apply(this, arguments);
                    };
                })()
            );
        }
        function l(e) {
            switch (e.preAction) {
                case 'close-composer':
                    return Object(o.q)({ visible: !1 });
                default:
                    throw 'Invalid PRE ACTION type for suggestion=' + e.preAction;
            }
        }
        function p(e) {
            return { type: 'ADD_INBOUND_SUGGESTIONS', composerSuggestions: e };
        }
        function f(e) {
            return { type: 'UPDATE_SERVER_SIDE_INBOUND_SUGGESTIONS', composerSuggestions: e };
        }
        function v(e) {
            return { type: 'UPDATE_PREVIEW_INBOUND_SUGGESTIONS', composerSuggestions: e };
        }
        function h(e) {
            return { type: 'REMOVE_INBOUND_SUGGESTIONS', rulesetId: e };
        }
    },
    22: function(e, t, n) {
        'use strict';
        n.d(t, 'c', function() {
            return c;
        }),
            n.d(t, 'd', function() {
                return f;
            }),
            n.d(t, 'a', function() {
                return v;
            }),
            n.d(t, 'e', function() {
                return h;
            }),
            n.d(t, 'b', function() {
                return g;
            });
        var r = n(7),
            i = n(40),
            o = n(193);
        function a(e, t, n, r, i, o, a) {
            try {
                var s = e[o](a),
                    c = s.value;
            } catch (e) {
                return void n(e);
            }
            s.done ? t(c) : Promise.resolve(c).then(r, i);
        }
        var s = [
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
            c = ['ar', 'he'],
            u = {};
        u.en = n(332);
        var d = u,
            l = 'en',
            p = function(e, t) {
                return (
                    e &&
                    e.replace(/{([\s\S]+?)}/g, function(e, n) {
                        return t[n];
                    })
                );
            },
            f = (function() {
                var e,
                    t =
                        ((e = regeneratorRuntime.mark(function e(t) {
                            var r;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (-1 !== s.indexOf(t)) {
                                                e.next = 2;
                                                break;
                                            }
                                            return e.abrupt(
                                                'return',
                                                Object(i.b)('Unsupported locale: ' + t)
                                            );
                                        case 2:
                                            if (u[t]) {
                                                e.next = 7;
                                                break;
                                            }
                                            return (
                                                (e.next = 5),
                                                Object(o.a)({
                                                    promise: function() {
                                                        return n(707)('./' + t + '.json');
                                                    },
                                                })
                                            );
                                        case 5:
                                            (r = e.sent), (u[t] = r);
                                        case 7:
                                            l = t;
                                        case 8:
                                        case 'end':
                                            return e.stop();
                                    }
                            }, e);
                        })),
                        function() {
                            var t = this,
                                n = arguments;
                            return new Promise(function(r, i) {
                                var o = e.apply(t, n);
                                function s(e) {
                                    a(o, r, i, s, c, 'next', e);
                                }
                                function c(e) {
                                    a(o, r, i, s, c, 'throw', e);
                                }
                                s(void 0);
                            });
                        });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })(),
            v = function() {
                return l;
            },
            h = function(e, t) {
                var n = d[l];
                if (!n) return Object(r.b)("Unknown locale '" + l + "'"), '';
                var i = n[e];
                if (!i)
                    return (
                        Object(r.b)("Unknown key '" + e + "' in locale '" + l + "'"),
                        p(d.en[e], t) || ''
                    );
                try {
                    return p(i, t);
                } catch (t) {
                    return (
                        Object(r.b)(
                            "Interpolation failed for key '" + e + "' in locale '" + l + "'"
                        ),
                        ''
                    );
                }
            },
            g = function(e) {
                return -1 !== c.indexOf(e);
            };
    },
    25: function(e, t, n) {
        'use strict';
        n.d(t, 'b', function() {
            return E;
        }),
            n.d(t, 'd', function() {
                return O;
            }),
            n.d(t, 'a', function() {
                return S;
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
                return R;
            }),
            n.d(t, 'm', function() {
                return A;
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
                return U;
            }),
            n.d(t, 'c', function() {
                return P;
            }),
            n.d(t, 's', function() {
                return k;
            }),
            n.d(t, 'h', function() {
                return L;
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
        var r = n(132),
            i = n.n(r),
            o = n(44),
            a = n.n(o),
            s = n(284),
            c = n.n(s),
            u = n(338),
            d = n.n(u),
            l = n(273),
            p = n.n(l),
            f = n(275),
            v = n.n(f),
            h = n(339),
            g = n.n(h),
            m = n(50),
            b = n(7),
            _ = Object.assign,
            E = function(e) {
                return e.parts.filter(function(e) {
                    return e.author.isAdmin;
                })[0];
            },
            O = function(e) {
                return Object(m.a)(
                    e.parts.filter(function(e) {
                        return e.author.isAdmin;
                    })
                );
            },
            S = function(e) {
                return e.parts.reduce(function(e, t) {
                    return e + (t.author.isAdmin ? 1 : 0);
                }, 0);
            },
            y = function(e) {
                return 1 === e.parts.length && 'chat' === e.parts[0].messageType;
            },
            C = function(e) {
                return e.parts.length > 1 && Object(m.a)(e.parts).author.isAdmin;
            },
            T = function(e) {
                return e.author.isBot && 'Operator' === e.author.firstName;
            },
            I = function(e, t) {
                if (!a()(t)) {
                    var n = c()([].concat(e.parts, t.parts), function(e) {
                        return e.clientId || e.id;
                    });
                    return i()(n, ['createdAt'], ['asc']);
                }
                return e.parts;
            },
            w = function(e, t) {
                if (!a()(t) && t.composerState) {
                    if (t.composerState.version > e.composerState.version) return t.composerState;
                    t.composerState.version === e.composerState.version &&
                        t.composerState.visible !== e.composerState.visible &&
                        Object(b.b)(
                            'Different composerState visibibility with same version number for conversation with id=' +
                                e.id
                        );
                }
                return e.composerState;
            },
            R = function(e) {
                if (e && e.parts && 0 !== e.parts.length)
                    return e.id + '-' + Object(m.a)(e.parts).id;
            },
            A = function(e) {
                return 'partial' === e.fetchState;
            },
            j = function(e) {
                var t = O(e);
                return 1 === e.parts.length ? N(e) : _({}, t, { messageType: M(t) });
            },
            N = function(e) {
                var t = e.lastParticipatingAdmin,
                    n = t ? t.lastActiveAt : void 0,
                    r = t ? t.isActive : void 0;
                return _({}, e.parts[0], { lastActiveAt: n, isActive: r });
            },
            M = function(e) {
                return e.messageType || 'adminReply';
            },
            U = function(e) {
                return !(
                    !e.identifier.startsWith('custom_data.') &&
                    !e.identifier.startsWith('company.custom_data.')
                );
            },
            P = function(e, t) {
                var n = e.attributes.find(function(e) {
                    return e.identifier === t;
                });
                if (n)
                    return 'string' === n.type && Array.isArray(n.options)
                        ? 'list'
                        : 'email' === n.identifier
                        ? 'email'
                        : 'phone' === n.identifier
                        ? 'phone'
                        : n.type;
            },
            D = function(e) {
                var t = v()(e.parts, function(e) {
                    return e.body;
                });
                return p()(t, function(e) {
                    return 'messengerCard' === e.type;
                });
            },
            k = function(e) {
                return v()(D(e), function(e) {
                    return d()(e, 'type');
                });
            },
            L = function(e, t) {
                return g()(D(e), { uri: t });
            },
            x = function(e) {
                return e.sort(function(e, t) {
                    return t.lastPartCreatedAt - e.lastPartCreatedAt;
                });
            },
            G = function(e) {
                return (
                    (function(e) {
                        return e.composerState.visible;
                    })(e) &&
                    !(function(e) {
                        return 'attribute_collector' === e.parts[0].replyType;
                    })(e)
                );
            },
            V = function(e) {
                return (
                    e.parts &&
                    Object(m.a)(e.parts) &&
                    'pointer' === Object(m.a)(e.parts).messageType
                );
            };
    },
    26: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return i;
        }),
            n.d(t, 'l', function() {
                return o;
            }),
            n.d(t, 'm', function() {
                return a;
            }),
            n.d(t, 'B', function() {
                return s;
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
                return f;
            }),
            n.d(t, 'b', function() {
                return v;
            }),
            n.d(t, 'x', function() {
                return h;
            }),
            n.d(t, 'c', function() {
                return g;
            }),
            n.d(t, 'y', function() {
                return m;
            }),
            n.d(t, 'd', function() {
                return b;
            }),
            n.d(t, 'j', function() {
                return _;
            }),
            n.d(t, 'o', function() {
                return E;
            }),
            n.d(t, 'h', function() {
                return O;
            }),
            n.d(t, 'g', function() {
                return S;
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
                return R;
            }),
            n.d(t, 'p', function() {
                return A;
            }),
            n.d(t, 'i', function() {
                return j;
            }),
            n.d(t, 'k', function() {
                return N;
            });
        var r = n(22),
            i = { TAB: 9, ENTER: 13, ESC: 27, SPACE: 32 },
            o = function(e) {
                return e.scrollHeight - e.clientHeight - e.scrollTop;
            },
            a = function(e) {
                return e.scrollTop / (e.scrollHeight - e.clientHeight);
            },
            s = function(e, t) {
                void 0 === t && (t = 0), e && (e.scrollTop = t);
            },
            c = function(e, t) {
                void 0 === t && (t = 0);
                var n = e.scrollTop;
                return e.scrollHeight - n - e.clientHeight < t + 1;
            },
            u = function(e) {
                if (!e) return 0;
                var t = e.scrollTop;
                return e.scrollHeight - e.clientHeight - t;
            },
            d = function(e) {
                return e.scrollHeight > e.clientHeight;
            },
            l = function(e) {
                var t = e.scrollHeight,
                    n = e.clientHeight;
                e.scrollTop = t - n;
            },
            p = function(e) {
                var t = e.scrollHeight,
                    n = e.clientHeight;
                if (!e.scrollBy) return l(e);
                e.scrollBy({ top: t - n, left: 0, behavior: 'smooth' });
            },
            f = function(e, t) {
                var n = e.getBoundingClientRect(),
                    r = n.bottom,
                    i = n.top,
                    o = n.height,
                    a = t.getBoundingClientRect(),
                    s = a.bottom,
                    c = a.top,
                    u = a.height;
                if (i < c || r > s) {
                    for (var d = e.offsetTop; e; ) {
                        'relative' === window.getComputedStyle(e).position &&
                            (d += e.offsetTop - e.scrollTop + e.clientTop),
                            (e = e.offsetParent);
                    }
                    t.scrollTop = d - Math.trunc(u / 2) + Math.trunc(o / 2);
                }
            },
            v = function(e, t) {
                var n = e.className.split(' ');
                n.some(function(e) {
                    return e === t;
                }) || (n.push(t), (e.className = n.join(' ').trim()));
            },
            h = function(e, t) {
                e.className = e.className
                    .split(' ')
                    .filter(function(e) {
                        return e !== t;
                    })
                    .join(' ');
            },
            g = function(e, t, n, r) {
                void 0 === r && (r = !1),
                    null != e &&
                        (e.addEventListener
                            ? e.addEventListener(t, n, r)
                            : e.attachEvent && e.attachEvent('on' + t, n));
            },
            m = function(e, t, n) {
                null != e &&
                    (e.removeEventListener
                        ? e.removeEventListener(t, n)
                        : e.detachEvent && e.detachEvent('on' + t, n));
            },
            b = function(e) {
                var t = e.currentTarget,
                    n = t.scrollTop,
                    r = t.scrollHeight,
                    i = t.clientHeight,
                    o = e.deltaY,
                    a = o > 0;
                a && o > r - i - n
                    ? (t.scrollTop = r)
                    : !a && -o > n
                    ? (t.scrollTop = 0)
                    : e.stopPropagation();
            },
            _ = function(e) {
                if (e && 'selectionStart' in e) return e.selectionStart;
            },
            E = function(e, t, n) {
                return e.slice(0, n) + t + e.slice(n);
            },
            O = function(e, t) {
                void 0 === t && (t = -1),
                    e &&
                        (e.focus(),
                        'setSelectionRange' in e && t >= 0 && e.setSelectionRange(t, t));
            };
        function S(e, t, n) {
            var r = this,
                i = e.document || e.ownerDocument;
            return function(e) {
                var o = [];
                Array.from(i.querySelectorAll(t)).forEach(function(e) {
                    return o.push(e);
                });
                for (var a = e.target; a && a !== r; ) {
                    if (o.indexOf(a) > -1) {
                        n.call(a, e);
                        break;
                    }
                    a = a.parentNode;
                }
            };
        }
        var y = function(e) {
                return void 0 !== e.hidden
                    ? !e.hidden
                    : void 0 !== e.mozHidden
                    ? !e.mozHidden
                    : void 0 !== e.msHidden
                    ? !e.msHidden
                    : void 0 === e.webkitHidden || !e.webkitHidden;
            },
            C = function() {
                var e;
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
            T = function(e, t) {
                void 0 === t && (t = {});
                var n = document.createElement('form');
                n.setAttribute('target', '_blank'),
                    n.setAttribute('method', 'post'),
                    n.setAttribute('action', e),
                    Object.keys(t).forEach(function(e) {
                        var r = document.createElement('input');
                        (r.type = 'hidden'), (r.name = e), (r.value = t[e]), n.appendChild(r);
                    }),
                    document.body.appendChild(n),
                    n.submit(),
                    document.body.removeChild(n);
            },
            I = function(e) {
                return function(t) {
                    return (t.keyCode === i.ENTER || t.keyCode === i.SPACE) && e(t);
                };
            },
            w = function(e) {
                return (
                    e.keyCode === i.TAB &&
                    !(-1 !== ['INPUT', 'TEXTAREA', 'BUTTON'].indexOf(e.target.tagName))
                );
            },
            R = function(e) {
                if (e) return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
            },
            A = function(e) {
                return e.keyCode === i.ESC;
            },
            j = function(e) {
                return Array.from(
                    e.querySelectorAll(
                        'button, [href], input:not([type="file"]):not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'
                    )
                ).filter(function(e) {
                    return !e.closest('[aria-hidden="true"]');
                });
            },
            N = function(e) {
                return Object(r.b)(e) ? 'rtl' : 'ltr';
            };
    },
    268: function(e, t, n) {
        'use strict';
        var r = n(202),
            i = n(4),
            o = n(25);
        t.a = Object(i.createSelector)(
            [
                function(e) {
                    return Object(r.a)(e.conversations.byId);
                },
                function(e) {
                    return e.notificationTypeOverrides;
                },
            ],
            function(e, t) {
                return e
                    .filter(function(e) {
                        return !Object(o.m)(e);
                    })
                    .map(function(e) {
                        return (function(e, t) {
                            var n = Object(o.g)(e);
                            return Object.assign({}, e, {
                                suppress: t.suppress[n] || !1,
                                forceSnippet: t.forceSnippet[n] || !1,
                            });
                        })(e, t);
                    });
            }
        );
    },
    269: function(e, t, n) {
        'use strict';
        n.d(t, 'b', function() {
            return a;
        }),
            n.d(t, 'a', function() {
                return s;
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
                return f;
            });
        var r = ['https://app.intercom.com', 'https://app.intercom.io'];
        function i(e, t) {
            e.opener && e.opener.postMessage(t, '*');
        }
        function o(e, t) {
            return void 0 === t && (t = {}), { boundEventCreator: Object.assign({ type: e }, t) };
        }
        var a = {
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
            s = {
                CHOOSE_EVENT_TYPE: 'CHOOSE_EVENT_TYPE',
                CONFIRM_URL: 'CONFIRM_URL',
                SELECT_CLICK_ELEMENT: 'SELECT_CLICK_ELEMENT',
            };
        function c(e, t) {
            e.addEventListener('message', function(e) {
                if (-1 !== r.indexOf(e.origin)) {
                    var n = e.data.boundEventCreator;
                    n && 'open' === n.type && t(n.boundEventCreatorState);
                }
            });
        }
        function u(e) {
            i(e, o('ready'));
        }
        function d(e, t) {
            i(e, o('updateStage', { newStage: t }));
        }
        function l(e, t) {
            i(e, o('updateData', { eventData: t }));
        }
        function p(e, t) {
            i(e, o('newEvent', { newEvent: t }));
        }
        function f(e) {
            i(e, o('closed'));
        }
    },
    270: function(e, t, n) {
        'use strict';
        function r(e) {
            var t = document.createElement('a');
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
            var t = r(e).search;
            return t
                ? (/^[?#]/.test(t) ? t.slice(1) : t).split('&').reduce(function(e, t) {
                      var n = t.split('='),
                          r = n[0],
                          i = n[1];
                      return (e[r] = i ? decodeURIComponent(i.replace(/\+/g, ' ')) : ''), e;
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
    280: function(e, t, n) {
        'use strict';
        var r = n(44),
            i = n.n(r),
            o = n(4),
            a = n(73),
            s = n(210);
        t.a = Object(o.createSelector)(
            [
                function(e) {
                    return e.app;
                },
                function(e) {
                    return e.user;
                },
                function(e) {
                    return e.launcher;
                },
                s.a,
            ],
            function(e, t, n, r) {
                return (
                    !r &&
                    (function(e, t) {
                        var n = e.features,
                            r = n.inboundMessages,
                            i = n.outboundMessages,
                            o = n.anonymousInboundMessages;
                        return 'user' === t.role ? r || i : o;
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
                    ((o = a.b.get('intercom-snippet__intersection-mode')),
                    !(
                        !i()(o) &&
                        -1 ===
                            ['inbound-custom-bot-preview', 'outbound-custom-bot-preview'].indexOf(o)
                    ))
                );
                var o;
            }
        );
    },
    282: function(e, t, n) {
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
        var r = n(46),
            i = n(202),
            o = n(4),
            a = n(25),
            s = n(293),
            c = function(e, t) {
                return !e.read && e.id !== t && (e.dismissed || !Object(a.m)(e));
            },
            u = Object(o.createSelector)(
                function(e) {
                    return Object(i.a)(e.conversations.byId);
                },
                function(e) {
                    var t = e.app,
                        n = t.conversationId,
                        i = t.isMessengerOpen,
                        o = e.user.isPresent;
                    if (i && 'conversation' === Object(r.d)(e)) return n;
                    if (!i) {
                        var a = Object(s.a)(e);
                        if (1 === a.length && o) return a[0].id;
                    }
                },
                function(e, t) {
                    return e.reduce(function(e, n) {
                        return c(n, t) && e.push(n.id), e;
                    }, []);
                }
            ),
            d = Object(o.createSelector)(u, function(e) {
                return e.length;
            });
    },
    286: function(e, t, n) {
        'use strict';
        t.a = {
            read: function(e, t) {
                t = t || parent.document.cookie;
                var n =
                        '(?:(?:^|[^]*;)\\s*' +
                        encodeURIComponent(e).replace(/[\-\.\+\*]/g, '\\$&') +
                        '\\s*\\=\\s*([^;]*).*$)|^.*$',
                    r = t.match(new RegExp(n));
                if (null !== r && void 0 !== r[1]) return decodeURIComponent(r[1]);
            },
            write: function(e, t, n) {
                void 0 === n && (n = {});
                var r = n,
                    i = r.domain,
                    o = r.path,
                    a = r.expires,
                    s = r.secure,
                    c = r.sameSite,
                    u = e + '=' + t;
                return (
                    i && (u += '; domain=' + i),
                    o && (u += '; path=' + o),
                    a && (u += '; expires=' + a.toUTCString()),
                    c && (u += '; samesite=' + c),
                    s && (u += '; secure'),
                    (parent.document.cookie = u),
                    u
                );
            },
            clear: function(e, t) {
                void 0 === t && (t = {});
                var n = t,
                    r = n.domain,
                    i = n.path,
                    o = new Date(0);
                return this.write(e, '', { domain: r, path: i, expires: o });
            },
        };
    },
    289: function(e, t) {
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
    292: function(e, t, n) {
        'use strict';
        n.d(t, 'd', function() {
            return a;
        }),
            n.d(t, 'b', function() {
                return u;
            }),
            n.d(t, 'a', function() {
                return p;
            }),
            n.d(t, 'c', function() {
                return f;
            }),
            n.d(t, 'e', function() {
                return v;
            });
        var r = n(62),
            i = n(25),
            o = n(750);
        function a(e, t, n, o) {
            return (
                void 0 === t && (t = 'unknown'),
                void 0 === n && (n = 1),
                void 0 === o && (o = 10),
                function(a, u) {
                    a({ type: 'GET_CONVERSATIONS_REQUEST' });
                    var d = u(),
                        l = d.session,
                        p = d.app;
                    return e
                        .getConversations(l, {
                            source: t,
                            page: n,
                            perPage: o,
                            selfServeSuggestionsMatch: p.selfServeSuggestionsMatch,
                        })
                        .then(function(t) {
                            t.conversations.forEach(function(t) {
                                Object(i.s)(t).forEach(function(t) {
                                    a(Object(r.a)(e, t));
                                });
                            }),
                                a(v(t)),
                                a(s(t));
                        })
                        .catch(function() {
                            a(c());
                        });
                }
            );
        }
        function s(e) {
            return { type: 'GET_CONVERSATIONS_SUCCESS', conversations: e };
        }
        function c(e) {
            return { type: 'GET_CONVERSATIONS_FAILURE', error: e };
        }
        function u(e, t) {
            return function(n, r) {
                n(d(t));
                var i = r().session;
                return e.dismissNotifications(i, t).then(function() {
                    return n(l(t));
                });
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
        function f(e) {
            return { type: 'EMAIL_ATTRIBUTE_COLLECTOR_INSERTED', conversationId: e };
        }
        function v(e) {
            return function(t) {
                var n = e.conversations;
                n &&
                    n.forEach(function(e) {
                        Object(i.n)(e) && e.read && t(Object(o.a)(e.id));
                    });
            };
        }
    },
    293: function(e, t, n) {
        'use strict';
        var r = n(4),
            i = n(268),
            o = n(25),
            a = Object(r.createSelector)(i.a, function(e) {
                return e.filter(function(e) {
                    return (
                        !e.read &&
                        !e.forceSnippet &&
                        ((1 === (t = e).parts.length && 'full' === t.parts[0].notificationType) ||
                            Object(o.i)(e)) &&
                        'pointer' !== e.messageType &&
                        !Object(o.n)(e) &&
                        !e.preventEndUserReplies
                    );
                    var t;
                });
            });
        t.a = Object(r.createSelector)(
            function(e) {
                return e.conversations.byId[e.message.conversationId];
            },
            a,
            function(e, t) {
                return (
                    (n = t),
                    void 0 === (r = e) ||
                    (function(e, t) {
                        return (
                            void 0 !==
                            e.find(function(e) {
                                return e.id === t.id;
                            })
                        );
                    })(n, r) ||
                    Object(o.n)(r)
                        ? n
                        : n.concat(r)
                );
                var n, r;
            }
        );
    },
    300: function(e, t, n) {
        'use strict';
        n.d(t, 'e', function() {
            return o;
        }),
            n.d(t, 'b', function() {
                return a;
            }),
            n.d(t, 'c', function() {
                return s;
            }),
            n.d(t, 'd', function() {
                return u;
            }),
            n.d(t, 'a', function() {
                return d;
            });
        var r, i;
        function o() {
            return function(e, t) {
                var n = t().launcherDiscoveryMode,
                    r = n.hasDiscoveredLauncher,
                    i = n.isLauncherDiscoveryModeOpening,
                    o = n.isLauncherDiscoveryModeClosing;
                r ||
                    i ||
                    o ||
                    (setTimeout(function() {
                        e({ type: 'OPEN_LAUNCHER_DISCOVERY_MODE' });
                    }, 6e3),
                    c(e));
            };
        }
        function a() {
            r && clearTimeout(r), i && clearTimeout(i);
        }
        function s() {
            return function(e) {
                c(e);
            };
        }
        var c = function(e) {
            (r = setTimeout(function() {
                return e({ type: 'CLOSE_LAUNCHER_DISCOVERY_MODE' });
            }, 9500)),
                (i = setTimeout(function() {
                    return e({ type: 'DISABLE_LAUNCHER_DISCOVERY_MODE' });
                }, 10200));
        };
        function u() {
            return { type: 'OPENING_MESSENGER_FROM_LAUNCHER_DISCOVERY_MODE' };
        }
        function d() {
            return { type: 'DISABLE_LAUNCHER_DISCOVERY_MODE' };
        }
    },
    334: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return r;
        }),
            n.d(t, 'b', function() {
                return a;
            }),
            n.d(t, 'c', function() {
                return s;
            });
        var r = n(289),
            i = Object.assign;
        function o(e) {
            var t = window.parent || window;
            if (t && t.document) {
                var n = t.document.querySelector('meta[name=' + e + ']');
                return n && n.content;
            }
        }
        function a() {
            var e = i({}, r),
                t = { api_base: o('intercom-js-api-base') };
            return t.api_base && (console.log('Overriding config', t), i(e, t)), e;
        }
        function s() {
            return !1;
        }
    },
    335: function(e, t, n) {
        'use strict';
        var r = n(18),
            i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        n.d(t, 'a', function() {
            return o;
        }),
            n.d(t, 'b', function() {
                return a;
            });
        var o = function(e) {
                var t = (e = e || '').match(/[^\x00-\x7F]/);
                if (!e || (r.a.isSafari() && t)) {
                    var n = e.split('.');
                    (e = 'File' + new Date().getTime()),
                        n.length > 1 && (e += '.' + n[n.length - 1]);
                }
                return e;
            },
            a = function(e, t, n) {
                if (e) {
                    var r;
                    if (e.split(',')[0].indexOf('base64') >= 0) {
                        var o = e.split(',')[1];
                        r = window.atob
                            ? atob(o)
                            : (function(e) {
                                  if (!e || e.length % 4 != 0)
                                      throw new Error(
                                          'Invalid string. Length must be a multiple of 4'
                                      );
                                  for (
                                      var t = 0,
                                          n = e.length,
                                          r = e.indexOf('=') > 0 ? e.length - e.indexOf('=') : 0,
                                          o = new Uint8Array((3 * n) / 4 - r),
                                          a = new Array(4),
                                          s = 0;
                                      s < e.length;
                                      s += 4
                                  )
                                      (a[0] = i.indexOf(e[s])),
                                          (a[1] = i.indexOf(e[s + 1])),
                                          (a[2] = i.indexOf(e[s + 2])),
                                          (a[3] = i.indexOf(e[s + 3])),
                                          (o[t++] = 255 & ((a[0] << 2) | (a[1] >> 4))),
                                          a[2] < 64 &&
                                              ((o[t++] = 255 & ((a[1] << 4) | (a[2] >> 2))),
                                              a[3] < 64 && (o[t++] = 255 & ((a[2] << 6) | a[3])));
                                  for (var c = '', u = 0; u < o.length; u++)
                                      c += String.fromCharCode(parseInt(o[u]));
                                  return c;
                              })(o);
                    } else r = unescape(e.split(',')[1]);
                    for (var a = new Uint8Array(r.length), s = 0; s < r.length; s++)
                        a[s] = r.charCodeAt(s);
                    var c = new Blob([a], { type: n });
                    return (c.lastModifiedDate = new Date()), (c.name = t), c;
                }
            };
    },
    337: function(e, t, n) {
        'use strict';
        t.a = function(e) {
            if (void 0 !== e)
                try {
                    var t = new e.CustomEvent('test', { cancelable: !0 });
                    if ((t.preventDefault(), !0 !== t.defaultPrevented))
                        throw new Error('Could not prevent default');
                } catch (t) {
                    var n = function(e, t) {
                        ((t = t || {}).bubbles = !!t.bubbles), (t.cancelable = !!t.cancelable);
                        var n = document.createEvent('CustomEvent');
                        n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail);
                        var r = n.preventDefault;
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
        };
    },
    345: function(e, t, n) {
        'use strict';
        t.a =
            !0 === parent.__INTERCOM_REDUX_DEV_TOOLS__ &&
            parent.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
                ? parent.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: !1, traceLimit: 25 })
                : function() {
                      return function(e) {
                          return e;
                      };
                  };
    },
    347: function(e, t, n) {
        'use strict';
        n.d(t, 'b', function() {
            return d;
        }),
            n.d(t, 'a', function() {
                return l;
            });
        var r = n(108),
            i = n.n(r),
            o = n(20),
            a = n(64),
            s = n(129);
        function c(e, t, n, r, i, o, a) {
            try {
                var s = e[o](a),
                    c = s.value;
            } catch (e) {
                return void n(e);
            }
            s.done ? t(c) : Promise.resolve(c).then(r, i);
        }
        var u = i()('intercom.actions.predictive-answers');
        function d(e, t, n) {
            return (
                void 0 === n && (n = !1),
                (function() {
                    var r,
                        i =
                            ((r = regeneratorRuntime.mark(function r(i, c) {
                                var d, p, f, v, h;
                                return regeneratorRuntime.wrap(
                                    function(r) {
                                        for (;;)
                                            switch ((r.prev = r.next)) {
                                                case 0:
                                                    return (
                                                        (r.prev = 0),
                                                        (d = c()),
                                                        (p = d.session),
                                                        (f = Object(a.b)()),
                                                        (v = {
                                                            clientId: f,
                                                            body: Object(s.c)(t.text),
                                                            createdAt: new Date(),
                                                            composerSuggestionItem: t,
                                                        }),
                                                        i(l(null)),
                                                        i(Object(o.h)(v, n)),
                                                        (r.next = 10),
                                                        e.fireComposerSuggestion(p, {
                                                            conversationId: void 0,
                                                            suggestion: t,
                                                            clientId: f,
                                                        })
                                                    );
                                                case 10:
                                                    (h = r.sent),
                                                        i(
                                                            Object(o.i)(
                                                                h,
                                                                null,
                                                                null,
                                                                Date.now(),
                                                                'predictive_answer'
                                                            )
                                                        ),
                                                        (r.next = 18);
                                                    break;
                                                case 14:
                                                    (r.prev = 14),
                                                        (r.t0 = r.catch(0)),
                                                        i(Object(o.g)(null)),
                                                        u(
                                                            'Couldnt start conversation from suggestion due to e=' +
                                                                r.t0
                                                        );
                                                case 18:
                                                case 'end':
                                                    return r.stop();
                                            }
                                    },
                                    r,
                                    null,
                                    [[0, 14]]
                                );
                            })),
                            function() {
                                var e = this,
                                    t = arguments;
                                return new Promise(function(n, i) {
                                    var o = r.apply(e, t);
                                    function a(e) {
                                        c(o, n, i, a, s, 'next', e);
                                    }
                                    function s(e) {
                                        c(o, n, i, a, s, 'throw', e);
                                    }
                                    a(void 0);
                                });
                            });
                    return function(e, t) {
                        return i.apply(this, arguments);
                    };
                })()
            );
        }
        function l(e) {
            return { type: 'SET_PREDICTIVE_ANSWERS', predictiveAnswersSuggestions: e };
        }
    },
    361: function(e, t, n) {
        'use strict';
        t.a = function(e) {
            return (
                'participant_added' === e ||
                'participant_removed' === e ||
                'article_feedback_requested' === e ||
                'temporary_expectations' === e
            );
        };
    },
    40: function(e, t, n) {
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
    43: function(e, t, n) {
        'use strict';
        n.d(t, 'c', function() {
            return r;
        }),
            n.d(t, 'd', function() {
                return i;
            }),
            n.d(t, 'a', function() {
                return o;
            }),
            n.d(t, 'g', function() {
                return a;
            }),
            n.d(t, 'f', function() {
                return s;
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
        var r = 'send-data-to-messenger',
            i = 'send-data-to-sheet',
            o = 'close',
            a = 'submit-sheet',
            s = 'start-navigation',
            c = 'finish-navigation',
            u = 'set-title';
        function d(e, t, n) {
            return { intercomSheet: { type: e, payload: t, meta: { proxy: n } } };
        }
    },
    46: function(e, t, n) {
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
                return v;
            }),
            n.d(t, 'h', function() {
                return h;
            }),
            n.d(t, 'b', function() {
                return g;
            }),
            n.d(t, 'g', function() {
                return m;
            }),
            n.d(t, 'i', function() {
                return b;
            });
        var r = n(4),
            i = n(144),
            o = n(25),
            a = n(50),
            s = function(e) {
                return e.viewStack;
            },
            c = Object(r.createSelector)(s, function(e) {
                return !!e && e.length > 1;
            }),
            u = Object(r.createSelector)(s, function(e) {
                return e && e.length > 0 ? e[e.length - 1] : void 0;
            }),
            d = Object(r.createSelector)(s, function(e) {
                return !e || 0 === e.length;
            }),
            l = function(e) {
                var t = e.app;
                return u(t);
            },
            p = function(e) {
                var t = e.app;
                return c(t);
            };
        function f(e) {
            var t = e.user,
                n = e.app;
            return (
                !n.inboundConversationsDisabled &&
                ('user' === t.role
                    ? n.features.inboundMessages
                    : n.features.anonymousInboundMessages)
            );
        }
        var v = function(e) {
                return { allowNewConversation: f(e) };
            },
            h = function(e) {
                return e.app.launcherLogoUrl;
            },
            g = function(e) {
                return !(f(e) || !e.app.helpCenterSiteUrl || !e.app.features.selfServeIconEnabled);
            },
            m = function(e, t) {
                var n = t.currentView;
                return (
                    'home-screen' !== n &&
                    'empty-screen' !== n &&
                    (!e.app.features.operatorSuggestionsNavigationEnabled || 'conversations' !== n)
                );
            },
            b = function(e) {
                if (!e) return !1;
                var t = {
                        only_outside_of_office_hours: !!e.app.officeHoursResponse,
                        always: !0,
                        never: !1,
                    },
                    n = e.user,
                    r = n.role,
                    s = n.userSuppliedEmail,
                    c = e.app.upfrontEmailCollection,
                    u = c.upfrontEmailCollectionSetting,
                    d = c.upfrontEmailCollectionSubmitted,
                    l = e.session && e.session.email,
                    p = Object(i.a)(e);
                return (
                    (!p || !p.isEmailAttributeCollectorInserted) &&
                    !s &&
                    -1 !== ['visitor', 'lead'].indexOf(r) &&
                    !l &&
                    !d &&
                    !(function(e) {
                        return !!e && Object(o.i)(e) && !Object(a.a)(e.parts).author.isBot;
                    })(p) &&
                    t[u]
                );
            };
    },
    50: function(e, t, n) {
        'use strict';
        t.a = function(e) {
            if (e) return e[e.length - 1];
        };
    },
    52: function(e, t, n) {
        'use strict';
        var r = n(46),
            i = n(300),
            o = n(211),
            a = n(202),
            s = n(4),
            c = Object(s.createSelector)(
                function(e) {
                    return Object(a.a)(e.conversations.byId);
                },
                function(e) {
                    return e.filter(function(e) {
                        return !e.read && e.dismissed;
                    });
                }
            ),
            u = n(282),
            d = n(16),
            l = n(20),
            p = n(203),
            f = n(181),
            v = n(7);
        n.d(t, 'e', function() {
            return g;
        }),
            n.d(t, 'k', function() {
                return m;
            }),
            n.d(t, 'a', function() {
                return _;
            }),
            n.d(t, 'j', function() {
                return E;
            }),
            n.d(t, 'i', function() {
                return O;
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
                return R;
            }),
            n.d(t, 'd', function() {
                return M;
            }),
            n.d(t, 'l', function() {
                return U;
            });
        var h = Object.assign;
        function g() {
            return function(e, t) {
                t().launcherDiscoveryMode.isLauncherDiscoveryModeOpening
                    ? (e(Object(i.d)()),
                      setTimeout(function() {
                          return e(m());
                      }, 100),
                      setTimeout(function() {
                          return e(Object(i.a)());
                      }, 100))
                    : e(m());
            };
        }
        function m() {
            return function(e, t) {
                var n = t().borderless.conversationId;
                e(
                    n
                        ? I(n)
                        : function(e, t) {
                              e(
                                  t().app.isMessengerOpen
                                      ? _()
                                      : function(e) {
                                            e(A()), e({ type: 'OPEN_MESSENGER' }), e(Object(p.a)());
                                        }
                              );
                          }
                );
            };
        }
        function b() {
            return { type: 'OPEN_MESSENGER' };
        }
        function _(e) {
            return void 0 === e && (e = !1), { type: 'CLOSE_MESSENGER', fromCloseButton: e };
        }
        function E(e, t) {
            return (
                void 0 === e && (e = ''),
                void 0 === t && (t = !1),
                { type: 'SHOW_NEW_CONVERSATION', defaultMessage: e, replaceCurrentView: t }
            );
        }
        function O() {
            return { type: 'SHOW_CONVERSATIONS' };
        }
        function S() {
            return { type: 'SHOW_EMPTY_SCREEN' };
        }
        function y(e) {
            return (
                void 0 === e && (e = !1),
                { type: 'SHOW_MESSENGER_TRIGGER_SCREEN', replaceCurrentView: e }
            );
        }
        function C() {
            return function(e) {
                e(y(!0)), e({ type: 'OPEN_MESSENGER' });
            };
        }
        function T(e) {
            return function(t) {
                t(Object(f.a)(e)), t({ type: 'OPEN_MESSENGER' });
            };
        }
        function I(e) {
            return function(t) {
                t(Object(p.a)()), t(T(e)), t(Object(l.l)(d.b, e));
            };
        }
        function w(e) {
            return function(t) {
                t(Object(f.a)(e)), t(Object(l.l)(d.b, e));
            };
        }
        function R(e) {
            return function(t) {
                return t(Object(l.l)(d.b, e)).then(function() {
                    return t(T(e));
                });
            };
        }
        function A() {
            return function(e, t) {
                var n = t(),
                    r = n.app,
                    i = n.user,
                    a = n.message,
                    s = r.features,
                    d = r.inboundConversationsDisabled,
                    l = r.viewStack,
                    f = r.isBooting,
                    v = i.hasConversations,
                    h = i.homeScreenSlots,
                    g = i.articleConversationId,
                    m = Object(u.b)(n),
                    b = h && h.length > 0,
                    _ = Object(o.a)(n),
                    O = c(n),
                    S = (function(e, t) {
                        return (
                            ('user' === e.role && t.inboundMessages) ||
                            ('user' !== e.role && t.anonymousInboundMessages)
                        );
                    })(i, s),
                    y = s.operatorSuggestionsNavigationEnabled;
                f ||
                    (S
                        ? !y && m > 1
                            ? (e({ type: 'SHOW_HOME_SCREEN' }), j(i, 'homescreen'))
                            : a && a.conversationId
                            ? (e(w(a.conversationId)),
                              e(Object(p.a)()),
                              j(i, 'conversation-from-auto-message'))
                            : 1 === _.length
                            ? (e(w(_[0].id)), j(i, 'conversation-from-notification'))
                            : 1 === O.length
                            ? (e(w(O[0].id)), j(i, 'conversation-from-dismissed'))
                            : g
                            ? (e(w(g)), j(i, 'conversation-from-article'))
                            : l.length ||
                              (y || (!b && !v)
                                  ? d
                                      ? b
                                          ? y
                                              ? (e({ type: 'SHOW_CONVERSATIONS' }),
                                                j(i, 'conversations'))
                                              : (e({ type: 'SHOW_HOME_SCREEN' }),
                                                j(i, 'homescreen'))
                                          : (e({ type: 'SHOW_EMPTY_SCREEN' }), j(i, 'empty-screen'))
                                      : (e(E()), j(i, 'new-conversation'))
                                  : (e({ type: 'SHOW_HOME_SCREEN' }), j(i, 'homescreen')))
                        : (e({ type: 'SHOW_EMPTY_SCREEN' }), j(i, 'empty-screen')));
            };
        }
        function j(e, t) {
            void 0 === t && (t = 'homescreen'),
                v.j.buildAndAddMetric(e, t, 'initial-screen', 'messenger', 'from_launcher');
        }
        function N(e, t) {
            var n = t(),
                i = (function(e) {
                    return h({}, e, { viewStack: e.viewStack.slice(0, -1) });
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
        function U() {
            return { type: 'TOGGLE_UPFRONT_EMAIL_COLLECTOR_STATE' };
        }
        t.b = {
            closeMessenger: _,
            getAndOpenConversation: R,
            navigateBack: M,
            onLauncherClick: g,
            openConversation: T,
            openConversationInMessenger: I,
            openConversations: function() {
                return function(e) {
                    e({ type: 'SHOW_CONVERSATIONS' }), e({ type: 'OPEN_MESSENGER' });
                };
            },
            openMessenger: b,
            openNewConversation: function(e) {
                return function(t, n) {
                    n().app.inboundConversationsDisabled || t(E(e)), t({ type: 'OPEN_MESSENGER' });
                };
            },
            showAndGetConversation: w,
            showConversation: f.a,
            showConversations: O,
            showEmptyScreen: S,
            showMessengerTriggerScreen: y,
            showInitialScreen: A,
            showNewConversation: E,
            toggleMessenger: m,
            toggleUpfrontEmailCollectorState: U,
            openMessengerLoadingView: C,
        };
    },
    53: function(e, t, n) {
        'use strict';
        var r = n(111),
            i = n.n(r),
            o = n(276),
            a = n.n(o),
            s = n(114),
            c = n.n(s),
            u = n(201),
            d = n.n(u),
            l = n(340),
            p = n.n(l),
            f = function e(t) {
                if (!d()(t)) return t;
                var n = {};
                return (
                    Object.keys(t).forEach(function(r) {
                        var i = e(t[r]);
                        Array.isArray(i) &&
                            (i = i.map(function(t) {
                                return e(t);
                            })),
                            (n[p()(r)] = i);
                    }),
                    n
                );
            },
            v = n(192),
            h = n.n(v),
            g = n(196),
            m = n.n(g),
            b = n(341),
            _ = n.n(b),
            E = {
                button: function(e) {
                    return e.action.id ? ((e.id = e.action.id), m()(e, 'action.id'), e) : e;
                },
                input: function(e) {
                    return e.action && e.action.id
                        ? ((e.id = e.action.id), m()(e, 'action.id'), e)
                        : e;
                },
                list: function(e) {
                    var t = e.items.map(function(e) {
                        if (e.action) {
                            if (!e.action.id) return e;
                            (e.id = e.action.id), m()(e, 'action.id');
                        }
                        return e;
                    });
                    return (e.items = t), e;
                },
            };
        function O(e) {
            return e.components.map(function(e) {
                return (function(e) {
                    var t = _()({}, e);
                    return h()(E, e.type, function() {})(t), t;
                })(e);
            });
        }
        var S = n(208);
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
                return R;
            }),
            n.d(t, 'b', function() {
                return j;
            }),
            n.d(t, 'd', function() {
                return N;
            });
        var T = function(e) {
                return e ? Object(S.a)(e.toString()) : '';
            },
            I = function(e, t) {
                switch (e.type) {
                    case 'button':
                        return 'button-' + T(e.id);
                    case 'text':
                        return 'text-' + t + '-' + T(e.text);
                    case 'input':
                        return 'input-' + T(e.id);
                    case 'spacer':
                        return 'spacer-' + t;
                    case 'divider':
                        return 'divider-' + t;
                    case 'image':
                        return 'image-' + t + '-' + T(e.url);
                    case 'list':
                        return (
                            'list-' +
                            e.items
                                .map(function(e) {
                                    return T(e.id);
                                })
                                .join('-')
                        );
                    case 'dropdown':
                        return 'dropdown-' + T(e.id);
                    case 'single-select':
                        return 'single-select-' + T(e.id);
                    default:
                        return 'unknown-' + t;
                }
            },
            w = function(e) {
                return e.state ? { uri: e.uri, canvas: { id: '', content: e.state } } : e;
            },
            R = function(e) {
                var t = (function(e) {
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
                    i()(t, ['canvas', 'content'], function(e) {
                        return (function(e) {
                            return '0.1' === e.version ? e : { version: '0.1', components: O(e) };
                        })(c()(e));
                    }),
                    i()(t, ['canvas', 'content', 'components'], function(e) {
                        return e.map(f);
                    })
                );
            },
            A = function(e, t, n) {
                var r = [];
                return (
                    e.forEach(function(e) {
                        'list' === e.type ? r.push.apply(r, e.items) : r.push(e);
                    }),
                    r.find(function(e) {
                        return e[t] && (!n || e[t] === n);
                    })
                );
            },
            j = function(e, t, n) {
                return !!A(e, t, n);
            },
            N = function(e, t, n) {
                void 0 === n && (n = !0);
                var r = (function(e, t) {
                        return A(e, 'id', t);
                    })(t, e),
                    i = M(r, t);
                return i && r && r.type
                    ? 'button' === r.type || 'item' === r.type
                        ? a()(c()(t), i + '.loading', n, c.a)
                        : 'input' === r.type || 'dropdown' === r.type || 'single-select' === r.type
                        ? a()(c()(t), i + '.saveState', n ? 'saving' : 'unsaved', c.a)
                        : void 0
                    : t;
            },
            M = function e(t, n) {
                for (var r in n)
                    if (n.hasOwnProperty(r)) {
                        if (t === n[r]) return '[' + r + ']';
                        if (n[r] && 'object' == typeof n[r]) {
                            var i = e(t, n[r]);
                            if (i) return '[' + r + ']' + i;
                        }
                    }
            };
    },
    580: function(e, t, n) {
        'use strict';
        var r = n(44),
            i = n.n(r),
            o = n(300),
            a = n(215),
            s = n(52),
            c = n(756),
            u = n(292),
            d = n(20),
            l = n(213),
            p = n(757),
            f = n(823),
            v = n(7),
            h = n(72),
            g = function(e) {
                var t;
                return function() {
                    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
                        r[i] = arguments[i];
                    var o = function() {
                        return e.apply(void 0, r);
                    };
                    return (t = Promise.resolve(t).then(o, o));
                };
            },
            m = function(e, t, n, r) {
                var i = 0,
                    o = 0;
                return function() {
                    var a = h.b.now();
                    return (
                        a - o >= n && ((i = 0), (o = a)),
                        ++i <= t
                            ? e.apply(void 0, arguments)
                            : (Object(v.c)('rate_limiting.' + r),
                              Object(v.g)(
                                  'rate_limit_check_' + r,
                                  { rate_limited: !0, rate_limit_count: n },
                                  !0
                              ),
                              Promise.reject('rate_limited_update'))
                    );
                };
            },
            b = n(19),
            _ = n(145),
            E = n(40),
            O = function(e) {
                if ('rate_limited_update' === e) return null;
                try {
                    return e.errors || JSON.parse(e).errors;
                } catch (t) {
                    Object(E.a)(e), Object(_.c)(e);
                }
            },
            S = function(e) {
                var t = O(e);
                if (t) {
                    var n = t.find(function(e) {
                        return e.data;
                    });
                    if (n) {
                        var r = n.data;
                        return {
                            activeSubscription: r.active_subscription,
                            userHashVerified: r.user_hash_verified,
                            secureInstallV2: r.secure_install_v2,
                            messengerEnabledForVisitors: r.messenger_enabled_for_visitors,
                            messengerEnabledForUsers: r.messenger_enabled_for_users,
                        };
                    }
                }
            },
            y = function(e) {
                return e && e[0].code;
            },
            C = n(270),
            T = n(194),
            I = n(64),
            w = n(18),
            R =
                'https://docs.intercom.com/configure-intercom-for-your-product-or-site/staying-secure/enable-identity-verification-on-your-web-product',
            A = {
                IDENTITY_VERIFICATION_READY_WARNING:
                    'Intercom Messenger warning: Identity Verification is set up correctly but not enabled. For details on how to enable it, see ' +
                    R +
                    '.',
                IDENTITY_VERIFICATION_FAILURE_WITH_USER_ID_WARNING:
                    "Intercom Messenger warning: Your Identity Verification user_hash is invalid. Check that you are generating the user_hash with your user's user_id and your app's secret key. For more details, see " +
                    R +
                    '.',
                IDENTITY_VERIFICATION_FAILURE_WITH_EMAIL_WARNING:
                    "Intercom Messenger warning: Your Identity Verification user_hash is invalid. Check that you are generating the user_hash with your user's email and your app's secret key. For more details, see " +
                    R +
                    '.',
            };
        function j(e, t, n, r, i, o, a) {
            try {
                var s = e[o](a),
                    c = s.value;
            } catch (e) {
                return void n(e);
            }
            s.done ? t(c) : Promise.resolve(c).then(r, i);
        }
        n.d(t, 'b', function() {
            return P;
        }),
            n.d(t, 'a', function() {
                return x;
            }),
            n.d(t, 'f', function() {
                return G;
            }),
            n.d(t, 'e', function() {
                return V;
            }),
            n.d(t, 'd', function() {
                return F;
            });
        var N,
            M,
            U = (function(e, t) {
                var n;
                void 0 === t && (t = 6e4);
                var r = function() {
                        n = {};
                    },
                    i = function(e, n) {
                        return void 0 === n || e - n > t;
                    },
                    o = function() {
                        var t = e.apply(void 0, arguments),
                            r = n[t],
                            o = Date.now();
                        return !i(o, r) || ((n[t] = o), !1);
                    };
                return (o.reset = r), r(), o;
            })(function(e, t, n, r) {
                var i = e.email,
                    o = e.userId,
                    a = e.userHash,
                    s = e.anonymousId;
                return JSON.stringify(
                    Object.assign(
                        { encryptedPayload: r },
                        { url: t, email: i, userId: o, userHash: a, anonymousId: s },
                        n
                    )
                );
            }, 6e4);
        function P(e, t, n, r, h, g, m, _, R, A, P, x) {
            return (
                void 0 === _ && (_ = !1),
                void 0 === A && (A = 'unknown'),
                (function() {
                    var G,
                        V =
                            ((G = regeneratorRuntime.mark(function j(G, V) {
                                var F, B, q, Y, J, K, X, $, Z, ee, te, ne, re, ie, oe, ae, se, ce;
                                return regeneratorRuntime.wrap(
                                    function(j) {
                                        for (;;)
                                            switch ((j.prev = j.next)) {
                                                case 0:
                                                    if (
                                                        ((Y = V()),
                                                        (J = Y.app),
                                                        (K = Y.session),
                                                        (!N ||
                                                            (M !== n &&
                                                                J &&
                                                                J.features &&
                                                                J.features
                                                                    .singlePageAppRateLimiting)) &&
                                                            H(n),
                                                        (K = t || K).sessionId ||
                                                            (K.sessionId = I.a.generateUUID()),
                                                        G(D(K, n, r, h, g, m, P)),
                                                        _ || !U(K, n, r, R))
                                                    ) {
                                                        j.next = 7;
                                                        break;
                                                    }
                                                    return j.abrupt('return', null);
                                                case 7:
                                                    return (
                                                        (j.prev = 7),
                                                        (j.next = 10),
                                                        N(e, V, r, R, A, P)
                                                    );
                                                case 10:
                                                    (X = j.sent), (j.next = 26);
                                                    break;
                                                case 13:
                                                    if (
                                                        ((j.prev = 13),
                                                        (j.t0 = j.catch(7)),
                                                        ($ = O(j.t0)),
                                                        '403' !== y($) || !x)
                                                    ) {
                                                        j.next = 20;
                                                        break;
                                                    }
                                                    return (
                                                        Object(E.b)(
                                                            'This domain is not white-listed for the Intercom Messenger. Whitelist your domain here: https://app.intercom.com/a/apps/_/messenger'
                                                        ),
                                                        x(!0),
                                                        j.abrupt('return', null)
                                                    );
                                                case 20:
                                                    return (
                                                        $ &&
                                                            $.find(function(e) {
                                                                return (
                                                                    'App Not Found' === e.message
                                                                );
                                                            }) &&
                                                            Object(E.b)(
                                                                'The App ID in your code snippet is incorrect. Change it to your App ID found in settings to complete installation: http://app.intercom.com/a/apps/_/settings/web'
                                                            ),
                                                        (Z = Q(j.t0)),
                                                        G(L(j.t0, Z)),
                                                        (ee = S(j.t0)) && G(Object(f.c)(ee)),
                                                        j.abrupt('return', null)
                                                    );
                                                case 26:
                                                    if (
                                                        (Object(v.n)(X),
                                                        (ne = (te = X).errors),
                                                        (re = te.installModeConfig),
                                                        (ie = te.notificationLinkConversationId),
                                                        re && G(Object(f.c)(re)),
                                                        !ne)
                                                    ) {
                                                        j.next = 31;
                                                        break;
                                                    }
                                                    return j.abrupt('return', null);
                                                case 31:
                                                    return (
                                                        z(X, K, re),
                                                        W(X),
                                                        G(k(X)),
                                                        G(Object(a.e)(X.composerSuggestions)),
                                                        X.newConversationComposerState &&
                                                            G(
                                                                Object(d.q)(
                                                                    X.newConversationComposerState
                                                                )
                                                            ),
                                                        G(Object(T.b)()),
                                                        G(
                                                            Object(l.a)({
                                                                color: X.app.color,
                                                                secondaryColor:
                                                                    X.app.secondaryColor,
                                                            })
                                                        ),
                                                        ie && G(Object(s.c)(ie)),
                                                        X.unreadConversationIds.length > 0 &&
                                                            ((oe = V()),
                                                            Object(p.a)(oe, X.unreadConversationIds)
                                                                ? G(
                                                                      Object(d.l)(
                                                                          e,
                                                                          oe.app.conversationId
                                                                      )
                                                                  )
                                                                : G(
                                                                      Object(u.d)(
                                                                          e,
                                                                          'createOrUpdateUser'
                                                                      )
                                                                  )),
                                                        !Object(w.g)() &&
                                                            X.app.features.launcherDiscoveryMode &&
                                                            G(Object(o.e)()),
                                                        (ae = X.activeTour),
                                                        (se =
                                                            null ===
                                                                (F = Object(C.a)(
                                                                    null === (B = window) ||
                                                                        void 0 === B
                                                                        ? void 0
                                                                        : null === (q = B.parent) ||
                                                                          void 0 === q
                                                                        ? void 0
                                                                        : q.location
                                                                )) || void 0 === F
                                                                ? void 0
                                                                : F.product_tour_id),
                                                        i()(ae) ||
                                                            (i()(se)
                                                                ? G(Object(T.k)(ae))
                                                                : Object(b.d)(
                                                                      'Tour with id ' +
                                                                          ae.id +
                                                                          " received from ping won't start because there is a tourId in the query params"
                                                                  )),
                                                        (ce = X.banners),
                                                        i()(ce) || G(Object(c.b)(ce)),
                                                        j.abrupt('return', X)
                                                    );
                                                case 47:
                                                case 'end':
                                                    return j.stop();
                                            }
                                    },
                                    j,
                                    null,
                                    [[7, 13]]
                                );
                            })),
                            function() {
                                var e = this,
                                    t = arguments;
                                return new Promise(function(n, r) {
                                    var i = G.apply(e, t);
                                    function o(e) {
                                        j(i, n, r, o, a, 'next', e);
                                    }
                                    function a(e) {
                                        j(i, n, r, o, a, 'throw', e);
                                    }
                                    o(void 0);
                                });
                            });
                    return function(e, t) {
                        return V.apply(this, arguments);
                    };
                })()
            );
        }
        function D(e, t, n, r, i, o, a) {
            return {
                type: 'CREATE_OR_UPDATE_USER_REQUEST',
                session: e,
                url: t,
                customAttributes: n,
                launcherEnabledOverride: r,
                anonymousSessionDuration: i,
                customizationAttributes: o,
                internal: a,
            };
        }
        function k(e) {
            return { type: 'CREATE_OR_UPDATE_USER_SUCCESS', user: e };
        }
        function L(e, t) {
            return (
                void 0 === t && (t = !1),
                { type: 'CREATE_OR_UPDATE_USER_FAILURE', error: e, isIdentityVerificationError: t }
            );
        }
        function x(e) {
            return { type: 'ANONYMOUS_SESSION_CHANGED', anonymousSession: e };
        }
        function G() {
            return { type: 'USER_IS_PRESENT' };
        }
        function V() {
            return { type: 'USER_IS_ABSENT' };
        }
        function F(e, t, n) {
            return function(r, i) {
                var o = i().session;
                if (o)
                    return (
                        r({ type: 'CREATE_EVENT', name: t, boundEventMetadata: n }),
                        e.sendBeaconEvent(o, t).catch(function() {
                            return r({ type: 'CREATE_EVENT_FAILED' });
                        })
                    );
            };
        }
        function H(e) {
            B(30, 18e5, e);
        }
        function B(e, t, n) {
            (M = n),
                (N = (function(e, t, n, r) {
                    return g(m(e, t, n, r));
                })(
                    function(e, t, n, r, i, o) {
                        var a = t().session;
                        return e.createOrUpdateUser(a, n, void 0, r, i, o, Object(v.l)());
                    },
                    e,
                    t,
                    'user_update'
                ));
        }
        function W(e) {
            var t = e.cdasBreachingLimit;
            if (t.length) {
                var n = 1 === t.length ? 'attribute' : 'attributes',
                    r = t.join(', ');
                Object(E.b)(
                    'You have reached your CDA limit and we were not able to create or update the following ' +
                        n +
                        ': ' +
                        r +
                        '. For more details, see: https://www.intercom.com/help/configure-intercom/customize-intercom-to-be-about-your-users/send-custom-user-attributes-to-intercom'
                );
            }
        }
        function z(e, t, n) {
            void 0 === n && (n = {});
            var r = t.userHash,
                i = t.userId,
                o = t.email,
                a = n,
                s = a.secureInstallV2,
                c = a.secureInstallV3;
            if (s || c) {
                if (!i && !o) return;
            } else if (!r) return;
            var u = (function(e, t) {
                if (e.identityVerificationReady) return A.IDENTITY_VERIFICATION_READY_WARNING;
                if (!e.identityVerified && t.userId)
                    return A.IDENTITY_VERIFICATION_FAILURE_WITH_USER_ID_WARNING;
                if (!e.identityVerified && !t.userId)
                    return A.IDENTITY_VERIFICATION_FAILURE_WITH_EMAIL_WARNING;
                return null;
            })(e, t);
            u && Object(E.b)(u);
        }
        function Q(e) {
            var t = O(e);
            if (!t) return !1;
            var n = !1;
            return (
                t.forEach(function(e) {
                    -1 !== e.code.indexOf('identity_verification') &&
                        ((n = !0),
                        Object(E.a)(
                            'Intercom Messenger error: ' +
                                e.message +
                                ' For more details, see ' +
                                R +
                                '.'
                        ));
                }),
                n
            );
        }
        t.c = {
            createOrUpdateUser: P,
            createOrUpdateUserRequest: D,
            createOrUpdateUserSuccess: k,
            createOrUpdateUserFailure: L,
            destroySession: function(e) {
                return void 0 === e && (e = !0), { type: 'DESTROY_SESSION', clearCookies: e };
            },
            anonymousSessionChanged: x,
            userIsPresent: G,
            userIsAbsent: V,
            createEvent: function(e, t, n) {
                return function(r, i) {
                    var o = i().session;
                    if (o)
                        return (
                            r({ type: 'CREATE_EVENT', name: t, metadata: n }),
                            e.createEvent(o, t, n).catch(function() {
                                return r({ type: 'CREATE_EVENT_FAILED' });
                            })
                        );
                };
            },
            triggerBoundEvent: F,
            setupCreateOrUpdateUserRateLimiting: B,
            setupDefaultCreateOrUpdateUserRateLimiting: H,
            isDuplicateCreateOrUpdateUserRequest: U,
            checkCdasBreachingLimit: W,
            checkIdentityVerificationInstall: z,
            checkIdentityVerificationError: Q,
        };
    },
    581: function(e, t, n) {
        'use strict';
        n.d(t, 'b', function() {
            return v;
        });
        var r = n(73);
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
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? i(n, !0).forEach(function(t) {
                          a(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : i(n).forEach(function(t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        }
        function a(e, t, n) {
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
        var s,
            c,
            u,
            d,
            l,
            p =
                ((d = 'composer-suggestions-disabled-at'),
                (l =
                    null === (s = window) || void 0 === s
                        ? void 0
                        : null === (c = s.parent) || void 0 === c
                        ? void 0
                        : null === (u = c.intercomSettings) || void 0 === u
                        ? void 0
                        : u.app_id)
                    ? l + '-' + d
                    : d);
        var f,
            v = {
                loading: !1,
                isDismissed: ((f = parseInt(r.a.get(p))), (!!f && Date.now() - f < 2592e6) || !1),
                suggestions: [],
                prompt: [],
                priority: 0,
            };
        t.a = function(e, t) {
            switch ((void 0 === e && (e = v), t.type)) {
                case 'SET_COMPOSER_SUGGESTIONS':
                    var n = t.priority;
                    return n < e.priority
                        ? e
                        : t.composerSuggestions
                        ? o({}, e, {}, t.composerSuggestions, { priority: n, loading: !1 })
                        : o({}, v, { isDismissed: e.isDismissed, priority: n });
                case 'SET_COMPOSER_SUGGESTIONS_LOADING':
                    return o({}, e, { loading: t.loadingStatus });
                case 'SET_COMPOSER_SUGGESTIONS_DISMISSED':
                    return (
                        (function(e) {
                            r.a.set(p, e);
                        })(Date.now()),
                        o({}, e, { isDismissed: !0 })
                    );
                default:
                    return e;
            }
        };
    },
    582: function(e, t, n) {
        'use strict';
        var r = n(83),
            i = n.n(r),
            o = n(758),
            a = n(52),
            s = n(181),
            c = n(20),
            u = n(46);
        function d(e, t, n, r, i, o, a) {
            try {
                var s = e[o](a),
                    c = s.value;
            } catch (e) {
                return void n(e);
            }
            s.done ? t(c) : Promise.resolve(c).then(r, i);
        }
        var l = n(64),
            p = n(108),
            f = n.n(p);
        function v(e, t, n, r, i, o, a) {
            try {
                var s = e[o](a),
                    c = s.value;
            } catch (e) {
                return void n(e);
            }
            s.done ? t(c) : Promise.resolve(c).then(r, i);
        }
        function h(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise(function(r, i) {
                    var o = e.apply(t, n);
                    function a(e) {
                        v(o, r, i, a, s, 'next', e);
                    }
                    function s(e) {
                        v(o, r, i, a, s, 'throw', e);
                    }
                    a(void 0);
                });
            };
        }
        n.d(t, 'a', function() {
            return O;
        }),
            n.d(t, 'b', function() {
                return S;
            }),
            n.d(t, 'c', function() {
                return y;
            }),
            n.d(t, 'd', function() {
                return C;
            }),
            n.d(t, 'e', function() {
                return T;
            });
        var g = f()('intercom.actions.triggers'),
            m = { 'open-messenger-loading-view': a.h },
            b = {
                'show-conversation': function(e, t) {
                    return (function() {
                        var n,
                            r =
                                ((n = regeneratorRuntime.mark(function n(r, i) {
                                    return regeneratorRuntime.wrap(function(n) {
                                        for (;;)
                                            switch ((n.prev = n.next)) {
                                                case 0:
                                                    if ('conversation' === Object(u.d)(i())) {
                                                        n.next = 5;
                                                        break;
                                                    }
                                                    return (n.next = 4), r(Object(c.l)(e, t.id));
                                                case 4:
                                                    return n.abrupt(
                                                        'return',
                                                        r(Object(s.a)(t.id, !0))
                                                    );
                                                case 5:
                                                case 'end':
                                                    return n.stop();
                                            }
                                    }, n);
                                })),
                                function() {
                                    var e = this,
                                        t = arguments;
                                    return new Promise(function(r, i) {
                                        var o = n.apply(e, t);
                                        function a(e) {
                                            d(o, r, i, a, s, 'next', e);
                                        }
                                        function s(e) {
                                            d(o, r, i, a, s, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function(e, t) {
                            return r.apply(this, arguments);
                        };
                    })();
                },
            },
            _ = {};
        function E(e) {
            return { type: 'ACTIVATE_TRIGGER', triggerId: e };
        }
        function O(e, t) {
            return function(n) {
                n(
                    (function(e) {
                        return { type: 'ADD_TRIGGER', trigger: e };
                    })(e)
                ),
                    (function(e, t, n) {
                        try {
                            var r = e.selector,
                                o = e.event,
                                a = e.id,
                                s = window.parent.document.querySelector(r),
                                c = i()(
                                    function() {
                                        return (function(e, t, n) {
                                            t(y(e, n));
                                        })(a, t, n);
                                    },
                                    3e3,
                                    { leading: !0, trailing: !1 }
                                );
                            s.addEventListener(o, c),
                                (_[a] = c),
                                g('Attached ' + o + ' event handler to ' + r);
                        } catch (e) {
                            g('Couldnt attach the messenger trigger to the DOM due to e=' + e);
                        }
                    })(e, n, t);
            };
        }
        function S(e) {
            return function(t, n) {
                !(function(e, t) {
                    try {
                        var n = Object(o.c)(e)(t),
                            r = n.selector,
                            i = n.event;
                        window.parent.document.querySelector(r).removeEventListener(i, _[e]);
                    } catch (e) {
                        g("Couldn't detach the messenger trigger to the DOM due to e=" + e);
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
        function y(e, t) {
            return (function() {
                var n = h(
                    regeneratorRuntime.mark(function n(r, i) {
                        var a, s, u, d, p, f, v;
                        return regeneratorRuntime.wrap(
                            function(n) {
                                for (;;)
                                    switch ((n.prev = n.next)) {
                                        case 0:
                                            return (
                                                (n.prev = 0),
                                                (a = i()),
                                                (s = a.session),
                                                (u = Object(o.c)(e)),
                                                (d = u(a)),
                                                (p = Object(l.b)()),
                                                (f = { clientId: p, createdAt: new Date() }),
                                                r(E(e)),
                                                r(I(d)),
                                                r(Object(c.h)(f, !1)),
                                                (n.next = 12),
                                                t.fireTrigger(s, {
                                                    triggerId: String(e),
                                                    clientAssignedUUID: p,
                                                })
                                            );
                                        case 12:
                                            (v = n.sent),
                                                r(w(t, v)),
                                                r({ type: 'DEACTIVATE_TRIGGER' }),
                                                (n.next = 22);
                                            break;
                                        case 17:
                                            (n.prev = 17),
                                                (n.t0 = n.catch(0)),
                                                r({ type: 'ACTIVATE_TRIGGER_FAILED' }),
                                                r(Object(c.g)(null)),
                                                g(
                                                    'Couldnt fire messenger trigger due to e=' +
                                                        n.t0
                                                );
                                        case 22:
                                        case 'end':
                                            return n.stop();
                                    }
                            },
                            n,
                            null,
                            [[0, 17]]
                        );
                    })
                );
                return function(e, t) {
                    return n.apply(this, arguments);
                };
            })();
        }
        function C(e, t) {
            return (function() {
                var n = h(
                    regeneratorRuntime.mark(function n(r, i) {
                        var o, a, s;
                        return regeneratorRuntime.wrap(function(n) {
                            for (;;)
                                switch ((n.prev = n.next)) {
                                    case 0:
                                        return (
                                            (o = i()),
                                            (a = o.session),
                                            (n.next = 4),
                                            e.outboundPreview(a, t)
                                        );
                                    case 4:
                                        (s = n.sent), r(w(e, s));
                                    case 6:
                                    case 'end':
                                        return n.stop();
                                }
                        }, n);
                    })
                );
                return function(e, t) {
                    return n.apply(this, arguments);
                };
            })();
        }
        function T(e) {
            return function(t, n) {
                try {
                    var r = n();
                    t(y(Object(o.a)(r).id, e));
                } catch (e) {
                    g('Couldnt retry firing messenger trigger');
                }
            };
        }
        function I(e) {
            return function(t) {
                var n = m[e.preAction];
                if ('function' == typeof n) return t(n());
                throw 'Invalid PRE ACTION type for trigger=' + e.id;
            };
        }
        function w(e, t) {
            return function(n) {
                var r = t.action,
                    i = t.data,
                    o = b[r];
                if (o) return n(o(e, i));
                throw 'Invalid POST ACTION type for trigger_action=' + r;
            };
        }
    },
    6: function(e, t, n) {
        'use strict';
        var r = n(18);
        var i = function(e, t, n, r, i, o) {
                var a = new XMLHttpRequest();
                (a.onerror = function() {
                    return o();
                }),
                    (a.onabort = function() {
                        return o();
                    }),
                    (a.onload = function() {
                        var e = a.readyState,
                            t = a.status,
                            n = a.response;
                        4 === e && (t >= 200 && t < 300 ? i(n) : o(n));
                    }),
                    a.open(t, e, !0),
                    (a.withCredentials = !0),
                    Object.keys(n).forEach(function(e) {
                        a.setRequestHeader(e, n[e]);
                    }),
                    a.send(r);
            },
            o = r.a.hasXhr2Support(),
            a = function(e, t, n) {
                return new Promise(function(r, a) {
                    if (!o) throw new Error('Browser does not support XMLHttpRequest.');
                    i(e, 'POST', t, n, r, a);
                });
            };
        function s(e) {
            return Math.floor(4294967296 * (1 + e()))
                .toString(16)
                .substring(1);
        }
        var c = function(e) {
                return !!(
                    e &&
                    e.analytics &&
                    e.analytics.Integrations &&
                    e.analytics.Integrations.Intercom
                );
            },
            u = n(204);
        n.d(t, 'a', function() {
            return d;
        });
        function d(e, t, n, i, o, a, d) {
            var l, p, f, v, h, g, m, b;
            (i = Object(u.b)(
                i ||
                    (null === (l = window) || void 0 === l
                        ? void 0
                        : null === (p = l.parent) || void 0 === p
                        ? void 0
                        : null === (f = p.location) || void 0 === f
                        ? void 0
                        : f.href)
            )),
                (a = Object(u.b)(
                    a ||
                        (null === (v = window) || void 0 === v
                            ? void 0
                            : null === (h = v.parent) || void 0 === h
                            ? void 0
                            : null === (g = h.document) || void 0 === g
                            ? void 0
                            : g.referrer)
                )),
                r.a.isNativeMobile() && (i = void 0),
                (o = o || (void 0 === b && (b = Math.random), s(b) + s(b)));
            var _,
                E,
                O,
                S = e.appId,
                y = e.anonymousSession,
                C = e.sessionId,
                T = e.hostUserAgent,
                I = e.activeCompanyId,
                w = Object.assign(
                    (((m = {
                        app_id: S,
                        v: 3,
                        g: '4743a7c12ffe8f354f11128809ba6d0a34fd97cd',
                        s: C,
                        i: c(window.parent) ? 's' : '',
                        r: a,
                        platform: r.a.isMobileBrowser() ? 'mobile_web' : 'web',
                    })['Idempotency-Key'] = o),
                    (m.user_data = (function(e, t) {
                        var n = e.userId,
                            r = e.email,
                            i = e.userHash,
                            o = e.anonymousId,
                            a = Object.assign(
                                { email: r, user_id: n, user_hash: i, anonymous_id: o },
                                t
                            );
                        return JSON.stringify(a);
                    })(e, n)),
                    (m.internal = d ? JSON.stringify(d) : ''),
                    (m.page_title =
                        null === (_ = window) || void 0 === _
                            ? void 0
                            : null === (E = _.parent) || void 0 === E
                            ? void 0
                            : null === (O = E.document) || void 0 === O
                            ? void 0
                            : O.title),
                    (m.user_active_company_id = I),
                    m),
                    t,
                    { h: window.parent.document.hidden }
                );
            return (
                void 0 !== i && (w.referer = i),
                void 0 !== y && (w.anonymous_session = y),
                void 0 !== T && (w.host_user_agent = T),
                w
            );
        }
        function l(e) {
            var t = [];
            return (
                Object.keys(e).forEach(function(n) {
                    var r = e[n];
                    (n = encodeURIComponent(n)),
                        Array.isArray(r)
                            ? r.forEach(function(e) {
                                  return t.push(n + '[]=' + encodeURIComponent(e));
                              })
                            : t.push(n + '=' + encodeURIComponent(r));
                }),
                t.join('&')
            );
        }
        function p(e) {
            try {
                return JSON.parse(e);
            } catch (t) {
                return e;
            }
        }
        t.b = {
            buildBody: d,
            post: function(e) {
                var t = e.url,
                    n = e.session,
                    r = void 0 === n ? {} : n,
                    i = e.params,
                    o = void 0 === i ? {} : i,
                    s = e.customAttributes,
                    c = void 0 === s ? null : s,
                    u = e.currentUrl,
                    f = void 0 === u ? null : u,
                    v = e.idempotencyKey,
                    h = void 0 === v ? null : v,
                    g = e.referrer,
                    m = void 0 === g ? null : g,
                    b = e.internal,
                    _ = void 0 === b ? null : b;
                if (!r) return Promise.reject('http_post_session_empty');
                var E = d(r, o, c, f, h, m, _);
                return a(t, { 'Content-Type': 'application/x-www-form-urlencoded' }, l(E)).then(p);
            },
            sendBeacon: function(e, t, n, r, i, o, s, c) {
                var u, f, v;
                if (!t) return Promise.reject('http_post_session_empty');
                var h = d(t, n, r, i, o, s, c);
                if (
                    null === (u = window) || void 0 === u
                        ? void 0
                        : null === (f = u.parent) || void 0 === f
                        ? void 0
                        : null === (v = f.navigator) || void 0 === v
                        ? void 0
                        : v.sendBeacon
                ) {
                    return window.parent.navigator.sendBeacon(
                        e,
                        new Blob([l(h)], { type: 'application/x-www-form-urlencoded' })
                    )
                        ? Promise.resolve()
                        : Promise.reject();
                }
                return a(e, { 'Content-Type': 'application/x-www-form-urlencoded' }, l(h)).then(p);
            },
        };
    },
    604: function(e, t, n) {
        'use strict';
        n.d(t, 'c', function() {
            return h;
        }),
            n.d(t, 'd', function() {
                return m;
            }),
            n.d(t, 'a', function() {
                return b;
            }),
            n.d(t, 'b', function() {
                return E;
            });
        var r = n(83),
            i = n.n(r),
            o = n(16),
            a = n(20),
            s = n(64),
            c = n(129),
            u = n(7),
            d = n(144);
        function l(e, t, n, r, i, o, a) {
            try {
                var s = e[o](a),
                    c = s.value;
            } catch (e) {
                return void n(e);
            }
            s.done ? t(c) : Promise.resolve(c).then(r, i);
        }
        var p = 0,
            f = '',
            v = !1;
        function h(e, t) {
            return function(n, r) {
                var i = r(),
                    o = Object(d.a)(i).composerSuggestions;
                if (!o || !o.isDismissed) return (f = e), g(n, r, t);
            };
        }
        var g = i()(
            function e(t, n, r) {
                var i = ++p,
                    a = f,
                    s = n(),
                    c = s.session,
                    l = Object(d.a)(s).composerSuggestions;
                if (!l || !l.loading)
                    return (
                        (v = !1),
                        t(_(!0, r)),
                        Object(o.c)(c, a, 3).then(function(o) {
                            if ((t(_(!1, r)), t(b(o, r, i)), v && f !== a))
                                return g.cancel(), void e(t, n, r);
                            var s = Object.assign({}, { query: a, conversation_id: r }, o);
                            Object(u.e)(
                                'received',
                                'composer_smart_suggestions',
                                'messenger',
                                {},
                                s,
                                'm4_metric'
                            );
                        })
                    );
                v = !0;
            },
            150,
            { leading: !1, trailing: !0 }
        );
        function m(e, t, n, r, i, o) {
            return (
                void 0 === r && (r = !1),
                (function() {
                    var u,
                        d =
                            ((u = regeneratorRuntime.mark(function u(d, l) {
                                var p, f, v, h, g, m, _, E;
                                return regeneratorRuntime.wrap(
                                    function(u) {
                                        for (;;)
                                            switch ((u.prev = u.next)) {
                                                case 0:
                                                    if (
                                                        ((p = l()),
                                                        (f = (null == t ? void 0 : t.id) || null),
                                                        (v = p.session),
                                                        (h = Object(s.b)()),
                                                        (g = new Date()),
                                                        d(b(null, f)),
                                                        !f)
                                                    ) {
                                                        u.next = 20;
                                                        break;
                                                    }
                                                    return (
                                                        (m = {
                                                            conversationId: f,
                                                            clientId: h,
                                                            createdAt: g,
                                                            body: Object(c.c)(n.text),
                                                            composerSuggestionItem: n,
                                                        }),
                                                        (u.prev = 8),
                                                        d(Object(a.e)(f, m, r)),
                                                        (u.next = 12),
                                                        e.fireComposerSuggestion(v, {
                                                            conversationId: f,
                                                            suggestion: n,
                                                            clientId: h,
                                                        })
                                                    );
                                                case 12:
                                                    d(
                                                        Object(a.f)(
                                                            f,
                                                            m,
                                                            i,
                                                            t.lastParticipatingAdmin,
                                                            o,
                                                            !1,
                                                            g,
                                                            !0
                                                        )
                                                    ),
                                                        (u.next = 18);
                                                    break;
                                                case 15:
                                                    (u.prev = 15),
                                                        (u.t0 = u.catch(8)),
                                                        d(Object(a.d)(f, m, u.t0));
                                                case 18:
                                                    u.next = 32;
                                                    break;
                                                case 20:
                                                    return (
                                                        (_ = {
                                                            clientId: h,
                                                            body: Object(c.c)(n.text),
                                                            createdAt: g,
                                                            composerSuggestionItem: n,
                                                        }),
                                                        (u.prev = 21),
                                                        d(Object(a.h)(_, r)),
                                                        (u.next = 25),
                                                        e.fireComposerSuggestion(v, {
                                                            conversationId: f,
                                                            suggestion: n,
                                                            clientId: h,
                                                        })
                                                    );
                                                case 25:
                                                    (E = u.sent),
                                                        d(
                                                            Object(a.i)(
                                                                E,
                                                                null,
                                                                null,
                                                                g,
                                                                'resolution_bot_auto_suggest'
                                                            )
                                                        ),
                                                        (u.next = 32);
                                                    break;
                                                case 29:
                                                    (u.prev = 29),
                                                        (u.t1 = u.catch(21)),
                                                        d(Object(a.g)(null));
                                                case 32:
                                                case 'end':
                                                    return u.stop();
                                            }
                                    },
                                    u,
                                    null,
                                    [
                                        [8, 15],
                                        [21, 29],
                                    ]
                                );
                            })),
                            function() {
                                var e = this,
                                    t = arguments;
                                return new Promise(function(n, r) {
                                    var i = u.apply(e, t);
                                    function o(e) {
                                        l(i, n, r, o, a, 'next', e);
                                    }
                                    function a(e) {
                                        l(i, n, r, o, a, 'throw', e);
                                    }
                                    o(void 0);
                                });
                            });
                    return function(e, t) {
                        return d.apply(this, arguments);
                    };
                })()
            );
        }
        function b(e, t, n) {
            return (
                void 0 === n && (n = ++p),
                {
                    type: 'SET_COMPOSER_SUGGESTIONS',
                    conversationId: t,
                    composerSuggestions: e,
                    priority: n,
                }
            );
        }
        function _(e, t) {
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
    62: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return o;
        }),
            n.d(t, 'c', function() {
                return s;
            }),
            n.d(t, 'd', function() {
                return c;
            }),
            n.d(t, 'b', function() {
                return u;
            }),
            n.d(t, 'e', function() {
                return d;
            });
        var r = n(40),
            i = n(53),
            o = function(e, t, n) {
                return function(o, d) {
                    var l = d().messengerCards,
                        p = n && l && l[t.uri],
                        f = Object(i.c)(t);
                    if (
                        (o(s(f)),
                        p &&
                            a(p.card) &&
                            !f.canvas.content &&
                            (f.canvas = Object.assign({}, f.canvas, p.card.canvas)),
                        !f.canvas.content)
                    ) {
                        var v = d().session;
                        return e
                            .getMessengerCanvasWithContent(v, f.canvas.id, f.uri)
                            .then(function(e) {
                                o(c(f, e.content));
                            })
                            .catch(function(e) {
                                o(u(f)),
                                    Object(r.a)(
                                        'There was a problem retrieving the live card content: ' + e
                                    );
                            });
                    }
                    o(c(f, f.canvas.content));
                };
            },
            a = function(e) {
                return !(!e || !e.canvas);
            },
            s = function(e) {
                return { type: 'GET_CARD_CONTENT_REQUEST', card: e };
            },
            c = function(e, t) {
                return { type: 'GET_CARD_CONTENT_SUCCESS', card: e, content: t };
            },
            u = function(e) {
                return { type: 'GET_CARD_CONTENT_FAILURE', card: e };
            },
            d = function() {
                return { type: 'GET_CARD_VIEW_FAILURE' };
            };
    },
    64: function(e, t, n) {
        'use strict';
        n.d(t, 'b', function() {
            return r;
        });
        function r() {
            var e = new Date().getTime();
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(t) {
                var n = (e + 16 * Math.random()) % 16 | 0;
                return ('x' === t ? n : (3 & n) | 8).toString(16);
            });
        }
        t.a = { generateUUID: r };
    },
    65: function(e, t, n) {
        'use strict';
        n.d(t, 'k', function() {
            return o;
        }),
            n.d(t, 'c', function() {
                return a;
            }),
            n.d(t, 'i', function() {
                return s;
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
                return f;
            }),
            n.d(t, 'l', function() {
                return v;
            }),
            n.d(t, 'o', function() {
                return h;
            }),
            n.d(t, 'n', function() {
                return g;
            }),
            n.d(t, 'b', function() {
                return m;
            }),
            n.d(t, 'm', function() {
                return _;
            }),
            n.d(t, 'h', function() {
                return E;
            });
        var r = n(4),
            i = function(e) {
                return e.tour;
            },
            o =
                (Object(r.createSelector)(i, function(e) {
                    return e.isFetching;
                }),
                Object(r.createSelector)(i, function(e) {
                    return e.isFetched;
                })),
            a =
                (Object(r.createSelector)(i, function(e) {
                    return e.fetchingFailed;
                }),
                Object(r.createSelector)(i, function(e) {
                    return e.activeTour;
                })),
            s = Object(r.createSelector)(i, function(e) {
                return e.isPreviewing;
            }),
            c = Object(r.createSelector)(i, function(e) {
                return e.updateFailed;
            }),
            u = Object(r.createSelector)(i, function(e) {
                if (e.activeTour) return e.activeTour.author;
            }),
            d = Object(r.createSelector)(i, function(e) {
                return !(!e.activeTour || !e.activeTour.isCompleted);
            }),
            l = Object(r.createSelector)(i, function(e) {
                if (e.activeTour) return e.activeTour.steps.length;
            }),
            p = Object(r.createSelector)(i, function(e) {
                var t = e.activeTour;
                if (t)
                    return t.steps.findIndex(function(e) {
                        return e.id === t.activeStepId;
                    });
            }),
            f = Object(r.createSelector)(i, function(e) {
                var t = e.activeTour;
                if (t) {
                    var n = t.steps,
                        r = t.activeStepId;
                    if (t)
                        return n.find(function(e) {
                            return e.id === r;
                        });
                }
            }),
            v = Object(r.createSelector)(i, function(e) {
                var t = e.activeTour;
                if (t) {
                    var n = t.steps,
                        r = t.activeStepId,
                        i = n.findIndex(function(e) {
                            return e.id === r;
                        });
                    return n[i + 1];
                }
            }),
            h = Object(r.createSelector)(i, function(e) {
                return e.videoAudioMuted;
            }),
            g = Object(r.createSelector)(i, function(e) {
                return e.userHasInteractedWithVideo;
            }),
            m = Object(r.createSelector)(i, function(e) {
                var t = e.activeTour;
                if (t) return t.endTourAnimation;
            }),
            b = Object(r.createSelector)(p, l, function(e, t) {
                return e + 1 === t;
            }),
            _ = Object(r.createSelector)(m, b, function(e, t) {
                return 'confetti' === e && t;
            }),
            E = Object(r.createSelector)(i, function(e) {
                return e.isAwaitingProgress;
            });
    },
    66: function(e, t, n) {
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
    7: function(e, t, n) {
        'use strict';
        var r = n(64),
            i = n(134),
            o = n(16),
            a = n(110);
        function s(e, t) {
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
                    ? s(n, !0).forEach(function(t) {
                          u(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : s(n).forEach(function(t) {
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
            return E;
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
                return R;
            }),
            n.d(t, 'b', function() {
                return A;
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
                return P;
            }),
            n.d(t, 'k', function() {
                return D;
            }),
            n.d(t, 'g', function() {
                return L;
            }),
            n.d(t, 'e', function() {
                return G;
            });
        var d,
            l,
            p = 0,
            f = null,
            v = null,
            h = [],
            g = {},
            m = [],
            b = [],
            _ = [],
            E = function(e) {
                return (v = e);
            };
        function O(e, t) {
            return e.splice(0, Math.min(e.length, t));
        }
        function S(e) {
            if ((void 0 === e && (e = !1), !(p >= 5))) {
                var t = O(h, 100);
                if (m.length > 0 || t.length > 0) {
                    var n = O(b, 100),
                        r = O(_, 100),
                        i = O(m, 100);
                    e
                        ? o.b.createMetricsWithBeacon(d, t, n, r, i)
                        : o.b.createMetrics(d, t, n, r, i).catch(function() {
                              var e, o, a, s;
                              p++,
                                  (e = t),
                                  (o = n),
                                  (a = r),
                                  (s = i),
                                  Array.prototype.unshift.apply(h, e),
                                  Array.prototype.unshift.apply(b, o),
                                  Array.prototype.unshift.apply(_, a),
                                  Array.prototype.unshift.apply(m, s);
                          });
                }
            }
        }
        function y() {
            clearInterval(f), (f = null), S();
        }
        function C(e, t, n, r, i, o, a) {
            void 0 === o && (o = {}), void 0 === a && (a = 'm4_metric'), w(I(e, t, n, r, i, o, a));
        }
        function T() {
            return l;
        }
        function I(e, t, n, i, o, a, s) {
            void 0 === a && (a = {}), void 0 === s && (s = 'm4_metric');
            var u = e && e.id ? e.id : null,
                d = c({}, a, { version: '4743a7c12ffe8f354f11128809ba6d0a34fd97cd' });
            return {
                id: r.a.generateUUID(),
                name: s,
                created_at: Math.round(Date.now() / 1e3),
                metadata: Object.assign(
                    { user_id: u, action: t, object: n, place: i, context: o },
                    d
                ),
            };
        }
        function w(e) {
            h.push(e);
        }
        function R(e) {
            Object(a.c)() && b.push({ level: 'info', text: e });
        }
        function A(e) {
            Object(a.c)() && b.length < 30 && b.push({ level: 'error', text: e });
        }
        function j(e, t) {
            U({ name: e, type: 'inc' }, t);
        }
        function N(e, t, n) {
            U({ name: e, type: 'count', value: t }, n);
        }
        function M(e, t, n) {
            U({ name: e, type: 'timing', value: t }, n);
        }
        function U(e, t) {
            _.length > 50 || (t && (e.tags = t), _.push(e));
        }
        function P(e, t) {
            g[e] = { start: t };
        }
        function D(e) {
            g.hasOwnProperty(e) &&
                g[e].hasOwnProperty('start') &&
                (L(e, { duration: Date.now() - g[e].start }), delete g[e]);
        }
        function k(e, t) {
            return (
                void 0 === t && (t = {}),
                {
                    id: r.a.generateUUID(),
                    name: e,
                    createdAt: Date.now(),
                    screenWidth: screen.width,
                    screenHeight: screen.height,
                    additionalMetaData: t,
                    sessionId: d && d.sessionId,
                }
            );
        }
        function L(e, t, n) {
            void 0 === n && (n = !1);
            var r,
                o = (void 0 === (r = Object(i.a)() || Object(a.c)()) && (r = !1), r ? 1 : 20);
            (void 0 === l &&
                (l = (function(e) {
                    return void 0 === e && (e = 20), 1 === e || Math.random() < 1 / e;
                })(o)),
            l || n) && x(k(e, c({ sample_rate: n ? 1 : o }, t)));
        }
        function x(e) {
            m.length < 30 && m.push(e);
        }
        function G(e, t, n, r, i, o) {
            C(v, e, t, n, r, i, o);
        }
        t.j = {
            metrics: h,
            hcMetrics: m,
            logs: b,
            opMetrics: _,
            pushMetric: w,
            startMetricsPolling: function(e, t) {
                return (
                    (d = e),
                    null === f &&
                        (f = setInterval(function() {
                            return S();
                        }, 3e4)),
                    t.addEventListener('beforeunload', function() {
                        return S(!0);
                    }),
                    y
                );
            },
            buildAndAddMetric: C,
            buildAndAddHcMetric: L,
            buildMetric: I,
            buildHcMetric: k,
            addHcMetric: x,
            addInfoLog: R,
            addErrorLog: A,
            addIncrementOpMetric: j,
            addCountOpMetric: N,
            addTimingOpMetric: M,
            clearMetricsState: function() {
                for (var e in (h.splice(0), b.splice(0), _.splice(0), m.splice(0), m.splice(0), g))
                    delete g[e];
                p = 0;
            },
            getShouldSample: T,
            startTimingMetric: P,
            endTimingMetric: D,
        };
    },
    707: function(e, t, n) {
        var r = {
            './ar.json': [842, 11],
            './bg.json': [843, 12],
            './bs.json': [844, 13],
            './ca.json': [845, 14],
            './cs.json': [846, 15],
            './da.json': [847, 16],
            './de-form.json': [848, 17],
            './de.json': [849, 18],
            './el.json': [850, 19],
            './en.json': [332],
            './es.json': [851, 20],
            './et.json': [852, 21],
            './fi.json': [853, 22],
            './fr.json': [854, 23],
            './he.json': [855, 24],
            './hr.json': [856, 25],
            './hu.json': [857, 26],
            './id.json': [858, 27],
            './it.json': [859, 28],
            './ja.json': [860, 29],
            './ko.json': [861, 30],
            './lt.json': [862, 31],
            './lv.json': [863, 32],
            './mn.json': [864, 33],
            './nb.json': [865, 34],
            './nl.json': [866, 35],
            './package.json': [867, 36],
            './pl.json': [868, 37],
            './pt-BR.json': [869, 38],
            './pt.json': [870, 39],
            './ro.json': [871, 40],
            './ru.json': [872, 41],
            './sl.json': [873, 42],
            './sr.json': [874, 43],
            './sv.json': [875, 44],
            './tr.json': [876, 45],
            './vi.json': [877, 46],
            './zh-CN.json': [878, 47],
            './zh-TW.json': [879, 48],
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
            (i.id = 707),
            (e.exports = i);
    },
    72: function(e, t, n) {
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
                        var e = Date.now;
                        return 'function' == typeof e && !('prototype' in e);
                    })()
                        ? Date.now()
                        : new Date().getTime();
                },
                calculateDurationInMs: i,
            });
    },
    73: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return o;
        }),
            n.d(t, 'b', function() {
                return a;
            });
        var r = n(18),
            i = function(e) {
                return {
                    get: function(t) {
                        try {
                            return e.getItem('intercom.' + t);
                        } catch (e) {}
                    },
                    set: function(t, n) {
                        try {
                            return e.setItem('intercom.' + t, n || '');
                        } catch (e) {}
                    },
                    remove: function(t) {
                        try {
                            return e.removeItem('intercom.' + t);
                        } catch (e) {}
                    },
                    clear: function() {
                        try {
                            e.clear();
                        } catch (e) {}
                    },
                };
            },
            o = r.a.hasLocalStorageSupport()
                ? i(localStorage)
                : {
                      get: function() {},
                      set: function() {},
                      remove: function() {},
                      clear: function() {},
                  },
            a = r.a.hasSessionStorageSupport()
                ? i(sessionStorage)
                : {
                      get: function() {},
                      set: function() {},
                      remove: function() {},
                      clear: function() {},
                  };
    },
    74: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return i;
        }),
            n.d(t, 'c', function() {
                return o;
            }),
            n.d(t, 'b', function() {
                return a;
            }),
            n.d(t, 'd', function() {
                return u;
            });
        var r = [],
            i = function(e) {
                s(e);
                var t = document.createElement('meta');
                (t.id = 'intercom-viewport-meta'),
                    (t.name = 'viewport'),
                    (t.content =
                        'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'),
                    e.document.getElementsByTagName('head')[0].appendChild(t);
            },
            o = function(e) {
                var t = e.document.getElementById('intercom-viewport-meta');
                t && (t.parentNode.removeChild(t), c(e));
            },
            a = function(e) {
                return (
                    void 0 === e && (e = window.parent),
                    e.innerWidth <= 450 || (e.innerWidth <= 900 && e.innerHeight <= 450)
                );
            },
            s = function(e) {
                [].slice.call(e.document.getElementsByTagName('meta')).forEach(function(e) {
                    'viewport' === e.name && (r.push(e.cloneNode()), e.parentNode.removeChild(e));
                });
            },
            c = function(e) {
                for (var t = r.length, n = 0; n < t; n++)
                    e.document.getElementsByTagName('head')[0].appendChild(r.pop());
            },
            u = function() {
                try {
                    a() && !window.parent.navigator.standalone && window.parent.scrollTo(0, 0);
                } catch (e) {}
            };
    },
    748: function(e, t, n) {
        'use strict';
        var r = n(604),
            i = n(347),
            o = n(215),
            a = n(20),
            s = n(52),
            c = n(129),
            u = n(64);
        function d(e, t, n, r, i, o, d, l, p) {
            return (
                void 0 === i && (i = null),
                void 0 === o && (o = !1),
                void 0 === d && (d = !1),
                function(f, v) {
                    var h,
                        g = v(),
                        m = g.session,
                        b = g.borderless;
                    h = 'message' === n.partType ? null : n.id;
                    var _ = (function(e) {
                            if (e && e.clientId) return e.clientId;
                            return Object(u.b)();
                        })(i),
                        E = new Date(),
                        O = Object(c.c)(r.text),
                        S = {
                            conversationId: t,
                            clientId: _,
                            createdAt: E,
                            body: O,
                            selectedReplyOption: { replyOption: r, quickReplyPart: n },
                        };
                    return (
                        f(Object(a.e)(t, S, o)),
                        (b && b.conversationId) || f(Object(s.f)(t)),
                        e
                            .quickReply(m, t, h, r, _)
                            .then(function(e) {
                                f(Object(a.f)(t, e, d, l, p, !1, E));
                            })
                            .catch(function(e) {
                                f(Object(a.d)(t, S, e));
                            })
                    );
                }
            );
        }
        var l = n(7);
        function p(e, t, n, a, s, c, u) {
            return (
                void 0 === a && (a = !1),
                'messenger_suggested_content' === n.type
                    ? Object(r.d)(e, t, n, a, c, u)
                    : 'quick_reply' === n.type
                    ? (s.replyOptions &&
                          -1 ===
                              s.replyOptions
                                  .map(function(e) {
                                      return e.uuid;
                                  })
                                  .indexOf(n.uuid) &&
                          (Object(l.c)('quick_reply_uuid_mismatch'),
                          Object(l.g)('quick_reply_uuid_mismatch'),
                          Object(l.b)(
                              'quick_reply_uuid_mismatch partId=' + s.id + ' uuid=' + n.uuid
                          )),
                      d(e, t.id, s, n))
                    : 'predictive_answer' === n.type
                    ? Object(i.b)(e, n, a)
                    : Object(o.c)(e, n, a)
            );
        }
        n.d(t, 'a', function() {
            return p;
        });
    },
    749: function(e, t, n) {
        'use strict';
        n.d(t, 'c', function() {
            return i;
        }),
            n.d(t, 'd', function() {
                return a;
            }),
            n.d(t, 'b', function() {
                return s;
            }),
            n.d(t, 'a', function() {
                return c;
            });
        var r = n(292);
        function i(e, t) {
            return function(n, i) {
                var s = i().session;
                return (
                    n(o(s, t)),
                    e.createOrUpdateUser(s, null, t, 'updateUserSuppliedEmail').then(function(i) {
                        n(a(i, t)),
                            i.unreadConversationIds.length > 0 &&
                                n(Object(r.d)(e, 'updateUserSuppliedEmail'));
                    })
                );
            };
        }
        function o(e, t) {
            return { type: 'UPDATE_USER_SUPPLIED_EMAIL_REQUEST', session: e, userSuppliedEmail: t };
        }
        function a(e, t) {
            return { type: 'UPDATE_USER_SUPPLIED_EMAIL_SUCCESS', user: e, userSuppliedEmail: t };
        }
        function s(e, t) {
            return function(n, r) {
                var i = r().session;
                return (
                    n({ type: 'UPDATE_PHONE_NUMBER_REQUEST' }),
                    e
                        .updatePhoneNumber(i, t)
                        .then(function() {
                            n(
                                (function(e) {
                                    return { type: 'UPDATE_PHONE_NUMBER_SUCCESS', phoneNumber: e };
                                })(t)
                            );
                        })
                        .catch(function(e) {
                            var t;
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
    750: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return r;
        });
        var r = function(e) {
            return { type: 'DISMISS_POINTER_MESSAGE', conversationId: e };
        };
    },
    751: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return c;
        });
        var r = n(752),
            i = n.n(r),
            o = n(132),
            a = n.n(o),
            s = n(4),
            c = Object(s.createSelector)(
                function(e) {
                    return e.inboundSuggestions;
                },
                function(e) {
                    return e
                        ? e.previewSuggestions
                            ? e.previewSuggestions
                            : e.allSuggestions && e.allSuggestions.length > 0
                            ? i()(a()(e.allSuggestions, 'updatedAt', 'desc'))
                            : null
                        : null;
                }
            );
    },
    753: function(e, t, n) {
        'use strict';
        function r(e, t) {
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
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? r(n, !0).forEach(function(t) {
                          o(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : r(n).forEach(function(t) {
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
        var a = {
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
        t.a = function(e, t) {
            switch ((void 0 === e && (e = a), t.type)) {
                case 'START_NAVIGATION':
                    return i({}, e, { isNavigating: !0 });
                case 'FINISH_NAVIGATION':
                    return i({}, e, { isNavigating: !1 });
                case 'SET_PROXY_LOADED_STATUS':
                    return i({}, e, { isProxyLoaded: t.isLoaded });
                case 'OPEN_SHEET':
                    return i({}, e, {
                        url: t.url,
                        isOpen: !0,
                        sourceCard: { cardUri: t.cardUri, componentId: t.componentId },
                    });
                case 'OPEN_SHEET_WITH_TOKEN':
                    return i({}, e, {
                        url: t.url,
                        isOpen: !0,
                        sourceCard: { token: t.token, componentId: t.componentId },
                    });
                case 'CLOSE_SHEET':
                    return a;
                case 'SET_SHEET_TITLE':
                    return i({}, e, { sheetTitle: t.sheetTitle });
                case 'FETCH_MESSENGER_SHEET_DATA_REQUEST':
                    return i({}, e, { isSheetsDataLoading: !0 });
                case 'FETCH_MESSENGER_SHEET_DATA_SUCCESS':
                    return i({}, e, {
                        isSheetsDataLoading: !1,
                        isSheetsDataLoaded: !0,
                        data: t.data,
                    });
                case 'FETCH_MESSENGER_SHEET_DATA_FAILURE':
                    return i({}, e, { isSheetsDataLoading: !1 });
                default:
                    return e;
            }
        };
    },
    754: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return s;
        });
        var r = n(4),
            i = ['left', 'right'],
            o = function(e) {
                return Math.max(e || 20, 20);
            },
            a = function(e) {
                return (function(e) {
                    return i.indexOf(e) >= 0;
                })(e)
                    ? e
                    : 'right';
            },
            s = Object(r.createSelector)(
                function(e) {
                    return e.app;
                },
                function(e) {
                    return e.customizationOverrides;
                },
                function(e, t) {
                    void 0 === t && (t = {});
                    var n = e.alignment,
                        r = e.horizontalPadding,
                        i = e.verticalPadding,
                        s = e.color,
                        c = e.secondaryColor,
                        u = t,
                        d = u.alignment,
                        l = u.horizontalPadding,
                        p = u.verticalPadding,
                        f = u.color,
                        v = u.secondaryColor;
                    return {
                        alignment: a(d || n),
                        horizontalPadding: o(l || r),
                        verticalPadding: o(p || i),
                        color: f || s,
                        secondaryColor: v || c,
                    };
                }
            );
        t.b = s;
    },
    756: function(e, t, n) {
        'use strict';
        n.d(t, 'b', function() {
            return i;
        }),
            n.d(t, 'a', function() {
                return o;
            });
        var r = n(16);
        function i(e) {
            return { type: 'RECEIVE_BANNERS', banners: e };
        }
        function o(e) {
            return function(t, n) {
                var o = n().session;
                t({ type: 'DISMISS_BANNER' }), r.b.dismissBanner(o, e);
                var a = [],
                    s = n().banners,
                    c = Array.isArray(s),
                    u = 0;
                for (s = c ? s : s[Symbol.iterator](); ; ) {
                    var d;
                    if (c) {
                        if (u >= s.length) break;
                        d = s[u++];
                    } else {
                        if ((u = s.next()).done) break;
                        d = u.value;
                    }
                    var l = d;
                    l.banner_id !== e && a.push(l);
                }
                t(i(a));
            };
        }
    },
    757: function(e, t, n) {
        'use strict';
        n.d(t, 'b', function() {
            return a;
        }),
            n.d(t, 'a', function() {
                return s;
            });
        var r = n(20),
            i = n(292),
            o = n(46);
        function a(e) {
            return function(t, n) {
                t({ type: 'GET_UNREAD_CONVERSATIONS_REQUEST' });
                var o = n().session;
                return e
                    .getUnreadConversations(o)
                    .then(function(o) {
                        !(function(e, t, n, o) {
                            n(c(e));
                            var a = e.unreadConversationIds;
                            a.length > 0 && n(Object(i.d)(t, 'handleUnreadConversations'));
                            var u = o(),
                                d = u.app.conversationId;
                            s(u, a) && n(Object(r.l)(t, d));
                        })(o, e, t, n);
                    })
                    .catch(function() {});
            };
        }
        function s(e, t) {
            var n = e.app.conversationId;
            return 'conversation' === Object(o.d)(e) && -1 !== t.indexOf(n);
        }
        function c(e) {
            return { type: 'GET_UNREAD_CONVERSATIONS_SUCCESS', unreadConversations: e };
        }
    },
    758: function(e, t, n) {
        'use strict';
        n.d(t, 'b', function() {
            return s;
        }),
            n.d(t, 'c', function() {
                return c;
            }),
            n.d(t, 'a', function() {
                return u;
            });
        var r = n(4),
            i = function(e) {
                return e.triggers;
            },
            o = Object(r.createSelector)(i, function(e) {
                return e.triggers;
            }),
            a = Object(r.createSelector)(i, function(e) {
                return e.active;
            }),
            s = Object(r.createSelector)(i, function(e) {
                return e.failed;
            }),
            c = function(e) {
                return Object(r.createSelector)(o, function(t) {
                    var n = t[e];
                    if (n) return n;
                    throw new Error("Can't find the messenger trigger of id=" + e);
                });
            },
            u = Object(r.createSelector)(o, a, function(e, t) {
                var n = e[t];
                if (n) return n;
                throw new Error('No messenger trigger is active');
            });
    },
    823: function(e, t, n) {
        'use strict';
        n.d(t, 'c', function() {
            return i;
        }),
            n.d(t, 'a', function() {
                return o;
            }),
            n.d(t, 'b', function() {
                return a;
            });
        var r = n(16);
        function i(e) {
            return {
                type: 'OPEN_INSTALL_MODE',
                activeSubscription: e.activeSubscription,
                userHashVerified: e.userHashVerified,
                secureInstallV2: e.secureInstallV2,
                messengerEnabledForVisitors: e.messengerEnabledForVisitors,
                messengerEnabledForUsers: e.messengerEnabledForUsers,
            };
        }
        function o() {
            return { type: 'CLOSE_INSTALL_MODE' };
        }
        function a() {
            return function(e, t) {
                var n = t().session;
                return r.b.disableInstallMode(n).then(function() {
                    e({ type: 'CLOSE_INSTALL_MODE' });
                });
            };
        }
    },
    824: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return i;
        });
        var r = n(130),
            i = 376,
            o = function(e) {
                var t = e.isLauncherEnabled,
                    n = e.customization.verticalPadding;
                return t ? n + 60 + 20 : n;
            };
        t.b = function(e) {
            return (
                '\n  @keyframes intercom-lightweight-app-launcher {\n    from {\n      opacity: 0;\n      transform: scale(0.5);\n    }\n    to {\n      opacity: 1;\n      transform: scale(1);\n    }\n  }\n\n  @keyframes intercom-lightweight-app-gradient {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n\n  @keyframes intercom-lightweight-app-messenger {\n    from {\n      opacity: 0;\n      transform: translateY(20px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n\n  .intercom-lightweight-app {\n    position: fixed;\n    z-index: 2147483001;\n    width: 0;\n    height: 0;\n    font-family: intercom-font, "Helvetica Neue", "Apple Color Emoji", Helvetica, Arial, sans-serif;\n  }\n\n  .intercom-lightweight-app-gradient {\n    position: fixed;\n    z-index: 2147483002;\n    width: 500px;\n    height: 500px;\n    bottom: 0;\n    ' +
                e.customization.alignment +
                ': 0;\n    pointer-events: none;\n    background: radial-gradient(\n      ellipse at bottom ' +
                e.customization.alignment +
                ',\n      rgba(29, 39, 54, 0.16) 0%,\n      rgba(29, 39, 54, 0) 72%);\n    animation: intercom-lightweight-app-gradient 200ms ease-out;\n  }\n\n  .intercom-lightweight-app-launcher {\n    position: fixed;\n    z-index: 2147483003;\n    bottom: ' +
                ((a = (n = e).isMobile), (s = n.customization), a ? 20 : s.verticalPadding) +
                'px;\n    ' +
                e.customization.alignment +
                ': ' +
                (function(e) {
                    var t = e.isMobile,
                        n = e.customization;
                    return t ? 20 : n.horizontalPadding;
                })(e) +
                'px;\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n    background: ' +
                e.colors.primaryColor +
                ';\n    cursor: pointer;\n    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.06), 0 2px 32px 0 rgba(0, 0, 0, 0.16);\n    animation: intercom-lightweight-app-launcher 250ms ease;\n  }\n\n  .intercom-lightweight-app-launcher:focus {\n    outline: none;\n    ' +
                (e.accessibility.tabNavigation
                    ? 'box-shadow: inset 0 0 0 5px ' +
                      ((t = e.accessibility), r.a[t.accessibilityTheme]) +
                      ';'
                    : '') +
                '\n  }\n\n  .intercom-lightweight-app-launcher-icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 60px;\n    height: 60px;\n    transition: transform 100ms linear, opacity 80ms linear;\n  }\n\n  .intercom-lightweight-app-launcher-icon-open {\n    ' +
                (e.isMessengerOpen
                    ? '\n        opacity: 0;\n        transform: rotate(30deg) scale(0);\n      '
                    : '\n        opacity: 1;\n        transform: rotate(0deg) scale(1);\n      ') +
                '\n  }\n\n  .intercom-lightweight-app-launcher-icon-open svg {\n    width: 28px;\n    height: 32px;\n  }\n\n  .intercom-lightweight-app-launcher-icon-open svg path {\n    fill: ' +
                e.colors.buttonTextColor +
                ';\n  }\n\n  .intercom-lightweight-app-launcher-icon-self-serve {\n    ' +
                (e.isMessengerOpen
                    ? '\n        opacity: 0;\n        transform: rotate(30deg) scale(0);\n      '
                    : '\n        opacity: 1;\n        transform: rotate(0deg) scale(1);\n      ') +
                '\n  }\n\n  .intercom-lightweight-app-launcher-icon-self-serve svg {\n    height: 56px;\n  }\n\n  .intercom-lightweight-app-launcher-icon-self-serve svg path {\n    fill: ' +
                e.colors.buttonTextColor +
                ';\n  }\n\n  .intercom-lightweight-app-launcher-custom-icon-open {\n    max-height: 36px;\n    max-width: 36px;\n    ' +
                (e.isMessengerOpen
                    ? '\n        opacity: 0;\n        transform: rotate(30deg) scale(0);\n      '
                    : '\n        opacity: 1;\n        transform: rotate(0deg) scale(1);\n      ') +
                '\n  }\n\n  .intercom-lightweight-app-launcher-icon-minimize {\n    ' +
                (e.isMessengerOpen
                    ? '\n        opacity: 1;\n        transform: rotate(0deg) scale(1);\n      '
                    : '\n        opacity: 0;\n        transform: rotate(-60deg) scale(0);\n      ') +
                '\n  }\n\n  .intercom-lightweight-app-launcher-icon-minimize svg {\n    width: 16px;\n  }\n\n  .intercom-lightweight-app-launcher-icon-minimize svg path {\n    fill: ' +
                e.colors.buttonTextColor +
                ';\n  }\n\n  .intercom-lightweight-app-messenger {\n    position: fixed;\n    z-index: 2147483003;\n    overflow: hidden;\n    background-color: white;\n    animation: intercom-lightweight-app-messenger 250ms ease-out;\n    ' +
                (e.isMobile
                    ? '\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n      '
                    : '\n        width: ' +
                      i +
                      'px;\n        height: calc(100% - ' +
                      (20 + o(e)) +
                      'px);\n        max-height: 704px;\n        min-height: 250px;\n        ' +
                      e.customization.alignment +
                      ': ' +
                      e.customization.horizontalPadding +
                      'px;\n        bottom: ' +
                      o(e) +
                      'px;\n        box-shadow: 0 5px 40px rgba(0,0,0,0.16);\n        border-radius: 8px;\n      ') +
                '\n  }\n\n  .intercom-lightweight-app-messenger-header {\n    height: 75px;\n    background: linear-gradient(\n      135deg,\n      ' +
                e.colors.gradientStartColor +
                ' 0%,\n      ' +
                e.colors.gradientEndColor +
                ' 100%\n    );\n  }\n\n  @media print {\n    .intercom-lightweight-app {\n      display: none;\n    }\n  }\n'
            );
            var t, n, a, s;
        };
    },
    84: function(e, t, n) {
        'use strict';
        n.d(t, 'h', function() {
            return v;
        }),
            n.d(t, 'e', function() {
                return h;
            }),
            n.d(t, 'f', function() {
                return g;
            }),
            n.d(t, 'j', function() {
                return m;
            }),
            n.d(t, 'o', function() {
                return b;
            }),
            n.d(t, 'a', function() {
                return _;
            }),
            n.d(t, 'n', function() {
                return E;
            }),
            n.d(t, 'c', function() {
                return O;
            }),
            n.d(t, 'g', function() {
                return S;
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
                return R;
            }),
            n.d(t, 'b', function() {
                return A;
            }),
            n.d(t, 'i', function() {
                return j;
            });
        var r = n(44),
            i = n.n(r),
            o = n(18),
            a = n(40),
            s = n(7),
            c = !1,
            u = !1,
            d = 0,
            l = !1,
            p = !1,
            f = !1,
            v = function(e) {
                return !!e && !!e[0] && 'attachmentList' === e[0].type;
            },
            h = function(e) {
                if (e) return e.isActive ? 'active' : 'away';
            },
            g = function(e) {
                if (e && e.lastActiveAt) {
                    var t = new Date();
                    return Math.round((t.getTime() - e.lastActiveAt.getTime()) / 6e4);
                }
            },
            m = function(e) {
                return i()(e);
            },
            b = function(e) {
                c = e;
            },
            _ = function() {
                return c;
            },
            E = function(e) {
                u = e;
            },
            O = function() {
                return u;
            },
            S = function() {
                d += 1;
            },
            y = function() {
                return d;
            };
        function C(e, t) {
            try {
                var n = w(),
                    r = e.parts[e.parts.length - 1].author.isBot;
                if (n || !r || !t) return;
                Object(s.g)('timeToFirstBotResponse', { duration_ms: Date.now() - t }), I(!0);
            } catch (e) {
                Object(a.a)('Failure while recording trigger transition duration ' + e);
            }
        }
        function T(e, t, n) {
            try {
                var r = f,
                    i = e.parts[e.parts.length - 1].author.isBot;
                if (r || !i || !t || Math.abs(n - t) > 50) return void (f = !0);
                Object(s.g)('durationFromCreateConversationToOperatorReply', {
                    duration_ms: Date.now() - t,
                }),
                    (f = !0);
            } catch (e) {
                Object(a.a)('Failure while recording trigger transition duration ' + e);
            }
        }
        var I = function(e) {
                p = e;
            },
            w = function() {
                return p;
            },
            R = function(e) {
                l = e;
            },
            A = function() {
                return l;
            },
            j = function(e) {
                return !!e && o.a.messengerIsVisible();
            };
    },
    840: function(e, t, n) {
        'use strict';
        n.d(t, 'c', function() {
            return i;
        }),
            n.d(t, 'a', function() {
                return o;
            }),
            n.d(t, 'e', function() {
                return a;
            }),
            n.d(t, 'b', function() {
                return s;
            }),
            n.d(t, 'd', function() {
                return c;
            });
        var r = n(269);
        function i(e) {
            return { type: 'OPEN_BOUND_EVENT_CREATOR', stage: e.stage, eventData: e.eventData };
        }
        function o(e, t) {
            return Object(r.h)(e, t), { type: 'CHANGE_BOUND_EVENT_CREATOR_STAGE', newStage: t };
        }
        function a(e, t) {
            return Object(r.g)(e, t), { type: 'UPDATE_BOUND_EVENT_DATA', eventData: t };
        }
        function s(e) {
            return Object(r.d)(e), { type: 'CLOSE_BOUND_EVENT_CREATOR' };
        }
        function c(e, t) {
            return Object(r.e)(e, t), { type: 'SAVE_BOUND_EVENT', eventData: t };
        }
    },
    841: function(e, t, n) {
        'use strict';
        var r = n(268),
            i = n(25),
            o = n(4),
            a = Object(o.createSelector)(
                [
                    r.a,
                    function(e) {
                        return e.dismissedPointers;
                    },
                ],
                function(e, t) {
                    return e.filter(function(e) {
                        return !(e.read && t[e.id]) && Object(i.n)(e);
                    });
                }
            );
        t.a = Object(o.createSelector)(
            function(e) {
                return e.conversations.byId[e.pointerMessage.conversationId];
            },
            a,
            function(e, t) {
                return (
                    (n = t),
                    void 0 !== (r = e) &&
                    !(function(e, t) {
                        return (
                            void 0 !==
                            e.find(function(e) {
                                return e.id === t.id;
                            })
                        );
                    })(n, r) &&
                    Object(i.n)(r)
                        ? n.concat(r)
                        : n
                );
                var n, r;
            }
        );
    },
    85: function(e, t, n) {
        'use strict';
        n.d(t, 'b', function() {
            return r;
        }),
            n.d(t, 'a', function() {
                return i;
            });
        var r = 300,
            i = 'ease-in-out';
    },
    883: function(e, t, n) {
        var r = {
            './failed.mp3': 927,
            './notification.mp3': 928,
            './operator.mp3': 929,
            './submit.mp3': 930,
        };
        function i(e) {
            var t = o(e);
            return n(t);
        }
        function o(e) {
            if (!n.o(r, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw ((t.code = 'MODULE_NOT_FOUND'), t);
            }
            return r[e];
        }
        (i.keys = function() {
            return Object.keys(r);
        }),
            (i.resolve = o),
            (e.exports = i),
            (i.id = 883);
    },
    884: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
            return i;
        });
        var r = n(73),
            i = function() {
                return !!r.b.get('intercom-snippet__intersection-mode');
            };
    },
    921: function(e, t, n) {
        e.exports = n(922);
    },
    922: function(e, t, n) {
        'use strict';
        n.r(t);
        n(362),
            n(363),
            n(364),
            n(365),
            n(366),
            n(367),
            n(368),
            n(369),
            n(370),
            n(371),
            n(372),
            n(373),
            n(374),
            n(375),
            n(376),
            n(377),
            n(378),
            n(379),
            n(380),
            n(381),
            n(382),
            n(383),
            n(384),
            n(385),
            n(386),
            n(387),
            n(388),
            n(389),
            n(120),
            n(390),
            n(391),
            n(392),
            n(393),
            n(394),
            n(395),
            n(396),
            n(397),
            n(398),
            n(399),
            n(400),
            n(401),
            n(402),
            n(403),
            n(404),
            n(405),
            n(406),
            n(407),
            n(408),
            n(410),
            n(411),
            n(413),
            n(414),
            n(415),
            n(416),
            n(417),
            n(418),
            n(419),
            n(420),
            n(421),
            n(422),
            n(423),
            n(424),
            n(425),
            n(427),
            n(428),
            n(429),
            n(430),
            n(431),
            n(432),
            n(433),
            n(434),
            n(435),
            n(436),
            n(437),
            n(438),
            n(439),
            n(441),
            n(442),
            n(443),
            n(444),
            n(445),
            n(446),
            n(447),
            n(448),
            n(449),
            n(450),
            n(451),
            n(452),
            n(453),
            n(454),
            n(455),
            n(456),
            n(457),
            n(458),
            n(459),
            n(460),
            n(461),
            n(462),
            n(463),
            n(464),
            n(465),
            n(466),
            n(467),
            n(468),
            n(469),
            n(470),
            n(472),
            n(473),
            n(474),
            n(475),
            n(478),
            n(479),
            n(480),
            n(482),
            n(483),
            n(484),
            n(485),
            n(486),
            n(487),
            n(488),
            n(489),
            n(490),
            n(491),
            n(492),
            n(493),
            n(494),
            n(495),
            n(496),
            n(497),
            n(498),
            n(499),
            n(500),
            n(501),
            n(250),
            n(502),
            n(503),
            n(504),
            n(505),
            n(506),
            n(507),
            n(508),
            n(509),
            n(510),
            n(511),
            n(512),
            n(513),
            n(514),
            n(515),
            n(516),
            n(517),
            n(518),
            n(519),
            n(520),
            n(521),
            n(522),
            n(523),
            n(524),
            n(525),
            n(526),
            n(527),
            n(528),
            n(529),
            n(530),
            n(531),
            n(532),
            n(533),
            n(534),
            n(535),
            n(536),
            n(537),
            n(538),
            n(539),
            n(540),
            n(541),
            n(542),
            n(543),
            n(544),
            n(545),
            n(546),
            n(547),
            n(548),
            n(549),
            n(550),
            n(551),
            n(552),
            n(553),
            n(554),
            n(555),
            n(556),
            n(557),
            n(558),
            n(559),
            n(560),
            n(561),
            n(562),
            n(563),
            n(564),
            n(565),
            n(566),
            n(567),
            n(570),
            n(257),
            n(571);
        void 0 !== window &&
            void 0 !== window.Object &&
            (window.parent.__INTERCOM_REACT_DEV_TOOLS__ &&
                (window.__REACT_DEVTOOLS_GLOBAL_HOOK__ =
                    window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__),
            n(942));
    },
    927: function(e, t, n) {
        e.exports = n.p + 'audio/failed.4da3027c.mp3';
    },
    928: function(e, t, n) {
        e.exports = n.p + 'audio/notification.20576730.mp3';
    },
    929: function(e, t, n) {
        e.exports = n.p + 'audio/operator.2b750c4a.mp3';
    },
    930: function(e, t, n) {
        e.exports = n.p + 'audio/submit.3abafccd.mp3';
    },
    942: function(e, t, n) {
        'use strict';
        n.r(t);
        var r = n(209),
            i = n(337),
            o = n(46),
            a = n(74),
            s = n(286),
            c = n(182),
            u = n(280),
            d = n(84),
            l = n(215);
        var p = n(194),
            f = n(136),
            v = n(16),
            h = n(4),
            g = function(e) {
                return e.operator;
            },
            m = Object(h.createSelector)(g, function(e) {
                return e.lastComposerEvent;
            }),
            b = Object(h.createSelector)(g, function(e) {
                return e.clientsideMessageConditions;
            }),
            _ = (function() {
                function e(e) {
                    (this.chain = e), (this.matched = !1);
                }
                var t = e.prototype;
                return (
                    (t.trigger = function() {
                        this.triggering ||
                            ((this.triggering = !0),
                            (this.matched = !0),
                            this.chain.evaluate(),
                            (this.triggering = !1));
                    }),
                    (t.evaluate = function() {
                        return this.matched;
                    }),
                    (t.cancel = function() {}),
                    e
                );
            })();
        var E = (function(e) {
            var t, n;
            function r(t, n) {
                var r;
                return ((r = e.call(this, t) || this).predicates = n), r;
            }
            return (
                (n = e),
                ((t = r).prototype = Object.create(n.prototype)),
                (t.prototype.constructor = t),
                (t.__proto__ = n),
                (r.prototype.cancel = function() {
                    this.predicates.forEach(function(e) {
                        return e.cancel();
                    });
                }),
                r
            );
        })(_);
        var O = (function(e) {
            var t, n;
            function r() {
                return e.apply(this, arguments) || this;
            }
            return (
                (n = e),
                ((t = r).prototype = Object.create(n.prototype)),
                (t.prototype.constructor = t),
                (t.__proto__ = n),
                (r.prototype.evaluate = function() {
                    return this.predicates.every(function(e) {
                        return e.evaluate();
                    });
                }),
                r
            );
        })(E);
        var S = (function(e) {
            var t, n;
            function r(t, n) {
                var r;
                return (
                    ((r = e.call(this, t) || this).interval = n),
                    (r.timer = setTimeout(function() {
                        return r.trigger();
                    }, n)),
                    r
                );
            }
            return (
                (n = e),
                ((t = r).prototype = Object.create(n.prototype)),
                (t.prototype.constructor = t),
                (t.__proto__ = n),
                (r.prototype.cancel = function() {
                    clearTimeout(this.timer);
                }),
                r
            );
        })(_);
        var y = (function(e) {
            var t, n;
            function r(t, n, r) {
                var i;
                return (
                    ((i = e.call(this, t) || this).attribute = r),
                    (i.interval = n),
                    setTimeout(function() {
                        return i._createDeltaTimer();
                    }, 0),
                    i
                );
            }
            (n = e),
                ((t = r).prototype = Object.create(n.prototype)),
                (t.prototype.constructor = t),
                (t.__proto__ = n);
            var i = r.prototype;
            return (
                (i._createDeltaTimer = function() {
                    var e = this;
                    this.timer = setTimeout(function() {
                        e._evaluateDeltaPredicate() ? e.trigger() : e._createDeltaTimer();
                    }, this._getInterval());
                }),
                (i._getInterval = function() {
                    var e = this.getTimestamp();
                    if (!e) return this.interval;
                    var t = Date.now() - e;
                    return Math.max(100, this.interval - t);
                }),
                (i._evaluateDeltaPredicate = function() {
                    var e = this.getTimestamp();
                    return !!e && Date.now() - e > this.interval;
                }),
                (i.getTimestamp = function() {
                    return this.chain.getAttribute(this.attribute);
                }),
                (i.cancel = function() {
                    clearTimeout(this.timer);
                }),
                r
            );
        })(_);
        var C = (function(e) {
            var t, n;
            function r(t, n, r) {
                var i;
                return (
                    ((i = e.call(this, t) || this).missing = r || !1),
                    (i.interval = n),
                    (i.intervalTimer = setInterval(function() {
                        i._check();
                    }, n)),
                    i
                );
            }
            (n = e),
                ((t = r).prototype = Object.create(n.prototype)),
                (t.prototype.constructor = t),
                (t.__proto__ = n);
            var i = r.prototype;
            return (
                (i._check = function() {
                    this.check() ? this.trigger() : (this.matched = !1);
                }),
                (i.evaluate = function() {
                    return this._check(), this.matched;
                }),
                (i.cancel = function() {
                    clearInterval(this.intervalTimer);
                }),
                r
            );
        })(_);
        var T = (function(e) {
            var t, n;
            function r(t, n, r, i) {
                var o;
                return ((o = e.call(this, t, n, i) || this).attribute = r), o;
            }
            return (
                (n = e),
                ((t = r).prototype = Object.create(n.prototype)),
                (t.prototype.constructor = t),
                (t.__proto__ = n),
                (r.prototype.check = function() {
                    var e = this.chain.getAttribute(this.attribute);
                    return e ? Date.now() - e >= this.interval : this.missing;
                }),
                r
            );
        })(C);
        var I = (function(e) {
            var t, n;
            function r(t, n, r, i, o) {
                var a;
                return (
                    ((a = e.call(this, t, n) || this).attribute = r),
                    (a.value = i),
                    (a.other = o),
                    a
                );
            }
            return (
                (n = e),
                ((t = r).prototype = Object.create(n.prototype)),
                (t.prototype.constructor = t),
                (t.__proto__ = n),
                (r.prototype.check = function() {
                    return this.other
                        ? this.chain.getAttribute(this.other) ===
                              this.chain.getAttribute(this.attribute)
                        : this.value === this.chain.getAttribute(this.attribute);
                }),
                r
            );
        })(C);
        var w = (function(e) {
                var t, n;
                function r() {
                    return e.apply(this, arguments) || this;
                }
                return (
                    (n = e),
                    ((t = r).prototype = Object.create(n.prototype)),
                    (t.prototype.constructor = t),
                    (t.__proto__ = n),
                    (r.prototype.evaluate = function() {
                        return this.predicates.some(function(e) {
                            return e.evaluate();
                        });
                    }),
                    r
                );
            })(E),
            R = n(281),
            A = n.n(R),
            j = n(26);
        var N = (function(e) {
            var t, n;
            function r(t, n) {
                var r, i, o, a;
                return (
                    (r = e.call(this, t) || this),
                    (i = (function(e) {
                        if (void 0 === e)
                            throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                            );
                        return e;
                    })(r)),
                    (a = function() {
                        var e = r.document.querySelector(r.selector);
                        r.isNodeVisible(e) ? r.trigger() : (r.matched = !1);
                    }),
                    (o = '_check') in i
                        ? Object.defineProperty(i, o, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (i[o] = a),
                    (r.observer = new MutationObserver(A()(r._check, 200))),
                    (r.selector = n),
                    (r.document = window.parent.document),
                    r._initObserver(),
                    r
                );
            }
            (n = e),
                ((t = r).prototype = Object.create(n.prototype)),
                (t.prototype.constructor = t),
                (t.__proto__ = n);
            var i = r.prototype;
            return (
                (i._initObserver = function() {
                    this.observer.observe(this.document.body, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0,
                    });
                }),
                (i.evaluate = function() {
                    return this._check(), this.matched;
                }),
                (i.isNodeVisible = function(e) {
                    return e && Object(j.u)(e);
                }),
                (i.cancel = function() {
                    this.observer.disconnect();
                }),
                r
            );
        })(_);
        var M = (function(e) {
                var t, n;
                function r(t, n, r) {
                    var i, o, a, s;
                    return (
                        (i = e.call(this, t) || this),
                        (o = (function(e) {
                            if (void 0 === e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return e;
                        })(i)),
                        (s = function() {
                            return i.window.location.href.toLowerCase();
                        }),
                        (a = '_getURL') in o
                            ? Object.defineProperty(o, a, {
                                  value: s,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                              })
                            : (o[a] = s),
                        (i.window = window.parent),
                        (i.targetString = i._getURL()),
                        (i.comparison = n),
                        (i.candidateString = r.toLowerCase()),
                        setTimeout(function() {
                            return i.evaluate();
                        }, 0),
                        (i.interval = setInterval(function() {
                            return i.evaluate();
                        }, 1e3)),
                        i
                    );
                }
                (n = e),
                    ((t = r).prototype = Object.create(n.prototype)),
                    (t.prototype.constructor = t),
                    (t.__proto__ = n);
                var i = r.prototype;
                return (
                    (i.evaluate = function() {
                        return (
                            (this.targetString = this._getURL()),
                            this._check() ? this.trigger() : (this.matched = !1),
                            this.matched
                        );
                    }),
                    (i._check = function() {
                        switch (this.comparison) {
                            case 'regex':
                                return new RegExp(this.candidateString).test(this.targetString);
                            default:
                                return e.prototype._check.call(this);
                        }
                    }),
                    (i.cancel = function() {
                        clearInterval(this.interval);
                    }),
                    r
                );
            })(
                (function(e) {
                    var t, n;
                    function r(t, n, r, i) {
                        var o;
                        return (
                            ((o = e.call(this, t) || this).targetString = n),
                            (o.comparison = r),
                            (o.candidateString = i),
                            o
                        );
                    }
                    (n = e),
                        ((t = r).prototype = Object.create(n.prototype)),
                        (t.prototype.constructor = t),
                        (t.__proto__ = n);
                    var i = r.prototype;
                    return (
                        (i.evaluate = function() {
                            return (this.matched = this._check()), this.matched;
                        }),
                        (i._check = function() {
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
                                    return !(
                                        -1 !== this.targetString.indexOf(this.candidateString)
                                    );
                                case 'known':
                                    return !!this.targetString && '' !== this.targetString;
                                default:
                                    return !1;
                            }
                        }),
                        r
                    );
                })(_)
            ),
            U = n(18),
            P = (function() {
                function e(e, t) {
                    (this.condition = e),
                        (this.callback = t),
                        (this.root = new O(this, this.processSubpredicates(e.predicates)));
                }
                var t = e.prototype;
                return (
                    (t.evaluate = function() {
                        var e = this;
                        if (!this.evaluating) {
                            this.evaluating = !0;
                            var t = this.root.evaluate();
                            return (
                                t &&
                                    (this.cancel(),
                                    setTimeout(function() {
                                        return e.callback(e.condition);
                                    }, 0)),
                                (this.evaluating = !1),
                                t
                            );
                        }
                    }),
                    (t.cancel = function() {
                        this.root.cancel();
                    }),
                    (t.setContext = function(e) {
                        this.context = e;
                    }),
                    (t.getAttribute = function(e) {
                        if (this.context) return this.context[e];
                    }),
                    (t.processPredicate = function(e) {
                        switch (e.type) {
                            case 'or':
                                return new w(this, this.processSubpredicates(e.predicates));
                            case 'and':
                                return new O(this, this.processSubpredicates(e.predicates));
                            case 'eq':
                                return new I(
                                    this,
                                    this.parseInterval(e.interval),
                                    e.attribute,
                                    e.value,
                                    e.other
                                );
                            case 'string':
                                if ('client_attributes.last_visited_url' === e.attribute)
                                    return new M(this, e.comparison, e.value);
                            case 'duration_integer':
                                return new S(this, 1e3 * this.parseInterval(e.value));
                            case 'duration_integer_ms':
                                return new S(this, this.parseInterval(e.value));
                            case 'duration_delta':
                                return new y(this, this.parseInterval(e.value), e.attribute);
                            case 'duration_since':
                                return new T(
                                    this,
                                    this.parseInterval(e.value),
                                    e.attribute,
                                    e.missing
                                );
                            case 'css_selector':
                                if (!Object(U.g)()) return new N(this, e.value);
                        }
                    }),
                    (t.parseInterval = function(e) {
                        return parseInt(e, 10);
                    }),
                    (t.processSubpredicates = function(e) {
                        var t = this;
                        return e
                            ? e
                                  .map(function(e) {
                                      return t.processPredicate(e);
                                  })
                                  .filter(Boolean)
                            : [];
                    }),
                    e
                );
            })(),
            D = (function() {
                function e(e) {
                    (this.callback = e), (this.isStarted = !1), (this.context = {});
                }
                var t = e.prototype;
                return (
                    (t.start = function(e) {
                        this.isStarted && this.shutdown(),
                            (this.conditions = e),
                            this._setupPredicates(e),
                            (this.isStarted = !0);
                    }),
                    (t.shutdown = function() {
                        this.predicateChains &&
                            this.predicateChains.forEach(function(e) {
                                return e.cancel();
                            }),
                            (this.isStarted = !1);
                    }),
                    (t.setContext = function(e) {
                        this.predicateChains &&
                            this.predicateChains.forEach(function(t) {
                                return t.setContext(e);
                            });
                    }),
                    (t._setupPredicates = function(e) {
                        var t = this;
                        this.predicateChains = e.map(function(e) {
                            return new P(e, t.callback);
                        });
                    }),
                    e
                );
            })(),
            k = n(20),
            L = n(62),
            x = n(25);
        var G = Object(h.createStructuredSelector)({ clientsideMessageConditions: b });
        var V = function(e) {
                var t = new D(function(t) {
                    var n;
                    e.dispatch(
                        ((n = t),
                        function(e, t) {
                            var r = t().session;
                            return v.b.visitorAutoMessageConditionSatisfied(r, n).then(
                                function(t) {
                                    t &&
                                        (Object(x.s)(t).forEach(function(t) {
                                            return e(Object(L.a)(v.b, t, !1));
                                        }),
                                        e({
                                            type:
                                                'VISITOR_AUTO_MESSAGE_CONDITION_SATISFIED_SUCCESS',
                                        }),
                                        e(Object(k.m)(t, !1, Date.now())));
                                },
                                function() {
                                    return e({
                                        type: 'VISITOR_AUTO_MESSAGE_CONDITION_SATISFIED_ERROR',
                                    });
                                }
                            );
                        })
                    );
                });
                return function() {
                    var n = G(e.getState()).clientsideMessageConditions;
                    (function(e, t) {
                        if (!t) return !1;
                        if (!e && t) return !0;
                        if (e.length !== t.length) return !0;
                        var n = e.map(function(e) {
                                return e.id;
                            }),
                            r = t.map(function(e) {
                                return e.id;
                            });
                        return !n.every(function(e) {
                            return r.indexOf(e) >= 0;
                        });
                    })(t.conditions, n) && t.start(n);
                };
            },
            F = n(293),
            H = n(211);
        var B = n(50),
            W = n(7);
        function z(e) {
            return e.reduce(function(e, t) {
                return Object(x.m)(t) ? e : ((e[Object(x.g)(t)] = !0), e);
            }, {});
        }
        function Q(e, t) {
            var n =
                Object(H.a)(t).length > 0 &&
                (function(e, t) {
                    var n = t.notificationTypeOverrides.forceSnippet;
                    return e.filter(function(e) {
                        if (Object(x.m)(e)) return !1;
                        var t = e.id + '-' + Object(B.a)(e.parts).id;
                        return void 0 === n[t];
                    });
                })(e, t).length > 0;
            if (
                Object(U.g)() &&
                void 0 !==
                    e.find(function(e) {
                        return Object(x.i)(e);
                    })
            )
                return !0;
            var r = new Date();
            return (
                r.setDate(r.getDate() - 2),
                !((t.user ? new Date(t.user.lastContactedAt) : new Date()) < r) &&
                    (e.length > 1 || n)
            );
        }
        var q = function(e) {
                return function() {
                    var t = e.getState(),
                        n = z(Object(H.a)(t).slice(0, -3)),
                        r = Object(F.a)(t),
                        i = z(Q(r, t) ? r : []);
                    (Object.keys(n).length > 0 || Object.keys(i).length > 0) &&
                        e.dispatch({
                            type: 'UPDATE_NOTIFICATION_TYPE_OVERRIDES',
                            suppress: n,
                            forceSnippet: i,
                        }),
                        (function(e, t, n) {
                            if (Object.keys(e).length <= 1) return;
                            var r = t.filter(function(e) {
                                return !e.dismissed;
                            });
                            if (1 !== r.length || 'full' !== r[0].parts[0].notificationType) return;
                            Object(W.g)('fullMessageSuppressed', {
                                messageType: r[0].parts[0].messageType,
                                dismissedCount: t.length - r.length,
                                isLauncherEnabled: n.isLauncherEnabled,
                            });
                        })(i, r, t.launcher);
                };
            },
            Y = n(86),
            J = n(342),
            K = n.n(J);
        function X(e, t) {
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
        function $(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? X(n, !0).forEach(function(t) {
                          Z(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : X(n).forEach(function(t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        }
        function Z(e, t, n) {
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
        var ee = Object.assign,
            te = {
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
        function ne(e, t) {
            if (t === Object(o.c)(e)) return ee({}, e);
            var n = [].concat(e.viewStack, [t]);
            return ee({}, e, { viewStack: n });
        }
        function re(e) {
            return ee({}, e, { viewStack: e.viewStack.slice(0, -1) });
        }
        var ie = Object.assign,
            oe = { isLauncherEnabled: !1, launcherEnabledOverride: 'not-present' },
            ae = Object.assign,
            se = { isPresent: !1, homeScreenSlots: [] },
            ce = Object.assign,
            ue = {},
            de = {};
        function le(e, t) {
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
        function pe(e, t, n) {
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
        var fe = {},
            ve = Object.assign,
            he = {},
            ge = n(336),
            me = n.n(ge),
            be = n(192),
            _e = n.n(be),
            Ee = n(301),
            Oe = n.n(Ee),
            Se = function(e, t) {
                switch ((void 0 === e && (e = void 0), t.type)) {
                    case 'TRIGGER_TRANSITIONS_SUCCESS':
                    case 'CREATE_CONVERSATION_SUCCESS':
                    case 'GET_CONVERSATION_SUCCESS':
                        return Object.assign({}, e, {
                            attributes: e.attributes.map(function(e) {
                                return Object.assign({}, e, {
                                    saveState:
                                        Oe()(e.value) || '' === e.value ? 'unsaved' : 'saved',
                                });
                            }),
                        });
                    case 'UPDATE_CONVERSATION_FORM_REQUEST':
                        var n = t.identifier,
                            r = t.value;
                        return Object.assign({}, e, {
                            attributes: e.attributes.map(function(e) {
                                return e.identifier === n
                                    ? Object.assign({}, e, { value: r, saveState: 'saving' })
                                    : e;
                            }),
                        });
                    case 'UPDATE_CONVERSATION_FORM_SUCCESS':
                        return Object.assign({}, e, {
                            attributes: e.attributes.map(function(e) {
                                return e.identifier === t.identifier
                                    ? Object.assign({}, e, { saveState: 'saved' })
                                    : e;
                            }),
                        });
                    case 'UPDATE_CONVERSATION_FORM_FAILURE':
                        return Object.assign({}, e, {
                            attributes: e.attributes.map(function(e) {
                                return e.identifier === t.identifier
                                    ? Object.assign({}, e, { saveState: 'failed' })
                                    : e;
                            }),
                        });
                    default:
                        return e;
                }
            },
            ye = Object.assign;
        function Ce(e) {
            var t = e.createdAt,
                n = e.body,
                r = e.clientId,
                i = e.file,
                o = e.isMessage;
            return {
                body: n,
                createdAt: t,
                clientId: r,
                isMessage: o,
                file: i,
                selectedReplyOption: e.selectedReplyOption,
                composerSuggestionItem: e.composerSuggestionItem,
                partType: o ? 'message' : 'comment',
                eventData: {},
                saveState: 'saving',
                seenState: 'not-seen-yet',
                replyOptions: [],
                author: { isAdmin: !1, isSelf: !0 },
            };
        }
        var Te = function(e, t) {
                switch ((void 0 === e && (e = []), t.type)) {
                    case 'CREATE_CONVERSATION_REQUEST':
                        var n = t.part,
                            r = n.body,
                            i = n.createdAt,
                            o = n.file,
                            a = n.composerSuggestionItem,
                            s = n.clientId;
                        return t.isRetry
                            ? e.map(function(e) {
                                  return ye({}, e, { saveState: 'saving' });
                              })
                            : e.concat(
                                  Ce({
                                      createdAt: i,
                                      body: r,
                                      file: o,
                                      isMessage: !0,
                                      composerSuggestionItem: a,
                                      clientId: s,
                                  })
                              );
                    case 'CREATE_CONVERSATION_FAILURE':
                        return e.map(function(e) {
                            return ye({}, e, { saveState: 'failed', saveFailureReason: t.reason });
                        });
                    case 'CREATE_COMMENT_REQUEST':
                        var c = t.part,
                            u = c.body,
                            d = c.createdAt,
                            l = c.clientId,
                            p = c.file,
                            f = c.selectedReplyOption;
                        return t.isRetry
                            ? e.map(function(e) {
                                  return l === e.clientId ? ye({}, e, { saveState: 'saving' }) : e;
                              })
                            : e.concat(
                                  Ce({
                                      createdAt: d,
                                      body: u,
                                      clientId: l,
                                      file: p,
                                      isMessage: !1,
                                      selectedReplyOption: f,
                                  })
                              );
                    case 'CREATE_COMMENT_SUCCESS':
                        return e.map(function(e) {
                            return t.part.clientId === e.clientId
                                ? ye({}, e, t.part, { saveState: 'saved' })
                                : e;
                        });
                    case 'CREATE_COMMENT_FAILURE':
                        return e.map(function(e) {
                            return t.part.clientId === e.clientId
                                ? ye({}, e, { saveState: 'failed', saveFailureReason: t.reason })
                                : e;
                        });
                    case 'TRIGGER_TRANSITIONS_SUCCESS':
                    case 'GET_CONVERSATION_SUCCESS':
                    case 'CREATE_CONVERSATION_SUCCESS':
                        return t.conversation.parts.map(function(e) {
                            return e.form
                                ? ye({}, e, {
                                      form: Se(e.form, t),
                                      saveState: e.saveState || 'saved',
                                  })
                                : ye({}, e, { saveState: e.saveState || 'saved' });
                        });
                    case 'CREATE_REACTION_FAILURE':
                    case 'CREATE_REACTION_REQUEST':
                        return e.map(function(e) {
                            return e.reactionsReply
                                ? ye({}, e, {
                                      reactionsReply: {
                                          reactionIndex: t.reactionIndex,
                                          reactionSet: e.reactionsReply.reactionSet,
                                      },
                                  })
                                : e;
                        });
                    case 'CHANGE_CONVERSATION_RATING_INDEX':
                        return e.map(function(e) {
                            return 'conversationRating' === e.messageType
                                ? ye({}, e, { conversationRating: { chosenRating: t.ratingIndex } })
                                : e;
                        });
                    case 'ADD_CONVERSATION_RATING_REMARK':
                        return e.map(function(e) {
                            return 'conversationRating' === e.messageType
                                ? ye({}, e, {
                                      conversationRating: ye({}, e.conversationRating, {
                                          remark: t.remark,
                                          submitted: !0,
                                      }),
                                  })
                                : e;
                        });
                    case 'UPDATE_UPLOAD_PROGRESS':
                        return e.map(function(e) {
                            return t.part.clientId === e.clientId
                                ? ye({}, e, { body: [ye({}, e.body[0], { progress: t.progress })] })
                                : e;
                        });
                    case 'USER_CONTENT_SEEN_BY_ADMIN':
                    case 'ADMIN_IS_TYPING':
                        return e.map(function(e) {
                            return 'not-seen-yet' === e.seenState
                                ? ye({}, e, { seenState: 'seen' })
                                : e;
                        });
                    case 'UPDATE_CONVERSATION_FORM_REQUEST':
                    case 'UPDATE_CONVERSATION_FORM_SUCCESS':
                    case 'UPDATE_CONVERSATION_FORM_FAILURE':
                        return e.map(function(e) {
                            return e.id === t.partId ? ye({}, e, { form: Se(e.form, t) }) : e;
                        });
                    default:
                        return e;
                }
            },
            Ie = function(e, t) {
                switch ((void 0 === e && (e = {}), t.type)) {
                    case 'ADMIN_IS_TYPING':
                        var n = t.lastActiveAt,
                            r = t.firstName,
                            i = t.avatarUrl;
                        return {
                            id: t.adminId,
                            lastActiveAt: n,
                            firstName: r,
                            avatar: { square128: i },
                        };
                    default:
                        return e;
                }
            },
            we = n(581);
        function Re(e, t) {
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
        function Ae(e, t, n) {
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
        var je = Object.assign,
            Ne = {
                fetchState: 'partial',
                isFetching: !1,
                isUpdating: !1,
                read: !0,
                dismissed: !1,
                preventEndUserReplies: !1,
                parts: [],
                participants: [],
                isEmailAttributeCollectorInserted: !1,
                composerSuggestions: we.b,
            };
        function Me(e, t) {
            return void 0 !== e ? e : t;
        }
        var Ue = function(e, t) {
                switch ((void 0 === e && (e = Ne), t.type)) {
                    case 'GET_CONVERSATION_REQUEST':
                        var n = t.conversationId,
                            r = t.isUpdating;
                        return je({}, e, {
                            id: Me(e.id, n),
                            fetchState: Me(e.fetchState, 'partial'),
                            isFetching: !0,
                            isUpdating: r,
                            read: Me(e.read, !0),
                            dismissed: Me(e.dismissed, !1),
                            preventEndUserReplies: Me(e.preventEndUserReplies, !1),
                            parts: Me(e.parts, []),
                        });
                    case 'TRIGGER_TRANSITIONS_SUCCESS':
                    case 'GET_CONVERSATION_SUCCESS':
                        var i = t.conversation,
                            o = i.parts.some(function(e) {
                                return !e.author.isAdmin;
                            });
                        return (
                            (i.parts = Object(x.q)(i, e)),
                            (i.composerState = Object(x.p)(i, e)),
                            je({}, e, i, {
                                fetchState: 'all',
                                isFetching: !1,
                                isUpdating: !1,
                                userParticipated: o,
                                parts: Te(e.parts, t),
                            })
                        );
                    case 'UPDATE_CONVERSATION_FORM_FAILURE':
                    case 'UPDATE_CONVERSATION_FORM_SUCCESS':
                    case 'CREATE_CONVERSATION_SUCCESS':
                        var a = t.conversation;
                        return je({}, e, a, {
                            fetchState: 'all',
                            isFetching: !1,
                            isUpdating: !1,
                            userParticipated: !0,
                            parts: Te(e.parts, t),
                        });
                    case 'CONVERSATION_READ_ELSEWHERE':
                    case 'MARK_CONVERSATION_AS_READ_REQUEST':
                        return je({}, e, { read: !0 });
                    case 'DISMISS_NOTIFICATIONS_REQUEST':
                        return je({}, e, { dismissed: !0 });
                    case 'CREATE_COMMENT_SUCCESS':
                    case 'CREATE_COMMENT_REQUEST':
                        var s = t.part.createdAt;
                        return je({}, e, {
                            userParticipated: !0,
                            lastPartCreatedAt: s,
                            parts: Te(e.parts, t),
                        });
                    case 'UPDATE_CONVERSATION_FORM_REQUEST':
                    case 'CREATE_REACTION_REQUEST':
                    case 'CREATE_COMMENT_FAILURE':
                    case 'UPDATE_UPLOAD_PROGRESS':
                    case 'CHANGE_CONVERSATION_RATING_INDEX':
                    case 'ADD_CONVERSATION_RATING_REMARK':
                    case 'USER_CONTENT_SEEN_BY_ADMIN':
                        return je({}, e, { parts: Te(e.parts, t) });
                    case 'ADMIN_IS_TYPING':
                        return je({}, e, {
                            lastTypingAdmin: Ie(e.lastTypingAdmin, t),
                            parts: Te(e.parts, t),
                        });
                    case 'EMAIL_ATTRIBUTE_COLLECTOR_INSERTED':
                        return je({}, e, { isEmailAttributeCollectorInserted: !0 });
                    case 'SET_COMPOSER_SUGGESTIONS':
                    case 'SET_COMPOSER_SUGGESTIONS_DISMISSED':
                    case 'SET_COMPOSER_SUGGESTIONS_LOADING':
                        return null == t.conversationId
                            ? e
                            : (function(e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {};
                                      t % 2
                                          ? Re(n, !0).forEach(function(t) {
                                                Ae(e, t, n[t]);
                                            })
                                          : Object.getOwnPropertyDescriptors
                                          ? Object.defineProperties(
                                                e,
                                                Object.getOwnPropertyDescriptors(n)
                                            )
                                          : Re(n).forEach(function(t) {
                                                Object.defineProperty(
                                                    e,
                                                    t,
                                                    Object.getOwnPropertyDescriptor(n, t)
                                                );
                                            });
                                  }
                                  return e;
                              })({}, e, {
                                  composerSuggestions: Object(we.a)(e.composerSuggestions, t),
                              });
                    default:
                        return e;
                }
            },
            Pe = Object.assign,
            De = { isFetching: !1, pagesFetched: 0, scrollPosition: 0, byId: {} };
        function ke(e, t, n, r) {
            void 0 === e && (e = {});
            var i = e.fetchState;
            return Pe({}, e, { id: t, fetchState: i || 'partial', dismissed: n, read: r });
        }
        function Le(e, t) {
            switch ((void 0 === e && (e = {}), t.type)) {
                case 'CREATE_OR_UPDATE_USER_SUCCESS':
                case 'UPDATE_USER_SUPPLIED_EMAIL_SUCCESS':
                    var n = t.user,
                        r = n.unreadConversationIds,
                        i = n.unreadDismissedConversationIds,
                        o = {};
                    return (
                        i &&
                            i.forEach(function(t) {
                                return (o[t] = ke(e[t], t, !0, !1));
                            }),
                        r &&
                            r.forEach(function(t) {
                                return (o[t] = ke(e[t], t, !1, !1));
                            }),
                        Pe({}, e, o)
                    );
                case 'GET_UNREAD_CONVERSATIONS_SUCCESS':
                    var a = t.unreadConversations,
                        s = a.unreadConversationIds,
                        c = a.unreadDismissedConversationIds,
                        u = {};
                    return (
                        c.forEach(function(t) {
                            return (u[t] = ke(e[t], t, !0, !1));
                        }),
                        s.forEach(function(t) {
                            return (u[t] = ke(e[t], t, !1, !1));
                        }),
                        Pe({}, e, u)
                    );
                case 'GET_CONVERSATIONS_SUCCESS':
                case 'GET_HOME_SCREEN_CONVERSATIONS_SUCCESS':
                case 'GET_HOME_SCREEN_CARDS_SUCCESS':
                    var d = (t.conversations.conversations || t.conversations).reduce(function(
                        t,
                        n
                    ) {
                        var r = n.id;
                        return e[r] &&
                            'all' === e[r].fetchState &&
                            !(function(e, t, n) {
                                void 0 === t && (t = {}), void 0 === n && (n = {});
                                var r = _e()(t, [e, 'parts']),
                                    i = _e()(n, 'parts');
                                return me()(r).id !== me()(i).id;
                            })(r, e, n)
                            ? t
                            : ((t[r] = (function(e) {
                                  return (
                                      void 0 === e && (e = {}),
                                      Pe({}, e, {
                                          fetchState: 'summary',
                                          isFetching: !1,
                                          isUpdating: !1,
                                          parts: e.parts.map(function(e) {
                                              return Pe({}, e, { saveState: 'saved' });
                                          }),
                                      })
                                  );
                              })(n)),
                              t);
                    },
                    {});
                    return Pe({}, e, d);
                case 'UPDATE_CONVERSATION_FORM_SUCCESS':
                case 'CREATE_CONVERSATION_SUCCESS':
                case 'GET_CONVERSATION_SUCCESS':
                case 'TRIGGER_TRANSITIONS_SUCCESS':
                    var l,
                        p = t.conversation.id,
                        f = (((l = {})[p] = Ue(e[p], t)), l);
                    return Pe({}, e, f);
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
                case 'SET_COMPOSER_SUGGESTIONS_LOADING':
                    var v,
                        h = t.conversationId;
                    if (null == h) return e;
                    var g = (((v = {})[h] = Ue(e[h], t)), v);
                    return Pe({}, e, g);
                case 'ADMIN_IS_TYPING':
                case 'USER_CONTENT_SEEN_BY_ADMIN':
                    var m,
                        b = t.conversationId;
                    if (void 0 === e[b]) return e;
                    var _ = (((m = {})[b] = Ue(e[b], t)), m);
                    return Pe({}, e, _);
                case 'UPDATE_UPLOAD_PROGRESS':
                    var E,
                        O = t.conversationId;
                    if (void 0 === O) return e;
                    var S = (((E = {})[O] = Ue(e[O], t)), E);
                    return Pe({}, e, S);
                case 'DISMISS_NOTIFICATIONS_REQUEST':
                    var y = t.conversationIds.reduce(function(n, r) {
                        return (n[r] = Ue(e[r], t)), n;
                    }, {});
                    return Pe({}, e, y);
                case 'EMAIL_ATTRIBUTE_COLLECTOR_INSERTED':
                    var C,
                        T = t.conversationId;
                    if (void 0 === e[T]) return e;
                    var I = (((C = {})[T] = Ue(e[T], t)), C);
                    return Pe({}, e, I);
                default:
                    return e;
            }
        }
        function xe(e, t) {
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
        function Ge(e, t, n) {
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
        var Ve = Object.assign,
            Fe = {
                isFetching: !1,
                isUpdating: !1,
                fetchState: 'all',
                read: !0,
                intercomLinkSolution: 'live-chat',
                parts: [],
                participants: [],
                composerState: { visible: !0 },
                composerSuggestions: we.b,
            },
            He = {},
            Be = { suppress: {}, forceSnippet: {} },
            We = Object.assign,
            ze = { isSaving: !1, showErrorMessage: !1, errorMessage: null },
            Qe = Object.assign,
            qe = {
                isInstallModeOpen: !1,
                installModeConfig: {
                    activeSubscription: !1,
                    userHashVerified: !1,
                    secureInstallV2: !1,
                    messengerEnabledForVisitors: !0,
                    messengerEnabledForUsers: !0,
                },
            },
            Ye = Object.assign,
            Je = { isFetching: !1, gifs: [], fetchingFailed: !1, searchTerm: null },
            Ke = n(269),
            Xe = {
                eventData: {
                    selector: '',
                    eventTrigger: Ke.b.CLICK.key,
                    name: '',
                    sourceUrl: '',
                    urlRegex: '',
                },
                stage: Ke.a.CHOOSE_EVENT_TYPE,
            },
            $e = n(44),
            Ze = n.n($e),
            et = Object.assign,
            tt = {
                isLauncherDiscoveryModeEnabled: !1,
                isLauncherDiscoveryModeOpening: !1,
                isLauncherDiscoveryModeClosing: !1,
                hasDiscoveredLauncher: !1,
            };
        function nt(e) {
            var t = e.app,
                n = t.features,
                r = t.inboundConversationsDisabled,
                i = t.officeHoursResponse,
                o = e.clientsideMessageConditions,
                a = e.clientsideRulesetConditions,
                s = e.role;
            return (
                !!n.launcherDiscoveryMode &&
                !r &&
                !(!Ze()(o) || !Ze()(a)) &&
                !!Oe()(i) &&
                'visitor' === s
            );
        }
        var rt = n(111),
            it = n.n(rt),
            ot = n(87),
            at = n.n(ot),
            st = n(53);
        function ct(e, t) {
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
        function ut(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? ct(n, !0).forEach(function(t) {
                          dt(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : ct(n).forEach(function(t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
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
        var lt = {};
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
        function ft(e, t, n) {
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
        var vt = {
                userRole: null,
                isFetching: !1,
                isFetched: !1,
                isFailed: !1,
                cardUris: null,
                hasMoreConversations: !1,
            },
            ht = n(753);
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
        function mt(e) {
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
        var _t = {
            composerHasContent: !1,
            lastComposerEvent: 0,
            lastArticleClosedAt: null,
            conversationIdOfLastViewedArticle: null,
            clientsideMessageConditions: null,
            clientsideRulesetConditions: null,
            lastTriggerTransitionTimestamp: null,
            userCreatedConversationAt: null,
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
        function Ot(e, t, n) {
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
        var St = { isShown: !1, alertType: void 0, alertPayload: void 0 };
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
        function Ct(e, t, n) {
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
        var Tt = {};
        function It(e, t) {
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
        function wt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? It(n, !0).forEach(function(t) {
                          Rt(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : It(n).forEach(function(t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        }
        function Rt(e, t, n) {
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
        var At = {
            tabNavigation: !1,
            accessibilityTheme: 'default',
            secondaryAccessibilityTheme: 'light',
        };
        function jt(e, t) {
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
        function Nt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? jt(n, !0).forEach(function(t) {
                          Mt(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : jt(n).forEach(function(t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        }
        function Mt(e, t, n) {
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
        var Ut = {
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
        function Pt(e, t) {
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
        function Dt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? Pt(n, !0).forEach(function(t) {
                          kt(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : Pt(n).forEach(function(t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
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
        var Lt = { triggers: {}, active: null, failed: !1 },
            xt = n(284),
            Gt = n.n(xt),
            Vt = n(273),
            Ft = n.n(Vt);
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
        function Bt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? Ht(n, !0).forEach(function(t) {
                          Wt(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : Ht(n).forEach(function(t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        }
        function Wt(e, t, n) {
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
        var zt = {
                allSuggestions: [],
                isDismissed: !1,
                serverSideSuggestions: null,
                previewSuggestions: null,
            },
            Qt = [];
        function qt(e, t) {
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
        function Yt(e, t, n) {
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
        var Jt = { content: null };
        function Kt(e, t) {
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
        function Xt(e, t, n) {
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
        var $t = { composerSuggestions: null };
        function Zt(e, t) {
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
        function en(e, t, n) {
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
        var tn = { isActive: !1 };
        function nn(e, t) {
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
        function rn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? nn(n, !0).forEach(function(t) {
                          on(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : nn(n).forEach(function(t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        }
        function on(e, t, n) {
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
        var an = { type: null, metadata: {} },
            sn = Object(Y.combineReducers)({
                app: function(e, t) {
                    switch ((void 0 === e && (e = te), t.type)) {
                        case 'CREATE_OR_UPDATE_USER_REQUEST':
                            var n = t.customizationAttributes.cookieDomain;
                            return ee({}, e, {
                                bootFailed: !1,
                                isBooting: !e.isBooted,
                                cookieDomain: n,
                            });
                        case 'CREATE_OR_UPDATE_USER_SUCCESS':
                            var r = t.user.app,
                                i = r.activeAdmins,
                                a = r.alignment,
                                s = r.backgroundImage,
                                c = r.boundWebEvents,
                                u = r.color,
                                d = r.compactExpectedResponseDelay,
                                l = r.customGoogleAnalyticsTrackerId,
                                p = r.expectedResponseDelay,
                                f = r.expectedResponseDelayTranslationKey,
                                v = r.features,
                                h = r.helpCenterSiteUrl,
                                g = r.horizontalPadding,
                                m = r.inboundConversationsDisabled,
                                b = r.isAudioEnabled,
                                _ = r.isDeveloperWorkspace,
                                E = r.isErrorReportingDisabled,
                                O = r.isInstantBootEnabled,
                                S = r.isIntercomLinkEnabled,
                                y = r.isOverrideSamplingEnabled,
                                C = r.lastActiveAt,
                                T = r.launcherExpectedResponseDelayTranslationKey,
                                I = r.launcherLogoUrl,
                                w = r.logoUrl,
                                R = r.name,
                                A = r.officeHoursResponse,
                                j = r.originCookieDomain,
                                N = r.realtimeConfig,
                                M = r.secondaryColor,
                                U = r.selfServeSuggestionsMatch,
                                P = r.smsEnabled,
                                D = r.teamGreeting,
                                k = r.teamIntro,
                                L = r.temporaryExpectationsMessage,
                                x = r.upfrontEmailCollectionSetting,
                                G = r.userConversationAttachmentsEnabled,
                                V = r.userConversationGifsEnabled,
                                F = r.verticalPadding;
                            return ee({}, e, {
                                activeAdmins: i,
                                alignment: a,
                                backgroundImage: s,
                                bootFailed: !1,
                                boundWebEvents: c,
                                color: u,
                                compactExpectedResponseDelay: d,
                                customGoogleAnalyticsTrackerId: l,
                                expectedResponseDelay: p,
                                expectedResponseDelayTranslationKey: f,
                                features: v,
                                helpCenterSiteUrl: h,
                                horizontalPadding: g,
                                inboundConversationsDisabled: m,
                                isAudioEnabled: b,
                                isBooted: !0,
                                isBooting: !1,
                                isDeveloperWorkspace: _,
                                isErrorReportingDisabled: E,
                                isInstantBootEnabled: O,
                                isIntercomLinkEnabled: S,
                                isOverrideSamplingEnabled: y,
                                lastActiveAt: C,
                                launcherExpectedResponseDelayTranslationKey: T,
                                launcherLogoUrl: I,
                                logoUrl: w,
                                name: R,
                                officeHoursResponse: A,
                                originCookieDomain: j,
                                realtimeConfig: N,
                                secondaryColor: M,
                                selfServeSuggestionsMatch: U,
                                smsEnabled: P,
                                teamGreeting: D,
                                teamIntro: k,
                                temporaryExpectationsMessage: L,
                                userConversationAttachmentsEnabled: G,
                                userConversationGifsEnabled: V,
                                verticalPadding: F,
                                upfrontEmailCollection: $({}, e.upfrontEmailCollection, {
                                    upfrontEmailCollectionSetting: x,
                                }),
                            });
                        case 'CREATE_OR_UPDATE_USER_FAILURE':
                            return t.isIdentityVerificationError
                                ? ee({}, e, { bootFailed: !0, isBooting: !1, isBooted: !1 })
                                : ee({}, e, { bootFailed: e.isBooting });
                        case 'OPEN_MESSENGER':
                            return ee({}, e, {
                                isMessengerOpen: !0,
                                viewStack: Object(o.f)(e) ? ['home-screen'] : e.viewStack,
                            });
                        case 'CLOSE_MESSENGER':
                            return ee({}, e, { isMessengerOpen: !1 });
                        case 'SHOW_NEW_CONVERSATION':
                            return ee(ne(t.replaceCurrentView ? re(e) : e, 'new-conversation'), {
                                conversationId: null,
                            });
                        case 'SHOW_CONVERSATION':
                            return ee(ne(t.replaceCurrentView ? re(e) : e, 'conversation'), {
                                conversationId: t.conversationId,
                            });
                        case 'SHOW_CONVERSATIONS':
                            return t.resetNavigationHistory
                                ? ne(
                                      (function(e) {
                                          return ee({}, e, { viewStack: [] });
                                      })(e),
                                      'conversations'
                                  )
                                : ne(e, 'conversations');
                        case 'SHOW_EMPTY_SCREEN':
                            return ne(e, 'empty-screen');
                        case 'SHOW_MESSENGER_TRIGGER_SCREEN':
                            return ne(t.replaceCurrentView ? re(e) : e, 'messenger-trigger');
                        case 'SHOW_HOME_SCREEN':
                            return ne(e, 'home-screen');
                        case 'CREATE_CONVERSATION_SUCCESS':
                            return 'new-conversation' === Object(o.c)(e)
                                ? ee({}, ne(re(e), 'conversation'), {
                                      conversationId: t.conversation.id,
                                  })
                                : e;
                        case 'OPEN_BORDERLESS_CONVERSATION':
                            return ee({}, e, { conversationId: t.conversationId });
                        case 'REHYDRATE':
                            return ee({}, e, t.state.app, {
                                features: ee({}, e.features, t.state.app.features),
                            });
                        case 'OPEN_BOUND_EVENT_CREATOR':
                            return ee({}, e, { isBoundEventCreatorOpen: !0 });
                        case 'MESSENGER_NAVIGATE_BACK':
                            return re(e);
                        case 'TOGGLE_UPFRONT_EMAIL_COLLECTOR_STATE':
                            return ee({}, e, {
                                upfrontEmailCollection: $({}, e.upfrontEmailCollection, {
                                    upfrontEmailCollectorShowing: !e.upfrontEmailCollection
                                        .upfrontEmailCollectorShowing,
                                }),
                            });
                        case 'UPFRONT_EMAIL_COLLECTION_SUBMITTED':
                            return ee({}, e, {
                                upfrontEmailCollection: $({}, e.upfrontEmailCollection, {
                                    upfrontEmailCollectionSubmitted: !0,
                                }),
                            });
                        default:
                            return e;
                    }
                },
                launcher: function(e, t) {
                    switch ((void 0 === e && (e = oe), t.type)) {
                        case 'CREATE_OR_UPDATE_USER_REQUEST':
                            var n =
                                'not-present' === t.launcherEnabledOverride
                                    ? e.launcherEnabledOverride
                                    : t.launcherEnabledOverride;
                            return ie({}, e, { launcherEnabledOverride: n });
                        case 'CREATE_OR_UPDATE_USER_SUCCESS':
                            var r = t.user.app.isLauncherEnabled;
                            return ie({}, e, { isLauncherEnabled: r });
                        case 'CREATE_OR_UPDATE_USER_FAILURE':
                            return t.isIdentityVerificationError
                                ? ie({}, e, { isLauncherEnabled: !1 })
                                : e;
                        case 'REHYDRATE':
                            return ie({}, e, t.state.launcher);
                        default:
                            return e;
                    }
                },
                user: function(e, t) {
                    switch ((void 0 === e && (e = se), t.type)) {
                        case 'CREATE_OR_UPDATE_USER_REQUEST':
                            var n = t.url,
                                r = t.customAttributes,
                                i = t.anonymousSessionDuration,
                                o = t.activeCompanyId;
                            return ae({}, e, {
                                url: n,
                                customAttributes: r,
                                anonymousSessionDuration: i,
                                activeCompanyId: o,
                            });
                        case 'CREATE_OR_UPDATE_USER_SUCCESS':
                            var a = t.user,
                                s = a.id,
                                c = a.locale,
                                u = a.countryCode,
                                d = a.role,
                                l = a.name,
                                p = a.userSuppliedEmail,
                                f = a.unreadConversationIds,
                                v = a.unreadDismissedConversationIds,
                                h = a.notificationLinkConversationId,
                                g = a.phoneNumber,
                                m = a.articleConversationId,
                                b = a.homeScreenSlots,
                                _ = a.cdasBreachingLimit,
                                E = a.lastContactedAt,
                                O = t.user.hasConversations || f.length > 0 || v.length > 0;
                            return ae({}, e, {
                                id: s,
                                locale: c,
                                countryCode: u,
                                role: d,
                                name: l,
                                userSuppliedEmail: p,
                                hasConversations: O,
                                phoneNumber: g,
                                articleConversationId: m,
                                notificationLinkConversationId: h,
                                homeScreenSlots: b,
                                cdasBreachingLimit: _,
                                lastContactedAt: E,
                            });
                        case 'CREATE_CONVERSATION_REQUEST':
                        case 'VISITOR_AUTO_MESSAGE_CONDITION_SATISFIED_SUCCESS':
                        case 'GET_CONVERSATION_SUCCESS':
                            return ae({}, e, { hasConversations: !0 });
                        case 'GET_CONVERSATIONS_SUCCESS':
                            var S = t.conversations.conversations,
                                y = void 0 !== S && S.length > 0;
                            return ae({}, e, { hasConversations: y });
                        case 'UPDATE_USER_SUPPLIED_EMAIL_SUCCESS':
                            var C = t.userSuppliedEmail;
                            return ae({}, e, { userSuppliedEmail: C });
                        case 'UPDATE_PHONE_NUMBER_SUCCESS':
                            var T = t.phoneNumber;
                            return ae({}, e, { phoneNumber: T });
                        case 'USER_IS_PRESENT':
                            return ae({}, e, { isPresent: !0 });
                        case 'USER_IS_ABSENT':
                            return ae({}, e, { isPresent: !1 });
                        case 'REHYDRATE':
                            return ae({}, e, t.state.user);
                        default:
                            return e;
                    }
                },
                session: function(e, t) {
                    switch ((void 0 === e && (e = null), t.type)) {
                        case 'CREATE_OR_UPDATE_USER_REQUEST':
                            var n = t.session,
                                r = n.appId,
                                i = n.userId,
                                o = n.email,
                                a = n.userHash,
                                s = n.anonymousId,
                                c = n.anonymousSession,
                                u = n.sessionId;
                            return ce({}, e, {
                                appId: r,
                                userId: i,
                                email: o,
                                userHash: a,
                                anonymousId: s,
                                anonymousSession: c,
                                sessionId: u,
                            });
                        case 'CREATE_OR_UPDATE_USER_SUCCESS':
                            var d = t.user,
                                l = d.anonymousId,
                                p = d.anonymousSession,
                                f = d.activeCompanyId;
                            return ce({}, e, {
                                anonymousId: l || e.anonymousId,
                                anonymousSession: p || e.anonymousSession,
                                activeCompanyId: f,
                            });
                        case 'DESTROY_SESSION':
                            return null;
                        case 'ANONYMOUS_SESSION_CHANGED':
                            return ce({}, e, { anonymousSession: t.anonymousSession });
                        default:
                            return e;
                    }
                },
                openOnBoot: function(e, t) {
                    var n;
                    switch ((void 0 === e && (e = an), t.type)) {
                        case 'CLOSE_MESSENGER':
                        case 'MESSENGER_NAVIGATE_BACK':
                        case 'SHOW_HOME_SCREEN':
                            return rn({}, an);
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
                                var r = rn({}, e);
                                return {
                                    type: 'article',
                                    metadata: {
                                        url: t.url,
                                        cardUri: t.cardUri,
                                        componentId: t.componentId,
                                        previousState: r,
                                    },
                                };
                            }
                            return e;
                        case 'CLOSE_SHEET':
                            return (null === (n = e.metadata) || void 0 === n
                              ? void 0
                              : n.previousState)
                                ? rn({}, e.metadata.previousState)
                                : rn({}, an);
                        case 'REHYDRATE':
                            return rn({}, e, {}, t.state.openOnBoot);
                        default:
                            return e;
                    }
                },
                operator: function(e, t) {
                    switch ((void 0 === e && (e = _t), t.type)) {
                        case 'SHOW_NEW_CONVERSATION':
                        case 'SHOW_CONVERSATION':
                            return mt({}, e, {
                                lastArticleClosedAt: null,
                                conversationIdOfLastViewedArticle: null,
                            });
                        case 'COMPOSER_CONTENT_CHANGED':
                            return mt({}, e, {
                                lastComposerEvent: t.lastActiveAt.getTime(),
                                composerHasContent: '' !== t.composerContent,
                            });
                        case 'CREATE_CONVERSATION_REQUEST':
                            return mt({}, e, { userCreatedConversationAt: t.timestamp });
                        case 'OPEN_ARTICLE':
                            return mt({}, e, {
                                lastArticleClosedAt: null,
                                conversationIdOfLastViewedArticle: t.conversationId,
                            });
                        case 'CLOSE_ARTICLE':
                            return mt({}, e, { lastArticleClosedAt: t.closedAt });
                        case 'CREATE_OR_UPDATE_USER_SUCCESS':
                        case 'UPDATE_USER_SUPPLIED_EMAIL_SUCCESS':
                            return mt({}, e, {
                                clientsideMessageConditions: t.user.clientsideMessageConditions,
                                clientsideRulesetConditions: t.user.clientsideRulesetConditions,
                            });
                        case 'TRIGGER_TRANSITIONS_REQUEST':
                            return mt({}, e, {
                                lastTriggerTransitionTimestamp: t.payload.timestamp,
                            });
                        case 'REHYDRATE':
                            return mt({}, e, {}, t.state.operator);
                        default:
                            return e;
                    }
                },
                message: function(e, t) {
                    switch ((void 0 === e && (e = ue), t.type)) {
                        case 'OPEN_MESSAGE':
                            return { conversationId: t.conversationId, partId: t.partId };
                        case 'CLOSE_MESSAGE':
                            return ue;
                        default:
                            return e;
                    }
                },
                pointerMessage: function(e, t) {
                    switch ((void 0 === e && (e = de), t.type)) {
                        case 'OPEN_POINTER_MESSAGE':
                            return { conversationId: t.conversationId, partId: t.partId };
                        case 'CLOSE_POINTER_MESSAGE':
                            return de;
                        default:
                            return e;
                    }
                },
                dismissedPointers: function(e, t) {
                    switch ((void 0 === e && (e = fe), t.type)) {
                        case 'DISMISS_POINTER_MESSAGE':
                            var n;
                            return (function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                        ? le(n, !0).forEach(function(t) {
                                              pe(e, t, n[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(
                                              e,
                                              Object.getOwnPropertyDescriptors(n)
                                          )
                                        : le(n).forEach(function(t) {
                                              Object.defineProperty(
                                                  e,
                                                  t,
                                                  Object.getOwnPropertyDescriptor(n, t)
                                              );
                                          });
                                }
                                return e;
                            })({}, e, (((n = {})[t.conversationId] = !0), n));
                        default:
                            return e;
                    }
                },
                article: function(e, t) {
                    switch ((void 0 === e && (e = he), t.type)) {
                        case 'OPEN_ARTICLE':
                            return t.article;
                        case 'CLOSE_ARTICLE':
                            return he;
                        case 'CREATE_ARTICLE_REACTION_REQUEST':
                            var n = t.articleId,
                                r = t.reactionIndex;
                            return e.id !== n
                                ? e
                                : ve({}, e, {
                                      reactionsReply: ve({}, e.reactionsReply, {
                                          reactionIndex: r,
                                      }),
                                  });
                        default:
                            return e;
                    }
                },
                conversations: function(e, t) {
                    switch ((void 0 === e && (e = De), t.type)) {
                        case 'CREATE_OR_UPDATE_USER_SUCCESS':
                        case 'UPDATE_USER_SUPPLIED_EMAIL_SUCCESS':
                        case 'GET_UNREAD_CONVERSATIONS_SUCCESS':
                            return Pe({}, e, { byId: Le(e.byId, t) });
                        case 'GET_CONVERSATIONS_REQUEST':
                            return Pe({}, e, { isFetching: !0 });
                        case 'GET_CONVERSATIONS_SUCCESS':
                            var n = t.conversations.pages,
                                r = n.page,
                                i = n.totalPages;
                            return Pe({}, e, {
                                isFetching: !1,
                                pagesFetched: r,
                                totalPages: i,
                                byId: Le(e.byId, t),
                            });
                        case 'GET_CONVERSATIONS_FAILURE':
                            return Pe({}, e, { isFetching: !1 });
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
                            return Pe({}, e, { byId: Le(e.byId, t) });
                        case 'CONVERSATIONS_SCROLLED':
                            return Pe({}, e, { scrollPosition: t.scrollPosition });
                        case 'EMAIL_ATTRIBUTE_COLLECTOR_INSERTED':
                            return Pe({}, e, { byId: Le(e.byId, t) });
                        default:
                            return e;
                    }
                },
                newConversation: function(e, t) {
                    switch ((void 0 === e && (e = Fe), t.type)) {
                        case 'SHOW_NEW_CONVERSATION':
                            return Ve({}, e, { defaultMessage: t.defaultMessage });
                        case 'CREATE_CONVERSATION_REQUEST':
                        case 'CREATE_CONVERSATION_FAILURE':
                            return Ve({}, e, { userParticipated: !0, parts: Te(e.parts, t) });
                        case 'SET_NEW_CONVERSATION_COMPOSER_STATE':
                            return Ve({}, e, { composerState: t.composerState });
                        case 'CREATE_CONVERSATION_SUCCESS':
                            return Ve({}, Fe, { composerState: e.composerState });
                        case 'UPDATE_UPLOAD_PROGRESS':
                            return void 0 !== t.conversationId
                                ? e
                                : Ve({}, e, { parts: Te(e.parts, t) });
                        case 'SET_COMPOSER_SUGGESTIONS':
                        case 'SET_COMPOSER_SUGGESTIONS_DISMISSED':
                        case 'SET_COMPOSER_SUGGESTIONS_LOADING':
                            return (function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                        ? xe(n, !0).forEach(function(t) {
                                              Ge(e, t, n[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(
                                              e,
                                              Object.getOwnPropertyDescriptors(n)
                                          )
                                        : xe(n).forEach(function(t) {
                                              Object.defineProperty(
                                                  e,
                                                  t,
                                                  Object.getOwnPropertyDescriptor(n, t)
                                              );
                                          });
                                }
                                return e;
                            })({}, e, {
                                composerSuggestions: Object(we.a)(e.composerSuggestions, t),
                            });
                        default:
                            return e;
                    }
                },
                borderless: function(e, t) {
                    switch ((void 0 === e && (e = He), t.type)) {
                        case 'OPEN_BORDERLESS_CONVERSATION':
                            return Object.assign({}, e, { conversationId: t.conversationId });
                        case 'CLOSE_MESSAGE':
                            return He;
                        default:
                            return e;
                    }
                },
                notificationChannels: function(e, t) {
                    switch ((void 0 === e && (e = ze), t.type)) {
                        case 'UPDATE_USER_SUPPLIED_EMAIL_REQUEST':
                            return We({}, e, { isSaving: !0 });
                        case 'CREATE_OR_UPDATE_USER_SUCCESS':
                        case 'UPDATE_USER_SUPPLIED_EMAIL_SUCCESS':
                            return We({}, e, { isSaving: !1 });
                        case 'UPDATE_PHONE_NUMBER_REQUEST':
                            return We({}, e, {
                                isSaving: !0,
                                errorMessage: null,
                                showErrorMessage: !1,
                            });
                        case 'UPDATE_PHONE_NUMBER_SUCCESS':
                            return We({}, e, { phoneNumber: t.phoneNumber, isSaving: !1 });
                        case 'UPDATE_PHONE_NUMBER_FAILURE':
                            return We({}, e, {
                                errorMessage: t.message,
                                isSaving: !1,
                                showErrorMessage: !0,
                            });
                        case 'INPUT_VALUE_CHANGED':
                            return We({}, e, { errorMessage: null, showErrorMessage: !1 });
                        default:
                            return e;
                    }
                },
                notificationTypeOverrides: function(e, t) {
                    switch ((void 0 === e && (e = Be), t.type)) {
                        case 'UPDATE_NOTIFICATION_TYPE_OVERRIDES':
                            return Object.assign({}, e, {
                                suppress: Object.assign({}, e.suppress, t.suppress),
                                forceSnippet: Object.assign({}, e.forceSnippet, t.forceSnippet),
                            });
                        default:
                            return e;
                    }
                },
                install: function(e, t) {
                    switch ((void 0 === e && (e = qe), t.type)) {
                        case 'OPEN_INSTALL_MODE':
                            var n = t.activeSubscription,
                                r = t.userHashVerified,
                                i = t.secureInstallV2,
                                o = t.messengerEnabledForVisitors,
                                a = t.messengerEnabledForUsers;
                            return Qe({}, e, {
                                isInstallModeOpen: !0,
                                installModeConfig: {
                                    activeSubscription: n,
                                    userHashVerified: r,
                                    secureInstallV2: i,
                                    messengerEnabledForVisitors: o,
                                    messengerEnabledForUsers: a,
                                },
                            });
                        case 'CLOSE_INSTALL_MODE':
                            return Qe({}, e, { isInstallModeOpen: !1 });
                        default:
                            return e;
                    }
                },
                gifs: function(e, t) {
                    switch ((void 0 === e && (e = Je), t.type)) {
                        case 'SEARCH_GIFS_REQUEST':
                            var n = t.searchTerm;
                            return Ye({}, e, { isFetching: !0, fetchingFailed: !1, searchTerm: n });
                        case 'SEARCH_GIFS_SUCCESS':
                            var r = t.gifs,
                                i = t.searchTerm;
                            return i !== e.searchTerm
                                ? e
                                : Ye({}, e, {
                                      isFetching: !1,
                                      gifs: r,
                                      fetchingFailed: !1,
                                      searchTerm: i,
                                  });
                        case 'SEARCH_GIFS_FAILURE':
                            var o = t.searchTerm;
                            return o !== e.searchTerm
                                ? e
                                : Ye({}, e, { isFetching: !1, fetchingFailed: !0, searchTerm: o });
                        default:
                            return e;
                    }
                },
                boundEventCreator: function(e, t) {
                    switch ((void 0 === e && (e = Xe), t.type)) {
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
                            return Xe;
                        default:
                            return e;
                    }
                },
                launcherDiscoveryMode: function(e, t) {
                    void 0 === e && (e = tt);
                    var n = e.isLauncherDiscoveryModeEnabled;
                    switch (t.type) {
                        case 'CREATE_OR_UPDATE_USER_SUCCESS':
                            var r = t.user;
                            return et({}, e, { isLauncherDiscoveryModeEnabled: nt(r) });
                        case 'GET_CONVERSATIONS_REQUEST':
                            return et({}, e, {
                                isLauncherDiscoveryModeEnabled: !1,
                                hasDiscoveredLauncher: !0,
                            });
                        case 'OPEN_MESSENGER':
                            return et({}, e, {
                                hasDiscoveredLauncher: !0,
                                isLauncherDiscoveryModeEnabled: !1,
                            });
                        case 'OPEN_LAUNCHER_DISCOVERY_MODE':
                            return et({}, e, {
                                isLauncherDiscoveryModeOpening: n,
                                hasDiscoveredLauncher: !0,
                            });
                        case 'CLOSE_LAUNCHER_DISCOVERY_MODE':
                            return et({}, e, {
                                isLauncherDiscoveryModeOpening: !1,
                                isLauncherDiscoveryModeClosing: n,
                            });
                        case 'SHOW_NEW_CONVERSATION':
                        case 'OPENING_MESSENGER_FROM_LAUNCHER_DISCOVERY_MODE':
                            return et({}, e, {
                                isLauncherDiscoveryModeClosing: !1,
                                isLauncherDiscoveryModeOpening: !1,
                            });
                        case 'DISABLE_LAUNCHER_DISCOVERY_MODE':
                            return et({}, e, {
                                isLauncherDiscoveryModeEnabled: !1,
                                isLauncherDiscoveryModeClosing: !1,
                            });
                        case 'REHYDRATE':
                            var i = t.state.launcherDiscoveryMode;
                            return et({}, e, i);
                        default:
                            return e;
                    }
                },
                messengerCards: function(e, t) {
                    switch ((void 0 === e && (e = lt), t.type)) {
                        case 'SUBMIT_MESSENGER_CARD_ACTION_FAILURE':
                            var n = t.componentId,
                                r = ut({}, e);
                            return (
                                at()(r, t.cardUri + '.isFetching', !1),
                                it()(r, t.cardUri + '.card.canvas.content.components', function(e) {
                                    return Object(st.d)(n, e, !1);
                                })
                            );
                        case 'SUBMIT_MESSENGER_CARD_ACTION_SUCCESS':
                            var i = ut({}, e);
                            return (
                                at()(i, t.card.uri + '.isFetching', !1),
                                at()(i, t.card.uri + '.isFetched', !0),
                                at()(i, t.card.uri + '.partialCard', t.card)
                            );
                        case 'SUBMIT_MESSENGER_CARD_ACTION_REQUEST':
                            var o = t.componentId,
                                a = ut({}, e);
                            return (
                                at()(a, t.cardUri + '.isFetching', !0),
                                it()(a, t.cardUri + '.card.canvas.content.components', function(e) {
                                    return Object(st.d)(o, e, !0);
                                })
                            );
                        case 'GET_CARD_CONTENT_REQUEST':
                            var s = ut({}, e);
                            return at()(s, t.card.uri + '.isContentFetching', !0);
                        case 'GET_CARD_CONTENT_SUCCESS':
                            var c = ut({}, e);
                            return (
                                at()(c, t.card.uri + '.isFetching', !1),
                                at()(c, t.card.uri + '.isFetched', !0),
                                at()(c, t.card.uri + '.isContentFetched', !0),
                                at()(c, t.card.uri + '.isContentError', !1),
                                at()(c, t.card.uri + '.isContentFetching', !1),
                                at()(c, t.card.uri + '.card', t.card),
                                at()(c, t.card.uri + '.card.canvas.content', t.content),
                                it()(c, t.card.uri + '.card', st.e)
                            );
                        case 'GET_CARD_CONTENT_FAILURE':
                            var u = ut({}, e);
                            return (
                                at()(u, t.card.uri + '.isContentError', !0),
                                at()(u, t.card.uri + '.isContentFetching', !1),
                                at()(u, t.card.uri + '.partialCard', t.card)
                            );
                        default:
                            return e;
                    }
                },
                homeScreen: function(e, t) {
                    switch ((void 0 === e && (e = vt), t.type)) {
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
                        case 'CREATE_OR_UPDATE_USER_SUCCESS':
                            var n = t.user.role;
                            return n === e.userRole
                                ? e
                                : (function(e) {
                                      for (var t = 1; t < arguments.length; t++) {
                                          var n = null != arguments[t] ? arguments[t] : {};
                                          t % 2
                                              ? pt(n, !0).forEach(function(t) {
                                                    ft(e, t, n[t]);
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
                                  })({}, vt, { userRole: n });
                        default:
                            return e;
                    }
                },
                messengerSheet: ht.a,
                messengerAlerts: function(e, t) {
                    switch ((void 0 === e && (e = St), t.type)) {
                        case 'SHOW_ALERT':
                            return (function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                        ? Et(n, !0).forEach(function(t) {
                                              Ot(e, t, n[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(
                                              e,
                                              Object.getOwnPropertyDescriptors(n)
                                          )
                                        : Et(n).forEach(function(t) {
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
                            return St;
                        default:
                            return e;
                    }
                },
                customizationOverrides: function(e, t) {
                    switch ((void 0 === e && (e = Tt), t.type)) {
                        case 'CREATE_CUSTOMIZATION_OVERRIDE':
                            return (function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                        ? yt(n, !0).forEach(function(t) {
                                              Ct(e, t, n[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(
                                              e,
                                              Object.getOwnPropertyDescriptors(n)
                                          )
                                        : yt(n).forEach(function(t) {
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
                accessibility: function(e, t) {
                    switch ((void 0 === e && (e = At), t.type)) {
                        case 'SET_TAB_NAVIGATION':
                            return wt({}, e, { tabNavigation: t.tabNavigation });
                        case 'SET_ACCESSIBILITY_THEME':
                            return wt({}, e, {
                                accessibilityTheme: t.accessibilityTheme,
                                secondaryAccessibilityTheme: t.secondaryAccessibilityTheme,
                            });
                        default:
                            return e;
                    }
                },
                tour: function(e, t) {
                    switch ((void 0 === e && (e = Ut), t.type)) {
                        case 'FETCH_TOUR_REQUEST':
                            return Nt({}, e, { isFetching: !0, isFetched: !1, fetchingFailed: !1 });
                        case 'TOUR_UPDATE_FAILED':
                            return Nt({}, e, { updateFailed: !0 });
                        case 'FETCH_TOUR_SUCCESS':
                            return Nt({}, e, {
                                isFetching: !1,
                                isFetched: !0,
                                fetchingFailed: !1,
                                isPreviewing: t.isPreviewingTour,
                                activeTour: t.tour,
                            });
                        case 'FETCH_TOUR_FAILURE':
                            return Nt({}, e, { isFetching: !1, isFetched: !1, fetchingFailed: !0 });
                        case 'PROGRESS_TOUR':
                            return e.activeTour
                                ? Nt({}, e, {
                                      activeTour: Nt({}, e.activeTour, {
                                          activeStepId: t.activeStepId,
                                      }),
                                  })
                                : Nt({}, e);
                        case 'START_TOUR_PREVIEW':
                            return Nt({}, e, {
                                isFetched: !0,
                                isPreviewing: !0,
                                activeTour: t.tour,
                            });
                        case 'STOP_TOUR_PREVIEW':
                            return Nt({}, e, {
                                isFetched: !1,
                                isPreviewing: !1,
                                activeTour: void 0,
                            });
                        case 'COMPLETE_TOUR':
                        case 'STOP_TOUR':
                            return Ut;
                        case 'MARK_ACTIVE_TOUR_AS_COMPLETED':
                            return e.activeTour
                                ? Nt({}, e, {
                                      activeTour: Nt({}, e.activeTour, { isCompleted: !0 }),
                                  })
                                : Nt({}, e);
                        case 'CHANGE_VIDEO_MUTED':
                            return Nt({}, e, {
                                videoAudioMuted: t.muted,
                                userHasInteractedWithVideo: !0,
                            });
                        case 'PROGRESS_TOUR_REQUEST_STARTED':
                            return Nt({}, e, { isAwaitingProgress: !0 });
                        case 'PROGRESS_TOUR_REQUEST_FINISHED':
                            return Nt({}, e, { isAwaitingProgress: !1 });
                        default:
                            return e;
                    }
                },
                triggers: function(e, t) {
                    void 0 === e && (e = Lt);
                    var n = Dt({}, e.triggers);
                    switch (t.type) {
                        case 'ADD_TRIGGER':
                            return (n[t.trigger.id] = t.trigger), Dt({}, e, { triggers: n });
                        case 'REMOVE_TRIGGER':
                            return delete n[t.triggerId], Dt({}, e, { triggers: n });
                        case 'ACTIVATE_TRIGGER':
                            return Dt({}, e, { active: t.triggerId, failed: !1 });
                        case 'DEACTIVATE_TRIGGER':
                            return Dt({}, e, { active: null });
                        case 'ACTIVATE_TRIGGER_FAILED':
                            return Dt({}, e, { failed: !0 });
                        default:
                            return e;
                    }
                },
                inboundSuggestions: function(e, t) {
                    switch ((void 0 === e && (e = zt), t.type)) {
                        case 'ADD_INBOUND_SUGGESTIONS':
                            return Bt({}, e, {
                                allSuggestions: [].concat(e.allSuggestions, [
                                    t.composerSuggestions,
                                ]),
                            });
                        case 'REMOVE_INBOUND_SUGGESTIONS':
                            return Bt({}, e, {
                                allSuggestions: Ft()(e.allSuggestions, function(e) {
                                    return e.rulesetId !== t.rulesetId;
                                }),
                            });
                        case 'UPDATE_SERVER_SIDE_INBOUND_SUGGESTIONS':
                            var n = e.allSuggestions;
                            return (
                                e.serverSideSuggestions &&
                                    (n = Ft()(n, function(t) {
                                        return (
                                            e.serverSideSuggestions &&
                                            t.rulesetId !== e.serverSideSuggestions.rulesetId
                                        );
                                    })),
                                t.composerSuggestions &&
                                    (n = Gt()([].concat(n, [t.composerSuggestions]), 'rulesetId')),
                                Bt({}, e, {
                                    allSuggestions: n,
                                    serverSideSuggestions: t.composerSuggestions,
                                })
                            );
                        case 'UPDATE_PREVIEW_INBOUND_SUGGESTIONS':
                            return Bt({}, e, { previewSuggestions: t.composerSuggestions });
                        default:
                            return e;
                    }
                },
                banners: function(e, t) {
                    switch ((void 0 === e && (e = Qt), t.type)) {
                        case 'RECEIVE_BANNERS':
                            if (t.banners) return t.banners;
                    }
                    return e;
                },
                composer: function(e, t) {
                    switch ((void 0 === e && (e = Jt), t.type)) {
                        case 'COMPOSER_CONTENT_CHANGED':
                            return (function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                        ? qt(n, !0).forEach(function(t) {
                                              Yt(e, t, n[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(
                                              e,
                                              Object.getOwnPropertyDescriptors(n)
                                          )
                                        : qt(n).forEach(function(t) {
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
                predictiveAnswers: function(e, t) {
                    switch ((void 0 === e && (e = $t), t.type)) {
                        case 'SET_PREDICTIVE_ANSWERS':
                            return (function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                        ? Kt(n, !0).forEach(function(t) {
                                              Xt(e, t, n[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(
                                              e,
                                              Object.getOwnPropertyDescriptors(n)
                                          )
                                        : Kt(n).forEach(function(t) {
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
                lightweightApp: function(e, t) {
                    switch ((void 0 === e && (e = tn), t.type)) {
                        case 'SET_LIGHTWEIGHT_APP_ACTIVE':
                            return (function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                        ? Zt(n, !0).forEach(function(t) {
                                              en(e, t, n[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(
                                              e,
                                              Object.getOwnPropertyDescriptors(n)
                                          )
                                        : Zt(n).forEach(function(t) {
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
            cn = n(885),
            un = n.n(cn),
            dn = n(35),
            ln = n.n(dn),
            pn = n(40);
        function fn(e, t) {
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
        function vn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? fn(n, !0).forEach(function(t) {
                          hn(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : fn(n).forEach(function(t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        }
        function hn(e, t, n) {
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
        var gn = function(e) {
                if (
                    'function' ==
                        typeof (r =
                            null === (t = window) || void 0 === t
                                ? void 0
                                : null === (n = t.parent) || void 0 === n
                                ? void 0
                                : n.ga) &&
                    'function' == typeof (null == r ? void 0 : r.getAll) &&
                    null != r &&
                    r.loaded
                ) {
                    var t,
                        n,
                        r,
                        i = window.parent.ga.getAll();
                    if (ln()(i) && i.length) {
                        if (e) {
                            var o = mn(i, e);
                            return (
                                o ||
                                (window.parent.ga('create', e, 'auto', 'intercomMessenger'),
                                mn(window.parent.ga.getAll(), e))
                            );
                        }
                        return i[0];
                    }
                }
            },
            mn = function(e, t) {
                return un()(e, function(e) {
                    try {
                        return e.b.data.values[':trackingId'] === t;
                    } catch (e) {}
                });
            },
            bn = function(e) {
                return Object.entries(e).reduce(function(e, t) {
                    var n = t[0],
                        r = t[1];
                    if (r) return e ? e + ', ' + n + ': ' + r : n + ": '" + r + "'";
                }, null);
            },
            _n = function(e, t) {
                var n = e.parts,
                    r = e.composerState,
                    i = n[0],
                    o = t || (i && i.id),
                    a = o && -1 !== o.indexOf('message-'),
                    s = {
                        isCustomBot: !r.visible,
                        isAdmin: i && i.author && n[0] && n[0].author.isAdmin,
                    },
                    c = { messageId: o && o.replace('message-', '') };
                return vn({}, s, {}, a ? c : {});
            },
            En = [
                'OPEN_MESSENGER',
                'CLOSE_MESSENGER',
                'CREATE_CONVERSATION_SUCCESS',
                'CREATE_COMMENT_SUCCESS',
                'UPDATE_USER_SUPPLIED_EMAIL_SUCCESS',
                'SUBMIT_MESSENGER_CARD_ACTION_SUCCESS',
                'RECORD_MESSAGE_SENT',
                'MARK_CONVERSATION_AS_READ_REQUEST',
                'UPFRONT_EMAIL_COLLECTION_SUBMITTED',
            ],
            On = function(e) {
                return function(t) {
                    return function(n) {
                        var r = e.getState(),
                            i = t(n);
                        if (-1 === En.indexOf(n.type) || !r.app.features.googleAnalytics) return i;
                        var o = r.app.customGoogleAnalyticsTrackerId,
                            a = gn(o);
                        if (!a)
                            return (
                                Object(pn.b)(
                                    'Intercom - Google Analytics is not installed or configured, have you forgotten to include it?'
                                ),
                                i
                            );
                        var s,
                            c = (function(e) {
                                return function(t) {
                                    var n = void 0 === t ? {} : t,
                                        r = n.name,
                                        i = n.metadata,
                                        o = void 0 === i ? {} : i,
                                        a = n.nonInteraction,
                                        s = void 0 !== a && a;
                                    try {
                                        e.send(
                                            'event',
                                            vn(
                                                {
                                                    eventCategory: 'Intercom Messenger',
                                                    eventAction: r,
                                                    eventLabel: bn(o),
                                                },
                                                s ? { nonInteraction: s } : {}
                                            )
                                        );
                                    } catch (e) {
                                        Object(pn.b)(
                                            'Intercom - Something went wrong sending the Google Analytics event',
                                            e
                                        );
                                    }
                                };
                            })(a);
                        switch (n.type) {
                            case 'OPEN_MESSENGER':
                                c({ name: 'Opened Messenger' });
                                break;
                            case 'CLOSE_MESSENGER':
                                c({ name: 'Closed Messenger' });
                                break;
                            case 'CREATE_CONVERSATION_SUCCESS':
                                c({ name: 'Started New Conversation' });
                                break;
                            case 'CREATE_COMMENT_SUCCESS':
                                var u,
                                    d = r.conversations.byId[n.conversationId],
                                    l = _n(d),
                                    p = l.isCustomBot,
                                    f = l.messageId,
                                    v = l.isAdmin,
                                    h = (((u = {})[(p ? 'Custom Bot' : 'Message') + ' ID'] = f), u);
                                c({ name: 'Sent a Reply', metadata: v || p ? h : void 0 });
                                break;
                            case 'UPFRONT_EMAIL_COLLECTION_SUBMITTED':
                            case 'UPDATE_USER_SUPPLIED_EMAIL_SUCCESS':
                                c({ name: 'Provided Email Address' });
                                break;
                            case 'SUBMIT_MESSENGER_CARD_ACTION_SUCCESS':
                                c({
                                    name: n.card.completed
                                        ? 'Completed App Flow'
                                        : 'Interacted with App',
                                    metadata: {
                                        'App Name': n.card.app_package_name,
                                        Location:
                                            ((s = r.app.viewStack),
                                            s.length > 0
                                                ? {
                                                      'home-screen': 'Home',
                                                      conversation: 'Conversation',
                                                  }[s[s.length - 1]]
                                                : 'Conversation'),
                                    },
                                });
                                break;
                            case 'RECORD_MESSAGE_SENT':
                                var g,
                                    m = r.conversations.byId[n.conversationId],
                                    b = _n(m, n.partId),
                                    _ = b.isCustomBot,
                                    E = b.messageId;
                                if (E)
                                    c({
                                        name: 'Triggered Message',
                                        metadata:
                                            ((g = {}),
                                            (g[(_ ? 'Custom Bot' : 'Message') + ' ID'] = E),
                                            g),
                                        nonInteraction: !0,
                                    });
                                break;
                            case 'MARK_CONVERSATION_AS_READ_REQUEST':
                                var O;
                                if (r.conversations.byId[n.conversationId].read) return;
                                var S = r.conversations.byId[n.conversationId],
                                    y = _n(S),
                                    C = y.isCustomBot,
                                    T = y.messageId;
                                c({
                                    name: 'Viewed Message',
                                    metadata:
                                        ((O = {}),
                                        (O[(C ? 'Custom Bot' : 'Message') + ' ID'] = T),
                                        O),
                                    nonInteraction: !0,
                                });
                        }
                        return i;
                    };
                };
            },
            Sn = n(72),
            yn = n(204);
        function Cn(e, t) {
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
        function Tn(e, t, n) {
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
        function In(e, t) {
            return void 0 !== t && t !== e;
        }
        function wn(e, t, n, r, i, o) {
            e.write(t, n, {
                domain: i,
                path: '/',
                expires: new Date(Sn.b.now() + r),
                sameSite: o ? 'none' : 'lax',
                secure: o,
            });
        }
        function Rn(e, t) {
            return (function(e) {
                return null != e;
            })(e)
                ? e
                : t;
        }
        function An(e) {
            var t = e.domainSetting,
                n = e.originCookieDomain,
                r = e.meta,
                i = void 0 === r ? {} : r;
            if ('none' !== t) {
                if (
                    (void 0 !== t &&
                        Object(pn.b)(
                            'Intercom Messenger error: cookie_domain attribute supports only `none` option'
                        ),
                    n)
                )
                    return '.' + n;
                var o = Object(yn.a)(),
                    a = (o || '').split(':')[0];
                return (
                    Object(W.g)(
                        'missingOriginDomain',
                        (function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2
                                    ? Cn(n, !0).forEach(function(t) {
                                          Tn(e, t, n[t]);
                                      })
                                    : Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(
                                          e,
                                          Object.getOwnPropertyDescriptors(n)
                                      )
                                    : Cn(n).forEach(function(t) {
                                          Object.defineProperty(
                                              e,
                                              t,
                                              Object.getOwnPropertyDescriptor(n, t)
                                          );
                                      });
                            }
                            return e;
                        })({}, i, { host: a, rawHost: o })
                    ),
                    'localhost' === a ? '' : a
                );
            }
        }
        var jn = n(145),
            Nn = n(83),
            Mn = n.n(Nn),
            Un = n(886),
            Pn = n.n(Un),
            Dn = n(144),
            kn = { increment: W.c, count: W.a, timing: W.f },
            Ln = { info: W.d, error: W.b };
        function xn(e, t, n, r, i) {
            var o;
            try {
                o = new t(e.endpoints, Ln, kn, n, r, function() {}, i);
            } catch (e) {
                Object(W.b)(e), Gn(o);
            }
            return o;
        }
        function Gn(e) {
            if (void 0 !== e)
                try {
                    e.shutdown();
                } catch (e) {
                    Object(W.b)(e);
                }
        }
        function Vn(e, t, n, r, i, o, a, s, c, u, d) {
            if (!Jn(t, n, u)) return e;
            if ((Gn(e), Qn(n))) {
                var l = 'pending',
                    f = xn(
                        n,
                        Pn.a,
                        function() {
                            l = Hn(l, r, o);
                        },
                        function() {
                            l = Bn();
                        },
                        d
                    );
                try {
                    f.subscribeToAllTopics(), Wn(f, r, i, a, s, c, p.g);
                } catch (e) {
                    Object(W.b)(e), Gn(f);
                }
                return f;
            }
        }
        var Fn = Mn()(
            function(e) {
                return e();
            },
            5e3,
            { leading: !0, trailing: !0 }
        );
        function Hn(e, t, n) {
            return (
                'disconnected' === e &&
                    (Object(d.d)() <= 5 &&
                        (Object(W.g)('debounceGetUnreadConversations'), Object(d.g)()),
                    Fn(function() {
                        return t.dispatch(n(v.b));
                    })),
                Object(d.c)() || (Object(W.g)('realTimeConnected'), Object(d.n)(!0)),
                'connected'
            );
        }
        function Bn() {
            return 'disconnected';
        }
        function Wn(e, t, n, r, i, o, a) {
            var s = Mn()(function(e) {
                return e();
            }, 5e3);
            e.addListener('NewComment', function(e) {
                var r = e.eventData,
                    i = r.deliveryChannel,
                    o = r.conversationId,
                    a = r.createdByUserId,
                    c = r.createdAt;
                if (!i || -1 !== i.indexOf('web')) {
                    var u = function() {
                        return t.dispatch(n(v.b, o, !0, c));
                    };
                    a === t.getState().user.id ? s(u) : u();
                }
            }),
                e.addListener('UserContentSeenByAdmin', function(e) {
                    var n = e.eventData.conversationId;
                    t.dispatch(r(n));
                }),
                e.addListener('ConversationSeen', function(e) {
                    var n = e.eventData.conversationId;
                    t.dispatch(o(n));
                }),
                e.addListener('AdminIsTyping', function(e) {
                    var n = e.eventData,
                        r = n.conversationId,
                        o = n.adminId,
                        a = n.adminName,
                        s = n.adminAvatar,
                        c = n.hasDefaultAvatar;
                    t.dispatch(i(r, o, a, zn(s, c)));
                }),
                e.addListener('MessengerCardUpdated', function(e) {
                    var r = e.eventData.cardUri,
                        i = Object(Dn.a)(t.getState());
                    i && Object(x.h)(i, r) && t.dispatch(n(v.b, i.id, !0));
                }),
                e.addListener('ConversationPartUpdated', function(e) {
                    var r = e.eventData.conversationId;
                    Object(Dn.a)(t.getState()).id === String(r) && t.dispatch(n(v.b, r, !0));
                }),
                e.addListener('StartTour', function(e) {
                    var n = e.eventData.tour,
                        r = t.getState().user;
                    Object(W.h)(r, 'received_nexus', 'tour', 'messenger', null, { tour_id: n.id }),
                        r.isPresent && t.dispatch(a(n.id));
                });
        }
        var zn = function(e, t) {
                return t || 0 !== e.indexOf('http') ? void 0 : e;
            },
            Qn = function(e) {
                return void 0 !== e && Array.isArray(e.endpoints) && e.endpoints.length > 0;
            },
            qn = function(e) {
                return Object(B.a)(e.split('/')).split('-')[0];
            },
            Yn = function(e, t) {
                return qn(e) !== qn(t);
            },
            Jn = function(e, t, n) {
                return Qn(e) && Qn(t)
                    ? n || Yn(e.endpoints[0], t.endpoints[0])
                    : (!Qn(e) && Qn(t)) || (Qn(e) && !Qn(t));
            },
            Kn = function(e) {
                var t = e.app,
                    n = t.color,
                    r = t.secondaryColor,
                    i = t.name,
                    o = t.features,
                    a = o.anonymousInboundMessages,
                    s = o.googleAnalytics,
                    c = o.hubspotInstalled,
                    u = o.inboundMessages,
                    d = o.marketoEnrichmentInstalled,
                    l = o.newConversationCard,
                    p = o.operatorSuggestionsNavigationEnabled,
                    f = o.outboundMessages,
                    v = o.persistAcrossPages,
                    h = o.selfServeIconEnabled,
                    g = t.launcherLogoUrl,
                    b = t.boundWebEvents,
                    _ = t.helpCenterSiteUrl,
                    E = t.inboundConversationsDisabled,
                    O = t.isInstantBootEnabled,
                    S = t.alignment,
                    y = t.horizontalPadding,
                    C = t.verticalPadding,
                    T = t.isDeveloperWorkspace,
                    I = t.upfrontEmailCollectionSetting,
                    w = t.customGoogleAnalyticsTrackerId,
                    R = e.launcher.isLauncherEnabled,
                    A = e.launcherDiscoveryMode.hasDiscoveredLauncher,
                    j = e.message.conversationId,
                    N = e.openOnBoot,
                    M = N.type,
                    U = N.metadata,
                    P = e.user,
                    D = P.role,
                    k = P.locale,
                    L = P.hasConversations,
                    x = e.conversations,
                    G = x ? x.byId : {};
                return {
                    app: {
                        color: n,
                        secondaryColor: r,
                        name: i,
                        features: {
                            anonymousInboundMessages: a,
                            googleAnalytics: s,
                            hubspotInstalled: c,
                            inboundMessages: u,
                            marketoEnrichmentInstalled: d,
                            newConversationCard: l,
                            operatorSuggestionsNavigationEnabled: p,
                            outboundMessages: f,
                            persistAcrossPages: v,
                            selfServeIconEnabled: h,
                        },
                        launcherLogoUrl: g,
                        boundWebEvents: b,
                        helpCenterSiteUrl: _,
                        inboundConversationsDisabled: E,
                        isInstantBootEnabled: O,
                        alignment: S,
                        horizontalPadding: y,
                        verticalPadding: C,
                        isDeveloperWorkspace: T,
                        upfrontEmailCollectionSetting: I,
                        customGoogleAnalyticsTrackerId: w,
                    },
                    launcher: { isLauncherEnabled: R },
                    launcherDiscoveryMode: { hasDiscoveredLauncher: A },
                    user: { role: D, locale: k, hasConversations: L },
                    message: { conversationId: j },
                    conversations: { byId: Xn(G) },
                    openOnBoot: { type: M, metadata: U },
                    operator: { lastComposerEvent: m(e) },
                };
            },
            Xn = function(e) {
                var t = Object.keys(e),
                    n = {};
                return (
                    t.forEach(function(t) {
                        var r = e[t],
                            i = r.dismissed,
                            o = r.read;
                        n[t] = { fetchState: 'partial', dismissed: i, read: o };
                    }),
                    n
                );
            },
            $n = n(757),
            Zn = void 0,
            er = void 0,
            tr = void 0;
        var nr = function(e) {
                var t = e.updateRealtimeClient,
                    n = e.shutdownRealtimeClient,
                    r = e.getConversation,
                    i = e.getUnreadConversations,
                    o = e.userContentSeenByAdmin,
                    a = e.adminIsTyping,
                    s = e.conversationReadElsewhere;
                return function(e) {
                    return function(c) {
                        return function(u) {
                            var d = c(u);
                            switch (u.type) {
                                case 'CREATE_OR_UPDATE_USER_SUCCESS':
                                    var l = u.user.app.realtimeConfig,
                                        p = u.user.id;
                                    (Zn = t(Zn, er, l, e, r, i, o, a, s, p !== tr, u.user.role)),
                                        (er = l),
                                        (tr = p);
                                    break;
                                case 'DESTROY_SESSION':
                                    n(Zn), (Zn = void 0), (er = void 0), (tr = void 0);
                            }
                            if (!Zn) return d;
                            switch (u.type) {
                                case 'MARK_CONVERSATION_AS_READ_REQUEST':
                                    Zn.sendEvent('ConversationSeen', {
                                        conversationId: u.conversationId,
                                    });
                                    break;
                                case 'USER_IS_TYPING':
                                    Zn.throttleSendEvent(
                                        'UserIsTyping',
                                        { conversationId: u.conversationId },
                                        !0
                                    );
                                    break;
                                case 'SUBMIT_MESSENGER_CARD_ACTION_SUCCESS':
                                    Zn.sendEvent('MessengerCardUpdated', { cardUri: u.card.uri });
                            }
                            return d;
                        };
                    };
                };
            },
            rr = function(e) {
                return (
                    window.parent &&
                        window.parent.intercomSettings &&
                        window.parent.intercomSettings.app_id &&
                        (e = e + '-' + window.parent.intercomSettings.app_id),
                    e
                );
            },
            ir = function(e) {
                try {
                    return JSON.parse(localStorage.getItem(e));
                } catch (e) {
                    Object(W.c)('hydrate_read_error');
                }
            },
            or = function(e, t) {
                try {
                    localStorage.setItem(e, JSON.stringify(t));
                } catch (e) {
                    Object(W.c)('hydrate_write_error');
                }
            };
        function ar(e) {
            try {
                localStorage.removeItem(e);
            } catch (e) {
                Object(W.c)('hydrate_remove_error');
            }
        }
        var sr,
            cr = function(e) {
                return { type: 'REHYDRATE', state: e };
            },
            ur = function(e, t) {
                return (
                    void 0 === t && (t = 'intercom-state'),
                    function(n) {
                        return function() {
                            var r = n.apply(void 0, arguments);
                            if (((t = rr(t)), !Object(U.d)())) return r;
                            var i = ir(t);
                            if (i) {
                                var o = r.getState();
                                try {
                                    r.dispatch(cr(i));
                                } catch (e) {
                                    Object(W.c)('hydrate_error'), ar(t), r.dispatch(cr(o));
                                }
                            }
                            return (
                                r.subscribe(function() {
                                    or(t, e(r.getState()));
                                }),
                                r
                            );
                        };
                    }
                );
            },
            dr = function() {
                return function(e) {
                    return function(t) {
                        var n = e(t);
                        switch (t.type) {
                            case 'DESTROY_SESSION':
                                Object(U.d)() &&
                                    t.clearCookies &&
                                    localStorage.removeItem(rr('intercom-state'));
                        }
                        return n;
                    };
                };
            },
            lr = {
                play: function(e) {
                    if (U.a.hasAudioSupport()) {
                        var t = this.load(e);
                        if (t) {
                            var n = t.play();
                            n && n.catch(function() {});
                        }
                    }
                },
                playFile: function(e) {
                    e && U.a.hasAudioSupport() && this.play(n(883)('./' + e));
                },
                load: function(e) {
                    return this.audio[e] || (this.audio[e] = new Audio(e)), this.audio[e];
                },
                playNotification: Mn()(
                    function(e) {
                        this.play(n(883)('./' + e));
                    },
                    3e3,
                    { leading: !0, trailing: !1 }
                ),
                audio: {},
            },
            pr = n(73),
            fr = n(361),
            vr = (sr = pr.b.get('played-notifications')) ? JSON.parse(sr) : {},
            hr = function(e, t) {
                (vr[e] = t), pr.b.set('played-notifications', JSON.stringify(vr));
            },
            gr = function(e, t) {
                return (n = e), (r = t.id), !((i = vr[n]) === r || -1 === i);
                var n, r, i;
            },
            mr = function(e, t) {
                var n = !1;
                e.forEach(function(e) {
                    var t = Object(B.a)(e.parts);
                    gr(e.id, t) && (n = !0), hr(e.id, t.id);
                }),
                    n && lr.playNotification(t);
            },
            br = function(e, t) {
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
            },
            _r = function(e) {
                return function(t) {
                    return function(n) {
                        var r = t(n),
                            i = e.getState();
                        if (i.app.isAudioEnabled && !i.app.isBoundEventCreatorOpen) {
                            switch (n.type) {
                                case 'CREATE_COMMENT_REQUEST':
                                case 'CREATE_CONVERSATION_REQUEST':
                                    lr.playFile(br(n.type));
                                    break;
                                case 'CREATE_COMMENT_FAILURE':
                                case 'CREATE_CONVERSATION_FAILURE':
                                    lr.playFile(br(n.type));
                                    break;
                                case 'OPEN_MESSAGE':
                                    var o = i.conversations.byId[n.conversationId];
                                    mr([o], br(n.type));
                                    break;
                                case 'GET_CONVERSATION_SUCCESS':
                                    var a = n.conversation,
                                        s = n.skipNotification;
                                    if (a.read) return;
                                    var c = Object(B.a)(a.parts);
                                    if (!0 === s || Object(fr.a)(c.partType))
                                        return void hr(a.id, c.id);
                                    mr([a], br(n.type, c));
                                    break;
                                case 'GET_CONVERSATIONS_SUCCESS':
                                    var u = Object(H.a)(i);
                                    mr(u, br(n.type));
                                    break;
                                case 'CREATE_OR_UPDATE_USER_SUCCESS':
                                    n.user.unreadDismissedConversationIds.forEach(function(e) {
                                        hr(e, -1);
                                    });
                            }
                            return r;
                        }
                    };
                };
            },
            Er = [],
            Or = [];
        var Sr,
            yr,
            Cr,
            Tr = function(e) {
                var t = e.getState;
                return function(e) {
                    return function(n) {
                        return (
                            (function(e, t) {
                                var n = e(),
                                    r = n.user,
                                    i = n.app,
                                    o = n.article;
                                switch (t.type) {
                                    case 'OPEN_LAUNCHER_DISCOVERY_MODE':
                                        return [
                                            Object(W.i)(
                                                r,
                                                'received',
                                                'message',
                                                'messenger',
                                                'from_launcher_discovery_mode'
                                            ),
                                        ];
                                    case 'CREATE_COMMENT_SUCCESS':
                                        return [
                                            Object(W.i)(
                                                r,
                                                'sent',
                                                'reply',
                                                t.isBorderless ? 'borderless' : 'messenger',
                                                'in_conversation',
                                                {
                                                    conversation_id: t.conversationId,
                                                    comment_id: t.part.id,
                                                    is_attachment: Object(d.h)(t.part.body),
                                                    is_annotated: t.isAnnotatedImage || !1,
                                                    within_office_hours: Object(d.j)(
                                                        t.officeHoursResponse
                                                    ),
                                                    teammate_status: Object(d.e)(
                                                        t.lastParticipatingAdmin
                                                    ),
                                                    time_since_last_active_in_minutes: Object(d.f)(
                                                        t.lastParticipatingAdmin
                                                    ),
                                                    from_messenger_suggested_content:
                                                        t.fromMessengerSuggestedContent,
                                                }
                                            ),
                                        ];
                                    case 'CREATE_CONVERSATION_SUCCESS':
                                        var a =
                                                -1 !==
                                                [
                                                    'custom_bot',
                                                    'resolution_bot_auto_suggest',
                                                ].indexOf(t.conversationTriggerType),
                                            s =
                                                'resolution_bot_auto_suggest' ===
                                                t.conversationTriggerType;
                                        return [
                                            Object(W.i)(
                                                r,
                                                'sent',
                                                'message',
                                                'messenger',
                                                'in_new_conversation',
                                                {
                                                    conversation_id: t.conversation.id,
                                                    is_attachment: Object(d.h)(
                                                        t.conversation.parts[0].body
                                                    ),
                                                    is_annotated: t.isAnnotatedImage || !1,
                                                    within_office_hours: Object(d.j)(
                                                        t.officeHoursResponse
                                                    ),
                                                    from_suggestion: a,
                                                    from_messenger_suggested_content: s,
                                                    trigger_type: t.conversationTriggerType,
                                                }
                                            ),
                                        ];
                                    case 'UPDATE_CONVERSATION_FORM_REQUEST':
                                        return [
                                            Object(W.i)(
                                                r,
                                                'sent',
                                                'reply',
                                                'messenger',
                                                'in_conversation',
                                                {
                                                    type: 'automated_lead_qualification',
                                                    conversation_id: t.conversationId,
                                                    part_id: t.partId,
                                                    attribute_identifier: t.identifier,
                                                    reply: t.value,
                                                    attribute_type: t.identifierType,
                                                    form_type: t.formType,
                                                    attribute_is_custom_data: t.isCustomData,
                                                }
                                            ),
                                        ];
                                    case 'CREATE_REACTION_REQUEST':
                                        return [
                                            Object(W.i)(
                                                r,
                                                'sent',
                                                'reaction',
                                                t.isFromConversation ? 'messenger' : 'in_app',
                                                t.isFromConversation
                                                    ? 'in_conversation'
                                                    : 'from_full',
                                                { conversation_id: t.conversationId }
                                            ),
                                        ];
                                    case 'OPEN_ARTICLE':
                                        var c = Object.assign(
                                            {
                                                owner: 'educate',
                                                article_id: t.article.id,
                                                conversation_id: i.conversationId,
                                            },
                                            t.metricMetadata
                                        );
                                        return [
                                            Object(W.i)(
                                                r,
                                                'viewed',
                                                'article',
                                                'in_app',
                                                'from_conversation',
                                                c,
                                                'educate_event'
                                            ),
                                        ];
                                    case 'CREATE_ARTICLE_REACTION_REQUEST':
                                        var u =
                                            o &&
                                            o.reactionsReply &&
                                            o.reactionsReply.reactionSet[t.reactionIndex] &&
                                            o.reactionsReply.reactionSet[t.reactionIndex].emoji;
                                        return [
                                            Object(W.i)(
                                                r,
                                                'sent',
                                                'reaction',
                                                'in_app',
                                                'on_article',
                                                {
                                                    owner: 'educate',
                                                    reaction: u,
                                                    article_id: t.articleId,
                                                    conversation_id: i.conversationId,
                                                },
                                                'educate_event'
                                            ),
                                        ];
                                    case 'CREATE_EVENT':
                                        return t.boundEventMetadata
                                            ? [
                                                  Object(W.i)(
                                                      r,
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
                            })(t, n).forEach(function(e) {
                                return Object(W.m)(e);
                            }),
                            'DESTROY_SESSION' === n.type && (Er.splice(0), Or.splice(0)),
                            e(n)
                        );
                    };
                };
            },
            Ir = n(345),
            wr = nr({
                updateRealtimeClient: Vn,
                shutdownRealtimeClient: Gn,
                getConversation: k.l,
                getUnreadConversations: $n.b,
                userContentSeenByAdmin: k.s,
                adminIsTyping: k.a,
                conversationReadElsewhere: k.c,
            }),
            Rr =
                ((Sr = s.a),
                function(e) {
                    return function(t) {
                        return function(n) {
                            var r = e.getState();
                            switch (n.type) {
                                case 'CREATE_OR_UPDATE_USER_SUCCESS':
                                    if (!r.session) return;
                                    var i = r.session.appId,
                                        o = r.user.anonymousSessionDuration,
                                        a = n.user,
                                        s = a.anonymousId,
                                        u = a.anonymousSession,
                                        d = n.user.app.originCookieDomain,
                                        l = n.user.app.features.crossSiteCookies,
                                        p = An({
                                            domainSetting: r.app.cookieDomain,
                                            originCookieDomain: d,
                                            meta: { action: n.type, role: n.user && n.user.role },
                                        });
                                    if (In(yr, s)) {
                                        var f = Rn(o, 2333e7);
                                        wn(Sr, Object(c.a)(i), s, f, p, l), (yr = s);
                                    }
                                    if (In(Cr, u)) {
                                        var v = Rn(o, 6048e5);
                                        wn(Sr, Object(c.b)(i), u, v, p, l), (Cr = u);
                                    }
                                    break;
                                case 'DESTROY_SESSION':
                                    var h = r.session,
                                        g = r.app.originCookieDomain,
                                        m = An({
                                            domainSetting: r.app.cookieDomain,
                                            originCookieDomain: g,
                                            meta: { action: n.type, role: n.user && n.user.role },
                                        });
                                    if (h && n.clearCookies) {
                                        var b = h.appId;
                                        Sr.clear(Object(c.b)(b), { domain: m, path: '/' }),
                                            Sr.clear(Object(c.a)(b), { domain: m, path: '/' }),
                                            Sr.clear(Object(c.d)(b), { domain: m, path: '/' });
                                    }
                            }
                            return t(n);
                        };
                    };
                }),
            Ar = Object(Ir.a)(),
            jr = ur(Kn),
            Nr = function(e) {
                return Object(Y.createStore)(
                    sn,
                    e,
                    Object(Y.compose)(
                        Object(Y.applyMiddleware)(K.a, Tr, _r, On, wr, Rr, dr, jn.d),
                        jr,
                        Ar
                    )
                );
            },
            Mr = n(52),
            Ur = n(580),
            Pr = n(582),
            Dr = n(282),
            kr = n(887),
            Lr = n.n(kr),
            xr = n(888),
            Gr = n.n(xr),
            Vr = [
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
        function Fr(e) {
            return !Ze()(e);
        }
        function Hr(e) {
            return Vr.indexOf(e) < 0;
        }
        function Br(e) {
            return Object.keys(e)
                .filter(Hr)
                .filter(Fr)
                .reduce(function(t, n) {
                    return (t[n] = e[n]), t;
                }, {});
        }
        function Wr(e) {
            return Object.keys(e)
                .filter(Fr)
                .reduce(function(t, n) {
                    var r = e[n];
                    return (
                        (function(e) {
                            return null != e;
                        })(r) && (t[n] = r),
                        t
                    );
                }, {});
        }
        function zr(e) {
            return Object.assign(
                (function(e) {
                    return e.custom_data ? Br(e.custom_data) : {};
                })(e),
                Br(e)
            );
        }
        function Qr(e) {
            return (
                (function(e) {
                    if (e.user_data)
                        return Wr({
                            appId: e.app_id,
                            email: e.user_data.email,
                            userId: e.user_data.user_id,
                            userHash: e.user_data.user_hash,
                        });
                })(e) ||
                (function(e) {
                    return Wr({
                        appId: e.app_id,
                        email: e.email,
                        userId: e.user_id,
                        userHash: e.user_hash,
                    });
                })(e)
            );
        }
        function qr(e) {
            return e &&
                e.widget &&
                !Ze()(e.widget.activator) &&
                '#IntercomDefaultWidget' !== e.widget.activator
                ? e.widget.activator
                : null;
        }
        function Yr(e) {
            return Ze()(e.custom_launcher_selector) ? qr(e) : e.custom_launcher_selector;
        }
        function Jr(e) {
            return Gr()(e.hide_default_launcher)
                ? e.hide_default_launcher
                    ? 'hide'
                    : 'show'
                : (function(e) {
                      return e.widget && '#IntercomDefaultWidget' === e.widget.activator
                          ? 'show'
                          : 'not-present';
                  })(e);
        }
        function Kr(e) {
            return e.session_duration || null;
        }
        function Xr(e) {
            var t = {
                alignment: e.alignment,
                horizontalPadding: e.horizontal_padding,
                verticalPadding: e.vertical_padding,
                cookieDomain: e.cookie_domain,
                color: e.action_color,
                secondaryColor: e.background_color,
            };
            return Lr()(t, function(e) {
                return void 0 !== e;
            });
        }
        var $r = n(64),
            Zr = n(840),
            ei = n(108),
            ti = n.n(ei);
        function ni(e, t, n, r, i, o, a) {
            try {
                var s = e[o](a),
                    c = s.value;
            } catch (e) {
                return void n(e);
            }
            s.done ? t(c) : Promise.resolve(c).then(r, i);
        }
        function ri(e, t, n) {
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
        var ii = ti()('intercom.client-matching.client-match-object.base'),
            oi = (function() {
                function e(e) {
                    ri(this, '_ruleset', void 0),
                        ri(this, '_predicateChain', void 0),
                        (this._ruleset = e),
                        (this._predicateChain = new P(e, function() {}));
                }
                var t = e.prototype;
                return (
                    (t.getRuleset = function() {
                        return this._ruleset;
                    }),
                    (t.getRulesetId = function() {
                        return this._ruleset.ruleset_id;
                    }),
                    (t.getObjectType = function() {
                        return this._ruleset.ruleset_link_object_type;
                    }),
                    (t.getSerializedObject = function() {
                        return this._ruleset.serialized_object;
                    }),
                    (t.evaluatePredicates = function() {
                        return this._predicateChain.evaluate();
                    }),
                    (t.canRematch = function() {
                        return 'transient_match' === this.getRuleset().ruleset_match_behavior;
                    }),
                    (t.match = (function() {
                        var e,
                            t =
                                ((e = regeneratorRuntime.mark(function e(t, n) {
                                    var r,
                                        i,
                                        o,
                                        a,
                                        s,
                                        c,
                                        u = this;
                                    return regeneratorRuntime.wrap(
                                        function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if (
                                                            (ii(
                                                                '.match called [' +
                                                                    this.getObjectType() +
                                                                    ']',
                                                                this.getRuleset()
                                                            ),
                                                            (r = t.getState()),
                                                            (i = this.getRuleset()),
                                                            (o = this.onPreMatch(t)),
                                                            (e.prev = 4),
                                                            (s = v.b
                                                                .rulesetConditionSatisfied(
                                                                    r.session,
                                                                    i.ruleset_id,
                                                                    i.ruleset_link_id,
                                                                    i.user_id,
                                                                    i.company_id,
                                                                    i.predicates,
                                                                    i.checkpoint_id
                                                                )
                                                                .then(function(e) {
                                                                    return u.selectMatchObject(e);
                                                                })),
                                                            !(c = this.getSerializedObject()))
                                                        ) {
                                                            e.next = 13;
                                                            break;
                                                        }
                                                        return (e.next = 10), Promise.resolve(c);
                                                    case 10:
                                                        (a = e.sent), (e.next = 16);
                                                        break;
                                                    case 13:
                                                        return (e.next = 15), s;
                                                    case 15:
                                                        a = e.sent;
                                                    case 16:
                                                        e.next = 21;
                                                        break;
                                                    case 18:
                                                        return (
                                                            (e.prev = 18),
                                                            (e.t0 = e.catch(4)),
                                                            e.abrupt(
                                                                'return',
                                                                Object(W.b)(
                                                                    'Call to /match failed, unable to complete client match rulesetId=' +
                                                                        this.getRulesetId()
                                                                )
                                                            )
                                                        );
                                                    case 21:
                                                        this.onMatch(a, t, o, n);
                                                    case 22:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        this,
                                        [[4, 18]]
                                    );
                                })),
                                function() {
                                    var t = this,
                                        n = arguments;
                                    return new Promise(function(r, i) {
                                        var o = e.apply(t, n);
                                        function a(e) {
                                            ni(o, r, i, a, s, 'next', e);
                                        }
                                        function s(e) {
                                            ni(o, r, i, a, s, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function(e, n) {
                            return t.apply(this, arguments);
                        };
                    })()),
                    (t.selectMatchObject = function(e) {
                        return e;
                    }),
                    (t.onPreMatch = function(e) {}),
                    (t.onMatch = function(e, t, n, r) {}),
                    (t.unmatch = function(e) {
                        ii('.unmatch called [' + this.getObjectType() + ']', this.getRuleset()),
                            this.onUnmatch(e);
                    }),
                    (t.onUnmatch = function(e) {}),
                    e
                );
            })(),
            ai = n(756);
        var si = (function(e) {
            var t, n;
            function r() {
                return e.apply(this, arguments) || this;
            }
            (n = e),
                ((t = r).prototype = Object.create(n.prototype)),
                (t.prototype.constructor = t),
                (t.__proto__ = n);
            var i = r.prototype;
            return (
                (i.selectMatchObject = function(e) {
                    return e.banner;
                }),
                (i.onMatch = function(e, t) {
                    if (e) {
                        var n = t.getState().banners || [];
                        n.push(v.b.buildBanner(e)), t.dispatch(Object(ai.b)(n));
                    }
                }),
                r
            );
        })(oi);
        var ci = (function(e) {
            var t, n;
            function r() {
                return e.apply(this, arguments) || this;
            }
            (n = e),
                ((t = r).prototype = Object.create(n.prototype)),
                (t.prototype.constructor = t),
                (t.__proto__ = n);
            var i = r.prototype;
            return (
                (i.selectMatchObject = function(e) {
                    return e.tour;
                }),
                (i.onPreMatch = function() {
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
                }),
                (i.onMatch = function(e, t, n) {
                    var r, i, o;
                    t.dispatch(Object(p.k)(v.b.buildTour(e))),
                        n.currentUrl !==
                            (null === (r = window) || void 0 === r
                                ? void 0
                                : null === (i = r.parent) || void 0 === i
                                ? void 0
                                : null === (o = i.location) || void 0 === o
                                ? void 0
                                : o.pathname) &&
                            (Object(W.c)('tour_match_url_mismatch'),
                            Object(W.b)(
                                'tour_match_url_mismatch rulesetId=' + this.getRulesetId()
                            ));
                }),
                r
            );
        })(oi);
        var ui = (function(e) {
                var t, n;
                function r() {
                    return e.apply(this, arguments) || this;
                }
                (n = e),
                    ((t = r).prototype = Object.create(n.prototype)),
                    (t.prototype.constructor = t),
                    (t.__proto__ = n);
                var i = r.prototype;
                return (
                    (i.selectMatchObject = function(e) {
                        return e.composerSuggestions;
                    }),
                    (i.onMatch = function(e, t) {
                        t.dispatch(Object(l.a)(e));
                    }),
                    (i.onUnmatch = function(e) {
                        e.dispatch(Object(l.b)(this.getRulesetId()));
                    }),
                    r
                );
            })(oi),
            di = n(347);
        var li = (function(e) {
            var t, n;
            function r() {
                return e.apply(this, arguments) || this;
            }
            (n = e),
                ((t = r).prototype = Object.create(n.prototype)),
                (t.prototype.constructor = t),
                (t.__proto__ = n);
            var i = r.prototype;
            return (
                (i.selectMatchObject = function(e) {
                    return e.answerbotPredictiveContexts;
                }),
                (i.onMatch = function(e, t) {
                    t.dispatch(Object(di.a)(e)),
                        Object(W.e)('matched', 'answerbot_predictive_context', 'messenger', '', {
                            composerSuggestions: e,
                            url: window.parent.location.href,
                        });
                }),
                (i.onUnmatch = function(e) {
                    e.dispatch(Object(di.a)(null)),
                        Object(W.e)(
                            'stopped_matching',
                            'answerbot_predictive_context',
                            'messenger',
                            '',
                            { url: window.parent.location.href }
                        );
                }),
                r
            );
        })(oi);
        var pi = (function(e) {
            var t, n;
            function r() {
                return e.apply(this, arguments) || this;
            }
            (n = e),
                ((t = r).prototype = Object.create(n.prototype)),
                (t.prototype.constructor = t),
                (t.__proto__ = n);
            var i = r.prototype;
            return (
                (i.selectMatchObject = function() {
                    return null;
                }),
                (i.onMatch = function(e, t) {
                    t.dispatch(Object(Pr.a)(e, v.b));
                }),
                (i.onUnmatch = function(e) {
                    e.dispatch(Object(Pr.b)(this.messengerTriggerId()));
                }),
                (i.messengerTriggerId = function() {
                    return this.getSerializedObject().id;
                }),
                r
            );
        })(oi);
        var fi = (function(e) {
            var t, n;
            function r() {
                return e.apply(this, arguments) || this;
            }
            (n = e),
                ((t = r).prototype = Object.create(n.prototype)),
                (t.prototype.constructor = t),
                (t.__proto__ = n);
            var i = r.prototype;
            return (
                (i.selectMatchObject = function(e) {
                    return e.chat;
                }),
                (i.onMatch = function(e, t) {
                    e && t.dispatch(Object(k.m)(Object(v.a)(e)));
                }),
                r
            );
        })(oi);
        var vi = (function(e) {
            var t, n;
            function r() {
                return e.apply(this, arguments) || this;
            }
            (n = e),
                ((t = r).prototype = Object.create(n.prototype)),
                (t.prototype.constructor = t),
                (t.__proto__ = n);
            var i = r.prototype;
            return (
                (i.selectMatchObject = function(e) {
                    return e.post;
                }),
                (i.onMatch = function(e, t) {
                    e && t.dispatch(Object(k.m)(Object(v.a)(e)));
                }),
                r
            );
        })(oi);
        var hi = (function(e) {
            var t, n;
            function r() {
                return e.apply(this, arguments) || this;
            }
            (n = e),
                ((t = r).prototype = Object.create(n.prototype)),
                (t.prototype.constructor = t),
                (t.__proto__ = n);
            var i = r.prototype;
            return (
                (i.selectMatchObject = function(e) {
                    return e.seriesCondition;
                }),
                (i.onMatch = function(e, t, n, r) {
                    r.createOrUpdateUser({}, 'apiUpdate', !0);
                }),
                r
            );
        })(oi);
        function gi(e, t, n) {
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
        var mi = ti()('intercom.client-matching.client-match-runner'),
            bi = (function() {
                function e(e, t) {
                    gi(this, 'clientMatches', []),
                        gi(this, 'activeClientMatchIds', {}),
                        gi(this, 'evalLoop', null),
                        gi(this, 'store', void 0),
                        gi(this, 'session', void 0),
                        (this.store = e),
                        (this.session = t);
                }
                var t = e.prototype;
                return (
                    (t.start = function() {
                        var e = this;
                        null === this.evalLoop &&
                            (mi('Starting evaluation loop'),
                            (this.evalLoop = setInterval(function() {
                                return e.performClientMatching();
                            }, 500)));
                    }),
                    (t.stop = function() {
                        null !== this.evalLoop &&
                            (mi('Stopping evaluation loop'),
                            window.clearInterval(this.evalLoop),
                            (this.evalLoop = null));
                    }),
                    (t.updateClientMatches = function(e) {
                        this._removeMissingMatches(e),
                            this._addNewMatches(e),
                            this.performClientMatching();
                    }),
                    (t.performClientMatching = function() {
                        var e = this._evaluateClientMatches();
                        this._processResults(e);
                    }),
                    (t._evaluateClientMatches = function() {
                        var e = { positiveMatches: [], negativeMatches: [] };
                        return (
                            this.clientMatches.forEach(function(t) {
                                t.evaluatePredicates()
                                    ? e.positiveMatches.push(t)
                                    : e.negativeMatches.push(t);
                            }),
                            e
                        );
                    }),
                    (t._processResults = function(e) {
                        var t = this;
                        e.negativeMatches.forEach(function(e) {
                            var n = e.getRulesetId();
                            t.activeClientMatchIds[n] &&
                                (e.unmatch(t.store),
                                delete t.activeClientMatchIds[n],
                                e.canRematch() || t._removeClientMatch(e));
                        }),
                            e.positiveMatches.forEach(function(e) {
                                var n = e.getRulesetId();
                                t.activeClientMatchIds[n] ||
                                    (e.match(t.store, t.session), (t.activeClientMatchIds[n] = !0));
                            });
                    }),
                    (t._addNewMatches = function(e) {
                        var t = this,
                            n = function() {
                                if (i) {
                                    if (o >= r.length) return 'break';
                                    a = r[o++];
                                } else {
                                    if ((o = r.next()).done) return 'break';
                                    a = o.value;
                                }
                                var e = a;
                                t.clientMatches.find(function(t) {
                                    return t.getRulesetId() === e.ruleset_id;
                                }) ||
                                    t.clientMatches.push(
                                        (function(e) {
                                            switch (e.ruleset_link_object_type) {
                                                case 'banner':
                                                    return new si(e);
                                                case 'tour':
                                                    return new ci(e);
                                                case 'inbound_trigger':
                                                    return new ui(e);
                                                case 'chat':
                                                    return new fi(e);
                                                case 'post':
                                                    return new vi(e);
                                                case 'messenger_trigger':
                                                    return new pi(e);
                                                case 'answerbot_predictive_context':
                                                    return new li(e);
                                                case 'series_condition':
                                                    return new hi(e);
                                                default:
                                                    return new oi(e);
                                            }
                                        })(e)
                                    );
                            },
                            r = e,
                            i = Array.isArray(r),
                            o = 0;
                        for (r = i ? r : r[Symbol.iterator](); ; ) {
                            var a;
                            if ('break' === n()) break;
                        }
                        this._evaluateClientMatches();
                    }),
                    (t._removeMissingMatches = function(e) {
                        var t = this,
                            n = function() {
                                if (i) {
                                    if (o >= r.length) return 'break';
                                    a = r[o++];
                                } else {
                                    if ((o = r.next()).done) return 'break';
                                    a = o.value;
                                }
                                var n = a;
                                e.find(function(e) {
                                    return e.ruleset_id === n.getRulesetId();
                                }) ||
                                    (t.activeClientMatchIds[n.getRulesetId()] && n.unmatch(t.store),
                                    t._removeClientMatch(n));
                            },
                            r = this.clientMatches,
                            i = Array.isArray(r),
                            o = 0;
                        for (r = i ? r : r[Symbol.iterator](); ; ) {
                            var a;
                            if ('break' === n()) break;
                        }
                    }),
                    (t._removeClientMatch = function(e) {
                        this.clientMatches.splice(this.clientMatches.indexOf(e), 1);
                    }),
                    e
                );
            })(),
            _i = n(884);
        function Ei(e, t, n) {
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
        var Oi = Object.assign;
        function Si(e, t, n) {
            var r = t(e.getState());
            return function() {
                var i = t(e.getState());
                r !== i && ((r = i), n(i));
            };
        }
        function yi(e) {
            return e.intercomSettings;
        }
        var Ci = (function() {
                function e(e, t, n) {
                    var r = this;
                    Ei(this, 'handleCustomLauncherClick', function(e) {
                        return (
                            e.preventDefault(),
                            r.toggleMessenger(),
                            r.addLauncherClickedMetric(),
                            qr(yi(r.window)) &&
                                (W.j.addIncrementOpMetric('legacyCustomLauncherClick'),
                                W.j.buildAndAddHcMetric('legacyCustomLauncherClick')),
                            !1
                        );
                    }),
                        Ei(this, 'handleMessengerChange', function(e) {
                            (e ? r.messengerOpenCallbacks : r.messengerCloseCallbacks).forEach(
                                function(e) {
                                    return e();
                                }
                            ),
                                e ||
                                    'messenger-trigger' !== Object(o.d)(r.store.getState()) ||
                                    r.store.dispatch(Mr.b.navigateBack());
                        }),
                        Ei(this, 'handleUnreadConversationCountChange', function(e) {
                            r.unreadConversationCountChangeCallbacks.forEach(function(t) {
                                return t(e);
                            });
                        }),
                        (this.window = e),
                        (this.store =
                            t ||
                            (function(e) {
                                var t = Nr(e);
                                return t.subscribe(V(t)), t.subscribe(q(t)), t;
                            })()),
                        (this.destroyApp = n),
                        (this.isReady = !1),
                        (this.hasScrapedCookies = !1),
                        (this.readyCallbacks = []),
                        (this.messengerOpenCallbacks = []),
                        (this.messengerCloseCallbacks = []),
                        (this.unreadConversationCountChangeCallbacks = []),
                        (this.storeSubscribers = []),
                        (this.clientMatchRunner = new bi(this.store, this)),
                        this.startClientMatchRunner(),
                        this.createMessengerChangeSubscriber(),
                        this.createUnreadConversationCountChangeSubscriber();
                }
                var t = e.prototype;
                return (
                    (t.createOrUpdateUser = function(e, t, n) {
                        var r = this;
                        void 0 === e && (e = {}), void 0 === n && (n = !1);
                        var i = this.getSettings(e),
                            o = this.window.intercomEncryptedPayload,
                            a = this.store.getState().app,
                            u = this.store.getState().session,
                            l = Qr(i);
                        if (
                            !(function(e) {
                                return e && e.appId;
                            })((u = Oi({}, u, l)))
                        )
                            return Promise.resolve();
                        var p = u.appId;
                        u = Oi(
                            {},
                            u,
                            (function(e) {
                                var t = {},
                                    n = s.a.read(Object(c.a)(e)) || s.a.read(Object(c.d)(e)),
                                    r = s.a.read(Object(c.b)(e));
                                n && Oi(t, { anonymousId: n });
                                r && Oi(t, { anonymousSession: r });
                                return t;
                            })(p)
                        );
                        var f = zr(i),
                            h = {};
                        if (Object(c.f)())
                            (h.marketo_tracking_cookie = null), (h.hubspot_tracking_cookie = null);
                        else {
                            if (a.features.marketoEnrichmentInstalled) {
                                this.hasScrapedCookies = !0;
                                var g = s.a.read(Object(c.e)());
                                g && (h.marketo_tracking_cookie = g);
                            }
                            if (a.features.hubspotInstalled) {
                                this.hasScrapedCookies = !0;
                                var m = s.a.read(Object(c.c)());
                                m && (h.hubspot_tracking_cookie = m);
                            }
                        }
                        var b = Yr(i);
                        b && this.enableCustomLauncher(b),
                            (this.stopMetricsPolling = W.j.startMetricsPolling(u, this.window)),
                            Object(d.a)() || (W.j.buildAndAddHcMetric('apiBoot'), Object(d.o)(!0));
                        var _ = this.window.document.URL,
                            E = Xr(i);
                        return (
                            (function(e, t) {
                                Object(Ke.c)(e, function(e) {
                                    return t.dispatch(Object(Zr.c)(e));
                                }),
                                    Object(Ke.f)(e);
                            })(this.window, this.store),
                            this.store
                                .dispatch(
                                    Ur.c.createOrUpdateUser(
                                        v.b,
                                        u,
                                        _,
                                        f,
                                        Jr(i),
                                        Kr(i),
                                        E,
                                        n,
                                        o,
                                        t,
                                        h,
                                        this.destroyApp
                                    )
                                )
                                .then(function(e) {
                                    return e && r.handleUserCreateOrUpdate(e, i);
                                })
                        );
                    }),
                    (t.createCustomizationOverride = function(e) {
                        var t = Xr(this.getSettings(e));
                        return this.store.dispatch(
                            (function(e) {
                                return {
                                    type: 'CREATE_CUSTOMIZATION_OVERRIDE',
                                    customizationAttributes: e,
                                };
                            })(t)
                        );
                    }),
                    (t.destroy = function(e) {
                        void 0 === e && (e = !0),
                            this.store.dispatch(Ur.c.destroySession(e)),
                            this.stopMetricsPolling && this.stopMetricsPolling(),
                            this.disableCustomLauncher(),
                            this.removeStoreSubscribers(),
                            this.stopClientMatchRunner(),
                            Ur.c.setupDefaultCreateOrUpdateUserRateLimiting(),
                            Ur.c.isDuplicateCreateOrUpdateUserRequest.reset();
                    }),
                    (t.openMessenger = function() {
                        var e = this;
                        this.whenReady(function() {
                            var t = e.store.getState().borderless;
                            t.conversationId
                                ? e.store.dispatch(
                                      Mr.b.openConversationInMessenger(t.conversationId)
                                  )
                                : (e.store.dispatch(Mr.b.showInitialScreen()),
                                  e.store.dispatch(Mr.b.openMessenger()));
                        });
                    }),
                    (t.openOnBoot = function() {
                        var e,
                            t = this.store.getState(),
                            n = t.app,
                            r = t.openOnBoot;
                        if (
                            !Object(a.b)() &&
                            r &&
                            (null == n
                                ? void 0
                                : null === (e = n.features) || void 0 === e
                                ? void 0
                                : e.persistAcrossPages)
                        )
                            switch (r.type) {
                                case 'conversation':
                                    var i = r.metadata.conversationId;
                                    i && this.store.dispatch(Mr.b.openConversationInMessenger(i));
                                    break;
                                case 'new_conversation':
                                    this.store.dispatch(Mr.b.openMessenger()),
                                        this.store.dispatch(Mr.b.showNewConversation());
                                    break;
                                case 'article':
                                    if (
                                        'article-link' === r.metadata.componentId &&
                                        r.metadata.url
                                    ) {
                                        var o,
                                            s,
                                            c =
                                                null === (o = r.metadata) || void 0 === o
                                                    ? void 0
                                                    : null === (s = o.previousState) || void 0 === s
                                                    ? void 0
                                                    : s.metadata;
                                        if (c) {
                                            var u = c.conversationId;
                                            u &&
                                                this.store.dispatch(
                                                    Mr.b.openConversationInMessenger(u)
                                                );
                                        }
                                        this.store.dispatch(
                                            Object(f.b)(
                                                v.b,
                                                r.metadata.cardUri,
                                                r.metadata.componentId,
                                                r.metadata.url,
                                                {}
                                            )
                                        );
                                    }
                            }
                    }),
                    (t.closeMessenger = function() {
                        var e = this;
                        this.whenReady(function() {
                            e.store.dispatch(Mr.b.closeMessenger());
                        });
                    }),
                    (t.toggleMessenger = function() {
                        var e = this;
                        this.whenReady(function() {
                            e.store.dispatch(Mr.b.toggleMessenger());
                        });
                    }),
                    (t.showConversations = function() {
                        var e = this;
                        this.whenReady(function() {
                            e.store.dispatch(Mr.b.openConversations());
                        });
                    }),
                    (t.showNewConversation = function(e) {
                        var t = this;
                        this.whenReady(function() {
                            t.store.dispatch(Mr.b.openNewConversation(e));
                        });
                    }),
                    (t.startTour = function(e) {
                        var t = this;
                        this.whenReady(function() {
                            t.store.dispatch(Object(p.d)(e));
                        });
                    }),
                    (t.createEvent = function(e, t) {
                        var n = this;
                        this.whenReady(function() {
                            n.store.dispatch(Ur.c.createEvent(v.b, e, t));
                        });
                    }),
                    (t.createArticleReaction = function(e, t, n) {
                        var r = this;
                        this.whenReady(function() {
                            var i = r.store.getState(),
                                a = i.session,
                                s = i.app.isMessengerOpen,
                                c = !('conversation' === Object(o.d)(r.store.getState()) && s);
                            v.b.createArticleReaction(a, e, t, c, n);
                        });
                    }),
                    (t.previewInboundCustomBot = function(e) {
                        var t = this;
                        this.whenReady(function() {
                            (e = v.b.buildComposerSuggestions(e)), t.store.dispatch(Object(l.d)(e));
                        });
                    }),
                    (t.previewOutboundCustomBot = function(e) {
                        this.store.dispatch(Object(Pr.d)(v.b, e));
                    }),
                    (t.createMetric = function(e, t) {
                        var n = this;
                        this.whenReady(function() {
                            var r = n.store.getState(),
                                i = r.session,
                                o = r.user;
                            t = Oi(
                                {
                                    anonymous_id: i.anonymousId,
                                    end_user_id: o.id,
                                    user_id: o.id,
                                    user_role: o.role,
                                },
                                t
                            );
                            var a = i.appId,
                                s = [
                                    {
                                        name: e.toString(),
                                        id: $r.a.generateUUID(),
                                        app_id_code: a,
                                        created_at: Math.round(Date.now() / 1e3),
                                        metadata: t,
                                    },
                                ];
                            v.b.createMetrics(i, s);
                        });
                    }),
                    (t.trigger = function(e) {
                        this.store.dispatch(Object(Pr.c)(e, v.b));
                    }),
                    (t.getSettings = function(e) {
                        return Oi({}, yi(this.window), e);
                    }),
                    (t.getArticleReaction = function(e, t, n) {
                        var r = this;
                        this.whenReady(function() {
                            var i = r.store.getState().session;
                            v.b.getArticleReaction(i, e, t, n);
                        });
                    }),
                    (t.enterTourPreviewMode = function(e) {
                        var t = this;
                        this.whenReady(function() {
                            t.store.dispatch(Object(p.i)(v.b.buildTour(e), !0));
                        });
                    }),
                    (t.exitTourPreviewMode = function() {
                        var e = this;
                        this.whenReady(function() {
                            e.store.dispatch(Object(p.j)());
                        });
                    }),
                    (t.getVisitorId = function() {
                        var e = this.store.getState().session;
                        if (e) {
                            var t = e.appId;
                            return s.a.read(Object(c.a)(t)) || s.a.read(Object(c.d)(t));
                        }
                    }),
                    (t.onMessengerOpen = function(e) {
                        this.messengerOpenCallbacks.push(e);
                    }),
                    (t.onMessengerClose = function(e) {
                        this.messengerCloseCallbacks.push(e);
                    }),
                    (t.onUnreadConversationCountChange = function(e) {
                        var t = this.store.getState(),
                            n = Object(Dr.b)(t);
                        this.unreadConversationCountChangeCallbacks.push(e), e(n);
                    }),
                    (t.enableCustomLauncher = function(e) {
                        this.disableCustomLauncher();
                        var t = this.window.document.getElementsByTagName('body')[0];
                        (this.customLauncherClickHandler = Object(j.g)(
                            t,
                            e,
                            this.handleCustomLauncherClick
                        )),
                            Object(j.c)(t, 'click', this.customLauncherClickHandler);
                    }),
                    (t.disableCustomLauncher = function() {
                        if (this.customLauncherClickHandler) {
                            var e = this.window.document.getElementsByTagName('body')[0];
                            Object(j.y)(e, 'click', this.customLauncherClickHandler),
                                (this.customLauncherClickHandler = null);
                        }
                    }),
                    (t.whenReady = function(e) {
                        if (this.isReady) return setTimeout(e, 1);
                        this.readyCallbacks.push(e);
                    }),
                    (t.executeReadyCallbacks = function() {
                        for (var e = this.readyCallbacks; e.length; ) e.shift()();
                        this.readyCallbacks = [];
                    }),
                    (t.addLauncherClickedMetric = function() {
                        var e = this;
                        this.whenReady(function() {
                            var t = e.store.getState(),
                                n = t.user,
                                r = {
                                    is_messenger_open: t.app.isMessengerOpen,
                                    is_custom_launcher: !0,
                                };
                            W.j.buildAndAddMetric(n, 'clicked', 'launcher', 'in_app', '', r);
                        });
                    }),
                    (t.handleUserCreateOrUpdate = function(e, t) {
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
                            Object(_i.a)() &&
                                this.window.parent.postMessage('messenger_session_ready', '*'),
                            !Object(d.b)())
                        ) {
                            var n = this.store.getState(),
                                r = Object(u.a)(n),
                                i = Object(U.j)();
                            W.j.buildAndAddHcMetric('createOrUpdateUser', {
                                messengerIsVisible: Object(d.i)(r),
                                isLauncherEnabled: r,
                                hasDisplayNoneSet: i,
                            }),
                                Object(d.m)(!0);
                        }
                        return e;
                    }),
                    (t.shouldSendTrackingCookies = function() {
                        var e = this.store.getState().app;
                        return (
                            !this.hasScrapedCookies &&
                            (e.features.hubspotInstalled || e.features.marketoEnrichmentInstalled)
                        );
                    }),
                    (t.startClientMatchRunner = function() {
                        this.clientMatchRunner.start();
                    }),
                    (t.stopClientMatchRunner = function() {
                        this.clientMatchRunner.stop();
                    }),
                    (t.createMessengerChangeSubscriber = function() {
                        this.addStoreSubscriber(
                            Si(
                                this.store,
                                function(e) {
                                    return e.app.isMessengerOpen;
                                },
                                this.handleMessengerChange
                            )
                        );
                    }),
                    (t.createUnreadConversationCountChangeSubscriber = function() {
                        this.addStoreSubscriber(
                            Si(this.store, Dr.b, this.handleUnreadConversationCountChange)
                        );
                    }),
                    (t.addStoreSubscriber = function(e) {
                        this.storeSubscribers.push(this.store.subscribe(e));
                    }),
                    (t.removeStoreSubscribers = function() {
                        this.storeSubscribers.forEach(function(e) {
                            return !!e && e();
                        });
                    }),
                    e
                );
            })(),
            Ti = n(889),
            Ii = n.n(Ti),
            wi = Object(h.createSelector)(
                [
                    function(e) {
                        return e.app;
                    },
                ],
                function(e) {
                    return e.isMessengerOpen;
                }
            ),
            Ri = n(754),
            Ai = Object(h.createSelector)(
                [
                    function(e) {
                        return e.accessibility;
                    },
                ],
                function(e) {
                    return e;
                }
            ),
            ji = n(135),
            Ni = n.n(ji),
            Mi = Object(h.createSelector)(Ri.b, function(e) {
                var t = e.color,
                    n = e.secondaryColor;
                if (!t || !n) return {};
                var r = Ni()({ primaryColor: t, secondaryColor: n, darkenAmount: 20 });
                return {
                    primaryColor: t,
                    secondaryColor: n,
                    gradientStartColor: r.gradient_start_color,
                    gradientEndColor: r.gradient_end_color,
                    buttonTextColor: r.button_text_color,
                };
            }),
            Ui = n(824),
            Pi = n(22),
            Di = function(e, t) {
                var n = t.onLauncherClick,
                    r = t.launcherLogoUrl,
                    i = t.allowSelfServeIcon,
                    o = Gi(t),
                    a = e.document.createElement('div');
                a.addEventListener('click', n, !0),
                    a.addEventListener('keydown', o, !0),
                    a.setAttribute('class', 'intercom-lightweight-app-launcher intercom-launcher'),
                    a.setAttribute('role', 'button'),
                    a.setAttribute('tabindex', '0'),
                    a.setAttribute('aria-label', Object(Pi.e)('open_intercom_messenger'));
                var s = e.document.createElement('div');
                if (
                    (s.setAttribute(
                        'class',
                        'intercom-lightweight-app-launcher-icon intercom-lightweight-app-launcher-icon-open'
                    ),
                    r)
                ) {
                    var c = e.document.createElement('img');
                    c.setAttribute('src', r),
                        c.setAttribute('alt', 'Messenger launcher logo'),
                        c.setAttribute(
                            'class',
                            'intercom-lightweight-app-launcher-custom-icon-open'
                        ),
                        s.appendChild(c);
                } else
                    i
                        ? (s.setAttribute(
                              'class',
                              'intercom-lightweight-app-launcher-icon intercom-lightweight-app-launcher-icon-self-serve'
                          ),
                          (s.innerHTML =
                              '<svg aria-hidden="true" viewBox="1 1 60 60"><path d="M27.765 42.244c-8.614 0-15.622-7.008-15.622-15.622S19.151 11 27.765 11s15.622 7.008 15.622 15.622-7.007 15.622-15.622 15.622zm0-28.398c-7.045 0-12.775 5.73-12.775 12.775s5.73 12.775 12.775 12.775 12.775-5.73 12.775-12.775-5.73-12.775-12.775-12.775z"/><path d="M34.869 39.146l4.014-3.738 9.286 9.114a3.164 3.164 0 01-.07 4.562l-.071.066a3.163 3.163 0 01-4.561-.257l-8.598-9.747zM27.77 34.173c-2.882 0-5.412-.876-7.656-2.526a1.002 1.002 0 01-.35-.81c.008-.461.445-.969 1.02-.959.284.005.493.153.713.308 1.837 1.302 3.832 1.971 6.275 1.971 1.875 0 4.492-.476 6.314-2.118a.98.98 0 01.638-.261.92.92 0 01.686.241c.222.209.33.527.336.735a1.02 1.02 0 01-.318.775c-1.333 1.237-4.262 2.644-7.658 2.644z"/></svg>\n'))
                        : (s.innerHTML =
                              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 32"><path d="M28 32s-4.714-1.855-8.527-3.34H3.437C1.54 28.66 0 27.026 0 25.013V3.644C0 1.633 1.54 0 3.437 0h21.125c1.898 0 3.437 1.632 3.437 3.645v18.404H28V32zm-4.139-11.982a.88.88 0 00-1.292-.105c-.03.026-3.015 2.681-8.57 2.681-5.486 0-8.517-2.636-8.571-2.684a.88.88 0 00-1.29.107 1.01 1.01 0 00-.219.708.992.992 0 00.318.664c.142.128 3.537 3.15 9.762 3.15 6.226 0 9.621-3.022 9.763-3.15a.992.992 0 00.317-.664 1.01 1.01 0 00-.218-.707z"/></svg>');
                a.appendChild(s);
                var u = e.document.createElement('div');
                return (
                    u.setAttribute(
                        'class',
                        'intercom-lightweight-app-launcher-icon intercom-lightweight-app-launcher-icon-minimize'
                    ),
                    (u.innerHTML =
                        '<svg viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M.116 4.884l1.768-1.768L8 9.232l6.116-6.116 1.768 1.768L8 12.768.116 4.884z"/></svg>'),
                    a.appendChild(u),
                    a
                );
            },
            ki = function(e, t) {
                var n = t.querySelector('.intercom-lightweight-app-launcher-custom-icon-open');
                !n || n.complete
                    ? e.appendChild(t)
                    : (n.addEventListener('load', function() {
                          return e.appendChild(t);
                      }),
                      n.addEventListener('error', function() {
                          return e.appendChild(t);
                      }));
            },
            Li = function(e, t, n, r, i, o) {
                return function(a) {
                    if (
                        ((o.textContent = Object(Ui.b)(a)),
                        t.locale !== a.locale && Object(Pi.d)(a.locale),
                        !t.isAppActive && a.isAppActive
                            ? e.document.body.appendChild(n)
                            : t.isAppActive && !a.isAppActive && e.document.body.removeChild(n),
                        !t.isLauncherEnabled && a.isLauncherEnabled)
                    ) {
                        var s = Di(e, a);
                        ki(n, s);
                    } else if (t.isLauncherEnabled && !a.isLauncherEnabled) {
                        var c = (function(e) {
                            return e.document.querySelector('.intercom-lightweight-app-launcher');
                        })(e);
                        c && n.contains(c) && n.removeChild(c);
                    }
                    !t.isMessengerOpen && a.isMessengerOpen
                        ? (n.appendChild(r), n.appendChild(i))
                        : t.isMessengerOpen &&
                          !a.isMessengerOpen &&
                          (n.removeChild(r), n.removeChild(i)),
                        (t = a);
                };
            },
            xi = function(e, t) {
                return function() {
                    var n = e.document.body;
                    t && n.contains(t) && n.removeChild(t);
                };
            },
            Gi = function(e) {
                var t = e.onLauncherClick;
                return function(e) {
                    var n = e.keyCode;
                    (n !== j.a.ENTER && n !== j.a.SPACE) || t();
                };
            },
            Vi = function(e) {
                var t = e.onTabKeyDown;
                return function(e) {
                    e.keyCode === j.a.TAB && t();
                };
            },
            Fi = function(e, t) {
                var n = t.isAppActive,
                    r = t.isLauncherEnabled,
                    i = t.isMessengerOpen,
                    o = t.locale;
                void 0 !== o && Object(Pi.d)(o);
                var a = Vi(t);
                e.document.addEventListener('keydown', a, !0);
                var s = e.document.createElement('div');
                if (
                    (s.setAttribute('class', 'intercom-lightweight-app'),
                    s.setAttribute('aria-live', 'polite'),
                    n && e.document.body.appendChild(s),
                    r)
                ) {
                    var c = Di(e, t);
                    ki(s, c);
                }
                var u = e.document.createElement('div');
                u.setAttribute('class', 'intercom-lightweight-app-messenger intercom-messenger');
                var d = e.document.createElement('div');
                d.setAttribute('class', 'intercom-lightweight-app-messenger-header'),
                    u.appendChild(d);
                var l = e.document.createElement('div');
                l.setAttribute('class', 'intercom-lightweight-app-gradient'),
                    i && (s.appendChild(u), s.appendChild(l));
                var p = e.document.createElement('style');
                p.setAttribute('id', 'intercom-lightweight-app-style');
                var f = e.document.createTextNode(Object(Ui.b)(t));
                return (
                    p.appendChild(f),
                    s.appendChild(p),
                    { updateLightweightApp: Li(e, t, s, u, l, f), removeLightweightApp: xi(e, s) }
                );
            },
            Hi = Object(h.createSelector)(
                [
                    function(e) {
                        return e.app;
                    },
                ],
                function(e) {
                    return e.isBooted || e.bootFailed || (e.isBooting && e.isInstantBootEnabled);
                }
            ),
            Bi = Object(h.createSelector)(
                [
                    function(e) {
                        return e.user;
                    },
                ],
                function(e) {
                    return e ? e.locale : void 0;
                }
            ),
            Wi = function(e) {
                return { type: 'SET_LIGHTWEIGHT_APP_ACTIVE', isActive: e };
            },
            zi = n(213);
        function Qi(e, t) {
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
        function qi(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? Qi(n, !0).forEach(function(t) {
                          Yi(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : Qi(n).forEach(function(t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        }
        function Yi(e, t, n) {
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
        var Ji = Object(h.createStructuredSelector)({
                isAppActive: Hi,
                isLauncherEnabled: u.a,
                isMessengerOpen: wi,
                customization: Ri.b,
                accessibility: Ai,
                colors: Mi,
                launcherLogoUrl: o.h,
                allowSelfServeIcon: o.b,
                locale: Bi,
            }),
            Ki = function(e, t) {
                var n = (function(e, t) {
                        return {
                            isMobile: Object(a.b)(e),
                            onLauncherClick: function() {
                                Object(W.e)('clicked', 'launcher', 'in_app', '', {
                                    is_messenger_open: !1,
                                    is_custom_launcher: !1,
                                    is_borderless_open: !1,
                                }),
                                    t.dispatch(Object(Mr.k)());
                            },
                            onTabKeyDown: function() {
                                t.dispatch(Object(zi.b)(!0));
                            },
                        };
                    })(e, t),
                    r = Ji(t.getState()),
                    i = qi({}, r, {}, n),
                    o = Fi(e, i),
                    s = o.updateLightweightApp,
                    c = o.removeLightweightApp;
                t.dispatch(Wi(!0));
                var u = t.subscribe(function() {
                    var e = Ji(t.getState());
                    if (e !== r) {
                        var i = qi({}, e, {}, n);
                        s(i);
                    }
                });
                return function() {
                    u(), c(e), t.dispatch(Wi(!1));
                };
            },
            Xi = n(841),
            $i = Object(h.createSelector)(
                [
                    function(e) {
                        return e.app.isMessengerOpen;
                    },
                ],
                function(e) {
                    return e;
                }
            ),
            Zi = Object(h.createSelector)([F.a], function(e) {
                return e.length > 0;
            }),
            eo = Object(h.createSelector)([H.a], function(e) {
                return e.length > 0;
            }),
            to = Object(h.createSelector)([Xi.a], function(e) {
                return e.length > 0;
            }),
            no = Object(h.createSelector)(
                [
                    function(e) {
                        return e.install.isInstallModeOpen;
                    },
                ],
                function(e) {
                    return e;
                }
            ),
            ro = Object(h.createSelector)(
                [
                    function(e) {
                        return e.banners;
                    },
                ],
                function(e) {
                    return e.length > 0;
                }
            ),
            io = Object(h.createSelector)([Dr.b], function(e) {
                return e > 0;
            }),
            oo = Object(h.createSelector)(
                [
                    function(e) {
                        return e.launcherDiscoveryMode.isLauncherDiscoveryModeOpening;
                    },
                ],
                function(e) {
                    return e;
                }
            ),
            ao = Object(h.createSelector)(
                [
                    function(e) {
                        return e.tour.activeTour;
                    },
                ],
                function(e) {
                    return null != e;
                }
            ),
            so = Object(h.createSelector)([$i, Zi, eo, to, no, ro, io, oo, ao], function(
                e,
                t,
                n,
                r,
                i,
                o,
                a,
                s,
                c
            ) {
                return Boolean(e || t || n || r || i || o || a || s || c);
            });
        function co(e, t, n, r, i, o, a) {
            try {
                var s = e[o](a),
                    c = s.value;
            } catch (e) {
                return void n(e);
            }
            s.done ? t(c) : Promise.resolve(c).then(r, i);
        }
        function uo(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise(function(r, i) {
                    var o = e.apply(t, n);
                    function a(e) {
                        co(o, r, i, a, s, 'next', e);
                    }
                    function s(e) {
                        co(o, r, i, a, s, 'throw', e);
                    }
                    a(void 0);
                });
            };
        }
        var lo = function(e) {
                return new Promise(function(t) {
                    setTimeout(t, e);
                });
            },
            po = function(e) {
                return new Promise(function(t) {
                    var n = e.subscribe(function() {
                        so(e.getState()) && (n(), t());
                    });
                });
            },
            fo = (function() {
                var e = uo(
                    regeneratorRuntime.mark(function e(t, n) {
                        var r, i, o;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (
                                            (r = Ki(t, n)),
                                            (o = !0),
                                            po(n).then(
                                                uo(
                                                    regeneratorRuntime.mark(function e() {
                                                        var a, s;
                                                        return regeneratorRuntime.wrap(function(e) {
                                                            for (;;)
                                                                switch ((e.prev = e.next)) {
                                                                    case 0:
                                                                        if (o) {
                                                                            e.next = 2;
                                                                            break;
                                                                        }
                                                                        return e.abrupt('return');
                                                                    case 2:
                                                                        return (
                                                                            (e.next = 4),
                                                                            Promise.all([
                                                                                lo(250),
                                                                                ho(),
                                                                            ])
                                                                        );
                                                                    case 4:
                                                                        return (
                                                                            (a = e.sent),
                                                                            (s = a[1]),
                                                                            (e.next = 8),
                                                                            s(t, n)
                                                                        );
                                                                    case 8:
                                                                        (i = e.sent),
                                                                            wi(n.getState())
                                                                                ? r()
                                                                                : vo(t, r);
                                                                    case 10:
                                                                    case 'end':
                                                                        return e.stop();
                                                                }
                                                        }, e);
                                                    })
                                                )
                                            ),
                                            e.abrupt('return', function() {
                                                o && (i ? i() : r(), (o = !1));
                                            })
                                        );
                                    case 4:
                                    case 'end':
                                        return e.stop();
                                }
                        }, e);
                    })
                );
                return function(t, n) {
                    return e.apply(this, arguments);
                };
            })(),
            vo = function(e, t) {
                var n = e.document.querySelector('.intercom-launcher-frame'),
                    r = n
                        ? n.contentDocument.querySelector('.intercom-app-launcher-custom-icon-open')
                        : null;
                !r || r.complete
                    ? t()
                    : (r.addEventListener('load', t), r.addEventListener('error', t));
            },
            ho = (function() {
                var e = uo(
                    regeneratorRuntime.mark(function e(t) {
                        var r, i, o;
                        return regeneratorRuntime.wrap(
                            function(e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                void 0 === t && (t = 3),
                                                (e.prev = 1),
                                                (r = Date.now()),
                                                (e.next = 5),
                                                Ii()(
                                                    uo(
                                                        regeneratorRuntime.mark(function e() {
                                                            return regeneratorRuntime.wrap(function(
                                                                e
                                                            ) {
                                                                for (;;)
                                                                    switch ((e.prev = e.next)) {
                                                                        case 0:
                                                                            return (
                                                                                (e.next = 2),
                                                                                Promise.all([
                                                                                    n.e(58),
                                                                                    n.e(3),
                                                                                ]).then(
                                                                                    n.bind(
                                                                                        null,
                                                                                        1166
                                                                                    )
                                                                                )
                                                                            );
                                                                        case 2:
                                                                            return e.abrupt(
                                                                                'return',
                                                                                e.sent
                                                                            );
                                                                        case 3:
                                                                        case 'end':
                                                                            return e.stop();
                                                                    }
                                                            },
                                                            e);
                                                        })
                                                    ),
                                                    { retries: t }
                                                )
                                            );
                                        case 5:
                                            return (
                                                (i = e.sent),
                                                (o = Date.now()),
                                                Object(W.f)('load_app_bundle_duration', o - r),
                                                e.abrupt('return', i.default)
                                            );
                                        case 11:
                                            throw ((e.prev = 11),
                                            (e.t0 = e.catch(1)),
                                            Object(W.c)('load_app_bundle_failed'),
                                            e.t0);
                                        case 15:
                                        case 'end':
                                            return e.stop();
                                    }
                            },
                            e,
                            null,
                            [[1, 11]]
                        );
                    })
                );
                return function(t) {
                    return e.apply(this, arguments);
                };
            })(),
            go = fo;
        var mo = (function() {
            function e(e) {
                var t,
                    n,
                    r,
                    i = this;
                (r = function(e) {
                    i.session.destroy(e),
                        (i.session = new Ci(i.window)),
                        i.renderApp &&
                            i.renderApp.then(function(e) {
                                return e();
                            }),
                        (i.renderApp = void 0);
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
                    (this.session = new Ci(this.window, null, this.destroySession));
            }
            var t = e.prototype;
            return (
                (t.createOrUpdateUser = function(e, t) {
                    var n = this.session.createOrUpdateUser(e, t);
                    return (
                        this.renderApp || (this.renderApp = go(this.window, this.session.store)), n
                    );
                }),
                (t.openOnBoot = function() {
                    this.session.openOnBoot();
                }),
                (t.createCustomizationOverride = function(e) {
                    return this.session.createCustomizationOverride(e);
                }),
                (t.openMessenger = function() {
                    this.session.openMessenger();
                }),
                (t.openMessengerFromAPI = function() {
                    this.session.openMessenger();
                    var e = this.session.store.getState().user;
                    Object(W.h)(e, 'opened', 'messenger', 'in_app', 'from_api');
                }),
                (t.closeMessenger = function() {
                    this.session.closeMessenger();
                }),
                (t.closeMessengerFromAPI = function() {
                    this.session.closeMessenger();
                    var e = this.session.store.getState().user;
                    Object(W.h)(e, 'closed', 'messenger', 'messenger', 'from_api');
                }),
                (t.showConversations = function() {
                    this.session.showConversations();
                }),
                (t.showNewConversation = function(e) {
                    this.session.showNewConversation(e);
                }),
                (t.startTour = function(e) {
                    var t = parseInt(e, 10);
                    if (isNaN(t))
                        Object(pn.a)('Invalid tourId passed to startTour. tourId must be a number');
                    else {
                        this.session.startTour(t);
                        var n = this.session.store.getState().user;
                        Object(W.h)(n, 'requested', 'messenger', 'tour', 'from_api', {
                            tour_id: t,
                        });
                    }
                }),
                (t.createEvent = function(e, t) {
                    this.session.createEvent(e, t);
                }),
                (t.onMessengerOpen = function(e) {
                    this.session.onMessengerOpen(e);
                }),
                (t.onMessengerClose = function(e) {
                    this.session.onMessengerClose(e);
                }),
                (t.onUnreadConversationCountChange = function(e) {
                    this.session.onUnreadConversationCountChange(e);
                }),
                (t.getArticleReaction = function(e, t, n) {
                    this.session.getArticleReaction(e, t, n);
                }),
                (t.createArticleReaction = function(e, t, n) {
                    this.session.createArticleReaction(e, t, n);
                }),
                (t.previewInboundCustomBot = function(e) {
                    this.session.previewInboundCustomBot(e);
                }),
                (t.previewOutboundCustomBot = function(e) {
                    this.session.previewOutboundCustomBot(e);
                }),
                (t.createMetric = function(e, t) {
                    this.session.createMetric(e, t);
                }),
                (t.getVisitorId = function() {
                    return this.session.getVisitorId();
                }),
                (t.enterTourPreviewMode = function(e) {
                    return this.session.enterTourPreviewMode(e);
                }),
                (t.exitTourPreviewMode = function() {
                    return this.session.exitTourPreviewMode();
                }),
                (t.trigger = function(e) {
                    if (this.session.isReady) return this.session.trigger(e);
                    Object(pn.a)('Intercom is not ready. Aborting MessengerTrigger request');
                }),
                e
            );
        })();
        function bo(e) {
            return function() {
                for (
                    var t = {
                            boot: function(t) {
                                e.createCustomizationOverride(t),
                                    e.createOrUpdateUser(t, 'apiBoot'),
                                    e.openOnBoot();
                            },
                            update: function(t) {
                                e.createCustomizationOverride(t),
                                    e.createOrUpdateUser(t, 'apiUpdate');
                            },
                            shutdown: function(t) {
                                void 0 === t && (t = !0), e.destroySession(t);
                            },
                            show: function() {
                                e.openMessengerFromAPI();
                            },
                            showMessages: function() {
                                e.showConversations();
                            },
                            showNewMessage: function(t) {
                                e.showNewConversation(t);
                            },
                            startTour: function(t) {
                                e.startTour(t);
                            },
                            hide: function() {
                                e.closeMessengerFromAPI();
                            },
                            trackEvent: function(t, n) {
                                e.createEvent(t, n);
                            },
                            onShow: function(t) {
                                e.onMessengerOpen(t);
                            },
                            onHide: function(t) {
                                e.onMessengerClose(t);
                            },
                            onUnreadCountChange: function(t) {
                                e.onUnreadConversationCountChange(t);
                            },
                            trigger: function(t) {
                                e.trigger(t);
                            },
                            getVisitorId: function() {
                                return e.getVisitorId();
                            },
                            version: function() {
                                return '4743a7c12ffe8f354f11128809ba6d0a34fd97cd';
                            },
                            'private:getArticleReaction': function(t, n, r) {
                                e.getArticleReaction(t, n, r);
                            },
                            'private:createMetric': function(t, n) {
                                e.createMetric(t, n);
                            },
                            'private:createArticleReaction': function(t, n, r) {
                                e.createArticleReaction(t, n, r);
                            },
                            'private:enterTourPreviewMode': function(t) {
                                e.enterTourPreviewMode(t);
                            },
                            'private:exitTourPreviewMode': function() {
                                e.exitTourPreviewMode();
                            },
                            'private:previewInboundCustomBot': function(t) {
                                e.previewInboundCustomBot(t);
                            },
                            'private:previewOutboundCustomBot': function(t) {
                                e.previewOutboundCustomBot(t);
                            },
                        },
                        n = arguments.length,
                        r = new Array(n),
                        i = 0;
                    i < n;
                    i++
                )
                    r[i] = arguments[i];
                var o = r[0];
                if (o && t[o]) return t[o].apply(t, r.slice(1));
            };
        }
        function _o(e, t) {
            (t.Intercom = e), (t.Intercom.booted = !0);
        }
        function Eo(e) {
            var t = (function(e) {
                return e.Intercom;
            })(e);
            return (t && t.q) || [];
        }
        function Oo(e) {
            return Eo(e).some(function(e) {
                return 'boot' === e[0] || 'shutdown' === e[0];
            });
        }
        function So(e, t) {
            for (var n = Eo(t); n.length; ) e.apply(void 0, n.shift());
        }
        var yo = n(285),
            Co = n.n(yo);
        var To = n(289),
            Io = (function() {
                function e(e) {
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
                var t = e.prototype;
                return (
                    (t.setupIntersection = function() {
                        this.openerExists() &&
                            (this.modeExists()
                                ? this.injectIntersection()
                                : (this.setupMessageListener(),
                                  this.sendMessageToOpener({ type: 'intercom-snippet__ready' })));
                    }),
                    (t.sendMessageToOpener = function(e) {
                        this.window.opener.postMessage(e, '*');
                    }),
                    (t.openerExists = function() {
                        return !!this.window.opener;
                    }),
                    (t.modeExists = function() {
                        return !!pr.b.get('intercom-snippet__intersection-mode');
                    }),
                    (t.setupMessageListener = function() {
                        this.window.addEventListener('message', this.bootIntersection.bind(this));
                    }),
                    (t.getMode = function() {
                        return pr.b.get('intercom-snippet__intersection-mode');
                    }),
                    (t.getAppId = function() {
                        return pr.b.get('intercom-snippet__intersection-app-id');
                    }),
                    (t.bootIntersection = function(e) {
                        -1 !== this.intercomDomains.indexOf(e.origin) &&
                            'intercom-snippet__boot-intersection' === e.data.type &&
                            (this.removeMessageListener(),
                            this.saveOpenerOrigin(e.origin),
                            this.injectIntersection(e.data.mode, e.data.appId));
                    }),
                    (t.removeMessageListener = function() {
                        this.window.removeEventListener(
                            'message',
                            this.bootIntersection.bind(this)
                        );
                    }),
                    (t.saveOpenerOrigin = function(e) {
                        pr.b.set('intercom-snippet__intersection-opener-origin', e);
                    }),
                    (t.injectIntersection = function(e, t) {
                        this.window.document.getElementById('intersection-container') ||
                            (this.injectIntersectionFrame(), this.injectEmberApp(e, t));
                    }),
                    (t.injectIntersectionFrame = function() {
                        var e = this.window.document.createElement('div'),
                            t = this.window.document.createElement('iframe');
                        (e.id = 'intersection-container'),
                            (t.id = 'intersection-frame'),
                            (t.frameBorder = 0),
                            e.appendChild(t),
                            this.window.document.body.insertAdjacentElement('beforeend', e);
                    }),
                    (t.createScriptTag = function(e) {
                        var t = document.createElement('script');
                        return (t.type = 'text/javascript'), (t.charset = 'utf-8'), (t.src = e), t;
                    }),
                    (t.injectFrameTemplate = function(e, t, n) {
                        void 0 === t && (t = this.getMode()), void 0 === n && (n = this.getAppId());
                        var r = Co()(t),
                            i = Co()(n);
                        e.open(),
                            e.write(
                                '\n    <!doctype html>\n      <head>\n        <title>Intersection </title>\n        <meta name="intersection-mode" content=' +
                                    r +
                                    '>\n        <meta name="intersection-appId" content=' +
                                    i +
                                    '>\n      </head>\n      <body></body>\n    </html>\n    '
                            ),
                            e.close();
                    }),
                    (t.injectIntersectionScripts = function(e) {
                        var t = this.createScriptTag(To.intersection_js),
                            n = this.createScriptTag(To.intersection_styles);
                        e.contentWindow.document.head.appendChild(t),
                            e.contentWindow.document.head.appendChild(n);
                    }),
                    (t.injectEmberApp = function(e, t) {
                        var n = this.window.document.getElementById('intersection-frame');
                        this.injectFrameTemplate(n.contentDocument, e, t),
                            this.injectIntersectionScripts(n);
                    }),
                    e
                );
            })();
        Object(r.a)(window),
            Object(i.a)(window),
            (window.requestAnimationFrame =
                window.parent.requestAnimationFrame || window.requestAnimationFrame);
        var wo = parent;
        Object(jn.a)(window);
        var Ro = new mo(wo);
        Object(jn.b)(Ro.session.store);
        var Ao = bo(Ro),
            jo = Oo(wo);
        So(Ao, wo), _o(Ao, wo), jo || Ao('boot'), new Io(wo);
    },
});
