#pragma strict
var targetX : float;
var targetY : float;
var target : GameObject;
var intensity : float;
function Start () {

}

function Update () {
	UpdateTarget();
	UpdatePosition();
	UpdateAttrs();
}

function UpdateAttrs() {
	light.intensity = intensity;
}

function UpdateTarget() {
	targetX = target.transform.position.x;
	targetY = target.transform.position.y;
}	

function SetTarget(targetName : String) {
	target = GameObject.Find(targetName);
}

function UpdatePosition() {
	transform.position.x += (targetX - transform.position.x)/10 ;
	transform.position.y += (targetY - transform.position.y)/10 ;
}