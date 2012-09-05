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
var dying : boolean = false;
var state : String = 'normal';
var targetX : float;
var targetY : float;
var speedMod : float = .3; 
var game : GameManager;

private var smoothVel : float;	
private var speedSmoothVel :float;

var locked : boolean = false;
var colorSmoothTime : float;
var speedSmoothTime : float;

var smoothTime : float;
var messenger : Messenger;
var track : String;

class SmoothTimes {
	var color : float;
	var speed : float;
	var intensity : float;
}

class SmoothVels {
	var intensity : float;
}

class Emotion {
	var mood : String;
	var intensity : float;
	var targetIntensity : float;
	var rate : float;
}

class CharacterMaterials {
	var base : Material;
	var target : Material;
	var neutral : Material;
	var angry : Material;
	var happy : Material;
}

var materials : CharacterMaterials;
var emotion : Emotion;
var smoothVels : SmoothVels;
var smoothTimes : SmoothTimes;

function Awake() {
	targetX = transform.position.x;
	targetY = transform.position.y;
	body = transform.Find('Body');
	SetTargetEmotion('neutral', 1);
	stateManager = gameObject.GetComponent(StateManager);
	game = GameObject.Find('Game').GetComponent(GameManager);
	UpdateMaterial();
	force = true;
	messenger = gameObject.GetComponent(Messenger);
	materials.target = materials.base;
}
function Update () {
	
		UpdateAccel();
	    UpdateSpeed();
	    UpdatePosition();
	    UpdateEmotion();
	    UpdateMaterial();
   	

}

function Live() {
	alive = true;
}

function Fail(){

}

function SetForce(f) {
    force = f;
}


function Accelerate() {
	accelY = maxAccelY;
}

function UpdateEmotion (){
	emotion.intensity = Mathf.SmoothDamp(emotion.intensity, emotion.targetIntensity, smoothVels.intensity, smoothTimes.intensity);
}
function UpdateMaterial() {
	if( alive && !dying) {
		alpha = Mathf.Clamp01(alpha + .003);
	}
	body.renderer.material.Lerp(materials.base, materials.target, emotion.intensity);
	body.renderer.material.color.a = alpha;
}

function SetTargetEmotion( mood : String, intensity : float) {
	materials.base = body.renderer.material;
	var value = materials.GetType().GetField( mood ).GetValue(materials);
	emotion.intensity = 0;
	emotion.targetIntensity = intensity; 
	materials.target = value;
}
function UpdateAccel() {
	accelY = accelY - game.settings.global.gravity;
	
}

function LockForSeconds( duration : float ) {
	Debug.Log('locked for ' + duration);
	locked = true;
	yield WaitForSeconds(duration);
	
}

function UpdateSpeed () {
	maxSpeed = (game.settings.global.minSpeed +(Mathf.Clamp((radius-game.settings.global.minRadius), 0, 100))*game.settings.global.speedModifier) * speedMod;
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
	if(alive || dying){
		Expand();
		speedMod = .6;
		Accelerate();
		
	}
}


function EmitAura() {
	var alpha : float = 0;
	var aura = Instantiate(aura, transform.position, transform.rotation);
	aura.GetComponent(Aura).SetOwner(gameObject);
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

function PlaySoundAt(name : String) {
	


	Sing();
}