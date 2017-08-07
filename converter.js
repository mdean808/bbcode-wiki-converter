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
	var bbcodeTest;
	while (bbcode != bbcodeTest) {
		bbcodeTest = bbcode;
		bbcode = bbcode.replace("[b]", "''''");
		bbcode = bbcode.replace("[/b]", "'''");
		bbcode = bbcode.replace("[i]", "''");
		bbcode = bbcode.replace("[/i]", "''");
		bbcode = bbcode.replace("[code]", "<pre>");
		bbcode = bbcode.replace("[/code]", "</pre>");
		bbcode = bbcode.replace("[s]", "<strike>");
		bbcode = bbcode.replace("[/s]", "</strike>");
		bbcode = bbcode.replace("[img]", "");
		bbcode = bbcode.replace("[/img]", "");
		bbcode = bbcode.replace("[list]", "<blockquote>");
		bbcode = bbcode.replace("[/list]", "</blockquote>");
		bbcode = bbcode.replace("[size=7]", "====== ");
		bbcode = bbcode.replace("[size=7pt]", "====== ");
		bbcode = bbcode.replace("[size=9]", "===== ");
		bbcode = bbcode.replace("[size=12]", "==== ");
		bbcode = bbcode.replace("[size=18]", "=== ");
		bbcode = bbcode.replace("[size=24]", "== ");
		bbcode = bbcode.replace("[size=9pt]", "===== ");
		bbcode = bbcode.replace("[size=12pt]", "==== ");
		bbcode = bbcode.replace("[size=18pt]", "=== ");
		bbcode = bbcode.replace("[size=24pt]", "== ");
		bbcode = bbcode.replace("[url=", "[");
		bbcode = bbcode.replace("[/url]", " ]");
	}
	return bbcode;
}
function bbcToHTML(bbcode) {
	var bbcodeTest;
	while (bbcode != bbcodeTest) {
		bbcodeTest = bbcode;
		bbcode = bbcode.replace("[b]", "<b>");
		bbcode = bbcode.replace("[/b]", "</b>");
		bbcode = bbcode.replace("[i]", "</i>");
		bbcode = bbcode.replace("[/i]", "</i>");
		bbcode = bbcode.replace("[code]", "<code>");
		bbcode = bbcode.replace("[/code]", "</code>");
		bbcode = bbcode.replace("[s]", "<strike>");
		bbcode = bbcode.replace("[/s]", "</strike>");
		bbcode = bbcode.replace("[img]", "<img>");
		bbcode = bbcode.replace("[/img]", "</img>");
		bbcode = bbcode.replace("[list]", "<ul>");
		bbcode = bbcode.replace("[/list]", "</ul>");
		bbcode = bbcode.replace("[url=", "<a href='");
		bbcode = bbcode.replace("]", "'>");
		bbcode = bbcode.replace("[/url]", "<a>");
	}
	return bbcode;
}

function setLanguage(otherSlider, thisSlider) {
	$('#' + otherSlider).prop('checked', false);
	$('#' + thisSlider).prop('checked', true);
}
