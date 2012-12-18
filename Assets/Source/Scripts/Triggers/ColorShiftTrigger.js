#pragma strict
class ColorShiftTrigger extends Trigger {

	var targetColor : Color;
	var colorSource : GameObject;
	private var shifting : boolean;
	private var _color : Color;
	private var startTime : float;
	function Start(){
		_color = targetColor;
		if(colorSource){
			_color = colorSource.renderer.material.color;
		} 
	}
	function Pull(param : String){
		var all = GameObject.FindObjectsOfType(ColorShiftTrigger);
		for(var trigger in all){
			trigger.Stop();
		}
		shifting = true;	
		startTime = Time.realtimeSinceStartup;
	}
	function Stop(){
		shifting = false;	
	}
	function Update(){
		if(shifting){
			for(var target : GameObject in targets){
				var lerpedColor = Color.Lerp(target.renderer.material.color, _color, Time.realtimeSinceStartup - startTime);
				target.renderer.material.color = lerpedColor;	
			}
		}
	}
}