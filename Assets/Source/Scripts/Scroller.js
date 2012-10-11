var speed : float;
var range : float;
private var paused : boolean;
function SetSpeed( _speed : float){
	speed = _speed;
	return this;
}

function SetRange( _range : float){
	range = _range;
	return this;
}
function Pause(){
	paused = true;
} 
function Play(){
	paused = false;
}
function Update(){
	if(!paused){
		transform.Translate( speed*Time.deltaTime, 0, 0);
		if(Mathf.Abs(transform.localPosition.x) >= Mathf.Abs(range)){
		 Destroy(gameObject);	
		}
	}
}