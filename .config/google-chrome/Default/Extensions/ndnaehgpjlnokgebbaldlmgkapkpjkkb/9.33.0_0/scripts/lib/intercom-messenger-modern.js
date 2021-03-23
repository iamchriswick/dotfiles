(window.webpackJsonp = window.webpackJsonp || []).push([
    [49],
    {
        474: function(e, t, n) {
            'use strict';
            n.d(t, 'a', function() {
                return r;
            });
            var a = n(434),
                o = { name: '1e1s2qs', styles: 'background-color:#f1c743;' };
            const r = Object(a.c)('div', { target: 'e1rcup4k0' })(
                'width:8px;height:8px;background-color:#7ed321;border:2px solid ',
                Object(a.f)('appSecondaryColor'),
                ';margin:0 auto;border-radius:50%;display:inline-block;vertical-align:bottom;right:3px;bottom:3px;position:absolute;',
                ({ isActive: e }) => !e && o
            );
        },
        499: function(e, t, n) {
            'use strict';
            n.d(t, 'a', function() {
                return a;
            });
            const a = (e, t, n = !1) => {
                let a = e.slice(0, t);
                return (
                    n && (a = a.reverse()),
                    [...a.filter(e => e.avatar.square128), ...a.filter(e => !e.avatar.square128)]
                );
            };
        },
        522: function(e, t, n) {
            'use strict';
            n.d(t, 'a', function() {
                return OverlayAvatar;
            });
            var a,
                o,
                r,
                i = n(433),
                s = n.n(i),
                c = n(461),
                l = n(29),
                d = n(499),
                p = n(523),
                m = n(474);
            class OverlayAvatar extends i.Component {
                renderActiveOrAwayState(e) {
                    return (
                        null !== e.isActive &&
                        void 0 !== e.isActive &&
                        'en' === Object(l.a)() &&
                        s.a.createElement(m.a, { isActive: e.isActive })
                    );
                }
                render() {
                    const { admins: e, maxAdmins: t } = this.props;
                    return s.a.createElement(
                        p.a,
                        null,
                        Object(d.a)(e, t).map((t, n) => {
                            const a = e.length - n,
                                o = 0 === n;
                            return s.a.createElement(
                                p.b,
                                { key: n, zIndex: a, isFirst: o },
                                s.a.createElement(c.a, { admin: t }),
                                this.renderActiveOrAwayState(t)
                            );
                        })
                    );
                }
            }
            (r = { admins: [], maxAdmins: 3 }),
                (o = 'defaultProps') in (a = OverlayAvatar)
                    ? Object.defineProperty(a, o, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (a[o] = r);
        },
        523: function(e, t, n) {
            'use strict';
            n.d(t, 'a', function() {
                return r;
            }),
                n.d(t, 'b', function() {
                    return i;
                });
            var a = n(434),
                o = n(474);
            const r = Object(a.c)('div', { target: 'e140bdmq0' })({
                    name: '1e0xhg9',
                    styles:
                        'display:inline-block;vertical-align:middle;white-space:nowrap;float:left;padding-right:10px;',
                }),
                i = Object(a.c)('div', { target: 'e140bdmq1' })(
                    'border:2px solid ',
                    Object(a.f)('appSecondaryColor'),
                    ';position:relative;display:inline-block;border-radius:100%;',
                    ({ zIndex: e, isFirst: t }) =>
                        Object(a.b)('z-index:', e, ';margin-left:', t ? 0 : -18, 'px;'),
                    ' ',
                    o.a.className,
                    '{right:0;bottom:0;}'
                );
        },
        811: function(e, t, n) {
            var a = {
                './background-1.png': 812,
                './background-10.png': 813,
                './background-11.png': 814,
                './background-12.png': 815,
                './background-13.png': 816,
                './background-14.png': 817,
                './background-15.png': 818,
                './background-16.png': 819,
                './background-2.png': 820,
                './background-3.png': 821,
                './background-4.png': 822,
                './background-5.png': 823,
                './background-6.png': 824,
                './background-7.png': 825,
                './background-8.png': 826,
                './background-9.png': 827,
            };
            function o(e) {
                var t = r(e);
                return n(t);
            }
            function r(e) {
                if (!n.o(a, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw ((t.code = 'MODULE_NOT_FOUND'), t);
                }
                return a[e];
            }
            (o.keys = function() {
                return Object.keys(a);
            }),
                (o.resolve = r),
                (e.exports = o),
                (o.id = 811);
        },
        812: function(e, t, n) {
            e.exports = n.p + 'images/background-1.9cde5385.png';
        },
        813: function(e, t, n) {
            e.exports = n.p + 'images/background-10.5cdf3998.png';
        },
        814: function(e, t, n) {
            e.exports = n.p + 'images/background-11.0f55b3a6.png';
        },
        815: function(e, t, n) {
            e.exports = n.p + 'images/background-12.f1fbb874.png';
        },
        816: function(e, t, n) {
            e.exports = n.p + 'images/background-13.361d6364.png';
        },
        817: function(e, t, n) {
            e.exports = n.p + 'images/background-14.30924b67.png';
        },
        818: function(e, t, n) {
            e.exports = n.p + 'images/background-15.248360ae.png';
        },
        819: function(e, t, n) {
            e.exports = n.p + 'images/background-16.8e2e0b27.png';
        },
        820: function(e, t, n) {
            e.exports = n.p + 'images/background-2.ce3907be.png';
        },
        821: function(e, t, n) {
            e.exports = n.p + 'images/background-3.60608886.png';
        },
        822: function(e, t, n) {
            e.exports = n.p + 'images/background-4.122f4c2f.png';
        },
        823: function(e, t, n) {
            e.exports = n.p + 'images/background-5.dc164d3a.png';
        },
        824: function(e, t, n) {
            e.exports = n.p + 'images/background-6.411a7002.png';
        },
        825: function(e, t, n) {
            e.exports = n.p + 'images/background-7.390b24b1.png';
        },
        826: function(e, t, n) {
            e.exports = n.p + 'images/background-8.12db1191.png';
        },
        827: function(e, t, n) {
            e.exports = n.p + 'images/background-9.2b0eab6b.png';
        },
        828: function(e, t, n) {
            'use strict';
            var a = n(829);
            e.exports = function(e, t, n) {
                return !a(e.props, t) || !a(e.state, n);
            };
        },
        829: function(e, t, n) {
            'use strict';
            var a = Object.prototype.hasOwnProperty;
            function o(e, t) {
                return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t;
            }
            e.exports = function(e, t) {
                if (o(e, t)) return !0;
                if ('object' != typeof e || null === e || 'object' != typeof t || null === t)
                    return !1;
                var n = Object.keys(e),
                    r = Object.keys(t);
                if (n.length !== r.length) return !1;
                for (var i = 0; i < n.length; i++)
                    if (!a.call(t, n[i]) || !o(e[n[i]], t[n[i]])) return !1;
                return !0;
            };
        },
        830: function(e, t, n) {
            e.exports = n.p + 'images/dummy-rows.943c931a.png';
        },
        831: function(e, t, n) {
            e.exports = n.p + 'images/dummy-rows@2x.567b64f5.png';
        },
        832: function(e, t, n) {
            'use strict';
            n.r(t);
            var a = n(433),
                o = n.n(a),
                r = n(440),
                i = n(9),
                s = n(447),
                c = n.n(s),
                l = n(455),
                d = n.n(l),
                p = n(491),
                m = n(55),
                h = n(436),
                u = n(0),
                g = n(145),
                b = n(442),
                f = n(434);
            const v = Object(f.c)('div', { target: 'edndopr0' })(
                    'z-index:',
                    Object(f.f)('messengerSheetZIndex'),
                    ';background-color:',
                    Object(f.f)('white'),
                    ';position:fixed;bottom:0;left:0;right:0;top:0;display:flex;flex-direction:column;'
                ),
                x = Object(f.c)('div', { target: 'edndopr1' })(
                    '.intercom-messenger-sheet-enter{transform:translateY(100%);}.intercom-messenger-sheet-enter.intercom-messenger-sheet-enter-active{transform:translateY(0px);transition-property:transform;transition-duration:',
                    '300ms',
                    ';transition-timing-function:',
                    'ease-in-out',
                    ';}.intercom-messenger-sheet-exit{transform:translateY(0px);}.intercom-messenger-sheet-exit.intercom-messenger-sheet-exit-active{transform:translateY(100%);transition-property:transform;transition-duration:',
                    '300ms',
                    ';transition-timing-function:',
                    'ease-in-out',
                    ';}'
                ),
                y = Object(f.c)('svg', { target: 'e1ipshzy0' })(
                    'margin:0 auto;width:9px;height:15px;> g > g{fill:',
                    Object(f.f)('headerTitleColor'),
                    ';}'
                );
            function C() {
                return o.a.createElement(
                    y,
                    { focusable: 'false', 'aria-hidden': 'true' },
                    o.a.createElement(
                        'g',
                        { fill: 'none' },
                        o.a.createElement(
                            'g',
                            { fill: '#FFF' },
                            o.a.createElement('polygon', {
                                transform:
                                    'translate(-40 -29)translate(47.071068 36.071068)rotate(-315)translate(-47.071068 -36.071068)',
                                points:
                                    '44.3 38.8 44.3 31.1 42.1 31.1 42.1 40 42.1 41.1 52.1 41.1 52.1 38.8',
                            })
                        )
                    )
                );
            }
            var O = n(29);
            var w = { name: '15g9t7g', styles: 'transition:height 0ms;' };
            const j = Object(f.c)('div', { target: 'e1nh735m0' })(
                    'position:relative;min-height:75px;background:',
                    Object(f.f)('gradientStartColor'),
                    ';color:white;transition:height ',
                    160,
                    'ms ease-out;',
                    ({ theme: e }) =>
                        Object(f.b)(
                            'background:linear-gradient( 135deg,',
                            e.gradientStartColor,
                            ' 0%,',
                            e.gradientEndColor,
                            ' 100% );'
                        ),
                    ' ',
                    ({ isScrolling: e }) => e && w,
                    ' ',
                    ({ backgroundUrl: e, backgroundSize: t }) =>
                        Object(f.b)(
                            "&::before{content:'';opacity:0;position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none;transition:opacity 100ms ease-in;",
                            e &&
                                t &&
                                Object(f.b)(
                                    'opacity:0.35;background-image:url(',
                                    e,
                                    ');background-size:',
                                    t,
                                    ',cover;'
                                ),
                            '}'
                        ),
                    ' @media (-ms-high-contrast:active){border:1px solid white;}'
                ),
                E = Object(f.c)(j, { target: 'ejn21m90' })({
                    name: '1do1wi9',
                    styles:
                        'display:flex;flex-direction:row;align-items:center;justify-content:center;height:75px;',
                }),
                k = Object(f.c)('div', { target: 'ejn21m91' })({
                    name: 'latdm3',
                    styles: 'font-size:20px;color:white;',
                });
            var S = n(435);
            const _ = Object(f.c)('div', { target: 'e1qhgb490' })(
                    'z-index:',
                    Object(S.m)(),
                    ';position:absolute;background-position:center;width:51px;height:51px;margin:12px 2px 12px 8px;top:0;left:0;&,*{cursor:pointer;}'
                ),
                P = Object(f.c)('div', { target: 'e1qhgb491' })(
                    'width:51px;height:51px;padding:8px;margin:0 auto;box-sizing:border-box;border-radius:',
                    Object(f.f)('messengerBorderRadiusPx'),
                    'px;display:flex;align-items:center;transform:translateZ(0);&:hover{background-color:rgba(0,0,0,0.5);}svg{',
                    S.i,
                    '}'
                ),
                N = Object(f.c)('span', { target: 'e1qhgb492' })(
                    'display:inline-block;right:0;top:0;background:#fc576b;width:22px;height:22px;line-height:22px;border-radius:50%;color:',
                    Object(f.f)('white'),
                    ';font-size:12px;font-weight:500;text-align:center;box-shadow:0 1px 0 rgba(0,0,0,0.27);position:absolute;'
                );
            var T = n(556);
            function A(e) {
                const [t, o] = Object(a.useState)(null),
                    [r, i] = Object(a.useState)(null);
                return (
                    Object(a.useEffect)(() => {
                        if (!e) return;
                        const t = n(811)(`./${e}.png`);
                        o(t);
                    }, [e]),
                    Object(a.useEffect)(() => {
                        t &&
                            (async () => {
                                const e = await Object(T.a)(t),
                                    n = `${e.width / 2}px ${e.height / 2}px`;
                                i(n);
                            })();
                    }, [t]),
                    { backgroundUrl: t, backgroundSize: r }
                );
            }
            var H = Object(h.connect)(e => ({
                backgroundImage: e.app.backgroundImage,
                tabNavigation: e.accessibility.tabNavigation,
            }))(function(e) {
                const { sheetTitle: t, backgroundImage: n, onBackClick: a } = e,
                    { backgroundUrl: r, backgroundSize: i } = A(n);
                return o.a.createElement(
                    E,
                    { backgroundUrl: r, backgroundSize: i },
                    o.a.createElement(k, null, t),
                    o.a.createElement(
                        _,
                        { 'aria-label': Object(O.e)('navigation_back'), onClick: a },
                        o.a.createElement(P, null, o.a.createElement(C, null))
                    )
                );
            });
            const B = Object(f.c)('div', { target: 'e1797nyl0' })(
                    'z-index:',
                    Object(f.f)('messengerSheetLoaderZIndex'),
                    ';position:absolute;top:0;left:0;right:0;height:2px;background:',
                    Object(f.f)('appColor'),
                    ';',
                    ({ transform: e }) => Object(f.b)('transform:', e, ';'),
                    ' ',
                    ({ transition: e }) => Object(f.b)('transition:', e, ';'),
                    ' ',
                    ({ opacity: e }) => Object(f.b)('opacity:', e, ';')
                ),
                R = (e, t, n) => Math.min(n, Math.max(e, t));
            function M(e, t, n) {
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
            class progress_bar_ProgressBar extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        M(this, 'incrementInterval', void 0),
                        M(this, 'state', { percent: 0, opacity: 1, withTransition: !1 });
                }
                componentDidMount() {
                    this.props.isLoading && this.startTrickleWork();
                }
                componentDidUpdate(e) {
                    const { isLoading: t } = e;
                    this.props.isLoading && !t && (this.resetBar(), this.startTrickleWork()),
                        t && !this.props.isLoading && this.finishLoading();
                }
                componentWillUnmount() {
                    this.clearInterval();
                }
                startTrickleWork() {
                    const { trickleSpeed: e } = this.props;
                    this.clearInterval(),
                        (this.incrementInterval = setInterval(() => {
                            var e, t;
                            this.setState({
                                percent:
                                    ((e = this.state.percent),
                                    'number' != typeof t &&
                                        (t =
                                            e >= 0 && e < 0.2
                                                ? 0.1
                                                : e >= 0.2 && e < 0.5
                                                ? 0.04
                                                : e >= 0.5 && e < 0.8
                                                ? 0.02
                                                : e >= 0.8 && e < 0.99
                                                ? 0.005
                                                : 0),
                                    (e = R(e + t, 0, 0.994))),
                                withTransition: !0,
                            });
                        }, e));
                }
                finishLoading() {
                    const { speed: e } = this.props;
                    this.setState({ percent: 1, withTransition: !0 }),
                        setTimeout(() => {
                            this.setState({ opacity: 0 });
                        }, e);
                }
                resetBar() {
                    this.setState({ percent: 0, opacity: 1, withTransition: !1 });
                }
                clearInterval() {
                    this.incrementInterval && clearInterval(this.incrementInterval);
                }
                getTransform() {
                    const { percent: e } = this.state;
                    return `translate3d(${((t = e), (100 * (-1 + t)).toFixed(2))}%,0,0)`;
                    var t;
                }
                getTransition() {
                    const { withTransition: e } = this.state,
                        { speed: t, easing: n } = this.props;
                    return e ? `all ${t}ms ${n}` : 'none';
                }
                render() {
                    return o.a.createElement(B, {
                        transform: this.getTransform(),
                        transition: this.getTransition(),
                        opacity: this.state.opacity,
                    });
                }
            }
            M(progress_bar_ProgressBar, 'defaultProps', {
                trickleSpeed: 200,
                speed: 200,
                easing: 'linear',
                isLoading: !1,
            });
            var L = { name: '15bvnbz', styles: 'overflow-y:scroll;' };
            const F = Object(f.c)('div', { target: 'e1oh3pzt0' })(
                    'position:relative;flex:1;outline-offset:-5px;',
                    ({ theme: e }) => e.isMobileSize && L
                ),
                z = Object(f.c)('iframe', { target: 'e1oh3pzt1' })({
                    name: '1x9mh97',
                    styles: 'position:absolute;width:100%;height:100%;outline-offset:-5px;',
                });
            function D(e, t, n) {
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
            const I = n(140);
            class messenger_sheet_proxy_MessengerSheetProxy extends a.Component {
                constructor(...e) {
                    super(...e),
                        D(this, 'frameNode', void 0),
                        D(this, 'sheetProxyNode', void 0),
                        D(this, 'state', { loadFrame: !1 });
                }
                componentDidMount() {
                    setTimeout(() => {
                        this.setState({ loadFrame: !0 }),
                            this.setupSheetFrame(),
                            this.sheetProxyNode && this.sheetProxyNode.focus();
                    }, this.props.transitionTimeout);
                }
                setupSheetFrame() {
                    if (!this.state.loadFrame) return;
                    const { startNavigation: e, receiveSheetMessage: t } = this.props;
                    e(),
                        this.frameNode &&
                            (this.frameNode.ownerDocument.defaultView.addEventListener(
                                'message',
                                t,
                                !1
                            ),
                            this.frameNode &&
                                this.frameNode.setAttribute(
                                    'allow',
                                    'microphone *; camera *; autoplay *'
                                ));
                }
                componentWillUnmount() {
                    const { setProxyLoadedStatus: e } = this.props;
                    e(!1),
                        this.frameNode &&
                            this.frameNode.ownerDocument.defaultView.removeEventListener(
                                'message',
                                this.props.receiveSheetMessage
                            );
                }
                render() {
                    const { onFrameLoad: e, isNavigating: t } = this.props;
                    return o.a.createElement(
                        F,
                        { tabIndex: '0', ref: e => (this.sheetProxyNode = e) },
                        o.a.createElement(progress_bar_ProgressBar, { isLoading: t }),
                        this.state.loadFrame
                            ? o.a.createElement(z, {
                                  ref: e => (this.frameNode = e),
                                  name: 'intercom-messenger-sheet-proxy',
                                  sandbox:
                                      'allow-scripts allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox',
                                  src: I.sheets_proxy_path,
                                  onLoad: e,
                                  allowFullScreen: !0,
                                  title: 'Messenger app',
                              })
                            : null
                    );
                }
            }
            var W = n(20);
            n(65), n(205);
            var U = n(471),
                V = n(478),
                q = n(93);
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
            class messenger_sheet_body_MessengerSheetBody extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        X(this, 'node', void 0),
                        X(this, 'form', void 0),
                        X(this, 'focusTrap', null),
                        X(this, 'state', { isSubmitted: !1 }),
                        X(this, 'handleEscape', e => {
                            Object(W.p)(e) && this.handleCloseSheet();
                        }),
                        X(this, 'handleCloseSheet', () => {
                            this.props.closeSheet();
                            const e = Object(q.a)();
                            e && (e(), Object(q.f)(null));
                        }),
                        X(this, 'setFormRef', e => {
                            this.form = e;
                        }),
                        X(this, 'submitForm', () => {
                            if (!this.form) return null;
                            this.form.submit(), this.setState({ isSubmitted: !0 });
                        }),
                        X(this, 'handleIframeLoad', () => {
                            this.props.setProxyLoadedStatus(!0);
                        });
                }
                componentDidMount() {
                    if (
                        (Object(W.c)(this.props.frameWindow, 'keydown', this.handleEscape),
                        this.node)
                    ) {
                        const e = () => Object(V.f)();
                        this.focusTrap = new U.a({
                            document: this.node,
                            firstElement: e,
                            lastElement: e,
                        });
                    }
                }
                componentDidUpdate() {
                    this.shouldSubmitForm() && this.submitForm();
                }
                componentWillUnmount() {
                    Object(W.y)(this.props.frameWindow, 'keydown', this.handleEscape),
                        this.focusTrap && this.focusTrap.restore();
                }
                shouldSubmitForm() {
                    const { isSheetsDataLoaded: e, isProxyLoaded: t } = this.props;
                    return !this.state.isSubmitted && e && t;
                }
                renderSheetForm() {
                    const { url: e, sheetsData: t } = this.props;
                    return t
                        ? o.a.createElement(
                              'form',
                              {
                                  ref: this.setFormRef,
                                  action: e,
                                  method: 'post',
                                  style: { margin: '0' },
                                  target: 'intercom-messenger-sheet',
                              },
                              o.a.createElement('input', {
                                  type: 'hidden',
                                  name: 'intercom_data',
                                  value: t,
                                  readOnly: !0,
                              })
                          )
                        : null;
                }
                render() {
                    const { sheetTitle: e } = this.props;
                    return o.a.createElement(
                        v,
                        { ref: e => (this.node = e) },
                        o.a.createElement(H, { onBackClick: this.handleCloseSheet, sheetTitle: e }),
                        o.a.createElement(messenger_sheet_proxy_MessengerSheetProxy, {
                            isNavigating: this.props.isNavigating,
                            onFrameLoad: this.handleIframeLoad,
                            startNavigation: this.props.startNavigation,
                            receiveSheetMessage: this.props.receiveSheetMessage,
                            setProxyLoadedStatus: this.props.setProxyLoadedStatus,
                            transitionTimeout: this.props.transitionTimeout,
                        }),
                        this.renderSheetForm(),
                        o.a.createElement(p.a, {
                            'aria-label': Object(O.e)('close'),
                            onClick: this.handleCloseSheet,
                        })
                    );
                }
            }
            function G() {
                return (G =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            class messenger_sheet_MessengerSheet extends a.PureComponent {
                render() {
                    const {
                            isSheetsDataLoaded: e,
                            isProxyLoaded: t,
                            isOpen: n,
                            isNavigating: a,
                            url: r,
                            closeSheet: i,
                            sheetsData: s,
                            startNavigation: c,
                            setProxyLoadedStatus: l,
                            sheetTitle: d,
                            receiveSheetMessage: p,
                            frameWindow: m,
                        } = this.props,
                        h = {
                            isSheetsDataLoaded: e,
                            isProxyLoaded: t,
                            isNavigating: a,
                            url: r,
                            sheetsData: s,
                            closeSheet: i,
                            setProxyLoadedStatus: l,
                            sheetTitle: d,
                            startNavigation: c,
                            receiveSheetMessage: p,
                            transitionTimeout: 300,
                        };
                    return o.a.createElement(
                        x,
                        null,
                        o.a.createElement(
                            b.TransitionGroup,
                            null,
                            n
                                ? o.a.createElement(
                                      b.CSSTransition,
                                      {
                                          classNames: 'intercom-messenger-sheet',
                                          timeout: { enter: 300, exit: 300 },
                                      },
                                      o.a.createElement(
                                          messenger_sheet_body_MessengerSheetBody,
                                          G({ key: 'sheet' }, h, { frameWindow: m })
                                      )
                                  )
                                : null
                        )
                    );
                }
            }
            var Z = n(108),
                $ = n(2);
            const Y = Object(u.createStructuredSelector)({
                isSheetsDataLoaded: Z.d,
                isProxyLoaded: Z.c,
                isOpen: Z.b,
                url: Z.f,
                sheetsData: Z.h,
                sourceCard: Z.g,
                isNavigating: Z.a,
                sheetTitle: Z.e,
            });
            var J = Object(h.connect)(Y, function(e) {
                    const t = g.d.bind(null, $.b),
                        n = g.h.bind(null, $.b);
                    return Object(m.bindActionCreators)(
                        {
                            startNavigation: g.g,
                            finishNavigation: g.c,
                            closeSheet: g.a,
                            submitSheet: n,
                            setProxyLoadedStatus: g.e,
                            setSheetTitle: g.f,
                            receiveSheetMessage: t,
                        },
                        e
                    );
                })(messenger_sheet_MessengerSheet),
                K = n(608);
            const Q = Object(f.c)('div', { target: 'e1gl5nmw0' })(
                    'z-index:',
                    Object(f.f)('messengerAlertsZIndex'),
                    ';position:absolute;top:0;left:0;right:0;margin-left:auto;margin-right:auto;width:calc(267px - 16px - 16px);background-color:',
                    Object(f.f)('white'),
                    ';border:1px solid ',
                    Object(f.f)('red'),
                    ';box-shadow:0 2px 8px 0 rgba(0,0,0,0.15);border-radius:8px;font-size:14px;line-height:1.5;height:21px;padding:8px 16px;display:flex;flex-direction:row;justify-content:center;align-items:center;align-content:center;color:',
                    Object(f.f)('red'),
                    ';svg{width:18px;height:17px;stroke:',
                    Object(f.f)('red'),
                    ';margin-right:8px;padding-bottom:2px;}span{line-height:1.5;}'
                ),
                ee = Object(f.c)('span', { target: 'e1gl5nmw1' })({
                    name: '1qimanm',
                    styles: 'text-decoration:underline;&:hover{cursor:pointer;}',
                });
            function te(e, t, n) {
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
            class messenger_alerts_MessengerAlerts extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        te(this, 'handleTryAgain', () => {
                            const { alertType: e, alertPayload: t } = this.props;
                            switch (e) {
                                case 'MessengerCardSubmitError':
                                    this.props.submitMessengerCardAction(
                                        t.cardUri,
                                        t.componentId,
                                        t.inputValues
                                    );
                                    break;
                                case 'MessengerSheetSubmitError':
                                    this.props.submitSheet(t.sheetValues);
                            }
                        });
                }
                isPageHomescreen() {
                    return 'home-screen' === this.props.currentView;
                }
                getStyle() {
                    const { headerHeight: e } = this.props;
                    return { top: (this.isPageHomescreen() ? 0 : e) + 16 };
                }
                render() {
                    return this.props.isShown
                        ? o.a.createElement(
                              Q,
                              { style: this.getStyle() },
                              o.a.createElement(K.a, null),
                              o.a.createElement(
                                  'span',
                                  null,
                                  Object(O.e)('something_is_wrong'),
                                  '. '
                              ),
                              o.a.createElement(
                                  ee,
                                  { onClick: this.handleTryAgain },
                                  Object(O.e)('try_again')
                              )
                          )
                        : null;
                }
            }
            te(messenger_alerts_MessengerAlerts, 'defaultProps', { headerHeight: 0 });
            var ne = n(149);
            const ae = e => e.messengerAlerts,
                oe = Object(u.createSelector)(ae, e => e.isShown),
                re = Object(u.createSelector)(ae, e => e.alertType),
                ie = Object(u.createSelector)(ae, e => e.alertPayload || {}),
                se = Object(u.createStructuredSelector)({
                    isShown: oe,
                    alertPayload: ie,
                    alertType: re,
                });
            var ce = Object(h.connect)(se, function(e) {
                    return Object(m.bindActionCreators)(
                        {
                            submitMessengerCardAction: ne.a.bind(null, $.b),
                            submitSheet: g.h.bind(null, $.b),
                        },
                        e
                    );
                })(messenger_alerts_MessengerAlerts),
                le = n(507);
            class booting_header_BootingHeader extends a.PureComponent {
                constructor(...e) {
                    var t, n, a;
                    super(...e),
                        (a = void 0),
                        (n = 'node') in (t = this)
                            ? Object.defineProperty(t, n, {
                                  value: a,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                              })
                            : (t[n] = a);
                }
                componentDidMount() {
                    if (!this.node) return;
                    const { height: e } = this.node.getBoundingClientRect();
                    this.props.onHeightChange(e);
                }
                render() {
                    return o.a.createElement(le.f, { ref: e => (this.node = e) });
                }
            }
            function de() {
                return o.a.createElement(
                    'svg',
                    {
                        focusable: 'false',
                        'aria-hidden': 'true',
                        viewBox: '0 0 16 16',
                        height: '16',
                    },
                    o.a.createElement('path', {
                        fill: '#FFF',
                        d:
                            'M1,14 L15,14 L15,16 L1,16 L1,14 Z M8,12 L2,5.68965517 L3.37704918,4.24137931 L6.99543762,8.00158691 L6.99543762,0 L8.99861145,0 L8.99861145,8.00158691 L12.6229508,4.24137931 L14,5.68965517 L8,12 Z',
                    })
                );
            }
            var pe = n(524);
            const me = Object(f.c)('div', { target: 'ehisz1x0' })(
                    'z-index:',
                    Object(S.m)(3),
                    ';position:absolute;width:',
                    51,
                    'px;height:',
                    51,
                    'px;top:0;right:0;background-position:center;margin:12px 8px 12px 2px;',
                    ({ isOffsetLeft: e }) => e && Object(f.b)('right:', 51, 'px;'),
                    ' &,*{cursor:pointer;}'
                ),
                he = Object(f.c)('div', { target: 'ehisz1x1' })(
                    'width:',
                    51,
                    'px;height:',
                    51,
                    'px;margin:0 auto;border-radius:',
                    Object(f.f)('messengerBorderRadiusPx'),
                    'px;display:flex;align-items:center;justify-content:center;transform:translateZ(0);&:hover{background-color:rgba(0,0,0,0.5);}'
                );
            function ue() {
                return (ue =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function ge(e) {
                const { isOffsetLeft: t, opacity: n, onClick: a } = e,
                    r = 'number' == typeof n;
                return o.a.createElement(
                    b.CSSTransition,
                    {
                        classNames: 'intercom-download-transcript-button',
                        in: !0,
                        appear: !r,
                        timeout: 500,
                        enter: !1,
                        exit: !1,
                    },
                    o.a.createElement(
                        pe.a,
                        {
                            content: Object(O.e)('download_transcript'),
                            position: 'bottomRight',
                            type: 'dark',
                        },
                        (e, r) =>
                            o.a.createElement(
                                me,
                                ue({}, r, {
                                    isOffsetLeft: t,
                                    style: { opacity: n },
                                    onClick: a,
                                    'aria-label': Object(O.e)('download_transcript'),
                                    className: 'intercom-download-transcript-button',
                                }),
                                o.a.createElement(he, null, o.a.createElement(de, null)),
                                e
                            )
                    )
                );
            }
            var be = n(1);
            function fe(e, t, n) {
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
            class messenger_header_buttons_MessengerHeaderButtons extends a.Component {
                constructor(...e) {
                    super(...e),
                        fe(this, 'handleBackClick', e => {
                            e.preventDefault(),
                                Object(be.e)('clicked', 'back_button', 'messenger', ''),
                                this.props.onBackClick();
                        }),
                        fe(this, 'handleTranscriptDownload', () => {
                            const { conversationId: e } = this.props;
                            e &&
                                (Object(be.e)(
                                    'download_transcript',
                                    'conversation',
                                    'messenger',
                                    '',
                                    { conversation_id: e }
                                ),
                                this.props.onDownloadTranscript(e));
                        });
                }
                getDownloadTranscriptButtonOpacity() {
                    const { percentageCollapsed: e } = this.props;
                    return 0 === e ? null : 1 - e <= 0.2 ? 0 : 1 - e;
                }
                renderBackButton() {
                    const { unreadConversationCount: e } = this.props;
                    return o.a.createElement(
                        _,
                        {
                            className: 'intercom-messenger-header-buttons-back-button',
                            onClick: this.handleBackClick,
                            'aria-label': Object(O.e)('navigation_back'),
                        },
                        o.a.createElement(
                            P,
                            null,
                            o.a.createElement(C, null),
                            e > 0 ? o.a.createElement(N, null, e) : null
                        )
                    );
                }
                renderDownloadTranscriptButton() {
                    return o.a.createElement(ge, {
                        isOffsetLeft: this.props.isCloseButtonEnabled,
                        opacity: this.getDownloadTranscriptButtonOpacity(),
                        onClick: this.handleTranscriptDownload,
                        'aria-label': Object(O.e)('download_transcript'),
                    });
                }
                render() {
                    const {
                        isBackButtonEnabled: e,
                        isDownloadTranscriptButtonEnabled: t,
                    } = this.props;
                    return o.a.createElement(
                        o.a.Fragment,
                        null,
                        e ? this.renderBackButton() : null,
                        t ? this.renderDownloadTranscriptButton() : null
                    );
                }
            }
            fe(messenger_header_buttons_MessengerHeaderButtons, 'defaultProps', {
                isBackButtonEnabled: !1,
                isDownloadTranscriptButtonEnabled: !1,
            });
            var ve = n(8),
                xe = n(44),
                ye = n(38),
                Ce = n(4),
                Oe = n(492);
            var we = Object(h.connect)(
                    (e, t) => {
                        const n = Object(ye.a)(e),
                            a = Object(xe.b)(e),
                            o = Object(i.g)(e, t);
                        return {
                            unreadConversationCount: a,
                            isCloseButtonEnabled: Object(Oe.a)(e),
                            isBackButtonEnabled: o,
                            conversationId: n ? n.id : null,
                        };
                    },
                    e => ({
                        onBackClick: () => {
                            e(Object(ve.d)());
                        },
                        onDownloadTranscript: t => {
                            e(Object(Ce.o)(t));
                        },
                    })
                )(messenger_header_buttons_MessengerHeaderButtons),
                je = n(461),
                Ee = n(522),
                ke = n(450),
                Se = n(499);
            const _e = Object(f.c)('svg', { target: 'e1p2qanp0' })({
                name: 'ac0jz0',
                styles: 'width:8px;height:10px;padding-right:6px;padding-bottom:10px;',
            });
            var Pe = e =>
                o.a.createElement(
                    _e,
                    {
                        className: e.className,
                        focusable: 'false',
                        'aria-hidden': 'true',
                        viewBox: '0 0 8 10',
                    },
                    o.a.createElement(
                        'g',
                        { fill: '#8B8B8B' },
                        o.a.createElement('polygon', {
                            points:
                                '4 0 4 0.9 6.2 0.9 4 3.9 4 4.7 7.6 4.7 7.6 3.8 5.3 3.8 7.5 0.8 7.5 0',
                        }),
                        o.a.createElement('path', {
                            d:
                                'M3 5.7L3 4.7 3 3.9 3 3.5 3.2 3.3 4 2.2C3.8 2.2 3.7 2.2 3.5 2.2 1.6 2.2 0 3.7 0 5.7 0 7.6 1.6 9.2 3.5 9.2 5.4 9.2 7 7.6 7 5.7L4 5.7 3 5.7Z',
                        })
                    )
                );
            const Ne = Object(f.c)('div', { target: 'emkvacf0' })(
                    ({ isCollapsed: e }) =>
                        !e &&
                        Object(f.b)(Ie.className, ',', Ie.className, ' *{pointer-events:none;}')
                ),
                Te = Object(f.c)('div', { target: 'emkvacf1' })({
                    name: 'm8mn7f',
                    styles: 'padding:24px 24px 0 75px;box-sizing:border-box;',
                }),
                Ae = Object(f.c)('h2', { target: 'emkvacf2' })(
                    'color:',
                    Object(f.f)('headerTitleColor'),
                    ';font-size:20px;line-height:30px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'
                ),
                He = Object(f.c)('div', { target: 'emkvacf3' })(
                    'color:',
                    Object(f.f)('headerTextColor'),
                    ';font-size:14px;line-height:21px;span{word-break:break-word;}'
                ),
                Be = Object(f.c)('div', { target: 'emkvacf4' })({
                    name: '1tcqm63',
                    styles:
                        'padding:18px 0;margin:0 auto 0;display:flex;flex-flow:row nowrap;justify-content:flex-start;',
                }),
                Re = Object(f.c)('div', { target: 'emkvacf5' })({
                    name: 'iq2sk9',
                    styles:
                        'display:inline-block;padding-right:20px;flex:initial;vertical-align:top;text-align:center;',
                }),
                Me = Object(f.c)('div', { target: 'emkvacf6' })(
                    'color:',
                    Object(f.f)('headerTextColor'),
                    ';font-size:13px;width:100%;max-width:85px;text-align:center;padding-top:6px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'
                ),
                Le = Object(f.c)('div', { target: 'emkvacf7' })(
                    'position:relative;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:14px;line-height:21px;color:',
                    Object(f.f)('headerTitleColor'),
                    ';margin-bottom:30px;',
                    ({ theme: e, hasOfficeHoursResponse: t }) =>
                        t && Object(f.b)('color:', e.headerTitleColor, ';&:before{display:none;}')
                ),
                Fe = Object(f.c)('span', { target: 'emkvacf8' })({
                    name: 'xs9fqv',
                    styles: 'white-space:normal;',
                }),
                ze = Object(f.c)('div', { target: 'emkvacf9' })({
                    name: '1jd31b9',
                    styles:
                        'border-radius:8px;padding:8px;height:51px;box-sizing:border-box;white-space:nowrap;overflow:hidden;',
                });
            var De = { name: '1hs0psz', styles: 'right:8px;' };
            const Ie = Object(f.c)('div', { target: 'emkvacf10' })(
                    'position:absolute;height:75px;top:0;left:60px;right:20px;padding-top:12px;box-sizing:border-box;overflow:hidden;transition:opacity 0.2s;&,*{cursor:pointer;}&:hover ',
                    ze.className,
                    '{background-color:rgba(0,0,0,0.1);}',
                    ({ theme: e }) => e.isMobileSize && De
                ),
                We = Object(f.c)('div', { target: 'emkvacf11' })({
                    name: '1l3b8z5',
                    styles: 'display:block;vertical-align:middle;padding-left:10px;',
                }),
                Ue = Object(f.c)('div', { target: 'emkvacf12' })(
                    'color:',
                    Object(f.f)('headerTitleColor'),
                    ';font-size:16px;line-height:1.1em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'
                ),
                Ve = Object(f.c)('div', { target: 'emkvacf13' })(
                    'color:',
                    Object(f.f)('headerTextColor'),
                    ';font-size:14px;line-height:1.3em;overflow:hidden;display:flex;',
                    Fe.className,
                    '{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;}',
                    ({ theme: e, hasOfficeHoursResponse: t }) =>
                        t && Object(f.b)('padding-bottom:0;g{fill:', e.headerTitleColor, ';}')
                ),
                qe = Object(f.c)(Pe, { target: 'emkvacf14' })(
                    'min-width:8px;margin-top:3px;padding-bottom:0;g{fill:',
                    Object(f.f)('headerTitleColor'),
                    ';}'
                );
            function Xe() {
                return (Xe =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            class team_profile_TeamProfile extends a.Component {
                hasOfficeHoursResponse() {
                    return void 0 !== this.props.officeHoursResponse;
                }
                getFullStyle() {
                    const { percentageCollapsed: e } = this.props;
                    return { opacity: 1 - e <= 0.2 ? 0 : 1 - e };
                }
                getCompactStyle() {
                    const { percentageCollapsed: e } = this.props;
                    return { opacity: e <= 0.8 ? 0 : e };
                }
                getResponseDelay() {
                    const { officeHoursResponse: e, appExpectedResponseDelay: t } = this.props;
                    return this.hasOfficeHoursResponse() ? e : t;
                }
                getCompactResponseDelay() {
                    const {
                        officeHoursResponse: e,
                        appCompactExpectedResponseDelay: t,
                    } = this.props;
                    return this.hasOfficeHoursResponse() ? e : t;
                }
                renderFull() {
                    const {
                            appAdmins: e,
                            appName: t,
                            appTeamIntro: n,
                            outOfOffice: a,
                        } = this.props,
                        r = this.getFullStyle();
                    return o.a.createElement(
                        Te,
                        { style: r, 'aria-hidden': 0 === r.opacity },
                        o.a.createElement(Ae, null, t),
                        n
                            ? o.a.createElement(He, null, o.a.createElement(ke.a, { text: n }))
                            : null,
                        o.a.createElement(
                            Be,
                            null,
                            Object(Se.a)(e, 3).map((e, t) =>
                                o.a.createElement(
                                    Re,
                                    { key: t },
                                    o.a.createElement(je.a, { admin: e, size: 51 }),
                                    o.a.createElement(Me, null, e.firstName)
                                )
                            )
                        ),
                        o.a.createElement(
                            Le,
                            { hasOfficeHoursResponse: this.hasOfficeHoursResponse() },
                            a && o.a.createElement(qe, null),
                            o.a.createElement(Fe, null, this.getResponseDelay())
                        )
                    );
                }
                renderCompact() {
                    const {
                            appAdmins: e,
                            appName: t,
                            outOfOffice: n,
                            onExpand: a,
                            percentageCollapsed: r,
                        } = this.props,
                        i = this.getCompactStyle(),
                        s = 1 !== r;
                    return o.a.createElement(
                        Ie,
                        Xe(
                            {
                                style: i,
                                'aria-hidden': 0 === i.opacity,
                                'aria-expanded': s,
                                tabIndex: s ? '-1' : '0',
                                role: s ? 'region' : 'button',
                            },
                            s ? {} : { 'aria-label': Object(O.e)('expand_header') },
                            { onClick: a }
                        ),
                        o.a.createElement(
                            ze,
                            null,
                            o.a.createElement(Ee.a, { admins: e }),
                            o.a.createElement(
                                We,
                                null,
                                o.a.createElement(Ue, null, t),
                                o.a.createElement(
                                    Ve,
                                    { hasOfficeHoursResponse: this.hasOfficeHoursResponse() },
                                    n && o.a.createElement(qe, null),
                                    o.a.createElement(Fe, null, this.getCompactResponseDelay())
                                )
                            )
                        )
                    );
                }
                render() {
                    return o.a.createElement(
                        Ne,
                        { isCollapsed: 1 === this.props.percentageCollapsed },
                        this.renderFull(),
                        this.renderCompact()
                    );
                }
            }
            const Ge = Object(f.c)('svg', { target: 'ez4rail0' })(
                'display:inline-block;width:16px;height:16px;margin-right:16px;opacity:0.7;&:hover{opacity:1;}> g > g{fill:',
                Object(f.f)('headerTextColor'),
                ';}'
            );
            var Ze = () =>
                o.a.createElement(
                    Ge,
                    { focusable: 'false', 'aria-hidden': 'true', viewBox: '0 0 16 16' },
                    o.a.createElement(
                        'g',
                        { fill: 'none' },
                        o.a.createElement(
                            'g',
                            { fill: '#B3C9FF' },
                            o.a.createElement('path', {
                                d:
                                    'M13.6 0C14.9 0 16 1.1 16 2.4L16 13.6C16 14.9 14.9 16 13.6 16L2.4 16C1.1 16 0 14.9 0 13.6L0 2.4C0 1.1 1.1 0 2.4 0L13.6 0ZM4.8 13.5L4.8 6.2 2.4 6.2 2.4 13.5 4.8 13.5ZM3.6 5.2C4.5 5.2 5 4.7 5 4 5 3.3 4.5 2.7 3.7 2.7 2.8 2.7 2.3 3.3 2.3 4 2.3 4.7 2.8 5.2 3.6 5.2L3.6 5.2ZM6.2 13.5L8.6 13.5 8.6 9.4C8.6 9.2 8.6 9 8.7 8.8 8.8 8.4 9.2 8 9.9 8 10.8 8 11.1 8.6 11.1 9.6L11.1 13.5 13.5 13.5 13.5 9.3C13.5 7.1 12.3 6.1 10.7 6.1 9.4 6.1 8.9 6.8 8.6 7.3L8.6 7.3 8.6 6.2 6.2 6.2C6.2 6.9 6.2 13.5 6.2 13.5Z',
                            })
                        )
                    )
                );
            const $e = Object(f.c)('svg', { target: 'e1jjzgt50' })(
                'display:inline-block;width:18px;height:15px;margin-right:16px;opacity:0.7;&:hover{opacity:1;}> g > g{fill:',
                Object(f.f)('headerTextColor'),
                ';}'
            );
            var Ye = () =>
                o.a.createElement(
                    $e,
                    { focusable: 'false', 'aria-hidden': 'true', viewBox: '0 0 18 15' },
                    o.a.createElement(
                        'g',
                        { fill: 'none' },
                        o.a.createElement(
                            'g',
                            { fill: '#B3C9FF' },
                            o.a.createElement('path', {
                                d:
                                    'M18 1.8C17.3 2.1 16.6 2.3 15.9 2.4 16.6 1.9 17.2 1.2 17.5 0.3 16.8 0.7 16 1 15.2 1.2 14.5 0.5 13.5 0 12.5 0 10.4 0 8.8 1.7 8.8 3.8 8.8 4.1 8.8 4.4 8.9 4.6 5.8 4.5 3.1 3 1.3 0.7 0.9 1.3 0.8 1.9 0.8 2.6 0.8 3.9 1.4 5.1 2.4 5.7 1.8 5.7 1.2 5.6 0.7 5.3 0.7 5.3 0.7 5.3 0.7 5.3 0.7 7.2 2 8.7 3.7 9 3.4 9.1 3.1 9.2 2.7 9.2 2.5 9.2 2.2 9.1 2 9.1 2.5 10.6 3.9 11.7 5.5 11.7 4.2 12.7 2.6 13.4 0.9 13.4 0.6 13.4 0.3 13.3 0 13.3 1.6 14.4 3.6 15 5.7 15 12.5 15 16.2 9.2 16.2 4.2 16.2 4.1 16.2 3.9 16.2 3.7 16.9 3.2 17.5 2.5 18 1.8',
                            })
                        )
                    )
                );
            const Je = Object(f.c)('svg', { target: 'ekiqnl20' })(
                'display:inline-block;width:16px;height:16px;margin-right:16px;opacity:0.7;> path{fill:',
                Object(f.f)('headerTextColor'),
                ';}&:hover{opacity:1;}'
            );
            var Ke = () =>
                    o.a.createElement(
                        Je,
                        { focusable: 'false', 'aria-hidden': 'true', viewBox: '0 0 16 16' },
                        o.a.createElement('rect', { fill: 'black', fillOpacity: '0' }),
                        o.a.createElement('path', {
                            fillRule: 'evenodd',
                            fill: '#B3C9FF',
                            clipRule: 'evenodd',
                            d:
                                'M2 1C2 0.762695 2.08301 0.544922 2.2207 0.373047C2.40332 0.145508 2.68457 0 3 0C3.27148 0 3.51758 0.108398 3.69824 0.283203C3.88477 0.464844 4 0.71875 4 1V3H10V1C10 0.447266 10.4473 0 11 0C11.5527 0 12 0.447266 12 1V3H13C13.5527 3 14 3.44727 14 4V5H0V4C0 3.92578 0.0078125 3.85352 0.0234375 3.78418C0.0537109 3.64551 0.114258 3.5166 0.196289 3.40527C0.37793 3.15918 0.669922 3 1 3H2V1ZM0 6H14V14C14 14.4297 13.8652 14.8271 13.6348 15.1533C13.5186 15.3174 13.3789 15.4629 13.2197 15.5859C13.0723 15.6992 12.9082 15.793 12.7324 15.8623C12.5059 15.9512 12.2588 16 12 16H2C0.895508 16 0 15.1045 0 14V6ZM5 7H4V9H2V10H4V12H2V13H4V15H5V13H9V15H10V13H12V12H10V10H12V9H10V7H9V9H5V7ZM9 12V10H5V12H9Z',
                        })
                    ),
                Qe = n(437),
                et = n.n(Qe);
            const tt = Object(f.c)('div', { target: 'e136ngx30' })(
                    'z-index:',
                    Object(S.m)(1),
                    ';visibility:hidden;position:absolute;top:calc(100% + 10px);left:50%;border-radius:4px;padding:4px 8px;font-size:12px;line-height:14px;background-color:',
                    Object(f.f)('grey'),
                    ';color:',
                    Object(f.f)('white'),
                    ";white-space:nowrap;&:after{bottom:100%;left:50%;border:solid transparent;content:' ';height:0;width:0;position:absolute;pointer-events:none;border-color:rgba(81,96,114,0);border-bottom-color:#516072;border-width:5px;margin-left:-5px;}"
                ),
                nt = Object(f.c)('span', { target: 'e136ngx31' })({
                    name: '7qsprt',
                    styles:
                        'max-width:130px;white-space:nowrap;overflow:hidden;display:block;text-overflow:ellipsis;',
                }),
                at = Object(f.c)('div', { target: 'e136ngx32' })(
                    'display:inline-block;position:relative;float:left;margin:3px;&:hover{',
                    tt.className,
                    '{visibility:visible;}}'
                );
            class conversation_participant_ConversationParticipant extends a.Component {
                constructor(...e) {
                    var t, n, a;
                    super(...e),
                        (a = void 0),
                        (n = 'participantName') in (t = this)
                            ? Object.defineProperty(t, n, {
                                  value: a,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                              })
                            : (t[n] = a);
                }
                getParticipantNameStyles() {
                    if (this.participantName)
                        return { marginLeft: -this.participantName.offsetWidth / 2 };
                }
                render() {
                    return o.a.createElement(
                        at,
                        null,
                        o.a.createElement(je.a, { admin: this.props }),
                        o.a.createElement(
                            tt,
                            {
                                ref: e => (this.participantName = e),
                                style: this.getParticipantNameStyles(),
                            },
                            o.a.createElement(nt, null, this.props.name)
                        )
                    );
                }
            }
            var ot = { name: '1tu59u4', styles: 'flex:0 0 auto;' };
            const rt = Object(f.c)('svg', { target: 'e1rpf4rx0' })(
                'width:16px;height:16px;margin-right:5px;vertical-align:text-bottom;> g > g{stroke:',
                Object(f.f)('headerTitleColor'),
                ';}',
                ({ isBio: e }) => e && ot
            );
            var it = () =>
                o.a.createElement(
                    rt,
                    { focusable: 'false', 'aria-hidden': 'true', viewBox: '0 0 17 15' },
                    o.a.createElement(
                        'g',
                        {
                            strokeWidth: '1',
                            fillRule: 'evenodd',
                            strokeLinejoin: 'round',
                            fill: 'none',
                        },
                        o.a.createElement(
                            'g',
                            { stroke: '#FFF' },
                            o.a.createElement(
                                'g',
                                {
                                    transform:
                                        'translate(-1073 -120)translate(1002 30)translate(72 90)translate(0 1)',
                                },
                                o.a.createElement('path', {
                                    d: 'M0.4 6.7L6.7 6.7',
                                    strokeLinecap: 'round',
                                }),
                                o.a.createElement('path', {
                                    d: 'M8.9 6.7L15.2 6.7',
                                    strokeLinecap: 'round',
                                }),
                                o.a.createElement('polygon', {
                                    points: '15.2 3.2 0.4 3.2 0.4 13.1 15.2 13.1',
                                }),
                                o.a.createElement('polygon', {
                                    points: '8.9 8.9 6.7 8.9 6.7 6 8.9 6',
                                }),
                                o.a.createElement('path', {
                                    d: 'M5 3.2C5 1.6 6.2 0.4 7.8 0.4 9.4 0.4 10.6 1.6 10.6 3.2',
                                })
                            )
                        )
                    )
                );
            var st = () =>
                o.a.createElement(
                    rt,
                    { focusable: 'false', 'aria-hidden': 'true', viewBox: '0 0 18 18' },
                    o.a.createElement(
                        'g',
                        {
                            strokeWidth: '1',
                            fillRule: 'evenodd',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            fill: 'none',
                        },
                        o.a.createElement(
                            'g',
                            { stroke: '#FFF' },
                            o.a.createElement('path', {
                                d:
                                    'M16.7 9C16.7 13.2 13.2 16.7 9 16.7 4.8 16.7 1.3 13.2 1.3 9 1.3 4.8 4.8 1.3 9 1.3 13.2 1.3 16.7 4.8 16.7 9L16.7 9Z',
                            }),
                            o.a.createElement('path', {
                                d:
                                    'M14.7 3.8C14.7 3.8 14.3 5.7 13 6.3 11.7 6 10.3 7 10.7 7 11 7 11.3 8.3 11.3 8.3 11.7 8.7 12.3 8.3 12.3 8.3 13.2 9.2 11 10.7 11 11 11 11.3 11.8 11.5 11.3 12 10.8 12.5 10.3 12.7 10.3 12.7 10.3 14.3 8.7 14.3 8.3 14.3 8 14.3 7.3 13 7.3 12.7 7.3 12.3 7.7 12 7.7 11.7 7.7 11.3 7 10.7 7 10.7 7 9.3 6 9.7 5 9.7 4 9.7 4 8.3 4 8.3 4 8.3 4 6 5.7 5.7 7.3 5.3 7.3 6 7.3 6 8 6.7 9.3 6 10 6 10 6 10.3 3.7 9.7 4 9 4.3 8.4 4.1 8.3 3.3 8.2 2.3 11.2 1.7 11.2 1.7',
                            })
                        )
                    )
                );
            var ct = () =>
                    o.a.createElement(
                        rt,
                        {
                            isBio: !0,
                            focusable: 'false',
                            'aria-hidden': 'true',
                            viewBox: '0 0 16 13',
                        },
                        o.a.createElement(
                            'g',
                            { strokeWidth: '1', fillRule: 'evenodd', fill: 'none' },
                            o.a.createElement(
                                'g',
                                { stroke: '#FFF' },
                                o.a.createElement('path', {
                                    d:
                                        'M5.1 0.9L6.9 2.4C5.3 3.5 3.9 5.5 3.7 7.1 3.8 7.1 4.1 7 4.4 7 5.8 7 6.8 8.1 6.8 9.6 6.8 11.1 5.6 12.3 4.1 12.3 2.5 12.3 1 10.9 1 8.4 1 5.4 2.8 2.6 5.1 0.9ZM13.1 0.9L15 2.4C13.4 3.5 12 5.5 11.8 7.1 11.8 7.1 12.2 7 12.4 7 13.8 7 14.9 8.1 14.9 9.6 14.9 11.1 13.7 12.3 12.2 12.3 10.5 12.3 9.1 10.9 9.1 8.4 9.1 5.4 10.8 2.6 13.1 0.9Z',
                                })
                            )
                        )
                    ),
                lt = n(469),
                dt = n(474);
            const pt = Object(f.c)('div', { target: 'e12blpgd0' })(
                ({ isCollapsed: e }) =>
                    !e && Object(f.b)(jt.className, ',', jt.className, ' *{pointer-events:none;}')
            );
            var mt = { name: '107g92u', styles: 'padding:30px 30px 24px 75px;' },
                ht = { name: '1imlk2a', styles: 'padding-bottom:0;' };
            const ut = Object(f.c)('div', { target: 'e12blpgd1' })(
                    'padding:30px 30px 30px 75px;box-sizing:border-box;',
                    ({ hasParticipants: e }) => e && ht,
                    ' ',
                    ({ isCloseButtonEnabled: e }) => e && mt,
                    ' ',
                    ({ theme: e }) =>
                        e.isMobileSize &&
                        Object(f.b)(ft.className, '{width:100px;}', vt.className, '{width:140px;}')
                ),
                gt = Object(f.c)('div', { target: 'e12blpgd2' })({
                    name: '1hzc3bv',
                    styles: 'display:table-cell;position:relative;',
                }),
                bt = Object(f.c)('div', { target: 'e12blpgd3' })({
                    name: '1p486de',
                    styles:
                        'display:table-cell;vertical-align:top;padding-top:16px;padding-left:20px;',
                }),
                ft = Object(f.c)('h3', { target: 'e12blpgd4' })(
                    'color:',
                    Object(f.f)('headerTitleColor'),
                    ';font-size:17px;line-height:1.1em;white-space:nowrap;width:190px;overflow:hidden;text-overflow:ellipsis;'
                ),
                vt = Object(f.c)('div', { target: 'e12blpgd5' })(
                    'color:',
                    Object(f.f)('headerTextColor'),
                    ';font-size:13px;line-height:1.1em;white-space:nowrap;width:190px;overflow:hidden;text-overflow:ellipsis;'
                ),
                xt = Object(f.c)('div', { target: 'e12blpgd6' })(
                    'color:',
                    Object(f.f)('headerTitleColor'),
                    ';font-size:13px;line-height:1.5;margin-bottom:5px;display:flex;'
                ),
                yt = Object(f.c)(ke.a, { target: 'e12blpgd7' })({
                    name: '1afhmo5',
                    styles: 'white-space:pre-wrap;flex-direction:column;',
                }),
                Ct = Object(f.c)('div', { target: 'e12blpgd8' })({
                    name: 'pep080',
                    styles: 'margin-top:18px;line-height:1.4;',
                }),
                Ot = Object(f.c)('div', { target: 'e12blpgd9' })(
                    'color:',
                    Object(f.f)('headerTitleColor'),
                    ';font-size:13px;white-space:nowrap;margin-bottom:5px;'
                );
            var wt = { name: '1hs0psz', styles: 'right:8px;' };
            const jt = Object(f.c)('div', { target: 'e12blpgd10' })(
                    'position:absolute;height:75px;top:0;left:65px;right:20px;padding-top:12.5px;box-sizing:border-box;overflow:hidden;transition:opacity 0.2s;&,*{cursor:pointer;}',
                    ({ theme: e }) => e.isMobileSize && wt,
                    ' ',
                    dt.a.className,
                    '{width:6px;height:6px;right:8px;bottom:2px;}'
                ),
                Et = Object(f.c)('div', { target: 'e12blpgd11' })(
                    'padding:8px;height:50px;box-sizing:border-box;border-radius:8px;',
                    jt.className,
                    ':hover &{background-color:rgba(0,0,0,0.1);}'
                ),
                kt = Object(f.c)('div', { target: 'e12blpgd12' })({
                    name: 'ckru8z',
                    styles:
                        'vertical-align:middle;white-space:nowrap;overflow:hidden;display:inline-block;float:left;padding-right:10px;position:relative;',
                }),
                St = Object(f.c)('div', { target: 'e12blpgd13' })({
                    name: '1l3b8z5',
                    styles: 'display:block;vertical-align:middle;padding-left:10px;',
                }),
                _t = Object(f.c)('div', { target: 'e12blpgd14' })(
                    'color:',
                    Object(f.f)('headerTitleColor'),
                    ';font-size:16px;line-height:1.2em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'
                ),
                Pt = Object(f.c)(_t, { target: 'e12blpgd15' })({
                    name: '5xavlq',
                    styles: 'line-height:33px;',
                }),
                Nt = Object(f.c)('div', { target: 'e12blpgd16' })(
                    'color:',
                    Object(f.f)('headerTextColor'),
                    ';font-size:13px;line-height:1.1em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'
                ),
                Tt = Object(f.c)('div', { target: 'e12blpgd17' })(
                    'position:absolute;top:29px;right:24px;margin-top:0;',
                    Je.className,
                    ',',
                    $e.className,
                    ',',
                    Ge.className,
                    '{margin-left:16px;margin-right:0;padding-bottom:3px;}',
                    ({ isDownloadTranscriptButtonEnabled: e }) =>
                        e &&
                        Object(f.b)(
                            'position:inherit;margin-top:11px;',
                            Je.className,
                            ',',
                            $e.className,
                            ',',
                            Ge.className,
                            '{margin-left:0;margin-right:16px;}'
                        ),
                    ' ',
                    ({ theme: e }) =>
                        e.isMobileSize &&
                        Object(f.b)(
                            'position:inherit;margin-top:11px;',
                            Je.className,
                            ',',
                            $e.className,
                            ',',
                            Ge.className,
                            '{margin-left:0;margin-right:16px;}'
                        )
                ),
                At = Object(f.c)('div', { target: 'e12blpgd18' })(
                    'color:',
                    Object(f.f)('headerTitleColor'),
                    ';font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:5px;'
                ),
                Ht = Object(f.c)('div', { target: 'e12blpgd19' })({
                    name: '1w1avc4',
                    styles:
                        'margin:3px;line-height:32px;width:32px;text-align:center;float:left;white-space:nowrap;',
                }),
                Bt = Object(f.c)('div', { target: 'e12blpgd20' })(
                    'font-size:13px;padding:10px 30px 24px 72px;margin:0 -30px 0 -75px;color:',
                    Object(f.f)('white'),
                    ';'
                ),
                Rt = Object(f.c)('div', { target: 'e12blpgd21' })({
                    name: '9ex4jj',
                    styles:
                        'border-top:1px solid rgba(255,255,255,0.25);padding-left:3px;padding-top:16px;line-height:1.5;margin-bottom:5px;',
                }),
                Mt = Object(f.c)('div', { target: 'e12blpgd22' })(S.h);
            function Lt() {
                return (Lt =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            class admin_profile_AdminProfile extends a.Component {
                getFullStyle() {
                    const { percentageCollapsed: e } = this.props;
                    return { opacity: 1 - e <= 0.2 ? 0 : 1 - e };
                }
                getCompactStyle() {
                    const { percentageCollapsed: e } = this.props;
                    return { opacity: e <= 0.8 ? 0 : e };
                }
                handleSocialAccountClick(e) {
                    e.stopPropagation();
                }
                handleCalendarIconClick(e) {
                    e.stopPropagation();
                }
                hasActiveOrAwayResponse() {
                    return null !== this.props.admin.isActive;
                }
                shouldRenderParticipants() {
                    return this.props.participants.length > 0;
                }
                activeOrAwayInWords() {
                    return this.props.admin.isActive
                        ? Object(O.e)('active_state')
                        : Object(O.e)('away_state');
                }
                adminState() {
                    return this.props.admin.isBot ? Object(O.e)('bot') : this.humanAdminState();
                }
                humanAdminState() {
                    return this.hasActiveOrAwayResponse()
                        ? this.activeOrAwayInWords()
                        : this.props.admin.lastActiveAt
                        ? Object(lt.d)(this.props.admin.lastActiveAt)
                        : void 0;
                }
                renderActiveOrAwayState() {
                    return (
                        this.hasActiveOrAwayResponse() &&
                        o.a.createElement(dt.a, { isActive: this.props.admin.isActive })
                    );
                }
                renderPublicLinks() {
                    const { admin: e, isDownloadTranscriptButtonEnabled: t } = this.props,
                        { socialAccounts: n, calendarUrl: a } = e;
                    return 0 !== n.length || a
                        ? o.a.createElement(
                              Tt,
                              { isDownloadTranscriptButtonEnabled: t },
                              this.renderSocialAccountIcons(),
                              this.renderCalendarIcon()
                          )
                        : null;
                }
                renderCalendarIcon() {
                    const { calendarUrl: e } = this.props.admin;
                    return e
                        ? o.a.createElement(
                              'a',
                              {
                                  href: e,
                                  'aria-label': Object(O.e)('teammate_calendar_link'),
                                  target: '_blank',
                                  onClick: this.handleCalendarIconClick,
                                  tabIndex: '0',
                              },
                              o.a.createElement(Ke, null)
                          )
                        : null;
                }
                renderSocialAccountIcons() {
                    const { socialAccounts: e } = this.props.admin,
                        t = 0 === this.props.percentageCollapsed;
                    return e.map((e, n) => {
                        const { profileUrl: a, provider: r } = e;
                        return o.a.createElement(
                            'a',
                            {
                                key: n,
                                href: a,
                                target: '_blank',
                                onClick: this.handleSocialAccountClick,
                                'aria-label': Object(O.e)('teammate_profile', { provider: r }),
                                tabIndex: t ? 0 : -1,
                            },
                            this.renderSocialAccountIcon(r)
                        );
                    });
                }
                renderSocialAccountIcon(e) {
                    switch (e) {
                        case 'linkedin':
                            return o.a.createElement(Ze, null);
                        case 'twitter':
                            return o.a.createElement(Ye, null);
                        default:
                            return null;
                    }
                }
                locationExists() {
                    const { location: e } = this.props.admin;
                    if (!e) return !1;
                    const { countryName: t } = e;
                    return t && t.length > 0;
                }
                getLocationText(e) {
                    const { cityName: t, countryName: n } = e;
                    return t && t.length > 0 ? `${t}, ${n}` : n;
                }
                getTimeText(e) {
                    if (null != e) return Object(lt.b)(new Date(), e);
                }
                renderLocation() {
                    const { location: e } = this.props.admin,
                        t = this.getLocationText(e),
                        n = this.getTimeText(e.timezoneOffset);
                    return o.a.createElement(
                        At,
                        null,
                        o.a.createElement(st, null),
                        n ? Object(O.e)('profile_location', { time: n, location: t }) : t
                    );
                }
                renderRemainingParticipantCount(e) {
                    return 0 === e
                        ? null
                        : o.a.createElement(
                              Ht,
                              null,
                              Object(O.e)('plus_x_participants', { count: e })
                          );
                }
                renderConversationParticipants() {
                    const { participants: e } = this.props,
                        t = e.slice(0, 13),
                        n = e.slice(13).length;
                    return o.a.createElement(
                        Bt,
                        null,
                        o.a.createElement(Rt, null, Object(O.e)('also_in_this_conversation')),
                        o.a.createElement(
                            Mt,
                            null,
                            t.map((e, t) =>
                                o.a.createElement(
                                    conversation_participant_ConversationParticipant,
                                    Lt({ key: t }, e)
                                )
                            ),
                            this.renderRemainingParticipantCount(n)
                        )
                    );
                }
                renderJobTitleAndLocation() {
                    const { jobTitle: e } = this.props.admin,
                        t = this.locationExists();
                    return e || t
                        ? o.a.createElement(
                              Ct,
                              null,
                              e
                                  ? o.a.createElement(
                                        Ot,
                                        null,
                                        o.a.createElement(it, null),
                                        o.a.createElement(ke.a, { text: e })
                                    )
                                  : null,
                              t ? this.renderLocation() : null
                          )
                        : null;
                }
                renderFull() {
                    const { admin: e, isCloseButtonEnabled: t } = this.props,
                        { firstName: n, intro: a } = e,
                        r = this.getFullStyle();
                    return o.a.createElement(
                        ut,
                        {
                            style: r,
                            'aria-hidden': 0 === r.opacity,
                            hasParticipants: this.shouldRenderParticipants(),
                            isCloseButtonEnabled: t,
                        },
                        o.a.createElement(
                            gt,
                            null,
                            o.a.createElement(je.a, { admin: e, size: 60 }),
                            this.renderActiveOrAwayState()
                        ),
                        o.a.createElement(
                            bt,
                            null,
                            o.a.createElement(ft, null, n),
                            o.a.createElement(vt, null, this.adminState())
                        ),
                        this.renderJobTitleAndLocation(),
                        a
                            ? o.a.createElement(
                                  xt,
                                  null,
                                  o.a.createElement(ct, null),
                                  o.a.createElement(yt, { text: a })
                              )
                            : null,
                        this.renderPublicLinks(),
                        this.shouldRenderParticipants()
                            ? this.renderConversationParticipants()
                            : null
                    );
                }
                renderCompactBody() {
                    const { firstName: e } = this.props.admin;
                    return o.a.createElement(
                        Et,
                        null,
                        o.a.createElement(
                            kt,
                            null,
                            o.a.createElement(je.a, { admin: this.props.admin }),
                            this.renderActiveOrAwayState()
                        ),
                        o.a.createElement(
                            St,
                            null,
                            o.a.createElement(_t, null, e),
                            o.a.createElement(Nt, null, this.adminState())
                        )
                    );
                }
                renderParticipantCompactBody() {
                    const { firstName: e, initial: t, avatar: n, isActive: a } = this.props.admin,
                        r = [{ name: e, type: 'Admin', isActive: a, initial: t, avatar: n }].concat(
                            this.props.participants
                        ),
                        i = this.props.participants.length;
                    return o.a.createElement(
                        Et,
                        null,
                        o.a.createElement(Ee.a, { admins: r }),
                        o.a.createElement(
                            St,
                            null,
                            o.a.createElement(
                                Pt,
                                null,
                                i > 1
                                    ? Object(O.e)('name_and_x_others', { name: e, count: i })
                                    : Object(O.e)('name_and_1_other', { name: e })
                            )
                        )
                    );
                }
                renderCompact() {
                    const { onExpand: e, percentageCollapsed: t } = this.props,
                        n = this.getCompactStyle(),
                        a = 1 !== t;
                    return o.a.createElement(
                        jt,
                        Lt(
                            {
                                style: n,
                                'aria-hidden': 0 === n.opacity,
                                'aria-expanded': a,
                                tabIndex: a ? '-1' : '0',
                                role: a ? 'region' : 'button',
                            },
                            a ? {} : { 'aria-label': Object(O.e)('expand_header') },
                            { onClick: e }
                        ),
                        this.shouldRenderParticipants()
                            ? this.renderParticipantCompactBody()
                            : this.renderCompactBody()
                    );
                }
                render() {
                    const e = 1 === this.props.percentageCollapsed;
                    return o.a.createElement(
                        pt,
                        { isCollapsed: e },
                        this.renderFull(),
                        this.renderCompact()
                    );
                }
            }
            admin_profile_AdminProfile.propTypes = {
                admin: et.a.shape({
                    firstName: et.a.string.isRequired,
                    initial: et.a.string,
                    lastActiveAt: et.a.instanceOf(Date),
                    isActive: et.a.bool,
                    isBot: et.a.bool,
                    socialAccounts: et.a.arrayOf(
                        et.a.shape({
                            profileUrl: et.a.string.isRequired,
                            provider: et.a.string.isRequired,
                        })
                    ).isRequired,
                    avatar: et.a.shape({ square128: et.a.string }),
                    location: et.a.shape({
                        cityName: et.a.string,
                        countryName: et.a.string,
                        countryCode: et.a.string,
                        timezoneOffset: et.a.number,
                    }),
                    jobTitle: et.a.string,
                    calendarUrl: et.a.string,
                    intro: et.a.string,
                }),
                participants: et.a.arrayOf(
                    et.a.shape({
                        name: et.a.string,
                        initial: et.a.string,
                        avatar: et.a.object,
                        type: et.a.oneOf(['Admin', 'User', 'Team']),
                    })
                ).isRequired,
                percentageCollapsed: et.a.number,
                isCloseButtonEnabled: et.a.bool,
                onExpand: et.a.func,
                isDownloadTranscriptButtonEnabled: et.a.bool,
            };
            var Ft = Object(h.connect)(e => ({ isCloseButtonEnabled: Object(Oe.a)(e) }))(
                    admin_profile_AdminProfile
                ),
                zt = n(7);
            const Dt = Object(f.d)(
                    '0%{opacity:0;transform:translateX(20px);}100%{opacity:1;transform:translateX(0);}'
                ),
                It = Object(f.d)(
                    '0%{opacity:0;transform:translateX(10px);}100%{opacity:1;transform:translateX(0);}'
                ),
                Wt = Object(f.d)(
                    '0%{opacity:1;transform:translateX(0);}100%{opacity:0;transform:translateX(20px);}'
                ),
                Ut = Object(f.d)(
                    '0%{opacity:1;transform:translateX(0);}100%{opacity:0;transform:translateX(10px);}'
                ),
                Vt = Object(f.c)('div', { target: 'efz2uwp0' })(),
                qt = Object(f.c)('div', { target: 'efz2uwp1' })(
                    'position:absolute;top:0;left:0;right:0;outline-offset:-5px;',
                    ({ isCloseButtonEnabled: e }) =>
                        e &&
                        Object(f.b)(
                            jt.className,
                            ',',
                            Ie.className,
                            '{right:61px;}',
                            Tt.className,
                            '{position:inherit;margin-top:11px;',
                            Je.className,
                            ',',
                            $e.className,
                            ',',
                            Ge.className,
                            '{margin-left:0;margin-right:16px;}}'
                        ),
                    ' &.intercom-messenger-header-view-enter{',
                    Vt.className,
                    '{animation-name:',
                    Dt,
                    ';animation-duration:',
                    '250ms',
                    ';animation-delay:',
                    '250ms',
                    ';animation-timing-function:',
                    'ease-out',
                    ';animation-fill-mode:both;}',
                    _.className,
                    '{animation-name:',
                    It,
                    ';animation-duration:',
                    '250ms',
                    ';animation-delay:',
                    '250ms',
                    ';animation-timing-function:',
                    'ease-out',
                    ';animation-fill-mode:both;}.intercom-download-transcript-button{animation-name:',
                    It,
                    ';animation-duration:',
                    '250ms',
                    ';animation-delay:',
                    '250ms',
                    ';animation-timing-function:',
                    'ease-out',
                    ';animation-fill-mode:both;}}&.intercom-messenger-header-view-exit{',
                    Vt.className,
                    '{animation-name:',
                    Wt,
                    ';animation-duration:',
                    '250ms',
                    ';animation-delay:',
                    '0s',
                    ';animation-timing-function:',
                    'ease-out',
                    ';animation-fill-mode:both;}',
                    _.className,
                    '{animation-name:',
                    Ut,
                    ';animation-duration:',
                    '250ms',
                    ';animation-delay:',
                    '0s',
                    ';animation-timing-function:',
                    'ease-out',
                    ';animation-fill-mode:both;}.intercom-download-transcript-button{animation-name:',
                    Ut,
                    ';animation-duration:',
                    '250ms',
                    ';animation-delay:',
                    '0s',
                    ';animation-timing-function:',
                    'ease-out',
                    ';animation-fill-mode:both;}}'
                );
            function Xt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t &&
                        (a = a.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        n.push.apply(n, a);
                }
                return n;
            }
            function Gt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? Xt(n, !0).forEach(function(t) {
                              Zt(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : Xt(n).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                          });
                }
                return e;
            }
            function Zt(e, t, n) {
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
            class conversation_header_ConversationHeader extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        Zt(this, 'node', void 0),
                        Zt(this, 'expectedReplyText', () => {
                            const { expectedResponseDelayTranslationKey: e } = this.props;
                            return Object(O.e)(e);
                        });
                }
                componentDidMount() {
                    this.calculateHeight();
                }
                componentDidUpdate(e) {
                    const t = Gt({}, e.lastParticipatingAdmin, { lastActiveAt: null }),
                        n = Gt({}, this.props.lastParticipatingAdmin, { lastActiveAt: null });
                    c()(t, n) || this.calculateHeight();
                }
                calculateHeight() {
                    if (!this.node) return;
                    const { height: e } = this.node.getBoundingClientRect();
                    this.props.onHeightChange(e);
                }
                render() {
                    const {
                            lastParticipatingAdmin: e,
                            participants: t,
                            appName: n,
                            appAdmins: a,
                            appTeamIntro: r,
                            teamName: i,
                            teamAdmins: s,
                            compactExpectedResponseDelay: c,
                            officeHoursResponse: l,
                            percentageCollapsed: d,
                            onExpand: p,
                            isCloseButtonEnabled: m,
                        } = this.props,
                        h = 1 !== d,
                        u = !Object(zt.g)() && h && !!e;
                    return o.a.createElement(
                        qt,
                        { ref: e => (this.node = e), isCloseButtonEnabled: m },
                        o.a.createElement(we, {
                            currentView: 'conversation',
                            percentageCollapsed: d,
                            isDownloadTranscriptButtonEnabled: u,
                        }),
                        o.a.createElement(
                            Vt,
                            null,
                            e
                                ? o.a.createElement(Ft, {
                                      appName: n,
                                      admin: e,
                                      participants: t,
                                      percentageCollapsed: d,
                                      onExpand: p,
                                      isDownloadTranscriptButtonEnabled: u,
                                  })
                                : o.a.createElement(team_profile_TeamProfile, {
                                      appName: i || n,
                                      appAdmins: s || a,
                                      appTeamIntro: r,
                                      appExpectedResponseDelay: this.expectedReplyText(),
                                      appCompactExpectedResponseDelay: c,
                                      officeHoursResponse: l,
                                      percentageCollapsed: d,
                                      outOfOffice: void 0 !== l,
                                      onExpand: p,
                                  })
                        )
                    );
                }
            }
            var $t = Object(h.connect)(e => {
                const t = Object(ye.a)(e),
                    { parts: n, lastParticipatingAdmin: a, participants: o } = t,
                    {
                        name: r,
                        teamIntro: i,
                        activeAdmins: s,
                        expectedResponseDelayTranslationKey: c,
                        compactExpectedResponseDelay: l,
                        officeHoursResponse: d,
                        isIntercomLinkEnabled: p,
                    } = e.app,
                    m = Object(Oe.a)(e);
                let h, u;
                const g = n[0] ? n[0].teamAuthor : void 0;
                return (
                    g && ((h = g.name), (u = g.admins)),
                    {
                        appName: r,
                        appAdmins: s,
                        appTeamIntro: i,
                        teamName: h,
                        teamAdmins: u,
                        lastParticipatingAdmin: a,
                        participants: o,
                        expectedResponseDelayTranslationKey: c,
                        compactExpectedResponseDelay: l,
                        officeHoursResponse: d,
                        isIntercomLinkEnabled: p,
                        isCloseButtonEnabled: m,
                    }
                );
            })(conversation_header_ConversationHeader);
            const Yt = Object(f.d)(
                    '0%{opacity:0;transform:translateX(-20px);}100%{opacity:1;transform:translateX(0);}'
                ),
                Jt = Object(f.d)(
                    '0%{opacity:0;transform:translateX(-10px);}100%{opacity:1;transform:translateX(0);}'
                ),
                Kt = Object(f.d)(
                    '0%{opacity:1;transform:translateX(0);}100%{opacity:0;transform:translateX(-20px);}'
                ),
                Qt = Object(f.d)(
                    '0%{opacity:1;transform:translateX(0);}100%{opacity:0;transform:translateX(-10px);}'
                ),
                en = Object(f.d)(
                    '0%{opacity:0;transform:translateX(20px);}100%{opacity:1;transform:translateX(0);}'
                ),
                tn = Object(f.d)(
                    '0%{opacity:0;transform:translateX(10px);}100%{opacity:1;transform:translateX(0);}'
                ),
                nn = Object(f.d)(
                    '0%{opacity:1;transform:translateX(0);}100%{opacity:0;transform:translateX(20px);}'
                ),
                an = Object(f.d)(
                    '0%{opacity:1;transform:translateX(0);}100%{opacity:0;transform:translateX(10px);}'
                ),
                on = Object(f.c)('h2', { target: 'e1i6jf5t0' })(
                    'color:',
                    Object(f.f)('headerTitleColor'),
                    ';font-size:20px;text-align:center;line-height:75px;'
                ),
                rn = Object(f.c)('div', { target: 'e1i6jf5t1' })(
                    'position:absolute;top:0;left:0;right:0;height:75px;',
                    N.className,
                    '{display:none;}&.intercom-messenger-header-view-enter{',
                    on.className,
                    '{animation-name:',
                    en,
                    ';animation-duration:',
                    '250ms',
                    ';animation-delay:',
                    '250ms',
                    ';animation-timing-function:',
                    'ease-out',
                    ';animation-fill-mode:both;}',
                    _.className,
                    '{animation-name:',
                    tn,
                    ';animation-duration:',
                    '250ms',
                    ';animation-delay:',
                    '250ms',
                    ';animation-timing-function:',
                    'ease-out',
                    ';animation-fill-mode:both;}}&.intercom-messenger-header-view-exit{',
                    on.className,
                    '{animation-name:',
                    nn,
                    ';animation-duration:',
                    '250ms',
                    ';animation-delay:',
                    '0s',
                    ';animation-timing-function:',
                    'ease-out',
                    ';animation-fill-mode:both;}',
                    _.className,
                    '{animation-name:',
                    an,
                    ';animation-duration:',
                    '250ms',
                    ';animation-delay:',
                    '0s',
                    ';animation-timing-function:',
                    'ease-out',
                    ';animation-fill-mode:both;}}.intercom-messenger-from-conversation &.intercom-messenger-header-view-enter,.intercom-messenger-from-new-conversation &.intercom-messenger-header-view-enter{',
                    on.className,
                    '{animation-name:',
                    Yt,
                    ';}',
                    _.className,
                    '{animation-name:',
                    Jt,
                    ';}}.intercom-messenger-conversation &.intercom-messenger-header-view-exit,.intercom-messenger-new-conversation &.intercom-messenger-header-view-exit{',
                    on.className,
                    '{animation-name:',
                    Kt,
                    ';}',
                    _.className,
                    '{animation-name:',
                    Qt,
                    ';}}'
                );
            class conversations_header_ConversationsHeader extends a.Component {
                constructor(...e) {
                    var t, n, a;
                    super(...e),
                        (a = void 0),
                        (n = 'node') in (t = this)
                            ? Object.defineProperty(t, n, {
                                  value: a,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                              })
                            : (t[n] = a);
                }
                componentDidMount() {
                    if (!this.node) return;
                    const { height: e } = this.node.getBoundingClientRect();
                    this.props.onHeightChange(e);
                }
                renderBody() {
                    return o.a.createElement(on, null, Object(O.e)('your_conversations'));
                }
                render() {
                    return o.a.createElement(
                        rn,
                        { ref: e => (this.node = e) },
                        o.a.createElement(we, { currentView: 'conversations' }),
                        this.renderBody()
                    );
                }
            }
            var sn = Object(h.connect)(e => ({ appName: e.app.name }))(
                conversations_header_ConversationsHeader
            );
            const cn = {
                    name: '72rvq0',
                    styles: 'white-space:nowrap;text-overflow:ellipsis;overflow:hidden;',
                },
                ln = Object(f.c)('div', { target: 'ea5aea20' })(
                    cn,
                    ' > span{',
                    cn,
                    '}> span > span{white-space:pre;}'
                );
            var dn = n(10);
            function pn(e, t, n) {
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
            class fit_text_FitText extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        pn(this, 'canvas', void 0),
                        pn(this, 'node', void 0),
                        pn(this, 'state', { maxWidth: -1 }),
                        pn(this, 'canvas', window.parent.document.createElement('canvas')),
                        pn(this, 'setMaxWidth', () => {
                            const { node: e } = this;
                            if (!e) return;
                            const { width: t } = e.getBoundingClientRect();
                            this.setState({ maxWidth: this.props.maxWidth || t }, () => {
                                const { onTextFit: e } = this.props;
                                e && setTimeout(() => e(), 1);
                            });
                        });
                }
                componentDidMount() {
                    this.setMaxWidth();
                }
                getCanvasFontSize() {
                    const e = this.canvas.getContext('2d').font.match(/\d+/);
                    return e ? e[0] : this.props.minFontSize;
                }
                fitTextSize() {
                    if (!this.canvas) return;
                    const { children: e, minFontSize: t, maxFontSize: n } = this.props;
                    if (!e || !e.props || !e.props.text)
                        return void Object(dn.a)(
                            'The child of a FitText component has to be either a Text component or a styled component wrapping a Text component.'
                        );
                    const a = this.canvas.getContext('2d').measureText(e.props.text),
                        o = this.getCanvasFontSize(),
                        r = Math.floor(
                            (parseFloat(o) * parseInt(this.state.maxWidth, 10)) / a.width
                        );
                    return r > t && r < n ? r : r >= n ? n : t;
                }
                getStyle() {
                    return this.state.maxWidth
                        ? { fontSize: this.fitTextSize(), maxWidth: this.state.maxWidth }
                        : {};
                }
                render() {
                    return o.a.createElement(
                        ln,
                        { ref: e => (this.node = e), style: this.getStyle() },
                        this.props.children
                    );
                }
            }
            const mn = Object(f.d)(
                    '0%{opacity:0;transform:translateY(20px);}100%{opacity:1;transform:translateY(0);}'
                ),
                hn = Object(f.d)(
                    '0%{opacity:0;transform:translateX(-20px);}100%{opacity:1;transform:translateX(0);}'
                ),
                un = Object(f.d)(
                    '0%{opacity:1;transform:translateX(0);}100%{opacity:0;transform:translateX(-20px);}'
                ),
                gn = Object(f.c)('div', { target: 'e1n5ubry0' })(({ parallaxY: e, opacity: t }) =>
                    Object(f.b)('transform:translateY(', e, 'px);opacity:', t, ';')
                ),
                bn = Object(f.c)('div', { target: 'e1n5ubry1' })(),
                fn = Object(f.c)('div', { target: 'e1n5ubry2' })({
                    name: '19b3utr',
                    styles:
                        'height:32px;padding-bottom:16px;img{max-width:100%;max-height:100%;margin:auto 0;display:block;}',
                }),
                vn = Object(f.c)(ke.a, { target: 'e1n5ubry3' })(
                    'color:',
                    Object(f.f)('headerTitleColor'),
                    ';display:block;line-height:1.5em;'
                ),
                xn = Object(f.c)(ke.a, { target: 'e1n5ubry4' })(
                    'color:',
                    Object(f.f)('headerTextColor'),
                    ';display:block;font-size:1em;line-height:1.5em;overflow-wrap:break-word;word-wrap:break-word;'
                );
            var yn = { name: '17yz4p5', styles: 'padding-right:51px;' };
            const Cn = Object(f.c)('div', { target: 'e1n5ubry5' })(
                'position:absolute;top:0;left:0;right:0;padding:24px 40px;padding-bottom:87px;box-sizing:border-box;',
                ({ isCloseButtonEnabled: e }) => e && yn,
                ' &.intercom-messenger-header-view-appear{',
                bn.className,
                '{animation-name:',
                mn,
                ';animation-duration:',
                '250ms',
                ';animation-delay:',
                '300ms',
                ';animation-timing-function:',
                'ease-out',
                ';animation-fill-mode:both;}}&.intercom-messenger-header-view-enter{',
                bn.className,
                '{animation-name:',
                hn,
                ';animation-duration:',
                '250ms',
                ';animation-delay:',
                '150ms',
                ';animation-timing-function:',
                'ease-out',
                ';animation-fill-mode:both;}}',
                ({ wasBooting: e }) =>
                    e &&
                    Object(f.b)(
                        '&.intercom-messenger-header-view-enter{',
                        bn.className,
                        '{animation-name:',
                        mn,
                        ';animation-duration:',
                        '250ms',
                        ';animation-delay:',
                        '0s',
                        ';animation-timing-function:',
                        'ease-out',
                        ';animation-fill-mode:both;}}'
                    ),
                ' &.intercom-messenger-header-view-exit{',
                bn.className,
                '{animation-name:',
                un,
                ';animation-duration:',
                '250ms',
                ';animation-delay:',
                '0s',
                ';animation-timing-function:',
                'ease-out',
                ';animation-fill-mode:both;}}'
            );
            function On(e, t, n) {
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
            const wn = e => (e / 4) * -1;
            class home_screen_header_HomeScreenHeader extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        On(this, 'node', void 0),
                        On(this, 'handleHeightChange', () => {
                            if (!this.node) return;
                            const { height: e } = this.node.getBoundingClientRect();
                            this.props.onHeightChange(e);
                        });
                }
                componentDidMount() {
                    this.handleHeightChange();
                }
                render() {
                    const {
                            teamGreeting: e,
                            teamIntro: t,
                            logoUrl: n,
                            appName: a,
                            parallaxOpacity: r,
                            isCloseButtonEnabled: i,
                            bodyScrollTop: s,
                            wasBooting: c,
                        } = this.props,
                        l = `${a} logo`;
                    return o.a.createElement(
                        Cn,
                        { ref: e => (this.node = e), isCloseButtonEnabled: i, wasBooting: c },
                        o.a.createElement(we, { currentView: 'home-screen' }),
                        o.a.createElement(
                            gn,
                            { opacity: r, parallaxY: wn(s) },
                            o.a.createElement(
                                bn,
                                null,
                                n
                                    ? o.a.createElement(
                                          fn,
                                          null,
                                          o.a.createElement('img', { src: n, alt: l })
                                      )
                                    : null,
                                e
                                    ? o.a.createElement(
                                          'h1',
                                          null,
                                          o.a.createElement(
                                              fit_text_FitText,
                                              {
                                                  minFontSize: 20,
                                                  maxFontSize: 32,
                                                  onTextFit: this.handleHeightChange,
                                              },
                                              o.a.createElement(vn, { text: e })
                                          )
                                      )
                                    : null,
                                t
                                    ? o.a.createElement(
                                          'h2',
                                          null,
                                          o.a.createElement(xn, { text: t })
                                      )
                                    : null
                            )
                        )
                    );
                }
            }
            var jn,
                En,
                kn,
                Sn = Object(h.connect)(e => {
                    const { teamGreeting: t, teamIntro: n, logoUrl: a, name: o } = e.app;
                    return {
                        teamGreeting: t,
                        teamIntro: n,
                        logoUrl: a,
                        appName: o,
                        isCloseButtonEnabled: Object(Oe.a)(e),
                    };
                })(home_screen_header_HomeScreenHeader);
            class empty_header_EmptyHeader extends a.PureComponent {
                render() {
                    return o.a.createElement(we, {
                        currentView: 'empty-screen',
                        isBackButtonEnabled: !1,
                    });
                }
            }
            function _n() {
                return (_n =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            (kn = { isCloseButtonEnabled: !0 }),
                (En = 'defaultProps') in (jn = empty_header_EmptyHeader)
                    ? Object.defineProperty(jn, En, {
                          value: kn,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (jn[En] = kn);
            const Pn = Object(u.createStructuredSelector)({
                backgroundImage: e => e.app.backgroundImage,
            });
            var Nn = Object(h.connect)(Pn)(function(e) {
                    const {
                            currentView: t,
                            isBooting: n,
                            wasBooting: a,
                            percentageCollapsed: r,
                            bodyScrollTop: i,
                            height: s,
                            frameWindow: c,
                            onExpand: l,
                            onHeightChange: d,
                            parallaxOpacity: p,
                            backgroundImage: m,
                        } = e,
                        h = 0 !== r && 1 !== r,
                        { backgroundUrl: u, backgroundSize: g } = A(m);
                    return o.a.createElement(
                        j,
                        {
                            style: { height: s },
                            className: 'intercom-messenger-header',
                            isScrolling: h,
                            backgroundUrl: u,
                            backgroundSize: g,
                        },
                        o.a.createElement(
                            b.TransitionGroup,
                            { appear: !0 },
                            (() => {
                                const e = {
                                    key: n ? 'booting' : t,
                                    classNames: 'intercom-messenger-header-view',
                                    timeout: { enter: 500, exit: 250 },
                                };
                                return n
                                    ? o.a.createElement(
                                          b.CSSTransition,
                                          e,
                                          o.a.createElement(booting_header_BootingHeader, {
                                              key: 'booting',
                                              onHeightChange: d,
                                          })
                                      )
                                    : 'home-screen' === t
                                    ? o.a.createElement(
                                          b.CSSTransition,
                                          e,
                                          o.a.createElement(Sn, {
                                              parallaxOpacity: p,
                                              height: s,
                                              bodyScrollTop: i,
                                              onHeightChange: d,
                                              wasBooting: a,
                                          })
                                      )
                                    : 'conversations' === t
                                    ? o.a.createElement(
                                          b.CSSTransition,
                                          e,
                                          o.a.createElement(sn, {
                                              key: 'conversations',
                                              onHeightChange: d,
                                          })
                                      )
                                    : 'empty-screen' === t || 'messenger-trigger' === t
                                    ? o.a.createElement(
                                          b.CSSTransition,
                                          e,
                                          o.a.createElement(empty_header_EmptyHeader, {
                                              key: 'empty',
                                          })
                                      )
                                    : 'conversation' === t || 'new-conversation' === t
                                    ? o.a.createElement(
                                          b.CSSTransition,
                                          _n({}, e, { key: 'conversation' }),
                                          o.a.createElement($t, {
                                              percentageCollapsed: r,
                                              frameWindow: c,
                                              onExpand: l,
                                              onHeightChange: d,
                                          })
                                      )
                                    : void 0;
                            })()
                        )
                    );
                }),
                Tn = n(609),
                An = n(580),
                Hn = n(57),
                Bn = n(87);
            var Rn = Object(h.connect)(
                    e => {
                        const { bootFailed: t } = e.app,
                            { url: n, customAttributes: a, anonymousSessionDuration: o } = e.user,
                            { launcherEnabledOverride: r } = e.launcher,
                            { alignment: i, horizontalPadding: s, verticalPadding: c } = Object(
                                Bn.a
                            )(e);
                        return {
                            bootFailed: t,
                            url: n,
                            customAttributes: a,
                            launcherEnabledOverride: r,
                            anonymousSessionDuration: o,
                            customizationAttributes: {
                                alignment: i,
                                horizontalPadding: s,
                                verticalPadding: c,
                            },
                        };
                    },
                    e => ({
                        onRetryClick(t, n, a, o, r) {
                            e(Object(Hn.b)($.b, null, t, n, a, o, r, !0));
                        },
                    }),
                    (e, t) =>
                        Object.assign({}, e, t, {
                            onRetryClick() {
                                const {
                                    url: n,
                                    customAttributes: a,
                                    launcherEnabledOverride: o,
                                    anonymousSessionDuration: r,
                                    customizationAttributes: i,
                                } = e;
                                t.onRetryClick(n, a, o, r, i);
                            },
                        })
                )(An.a),
                Mn = n(444),
                Ln = n(479);
            class messenger_trigger_screen_MessengerTriggerScreen extends a.PureComponent {
                renderError() {
                    return o.a.createElement(
                        Ln.a,
                        { duration: 200 },
                        o.a.createElement(
                            le.a,
                            null,
                            o.a.createElement(le.b, null, Object(O.e)('something_is_wrong')),
                            o.a.createElement(
                                le.c,
                                null,
                                Object(O.e)('unable_to_load_the_messenger')
                            ),
                            o.a.createElement(
                                le.e,
                                null,
                                o.a.createElement(
                                    le.d,
                                    { onClick: this.props.handleTryAgain },
                                    Object(O.e)('try_again')
                                )
                            )
                        )
                    );
                }
                renderLoading() {
                    return o.a.createElement(
                        Ln.a,
                        { duration: 200 },
                        o.a.createElement(Mn.a, null)
                    );
                }
                render() {
                    const { failed: e } = this.props;
                    return o.a.createElement(
                        le.g,
                        null,
                        e && this.renderError(),
                        !e && this.renderLoading()
                    );
                }
            }
            var Fn = n(64),
                zn = n(115);
            function Dn() {
                return e => {
                    e(Object(Fn.e)($.b));
                };
            }
            var In = Object(h.connect)(
                    function(e) {
                        return { failed: Object(zn.b)(e) };
                    },
                    function(e) {
                        return Object(m.bindActionCreators)({ handleTryAgain: Dn }, e);
                    }
                )(messenger_trigger_screen_MessengerTriggerScreen),
                Wn = n(618);
            const Un = Object(f.c)('span', { target: 'e8nm57p0' })({
                    name: '1ckzipv',
                    styles:
                        'position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;justify-content:center;',
                }),
                Vn = Object(f.c)(Wn.a, { target: 'e8nm57p1' })(
                    'text-align:center;border-radius:9999px;border:2px solid;box-sizing:border-box;color:',
                    Object(f.f)('grey'),
                    ';position:relative;display:block;font-weight:700;padding:0 24px;min-height:40px;margin:0 auto;user-select:none;'
                );
            var qn = n(601);
            class empty_screen_EmptyScreen extends a.PureComponent {
                render() {
                    return o.a.createElement(
                        Un,
                        null,
                        o.a.createElement(
                            qn.b,
                            { align: 'center', isBottomNone: !0 },
                            Object(O.e)('nothing_to_see_here_yet')
                        ),
                        o.a.createElement(
                            qn.b,
                            { variant: 'muted', align: 'center' },
                            Object(O.e)('no_messages_from_the_team')
                        ),
                        o.a.createElement(Vn, {
                            label: Object(O.e)('close'),
                            onClick: this.props.handleCloseMessenger,
                        })
                    );
                }
            }
            var Xn = Object(h.connect)(
                    function(e) {
                        const { isIntercomLinkEnabled: t } = e.app;
                        return { isIntercomLinkEnabled: t };
                    },
                    function(e) {
                        return {
                            handleCloseMessenger() {
                                e(ve.b.closeMessenger());
                            },
                        };
                    }
                )(empty_screen_EmptyScreen),
                Gn = n(48),
                Zn = n(5);
            var $n = Object(u.createSelector)(
                Gn.a,
                e => e.newConversation,
                (e, t) => {
                    const n = Date.now() - 2592e5,
                        a = Object(Zn.t)(e).filter(e => e.lastPartCreatedAt > n);
                    return (
                        t &&
                            1 === t.parts.length &&
                            'saving' === t.parts[0].saveState &&
                            a.unshift(t),
                        { recentConversations: a }
                    );
                }
            );
            const Yn = Object(f.c)('button', { target: 'esf9qb10' })(
                    'height:40px;color:',
                    Object(f.f)('buttonTextColor'),
                    ';font-size:13px;line-height:40px;pointer-events:auto;cursor:pointer;border-radius:40px;text-align:center;transition:all 120ms;padding:0 24px;span{padding-left:10px;white-space:nowrap;font-weight:600;}',
                    ({ variant: e, theme: t }) =>
                        'default' === e &&
                        Object(f.b)(
                            'background-color:',
                            t.buttonBackgroundColor,
                            ';color:',
                            t.buttonTextColor,
                            ';transition:color 0.3s,background-color 0.3s;&:hover{background-color:',
                            t.buttonBackgroundColorHover,
                            ';}&:active{background-color:',
                            t.buttonBackgroundColorActive,
                            ';}'
                        ),
                    ' ',
                    ({ variant: e, theme: t }) =>
                        'secondary' === e &&
                        t.isPrimaryColorLight &&
                        Object(f.b)(
                            'background-color:',
                            t.buttonBackgroundColor,
                            ';color:',
                            t.buttonTextColor,
                            ';transition:color 0.3s,background-color 0.3s;border:1px solid ',
                            t.lightGrey2,
                            ';&:hover{background-color:',
                            t.buttonBackgroundColorHover,
                            ';}&:active{background-color:',
                            t.buttonBackgroundColorActive,
                            ';}'
                        ),
                    ' ',
                    ({ variant: e, theme: t }) =>
                        'secondary' === e &&
                        !t.isPrimaryColorLight &&
                        Object(f.b)(
                            'background-color:',
                            t.white,
                            ';color:',
                            t.buttonBackgroundColor,
                            ';border:1px solid ',
                            t.buttonBackgroundColor,
                            ';transition:color 0.3s,background-color 0.3s;&:hover{color:',
                            t.buttonBackgroundColorHover,
                            ';border:1px solid ',
                            t.buttonBackgroundColorHover,
                            ';}&:active{color:',
                            t.buttonBackgroundColorActive,
                            ';border:1px solid ',
                            t.buttonBackgroundColorActive,
                            ';}'
                        ),
                    ' ',
                    ({ variant: e, theme: t }) =>
                        'fixed' === e &&
                        Object(f.b)(
                            'background-color:',
                            t.appColor,
                            ';box-shadow:0px 4px 12px rgba(0,0,0,0.1);position:absolute;bottom:',
                            t.newConversationButtonBottomPx,
                            'px;left:50%;transform:translateX(-50%);&:hover{box-shadow:0 8px 24px rgba(0,0,0,0.2);}&:active{transform:translateX(-50%) translateY(2px);box-shadow:0px 4px 12px rgba(0,0,0,0.1);}'
                        )
                ),
                Jn = Object(f.c)('div', { target: 'esf9qb11' })({
                    name: '18biwo',
                    styles: 'display:inline-flex;align-items:center;',
                }),
                Kn = Object(f.c)('svg', { target: 'ecfs73l0' })(
                    'width:15px;height:16px;path{fill:',
                    Object(f.f)('buttonTextColor'),
                    ';}',
                    ({ variant: e, theme: t }) =>
                        !t.isPrimaryColorLight &&
                        'secondary' === e &&
                        Object(f.b)(
                            'path{fill:',
                            t.buttonBackgroundColor,
                            ';}',
                            Yn.className,
                            ':hover &{path{fill:',
                            t.buttonBackgroundColorHover,
                            ';}}',
                            Yn.className,
                            ':active{path{fill:',
                            t.buttonBackgroundColorActive,
                            ';}}'
                        ),
                    ' ',
                    S.i
                );
            function Qn({ variant: e }) {
                return o.a.createElement(
                    Kn,
                    { focusable: 'false', 'aria-hidden': 'true', viewBox: '0 0 15 16', variant: e },
                    o.a.createElement(
                        'g',
                        { transform: 'translate(-24.000000, -12.000000)' },
                        o.a.createElement('path', {
                            d:
                                'M25.4036262,27.3409362 C24.4176893,27.8509036 23.8195834,27.3951055 24.0683403,26.3201996 L25.0887779,21.910776 C25.2131242,21.3734618 25.7510472,20.8884231 26.3078778,20.8254187 L32.503417,20.1244045 C34.151155,19.9379658 34.1569707,19.6389088 32.503417,19.4549971 L26.3078778,18.7659164 C25.7589338,18.7048617 25.2129433,18.217839 25.0887779,17.6798715 L24.0683403,13.2586546 C23.8198614,12.1820783 24.408944,11.7182276 25.4036262,12.2327184 L38.22304,18.8634497 C39.208977,19.373417 39.2177223,20.1957141 38.22304,20.7102049 L25.4036262,27.3409362 Z',
                        })
                    )
                );
            }
            function ea(e, t, n) {
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
            class new_conversation_button_NewConversationButton extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        ea(this, 'handleNewConversationClick', () => {
                            this.addNewConversationMetric(), this.props.onClick();
                        }),
                        ea(this, 'addNewConversationMetric', () => {
                            Object(be.e)(
                                'clicked',
                                'new_conversation',
                                'messenger',
                                this.props.currentView,
                                {},
                                'm4_metric'
                            );
                        });
                }
                render() {
                    const { variant: e } = this.props;
                    return o.a.createElement(
                        Yn,
                        {
                            variant: e,
                            className: 'new-conversation-button',
                            onClick: this.handleNewConversationClick,
                        },
                        o.a.createElement(
                            Jn,
                            null,
                            o.a.createElement(Qn, { variant: e }),
                            o.a.createElement('span', null, Object(O.e)('send_us_a_message'))
                        )
                    );
                }
            }
            ea(new_conversation_button_NewConversationButton, 'defaultProps', {
                variant: 'default',
            });
            var ta = n(615),
                na = n(464);
            const aa = Object(f.c)('button', { target: 'ed73yuc0' })(
                'height:40px;color:',
                Object(f.f)('buttonTextColor'),
                ';background-color:',
                Object(f.f)('buttonBackgroundColor'),
                ';transition:color background-color 0.3s,all 120ms;font-size:13px;line-height:40px;pointer-events:auto;cursor:pointer;border-radius:40px;text-align:center;padding:0 24px;display:inline-flex;align-items:center;margin-right:8px;&:hover{background-color:',
                Object(f.f)('buttonBackgroundColorHover'),
                ';}&:active{background-color:',
                Object(f.f)('buttonBackgroundColorActive'),
                ';}span{padding-left:10px;white-space:nowrap;font-weight:600;}svg{width:16px;height:12px;path{fill:',
                Object(f.f)('buttonTextColor'),
                ';}}',
                ({ isSecondaryVariant: e, theme: t }) =>
                    e &&
                    !t.isPrimaryColorLight &&
                    Object(f.b)(
                        'background-color:',
                        t.white,
                        ';color:',
                        t.buttonBackgroundColor,
                        ';border:1px solid ',
                        t.buttonBackgroundColor,
                        ';transition:color background-color 0.3s;svg{path{fill:',
                        t.buttonBackgroundColor,
                        ';}}&:hover{background-color:',
                        t.white,
                        ';color:',
                        t.buttonBackgroundColorHover,
                        ';border:1px solid ',
                        t.buttonBackgroundColorHover,
                        ';svg{path{fill:',
                        t.buttonBackgroundColorHover,
                        ';}}}&:active{background-color:',
                        t.white,
                        ';color:',
                        t.buttonBackgroundColorActive,
                        ';border:1px solid ',
                        t.buttonBackgroundColorActive,
                        ';svg{path{fill:',
                        t.buttonBackgroundColorActive,
                        ';}}}'
                    )
            );
            function oa(e, t, n) {
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
            class new_message_button_NewMessageButton extends a.PureComponent {
                render() {
                    const e = 'secondary' === this.props.variant;
                    return o.a.createElement(
                        aa,
                        { onClick: this.props.onClick, isSecondaryVariant: e },
                        o.a.createElement(ta.a, null),
                        o.a.createElement('span', null, Object(O.e)('send_us_a_message'))
                    );
                }
            }
            oa(new_message_button_NewMessageButton, 'defaultProps', { variant: 'default' }),
                oa(new_message_button_NewMessageButton, 'contextType', na.a);
            var ra = n(497);
            const ia = Object(f.c)('div', { target: 'e1e91qmz0' })(
                'margin-right:6px;display:flex;flex-flow:row nowrap;justify-content:flex-start;',
                ra.a.className,
                '{border:2px solid ',
                Object(f.f)('white'),
                ';}'
            );
            var sa = { name: 'l8s9e4', styles: 'margin-left:-2px;' };
            const ca = Object(f.c)('div', { target: 'e1e91qmz1' })(
                'padding:0;display:inline-block;flex:1 1 56px;margin-left:-8px;',
                ({ isFirst: e }) => e && sa,
                ' ',
                ({ isFirst: e, avatarLeftmargin: t }) =>
                    !e && t && Object(f.b)('margin-left:', t, 'px;')
            );
            class admin_avatar_stack_AdminAvatarStack extends a.PureComponent {
                renderAvatarWithTooltip(e, t) {
                    const n = e.firstName || '';
                    return o.a.createElement(pe.a, { content: n, position: 'bottom' }, (n, a) =>
                        o.a.createElement(S.a, a, o.a.createElement(je.a, { admin: e, size: t }), n)
                    );
                }
                renderAdminAvatars() {
                    const {
                            admins: e,
                            maxAdmins: t,
                            showTooltip: n,
                            avatarPixelsToShow: a,
                            avatarSize: r,
                        } = this.props,
                        i = a - r;
                    return Object(Se.a)(e, t, !0).map((e, t) =>
                        o.a.createElement(
                            ca,
                            { key: t, isFirst: 0 === t, avatarLeftmargin: i },
                            n
                                ? this.renderAvatarWithTooltip(e, r)
                                : o.a.createElement(je.a, { admin: e, size: r })
                        )
                    );
                }
                render() {
                    return o.a.createElement(ia, null, this.renderAdminAvatars());
                }
            }
            !(function(e, t, n) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n);
            })(admin_avatar_stack_AdminAvatarStack, 'defaultProps', {
                avatarPixelsToShow: 44,
                avatarSize: 52,
                maxAdmins: 6,
                showTooltip: !1,
            });
            var la = Object(h.connect)(function(e) {
                    return { admins: e.app.activeAdmins };
                })(admin_avatar_stack_AdminAvatarStack),
                da = n(516);
            const pa = Object(f.c)('span', { target: 'e1i8lffg0' })({
                    name: 'jo1wi9',
                    styles: 'position:relative;white-space:nowrap;',
                }),
                ma = Object(f.c)('span', { target: 'e1i8lffg1' })(
                    'position:absolute;background-color:',
                    Object(f.f)('unreadDot'),
                    ';border-radius:50%;width:6px;height:6px;top:6px;'
                ),
                ha = Object(f.c)('span', { target: 'e1i8lffg2' })(({ isPadded: e }) => e && ua),
                ua = { name: 'ql1ic6', styles: 'padding-left:14px;' };
            class see_all_link_SeeAllLink extends a.PureComponent {
                getSeeAllClassnames() {
                    return d()({ 'intercom-anchor': !0, 'intercom-see-all-link': !0 });
                }
                render() {
                    const { linkText: e, onClick: t, showMore: n } = this.props;
                    return o.a.createElement(
                        pa,
                        null,
                        n ? o.a.createElement(ma, null) : null,
                        o.a.createElement(
                            ha,
                            { className: this.getSeeAllClassnames(), onClick: t, isPadded: n },
                            e
                        )
                    );
                }
            }
            const ga = Object(f.c)('div', { target: 'e16jz32a0' })({
                    name: 'icbmz8',
                    styles: 'padding:26px 24px 24px 24px;line-height:1.5;',
                }),
                ba = Object(f.c)('div', { target: 'e16jz32a1' })({
                    name: '70qvj9',
                    styles: 'display:flex;align-items:center;',
                }),
                fa = Object(f.c)('div', { target: 'e16jz32a2' })(
                    'display:flex;flex-wrap:wrap;align-items:center;margin-top:-10px;',
                    Yn.className,
                    '{margin-right:8px;}a{white-space:nowrap;}& > *{margin-top:10px;}'
                );
            class home_screen_start_conversation_card_body_HomeScreenStartConversationCardBody extends a.PureComponent {
                renderSeeAllLink() {
                    const {
                        hasMoreUnreadConversations: e,
                        onShowConversationsClick: t,
                    } = this.props;
                    return o.a.createElement(see_all_link_SeeAllLink, {
                        onClick: t,
                        showMore: e,
                        linkText: Object(O.e)('see_past_conversations'),
                    });
                }
                renderStartConversationButton() {
                    const {
                        shouldShowUpfrontEmailComposer: e,
                        onShowNewConversationsClick: t,
                    } = this.props;
                    return e
                        ? o.a.createElement(new_message_button_NewMessageButton, {
                              onClick: t,
                              currentView: 'home-screen',
                          })
                        : o.a.createElement(new_conversation_button_NewConversationButton, {
                              onClick: t,
                              currentView: 'home-screen',
                          });
                }
                renderStartConversationHeaderText() {
                    const e = this.props.shouldShowUpfrontEmailComposer
                        ? Object(O.e)('leave_us_a_message')
                        : Object(O.e)('start_a_conversation');
                    return o.a.createElement(da.a, {
                        style: 'header',
                        bottomMargin: 'none',
                        text: e,
                    });
                }
                render() {
                    const {
                        responseDelayMessage: e,
                        hasMoreConversations: t,
                        outOfOffice: n,
                    } = this.props;
                    return o.a.createElement(
                        ga,
                        { className: 'intercom-home-screen-start-conversation-card' },
                        this.renderStartConversationHeaderText(),
                        o.a.createElement(
                            ba,
                            { className: 'intercom-home-screen-start-conversation-card-message' },
                            n ? o.a.createElement(Pe, null) : null,
                            o.a.createElement(da.a, { style: 'muted', text: e })
                        ),
                        o.a.createElement(
                            fa,
                            null,
                            o.a.createElement(la, {
                                showTooltip: !0,
                                avatarSize: 52,
                                avatarPixelsToShow: 44,
                            }),
                            this.renderStartConversationButton(),
                            t ? this.renderSeeAllLink() : null
                        )
                    );
                }
            }
            !(function(e, t, n) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n);
            })(
                home_screen_start_conversation_card_body_HomeScreenStartConversationCardBody,
                'defaultProps',
                { allowNewConversation: !0 }
            );
            var va = Object(h.connect)(
                    function(e) {
                        const {
                                officeHoursResponse: t,
                                expectedResponseDelayTranslationKey: n,
                            } = e.app,
                            a = Object(i.i)(e),
                            o = Object(O.e)(n);
                        return {
                            outOfOffice: void 0 !== t,
                            responseDelayMessage: t || o,
                            shouldShowUpfrontEmailComposer: a,
                        };
                    },
                    e => ({
                        onShowConversationsClick: () => e(Object(ve.i)()),
                        onShowNewConversationsClick: () => e(Object(ve.j)()),
                    })
                )(home_screen_start_conversation_card_body_HomeScreenStartConversationCardBody),
                xa = n(40),
                ya = n(641),
                Ca = n(33),
                Oa = n(828),
                wa = n.n(Oa),
                ja = n(86),
                Ea = n(486);
            function ka(e, t, n) {
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
            class conversation_summary_ConversationSummary extends a.Component {
                constructor(...e) {
                    super(...e),
                        ka(this, 'node', null),
                        ka(this, 'handleClick', e => {
                            e.preventDefault();
                            const {
                                onClick: t,
                                conversation: { id: n },
                            } = this.props;
                            t(n);
                        });
                }
                componentDidMount() {
                    this.node && 0 === this.props.rowIndex && this.node.focus();
                }
                getConversationParts() {
                    return this.props.conversation.parts.filter(
                        e => !1 === Object(ja.a)(e.partType)
                    );
                }
                getFirstConversationPart() {
                    const { parts: e } = this.props.conversation;
                    return e[0];
                }
                getAuthorName(e) {
                    return e ? e.firstName : this.getTeamName();
                }
                getTeamName() {
                    const e = this.getFirstConversationPart();
                    return 'team' === e.author.type ? e.author.firstName : this.props.appName;
                }
                getTeamAdmins() {
                    const e = this.getFirstConversationPart();
                    return 'team' === e.author.type ? e.author.admins : this.props.appAdmins;
                }
                shouldComponentUpdate(e, t) {
                    return wa()(this, e, t);
                }
                shouldRenderParticipants() {
                    return (
                        this.props.conversation.participants.length > 0 && 'en' === Object(O.a)()
                    );
                }
                renderParticipantsAndAuthor(e) {
                    const t = this.props.conversation.participants.length;
                    return t > 1
                        ? Object(O.e)('name_and_x_others', { name: e, count: t })
                        : Object(O.e)('name_and_1_other', { name: e });
                }
                getAuthorNameForPrefix(e, t) {
                    const n = !e.isBot,
                        a = e.isAdmin && n,
                        o = 'user' === e.type && e.id === this.props.userId;
                    if (!a || t) return (n && !t) || (o && t) ? Object(O.e)('you') : e.firstName;
                }
                renderSummaryContentAuthorPrefix(e) {
                    const t = this.props.conversation.participants.length > 0,
                        n = this.getAuthorNameForPrefix(e, t);
                    return n ? o.a.createElement(Ea.d, null, `${n}: `) : null;
                }
                renderSummaryContent() {
                    const e = this.getConversationParts(),
                        { author: t, summaryText: n, isMetadata: a } = Object(Ca.e)(e);
                    return o.a.createElement(
                        Ea.e,
                        { isUnread: !this.props.conversation.read },
                        this.renderSummaryContentAuthorPrefix(t),
                        o.a.createElement(Ea.f, { text: n, tagName: 'div', isSingleBlock: a })
                    );
                }
                render() {
                    const { isCompact: e } = this.props,
                        {
                            lastPartCreatedAt: t,
                            lastParticipatingAdmin: n,
                            read: a,
                        } = this.props.conversation,
                        r = this.getAuthorName(n),
                        i = this.getTeamAdmins();
                    return o.a.createElement(
                        Ea.h,
                        {
                            className: 'intercom-conversation-summary',
                            isCompact: e,
                            onClick: this.handleClick,
                            isUnread: !a,
                            ref: e => (this.node = e),
                        },
                        a ? null : o.a.createElement(Ea.j, null),
                        o.a.createElement(
                            Ea.a,
                            { isCompact: e },
                            n
                                ? o.a.createElement(je.a, { size: 36, admin: n })
                                : o.a.createElement(ya.a, { admins: i })
                        ),
                        o.a.createElement(
                            Ea.b,
                            null,
                            o.a.createElement(
                                Ea.g,
                                { isCompact: e, isUnread: !a },
                                o.a.createElement(
                                    'span',
                                    null,
                                    this.shouldRenderParticipants()
                                        ? this.renderParticipantsAndAuthor(r)
                                        : r
                                ),
                                o.a.createElement(Ea.i, null, t ? `• ${Object(lt.f)(t)}` : null)
                            ),
                            this.renderSummaryContent()
                        ),
                        o.a.createElement(Ea.c, null, o.a.createElement(C, null))
                    );
                }
            }
            const Sa = Object(f.c)('div', { target: 'e1yjqpel0' })({
                    name: 'icbmz8',
                    styles: 'padding:26px 24px 24px 24px;line-height:1.5;',
                }),
                _a = Object(f.c)('div', { target: 'e1yjqpel1' })(
                    'display:flex;align-items:center;a{text-decoration:underline;',
                    ({ theme: e }) =>
                        Object(f.b)('color:', e.isPrimaryColorReadable ? e.appColor : e.black, ';'),
                    '}'
                ),
                Pa = Object(f.c)('h2', { target: 'e1yjqpel2' })({
                    name: 'zo02ra',
                    styles: 'line-height:1.5;font-size:16px;word-break:break-word;flex:1;',
                }),
                Na = Object(f.c)('div', { target: 'e1yjqpel3' })({
                    name: '1ac03ny',
                    styles: 'height:40px;position:relative;',
                }),
                Ta = Object(f.c)('div', { target: 'e1yjqpel4' })({
                    name: '1eqyvp5',
                    styles: 'padding:16px 0 0;',
                });
            function Aa(e, t, n) {
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
            class home_screen_conversations_card_body_HomeScreenConversationsCardBody extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        Aa(this, 'handleOpenConversationClick', e => {
                            this.addOpenConversationMetric(), this.props.onOpenConversation(e);
                        }),
                        Aa(this, 'addOpenConversationMetric', () => {
                            Object(be.e)(
                                'clicked',
                                'conversation',
                                'messenger',
                                'home-screen',
                                {},
                                'm4_metric'
                            );
                        });
                }
                renderSpinner(e) {
                    return o.a.createElement(
                        Na,
                        { key: `spinner-${e}` },
                        o.a.createElement(Mn.a, null)
                    );
                }
                renderConversationSummary(e, t) {
                    const { appName: n, appAdmins: a, userId: r } = this.props;
                    return 'saving' === e.parts[0].saveState
                        ? this.renderSpinner(t)
                        : o.a.createElement(conversation_summary_ConversationSummary, {
                              key: `conversation-${t}`,
                              conversation: e,
                              appName: n,
                              appAdmins: a,
                              userId: r,
                              isCompact: !0,
                              onClick: this.handleOpenConversationClick,
                          });
                }
                renderButton() {
                    const {
                        shouldShowUpfrontEmailComposer: e,
                        onShowNewConversationsClick: t,
                        allowNewConversation: n,
                    } = this.props;
                    return n
                        ? e
                            ? o.a.createElement(new_message_button_NewMessageButton, {
                                  onClick: t,
                                  variant: 'secondary',
                                  currentView: 'home-screen',
                              })
                            : o.a.createElement(new_conversation_button_NewConversationButton, {
                                  onClick: t,
                                  variant: 'secondary',
                                  currentView: 'home-screen',
                              })
                        : null;
                }
                render() {
                    const {
                        conversations: e,
                        hasMoreConversations: t,
                        hasMoreUnreadConversations: n,
                        onOpenConversations: a,
                    } = this.props;
                    return 0 === e.length
                        ? null
                        : o.a.createElement(
                              Sa,
                              null,
                              o.a.createElement(
                                  _a,
                                  null,
                                  o.a.createElement(Pa, null, Object(O.e)('your_conversations')),
                                  t
                                      ? o.a.createElement(see_all_link_SeeAllLink, {
                                            linkText: Object(O.e)('see_all'),
                                            showMore: n,
                                            onClick: a,
                                        })
                                      : null
                              ),
                              o.a.createElement(
                                  'div',
                                  null,
                                  e.map((e, t) => this.renderConversationSummary(e, t))
                              ),
                              o.a.createElement(Ta, null, this.renderButton())
                          );
                }
            }
            Aa(
                home_screen_conversations_card_body_HomeScreenConversationsCardBody,
                'defaultProps',
                { allowNewConversation: !0 }
            );
            var Ha = Object(h.connect)(
                    e => {
                        const t = Object(i.i)(e);
                        return {
                            appColor: e.app.color,
                            appName: e.app.name,
                            appAdmins: e.app.activeAdmins,
                            userId: e.user.id,
                            shouldShowUpfrontEmailComposer: t,
                        };
                    },
                    e => ({
                        onOpenConversation: t => {
                            e(Object(xa.a)(t)), e(Object(Ce.l)($.b, t));
                        },
                        onOpenConversations: t => {
                            t.preventDefault(), e(Object(ve.i)());
                        },
                        onShowNewConversationsClick: () => {
                            e(Object(ve.j)());
                        },
                    })
                )(home_screen_conversations_card_body_HomeScreenConversationsCardBody),
                Ba = n(136);
            const Ra = Object(f.c)('div', { target: 'e1jholmx0' })({
                    name: 'tsg21r',
                    styles: 'height:159px;',
                }),
                Ma = Object(f.c)('div', { target: 'e1jholmx1' })(
                    'max-width:',
                    Ba.a - 32,
                    'px;margin-bottom:17px;background-color:',
                    Object(f.f)('white'),
                    ';border-radius:3px;font-size:14px;line-height:1.4;color:',
                    Object(f.f)('bodyText'),
                    ';overflow:hidden;position:relative;',
                    S.c
                ),
                La = Object(f.c)('div', { target: 'e1jholmx2' })(
                    'height:',
                    Object(f.e)('height'),
                    'px;transition:height 250ms;'
                );
            var Fa = n(517),
                za = n(448);
            var Da = Object(u.createSelector)(
                xe.b,
                $n,
                (e, { recentConversations: t }) =>
                    e - t.slice(0, 3).filter(e => Object(xe.a)(e)).length
            );
            const Ia = Object(u.createSelector)(
                $n,
                i.a,
                e => e.homeScreen.isFetched,
                e => e.homeScreen.isFailed,
                ({ recentConversations: e }, { allowNewConversation: t }, n, a) => ({
                    recentConversations: e,
                    allowNewConversation: t,
                    isFetched: n,
                    isFailed: a,
                })
            );
            var Wa = Object(h.connect)(e => {
                const t = Object(Gn.a)(e),
                    n = Da(e) > 0,
                    {
                        recentConversations: a,
                        allowNewConversation: o,
                        isFetched: r,
                        isFailed: i,
                    } = Ia(e);
                let s = o ? a : t;
                (s = s.filter(e => 'disabled' !== e.parts[0].replyType)), (s = s.slice(0, 3));
                let c = e.homeScreen.hasMoreConversations;
                return (
                    t.length > s.length && (c = !0),
                    {
                        recentConversations: s,
                        hasMoreConversations: c,
                        hasMoreUnreadConversations: n,
                        allowNewConversation: o,
                        isFetchedOrFailed: r || i,
                    }
                );
            })(function(e) {
                const {
                        isFetchedOrFailed: t,
                        recentConversations: n,
                        hasMoreConversations: r,
                        hasMoreUnreadConversations: i,
                        allowNewConversation: s,
                    } = e,
                    [c, l] = Object(a.useState)(null),
                    d = Object(a.useRef)(!1);
                Object(a.useEffect)(() => {
                    t || (d.current = !0);
                }, [t]);
                const p = n.length > 0 || !s;
                return o.a.createElement(
                    Ma,
                    null,
                    o.a.createElement(
                        La,
                        { height: c },
                        o.a.createElement(
                            za.a,
                            { onHeightChange: l },
                            o.a.createElement(
                                'div',
                                null,
                                o.a.createElement(
                                    Fa.a,
                                    null,
                                    t
                                        ? p
                                            ? o.a.createElement(Ha, {
                                                  key: 'conversations-body',
                                                  conversations: n,
                                                  hasMoreConversations: r,
                                                  hasMoreUnreadConversations: i,
                                                  allowNewConversation: s,
                                              })
                                            : o.a.createElement(va, {
                                                  key: 'start-conversation-body',
                                                  hasMoreConversations: r,
                                                  hasMoreUnreadConversations: i,
                                              })
                                        : o.a.createElement(
                                              Ra,
                                              { key: 'spinner' },
                                              o.a.createElement(Mn.a, null)
                                          )
                                )
                            )
                        )
                    )
                );
            });
            const Ua = Object(f.c)('svg', { target: 'e1tfcp060' })(
                'fill:',
                Object(f.f)('buttonBackgroundColor'),
                ';'
            );
            function Va() {
                return o.a.createElement(
                    Ua,
                    {
                        xmlns: 'http://www.w3.org/2000/svg',
                        width: '14',
                        height: '14',
                        viewBox: '0 0 14 14',
                    },
                    o.a.createElement('path', {
                        fillRule: 'evenodd',
                        d:
                            'M12.5 7c0 3.0376-2.4624 5.5-5.5 5.5-3.03757 0-5.5-2.4624-5.5-5.5 0-3.03757 2.46243-5.5 5.5-5.5 3.0376 0 5.5 2.46243 5.5 5.5zM14 7c0 3.866-3.134 7-7 7-3.86599 0-7-3.134-7-7 0-3.86599 3.13401-7 7-7 3.866 0 7 3.13401 7 7zM6.27844 3.48219v3.78093l.00105.00104c.00305.07805.03658.1518.09341.20546l.07452.0566L9.6706 9.69708l.15009.03773h.05667c.09341-.01886.14904-.07442.20574-.13102l.4125-.65514c.0355-.04926.0552-.10809.0566-.16876 0-.09329-.0566-.14885-.1501-.20545L7.62817 6.68345V3.48219c0-.14989-.1312-.29979-.30017-.29979h-.74938c-.16898 0-.30018.1499-.30018.29979z',
                        clipRule: 'evenodd',
                    })
                );
            }
            var qa = { name: 'prstg', styles: 'padding-right:0px;' };
            const Xa = Object(f.c)('div', { target: 'e1tiptuf0' })(
                    'display:flex;flex-wrap:wrap;margin-left:8px;line-height:1.5;padding-right:96px;',
                    ({ hasExpectationsOrOfficeHours: e }) => e && qa
                ),
                Ga = Object(f.c)('div', { target: 'e1tiptuf1' })(
                    'font-size:14px;color:',
                    Object(f.f)('metaText'),
                    ';flex-grow:1;'
                ),
                Za = Object(f.c)('div', { target: 'e1tiptuf2' })(
                    'display:flex;font-weight:600;font-size:14px;& > svg{align-self:center;fill:',
                    Object(f.f)('buttonBackgroundColor'),
                    ';margin-top:-2px;padding:0 4px 2px 0;}'
                );
            function $a() {
                const e = Object(h.useSelector)(e => e.app.officeHoursResponse),
                    t = Object(h.useSelector)(e => e.app.expectedResponseDelayTranslationKey),
                    n = !!e || 'conversation_card_unknown_response_time' !== t,
                    a = (e => {
                        const t = Object(O.a)();
                        return -1 !== O.c.indexOf(t)
                            ? e
                            : e[0].toLocaleUpperCase(t) + e.substring(1);
                    })(Object(O.e)(t));
                return o.a.createElement(
                    Xa,
                    { hasExpectationsOrOfficeHours: n },
                    o.a.createElement(
                        Ga,
                        null,
                        e
                            ? Object(O.e)('conversation_card_office_hours_header')
                            : 'conversation_card_unknown_response_time' === t
                            ? Object(O.e)('conversation_card_unknown_response_time')
                            : Object(O.e)('conversation_card_reply_time_header')
                    ),
                    n && o.a.createElement(Za, null, o.a.createElement(Va, null), e || a)
                );
            }
            const Ya = Object(f.c)('div', { target: 'eb4lzvm0' })({
                    name: 'ty16o5',
                    styles: 'height:48px;border-top:1px solid #d8d8d8;position:relative;',
                }),
                Ja = Object(f.c)('div', { target: 'eb4lzvm1' })({
                    name: '1gp5mwl',
                    styles: 'padding:15px 30px 15px 24px;font-size:14px;',
                });
            function Ka() {
                const e = Object(h.useDispatch)(),
                    t = () => e(Object(ve.i)()),
                    n = Object(h.useSelector)(Da) > 0;
                return o.a.createElement(
                    Ya,
                    null,
                    o.a.createElement(
                        Ja,
                        null,
                        n ? o.a.createElement(Ea.j, null) : null,
                        o.a.createElement(
                            'a',
                            {
                                onClick: t,
                                onKeyDown: e => (13 === e.keyCode || 32 === e.keyCode) && t(),
                                role: 'button',
                                tabIndex: '0',
                            },
                            Object(O.e)('see_all_conversations')
                        )
                    )
                );
            }
            var Qa = { name: '1imlk2a', styles: 'padding-bottom:0;' };
            const eo = Object(f.c)('div', { target: 'e1fyju1n0' })(
                'padding:26px 24px 16px;& ',
                Ea.h.className,
                ':last-child:after{border-bottom:none;}',
                ({ showAllConversationsLink: e }) => e && Qa
            );
            var to = { name: 'we6s3m', styles: 'padding:26px 24px 20px;' };
            const no = Object(f.c)('div', { target: 'e1fyju1n1' })(
                    'padding:26px 24px 24px 24px;line-height:1.5;',
                    ({ allowAllConversationsLink: e }) => e && to
                ),
                ao = Object(f.c)('div', { target: 'e1fyju1n2' })({
                    name: 'vmab6f',
                    styles: 'margin-bottom:4px;h2{font-weight:600;}',
                }),
                oo = Object(f.c)('div', { target: 'e1fyju1n3' })(
                    'display:flex;align-items:center;margin-top:12px;',
                    Yn.className,
                    '{margin-right:8px;}a{white-space:nowrap;}'
                ),
                ro = Object(f.c)('div', { target: 'e1fyju1n4' })({
                    name: '1yuhvjn',
                    styles: 'margin-top:16px;',
                });
            function io() {
                const e = Object(h.useDispatch)(),
                    t = () => e(Object(ve.j)()),
                    { allowNewConversation: n } = Object(h.useSelector)(i.a),
                    { recentConversations: r } = Object(h.useSelector)($n),
                    s = Object(h.useSelector)(i.i),
                    c = Object(h.useSelector)(Gn.a),
                    l = 0 === r.length && c.length > 0,
                    d = r.length > 0,
                    [p, m] = Object(a.useState)(null);
                return n
                    ? o.a.createElement(
                          Ma,
                          null,
                          o.a.createElement(
                              La,
                              { height: p },
                              o.a.createElement(
                                  za.a,
                                  { onHeightChange: m },
                                  o.a.createElement(
                                      Fa.a,
                                      null,
                                      o.a.createElement(
                                          no,
                                          {
                                              className:
                                                  'intercom-home-screen-start-conversation-card-new',
                                              allowAllConversationsLink: l,
                                          },
                                          o.a.createElement(
                                              ao,
                                              null,
                                              (() => {
                                                  const e =
                                                      r.length > 0
                                                          ? 'start_another_conversation'
                                                          : 'start_a_conversation';
                                                  return o.a.createElement(da.a, {
                                                      style: 'header',
                                                      bottomMargin: 'none',
                                                      text: Object(O.e)(e),
                                                  });
                                              })()
                                          ),
                                          o.a.createElement(
                                              oo,
                                              null,
                                              (() => {
                                                  const e = d ? 36 : 56,
                                                      t = d ? 6 : 16;
                                                  return o.a.createElement(la, {
                                                      showTooltip: !0,
                                                      avatarSize: e,
                                                      avatarPixelsToShow: t,
                                                      maxAdmins: 3,
                                                  });
                                              })(),
                                              o.a.createElement($a, null)
                                          ),
                                          o.a.createElement(
                                              ro,
                                              null,
                                              (() => {
                                                  const e = d ? 'secondary' : 'default';
                                                  return s
                                                      ? o.a.createElement(
                                                            new_message_button_NewMessageButton,
                                                            {
                                                                onClick: t,
                                                                currentView: 'home-screen',
                                                                variant: e,
                                                            }
                                                        )
                                                      : o.a.createElement(
                                                            new_conversation_button_NewConversationButton,
                                                            {
                                                                onClick: t,
                                                                currentView: 'home-screen',
                                                                variant: e,
                                                            }
                                                        );
                                              })()
                                          )
                                      )
                                  )
                              )
                          ),
                          l && o.a.createElement(Ka, null)
                      )
                    : null;
            }
            function so() {
                const { recentConversations: e } = Object(h.useSelector)($n),
                    t = e.slice(0, 3),
                    n = Object(h.useSelector)(Gn.a),
                    r = t.length < n.length,
                    i = Object(h.useSelector)(e => e.app.name),
                    s = Object(h.useSelector)(e => e.app.activeAdmins),
                    c = Object(h.useSelector)(e => e.user.id),
                    [l, d] = Object(a.useState)(null),
                    p = Object(h.useDispatch)(),
                    m = e => {
                        Object(be.e)('clicked', 'conversation', 'messenger', 'home-screen', {}),
                            p(Object(xa.a)(e)),
                            p(Object(Ce.l)($.b, e));
                    };
                return o.a.createElement(
                    o.a.Fragment,
                    null,
                    e.length > 0 &&
                        o.a.createElement(
                            Ma,
                            null,
                            o.a.createElement(
                                La,
                                { height: l },
                                o.a.createElement(
                                    za.a,
                                    { onHeightChange: d },
                                    o.a.createElement(
                                        'div',
                                        null,
                                        o.a.createElement(
                                            eo,
                                            { showAllConversationsLink: r },
                                            o.a.createElement(
                                                ao,
                                                null,
                                                o.a.createElement(da.a, {
                                                    style: 'header',
                                                    bottomMargin: 'none',
                                                    text: Object(O.e)('continue_the_conversation'),
                                                })
                                            ),
                                            o.a.createElement(
                                                'div',
                                                null,
                                                t.map((e, t) =>
                                                    ((e, t) =>
                                                        'saving' === e.parts[0].saveState
                                                            ? o.a.createElement(
                                                                  Na,
                                                                  { key: `spinner-${t}` },
                                                                  o.a.createElement(Mn.a, null)
                                                              )
                                                            : o.a.createElement(
                                                                  conversation_summary_ConversationSummary,
                                                                  {
                                                                      key: `conversation-${t}`,
                                                                      conversation: e,
                                                                      appName: i,
                                                                      appAdmins: s,
                                                                      userId: c,
                                                                      isCompact: !0,
                                                                      onClick: m,
                                                                  }
                                                              ))(e, t)
                                                )
                                            )
                                        ),
                                        r && o.a.createElement(Ka, null)
                                    )
                                )
                            )
                        )
                );
            }
            function co() {
                const e = Object(h.useSelector)(e => e.homeScreen.isFetched),
                    t = Object(h.useSelector)(e => e.homeScreen.isFailed);
                return e || t
                    ? o.a.createElement(
                          o.a.Fragment,
                          null,
                          o.a.createElement(so, null),
                          o.a.createElement(io, null)
                      )
                    : o.a.createElement(Ra, { key: 'spinner' }, o.a.createElement(Mn.a, null));
            }
            var lo = n(631);
            const po = Object(f.c)('span', { target: 'e19wqfua0' })(),
                mo = Object(f.c)('div', { target: 'e19wqfua1' })(
                    'display:flex;align-items:flex-end;justify-content:center;flex-shrink:0;margin:11px 0;',
                    ({ underConstruction: e }) =>
                        e &&
                        Object(f.b)(
                            'background-image:url(',
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAGCAIAAAAOtlpdAAAANElEQVQoz2P4etGEEnRxi0lHFdXQ8slQYxkGoZsochbt3ES+s2jqJjKdRWs3keMsOrgJiAB4ItlirqqJGgAAAABJRU5ErkJggg==',
                            ');background-repeat:repeat-x;background-size:25px 3px;margin-left:-16px;margin-right:-16px;'
                        )
                ),
                ho = Object(f.c)('a', { target: 'e19wqfua2' })(
                    'display:inline-block;font-size:14px;padding:8px 16px;border-radius:16px;transition:all 80ms;color:',
                    Object(f.f)('weRunOnIntercomText'),
                    ' !important;&:hover{background:',
                    Object(f.f)('lightGrey5'),
                    ';}'
                ),
                uo = Object(f.c)('div', { target: 'e19wqfua3' })(),
                go = Object(f.c)('div', { target: 'e19wqfua4' })(
                    'z-index:',
                    Object(S.m)(2),
                    ';position:absolute;bottom:0;left:0;right:0;',
                    mo.className,
                    '{position:absolute;opacity:0.97;width:100%;bottom:0;display:flex;align-items:flex-end;justify-content:center;margin:0;padding:5px 0;background-color:',
                    Object(f.f)('white'),
                    ';box-shadow:0 -10px 10px 1px rgba(0,0,0,0.04);',
                    uo.className,
                    '{display:flex;width:100%;justify-content:center;}}'
                );
            var bo = n(465);
            const fo = Object(f.d)(
                    '0%{opacity:0;transform:translateX(0);}100%{opacity:1;transform:translateX(0);}'
                ),
                vo = Object(f.d)(
                    '0%{opacity:0;transform:translateX(-60px);}100%{opacity:1;transform:translateX(0);}'
                ),
                xo = Object(f.d)(
                    '0%{opacity:1;transform:translateX(0);}100%{opacity:0;transform:translateX(-60px);}'
                ),
                yo = Object(f.d)('0%{opacity:0;}100%{opacity:1;}'),
                Co = Object(f.d)('0%{opacity:1;}100%{opacity:0;}'),
                Oo = Object(f.c)('div', { target: 'ejdnm0c0' })(),
                wo = e => {
                    let t = '';
                    for (let n = 0; n < 6; n++)
                        t += Object(f.b)(
                            '.',
                            'intercom-home-screen-messenger-card',
                            '-',
                            n,
                            '{animation-delay:',
                            e + 150 * (n + 2),
                            'ms;}'
                        ).styles;
                    return Object(f.b)(Ma.className, '{animation-delay:', e + 150, 'ms;}', t);
                },
                jo = Object(f.b)(
                    '&.intercom-messenger-body-view-appear{',
                    Ma.className,
                    ',',
                    Oo.className,
                    '{animation-name:',
                    fo,
                    ';animation-duration:',
                    250,
                    'ms;animation-timing-function:',
                    'ease-out',
                    ';animation-fill-mode:both;}',
                    wo(550),
                    ';',
                    uo.className,
                    '{animation-name:',
                    yo,
                    ';animation-duration:',
                    250,
                    'ms;animation-timing-function:',
                    'ease-out',
                    ';animation-delay:',
                    700,
                    'ms;animation-fill-mode:both;}}'
                ),
                Eo = Object(f.b)(
                    '&.intercom-messenger-body-view-enter{',
                    Ma.className,
                    ',',
                    Oo.className,
                    '{animation-name:',
                    vo,
                    ';animation-duration:',
                    250,
                    'ms;animation-timing-function:',
                    'ease-out',
                    ';animation-fill-mode:both;}',
                    wo(0),
                    ';',
                    uo.className,
                    '{animation-name:',
                    yo,
                    ';animation-duration:',
                    250,
                    'ms;animation-timing-function:',
                    'ease-out',
                    ';animation-delay:',
                    150,
                    'ms;animation-fill-mode:both;}}'
                ),
                ko = Object(f.b)(
                    '&.intercom-messenger-body-view-exit{',
                    Ma.className,
                    ',',
                    Oo.className,
                    '{animation-name:',
                    xo,
                    ';animation-duration:',
                    250,
                    'ms;animation-timing-function:',
                    'ease-out',
                    ';animation-fill-mode:both;animation-delay:',
                    0,
                    'ms;}',
                    uo.className,
                    '{animation-name:',
                    Co,
                    ';animation-duration:',
                    250,
                    'ms;animation-timing-function:',
                    'ease-out',
                    ';animation-fill-mode:both;}}'
                ),
                So = Object(f.c)('div', { target: 'ejdnm0c1' })(
                    'z-index:',
                    Object(S.m)(2),
                    ';position:fixed;top:0;left:0;right:0;bottom:0;overflow-y:auto;-webkit-overflow-scrolling:touch;',
                    bo.b.className,
                    '{margin-bottom:16px;}',
                    uo.className,
                    '{opacity:1;}',
                    Ea.h.className,
                    '{&:after{left:24px;right:24px;}}',
                    jo,
                    ' ',
                    Eo,
                    ' ',
                    ({ wasBooting: e }) =>
                        e &&
                        Object(f.b)(
                            '&.intercom-messenger-body-view-enter{',
                            Ma.className,
                            ',',
                            Oo.className,
                            '{animation-name:',
                            fo,
                            ';animation-duration:',
                            250,
                            'ms;animation-timing-function:',
                            'ease-out',
                            ';animation-fill-mode:both;}',
                            wo(400),
                            ';',
                            uo.className,
                            '{animation-name:',
                            yo,
                            ';animation-duration:',
                            250,
                            'ms;animation-timing-function:',
                            'ease-out',
                            ';animation-delay:',
                            550,
                            'ms;animation-fill-mode:both;}}'
                        ),
                    ' ',
                    ko
                );
            var _o = { name: 'kswkxf', styles: 'padding-bottom:55px;' };
            const Po = Object(f.c)('div', { target: 'ejdnm0c2' })(
                    'display:flex;flex-direction:column;box-sizing:border-box;padding:0 16px;min-height:100%;',
                    ({ isIntercomLinkEnabled: e }) => e && _o
                ),
                No = Object(f.c)('div', { target: 'ejdnm0c3' })({
                    name: '1clbhc1',
                    styles:
                        '.intercom-messenger-card-failed-animation-exit{opacity:0;transition:opacity 0.5s;}.intercom-messenger-card-failed-animation-appear,.intercom-messenger-card-failed-animation-enter{opacity:0;transition:none;}.intercom-messenger-card-failed-animation-appear-done,.intercom-messenger-card-failed-animation-enter-done{opacity:1;transition:opacity 0.5s;}',
                });
            class home_screen_messenger_card_HomeScreenMessengerCard extends a.PureComponent {
                getClassName() {
                    return d()({
                        'intercom-home-screen-messenger-card': !0,
                        [`intercom-home-screen-messenger-card-${this.props.index}`]: !0,
                    });
                }
                render() {
                    const {
                        cardUri: e,
                        isFailed: t,
                        isFetched: n,
                        index: a,
                        frameWindow: r,
                    } = this.props;
                    return o.a.createElement(
                        No,
                        null,
                        o.a.createElement(
                            b.TransitionGroup,
                            { component: 'div', appear: !n, enter: !n, exit: !n },
                            t
                                ? null
                                : o.a.createElement(
                                      b.CSSTransition,
                                      {
                                          classNames: 'intercom-messenger-card-failed-animation',
                                          timeout: { enter: 500, exit: 500 },
                                      },
                                      o.a.createElement(
                                          Oo,
                                          { className: this.getClassName() },
                                          o.a.createElement(lo.a, {
                                              cardUri: e,
                                              homeScreenIndex: a,
                                              frameWindow: r,
                                          })
                                      )
                                  )
                        )
                    );
                }
            }
            const To = Object(f.c)('div', { target: 'ep2h5g00' })({
                name: '1jqiena',
                styles: 'height:0;overflow:visible;',
            });
            var Ao = n(645);
            var Ho = ({ visible: e, onRetry: t }) =>
                o.a.createElement(
                    To,
                    null,
                    o.a.createElement(
                        Ln.a,
                        { duration: 200 },
                        e
                            ? o.a.createElement(
                                  Ao.a,
                                  { inline: !0, onRetry: t },
                                  Object(O.e)('couldnt_load_apps')
                              )
                            : null
                    )
                );
            class home_screen_cards_HomeScreenCards extends a.PureComponent {
                componentDidMount() {
                    const { isFetched: e, isFailed: t, fetchCards: n } = this.props;
                    e || t || n();
                }
                render() {
                    const {
                            cardCount: e,
                            frameWindow: t,
                            fetchCards: n,
                            isFetched: a,
                            isFailed: r,
                            newConversationCard: i,
                            showConversationCard: s,
                        } = this.props,
                        c = this.props.cardUris || Array(e).fill(void 0);
                    return o.a.createElement(
                        o.a.Fragment,
                        null,
                        s ? (i ? o.a.createElement(co, null) : o.a.createElement(Wa, null)) : null,
                        o.a.createElement(Ho, { visible: r, onRetry: n }),
                        c.map((e, n) =>
                            o.a.createElement(home_screen_messenger_card_HomeScreenMessengerCard, {
                                key: n,
                                cardUri: e,
                                index: n,
                                isFetched: a,
                                isFailed: r,
                                frameWindow: t,
                            })
                        )
                    );
                }
            }
            var Bo = n(27),
                Ro = n(50);
            const Mo = () => ({ type: 'GET_HOME_SCREEN_CARDS_REQUEST' }),
                Lo = (e, t, n) => ({
                    type: 'GET_HOME_SCREEN_CARDS_SUCCESS',
                    cardUris: e,
                    conversations: t,
                    hasMoreConversations: n,
                }),
                Fo = e => ({ type: 'GET_HOME_SCREEN_CONVERSATIONS_SUCCESS', conversations: e }),
                zo = e => ({ type: 'GET_HOME_SCREEN_CARDS_FAILURE', error: e });
            var Do = Object(h.connect)(
                e => {
                    const { homeScreenSlots: t, hasConversations: n } = e.user,
                        { cardUris: a, isFetched: o, isFailed: r } = e.homeScreen,
                        { allowNewConversation: s } = Object(i.a)(e),
                        { newConversationCard: c } = e.app.features,
                        l = s || n;
                    return {
                        cardCount: t ? t.length : 0,
                        cardUris: a,
                        isFailed: r,
                        isFetched: o,
                        newConversationCard: c,
                        showConversationCard: l,
                    };
                },
                e => ({
                    fetchCards() {
                        var t;
                        e(
                            ((t = $.b),
                            (e, n) => {
                                e(Mo());
                                const { session: a, user: o, app: r } = n();
                                return t
                                    .getHomeScreenCards(a, {
                                        homeScreenSlots: o.homeScreenSlots,
                                        selfServeSuggestionsMatch: r.selfServeSuggestionsMatch,
                                    })
                                    .then(n => {
                                        if ((e(Object(Ro.e)(n)), !1 === n.cardsSuccess))
                                            e(Fo(n.conversations)), e(zo("Couldn't load apps"));
                                        else {
                                            const a = n.cards || n;
                                            a.forEach(n => e(Object(Bo.a)(t, n))),
                                                e(
                                                    Lo(
                                                        a.map(e => e.uri),
                                                        n.conversations,
                                                        n.hasMoreConversations
                                                    )
                                                );
                                        }
                                    })
                                    .catch(t => {
                                        e(zo(t));
                                    });
                            })
                        );
                    },
                })
            )(home_screen_cards_HomeScreenCards);
            function Io(e, t, n) {
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
            class home_screen_HomeScreen extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        Io(this, 'node', void 0),
                        Io(this, 'addViewedHomeScreenMetric', () => {
                            Object(be.e)('viewed', 'home-screen', 'messenger', '', {}, 'm4_metric');
                        }),
                        Io(this, 'handleScroll', () => {
                            if (!this.node) return;
                            const { scrollTop: e } = this.node;
                            this.props.onScroll(Math.max(0, e));
                        });
                }
                componentDidMount() {
                    this.addViewedHomeScreenMetric(), this.props.onScroll(0);
                }
                getBodyStyle() {
                    const { headerHeight: e } = this.props;
                    if (e) return { paddingTop: e - 64 };
                }
                render() {
                    const { frameWindow: e, isIntercomLinkEnabled: t, wasBooting: n } = this.props;
                    return o.a.createElement(
                        So,
                        {
                            ref: e => (this.node = e),
                            className: 'intercom-home-screen',
                            onWheel: this.handleScroll,
                            onTouchMove: this.handleScroll,
                            onScroll: this.handleScroll,
                            wasBooting: n,
                        },
                        o.a.createElement(
                            Po,
                            { style: this.getBodyStyle(), isIntercomLinkEnabled: t },
                            o.a.createElement(Do, { frameWindow: e })
                        )
                    );
                }
            }
            var Wo = Object(h.connect)(e => {
                    const { name: t, isIntercomLinkEnabled: n } = e.app;
                    return { appName: t, isIntercomLinkEnabled: n };
                })(home_screen_HomeScreen),
                Uo = n(519),
                Vo = n(830),
                qo = n.n(Vo),
                Xo = n(831),
                Go = n.n(Xo);
            const Zo = Object(f.d)(
                    '0%{opacity:0;transform:translateX(-8px);}100%{opacity:1;transform:translateX(0);}'
                ),
                $o = Object(f.d)(
                    '0%{opacity:0;transform:translateX(8px);}100%{opacity:1;transform:translateX(0);}'
                ),
                Yo = Object(f.d)(
                    '0%{opacity:1;transform:translateX(0);}100%{opacity:0;transform:translateX(-8px);}'
                ),
                Jo = Object(f.d)(
                    '0%{opacity:1;transform:translateX(0);}100%{opacity:0;transform:translateX(8px);}'
                ),
                Ko = Object(f.d)(
                    '0%{opacity:0;transform:translateY(8px) translateX(-50%) scale(.96);}100%{opacity:1;transform:translateY(0) translateX(-50%) scale(1);}'
                ),
                Qo = Object(f.d)(
                    '0%{opacity:1;transform:translateY(0) translateX(-50%) scale(1);}100%{opacity:0;transform:translateY(8px) translateX(-50%) scale(.96);}'
                ),
                er = Object(f.d)('0%{opacity:0;}100%{opacity:1;}'),
                tr = Object(f.d)('0%{opacity:1;}100%{opacity:0;}'),
                nr = Object(f.c)('div', { target: 'e3ty8w50' })(
                    'height:100%;',
                    Object(S.b)(qo.a, Go.a, '360px', '512px'),
                    ' background-position:top center;background-repeat:no-repeat;'
                ),
                ar = Object(f.c)('div', { target: 'e3ty8w51' })({
                    name: '7pfthe',
                    styles: 'position:relative;top:50%;transform:translateY(-50%);',
                }),
                or = Object(f.c)('div', { target: 'e3ty8w52' })({
                    name: '16jf1wt',
                    styles: 'font-size:17px;text-align:center;padding-bottom:6px;',
                }),
                rr = Object(f.c)('div', { target: 'e3ty8w53' })(
                    'font-size:15px;text-align:center;color:',
                    Object(f.f)('subheaderText'),
                    ';'
                ),
                ir = Object(f.c)('div', { target: 'e3ty8w54' })(
                    'position:absolute;top:0;bottom:0;left:0;right:0;&.intercom-messenger-body-view-enter{z-index:',
                    Object(S.m)(1),
                    ';',
                    Yn.className,
                    '{animation-name:',
                    Ko,
                    ';animation-duration:',
                    '250ms',
                    ';animation-timing-function:',
                    'ease-out',
                    ';animation-delay:',
                    '250ms',
                    ';animation-fill-mode:both;}',
                    Ea.h.className,
                    '{animation-name:',
                    $o,
                    ';animation-duration:',
                    '250ms',
                    ';animation-timing-function:',
                    'ease-out',
                    ';animation-delay:',
                    '250ms',
                    ';animation-fill-mode:both;}}&.intercom-messenger-body-view-exit{z-index:',
                    Object(S.m)(),
                    ';',
                    Yn.className,
                    '{animation-name:',
                    Qo,
                    ';animation-duration:',
                    '150ms',
                    ';animation-timing-function:',
                    'ease-out',
                    ';animation-delay:',
                    '0s',
                    ';animation-fill-mode:both;}',
                    Ea.h.className,
                    '{animation-name:',
                    Jo,
                    ';animation-duration:',
                    '150ms',
                    ';animation-timing-function:',
                    'ease-out',
                    ';animation-delay:',
                    '0s',
                    ';animation-fill-mode:both;}}.intercom-messenger-from-conversation &.intercom-messenger-body-view-enter,.intercom-messenger-from-new-conversation &.intercom-messenger-body-view-enter{',
                    Ea.h.className,
                    '{animation-name:',
                    Zo,
                    ';}',
                    ar.className,
                    '{animation-name:',
                    er,
                    ';animation-duration:',
                    '250ms',
                    ';animation-timing-function:',
                    'ease-out',
                    ';animation-delay:',
                    '250ms',
                    ';animation-fill-mode:both;}}.intercom-messenger-conversation &.intercom-messenger-body-view-exit,.intercom-messenger-new-conversation &.intercom-messenger-body-view-exit{',
                    Ea.h.className,
                    '{animation-name:',
                    Yo,
                    ';}',
                    ar.className,
                    '{animation-name:',
                    tr,
                    ';animation-duration:',
                    '150ms',
                    ';animation-timing-function:',
                    'ease-out',
                    ';animation-delay:',
                    '0s',
                    ';animation-fill-mode:both;}}'
                ),
                sr = Object(f.c)('div', { target: 'e3ty8w55' })({
                    name: 'ckc1q3',
                    styles: '-webkit-overflow-scrolling:touch;overflow-y:auto;height:100%;',
                }),
                cr = Object(f.c)('div', { target: 'e3ty8w56' })(
                    'z-index:',
                    Object(S.m)(1),
                    ';text-align:center;position:absolute;bottom:0;left:0;right:0;border-radius:0 0 6px 6px;height:90px;pointer-events:none;background:linear-gradient(0deg,rgba(255,255,255,1),rgba(255,255,255,0));'
                ),
                lr = Object(f.c)('div', { target: 'e3ty8w57' })({
                    name: '1mhn2ve',
                    styles: 'padding-bottom:105px;',
                });
            function dr(e, t, n) {
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
            class conversations_Conversations extends a.Component {
                constructor(...e) {
                    super(...e),
                        dr(this, 'addViewedConversationListMetric', () => {
                            Object(be.e)('viewed', 'conversation_list', 'messenger', '', {});
                        }),
                        dr(this, 'addConversationClickMetric', e => {
                            Object(be.e)(
                                'clicked',
                                e ? 'conversation' : 'new_conversation',
                                'messenger',
                                'from_conversation_list',
                                { conversation_id: e }
                            );
                        }),
                        dr(this, 'handleConversationClick', e => {
                            this.addConversationClickMetric(e), this.props.onConversationClick(e);
                        }),
                        dr(
                            this,
                            'handleScrollEnd',
                            Object(Uo.a)(e => {
                                const {
                                    onConversationsPage: t,
                                    onConversationsScroll: n,
                                } = this.props;
                                if ((n(e.target.scrollTop), !this.shouldPageConversations()))
                                    return;
                                const { pagesFetched: a } = this.props.conversations;
                                t(a + 1, 10);
                            }, 200)
                        );
                }
                componentDidMount() {
                    this.props.onConversationsPage(1, 10),
                        (this.conversations.scrollTop = this.props.conversations.scrollPosition),
                        this.addViewedConversationListMetric();
                }
                shouldShowNewConversationButton() {
                    const {
                        userRole: e,
                        appFeatures: t,
                        inboundConversationsDisabled: n,
                    } = this.props;
                    return !n && ('user' === e ? t.inboundMessages : t.anonymousInboundMessages);
                }
                shouldPageConversations() {
                    const {
                        pagesFetched: e,
                        totalPages: t,
                        isFetching: n,
                    } = this.props.conversations;
                    return !n && e < t && Object(W.m)(this.conversations) > 0.5;
                }
                getSortedConversations() {
                    let e = [...this.props.conversations.all];
                    return (
                        (e = e.filter(e => 'disabled' !== e.parts[0].replyType)),
                        e.sort((e, t) => t.lastPartCreatedAt - e.lastPartCreatedAt)
                    );
                }
                renderLoading() {
                    return o.a.createElement(Mn.a, null);
                }
                renderConversations() {
                    const e = this.getSortedConversations(),
                        { appName: t, appAdmins: n, userId: a } = this.props,
                        { scrollPosition: r } = this.props.conversations;
                    return o.a.createElement(
                        lr,
                        null,
                        e.map((e, i) =>
                            o.a.createElement(conversation_summary_ConversationSummary, {
                                rowIndex: i - parseInt(r / 102),
                                key: i,
                                conversation: e,
                                appName: t,
                                appAdmins: n,
                                userId: a,
                                onClick: this.handleConversationClick,
                            })
                        )
                    );
                }
                renderEmpty() {
                    return o.a.createElement(
                        nr,
                        null,
                        o.a.createElement(
                            ar,
                            null,
                            o.a.createElement(or, null, Object(O.e)('no_conversations')),
                            o.a.createElement(
                                rr,
                                null,
                                Object(O.e)('empty_conversations', { name: this.props.appName })
                            )
                        )
                    );
                }
                renderBody() {
                    const { isFetching: e, pagesFetched: t } = this.props.conversations;
                    return e && !t
                        ? this.renderLoading()
                        : 0 === this.props.conversations.all.length
                        ? this.renderEmpty()
                        : this.renderConversations();
                }
                render() {
                    const { onNewConversationClick: e } = this.props;
                    return o.a.createElement(
                        ir,
                        { className: 'intercom-conversations' },
                        o.a.createElement(
                            sr,
                            {
                                ref: e => (this.conversations = e),
                                onScroll: this.handleScrollEnd,
                                onWheel: W.d,
                            },
                            this.renderBody()
                        ),
                        o.a.createElement(
                            cr,
                            null,
                            this.shouldShowNewConversationButton()
                                ? o.a.createElement(new_conversation_button_NewConversationButton, {
                                      onClick: e,
                                      variant: 'fixed',
                                      currentView: 'from_conversation_list',
                                  })
                                : null
                        )
                    );
                }
            }
            conversations_Conversations.propTypes = {
                conversations: et.a.shape({
                    all: et.a.arrayOf(
                        et.a.shape({ lastPartCreatedAt: et.a.instanceOf(Date).isRequired })
                    ).isRequired,
                    totalPages: et.a.number,
                    pagesFetched: et.a.number,
                    isFetching: et.a.bool,
                    scrollPosition: et.a.number,
                }).isRequired,
                appName: et.a.string.isRequired,
                appAdmins: et.a.arrayOf(et.a.object).isRequired,
                appFeatures: et.a.object,
                inboundConversationsDisabled: et.a.bool,
                userRole: et.a.oneOf(['user', 'lead', 'visitor']).isRequired,
                userId: et.a.string.isRequired,
                onConversationsPage: et.a.func,
                onConversationClick: et.a.func,
                onNewConversationClick: et.a.func,
                onConversationsScroll: et.a.func.isRequired,
            };
            var pr = Object(h.connect)(
                    e => {
                        const {
                                name: t,
                                features: n,
                                activeAdmins: a,
                                inboundConversationsDisabled: o,
                            } = e.app,
                            { role: r, id: i } = e.user,
                            {
                                isFetching: s,
                                pagesFetched: c,
                                totalPages: l,
                                scrollPosition: d,
                            } = e.conversations;
                        return {
                            appName: t,
                            appFeatures: n,
                            appAdmins: a,
                            inboundConversationsDisabled: o,
                            userRole: r,
                            userId: i,
                            conversations: {
                                all: Object(Gn.a)(e),
                                isFetching: s,
                                pagesFetched: c,
                                totalPages: l,
                                scrollPosition: d,
                            },
                        };
                    },
                    e => ({
                        onConversationsPage: (t, n) => {
                            e(Object(Ro.d)($.b, 'onConversationsPage', t, n));
                        },
                        onConversationClick: t => {
                            e(Object(xa.a)(t)), e(Object(Ce.l)($.b, t));
                        },
                        onNewConversationClick: () => {
                            e(Object(ve.j)());
                        },
                        onConversationsScroll: t => {
                            e(Object(Ro.a)(t));
                        },
                    }),
                    (e, t, n) =>
                        Object.assign({}, e, t, n, {
                            onConversationClick: e => {
                                t.onConversationClick(e);
                            },
                        })
                )(conversations_Conversations),
                mr = n(16),
                hr = n(630);
            const ur = Object(f.c)('svg', { target: 'ecskrwv0' })(
                'width:16px;height:16px;color:',
                Object(f.f)('weRunOnIntercomText'),
                ';vertical-align:sub;padding-right:8px;> g{fill:#181818;}'
            );
            var gr = () =>
                o.a.createElement(
                    ur,
                    { focusable: 'false', 'aria-hidden': 'true', viewBox: '0 0 16 16' },
                    o.a.createElement(
                        'g',
                        null,
                        o.a.createElement('path', {
                            d:
                                'M13.9 8.8C13.9 9.1 13.6 9.3 13.3 9.3 13 9.3 12.8 9.1 12.8 8.8L12.8 4C12.8 3.7 13 3.5 13.3 3.5 13.6 3.5 13.9 3.7 13.9 4L13.9 8.8 13.9 8.8ZM13.7 12.1C13.6 12.2 11.6 13.9 8 13.9 4.4 13.9 2.4 12.2 2.3 12.1 2.1 11.9 2.1 11.6 2.3 11.4 2.5 11.2 2.8 11.1 3 11.3 3 11.4 4.8 12.8 8 12.8 11.2 12.8 13 11.3 13 11.3 13.2 11.1 13.5 11.2 13.7 11.4 13.9 11.6 13.9 11.9 13.7 12.1L13.7 12.1ZM2.1 4C2.1 3.7 2.4 3.5 2.7 3.5 3 3.5 3.2 3.7 3.2 4L3.2 8.8C3.2 9.1 3 9.3 2.7 9.3 2.4 9.3 2.1 9.1 2.1 8.8L2.1 4 2.1 4ZM4.8 2.9C4.8 2.6 5 2.4 5.3 2.4 5.6 2.4 5.9 2.6 5.9 2.9L5.9 10.1C5.9 10.4 5.6 10.6 5.3 10.6 5 10.6 4.8 10.4 4.8 10.1L4.8 2.9 4.8 2.9ZM7.5 2.7C7.5 2.4 7.7 2.1 8 2.1 8.3 2.1 8.5 2.4 8.5 2.7L8.5 10.4C8.5 10.7 8.3 10.9 8 10.9 7.7 10.9 7.5 10.7 7.5 10.4L7.5 2.7 7.5 2.7ZM10.1 2.9C10.1 2.6 10.4 2.4 10.7 2.4 11 2.4 11.2 2.6 11.2 2.9L11.2 10.1C11.2 10.4 11 10.6 10.7 10.6 10.4 10.6 10.1 10.4 10.1 10.1L10.1 2.9 10.1 2.9ZM14 0L2 0C0.9 0 0 0.9 0 2L0 14C0 15.1 0.9 16 2 16L14 16C15.1 16 16 15.1 16 14L16 2C16 0.9 15.1 0 14 0L14 0Z',
                        })
                    )
                );
            function br(e, t, n) {
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
            class intercom_link_IntercomLink extends a.Component {
                constructor(...e) {
                    super(...e),
                        br(this, 'handleClick', () => {
                            this.addMetric('clicked');
                        }),
                        br(this, 'getLinkUrl', () => {
                            const {
                                    userId: e,
                                    appName: t,
                                    intercomLinkSolution: n,
                                    appId: a,
                                    currentView: o,
                                    isDeveloperWorkspace: r,
                                } = this.props,
                                i = n || '';
                            let s = 'utm_content=4+';
                            o && (s += `${o}+`),
                                (s += r ? 'developer-workspace&' : 'we-run-on-intercom&');
                            const c = Object(zt.g)() ? 'mobile-web' : 'desktop-web',
                                l = encodeURI(window.location.origin + window.location.pathname);
                            return (
                                'https://www.intercom.com/intercom-link?' +
                                `user_id=${e || ''}&` +
                                `powered_by_app_id=${a || ''}&` +
                                `company=${encodeURIComponent(t)}&` +
                                `solution=${i}&` +
                                s +
                                `utm_source=${c}&` +
                                'utm_medium=messenger&utm_campaign=intercom-link&' +
                                `utm_referrer=${l}`
                            );
                        });
                }
                addMetric(e) {
                    const { currentView: t, isDeveloperWorkspace: n } = this.props,
                        a = n ? 'developer_workspace' : 'we_run_on_intercom';
                    Object(be.e)(e, a, 'messenger', t, {}, 'm4_metric');
                }
                render() {
                    const { isDeveloperWorkspace: e } = this.props;
                    return o.a.createElement(
                        mo,
                        { underConstruction: e },
                        o.a.createElement(
                            uo,
                            null,
                            o.a.createElement(
                                ho,
                                {
                                    href: this.getLinkUrl(),
                                    onClick: this.handleClick,
                                    target: '_blank',
                                },
                                o.a.createElement(gr, null),
                                o.a.createElement(
                                    po,
                                    null,
                                    e ? 'Development Workspace' : Object(O.e)('we_run_on_intercom')
                                )
                            )
                        )
                    );
                }
            }
            br(intercom_link_IntercomLink, 'defaultProps', { currentView: 'conversation' });
            var fr = Object(h.connect)(function(e, t) {
                    const { intercomLinkSolution: n, composerHeight: a, currentView: o } = t;
                    let r, i;
                    e.session && (r = e.session.appId), e.user && (i = e.user.id);
                    const { name: s, isDeveloperWorkspace: c } = e.app;
                    return {
                        appId: r,
                        appName: s,
                        userId: i,
                        composerHeight: a,
                        intercomLinkSolution: n,
                        currentView: o,
                        isDeveloperWorkspace: c,
                    };
                })(intercom_link_IntercomLink),
                vr = n(555),
                xr = n(551),
                yr = n(456);
            const Cr = Object(f.c)('div', {
                    target: 'esmjpyp0',
                })(
                    '-webkit-overflow-scrolling:touch;position:absolute;top:0;left:0;right:0;bottom:0;',
                    ({ typeAheadSuggestionsVisible: e }) =>
                        Object(f.b)(
                            '.intercom-conversation-body-main-group{display:flex;flex-direction:column;flex-grow:1;opacity:',
                            e ? 0.6 : 1,
                            ';}'
                        )
                ),
                Or = Object(f.c)('div', { target: 'esmjpyp1' })(
                    'display:flex;flex-direction:column;position:absolute;top:0;left:0;right:0;bottom:0;overflow-x:hidden;overflow-y:scroll;-webkit-overflow-scrolling:touch;outline-offset:-5px;.intercom-conversation-body-bottom-group{&-enter{opacity:0.01;}&-enter-active{opacity:1;transition:opacity ',
                    100,
                    'ms ease-in ',
                    300,
                    'ms;}&-exit{opacity:1;}&-exit-active{opacity:0;transition:opacity ',
                    100,
                    'ms ease-out;}}'
                );
            Object(f.c)('div', { target: 'esmjpyp2' })({
                name: '2v1rcw',
                styles: 'flex-shrink:0;padding:0 19px;',
            });
            var wr = n(496);
            function jr() {
                return (jr =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function Er(e, t, n) {
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
            class conversation_body_ConversationBody extends a.Component {
                constructor(...e) {
                    super(...e),
                        Er(this, 'partsRef', void 0),
                        Er(this, 'firstUnreadPartRef', void 0),
                        Er(this, 'state', { scrolledToBottom: !1, partsHeight: 0 }),
                        Er(this, 'scrollToFirstUnreadPartOrBottom', () => {
                            const { partsRef: e, firstUnreadPartRef: t } = this;
                            if (!(this.props.conversation.parts.length <= 1))
                                return t
                                    ? Object(W.B)(e, t.offsetTop - 10)
                                    : void this.scrollToBottom();
                        }),
                        Er(this, 'handleScroll', () => {
                            const { partsRef: e } = this;
                            e && this.setState({ scrolledToBottom: Object(W.s)(e, 0) });
                        }),
                        Er(this, 'handleWheel', e => {
                            const { partsRef: t } = this;
                            if (!t) return;
                            const { scrollTop: n } = t,
                                { deltaY: a } = e,
                                { isHeaderCollapsed: o } = this.props;
                            ((o && n >= 0 && a > 0) || (n > 0 && a < 0)) && e.stopPropagation(),
                                Object(wr.a)(e);
                        }),
                        Er(this, 'handlePartsLengthChange', () => {
                            const { partsRef: e } = this;
                            if (!e) return;
                            const { isHeaderCollapsed: t, onHeaderCollapse: n } = this.props;
                            !t && Object(W.r)(e) && n(), this.scrollToBottom();
                        }),
                        Er(this, 'handlePartsHeightChange', () => {
                            if (!this.partsRef) return;
                            const { clientHeight: e } = this.partsRef;
                            this.setState({ partsHeight: e });
                        }),
                        Er(this, 'handleHeaderExpand', () => {
                            this.scrollToTop();
                        }),
                        Er(this, 'handleSuggestionsHeightChange', e => {
                            e > this.context.suggestionsMaxHeightWithExpandedHeaderPx &&
                                this.props.onHeaderCollapse();
                            const { partsRef: t } = this;
                            t && Object(W.e)(t);
                        }),
                        Er(
                            this,
                            'didSuggestionsChange',
                            e =>
                                e.conversationSuggestions &&
                                this.props.conversationSuggestions &&
                                !c()(
                                    e.conversationSuggestions.suggestions,
                                    this.props.conversationSuggestions.suggestions
                                ) &&
                                this.props.conversationSuggestions.suggestions &&
                                this.props.conversationSuggestions.suggestions.length
                        ),
                        Er(this, 'scrollToBottom', () => {
                            const { partsRef: e } = this;
                            e && Object(W.z)(e);
                        }),
                        Er(this, 'setPartsRef', e => {
                            this.partsRef = e;
                        }),
                        Er(this, 'setUnreadPartRef', (e, t) => {
                            const { readAt: n } = this.props.conversation;
                            !this.firstUnreadPartRef &&
                                n &&
                                n < t.createdAt &&
                                (this.firstUnreadPartRef = e);
                        });
                }
                componentDidMount() {
                    const { conversation: e, onHeaderCollapse: t } = this.props;
                    void 0 !== e.id && t(),
                        this.handlePartsHeightChange(),
                        this.scrollToFirstUnreadPartOrBottom();
                }
                componentDidUpdate(e) {
                    this.didFetchingEnd(e) && this.scrollToFirstUnreadPartOrBottom(),
                        this.didPartsLengthChange(e) && this.handlePartsLengthChange(),
                        this.didHeaderExpand(e) && this.handleHeaderExpand(),
                        this.didSuggestionsChange(e) && this.scrollToBottom();
                }
                didFetchingEnd(e) {
                    const { isFetching: t, isUpdating: n } = this.props.conversation;
                    return e.conversation.isFetching && !e.conversation.isUpdating && !t && !n;
                }
                didPartsLengthChange(e) {
                    return e.conversation.parts.length !== this.props.conversation.parts.length;
                }
                didHeaderExpand(e) {
                    return e.isHeaderCollapsed && !this.props.isHeaderCollapsed;
                }
                scrollToTop() {
                    const { partsRef: e } = this;
                    e && Object(W.B)(e, 0);
                }
                getPartsStyle() {
                    return { bottom: this.props.composerHeight };
                }
                getPartsRef() {
                    return this.partsRef;
                }
                renderParts() {
                    const {
                            appName: e,
                            conversation: t,
                            frameWindow: n,
                            composerHeight: a,
                            onRetry: r,
                            onReactionSelect: i,
                            onArticleCardClick: s,
                            conversationSuggestions: c,
                            temporaryExpectationsMessage: l,
                        } = this.props,
                        { partsHeight: d, scrolledToBottom: p } = this.state,
                        m = d - a;
                    return o.a.createElement(
                        xr.a,
                        {
                            errorText: 'Something went wrong loading the conversation',
                            align: 'center',
                            style: { marginTop: '20px', flex: 1 },
                        },
                        o.a.createElement(hr.a, {
                            appName: e,
                            conversation: t,
                            maxHeight: m,
                            scrolledToBottom: p,
                            frameWindow: n,
                            setPartRef: this.setUnreadPartRef,
                            onRetry: r,
                            onReactionSelect: i,
                            onArticleCardClick: s,
                            conversationSuggestions: c,
                            temporaryExpectationsMessage: l,
                        })
                    );
                }
                renderBottomGroup() {
                    const {
                        onSuggestionClicked: e,
                        setComposerSuggestionsDismissed: t,
                        conversationSuggestions: n,
                        typeAheadSuggestions: a,
                        isIntercomLinkEnabled: r,
                        conversation: i,
                    } = this.props;
                    if (!r && !n && !a) return null;
                    const s = {
                        conversation: i,
                        setComposerSuggestionsDismissed: t,
                        onClick: e,
                        onHeightChange: this.handleSuggestionsHeightChange,
                    };
                    return o.a.createElement(
                        xr.a,
                        {
                            errorText: 'Something went wrong loading the suggestions',
                            align: 'center',
                            style: { marginBottom: '10px' },
                        },
                        o.a.createElement(vr.a, jr({}, s, { conversationSuggestions: n })),
                        o.a.createElement(
                            b.CSSTransition,
                            {
                                classNames: 'intercom-conversation-body-bottom-group',
                                timeout: { enter: 400, exit: 100 },
                            },
                            o.a.createElement(
                                o.a.Fragment,
                                null,
                                r &&
                                    o.a.createElement(fr, {
                                        intercomLinkSolution: this.props.conversation
                                            .intercomLinkSolution,
                                    })
                            )
                        )
                    );
                }
                renderTypeAheadSuggestions() {
                    const {
                        onSuggestionClicked: e,
                        setComposerSuggestionsDismissed: t,
                        typeAheadSuggestions: n,
                        conversation: a,
                        onHeaderCollapse: r,
                    } = this.props;
                    if (!n) return null;
                    const i = {
                        conversation: a,
                        setComposerSuggestionsDismissed: t,
                        onClick: e,
                        onHeightChange: this.handleSuggestionsHeightChange,
                    };
                    return o.a.createElement(
                        xr.a,
                        {
                            errorText: 'Something went wrong loading the suggestions',
                            align: 'center',
                            style: { marginBottom: '10px' },
                        },
                        o.a.createElement(
                            vr.a,
                            jr({}, i, { conversationSuggestions: n, onSuggestionsShow: r })
                        ),
                        o.a.createElement('div', { style: { border: '2px solid transparent' } })
                    );
                }
                render() {
                    const { typeAheadSuggestions: e } = this.props,
                        { isFetching: t, isUpdating: n } = this.props.conversation,
                        a = t && !n,
                        r = e && e.suggestions.length > 0;
                    return o.a.createElement(
                        Cr,
                        {
                            className: 'intercom-conversation-body',
                            onScroll: this.handleScroll,
                            onWheel: this.handleWheel,
                            typeAheadSuggestionsVisible: r,
                            bottomOffset: this.getPartsStyle().bottom,
                        },
                        o.a.createElement(
                            Or,
                            {
                                className: 'intercom-conversation-body-parts',
                                ref: this.setPartsRef,
                                style: this.getPartsStyle(),
                                tabIndex: '0',
                                'aria-live': 'assertive',
                                'aria-atomic': 'false',
                                role: 'alert',
                            },
                            o.a.createElement(
                                'div',
                                { className: 'intercom-conversation-body-main-group' },
                                a ? o.a.createElement(Mn.a, null) : this.renderParts(),
                                a ? null : this.renderBottomGroup()
                            ),
                            a ? null : this.renderTypeAheadSuggestions()
                        )
                    );
                }
            }
            Er(conversation_body_ConversationBody, 'defaultProps', { composerHeight: 0 }),
                Er(conversation_body_ConversationBody, 'contextType', yr.ThemeContext);
            var kr = Object(h.connect)(e => {
                    const {
                        name: t,
                        isIntercomLinkEnabled: n,
                        temporaryExpectationsMessage: a,
                    } = e.app;
                    return {
                        appName: t,
                        isIntercomLinkEnabled: n,
                        temporaryExpectationsMessage: a,
                    };
                })(conversation_body_ConversationBody),
                Sr = n(633),
                _r = n(503);
            const Pr = Object(f.c)('div', { target: 'eszl1uz0' })({
                name: '6ve7wk',
                styles: 'position:absolute;bottom:0;left:0;right:0;border-radius:0 0 6px 6px;',
            });
            var Nr = n(477);
            const Tr = Object(f.c)('div', { target: 'e1c81gv20' })(
                    'padding-bottom:2px;border-top:1px solid ',
                    Object(f.f)('composerBorder'),
                    ';background-color:',
                    Object(f.f)('white'),
                    ';box-shadow:rgba(0,0,0,0.08) 0px 0px 20px 0px;'
                ),
                Ar = Object(f.c)('div', { target: 'e1c81gv21' })({
                    name: '11km39e',
                    styles: 'padding-bottom:22px;text-align:center;',
                }),
                Hr = Object(f.c)('div', { target: 'e1c81gv22' })(
                    ({ theme: e }) =>
                        Object(f.b)(
                            'color:',
                            e.isPrimaryColorLight ? Object(Nr.b)(e.metaText, 15) : e.metaText,
                            ';'
                        ),
                    ' margin:16px auto;text-align:center;font-size:13px;padding-top:4px;'
                );
            function Br(e, t, n) {
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
            class conversation_ended_ConversationEnded extends a.Component {
                constructor(...e) {
                    super(...e), Br(this, 'composer', void 0);
                }
                componentDidMount() {
                    this.handleHeightChange();
                }
                handleHeightChange() {
                    const { onHeightChange: e } = this.props;
                    e && this.composer && e(this.composer.clientHeight);
                }
                render() {
                    const { allowNewConversation: e } = this.props;
                    return o.a.createElement(
                        Tr,
                        { ref: e => (this.composer = e) },
                        o.a.createElement(Hr, null, Object(O.e)('conversation_has_ended')),
                        e
                            ? o.a.createElement(
                                  Ar,
                                  null,
                                  o.a.createElement(new_conversation_button_NewConversationButton, {
                                      onClick: this.props.onNewConversationClick,
                                      variant: 'default',
                                      currentView: 'conversation',
                                  })
                              )
                            : null
                    );
                }
            }
            Br(conversation_ended_ConversationEnded, 'contextType', na.a);
            class conversation_footer_ConversationFooter extends a.Component {
                componentWillUnmount() {
                    this.props.onHeightChange(0);
                }
                shouldShowReactionPicker() {
                    const e = Object(Zn.d)(this.props.conversation);
                    return e && e.reactionsReply && 'text' !== e.replyType;
                }
                renderComposer() {
                    const {
                        appWindow: e,
                        frameWindow: t,
                        conversation: n,
                        showEmojiPicker: a,
                        showGifPicker: r,
                        onHeightChange: i,
                        onEmojiPickerToggle: s,
                        onGifPickerToggle: c,
                        onHeaderCollapse: l,
                        headerHeight: d,
                        shouldShowUpfrontEmailComposer: p,
                        shouldShowConversationSuggestions: m,
                        conversationSuggestions: h,
                    } = this.props;
                    return o.a.createElement(Sr.a, {
                        conversation: n,
                        appWindow: e,
                        frameWindow: t,
                        showEmojiPicker: a,
                        showGifPicker: r,
                        onEmojiPickerToggle: s,
                        onGifPickerToggle: c,
                        onHeightChange: i,
                        onHeaderCollapse: l,
                        shouldShowConversationSuggestions: m,
                        shouldShowUpfrontEmailComposer: p,
                        headerHeight: d,
                        conversationSuggestions: h,
                        isPrimaryColorReadable: this.context.isPrimaryColorReadable,
                    });
                }
                renderReactionPicker() {
                    const { conversation: e, onReactionSelect: t, onHeightChange: n } = this.props,
                        { reactionsReply: a } = Object(Zn.d)(e),
                        { reactionSet: r, reactionIndex: i } = a;
                    return o.a.createElement(_r.a, {
                        reactionSet: r,
                        reactionIndex: i,
                        onReactionSelect: t,
                        onHeightChange: n,
                    });
                }
                renderConversationEnded() {
                    const {
                        onNewConversationClick: e,
                        onHeightChange: t,
                        allowNewConversation: n,
                    } = this.props;
                    return o.a.createElement(conversation_ended_ConversationEnded, {
                        onNewConversationClick: e,
                        onHeightChange: t,
                        allowNewConversation: n,
                    });
                }
                renderComposerOrConversationEnded() {
                    return this.props.conversation.preventEndUserReplies
                        ? this.renderConversationEnded()
                        : this.renderComposer();
                }
                render() {
                    return o.a.createElement(
                        Pr,
                        null,
                        this.shouldShowReactionPicker()
                            ? this.renderReactionPicker()
                            : this.renderComposerOrConversationEnded()
                    );
                }
            }
            !(function(e, t, n) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n);
            })(conversation_footer_ConversationFooter, 'contextType', na.a);
            var Rr = n(485),
                Mr = n(642),
                Lr = n(153);
            const Fr = e => {
                if (e.length <= 1) return !1;
                const t = [];
                for (const n in e) t.push(e[n].kind);
                return t.indexOf('string') >= 0 && t.indexOf('file') >= 0;
            };
            var zr = n(625),
                Dr = n(489);
            const Ir = Object(f.d)(
                    '0%{opacity:0;transform:translateX(8px);}100%{opacity:1;transform:translateX(0);}'
                ),
                Wr = Object(f.d)(
                    '0%{opacity:1;transform:translateX(0);}100%{opacity:0;transform:translateX(8px);}'
                ),
                Ur = Object(f.d)('0%{opacity:0;}100%{opacity:1;}'),
                Vr = Object(f.d)('0%{opacity:1;}100%{opacity:0;}'),
                qr = Object(f.d)(
                    '0%{opacity:0;transform:translateY(15px);}100%{opacity:1;transform:translateY(0);}'
                ),
                Xr = Object(f.d)(
                    '0%{opacity:1;transform:translateY(0);}100%{opacity:0;transform:translateY(15px);}'
                ),
                Gr = Object(f.c)('div', { target: 'e1qfa7ao0' })(
                    'position:absolute;top:0;bottom:0;left:0;right:0;',
                    zr.a.className,
                    '{opacity:1;transform:translateX(0);animation-name:',
                    Ir,
                    ';animation-duration:',
                    320,
                    'ms;animation-timing-function:',
                    'cubic-bezier(0.23, 1, 0.32, 1)',
                    ';animation-delay:',
                    230,
                    'ms;animation-fill-mode:backwards;}',
                    zr.b.className,
                    ':after{animation-name:',
                    Ur,
                    ';animation-duration:',
                    320,
                    'ms;animation-timing-function:',
                    'cubic-bezier(0.23, 1, 0.32, 1)',
                    ';animation-delay:',
                    230,
                    'ms;animation-fill-mode:backwards;}',
                    uo.className,
                    ',',
                    Pr.className,
                    ',',
                    Dr.c.className,
                    '{opacity:1;transform:translateY(0);animation-name:',
                    qr,
                    ';animation-duration:',
                    320,
                    'ms;animation-timing-function:',
                    'cubic-bezier(0.23, 1, 0.32, 1)',
                    ';animation-delay:',
                    80,
                    'ms;animation-fill-mode:both;}&.intercom-messenger-body-view-enter{z-index:',
                    Object(S.m)(),
                    ';}&.intercom-messenger-body-view-exit{z-index:',
                    Object(S.m)(1),
                    ';',
                    zr.a.className,
                    '{animation-name:',
                    Wr,
                    ';animation-duration:',
                    320,
                    'ms;animation-timing-function:',
                    'cubic-bezier(0.23, 1, 0.32, 1)',
                    ';animation-delay:',
                    20,
                    'ms;animation-fill-mode:both;}',
                    zr.b.className,
                    ':after{animation-name:',
                    Vr,
                    ';animation-duration:',
                    320,
                    'ms;animation-timing-function:',
                    'cubic-bezier(0.23, 1, 0.32, 1)',
                    ';animation-delay:',
                    20,
                    'ms;animation-fill-mode:both;}',
                    uo.className,
                    ',',
                    Pr.className,
                    ',',
                    Dr.c.className,
                    '{animation-name:',
                    Xr,
                    ';animation-duration:',
                    320,
                    'ms;animation-timing-function:',
                    'cubic-bezier(0.23, 1, 0.32, 1)',
                    ';animation-delay:',
                    120,
                    'ms;animation-fill-mode:both;}.intercom-messenger-from-conversation &{',
                    uo.className,
                    ',',
                    Dr.c.className,
                    '{animation:none;}}}&.intercom-messenger-body-view-exit-active{',
                    uo.className,
                    ',',
                    Dr.c.className,
                    '{opacity:0;}}',
                    ({ isFetching: e }) =>
                        e &&
                        Object(f.b)(
                            zr.a.className,
                            ',',
                            uo.className,
                            ',',
                            Pr.className,
                            '{opacity:0;animation:none;}'
                        )
                );
            function Zr(e, t, n) {
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
            class conversation_Conversation extends a.Component {
                constructor(...e) {
                    super(...e),
                        Zr(this, 'state', {
                            isEmojiPickerOpen: !1,
                            isGifPickerOpen: !1,
                            footerHeight: 0,
                        }),
                        Zr(this, 'addConversationOpenedMetric', () => {
                            const { conversation: e, selfServeSuggestionsEnabled: t } = this.props;
                            Object(be.e)(
                                'viewed',
                                e.id ? 'conversation' : 'new_conversation',
                                'messenger',
                                '',
                                {
                                    conversation_id: e.id,
                                    self_serve_suggestions_enabled: !!t,
                                    url: window.parent.location.href,
                                }
                            );
                        }),
                        Zr(this, 'handleEmojiPickerToggle', () => {
                            this.setState({ isEmojiPickerOpen: !this.state.isEmojiPickerOpen });
                        }),
                        Zr(this, 'handleGifPickerToggle', () => {
                            this.setState({ isGifPickerOpen: !this.state.isGifPickerOpen });
                        }),
                        Zr(this, 'handleFileSubmit', e => {
                            this.isComposerDisabled() ||
                                this.isComposerHidden() ||
                                (this.props.uploadsEnabled &&
                                    e &&
                                    0 !== e.length &&
                                    this.createAttachmentParts(e));
                        }),
                        Zr(this, 'createAttachmentParts', e => {
                            e.length > 5
                                ? Object(be.c)('attachment_limit_exceeded', {
                                      file_count: e.length,
                                      place: 'conversation',
                                  })
                                : Array.from(e).forEach(e =>
                                      this.createBlocksForImageOrAttachment(e)
                                  );
                        }),
                        Zr(this, 'createBlocksForImageOrAttachment', e => {
                            const { onAttachmentSubmit: t } = this.props;
                            Object(T.b)(e).then(n => {
                                if (n) {
                                    const { width: a, height: o, src: r } = n,
                                        i = Object(Lr.b)(n.src, e.name, e.type);
                                    t(Object(Ca.b)(r, a, o), i);
                                } else {
                                    const { name: n, type: a, size: o } = e;
                                    t(Object(Ca.a)(n, a, o), e);
                                }
                            });
                        }),
                        Zr(this, 'handlePaste', e => {
                            this.handleFileSubmit(
                                (e => {
                                    const t = e.clipboardData || e.originalEvent.clipboardData,
                                        { items: n } = t,
                                        a = [],
                                        o = Fr(n);
                                    for (const e in n) {
                                        const t = n[e];
                                        if ('file' === t.kind && !o) {
                                            const e = t.getAsFile();
                                            a.push(e);
                                        }
                                    }
                                    return a;
                                })(e)
                            );
                        }),
                        Zr(this, 'handleDragOver', e => {
                            e.stopPropagation(), e.preventDefault();
                        }),
                        Zr(this, 'handleDrop', e => {
                            e.stopPropagation(),
                                e.preventDefault(),
                                this.handleFileSubmit((e => e.dataTransfer.files)(e));
                        }),
                        Zr(this, 'handleFooterHeightChange', e => {
                            e !== this.state.footerHeight && this.setState({ footerHeight: e });
                        }),
                        Zr(this, 'handleReactionSelect', e => {
                            this.props.onReactionSelect(e);
                        }),
                        Zr(this, 'handleClick', () => {
                            const { isEmojiPickerOpen: e, isGifPickerOpen: t } = this.state;
                            e
                                ? this.setState({ isEmojiPickerOpen: !1 })
                                : t && this.setState({ isGifPickerOpen: !1 });
                        });
                }
                componentDidMount() {
                    const { conversation: e, userIsPresent: t } = this.props;
                    !e.read && t && this.handleConversationRead(),
                        this.addConversationOpenedMetric();
                }
                addReplyMetric(e) {
                    const t = Object(Zn.d)(e);
                    Object(Zn.l)(t)
                        ? this.addOperatorReplyMetric(e, t)
                        : this.addAdminReplyMetric(e, t);
                }
                addAdminReplyMetric(e, t) {
                    Object(be.e)('received', 'reply', 'messenger', 'in_conversation', {
                        conversation_id: e.id,
                        part_id: t.id,
                    });
                }
                addOperatorReplyMetric(e, t) {
                    Object(be.e)('received', 'operator_reply', 'messenger', 'in_conversation', {
                        conversation_id: e.id,
                        part_id: t.id,
                        type: Object(Zn.f)(t),
                    });
                }
                componentDidUpdate(e) {
                    const { conversation: t } = e;
                    this.shouldMarkConversationAsRead(e) && this.handleConversationRead(),
                        'all' === t.fetchState &&
                            Object(Zn.a)(t) < Object(Zn.a)(this.props.conversation) &&
                            this.addReplyMetric(this.props.conversation);
                }
                handleConversationRead() {
                    this.props.onConversationRead();
                }
                isComposerDisabled() {
                    const { parts: e } = this.props.conversation;
                    if (0 === e.length) return !1;
                    const { saveState: t } = e[0];
                    return 'saving' === t || 'failed' === t;
                }
                isInboundBotWithDisabledComposer() {
                    const { conversationSuggestions: e } = this.props;
                    return e.isInboundBotSuggestions && e.composerDisabled;
                }
                isComposerHidden() {
                    const { conversation: e } = this.props,
                        { composerState: t } = e;
                    return (
                        !t.visible ||
                        e.preventEndUserReplies ||
                        this.isInboundBotWithDisabledComposer()
                    );
                }
                shouldMarkConversationAsRead(e) {
                    if (!this.props.userIsPresent) return !1;
                    const { conversation: t, userIsPresent: n } = e;
                    return (t.read && !this.props.conversation.read) || (!t.read && !n);
                }
                shouldShowFooter() {
                    const { conversation: e } = this.props;
                    if (this.isComposerHidden() && !e.preventEndUserReplies) return !1;
                    const t = Object(Zn.d)(e);
                    return !(
                        t &&
                        'attribute_collector' === t.replyType &&
                        ((n = t.form), void 0 === n.attributes.find(({ value: e }) => null != e))
                    );
                    var n;
                }
                renderBody() {
                    const {
                        frameWindow: e,
                        conversation: t,
                        isHeaderCollapsed: n,
                        onArticleCardClick: a,
                        onRetry: r,
                        onHeaderCollapse: i,
                        conversationSuggestions: s,
                        typeAheadSuggestions: c,
                        onSuggestionClicked: l,
                        setComposerSuggestionsDismissed: d,
                        onNewConversationClick: p,
                    } = this.props;
                    return o.a.createElement(kr, {
                        conversation: t,
                        conversationSuggestions: s,
                        typeAheadSuggestions: c,
                        isHeaderCollapsed: n,
                        composerHeight: this.state.footerHeight,
                        frameWindow: e,
                        onArticleCardClick: a,
                        onReactionSelect: this.handleReactionSelect,
                        onRetry: r,
                        onHeaderCollapse: i,
                        onSuggestionClicked: l,
                        setComposerSuggestionsDismissed: d,
                        onNewConversationClick: p,
                    });
                }
                renderFooter() {
                    const {
                        appWindow: e,
                        frameWindow: t,
                        conversation: n,
                        onHeaderCollapse: a,
                        shouldShowUpfrontEmailComposer: r,
                        allowNewConversation: i,
                        headerHeight: s,
                        conversationSuggestions: c,
                        onNewConversationClick: l,
                    } = this.props;
                    return o.a.createElement(conversation_footer_ConversationFooter, {
                        conversation: n,
                        appWindow: e,
                        frameWindow: t,
                        showEmojiPicker: this.state.isEmojiPickerOpen,
                        showGifPicker: this.state.isGifPickerOpen,
                        onHeightChange: this.handleFooterHeightChange,
                        onEmojiPickerToggle: this.handleEmojiPickerToggle,
                        onGifPickerToggle: this.handleGifPickerToggle,
                        onReactionSelect: this.handleReactionSelect,
                        onHeaderCollapse: a,
                        shouldShowUpfrontEmailComposer: r,
                        allowNewConversation: i,
                        headerHeight: s,
                        conversationSuggestions: c,
                        onNewConversationClick: l,
                    });
                }
                render() {
                    const { isFetching: e, isUpdating: t } = this.props.conversation;
                    return o.a.createElement(
                        Rr.a.Provider,
                        { value: Rr.b },
                        o.a.createElement(
                            Gr,
                            {
                                className: 'intercom-conversation',
                                onPaste: this.handlePaste,
                                onDragOver: this.handleDragOver,
                                onDrop: this.handleDrop,
                                onClick: this.handleClick,
                                tabIndex: '-1',
                                role: 'presentation',
                                isFetching: e && !t,
                            },
                            this.renderBody(),
                            this.shouldShowFooter() ? this.renderFooter() : null
                        )
                    );
                }
            }
            conversation_Conversation.propTypes = {
                conversation: et.a.shape({
                    id: et.a.string,
                    parts: et.a.arrayOf(
                        et.a.shape({ saveState: et.a.oneOf(['saved', 'saving', 'failed']) })
                    ).isRequired,
                    read: et.a.bool.isRequired,
                    preventEndUserReplies: et.a.bool,
                    fetchState: et.a.oneOf(['summary', 'partial', 'all']),
                    isFetching: et.a.bool.isRequired,
                    isUpdating: et.a.bool.isRequired,
                    composerState: et.a.shape({ visible: et.a.bool.isRequired }).isRequired,
                }).isRequired,
                conversationSuggestions: et.a.shape({
                    prompt: et.a.any,
                    isInboundBotSuggestions: et.a.bool,
                    composerDisabled: et.a.bool,
                    suggestions: et.a.arrayOf(
                        et.a.shape({
                            uuid: et.a.string.isRequired,
                            text: et.a.string.isRequired,
                            preAction: et.a.string,
                        })
                    ),
                }),
                typeAheadSuggestions: et.a.shape({
                    prompt: et.a.any,
                    isInboundBotSuggestions: et.a.bool,
                    composerDisabled: et.a.bool,
                    suggestions: et.a.arrayOf(
                        et.a.shape({
                            uuid: et.a.string.isRequired,
                            text: et.a.string.isRequired,
                            preAction: et.a.string,
                        })
                    ),
                }),
                appWindow: et.a.any.isRequired,
                frameWindow: et.a.any.isRequired,
                userIsPresent: et.a.bool.isRequired,
                userSuppliedEmail: et.a.string,
                role: et.a.string,
                shouldShowUpfrontEmailComposer: et.a.bool,
                allowNewConversation: et.a.bool,
                isHeaderCollapsed: et.a.bool,
                uploadsEnabled: et.a.bool,
                onReactionSelect: et.a.func.isRequired,
                onConversationRead: et.a.func.isRequired,
                onArticleCardClick: et.a.func,
                onRetry: et.a.func.isRequired,
                onAttachmentSubmit: et.a.func.isRequired,
                onHeaderCollapse: et.a.func.isRequired,
                headerHeight: et.a.number,
                onSuggestionClicked: et.a.func,
                setComposerSuggestionsDismissed: et.a.func,
                selfServeSuggestionsEnabled: et.a.bool,
                onNewConversationClick: et.a.func,
            };
            const $r = Object(Mr.a)(conversation_Conversation);
            var Yr = n(558),
                Jr = n(154),
                Kr = n(144),
                Qr = n(521);
            var ei = Object(h.connect)(
                e => {
                    const {
                            userConversationAttachmentsEnabled: t,
                            userConversationGifsEnabled: n,
                        } = e.app,
                        { isPresent: a } = e.user,
                        o = Object(ye.a)(e),
                        r = e.app && e.app.officeHoursResponse,
                        s = e.borderless,
                        { lastParticipatingAdmin: c } = o,
                        l = Object(i.i)(e),
                        { allowNewConversation: d } = Object(i.a)(e);
                    return {
                        conversation: o,
                        conversationSuggestions: Object(Qr.a)(e),
                        typeAheadSuggestions: Object(Qr.d)(e),
                        userIsPresent: a,
                        officeHoursResponse: r,
                        isBorderless: s,
                        lastParticipatingAdmin: c,
                        uploadsEnabled: t,
                        gifsEnabled: n,
                        shouldShowUpfrontEmailComposer: l,
                        allowNewConversation: d,
                        selfServeSuggestionsEnabled: Object(Qr.e)(e),
                    };
                },
                e => ({
                    onArticleCardClick: (t, n) => e(Object(Yr.c)($.b, t, n)),
                    onConversationRead: t => {
                        e(Object(Ce.n)($.b, t));
                    },
                    onRetry: (t, n) => {
                        e(Object(Ce.p)($.b, t, n));
                    },
                    onReactionSelect: (t, n) => {
                        e(Object(Ce.k)($.b, t, n, !0));
                    },
                    setComposerSuggestionsDismissed: t => {
                        e(Object(Kr.b)(t));
                    },
                    onAttachmentSubmit: (t, n, a, o, r = new Date()) => {
                        const i = { clientId: n, createdAt: r, body: a, file: o };
                        e(Object(Ce.j)($.b, t, i));
                    },
                    onSuggestionClicked: (t, n, a, o) => e(Object(Jr.a)($.b, t, n, !1, a, !1, o)),
                    onNewConversationClick: () => {
                        e(Object(ve.j)('', !0));
                    },
                }),
                (e, t, n) => {
                    const a = e.conversation.id,
                        o = e.officeHoursResponse,
                        r = {
                            onConversationRead: () => {
                                t.onConversationRead(a);
                            },
                            onAttachmentSubmit: (e, n) => {
                                t.onAttachmentSubmit(a, Object(mr.b)(), e, n);
                            },
                            onRetry: n => {
                                t.onRetry(e.conversation, n);
                            },
                            onReactionSelect: e => {
                                t.onReactionSelect(a, e);
                            },
                            setComposerSuggestionsDismissed: () => {
                                t.setComposerSuggestionsDismissed(a);
                            },
                            onSuggestionClicked: n => {
                                const { conversation: a } = e,
                                    r = Object(Qr.c)(a);
                                return t.onSuggestionClicked(a, n, r, o);
                            },
                        };
                    return Object.assign({}, n, e, t, r);
                }
            )($r);
            const ti = Object(f.c)('div', { target: 'e8111ny0' })({
                name: '1xafcqx',
                styles:
                    'position:relative;flex:1;background-color:white;box-shadow:inset 0 21px 4px -20px rgba(0,0,0,0.2);',
            });
            let ni = 1;
            function ai(e) {
                const { isBooting: t, currentView: n } = e,
                    r = Object(Tn.a)(n);
                return o.a.createElement(
                    ti,
                    null,
                    o.a.createElement(
                        b.TransitionGroup,
                        { component: a.Fragment, appear: !0, enter: !0, exit: !0 },
                        o.a.createElement(
                            b.CSSTransition,
                            {
                                key: t
                                    ? 'booting'
                                    : 'empty-screen' === n
                                    ? 'empty-screen'
                                    : 'home-screen' === n
                                    ? 'home-screen'
                                    : 'conversations' === n
                                    ? 'conversations'
                                    : 'conversation' === n ||
                                      'messenger-trigger' === n ||
                                      'new-conversation' === n
                                    ? ('conversation' === r && 'new-conversation' === n && ni++,
                                      `conversation-${ni}`)
                                    : void 0,
                                classNames: 'intercom-messenger-body-view',
                                timeout: { enter: 1850, exit: 320 },
                            },
                            (() => {
                                const {
                                    isBooting: t,
                                    wasBooting: n,
                                    isHeaderCollapsed: a,
                                    headerHeight: r,
                                    currentView: i,
                                    appWindow: s,
                                    frameWindow: c,
                                    onHeaderCollapse: l,
                                    onScroll: d,
                                } = e;
                                return t
                                    ? o.a.createElement(Rn, null)
                                    : 'home-screen' === i
                                    ? o.a.createElement(Wo, {
                                          headerHeight: r,
                                          onScroll: d,
                                          frameWindow: c,
                                          wasBooting: n,
                                      })
                                    : 'empty-screen' === i
                                    ? o.a.createElement(Xn, null)
                                    : 'conversations' === i
                                    ? o.a.createElement(pr, { appWindow: s })
                                    : 'messenger-trigger' === i
                                    ? o.a.createElement(In, null)
                                    : o.a.createElement(ei, {
                                          isHeaderCollapsed: a,
                                          appWindow: s,
                                          frameWindow: c,
                                          onHeaderCollapse: l,
                                          headerHeight: r || 211,
                                      });
                            })()
                        )
                    )
                );
            }
            var oi = n(480),
                ri = n(619);
            const ii = { opacity: 0, transform: 'translate(0, 42px)' },
                si = { opacity: 1, transform: 'translate(0, 0)' };
            function ci(e) {
                const { children: t } = e,
                    n = Object(ri.a)(1150);
                return Object(oi.useTransition)([null, t], null, {
                    from: ii,
                    enter: si,
                    leave: ii,
                    trail: n ? (t ? 250 : 0) : 1150,
                    immediate: !1,
                }).map(
                    ({ item: e, props: t, key: n }) =>
                        e && o.a.createElement(oi.animated.div, { style: t, key: n }, e)
                );
            }
            var li = n(468),
                di = n(639),
                pi = n(84),
                mi = { name: '17ny6oe', styles: '-webkit-text-size-adjust:100%;' };
            const hi = Object(f.c)('div', { target: 'e16fp1gy0' })(
                '-webkit-overflow-scrolling:touch;display:flex;flex-direction:column;justify-content:flex-start;position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden;',
                ({ theme: e }) => e.isMobileSize && mi,
                ' ',
                ({ theme: e }) =>
                    e.tabNavigation &&
                    Object(f.b)(
                        "&:focus{outline:none !important;&:after{content:'';display:block;position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none;z-index:",
                        Object(S.m)(3, e),
                        ';outline-offset:-5px;outline-style:solid;outline-style:auto;outline-width:5px;}}'
                    ),
                ' @media (-ms-high-contrast:active){border:1px solid white;}'
            );
            function ui() {
                return (ui =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
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
            class messenger_Messenger extends a.Component {
                constructor(...e) {
                    super(...e),
                        gi(this, 'focusTrap', null),
                        gi(this, 'messengerContainer', null),
                        gi(this, 'state', {
                            maxHeaderHeight: 0,
                            headerHeight: void 0,
                            bodyScrollTop: 0,
                            previousView: void 0,
                            wasBooting: !1,
                            prevProps: this.props,
                        }),
                        gi(this, 'handleHeaderHeightChange', e => {
                            this.setState({ maxHeaderHeight: e, headerHeight: e });
                        }),
                        gi(this, 'handleWheel', e => {
                            const {
                                    currentView: t,
                                    shouldShowUpfrontEmailComposer: n,
                                    upfrontEmailCollectorShowing: a,
                                } = this.props,
                                { headerHeight: o, maxHeaderHeight: r } = this.state;
                            if (!o) return;
                            if ('home-screen' === t) return;
                            if (n && a) return;
                            const i = R(o - e.deltaY, 75, r);
                            this.setState({ headerHeight: i }), this.handleWheelEnd(e);
                        }),
                        gi(
                            this,
                            'handleWheelEnd',
                            Object(Uo.a)(() => {
                                this.getHeaderPercentageCollapsed() <= 0.5
                                    ? this.handleHeaderExpand()
                                    : this.handleHeaderCollapse();
                            }, 200)
                        ),
                        gi(this, 'handleHeaderExpand', () => {
                            this.setState({ headerHeight: this.state.maxHeaderHeight });
                        }),
                        gi(this, 'handleHeaderCollapse', () => {
                            this.setState({ headerHeight: 75 });
                        }),
                        gi(this, 'handleBodyScroll', e => {
                            this.setState({ bodyScrollTop: e });
                        });
                }
                componentDidMount() {
                    this.addMobileTagsAndClasses(), this.focusMessenger();
                    const e = () => Object(V.f)();
                    (this.focusTrap = new U.a({
                        document: this.props.frameWindow.document,
                        firstElement: e,
                        lastElement: e,
                        disableEndingTrap: () => this.props.isLauncherEnabled,
                    })),
                        Object(be.k)('openedMessenger');
                }
                componentDidUpdate(e) {
                    const { currentView: t } = this.props;
                    this.state.wasBooting &&
                        this.focusTrap &&
                        this.focusTrap.recalculateFocusableElements(),
                        e.currentView !== t && 'home-screen' === t && this.focusMessenger();
                }
                componentWillUnmount() {
                    this.removeMobileTagsAndClasses(),
                        this.restoreMobileScrollPosition(),
                        this.focusTrap && this.focusTrap.restore();
                }
                static getDerivedStateFromProps(e, t) {
                    if (!t || c()(e, t.prevProps)) return null;
                    const { currentView: n, isBooting: a } = e;
                    return t.prevProps.currentView !== n
                        ? { previousView: t.prevProps.currentView, prevProps: e }
                        : t.prevProps.isBooting || !a
                        ? { wasBooting: t.prevProps.isBooting, prevProps: e }
                        : { prevProps: e };
                }
                focusMessenger() {
                    const { currentView: e } = this.props;
                    this.messengerContainer &&
                        'conversation' !== e &&
                        'new-conversation' !== e &&
                        this.messengerContainer.focus();
                }
                getHeaderPercentageCollapsed() {
                    const { maxHeaderHeight: e, headerHeight: t } = this.state;
                    return e && t && 75 !== e ? 1 - Math.abs((t - 75) / (e - 75)) : 1;
                }
                addMobileTagsAndClasses() {
                    if (Object(zt.g)() && Object(pi.b)()) {
                        const { appWindow: e } = this.props;
                        Object(pi.a)(e),
                            Object(W.b)(
                                e.document.documentElement,
                                'intercom-mobile-messenger-active'
                            );
                    }
                }
                removeMobileTagsAndClasses() {
                    if (Object(zt.g)() && Object(pi.b)()) {
                        const { appWindow: e } = this.props;
                        Object(pi.c)(e),
                            Object(W.x)(
                                e.document.documentElement,
                                'intercom-mobile-messenger-active'
                            );
                    }
                }
                restoreMobileScrollPosition() {
                    if (Object(zt.g)() && Object(pi.b)()) {
                        var e, t;
                        const { scrollTop: n } = this.props;
                        (null === (e = window) || void 0 === e
                            ? void 0
                            : null === (t = e.parent) || void 0 === t
                            ? void 0
                            : t.scrollTo) && window.parent.scrollTo(0, n);
                    }
                }
                getClassName() {
                    let { previousView: e } = this.state;
                    return (
                        (e = e || ''),
                        d()('intercom-messenger', `intercom-messenger-${this.props.currentView}`, {
                            [`intercom-messenger-from-${e}`]: '' !== e,
                        })
                    );
                }
                renderLink(e) {
                    const { isIntercomLinkEnabled: t } = this.props,
                        n = t && -1 !== ['home-screen', 'empty-screen'].indexOf(e);
                    return o.a.createElement(
                        go,
                        null,
                        o.a.createElement(
                            ci,
                            null,
                            n &&
                                o.a.createElement(fr, {
                                    intercomLinkSolution: 'live-chat',
                                    currentView: e,
                                })
                        )
                    );
                }
                render() {
                    const {
                            appWindow: e,
                            frameWindow: t,
                            currentView: n,
                            isBooting: a,
                            isSheetOpen: r,
                            isLauncherEnabled: i,
                        } = this.props,
                        { headerHeight: s, bodyScrollTop: c, wasBooting: l } = this.state,
                        d = this.getHeaderPercentageCollapsed(),
                        m = 1 === d,
                        h = { tabIndex: r ? '-1' : '0', 'aria-hidden': r || void 0 },
                        u = ((e, t) => (t ? 1 - Math.min(Math.abs(e / (t / 2)), 1) : 1))(c, s);
                    return o.a.createElement(
                        'div',
                        null,
                        o.a.createElement(
                            hi,
                            ui(
                                {
                                    className: this.getClassName(),
                                    onWheel: this.handleWheel,
                                    ref: e => (this.messengerContainer = e),
                                },
                                h
                            ),
                            o.a.createElement(ce, { currentView: n, headerHeight: s }),
                            o.a.createElement(di.a, { headerOpacity: u, currentView: n }),
                            o.a.createElement(Nn, {
                                isBooting: a,
                                wasBooting: l,
                                currentView: n,
                                height: s,
                                percentageCollapsed: d,
                                bodyScrollTop: c,
                                frameWindow: t,
                                onExpand: this.handleHeaderExpand,
                                onHeightChange: this.handleHeaderHeightChange,
                                parallaxOpacity: u,
                            }),
                            o.a.createElement(ai, {
                                isBooting: a,
                                wasBooting: l,
                                isHeaderCollapsed: m,
                                headerHeight: s,
                                currentView: n,
                                appWindow: e,
                                frameWindow: t,
                                onHeaderCollapse: this.handleHeaderCollapse,
                                onScroll: this.handleBodyScroll,
                            }),
                            this.renderLink(n)
                        ),
                        o.a.createElement(J, { frameWindow: t }),
                        o.a.createElement(li.a, { appWindow: t }),
                        i ? null : o.a.createElement(p.b, { tabIndex: '0' })
                    );
                }
            }
            var bi = n(85);
            var fi = Object(h.connect)(e => {
                const { isBooting: t, isIntercomLinkEnabled: n } = e.app,
                    a = Object(i.i)(e),
                    { upfrontEmailCollectorShowing: o } = e.app.upfrontEmailCollection;
                return {
                    isLauncherEnabled: Object(bi.a)(e),
                    isBooting: t,
                    currentView: Object(i.d)(e),
                    isIntercomLinkEnabled: n,
                    shouldShowUpfrontEmailComposer: a,
                    upfrontEmailCollectorShowing: o,
                    isSheetOpen: Object(Z.b)(e),
                };
            })(messenger_Messenger);
            n.d(t, 'default', function() {
                return messenger_MessengerFrame;
            });
            class messenger_MessengerFrame extends a.Component {
                constructor(...e) {
                    super(...e),
                        (function(e, t, n) {
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = n);
                        })(this, 'scrollTop', void 0);
                }
                render() {
                    const { appWindow: e } = this.props;
                    return (
                        (this.scrollTop =
                            this.scrollTop || (window.parent && window.parent.pageYOffset) || 0),
                        o.a.createElement(
                            r.a,
                            {
                                frameName: 'intercom-messenger-frame',
                                title: `Intercom live chat ${Object(O.e)('messenger')}`,
                                ariaLiveAssertive: !1,
                            },
                            t =>
                                o.a.createElement(fi, {
                                    frameWindow: t,
                                    appWindow: e,
                                    scrollTop: this.scrollTop,
                                    key: 'Messenger',
                                })
                        )
                    );
                }
            }
        },
    },
]);
