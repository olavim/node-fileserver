import hl from 'highlight.js'

onmessage = function(e) {
	let result;

	if (hl.getLanguage(e.data[1])) {
		result = hl.highlightAuto(e.data[0], [e.data[1]]);
	}

	postMessage(result.value);
}