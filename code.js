function checkTime(i) { //Nambahin 0 kalau menit <10
	if (i < 10) {i = "0" + i};
	return i;
}

function waktu() { //nunjukkin waktu tiap menit
	var time = new Date();
	var h = time.getHours();
	var m = time.getMinutes();
	m = checkTime(m);
	document.getElementById("waktu").innerHTML = h+"."+m;
	var t = setTimeout(waktu, 1000);
}
waktu();

//nambahin item
function tambah() {
	var li = document.createElement("li");
	var inputValue = document.getElementById("input_text").value;
	var x = document.createTextNode(inputValue);
	li.appendChild(x);
	if (inputValue === "") {
		alert("Do something!");
	} else {
		document.getElementById("my_UL").appendChild(li);
	}
	document.getElementById("input_text").value = "";
	var span = document.createElement("span");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);

	for (i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
}

//buat close button*
var lenlist = document.querySelectorAll(".utama li");
var i;
for (i = 0; i < lenlist.length; i++) {
	var span = document.createElement("span");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	lenlist[i].appendChild(span);
}

//ngejalanin close
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
	close[i].onclick = function() {
		var div = this.parentElement;
		div.style.display = "none";
	}
}


// SALAH MASUK PARAMETER DI SYNTAXNYA//
var list = document.querySelector('ul.utama');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);