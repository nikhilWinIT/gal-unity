#pragma strict
class ChallengeNode extends ActiveNode {
	var target : GameObject;
	var followSmoothTime : float;
	var radius : float;	
	
	
	var incre : float;
	private var following : boolean = false;
	function Start () {
	
	}
	
	function Update () {
	
	}
	function OnTriggerEnter(){
		if(!following){
			Activate();	
		}
	}
	function Activate(){
		var followers = GameObject.FindGameObjectsWithTag('Follower');
		var rad= (followers.Length*incre*Mathf.PI)/180;
		gameObject.AddComponent(Follow);
		var follow = gameObject.GetComponent(Follow);
		/*
		if(followers.Length > 0){
			follow.target = followers[followers.Length-1];	
		}
		else{
			follow.target = target; 
		}
		*/
			//rad += Mathf.PI/4 - followers.Length*(.1);
			follow.target = target; 
		follow.followX = true;
		follow.followY = true;
		follow.smoothTime = followSmoothTime;
		var x = radius * Mathf.Cos(rad);
		var y = radius * Mathf.Sin(rad);
		follow.offset[0] = x;
		follow.offset[1] = y;
		gameObject.tag = 'Follower';
		following = true;
	}
}