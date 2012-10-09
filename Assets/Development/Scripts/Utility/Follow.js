var target : GameObject;
var smoothTime : float;
var offset : Vector3;
var followX : boolean;
var followY : boolean;
private var xVelocity : float;
private var yVelocity : float;
function Update(){
	if(followX){
		var newX = Mathf.SmoothDamp(transform.position.x, target.transform.position.x + offset[0], xVelocity, smoothTime);	
	}
	if(followY){
		var newY = Mathf.SmoothDamp(transform.position.y, target.transform.position.y + offset[1], yVelocity, smoothTime);	
	}
	transform.position = Vector3(newX , newY, transform.position.z);
}