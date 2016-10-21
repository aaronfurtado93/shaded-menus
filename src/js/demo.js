(function() {
  'use strict';

  window.addEventListener("load", function (event) {
    var jsonData = document.getElementById("jsondata");

    jsonData.addEventListener("keyup", function (event) {
      var json = jsonData.value;

      shadedMenus.initialize(json)
    });
  })
}());
