import ESM_COMPAT_Module from "node:module";
import { fileURLToPath as ESM_COMPAT_fileURLToPath } from 'node:url';
import { dirname as ESM_COMPAT_dirname } from 'node:path';
const __filename = ESM_COMPAT_fileURLToPath(import.meta.url);
const __dirname = ESM_COMPAT_dirname(__filename);
const require = ESM_COMPAT_Module.createRequire(import.meta.url);
var Ni = Object.create;
var Je = Object.defineProperty;
var Bi = Object.getOwnPropertyDescriptor;
var Di = Object.getOwnPropertyNames;
var Mi = Object.getPrototypeOf, Li = Object.prototype.hasOwnProperty;
var o = (e, t) => Je(e, "name", { value: t, configurable: !0 }), y = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy <
"u" ? new Proxy(e, {
  get: (t, r) => (typeof require < "u" ? require : t)[r]
}) : e)(function(e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var d = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var Fi = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of Di(t))
      !Li.call(e, i) && i !== r && Je(e, i, { get: () => t[i], enumerable: !(n = Bi(t, i)) || n.enumerable });
  return e;
};
var A = (e, t, r) => (r = e != null ? Ni(Mi(e)) : {}, Fi(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  t || !e || !e.__esModule ? Je(r, "default", { value: e, enumerable: !0 }) : r,
  e
));

// ../node_modules/picocolors/picocolors.js
var ar = d((vl, Ye) => {
  var ir = process.argv || [], ae = process.env, Ui = !("NO_COLOR" in ae || ir.includes("--no-color")) && ("FORCE_COLOR" in ae || ir.includes(
  "--color") || process.platform === "win32" || y != null && y("tty").isatty(1) && ae.TERM !== "dumb" || "CI" in ae), $i = /* @__PURE__ */ o(
  (e, t, r = e) => (n) => {
    let i = "" + n, s = i.indexOf(t, e.length);
    return ~s ? e + qi(i, t, r, s) + t : e + i + t;
  }, "formatter"), qi = /* @__PURE__ */ o((e, t, r, n) => {
    let i = "", s = 0;
    do
      i += e.substring(s, n) + r, s = n + t.length, n = e.indexOf(t, s);
    while (~n);
    return i + e.substring(s);
  }, "replaceClose"), sr = /* @__PURE__ */ o((e = Ui) => {
    let t = e ? $i : () => String;
    return {
      isColorSupported: e,
      reset: t("\x1B[0m", "\x1B[0m"),
      bold: t("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"),
      dim: t("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"),
      italic: t("\x1B[3m", "\x1B[23m"),
      underline: t("\x1B[4m", "\x1B[24m"),
      inverse: t("\x1B[7m", "\x1B[27m"),
      hidden: t("\x1B[8m", "\x1B[28m"),
      strikethrough: t("\x1B[9m", "\x1B[29m"),
      black: t("\x1B[30m", "\x1B[39m"),
      red: t("\x1B[31m", "\x1B[39m"),
      green: t("\x1B[32m", "\x1B[39m"),
      yellow: t("\x1B[33m", "\x1B[39m"),
      blue: t("\x1B[34m", "\x1B[39m"),
      magenta: t("\x1B[35m", "\x1B[39m"),
      cyan: t("\x1B[36m", "\x1B[39m"),
      white: t("\x1B[37m", "\x1B[39m"),
      gray: t("\x1B[90m", "\x1B[39m"),
      bgBlack: t("\x1B[40m", "\x1B[49m"),
      bgRed: t("\x1B[41m", "\x1B[49m"),
      bgGreen: t("\x1B[42m", "\x1B[49m"),
      bgYellow: t("\x1B[43m", "\x1B[49m"),
      bgBlue: t("\x1B[44m", "\x1B[49m"),
      bgMagenta: t("\x1B[45m", "\x1B[49m"),
      bgCyan: t("\x1B[46m", "\x1B[49m"),
      bgWhite: t("\x1B[47m", "\x1B[49m"),
      blackBright: t("\x1B[90m", "\x1B[39m"),
      redBright: t("\x1B[91m", "\x1B[39m"),
      greenBright: t("\x1B[92m", "\x1B[39m"),
      yellowBright: t("\x1B[93m", "\x1B[39m"),
      blueBright: t("\x1B[94m", "\x1B[39m"),
      magentaBright: t("\x1B[95m", "\x1B[39m"),
      cyanBright: t("\x1B[96m", "\x1B[39m"),
      whiteBright: t("\x1B[97m", "\x1B[39m"),
      bgBlackBright: t("\x1B[100m", "\x1B[49m"),
      bgRedBright: t("\x1B[101m", "\x1B[49m"),
      bgGreenBright: t("\x1B[102m", "\x1B[49m"),
      bgYellowBright: t("\x1B[103m", "\x1B[49m"),
      bgBlueBright: t("\x1B[104m", "\x1B[49m"),
      bgMagentaBright: t("\x1B[105m", "\x1B[49m"),
      bgCyanBright: t("\x1B[106m", "\x1B[49m"),
      bgWhiteBright: t("\x1B[107m", "\x1B[49m")
    };
  }, "createColors");
  Ye.exports = sr();
  Ye.exports.createColors = sr;
});

// ../node_modules/isexe/windows.js
var br = d((Al, gr) => {
  gr.exports = yr;
  yr.sync = Hi;
  var mr = y("fs");
  function Wi(e, t) {
    var r = t.pathExt !== void 0 ? t.pathExt : process.env.PATHEXT;
    if (!r || (r = r.split(";"), r.indexOf("") !== -1))
      return !0;
    for (var n = 0; n < r.length; n++) {
      var i = r[n].toLowerCase();
      if (i && e.substr(-i.length).toLowerCase() === i)
        return !0;
    }
    return !1;
  }
  o(Wi, "checkPathExt");
  function hr(e, t, r) {
    return !e.isSymbolicLink() && !e.isFile() ? !1 : Wi(t, r);
  }
  o(hr, "checkStat");
  function yr(e, t, r) {
    mr.stat(e, function(n, i) {
      r(n, n ? !1 : hr(i, e, t));
    });
  }
  o(yr, "isexe");
  function Hi(e, t) {
    return hr(mr.statSync(e), e, t);
  }
  o(Hi, "sync");
});

// ../node_modules/isexe/mode.js
var Pr = d((_l, vr) => {
  vr.exports = Sr;
  Sr.sync = Vi;
  var xr = y("fs");
  function Sr(e, t, r) {
    xr.stat(e, function(n, i) {
      r(n, n ? !1 : wr(i, t));
    });
  }
  o(Sr, "isexe");
  function Vi(e, t) {
    return wr(xr.statSync(e), t);
  }
  o(Vi, "sync");
  function wr(e, t) {
    return e.isFile() && zi(e, t);
  }
  o(wr, "checkStat");
  function zi(e, t) {
    var r = e.mode, n = e.uid, i = e.gid, s = t.uid !== void 0 ? t.uid : process.getuid && process.getuid(), a = t.gid !== void 0 ? t.gid : process.
    getgid && process.getgid(), c = parseInt("100", 8), u = parseInt("010", 8), l = parseInt("001", 8), f = c | u, w = r & l || r & u && i ===
    a || r & c && n === s || r & f && s === 0;
    return w;
  }
  o(zi, "checkMode");
});

// ../node_modules/isexe/index.js
var Tr = d((Nl, Er) => {
  var jl = y("fs"), le;
  process.platform === "win32" || global.TESTING_WINDOWS ? le = br() : le = Pr();
  Er.exports = Xe;
  Xe.sync = Ki;
  function Xe(e, t, r) {
    if (typeof t == "function" && (r = t, t = {}), !r) {
      if (typeof Promise != "function")
        throw new TypeError("callback not provided");
      return new Promise(function(n, i) {
        Xe(e, t || {}, function(s, a) {
          s ? i(s) : n(a);
        });
      });
    }
    le(e, t || {}, function(n, i) {
      n && (n.code === "EACCES" || t && t.ignoreErrors) && (n = null, i = !1), r(n, i);
    });
  }
  o(Xe, "isexe");
  function Ki(e, t) {
    try {
      return le.sync(e, t || {});
    } catch (r) {
      if (t && t.ignoreErrors || r.code === "EACCES")
        return !1;
      throw r;
    }
  }
  o(Ki, "sync");
});

// ../node_modules/cross-spawn/node_modules/which/which.js
var _r = d((Dl, Rr) => {
  var D = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys", Ir = y("path"), Ji = D ? ";" : "\
:", kr = Tr(), Cr = /* @__PURE__ */ o((e) => Object.assign(new Error(`not found: ${e}`), { code: "ENOENT" }), "getNotFoundError"), Or = /* @__PURE__ */ o(
  (e, t) => {
    let r = t.colon || Ji, n = e.match(/\//) || D && e.match(/\\/) ? [""] : [
      // windows always checks the cwd first
      ...D ? [process.cwd()] : [],
      ...(t.path || process.env.PATH || /* istanbul ignore next: very unusual */
      "").split(r)
    ], i = D ? t.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "", s = D ? i.split(r) : [""];
    return D && e.indexOf(".") !== -1 && s[0] !== "" && s.unshift(""), {
      pathEnv: n,
      pathExt: s,
      pathExtExe: i
    };
  }, "getPathInfo"), Ar = /* @__PURE__ */ o((e, t, r) => {
    typeof t == "function" && (r = t, t = {}), t || (t = {});
    let { pathEnv: n, pathExt: i, pathExtExe: s } = Or(e, t), a = [], c = /* @__PURE__ */ o((l) => new Promise((f, w) => {
      if (l === n.length)
        return t.all && a.length ? f(a) : w(Cr(e));
      let g = n[l], p = /^".*"$/.test(g) ? g.slice(1, -1) : g, b = Ir.join(p, e), h = !p && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + b : b;
      f(u(h, l, 0));
    }), "step"), u = /* @__PURE__ */ o((l, f, w) => new Promise((g, p) => {
      if (w === i.length)
        return g(c(f + 1));
      let b = i[w];
      kr(l + b, { pathExt: s }, (h, x) => {
        if (!h && x)
          if (t.all)
            a.push(l + b);
          else
            return g(l + b);
        return g(u(l, f, w + 1));
      });
    }), "subStep");
    return r ? c(0).then((l) => r(null, l), r) : c(0);
  }, "which"), Yi = /* @__PURE__ */ o((e, t) => {
    t = t || {};
    let { pathEnv: r, pathExt: n, pathExtExe: i } = Or(e, t), s = [];
    for (let a = 0; a < r.length; a++) {
      let c = r[a], u = /^".*"$/.test(c) ? c.slice(1, -1) : c, l = Ir.join(u, e), f = !u && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + l : l;
      for (let w = 0; w < n.length; w++) {
        let g = f + n[w];
        try {
          if (kr.sync(g, { pathExt: i }))
            if (t.all)
              s.push(g);
            else
              return g;
        } catch {
        }
      }
    }
    if (t.all && s.length)
      return s;
    if (t.nothrow)
      return null;
    throw Cr(e);
  }, "whichSync");
  Rr.exports = Ar;
  Ar.sync = Yi;
});

// ../node_modules/path-key/index.js
var Qe = d((Ll, Ze) => {
  "use strict";
  var Gr = /* @__PURE__ */ o((e = {}) => {
    let t = e.env || process.env;
    return (e.platform || process.platform) !== "win32" ? "PATH" : Object.keys(t).reverse().find((n) => n.toUpperCase() === "PATH") || "Path";
  }, "pathKey");
  Ze.exports = Gr;
  Ze.exports.default = Gr;
});

// ../node_modules/cross-spawn/lib/util/resolveCommand.js
var Dr = d((Ul, Br) => {
  "use strict";
  var jr = y("path"), Xi = _r(), Zi = Qe();
  function Nr(e, t) {
    let r = e.options.env || process.env, n = process.cwd(), i = e.options.cwd != null, s = i && process.chdir !== void 0 && !process.chdir.
    disabled;
    if (s)
      try {
        process.chdir(e.options.cwd);
      } catch {
      }
    let a;
    try {
      a = Xi.sync(e.command, {
        path: r[Zi({ env: r })],
        pathExt: t ? jr.delimiter : void 0
      });
    } catch {
    } finally {
      s && process.chdir(n);
    }
    return a && (a = jr.resolve(i ? e.options.cwd : "", a)), a;
  }
  o(Nr, "resolveCommandAttempt");
  function Qi(e) {
    return Nr(e) || Nr(e, !0);
  }
  o(Qi, "resolveCommand");
  Br.exports = Qi;
});

