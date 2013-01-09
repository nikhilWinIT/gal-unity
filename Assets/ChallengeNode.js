#pragma strict
class ChallengeNode extends ActiveNode {
	var target : GameObject;
	var followSmoothTime : float;
	function Start () {
	
	}
	
	function Update () {
	
	}
	function Activate(){
		gameObject.AddComponent(Follow);
		var follow = gameObject.GetComponent(Follow);
		follow.target = target; 
		follow.followX = true;
		follow.followY = true;
		follow.smoothTime = followSmoothTime;
	}
}