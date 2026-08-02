(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    45: (e, t, n) => {
      (Promise.resolve().then(n.t.bind(n, 762, 23)),
        Promise.resolve().then(n.bind(n, 7143)),
        Promise.resolve().then(n.bind(n, 1343)),
        Promise.resolve().then(n.t.bind(n, 1548, 23)));
    },
    63: (e, t, n) => {
      "use strict";
      var r = n(7260);
      (n.o(r, "usePathname") &&
        n.d(t, {
          usePathname: function () {
            return r.usePathname;
          },
        }),
        n.o(r, "useRouter") &&
          n.d(t, {
            useRouter: function () {
              return r.useRouter;
            },
          }),
        n.o(r, "useSearchParams") &&
          n.d(t, {
            useSearchParams: function () {
              return r.useSearchParams;
            },
          }));
    },
    80: (e, t, n) => {
      "use strict";
      n.d(t, {
        Am: () => f,
        Ce: () => m,
        GS: () => p,
        He: () => o,
        Hh: () => c,
        MM: () => _,
        ZK: () => s,
        oe: () => l,
        ss: () => v,
        uJ: () => g,
        yN: () => d,
        y_: () => u,
      });
      let r = "G-BMG6QKEJN0";
      function a() {
        return "function" == typeof window.gtag && !!r;
      }
      function i(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        a() && window.gtag("event", e, t);
      }
      function l(e) {
        a() && window.gtag("config", r, { page_path: e });
      }
      function u(e) {
        i("demo_modal_open", {
          event_category: "conversion_funnel",
          source: e,
        });
      }
      function o() {
        i("demo_form_start", { event_category: "conversion_funnel", step: 1 });
      }
      function s(e) {
        i("demo_form_submit", {
          event_category: "conversion_funnel",
          step: 2,
          subject: e.subject,
          student_class: e.studentClass,
          plan: e.plan || "none",
        });
      }
      function c(e) {
        (i("demo_booking_complete", {
          event_category: "conversion",
          event_label: "book_free_demo",
          subject: e.subject,
          student_class: e.studentClass,
          plan: e.plan || "none",
        }),
          i("generate_lead", {
            event_category: "lead",
            lead_type: "demo_booking",
            subject: e.subject,
          }));
      }
      function d() {
        i("tutor_form_start", { event_category: "conversion_funnel", step: 1 });
      }
      function f(e) {
        i("tutor_form_submit", {
          event_category: "conversion_funnel",
          step: 2,
          subjects: e.subjects,
          area: e.area,
        });
      }
      function _(e) {
        (i("tutor_registration_complete", {
          event_category: "conversion",
          event_label: "tutor_registration",
          subjects: e.subjects,
          area: e.area,
        }),
          i("generate_lead", {
            event_category: "lead",
            lead_type: "tutor_registration",
            subjects: e.subjects,
          }));
      }
      function g(e) {
        i("whatsapp_click", { event_category: "inquiry", source: e });
      }
      function v(e) {
        i("subject_card_click", { event_category: "engagement", subject: e });
      }
      function p(e) {
        i("pricing_card_click", {
          event_category: "conversion_funnel",
          plan: e,
        });
      }
      function m(e) {
        var t, n;
        a() &&
          window.gtag("event", e.name, {
            event_category: "web_vitals",
            value: Math.round("CLS" === e.name ? 1e3 * e.value : e.value),
            metric_rating: null != (t = e.rating) ? t : "unknown",
            metric_id: null != (n = e.id) ? n : "",
            non_interaction: !0,
          });
      }
    },
    762: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Sans Fallback'",
          fontStyle: "normal",
        },
        className: "__className_b6296e",
        variable: "__variable_b6296e",
      };
    },
    1343: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => i });
      var r = n(2115),
        a = n(80);
      function i() {
        return (
          (0, r.useEffect)(() => {
            var e, t;
            null == (t = n.e(412).then(n.bind(n, 3412))) ||
              null ==
                (e = t.then((e) => {
                  let {
                    onCLS: t,
                    onFID: n,
                    onFCP: r,
                    onLCP: i,
                    onTTFB: l,
                    onINP: u,
                  } = e;
                  (t((e) =>
                    (0, a.Ce)({
                      name: "CLS",
                      value: null == e ? void 0 : e.value,
                      rating: null == e ? void 0 : e.rating,
                      id: null == e ? void 0 : e.id,
                    }),
                  ),
                    n((e) =>
                      (0, a.Ce)({
                        name: "FID",
                        value: null == e ? void 0 : e.value,
                        rating: null == e ? void 0 : e.rating,
                        id: null == e ? void 0 : e.id,
                      }),
                    ),
                    r((e) =>
                      (0, a.Ce)({
                        name: "FCP",
                        value: null == e ? void 0 : e.value,
                        rating: null == e ? void 0 : e.rating,
                        id: null == e ? void 0 : e.id,
                      }),
                    ),
                    i((e) =>
                      (0, a.Ce)({
                        name: "LCP",
                        value: null == e ? void 0 : e.value,
                        rating: null == e ? void 0 : e.rating,
                        id: null == e ? void 0 : e.id,
                      }),
                    ),
                    l((e) =>
                      (0, a.Ce)({
                        name: "TTFB",
                        value: null == e ? void 0 : e.value,
                        rating: null == e ? void 0 : e.rating,
                        id: null == e ? void 0 : e.id,
                      }),
                    ),
                    u((e) =>
                      (0, a.Ce)({
                        name: "INP",
                        value: null == e ? void 0 : e.value,
                        rating: null == e ? void 0 : e.rating,
                        id: null == e ? void 0 : e.id,
                      }),
                    ));
                })) ||
              e.catch(() => {});
          }, []),
          null
        );
      }
    },
    1402: (e, t, n) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return b;
          },
          handleClientScriptLoad: function () {
            return v;
          },
          initScriptLoader: function () {
            return p;
          },
        }));
      let r = n(8140),
        a = n(9417),
        i = n(5155),
        l = r._(n(7650)),
        u = a._(n(2115)),
        o = n(2073),
        s = n(4681),
        c = n(4853),
        d = n(9001),
        f = new Map(),
        _ = new Set(),
        g = (e) => {
          let {
              src: t,
              id: n,
              onLoad: r = () => {},
              onReady: a = null,
              dangerouslySetInnerHTML: i,
              children: u = "",
              strategy: o = "afterInteractive",
              onError: c,
              stylesheets: d,
            } = e,
            g = n || t;
          if (g && _.has(g)) return;
          if (f.has(t)) {
            (_.add(g), f.get(t).then(r, c));
            return;
          }
          let v = () => {
              (a && a(), _.add(g));
            },
            p = document.createElement("script"),
            m = new Promise((e, t) => {
              (p.addEventListener("load", function (t) {
                (e(), r && r.call(this, t), v());
              }),
                p.addEventListener("error", function (e) {
                  t(e);
                }));
            }).catch(function (e) {
              c && c(e);
            });
          (i
            ? ((p.innerHTML = i.__html || ""), v())
            : u
              ? ((p.textContent =
                  "string" == typeof u
                    ? u
                    : Array.isArray(u)
                      ? u.join("")
                      : ""),
                v())
              : t && ((p.src = t), f.set(t, m)),
            (0, s.setAttributesFromProps)(p, e),
            "worker" === o && p.setAttribute("type", "text/partytown"),
            p.setAttribute("data-nscript", o),
            d &&
              ((e) => {
                if (l.default.preinit)
                  return e.forEach((e) => {
                    l.default.preinit(e, { as: "style" });
                  });
                {
                  let t = document.head;
                  e.forEach((e) => {
                    let n = document.createElement("link");
                    ((n.type = "text/css"),
                      (n.rel = "stylesheet"),
                      (n.href = e),
                      t.appendChild(n));
                  });
                }
              })(d),
            document.body.appendChild(p));
        };
      function v(e) {
        let { strategy: t = "afterInteractive" } = e;
        "lazyOnload" === t
          ? window.addEventListener("load", () => {
              (0, c.requestIdleCallback)(() => g(e));
            })
          : g(e);
      }
      function p(e) {
        (e.forEach(v),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ].forEach((e) => {
            let t = e.id || e.getAttribute("src");
            _.add(t);
          }));
      }
      function m(e) {
        let {
            id: t,
            src: n = "",
            onLoad: r = () => {},
            onReady: a = null,
            strategy: s = "afterInteractive",
            onError: f,
            stylesheets: v,
            ...p
          } = e,
          {
            updateScripts: m,
            scripts: b,
            getIsSsr: y,
            appDir: h,
            nonce: w,
          } = (0, u.useContext)(o.HeadManagerContext);
        w = p.nonce || w;
        let j = (0, u.useRef)(!1);
        (0, u.useEffect)(() => {
          let e = t || n;
          j.current || (a && e && _.has(e) && a(), (j.current = !0));
        }, [a, t, n]);
        let S = (0, u.useRef)(!1);
        if (
          ((0, u.useEffect)(() => {
            if (!S.current) {
              if ("afterInteractive" === s) g(e);
              else
                "lazyOnload" === s &&
                  ("complete" === document.readyState
                    ? (0, c.requestIdleCallback)(() => g(e))
                    : window.addEventListener("load", () => {
                        (0, c.requestIdleCallback)(() => g(e));
                      }));
              S.current = !0;
            }
          }, [e, s]),
          ("beforeInteractive" === s || "worker" === s) &&
            (m
              ? ((b[s] = (b[s] || []).concat([
                  {
                    id: t,
                    src: n,
                    onLoad: r,
                    onReady: a,
                    onError: f,
                    ...p,
                    nonce: w,
                  },
                ])),
                m(b))
              : y && y()
                ? _.add(t || n)
                : y && !y() && g({ ...e, nonce: w })),
          h)
        ) {
          if (
            (v &&
              v.forEach((e) => {
                l.default.preinit(e, { as: "style" });
              }),
            "beforeInteractive" === s)
          )
            if (!n)
              return (
                p.dangerouslySetInnerHTML &&
                  ((p.children = p.dangerouslySetInnerHTML.__html),
                  delete p.dangerouslySetInnerHTML),
                (0, i.jsx)("script", {
                  nonce: w,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      (0, d.htmlEscapeJsonString)(
                        JSON.stringify([0, { ...p, id: t }]),
                      ) +
                      ")",
                  },
                })
              );
            else
              return (
                l.default.preload(
                  n,
                  p.integrity
                    ? {
                        as: "script",
                        integrity: p.integrity,
                        nonce: w,
                        crossOrigin: p.crossOrigin,
                      }
                    : { as: "script", nonce: w, crossOrigin: p.crossOrigin },
                ),
                (0, i.jsx)("script", {
                  nonce: w,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      (0, d.htmlEscapeJsonString)(
                        JSON.stringify([n, { ...p, id: t }]),
                      ) +
                      ")",
                  },
                })
              );
          "afterInteractive" === s &&
            n &&
            l.default.preload(
              n,
              p.integrity
                ? {
                    as: "script",
                    integrity: p.integrity,
                    nonce: w,
                    crossOrigin: p.crossOrigin,
                  }
                : { as: "script", nonce: w, crossOrigin: p.crossOrigin },
            );
        }
        return null;
      }
      Object.defineProperty(m, "__nextScript", { value: !0 });
      let b = m;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1548: () => {},
    4853: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          cancelIdleCallback: function () {
            return r;
          },
          requestIdleCallback: function () {
            return n;
          },
        }));
      let n =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        r =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7143: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => d });
      var r = n(5155),
        a = n(1402),
        i = n.n(a),
        l = n(2115),
        u = n(63),
        o = n(80);
      let s = "G-BMG6QKEJN0";
      function c() {
        let e = (0, u.usePathname)(),
          t = (0, u.useSearchParams)();
        return (
          (0, l.useEffect)(() => {
            if (!s) return;
            let n =
              e +
              ((null == t ? void 0 : t.toString())
                ? "?".concat(null == t ? void 0 : t.toString())
                : "");
            (0, o.oe)(n);
          }, [e, t]),
          null
        );
      }
      function d() {
        return s
          ? (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(i(), {
                  src: "https://www.googletagmanager.com/gtag/js?id=".concat(s),
                  strategy: "afterInteractive",
                }),
                (0, r.jsx)(i(), {
                  id: "ga4-init",
                  strategy: "afterInteractive",
                  children:
                    "\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n          gtag('config', '".concat(
                      s,
                      "', {\n            page_path: window.location.pathname,\n            send_page_view: true\n          });\n        ",
                    ),
                }),
                (0, r.jsx)(l.Suspense, {
                  fallback: null,
                  children: (0, r.jsx)(c, {}),
                }),
              ],
            })
          : null;
      }
    },
    9001: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          ESCAPE_REGEX: function () {
            return r;
          },
          htmlEscapeAttributeString: function () {
            return u;
          },
          htmlEscapeJsonString: function () {
            return l;
          },
        }));
      let n = {
          "&": "\\u0026",
          ">": "\\u003e",
          "<": "\\u003c",
          "\u2028": "\\u2028",
          "\u2029": "\\u2029",
        },
        r = /[&><\u2028\u2029]/g,
        a = {
          "&": "&amp;",
          '"': "&quot;",
          "'": "&#39;",
          "<": "&lt;",
          ">": "&gt;",
        },
        i = /[&"'<>]/g;
      function l(e) {
        return e.replace(r, (e) => n[e]);
      }
      function u(e) {
        return e.replace(i, (e) => a[e]);
      }
    },
  },
  (e) => {
    (e.O(0, [608, 441, 255, 358], () => e((e.s = 45))), (_N_E = e.O()));
  },
]);
//# sourceMappingURL=layout-0cfa1bb152a83c78.js.map