// ../node_modules/cross-spawn/lib/util/escape.js
var Mr = d((ql, tt) => {
  "use strict";
  var et = /([()\][%!^"`<>&|;, *?])/g;
  function es(e) {
    return e = e.replace(et, "^$1"), e;
  }
  o(es, "escapeCommand");
  function ts(e, t) {
    return e = `${e}`, e = e.replace(/(\\*)"/g, '$1$1\\"'), e = e.replace(/(\\*)$/, "$1$1"), e = `"${e}"`, e = e.replace(et, "^$1"), t && (e =
    e.replace(et, "^$1")), e;
  }
  o(ts, "escapeArgument");
  tt.exports.command = es;
  tt.exports.argument = ts;
});

// ../node_modules/shebang-regex/index.js
var Fr = d((Hl, Lr) => {
  "use strict";
  Lr.exports = /^#!(.*)/;
});

// ../node_modules/shebang-command/index.js
var $r = d((Vl, Ur) => {
  "use strict";
  var rs = Fr();
  Ur.exports = (e = "") => {
    let t = e.match(rs);
    if (!t)
      return null;
    let [r, n] = t[0].replace(/#! ?/, "").split(" "), i = r.split("/").pop();
    return i === "env" ? n : n ? `${i} ${n}` : i;
  };
});

// ../node_modules/cross-spawn/lib/util/readShebang.js
var Wr = d((zl, qr) => {
  "use strict";
  var rt = y("fs"), ns = $r();
  function os(e) {
    let r = Buffer.alloc(150), n;
    try {
      n = rt.openSync(e, "r"), rt.readSync(n, r, 0, 150, 0), rt.closeSync(n);
    } catch {
    }
    return ns(r.toString());
  }
  o(os, "readShebang");
  qr.exports = os;
});

// ../node_modules/cross-spawn/lib/parse.js
var Kr = d((Jl, zr) => {
  "use strict";
  var is = y("path"), Hr = Dr(), Vr = Mr(), ss = Wr(), as = process.platform === "win32", cs = /\.(?:com|exe)$/i, us = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
  function ls(e) {
    e.file = Hr(e);
    let t = e.file && ss(e.file);
    return t ? (e.args.unshift(e.file), e.command = t, Hr(e)) : e.file;
  }
  o(ls, "detectShebang");
  function fs(e) {
    if (!as)
      return e;
    let t = ls(e), r = !cs.test(t);
    if (e.options.forceShell || r) {
      let n = us.test(t);
      e.command = is.normalize(e.command), e.command = Vr.command(e.command), e.args = e.args.map((s) => Vr.argument(s, n));
      let i = [e.command].concat(e.args).join(" ");
      e.args = ["/d", "/s", "/c", `"${i}"`], e.command = process.env.comspec || "cmd.exe", e.options.windowsVerbatimArguments = !0;
    }
    return e;
  }
  o(fs, "parseNonShell");
  function ds(e, t, r) {
    t && !Array.isArray(t) && (r = t, t = null), t = t ? t.slice(0) : [], r = Object.assign({}, r);
    let n = {
      command: e,
      args: t,
      options: r,
      file: void 0,
      original: {
        command: e,
        args: t
      }
    };
    return r.shell ? n : fs(n);
  }
  o(ds, "parse");
  zr.exports = ds;
});

// ../node_modules/cross-spawn/lib/enoent.js
var Xr = d((Xl, Yr) => {
  "use strict";
  var nt = process.platform === "win32";
  function ot(e, t) {
    return Object.assign(new Error(`${t} ${e.command} ENOENT`), {
      code: "ENOENT",
      errno: "ENOENT",
      syscall: `${t} ${e.command}`,
      path: e.command,
      spawnargs: e.args
    });
  }
  o(ot, "notFoundError");
  function ps(e, t) {
    if (!nt)
      return;
    let r = e.emit;
    e.emit = function(n, i) {
      if (n === "exit") {
        let s = Jr(i, t, "spawn");
        if (s)
          return r.call(e, "error", s);
      }
      return r.apply(e, arguments);
    };
  }
  o(ps, "hookChildProcess");
  function Jr(e, t) {
    return nt && e === 1 && !t.file ? ot(t.original, "spawn") : null;
  }
  o(Jr, "verifyENOENT");
  function ms(e, t) {
    return nt && e === 1 && !t.file ? ot(t.original, "spawnSync") : null;
  }
  o(ms, "verifyENOENTSync");
  Yr.exports = {
    hookChildProcess: ps,
    verifyENOENT: Jr,
    verifyENOENTSync: ms,
    notFoundError: ot
  };
});

// ../node_modules/cross-spawn/index.js
var at = d((Ql, M) => {
  "use strict";
  var Zr = y("child_process"), it = Kr(), st = Xr();
  function Qr(e, t, r) {
    let n = it(e, t, r), i = Zr.spawn(n.command, n.args, n.options);
    return st.hookChildProcess(i, n), i;
  }
  o(Qr, "spawn");
  function hs(e, t, r) {
    let n = it(e, t, r), i = Zr.spawnSync(n.command, n.args, n.options);
    return i.error = i.error || st.verifyENOENTSync(i.status, n), i;
  }
  o(hs, "spawnSync");
  M.exports = Qr;
  M.exports.spawn = Qr;
  M.exports.sync = hs;
  M.exports._parse = it;
  M.exports._enoent = st;
});

// ../node_modules/execa/node_modules/strip-final-newline/index.js
var tn = d((tf, en) => {
  "use strict";
  en.exports = (e) => {
    let t = typeof e == "string" ? `
` : 10, r = typeof e == "string" ? "\r" : 13;
    return e[e.length - 1] === t && (e = e.slice(0, e.length - 1)), e[e.length - 1] === r && (e = e.slice(0, e.length - 1)), e;
  };
});

// ../node_modules/npm-run-path/index.js
var on = d((rf, J) => {
  "use strict";
  var K = y("path"), rn = Qe(), nn = /* @__PURE__ */ o((e) => {
    e = {
      cwd: process.cwd(),
      path: process.env[rn()],
      execPath: process.execPath,
      ...e
    };
    let t, r = K.resolve(e.cwd), n = [];
    for (; t !== r; )
      n.push(K.join(r, "node_modules/.bin")), t = r, r = K.resolve(r, "..");
    let i = K.resolve(e.cwd, e.execPath, "..");
    return n.push(i), n.concat(e.path).join(K.delimiter);
  }, "npmRunPath");
  J.exports = nn;
  J.exports.default = nn;
  J.exports.env = (e) => {
    e = {
      env: process.env,
      ...e
    };
    let t = { ...e.env }, r = rn({ env: t });
    return e.path = t[r], t[r] = J.exports(e), t;
  };
});

// ../node_modules/mimic-fn/index.js
var an = d((of, ct) => {
  "use strict";
  var sn = /* @__PURE__ */ o((e, t) => {
    for (let r of Reflect.ownKeys(t))
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    return e;
  }, "mimicFn");
  ct.exports = sn;
  ct.exports.default = sn;
});

// ../node_modules/onetime/index.js
var un = d((af, de) => {
  "use strict";
  var ys = an(), fe = /* @__PURE__ */ new WeakMap(), cn = /* @__PURE__ */ o((e, t = {}) => {
    if (typeof e != "function")
      throw new TypeError("Expected a function");
    let r, n = 0, i = e.displayName || e.name || "<anonymous>", s = /* @__PURE__ */ o(function(...a) {
      if (fe.set(s, ++n), n === 1)
        r = e.apply(this, a), e = null;
      else if (t.throw === !0)
        throw new Error(`Function \`${i}\` can only be called once`);
      return r;
    }, "onetime");
    return ys(s, e), fe.set(s, n), s;
  }, "onetime");
  de.exports = cn;
  de.exports.default = cn;
  de.exports.callCount = (e) => {
    if (!fe.has(e))
      throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);
    return fe.get(e);
  };
});

// ../node_modules/execa/node_modules/human-signals/build/src/core.js
var ln = d((pe) => {
  "use strict";
  Object.defineProperty(pe, "__esModule", { value: !0 });
  pe.SIGNALS = void 0;
  var gs = [
    {
      name: "SIGHUP",
      number: 1,
      action: "terminate",
      description: "Terminal closed",
      standard: "posix"
    },
    {
      name: "SIGINT",
      number: 2,
      action: "terminate",
      description: "User interruption with CTRL-C",
      standard: "ansi"
    },
    {
      name: "SIGQUIT",
      number: 3,
      action: "core",
      description: "User interruption with CTRL-\\",
      standard: "posix"
    },
    {
      name: "SIGILL",
      number: 4,
      action: "core",
      description: "Invalid machine instruction",
      standard: "ansi"
    },
    {
      name: "SIGTRAP",
      number: 5,
      action: "core",
      description: "Debugger breakpoint",
      standard: "posix"
    },
    {
      name: "SIGABRT",
      number: 6,
      action: "core",
      description: "Aborted",
      standard: "ansi"
    },
    {
      name: "SIGIOT",
      number: 6,
      action: "core",
      description: "Aborted",
      standard: "bsd"
    },
    {
      name: "SIGBUS",
      number: 7,
      action: "core",
      description: "Bus error due to misaligned, non-existing address or paging error",
      standard: "bsd"
    },
    {
      name: "SIGEMT",
      number: 7,
      action: "terminate",
      description: "Command should be emulated but is not implemented",
      standard: "other"
    },
    {
      name: "SIGFPE",
      number: 8,
      action: "core",
      description: "Floating point arithmetic error",
      standard: "ansi"
    },
    {
      name: "SIGKILL",
      number: 9,
      action: "terminate",
      description: "Forced termination",
      standard: "posix",
      forced: !0
    },
    {
      name: "SIGUSR1",
      number: 10,
      action: "terminate",
      description: "Application-specific signal",
      standard: "posix"
    },
    {
      name: "SIGSEGV",
      number: 11,
      action: "core",
      description: "Segmentation fault",
      standard: "ansi"
    },
    {
      name: "SIGUSR2",
      number: 12,
      action: "terminate",
      description: "Application-specific signal",
      standard: "posix"
    },
    {
      name: "SIGPIPE",
      number: 13,
      action: "terminate",
      description: "Broken pipe or socket",
      standard: "posix"
    },
    {
      name: "SIGALRM",
      number: 14,
      action: "terminate",
      description: "Timeout or timer",
      standard: "posix"
    },
    {
      name: "SIGTERM",
      number: 15,
      action: "terminate",
      description: "Termination",
      standard: "ansi"
    },
    {
      name: "SIGSTKFLT",
      number: 16,
      action: "terminate",
      description: "Stack is empty or overflowed",
      standard: "other"
    },
    {
      name: "SIGCHLD",
      number: 17,
      action: "ignore",
      description: "Child process terminated, paused or unpaused",
      standard: "posix"
    },
    {
      name: "SIGCLD",
      number: 17,
      action: "ignore",
      description: "Child process terminated, paused or unpaused",
      standard: "other"
    },
    {
      name: "SIGCONT",
      number: 18,
      action: "unpause",
      description: "Unpaused",
      standard: "posix",
      forced: !0
    },
    {
      name: "SIGSTOP",
      number: 19,
      action: "pause",
      description: "Paused",
      standard: "posix",
      forced: !0
    },
    {
      name: "SIGTSTP",
      number: 20,
      action: "pause",
      description: 'Paused using CTRL-Z or "suspend"',
      standard: "posix"
    },
    {
      name: "SIGTTIN",
      number: 21,
      action: "pause",
      description: "Background process cannot read terminal input",
      standard: "posix"
    },
    {
      name: "SIGBREAK",
      number: 21,
      action: "terminate",
      description: "User interruption with CTRL-BREAK",
      standard: "other"
    },
    {
      name: "SIGTTOU",
      number: 22,
      action: "pause",
      description: "Background process cannot write to terminal output",
      standard: "posix"
    },
    {
      name: "SIGURG",
      number: 23,
      action: "ignore",
      description: "Socket received out-of-band data",
      standard: "bsd"
    },
    {
      name: "SIGXCPU",
      number: 24,
      action: "core",
      description: "Process timed out",
      standard: "bsd"
    },
    {
      name: "SIGXFSZ",
      number: 25,
      action: "core",
      description: "File too big",
      standard: "bsd"
    },
    {
      name: "SIGVTALRM",
      number: 26,
      action: "terminate",
      description: "Timeout or timer",
      standard: "bsd"
    },
    {
      name: "SIGPROF",
      number: 27,
      action: "terminate",
      description: "Timeout or timer",
      standard: "bsd"
    },
    {
      name: "SIGWINCH",
      number: 28,
      action: "ignore",
      description: "Terminal window size changed",
      standard: "bsd"
    },
    {
      name: "SIGIO",
      number: 29,
      action: "terminate",
      description: "I/O is available",
      standard: "other"
    },
    {
      name: "SIGPOLL",
      number: 29,
      action: "terminate",
      description: "Watched event",
      standard: "other"
    },
    {
      name: "SIGINFO",
      number: 29,
      action: "ignore",
      description: "Request for process information",
      standard: "other"
    },
    {
      name: "SIGPWR",
      number: 30,
      action: "terminate",
      description: "Device running out of power",
      standard: "systemv"
    },
    {
      name: "SIGSYS",
      number: 31,
      action: "core",
      description: "Invalid system call",
      standard: "other"
    },
    {
      name: "SIGUNUSED",
      number: 31,
      action: "terminate",
      description: "Invalid system call",
      standard: "other"
    }
  ];
  pe.SIGNALS = gs;
});

// ../node_modules/execa/node_modules/human-signals/build/src/realtime.js
var ut = d((L) => {
  "use strict";
  Object.defineProperty(L, "__esModule", { value: !0 });
  L.SIGRTMAX = L.getRealtimeSignals = void 0;
  var bs = /* @__PURE__ */ o(function() {
    let e = dn - fn + 1;
    return Array.from({ length: e }, xs);
  }, "getRealtimeSignals");
  L.getRealtimeSignals = bs;
  var xs = /* @__PURE__ */ o(function(e, t) {
    return {
      name: `SIGRT${t + 1}`,
      number: fn + t,
      action: "terminate",
      description: "Application-specific signal (realtime)",
      standard: "posix"
    };
  }, "getRealtimeSignal"), fn = 34, dn = 64;
  L.SIGRTMAX = dn;
});

// ../node_modules/execa/node_modules/human-signals/build/src/signals.js
var pn = d((me) => {
  "use strict";
  Object.defineProperty(me, "__esModule", { value: !0 });
  me.getSignals = void 0;
  var Ss = y("os"), ws = ln(), vs = ut(), Ps = /* @__PURE__ */ o(function() {
    let e = (0, vs.getRealtimeSignals)();
    return [...ws.SIGNALS, ...e].map(Es);
  }, "getSignals");
  me.getSignals = Ps;
  var Es = /* @__PURE__ */ o(function({
    name: e,
    number: t,
    description: r,
    action: n,
    forced: i = !1,
    standard: s
  }) {
    let {
      signals: { [e]: a }
    } = Ss.constants, c = a !== void 0;
    return { name: e, number: c ? a : t, description: r, supported: c, action: n, forced: i, standard: s };
  }, "normalizeSignal");
});

// ../node_modules/execa/node_modules/human-signals/build/src/main.js
var hn = d((F) => {
  "use strict";
  Object.defineProperty(F, "__esModule", { value: !0 });
  F.signalsByNumber = F.signalsByName = void 0;
  var Ts = y("os"), mn = pn(), Is = ut(), ks = /* @__PURE__ */ o(function() {
    return (0, mn.getSignals)().reduce(Cs, {});
  }, "getSignalsByName"), Cs = /* @__PURE__ */ o(function(e, { name: t, number: r, description: n, supported: i, action: s, forced: a, standard: c }) {
    return {
      ...e,
      [t]: { name: t, number: r, description: n, supported: i, action: s, forced: a, standard: c }
    };
  }, "getSignalByName"), Os = ks();
  F.signalsByName = Os;
  var As = /* @__PURE__ */ o(function() {
    let e = (0, mn.getSignals)(), t = Is.SIGRTMAX + 1, r = Array.from({ length: t }, (n, i) => Rs(i, e));
    return Object.assign({}, ...r);
  }, "getSignalsByNumber"), Rs = /* @__PURE__ */ o(function(e, t) {
    let r = _s(e, t);
    if (r === void 0)
      return {};
    let { name: n, description: i, supported: s, action: a, forced: c, standard: u } = r;
    return {
      [e]: {
        name: n,
        number: e,
        description: i,
        supported: s,
        action: a,
        forced: c,
        standard: u
      }
    };
  }, "getSignalByNumber"), _s = /* @__PURE__ */ o(function(e, t) {
    let r = t.find(({ name: n }) => Ts.constants.signals[n] === e);
    return r !== void 0 ? r : t.find((n) => n.number === e);
  }, "findSignalByNumber"), Gs = As();
  F.signalsByNumber = Gs;
});

// ../node_modules/execa/lib/error.js
var gn = d((yf, yn) => {
  "use strict";
  var { signalsByName: js } = hn(), Ns = /* @__PURE__ */ o(({ timedOut: e, timeout: t, errorCode: r, signal: n, signalDescription: i, exitCode: s,
  isCanceled: a }) => e ? `timed out after ${t} milliseconds` : a ? "was canceled" : r !== void 0 ? `failed with ${r}` : n !== void 0 ? `was\
 killed with ${n} (${i})` : s !== void 0 ? `failed with exit code ${s}` : "failed", "getErrorPrefix"), Bs = /* @__PURE__ */ o(({
    stdout: e,
    stderr: t,
    all: r,
    error: n,
    signal: i,
    exitCode: s,
    command: a,
    escapedCommand: c,
    timedOut: u,
    isCanceled: l,
    killed: f,
    parsed: { options: { timeout: w } }
  }) => {
    s = s === null ? void 0 : s, i = i === null ? void 0 : i;
    let g = i === void 0 ? void 0 : js[i].description, p = n && n.code, h = `Command ${Ns({ timedOut: u, timeout: w, errorCode: p, signal: i,
    signalDescription: g, exitCode: s, isCanceled: l })}: ${a}`, x = Object.prototype.toString.call(n) === "[object Error]", E = x ? `${h}
${n.message}` : h, T = [E, t, e].filter(Boolean).join(`
`);
    return x ? (n.originalMessage = n.message, n.message = T) : n = new Error(T), n.shortMessage = E, n.command = a, n.escapedCommand = c, n.
    exitCode = s, n.signal = i, n.signalDescription = g, n.stdout = e, n.stderr = t, r !== void 0 && (n.all = r), "bufferedData" in n && delete n.
    bufferedData, n.failed = !0, n.timedOut = !!u, n.isCanceled = l, n.killed = f && !u, n;
  }, "makeError");
  yn.exports = Bs;
});

// ../node_modules/execa/lib/stdio.js
var xn = d((bf, lt) => {
  "use strict";
  var he = ["stdin", "stdout", "stderr"], Ds = /* @__PURE__ */ o((e) => he.some((t) => e[t] !== void 0), "hasAlias"), bn = /* @__PURE__ */ o(
  (e) => {
    if (!e)
      return;
    let { stdio: t } = e;
    if (t === void 0)
      return he.map((n) => e[n]);
    if (Ds(e))
      throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${he.map((n) => `\`${n}\``).join(", ")}`);
    if (typeof t == "string")
      return t;
    if (!Array.isArray(t))
      throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);
    let r = Math.max(t.length, he.length);
    return Array.from({ length: r }, (n, i) => t[i]);
  }, "normalizeStdio");
  lt.exports = bn;
  lt.exports.node = (e) => {
    let t = bn(e);
    return t === "ipc" ? "ipc" : t === void 0 || typeof t == "string" ? [t, t, t, "ipc"] : t.includes("ipc") ? t : [...t, "ipc"];
  };
});

// ../node_modules/signal-exit/signals.js
var Sn = d((Sf, ye) => {
  ye.exports = [
    "SIGABRT",
    "SIGALRM",
    "SIGHUP",
    "SIGINT",
    "SIGTERM"
  ];
  process.platform !== "win32" && ye.exports.push(
    "SIGVTALRM",
    "SIGXCPU",
    "SIGXFSZ",
    "SIGUSR2",
    "SIGTRAP",
    "SIGSYS",
    "SIGQUIT",
    "SIGIOT"
    // should detect profiler and enable/disable accordingly.
    // see #21
    // 'SIGPROF'
  );
  process.platform === "linux" && ye.exports.push(
    "SIGIO",
    "SIGPOLL",
    "SIGPWR",
    "SIGSTKFLT",
    "SIGUNUSED"
  );
});

// ../node_modules/signal-exit/index.js
var Tn = d((wf, q) => {
  var S = global.process, R = /* @__PURE__ */ o(function(e) {
    return e && typeof e == "object" && typeof e.removeListener == "function" && typeof e.emit == "function" && typeof e.reallyExit == "func\
tion" && typeof e.listeners == "function" && typeof e.kill == "function" && typeof e.pid == "number" && typeof e.on == "function";
  }, "processOk");
  R(S) ? (wn = y("assert"), U = Sn(), vn = /^win/i.test(S.platform), Y = y("events"), typeof Y != "function" && (Y = Y.EventEmitter), S.__signal_exit_emitter__ ?
  P = S.__signal_exit_emitter__ : (P = S.__signal_exit_emitter__ = new Y(), P.count = 0, P.emitted = {}), P.infinite || (P.setMaxListeners(1 / 0),
  P.infinite = !0), q.exports = function(e, t) {
    if (!R(global.process))
      return function() {
      };
    wn.equal(typeof e, "function", "a callback must be provided for exit handler"), $ === !1 && ft();
    var r = "exit";
    t && t.alwaysLast && (r = "afterexit");
    var n = /* @__PURE__ */ o(function() {
      P.removeListener(r, e), P.listeners("exit").length === 0 && P.listeners("afterexit").length === 0 && ge();
    }, "remove");
    return P.on(r, e), n;
  }, ge = /* @__PURE__ */ o(function() {
    !$ || !R(global.process) || ($ = !1, U.forEach(function(t) {
      try {
        S.removeListener(t, be[t]);
      } catch {
      }
    }), S.emit = xe, S.reallyExit = dt, P.count -= 1);
  }, "unload"), q.exports.unload = ge, _ = /* @__PURE__ */ o(function(t, r, n) {
    P.emitted[t] || (P.emitted[t] = !0, P.emit(t, r, n));
  }, "emit"), be = {}, U.forEach(function(e) {
    be[e] = /* @__PURE__ */ o(function() {
      if (R(global.process)) {
        var r = S.listeners(e);
        r.length === P.count && (ge(), _("exit", null, e), _("afterexit", null, e), vn && e === "SIGHUP" && (e = "SIGINT"), S.kill(S.pid, e));
      }
    }, "listener");
  }), q.exports.signals = function() {
    return U;
  }, $ = !1, ft = /* @__PURE__ */ o(function() {
    $ || !R(global.process) || ($ = !0, P.count += 1, U = U.filter(function(t) {
      try {
        return S.on(t, be[t]), !0;
      } catch {
        return !1;
      }
    }), S.emit = En, S.reallyExit = Pn);
  }, "load"), q.exports.load = ft, dt = S.reallyExit, Pn = /* @__PURE__ */ o(function(t) {
    R(global.process) && (S.exitCode = t || /* istanbul ignore next */
    0, _("exit", S.exitCode, null), _("afterexit", S.exitCode, null), dt.call(S, S.exitCode));
  }, "processReallyExit"), xe = S.emit, En = /* @__PURE__ */ o(function(t, r) {
    if (t === "exit" && R(global.process)) {
      r !== void 0 && (S.exitCode = r);
      var n = xe.apply(this, arguments);
      return _("exit", S.exitCode, null), _("afterexit", S.exitCode, null), n;
    } else
      return xe.apply(this, arguments);
  }, "processEmit")) : q.exports = function() {
    return function() {
    };
  };
  var wn, U, vn, Y, P, ge, _, be, $, ft, dt, Pn, xe, En;
});

// ../node_modules/execa/lib/kill.js
var kn = d((Pf, In) => {
  "use strict";
  var Ms = y("os"), Ls = Tn(), Fs = 1e3 * 5, Us = /* @__PURE__ */ o((e, t = "SIGTERM", r = {}) => {
    let n = e(t);
    return $s(e, t, r, n), n;
  }, "spawnedKill"), $s = /* @__PURE__ */ o((e, t, r, n) => {
    if (!qs(t, r, n))
      return;
    let i = Hs(r), s = setTimeout(() => {
      e("SIGKILL");
    }, i);
    s.unref && s.unref();
  }, "setKillTimeout"), qs = /* @__PURE__ */ o((e, { forceKillAfterTimeout: t }, r) => Ws(e) && t !== !1 && r, "shouldForceKill"), Ws = /* @__PURE__ */ o(
  (e) => e === Ms.constants.signals.SIGTERM || typeof e == "string" && e.toUpperCase() === "SIGTERM", "isSigterm"), Hs = /* @__PURE__ */ o(({
  forceKillAfterTimeout: e = !0 }) => {
    if (e === !0)
      return Fs;
    if (!Number.isFinite(e) || e < 0)
      throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);
    return e;
  }, "getForceKillAfterTimeout"), Vs = /* @__PURE__ */ o((e, t) => {
    e.kill() && (t.isCanceled = !0);
  }, "spawnedCancel"), zs = /* @__PURE__ */ o((e, t, r) => {
    e.kill(t), r(Object.assign(new Error("Timed out"), { timedOut: !0, signal: t }));
  }, "timeoutKill"), Ks = /* @__PURE__ */ o((e, { timeout: t, killSignal: r = "SIGTERM" }, n) => {
    if (t === 0 || t === void 0)
      return n;
    let i, s = new Promise((c, u) => {
      i = setTimeout(() => {
        zs(e, r, u);
      }, t);
    }), a = n.finally(() => {
      clearTimeout(i);
    });
    return Promise.race([s, a]);
  }, "setupTimeout"), Js = /* @__PURE__ */ o(({ timeout: e }) => {
    if (e !== void 0 && (!Number.isFinite(e) || e < 0))
      throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);
  }, "validateTimeout"), Ys = /* @__PURE__ */ o(async (e, { cleanup: t, detached: r }, n) => {
    if (!t || r)
      return n;
    let i = Ls(() => {
      e.kill();
    });
    return n.finally(() => {
      i();
    });
  }, "setExitHandler");
  In.exports = {
    spawnedKill: Us,
    spawnedCancel: Vs,
    setupTimeout: Ks,
    validateTimeout: Js,
    setExitHandler: Ys
  };
});

// ../node_modules/is-stream/index.js
var On = d((Tf, Cn) => {
  "use strict";
  var k = /* @__PURE__ */ o((e) => e !== null && typeof e == "object" && typeof e.pipe == "function", "isStream");
  k.writable = (e) => k(e) && e.writable !== !1 && typeof e._write == "function" && typeof e._writableState == "object";
  k.readable = (e) => k(e) && e.readable !== !1 && typeof e._read == "function" && typeof e._readableState == "object";
  k.duplex = (e) => k.writable(e) && k.readable(e);
  k.transform = (e) => k.duplex(e) && typeof e._transform == "function";
  Cn.exports = k;
});

// ../node_modules/get-stream/buffer-stream.js
var Rn = d((kf, An) => {
  "use strict";
  var { PassThrough: Xs } = y("stream");
  An.exports = (e) => {
    e = { ...e };
    let { array: t } = e, { encoding: r } = e, n = r === "buffer", i = !1;
    t ? i = !(r || n) : r = r || "utf8", n && (r = null);
    let s = new Xs({ objectMode: i });
    r && s.setEncoding(r);
    let a = 0, c = [];
    return s.on("data", (u) => {
      c.push(u), i ? a = c.length : a += u.length;
    }), s.getBufferedValue = () => t ? c : n ? Buffer.concat(c, a) : c.join(""), s.getBufferedLength = () => a, s;
  };
});

// ../node_modules/get-stream/index.js
var _n = d((Cf, X) => {
  "use strict";
  var { constants: Zs } = y("buffer"), Qs = y("stream"), { promisify: ea } = y("util"), ta = Rn(), ra = ea(Qs.pipeline), Se = class extends Error {
    static {
      o(this, "MaxBufferError");
    }
    constructor() {
      super("maxBuffer exceeded"), this.name = "MaxBufferError";
    }
  };
  async function pt(e, t) {
    if (!e)
      throw new Error("Expected a stream");
    t = {
      maxBuffer: 1 / 0,
      ...t
    };
    let { maxBuffer: r } = t, n = ta(t);
    return await new Promise((i, s) => {
      let a = /* @__PURE__ */ o((c) => {
        c && n.getBufferedLength() <= Zs.MAX_LENGTH && (c.bufferedData = n.getBufferedValue()), s(c);
      }, "rejectPromise");
      (async () => {
        try {
          await ra(e, n), i();
        } catch (c) {
          a(c);
        }
      })(), n.on("data", () => {
        n.getBufferedLength() > r && a(new Se());
      });
    }), n.getBufferedValue();
  }
  o(pt, "getStream");
  X.exports = pt;
  X.exports.buffer = (e, t) => pt(e, { ...t, encoding: "buffer" });
  X.exports.array = (e, t) => pt(e, { ...t, array: !0 });
  X.exports.MaxBufferError = Se;
});

// ../node_modules/merge-stream/index.js
var mt = d((Af, Gn) => {
  "use strict";
  var { PassThrough: na } = y("stream");
  Gn.exports = function() {
    var e = [], t = new na({ objectMode: !0 });
    return t.setMaxListeners(0), t.add = r, t.isEmpty = n, t.on("unpipe", i), Array.prototype.slice.call(arguments).forEach(r), t;
    function r(s) {
      return Array.isArray(s) ? (s.forEach(r), this) : (e.push(s), s.once("end", i.bind(null, s)), s.once("error", t.emit.bind(t, "error")),
      s.pipe(t, { end: !1 }), this);
    }
    o(r, "add");
    function n() {
      return e.length == 0;
    }
    o(n, "isEmpty");
    function i(s) {
      e = e.filter(function(a) {
        return a !== s;
      }), !e.length && t.readable && t.end();
    }
    o(i, "remove");
  };
});

// ../node_modules/execa/lib/stream.js
var Dn = d((_f, Bn) => {
  "use strict";
  var Nn = On(), jn = _n(), oa = mt(), ia = /* @__PURE__ */ o((e, t) => {
    t === void 0 || e.stdin === void 0 || (Nn(t) ? t.pipe(e.stdin) : e.stdin.end(t));
  }, "handleInput"), sa = /* @__PURE__ */ o((e, { all: t }) => {
    if (!t || !e.stdout && !e.stderr)
      return;
    let r = oa();
    return e.stdout && r.add(e.stdout), e.stderr && r.add(e.stderr), r;
  }, "makeAllStream"), ht = /* @__PURE__ */ o(async (e, t) => {
    if (e) {
      e.destroy();
      try {
        return await t;
      } catch (r) {
        return r.bufferedData;
      }
    }
  }, "getBufferedData"), yt = /* @__PURE__ */ o((e, { encoding: t, buffer: r, maxBuffer: n }) => {
    if (!(!e || !r))
      return t ? jn(e, { encoding: t, maxBuffer: n }) : jn.buffer(e, { maxBuffer: n });
  }, "getStreamPromise"), aa = /* @__PURE__ */ o(async ({ stdout: e, stderr: t, all: r }, { encoding: n, buffer: i, maxBuffer: s }, a) => {
    let c = yt(e, { encoding: n, buffer: i, maxBuffer: s }), u = yt(t, { encoding: n, buffer: i, maxBuffer: s }), l = yt(r, { encoding: n, buffer: i,
    maxBuffer: s * 2 });
    try {
      return await Promise.all([a, c, u, l]);
    } catch (f) {
      return Promise.all([
        { error: f, signal: f.signal, timedOut: f.timedOut },
        ht(e, c),
        ht(t, u),
        ht(r, l)
      ]);
    }
  }, "getSpawnedResult"), ca = /* @__PURE__ */ o(({ input: e }) => {
    if (Nn(e))
      throw new TypeError("The `input` option cannot be a stream in sync mode");
  }, "validateInputSync");
  Bn.exports = {
    handleInput: ia,
    makeAllStream: sa,
    getSpawnedResult: aa,
    validateInputSync: ca
  };
});

// ../node_modules/execa/lib/promise.js
var Ln = d((jf, Mn) => {
  "use strict";
  var ua = (async () => {
  })().constructor.prototype, la = ["then", "catch", "finally"].map((e) => [
    e,
    Reflect.getOwnPropertyDescriptor(ua, e)
  ]), fa = /* @__PURE__ */ o((e, t) => {
    for (let [r, n] of la) {
      let i = typeof t == "function" ? (...s) => Reflect.apply(n.value, t(), s) : n.value.bind(t);
      Reflect.defineProperty(e, r, { ...n, value: i });
    }
    return e;
  }, "mergePromise"), da = /* @__PURE__ */ o((e) => new Promise((t, r) => {
    e.on("exit", (n, i) => {
      t({ exitCode: n, signal: i });
    }), e.on("error", (n) => {
      r(n);
    }), e.stdin && e.stdin.on("error", (n) => {
      r(n);
    });
  }), "getSpawnedPromise");
  Mn.exports = {
    mergePromise: fa,
    getSpawnedPromise: da
  };
});

// ../node_modules/execa/lib/command.js
var $n = d((Bf, Un) => {
  "use strict";
  var Fn = /* @__PURE__ */ o((e, t = []) => Array.isArray(t) ? [e, ...t] : [e], "normalizeArgs"), pa = /^[\w.-]+$/, ma = /"/g, ha = /* @__PURE__ */ o(
  (e) => typeof e != "string" || pa.test(e) ? e : `"${e.replace(ma, '\\"')}"`, "escapeArg"), ya = /* @__PURE__ */ o((e, t) => Fn(e, t).join(
  " "), "joinCommand"), ga = /* @__PURE__ */ o((e, t) => Fn(e, t).map((r) => ha(r)).join(" "), "getEscapedCommand"), ba = / +/g, xa = /* @__PURE__ */ o(
  (e) => {
    let t = [];
    for (let r of e.trim().split(ba)) {
      let n = t[t.length - 1];
      n && n.endsWith("\\") ? t[t.length - 1] = `${n.slice(0, -1)} ${r}` : t.push(r);
    }
    return t;
  }, "parseCommand");
  Un.exports = {
    joinCommand: ya,
    getEscapedCommand: ga,
    parseCommand: xa
  };
});

// ../node_modules/execa/index.js
var Jn = d((Mf, W) => {
  "use strict";
  var Sa = y("path"), gt = y("child_process"), wa = at(), va = tn(), Pa = on(), Ea = un(), we = gn(), Wn = xn(), { spawnedKill: Ta, spawnedCancel: Ia,
  setupTimeout: ka, validateTimeout: Ca, setExitHandler: Oa } = kn(), { handleInput: Aa, getSpawnedResult: Ra, makeAllStream: _a, validateInputSync: Ga } = Dn(),
  { mergePromise: qn, getSpawnedPromise: ja } = Ln(), { joinCommand: Hn, parseCommand: Vn, getEscapedCommand: zn } = $n(), Na = 1e3 * 1e3 * 100,
  Ba = /* @__PURE__ */ o(({ env: e, extendEnv: t, preferLocal: r, localDir: n, execPath: i }) => {
    let s = t ? { ...process.env, ...e } : e;
    return r ? Pa.env({ env: s, cwd: n, execPath: i }) : s;
  }, "getEnv"), Kn = /* @__PURE__ */ o((e, t, r = {}) => {
    let n = wa._parse(e, t, r);
    return e = n.command, t = n.args, r = n.options, r = {
      maxBuffer: Na,
      buffer: !0,
      stripFinalNewline: !0,
      extendEnv: !0,
      preferLocal: !1,
      localDir: r.cwd || process.cwd(),
      execPath: process.execPath,
      encoding: "utf8",
      reject: !0,
      cleanup: !0,
      all: !1,
      windowsHide: !0,
      ...r
    }, r.env = Ba(r), r.stdio = Wn(r), process.platform === "win32" && Sa.basename(e, ".exe") === "cmd" && t.unshift("/q"), { file: e, args: t,
    options: r, parsed: n };
  }, "handleArguments"), Z = /* @__PURE__ */ o((e, t, r) => typeof t != "string" && !Buffer.isBuffer(t) ? r === void 0 ? void 0 : "" : e.stripFinalNewline ?
  va(t) : t, "handleOutput"), ve = /* @__PURE__ */ o((e, t, r) => {
    let n = Kn(e, t, r), i = Hn(e, t), s = zn(e, t);
    Ca(n.options);
    let a;
    try {
      a = gt.spawn(n.file, n.args, n.options);
    } catch (p) {
      let b = new gt.ChildProcess(), h = Promise.reject(we({
        error: p,
        stdout: "",
        stderr: "",
        all: "",
        command: i,
        escapedCommand: s,
        parsed: n,
        timedOut: !1,
        isCanceled: !1,
        killed: !1
      }));
      return qn(b, h);
    }
    let c = ja(a), u = ka(a, n.options, c), l = Oa(a, n.options, u), f = { isCanceled: !1 };
    a.kill = Ta.bind(null, a.kill.bind(a)), a.cancel = Ia.bind(null, a, f);
    let g = Ea(/* @__PURE__ */ o(async () => {
      let [{ error: p, exitCode: b, signal: h, timedOut: x }, E, T, C] = await Ra(a, n.options, l), m = Z(n.options, E), v = Z(n.options, T),
      I = Z(n.options, C);
      if (p || b !== 0 || h !== null) {
        let V = we({
          error: p,
          exitCode: b,
          signal: h,
          stdout: m,
          stderr: v,
          all: I,
          command: i,
          escapedCommand: s,
          parsed: n,
          timedOut: x,
          isCanceled: f.isCanceled,
          killed: a.killed
        });
        if (!n.options.reject)
          return V;
        throw V;
      }
      return {
        command: i,
        escapedCommand: s,
        exitCode: 0,
        stdout: m,
        stderr: v,
        all: I,
        failed: !1,
        timedOut: !1,
        isCanceled: !1,
        killed: !1
      };
    }, "handlePromise"));
    return Aa(a, n.options.input), a.all = _a(a, n.options), qn(a, g);
  }, "execa");
  W.exports = ve;
  W.exports.sync = (e, t, r) => {
    let n = Kn(e, t, r), i = Hn(e, t), s = zn(e, t);
    Ga(n.options);
    let a;
    try {
      a = gt.spawnSync(n.file, n.args, n.options);
    } catch (l) {
      throw we({
        error: l,
        stdout: "",
        stderr: "",
        all: "",
        command: i,
        escapedCommand: s,
        parsed: n,
        timedOut: !1,
        isCanceled: !1,
        killed: !1
      });
    }
    let c = Z(n.options, a.stdout, a.error), u = Z(n.options, a.stderr, a.error);
    if (a.error || a.status !== 0 || a.signal !== null) {
      let l = we({
        stdout: c,
        stderr: u,
        error: a.error,
        signal: a.signal,
        exitCode: a.status,
        command: i,
        escapedCommand: s,
        parsed: n,
        timedOut: a.error && a.error.code === "ETIMEDOUT",
        isCanceled: !1,
        killed: a.signal !== null
      });
      if (!n.options.reject)
        return l;
      throw l;
    }
    return {
      command: i,
      escapedCommand: s,
      exitCode: 0,
      stdout: c,
      stderr: u,
      failed: !1,
      timedOut: !1,
      isCanceled: !1,
      killed: !1
    };
  };
  W.exports.command = (e, t) => {
    let [r, ...n] = Vn(e);
    return ve(r, n, t);
  };
  W.exports.commandSync = (e, t) => {
    let [r, ...n] = Vn(e);
    return ve.sync(r, n, t);
  };
  W.exports.node = (e, t, r = {}) => {
    t && !Array.isArray(t) && typeof t == "object" && (r = t, t = []);
    let n = Wn.node(r), i = process.execArgv.filter((c) => !c.startsWith("--inspect")), {
      nodePath: s = process.execPath,
      nodeOptions: a = i
    } = r;
    return ve(
      s,
      [
        ...a,
        e,
        ...Array.isArray(t) ? t : []
      ],
      {
        ...r,
        stdin: void 0,
        stdout: void 0,
        stderr: void 0,
        stdio: n,
        shell: !1
      }
    );
  };
});

// ../node_modules/detect-package-manager/dist/index.js
var Qn = d((Zn) => {
  var Da = Object.create, Te = Object.defineProperty, Ma = Object.getOwnPropertyDescriptor, La = Object.getOwnPropertyNames, Fa = Object.getPrototypeOf,
  Ua = Object.prototype.hasOwnProperty, Yn = /* @__PURE__ */ o((e) => Te(e, "__esModule", { value: !0 }), "__markAsModule"), $a = /* @__PURE__ */ o(
  (e, t) => {
    Yn(e);
    for (var r in t)
      Te(e, r, { get: t[r], enumerable: !0 });
  }, "__export"), qa = /* @__PURE__ */ o((e, t, r) => {
    if (t && typeof t == "object" || typeof t == "function")
      for (let n of La(t))
        !Ua.call(e, n) && n !== "default" && Te(e, n, { get: /* @__PURE__ */ o(() => t[n], "get"), enumerable: !(r = Ma(t, n)) || r.enumerable });
    return e;
  }, "__reExport"), xt = /* @__PURE__ */ o((e) => qa(Yn(Te(e != null ? Da(Fa(e)) : {}, "default", e && e.__esModule && "default" in e ? { get: /* @__PURE__ */ o(
  () => e.default, "get"), enumerable: !0 } : { value: e, enumerable: !0 })), e), "__toModule");
  $a(Zn, {
    clearCache: /* @__PURE__ */ o(() => Ka, "clearCache"),
    detect: /* @__PURE__ */ o(() => Va, "detect"),
    getNpmVersion: /* @__PURE__ */ o(() => za, "getNpmVersion")
  });
  var Wa = xt(y("fs")), Pe = xt(y("path")), Xn = xt(Jn());
  async function Ee(e) {
    try {
      return await Wa.promises.access(e), !0;
    } catch {
      return !1;
    }
  }
  o(Ee, "pathExists");
  var G = /* @__PURE__ */ new Map();
  function bt(e) {
    let t = `has_global_${e}`;
    return G.has(t) ? Promise.resolve(G.get(t)) : (0, Xn.default)(e, ["--version"]).then((r) => /^\d+.\d+.\d+$/.test(r.stdout)).then((r) => (G.
    set(t, r), r)).catch(() => !1);
  }
  o(bt, "hasGlobalInstallation");
  function Ha(e = ".") {
    let t = `lockfile_${e}`;
    return G.has(t) ? Promise.resolve(G.get(t)) : Promise.all([
      Ee((0, Pe.resolve)(e, "yarn.lock")),
      Ee((0, Pe.resolve)(e, "package-lock.json")),
      Ee((0, Pe.resolve)(e, "pnpm-lock.yaml")),
      Ee((0, Pe.resolve)(e, "bun.lockb"))
    ]).then(([r, n, i, s]) => {
      let a = null;
      return r ? a = "yarn" : i ? a = "pnpm" : s ? a = "bun" : n && (a = "npm"), G.set(t, a), a;
    });
  }
  o(Ha, "getTypeofLockFile");
  var Va = /* @__PURE__ */ o(async ({
    cwd: e,
    includeGlobalBun: t
  } = {}) => {
    let r = await Ha(e);
    if (r)
      return r;
    let [n, i, s] = await Promise.all([
      bt("yarn"),
      bt("pnpm"),
      t && bt("bun")
    ]);
    return n ? "yarn" : i ? "pnpm" : s ? "bun" : "npm";
  }, "detect");
  function za(e) {
    return (0, Xn.default)(e || "npm", ["--version"]).then((t) => t.stdout);
  }
  o(za, "getNpmVersion");
  function Ka() {
    return G.clear();
  }
  o(Ka, "clearCache");
});

// ../node_modules/walk-up-path/dist/cjs/index.js
var to = d((Ie) => {
  "use strict";
  Object.defineProperty(Ie, "__esModule", { value: !0 });
  Ie.walkUp = void 0;
  var eo = y("path"), Ja = /* @__PURE__ */ o(function* (e) {
    for (e = (0, eo.resolve)(e); e; ) {
      yield e;
      let t = (0, eo.dirname)(e);
      if (t === e)
        break;
      e = t;
    }
  }, "walkUp");
  Ie.walkUp = Ja;
});

// ../node_modules/common-path-prefix/index.js
var si = d((Im, ii) => {
  "use strict";
  var { sep: ju } = y("path"), Nu = /* @__PURE__ */ o((e) => {
    for (let t of e) {
      let r = /(\/|\\)/.exec(t);
      if (r !== null) return r[0];
    }
    return ju;
  }, "determineSeparator");
  ii.exports = /* @__PURE__ */ o(function(t, r = Nu(t)) {
    let [n = "", ...i] = t;
    if (n === "" || i.length === 0) return "";
    let s = n.split(r), a = s.length;
    for (let u of i) {
      let l = u.split(r);
      for (let f = 0; f < a; f++)
        l[f] !== s[f] && (a = f);
      if (a === 0) return "";
    }
    let c = s.slice(0, a).join(r);
    return c.endsWith(r) ? c : c + r;
  }, "commonPathPrefix");
});

// ../node_modules/fetch-retry/index.js
var Pi = d((Ey, vi) => {
  "use strict";
  vi.exports = function(e, t) {
    if (t = t || {}, typeof e != "function")
      throw new O("fetch must be a function");
    if (typeof t != "object")
      throw new O("defaults must be an object");
    if (t.retries !== void 0 && !Ve(t.retries))
      throw new O("retries must be a positive integer");
    if (t.retryDelay !== void 0 && !Ve(t.retryDelay) && typeof t.retryDelay != "function")
      throw new O("retryDelay must be a positive integer or a function returning a positive integer");
    if (t.retryOn !== void 0 && !Array.isArray(t.retryOn) && typeof t.retryOn != "function")
      throw new O("retryOn property expects an array or function");
    var r = {
      retries: 3,
      retryDelay: 1e3,
      retryOn: []
    };
    return t = Object.assign(r, t), /* @__PURE__ */ o(function(i, s) {
      var a = t.retries, c = t.retryDelay, u = t.retryOn;
      if (s && s.retries !== void 0)
        if (Ve(s.retries))
          a = s.retries;
        else
          throw new O("retries must be a positive integer");
      if (s && s.retryDelay !== void 0)
        if (Ve(s.retryDelay) || typeof s.retryDelay == "function")
          c = s.retryDelay;
        else
          throw new O("retryDelay must be a positive integer or a function returning a positive integer");
      if (s && s.retryOn)
        if (Array.isArray(s.retryOn) || typeof s.retryOn == "function")
          u = s.retryOn;
        else
          throw new O("retryOn property expects an array or function");
      return new Promise(function(l, f) {
        var w = /* @__PURE__ */ o(function(p) {
          var b = typeof Request < "u" && i instanceof Request ? i.clone() : i;
          e(b, s).then(function(h) {
            if (Array.isArray(u) && u.indexOf(h.status) === -1)
              l(h);
            else if (typeof u == "function")
              try {
                return Promise.resolve(u(p, null, h)).then(function(x) {
                  x ? g(p, null, h) : l(h);
                }).catch(f);
              } catch (x) {
                f(x);
              }
            else
              p < a ? g(p, null, h) : l(h);
          }).catch(function(h) {
            if (typeof u == "function")
              try {
                Promise.resolve(u(p, h, null)).then(function(x) {
                  x ? g(p, h, null) : f(h);
                }).catch(function(x) {
                  f(x);
                });
              } catch (x) {
                f(x);
              }
            else p < a ? g(p, h, null) : f(h);
          });
        }, "wrappedFetch");
        function g(p, b, h) {
          var x = typeof c == "function" ? c(p, b, h) : c;
          setTimeout(function() {
            w(++p);
          }, x);
        }
        o(g, "retry"), w(0);
      });
    }, "fetchRetry");
  };
  function Ve(e) {
    return Number.isInteger(e) && e >= 0;
  }
  o(Ve, "isPositiveInteger");
  function O(e) {
    this.name = "ArgumentError", this.message = e;
  }
  o(O, "ArgumentError");
});

// src/telemetry/index.ts
import { logger as ji } from "@storybook/core/node-logger";

// src/telemetry/notify.ts
var ce = A(ar(), 1);
import { cache as cr } from "@storybook/core/common";
var ur = "telemetry-notification-date", B = console, lr = /* @__PURE__ */ o(async () => {
  await cr.get(ur, null) || (cr.set(ur, Date.now()), B.log(), B.log(
    `${ce.default.magenta(
      ce.default.bold("attention")
    )} => Storybook now collects completely anonymous telemetry regarding usage.`
  ), B.log("This information is used to shape Storybook's roadmap and prioritize features."), B.log(
    "You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:"
  ), B.log(ce.default.cyan("https://storybook.js.org/telemetry")), B.log());
}, "notify");

// src/telemetry/sanitize.ts
import pr from "node:path";
function fr(e) {
  return e.replace(/[-[/{}()*+?.\\^$|]/g, "\\$&");
}
o(fr, "regexpEscape");
function dr(e = "") {
  return e.replace(/\u001B\[[0-9;]*m/g, "");
}
o(dr, "removeAnsiEscapeCodes");
function z(e, t = pr.sep) {
  if (!e)
    return e;
  let r = process.cwd().split(t);
  for (; r.length > 1; ) {
    let n = r.join(t), i = new RegExp(fr(n), "gi");
    e = e.replace(i, "$SNIP");
    let s = r.join(t + t), a = new RegExp(fr(s), "gi");
    e = e.replace(a, "$SNIP"), r.pop();
  }
  return e;
}
o(z, "cleanPaths");
function ue(e, t = pr.sep) {
  try {
    e = {
      ...JSON.parse(JSON.stringify(e)),
      message: dr(e.message),
      stack: dr(e.stack),
      cause: e.cause,
      name: e.name
    };
    let r = z(JSON.stringify(e), t);
    return JSON.parse(r);
  } catch (r) {
    return `Sanitization error: ${r?.message}`;
  }
}
o(ue, "sanitizeError");

// src/telemetry/storybook-metadata.ts
var He = A(Qn(), 1);
import {
  getProjectRoot as Xu,
  getStorybookConfiguration as Zu,
  getStorybookInfo as Qu,
  loadMainConfig as el
} from "@storybook/core/common";
import { readConfig as tl } from "@storybook/core/csf-tools";

// ../node_modules/fd-package-json/dist/esm/main.js
var ro = A(to(), 1);
import { resolve as Ya } from "node:path";
import { stat as Xa, readFile as Za } from "node:fs/promises";
import { statSync as zf, readFileSync as Kf } from "node:fs";
async function Qa(e) {
  try {
    return (await Xa(e)).isFile();
  } catch {
    return !1;
  }
}
o(Qa, "fileExists");
async function ec(e) {
  for (let t of (0, ro.walkUp)(e)) {
    let r = Ya(t, "package.json");
    if (await Qa(r))
      return r;
  }
  return null;
}
o(ec, "findPackagePath");
async function no(e) {
  let t = await ec(e);
  if (!t)
    return null;
  try {
    let r = await Za(t, { encoding: "utf8" });
    return JSON.parse(r);
  } catch {
    return null;
  }
}
o(no, "findPackage");

// src/telemetry/get-chromatic-version.ts
function oo(e) {
  let t = e.dependencies?.chromatic || e.devDependencies?.chromatic || e.peerDependencies?.chromatic;
  return t || (e.scripts && Object.values(e.scripts).find((r) => r?.match(/chromatic/)) ? "latest" : void 0);
}
o(oo, "getChromaticVersionSpecifier");

// src/telemetry/get-framework-info.ts
import { normalize as nc } from "node:path";
import { frameworkPackages as oc } from "@storybook/core/common";

// src/telemetry/package-json.ts
import { readFile as tc } from "node:fs/promises";
import { join as rc } from "node:path";
var St = /* @__PURE__ */ o(async (e) => {
  let t = Object.keys(e);
  return Promise.all(t.map(ke));
}, "getActualPackageVersions"), ke = /* @__PURE__ */ o(async (e) => {
  try {
    let t = await wt(e);
    return {
      name: e,
      version: t.version
    };
  } catch {
    return { name: e, version: null };
  }
}, "getActualPackageVersion"), wt = /* @__PURE__ */ o(async (e) => {
  let t = y.resolve(rc(e, "package.json"), {
    paths: [process.cwd()]
  });
  return JSON.parse(await tc(t, { encoding: "utf8" }));
}, "getActualPackageJson");

// src/telemetry/get-framework-info.ts
var ic = [
  "html",
  "react",
  "svelte",
  "vue3",
  "preact",
  "server",
  "vue",
  "web-components",
  "angular",
  "ember"
], sc = ["builder-webpack5", "builder-vite"];
function io(e, t) {
  let { name: r = "", version: n, dependencies: i, devDependencies: s, peerDependencies: a } = e, c = {
    // We include the framework itself because it may be a renderer too (e.g. angular)
    [r]: n,
    ...i,
    ...s,
    ...a
  };
  return t.map((u) => `@storybook/${u}`).find((u) => c[u]);
}
o(io, "findMatchingPackage");
var ac = /* @__PURE__ */ o((e) => {
  let t = nc(e).replace(new RegExp(/\\/, "g"), "/");
  return Object.keys(oc).find((n) => t.endsWith(n)) || z(e).replace(/.*node_modules[\\/]/, "");
}, "getFrameworkPackageName");
async function so(e) {
  if (!e?.framework)
    return {};
  let t = typeof e.framework == "string" ? e.framework : e.framework?.name;
  if (!t)
    return {};
  let r = await wt(t);
  if (!r)
    return {};
  let n = io(r, sc), i = io(r, ic), s = ac(t), a = typeof e.framework == "object" ? e.framework.options : {};
  return {
    framework: {
      name: s,
      options: a
    },
    builder: n,
    renderer: i
  };
}
o(so, "getFrameworkInfo");

// src/telemetry/get-monorepo-type.ts
import { existsSync as ao, readFileSync as cc } from "node:fs";
import { join as vt } from "node:path";
import { getProjectRoot as uc } from "@storybook/core/common";
var co = {
  Nx: "nx.json",
  Turborepo: "turbo.json",
  Lerna: "lerna.json",
  Rush: "rush.json",
  Lage: "lage.config.json"
}, uo = /* @__PURE__ */ o(() => {
  let e = uc();
  if (!e)
    return;
  let r = Object.keys(co).find((i) => {
    let s = vt(e, co[i]);
    return ao(s);
  });
  if (r)
    return r;
  if (!ao(vt(e, "package.json")))
    return;
  if (JSON.parse(
    cc(vt(e, "package.json"), { encoding: "utf8" })
  )?.workspaces)
    return "Workspaces";
}, "getMonorepoType");

// node_modules/execa/index.js
var Jo = A(at(), 1);
import { Buffer as vu } from "node:buffer";
import Pu from "node:path";
import zt from "node:child_process";
import Ue from "node:process";

// ../node_modules/strip-final-newline/index.js
function Pt(e) {
  let t = typeof e == "string" ? `
` : 10, r = typeof e == "string" ? "\r" : 13;
  return e[e.length - 1] === t && (e = e.slice(0, -1)), e[e.length - 1] === r && (e = e.slice(0, -1)), e;
}
o(Pt, "stripFinalNewline");

// node_modules/npm-run-path/index.js
import Oe from "node:process";
import Q from "node:path";
import lc from "node:url";

// node_modules/path-key/index.js
function Ce(e = {}) {
  let {
    env: t = process.env,
    platform: r = process.platform
  } = e;
  return r !== "win32" ? "PATH" : Object.keys(t).reverse().find((n) => n.toUpperCase() === "PATH") || "Path";
}
o(Ce, "pathKey");

// node_modules/npm-run-path/index.js
function fc(e = {}) {
  let {
    cwd: t = Oe.cwd(),
    path: r = Oe.env[Ce()],
    execPath: n = Oe.execPath
  } = e, i, s = t instanceof URL ? lc.fileURLToPath(t) : t, a = Q.resolve(s), c = [];
  for (; i !== a; )
    c.push(Q.join(a, "node_modules/.bin")), i = a, a = Q.resolve(a, "..");
  return c.push(Q.resolve(s, n, "..")), [...c, r].join(Q.delimiter);
}
o(fc, "npmRunPath");
function lo({ env: e = Oe.env, ...t } = {}) {
  e = { ...e };
  let r = Ce({ env: e });
  return t.path = e[r], e[r] = fc(t), e;
}
o(lo, "npmRunPathEnv");

// node_modules/mimic-fn/index.js
var dc = /* @__PURE__ */ o((e, t, r, n) => {
  if (r === "length" || r === "prototype" || r === "arguments" || r === "caller")
    return;
  let i = Object.getOwnPropertyDescriptor(e, r), s = Object.getOwnPropertyDescriptor(t, r);
  !pc(i, s) && n || Object.defineProperty(e, r, s);
}, "copyProperty"), pc = /* @__PURE__ */ o(function(e, t) {
  return e === void 0 || e.configurable || e.writable === t.writable && e.enumerable === t.enumerable && e.configurable === t.configurable &&
  (e.writable || e.value === t.value);
}, "canCopyProperty"), mc = /* @__PURE__ */ o((e, t) => {
  let r = Object.getPrototypeOf(t);
  r !== Object.getPrototypeOf(e) && Object.setPrototypeOf(e, r);
}, "changePrototype"), hc = /* @__PURE__ */ o((e, t) => `/* Wrapped ${e}*/
${t}`, "wrappedToString"), yc = Object.getOwnPropertyDescriptor(Function.prototype, "toString"), gc = Object.getOwnPropertyDescriptor(Function.
prototype.toString, "name"), bc = /* @__PURE__ */ o((e, t, r) => {
  let n = r === "" ? "" : `with ${r.trim()}() `, i = hc.bind(null, n, t.toString());
  Object.defineProperty(i, "name", gc), Object.defineProperty(e, "toString", { ...yc, value: i });
}, "changeToString");
function Et(e, t, { ignoreNonConfigurable: r = !1 } = {}) {
  let { name: n } = e;
  for (let i of Reflect.ownKeys(t))
    dc(e, t, i, r);
  return mc(e, t), bc(e, t, n), e;
}
o(Et, "mimicFunction");

// node_modules/onetime/index.js
var Ae = /* @__PURE__ */ new WeakMap(), fo = /* @__PURE__ */ o((e, t = {}) => {
  if (typeof e != "function")
    throw new TypeError("Expected a function");
  let r, n = 0, i = e.displayName || e.name || "<anonymous>", s = /* @__PURE__ */ o(function(...a) {
    if (Ae.set(s, ++n), n === 1)
      r = e.apply(this, a), e = null;
    else if (t.throw === !0)
      throw new Error(`Function \`${i}\` can only be called once`);
    return r;
  }, "onetime");
  return Et(s, e), Ae.set(s, n), s;
}, "onetime");
fo.callCount = (e) => {
  if (!Ae.has(e))
    throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);
  return Ae.get(e);
};
var po = fo;

// node_modules/execa/lib/error.js
import Cc from "node:process";

// node_modules/human-signals/build/src/main.js
import { constants as vc } from "node:os";

// node_modules/human-signals/build/src/realtime.js
var mo = /* @__PURE__ */ o(() => {
  let e = Tt - ho + 1;
  return Array.from({ length: e }, xc);
}, "getRealtimeSignals"), xc = /* @__PURE__ */ o((e, t) => ({
  name: `SIGRT${t + 1}`,
  number: ho + t,
  action: "terminate",
  description: "Application-specific signal (realtime)",
  standard: "posix"
}), "getRealtimeSignal"), ho = 34, Tt = 64;

// node_modules/human-signals/build/src/signals.js
import { constants as Sc } from "node:os";

// node_modules/human-signals/build/src/core.js
var yo = [
  {
    name: "SIGHUP",
    number: 1,
    action: "terminate",
    description: "Terminal closed",
    standard: "posix"
  },
  {
    name: "SIGINT",
    number: 2,
    action: "terminate",
    description: "User interruption with CTRL-C",
    standard: "ansi"
  },
  {
    name: "SIGQUIT",
    number: 3,
    action: "core",
    description: "User interruption with CTRL-\\",
    standard: "posix"
  },
  {
    name: "SIGILL",
    number: 4,
    action: "core",
    description: "Invalid machine instruction",
    standard: "ansi"
  },
  {
    name: "SIGTRAP",
    number: 5,
    action: "core",
    description: "Debugger breakpoint",
    standard: "posix"
  },
  {
    name: "SIGABRT",
    number: 6,
    action: "core",
    description: "Aborted",
    standard: "ansi"
  },
  {
    name: "SIGIOT",
    number: 6,
    action: "core",
    description: "Aborted",
    standard: "bsd"
  },
  {
    name: "SIGBUS",
    number: 7,
    action: "core",
    description: "Bus error due to misaligned, non-existing address or paging error",
    standard: "bsd"
  },
  {
    name: "SIGEMT",
    number: 7,
    action: "terminate",
    description: "Command should be emulated but is not implemented",
    standard: "other"
  },
  {
    name: "SIGFPE",
    number: 8,
    action: "core",
    description: "Floating point arithmetic error",
    standard: "ansi"
  },
  {
    name: "SIGKILL",
    number: 9,
    action: "terminate",
    description: "Forced termination",
    standard: "posix",
    forced: !0
  },
  {
    name: "SIGUSR1",
    number: 10,
    action: "terminate",
    description: "Application-specific signal",
    standard: "posix"
  },
  {
    name: "SIGSEGV",
    number: 11,
    action: "core",
    description: "Segmentation fault",
    standard: "ansi"
  },
  {
    name: "SIGUSR2",
    number: 12,
    action: "terminate",
    description: "Application-specific signal",
    standard: "posix"
  },
  {
    name: "SIGPIPE",
    number: 13,
    action: "terminate",
    description: "Broken pipe or socket",
    standard: "posix"
  },
  {
    name: "SIGALRM",
    number: 14,
    action: "terminate",
    description: "Timeout or timer",
    standard: "posix"
  },
  {
    name: "SIGTERM",
    number: 15,
    action: "terminate",
    description: "Termination",
    standard: "ansi"
  },
  {
    name: "SIGSTKFLT",
    number: 16,
    action: "terminate",
    description: "Stack is empty or overflowed",
    standard: "other"
  },
  {
    name: "SIGCHLD",
    number: 17,
    action: "ignore",
    description: "Child process terminated, paused or unpaused",
    standard: "posix"
  },
  {
    name: "SIGCLD",
    number: 17,
    action: "ignore",
    description: "Child process terminated, paused or unpaused",
    standard: "other"
  },
  {
    name: "SIGCONT",
    number: 18,
    action: "unpause",
    description: "Unpaused",
    standard: "posix",
    forced: !0
  },
  {
    name: "SIGSTOP",
    number: 19,
    action: "pause",
    description: "Paused",
    standard: "posix",
    forced: !0
  },
  {
    name: "SIGTSTP",
    number: 20,
    action: "pause",
    description: 'Paused using CTRL-Z or "suspend"',
    standard: "posix"
  },
  {
    name: "SIGTTIN",
    number: 21,
    action: "pause",
    description: "Background process cannot read terminal input",
    standard: "posix"
  },
  {
    name: "SIGBREAK",
    number: 21,
    action: "terminate",
    description: "User interruption with CTRL-BREAK",
    standard: "other"
  },
  {
    name: "SIGTTOU",
    number: 22,
    action: "pause",
    description: "Background process cannot write to terminal output",
    standard: "posix"
  },
  {
    name: "SIGURG",
    number: 23,
    action: "ignore",
    description: "Socket received out-of-band data",
    standard: "bsd"
  },
  {
    name: "SIGXCPU",
    number: 24,
    action: "core",
    description: "Process timed out",
    standard: "bsd"
  },
  {
    name: "SIGXFSZ",
    number: 25,
    action: "core",
    description: "File too big",
    standard: "bsd"
  },
  {
    name: "SIGVTALRM",
    number: 26,
    action: "terminate",
    description: "Timeout or timer",
    standard: "bsd"
  },
  {
    name: "SIGPROF",
    number: 27,
    action: "terminate",
    description: "Timeout or timer",
    standard: "bsd"
  },
  {
    name: "SIGWINCH",
    number: 28,
    action: "ignore",
    description: "Terminal window size changed",
    standard: "bsd"
  },
  {
    name: "SIGIO",
    number: 29,
    action: "terminate",
    description: "I/O is available",
    standard: "other"
  },
  {
    name: "SIGPOLL",
    number: 29,
    action: "terminate",
    description: "Watched event",
    standard: "other"
  },
  {
    name: "SIGINFO",
    number: 29,
    action: "ignore",
    description: "Request for process information",
    standard: "other"
  },
  {
    name: "SIGPWR",
    number: 30,
    action: "terminate",
    description: "Device running out of power",
    standard: "systemv"
  },
  {
    name: "SIGSYS",
    number: 31,
    action: "core",
    description: "Invalid system call",
    standard: "other"
  },
  {
    name: "SIGUNUSED",
    number: 31,
    action: "terminate",
    description: "Invalid system call",
    standard: "other"
  }
];

// node_modules/human-signals/build/src/signals.js
var It = /* @__PURE__ */ o(() => {
  let e = mo();
  return [...yo, ...e].map(wc);
}, "getSignals"), wc = /* @__PURE__ */ o(({
  name: e,
  number: t,
  description: r,
  action: n,
  forced: i = !1,
  standard: s
}) => {
  let {
    signals: { [e]: a }
  } = Sc, c = a !== void 0;
  return { name: e, number: c ? a : t, description: r, supported: c, action: n, forced: i, standard: s };
}, "normalizeSignal");

// node_modules/human-signals/build/src/main.js
var Pc = /* @__PURE__ */ o(() => {
  let e = It();
  return Object.fromEntries(e.map(Ec));
}, "getSignalsByName"), Ec = /* @__PURE__ */ o(({
  name: e,
  number: t,
  description: r,
  supported: n,
  action: i,
  forced: s,
  standard: a
}) => [e, { name: e, number: t, description: r, supported: n, action: i, forced: s, standard: a }], "getSignalByName"), go = Pc(), Tc = /* @__PURE__ */ o(
() => {
  let e = It(), t = Tt + 1, r = Array.from(
    { length: t },
    (n, i) => Ic(i, e)
  );
  return Object.assign({}, ...r);
}, "getSignalsByNumber"), Ic = /* @__PURE__ */ o((e, t) => {
  let r = kc(e, t);
  if (r === void 0)
    return {};
  let { name: n, description: i, supported: s, action: a, forced: c, standard: u } = r;
  return {
    [e]: {
      name: n,
      number: e,
      description: i,
      supported: s,
      action: a,
      forced: c,
      standard: u
    }
  };
}, "getSignalByNumber"), kc = /* @__PURE__ */ o((e, t) => {
  let r = t.find(({ name: n }) => vc.signals[n] === e);
  return r !== void 0 ? r : t.find((n) => n.number === e);
}, "findSignalByNumber"), Fd = Tc();

// node_modules/execa/lib/error.js
var Oc = /* @__PURE__ */ o(({ timedOut: e, timeout: t, errorCode: r, signal: n, signalDescription: i, exitCode: s, isCanceled: a }) => e ? `\
timed out after ${t} milliseconds` : a ? "was canceled" : r !== void 0 ? `failed with ${r}` : n !== void 0 ? `was killed with ${n} (${i})` :
s !== void 0 ? `failed with exit code ${s}` : "failed", "getErrorPrefix"), ee = /* @__PURE__ */ o(({
  stdout: e,
  stderr: t,
  all: r,
  error: n,
  signal: i,
  exitCode: s,
  command: a,
  escapedCommand: c,
  timedOut: u,
  isCanceled: l,
  killed: f,
  parsed: { options: { timeout: w, cwd: g = Cc.cwd() } }
}) => {
  s = s === null ? void 0 : s, i = i === null ? void 0 : i;
  let p = i === void 0 ? void 0 : go[i].description, b = n && n.code, x = `Command ${Oc({ timedOut: u, timeout: w, errorCode: b, signal: i, signalDescription: p,
  exitCode: s, isCanceled: l })}: ${a}`, E = Object.prototype.toString.call(n) === "[object Error]", T = E ? `${x}
${n.message}` : x, C = [T, t, e].filter(Boolean).join(`
`);
  return E ? (n.originalMessage = n.message, n.message = C) : n = new Error(C), n.shortMessage = T, n.command = a, n.escapedCommand = c, n.exitCode =
  s, n.signal = i, n.signalDescription = p, n.stdout = e, n.stderr = t, n.cwd = g, r !== void 0 && (n.all = r), "bufferedData" in n && delete n.
  bufferedData, n.failed = !0, n.timedOut = !!u, n.isCanceled = l, n.killed = f && !u, n;
}, "makeError");

// node_modules/execa/lib/stdio.js
var Re = ["stdin", "stdout", "stderr"], Ac = /* @__PURE__ */ o((e) => Re.some((t) => e[t] !== void 0), "hasAlias"), bo = /* @__PURE__ */ o((e) => {
  if (!e)
    return;
  let { stdio: t } = e;
  if (t === void 0)
    return Re.map((n) => e[n]);
  if (Ac(e))
    throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${Re.map((n) => `\`${n}\``).join(", ")}`);
  if (typeof t == "string")
    return t;
  if (!Array.isArray(t))
    throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);
  let r = Math.max(t.length, Re.length);
  return Array.from({ length: r }, (n, i) => t[i]);
}, "normalizeStdio");

// node_modules/execa/lib/kill.js
import Gc from "node:os";

// node_modules/signal-exit/dist/mjs/signals.js
var j = [];
j.push("SIGHUP", "SIGINT", "SIGTERM");
process.platform !== "win32" && j.push(
  "SIGALRM",
  "SIGABRT",
  "SIGVTALRM",
  "SIGXCPU",
  "SIGXFSZ",
  "SIGUSR2",
  "SIGTRAP",
  "SIGSYS",
  "SIGQUIT",
  "SIGIOT"
  // should detect profiler and enable/disable accordingly.
  // see #21
  // 'SIGPROF'
);
process.platform === "linux" && j.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT");

// node_modules/signal-exit/dist/mjs/index.js
var _e = /* @__PURE__ */ o((e) => !!e && typeof e == "object" && typeof e.removeListener == "function" && typeof e.emit == "function" && typeof e.
reallyExit == "function" && typeof e.listeners == "function" && typeof e.kill == "function" && typeof e.pid == "number" && typeof e.on == "f\
unction", "processOk"), kt = Symbol.for("signal-exit emitter"), Ct = globalThis, Rc = Object.defineProperty.bind(Object), Ot = class {
  static {
    o(this, "Emitter");
  }
  emitted = {
    afterExit: !1,
    exit: !1
  };
  listeners = {
    afterExit: [],
    exit: []
  };
  count = 0;
  id = Math.random();
  constructor() {
    if (Ct[kt])
      return Ct[kt];
    Rc(Ct, kt, {
      value: this,
      writable: !1,
      enumerable: !1,
      configurable: !1
    });
  }
  on(t, r) {
    this.listeners[t].push(r);
  }
  removeListener(t, r) {
    let n = this.listeners[t], i = n.indexOf(r);
    i !== -1 && (i === 0 && n.length === 1 ? n.length = 0 : n.splice(i, 1));
  }
  emit(t, r, n) {
    if (this.emitted[t])
      return !1;
    this.emitted[t] = !0;
    let i = !1;
    for (let s of this.listeners[t])
      i = s(r, n) === !0 || i;
    return t === "exit" && (i = this.emit("afterExit", r, n) || i), i;
  }
}, Ge = class {
  static {
    o(this, "SignalExitBase");
  }
}, _c = /* @__PURE__ */ o((e) => ({
  onExit(t, r) {
    return e.onExit(t, r);
  },
  load() {
    return e.load();
  },
  unload() {
    return e.unload();
  }
}), "signalExitWrap"), At = class extends Ge {
  static {
    o(this, "SignalExitFallback");
  }
  onExit() {
    return () => {
    };
  }
  load() {
  }
  unload() {
  }
}, Rt = class extends Ge {
  static {
    o(this, "SignalExit");
  }
  // "SIGHUP" throws an `ENOSYS` error on Windows,
  // so use a supported signal instead
  /* c8 ignore start */
  #s = _t.platform === "win32" ? "SIGINT" : "SIGHUP";
  /* c8 ignore stop */
  #t = new Ot();
  #e;
  #o;
  #i;
  #n = {};
  #r = !1;
  constructor(t) {
    super(), this.#e = t, this.#n = {};
    for (let r of j)
      this.#n[r] = () => {
        let n = this.#e.listeners(r), { count: i } = this.#t, s = t;
        if (typeof s.__signal_exit_emitter__ == "object" && typeof s.__signal_exit_emitter__.count == "number" && (i += s.__signal_exit_emitter__.
        count), n.length === i) {
          this.unload();
          let a = this.#t.emit("exit", null, r), c = r === "SIGHUP" ? this.#s : r;
          a || t.kill(t.pid, c);
        }
      };
    this.#i = t.reallyExit, this.#o = t.emit;
  }
  onExit(t, r) {
    if (!_e(this.#e))
      return () => {
      };
    this.#r === !1 && this.load();
    let n = r?.alwaysLast ? "afterExit" : "exit";
    return this.#t.on(n, t), () => {
      this.#t.removeListener(n, t), this.#t.listeners.exit.length === 0 && this.#t.listeners.afterExit.length === 0 && this.unload();
    };
  }
  load() {
    if (!this.#r) {
      this.#r = !0, this.#t.count += 1;
      for (let t of j)
        try {
          let r = this.#n[t];
          r && this.#e.on(t, r);
        } catch {
        }
      this.#e.emit = (t, ...r) => this.#c(t, ...r), this.#e.reallyExit = (t) => this.#a(t);
    }
  }
  unload() {
    this.#r && (this.#r = !1, j.forEach((t) => {
      let r = this.#n[t];
      if (!r)
        throw new Error("Listener not defined for signal: " + t);
      try {
        this.#e.removeListener(t, r);
      } catch {
      }
    }), this.#e.emit = this.#o, this.#e.reallyExit = this.#i, this.#t.count -= 1);
  }
  #a(t) {
    return _e(this.#e) ? (this.#e.exitCode = t || 0, this.#t.emit("exit", this.#e.exitCode, null), this.#i.call(this.#e, this.#e.exitCode)) :
    0;
  }
  #c(t, ...r) {
    let n = this.#o;
    if (t === "exit" && _e(this.#e)) {
      typeof r[0] == "number" && (this.#e.exitCode = r[0]);
      let i = n.call(this.#e, t, ...r);
      return this.#t.emit("exit", this.#e.exitCode, null), i;
    } else
      return n.call(this.#e, t, ...r);
  }
}, _t = globalThis.process, {
  /**
   * Called when the process is exiting, whether via signal, explicit
   * exit, or running out of stuff to do.
   *
   * If the global process object is not suitable for instrumentation,
   * then this will be a no-op.
   *
   * Returns a function that may be used to unload signal-exit.
   */
  onExit: xo,
  /**
   * Load the listeners.  Likely you never need to call this, unless
   * doing a rather deep integration with signal-exit functionality.
   * Mostly exposed for the benefit of testing.
   *
   * @internal
   */
  load: Xd,
  /**
   * Unload the listeners.  Likely you never need to call this, unless
   * doing a rather deep integration with signal-exit functionality.
   * Mostly exposed for the benefit of testing.
   *
   * @internal
   */
  unload: Zd
} = _c(_e(_t) ? new Rt(_t) : new At());

// node_modules/execa/lib/kill.js
var jc = 1e3 * 5, So = /* @__PURE__ */ o((e, t = "SIGTERM", r = {}) => {
  let n = e(t);
  return Nc(e, t, r, n), n;
}, "spawnedKill"), Nc = /* @__PURE__ */ o((e, t, r, n) => {
  if (!Bc(t, r, n))
    return;
  let i = Mc(r), s = setTimeout(() => {
    e("SIGKILL");
  }, i);
  s.unref && s.unref();
}, "setKillTimeout"), Bc = /* @__PURE__ */ o((e, { forceKillAfterTimeout: t }, r) => Dc(e) && t !== !1 && r, "shouldForceKill"), Dc = /* @__PURE__ */ o(
(e) => e === Gc.constants.signals.SIGTERM || typeof e == "string" && e.toUpperCase() === "SIGTERM", "isSigterm"), Mc = /* @__PURE__ */ o(({ forceKillAfterTimeout: e = !0 }) => {
  if (e === !0)
    return jc;
  if (!Number.isFinite(e) || e < 0)
    throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);
  return e;
}, "getForceKillAfterTimeout"), wo = /* @__PURE__ */ o((e, t) => {
  e.kill() && (t.isCanceled = !0);
}, "spawnedCancel"), Lc = /* @__PURE__ */ o((e, t, r) => {
  e.kill(t), r(Object.assign(new Error("Timed out"), { timedOut: !0, signal: t }));
}, "timeoutKill"), vo = /* @__PURE__ */ o((e, { timeout: t, killSignal: r = "SIGTERM" }, n) => {
  if (t === 0 || t === void 0)
    return n;
  let i, s = new Promise((c, u) => {
    i = setTimeout(() => {
      Lc(e, r, u);
    }, t);
  }), a = n.finally(() => {
    clearTimeout(i);
  });
  return Promise.race([s, a]);
}, "setupTimeout"), Po = /* @__PURE__ */ o(({ timeout: e }) => {
  if (e !== void 0 && (!Number.isFinite(e) || e < 0))
    throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);
}, "validateTimeout"), Eo = /* @__PURE__ */ o(async (e, { cleanup: t, detached: r }, n) => {
  if (!t || r)
    return n;
  let i = xo(() => {
    e.kill();
  });
  return n.finally(() => {
    i();
  });
}, "setExitHandler");

// node_modules/execa/lib/pipe.js
import { createWriteStream as Fc } from "node:fs";
import { ChildProcess as Uc } from "node:child_process";

// node_modules/is-stream/index.js
function je(e) {
  return e !== null && typeof e == "object" && typeof e.pipe == "function";
}
o(je, "isStream");
function Gt(e) {
  return je(e) && e.writable !== !1 && typeof e._write == "function" && typeof e._writableState == "object";
}
o(Gt, "isWritableStream");

// node_modules/execa/lib/pipe.js
var $c = /* @__PURE__ */ o((e) => e instanceof Uc && typeof e.then == "function", "isExecaChildProcess"), jt = /* @__PURE__ */ o((e, t, r) => {
  if (typeof r == "string")
    return e[t].pipe(Fc(r)), e;
  if (Gt(r))
    return e[t].pipe(r), e;
  if (!$c(r))
    throw new TypeError("The second argument must be a string, a stream or an Execa child process.");
  if (!Gt(r.stdin))
    throw new TypeError("The target child process's stdin must be available.");
  return e[t].pipe(r.stdin), r;
}, "pipeToTarget"), To = /* @__PURE__ */ o((e) => {
  e.stdout !== null && (e.pipeStdout = jt.bind(void 0, e, "stdout")), e.stderr !== null && (e.pipeStderr = jt.bind(void 0, e, "stderr")), e.
  all !== void 0 && (e.pipeAll = jt.bind(void 0, e, "all"));
}, "addPipeMethods");

// node_modules/execa/lib/stream.js
import { createReadStream as su, readFileSync as au } from "node:fs";
import { setTimeout as cu } from "node:timers/promises";

// node_modules/get-stream/source/contents.js
var te = /* @__PURE__ */ o(async (e, { init: t, convertChunk: r, getSize: n, truncateChunk: i, addChunk: s, getFinalChunk: a, finalize: c }, {
maxBuffer: u = Number.POSITIVE_INFINITY } = {}) => {
  if (!Wc(e))
    throw new Error("The first argument must be a Readable, a ReadableStream, or an async iterable.");
  let l = t();
  l.length = 0;
  try {
    for await (let f of e) {
      let w = Hc(f), g = r[w](f, l);
      Co({ convertedChunk: g, state: l, getSize: n, truncateChunk: i, addChunk: s, maxBuffer: u });
    }
    return qc({ state: l, convertChunk: r, getSize: n, truncateChunk: i, addChunk: s, getFinalChunk: a, maxBuffer: u }), c(l);
  } catch (f) {
    throw f.bufferedData = c(l), f;
  }
}, "getStreamContents"), qc = /* @__PURE__ */ o(({ state: e, getSize: t, truncateChunk: r, addChunk: n, getFinalChunk: i, maxBuffer: s }) => {
  let a = i(e);
  a !== void 0 && Co({ convertedChunk: a, state: e, getSize: t, truncateChunk: r, addChunk: n, maxBuffer: s });
}, "appendFinalChunk"), Co = /* @__PURE__ */ o(({ convertedChunk: e, state: t, getSize: r, truncateChunk: n, addChunk: i, maxBuffer: s }) => {
  let a = r(e), c = t.length + a;
  if (c <= s) {
    Io(e, t, i, c);
    return;
  }
  let u = n(e, s - t.length);
  throw u !== void 0 && Io(u, t, i, s), new Ne();
}, "appendChunk"), Io = /* @__PURE__ */ o((e, t, r, n) => {
  t.contents = r(e, t, n), t.length = n;
}, "addNewChunk"), Wc = /* @__PURE__ */ o((e) => typeof e == "object" && e !== null && typeof e[Symbol.asyncIterator] == "function", "isAsyn\
cIterable"), Hc = /* @__PURE__ */ o((e) => {
  let t = typeof e;
  if (t === "string")
    return "string";
  if (t !== "object" || e === null)
    return "others";
  if (globalThis.Buffer?.isBuffer(e))
    return "buffer";
  let r = ko.call(e);
  return r === "[object ArrayBuffer]" ? "arrayBuffer" : r === "[object DataView]" ? "dataView" : Number.isInteger(e.byteLength) && Number.isInteger(
  e.byteOffset) && ko.call(e.buffer) === "[object ArrayBuffer]" ? "typedArray" : "others";
}, "getChunkType"), { toString: ko } = Object.prototype, Ne = class extends Error {
  static {
    o(this, "MaxBufferError");
  }
  name = "MaxBufferError";
  constructor() {
    super("maxBuffer exceeded");
  }
};

// node_modules/get-stream/source/utils.js
var Nt = /* @__PURE__ */ o((e) => e, "identity"), Bt = /* @__PURE__ */ o(() => {
}, "noop"), Dt = /* @__PURE__ */ o(({ contents: e }) => e, "getContentsProp"), Be = /* @__PURE__ */ o((e) => {
  throw new Error(`Streams in object mode are not supported: ${String(e)}`);
}, "throwObjectStream"), De = /* @__PURE__ */ o((e) => e.length, "getLengthProp");

// node_modules/get-stream/source/array-buffer.js
async function Mt(e, t) {
  return te(e, eu, t);
}
o(Mt, "getStreamAsArrayBuffer");
var Vc = /* @__PURE__ */ o(() => ({ contents: new ArrayBuffer(0) }), "initArrayBuffer"), zc = /* @__PURE__ */ o((e) => Kc.encode(e), "useTex\
tEncoder"), Kc = new TextEncoder(), Oo = /* @__PURE__ */ o((e) => new Uint8Array(e), "useUint8Array"), Ao = /* @__PURE__ */ o((e) => new Uint8Array(
e.buffer, e.byteOffset, e.byteLength), "useUint8ArrayWithOffset"), Jc = /* @__PURE__ */ o((e, t) => e.slice(0, t), "truncateArrayBufferChunk"),
Yc = /* @__PURE__ */ o((e, { contents: t, length: r }, n) => {
  let i = Go() ? Zc(t, n) : Xc(t, n);
  return new Uint8Array(i).set(e, r), i;
}, "addArrayBufferChunk"), Xc = /* @__PURE__ */ o((e, t) => {
  if (t <= e.byteLength)
    return e;
  let r = new ArrayBuffer(_o(t));
  return new Uint8Array(r).set(new Uint8Array(e), 0), r;
}, "resizeArrayBufferSlow"), Zc = /* @__PURE__ */ o((e, t) => {
  if (t <= e.maxByteLength)
    return e.resize(t), e;
  let r = new ArrayBuffer(t, { maxByteLength: _o(t) });
  return new Uint8Array(r).set(new Uint8Array(e), 0), r;
}, "resizeArrayBuffer"), _o = /* @__PURE__ */ o((e) => Ro ** Math.ceil(Math.log(e) / Math.log(Ro)), "getNewContentsLength"), Ro = 2, Qc = /* @__PURE__ */ o(
({ contents: e, length: t }) => Go() ? e : e.slice(0, t), "finalizeArrayBuffer"), Go = /* @__PURE__ */ o(() => "resize" in ArrayBuffer.prototype,
"hasArrayBufferResize"), eu = {
  init: Vc,
  convertChunk: {
    string: zc,
    buffer: Oo,
    arrayBuffer: Oo,
    dataView: Ao,
    typedArray: Ao,
    others: Be
  },
  getSize: De,
  truncateChunk: Jc,
  addChunk: Yc,
  getFinalChunk: Bt,
  finalize: Qc
};

// node_modules/get-stream/source/buffer.js
async function Me(e, t) {
  if (!("Buffer" in globalThis))
    throw new Error("getStreamAsBuffer() is only supported in Node.js");
  try {
    return jo(await Mt(e, t));
  } catch (r) {
    throw r.bufferedData !== void 0 && (r.bufferedData = jo(r.bufferedData)), r;
  }
}
o(Me, "getStreamAsBuffer");
var jo = /* @__PURE__ */ o((e) => globalThis.Buffer.from(e), "arrayBufferToNodeBuffer");

// node_modules/get-stream/source/string.js
async function Lt(e, t) {
  return te(e, iu, t);
}
o(Lt, "getStreamAsString");
var tu = /* @__PURE__ */ o(() => ({ contents: "", textDecoder: new TextDecoder() }), "initString"), Le = /* @__PURE__ */ o((e, { textDecoder: t }) => t.
decode(e, { stream: !0 }), "useTextDecoder"), ru = /* @__PURE__ */ o((e, { contents: t }) => t + e, "addStringChunk"), nu = /* @__PURE__ */ o(
(e, t) => e.slice(0, t), "truncateStringChunk"), ou = /* @__PURE__ */ o(({ textDecoder: e }) => {
  let t = e.decode();
  return t === "" ? void 0 : t;
}, "getFinalStringChunk"), iu = {
  init: tu,
  convertChunk: {
    string: Nt,
    buffer: Le,
    arrayBuffer: Le,
    dataView: Le,
    typedArray: Le,
    others: Be
  },
  getSize: De,
  truncateChunk: nu,
  addChunk: ru,
  getFinalChunk: ou,
  finalize: Dt
};

// node_modules/execa/lib/stream.js
var No = A(mt(), 1);
var Bo = /* @__PURE__ */ o((e) => {
  if (e !== void 0)
    throw new TypeError("The `input` and `inputFile` options cannot be both set.");
}, "validateInputOptions"), uu = /* @__PURE__ */ o(({ input: e, inputFile: t }) => typeof t != "string" ? e : (Bo(e), au(t)), "getInputSync"),
Do = /* @__PURE__ */ o((e) => {
  let t = uu(e);
  if (je(t))
    throw new TypeError("The `input` option cannot be a stream in sync mode");
  return t;
}, "handleInputSync"), lu = /* @__PURE__ */ o(({ input: e, inputFile: t }) => typeof t != "string" ? e : (Bo(e), su(t)), "getInput"), Mo = /* @__PURE__ */ o(
(e, t) => {
  let r = lu(t);
  r !== void 0 && (je(r) ? r.pipe(e.stdin) : e.stdin.end(r));
}, "handleInput"), Lo = /* @__PURE__ */ o((e, { all: t }) => {
  if (!t || !e.stdout && !e.stderr)
    return;
  let r = (0, No.default)();
  return e.stdout && r.add(e.stdout), e.stderr && r.add(e.stderr), r;
}, "makeAllStream"), Ft = /* @__PURE__ */ o(async (e, t) => {
  if (!(!e || t === void 0)) {
    await cu(0), e.destroy();
    try {
      return await t;
    } catch (r) {
      return r.bufferedData;
    }
  }
}, "getBufferedData"), Ut = /* @__PURE__ */ o((e, { encoding: t, buffer: r, maxBuffer: n }) => {
  if (!(!e || !r))
    return t === "utf8" || t === "utf-8" ? Lt(e, { maxBuffer: n }) : t === null || t === "buffer" ? Me(e, { maxBuffer: n }) : fu(e, n, t);
}, "getStreamPromise"), fu = /* @__PURE__ */ o(async (e, t, r) => (await Me(e, { maxBuffer: t })).toString(r), "applyEncoding"), Fo = /* @__PURE__ */ o(
async ({ stdout: e, stderr: t, all: r }, { encoding: n, buffer: i, maxBuffer: s }, a) => {
  let c = Ut(e, { encoding: n, buffer: i, maxBuffer: s }), u = Ut(t, { encoding: n, buffer: i, maxBuffer: s }), l = Ut(r, { encoding: n, buffer: i,
  maxBuffer: s * 2 });
  try {
    return await Promise.all([a, c, u, l]);
  } catch (f) {
    return Promise.all([
      { error: f, signal: f.signal, timedOut: f.timedOut },
      Ft(e, c),
      Ft(t, u),
      Ft(r, l)
    ]);
  }
}, "getSpawnedResult");

// node_modules/execa/lib/promise.js
var du = (async () => {
})().constructor.prototype, pu = ["then", "catch", "finally"].map((e) => [
  e,
  Reflect.getOwnPropertyDescriptor(du, e)
]), $t = /* @__PURE__ */ o((e, t) => {
  for (let [r, n] of pu) {
    let i = typeof t == "function" ? (...s) => Reflect.apply(n.value, t(), s) : n.value.bind(t);
    Reflect.defineProperty(e, r, { ...n, value: i });
  }
}, "mergePromise"), Uo = /* @__PURE__ */ o((e) => new Promise((t, r) => {
  e.on("exit", (n, i) => {
    t({ exitCode: n, signal: i });
  }), e.on("error", (n) => {
    r(n);
  }), e.stdin && e.stdin.on("error", (n) => {
    r(n);
  });
}), "getSpawnedPromise");

// node_modules/execa/lib/command.js
import { Buffer as mu } from "node:buffer";
import { ChildProcess as hu } from "node:child_process";
var Wo = /* @__PURE__ */ o((e, t = []) => Array.isArray(t) ? [e, ...t] : [e], "normalizeArgs"), yu = /^[\w.-]+$/, gu = /* @__PURE__ */ o((e) => typeof e !=
"string" || yu.test(e) ? e : `"${e.replaceAll('"', '\\"')}"`, "escapeArg"), qt = /* @__PURE__ */ o((e, t) => Wo(e, t).join(" "), "joinComman\
d"), Wt = /* @__PURE__ */ o((e, t) => Wo(e, t).map((r) => gu(r)).join(" "), "getEscapedCommand"), Ho = / +/g, Vo = /* @__PURE__ */ o((e) => {
  let t = [];
  for (let r of e.trim().split(Ho)) {
    let n = t.at(-1);
    n && n.endsWith("\\") ? t[t.length - 1] = `${n.slice(0, -1)} ${r}` : t.push(r);
  }
  return t;
}, "parseCommand"), $o = /* @__PURE__ */ o((e) => {
  let t = typeof e;
  if (t === "string")
    return e;
  if (t === "number")
    return String(e);
  if (t === "object" && e !== null && !(e instanceof hu) && "stdout" in e) {
    let r = typeof e.stdout;
    if (r === "string")
      return e.stdout;
    if (mu.isBuffer(e.stdout))
      return e.stdout.toString();
    throw new TypeError(`Unexpected "${r}" stdout in template expression`);
  }
  throw new TypeError(`Unexpected "${t}" in template expression`);
}, "parseExpression"), qo = /* @__PURE__ */ o((e, t, r) => r || e.length === 0 || t.length === 0 ? [...e, ...t] : [
  ...e.slice(0, -1),
  `${e.at(-1)}${t[0]}`,
  ...t.slice(1)
], "concatTokens"), bu = /* @__PURE__ */ o(({ templates: e, expressions: t, tokens: r, index: n, template: i }) => {
  let s = i ?? e.raw[n], a = s.split(Ho).filter(Boolean), c = qo(
    r,
    a,
    s.startsWith(" ")
  );
  if (n === t.length)
    return c;
  let u = t[n], l = Array.isArray(u) ? u.map((f) => $o(f)) : [$o(u)];
  return qo(
    c,
    l,
    s.endsWith(" ")
  );
}, "parseTemplate"), Ht = /* @__PURE__ */ o((e, t) => {
  let r = [];
  for (let [n, i] of e.entries())
    r = bu({ templates: e, expressions: t, tokens: r, index: n, template: i });
  return r;
}, "parseTemplates");

// node_modules/execa/lib/verbose.js
import { debuglog as xu } from "node:util";
import Su from "node:process";
var zo = xu("execa").enabled, Fe = /* @__PURE__ */ o((e, t) => String(e).padStart(t, "0"), "padField"), wu = /* @__PURE__ */ o(() => {
  let e = /* @__PURE__ */ new Date();
  return `${Fe(e.getHours(), 2)}:${Fe(e.getMinutes(), 2)}:${Fe(e.getSeconds(), 2)}.${Fe(e.getMilliseconds(), 3)}`;
}, "getTimestamp"), Vt = /* @__PURE__ */ o((e, { verbose: t }) => {
  t && Su.stderr.write(`[${wu()}] ${e}
`);
}, "logCommand");

// node_modules/execa/index.js
var Eu = 1e3 * 1e3 * 100, Tu = /* @__PURE__ */ o(({ env: e, extendEnv: t, preferLocal: r, localDir: n, execPath: i }) => {
  let s = t ? { ...Ue.env, ...e } : e;
  return r ? lo({ env: s, cwd: n, execPath: i }) : s;
}, "getEnv"), Yo = /* @__PURE__ */ o((e, t, r = {}) => {
  let n = Jo.default._parse(e, t, r);
  return e = n.command, t = n.args, r = n.options, r = {
    maxBuffer: Eu,
    buffer: !0,
    stripFinalNewline: !0,
    extendEnv: !0,
    preferLocal: !1,
    localDir: r.cwd || Ue.cwd(),
    execPath: Ue.execPath,
    encoding: "utf8",
    reject: !0,
    cleanup: !0,
    all: !1,
    windowsHide: !0,
    verbose: zo,
    ...r
  }, r.env = Tu(r), r.stdio = bo(r), Ue.platform === "win32" && Pu.basename(e, ".exe") === "cmd" && t.unshift("/q"), { file: e, args: t, options: r,
  parsed: n };
}, "handleArguments"), re = /* @__PURE__ */ o((e, t, r) => typeof t != "string" && !vu.isBuffer(t) ? r === void 0 ? void 0 : "" : e.stripFinalNewline ?
Pt(t) : t, "handleOutput");
function Xo(e, t, r) {
  let n = Yo(e, t, r), i = qt(e, t), s = Wt(e, t);
  Vt(s, n.options), Po(n.options);
  let a;
  try {
    a = zt.spawn(n.file, n.args, n.options);
  } catch (p) {
    let b = new zt.ChildProcess(), h = Promise.reject(ee({
      error: p,
      stdout: "",
      stderr: "",
      all: "",
      command: i,
      escapedCommand: s,
      parsed: n,
      timedOut: !1,
      isCanceled: !1,
      killed: !1
    }));
    return $t(b, h), b;
  }
  let c = Uo(a), u = vo(a, n.options, c), l = Eo(a, n.options, u), f = { isCanceled: !1 };
  a.kill = So.bind(null, a.kill.bind(a)), a.cancel = wo.bind(null, a, f);
  let g = po(/* @__PURE__ */ o(async () => {
    let [{ error: p, exitCode: b, signal: h, timedOut: x }, E, T, C] = await Fo(a, n.options, l), m = re(n.options, E), v = re(n.options, T),
    I = re(n.options, C);
    if (p || b !== 0 || h !== null) {
      let V = ee({
        error: p,
        exitCode: b,
        signal: h,
        stdout: m,
        stderr: v,
        all: I,
        command: i,
        escapedCommand: s,
        parsed: n,
        timedOut: x,
        isCanceled: f.isCanceled || (n.options.signal ? n.options.signal.aborted : !1),
        killed: a.killed
      });
      if (!n.options.reject)
        return V;
      throw V;
    }
    return {
      command: i,
      escapedCommand: s,
      exitCode: 0,
      stdout: m,
      stderr: v,
      all: I,
      failed: !1,
      timedOut: !1,
      isCanceled: !1,
      killed: !1
    };
  }, "handlePromise"));
  return Mo(a, n.options), a.all = Lo(a, n.options), To(a), $t(a, g), a;
}
o(Xo, "execa");
function Iu(e, t, r) {
  let n = Yo(e, t, r), i = qt(e, t), s = Wt(e, t);
  Vt(s, n.options);
  let a = Do(n.options), c;
  try {
    c = zt.spawnSync(n.file, n.args, { ...n.options, input: a });
  } catch (f) {
    throw ee({
      error: f,
      stdout: "",
      stderr: "",
      all: "",
      command: i,
      escapedCommand: s,
      parsed: n,
      timedOut: !1,
      isCanceled: !1,
      killed: !1
    });
  }
  let u = re(n.options, c.stdout, c.error), l = re(n.options, c.stderr, c.error);
  if (c.error || c.status !== 0 || c.signal !== null) {
    let f = ee({
      stdout: u,
      stderr: l,
      error: c.error,
      signal: c.signal,
      exitCode: c.status,
      command: i,
      escapedCommand: s,
      parsed: n,
      timedOut: c.error && c.error.code === "ETIMEDOUT",
      isCanceled: !1,
      killed: c.signal !== null
    });
    if (!n.options.reject)
      return f;
    throw f;
  }
  return {
    command: i,
    escapedCommand: s,
    exitCode: 0,
    stdout: u,
    stderr: l,
    failed: !1,
    timedOut: !1,
    isCanceled: !1,
    killed: !1
  };
}
o(Iu, "execaSync");
var ku = /* @__PURE__ */ o(({ input: e, inputFile: t, stdio: r }) => e === void 0 && t === void 0 && r === void 0 ? { stdin: "inherit" } : {},
"normalizeScriptStdin"), Ko = /* @__PURE__ */ o((e = {}) => ({
  preferLocal: !0,
  ...ku(e),
  ...e
}), "normalizeScriptOptions");
function Zo(e) {
  function t(r, ...n) {
    if (!Array.isArray(r))
      return Zo({ ...e, ...r });
    let [i, ...s] = Ht(r, n);
    return Xo(i, s, Ko(e));
  }
  return o(t, "$"), t.sync = (r, ...n) => {
    if (!Array.isArray(r))
      throw new TypeError("Please use $(options).sync`command` instead of $.sync(options)`command`.");
    let [i, ...s] = Ht(r, n);
    return Iu(i, s, Ko(e));
  }, t;
}
o(Zo, "create$");
var ym = Zo();
function Qo(e, t) {
  let [r, ...n] = Vo(e);
  return Xo(r, n, t);
}
o(Qo, "execaCommand");

// src/common/utils/file-cache.ts
import { createHash as ei, randomBytes as Cu } from "node:crypto";
import { mkdirSync as Kt, readFileSync as Ou, readdirSync as Au, rmSync as ti, writeFileSync as Ru } from "node:fs";
import { readFile as ri, readdir as ni, rm as oi, writeFile as _u } from "node:fs/promises";
import { tmpdir as Gu } from "node:os";
import { join as ne } from "node:path";
var Jt = class {
  static {
    o(this, "FileSystemCache");
  }
  constructor(t = {}) {
    this.prefix = (t.ns || t.prefix || "") + "-", this.hash_alg = t.hash_alg || "md5", this.cache_dir = t.basePath || ne(Gu(), Cu(15).toString(
    "base64").replace(/\//g, "-")), this.ttl = t.ttl || 0, ei(this.hash_alg), Kt(this.cache_dir, { recursive: !0 });
  }
  generateHash(t) {
    return ne(this.cache_dir, this.prefix + ei(this.hash_alg).update(t).digest("hex"));
  }
  isExpired(t, r) {
    return t.ttl != null && r > t.ttl;
  }
  parseCacheData(t, r) {
    let n = JSON.parse(t);
    return this.isExpired(n, Date.now()) ? r : n.content;
  }
  parseSetData(t, r, n = {}) {
    let i = n.ttl ?? this.ttl;
    return JSON.stringify({ key: t, content: r, ...i && { ttl: Date.now() + i * 1e3 } });
  }
  async get(t, r) {
    try {
      let n = await ri(this.generateHash(t), "utf8");
      return this.parseCacheData(n, r);
    } catch {
      return r;
    }
  }
  getSync(t, r) {
    try {
      let n = Ou(this.generateHash(t), "utf8");
      return this.parseCacheData(n, r);
    } catch {
      return r;
    }
  }
  async set(t, r, n = {}) {
    let i = typeof n == "number" ? { ttl: n } : n;
    Kt(this.cache_dir, { recursive: !0 }), await _u(this.generateHash(t), this.parseSetData(t, r, i), {
      encoding: i.encoding || "utf8"
    });
  }
  setSync(t, r, n = {}) {
    let i = typeof n == "number" ? { ttl: n } : n;
    Kt(this.cache_dir, { recursive: !0 }), Ru(this.generateHash(t), this.parseSetData(t, r, i), {
      encoding: i.encoding || "utf8"
    });
  }
  async setMany(t, r) {
    await Promise.all(t.map((n) => this.set(n.key, n.content ?? n.value, r)));
  }
  setManySync(t, r) {
    t.forEach((n) => this.setSync(n.key, n.content ?? n.value, r));
  }
  async remove(t) {
    await oi(this.generateHash(t), { force: !0 });
  }
  removeSync(t) {
    ti(this.generateHash(t), { force: !0 });
  }
  async clear() {
    let t = await ni(this.cache_dir);
    await Promise.all(
      t.filter((r) => r.startsWith(this.prefix)).map((r) => oi(ne(this.cache_dir, r), { force: !0 }))
    );
  }
  clearSync() {
    Au(this.cache_dir).filter((t) => t.startsWith(this.prefix)).forEach((t) => ti(ne(this.cache_dir, t), { force: !0 }));
  }
  async getAll() {
    let t = Date.now(), r = await ni(this.cache_dir);
    return (await Promise.all(
      r.filter((i) => i.startsWith(this.prefix)).map((i) => ri(ne(this.cache_dir, i), "utf8"))
    )).map((i) => JSON.parse(i)).filter((i) => i.content && !this.isExpired(i, t));
  }
  async load() {
    return {
      files: (await this.getAll()).map((r) => ({
        path: this.generateHash(r.key),
        value: r.content,
        key: r.key
      }))
    };
  }
};
function Yt(e) {
  return new Jt(e);
}
o(Yt, "createFileSystemCache");

// src/common/utils/resolve-path-in-sb-cache.ts
import { join as mi } from "node:path";

// ../node_modules/find-cache-dir/index.js
var pi = A(si(), 1);
import zu from "node:process";
import oe from "node:path";
import qe from "node:fs";

// ../node_modules/pkg-dir/index.js
import Vu from "node:path";

// ../node_modules/pkg-dir/node_modules/find-up/index.js
import $e from "node:path";
import { fileURLToPath as $u } from "node:url";

// ../node_modules/locate-path/index.js
import Bu from "node:process";
import Du from "node:path";
import ai, { promises as $m } from "node:fs";
import { fileURLToPath as Mu } from "node:url";
var ci = {
  directory: "isDirectory",
  file: "isFile"
};
function Lu(e) {
  if (!Object.hasOwnProperty.call(ci, e))
    throw new Error(`Invalid type specified: ${e}`);
}
o(Lu, "checkType");
var Fu = /* @__PURE__ */ o((e, t) => t[ci[e]](), "matchType"), Uu = /* @__PURE__ */ o((e) => e instanceof URL ? Mu(e) : e, "toPath");
function Xt(e, {
  cwd: t = Bu.cwd(),
  type: r = "file",
  allowSymlinks: n = !0
} = {}) {
  Lu(r), t = Uu(t);
  let i = n ? ai.statSync : ai.lstatSync;
  for (let s of e)
    try {
      let a = i(Du.resolve(t, s), {
        throwIfNoEntry: !1
      });
      if (!a)
        continue;
      if (Fu(r, a))
        return s;
    } catch {
    }
}
o(Xt, "locatePathSync");

// ../node_modules/pkg-dir/node_modules/path-exists/index.js
import Km, { promises as Jm } from "node:fs";

// ../node_modules/pkg-dir/node_modules/find-up/index.js
var qu = /* @__PURE__ */ o((e) => e instanceof URL ? $u(e) : e, "toPath"), Wu = Symbol("findUpStop");
function Hu(e, t = {}) {
  let r = $e.resolve(qu(t.cwd) || ""), { root: n } = $e.parse(r), i = t.stopAt || n, s = t.limit || Number.POSITIVE_INFINITY, a = [e].flat(),
  c = /* @__PURE__ */ o((l) => {
    if (typeof e != "function")
      return Xt(a, l);
    let f = e(l.cwd);
    return typeof f == "string" ? Xt([f], l) : f;
  }, "runMatcher"), u = [];
  for (; ; ) {
    let l = c({ ...t, cwd: r });
    if (l === Wu || (l && u.push($e.resolve(r, l)), r === i || u.length >= s))
      break;
    r = $e.dirname(r);
  }
  return u;
}
o(Hu, "findUpMultipleSync");
function ui(e, t = {}) {
  return Hu(e, { ...t, limit: 1 })[0];
}
o(ui, "findUpSync");

// ../node_modules/pkg-dir/index.js
function li({ cwd: e } = {}) {
  let t = ui("package.json", { cwd: e });
  return t && Vu.dirname(t);
}
o(li, "packageDirectorySync");

// ../node_modules/find-cache-dir/index.js
var { env: Zt, cwd: Ku } = zu, fi = /* @__PURE__ */ o((e) => {
  try {
    return qe.accessSync(e, qe.constants.W_OK), !0;
  } catch {
    return !1;
  }
}, "isWritable");
function di(e, t) {
  return t.create && qe.mkdirSync(e, { recursive: !0 }), e;
}
o(di, "useDirectory");
function Ju(e) {
  let t = oe.join(e, "node_modules");
  if (!(!fi(t) && (qe.existsSync(t) || !fi(oe.join(e)))))
    return t;
}
o(Ju, "getNodeModuleDirectory");
function Qt(e = {}) {
  if (Zt.CACHE_DIR && !["true", "false", "1", "0"].includes(Zt.CACHE_DIR))
    return di(oe.join(Zt.CACHE_DIR, e.name), e);
  let { cwd: t = Ku(), files: r } = e;
  if (r) {
    if (!Array.isArray(r))
      throw new TypeError(`Expected \`files\` option to be an array, got \`${typeof r}\`.`);
    t = (0, pi.default)(r.map((i) => oe.resolve(t, i)));
  }
  if (t = li({ cwd: t }), !(!t || !Ju(t)))
    return di(oe.join(t, "node_modules", ".cache", e.name), e);
}
o(Qt, "findCacheDirectory");

// src/common/utils/resolve-path-in-sb-cache.ts
function hi(e, t = "default") {
  let r = Qt({ name: "storybook" });
  return r ||= mi(process.cwd(), ".cache", "storybook"), mi(r, t, e);
}
o(hi, "resolvePathInStorybookCache");

// src/telemetry/get-portable-stories-usage.ts
var yi = Yt({
  basePath: hi("portable-stories"),
  ns: "storybook",
  ttl: 24 * 60 * 60 * 1e3
  // 24h
}), Yu = /* @__PURE__ */ o(async (e) => {
  let t = "git grep -l composeStor" + (e ? ` -- ${e}` : ""), { stdout: r } = await Qo(t, {
    cwd: process.cwd(),
    shell: !0
  });
  return r.split(`
`).filter(Boolean).length;
}, "getPortableStoriesFileCountUncached"), gi = "portableStories", bi = /* @__PURE__ */ o(async (e) => {
  let t = await yi.get(gi);
  if (!t)
    try {
      t = { count: await Yu() }, await yi.set(gi, t);
    } catch (r) {
      t = { count: r.exitCode === 1 ? 0 : null };
    }
  return t.count;
}, "getPortableStoriesFileCount");

// src/telemetry/storybook-metadata.ts
var xi = {
  next: "Next",
  "react-scripts": "CRA",
  gatsby: "Gatsby",
  "@nuxtjs/storybook": "nuxt",
  "@nrwl/storybook": "nx",
  "@vue/cli-service": "vue-cli",
  "@sveltejs/kit": "sveltekit"
}, Si = /* @__PURE__ */ o((e) => z(e).replace(/\/dist\/.*/, "").replace(/\.[mc]?[tj]?s[x]?$/, "").replace(/\/register$/, "").replace(/\/manager$/,
"").replace(/\/preset$/, ""), "sanitizeAddonName"), rl = /* @__PURE__ */ o(async ({
  packageJson: e,
  mainConfig: t
}) => {
  let r = {
    generatedAt: (/* @__PURE__ */ new Date()).getTime(),
    hasCustomBabel: !1,
    hasCustomWebpack: !1,
    hasStaticDirs: !1,
    hasStorybookEslint: !1,
    refCount: 0
  }, n = {
    ...e?.dependencies,
    ...e?.devDependencies,
    ...e?.peerDependencies
  }, i = Object.keys(n).find((m) => !!xi[m]);
  if (i) {
    let { version: m } = await ke(i);
    r.metaFramework = {
      name: xi[i],
      packageName: i,
      version: m
    };
  }
  let s = [
    "playwright",
    "vitest",
    "jest",
    "cypress",
    "nightwatch",
    "webdriver",
    "@web/test-runner",
    "puppeteer",
    "karma",
    "jasmine",
    "chai",
    "testing-library",
    "@ngneat/spectator",
    "wdio",
    "msw",
    "miragejs",
    "sinon"
  ], a = Object.keys(n).filter(
    (m) => s.find((v) => m.includes(v))
  );
  r.testPackages = Object.fromEntries(
    await Promise.all(
      a.map(async (m) => [m, (await ke(m))?.version])
    )
  );
  let c = uo();
  c && (r.monorepo = c);
  try {
    let m = await (0, He.detect)({ cwd: Xu() }), v = await (0, He.getNpmVersion)(m);
    r.packageManager = {
      type: m,
      version: v
    };
  } catch {
  }
  r.hasCustomBabel = !!t.babel, r.hasCustomWebpack = !!t.webpackFinal, r.hasStaticDirs = !!t.staticDirs, typeof t.typescript == "object" && (r.
  typescriptOptions = t.typescript);
  let u = await so(t);
  typeof t.refs == "object" && (r.refCount = Object.keys(t.refs).length), typeof t.features == "object" && (r.features = t.features);
  let l = {};
  t.addons && t.addons.forEach((m) => {
    let v, I;
    typeof m == "string" ? v = Si(m) : (m.name.includes("addon-essentials") && (I = m.options), v = Si(m.name)), l[v] = {
      options: I,
      version: void 0
    };
  });
  let f = oo(e);
  f && (l.chromatic = {
    version: void 0,
    versionSpecifier: f,
    options: void 0
  }), (await St(l)).forEach(({ name: m, version: v }) => {
    l[m].version = v;
  });
  let g = Object.keys(l), p = Object.keys(n).filter((m) => m.includes("storybook") && !g.includes(m)).reduce((m, v) => ({
    ...m,
    [v]: { version: void 0 }
  }), {});
  (await St(p)).forEach(({ name: m, version: v }) => {
    p[m].version = v;
  });
  let h = n.typescript ? "typescript" : "javascript", x = !!n["eslint-plugin-storybook"], E = Qu(e);
  try {
    let { previewConfig: m } = E;
    if (m) {
      let v = await tl(m), I = !!(v.getFieldNode(["globals"]) || v.getFieldNode(["globalTypes"]));
      r.preview = { ...r.preview, usesGlobals: I };
    }
  } catch {
  }
  let T = p[E.frameworkPackage]?.version, C = await bi();
  return {
    ...r,
    ...u,
    portableStoriesFileCount: C,
    storybookVersion: T,
    storybookVersionSpecifier: E.version,
    language: h,
    storybookPackages: p,
    addons: l,
    hasStorybookEslint: x
  };
}, "computeStorybookMetadata"), We, wi = /* @__PURE__ */ o(async (e) => {
  if (We)
    return We;
  let t = await no(process.cwd()) || {}, r = (e || Zu(
    String(t?.scripts?.storybook || ""),
    "-c",
    "--config-dir"
  )) ?? ".storybook", n = await el({ configDir: r });
  return We = await rl({ mainConfig: n, packageJson: t }), We;
}, "getStorybookMetadata");

// src/telemetry/telemetry.ts
var _i = A(Pi(), 1);
import * as Ri from "node:os";

// ../node_modules/nanoid/index.js
import { randomFillSync as Ti } from "crypto";

// ../node_modules/nanoid/url-alphabet/index.js
var Ei = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";

// ../node_modules/nanoid/index.js
var nl = 128, N, H, ol = /* @__PURE__ */ o((e) => {
  !N || N.length < e ? (N = Buffer.allocUnsafe(e * nl), Ti(N), H = 0) : H + e > N.length && (Ti(N), H = 0), H += e;
}, "fillPool");
var ie = /* @__PURE__ */ o((e = 21) => {
  ol(e -= 0);
  let t = "";
  for (let r = H - e; r < H; r++)
    t += Ei[N[r] & 63];
  return t;
}, "nanoid");

// src/telemetry/anonymous-id.ts
import { relative as sl } from "node:path";
import { getProjectRoot as al } from "@storybook/core/common";
import { execSync as cl } from "child_process";

// src/telemetry/one-way-hash.ts
import { createHash as il } from "crypto";
var er = /* @__PURE__ */ o((e) => {
  let t = il("sha256");
  return t.update("storybook-telemetry-salt"), t.update(e), t.digest("hex");
}, "oneWayHash");

// src/telemetry/anonymous-id.ts
function ul(e) {
  return e.trim().replace(/#.*$/, "").replace(/^.*@/, "").replace(/^.*\/\//, "").replace(":", "/");
}
o(ul, "normalizeGitUrl");
var ze, Ii = /* @__PURE__ */ o(() => {
  if (ze)
    return ze;
  let e;
  try {
    let t = al(), r = sl(t, process.cwd()), n = cl("git config --local --get remote.origin.url", {
      timeout: 1e3,
      stdio: "pipe"
    });
    e = `${ul(String(n))}${r}`, ze = er(e);
  } catch {
  }
  return ze;
}, "getAnonymousProjectId");

// src/telemetry/event-cache.ts
import { cache as rr } from "@storybook/core/common";
var tr = Promise.resolve(), ll = /* @__PURE__ */ o(async (e, t) => {
  let r = await rr.get("lastEvents") || {};
  r[e] = { body: t, timestamp: Date.now() }, await rr.set("lastEvents", r);
}, "setHelper"), Ci = /* @__PURE__ */ o(async (e, t) => (await tr, tr = ll(e, t), tr), "set");
var fl = /* @__PURE__ */ o((e) => {
  let { body: t, timestamp: r } = e;
  return {
    timestamp: r,
    eventType: t?.eventType,
    eventId: t?.eventId,
    sessionId: t?.sessionId
  };
}, "upgradeFields"), dl = ["init", "upgrade"], pl = ["build", "dev", "error"], ki = /* @__PURE__ */ o((e, t) => {
  let r = t.map((n) => e?.[n]).filter(Boolean).sort((n, i) => i.timestamp - n.timestamp);
  return r.length > 0 ? r[0] : void 0;
}, "lastEvent"), ml = /* @__PURE__ */ o(async (e = void 0) => {
  let t = e || await rr.get("lastEvents") || {}, r = ki(t, dl), n = ki(t, pl);
  if (r)
    return !n?.timestamp || r.timestamp > n.timestamp ? fl(r) : void 0;
}, "getPrecedingUpgrade");

// src/telemetry/fetch.ts
var Oi = global.fetch;

// src/telemetry/session-id.ts
import { cache as Ai } from "@storybook/core/common";
var hl = 1e3 * 60 * 60 * 2, se;
var nr = /* @__PURE__ */ o(async () => {
  let e = Date.now();
  if (!se) {
    let t = await Ai.get("session");
    t && t.lastUsed >= e - hl ? se = t.id : se = ie();
  }
  return await Ai.set("session", { id: se, lastUsed: e }), se;
}, "getSessionId");

// src/telemetry/telemetry.ts
var yl = (0, _i.default)(Oi), gl = process.env.STORYBOOK_TELEMETRY_URL || "https://storybook.js.org/event-log", Ke = [], bl = /* @__PURE__ */ o(
(e, t) => {
  or[e] = t;
}, "addToGlobalContext"), xl = /* @__PURE__ */ o(() => {
  try {
    let e = Ri.platform();
    return e === "win32" ? "Windows" : e === "darwin" ? "macOS" : e === "linux" ? "Linux" : `Other: ${e}`;
  } catch {
    return "Unknown";
  }
}, "getOperatingSystem"), or = {
  inCI: !!process.env.CI,
  isTTY: process.stdout.isTTY,
  platform: xl(),
  nodeVersion: process.versions.node
}, Sl = /* @__PURE__ */ o(async (e, t, r) => {
  let { eventType: n, payload: i, metadata: s, ...a } = e, c = await nr(), u = ie(), l = { ...a, eventType: n, eventId: u, sessionId: c, metadata: s,
  payload: i, context: t };
  return yl(gl, {
    method: "post",
    body: JSON.stringify(l),
    headers: { "Content-Type": "application/json" },
    retries: 3,
    retryOn: [503, 504],
    retryDelay: /* @__PURE__ */ o((f) => 2 ** f * (typeof r?.retryDelay == "number" && !Number.isNaN(r?.retryDelay) ? r.retryDelay : 1e3), "\
retryDelay")
  });
}, "prepareRequest");
async function Gi(e, t = { retryDelay: 1e3, immediate: !1 }) {
  let { eventType: r, payload: n, metadata: i, ...s } = e, a = t.stripMetadata ? or : {
    ...or,
    anonymousId: Ii()
  }, c;
  try {
    c = Sl(e, a, t), Ke.push(c), t.immediate ? await Promise.all(Ke) : await c;
    let u = await nr(), l = ie(), f = { ...s, eventType: r, eventId: l, sessionId: u, metadata: i, payload: n, context: a };
    await Ci(r, f);
  } catch {
  } finally {
    Ke = Ke.filter((u) => u !== c);
  }
}
o(Gi, "sendTelemetry");

// src/telemetry/index.ts
var sg = /* @__PURE__ */ o((e) => e.startsWith("example-button--") || e.startsWith("example-header--") || e.startsWith("example-page--"), "i\
sExampleStoryId"), ag = /* @__PURE__ */ o(async (e, t = {}, r = {}) => {
  e !== "boot" && await lr();
  let n = {
    eventType: e,
    payload: t
  };
  try {
    r?.stripMetadata || (n.metadata = await wi(r?.configDir));
  } catch (i) {
    n.payload.metadataErrorMessage = ue(i).message, r?.enableCrashReports && (n.payload.metadataError = ue(i));
  } finally {
    let { error: i } = n.payload;
    i && (n.payload.error = ue(i)), (!n.payload.error || r?.enableCrashReports) && (process.env?.STORYBOOK_TELEMETRY_DEBUG && (ji.info(`
[telemetry]`), ji.info(JSON.stringify(n, null, 2))), await Gi(n, r));
  }
}, "telemetry");
export {
  bl as addToGlobalContext,
  rl as computeStorybookMetadata,
  ml as getPrecedingUpgrade,
  wi as getStorybookMetadata,
  sg as isExampleStoryId,
  xi as metaFrameworks,
  er as oneWayHash,
  Si as sanitizeAddonName,
  ag as telemetry
};
