function $(id){
    return document.getElementById(id);
}


function load(){
	openpage("../home.html");
	document.getElementById('controls').style.visibility = "hidden"; 
    document.getElementById('paddock-back').style.visibility = "hidden"; 
    document.getElementById('paddock-left').style.visibility = "hidden"; 
    document.getElementById('paddock-right').style.visibility = "hidden"; 
    document.getElementById('paddock-front').style.visibility = "hidden";

}
