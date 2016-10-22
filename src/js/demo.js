(function() {
  'use strict';

  window.addEventListener("load", function (event) {
    var jsonData = document.getElementById("jsondata");

    jsonData.value = JSON.stringify({
      "menuList": [
        {
          "title": "menuItem 1",
          "menuList" : [
            {
              "title": "menu1 (I1)"
            },
            {
              "title": "menu1 (I2)"
            },
            {
              "title": "menu1 (I3)"
            }
          ]
        },
        {
          "title": "menuItem 2",
          "clickCallBack" : function () {
            console.log("You clicked " + this.title);
          }
        },
        {
          "title": "menuItem 3",
          "clickCallBack" : function () {
            console.log("You clicked " + this.title);
          }
        },
        {
          "title": "menuItem 4",
          "clickCallBack" : function () {
            console.log("You clicked " + this.title);
          }
        },
        {
          "title": "menuItem 5",
          "clickCallBack" : function () {
            console.log("You clicked " + this.title);
          }
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
