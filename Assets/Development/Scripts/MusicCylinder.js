private var global : Global;
function Start(){
	global = GameObject.FindObjectOfType(Global);
}
function Update(){
	transform.Rotate(0, global.scrollSpeed,0);
}