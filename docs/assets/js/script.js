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

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    document.getElementById('mode').click();
  }
}

