(window.webpackJsonp = window.webpackJsonp || []).push([
    [2],
    {
        462: function(e, t, r) {
            'use strict';
            var a = r(433),
                i = r.n(a),
                n = r(461),
                o = r(641),
                s = r(497);
            class user_avatar_UserAvatar extends a.PureComponent {
                getAvatarLabel() {
                    const { firstName: e } = this.props.user;
                    return `${e || 'User'} profile`;
                }
                render() {
                    const { size: e } = this.props,
                        { initial: t } = this.props.user;
                    return t
                        ? i.a.createElement(
                              s.a,
                              {
                                  size: e,
                                  initial: !0,
                                  user: !0,
                                  role: 'img',
                                  'aria-label': this.getAvatarLabel(),
                              },
                              t
                          )
                        : null;
                }
            }
            r.d(t, 'a', function() {
                return author_avatar_AuthorAvatar;
            });
            class author_avatar_AuthorAvatar extends a.PureComponent {
                renderTeamAvatar(e) {
                    return i.a.createElement(o.a, { admins: e });
                }
                renderAdminAvatar(e) {
                    return i.a.createElement(n.a, { admin: e, size: this.props.size });
                }
                renderUserAvatar(e) {
                    return i.a.createElement(user_avatar_UserAvatar, {
                        user: e,
                        size: this.props.size,
                    });
                }
                render() {
                    const e = this.props.author;
                    switch (e.type) {
                        case 'team':
                            return this.renderTeamAvatar(e.admins);
                        case 'admin':
                            return this.renderAdminAvatar(e);
                        case 'user':
                            return this.renderUserAvatar(e);
                        default:
                            return this.renderAdminAvatar(e);
                    }
                }
            }
        },
        469: function(e, t, r) {
            'use strict';
            r.d(t, 'f', function() {
                return o;
            }),
                r.d(t, 'e', function() {
                    return s;
                }),
                r.d(t, 'd', function() {
                    return l;
                }),
                r.d(t, 'c', function() {
                    return c;
                }),
                r.d(t, 'a', function() {
                    return p;
                }),
                r.d(t, 'b', function() {
                    return u;
                });
            var a = r(29);
            const i = { s: 1e3, m: 60, h: 60, d: 24, w: 7 };
            function n(e) {
                let t = new Date() - e;
                t = Math.max(0, t);
                let r = 's';
                for (const e in i) {
                    if (t < i[e]) break;
                    (r = e), (t /= i[e]);
                }
                return (t = Math.floor(t)), { unit: r, delta: t };
            }
            function o(e) {
                if (!e) return '';
                if (
                    !(function(e) {
                        return 'Invalid Date' !== e.toString();
                    })(e)
                )
                    return '';
                const { unit: t, delta: r } = n(e);
                return 's' === t
                    ? Object(a.e)('time_just_now')
                    : 'm' === t
                    ? Object(a.e)('time_minute_ago', { delta: r })
                    : 'h' === t
                    ? Object(a.e)('time_hour_ago', { delta: r })
                    : 'd' === t
                    ? Object(a.e)('time_day_ago', { delta: r })
                    : 'w' === t
                    ? Object(a.e)('time_week_ago', { delta: r })
                    : void 0;
            }
            function s(e) {
                const { unit: t, delta: r } = n(e);
                return 's' === t || ('m' === t && r <= 15)
                    ? Object(a.e)('updated_in_the_last_15m')
                    : 'm' === t
                    ? Object(a.e)('updated_in_the_last_hour')
                    : 'h' === t
                    ? Object(a.e)('updated_today')
                    : 'd' === t && 1 === r
                    ? Object(a.e)('updated_yesterday')
                    : 'd' === t
                    ? Object(a.e)('updated_this_week')
                    : Object(a.e)('updated_over_a_week_ago');
            }
            function l(e) {
                const t = (new Date().getTime() - e.getTime()) / 6e4;
                if (t <= 15) return Object(a.e)('active_15m_ago', { minutes: 15 });
                if (t <= 37) return Object(a.e)('active_minute_ago', { minutes: 30 });
                if (t <= 52) return Object(a.e)('active_minute_ago', { minutes: 45 });
                if (t <= 90) return Object(a.e)('active_hour_ago', { hours: 1 });
                if (t <= 1410) {
                    const e = Math.round((t - 1) / 60);
                    return Object(a.e)('active_hour_ago', { hours: e });
                }
                if (t <= 1470) return Object(a.e)('active_day_ago', { days: 1 });
                if (t <= 8640) {
                    const e = Math.round((t - 1) / 1440);
                    return Object(a.e)('active_day_ago', { days: e });
                }
                return Object(a.e)('active_week_ago');
            }
            function c(e, t) {
                return e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
            }
            const d = e => `00${e}`.substr(-2);
            function p(e) {
                if (!e) return null;
                if ('en' !== Object(a.a)()) return `${d(e.getHours())}:${d(e.getMinutes())}`;
                let t = e.getHours();
                return (
                    0 === t && (t = 12),
                    (t = t > 12 ? t % 12 : t),
                    `${t}:${d(e.getMinutes())} ${e.getHours() < 12 ? 'am' : 'pm'}`
                );
            }
            function u(e, t) {
                const r = e.valueOf() + 60 * e.getTimezoneOffset() * 1e3;
                return p(new Date(r + 1e3 * t));
            }
        },
        470: function(e, t, r) {
            'use strict';
            r.d(t, 'a', function() {
                return AuthoredContainer;
            });
            var a,
                i,
                n,
                o = r(433),
                s = r.n(o),
                l = r(549),
                c = r(462),
                d = r(467);
            class AuthoredContainer extends o.Component {
                render() {
                    const {
                        appName: e,
                        author: t,
                        isReplyStyle: r,
                        lastActiveAt: a,
                        isActive: i,
                    } = this.props;
                    return s.a.createElement(
                        d.b,
                        { className: 'intercom-authored-container' },
                        s.a.createElement(
                            d.c,
                            null,
                            s.a.createElement(d.a, null, s.a.createElement(c.a, { author: t })),
                            s.a.createElement(l.a, {
                                author: t,
                                appName: e,
                                isReplyStyle: r,
                                lastActiveAt: a,
                                isActive: i,
                            })
                        ),
                        this.props.children
                    );
                }
            }
            (n = { isReplyStyle: !1 }),
                (i = 'defaultProps') in (a = AuthoredContainer)
                    ? Object.defineProperty(a, i, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (a[i] = n);
        },
        473: function(e, t, r) {
            'use strict';
            r.d(t, 'h', function() {
                return l;
            }),
                r.d(t, 'a', function() {
                    return c;
                }),
                r.d(t, 'b', function() {
                    return p;
                }),
                r.d(t, 'c', function() {
                    return u;
                }),
                r.d(t, 'd', function() {
                    return m;
                }),
                r.d(t, 'e', function() {
                    return b;
                }),
                r.d(t, 'i', function() {
                    return f;
                }),
                r.d(t, 'j', function() {
                    return y;
                }),
                r.d(t, 'g', function() {
                    return v;
                }),
                r.d(t, 'f', function() {
                    return C;
                });
            var a = r(434),
                i = r(435);
            const n = Object(a.d)('0%{opacity:0;}70%{opacity:0;}100%{opacity:1;}'),
                o = e =>
                    Object(a.b)(
                        'position:relative;float:left;display:inline-block;cursor:pointer;opacity:0.8;transition:opacity 200ms ease;height:51px;margin-top:2px;&:hover{opacity:1;}&:before{position:absolute;top:20px;background-position:center;}svg{position:absolute;top:18px;}svg path{fill:',
                        e.inputPlaceholder,
                        ';}'
                    );
            var s = { name: '1h3f2ms', styles: 'textarea:focus{box-shadow:none;}' };
            const l = Object(a.c)('div', { target: 'eoxa25q0' })(
                    'position:absolute;bottom:0;left:0;right:0;min-height:56px;max-height:200px;border-top:1px solid ',
                    Object(a.f)('composerBorder'),
                    ';textarea,pre{box-sizing:border-box;padding:18px;padding-right:100px;padding-left:',
                    29,
                    'px;width:100%;height:100%;font-family:',
                    Object(a.f)('fontSansSerif'),
                    ';font-size:',
                    14,
                    'px;font-weight:',
                    'normal',
                    ';line-height:',
                    1.33,
                    ';background-color:',
                    Object(a.f)('white'),
                    ';white-space:pre;white-space:pre-wrap;word-wrap:break-word;}textarea{&::placeholder{color:',
                    Object(a.f)('inputPlaceholder'),
                    ';font-style:',
                    Object(a.f)('fontSansSerif'),
                    ';font-size:',
                    14,
                    'px;font-weight:',
                    'normal',
                    ';line-height:',
                    1.33,
                    ';}position:absolute;bottom:0;left:0;color:',
                    Object(a.f)('black'),
                    ';resize:none;border:none;transition:background-color ease 200ms,box-shadow ease 200ms;outline-offset:-5px;&:focus{background-color:',
                    Object(a.f)('white'),
                    ';box-shadow:0px 0px 100px 0px ',
                    Object(a.f)('composerShadowColor'),
                    ';}}pre{visibility:hidden;}',
                    ({ theme: e, isBorderless: t }) =>
                        t &&
                        Object(a.b)(
                            'position:relative;border-radius:',
                            e.notificationBorderRadiusPx,
                            'px;box-shadow:',
                            e.notificationBoxShadow,
                            ';border-top:none;animation:',
                            n,
                            ' 750ms ease;textarea,pre{padding-left:21px;border-radius:',
                            e.notificationBorderRadiusPx,
                            'px;}textarea:focus{box-shadow:none;}'
                        ),
                    ' ',
                    ({ theme: e }) =>
                        e.isMobileSize &&
                        Object(a.b)('textarea{background-color:', e.inputBackground, ';}'),
                    ' ',
                    ({ hasComposerSuggestionsLoading: e, hasComposerSuggestions: t }) =>
                        (e || t) && s,
                    ' @media (-ms-high-contrast:active){border:1px solid white;}'
                ),
                c = Object(a.c)('div', { target: 'eoxa25q1' })(
                    'position:absolute;top:0;right:',
                    21,
                    'px;',
                    ({ isBorderless: e }) => e && Object(a.b)('right:', 24, 'px;')
                ),
                d = ({ theme: e, showEmojiPicker: t, isPrimaryColorReadable: r }) =>
                    Object(a.b)(
                        o(e),
                        ' width:',
                        18,
                        'px;padding-left:',
                        8,
                        'px;padding-right:',
                        8,
                        'px;svg{height:18px;width:18px;}',
                        t && Object(a.b)('svg path{fill:', r ? e.appColor : e.grey, ';}')
                    ),
                p = Object(a.c)('button', { target: 'eoxa25q2' })(d),
                u = Object(a.c)('span', { target: 'eoxa25q3' })(d),
                h = ({ theme: e, showGifPicker: t, isPrimaryColorReadable: r }) =>
                    Object(a.b)(
                        o(e),
                        ' width:',
                        29,
                        'px;padding-left:',
                        8,
                        'px;padding-right:',
                        8,
                        'px;svg{height:18px;}',
                        t && Object(a.b)('svg path{fill:', r ? e.appColor : e.grey, ';}')
                    ),
                m = Object(a.c)('button', { target: 'eoxa25q4' })(h),
                b = Object(a.c)('span', { target: 'eoxa25q5' })(h),
                g = ({ theme: e }) =>
                    Object(a.b)(
                        o(e),
                        ' width:',
                        18,
                        'px;padding-left:',
                        8,
                        'px;padding-right:',
                        8,
                        'px;svg{height:18px;width:18px;}'
                    ),
                f = Object(a.c)('div', { target: 'eoxa25q6' })(g),
                y = Object(a.c)('span', { target: 'eoxa25q7' })(g),
                v = Object(a.c)('button', { target: 'eoxa25q8' })(
                    ({ theme: e }) => o(e),
                    ' ',
                    i.i,
                    ' width:',
                    15,
                    'px;padding-left:',
                    8,
                    'px;padding-right:',
                    8,
                    'px;top:1px;svg{height:16px;width:15px;}',
                    ({ theme: e, isPrimaryColorReadable: t }) =>
                        Object(a.b)('svg path{fill:', t ? e.appColor : e.grey, ';}')
                ),
                C = Object(a.c)('span', { target: 'eoxa25q9' })({
                    name: '1baulvz',
                    styles: 'display:inline-block;',
                });
        },
        475: function(e, t, r) {
            'use strict';
            var a = r(59),
                i = r.n(a),
                n = r(515),
                o = r.n(n);
            const s = e => {
                const t = i()(e)
                    .replace('&nbsp;', '')
                    .trim();
                return o.a.isSupportedUnicode(t) || o.a.isSupportedAscii(t);
            };
            var l = r(33);
            r.d(t, 'c', function() {
                return c;
            }),
                r.d(t, 'a', function() {
                    return d;
                }),
                r.d(t, 'b', function() {
                    return p;
                });
            const c = e =>
                    ('paragraph' === e.type && s(e.text)) ||
                    ('html' === e.type && s(e.content)) ||
                    ('rawContent' === e.type && s(e.content)),
                d = e => !!e && 1 === e.length && (Object(l.f)(e[0]) || c(e[0])),
                p = e => d(e) && Object(l.g)(e[0]);
        },
        486: function(e, t, r) {
            'use strict';
            r.d(t, 'h', function() {
                return o;
            }),
                r.d(t, 'a', function() {
                    return l;
                }),
                r.d(t, 'g', function() {
                    return p;
                }),
                r.d(t, 'b', function() {
                    return u;
                }),
                r.d(t, 'c', function() {
                    return h;
                }),
                r.d(t, 'i', function() {
                    return m;
                }),
                r.d(t, 'e', function() {
                    return g;
                }),
                r.d(t, 'd', function() {
                    return f;
                }),
                r.d(t, 'f', function() {
                    return v;
                }),
                r.d(t, 'j', function() {
                    return C;
                });
            var a = r(434),
                i = r(450),
                n = { name: 'j4glon', styles: 'padding:16px 24px;margin:0 -24px;' };
            const o = Object(a.c)('div', { target: 'ec1npt30' })(
                'display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;align-content:stretch;position:relative;padding:24px;outline-offset:-5px;',
                ({ isUnread: e, theme: t }) =>
                    e &&
                    Object(a.b)(
                        'background-color:',
                        t.isPrimaryColorLight ? t.unreadBackgroundLight : t.unreadBackground,
                        ';'
                    ),
                ' &,*{cursor:pointer;}&:hover{',
                ({ theme: e }) =>
                    Object(a.b)(
                        'background-color:',
                        e.isPrimaryColorLight ? e.backgroundHoverLight : e.backgroundHover,
                        ';'
                    ),
                "}&:after{content:'';position:absolute;height:100%;left:0;right:0;top:0;border-top:1px solid ",
                Object(a.f)('dividerBorder'),
                ';',
                ({ isUnread: e, theme: t }) =>
                    e && Object(a.b)('border-top:1px solid ', t.white, ';'),
                "}&:before{content:'';position:absolute;height:100%;left:0;right:0;top:0;border-top:2px solid transparent;}&:first-of-type{&:after{border-top:none;}}&:last-child{&:after{border-bottom:1px solid ",
                Object(a.f)('dividerBorder'),
                ';',
                ({ isUnread: e, theme: t }) =>
                    e && Object(a.b)('border-bottom:1px solid ', t.white, ';'),
                '}}',
                ({ isCompact: e }) => e && n
            );
            var s = { name: '1dhi8d0', styles: 'left:15px;' };
            const l = Object(a.c)('div', { target: 'ec1npt31' })(
                'flex:0 0 auto;',
                ({ isCompact: e }) => e && s
            );
            var c = { name: '35ezg3', styles: 'font-weight:600;' },
                d = { name: 'gx0lhm', styles: 'margin-bottom:0;' };
            const p = Object(a.c)('div', { target: 'ec1npt32' })(
                    'font-size:14px;margin-bottom:8px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;',
                    ({ theme: e }) => Object(a.b)('color:', e.inputPlaceholder, ';'),
                    ' ',
                    ({ isCompact: e }) => e && d,
                    ' ',
                    ({ isUnread: e }) => e && c
                ),
                u = Object(a.c)('div', { target: 'ec1npt33' })({
                    name: '7sdh8r',
                    styles: 'flex:1;padding-left:16px;padding-right:8px;min-width:0;',
                }),
                h = Object(a.c)('div', { target: 'ec1npt34' })(
                    'transform:rotate(',
                    a.f.isRtlLocale ? '0' : '180deg',
                    ');& svg > g > g{fill:',
                    Object(a.f)('linkColor'),
                    ';}'
                ),
                m = Object(a.c)('span', { target: 'ec1npt35' })({
                    name: '15fzge',
                    styles: 'margin-left:4px;',
                });
            var b = { name: '35ezg3', styles: 'font-weight:600;' };
            const g = Object(a.c)('div', { target: 'ec1npt36' })(
                    'color:rgba(58,60,76,1);font-size:13px;display:flex;',
                    ({ isUnread: e }) => e && b,
                    ' span{display:inline-block;}'
                ),
                f = Object(a.c)('span', { target: 'ec1npt37' })(
                    'flex:0 0 auto;color:',
                    Object(a.f)('black'),
                    ';white-space:pre;'
                );
            var y = { name: '1msjh1x', styles: 'font-style:italic;' };
            const v = Object(a.c)(i.a, { target: 'ec1npt38' })(
                    'white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:',
                    Object(a.f)('black'),
                    ';',
                    ({ isSingleBlock: e }) => e && y
                ),
                C = Object(a.c)('span', { target: 'ec1npt39' })(
                    'position:absolute;background-color:',
                    Object(a.f)('unreadDot'),
                    ";width:6px;height:6px;border-radius:50%;content:'';left:9px;top:calc(50% - 3px);"
                );
        },
        487: function(e, t, r) {
            'use strict';
            r.d(t, 'a', function() {
                return Scrollable;
            });
            var a = r(433),
                i = r.n(a),
                n = r(20),
                o = r(519),
                s = r(493);
            function l(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            class Scrollable extends a.Component {
                constructor(...e) {
                    super(...e),
                        l(this, 'state', { scrollable: !1, scrolled: !1 }),
                        l(this, 'scrollable', void 0),
                        l(
                            this,
                            'handleScroll',
                            Object(o.b)(e => {
                                const { scrollTop: t } = e.target;
                                this.setState({ scrolled: t > 0 });
                                const { onScroll: r } = this.props;
                                r && r(e);
                            }, 17)
                        );
                }
                componentDidUpdate() {
                    this.handleScrollable();
                }
                componentDidMount() {
                    this.handleScrollable();
                }
                handleScrollable() {
                    const { onScrollable: e } = this.props;
                    !this.state.scrollable &&
                        this.isScrollable() &&
                        (this.setState({ scrollable: !0 }),
                        this.scrollable && e && e(this.scrollable));
                }
                isScrollable() {
                    return (
                        !!this.scrollable &&
                        this.scrollable.scrollHeight > this.scrollable.clientHeight
                    );
                }
                render() {
                    return i.a.createElement(
                        s.a,
                        {
                            className: 'intercom-scrollable',
                            isInsideModal: this.props.isInsideModal,
                            onScroll: this.handleScroll,
                            onWheel: n.d,
                            tabIndex: this.state.scrollable ? '0' : '-1',
                            ref: e => (this.scrollable = e),
                        },
                        this.props.children
                    );
                }
            }
        },
        488: function(e, t, r) {
            'use strict';
            r.d(t, 'v', function() {
                return g;
            }),
                r.d(t, 't', function() {
                    return f;
                }),
                r.d(t, 'w', function() {
                    return y;
                }),
                r.d(t, 'j', function() {
                    return v;
                }),
                r.d(t, 'h', function() {
                    return C;
                }),
                r.d(t, 'b', function() {
                    return x;
                }),
                r.d(t, 'a', function() {
                    return j;
                }),
                r.d(t, 'l', function() {
                    return O;
                }),
                r.d(t, 'p', function() {
                    return w;
                }),
                r.d(t, 'm', function() {
                    return S;
                }),
                r.d(t, 'n', function() {
                    return P;
                }),
                r.d(t, 'u', function() {
                    return A;
                }),
                r.d(t, 'x', function() {
                    return B;
                }),
                r.d(t, 'k', function() {
                    return I;
                }),
                r.d(t, 'y', function() {
                    return N;
                }),
                r.d(t, 'o', function() {
                    return z;
                }),
                r.d(t, 'g', function() {
                    return q;
                }),
                r.d(t, 'd', function() {
                    return L;
                }),
                r.d(t, 'c', function() {
                    return U;
                }),
                r.d(t, 'f', function() {
                    return H;
                }),
                r.d(t, 'e', function() {
                    return W;
                }),
                r.d(t, 'q', function() {
                    return V;
                }),
                r.d(t, 'r', function() {
                    return $;
                }),
                r.d(t, 's', function() {
                    return Y;
                }),
                r.d(t, 'i', function() {
                    return J;
                });
            var a = r(434),
                i = r(435),
                n = r(778),
                o = r.n(n),
                s = r(779),
                l = r.n(s),
                c = r(780),
                d = r.n(c),
                p = r(781),
                u = r.n(p),
                h = r(607),
                m = { name: '15z6b27', styles: 'margin-top:0;margin-bottom:5px;' },
                b = { name: '1ab756r', styles: 'margin-top:5px;margin-bottom:0;' };
            const g = Object(a.c)('div', { target: 'eoh7gg00' })(
                    'margin:30px 0 30px 0;padding:16px 20px 20px;color:',
                    Object(a.f)('black'),
                    ';position:relative;border-radius:5px;text-align:left;background-color:',
                    Object(a.f)('white'),
                    ';',
                    ({ isBorderless: e, lastPart: t }) => e && t && b,
                    ' ',
                    ({ isBorderless: e, nextPartByAdmin: t }) => e && t && m,
                    ' ',
                    ({ isSuccessful: e }) =>
                        e &&
                        Object(a.b)(
                            B.className,
                            '{position:absolute;top:0;opacity:0;visibility:hidden;max-height:24px;}',
                            N.className,
                            '{position:static;opacity:1;visibility:visible;max-height:48px;}'
                        )
                ),
                f = Object(a.c)('span', { target: 'eoh7gg01' })(
                    'font-size:13px;line-height:20px;color:',
                    Object(a.f)('metaText'),
                    ';margin-right:39px;&:last-child{margin-right:0;}&:hover{color:',
                    Object(a.f)('itemHover'),
                    ';border-bottom:1px solid;}',
                    ({ theme: e, isSelected: t }) =>
                        t && Object(a.b)('color:', e.bodyText, ';border-bottom:1px solid;')
                ),
                y = Object(a.c)('div', { target: 'eoh7gg02' })({
                    name: 'gs1lf3',
                    styles: 'position:relative;margin-bottom:5px;',
                }),
                v = Object(a.c)('div', { target: 'eoh7gg03' })(
                    'width:100%;position:relative;float:left;',
                    g.className,
                    '{margin-top:6px;margin-bottom:0;margin-left:45px;padding-left:0;}',
                    f.className,
                    '{margin-right:19px;}',
                    ({ isBorderless: e }) =>
                        e &&
                        Object(a.b)(
                            g.className,
                            '{margin-left:45px;}',
                            f.className,
                            '{margin-right:9px;}'
                        )
                ),
                C = Object(a.c)('div', { target: 'eoh7gg04' })({
                    name: 'p3nxzx',
                    styles:
                        'margin-top:8px;margin-bottom:8px;width:100%;position:relative;float:left;',
                }),
                x = Object(a.c)('div', { target: 'eoh7gg05' })(
                    'padding:26px 24px 24px;margin-left:48px;border-radius:3px;font-size:14px;line-height:1.4;color:',
                    Object(a.f)('bodyText'),
                    ';overflow:hidden;',
                    i.e,
                    ' ',
                    ({ theme: e, isBorderless: t }) =>
                        t &&
                        Object(a.b)(
                            'box-shadow:',
                            e.notificationBoxShadow,
                            ';border-color:',
                            e.white,
                            ';background-color:',
                            e.white,
                            ';margin-left:45px;'
                        )
                ),
                j = Object(a.c)('div', { target: 'eoh7gg06' })({
                    name: '1qgk0pb',
                    styles: 'position:absolute;left:0;bottom:10px;',
                }),
                O = Object(a.c)('div', { target: 'eoh7gg07' })({
                    name: 'cy0b9q',
                    styles:
                        'position:relative;display:table;width:100%;div{display:table-cell;vertical-align:top;}',
                });
            var E = { name: 'xxxqxo', styles: 'width:1px;transition:width 300ms 1000ms;' };
            const w = Object(a.c)('div', { target: 'eoh7gg08' })(
                    'width:40px;',
                    ({ hasChannel: e }) => e && E
                ),
                S = Object(a.c)(h.a, { target: 'eoh7gg09' })({
                    name: 'i2cysd',
                    styles:
                        'position:absolute;top:12px;left:12px;z-index:1;transition:transform 300ms;',
                });
            var k = {
                    name: 'tvy5p1',
                    styles: 'input{border:1px solid #fcedef;background-color:#fcedef;}',
                },
                _ = { name: '1tepm2d', styles: 'input{padding-left:33px;}' };
            const P = Object(a.c)('div', { target: 'eoh7gg010' })(
                'position:relative;input{position:absolute;box-sizing:border-box;height:40px;width:100%;padding:0 12px;font-size:14px;font-family:',
                Object(a.f)('fontSansSerif'),
                ';color:',
                Object(a.f)('inputText'),
                ';border-radius:4px 0 0 4px;border:1px solid ',
                Object(a.f)('inputBorder'),
                ';border-right:0;appearance:none;transition:border 300ms,color 400ms 600ms,padding 300ms 600ms,height 400ms 1000ms;&:disabled{opacity:0.7;}}',
                ({ isPhone: e }) => e && _,
                ' ',
                ({ hasError: e }) => e && k,
                ' ',
                ({ theme: e, isSuccessful: t }) =>
                    t &&
                    Object(a.b)(
                        'input{border:1px solid ',
                        e.white,
                        ';border-right:0;padding:0;height:20px;font-weight:400;color:',
                        e.bodyText,
                        ';text-fill-color:',
                        e.bodyText,
                        ';overflow:hidden;text-overflow:ellipsis;&:autofill{box-shadow:0 0 0px 1000px ',
                        e.white,
                        ' inset;text-fill-color:',
                        e.bodyText,
                        ' !important;}}',
                        S.className,
                        '{transform:scale(0);}'
                    )
            );
            var T = { name: '127uohz', styles: 'padding-left:33px;' };
            const A = Object(a.c)('span', { target: 'eoh7gg011' })(
                'position:absolute;box-sizing:border-box;height:40px;width:100%;padding:4px 12px 0;font-size:14px;font-weight:400;font-family:',
                Object(a.f)('fontSansSerif'),
                ';line-height:32px;color:',
                Object(a.f)('inputPlaceholder'),
                ';cursor:text;overflow:hidden;text-overflow:ellipsis;z-index:1;',
                ({ isPhone: e }) => e && T
            );
            var R = { name: 'whh5e5', styles: 'opacity:1;' };
            const B = Object(a.c)('div', { target: 'eoh7gg012' })(
                    'font-size:14px;line-height:24px;color:',
                    Object(a.f)('bodyText'),
                    ';transition:opacity 300ms 1000ms,max-height 400ms 1000ms;position:static;max-height:48px;',
                    ({ isSuccessful: e }) => e && R
                ),
                I = Object(a.c)('div', { target: 'eoh7gg013' })(
                    'font-size:14px;line-height:19px;color:',
                    Object(a.f)('metaText'),
                    ';text-overflow:ellipsis;overflow:hidden;'
                ),
                N = Object(a.c)('div', { target: 'eoh7gg014' })(
                    'font-size:14px;line-height:24px;color:',
                    Object(a.f)('bodyText'),
                    ';transition:opacity 300ms 1000ms,max-height 400ms 1000ms;position:absolute;top:0;opacity:0;visibility:hidden;max-height:24px;'
                );
            var M = { name: 'sllbpf', styles: 'opacity:0.7;' };
            const z = Object(a.c)('div', { target: 'eoh7gg015' })(
                'width:35px;height:40px;border-radius:0 4px 4px 0;background-color:',
                Object(a.f)('appColor'),
                ';box-shadow:0 1px 2px 0 rgba(0,0,0,0.15);transition:border-radius 300ms,opacity 300ms 600ms,height 400ms 1000ms;&:hover{opacity:0.7;}',
                ({ isDisabled: e }) => e && M,
                ' ',
                ({ hasChannel: e }) =>
                    e &&
                    Object(a.b)(
                        'background-color:#38a652;opacity:0;border-radius:4px;height:20px;&:hover{opacity:0;}',
                        V.className,
                        '{opacity:0;transform:rotate(270deg) translate(-4px,-3px);}',
                        $.className,
                        '{opacity:1;transform:rotate(0deg) scale(1);}'
                    )
            );
            var D = {
                name: 'xfpdpv',
                styles:
                    '.intercom-notification-channel-collector-card-controls-prompt{position:absolute;top:0;opacity:0;visibility:hidden;max-height:24px;}.intercom-notification-channel-collector-card-controls-message{position:static;opacity:1;visibility:visible;max-height:48px;}.intercom-notification-channel-collector-card-controls-channels{height:0;opacity:0;}',
            };
            const q = Object(a.c)('div', { target: 'eoh7gg016' })(({ isSaved: e }) => e && D),
                L = Object(a.c)('div', { target: 'eoh7gg017' })(
                    'font-size:13px;line-height:20px;height:30px;color:',
                    Object(a.f)('metaText'),
                    ';transition:opacity 300ms 300ms,height 400ms 1000ms;'
                ),
                U = Object(a.c)('span', { target: 'eoh7gg018' })(
                    'margin-right:20px;color:',
                    Object(a.f)('grey'),
                    ';&:hover{color:',
                    Object(a.f)('inputText'),
                    ';border-bottom:1px solid;}',
                    ({ theme: e, isSelected: t }) =>
                        t && Object(a.b)('color:', e.inputText, ';border-bottom:1px solid;')
                ),
                F = ({ theme: e }) =>
                    Object(a.b)(
                        'margin-bottom:6px;font-size:14px;line-height:24px;max-height:48px;color:',
                        e.bodyText,
                        ';transition:opacity 300ms 1000ms,max-height 400ms 1000ms;'
                    ),
                H = Object(a.c)('div', { target: 'eoh7gg019' })(F),
                W = Object(a.c)('div', { target: 'eoh7gg020' })(
                    F,
                    ' position:absolute;top:0;opacity:0;visibility:hidden;max-height:24px;'
                ),
                G = {
                    name: '1w32lhw',
                    styles:
                        'position:absolute;top:0;bottom:0;width:35px;height:40px;transition:transform 300ms linear,opacity 150ms linear;background-position:center;background-repeat:no-repeat;',
                },
                V = Object(a.c)('div', { target: 'eoh7gg021' })(
                    G,
                    ' ',
                    Object(i.b)(o.a, l.a, '8px', '13px'),
                    ' opacity:1;'
                ),
                $ = Object(a.c)('div', { target: 'eoh7gg022' })(
                    G,
                    ' ',
                    Object(i.b)(d.a, u.a, '18px', '14px'),
                    ' opacity:0;transform:rotate(-90deg) scale(0.5);'
                );
            var K = { name: '12bfhs7', styles: 'height:0;opacity:0;' };
            const Y = Object(a.c)('div', { target: 'eoh7gg023' })(
                'height:30px;opacity:1;transition:opacity 300ms 300ms,height 400ms 1000ms;',
                ({ isSuccessful: e }) => e && K
            );
            var X = { name: '1qgk0pb', styles: 'position:absolute;left:0;bottom:10px;' };
            const J = Object(a.c)('div', { target: 'eoh7gg024' })(({ isBorderless: e }) => !e && X);
        },
        489: function(e, t, r) {
            'use strict';
            var a = r(434),
                i = r(618),
                n = r(433),
                o = r.n(n);
            function s() {
                return (s =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var a in r)
                                Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function l(e) {
                return o.a.createElement(
                    'svg',
                    s(
                        {
                            focusable: 'false',
                            'aria-hidden': 'true',
                            width: '8',
                            height: '8',
                            viewBox: '0 0 8 8',
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                        },
                        e
                    ),
                    o.a.createElement('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d:
                            'M8 7.23251L7.23251 8L4 4.76749L0.767492 8L0 7.23251L3.23251 4L0 0.767492L0.767492 0L4 3.23251L7.23251 0L8 0.767492L4.76749 4L8 7.23251Z',
                        fill: 'white',
                    })
                );
            }
            r.d(t, 'c', function() {
                return h;
            }),
                r.d(t, 'm', function() {
                    return m;
                }),
                r.d(t, 'k', function() {
                    return b;
                }),
                r.d(t, 'd', function() {
                    return g;
                }),
                r.d(t, 'l', function() {
                    return y;
                }),
                r.d(t, 'a', function() {
                    return v;
                }),
                r.d(t, 'b', function() {
                    return C;
                }),
                r.d(t, 'j', function() {
                    return O;
                }),
                r.d(t, 'i', function() {
                    return E;
                }),
                r.d(t, 'h', function() {
                    return w;
                }),
                r.d(t, 'e', function() {
                    return S;
                }),
                r.d(t, 'g', function() {
                    return k;
                }),
                r.d(t, 'f', function() {
                    return _;
                });
            const c = Object(a.d)('0%{opacity:0;}70%{opacity:0;}100%{opacity:1;}');
            var d = {
                    name: '13eeko5',
                    styles: '/* @noflip */ padding:0 0 0 45px;margin:0;background:none;',
                },
                p = {
                    name: '10dtuyw',
                    styles:
                        'z-index:2;margin-top:3px;box-shadow:inset 0px 9px 8px -10px rgba(38,76,152,0.2),inset 0px -9px 8px -10px rgba(38,76,152,0.2);background:#fafafa;',
                },
                u = { name: 'g6rjc4', styles: 'padding-top:13px;padding-bottom:6px;' };
            const h = Object(a.c)('div', { target: 'e1y2xk9v0' })(
                    'position:relative;background:rgba(0,0,0,0);padding:0 26px;margin-bottom:-3px;position:relative;transition:padding 100ms,background 100ms,box-shadow 100ms;',
                    ({ suggestionsVisible: e }) => e && u,
                    ' ',
                    ({ suggestionsVisible: e, isTypeaheadSuggestions: t, isBorderless: r }) =>
                        e && t && !r && p,
                    ' ',
                    ({ isBorderless: e }) => e && d,
                    ' ',
                    ({ isBorderless: e, suggestionsVisible: t }) =>
                        e && t && Object(a.b)('padding-top:10px;animation:', c, ' 750ms ease;')
                ),
                m = Object(a.c)('h3', { target: 'e1y2xk9v1' })(
                    'display:block;color:',
                    Object(a.f)('grey'),
                    ';font-size:14px;padding:8px 5px;/* @noflip */ text-align:right;'
                ),
                b = Object(a.c)('div', { target: 'e1y2xk9v2' })({
                    name: 'xbrvud',
                    styles: 'border-top:none;position:relative;',
                }),
                g = 600;
            var f = { name: '3dmdqb', styles: 'transition:none;' };
            const y = Object(a.c)('div', { target: 'e1y2xk9v3' })(
                    'position:relative;transition:height ',
                    g,
                    'ms;overflow:hidden;height:',
                    Object(a.e)('height'),
                    'px;',
                    ({ isInboundBot: e }) => e && f
                ),
                v = 10,
                C = 10;
            var x = { name: '1baulvz', styles: 'display:inline-block;' },
                j = { name: '13o7eu2', styles: 'display:block;' };
            const O = Object(a.c)(i.a, { target: 'e1y2xk9v4' })(
                    'position:absolute;/* @noflip */ right:0;top:0;font-size:14px;line-height:18px;padding:',
                    C,
                    'px;border-radius:6px;background-color:',
                    Object(a.f)('quickReplyBackgroundColor'),
                    ';color:',
                    Object(a.f)('quickReplyTextColor'),
                    ';',
                    ({ isTypeaheadSuggestion: e }) => (e ? j : x),
                    ' &:hover{background-color:',
                    Object(a.f)('appColor'),
                    ';color:',
                    Object(a.f)('white'),
                    ';}',
                    ({ theme: e }) =>
                        'light' === e.primaryType && Object(a.b)('&:hover{color ', e.black, '}')
                ),
                E = Object(a.c)('div', { target: 'e1y2xk9v5' })({
                    name: '36wep1',
                    styles:
                        'position:absolute;visibility:hidden;pointer-events:none;opacity:0;left:0;right:0;height:0;',
                }),
                w = Object(a.c)('div', { target: 'e1y2xk9v6' })({
                    name: '1baulvz',
                    styles: 'display:inline-block;',
                }),
                S = Object(a.c)('div', { target: 'e1y2xk9v7' })({
                    name: 'a3ty5u',
                    styles: 'padding:3px 0 16px;/* @noflip */ text-align:right;',
                }),
                k = Object(a.c)('div', { target: 'e1y2xk9v8' })(
                    'display:inline-block;font-size:14px;color:',
                    Object(a.f)('darkGrey'),
                    ';cursor:pointer;line-height:20px;'
                ),
                _ = Object(a.c)(l, { target: 'e1y2xk9v9' })(
                    'height:10px;width:10px;margin-left:5px;text-align:right;vertical-align:middle;cursor:pointer;path{fill:',
                    Object(a.f)('darkGrey'),
                    ';}'
                );
        },
        498: function(e, t, r) {
            'use strict';
            var a = r(433),
                i = r.n(a);
            t.a = () =>
                i.a.createElement(
                    'svg',
                    { focusable: 'false', 'aria-hidden': 'true', viewBox: '0 0 18 18' },
                    i.a.createElement('path', {
                        d:
                            'M9 0a9 9 0 1 1 0 18A9 9 0 0 1 9 0zm0 1C4.589 1 1 4.589 1 9s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM5 6.999a1 1 0 1 1 2.002.004A1 1 0 0 1 5 6.999zm5.999 0a1.002 1.002 0 0 1 2.001 0 1 1 0 1 1-2.001 0zM8.959 13.5c-.086 0-.173-.002-.26-.007-2.44-.132-4.024-2.099-4.09-2.182l-.31-.392.781-.62.312.39c.014.017 1.382 1.703 3.37 1.806 1.306.072 2.61-.554 3.882-1.846l.351-.356.712.702-.35.356c-1.407 1.427-2.886 2.15-4.398 2.15z',
                        fillRule: 'evenodd',
                    })
                );
        },
        503: function(e, t, r) {
            'use strict';
            var a = r(433),
                i = r.n(a),
                n = r(450),
                o = r(514),
                s = r(594);
            class reaction_Reaction extends a.Component {
                constructor(...e) {
                    var t, r, a;
                    super(...e),
                        (a = () => {
                            const { onReactionSelect: e, reaction: t } = this.props;
                            e(t.index);
                        }),
                        (r = 'handleClick') in (t = this)
                            ? Object.defineProperty(t, r, {
                                  value: a,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                              })
                            : (t[r] = a);
                }
                render() {
                    const { reaction: e, hasSelectedReaction: t, isSelected: r } = this.props;
                    return i.a.createElement(
                        s.a,
                        {
                            onClick: this.handleClick,
                            'aria-label': `${Object(o.b)(e.emoji)} reaction`,
                            'aria-pressed': r,
                            hasSelectedReaction: t,
                            isSelected: r,
                        },
                        i.a.createElement(n.a, { emojiImageSize: 32, text: e.emoji })
                    );
                }
            }
            var l = r(544);
            function c(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            r.d(t, 'a', function() {
                return reaction_picker_ReactionPicker;
            });
            class reaction_picker_ReactionPicker extends a.Component {
                constructor(...e) {
                    super(...e), c(this, 'composer', void 0);
                }
                componentDidMount() {
                    this.handleHeightChange();
                }
                handleHeightChange() {
                    const { onHeightChange: e } = this.props;
                    e && this.composer && e(this.composer.clientHeight);
                }
                render() {
                    const {
                        reactionSet: e,
                        onReactionSelect: t,
                        reactionIndex: r,
                        prompt: a,
                    } = this.props;
                    return i.a.createElement(
                        l.a,
                        { ref: e => (this.composer = e), hasPrompt: !!a },
                        a ? i.a.createElement(l.b, null, a) : null,
                        e.map((e, a) =>
                            i.a.createElement(reaction_Reaction, {
                                key: a,
                                onReactionSelect: t,
                                reaction: e,
                                hasSelectedReaction: null != r,
                                isSelected: r === e.index,
                            })
                        )
                    );
                }
            }
            c(reaction_picker_ReactionPicker, 'defaultProps', { reactionIndex: null });
        },
        518: function(e, t, r) {
            'use strict';
            r.d(t, 'a', function() {
                return ConversationPartMetadata;
            });
            var a = r(437),
                i = r.n(a),
                n = r(433),
                o = r.n(n),
                s = r(469),
                l = r(29),
                c = r(513);
            class ConversationPartMetadata extends n.Component {
                componentDidMount() {
                    this.interval = setInterval(() => {
                        this.forceUpdate();
                    }, 6e4);
                }
                componentWillUnmount() {
                    clearInterval(this.interval), (this.interval = null);
                }
                getAttribution() {
                    const { body: e } = this.props.part;
                    if (!e || 0 === e.length) return;
                    const { attribution: t } = e[0];
                    return t;
                }
                getSaveState() {
                    const {
                            saveState: e,
                            seenState: t,
                            createdAt: r,
                            showCreatedAt: a,
                            author: i,
                            saveFailureReason: n,
                        } = this.props.part,
                        o = a ? Object(s.f)(r) : null,
                        c = this.seenStateText(t);
                    return !i.isSelf && a
                        ? `${this.botStateText(i)}${o}.`
                        : 'saving' === e
                        ? Object(l.e)('message_state_sending')
                        : 'failed' === e
                        ? 'file_size' === n
                            ? Object(l.e)('file_too_big')
                            : Object(l.e)('failed_to_send')
                        : 'saved' === e && i.isSelf && o
                        ? `${o}. ${c}`
                        : void 0;
                }
                seenStateText(e) {
                    return 'not-seen-yet' === e
                        ? Object(l.e)('message_unseen')
                        : 'seen' === e
                        ? Object(l.e)('message_seen')
                        : '';
                }
                botStateText(e) {
                    return e.isBot ? `${Object(l.e)('bot')} · ` : '';
                }
                renderSaveState() {
                    return o.a.createElement(
                        c.c,
                        { className: 'intercom-conversation-part-metadata-save-state' },
                        this.getSaveState()
                    );
                }
                renderAttribution() {
                    const e = this.getAttribution();
                    return e
                        ? o.a.createElement(
                              c.a,
                              null,
                              Object(l.e)('gif_attribution', { providername: e })
                          )
                        : null;
                }
                render() {
                    return o.a.createElement(
                        c.b,
                        { className: 'intercom-conversation-part-metadata' },
                        this.renderAttribution(),
                        this.renderSaveState()
                    );
                }
            }
            ConversationPartMetadata.propTypes = {
                part: i.a.shape({
                    body: i.a.arrayOf(i.a.shape({ attribution: i.a.string })),
                    saveState: i.a.oneOf(['failed', 'saving', 'saved']),
                    saveFailureReason: i.a.string,
                    seenState: i.a.oneOf(['not-seen-yet', 'seen']),
                    createdAt: i.a.date,
                    showCreatedAt: i.a.bool,
                    author: i.a.shape({ isSelf: i.a.bool.isRequired }).isRequired,
                }).isRequired,
            };
        },
        519: function(e, t, r) {
            'use strict';
            r.d(t, 'b', function() {
                return s;
            }),
                r.d(t, 'a', function() {
                    return l;
                });
            var a = r(31),
                i = r.n(a),
                n = r(92),
                o = r.n(n);
            const s = (...e) => {
                    const t = o()(...e);
                    return function(e) {
                        return e.persist(), t(e);
                    };
                },
                l = (...e) => {
                    const t = i()(...e);
                    return function(e) {
                        return e.persist(), t(e);
                    };
                };
        },
        520: function(e, t, r) {
            'use strict';
            r.d(t, 'd', function() {
                return u;
            }),
                r.d(t, 'c', function() {
                    return h;
                }),
                r.d(t, 'b', function() {
                    return m;
                }),
                r.d(t, 'a', function() {
                    return b;
                });
            const a = /\s+/g,
                i = /^(00)|(\+)/i,
                n = /[^(\d|\s|\+|\.|\(|\)|\-)]/g,
                o = /\D/g,
                s = 'that_number_needs_a_prefix',
                l = 'that_number_doesnt_look_quite_right',
                c = 'that_country_code_doesnt_look_quite_right',
                d = 'that_number_is_missing_a_few_digits',
                p = 'that_number_has_too_many_digits',
                u = e => void 0 === h(e),
                h = e => {
                    if (!g(e)) return s;
                    if ((e = e.replace(i, '')).match(n)) return l;
                    if ((e = e.replace(o, '')).length > 15) return p;
                    const t = b(e);
                    return (
                        t && (e = e.substring(t.dialCode.length)), e.length < 6 ? d : t ? void 0 : c
                    );
                },
                m = e => {
                    const t = j[e];
                    return t ? `+${t.dialCode}` : '+1';
                },
                b = e => {
                    if ((e = f(e)).length < 4) return;
                    const t = y(e);
                    return x(t);
                },
                g = e => e.match(i),
                f = e =>
                    (e = (e = (e = e.replace(a, '')).replace(i, '')).replace(n, '')).slice(0, 4),
                y = e => {
                    const t = [],
                        r = Object.keys(j);
                    for (let a = 0; a <= r.length - 1; a++) {
                        const i = v(r[a]),
                            n = C(i);
                        if (n.indexOf(e) > -1) {
                            t.push(i);
                            break;
                        }
                        n.some(t => e.startsWith(t)) && t.push(i);
                    }
                    return t;
                },
                v = e => Object.assign(j[e], { code: e }),
                C = e => {
                    const { dialCode: t, areaCodes: r } = e;
                    return r ? r.map(e => `${t}${e}`) : [t];
                },
                x = e => {
                    if (1 === e.length) return e[0];
                    if (e.length > 1) {
                        if (1 === new Set(e.map(e => e.dialCode)).size)
                            return e.find(e => 0 === e.priority);
                    }
                },
                j = {
                    af: { dialCode: '93', areaCodes: null, priority: 0 },
                    al: { dialCode: '355', areaCodes: null, priority: 0 },
                    dz: { dialCode: '213', areaCodes: null, priority: 0 },
                    as: { dialCode: '1684', areaCodes: null, priority: 0 },
                    ad: { dialCode: '376', areaCodes: null, priority: 0 },
                    ao: { dialCode: '244', areaCodes: null, priority: 0 },
                    ai: { dialCode: '1264', areaCodes: null, priority: 0 },
                    ag: { dialCode: '1268', areaCodes: null, priority: 0 },
                    ar: { dialCode: '54', areaCodes: null, priority: 0 },
                    am: { dialCode: '374', areaCodes: null, priority: 0 },
                    aw: { dialCode: '297', areaCodes: null, priority: 0 },
                    au: { dialCode: '61', areaCodes: null, priority: 0 },
                    at: { dialCode: '43', areaCodes: null, priority: 0 },
                    az: { dialCode: '994', areaCodes: null, priority: 0 },
                    bs: { dialCode: '1242', areaCodes: null, priority: 0 },
                    bh: { dialCode: '973', areaCodes: null, priority: 0 },
                    bd: { dialCode: '880', areaCodes: null, priority: 0 },
                    bb: { dialCode: '1246', areaCodes: null, priority: 0 },
                    by: { dialCode: '375', areaCodes: null, priority: 0 },
                    be: { dialCode: '32', areaCodes: null, priority: 0 },
                    bz: { dialCode: '501', areaCodes: null, priority: 0 },
                    bj: { dialCode: '229', areaCodes: null, priority: 0 },
                    bm: { dialCode: '1441', areaCodes: null, priority: 0 },
                    bt: { dialCode: '975', areaCodes: null, priority: 0 },
                    bo: { dialCode: '591', areaCodes: null, priority: 0 },
                    ba: { dialCode: '387', areaCodes: null, priority: 0 },
                    bw: { dialCode: '267', areaCodes: null, priority: 0 },
                    br: { dialCode: '55', areaCodes: null, priority: 0 },
                    io: { dialCode: '246', areaCodes: null, priority: 0 },
                    vg: { dialCode: '1284', areaCodes: null, priority: 0 },
                    bn: { dialCode: '673', areaCodes: null, priority: 0 },
                    bg: { dialCode: '359', areaCodes: null, priority: 0 },
                    bf: { dialCode: '226', areaCodes: null, priority: 0 },
                    bi: { dialCode: '257', areaCodes: null, priority: 0 },
                    kh: { dialCode: '855', areaCodes: null, priority: 0 },
                    cm: { dialCode: '237', areaCodes: null, priority: 0 },
                    ca: {
                        dialCode: '1',
                        areaCodes: [
                            '204',
                            '226',
                            '236',
                            '249',
                            '250',
                            '289',
                            '306',
                            '343',
                            '365',
                            '387',
                            '403',
                            '416',
                            '418',
                            '431',
                            '437',
                            '438',
                            '450',
                            '506',
                            '514',
                            '519',
                            '548',
                            '579',
                            '581',
                            '587',
                            '604',
                            '613',
                            '639',
                            '647',
                            '672',
                            '705',
                            '709',
                            '742',
                            '778',
                            '780',
                            '782',
                            '807',
                            '819',
                            '825',
                            '867',
                            '873',
                            '902',
                            '905',
                        ],
                        priority: 1,
                    },
                    cv: { dialCode: '238', areaCodes: null, priority: 0 },
                    bq: { dialCode: '599', areaCodes: null, priority: 1 },
                    ky: { dialCode: '1345', areaCodes: null, priority: 0 },
                    cf: { dialCode: '236', areaCodes: null, priority: 0 },
                    td: { dialCode: '235', areaCodes: null, priority: 0 },
                    cl: { dialCode: '56', areaCodes: null, priority: 0 },
                    cn: { dialCode: '86', areaCodes: null, priority: 0 },
                    cx: { dialCode: '61', areaCodes: null, priority: 2 },
                    cc: { dialCode: '61', areaCodes: null, priority: 1 },
                    co: { dialCode: '57', areaCodes: null, priority: 0 },
                    km: { dialCode: '269', areaCodes: null, priority: 0 },
                    cd: { dialCode: '243', areaCodes: null, priority: 0 },
                    cg: { dialCode: '242', areaCodes: null, priority: 0 },
                    ck: { dialCode: '682', areaCodes: null, priority: 0 },
                    cr: { dialCode: '506', areaCodes: null, priority: 0 },
                    ci: { dialCode: '225', areaCodes: null, priority: 0 },
                    hr: { dialCode: '385', areaCodes: null, priority: 0 },
                    cu: { dialCode: '53', areaCodes: null, priority: 0 },
                    cw: { dialCode: '599', areaCodes: null, priority: 0 },
                    cy: { dialCode: '357', areaCodes: null, priority: 0 },
                    cz: { dialCode: '420', areaCodes: null, priority: 0 },
                    dk: { dialCode: '45', areaCodes: null, priority: 0 },
                    dj: { dialCode: '253', areaCodes: null, priority: 0 },
                    dm: { dialCode: '1767', areaCodes: null, priority: 0 },
                    do: { dialCode: '1', areaCodes: ['809', '829', '849'], priority: 2 },
                    ec: { dialCode: '593', areaCodes: null, priority: 0 },
                    eg: { dialCode: '20', areaCodes: null, priority: 0 },
                    sv: { dialCode: '503', areaCodes: null, priority: 0 },
                    gq: { dialCode: '240', areaCodes: null, priority: 0 },
                    er: { dialCode: '291', areaCodes: null, priority: 0 },
                    ee: { dialCode: '372', areaCodes: null, priority: 0 },
                    et: { dialCode: '251', areaCodes: null, priority: 0 },
                    fk: { dialCode: '500', areaCodes: null, priority: 0 },
                    fo: { dialCode: '298', areaCodes: null, priority: 0 },
                    fj: { dialCode: '679', areaCodes: null, priority: 0 },
                    fi: { dialCode: '358', areaCodes: null, priority: 0 },
                    fr: { dialCode: '33', areaCodes: null, priority: 0 },
                    gf: { dialCode: '594', areaCodes: null, priority: 0 },
                    pf: { dialCode: '689', areaCodes: null, priority: 0 },
                    ga: { dialCode: '241', areaCodes: null, priority: 0 },
                    gm: { dialCode: '220', areaCodes: null, priority: 0 },
                    ge: { dialCode: '995', areaCodes: null, priority: 0 },
                    de: { dialCode: '49', areaCodes: null, priority: 0 },
                    gh: { dialCode: '233', areaCodes: null, priority: 0 },
                    gi: { dialCode: '350', areaCodes: null, priority: 0 },
                    gr: { dialCode: '30', areaCodes: null, priority: 0 },
                    gl: { dialCode: '299', areaCodes: null, priority: 0 },
                    gd: { dialCode: '1473', areaCodes: null, priority: 0 },
                    gp: { dialCode: '590', areaCodes: null, priority: 0 },
                    gu: { dialCode: '1671', areaCodes: null, priority: 0 },
                    gt: { dialCode: '502', areaCodes: null, priority: 0 },
                    gg: { dialCode: '44', areaCodes: null, priority: 1 },
                    gn: { dialCode: '224', areaCodes: null, priority: 0 },
                    gw: { dialCode: '245', areaCodes: null, priority: 0 },
                    gy: { dialCode: '592', areaCodes: null, priority: 0 },
                    ht: { dialCode: '509', areaCodes: null, priority: 0 },
                    hn: { dialCode: '504', areaCodes: null, priority: 0 },
                    hk: { dialCode: '852', areaCodes: null, priority: 0 },
                    hu: { dialCode: '36', areaCodes: null, priority: 0 },
                    is: { dialCode: '354', areaCodes: null, priority: 0 },
                    in: { dialCode: '91', areaCodes: null, priority: 0 },
                    id: { dialCode: '62', areaCodes: null, priority: 0 },
                    ir: { dialCode: '98', areaCodes: null, priority: 0 },
                    iq: { dialCode: '964', areaCodes: null, priority: 0 },
                    ie: { dialCode: '353', areaCodes: null, priority: 0 },
                    im: { dialCode: '44', areaCodes: null, priority: 2 },
                    il: { dialCode: '972', areaCodes: null, priority: 0 },
                    it: { dialCode: '39', areaCodes: null, priority: 0 },
                    jm: { dialCode: '1876', areaCodes: null, priority: 0 },
                    jp: { dialCode: '81', areaCodes: null, priority: 0 },
                    je: { dialCode: '44', areaCodes: null, priority: 3 },
                    jo: { dialCode: '962', areaCodes: null, priority: 0 },
                    kz: { dialCode: '7', areaCodes: null, priority: 1 },
                    ke: { dialCode: '254', areaCodes: null, priority: 0 },
                    ki: { dialCode: '686', areaCodes: null, priority: 0 },
                    xk: { dialCode: '383', areaCodes: null, priority: 0 },
                    kw: { dialCode: '965', areaCodes: null, priority: 0 },
                    kg: { dialCode: '996', areaCodes: null, priority: 0 },
                    la: { dialCode: '856', areaCodes: null, priority: 0 },
                    lv: { dialCode: '371', areaCodes: null, priority: 0 },
                    lb: { dialCode: '961', areaCodes: null, priority: 0 },
                    ls: { dialCode: '266', areaCodes: null, priority: 0 },
                    lr: { dialCode: '231', areaCodes: null, priority: 0 },
                    ly: { dialCode: '218', areaCodes: null, priority: 0 },
                    li: { dialCode: '423', areaCodes: null, priority: 0 },
                    lt: { dialCode: '370', areaCodes: null, priority: 0 },
                    lu: { dialCode: '352', areaCodes: null, priority: 0 },
                    mo: { dialCode: '853', areaCodes: null, priority: 0 },
                    mk: { dialCode: '389', areaCodes: null, priority: 0 },
                    mg: { dialCode: '261', areaCodes: null, priority: 0 },
                    mw: { dialCode: '265', areaCodes: null, priority: 0 },
                    my: { dialCode: '60', areaCodes: null, priority: 0 },
                    mv: { dialCode: '960', areaCodes: null, priority: 0 },
                    ml: { dialCode: '223', areaCodes: null, priority: 0 },
                    mt: { dialCode: '356', areaCodes: null, priority: 0 },
                    mh: { dialCode: '692', areaCodes: null, priority: 0 },
                    mq: { dialCode: '596', areaCodes: null, priority: 0 },
                    mr: { dialCode: '222', areaCodes: null, priority: 0 },
                    mu: { dialCode: '230', areaCodes: null, priority: 0 },
                    yt: { dialCode: '262', areaCodes: null, priority: 1 },
                    mx: { dialCode: '52', areaCodes: null, priority: 0 },
                    fm: { dialCode: '691', areaCodes: null, priority: 0 },
                    md: { dialCode: '373', areaCodes: null, priority: 0 },
                    mc: { dialCode: '377', areaCodes: null, priority: 0 },
                    mn: { dialCode: '976', areaCodes: null, priority: 0 },
                    me: { dialCode: '382', areaCodes: null, priority: 0 },
                    ms: { dialCode: '1664', areaCodes: null, priority: 0 },
                    ma: { dialCode: '212', areaCodes: null, priority: 0 },
                    mz: { dialCode: '258', areaCodes: null, priority: 0 },
                    mm: { dialCode: '95', areaCodes: null, priority: 0 },
                    na: { dialCode: '264', areaCodes: null, priority: 0 },
                    nr: { dialCode: '674', areaCodes: null, priority: 0 },
                    np: { dialCode: '977', areaCodes: null, priority: 0 },
                    nl: { dialCode: '31', areaCodes: null, priority: 0 },
                    nc: { dialCode: '687', areaCodes: null, priority: 0 },
                    nz: { dialCode: '64', areaCodes: null, priority: 0 },
                    ni: { dialCode: '505', areaCodes: null, priority: 0 },
                    ne: { dialCode: '227', areaCodes: null, priority: 0 },
                    ng: { dialCode: '234', areaCodes: null, priority: 0 },
                    nu: { dialCode: '683', areaCodes: null, priority: 0 },
                    nf: { dialCode: '672', areaCodes: null, priority: 0 },
                    kp: { dialCode: '850', areaCodes: null, priority: 0 },
                    mp: { dialCode: '1670', areaCodes: null, priority: 0 },
                    no: { dialCode: '47', areaCodes: null, priority: 0 },
                    om: { dialCode: '968', areaCodes: null, priority: 0 },
                    pk: { dialCode: '92', areaCodes: null, priority: 0 },
                    pw: { dialCode: '680', areaCodes: null, priority: 0 },
                    ps: { dialCode: '970', areaCodes: null, priority: 0 },
                    pa: { dialCode: '507', areaCodes: null, priority: 0 },
                    pg: { dialCode: '675', areaCodes: null, priority: 0 },
                    py: { dialCode: '595', areaCodes: null, priority: 0 },
                    pe: { dialCode: '51', areaCodes: null, priority: 0 },
                    ph: { dialCode: '63', areaCodes: null, priority: 0 },
                    pl: { dialCode: '48', areaCodes: null, priority: 0 },
                    pt: { dialCode: '351', areaCodes: null, priority: 0 },
                    pr: { dialCode: '1', areaCodes: ['787', '939'], priority: 3 },
                    qa: { dialCode: '974', areaCodes: null, priority: 0 },
                    re: { dialCode: '262', areaCodes: null, priority: 0 },
                    ro: { dialCode: '40', areaCodes: null, priority: 0 },
                    ru: { dialCode: '7', areaCodes: null, priority: 0 },
                    rw: { dialCode: '250', areaCodes: null, priority: 0 },
                    bl: { dialCode: '590', areaCodes: null, priority: 1 },
                    sh: { dialCode: '290', areaCodes: null, priority: 0 },
                    kn: { dialCode: '1869', areaCodes: null, priority: 0 },
                    lc: { dialCode: '1758', areaCodes: null, priority: 0 },
                    mf: { dialCode: '590', areaCodes: null, priority: 2 },
                    pm: { dialCode: '508', areaCodes: null, priority: 0 },
                    vc: { dialCode: '1784', areaCodes: null, priority: 0 },
                    ws: { dialCode: '685', areaCodes: null, priority: 0 },
                    sm: { dialCode: '378', areaCodes: null, priority: 0 },
                    st: { dialCode: '239', areaCodes: null, priority: 0 },
                    sa: { dialCode: '966', areaCodes: null, priority: 0 },
                    sn: { dialCode: '221', areaCodes: null, priority: 0 },
                    rs: { dialCode: '381', areaCodes: null, priority: 0 },
                    sc: { dialCode: '248', areaCodes: null, priority: 0 },
                    sl: { dialCode: '232', areaCodes: null, priority: 0 },
                    sg: { dialCode: '65', areaCodes: null, priority: 0 },
                    sx: { dialCode: '1721', areaCodes: null, priority: 0 },
                    sk: { dialCode: '421', areaCodes: null, priority: 0 },
                    si: { dialCode: '386', areaCodes: null, priority: 0 },
                    sb: { dialCode: '677', areaCodes: null, priority: 0 },
                    so: { dialCode: '252', areaCodes: null, priority: 0 },
                    za: { dialCode: '27', areaCodes: null, priority: 0 },
                    kr: { dialCode: '82', areaCodes: null, priority: 0 },
                    ss: { dialCode: '211', areaCodes: null, priority: 0 },
                    es: { dialCode: '34', areaCodes: null, priority: 0 },
                    lk: { dialCode: '94', areaCodes: null, priority: 0 },
                    sd: { dialCode: '249', areaCodes: null, priority: 0 },
                    sr: { dialCode: '597', areaCodes: null, priority: 0 },
                    sj: { dialCode: '47', areaCodes: null, priority: 1 },
                    sz: { dialCode: '268', areaCodes: null, priority: 0 },
                    se: { dialCode: '46', areaCodes: null, priority: 0 },
                    ch: { dialCode: '41', areaCodes: null, priority: 0 },
                    sy: { dialCode: '963', areaCodes: null, priority: 0 },
                    tw: { dialCode: '886', areaCodes: null, priority: 0 },
                    tj: { dialCode: '992', areaCodes: null, priority: 0 },
                    tz: { dialCode: '255', areaCodes: null, priority: 0 },
                    th: { dialCode: '66', areaCodes: null, priority: 0 },
                    tl: { dialCode: '670', areaCodes: null, priority: 0 },
                    tg: { dialCode: '228', areaCodes: null, priority: 0 },
                    tk: { dialCode: '690', areaCodes: null, priority: 0 },
                    to: { dialCode: '676', areaCodes: null, priority: 0 },
                    tt: { dialCode: '1868', areaCodes: null, priority: 0 },
                    tn: { dialCode: '216', areaCodes: null, priority: 0 },
                    tr: { dialCode: '90', areaCodes: null, priority: 0 },
                    tm: { dialCode: '993', areaCodes: null, priority: 0 },
                    tc: { dialCode: '1649', areaCodes: null, priority: 0 },
                    tv: { dialCode: '688', areaCodes: null, priority: 0 },
                    vi: { dialCode: '1340', areaCodes: null, priority: 0 },
                    ug: { dialCode: '256', areaCodes: null, priority: 0 },
                    ua: { dialCode: '380', areaCodes: null, priority: 0 },
                    ae: { dialCode: '971', areaCodes: null, priority: 0 },
                    gb: { dialCode: '44', areaCodes: null, priority: 0 },
                    us: { dialCode: '1', areaCodes: null, priority: 0 },
                    uy: { dialCode: '598', areaCodes: null, priority: 0 },
                    uz: { dialCode: '998', areaCodes: null, priority: 0 },
                    vu: { dialCode: '678', areaCodes: null, priority: 0 },
                    va: { dialCode: '39', areaCodes: null, priority: 1 },
                    ve: { dialCode: '58', areaCodes: null, priority: 0 },
                    vn: { dialCode: '84', areaCodes: null, priority: 0 },
                    wf: { dialCode: '681', areaCodes: null, priority: 0 },
                    eh: { dialCode: '212', areaCodes: null, priority: 1 },
                    ye: { dialCode: '967', areaCodes: null, priority: 0 },
                    zm: { dialCode: '260', areaCodes: null, priority: 0 },
                    zw: { dialCode: '263', areaCodes: null, priority: 0 },
                    ax: { dialCode: '358', areaCodes: null, priority: 1 },
                };
        },
        521: function(e, t, r) {
            'use strict';
            r.d(t, 'c', function() {
                return d;
            }),
                r.d(t, 'b', function() {
                    return p;
                }),
                r.d(t, 'e', function() {
                    return u;
                }),
                r.d(t, 'd', function() {
                    return h;
                }),
                r.d(t, 'a', function() {
                    return m;
                });
            var a = r(0),
                i = r(38),
                n = r(63),
                o = r(204);
            function s(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t &&
                        (a = a.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, a);
                }
                return r;
            }
            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? s(r, !0).forEach(function(t) {
                              c(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                        : s(r).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                          });
                }
                return e;
            }
            function c(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            const d = e => {
                    if (!e || !e.parts) return;
                    const t = e.parts[e.parts.length - 1];
                    return t && t.replyOptions && 0 !== t.replyOptions.length ? t : void 0;
                },
                p = e => {
                    const t = d(e);
                    if (t) return t.replyOptions;
                },
                u = Object(a.createSelector)(i.a, e => {
                    const { selfServeSuggestionsEnabled: t } = e.composerState;
                    return t;
                }),
                h = Object(a.createSelector)(
                    [i.a, u, e => e.operator.composerHasContent],
                    (e, t, r) => {
                        const { composerSuggestions: a } = e,
                            i = a && a.suggestions && a.suggestions.length > 0,
                            o = a && a.prompt && a.prompt.length > 0,
                            s = a && a.loading,
                            c = a && a.isDismissed;
                        return t && r && !c && (i || o || s)
                            ? l({}, a, { isTypeaheadSuggestions: !0 })
                            : n.b;
                    }
                ),
                m = Object(a.createSelector)(
                    [
                        i.a,
                        e => e.inboundSuggestions.isDismissed,
                        o.a,
                        e => e.predictiveAnswers.composerSuggestions,
                        e => e.operator.composerHasContent,
                    ],
                    (e, t, r, a, i) => {
                        const o = !e.id,
                            s = !e.userParticipated,
                            c = p(e),
                            d = l({}, n.b, { suggestions: c || [] }),
                            u = !!r && !t && o && s,
                            h = !!c,
                            m = o && !u && !h && !i && !!a;
                        return e.preventEndUserReplies
                            ? n.b
                            : u
                            ? l({}, r, { isInboundBotSuggestions: !0 })
                            : h
                            ? l({}, d, { isQuickReplies: !0 })
                            : m
                            ? l({}, a, { isPredictiveAnswers: !0 })
                            : n.b;
                    }
                );
        },
        524: function(e, t, r) {
            'use strict';
            var a = r(433),
                i = r.n(a),
                n = r(480),
                o = r(434),
                s = r(435),
                l = r(477),
                c = { name: '4e206b', styles: 'transform:translate(0,100%);bottom:-2px;right:0;' },
                d = {
                    name: 'mnx8f1',
                    styles: 'transform:translate(-50%,100%);bottom:-2px;left:50%;',
                };
            const p = Object(o.c)(n.animated.div, { target: 'eknz5wz0' })(
                    'z-index:',
                    Object(s.m)(1),
                    ';box-sizing:border-box;position:absolute;width:auto;pointer-events:none;',
                    ({ position: e }) => 'bottom' === e && d,
                    ' ',
                    ({ position: e }) => 'bottomRight' === e && c,
                    ' ',
                    ({ position: e, top: t, bottom: r, left: a }) =>
                        'auto' === e &&
                        Object(o.b)(
                            'transform:translate(-50%,0);',
                            null != t && Object(o.b)('top:', t, 'px;'),
                            ' ',
                            null != r && Object(o.b)('bottom:', r, 'px;'),
                            ' left:',
                            a,
                            'px;'
                        )
                ),
                u = Object(o.c)('div', { target: 'eknz5wz1' })(
                    'background:',
                    Object(o.f)('grey'),
                    ';opacity:0.95;color:',
                    Object(o.f)('white'),
                    ';border-radius:3px;font-size:12px;line-height:1.4;text-align:center;padding:2px 4px 0;white-space:nowrap;',
                    ({ type: e, theme: t }) =>
                        'dark' === e && Object(o.b)('background:', Object(l.a)(t.black, 0.55), ';')
                );
            var h = r(479);
            function m() {
                return (m =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var a in r)
                                Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            r.d(t, 'a', function() {
                return b;
            });
            function b({
                children: e,
                content: t,
                position: r = 'auto',
                enabled: n = !0,
                type: o = 'default',
            }) {
                const [s, l] = Object(a.useState)({ top: 0, bottom: null, left: 0 }),
                    [c, d] = Object(a.useState)(!1),
                    b = Object(a.useRef)(null),
                    g = Object(a.useRef)(null),
                    f = Object(a.useRef)(Date.now());
                Object(a.useEffect)(() => () => clearInterval(g.current), []);
                return e(
                    i.a.createElement(
                        h.a,
                        { duration: 200 },
                        c && n && t
                            ? e =>
                                  i.a.createElement(
                                      p,
                                      m(
                                          {
                                              position: r,
                                              left: s.left,
                                              top: s.top,
                                              bottom: s.bottom,
                                          },
                                          e
                                      ),
                                      i.a.createElement(u, { type: o }, t)
                                  )
                            : null
                    ),
                    {
                        onMouseEnter: () => {
                            clearInterval(g.current),
                                (g.current = setInterval(() => {
                                    const e = Date.now() - f.current;
                                    d(e > 500);
                                }, 100));
                        },
                        onMouseLeave: () => {
                            d(!1), clearInterval(g.current);
                        },
                        onMouseMove: e => {
                            if (!b.current) return;
                            const t = b.current.getBoundingClientRect(),
                                r = e.clientX - t.left,
                                a = e.clientY - t.top,
                                i = t.bottom - e.clientY;
                            let n, o;
                            a > t.height / 2 ? (n = Math.round(i + 15)) : (o = Math.round(a + 20)),
                                (f.current = Date.now()),
                                d(!1),
                                l({ top: o, bottom: n, left: Math.round(r + 5) });
                        },
                        ref: b,
                    }
                );
            }
        },
        549: function(e, t, r) {
            'use strict';
            r.d(t, 'a', function() {
                return AuthorSummary;
            });
            var a = r(437),
                i = r.n(a),
                n = r(433),
                o = r.n(n),
                s = r(494),
                l = r(469),
                c = r(29);
            class AuthorSummary extends n.Component {
                renderReplyStyle() {
                    return o.a.createElement(
                        s.e,
                        null,
                        o.a.createElement(s.f, null, `${Object(c.e)('reply_from')} `),
                        o.a.createElement(
                            s.c,
                            { className: 'test-author-summary-name' },
                            this.props.author.firstName
                        )
                    );
                }
                activeOrAwayInWords() {
                    return this.props.isActive ? 'Active' : 'Away';
                }
                renderWithAppName() {
                    const { lastActiveAt: e, appName: t, author: r } = this.props,
                        a = r.firstName,
                        i = null !== this.props.isActive && 'en' === Object(c.a)();
                    return o.a.createElement(
                        s.e,
                        null,
                        o.a.createElement(
                            s.d,
                            { className: 'test-author-summary-name-from' },
                            o.a.createElement(s.c, { className: 'test-author-summary-name' }, a),
                            'team' !== r.type
                                ? o.a.createElement(
                                      s.b,
                                      { className: 'test-author-summary-from-clause' },
                                      ` ${Object(c.e)('from_name', { name: t })}`
                                  )
                                : null
                        ),
                        e
                            ? o.a.createElement(
                                  s.a,
                                  null,
                                  i ? this.activeOrAwayInWords() : Object(l.d)(e)
                              )
                            : null
                    );
                }
                render() {
                    return this.props.isReplyStyle
                        ? this.renderReplyStyle()
                        : this.renderWithAppName();
                }
            }
            AuthorSummary.propTypes = {
                appName: i.a.string.isRequired,
                author: i.a.shape({
                    firstName: i.a.string.isRequired,
                    isActive: i.a.bool,
                    type: i.a.string,
                }).isRequired,
                isReplyStyle: i.a.bool.isRequired,
                lastActiveAt: i.a.instanceOf(Date),
                isActive: i.a.bool,
            };
        },
        550: function(e, t, r) {
            'use strict';
            r.d(t, 'a', function() {
                return a;
            });
            const a = e =>
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    e
                );
        },
        551: function(e, t, r) {
            'use strict';
            r.d(t, 'a', function() {
                return ErrorBoundary;
            });
            var a = r(433),
                i = r.n(a),
                n = r(434),
                o = r(45);
            const s = Object(n.c)('div', { target: 'e82hi040' })(
                'font-size:13px;color:',
                Object(n.f)('grey'),
                ';padding:0 20px;text-align:',
                Object(n.e)('align'),
                ';'
            );
            class ErrorBoundary extends a.Component {
                constructor(...e) {
                    var t, r, a;
                    super(...e),
                        (a = { hasError: !1 }),
                        (r = 'state') in (t = this)
                            ? Object.defineProperty(t, r, {
                                  value: a,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                              })
                            : (t[r] = a);
                }
                componentDidCatch(e) {
                    this.setState({ hasError: !0 }), Object(o.c)(e);
                }
                render() {
                    const { errorText: e, align: t, children: r, style: a } = this.props,
                        { hasError: n } = this.state;
                    return n ? i.a.createElement(s, { align: t, style: a || {} }, e) : r;
                }
            }
        },
        552: function(e, t, r) {
            'use strict';
            t.a = (e, t, r) => {
                let i = a(t);
                const n = 'absolute' === i.position,
                    o = r ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
                if ('fixed' === i.position) return e.document.body;
                for (let e = t; (e = e.parentElement); )
                    if (
                        ((i = a(e)),
                        (!n || 'static' !== i.position) &&
                            o.test(i.overflow + i.overflowY + i.overflowX))
                    )
                        return e;
                return e.document.body;
            };
            const a = e =>
                window.getComputedStyle && window.getComputedStyle(e)
                    ? window.getComputedStyle(e)
                    : e.style;
        },
        554: function(e, t, r) {
            'use strict';
            var a,
                i,
                n,
                o = r(436),
                s = r(433),
                l = r.n(s),
                c = r(20),
                d = r(462),
                p = r(501),
                u = r(29);
            function h(e) {
                return e.length > 0;
            }
            class string_StringAttribute extends s.Component {
                render() {
                    const {
                        value: e,
                        errorMessage: t,
                        onSubmit: r,
                        onChange: a,
                        placeholder: i,
                        id: n,
                        label: o,
                        saveState: s,
                        disabled: c,
                        isBorderless: d,
                        isReplyType: m,
                        isSubmittable: b,
                        hideErrorMessage: g,
                        ariaLabel: f,
                    } = this.props;
                    return l.a.createElement(p.a, {
                        value: e,
                        placeholder: i,
                        id: n,
                        label: o,
                        saveState: s,
                        disabled: c,
                        isValid: h,
                        isBorderless: d,
                        isReplyType: m,
                        isNotificationChannel: !1,
                        isSubmittable: b,
                        onSubmit: r,
                        onChange: a,
                        hideErrorMessage: g,
                        validationErrorMessage: t || Object(u.e)('string_is_incorrect'),
                        ariaLabel: f || i,
                    });
                }
            }
            (n = { isSubmittable: !0, hideErrorMessage: !1 }),
                (i = 'defaultProps') in (a = string_StringAttribute)
                    ? Object.defineProperty(a, i, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (a[i] = n);
            var m = r(613);
            function b(e) {
                return !!e.match(/^-?\d+$/);
            }
            class integer_IntegerAttribute extends s.Component {
                render() {
                    const {
                        value: e,
                        errorMessage: t,
                        onSubmit: r,
                        saveState: a,
                        disabled: i,
                        isBorderless: n,
                        isReplyType: o,
                        ariaLabel: s,
                    } = this.props;
                    return l.a.createElement(p.a, {
                        value: e,
                        placeholder: Object(u.e)('type_a_number'),
                        saveState: a,
                        disabled: i,
                        isValid: b,
                        isBorderless: n,
                        isReplyType: o,
                        isNotificationChannel: !1,
                        onSubmit: r,
                        validationErrorMessage: t || Object(u.e)('number_is_incorrect'),
                        ariaLabel: s || Object(u.e)('type_a_number'),
                    });
                }
            }
            function g(e) {
                return !!e.match(/^-?\d+\.\d+$/);
            }
            function f(e) {
                return (function(e) {
                    return !!e.match(/^-?\d+$/);
                })(e)
                    ? `${e}.0`
                    : e;
            }
            class float_FloatAttribute extends s.Component {
                render() {
                    const {
                        value: e,
                        errorMessage: t,
                        onSubmit: r,
                        saveState: a,
                        disabled: i,
                        isBorderless: n,
                        isReplyType: o,
                        ariaLabel: s,
                    } = this.props;
                    return l.a.createElement(p.a, {
                        value: e,
                        placeholder: Object(u.e)('type_a_number'),
                        saveState: a,
                        disabled: i,
                        isValid: g,
                        formatter: f,
                        isBorderless: n,
                        isReplyType: o,
                        isNotificationChannel: !1,
                        onSubmit: r,
                        validationErrorMessage: t || Object(u.e)('number_is_incorrect'),
                        ariaLabel: s || Object(u.e)('type_a_number'),
                    });
                }
            }
            var y = r(484),
                v = r(434);
            const C = Object(v.c)('div', { target: 'e15yvv340' })({
                    name: '1jke4yk',
                    styles: 'position:relative;width:100%;',
                }),
                x = Object(v.c)('span', { target: 'e15yvv341' })({
                    name: 'in3yi3',
                    styles: 'font-weight:bold;',
                });
            var j = {
                    name: '1mautmz',
                    styles:
                        'border-left-width:0;border-top-left-radius:0;border-bottom-left-radius:0;',
                },
                O = { name: '1uc1y8d', styles: 'border-right-width:0;' },
                E = {
                    name: 'tsqr3a',
                    styles: 'border-top-right-radius:0;border-bottom-right-radius:0;',
                },
                w = {
                    name: 'f0uxs0',
                    styles: '&:hover,&:focus{border-left-width:1px;margin-left:-1px;width:50%;}',
                };
            const S = Object(v.c)('button', { target: 'e15yvv342' })(
                'box-sizing:border-box;border:1px solid ',
                Object(v.f)('appColor'),
                ';color:',
                Object(v.f)('appColor'),
                ';border-radius:4px;display:inline-block;font-size:14px;padding:12px;text-align:center;width:calc(50% - 1px);&,*{cursor:pointer;}&[disabled]{cursor:not-allowed;}',
                ({ saveState: e, theme: t }) =>
                    ('saving' === e || 'saved' === e) &&
                    Object(v.b)('border:1px solid ', t.appColor, ';&,*{cursor:default;}'),
                ' ',
                ({ value: e, theme: t }) =>
                    void 0 === e &&
                    Object(v.b)(
                        'color:',
                        t.appColor,
                        ';cursor:pointer;&:hover,&:focus{border-color:',
                        t.appColorSemiTransparent,
                        ';}'
                    ),
                ' ',
                ({ value: e, option: t }) => void 0 === e && !1 === t && w,
                ' ',
                ({ option: e }) => !0 === e && E,
                ' ',
                ({ option: e, value: t }) => !0 === e && void 0 !== t && t !== e && O,
                ' ',
                ({ option: e }) => !1 === e && j,
                ' ',
                ({ option: e, value: t, theme: r }) =>
                    e === t &&
                    Object(v.b)('border-left-width:1px;', x.className, '{color:', r.bodyText, ';}'),
                ' ',
                ({ option: e, value: t, theme: r }) =>
                    void 0 !== t && t !== e && Object(v.b)(x.className, '{color:', r.grey, ';}')
            );
            class boolean_BooleanAttribute extends s.Component {
                constructor(...e) {
                    super(...e),
                        (function(e, t, r) {
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                        })(this, 'state', { value: this.props.value });
                }
                createHandleSubmit(e) {
                    const { saveState: t } = this.props;
                    return 'saved' === t || 'saving' === t
                        ? () => {}
                        : () => {
                              this.props.onSubmit(e);
                          };
                }
                render() {
                    const { value: e } = this.state,
                        { saveState: t, disabled: r } = this.props;
                    return l.a.createElement(
                        'div',
                        null,
                        l.a.createElement(
                            C,
                            null,
                            l.a.createElement(
                                S,
                                {
                                    saveState: t,
                                    option: !0,
                                    value: e,
                                    disabled: r,
                                    onClick: this.createHandleSubmit(!0),
                                },
                                l.a.createElement(
                                    x,
                                    null,
                                    Object(u.e)('attribute_collector_positive')
                                )
                            ),
                            l.a.createElement(
                                S,
                                {
                                    saveState: t,
                                    option: !1,
                                    value: e,
                                    disabled: r,
                                    onClick: this.createHandleSubmit(!1),
                                },
                                l.a.createElement(
                                    x,
                                    null,
                                    Object(u.e)('attribute_collector_negative')
                                )
                            )
                        ),
                        'failed' === this.props.saveState &&
                            l.a.createElement(y.a, {
                                errorMessage: Object(u.e)('something_is_wrong'),
                            })
                    );
                }
            }
            var k = r(634),
                _ = r(637),
                P = r(643),
                T = r(139);
            const A = Object(v.c)('div', { target: 'e11jhrle0' })({
                    name: '1gzi742',
                    styles: 'margin:0 0 16px;&:last-child{margin:0;}',
                }),
                R = Object(v.c)('div', { target: 'e11jhrle1' })({
                    name: 'pb238u',
                    styles: 'margin-bottom:5px;font-size:14px;line-height:20px;',
                });
            function B(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            class attribute_collector_card_attribute_AttributeCollectorCardAttribute extends s.Component {
                constructor(...e) {
                    super(...e),
                        B(this, 'handleSubmit', e => {
                            const { identifier: t, onSubmit: r } = this.props;
                            r(t, e);
                        }),
                        B(this, 'handleArraySubmit', e => {
                            this.handleSubmit(e.text);
                        });
                }
                fitsButtonGroupLayout(e) {
                    const t = e.length,
                        r = Math.floor(18 / t);
                    return t <= 4 && e.every(e => e.length <= r);
                }
                renderAttribute() {
                    const {
                            name: e,
                            type: t,
                            identifier: r,
                            value: a,
                            options: i,
                            saveState: n,
                            defaultCountryCode: o,
                            isBorderless: s,
                            isReplyType: c,
                            disabled: d,
                        } = this.props,
                        p = a ? String(a) : void 0;
                    return 'email' === r
                        ? l.a.createElement(m.a, {
                              disabled: d,
                              value: p,
                              saveState: n,
                              isBorderless: s,
                              isReplyType: c,
                              isNotificationChannel: !1,
                              onSubmit: this.handleSubmit,
                          })
                        : 'phone' === r
                        ? l.a.createElement(P.a, {
                              disabled: d,
                              value: p,
                              key: p,
                              saveState: n,
                              defaultCountryCode: o,
                              isBorderless: s,
                              isReplyType: c,
                              isNotificationChannel: !1,
                              onSubmit: this.handleSubmit,
                          })
                        : 'string' === t && Array.isArray(i)
                        ? this.renderArrayAttribute(i, p)
                        : 'string' === t
                        ? l.a.createElement(string_StringAttribute, {
                              disabled: d,
                              value: p,
                              saveState: n,
                              isBorderless: s,
                              isReplyType: c,
                              onSubmit: this.handleSubmit,
                              ariaLabel: e,
                          })
                        : 'integer' === t
                        ? l.a.createElement(integer_IntegerAttribute, {
                              disabled: d,
                              value: p,
                              saveState: n,
                              isBorderless: s,
                              isReplyType: c,
                              onSubmit: this.handleSubmit,
                              ariaLabel: e,
                          })
                        : 'float' === t
                        ? l.a.createElement(float_FloatAttribute, {
                              disabled: d,
                              value: p,
                              saveState: n,
                              isBorderless: s,
                              isReplyType: c,
                              onSubmit: this.handleSubmit,
                              ariaLabel: e,
                          })
                        : 'boolean' !== t || ('boolean' != typeof a && void 0 !== a)
                        ? null
                        : l.a.createElement(boolean_BooleanAttribute, {
                              disabled: d,
                              value: a,
                              key: JSON.stringify(a),
                              saveState: n,
                              isBorderless: s,
                              isReplyType: c,
                              onSubmit: this.handleSubmit,
                          });
                }
                renderArrayAttribute(e, t) {
                    const { saveState: r, frameWindow: a, disabled: i } = this.props,
                        n = t ? { id: t, text: t } : null,
                        o = e.map(e => ({ id: e, text: e }));
                    return this.fitsButtonGroupLayout(e)
                        ? l.a.createElement(_.a, {
                              disabled: i,
                              value: n,
                              key: Object(T.a)(JSON.stringify(n)),
                              options: o,
                              saveState: r,
                              onChange: this.handleArraySubmit,
                          })
                        : l.a.createElement(k.a, {
                              disabled: i,
                              value: n,
                              options: o,
                              saveState: r,
                              autoFocus: !0,
                              frameWindow: a,
                              onChange: this.handleArraySubmit,
                          });
                }
                render() {
                    const { name: e, number: t } = this.props;
                    return l.a.createElement(
                        A,
                        null,
                        l.a.createElement(R, null, void 0 !== t ? `${t}. ${e}` : e),
                        this.renderAttribute()
                    );
                }
            }
            var I = r(5),
                N = r(1),
                M = r(435);
            const z = Object(v.d)('0%{opacity:0;}70%{opacity:0;}100%{opacity:1;}'),
                D = Object(v.c)('div', { target: 'e17b05a30' })({
                    name: '6sa1y5',
                    styles: 'position:absolute;/* @noflip */ left:0;bottom:10px;',
                }),
                q = Object(v.c)('div', { target: 'e17b05a31' })(
                    'position:absolute;right:0;top:0;color:',
                    Object(v.f)('grey'),
                    ';font-size:14px;line-height:20px;'
                ),
                L = Object(v.c)('div', { target: 'e17b05a32' })(
                    'position:relative;padding:26px 24px 24px;/* @noflip */ margin-left:45px;text-align:left;background-color:',
                    Object(v.f)('white'),
                    ';border-radius:5px;color:',
                    Object(v.f)('bodyText'),
                    ';',
                    M.c
                ),
                U = Object(v.c)('div', { target: 'e17b05a33' })({
                    name: 'uewl2b',
                    styles: 'margin-bottom:20px;',
                }),
                F = Object(v.c)('div', { target: 'e17b05a34' })({
                    name: '79elbk',
                    styles: 'position:relative;',
                }),
                H = Object(v.c)('h2', { target: 'e17b05a35' })(
                    'color:',
                    Object(v.f)('bodyText'),
                    ';font-weight:600;font-size:16px;'
                ),
                W = Object(v.c)('h3', { target: 'e17b05a36' })(
                    'color:',
                    Object(v.f)('metaText'),
                    ';font-size:14px;margin-top:8px;'
                );
            var G = { name: 'o7rt0f', styles: 'margin-top:3px;' };
            const V = Object(v.c)('div', { target: 'e17b05a37' })(
                'margin-top:8px;margin-bottom:8px;width:100%;position:relative;/* @noflip */ float:left;',
                ({ theme: e, isBorderless: t }) =>
                    t &&
                    Object(v.b)(
                        'min-height:57px;',
                        L.className,
                        '{box-shadow:',
                        e.notificationBoxShadow,
                        ';border-color:',
                        e.white,
                        ';}'
                    ),
                ' ',
                ({ isReplyType: e }) => e && G,
                ' ',
                ({ theme: e, isReplyType: t }) =>
                    e.isMobileBrowser &&
                    t &&
                    Object(v.b)(L.className, '{/* @noflip */ margin-left:0;}'),
                ' ',
                ({ isBorderless: e, isReplyType: t }) =>
                    e &&
                    t &&
                    Object(v.b)(
                        'animation:',
                        z,
                        ' 750ms ease;',
                        L.className,
                        '{padding:0;}',
                        A.className,
                        '{margin:0;height:52px;}',
                        R.className,
                        '{display:none;}'
                    )
            );
            function $(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            function K(e) {
                const { form: t } = e;
                return t
                    ? t.attributes.reduce(
                          (e, { identifier: t, saveState: r }) => Object.assign({}, e, { [t]: r }),
                          {}
                      )
                    : {};
            }
            function Y(e) {
                return Object.keys(e).length;
            }
            function X(e) {
                return Object.keys(e).filter(t => 'saved' === e[t] || 'failed' === e[t]).length;
            }
            class attribute_collector_card_AttributeCollectorCard extends s.Component {
                constructor(...e) {
                    super(...e),
                        $(this, 'state', { saveStates: K(this.props.part) }),
                        $(this, 'node', void 0),
                        $(this, 'renderAttribute', (e, t) => {
                            const {
                                    isBorderless: r,
                                    isReplyType: a,
                                    defaultCountryCode: i,
                                    frameWindow: n,
                                    onAttributeSubmit: o,
                                    disabled: s,
                                    hideNumbering: c,
                                } = this.props,
                                { saveStates: d } = this.state;
                            if (t > X(d)) return null;
                            const {
                                type: p,
                                name: u,
                                identifier: h,
                                options: m,
                                value: b,
                                saveState: g,
                            } = e;
                            let f;
                            return (
                                Y(d) > 1 && !c && (f = `${t + 1}`),
                                l.a.createElement(
                                    attribute_collector_card_attribute_AttributeCollectorCardAttribute,
                                    {
                                        key: h,
                                        type: p,
                                        name: u,
                                        identifier: h,
                                        value: b,
                                        number: f,
                                        options: m,
                                        disabled: s,
                                        saveState: g,
                                        defaultCountryCode: i,
                                        isBorderless: r,
                                        isReplyType: a,
                                        frameWindow: n,
                                        onSubmit: o,
                                    }
                                )
                            );
                        });
                }
                componentDidMount() {
                    const { part: e, conversationId: t } = this.props,
                        { form: r } = e;
                    r &&
                        r.attributes.forEach(({ identifier: a }) => {
                            'email' === a && this.props.onEmailAttributeMount(t);
                            let i = 'automated_lead_qualification';
                            return (
                                'upfront_collection' === r.type && (i = 'upfront_user_collection'),
                                Object(N.e)(
                                    'received',
                                    'operator_reply',
                                    'messenger',
                                    'in_conversation',
                                    {
                                        type: i,
                                        conversation_id: t,
                                        part_id: e.id,
                                        attribute_identifier: a,
                                        attribute_type: Object(I.c)(r, a),
                                        form_type: r.type,
                                        attribute_is_custom_data: Object(I.k)({ identifier: a }),
                                    }
                                )
                            );
                        });
                }
                componentDidUpdate(e, t) {
                    X(t.saveStates) !== X(this.state.saveStates) &&
                        (function(e) {
                            if (!e) return;
                            const t = e.closest('.intercom-conversation-body-parts');
                            t && Object(c.z)(t);
                        })(this.node);
                }
                renderAvatar() {
                    return l.a.createElement(
                        D,
                        null,
                        l.a.createElement(d.a, { author: this.props.part.author })
                    );
                }
                renderForm() {
                    const { form: e } = this.props.part;
                    return e ? e.attributes.map(this.renderAttribute) : null;
                }
                renderHeader() {
                    const { form: e } = this.props.part;
                    if (!e) return null;
                    const t = e.title && e.title.length > 0,
                        r = e.subtitle && e.subtitle.length > 0;
                    return t
                        ? l.a.createElement(
                              U,
                              null,
                              t ? l.a.createElement(H, null, e.title) : null,
                              r ? l.a.createElement(W, null, e.subtitle) : null
                          )
                        : null;
                }
                renderPosition() {
                    const { saveStates: e } = this.state,
                        t = Y(e);
                    if (1 === t) return null;
                    const r = Math.min(t, X(e) + 1);
                    return l.a.createElement(q, null, '(', r, '/', t, ')');
                }
                render() {
                    const { isBorderless: e, isReplyType: t } = this.props;
                    return l.a.createElement(
                        V,
                        { isBorderless: e, isReplyType: t, ref: e => (this.node = e) },
                        this.props.hasAvatar ? this.renderAvatar() : null,
                        l.a.createElement(
                            L,
                            null,
                            this.renderHeader(),
                            l.a.createElement(F, null, this.renderPosition(), this.renderForm())
                        )
                    );
                }
            }
            var J = r(2),
                Z = r(4),
                Q = r(50);
            t.a = Object(o.connect)(
                (e, t) => {
                    const { part: r } = t,
                        a = e.app.conversationId || e.message.conversationId,
                        { id: i } = r;
                    return {
                        conversationId: a,
                        partId: i,
                        defaultCountryCode: e.user.countryCode || 'us',
                    };
                },
                e => ({
                    onAttributeSubmit(t, r, a, i, n, o) {
                        e(Object(Z.r)(J.b, t, r, a, i, n, o, Object(I.k)({ identifier: a })));
                    },
                    onEmailAttributeMount(t) {
                        e(Object(Q.c)(t));
                    },
                }),
                (e, t, r) =>
                    Object.assign({}, e, t, r, {
                        onAttributeSubmit(a, i) {
                            t.onAttributeSubmit(
                                e.conversationId,
                                e.partId,
                                a,
                                i,
                                Object(I.c)(r.part.form, a),
                                r.part.form.type
                            );
                        },
                    })
            )(attribute_collector_card_AttributeCollectorCard);
        },
        555: function(e, t, r) {
            'use strict';
            var a = r(436),
                i = r(447),
                n = r.n(i),
                o = r(433),
                s = r.n(o),
                l = r(449),
                c = r(1),
                d = r(489),
                p = r(485),
                u = r(480);
            const h = (e, t) => {
                const r = [];
                let a = 0;
                return i => {
                    const [n, o] = ((e, t) => {
                            if (!e) return [0, 0];
                            const r = e.querySelector('button');
                            if (!r) return [0, 0];
                            (r.style.display = ''), (r.textContent = t);
                            const a = [r.offsetWidth + d.a, r.offsetHeight + d.a];
                            return (r.style.display = 'none'), a;
                        })(t, i),
                        s = (r.filter(e => e[1] === a) || [])
                            .map(e => e[2])
                            .reduce((e, t) => e + t, 0);
                    if (n + s > e) {
                        const e = r.length > 0 ? r[r.length - 1][3] : 0;
                        a += e;
                    } else
                        r.forEach(e => {
                            e[1] === a && (e[0] = e[0] - n);
                        });
                    const l = [0, a, n, o];
                    return r.push(l), { bounds: l };
                };
            };
            function m(e) {
                const {
                    replyOption: t,
                    onSelect: r,
                    focused: a,
                    style: i,
                    isTypeaheadSuggestion: n,
                    isBorderless: o,
                } = e;
                return s.a.createElement(d.j, {
                    label: t.text,
                    value: t,
                    onClick: r,
                    focused: a,
                    isTypeaheadSuggestion: n,
                    isBorderless: o,
                    style: i,
                });
            }
            var b = Object(o.forwardRef)(({ maxWidth: e }, t) =>
                    s.a.createElement(
                        d.i,
                        null,
                        s.a.createElement(
                            d.h,
                            { ref: t },
                            s.a.createElement(d.j, {
                                tabIndex: '-1',
                                style: { display: 'none', maxWidth: e },
                            })
                        )
                    )
                ),
                g = r(619);
            function f(e, t) {
                if (null == e) return {};
                var r,
                    a,
                    i = (function(e, t) {
                        if (null == e) return {};
                        var r,
                            a,
                            i = {},
                            n = Object.keys(e);
                        for (a = 0; a < n.length; a++)
                            (r = n[a]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < n.length; a++)
                        (r = n[a]),
                            t.indexOf(r) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
                }
                return i;
            }
            function y(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t &&
                        (a = a.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, a);
                }
                return r;
            }
            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? y(r, !0).forEach(function(t) {
                              C(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                        : y(r).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                          });
                }
                return e;
            }
            function C(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            function x(e) {
                const {
                        suggestions: t,
                        onSelect: r,
                        onHeightChange: a,
                        isInboundBotSuggestions: i,
                        isTypeaheadSuggestions: n,
                        isBorderless: l,
                    } = e,
                    c = Object(o.useRef)(null),
                    p = c.current ? c.current.parentNode.offsetWidth : 0,
                    y = `${p - 2 * d.b}px`,
                    C = c.current ? t : [],
                    x = h(p, c.current),
                    j = C.map(e =>
                        v({}, e, {}, x(e.text), {
                            isInboundBotSuggestion: i,
                            isTypeaheadSuggestion: n,
                        })
                    ),
                    O = j[j.length - 1],
                    E = O ? O.bounds[1] + O.bounds[3] : 0,
                    w = Object(u.useTransition)(j, e => e.uuid, {
                        from: ({ bounds: e }) => ({ bounds: e, opacity: 0 }),
                        enter: ({ bounds: e }) => ({ bounds: e, opacity: 1 }),
                        update: ({ bounds: e }) => ({ bounds: e }),
                        leave: { visibility: 'hidden' },
                        config: { mass: 3, tension: 1e3, friction: 200 },
                        trail: 25,
                        immediate: !1,
                    });
                Object(o.useEffect)(() => {
                    E && a && (a(E), setTimeout(() => a(E), d.d));
                }, [E, a]),
                    Object(g.a)(0);
                const S = w[0] && w[0].item && w[0].item.isInboundBotSuggestion;
                return s.a.createElement(
                    d.l,
                    { height: E, isInboundBot: S },
                    s.a.createElement(b, { ref: c, maxWidth: y }),
                    w.map(e => {
                        let {
                                item: t,
                                props: { bounds: a },
                                key: i,
                            } = e,
                            n = f(e.props, ['bounds']);
                        return s.a.createElement(m, {
                            key: i,
                            focused: !1,
                            replyOption: t,
                            onSelect: r,
                            isTypeaheadSuggestion: t.isTypeaheadSuggestion,
                            isBorderless: l,
                            style: v(
                                {
                                    transform: a.to((e, t) => `translate3d(${e}px,${t}px,0)`),
                                    maxWidth: y,
                                },
                                n
                            ),
                        });
                    })
                );
            }
            var j = r(521),
                O = r(29);
            function E(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t &&
                        (a = a.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, a);
                }
                return r;
            }
            function w(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            class conversation_suggestions_ConversationSuggestions extends o.Component {
                constructor(...e) {
                    super(...e),
                        w(this, 'receiveMetricSent', !1),
                        w(this, 'shouldExecuteOnSuggestionsCb', !0),
                        w(this, 'handleClick', async e => {
                            const { conversationSuggestions: t, composerContent: r } = this.props;
                            await this.props.onClick(e);
                            const { conversation: a } = this.props,
                                i = {
                                    conversation_id: null == a ? void 0 : a.id,
                                    conversationSuggestions: t,
                                    composerContent: r,
                                    suggestion: e,
                                };
                            Object(c.e)(
                                'clicked',
                                this.getMetricNameForSuggestionType(e.type),
                                'messenger',
                                '',
                                i
                            ),
                                this.context &&
                                    this.context.emptyComposer &&
                                    this.context.emptyComposer();
                        }),
                        w(this, 'handleDismissSuggestions', () => {
                            const {
                                setComposerSuggestionsDismissed: e,
                                conversationSuggestions: t,
                                conversation: r,
                                composerContent: a,
                            } = this.props;
                            Object(c.e)('dismissed', 'composer_suggestions', 'messenger', '', {
                                conversationSuggestions: t,
                                composerContent: a,
                                conversation_id: null == r ? void 0 : r.id,
                            }),
                                e && e();
                        }),
                        w(this, 'renderSuggestionsHeader', () => {
                            const {
                                    isTypeaheadSuggestions: e,
                                } = this.props.conversationSuggestions,
                                t = this.prompt();
                            return t.length
                                ? s.a.createElement(
                                      d.m,
                                      null,
                                      s.a.createElement(l.a, { autoPlay: !1, blocks: t })
                                  )
                                : this.suggestions().length && e
                                ? s.a.createElement(
                                      d.e,
                                      null,
                                      s.a.createElement(
                                          d.g,
                                          { onClick: this.handleDismissSuggestions },
                                          Object(O.e)('dont_show_suggestions')
                                      ),
                                      s.a.createElement(d.f, {
                                          onClick: this.handleDismissSuggestions,
                                      })
                                  )
                                : null;
                        });
                }
                componentDidMount() {
                    this.executeCallbacksAndMetrics();
                }
                componentDidUpdate() {
                    this.executeCallbacksAndMetrics();
                }
                executeCallbacksAndMetrics() {
                    const { conversationSuggestions: e, onSuggestionsShow: t } = this.props,
                        r = e && e.suggestions.length;
                    r &&
                        !this.receiveMetricSent &&
                        (Object(c.e)(
                            'received',
                            'composer_suggestions',
                            'messenger',
                            '',
                            (function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                        ? E(r, !0).forEach(function(t) {
                                              w(e, t, r[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(
                                              e,
                                              Object.getOwnPropertyDescriptors(r)
                                          )
                                        : E(r).forEach(function(t) {
                                              Object.defineProperty(
                                                  e,
                                                  t,
                                                  Object.getOwnPropertyDescriptor(r, t)
                                              );
                                          });
                                }
                                return e;
                            })({}, e, { url: window.parent.location.href })
                        ),
                        (this.receiveMetricSent = !0)),
                        r &&
                            t &&
                            this.shouldExecuteOnSuggestionsCb &&
                            (t(), (this.shouldExecuteOnSuggestionsCb = !1)),
                        r || (this.shouldExecuteOnSuggestionsCb = !0);
                }
                shouldShowSuggestions() {
                    const { conversation: e, conversationSuggestions: t } = this.props;
                    if (!t) return !1;
                    const { suggestions: r } = t;
                    if (!r.length || 'quick_reply' !== r[0].type) return !0;
                    const a = Object(j.b)(e);
                    return n()(a, r);
                }
                suggestions() {
                    if (!this.shouldShowSuggestions()) return [];
                    const { suggestions: e } = this.props.conversationSuggestions;
                    return e;
                }
                prompt() {
                    if (!this.shouldShowSuggestions()) return [];
                    const { prompt: e } = this.props.conversationSuggestions;
                    return e;
                }
                render() {
                    const { isBorderless: e, conversationSuggestions: t } = this.props;
                    if (!t) return null;
                    const { isInboundBotSuggestions: r, isTypeaheadSuggestions: a } = t,
                        i = this.suggestions();
                    return s.a.createElement(
                        d.c,
                        {
                            className: 'composer-suggestions-container',
                            isBorderless: e,
                            isTypeaheadSuggestions: a,
                            suggestionsVisible: i.length > 0,
                        },
                        this.renderSuggestionsHeader(),
                        s.a.createElement(
                            d.k,
                            null,
                            s.a.createElement(x, {
                                isInboundBotSuggestions: r,
                                isTypeaheadSuggestions: a,
                                suggestions: i,
                                onSelect: this.handleClick,
                                onHeightChange: this.props.onHeightChange,
                                isBorderless: e,
                            })
                        )
                    );
                }
                getMetricNameForSuggestionType(e) {
                    switch (e) {
                        case 'messenger_suggested_content':
                            return 'composer_smart_suggestions';
                        case 'predictive_answers':
                            return 'predictive_answers';
                        default:
                            return 'composer_suggestions';
                    }
                }
            }
            w(conversation_suggestions_ConversationSuggestions, 'contextType', p.a);
            t.a = Object(a.connect)(e => {
                const { composer: t } = e;
                return { composerContent: t.content };
            })(conversation_suggestions_ConversationSuggestions);
        },
        556: function(e, t, r) {
            'use strict';
            var a = r(7);
            r.d(t, 'a', function() {
                return n;
            }),
                r.d(t, 'b', function() {
                    return o;
                });
            const i = [
                    'image/gif',
                    'image/jpeg',
                    'image/png',
                    'image/webp',
                    'image/bmp',
                    'image/x-icon',
                ],
                n = e =>
                    new Promise((t, r) => {
                        const a = new Image();
                        (a.onload = () => t(a)), (a.onerror = () => r()), (a.src = e);
                    }),
                o = e =>
                    new Promise((t, r) => {
                        s(e) && Object(a.c)()
                            ? ((e, t) => {
                                  const r = new FileReader();
                                  (r.onload = e => {
                                      const r = new DataView(e.target.result);
                                      if (65496 !== r.getUint16(0, !1)) return t(-2);
                                      const a = r.byteLength;
                                      let i = 2;
                                      for (; i < a; ) {
                                          const e = r.getUint16(i, !1);
                                          if (((i += 2), 65505 === e)) {
                                              if (1165519206 !== r.getUint32((i += 2), !1))
                                                  return t(-1);
                                              const e = 18761 === r.getUint16((i += 6), !1);
                                              i += r.getUint32(i + 4, e);
                                              const a = r.getUint16(i, e);
                                              i += 2;
                                              for (let n = 0; n < a; n++)
                                                  if (274 === r.getUint16(i + 12 * n, e))
                                                      return t(r.getUint16(i + 12 * n + 8, e));
                                          } else {
                                              if (65280 != (65280 & e)) break;
                                              i += r.getUint16(i, !1);
                                          }
                                      }
                                      return t(-1);
                                  }),
                                      r.readAsArrayBuffer(e.slice(0, 65536));
                              })(e, a => {
                                  const i = URL.createObjectURL(e),
                                      n = e => {
                                          const a = new Image();
                                          (a.onload = () => t(a)),
                                              (a.onerror = () => r()),
                                              (a.src = e);
                                      };
                                  a <= 1
                                      ? (function(e, t) {
                                            const r = new FileReader();
                                            (r.onload = e => {
                                                t(e.target.result);
                                            }),
                                                r.readAsDataURL(e);
                                        })(e, n)
                                      : ((e, t, r, a) => {
                                            const i = new Image();
                                            (i.src = e),
                                                (i.onload = function() {
                                                    const e = i.width,
                                                        n = i.height,
                                                        o = document.createElement('canvas'),
                                                        s = o.getContext('2d');
                                                    switch (
                                                        (4 < t && t < 9
                                                            ? ((o.width = n), (o.height = e))
                                                            : ((o.width = e), (o.height = n)),
                                                        t)
                                                    ) {
                                                        case 2:
                                                            s.transform(-1, 0, 0, 1, e, 0);
                                                            break;
                                                        case 3:
                                                            s.transform(-1, 0, 0, -1, e, n);
                                                            break;
                                                        case 4:
                                                            s.transform(1, 0, 0, -1, 0, n);
                                                            break;
                                                        case 5:
                                                            s.transform(0, 1, 1, 0, 0, 0);
                                                            break;
                                                        case 6:
                                                            s.transform(0, 1, -1, 0, n, 0);
                                                            break;
                                                        case 7:
                                                            s.transform(0, -1, -1, 0, n, e);
                                                            break;
                                                        case 8:
                                                            s.transform(0, -1, 1, 0, 0, e);
                                                    }
                                                    s.drawImage(i, 0, 0), a(o.toDataURL(r));
                                                });
                                        })(i, a, e.type, n);
                              })
                            : t();
                    }),
                s = e => -1 !== i.indexOf(e.type.toLowerCase());
        },
        557: function(e, t, r) {
            'use strict';
            var a = r(433),
                i = r.n(a),
                n = r(29),
                o = r(434),
                s = r(615);
            const l = Object(o.c)(s.a, { target: 'egek4pu0' })({
                name: '1w19lv8',
                styles: 'position:relative;top:2px;right:8px;',
            });
            var c = { name: '1mbidny', styles: 'margin:8px 0px 0px 42px;width:81%;' };
            const d = Object(o.c)('button', { target: 'egek4pu1' })(
                'svg{path{fill:',
                Object(o.f)('buttonBackgroundColor'),
                ';}}padding:10px;border:1px solid ',
                Object(o.f)('buttonBackgroundColor'),
                ';border-radius:40px;margin:0 20px 20px 20px;width:240px;text-align:center;font-size:14px;font-weight:600;color:',
                Object(o.f)('buttonBackgroundColor'),
                ';background-color:',
                Object(o.f)('buttonTextColor'),
                ';',
                ({ isBorderless: e }) => e && c
            );
            function p(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            r.d(t, 'a', function() {
                return reply_to_button_ReplyToButton;
            });
            class reply_to_button_ReplyToButton extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        p(this, 'ref', void 0),
                        p(this, 'setReplyToButtonRef', e => {
                            this.ref = e;
                        });
                }
                componentDidMount() {
                    const { onShow: e } = this.props;
                    if (!this.ref || !e) return;
                    e(this.ref.clientHeight + 10);
                }
                render() {
                    const { onClick: e, isBorderless: t } = this.props;
                    return i.a.createElement(
                        d,
                        { ref: this.setReplyToButtonRef, onClick: e, isBorderless: t },
                        i.a.createElement(l, null),
                        Object(n.e)('reply_to_conversation').replace('…', '')
                    );
                }
            }
        },
        558: function(e, t, r) {
            'use strict';
            function a(e, t) {
                return async (r, a) => {
                    const i = a(),
                        { session: n } = i;
                    let o;
                    if (!t.payload || !t.payload.conversationId)
                        throw new Error('conversationId needs to be provided as a parameter');
                    o = t.payload.conversationId;
                    try {
                        r({
                            type: 'TRIGGER_TRANSITIONS_REQUEST',
                            payload: { timestamp: Date.now() },
                        }),
                            r(
                                (function(e) {
                                    return {
                                        type: 'TRIGGER_TRANSITIONS_SUCCESS',
                                        payload: e,
                                        conversation: e,
                                    };
                                })(await e.triggerTransitions(n, o, t))
                            );
                    } catch (e) {
                        r({
                            type: 'TRIGGER_TRANSITIONS_FAILURE',
                            error: !0,
                            payload: new Error(
                                (
                                    e || 'An error occured when triggering Operator transition.'
                                ).toString()
                            ),
                        });
                    }
                };
            }
            function i(e, t, r) {
                return (a, i) => {
                    const { session: n, app: o } = i(),
                        { conversationId: s } = o;
                    return e.getArticle(n, t, s).then(e => {
                        a({
                            type: 'OPEN_ARTICLE',
                            article: e,
                            metricMetadata: r,
                            conversationId: s,
                        });
                    });
                };
            }
            function n(e) {
                return (t, r) => {
                    const { app: i } = r(),
                        { conversationId: n } = i;
                    t({ type: 'CLOSE_ARTICLE', closedAt: new Date() }),
                        t(a(e, { type: 'closed_article', payload: { conversationId: n } }));
                };
            }
            function o(e, t, r, a) {
                return (i, n) => {
                    i({ type: 'CREATE_ARTICLE_REACTION_REQUEST', articleId: t, reactionIndex: r });
                    const { session: o } = n();
                    return e.createArticleReaction(o, t, r, !1, a);
                };
            }
            r.d(t, 'c', function() {
                return i;
            }),
                r.d(t, 'a', function() {
                    return n;
                }),
                r.d(t, 'b', function() {
                    return o;
                });
        },
        559: function(e, t, r) {
            'use strict';
            var a = r(433),
                i = r.n(a),
                n = r(59),
                o = r.n(n),
                s = r(514),
                l = r(434),
                c = r(611);
            const d = Object(l.c)('div', { target: 'ee6m5h00' })(
                    'font-size:',
                    96,
                    'px;line-height:',
                    96,
                    'px;margin-top:',
                    12,
                    'px;',
                    c.f.className,
                    '{font-size:',
                    38,
                    'px;line-height:',
                    38,
                    'px;margin-top:',
                    4.75,
                    'px;margin-bottom:',
                    4.75,
                    'px;}',
                    c.d.className,
                    '{font-size:',
                    45,
                    'px;line-height:',
                    45,
                    'px;margin-top:',
                    45 / 8,
                    'px;margin-bottom:',
                    45 / 8,
                    'px;}'
                ),
                p = Object(l.c)('img', { target: 'ee6m5h01' })(
                    'width:',
                    96,
                    'px;height:',
                    96,
                    'px;min-width:',
                    96,
                    'px;min-height:',
                    96,
                    'px;',
                    c.f.className,
                    '{width:',
                    38,
                    'px;height:',
                    38,
                    'px;min-width:',
                    38,
                    'px;min-height:',
                    38,
                    'px;}',
                    c.d.className,
                    '{width:',
                    45,
                    'px;height:',
                    45,
                    'px;min-width:',
                    45,
                    'px;min-height:',
                    45,
                    'px;}'
                );
            r.d(t, 'a', function() {
                return sticker_Sticker;
            });
            class sticker_Sticker extends a.Component {
                render() {
                    const { text: e } = this.props,
                        t = Object(s.e)(
                            o()(e)
                                .replace('&nbsp;', '')
                                .trim()
                        );
                    return this.useNativeEmoji() ? this.renderNative(t) : this.renderImage(t);
                }
                renderNative(e) {
                    return i.a.createElement(
                        d,
                        { role: 'img', 'aria-label': Object(s.b)(this.props.text) || e },
                        e
                    );
                }
                renderImage(e) {
                    const t = `https://js.intercomcdn.com/images/stickers/${Object(s.a)(
                        e,
                        16
                    )}.png`;
                    return i.a.createElement(p, {
                        src: t,
                        alt: e,
                        'aria-label': Object(s.b)(this.props.text),
                    });
                }
                useNativeEmoji() {
                    const { emoji: e } = this.props;
                    return (
                        'native' === e || ('image' !== e && ('auto' === e ? Object(s.c)() : void 0))
                    );
                }
            }
            var u, h, m;
            (m = { emoji: 'auto' }),
                (h = 'defaultProps') in (u = sticker_Sticker)
                    ? Object.defineProperty(u, h, {
                          value: m,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (u[h] = m);
        },
        611: function(e, t, r) {
            'use strict';
            r.d(t, 'f', function() {
                return c;
            }),
                r.d(t, 'e', function() {
                    return d;
                }),
                r.d(t, 'd', function() {
                    return u;
                }),
                r.d(t, 'b', function() {
                    return h;
                }),
                r.d(t, 'c', function() {
                    return m;
                }),
                r.d(t, 'a', function() {
                    return b;
                });
            var a = r(434),
                i = r(467),
                n = r(494),
                o = r(435);
            const s = Object(a.d)('0%{opacity:0;}50%{opacity:0;}100%{opacity:1;}');
            var l = { name: 'suayju', styles: 'margin:0 auto;width:100%;' };
            const c = Object(a.c)('div', { target: 'epk4fbi0' })(
                    'max-height:',
                    Object(a.f)('notificationHeightPx'),
                    'px;width:',
                    340,
                    'px;&,*{cursor:pointer;}',
                    i.b.className,
                    '{border-radius:',
                    Object(a.f)('notificationBorderRadiusPx'),
                    'px;padding:20px 20px 20px;box-shadow:',
                    Object(a.f)('notificationBoxShadow'),
                    ';}',
                    i.c.className,
                    '{padding:0;}',
                    ({ theme: e }) => e.isMobileSize && l
                ),
                d = Object(a.c)('div', { target: 'epk4fbi1' })(
                    'margin:5px ',
                    Object(a.f)('chatMarginPx'),
                    'px 0 ',
                    Object(a.f)('chatMarginPx'),
                    'px;font-size:14px;overflow:hidden;line-height:22px;max-height:44px;color:',
                    Object(a.f)('bodyText'),
                    ';animation:',
                    s,
                    ' 500ms ease;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;'
                );
            var p = { name: '8atqhb', styles: 'width:100%;' };
            const u = Object(a.c)('div', { target: 'epk4fbi2' })(
                    'height:100%;width:',
                    340,
                    'px;position:relative;*{cursor:pointer;}',
                    n.e.className,
                    '{width:100%;}',
                    ({ theme: e }) => e.isMobileSize && p
                ),
                h = Object(a.c)(d, { target: 'epk4fbi3' })({
                    name: '1hw29i9',
                    styles: 'margin-top:12px;',
                }),
                m = Object(a.c)('div', { target: 'epk4fbi4' })(
                    '/* @noflip */ margin-left:45px;padding:17px 22px;box-sizing:border-box;background-color:',
                    Object(a.f)('white'),
                    ';border-radius:',
                    Object(a.f)('notificationBorderRadiusPx'),
                    'px;border-bottom-left-radius:0;box-shadow:',
                    Object(a.f)('notificationBoxShadow'),
                    ';font-size:13px;line-height:1.5;height:100%;position:relative;&:after{',
                    o.g,
                    '}'
                ),
                b = Object(a.c)('div', { target: 'epk4fbi5' })(
                    'position:absolute;bottom:0;/* @noflip */ left:3px;box-shadow:',
                    Object(a.f)('notificationBoxShadow'),
                    ';border-radius:50%;'
                );
        },
        612: function(e, t, r) {
            'use strict';
            r.d(t, 'a', function() {
                return h;
            });
            var a = r(434),
                i = r(446),
                n = r(472),
                o = r(511),
                s = r(513),
                l = r(466),
                c = {
                    name: 'vdm84c',
                    styles: 'float:none;/* @noflip */ padding-left:0;width:100%;margin-top:8px;',
                },
                d = { name: '1u0x8ae', styles: 'width:calc(100% - 100px);' },
                p = { name: 'vtn2l4', styles: 'padding-bottom:20px;' },
                u = {
                    name: '17fazuw',
                    styles:
                        '/* @noflip */ float:left;/* @noflip */ padding-left:45px;width:calc(100% - 48px);',
                };
            const h = Object(a.c)('div', { target: 'elc4fgv0' })(
                'position:relative;/* @noflip */ text-align:left;',
                ({ isUser: e }) =>
                    e &&
                    Object(a.b)(
                        '/* @noflip */ float:right;/* @noflip */ padding-left:48px;width:calc(100% - 48px);',
                        l.a.className,
                        '{/* @noflip */ float:right;}'
                    ),
                ' ',
                ({ isUser: e, isSingleBlock: t }) =>
                    e && t && Object(a.b)(n.a.className, '{/* @noflip */ float:right;}'),
                ' ',
                ({ isAdmin: e }) => e && u,
                ' ',
                ({ isUser: e, isAdmin: t }) =>
                    !e &&
                    !t &&
                    Object(a.b)(
                        '/* @noflip */ float:left;/* @noflip */ padding-left:48px;',
                        l.a.className,
                        '{/* @noflip */ float:left;}'
                    ),
                ' ',
                ({ theme: e, hasAvatar: t, isBorderless: r }) =>
                    e.isLeftAlign &&
                    t &&
                    r &&
                    !e.isMobileSize &&
                    Object(a.b)(
                        '/* @noflip */ margin-left:55px;',
                        o.a.className,
                        ',',
                        i.b.className,
                        '{/* @noflip */ left:-10px;}'
                    ),
                ' ',
                ({ isAdmin: e, isBorderless: t }) =>
                    e &&
                    t &&
                    Object(a.b)(
                        '/* @noflip */ float:right;',
                        s.b.className,
                        '{padding:0px;margin-top:6px;}'
                    ),
                ' ',
                ({ isUser: e, isBorderless: t, theme: r }) =>
                    e &&
                    t &&
                    Object(a.b)(
                        s.b.className,
                        '{float:none;color:',
                        r.isPrimaryColorLight ? r.grey : r.white,
                        ';opacity:0.5;width:auto;}',
                        s.c.className,
                        '{float:none;}'
                    ),
                ' ',
                ({ theme: e }) => e.tabNavigation && p,
                ' ',
                ({ theme: e }) => e.isLeftAlign && d,
                ' ',
                ({ theme: e, isAdmin: t, isBorderless: r }) => t && r && e.isMobileBrowser && c
            );
        },
        613: function(e, t, r) {
            'use strict';
            r.d(t, 'a', function() {
                return EmailAttribute;
            });
            var a,
                i,
                n,
                o = r(433),
                s = r.n(o),
                l = r(501),
                c = r(550),
                d = r(29);
            class EmailAttribute extends o.Component {
                render() {
                    const {
                        value: e,
                        saveState: t,
                        isBorderless: r,
                        isReplyType: a,
                        isNotificationChannel: i,
                        isSubmittable: n,
                        placeholder: o,
                        disabled: p,
                        errorMessage: u,
                        hideErrorMessage: h,
                        onSubmit: m,
                        onChange: b,
                    } = this.props;
                    return s.a.createElement(l.a, {
                        value: e,
                        placeholder: o,
                        saveState: t,
                        disabled: p,
                        isValid: c.a,
                        isBorderless: r,
                        isReplyType: a,
                        isSubmittable: n,
                        isNotificationChannel: i,
                        onSubmit: m,
                        onChange: b,
                        hideErrorMessage: h,
                        ariaLabel: 'Enter your email',
                        type: 'email',
                        validationErrorMessage:
                            u || Object(d.e)('that_email_address_doesnt_look_quite_right'),
                    });
                }
            }
            (n = { placeholder: 'you@company.com', isSubmittable: !0, hideErrorMessage: !1 }),
                (i = 'defaultProps') in (a = EmailAttribute)
                    ? Object.defineProperty(a, i, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (a[i] = n);
        },
        614: function(e, t, r) {
            'use strict';
            var a = r(433),
                i = r.n(a);
            t.a = () =>
                i.a.createElement(
                    'svg',
                    { focusable: 'false', 'aria-hidden': 'true', viewBox: '0 0 29 18' },
                    i.a.createElement(
                        'g',
                        { fillRule: 'evenodd' },
                        i.a.createElement('path', {
                            d:
                                'M9 1a8 8 0 1 0 0 16h11a8 8 0 1 0 0-16H9zm0-1h11a9 9 0 0 1 0 18H9A9 9 0 0 1 9 0z',
                            fillRule: 'nonzero',
                        }),
                        i.a.createElement('path', {
                            d:
                                'M6.561 9.337c0-2.277 1.683-3.795 3.773-3.795 1.298 0 2.2.572 2.849 1.375l-.726.451c-.462-.594-1.243-1.012-2.123-1.012-1.606 0-2.827 1.232-2.827 2.981 0 1.738 1.221 2.992 2.827 2.992.88 0 1.606-.429 1.969-.792v-1.496H9.784v-.814h3.432v2.651a3.822 3.822 0 0 1-2.882 1.265c-2.09 0-3.773-1.529-3.773-3.806zM14.701 13V5.663h.913V13h-.913zm2.629 0V5.663h4.807v.814h-3.894v2.365h3.817v.814h-3.817V13h-.913z',
                        })
                    )
                );
        },
        615: function(e, t, r) {
            'use strict';
            r.d(t, 'a', function() {
                return n;
            });
            var a = r(433),
                i = r.n(a);
            function n(e) {
                return i.a.createElement(
                    'svg',
                    {
                        focusable: 'false',
                        'aria-hidden': 'true',
                        className: e.className,
                        width: '16px',
                        height: '12px',
                        viewBox: '0 0 16 12',
                    },
                    i.a.createElement(
                        'g',
                        { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
                        i.a.createElement(
                            'g',
                            { transform: 'translate(-257.000000, -529.000000)' },
                            i.a.createElement(
                                'g',
                                { transform: 'translate(100.000000, 187.000000)' },
                                i.a.createElement(
                                    'g',
                                    { transform: 'translate(94.000000, 0.000000)' },
                                    i.a.createElement(
                                        'g',
                                        { transform: 'translate(16.000000, 169.000000)' },
                                        i.a.createElement(
                                            'g',
                                            { transform: 'translate(24.000000, 159.000000)' },
                                            i.a.createElement(
                                                'g',
                                                { transform: 'translate(23.000000, 14.000000)' },
                                                i.a.createElement('path', {
                                                    d:
                                                        'M10.8401488,6.224907 L15.6817765,11.0665347 C15.51005,11.3499528 15.2722574,11.5748794 14.9768457,11.7328673 C14.6509198,11.9071744 14.3276335,12 13.4361148,12 L2.5638852,12 C1.67236646,12 1.34908022,11.9071744 1.0231543,11.7328673 C0.72877254,11.5754302 0.491608869,11.3515205 0.320022148,11.069497 L5.16278101,6.22673813 L7.26933188,7.54333242 C7.55321179,7.72075737 7.66665987,7.76662232 7.80054357,7.79679663 C7.93442727,7.82697094 8.06557273,7.82697094 8.19945643,7.79679663 C8.33334013,7.76662232 8.44678821,7.72075737 8.73066812,7.54333242 L10.8401488,6.224907 Z M11.7104341,5.6809787 L15.6940002,3.19124987 C15.7876675,3.1327078 15.9110576,3.16118243 15.9695997,3.25484974 C15.9894661,3.28663606 16,3.32336558 16,3.36084953 L16,9.4361148 C16,9.63606843 15.9953306,9.80743801 15.9861196,9.95666428 L11.7104341,5.6809787 Z M4.29249574,5.68280984 L0.0141588143,9.96114676 C0.0047635636,9.81087199 2.47328067e-17,9.63807348 0,9.4361148 L1.24567172e-16,3.36084953 C1.11040097e-16,3.25039258 0.08954305,3.16084953 0.2,3.16084953 C0.237483943,3.16084953 0.274213468,3.17138342 0.305999788,3.19124987 L4.29249574,5.68280984 Z M1,-2.48689958e-14 L15,-2.48689958e-14 C15.5522847,-2.49704488e-14 16,0.44771525 16,1 L16,1.8763932 C16,1.95214761 15.9571995,2.02140024 15.8894427,2.05527864 L8.4472136,5.7763932 C8.1656861,5.91715695 7.8343139,5.91715695 7.5527864,5.7763932 L0.110557281,2.05527864 C0.0428004752,2.02140024 3.97855298e-16,1.95214761 3.88578059e-16,1.8763932 L0,1 C-6.76353751e-17,0.44771525 0.44771525,-2.47675427e-14 1,-2.48689958e-14 Z',
                                                })
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                );
            }
        },
        616: function(e, t, r) {
            'use strict';
            r.d(t, 'a', function() {
                return d;
            }),
                r.d(t, 'b', function() {
                    return p;
                }),
                r.d(t, 'g', function() {
                    return u;
                }),
                r.d(t, 'd', function() {
                    return h;
                }),
                r.d(t, 'e', function() {
                    return b;
                }),
                r.d(t, 'f', function() {
                    return v;
                }),
                r.d(t, 'c', function() {
                    return C;
                });
            var a = r(434),
                i = r(440),
                n = r(435);
            const o = Object(a.d)(
                    '0%{opacity:0;transform:translateY(20px);}100%{opacity:1;transform:translateY(0);position:initial;}'
                ),
                s = Object(a.d)(
                    '0%{opacity:0;transform:translateY(-20px);}100%{opacity:1;transform:translateY(0);}'
                ),
                l = Object(a.d)(
                    '0%{opacity:0;transform:translateX(-20px);}100%{opacity:1;transform:translateY(0);}'
                ),
                c = Object(a.d)(
                    '0%{opacity:0;transform:translateX(20px);}100%{opacity:1;transform:translateY(0);}'
                ),
                d = Object(a.c)(i.a, { target: 'e1rbdy0f0' })({
                    name: '1cs7hh',
                    styles: 'height:38px;width:38px;pointer-events:none;',
                }),
                p = Object(a.c)('div', { target: 'e1rbdy0f1' })({
                    name: 'c8ift8',
                    styles:
                        "position:absolute;pointer-events:none;[x-placement^='top'] &{bottom:-9px;transform:translateY(20px);}[x-placement^='right'] &{transform:translateX(-20px);}[x-placement^='bottom'] &{transform:translateY(-20px);}[x-placement^='left'] &{right:-9px;transform:translateX(20px);}",
                }),
                u = Object(a.c)('div', { target: 'e1rbdy0f2' })(
                    'transition:opacity 0.6s ease;z-index:',
                    Object(n.m)(1),
                    ';visibility:visible !important;'
                ),
                h = Object(a.c)('div', { target: 'e1rbdy0f3' })(
                    'animation:',
                    o,
                    " 800ms ease;[x-placement^='top'] &{animation:",
                    s,
                    " 800ms ease;}[x-placement^='right'] &{animation:",
                    c,
                    " 800ms ease;}[x-placement^='bottom'] &{animation:",
                    o,
                    " 800ms ease;}[x-placement^='left'] &{animation:",
                    l,
                    ' 800ms ease;}'
                );
            var m = {
                name: '11j8jdr',
                styles: 'box-shadow:-1px 1px 0px #eeeeee;margin-left:25px;',
            };
            const b = Object(a.c)('div', { target: 'e1rbdy0f4' })(
                    "width:13px;height:25px;position:relative;overflow:hidden;&:after{content:'';position:absolute;width:20px;height:20px;background:#ffffff;transform:rotate(45deg);top:2px;}&[x-placement^='top']{height:13px;width:25px;&:after{top:-12px;left:2px;box-shadow:1px 1px 1px 0 ",
                    'rgba(0, 0, 0, 0.08)',
                    ";}}&[x-placement^='right']{height:25px;width:13px;&:after{right:-12.5px;box-shadow:1px -1px 1px 2px ",
                    'rgba(0, 0, 0, 0.08)',
                    ";}}&[x-placement^='bottom']{height:13px;width:25px;&:after{top:4.5px;left:2px;box-shadow:-1px -1px 1px 0 ",
                    'rgba(0, 0, 0, 0.08)',
                    ";}}&[x-placement^='left']{height:25px;width:13px;&:after{left:-12.5px;box-shadow:-1px 1px 1px 2px ",
                    'rgba(0, 0, 0, 0.08)',
                    ';}}',
                    ({ isInsideInbox: e }) => e && m
                ),
                g = { name: '41q668', styles: 'transform:scale(1);' },
                f = (e, t) =>
                    Object(a.d)(
                        '0%{',
                        g,
                        '}85%{',
                        ((e, t) =>
                            Object(a.b)(
                                'transform:scaleX(calc(1 + (4 / ',
                                e,
                                '))) scaleY(calc(1 + (4 / ',
                                t,
                                ')));'
                            ))(e, t),
                        '}100%{',
                        g,
                        '}'
                    );
            var y = {
                name: '1qu4hyo',
                styles:
                    'display:block;position:fixed;top:50%;left:50%;box-shadow:0px 0px 0px 4000px rgba(0,0,0,0.35);',
            };
            const v = Object(a.c)('div', { target: 'e1rbdy0f5' })(
                    'z-index:',
                    Object(n.m)(),
                    ";content:'';display:none;position:absolute;left:0;top:0;width:0;height:0;pointer-events:none;border-radius:1px;",
                    ({ isAnimating: e, width: t, height: r }) =>
                        e && Object(a.b)('animation:', f(t, r), ' 2s infinite;'),
                    ' ',
                    ({ isPost: e }) => e && y,
                    ' ',
                    ({ isStep: e, theme: t }) =>
                        e &&
                        Object(a.b)(
                            'display:block;box-shadow:0 0 0 3px ',
                            t.appColor,
                            ',0px 0px 0px 4000px rgba(0,0,0,0.35);'
                        )
                ),
                C = Object(a.c)('div', { target: 'e1rbdy0f6' })(
                    ({ scrollable: e, theme: t }) =>
                        e &&
                        Object(a.b)(
                            'position:fixed;height:100%;width:100%;top:0;left:0;opacity:0;box-sizing:border-box;z-index:',
                            Object(n.m)(0, t),
                            ';'
                        )
                );
        },
        617: function(e, t, r) {
            'use strict';
            r.d(t, 'a', function() {
                return Post;
            });
            var a = r(433),
                i = r.n(a),
                n = r(502),
                o = r(487),
                s = r(470),
                l = r(449),
                c = r(503),
                d = r(29),
                p = r(557),
                u = r(1),
                h = r(485),
                m = r(441),
                b = r(473),
                g = r(496);
            function f() {
                return (f =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var a in r)
                                Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function y(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            class Post extends a.Component {
                constructor(...e) {
                    super(...e),
                        y(this, 'state', { isScrolled: !1 }),
                        y(this, 'handleScroll', e => {
                            this.setState({ isScrolled: e.target.scrollTop > 0 }), Object(g.a)(e);
                        }),
                        y(this, 'addClickedComposerMetric', () => {
                            const {
                                message: { id: e },
                                conversationId: t,
                            } = this.props;
                            Object(u.e)('clicked', 'composer', 'in_app', 'from_full', {
                                message_type: 'post',
                                message_id: e,
                                conversation_id: t,
                            });
                        }),
                        y(this, 'handleComposerClick', e => () => {
                            this.addClickedComposerMetric(),
                                this.props.onComposerClick(),
                                e(void 0, { shouldReturnFocus: !1 }),
                                this.context &&
                                    this.context.focusComposer &&
                                    setTimeout(() => this.context.focusComposer(), n.a);
                        });
                }
                renderFooter(e) {
                    const { showReplyToButton: t, isUpfrontEmailComposerShowing: r } = this.props;
                    return t || r
                        ? i.a.createElement(p.a, { onClick: this.handleComposerClick(e) })
                        : i.a.createElement(
                              m.b,
                              {
                                  className: 'intercom-post-composer',
                                  onClick: this.handleComposerClick(e),
                                  'aria-label': Object(d.e)('open_conversation_and_reply'),
                              },
                              i.a.createElement(b.f, null, Object(d.e)('reply_to_conversation'))
                          );
                }
                renderReactionPicker() {
                    const { reactionsReply: e, onReactionSelect: t } = this.props;
                    return i.a.createElement(c.a, f({}, e, { onReactionSelect: t }));
                }
                render() {
                    const { isScrolled: e } = this.state,
                        {
                            appName: t,
                            message: r,
                            reactionsReply: a,
                            onClose: c,
                            frameWindow: p,
                            returnFocus: u,
                            showReplyToButton: h,
                            isUpfrontEmailComposerShowing: b,
                        } = this.props,
                        { author: g, lastActiveAt: f, body: y } = r;
                    return i.a.createElement(
                        n.b,
                        { closeCallback: c, showCloseOverlay: !1, frameWindow: p, returnFocus: u },
                        ({ onClose: r }) =>
                            i.a.createElement(
                                m.e,
                                { isScrolled: e },
                                i.a.createElement(
                                    m.d,
                                    { className: 'intercom-post' },
                                    i.a.createElement(
                                        s.a,
                                        {
                                            appName: t,
                                            isReplyStyle: !1,
                                            author: g,
                                            lastActiveAt: f,
                                        },
                                        i.a.createElement(m.a, {
                                            className: 'intercom-post-close',
                                            onClick: r,
                                            'aria-label': Object(d.e)('close'),
                                        }),
                                        i.a.createElement(
                                            o.a,
                                            { isInsideModal: !0, onScroll: this.handleScroll },
                                            i.a.createElement(l.a, { blocks: y, frameWindow: p })
                                        ),
                                        i.a.createElement(
                                            m.c,
                                            { isCentered: h || b },
                                            a ? this.renderReactionPicker() : this.renderFooter(r)
                                        )
                                    )
                                )
                            )
                    );
                }
            }
            y(Post, 'contextType', h.a);
        },
        618: function(e, t, r) {
            'use strict';
            r.d(t, 'a', function() {
                return Button;
            });
            var a = r(433),
                i = r.n(a),
                n = r(480);
            function o(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            class Button extends a.Component {
                constructor(...e) {
                    super(...e),
                        o(this, 'node', void 0),
                        o(this, 'handleOnClick', () => {
                            this.props.onClick && this.props.onClick(this.props.value);
                        });
                }
                componentDidMount() {
                    this.props.focused && this.node && this.node.focus();
                }
                render() {
                    return i.a.createElement(
                        n.animated.button,
                        {
                            onClick: this.handleOnClick,
                            value: this.props.value,
                            style: this.props.style,
                            className: this.props.className,
                            ref: e => (this.node = e),
                        },
                        this.props.label
                    );
                }
            }
            o(Button, 'defaultProps', { value: '', label: '', className: '' });
        },
        619: function(e, t, r) {
            'use strict';
            r.d(t, 'a', function() {
                return i;
            });
            var a = r(433);
            function i(e) {
                const t = Object(a.useRef)(null),
                    [r, i] = Object(a.useState)(!1);
                return (
                    Object(a.useEffect)(
                        () => (
                            (t.current = setTimeout(() => i(!0), e)), () => clearTimeout(t.current)
                        ),
                        [e]
                    ),
                    r
                );
            }
        },
        620: function(e, t, r) {
            'use strict';
            r.d(t, 'a', function() {
                return d;
            }),
                r.d(t, 'b', function() {
                    return p;
                }),
                r.d(t, 'l', function() {
                    return u;
                }),
                r.d(t, 'm', function() {
                    return h;
                }),
                r.d(t, 'e', function() {
                    return m;
                }),
                r.d(t, 'g', function() {
                    return b;
                }),
                r.d(t, 'f', function() {
                    return g;
                }),
                r.d(t, 'c', function() {
                    return v;
                }),
                r.d(t, 'h', function() {
                    return C;
                }),
                r.d(t, 'k', function() {
                    return x;
                }),
                r.d(t, 'j', function() {
                    return j;
                }),
                r.d(t, 'd', function() {
                    return O;
                }),
                r.d(t, 'i', function() {
                    return E;
                });
            var a = r(434),
                i = r(445),
                n = r(453),
                o = r(446),
                s = r(435),
                l = { name: 'ssq3ao', styles: 'margin-left:45px;position:relative;' },
                c = { name: '1kgjpo2', styles: 'padding-left:45px;position:relative;' };
            const d = Object(a.c)('div', { target: 'e1692fz40' })(
                    ({ isInline: e, isBorderless: t }) => !e && !t && c,
                    ' ',
                    ({ isBorderless: e }) => e && l,
                    ' ',
                    ({ isInline: e }) =>
                        e &&
                        Object(a.b)(
                            i.a,
                            ' ',
                            n.a.className,
                            ' &,',
                            o.e.className,
                            ' &,.intercom-comment &{box-shadow:0 1px 2px 0 rgba(0,0,0,0.03);margin-bottom:10px;}'
                        ),
                    ' ',
                    ({ isMessage: e }) =>
                        e &&
                        Object(a.b)(
                            'width:100%;padding-left:0;',
                            E.className,
                            '{padding:21px 30px;}',
                            u.className,
                            '{margin-bottom:8px;font-size:20px;}',
                            j.className,
                            '{font-size:14px;line-height:20px;}',
                            m.className,
                            '{height:26px;font-size:13px;}',
                            g.className,
                            '{margin-right:8px;}',
                            C.className,
                            '{width:calc(100% - 32px);padding-top:3px;}'
                        ),
                    ' ',
                    ({ theme: e, isBorderless: t, isInline: r }) =>
                        ((!t && !r) || t || r) &&
                        Object(a.b)(
                            p.className,
                            '{display:block;position:relative;overflow:hidden;background-color:',
                            e.white,
                            ';transition:all 0.12s ease-out;text-decoration:none !important;',
                            s.d,
                            ' &:first-of-type{',
                            Object(s.c)({ theme: e }),
                            ' border-radius:3px 3px 0 0;}&:last-child{border-radius:0 0 3px 3px;}}',
                            E.className,
                            '{padding:20px;}',
                            u.className,
                            '{color:',
                            e.isPrimaryColorLight ? e.black : e.appColor,
                            ";font-size:14px;line-height:1.2;overflow:wrap;&[type='educate.help_center']{text-align:center;font-size:13px;}}",
                            j.className,
                            '{color:',
                            e.bodyText,
                            ';font-size:13px;line-height:1.38;',
                            s.l,
                            '}',
                            m.className,
                            '{margin-top:11px;}',
                            g.className,
                            '{display:inline-block;margin-right:8px;}',
                            C.className,
                            '{width:calc(100% - 24px);display:inline-block;vertical-align:middle;color:',
                            e.subheaderText,
                            ';line-height:16px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;span{white-space:nowrap;}}'
                        )
                ),
                p = Object(a.c)('a', { target: 'e1692fz41' })(
                    ({ theme: e, isGrouped: t }) =>
                        t &&
                        Object(a.b)(
                            'border-bottom:1px solid ',
                            e.lightGrey8,
                            ';&:last-child{border-bottom:none;}&:hover{background-color:',
                            e.itemHover,
                            ';transform:none;}',
                            m.className,
                            '{margin-top:5px;}',
                            E.className,
                            '{padding:15px 20px;}'
                        )
                ),
                u = Object(a.c)('div', { target: 'e1692fz42' })(),
                h = Object(a.c)('span', { target: 'e1692fz43' })(),
                m = Object(a.c)('div', { target: 'e1692fz44' })(),
                b = Object(a.c)('span', { target: 'e1692fz45' })(),
                g = Object(a.c)('div', { target: 'e1692fz46' })();
            var f = { name: '1qgk0pb', styles: 'position:absolute;left:0;bottom:10px;' },
                y = { name: '1isz0w5', styles: 'bottom:0px;' };
            const v = Object(a.c)('div', { target: 'e1692fz47' })(
                    ({ isBorderless: e }) => e && y,
                    ' ',
                    ({ isBorderless: e }) => !e && f
                ),
                C = Object(a.c)('div', { target: 'e1692fz48' })({
                    name: '128nlh6',
                    styles: 'font-size:13px;',
                }),
                x = Object(a.c)('div', { target: 'e1692fz49' })(
                    'background-color:',
                    Object(a.f)('white'),
                    ';border-radius:5px;color:',
                    Object(a.f)('bodyText'),
                    ';'
                ),
                j = Object(a.c)('div', { target: 'e1692fz410' })(),
                O = Object(a.c)('div', { target: 'e1692fz411' })(
                    'text-align:center;color:',
                    Object(a.f)('metaText'),
                    ';font-size:13px;clear:both;padding-top:0;padding-bottom:14px;'
                ),
                E = Object(a.c)('div', { target: 'e1692fz412' })({
                    name: '1kuvg3o',
                    styles: '@media (-ms-high-contrast:active){border:1px solid white;}',
                });
        },
        621: function(e, t, r) {
            'use strict';
            r.d(t, 'd', function() {
                return n;
            }),
                r.d(t, 'f', function() {
                    return o;
                }),
                r.d(t, 'a', function() {
                    return s;
                }),
                r.d(t, 'e', function() {
                    return l;
                }),
                r.d(t, 'g', function() {
                    return c;
                }),
                r.d(t, 'c', function() {
                    return d;
                }),
                r.d(t, 'i', function() {
                    return p;
                }),
                r.d(t, 'h', function() {
                    return u;
                }),
                r.d(t, 'b', function() {
                    return h;
                });
            var a = r(434),
                i = r(435);
            const n = Object(a.c)('div', { target: 'e17iaxbc0' })(
                    'margin:30px 0 30px 0;position:relative;text-align:left;background-color:',
                    Object(a.f)('white'),
                    ';border-radius:5px;color:',
                    Object(a.f)('bodyText'),
                    ';transition:height 200ms ease-in-out;height:',
                    Object(a.e)('height'),
                    'px;',
                    i.c
                ),
                o = Object(a.c)('div', { target: 'e17iaxbc1' })({
                    name: '19kzrtu',
                    styles: 'padding:24px;',
                }),
                s = Object(a.c)('div', { target: 'e17iaxbc2' })({
                    name: 'z0kmtn',
                    styles:
                        'font-size:14px;color:#3a3c4c;line-height:22px;text-align:center;margin-bottom:3px;',
                }),
                l = Object(a.c)('div', { target: 'e17iaxbc3' })(
                    'font-size:13px;line-height:19px;color:',
                    Object(a.f)('subheaderText'),
                    ';text-align:center;'
                ),
                c = Object(a.c)('div', { target: 'e17iaxbc4' })(
                    'border-top:1px solid ',
                    Object(a.f)('dividerBorder'),
                    ';color:',
                    Object(a.f)('subheaderText'),
                    ';font-size:14px;line-height:19px;max-height:140px;overflow-y:auto;padding:16px 24px;'
                ),
                d = Object(a.c)('div', { target: 'e17iaxbc5' })({
                    name: '1299peo',
                    styles: 'padding:20px 20px 0;',
                }),
                p = Object(a.c)('div', { target: 'e17iaxbc6' })({
                    name: 'gs1lf3',
                    styles: 'position:relative;margin-bottom:5px;',
                }),
                u = Object(a.c)('div', { target: 'e17iaxbc7' })(
                    'font-size:14px;line-height:24px;color:',
                    Object(a.f)('bodyText'),
                    ';transition:opacity 300ms 1000ms,max-height 400ms 1000ms;position:static;max-height:48px;text-align:center;'
                ),
                h = Object(a.c)('div', { target: 'e17iaxbc8' })({
                    name: '1jwu2i2',
                    styles: 'margin:8px 10px 6px;display:flex;justify-content:space-between;',
                });
        },
        622: function(e, t, r) {
            'use strict';
            r.d(t, 'b', function() {
                return n;
            }),
                r.d(t, 'a', function() {
                    return s;
                });
            var a = r(434),
                i = r(621);
            const n = Object(a.c)('div', { target: 'e1d0rm7l0' })(
                'width:100%;position:relative;float:left;',
                i.d.className,
                '{margin-top:8px;margin-bottom:8px;margin-left:45px;}',
                ({ isBorderless: e }) => e && Object(a.b)(i.d.className, '{margin-left:45px;}')
            );
            var o = { name: '1qgk0pb', styles: 'position:absolute;left:0;bottom:10px;' };
            const s = Object(a.c)('div', { target: 'e1d0rm7l1' })(({ isBorderless: e }) => !e && o);
        },
        623: function(e, t, r) {
            'use strict';
            r.d(t, 'b', function() {
                return h;
            }),
                r.d(t, 'a', function() {
                    return f;
                });
            var a = r(434),
                i = r(435),
                n = r(446),
                o = r(513),
                s = r(794),
                l = r.n(s),
                c = r(795),
                d = r.n(c),
                p = r(466),
                u = r(612);
            const h = '200ms';
            var m = { name: 'y8aj3r', styles: 'padding:0;' },
                b = { name: '4cxybv', styles: 'padding-bottom:8px;' },
                g = {
                    name: 'lb05wl',
                    styles: '&.intercom-conversation-part-enter{transform:translateY(0);}',
                };
            const f = Object(a.c)('div', { target: 'e1iwlnx70' })(
                i.h,
                ' padding-bottom:16px;',
                ({ isAdmin: e }) =>
                    e &&
                    Object(a.b)(
                        '&.intercom-conversation-part-enter{opacity:0;}&.intercom-conversation-part-enter.intercom-conversation-part-enter-active{opacity:1;transition:opacity ',
                        h,
                        ';}',
                        o.b.className,
                        '{/* @noflip */ padding-left:45px;}'
                    ),
                ' ',
                ({ isSelf: e, conversationHasScrolled: t }) =>
                    e &&
                    Object(a.b)(
                        '&.intercom-conversation-part-enter{opacity:0;transform:translateY(40px);}&.intercom-conversation-part-enter.intercom-conversation-part-enter-active{opacity:1;transform:translateY(0);transition:opacity ',
                        h,
                        ',transform ',
                        h,
                        ';}',
                        t && g,
                        ' ',
                        o.b.className,
                        '{/* @noflip */ float:right;}',
                        o.c.className,
                        '{/* @noflip */ float:right;}'
                    ),
                ' ',
                ({ isAdmin: e, isSelf: t }) =>
                    !e && !t && Object(a.b)(o.b.className, '{/* @noflip */ padding-left:45px;}'),
                ' ',
                ({ grouped: e }) => e && b,
                ' ',
                ({ isLastPart: e, isBorderless: t }) =>
                    e && Object(a.b)('padding-bottom:24px;', t && m),
                ' ',
                ({ theme: e, isFailedPart: t }) =>
                    t &&
                    Object(a.b)(
                        '*{cursor:pointer;}',
                        o.b.className,
                        '{',
                        Object(i.b)(l.a, d.a, '11px', '11px'),
                        ' /* @noflip */ padding-left:15px;background-position:left 7px;background-repeat:no-repeat;color:',
                        e.errorText,
                        ';width:auto;}'
                    ),
                ' ',
                ({ isAdmin: e, isBorderless: t }) =>
                    e && t && Object(a.b)(n.e.className, ' ', o.b.className, '{padding:5px 20px;}'),
                ' ',
                n.e.className,
                ' + ',
                u.a.className,
                '{',
                p.a.className,
                '{padding-bottom:8px;}}'
            );
        },
        624: function(e, t, r) {
            'use strict';
            r.d(t, 'j', function() {
                return l;
            }),
                r.d(t, 'i', function() {
                    return c;
                }),
                r.d(t, 'b', function() {
                    return d;
                }),
                r.d(t, 'a', function() {
                    return p;
                }),
                r.d(t, 'h', function() {
                    return h;
                }),
                r.d(t, 'e', function() {
                    return b;
                }),
                r.d(t, 'f', function() {
                    return g;
                }),
                r.d(t, 'g', function() {
                    return f;
                }),
                r.d(t, 'c', function() {
                    return y;
                }),
                r.d(t, 'd', function() {
                    return v;
                });
            var a = r(469),
                i = r(86),
                n = r(29),
                o = r(15);
            const s = [
                    'january',
                    'february',
                    'march',
                    'april',
                    'may',
                    'june',
                    'july',
                    'august',
                    'september',
                    'october',
                    'november',
                    'december',
                ],
                l = e =>
                    'link' === e[0].messageType
                        ? !e.slice(1).every(t => Object(a.c)(t.createdAt, e[0].sentAt))
                        : !1 !== e[0].showCreatedAt &&
                          !e.every(t => Object(a.c)(t.createdAt, e[0].createdAt)),
                c = (e, t) => e && !Object(a.c)(t.createdAt, e.sentAt || e.createdAt),
                d = e => Object(n.e)(`${s[e.getMonth()]}_date`, { date: e.getDate() }),
                p = (e, t) =>
                    t.find(
                        t =>
                            t.author.isAdmin &&
                            t.author.id === e.id &&
                            t.createdAt >= e.lastActiveAt - 5e3
                    ),
                u = (e, t) => {
                    return !p(e, t) && ((r = e.lastActiveAt), new Date() - r < 1e4);
                    var r;
                },
                h = e => {
                    const { parts: t, lastTypingAdmin: r } = e;
                    return !!r && u(r, t);
                },
                m = (e, t) =>
                    (e.id === t.id && e.isAdmin === t.isAdmin) ||
                    (!0 === e.isSelf && !0 === t.isSelf) ||
                    (!0 === e.isBot && !0 === t.isBot),
                b = (e, t) => {
                    return (
                        !!t &&
                        ((r = e.partType), (n = t.partType), !Object(i.a)(r) && !Object(i.a)(n)) &&
                        Object(a.c)(e.createdAt, t.createdAt) &&
                        m(e.author, t.author) &&
                        ((e, t) => t - e <= 18e4)(e.createdAt, t.createdAt)
                    );
                    var r, n;
                },
                g = (e, t, r, a, i) => {
                    if ((e => e.author.isSelf)(e) || 'video' === e.messageType) return !1;
                    if (!r) return !b(e, t);
                    return !!t ? !m(e.author, t.author) : !(a && e.author.id === i.id);
                },
                f = (e, t, r) => {
                    const { isAdmin: a } = e.author,
                        i = t.length > 0 && Object(o.a)(t).id === e.id,
                        n =
                            'comment' === e.partType ||
                            'message' === e.partType ||
                            'attribute_collector' === e.partType,
                        s = 'failed' === e.saveState || 'saving' === e.saveState;
                    return (i || s) && !(a && r) && n;
                },
                y = e => e.clientId || e.id,
                v = e => 'quick_reply' === e.partType && (!e.body || 0 === e.body.length);
        },
        625: function(e, t, r) {
            'use strict';
            r.d(t, 'b', function() {
                return n;
            }),
                r.d(t, 'a', function() {
                    return l;
                }),
                r.d(t, 'c', function() {
                    return c;
                });
            var a = r(434),
                i = r(623);
            const n = Object(a.c)('div', { target: 'e1h2hbch0' })({
                name: 'dj4xvs',
                styles:
                    'display:flex;flex-direction:column;flex-grow:1;flex-shrink:0;justify-content:space-between;overflow-anchor:none;height:auto;position:relative;',
            });
            var o = { name: '1w5zg6j', styles: 'opacity:0.2;' },
                s = { name: '3dmdqb', styles: 'transition:none;' };
            const l = Object(a.c)('div', { target: 'e1h2hbch1' })(
                    'padding:24px 24px 0;display:flex;flex-flow:row wrap;transition:transform ',
                    i.b,
                    ';overflow-anchor:none;> *{flex:1 100%;max-width:100%;}',
                    ({ isScrolling: e }) => e && s,
                    ' ',
                    ({ isBorderless: e, isFaded: t }) => e && Object(a.b)('padding:0;', t && o)
                ),
                c = Object(a.c)('div', { target: 'e1h2hbch2' })(
                    'text-align:center;color:',
                    Object(a.f)('metaText'),
                    ';font-size:13px;clear:both;padding-top:14px;padding-bottom:14px;&:first-of-type{padding-top:0px;}'
                );
        },
        630: function(e, t, r) {
            'use strict';
            var a = r(437),
                i = r.n(a),
                n = r(433),
                o = r.n(n),
                s = r(442),
                l = r(436),
                c = r(617),
                d = r(470),
                p = r(449),
                u = r(1),
                h = r(459);
            function m(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            class post_card_PostCard extends n.Component {
                constructor(...e) {
                    super(...e),
                        m(this, 'state', { isTruncated: !1 }),
                        m(this, 'node', void 0),
                        m(this, 'handleClick', () => {
                            Object(u.e)('viewed', 'post', 'messenger', 'from_card', {
                                conversation_id: this.props.conversationId,
                            }),
                                this.props.onOpen(this.props.conversationId, this.props.part.id);
                        }),
                        m(this, 'handleClose', () => {
                            this.props.onClose();
                        }),
                        m(this, 'handleComposerClick', () => {
                            this.handleClose();
                        });
                }
                componentDidMount() {
                    this.handleResize();
                }
                handleResize() {
                    const { node: e } = this;
                    if (!e) return;
                    const { scrollHeight: t, clientHeight: r } = e;
                    this.setState({ isTruncated: t > r });
                }
                renderPost() {
                    const {
                        part: e,
                        appName: t,
                        reactionsReply: r,
                        onReactionSelect: a,
                        frameWindow: i,
                        isUpfrontEmailComposerShowing: n,
                    } = this.props;
                    return o.a.createElement(c.a, {
                        message: e,
                        appName: t,
                        reactionsReply: r,
                        onReactionSelect: a,
                        onComposerClick: this.handleComposerClick,
                        onClose: this.handleClose,
                        frameWindow: i,
                        isUpfrontEmailComposerShowing: n,
                        returnFocus: this.node && this.node.focus.bind(this.node),
                    });
                }
                render() {
                    const { part: e, appName: t, frameWindow: r, isOpen: a } = this.props,
                        { author: i, body: n } = e;
                    return o.a.createElement(
                        h.b,
                        {
                            className: 'intercom-post-card',
                            isTruncated: this.state.isTruncated,
                            onClick: this.handleClick,
                            ref: e => (this.node = e),
                        },
                        o.a.createElement(
                            d.a,
                            { appName: t, author: i },
                            o.a.createElement(
                                h.a,
                                null,
                                o.a.createElement(p.a, { blocks: n, frameWindow: r })
                            )
                        ),
                        a ? this.renderPost() : null
                    );
                }
            }
            var b = r(56);
            var g = Object(l.connect)(
                    e => {
                        const t = !!e.message.conversationId && !!e.message.partId,
                            { upfrontEmailCollectorShowing: r } = e.app.upfrontEmailCollection;
                        return { isOpen: t, isUpfrontEmailComposerShowing: r };
                    },
                    e => ({
                        onOpen: (t, r) => {
                            e(Object(b.b)(t, r));
                        },
                        onClose: () => {
                            e(Object(b.a)());
                        },
                    }),
                    (e, t, r) =>
                        Object.assign({}, e, t, r, {
                            onOpen: (e, r) => {
                                t.onOpen(e, r);
                            },
                            onClose: () => {
                                t.onClose();
                            },
                        })
                )(post_card_PostCard),
                f = r(458);
            class note_card_NoteCard extends n.Component {
                render() {
                    const { appName: e, part: t, frameWindow: r } = this.props,
                        { author: a, body: i } = t;
                    return o.a.createElement(
                        f.b,
                        { className: 'intercom-note-card' },
                        o.a.createElement(
                            d.a,
                            { appName: e, isReplyStyle: !1, author: a },
                            o.a.createElement(
                                f.a,
                                null,
                                o.a.createElement(p.a, { blocks: i, zoomable: !0, frameWindow: r })
                            )
                        )
                    );
                }
            }
            var y = r(640),
                v = r(494),
                C = r(502),
                x = r(487),
                j = r(462),
                O = r(503),
                E = r(29),
                w = r(469),
                S = r(443),
                k = r(441),
                _ = r(467);
            function P() {
                return (P =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var a in r)
                                Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function T(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            class article_Article extends n.Component {
                constructor(...e) {
                    super(...e),
                        T(this, 'state', { isScrolled: !1 }),
                        T(this, 'handleScroll', e =>
                            this.setState({ isScrolled: e.target.scrollTop > 0 })
                        ),
                        T(this, 'onClose', () => {
                            const { article: e, conversationId: t, onClose: r } = this.props;
                            Object(u.e)(
                                'closed',
                                'article',
                                'in_app',
                                'from_close_button',
                                { owner: 'educate', article_id: e && e.id, conversation_id: t },
                                'educate_event'
                            ),
                                r();
                        });
                }
                renderReactionPicker() {
                    const {
                        article: { reactionsReply: e },
                        onReactionSelect: t,
                    } = this.props;
                    return o.a.createElement(
                        O.a,
                        P({}, e, { prompt: Object(E.e)('article_question'), onReactionSelect: t })
                    );
                }
                render() {
                    const { isScrolled: e } = this.state,
                        { article: t, frameWindow: r, returnFocus: a } = this.props;
                    if (!t || !t.id) return null;
                    const i = t.author,
                        n = Date.parse(t.updatedAt);
                    return o.a.createElement(
                        C.b,
                        {
                            closeCallback: this.onClose,
                            showCloseOverlay: !1,
                            frameWindow: r,
                            returnFocus: a,
                        },
                        ({ onClose: a }) =>
                            o.a.createElement(
                                k.e,
                                { isScrolled: e },
                                o.a.createElement(
                                    S.c,
                                    { className: 'intercom-article intercom-post' },
                                    o.a.createElement(k.a, {
                                        className: 'intercom-post-close',
                                        onClick: a,
                                        'aria-label': Object(E.e)('close'),
                                    }),
                                    o.a.createElement(
                                        x.a,
                                        { isInsideModal: !0, onScroll: this.handleScroll },
                                        o.a.createElement(
                                            S.a,
                                            null,
                                            o.a.createElement(S.d, null, t.title),
                                            o.a.createElement(S.b, null, t.description),
                                            o.a.createElement(
                                                _.b,
                                                null,
                                                o.a.createElement(
                                                    _.a,
                                                    null,
                                                    i && o.a.createElement(j.a, { author: i })
                                                ),
                                                o.a.createElement(
                                                    v.e,
                                                    null,
                                                    o.a.createElement(
                                                        v.d,
                                                        {
                                                            className:
                                                                'test-author-summary-name-from',
                                                        },
                                                        o.a.createElement(
                                                            v.b,
                                                            {
                                                                className:
                                                                    'test-author-summary-from-clause',
                                                            },
                                                            `${Object(E.e)('written_by')} `
                                                        ),
                                                        o.a.createElement(
                                                            v.c,
                                                            {
                                                                className:
                                                                    'test-author-summary-name',
                                                            },
                                                            i.name
                                                        )
                                                    ),
                                                    o.a.createElement(
                                                        'div',
                                                        null,
                                                        o.a.createElement(
                                                            v.b,
                                                            {
                                                                className:
                                                                    'test-author-summary-from-clause',
                                                            },
                                                            Object(w.e)(n)
                                                        )
                                                    )
                                                )
                                            ),
                                            o.a.createElement(p.a, {
                                                blocks: t.blocks,
                                                frameWindow: r,
                                            })
                                        )
                                    ),
                                    o.a.createElement(
                                        k.c,
                                        null,
                                        t.reactionsReply ? this.renderReactionPicker() : null
                                    )
                                )
                            )
                    );
                }
            }
            article_Article.propTypes = {
                appName: i.a.string.isRequired,
                article: i.a.object.isRequired,
                onClose: i.a.func.isRequired,
                returnFocus: i.a.func,
                onReactionSelect: i.a.func.isRequired,
                conversationId: i.a.string.isRequired,
                frameWindow: i.a.object,
            };
            var A = r(2),
                R = r(558);
            const { assign: B } = Object;
            var I = Object(l.connect)(
                    e => {
                        const {
                            article: t,
                            app: { name: r, conversationId: a },
                        } = e;
                        return { appName: r, article: t, conversationId: a };
                    },
                    e => ({
                        onClose: () => {
                            e(Object(R.a)(A.b));
                        },
                        onReactionSelect: (t, r, a) => {
                            e(Object(R.b)(A.b, t, a, r));
                        },
                    }),
                    (e, t, r) => {
                        const a = B({}, e, t, r),
                            { article: i, onReactionSelect: n } = a,
                            o = i && i.id,
                            s = i && i.contentId;
                        return B(a, { onReactionSelect: n.bind(null, o, s) });
                    }
                )(article_Article),
                N = r(434);
            const M = Object(N.c)('svg', { target: 'ew7qwha0' })(
                    'fill:',
                    Object(N.f)('appColor'),
                    ' !important;height:13px;width:13px;padding-right:5px;'
                ),
                z = () =>
                    o.a.createElement(
                        M,
                        {
                            focusable: 'false',
                            'aria-hidden': 'true',
                            viewBox: '0 0 15 15',
                            version: '1.1',
                            xmlns: 'http://www.w3.org/2000/svg',
                        },
                        o.a.createElement(
                            'g',
                            { strokeWidth: '1', fillRule: 'evenodd' },
                            o.a.createElement(
                                'g',
                                { fillRule: 'nonzero' },
                                o.a.createElement(
                                    'g',
                                    null,
                                    o.a.createElement('path', {
                                        d:
                                            'M1,14 L1,4 L8.11538462,4 C8.39152699,4 8.61538462,3.77614237 8.61538462,3.5 C8.61538462,3.22385763 8.39152699,3 8.11538462,3 L0.5,3 C0.223857625,3 0,3.22385763 0,3.5 L0,14.5 C0,14.7761424 0.223857625,15 0.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 L12,7.73076923 C12,7.45462686 11.7761424,7.23076923 11.5,7.23076923 C11.2238576,7.23076923 11,7.45462686 11,7.73076923 L11,14 L1,14 Z',
                                    }),
                                    o.a.createElement('path', {
                                        d:
                                            'M5.35355339,10.3535534 L12.8535534,2.85355339 C13.0488155,2.65829124 13.0488155,2.34170876 12.8535534,2.14644661 C12.6582912,1.95118446 12.3417088,1.95118446 12.1464466,2.14644661 L4.64644661,9.64644661 C4.45118446,9.84170876 4.45118446,10.1582912 4.64644661,10.3535534 C4.84170876,10.5488155 5.15829124,10.5488155 5.35355339,10.3535534 Z',
                                    }),
                                    o.a.createElement('path', {
                                        d:
                                            'M14,5.5 C14,5.77614237 14.2238576,6 14.5,6 C14.7761424,6 15,5.77614237 15,5.5 L15,0.5 C15,0.223857625 14.7761424,9.43689571e-16 14.5,8.8817842e-16 L9.5,0 C9.22385763,-4.90527396e-17 9,0.223857625 9,0.5 C9,0.776142375 9.22385763,1 9.5,1 L14,1 L14,5.5 Z',
                                    })
                                )
                            )
                        )
                    );
            var D = r(548),
                q = r(464),
                L = r(620);
            function U(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            class article_card_ArticleCard extends n.Component {
                constructor(...e) {
                    super(...e),
                        U(this, 'linkRef', null),
                        U(this, 'createHandleClick', e => t => {
                            const r = t.ctrlKey || t.shiftKey || t.metaKey;
                            !e.articleId ||
                                (e.url && r) ||
                                (t.preventDefault(),
                                this.props
                                    .onArticleCardClick(e.articleId, {
                                        comment_id: this.props.part.id,
                                        url: e.url,
                                    })
                                    .catch(() => Object(D.b)(e.url)));
                        });
                }
                buildAuthor(e) {
                    return {
                        avatar: { square128: e.avatar },
                        name: e.name,
                        firstName: e.firstName || e.name,
                    };
                }
                renderAuthor(e) {
                    return o.a.createElement(
                        L.e,
                        null,
                        o.a.createElement(
                            L.f,
                            null,
                            o.a.createElement(j.a, {
                                author: e,
                                size: this.props.part.isMessage ? 24 : 16,
                            })
                        ),
                        o.a.createElement(
                            L.h,
                            null,
                            `${Object(E.e)('written_by')} `,
                            o.a.createElement(L.g, null, e.name)
                        )
                    );
                }
                renderLinkCardTitle(e) {
                    return o.a.createElement(
                        L.l,
                        { type: e.linkType },
                        'educate.help_center' === e.linkType
                            ? o.a.createElement(L.m, null, o.a.createElement(z, null), e.title)
                            : e.title
                    );
                }
                renderLinkCardFooter(e) {
                    return o.a.createElement(
                        'div',
                        null,
                        e.description && o.a.createElement(L.j, null, e.description),
                        e.author && e.author.name && this.renderAuthor(this.buildAuthor(e.author))
                    );
                }
                renderLinkCards() {
                    const {
                            part: { body: e },
                        } = this.props,
                        t = 1 === e.length;
                    return e.map((r, a) =>
                        o.a.createElement(
                            L.b,
                            {
                                href: r.url,
                                isGrouped: 1 !== e.length,
                                key: a.toString(),
                                onClick: this.createHandleClick(r),
                                ref: e => (this.linkRef = e),
                                rel: 'nofollow noreferrer noopener',
                                target: '_blank',
                            },
                            o.a.createElement(
                                L.i,
                                null,
                                this.renderLinkCardTitle(r),
                                t && this.renderLinkCardFooter(r)
                            ),
                            this.props.openArticleId === r.articleId &&
                                o.a.createElement(I, {
                                    returnFocus:
                                        this.linkRef && this.linkRef.focus.bind(this.linkRef),
                                })
                        )
                    );
                }
                render() {
                    const {
                        hasAvatar: e,
                        isBorderless: t,
                        isInline: r,
                        part: { isMessage: a, author: i },
                    } = this.props;
                    return o.a.createElement(
                        L.a,
                        { isInline: r, isBorderless: t, isMessage: a },
                        !a &&
                            e &&
                            o.a.createElement(L.c, null, o.a.createElement(j.a, { author: i })),
                        a && o.a.createElement(L.d, null, Object(E.e)('asked_about')),
                        o.a.createElement(L.k, null, this.renderLinkCards())
                    );
                }
            }
            U(article_card_ArticleCard, 'contextType', q.a),
                U(article_card_ArticleCard, 'defaultProps', {
                    isInline: !1,
                    hasAvatar: !0,
                    isBorderless: !1,
                });
            var F = Object(l.connect)(e => ({ openArticleId: e.article.id }))(
                    article_card_ArticleCard
                ),
                H = r(447),
                W = r.n(H),
                G = r(520),
                V = r(20),
                $ = r(7),
                K = r(84),
                Y = r(488),
                X = r(484);
            function J(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            class notification_channels_input_NotificationChannelsInput extends n.Component {
                constructor(...e) {
                    super(...e),
                        J(this, 'state', {
                            value: this.props.initialValue,
                            valueChanged: !1,
                            showErrorMessage: !1,
                            prevProps: this.props,
                        }),
                        J(this, 'handleFocus', e => {
                            if (Object($.g)())
                                this.focusTimeout = setTimeout(() => {
                                    if (!this.node) return;
                                    const e = this.node.closest(
                                        '.intercom-conversation-body-parts'
                                    );
                                    Object(V.A)(this.node, e);
                                }, 1e3);
                            else {
                                const t = e.target.value;
                                (e.target.value = ''), (e.target.value = t);
                            }
                        }),
                        J(this, 'handleKeyDown', e => {
                            (e => 13 === e.keyCode && !(e.altKey || e.shiftKey))(e) &&
                                (this.handleSubmit(), e.preventDefault());
                        }),
                        J(this, 'handleKeyUp', () => {
                            this.props.onInputChange();
                        }),
                        J(this, 'handleSubmitButtonClick', e => {
                            this.isDisabled() || (e.preventDefault(), this.handleSubmit());
                        }),
                        J(this, 'handleSubmit', () => {
                            const { value: e } = this.state,
                                { isValid: t, onSubmit: r } = this.props;
                            t(e)
                                ? (r(e),
                                  this.notificationChannelsInput.blur(),
                                  this.setState({ showErrorMessage: !1 }))
                                : this.setState({ showErrorMessage: !0 });
                        }),
                        J(this, 'handleInputChange', e => {
                            const { value: t } = e.target;
                            this.setState({ value: t, showErrorMessage: !1 }),
                                this.state.valueChanged ||
                                    this.setState({ valueChanged: this.valueHasChanged() });
                        }),
                        J(this, 'handleInputClick', () => {
                            this.notificationChannelsInput.focus();
                        });
                }
                componentWillUnmount() {
                    clearTimeout(this.focusTimeout);
                }
                static getDerivedStateFromProps(e, t) {
                    if (!t || W()(e, t.prevProps)) return null;
                    const { name: r, isSaving: a, hasExistingChannel: i, initialValue: n } = e,
                        o = r === t.prevProps.name ? t.value : n;
                    return a || i
                        ? { prevProps: e }
                        : { value: o, prevProps: e, valueChanged: !1, showErrorMessage: !1 };
                }
                valueHasChanged() {
                    return this.state.value !== this.props.initialValue;
                }
                valueIsEmpty() {
                    return '' === this.state.value;
                }
                isPhone() {
                    return 'phone' === this.props.name;
                }
                shouldShowPlaceholder() {
                    return this.state.valueChanged
                        ? this.valueIsEmpty()
                        : this.valueIsEmpty() || !this.valueHasChanged();
                }
                isDisabled() {
                    return this.props.isSaving || this.props.channelProvided;
                }
                getInputType() {
                    switch (this.props.name) {
                        case 'phone':
                            return 'text';
                        case 'email':
                            return 'email';
                        default:
                            return 'text';
                    }
                }
                getErrorMessage() {
                    switch (this.props.name) {
                        case 'phone':
                            const e = Object(G.c)(this.state.value);
                            return e ? Object(E.e)(e) : this.props.errorMessage;
                        case 'email':
                            return Object(E.e)('that_email_address_doesnt_look_quite_right');
                        default:
                            return "That value doesn't look quite right";
                    }
                }
                showErrorMessage() {
                    return this.state.showErrorMessage || this.props.showErrorMessage;
                }
                renderFlag() {
                    const e = Object(G.a)(this.state.value),
                        t = e ? e.code : this.props.initialCountryCode;
                    return o.a.createElement(Y.m, { countryCode: t });
                }
                renderPlaceholder() {
                    const { initialValue: e, placeholder: t } = this.props,
                        r = this.valueIsEmpty() ? {} : { visibility: 'hidden' };
                    return o.a.createElement(
                        Y.u,
                        { isPhone: this.isPhone() },
                        o.a.createElement('span', { style: r }, e),
                        t
                    );
                }
                render() {
                    return o.a.createElement(
                        'div',
                        {
                            onClick: this.handleInputClick,
                            ref: e => (this.node = e),
                            onKeyDown: e =>
                                (13 === e.keyCode || 32 === e.keyCode) && this.handleInputClick(e),
                            role: 'button',
                            tabIndex: '0',
                        },
                        o.a.createElement(
                            Y.l,
                            null,
                            o.a.createElement(
                                Y.n,
                                {
                                    isPhone: this.isPhone(),
                                    hasError: this.showErrorMessage(),
                                    isSuccessful: !!this.props.channelProvided,
                                },
                                this.isPhone() ? this.renderFlag() : null,
                                this.shouldShowPlaceholder() ? this.renderPlaceholder() : null,
                                o.a.createElement('input', {
                                    autoFocus: !0,
                                    ref: e => (this.notificationChannelsInput = e),
                                    type: this.getInputType(),
                                    name: 'intercom-channel-collector',
                                    disabled: this.isDisabled(),
                                    value: this.state.value,
                                    autoComplete: 'off',
                                    onFocus: this.handleFocus,
                                    onKeyDown: this.handleKeyDown,
                                    onKeyUp: this.handleKeyUp,
                                    onChange: this.handleInputChange,
                                    onBlur: K.d,
                                    'aria-label': this.props.ariaLabel,
                                })
                            ),
                            o.a.createElement(
                                Y.p,
                                { hasChannel: !!this.props.channelProvided },
                                o.a.createElement(
                                    Y.o,
                                    {
                                        onTouchEnd: this.handleSubmitButtonClick,
                                        onClick: this.handleSubmitButtonClick,
                                        isDisabled: this.isDisabled(),
                                        hasChannel: !!this.props.channelProvided,
                                    },
                                    o.a.createElement(Y.q, null),
                                    o.a.createElement(Y.r, null)
                                )
                            )
                        ),
                        this.showErrorMessage() &&
                            o.a.createElement(X.a, { errorMessage: this.getErrorMessage() })
                    );
                }
            }
            (notification_channels_input_NotificationChannelsInput.defaultProps = {
                initialValue: '',
                isSaving: !1,
                initialCountryCode: 'us',
            }),
                (notification_channels_input_NotificationChannelsInput.propTypes = {
                    name: i.a.oneOf(['phone', 'email']).isRequired,
                    initialValue: i.a.string,
                    placeholder: i.a.string.isRequired,
                    showErrorMessage: i.a.bool.isRequired,
                    errorMessage: i.a.string,
                    ariaLabel: i.a.string,
                    initialCountryCode: i.a.string,
                    isSaving: i.a.bool,
                    channelProvided: i.a.bool.isRequired,
                    isValid: i.a.func.isRequired,
                    onSubmit: i.a.func.isRequired,
                    onInputChange: i.a.func.isRequired,
                    hasExistingChannel: i.a.bool,
                });
            const Z = (e, t) => ee(e) && !te(t),
                Q = (e, t) => ee(e) && !te(t),
                ee = e => 'visitor' === e || 'lead' === e,
                te = e => void 0 === e || '' === e;
            var re = r(550);
            function ae(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            const ie = e => {
                const { userRole: t, userSuppliedEmail: r, phoneNumber: a } = e,
                    i = Z(t, r),
                    n = Q(t, a);
                return i || n;
            };
            class notification_channels_NotificationChannels extends n.Component {
                constructor(...e) {
                    super(...e),
                        ae(this, 'state', {
                            showEmailCollector: !0,
                            showPhoneNumberCollector: !1,
                            hasExistingChannel: ie(this.props),
                            channelProvided: !1,
                            prevProps: this.props,
                        }),
                        ae(this, 'addNotificationChannelMetric', (e, t) => {
                            Object(u.e)(
                                e,
                                `notification_channel_${t}`,
                                'messenger',
                                'in_conversation',
                                { conversation_id: this.props.conversationId }
                            );
                        }),
                        ae(this, 'addNotificationChannelShownMetric', e => {
                            this.addNotificationChannelMetric('received', e);
                        }),
                        ae(this, 'addNotificationChannelStartMetric', e => {
                            this.addNotificationChannelMetric('started', e);
                        }),
                        ae(this, 'addNotificationChannelCompleteMetric', e => {
                            this.addNotificationChannelMetric('completed', e);
                        }),
                        ae(this, 'handleEmailClick', () => {
                            this.addNotificationChannelStartMetric('email'),
                                this.setState({
                                    showEmailCollector: !0,
                                    showPhoneNumberCollector: !1,
                                }),
                                this.props.onInputChange();
                        }),
                        ae(this, 'handleSmsClick', () => {
                            this.addNotificationChannelStartMetric('sms'),
                                this.setState({
                                    showEmailCollector: !1,
                                    showPhoneNumberCollector: !0,
                                }),
                                this.props.onInputChange();
                        }),
                        ae(this, 'handleEmailCollectorSubmit', e => {
                            this.addNotificationChannelCompleteMetric(
                                this.getEmailCollectorMetricName()
                            ),
                                this.props.onEmailCollectorSubmit(e);
                        }),
                        ae(this, 'handlePhoneNumberCollectorSubmit', e => {
                            this.addNotificationChannelCompleteMetric('sms'),
                                this.props.onPhoneNumberCollectorSubmit(e);
                        });
                }
                componentDidMount() {
                    this.recordMetrics();
                }
                static getDerivedStateFromProps(e, t) {
                    if (!t || W()(e, t.prevProps)) return null;
                    const r = ie(e),
                        a = { prevProps: e, hasExistingChannel: r };
                    return t.hasExistingChannel || (a.channelProvided = r), a;
                }
                recordMetrics() {
                    const { userRole: e, userSuppliedEmail: t, smsEnabled: r } = this.props,
                        a = Z(e, t);
                    r && !this.state.hasExistingChannel
                        ? this.recordChannelMetrics()
                        : r ||
                          a ||
                          this.addNotificationChannelShownMetric(
                              this.getEmailCollectorMetricName()
                          );
                }
                recordChannelMetrics() {
                    const { smsEnabled: e } = this.props;
                    this.addNotificationChannelShownMetric('options'),
                        this.addNotificationChannelShownMetric('email'),
                        e && this.addNotificationChannelShownMetric('sms');
                }
                getEmailCollectorMetricName() {
                    return this.props.smsEnabled ? 'email' : 'email_collector';
                }
                existingChannelText() {
                    const { userRole: e, userSuppliedEmail: t, phoneNumber: r } = this.props,
                        a = Q(e, r);
                    return Z(e, t)
                        ? Object(E.e)('youll_be_notified_here_and_by_email')
                        : a
                        ? Object(E.e)('youll_be_notified_here_and_by_sms')
                        : void 0;
                }
                existingChannelValue() {
                    const { userRole: e, userSuppliedEmail: t, phoneNumber: r } = this.props,
                        a = Q(e, r);
                    return Z(e, t) ? t : a ? r : void 0;
                }
                optionSelected() {
                    return this.state.showEmailCollector || this.state.showPhoneNumberCollector;
                }
                getTitle() {
                    return this.props.smsEnabled
                        ? Object(E.e)('get_notified')
                        : Object(E.e)('get_notified_by_email');
                }
                renderPhoneNumberCollector() {
                    const e = Object(G.b)(this.props.userCountryCode);
                    return o.a.createElement(
                        notification_channels_input_NotificationChannelsInput,
                        {
                            name: 'phone',
                            initialValue: e,
                            placeholder: ' 123 456 7890',
                            initialCountryCode: this.props.userCountryCode,
                            isSaving: this.props.isSaving,
                            showErrorMessage: this.props.showErrorMessage,
                            errorMessage: this.props.errorMessage,
                            channelProvided: this.state.channelProvided,
                            isValid: G.d,
                            onSubmit: this.handlePhoneNumberCollectorSubmit,
                            onInputChange: this.props.onInputChange,
                        }
                    );
                }
                renderEmailCollector() {
                    return o.a.createElement(
                        notification_channels_input_NotificationChannelsInput,
                        {
                            name: 'email',
                            ariaLabel: 'Enter your email',
                            placeholder: 'you@company.com',
                            isSaving: this.props.isSaving,
                            showErrorMessage: this.props.showErrorMessage,
                            errorMessage: this.props.errorMessage,
                            channelProvided: this.state.channelProvided,
                            isValid: re.a,
                            onSubmit: this.handleEmailCollectorSubmit,
                            onInputChange: this.props.onInputChange,
                        }
                    );
                }
                renderChannelsBody() {
                    return this.state.showEmailCollector
                        ? this.renderEmailCollector()
                        : this.state.showPhoneNumberCollector
                        ? this.renderPhoneNumberCollector()
                        : void 0;
                }
                renderOption(e, t, r) {
                    return o.a.createElement(Y.t, { isSelected: t, onClick: r }, Object(E.e)(e));
                }
                renderEmailOption() {
                    return this.renderOption(
                        'email',
                        this.state.showEmailCollector,
                        this.handleEmailClick
                    );
                }
                renderSmsOption() {
                    return this.renderOption(
                        'sms',
                        this.state.showPhoneNumberCollector,
                        this.handleSmsClick
                    );
                }
                renderOptions() {
                    return o.a.createElement(
                        Y.s,
                        null,
                        this.renderEmailOption(),
                        this.props.smsEnabled ? this.renderSmsOption() : null
                    );
                }
                renderChannelOptions() {
                    return o.a.createElement(
                        'div',
                        null,
                        o.a.createElement(
                            Y.w,
                            null,
                            o.a.createElement(Y.x, null, this.getTitle()),
                            o.a.createElement(Y.y, null, this.existingChannelText())
                        ),
                        this.props.smsEnabled ? this.renderOptions() : null,
                        this.renderChannelsBody()
                    );
                }
                renderExistingValue() {
                    return o.a.createElement(Y.k, null, this.existingChannelValue());
                }
                renderSuccessMessage() {
                    return o.a.createElement(
                        'div',
                        null,
                        o.a.createElement(Y.x, { isSuccessful: !0 }, this.existingChannelText()),
                        this.renderExistingValue()
                    );
                }
                render() {
                    const { isBorderless: e, nextPart: t } = this.props,
                        { hasExistingChannel: r, channelProvided: a } = this.state,
                        i = !!t,
                        n = i && t.author.isAdmin;
                    return o.a.createElement(
                        Y.v,
                        {
                            isBorderless: e,
                            nextPartByAdmin: i && n,
                            lastPart: !i,
                            isSuccessful: r && a,
                        },
                        r && !a ? this.renderSuccessMessage() : this.renderChannelOptions()
                    );
                }
            }
            notification_channels_NotificationChannels.propTypes = {
                conversationId: i.a.string.isRequired,
                userId: i.a.string.isRequired,
                userRole: i.a.oneOf(['user', 'lead', 'visitor']),
                userCountryCode: i.a.string,
                userSuppliedEmail: i.a.string,
                userName: i.a.string,
                phoneNumber: i.a.string,
                isSaving: i.a.bool.isRequired,
                errorMessage: i.a.string,
                showErrorMessage: i.a.bool.isRequired,
                smsEnabled: i.a.bool.isRequired,
                nextPart: i.a.object,
                onEmailCollectorSubmit: i.a.func.isRequired,
                onPhoneNumberCollectorSubmit: i.a.func.isRequired,
                onInputChange: i.a.func.isRequired,
                isBorderless: i.a.bool,
            };
            var ne = r(202);
            var oe = Object(l.connect)(
                e => {
                    const { conversationId: t, smsEnabled: r } = e.app,
                        {
                            id: a,
                            role: i,
                            userSuppliedEmail: n,
                            name: o,
                            phoneNumber: s,
                            countryCode: l,
                        } = e.user,
                        {
                            isSaving: c,
                            showErrorMessage: d,
                            errorMessage: p,
                        } = e.notificationChannels;
                    return {
                        conversationId: t,
                        userId: a,
                        userRole: i,
                        userCountryCode: l,
                        userSuppliedEmail: n,
                        userName: o,
                        phoneNumber: s,
                        smsEnabled: r,
                        isSaving: c,
                        showErrorMessage: d,
                        errorMessage: p,
                    };
                },
                e => ({
                    onEmailCollectorSubmit: t => {
                        e(Object(ne.c)(A.b, t));
                    },
                    onPhoneNumberCollectorSubmit: t => {
                        e(Object(ne.b)(A.b, t));
                    },
                    onInputChange: () => {
                        e(Object(ne.a)());
                    },
                }),
                (e, t, r) => {
                    const a = { onInputChange: () => t.onInputChange() };
                    return Object.assign({}, r, e, t, a);
                }
            )(notification_channels_NotificationChannels);
            class notification_channels_card_NotificationChannelsCard extends n.Component {
                renderAdminAvatar() {
                    const { isBorderless: e } = this.props;
                    return o.a.createElement(
                        Y.i,
                        { isBorderless: e },
                        o.a.createElement(j.a, { author: this.props.part.author, size: 28 })
                    );
                }
                render() {
                    const { isBorderless: e } = this.props;
                    return o.a.createElement(
                        Y.j,
                        { isBorderless: e },
                        this.props.hasAvatar && this.renderAdminAvatar(),
                        o.a.createElement(oe, { nextPart: this.props.nextPart, isBorderless: e })
                    );
                }
            }
            (notification_channels_card_NotificationChannelsCard.defaultProps = {
                hasAvatar: !0,
                isBorderless: !1,
            }),
                (notification_channels_card_NotificationChannelsCard.propTypes = {
                    part: i.a.object.isRequired,
                    nextPart: i.a.object,
                    hasAvatar: i.a.bool,
                    isBorderless: i.a.bool,
                });
            var se = r(517),
                le = r(479),
                ce = r(435),
                de = r(782),
                pe = r.n(de),
                ue = r(783),
                he = r.n(ue);
            const me = Object(N.c)('div', { target: 'e41npek0' })(
                    'padding:5px 15px;border-top:1px solid ',
                    Object(N.f)('lightGrey8'),
                    ';'
                ),
                be = Object(N.c)('div', { target: 'e41npek1' })(),
                ge = Object(N.c)('div', { target: 'e41npek2' })(
                    'position:relative;display:table;width:100%;div{display:table-cell;vertical-align:top;}',
                    be.className,
                    '{width:40px;}'
                ),
                fe = Object(N.c)('div', { target: 'e41npek3' })(
                    'position:relative;max-width:180px;textarea,pre{box-sizing:border-box;height:100%;width:100%;padding:12px;font-size:14px;font-family:',
                    Object(N.f)('fontSansSerif'),
                    ';border:none;line-height:19px;white-space:pre-wrap;word-wrap:break-word;}textarea{position:absolute;top:0;left:0;color:',
                    Object(N.f)('inputText'),
                    ';resize:none;overflow-y:hidden;&::placeholder{color:',
                    Object(N.f)('inputPlaceholder'),
                    ';font-style:',
                    Object(N.f)('fontSansSerif'),
                    ';font-size:14px;font-weight:400;line-height:19px;opacity:0.7;}}pre{visibility:hidden;max-height:140px;}'
                ),
                ye = Object(N.c)('div', { target: 'e41npek4' })(
                    'position:absolute;top:2px;bottom:0;width:40px;height:40px;cursor:pointer;transition:transform 300ms linear,opacity 150ms ease;background-position:center;background-repeat:no-repeat;opacity:0.8;',
                    Object(ce.b)(pe.a, he.a, '20px', '20px'),
                    ' &:hover{opacity:1;}'
                ),
                ve = Object(N.c)('div', { target: 'e41npek5' })({
                    name: '4b6e0v',
                    styles:
                        'width:40px;height:40px;border:none;transition:border-radius 300ms,opacity 300ms 600ms,height 400ms 1000ms;',
                });
            function Ce(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            class conversation_rating_remark_input_ConversationRatingRemarkInput extends n.Component {
                constructor(...e) {
                    super(...e),
                        Ce(this, 'state', { text: this.props.initialValue }),
                        Ce(this, 'handleFocus', e => {
                            if (Object($.g)())
                                this.focusTimeout = setTimeout(() => {
                                    if (!this.node) return;
                                    const e = this.node.closest(
                                        '.intercom-conversation-body-parts'
                                    );
                                    Object(V.A)(this.node, e);
                                }, 1e3);
                            else {
                                const t = e.target.value;
                                (e.target.value = ''), (e.target.value = t);
                            }
                        }),
                        Ce(this, 'handleKeyDown', e => {
                            (e => 13 === e.keyCode && !(e.altKey || e.shiftKey))(e) &&
                                (this.handleSubmit(), e.preventDefault());
                        }),
                        Ce(this, 'handleSubmitButtonClick', e => {
                            e.preventDefault(), this.handleSubmit();
                        }),
                        Ce(this, 'handleInputChange', e => {
                            const { value: t } = e.target;
                            this.setState({ text: t }), this.props.onChange();
                        });
                }
                componentWillUnmount() {
                    clearTimeout(this.focusTimeout);
                }
                handleSubmit() {
                    const { text: e } = this.state,
                        { onSubmit: t } = this.props;
                    t(e), this.conversationRatingInput.blur();
                }
                render() {
                    const { text: e } = this.state;
                    return o.a.createElement(
                        me,
                        { ref: e => (this.node = e) },
                        o.a.createElement(
                            ge,
                            null,
                            o.a.createElement(
                                fe,
                                null,
                                o.a.createElement('pre', null, e, o.a.createElement('br', null)),
                                o.a.createElement('textarea', {
                                    autoFocus: !0,
                                    ref: e => (this.conversationRatingInput = e),
                                    type: 'text',
                                    name: 'intercom-conversation-rating-remark',
                                    value: e,
                                    placeholder: this.props.placeholder,
                                    onFocus: this.handleFocus,
                                    onKeyDown: this.handleKeyDown,
                                    onChange: this.handleInputChange,
                                    onBlur: K.d,
                                    'aria-label': this.props.placeholder,
                                })
                            ),
                            o.a.createElement(
                                be,
                                null,
                                o.a.createElement(
                                    ve,
                                    {
                                        onTouchEnd: this.handleSubmitButtonClick,
                                        onClick: this.handleSubmitButtonClick,
                                        'aria-label': Object(E.e)('submit'),
                                    },
                                    o.a.createElement(ye, null)
                                )
                            )
                        )
                    );
                }
            }
            (conversation_rating_remark_input_ConversationRatingRemarkInput.defaultProps = {
                initialValue: '',
            }),
                (conversation_rating_remark_input_ConversationRatingRemarkInput.propTypes = {
                    initialValue: i.a.string,
                    placeholder: i.a.string.isRequired,
                    onSubmit: i.a.func.isRequired,
                    onChange: i.a.func.isRequired,
                });
            const xe = Object(N.c)('span', {
                    target: 'eksvx640',
                })(
                    '&,&:hover{width:18px;height:18px;display:inline-block;background-size:contain;vertical-align:sub;}',
                    ({ images: e }) => Object(ce.b)(e.file, e.file2x, '28px', '28px')
                ),
                je = Object(N.c)('span', {
                    target: 'e1bzxtmt0',
                })('display:inline-block;width:28px;height:28px;', ({ images: e }) =>
                    Object(ce.b)(e.file, e.file2x, '28px', '28px')
                ),
                Oe = Object(N.c)('div', { target: 'e1bzxtmt1' })(
                    'margin-top:5px;cursor:pointer;font-size:13px;color:',
                    Object(N.f)('subheaderText'),
                    ';text-align:center;opacity:0;transition:opacity 0.3s;'
                ),
                Ee = Object(N.c)('div', { target: 'e1bzxtmt2' })({
                    name: '1baulvz',
                    styles: 'display:inline-block;',
                }),
                we = Object(N.c)('div', { target: 'e1bzxtmt3' })(
                    'width:30px;margin:6px 0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;&:hover{',
                    Oe.className,
                    '{opacity:1;}',
                    je.className,
                    '{transform:scale(1.28);filter:none;}}',
                    ({ chosen: e }) => e && Object(N.b)(je.className, '{transform:scale(1.28);}'),
                    ' ',
                    ({ otherChosen: e }) =>
                        e && Object(N.b)(je.className, '{filter:grayscale(1) opacity(0.3);}')
                );
            const Se = {
                1: {
                    emoji: '😠',
                    unicode: '1f620',
                    tooltipKey: 'terrible',
                    images: { file: r(784), file2x: r(785) },
                },
                2: {
                    emoji: '🙁',
                    unicode: '1f615',
                    tooltipKey: 'bad',
                    images: { file: r(786), file2x: r(787) },
                },
                3: {
                    emoji: '😐',
                    unicode: '1f610',
                    tooltipKey: 'ok_description',
                    images: { file: r(788), file2x: r(789) },
                },
                4: {
                    emoji: '😃',
                    unicode: '1f603',
                    tooltipKey: 'great',
                    images: { file: r(790), file2x: r(791) },
                },
                5: {
                    emoji: '🤩',
                    unicode: '1f929',
                    tooltipKey: 'amazing',
                    images: { file: r(792), file2x: r(793) },
                },
            };
            class conversation_rating_emoji_ConversationRatingEmoji extends n.Component {
                constructor(...e) {
                    var t, r, a;
                    super(...e),
                        (a = e => {
                            e.preventDefault();
                            const { ratingIndex: t, onRatingChosen: r } = this.props;
                            r(t);
                        }),
                        (r = 'handleClick') in (t = this)
                            ? Object.defineProperty(t, r, {
                                  value: a,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                              })
                            : (t[r] = a);
                }
                getTooltip() {
                    const { ratingIndex: e } = this.props;
                    return Object(E.e)(Se[e].tooltipKey);
                }
                renderEmojiImage() {
                    return o.a.createElement(je, {
                        className: 'intercom-anchor',
                        onClick: this.handleClick,
                        'aria-label': this.getTooltip(),
                        images: Se[this.props.ratingIndex].images,
                    });
                }
                render() {
                    const e = this.getTooltip();
                    return o.a.createElement(
                        Ee,
                        null,
                        o.a.createElement(
                            we,
                            { chosen: this.props.chosen, otherChosen: this.props.otherChosen },
                            this.renderEmojiImage(),
                            o.a.createElement(Oe, null, e)
                        )
                    );
                }
            }
            function ke(e) {
                return o.a.createElement(xe, {
                    role: 'img',
                    images: Se[e.ratingIndex].images,
                    'aria-label': Se[e.ratingIndex].tooltipKey,
                });
            }
            conversation_rating_emoji_ConversationRatingEmoji.propTypes = {
                ratingIndex: i.a.number.isRequired,
                chosen: i.a.bool,
                otherChosen: i.a.bool,
                onRatingChosen: i.a.func.isRequired,
            };
            var _e = r(448),
                Pe = r(621);
            function Te(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            class conversation_rating_ConversationRating extends n.Component {
                constructor(...e) {
                    super(...e),
                        Te(this, 'state', {}),
                        Te(this, 'handleRemarkChange', () => {
                            this.scrollConversationParts();
                        }),
                        Te(this, 'handleHeightChange', ({ height: e }) => {
                            this.setState({ height: e });
                        });
                }
                componentDidUpdate(e) {
                    this.hasChosenFirstRating(e) && this.scrollConversationParts();
                }
                hasChosenFirstRating(e) {
                    const t = e.chosenRating,
                        { chosenRating: r } = this.props;
                    return void 0 === t && void 0 !== r;
                }
                scrollConversationParts() {
                    if (void 0 !== this.props.nextPart || !this.node) return;
                    const e = this.node.closest('.intercom-conversation-body-parts');
                    e && Object(V.z)(e);
                }
                hasRating() {
                    const { chosenRating: e } = this.props;
                    return e > 0;
                }
                shouldShowThanks() {
                    const { submitted: e } = this.props;
                    return this.hasRemark() || e;
                }
                hasRemark() {
                    const { remark: e } = this.props;
                    return void 0 !== e && '' !== e;
                }
                isChosen(e) {
                    return this.props.chosenRating === e;
                }
                isOtherChosen(e) {
                    return this.hasRating() && !this.isChosen(e);
                }
                renderThanksMessage() {
                    return o.a.createElement(
                        'div',
                        { key: 'conversation-rating-thanks' },
                        o.a.createElement(
                            Pe.f,
                            null,
                            o.a.createElement(
                                Pe.a,
                                null,
                                Object(E.e)('you_rated_the_conversation'),
                                ' ',
                                o.a.createElement(ke, { ratingIndex: this.props.chosenRating })
                            ),
                            o.a.createElement(Pe.e, null, Object(E.e)('thanks_for_letting_us_know'))
                        ),
                        this.hasRemark() && this.renderRemark()
                    );
                }
                renderRemark() {
                    return o.a.createElement(Pe.g, null, this.props.remark);
                }
                renderRatingForm() {
                    return o.a.createElement(
                        'div',
                        { key: 'form' },
                        this.renderRatingOptions(),
                        o.a.createElement(
                            le.a,
                            { duration: 500 },
                            this.hasRating() ? this.renderRemarkInput() : null
                        )
                    );
                }
                renderRatingOptions() {
                    const e = [];
                    for (let t = 1; t <= 5; t++)
                        e.push(
                            o.a.createElement(conversation_rating_emoji_ConversationRatingEmoji, {
                                key: t,
                                ratingIndex: t,
                                chosen: this.isChosen(t),
                                otherChosen: this.isOtherChosen(t),
                                onRatingChosen: this.props.onRatingChosen,
                            })
                        );
                    return o.a.createElement(
                        Pe.c,
                        null,
                        o.a.createElement(
                            Pe.i,
                            null,
                            o.a.createElement(Pe.h, null, Object(E.e)('rate_your_conversation'))
                        ),
                        o.a.createElement(Pe.b, null, e)
                    );
                }
                renderRemarkInput() {
                    return o.a.createElement(
                        conversation_rating_remark_input_ConversationRatingRemarkInput,
                        {
                            placeholder: Object(E.e)('tell_us_more'),
                            onChange: this.handleRemarkChange,
                            onSubmit: this.props.onRemarkSubmit,
                        }
                    );
                }
                render() {
                    return o.a.createElement(
                        Pe.d,
                        { ref: e => (this.node = e), height: this.state.height },
                        o.a.createElement(
                            _e.a,
                            { onChange: this.handleHeightChange },
                            o.a.createElement(
                                'div',
                                null,
                                o.a.createElement(
                                    se.a,
                                    { appearDelay: 300 },
                                    this.shouldShowThanks()
                                        ? this.renderThanksMessage()
                                        : this.renderRatingForm()
                                )
                            )
                        )
                    );
                }
            }
            function Ae(e, t, r) {
                return (a, i) => {
                    a(Re(t, r));
                    const { session: n } = i();
                    return e.changeConversationRatingIndex(n, t, r);
                };
            }
            function Re(e, t) {
                return {
                    type: 'CHANGE_CONVERSATION_RATING_INDEX',
                    conversationId: e,
                    ratingIndex: t,
                };
            }
            function Be(e, t, r) {
                return (a, i) => {
                    if ((a(Ie(t, r)), void 0 === r || '' === r)) return Promise.resolve();
                    const { session: n } = i();
                    return e.addConversationRatingRemark(n, t, r);
                };
            }
            function Ie(e, t) {
                return { type: 'ADD_CONVERSATION_RATING_REMARK', conversationId: e, remark: t };
            }
            conversation_rating_ConversationRating.propTypes = {
                chosenRating: i.a.number,
                remark: i.a.string,
                submitted: i.a.bool,
                nextPart: i.a.object,
                part: i.a.object,
                onRemarkSubmit: i.a.func.isRequired,
                onRatingChosen: i.a.func.isRequired,
            };
            var Ne = Object(l.connect)(
                    e => {
                        const { conversationId: t } = e.app;
                        return { conversationId: t };
                    },
                    e => ({
                        onRemarkSubmit: (t, r) => {
                            e(Be(A.b, t, r));
                        },
                        onRatingChosen: (t, r) => {
                            e(Ae(A.b, t, r));
                        },
                    }),
                    (e, t, r) => {
                        const { conversationId: a } = e,
                            {
                                chosenRating: i,
                                remark: n,
                                submitted: o,
                            } = r.part.conversationRating,
                            s = {
                                onRemarkSubmit: e => t.onRemarkSubmit(a, e),
                                onRatingChosen: e => t.onRatingChosen(a, e),
                                chosenRating: i,
                                remark: n,
                                submitted: o,
                            };
                        return Object.assign({}, r, e, t, s);
                    }
                )(conversation_rating_ConversationRating),
                Me = r(622);
            class conversation_rating_card_ConversationRatingCard extends n.Component {
                render() {
                    const { isBorderless: e } = this.props;
                    return o.a.createElement(
                        Me.b,
                        { isBorderless: e },
                        this.props.hasAvatar &&
                            o.a.createElement(
                                Me.a,
                                { isBorderless: e },
                                o.a.createElement(j.a, { author: this.props.part.author })
                            ),
                        o.a.createElement(Ne, {
                            nextPart: this.props.nextPart,
                            part: this.props.part,
                        })
                    );
                }
            }
            (conversation_rating_card_ConversationRatingCard.defaultProps = {
                hasAvatar: !0,
                isBorderless: !1,
            }),
                (conversation_rating_card_ConversationRatingCard.propTypes = {
                    part: i.a.object.isRequired,
                    nextPart: i.a.object,
                    hasAvatar: i.a.bool,
                    isBorderless: i.a.bool,
                });
            var ze = r(616),
                De = r(454);
            class conversation_pointer_card_PointerCard extends n.Component {
                render() {
                    const { part: e, appName: t, frameWindow: r } = this.props,
                        { author: a, body: i } = e;
                    return o.a.createElement(
                        De.e,
                        { className: 'intercom-pointer', isInbox: !0 },
                        o.a.createElement(
                            d.a,
                            { appName: t, isReplyStyle: !1, author: a },
                            o.a.createElement(
                                De.a,
                                { className: 'intercom-pointer-body' },
                                o.a.createElement(p.a, { blocks: i, frameWindow: r }),
                                o.a.createElement(ze.e, { isInsideInbox: !0 })
                            )
                        )
                    );
                }
            }
            conversation_pointer_card_PointerCard.propTypes = {
                part: i.a.shape({
                    id: i.a.string,
                    author: i.a.object.isRequired,
                    body: i.a.array.isRequired,
                }).isRequired,
                appName: i.a.string,
                frameWindow: i.a.object,
            };
            var qe = r(638),
                Le = r(518),
                Ue = r(554),
                Fe = r(455),
                He = r.n(Fe);
            function We(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            class notification_channel_collector_card_controls_NotificationChannelCollectorCardControls extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        We(this, 'handleEmailChannelClick', e => {
                            e.preventDefault(), this.props.onChannelChange('email');
                        }),
                        We(this, 'handlePhoneNumberChannelClick', e => {
                            e.preventDefault(), this.props.onChannelChange('phone');
                        }),
                        We(this, 'isSaved', () => {
                            const { isEmailSaved: e, isPhoneNumberSaved: t } = this.props;
                            return e || t;
                        }),
                        We(this, 'isSelected', e => e === this.props.channel);
                }
                getClassName() {
                    return He()({
                        'intercom-notification-channel-collector-card-controls': !0,
                        'intercom-notification-channel-collector-card-controls-saved': this.isSaved(),
                    });
                }
                getChannelClassName(e) {
                    return He()({
                        'intercom-anchor': !0,
                        'intercom-notification-channel-collector-card-controls-channel': !0,
                        'intercom-notification-channel-collector-card-controls-channel-selected': this.isSelected(
                            e
                        ),
                    });
                }
                renderChannels() {
                    return o.a.createElement(
                        Y.d,
                        {
                            className:
                                'intercom-notification-channel-collector-card-controls-channels',
                        },
                        o.a.createElement(
                            Y.c,
                            {
                                isSelected: this.isSelected('email'),
                                className: this.getChannelClassName('email'),
                                onClick: this.handleEmailChannelClick,
                            },
                            Object(E.e)('email')
                        ),
                        o.a.createElement(
                            Y.c,
                            {
                                isSelected: this.isSelected('phone'),
                                className: this.getChannelClassName('phone'),
                                onClick: this.handlePhoneNumberChannelClick,
                            },
                            Object(E.e)('sms')
                        )
                    );
                }
                renderPrompt() {
                    return o.a.createElement(
                        Y.f,
                        {
                            className:
                                'intercom-notification-channel-collector-card-controls-prompt',
                        },
                        this.props.isPhoneNumberEnabled
                            ? Object(E.e)('get_notified')
                            : Object(E.e)('get_notified_by_email')
                    );
                }
                renderMessage() {
                    return o.a.createElement(
                        Y.e,
                        {
                            className:
                                'intercom-notification-channel-collector-card-controls-message',
                        },
                        this.props.isEmailSaved
                            ? Object(E.e)('youll_be_notified_here_and_by_email')
                            : Object(E.e)('youll_be_notified_here_and_by_sms')
                    );
                }
                render() {
                    return o.a.createElement(
                        Y.g,
                        { isSaved: this.isSaved(), className: this.getClassName() },
                        this.renderMessage(),
                        this.renderPrompt(),
                        this.props.isPhoneNumberEnabled ? this.renderChannels() : null
                    );
                }
            }
            var Ge = r(613),
                Ve = r(643);
            function $e(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            class notification_channel_collector_card_NotificationChannelCollectorCard extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        $e(this, 'state', {
                            channel:
                                'saved' === this.props.phoneNumberSaveState ? 'phone' : 'email',
                            prevProps: this.props,
                        }),
                        $e(this, 'handleChannelChange', e => {
                            this.setState({ channel: e });
                        });
                }
                componentDidMount() {
                    const { part: e, conversationId: t } = this.props,
                        { form: r } = e;
                    r &&
                        r.attributes.forEach(({ identifier: a }) => {
                            Object(u.e)(
                                'received',
                                'operator_reply',
                                'messenger',
                                'in_conversation',
                                {
                                    type: 'automated_lead_qualification',
                                    conversation_id: t,
                                    part_id: e.id,
                                    attribute_identifier: a,
                                    attribute_type: a,
                                    form_type: r.type,
                                    attribute_is_custom_data: !1,
                                }
                            );
                        });
                }
                static getDerivedStateFromProps(e, t) {
                    if (!t || W()(e, t.prevProps)) return null;
                    let r;
                    return (
                        'saved' === e.emailSaveState
                            ? (r = 'email')
                            : 'saved' === e.phoneNumberSaveState && (r = 'phone'),
                        r ? { channel: r, prevProps: e } : { prevProps: e }
                    );
                }
                renderAvatar() {
                    return o.a.createElement(
                        Y.a,
                        null,
                        o.a.createElement(j.a, { author: this.props.part.author })
                    );
                }
                renderControls() {
                    const {
                            emailSaveState: e,
                            phoneNumberSaveState: t,
                            isPhoneNumberEnabled: r,
                        } = this.props,
                        a = 'saved' === e,
                        i = 'saved' === t;
                    return o.a.createElement(
                        notification_channel_collector_card_controls_NotificationChannelCollectorCardControls,
                        {
                            channel: this.state.channel,
                            isEmailSaved: a,
                            isPhoneNumberSaved: i,
                            isPhoneNumberEnabled: r,
                            onChannelChange: this.handleChannelChange,
                        }
                    );
                }
                renderAttribute() {
                    const {
                        disabled: e,
                        email: t,
                        phoneNumber: r,
                        emailSaveState: a,
                        phoneNumberSaveState: i,
                        defaultCountryCode: n,
                        onEmailSubmit: s,
                        onPhoneNumberSubmit: l,
                    } = this.props;
                    return 'email' === this.state.channel
                        ? o.a.createElement(Ge.a, {
                              disabled: e,
                              value: t,
                              saveState: a,
                              isBorderless: !1,
                              isReplyType: !1,
                              isNotificationChannel: !0,
                              onSubmit: s,
                          })
                        : o.a.createElement(Ve.a, {
                              disabled: e,
                              value: r,
                              key: r,
                              saveState: i,
                              defaultCountryCode: n,
                              isBorderless: !1,
                              isReplyType: !1,
                              isNotificationChannel: !0,
                              onSubmit: l,
                          });
                }
                isSaved() {
                    const { emailSaveState: e, phoneNumberSaveState: t } = this.props;
                    return 'saved' === e || 'saved' === t;
                }
                render() {
                    const { isBorderless: e } = this.props;
                    return o.a.createElement(
                        Y.h,
                        null,
                        this.props.hasAvatar ? this.renderAvatar() : null,
                        o.a.createElement(
                            Y.b,
                            { isBorderless: e },
                            this.renderControls(),
                            this.renderAttribute()
                        )
                    );
                }
            }
            var Ke = r(4);
            const Ye = (e, t) => e.attributes.find(e => e.identifier === t);
            var Xe = Object(l.connect)(
                (e, t) => {
                    const { part: r } = t,
                        { id: a, form: i } = r,
                        n = e.user.countryCode || 'us',
                        { conversationId: o } = e.app,
                        s = Ye(i, 'email'),
                        l = Ye(i, 'phone'),
                        c = void 0 !== l,
                        { value: d, saveState: p } = s;
                    let u, h;
                    return (
                        c && ((u = l.value), (h = l.saveState)),
                        {
                            conversationId: o,
                            partId: a,
                            email: d,
                            phoneNumber: u,
                            emailSaveState: p,
                            phoneNumberSaveState: h,
                            isPhoneNumberEnabled: c,
                            defaultCountryCode: n,
                        }
                    );
                },
                e => ({
                    onAttributeSubmit(t, r, a, i, n) {
                        const o = a;
                        e(Object(Ke.r)(A.b, t, r, a, i, o, n, !1));
                    },
                }),
                (e, t, r) =>
                    Object.assign({}, e, t, r, {
                        onEmailSubmit(a) {
                            t.onAttributeSubmit(
                                e.conversationId,
                                e.partId,
                                'email',
                                a,
                                r.part.form.type
                            );
                        },
                        onPhoneNumberSubmit(a) {
                            t.onAttributeSubmit(
                                e.conversationId,
                                e.partId,
                                'phone',
                                a,
                                r.part.form.type
                            );
                        },
                    })
            )(notification_channel_collector_card_NotificationChannelCollectorCard);
            class attribute_collector_AttributeCollector extends n.PureComponent {
                renderCollectorCard() {
                    const {
                            conversation: e,
                            part: t,
                            hasAvatar: r,
                            isBorderless: a,
                            frameWindow: i,
                        } = this.props,
                        { form: n } = t,
                        s = e.preventEndUserReplies;
                    return n && 'notification_channel' === n.type
                        ? o.a.createElement(Xe, {
                              disabled: s,
                              part: t,
                              hasAvatar: r,
                              isBorderless: a,
                          })
                        : n && 'upfront_collection' === n.type
                        ? o.a.createElement(Ue.a, {
                              disabled: s,
                              part: t,
                              hasAvatar: r,
                              isBorderless: a,
                              hideNumbering: !0,
                              frameWindow: i,
                              key: JSON.stringify(t),
                          })
                        : o.a.createElement(Ue.a, {
                              disabled: s,
                              part: t,
                              hasAvatar: r,
                              isBorderless: a,
                              frameWindow: i,
                              key: JSON.stringify(t),
                          });
                }
                render() {
                    return o.a.createElement(
                        'div',
                        { className: 'intercom-attribute-collector' },
                        this.renderCollectorCard()
                    );
                }
            }
            var Je = r(38);
            var Ze = Object(l.connect)(e => ({ conversation: Object(Je.a)(e) }))(
                    attribute_collector_AttributeCollector
                ),
                Qe = r(472);
            const et = Object(N.c)('div', { target: 'e1bdvrzl0' })(
                    'max-width:100%;font-size:14px;vertical-align:middle;line-height:14px;position:relative;',
                    Qe.b.className,
                    '{bottom:-17px;left:45px;}'
                ),
                tt = Object(N.c)('div', { target: 'e1bdvrzl1' })({
                    name: 'cz1ym2',
                    styles: 'width:30px;display:inline-block;vertical-align:middle;',
                }),
                rt = Object(N.c)('div', { target: 'e1bdvrzl2' })(
                    'color:',
                    Object(N.f)('participantText'),
                    ';overflow-wrap:break-word;word-break:break-word;'
                ),
                at = Object(N.c)('div', { target: 'e1bdvrzl3' })({
                    name: 'jc7l0f',
                    styles:
                        'display:inline-block;vertical-align:middle;padding:3px 0;margin-left:15px;max-width:calc(100% - 45px);color:#78909c;line-height:1.3;position:relative;',
                });
            var it = r(524);
            class participant_event_ParticipantEvent extends n.Component {
                renderAvatar() {
                    return o.a.createElement(
                        tt,
                        null,
                        o.a.createElement(j.a, { author: this.props.part.eventData.participant })
                    );
                }
                renderText() {
                    const { createdAt: e } = this.props.part;
                    return o.a.createElement(it.a, { content: e && Object(w.a)(e) }, (e, t) =>
                        o.a.createElement(
                            at,
                            t,
                            o.a.createElement(rt, null, this.partTypeText()),
                            e
                        )
                    );
                }
                partTypeText() {
                    return this.props.part.eventData.eventAsPlainText;
                }
                renderTimestamp() {
                    const { createdAt: e } = this.props.part;
                    return o.a.createElement(Qe.b, null, Object(w.a)(e));
                }
                render() {
                    return o.a.createElement(
                        et,
                        null,
                        this.renderAvatar(),
                        this.renderText(),
                        this.renderTimestamp()
                    );
                }
            }
            participant_event_ParticipantEvent.propTypes = {
                part: i.a.shape({
                    eventData: i.a.shape({
                        participant: i.a.shape({
                            initial: i.a.string.isRequired,
                            label: i.a.string.isRequired,
                            type: i.a.string.isRequired,
                            avatar: i.a.object.isRequired,
                        }).isRequired,
                        eventAsPlainText: i.a.string.isRequired,
                    }).isRequired,
                    partType: i.a.string.isRequired,
                    createdAt: i.a.instanceOf(Date),
                }),
            };
            var nt = r(475),
                ot = r(86),
                st = r(139),
                lt = r(623);
            function ct(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            class conversation_part_ConversationPart extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        ct(this, 'handleClick', e => {
                            if ((this.handleLinkClick(e), !this.isFailedPart())) return;
                            const { part: t, onRetry: r } = this.props;
                            r(t);
                        }),
                        ct(this, 'addLinkClickedMetric', (e, t, r) => {
                            Object(u.e)('clicked', 'link', 'messenger', 'in_conversation', {
                                conversation_id: e,
                                [t.isMessage ? 'message_id' : 'comment_id']: t.id,
                                url: r,
                                partType: t.messageType,
                            });
                        });
                }
                handleLinkClick(e) {
                    const t = e.target;
                    if ('a' !== t.tagName.toLowerCase()) return;
                    const r = t.getAttribute('href'),
                        { conversationId: a, part: i } = this.props;
                    r && this.addLinkClickedMetric(a, i, r);
                }
                isFailedPart() {
                    return 'failed' === this.props.part.saveState;
                }
                isRichContentType() {
                    const { part: e } = this.props;
                    return !!e.body && Object(nt.a)(e.body);
                }
                shouldShowMetadata() {
                    const { partHasMetadata: e, isBorderless: t } = this.props;
                    return e && !t;
                }
                shouldShowInlineMetadata() {
                    const { partHasMetadata: e, isBorderless: t } = this.props;
                    return e && t && !this.isRichContentType();
                }
                renderComment() {
                    return Object(ot.a)(this.props.part.partType)
                        ? this.renderEvent()
                        : this.renderCommentContainer();
                }
                renderEvent() {
                    const { part: e } = this.props;
                    return this.props.isBorderless
                        ? null
                        : 'participant_added' === e.partType ||
                          'participant_removed' === e.partType ||
                          'temporary_expectations' === e.partType
                        ? o.a.createElement(participant_event_ParticipantEvent, { part: e })
                        : void 0;
                }
                renderCommentContainer() {
                    const {
                        isLastPart: e,
                        part: t,
                        hasAvatar: r,
                        isBorderless: a,
                        isMobile: i,
                        frameWindow: n,
                        onImageClick: s,
                    } = this.props;
                    return o.a.createElement(qe.a, {
                        isLastPart: e,
                        part: t,
                        hasAvatar: r,
                        isBorderless: a,
                        isMobile: i,
                        frameWindow: n,
                        showInlineMetadata: this.shouldShowInlineMetadata(),
                        onImageClick: s,
                    });
                }
                renderChatCardGroup() {
                    const {
                        appName: e,
                        part: t,
                        hasAvatar: r,
                        isBorderless: a,
                        isMobile: i,
                        frameWindow: n,
                    } = this.props;
                    return o.a.createElement(y.a, {
                        appName: e,
                        part: t,
                        hasAvatar: r,
                        isBorderless: a,
                        isMobile: i,
                        showInlineMetadata: this.shouldShowInlineMetadata(),
                        frameWindow: n,
                    });
                }
                renderConversationPart() {
                    const {
                        appName: e,
                        part: t,
                        nextPart: r,
                        hasAvatar: a,
                        reactionsReply: i,
                        onArticleCardClick: n,
                        conversationId: s,
                        onReactionSelect: l,
                        isBorderless: c,
                        isMobile: d,
                        frameWindow: p,
                    } = this.props;
                    switch (t.messageType) {
                        case 'post':
                            return o.a.createElement(g, {
                                appName: e,
                                conversationId: s,
                                part: t,
                                reactionsReply: i,
                                onReactionSelect: l,
                                frameWindow: p,
                            });
                        case 'note':
                            return o.a.createElement(note_card_NoteCard, {
                                appName: e,
                                part: t,
                                frameWindow: p,
                            });
                        case 'link':
                            return o.a.createElement(F, {
                                appName: e,
                                part: t,
                                hasAvatar: a,
                                isBorderless: c,
                                onArticleCardClick: n,
                            });
                        case 'notificationChannels':
                            return o.a.createElement(
                                notification_channels_card_NotificationChannelsCard,
                                { part: t, nextPart: r, hasAvatar: a, isBorderless: c }
                            );
                        case 'conversationRating':
                            return d
                                ? this.renderComment()
                                : o.a.createElement(
                                      conversation_rating_card_ConversationRatingCard,
                                      { part: t, nextPart: r, hasAvatar: a, isBorderless: c }
                                  );
                        case 'attributeCollector':
                            return o.a.createElement(Ze, {
                                part: t,
                                hasAvatar: a,
                                isBorderless: c,
                                frameWindow: p,
                            });
                        case 'video':
                        case 'chat':
                        case 'adminReply':
                            return c ? this.renderChatCardGroup() : this.renderComment();
                        case 'pointer':
                            return o.a.createElement(conversation_pointer_card_PointerCard, {
                                appName: e,
                                part: t,
                                frameWindow: p,
                            });
                        default:
                            return this.renderComment();
                    }
                }
                renderMetadata() {
                    return o.a.createElement(
                        s.TransitionGroup,
                        null,
                        this.shouldShowMetadata()
                            ? o.a.createElement(
                                  s.CSSTransition,
                                  {
                                      classNames: 'intercom-conversation-part-metadata',
                                      timeout: 300,
                                  },
                                  o.a.createElement(Le.a, { part: this.props.part })
                              )
                            : null
                    );
                }
                renderReplyType() {
                    const { part: e, isBorderless: t, frameWindow: r } = this.props;
                    switch (e.replyType) {
                        case 'attribute_collector':
                            return o.a.createElement(Ue.a, {
                                part: e,
                                hasAvatar: !1,
                                isBorderless: t,
                                isReplyType: !0,
                                frameWindow: r,
                                key: Object(st.a)(JSON.stringify(e)),
                            });
                    }
                }
                render() {
                    const {
                        setPartRef: e,
                        isBorderless: t,
                        grouped: r,
                        nextPart: a,
                        conversationHasScrolled: i,
                        part: {
                            author: { isAdmin: n, isSelf: s },
                        },
                    } = this.props;
                    return o.a.createElement(
                        lt.a,
                        {
                            onClick: this.handleClick,
                            'aria-label': this.isFailedPart()
                                ? Object(E.e)('failed_message')
                                : void 0,
                            role: this.isFailedPart() ? 'button' : void 0,
                            tabIndex: this.isFailedPart() ? '0' : '-1',
                            ref: t => e && e(t, this.props.part),
                            isAdmin: n,
                            isSelf: s,
                            isBorderless: t,
                            grouped: r,
                            isLastPart: !a,
                            isFailedPart: this.isFailedPart(),
                            conversationHasScrolled: i,
                        },
                        this.renderConversationPart(),
                        this.renderReplyType(),
                        this.renderMetadata()
                    );
                }
            }
            ct(conversation_part_ConversationPart, 'defaultProps', {
                isBorderless: !1,
                isMobile: !1,
                conversationId: '',
            });
            var dt = r(491),
                pt = r(461);
            const ut = Object(N.d)(
                    '0%,30%,100%{transform:translateY(0);}15%{transform:translateY(-2px);}'
                ),
                ht = Object(N.d)('from{opacity:0;height:53px;}to{opacity:0;height:0;}'),
                mt = Object(N.d)(
                    'from{opacity:0;transform:scale(0.9);}to{opacity:1;transform:scale(1);}'
                ),
                bt = Object(N.d)(
                    '0%{opacity:0;transform:scale(0.6);}50%{opacity:0;transform:scale(0.6);}100%{opacity:1;transform:scale(1);}'
                );
            var gt = { name: '1pso57o', styles: 'padding-left:95px;' };
            const ft = Object(N.c)('div', { target: 'e1vgp1r10' })(
                'position:relative;padding-left:45px;padding-bottom:24px;',
                ({ theme: e, isBorderless: t }) =>
                    t &&
                    Object(N.b)(
                        'padding-left:45px;padding-bottom:0;padding-top:10px;position:static;',
                        vt.className,
                        '{position:absolute;bottom:0;left:0;box-shadow:',
                        e.notificationBoxShadow,
                        ';border-radius:100%;}',
                        Ct.className,
                        '{background:',
                        e.white,
                        ';box-shadow:',
                        e.notificationBoxShadow,
                        ';border-bottom-left-radius:0;}',
                        Ct.className,
                        ':after{',
                        ce.g,
                        ';}'
                    ),
                ' ',
                ({ theme: e, isBorderless: t }) => t && e.isLeftAlign && gt,
                ' &.intercom-conversation-part-enter-active{transition:transform 100ms;}&.intercom-conversation-part-exit-active{animation:',
                ht,
                ' 300ms 300ms ease-in;}'
            );
            var yt = { name: '10gc2pc', styles: 'left:45px;' };
            const vt = Object(N.c)('div', { target: 'e1vgp1r11' })(
                    'position:absolute;left:0;bottom:34px;',
                    ({ theme: e, isBorderless: t }) => t && e.isLeftAlign && yt,
                    ' ',
                    ft.className,
                    '.intercom-conversation-part-enter &{animation:',
                    mt,
                    ' 100ms ease-in;}',
                    ft.className,
                    '.intercom-conversation-part-exit-active &{animation:',
                    mt,
                    ' 100ms 200ms ease-in reverse;}'
                ),
                Ct = Object(N.c)('div', { target: 'e1vgp1r12' })(
                    'height:53px;width:66px;padding:0;background:',
                    Object(N.f)('adminCommentBackground'),
                    ';border-radius:4px;position:relative;transform-origin:bottom left;',
                    ft.className,
                    '.intercom-conversation-part-enter &{animation:',
                    bt,
                    ' 300ms ease-in;}',
                    ft.className,
                    '.intercom-conversation-part-exit-active &{animation:',
                    bt,
                    ' 300ms ease-in reverse;}'
                ),
                xt = Object(N.c)('div', { target: 'e1vgp1r13' })(
                    'width:6px;height:6px;border-radius:100%;background-color:',
                    Object(N.f)('metaText'),
                    ';position:absolute;top:24px;animation:',
                    ut,
                    ' 1s infinite ease-in;&:first-of-type{left:20px;}&:nth-of-type(2){left:30px;animation-delay:0.15s;}&:nth-of-type(3){left:40px;animation-delay:0.3s;}'
                );
            class typing_admin_TypingAdmin extends n.Component {
                render() {
                    const { admin: e, isBorderless: t } = this.props;
                    return o.a.createElement(
                        ft,
                        { isBorderless: t },
                        o.a.createElement(
                            vt,
                            { isBorderless: t },
                            o.a.createElement(pt.a, { admin: e })
                        ),
                        o.a.createElement(
                            Ct,
                            null,
                            o.a.createElement(xt, null),
                            o.a.createElement(xt, null),
                            o.a.createElement(xt, null),
                            o.a.createElement(dt.b, null, Object(E.e)('typing'))
                        )
                    );
                }
            }
            typing_admin_TypingAdmin.propTypes = {
                admin: i.a.shape({ firstName: i.a.string.isRequired }),
                isBorderless: i.a.bool,
            };
            var jt = r(485),
                Ot = r(15),
                Et = r(624),
                wt = r(625),
                St = r(551),
                kt = r(796),
                _t = r.n(kt);
            function Pt(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            r.d(t, 'a', function() {
                return conversation_parts_ConversationParts;
            });
            class conversation_parts_ConversationParts extends n.Component {
                constructor(...e) {
                    super(...e),
                        Pt(this, 'state', { delta: 0 }),
                        Pt(this, 'handleHeightChange', () => {
                            this.parts &&
                                this.setState({ height: this.parts.clientHeight }, () => {
                                    const { onHeightChange: e } = this.props;
                                    e && e(this.state.height);
                                });
                        }),
                        Pt(this, 'setParts', e => {
                            this.parts = e;
                        });
                }
                componentDidMount() {
                    this.handleHeightChange(),
                        this.context &&
                            this.context.subscribe &&
                            this.context.subscribe('onPartsHeightChange', this.handleHeightChange);
                }
                componentDidUpdate(e) {
                    this.handlePartsChange(
                        this.props.conversation.parts.length !== e.conversation.parts.length
                    );
                }
                componentWillUnmount() {
                    this.stopCheckingIfAdminIsTyping();
                }
                handlePartsChange(e) {
                    const t = this.parts.clientHeight,
                        { maxHeight: r, isBorderless: a, onHeightChange: i } = this.props,
                        n = Math.min(t - r, t - this.state.height),
                        o = e && t > r ? n : 0;
                    (t === this.state.height && o === this.state.delta) ||
                        this.setState({ height: t, delta: o }, () => {
                            (a || e) && i && i(this.state.height);
                        });
                }
                isScrolling() {
                    const { scrolledToBottom: e, conversation: t } = this.props;
                    return !(Object(Et.h)(t) && !e) && this.state.delta > 0;
                }
                getStyle() {
                    const e = `translateY(${this.state.delta}px)`;
                    return { WebkitTransform: e, msTransform: e, transform: e };
                }
                getPartKey(e) {
                    return e.isMessage ? 'message' : `part-${Object(Et.c)(e)}`;
                }
                getDividerKey(e) {
                    return `divider-${Object(Et.c)(e)}`;
                }
                conversationHasScrolled() {
                    return this.state.height >= this.props.maxHeight;
                }
                renderDateDivider(e) {
                    return o.a.createElement(
                        s.CSSTransition,
                        {
                            classNames: 'dummy',
                            key: this.getDividerKey(e),
                            timeout: { enter: 0, exit: 0 },
                        },
                        o.a.createElement(
                            wt.c,
                            { key: this.getDividerKey(e) },
                            Object(Et.b)(e.sentAt || e.createdAt)
                        )
                    );
                }
                renderPart(e, t, r, a) {
                    const {
                            appName: i,
                            conversation: n,
                            isBorderless: l,
                            isMobile: c,
                            onReactionSelect: d,
                            onRetry: p,
                            onArticleCardClick: u,
                            onImageClick: h,
                            frameWindow: m,
                            setPartRef: b,
                        } = this.props,
                        { lastTypingAdmin: g } = n,
                        f = Object(Et.e)(e, t),
                        y = Object(Et.h)(n),
                        v = Object(Et.f)(e, t, l, y, g),
                        { reactionsReply: C } = Object(Ot.a)(a);
                    return o.a.createElement(
                        s.CSSTransition,
                        {
                            classNames: 'intercom-conversation-part',
                            key: r,
                            timeout: { enter: 3200, exit: 600 },
                        },
                        o.a.createElement(
                            St.a,
                            {
                                errorText: 'Something went wrong loading this message',
                                align: 'center',
                                style: { margin: '10px 0 20px' },
                            },
                            o.a.createElement(conversation_part_ConversationPart, {
                                key: this.getPartKey(e),
                                part: e,
                                setPartRef: b,
                                nextPart: t,
                                appName: i,
                                conversationId: n.id,
                                reactionsReply: C,
                                onReactionSelect: d,
                                onRetry: p,
                                adminIsTyping: y,
                                hasAvatar: v,
                                grouped: f,
                                isLastPart: void 0 === t,
                                partHasMetadata: Object(Et.g)(e, a, y),
                                isBorderless: l,
                                isMobile: c,
                                frameWindow: m,
                                onArticleCardClick: u,
                                onImageClick: h,
                                conversationHasScrolled: this.conversationHasScrolled(),
                            })
                        )
                    );
                }
                fakeTemporaryExpectationsPart(e) {
                    const t = {
                        avatar: { square128: _t.a },
                        initial: 'i',
                        label: 'Information',
                        type: 'admin',
                    };
                    return {
                        author: t,
                        createdAt: new Date(),
                        partType: 'temporary_expectations',
                        eventData: { participant: t, eventAsPlainText: e },
                    };
                }
                renderParts() {
                    const {
                        conversation: e,
                        isBorderless: t,
                        temporaryExpectationsMessage: r,
                    } = this.props;
                    let a = e.parts.filter(e => void 0 !== e && !Object(Et.d)(e));
                    r && (a = [this.fakeTemporaryExpectationsPart(r), ...a]);
                    const i = [];
                    return (
                        a.length > 0 &&
                            !t &&
                            Object(Et.j)(a) &&
                            i.push(this.renderDateDivider(a[0])),
                        a.forEach((e, r) => {
                            const n = a[r - 1],
                                o = a[r + 1];
                            !t && Object(Et.i)(n, e) && i.push(this.renderDateDivider(e)),
                                i.push(this.renderPart(e, o, r, a));
                        }),
                        i
                    );
                }
                checkIfAdminIsStillTyping() {
                    this.isTypingInterval ||
                        (this.isTypingInterval = setInterval(() => this.forceUpdate(), 1e3));
                }
                stopCheckingIfAdminIsTyping() {
                    clearInterval(this.isTypingInterval), (this.isTypingInterval = void 0);
                }
                renderTypingAdmin() {
                    const { lastTypingAdmin: e } = this.props.conversation;
                    return o.a.createElement(
                        s.CSSTransition,
                        {
                            classNames: 'intercom-conversation-part',
                            key: 'typing-admin',
                            timeout: { enter: 3200, exit: 600 },
                            exit: this.enableTypingLeaveAnimation(),
                        },
                        o.a.createElement(typing_admin_TypingAdmin, {
                            admin: e,
                            isBorderless: this.props.isBorderless,
                        })
                    );
                }
                shouldRenderTypingAdmin() {
                    return Object(Et.h)(this.props.conversation)
                        ? (this.checkIfAdminIsStillTyping(), !0)
                        : (this.stopCheckingIfAdminIsTyping(), !1);
                }
                enableTypingLeaveAnimation() {
                    const { parts: e, lastTypingAdmin: t } = this.props.conversation;
                    return !t || !Object(Et.a)(t, e);
                }
                render() {
                    const { isFaded: e, isBorderless: t } = this.props,
                        r = this.shouldRenderTypingAdmin();
                    return o.a.createElement(
                        wt.b,
                        null,
                        o.a.createElement(
                            wt.a,
                            {
                                ref: this.setParts,
                                style: this.getStyle(),
                                isScrolling: this.isScrolling(),
                                isFaded: e,
                                isBorderless: t,
                            },
                            o.a.createElement(s.TransitionGroup, null, this.renderParts()),
                            o.a.createElement(
                                s.TransitionGroup,
                                null,
                                r ? this.renderTypingAdmin() : null
                            )
                        )
                    );
                }
            }
            Pt(conversation_parts_ConversationParts, 'contextType', jt.a),
                (conversation_parts_ConversationParts.defaultProps = {
                    isBorderless: !1,
                    isMobile: !1,
                }),
                (conversation_parts_ConversationParts.propTypes = {
                    conversation: i.a.shape({
                        id: i.a.string,
                        lastTypingAdmin: i.a.object,
                        intercomLinkSolution: i.a.string,
                        parts: i.a.arrayOf(i.a.shape({ createdAt: i.a.instanceOf(Date) })),
                    }).isRequired,
                    appName: i.a.string.isRequired,
                    isBorderless: i.a.bool,
                    isFaded: i.a.bool,
                    isMobile: i.a.bool,
                    maxHeight: i.a.number,
                    scrolledToBottom: i.a.bool,
                    frameWindow: i.a.any.isRequired,
                    onReactionSelect: i.a.func.isRequired,
                    onRetry: i.a.func.isRequired,
                    onArticleCardClick: i.a.func,
                    onHeightChange: i.a.func,
                    onImageClick: i.a.func,
                    setPartRef: i.a.func,
                    temporaryExpectationsMessage: i.a.string,
                    conversationSuggestions: i.a.shape({
                        prompt: i.a.array.isRequired,
                        loading: i.a.bool,
                        priority: i.a.number,
                        suggestions: i.a.array.isRequired,
                        isTypeaheadSuggestions: i.a.bool,
                        isInboundBotSuggestions: i.a.bool,
                        isQuickReplies: i.a.bool,
                    }),
                });
        },
        633: function(e, t, r) {
            'use strict';
            var a = r(436),
                i = r(92),
                n = r.n(i),
                o = r(447),
                s = r.n(o),
                l = r(437),
                c = r.n(l),
                d = r(433),
                p = r.n(d),
                u = r(206),
                h = r.n(u),
                m = r(515),
                b = r.n(m),
                g = r(434);
            const f = Object(g.c)('div', { target: 'eytcc8f0' })({
                    name: '1fvlsgw',
                    styles:
                        'position:absolute;height:100%;width:100%;display:block;text-align:center;background-color:rgba(0,0,0,0);z-index:1;',
                }),
                y = Object(g.c)('div', {
                    target: 'eytcc8f1',
                })(
                    'height:50px;width:290px;padding-top:2px;padding-bottom:2px;display:inline-block;position:relative;background-color:white;box-shadow:0 1px 15px 1px rgba(0,0,0,0.08);border-radius:6px;z-index:2;box-sizing:border-box;',
                    ({ emojiYOffset: e }) => Object(g.b)('top:', e - 17, 'px;')
                ),
                v = Object(g.c)('span', { target: 'eytcc8f2' })(
                    "padding:3px;width:36px;line-height:1.28;display:inline-block;height:36px;text-align:center;cursor:pointer;vertical-align:middle;font-size:28px;margin:4px 5px 0 6px;box-sizing:border-box;font-family:'Apple Color Emoji','Segoe UI Emoji','NotoColorEmoji','Segoe UI Symbol','Android Emoji','EmojiSymbols',sans-serif;&:hover{background-color:",
                    Object(g.f)('itemHover'),
                    ';border-radius:3px;}'
                ),
                C = Object(g.c)('span', { target: 'eytcc8f3' })(
                    'border-right:1px solid ',
                    Object(g.f)('dividerBorder'),
                    ';height:36px;width:1px;'
                ),
                x = ({ emojiXOffset: e }) =>
                    Object(g.b)(
                        'position:absolute;bottom:-8px;right:0;width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid white;left:',
                        e - 7,
                        'px;'
                    ),
                j = Object(g.c)('div', { target: 'eytcc8f4' })(x),
                O = Object(g.c)('div', { target: 'eytcc8f5' })(x, ' bottom:-9px;border-top:none;');
            function E(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            class emoji_skintone_picker_EmojiSkintonePicker extends d.Component {
                constructor(...e) {
                    super(...e),
                        E(this, 'handleEmojiClick', e => {
                            const t = b.a.unicodeFromIdentifier(e.target.title);
                            this.props.onEmojiClick(this.props.emoji, t);
                        }),
                        E(this, 'handleOverlayClick', () => {
                            this.props.onClose();
                        });
                }
                renderEmoji(e, t) {
                    return p.a.createElement(
                        'span',
                        { key: t },
                        p.a.createElement(
                            v,
                            { title: b.a.identifierFromUnicode(e), onClick: this.handleEmojiClick },
                            e
                        ),
                        0 === t ? p.a.createElement(C, null) : null
                    );
                }
                render() {
                    const { emoji: e, emojiXOffset: t, emojiYOffset: r } = this.props,
                        a = b.a.getAllModifiedForBaseEmoji(e);
                    return a.length <= 1
                        ? null
                        : p.a.createElement(
                              f,
                              { onClick: this.handleOverlayClick },
                              p.a.createElement(
                                  y,
                                  { emojiYOffset: r },
                                  a.map((e, t) => this.renderEmoji(e, t)),
                                  p.a.createElement(O, { emojiXOffset: t }),
                                  p.a.createElement(j, { emojiXOffset: t })
                              )
                          );
                }
            }
            var w = r(20),
                S = { name: '10f5ogp', styles: 'transition-delay:0ms;transform:scale(1.2);' };
            const k = Object(g.c)('span', { target: 'e1yhe9kr0' })(
                "padding:6px;width:30px;line-height:1.07;display:inline-table;text-align:justify;cursor:pointer;vertical-align:middle;font-size:28px;transition:transform 60ms ease-out;transition-delay:60ms;font-family:'Apple Color Emoji','Segoe UI Emoji','NotoColorEmoji','Segoe UI Symbol','Android Emoji','EmojiSymbols',sans-serif;",
                ({ isActive: e }) => e && S
            );
            function _(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            class emoji_Emoji extends d.Component {
                constructor(...e) {
                    super(...e),
                        _(this, 'state', { isHovering: !1 }),
                        _(this, 'handleEmojiMouseEnter', () => {
                            this.setState({ isHovering: !0 });
                        }),
                        _(this, 'handleEmojiMouseLeave', () => {
                            this.setState({ isHovering: !1 });
                        });
                }
                render() {
                    const {
                            emoji: e,
                            index: t,
                            title: r,
                            onEmojiMouseUp: a,
                            onEmojiMouseDown: i,
                            isActive: n,
                        } = this.props,
                        o = r.replace(/(_|-)/gi, ' ');
                    return p.a.createElement(
                        k,
                        {
                            key: t,
                            className: 'intercom-emoji-picker-emoji',
                            title: r,
                            'aria-label': o,
                            role: 'button',
                            tabIndex: '0',
                            onMouseUp: a,
                            onMouseDown: i,
                            onMouseEnter: this.handleEmojiMouseEnter,
                            onMouseLeave: this.handleEmojiMouseLeave,
                            onKeyDown: Object(w.v)(a),
                            isActive: this.state.isHovering || n,
                        },
                        e
                    );
                }
            }
            var P = r(514),
                T = r(7),
                A = r(29),
                R = r(552),
                B = r(13),
                I = r(491);
            class search_results_summary_SearchResultsSummary extends d.Component {
                render() {
                    const { count: e, query: t } = this.props;
                    return p.a.createElement(
                        'span',
                        { 'aria-live': 'assertive' },
                        t
                            ? p.a.createElement(
                                  I.b,
                                  { role: 'alert' },
                                  e
                                      ? p.a.createElement(
                                            'span',
                                            null,
                                            e,
                                            ' ',
                                            Object(A.e)('article_search_search_results_for_query', {
                                                query: t,
                                            })
                                        )
                                      : Object(A.e)('article_search_no_results_for_query', {
                                            query: t,
                                        })
                              )
                            : null
                    );
                }
            }
            var N = r(84),
                M = r(435),
                z = r(597),
                D = r.n(z),
                q = r(598),
                L = r.n(q);
            const U = Object(g.c)('span', { target: 'e1p2xl350' })(
                    Object(M.b)(D.a, L.a, '576px', '576px'),
                    ' border:10px solid;color:',
                    Object(g.f)('white'),
                    ';background-color:',
                    Object(g.f)('white'),
                    ';border-color:',
                    Object(g.f)('white'),
                    ';cursor:pointer;'
                ),
                F = Object(g.c)('div', { target: 'e1p2xl351' })({
                    name: 'it9z2a',
                    styles: 'margin:10px -5px;padding-left:3px;',
                }),
                H = Object(g.c)('h3', { target: 'e1p2xl352' })(
                    'color:',
                    Object(g.f)('metaText'),
                    ';font-weight:600;font-size:11px;margin:5px;text-transform:uppercase;line-height:1.27;'
                ),
                W = Object(g.c)('div', { target: 'e1p2xl353' })({
                    name: 'jlrjs2',
                    styles: 'width:330px;height:260px;',
                }),
                G = Object(g.c)('div', { target: 'e1p2xl354' })({
                    name: '1nrau3',
                    styles: 'width:145px;height:115px;',
                });
            var V = r(797),
                $ = r.n(V),
                K = r(798),
                Y = r.n(K);
            const X = Object(g.c)('div', { target: 'e1w5qe5f0' })(
                    'z-index:',
                    Object(M.m)(3),
                    ';position:absolute;max-height:',
                    260,
                    'px;bottom:100%;right:calc(50% - 165px);box-shadow:0 1px 15px 1px rgba(0,0,0,0.12);background-color:white;border-radius:6px;',
                    ({ isBorderless: e }) =>
                        e &&
                        Object(g.b)(
                            'height:',
                            236,
                            'px;top:',
                            -236,
                            'px;/* @noflip */ right:7px;/* @noflip */ left:calc(50% - 165px);'
                        ),
                    ' &.intercom-composer-popover{&-enter{opacity:0;transform:translateY(5px);}&-enter-active{opacity:1;transform:translateY(0);}&-exit{opacity:1;transform:translateY(0);}&-exit-active{opacity:0;transform:translateY(5px);}&-enter-active,&-exit-active{transition:opacity ease 200ms,transform ease 200ms;}}'
                ),
                J = Object(g.c)('div', { target: 'e1w5qe5f1' })(
                    'position:absolute;bottom:-8px;width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid white;',
                    ({ popoverType: e, shouldHideUploads: t, isBorderless: r, theme: a }) => {
                        const i = (({
                            popoverType: e,
                            shouldHideUploads: t,
                            isBorderless: r,
                            theme: a,
                        }) => {
                            let i = 'gif' === e ? 81 : 41;
                            return (
                                t && (i -= 34), r && (i += 19), a.isRtlLocale && r && (i += 23), i
                            );
                        })({ popoverType: e, shouldHideUploads: t, isBorderless: r, theme: a });
                        return Object(g.b)('right:', i, 'px;');
                    }
                ),
                Z = Object(g.c)('div', { target: 'e1w5qe5f2' })(
                    'position:absolute;left:0;top:50%;width:100%;margin-top:-7px;font-size:14px;font-weight:bold;text-align:center;color:',
                    Object(g.f)('bodyText'),
                    ';'
                ),
                Q = Object(g.c)('div', { target: 'e1w5qe5f3' })(
                    'position:absolute;top:0;left:20px;right:20px;height:40px;border-bottom:1px ',
                    Object(g.f)('inputBorder'),
                    ' solid;'
                ),
                ee = Object(g.c)('input', { target: 'e1w5qe5f4' })(
                    Object(M.b)($.a, Y.a, '16px', '16px'),
                    ' background-position:0 12px;font-weight:normal;font-size:14px;color:',
                    Object(g.f)('inputText'),
                    ';padding:10px 0 10px 25px;height:40px;width:100%;box-sizing:border-box;&::placeholder{color:',
                    Object(g.f)('inputPlaceholder'),
                    ';}'
                ),
                te = Object(g.c)('div', { target: 'e1w5qe5f5' })({
                    name: '1mt7bgj',
                    styles:
                        'position:absolute;top:40px;left:0;right:0;bottom:5px;padding:0 20px;overflow-y:scroll;',
                });
            var re = r(1);
            function ae({ event: e, eventIdentifier: t, onClick: r }) {
                !e ||
                (function(e) {
                    return (
                        (function() {
                            const e = -1 !== navigator.userAgent.indexOf('Ghost Inspector'),
                                t = window._DATADOG_SYNTHETICS_BROWSER;
                            return e || t || !1;
                        })() || !1 !== e.isTrusted
                    );
                })(e)
                    ? r(e)
                    : t && Object(re.g)('click_denied', { target: t }, !0);
            }
            function ie(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            const ne = [
                { baseEmoji: '👍', skintoneEmoji: '👍' },
                { baseEmoji: '👎', skintoneEmoji: '👎' },
                { baseEmoji: '😭', skintoneEmoji: '😭' },
                { baseEmoji: '😕', skintoneEmoji: '😕' },
                { baseEmoji: '😐', skintoneEmoji: '😐' },
                { baseEmoji: '😊', skintoneEmoji: '😊' },
                { baseEmoji: '😍', skintoneEmoji: '😍' },
            ];
            function oe() {
                const e = JSON.parse(B.a.get('intercom.recentEmoji')) || {};
                return e.version && '1.0' === e.version
                    ? e.emoji || []
                    : (B.a.remove('intercom.recentEmoji'), h()(ne));
            }
            function se(e) {
                const t = JSON.parse(B.a.get('intercom.recentEmoji'));
                if (!t || !t.emoji) return e;
                let r = e;
                return (
                    t.emoji.forEach(t => {
                        t.baseEmoji !== e || (r = t.skintoneEmoji);
                    }),
                    r
                );
            }
            class emoji_picker_EmojiPicker extends d.Component {
                constructor(...e) {
                    super(...e),
                        ie(this, 'state', {
                            searchValue: '',
                            hasNativeEmojiSupport: Object(P.c)(),
                            hasLocalStorageSupport: T.a.hasLocalStorageSupport(),
                            skintoneEmojiToShow: null,
                            emojiXOffset: 0,
                            emojiYOffset: 0,
                        }),
                        ie(
                            this,
                            'emojiMap',
                            (function() {
                                const {
                                    allEmoticonsIdentifierList: e,
                                    unicodeFromIdentifier: t,
                                } = b.a;
                                return e.map(e => ({ title: e, emoji: t(e) }));
                            })()
                        ),
                        ie(this, 'handleEmojiMouseDown', e => {
                            const t = e.target.offsetLeft,
                                r = e.target.offsetTop - Object(R.a)(window, e.target).scrollTop;
                            this.setState({ emojiXOffset: t, emojiYOffset: r }),
                                this.emojiLongPressTimeout &&
                                    clearTimeout(this.emojiLongPressTimeout),
                                (this.emojiLongPressTimeout = setTimeout(
                                    e => {
                                        this.setState({ skintoneEmojiToShow: e });
                                    },
                                    500,
                                    b.a.unicodeFromIdentifier(e.target.title)
                                ));
                        }),
                        ie(this, 'handleEmojiMouseUp', e => {
                            ae({
                                event: e,
                                eventIdentifier: 'select_emoji',
                                onClick: e => {
                                    if (
                                        (this.emojiLongPressTimeout &&
                                            clearTimeout(this.emojiLongPressTimeout),
                                        !this.state.skintoneEmojiToShow)
                                    ) {
                                        const t = b.a.unicodeFromIdentifier(e.target.title);
                                        this.handleEmojiClick(t);
                                    }
                                    this.setState({ skintoneEmojiToShow: null }),
                                        e.preventDefault();
                                },
                            });
                        }),
                        ie(this, 'handleImageClick', e => {
                            const t = e.target.title;
                            this.props.onEmojiClick(t);
                        }),
                        ie(this, 'handleSearchChange', e => {
                            const t = e.target.value;
                            this.setState({ searchValue: t });
                        }),
                        ie(this, 'handleClick', e => {
                            e.stopPropagation();
                        }),
                        ie(this, 'handleEmojiClick', (e, t) => {
                            if (void 0 === e) return;
                            let r = e;
                            this.state.hasLocalStorageSupport &&
                                ((r = t || se(e)),
                                t &&
                                    (function(e, t) {
                                        const r = JSON.parse(B.a.get('intercom.recentEmoji'));
                                        if (!r || !r.emoji) return;
                                        let a = !1,
                                            i = r.emoji;
                                        i.forEach(r => {
                                            if (r.baseEmoji === e)
                                                return (r.skintoneEmoji = t), void (a = !0);
                                        }),
                                            a ||
                                                (i = h()(i).concat({
                                                    baseEmoji: e,
                                                    skintoneEmoji: t,
                                                })),
                                            B.a.set(
                                                'intercom.recentEmoji',
                                                JSON.stringify({ version: '1.0', emoji: i })
                                            );
                                    })(e, t),
                                (function(e, t = e) {
                                    const r = ne.find(t => t.baseEmoji === e);
                                    let a = oe();
                                    const i = a.find(t => t.baseEmoji === e),
                                        n = a.indexOf(i);
                                    i && a.splice(n, 1),
                                        a.unshift({ baseEmoji: e, skintoneEmoji: t }),
                                        a.length < 8 && !r && (a = a.concat(ne)),
                                        B.a.set(
                                            'intercom.recentEmoji',
                                            JSON.stringify({ version: '1.0', emoji: a })
                                        );
                                })(e, r)),
                                this.props.onEmojiClick(r);
                        }),
                        ie(this, 'handleSkinTonePickerClose', () => {
                            this.setState({ skintoneEmojiToShow: null });
                        });
                }
                hasSearchText() {
                    return '' !== this.state.searchValue;
                }
                filteredSearchEmoji(e) {
                    return this.emojiMap
                        .filter(
                            (e => {
                                const t = e.toLowerCase();
                                return e => e.title.indexOf(t) > -1;
                            })(e)
                        )
                        .map(e => e.emoji);
                }
                renderEmoji(e, t, r = e) {
                    if (!b.a.isSupportedUnicode(e)) return null;
                    const a = b.a.identifierFromUnicode(r),
                        i = this.state.skintoneEmojiToShow === r,
                        n = this.state.hasLocalStorageSupport ? se(e) : e;
                    return p.a.createElement(emoji_Emoji, {
                        key: t,
                        emoji: n,
                        title: a,
                        onEmojiMouseUp: this.handleEmojiMouseUp,
                        onEmojiMouseDown: this.handleEmojiMouseDown,
                        isActive: i,
                    });
                }
                renderImage(e, t) {
                    return p.a.createElement(U, {
                        key: t,
                        title: b.a.asciiFromUnicode(e),
                        style: b.a.spritemapStyleHash(16, e),
                        onClick: this.handleImageClick,
                        'aria-label': Object(P.b)(e),
                    });
                }
                renderGroup(e, t) {
                    return p.a.createElement(
                        F,
                        { key: t },
                        p.a.createElement(
                            H,
                            null,
                            Object(A.e)(b.a.getGroupRepresentatives()[t][1].toLowerCase())
                        ),
                        e.map((e, t) => {
                            if (b.a.isEmojiBaseUnicode(e)) return this.renderEmoji(e, t);
                        })
                    );
                }
                renderMostRecent() {
                    const e = oe().slice(0, 8);
                    return p.a.createElement(
                        F,
                        null,
                        p.a.createElement(H, null, Object(A.e)('frequently_used')),
                        e.map((e, t) => this.renderEmoji(e.skintoneEmoji, t, e.baseEmoji))
                    );
                }
                renderFiltered() {
                    const e = this.filteredSearchEmoji(this.state.searchValue);
                    return p.a.createElement(
                        F,
                        null,
                        0 === e.length
                            ? p.a.createElement(Z, null, Object(A.e)('no_emoji_found'))
                            : e.map((e, t) => {
                                  if (b.a.isEmojiBaseUnicode(e)) return this.renderEmoji(e, t);
                              })
                    );
                }
                renderGroups() {
                    const e = b.a.prettyEmoticonsUnicodeGroups();
                    return p.a.createElement(
                        p.a.Fragment,
                        null,
                        this.state.hasLocalStorageSupport ? this.renderMostRecent() : null,
                        e.map((e, t) => this.renderGroup(e, t))
                    );
                }
                renderEmojiPicker() {
                    return p.a.createElement(
                        p.a.Fragment,
                        null,
                        p.a.createElement(
                            Q,
                            null,
                            p.a.createElement(ee, {
                                name: 'emoji',
                                autoFocus: !0,
                                placeholder: Object(A.e)('search_for_emoji'),
                                value: this.state.searchValue,
                                onChange: this.handleSearchChange,
                                onBlur: N.d,
                                'aria-label': Object(A.e)('search_for_emoji'),
                            })
                        ),
                        p.a.createElement(search_results_summary_SearchResultsSummary, {
                            query: this.state.searchValue,
                            count: this.filteredSearchEmoji(this.state.searchValue).filter(
                                b.a.isEmojiBaseUnicode
                            ).length,
                        }),
                        p.a.createElement(
                            te,
                            { onWheel: w.d, 'aria-live': 'polite' },
                            this.hasSearchText() ? this.renderFiltered() : this.renderGroups()
                        )
                    );
                }
                renderSkinTonePicker() {
                    return p.a.createElement(emoji_skintone_picker_EmojiSkintonePicker, {
                        emoji: this.state.skintoneEmojiToShow,
                        emojiYOffset: this.state.emojiYOffset,
                        emojiXOffset: this.state.emojiXOffset,
                        onClose: this.handleSkinTonePickerClose,
                        onEmojiClick: this.handleEmojiClick,
                    });
                }
                renderWithoutNativeSupport() {
                    const e = b.a.asciiEmoticonsUnicodeList.slice(0, 12);
                    return p.a.createElement(
                        G,
                        { onClick: this.handleClick, tabIndex: '-1' },
                        e.map((e, t) => this.renderImage(e, t))
                    );
                }
                renderWithNativeSupport() {
                    return p.a.createElement(
                        W,
                        { onClick: this.handleClick, tabIndex: '-1' },
                        this.state.skintoneEmojiToShow ? this.renderSkinTonePicker() : null,
                        this.renderEmojiPicker()
                    );
                }
                render() {
                    return this.state.hasNativeEmojiSupport
                        ? this.renderWithNativeSupport()
                        : this.renderWithoutNativeSupport();
                }
            }
            emoji_picker_EmojiPicker.propTypes = { onEmojiClick: c.a.func.isRequired };
            var le = r(2),
                ce = r(519),
                de = r(444);
            const pe = Object(g.c)('div', { target: 'e1ui6fit0' })({
                    name: 'jlrjs2',
                    styles: 'width:330px;height:260px;',
                }),
                ue = Object(g.c)('div', { target: 'e1ui6fit1' })({
                    name: '1u3norf',
                    styles: 'float:left;width:50%;height:150px;padding:5px;box-sizing:border-box;',
                }),
                he = Object(g.c)('div', { target: 'e1ui6fit2' })({
                    name: '10jvw7m',
                    styles:
                        'width:100%;height:100%;cursor:pointer;border-radius:2px;&:hover{box-shadow:0 1px 3px 0 rgba(0,0,0,0.3);}',
                }),
                me = Object(g.c)('div', { target: 'e1ui6fit3' })({
                    name: 'c3jq20',
                    styles: 'margin:5px -5px;overflow:hidden;',
                });
            function be(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            class gif_picker_GifPicker extends d.Component {
                constructor(...e) {
                    super(...e),
                        be(this, 'state', { query: null }),
                        be(this, 'handleClick', e => {
                            e.stopPropagation();
                        }),
                        be(
                            this,
                            'handleSearchInputChange',
                            Object(ce.a)(e => {
                                this.setState({ query: e.target.value }),
                                    this.props.onSearchGifs(e.target.value);
                            }, 200)
                        );
                }
                componentDidMount() {
                    this.props.onSearchGifs();
                }
                createHandleGifClick(e) {
                    return t => {
                        ae({
                            event: t,
                            eventIdentifier: 'select_gif',
                            onClick: t => {
                                this.props.onGifClick(e), t.preventDefault();
                            },
                        });
                    };
                }
                renderGif(e) {
                    const t = Object(A.e)('send');
                    return p.a.createElement(
                        ue,
                        { key: e.url },
                        p.a.createElement(he, {
                            style: { background: `url(${e.url}) center center / cover` },
                            onClick: this.createHandleGifClick(e),
                            'aria-label': e.title ? `${t} ${e.title} gif` : `${t} gif`,
                        })
                    );
                }
                renderFetching() {
                    return p.a.createElement(de.a, null);
                }
                renderResults() {
                    const { fetchingFailed: e, gifs: t } = this.props;
                    return p.a.createElement(
                        me,
                        null,
                        e ? p.a.createElement(Z, null, Object(A.e)('gifs_load_error')) : null,
                        e || 0 !== t.length
                            ? null
                            : p.a.createElement(Z, null, Object(A.e)('no_gifs_found')),
                        t.map(e => this.renderGif(e))
                    );
                }
                render() {
                    const { gifs: e } = this.props,
                        { query: t } = this.state;
                    return p.a.createElement(
                        pe,
                        { onClick: this.handleClick, tabIndex: '-1' },
                        p.a.createElement(
                            Q,
                            null,
                            p.a.createElement(ee, {
                                name: 'gif',
                                autoFocus: !0,
                                placeholder: Object(A.e)('search_gif'),
                                onChange: this.handleSearchInputChange,
                                onBlur: N.d,
                                'aria-label': Object(A.e)('search_gif'),
                            }),
                            p.a.createElement(search_results_summary_SearchResultsSummary, {
                                count: e.length,
                                query: t,
                            })
                        ),
                        p.a.createElement(
                            te,
                            { onWheel: w.d, 'aria-live': 'polite' },
                            this.props.isFetching ? this.renderFetching() : this.renderResults()
                        )
                    );
                }
            }
            function ge(e, t = '') {
                return (r, a) => {
                    r(fe(t));
                    const { session: i } = a();
                    return e
                        .searchGifs(i, t)
                        .then(e => {
                            r(ye(t, e));
                        })
                        .catch(() => {
                            r(
                                (function(e) {
                                    return { type: 'SEARCH_GIFS_FAILURE', searchTerm: e };
                                })(t)
                            );
                        });
                };
            }
            function fe(e) {
                return { type: 'SEARCH_GIFS_REQUEST', searchTerm: e };
            }
            function ye(e, t) {
                return { type: 'SEARCH_GIFS_SUCCESS', gifs: t.results, searchTerm: e };
            }
            gif_picker_GifPicker.propTypes = {
                isFetching: c.a.bool.isRequired,
                gifs: c.a.array.isRequired,
                fetchingFailed: c.a.bool.isRequired,
                onSearchGifs: c.a.func.isRequired,
                onGifClick: c.a.func.isRequired,
            };
            var ve = Object(a.connect)(
                e => {
                    const { isFetching: t, fetchingFailed: r, gifs: a } = e.gifs;
                    return { isFetching: t, fetchingFailed: r, gifs: a };
                },
                e => ({
                    onSearchGifs: (t = '') => {
                        e(ge(le.b, t));
                    },
                })
            )(gif_picker_GifPicker);
            var Ce = () =>
                    p.a.createElement(
                        'svg',
                        { focusable: 'false', 'aria-hidden': 'true', viewBox: '0 0 16 16' },
                        p.a.createElement('path', {
                            d:
                                'M1.388 15.77c-.977.518-1.572.061-1.329-1.019l1.033-4.585c.123-.543.659-1.034 1.216-1.1l6.195-.72c1.648-.19 1.654-.498 0-.687l-6.195-.708c-.55-.063-1.09-.54-1.212-1.085L.056 1.234C-.187.161.408-.289 1.387.231l12.85 6.829c.978.519.98 1.36 0 1.88l-12.85 6.83z',
                            fillRule: 'evenodd',
                        })
                    ),
                xe = r(498);
            var je = () =>
                    p.a.createElement(
                        'svg',
                        {
                            focusable: 'false',
                            'aria-hidden': 'true',
                            width: '18',
                            height: '18',
                            xmlns: 'http://www.w3.org/2000/svg',
                        },
                        p.a.createElement('path', {
                            d:
                                'M9 0a9 9 0 1 1 0 18A9 9 0 0 1 9 0zM5 6.999a1 1 0 1 0 2.001 0A1 1 0 0 0 5 7zm5.999 0a1.001 1.001 0 0 0 2.001 0 1 1 0 0 0-2.001 0zm-2.3 6.494c.087.005.174.007.26.007 1.513 0 2.99-.722 4.398-2.149l.35-.356.482-.702-10.326.006.435.62.31.392c.068.083 1.652 2.05 4.092 2.182z',
                            fill: '#ADADAD',
                            fillRule: 'evenodd',
                        })
                    ),
                Oe = r(614);
            var Ee = () =>
                    p.a.createElement(
                        'svg',
                        { focusable: 'false', 'aria-hidden': 'true', viewBox: '0 0 29 18' },
                        p.a.createElement('path', {
                            d:
                                'M9 0h11a9 9 0 0 1 0 18H9A9 9 0 0 1 9 0zM6.561 9.337c0 2.277 1.683 3.806 3.773 3.806 1.199 0 2.2-.506 2.882-1.265V9.227H9.784v.814h2.519v1.496a2.895 2.895 0 0 1-1.969.792c-1.606 0-2.827-1.254-2.827-2.992 0-1.749 1.221-2.981 2.827-2.981.88 0 1.661.418 2.123 1.012l.726-.451c-.649-.803-1.551-1.375-2.849-1.375-2.09 0-3.773 1.518-3.773 3.795zM14.701 13h.913V5.663h-.913V13zm2.629 0h.913V9.656h3.817v-.814h-3.817V6.477h3.894v-.814H17.33V13z',
                            fillRule: 'nonzero',
                        })
                    ),
                we = r(495),
                Se = r(442);
            function ke(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            class composer_popover_ComposerPopover extends d.Component {
                constructor(...e) {
                    super(...e),
                        ke(this, 'addedEscListener', !1),
                        ke(this, 'handleEsc', e => {
                            const { onEscapeKey: t } = this.props;
                            Object(w.p)(e) && t();
                        });
                }
                componentDidUpdate() {
                    const { frameWindow: e, onEscapeKey: t, children: r } = this.props;
                    if (e && t)
                        if (r) {
                            if (this.addedEscListener) return;
                            Object(w.c)(e, 'keydown', this.handleEsc), (this.addedEscListener = !0);
                        } else
                            Object(w.y)(e, 'keydown', this.handleEsc), (this.addedEscListener = !1);
                }
                render() {
                    const {
                        children: e,
                        popoverType: t,
                        isBorderless: r,
                        shouldHideUploads: a,
                    } = this.props;
                    return p.a.createElement(
                        Se.TransitionGroup,
                        null,
                        e
                            ? p.a.createElement(
                                  Se.CSSTransition,
                                  {
                                      classNames: 'intercom-composer-popover',
                                      timeout: { enter: 200, exit: 200 },
                                  },
                                  p.a.createElement(
                                      X,
                                      { isBorderless: r },
                                      e,
                                      p.a.createElement(J, {
                                          popoverType: t,
                                          isBorderless: r,
                                          shouldHideUploads: a,
                                      })
                                  )
                              )
                            : null
                    );
                }
            }
            var _e = r(464),
                Pe = r(473);
            const Te = Object(g.c)('div', { target: 'em5ag1g0' })(
                    'background-color:white;padding:0 ',
                    25,
                    'px;font-size:14px;display:flex;flex-direction:column;',
                    X.className,
                    '{bottom:55px;',
                    ee.className,
                    '{padding-left:',
                    25,
                    'px;}}label{color:',
                    Object(g.f)('installRed'),
                    ';}',
                    ({ theme: e, shouldShowSmallStateUpfrontEmailComposer: t }) =>
                        t &&
                        Object(g.b)(
                            'box-shadow:',
                            e.composerShadowColor,
                            ' -1px -4px 20px 3px;min-height:200px;height:200px !important;position:absolute;left:0;right:0;bottom:0;'
                        )
                ),
                Ae = Object(g.c)('div', { target: 'em5ag1g1' })({
                    name: 'df1wjn',
                    styles: 'position:absolute;bottom:0;right:16px;',
                }),
                Re = Object(g.c)(Pe.g, { target: 'em5ag1g2' })(
                    ({ theme: e, disabled: t }) =>
                        t &&
                        Object(g.b)(
                            'cursor:auto;svg{opacity:0.65;cursor:auto;path{cursor:auto;fill:',
                            e.grey,
                            ';}}&:hover{opacity:0.8;}'
                        ),
                    ' ',
                    ({ theme: e, isPrimaryColorReadable: t }) =>
                        !t && Object(g.b)('svg{path{fill:', e.grey, ';}}&:hover{opacity:0.65;}')
                ),
                Be = ({ theme: e }) =>
                    Object(g.b)('padding-top:20px;&::placeholder{color:', e.grey, ';}');
            var Ie = { name: 'orqf19', styles: 'height:70px;' },
                Ne = { name: '8atqhb', styles: 'width:100%;' };
            const Me = Object(g.c)('textarea', { target: 'em5ag1g3' })(
                    Be,
                    ' line-height:1.33;overflow-x:hidden;overflow-y:scroll;flex:1;margin:0 0 50px 0;width:calc(100% + ',
                    25,
                    'px);resize:none;',
                    ({ theme: e }) => !e.visibleScrollBars && Ne,
                    ' ',
                    ({ small: e }) => e && Ie
                ),
                ze = Object(g.c)('input', { target: 'em5ag1g4' })(
                    Be,
                    ' width:100%;border-bottom:1px solid ',
                    Object(g.f)('lightGrey3'),
                    ';padding-bottom:16px;',
                    ({ theme: e, hasError: t }) =>
                        t &&
                        Object(g.b)('border-bottom:1px solid ', e.installRed, ';margin-bottom:6px;')
                ),
                De = Object(g.c)('span', { target: 'em5ag1g5' })(
                    'color:',
                    Object(g.f)('installRed'),
                    ';'
                );
            function qe() {
                return (qe =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var a in r)
                                Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function Le(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            class upfront_email_composer_UpfrontEmailComposer extends d.PureComponent {
                constructor(...e) {
                    super(...e),
                        Le(this, 'emailInput', void 0),
                        Le(this, 'emailFocusTimeout', null),
                        Le(this, 'state', { isTextareaFocused: !1 }),
                        Le(this, 'renderSendButton', () => {
                            const { isPrimaryColorReadable: e } = this.context || {},
                                { sendButtonDisabled: t, onSendMessageClick: r } = this.props;
                            return p.a.createElement(
                                Re,
                                {
                                    onClick: r,
                                    disabled: t,
                                    isPrimaryColorReadable: e,
                                    'aria-label': Object(A.e)('send_a_message'),
                                },
                                p.a.createElement(Ce, null)
                            );
                        }),
                        Le(this, 'renderEmojiPickerButton', () => {
                            const { isPrimaryColorReadable: e } = this.context || {},
                                { showEmojiPicker: t, onEmojiPickerToggle: r } = this.props,
                                { isTextareaFocused: a } = this.state;
                            return a
                                ? p.a.createElement(
                                      Pe.b,
                                      {
                                          className: 'intercom-composer-emoji-button',
                                          onClick: r,
                                          showEmojiPicker: t,
                                          'aria-label': Object(A.e)('emoji_picker'),
                                          isPrimaryColorReadable: e,
                                      },
                                      t
                                          ? p.a.createElement(je, null)
                                          : p.a.createElement(xe.a, null)
                                  )
                                : null;
                        }),
                        Le(this, 'renderEmojiPicker', () => {
                            const {
                                showEmojiPicker: e,
                                onEmojiClick: t,
                                onEmojiPickerToggle: r,
                                frameWindow: a,
                            } = this.props;
                            return p.a.createElement(
                                composer_popover_ComposerPopover,
                                { frameWindow: a, onEscapeKey: r, popoverType: 'emoji' },
                                e
                                    ? p.a.createElement(emoji_picker_EmojiPicker, {
                                          onEmojiClick: t,
                                      })
                                    : null
                            );
                        }),
                        Le(this, 'renderErrorMessage', () => {
                            const { errorMessage: e } = this.props;
                            return e ? p.a.createElement(De, null, e) : null;
                        }),
                        Le(this, 'renderEmailInput', () => {
                            const { email: e, onEmailChange: t, errorMessage: r } = this.props,
                                a = r ? { 'aria-invalid': !0 } : {};
                            return p.a.createElement(
                                ze,
                                qe(
                                    {
                                        name: 'email',
                                        ref: e => {
                                            this.emailInput = e;
                                        },
                                        onChange: t,
                                        value: e,
                                        type: 'email',
                                        autoComplete: 'email',
                                        placeholder: 'you@company.com',
                                        'aria-label': Object(A.e)('your_email'),
                                        onFocus: this.handleEmailInputFocus,
                                        onBlur: N.d,
                                        hasError: !!r,
                                    },
                                    a
                                )
                            );
                        }),
                        Le(this, 'renderMessageTextArea', () => {
                            const {
                                message: e,
                                setTextInput: t,
                                onMessageChange: r,
                                onCursorReposition: a,
                                onWheel: i,
                                shouldShowSmallStateUpfrontEmailComposer: n,
                            } = this.props;
                            return p.a.createElement(Me, {
                                name: 'message',
                                ref: e => t(e),
                                value: e,
                                placeholder: Object(A.e)('write_your_message'),
                                'aria-label': Object(A.e)('your_message'),
                                onChange: r,
                                onKeyUp: a,
                                onClick: a,
                                onWheel: i,
                                onFocus: this.handleTextareaFocus,
                                onBlur: N.d,
                                small: n,
                            });
                        }),
                        Le(this, 'handleEmailInputFocus', () => {
                            this.setState({ isTextareaFocused: !1 });
                        }),
                        Le(this, 'handleTextareaFocus', () => {
                            this.setState({ isTextareaFocused: !0 });
                        });
                }
                componentDidMount() {
                    this.props.toggleUpfrontEmailCollectorState();
                }
                componentWillUnmount() {
                    this.props.toggleUpfrontEmailCollectorState(),
                        this.emailFocusTimeout && clearTimeout(this.emailFocusTimeout);
                }
                componentDidMount() {
                    this.emailFocusTimeout = setTimeout(() => {
                        this.emailInput && this.emailInput.focus();
                    }, 0);
                }
                render() {
                    const {
                        headerHeight: e,
                        setComposer: t,
                        shouldShowSmallStateUpfrontEmailComposer: r,
                    } = this.props;
                    return p.a.createElement(
                        Te,
                        {
                            style: { height: `calc(100vh - ${e}px)` },
                            ref: e => t(e),
                            shouldShowSmallStateUpfrontEmailComposer: r,
                        },
                        this.renderEmailInput(),
                        this.renderErrorMessage(),
                        this.renderMessageTextArea(),
                        this.renderEmojiPicker(),
                        p.a.createElement(
                            Ae,
                            null,
                            this.renderEmojiPickerButton(),
                            this.renderSendButton()
                        )
                    );
                }
            }
            Le(upfront_email_composer_UpfrontEmailComposer, 'defaultProps', {
                email: '',
                message: '',
                disabled: !1,
                showEmojiPicker: !1,
            }),
                Le(upfront_email_composer_UpfrontEmailComposer, 'contextType', _e.a);
            var Ue = r(556),
                Fe = r(153),
                He = r(550),
                We = r(485),
                Ge = r(33);
            function Ve(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            class composer_Composer extends d.PureComponent {
                constructor(...e) {
                    super(...e),
                        Ve(this, 'state', {
                            text: this.props.defaultText || '',
                            email: '',
                            errorMessage: '',
                            prevProps: this.props,
                        }),
                        Ve(this, 'textHasChanged', ({ text: e }) => e !== this.state.text),
                        Ve(this, 'isSubmissionDisabled', () => {
                            const { conversation: e } = this.props;
                            if (!e) return !1;
                            const { parts: t, id: r } = e;
                            return (!t || 0 !== t.length) && !r;
                        }),
                        Ve(this, 'handleTextInputChange', e => {
                            this.setState(
                                {
                                    text: e.target.value,
                                    cursorPosition: Object(w.j)(this.textInput),
                                },
                                this.handleChange
                            );
                        }),
                        Ve(this, 'handleKeyDown', e => {
                            const { conversation: t } = this.props;
                            if ($e(e)) {
                                if (this.isSubmissionDisabled())
                                    try {
                                        const { parts: e } = t,
                                            { saveState: r } = e && e.length && e[0];
                                        Object(re.e)(
                                            'submitted',
                                            'message',
                                            'messenger',
                                            'in_conversation',
                                            { conversation_state: r },
                                            'usability_metric'
                                        );
                                    } catch (e) {}
                                else this.handleTextSubmit();
                                e.preventDefault();
                            } else this.handleTyping();
                        }),
                        Ve(
                            this,
                            'handleTyping',
                            n()(() => {
                                this.props.onTyping();
                            }, 1e3)
                        ),
                        Ve(this, 'handleGifClick', e => {
                            const { url: t, width: r, height: a, attribution: i, title: n } = e;
                            this.props.onSubmit(Object(Ge.b)(t, r, a, i, n)),
                                this.handleGifPickerToggle();
                        }),
                        Ve(this, 'handleCursorReposition', e => {
                            const t = Array.from(new Array(4), (e, t) => t + 37);
                            ('keyup' === e.type && t.indexOf(e.keyCode) < 0) ||
                                this.setState({ cursorPosition: Object(w.j)(this.textInput) });
                        }),
                        Ve(this, 'handleUploadButtonClick', e => {
                            ae({
                                event: e,
                                onClick: () => {
                                    this.fileInput.click();
                                },
                            });
                        }),
                        Ve(this, 'handleEmojiPickerToggle', e => {
                            ae({
                                event: e,
                                onClick: () => {
                                    const {
                                        showEmojiPicker: e,
                                        onEmojiPickerToggle: t,
                                    } = this.props;
                                    t(), e && this.focus();
                                },
                                eventIdentifier: 'toggle_emoji_picker',
                            });
                        }),
                        Ve(this, 'handleEmojiClick', e => {
                            const { text: t } = this.state,
                                r = this.state.cursorPosition || t.length,
                                a = r + e.length,
                                i = !this.hasText(),
                                n = Object(w.o)(t, e, r);
                            this.setState({ text: n, cursorPosition: a }, () => {
                                this.handleEmojiPickerToggle(),
                                    i ? this.handleTextSubmit() : this.handleChange();
                            });
                        }),
                        Ve(this, 'handleGifPickerToggle', e => {
                            ae({
                                event: e,
                                onClick: () => {
                                    const { showGifPicker: e, onGifPickerToggle: t } = this.props;
                                    t(), e && this.focus();
                                },
                                eventIdentifier: 'toggle_gif_picker',
                            });
                        }),
                        Ve(this, 'handleFileSubmit', e => {
                            let t = e;
                            e.target && (t = e.target.files),
                                t &&
                                    0 !== t.length &&
                                    (this.createAttachmentParts(t), this.clearFileInput());
                        }),
                        Ve(this, 'createBlocksForImageOrAttachment', e => {
                            const { onSubmit: t } = this.props;
                            Object(Ue.b)(e).then(r => {
                                if (r) {
                                    const { width: a, height: i, src: n } = r,
                                        o = Object(Fe.b)(r.src, e.name, e.type);
                                    t(Object(Ge.b)(n, a, i), o);
                                } else {
                                    const { name: r, type: a, size: i } = e;
                                    t(Object(Ge.a)(r, a, i), e);
                                }
                            });
                        }),
                        Ve(this, 'handleSubmitButtonClick', e => {
                            e.preventDefault(), this.handleTextSubmit();
                        }),
                        Ve(this, 'handleFocus', () => {
                            if (Object(T.g)()) {
                                if ((this.props.onHeaderCollapse(), Object(T.f)())) return;
                                setTimeout(() => {
                                    this.composer.scrollIntoView();
                                }, 200);
                            }
                        }),
                        Ve(this, 'handleEmailChange', e => {
                            const { value: t } = e.currentTarget;
                            this.setState({ email: t, errorMessage: '' });
                        }),
                        Ve(this, 'handleSendMessageClick', () => {
                            const { email: e, text: t } = this.state;
                            this.hasEmailAndMessage() &&
                                (Object(He.a)(e)
                                    ? (this.setState({ text: '' }, this.handleChange),
                                      this.props.onSubmit(Object(Ge.c)(t), null, null, e))
                                    : this.setState({
                                          errorMessage: Object(A.e)(
                                              'that_email_address_doesnt_look_quite_right'
                                          ),
                                      }));
                        }),
                        Ve(this, 'handleUpfrontEmojiClick', e => {
                            const { cursorPosition: t } = this.state,
                                r = Object(w.o)(this.state.text, e, t);
                            this.setState({ text: r }, () => {
                                this.handleEmojiPickerToggle();
                            });
                        }),
                        Ve(this, 'hasEmailAndMessage', () => {
                            const { email: e, text: t } = this.state;
                            return e.trim().length > 0 && t.trim().length > 0;
                        }),
                        Ve(
                            this,
                            'shouldHideUploads',
                            () => !this.shouldShowUploadButton() && !this.hasText()
                        ),
                        Ve(this, 'setTextInput', e => {
                            this.textInput = e;
                        }),
                        Ve(this, 'setComposer', e => {
                            this.composer = e;
                        }),
                        Ve(this, 'renderUpfrontEmailComposer', () => {
                            const {
                                    showEmojiPicker: e,
                                    toggleUpfrontEmailCollectorState: t,
                                    headerHeight: r,
                                    conversation: a,
                                    frameWindow: i,
                                } = this.props,
                                { text: n, email: o, errorMessage: s } = this.state,
                                l = a && !!a.id;
                            return p.a.createElement(upfront_email_composer_UpfrontEmailComposer, {
                                onMessageChange: this.handleTextInputChange,
                                onEmailChange: this.handleEmailChange,
                                onCursorReposition: this.handleCursorReposition,
                                onSendMessageClick: this.handleSendMessageClick,
                                onEmojiClick: this.handleUpfrontEmojiClick,
                                onEmojiPickerToggle: this.handleEmojiPickerToggle,
                                onWheel: w.d,
                                toggleUpfrontEmailCollectorState: t,
                                setTextInput: this.setTextInput,
                                setComposer: this.setComposer,
                                showEmojiPicker: e,
                                message: n,
                                email: o,
                                errorMessage: s,
                                sendButtonDisabled: !this.hasEmailAndMessage(),
                                headerHeight: r,
                                frameWindow: i,
                                shouldShowSmallStateUpfrontEmailComposer: l,
                            });
                        }),
                        Ve(this, 'renderTextArea', () => {
                            const { placeholder: e } = this.props,
                                { text: t } = this.state;
                            return p.a.createElement('textarea', {
                                name: 'message',
                                ref: e => (this.textInput = e),
                                value: t,
                                placeholder: e,
                                'aria-label': e,
                                onChange: this.handleTextInputChange,
                                onKeyDown: this.handleKeyDown,
                                onKeyUp: this.handleCursorReposition,
                                onClick: this.handleCursorReposition,
                                onFocus: this.handleFocus,
                                onBlur: N.d,
                                onWheel: w.d,
                                tabIndex: '0',
                            });
                        });
                }
                componentDidMount() {
                    const e = this.composer && this.composer.clientHeight;
                    this.handleHeightChange(e),
                        this.moveCaretToEndOfText(),
                        Object(T.g)() || this.props.isBorderless || this.focus(),
                        this.context &&
                            this.context.subscribe &&
                            (this.context.subscribe('focusComposer', () => this.focus()),
                            this.context.subscribe('emptyComposer', () =>
                                this.setState({ text: '' }, this.handleChange)
                            )),
                        this.state.text && this.props.onChange(this.state.text);
                }
                componentDidUpdate() {
                    this.handleHeightChange(this.composer.clientHeight);
                }
                componentWillUnmount() {
                    this.context &&
                        this.context.subscribe &&
                        (this.context.subscribe('focusComposer', () => null),
                        this.context.subscribe('emptyComposer', () => null));
                }
                static getDerivedStateFromProps(e, t) {
                    if (!t || s()(e, t.prevProps)) return null;
                    const { defaultText: r } = t.prevProps;
                    return (e.defaultText || ((a = e.defaultText), /^\s*$/.test(a))) &&
                        e.defaultText !== r
                        ? { text: e.defaultText, prevProps: e }
                        : { prevProps: e };
                    var a;
                }
                handleHeightChange(e) {
                    const { onHeightChange: t } = this.props;
                    t && t(e);
                }
                createAttachmentParts(e) {
                    e.length > 5
                        ? Object(re.c)('attachment_limit_exceeded', {
                              file_count: e.length,
                              place: 'composer',
                          })
                        : Array.from(e).forEach(e => this.createBlocksForImageOrAttachment(e));
                }
                handleTextSubmit() {
                    this.hasText() &&
                        (this.props.onSubmit(Object(Ge.c)(this.state.text)),
                        this.setState({ text: '' }, this.handleChange));
                }
                handleChange() {
                    this.props.onChange(this.state.text);
                }
                clearFileInput() {
                    this.fileInput && (this.fileInput.value = null);
                }
                focus() {
                    const { cursorPosition: e } = this.state;
                    Object(w.h)(this.textInput, e);
                }
                hasText() {
                    return this.state.text.trim().length > 0;
                }
                shouldShowUploadButton() {
                    return Object(T.c)() && this.props.showUploadButton && !this.hasText();
                }
                moveCaretToEndOfText() {
                    this.hasText() && Object(w.h)(this.textInput, this.state.text.length);
                }
                renderUploadButton() {
                    return p.a.createElement(
                        Pe.i,
                        {
                            className: 'intercom-composer-upload-button',
                            onClick: this.handleUploadButtonClick,
                            'aria-label': Object(A.e)('upload_attachment'),
                        },
                        p.a.createElement(we.a, null),
                        p.a.createElement('input', {
                            ref: e => (this.fileInput = e),
                            type: 'file',
                            multiple: 'multiple',
                            disabled: this.isSubmissionDisabled(),
                            onChange: this.handleFileSubmit,
                            style: { display: 'none' },
                        })
                    );
                }
                renderEmojiPickerButton() {
                    const { showEmojiPicker: e, isPrimaryColorReadable: t } = this.props;
                    return p.a.createElement(
                        Pe.b,
                        {
                            className: 'intercom-composer-emoji-button',
                            disabled: this.isSubmissionDisabled(),
                            onClick: this.handleEmojiPickerToggle,
                            'aria-disabled': this.isSubmissionDisabled(),
                            'aria-label': Object(A.e)('emoji_picker'),
                            showEmojiPicker: e,
                            isPrimaryColorReadable: t,
                        },
                        e ? p.a.createElement(je, null) : p.a.createElement(xe.a, null)
                    );
                }
                renderEmojiPicker() {
                    const { frameWindow: e, showEmojiPicker: t, isBorderless: r } = this.props;
                    return p.a.createElement(
                        composer_popover_ComposerPopover,
                        {
                            onEscapeKey: this.handleEmojiPickerToggle,
                            frameWindow: e,
                            isBorderless: r,
                            shouldHideUploads: this.shouldHideUploads(),
                            popoverType: 'emoji',
                        },
                        t
                            ? p.a.createElement(emoji_picker_EmojiPicker, {
                                  onEmojiClick: this.handleEmojiClick,
                              })
                            : null
                    );
                }
                renderGifPickerButton() {
                    const { showGifPicker: e, isPrimaryColorReadable: t } = this.props;
                    return p.a.createElement(
                        Pe.d,
                        {
                            className: 'intercom-composer-gif-button',
                            disabled: this.isSubmissionDisabled(),
                            onClick: this.handleGifPickerToggle,
                            'aria-disabled': this.isSubmissionDisabled(),
                            'aria-label': Object(A.e)('gif_picker'),
                            showGifPicker: e,
                            isPrimaryColorReadable: t,
                        },
                        e ? p.a.createElement(Ee, null) : p.a.createElement(Oe.a, null)
                    );
                }
                renderGifPicker() {
                    const { frameWindow: e, showGifPicker: t, isBorderless: r } = this.props;
                    return p.a.createElement(
                        composer_popover_ComposerPopover,
                        {
                            onEscapeKey: this.handleGifPickerToggle,
                            frameWindow: e,
                            isBorderless: r,
                            shouldHideUploads: this.shouldHideUploads(),
                            popoverType: 'gif',
                        },
                        t ? p.a.createElement(ve, { onGifClick: this.handleGifClick }) : null
                    );
                }
                renderSendButton() {
                    const { isPrimaryColorReadable: e } = this.props;
                    return p.a.createElement(
                        Pe.g,
                        {
                            className: 'intercom-composer-send-button',
                            disabled: this.isSubmissionDisabled(),
                            onTouchEnd: this.handleSubmitButtonClick,
                            onClick: this.handleSubmitButtonClick,
                            'aria-disabled': this.isSubmissionDisabled(),
                            'aria-label': Object(A.e)('send_a_message'),
                            isPrimaryColorReadable: e,
                        },
                        p.a.createElement(Ce, null)
                    );
                }
                renderButtons() {
                    const { showGifButton: e, isBorderless: t } = this.props,
                        r = this.hasText(),
                        a = !Object(T.g)(),
                        i = e && !Object(T.g)() && !r,
                        n = this.shouldShowUploadButton();
                    return p.a.createElement(
                        Pe.a,
                        { className: 'intercom-composer-buttons', isBorderless: t },
                        i ? this.renderGifPickerButton() : null,
                        a ? this.renderEmojiPickerButton() : null,
                        r ? this.renderSendButton() : null,
                        n ? this.renderUploadButton() : null
                    );
                }
                render() {
                    const {
                            shouldShowUpfrontEmailComposer: e,
                            isBorderless: t,
                            conversationSuggestions: r,
                        } = this.props,
                        { suggestions: a, loading: i } = r,
                        { text: n } = this.state;
                    return e
                        ? this.renderUpfrontEmailComposer()
                        : p.a.createElement(
                              Pe.h,
                              {
                                  ref: e => (this.composer = e),
                                  className: 'intercom-composer',
                                  isBorderless: t,
                                  hasComposerSuggestionsLoading: i,
                                  hasComposerSuggestions: a.length > 0,
                              },
                              p.a.createElement('pre', null, n, p.a.createElement('br', null)),
                              this.renderTextArea(),
                              this.renderGifPicker(),
                              this.renderEmojiPicker(),
                              this.renderButtons()
                          );
                }
            }
            const $e = e => 13 === e.keyCode && !(e.altKey || e.shiftKey);
            (composer_Composer.defaultProps = {
                defaultText: '',
                showEmojiPicker: !1,
                showGifPicker: !1,
                showGifButton: !0,
                showUploadButton: !0,
                isBorderless: !1,
                conversationSuggestions: {
                    prompt: [],
                    suggestions: [],
                    loading: !1,
                    isDismissed: !1,
                },
            }),
                (composer_Composer.contextType = We.a),
                (composer_Composer.propTypes = {
                    placeholder: c.a.string,
                    isPrimaryColorReadable: c.a.bool,
                    showEmojiPicker: c.a.bool,
                    showGifPicker: c.a.bool,
                    showUploadButton: c.a.bool,
                    showGifButton: c.a.bool,
                    defaultText: c.a.string,
                    isBorderless: c.a.bool,
                    shouldShowUpfrontEmailComposer: c.a.bool,
                    onHeightChange: c.a.func,
                    onTyping: c.a.func.isRequired,
                    onChange: c.a.func.isRequired,
                    onSubmit: c.a.func.isRequired,
                    toggleUpfrontEmailCollectorState: c.a.func.isRequired,
                    onEmojiPickerToggle: c.a.func.isRequired,
                    onHeaderCollapse: c.a.func,
                    onGifPickerToggle: c.a.func,
                    headerHeight: c.a.number,
                    conversation: c.a.object,
                    frameWindow: c.a.object,
                    conversationSuggestions: c.a.object,
                });
            var Ke = r(16),
                Ye = r(4),
                Xe = r(8),
                Je = r(144),
                Ze = r(521);
            function Qe(e) {
                return e ? `draft-${e}` : 'draft';
            }
            function et(e) {
                return B.b.remove(Qe(e));
            }
            var tt = {
                    saveDraft: function(e, t) {
                        return t && '' !== t
                            ? B.b.set(
                                  Qe(e),
                                  (function(e) {
                                      return JSON.stringify({ text: e });
                                  })(t)
                              )
                            : et(e);
                    },
                    loadDraft: function(e) {
                        const t = B.b.get(Qe(e));
                        return t ? JSON.parse(t).text : null;
                    },
                    removeDraft: et,
                },
                rt = r(9);
            t.a = Object(a.connect)(
                (e, t) => {
                    const { conversation: r } = t,
                        a = r.id,
                        i = e.borderless && e.borderless.conversationId,
                        n = r.lastParticipatingAdmin,
                        o = r.defaultMessage || tt.loadDraft(a),
                        s = e.app && e.app.officeHoursResponse,
                        l = e.app.userConversationAttachmentsEnabled,
                        c = e.app.userConversationGifsEnabled,
                        d = Object(Ze.e)(e),
                        p = Object(rt.i)(e),
                        u = d && !p,
                        h = u ? Object(A.e)('start_typing') : null,
                        { replyPlaceholder: m } = r,
                        b =
                            void 0 === a
                                ? Object(A.e)('send_a_message')
                                : Object(A.e)('reply_to_conversation');
                    return {
                        conversationId: a,
                        borderlessConversationId: i,
                        lastParticipatingAdmin: n,
                        officeHoursResponse: s,
                        defaultText: o,
                        placeholder: h || m || b,
                        showUploadButton: l,
                        showGifButton: c,
                        shouldAskForSuggestedAnswers: u,
                    };
                },
                e => ({
                    onTyping: t => {
                        e(Object(Ye.t)(t));
                    },
                    onChange: (t, r, a) => {
                        a && e(r ? Object(Je.c)(r, t) : Object(Je.a)(null, t)),
                            tt.saveDraft(t, r),
                            e(Object(Ye.b)(t, r, new Date()));
                    },
                    onSubmit: (t, r, a, i, n, o, s, l, c, d) => {
                        const p = { clientId: r, createdAt: n, body: a, file: i };
                        e(Object(Ye.j)(le.b, t, p, !1, o, s, l, c, d)), tt.removeDraft(t);
                    },
                    toggleUpfrontEmailCollectorState: () => {
                        e(Object(Xe.l)());
                    },
                }),
                (e, t, r) =>
                    Object.assign({}, e, t, r, {
                        onTyping: r => {
                            t.onTyping(e.conversationId, r);
                        },
                        onChange: r => {
                            t.onChange(e.conversationId, r, e.shouldAskForSuggestedAnswers);
                        },
                        onSubmit: (r, a, i, n) => {
                            t.onSubmit(
                                e.conversationId,
                                Object(Ke.b)(),
                                r,
                                a,
                                new Date(),
                                e.conversationId === e.borderlessConversationId,
                                e.lastParticipatingAdmin,
                                e.officeHoursResponse,
                                i,
                                n
                            );
                        },
                    })
            )(composer_Composer);
        },
        638: function(e, t, r) {
            'use strict';
            var a = r(437),
                i = r.n(a),
                n = r(433),
                o = r.n(n),
                s = r(449),
                l = r(559),
                c = r(518),
                d = r(590);
            function p(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            const u = e => 'messengerCard' === e.type,
                h = e => !u(e),
                m = e => 'paragraph' === e.type && !e.text;
            class BlockGroup {
                constructor() {
                    p(this, 'blocks', []);
                }
                addBlock(e) {
                    this.blocks.push(e);
                }
            }
            class BlockGroups {
                constructor() {
                    p(this, 'groups', []);
                }
                addBlock(e) {
                    let t = this.groups[this.groups.length - 1];
                    (t && t.blocks.every(h) && h(e)) ||
                        ((t = new BlockGroup()), this.groups.push(t)),
                        t.addBlock(e);
                }
            }
            class comment_body_CommentBody extends n.PureComponent {
                getBlockGroups() {
                    const e = new BlockGroups();
                    return this.props.part.body.forEach(t => e.addBlock(t)), e;
                }
                renderBlockGroup(e, t, r) {
                    const {
                            part: a,
                            zoomable: i,
                            maxImageWidth: n,
                            onImageClick: l,
                            isLastPart: p,
                            frameWindow: b,
                            isBorderless: g,
                            hasAvatar: f,
                        } = this.props,
                        {
                            author: { isAdmin: y, isSelf: v },
                        } = a,
                        C = this.props.showInlineMetadata && r && e.blocks.every(h),
                        x = e.blocks.every(m),
                        j = e.blocks.every(h),
                        O = e.blocks.every(u);
                    return x
                        ? null
                        : o.a.createElement(
                              d.a,
                              {
                                  key: t,
                                  isText: j,
                                  hasAvatar: f,
                                  isMessengerCard: O,
                                  isBorderless: g,
                                  isAdmin: y,
                                  isUser: v,
                              },
                              o.a.createElement(s.a, {
                                  blocks: e.blocks,
                                  author: a.author,
                                  zoomable: i,
                                  maxImageWidth: n,
                                  onImageClick: l,
                                  isLastPart: p,
                                  frameWindow: b,
                              }),
                              C ? o.a.createElement(c.a, { part: a }) : null
                          );
                }
                render() {
                    const e = this.getBlockGroups();
                    return o.a.createElement(
                        d.b,
                        null,
                        e.groups.map((t, r) =>
                            this.renderBlockGroup(t, r, r === e.groups.length - 1)
                        )
                    );
                }
            }
            var b = r(469),
                g = r(33),
                f = r(475),
                y = r(524),
                v = r(472);
            function C() {
                return (C =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var a in r)
                                Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            class comment_Comment extends n.Component {
                constructor(...e) {
                    var t, r, a;
                    super(...e),
                        (a = { tooltipVisible: !1 }),
                        (r = 'state') in (t = this)
                            ? Object.defineProperty(t, r, {
                                  value: a,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                              })
                            : (t[r] = a);
                }
                isMessengerCard() {
                    return this.props.part.body.some(e => 'messengerCard' === e.type);
                }
                shouldRenderCommentBody() {
                    return this.isMessengerCard();
                }
                shouldRenderInlineMetadata() {
                    return this.props.showInlineMetadata && !this.shouldRenderCommentBody();
                }
                renderTimestamp() {
                    const { showCreatedAt: e, createdAt: t, body: r } = this.props.part;
                    if (!e) return null;
                    const a = Object(f.a)(r),
                        i = this.shouldRenderCommentBody();
                    return o.a.createElement(v.b, { isSingleBlock: a, hasBody: i }, Object(b.a)(t));
                }
                renderBlocks() {
                    const {
                            part: e,
                            isMobile: t,
                            isBorderless: r,
                            hasAvatar: a,
                            showInlineMetadata: i,
                            onImageClick: n,
                            isLastPart: l,
                            frameWindow: c,
                        } = this.props,
                        { body: d, author: p } = e;
                    return this.shouldRenderCommentBody()
                        ? o.a.createElement(comment_body_CommentBody, {
                              part: e,
                              isLastPart: l,
                              zoomable: !t,
                              isBorderless: r,
                              hasAvatar: a,
                              showInlineMetadata: i,
                              maxImageWidth: 232,
                              onImageClick: n,
                              frameWindow: c,
                          })
                        : o.a.createElement(s.a, {
                              autoPlay: !1,
                              blocks: d,
                              author: p,
                              zoomable: !t,
                              maxImageWidth: 232,
                              onImageClick: n,
                              frameWindow: c,
                          });
                }
                renderSticker() {
                    return o.a.createElement(l.a, { text: Object(g.d)(this.props.part.body[0]) });
                }
                renderBody() {
                    const { body: e } = this.props.part;
                    return 1 === e.length && Object(f.c)(e[0])
                        ? this.renderSticker()
                        : this.renderBlocks();
                }
                render() {
                    const { part: e, isMobile: t, isBorderless: r, hasAvatar: a } = this.props,
                        {
                            showCreatedAt: i,
                            createdAt: n,
                            body: s,
                            author: { isAdmin: l, isSelf: d },
                        } = e,
                        p = t || !i || this.isMessengerCard(),
                        u = Object(f.a)(s),
                        h = this.shouldRenderCommentBody();
                    return o.a.createElement(
                        y.a,
                        { content: n && Object(b.a)(n), enabled: !p },
                        (t, i) =>
                            o.a.createElement(
                                v.a,
                                C({}, i, {
                                    className: u ? 'intercom-comment-single' : 'intercom-comment',
                                    isSingleBlock: u,
                                    hasBody: h,
                                    isAdmin: l,
                                    isUser: d,
                                    isFailed: 'failed' === e.saveState,
                                    isBorderless: r,
                                    hasAvatar: a,
                                }),
                                this.renderBody(),
                                this.renderTimestamp(),
                                this.shouldRenderInlineMetadata()
                                    ? o.a.createElement(c.a, { part: this.props.part })
                                    : null,
                                t
                            )
                    );
                }
            }
            (comment_Comment.defaultProps = { isMobile: !1, isBorderless: !1 }),
                (comment_Comment.propTypes = {
                    part: i.a.object.isRequired,
                    isMobile: i.a.bool,
                    isBorderless: i.a.bool,
                    frameWindow: i.a.object,
                    hasAvatar: i.a.bool,
                    showInlineMetadata: i.a.bool,
                    onImageClick: i.a.func,
                    isLastPart: i.a.bool,
                });
            var x = r(462),
                j = r(612),
                O = r(511);
            r.d(t, 'a', function() {
                return comment_container_CommentContainer;
            });
            class comment_container_CommentContainer extends n.Component {
                renderAdminAvatar() {
                    return o.a.createElement(
                        O.a,
                        { isBorderless: this.props.isBorderless },
                        o.a.createElement(x.a, { author: this.props.part.author })
                    );
                }
                renderComment() {
                    const {
                        part: e,
                        hasAvatar: t,
                        isMobile: r,
                        isBorderless: a,
                        frameWindow: i,
                        showInlineMetadata: n,
                        onImageClick: s,
                        isLastPart: l,
                    } = this.props;
                    return o.a.createElement(comment_Comment, {
                        isLastPart: l,
                        part: e,
                        isMobile: r,
                        isBorderless: a,
                        frameWindow: i,
                        hasAvatar: t,
                        showInlineMetadata: n,
                        onImageClick: s,
                    });
                }
                render() {
                    const {
                            isBorderless: e,
                            hasAvatar: t,
                            part: {
                                author: { isAdmin: r, isSelf: a },
                                body: i,
                            },
                        } = this.props,
                        n = Object(f.a)(i);
                    return o.a.createElement(
                        j.a,
                        { hasAvatar: t, isBorderless: e, isSingleBlock: n, isAdmin: r, isUser: a },
                        this.props.hasAvatar && this.props.showAvatar
                            ? this.renderAdminAvatar()
                            : null,
                        this.renderComment()
                    );
                }
            }
            (comment_container_CommentContainer.defaultProps = {
                showAvatar: !0,
                hasAvatar: !1,
                isBorderless: !1,
                isMobile: !1,
            }),
                (comment_container_CommentContainer.propTypes = {
                    part: i.a.object.isRequired,
                    showAvatar: i.a.bool,
                    hasAvatar: i.a.bool,
                    isBorderless: i.a.bool,
                    isMobile: i.a.bool,
                    frameWindow: i.a.object,
                    showInlineMetadata: i.a.bool,
                    onImageClick: i.a.func,
                    isLastPart: i.a.bool,
                });
        },
        640: function(e, t, r) {
            'use strict';
            var a = r(433),
                i = r.n(a),
                n = r(455),
                o = r.n(n),
                s = r(462),
                l = r(549),
                c = r(449),
                d = r(518),
                p = r(487),
                u = r(559),
                h = r(33),
                m = r(475),
                b = r(446);
            function g(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            class chat_card_ChatCard extends a.Component {
                constructor(...e) {
                    super(...e),
                        g(this, 'state', { isScrollable: !1, isScrolled: !1 }),
                        g(this, 'handleScrollable', () => {
                            this.setState({ isScrollable: !0 });
                        }),
                        g(this, 'handleScroll', e => {
                            this.setState({ isScrolled: e.target.scrollTop > 0 });
                        });
                }
                renderAdminAvatar() {
                    const {
                        part: { author: e },
                    } = this.props;
                    return i.a.createElement(
                        b.b,
                        { isAuthorTypeTeam: 'team' === e.type },
                        i.a.createElement(s.a, { author: e })
                    );
                }
                renderInlineMetadata() {
                    return i.a.createElement(d.a, { part: this.props.part });
                }
                renderStickerOrBlocks() {
                    const {
                        part: { author: e, body: t },
                        frameWindow: r,
                    } = this.props;
                    return 1 === t.length && Object(m.c)(t[0])
                        ? i.a.createElement(u.a, { text: Object(h.d)(t[0]) })
                        : i.a.createElement(c.a, {
                              blocks: t,
                              zoomable: !0,
                              author: e,
                              frameWindow: r,
                          });
                }
                renderSingleBody() {
                    return i.a.createElement(b.c, null, this.renderStickerOrBlocks());
                }
                renderAuthor() {
                    const {
                            appName: e,
                            part: { messageType: t, author: r },
                        } = this.props,
                        { isScrolled: a } = this.state,
                        n = 'adminReply' === t;
                    return i.a.createElement(
                        b.a,
                        { isScrolled: a },
                        i.a.createElement(l.a, { author: r, appName: e, isReplyStyle: n })
                    );
                }
                renderFullBody() {
                    const { isBorderless: e } = this.props,
                        { isScrollable: t } = this.state;
                    return i.a.createElement(
                        'div',
                        null,
                        this.props.showAuthor ? this.renderAuthor() : null,
                        i.a.createElement(
                            b.d,
                            { isScrollable: t, isBorderless: e },
                            i.a.createElement(
                                p.a,
                                {
                                    onScrollable: this.handleScrollable,
                                    onScroll: this.handleScroll,
                                },
                                this.renderStickerOrBlocks()
                            )
                        )
                    );
                }
                render() {
                    const {
                            hasAvatar: e,
                            showAvatar: t,
                            isBorderless: r,
                            showInlineMetadata: a,
                            isMobile: n,
                            part: { body: s },
                        } = this.props,
                        l = Object(m.a)(s),
                        c = o()({
                            'intercom-chat-card': !(l && r),
                            'intercom-chat-card-borderless-single': l && r,
                        });
                    return i.a.createElement(
                        b.e,
                        {
                            className: c,
                            isSingleBlock: l,
                            isBorderless: r,
                            showAvatar: e && t,
                            isMobile: n,
                        },
                        e && t ? this.renderAdminAvatar() : null,
                        l && r ? this.renderSingleBody() : this.renderFullBody(),
                        a ? this.renderInlineMetadata() : null
                    );
                }
            }
            g(chat_card_ChatCard, 'defaultProps', {
                isBorderless: !1,
                showAuthor: !0,
                showAvatar: !0,
                hasAvatar: !0,
            });
            var f = r(638);
            r.d(t, 'a', function() {
                return chat_card_group_ChatCardGroup;
            });
            const y = /^<br>/,
                v = /<br>$/;
            class chat_card_group_ChatCardGroup extends a.Component {
                buildNewPart() {
                    return Object.assign({}, this.props.part, { body: [] });
                }
                cleanBlockWithPattern(e, t) {
                    e.text && (e.text = e.text.trim().replace(t, ''));
                }
                cleanAdjacentBlocks(e, t) {
                    'messengerCard' === e.type && 'paragraph' === t.type
                        ? this.cleanBlockWithPattern(t, y)
                        : 'paragraph' === e.type &&
                          'messengerCard' === t.type &&
                          this.cleanBlockWithPattern(e, v);
                }
                cleanParts(e) {
                    return e.map((e, t, r) => {
                        if (t < r.length - 1) {
                            const a = r[t + 1],
                                i = e.body.length - 1;
                            this.cleanAdjacentBlocks(e.body[i], a.body[0]);
                        }
                        return e;
                    });
                }
                splitPartByBlockType() {
                    const e = [];
                    let t = null;
                    return (
                        this.props.part.body.forEach(r => {
                            ('paragraph' === r.type && '' === r.text) ||
                                ((0 !== e.length &&
                                    'messengerCard' !== r.type &&
                                    'messengerCard' !== t) ||
                                    e.push(this.buildNewPart()),
                                e[e.length - 1].body.push(r),
                                (t = r.type));
                        }),
                        this.cleanParts(e)
                    );
                }
                renderCommentContainer(e, t, r) {
                    const {
                        hasAvatar: a,
                        isBorderless: n,
                        isMobile: o,
                        showInlineMetadata: s,
                        frameWindow: l,
                    } = this.props;
                    return i.a.createElement(f.a, {
                        key: t,
                        part: e,
                        showAvatar: r,
                        hasAvatar: a,
                        isBorderless: n,
                        isMobile: o,
                        frameWindow: l,
                        showInlineMetadata: s,
                    });
                }
                renderChatCard(e, t, r, a) {
                    const {
                        appName: n,
                        hasAvatar: o,
                        isBorderless: s,
                        showInlineMetadata: l,
                        frameWindow: c,
                        isMobile: d,
                    } = this.props;
                    return i.a.createElement(chat_card_ChatCard, {
                        key: t,
                        appName: n,
                        part: e,
                        showAuthor: r,
                        showAvatar: a,
                        hasAvatar: o,
                        isBorderless: s,
                        showInlineMetadata: l,
                        frameWindow: c,
                        isMobile: d,
                    });
                }
                renderPart(e, t, r, a) {
                    return 1 === e.body.length && 'messengerCard' === e.body[0].type
                        ? this.renderCommentContainer(e, t, a)
                        : this.renderChatCard(e, t, r, a);
                }
                renderParts(e) {
                    return e.map((t, r) => {
                        const a = 0 === r,
                            i = r === e.length - 1;
                        return this.renderPart(t, r, a, i);
                    });
                }
                render() {
                    const e = this.splitPartByBlockType();
                    return i.a.createElement('div', null, this.renderParts(e));
                }
            }
            var C, x, j;
            (j = { isBorderless: !1, isMobile: !1, hasAvatar: !0 }),
                (x = 'defaultProps') in (C = chat_card_group_ChatCardGroup)
                    ? Object.defineProperty(C, x, {
                          value: j,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (C[x] = j);
        },
        641: function(e, t, r) {
            'use strict';
            var a = r(433),
                i = r.n(a),
                n = r(434),
                o = r(486);
            const s = { name: '1hj024c', styles: 'top:9px;left:-2px;z-index:1;' },
                l = { name: 'yd4jrz', styles: 'top:9px;right:-2px;z-index:2;' },
                c = { name: '71gyhe', styles: 'top:-1px;left:6px;z-index:2;' },
                d = { name: 'g7a820', styles: 'top:15px;right:14px;z-index:3;' },
                p = { name: '4dozc1', styles: 'top:15px;left:14px;z-index:1;' },
                u = Object(n.b)(
                    'width:100%;height:100%;line-height:35px;',
                    o.a.className,
                    ' &{width:36px;height:36px;line-height:36px;}'
                ),
                h = { name: 'c7bh53', styles: 'width:20px;height:20px;line-height:20px;' },
                m = ({ theme: e, index: t, numOfAvatars: r }) =>
                    Object(n.b)(
                        'border-radius:50%;position:absolute;border:2px solid ',
                        e.white,
                        ';background-color:',
                        e.appColorDarker,
                        ';color:white;text-align:center;font-size:16px;',
                        1 === r ? u : h,
                        ' ',
                        ((e, t) => {
                            switch (t) {
                                case 2:
                                    switch (e) {
                                        case 0:
                                            return s;
                                        case 1:
                                            return l;
                                        default:
                                            return '';
                                    }
                                case 3:
                                    switch (e) {
                                        case 0:
                                            return c;
                                        case 1:
                                            return d;
                                        case 2:
                                            return p;
                                        default:
                                            return '';
                                    }
                                default:
                                    return '';
                            }
                        })(t, r)
                    ),
                b = Object(n.c)('div', { target: 'eddlj7y0' })(m),
                g = Object(n.c)('img', { target: 'eddlj7y1' })(m),
                f = Object(n.c)('div', { target: 'eddlj7y2' })({
                    name: '12sca19',
                    styles: 'width:35px;height:35px;position:relative;float:left;',
                });
            function y(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            r.d(t, 'a', function() {
                return team_avatar_TeamAvatar;
            });
            class team_avatar_TeamAvatar extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        y(this, 'renderInitial', (e, t, r) => {
                            const { firstName: a } = e,
                                n = a.charAt(0).toUpperCase();
                            return i.a.createElement(b, { key: t, index: t, numOfAvatars: r }, n);
                        }),
                        y(this, 'renderImage', (e, t, r) => {
                            const {
                                    firstName: a,
                                    avatar: { square128: n },
                                } = e,
                                o = `${a || 'admin'} avatar`;
                            return i.a.createElement(g, {
                                key: t,
                                src: n,
                                alt: o,
                                index: t,
                                numOfAvatars: r,
                            });
                        }),
                        y(this, 'renderAvatar', (e, t, r) =>
                            e.avatar.square128
                                ? this.renderImage(e, r, t)
                                : this.renderInitial(e, r, t)
                        );
                }
                render() {
                    const e = this.props.admins.filter(Boolean).slice(0, 3);
                    return i.a.createElement(
                        f,
                        null,
                        e.map((t, r) => this.renderAvatar(t, e.length, r))
                    );
                }
            }
            y(team_avatar_TeamAvatar, 'defaultProps', { admins: [] });
        },
        642: function(e, t, r) {
            'use strict';
            var a = r(447),
                i = r.n(a),
                n = r(433),
                o = r.n(n);
            var s = (e, t) => {
                const r = [];
                let a = 0;
                const i = i => {
                    const n = Date.now();
                    (a = a + t < n ? n : a + t), r.push(setTimeout(() => e(i), a - n));
                };
                return (
                    (i.cancel = () => {
                        r.forEach(clearTimeout);
                    }),
                    i
                );
            };
            function l() {
                return (l =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var a in r)
                                Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t &&
                        (a = a.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, a);
                }
                return r;
            }
            function d(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            const p = e => e.map((e, t) => t),
                u = (e, t) => e.map(e => t[e]).filter(Boolean);
            t.a = e =>
                class IndexedConversationWrapper extends n.PureComponent {
                    constructor(...e) {
                        super(...e),
                            d(this, 'state', { partIndices: p(this.props.conversation.parts) }),
                            d(this, 'handleNewPart', e => {
                                const { partIndices: t } = this.state;
                                -1 === t.indexOf(e) && this.setState({ partIndices: t.concat(e) });
                            }),
                            d(this, 'handleNewDelayedPart', s(this.handleNewPart, 1e3));
                    }
                    componentDidUpdate(e) {
                        if (i()(e, this.props)) return;
                        const { parts: t, fetchState: r } = e.conversation,
                            { parts: a, fetchState: n } = this.props.conversation,
                            o = p(a),
                            s = o.slice(t.length);
                        'summary' !== r || 'all' !== n
                            ? s.forEach(e =>
                                  a[e].author.isSelf
                                      ? this.handleNewPart(e)
                                      : this.handleNewDelayedPart(e)
                              )
                            : this.setState({ partIndices: o });
                    }
                    componentWillUnmount() {
                        this.handleNewDelayedPart.cancel();
                    }
                    render() {
                        const { parts: t } = this.props.conversation,
                            r = (function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                        ? c(r, !0).forEach(function(t) {
                                              d(e, t, r[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(
                                              e,
                                              Object.getOwnPropertyDescriptors(r)
                                          )
                                        : c(r).forEach(function(t) {
                                              Object.defineProperty(
                                                  e,
                                                  t,
                                                  Object.getOwnPropertyDescriptor(r, t)
                                              );
                                          });
                                }
                                return e;
                            })({}, this.props.conversation, {
                                parts: u(this.state.partIndices, t),
                            });
                        return o.a.createElement(e, l({}, this.props, { conversation: r }));
                    }
                };
        },
        643: function(e, t, r) {
            'use strict';
            var a = r(433),
                i = r.n(a),
                n = r(520),
                o = r(644),
                s = r(29),
                l = r(84),
                c = r(604);
            function d() {
                return (d =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var a in r)
                                Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function p(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t &&
                        (a = a.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, a);
                }
                return r;
            }
            function u(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            class phone_number_input_PhoneNumberInput extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        u(this, 'handleChange', e => {
                            this.props.onChange(e.target.value.trim());
                        }),
                        u(this, 'handleKeyDown', e => {
                            13 === e.keyCode && (e.preventDefault(), this.props.onSubmit());
                        }),
                        u(this, 'handleFocus', e => {
                            const { value: t } = e.target;
                            (e.target.value = ''), (e.target.value = t);
                        });
                }
                renderFlag() {
                    const { defaultCountryCode: e, value: t } = this.props,
                        r = Object(n.a)(t),
                        a = r ? r.code : e;
                    return i.a.createElement(c.a, { countryCode: a });
                }
                renderPlaceholder() {
                    const { value: e, placeholder: t, saveState: r } = this.props,
                        a = this.isDisabled();
                    return i.a.createElement(
                        c.b,
                        { disabled: a, saveState: r },
                        0 === t.indexOf(e) &&
                            i.a.createElement(
                                'span',
                                null,
                                i.a.createElement(c.c, null, e),
                                i.a.createElement('span', null, t.replace(e, ''))
                            )
                    );
                }
                isDisabled() {
                    const { saveState: e } = this.props;
                    return this.props.disabled || 'saving' === e || 'saved' === e;
                }
                renderInput() {
                    const { value: e, isBorderless: t, isReplyType: r } = this.props,
                        a = this.isDisabled(),
                        n = !(t && r);
                    return i.a.createElement('input', {
                        name: 'phone',
                        type: 'text',
                        disabled: a,
                        autoFocus: n,
                        defaultValue: e,
                        onFocus: this.handleFocus,
                        onKeyDown: this.handleKeyDown,
                        onChange: this.handleChange,
                        onBlur: l.d,
                        'aria-label': Object(s.e)('phone_number'),
                    });
                }
                render() {
                    const { saveState: e, isInvalid: t } = this.props,
                        r = 'saving' === e,
                        a = r || this.isDisabled(),
                        n = (function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2
                                    ? p(r, !0).forEach(function(t) {
                                          u(e, t, r[t]);
                                      })
                                    : Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(
                                          e,
                                          Object.getOwnPropertyDescriptors(r)
                                      )
                                    : p(r).forEach(function(t) {
                                          Object.defineProperty(
                                              e,
                                              t,
                                              Object.getOwnPropertyDescriptor(r, t)
                                          );
                                      });
                            }
                            return e;
                        })(
                            { 'aria-label': r ? Object(s.e)('loading') : Object(s.e)('submit') },
                            r ? { role: 'progressbar' } : {}
                        );
                    return i.a.createElement(
                        c.d,
                        { saveState: e, isInvalid: t },
                        this.renderFlag(),
                        this.renderPlaceholder(),
                        this.renderInput(),
                        i.a.createElement(c.f, null),
                        i.a.createElement(
                            c.e,
                            d({ disabled: a, onClick: this.props.onSubmit, saveState: e }, n),
                            i.a.createElement(o.a, { disabled: a, loading: r })
                        )
                    );
                }
            }
            var h = r(484);
            function m(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            r.d(t, 'a', function() {
                return phone_number_PhoneNumberAttribute;
            });
            class phone_number_PhoneNumberAttribute extends a.Component {
                constructor(...e) {
                    super(...e),
                        m(this, 'state', {
                            value:
                                this.props.value ||
                                `${Object(n.b)(this.props.defaultCountryCode)} `,
                            isValid: !0,
                        }),
                        m(this, 'handleChange', e => {
                            this.setState({ value: e, isValid: !0 });
                        }),
                        m(this, 'handleSubmit', () => {
                            const { value: e } = this.state;
                            Object(n.d)(e)
                                ? this.props.onSubmit(e)
                                : this.setState({ isValid: !1 });
                        });
                }
                getPlaceholder() {
                    return `${Object(n.b)(this.props.defaultCountryCode)} 123 456 7890`;
                }
                getErrorMessage() {
                    if (this.state.isValid) return Object(s.e)('something_is_wrong');
                    {
                        const e = Object(n.c)(this.state.value);
                        return e
                            ? Object(s.e)(e)
                            : Object(s.e)('that_number_doesnt_look_quite_right');
                    }
                }
                isInvalid() {
                    return 'failed' === this.props.saveState || !this.state.isValid;
                }
                render() {
                    const {
                            saveState: e,
                            defaultCountryCode: t,
                            isBorderless: r,
                            isReplyType: a,
                            isNotificationChannel: n,
                            disabled: o,
                        } = this.props,
                        s = this.getPlaceholder(),
                        l = this.isInvalid();
                    return i.a.createElement(
                        'div',
                        null,
                        i.a.createElement(phone_number_input_PhoneNumberInput, {
                            value: this.state.value,
                            saveState: e,
                            placeholder: s,
                            defaultCountryCode: t,
                            isInvalid: l,
                            isBorderless: r,
                            isReplyType: a,
                            disabled: o,
                            isNotificationChannel: n,
                            onChange: this.handleChange,
                            onSubmit: this.handleSubmit,
                        }),
                        l && i.a.createElement(h.a, { errorMessage: this.getErrorMessage() })
                    );
                }
            }
        },
        778: function(e, t, r) {
            e.exports = r.p + 'images/next-icon.a9124933.png';
        },
        779: function(e, t, r) {
            e.exports = r.p + 'images/next-icon@2x.f3c3e26a.png';
        },
        780: function(e, t, r) {
            e.exports = r.p + 'images/check-icon.7cabe467.png';
        },
        781: function(e, t, r) {
            e.exports = r.p + 'images/check-icon@2x.2c09c31c.png';
        },
        782: function(e, t, r) {
            e.exports = r.p + 'images/send-button.48bc69b8.png';
        },
        783: function(e, t, r) {
            e.exports = r.p + 'images/send-button@2x.40884887.png';
        },
        784: function(e, t, r) {
            e.exports = r.p + 'images/rating-1.d23e2d60.png';
        },
        785: function(e, t, r) {
            e.exports = r.p + 'images/rating-1@2x.a3ce1c38.png';
        },
        786: function(e, t, r) {
            e.exports = r.p + 'images/rating-2.b6481b2d.png';
        },
        787: function(e, t, r) {
            e.exports = r.p + 'images/rating-2@2x.bac056e1.png';
        },
        788: function(e, t, r) {
            e.exports = r.p + 'images/rating-3.347818fe.png';
        },
        789: function(e, t, r) {
            e.exports = r.p + 'images/rating-3@2x.b98f99f2.png';
        },
        790: function(e, t, r) {
            e.exports = r.p + 'images/rating-4.e79b0027.png';
        },
        791: function(e, t, r) {
            e.exports = r.p + 'images/rating-4@2x.76967faf.png';
        },
        792: function(e, t, r) {
            e.exports = r.p + 'images/rating-5.10d57bbf.png';
        },
        793: function(e, t, r) {
            e.exports = r.p + 'images/rating-5@2x.e5f22789.png';
        },
        794: function(e, t, r) {
            e.exports = r.p + 'images/warning-icon.cc84a0dd.png';
        },
        795: function(e, t, r) {
            e.exports = r.p + 'images/warning-icon@2x.d238804a.png';
        },
        796: function(e, t, r) {
            e.exports = r.p + 'images/attention.6a6e4cbc.png';
        },
        797: function(e, t, r) {
            e.exports = r.p + 'images/search.23b42295.png';
        },
        798: function(e, t, r) {
            e.exports = r.p + 'images/search@2x.b93d3be5.png';
        },
    },
]);
