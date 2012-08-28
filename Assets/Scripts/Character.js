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
var notes : Array;
var alpha : float;
var alive : boolean = false;
var state : String = 'normal';
var targetX : float;
var targetY : float;
var speedMod : float = .3; 
var game : GameManager;
private var smoothVel : float;	
private var speedSmoothVel :float;
private var redVel: float;
private var greenVel: float;
private var blueVel : float;
var locked : boolean = false;
var colorSmoothTime : float;
var speedSmoothTime : float;
var smoothTime : float;
private var messenger : Messenger;


function Awake() {
	targetX = transform.position.x;
	targetY = transform.position.y;
	body = transform.Find('Body');
	soundManager = gameObject.GetComponent(SoundManager);
	stateManager = gameObject.GetComponent(StateManager);
	game = GameObject.Find('Game').GetComponent(GameManager);
	UpdateMaterial();
	force = true;
	messenger = gameObject.GetComponent(Messenger);
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
	accelY = accelY - game.gravity;
	
}
function UpdateSpeed () {
	maxSpeed = (game.minSpeed +(Mathf.Clamp((radius-game.minRadius), 0, 100))*game.speedModifier) * speedMod;
    if(speed < maxSpeed)
        speed += acceleration/30;
    else
        speed -= speed/friction;
    if( speed > maxSpeed) {
    	speed = maxSpeed;
    }
    else if (speed < .001) {
    	speed = 0;
    }
    speedMod = Mathf.SmoothDamp(speedMod, 0, speedSmoothVel, speedSmoothTime);
}

function UpdatePosition () {
	//transform.position.x -= Mathf.SmoothDamp(transform.position.x, targetX, smoothVel, smoothTime);
	//transform.position.y -= Mathf.SmoothDamp(transform.position.y, targetY, smoothVel, smoothTime);
	transform.position.x += (targetX - transform.position.x)/30;
	transform.position.y +=  (targetY - transform.position.y)/30;
	

}
function Enter() {
	alpha = 0;
	Live();
}

function Sing() {
	if(alive){
		Expand();
		speedMod = .6;
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
	messenger.Send("OnBeat", index);

	Sing();
}