let menu_items = document.getElementsByClassName("menu-item"); // Get all buttons from the menu

for (let i = 0; i < menu_items.length; i ++) {

    let clicked_item = menu_items[i];

    clicked_item.onclick = function () {

        for (let j = 0; j < menu_items.length; j ++) {

            let this_item = menu_items[j];

            if (this_item == clicked_item) {
                this_item.classList.add("selected-item")
                document.getElementById(this_item.id.replace("btn", "scrn")).style.display = "block";
            } else {
                this_item.classList.remove("selected-item");
                document.getElementById(this_item.id.replace("btn", "scrn")).style.display = "none";
            }
            
        }

    }

}