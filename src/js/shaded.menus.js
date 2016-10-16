var shadedMenus = {};

(function () {
  "use strict";

  shadedMenus = {
    hello: function () {
      alert("hello");
    },
    initialize: function (menuJson) {

      if (!menuJson) {
        menuJson = {
          "menuData": [
            {
              "title": "Menu 1",
              "menuData": [
                {
                  "title": "Menu 1-1",
                  "menuData": []
                },
                {
                  "title": "Menu 1-2",
                  "menuData": []
                },
                {
                  "title": "Menu 1-3",
                  "menuData": []
                }
              ]
            }
          ]
        }
      }

      window.addEventListener('ready', function () {
        var shadedMenuBar = document.getElementsByClassName('shaded-menu-bar');

        for (var i = 0; i < shadedMenuBar.length; i++) {
          console.log(shadedMenuBar[i]);
        }
      });

    },
  };
}());

shadedMenus.initialize();
