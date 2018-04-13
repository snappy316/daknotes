function closeDropdowns() {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}

function isDropdownTrigger(eTarget) {
  return (eTarget.matches('.dropdown-trigger') == true) || (eTarget.parentNode.matches('.dropdown-trigger') == true);
}

function dropdownTrigger(eTarget) {
  if (eTarget.matches('.dropdown-trigger') == true) {
    return eTarget;
  } else if (eTarget.parentNode.matches('.dropdown-trigger') == true) {
    return eTarget.parentNode;
  }
}

window.onclick = function(event) {
  if ((!isDropdownTrigger(event.target)) || (isDropdownTrigger(event.target) && (dropdownTrigger(event.target).nextSibling.classList.contains('show')))) {
    closeDropdowns();
  } else if (isDropdownTrigger(event.target)) {
    closeDropdowns();
    dropdownTrigger(event.target).nextSibling.classList.toggle('show');
  }
}
