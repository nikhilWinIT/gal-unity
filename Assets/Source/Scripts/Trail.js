
var smoothTime : float;
var widthRed : float;
private var vel : float;
var kill : boolean; 
var trailColor : Color;
private var trail : TrailRenderer;
function Start(){
	trail = gameObject.GetComponent(TrailRenderer);	
	renderer.material.SetColor('_TintColor', trailColor);
}
function Kill(){
	kill = true;
}
function Update(){
	if(kill){
		//trail.startWidth -= widthRed;
		//trail.endWidth -= widthRed;
		trailColor.a = Mathf.Clamp01(trailColor.a - .04);
		renderer.material.SetColor('_TintColor', trailColor);
	}
	if(trailColor.a <= 0){
		Destroy(gameObject);	
	}
	
}