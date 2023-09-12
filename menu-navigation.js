let menu_items = document.getElementsByClassName("menu-item"); // Get all buttons from the menu

// Loop through all menu items to write a function for what happens when clicked
for (let i = 0; i < menu_items.length; i ++) {

    let clicked_item = menu_items[i]; // The menu item clicked on

    // Loop through all menu items
    clicked_item.onclick = function () {

        for (let j = 0; j < menu_items.length; j ++) {

            // Each item in loop
            let this_item = menu_items[j];

            if (this_item == clicked_item) {
                this_item.classList.add("selected-item")    // For clicked item add the class "selected-item"
                document.getElementById(this_item.id.replace("btn", "scrn")).style.display = "block";   // And display the relative page content
            } else {
                this_item.classList.remove("selected-item");    // For all other items, remove the class
                document.getElementById(this_item.id.replace("btn", "scrn")).style.display = "none";    // And hide the content
            }

        }

    }

}