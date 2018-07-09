var url = window.location.href

var currFile = url.substr(url.lastIndexOf('/') + 1)

var sidebar = document.getElementById('sidebar')
var currIcon = sidebar.querySelectorAll('[href="'+currFile+'"]')[0]
currIcon.id = 'active-item'

var allIcons = sidebar.getElementsByClassName('item')

var div = []
for (var i = 0; i < allIcons.length; ++i) {
	div.push(document.createElement('div'))
	var rect = allIcons[i].getBoundingClientRect()
	div[i].style.cssText = 'position:fixed;color:#7aa5ff;background-color:#00000055;font-size:24px;right:85px;top:' + (rect.y - 3) + 'px;padding:6px;border:2px solid #383a62;opacity:0;transition:opacity 0.3s;'
	allIcons[i].onmouseover = function() {
		for (var i = 0; i < div.length; ++i) {
			if (div[i].textContent == this.textContent) {
				div[i].style.opacity = 1
			}
		}
	}

	allIcons[i].onmouseout = function() {
		for (var i = 0; i < div.length; ++i) {
			if (div[i].textContent == this.textContent) {
				div[i].style.opacity = 0
			}
		}
	}
	div[i].textContent = allIcons[i].getElementsByClassName('menu-desc')[0].textContent
	document.getElementById('sidebar').appendChild(div[i])
}
