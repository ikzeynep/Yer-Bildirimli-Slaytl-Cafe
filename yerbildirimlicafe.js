function openMenu(item) {
	// Var to Store Current Tab
	var viewingIndex;

	// Find all Menu Item Detail and Hide Them
	var menuItems = document.getElementsByClassName("menu-item");
	for (viewingIndex = 0; viewingIndex < menuItems.length; viewingIndex++) {
		menuItems[viewingIndex].style.display = "none";
	}

	// Display Clicked Item
	document.getElementById(item).style.display = "block";
}
