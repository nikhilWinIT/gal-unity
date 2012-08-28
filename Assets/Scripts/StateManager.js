#pragma downcast
enum States { Singing, Waiting, PlayerWaiting, Listening, Recording, Mimicking, Dancing, Dying};
var state : States;
var harmonyAt : int;
private var lastState: States;
function Start () {
	lastState = state;
	ChangeState(state, true);
	//for(var state in States.GetValues(States)){
		//Debug.Log("Disable "+state);
		//DisableState(state);
	//}
}

function Update () {
	if (lastState != state) {
		OnStateChange(state);
	}	
}
function ChangeEnum () {
	state = States.Waiting;
}
function ChangeState(stateName : States, mode : boolean) {
	switch(stateName) {
		case States.Singing:
			gameObject.GetComponent(Singing).enabled = mode;
			break;
		case States.Waiting:
			gameObject.GetComponent(Waiting).enabled = mode;
			break;
		case States.PlayerWaiting:
			gameObject.GetComponent(PlayerWaiting).enabled = mode;
			break;
		case States.Listening:
			gameObject.GetComponent(Listening).enabled = mode;
			break;
		case States.Recording:
			gameObject.GetComponent(Recording).enabled = mode;
			break;
		case States.Mimicking:
			gameObject.GetComponent(Mimicking).enabled = mode;
			break;
		case States.Dancing:
			gameObject.GetComponent(Dancing).enabled = mode;
			break;
		case States.Dying:
			gameObject.GetComponent(Dying).enabled = mode;
			break;
	}
}

function SetState(stateString) {
	state = System.Enum.Parse(typeof(States), stateString);
}

function OnStateChange(newState : States) {
	
	ChangeState(newState, true);
	ChangeState(lastState, false);
	lastState = state;
	
}