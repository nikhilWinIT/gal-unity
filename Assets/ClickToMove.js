#pragma strict
var hitTargetTag : String;
var zOffset : float;
var minHeightPercentage : float;
private var ray : RayCollisionChecker;
private var cam : Camera;
private var hit : Collider;

function Start () {
	cam = Camera.main;	
	ray = new RayCollisionChecker(); 
	}
	
function Update () {
	if(Input.GetMouseButton(0)){
		hit = ray.CheckInput();	
		var p : Vector3 = cam.ScreenToWorldPoint (Vector3 (Input.mousePosition.x,Input.mousePosition.y, zOffset));
		if(hit.gameObject.tag == hitTargetTag){
			transform.position = p;
		}
	}

}