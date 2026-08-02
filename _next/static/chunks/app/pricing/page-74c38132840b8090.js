(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [907],
  {
    5831: (e, t, a) => {
      "use strict";
      (a.r(t), a.d(t, { default: () => h }));
      var s = a(5155),
        r = a(2115),
        o = a(1398),
        l = a(8455),
        n = a(7356),
        i = a(8190),
        c = a(856),
        d = a(80);
      function m(e) {
        let { plan: t, onGetStarted: a } = e;
        return (0, s.jsxs)("div", {
          className:
            "relative rounded-3xl p-8 flex flex-col gap-6 card-hover transition-all duration-300 ".concat(
              t.popular
                ? "pricing-popular shadow-popup"
                : "glass-card border border-border",
            ),
          children: [
            t.popular &&
              (0, s.jsx)("div", {
                className:
                  "absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-gold text-primary text-xs font-black uppercase tracking-widest shadow-gold",
                children: "⭐ Most Popular",
              }),
            (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)("h3", {
                  className: "text-lg font-bold mb-1 ".concat(
                    t.popular ? "text-white" : "text-primary",
                  ),
                  children: t.name,
                }),
                (0, s.jsxs)("div", {
                  className: "flex items-end gap-1 mb-1",
                  children: [
                    (0, s.jsx)("span", {
                      className: "text-4xl font-black ".concat(
                        t.popular ? "text-white" : "text-primary",
                      ),
                      children: t.price,
                    }),
                    (0, s.jsxs)("span", {
                      className: "text-sm pb-1 ".concat(
                        t.popular ? "text-white/70" : "text-muted-foreground",
                      ),
                      children: ["/", t.period],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "flex gap-4",
                  children: [
                    (0, s.jsxs)("span", {
                      className:
                        "inline-flex items-center gap-1.5 text-xs font-semibold ".concat(
                          t.popular ? "text-white/80" : "text-muted-foreground",
                        ),
                      children: [
                        (0, s.jsx)(c.A, {
                          name: "CalendarIcon",
                          size: 14,
                          className: t.popular ? "text-gold" : "text-accent",
                        }),
                        t.classes,
                      ],
                    }),
                    (0, s.jsxs)("span", {
                      className:
                        "inline-flex items-center gap-1.5 text-xs font-semibold ".concat(
                          t.popular ? "text-white/80" : "text-muted-foreground",
                        ),
                      children: [
                        (0, s.jsx)(c.A, {
                          name: "ClockIcon",
                          size: 14,
                          className: t.popular ? "text-gold" : "text-accent",
                        }),
                        t.duration,
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: "h-px ".concat(
                t.popular ? "bg-white/20" : "bg-border",
              ),
            }),
            (0, s.jsx)("ul", {
              className: "space-y-3 flex-1",
              children: t.features.map((e) =>
                (0, s.jsxs)(
                  "li",
                  {
                    className: "flex items-start gap-3",
                    children: [
                      (0, s.jsx)(c.A, {
                        name: "CheckCircleIcon",
                        size: 17,
                        className: t.popular
                          ? "text-gold shrink-0 mt-0.5"
                          : "text-accent shrink-0 mt-0.5",
                        variant: "solid",
                      }),
                      (0, s.jsx)("span", {
                        className: "text-sm ".concat(
                          t.popular ? "text-white/90" : "text-foreground/80",
                        ),
                        children: e,
                      }),
                    ],
                  },
                  e,
                ),
              ),
            }),
            (0, s.jsxs)("button", {
              onClick: () => {
                ((0, d.GS)(t.name), a(t.name));
              },
              className:
                "w-full py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ".concat(
                  t.popular
                    ? "bg-gold text-primary hover:opacity-90 shadow-gold"
                    : "navy-gradient text-white hover:opacity-90 shadow-card",
                ),
              children: [
                (0, s.jsx)(c.A, { name: "CalendarIcon", size: 16 }),
                "Get Started — Book Free Demo",
              ],
            }),
          ],
        });
      }
      var x = a(9876);
      let p = [
          {
            name: "Primary",
            price: "₹4,000",
            period: "month",
            classes: "4 Classes/Week",
            duration: "1 Hour Each",
            popular: !1,
            color: "text-accent",
            accentColor: "bg-accent",
            features: [
              "Nursery to Class 5",
              "Daily Teaching Plan",
              "Weekly Assessment Tests",
              "Monthly Progress Report",
              "Verified Home Tutor",
              "No Hidden Charges",
              "Free Demo Class",
            ],
          },
          {
            name: "Middle School",
            price: "₹5,000",
            period: "month",
            classes: "4 Classes/Week",
            duration: "1 Hour Each",
            popular: !1,
            color: "text-primary",
            accentColor: "bg-primary",
            features: [
              "Classes 6–8",
              "Subject-wise Experts",
              "Daily Teaching Plan",
              "Weekly Assessment Tests",
              "Monthly Progress Report",
              "Verified Home Tutor",
              "No Hidden Charges",
              "Free Demo Class",
            ],
          },
          {
            name: "Class 9–10",
            price: "₹6,000",
            period: "month",
            classes: "4 Classes/Week",
            duration: "1 Hour Each",
            popular: !0,
            color: "text-white",
            accentColor: "bg-gold",
            features: [
              "Board Exam Preparation",
              "CBSE / ICSE / State Board",
              "Daily Teaching Plan",
              "Weekly Assessment Tests",
              "Monthly Progress Report",
              "Board Pattern Practice",
              "Verified Home Tutor",
              "Free Demo Class",
            ],
          },
          {
            name: "Class 11–12 & Competitive",
            price: "₹9,000",
            period: "month",
            classes: "3 Classes/Week",
            duration: "1 Hour Each",
            popular: !1,
            color: "text-accent",
            accentColor: "bg-accent",
            features: [
              "Class 11–12 All Streams",
              "NEET / JEE / CUET Prep",
              "Expert Subject Specialists",
              "Daily Teaching Plan",
              "Weekly Assessment Tests",
              "Monthly Progress Report",
              "Verified Home Tutor",
              "Free Demo Class",
            ],
          },
        ],
        u = [
          {
            icon: "ShieldCheckIcon",
            label: "Verified Tutors",
            desc: "Background checked",
          },
          {
            icon: "GiftIcon",
            label: "Free Demo",
            desc: "No commitment needed",
          },
          {
            icon: "CurrencyRupeeIcon",
            label: "No Hidden Fees",
            desc: "Transparent pricing",
          },
          { icon: "ArrowPathIcon", label: "Flexible", desc: "Cancel anytime" },
        ];
      function h() {
        let [e, t] = (0, r.useState)(!1),
          [a, d] = (0, r.useState)(""),
          h = function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            (d(e), t(!0));
          };
        return (0, s.jsxs)("main", {
          className: "min-h-screen bg-background",
          children: [
            (0, s.jsx)(o.A, { onBookDemo: () => h() }),
            (0, s.jsx)("section", {
              className: "pt-28 pb-16 hero-gradient",
              children: (0, s.jsxs)("div", {
                className: "max-w-4xl mx-auto px-4 sm:px-6 text-center",
                children: [
                  (0, s.jsx)("span", {
                    className:
                      "inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6",
                    children: "Simple Pricing",
                  }),
                  (0, s.jsxs)("h1", {
                    className:
                      "text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary tracking-tight leading-tight mb-6",
                    children: [
                      "Invest in Your Child's",
                      " ",
                      (0, s.jsx)("span", {
                        className: "text-gradient-primary",
                        children: "Future",
                      }),
                    ],
                  }),
                  (0, s.jsx)("p", {
                    className:
                      "text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed",
                    children:
                      "Transparent monthly pricing with no hidden fees. Every plan includes verified tutors, daily teaching plans, weekly tests, and monthly progress reports.",
                  }),
                  (0, s.jsx)("div", {
                    className: "flex flex-wrap justify-center gap-3",
                    children: u.map((e) =>
                      (0, s.jsxs)(
                        "div",
                        {
                          className:
                            "flex items-center gap-2 px-4 py-2.5 glass-card rounded-full border border-border",
                          children: [
                            (0, s.jsx)(c.A, {
                              name: e.icon,
                              size: 16,
                              className: "text-accent",
                            }),
                            (0, s.jsx)("span", {
                              className:
                                "text-sm font-semibold text-foreground",
                              children: e.label,
                            }),
                            (0, s.jsxs)("span", {
                              className:
                                "text-xs text-muted-foreground hidden sm:inline",
                              children: ["— ", e.desc],
                            }),
                          ],
                        },
                        e.label,
                      ),
                    ),
                  }),
                ],
              }),
            }),
            (0, s.jsx)("section", {
              className: "py-16 bg-white",
              children: (0, s.jsxs)("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6",
                    children: p.map((e) =>
                      (0, s.jsx)(m, { plan: e, onGetStarted: h }, e.name),
                    ),
                  }),
                  (0, s.jsxs)("div", {
                    className: "mt-16 glass-card rounded-3xl p-8 sm:p-12",
                    children: [
                      (0, s.jsx)("h3", {
                        className:
                          "text-2xl font-extrabold text-primary text-center mb-8",
                        children: "Included in Every Plan",
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4",
                        children: [
                          { icon: "UserCircleIcon", label: "Verified Tutor" },
                          { icon: "CalendarDaysIcon", label: "Daily Plan" },
                          {
                            icon: "ClipboardDocumentCheckIcon",
                            label: "Weekly Tests",
                          },
                          { icon: "ChartBarIcon", label: "Progress Report" },
                          { icon: "GiftIcon", label: "Free Demo" },
                          {
                            icon: "CurrencyRupeeIcon",
                            label: "No Hidden Fees",
                          },
                        ].map((e) =>
                          (0, s.jsxs)(
                            "div",
                            {
                              className:
                                "flex flex-col items-center gap-2 p-4 rounded-2xl bg-secondary hover:bg-accent/5 transition-colors",
                              children: [
                                (0, s.jsx)(c.A, {
                                  name: e.icon,
                                  size: 22,
                                  className: "text-accent",
                                }),
                                (0, s.jsx)("span", {
                                  className:
                                    "text-xs font-bold text-primary text-center",
                                  children: e.label,
                                }),
                              ],
                            },
                            e.label,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, s.jsx)("section", {
              className: "py-16 navy-gradient",
              children: (0, s.jsxs)("div", {
                className: "max-w-3xl mx-auto px-4 sm:px-6 text-center",
                children: [
                  (0, s.jsx)("h2", {
                    className:
                      "text-3xl sm:text-4xl font-extrabold text-white mb-4",
                    children: "Still deciding? Start with a Free Demo",
                  }),
                  (0, s.jsx)("p", {
                    className: "text-white/70 text-lg mb-8",
                    children:
                      "No payment, no commitment. Meet your tutor first — then decide.",
                  }),
                  (0, s.jsxs)("button", {
                    onClick: () => h(),
                    className:
                      "inline-flex items-center gap-3 bg-gold text-primary px-10 py-5 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-gold",
                    children: [
                      (0, s.jsx)(c.A, { name: "CalendarIcon", size: 22 }),
                      "Book My Free Demo Class",
                    ],
                  }),
                ],
              }),
            }),
            (0, s.jsx)(x.A, {}),
            (0, s.jsx)(l.A, {}),
            (0, s.jsx)(n.A, { onBookDemo: () => h() }),
            (0, s.jsx)(i.A, {
              isOpen: e,
              onClose: () => t(!1),
              preselectedPlan: a,
            }),
          ],
        });
      }
    },
    8380: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 5831));
    },
    9876: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => n });
      var s = a(5155),
        r = a(2115),
        o = a(856);
      let l = [
        {
          q: "Is the demo class really free?",
          a: "Yes, 100% free. No credit card required, no registration fee. You simply book via WhatsApp, and we schedule a demo class with your matched tutor at your preferred time.",
        },
        {
          q: "How are tutors verified?",
          a: "Every tutor undergoes a multi-step verification: government ID check, qualification certificate verification, reference checks, and a demo session with our team before they are approved to teach.",
        },
        {
          q: "What areas do you serve in Delhi NCR?",
          a: "We serve all major areas including Dwarka, Rohini, Pitampura, Janakpuri, Vasant Kunj, Noida, Gurgaon, Faridabad, Ghaziabad, and most localities within Delhi NCR.",
        },
        {
          q: "Can I change my tutor if I am not satisfied?",
          a: "Absolutely. Your satisfaction is our priority. If you are not happy with the tutor after the demo or initial sessions, simply let us know and we will match you with a new tutor at no extra cost.",
        },
        {
          q: "What subjects and classes do you cover?",
          a: "We cover all subjects for Nursery through Class 12, plus competitive exam preparation for NEET, JEE, CUET, Olympiad, Foundation courses, English Speaking, and Computer classes.",
        },
        {
          q: "How are fees charged and what is included?",
          a: "Fees are monthly and vary by class level (₹4,000–₹9,000/month). All plans include 4 classes/week (3 for 11-12 & competitive), 1 hour each, daily teaching plan, weekly tests, and monthly progress reports. No hidden charges.",
        },
        {
          q: "Can the tutor come to our home?",
          a: "Yes, all our tutors provide home tuition — they come to your residence at the scheduled time. We also offer online sessions if you prefer.",
        },
        {
          q: "How quickly will I get a tutor after booking?",
          a: "Typically within 24–48 hours. After you fill the enquiry form, our team contacts you to understand your requirements and matches you with the best available tutor.",
        },
        {
          q: "Do you provide progress reports to parents?",
          a: "Yes. Every month, parents receive a detailed progress report covering attendance, test scores, topics covered, and tutor feedback on the student's strengths and areas for improvement.",
        },
        {
          q: "What if I want to pause or cancel?",
          a: "You can pause or cancel anytime with 7 days' notice. We don't lock you into long-term contracts. Your flexibility is important to us.",
        },
      ];
      function n() {
        let [e, t] = (0, r.useState)(0);
        return (0, s.jsx)("section", {
          id: "faq",
          className: "py-20 bg-white",
          children: (0, s.jsxs)("div", {
            className: "max-w-4xl mx-auto px-4 sm:px-6",
            children: [
              (0, s.jsxs)("div", {
                className: "text-center mb-14",
                children: [
                  (0, s.jsx)("span", {
                    className:
                      "inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4",
                    children: "FAQ",
                  }),
                  (0, s.jsxs)("h2", {
                    className:
                      "text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight mb-4",
                    children: [
                      "Common Questions,",
                      " ",
                      (0, s.jsx)("span", {
                        className: "text-gradient-primary",
                        children: "Honest Answers",
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "space-y-3",
                children:
                  null == l
                    ? void 0
                    : l.map((a, r) =>
                        (0, s.jsxs)(
                          "div",
                          {
                            className:
                              "glass-card rounded-2xl overflow-hidden border transition-all duration-300 ".concat(
                                e === r
                                  ? "border-accent/30 shadow-card"
                                  : "border-border",
                              ),
                            children: [
                              (0, s.jsxs)("button", {
                                onClick: () => t(e === r ? null : r),
                                className:
                                  "w-full flex items-center justify-between p-6 text-left group",
                                children: [
                                  (0, s.jsx)("span", {
                                    className:
                                      "text-sm sm:text-base font-semibold text-primary pr-4 leading-snug",
                                    children: null == a ? void 0 : a.q,
                                  }),
                                  (0, s.jsx)("div", {
                                    className:
                                      "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ".concat(
                                        e === r
                                          ? "bg-accent text-white rotate-180"
                                          : "bg-secondary text-muted-foreground",
                                      ),
                                    children: (0, s.jsx)(o.A, {
                                      name: "ChevronDownIcon",
                                      size: 16,
                                    }),
                                  }),
                                ],
                              }),
                              e === r &&
                                (0, s.jsxs)("div", {
                                  className: "px-6 pb-6",
                                  children: [
                                    (0, s.jsx)("div", {
                                      className: "h-px bg-border mb-4",
                                    }),
                                    (0, s.jsx)("p", {
                                      className:
                                        "text-sm text-muted-foreground leading-relaxed",
                                      children: null == a ? void 0 : a.a,
                                    }),
                                  ],
                                }),
                            ],
                          },
                          r,
                        ),
                      ),
              }),
            ],
          }),
        });
      }
    },
  },
  (e) => {
    (e.O(0, [534, 481, 323, 441, 255, 358], () => e((e.s = 8380))),
      (_N_E = e.O()));
  },
]);
//# sourceMappingURL=page-74c38132840b8090.js.map
