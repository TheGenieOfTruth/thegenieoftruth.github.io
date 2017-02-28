//Global namespace slots: save,load
function save(name, data) {
	localStorage.setItem(name, data);
	return data;
}

function load(name, fallback) {
	var invalid = [undefined, null, "undefined", "", NaN];
	return invalid.indexOf(localStorage.getItem(name)) != -1 ? save(name, fallback) : localStorage.getItem(name);
}
