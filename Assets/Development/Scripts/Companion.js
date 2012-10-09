var distanceMin : float;
var moveTarget : Transform;
var other : Transform;
var increment : float;
var moveDelay : float;
private var canMove : boolean;
private var shouldMove : boolean;
function Start(){
	canMove=true;
}
function Update(){
	var dist = CheckDistance();
	//if(shouldMove && canMove){
		//Move();	
	//}
	var offset = dist - distanceMin;
	if( moveTarget.position.x < other.position.x){
		offset = -1;
	}
	if(offset < 0){
		moveTarget.Translate( -offset + increment, 0 , 0);	
	}
	
	
}

function Move(){
	moveTarget.Translate(increment, 0, 0);	
	canMove = false;
	yield WaitForSeconds(moveDelay);
	canMove = true;
}

function CheckDistance(){
	var dist = Vector2.Distance(Vector2(moveTarget.position.x, moveTarget.position.y), Vector2(other.position.x, other.position.y));
	if(dist > distanceMin){
		shouldMove = false;	
	}
	else{
		shouldMove = true;
	}
	return dist;
}