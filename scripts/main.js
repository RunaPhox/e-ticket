var url = window.location.href

var currFile = url.substr(url.lastIndexOf('/') + 1)

var sidebar = document.getElementById('sidebar')
var currIcon = sidebar.querySelectorAll('[href="'+currFile+'"]')[0]
currIcon.id = "active-item"
