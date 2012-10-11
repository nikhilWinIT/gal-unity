var velX : float;

function OnTriggerEnter(other){
	Debug.Log(other.name);
}
function OnTriggerStay(other){
	Debug.Log(other.name);
	other.transform.Translate( velX, 0, 0);	
}