/*
 AngularJS v1.2.16
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (O, U, s) {
  'use strict';
  function t(b) {
    return function () {
      var a = arguments[0], c, a = '[' + (b ? b + ':' : '') + a + '] http://errors.angularjs.org/1.2.16/' + (b ? b + '/' : '') + a;
      for (c = 1; c < arguments.length; c++)
        a = a + (1 == c ? '?' : '&') + 'p' + (c - 1) + '=' + encodeURIComponent('function' == typeof arguments[c] ? arguments[c].toString().replace(/ \{[\s\S]*$/, '') : 'undefined' == typeof arguments[c] ? 'undefined' : 'string' != typeof arguments[c] ? JSON.stringify(arguments[c]) : arguments[c]);
      return Error(a);
    };
  }
  function ab(b) {
    if (null == b || Ca(b))
      return !1;
    var a = b.length;
    return 1 === b.nodeType && a ? !0 : w(b) || M(b) || 0 === a || 'number' === typeof a && 0 < a && a - 1 in b;
  }
  function q(b, a, c) {
    var d;
    if (b)
      if (P(b))
        for (d in b)
          'prototype' == d || ('length' == d || 'name' == d || b.hasOwnProperty && !b.hasOwnProperty(d)) || a.call(c, b[d], d);
      else if (b.forEach && b.forEach !== q)
        b.forEach(a, c);
      else if (ab(b))
        for (d = 0; d < b.length; d++)
          a.call(c, b[d], d);
      else
        for (d in b)
          b.hasOwnProperty(d) && a.call(c, b[d], d);
    return b;
  }
  function Qb(b) {
    var a = [], c;
    for (c in b)
      b.hasOwnProperty(c) && a.push(c);
    return a.sort();
  }
  function Sc(b, a, c) {
    for (var d = Qb(b), e = 0; e < d.length; e++)
      a.call(c, b[d[e]], d[e]);
    return d;
  }
  function Rb(b) {
    return function (a, c) {
      b(c, a);
    };
  }
  function bb() {
    for (var b = ka.length, a; b;) {
      b--;
      a = ka[b].charCodeAt(0);
      if (57 == a)
        return ka[b] = 'A', ka.join('');
      if (90 == a)
        ka[b] = '0';
      else
        return ka[b] = String.fromCharCode(a + 1), ka.join('');
    }
    ka.unshift('0');
    return ka.join('');
  }
  function Sb(b, a) {
    a ? b.$$hashKey = a : delete b.$$hashKey;
  }
  function D(b) {
    var a = b.$$hashKey;
    q(arguments, function (a) {
      a !== b && q(a, function (a, c) {
        b[c] = a;
      });
    });
    Sb(b, a);
    return b;
  }
  function Y(b) {
    return parseInt(b, 10);
  }
  function Tb(b, a) {
    return D(new (D(function () {
    }, { prototype: b }))(), a);
  }
  function C() {
  }
  function Da(b) {
    return b;
  }
  function aa(b) {
    return function () {
      return b;
    };
  }
  function E(b) {
    return 'undefined' === typeof b;
  }
  function B(b) {
    return 'undefined' !== typeof b;
  }
  function X(b) {
    return null != b && 'object' === typeof b;
  }
  function w(b) {
    return 'string' === typeof b;
  }
  function vb(b) {
    return 'number' === typeof b;
  }
  function Na(b) {
    return '[object Date]' === wa.call(b);
  }
  function M(b) {
    return '[object Array]' === wa.call(b);
  }
  function P(b) {
    return 'function' === typeof b;
  }
  function cb(b) {
    return '[object RegExp]' === wa.call(b);
  }
  function Ca(b) {
    return b && b.document && b.location && b.alert && b.setInterval;
  }
  function Tc(b) {
    return !(!b || !(b.nodeName || b.prop && b.attr && b.find));
  }
  function Uc(b, a, c) {
    var d = [];
    q(b, function (b, g, f) {
      d.push(a.call(c, b, g, f));
    });
    return d;
  }
  function db(b, a) {
    if (b.indexOf)
      return b.indexOf(a);
    for (var c = 0; c < b.length; c++)
      if (a === b[c])
        return c;
    return -1;
  }
  function Oa(b, a) {
    var c = db(b, a);
    0 <= c && b.splice(c, 1);
    return a;
  }
  function ba(b, a) {
    if (Ca(b) || b && b.$evalAsync && b.$watch)
      throw Pa('cpws');
    if (a) {
      if (b === a)
        throw Pa('cpi');
      if (M(b))
        for (var c = a.length = 0; c < b.length; c++)
          a.push(ba(b[c]));
      else {
        c = a.$$hashKey;
        q(a, function (b, c) {
          delete a[c];
        });
        for (var d in b)
          a[d] = ba(b[d]);
        Sb(a, c);
      }
    } else
      (a = b) && (M(b) ? a = ba(b, []) : Na(b) ? a = new Date(b.getTime()) : cb(b) ? a = RegExp(b.source) : X(b) && (a = ba(b, {})));
    return a;
  }
  function Ub(b, a) {
    a = a || {};
    for (var c in b)
      !b.hasOwnProperty(c) || '$' === c.charAt(0) && '$' === c.charAt(1) || (a[c] = b[c]);
    return a;
  }
  function xa(b, a) {
    if (b === a)
      return !0;
    if (null === b || null === a)
      return !1;
    if (b !== b && a !== a)
      return !0;
    var c = typeof b, d;
    if (c == typeof a && 'object' == c)
      if (M(b)) {
        if (!M(a))
          return !1;
        if ((c = b.length) == a.length) {
          for (d = 0; d < c; d++)
            if (!xa(b[d], a[d]))
              return !1;
          return !0;
        }
      } else {
        if (Na(b))
          return Na(a) && b.getTime() == a.getTime();
        if (cb(b) && cb(a))
          return b.toString() == a.toString();
        if (b && b.$evalAsync && b.$watch || a && a.$evalAsync && a.$watch || Ca(b) || Ca(a) || M(a))
          return !1;
        c = {};
        for (d in b)
          if ('$' !== d.charAt(0) && !P(b[d])) {
            if (!xa(b[d], a[d]))
              return !1;
            c[d] = !0;
          }
        for (d in a)
          if (!c.hasOwnProperty(d) && '$' !== d.charAt(0) && a[d] !== s && !P(a[d]))
            return !1;
        return !0;
      }
    return !1;
  }
  function Vb() {
    return U.securityPolicy && U.securityPolicy.isActive || U.querySelector && !(!U.querySelector('[ng-csp]') && !U.querySelector('[data-ng-csp]'));
  }
  function eb(b, a) {
    var c = 2 < arguments.length ? ya.call(arguments, 2) : [];
    return !P(a) || a instanceof RegExp ? a : c.length ? function () {
      return arguments.length ? a.apply(b, c.concat(ya.call(arguments, 0))) : a.apply(b, c);
    } : function () {
      return arguments.length ? a.apply(b, arguments) : a.call(b);
    };
  }
  function Vc(b, a) {
    var c = a;
    'string' === typeof b && '$' === b.charAt(0) ? c = s : Ca(a) ? c = '$WINDOW' : a && U === a ? c = '$DOCUMENT' : a && (a.$evalAsync && a.$watch) && (c = '$SCOPE');
    return c;
  }
  function qa(b, a) {
    return 'undefined' === typeof b ? s : JSON.stringify(b, Vc, a ? '  ' : null);
  }
  function Wb(b) {
    return w(b) ? JSON.parse(b) : b;
  }
  function Qa(b) {
    'function' === typeof b ? b = !0 : b && 0 !== b.length ? (b = K('' + b), b = !('f' == b || '0' == b || 'false' == b || 'no' == b || 'n' == b || '[]' == b)) : b = !1;
    return b;
  }
  function ha(b) {
    b = y(b).clone();
    try {
      b.empty();
    } catch (a) {
    }
    var c = y('<div>').append(b).html();
    try {
      return 3 === b[0].nodeType ? K(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
        return '<' + K(b);
      });
    } catch (d) {
      return K(c);
    }
  }
  function Xb(b) {
    try {
      return decodeURIComponent(b);
    } catch (a) {
    }
  }
  function Yb(b) {
    var a = {}, c, d;
    q((b || '').split('&'), function (b) {
      b && (c = b.split('='), d = Xb(c[0]), B(d) && (b = B(c[1]) ? Xb(c[1]) : !0, a[d] ? M(a[d]) ? a[d].push(b) : a[d] = [
        a[d],
        b
      ] : a[d] = b));
    });
    return a;
  }
  function Zb(b) {
    var a = [];
    q(b, function (b, d) {
      M(b) ? q(b, function (b) {
        a.push(za(d, !0) + (!0 === b ? '' : '=' + za(b, !0)));
      }) : a.push(za(d, !0) + (!0 === b ? '' : '=' + za(b, !0)));
    });
    return a.length ? a.join('&') : '';
  }
  function wb(b) {
    return za(b, !0).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+');
  }
  function za(b, a) {
    return encodeURIComponent(b).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, a ? '%20' : '+');
  }
  function Wc(b, a) {
    function c(a) {
      a && d.push(a);
    }
    var d = [b], e, g, f = [
        'ng:app',
        'ng-app',
        'x-ng-app',
        'data-ng-app'
      ], h = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
    q(f, function (a) {
      f[a] = !0;
      c(U.getElementById(a));
      a = a.replace(':', '\\:');
      b.querySelectorAll && (q(b.querySelectorAll('.' + a), c), q(b.querySelectorAll('.' + a + '\\:'), c), q(b.querySelectorAll('[' + a + ']'), c));
    });
    q(d, function (a) {
      if (!e) {
        var b = h.exec(' ' + a.className + ' ');
        b ? (e = a, g = (b[2] || '').replace(/\s+/g, ',')) : q(a.attributes, function (b) {
          !e && f[b.name] && (e = a, g = b.value);
        });
      }
    });
    e && a(e, g ? [g] : []);
  }
  function $b(b, a) {
    var c = function () {
        b = y(b);
        if (b.injector()) {
          var c = b[0] === U ? 'document' : ha(b);
          throw Pa('btstrpd', c);
        }
        a = a || [];
        a.unshift([
          '$provide',
          function (a) {
            a.value('$rootElement', b);
          }
        ]);
        a.unshift('ng');
        c = ac(a);
        c.invoke([
          '$rootScope',
          '$rootElement',
          '$compile',
          '$injector',
          '$animate',
          function (a, b, c, d, e) {
            a.$apply(function () {
              b.data('$injector', d);
              c(b)(a);
            });
          }
        ]);
        return c;
      }, d = /^NG_DEFER_BOOTSTRAP!/;
    if (O && !d.test(O.name))
      return c();
    O.name = O.name.replace(d, '');
    Ea.resumeBootstrap = function (b) {
      q(b, function (b) {
        a.push(b);
      });
      c();
    };
  }
  function fb(b, a) {
    a = a || '_';
    return b.replace(Xc, function (b, d) {
      return (d ? a : '') + b.toLowerCase();
    });
  }
  function xb(b, a, c) {
    if (!b)
      throw Pa('areq', a || '?', c || 'required');
    return b;
  }
  function Ra(b, a, c) {
    c && M(b) && (b = b[b.length - 1]);
    xb(P(b), a, 'not a function, got ' + (b && 'object' == typeof b ? b.constructor.name || 'Object' : typeof b));
    return b;
  }
  function Aa(b, a) {
    if ('hasOwnProperty' === b)
      throw Pa('badname', a);
  }
  function bc(b, a, c) {
    if (!a)
      return b;
    a = a.split('.');
    for (var d, e = b, g = a.length, f = 0; f < g; f++)
      d = a[f], b && (b = (e = b)[d]);
    return !c && P(b) ? eb(e, b) : b;
  }
  function yb(b) {
    var a = b[0];
    b = b[b.length - 1];
    if (a === b)
      return y(a);
    var c = [a];
    do {
      a = a.nextSibling;
      if (!a)
        break;
      c.push(a);
    } while (a !== b);
    return y(c);
  }
  function Yc(b) {
    var a = t('$injector'), c = t('ng');
    b = b.angular || (b.angular = {});
    b.$$minErr = b.$$minErr || t;
    return b.module || (b.module = function () {
      var b = {};
      return function (e, g, f) {
        if ('hasOwnProperty' === e)
          throw c('badname', 'module');
        g && b.hasOwnProperty(e) && (b[e] = null);
        return b[e] || (b[e] = function () {
          function b(a, d, e) {
            return function () {
              c[e || 'push']([
                a,
                d,
                arguments
              ]);
              return n;
            };
          }
          if (!g)
            throw a('nomod', e);
          var c = [], d = [], m = b('$injector', 'invoke'), n = {
              _invokeQueue: c,
              _runBlocks: d,
              requires: g,
              name: e,
              provider: b('$provide', 'provider'),
              factory: b('$provide', 'factory'),
              service: b('$provide', 'service'),
              value: b('$provide', 'value'),
              constant: b('$provide', 'constant', 'unshift'),
              animation: b('$animateProvider', 'register'),
              filter: b('$filterProvider', 'register'),
              controller: b('$controllerProvider', 'register'),
              directive: b('$compileProvider', 'directive'),
              config: m,
              run: function (a) {
                d.push(a);
                return this;
              }
            };
          f && m(f);
          return n;
        }());
      };
    }());
  }
  function Zc(b) {
    D(b, {
      bootstrap: $b,
      copy: ba,
      extend: D,
      equals: xa,
      element: y,
      forEach: q,
      injector: ac,
      noop: C,
      bind: eb,
      toJson: qa,
      fromJson: Wb,
      identity: Da,
      isUndefined: E,
      isDefined: B,
      isString: w,
      isFunction: P,
      isObject: X,
      isNumber: vb,
      isElement: Tc,
      isArray: M,
      version: $c,
      isDate: Na,
      lowercase: K,
      uppercase: Fa,
      callbacks: { counter: 0 },
      $$minErr: t,
      $$csp: Vb
    });
    Sa = Yc(O);
    try {
      Sa('ngLocale');
    } catch (a) {
      Sa('ngLocale', []).provider('$locale', ad);
    }
    Sa('ng', ['ngLocale'], [
      '$provide',
      function (a) {
        a.provider({ $$sanitizeUri: bd });
        a.provider('$compile', cc).directive({
          a: cd,
          input: dc,
          textarea: dc,
          form: dd,
          script: ed,
          select: fd,
          style: gd,
          option: hd,
          ngBind: id,
          ngBindHtml: jd,
          ngBindTemplate: kd,
          ngClass: ld,
          ngClassEven: md,
          ngClassOdd: nd,
          ngCloak: od,
          ngController: pd,
          ngForm: qd,
          ngHide: rd,
          ngIf: sd,
          ngInclude: td,
          ngInit: ud,
          ngNonBindable: vd,
          ngPluralize: wd,
          ngRepeat: xd,
          ngShow: yd,
          ngStyle: zd,
          ngSwitch: Ad,
          ngSwitchWhen: Bd,
          ngSwitchDefault: Cd,
          ngOptions: Dd,
          ngTransclude: Ed,
          ngModel: Fd,
          ngList: Gd,
          ngChange: Hd,
          required: ec,
          ngRequired: ec,
          ngValue: Id
        }).directive({ ngInclude: Jd }).directive(zb).directive(fc);
        a.provider({
          $anchorScroll: Kd,
          $animate: Ld,
          $browser: Md,
          $cacheFactory: Nd,
          $controller: Od,
          $document: Pd,
          $exceptionHandler: Qd,
          $filter: gc,
          $interpolate: Rd,
          $interval: Sd,
          $http: Td,
          $httpBackend: Ud,
          $location: Vd,
          $log: Wd,
          $parse: Xd,
          $rootScope: Yd,
          $q: Zd,
          $sce: $d,
          $sceDelegate: ae,
          $sniffer: be,
          $templateCache: ce,
          $timeout: de,
          $window: ee,
          $$rAF: fe,
          $$asyncCallback: ge
        });
      }
    ]);
  }
  function Ta(b) {
    return b.replace(he, function (a, b, d, e) {
      return e ? d.toUpperCase() : d;
    }).replace(ie, 'Moz$1');
  }
  function Ab(b, a, c, d) {
    function e(b) {
      var e = c && b ? [this.filter(b)] : [this], l = a, k, m, n, p, r, z;
      if (!d || null != b)
        for (; e.length;)
          for (k = e.shift(), m = 0, n = k.length; m < n; m++)
            for (p = y(k[m]), l ? p.triggerHandler('$destroy') : l = !l, r = 0, p = (z = p.children()).length; r < p; r++)
              e.push(Ga(z[r]));
      return g.apply(this, arguments);
    }
    var g = Ga.fn[b], g = g.$original || g;
    e.$original = g;
    Ga.fn[b] = e;
  }
  function N(b) {
    if (b instanceof N)
      return b;
    w(b) && (b = ca(b));
    if (!(this instanceof N)) {
      if (w(b) && '<' != b.charAt(0))
        throw Bb('nosel');
      return new N(b);
    }
    if (w(b)) {
      var a = b;
      b = U;
      var c;
      if (c = je.exec(a))
        b = [b.createElement(c[1])];
      else {
        var d = b, e;
        b = d.createDocumentFragment();
        c = [];
        if (Cb.test(a)) {
          d = b.appendChild(d.createElement('div'));
          e = (ke.exec(a) || [
            '',
            ''
          ])[1].toLowerCase();
          e = ea[e] || ea._default;
          d.innerHTML = '<div>&#160;</div>' + e[1] + a.replace(le, '<$1></$2>') + e[2];
          d.removeChild(d.firstChild);
          for (a = e[0]; a--;)
            d = d.lastChild;
          a = 0;
          for (e = d.childNodes.length; a < e; ++a)
            c.push(d.childNodes[a]);
          d = b.firstChild;
          d.textContent = '';
        } else
          c.push(d.createTextNode(a));
        b.textContent = '';
        b.innerHTML = '';
        b = c;
      }
      Db(this, b);
      y(U.createDocumentFragment()).append(this);
    } else
      Db(this, b);
  }
  function Eb(b) {
    return b.cloneNode(!0);
  }
  function Ha(b) {
    hc(b);
    var a = 0;
    for (b = b.childNodes || []; a < b.length; a++)
      Ha(b[a]);
  }
  function ic(b, a, c, d) {
    if (B(d))
      throw Bb('offargs');
    var e = la(b, 'events');
    la(b, 'handle') && (E(a) ? q(e, function (a, c) {
      Fb(b, c, a);
      delete e[c];
    }) : q(a.split(' '), function (a) {
      E(c) ? (Fb(b, a, e[a]), delete e[a]) : Oa(e[a] || [], c);
    }));
  }
  function hc(b, a) {
    var c = b[gb], d = Ua[c];
    d && (a ? delete Ua[c].data[a] : (d.handle && (d.events.$destroy && d.handle({}, '$destroy'), ic(b)), delete Ua[c], b[gb] = s));
  }
  function la(b, a, c) {
    var d = b[gb], d = Ua[d || -1];
    if (B(c))
      d || (b[gb] = d = ++me, d = Ua[d] = {}), d[a] = c;
    else
      return d && d[a];
  }
  function jc(b, a, c) {
    var d = la(b, 'data'), e = B(c), g = !e && B(a), f = g && !X(a);
    d || f || la(b, 'data', d = {});
    if (e)
      d[a] = c;
    else if (g) {
      if (f)
        return d && d[a];
      D(d, a);
    } else
      return d;
  }
  function Gb(b, a) {
    return b.getAttribute ? -1 < (' ' + (b.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').indexOf(' ' + a + ' ') : !1;
  }
  function hb(b, a) {
    a && b.setAttribute && q(a.split(' '), function (a) {
      b.setAttribute('class', ca((' ' + (b.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').replace(' ' + ca(a) + ' ', ' ')));
    });
  }
  function ib(b, a) {
    if (a && b.setAttribute) {
      var c = (' ' + (b.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ');
      q(a.split(' '), function (a) {
        a = ca(a);
        -1 === c.indexOf(' ' + a + ' ') && (c += a + ' ');
      });
      b.setAttribute('class', ca(c));
    }
  }
  function Db(b, a) {
    if (a) {
      a = a.nodeName || !B(a.length) || Ca(a) ? [a] : a;
      for (var c = 0; c < a.length; c++)
        b.push(a[c]);
    }
  }
  function kc(b, a) {
    return jb(b, '$' + (a || 'ngController') + 'Controller');
  }
  function jb(b, a, c) {
    b = y(b);
    9 == b[0].nodeType && (b = b.find('html'));
    for (a = M(a) ? a : [a]; b.length;) {
      for (var d = b[0], e = 0, g = a.length; e < g; e++)
        if ((c = b.data(a[e])) !== s)
          return c;
      b = y(d.parentNode || 11 === d.nodeType && d.host);
    }
  }
  function lc(b) {
    for (var a = 0, c = b.childNodes; a < c.length; a++)
      Ha(c[a]);
    for (; b.firstChild;)
      b.removeChild(b.firstChild);
  }
  function mc(b, a) {
    var c = kb[a.toLowerCase()];
    return c && nc[b.nodeName] && c;
  }
  function ne(b, a) {
    var c = function (c, e) {
      c.preventDefault || (c.preventDefault = function () {
        c.returnValue = !1;
      });
      c.stopPropagation || (c.stopPropagation = function () {
        c.cancelBubble = !0;
      });
      c.target || (c.target = c.srcElement || U);
      if (E(c.defaultPrevented)) {
        var g = c.preventDefault;
        c.preventDefault = function () {
          c.defaultPrevented = !0;
          g.call(c);
        };
        c.defaultPrevented = !1;
      }
      c.isDefaultPrevented = function () {
        return c.defaultPrevented || !1 === c.returnValue;
      };
      var f = Ub(a[e || c.type] || []);
      q(f, function (a) {
        a.call(b, c);
      });
      8 >= S ? (c.preventDefault = null, c.stopPropagation = null, c.isDefaultPrevented = null) : (delete c.preventDefault, delete c.stopPropagation, delete c.isDefaultPrevented);
    };
    c.elem = b;
    return c;
  }
  function Ia(b) {
    var a = typeof b, c;
    'object' == a && null !== b ? 'function' == typeof (c = b.$$hashKey) ? c = b.$$hashKey() : c === s && (c = b.$$hashKey = bb()) : c = b;
    return a + ':' + c;
  }
  function Va(b) {
    q(b, this.put, this);
  }
  function oc(b) {
    var a, c;
    'function' == typeof b ? (a = b.$inject) || (a = [], b.length && (c = b.toString().replace(oe, ''), c = c.match(pe), q(c[1].split(qe), function (b) {
      b.replace(re, function (b, c, d) {
        a.push(d);
      });
    })), b.$inject = a) : M(b) ? (c = b.length - 1, Ra(b[c], 'fn'), a = b.slice(0, c)) : Ra(b, 'fn', !0);
    return a;
  }
  function ac(b) {
    function a(a) {
      return function (b, c) {
        if (X(b))
          q(b, Rb(a));
        else
          return a(b, c);
      };
    }
    function c(a, b) {
      Aa(a, 'service');
      if (P(b) || M(b))
        b = n.instantiate(b);
      if (!b.$get)
        throw Wa('pget', a);
      return m[a + h] = b;
    }
    function d(a, b) {
      return c(a, { $get: b });
    }
    function e(a) {
      var b = [], c, d, g, h;
      q(a, function (a) {
        if (!k.get(a)) {
          k.put(a, !0);
          try {
            if (w(a))
              for (c = Sa(a), b = b.concat(e(c.requires)).concat(c._runBlocks), d = c._invokeQueue, g = 0, h = d.length; g < h; g++) {
                var f = d[g], l = n.get(f[0]);
                l[f[1]].apply(l, f[2]);
              }
            else
              P(a) ? b.push(n.invoke(a)) : M(a) ? b.push(n.invoke(a)) : Ra(a, 'module');
          } catch (m) {
            throw M(a) && (a = a[a.length - 1]), m.message && (m.stack && -1 == m.stack.indexOf(m.message)) && (m = m.message + '\n' + m.stack), Wa('modulerr', a, m.stack || m.message || m);
          }
        }
      });
      return b;
    }
    function g(a, b) {
      function c(d) {
        if (a.hasOwnProperty(d)) {
          if (a[d] === f)
            throw Wa('cdep', l.join(' <- '));
          return a[d];
        }
        try {
          return l.unshift(d), a[d] = f, a[d] = b(d);
        } catch (e) {
          throw a[d] === f && delete a[d], e;
        } finally {
          l.shift();
        }
      }
      function d(a, b, e) {
        var g = [], h = oc(a), f, l, k;
        l = 0;
        for (f = h.length; l < f; l++) {
          k = h[l];
          if ('string' !== typeof k)
            throw Wa('itkn', k);
          g.push(e && e.hasOwnProperty(k) ? e[k] : c(k));
        }
        a.$inject || (a = a[f]);
        return a.apply(b, g);
      }
      return {
        invoke: d,
        instantiate: function (a, b) {
          var c = function () {
            }, e;
          c.prototype = (M(a) ? a[a.length - 1] : a).prototype;
          c = new c();
          e = d(a, c, b);
          return X(e) || P(e) ? e : c;
        },
        get: c,
        annotate: oc,
        has: function (b) {
          return m.hasOwnProperty(b + h) || a.hasOwnProperty(b);
        }
      };
    }
    var f = {}, h = 'Provider', l = [], k = new Va(), m = {
        $provide: {
          provider: a(c),
          factory: a(d),
          service: a(function (a, b) {
            return d(a, [
              '$injector',
              function (a) {
                return a.instantiate(b);
              }
            ]);
          }),
          value: a(function (a, b) {
            return d(a, aa(b));
          }),
          constant: a(function (a, b) {
            Aa(a, 'constant');
            m[a] = b;
            p[a] = b;
          }),
          decorator: function (a, b) {
            var c = n.get(a + h), d = c.$get;
            c.$get = function () {
              var a = r.invoke(d, c);
              return r.invoke(b, null, { $delegate: a });
            };
          }
        }
      }, n = m.$injector = g(m, function () {
        throw Wa('unpr', l.join(' <- '));
      }), p = {}, r = p.$injector = g(p, function (a) {
        a = n.get(a + h);
        return r.invoke(a.$get, a);
      });
    q(e(b), function (a) {
      r.invoke(a || C);
    });
    return r;
  }
  function Kd() {
    var b = !0;
    this.disableAutoScrolling = function () {
      b = !1;
    };
    this.$get = [
      '$window',
      '$location',
      '$rootScope',
      function (a, c, d) {
        function e(a) {
          var b = null;
          q(a, function (a) {
            b || 'a' !== K(a.nodeName) || (b = a);
          });
          return b;
        }
        function g() {
          var b = c.hash(), d;
          b ? (d = f.getElementById(b)) ? d.scrollIntoView() : (d = e(f.getElementsByName(b))) ? d.scrollIntoView() : 'top' === b && a.scrollTo(0, 0) : a.scrollTo(0, 0);
        }
        var f = a.document;
        b && d.$watch(function () {
          return c.hash();
        }, function () {
          d.$evalAsync(g);
        });
        return g;
      }
    ];
  }
  function ge() {
    this.$get = [
      '$$rAF',
      '$timeout',
      function (b, a) {
        return b.supported ? function (a) {
          return b(a);
        } : function (b) {
          return a(b, 0, !1);
        };
      }
    ];
  }
  function se(b, a, c, d) {
    function e(a) {
      try {
        a.apply(null, ya.call(arguments, 1));
      } finally {
        if (z--, 0 === z)
          for (; u.length;)
            try {
              u.pop()();
            } catch (b) {
              c.error(b);
            }
      }
    }
    function g(a, b) {
      (function T() {
        q(F, function (a) {
          a();
        });
        v = b(T, a);
      }());
    }
    function f() {
      x = null;
      J != h.url() && (J = h.url(), q(ma, function (a) {
        a(h.url());
      }));
    }
    var h = this, l = a[0], k = b.location, m = b.history, n = b.setTimeout, p = b.clearTimeout, r = {};
    h.isMock = !1;
    var z = 0, u = [];
    h.$$completeOutstandingRequest = e;
    h.$$incOutstandingRequestCount = function () {
      z++;
    };
    h.notifyWhenNoOutstandingRequests = function (a) {
      q(F, function (a) {
        a();
      });
      0 === z ? a() : u.push(a);
    };
    var F = [], v;
    h.addPollFn = function (a) {
      E(v) && g(100, n);
      F.push(a);
      return a;
    };
    var J = k.href, A = a.find('base'), x = null;
    h.url = function (a, c) {
      k !== b.location && (k = b.location);
      m !== b.history && (m = b.history);
      if (a) {
        if (J != a)
          return J = a, d.history ? c ? m.replaceState(null, '', a) : (m.pushState(null, '', a), A.attr('href', A.attr('href'))) : (x = a, c ? k.replace(a) : k.href = a), h;
      } else
        return x || k.href.replace(/%27/g, '\'');
    };
    var ma = [], L = !1;
    h.onUrlChange = function (a) {
      if (!L) {
        if (d.history)
          y(b).on('popstate', f);
        if (d.hashchange)
          y(b).on('hashchange', f);
        else
          h.addPollFn(f);
        L = !0;
      }
      ma.push(a);
      return a;
    };
    h.baseHref = function () {
      var a = A.attr('href');
      return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, '') : '';
    };
    var Q = {}, da = '', H = h.baseHref();
    h.cookies = function (a, b) {
      var d, e, g, h;
      if (a)
        b === s ? l.cookie = escape(a) + '=;path=' + H + ';expires=Thu, 01 Jan 1970 00:00:00 GMT' : w(b) && (d = (l.cookie = escape(a) + '=' + escape(b) + ';path=' + H).length + 1, 4096 < d && c.warn('Cookie \'' + a + '\' possibly not set or overflowed because it was too large (' + d + ' > 4096 bytes)!'));
      else {
        if (l.cookie !== da)
          for (da = l.cookie, d = da.split('; '), Q = {}, g = 0; g < d.length; g++)
            e = d[g], h = e.indexOf('='), 0 < h && (a = unescape(e.substring(0, h)), Q[a] === s && (Q[a] = unescape(e.substring(h + 1))));
        return Q;
      }
    };
    h.defer = function (a, b) {
      var c;
      z++;
      c = n(function () {
        delete r[c];
        e(a);
      }, b || 0);
      r[c] = !0;
      return c;
    };
    h.defer.cancel = function (a) {
      return r[a] ? (delete r[a], p(a), e(C), !0) : !1;
    };
  }
  function Md() {
    this.$get = [
      '$window',
      '$log',
      '$sniffer',
      '$document',
      function (b, a, c, d) {
        return new se(b, d, a, c);
      }
    ];
  }
  function Nd() {
    this.$get = function () {
      function b(b, d) {
        function e(a) {
          a != n && (p ? p == a && (p = a.n) : p = a, g(a.n, a.p), g(a, n), n = a, n.n = null);
        }
        function g(a, b) {
          a != b && (a && (a.p = b), b && (b.n = a));
        }
        if (b in a)
          throw t('$cacheFactory')('iid', b);
        var f = 0, h = D({}, d, { id: b }), l = {}, k = d && d.capacity || Number.MAX_VALUE, m = {}, n = null, p = null;
        return a[b] = {
          put: function (a, b) {
            if (k < Number.MAX_VALUE) {
              var c = m[a] || (m[a] = { key: a });
              e(c);
            }
            if (!E(b))
              return a in l || f++, l[a] = b, f > k && this.remove(p.key), b;
          },
          get: function (a) {
            if (k < Number.MAX_VALUE) {
              var b = m[a];
              if (!b)
                return;
              e(b);
            }
            return l[a];
          },
          remove: function (a) {
            if (k < Number.MAX_VALUE) {
              var b = m[a];
              if (!b)
                return;
              b == n && (n = b.p);
              b == p && (p = b.n);
              g(b.n, b.p);
              delete m[a];
            }
            delete l[a];
            f--;
          },
          removeAll: function () {
            l = {};
            f = 0;
            m = {};
            n = p = null;
          },
          destroy: function () {
            m = h = l = null;
            delete a[b];
          },
          info: function () {
            return D({}, h, { size: f });
          }
        };
      }
      var a = {};
      b.info = function () {
        var b = {};
        q(a, function (a, e) {
          b[e] = a.info();
        });
        return b;
      };
      b.get = function (b) {
        return a[b];
      };
      return b;
    };
  }
  function ce() {
    this.$get = [
      '$cacheFactory',
      function (b) {
        return b('templates');
      }
    ];
  }
  function cc(b, a) {
    var c = {}, d = 'Directive', e = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/, g = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/, f = /^(on[a-z]+|formaction)$/;
    this.directive = function l(a, e) {
      Aa(a, 'directive');
      w(a) ? (xb(e, 'directiveFactory'), c.hasOwnProperty(a) || (c[a] = [], b.factory(a + d, [
        '$injector',
        '$exceptionHandler',
        function (b, d) {
          var e = [];
          q(c[a], function (c, g) {
            try {
              var f = b.invoke(c);
              P(f) ? f = { compile: aa(f) } : !f.compile && f.link && (f.compile = aa(f.link));
              f.priority = f.priority || 0;
              f.index = g;
              f.name = f.name || a;
              f.require = f.require || f.controller && f.name;
              f.restrict = f.restrict || 'A';
              e.push(f);
            } catch (l) {
              d(l);
            }
          });
          return e;
        }
      ])), c[a].push(e)) : q(a, Rb(l));
      return this;
    };
    this.aHrefSanitizationWhitelist = function (b) {
      return B(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist();
    };
    this.imgSrcSanitizationWhitelist = function (b) {
      return B(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist();
    };
    this.$get = [
      '$injector',
      '$interpolate',
      '$exceptionHandler',
      '$http',
      '$templateCache',
      '$parse',
      '$controller',
      '$rootScope',
      '$document',
      '$sce',
      '$animate',
      '$$sanitizeUri',
      function (a, b, m, n, p, r, z, u, F, v, J, A) {
        function x(a, b, c, d, e) {
          a instanceof y || (a = y(a));
          q(a, function (b, c) {
            3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = y(b).wrap('<span></span>').parent()[0]);
          });
          var g = L(a, b, a, c, d, e);
          ma(a, 'ng-scope');
          return function (b, c, d) {
            xb(b, 'scope');
            var e = c ? Ja.clone.call(a) : a;
            q(d, function (a, b) {
              e.data('$' + b + 'Controller', a);
            });
            d = 0;
            for (var f = e.length; d < f; d++) {
              var l = e[d].nodeType;
              1 !== l && 9 !== l || e.eq(d).data('$scope', b);
            }
            c && c(e, b);
            g && g(b, e, e);
            return e;
          };
        }
        function ma(a, b) {
          try {
            a.addClass(b);
          } catch (c) {
          }
        }
        function L(a, b, c, d, e, g) {
          function f(a, c, d, e) {
            var g, k, m, r, n, p, z;
            g = c.length;
            var I = Array(g);
            for (n = 0; n < g; n++)
              I[n] = c[n];
            z = n = 0;
            for (p = l.length; n < p; z++)
              k = I[z], c = l[n++], g = l[n++], m = y(k), c ? (c.scope ? (r = a.$new(), m.data('$scope', r)) : r = a, (m = c.transclude) || !e && b ? c(g, r, k, d, Q(a, m || b)) : c(g, r, k, d, e)) : g && g(a, k.childNodes, s, e);
          }
          for (var l = [], k, m, r, n, p = 0; p < a.length; p++)
            k = new Hb(), m = da(a[p], [], k, 0 === p ? d : s, e), (g = m.length ? ia(m, a[p], k, b, c, null, [], [], g) : null) && g.scope && ma(y(a[p]), 'ng-scope'), k = g && g.terminal || !(r = a[p].childNodes) || !r.length ? null : L(r, g ? g.transclude : b), l.push(g, k), n = n || g || k, g = null;
          return n ? f : null;
        }
        function Q(a, b) {
          return function (c, d, e) {
            var g = !1;
            c || (c = a.$new(), g = c.$$transcluded = !0);
            d = b(c, d, e);
            if (g)
              d.on('$destroy', eb(c, c.$destroy));
            return d;
          };
        }
        function da(a, b, c, d, f) {
          var k = c.$attr, l;
          switch (a.nodeType) {
          case 1:
            T(b, na(Ka(a).toLowerCase()), 'E', d, f);
            var m, r, n;
            l = a.attributes;
            for (var p = 0, z = l && l.length; p < z; p++) {
              var u = !1, F = !1;
              m = l[p];
              if (!S || 8 <= S || m.specified) {
                r = m.name;
                n = na(r);
                W.test(n) && (r = fb(n.substr(6), '-'));
                var J = n.replace(/(Start|End)$/, '');
                n === J + 'Start' && (u = r, F = r.substr(0, r.length - 5) + 'end', r = r.substr(0, r.length - 6));
                n = na(r.toLowerCase());
                k[n] = r;
                c[n] = m = ca(m.value);
                mc(a, n) && (c[n] = !0);
                N(a, b, m, n);
                T(b, n, 'A', d, f, u, F);
              }
            }
            a = a.className;
            if (w(a) && '' !== a)
              for (; l = g.exec(a);)
                n = na(l[2]), T(b, n, 'C', d, f) && (c[n] = ca(l[3])), a = a.substr(l.index + l[0].length);
            break;
          case 3:
            t(b, a.nodeValue);
            break;
          case 8:
            try {
              if (l = e.exec(a.nodeValue))
                n = na(l[1]), T(b, n, 'M', d, f) && (c[n] = ca(l[2]));
            } catch (x) {
            }
          }
          b.sort(E);
          return b;
        }
        function H(a, b, c) {
          var d = [], e = 0;
          if (b && a.hasAttribute && a.hasAttribute(b)) {
            do {
              if (!a)
                throw ja('uterdir', b, c);
              1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
              d.push(a);
              a = a.nextSibling;
            } while (0 < e);
          } else
            d.push(a);
          return y(d);
        }
        function R(a, b, c) {
          return function (d, e, g, f, l) {
            e = H(e[0], b, c);
            return a(d, e, g, f, l);
          };
        }
        function ia(a, c, d, e, g, f, l, n, p) {
          function u(a, b, c, d) {
            if (a) {
              c && (a = R(a, c, d));
              a.require = G.require;
              if (Q === G || G.$$isolateScope)
                a = qc(a, { isolateScope: !0 });
              l.push(a);
            }
            if (b) {
              c && (b = R(b, c, d));
              b.require = G.require;
              if (Q === G || G.$$isolateScope)
                b = qc(b, { isolateScope: !0 });
              n.push(b);
            }
          }
          function F(a, b, c) {
            var d, e = 'data', g = !1;
            if (w(a)) {
              for (; '^' == (d = a.charAt(0)) || '?' == d;)
                a = a.substr(1), '^' == d && (e = 'inheritedData'), g = g || '?' == d;
              d = null;
              c && 'data' === e && (d = c[a]);
              d = d || b[e]('$' + a + 'Controller');
              if (!d && !g)
                throw ja('ctreq', a, t);
            } else
              M(a) && (d = [], q(a, function (a) {
                d.push(F(a, b, c));
              }));
            return d;
          }
          function J(a, e, g, f, p) {
            function u(a, b) {
              var c;
              2 > arguments.length && (b = a, a = s);
              D && (c = lb);
              return p(a, b, c);
            }
            var I, x, v, A, R, H, lb = {}, da;
            I = c === g ? d : Ub(d, new Hb(y(g), d.$attr));
            x = I.$$element;
            if (Q) {
              var T = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
              f = y(g);
              H = e.$new(!0);
              ia && ia === Q.$$originalDirective ? f.data('$isolateScope', H) : f.data('$isolateScopeNoTemplate', H);
              ma(f, 'ng-isolate-scope');
              q(Q.scope, function (a, c) {
                var d = a.match(T) || [], g = d[3] || c, f = '?' == d[2], d = d[1], l, m, n, p;
                H.$$isolateBindings[c] = d + g;
                switch (d) {
                case '@':
                  I.$observe(g, function (a) {
                    H[c] = a;
                  });
                  I.$$observers[g].$$scope = e;
                  I[g] && (H[c] = b(I[g])(e));
                  break;
                case '=':
                  if (f && !I[g])
                    break;
                  m = r(I[g]);
                  p = m.literal ? xa : function (a, b) {
                    return a === b;
                  };
                  n = m.assign || function () {
                    l = H[c] = m(e);
                    throw ja('nonassign', I[g], Q.name);
                  };
                  l = H[c] = m(e);
                  H.$watch(function () {
                    var a = m(e);
                    p(a, H[c]) || (p(a, l) ? n(e, a = H[c]) : H[c] = a);
                    return l = a;
                  }, null, m.literal);
                  break;
                case '&':
                  m = r(I[g]);
                  H[c] = function (a) {
                    return m(e, a);
                  };
                  break;
                default:
                  throw ja('iscp', Q.name, c, a);
                }
              });
            }
            da = p && u;
            L && q(L, function (a) {
              var b = {
                  $scope: a === Q || a.$$isolateScope ? H : e,
                  $element: x,
                  $attrs: I,
                  $transclude: da
                }, c;
              R = a.controller;
              '@' == R && (R = I[a.name]);
              c = z(R, b);
              lb[a.name] = c;
              D || x.data('$' + a.name + 'Controller', c);
              a.controllerAs && (b.$scope[a.controllerAs] = c);
            });
            f = 0;
            for (v = l.length; f < v; f++)
              try {
                A = l[f], A(A.isolateScope ? H : e, x, I, A.require && F(A.require, x, lb), da);
              } catch (G) {
                m(G, ha(x));
              }
            f = e;
            Q && (Q.template || null === Q.templateUrl) && (f = H);
            a && a(f, g.childNodes, s, p);
            for (f = n.length - 1; 0 <= f; f--)
              try {
                A = n[f], A(A.isolateScope ? H : e, x, I, A.require && F(A.require, x, lb), da);
              } catch (B) {
                m(B, ha(x));
              }
          }
          p = p || {};
          for (var v = -Number.MAX_VALUE, A, L = p.controllerDirectives, Q = p.newIsolateScopeDirective, ia = p.templateDirective, T = p.nonTlbTranscludeDirective, E = !1, D = p.hasElementTranscludeDirective, Z = d.$$element = y(c), G, t, V, Xa = e, O, N = 0, S = a.length; N < S; N++) {
            G = a[N];
            var ra = G.$$start, W = G.$$end;
            ra && (Z = H(c, ra, W));
            V = s;
            if (v > G.priority)
              break;
            if (V = G.scope)
              A = A || G, G.templateUrl || (K('new/isolated scope', Q, G, Z), X(V) && (Q = G));
            t = G.name;
            !G.templateUrl && G.controller && (V = G.controller, L = L || {}, K('\'' + t + '\' controller', L[t], G, Z), L[t] = G);
            if (V = G.transclude)
              E = !0, G.$$tlb || (K('transclusion', T, G, Z), T = G), 'element' == V ? (D = !0, v = G.priority, V = H(c, ra, W), Z = d.$$element = y(U.createComment(' ' + t + ': ' + d[t] + ' ')), c = Z[0], mb(g, y(ya.call(V, 0)), c), Xa = x(V, e, v, f && f.name, { nonTlbTranscludeDirective: T })) : (V = y(Eb(c)).contents(), Z.empty(), Xa = x(V, e));
            if (G.template)
              if (K('template', ia, G, Z), ia = G, V = P(G.template) ? G.template(Z, d) : G.template, V = Y(V), G.replace) {
                f = G;
                V = Cb.test(V) ? y(V) : [];
                c = V[0];
                if (1 != V.length || 1 !== c.nodeType)
                  throw ja('tplrt', t, '');
                mb(g, Z, c);
                S = { $attr: {} };
                V = da(c, [], S);
                var $ = a.splice(N + 1, a.length - (N + 1));
                Q && pc(V);
                a = a.concat(V).concat($);
                B(d, S);
                S = a.length;
              } else
                Z.html(V);
            if (G.templateUrl)
              K('template', ia, G, Z), ia = G, G.replace && (f = G), J = C(a.splice(N, a.length - N), Z, d, g, Xa, l, n, {
                controllerDirectives: L,
                newIsolateScopeDirective: Q,
                templateDirective: ia,
                nonTlbTranscludeDirective: T
              }), S = a.length;
            else if (G.compile)
              try {
                O = G.compile(Z, d, Xa), P(O) ? u(null, O, ra, W) : O && u(O.pre, O.post, ra, W);
              } catch (aa) {
                m(aa, ha(Z));
              }
            G.terminal && (J.terminal = !0, v = Math.max(v, G.priority));
          }
          J.scope = A && !0 === A.scope;
          J.transclude = E && Xa;
          p.hasElementTranscludeDirective = D;
          return J;
        }
        function pc(a) {
          for (var b = 0, c = a.length; b < c; b++)
            a[b] = Tb(a[b], { $$isolateScope: !0 });
        }
        function T(b, e, g, f, k, n, r) {
          if (e === k)
            return null;
          k = null;
          if (c.hasOwnProperty(e)) {
            var p;
            e = a.get(e + d);
            for (var z = 0, u = e.length; z < u; z++)
              try {
                p = e[z], (f === s || f > p.priority) && -1 != p.restrict.indexOf(g) && (n && (p = Tb(p, {
                  $$start: n,
                  $$end: r
                })), b.push(p), k = p);
              } catch (F) {
                m(F);
              }
          }
          return k;
        }
        function B(a, b) {
          var c = b.$attr, d = a.$attr, e = a.$$element;
          q(a, function (d, e) {
            '$' != e.charAt(0) && (b[e] && (d += ('style' === e ? ';' : ' ') + b[e]), a.$set(e, d, !0, c[e]));
          });
          q(b, function (b, g) {
            'class' == g ? (ma(e, b), a['class'] = (a['class'] ? a['class'] + ' ' : '') + b) : 'style' == g ? (e.attr('style', e.attr('style') + ';' + b), a.style = (a.style ? a.style + ';' : '') + b) : '$' == g.charAt(0) || a.hasOwnProperty(g) || (a[g] = b, d[g] = c[g]);
          });
        }
        function C(a, b, c, d, e, g, f, l) {
          var k = [], m, r, z = b[0], u = a.shift(), F = D({}, u, {
              templateUrl: null,
              transclude: null,
              replace: null,
              $$originalDirective: u
            }), x = P(u.templateUrl) ? u.templateUrl(b, c) : u.templateUrl;
          b.empty();
          n.get(v.getTrustedResourceUrl(x), { cache: p }).success(function (n) {
            var p, J;
            n = Y(n);
            if (u.replace) {
              n = Cb.test(n) ? y(n) : [];
              p = n[0];
              if (1 != n.length || 1 !== p.nodeType)
                throw ja('tplrt', u.name, x);
              n = { $attr: {} };
              mb(d, b, p);
              var v = da(p, [], n);
              X(u.scope) && pc(v);
              a = v.concat(a);
              B(c, n);
            } else
              p = z, b.html(n);
            a.unshift(F);
            m = ia(a, p, c, e, b, u, g, f, l);
            q(d, function (a, c) {
              a == p && (d[c] = b[0]);
            });
            for (r = L(b[0].childNodes, e); k.length;) {
              n = k.shift();
              J = k.shift();
              var A = k.shift(), R = k.shift(), v = b[0];
              if (J !== z) {
                var H = J.className;
                l.hasElementTranscludeDirective && u.replace || (v = Eb(p));
                mb(A, y(J), v);
                ma(y(v), H);
              }
              J = m.transclude ? Q(n, m.transclude) : R;
              m(r, n, v, d, J);
            }
            k = null;
          }).error(function (a, b, c, d) {
            throw ja('tpload', d.url);
          });
          return function (a, b, c, d, e) {
            k ? (k.push(b), k.push(c), k.push(d), k.push(e)) : m(r, b, c, d, e);
          };
        }
        function E(a, b) {
          var c = b.priority - a.priority;
          return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
        }
        function K(a, b, c, d) {
          if (b)
            throw ja('multidir', b.name, c.name, a, ha(d));
        }
        function t(a, c) {
          var d = b(c, !0);
          d && a.push({
            priority: 0,
            compile: aa(function (a, b) {
              var c = b.parent(), e = c.data('$binding') || [];
              e.push(d);
              ma(c.data('$binding', e), 'ng-binding');
              a.$watch(d, function (a) {
                b[0].nodeValue = a;
              });
            })
          });
        }
        function O(a, b) {
          if ('srcdoc' == b)
            return v.HTML;
          var c = Ka(a);
          if ('xlinkHref' == b || 'FORM' == c && 'action' == b || 'IMG' != c && ('src' == b || 'ngSrc' == b))
            return v.RESOURCE_URL;
        }
        function N(a, c, d, e) {
          var g = b(d, !0);
          if (g) {
            if ('multiple' === e && 'SELECT' === Ka(a))
              throw ja('selmulti', ha(a));
            c.push({
              priority: 100,
              compile: function () {
                return {
                  pre: function (c, d, l) {
                    d = l.$$observers || (l.$$observers = {});
                    if (f.test(e))
                      throw ja('nodomevents');
                    if (g = b(l[e], !0, O(a, e)))
                      l[e] = g(c), (d[e] || (d[e] = [])).$$inter = !0, (l.$$observers && l.$$observers[e].$$scope || c).$watch(g, function (a, b) {
                        'class' === e && a != b ? l.$updateClass(a, b) : l.$set(e, a);
                      });
                  }
                };
              }
            });
          }
        }
        function mb(a, b, c) {
          var d = b[0], e = b.length, g = d.parentNode, f, l;
          if (a)
            for (f = 0, l = a.length; f < l; f++)
              if (a[f] == d) {
                a[f++] = c;
                l = f + e - 1;
                for (var k = a.length; f < k; f++, l++)
                  l < k ? a[f] = a[l] : delete a[f];
                a.length -= e - 1;
                break;
              }
          g && g.replaceChild(c, d);
          a = U.createDocumentFragment();
          a.appendChild(d);
          c[y.expando] = d[y.expando];
          d = 1;
          for (e = b.length; d < e; d++)
            g = b[d], y(g).remove(), a.appendChild(g), delete b[d];
          b[0] = c;
          b.length = 1;
        }
        function qc(a, b) {
          return D(function () {
            return a.apply(null, arguments);
          }, a, b);
        }
        var Hb = function (a, b) {
          this.$$element = a;
          this.$attr = b || {};
        };
        Hb.prototype = {
          $normalize: na,
          $addClass: function (a) {
            a && 0 < a.length && J.addClass(this.$$element, a);
          },
          $removeClass: function (a) {
            a && 0 < a.length && J.removeClass(this.$$element, a);
          },
          $updateClass: function (a, b) {
            var c = rc(a, b), d = rc(b, a);
            0 === c.length ? J.removeClass(this.$$element, d) : 0 === d.length ? J.addClass(this.$$element, c) : J.setClass(this.$$element, c, d);
          },
          $set: function (a, b, c, d) {
            var e = mc(this.$$element[0], a);
            e && (this.$$element.prop(a, b), d = e);
            this[a] = b;
            d ? this.$attr[a] = d : (d = this.$attr[a]) || (this.$attr[a] = d = fb(a, '-'));
            e = Ka(this.$$element);
            if ('A' === e && 'href' === a || 'IMG' === e && 'src' === a)
              this[a] = b = A(b, 'src' === a);
            !1 !== c && (null === b || b === s ? this.$$element.removeAttr(d) : this.$$element.attr(d, b));
            (c = this.$$observers) && q(c[a], function (a) {
              try {
                a(b);
              } catch (c) {
                m(c);
              }
            });
          },
          $observe: function (a, b) {
            var c = this, d = c.$$observers || (c.$$observers = {}), e = d[a] || (d[a] = []);
            e.push(b);
            u.$evalAsync(function () {
              e.$$inter || b(c[a]);
            });
            return b;
          }
        };
        var Z = b.startSymbol(), ra = b.endSymbol(), Y = '{{' == Z || '}}' == ra ? Da : function (a) {
            return a.replace(/\{\{/g, Z).replace(/}}/g, ra);
          }, W = /^ngAttr[A-Z]/;
        return x;
      }
    ];
  }
  function na(b) {
    return Ta(b.replace(te, ''));
  }
  function rc(b, a) {
    var c = '', d = b.split(/\s+/), e = a.split(/\s+/), g = 0;
    a:
      for (; g < d.length; g++) {
        for (var f = d[g], h = 0; h < e.length; h++)
          if (f == e[h])
            continue a;
        c += (0 < c.length ? ' ' : '') + f;
      }
    return c;
  }
  function Od() {
    var b = {}, a = /^(\S+)(\s+as\s+(\w+))?$/;
    this.register = function (a, d) {
      Aa(a, 'controller');
      X(a) ? D(b, a) : b[a] = d;
    };
    this.$get = [
      '$injector',
      '$window',
      function (c, d) {
        return function (e, g) {
          var f, h, l;
          w(e) && (f = e.match(a), h = f[1], l = f[3], e = b.hasOwnProperty(h) ? b[h] : bc(g.$scope, h, !0) || bc(d, h, !0), Ra(e, h, !0));
          f = c.instantiate(e, g);
          if (l) {
            if (!g || 'object' != typeof g.$scope)
              throw t('$controller')('noscp', h || e.name, l);
            g.$scope[l] = f;
          }
          return f;
        };
      }
    ];
  }
  function Pd() {
    this.$get = [
      '$window',
      function (b) {
        return y(b.document);
      }
    ];
  }
  function Qd() {
    this.$get = [
      '$log',
      function (b) {
        return function (a, c) {
          b.error.apply(b, arguments);
        };
      }
    ];
  }
  function sc(b) {
    var a = {}, c, d, e;
    if (!b)
      return a;
    q(b.split('\n'), function (b) {
      e = b.indexOf(':');
      c = K(ca(b.substr(0, e)));
      d = ca(b.substr(e + 1));
      c && (a[c] = a[c] ? a[c] + (', ' + d) : d);
    });
    return a;
  }
  function tc(b) {
    var a = X(b) ? b : s;
    return function (c) {
      a || (a = sc(b));
      return c ? a[K(c)] || null : a;
    };
  }
  function uc(b, a, c) {
    if (P(c))
      return c(b, a);
    q(c, function (c) {
      b = c(b, a);
    });
    return b;
  }
  function Td() {
    var b = /^\s*(\[|\{[^\{])/, a = /[\}\]]\s*$/, c = /^\)\]\}',?\n/, d = { 'Content-Type': 'application/json;charset=utf-8' }, e = this.defaults = {
        transformResponse: [function (d) {
            w(d) && (d = d.replace(c, ''), b.test(d) && a.test(d) && (d = Wb(d)));
            return d;
          }],
        transformRequest: [function (a) {
            return X(a) && '[object File]' !== wa.call(a) && '[object Blob]' !== wa.call(a) ? qa(a) : a;
          }],
        headers: {
          common: { Accept: 'application/json, text/plain, */*' },
          post: ba(d),
          put: ba(d),
          patch: ba(d)
        },
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN'
      }, g = this.interceptors = [], f = this.responseInterceptors = [];
    this.$get = [
      '$httpBackend',
      '$browser',
      '$cacheFactory',
      '$rootScope',
      '$q',
      '$injector',
      function (a, b, c, d, n, p) {
        function r(a) {
          function c(a) {
            var b = D({}, a, { data: uc(a.data, a.headers, d.transformResponse) });
            return 200 <= a.status && 300 > a.status ? b : n.reject(b);
          }
          var d = {
              method: 'get',
              transformRequest: e.transformRequest,
              transformResponse: e.transformResponse
            }, g = function (a) {
              function b(a) {
                var c;
                q(a, function (b, d) {
                  P(b) && (c = b(), null != c ? a[d] = c : delete a[d]);
                });
              }
              var c = e.headers, d = D({}, a.headers), g, f, c = D({}, c.common, c[K(a.method)]);
              b(c);
              b(d);
              a:
                for (g in c) {
                  a = K(g);
                  for (f in d)
                    if (K(f) === a)
                      continue a;
                  d[g] = c[g];
                }
              return d;
            }(a);
          D(d, a);
          d.headers = g;
          d.method = Fa(d.method);
          (a = Ib(d.url) ? b.cookies()[d.xsrfCookieName || e.xsrfCookieName] : s) && (g[d.xsrfHeaderName || e.xsrfHeaderName] = a);
          var f = [
              function (a) {
                g = a.headers;
                var b = uc(a.data, tc(g), a.transformRequest);
                E(a.data) && q(g, function (a, b) {
                  'content-type' === K(b) && delete g[b];
                });
                E(a.withCredentials) && !E(e.withCredentials) && (a.withCredentials = e.withCredentials);
                return z(a, b, g).then(c, c);
              },
              s
            ], h = n.when(d);
          for (q(v, function (a) {
              (a.request || a.requestError) && f.unshift(a.request, a.requestError);
              (a.response || a.responseError) && f.push(a.response, a.responseError);
            }); f.length;) {
            a = f.shift();
            var k = f.shift(), h = h.then(a, k);
          }
          h.success = function (a) {
            h.then(function (b) {
              a(b.data, b.status, b.headers, d);
            });
            return h;
          };
          h.error = function (a) {
            h.then(null, function (b) {
              a(b.data, b.status, b.headers, d);
            });
            return h;
          };
          return h;
        }
        function z(b, c, g) {
          function f(a, b, c, e) {
            v && (200 <= a && 300 > a ? v.put(s, [
              a,
              b,
              sc(c),
              e
            ]) : v.remove(s));
            l(b, a, c, e);
            d.$$phase || d.$apply();
          }
          function l(a, c, d, e) {
            c = Math.max(c, 0);
            (200 <= c && 300 > c ? p.resolve : p.reject)({
              data: a,
              status: c,
              headers: tc(d),
              config: b,
              statusText: e
            });
          }
          function k() {
            var a = db(r.pendingRequests, b);
            -1 !== a && r.pendingRequests.splice(a, 1);
          }
          var p = n.defer(), z = p.promise, v, q, s = u(b.url, b.params);
          r.pendingRequests.push(b);
          z.then(k, k);
          (b.cache || e.cache) && (!1 !== b.cache && 'GET' == b.method) && (v = X(b.cache) ? b.cache : X(e.cache) ? e.cache : F);
          if (v)
            if (q = v.get(s), B(q)) {
              if (q.then)
                return q.then(k, k), q;
              M(q) ? l(q[1], q[0], ba(q[2]), q[3]) : l(q, 200, {}, 'OK');
            } else
              v.put(s, z);
          E(q) && a(b.method, s, c, f, g, b.timeout, b.withCredentials, b.responseType);
          return z;
        }
        function u(a, b) {
          if (!b)
            return a;
          var c = [];
          Sc(b, function (a, b) {
            null === a || E(a) || (M(a) || (a = [a]), q(a, function (a) {
              X(a) && (a = qa(a));
              c.push(za(b) + '=' + za(a));
            }));
          });
          0 < c.length && (a += (-1 == a.indexOf('?') ? '?' : '&') + c.join('&'));
          return a;
        }
        var F = c('$http'), v = [];
        q(g, function (a) {
          v.unshift(w(a) ? p.get(a) : p.invoke(a));
        });
        q(f, function (a, b) {
          var c = w(a) ? p.get(a) : p.invoke(a);
          v.splice(b, 0, {
            response: function (a) {
              return c(n.when(a));
            },
            responseError: function (a) {
              return c(n.reject(a));
            }
          });
        });
        r.pendingRequests = [];
        (function (a) {
          q(arguments, function (a) {
            r[a] = function (b, c) {
              return r(D(c || {}, {
                method: a,
                url: b
              }));
            };
          });
        }('get', 'delete', 'head', 'jsonp'));
        (function (a) {
          q(arguments, function (a) {
            r[a] = function (b, c, d) {
              return r(D(d || {}, {
                method: a,
                url: b,
                data: c
              }));
            };
          });
        }('post', 'put'));
        r.defaults = e;
        return r;
      }
    ];
  }
  function ue(b) {
    if (8 >= S && (!b.match(/^(get|post|head|put|delete|options)$/i) || !O.XMLHttpRequest))
      return new O.ActiveXObject('Microsoft.XMLHTTP');
    if (O.XMLHttpRequest)
      return new O.XMLHttpRequest();
    throw t('$httpBackend')('noxhr');
  }
  function Ud() {
    this.$get = [
      '$browser',
      '$window',
      '$document',
      function (b, a, c) {
        return ve(b, ue, b.defer, a.angular.callbacks, c[0]);
      }
    ];
  }
  function ve(b, a, c, d, e) {
    function g(a, b) {
      var c = e.createElement('script'), d = function () {
          c.onreadystatechange = c.onload = c.onerror = null;
          e.body.removeChild(c);
          b && b();
        };
      c.type = 'text/javascript';
      c.src = a;
      S && 8 >= S ? c.onreadystatechange = function () {
        /loaded|complete/.test(c.readyState) && d();
      } : c.onload = c.onerror = function () {
        d();
      };
      e.body.appendChild(c);
      return d;
    }
    var f = -1;
    return function (e, l, k, m, n, p, r, z) {
      function u() {
        v = f;
        A && A();
        x && x.abort();
      }
      function F(a, d, e, g, f) {
        L && c.cancel(L);
        A = x = null;
        0 === d && (d = e ? 200 : 'file' == sa(l).protocol ? 404 : 0);
        a(1223 === d ? 204 : d, e, g, f || '');
        b.$$completeOutstandingRequest(C);
      }
      var v;
      b.$$incOutstandingRequestCount();
      l = l || b.url();
      if ('jsonp' == K(e)) {
        var J = '_' + (d.counter++).toString(36);
        d[J] = function (a) {
          d[J].data = a;
        };
        var A = g(l.replace('JSON_CALLBACK', 'angular.callbacks.' + J), function () {
            d[J].data ? F(m, 200, d[J].data) : F(m, v || -2);
            d[J] = Ea.noop;
          });
      } else {
        var x = a(e);
        x.open(e, l, !0);
        q(n, function (a, b) {
          B(a) && x.setRequestHeader(b, a);
        });
        x.onreadystatechange = function () {
          if (x && 4 == x.readyState) {
            var a = null, b = null;
            v !== f && (a = x.getAllResponseHeaders(), b = 'response' in x ? x.response : x.responseText);
            F(m, v || x.status, b, a, x.statusText || '');
          }
        };
        r && (x.withCredentials = !0);
        if (z)
          try {
            x.responseType = z;
          } catch (s) {
            if ('json' !== z)
              throw s;
          }
        x.send(k || null);
      }
      if (0 < p)
        var L = c(u, p);
      else
        p && p.then && p.then(u);
    };
  }
  function Rd() {
    var b = '{{', a = '}}';
    this.startSymbol = function (a) {
      return a ? (b = a, this) : b;
    };
    this.endSymbol = function (b) {
      return b ? (a = b, this) : a;
    };
    this.$get = [
      '$parse',
      '$exceptionHandler',
      '$sce',
      function (c, d, e) {
        function g(g, k, m) {
          for (var n, p, r = 0, z = [], u = g.length, F = !1, v = []; r < u;)
            -1 != (n = g.indexOf(b, r)) && -1 != (p = g.indexOf(a, n + f)) ? (r != n && z.push(g.substring(r, n)), z.push(r = c(F = g.substring(n + f, p))), r.exp = F, r = p + h, F = !0) : (r != u && z.push(g.substring(r)), r = u);
          (u = z.length) || (z.push(''), u = 1);
          if (m && 1 < z.length)
            throw vc('noconcat', g);
          if (!k || F)
            return v.length = u, r = function (a) {
              try {
                for (var b = 0, c = u, f; b < c; b++)
                  'function' == typeof (f = z[b]) && (f = f(a), f = m ? e.getTrusted(m, f) : e.valueOf(f), null === f || E(f) ? f = '' : 'string' != typeof f && (f = qa(f))), v[b] = f;
                return v.join('');
              } catch (h) {
                a = vc('interr', g, h.toString()), d(a);
              }
            }, r.exp = g, r.parts = z, r;
        }
        var f = b.length, h = a.length;
        g.startSymbol = function () {
          return b;
        };
        g.endSymbol = function () {
          return a;
        };
        return g;
      }
    ];
  }
  function Sd() {
    this.$get = [
      '$rootScope',
      '$window',
      '$q',
      function (b, a, c) {
        function d(d, f, h, l) {
          var k = a.setInterval, m = a.clearInterval, n = c.defer(), p = n.promise, r = 0, z = B(l) && !l;
          h = B(h) ? h : 0;
          p.then(null, null, d);
          p.$$intervalId = k(function () {
            n.notify(r++);
            0 < h && r >= h && (n.resolve(r), m(p.$$intervalId), delete e[p.$$intervalId]);
            z || b.$apply();
          }, f);
          e[p.$$intervalId] = n;
          return p;
        }
        var e = {};
        d.cancel = function (a) {
          return a && a.$$intervalId in e ? (e[a.$$intervalId].reject('canceled'), clearInterval(a.$$intervalId), delete e[a.$$intervalId], !0) : !1;
        };
        return d;
      }
    ];
  }
  function ad() {
    this.$get = function () {
      return {
        id: 'en-us',
        NUMBER_FORMATS: {
          DECIMAL_SEP: '.',
          GROUP_SEP: ',',
          PATTERNS: [
            {
              minInt: 1,
              minFrac: 0,
              maxFrac: 3,
              posPre: '',
              posSuf: '',
              negPre: '-',
              negSuf: '',
              gSize: 3,
              lgSize: 3
            },
            {
              minInt: 1,
              minFrac: 2,
              maxFrac: 2,
              posPre: '\xa4',
              posSuf: '',
              negPre: '(\xa4',
              negSuf: ')',
              gSize: 3,
              lgSize: 3
            }
          ],
          CURRENCY_SYM: '$'
        },
        DATETIME_FORMATS: {
          MONTH: 'January February March April May June July August September October November December'.split(' '),
          SHORTMONTH: 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' '),
          DAY: 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' '),
          SHORTDAY: 'Sun Mon Tue Wed Thu Fri Sat'.split(' '),
          AMPMS: [
            'AM',
            'PM'
          ],
          medium: 'MMM d, y h:mm:ss a',
          'short': 'M/d/yy h:mm a',
          fullDate: 'EEEE, MMMM d, y',
          longDate: 'MMMM d, y',
          mediumDate: 'MMM d, y',
          shortDate: 'M/d/yy',
          mediumTime: 'h:mm:ss a',
          shortTime: 'h:mm a'
        },
        pluralCat: function (b) {
          return 1 === b ? 'one' : 'other';
        }
      };
    };
  }
  function wc(b) {
    b = b.split('/');
    for (var a = b.length; a--;)
      b[a] = wb(b[a]);
    return b.join('/');
  }
  function xc(b, a, c) {
    b = sa(b, c);
    a.$$protocol = b.protocol;
    a.$$host = b.hostname;
    a.$$port = Y(b.port) || we[b.protocol] || null;
  }
  function yc(b, a, c) {
    var d = '/' !== b.charAt(0);
    d && (b = '/' + b);
    b = sa(b, c);
    a.$$path = decodeURIComponent(d && '/' === b.pathname.charAt(0) ? b.pathname.substring(1) : b.pathname);
    a.$$search = Yb(b.search);
    a.$$hash = decodeURIComponent(b.hash);
    a.$$path && '/' != a.$$path.charAt(0) && (a.$$path = '/' + a.$$path);
  }
  function oa(b, a) {
    if (0 === a.indexOf(b))
      return a.substr(b.length);
  }
  function Ya(b) {
    var a = b.indexOf('#');
    return -1 == a ? b : b.substr(0, a);
  }
  function Jb(b) {
    return b.substr(0, Ya(b).lastIndexOf('/') + 1);
  }
  function zc(b, a) {
    this.$$html5 = !0;
    a = a || '';
    var c = Jb(b);
    xc(b, this, b);
    this.$$parse = function (a) {
      var e = oa(c, a);
      if (!w(e))
        throw Kb('ipthprfx', a, c);
      yc(e, this, b);
      this.$$path || (this.$$path = '/');
      this.$$compose();
    };
    this.$$compose = function () {
      var a = Zb(this.$$search), b = this.$$hash ? '#' + wb(this.$$hash) : '';
      this.$$url = wc(this.$$path) + (a ? '?' + a : '') + b;
      this.$$absUrl = c + this.$$url.substr(1);
    };
    this.$$rewrite = function (d) {
      var e;
      if ((e = oa(b, d)) !== s)
        return d = e, (e = oa(a, e)) !== s ? c + (oa('/', e) || e) : b + d;
      if ((e = oa(c, d)) !== s)
        return c + e;
      if (c == d + '/')
        return c;
    };
  }
  function Lb(b, a) {
    var c = Jb(b);
    xc(b, this, b);
    this.$$parse = function (d) {
      var e = oa(b, d) || oa(c, d), e = '#' == e.charAt(0) ? oa(a, e) : this.$$html5 ? e : '';
      if (!w(e))
        throw Kb('ihshprfx', d, a);
      yc(e, this, b);
      d = this.$$path;
      var g = /^\/?.*?:(\/.*)/;
      0 === e.indexOf(b) && (e = e.replace(b, ''));
      g.exec(e) || (d = (e = g.exec(d)) ? e[1] : d);
      this.$$path = d;
      this.$$compose();
    };
    this.$$compose = function () {
      var c = Zb(this.$$search), e = this.$$hash ? '#' + wb(this.$$hash) : '';
      this.$$url = wc(this.$$path) + (c ? '?' + c : '') + e;
      this.$$absUrl = b + (this.$$url ? a + this.$$url : '');
    };
    this.$$rewrite = function (a) {
      if (Ya(b) == Ya(a))
        return a;
    };
  }
  function Ac(b, a) {
    this.$$html5 = !0;
    Lb.apply(this, arguments);
    var c = Jb(b);
    this.$$rewrite = function (d) {
      var e;
      if (b == Ya(d))
        return d;
      if (e = oa(c, d))
        return b + a + e;
      if (c === d + '/')
        return c;
    };
  }
  function nb(b) {
    return function () {
      return this[b];
    };
  }
  function Bc(b, a) {
    return function (c) {
      if (E(c))
        return this[b];
      this[b] = a(c);
      this.$$compose();
      return this;
    };
  }
  function Vd() {
    var b = '', a = !1;
    this.hashPrefix = function (a) {
      return B(a) ? (b = a, this) : b;
    };
    this.html5Mode = function (b) {
      return B(b) ? (a = b, this) : a;
    };
    this.$get = [
      '$rootScope',
      '$browser',
      '$sniffer',
      '$rootElement',
      function (c, d, e, g) {
        function f(a) {
          c.$broadcast('$locationChangeSuccess', h.absUrl(), a);
        }
        var h, l = d.baseHref(), k = d.url();
        a ? (l = k.substring(0, k.indexOf('/', k.indexOf('//') + 2)) + (l || '/'), e = e.history ? zc : Ac) : (l = Ya(k), e = Lb);
        h = new e(l, '#' + b);
        h.$$parse(h.$$rewrite(k));
        g.on('click', function (a) {
          if (!a.ctrlKey && !a.metaKey && 2 != a.which) {
            for (var b = y(a.target); 'a' !== K(b[0].nodeName);)
              if (b[0] === g[0] || !(b = b.parent())[0])
                return;
            var e = b.prop('href');
            X(e) && '[object SVGAnimatedString]' === e.toString() && (e = sa(e.animVal).href);
            var f = h.$$rewrite(e);
            e && (!b.attr('target') && f && !a.isDefaultPrevented()) && (a.preventDefault(), f != d.url() && (h.$$parse(f), c.$apply(), O.angular['ff-684208-preventDefault'] = !0));
          }
        });
        h.absUrl() != k && d.url(h.absUrl(), !0);
        d.onUrlChange(function (a) {
          h.absUrl() != a && (c.$evalAsync(function () {
            var b = h.absUrl();
            h.$$parse(a);
            c.$broadcast('$locationChangeStart', a, b).defaultPrevented ? (h.$$parse(b), d.url(b)) : f(b);
          }), c.$$phase || c.$digest());
        });
        var m = 0;
        c.$watch(function () {
          var a = d.url(), b = h.$$replace;
          m && a == h.absUrl() || (m++, c.$evalAsync(function () {
            c.$broadcast('$locationChangeStart', h.absUrl(), a).defaultPrevented ? h.$$parse(a) : (d.url(h.absUrl(), b), f(a));
          }));
          h.$$replace = !1;
          return m;
        });
        return h;
      }
    ];
  }
  function Wd() {
    var b = !0, a = this;
    this.debugEnabled = function (a) {
      return B(a) ? (b = a, this) : b;
    };
    this.$get = [
      '$window',
      function (c) {
        function d(a) {
          a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? 'Error: ' + a.message + '\n' + a.stack : a.stack : a.sourceURL && (a = a.message + '\n' + a.sourceURL + ':' + a.line));
          return a;
        }
        function e(a) {
          var b = c.console || {}, e = b[a] || b.log || C;
          a = !1;
          try {
            a = !!e.apply;
          } catch (l) {
          }
          return a ? function () {
            var a = [];
            q(arguments, function (b) {
              a.push(d(b));
            });
            return e.apply(b, a);
          } : function (a, b) {
            e(a, null == b ? '' : b);
          };
        }
        return {
          log: e('log'),
          info: e('info'),
          warn: e('warn'),
          error: e('error'),
          debug: function () {
            var c = e('debug');
            return function () {
              b && c.apply(a, arguments);
            };
          }()
        };
      }
    ];
  }
  function fa(b, a) {
    if ('constructor' === b)
      throw Ba('isecfld', a);
    return b;
  }
  function Za(b, a) {
    if (b) {
      if (b.constructor === b)
        throw Ba('isecfn', a);
      if (b.document && b.location && b.alert && b.setInterval)
        throw Ba('isecwindow', a);
      if (b.children && (b.nodeName || b.prop && b.attr && b.find))
        throw Ba('isecdom', a);
    }
    return b;
  }
  function ob(b, a, c, d, e) {
    e = e || {};
    a = a.split('.');
    for (var g, f = 0; 1 < a.length; f++) {
      g = fa(a.shift(), d);
      var h = b[g];
      h || (h = {}, b[g] = h);
      b = h;
      b.then && e.unwrapPromises && (ta(d), '$$v' in b || function (a) {
        a.then(function (b) {
          a.$$v = b;
        });
      }(b), b.$$v === s && (b.$$v = {}), b = b.$$v);
    }
    g = fa(a.shift(), d);
    return b[g] = c;
  }
  function Cc(b, a, c, d, e, g, f) {
    fa(b, g);
    fa(a, g);
    fa(c, g);
    fa(d, g);
    fa(e, g);
    return f.unwrapPromises ? function (f, l) {
      var k = l && l.hasOwnProperty(b) ? l : f, m;
      if (null == k)
        return k;
      (k = k[b]) && k.then && (ta(g), '$$v' in k || (m = k, m.$$v = s, m.then(function (a) {
        m.$$v = a;
      })), k = k.$$v);
      if (!a)
        return k;
      if (null == k)
        return s;
      (k = k[a]) && k.then && (ta(g), '$$v' in k || (m = k, m.$$v = s, m.then(function (a) {
        m.$$v = a;
      })), k = k.$$v);
      if (!c)
        return k;
      if (null == k)
        return s;
      (k = k[c]) && k.then && (ta(g), '$$v' in k || (m = k, m.$$v = s, m.then(function (a) {
        m.$$v = a;
      })), k = k.$$v);
      if (!d)
        return k;
      if (null == k)
        return s;
      (k = k[d]) && k.then && (ta(g), '$$v' in k || (m = k, m.$$v = s, m.then(function (a) {
        m.$$v = a;
      })), k = k.$$v);
      if (!e)
        return k;
      if (null == k)
        return s;
      (k = k[e]) && k.then && (ta(g), '$$v' in k || (m = k, m.$$v = s, m.then(function (a) {
        m.$$v = a;
      })), k = k.$$v);
      return k;
    } : function (g, f) {
      var k = f && f.hasOwnProperty(b) ? f : g;
      if (null == k)
        return k;
      k = k[b];
      if (!a)
        return k;
      if (null == k)
        return s;
      k = k[a];
      if (!c)
        return k;
      if (null == k)
        return s;
      k = k[c];
      if (!d)
        return k;
      if (null == k)
        return s;
      k = k[d];
      return e ? null == k ? s : k = k[e] : k;
    };
  }
  function xe(b, a) {
    fa(b, a);
    return function (a, d) {
      return null == a ? s : (d && d.hasOwnProperty(b) ? d : a)[b];
    };
  }
  function ye(b, a, c) {
    fa(b, c);
    fa(a, c);
    return function (c, e) {
      if (null == c)
        return s;
      c = (e && e.hasOwnProperty(b) ? e : c)[b];
      return null == c ? s : c[a];
    };
  }
  function Dc(b, a, c) {
    if (Mb.hasOwnProperty(b))
      return Mb[b];
    var d = b.split('.'), e = d.length, g;
    if (a.unwrapPromises || 1 !== e)
      if (a.unwrapPromises || 2 !== e)
        if (a.csp)
          g = 6 > e ? Cc(d[0], d[1], d[2], d[3], d[4], c, a) : function (b, g) {
            var f = 0, h;
            do
              h = Cc(d[f++], d[f++], d[f++], d[f++], d[f++], c, a)(b, g), g = s, b = h;
            while (f < e);
            return h;
          };
        else {
          var f = 'var p;\n';
          q(d, function (b, d) {
            fa(b, c);
            f += 'if(s == null) return undefined;\ns=' + (d ? 's' : '((k&&k.hasOwnProperty("' + b + '"))?k:s)') + '["' + b + '"];\n' + (a.unwrapPromises ? 'if (s && s.then) {\n pw("' + c.replace(/(["\r\n])/g, '\\$1') + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : '');
          });
          var f = f + 'return s;', h = new Function('s', 'k', 'pw', f);
          h.toString = aa(f);
          g = a.unwrapPromises ? function (a, b) {
            return h(a, b, ta);
          } : h;
        }
      else
        g = ye(d[0], d[1], c);
    else
      g = xe(d[0], c);
    'hasOwnProperty' !== b && (Mb[b] = g);
    return g;
  }
  function Xd() {
    var b = {}, a = {
        csp: !1,
        unwrapPromises: !1,
        logPromiseWarnings: !0
      };
    this.unwrapPromises = function (b) {
      return B(b) ? (a.unwrapPromises = !!b, this) : a.unwrapPromises;
    };
    this.logPromiseWarnings = function (b) {
      return B(b) ? (a.logPromiseWarnings = b, this) : a.logPromiseWarnings;
    };
    this.$get = [
      '$filter',
      '$sniffer',
      '$log',
      function (c, d, e) {
        a.csp = d.csp;
        ta = function (b) {
          a.logPromiseWarnings && !Ec.hasOwnProperty(b) && (Ec[b] = !0, e.warn('[$parse] Promise found in the expression `' + b + '`. Automatic unwrapping of promises in Angular expressions is deprecated.'));
        };
        return function (d) {
          var e;
          switch (typeof d) {
          case 'string':
            if (b.hasOwnProperty(d))
              return b[d];
            e = new Nb(a);
            e = new $a(e, c, a).parse(d, !1);
            'hasOwnProperty' !== d && (b[d] = e);
            return e;
          case 'function':
            return d;
          default:
            return C;
          }
        };
      }
    ];
  }
  function Zd() {
    this.$get = [
      '$rootScope',
      '$exceptionHandler',
      function (b, a) {
        return ze(function (a) {
          b.$evalAsync(a);
        }, a);
      }
    ];
  }
  function ze(b, a) {
    function c(a) {
      return a;
    }
    function d(a) {
      return f(a);
    }
    var e = function () {
        var f = [], k, m;
        return m = {
          resolve: function (a) {
            if (f) {
              var c = f;
              f = s;
              k = g(a);
              c.length && b(function () {
                for (var a, b = 0, d = c.length; b < d; b++)
                  a = c[b], k.then(a[0], a[1], a[2]);
              });
            }
          },
          reject: function (a) {
            m.resolve(h(a));
          },
          notify: function (a) {
            if (f) {
              var c = f;
              f.length && b(function () {
                for (var b, d = 0, e = c.length; d < e; d++)
                  b = c[d], b[2](a);
              });
            }
          },
          promise: {
            then: function (b, g, h) {
              var m = e(), u = function (d) {
                  try {
                    m.resolve((P(b) ? b : c)(d));
                  } catch (e) {
                    m.reject(e), a(e);
                  }
                }, F = function (b) {
                  try {
                    m.resolve((P(g) ? g : d)(b));
                  } catch (c) {
                    m.reject(c), a(c);
                  }
                }, v = function (b) {
                  try {
                    m.notify((P(h) ? h : c)(b));
                  } catch (d) {
                    a(d);
                  }
                };
              f ? f.push([
                u,
                F,
                v
              ]) : k.then(u, F, v);
              return m.promise;
            },
            'catch': function (a) {
              return this.then(null, a);
            },
            'finally': function (a) {
              function b(a, c) {
                var d = e();
                c ? d.resolve(a) : d.reject(a);
                return d.promise;
              }
              function d(e, g) {
                var f = null;
                try {
                  f = (a || c)();
                } catch (h) {
                  return b(h, !1);
                }
                return f && P(f.then) ? f.then(function () {
                  return b(e, g);
                }, function (a) {
                  return b(a, !1);
                }) : b(e, g);
              }
              return this.then(function (a) {
                return d(a, !0);
              }, function (a) {
                return d(a, !1);
              });
            }
          }
        };
      }, g = function (a) {
        return a && P(a.then) ? a : {
          then: function (c) {
            var d = e();
            b(function () {
              d.resolve(c(a));
            });
            return d.promise;
          }
        };
      }, f = function (a) {
        var b = e();
        b.reject(a);
        return b.promise;
      }, h = function (c) {
        return {
          then: function (g, f) {
            var h = e();
            b(function () {
              try {
                h.resolve((P(f) ? f : d)(c));
              } catch (b) {
                h.reject(b), a(b);
              }
            });
            return h.promise;
          }
        };
      };
    return {
      defer: e,
      reject: f,
      when: function (h, k, m, n) {
        var p = e(), r, z = function (b) {
            try {
              return (P(k) ? k : c)(b);
            } catch (d) {
              return a(d), f(d);
            }
          }, u = function (b) {
            try {
              return (P(m) ? m : d)(b);
            } catch (c) {
              return a(c), f(c);
            }
          }, F = function (b) {
            try {
              return (P(n) ? n : c)(b);
            } catch (d) {
              a(d);
            }
          };
        b(function () {
          g(h).then(function (a) {
            r || (r = !0, p.resolve(g(a).then(z, u, F)));
          }, function (a) {
            r || (r = !0, p.resolve(u(a)));
          }, function (a) {
            r || p.notify(F(a));
          });
        });
        return p.promise;
      },
      all: function (a) {
        var b = e(), c = 0, d = M(a) ? [] : {};
        q(a, function (a, e) {
          c++;
          g(a).then(function (a) {
            d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
          }, function (a) {
            d.hasOwnProperty(e) || b.reject(a);
          });
        });
        0 === c && b.resolve(d);
        return b.promise;
      }
    };
  }
  function fe() {
    this.$get = [
      '$window',
      '$timeout',
      function (b, a) {
        var c = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame, d = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.mozCancelAnimationFrame || b.webkitCancelRequestAnimationFrame, e = !!c, g = e ? function (a) {
            var b = c(a);
            return function () {
              d(b);
            };
          } : function (b) {
            var c = a(b, 16.66, !1);
            return function () {
              a.cancel(c);
            };
          };
        g.supported = e;
        return g;
      }
    ];
  }
  function Yd() {
    var b = 10, a = t('$rootScope'), c = null;
    this.digestTtl = function (a) {
      arguments.length && (b = a);
      return b;
    };
    this.$get = [
      '$injector',
      '$exceptionHandler',
      '$parse',
      '$browser',
      function (d, e, g, f) {
        function h() {
          this.$id = bb();
          this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
          this['this'] = this.$root = this;
          this.$$destroyed = !1;
          this.$$asyncQueue = [];
          this.$$postDigestQueue = [];
          this.$$listeners = {};
          this.$$listenerCount = {};
          this.$$isolateBindings = {};
        }
        function l(b) {
          if (p.$$phase)
            throw a('inprog', p.$$phase);
          p.$$phase = b;
        }
        function k(a, b) {
          var c = g(a);
          Ra(c, b);
          return c;
        }
        function m(a, b, c) {
          do
            a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
          while (a = a.$parent);
        }
        function n() {
        }
        h.prototype = {
          constructor: h,
          $new: function (a) {
            a ? (a = new h(), a.$root = this.$root, a.$$asyncQueue = this.$$asyncQueue, a.$$postDigestQueue = this.$$postDigestQueue) : (a = function () {
            }, a.prototype = this, a = new a(), a.$id = bb());
            a['this'] = a;
            a.$$listeners = {};
            a.$$listenerCount = {};
            a.$parent = this;
            a.$$watchers = a.$$nextSibling = a.$$childHead = a.$$childTail = null;
            a.$$prevSibling = this.$$childTail;
            this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = a : this.$$childHead = this.$$childTail = a;
            return a;
          },
          $watch: function (a, b, d) {
            var e = k(a, 'watch'), g = this.$$watchers, f = {
                fn: b,
                last: n,
                get: e,
                exp: a,
                eq: !!d
              };
            c = null;
            if (!P(b)) {
              var h = k(b || C, 'listener');
              f.fn = function (a, b, c) {
                h(c);
              };
            }
            if ('string' == typeof a && e.constant) {
              var l = f.fn;
              f.fn = function (a, b, c) {
                l.call(this, a, b, c);
                Oa(g, f);
              };
            }
            g || (g = this.$$watchers = []);
            g.unshift(f);
            return function () {
              Oa(g, f);
              c = null;
            };
          },
          $watchCollection: function (a, b) {
            var c = this, d, e, f, h = 1 < b.length, l = 0, k = g(a), m = [], n = {}, p = !0, q = 0;
            return this.$watch(function () {
              d = k(c);
              var a, b;
              if (X(d))
                if (ab(d))
                  for (e !== m && (e = m, q = e.length = 0, l++), a = d.length, q !== a && (l++, e.length = q = a), b = 0; b < a; b++)
                    e[b] !== e[b] && d[b] !== d[b] || e[b] === d[b] || (l++, e[b] = d[b]);
                else {
                  e !== n && (e = n = {}, q = 0, l++);
                  a = 0;
                  for (b in d)
                    d.hasOwnProperty(b) && (a++, e.hasOwnProperty(b) ? e[b] !== d[b] && (l++, e[b] = d[b]) : (q++, e[b] = d[b], l++));
                  if (q > a)
                    for (b in l++, e)
                      e.hasOwnProperty(b) && !d.hasOwnProperty(b) && (q--, delete e[b]);
                }
              else
                e !== d && (e = d, l++);
              return l;
            }, function () {
              p ? (p = !1, b(d, d, c)) : b(d, f, c);
              if (h)
                if (X(d))
                  if (ab(d)) {
                    f = Array(d.length);
                    for (var a = 0; a < d.length; a++)
                      f[a] = d[a];
                  } else
                    for (a in f = {}, d)
                      Fc.call(d, a) && (f[a] = d[a]);
                else
                  f = d;
            });
          },
          $digest: function () {
            var d, g, f, h, k = this.$$asyncQueue, m = this.$$postDigestQueue, q, x, s = b, L, Q = [], y, H, R;
            l('$digest');
            c = null;
            do {
              x = !1;
              for (L = this; k.length;) {
                try {
                  R = k.shift(), R.scope.$eval(R.expression);
                } catch (B) {
                  p.$$phase = null, e(B);
                }
                c = null;
              }
              a:
                do {
                  if (h = L.$$watchers)
                    for (q = h.length; q--;)
                      try {
                        if (d = h[q])
                          if ((g = d.get(L)) !== (f = d.last) && !(d.eq ? xa(g, f) : 'number' == typeof g && 'number' == typeof f && isNaN(g) && isNaN(f)))
                            x = !0, c = d, d.last = d.eq ? ba(g) : g, d.fn(g, f === n ? g : f, L), 5 > s && (y = 4 - s, Q[y] || (Q[y] = []), H = P(d.exp) ? 'fn: ' + (d.exp.name || d.exp.toString()) : d.exp, H += '; newVal: ' + qa(g) + '; oldVal: ' + qa(f), Q[y].push(H));
                          else if (d === c) {
                            x = !1;
                            break a;
                          }
                      } catch (w) {
                        p.$$phase = null, e(w);
                      }
                  if (!(h = L.$$childHead || L !== this && L.$$nextSibling))
                    for (; L !== this && !(h = L.$$nextSibling);)
                      L = L.$parent;
                } while (L = h);
              if ((x || k.length) && !s--)
                throw p.$$phase = null, a('infdig', b, qa(Q));
            } while (x || k.length);
            for (p.$$phase = null; m.length;)
              try {
                m.shift()();
              } catch (T) {
                e(T);
              }
          },
          $destroy: function () {
            if (!this.$$destroyed) {
              var a = this.$parent;
              this.$broadcast('$destroy');
              this.$$destroyed = !0;
              this !== p && (q(this.$$listenerCount, eb(null, m, this)), a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], this.$destroy = this.$digest = this.$apply = C, this.$on = this.$watch = function () {
                return C;
              });
            }
          },
          $eval: function (a, b) {
            return g(a)(this, b);
          },
          $evalAsync: function (a) {
            p.$$phase || p.$$asyncQueue.length || f.defer(function () {
              p.$$asyncQueue.length && p.$digest();
            });
            this.$$asyncQueue.push({
              scope: this,
              expression: a
            });
          },
          $$postDigest: function (a) {
            this.$$postDigestQueue.push(a);
          },
          $apply: function (a) {
            try {
              return l('$apply'), this.$eval(a);
            } catch (b) {
              e(b);
            } finally {
              p.$$phase = null;
              try {
                p.$digest();
              } catch (c) {
                throw e(c), c;
              }
            }
          },
          $on: function (a, b) {
            var c = this.$$listeners[a];
            c || (this.$$listeners[a] = c = []);
            c.push(b);
            var d = this;
            do
              d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++;
            while (d = d.$parent);
            var e = this;
            return function () {
              c[db(c, b)] = null;
              m(e, 1, a);
            };
          },
          $emit: function (a, b) {
            var c = [], d, g = this, f = !1, h = {
                name: a,
                targetScope: g,
                stopPropagation: function () {
                  f = !0;
                },
                preventDefault: function () {
                  h.defaultPrevented = !0;
                },
                defaultPrevented: !1
              }, l = [h].concat(ya.call(arguments, 1)), k, m;
            do {
              d = g.$$listeners[a] || c;
              h.currentScope = g;
              k = 0;
              for (m = d.length; k < m; k++)
                if (d[k])
                  try {
                    d[k].apply(null, l);
                  } catch (n) {
                    e(n);
                  }
                else
                  d.splice(k, 1), k--, m--;
              if (f)
                break;
              g = g.$parent;
            } while (g);
            return h;
          },
          $broadcast: function (a, b) {
            for (var c = this, d = this, g = {
                  name: a,
                  targetScope: this,
                  preventDefault: function () {
                    g.defaultPrevented = !0;
                  },
                  defaultPrevented: !1
                }, f = [g].concat(ya.call(arguments, 1)), h, k; c = d;) {
              g.currentScope = c;
              d = c.$$listeners[a] || [];
              h = 0;
              for (k = d.length; h < k; h++)
                if (d[h])
                  try {
                    d[h].apply(null, f);
                  } catch (l) {
                    e(l);
                  }
                else
                  d.splice(h, 1), h--, k--;
              if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))
                for (; c !== this && !(d = c.$$nextSibling);)
                  c = c.$parent;
            }
            return g;
          }
        };
        var p = new h();
        return p;
      }
    ];
  }
  function bd() {
    var b = /^\s*(https?|ftp|mailto|tel|file):/, a = /^\s*(https?|ftp|file):|data:image\//;
    this.aHrefSanitizationWhitelist = function (a) {
      return B(a) ? (b = a, this) : b;
    };
    this.imgSrcSanitizationWhitelist = function (b) {
      return B(b) ? (a = b, this) : a;
    };
    this.$get = function () {
      return function (c, d) {
        var e = d ? a : b, g;
        if (!S || 8 <= S)
          if (g = sa(c).href, '' !== g && !g.match(e))
            return 'unsafe:' + g;
        return c;
      };
    };
  }
  function Ae(b) {
    if ('self' === b)
      return b;
    if (w(b)) {
      if (-1 < b.indexOf('***'))
        throw ua('iwcard', b);
      b = b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08').replace('\\*\\*', '.*').replace('\\*', '[^:/.?&;]*');
      return RegExp('^' + b + '$');
    }
    if (cb(b))
      return RegExp('^' + b.source + '$');
    throw ua('imatcher');
  }
  function Gc(b) {
    var a = [];
    B(b) && q(b, function (b) {
      a.push(Ae(b));
    });
    return a;
  }
  function ae() {
    this.SCE_CONTEXTS = ga;
    var b = ['self'], a = [];
    this.resourceUrlWhitelist = function (a) {
      arguments.length && (b = Gc(a));
      return b;
    };
    this.resourceUrlBlacklist = function (b) {
      arguments.length && (a = Gc(b));
      return a;
    };
    this.$get = [
      '$injector',
      function (c) {
        function d(a) {
          var b = function (a) {
            this.$$unwrapTrustedValue = function () {
              return a;
            };
          };
          a && (b.prototype = new a());
          b.prototype.valueOf = function () {
            return this.$$unwrapTrustedValue();
          };
          b.prototype.toString = function () {
            return this.$$unwrapTrustedValue().toString();
          };
          return b;
        }
        var e = function (a) {
          throw ua('unsafe');
        };
        c.has('$sanitize') && (e = c.get('$sanitize'));
        var g = d(), f = {};
        f[ga.HTML] = d(g);
        f[ga.CSS] = d(g);
        f[ga.URL] = d(g);
        f[ga.JS] = d(g);
        f[ga.RESOURCE_URL] = d(f[ga.URL]);
        return {
          trustAs: function (a, b) {
            var c = f.hasOwnProperty(a) ? f[a] : null;
            if (!c)
              throw ua('icontext', a, b);
            if (null === b || b === s || '' === b)
              return b;
            if ('string' !== typeof b)
              throw ua('itype', a);
            return new c(b);
          },
          getTrusted: function (c, d) {
            if (null === d || d === s || '' === d)
              return d;
            var g = f.hasOwnProperty(c) ? f[c] : null;
            if (g && d instanceof g)
              return d.$$unwrapTrustedValue();
            if (c === ga.RESOURCE_URL) {
              var g = sa(d.toString()), m, n, p = !1;
              m = 0;
              for (n = b.length; m < n; m++)
                if ('self' === b[m] ? Ib(g) : b[m].exec(g.href)) {
                  p = !0;
                  break;
                }
              if (p)
                for (m = 0, n = a.length; m < n; m++)
                  if ('self' === a[m] ? Ib(g) : a[m].exec(g.href)) {
                    p = !1;
                    break;
                  }
              if (p)
                return d;
              throw ua('insecurl', d.toString());
            }
            if (c === ga.HTML)
              return e(d);
            throw ua('unsafe');
          },
          valueOf: function (a) {
            return a instanceof g ? a.$$unwrapTrustedValue() : a;
          }
        };
      }
    ];
  }
  function $d() {
    var b = !0;
    this.enabled = function (a) {
      arguments.length && (b = !!a);
      return b;
    };
    this.$get = [
      '$parse',
      '$sniffer',
      '$sceDelegate',
      function (a, c, d) {
        if (b && c.msie && 8 > c.msieDocumentMode)
          throw ua('iequirks');
        var e = ba(ga);
        e.isEnabled = function () {
          return b;
        };
        e.trustAs = d.trustAs;
        e.getTrusted = d.getTrusted;
        e.valueOf = d.valueOf;
        b || (e.trustAs = e.getTrusted = function (a, b) {
          return b;
        }, e.valueOf = Da);
        e.parseAs = function (b, c) {
          var d = a(c);
          return d.literal && d.constant ? d : function (a, c) {
            return e.getTrusted(b, d(a, c));
          };
        };
        var g = e.parseAs, f = e.getTrusted, h = e.trustAs;
        q(ga, function (a, b) {
          var c = K(b);
          e[Ta('parse_as_' + c)] = function (b) {
            return g(a, b);
          };
          e[Ta('get_trusted_' + c)] = function (b) {
            return f(a, b);
          };
          e[Ta('trust_as_' + c)] = function (b) {
            return h(a, b);
          };
        });
        return e;
      }
    ];
  }
  function be() {
    this.$get = [
      '$window',
      '$document',
      function (b, a) {
        var c = {}, d = Y((/android (\d+)/.exec(K((b.navigator || {}).userAgent)) || [])[1]), e = /Boxee/i.test((b.navigator || {}).userAgent), g = a[0] || {}, f = g.documentMode, h, l = /^(Moz|webkit|O|ms)(?=[A-Z])/, k = g.body && g.body.style, m = !1, n = !1;
        if (k) {
          for (var p in k)
            if (m = l.exec(p)) {
              h = m[0];
              h = h.substr(0, 1).toUpperCase() + h.substr(1);
              break;
            }
          h || (h = 'WebkitOpacity' in k && 'webkit');
          m = !!('transition' in k || h + 'Transition' in k);
          n = !!('animation' in k || h + 'Animation' in k);
          !d || m && n || (m = w(g.body.style.webkitTransition), n = w(g.body.style.webkitAnimation));
        }
        return {
          history: !(!b.history || !b.history.pushState || 4 > d || e),
          hashchange: 'onhashchange' in b && (!f || 7 < f),
          hasEvent: function (a) {
            if ('input' == a && 9 == S)
              return !1;
            if (E(c[a])) {
              var b = g.createElement('div');
              c[a] = 'on' + a in b;
            }
            return c[a];
          },
          csp: Vb(),
          vendorPrefix: h,
          transitions: m,
          animations: n,
          android: d,
          msie: S,
          msieDocumentMode: f
        };
      }
    ];
  }
  function de() {
    this.$get = [
      '$rootScope',
      '$browser',
      '$q',
      '$exceptionHandler',
      function (b, a, c, d) {
        function e(e, h, l) {
          var k = c.defer(), m = k.promise, n = B(l) && !l;
          h = a.defer(function () {
            try {
              k.resolve(e());
            } catch (a) {
              k.reject(a), d(a);
            } finally {
              delete g[m.$$timeoutId];
            }
            n || b.$apply();
          }, h);
          m.$$timeoutId = h;
          g[h] = k;
          return m;
        }
        var g = {};
        e.cancel = function (b) {
          return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject('canceled'), delete g[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1;
        };
        return e;
      }
    ];
  }
  function sa(b, a) {
    var c = b;
    S && (W.setAttribute('href', c), c = W.href);
    W.setAttribute('href', c);
    return {
      href: W.href,
      protocol: W.protocol ? W.protocol.replace(/:$/, '') : '',
      host: W.host,
      search: W.search ? W.search.replace(/^\?/, '') : '',
      hash: W.hash ? W.hash.replace(/^#/, '') : '',
      hostname: W.hostname,
      port: W.port,
      pathname: '/' === W.pathname.charAt(0) ? W.pathname : '/' + W.pathname
    };
  }
  function Ib(b) {
    b = w(b) ? sa(b) : b;
    return b.protocol === Hc.protocol && b.host === Hc.host;
  }
  function ee() {
    this.$get = aa(O);
  }
  function gc(b) {
    function a(d, e) {
      if (X(d)) {
        var g = {};
        q(d, function (b, c) {
          g[c] = a(c, b);
        });
        return g;
      }
      return b.factory(d + c, e);
    }
    var c = 'Filter';
    this.register = a;
    this.$get = [
      '$injector',
      function (a) {
        return function (b) {
          return a.get(b + c);
        };
      }
    ];
    a('currency', Ic);
    a('date', Jc);
    a('filter', Be);
    a('json', Ce);
    a('limitTo', De);
    a('lowercase', Ee);
    a('number', Kc);
    a('orderBy', Lc);
    a('uppercase', Fe);
  }
  function Be() {
    return function (b, a, c) {
      if (!M(b))
        return b;
      var d = typeof c, e = [];
      e.check = function (a) {
        for (var b = 0; b < e.length; b++)
          if (!e[b](a))
            return !1;
        return !0;
      };
      'function' !== d && (c = 'boolean' === d && c ? function (a, b) {
        return Ea.equals(a, b);
      } : function (a, b) {
        if (a && b && 'object' === typeof a && 'object' === typeof b) {
          for (var d in a)
            if ('$' !== d.charAt(0) && Fc.call(a, d) && c(a[d], b[d]))
              return !0;
          return !1;
        }
        b = ('' + b).toLowerCase();
        return -1 < ('' + a).toLowerCase().indexOf(b);
      });
      var g = function (a, b) {
        if ('string' == typeof b && '!' === b.charAt(0))
          return !g(a, b.substr(1));
        switch (typeof a) {
        case 'boolean':
        case 'number':
        case 'string':
          return c(a, b);
        case 'object':
          switch (typeof b) {
          case 'object':
            return c(a, b);
          default:
            for (var d in a)
              if ('$' !== d.charAt(0) && g(a[d], b))
                return !0;
          }
          return !1;
        case 'array':
          for (d = 0; d < a.length; d++)
            if (g(a[d], b))
              return !0;
          return !1;
        default:
          return !1;
        }
      };
      switch (typeof a) {
      case 'boolean':
      case 'number':
      case 'string':
        a = { $: a };
      case 'object':
        for (var f in a)
          (function (b) {
            'undefined' != typeof a[b] && e.push(function (c) {
              return g('$' == b ? c : c && c[b], a[b]);
            });
          }(f));
        break;
      case 'function':
        e.push(a);
        break;
      default:
        return b;
      }
      d = [];
      for (f = 0; f < b.length; f++) {
        var h = b[f];
        e.check(h) && d.push(h);
      }
      return d;
    };
  }
  function Ic(b) {
    var a = b.NUMBER_FORMATS;
    return function (b, d) {
      E(d) && (d = a.CURRENCY_SYM);
      return Mc(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, 2).replace(/\u00A4/g, d);
    };
  }
  function Kc(b) {
    var a = b.NUMBER_FORMATS;
    return function (b, d) {
      return Mc(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d);
    };
  }
  function Mc(b, a, c, d, e) {
    if (null == b || !isFinite(b) || X(b))
      return '';
    var g = 0 > b;
    b = Math.abs(b);
    var f = b + '', h = '', l = [], k = !1;
    if (-1 !== f.indexOf('e')) {
      var m = f.match(/([\d\.]+)e(-?)(\d+)/);
      m && '-' == m[2] && m[3] > e + 1 ? f = '0' : (h = f, k = !0);
    }
    if (k)
      0 < e && (-1 < b && 1 > b) && (h = b.toFixed(e));
    else {
      f = (f.split(Nc)[1] || '').length;
      E(e) && (e = Math.min(Math.max(a.minFrac, f), a.maxFrac));
      f = Math.pow(10, e);
      b = Math.round(b * f) / f;
      b = ('' + b).split(Nc);
      f = b[0];
      b = b[1] || '';
      var m = 0, n = a.lgSize, p = a.gSize;
      if (f.length >= n + p)
        for (m = f.length - n, k = 0; k < m; k++)
          0 === (m - k) % p && 0 !== k && (h += c), h += f.charAt(k);
      for (k = m; k < f.length; k++)
        0 === (f.length - k) % n && 0 !== k && (h += c), h += f.charAt(k);
      for (; b.length < e;)
        b += '0';
      e && '0' !== e && (h += d + b.substr(0, e));
    }
    l.push(g ? a.negPre : a.posPre);
    l.push(h);
    l.push(g ? a.negSuf : a.posSuf);
    return l.join('');
  }
  function Ob(b, a, c) {
    var d = '';
    0 > b && (d = '-', b = -b);
    for (b = '' + b; b.length < a;)
      b = '0' + b;
    c && (b = b.substr(b.length - a));
    return d + b;
  }
  function $(b, a, c, d) {
    c = c || 0;
    return function (e) {
      e = e['get' + b]();
      if (0 < c || e > -c)
        e += c;
      0 === e && -12 == c && (e = 12);
      return Ob(e, a, d);
    };
  }
  function pb(b, a) {
    return function (c, d) {
      var e = c['get' + b](), g = Fa(a ? 'SHORT' + b : b);
      return d[g][e];
    };
  }
  function Jc(b) {
    function a(a) {
      var b;
      if (b = a.match(c)) {
        a = new Date(0);
        var g = 0, f = 0, h = b[8] ? a.setUTCFullYear : a.setFullYear, l = b[8] ? a.setUTCHours : a.setHours;
        b[9] && (g = Y(b[9] + b[10]), f = Y(b[9] + b[11]));
        h.call(a, Y(b[1]), Y(b[2]) - 1, Y(b[3]));
        g = Y(b[4] || 0) - g;
        f = Y(b[5] || 0) - f;
        h = Y(b[6] || 0);
        b = Math.round(1000 * parseFloat('0.' + (b[7] || 0)));
        l.call(a, g, f, h, b);
      }
      return a;
    }
    var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    return function (c, e) {
      var g = '', f = [], h, l;
      e = e || 'mediumDate';
      e = b.DATETIME_FORMATS[e] || e;
      w(c) && (c = Ge.test(c) ? Y(c) : a(c));
      vb(c) && (c = new Date(c));
      if (!Na(c))
        return c;
      for (; e;)
        (l = He.exec(e)) ? (f = f.concat(ya.call(l, 1)), e = f.pop()) : (f.push(e), e = null);
      q(f, function (a) {
        h = Ie[a];
        g += h ? h(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
      });
      return g;
    };
  }
  function Ce() {
    return function (b) {
      return qa(b, !0);
    };
  }
  function De() {
    return function (b, a) {
      if (!M(b) && !w(b))
        return b;
      a = Y(a);
      if (w(b))
        return a ? 0 <= a ? b.slice(0, a) : b.slice(a, b.length) : '';
      var c = [], d, e;
      a > b.length ? a = b.length : a < -b.length && (a = -b.length);
      0 < a ? (d = 0, e = a) : (d = b.length + a, e = b.length);
      for (; d < e; d++)
        c.push(b[d]);
      return c;
    };
  }
  function Lc(b) {
    return function (a, c, d) {
      function e(a, b) {
        return Qa(b) ? function (b, c) {
          return a(c, b);
        } : a;
      }
      function g(a, b) {
        var c = typeof a, d = typeof b;
        return c == d ? ('string' == c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : a < b ? -1 : 1) : c < d ? -1 : 1;
      }
      if (!M(a) || !c)
        return a;
      c = M(c) ? c : [c];
      c = Uc(c, function (a) {
        var c = !1, d = a || Da;
        if (w(a)) {
          if ('+' == a.charAt(0) || '-' == a.charAt(0))
            c = '-' == a.charAt(0), a = a.substring(1);
          d = b(a);
          if (d.constant) {
            var f = d();
            return e(function (a, b) {
              return g(a[f], b[f]);
            }, c);
          }
        }
        return e(function (a, b) {
          return g(d(a), d(b));
        }, c);
      });
      for (var f = [], h = 0; h < a.length; h++)
        f.push(a[h]);
      return f.sort(e(function (a, b) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d](a, b);
          if (0 !== e)
            return e;
        }
        return 0;
      }, d));
    };
  }
  function va(b) {
    P(b) && (b = { link: b });
    b.restrict = b.restrict || 'AC';
    return aa(b);
  }
  function Oc(b, a, c, d) {
    function e(a, c) {
      c = c ? '-' + fb(c, '-') : '';
      d.removeClass(b, (a ? qb : rb) + c);
      d.addClass(b, (a ? rb : qb) + c);
    }
    var g = this, f = b.parent().controller('form') || sb, h = 0, l = g.$error = {}, k = [];
    g.$name = a.name || a.ngForm;
    g.$dirty = !1;
    g.$pristine = !0;
    g.$valid = !0;
    g.$invalid = !1;
    f.$addControl(g);
    b.addClass(La);
    e(!0);
    g.$addControl = function (a) {
      Aa(a.$name, 'input');
      k.push(a);
      a.$name && (g[a.$name] = a);
    };
    g.$removeControl = function (a) {
      a.$name && g[a.$name] === a && delete g[a.$name];
      q(l, function (b, c) {
        g.$setValidity(c, !0, a);
      });
      Oa(k, a);
    };
    g.$setValidity = function (a, b, c) {
      var d = l[a];
      if (b)
        d && (Oa(d, c), d.length || (h--, h || (e(b), g.$valid = !0, g.$invalid = !1), l[a] = !1, e(!0, a), f.$setValidity(a, !0, g)));
      else {
        h || e(b);
        if (d) {
          if (-1 != db(d, c))
            return;
        } else
          l[a] = d = [], h++, e(!1, a), f.$setValidity(a, !1, g);
        d.push(c);
        g.$valid = !1;
        g.$invalid = !0;
      }
    };
    g.$setDirty = function () {
      d.removeClass(b, La);
      d.addClass(b, tb);
      g.$dirty = !0;
      g.$pristine = !1;
      f.$setDirty();
    };
    g.$setPristine = function () {
      d.removeClass(b, tb);
      d.addClass(b, La);
      g.$dirty = !1;
      g.$pristine = !0;
      q(k, function (a) {
        a.$setPristine();
      });
    };
  }
  function pa(b, a, c, d) {
    b.$setValidity(a, c);
    return c ? d : s;
  }
  function Je(b, a, c) {
    var d = c.prop('validity');
    X(d) && b.$parsers.push(function (c) {
      if (b.$error[a] || !(d.badInput || d.customError || d.typeMismatch) || d.valueMissing)
        return c;
      b.$setValidity(a, !1);
    });
  }
  function ub(b, a, c, d, e, g) {
    var f = a.prop('validity');
    if (!e.android) {
      var h = !1;
      a.on('compositionstart', function (a) {
        h = !0;
      });
      a.on('compositionend', function () {
        h = !1;
        l();
      });
    }
    var l = function () {
      if (!h) {
        var e = a.val();
        Qa(c.ngTrim || 'T') && (e = ca(e));
        if (d.$viewValue !== e || f && '' === e && !f.valueMissing)
          b.$$phase ? d.$setViewValue(e) : b.$apply(function () {
            d.$setViewValue(e);
          });
      }
    };
    if (e.hasEvent('input'))
      a.on('input', l);
    else {
      var k, m = function () {
          k || (k = g.defer(function () {
            l();
            k = null;
          }));
        };
      a.on('keydown', function (a) {
        a = a.keyCode;
        91 === a || (15 < a && 19 > a || 37 <= a && 40 >= a) || m();
      });
      if (e.hasEvent('paste'))
        a.on('paste cut', m);
    }
    a.on('change', l);
    d.$render = function () {
      a.val(d.$isEmpty(d.$viewValue) ? '' : d.$viewValue);
    };
    var n = c.ngPattern;
    n && ((e = n.match(/^\/(.*)\/([gim]*)$/)) ? (n = RegExp(e[1], e[2]), e = function (a) {
      return pa(d, 'pattern', d.$isEmpty(a) || n.test(a), a);
    }) : e = function (c) {
      var e = b.$eval(n);
      if (!e || !e.test)
        throw t('ngPattern')('noregexp', n, e, ha(a));
      return pa(d, 'pattern', d.$isEmpty(c) || e.test(c), c);
    }, d.$formatters.push(e), d.$parsers.push(e));
    if (c.ngMinlength) {
      var p = Y(c.ngMinlength);
      e = function (a) {
        return pa(d, 'minlength', d.$isEmpty(a) || a.length >= p, a);
      };
      d.$parsers.push(e);
      d.$formatters.push(e);
    }
    if (c.ngMaxlength) {
      var r = Y(c.ngMaxlength);
      e = function (a) {
        return pa(d, 'maxlength', d.$isEmpty(a) || a.length <= r, a);
      };
      d.$parsers.push(e);
      d.$formatters.push(e);
    }
  }
  function Pb(b, a) {
    b = 'ngClass' + b;
    return [
      '$animate',
      function (c) {
        function d(a, b) {
          var c = [], d = 0;
          a:
            for (; d < a.length; d++) {
              for (var e = a[d], m = 0; m < b.length; m++)
                if (e == b[m])
                  continue a;
              c.push(e);
            }
          return c;
        }
        function e(a) {
          if (!M(a)) {
            if (w(a))
              return a.split(' ');
            if (X(a)) {
              var b = [];
              q(a, function (a, c) {
                a && b.push(c);
              });
              return b;
            }
          }
          return a;
        }
        return {
          restrict: 'AC',
          link: function (g, f, h) {
            function l(a, b) {
              var c = f.data('$classCounts') || {}, d = [];
              q(a, function (a) {
                if (0 < b || c[a])
                  c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a);
              });
              f.data('$classCounts', c);
              return d.join(' ');
            }
            function k(b) {
              if (!0 === a || g.$index % 2 === a) {
                var k = e(b || []);
                if (!m) {
                  var r = l(k, 1);
                  h.$addClass(r);
                } else if (!xa(b, m)) {
                  var q = e(m), r = d(k, q), k = d(q, k), k = l(k, -1), r = l(r, 1);
                  0 === r.length ? c.removeClass(f, k) : 0 === k.length ? c.addClass(f, r) : c.setClass(f, r, k);
                }
              }
              m = ba(b);
            }
            var m;
            g.$watch(h[b], k, !0);
            h.$observe('class', function (a) {
              k(g.$eval(h[b]));
            });
            'ngClass' !== b && g.$watch('$index', function (c, d) {
              var f = c & 1;
              if (f !== d & 1) {
                var k = e(g.$eval(h[b]));
                f === a ? (f = l(k, 1), h.$addClass(f)) : (f = l(k, -1), h.$removeClass(f));
              }
            });
          }
        };
      }
    ];
  }
  var K = function (b) {
      return w(b) ? b.toLowerCase() : b;
    }, Fc = Object.prototype.hasOwnProperty, Fa = function (b) {
      return w(b) ? b.toUpperCase() : b;
    }, S, y, Ga, ya = [].slice, Ke = [].push, wa = Object.prototype.toString, Pa = t('ng'), Ea = O.angular || (O.angular = {}), Sa, Ka, ka = [
      '0',
      '0',
      '0'
    ];
  S = Y((/msie (\d+)/.exec(K(navigator.userAgent)) || [])[1]);
  isNaN(S) && (S = Y((/trident\/.*; rv:(\d+)/.exec(K(navigator.userAgent)) || [])[1]));
  C.$inject = [];
  Da.$inject = [];
  var ca = function () {
      return String.prototype.trim ? function (b) {
        return w(b) ? b.trim() : b;
      } : function (b) {
        return w(b) ? b.replace(/^\s\s*/, '').replace(/\s\s*$/, '') : b;
      };
    }();
  Ka = 9 > S ? function (b) {
    b = b.nodeName ? b : b[0];
    return b.scopeName && 'HTML' != b.scopeName ? Fa(b.scopeName + ':' + b.nodeName) : b.nodeName;
  } : function (b) {
    return b.nodeName ? b.nodeName : b[0].nodeName;
  };
  var Xc = /[A-Z]/g, $c = {
      full: '1.2.16',
      major: 1,
      minor: 2,
      dot: 16,
      codeName: 'badger-enumeration'
    }, Ua = N.cache = {}, gb = N.expando = 'ng-' + new Date().getTime(), me = 1, Pc = O.document.addEventListener ? function (b, a, c) {
      b.addEventListener(a, c, !1);
    } : function (b, a, c) {
      b.attachEvent('on' + a, c);
    }, Fb = O.document.removeEventListener ? function (b, a, c) {
      b.removeEventListener(a, c, !1);
    } : function (b, a, c) {
      b.detachEvent('on' + a, c);
    };
  N._data = function (b) {
    return this.cache[b[this.expando]] || {};
  };
  var he = /([\:\-\_]+(.))/g, ie = /^moz([A-Z])/, Bb = t('jqLite'), je = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Cb = /<|&#?\w+;/, ke = /<([\w:]+)/, le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ea = {
      option: [
        1,
        '<select multiple="multiple">',
        '</select>'
      ],
      thead: [
        1,
        '<table>',
        '</table>'
      ],
      col: [
        2,
        '<table><colgroup>',
        '</colgroup></table>'
      ],
      tr: [
        2,
        '<table><tbody>',
        '</tbody></table>'
      ],
      td: [
        3,
        '<table><tbody><tr>',
        '</tr></tbody></table>'
      ],
      _default: [
        0,
        '',
        ''
      ]
    };
  ea.optgroup = ea.option;
  ea.tbody = ea.tfoot = ea.colgroup = ea.caption = ea.thead;
  ea.th = ea.td;
  var Ja = N.prototype = {
      ready: function (b) {
        function a() {
          c || (c = !0, b());
        }
        var c = !1;
        'complete' === U.readyState ? setTimeout(a) : (this.on('DOMContentLoaded', a), N(O).on('load', a));
      },
      toString: function () {
        var b = [];
        q(this, function (a) {
          b.push('' + a);
        });
        return '[' + b.join(', ') + ']';
      },
      eq: function (b) {
        return 0 <= b ? y(this[b]) : y(this[this.length + b]);
      },
      length: 0,
      push: Ke,
      sort: [].sort,
      splice: [].splice
    }, kb = {};
  q('multiple selected checked disabled readOnly required open'.split(' '), function (b) {
    kb[K(b)] = b;
  });
  var nc = {};
  q('input select option textarea button form details'.split(' '), function (b) {
    nc[Fa(b)] = !0;
  });
  q({
    data: jc,
    inheritedData: jb,
    scope: function (b) {
      return y(b).data('$scope') || jb(b.parentNode || b, [
        '$isolateScope',
        '$scope'
      ]);
    },
    isolateScope: function (b) {
      return y(b).data('$isolateScope') || y(b).data('$isolateScopeNoTemplate');
    },
    controller: kc,
    injector: function (b) {
      return jb(b, '$injector');
    },
    removeAttr: function (b, a) {
      b.removeAttribute(a);
    },
    hasClass: Gb,
    css: function (b, a, c) {
      a = Ta(a);
      if (B(c))
        b.style[a] = c;
      else {
        var d;
        8 >= S && (d = b.currentStyle && b.currentStyle[a], '' === d && (d = 'auto'));
        d = d || b.style[a];
        8 >= S && (d = '' === d ? s : d);
        return d;
      }
    },
    attr: function (b, a, c) {
      var d = K(a);
      if (kb[d])
        if (B(c))
          c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d));
        else
          return b[a] || (b.attributes.getNamedItem(a) || C).specified ? d : s;
      else if (B(c))
        b.setAttribute(a, c);
      else if (b.getAttribute)
        return b = b.getAttribute(a, 2), null === b ? s : b;
    },
    prop: function (b, a, c) {
      if (B(c))
        b[a] = c;
      else
        return b[a];
    },
    text: function () {
      function b(b, d) {
        var e = a[b.nodeType];
        if (E(d))
          return e ? b[e] : '';
        b[e] = d;
      }
      var a = [];
      9 > S ? (a[1] = 'innerText', a[3] = 'nodeValue') : a[1] = a[3] = 'textContent';
      b.$dv = '';
      return b;
    }(),
    val: function (b, a) {
      if (E(a)) {
        if ('SELECT' === Ka(b) && b.multiple) {
          var c = [];
          q(b.options, function (a) {
            a.selected && c.push(a.value || a.text);
          });
          return 0 === c.length ? null : c;
        }
        return b.value;
      }
      b.value = a;
    },
    html: function (b, a) {
      if (E(a))
        return b.innerHTML;
      for (var c = 0, d = b.childNodes; c < d.length; c++)
        Ha(d[c]);
      b.innerHTML = a;
    },
    empty: lc
  }, function (b, a) {
    N.prototype[a] = function (a, d) {
      var e, g;
      if (b !== lc && (2 == b.length && b !== Gb && b !== kc ? a : d) === s) {
        if (X(a)) {
          for (e = 0; e < this.length; e++)
            if (b === jc)
              b(this[e], a);
            else
              for (g in a)
                b(this[e], g, a[g]);
          return this;
        }
        e = b.$dv;
        g = e === s ? Math.min(this.length, 1) : this.length;
        for (var f = 0; f < g; f++) {
          var h = b(this[f], a, d);
          e = e ? e + h : h;
        }
        return e;
      }
      for (e = 0; e < this.length; e++)
        b(this[e], a, d);
      return this;
    };
  });
  q({
    removeData: hc,
    dealoc: Ha,
    on: function a(c, d, e, g) {
      if (B(g))
        throw Bb('onargs');
      var f = la(c, 'events'), h = la(c, 'handle');
      f || la(c, 'events', f = {});
      h || la(c, 'handle', h = ne(c, f));
      q(d.split(' '), function (d) {
        var g = f[d];
        if (!g) {
          if ('mouseenter' == d || 'mouseleave' == d) {
            var m = U.body.contains || U.body.compareDocumentPosition ? function (a, c) {
                var d = 9 === a.nodeType ? a.documentElement : a, e = c && c.parentNode;
                return a === e || !!(e && 1 === e.nodeType && (d.contains ? d.contains(e) : a.compareDocumentPosition && a.compareDocumentPosition(e) & 16));
              } : function (a, c) {
                if (c)
                  for (; c = c.parentNode;)
                    if (c === a)
                      return !0;
                return !1;
              };
            f[d] = [];
            a(c, {
              mouseleave: 'mouseout',
              mouseenter: 'mouseover'
            }[d], function (a) {
              var c = a.relatedTarget;
              c && (c === this || m(this, c)) || h(a, d);
            });
          } else
            Pc(c, d, h), f[d] = [];
          g = f[d];
        }
        g.push(e);
      });
    },
    off: ic,
    one: function (a, c, d) {
      a = y(a);
      a.on(c, function g() {
        a.off(c, d);
        a.off(c, g);
      });
      a.on(c, d);
    },
    replaceWith: function (a, c) {
      var d, e = a.parentNode;
      Ha(a);
      q(new N(c), function (c) {
        d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
        d = c;
      });
    },
    children: function (a) {
      var c = [];
      q(a.childNodes, function (a) {
        1 === a.nodeType && c.push(a);
      });
      return c;
    },
    contents: function (a) {
      return a.contentDocument || a.childNodes || [];
    },
    append: function (a, c) {
      q(new N(c), function (c) {
        1 !== a.nodeType && 11 !== a.nodeType || a.appendChild(c);
      });
    },
    prepend: function (a, c) {
      if (1 === a.nodeType) {
        var d = a.firstChild;
        q(new N(c), function (c) {
          a.insertBefore(c, d);
        });
      }
    },
    wrap: function (a, c) {
      c = y(c)[0];
      var d = a.parentNode;
      d && d.replaceChild(c, a);
      c.appendChild(a);
    },
    remove: function (a) {
      Ha(a);
      var c = a.parentNode;
      c && c.removeChild(a);
    },
    after: function (a, c) {
      var d = a, e = a.parentNode;
      q(new N(c), function (a) {
        e.insertBefore(a, d.nextSibling);
        d = a;
      });
    },
    addClass: ib,
    removeClass: hb,
    toggleClass: function (a, c, d) {
      c && q(c.split(' '), function (c) {
        var g = d;
        E(g) && (g = !Gb(a, c));
        (g ? ib : hb)(a, c);
      });
    },
    parent: function (a) {
      return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
    },
    next: function (a) {
      if (a.nextElementSibling)
        return a.nextElementSibling;
      for (a = a.nextSibling; null != a && 1 !== a.nodeType;)
        a = a.nextSibling;
      return a;
    },
    find: function (a, c) {
      return a.getElementsByTagName ? a.getElementsByTagName(c) : [];
    },
    clone: Eb,
    triggerHandler: function (a, c, d) {
      c = (la(a, 'events') || {})[c];
      d = d || [];
      var e = [{
            preventDefault: C,
            stopPropagation: C
          }];
      q(c, function (c) {
        c.apply(a, e.concat(d));
      });
    }
  }, function (a, c) {
    N.prototype[c] = function (c, e, g) {
      for (var f, h = 0; h < this.length; h++)
        E(f) ? (f = a(this[h], c, e, g), B(f) && (f = y(f))) : Db(f, a(this[h], c, e, g));
      return B(f) ? f : this;
    };
    N.prototype.bind = N.prototype.on;
    N.prototype.unbind = N.prototype.off;
  });
  Va.prototype = {
    put: function (a, c) {
      this[Ia(a)] = c;
    },
    get: function (a) {
      return this[Ia(a)];
    },
    remove: function (a) {
      var c = this[a = Ia(a)];
      delete this[a];
      return c;
    }
  };
  var pe = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, qe = /,/, re = /^\s*(_?)(\S+?)\1\s*$/, oe = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Wa = t('$injector'), Le = t('$animate'), Ld = [
      '$provide',
      function (a) {
        this.$$selectors = {};
        this.register = function (c, d) {
          var e = c + '-animation';
          if (c && '.' != c.charAt(0))
            throw Le('notcsel', c);
          this.$$selectors[c.substr(1)] = e;
          a.factory(e, d);
        };
        this.classNameFilter = function (a) {
          1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null);
          return this.$$classNameFilter;
        };
        this.$get = [
          '$timeout',
          '$$asyncCallback',
          function (a, d) {
            return {
              enter: function (a, c, f, h) {
                f ? f.after(a) : (c && c[0] || (c = f.parent()), c.append(a));
                h && d(h);
              },
              leave: function (a, c) {
                a.remove();
                c && d(c);
              },
              move: function (a, c, d, h) {
                this.enter(a, c, d, h);
              },
              addClass: function (a, c, f) {
                c = w(c) ? c : M(c) ? c.join(' ') : '';
                q(a, function (a) {
                  ib(a, c);
                });
                f && d(f);
              },
              removeClass: function (a, c, f) {
                c = w(c) ? c : M(c) ? c.join(' ') : '';
                q(a, function (a) {
                  hb(a, c);
                });
                f && d(f);
              },
              setClass: function (a, c, f, h) {
                q(a, function (a) {
                  ib(a, c);
                  hb(a, f);
                });
                h && d(h);
              },
              enabled: C
            };
          }
        ];
      }
    ], ja = t('$compile');
  cc.$inject = [
    '$provide',
    '$$sanitizeUriProvider'
  ];
  var te = /^(x[\:\-_]|data[\:\-_])/i, vc = t('$interpolate'), Me = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, we = {
      http: 80,
      https: 443,
      ftp: 21
    }, Kb = t('$location');
  Ac.prototype = Lb.prototype = zc.prototype = {
    $$html5: !1,
    $$replace: !1,
    absUrl: nb('$$absUrl'),
    url: function (a, c) {
      if (E(a))
        return this.$$url;
      var d = Me.exec(a);
      d[1] && this.path(decodeURIComponent(d[1]));
      (d[2] || d[1]) && this.search(d[3] || '');
      this.hash(d[5] || '', c);
      return this;
    },
    protocol: nb('$$protocol'),
    host: nb('$$host'),
    port: nb('$$port'),
    path: Bc('$$path', function (a) {
      return '/' == a.charAt(0) ? a : '/' + a;
    }),
    search: function (a, c) {
      switch (arguments.length) {
      case 0:
        return this.$$search;
      case 1:
        if (w(a))
          this.$$search = Yb(a);
        else if (X(a))
          this.$$search = a;
        else
          throw Kb('isrcharg');
        break;
      default:
        E(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c;
      }
      this.$$compose();
      return this;
    },
    hash: Bc('$$hash', Da),
    replace: function () {
      this.$$replace = !0;
      return this;
    }
  };
  var Ba = t('$parse'), Ec = {}, ta, Ma = {
      'null': function () {
        return null;
      },
      'true': function () {
        return !0;
      },
      'false': function () {
        return !1;
      },
      undefined: C,
      '+': function (a, c, d, e) {
        d = d(a, c);
        e = e(a, c);
        return B(d) ? B(e) ? d + e : d : B(e) ? e : s;
      },
      '-': function (a, c, d, e) {
        d = d(a, c);
        e = e(a, c);
        return (B(d) ? d : 0) - (B(e) ? e : 0);
      },
      '*': function (a, c, d, e) {
        return d(a, c) * e(a, c);
      },
      '/': function (a, c, d, e) {
        return d(a, c) / e(a, c);
      },
      '%': function (a, c, d, e) {
        return d(a, c) % e(a, c);
      },
      '^': function (a, c, d, e) {
        return d(a, c) ^ e(a, c);
      },
      '=': C,
      '===': function (a, c, d, e) {
        return d(a, c) === e(a, c);
      },
      '!==': function (a, c, d, e) {
        return d(a, c) !== e(a, c);
      },
      '==': function (a, c, d, e) {
        return d(a, c) == e(a, c);
      },
      '!=': function (a, c, d, e) {
        return d(a, c) != e(a, c);
      },
      '<': function (a, c, d, e) {
        return d(a, c) < e(a, c);
      },
      '>': function (a, c, d, e) {
        return d(a, c) > e(a, c);
      },
      '<=': function (a, c, d, e) {
        return d(a, c) <= e(a, c);
      },
      '>=': function (a, c, d, e) {
        return d(a, c) >= e(a, c);
      },
      '&&': function (a, c, d, e) {
        return d(a, c) && e(a, c);
      },
      '||': function (a, c, d, e) {
        return d(a, c) || e(a, c);
      },
      '&': function (a, c, d, e) {
        return d(a, c) & e(a, c);
      },
      '|': function (a, c, d, e) {
        return e(a, c)(a, c, d(a, c));
      },
      '!': function (a, c, d) {
        return !d(a, c);
      }
    }, Ne = {
      n: '\n',
      f: '\f',
      r: '\r',
      t: '\t',
      v: '\x0B',
      '\'': '\'',
      '"': '"'
    }, Nb = function (a) {
      this.options = a;
    };
  Nb.prototype = {
    constructor: Nb,
    lex: function (a) {
      this.text = a;
      this.index = 0;
      this.ch = s;
      this.lastCh = ':';
      this.tokens = [];
      var c;
      for (a = []; this.index < this.text.length;) {
        this.ch = this.text.charAt(this.index);
        if (this.is('"\''))
          this.readString(this.ch);
        else if (this.isNumber(this.ch) || this.is('.') && this.isNumber(this.peek()))
          this.readNumber();
        else if (this.isIdent(this.ch))
          this.readIdent(), this.was('{,') && ('{' === a[0] && (c = this.tokens[this.tokens.length - 1])) && (c.json = -1 === c.text.indexOf('.'));
        else if (this.is('(){}[].,;:?'))
          this.tokens.push({
            index: this.index,
            text: this.ch,
            json: this.was(':[,') && this.is('{[') || this.is('}]:,')
          }), this.is('{[') && a.unshift(this.ch), this.is('}]') && a.shift(), this.index++;
        else if (this.isWhitespace(this.ch)) {
          this.index++;
          continue;
        } else {
          var d = this.ch + this.peek(), e = d + this.peek(2), g = Ma[this.ch], f = Ma[d], h = Ma[e];
          h ? (this.tokens.push({
            index: this.index,
            text: e,
            fn: h
          }), this.index += 3) : f ? (this.tokens.push({
            index: this.index,
            text: d,
            fn: f
          }), this.index += 2) : g ? (this.tokens.push({
            index: this.index,
            text: this.ch,
            fn: g,
            json: this.was('[,:') && this.is('+-')
          }), this.index += 1) : this.throwError('Unexpected next character ', this.index, this.index + 1);
        }
        this.lastCh = this.ch;
      }
      return this.tokens;
    },
    is: function (a) {
      return -1 !== a.indexOf(this.ch);
    },
    was: function (a) {
      return -1 !== a.indexOf(this.lastCh);
    },
    peek: function (a) {
      a = a || 1;
      return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
    },
    isNumber: function (a) {
      return '0' <= a && '9' >= a;
    },
    isWhitespace: function (a) {
      return ' ' === a || '\r' === a || '\t' === a || '\n' === a || '\x0B' === a || '\xa0' === a;
    },
    isIdent: function (a) {
      return 'a' <= a && 'z' >= a || 'A' <= a && 'Z' >= a || '_' === a || '$' === a;
    },
    isExpOperator: function (a) {
      return '-' === a || '+' === a || this.isNumber(a);
    },
    throwError: function (a, c, d) {
      d = d || this.index;
      c = B(c) ? 's ' + c + '-' + this.index + ' [' + this.text.substring(c, d) + ']' : ' ' + d;
      throw Ba('lexerr', a, c, this.text);
    },
    readNumber: function () {
      for (var a = '', c = this.index; this.index < this.text.length;) {
        var d = K(this.text.charAt(this.index));
        if ('.' == d || this.isNumber(d))
          a += d;
        else {
          var e = this.peek();
          if ('e' == d && this.isExpOperator(e))
            a += d;
          else if (this.isExpOperator(d) && e && this.isNumber(e) && 'e' == a.charAt(a.length - 1))
            a += d;
          else if (!this.isExpOperator(d) || e && this.isNumber(e) || 'e' != a.charAt(a.length - 1))
            break;
          else
            this.throwError('Invalid exponent');
        }
        this.index++;
      }
      a *= 1;
      this.tokens.push({
        index: c,
        text: a,
        json: !0,
        fn: function () {
          return a;
        }
      });
    },
    readIdent: function () {
      for (var a = this, c = '', d = this.index, e, g, f, h; this.index < this.text.length;) {
        h = this.text.charAt(this.index);
        if ('.' === h || this.isIdent(h) || this.isNumber(h))
          '.' === h && (e = this.index), c += h;
        else
          break;
        this.index++;
      }
      if (e)
        for (g = this.index; g < this.text.length;) {
          h = this.text.charAt(g);
          if ('(' === h) {
            f = c.substr(e - d + 1);
            c = c.substr(0, e - d);
            this.index = g;
            break;
          }
          if (this.isWhitespace(h))
            g++;
          else
            break;
        }
      d = {
        index: d,
        text: c
      };
      if (Ma.hasOwnProperty(c))
        d.fn = Ma[c], d.json = Ma[c];
      else {
        var l = Dc(c, this.options, this.text);
        d.fn = D(function (a, c) {
          return l(a, c);
        }, {
          assign: function (d, e) {
            return ob(d, c, e, a.text, a.options);
          }
        });
      }
      this.tokens.push(d);
      f && (this.tokens.push({
        index: e,
        text: '.',
        json: !1
      }), this.tokens.push({
        index: e + 1,
        text: f,
        json: !1
      }));
    },
    readString: function (a) {
      var c = this.index;
      this.index++;
      for (var d = '', e = a, g = !1; this.index < this.text.length;) {
        var f = this.text.charAt(this.index), e = e + f;
        if (g)
          'u' === f ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError('Invalid unicode escape [\\u' + f + ']'), this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d = (g = Ne[f]) ? d + g : d + f, g = !1;
        else if ('\\' === f)
          g = !0;
        else {
          if (f === a) {
            this.index++;
            this.tokens.push({
              index: c,
              text: e,
              string: d,
              json: !0,
              fn: function () {
                return d;
              }
            });
            return;
          }
          d += f;
        }
        this.index++;
      }
      this.throwError('Unterminated quote', c);
    }
  };
  var $a = function (a, c, d) {
    this.lexer = a;
    this.$filter = c;
    this.options = d;
  };
  $a.ZERO = D(function () {
    return 0;
  }, { constant: !0 });
  $a.prototype = {
    constructor: $a,
    parse: function (a, c) {
      this.text = a;
      this.json = c;
      this.tokens = this.lexer.lex(a);
      c && (this.assignment = this.logicalOR, this.functionCall = this.fieldAccess = this.objectIndex = this.filterChain = function () {
        this.throwError('is not valid json', {
          text: a,
          index: 0
        });
      });
      var d = c ? this.primary() : this.statements();
      0 !== this.tokens.length && this.throwError('is an unexpected token', this.tokens[0]);
      d.literal = !!d.literal;
      d.constant = !!d.constant;
      return d;
    },
    primary: function () {
      var a;
      if (this.expect('('))
        a = this.filterChain(), this.consume(')');
      else if (this.expect('['))
        a = this.arrayDeclaration();
      else if (this.expect('{'))
        a = this.object();
      else {
        var c = this.expect();
        (a = c.fn) || this.throwError('not a primary expression', c);
        c.json && (a.constant = !0, a.literal = !0);
      }
      for (var d; c = this.expect('(', '[', '.');)
        '(' === c.text ? (a = this.functionCall(a, d), d = null) : '[' === c.text ? (d = a, a = this.objectIndex(a)) : '.' === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError('IMPOSSIBLE');
      return a;
    },
    throwError: function (a, c) {
      throw Ba('syntax', c.text, a, c.index + 1, this.text, this.text.substring(c.index));
    },
    peekToken: function () {
      if (0 === this.tokens.length)
        throw Ba('ueoe', this.text);
      return this.tokens[0];
    },
    peek: function (a, c, d, e) {
      if (0 < this.tokens.length) {
        var g = this.tokens[0], f = g.text;
        if (f === a || f === c || f === d || f === e || !(a || c || d || e))
          return g;
      }
      return !1;
    },
    expect: function (a, c, d, e) {
      return (a = this.peek(a, c, d, e)) ? (this.json && !a.json && this.throwError('is not valid json', a), this.tokens.shift(), a) : !1;
    },
    consume: function (a) {
      this.expect(a) || this.throwError('is unexpected, expecting [' + a + ']', this.peek());
    },
    unaryFn: function (a, c) {
      return D(function (d, e) {
        return a(d, e, c);
      }, { constant: c.constant });
    },
    ternaryFn: function (a, c, d) {
      return D(function (e, g) {
        return a(e, g) ? c(e, g) : d(e, g);
      }, { constant: a.constant && c.constant && d.constant });
    },
    binaryFn: function (a, c, d) {
      return D(function (e, g) {
        return c(e, g, a, d);
      }, { constant: a.constant && d.constant });
    },
    statements: function () {
      for (var a = [];;)
        if (0 < this.tokens.length && !this.peek('}', ')', ';', ']') && a.push(this.filterChain()), !this.expect(';'))
          return 1 === a.length ? a[0] : function (c, d) {
            for (var e, g = 0; g < a.length; g++) {
              var f = a[g];
              f && (e = f(c, d));
            }
            return e;
          };
    },
    filterChain: function () {
      for (var a = this.expression(), c;;)
        if (c = this.expect('|'))
          a = this.binaryFn(a, c.fn, this.filter());
        else
          return a;
    },
    filter: function () {
      for (var a = this.expect(), c = this.$filter(a.text), d = [];;)
        if (a = this.expect(':'))
          d.push(this.expression());
        else {
          var e = function (a, e, h) {
            h = [h];
            for (var l = 0; l < d.length; l++)
              h.push(d[l](a, e));
            return c.apply(a, h);
          };
          return function () {
            return e;
          };
        }
    },
    expression: function () {
      return this.assignment();
    },
    assignment: function () {
      var a = this.ternary(), c, d;
      return (d = this.expect('=')) ? (a.assign || this.throwError('implies assignment but [' + this.text.substring(0, d.index) + '] can not be assigned to', d), c = this.ternary(), function (d, g) {
        return a.assign(d, c(d, g), g);
      }) : a;
    },
    ternary: function () {
      var a = this.logicalOR(), c, d;
      if (this.expect('?')) {
        c = this.ternary();
        if (d = this.expect(':'))
          return this.ternaryFn(a, c, this.ternary());
        this.throwError('expected :', d);
      } else
        return a;
    },
    logicalOR: function () {
      for (var a = this.logicalAND(), c;;)
        if (c = this.expect('||'))
          a = this.binaryFn(a, c.fn, this.logicalAND());
        else
          return a;
    },
    logicalAND: function () {
      var a = this.equality(), c;
      if (c = this.expect('&&'))
        a = this.binaryFn(a, c.fn, this.logicalAND());
      return a;
    },
    equality: function () {
      var a = this.relational(), c;
      if (c = this.expect('==', '!=', '===', '!=='))
        a = this.binaryFn(a, c.fn, this.equality());
      return a;
    },
    relational: function () {
      var a = this.additive(), c;
      if (c = this.expect('<', '>', '<=', '>='))
        a = this.binaryFn(a, c.fn, this.relational());
      return a;
    },
    additive: function () {
      for (var a = this.multiplicative(), c; c = this.expect('+', '-');)
        a = this.binaryFn(a, c.fn, this.multiplicative());
      return a;
    },
    multiplicative: function () {
      for (var a = this.unary(), c; c = this.expect('*', '/', '%');)
        a = this.binaryFn(a, c.fn, this.unary());
      return a;
    },
    unary: function () {
      var a;
      return this.expect('+') ? this.primary() : (a = this.expect('-')) ? this.binaryFn($a.ZERO, a.fn, this.unary()) : (a = this.expect('!')) ? this.unaryFn(a.fn, this.unary()) : this.primary();
    },
    fieldAccess: function (a) {
      var c = this, d = this.expect().text, e = Dc(d, this.options, this.text);
      return D(function (c, d, h) {
        return e(h || a(c, d));
      }, {
        assign: function (e, f, h) {
          return ob(a(e, h), d, f, c.text, c.options);
        }
      });
    },
    objectIndex: function (a) {
      var c = this, d = this.expression();
      this.consume(']');
      return D(function (e, g) {
        var f = a(e, g), h = d(e, g), l;
        if (!f)
          return s;
        (f = Za(f[h], c.text)) && (f.then && c.options.unwrapPromises) && (l = f, '$$v' in f || (l.$$v = s, l.then(function (a) {
          l.$$v = a;
        })), f = f.$$v);
        return f;
      }, {
        assign: function (e, g, f) {
          var h = d(e, f);
          return Za(a(e, f), c.text)[h] = g;
        }
      });
    },
    functionCall: function (a, c) {
      var d = [];
      if (')' !== this.peekToken().text) {
        do
          d.push(this.expression());
        while (this.expect(','));
      }
      this.consume(')');
      var e = this;
      return function (g, f) {
        for (var h = [], l = c ? c(g, f) : g, k = 0; k < d.length; k++)
          h.push(d[k](g, f));
        k = a(g, f, l) || C;
        Za(l, e.text);
        Za(k, e.text);
        h = k.apply ? k.apply(l, h) : k(h[0], h[1], h[2], h[3], h[4]);
        return Za(h, e.text);
      };
    },
    arrayDeclaration: function () {
      var a = [], c = !0;
      if (']' !== this.peekToken().text) {
        do {
          if (this.peek(']'))
            break;
          var d = this.expression();
          a.push(d);
          d.constant || (c = !1);
        } while (this.expect(','));
      }
      this.consume(']');
      return D(function (c, d) {
        for (var f = [], h = 0; h < a.length; h++)
          f.push(a[h](c, d));
        return f;
      }, {
        literal: !0,
        constant: c
      });
    },
    object: function () {
      var a = [], c = !0;
      if ('}' !== this.peekToken().text) {
        do {
          if (this.peek('}'))
            break;
          var d = this.expect(), d = d.string || d.text;
          this.consume(':');
          var e = this.expression();
          a.push({
            key: d,
            value: e
          });
          e.constant || (c = !1);
        } while (this.expect(','));
      }
      this.consume('}');
      return D(function (c, d) {
        for (var e = {}, l = 0; l < a.length; l++) {
          var k = a[l];
          e[k.key] = k.value(c, d);
        }
        return e;
      }, {
        literal: !0,
        constant: c
      });
    }
  };
  var Mb = {}, ua = t('$sce'), ga = {
      HTML: 'html',
      CSS: 'css',
      URL: 'url',
      RESOURCE_URL: 'resourceUrl',
      JS: 'js'
    }, W = U.createElement('a'), Hc = sa(O.location.href, !0);
  gc.$inject = ['$provide'];
  Ic.$inject = ['$locale'];
  Kc.$inject = ['$locale'];
  var Nc = '.', Ie = {
      yyyy: $('FullYear', 4),
      yy: $('FullYear', 2, 0, !0),
      y: $('FullYear', 1),
      MMMM: pb('Month'),
      MMM: pb('Month', !0),
      MM: $('Month', 2, 1),
      M: $('Month', 1, 1),
      dd: $('Date', 2),
      d: $('Date', 1),
      HH: $('Hours', 2),
      H: $('Hours', 1),
      hh: $('Hours', 2, -12),
      h: $('Hours', 1, -12),
      mm: $('Minutes', 2),
      m: $('Minutes', 1),
      ss: $('Seconds', 2),
      s: $('Seconds', 1),
      sss: $('Milliseconds', 3),
      EEEE: pb('Day'),
      EEE: pb('Day', !0),
      a: function (a, c) {
        return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1];
      },
      Z: function (a) {
        a = -1 * a.getTimezoneOffset();
        return a = (0 <= a ? '+' : '') + (Ob(Math[0 < a ? 'floor' : 'ceil'](a / 60), 2) + Ob(Math.abs(a % 60), 2));
      }
    }, He = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, Ge = /^\-?\d+$/;
  Jc.$inject = ['$locale'];
  var Ee = aa(K), Fe = aa(Fa);
  Lc.$inject = ['$parse'];
  var cd = aa({
      restrict: 'E',
      compile: function (a, c) {
        8 >= S && (c.href || c.name || c.$set('href', ''), a.append(U.createComment('IE fix')));
        if (!c.href && !c.xlinkHref && !c.name)
          return function (a, c) {
            var g = '[object SVGAnimatedString]' === wa.call(c.prop('href')) ? 'xlink:href' : 'href';
            c.on('click', function (a) {
              c.attr(g) || a.preventDefault();
            });
          };
      }
    }), zb = {};
  q(kb, function (a, c) {
    if ('multiple' != a) {
      var d = na('ng-' + c);
      zb[d] = function () {
        return {
          priority: 100,
          link: function (a, g, f) {
            a.$watch(f[d], function (a) {
              f.$set(c, !!a);
            });
          }
        };
      };
    }
  });
  q([
    'src',
    'srcset',
    'href'
  ], function (a) {
    var c = na('ng-' + a);
    zb[c] = function () {
      return {
        priority: 99,
        link: function (d, e, g) {
          var f = a, h = a;
          'href' === a && '[object SVGAnimatedString]' === wa.call(e.prop('href')) && (h = 'xlinkHref', g.$attr[h] = 'xlink:href', f = null);
          g.$observe(c, function (a) {
            a && (g.$set(h, a), S && f && e.prop(f, g[h]));
          });
        }
      };
    };
  });
  var sb = {
      $addControl: C,
      $removeControl: C,
      $setValidity: C,
      $setDirty: C,
      $setPristine: C
    };
  Oc.$inject = [
    '$element',
    '$attrs',
    '$scope',
    '$animate'
  ];
  var Qc = function (a) {
      return [
        '$timeout',
        function (c) {
          return {
            name: 'form',
            restrict: a ? 'EAC' : 'E',
            controller: Oc,
            compile: function () {
              return {
                pre: function (a, e, g, f) {
                  if (!g.action) {
                    var h = function (a) {
                      a.preventDefault ? a.preventDefault() : a.returnValue = !1;
                    };
                    Pc(e[0], 'submit', h);
                    e.on('$destroy', function () {
                      c(function () {
                        Fb(e[0], 'submit', h);
                      }, 0, !1);
                    });
                  }
                  var l = e.parent().controller('form'), k = g.name || g.ngForm;
                  k && ob(a, k, f, k);
                  if (l)
                    e.on('$destroy', function () {
                      l.$removeControl(f);
                      k && ob(a, k, s, k);
                      D(f, sb);
                    });
                }
              };
            }
          };
        }
      ];
    }, dd = Qc(), qd = Qc(!0), Oe = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, Pe = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i, Qe = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, Rc = {
      text: ub,
      number: function (a, c, d, e, g, f) {
        ub(a, c, d, e, g, f);
        e.$parsers.push(function (a) {
          var c = e.$isEmpty(a);
          if (c || Qe.test(a))
            return e.$setValidity('number', !0), '' === a ? null : c ? a : parseFloat(a);
          e.$setValidity('number', !1);
          return s;
        });
        Je(e, 'number', c);
        e.$formatters.push(function (a) {
          return e.$isEmpty(a) ? '' : '' + a;
        });
        d.min && (a = function (a) {
          var c = parseFloat(d.min);
          return pa(e, 'min', e.$isEmpty(a) || a >= c, a);
        }, e.$parsers.push(a), e.$formatters.push(a));
        d.max && (a = function (a) {
          var c = parseFloat(d.max);
          return pa(e, 'max', e.$isEmpty(a) || a <= c, a);
        }, e.$parsers.push(a), e.$formatters.push(a));
        e.$formatters.push(function (a) {
          return pa(e, 'number', e.$isEmpty(a) || vb(a), a);
        });
      },
      url: function (a, c, d, e, g, f) {
        ub(a, c, d, e, g, f);
        a = function (a) {
          return pa(e, 'url', e.$isEmpty(a) || Oe.test(a), a);
        };
        e.$formatters.push(a);
        e.$parsers.push(a);
      },
      email: function (a, c, d, e, g, f) {
        ub(a, c, d, e, g, f);
        a = function (a) {
          return pa(e, 'email', e.$isEmpty(a) || Pe.test(a), a);
        };
        e.$formatters.push(a);
        e.$parsers.push(a);
      },
      radio: function (a, c, d, e) {
        E(d.name) && c.attr('name', bb());
        c.on('click', function () {
          c[0].checked && a.$apply(function () {
            e.$setViewValue(d.value);
          });
        });
        e.$render = function () {
          c[0].checked = d.value == e.$viewValue;
        };
        d.$observe('value', e.$render);
      },
      checkbox: function (a, c, d, e) {
        var g = d.ngTrueValue, f = d.ngFalseValue;
        w(g) || (g = !0);
        w(f) || (f = !1);
        c.on('click', function () {
          a.$apply(function () {
            e.$setViewValue(c[0].checked);
          });
        });
        e.$render = function () {
          c[0].checked = e.$viewValue;
        };
        e.$isEmpty = function (a) {
          return a !== g;
        };
        e.$formatters.push(function (a) {
          return a === g;
        });
        e.$parsers.push(function (a) {
          return a ? g : f;
        });
      },
      hidden: C,
      button: C,
      submit: C,
      reset: C,
      file: C
    }, dc = [
      '$browser',
      '$sniffer',
      function (a, c) {
        return {
          restrict: 'E',
          require: '?ngModel',
          link: function (d, e, g, f) {
            f && (Rc[K(g.type)] || Rc.text)(d, e, g, f, c, a);
          }
        };
      }
    ], rb = 'ng-valid', qb = 'ng-invalid', La = 'ng-pristine', tb = 'ng-dirty', Re = [
      '$scope',
      '$exceptionHandler',
      '$attrs',
      '$element',
      '$parse',
      '$animate',
      function (a, c, d, e, g, f) {
        function h(a, c) {
          c = c ? '-' + fb(c, '-') : '';
          f.removeClass(e, (a ? qb : rb) + c);
          f.addClass(e, (a ? rb : qb) + c);
        }
        this.$modelValue = this.$viewValue = Number.NaN;
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$pristine = !0;
        this.$dirty = !1;
        this.$valid = !0;
        this.$invalid = !1;
        this.$name = d.name;
        var l = g(d.ngModel), k = l.assign;
        if (!k)
          throw t('ngModel')('nonassign', d.ngModel, ha(e));
        this.$render = C;
        this.$isEmpty = function (a) {
          return E(a) || '' === a || null === a || a !== a;
        };
        var m = e.inheritedData('$formController') || sb, n = 0, p = this.$error = {};
        e.addClass(La);
        h(!0);
        this.$setValidity = function (a, c) {
          p[a] !== !c && (c ? (p[a] && n--, n || (h(!0), this.$valid = !0, this.$invalid = !1)) : (h(!1), this.$invalid = !0, this.$valid = !1, n++), p[a] = !c, h(c, a), m.$setValidity(a, c, this));
        };
        this.$setPristine = function () {
          this.$dirty = !1;
          this.$pristine = !0;
          f.removeClass(e, tb);
          f.addClass(e, La);
        };
        this.$setViewValue = function (d) {
          this.$viewValue = d;
          this.$pristine && (this.$dirty = !0, this.$pristine = !1, f.removeClass(e, La), f.addClass(e, tb), m.$setDirty());
          q(this.$parsers, function (a) {
            d = a(d);
          });
          this.$modelValue !== d && (this.$modelValue = d, k(a, d), q(this.$viewChangeListeners, function (a) {
            try {
              a();
            } catch (d) {
              c(d);
            }
          }));
        };
        var r = this;
        a.$watch(function () {
          var c = l(a);
          if (r.$modelValue !== c) {
            var d = r.$formatters, e = d.length;
            for (r.$modelValue = c; e--;)
              c = d[e](c);
            r.$viewValue !== c && (r.$viewValue = c, r.$render());
          }
          return c;
        });
      }
    ], Fd = function () {
      return {
        require: [
          'ngModel',
          '^?form'
        ],
        controller: Re,
        link: function (a, c, d, e) {
          var g = e[0], f = e[1] || sb;
          f.$addControl(g);
          a.$on('$destroy', function () {
            f.$removeControl(g);
          });
        }
      };
    }, Hd = aa({
      require: 'ngModel',
      link: function (a, c, d, e) {
        e.$viewChangeListeners.push(function () {
          a.$eval(d.ngChange);
        });
      }
    }), ec = function () {
      return {
        require: '?ngModel',
        link: function (a, c, d, e) {
          if (e) {
            d.required = !0;
            var g = function (a) {
              if (d.required && e.$isEmpty(a))
                e.$setValidity('required', !1);
              else
                return e.$setValidity('required', !0), a;
            };
            e.$formatters.push(g);
            e.$parsers.unshift(g);
            d.$observe('required', function () {
              g(e.$viewValue);
            });
          }
        }
      };
    }, Gd = function () {
      return {
        require: 'ngModel',
        link: function (a, c, d, e) {
          var g = (a = /\/(.*)\//.exec(d.ngList)) && RegExp(a[1]) || d.ngList || ',';
          e.$parsers.push(function (a) {
            if (!E(a)) {
              var c = [];
              a && q(a.split(g), function (a) {
                a && c.push(ca(a));
              });
              return c;
            }
          });
          e.$formatters.push(function (a) {
            return M(a) ? a.join(', ') : s;
          });
          e.$isEmpty = function (a) {
            return !a || !a.length;
          };
        }
      };
    }, Se = /^(true|false|\d+)$/, Id = function () {
      return {
        priority: 100,
        compile: function (a, c) {
          return Se.test(c.ngValue) ? function (a, c, g) {
            g.$set('value', a.$eval(g.ngValue));
          } : function (a, c, g) {
            a.$watch(g.ngValue, function (a) {
              g.$set('value', a);
            });
          };
        }
      };
    }, id = va(function (a, c, d) {
      c.addClass('ng-binding').data('$binding', d.ngBind);
      a.$watch(d.ngBind, function (a) {
        c.text(a == s ? '' : a);
      });
    }), kd = [
      '$interpolate',
      function (a) {
        return function (c, d, e) {
          c = a(d.attr(e.$attr.ngBindTemplate));
          d.addClass('ng-binding').data('$binding', c);
          e.$observe('ngBindTemplate', function (a) {
            d.text(a);
          });
        };
      }
    ], jd = [
      '$sce',
      '$parse',
      function (a, c) {
        return function (d, e, g) {
          e.addClass('ng-binding').data('$binding', g.ngBindHtml);
          var f = c(g.ngBindHtml);
          d.$watch(function () {
            return (f(d) || '').toString();
          }, function (c) {
            e.html(a.getTrustedHtml(f(d)) || '');
          });
        };
      }
    ], ld = Pb('', !0), nd = Pb('Odd', 0), md = Pb('Even', 1), od = va({
      compile: function (a, c) {
        c.$set('ngCloak', s);
        a.removeClass('ng-cloak');
      }
    }), pd = [function () {
        return {
          scope: !0,
          controller: '@',
          priority: 500
        };
      }], fc = {};
  q('click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste'.split(' '), function (a) {
    var c = na('ng-' + a);
    fc[c] = [
      '$parse',
      function (d) {
        return {
          compile: function (e, g) {
            var f = d(g[c]);
            return function (c, d, e) {
              d.on(K(a), function (a) {
                c.$apply(function () {
                  f(c, { $event: a });
                });
              });
            };
          }
        };
      }
    ];
  });
  var sd = [
      '$animate',
      function (a) {
        return {
          transclude: 'element',
          priority: 600,
          terminal: !0,
          restrict: 'A',
          $$tlb: !0,
          link: function (c, d, e, g, f) {
            var h, l, k;
            c.$watch(e.ngIf, function (g) {
              Qa(g) ? l || (l = c.$new(), f(l, function (c) {
                c[c.length++] = U.createComment(' end ngIf: ' + e.ngIf + ' ');
                h = { clone: c };
                a.enter(c, d.parent(), d);
              })) : (k && (k.remove(), k = null), l && (l.$destroy(), l = null), h && (k = yb(h.clone), a.leave(k, function () {
                k = null;
              }), h = null));
            });
          }
        };
      }
    ], td = [
      '$http',
      '$templateCache',
      '$anchorScroll',
      '$animate',
      '$sce',
      function (a, c, d, e, g) {
        return {
          restrict: 'ECA',
          priority: 400,
          terminal: !0,
          transclude: 'element',
          controller: Ea.noop,
          compile: function (f, h) {
            var l = h.ngInclude || h.src, k = h.onload || '', m = h.autoscroll;
            return function (f, h, q, s, u) {
              var F = 0, v, y, A, x = function () {
                  y && (y.remove(), y = null);
                  v && (v.$destroy(), v = null);
                  A && (e.leave(A, function () {
                    y = null;
                  }), y = A, A = null);
                };
              f.$watch(g.parseAsResourceUrl(l), function (g) {
                var l = function () {
                    !B(m) || m && !f.$eval(m) || d();
                  }, q = ++F;
                g ? (a.get(g, { cache: c }).success(function (a) {
                  if (q === F) {
                    var c = f.$new();
                    s.template = a;
                    a = u(c, function (a) {
                      x();
                      e.enter(a, null, h, l);
                    });
                    v = c;
                    A = a;
                    v.$emit('$includeContentLoaded');
                    f.$eval(k);
                  }
                }).error(function () {
                  q === F && x();
                }), f.$emit('$includeContentRequested')) : (x(), s.template = null);
              });
            };
          }
        };
      }
    ], Jd = [
      '$compile',
      function (a) {
        return {
          restrict: 'ECA',
          priority: -400,
          require: 'ngInclude',
          link: function (c, d, e, g) {
            d.html(g.template);
            a(d.contents())(c);
          }
        };
      }
    ], ud = va({
      priority: 450,
      compile: function () {
        return {
          pre: function (a, c, d) {
            a.$eval(d.ngInit);
          }
        };
      }
    }), vd = va({
      terminal: !0,
      priority: 1000
    }), wd = [
      '$locale',
      '$interpolate',
      function (a, c) {
        var d = /{}/g;
        return {
          restrict: 'EA',
          link: function (e, g, f) {
            var h = f.count, l = f.$attr.when && g.attr(f.$attr.when), k = f.offset || 0, m = e.$eval(l) || {}, n = {}, p = c.startSymbol(), r = c.endSymbol(), s = /^when(Minus)?(.+)$/;
            q(f, function (a, c) {
              s.test(c) && (m[K(c.replace('when', '').replace('Minus', '-'))] = g.attr(f.$attr[c]));
            });
            q(m, function (a, e) {
              n[e] = c(a.replace(d, p + h + '-' + k + r));
            });
            e.$watch(function () {
              var c = parseFloat(e.$eval(h));
              if (isNaN(c))
                return '';
              c in m || (c = a.pluralCat(c - k));
              return n[c](e, g, !0);
            }, function (a) {
              g.text(a);
            });
          }
        };
      }
    ], xd = [
      '$parse',
      '$animate',
      function (a, c) {
        var d = t('ngRepeat');
        return {
          transclude: 'element',
          priority: 1000,
          terminal: !0,
          $$tlb: !0,
          link: function (e, g, f, h, l) {
            var k = f.ngRepeat, m = k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/), n, p, r, s, u, F, v = { $id: Ia };
            if (!m)
              throw d('iexp', k);
            f = m[1];
            h = m[2];
            (m = m[3]) ? (n = a(m), p = function (a, c, d) {
              F && (v[F] = a);
              v[u] = c;
              v.$index = d;
              return n(e, v);
            }) : (r = function (a, c) {
              return Ia(c);
            }, s = function (a) {
              return a;
            });
            m = f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
            if (!m)
              throw d('iidexp', f);
            u = m[3] || m[1];
            F = m[2];
            var B = {};
            e.$watchCollection(h, function (a) {
              var f, h, m = g[0], n, v = {}, H, R, w, C, T, t, E = [];
              if (ab(a))
                T = a, n = p || r;
              else {
                n = p || s;
                T = [];
                for (w in a)
                  a.hasOwnProperty(w) && '$' != w.charAt(0) && T.push(w);
                T.sort();
              }
              H = T.length;
              h = E.length = T.length;
              for (f = 0; f < h; f++)
                if (w = a === T ? f : T[f], C = a[w], C = n(w, C, f), Aa(C, '`track by` id'), B.hasOwnProperty(C))
                  t = B[C], delete B[C], v[C] = t, E[f] = t;
                else {
                  if (v.hasOwnProperty(C))
                    throw q(E, function (a) {
                      a && a.scope && (B[a.id] = a);
                    }), d('dupes', k, C);
                  E[f] = { id: C };
                  v[C] = !1;
                }
              for (w in B)
                B.hasOwnProperty(w) && (t = B[w], f = yb(t.clone), c.leave(f), q(f, function (a) {
                  a.$$NG_REMOVED = !0;
                }), t.scope.$destroy());
              f = 0;
              for (h = T.length; f < h; f++) {
                w = a === T ? f : T[f];
                C = a[w];
                t = E[f];
                E[f - 1] && (m = E[f - 1].clone[E[f - 1].clone.length - 1]);
                if (t.scope) {
                  R = t.scope;
                  n = m;
                  do
                    n = n.nextSibling;
                  while (n && n.$$NG_REMOVED);
                  t.clone[0] != n && c.move(yb(t.clone), null, y(m));
                  m = t.clone[t.clone.length - 1];
                } else
                  R = e.$new();
                R[u] = C;
                F && (R[F] = w);
                R.$index = f;
                R.$first = 0 === f;
                R.$last = f === H - 1;
                R.$middle = !(R.$first || R.$last);
                R.$odd = !(R.$even = 0 === (f & 1));
                t.scope || l(R, function (a) {
                  a[a.length++] = U.createComment(' end ngRepeat: ' + k + ' ');
                  c.enter(a, null, y(m));
                  m = a;
                  t.scope = R;
                  t.clone = a;
                  v[t.id] = t;
                });
              }
              B = v;
            });
          }
        };
      }
    ], yd = [
      '$animate',
      function (a) {
        return function (c, d, e) {
          c.$watch(e.ngShow, function (c) {
            a[Qa(c) ? 'removeClass' : 'addClass'](d, 'ng-hide');
          });
        };
      }
    ], rd = [
      '$animate',
      function (a) {
        return function (c, d, e) {
          c.$watch(e.ngHide, function (c) {
            a[Qa(c) ? 'addClass' : 'removeClass'](d, 'ng-hide');
          });
        };
      }
    ], zd = va(function (a, c, d) {
      a.$watch(d.ngStyle, function (a, d) {
        d && a !== d && q(d, function (a, d) {
          c.css(d, '');
        });
        a && c.css(a);
      }, !0);
    }), Ad = [
      '$animate',
      function (a) {
        return {
          restrict: 'EA',
          require: 'ngSwitch',
          controller: [
            '$scope',
            function () {
              this.cases = {};
            }
          ],
          link: function (c, d, e, g) {
            var f, h, l, k = [];
            c.$watch(e.ngSwitch || e.on, function (d) {
              var n, p = k.length;
              if (0 < p) {
                if (l) {
                  for (n = 0; n < p; n++)
                    l[n].remove();
                  l = null;
                }
                l = [];
                for (n = 0; n < p; n++) {
                  var r = h[n];
                  k[n].$destroy();
                  l[n] = r;
                  a.leave(r, function () {
                    l.splice(n, 1);
                    0 === l.length && (l = null);
                  });
                }
              }
              h = [];
              k = [];
              if (f = g.cases['!' + d] || g.cases['?'])
                c.$eval(e.change), q(f, function (d) {
                  var e = c.$new();
                  k.push(e);
                  d.transclude(e, function (c) {
                    var e = d.element;
                    h.push(c);
                    a.enter(c, e.parent(), e);
                  });
                });
            });
          }
        };
      }
    ], Bd = va({
      transclude: 'element',
      priority: 800,
      require: '^ngSwitch',
      link: function (a, c, d, e, g) {
        e.cases['!' + d.ngSwitchWhen] = e.cases['!' + d.ngSwitchWhen] || [];
        e.cases['!' + d.ngSwitchWhen].push({
          transclude: g,
          element: c
        });
      }
    }), Cd = va({
      transclude: 'element',
      priority: 800,
      require: '^ngSwitch',
      link: function (a, c, d, e, g) {
        e.cases['?'] = e.cases['?'] || [];
        e.cases['?'].push({
          transclude: g,
          element: c
        });
      }
    }), Ed = va({
      link: function (a, c, d, e, g) {
        if (!g)
          throw t('ngTransclude')('orphan', ha(c));
        g(function (a) {
          c.empty();
          c.append(a);
        });
      }
    }), ed = [
      '$templateCache',
      function (a) {
        return {
          restrict: 'E',
          terminal: !0,
          compile: function (c, d) {
            'text/ng-template' == d.type && a.put(d.id, c[0].text);
          }
        };
      }
    ], Te = t('ngOptions'), Dd = aa({ terminal: !0 }), fd = [
      '$compile',
      '$parse',
      function (a, c) {
        var d = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, e = { $setViewValue: C };
        return {
          restrict: 'E',
          require: [
            'select',
            '?ngModel'
          ],
          controller: [
            '$element',
            '$scope',
            '$attrs',
            function (a, c, d) {
              var l = this, k = {}, m = e, n;
              l.databound = d.ngModel;
              l.init = function (a, c, d) {
                m = a;
                n = d;
              };
              l.addOption = function (c) {
                Aa(c, '"option value"');
                k[c] = !0;
                m.$viewValue == c && (a.val(c), n.parent() && n.remove());
              };
              l.removeOption = function (a) {
                this.hasOption(a) && (delete k[a], m.$viewValue == a && this.renderUnknownOption(a));
              };
              l.renderUnknownOption = function (c) {
                c = '? ' + Ia(c) + ' ?';
                n.val(c);
                a.prepend(n);
                a.val(c);
                n.prop('selected', !0);
              };
              l.hasOption = function (a) {
                return k.hasOwnProperty(a);
              };
              c.$on('$destroy', function () {
                l.renderUnknownOption = C;
              });
            }
          ],
          link: function (e, f, h, l) {
            function k(a, c, d, e) {
              d.$render = function () {
                var a = d.$viewValue;
                e.hasOption(a) ? (A.parent() && A.remove(), c.val(a), '' === a && w.prop('selected', !0)) : E(a) && w ? c.val('') : e.renderUnknownOption(a);
              };
              c.on('change', function () {
                a.$apply(function () {
                  A.parent() && A.remove();
                  d.$setViewValue(c.val());
                });
              });
            }
            function m(a, c, d) {
              var e;
              d.$render = function () {
                var a = new Va(d.$viewValue);
                q(c.find('option'), function (c) {
                  c.selected = B(a.get(c.value));
                });
              };
              a.$watch(function () {
                xa(e, d.$viewValue) || (e = ba(d.$viewValue), d.$render());
              });
              c.on('change', function () {
                a.$apply(function () {
                  var a = [];
                  q(c.find('option'), function (c) {
                    c.selected && a.push(c.value);
                  });
                  d.$setViewValue(a);
                });
              });
            }
            function n(e, f, g) {
              function h() {
                var a = { '': [] }, c = [''], d, k, s, t, z;
                t = g.$modelValue;
                z = y(e) || [];
                var E = n ? Qb(z) : z, F, I, A;
                I = {};
                s = !1;
                var D, H;
                if (r)
                  if (w && M(t))
                    for (s = new Va([]), A = 0; A < t.length; A++)
                      I[m] = t[A], s.put(w(e, I), t[A]);
                  else
                    s = new Va(t);
                for (A = 0; F = E.length, A < F; A++) {
                  k = A;
                  if (n) {
                    k = E[A];
                    if ('$' === k.charAt(0))
                      continue;
                    I[n] = k;
                  }
                  I[m] = z[k];
                  d = p(e, I) || '';
                  (k = a[d]) || (k = a[d] = [], c.push(d));
                  r ? d = B(s.remove(w ? w(e, I) : q(e, I))) : (w ? (d = {}, d[m] = t, d = w(e, d) === w(e, I)) : d = t === q(e, I), s = s || d);
                  D = l(e, I);
                  D = B(D) ? D : '';
                  k.push({
                    id: w ? w(e, I) : n ? E[A] : A,
                    label: D,
                    selected: d
                  });
                }
                r || (u || null === t ? a[''].unshift({
                  id: '',
                  label: '',
                  selected: !s
                }) : s || a[''].unshift({
                  id: '?',
                  label: '',
                  selected: !0
                }));
                I = 0;
                for (E = c.length; I < E; I++) {
                  d = c[I];
                  k = a[d];
                  x.length <= I ? (t = {
                    element: C.clone().attr('label', d),
                    label: k.label
                  }, z = [t], x.push(z), f.append(t.element)) : (z = x[I], t = z[0], t.label != d && t.element.attr('label', t.label = d));
                  D = null;
                  A = 0;
                  for (F = k.length; A < F; A++)
                    s = k[A], (d = z[A + 1]) ? (D = d.element, d.label !== s.label && D.text(d.label = s.label), d.id !== s.id && D.val(d.id = s.id), d.selected !== s.selected && D.prop('selected', d.selected = s.selected)) : ('' === s.id && u ? H = u : (H = v.clone()).val(s.id).attr('selected', s.selected).text(s.label), z.push({
                      element: H,
                      label: s.label,
                      id: s.id,
                      selected: s.selected
                    }), D ? D.after(H) : t.element.append(H), D = H);
                  for (A++; z.length > A;)
                    z.pop().element.remove();
                }
                for (; x.length > I;)
                  x.pop()[0].element.remove();
              }
              var k;
              if (!(k = t.match(d)))
                throw Te('iexp', t, ha(f));
              var l = c(k[2] || k[1]), m = k[4] || k[6], n = k[5], p = c(k[3] || ''), q = c(k[2] ? k[1] : m), y = c(k[7]), w = k[8] ? c(k[8]) : null, x = [[{
                      element: f,
                      label: ''
                    }]];
              u && (a(u)(e), u.removeClass('ng-scope'), u.remove());
              f.empty();
              f.on('change', function () {
                e.$apply(function () {
                  var a, c = y(e) || [], d = {}, h, k, l, p, t, v, u;
                  if (r)
                    for (k = [], p = 0, v = x.length; p < v; p++)
                      for (a = x[p], l = 1, t = a.length; l < t; l++) {
                        if ((h = a[l].element)[0].selected) {
                          h = h.val();
                          n && (d[n] = h);
                          if (w)
                            for (u = 0; u < c.length && (d[m] = c[u], w(e, d) != h); u++);
                          else
                            d[m] = c[h];
                          k.push(q(e, d));
                        }
                      }
                  else {
                    h = f.val();
                    if ('?' == h)
                      k = s;
                    else if ('' === h)
                      k = null;
                    else if (w)
                      for (u = 0; u < c.length; u++) {
                        if (d[m] = c[u], w(e, d) == h) {
                          k = q(e, d);
                          break;
                        }
                      }
                    else
                      d[m] = c[h], n && (d[n] = h), k = q(e, d);
                    1 < x[0].length && x[0][1].id !== h && (x[0][1].selected = !1);
                  }
                  g.$setViewValue(k);
                });
              });
              g.$render = h;
              e.$watch(h);
            }
            if (l[1]) {
              var p = l[0];
              l = l[1];
              var r = h.multiple, t = h.ngOptions, u = !1, w, v = y(U.createElement('option')), C = y(U.createElement('optgroup')), A = v.clone();
              h = 0;
              for (var x = f.children(), D = x.length; h < D; h++)
                if ('' === x[h].value) {
                  w = u = x.eq(h);
                  break;
                }
              p.init(l, u, A);
              r && (l.$isEmpty = function (a) {
                return !a || 0 === a.length;
              });
              t ? n(e, f, l) : r ? m(e, f, l) : k(e, f, l, p);
            }
          }
        };
      }
    ], hd = [
      '$interpolate',
      function (a) {
        var c = {
            addOption: C,
            removeOption: C
          };
        return {
          restrict: 'E',
          priority: 100,
          compile: function (d, e) {
            if (E(e.value)) {
              var g = a(d.text(), !0);
              g || e.$set('value', d.text());
            }
            return function (a, d, e) {
              var k = d.parent(), m = k.data('$selectController') || k.parent().data('$selectController');
              m && m.databound ? d.prop('selected', !1) : m = c;
              g ? a.$watch(g, function (a, c) {
                e.$set('value', a);
                a !== c && m.removeOption(c);
                m.addOption(a);
              }) : m.addOption(e.value);
              d.on('$destroy', function () {
                m.removeOption(e.value);
              });
            };
          }
        };
      }
    ], gd = aa({
      restrict: 'E',
      terminal: !0
    });
  O.angular.bootstrap ? console.log('WARNING: Tried to load angular more than once.') : ((Ga = O.jQuery) ? (y = Ga, D(Ga.fn, {
    scope: Ja.scope,
    isolateScope: Ja.isolateScope,
    controller: Ja.controller,
    injector: Ja.injector,
    inheritedData: Ja.inheritedData
  }), Ab('remove', !0, !0, !1), Ab('empty', !1, !1, !1), Ab('html', !1, !1, !0)) : y = N, Ea.element = y, Zc(Ea), y(U).ready(function () {
    Wc(U, $b);
  }));
}(window, document));
!angular.$$csp() && angular.element(document).find('head').prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}</style>');
//# sourceMappingURL=angular.min.js.map
/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function (e, undefined) {
  var t, n, r = typeof undefined, i = e.location, o = e.document, s = o.documentElement, a = e.jQuery, u = e.$, l = {}, c = [], p = '2.0.3', f = c.concat, h = c.push, d = c.slice, g = c.indexOf, m = l.toString, y = l.hasOwnProperty, v = p.trim, x = function (e, n) {
      return new x.fn.init(e, n, t);
    }, b = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, w = /\S+/g, T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, k = /^-ms-/, N = /-([\da-z])/gi, E = function (e, t) {
      return t.toUpperCase();
    }, S = function () {
      o.removeEventListener('DOMContentLoaded', S, !1), e.removeEventListener('load', S, !1), x.ready();
    };
  x.fn = x.prototype = {
    jquery: p,
    constructor: x,
    init: function (e, t, n) {
      var r, i;
      if (!e)
        return this;
      if ('string' == typeof e) {
        if (r = '<' === e.charAt(0) && '>' === e.charAt(e.length - 1) && e.length >= 3 ? [
            null,
            e,
            null
          ] : T.exec(e), !r || !r[1] && t)
          return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
          if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : o, !0)), C.test(r[1]) && x.isPlainObject(t))
            for (r in t)
              x.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          return this;
        }
        return i = o.getElementById(r[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = o, this.selector = e, this;
      }
      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? n.ready(e) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this));
    },
    selector: '',
    length: 0,
    toArray: function () {
      return d.call(this);
    },
    get: function (e) {
      return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
    },
    pushStack: function (e) {
      var t = x.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t;
    },
    each: function (e, t) {
      return x.each(this, e, t);
    },
    ready: function (e) {
      return x.ready.promise().done(e), this;
    },
    slice: function () {
      return this.pushStack(d.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (e) {
      var t = this.length, n = +e + (0 > e ? t : 0);
      return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
    },
    map: function (e) {
      return this.pushStack(x.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    },
    end: function () {
      return this.prevObject || this.constructor(null);
    },
    push: h,
    sort: [].sort,
    splice: [].splice
  }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () {
    var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
    for ('boolean' == typeof s && (l = s, s = arguments[1] || {}, a = 2), 'object' == typeof s || x.isFunction(s) || (s = {}), u === a && (s = this, --a); u > a; a++)
      if (null != (e = arguments[a]))
        for (t in e)
          n = s[t], r = e[t], s !== r && (l && r && (x.isPlainObject(r) || (i = x.isArray(r))) ? (i ? (i = !1, o = n && x.isArray(n) ? n : []) : o = n && x.isPlainObject(n) ? n : {}, s[t] = x.extend(l, o, r)) : r !== undefined && (s[t] = r));
    return s;
  }, x.extend({
    expando: 'jQuery' + (p + Math.random()).replace(/\D/g, ''),
    noConflict: function (t) {
      return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = a), x;
    },
    isReady: !1,
    readyWait: 1,
    holdReady: function (e) {
      e ? x.readyWait++ : x.ready(!0);
    },
    ready: function (e) {
      (e === !0 ? --x.readyWait : x.isReady) || (x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(o, [x]), x.fn.trigger && x(o).trigger('ready').off('ready')));
    },
    isFunction: function (e) {
      return 'function' === x.type(e);
    },
    isArray: Array.isArray,
    isWindow: function (e) {
      return null != e && e === e.window;
    },
    isNumeric: function (e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    },
    type: function (e) {
      return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? l[m.call(e)] || 'object' : typeof e;
    },
    isPlainObject: function (e) {
      if ('object' !== x.type(e) || e.nodeType || x.isWindow(e))
        return !1;
      try {
        if (e.constructor && !y.call(e.constructor.prototype, 'isPrototypeOf'))
          return !1;
      } catch (t) {
        return !1;
      }
      return !0;
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e)
        return !1;
      return !0;
    },
    error: function (e) {
      throw Error(e);
    },
    parseHTML: function (e, t, n) {
      if (!e || 'string' != typeof e)
        return null;
      'boolean' == typeof t && (n = t, t = !1), t = t || o;
      var r = C.exec(e), i = !n && [];
      return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes));
    },
    parseJSON: JSON.parse,
    parseXML: function (e) {
      var t, n;
      if (!e || 'string' != typeof e)
        return null;
      try {
        n = new DOMParser(), t = n.parseFromString(e, 'text/xml');
      } catch (r) {
        t = undefined;
      }
      return (!t || t.getElementsByTagName('parsererror').length) && x.error('Invalid XML: ' + e), t;
    },
    noop: function () {
    },
    globalEval: function (e) {
      var t, n = eval;
      e = x.trim(e), e && (1 === e.indexOf('use strict') ? (t = o.createElement('script'), t.text = e, o.head.appendChild(t).parentNode.removeChild(t)) : n(e));
    },
    camelCase: function (e) {
      return e.replace(k, 'ms-').replace(N, E);
    },
    nodeName: function (e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    },
    each: function (e, t, n) {
      var r, i = 0, o = e.length, s = j(e);
      if (n) {
        if (s) {
          for (; o > i; i++)
            if (r = t.apply(e[i], n), r === !1)
              break;
        } else
          for (i in e)
            if (r = t.apply(e[i], n), r === !1)
              break;
      } else if (s) {
        for (; o > i; i++)
          if (r = t.call(e[i], i, e[i]), r === !1)
            break;
      } else
        for (i in e)
          if (r = t.call(e[i], i, e[i]), r === !1)
            break;
      return e;
    },
    trim: function (e) {
      return null == e ? '' : v.call(e);
    },
    makeArray: function (e, t) {
      var n = t || [];
      return null != e && (j(Object(e)) ? x.merge(n, 'string' == typeof e ? [e] : e) : h.call(n, e)), n;
    },
    inArray: function (e, t, n) {
      return null == t ? -1 : g.call(t, e, n);
    },
    merge: function (e, t) {
      var n = t.length, r = e.length, i = 0;
      if ('number' == typeof n)
        for (; n > i; i++)
          e[r++] = t[i];
      else
        while (t[i] !== undefined)
          e[r++] = t[i++];
      return e.length = r, e;
    },
    grep: function (e, t, n) {
      var r, i = [], o = 0, s = e.length;
      for (n = !!n; s > o; o++)
        r = !!t(e[o], o), n !== r && i.push(e[o]);
      return i;
    },
    map: function (e, t, n) {
      var r, i = 0, o = e.length, s = j(e), a = [];
      if (s)
        for (; o > i; i++)
          r = t(e[i], i, n), null != r && (a[a.length] = r);
      else
        for (i in e)
          r = t(e[i], i, n), null != r && (a[a.length] = r);
      return f.apply([], a);
    },
    guid: 1,
    proxy: function (e, t) {
      var n, r, i;
      return 'string' == typeof t && (n = e[t], t = e, e = n), x.isFunction(e) ? (r = d.call(arguments, 2), i = function () {
        return e.apply(t || this, r.concat(d.call(arguments)));
      }, i.guid = e.guid = e.guid || x.guid++, i) : undefined;
    },
    access: function (e, t, n, r, i, o, s) {
      var a = 0, u = e.length, l = null == n;
      if ('object' === x.type(n)) {
        i = !0;
        for (a in n)
          x.access(e, t, a, n[a], !0, o, s);
      } else if (r !== undefined && (i = !0, x.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
          return l.call(x(e), n);
        })), t))
        for (; u > a; a++)
          t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    now: Date.now,
    swap: function (e, t, n, r) {
      var i, o, s = {};
      for (o in t)
        s[o] = e.style[o], e.style[o] = t[o];
      i = n.apply(e, r || []);
      for (o in t)
        e.style[o] = s[o];
      return i;
    }
  }), x.ready.promise = function (t) {
    return n || (n = x.Deferred(), 'complete' === o.readyState ? setTimeout(x.ready) : (o.addEventListener('DOMContentLoaded', S, !1), e.addEventListener('load', S, !1))), n.promise(t);
  }, x.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (e, t) {
    l['[object ' + t + ']'] = t.toLowerCase();
  });
  function j(e) {
    var t = e.length, n = x.type(e);
    return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : 'array' === n || 'function' !== n && (0 === t || 'number' == typeof t && t > 0 && t - 1 in e);
  }
  t = x(o), function (e, undefined) {
    var t, n, r, i, o, s, a, u, l, c, p, f, h, d, g, m, y, v = 'sizzle' + -new Date(), b = e.document, w = 0, T = 0, C = st(), k = st(), N = st(), E = !1, S = function (e, t) {
        return e === t ? (E = !0, 0) : 0;
      }, j = typeof undefined, D = 1 << 31, A = {}.hasOwnProperty, L = [], q = L.pop, H = L.push, O = L.push, F = L.slice, P = L.indexOf || function (e) {
        var t = 0, n = this.length;
        for (; n > t; t++)
          if (this[t] === e)
            return t;
        return -1;
      }, R = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped', M = '[\\x20\\t\\r\\n\\f]', W = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+', $ = W.replace('w', 'w#'), B = '\\[' + M + '*(' + W + ')' + M + '*(?:([*^$|!~]?=)' + M + '*(?:([\'"])((?:\\\\.|[^\\\\])*?)\\3|(' + $ + ')|)|)' + M + '*\\]', I = ':(' + W + ')(?:\\((([\'"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|' + B.replace(3, 8) + ')*)|.*)\\)|)', z = RegExp('^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$', 'g'), _ = RegExp('^' + M + '*,' + M + '*'), X = RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'), U = RegExp(M + '*[+~]'), Y = RegExp('=' + M + '*([^\\]\'"]*)' + M + '*\\]', 'g'), V = RegExp(I), G = RegExp('^' + $ + '$'), J = {
        ID: RegExp('^#(' + W + ')'),
        CLASS: RegExp('^\\.(' + W + ')'),
        TAG: RegExp('^(' + W.replace('w', 'w*') + ')'),
        ATTR: RegExp('^' + B),
        PSEUDO: RegExp('^' + I),
        CHILD: RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + M + '*(even|odd|(([+-]|)(\\d*)n|)' + M + '*(?:([+-]|)' + M + '*(\\d+)|))' + M + '*\\)|)', 'i'),
        bool: RegExp('^(?:' + R + ')$', 'i'),
        needsContext: RegExp('^' + M + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + M + '*((?:-\\d)?\\d*)' + M + '*\\)|)(?=[^-]|$)', 'i')
      }, Q = /^[^{]+\{\s*\[native \w/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Z = /^(?:input|select|textarea|button)$/i, et = /^h\d$/i, tt = /'|\\/g, nt = RegExp('\\\\([\\da-f]{1,6}' + M + '?|(' + M + ')|.)', 'ig'), rt = function (e, t, n) {
        var r = '0x' + t - 65536;
        return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r);
      };
    try {
      O.apply(L = F.call(b.childNodes), b.childNodes), L[b.childNodes.length].nodeType;
    } catch (it) {
      O = {
        apply: L.length ? function (e, t) {
          H.apply(e, F.call(t));
        } : function (e, t) {
          var n = e.length, r = 0;
          while (e[n++] = t[r++]);
          e.length = n - 1;
        }
      };
    }
    function ot(e, t, r, i) {
      var o, s, a, u, l, f, g, m, x, w;
      if ((t ? t.ownerDocument || t : b) !== p && c(t), t = t || p, r = r || [], !e || 'string' != typeof e)
        return r;
      if (1 !== (u = t.nodeType) && 9 !== u)
        return [];
      if (h && !i) {
        if (o = K.exec(e))
          if (a = o[1]) {
            if (9 === u) {
              if (s = t.getElementById(a), !s || !s.parentNode)
                return r;
              if (s.id === a)
                return r.push(s), r;
            } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(a)) && y(t, s) && s.id === a)
              return r.push(s), r;
          } else {
            if (o[2])
              return O.apply(r, t.getElementsByTagName(e)), r;
            if ((a = o[3]) && n.getElementsByClassName && t.getElementsByClassName)
              return O.apply(r, t.getElementsByClassName(a)), r;
          }
        if (n.qsa && (!d || !d.test(e))) {
          if (m = g = v, x = t, w = 9 === u && e, 1 === u && 'object' !== t.nodeName.toLowerCase()) {
            f = gt(e), (g = t.getAttribute('id')) ? m = g.replace(tt, '\\$&') : t.setAttribute('id', m), m = '[id=\'' + m + '\'] ', l = f.length;
            while (l--)
              f[l] = m + mt(f[l]);
            x = U.test(e) && t.parentNode || t, w = f.join(',');
          }
          if (w)
            try {
              return O.apply(r, x.querySelectorAll(w)), r;
            } catch (T) {
            } finally {
              g || t.removeAttribute('id');
            }
        }
      }
      return kt(e.replace(z, '$1'), t, r, i);
    }
    function st() {
      var e = [];
      function t(n, r) {
        return e.push(n += ' ') > i.cacheLength && delete t[e.shift()], t[n] = r;
      }
      return t;
    }
    function at(e) {
      return e[v] = !0, e;
    }
    function ut(e) {
      var t = p.createElement('div');
      try {
        return !!e(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }
    function lt(e, t) {
      var n = e.split('|'), r = e.length;
      while (r--)
        i.attrHandle[n[r]] = t;
    }
    function ct(e, t) {
      var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
      if (r)
        return r;
      if (n)
        while (n = n.nextSibling)
          if (n === t)
            return -1;
      return e ? 1 : -1;
    }
    function pt(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return 'input' === n && t.type === e;
      };
    }
    function ft(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ('input' === n || 'button' === n) && t.type === e;
      };
    }
    function ht(e) {
      return at(function (t) {
        return t = +t, at(function (n, r) {
          var i, o = e([], n.length, t), s = o.length;
          while (s--)
            n[i = o[s]] && (n[i] = !(r[i] = n[i]));
        });
      });
    }
    s = ot.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return t ? 'HTML' !== t.nodeName : !1;
    }, n = ot.support = {}, c = ot.setDocument = function (e) {
      var t = e ? e.ownerDocument || e : b, r = t.defaultView;
      return t !== p && 9 === t.nodeType && t.documentElement ? (p = t, f = t.documentElement, h = !s(t), r && r.attachEvent && r !== r.top && r.attachEvent('onbeforeunload', function () {
        c();
      }), n.attributes = ut(function (e) {
        return e.className = 'i', !e.getAttribute('className');
      }), n.getElementsByTagName = ut(function (e) {
        return e.appendChild(t.createComment('')), !e.getElementsByTagName('*').length;
      }), n.getElementsByClassName = ut(function (e) {
        return e.innerHTML = '<div class=\'a\'></div><div class=\'a i\'></div>', e.firstChild.className = 'i', 2 === e.getElementsByClassName('i').length;
      }), n.getById = ut(function (e) {
        return f.appendChild(e).id = v, !t.getElementsByName || !t.getElementsByName(v).length;
      }), n.getById ? (i.find.ID = function (e, t) {
        if (typeof t.getElementById !== j && h) {
          var n = t.getElementById(e);
          return n && n.parentNode ? [n] : [];
        }
      }, i.filter.ID = function (e) {
        var t = e.replace(nt, rt);
        return function (e) {
          return e.getAttribute('id') === t;
        };
      }) : (delete i.find.ID, i.filter.ID = function (e) {
        var t = e.replace(nt, rt);
        return function (e) {
          var n = typeof e.getAttributeNode !== j && e.getAttributeNode('id');
          return n && n.value === t;
        };
      }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
        return typeof t.getElementsByTagName !== j ? t.getElementsByTagName(e) : undefined;
      } : function (e, t) {
        var n, r = [], i = 0, o = t.getElementsByTagName(e);
        if ('*' === e) {
          while (n = o[i++])
            1 === n.nodeType && r.push(n);
          return r;
        }
        return o;
      }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
        return typeof t.getElementsByClassName !== j && h ? t.getElementsByClassName(e) : undefined;
      }, g = [], d = [], (n.qsa = Q.test(t.querySelectorAll)) && (ut(function (e) {
        e.innerHTML = '<select><option selected=\'\'></option></select>', e.querySelectorAll('[selected]').length || d.push('\\[' + M + '*(?:value|' + R + ')'), e.querySelectorAll(':checked').length || d.push(':checked');
      }), ut(function (e) {
        var n = t.createElement('input');
        n.setAttribute('type', 'hidden'), e.appendChild(n).setAttribute('t', ''), e.querySelectorAll('[t^=\'\']').length && d.push('[*^$]=' + M + '*(?:\'\'|"")'), e.querySelectorAll(':enabled').length || d.push(':enabled', ':disabled'), e.querySelectorAll('*,:x'), d.push(',.*:');
      })), (n.matchesSelector = Q.test(m = f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ut(function (e) {
        n.disconnectedMatch = m.call(e, 'div'), m.call(e, '[s!=\'\']:x'), g.push('!=', I);
      }), d = d.length && RegExp(d.join('|')), g = g.length && RegExp(g.join('|')), y = Q.test(f.contains) || f.compareDocumentPosition ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t)
          while (t = t.parentNode)
            if (t === e)
              return !0;
        return !1;
      }, S = f.compareDocumentPosition ? function (e, r) {
        if (e === r)
          return E = !0, 0;
        var i = r.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(r);
        return i ? 1 & i || !n.sortDetached && r.compareDocumentPosition(e) === i ? e === t || y(b, e) ? -1 : r === t || y(b, r) ? 1 : l ? P.call(l, e) - P.call(l, r) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
      } : function (e, n) {
        var r, i = 0, o = e.parentNode, s = n.parentNode, a = [e], u = [n];
        if (e === n)
          return E = !0, 0;
        if (!o || !s)
          return e === t ? -1 : n === t ? 1 : o ? -1 : s ? 1 : l ? P.call(l, e) - P.call(l, n) : 0;
        if (o === s)
          return ct(e, n);
        r = e;
        while (r = r.parentNode)
          a.unshift(r);
        r = n;
        while (r = r.parentNode)
          u.unshift(r);
        while (a[i] === u[i])
          i++;
        return i ? ct(a[i], u[i]) : a[i] === b ? -1 : u[i] === b ? 1 : 0;
      }, t) : p;
    }, ot.matches = function (e, t) {
      return ot(e, null, null, t);
    }, ot.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Y, '=\'$1\']'), !(!n.matchesSelector || !h || g && g.test(t) || d && d.test(t)))
        try {
          var r = m.call(e, t);
          if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
            return r;
        } catch (i) {
        }
      return ot(t, p, null, [e]).length > 0;
    }, ot.contains = function (e, t) {
      return (e.ownerDocument || e) !== p && c(e), y(e, t);
    }, ot.attr = function (e, t) {
      (e.ownerDocument || e) !== p && c(e);
      var r = i.attrHandle[t.toLowerCase()], o = r && A.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !h) : undefined;
      return o === undefined ? n.attributes || !h ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null : o;
    }, ot.error = function (e) {
      throw Error('Syntax error, unrecognized expression: ' + e);
    }, ot.uniqueSort = function (e) {
      var t, r = [], i = 0, o = 0;
      if (E = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(S), E) {
        while (t = e[o++])
          t === e[o] && (i = r.push(o));
        while (i--)
          e.splice(r[i], 1);
      }
      return e;
    }, o = ot.getText = function (e) {
      var t, n = '', r = 0, i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ('string' == typeof e.textContent)
            return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling)
            n += o(e);
        } else if (3 === i || 4 === i)
          return e.nodeValue;
      } else
        for (; t = e[r]; r++)
          n += o(t);
      return n;
    }, i = ot.selectors = {
      cacheLength: 50,
      createPseudo: at,
      match: J,
      attrHandle: {},
      find: {},
      relative: {
        '>': {
          dir: 'parentNode',
          first: !0
        },
        ' ': { dir: 'parentNode' },
        '+': {
          dir: 'previousSibling',
          first: !0
        },
        '~': { dir: 'previousSibling' }
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(nt, rt), e[3] = (e[4] || e[5] || '').replace(nt, rt), '~=' === e[2] && (e[3] = ' ' + e[3] + ' '), e.slice(0, 4);
        },
        CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), 'nth' === e[1].slice(0, 3) ? (e[3] || ot.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3])), e[5] = +(e[7] + e[8] || 'odd' === e[3])) : e[3] && ot.error(e[0]), e;
        },
        PSEUDO: function (e) {
          var t, n = !e[5] && e[2];
          return J.CHILD.test(e[0]) ? null : (e[3] && e[4] !== undefined ? e[2] = e[4] : n && V.test(n) && (t = gt(n, !0)) && (t = n.indexOf(')', n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(nt, rt).toLowerCase();
          return '*' === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function (e) {
          var t = C[e + ' '];
          return t || (t = RegExp('(^|' + M + ')' + e + '(' + M + '|$)')) && C(e, function (e) {
            return t.test('string' == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute('class') || '');
          });
        },
        ATTR: function (e, t, n) {
          return function (r) {
            var i = ot.attr(r, e);
            return null == i ? '!=' === t : t ? (i += '', '=' === t ? i === n : '!=' === t ? i !== n : '^=' === t ? n && 0 === i.indexOf(n) : '*=' === t ? n && i.indexOf(n) > -1 : '$=' === t ? n && i.slice(-n.length) === n : '~=' === t ? (' ' + i + ' ').indexOf(n) > -1 : '|=' === t ? i === n || i.slice(0, n.length + 1) === n + '-' : !1) : !0;
          };
        },
        CHILD: function (e, t, n, r, i) {
          var o = 'nth' !== e.slice(0, 3), s = 'last' !== e.slice(-4), a = 'of-type' === t;
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var l, c, p, f, h, d, g = o !== s ? 'nextSibling' : 'previousSibling', m = t.parentNode, y = a && t.nodeName.toLowerCase(), x = !u && !a;
            if (m) {
              if (o) {
                while (g) {
                  p = t;
                  while (p = p[g])
                    if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType)
                      return !1;
                  d = g = 'only' === e && !d && 'nextSibling';
                }
                return !0;
              }
              if (d = [s ? m.firstChild : m.lastChild], s && x) {
                c = m[v] || (m[v] = {}), l = c[e] || [], h = l[0] === w && l[1], f = l[0] === w && l[2], p = h && m.childNodes[h];
                while (p = ++h && p && p[g] || (f = h = 0) || d.pop())
                  if (1 === p.nodeType && ++f && p === t) {
                    c[e] = [
                      w,
                      h,
                      f
                    ];
                    break;
                  }
              } else if (x && (l = (t[v] || (t[v] = {}))[e]) && l[0] === w)
                f = l[1];
              else
                while (p = ++h && p && p[g] || (f = h = 0) || d.pop())
                  if ((a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (x && ((p[v] || (p[v] = {}))[e] = [
                      w,
                      f
                    ]), p === t))
                    break;
              return f -= i, f === r || 0 === f % r && f / r >= 0;
            }
          };
        },
        PSEUDO: function (e, t) {
          var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ot.error('unsupported pseudo: ' + e);
          return r[v] ? r(t) : r.length > 1 ? (n = [
            e,
            e,
            '',
            t
          ], i.setFilters.hasOwnProperty(e.toLowerCase()) ? at(function (e, n) {
            var i, o = r(e, t), s = o.length;
            while (s--)
              i = P.call(e, o[s]), e[i] = !(n[i] = o[s]);
          }) : function (e) {
            return r(e, 0, n);
          }) : r;
        }
      },
      pseudos: {
        not: at(function (e) {
          var t = [], n = [], r = a(e.replace(z, '$1'));
          return r[v] ? at(function (e, t, n, i) {
            var o, s = r(e, null, i, []), a = e.length;
            while (a--)
              (o = s[a]) && (e[a] = !(t[a] = o));
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), !n.pop();
          };
        }),
        has: at(function (e) {
          return function (t) {
            return ot(e, t).length > 0;
          };
        }),
        contains: at(function (e) {
          return function (t) {
            return (t.textContent || t.innerText || o(t)).indexOf(e) > -1;
          };
        }),
        lang: at(function (e) {
          return G.test(e || '') || ot.error('unsupported lang: ' + e), e = e.replace(nt, rt).toLowerCase(), function (t) {
            var n;
            do
              if (n = h ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang'))
                return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + '-');
            while ((t = t.parentNode) && 1 === t.nodeType);
            return !1;
          };
        }),
        target: function (t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function (e) {
          return e === f;
        },
        focus: function (e) {
          return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: function (e) {
          return e.disabled === !1;
        },
        disabled: function (e) {
          return e.disabled === !0;
        },
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return 'input' === t && !!e.checked || 'option' === t && !!e.selected;
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeName > '@' || 3 === e.nodeType || 4 === e.nodeType)
              return !1;
          return !0;
        },
        parent: function (e) {
          return !i.pseudos.empty(e);
        },
        header: function (e) {
          return et.test(e.nodeName);
        },
        input: function (e) {
          return Z.test(e.nodeName);
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return 'input' === t && 'button' === e.type || 'button' === t;
        },
        text: function (e) {
          var t;
          return 'input' === e.nodeName.toLowerCase() && 'text' === e.type && (null == (t = e.getAttribute('type')) || t.toLowerCase() === e.type);
        },
        first: ht(function () {
          return [0];
        }),
        last: ht(function (e, t) {
          return [t - 1];
        }),
        eq: ht(function (e, t, n) {
          return [0 > n ? n + t : n];
        }),
        even: ht(function (e, t) {
          var n = 0;
          for (; t > n; n += 2)
            e.push(n);
          return e;
        }),
        odd: ht(function (e, t) {
          var n = 1;
          for (; t > n; n += 2)
            e.push(n);
          return e;
        }),
        lt: ht(function (e, t, n) {
          var r = 0 > n ? n + t : n;
          for (; --r >= 0;)
            e.push(r);
          return e;
        }),
        gt: ht(function (e, t, n) {
          var r = 0 > n ? n + t : n;
          for (; t > ++r;)
            e.push(r);
          return e;
        })
      }
    }, i.pseudos.nth = i.pseudos.eq;
    for (t in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      })
      i.pseudos[t] = pt(t);
    for (t in {
        submit: !0,
        reset: !0
      })
      i.pseudos[t] = ft(t);
    function dt() {
    }
    dt.prototype = i.filters = i.pseudos, i.setFilters = new dt();
    function gt(e, t) {
      var n, r, o, s, a, u, l, c = k[e + ' '];
      if (c)
        return t ? 0 : c.slice(0);
      a = e, u = [], l = i.preFilter;
      while (a) {
        (!n || (r = _.exec(a))) && (r && (a = a.slice(r[0].length) || a), u.push(o = [])), n = !1, (r = X.exec(a)) && (n = r.shift(), o.push({
          value: n,
          type: r[0].replace(z, ' ')
        }), a = a.slice(n.length));
        for (s in i.filter)
          !(r = J[s].exec(a)) || l[s] && !(r = l[s](r)) || (n = r.shift(), o.push({
            value: n,
            type: s,
            matches: r
          }), a = a.slice(n.length));
        if (!n)
          break;
      }
      return t ? a.length : a ? ot.error(e) : k(e, u).slice(0);
    }
    function mt(e) {
      var t = 0, n = e.length, r = '';
      for (; n > t; t++)
        r += e[t].value;
      return r;
    }
    function yt(e, t, n) {
      var i = t.dir, o = n && 'parentNode' === i, s = T++;
      return t.first ? function (t, n, r) {
        while (t = t[i])
          if (1 === t.nodeType || o)
            return e(t, n, r);
      } : function (t, n, a) {
        var u, l, c, p = w + ' ' + s;
        if (a) {
          while (t = t[i])
            if ((1 === t.nodeType || o) && e(t, n, a))
              return !0;
        } else
          while (t = t[i])
            if (1 === t.nodeType || o)
              if (c = t[v] || (t[v] = {}), (l = c[i]) && l[0] === p) {
                if ((u = l[1]) === !0 || u === r)
                  return u === !0;
              } else if (l = c[i] = [p], l[1] = e(t, n, a) || r, l[1] === !0)
                return !0;
      };
    }
    function vt(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;
        while (i--)
          if (!e[i](t, n, r))
            return !1;
        return !0;
      } : e[0];
    }
    function xt(e, t, n, r, i) {
      var o, s = [], a = 0, u = e.length, l = null != t;
      for (; u > a; a++)
        (o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
      return s;
    }
    function bt(e, t, n, r, i, o) {
      return r && !r[v] && (r = bt(r)), i && !i[v] && (i = bt(i, o)), at(function (o, s, a, u) {
        var l, c, p, f = [], h = [], d = s.length, g = o || Ct(t || '*', a.nodeType ? [a] : a, []), m = !e || !o && t ? g : xt(g, f, e, a, u), y = n ? i || (o ? e : d || r) ? [] : s : m;
        if (n && n(m, y, a, u), r) {
          l = xt(y, h), r(l, [], a, u), c = l.length;
          while (c--)
            (p = l[c]) && (y[h[c]] = !(m[h[c]] = p));
        }
        if (o) {
          if (i || e) {
            if (i) {
              l = [], c = y.length;
              while (c--)
                (p = y[c]) && l.push(m[c] = p);
              i(null, y = [], l, u);
            }
            c = y.length;
            while (c--)
              (p = y[c]) && (l = i ? P.call(o, p) : f[c]) > -1 && (o[l] = !(s[l] = p));
          }
        } else
          y = xt(y === s ? y.splice(d, y.length) : y), i ? i(null, s, y, u) : O.apply(s, y);
      });
    }
    function wt(e) {
      var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[' '], l = s ? 1 : 0, c = yt(function (e) {
          return e === t;
        }, a, !0), p = yt(function (e) {
          return P.call(t, e) > -1;
        }, a, !0), f = [function (e, n, r) {
            return !s && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r));
          }];
      for (; o > l; l++)
        if (n = i.relative[e[l].type])
          f = [yt(vt(f), n)];
        else {
          if (n = i.filter[e[l].type].apply(null, e[l].matches), n[v]) {
            for (r = ++l; o > r; r++)
              if (i.relative[e[r].type])
                break;
            return bt(l > 1 && vt(f), l > 1 && mt(e.slice(0, l - 1).concat({ value: ' ' === e[l - 2].type ? '*' : '' })).replace(z, '$1'), n, r > l && wt(e.slice(l, r)), o > r && wt(e = e.slice(r)), o > r && mt(e));
          }
          f.push(n);
        }
      return vt(f);
    }
    function Tt(e, t) {
      var n = 0, o = t.length > 0, s = e.length > 0, a = function (a, l, c, f, h) {
          var d, g, m, y = [], v = 0, x = '0', b = a && [], T = null != h, C = u, k = a || s && i.find.TAG('*', h && l.parentNode || l), N = w += null == C ? 1 : Math.random() || 0.1;
          for (T && (u = l !== p && l, r = n); null != (d = k[x]); x++) {
            if (s && d) {
              g = 0;
              while (m = e[g++])
                if (m(d, l, c)) {
                  f.push(d);
                  break;
                }
              T && (w = N, r = ++n);
            }
            o && ((d = !m && d) && v--, a && b.push(d));
          }
          if (v += x, o && x !== v) {
            g = 0;
            while (m = t[g++])
              m(b, y, l, c);
            if (a) {
              if (v > 0)
                while (x--)
                  b[x] || y[x] || (y[x] = q.call(f));
              y = xt(y);
            }
            O.apply(f, y), T && !a && y.length > 0 && v + t.length > 1 && ot.uniqueSort(f);
          }
          return T && (w = N, u = C), b;
        };
      return o ? at(a) : a;
    }
    a = ot.compile = function (e, t) {
      var n, r = [], i = [], o = N[e + ' '];
      if (!o) {
        t || (t = gt(e)), n = t.length;
        while (n--)
          o = wt(t[n]), o[v] ? r.push(o) : i.push(o);
        o = N(e, Tt(i, r));
      }
      return o;
    };
    function Ct(e, t, n) {
      var r = 0, i = t.length;
      for (; i > r; r++)
        ot(e, t[r], n);
      return n;
    }
    function kt(e, t, r, o) {
      var s, u, l, c, p, f = gt(e);
      if (!o && 1 === f.length) {
        if (u = f[0] = f[0].slice(0), u.length > 2 && 'ID' === (l = u[0]).type && n.getById && 9 === t.nodeType && h && i.relative[u[1].type]) {
          if (t = (i.find.ID(l.matches[0].replace(nt, rt), t) || [])[0], !t)
            return r;
          e = e.slice(u.shift().value.length);
        }
        s = J.needsContext.test(e) ? 0 : u.length;
        while (s--) {
          if (l = u[s], i.relative[c = l.type])
            break;
          if ((p = i.find[c]) && (o = p(l.matches[0].replace(nt, rt), U.test(u[0].type) && t.parentNode || t))) {
            if (u.splice(s, 1), e = o.length && mt(u), !e)
              return O.apply(r, o), r;
            break;
          }
        }
      }
      return a(e, f)(o, t, !h, r, U.test(e)), r;
    }
    n.sortStable = v.split('').sort(S).join('') === v, n.detectDuplicates = E, c(), n.sortDetached = ut(function (e) {
      return 1 & e.compareDocumentPosition(p.createElement('div'));
    }), ut(function (e) {
      return e.innerHTML = '<a href=\'#\'></a>', '#' === e.firstChild.getAttribute('href');
    }) || lt('type|href|height|width', function (e, t, n) {
      return n ? undefined : e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
    }), n.attributes && ut(function (e) {
      return e.innerHTML = '<input/>', e.firstChild.setAttribute('value', ''), '' === e.firstChild.getAttribute('value');
    }) || lt('value', function (e, t, n) {
      return n || 'input' !== e.nodeName.toLowerCase() ? undefined : e.defaultValue;
    }), ut(function (e) {
      return null == e.getAttribute('disabled');
    }) || lt(R, function (e, t, n) {
      var r;
      return n ? undefined : (r = e.getAttributeNode(t)) && r.specified ? r.value : e[t] === !0 ? t.toLowerCase() : null;
    }), x.find = ot, x.expr = ot.selectors, x.expr[':'] = x.expr.pseudos, x.unique = ot.uniqueSort, x.text = ot.getText, x.isXMLDoc = ot.isXML, x.contains = ot.contains;
  }(e);
  var D = {};
  function A(e) {
    var t = D[e] = {};
    return x.each(e.match(w) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }
  x.Callbacks = function (e) {
    e = 'string' == typeof e ? D[e] || A(e) : x.extend({}, e);
    var t, n, r, i, o, s, a = [], u = !e.once && [], l = function (p) {
        for (t = e.memory && p, n = !0, s = i || 0, i = 0, o = a.length, r = !0; a && o > s; s++)
          if (a[s].apply(p[0], p[1]) === !1 && e.stopOnFalse) {
            t = !1;
            break;
          }
        r = !1, a && (u ? u.length && l(u.shift()) : t ? a = [] : c.disable());
      }, c = {
        add: function () {
          if (a) {
            var n = a.length;
            (function s(t) {
              x.each(t, function (t, n) {
                var r = x.type(n);
                'function' === r ? e.unique && c.has(n) || a.push(n) : n && n.length && 'string' !== r && s(n);
              });
            }(arguments), r ? o = a.length : t && (i = n, l(t)));
          }
          return this;
        },
        remove: function () {
          return a && x.each(arguments, function (e, t) {
            var n;
            while ((n = x.inArray(t, a, n)) > -1)
              a.splice(n, 1), r && (o >= n && o--, s >= n && s--);
          }), this;
        },
        has: function (e) {
          return e ? x.inArray(e, a) > -1 : !(!a || !a.length);
        },
        empty: function () {
          return a = [], o = 0, this;
        },
        disable: function () {
          return a = u = t = undefined, this;
        },
        disabled: function () {
          return !a;
        },
        lock: function () {
          return u = undefined, t || c.disable(), this;
        },
        locked: function () {
          return !u;
        },
        fireWith: function (e, t) {
          return !a || n && !u || (t = t || [], t = [
            e,
            t.slice ? t.slice() : t
          ], r ? u.push(t) : l(t)), this;
        },
        fire: function () {
          return c.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!n;
        }
      };
    return c;
  }, x.extend({
    Deferred: function (e) {
      var t = [
          [
            'resolve',
            'done',
            x.Callbacks('once memory'),
            'resolved'
          ],
          [
            'reject',
            'fail',
            x.Callbacks('once memory'),
            'rejected'
          ],
          [
            'notify',
            'progress',
            x.Callbacks('memory')
          ]
        ], n = 'pending', r = {
          state: function () {
            return n;
          },
          always: function () {
            return i.done(arguments).fail(arguments), this;
          },
          then: function () {
            var e = arguments;
            return x.Deferred(function (n) {
              x.each(t, function (t, o) {
                var s = o[0], a = x.isFunction(e[t]) && e[t];
                i[o[1]](function () {
                  var e = a && a.apply(this, arguments);
                  e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + 'With'](this === r ? n.promise() : this, a ? [e] : arguments);
                });
              }), e = null;
            }).promise();
          },
          promise: function (e) {
            return null != e ? x.extend(e, r) : r;
          }
        }, i = {};
      return r.pipe = r.then, x.each(t, function (e, o) {
        var s = o[2], a = o[3];
        r[o[1]] = s.add, a && s.add(function () {
          n = a;
        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
          return i[o[0] + 'With'](this === i ? r : this, arguments), this;
        }, i[o[0] + 'With'] = s.fireWith;
      }), r.promise(i), e && e.call(i, i), i;
    },
    when: function (e) {
      var t = 0, n = d.call(arguments), r = n.length, i = 1 !== r || e && x.isFunction(e.promise) ? r : 0, o = 1 === i ? e : x.Deferred(), s = function (e, t, n) {
          return function (r) {
            t[e] = this, n[e] = arguments.length > 1 ? d.call(arguments) : r, n === a ? o.notifyWith(t, n) : --i || o.resolveWith(t, n);
          };
        }, a, u, l;
      if (r > 1)
        for (a = Array(r), u = Array(r), l = Array(r); r > t; t++)
          n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(s(t, l, n)).fail(o.reject).progress(s(t, u, a)) : --i;
      return i || o.resolveWith(l, n), o.promise();
    }
  }), x.support = function (t) {
    var n = o.createElement('input'), r = o.createDocumentFragment(), i = o.createElement('div'), s = o.createElement('select'), a = s.appendChild(o.createElement('option'));
    return n.type ? (n.type = 'checkbox', t.checkOn = '' !== n.value, t.optSelected = a.selected, t.reliableMarginRight = !0, t.boxSizingReliable = !0, t.pixelPosition = !1, n.checked = !0, t.noCloneChecked = n.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !a.disabled, n = o.createElement('input'), n.value = 't', n.type = 'radio', t.radioValue = 't' === n.value, n.setAttribute('checked', 't'), n.setAttribute('name', 't'), r.appendChild(n), t.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, t.focusinBubbles = 'onfocusin' in e, i.style.backgroundClip = 'content-box', i.cloneNode(!0).style.backgroundClip = '', t.clearCloneStyle = 'content-box' === i.style.backgroundClip, x(function () {
      var n, r, s = 'padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box', a = o.getElementsByTagName('body')[0];
      a && (n = o.createElement('div'), n.style.cssText = 'border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px', a.appendChild(n).appendChild(i), i.innerHTML = '', i.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%', x.swap(a, null != a.style.zoom ? { zoom: 1 } : {}, function () {
        t.boxSizing = 4 === i.offsetWidth;
      }), e.getComputedStyle && (t.pixelPosition = '1%' !== (e.getComputedStyle(i, null) || {}).top, t.boxSizingReliable = '4px' === (e.getComputedStyle(i, null) || { width: '4px' }).width, r = i.appendChild(o.createElement('div')), r.style.cssText = i.style.cssText = s, r.style.marginRight = r.style.width = '0', i.style.width = '1px', t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), a.removeChild(n));
    }), t) : t;
  }({});
  var L, q, H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, O = /([A-Z])/g;
  function F() {
    Object.defineProperty(this.cache = {}, 0, {
      get: function () {
        return {};
      }
    }), this.expando = x.expando + Math.random();
  }
  F.uid = 1, F.accepts = function (e) {
    return e.nodeType ? 1 === e.nodeType || 9 === e.nodeType : !0;
  }, F.prototype = {
    key: function (e) {
      if (!F.accepts(e))
        return 0;
      var t = {}, n = e[this.expando];
      if (!n) {
        n = F.uid++;
        try {
          t[this.expando] = { value: n }, Object.defineProperties(e, t);
        } catch (r) {
          t[this.expando] = n, x.extend(e, t);
        }
      }
      return this.cache[n] || (this.cache[n] = {}), n;
    },
    set: function (e, t, n) {
      var r, i = this.key(e), o = this.cache[i];
      if ('string' == typeof t)
        o[t] = n;
      else if (x.isEmptyObject(o))
        x.extend(this.cache[i], t);
      else
        for (r in t)
          o[r] = t[r];
      return o;
    },
    get: function (e, t) {
      var n = this.cache[this.key(e)];
      return t === undefined ? n : n[t];
    },
    access: function (e, t, n) {
      var r;
      return t === undefined || t && 'string' == typeof t && n === undefined ? (r = this.get(e, t), r !== undefined ? r : this.get(e, x.camelCase(t))) : (this.set(e, t, n), n !== undefined ? n : t);
    },
    remove: function (e, t) {
      var n, r, i, o = this.key(e), s = this.cache[o];
      if (t === undefined)
        this.cache[o] = {};
      else {
        x.isArray(t) ? r = t.concat(t.map(x.camelCase)) : (i = x.camelCase(t), t in s ? r = [
          t,
          i
        ] : (r = i, r = r in s ? [r] : r.match(w) || [])), n = r.length;
        while (n--)
          delete s[r[n]];
      }
    },
    hasData: function (e) {
      return !x.isEmptyObject(this.cache[e[this.expando]] || {});
    },
    discard: function (e) {
      e[this.expando] && delete this.cache[e[this.expando]];
    }
  }, L = new F(), q = new F(), x.extend({
    acceptData: F.accepts,
    hasData: function (e) {
      return L.hasData(e) || q.hasData(e);
    },
    data: function (e, t, n) {
      return L.access(e, t, n);
    },
    removeData: function (e, t) {
      L.remove(e, t);
    },
    _data: function (e, t, n) {
      return q.access(e, t, n);
    },
    _removeData: function (e, t) {
      q.remove(e, t);
    }
  }), x.fn.extend({
    data: function (e, t) {
      var n, r, i = this[0], o = 0, s = null;
      if (e === undefined) {
        if (this.length && (s = L.get(i), 1 === i.nodeType && !q.get(i, 'hasDataAttrs'))) {
          for (n = i.attributes; n.length > o; o++)
            r = n[o].name, 0 === r.indexOf('data-') && (r = x.camelCase(r.slice(5)), P(i, r, s[r]));
          q.set(i, 'hasDataAttrs', !0);
        }
        return s;
      }
      return 'object' == typeof e ? this.each(function () {
        L.set(this, e);
      }) : x.access(this, function (t) {
        var n, r = x.camelCase(e);
        if (i && t === undefined) {
          if (n = L.get(i, e), n !== undefined)
            return n;
          if (n = L.get(i, r), n !== undefined)
            return n;
          if (n = P(i, r, undefined), n !== undefined)
            return n;
        } else
          this.each(function () {
            var n = L.get(this, r);
            L.set(this, r, t), -1 !== e.indexOf('-') && n !== undefined && L.set(this, e, t);
          });
      }, null, t, arguments.length > 1, null, !0);
    },
    removeData: function (e) {
      return this.each(function () {
        L.remove(this, e);
      });
    }
  });
  function P(e, t, n) {
    var r;
    if (n === undefined && 1 === e.nodeType)
      if (r = 'data-' + t.replace(O, '-$1').toLowerCase(), n = e.getAttribute(r), 'string' == typeof n) {
        try {
          n = 'true' === n ? !0 : 'false' === n ? !1 : 'null' === n ? null : +n + '' === n ? +n : H.test(n) ? JSON.parse(n) : n;
        } catch (i) {
        }
        L.set(e, t, n);
      } else
        n = undefined;
    return n;
  }
  x.extend({
    queue: function (e, t, n) {
      var r;
      return e ? (t = (t || 'fx') + 'queue', r = q.get(e, t), n && (!r || x.isArray(n) ? r = q.access(e, t, x.makeArray(n)) : r.push(n)), r || []) : undefined;
    },
    dequeue: function (e, t) {
      t = t || 'fx';
      var n = x.queue(e, t), r = n.length, i = n.shift(), o = x._queueHooks(e, t), s = function () {
          x.dequeue(e, t);
        };
      'inprogress' === i && (i = n.shift(), r--), i && ('fx' === t && n.unshift('inprogress'), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function (e, t) {
      var n = t + 'queueHooks';
      return q.get(e, n) || q.access(e, n, {
        empty: x.Callbacks('once memory').add(function () {
          q.remove(e, [
            t + 'queue',
            n
          ]);
        })
      });
    }
  }), x.fn.extend({
    queue: function (e, t) {
      var n = 2;
      return 'string' != typeof e && (t = e, e = 'fx', n--), n > arguments.length ? x.queue(this[0], e) : t === undefined ? this : this.each(function () {
        var n = x.queue(this, e, t);
        x._queueHooks(this, e), 'fx' === e && 'inprogress' !== n[0] && x.dequeue(this, e);
      });
    },
    dequeue: function (e) {
      return this.each(function () {
        x.dequeue(this, e);
      });
    },
    delay: function (e, t) {
      return e = x.fx ? x.fx.speeds[e] || e : e, t = t || 'fx', this.queue(t, function (t, n) {
        var r = setTimeout(t, e);
        n.stop = function () {
          clearTimeout(r);
        };
      });
    },
    clearQueue: function (e) {
      return this.queue(e || 'fx', []);
    },
    promise: function (e, t) {
      var n, r = 1, i = x.Deferred(), o = this, s = this.length, a = function () {
          --r || i.resolveWith(o, [o]);
        };
      'string' != typeof e && (t = e, e = undefined), e = e || 'fx';
      while (s--)
        n = q.get(o[s], e + 'queueHooks'), n && n.empty && (r++, n.empty.add(a));
      return a(), i.promise(t);
    }
  });
  var R, M, W = /[\t\r\n\f]/g, $ = /\r/g, B = /^(?:input|select|textarea|button)$/i;
  x.fn.extend({
    attr: function (e, t) {
      return x.access(this, x.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        x.removeAttr(this, e);
      });
    },
    prop: function (e, t) {
      return x.access(this, x.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[x.propFix[e] || e];
      });
    },
    addClass: function (e) {
      var t, n, r, i, o, s = 0, a = this.length, u = 'string' == typeof e && e;
      if (x.isFunction(e))
        return this.each(function (t) {
          x(this).addClass(e.call(this, t, this.className));
        });
      if (u)
        for (t = (e || '').match(w) || []; a > s; s++)
          if (n = this[s], r = 1 === n.nodeType && (n.className ? (' ' + n.className + ' ').replace(W, ' ') : ' ')) {
            o = 0;
            while (i = t[o++])
              0 > r.indexOf(' ' + i + ' ') && (r += i + ' ');
            n.className = x.trim(r);
          }
      return this;
    },
    removeClass: function (e) {
      var t, n, r, i, o, s = 0, a = this.length, u = 0 === arguments.length || 'string' == typeof e && e;
      if (x.isFunction(e))
        return this.each(function (t) {
          x(this).removeClass(e.call(this, t, this.className));
        });
      if (u)
        for (t = (e || '').match(w) || []; a > s; s++)
          if (n = this[s], r = 1 === n.nodeType && (n.className ? (' ' + n.className + ' ').replace(W, ' ') : '')) {
            o = 0;
            while (i = t[o++])
              while (r.indexOf(' ' + i + ' ') >= 0)
                r = r.replace(' ' + i + ' ', ' ');
            n.className = e ? x.trim(r) : '';
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e;
      return 'boolean' == typeof t && 'string' === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function (n) {
        x(this).toggleClass(e.call(this, n, this.className, t), t);
      }) : this.each(function () {
        if ('string' === n) {
          var t, i = 0, o = x(this), s = e.match(w) || [];
          while (t = s[i++])
            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
        } else
          (n === r || 'boolean' === n) && (this.className && q.set(this, '__className__', this.className), this.className = this.className || e === !1 ? '' : q.get(this, '__className__') || '');
      });
    },
    hasClass: function (e) {
      var t = ' ' + e + ' ', n = 0, r = this.length;
      for (; r > n; n++)
        if (1 === this[n].nodeType && (' ' + this[n].className + ' ').replace(W, ' ').indexOf(t) >= 0)
          return !0;
      return !1;
    },
    val: function (e) {
      var t, n, r, i = this[0];
      {
        if (arguments.length)
          return r = x.isFunction(e), this.each(function (n) {
            var i;
            1 === this.nodeType && (i = r ? e.call(this, n, x(this).val()) : e, null == i ? i = '' : 'number' == typeof i ? i += '' : x.isArray(i) && (i = x.map(i, function (e) {
              return null == e ? '' : e + '';
            })), t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], t && 'set' in t && t.set(this, i, 'value') !== undefined || (this.value = i));
          });
        if (i)
          return t = x.valHooks[i.type] || x.valHooks[i.nodeName.toLowerCase()], t && 'get' in t && (n = t.get(i, 'value')) !== undefined ? n : (n = i.value, 'string' == typeof n ? n.replace($, '') : null == n ? '' : n);
      }
    }
  }), x.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = e.attributes.value;
          return !t || t.specified ? e.value : e.text;
        }
      },
      select: {
        get: function (e) {
          var t, n, r = e.options, i = e.selectedIndex, o = 'select-one' === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0;
          for (; a > u; u++)
            if (n = r[u], !(!n.selected && u !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute('disabled')) || n.parentNode.disabled && x.nodeName(n.parentNode, 'optgroup'))) {
              if (t = x(n).val(), o)
                return t;
              s.push(t);
            }
          return s;
        },
        set: function (e, t) {
          var n, r, i = e.options, o = x.makeArray(t), s = i.length;
          while (s--)
            r = i[s], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
          return n || (e.selectedIndex = -1), o;
        }
      }
    },
    attr: function (e, t, n) {
      var i, o, s = e.nodeType;
      if (e && 3 !== s && 8 !== s && 2 !== s)
        return typeof e.getAttribute === r ? x.prop(e, t, n) : (1 === s && x.isXMLDoc(e) || (t = t.toLowerCase(), i = x.attrHooks[t] || (x.expr.match.bool.test(t) ? M : R)), n === undefined ? i && 'get' in i && null !== (o = i.get(e, t)) ? o : (o = x.find.attr(e, t), null == o ? undefined : o) : null !== n ? i && 'set' in i && (o = i.set(e, n, t)) !== undefined ? o : (e.setAttribute(t, n + ''), n) : (x.removeAttr(e, t), undefined));
    },
    removeAttr: function (e, t) {
      var n, r, i = 0, o = t && t.match(w);
      if (o && 1 === e.nodeType)
        while (n = o[i++])
          r = x.propFix[n] || n, x.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n);
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!x.support.radioValue && 'radio' === t && x.nodeName(e, 'input')) {
            var n = e.value;
            return e.setAttribute('type', t), n && (e.value = n), t;
          }
        }
      }
    },
    propFix: {
      'for': 'htmlFor',
      'class': 'className'
    },
    prop: function (e, t, n) {
      var r, i, o, s = e.nodeType;
      if (e && 3 !== s && 8 !== s && 2 !== s)
        return o = 1 !== s || !x.isXMLDoc(e), o && (t = x.propFix[t] || t, i = x.propHooks[t]), n !== undefined ? i && 'set' in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && 'get' in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          return e.hasAttribute('tabindex') || B.test(e.nodeName) || e.href ? e.tabIndex : -1;
        }
      }
    }
  }), M = {
    set: function (e, t, n) {
      return t === !1 ? x.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = x.expr.attrHandle[t] || x.find.attr;
    x.expr.attrHandle[t] = function (e, t, r) {
      var i = x.expr.attrHandle[t], o = r ? undefined : (x.expr.attrHandle[t] = undefined) != n(e, t, r) ? t.toLowerCase() : null;
      return x.expr.attrHandle[t] = i, o;
    };
  }), x.support.optSelected || (x.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    }
  }), x.each([
    'tabIndex',
    'readOnly',
    'maxLength',
    'cellSpacing',
    'cellPadding',
    'rowSpan',
    'colSpan',
    'useMap',
    'frameBorder',
    'contentEditable'
  ], function () {
    x.propFix[this.toLowerCase()] = this;
  }), x.each([
    'radio',
    'checkbox'
  ], function () {
    x.valHooks[this] = {
      set: function (e, t) {
        return x.isArray(t) ? e.checked = x.inArray(x(e).val(), t) >= 0 : undefined;
      }
    }, x.support.checkOn || (x.valHooks[this].get = function (e) {
      return null === e.getAttribute('value') ? 'on' : e.value;
    });
  });
  var I = /^key/, z = /^(?:mouse|contextmenu)|click/, _ = /^(?:focusinfocus|focusoutblur)$/, X = /^([^.]*)(?:\.(.+)|)$/;
  function U() {
    return !0;
  }
  function Y() {
    return !1;
  }
  function V() {
    try {
      return o.activeElement;
    } catch (e) {
    }
  }
  x.event = {
    global: {},
    add: function (e, t, n, i, o) {
      var s, a, u, l, c, p, f, h, d, g, m, y = q.get(e);
      if (y) {
        n.handler && (s = n, n = s.handler, o = s.selector), n.guid || (n.guid = x.guid++), (l = y.events) || (l = y.events = {}), (a = y.handle) || (a = y.handle = function (e) {
          return typeof x === r || e && x.event.triggered === e.type ? undefined : x.event.dispatch.apply(a.elem, arguments);
        }, a.elem = e), t = (t || '').match(w) || [''], c = t.length;
        while (c--)
          u = X.exec(t[c]) || [], d = m = u[1], g = (u[2] || '').split('.').sort(), d && (f = x.event.special[d] || {}, d = (o ? f.delegateType : f.bindType) || d, f = x.event.special[d] || {}, p = x.extend({
            type: d,
            origType: m,
            data: i,
            handler: n,
            guid: n.guid,
            selector: o,
            needsContext: o && x.expr.match.needsContext.test(o),
            namespace: g.join('.')
          }, s), (h = l[d]) || (h = l[d] = [], h.delegateCount = 0, f.setup && f.setup.call(e, i, g, a) !== !1 || e.addEventListener && e.addEventListener(d, a, !1)), f.add && (f.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, p) : h.push(p), x.event.global[d] = !0);
        e = null;
      }
    },
    remove: function (e, t, n, r, i) {
      var o, s, a, u, l, c, p, f, h, d, g, m = q.hasData(e) && q.get(e);
      if (m && (u = m.events)) {
        t = (t || '').match(w) || [''], l = t.length;
        while (l--)
          if (a = X.exec(t[l]) || [], h = g = a[1], d = (a[2] || '').split('.').sort(), h) {
            p = x.event.special[h] || {}, h = (r ? p.delegateType : p.bindType) || h, f = u[h] || [], a = a[2] && RegExp('(^|\\.)' + d.join('\\.(?:.*\\.|)') + '(\\.|$)'), s = o = f.length;
            while (o--)
              c = f[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ('**' !== r || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, p.remove && p.remove.call(e, c));
            s && !f.length && (p.teardown && p.teardown.call(e, d, m.handle) !== !1 || x.removeEvent(e, h, m.handle), delete u[h]);
          } else
            for (h in u)
              x.event.remove(e, h + t[l], n, r, !0);
        x.isEmptyObject(u) && (delete m.handle, q.remove(e, 'events'));
      }
    },
    trigger: function (t, n, r, i) {
      var s, a, u, l, c, p, f, h = [r || o], d = y.call(t, 'type') ? t.type : t, g = y.call(t, 'namespace') ? t.namespace.split('.') : [];
      if (a = u = r = r || o, 3 !== r.nodeType && 8 !== r.nodeType && !_.test(d + x.event.triggered) && (d.indexOf('.') >= 0 && (g = d.split('.'), d = g.shift(), g.sort()), c = 0 > d.indexOf(':') && 'on' + d, t = t[x.expando] ? t : new x.Event(d, 'object' == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = g.join('.'), t.namespace_re = t.namespace ? RegExp('(^|\\.)' + g.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, t.result = undefined, t.target || (t.target = r), n = null == n ? [t] : x.makeArray(n, [t]), f = x.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
        if (!i && !f.noBubble && !x.isWindow(r)) {
          for (l = f.delegateType || d, _.test(l + d) || (a = a.parentNode); a; a = a.parentNode)
            h.push(a), u = a;
          u === (r.ownerDocument || o) && h.push(u.defaultView || u.parentWindow || e);
        }
        s = 0;
        while ((a = h[s++]) && !t.isPropagationStopped())
          t.type = s > 1 ? l : f.bindType || d, p = (q.get(a, 'events') || {})[t.type] && q.get(a, 'handle'), p && p.apply(a, n), p = c && a[c], p && x.acceptData(a) && p.apply && p.apply(a, n) === !1 && t.preventDefault();
        return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(h.pop(), n) !== !1 || !x.acceptData(r) || c && x.isFunction(r[d]) && !x.isWindow(r) && (u = r[c], u && (r[c] = null), x.event.triggered = d, r[d](), x.event.triggered = undefined, u && (r[c] = u)), t.result;
      }
    },
    dispatch: function (e) {
      e = x.event.fix(e);
      var t, n, r, i, o, s = [], a = d.call(arguments), u = (q.get(this, 'events') || {})[e.type] || [], l = x.event.special[e.type] || {};
      if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
        s = x.event.handlers.call(this, e, u), t = 0;
        while ((i = s[t++]) && !e.isPropagationStopped()) {
          e.currentTarget = i.elem, n = 0;
          while ((o = i.handlers[n++]) && !e.isImmediatePropagationStopped())
            (!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((x.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), r !== undefined && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
        }
        return l.postDispatch && l.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, t) {
      var n, r, i, o, s = [], a = t.delegateCount, u = e.target;
      if (a && u.nodeType && (!e.button || 'click' !== e.type))
        for (; u !== this; u = u.parentNode || this)
          if (u.disabled !== !0 || 'click' !== e.type) {
            for (r = [], n = 0; a > n; n++)
              o = t[n], i = o.selector + ' ', r[i] === undefined && (r[i] = o.needsContext ? x(i, this).index(u) >= 0 : x.find(i, this, null, [u]).length), r[i] && r.push(o);
            r.length && s.push({
              elem: u,
              handlers: r
            });
          }
      return t.length > a && s.push({
        elem: this,
        handlers: t.slice(a)
      }), s;
    },
    props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
    fixHooks: {},
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function (e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
      }
    },
    mouseHooks: {
      props: 'button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
      filter: function (e, t) {
        var n, r, i, s = t.button;
        return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || o, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || s === undefined || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e;
      }
    },
    fix: function (e) {
      if (e[x.expando])
        return e;
      var t, n, r, i = e.type, s = e, a = this.fixHooks[i];
      a || (this.fixHooks[i] = a = z.test(i) ? this.mouseHooks : I.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new x.Event(s), t = r.length;
      while (t--)
        n = r[t], e[n] = s[n];
      return e.target || (e.target = o), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, s) : e;
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== V() && this.focus ? (this.focus(), !1) : undefined;
        },
        delegateType: 'focusin'
      },
      blur: {
        trigger: function () {
          return this === V() && this.blur ? (this.blur(), !1) : undefined;
        },
        delegateType: 'focusout'
      },
      click: {
        trigger: function () {
          return 'checkbox' === this.type && this.click && x.nodeName(this, 'input') ? (this.click(), !1) : undefined;
        },
        _default: function (e) {
          return x.nodeName(e.target, 'a');
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          e.result !== undefined && (e.originalEvent.returnValue = e.result);
        }
      }
    },
    simulate: function (e, t, n, r) {
      var i = x.extend(new x.Event(), n, {
          type: e,
          isSimulated: !0,
          originalEvent: {}
        });
      r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
    }
  }, x.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1);
  }, x.Event = function (e, t) {
    return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.getPreventDefault && e.getPreventDefault() ? U : Y) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, undefined) : new x.Event(e, t);
  }, x.Event.prototype = {
    isDefaultPrevented: Y,
    isPropagationStopped: Y,
    isImmediatePropagationStopped: Y,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = U, e && e.preventDefault && e.preventDefault();
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = U, e && e.stopPropagation && e.stopPropagation();
    },
    stopImmediatePropagation: function () {
      this.isImmediatePropagationStopped = U, this.stopPropagation();
    }
  }, x.each({
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  }, function (e, t) {
    x.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function (e) {
        var n, r = this, i = e.relatedTarget, o = e.handleObj;
        return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      }
    };
  }), x.support.focusinBubbles || x.each({
    focus: 'focusin',
    blur: 'focusout'
  }, function (e, t) {
    var n = 0, r = function (e) {
        x.event.simulate(t, e.target, x.event.fix(e), !0);
      };
    x.event.special[t] = {
      setup: function () {
        0 === n++ && o.addEventListener(e, r, !0);
      },
      teardown: function () {
        0 === --n && o.removeEventListener(e, r, !0);
      }
    };
  }), x.fn.extend({
    on: function (e, t, n, r, i) {
      var o, s;
      if ('object' == typeof e) {
        'string' != typeof t && (n = n || t, t = undefined);
        for (s in e)
          this.on(s, t, n, e[s], i);
        return this;
      }
      if (null == n && null == r ? (r = t, n = t = undefined) : null == r && ('string' == typeof t ? (r = n, n = undefined) : (r = n, n = t, t = undefined)), r === !1)
        r = Y;
      else if (!r)
        return this;
      return 1 === i && (o = r, r = function (e) {
        return x().off(e), o.apply(this, arguments);
      }, r.guid = o.guid || (o.guid = x.guid++)), this.each(function () {
        x.event.add(this, e, r, n, t);
      });
    },
    one: function (e, t, n, r) {
      return this.on(e, t, n, r, 1);
    },
    off: function (e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj)
        return r = e.handleObj, x(e.delegateTarget).off(r.namespace ? r.origType + '.' + r.namespace : r.origType, r.selector, r.handler), this;
      if ('object' == typeof e) {
        for (i in e)
          this.off(i, t, e[i]);
        return this;
      }
      return (t === !1 || 'function' == typeof t) && (n = t, t = undefined), n === !1 && (n = Y), this.each(function () {
        x.event.remove(this, e, n, t);
      });
    },
    trigger: function (e, t) {
      return this.each(function () {
        x.event.trigger(e, t, this);
      });
    },
    triggerHandler: function (e, t) {
      var n = this[0];
      return n ? x.event.trigger(e, t, n, !0) : undefined;
    }
  });
  var G = /^.[^:#\[\.,]*$/, J = /^(?:parents|prev(?:Until|All))/, Q = x.expr.match.needsContext, K = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  x.fn.extend({
    find: function (e) {
      var t, n = [], r = this, i = r.length;
      if ('string' != typeof e)
        return this.pushStack(x(e).filter(function () {
          for (t = 0; i > t; t++)
            if (x.contains(r[t], this))
              return !0;
        }));
      for (t = 0; i > t; t++)
        x.find(e, r[t], n);
      return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + ' ' + e : e, n;
    },
    has: function (e) {
      var t = x(e, this), n = t.length;
      return this.filter(function () {
        var e = 0;
        for (; n > e; e++)
          if (x.contains(this, t[e]))
            return !0;
      });
    },
    not: function (e) {
      return this.pushStack(et(this, e || [], !0));
    },
    filter: function (e) {
      return this.pushStack(et(this, e || [], !1));
    },
    is: function (e) {
      return !!et(this, 'string' == typeof e && Q.test(e) ? x(e) : e || [], !1).length;
    },
    closest: function (e, t) {
      var n, r = 0, i = this.length, o = [], s = Q.test(e) || 'string' != typeof e ? x(e, t || this.context) : 0;
      for (; i > r; r++)
        for (n = this[r]; n && n !== t; n = n.parentNode)
          if (11 > n.nodeType && (s ? s.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
            n = o.push(n);
            break;
          }
      return this.pushStack(o.length > 1 ? x.unique(o) : o);
    },
    index: function (e) {
      return e ? 'string' == typeof e ? g.call(x(e), this[0]) : g.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (e, t) {
      var n = 'string' == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e), r = x.merge(this.get(), n);
      return this.pushStack(x.unique(r));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  });
  function Z(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  x.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function (e) {
      return x.dir(e, 'parentNode');
    },
    parentsUntil: function (e, t, n) {
      return x.dir(e, 'parentNode', n);
    },
    next: function (e) {
      return Z(e, 'nextSibling');
    },
    prev: function (e) {
      return Z(e, 'previousSibling');
    },
    nextAll: function (e) {
      return x.dir(e, 'nextSibling');
    },
    prevAll: function (e) {
      return x.dir(e, 'previousSibling');
    },
    nextUntil: function (e, t, n) {
      return x.dir(e, 'nextSibling', n);
    },
    prevUntil: function (e, t, n) {
      return x.dir(e, 'previousSibling', n);
    },
    siblings: function (e) {
      return x.sibling((e.parentNode || {}).firstChild, e);
    },
    children: function (e) {
      return x.sibling(e.firstChild);
    },
    contents: function (e) {
      return e.contentDocument || x.merge([], e.childNodes);
    }
  }, function (e, t) {
    x.fn[e] = function (n, r) {
      var i = x.map(this, t, n);
      return 'Until' !== e.slice(-5) && (r = n), r && 'string' == typeof r && (i = x.filter(r, i)), this.length > 1 && (K[e] || x.unique(i), J.test(e) && i.reverse()), this.pushStack(i);
    };
  }), x.extend({
    filter: function (e, t, n) {
      var r = t[0];
      return n && (e = ':not(' + e + ')'), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    },
    dir: function (e, t, n) {
      var r = [], i = n !== undefined;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && x(e).is(n))
            break;
          r.push(e);
        }
      return r;
    },
    sibling: function (e, t) {
      var n = [];
      for (; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    }
  });
  function et(e, t, n) {
    if (x.isFunction(t))
      return x.grep(e, function (e, r) {
        return !!t.call(e, r, e) !== n;
      });
    if (t.nodeType)
      return x.grep(e, function (e) {
        return e === t !== n;
      });
    if ('string' == typeof t) {
      if (G.test(t))
        return x.filter(t, e, n);
      t = x.filter(t, e);
    }
    return x.grep(e, function (e) {
      return g.call(t, e) >= 0 !== n;
    });
  }
  var tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, nt = /<([\w:]+)/, rt = /<|&#?\w+;/, it = /<(?:script|style|link)/i, ot = /^(?:checkbox|radio)$/i, st = /checked\s*(?:[^=]|=\s*.checked.)/i, at = /^$|\/(?:java|ecma)script/i, ut = /^true\/(.*)/, lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ct = {
      option: [
        1,
        '<select multiple=\'multiple\'>',
        '</select>'
      ],
      thead: [
        1,
        '<table>',
        '</table>'
      ],
      col: [
        2,
        '<table><colgroup>',
        '</colgroup></table>'
      ],
      tr: [
        2,
        '<table><tbody>',
        '</tbody></table>'
      ],
      td: [
        3,
        '<table><tbody><tr>',
        '</tr></tbody></table>'
      ],
      _default: [
        0,
        '',
        ''
      ]
    };
  ct.optgroup = ct.option, ct.tbody = ct.tfoot = ct.colgroup = ct.caption = ct.thead, ct.th = ct.td, x.fn.extend({
    text: function (e) {
      return x.access(this, function (e) {
        return e === undefined ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e));
      }, null, e, arguments.length);
    },
    append: function () {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = pt(this, e);
          t.appendChild(e);
        }
      });
    },
    prepend: function () {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = pt(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    remove: function (e, t) {
      var n, r = e ? x.filter(e, this) : this, i = 0;
      for (; null != (n = r[i]); i++)
        t || 1 !== n.nodeType || x.cleanData(mt(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && dt(mt(n, 'script')), n.parentNode.removeChild(n));
      return this;
    },
    empty: function () {
      var e, t = 0;
      for (; null != (e = this[t]); t++)
        1 === e.nodeType && (x.cleanData(mt(e, !1)), e.textContent = '');
      return this;
    },
    clone: function (e, t) {
      return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
        return x.clone(this, e, t);
      });
    },
    html: function (e) {
      return x.access(this, function (e) {
        var t = this[0] || {}, n = 0, r = this.length;
        if (e === undefined && 1 === t.nodeType)
          return t.innerHTML;
        if ('string' == typeof e && !it.test(e) && !ct[(nt.exec(e) || [
            '',
            ''
          ])[1].toLowerCase()]) {
          e = e.replace(tt, '<$1></$2>');
          try {
            for (; r > n; n++)
              t = this[n] || {}, 1 === t.nodeType && (x.cleanData(mt(t, !1)), t.innerHTML = e);
            t = 0;
          } catch (i) {
          }
        }
        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function () {
      var e = x.map(this, function (e) {
          return [
            e.nextSibling,
            e.parentNode
          ];
        }), t = 0;
      return this.domManip(arguments, function (n) {
        var r = e[t++], i = e[t++];
        i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r));
      }, !0), t ? this : this.remove();
    },
    detach: function (e) {
      return this.remove(e, !0);
    },
    domManip: function (e, t, n) {
      e = f.apply([], e);
      var r, i, o, s, a, u, l = 0, c = this.length, p = this, h = c - 1, d = e[0], g = x.isFunction(d);
      if (g || !(1 >= c || 'string' != typeof d || x.support.checkClone) && st.test(d))
        return this.each(function (r) {
          var i = p.eq(r);
          g && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n);
        });
      if (c && (r = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = r.firstChild, 1 === r.childNodes.length && (r = i), i)) {
        for (o = x.map(mt(r, 'script'), ft), s = o.length; c > l; l++)
          a = r, l !== h && (a = x.clone(a, !0, !0), s && x.merge(o, mt(a, 'script'))), t.call(this[l], a, l);
        if (s)
          for (u = o[o.length - 1].ownerDocument, x.map(o, ht), l = 0; s > l; l++)
            a = o[l], at.test(a.type || '') && !q.access(a, 'globalEval') && x.contains(u, a) && (a.src ? x._evalUrl(a.src) : x.globalEval(a.textContent.replace(lt, '')));
      }
      return this;
    }
  }), x.each({
    appendTo: 'append',
    prependTo: 'prepend',
    insertBefore: 'before',
    insertAfter: 'after',
    replaceAll: 'replaceWith'
  }, function (e, t) {
    x.fn[e] = function (e) {
      var n, r = [], i = x(e), o = i.length - 1, s = 0;
      for (; o >= s; s++)
        n = s === o ? this : this.clone(!0), x(i[s])[t](n), h.apply(r, n.get());
      return this.pushStack(r);
    };
  }), x.extend({
    clone: function (e, t, n) {
      var r, i, o, s, a = e.cloneNode(!0), u = x.contains(e.ownerDocument, e);
      if (!(x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
        for (s = mt(a), o = mt(e), r = 0, i = o.length; i > r; r++)
          yt(o[r], s[r]);
      if (t)
        if (n)
          for (o = o || mt(e), s = s || mt(a), r = 0, i = o.length; i > r; r++)
            gt(o[r], s[r]);
        else
          gt(e, a);
      return s = mt(a, 'script'), s.length > 0 && dt(s, !u && mt(e, 'script')), a;
    },
    buildFragment: function (e, t, n, r) {
      var i, o, s, a, u, l, c = 0, p = e.length, f = t.createDocumentFragment(), h = [];
      for (; p > c; c++)
        if (i = e[c], i || 0 === i)
          if ('object' === x.type(i))
            x.merge(h, i.nodeType ? [i] : i);
          else if (rt.test(i)) {
            o = o || f.appendChild(t.createElement('div')), s = (nt.exec(i) || [
              '',
              ''
            ])[1].toLowerCase(), a = ct[s] || ct._default, o.innerHTML = a[1] + i.replace(tt, '<$1></$2>') + a[2], l = a[0];
            while (l--)
              o = o.lastChild;
            x.merge(h, o.childNodes), o = f.firstChild, o.textContent = '';
          } else
            h.push(t.createTextNode(i));
      f.textContent = '', c = 0;
      while (i = h[c++])
        if ((!r || -1 === x.inArray(i, r)) && (u = x.contains(i.ownerDocument, i), o = mt(f.appendChild(i), 'script'), u && dt(o), n)) {
          l = 0;
          while (i = o[l++])
            at.test(i.type || '') && n.push(i);
        }
      return f;
    },
    cleanData: function (e) {
      var t, n, r, i, o, s, a = x.event.special, u = 0;
      for (; (n = e[u]) !== undefined; u++) {
        if (F.accepts(n) && (o = n[q.expando], o && (t = q.cache[o]))) {
          if (r = Object.keys(t.events || {}), r.length)
            for (s = 0; (i = r[s]) !== undefined; s++)
              a[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
          q.cache[o] && delete q.cache[o];
        }
        delete L.cache[n[L.expando]];
      }
    },
    _evalUrl: function (e) {
      return x.ajax({
        url: e,
        type: 'GET',
        dataType: 'script',
        async: !1,
        global: !1,
        'throws': !0
      });
    }
  });
  function pt(e, t) {
    return x.nodeName(e, 'table') && x.nodeName(1 === t.nodeType ? t : t.firstChild, 'tr') ? e.getElementsByTagName('tbody')[0] || e.appendChild(e.ownerDocument.createElement('tbody')) : e;
  }
  function ft(e) {
    return e.type = (null !== e.getAttribute('type')) + '/' + e.type, e;
  }
  function ht(e) {
    var t = ut.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute('type'), e;
  }
  function dt(e, t) {
    var n = e.length, r = 0;
    for (; n > r; r++)
      q.set(e[r], 'globalEval', !t || q.get(t[r], 'globalEval'));
  }
  function gt(e, t) {
    var n, r, i, o, s, a, u, l;
    if (1 === t.nodeType) {
      if (q.hasData(e) && (o = q.access(e), s = q.set(t, o), l = o.events)) {
        delete s.handle, s.events = {};
        for (i in l)
          for (n = 0, r = l[i].length; r > n; n++)
            x.event.add(t, i, l[i][n]);
      }
      L.hasData(e) && (a = L.access(e), u = x.extend({}, a), L.set(t, u));
    }
  }
  function mt(e, t) {
    var n = e.getElementsByTagName ? e.getElementsByTagName(t || '*') : e.querySelectorAll ? e.querySelectorAll(t || '*') : [];
    return t === undefined || t && x.nodeName(e, t) ? x.merge([e], n) : n;
  }
  function yt(e, t) {
    var n = t.nodeName.toLowerCase();
    'input' === n && ot.test(e.type) ? t.checked = e.checked : ('input' === n || 'textarea' === n) && (t.defaultValue = e.defaultValue);
  }
  x.fn.extend({
    wrapAll: function (e) {
      var t;
      return x.isFunction(e) ? this.each(function (t) {
        x(this).wrapAll(e.call(this, t));
      }) : (this[0] && (t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;
        while (e.firstElementChild)
          e = e.firstElementChild;
        return e;
      }).append(this)), this);
    },
    wrapInner: function (e) {
      return x.isFunction(e) ? this.each(function (t) {
        x(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = x(this), n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function (e) {
      var t = x.isFunction(e);
      return this.each(function (n) {
        x(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function () {
      return this.parent().each(function () {
        x.nodeName(this, 'body') || x(this).replaceWith(this.childNodes);
      }).end();
    }
  });
  var vt, xt, bt = /^(none|table(?!-c[ea]).+)/, wt = /^margin/, Tt = RegExp('^(' + b + ')(.*)$', 'i'), Ct = RegExp('^(' + b + ')(?!px)[a-z%]+$', 'i'), kt = RegExp('^([+-])=(' + b + ')', 'i'), Nt = { BODY: 'block' }, Et = {
      position: 'absolute',
      visibility: 'hidden',
      display: 'block'
    }, St = {
      letterSpacing: 0,
      fontWeight: 400
    }, jt = [
      'Top',
      'Right',
      'Bottom',
      'Left'
    ], Dt = [
      'Webkit',
      'O',
      'Moz',
      'ms'
    ];
  function At(e, t) {
    if (t in e)
      return t;
    var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Dt.length;
    while (i--)
      if (t = Dt[i] + n, t in e)
        return t;
    return r;
  }
  function Lt(e, t) {
    return e = t || e, 'none' === x.css(e, 'display') || !x.contains(e.ownerDocument, e);
  }
  function qt(t) {
    return e.getComputedStyle(t, null);
  }
  function Ht(e, t) {
    var n, r, i, o = [], s = 0, a = e.length;
    for (; a > s; s++)
      r = e[s], r.style && (o[s] = q.get(r, 'olddisplay'), n = r.style.display, t ? (o[s] || 'none' !== n || (r.style.display = ''), '' === r.style.display && Lt(r) && (o[s] = q.access(r, 'olddisplay', Rt(r.nodeName)))) : o[s] || (i = Lt(r), (n && 'none' !== n || !i) && q.set(r, 'olddisplay', i ? n : x.css(r, 'display'))));
    for (s = 0; a > s; s++)
      r = e[s], r.style && (t && 'none' !== r.style.display && '' !== r.style.display || (r.style.display = t ? o[s] || '' : 'none'));
    return e;
  }
  x.fn.extend({
    css: function (e, t) {
      return x.access(this, function (e, t, n) {
        var r, i, o = {}, s = 0;
        if (x.isArray(t)) {
          for (r = qt(e), i = t.length; i > s; s++)
            o[t[s]] = x.css(e, t[s], !1, r);
          return o;
        }
        return n !== undefined ? x.style(e, t, n) : x.css(e, t);
      }, e, t, arguments.length > 1);
    },
    show: function () {
      return Ht(this, !0);
    },
    hide: function () {
      return Ht(this);
    },
    toggle: function (e) {
      return 'boolean' == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        Lt(this) ? x(this).show() : x(this).hide();
      });
    }
  }), x.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = vt(e, 'opacity');
            return '' === n ? '1' : n;
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: { 'float': 'cssFloat' },
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i, o, s, a = x.camelCase(t), u = e.style;
        return t = x.cssProps[a] || (x.cssProps[a] = At(u, a)), s = x.cssHooks[t] || x.cssHooks[a], n === undefined ? s && 'get' in s && (i = s.get(e, !1, r)) !== undefined ? i : u[t] : (o = typeof n, 'string' === o && (i = kt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(x.css(e, t)), o = 'number'), null == n || 'number' === o && isNaN(n) || ('number' !== o || x.cssNumber[a] || (n += 'px'), x.support.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (u[t] = 'inherit'), s && 'set' in s && (n = s.set(e, n, r)) === undefined || (u[t] = n)), undefined);
      }
    },
    css: function (e, t, n, r) {
      var i, o, s, a = x.camelCase(t);
      return t = x.cssProps[a] || (x.cssProps[a] = At(e.style, a)), s = x.cssHooks[t] || x.cssHooks[a], s && 'get' in s && (i = s.get(e, !0, n)), i === undefined && (i = vt(e, t, r)), 'normal' === i && t in St && (i = St[t]), '' === n || n ? (o = parseFloat(i), n === !0 || x.isNumeric(o) ? o || 0 : i) : i;
    }
  }), vt = function (e, t, n) {
    var r, i, o, s = n || qt(e), a = s ? s.getPropertyValue(t) || s[t] : undefined, u = e.style;
    return s && ('' !== a || x.contains(e.ownerDocument, e) || (a = x.style(e, t)), Ct.test(a) && wt.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = s.width, u.width = r, u.minWidth = i, u.maxWidth = o)), a;
  };
  function Ot(e, t, n) {
    var r = Tt.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || 'px') : t;
  }
  function Ft(e, t, n, r, i) {
    var o = n === (r ? 'border' : 'content') ? 4 : 'width' === t ? 1 : 0, s = 0;
    for (; 4 > o; o += 2)
      'margin' === n && (s += x.css(e, n + jt[o], !0, i)), r ? ('content' === n && (s -= x.css(e, 'padding' + jt[o], !0, i)), 'margin' !== n && (s -= x.css(e, 'border' + jt[o] + 'Width', !0, i))) : (s += x.css(e, 'padding' + jt[o], !0, i), 'padding' !== n && (s += x.css(e, 'border' + jt[o] + 'Width', !0, i)));
    return s;
  }
  function Pt(e, t, n) {
    var r = !0, i = 'width' === t ? e.offsetWidth : e.offsetHeight, o = qt(e), s = x.support.boxSizing && 'border-box' === x.css(e, 'boxSizing', !1, o);
    if (0 >= i || null == i) {
      if (i = vt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Ct.test(i))
        return i;
      r = s && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
    }
    return i + Ft(e, t, n || (s ? 'border' : 'content'), r, o) + 'px';
  }
  function Rt(e) {
    var t = o, n = Nt[e];
    return n || (n = Mt(e, t), 'none' !== n && n || (xt = (xt || x('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>').css('cssText', 'display:block !important')).appendTo(t.documentElement), t = (xt[0].contentWindow || xt[0].contentDocument).document, t.write('<!doctype html><html><body>'), t.close(), n = Mt(e, t), xt.detach()), Nt[e] = n), n;
  }
  function Mt(e, t) {
    var n = x(t.createElement(e)).appendTo(t.body), r = x.css(n[0], 'display');
    return n.remove(), r;
  }
  x.each([
    'height',
    'width'
  ], function (e, t) {
    x.cssHooks[t] = {
      get: function (e, n, r) {
        return n ? 0 === e.offsetWidth && bt.test(x.css(e, 'display')) ? x.swap(e, Et, function () {
          return Pt(e, t, r);
        }) : Pt(e, t, r) : undefined;
      },
      set: function (e, n, r) {
        var i = r && qt(e);
        return Ot(e, n, r ? Ft(e, t, r, x.support.boxSizing && 'border-box' === x.css(e, 'boxSizing', !1, i), i) : 0);
      }
    };
  }), x(function () {
    x.support.reliableMarginRight || (x.cssHooks.marginRight = {
      get: function (e, t) {
        return t ? x.swap(e, { display: 'inline-block' }, vt, [
          e,
          'marginRight'
        ]) : undefined;
      }
    }), !x.support.pixelPosition && x.fn.position && x.each([
      'top',
      'left'
    ], function (e, t) {
      x.cssHooks[t] = {
        get: function (e, n) {
          return n ? (n = vt(e, t), Ct.test(n) ? x(e).position()[t] + 'px' : n) : undefined;
        }
      };
    });
  }), x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) {
    return 0 >= e.offsetWidth && 0 >= e.offsetHeight;
  }, x.expr.filters.visible = function (e) {
    return !x.expr.filters.hidden(e);
  }), x.each({
    margin: '',
    padding: '',
    border: 'Width'
  }, function (e, t) {
    x.cssHooks[e + t] = {
      expand: function (n) {
        var r = 0, i = {}, o = 'string' == typeof n ? n.split(' ') : [n];
        for (; 4 > r; r++)
          i[e + jt[r] + t] = o[r] || o[r - 2] || o[0];
        return i;
      }
    }, wt.test(e) || (x.cssHooks[e + t].set = Ot);
  });
  var Wt = /%20/g, $t = /\[\]$/, Bt = /\r?\n/g, It = /^(?:submit|button|image|reset|file)$/i, zt = /^(?:input|select|textarea|keygen)/i;
  x.fn.extend({
    serialize: function () {
      return x.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var e = x.prop(this, 'elements');
        return e ? x.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !x(this).is(':disabled') && zt.test(this.nodeName) && !It.test(e) && (this.checked || !ot.test(e));
      }).map(function (e, t) {
        var n = x(this).val();
        return null == n ? null : x.isArray(n) ? x.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Bt, '\r\n')
          };
        }) : {
          name: t.name,
          value: n.replace(Bt, '\r\n')
        };
      }).get();
    }
  }), x.param = function (e, t) {
    var n, r = [], i = function (e, t) {
        t = x.isFunction(t) ? t() : null == t ? '' : t, r[r.length] = encodeURIComponent(e) + '=' + encodeURIComponent(t);
      };
    if (t === undefined && (t = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e))
      x.each(e, function () {
        i(this.name, this.value);
      });
    else
      for (n in e)
        _t(n, e[n], t, i);
    return r.join('&').replace(Wt, '+');
  };
  function _t(e, t, n, r) {
    var i;
    if (x.isArray(t))
      x.each(t, function (t, i) {
        n || $t.test(e) ? r(e, i) : _t(e + '[' + ('object' == typeof i ? t : '') + ']', i, n, r);
      });
    else if (n || 'object' !== x.type(t))
      r(e, t);
    else
      for (i in t)
        _t(e + '[' + i + ']', t[i], n, r);
  }
  x.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function (e, t) {
    x.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), x.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    },
    bind: function (e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function (e, t) {
      return this.off(e, null, t);
    },
    delegate: function (e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
    }
  });
  var Xt, Ut, Yt = x.now(), Vt = /\?/, Gt = /#.*$/, Jt = /([?&])_=[^&]*/, Qt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Zt = /^(?:GET|HEAD)$/, en = /^\/\//, tn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, nn = x.fn.load, rn = {}, on = {}, sn = '*/'.concat('*');
  try {
    Ut = i.href;
  } catch (an) {
    Ut = o.createElement('a'), Ut.href = '', Ut = Ut.href;
  }
  Xt = tn.exec(Ut.toLowerCase()) || [];
  function un(e) {
    return function (t, n) {
      'string' != typeof t && (n = t, t = '*');
      var r, i = 0, o = t.toLowerCase().match(w) || [];
      if (x.isFunction(n))
        while (r = o[i++])
          '+' === r[0] ? (r = r.slice(1) || '*', (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
    };
  }
  function ln(e, t, n, r) {
    var i = {}, o = e === on;
    function s(a) {
      var u;
      return i[a] = !0, x.each(e[a] || [], function (e, a) {
        var l = a(t, n, r);
        return 'string' != typeof l || o || i[l] ? o ? !(u = l) : undefined : (t.dataTypes.unshift(l), s(l), !1);
      }), u;
    }
    return s(t.dataTypes[0]) || !i['*'] && s('*');
  }
  function cn(e, t) {
    var n, r, i = x.ajaxSettings.flatOptions || {};
    for (n in t)
      t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && x.extend(!0, e, r), e;
  }
  x.fn.load = function (e, t, n) {
    if ('string' != typeof e && nn)
      return nn.apply(this, arguments);
    var r, i, o, s = this, a = e.indexOf(' ');
    return a >= 0 && (r = e.slice(a), e = e.slice(0, a)), x.isFunction(t) ? (n = t, t = undefined) : t && 'object' == typeof t && (i = 'POST'), s.length > 0 && x.ajax({
      url: e,
      type: i,
      dataType: 'html',
      data: t
    }).done(function (e) {
      o = arguments, s.html(r ? x('<div>').append(x.parseHTML(e)).find(r) : e);
    }).complete(n && function (e, t) {
      s.each(n, o || [
        e.responseText,
        t,
        e
      ]);
    }), this;
  }, x.each([
    'ajaxStart',
    'ajaxStop',
    'ajaxComplete',
    'ajaxError',
    'ajaxSuccess',
    'ajaxSend'
  ], function (e, t) {
    x.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), x.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ut,
      type: 'GET',
      isLocal: Kt.test(Xt[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': sn,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript'
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: 'responseXML',
        text: 'responseText',
        json: 'responseJSON'
      },
      converters: {
        '* text': String,
        'text html': !0,
        'text json': x.parseJSON,
        'text xml': x.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (e, t) {
      return t ? cn(cn(e, x.ajaxSettings), t) : cn(x.ajaxSettings, e);
    },
    ajaxPrefilter: un(rn),
    ajaxTransport: un(on),
    ajax: function (e, t) {
      'object' == typeof e && (t = e, e = undefined), t = t || {};
      var n, r, i, o, s, a, u, l, c = x.ajaxSetup({}, t), p = c.context || c, f = c.context && (p.nodeType || p.jquery) ? x(p) : x.event, h = x.Deferred(), d = x.Callbacks('once memory'), g = c.statusCode || {}, m = {}, y = {}, v = 0, b = 'canceled', T = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (2 === v) {
              if (!o) {
                o = {};
                while (t = Qt.exec(i))
                  o[t[1].toLowerCase()] = t[2];
              }
              t = o[e.toLowerCase()];
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return 2 === v ? i : null;
          },
          setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            return v || (e = y[n] = y[n] || e, m[e] = t), this;
          },
          overrideMimeType: function (e) {
            return v || (c.mimeType = e), this;
          },
          statusCode: function (e) {
            var t;
            if (e)
              if (2 > v)
                for (t in e)
                  g[t] = [
                    g[t],
                    e[t]
                  ];
              else
                T.always(e[T.status]);
            return this;
          },
          abort: function (e) {
            var t = e || b;
            return n && n.abort(t), k(0, t), this;
          }
        };
      if (h.promise(T).complete = d.add, T.success = T.done, T.error = T.fail, c.url = ((e || c.url || Ut) + '').replace(Gt, '').replace(en, Xt[1] + '//'), c.type = t.method || t.type || c.method || c.type, c.dataTypes = x.trim(c.dataType || '*').toLowerCase().match(w) || [''], null == c.crossDomain && (a = tn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === Xt[1] && a[2] === Xt[2] && (a[3] || ('http:' === a[1] ? '80' : '443')) === (Xt[3] || ('http:' === Xt[1] ? '80' : '443')))), c.data && c.processData && 'string' != typeof c.data && (c.data = x.param(c.data, c.traditional)), ln(rn, c, t, T), 2 === v)
        return T;
      u = c.global, u && 0 === x.active++ && x.event.trigger('ajaxStart'), c.type = c.type.toUpperCase(), c.hasContent = !Zt.test(c.type), r = c.url, c.hasContent || (c.data && (r = c.url += (Vt.test(r) ? '&' : '?') + c.data, delete c.data), c.cache === !1 && (c.url = Jt.test(r) ? r.replace(Jt, '$1_=' + Yt++) : r + (Vt.test(r) ? '&' : '?') + '_=' + Yt++)), c.ifModified && (x.lastModified[r] && T.setRequestHeader('If-Modified-Since', x.lastModified[r]), x.etag[r] && T.setRequestHeader('If-None-Match', x.etag[r])), (c.data && c.hasContent && c.contentType !== !1 || t.contentType) && T.setRequestHeader('Content-Type', c.contentType), T.setRequestHeader('Accept', c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ('*' !== c.dataTypes[0] ? ', ' + sn + '; q=0.01' : '') : c.accepts['*']);
      for (l in c.headers)
        T.setRequestHeader(l, c.headers[l]);
      if (c.beforeSend && (c.beforeSend.call(p, T, c) === !1 || 2 === v))
        return T.abort();
      b = 'abort';
      for (l in {
          success: 1,
          error: 1,
          complete: 1
        })
        T[l](c[l]);
      if (n = ln(on, c, t, T)) {
        T.readyState = 1, u && f.trigger('ajaxSend', [
          T,
          c
        ]), c.async && c.timeout > 0 && (s = setTimeout(function () {
          T.abort('timeout');
        }, c.timeout));
        try {
          v = 1, n.send(m, k);
        } catch (C) {
          if (!(2 > v))
            throw C;
          k(-1, C);
        }
      } else
        k(-1, 'No Transport');
      function k(e, t, o, a) {
        var l, m, y, b, w, C = t;
        2 !== v && (v = 2, s && clearTimeout(s), n = undefined, i = a || '', T.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, o && (b = pn(c, T, o)), b = fn(c, b, T, l), l ? (c.ifModified && (w = T.getResponseHeader('Last-Modified'), w && (x.lastModified[r] = w), w = T.getResponseHeader('etag'), w && (x.etag[r] = w)), 204 === e || 'HEAD' === c.type ? C = 'nocontent' : 304 === e ? C = 'notmodified' : (C = b.state, m = b.data, y = b.error, l = !y)) : (y = C, (e || !C) && (C = 'error', 0 > e && (e = 0))), T.status = e, T.statusText = (t || C) + '', l ? h.resolveWith(p, [
          m,
          C,
          T
        ]) : h.rejectWith(p, [
          T,
          C,
          y
        ]), T.statusCode(g), g = undefined, u && f.trigger(l ? 'ajaxSuccess' : 'ajaxError', [
          T,
          c,
          l ? m : y
        ]), d.fireWith(p, [
          T,
          C
        ]), u && (f.trigger('ajaxComplete', [
          T,
          c
        ]), --x.active || x.event.trigger('ajaxStop')));
      }
      return T;
    },
    getJSON: function (e, t, n) {
      return x.get(e, t, n, 'json');
    },
    getScript: function (e, t) {
      return x.get(e, undefined, t, 'script');
    }
  }), x.each([
    'get',
    'post'
  ], function (e, t) {
    x[t] = function (e, n, r, i) {
      return x.isFunction(n) && (i = i || r, r = n, n = undefined), x.ajax({
        url: e,
        type: t,
        dataType: i,
        data: n,
        success: r
      });
    };
  });
  function pn(e, t, n) {
    var r, i, o, s, a = e.contents, u = e.dataTypes;
    while ('*' === u[0])
      u.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader('Content-Type'));
    if (r)
      for (i in a)
        if (a[i] && a[i].test(r)) {
          u.unshift(i);
          break;
        }
    if (u[0] in n)
      o = u[0];
    else {
      for (i in n) {
        if (!u[0] || e.converters[i + ' ' + u[0]]) {
          o = i;
          break;
        }
        s || (s = i);
      }
      o = o || s;
    }
    return o ? (o !== u[0] && u.unshift(o), n[o]) : undefined;
  }
  function fn(e, t, n, r) {
    var i, o, s, a, u, l = {}, c = e.dataTypes.slice();
    if (c[1])
      for (s in e.converters)
        l[s.toLowerCase()] = e.converters[s];
    o = c.shift();
    while (o)
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
        if ('*' === o)
          o = u;
        else if ('*' !== u && u !== o) {
          if (s = l[u + ' ' + o] || l['* ' + o], !s)
            for (i in l)
              if (a = i.split(' '), a[1] === o && (s = l[u + ' ' + a[0]] || l['* ' + a[0]])) {
                s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
                break;
              }
          if (s !== !0)
            if (s && e['throws'])
              t = s(t);
            else
              try {
                t = s(t);
              } catch (p) {
                return {
                  state: 'parsererror',
                  error: s ? p : 'No conversion from ' + u + ' to ' + o
                };
              }
        }
    return {
      state: 'success',
      data: t
    };
  }
  x.ajaxSetup({
    accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
    contents: { script: /(?:java|ecma)script/ },
    converters: {
      'text script': function (e) {
        return x.globalEval(e), e;
      }
    }
  }), x.ajaxPrefilter('script', function (e) {
    e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = 'GET');
  }), x.ajaxTransport('script', function (e) {
    if (e.crossDomain) {
      var t, n;
      return {
        send: function (r, i) {
          t = x('<script>').prop({
            async: !0,
            charset: e.scriptCharset,
            src: e.url
          }).on('load error', n = function (e) {
            t.remove(), n = null, e && i('error' === e.type ? 404 : 200, e.type);
          }), o.head.appendChild(t[0]);
        },
        abort: function () {
          n && n();
        }
      };
    }
  });
  var hn = [], dn = /(=)\?(?=&|$)|\?\?/;
  x.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = hn.pop() || x.expando + '_' + Yt++;
      return this[e] = !0, e;
    }
  }), x.ajaxPrefilter('json jsonp', function (t, n, r) {
    var i, o, s, a = t.jsonp !== !1 && (dn.test(t.url) ? 'url' : 'string' == typeof t.data && !(t.contentType || '').indexOf('application/x-www-form-urlencoded') && dn.test(t.data) && 'data');
    return a || 'jsonp' === t.dataTypes[0] ? (i = t.jsonpCallback = x.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(dn, '$1' + i) : t.jsonp !== !1 && (t.url += (Vt.test(t.url) ? '&' : '?') + t.jsonp + '=' + i), t.converters['script json'] = function () {
      return s || x.error(i + ' was not called'), s[0];
    }, t.dataTypes[0] = 'json', o = e[i], e[i] = function () {
      s = arguments;
    }, r.always(function () {
      e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, hn.push(i)), s && x.isFunction(o) && o(s[0]), s = o = undefined;
    }), 'script') : undefined;
  }), x.ajaxSettings.xhr = function () {
    try {
      return new XMLHttpRequest();
    } catch (e) {
    }
  };
  var gn = x.ajaxSettings.xhr(), mn = {
      0: 200,
      1223: 204
    }, yn = 0, vn = {};
  e.ActiveXObject && x(e).on('unload', function () {
    for (var e in vn)
      vn[e]();
    vn = undefined;
  }), x.support.cors = !!gn && 'withCredentials' in gn, x.support.ajax = gn = !!gn, x.ajaxTransport(function (e) {
    var t;
    return x.support.cors || gn && !e.crossDomain ? {
      send: function (n, r) {
        var i, o, s = e.xhr();
        if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
          for (i in e.xhrFields)
            s[i] = e.xhrFields[i];
        e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n['X-Requested-With'] || (n['X-Requested-With'] = 'XMLHttpRequest');
        for (i in n)
          s.setRequestHeader(i, n[i]);
        t = function (e) {
          return function () {
            t && (delete vn[o], t = s.onload = s.onerror = null, 'abort' === e ? s.abort() : 'error' === e ? r(s.status || 404, s.statusText) : r(mn[s.status] || s.status, s.statusText, 'string' == typeof s.responseText ? { text: s.responseText } : undefined, s.getAllResponseHeaders()));
          };
        }, s.onload = t(), s.onerror = t('error'), t = vn[o = yn++] = t('abort'), s.send(e.hasContent && e.data || null);
      },
      abort: function () {
        t && t();
      }
    } : undefined;
  });
  var xn, bn, wn = /^(?:toggle|show|hide)$/, Tn = RegExp('^(?:([+-])=|)(' + b + ')([a-z%]*)$', 'i'), Cn = /queueHooks$/, kn = [An], Nn = {
      '*': [function (e, t) {
          var n = this.createTween(e, t), r = n.cur(), i = Tn.exec(t), o = i && i[3] || (x.cssNumber[e] ? '' : 'px'), s = (x.cssNumber[e] || 'px' !== o && +r) && Tn.exec(x.css(n.elem, e)), a = 1, u = 20;
          if (s && s[3] !== o) {
            o = o || s[3], i = i || [], s = +r || 1;
            do
              a = a || '.5', s /= a, x.style(n.elem, e, s + o);
            while (a !== (a = n.cur() / r) && 1 !== a && --u);
          }
          return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n;
        }]
    };
  function En() {
    return setTimeout(function () {
      xn = undefined;
    }), xn = x.now();
  }
  function Sn(e, t, n) {
    var r, i = (Nn[t] || []).concat(Nn['*']), o = 0, s = i.length;
    for (; s > o; o++)
      if (r = i[o].call(n, t, e))
        return r;
  }
  function jn(e, t, n) {
    var r, i, o = 0, s = kn.length, a = x.Deferred().always(function () {
        delete u.elem;
      }), u = function () {
        if (i)
          return !1;
        var t = xn || En(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length;
        for (; u > s; s++)
          l.tweens[s].run(o);
        return a.notifyWith(e, [
          l,
          o,
          n
        ]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1);
      }, l = a.promise({
        elem: e,
        props: x.extend({}, t),
        opts: x.extend(!0, { specialEasing: {} }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: xn || En(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = x.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
          return l.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0, r = t ? l.tweens.length : 0;
          if (i)
            return this;
          for (i = !0; r > n; n++)
            l.tweens[n].run(1);
          return t ? a.resolveWith(e, [
            l,
            t
          ]) : a.rejectWith(e, [
            l,
            t
          ]), this;
        }
      }), c = l.props;
    for (Dn(c, l.opts.specialEasing); s > o; o++)
      if (r = kn[o].call(l, e, c, l.opts))
        return r;
    return x.map(c, Sn, l), x.isFunction(l.opts.start) && l.opts.start.call(e, l), x.fx.timer(x.extend(u, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
  }
  function Dn(e, t) {
    var n, r, i, o, s;
    for (n in e)
      if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = x.cssHooks[r], s && 'expand' in s) {
        o = s.expand(o), delete e[r];
        for (n in o)
          n in e || (e[n] = o[n], t[n] = i);
      } else
        t[r] = i;
  }
  x.Animation = x.extend(jn, {
    tweener: function (e, t) {
      x.isFunction(e) ? (t = e, e = ['*']) : e = e.split(' ');
      var n, r = 0, i = e.length;
      for (; i > r; r++)
        n = e[r], Nn[n] = Nn[n] || [], Nn[n].unshift(t);
    },
    prefilter: function (e, t) {
      t ? kn.unshift(e) : kn.push(e);
    }
  });
  function An(e, t, n) {
    var r, i, o, s, a, u, l = this, c = {}, p = e.style, f = e.nodeType && Lt(e), h = q.get(e, 'fxshow');
    n.queue || (a = x._queueHooks(e, 'fx'), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function () {
      a.unqueued || u();
    }), a.unqueued++, l.always(function () {
      l.always(function () {
        a.unqueued--, x.queue(e, 'fx').length || a.empty.fire();
      });
    })), 1 === e.nodeType && ('height' in t || 'width' in t) && (n.overflow = [
      p.overflow,
      p.overflowX,
      p.overflowY
    ], 'inline' === x.css(e, 'display') && 'none' === x.css(e, 'float') && (p.display = 'inline-block')), n.overflow && (p.overflow = 'hidden', l.always(function () {
      p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
    }));
    for (r in t)
      if (i = t[r], wn.exec(i)) {
        if (delete t[r], o = o || 'toggle' === i, i === (f ? 'hide' : 'show')) {
          if ('show' !== i || !h || h[r] === undefined)
            continue;
          f = !0;
        }
        c[r] = h && h[r] || x.style(e, r);
      }
    if (!x.isEmptyObject(c)) {
      h ? 'hidden' in h && (f = h.hidden) : h = q.access(e, 'fxshow', {}), o && (h.hidden = !f), f ? x(e).show() : l.done(function () {
        x(e).hide();
      }), l.done(function () {
        var t;
        q.remove(e, 'fxshow');
        for (t in c)
          x.style(e, t, c[t]);
      });
      for (r in c)
        s = Sn(f ? h[r] : 0, r, l), r in h || (h[r] = s.start, f && (s.end = s.start, s.start = 'width' === r || 'height' === r ? 1 : 0));
    }
  }
  function Ln(e, t, n, r, i) {
    return new Ln.prototype.init(e, t, n, r, i);
  }
  x.Tween = Ln, Ln.prototype = {
    constructor: Ln,
    init: function (e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || 'swing', this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? '' : 'px');
    },
    cur: function () {
      var e = Ln.propHooks[this.prop];
      return e && e.get ? e.get(this) : Ln.propHooks._default.get(this);
    },
    run: function (e) {
      var t, n = Ln.propHooks[this.prop];
      return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ln.propHooks._default.set(this), this;
    }
  }, Ln.prototype.init.prototype = Ln.prototype, Ln.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ''), t && 'auto' !== t ? t : 0) : e.elem[e.prop];
      },
      set: function (e) {
        x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
      }
    }
  }, Ln.propHooks.scrollTop = Ln.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, x.each([
    'toggle',
    'show',
    'hide'
  ], function (e, t) {
    var n = x.fn[t];
    x.fn[t] = function (e, r, i) {
      return null == e || 'boolean' == typeof e ? n.apply(this, arguments) : this.animate(qn(t, !0), e, r, i);
    };
  }), x.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(Lt).css('opacity', 0).show().end().animate({ opacity: t }, e, n, r);
    },
    animate: function (e, t, n, r) {
      var i = x.isEmptyObject(e), o = x.speed(t, n, r), s = function () {
          var t = jn(this, x.extend({}, e), o);
          (i || q.get(this, 'finish')) && t.stop(!0);
        };
      return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s);
    },
    stop: function (e, t, n) {
      var r = function (e) {
        var t = e.stop;
        delete e.stop, t(n);
      };
      return 'string' != typeof e && (n = t, t = e, e = undefined), t && e !== !1 && this.queue(e || 'fx', []), this.each(function () {
        var t = !0, i = null != e && e + 'queueHooks', o = x.timers, s = q.get(this);
        if (i)
          s[i] && s[i].stop && r(s[i]);
        else
          for (i in s)
            s[i] && s[i].stop && Cn.test(i) && r(s[i]);
        for (i = o.length; i--;)
          o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
        (t || !n) && x.dequeue(this, e);
      });
    },
    finish: function (e) {
      return e !== !1 && (e = e || 'fx'), this.each(function () {
        var t, n = q.get(this), r = n[e + 'queue'], i = n[e + 'queueHooks'], o = x.timers, s = r ? r.length : 0;
        for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        for (t = 0; s > t; t++)
          r[t] && r[t].finish && r[t].finish.call(this);
        delete n.finish;
      });
    }
  });
  function qn(e, t) {
    var n, r = { height: e }, i = 0;
    for (t = t ? 1 : 0; 4 > i; i += 2 - t)
      n = jt[i], r['margin' + n] = r['padding' + n] = e;
    return t && (r.opacity = r.width = e), r;
  }
  x.each({
    slideDown: qn('show'),
    slideUp: qn('hide'),
    slideToggle: qn('toggle'),
    fadeIn: { opacity: 'show' },
    fadeOut: { opacity: 'hide' },
    fadeToggle: { opacity: 'toggle' }
  }, function (e, t) {
    x.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), x.speed = function (e, t, n) {
    var r = e && 'object' == typeof e ? x.extend({}, e) : {
        complete: n || !n && t || x.isFunction(e) && e,
        duration: e,
        easing: n && t || t && !x.isFunction(t) && t
      };
    return r.duration = x.fx.off ? 0 : 'number' == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = 'fx'), r.old = r.complete, r.complete = function () {
      x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue);
    }, r;
  }, x.easing = {
    linear: function (e) {
      return e;
    },
    swing: function (e) {
      return 0.5 - Math.cos(e * Math.PI) / 2;
    }
  }, x.timers = [], x.fx = Ln.prototype.init, x.fx.tick = function () {
    var e, t = x.timers, n = 0;
    for (xn = x.now(); t.length > n; n++)
      e = t[n], e() || t[n] !== e || t.splice(n--, 1);
    t.length || x.fx.stop(), xn = undefined;
  }, x.fx.timer = function (e) {
    e() && x.timers.push(e) && x.fx.start();
  }, x.fx.interval = 13, x.fx.start = function () {
    bn || (bn = setInterval(x.fx.tick, x.fx.interval));
  }, x.fx.stop = function () {
    clearInterval(bn), bn = null;
  }, x.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (e) {
    return x.grep(x.timers, function (t) {
      return e === t.elem;
    }).length;
  }), x.fn.offset = function (e) {
    if (arguments.length)
      return e === undefined ? this : this.each(function (t) {
        x.offset.setOffset(this, e, t);
      });
    var t, n, i = this[0], o = {
        top: 0,
        left: 0
      }, s = i && i.ownerDocument;
    if (s)
      return t = s.documentElement, x.contains(t, i) ? (typeof i.getBoundingClientRect !== r && (o = i.getBoundingClientRect()), n = Hn(s), {
        top: o.top + n.pageYOffset - t.clientTop,
        left: o.left + n.pageXOffset - t.clientLeft
      }) : o;
  }, x.offset = {
    setOffset: function (e, t, n) {
      var r, i, o, s, a, u, l, c = x.css(e, 'position'), p = x(e), f = {};
      'static' === c && (e.style.position = 'relative'), a = p.offset(), o = x.css(e, 'top'), u = x.css(e, 'left'), l = ('absolute' === c || 'fixed' === c) && (o + u).indexOf('auto') > -1, l ? (r = p.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), x.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), 'using' in t ? t.using.call(e, f) : p.css(f);
    }
  }, x.fn.extend({
    position: function () {
      if (this[0]) {
        var e, t, n = this[0], r = {
            top: 0,
            left: 0
          };
        return 'fixed' === x.css(n, 'position') ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], 'html') || (r = e.offset()), r.top += x.css(e[0], 'borderTopWidth', !0), r.left += x.css(e[0], 'borderLeftWidth', !0)), {
          top: t.top - r.top - x.css(n, 'marginTop', !0),
          left: t.left - r.left - x.css(n, 'marginLeft', !0)
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var e = this.offsetParent || s;
        while (e && !x.nodeName(e, 'html') && 'static' === x.css(e, 'position'))
          e = e.offsetParent;
        return e || s;
      });
    }
  }), x.each({
    scrollLeft: 'pageXOffset',
    scrollTop: 'pageYOffset'
  }, function (t, n) {
    var r = 'pageYOffset' === n;
    x.fn[t] = function (i) {
      return x.access(this, function (t, i, o) {
        var s = Hn(t);
        return o === undefined ? s ? s[n] : t[i] : (s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o, undefined);
      }, t, i, arguments.length, null);
    };
  });
  function Hn(e) {
    return x.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }
  x.each({
    Height: 'height',
    Width: 'width'
  }, function (e, t) {
    x.each({
      padding: 'inner' + e,
      content: t,
      '': 'outer' + e
    }, function (n, r) {
      x.fn[r] = function (r, i) {
        var o = arguments.length && (n || 'boolean' != typeof r), s = n || (r === !0 || i === !0 ? 'margin' : 'border');
        return x.access(this, function (t, n, r) {
          var i;
          return x.isWindow(t) ? t.document.documentElement['client' + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body['scroll' + e], i['scroll' + e], t.body['offset' + e], i['offset' + e], i['client' + e])) : r === undefined ? x.css(t, n, s) : x.style(t, n, r, s);
        }, t, o ? r : undefined, o, null);
      };
    });
  }), x.fn.size = function () {
    return this.length;
  }, x.fn.andSelf = x.fn.addBack, 'object' == typeof module && module && 'object' == typeof module.exports ? module.exports = x : 'function' == typeof define && define.amd && define('jquery', [], function () {
    return x;
  }), 'object' == typeof e && 'object' == typeof e.document && (e.jQuery = e.$ = x);
}(window));