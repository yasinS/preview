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

// Night mode query parameter test
var pattern = /[?&]night=1/;
var testUrl = location.search;
if (pattern.test(testUrl)) {
	event.preventDefault();
	document.documentElement.classList.toggle('night-element');
} else {
	// ignore and proceed
}

document.getElementById('fileInput').addEventListener('change', openFile, false);
document.getElementById("source").value = "# 📝 Welcome to Preview. \nA simple Markdown editor, published under the [MIT License](https://github.com/yasinS/preview/blob/master/LICENSE) as an experimental project.\n# Headings\n# Heading one\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum a nisl vitae vestibulum. Suspendisse eget lectus quis nulla elementum vulputate in in massa. Pellentesque tempus ac augue eget scelerisque. Ut euismod feugiat leo, vitae mattis nibh gravida eget. Ut in nunc interdum, rutrum orci nec, varius libero.\n## Heading two\nNunc et faucibus magna, id pharetra purus. Nam rhoncus in neque eu posuere. Donec risus diam, venenatis eu consequat sit amet, porttitor quis leo. Suspendisse id luctus dolor. Phasellus tempus nulla non ex tincidunt eleifend. Pellentesque ac sem a odio ullamcorper vehicula. Aliquam erat volutpat.\n### Heading three\nDonec finibus et augue id bibendum. Sed vulputate at augue ac pulvinar. Pellentesque pulvinar libero a urna dignissim, non sodales dolor congue. Nunc ullamcorper odio nec urna hendrerit fringilla.\n#### Heading four\nNunc libero lectus, placerat non maximus et, malesuada ut ex. Nulla at volutpat elit. Mauris congue leo id est fringilla, eget accumsan velit tempor. Vestibulum iaculis pellentesque nisi, sed dapibus enim. Nullam gravida urna sit amet dui tincidunt cursus. Praesent ultrices nisi nibh, at ultricies lorem lobortis eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus aliquet congue odio eget ullamcorper.\n##### Heading five\nPellentesque euismod orci nec nibh facilisis blandit. Quisque sed magna id lacus placerat mollis tempor vel massa. Nunc congue ex sit amet aliquet tempus. Integer mattis gravida malesuada. Donec ac commodo nunc. Duis ornare felis ac dolor consequat vestibulum. Sed ut eros eget eros consequat ultrices at id urna. Aenean sed aliquet eros. Nullam at velit eget mi aliquam varius ut quis dolor.\n# Blockquotes\nDonec sit amet feugiat lectus. Donec suscipit ipsum est, et tincidunt enim euismod sed. Donec egestas, orci ut efficitur lacinia, sapien purus imperdiet arcu, et consectetur diam lectus quis arcu. Aenean vel hendrerit ipsum. Curabitur a convallis dolor. Aliquam auctor sed libero a tempor.\n> Suspendisse sit amet commodo mauris. Aliquam quis egestas tortor. Etiam ac lacus id lacus venenatis malesuada sit amet in lectus.\nNulla sapien sapien, porta ac iaculis eu, finibus non erat. In aliquet laoreet erat vitae luctus. Cras fringilla porta arcu, et suscipit sapien lobortis et. Vivamus semper dolor sem, luctus scelerisque mauris blandit ac. Cras eget pellentesque ante.\n\n# Lists\n### Ordered list\n1. Red\n2. Blue\n3. Green\n4. Purple\n5. Yellow\n6. Orange\n### Un-ordered list\n- Apple\n- Banana\n- Pear\n- Grapefruit\n- Passion fruit\n# Tables\nInteger urna sapien, malesuada venenatis lacus id, aliquet posuere nulla. Cras varius augue id lorem hendrerit scelerisque. Duis vel augue lobortis, ultricies purus nec, suscipit metus. Proin euismod velit quis ex venenatis tincidunt. Pellentesque feugiat tempor porta. Mauris feugiat tempus bibendum. Curabitur id tellus et urna vehicula ultrices faucibus non odio. Nulla blandit vulputate mi sodales posuere. Praesent sed metus eget ex rutrum consequat vitae et sem.\n| First Header  | Second Header |\n| ------------- | ------------- |\n| Content Cell  | Content Cell  |\n| Content Cell  | Content Cell  |\nQuisque tristique vulputate vestibulum. Sed pharetra nibh pretium, sagittis nisl mattis, viverra ex. Donec semper euismod dignissim. Mauris lobortis, nisl quis interdum fermentum, est massa sodales turpis, id commodo neque arcu a nibh. Aliquam volutpat facilisis risus, accumsan sodales mi rhoncus nec. Praesent vel velit volutpat quam sagittis malesuada eget sit amet lorem. Pellentesque blandit semper vestibulum. Phasellus ut metus at tellus mattis mattis. Donec gravida placerat ligula, vitae lacinia quam hendrerit vitae. Maecenas a vestibulum nunc. Suspendisse sodales convallis varius.\n# Code blocks\nCras ac velit vestibulum, gravida magna ac, scelerisque est. Ut iaculis, arcu id varius pharetra, neque metus maximus ipsum, quis blandit massa nisi eu lorem.\n```\npython -m SimpleHTTPServer 8080\n```\nNulla ac metus nunc. Donec viverra lectus et magna vulputate, in aliquam mauris hendrerit. Pellentesque feugiat placerat tortor, eu accumsan libero sollicitudin sit amet.";
convert();
});
