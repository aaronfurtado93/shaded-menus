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
      // Check if list is present
      if (jsonData.menuList && jsonData.menuList.length > 0) {
        // iterate over the list
        for (var i = 0; i < jsonData.menuList.length; i++) {

          // check if menu title is present
          if (jsonData.menuList[i].title) {
            // create list item to append
            var li = document.createElement("li");

            // Add menu title to list item
            li.innerText = jsonData.menuList[i].title;

            // Check level and perform additional actions.
            if (level <= 0) {
              li.classList.add("shaded-menu-bar-root");
            }

            li.addEventListener("click", function (event) {
              console.log("You clicked");
            })

            if (typeof jsonData.menuList[i].clickCallBack === "function") {
              li.addEventListener("click", jsonData.menuList[i].clickCallBack)
            }

            // Add list item to parent
            parentUl.appendChild(li);
          }
        }
      }
    },
  }

}());
