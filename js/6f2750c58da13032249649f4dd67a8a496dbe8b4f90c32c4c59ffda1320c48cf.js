! function() {
    "use strict";
    class t {
        constructor() {
            this.callbacks = [], window.addEventListener("DOMContentLoaded", (() => this.onDOMContentLoaded()))
        }
        onDOMContentLoaded() {
            this.callbacks.sort(((t, e) => t.priority - e.priority)).forEach((({
                callback: t
            }) => t()))
        }
        runOnLoad(t) {
            "loading" === document.readyState ? this.callbacks.push(t) : t.callback()
        }
    }
    const e = async t => {
            const o = t.classList.contains("animated"),
                r = () => window.requestAnimationFrame((() => t.style.animationPlayState = "running"));
            o && n(t) ? (await a(t), r()) : o ? r() : null != t.firstElementChild && e(t.firstElementChild)
        },
        n = t => {
            const e = t.getElementsByTagName("img").length > 0,
                n = t.getElementsByTagName("video").length > 0;
            return o(t) || e || n
        },
        o = t => {
            var e;
            return !!(null === (e = t.textContent) || void 0 === e ? void 0 : e.trim().length)
        },
        a = async t => {
            const e = [],
                n = t.getElementsByTagName("img");
            for (let t = 0; t < n.length; t++) {
                const o = n.item(t);
                e.push(r(o))
            }
            const a = t.getElementsByTagName("video");
            for (let t = 0; t < a.length; t++) {
                const n = a.item(t);
                e.push(i(n))
            }
            return o(t) && e.push(document.fonts.ready), Promise.all(e)
        },
        r = t => new Promise(((e, n) => {
            t.complete ? e() : (t.loading = "eager", t.onload = () => e(), t.onerror = () => n())
        })),
        i = t => new Promise(((e, n) => {
            t.readyState > 0 ? e() : (t.onloadeddata = () => e(), t.onerror = () => n())
        }));
    ! function(e, n = Number.MAX_VALUE) {
        var o;
        (window.canva_scriptExecutor = null !== (o = window.canva_scriptExecutor) && void 0 !== o ? o : new t).runOnLoad({
            callback: e,
            priority: n
        })
    }((() => {
        (() => {
            const t = document.querySelectorAll(".animation_container");
            if (0 === t.length) return;
            const n = new IntersectionObserver((t => {
                t.forEach((t => {
                    if (!t.isIntersecting) return;
                    const o = t.target;
                    e(o), n.unobserve(o)
                }))
            }), {
                threshold: .01
            });
            t.forEach((t => n.observe(t)))
        })()
    }))
}();