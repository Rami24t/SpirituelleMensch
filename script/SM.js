function GetCookie(name) {
	var arg = name + "=";
	var aleng = arg.length;
	var cleng = document.cookie.length;
	var i = 0;
	while (i < cleng) {
		var j = i + aleng;
		if (document.cookie.substring(i, j) == arg)
			return "vorhanden"; //vorhanden
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break;
	}
	return null; //nicht hier
}
function testFirstCookie() {
	var offset = new Date().getTimezoneOffset();
	if ((offset >= -180) && (offset <= 0)) {		// in EU
		var visit = GetCookie("SMcookieEinwilligungsCookie");
		if (visit == null) {
			$("#meineCookieZustimmung").fadeIn(400);	// warnung anzeigen
		} else {
			// Acceptiert schon
		}
	}
}	// nicht in EU 
$(document).ready(function () {

	var fileName = location.href.split("/").slice(-1);

	/* function clearBody() {
		$("body")[0].children[2].remove();
		$("body")[0].children[2].remove();
		if(fileName[0]=="")
		    $("body")[0].children[2].remove();
		else
        	$("body")[0].children[1].remove();
	}
	clearBody(); */

{
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
if(currentScrollPos>1200)
{
      if ( (prevScrollpos > currentScrollPos) || (currentScrollPos > 8480) ) {
        document.getElementById("nachoben").style.opacity = "0.45";
      }
            else {
        document.getElementById("nachoben").style.opacity = "0.1";
      }
      prevScrollpos = currentScrollPos;
}
else
document.getElementById("nachoben").style.opacity = "0";
			return false;
}
}

	$("#cookieButton").click(function () {
		console.log('Einverstanden');
		var expire = new Date();
		expire = new Date(expire.getTime() + 7776000000); //3 Monaten in milliseconden 
		document.cookie = "SMcookieEinwilligungsCookie=vorhanden; expires=" + expire;
		$("#meineCookieZustimmung").hide(400);
	});
	testFirstCookie();



	$('a.mail').on('click', function () {
		var href = $(this).attr('href');
		$(this).attr('href', href.replace('yahoo.', 'gma' /*this is a java script code that-*/ + 'il.'));
		href = $(this).attr('href');
		$(this).attr('href', href.replace('youa', 'ra' /*-uses Jquery and it is named:-*/ + 'mi'));
		href = $(this).attr('href');
		$(this).attr('href', href.replace('rcool', 'ssa' /*myMailer!*/ + 'adi'));
	});

	$('#nachoben,.nachoben2').click(function () {
		$('html,body').animate({ scrollTop: 0 }, 600);
	});


	if (fileName[0] == "About" || fileName[0] == "" || fileName[0] == "Buddha") {
		class TextScramble {
			constructor(el) {
				this.el = el
				this.chars = '!<>-_\\/[]{}—=+*^?#________WakeupNeoTheMatrixhasyouSearching...realdream'
				this.update = this.update.bind(this)
			}
			setText(newText) {
				const oldText = this.el.innerText
				const length = Math.max(oldText.length, newText.length)
				const promise = new Promise((resolve) => this.resolve = resolve)
				this.queue = []
				for (let i = 0; i < length; i++) {
					const from = oldText[i] || ''
					const to = newText[i] || ''
					const start = Math.floor(Math.random() * 40)
					const end = start + Math.floor(Math.random() * 40)
					this.queue.push({
						from,
						to,
						start,
						end
					})
				}
				cancelAnimationFrame(this.frameRequest)
				this.frame = 0
				this.update()
				return promise
			}
			update() {
				let output = ''
				let complete = 0
				for (let i = 0, n = this.queue.length; i < n; i++) {
					let {
						from,
						to,
						start,
						end,
						char
					} = this.queue[i]
					if (this.frame >= end) {
						complete++
						output += to
					} else if (this.frame >= start) {
						if (!char || Math.random() < 0.28) {
							char = this.randomChar()
							this.queue[i].char = char
						}
						output += `<span class="dud">${char}</span>`
					} else {
						output += from
					}
				}
				this.el.innerHTML = output
				if (complete === this.queue.length) {
					this.resolve()
				} else {
					this.frameRequest = requestAnimationFrame(this.update)
					this.frame++
				}
			}
			randomChar() {
				return this.chars[Math.floor(Math.random() * this.chars.length)]
			}
		}
		// —————————————————————————————————————————————————— //
		function GetCookie(name) {
			var arg = name + "=";
			var aleng = arg.length;
			var cleng = document.cookie.length;
			var i = 0;
			while (i < cleng) {
				var j = i + aleng;
				if (document.cookie.substring(i, j) == arg) {
					var decodedCookie = decodeURIComponent(document.cookie);
					var ca = decodedCookie.split(';');
					for (i = 0; i < ca.length; i++) {
						var c = ca[i];
						while (c.charAt(0) == ' ') {
							c = c.substring(1);
						}
						if (c.indexOf(arg) == 0) {
							return c.substring(arg.length, c.length);
						}
					}
					return "";
				}
				i = document.cookie.indexOf(" ", i) + 1;
				if (i == 0) break;
			}
			return null; //nicht hier
		}
		var visit = GetCookie("enteredName");
		var neo = '', nNeo = "";
		if (visit == null || visit == "") {
			nNeo = prompt("Bitte geben Sie Ihren Vornamen ein:", "");
			if (nNeo != null && nNeo != "") {
				var expire = new Date();
				expire = new Date(expire.getTime() + 5184000); // 1 Tag in milliseconden 
				document.cookie = "enteredName=" + nNeo + "; expires=" + expire;
			}
		}
		else
			nNeo = visit;
		if (nNeo != null && nNeo != "") {
			neo = nNeo;
		}
		else {
			getAName = function () {
				var names = new Array("Stefan", "Erdling", "Neo", "Alireza", "Anette", "Christoph", "Felix", "Jad", "Katharina", "Liubov", "Mensch", "Mahdi", "Martina", "Nadine", "Nick", "Oliver", "Pascale", "Rami", "Sarah", "Linda", "Felix", "Rudi", "Katharina", "Stefan");
				var rand = Math.floor(Math.random() * names.length);
				return (names[rand]);
			}
			neo = getAName();
		}
		const phrases = [
			'S',
			'Serchn.',
			'Suchen..',
			'Suchen...',
			'Wakh auf,',
			'Wach auf, ' + neo + '...',
			'D',
			'D',
			'Di ',
			'Die',
			'DieM ',
			'Die M',
			'Die Mt',
			'Die Mta',
			'Die Mat',
			'The Matr',
			'Die Matrx',
			'Die Matrxi',
			'Die Matrix',
			'Die Matrixh ',
			'Die Matrix ha',
			'Die Matrix hat',
			'Dhe Matrix hatd ',
			'Die Matrix hat d',
			'Die Matrix has di',
			'Die Matrix hat dic',
			'Tie Matrix hat yich',
			'Die Matrix has dich.',
			'Die Matrix hat dich..',
			'Die Matrix hat dich...',
			'Die Matrix hat dich...',
			'"Das Reale wird',
			'"Das Reale wird durch Zeichen',
			'wird durch Zeichen des Realen ',
			'Zeichen des Realen ersetzt", J.B.'
		]
		const el = document.querySelector('.text')
		const fx = new TextScramble(el)
		let counter = 0
		const next = () => {
			fx.setText(phrases[counter]).then(() => {
				setTimeout(next, 800)
			})
			counter = (counter + 1) % phrases.length
		}
		next();
	}

	function navigateLeft() {
		if (fileName[0] == "")
			window.location.href = './About';
		else if (fileName[0] == "Buddha")
			window.location.href = './Plato';
		else if (window.location.href.includes('/Rumi'))
			window.location.href = './';
		else if (window.location.href.includes('Plato'))
			window.location.href = './Rumi';
		else if (window.location.href.includes('./Buddha'))
			window.location.href = './Plato';
		else if (window.location.href.includes('/Socrates'))
			window.location.href = './Buddha';
		else if (window.location.href.includes('/SMRKontaktFormular'))
			window.location.href = './Socrates';
		else if (window.location.href.includes('/DSE'))
			window.location.href = './SMRKontaktFormular';
		else
			window.location.href = './DSE';
		return false;
	}

	function navigateRight() {
		if (fileName[0] == "")
			window.location.href = './Rumi';
		else if (fileName[0] == "Buddha")
			window.location.href = './Socrates';
		else if (window.location.href.includes('/Rumi'))
			window.location.href = './Plato';
		else if (window.location.href.includes('Plato'))
			window.location.href = './Buddha';
		else if (window.location.href.includes('/Buddha'))
			window.location.href = './Socrates';
		else if (window.location.href.includes('/Socrates'))
			window.location.href = './SMRKontaktFormular';
		else if (window.location.href.includes('/SMRKontaktFormular'))
			window.location.href = './DSE';
		else if (window.location.href.includes('/DSE'))
			window.location.href = './About';
		else
			window.location.href = './';
		return false;
	}

	function swipedetect(el, callback) {
		let touchsurface = el,
			swipedir,
			startX,
			startY,
			distX,
			distY,
			threshold = 75, //required min distance traveled to be considered swipe
			restraint = 60, // maximum distance allowed at the same time in perpendicular direction
			allowedTime = 400, // maximum time allowed to travel that distance
			elapsedTime,
			startTime,
			handleswipe = callback || function (swipedir) { }

		touchsurface.addEventListener('touchstart', function (e) {
			let touchobj = e.changedTouches[0]
			swipedir = 'none'
			dist = 0
			startX = touchobj.pageX
			startY = touchobj.pageY
			startTime = new Date().getTime() // record time when finger first makes contact with surface
		}, false)

		touchsurface.addEventListener('touchend', function (e) {
			var touchobj = e.changedTouches[0]
			distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
			distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
			elapsedTime = new Date().getTime() - startTime // get time elapsed
			if (elapsedTime <= allowedTime) { // first condition for awipe met
				if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) { // 2nd condition for horizontal swipe met
					swipedir = (distX < 0) ? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
				}
				else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) { // 2nd condition for vertical swipe met
					swipedir = (distY < 0) ? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
				}
			}
			handleswipe(swipedir)
		}, false)
	};

	{
		let all = document.getElementById('all')
		swipedetect(all, function (swipedir) {
			if (swipedir == 'left')
				navigateRight();
			else if (swipedir == 'right')
				navigateLeft();
			return false;
		})
	};

	document.addEventListener('keydown', function (event) {
		pressedKey = event.keyCode;
		console.log(pressedKey);
  let fieldItem = $('body form fieldset *');
  if(!(fieldItem.is(':focus')))
		switch (event.keyCode) {
			case 37:
				navigateLeft();
				break;
			case 39:
				navigateRight();
				break;
			case 72:
				window.location.href = './';
				break;
			case 66:
				window.location.href = './Buddha';
				break;
			case 82:
				window.location.href = './Rumi';
				break;
			case 80:
				window.location.href = './Plato';
				break;
			case 83:
				window.location.href = './Socrates';
				break;
			case 75:
				window.location.href = './SMRKontaktFormular';
				break;
			case 65:
				window.location.href = './About';
				break;
		}
	});


	function removejscssfile(filename, filetype) {
		var targetelement = (filetype == "js") ? "script" : (filetype == "css") ? "link" : "none" //determine element type to create nodelist from
		var targetattr = (filetype == "js") ? "src" : (filetype == "css") ? "href" : "none" //determine corresponding attribute to test for
		var allsuspects = document.getElementsByTagName(targetelement)
		for (var i = allsuspects.length; i >= 0; i--) { //search backwards within nodelist for matching elements to remove
			if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) != null && allsuspects[i].getAttribute(targetattr).indexOf(filename) != -1)
				allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
		}
		return false;
	};

	// removejscssfile("https://a.opmnstr.com/app/js/api.min.js", "js");
	// removejscssfile("https://static.doubleclick.net/instream/ad_status.js", "js");


	$(".c-yr").append(" - " + new Date().getFullYear() + " ");

	// $('header figure').style="position: relative";
	// $('header figure').append('<video autoplay muted loop id="top-video"><source src="./videos/Golden-Mandala.mov" type="video/mp4"></video>');

