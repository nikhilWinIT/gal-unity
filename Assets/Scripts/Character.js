
import Holoville.HOTween;
HOTween.Init(false, false, true);
HOTween.EnableOverwriteManager();
//Public
var locked : boolean = false;
var alpha : float;
var pattern : Array;
var notes : Array;
var track : String;
var radian : float;
var speed : float;
var radius : float;
var force : boolean;
var aura : Transform;
var measureLength : float;
var beatLength : float;
var auraContainer : Transform;

//Protected
protected var game : GameManager;
protected var body : Transform;
protected var smoothVel : float;	



//Private 

private var alive : boolean = false;
private var dying : boolean = false;
private var state : String = 'normal';

private var colorSmoothTime : float;
private var speedSmoothTime : float;
private var smoothTime : float;


class SmoothTimes {
	var color : float;
	var speed : float;
	var intensity : float;
	var confidence : float;
}

class SmoothVels {
	var speed : float;
	var intensity : float;
	var confidence : float;
}

class Emotion {
	var mood : String;
	var intensity : float;
	var targetIntensity : float;
	var confidence : float;
	var targetConfidence : float;
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
	emotion.targetConfidence = 1;
	stateManager = gameObject.GetComponent(StateManager);
	game = GameObject.Find('Game').GetComponent(GameManager);
	UpdateShape();
	force = true;
	materials.target = materials.base;
}

function Update () {
	    UpdateShape();
}

function Live() {
	alive = true;
}

function Die(){
	dying = true;
}

function Fail(){

}

function Lock() {
	locked = true;
}

function Unlock() {
	locked = false;
}


function UpdateShape() {
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

function SetConfidence( confidence : float ) {
	emotion.targetConfidence = confidence;
}

function LockForSeconds( duration : float ) {
	Debug.Log('locked for ' + duration);
	locked = true;
	yield WaitForSeconds(duration);
}

function Enter() {
	alpha = 0;
	Live();
}
function SetTrackData( measure : float, beat : float) {
	measureLength = measure;
	beatLength = beat;
}

function Sing() {
	if(alive || dying){
		Expand();
		speedMod = .6;
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