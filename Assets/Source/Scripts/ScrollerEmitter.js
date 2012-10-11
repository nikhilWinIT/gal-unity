#pragma strict
var target : GameObject;
var range : float;
private var increment : float;
var speed : float;
var bpm : float;
private var repeatIndex : int;
private var startTime : float;
private var offset : float;
private var paused : boolean;

function Start () {
	repeatIndex = 1;
    increment = 60/bpm;	
	startTime = Time.realtimeSinceStartup;
}

function Pause(){
	paused = true;
	var scrollers = GameObject.FindObjectsOfType(Scroller);
	for( var item in scrollers){
		item.Pause();	
	}
	offset = Time.realtimeSinceStartup - startTime;
}

function Play(){
	paused = false;
	var scrollers = GameObject.FindObjectsOfType(Scroller);
	for( var item in scrollers){
		item.Play();		
	}
	startTime = Time.realtimeSinceStartup - offset;
}
function Update () {
	if(!paused){
		if((Time.realtimeSinceStartup - startTime) > increment*repeatIndex){
			SpawnTarget();	
		}
	}
}

function SpawnTarget(){
	var instance : GameObject = Instantiate(target, transform.position, transform.rotation);
	repeatIndex++;
}