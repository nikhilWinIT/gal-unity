
@script ExecuteInEditMode()
var percent : boolean;
var note : String;
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
var texture : Texture;
var color : Color;
var style : GUIStyle;
var alphaIdle : float;
var fadeSpeedFactor : float;
var on : boolean;

function Start(){
	Show();
	pressed = false;
	on = true;
}
function OnGUI(){
	style = new GUIStyle(GUI.skin.button);
	style.normal.background = texture;
	style.onActive.background = texture;
	if(Event.current.type.Equals(EventType.Repaint)){
		GUI.color = color;
		var screenPos = Camera.main.WorldToScreenPoint(transform.position);	
		if(percent){
			width = Screen.width*widthPercent;
			height = Screen.height*heightPercent;		
		}
		left = leftOffset + width*offset;
		top = height*offsetTop;
		if(GUI.Button( new Rect(left, top, width, height), '', GUIStyle.none)) {
			Debug.Log('pushed');
			if(!pressed){
				
				Press();	
			}
		}

	//	GUI.Box(Rect(left, top, width, height), name);	
		GUI.DrawTexture(Rect(left,top,width,height), texture, ScaleMode.ScaleToFit, true, width/height);

	}
	
}

function Update(){
	if(on){
		if(Input.touches.Length > 0){
			Debug.Log(Input.touches);
			ProcessTouch();
		}
		else{
			ProcessMouse();
		}
	}
	UpdateColor();
}	

function UpdateColor(){
	if(!pressed){
		color.a = Mathf.Clamp(color.a - color.a/fadeSpeedFactor, alphaIdle, 1); 	
	}
}
	
function ProcessTouch(){
	var released = true;
	for (var touch : Touch in Input.touches) {
		if (touch.phase == TouchPhase.Began || touch.phase == TouchPhase.Moved) {
			Debug.Log(touch.position)	;
			// Construct a ray from the current touch coordinates
			if(IsInBound(touch.position)){
				Press();
				released = false;
			}
		}
		else {
			released = false;
		}
		if (touch.phase == TouchPhase.Ended){
			if(IsInBound(touch.position)){
				//Release();
				released = true;
			}
		}
	}
	if( released){
		Release();
	}
}

function ProcessMouse(){
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
}

function Show(){
 	on = true;
 	color.a = 1;
 	alphaIdle = .2;
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
	color.a = 1;	
	/*
	if(!pressed){
		for(trigger in triggers){
			trigger.Pull(note);
		}
	}
	pressed = true;
	*/
}

function Release(){
	pressed = false;
}