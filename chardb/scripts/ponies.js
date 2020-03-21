function ponycheck() {
	var yes = document.getElementById("yesPonies");
	if (yes.checked == true) {
		initPonies();
	}

	if (yes.checked == false) {
		remove();
	}
}

var initialized = false;
function remove() {
	BrowserPonies.unspawnAll();
	BrowserPonies.stop();
	document.getElementById('controls').style.visibility = "hidden";
	document.getElementById('paddock-back').style.visibility = "hidden";
	document.getElementById('paddock-left').style.visibility = "hidden";
	document.getElementById('paddock-right').style.visibility = "hidden";
	document.getElementById('paddock-front').style.visibility = "hidden";
}

function initPonies() {

	document.getElementById('controls').style.visibility = "visible";
	document.getElementById('paddock-back').style.visibility = "visible";
	document.getElementById('paddock-left').style.visibility = "visible";
	document.getElementById('paddock-right').style.visibility = "visible";
	document.getElementById('paddock-front').style.visibility = "visible";
    if(initialized == false){
    initialized = true
        scripttime();
    }

}

function scripttime(){
	load_script("scripts/browserponies.js");
}

load_script = function (src) {
	if (load_script.scripts === undefined) {
		load_script.scripts = [];
		load_script.index = -1;
		load_script.loading = false;
		load_script.next = function () {
			if (load_script.loading) return;
			load_script.loading = true;
			var item = load_script.scripts[++load_script.index];
			var head = document.getElementsByTagName('head')[0];
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = item.src;
			script.onload = () => {
				load_script.loading = false;
				if (load_script.index < load_script.scripts.length - 1) load_script.next();
				item.resolve();
			};
			head.appendChild(script);
		};
	};
	if (src) {
		for (var i = 0; i < load_script.scripts.length; i++) {
			if (load_script.scripts[i].src == src) return load_script.scripts[i].promise;
		}
		var item = {
			src: src
		};
		item.promise = new Promise(resolve => {
			item.resolve = resolve;
		});
		load_script.scripts.push(item);
		load_script.next();
	}
	return load_script.scripts[load_script.scripts.length - 1].promise;
};