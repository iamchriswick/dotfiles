(window.webpackJsonp = window.webpackJsonp || []).push([
    [48],
    {
        610: function(e, t, o) {
            'use strict';
            o.d(t, 'b', function() {
                return b;
            });
            var i = o(436),
                s = o(632),
                n = o(9),
                r = o(2),
                a = o(7),
                c = o(56),
                l = o(8),
                p = o(4),
                h = o(54),
                d = o(5),
                m = o(154),
                u = o(144),
                g = o(521);
            const b = (e, t, o) => {
                const { officeHoursResponse: i } = e;
                return Object.assign({}, e, t, o, {
                    onOpen: () => {
                        const { conversation: o, part: i } = e;
                        t.onOpen(o.id, i.id);
                    },
                    onConversationRead: () => {
                        t.onConversationRead(e.conversation.id);
                    },
                    onComposerOrFormInputClick: () => {
                        t.onComposerOrFormInputClick(e.conversation.id);
                    },
                    onReactionSelect: o => {
                        t.onReactionSelect(e.conversation.id, o);
                    },
                    onClose: () => {
                        const { conversation: o } = e;
                        t.onClose(o.id);
                    },
                    onSuggestionClicked: o => {
                        const { conversation: s } = e,
                            n = Object(g.c)(s);
                        t.onSuggestionClicked(s, o, n, i);
                    },
                    setComposerSuggestionsDismissed: () => {
                        t.setComposerSuggestionsDismissed(e.conversation.id);
                    },
                });
            };
            t.a = Object(i.connect)(
                e => {
                    const { isPresent: t } = e.user,
                        {
                            name: o,
                            userConversationAttachmentsEnabled: i,
                            userConversationGifsEnabled: s,
                        } = e.app,
                        { partId: r } = e.message,
                        c = Object(h.a)(e)[0],
                        l = a.a.isMobileBrowser();
                    let p =
                            void 0 !== r
                                ? c.parts.find(e => e.id === r)
                                : (e => (e.readAt ? Object(d.r)(e) : Object(d.b)(e)))(c),
                        { messageType: m } = p || {};
                    (m = m || 'adminReply'), (p = Object.assign({}, p, { messageType: m }));
                    const u = Object(n.i)(e),
                        { upfrontEmailCollectorShowing: b } = e.app.upfrontEmailCollection;
                    return {
                        appName: o,
                        conversation: c,
                        conversationSuggestions: Object(g.a)(e),
                        typeAheadSuggestions: Object(g.d)(e),
                        part: p,
                        userIsPresent: t,
                        isMobile: l,
                        showUploadButton: i,
                        showGifButton: s,
                        shouldShowUpfrontEmailComposer: u,
                        isUpfrontEmailComposerShowing: b,
                        officeHoursResponse: e.app && e.app.officeHoursResponse,
                    };
                },
                e => ({
                    onOpen: (t, o) => {
                        e(Object(c.b)(t, o)), e(Object(c.c)(t, o));
                    },
                    onClose: () => {
                        e(Object(c.a)());
                    },
                    onConversationRead: t => {
                        e(Object(p.n)(r.b, t));
                    },
                    onComposerOrFormInputClick: t => {
                        e(Object(c.a)()), e(Object(l.f)(t)), e(Object(p.l)(r.b, t));
                    },
                    onReactionSelect: (t, o) => {
                        e(Object(p.k)(r.b, t, o, !1));
                    },
                    onSuggestionClicked: (t, o, i, s) => {
                        e(Object(m.a)(r.b, t, o, !1, i, !0, s));
                    },
                    setComposerSuggestionsDismissed: t => {
                        e(Object(u.b)(t));
                    },
                }),
                b
            )(s.a);
        },
        632: function(e, t, o) {
            'use strict';
            var i = o(437),
                s = o.n(i),
                n = o(433),
                r = o.n(n),
                a = o(640),
                c = o(554),
                l = o(29),
                p = o(139),
                h = o(495),
                d = o(498),
                m = o(453),
                u = o(434),
                g = o(473);
            const b = Object(u.d)(
                    '0%{opacity:0;}70%{opacity:0;transform:translateY(20px);}100%{opacity:1;transform:translateY(0);}'
                ),
                f = Object(u.c)('div', { target: 'enffyqv0' })(
                    'position:relative;box-sizing:border-box;padding:17px 20px;margin-top:5px;width:100%;height:',
                    Object(u.f)('chatComposerHeightPx'),
                    'px;background-color:',
                    Object(u.f)('inputBackground'),
                    ';border-radius:',
                    Object(u.f)('notificationBorderRadiusPx'),
                    'px;border:none;font-size:14px;cursor:pointer;color:',
                    Object(u.f)('inputPlaceholder'),
                    ';box-shadow:0 1px 6px rgba(0,0,0,0.06),0 2px 32px rgba(0,0,0,0.16);animation:',
                    b,
                    ' 750ms ease;',
                    ({ theme: e, useBorderlessAvatarOffset: t }) =>
                        e.isLeftAlign &&
                        t &&
                        Object(u.b)(
                            'margin-left:',
                            -e.borderlessAvatarOffsetWidthPx,
                            'px;width:calc(100% + ',
                            e.borderlessAvatarOffsetWidthPx,
                            'px);'
                        )
                ),
                v = Object(u.c)('span', { target: 'enffyqv1' })({
                    name: '1rju6wc',
                    styles:
                        'display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:140px;line-height:18px;',
                }),
                y = Object(u.c)('div', { target: 'enffyqv2' })({
                    name: '1cp2t9f',
                    styles: 'position:absolute;top:0;right:18px;',
                }),
                O = Object(u.c)('span', { target: 'enffyqv3' })(
                    {
                        name: 'pctu5d',
                        styles:
                            'position:relative;float:left;display:inline-block;cursor:pointer;opacity:0.8;transition:opacity 200ms ease;height:51px;margin-top:2px;&:hover{opacity:1;}&:before{position:absolute;top:20px;background-position:center;}svg{position:absolute;top:18px;}',
                    },
                    ';width:',
                    18,
                    'px;padding-left:',
                    9,
                    'px;padding-right:',
                    9,
                    'px;svg{height:18px;width:18px;}svg path{fill:',
                    Object(u.f)('grey'),
                    ';}&:before{top:18px;}'
                ),
                C = Object(u.c)(g.a, { target: 'enffyqv4' })({
                    name: 'g6u7x8',
                    styles: 'right:18px;',
                }),
                S = Object(u.c)(g.c, { target: 'enffyqv5' })({
                    name: '1yphczb',
                    styles: '&:before{top:18px;}',
                }),
                x = Object(u.c)(g.j, { target: 'enffyqv6' })({
                    name: '1yphczb',
                    styles: '&:before{top:18px;}',
                });
            class mobile_chat_MobileChat extends n.Component {
                constructor(...e) {
                    var t, o, i;
                    super(...e),
                        (i = e => {
                            e.stopPropagation(), this.props.onClose();
                        }),
                        (o = 'handleDismissClick') in (t = this)
                            ? Object.defineProperty(t, o, {
                                  value: i,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                              })
                            : (t[o] = i);
                }
                renderComposer() {
                    const { firstName: e } = this.props.part.author;
                    return r.a.createElement(
                        f,
                        { useBorderlessAvatarOffset: !0 },
                        r.a.createElement(
                            v,
                            { className: 'chat-composer-placeholder' },
                            Object(l.e)('reply_to_name', { name: e })
                        ),
                        r.a.createElement(
                            C,
                            null,
                            r.a.createElement(S, null, r.a.createElement(d.a, null)),
                            r.a.createElement(x, null, r.a.createElement(h.a, null))
                        )
                    );
                }
                renderAttributeCollectorCard() {
                    const { part: e, frameWindow: t } = this.props;
                    return r.a.createElement(c.a, {
                        part: e,
                        hasAvatar: !1,
                        isBorderless: !0,
                        isReplyType: !0,
                        frameWindow: t,
                        key: Object(p.a)(JSON.stringify(e)),
                    });
                }
                renderDismissButton() {
                    return r.a.createElement(
                        m.b,
                        { onClick: this.handleDismissClick, 'aria-label': Object(l.e)('clear') },
                        r.a.createElement('span', null, Object(l.e)('clear'))
                    );
                }
                renderReplyType() {
                    const { part: e } = this.props;
                    switch (e.replyType) {
                        case 'attribute_collector':
                            return this.renderAttributeCollectorCard();
                        default:
                            return this.renderComposer();
                    }
                }
                renderChatCardGroup() {
                    const { appName: e, part: t, frameWindow: o } = this.props;
                    return r.a.createElement(a.a, {
                        appName: e,
                        part: t,
                        isBorderless: !0,
                        isMobile: !0,
                        frameWindow: o,
                    });
                }
                render() {
                    const { composerState: e, onComposerOrFormInputClick: t } = this.props;
                    return r.a.createElement(
                        m.a,
                        { className: 'intercom-chat', onClick: t },
                        this.renderChatCardGroup(),
                        this.renderDismissButton(),
                        e.visible && this.renderReplyType()
                    );
                }
            }
            var k = o(448),
                j = o(440),
                w = o(435);
            var E = { name: '145vpms', styles: 'left:0;right:auto;' };
            const P = Object(u.c)(j.a, { target: 'e1g9h0if0' })(
                'z-index:',
                Object(w.m)(),
                ';position:fixed;max-width:360px;width:calc(100% - 25px);right:0;',
                ({ height: e }) => Object(u.b)('bottom:0;height:', e + 20, 'px;'),
                ' ',
                ({ theme: e }) => e.isLeftAlign && E,
                ' ',
                ({ theme: e, height: t }) =>
                    e.isLauncherEnabled &&
                    Object(u.b)('height:', t + e.launcherOffsetBottomPaddingPx + 20, 'px;')
            );
            var _ = o(468);
            function R(e) {
                const {
                        appName: t,
                        part: o,
                        onClose: i,
                        onComposerOrFormInputClick: s,
                        composerState: a,
                    } = e,
                    [c, p] = Object(n.useState)(0),
                    h = ({ height: e }) => p(e);
                return r.a.createElement(
                    P,
                    {
                        frameName: 'intercom-chat-frame',
                        height: c,
                        title: `Intercom live chat ${Object(l.e)('message')}`,
                    },
                    e =>
                        r.a.createElement(
                            r.a.Fragment,
                            null,
                            r.a.createElement(
                                k.a,
                                { onChange: h },
                                r.a.createElement(mobile_chat_MobileChat, {
                                    appName: t,
                                    part: o,
                                    onClose: i,
                                    composerState: a,
                                    onComposerOrFormInputClick: s,
                                    frameWindow: e,
                                })
                            ),
                            r.a.createElement(_.a, { appWindow: e })
                        )
                );
            }
            var T = o(487),
                I = o(449),
                N = o(470),
                B = o(503),
                M = o(20),
                F = o(614),
                H = o(557),
                A = o(1),
                D = o(457),
                q = o(496);
            function V() {
                return (V =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var o = arguments[t];
                            for (var i in o)
                                Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function W(e, t, o) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = o),
                    e
                );
            }
            class note_Note extends n.Component {
                constructor(...e) {
                    super(...e),
                        W(this, 'state', { isFooterVisible: !0, isScrolled: !1 }),
                        W(this, 'handleScroll', e => {
                            const { isFooterVisible: t } = this.state,
                                o = Object(M.l)(e.target);
                            this.setState({
                                isFooterVisible: t || o <= this.getFooterHeight(),
                                isScrolled: e.target.scrollTop > 0,
                            }),
                                Object(q.a)(e);
                        }),
                        W(this, 'handleScrollable', e => {
                            const t = e.scrollHeight - e.clientHeight,
                                o =
                                    this.state.isFooterVisible ||
                                    void 0 === this.props.reactionsReply ||
                                    t <= this.getReactionsVisibilityThreshold();
                            this.setState({ isFooterVisible: o });
                        }),
                        W(this, 'addClickedComposerMetric', () => {
                            const {
                                message: { id: e },
                                conversationId: t,
                            } = this.props;
                            Object(A.e)('clicked', 'composer', 'in_app', 'from_full', {
                                message_type: 'note',
                                message_id: e,
                                conversation_id: t,
                            });
                        }),
                        W(this, 'handleComposerClick', () => {
                            this.addClickedComposerMetric(), this.props.onComposerClick();
                        });
                }
                getReactionsVisibilityThreshold() {
                    return this.getFooterHeight() + 20;
                }
                getFooterHeight() {
                    return this.footer ? this.footer.clientHeight : 0;
                }
                renderFooter() {
                    const {
                        showUploadButton: e,
                        showGifButton: t,
                        showReplyToButton: o,
                    } = this.props;
                    return o
                        ? r.a.createElement(H.a, { onClick: this.handleComposerClick })
                        : r.a.createElement(
                              D.c,
                              {
                                  className: 'intercom-note-composer',
                                  onClick: this.handleComposerClick,
                                  'aria-label': Object(l.e)('open_conversation_and_reply'),
                              },
                              r.a.createElement(g.f, null, Object(l.e)('reply_to_conversation')),
                              r.a.createElement(
                                  g.a,
                                  null,
                                  t
                                      ? r.a.createElement(g.e, null, r.a.createElement(F.a, null))
                                      : null,
                                  r.a.createElement(g.c, null, r.a.createElement(d.a, null)),
                                  e
                                      ? r.a.createElement(g.j, null, r.a.createElement(h.a, null))
                                      : null
                              )
                          );
                }
                renderReactionPicker() {
                    const { reactionsReply: e, onReactionSelect: t } = this.props;
                    return r.a.createElement(B.a, V({}, e, { onReactionSelect: t }));
                }
                render() {
                    const {
                            appName: e,
                            message: t,
                            reactionsReply: o,
                            onClose: i,
                            frameWindow: s,
                            showReplyToButton: n,
                        } = this.props,
                        { isScrolled: a, isFooterVisible: c } = this.state,
                        { author: p, lastActiveAt: h, body: d } = t;
                    return r.a.createElement(
                        D.e,
                        { className: 'intercom-note', isScrolled: a },
                        r.a.createElement(
                            N.a,
                            { appName: e, isReplyStyle: !1, author: p, lastActiveAt: h },
                            r.a.createElement(
                                D.b,
                                {
                                    className: 'intercom-anchor',
                                    onClick: i,
                                    'aria-label': Object(l.e)('close'),
                                },
                                ' '
                            ),
                            r.a.createElement(
                                D.a,
                                { showReplyToButton: n },
                                r.a.createElement(
                                    T.a,
                                    {
                                        onScroll: this.handleScroll,
                                        onScrollable: this.handleScrollable,
                                    },
                                    r.a.createElement(I.a, {
                                        blocks: d,
                                        zoomable: !0,
                                        frameWindow: s,
                                    })
                                )
                            ),
                            r.a.createElement(
                                D.d,
                                {
                                    ref: e => (this.footer = e),
                                    isFooterVisible: c,
                                    showReplyToButton: n,
                                },
                                o ? this.renderReactionPicker() : this.renderFooter()
                            )
                        )
                    );
                }
            }
            (note_Note.propTypes = {
                appName: s.a.string.isRequired,
                message: s.a.shape({
                    id: s.a.string.isRequired,
                    author: s.a.object.isRequired,
                    body: s.a.array.isRequired,
                    lastActiveAt: s.a.instanceOf(Date),
                }).isRequired,
                conversationId: s.a.string,
                reactionsReply: s.a.shape({
                    reactionIndex: s.a.number,
                    reactionSet: s.a.array.isRequired,
                }),
                onClose: s.a.func,
                onComposerClick: s.a.func,
                onReactionSelect: s.a.func,
                frameWindow: s.a.object,
                showUploadButton: s.a.bool,
                showGifButton: s.a.bool,
                showReplyToButton: s.a.bool,
            }),
                (note_Note.defaultProps = { showUploadButton: !0, showGifButton: !0 });
            var z = { name: 'fnfiys', styles: 'right:0;left:0;margin:0 auto;' };
            const L = Object(u.c)(j.a, { target: 'e1o2sc8n0' })(
                'position:fixed;bottom:',
                Object(w.j)(),
                'px;right:',
                Object(u.f)('horizontalPaddingPx'),
                'px;width:342px;z-index:',
                Object(w.m)(1),
                ';box-shadow:0 3px 32px 0 rgba(0,0,0,0.14);',
                ({ theme: e }) =>
                    e.isLeftAlign && Object(u.b)('left:', e.horizontalPaddingPx, 'px;right:auto;'),
                ' ',
                ({ theme: e }) => e.isMobileSize && z
            );
            function U(e, t, o) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = o),
                    e
                );
            }
            class note_NoteFrame extends n.Component {
                constructor(...e) {
                    super(...e),
                        U(this, 'state', { height: 0 }),
                        U(this, 'handleHeightChange', ({ height: e }) => {
                            this.setState({ height: e });
                        });
                }
                render() {
                    const {
                            conversationId: e,
                            appName: t,
                            message: o,
                            reactionsReply: i,
                            showUploadButton: s,
                            showGifButton: n,
                            onComposerClick: a,
                            onReactionSelect: c,
                            showReplyToButton: p,
                            onClose: h,
                        } = this.props,
                        { height: d } = this.state;
                    return r.a.createElement(
                        L,
                        {
                            style: { height: d },
                            frameName: 'intercom-note-frame',
                            title: `Intercom live chat ${Object(l.e)('message')}`,
                        },
                        l =>
                            r.a.createElement(
                                'span',
                                null,
                                r.a.createElement(
                                    k.a,
                                    {
                                        id: 'note-frame',
                                        key: 'note-frame',
                                        onChange: this.handleHeightChange,
                                    },
                                    r.a.createElement(note_Note, {
                                        frameWindow: l,
                                        conversationId: e,
                                        appName: t,
                                        message: o,
                                        reactionsReply: i,
                                        showUploadButton: s,
                                        showGifButton: n,
                                        onClose: h,
                                        onComposerClick: a,
                                        onReactionSelect: c,
                                        showReplyToButton: p,
                                    })
                                ),
                                r.a.createElement(_.a, { appWindow: l })
                            )
                    );
                }
            }
            var G = o(595);
            function Y() {
                return r.a.createElement(
                    G.a,
                    {
                        focusable: 'false',
                        'aria-hidden': 'true',
                        width: '16',
                        height: '16',
                        viewBox: '0 0 16 16',
                    },
                    r.a.createElement('path', {
                        d:
                            'M7.357 1.071c.34-.035.679-.071.982-.071 3 0 6.304 2.054 6.625 5.59.018.214.036.428.036.642 0 3.054-2.518 6.179-6.357 6.697A6.958 6.958 0 0 1 7.75 14c-.357 0-.357 0-.75-.071-.91 1.178-1.982 1.482-3.16 1.696a3.184 3.184 0 0 1-.536.054c-.304 0-.733-.143-.536-.34.928-.785 1.036-1.303 1.036-2.214 0-.09 0-.179-.018-.268-1.625-1.107-2.536-2.571-2.75-4.446A7.753 7.753 0 0 1 1 7.768C1 4.714 3.518 1.589 7.357 1.07z',
                    })
                );
            }
            var $ = o(454);
            function X() {
                return (X =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var o = arguments[t];
                            for (var i in o)
                                Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function K(e, t, o) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = o),
                    e
                );
            }
            class pointer_Pointer extends n.Component {
                constructor(...e) {
                    super(...e),
                        K(this, 'node', void 0),
                        K(this, 'state', { isFooterVisible: !0, isScrolled: !1 }),
                        K(this, 'footer', void 0),
                        K(this, 'handleScroll', e => {
                            const { isFooterVisible: t } = this.state,
                                o = Object(M.l)(e.target);
                            this.setState({
                                isFooterVisible: t || o <= this.getFooterHeight(),
                                isScrolled: e.target.scrollTop > 0,
                            });
                        }),
                        K(this, 'handleScrollable', e => {
                            const t = e.scrollHeight - e.clientHeight,
                                o =
                                    this.state.isFooterVisible ||
                                    void 0 === this.props.reactionsReply ||
                                    t <= this.getReactionsVisibilityThreshold();
                            this.setState({ isFooterVisible: o });
                        }),
                        K(this, 'isReplyDisabled', () => {
                            const { replyType: e } = this.props.message;
                            return 'disabled' === e;
                        }),
                        K(this, 'addClickedComposerMetric', () => {
                            const {
                                message: { id: e },
                                conversationId: t,
                            } = this.props;
                            Object(A.e)('clicked', 'composer', 'in_app', 'from_full', {
                                message_type: 'pointer',
                                message_id: e,
                                conversation_id: t,
                            });
                        }),
                        K(this, 'handleComposerClick', () => {
                            this.addClickedComposerMetric(), this.props.onComposerClick();
                        });
                }
                getReactionsVisibilityThreshold() {
                    return this.getFooterHeight() + 20;
                }
                getFooterHeight() {
                    return this.footer ? this.footer.clientHeight : 0;
                }
                renderFooter(e) {
                    return this.isReplyDisabled()
                        ? null
                        : r.a.createElement(
                              $.d,
                              {
                                  ref: e => (this.footer = e),
                                  isFooterVisible: this.state.isFooterVisible,
                              },
                              e ? this.renderReactionPicker() : this.renderChatComposer()
                          );
                }
                renderChatComposer() {
                    return r.a.createElement(
                        $.c,
                        {
                            className: 'intercom-pointer-composer',
                            onClick: this.handleComposerClick,
                        },
                        r.a.createElement('span', null, r.a.createElement(Y, null)),
                        r.a.createElement(g.f, null, Object(l.e)('start_a_conversation'))
                    );
                }
                renderReactionPicker() {
                    const { reactionsReply: e, onReactionSelect: t } = this.props;
                    return r.a.createElement(B.a, X({}, e, { onReactionSelect: t }));
                }
                render() {
                    const {
                            appName: e,
                            message: t,
                            reactionsReply: o,
                            onClose: i,
                            frameWindow: s,
                        } = this.props,
                        { author: n, lastActiveAt: a, body: c } = t;
                    return r.a.createElement(
                        $.e,
                        {
                            isInbox: !1,
                            isScrolled: this.state.isScrolled,
                            ref: e => (this.node = e),
                            className: 'intercom-pointer',
                        },
                        r.a.createElement(
                            N.a,
                            { appName: e, isReplyStyle: !1, author: n, lastActiveAt: a },
                            r.a.createElement(
                                $.b,
                                { onClick: i, 'aria-label': Object(l.e)('close') },
                                ' '
                            ),
                            r.a.createElement(
                                $.a,
                                { intercomRepliesDisabled: this.isReplyDisabled() },
                                r.a.createElement(
                                    T.a,
                                    {
                                        onScroll: this.handleScroll,
                                        onScrollable: this.handleScrollable,
                                    },
                                    r.a.createElement(I.a, {
                                        blocks: c,
                                        zoomable: !0,
                                        frameWindow: s,
                                    })
                                )
                            ),
                            this.renderFooter(o)
                        )
                    );
                }
            }
            var J = o(636);
            const Q = Object(u.c)(j.a, { target: 'e1lu8yo70' })(
                'z-index:',
                Object(w.m)(1),
                ';border-radius:5px;box-shadow:0 3px 32px 0 rgba(0,0,0,0.14);border:1px solid rgba(0,0,0,0.1);'
            );
            function Z(e, t, o) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = o),
                    e
                );
            }
            class pointer_PointerFrame extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        Z(this, 'state', { width: 0, height: 0 }),
                        Z(this, 'handleDimensionFrameSize', ({ height: e, width: t }) => {
                            this.setState({ width: t, height: e });
                        });
                }
                frameStyles() {
                    const { width: e, height: t } = this.state;
                    return { width: e, height: t, opacity: 1 };
                }
                render() {
                    const {
                        appName: e,
                        appWindow: t,
                        message: o,
                        conversationId: i,
                        onClose: s,
                        reactionsReply: n,
                        onComposerClick: a,
                        onReactionSelect: c,
                    } = this.props;
                    return r.a.createElement(
                        J.a,
                        {
                            appWindow: t,
                            targetSelector: o.pointerSelector,
                            childDimensions: this.frameStyles(),
                        },
                        r.a.createElement(
                            Q,
                            {
                                style: this.frameStyles(),
                                frameName: 'intercom-pointer-frame',
                                title: `Intercom live chat ${Object(l.e)('pointer')}`,
                            },
                            () =>
                                r.a.createElement(
                                    k.a,
                                    {
                                        id: 'pointer-frame',
                                        key: 'pointer-frame',
                                        onChange: this.handleDimensionFrameSize,
                                    },
                                    r.a.createElement(pointer_Pointer, {
                                        appName: e,
                                        message: o,
                                        conversationId: i,
                                        reactionsReply: n,
                                        frameWindow: t,
                                        onComposerClick: a,
                                        onReactionSelect: c,
                                        onClose: s,
                                    })
                                )
                        )
                    );
                }
            }
            var ee = o(617),
                te = o(442),
                oe = o(635),
                ie = o(541),
                se = o.n(ie),
                ne = o(542),
                re = o.n(ne),
                ae = { name: 'siiwv4', styles: '&:hover .story-dismiss-button{opacity:1;}' };
            const ce = Object(u.c)('div', { target: 'e18fd67o0' })(
                'z-index:',
                Object(w.m)(1),
                ';font-size:13px;font-family:',
                Object(u.f)('fontSansSerif'),
                ';color:',
                Object(u.f)('bodyText'),
                ';position:relative;',
                ({ theme: e, standalone: t }) =>
                    t &&
                    Object(u.b)(
                        'position:fixed;bottom:',
                        e.verticalPaddingPx,
                        'px;right:',
                        e.horizontalPaddingPx,
                        'px;'
                    ),
                ' ',
                ({ isVideoLoaded: e }) => e && ae,
                ' ',
                ({ theme: e }) =>
                    e.isLauncherEnabled &&
                    Object(u.b)(
                        'bottom:',
                        e.verticalPaddingPx + e.launcherOffsetBottomPaddingPx,
                        'px;'
                    )
            );
            var le = { name: '1c9b7w0', styles: 'width:240px;height:180px;margin-left:10px;' },
                pe = { name: 'dxx3wj', styles: 'margin-top:42px;' },
                he = { name: 'ajzub1', styles: 'margin-top:54px;' };
            const de = Object(u.c)('div', { target: 'e18fd67o1' })(
                    'position:relative;overflow:hidden;box-shadow:0px 2px 16px rgba(0,0,0,0.14),0px 1px 6px rgba(0,0,0,0.06);border-radius:5px;transition:transform 150ms ease,width 200ms ease,height 200ms ease,margin 200ms;transform-origin:bottom right;width:340px;height:255px;',
                    ({ standalone: e }) => e && he,
                    ' ',
                    ({ standalone: e, isExpanded: t }) => e && t && pe,
                    ' ',
                    ({ theme: e }) => e.isMobileSize && le
                ),
                me = Object(u.c)('div', { target: 'e18fd67o2' })(
                    'position:absolute;top:0;/* @noflip */ right:0;display:block;opacity:0;transition:opacity 150ms ease;span{display:block;background-color:#5d6c80;opacity:0.8;color:',
                    Object(u.f)('white'),
                    ';font-size:13px;height:32px;line-height:32px;padding:0 16px 0 16px;border-radius:16px;cursor:pointer;background-position:center;',
                    Object(w.b)(se.a, re.a, '8px', '8px'),
                    ';&:hover{opacity:1;}}'
                ),
                ue = Object(u.c)('div', { target: 'e18fd67o3' })(
                    'position:absolute;width:100%;z-index:',
                    Object(w.m)(1),
                    ';top:0;left:0;right:0;bottom:0;cursor:pointer;'
                ),
                ge = Object(u.c)('div', { target: 'e18fd67o4' })({
                    name: 'maq7xh',
                    styles:
                        '.chat-composer{margin-top:10px;}&.video-composer-enter{.chat-composer{display:block;height:0;opacity:0;overflow:hidden;padding-top:0;padding-bottom:0;margin-top:0;}.composer-placeholder,.composer-buttons{opacity:0;transition:opacity 200ms ease;transition-delay:200ms;}}&.video-composer-enter-active{.chat-composer{opacity:1;height:52px;padding-top:17px;padding-bottom:17px;transition-property:height,opacity,padding,margin;transition-duration:200ms;transition-timing-function:ease;margin-top:10px;}.composer-placeholder,.composer-buttons{opacity:1;}}',
                });
            var be = o(555);
            function fe(e, t, o) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = o),
                    e
                );
            }
            class story_Story extends n.Component {
                constructor(...e) {
                    super(...e),
                        fe(this, 'video', void 0),
                        fe(this, 'state', { isExpanded: !1, isVideoLoaded: !1 }),
                        fe(this, 'handleOverlayClick', () => {
                            this.state.isVideoLoaded && this.setState({ isExpanded: !0 });
                        }),
                        fe(this, 'handleVideoLoaded', () => {
                            this.setState({ isVideoLoaded: !0 });
                        });
                }
                renderDismissButton() {
                    return this.props.standalone
                        ? r.a.createElement(
                              me,
                              { className: 'story-dismiss-button', onClick: this.props.onClose },
                              r.a.createElement('span', null)
                          )
                        : null;
                }
                renderOverlay() {
                    return this.state.isExpanded
                        ? null
                        : r.a.createElement(ue, {
                              className: 'story-overlay',
                              onClick: this.handleOverlayClick,
                          });
                }
                renderComposer() {
                    const { part: e, onComposerOrFormInputClick: t } = this.props,
                        { firstName: o } = e.author;
                    return r.a.createElement(
                        te.CSSTransition,
                        { classNames: 'video-composer', timeout: { enter: 400, exit: 400 } },
                        r.a.createElement(
                            ge,
                            null,
                            r.a.createElement(
                                f,
                                {
                                    className: 'chat-composer',
                                    onClick: t,
                                    'aria-label': Object(l.e)('open_conversation_and_reply'),
                                    useBorderlessAvatarOffset: !1,
                                },
                                r.a.createElement(
                                    v,
                                    { className: 'composer-placeholder' },
                                    Object(l.e)('reply_to_name', { name: o })
                                ),
                                r.a.createElement(
                                    y,
                                    { className: 'composer-buttons' },
                                    r.a.createElement(O, null, r.a.createElement(d.a, null)),
                                    r.a.createElement(O, null, r.a.createElement(h.a, null))
                                )
                            )
                        )
                    );
                }
                renderSuggestions() {
                    const {
                        onSuggestionClicked: e,
                        setComposerSuggestionsDismissed: t,
                        conversationSuggestions: o,
                        conversation: i,
                    } = this.props;
                    return r.a.createElement(be.a, {
                        conversation: i,
                        conversationSuggestions: o,
                        setComposerSuggestionsDismissed: t,
                        onClick: e,
                    });
                }
                renderResponseArea() {
                    return this.state.isExpanded && this.props.showResponseArea
                        ? this.props.conversationSuggestions
                            ? this.renderSuggestions()
                            : this.renderComposer()
                        : null;
                }
                render() {
                    const {
                            part: { body: e },
                            autoPlay: t,
                            standalone: o,
                        } = this.props,
                        { isExpanded: i, isVideoLoaded: s } = this.state,
                        { url: n, captions: a, thumbnailUrl: c } = e[0];
                    return r.a.createElement(
                        ce,
                        { standalone: o, isVideoLoaded: s },
                        this.renderDismissButton(),
                        r.a.createElement(
                            de,
                            { standalone: o, isExpanded: i },
                            this.renderOverlay(),
                            r.a.createElement(oe.a, {
                                srcUrl: n,
                                autoPlay: t,
                                onVideoLoaded: this.handleVideoLoaded,
                                captions: a,
                                thumbnailUrl: c,
                            })
                        ),
                        r.a.createElement(te.TransitionGroup, null, this.renderResponseArea())
                    );
                }
            }
            fe(story_Story, 'defaultProps', {
                standalone: !1,
                onClose: () => {},
                showResponseArea: !0,
                autoPlay: !1,
            });
            const ve = Object(u.c)(j.a, { target: 'elkwj510' })(
                'z-index:',
                Object(w.m)(),
                ';position:fixed;right:0;bottom:0;width:100vw;height:100vh;'
            );
            function ye(e) {
                const {
                    conversation: t,
                    standalone: o,
                    part: i,
                    onClose: s,
                    onComposerOrFormInputClick: n,
                    conversationSuggestions: a,
                    onSuggestionClicked: c,
                    setComposerSuggestionsDismissed: l,
                } = e;
                return r.a.createElement(ve, { frameName: 'intercom-story-frame' }, e =>
                    r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(story_Story, {
                            conversation: t,
                            standalone: o,
                            part: i,
                            onClose: s,
                            onComposerOrFormInputClick: n,
                            conversationSuggestions: a,
                            onSuggestionClicked: c,
                            setComposerSuggestionsDismissed: l,
                        }),
                        r.a.createElement(_.a, { appWindow: e })
                    )
                );
            }
            var Oe = o(436),
                Ce = o(2),
                Se = o(630),
                xe = o(633),
                ke = o(5);
            const je = Object(u.c)('div', { target: 'e19nv0ic0' })({
                name: 'vavd1c',
                styles: 'padding-top:0;/* @noflip */ padding-left:45px;',
            });
            function we() {
                return (we =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var o = arguments[t];
                            for (var i in o)
                                Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function Ee(e, t) {
                if (null == e) return {};
                var o,
                    i,
                    s = (function(e, t) {
                        if (null == e) return {};
                        var o,
                            i,
                            s = {},
                            n = Object.keys(e);
                        for (i = 0; i < n.length; i++)
                            (o = n[i]), t.indexOf(o) >= 0 || (s[o] = e[o]);
                        return s;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < n.length; i++)
                        (o = n[i]),
                            t.indexOf(o) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(e, o) && (s[o] = e[o]));
                }
                return s;
            }
            function Pe(e, t, o) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = o),
                    e
                );
            }
            class borderless_conversation_composer_BorderlessConversationComposer extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        Pe(this, 'ref', void 0),
                        Pe(this, 'setRef', e => {
                            this.ref = e;
                        });
                }
                componentDidMount() {
                    Object(ke.o)(this.props.conversation) && this.handleShow();
                }
                componentDidUpdate(e) {
                    !Object(ke.o)(e.conversation) && Object(ke.o)(this.props.conversation)
                        ? this.handleShow()
                        : Object(ke.o)(e.conversation) &&
                          !Object(ke.o)(this.props.conversation) &&
                          this.handleHide();
                }
                handleShow() {
                    this.props.handleComposerResize(this.getHeight());
                }
                handleHide() {
                    this.props.onHide();
                }
                getHeight() {
                    return this.ref ? this.ref.clientHeight : 0;
                }
                render() {
                    const e = this.props,
                        { conversation: t, handleComposerResize: o } = e,
                        i = Ee(e, ['conversation', 'handleComposerResize']);
                    return Object(ke.o)(t)
                        ? r.a.createElement(
                              je,
                              { ref: this.setRef },
                              r.a.createElement(
                                  xe.a,
                                  we({ isBorderless: !0, conversation: t, onHeightChange: o }, i)
                              )
                          )
                        : null;
                }
            }
            var _e = o(624),
                Re = o(579),
                Te = { name: '1xzanuf', styles: 'margin-right:0;' },
                Ie = { name: '1v8x7dw', styles: 'overflow:auto;' };
            const Ne = Object(u.c)('div', { target: 'e1my0o560' })(
                    'overflow-anchor:none;max-height:100%;padding-top:10px;padding-right:10px;margin-right:-10px;',
                    ({ theme: e, privilegeSeparationMaxHeight: t }) =>
                        e.privilegeSeparationEnabled && Object(u.b)('max-height:', t, 'px;'),
                    ' ',
                    ({ enabledScroll: e }) => e && Ie,
                    ' ',
                    ({ enabledScroll: e, visibleScrollbars: t }) => e && t && Te
                ),
                Be = Object(u.c)('div', { target: 'e1my0o561' })({
                    name: 'l57rop',
                    styles: 'padding-bottom:10px;',
                });
            var Me = o(456);
            function Fe(e, t, o) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = o),
                    e
                );
            }
            class borderless_conversation_body_BorderlessConversationBody extends n.Component {
                constructor(...e) {
                    super(...e),
                        Fe(this, 'isPartBeingAddedTimeout', void 0),
                        Fe(this, 'borderlessBodyNode', void 0),
                        Fe(this, 'visibleScrollbarsInOs', 0 !== Object(Re.a)()),
                        Fe(this, 'state', {
                            isPartBeingAdded: !1,
                            bottomScrollOffset: 0,
                            frameOffsetTop: this.props.frameNode.offsetTop,
                            adminWasTyping: !1,
                            height: 0,
                        }),
                        Fe(this, 'recalculateOffsets', () => {
                            this.setState({ frameOffsetTop: this.props.frameNode.offsetTop }, () =>
                                Object(M.z)(this.borderlessBodyNode)
                            );
                        }),
                        Fe(this, 'handleScroll', e => {
                            this.state.isPartBeingAdded ||
                                (this.setState({
                                    bottomScrollOffset: Object(M.f)(this.borderlessBodyNode),
                                }),
                                Object(q.a)(e));
                        }),
                        Fe(this, 'getPrivilegeSeparationMaxHeight', () => {
                            let e =
                                this.context.pageHeight -
                                this.context.verticalPaddingPx +
                                this.context.borderlessIframePaddingPx -
                                this.context.borderlessComposerHeightPx -
                                20;
                            return (
                                this.context.isLauncherEnabled &&
                                    (e -= this.context.launcherOffsetBottomPaddingPx),
                                e
                            );
                        });
                }
                componentDidMount() {
                    Object(M.c)(window.parent, 'resize', this.recalculateOffsets);
                }
                componentDidUpdate(e) {
                    const { frameOffsetTop: t } = this.state,
                        { conversation: o, frameNode: i } = this.props,
                        { conversation: s } = e,
                        n = o.parts.length !== s.parts.length,
                        r = Object(_e.h)(o);
                    (n || (r && !this.state.adminWasTyping)) &&
                        (Object(M.z)(this.borderlessBodyNode),
                        this.setState({ isPartBeingAdded: !0, bottomScrollOffset: 0 }),
                        clearTimeout(this.isPartBeingAddedTimeout),
                        (this.isPartBeingAddedTimeout = setTimeout(() => {
                            this.setState({ isPartBeingAdded: !1 }),
                                Object(M.z)(this.borderlessBodyNode);
                        }, 300))),
                        i.offsetTop !== t &&
                            this.setState({ frameOffsetTop: i.offsetTop }, () => {
                                this.setState({
                                    bottomScrollOffset: Object(M.f)(this.borderlessBodyNode),
                                });
                            }),
                        r !== this.state.adminWasTyping && this.setState({ adminWasTyping: r }),
                        this.borderlessBodyNode &&
                            this.borderlessBodyNode.clientHeight !== this.state.height &&
                            this.setState({ height: this.borderlessBodyNode.clientHeight });
                }
                componentWillUnmount() {
                    clearTimeout(this.isPartBeingAddedTimeout),
                        Object(M.y)(window.parent, 'resize', this.recalculateOffsets);
                }
                getStyle() {
                    const { borderlessNode: e, composerHeight: t } = this.props,
                        o = e && e.clientHeight,
                        { frameOffsetTop: i } = this.state;
                    if (!o || i) return;
                    const s = o / 100,
                        n = 100 - 10 / s,
                        r = `linear-gradient(to bottom, rgb(0, 0, 0), rgb(0, 0, 0) ${100 -
                            76 / s}%, rgba(0, 0, 0, ${Math.max(
                            1 - (this.state.bottomScrollOffset / 100) * 5,
                            0
                        )}) ${n}%)`;
                    return { maxHeight: `${o - t - 20}px`, WebkitMaskImage: r, MaskImage: r };
                }
                render() {
                    const e = this.getPrivilegeSeparationMaxHeight(),
                        t =
                            0 === this.state.frameOffsetTop ||
                            (this.context.privilegeSeparationEnabled && this.state.height > e);
                    return r.a.createElement(
                        Ne,
                        {
                            style: this.getStyle(),
                            ref: e => (this.borderlessBodyNode = e),
                            onScroll: this.handleScroll,
                            enabledScroll: t,
                            visibleScrollbars: this.visibleScrollbarsInOs,
                            privilegeSeparationMaxHeight: e,
                        },
                        this.props.children()
                    );
                }
            }
            Fe(
                borderless_conversation_body_BorderlessConversationBody,
                'contextType',
                Me.ThemeContext
            );
            var He = o(642),
                Ae = o(471),
                De = o(478),
                qe = o(551),
                Ve = o(620),
                We = o(622),
                ze = o(488);
            const Le = Object(u.d)('0%{opacity:0;}50%{opacity:0;}100%{opacity:1;}'),
                Ue = { name: '1lh3dwn', styles: 'opacity:1;transform:translateY(0);' },
                Ge = ({ theme: e }) =>
                    Object(u.b)(
                        'transform:translateY(4px);opacity:0;transition:all 120ms ease-out 80ms;span{display:block;background-color:#67788f;color:',
                        e.white,
                        ';font-size:13px;height:32px;line-height:32px;padding:0 8px;border-radius:16px;cursor:pointer;background-position:center;&:hover{background-color:darken(#67788f,5%);}}',
                        Ye.className,
                        ':hover &{',
                        Ue,
                        '}'
                    ),
                Ye = Object(u.c)('div', { target: 'es6hgh10' })(
                    'z-index:',
                    Object(w.m)(),
                    ';position:absolute;right:0;bottom:0;width:360px;max-height:100%;outline-offset:-5px;',
                    ({ theme: e }) =>
                        e.privilegeSeparationEnabled &&
                        Object(u.b)(
                            'max-height:',
                            (({ theme: e }) => {
                                let t =
                                    e.pageHeight -
                                    e.verticalPaddingPx +
                                    e.borderlessIframePaddingPx;
                                return (
                                    e.isLauncherEnabled && (t -= e.launcherOffsetBottomPaddingPx), t
                                );
                            })({ theme: e }),
                            'px;'
                        ),
                    ' ',
                    ({ theme: e, hasComposer: t }) =>
                        t &&
                        Object(u.b)(
                            'animation:',
                            (({ theme: e }) =>
                                Object(u.d)(
                                    '0%{transform:translateY(',
                                    e.borderlessComposerHeightPx,
                                    'px);}20%{transform:translateY(',
                                    e.borderlessComposerHeightPx,
                                    'px);}70%{transform:translateY(',
                                    e.borderlessComposerHeightPx,
                                    'px);}100%{transform:translateY(0);}'
                                ))({ theme: e }),
                            ' 750ms ease;'
                        ),
                    ' ',
                    ze.i.className,
                    ',',
                    Ve.c.className,
                    ',',
                    We.a.className,
                    '{position:absolute;bottom:21px;box-shadow:',
                    Object(u.f)('notificationBoxShadow'),
                    ';border-radius:100%;}'
                ),
                $e = Object(u.c)('div', { target: 'es6hgh11' })(
                    'position:absolute;right:0;bottom:0;width:',
                    Object(u.f)('borderlessConversationWidthPx'),
                    'px;padding:10px;padding-top:50px;animation:',
                    Le,
                    ' 500ms ease;',
                    ({ theme: e }) =>
                        e.isLeftAlign &&
                        Object(u.b)(
                            'width:',
                            e.borderlessConversationWidthPx + e.borderlessAvatarOffsetWidthPx,
                            'px;'
                        )
                ),
                Xe = Object(u.c)('div', { target: 'es6hgh12' })(
                    'z-index:',
                    Object(w.m)(1),
                    ';position:absolute;top:0;width:',
                    Object(u.f)('borderlessConversationWidthPx'),
                    'px;height:40px;padding:0 10px;'
                ),
                Ke = Object(u.c)('div', { target: 'es6hgh13' })({
                    name: 'ln0qgx',
                    styles:
                        'padding-top:10px;position:relative;/* @noflip */ margin-left:45px;text-align:center;',
                });
            var Je = { name: 'whh5e5', styles: 'opacity:1;' };
            const Qe = Object(u.c)('div', { target: 'es6hgh14' })(
                Ge,
                ' position:absolute;top:10px;/* @noflip */ right:0;span{padding-right:16px;padding-left:16px;',
                Object(w.b)(se.a, re.a, '8px', '8px'),
                '}',
                ({ theme: e }) => e.tabNavigation && Je
            );
            var Ze = { name: 'whh5e5', styles: 'opacity:1;' };
            const et = Object(u.c)('div', { target: 'es6hgh15' })(
                Ge,
                ' display:inline-block;span{padding:0 20px;}',
                ({ theme: e }) => e.tabNavigation && Ze
            );
            function tt() {
                return (tt =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var o = arguments[t];
                            for (var i in o)
                                Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function ot(e, t, o) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = o),
                    e
                );
            }
            class borderless_conversation_BorderlessConversation extends n.Component {
                constructor(...e) {
                    super(...e),
                        ot(this, 'state', {
                            isEmojiPickerOpen: !1,
                            isGifPickerOpen: !1,
                            headerHeight: 50,
                            partsHeight: 0,
                            suggestionsHeight: 0,
                            composerHeight: 0,
                            replyToButtonHeight: 0,
                        }),
                        ot(this, 'handlePartsHeightChange', e => {
                            this.setState({ partsHeight: e }, this.handleHeightChange);
                        }),
                        ot(this, 'setSuggestionsHeight', e => {
                            this.setState({ suggestionsHeight: e }, this.handleHeightChange);
                        }),
                        ot(this, 'handleQuickRepliesHide', () => {
                            this.setState({ suggestionsHeight: 0 }, this.handleHeightChange);
                        }),
                        ot(this, 'handleComposerShow', e => {
                            this.setState({ composerHeight: e }, this.handleHeightChange);
                        }),
                        ot(this, 'handleComposerHide', () => {
                            this.setState({ composerHeight: 0 }, this.handleHeightChange);
                        }),
                        ot(this, 'handleReplyToButtonShow', e => {
                            this.setState({ replyToButtonHeight: e }, this.handleHeightChange);
                        }),
                        ot(this, 'handleClick', () => {
                            const { isEmojiPickerOpen: e, isGifPickerOpen: t } = this.state;
                            e
                                ? this.setState({ isEmojiPickerOpen: !1 })
                                : t && this.setState({ isGifPickerOpen: !1 });
                        }),
                        ot(this, 'handleDismissClick', e => {
                            e.stopPropagation(), this.addCloseMetric(), this.props.onClose();
                            const t = Object(De.f)();
                            t && t.focus();
                        }),
                        ot(this, 'handleEmojiPickerToggle', () => {
                            const e = !this.state.isEmojiPickerOpen;
                            this.setState({ isEmojiPickerOpen: e }), this.props.onPopoverToggle(e);
                        }),
                        ot(this, 'handleGifPickerToggle', () => {
                            const e = !this.state.isGifPickerOpen;
                            this.setState({ isGifPickerOpen: e }), this.props.onPopoverToggle(e);
                        }),
                        ot(this, 'handleViewMoreClick', () => {
                            this.addViewMoreMetric(), this.props.onViewMore();
                        }),
                        ot(this, 'handleHeightChange', () => {
                            this.props.onHeightChange(this.getHeight());
                        });
                }
                componentDidMount() {
                    this.props.onOpen(),
                        (this.focusTrap = new Ae.a({ document: this.props.frameWindow.document }));
                }
                componentDidUpdate(e) {
                    const { conversation: t } = this.props;
                    'all' === t.fetchState &&
                        Object(ke.a)(t) > Object(ke.a)(e.conversation) &&
                        this.addReplyMetric(t);
                }
                componentWillUnmount() {
                    this.focusTrap && this.focusTrap.restore();
                }
                getHeight() {
                    const {
                        headerHeight: e,
                        partsHeight: t,
                        composerHeight: o,
                        suggestionsHeight: i,
                        replyToButtonHeight: s,
                    } = this.state;
                    return e + t + o + i + s + 20;
                }
                getStyle() {
                    return { height: this.getHeight() };
                }
                hasComposer() {
                    const { parts: e, composerState: t } = this.props.conversation;
                    return 'attribute_collector' === e[0].replyType || t.visible;
                }
                shouldRenderHeader() {
                    const { isEmojiPickerOpen: e, isGifPickerOpen: t } = this.state;
                    return !(e || t);
                }
                addViewMoreMetric() {
                    Object(A.e)('clicked', 'viewmore_button', 'borderless', '', {
                        conversation_id: this.props.conversation.id,
                    });
                }
                addReplyMetric() {
                    const { conversation: e } = this.props,
                        t = Object(ke.d)(e);
                    Object(A.e)('received', 'reply', 'borderless', '', {
                        conversation_id: e.id,
                        part_id: t.id,
                        part_type: 'adminReply',
                        reply_type: t.replyType,
                    });
                }
                addCloseMetric() {
                    Object(A.e)('closed', 'borderless', 'borderless', 'from_close_button', {
                        conversation_id: this.props.conversation.id,
                    });
                }
                renderHeader() {
                    return r.a.createElement(
                        Xe,
                        null,
                        r.a.createElement(
                            Ke,
                            null,
                            this.props.hasHistory ? this.renderViewMoreButton() : null,
                            r.a.createElement(
                                Qe,
                                {
                                    onClick: this.handleDismissClick,
                                    'aria-label': Object(l.e)('dismiss'),
                                },
                                r.a.createElement('span', null)
                            )
                        )
                    );
                }
                renderViewMoreButton() {
                    return r.a.createElement(
                        et,
                        { onClick: this.handleViewMoreClick },
                        r.a.createElement('span', null, Object(l.e)('view_more'))
                    );
                }
                renderParts() {
                    const {
                            appName: e,
                            userRole: t,
                            conversation: o,
                            onArticleCardClick: i,
                            onReactionSelect: s,
                            onRetry: n,
                            frameWindow: a,
                            conversationSuggestions: c,
                        } = this.props,
                        { isEmojiPickerOpen: l, isGifPickerOpen: p } = this.state;
                    return r.a.createElement(Se.a, {
                        isBorderless: !0,
                        isFaded: l || p,
                        maxHeight: 0,
                        appName: e,
                        userRole: t,
                        conversation: o,
                        frameWindow: a,
                        onArticleCardClick: i,
                        onHeightChange: this.handlePartsHeightChange,
                        onReactionSelect: s,
                        onRetry: n,
                        conversationSuggestions: c,
                    });
                }
                renderSuggestions() {
                    const {
                            onSuggestionClicked: e,
                            setComposerSuggestionsDismissed: t,
                            conversationSuggestions: o,
                            typeAheadSuggestions: i,
                            conversation: s,
                        } = this.props,
                        n = {
                            conversation: s,
                            setComposerSuggestionsDismissed: t,
                            onClick: e,
                            isBorderless: !0,
                        };
                    return r.a.createElement(
                        k.a,
                        { onHeightChange: this.setSuggestionsHeight },
                        r.a.createElement(
                            'div',
                            null,
                            r.a.createElement(
                                qe.a,
                                {
                                    errorText: 'Something went wrong loading the suggestions',
                                    align: 'center',
                                    style: { marginBottom: '10px' },
                                },
                                r.a.createElement(be.a, tt({}, n, { conversationSuggestions: o })),
                                r.a.createElement(be.a, tt({}, n, { conversationSuggestions: i }))
                            )
                        )
                    );
                }
                renderFooter() {
                    const { isEmojiPickerOpen: e, isGifPickerOpen: t } = this.state,
                        {
                            showReplyToButton: o,
                            onComposerClick: i,
                            conversation: s,
                            frameWindow: n,
                        } = this.props;
                    return o && Object(ke.o)(this.props.conversation)
                        ? r.a.createElement(H.a, {
                              isBorderless: !0,
                              onShow: this.handleReplyToButtonShow,
                              onClick: i,
                          })
                        : r.a.createElement(
                              borderless_conversation_composer_BorderlessConversationComposer,
                              {
                                  conversation: s,
                                  showEmojiPicker: e,
                                  showGifPicker: t,
                                  handleComposerResize: this.handleComposerShow,
                                  onHide: this.handleComposerHide,
                                  onEmojiPickerToggle: this.handleEmojiPickerToggle,
                                  onGifPickerToggle: this.handleGifPickerToggle,
                                  frameWindow: n,
                              }
                          );
                }
                render() {
                    const { conversation: e, frameNode: t } = this.props,
                        { composerHeight: o } = this.state;
                    return r.a.createElement(
                        Ye,
                        {
                            className: 'intercom-borderless',
                            style: this.getStyle(),
                            onClick: this.handleClick,
                            tabIndex: '-1',
                            role: 'region',
                            ref: e => (this.borderlessNode = e),
                            hasComposer: this.hasComposer(),
                        },
                        this.shouldRenderHeader() ? this.renderHeader() : null,
                        r.a.createElement(
                            $e,
                            null,
                            r.a.createElement(
                                borderless_conversation_body_BorderlessConversationBody,
                                {
                                    conversation: e,
                                    composerHeight: o,
                                    borderlessNode: this.borderlessNode,
                                    frameNode: t,
                                },
                                () =>
                                    r.a.createElement(
                                        Be,
                                        null,
                                        this.renderParts(),
                                        this.renderSuggestions()
                                    )
                            ),
                            this.renderFooter()
                        ),
                        r.a.createElement(_.a, { appWindow: this.props.frameWindow })
                    );
                }
            }
            borderless_conversation_BorderlessConversation.propTypes = {
                conversation: s.a.shape({
                    id: s.a.string.isRequired,
                    fetchState: s.a.oneOf(['summary', 'partial', 'all']),
                    parts: s.a.arrayOf(
                        s.a.shape({
                            id: s.a.string,
                            replyType: s.a.oneOf(['text', 'attribute_collector']),
                        })
                    ).isRequired,
                    composerState: s.a.shape({ visible: s.a.bool.isRequired }).isRequired,
                }),
                conversationSuggestions: s.a.shape({
                    prompt: s.a.any,
                    suggestions: s.a.arrayOf(
                        s.a.shape({
                            uuid: s.a.string.isRequired,
                            text: s.a.string.isRequired,
                            preAction: s.a.string,
                        })
                    ),
                }),
                typeAheadSuggestions: s.a.shape({
                    prompt: s.a.any,
                    suggestions: s.a.arrayOf(
                        s.a.shape({
                            uuid: s.a.string.isRequired,
                            text: s.a.string.isRequired,
                            preAction: s.a.string,
                        })
                    ),
                }),
                onSuggestionClicked: s.a.func,
                setComposerSuggestionsDismissed: s.a.func,
                appName: s.a.string.isRequired,
                userRole: s.a.string.isRequired,
                hasHistory: s.a.bool,
                alignment: s.a.string,
                onOpen: s.a.func.isRequired,
                onHeightChange: s.a.func.isRequired,
                onPopoverToggle: s.a.func.isRequired,
                onArticleCardClick: s.a.func.isRequired,
                onReactionSelect: s.a.func.isRequired,
                onRetry: s.a.func.isRequired,
                onViewMore: s.a.func.isRequired,
                onClose: s.a.func.isRequired,
                onComposerClick: s.a.func.isRequired,
                frameWindow: s.a.any.isRequired,
                showReplyToButton: s.a.bool,
                part: s.a.object,
                frameNode: s.a.object.isRequired,
            };
            const it = Object(He.a)(borderless_conversation_BorderlessConversation);
            var st = o(8),
                nt = o(558);
            var rt = o(87),
                at = o(4);
            var ct = Object(Oe.connect)(
                (e, t) => {
                    const { name: o } = e.app,
                        { role: i } = e.user,
                        { part: s, conversation: n } = t,
                        { alignment: r } = Object(rt.a)(e),
                        a = n.parts.filter(e => e.createdAt >= s.createdAt);
                    let { messageType: c } = a[0];
                    (c = c || 'adminReply'), (a[0] = Object.assign({}, a[0], { messageType: c }));
                    const l = a.length < n.parts.length;
                    return {
                        appName: o,
                        userRole: i,
                        conversation: Object.assign({}, n, { parts: a }),
                        hasHistory: l,
                        alignment: r,
                    };
                },
                e => ({
                    onOpen: t => {
                        e(
                            (function(e) {
                                return { type: 'OPEN_BORDERLESS_CONVERSATION', conversationId: e };
                            })(t)
                        );
                    },
                    onRetry: (t, o) => {
                        e(Object(at.p)(Ce.b, t, o));
                    },
                    onReactionSelect: (t, o) => {
                        e(Object(at.k)(Ce.b, t, o, !1));
                    },
                    onArticleCardClick: (t, o) => e(Object(nt.c)(Ce.b, t, o)),
                    onViewMore: t => {
                        e(Object(st.g)(t));
                    },
                }),
                (e, t, o) => {
                    const { conversation: i } = e,
                        { id: s } = i,
                        n = {
                            onOpen: () => {
                                t.onOpen(s);
                            },
                            onReactionSelect: e => {
                                t.onReactionSelect(s, e);
                            },
                            onRetry: e => {
                                t.onRetry(i, e);
                            },
                            onViewMore: () => {
                                t.onViewMore(s);
                            },
                            conversation: i,
                        };
                    return Object.assign({}, e, t, o, n);
                }
            )(it);
            const lt = ({ theme: e }) => {
                let t = -e.verticalPaddingPx + e.borderlessIframePaddingPx;
                return (
                    e.isLauncherEnabled && (t -= e.launcherOffsetBottomPaddingPx),
                    e.privilegeSeparationEnabled
                        ? Object(u.b)('max-height:', e.pageHeight + t, 'px;')
                        : Object(u.b)('max-height:calc(100% + ', t, 'px);')
                );
            };
            var pt = { name: 'n7pinj', styles: 'min-height:350px;' };
            const ht = Object(u.c)(j.a, { target: 'eqgwjwo0' })(
                'z-index:',
                Object(w.m)(),
                ';position:fixed;width:360px;',
                lt,
                ';',
                ({ theme: e }) =>
                    Object(u.b)(
                        'bottom:',
                        e.verticalPaddingPx - e.borderlessIframePaddingPx,
                        'px;right:',
                        e.horizontalPaddingPx - e.borderlessIframePaddingPx,
                        'px;'
                    ),
                ' ',
                ({ isPopoverOpen: e }) => e && pt,
                ' ',
                ({ theme: e }) =>
                    e.isLeftAlign &&
                    Object(u.b)(
                        'left:',
                        e.borderlessIframePaddingPx +
                            e.horizontalPaddingPx -
                            e.borderlessIframePaddingLeftPx +
                            e.borderlessAvatarOffsetWidthPx,
                        'px;right:auto;'
                    ),
                ' ',
                ({ theme: e }) =>
                    e.isLauncherEnabled &&
                    Object(u.b)(
                        'bottom:',
                        e.verticalPaddingPx +
                            e.launcherOffsetBottomPaddingPx -
                            e.borderlessIframePaddingPx,
                        'px;'
                    )
            );
            function dt(e, t, o) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = o),
                    e
                );
            }
            class borderless_BorderlessFrame extends n.Component {
                constructor(...e) {
                    super(...e),
                        dt(this, 'state', { height: 0, isPopoverOpen: !1 }),
                        dt(this, 'handleHeightChange', e => {
                            this.setState({ height: e });
                        }),
                        dt(this, 'handlePopoverToggle', e => {
                            this.setState({ isPopoverOpen: e });
                        });
                }
                render() {
                    const {
                            conversation: e,
                            part: t,
                            onClose: o,
                            onComposerClick: i,
                            showReplyToButton: s,
                            conversationSuggestions: n,
                            typeAheadSuggestions: a,
                            onSuggestionClicked: c,
                            setComposerSuggestionsDismissed: p,
                        } = this.props,
                        { isPopoverOpen: h, height: d } = this.state;
                    return r.a.createElement(
                        ht,
                        {
                            style: { height: d },
                            className: 'intercom-borderless-frame',
                            frameName: 'intercom-borderless-frame',
                            title: `Intercom live chat ${Object(l.e)('message')}`,
                            isPopoverOpen: h,
                        },
                        (l, h) =>
                            r.a.createElement(ct, {
                                conversation: e,
                                conversationSuggestions: n,
                                typeAheadSuggestions: a,
                                onSuggestionClicked: c,
                                setComposerSuggestionsDismissed: p,
                                part: t,
                                frameWindow: l,
                                onClose: o,
                                onHeightChange: this.handleHeightChange,
                                onPopoverToggle: this.handlePopoverToggle,
                                onComposerClick: i,
                                showReplyToButton: s,
                                frameNode: h,
                            })
                    );
                }
            }
            function mt(e, t, o) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = o),
                    e
                );
            }
            (borderless_BorderlessFrame.propTypes = {
                conversation: s.a.object.isRequired,
                conversationSuggestions: s.a.shape({
                    prompt: s.a.any,
                    suggestions: s.a.arrayOf(
                        s.a.shape({
                            uuid: s.a.string.isRequired,
                            text: s.a.string.isRequired,
                            preAction: s.a.string,
                        })
                    ),
                }),
                typeAheadSuggestions: s.a.shape({
                    prompt: s.a.any,
                    suggestions: s.a.arrayOf(
                        s.a.shape({
                            uuid: s.a.string.isRequired,
                            text: s.a.string.isRequired,
                            preAction: s.a.string,
                        })
                    ),
                }),
                onSuggestionClicked: s.a.func,
                setComposerSuggestionsDismissed: s.a.func,
                part: s.a.object.isRequired,
                onClose: s.a.func.isRequired,
                onComposerClick: s.a.func,
                showReplyToButton: s.a.bool,
            }),
                o.d(t, 'a', function() {
                    return message_Message;
                });
            class message_Message extends n.Component {
                constructor(...e) {
                    super(...e),
                        mt(this, 'addMessageMetric', e => {
                            const {
                                conversation: t,
                                part: { id: o, messageType: i },
                            } = this.props;
                            Object(A.e)(e, 'message', 'in_app', 'from_full', {
                                conversation_id: t.id,
                                message_id: o,
                                message_type: i,
                            });
                        }),
                        mt(this, 'handleDismissClick', () => {
                            this.addMessageMetric('closed'), this.props.onClose();
                        }),
                        mt(this, 'handleComposerSuggestionClicked', e => {
                            const { conversation: t, onSuggestionClicked: o } = this.props;
                            o && o(t, e);
                        });
                }
                componentDidMount() {
                    const {
                        conversation: e,
                        userIsPresent: t,
                        onOpen: o,
                        onConversationRead: i,
                    } = this.props;
                    o(), !e.read && t && i(), this.addMessageMetric('received');
                }
                componentDidUpdate() {
                    const { userIsPresent: e, conversation: t } = this.props;
                    e && !t.read && this.props.onConversationRead();
                }
                render() {
                    const {
                            appWindow: e,
                            conversation: t,
                            part: o,
                            appName: i,
                            isMobile: s,
                            onComposerOrFormInputClick: n,
                            onReactionSelect: a,
                            showUploadButton: c,
                            showGifButton: l,
                            shouldShowUpfrontEmailComposer: p,
                            onSuggestionClicked: h,
                            setComposerSuggestionsDismissed: d,
                            conversationSuggestions: m,
                            typeAheadSuggestions: u,
                        } = this.props,
                        { messageType: g, reactionsReply: b } = o;
                    switch (g) {
                        case 'adminReply':
                        case 'link':
                        case 'messengerCard':
                        case 'notificationChannels':
                        case 'attributeCollector':
                        case 'conversationRating':
                        case 'chat':
                            return s
                                ? r.a.createElement(R, {
                                      appName: i,
                                      part: o,
                                      onClose: this.handleDismissClick,
                                      composerState: t.composerState,
                                      onComposerOrFormInputClick: n,
                                  })
                                : r.a.createElement(borderless_BorderlessFrame, {
                                      conversation: t,
                                      conversationSuggestions: m,
                                      typeAheadSuggestions: u,
                                      onSuggestionClicked: h,
                                      setComposerSuggestionsDismissed: d,
                                      part: o,
                                      onClose: this.handleDismissClick,
                                      showReplyToButton: p,
                                      onComposerClick: n,
                                  });
                        case 'video':
                            return r.a.createElement(ye, {
                                conversation: t,
                                conversationSuggestions: m,
                                onSuggestionClicked: h,
                                setComposerSuggestionsDismissed: d,
                                standalone: !0,
                                part: o,
                                onClose: this.handleDismissClick,
                                onComposerOrFormInputClick: n,
                            });
                        case 'note':
                            return r.a.createElement(note_NoteFrame, {
                                conversationId: t.id,
                                appName: i,
                                message: o,
                                reactionsReply: b,
                                showUploadButton: c,
                                showGifButton: l,
                                onClose: this.handleDismissClick,
                                onComposerClick: n,
                                onReactionSelect: a,
                                showReplyToButton: p,
                            });
                        case 'post':
                            return r.a.createElement(ee.a, {
                                conversationId: t.id,
                                appName: i,
                                message: o,
                                reactionsReply: b,
                                onClose: this.handleDismissClick,
                                onComposerClick: n,
                                onReactionSelect: a,
                                showReplyToButton: p,
                            });
                        case 'pointer':
                            return r.a.createElement(pointer_PointerFrame, {
                                appWindow: e,
                                appName: i,
                                message: o,
                                conversationId: t.id,
                                reactionsReply: b,
                                onComposerClick: n,
                                onReactionSelect: a,
                                onClose: this.handleDismissClick,
                            });
                    }
                }
            }
            message_Message.propTypes = {
                appWindow: s.a.object,
                conversation: s.a.shape({
                    id: s.a.string.isRequired,
                    read: s.a.bool.isRequired,
                    composerState: s.a.shape({ visible: s.a.bool.isRequired }).isRequired,
                }).isRequired,
                conversationSuggestions: s.a.shape({
                    prompt: s.a.any,
                    suggestions: s.a.arrayOf(
                        s.a.shape({
                            uuid: s.a.string.isRequired,
                            text: s.a.string.isRequired,
                            preAction: s.a.string,
                        })
                    ),
                }),
                typeAheadSuggestions: s.a.shape({
                    prompt: s.a.any,
                    suggestions: s.a.arrayOf(
                        s.a.shape({
                            uuid: s.a.string.isRequired,
                            text: s.a.string.isRequired,
                            preAction: s.a.string,
                        })
                    ),
                }),
                onSuggestionClicked: s.a.func,
                setComposerSuggestionsDismissed: s.a.func,
                part: s.a.shape({
                    id: s.a.string,
                    messageType: s.a.string,
                    reactionsReply: s.a.shape({
                        reactionIndex: s.a.number,
                        reactionSet: s.a.array.isRequired,
                    }),
                }).isRequired,
                appName: s.a.string.isRequired,
                isMobile: s.a.bool.isRequired,
                userIsPresent: s.a.bool.isRequired,
                onConversationRead: s.a.func.isRequired,
                onOpen: s.a.func.isRequired,
                onClose: s.a.func.isRequired,
                onComposerOrFormInputClick: s.a.func.isRequired,
                onReactionSelect: s.a.func.isRequired,
                showUploadButton: s.a.bool,
                showGifButton: s.a.bool,
                shouldShowUpfrontEmailComposer: s.a.bool,
            };
        },
        636: function(e, t, o) {
            'use strict';
            var i = o(58),
                s = o.n(i),
                n = o(447),
                r = o.n(n),
                a = o(433),
                c = o.n(a),
                l = o(776),
                p = o.n(l),
                h = o(463),
                d = o.n(h);
            function m(e, t, o) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = o),
                    e
                );
            }
            class positioner_tree_PositionerTree extends a.Component {
                constructor(...e) {
                    super(...e),
                        m(this, 'document', this.props.appWindow.document),
                        m(this, 'state', { container: null });
                }
                componentDidMount() {
                    const { appWindow: e } = this.props,
                        t = e.document.querySelector('#intercom-container');
                    if (!e.document.body) return;
                    const o = e.document.createElement('div');
                    (o.id = 'intercom-positioner-tree'),
                        o.classList.add('intercom-namespace'),
                        (o.style.cssText =
                            'position: initial; !important; z-index: 2147483647 !important;'),
                        t.insertAdjacentElement('beforeBegin', o),
                        this.setState({ container: o });
                }
                componentWillUnmount() {
                    const e = this.state.container;
                    if (!e) return;
                    const t = e.parentNode;
                    t && t.removeChild(e);
                }
                render() {
                    return this.state.container
                        ? d.a.createPortal(this.props.children, this.state.container)
                        : null;
                }
            }
            var u = o(20),
                g = o(7),
                b = e => {
                    if (e.IntercomIntersectionObserver) return;
                    const t = e.document;
                    if (
                        !g.a.isFirefox() &&
                        'IntersectionObserver' in e &&
                        'IntersectionObserverEntry' in e &&
                        'intersectionRatio' in e.IntersectionObserverEntry.prototype &&
                        'isIntersecting' in e.IntersectionObserverEntry.prototype
                    )
                        return (
                            (e.IntercomIntersectionObserver = e.IntersectionObserver),
                            (e.IntercomIntersectionObserverEntry = e.IntersectionObserverEntry),
                            !0
                        );
                    var o = [];
                    function i(e) {
                        (this.time = e.time),
                            (this.target = e.target),
                            (this.rootBounds = e.rootBounds),
                            (this.boundingClientRect = e.boundingClientRect),
                            (this.intersectionRect = e.intersectionRect || {
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                width: 0,
                                height: 0,
                            }),
                            (this.isIntersecting = !!e.intersectionRect);
                        var t = this.boundingClientRect,
                            o = t.width * t.height,
                            i = this.intersectionRect,
                            s = i.width * i.height;
                        this.intersectionRatio = o ? s / o : this.isIntersecting ? 1 : 0;
                    }
                    function s(e, t) {
                        var o,
                            i,
                            s,
                            n = t || {};
                        if ('function' != typeof e) throw new Error('callback must be a function');
                        if (n.root && 1 != n.root.nodeType)
                            throw new Error('root must be an Element');
                        (this._checkForIntersections =
                            ((o = this._checkForIntersections.bind(this)),
                            (i = this.THROTTLE_TIMEOUT),
                            (s = null),
                            function() {
                                s ||
                                    (s = setTimeout(function() {
                                        o(), (s = null);
                                    }, i));
                            })),
                            (this._callback = e),
                            (this._observationTargets = []),
                            (this._queuedEntries = []),
                            (this._rootMarginValues = this._parseRootMargin(n.rootMargin)),
                            (this.thresholds = this._initThresholds(n.threshold)),
                            (this.root = n.root || null),
                            (this.rootMargin = this._rootMarginValues
                                .map(function(e) {
                                    return e.value + e.unit;
                                })
                                .join(' '));
                    }
                    function n(e, t, o, i) {
                        null != e &&
                            ('function' == typeof e.addEventListener
                                ? e.addEventListener(t, o, i || !1)
                                : 'function' == typeof e.attachEvent && e.attachEvent('on' + t, o));
                    }
                    function r(e, t, o, i) {
                        null != e &&
                            ('function' == typeof e.removeEventListener
                                ? e.removeEventListener(t, o, i || !1)
                                : 'function' == typeof e.detatchEvent &&
                                  e.detatchEvent('on' + t, o));
                    }
                    function a(e) {
                        var t;
                        try {
                            t = e.getBoundingClientRect();
                        } catch (e) {}
                        return t
                            ? ((t.width && t.height) ||
                                  (t = {
                                      top: t.top,
                                      right: t.right,
                                      bottom: t.bottom,
                                      left: t.left,
                                      width: t.right - t.left,
                                      height: t.bottom - t.top,
                                  }),
                              t)
                            : { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
                    }
                    function c(e, t) {
                        for (var o = t; o; ) {
                            if (o == e) return !0;
                            o = l(o);
                        }
                        return !1;
                    }
                    function l(e) {
                        var t = e.parentNode;
                        return t && 11 == t.nodeType && t.host ? t.host : t;
                    }
                    (s.prototype.THROTTLE_TIMEOUT = 100),
                        (s.prototype.POLL_INTERVAL = null),
                        (s.prototype.USE_MUTATION_OBSERVER = !0),
                        (s.prototype.observe = function(e) {
                            if (
                                !this._observationTargets.some(function(t) {
                                    return t.element == e;
                                })
                            ) {
                                if (!e || 1 != e.nodeType)
                                    throw new Error('target must be an Element');
                                this._registerInstance(),
                                    this._observationTargets.push({ element: e, entry: null }),
                                    this._monitorIntersections(),
                                    this._checkForIntersections();
                            }
                        }),
                        (s.prototype.unobserve = function(e) {
                            (this._observationTargets = this._observationTargets.filter(function(
                                t
                            ) {
                                return t.element != e;
                            })),
                                this._observationTargets.length ||
                                    (this._unmonitorIntersections(), this._unregisterInstance());
                        }),
                        (s.prototype.disconnect = function() {
                            (this._observationTargets = []),
                                this._unmonitorIntersections(),
                                this._unregisterInstance();
                        }),
                        (s.prototype.takeRecords = function() {
                            var e = this._queuedEntries.slice();
                            return (this._queuedEntries = []), e;
                        }),
                        (s.prototype._initThresholds = function(e) {
                            var t = e || [0];
                            return (
                                Array.isArray(t) || (t = [t]),
                                t.sort().filter(function(e, t, o) {
                                    if ('number' != typeof e || isNaN(e) || e < 0 || e > 1)
                                        throw new Error(
                                            'threshold must be a number between 0 and 1 inclusively'
                                        );
                                    return e !== o[t - 1];
                                })
                            );
                        }),
                        (s.prototype._parseRootMargin = function(e) {
                            var t = (e || '0px').split(/\s+/).map(function(e) {
                                var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                                if (!t)
                                    throw new Error(
                                        'rootMargin must be specified in pixels or percent'
                                    );
                                return { value: parseFloat(t[1]), unit: t[2] };
                            });
                            return (
                                (t[1] = t[1] || t[0]),
                                (t[2] = t[2] || t[0]),
                                (t[3] = t[3] || t[1]),
                                t
                            );
                        }),
                        (s.prototype._monitorIntersections = function() {
                            this._monitoringIntersections ||
                                ((this._monitoringIntersections = !0),
                                this.POLL_INTERVAL
                                    ? (this._monitoringInterval = setInterval(
                                          this._checkForIntersections,
                                          this.POLL_INTERVAL
                                      ))
                                    : (n(e, 'resize', this._checkForIntersections, !0),
                                      this._observationTargets.forEach(e => {
                                          this._monitorScrollForElement(e);
                                      }),
                                      this.USE_MUTATION_OBSERVER &&
                                          'MutationObserver' in e &&
                                          ((this._domObserver = new MutationObserver(
                                              this._checkForIntersections
                                          )),
                                          this._domObserver.observe(t, {
                                              attributes: !0,
                                              childList: !0,
                                              characterData: !0,
                                              subtree: !0,
                                          }))));
                        }),
                        (s.prototype._monitorScrollForElement = function(e) {
                            e !== t &&
                                e &&
                                (n(e, 'scroll', this._checkForIntersections, !0),
                                this._monitorScrollForElement(e.parent));
                        }),
                        (s.prototype._unmonitorScrollForElement = function(e) {
                            e !== t &&
                                e &&
                                (r(e, 'scroll', this._checkForIntersections, !0),
                                this._unmonitorScrollForElement(e.parent));
                        }),
                        (s.prototype._unmonitorIntersections = function() {
                            this._monitoringIntersections &&
                                ((this._monitoringIntersections = !1),
                                clearInterval(this._monitoringInterval),
                                (this._monitoringInterval = null),
                                r(e, 'resize', this._checkForIntersections, !0),
                                this._observationTargets.forEach(e => {
                                    this._unmonitorScrollForElement(e);
                                }),
                                this._domObserver &&
                                    (this._domObserver.disconnect(), (this._domObserver = null)));
                        }),
                        (s.prototype._checkForIntersections = function() {
                            var t = this._rootIsInDom(),
                                o = t
                                    ? this._getRootRect()
                                    : { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
                            this._observationTargets.forEach(function(s) {
                                var n = s.element,
                                    r = a(n),
                                    c = this._rootContainsTarget(n),
                                    l = s.entry,
                                    p = t && c && this._computeTargetAndRootIntersection(n, o),
                                    h = (s.entry = new i({
                                        time: e.performance && performance.now && performance.now(),
                                        target: n,
                                        boundingClientRect: r,
                                        rootBounds: o,
                                        intersectionRect: p,
                                    }));
                                l
                                    ? t && c
                                        ? this._hasCrossedThreshold(l, h) &&
                                          this._queuedEntries.push(h)
                                        : l && l.isIntersecting && this._queuedEntries.push(h)
                                    : this._queuedEntries.push(h);
                            }, this),
                                this._queuedEntries.length &&
                                    this._callback(this.takeRecords(), this);
                        }),
                        (s.prototype._computeTargetAndRootIntersection = function(o, i) {
                            if ('none' != e.getComputedStyle(o).display) {
                                for (var s, n, r, c, p, h, d, m, u = a(o), g = l(o), b = !1; !b; ) {
                                    var f = null,
                                        v = 1 == g.nodeType ? e.getComputedStyle(g) : {};
                                    if ('none' == v.display) return;
                                    if (
                                        (g == this.root || g == t
                                            ? ((b = !0), (f = i))
                                            : g != t.body &&
                                              g != t.documentElement &&
                                              'visible' != v.overflow &&
                                              (f = a(g)),
                                        f &&
                                            ((s = f),
                                            (n = u),
                                            (r = void 0),
                                            (c = void 0),
                                            (p = void 0),
                                            (h = void 0),
                                            (d = void 0),
                                            (m = void 0),
                                            (r = Math.max(s.top, n.top)),
                                            (c = Math.min(s.bottom, n.bottom)),
                                            (p = Math.max(s.left, n.left)),
                                            (h = Math.min(s.right, n.right)),
                                            (m = c - r),
                                            !(u = (d = h - p) >= 0 &&
                                                m >= 0 && {
                                                    top: r,
                                                    bottom: c,
                                                    left: p,
                                                    right: h,
                                                    width: d,
                                                    height: m,
                                                })))
                                    )
                                        break;
                                    g = l(g);
                                }
                                return u;
                            }
                        }),
                        (s.prototype._getRootRect = function() {
                            var e;
                            if (this.root) e = a(this.root);
                            else {
                                var o = t.documentElement,
                                    i = t.body;
                                e = {
                                    top: 0,
                                    left: 0,
                                    right: o.clientWidth || i.clientWidth,
                                    width: o.clientWidth || i.clientWidth,
                                    bottom: o.clientHeight || i.clientHeight,
                                    height: o.clientHeight || i.clientHeight,
                                };
                            }
                            return this._expandRectByRootMargin(e);
                        }),
                        (s.prototype._expandRectByRootMargin = function(e) {
                            var t = this._rootMarginValues.map(function(t, o) {
                                    return 'px' == t.unit
                                        ? t.value
                                        : (t.value * (o % 2 ? e.width : e.height)) / 100;
                                }),
                                o = {
                                    top: e.top - t[0],
                                    right: e.right + t[1],
                                    bottom: e.bottom + t[2],
                                    left: e.left - t[3],
                                };
                            return (o.width = o.right - o.left), (o.height = o.bottom - o.top), o;
                        }),
                        (s.prototype._hasCrossedThreshold = function(e, t) {
                            var o = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
                                i = t.isIntersecting ? t.intersectionRatio || 0 : -1;
                            if (o !== i)
                                for (var s = 0; s < this.thresholds.length; s++) {
                                    var n = this.thresholds[s];
                                    if (n == o || n == i || n < o != n < i) return !0;
                                }
                        }),
                        (s.prototype._rootIsInDom = function() {
                            return !this.root || c(t, this.root);
                        }),
                        (s.prototype._rootContainsTarget = function(e) {
                            return c(this.root || t, e);
                        }),
                        (s.prototype._registerInstance = function() {
                            o.indexOf(this) < 0 && o.push(this);
                        }),
                        (s.prototype._unregisterInstance = function() {
                            var e = o.indexOf(this);
                            -1 != e && o.splice(e, 1);
                        }),
                        (e.IntercomIntersectionObserver = s),
                        (e.IntercomIntersectionObserverEntry = e.IntersectionObserverEntry);
                };
            var f = e => {
                var t = e,
                    o = e.document,
                    i = t.HTMLElement || t.Element,
                    s = {
                        scroll: t.scroll || t.scrollTo,
                        scrollBy: t.scrollBy || t.intercomScrollBy,
                        elementScroll: c,
                        intercomScrollIntoView: i.prototype.intercomScrollIntoView,
                    },
                    n =
                        t.performance && t.performance.now
                            ? t.performance.now.bind(t.performance)
                            : Date.now;
                var r,
                    a =
                        ((r = t.navigator.userAgent),
                        new RegExp(['MSIE ', 'Trident/', 'Edge/'].join('|')).test(r) ? 1 : 0);
                function c(e, t) {
                    (this.scrollLeft = e), (this.scrollTop = t);
                }
                function l(e) {
                    if (
                        null === e ||
                        'object' != typeof e ||
                        void 0 === e.behavior ||
                        'auto' === e.behavior ||
                        'instant' === e.behavior
                    )
                        return !0;
                    if ('object' == typeof e && 'smooth' === e.behavior) return !1;
                    throw new TypeError(
                        'behavior member of ScrollOptions ' +
                            e.behavior +
                            ' is not a valid value for enumeration ScrollBehavior.'
                    );
                }
                function p(e, t) {
                    return 'Y' === t
                        ? e.clientHeight + a < e.scrollHeight
                        : 'X' === t
                        ? e.clientWidth + a < e.scrollWidth
                        : void 0;
                }
                function h(e, o) {
                    var i = t.getComputedStyle(e, null)['overflow' + o];
                    return 'auto' === i || 'scroll' === i;
                }
                function d(e) {
                    var t = p(e, 'Y') && h(e, 'Y'),
                        o = p(e, 'X') && h(e, 'X');
                    return t || o;
                }
                function m(e) {
                    var t;
                    do {
                        t = (e = e.parentNode) === o.body;
                    } while (!1 === t && !1 === d(e));
                    return (t = null), e;
                }
                function u(e) {
                    var o,
                        i,
                        s,
                        r,
                        a = (n() - e.startTime) / 800;
                    (r = a = a > 1 ? 1 : a),
                        (o = 0.5 * (1 - Math.cos(Math.PI * r))),
                        (i = e.startX + (e.x - e.startX) * o),
                        (s = e.startY + (e.y - e.startY) * o),
                        e.method.call(e.scrollable, i, s),
                        (i === e.x && s === e.y) || t.requestAnimationFrame(u.bind(t, e));
                }
                function g(e, i, r) {
                    var a,
                        l,
                        p,
                        h,
                        d = n();
                    e === o.body
                        ? ((a = t),
                          (l = t.scrollX || t.pageXOffset),
                          (p = t.scrollY || t.pageYOffset),
                          (h = s.scroll))
                        : ((a = e), (l = e.scrollLeft), (p = e.scrollTop), (h = c)),
                        u({
                            scrollable: a,
                            method: h,
                            startTime: d,
                            startX: l,
                            startY: p,
                            x: i,
                            y: r,
                        });
                }
                (t.intercomScrollBy = function() {
                    void 0 !== arguments[0] &&
                        (l(arguments[0])
                            ? s.scrollBy.call(
                                  t,
                                  void 0 !== arguments[0].left
                                      ? arguments[0].left
                                      : 'object' != typeof arguments[0]
                                      ? arguments[0]
                                      : 0,
                                  void 0 !== arguments[0].top
                                      ? arguments[0].top
                                      : void 0 !== arguments[1]
                                      ? arguments[1]
                                      : 0
                              )
                            : g.call(
                                  t,
                                  o.body,
                                  ~~arguments[0].left + (t.scrollX || t.pageXOffset),
                                  ~~arguments[0].top + (t.scrollY || t.pageYOffset)
                              ));
                }),
                    (i.prototype.intercomScrollIntoView = function() {
                        if (!0 !== l(arguments[0])) {
                            var e = m(this),
                                i = e.getBoundingClientRect(),
                                n = this.getBoundingClientRect();
                            e !== o.body
                                ? (g.call(
                                      this,
                                      e,
                                      e.scrollLeft + n.left - i.left,
                                      e.scrollTop + n.top - i.top
                                  ),
                                  'fixed' !== t.getComputedStyle(e).position &&
                                      t.intercomScrollBy({
                                          left: i.left,
                                          top: i.top,
                                          behavior: 'smooth',
                                      }))
                                : t.intercomScrollBy({
                                      left: n.left,
                                      top: n.top,
                                      behavior: 'smooth',
                                  });
                        } else
                            s.intercomScrollIntoView.call(
                                this,
                                void 0 === arguments[0] || arguments[0]
                            );
                    });
            };
            var v = o(777);
            const y = (e, t) => {
                const o = t.element;
                if (!o) return e;
                const i = e.placement.split('-')[0],
                    { popper: s, reference: n } = e.offsets,
                    r = -1 !== ['left', 'right'].indexOf(i),
                    a = r ? 'height' : 'width',
                    c = r ? 'Top' : 'Left',
                    l = c.toLowerCase(),
                    p = r ? 'left' : 'top',
                    h = r ? 'bottom' : 'right',
                    d = Object(v.getOuterSizes)(o)[a];
                n[h] - d < s[l] && (e.offsets.popper[l] -= s[l] - (n[h] - d)),
                    n[l] + d > s[h] && (e.offsets.popper[l] += n[l] + d - s[h]),
                    (e.offsets.popper = Object(v.getClientRect)(e.offsets.popper));
                const m = n[l] + n[a] / 2 - d / 2,
                    u = Object(v.getStyleComputedProperty)(e.instance.popper),
                    g = parseFloat(u[`margin${c}`]),
                    b = parseFloat(u[`border${c}Width`]);
                let f = m - e.offsets.popper[l] - g - b;
                return (
                    (f = Math.max(Math.min(s[a] - d - 32, f), 0)),
                    (e.arrowElement = o),
                    (e.offsets.arrow = { [l]: Math.round(f), [p]: '' }),
                    e
                );
            };
            var O = o(616);
            function C(e, t, o) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = o),
                    e
                );
            }
            class event_blocker_EventBlocker extends a.Component {
                constructor(...e) {
                    super(...e),
                        C(this, 'eventBlockerRef', void 0),
                        C(this, 'stopBubbling', e => {
                            'click' === e.type &&
                                this.props.onClickEvent &&
                                this.props.onClickEvent(),
                                e.stopPropagation();
                        });
                }
                componentDidMount() {
                    this.eventBlockerRef &&
                        this.props.events.forEach(e => {
                            Object(u.c)(this.eventBlockerRef, e, this.stopBubbling);
                        });
                }
                componentWillUnmount() {
                    this.eventBlockerRef &&
                        this.props.events.forEach(e => {
                            Object(u.y)(this.eventBlockerRef, e, this.stopBubbling);
                        });
                }
                render() {
                    return c.a.createElement(
                        'div',
                        { className: 'event-blocker', ref: e => (this.eventBlockerRef = e) },
                        this.props.children
                    );
                }
            }
            function S(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t &&
                        (i = i.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        o.push.apply(o, i);
                }
                return o;
            }
            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? S(o, !0).forEach(function(t) {
                              k(e, t, o[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
                        : S(o).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
                          });
                }
                return e;
            }
            function k(e, t, o) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = o),
                    e
                );
            }
            o.d(t, 'a', function() {
                return positioner_Positioner;
            });
            class positioner_Positioner extends a.Component {
                constructor(...e) {
                    super(...e),
                        k(this, 'arrow', void 0),
                        k(this, 'node', void 0),
                        k(this, 'arrowContainer', void 0),
                        k(this, 'positioner', void 0),
                        k(this, 'targetInDom', void 0),
                        k(this, 'IntersectionObserver', void 0),
                        k(this, 'missingSelectorTimeout', void 0),
                        k(this, 'scrollIntoViewTimeout', void 0),
                        k(this, 'repositionCheckTimeout', void 0),
                        k(this, 'mutationObserver', void 0),
                        k(this, 'state', {
                            styles: null,
                            arrowStyles: null,
                            hide: !1,
                            nodeInViewPort: !1,
                            nodeIsEntirelyInViewport: !1,
                            positionerOffsetForMask: { left: 0, top: 0 },
                            placement: null,
                            maskStyles: { padding: 0, top: 0, left: 0, width: 0, height: 0 },
                        }),
                        k(this, 'targetWithClickHandler', null),
                        k(this, 'updateElementPosition', e => {
                            const { styles: t, arrowStyles: o } = e;
                            return (
                                this.setState({
                                    styles: t,
                                    hide: !this.targetIsVisible(),
                                    arrowStyles: o,
                                }),
                                e.attributes && this.applyAttributes(e.attributes),
                                this.checkIfRepositionRequired(e),
                                e
                            );
                        }),
                        k(this, 'updateMaskPosition', () => {
                            const e = this.getMaskStyles();
                            r()(this.state.maskStyles, e) || this.setState({ maskStyles: e });
                        }),
                        k(this, 'handleOverlayClick', () => {
                            this.scrollIntoView(),
                                this.props.onOverlayClick && this.props.onOverlayClick();
                        }),
                        k(this, 'handleTargetClick', () => {
                            this.props.onTargetClick && this.props.onTargetClick();
                        }),
                        k(this, 'handlePlacementChange', () => {
                            this.props.onPlacementChange &&
                                this.state.placement &&
                                this.props.onPlacementChange(this.state.placement);
                        }),
                        k(this, 'renderOverlay', () => {
                            const e = this.getTargetNode();
                            return this.props.renderOverlay(this.handleOverlayClick, this.props, e);
                        });
                }
                reinitializeObjects() {
                    this.initializeIntersectionObserver(),
                        this.initializePositioner(),
                        this.setupTargetClickHandler();
                }
                componentDidMount() {
                    this.initializeMuationObserver(),
                        this.reinitializeObjects(),
                        this.updateMaskPosition();
                }
                shouldComponentUpdate(e, t) {
                    return !r()(this.props, e) || !r()(this.state, t);
                }
                componentDidUpdate(e, t) {
                    e.targetSelector !== this.props.targetSelector
                        ? this.reinitializeObjects()
                        : this.positioner
                        ? this.positioner.scheduleUpdate()
                        : this.reinitializeObjects(),
                        t.placement !== this.state.placement && this.handlePlacementChange();
                }
                componentWillUnmount() {
                    const { appWindow: e } = this.props;
                    this.destroyIntersectionObserver(),
                        this.destroyPositioner(),
                        this.destroyTargetClickHandler(),
                        (e => {
                            e.IntercomIntersectionObserver &&
                                (delete e.IntercomIntersectionObserver,
                                delete e.IntercomIntersectionObserverEntry);
                        })(e),
                        (e => {
                            var t = e;
                            ((t.HTMLElement || t.Element).prototype.intercomScrollIntoView = null),
                                t.intercomScrollBy && delete t.intercomScrollBy;
                        })(e),
                        this.missingSelectorTimeout && clearTimeout(this.missingSelectorTimeout),
                        this.scrollIntoViewTimeout && clearTimeout(this.scrollIntoViewTimeout),
                        this.repositionCheckTimeout && clearTimeout(this.repositionCheckTimeout),
                        this.mutationObserver && this.mutationObserver.disconnect();
                }
                getTargetNode() {
                    const { targetSelector: e, appWindow: t } = this.props;
                    try {
                        return t.document.querySelector(e);
                    } catch (e) {
                        return null;
                    }
                }
                setupTargetClickHandler() {
                    this.destroyTargetClickHandler(),
                        (this.targetWithClickHandler = this.getTargetNode()),
                        this.targetWithClickHandler &&
                            Object(u.c)(
                                this.targetWithClickHandler,
                                'click',
                                this.handleTargetClick,
                                !0
                            );
                }
                destroyTargetClickHandler() {
                    this.targetWithClickHandler &&
                        Object(u.y)(this.targetWithClickHandler, 'click', this.handleTargetClick);
                }
                storeMaskOffsetsBasedOnFlipPosition(e) {
                    const { scrollable: t } = this.props;
                    if (!t) return;
                    const o = e['x-placement'];
                    switch (o) {
                        case 'bottom':
                            this.setState({
                                placement: o,
                                positionerOffsetForMask: { left: 0, top: 3 },
                            });
                            break;
                        case 'top':
                            this.setState({
                                placement: o,
                                positionerOffsetForMask: { left: 0, top: -3 },
                            });
                            break;
                        case 'left':
                            this.setState({
                                placement: o,
                                positionerOffsetForMask: { left: -5, top: 0 },
                            });
                            break;
                        case 'right':
                            this.setState({
                                placement: o,
                                positionerOffsetForMask: { left: 3, top: 0 },
                            });
                            break;
                        default:
                            return;
                    }
                }
                applyAttributes(e) {
                    [this.arrowContainer, this.node].forEach(t => {
                        t &&
                            'function' == typeof t.querySelectorAll &&
                            Object.keys(e).forEach(o => {
                                t && t.setAttribute && t.setAttribute(o, e[o]);
                            }),
                            this.storeMaskOffsetsBasedOnFlipPosition(e);
                    });
                }
                checkIfRepositionRequired(e) {
                    const { styles: t, attributes: o } = e;
                    if (
                        (this.repositionCheckTimeout && clearTimeout(this.repositionCheckTimeout),
                        o && !1 !== o['x-out-of-boundaries'] && t && t.transform)
                    ) {
                        const e = (t.transform.match(/(-{0,1}\d+)px/g) || []).map(e =>
                                Number(e.replace('px', ''))
                            ),
                            o = parseInt(e[0]),
                            i = parseInt(e[1]);
                        o < 0 &&
                            i < 0 &&
                            (this.repositionCheckTimeout = setTimeout(() => {
                                this.nodeIsVisible() && this.reinitializeObjects();
                            }, 500));
                    }
                }
                targetIsVisible() {
                    const { nodeInViewPort: e } = this.state;
                    if (!e) return !1;
                    const t = this.getTargetNode();
                    return Object(u.u)(t);
                }
                scrollIntoView() {
                    const { appWindow: e } = this.props;
                    f(e),
                        (this.scrollIntoViewTimeout = setTimeout(() => {
                            const { nodeIsEntirelyInViewport: e } = this.state,
                                t = this.getTargetNode();
                            t &&
                                !e &&
                                (t.intercomScrollIntoView
                                    ? t.intercomScrollIntoView({
                                          behavior: 'smooth',
                                          block: 'center',
                                          inline: 'center',
                                      })
                                    : t.scrollIntoView &&
                                      t.scrollIntoView(!0, { behaviour: 'smooth' }));
                        }, 200));
                }
                initializeMuationObserver() {
                    const { appWindow: e } = this.props;
                    (this.targetInDom = !!this.getTargetNode()),
                        (this.mutationObserver = new MutationObserver(() => {
                            this.targetInDom &&
                                !this.getTargetNode() &&
                                ((this.targetInDom = !1),
                                this.destroyPositioner(),
                                this.forceUpdate()),
                                !this.targetInDom &&
                                    this.getTargetNode() &&
                                    ((this.targetInDom = !0), this.forceUpdate()),
                                this.updateMaskPosition();
                        })),
                        this.mutationObserver.observe(e.document.body, {
                            attributes: !0,
                            subtree: !0,
                            childList: !0,
                        });
                }
                initializePositioner() {
                    const { scrollable: e } = this.props,
                        t = this.getTargetNode();
                    t &&
                        this.node &&
                        (e && this.scrollIntoView(),
                        (this.positioner = new p.a(t, this.node, {
                            positionFixed: !1,
                            placement: 'auto',
                            modifiers: {
                                applyStyle: { enabled: !1 },
                                preventOverflow: { boundariesElement: 'viewport' },
                                arrow: { enabled: !0, element: this.arrow, fn: y },
                                updateElementPosition: {
                                    enabled: !0,
                                    fn: this.updateElementPosition,
                                    order: 900,
                                },
                            },
                        })));
                }
                initializeIntersectionObserver() {
                    const { appWindow: e } = this.props,
                        t = this.getTargetNode();
                    t &&
                        (e.IntercomIntersectionObserver || b(e),
                        (this.IntersectionObserver = new e.IntercomIntersectionObserver(
                            e => {
                                if (0 === e.length) return;
                                const { isIntersecting: o, intersectionRatio: i } = s()(
                                        e,
                                        ['time'],
                                        ['desc']
                                    )[0],
                                    n = o,
                                    r = o && Object(u.u)(t),
                                    a = 1 === i;
                                this.setState({
                                    hide: !r,
                                    nodeInViewPort: n,
                                    nodeIsEntirelyInViewport: a,
                                });
                            },
                            { threshold: 0.05 }
                        )),
                        this.IntersectionObserver.observe(t));
                }
                destroyPositioner() {
                    this.positioner && (this.positioner.destroy(), delete this.positioner);
                }
                destroyIntersectionObserver() {
                    this.IntersectionObserver && this.IntersectionObserver.disconnect();
                }
                reinitializePointer() {
                    this.destroyPositioner(), this.initializePositioner();
                }
                reinitializeIntersectionObserver() {
                    this.destroyIntersectionObserver(), this.initializeIntersectionObserver();
                }
                mergedStyles() {
                    const { scrollable: e } = this.props,
                        { styles: t, positionerOffsetForMask: o } = this.state;
                    if (!t) return {};
                    if (!e) return t;
                    const { left: i, top: s } = o;
                    return x({}, t, { left: t.left + i, top: t.top + s });
                }
                nodeIsVisible() {
                    const e = this.getTargetNode();
                    return e && Object(u.u)(e);
                }
                getStyles() {
                    const { hideArrow: e } = this.props,
                        { height: t, width: o, opacity: i } = this.props.childDimensions || {},
                        s = e ? 5 : 15;
                    if (this.nodeIsVisible()) {
                        const e = !this.state.hide && t && o && i ? 1 : 0;
                        return (
                            this.onSelectorMatch(),
                            x({}, this.mergedStyles(), { opacity: e, margin: s })
                        );
                    }
                    if (this.props.renderFallback) {
                        const { opacity: e } = this.props.childDimensions || {};
                        return (
                            this.props.targetSelector && this.onMissingSelector(),
                            {
                                position: 'fixed',
                                top: `calc(50% - ${(t || 0) / 2}px)`,
                                left: `calc(50% - ${(o || 0) / 2}px)`,
                                opacity: e,
                                margin: s,
                            }
                        );
                    }
                }
                getArrowStyles() {
                    const { arrowStyles: e, hide: t } = this.state,
                        { height: o, width: i } = this.props.childDimensions || {},
                        s = !t && o && i ? 1 : 0;
                    return e ? { top: e.top, left: e.left, opacity: s } : { opacity: s };
                }
                getMaskStyles() {
                    const e = this.getTargetNode();
                    if (!e || !this.props.scrollable || this.state.hide)
                        return { padding: 0, top: 0, left: 0, width: 0, height: 0 };
                    const { top: t, left: o, width: i, height: s } = e.getBoundingClientRect(),
                        { appWindow: n } = this.props;
                    return {
                        padding: 3,
                        top: t - 3 + n.pageYOffset,
                        left: o - 3 + n.pageXOffset,
                        width: i,
                        height: s,
                    };
                }
                renderArrow() {
                    return c.a.createElement(
                        O.b,
                        { style: x({}, this.getArrowStyles()), ref: e => (this.arrow = e) },
                        c.a.createElement(
                            O.a,
                            { frameName: 'intercom-positioner-arrow-frame' },
                            () =>
                                c.a.createElement(O.e, {
                                    style: { display: this.props.hideArrow ? 'none' : 'block' },
                                    ref: e => (this.arrowContainer = e),
                                })
                        )
                    );
                }
                onMissingSelector() {
                    this.missingSelectorTimeout ||
                        (this.missingSelectorTimeout = setTimeout(() => {
                            !this.nodeIsVisible() &&
                                this.props.onMissingSelector &&
                                this.props.onMissingSelector();
                        }, 300));
                }
                onSelectorMatch() {
                    this.props.onSelectorMatch && this.props.onSelectorMatch();
                }
                render() {
                    const {
                            scrollable: e,
                            shouldAnimate: t,
                            renderFallback: o,
                            children: i,
                            appWindow: s,
                        } = this.props,
                        n = this.getTargetNode();
                    if (!n && !o) return null;
                    const { maskStyles: r } = this.state,
                        { width: a, height: l } = r;
                    return c.a.createElement(
                        positioner_tree_PositionerTree,
                        { appWindow: s },
                        c.a.createElement(
                            c.a.Fragment,
                            null,
                            c.a.createElement(
                                O.g,
                                { ref: e => (this.node = e), style: this.getStyles() },
                                c.a.createElement(
                                    O.d,
                                    null,
                                    this.nodeIsVisible() ? this.renderArrow() : null,
                                    this.targetIsVisible() || o ? i : null
                                )
                            ),
                            c.a.createElement(O.f, {
                                style: r,
                                isStep: e && !!n,
                                isPost: e && !n,
                                isAnimating: t,
                                height: l,
                                width: a,
                            }),
                            c.a.createElement(
                                event_blocker_EventBlocker,
                                {
                                    events: [
                                        'auxclick',
                                        'click',
                                        'dblclick',
                                        'mousedown',
                                        'mouseup',
                                    ],
                                    onClickEvent: () => this.handleOverlayClick(),
                                },
                                this.renderOverlay()
                            )
                        )
                    );
                }
            }
            k(positioner_Positioner, 'defaultProps', {
                hideArrow: !1,
                renderFallback: !1,
                shouldAnimate: !1,
                renderOverlay: (e, { scrollable: t }) =>
                    c.a.createElement(O.c, { onClick: e, scrollable: t, tabIndex: '-1' }),
            });
        },
        799: function(e, t, o) {
            e.exports = o.p + 'images/video-mask.465b1c38.svg';
        },
        800: function(e, t, o) {
            e.exports = o.p + 'images/video-mask-right.7bfca12f.svg';
        },
        835: function(e, t, o) {
            'use strict';
            o.r(t);
            var i = o(436),
                s = o(18),
                n = o(28),
                r = o(433),
                a = o.n(r),
                c = o(455),
                l = o.n(c),
                p = o(449),
                h = o(487),
                d = o(29),
                m = o(470),
                u = o(508),
                g = o(6),
                b = o(434),
                f = { name: 'isshev', styles: 'padding:25px 0px;' };
            const v = Object(b.c)('div', { target: 'e1mknya50' })(
                    'position:relative;padding:8px;order:0;flex:0 1 100%;align-self:auto;display:flex;justify-content:flex-end;align-items:center;border-top:1px solid #eee;',
                    ({ hideButton: e }) => e && f,
                    ' ',
                    ({ isVideoStep: e }) =>
                        e &&
                        Object(b.b)(
                            'transition:transform 300ms cubic-bezier(0.165,0.84,0.44,1),opacity 10ms;transform:translateY(100%);margin-top:4px;border-radius:5px;position:absolute;bottom:0;left:0;right:0;border:0;opacity:0;',
                            k.className,
                            '{color:#fff;font-size:14px;}'
                        )
                ),
                y = Object(b.c)('div', { target: 'e1mknya51' })(
                    'flex:0 1 auto;position:relative;button{font-size:14px;background-color:',
                    Object(b.f)('appColor'),
                    ';color:white;font-weight:bold;padding:10px 20px;border-radius:4px;cursor:pointer;}button[disabled]{opacity:0.6;}',
                    ({ animating: e }) => e && Object(b.b)('animation:', O(), ' 500ms;')
                ),
                O = () =>
                    Object(b.d)(
                        '0%{',
                        S,
                        ';}25%{',
                        C,
                        ';}49%{',
                        S,
                        ';}50%{',
                        S,
                        ';}75%{',
                        x,
                        ';}100%{',
                        S,
                        ';}'
                    ),
                C = { name: '1ldqog6', styles: 'transform:scale(1.1);' },
                S = { name: '41q668', styles: 'transform:scale(1);' },
                x = { name: 'kp0j2p', styles: 'transform:scale(1.05);' },
                k = Object(b.c)('div', { target: 'e1mknya52' })(
                    'position:absolute;left:0;right:0;text-align:center;color:',
                    Object(b.f)('installGrey1'),
                    ';font-size:14px;'
                );
            function j(e, t, o) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = o),
                    e
                );
            }
            class tour_step_footer_TourStepFooter extends r.Component {
                constructor(...e) {
                    super(...e),
                        j(this, 'button', void 0),
                        j(this, 'disabledButton', void 0),
                        j(this, 'inputFieldValidation', void 0),
                        j(this, 'state', { buttonIsAnimating: !1, disabledButton: !1 }),
                        j(this, 'finishButtonAnimation', () => {
                            this.button && this.setState({ buttonIsAnimating: !1 });
                        }),
                        j(this, 'validateInput', () => {
                            this.setState({ disabledButton: !0 }),
                                (this.inputFieldValidation = new g.c(this.props.selector, e => {
                                    this.setState({ disabledButton: !e });
                                })),
                                this.inputFieldValidation.run();
                        }),
                        j(this, 'handleOnContinue', () => {
                            this.state.disabledButton || this.props.onContinue();
                        });
                }
                componentDidMount() {
                    this.button &&
                        this.button.addEventListener('animationend', this.finishButtonAnimation),
                        'type' === this.props.progressionBehavior && this.validateInput();
                }
                componentDidUpdate() {
                    const { resetOverlayClick: e } = this.props;
                    this.props.hasClickedOverlay && (this.setState({ buttonIsAnimating: !0 }), e());
                }
                componentWillUnmount() {
                    this.inputFieldValidation && this.inputFieldValidation.destroy();
                }
                render() {
                    const e = 'click' !== this.props.progressionBehavior;
                    return a.a.createElement(
                        v,
                        { hideButton: !e, isVideoStep: this.props.isVideoStep },
                        a.a.createElement(
                            k,
                            null,
                            Object(d.e)('product_tours_tour_step_number', {
                                start_number: this.props.activeStepIndex + 1,
                                end_number: this.props.stepCount,
                            })
                        ),
                        e &&
                            a.a.createElement(
                                y,
                                {
                                    animating: this.state.buttonIsAnimating,
                                    ref: e => (this.button = e),
                                },
                                a.a.createElement(
                                    'button',
                                    {
                                        disabled: this.state.disabledButton,
                                        onClick: this.handleOnContinue,
                                        tabIndex: '0',
                                    },
                                    this.props.activeStepIndex + 1 === this.props.stepCount
                                        ? Object(d.e)('product_tours_done')
                                        : Object(d.e)('product_tours_next')
                                )
                            )
                    );
                }
            }
            var w = o(475),
                E = o(592),
                P = o(460),
                _ = o(799),
                R = o.n(_),
                T = o(800),
                I = o.n(T),
                N = o(543),
                B = o(509),
                M = o(540);
            const F = Object(b.c)('div', { target: 'e1ggaaxy0' })(
                    'opacity:0;position:absolute;left:0;top:0;cursor:pointer;right:0;bottom:0;background:rgba(0,0,0,0.4);transition:opacity 300ms cubic-bezier(0.165,0.84,0.44,1);',
                    N.b.className,
                    '{right:50%;bottom:50%;margin-right:-22px;margin-bottom:-22px;background-size:44px 44px;}',
                    P.a.className,
                    ' svg > g > g{fill:',
                    Object(b.f)('white'),
                    ';}'
                ),
                H = Object(b.c)('div', { target: 'e1ggaaxy1' })('mask-image:url(', R.a, ');'),
                A = Object(b.c)('div', { target: 'e1ggaaxy2' })(),
                D = Object(b.c)('div', { target: 'e1ggaaxy3' })(
                    'position:relative;',
                    P.a.className,
                    '{right:8px;top:18px;}',
                    M.a.className,
                    "{padding:20px;padding-bottom:16px;font-weight:400;}.timeline-intercom-video-step-mask{mask-image:url('../images/video-tours-mask.svg');}",
                    N.d.className,
                    '{position:relative;}&:hover{',
                    B.b.className,
                    '{transform:translateY(28px);opacity:0;}',
                    F.className,
                    '{opacity:1;&.intercom-tour-step-video-overlay-hidden{opacity:0;}',
                    v.className,
                    '{transform:translateY(0);opacity:1;}}}',
                    ({ videoComplete: e }) =>
                        e &&
                        Object(b.b)(
                            B.b.className,
                            '{transform:translateY(28px);opacity:0;}',
                            F.className,
                            '{opacity:1;&.intercom-tour-step-video-overlay-hidden{opacity:0;}',
                            v.className,
                            '{transform:translateY(0);opacity:1;}}'
                        ),
                    ' ',
                    ({ placement: e }) =>
                        'right' === e &&
                        Object(b.b)(
                            H.className,
                            '{mask-image:url(',
                            I.a,
                            ');transform:rotate(180deg);}',
                            A.className,
                            '{transform:rotate(180deg);}',
                            v.className,
                            '{left:10px;}',
                            P.a.className,
                            '{right:8px;top:8px;}',
                            B.b.className,
                            '{left:10px;margin-right:10px;}'
                        ),
                    ' ',
                    ({ placement: e }) =>
                        'left' === e &&
                        Object(b.b)(
                            H.className,
                            '{mask-image:url(',
                            I.a,
                            ');}',
                            v.className,
                            '{right:10px;}',
                            P.a.className,
                            '{right:18px;top:8px;}',
                            B.b.className,
                            '{left:-10px;margin-left:10px;}'
                        ),
                    ' ',
                    ({ placement: e }) =>
                        'top' === e &&
                        Object(b.b)(
                            A.className,
                            '{transform:rotate(180deg);}',
                            v.className,
                            '{bottom:10px;}',
                            H.className,
                            '{transform:rotate(180deg);}',
                            P.a.className,
                            '{right:8px;top:8px;}',
                            B.b.className,
                            '{bottom:0px;padding-bottom:10px;}'
                        )
                );
            function q({ muted: e, onClick: t }) {
                return a.a.createElement(N.b, { muted: e, onClick: t });
            }
            var V = o(0);
            const W = Object(V.createSelector)(s.o, s.n, (e, t) => ({
                muted: e,
                userHasInteractedWithVideo: t,
            }));
            var z = Object(i.connect)(W, { changeVideoMuted: n.a })(function({
                block: { url: e, captions: t, thumbnailUrl: o },
                placement: i,
                activeStepIndex: s,
                stepCount: n,
                onClose: c,
                onContinue: p,
                muted: h,
                changeVideoMuted: m,
                userHasInteractedWithVideo: g,
                hasClickedOverlay: b,
                resetOverlayClick: f,
                selector: v,
                progressionBehavior: y,
            }) {
                const [O, C] = Object(r.useState)(!0),
                    [S, x] = Object(r.useState)(),
                    [k, j] = Object(r.useState)(!1),
                    w = () => {
                        h && x(0), m(!h);
                    },
                    _ = l()('intercom-tour-step-video-overlay', {
                        'intercom-tour-step-video-overlay-hidden': k,
                    });
                return a.a.createElement(
                    D,
                    { placement: i, videoComplete: !O },
                    a.a.createElement(
                        H,
                        null,
                        a.a.createElement(
                            A,
                            null,
                            a.a.createElement(E.a, {
                                srcUrl: e,
                                captions: h ? t : void 0,
                                showControls: !1,
                                onComplete: () => {
                                    C(!1);
                                },
                                onReplay: () => C(!0),
                                muted: h,
                                startTime: S,
                                loop: !g && h,
                                thumbnailUrl: o,
                            }),
                            a.a.createElement(
                                F,
                                {
                                    className: _,
                                    onClick: e => {
                                        e.target.classList.contains(
                                            'intercom-tour-step-video-overlay'
                                        ) && w(),
                                            j(!0);
                                    },
                                    onMouseMove: () => j(!1),
                                },
                                a.a.createElement(
                                    P.a,
                                    { onClick: c, 'aria-label': Object(d.e)('close') },
                                    a.a.createElement(u.a, null)
                                ),
                                O && a.a.createElement(q, { muted: h, onClick: w }),
                                n > 1
                                    ? a.a.createElement(tour_step_footer_TourStepFooter, {
                                          activeStepIndex: s,
                                          stepCount: n,
                                          onContinue: p,
                                          selector: v,
                                          hasClickedOverlay: b,
                                          resetOverlayClick: f,
                                          progressionBehavior: y,
                                          isVideoStep: !0,
                                      })
                                    : null
                            )
                        )
                    )
                );
            });
            function L(e, t, o) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = o),
                    e
                );
            }
            class tour_step_TourStep extends r.Component {
                constructor(...e) {
                    super(...e),
                        L(this, 'state', { isScrolled: !1 }),
                        L(this, 'handleScroll', e => {
                            this.setState({ isScrolled: e.target.scrollTop > 0 });
                        }),
                        L(this, 'handleOnCloseClick', () => {
                            this.props.onStop();
                        });
                }
                getClassNames() {
                    return l()({
                        'intercom-tour-step': !0,
                        'intercom-tour-step-pointer': this.isPointer(),
                        'intercom-tour-step-post': !this.isPointer(),
                    });
                }
                calculateWidth() {
                    const { appWindow: e } = this.props,
                        t = e.innerWidth;
                    return Math.min(624, t) - 80;
                }
                isPointer() {
                    return !!this.props.selector;
                }
                getStyles() {
                    if (!this.isPointer()) return { width: `${this.calculateWidth()}px` };
                }
                onLoad() {
                    this.props.onLoad && this.props.onLoad();
                }
                componentDidUpdate(e) {
                    this.props.step.id !== e.step.id && this.onLoad();
                }
                componentDidMount() {
                    this.props.onLoad();
                }
                renderVideoTourStep() {
                    const {
                        onContinue: e,
                        activeStepIndex: t,
                        stepCount: o,
                        placement: i,
                        selector: s,
                        step: { blocks: n, progressionBehavior: r },
                        hasClickedOverlay: c,
                        resetOverlayClick: l,
                    } = this.props;
                    return i
                        ? a.a.createElement(z, {
                              block: n[0],
                              placement: i,
                              activeStepIndex: t,
                              stepCount: o,
                              selector: s,
                              onClose: this.handleOnCloseClick,
                              onContinue: e,
                              hasClickedOverlay: c,
                              resetOverlayClick: l,
                              progressionBehavior: r,
                          })
                        : null;
                }
                renderTourStep() {
                    const {
                        onContinue: e,
                        activeStepIndex: t,
                        stepCount: o,
                        author: i,
                        appName: s,
                        selector: n,
                        step: { blocks: r, progressionBehavior: c, id: l },
                        hasClickedOverlay: g,
                        resetOverlayClick: b,
                    } = this.props;
                    return a.a.createElement(
                        m.a,
                        { appName: s, isReplyStyle: !1, author: i },
                        a.a.createElement(
                            'div',
                            { className: 'intercom-tour-step-header' },
                            a.a.createElement(
                                P.a,
                                {
                                    onClick: this.handleOnCloseClick,
                                    'aria-label': Object(d.e)('close'),
                                },
                                a.a.createElement(u.a, null)
                            )
                        ),
                        a.a.createElement(
                            P.b,
                            { className: 'intercom-tour-step-content' },
                            a.a.createElement(
                                h.a,
                                { onScroll: this.handleScroll },
                                a.a.createElement(p.a, { blocks: r, key: `tour-step-block-${l}` })
                            )
                        ),
                        o > 1
                            ? a.a.createElement(tour_step_footer_TourStepFooter, {
                                  activeStepIndex: t,
                                  stepCount: o,
                                  onContinue: e,
                                  selector: n,
                                  progressionBehavior: c,
                                  hasClickedOverlay: g,
                                  resetOverlayClick: b,
                                  isVideoStep: !1,
                              })
                            : null
                    );
                }
                render() {
                    const { blocks: e } = this.props.step,
                        t = this.state.isScrolled,
                        o = this.isPointer();
                    return a.a.createElement(
                        P.c,
                        {
                            className: this.getClassNames(),
                            style: this.getStyles(),
                            isPointer: o,
                            isPost: !o,
                            scrolled: t,
                        },
                        Object(w.b)(e) ? this.renderVideoTourStep() : this.renderTourStep()
                    );
                }
            }
            var U = o(448),
                G = o(636),
                Y = o(435);
            const $ = Object(b.c)('div', { target: 'ekepq2u0' })(
                'position:absolute;z-index:',
                Object(Y.m)(),
                ';'
            );
            function X({ onClick: e, appWindow: t, targetNode: o }) {
                const { left: i, right: s, top: n, bottom: r } = (function(e, t) {
                        let { left: o, right: i, top: s, bottom: n } = e.getBoundingClientRect();
                        const { pageXOffset: r, pageYOffset: a } = t;
                        return (
                            (o += r),
                            (i += r),
                            (s += a),
                            (n += a),
                            { left: o, right: i, top: s, bottom: n }
                        );
                    })(o, t),
                    c = (function(e) {
                        const { body: t, documentElement: o } = e;
                        return t && o
                            ? Math.max(
                                  t.scrollHeight,
                                  t.offsetHeight,
                                  o.clientHeight,
                                  o.scrollHeight,
                                  o.offsetHeight
                              )
                            : 0;
                    })(t.document);
                return a.a.createElement(
                    a.a.Fragment,
                    null,
                    a.a.createElement($, {
                        style: { top: 0, left: 0, right: 0, height: n },
                        tabIndex: 'none',
                        onClick: e,
                    }),
                    a.a.createElement($, {
                        style: { top: n, left: 0, width: i, height: r - n },
                        tabIndex: 'none',
                        onClick: e,
                    }),
                    a.a.createElement($, {
                        style: { top: n, left: s, right: 0, height: r - n },
                        tabIndex: 'none',
                        onClick: e,
                    }),
                    a.a.createElement($, {
                        style: { top: r, left: 0, right: 0, bottom: 0, height: c - r },
                        tabIndex: 'none',
                        onClick: e,
                    })
                );
            }
            var K = o(440),
                J = { name: '1j1kj5x', styles: 'border:none;box-shadow:none;' };
            const Q = Object(b.c)(K.a, { target: 'e1s9bqu40' })(
                'z-index:',
                Object(Y.m)(1),
                ';border-radius:5px;box-shadow:0 3px 32px 0 rgba(0,0,0,0.14);border:1px solid rgba(0,0,0,0.1);',
                ({ isVideo: e }) => e && J
            );
            var Z = o(1);
            function ee(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t &&
                        (i = i.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        o.push.apply(o, i);
                }
                return o;
            }
            function te(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? ee(o, !0).forEach(function(t) {
                              oe(e, t, o[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
                        : ee(o).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
                          });
                }
                return e;
            }
            function oe(e, t, o) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = o),
                    e
                );
            }
            class tour_TourFrame extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        oe(this, 'state', {
                            width: 0,
                            height: 0,
                            opacity: 0,
                            placement: null,
                            hasClickedOverlay: !1,
                            recordFailureStats: !1,
                        }),
                        oe(this, 'handleDimensionFrameSize', ({ height: e, width: t }) => {
                            this.setState({ width: t, height: e, opacity: 1 });
                        }),
                        oe(this, 'trackingKey', e => {
                            const { isPreviewingTour: t } = this.props;
                            return t ? e + '_preview' : e;
                        }),
                        oe(this, 'handleOnTourContinue', () => {
                            const { onContinue: e, activeStepIndex: t, stepCount: o } = this.props;
                            this.setState({ opacity: 0, recordFailureStats: !1 }), e();
                            const i = t + 1 === o ? 'done' : 'next';
                            Object(Z.e)(
                                'clicked',
                                i,
                                this.trackingKey('tour'),
                                null,
                                this.trackingMetadata()
                            );
                        }),
                        oe(this, 'handleOnTourStop', () => {
                            const { onStop: e } = this.props;
                            Object(Z.e)(
                                'clicked',
                                'stop',
                                this.trackingKey('tour'),
                                null,
                                this.trackingMetadata()
                            ),
                                this.setState({ opacity: 0, recordFailureStats: !1 }),
                                e();
                        }),
                        oe(this, 'handleMissingCssSelector', () => {
                            const { activeStep: e, onFailure: t, isPreviewingTour: o } = this.props;
                            e.selector &&
                                (Object(Z.e)(
                                    'css_selector_match_failed',
                                    this.trackingKey('tour_step'),
                                    'positioner',
                                    null,
                                    te(
                                        {},
                                        this.trackingMetadata(),
                                        {},
                                        this.activeStepSelectorMetadata()
                                    )
                                ),
                                !o && this.state.recordFailureStats && t());
                        }),
                        oe(this, 'handleTourStepLoad', () => {
                            const { stepCount: e, activeStepIndex: t, onComplete: o } = this.props;
                            t + 1 === e && o(),
                                this.setState({ recordFailureStats: !0 }),
                                Object(Z.e)(
                                    'viewed',
                                    this.trackingKey('tour_step'),
                                    'tour',
                                    null,
                                    this.trackingMetadata()
                                );
                        }),
                        oe(this, 'handleOverlayClick', () => {
                            Object(Z.e)(
                                'clicked',
                                this.trackingKey('outside_tour_step'),
                                'tour',
                                null,
                                this.trackingMetadata()
                            ),
                                this.setState({ hasClickedOverlay: !0 });
                        }),
                        oe(this, 'resetOverlayClick', () => {
                            this.setState({ hasClickedOverlay: !1 });
                        }),
                        oe(this, 'handleTargetClick', () => {
                            this.isClickToProgress() && this.handleOnTourContinue();
                        }),
                        oe(this, 'handlePlacementChange', e => {
                            this.setState({ placement: e });
                        }),
                        oe(
                            this,
                            'isClickToProgress',
                            () => 'click' === this.props.activeStep.progressionBehavior
                        ),
                        oe(this, 'needsInteractionWithElement', () => {
                            const { progressionBehavior: e } = this.props.activeStep;
                            return 'click' === e || 'type' === e;
                        }),
                        oe(this, 'getOverlayRenderer', () => {
                            if (this.needsInteractionWithElement())
                                return this.clickToProgressOverlayRenderer;
                        }),
                        oe(this, 'clickToProgressOverlayRenderer', (e, { appWindow: t }, o) =>
                            o
                                ? a.a.createElement(X, { onClick: e, targetNode: o, appWindow: t })
                                : null
                        );
                }
                getChildDimensions() {
                    const { width: e, height: t, opacity: o } = this.state;
                    return { width: e, height: t, opacity: o };
                }
                getFrameDimensions() {
                    const { width: e, height: t } = this.state;
                    return { width: e, height: t };
                }
                trackingMetadata() {
                    const {
                        activeTourId: e,
                        activeStep: t,
                        activeStepIndex: o,
                        stepCount: i,
                    } = this.props;
                    return { tour_id: e, tour_step_id: t.id, active_step_index: o, step_count: i };
                }
                activeStepSelectorMetadata() {
                    const { activeStep: e } = this.props;
                    let t = !1;
                    if (e.selectors.auto_secondary)
                        try {
                            t =
                                null !=
                                window.parent.document.querySelector(e.selectors.auto_secondary);
                        } catch (e) {}
                    return te({}, e.selectors, { secondary_currently_matches: t });
                }
                render() {
                    const {
                            appWindow: e,
                            appName: t,
                            author: o,
                            activeStep: i,
                            stepCount: s,
                            activeStepIndex: n,
                            isAwaitingProgress: r,
                        } = this.props,
                        { placement: c } = this.state,
                        l = Object(w.b)(i.blocks);
                    return a.a.createElement(
                        G.a,
                        {
                            appWindow: e,
                            scrollable: !0,
                            targetSelector: i.selector,
                            childDimensions: this.getChildDimensions(),
                            renderFallback: !r,
                            key: `tour-step-${i.id}`,
                            onMissingSelector: this.handleMissingCssSelector,
                            onOverlayClick: this.handleOverlayClick,
                            onTargetClick: this.handleTargetClick,
                            onPlacementChange: this.handlePlacementChange,
                            hideArrow: l || !i.selector,
                            renderOverlay: this.getOverlayRenderer(),
                            shouldAnimate: this.isClickToProgress(),
                        },
                        a.a.createElement(
                            Q,
                            {
                                style: this.getFrameDimensions(),
                                frameName: 'intercom-tour-frame',
                                className: 'intercom-tour-frame',
                                title: `Intercom live chat ${Object(d.e)('tour')}`,
                                isVideo: l,
                            },
                            () =>
                                a.a.createElement(
                                    U.a,
                                    {
                                        id: 'tour-frame',
                                        key: 'tour-frame',
                                        onChange: this.handleDimensionFrameSize,
                                    },
                                    a.a.createElement(tour_step_TourStep, {
                                        appWindow: e,
                                        appName: t,
                                        author: o,
                                        step: i,
                                        activeStepIndex: n,
                                        stepCount: s,
                                        selector: i.selector,
                                        onLoad: this.handleTourStepLoad,
                                        onContinue: this.handleOnTourContinue,
                                        onStop: this.handleOnTourStop,
                                        placement: c,
                                        hasClickedOverlay: this.state.hasClickedOverlay,
                                        resetOverlayClick: this.resetOverlayClick,
                                    })
                                )
                        )
                    );
                }
            }
            o.d(t, 'mapStateToProps', function() {
                return ie;
            }),
                o.d(t, 'mapDispatchToProps', function() {
                    return se;
                });
            const ie = e => {
                    const t = Object(s.c)(e),
                        o = Object(s.f)(e),
                        i = Object(s.e)(e),
                        n = Object(s.d)(e),
                        r = Object(s.a)(e),
                        a = Object(s.i)(e),
                        c = Object(s.b)(e),
                        l = Object(s.h)(e),
                        p = e.app.name;
                    return {
                        activeTourId: t.id,
                        activeStep: o,
                        activeStepIndex: i,
                        stepCount: n,
                        appName: p,
                        author: r,
                        isPreviewingTour: a,
                        endTourAnimation: c,
                        isAwaitingProgress: l,
                    };
                },
                se = e => ({
                    onContinue: () => {
                        e(Object(n.e)());
                    },
                    onStop: () => {
                        e(Object(n.i)());
                    },
                    onComplete: () => {
                        e(Object(n.c)());
                    },
                    onFailure: () => {
                        e(Object(n.f)());
                    },
                });
            t.default = Object(i.connect)(ie, se)(tour_TourFrame);
        },
        836: function(e, t, o) {
            'use strict';
            o.r(t);
            var i = o(433),
                s = o.n(i),
                n = o(448),
                r = o(436),
                a = o(2),
                c = o(437),
                l = o.n(c),
                p = o(5),
                h = o(450),
                d = o(470),
                m = o(462),
                u = o(549),
                g = o(33),
                b = o(475),
                f = o(559),
                v = o(86),
                y = o(512),
                O = o(611),
                C = o(1);
            function S(e, t, o) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = o),
                    e
                );
            }
            class snippet_Snippet extends i.Component {
                constructor(...e) {
                    super(...e),
                        S(this, 'addSnippetMetric', e => {
                            const { conversation: t } = this.props,
                                o = Object(p.r)(t);
                            Object(C.e)(e, 'snippet', 'in_app', '', {
                                conversation_id: t.id,
                                part_id: o.id,
                                part_type: o.messageType,
                            });
                        }),
                        S(this, 'addClickedMetric', () => {
                            this.addSnippetMetric('clicked');
                        }),
                        S(this, 'handleClick', () => {
                            const { conversation: e, onClick: t } = this.props;
                            this.addClickedMetric(), t(e);
                        });
                }
                componentDidMount() {
                    this.addSnippetMetric('received');
                }
                shouldRenderChatStyle() {
                    const { conversation: e, stack: t } = this.props;
                    return (Object(p.j)(e) || Object(p.i)(e)) && !t;
                }
                getConversationParts() {
                    return this.props.conversation.parts.filter(
                        e => !1 === Object(v.a)(e.partType)
                    );
                }
                renderBody(e) {
                    if (1 === e.length && Object(b.c)(e[0]))
                        return s.a.createElement(f.a, { text: Object(g.d)(e[0]) });
                    const { summaryText: t } = Object(g.e)(this.getConversationParts());
                    return s.a.createElement(h.a, { text: t });
                }
                renderPlainStyle(e, t, o, i) {
                    return s.a.createElement(
                        y.a,
                        null,
                        s.a.createElement(
                            O.f,
                            { className: 'intercom-snippet', onClick: this.handleClick },
                            s.a.createElement(
                                d.a,
                                { appName: o, author: e, isReplyStyle: i },
                                s.a.createElement(O.e, null, this.renderBody(t))
                            )
                        )
                    );
                }
                renderChatStyle(e, t, o, i) {
                    return s.a.createElement(
                        y.a,
                        null,
                        s.a.createElement(
                            O.d,
                            { className: 'intercom-chat-snippet', onClick: this.handleClick },
                            s.a.createElement(O.a, null, s.a.createElement(m.a, { author: e })),
                            s.a.createElement(
                                O.c,
                                null,
                                s.a.createElement(u.a, { author: e, appName: o, isReplyStyle: i }),
                                s.a.createElement(O.b, null, this.renderBody(t))
                            )
                        )
                    );
                }
                render() {
                    const {
                            appName: e,
                            conversation: { userParticipated: t },
                        } = this.props,
                        o = Object(p.d)(this.props.conversation);
                    if (!o) return null;
                    const { author: i, body: s } = o;
                    return this.shouldRenderChatStyle()
                        ? this.renderChatStyle(i, s, e, t)
                        : this.renderPlainStyle(i, s, e, t);
                }
            }
            (snippet_Snippet.defaultProps = { stack: !1 }),
                (snippet_Snippet.propTypes = {
                    conversation: l.a.shape({
                        id: l.a.any.isRequired,
                        parts: l.a.arrayOf(
                            l.a.shape({ author: l.a.object.isRequired, body: l.a.array.isRequired })
                        ).isRequired,
                        userParticipated: l.a.bool.isRequired,
                    }).isRequired,
                    appName: l.a.string.isRequired,
                    stack: l.a.bool.isRequired,
                    onClick: l.a.func.isRequired,
                });
            var x = o(434),
                k = o(467);
            const j = 'cubic-bezier(0.165, 0.84, 0.44, 1)',
                w = Object(x.d)(
                    '0%{opacity:0;transform:translateY(20px);}30%{opacity:1;}100%{opacity:1;transform:translateY(0);}'
                ),
                E = Object(x.c)('div', { target: 'e1d2cwfh0' })('padding:0 ', 5, 'px;');
            var P = { name: '1fcc2f6', styles: 'box-shadow:0 2px 8px 0 rgba(35,47,53,0.2);' };
            const _ = Object(x.c)('div', { target: 'e1d2cwfh1' })(
                    'position:relative;height:',
                    Object(x.e)('height'),
                    'px;width:',
                    340,
                    'px;max-width:100%;padding-bottom:',
                    10,
                    'px;',
                    k.b.className,
                    '{height:',
                    120,
                    'px;',
                    ({ theme: e }) => e.isMobile && P,
                    ';}',
                    y.a.className,
                    '{animation:',
                    w,
                    ' 0.25s ',
                    j,
                    ';}'
                ),
                R = Object(x.c)('div', { target: 'e1d2cwfh2' })(
                    'box-sizing:border-box;position:absolute;bottom:',
                    10,
                    'px;width:100%;backface-visibility:hidden;transform-origin:top center;transition:transform ',
                    300,
                    'ms ',
                    j,
                    ';',
                    ({ position: e }) =>
                        2 === e &&
                        Object(x.b)('transform:translate3d(0,-', 7, 'px,0) scale(0.95);'),
                    ' ',
                    ({ position: e }) =>
                        3 === e &&
                        Object(x.b)('transform:translate3d(0,-', 14, 'px,0) scale(0.9);'),
                    ' ',
                    ({ position: e, expanded: t }) =>
                        2 === e &&
                        t &&
                        Object(x.b)(
                            'transition-delay:150ms;transform:translate3d(0,-',
                            130,
                            'px,0) scale(1);'
                        ),
                    ' ',
                    ({ position: e, expanded: t }) =>
                        3 === e &&
                        t &&
                        Object(x.b)(
                            'transition-delay:150ms;transform:translate3d(0,-',
                            260,
                            'px,0) scale(1);'
                        )
                ),
                T = Object(x.c)('div', { target: 'e1d2cwfh3' })(
                    'padding-top:',
                    10,
                    "px;:after{content:'';clear:both;display:table;}",
                    y.b.className,
                    '{transition:opacity ',
                    200,
                    'ms ',
                    j,
                    ';',
                    ({ expandAnimationInProgress: e }) =>
                        e && Object(x.b)('transition-delay:', 300, 'ms;'),
                    '}'
                );
            function I(e) {
                const {
                    conversation: t,
                    appName: o,
                    position: i,
                    expanded: n,
                    handleOnClick: r,
                    stack: a,
                } = e;
                return s.a.createElement(
                    R,
                    { position: i, expanded: n, key: t.id },
                    s.a.createElement(snippet_Snippet, {
                        conversation: t,
                        appName: o,
                        onClick: r,
                        stack: a,
                    })
                );
            }
            var N = { name: '1v8x7dw', styles: 'overflow:auto;' };
            const B = Object(x.c)('div', { target: 'e106pw6f0' })(
                'max-height:',
                Object(x.e)('maxHeight'),
                'px;',
                ({ scroll: e }) => e && N
            );
            var M = o(20),
                F = o(456);
            let H, A;
            function D(e) {
                const {
                        frameNode: t,
                        children: o,
                        keepScrollToBottom: n,
                        scrollToBottomWithAnimation: r,
                    } = e,
                    a = ((e, t) => {
                        if (t.privilegeSeparationEnabled) {
                            let e =
                                t.pageHeight - t.verticalPaddingPx + t.borderlessIframePaddingPx;
                            return t.isLauncherEnabled && (e -= t.launcherOffsetBottomPaddingPx), e;
                        }
                        return e.offsetTop + e.clientHeight;
                    })(t, Object(i.useContext)(F.ThemeContext)),
                    c = Object(i.useRef)(null),
                    [l, p] = Object(i.useState)(!1);
                return (
                    Object(i.useEffect)(() => {
                        const e = () => {
                            c.current && Object(M.z)(c.current),
                                (H = window.parent.requestAnimationFrame(e));
                        };
                        return n && c.current && e(), () => window.parent.cancelAnimationFrame(H);
                    }, [n]),
                    Object(i.useEffect)(() => {
                        r && c.current && Object(M.e)(c.current);
                    }, [r]),
                    Object(i.useEffect)(
                        () => (
                            (A = setTimeout(() => p(!0), 300)),
                            () => {
                                clearTimeout(A), window.parent.cancelAnimationFrame(H);
                            }
                        ),
                        []
                    ),
                    s.a.createElement(B, { maxHeight: a, ref: c, scroll: l }, o)
                );
            }
            var q = o(7);
            const V = (e, t) => e - t;
            let W, z, L;
            function U(e) {
                const {
                        conversations: t,
                        appName: o,
                        handleOnClick: n,
                        children: r,
                        frameNode: a,
                    } = e,
                    c = t.filter(e => !!Object(p.d)(e)),
                    l = 130 * c.length,
                    h = 130 + 7 * (c.length - 1),
                    d = Object(q.i)(),
                    [m, u] = Object(i.useState)(!1),
                    [g, b] = Object(i.useState)(h),
                    [f, v] = Object(i.useState)(!1),
                    y = e => {
                        const t = c.map(e => e.id);
                        u(e),
                            (e => {
                                Object(C.e)(
                                    'hovered',
                                    'message',
                                    'in_app',
                                    'from_grouped_message',
                                    { conversation_ids: e.join(',') }
                                );
                            })(t),
                            e
                                ? (clearTimeout(L),
                                  v(!0),
                                  (W = setTimeout(() => b(l), 1)),
                                  (z = setTimeout(() => v(!1), 300)))
                                : (L = setTimeout(() => b(h), 300));
                    };
                return (
                    Object(i.useEffect)(
                        () => () => {
                            clearTimeout(W), clearTimeout(z), clearTimeout(L);
                        },
                        []
                    ),
                    s.a.createElement(
                        D,
                        { frameNode: a, keepScrollToBottom: f, scrollToBottomWithAnimation: !m },
                        s.a.createElement(
                            E,
                            {
                                onMouseEnter: () => !d && y(!0),
                                onMouseLeave: () => !d && y(!1),
                                onFocus: () => !d && y(!0),
                                'aria-expanded': m,
                            },
                            s.a.createElement(T, { expandAnimationInProgress: f }, r),
                            s.a.createElement(
                                _,
                                { height: g },
                                c.map((e, t) =>
                                    s.a.createElement(I, {
                                        key: t,
                                        conversation: e,
                                        appName: o,
                                        position: V(c.length, t),
                                        expanded: m,
                                        handleOnClick: n,
                                        stack: c.length > 1,
                                    })
                                )
                            )
                        )
                    )
                );
            }
            var G = o(29),
                Y = o(468),
                $ = o(471),
                X = o(478);
            class notifications_Notifications extends i.Component {
                constructor(...e) {
                    var t, o, i;
                    super(...e),
                        (i = () => {
                            const { onNotificationDismiss: e, conversations: t } = this.props,
                                o = t.map(e => e.id);
                            this.addDismissMetrics(o), e(o);
                            const i = Object(X.f)();
                            i && i.focus();
                        }),
                        (o = 'handleDismiss') in (t = this)
                            ? Object.defineProperty(t, o, {
                                  value: i,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                              })
                            : (t[o] = i);
                }
                componentDidMount() {
                    const { onDisplayNotifications: e } = this.props,
                        t = this.getSortedConversations();
                    (this.focusTrap = new $.a({ document: this.props.frameWindow.document })), e(t);
                }
                componentWillUnmount() {
                    this.focusTrap && this.focusTrap.restore();
                }
                addDismissMetrics(e) {
                    e.forEach(e => {
                        Object(C.e)('closed', 'message', 'in_app', 'from_snippet', {
                            conversation_id: e,
                        });
                    });
                }
                getSortedConversations() {
                    return this.props.conversations
                        .slice(-3)
                        .sort((e, t) => e.lastPartCreatedAt > t.lastPartCreatedAt);
                }
                renderDismissButton() {
                    const { conversations: e } = this.props,
                        t = 1 === e.length ? Object(G.e)('clear') : Object(G.e)('clear_all');
                    return s.a.createElement(
                        y.b,
                        { onClick: this.handleDismiss, visibleDismissButton: Object(q.i)() },
                        t,
                        s.a.createElement(y.c, null)
                    );
                }
                renderConversationsGrouped() {
                    const { appName: e, onNotificationClick: t, frameNode: o } = this.props,
                        i = this.getSortedConversations();
                    return s.a.createElement(
                        U,
                        { conversations: i, appName: e, handleOnClick: t, frameNode: o },
                        i.length > 0 ? this.renderDismissButton() : null
                    );
                }
                render() {
                    const { frameWindow: e } = this.props;
                    return s.a.createElement(
                        y.d,
                        { className: 'intercom-notifications' },
                        this.renderConversationsGrouped(),
                        s.a.createElement(Y.a, { appWindow: e })
                    );
                }
            }
            notifications_Notifications.propTypes = {
                appName: l.a.string.isRequired,
                frameNode: l.a.any.isRequired,
                frameWindow: l.a.any.isRequired,
                conversations: l.a.array.isRequired,
                onNotificationClick: l.a.func.isRequired,
                onNotificationDismiss: l.a.func.isRequired,
                onDisplayNotifications: l.a.func.isRequired,
            };
            var K = o(4),
                J = o(8),
                Q = o(56),
                Z = o(50),
                ee = o(35);
            var te = Object(r.connect)(
                    e => {
                        const {
                            app: { name: t },
                        } = e;
                        return { appName: t, conversations: Object(ee.a)(e) };
                    },
                    e => ({
                        onNotificationClick: t => {
                            const { id: o, parts: i } = t,
                                s = i[i.length - 1],
                                { messageType: n } = s;
                            [void 0, 'chat', 'link', 'notificationChannels', 'video'].indexOf(n) >
                            -1
                                ? (e(Object(J.f)(o)), e(Object(K.l)(a.b, o)))
                                : e(Object(Q.b)(o, s.id));
                        },
                        onNotificationDismiss: t => {
                            e(Object(Z.b)(a.b, t));
                        },
                        onDisplayNotifications: t => {
                            t.forEach(t => {
                                const { id: o, parts: i } = t,
                                    s = i[i.length - 1];
                                e(Object(Q.c)(o, s.id));
                            });
                        },
                    })
                )(notifications_Notifications),
                oe = o(440),
                ie = o(435);
            const se = Object(x.c)(oe.a, { target: 'e1gfsz3r0' })(
                'position:fixed;z-index:',
                Object(ie.m)(),
                ';',
                ({ theme: e }) =>
                    Object(x.b)(
                        'bottom:',
                        Object(ie.k)({ theme: e }) - 10,
                        'px;right:',
                        e.horizontalPaddingPx - 5,
                        'px;'
                    ),
                ' ',
                ({ width: e, height: t }) =>
                    Object(x.b)('width:', e + 10, 'px;height:', t + 5, 'px;'),
                ' ',
                ({ theme: e }) =>
                    e.isLeftAlign &&
                    Object(x.b)('left:', e.horizontalPaddingPx - 5, 'px;right:auto;')
            );
            function ne(e, t, o) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = o),
                    e
                );
            }
            o.d(t, 'default', function() {
                return notifications_NotificationsFrame;
            });
            class notifications_NotificationsFrame extends i.Component {
                constructor(...e) {
                    super(...e),
                        ne(this, 'state', { width: 0, height: 0 }),
                        ne(this, 'handleMeasurementChange', ({ width: e, height: t }) => {
                            this.setState({ width: e, height: t });
                        });
                }
                render() {
                    return s.a.createElement(
                        se,
                        {
                            frameName: 'intercom-notifications-frame',
                            title: `Intercom live chat ${Object(G.e)('message')}`,
                            width: this.state.width,
                            height: this.state.height,
                        },
                        (e, t) =>
                            s.a.createElement(
                                n.a,
                                { onChange: this.handleMeasurementChange },
                                s.a.createElement(te, { frameWindow: e, frameNode: t })
                            )
                    );
                }
            }
        },
        843: function(e, t, o) {
            'use strict';
            o.r(t);
            var i = o(436),
                s = o(437),
                n = o.n(s),
                r = o(433),
                a = o.n(r),
                c = o(442),
                l = o(610);
            class message_container_MessageContainer extends r.Component {
                componentDidMount() {
                    const { isFetching: e, isFetched: t, onFetch: o } = this.props;
                    e || t || o();
                }
                render() {
                    const { props: e } = this;
                    return a.a.createElement(
                        c.TransitionGroup,
                        null,
                        e.isFetched
                            ? a.a.createElement(
                                  c.CSSTransition,
                                  {
                                      classNames: 'intercom-message',
                                      timeout: { enter: 200, exit: 200 },
                                  },
                                  a.a.createElement(l.a, e)
                              )
                            : null
                    );
                }
            }
            message_container_MessageContainer.propTypes = {
                isFetching: n.a.bool.isRequired,
                isFetched: n.a.bool.isRequired,
                onFetch: n.a.func.isRequired,
            };
            var p = o(2),
                h = o(4),
                d = o(54),
                m = o(5);
            o.d(t, 'mapStateToProps', function() {
                return u;
            }),
                o.d(t, 'mapDispatchToProps', function() {
                    return g;
                }),
                o.d(t, 'mergeProps', function() {
                    return b;
                });
            const u = e => {
                    const t = Object(d.a)(e)[0],
                        { isFetching: o } = t;
                    return { isFetching: o, isFetched: !Object(m.m)(t), conversation: t };
                },
                g = e => ({
                    onFetch: t => {
                        e(Object(h.l)(p.b, t));
                    },
                }),
                b = (e, t, o) =>
                    Object.assign({}, e, t, o, {
                        onFetch: () => {
                            t.onFetch(e.conversation.id);
                        },
                    });
            t.default = Object(i.connect)(u, g, b)(message_container_MessageContainer);
        },
        844: function(e, t, o) {
            'use strict';
            o.r(t);
            var i = o(436),
                s = o(632),
                n = o(610),
                r = o(9),
                a = o(7),
                c = o(2),
                l = o(8);
            var p = o(4),
                h = o(203),
                d = o(152);
            o.d(t, 'mapStateToProps', function() {
                return m;
            });
            const m = e => {
                const { isPresent: t } = e.user,
                    {
                        name: o,
                        userConversationAttachmentsEnabled: i,
                        userConversationGifsEnabled: s,
                    } = e.app,
                    n = Object(d.a)(e),
                    c = n[0],
                    l = a.a.isMobileBrowser(),
                    p = n[0].parts[0],
                    h = Object(r.i)(e),
                    { upfrontEmailCollectorShowing: m } = e.app.upfrontEmailCollection;
                return {
                    appName: o,
                    conversation: c,
                    part: p,
                    userIsPresent: t,
                    isMobile: l,
                    showUploadButton: i,
                    showGifButton: s,
                    shouldShowUpfrontEmailComposer: h,
                    isUpfrontEmailComposerShowing: m,
                };
            };
            t.default = Object(i.connect)(
                m,
                e => ({
                    onOpen: (t, o) => {
                        e(
                            ((e, t) => ({
                                type: 'OPEN_POINTER_MESSAGE',
                                conversationId: e,
                                partId: t,
                            }))(t, o)
                        );
                    },
                    onClose: t => {
                        e({ type: 'CLOSE_POINTER_MESSAGE' }), e(Object(h.a)(t));
                    },
                    onConversationRead: t => {
                        e(Object(p.n)(c.b, t));
                    },
                    onComposerOrFormInputClick: t => {
                        e({ type: 'CLOSE_POINTER_MESSAGE' }),
                            e(Object(h.a)(t)),
                            e(Object(l.f)(t)),
                            e(Object(p.l)(c.b, t));
                    },
                    onReactionSelect: (t, o) => {
                        e(Object(p.k)(c.b, t, o, !1));
                    },
                }),
                n.b
            )(s.a);
        },
    },
]);
