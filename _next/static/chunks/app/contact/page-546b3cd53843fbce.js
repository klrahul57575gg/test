(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [977],
  {
    8559: (e, t, a) => {
      "use strict";
      (a.r(t), a.d(t, { default: () => u }));
      var s = a(5155),
        n = a(2115),
        r = a(1398),
        l = a(8455),
        o = a(7356),
        i = a(8190),
        c = a(856),
        d = a(5904);
      function m() {
        let e = [
          {
            icon: "PhoneIcon",
            label: "Phone",
            value: d.C.phoneDisplay,
            href: "tel:".concat(d.C.phone),
            color: "text-accent",
            bg: "bg-accent/10",
          },
          {
            icon: "EnvelopeIcon",
            label: "Email",
            value: d.C.email,
            href: "mailto:".concat(d.C.email),
            color: "text-primary",
            bg: "bg-primary/10",
          },
          {
            icon: "ChatBubbleLeftRightIcon",
            label: "WhatsApp",
            value: d.C.whatsappDisplay,
            href: "https://wa.me/".concat(d.C.whatsapp),
            color: "text-accent",
            bg: "bg-accent/10",
          },
          {
            icon: "CameraIcon",
            label: "Instagram",
            value: d.C.instagram.username,
            href: d.C.instagram.url,
            color: "text-pink-500",
            bg: "bg-pink-50",
          },
          {
            icon: "MapPinIcon",
            label: "Location",
            value: "Delhi NCR, India",
            href: "https://maps.google.com/?q=Delhi+NCR+India",
            color: "text-gold",
            bg: "bg-gold/10",
          },
        ];
        return (0, s.jsxs)("div", {
          className: "space-y-4",
          children: [
            (0, s.jsx)("h2", {
              className: "text-2xl font-extrabold text-primary mb-6",
              children: "Get In Touch",
            }),
            e.map((e) =>
              (0, s.jsxs)(
                "a",
                {
                  href: e.href,
                  target: e.href.startsWith("http") ? "_blank" : void 0,
                  rel: e.href.startsWith("http")
                    ? "noopener noreferrer"
                    : void 0,
                  className:
                    "flex items-center gap-4 p-4 glass-card rounded-2xl border border-border hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 group",
                  children: [
                    (0, s.jsx)("div", {
                      className: "w-11 h-11 rounded-xl ".concat(
                        e.bg,
                        " flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300",
                      ),
                      children: (0, s.jsx)(c.A, {
                        name: e.icon,
                        size: 20,
                        className: e.color,
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      children: [
                        (0, s.jsx)("p", {
                          className:
                            "text-xs font-bold uppercase tracking-widest text-muted-foreground",
                          children: e.label,
                        }),
                        (0, s.jsx)("p", {
                          className: "font-semibold text-foreground text-sm",
                          children: e.value,
                        }),
                      ],
                    }),
                    (0, s.jsx)(c.A, {
                      name: "ArrowRightIcon",
                      size: 16,
                      className:
                        "text-muted-foreground ml-auto group-hover:translate-x-1 transition-transform",
                    }),
                  ],
                },
                e.label,
              ),
            ),
          ],
        });
      }
      function x() {
        let [e, t] = (0, n.useState)({
            name: "",
            phone: "",
            email: "",
            subject: "",
            message: "",
          }),
          [a, r] = (0, n.useState)({}),
          l =
            "w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm";
        return (0, s.jsxs)("div", {
          className: "glass-card rounded-3xl p-8 shadow-popup",
          children: [
            (0, s.jsx)("h2", {
              className: "text-2xl font-extrabold text-primary mb-2",
              children: "Send Us a Message",
            }),
            (0, s.jsx)("p", {
              className: "text-sm text-muted-foreground mb-6",
              children:
                "Fill the form below and we'll respond via WhatsApp within a few hours.",
            }),
            (0, s.jsxs)("form", {
              onSubmit: (t) => {
                if (
                  (t.preventDefault(),
                  !(() => {
                    let t = {};
                    return (
                      e.name.trim() || (t.name = "Name is required"),
                      e.phone.match(/^[6-9]\d{9}$/) ||
                        (t.phone = "Enter valid 10-digit mobile number"),
                      e.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ||
                        (t.email = "Enter valid email"),
                      e.subject.trim() || (t.subject = "Subject is required"),
                      e.message.trim() || (t.message = "Message is required"),
                      r(t),
                      0 === Object.keys(t).length
                    );
                  })())
                )
                  return;
                let a = encodeURIComponent(
                  "Hello "
                    .concat(
                      d.C.name,
                      ",\n\n\uD83D\uDCE9 New Contact Enquiry\n\n\uD83D\uDC64 Name: ",
                    )
                    .concat(e.name, "\n\uD83D\uDCDE Phone: ")
                    .concat(e.phone, "\n\uD83D\uDCE7 Email: ")
                    .concat(e.email, "\n\uD83D\uDCCC Subject: ")
                    .concat(e.subject, "\n\uD83D\uDCAC Message: ")
                    .concat(
                      e.message,
                      "\n\nPlease get back to me at the earliest.",
                    ),
                );
                window.open(
                  "https://wa.me/".concat(d.C.whatsapp, "?text=").concat(a),
                  "_blank",
                );
              },
              className: "space-y-4",
              children: [
                (0, s.jsxs)("div", {
                  className: "grid sm:grid-cols-2 gap-4",
                  children: [
                    (0, s.jsxs)("div", {
                      children: [
                        (0, s.jsx)("label", {
                          className:
                            "block text-xs font-semibold text-foreground mb-1.5",
                          children: "Full Name *",
                        }),
                        (0, s.jsx)("input", {
                          type: "text",
                          value: e.name,
                          onChange: (a) => t({ ...e, name: a.target.value }),
                          placeholder: "Your full name",
                          className: l,
                        }),
                        a.name &&
                          (0, s.jsx)("p", {
                            className: "text-red-500 text-xs mt-1",
                            children: a.name,
                          }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      children: [
                        (0, s.jsx)("label", {
                          className:
                            "block text-xs font-semibold text-foreground mb-1.5",
                          children: "Phone *",
                        }),
                        (0, s.jsx)("input", {
                          type: "tel",
                          value: e.phone,
                          onChange: (a) => t({ ...e, phone: a.target.value }),
                          placeholder: "10-digit mobile number",
                          className: l,
                        }),
                        a.phone &&
                          (0, s.jsx)("p", {
                            className: "text-red-500 text-xs mt-1",
                            children: a.phone,
                          }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("label", {
                      className:
                        "block text-xs font-semibold text-foreground mb-1.5",
                      children: "Email *",
                    }),
                    (0, s.jsx)("input", {
                      type: "email",
                      value: e.email,
                      onChange: (a) => t({ ...e, email: a.target.value }),
                      placeholder: "your@email.com",
                      className: l,
                    }),
                    a.email &&
                      (0, s.jsx)("p", {
                        className: "text-red-500 text-xs mt-1",
                        children: a.email,
                      }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("label", {
                      className:
                        "block text-xs font-semibold text-foreground mb-1.5",
                      children: "Subject *",
                    }),
                    (0, s.jsx)("input", {
                      type: "text",
                      value: e.subject,
                      onChange: (a) => t({ ...e, subject: a.target.value }),
                      placeholder: "e.g. Need a tutor for Class 10 Maths",
                      className: l,
                    }),
                    a.subject &&
                      (0, s.jsx)("p", {
                        className: "text-red-500 text-xs mt-1",
                        children: a.subject,
                      }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("label", {
                      className:
                        "block text-xs font-semibold text-foreground mb-1.5",
                      children: "Message *",
                    }),
                    (0, s.jsx)("textarea", {
                      rows: 4,
                      value: e.message,
                      onChange: (a) => t({ ...e, message: a.target.value }),
                      placeholder: "Tell us about your requirements...",
                      className: "".concat(l, " resize-none"),
                    }),
                    a.message &&
                      (0, s.jsx)("p", {
                        className: "text-red-500 text-xs mt-1",
                        children: a.message,
                      }),
                  ],
                }),
                (0, s.jsxs)("button", {
                  type: "submit",
                  className:
                    "w-full navy-gradient text-white py-4 rounded-xl font-bold text-base hover:opacity-90 transition-all shadow-card flex items-center justify-center gap-2",
                  children: [
                    (0, s.jsx)(c.A, {
                      name: "ChatBubbleLeftRightIcon",
                      size: 18,
                    }),
                    "Send via WhatsApp",
                  ],
                }),
                (0, s.jsx)("p", {
                  className: "text-center text-xs text-muted-foreground",
                  children:
                    "We typically respond within 2–4 hours during business hours.",
                }),
              ],
            }),
          ],
        });
      }
      let h = [
        {
          icon: "CameraIcon",
          label: "Instagram",
          value: d.C.instagram.username,
          href: d.C.instagram.url,
          gradient: "from-purple-500 to-pink-500",
        },
        {
          icon: "ChatBubbleLeftRightIcon",
          label: "WhatsApp",
          value: d.C.whatsappDisplay,
          href: "https://wa.me/".concat(d.C.whatsapp),
          gradient: "from-green-500 to-emerald-500",
        },
      ];
      function u() {
        let [e, t] = (0, n.useState)(!1);
        return (0, s.jsxs)("main", {
          className: "min-h-screen bg-background",
          children: [
            (0, s.jsx)(r.A, { onBookDemo: () => t(!0) }),
            (0, s.jsx)("section", {
              className: "pt-28 pb-14 hero-gradient",
              children: (0, s.jsxs)("div", {
                className: "max-w-4xl mx-auto px-4 sm:px-6 text-center",
                children: [
                  (0, s.jsx)("span", {
                    className:
                      "inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6",
                    children: "Contact Us",
                  }),
                  (0, s.jsxs)("h1", {
                    className:
                      "text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary tracking-tight leading-tight mb-5",
                    children: [
                      "We're Here to",
                      " ",
                      (0, s.jsx)("span", {
                        className: "text-gradient-primary",
                        children: "Help You",
                      }),
                    ],
                  }),
                  (0, s.jsx)("p", {
                    className:
                      "text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed",
                    children:
                      "Have a question about tutors, pricing, or subjects? Reach out and our team will connect with you on WhatsApp within hours.",
                  }),
                  (0, s.jsx)("div", {
                    className: "flex flex-wrap justify-center gap-3",
                    children: h.map((e) =>
                      (0, s.jsxs)(
                        "a",
                        {
                          href: e.href,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r ".concat(
                              e.gradient,
                              " text-white text-sm font-bold hover:opacity-90 transition-all shadow-card",
                            ),
                          children: [
                            (0, s.jsx)(c.A, { name: e.icon, size: 16 }),
                            e.value,
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
              children: (0, s.jsx)("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6",
                children: (0, s.jsxs)("div", {
                  className: "grid lg:grid-cols-2 gap-12 items-start",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "space-y-8",
                      children: [
                        (0, s.jsx)(m, {}),
                        (0, s.jsx)("div", {
                          className:
                            "rounded-3xl overflow-hidden border border-border shadow-card",
                          children: (0, s.jsxs)("div", {
                            className:
                              "bg-secondary h-64 flex flex-col items-center justify-center gap-3 relative",
                            children: [
                              (0, s.jsx)("div", {
                                className:
                                  "absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5",
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "relative z-10 flex flex-col items-center gap-3",
                                children: [
                                  (0, s.jsx)("div", {
                                    className:
                                      "w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center",
                                    children: (0, s.jsx)(c.A, {
                                      name: "MapPinIcon",
                                      size: 28,
                                      className: "text-primary",
                                    }),
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: "text-center",
                                    children: [
                                      (0, s.jsx)("p", {
                                        className: "font-bold text-primary",
                                        children: "Delhi NCR, India",
                                      }),
                                      (0, s.jsx)("p", {
                                        className:
                                          "text-sm text-muted-foreground",
                                        children:
                                          "Serving all major localities",
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("a", {
                                    href: "https://maps.google.com/?q=Delhi+NCR+India",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                      "flex items-center gap-2 px-5 py-2.5 rounded-full navy-gradient text-white text-sm font-bold hover:opacity-90 transition-all",
                                    children: [
                                      (0, s.jsx)(c.A, {
                                        name: "MapIcon",
                                        size: 16,
                                      }),
                                      "Open in Google Maps",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "glass-card rounded-2xl p-6 border border-border",
                          children: [
                            (0, s.jsxs)("h3", {
                              className:
                                "font-bold text-primary mb-4 flex items-center gap-2",
                              children: [
                                (0, s.jsx)(c.A, {
                                  name: "ClockIcon",
                                  size: 18,
                                  className: "text-accent",
                                }),
                                "Working Hours",
                              ],
                            }),
                            (0, s.jsx)("div", {
                              className: "space-y-2",
                              children: [
                                {
                                  day: "Monday – Saturday",
                                  time: "9:00 AM – 8:00 PM",
                                },
                                { day: "Sunday", time: "10:00 AM – 5:00 PM" },
                                {
                                  day: "WhatsApp Support",
                                  time: "24/7 Available",
                                },
                              ].map((e) =>
                                (0, s.jsxs)(
                                  "div",
                                  {
                                    className:
                                      "flex justify-between items-center text-sm",
                                    children: [
                                      (0, s.jsx)("span", {
                                        className:
                                          "text-muted-foreground font-medium",
                                        children: e.day,
                                      }),
                                      (0, s.jsx)("span", {
                                        className:
                                          "font-semibold text-foreground",
                                        children: e.time,
                                      }),
                                    ],
                                  },
                                  e.day,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", { children: (0, s.jsx)(x, {}) }),
                  ],
                }),
              }),
            }),
            (0, s.jsx)("section", {
              className: "py-14 navy-gradient",
              children: (0, s.jsxs)("div", {
                className: "max-w-3xl mx-auto px-4 sm:px-6 text-center",
                children: [
                  (0, s.jsx)("h2", {
                    className:
                      "text-2xl sm:text-3xl font-extrabold text-white mb-4",
                    children: "Ready to start? Book a free demo class today",
                  }),
                  (0, s.jsx)("p", {
                    className: "text-white/70 mb-6",
                    children:
                      "No payment needed — just share your requirements and meet your tutor.",
                  }),
                  (0, s.jsxs)("button", {
                    onClick: () => t(!0),
                    className:
                      "inline-flex items-center gap-3 bg-gold text-primary px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all shadow-gold",
                    children: [
                      (0, s.jsx)(c.A, { name: "CalendarIcon", size: 20 }),
                      "Book Free Demo Class",
                    ],
                  }),
                ],
              }),
            }),
            (0, s.jsx)(l.A, {}),
            (0, s.jsx)(o.A, { onBookDemo: () => t(!0) }),
            (0, s.jsx)(i.A, { isOpen: e, onClose: () => t(!1) }),
          ],
        });
      }
    },
    8998: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 8559));
    },
  },
  (e) => {
    (e.O(0, [534, 481, 323, 441, 255, 358], () => e((e.s = 8998))),
      (_N_E = e.O()));
  },
]);
//# sourceMappingURL=page-546b3cd53843fbce.js.map
