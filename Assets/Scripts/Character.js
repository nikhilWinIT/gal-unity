import Holoville.HOTween;
HOTween.Init(false, false, true);
HOTween.EnableOverwriteManager();

private var vel: Vector2;
var radius : float;
var targetRadius: float;
var startingRadian : float;
var radian : float;
var speed : float;
var maxSpeed: float;
var gravity : float;
var deceleration : float;
var direction : int = 1;
var friction: float;
var aura : Transform;
var soundManager : SoundManager;
public var force : boolean;
var acceleration : float;
var body : Transform;
var measureLength: float;
var accelY : float;
var maxAccelY : float = .01;
var pattern : Array;
var alpha : float;
var alive : boolean = false;
var state : String = 'normal';
var targetX : float;
var targetY : float;
var speedMod : float = .3;
function Awake() {
	targetX = transform.position.x;
	targetY = transform.position.y;
	body = transform.Find('Body');
	soundManager = gameObject.GetComponent(SoundManager);
	stateManager = gameObject.GetComponent(StateManager);
	UpdateMaterial();
	force = true;
}
function Update () {
	
		UpdateAccel();
	    UpdateSpeed();
	    UpdatePosition();
	    UpdateMaterial();
   	

}

function Live() {
	alive = true;
}

function SetForce(f) {
    force = f;
}

function Accelerate() {
	accelY = maxAccelY;
}
function UpdateMaterial() {
	if( alive) {
		if(alpha != 1) {
			alpha += .003;
		}
	}
	body.renderer.material.color.a = alpha;
}
function UpdateAccel() {
	accelY = accelY - gravity;
	
}
function UpdateSpeed () {
	maxSpeed = (8 - radius)*speedMod;
    if(force == true && speed < maxSpeed)
        speed += acceleration/50;
    else
        speed -= speed/friction;
    if( speed > maxSpeed) {
    	speed = maxSpeed;
    }
    else if (speed < .001) {
    	speed = 0;
    }
}

function UpdatePosition () {
	transform.position.x += (targetX - transform.position.x)/40;
	transform.position.y += (targetY - transform.position.y)/40;
}
function Enter() {
	alpha = 0;
	Live();
}

function Sing() {
	if(alive){
		Expand();
		SetForce(true);
		Accelerate();
		PlaySound();
	}
}

function NextSound() {
	soundManager.NextTrack();
}

function PrevSound() {
	soundManager.PrevTrack();
}

function EmitAura() {
	var alpha : float = 0;
	var aura = Instantiate(aura, transform.position, transform.rotation);
}

function Expand() {
	var seq = new Sequence(new SequenceParms());
	seq.Append(HOTween.To(body, .2, "localScale", new Vector3(1.2,1.2,1.2)));
	seq.Append(HOTween.To(body, .4, "localScale", new Vector3(1,1,1)));
	seq.Play();
	EmitAura();
}




function OnMessage(message) {
	gameObject.SendMessage(message);
}

function PlaySound(){
	soundManager.Play();
}	

function PlaySoundAt(index) {
	
	soundManager.SetTrack(index);
	Sing();
}