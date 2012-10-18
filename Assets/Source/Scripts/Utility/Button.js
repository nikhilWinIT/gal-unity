
@script ExecuteInEditMode()
var percent : boolean;
var widthPercent : float;
var heightPercent : float;
var width : float;
var height : float;
var left : float;
var leftOffset : float;
var top : float;
var offsetTop : float;
var show : boolean;
var pressed : boolean;
var offset : int;
var triggers : TriggerGroup[];
function OnGUI(){
	var screenPos = Camera.main.WorldToScreenPoint(transform.position);	
	if(percent){
		width = Screen.width*widthPercent;
		height = Screen.height*heightPercent;		
	}
	left = leftOffset + width*offset;
	top = height*offsetTop;
	/*
	if(GUI.Button( new Rect(left, top, width, height), '', GUIStyle.none)) {
		Debug.Log('pushed');
		if(!pressed){
			
			Press();	
		}
	}
	*/
	if(show){
		GUI.Box(Rect(left, top, width, height), name);
	}
}

function Update(){
	if(Input.GetMouseButton(0)){
		if(IsInBound(Input.mousePosition)){
			Press();
		}
		else{
			Release();
		}
	}
	else{
		Release();	
	}
	for (var touch : Touch in Input.touches) {
			if (touch.phase == TouchPhase.Began || touch.phase == TouchPhase.Moved) {
				// Construct a ray from the current touch coordinates
				if(IsInBound(touch.position)){
					Press();
				}
				else{
					pressed = false;	
				}
			}
			if (touch.phase == TouchPhase.Ended){
				if(IsInBound(touch.position)){
					Release();
				}
			}
		}
}

function IsInBound( position : Vector2){
	var py = Screen.height - position.y;
	if(position.x > left && position.x < left + width){
		if(py > top && py < top + height){
			return true	;
		}
	}
	return false;
}

function Press(){
	if(!pressed){
		for(trigger in triggers){
			trigger.Pull(name);
		}
	}
	pressed = true;
}

function Release(){
	pressed = false;
}