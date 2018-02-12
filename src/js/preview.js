// Initialise convert function with DOMPurify and Showdown
function convert() {


var md = new Remarkable('full', {
  html:         true,        // Enable HTML tags in source
  xhtmlOut:     false,        // Use '/' to close single tags (<br />)
  breaks:       false,        // Convert '\n' in paragraphs into <br>
  langPrefix:   'language-',  // CSS language prefix for fenced blocks
  linkify:      true,         // autoconvert URL-like texts to links
  linkTarget:   '',           // set target to open link in

  typographer:  false,
  quotes: '“”‘’',
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    try {
      return hljs.highlightAuto(str).value;
    } catch (__) {}

    return ''; // use external default escaping
  }
});

var text = document.getElementById('source').value;
var target = document.getElementById('output');
var html = md.render(text);

	var clean = DOMPurify.sanitize(html, {
		FORBID_ATTR: ['style', 'class', 'hidden', 'shape', 'hreflang', 'media', 'download', 'coords', 'rev', 'type', 'rel', 'tabindex', 'spellcheck', 'lang', 'data-nent', 'dir', 'id', 'datanent', 'alt', 'xmlns', 'srcset', 'name'],
		ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
		ALLOWED_TAGS: ['img', 'mark', 'ins', 'h1', 'h2', 'abbr', 'sup', 'sub', 'h3', 'h4', 'h5', 'b', 'p', 'ul', 'ol', 'li', 'a', 'blockquote', 'code', 'dl', 'dd', 'dt', 'pre', 'br', 'hr', 'strike', 'strong','del','table','td','tr','th','tbody','thead']
	});
	target.innerHTML = clean;
	var textToSelect = document.getElementById('source');
	var textToCount = textToSelect.value;
        chars = text.length;
        words = text.split(/\b\S+\b/g).length - 1;
	document.getElementById('wordCountLive').innerHTML = words;
	document.getElementById('charCountLive').innerHTML = chars;
};

// Prompt user before clearing editor window
function clearText() {
	if (confirm('This will REMOVE your current text and Local Storage.\nWould you like to clear the editor?')) {
		document.getElementById("source").value = "";
		document.getElementById("output").innerHTML = "";
		document.getElementById('wordCountLive').innerHTML=0;
		document.getElementById('charCountLive').innerHTML=0;
		localStorage.removeItem("text");
	} else {}
}

// Manually save text to Local Storage

function saveText() {
	localStorage["text"] = source.value;
}

// Autosave to Local Storage every 60 seconds

setInterval(function() {
	localStorage["text"] = source.value;
}, 60 * 1000);

// Download editor contents to local file via text/plain blob
function downloadText() {
	var writeOutput = document.getElementById("source").value;
	var textBlob = new Blob([writeOutput], {
		type: 'text/plain'
	});
	var fileName = "preview.md";
	var grabLink = document.createElement("a");
	grabLink.download = fileName;
	grabLink.innerHTML = "Download file";
	grabLink.href = window.URL.createObjectURL(textBlob);
	grabLink.click();
}

// Download editor contents to local file via HTML blob
function downloadHTML() {
        var writeOutputHTML = document.getElementById("output").innerHTML;
        var textBlobHTML = new Blob([writeOutputHTML], {
                type: 'text/html'
        });
        var fileNameHTML = "preview.html";
        var grabLinkHTML = document.createElement("a");
        grabLinkHTML.download = fileNameHTML;
        grabLinkHTML.innerHTML = "Download file";
        grabLinkHTML.href = window.URL.createObjectURL(textBlobHTML);
        grabLinkHTML.click();
}

function destroyClickedElement(event) {
	document.body.removeChild(event.target);
}

// Toggle link visibility

function showDownloadOpts() {
var dLinks = document.getElementById('download-options');
  if(dLinks.style.display == 'none')
    dLinks.style.display = 'inline';
  else
    dLinks.style.display = 'none';
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

// Night mode query parameter test
var pattern = /[?&]night=1/;
var testUrl = location.search;
if (pattern.test(testUrl)) {
	event.preventDefault();
	document.documentElement.classList.toggle('night-element');
} else {
}

document.getElementById('fileInput').addEventListener('change', openFile, false);
if (localStorage.getItem("text") === null) {
	localStorage["text"] = "# Welcome to Preview.";
}
document.getElementById('download-options').style.display = 'none';
document.getElementById("source").value = localStorage["text"];
convert();
document.getElementById("source").focus();
});
