/* navbar start */
function navbarResponsive() {
    var x = document.getElementById("navBarDefault");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
  /* navbar end */