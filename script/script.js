document.getElementById("menuButton").addEventListener("click", function() {
  document.getElementById("menuContainer").style.display = "block";
});

document.getElementById("closeMenu").addEventListener("click", function() {
  document.getElementById("menuContainer").style.display = "none";
});

var menuItems = document.querySelectorAll(".menu li");
menuItems.forEach(function(item) {
  item.addEventListener("click", function() {
      document.getElementById("menuContainer").style.display = "none";
  });
});
