import hl from 'highlight.js'

onmessage = function (e) {
	if (hl.getLanguage(e.data[1])) {
		let result = hl.highlightAuto(e.data[0], [e.data[1]]);
		postMessage(result.value);
	} else {
		postMessage(e.data[0]);
	}
}