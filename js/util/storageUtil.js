function muiSet(keyStr, valueStr){
	plus.storage.setItem(keyStr, valueStr);
}

function muiGet(keyStr) {
	return plus.storage.getItem(keyStr);
}

function muiRemove(keyStr){
	plus.storage.removeItem(keyStr);
}

function muiRemoveAll() {
	var length = getLength();
	for(var i=0; i<length; i++){
		var keyStr = plus.storage.key(i);
		plus.storage.removeItem(keyStr);
	}
}

function muiGetLength() {
	return plus.storage.getLength();
}

function muiGetKey(id){
	return plus.storage.key(id);
}

