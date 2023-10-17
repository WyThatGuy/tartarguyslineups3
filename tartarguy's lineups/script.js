function lookTo(map) {
	setTimeout(function () {
		window.scroll(0, findPosition(document.getElementById(map))[0]-61)
	}, 1);
	function findPosition(obj) {
		var currenttop = 0;
		if (obj.offsetParent) {
			do {
				currenttop += obj.offsetTop;
			} while ((obj = obj.offsetParent));
			return [currenttop];
		}
	}
}

function closerLook(img) {
	if (!document.getElementById(img).classList.contains("fullscreen")) {
		document.getElementById(img).classList.remove("normalized")
		document.getElementById(img).classList.add("fullscreen")
	} else {
		document.getElementById(img).classList.remove("fullscreen")
		document.getElementById(img).classList.add("normalized")
	}
}

window.onbeforeunload = function(event) {
	window.location.href = window.location.href.split("#")[0]
  event.returnValue = "";
  window.location.href = window.location.href.split("#")[0]
};

function toggleFavorite(lineup) {
	if (window.localStorage.getItem(lineup) == null) {
		window.localStorage.setItem(lineup, "favorite")
	} else {
		window.localStorage.removeItem(lineup)
	}
}

window.onload = function () {
	if (window.location.href.includes("#")) {
		lookTo(window.location.href.split("#")[window.location.href.split('#').length-1].toLowerCase())
	}
	document.getElementById("repeatLeft").style.height = window.scrollY + document.getElementById("sunset").getBoundingClientRect().bottom-40 + "px"
	document.getElementById("repeatRight").style.height = window.scrollY + document.getElementById("sunset").getBoundingClientRect().bottom-40 + "px"
	document.getElementById("repeatMidL").style.height = window.scrollY + document.getElementById("sunset").getBoundingClientRect().bottom-40 + "px"
	document.getElementById("repeatMidR").style.height = window.scrollY + document.getElementById("sunset").getBoundingClientRect().bottom-40 + "px"
}

window.onresize = function () {
	document.getElementById("repeatLeft").style.height = window.scrollY + document.getElementById("sunset").getBoundingClientRect().bottom-40 + "px"
	document.getElementById("repeatRight").style.height = window.scrollY + document.getElementById("sunset").getBoundingClientRect().bottom-40 + "px"
	document.getElementById("repeatMidL").style.height = window.scrollY + document.getElementById("sunset").getBoundingClientRect().bottom-40 + "px"
	document.getElementById("repeatMidR").style.height = window.scrollY + document.getElementById("sunset").getBoundingClientRect().bottom-40 + "px"
}
	const copy = async (text) => {
		document.getElementById(text).classList.remove("fadeOut")
		document.getElementById(text).style.opacity = "1";
		setTimeout(function () {
			document.getElementById(text).classList.add("fadeOut");
			document.getElementById(text).style.opacity = "0"
		}, 5000)
		try {
		  await navigator.clipboard.writeText(window.location.href.split("#")[0] + "#" + text);
		  console.log('Content copied to clipboard');
		} catch (err) {
		  console.error('Failed to copy: ', err);
		}
	  }