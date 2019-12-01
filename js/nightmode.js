function toggleNightMode() {
  if (document.getElementsByTagName("html")[0].style.backgroundColor === "rgb(45, 48, 44)") {
    document.getElementsByTagName("html")[0].style.backgroundColor = "#faf8ef";
    document.getElementsByTagName("body")[0].style.backgroundColor = "#faf8ef";
    if (typeof(Storage) !== "undefined") {
      localStorage['nightmode'] = "0";
    }
    return false;
  } else {
    document.getElementsByTagName("html")[0].style.backgroundColor = "#2D302C";
    document.getElementsByTagName("body")[0].style.backgroundColor = "#2D302C";
    if (typeof(Storage) !== "undefined") {
      localStorage['nightmode'] = "1";
    }
    return false;
  }
}

window.onload = function() {
  var a = document.getElementById("night");
  a.onclick = toggleNightMode;

  if (typeof(Storage) !== "undefined" && localStorage['nightmode'] == "1") {
    toggleNightMode();
  }
}
