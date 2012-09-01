#pragma downcast

var owner : Character;
var startTime : float;
var pattern: Array;
var notes : Array;
var spotlightPlayer : LightScript;
var spotlightCompanion : LightScript;
var globallight : LightScript;
var game : GameManager;
var musicManager :MusicManager;

function Awake() {
	enabled = false;
}
function OnEnable () {
	spotlightPlayer = GameObject.Find('Spotlight_Player').GetComponent(LightScript);
	spotlightCompanion = GameObject.Find('Spotlight_Companion').GetComponent(LightScript);
	globallight = GameObject.Find('GlobalLight').GetComponent(LightScript);
	game = GameObject.Find('Game').GetComponent(GameManager);
	musicManager = GameObject.Find('Game').GetComponent(MusicManager);
	owner = gameObject.GetComponent(Character);
	startTime = Time.realtimeSinceStartup;
	pattern = owner.pattern;
	notes = owner.notes;
}

function Update () {
	UpdatePosition();
}

function OnCue(diff : float) {
	if(enabled) {
		HearCue(diff);
	}
}

function OnBeatCue() {
	if(enabled) {
		HearBeatCue();
	}
}

function HearBeatCue() {
}

function OnBeat(name : String) {
	if(enabled) {
		HearBeat(name);
	}
}
function WaitForState(state, duration) {
	ChangeState('Waiting');
	yield WaitForSeconds(duration);
	ChangeState(state);
}
function HearBeat(name : String) {
//	Debug.Log("beat heard");
}

function HearCue(diff : float) {
	//Debug.Log(diff);
}

function Fail() {
	owner.Tilt();
	WaitForState('Waiting', 0);
}

function UpdatePosition() {

		owner.radius += owner.accelY;
		owner.radius = Mathf.Clamp(owner.radius, game.minRadius, game.maxRadius);
	    owner.radian -= (owner.speed/100)*owner.direction;
	    owner.targetX = owner.radius*Mathf.Cos(owner.radian);
	    owner.targetY = owner.radius*Mathf.Sin(owner.radian);

}

function ConvertPatternRelative(pattern) {
	var rPattern = new Array();
	rPattern.Push(0);
	for (var i = 1; i < pattern.length; i++) {
		rPattern.Push(pattern[i] - pattern[i-1]);
	}
	return rPattern;
}

function ChangeStateAfter( seconds, state) : IEnumerator {
	yield WaitForSeconds(seconds);
	ChangeState(state);
}

function ChangeState( state : String) {
	gameObject.GetComponent(StateManager).SetState(state);
}	