{
	$('header figure a').prepend('<img id="top-img2" src="./img2/zenad-nabil-sunny-sky-unsplash.jpg" alt="sunny sky image"/>');
	if(fileName[0] === "")
    $('#top-img2')[0].src="./img2/zenad-nabil-sunny-sky-unsplash.jpg";
	else if(fileName[0].startsWith("Rumi"))
    $('#top-img2')[0].src="./img2/noah-silliman--UUGr3txNuc-unsplash.jpg";
	else if(fileName[0].startsWith("Plato"))
    $('#top-img2')[0].src="img2/pexels-pixabay-220759.jpg";
	else if(fileName[0].startsWith("Buddha"))
    $('#top-img2')[0].src="./img2/pexels-pixabay-289586.jpg";
	else if(fileName[0].startsWith("Socrates"))
    $('#top-img2')[0].src="./img2/heping-LZW0kGvg5jo-unsplash.jpg";
}

{
		$('body div[class^="bgimg-"]').mousemove(function (event) {
		var containerWidth = $(this).innerWidth(),
		mousePositionX = event.pageX / containerWidth * 100
		$(this).css('background-position-x', mousePositionX + '%');
	  });
	}

{
	  let timesClicked = 0;
      $('body div[class^="bgimg-"]').click(function () {
        timesClicked++;
        if (timesClicked % 2 === 0) {
          $(this).css(
            "background-image",
            "url(https://source.unsplash.com/random/" +
              window.innerWidth +
              "x" +
              window.innerHeight*0.9 +
              "?universe?time=" +
              new Date().getTime() +
              ")"
          );
        } else {
          $(this).css(
            "background-image",
            "url(https://source.unsplash.com/random/" +
              window.innerWidth +
              "x" +
              window.innerHeight*0.95 +
              "?universe?time=" +
              new Date().getTime() +
              ")"
          );
        }
      });
	}

});