/*  Create --
 *********************************************************
 *                                                       *
 *                         --                            *
 *                       : || :                          *
 *                         ||                            *
 *                         ||                            *
 *                         ||                            *
 *                     . - || - .                        *
 *                    (    ||    )                       *
 *                     ) ( || ) (                        *
 *                    /    ||    \                       *
 *                   (     ||     )                      *
 *                    \    --    /                       *
 *                     \ ______ /                        *
 *                                                       *
 *               Jefferson Jimenez (JJJT)                *
 *                 Cabimas - Venezuela                   *
 *                                                       *
 *                                                       *
 *                                                       *
 *                                                       *
 *********************************************************
 */
BootstrapDatatable = class e {
    constructor(e) {
      let t,
        l,
        s,
        n,
        a,
        o,
        d,
        r,
        c = 1,
        f = (e, t) => {
          let l = document.createElement(t);
          "script" == t ? (l.src = e) : ((l.href = e), (l.rel = "stylesheet")),
            document.head.appendChild(l);
        };
      f(
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css",
        "link"
      ),
        f("https://unpkg.com/tooltips-jjjt@1.0.0/dist/tooltips-jjjt.css", "link"),
        f("https://unpkg.com/xlsx@0.15.1/dist/xlsx.full.min.js", "script"),
        (o = void 0 == e.view_page ? 10 : e.view_page),
        (d = void 0 == e.view_page ? 10 : e.view_page);
      let u = e.url,
        p = (e) => {
          let t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
            l = "";
          for (let s = 0; s < e; s++)
            l += t.charAt(Math.floor(Math.random() * t.length));
          return l;
        },
        v = e.th_column,
        h = document.querySelector("#" + e.id_div),
        y = void 0 == e.clase ? "" : e.clase,
        $ = p(12),
        b = p(12),
        j = p(12),
        g = p(12),
        m = p(12),
        _ = p(12),
        L = p(12),
        w = p(12),
        E = p(12),
        T = p(12),
        S = p(12),
        q = p(12),
        k = p(12),
        A = p(12);
      h.innerHTML =
        '<table id="' +
        $ +
        '" class="table mt-2 ' +
        y +
        '"><div class="row align-items-start"><div class="row col"><div class="col-2"><div class="dropdown"><button class="btn btn-light dropdown-toggle" type="button" id="' +
        b +
        '">' +
        o +
        '</button><ul class="dropdown-menu fs-6 text-center ' +
        E +
        '" style="min-width:3.5rem" role="button"><li>5</li><li>10</li><li>15</li><li>25</li><li>50</li><li>All</li></ul></div></div><div class="col-1 d-none" id="' +
        j +
        '"><i class="fa fa-square-plus text-success fs-1 ' +
        A +
        '" role="button"></i></div></div><div class="col fs-3 d-flex justify-content-center"><div class="row align-items-center"><div class="col-3"><i class="fa fa-caret-left" id="' +
        g +
        '" role="button"></i></div><div class="col-1 d-flex justify-content-center"><span id="' +
        m +
        '"></span></div><div class="col-3 d-flex justify-content-end"><i class="fa fa-caret-right" id="' +
        _ +
        '" role="button"></i></div></div></div><div class="col d-flex justify-content-end"><input id="' +
        L +
        '" class="form-control w-50" placeholder="Busque"></div></div><thead></thead><tbody></tbody></table><div class="row"><div class="col"><span class="text-muted ' +
        k +
        '"></span></div><div class="col" id="' +
        w +
        '"><div class="row"><div class="col d-flex justify-content-end text-muted"><span class="fs-5">EXPORT</span><div class="jjjt-tooltip"><i class="fa fa-print fs-3 ms-2 ' +
        q +
        '" data-type="print" role="button"></i><span class="jjjt-tooltip-text">PRINT</span></div><div class="jjjt-tooltip"><i class="fab fa-node-js fs-3 ms-2 ' +
        q +
        '" data-type="json" role="button"></i><span class="jjjt-tooltip-text">JSON</span></div><div class="jjjt-tooltip"><i class="far fa-file-excel fs-3 ms-2 ' +
        q +
        '" data-type="excel" role="button"></i><span class="jjjt-tooltip-text">EXCEL</span></div><div class="jjjt-tooltip"><i class="fa fa-file-csv fs-3 ms-2 ' +
        q +
        '" data-type="csv" role="button"></i><span class="jjjt-tooltip-text">CSV</span></div><div class="jjjt-tooltip"><i class="fa fa-database fs-3 ms-2 ' +
        q +
        '" data-type="sql" role="button"></i><span class="jjjt-tooltip-text">SQL</span></div></div></div></div></div><p class="text-center text-muted ' +
        T +
        ' d-none"><i class="fa fa-refresh fa-spin fs-1"></i></p>';
      let H = document.getElementById($),
        M = document.getElementById(b),
        B = document.getElementById(j),
        C = document.getElementById(g),
        I = document.getElementById(m),
        N = document.getElementById(_),
        R = document.getElementById(L),
        P = document.getElementById(w);
      P.classList.add("d-none"),
        void 0 != e.id_btn_add &&
          e.id_btn_add &&
          (B.classList.remove("d-none"),
          (document.querySelector("." + A).id = e.id_btn_add)),
        (t = document.querySelector("#" + $ + " tbody")),
        (l = document.querySelector("#" + $ + " thead")),
        (a = "<tr>");
      for (let J = 0; J < v.length; J++)
        a +=
          '<th><div class="row justify-content-evenly"><div class="col-9">' +
          v[J] +
          '</div><div class="col-1" style="color:#c0c0c0;"><i class="fa fa-caret-down ' +
          S +
          '" role="button"></i></div></div></th>';
      (a += "</tr>"),
        (l.innerHTML = a),
        document.querySelector("." + T).classList.remove("d-none"),
        fetch(u)
          .then((e) => e.json())
          .then(function (t) {
            (n = s = void 0 == e.JsonReturn ? t : t[e.JsonReturn]),
              V(),
              document.querySelector("." + T).classList.add("d-none"),
              (r = !1),
              document
                .querySelectorAll("#" + $ + " thead tr th")
                .forEach((e, t) => {
                  e.addEventListener("click", () => {
                    let l = e.childNodes[0].lastChild.childNodes[0];
                    l.className == "fa fa-caret-down " + S
                      ? ((r = !1),
                        X(t),
                        l.classList.replace("fa-caret-down", "fa-caret-up"))
                      : ((r = !0),
                        X(t),
                        l.classList.replace("fa-caret-up", "fa-caret-down"));
                  });
                }),
              N.addEventListener("click", F, !1),
              C.addEventListener("click", D, !1),
              M.addEventListener("click", () => {
                document.querySelector("." + E).classList.toggle("show");
              }),
              R.addEventListener("focus", () => {
                (R.style.boxShadow = "0 0 1px #999999"),
                  (R.style.outline = "0 none");
              }),
              document.querySelectorAll("." + E + " li").forEach(function (e) {
                e.addEventListener("click", function (t) {
                  let l = e.innerHTML;
                  void 0 != l &&
                    ((c = 1),
                    (I.innerHTML = c),
                    (M.innerHTML = l),
                    (o = "All" == l ? 9e6 : l),
                    V()),
                    document.querySelector("." + E).classList.toggle("show");
                });
              }),
              M.addEventListener("focus", () => {
                (M.style.boxShadow = "0 0 1px #999999"),
                  (M.style.outline = "0 none");
              }),
              (I.innerHTML = 1),
              R.addEventListener("keyup", (e) => {
                O(e);
              }),
              document.querySelectorAll("." + q).forEach(function (t) {
                t.addEventListener("click", function () {
                  if ("csv" == t.dataset.type) {
                    let l = document.createElement("a"),
                      n = encodeURI(
                        "data:text/csv;charset=utf-8," +
                          s.map((e) => e.join("|")).join("\n")
                      );
                    l.setAttribute("href", n),
                      l.setAttribute("download", e.id_div + ".csv"),
                      document.body.appendChild(l),
                      l.click(),
                      document.body.removeChild(l);
                  } else if ("json" == t.dataset.type) {
                    let a = document.createElement("a");
                    a.setAttribute(
                      "href",
                      "data:application/json;charset=utf-8," +
                        encodeURIComponent(JSON.stringify(s, null, 4))
                    ),
                      a.setAttribute("download", e.id_div + ".json"),
                      document.body.appendChild(a),
                      a.click(),
                      document.body.removeChild(a);
                  } else if ("sql" == t.dataset.type) {
                    let r = "INSERT INTO `TABLA` (";
                    for (let f = 0; f < v.length; f++) r += "`" + v[f] + "`,";
                    for (
                      r = r.trim().substring(0, r.length - 1),
                        r += ") VALUES ",
                        i = 0;
                      i < s.length;
                      i++
                    ) {
                      for (r += "(", x = 0; x < s[i].length; x++)
                        r += '"' + s[i][x] + '",';
                      (r = r.trim().substring(0, r.length - 1)), (r += "),");
                    }
                    (r = r.trim().substring(0, r.length - 1)), (r += ";");
                    let u = document.createElement("a"),
                      p = encodeURI("data:application/sql;charset=utf-8," + r);
                    u.setAttribute("href", p),
                      u.setAttribute("download", e.id_div + ".sql"),
                      document.body.appendChild(u),
                      u.click(),
                      document.body.removeChild(u);
                  } else if ("excel" == t.dataset.type)
                    (c = 1),
                      (o = 9e6),
                      V(),
                      Q($, e.id_div),
                      (o = d),
                      V(),
                      (I.innerHTML = c);
                  else {
                    (c = 1),
                      (o = 9e6),
                      V(),
                      (H.style.border = "double"),
                      (H.cellPadding = "3");
                    let h = window.open("");
                    h.document.write(H.outerHTML),
                      h.print(),
                      h.close(),
                      (H.style.border = ""),
                      (H.cellPadding = ""),
                      (o = d),
                      V(),
                      (I.innerHTML = c);
                  }
                });
              });
          });
      let O = (e) => {
          let t = [];
          (c = 1), (I.innerHTML = c);
          let l = e.target.value.toLowerCase();
          l
            ? ((n = t =
                s.filter((e) =>
                  Object.values(e).some((e) =>
                    String(e).toLowerCase().includes(l)
                  )
                )),
              V())
            : ((n = s), V());
        },
        V = () => {
          let e = n.filter((e, t) => {
              let l = (c - 1) * o,
                s = c * o;
              if (t >= l && t < s) return !0;
            }),
            l = "";
          for (let s = 0; s < e.length; s++) {
            var a = e[s];
            for (let d in ((l += "<tr>"), a)) l += "<td>" + a[d] + "</td>";
            l += "</tr>";
          }
          (t.innerHTML = l), P.classList.remove("d-none");
          let r = e.length < o ? c : Math.ceil(n.length / e.length);
          document.querySelector("." + k).innerHTML =
            n.length > 0
              ? "pagina " +
                c +
                " de " +
                r +
                " mostrando " +
                e.length +
                " registros de " +
                n.length
              : "No existen registros que mostrar";
        },
        X = (e) => {
          n.sort((t, l) => {
            if (Array.isArray(t) || Array.isArray(l)) {
              if (t[e] < l[e]) return r ? 1 : -1;
              if (t[e] > l[e]) return r ? -1 : 1;
            } else {
              let s = t,
                n = [];
              for (let a in s) {
                let o = s[a];
                n.push(o);
              }
              let d = l,
                c = [];
              for (let f in d) {
                let u = d[f];
                c.push(u);
              }
              if (n[e] < c[e]) return r ? 1 : -1;
              if (n[e] > c[e]) return r ? -1 : 1;
            }
            return 0;
          }),
            V();
        },
        D = () => {
          c > 1 && c--, V(), (I.innerHTML = c);
        },
        F = () => {
          c * o < n.length && c++, V(), (I.innerHTML = c);
        },
        Q = (e, t) => {
          let l = "xlsx",
            s = document.getElementById(e);
          var n = XLSX.utils.table_to_book(s, { sheet: "Tabla" });
          XLSX.write(n, { bookType: l, bookSST: !0, type: "base64" }),
            XLSX.writeFile(n, t + "." + l);
        };
    }
  };  