export const isDir = file => file.filetype === 'directory';

export const sortFiles = (files, asc, by) => {
	files.sort((a, b) => {
		if (a.filetype !== b.filetype && (isDir(a) || isDir(b))) {
			return isDir(a) ? -1 : 1;
		}

		for (let i = 0; i < by.length; i++) {
			let field = by[i];
			let comp = a[field].localeCompare(b[field]);
			if (comp !== 0) {
				return asc ? comp : -comp;
			}
		}

		return 0;
	});
}

export const isValidFilename = name => {
	let p1 = /^[^\/\\*"?\[\]:;|=,]*$/;  // illegal characters
	let p2 = /^(?!\.{1,2}$).*/;			// do not match . or ..
	return p1.test(name) && p2.test(name);
}