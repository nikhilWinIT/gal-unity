#pragma strict
var target : GameObject;
var onCollideTrigger : TriggerGroup;

function Start () {

}

function Update () {

}

function OnTriggerEnter(col : Collider){
	if(target == col.gameObject){
		Debug.Log('trigger');
		Debug.Log(col.tag);
		onCollideTrigger.Pull('');
	}
}