// Initialise convert function with DOMPurify and Showdown
function convert() {
	var text = document.getElementById('source').value,
		target = document.getElementById('output'),
		converter = new showdown.Converter({
			backslashEscapesHTMLTags: true,
			strikethrough: true,
			extensions: ['table'],
		}),
		html = converter.makeHtml(text);
	var clean = DOMPurify.sanitize(html, {
		FORBID_ATTR: ['style', 'hidden', 'title', 'tabindex', 'spellcheck', 'lang', 'class', 'data-nent', 'dir', 'id', 'datanent', 'alt', 'xmlns', 'srcset', 'name'],
		ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
		ALLOWED_TAGS: ['h1', 'h2', 'h3', 'h4', 'h5', 'b', 'p', 'ul', 'ol', 'li', 'a', 'blockquote', 'code', 'dl', 'dt', 'pre', 'br', 'hr', 'strike', 'strong','del','table','td','tr','th','tbody','thead']
	});
	target.innerHTML = clean;
};

// Prompt user before clearing editor window
function clearText() {
	if (confirm('This will clear your current Markdown text.\nWould you like to CLEAR the editor?')) {
		document.getElementById("source").value = "";
		document.getElementById("output").innerHTML = "";
	} else {}
}

// Save editor contents to local file via text/plain blob
function saveText() {
	var writeOutput = document.getElementById("source").value;
	var textBlob = new Blob([writeOutput], {
		type: 'text/plain'
	});
	var fileName = "preview.md"
	var grabLink = document.createElement("a");
	grabLink.download = fileName;
	grabLink.innerHTML = "Download file";
	grabLink.href = window.URL.createObjectURL(textBlob);
	grabLink.click();
}

function destroyClickedElement(event) {
	document.body.removeChild(event.target);
}

// Read local file to editor window
function openFile(dest) {
	var files = dest.target.files;
	var fileRead = new FileReader();
	fileRead.onload = function(file) {
		source.value = file.target.result;
		convert();
		return true;
	};
	fileRead.readAsText(files[0]);
}

// Enable night mode colour toggle
var nightMode = document.querySelector('#night-element');
nightMode.addEventListener('click', function(event) {
	event.preventDefault();
	document.documentElement.classList.toggle('night-element');
});

// Prepare window-onload functions
window.addEventListener("load", function(){
document.getElementById('fileInput').addEventListener('change', openFile, false);
document.getElementById("source").value = "# Welcome to Preview.";
convert();
});
