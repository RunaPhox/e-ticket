var saldo = 4132
var url = window.location.href

var currFile = url.substr(url.lastIndexOf('/') + 1)
if (currFile === 'inicio.html') {
	appendToUses()
}

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


function appendToUses() {
	var row = document.createElement('tr')

	var now = new Date()
	var date = document.createElement('td')
	date.textContent = now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear()
	row.appendChild(date)

	var time = document.createElement('td')
	time.textContent = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()
	row.appendChild(time)
	var trans = document.createElement('td')
	trans.textContent = 'Metro'
	row.appendChild(trans)
	var station = document.createElement('td')
	station.textContent = 'Ciudad Universitaria'
	row.appendChild(station)

	var cost = document.createElement('td')

	var amount = Math.floor(Math.random() * 7) + 1
	saldo -= amount
	document.getElementById('saldo').textContent = 'Bs. S. ' + saldo

	cost.textContent = amount + ' Bs. S.'
	row.appendChild(cost)

	document.getElementById('usos').insertBefore(row, document.getElementById('usos').firstChild)

	setTimeout(appendToUses, Math.floor(Math.random()*4500) + 2300)
}
