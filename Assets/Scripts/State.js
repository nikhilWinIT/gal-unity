#pragma downcast

var owner : Character;
var startTime : float;
var pattern: Array;
function Awake() {
	enabled = false;
}
function OnEnable () {
	owner = gameObject.GetComponent(Character);
	startTime = Time.realtimeSinceStartup;
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

function OnBeat() {
	if(enabled) {
		HearBeat();
	}
}
function WaitForState(state, duration) {
	ChangeState('Waiting');
	yield WaitForSeconds(duration);
	ChangeState(state);
}
function HearBeat() {
	Debug.Log("beat heard");
}

function HearCue(diff : float) {
	Debug.Log(diff);
}

function Fail() {
	owner.Tilt();
	WaitForState('Waiting', 0);
}

function UpdatePosition() {

		owner.radius += owner.accelY;
		if (owner.radius < 1) {
			owner.radius = 1;
			}
		else if(owner.radius > 7) {
			owner.radius = 7;
		}	
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