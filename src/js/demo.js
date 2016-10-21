(function() {
  'use strict';

  window.addEventListener("load", function (event) {
    var jsonData = document.getElementById("jsondata");

    jsonData.value = JSON.stringify({
      "menuList": [
        {
          "title": "menuItem 1"
        },
        {
          "title": "menuItem 2"
        },
        {
          "title": "menuItem 3"
        },
        {
          "title": "menuItem 4"
        }
      ]
    });

    shadedMenus.initialize(jsonData.value);

    jsonData.addEventListener("keyup", function (event) {
      var json = jsonData.value;

      shadedMenus.initialize(json);
    });
  })
}());
