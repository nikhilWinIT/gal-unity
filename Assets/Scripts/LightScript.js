
#pragma strict

var target : GameObject;
var intensity : float;
var defaultIntensity : float;
var dimIntensity : float;
var fadeTime : float = .5;
var switching : boolean = false;
var dist : float = 0;
var switchSmoothTime : float = 40;
var defaultSmoothTime : float = 10;
var switchThreshold : float = .1;
var yVel : float;
var xVel : float;
var zPos : float;
var smoothTime : float;
var smoothSmoothTime : float;
var game : GameManager;
private var smoothVel : float;
private var intensityVel :float;
private var velocity = Vector3.zero;
function Start () {
	game = GameObject.Find('Game').GetComponent(GameManager);

}

function Kill(){
	light.intensity = 0;
}
function Dim() {
	intensity = dimIntensity;
}

function Undim() {
	intensity = defaultIntensity;
}
function Update () {
	UpdatePosition();
	UpdateAttrs();
}

function UpdateAttrs() {
	light.intensity = Mathf.SmoothDamp(light.intensity, intensity, intensityVel, fadeTime);
	if( switchThreshold > Vector2.Distance(Vector2(transform.position.x, transform.position.y), Vector2(target.transform.position.x, target.transform.position.y))){
		EndSwitch();
	}
	smoothTime = Mathf.SmoothDamp(smoothTime, defaultSmoothTime, smoothVel, smoothSmoothTime);

}



function SetTarget(targetName : String) {
	intensity = defaultIntensity;
	target = GameObject.Find(targetName);
	BeginSwitch();
}
function BeginSwitch() {
	switching = true;
	smoothTime = switchSmoothTime;
}
function EndSwitch() {
	switching = false;

}
function UpdatePosition() {
	var newX : float = Mathf.SmoothDamp(transform.position.y, target.transform.position.y, yVel, smoothTime);
	var newY : float = Mathf.SmoothDamp(transform.position.x, target.transform.position.x, xVel, smoothTime);
	transform.position = Vector3.SmoothDamp(transform.position, target.transform.position, velocity, smoothTime);
	transform.position.z = game.stage.transform.position.z + zPos;
}