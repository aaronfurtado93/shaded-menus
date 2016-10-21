var shadedMenus;

(function () {
  "use strict";

  shadedMenus = {
    initialize: function (jsonData) {

      try {
        jsonData = JSON.parse(jsonData)
      } catch (e) {
        console.error("Enter valid JSON data");
        return;
      } finally {

      }

      var rootUl = document.getElementsByClassName("shaded-menu-bar");

      rootUl[0].innerHTML = "";

      this.parseLevel(rootUl[0], jsonData, 0)
    },
    parseLevel: function (parentUl, jsonData, level) {
      if (level <= 0) {
        if (jsonData.menuList && jsonData.menuList.length > 0) {
          for (var i = 0; i < jsonData.menuList.length; i++) {
            var _0li = document.createElement("li");
            _0li.innerText = "" + jsonData.menuList[i].title;
            if (jsonData.menuList[i].title) {
              parentUl.appendChild(_0li);
            }
          }
        }
      }
    },
  }

}());
