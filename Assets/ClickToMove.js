#pragma strict
var target : Transform;
var zOffset : float;
var minHeightPercentage : float;
private var cam : Camera;

function Start () {
	cam = Camera.main;	
}

function Update () {
	if(Input.GetMouseButton(0)){
		
		var p : Vector3 = cam.ScreenToWorldPoint (Vector3 (Input.mousePosition.x,Input.mousePosition.y, zOffset));
		if(Input.mousePosition.y > Screen.height*minHeightPercentage){
			target.position = p;
		}
	}

}