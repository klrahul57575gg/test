"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [323],
  {
    80: (e, t, s) => {
      s.d(t, {
        Am: () => u,
        Ce: () => g,
        GS: () => f,
        He: () => i,
        Hh: () => d,
        MM: () => x,
        ZK: () => c,
        oe: () => o,
        ss: () => p,
        uJ: () => h,
        yN: () => m,
        y_: () => l,
      });
      let a = "G-BMG6QKEJN0";
      function n() {
        return "function" == typeof window.gtag && !!a;
      }
      function r(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        n() && window.gtag("event", e, t);
      }
      function o(e) {
        n() && window.gtag("config", a, { page_path: e });
      }
      function l(e) {
        r("demo_modal_open", {
          event_category: "conversion_funnel",
          source: e,
        });
      }
      function i() {
        r("demo_form_start", { event_category: "conversion_funnel", step: 1 });
      }
      function c(e) {
        r("demo_form_submit", {
          event_category: "conversion_funnel",
          step: 2,
          subject: e.subject,
          student_class: e.studentClass,
          plan: e.plan || "none",
        });
      }
      function d(e) {
        (r("demo_booking_complete", {
          event_category: "conversion",
          event_label: "book_free_demo",
          subject: e.subject,
          student_class: e.studentClass,
          plan: e.plan || "none",
        }),
          r("generate_lead", {
            event_category: "lead",
            lead_type: "demo_booking",
            subject: e.subject,
          }));
      }
      function m() {
        r("tutor_form_start", { event_category: "conversion_funnel", step: 1 });
      }
      function u(e) {
        r("tutor_form_submit", {
          event_category: "conversion_funnel",
          step: 2,
          subjects: e.subjects,
          area: e.area,
        });
      }
      function x(e) {
        (r("tutor_registration_complete", {
          event_category: "conversion",
          event_label: "tutor_registration",
          subjects: e.subjects,
          area: e.area,
        }),
          r("generate_lead", {
            event_category: "lead",
            lead_type: "tutor_registration",
            subjects: e.subjects,
          }));
      }
      function h(e) {
        r("whatsapp_click", { event_category: "inquiry", source: e });
      }
      function p(e) {
        r("subject_card_click", { event_category: "engagement", subject: e });
      }
      function f(e) {
        r("pricing_card_click", {
          event_category: "conversion_funnel",
          plan: e,
        });
      }
      function g(e) {
        var t, s;
        n() &&
          window.gtag("event", e.name, {
            event_category: "web_vitals",
            value: Math.round("CLS" === e.name ? 1e3 * e.value : e.value),
            metric_rating: null != (t = e.rating) ? t : "unknown",
            metric_id: null != (s = e.id) ? s : "",
            non_interaction: !0,
          });
      }
    },
    856: (e, t, s) => {
      s.d(t, { A: () => l });
      var a = s(5155);
      s(2115);
      var n = s(5839),
        r = s(6312),
        o = s(8443);
      let l = function (e) {
        let {
            name: t,
            variant: s = "outline",
            size: l = 24,
            className: i = "",
            onClick: c,
            disabled: d = !1,
            ...m
          } = e,
          u = ("solid" === s ? r : n)[t];
        return u
          ? (0, a.jsx)(u, {
              width: l,
              height: l,
              className: ""
                .concat(
                  d
                    ? "opacity-50 cursor-not-allowed"
                    : c
                      ? "cursor-pointer hover:opacity-80"
                      : "",
                  " ",
                )
                .concat(i),
              onClick: d ? void 0 : c,
              ...m,
            })
          : (0, a.jsx)(o.A, {
              width: l,
              height: l,
              className: "text-gray-400 "
                .concat(d ? "opacity-50 cursor-not-allowed" : "", " ")
                .concat(i),
              onClick: d ? void 0 : c,
              ...m,
            });
      };
    },
    1398: (e, t, s) => {
      s.d(t, { A: () => m });
      var a = s(5155),
        n = s(2115),
        r = s(2619),
        o = s.n(r),
        l = s(3830),
        i = s(5904),
        c = s(856),
        d = s(80);
      function m(e) {
        let { onBookDemo: t } = e,
          [s, r] = (0, n.useState)(!1),
          [m, u] = (0, n.useState)(!1);
        ((0, n.useEffect)(() => {
          let e = () => r(window.scrollY > 60);
          return (
            window.addEventListener("scroll", e, { passive: !0 }),
            () => window.removeEventListener("scroll", e)
          );
        }, []),
          (0, n.useEffect)(
            () => (
              m
                ? (document.body.style.overflow = "hidden")
                : (document.body.style.overflow = ""),
              () => {
                document.body.style.overflow = "";
              }
            ),
            [m],
          ));
        let x = () => u(!1);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("nav", {
              className:
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ".concat(
                  s ? "py-2 glass shadow-nav" : "py-4 bg-transparent",
                ),
              children: (0, a.jsxs)("div", {
                className:
                  "max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between",
                children: [
                  (0, a.jsxs)(o(), {
                    href: "index.html",
                    className: "flex items-center gap-2 group",
                    children: [
                      (0, a.jsx)(l.A, {
                        size: 40,
                        src: "/assets/images/IMG-20260716-WA0000-1784146896428.jpg",
                        className: "rounded-xl object-cover",
                      }),
                      (0, a.jsxs)("span", {
                        className:
                          "font-bold text-lg text-primary hidden sm:block leading-tight",
                        children: [
                          "Thrive Nest",
                          (0, a.jsx)("br", {}),
                          (0, a.jsx)("span", {
                            className: "text-accent text-sm font-semibold",
                            children: "Education",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "hidden lg:flex items-center gap-8",
                    children: i.C.navigation.map((e) =>
                      (0, a.jsx)(
                        o(),
                        {
                          href: e.href,
                          className:
                            "text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200",
                          children: e.label,
                        },
                        e.href,
                      ),
                    ),
                  }),
                  (0, a.jsxs)("div", {
                    className: "hidden lg:flex items-center gap-3",
                    children: [
                      (0, a.jsxs)("a", {
                        href: i.C.instagram.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-full hover:bg-secondary",
                        children: [
                          (0, a.jsx)(c.A, { name: "CameraIcon", size: 16 }),
                          (0, a.jsx)("span", {
                            children: i.C.instagram.username,
                          }),
                        ],
                      }),
                      (0, a.jsxs)("a", {
                        href: "https://wa.me/".concat(i.C.whatsapp),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        onClick: () => (0, d.uJ)("header_desktop"),
                        className:
                          "flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-all shadow-emerald",
                        children: [
                          (0, a.jsx)(c.A, {
                            name: "ChatBubbleLeftRightIcon",
                            size: 16,
                          }),
                          (0, a.jsx)("span", { children: "WhatsApp" }),
                        ],
                      }),
                      (0, a.jsxs)("button", {
                        onClick: t,
                        className:
                          "flex items-center gap-2 navy-gradient text-white px-5 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-all shadow-card",
                        children: [
                          (0, a.jsx)(c.A, { name: "CalendarIcon", size: 16 }),
                          (0, a.jsx)("span", { children: "Book Free Demo" }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("button", {
                    className:
                      "lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-secondary transition-colors",
                    onClick: () => u(!m),
                    "aria-label": "Toggle menu",
                    children: m
                      ? (0, a.jsx)(c.A, {
                          name: "XMarkIcon",
                          size: 24,
                          className: "text-primary",
                        })
                      : (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)("span", {
                              className:
                                "w-6 h-0.5 bg-primary rounded-full block",
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "w-4 h-0.5 bg-primary rounded-full block",
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "w-6 h-0.5 bg-primary rounded-full block",
                            }),
                          ],
                        }),
                  }),
                ],
              }),
            }),
            m &&
              (0, a.jsxs)("div", {
                className: "fixed inset-0 z-40 lg:hidden",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "absolute inset-0 bg-primary/20 backdrop-blur-sm",
                    onClick: () => u(!1),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "absolute top-0 right-0 bottom-0 w-80 max-w-full glass shadow-popup flex flex-col",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "flex items-center justify-between p-6 border-b border-border",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, a.jsx)(l.A, {
                                size: 36,
                                src: "/assets/images/IMG-20260716-WA0000-1784146896428.jpg",
                                className: "rounded-lg",
                              }),
                              (0, a.jsx)("span", {
                                className: "font-bold text-primary",
                                children: "Thrive Nest",
                              }),
                            ],
                          }),
                          (0, a.jsx)("button", {
                            onClick: () => u(!1),
                            className:
                              "p-2 rounded-lg hover:bg-secondary transition-colors",
                            children: (0, a.jsx)(c.A, {
                              name: "XMarkIcon",
                              size: 20,
                              className: "text-primary",
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "flex-1 overflow-y-auto p-6 space-y-1",
                        children: i.C.navigation.map((e) =>
                          (0, a.jsx)(
                            o(),
                            {
                              href: e.href,
                              onClick: x,
                              className:
                                "flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-foreground hover:bg-secondary hover:text-primary transition-all",
                              children: e.label,
                            },
                            e.href,
                          ),
                        ),
                      }),
                      (0, a.jsxs)("div", {
                        className: "p-6 space-y-3 border-t border-border",
                        children: [
                          (0, a.jsxs)("a", {
                            href: i.C.instagram.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-muted-foreground hover:text-primary hover:bg-secondary transition-all",
                            children: [
                              (0, a.jsx)(c.A, { name: "CameraIcon", size: 18 }),
                              i.C.instagram.username,
                            ],
                          }),
                          (0, a.jsxs)("a", {
                            href: "https://wa.me/".concat(i.C.whatsapp),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: () => (0, d.uJ)("header_mobile"),
                            className:
                              "flex items-center justify-center gap-2 w-full bg-accent text-white py-3 rounded-xl font-bold hover:opacity-90 transition-all",
                            children: [
                              (0, a.jsx)(c.A, {
                                name: "ChatBubbleLeftRightIcon",
                                size: 18,
                              }),
                              "WhatsApp Us",
                            ],
                          }),
                          (0, a.jsxs)("button", {
                            onClick: () => {
                              (u(!1), null == t || t());
                            },
                            className:
                              "flex items-center justify-center gap-2 w-full navy-gradient text-white py-3 rounded-xl font-bold hover:opacity-90 transition-all",
                            children: [
                              (0, a.jsx)(c.A, {
                                name: "CalendarIcon",
                                size: 18,
                              }),
                              "Book Free Demo",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
          ],
        });
      }
    },
    3830: (e, t, s) => {
      s.d(t, { A: () => l });
      var a = s(5155),
        n = s(2115),
        r = s(856),
        o = s(4402);
      let l = (0, n.memo)(function (e) {
        let {
            src: t = "/assets/images/app_logo.png",
            iconName: s = "SparklesIcon",
            size: l = 64,
            className: i = "",
            onClick: c,
          } = e,
          d = (0, n.useMemo)(() => {
            let e = ["flex items-center"];
            return (
              c && e.push("cursor-pointer hover:opacity-80 transition-opacity"),
              i && e.push(i),
              e.join(" ")
            );
          }, [c, i]);
        return (0, a.jsx)("div", {
          className: d,
          onClick: c,
          children: t
            ? (0, a.jsx)(o.A, {
                src: t,
                alt: "Logo",
                width: l,
                height: l,
                className: "flex-shrink-0",
                priority: !0,
                unoptimized: t.endsWith(".svg"),
              })
            : (0, a.jsx)(r.A, { name: s, size: l, className: "flex-shrink-0" }),
        });
      });
    },
    4402: (e, t, s) => {
      s.d(t, { A: () => l });
      var a = s(5155),
        n = s(2115),
        r = s(5239);
      let o = (0, n.memo)(function (e) {
        let {
            src: t,
            alt: s,
            width: o,
            height: l,
            className: i = "",
            priority: c = !1,
            quality: d = 85,
            placeholder: m = "empty",
            blurDataURL: u,
            fill: x = !1,
            sizes: h,
            onClick: p,
            fallbackSrc: f = "/assets/images/no_image.png",
            loading: g = "lazy",
            unoptimized: b = !1,
            ...j
          } = e,
          [v, y] = (0, n.useState)(t),
          [N, C] = (0, n.useState)(!0),
          [w, k] = (0, n.useState)(!1),
          _ = (0, n.useMemo)(
            () => "string" == typeof v && v.startsWith("http"),
            [v],
          ),
          A = b || _,
          D = (0, n.useCallback)(() => {
            (w || v === f || (y(f), k(!0)), C(!1));
          }, [w, v, f]),
          z = (0, n.useCallback)(() => {
            (C(!1), k(!1));
          }, []),
          E = (0, n.useMemo)(() => {
            let e = [i];
            return (
              N && e.push("bg-gray-200"),
              p &&
                e.push(
                  "cursor-pointer hover:opacity-90 transition-opacity duration-200",
                ),
              e.filter(Boolean).join(" ")
            );
          }, [i, N, p]),
          I = (0, n.useMemo)(() => {
            let e = {
              src: v,
              alt: s,
              className: E,
              quality: d,
              placeholder: m,
              unoptimized: A,
              onError: D,
              onLoad: z,
              onClick: p,
            };
            return (
              c ? (e.priority = !0) : (e.loading = g),
              u && "blur" === m && (e.blurDataURL = u),
              e
            );
          }, [v, s, E, d, m, u, A, c, g, D, z, p]);
        return x
          ? (0, a.jsx)("div", {
              className: "relative",
              style: { width: "100%", height: "100%" },
              children: (0, a.jsx)(r.default, {
                ...I,
                fill: !0,
                sizes:
                  h ||
                  "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                style: { objectFit: "cover" },
                ...j,
              }),
            })
          : (0, a.jsx)(r.default, {
              ...I,
              width: o || 400,
              height: l || 300,
              sizes: h,
              ...j,
            });
      });
      o.displayName = "AppImage";
      let l = o;
    },
    5904: (e, t, s) => {
      s.d(t, { C: () => a });
      let a = {
        name: "Thrive Nest Education",
        shortName: "ThrivenEst",
        tagline: "Personalized Home Tuition for Better Results",
        description:
          "Connect with verified and experienced home tutors for all classes and competitive exams. Daily teaching plans, weekly tests, and student progress tracking.",
        url: "https://thrivenest-15kxw51.public.builtwithrocket.new",
        phone: "+917579351269",
        phoneDisplay: "+91 75793 51269",
        whatsapp: "917579351269",
        whatsappDisplay: "+91 75793 51269",
        email: "hello@thrivenesteducation.com",
        instagram: {
          username: "@thrivenest.education",
          url: "https://instagram.com/thrivenest.education",
        },
        address: "Delhi NCR, India",
        social: {
          instagram: "https://instagram.com/thrivenest.education",
          whatsapp: "https://wa.me/917579351269",
          facebook: "https://facebook.com/thrivenesteducation",
          youtube: "https://youtube.com/@thrivenesteducation",
        },
        stats: {
          students: "2500+",
          tutors: "500+",
          subjects: "50+",
          successRate: "95%",
        },
        navigation: [
          { label: "Home", href: "../index.html" },
          { label: "About", href: "../index.html#about" },
          { label: "Become a Tutor", href: "../index.html#become-tutor" },
          { label: "Subjects", href: "../index.html#subjects" },
          { label: "Pricing", href: "../pricing/" },
          { label: "Testimonials", href: "../index.html#testimonials" },
          { label: "Contact", href: "../contact/" },
        ],
      };
    },
    7356: (e, t, s) => {
      s.d(t, { A: () => i });
      var a = s(5155),
        n = s(2115),
        r = s(856),
        o = s(5904),
        l = s(80);
      function i(e) {
        let { onBookDemo: t } = e,
          [s, i] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            let e = () => i(window.scrollY > 400);
            return (
              window.addEventListener("scroll", e, { passive: !0 }),
              () => window.removeEventListener("scroll", e)
            );
          }, []),
          (0, a.jsxs)("div", {
            className:
              "fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3",
            children: [
              s &&
                (0, a.jsx)("button", {
                  onClick: () =>
                    window.scrollTo({ top: 0, behavior: "smooth" }),
                  className:
                    "w-11 h-11 rounded-full glass-card border border-border shadow-float flex items-center justify-center hover:border-primary hover:text-primary text-muted-foreground transition-all",
                  "aria-label": "Back to top",
                  children: (0, a.jsx)(r.A, { name: "ArrowUpIcon", size: 18 }),
                }),
              (0, a.jsx)("a", {
                href: o.C.instagram.url,
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "w-11 h-11 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-float flex items-center justify-center hover:scale-110 transition-transform",
                "aria-label": "Instagram",
                children: (0, a.jsx)(r.A, {
                  name: "CameraIcon",
                  size: 18,
                  className: "text-white",
                }),
              }),
              (0, a.jsxs)("a", {
                href: "https://wa.me/"
                  .concat(o.C.whatsapp, "?text=")
                  .concat(
                    encodeURIComponent(
                      "Hello Thrive Nest Education, I am interested in home tuition services.",
                    ),
                  ),
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: () => (0, l.uJ)("floating_button"),
                className:
                  "flex items-center gap-2 bg-accent text-white px-5 py-3 rounded-full shadow-emerald hover:opacity-90 transition-all font-semibold text-sm",
                "aria-label": "WhatsApp",
                children: [
                  (0, a.jsx)(r.A, {
                    name: "ChatBubbleLeftRightIcon",
                    size: 18,
                  }),
                  (0, a.jsx)("span", {
                    className: "hidden sm:inline",
                    children: "WhatsApp",
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    8190: (e, t, s) => {
      s.d(t, { A: () => d });
      var a = s(5155),
        n = s(2115),
        r = s(856),
        o = s(5904),
        l = s(80);
      let i = [
          "Nursery",
          "KG",
          "Class 1",
          "Class 2",
          "Class 3",
          "Class 4",
          "Class 5",
          "Class 6",
          "Class 7",
          "Class 8",
          "Class 9",
          "Class 10",
          "Class 11",
          "Class 12",
          "Competitive Exam",
        ],
        c = [
          "Morning (6 AM – 9 AM)",
          "Before School (7 AM – 8 AM)",
          "After School (2 PM – 5 PM)",
          "Evening (5 PM – 8 PM)",
          "Night (7 PM – 9 PM)",
          "Weekends Only",
          "Flexible",
        ];
      function d(e) {
        let {
            isOpen: t,
            onClose: s,
            preselectedSubject: d = "",
            preselectedPlan: m = "",
          } = e,
          [u, x] = (0, n.useState)({
            name: "",
            phone: "",
            studentClass: "",
            subject: d,
            area: "",
            timing: "",
            plan: m,
          }),
          [h, p] = (0, n.useState)({}),
          [f, g] = (0, n.useState)(!1);
        ((0, n.useEffect)(() => {
          x((e) => ({ ...e, subject: d, plan: m }));
        }, [d, m, t]),
          (0, n.useEffect)(
            () => (
              t
                ? ((document.body.style.overflow = "hidden"),
                  (0, l.y_)(
                    d ? "subject_".concat(d) : m ? "plan_".concat(m) : "direct",
                  ),
                  g(!1))
                : (document.body.style.overflow = ""),
              () => {
                document.body.style.overflow = "";
              }
            ),
            [t, d, m],
          ));
        let b = (e, t) => {
          (f || ((0, l.He)(), g(!0)), x({ ...u, [e]: t }));
        };
        return t
          ? (0, a.jsxs)("div", {
              className:
                "fixed inset-0 z-[200] flex items-center justify-center p-4",
              children: [
                (0, a.jsx)("div", {
                  className: "absolute inset-0 bg-primary/30 backdrop-blur-sm",
                  onClick: s,
                }),
                (0, a.jsxs)("div", {
                  className:
                    "relative glass-card rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-popup",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "sticky top-0 glass rounded-t-3xl p-6 border-b border-border flex items-center justify-between",
                      children: [
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)("h2", {
                              className: "text-xl font-bold text-primary",
                              children: "Book Free Demo Class",
                            }),
                            (0, a.jsx)("p", {
                              className: "text-sm text-muted-foreground mt-0.5",
                              children: "100% free — no credit card needed",
                            }),
                          ],
                        }),
                        (0, a.jsx)("button", {
                          onClick: s,
                          className:
                            "w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-border transition-colors",
                          children: (0, a.jsx)(r.A, {
                            name: "XMarkIcon",
                            size: 18,
                            className: "text-primary",
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsxs)("form", {
                      onSubmit: (e) => {
                        if (
                          (e.preventDefault(),
                          !(() => {
                            let e = {};
                            return (
                              u.name.trim() || (e.name = "Name is required"),
                              u.phone.match(/^[6-9]\d{9}$/) ||
                                (e.phone =
                                  "Enter valid 10-digit mobile number"),
                              u.studentClass ||
                                (e.studentClass = "Please select a class"),
                              u.subject.trim() ||
                                (e.subject = "Please enter subject(s)"),
                              u.area.trim() || (e.area = "Area is required"),
                              u.timing ||
                                (e.timing = "Please select preferred timing"),
                              p(e),
                              0 === Object.keys(e).length
                            );
                          })())
                        )
                          return;
                        (0, l.ZK)({
                          subject: u.subject,
                          studentClass: u.studentClass,
                          plan: u.plan,
                        });
                        let t = u.plan
                            ? "\n\uD83D\uDCCB Plan: ".concat(u.plan)
                            : "",
                          a = encodeURIComponent(
                            "Hello "
                              .concat(
                                o.C.name,
                                ",\n\nI would like to book a FREE Demo Class.\n\n\uD83D\uDC64 Name: ",
                              )
                              .concat(u.name, "\n\uD83D\uDCDE Phone: ")
                              .concat(u.phone, "\n\uD83C\uDF93 Class: ")
                              .concat(
                                u.studentClass,
                                "\n\uD83D\uDCDA Subject: ",
                              )
                              .concat(u.subject, "\n\uD83D\uDCCD Area: ")
                              .concat(
                                u.area,
                                "\n\uD83D\uDD52 Preferred Timing: ",
                              )
                              .concat(u.timing)
                              .concat(
                                t,
                                "\n\nPlease contact me to schedule my free demo class.",
                              ),
                          );
                        ((0, l.Hh)({
                          subject: u.subject,
                          studentClass: u.studentClass,
                          plan: u.plan,
                        }),
                          window.open(
                            "https://wa.me/"
                              .concat(o.C.whatsapp, "?text=")
                              .concat(a),
                            "_blank",
                          ),
                          s());
                      },
                      className: "p-6 space-y-4",
                      children: [
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)("label", {
                              className:
                                "block text-sm font-semibold text-foreground mb-1.5",
                              children: "Full Name *",
                            }),
                            (0, a.jsx)("input", {
                              type: "text",
                              value: u.name,
                              onChange: (e) => b("name", e.target.value),
                              placeholder: "Enter your full name",
                              className:
                                "w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm",
                            }),
                            h.name &&
                              (0, a.jsx)("p", {
                                className: "text-red-500 text-xs mt-1",
                                children: h.name,
                              }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)("label", {
                              className:
                                "block text-sm font-semibold text-foreground mb-1.5",
                              children: "Phone Number *",
                            }),
                            (0, a.jsx)("input", {
                              type: "tel",
                              value: u.phone,
                              onChange: (e) => b("phone", e.target.value),
                              placeholder: "10-digit mobile number",
                              className:
                                "w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm",
                            }),
                            h.phone &&
                              (0, a.jsx)("p", {
                                className: "text-red-500 text-xs mt-1",
                                children: h.phone,
                              }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)("label", {
                              className:
                                "block text-sm font-semibold text-foreground mb-1.5",
                              children: "Student Class *",
                            }),
                            (0, a.jsxs)("select", {
                              value: u.studentClass,
                              onChange: (e) =>
                                b("studentClass", e.target.value),
                              className:
                                "w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm",
                              children: [
                                (0, a.jsx)("option", {
                                  value: "",
                                  children: "Select class",
                                }),
                                i.map((e) =>
                                  (0, a.jsx)(
                                    "option",
                                    { value: e, children: e },
                                    e,
                                  ),
                                ),
                              ],
                            }),
                            h.studentClass &&
                              (0, a.jsx)("p", {
                                className: "text-red-500 text-xs mt-1",
                                children: h.studentClass,
                              }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)("label", {
                              className:
                                "block text-sm font-semibold text-foreground mb-1.5",
                              children: "Subject(s) *",
                            }),
                            (0, a.jsx)("input", {
                              type: "text",
                              value: u.subject,
                              onChange: (e) => b("subject", e.target.value),
                              placeholder:
                                "E.g., Mathematics, Science, English, Physics & Chemistry, All Subjects",
                              className:
                                "w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm",
                            }),
                            h.subject &&
                              (0, a.jsx)("p", {
                                className: "text-red-500 text-xs mt-1",
                                children: h.subject,
                              }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)("label", {
                              className:
                                "block text-sm font-semibold text-foreground mb-1.5",
                              children: "Area / Locality *",
                            }),
                            (0, a.jsx)("input", {
                              type: "text",
                              value: u.area,
                              onChange: (e) => b("area", e.target.value),
                              placeholder: "e.g. Dwarka, Noida, Gurgaon",
                              className:
                                "w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm",
                            }),
                            h.area &&
                              (0, a.jsx)("p", {
                                className: "text-red-500 text-xs mt-1",
                                children: h.area,
                              }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)("label", {
                              className:
                                "block text-sm font-semibold text-foreground mb-1.5",
                              children: "Preferred Timing *",
                            }),
                            (0, a.jsxs)("select", {
                              value: u.timing,
                              onChange: (e) => b("timing", e.target.value),
                              className:
                                "w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm",
                              children: [
                                (0, a.jsx)("option", {
                                  value: "",
                                  children: "Select timing",
                                }),
                                c.map((e) =>
                                  (0, a.jsx)(
                                    "option",
                                    { value: e, children: e },
                                    e,
                                  ),
                                ),
                              ],
                            }),
                            h.timing &&
                              (0, a.jsx)("p", {
                                className: "text-red-500 text-xs mt-1",
                                children: h.timing,
                              }),
                          ],
                        }),
                        u.plan &&
                          (0, a.jsxs)("div", {
                            className:
                              "flex items-center gap-2 px-4 py-3 rounded-xl bg-secondary border border-border",
                            children: [
                              (0, a.jsx)(r.A, {
                                name: "TagIcon",
                                size: 16,
                                className: "text-accent",
                              }),
                              (0, a.jsxs)("span", {
                                className:
                                  "text-sm font-semibold text-foreground",
                                children: ["Plan: ", u.plan],
                              }),
                            ],
                          }),
                        (0, a.jsxs)("button", {
                          type: "submit",
                          className:
                            "w-full navy-gradient text-white py-4 rounded-xl font-bold text-base hover:opacity-90 transition-all shadow-card flex items-center justify-center gap-2",
                          children: [
                            (0, a.jsx)(r.A, {
                              name: "ChatBubbleLeftRightIcon",
                              size: 18,
                            }),
                            "Send via WhatsApp",
                          ],
                        }),
                        (0, a.jsx)("p", {
                          className:
                            "text-center text-xs text-muted-foreground",
                          children:
                            "By submitting, you agree to be contacted on WhatsApp.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          : null;
      }
    },
    8455: (e, t, s) => {
      s.d(t, { A: () => c });
      var a = s(5155);
      s(2115);
      var n = s(2619),
        r = s.n(n),
        o = s(3830),
        l = s(856),
        i = s(5904);
      function c() {
        var e, t, s, n;
        return (0, a.jsx)("footer", {
          className: "border-t border-border bg-background",
          children: (0, a.jsxs)("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 py-16",
            children: [
              (0, a.jsxs)("div", {
                className:
                  "flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12",
                children: [
                  (0, a.jsxs)("div", {
                    className: "lg:max-w-xs space-y-4",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [
                          (0, a.jsx)(o.A, {
                            size: 44,
                            src: "/assets/images/IMG-20260716-WA0000-1784146896428.jpg",
                            className: "rounded-xl",
                          }),
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsx)("p", {
                                className:
                                  "font-bold text-primary text-lg leading-tight",
                                children: "Thrive Nest",
                              }),
                              (0, a.jsx)("p", {
                                className: "text-accent text-sm font-semibold",
                                children: "Education",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("p", {
                        className:
                          "text-sm text-muted-foreground leading-relaxed",
                        children:
                          "Verified home tutors for all classes and competitive exams in Delhi NCR. Daily plans, weekly tests, free demo.",
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-3 pt-1",
                        children: [
                          (0, a.jsx)("a", {
                            href:
                              null === i.C ||
                              void 0 === i.C ||
                              null == (e = i.C.social)
                                ? void 0
                                : e.instagram,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent text-muted-foreground transition-all",
                            children: (0, a.jsx)(l.A, {
                              name: "CameraIcon",
                              size: 16,
                            }),
                          }),
                          (0, a.jsx)("a", {
                            href:
                              null === i.C ||
                              void 0 === i.C ||
                              null == (t = i.C.social)
                                ? void 0
                                : t.whatsapp,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent text-muted-foreground transition-all",
                            children: (0, a.jsx)(l.A, {
                              name: "ChatBubbleLeftRightIcon",
                              size: 16,
                            }),
                          }),
                          (0, a.jsx)("a", {
                            href:
                              null === i.C ||
                              void 0 === i.C ||
                              null == (s = i.C.social)
                                ? void 0
                                : s.youtube,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent text-muted-foreground transition-all",
                            children: (0, a.jsx)(l.A, {
                              name: "PlayCircleIcon",
                              size: 16,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "grid grid-cols-2 sm:grid-cols-3 gap-10",
                    children: [
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("p", {
                            className:
                              "text-xs font-bold uppercase tracking-widest text-primary mb-4",
                            children: "Quick Links",
                          }),
                          (0, a.jsx)("ul", {
                            className: "space-y-3",
                            children: [
                              { label: "Home", href: "index.html" },
                              { label: "About", href: "index.html#about" },
                              {
                                label: "Become a Tutor",
                                href: "index.html#become-tutor",
                              },
                              { label: "Pricing", href: "pricing/" },
                            ].map((e) =>
                              (0, a.jsx)(
                                "li",
                                {
                                  children: (0, a.jsx)(r(), {
                                    href: null == e ? void 0 : e.href,
                                    className:
                                      "text-sm text-muted-foreground hover:text-primary transition-colors font-medium",
                                    children: null == e ? void 0 : e.label,
                                  }),
                                },
                                null == e ? void 0 : e.href,
                              ),
                            ),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("p", {
                            className:
                              "text-xs font-bold uppercase tracking-widest text-primary mb-4",
                            children: "Subjects",
                          }),
                          (0, a.jsx)("ul", {
                            className: "space-y-3",
                            children: [
                              "NEET",
                              "JEE",
                              "CUET",
                              "Class 9–10",
                              "Class 11–12",
                              "Olympiad",
                            ].map((e) =>
                              (0, a.jsx)(
                                "li",
                                {
                                  children: (0, a.jsx)("span", {
                                    className:
                                      "text-sm text-muted-foreground hover:text-primary transition-colors font-medium cursor-pointer",
                                    children: e,
                                  }),
                                },
                                e,
                              ),
                            ),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("p", {
                            className:
                              "text-xs font-bold uppercase tracking-widest text-primary mb-4",
                            children: "Contact",
                          }),
                          (0, a.jsxs)("ul", {
                            className: "space-y-3",
                            children: [
                              (0, a.jsxs)("li", {
                                className:
                                  "flex items-center gap-2 text-sm text-muted-foreground",
                                children: [
                                  (0, a.jsx)(l.A, {
                                    name: "PhoneIcon",
                                    size: 14,
                                    className: "text-accent shrink-0",
                                  }),
                                  (0, a.jsx)("a", {
                                    href: "tel:".concat(
                                      null === i.C || void 0 === i.C
                                        ? void 0
                                        : i.C.phone,
                                    ),
                                    className:
                                      "hover:text-primary transition-colors font-medium",
                                    children:
                                      null === i.C || void 0 === i.C
                                        ? void 0
                                        : i.C.phoneDisplay,
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("li", {
                                className:
                                  "flex items-center gap-2 text-sm text-muted-foreground",
                                children: [
                                  (0, a.jsx)(l.A, {
                                    name: "EnvelopeIcon",
                                    size: 14,
                                    className: "text-accent shrink-0",
                                  }),
                                  (0, a.jsx)("a", {
                                    href: "mailto:".concat(
                                      null === i.C || void 0 === i.C
                                        ? void 0
                                        : i.C.email,
                                    ),
                                    className:
                                      "hover:text-primary transition-colors font-medium",
                                    children:
                                      null === i.C || void 0 === i.C
                                        ? void 0
                                        : i.C.email,
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("li", {
                                className:
                                  "flex items-start gap-2 text-sm text-muted-foreground",
                                children: [
                                  (0, a.jsx)(l.A, {
                                    name: "MapPinIcon",
                                    size: 14,
                                    className: "text-accent shrink-0 mt-0.5",
                                  }),
                                  (0, a.jsx)("span", {
                                    className: "font-medium",
                                    children: "Delhi NCR, India",
                                  }),
                                ],
                              }),
                              (0, a.jsx)("li", {
                                children: (0, a.jsx)(r(), {
                                  href: "contact/",
                                  className:
                                    "text-sm text-muted-foreground hover:text-primary transition-colors font-medium",
                                  children: "Contact Page",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className:
                  "mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4",
                children: [
                  (0, a.jsxs)("p", {
                    className: "text-sm text-muted-foreground font-medium",
                    children: [
                      "\xa9 ",
                      ((n = new Date()), n.getFullYear()),
                      " Thrive Nest Education. All rights reserved.",
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "flex items-center gap-6 text-sm text-muted-foreground",
                    children: [
                      (0, a.jsx)(r(), {
                        href: "/privacy",
                        className:
                          "hover:text-primary transition-colors font-medium",
                        children: "Privacy Policy",
                      }),
                      (0, a.jsx)(r(), {
                        href: "/terms",
                        className:
                          "hover:text-primary transition-colors font-medium",
                        children: "Terms & Conditions",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=323-739595bf3ea96d1b.js.map
