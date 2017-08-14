//Initialize all modals
$('.modal').modal();
//Start Functions
function convert() {
	var blank
	if (document.getElementById('input-bbc').value == "") {
		blank = true;
		Materialize.toast("You need somethign to convert!", 3000, 'rounded red');
	}

	if (document.getElementById('bbc-mark').checked && document.getElementById('bbc-html').checked && !blank) {
		Materialize.toast("You can't convert to two languages at the same time!", 3000, 'rounded red');
	} else if (document.getElementById('bbc-mark').checked && !blank) {
		document.getElementById('output').removeAttribute("disabled");
		document.getElementById('output').value = bbcToWiki(document.getElementById('input-bbc').value);
		document.getElementById('preview').innerHTML = bbcToHTML(document.getElementById('input-bbc').value);
		$("#output").focus();
	} else if (document.getElementById('bbc-html').checked && !blank) {
		document.getElementById('output').removeAttribute("disabled");
		document.getElementById('output').value = bbcToHTML(document.getElementById('input-bbc').value);
		document.getElementById('preview').innerHTML = bbcToHTML(document.getElementById('input-bbc').value);
		$("#output").focus();
	} else if (!blank) {
		Materialize.toast("You haven't checked what to convert to!", 3000, 'rounded red');
	}
}
function bbcToWiki(bbcode) {
	bbcode = bbcode.replace(/\[b\]/g, "''''");
	bbcode = bbcode.replace(/\[\/b\]/g, "'''");
	bbcode = bbcode.replace(/\[i\]/g, "''");
	bbcode = bbcode.replace(/\[\/i\]/g, "''");
	bbcode = bbcode.replace(/\[code\]/g, "<pre>");
	bbcode = bbcode.replace(/\[\/code\]/g, "</pre>");
	bbcode = bbcode.replace(/\[s\]/g, "<strike>");
	bbcode = bbcode.replace(/\[\/s\]/g, "</strike>");
	bbcode = bbcode.replace(/\[img\]/g, "");
	bbcode = bbcode.replace(/\[\/img\]/g, "");
	bbcode = bbcode.replace(/\[list\]/g, "<blockquote>");
	bbcode = bbcode.replace(/\[\/list\]/g, "</blockquote>");
	bbcode = bbcode.replace(/\[size\=7pt\](.*?)\[\/size\]/g, "====== $1 ======");
	bbcode = bbcode.replace(/\[size\=9pt\](.*?)\[\/size\]/g, "===== $1 =====");
	bbcode = bbcode.replace(/\[size\=12pt\](.*?)\[\/size\]/g, "==== $1 ====");
	bbcode = bbcode.replace(/\[size\=18pt\](.*?)\[\/size\]/g, "=== $1 ===");
	bbcode = bbcode.replace(/\[size\=24pt\](.*?)\[\/size\]/g, "== $1 ==");
	bbcode = bbcode.replace(/\[url=((.*?))?\](.*?)\[\/url\]/g, "[$2 $3]");
	bbcode = bbcode.replace(/\[url](.*?)\[\/url\]/g, "[$1]");
	return bbcode;
}
function bbcToHTML(bbcode) {
	bbcode = bbcode.replace(/\[b\]/g, "<b>");
	bbcode = bbcode.replace(/\[\/b\]/g, "</b>");
	bbcode = bbcode.replace(/\[i\]/g, "</i>");
	bbcode = bbcode.replace(/\[\/i\]/g, "</i>");
	bbcode = bbcode.replace(/\[code\]/g, "<code>");
	bbcode = bbcode.replace(/\[\/code\]/g, "</code>");
	bbcode = bbcode.replace(/\[s\]/g, "<strike>");
	bbcode = bbcode.replace(/\[\/s\]/g, "</strike>");
	bbcode = bbcode.replace(/\[img](.*?)\[\/img\]/g, "<img src='$1'/>");
	bbcode = bbcode.replace(/\[list\]/g, "<ul>");
	bbcode = bbcode.replace(/\[\/list\]/g, "</ul>");
	bbcode = bbcode.replace(/\[size\=7pt\](.*?)\[\/size\]/g, "<h5> $1 </h5>");
	bbcode = bbcode.replace(/\[size\=9pt\](.*?)\[\/size\]/g, "<h4> $1 </h4>");
	bbcode = bbcode.replace(/\[size\=12pt\](.*?)\[\/size\]/g, "<h3> $1 </h3>");
	bbcode = bbcode.replace(/\[size\=18pt\](.*?)\[\/size\]/g, "<h2> $1 </h2>");
	bbcode = bbcode.replace(/\[size\=24pt\](.*?)\[\/size\]/g, "<h1> $1 </h1>");
	bbcode = bbcode.replace(/\[url=((.*?))?\](.*?)\[\/url\]/g, "<a href='$2'>$3</a>");
	bbcode = bbcode.replace(/\[url](.*?)\[\/url\]/g, "<a href='$1'>$1</a>");
	bbcode = bbcode.replace(/\n/g, "<br>");
	return bbcode;
}

function setLanguage(otherSlider, thisSlider) {
	$('#' + otherSlider).prop('checked', false);
	$('#' + thisSlider).prop('checked', true);
}
