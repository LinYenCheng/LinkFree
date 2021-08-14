function mostrar(e) {
  if (e.classList.contains("fa-moon-o")) {
    //se tem lua
    e.classList.remove("fa-moon-o"); //remove classe icone lua
    e.classList.add("fa-sun-o"); //coloca classedo sol
    e.style.color = "rgb(225, 225, 0)";
    document.body.style.background = "rgb(10, 10, 10)";
    document.querySelector("#userName").style.color = "#fff";

    let links = document.querySelectorAll(".link");
    // Pega apenas o primeiro do array
    links[0].style.filter = "grayscale(100%)";
    // pega todos
    for (let i = 0; i < links.length; i++) {
      links[i].style.filter = "grayscale(100%)";
    }

    let circulos = document.querySelectorAll(".circulo");
    // Pega apenas o primeiro do array
    circulos[0].style.filter = "grayscale(100%)";
    // pega todos
    for (let i = 0; i < circulos.length; i++) {
      circulos[i].style.filter = "grayscale(100%)";
    }
  } else {
    //senão
    e.classList.remove("fa-sun-o"); //remove classe icone lua
    e.classList.add("fa-moon-o"); //coloca classedo sol
    e.style.color = "#585858";
    document.body.style.background = "rgb(243, 242, 242)";
    document.querySelector("#userName").style.color = "rgb(99, 99, 99)";

    let links = document.querySelectorAll(".link");
    // Pega apenas o primeiro do array
    links[0].style.filter = "grayscale(0%)";
    // pega todos
    for (let i = 0; i < links.length; i++) {
      links[i].style.filter = "grayscale(0%)";
    }

    let circulos = document.querySelectorAll(".circulo");
    // Pega apenas o primeiro do array
    circulos[0].style.filter = "grayscale(0%)";
    // pega todos
    for (let i = 0; i < circulos.length; i++) {
      circulos[i].style.filter = "grayscale(0%)";
    }
  }
}

// link
if (/Line/.test(navigator.userAgent)) {
  location.href = location.href + "?openExternalBrowser=1";
}

// Google Tag Manager

setTimeout(() => {
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
      "gtm.start": new Date().getTime(),
      event: "gtm.js",
    });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", "GTM-W5LMXCR");

  var runningOnBrowser = typeof window !== "undefined";
  var isBot =
    (runningOnBrowser && !("onscroll" in window)) ||
    (typeof navigator !== "undefined" &&
      /(gle|ing|ro|msn)bot|crawl|spider|yand|duckgo/i.test(
        navigator.userAgent
      ));
  var supportsIntersectionObserver =
    runningOnBrowser && "IntersectionObserver" in window;
  function loadLikeCo() {
    //新增的 loadLikeCo() 函數
    (function () {
      var likeCo = document.createElement("script");
      likeCo.type = "text/javascript";
      likeCo.defer = true;
      likeCo.src = "//static.like.co/sdk/v1/button.js";
      (
        document.getElementsByTagName("head")[0] ||
        document.getElementsByTagName("body")[0]
      ).appendChild(likeCo);
    })();
  }

  if (!isBot && supportsIntersectionObserver) {
    var link_observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting) {
          loadLikeCo();
          link_observer.disconnect();
        }
      },
      { threshold: [0] }
    );
    link_observer.observe(document.getElementById("fb-root"));
  } else {
    loadLikeCo();
  }

  // lazyloadCSS
  function lazyloadCSS() {
    const a = document.createElement("link");
    a.rel = "stylesheet";
    a.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

    // const b = document.createElement('link');
    // b.rel = 'stylesheet';
    // b.href = 'fonts/basic_latin/mplus_webfonts.css';

    const z = document.getElementsByTagName("head")[0];
    z.parentNode.insertBefore(a, z);
    // z.parentNode.insertBefore(b, z);
  }

  const raf =
    requestAnimationFrame ||
    mozRequestAnimationFrame ||
    webkitRequestAnimationFrame ||
    msRequestAnimationFrame;
  if (raf) raf(lazyloadCSS);
  else window.addEventListener("load", lazyloadCSS);
  // lazyloadCSS
}, 2000);
