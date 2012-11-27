
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

function Start(){
}
function OnGUI(){
/*
	style = new GUIStyle(GUI.skin.button);
	style.normal.background = texture;
	if(Event.current.type.Equals(EventType.Repaint)){
		//GUI.color = color;
		var screenPos = Camera.main.WorldToScreenPoint(transform.position);	
		if(percent){
			width = Screen.width*widthPercent;
			height = Screen.height*heightPercent;		
		}
		left = leftOffset + width*offset;
		top = height*offsetTop;
		if(GUI.Button( new Rect(left, top, width, height), '')) {
			Debug.Log('pushed');
			if(!pressed){
				
				Press();	
			}
		}

	//	GUI.Box(Rect(left, top, width, height), name);	
//		GUI.DrawTexture(Rect(left,top,width,height), texture, ScaleMode.ScaleToFit, true, width/height);

	}
	*/
	GUI.Button(new Rect(0, 0, 200, 200), 'TEST');
	
}

function Update(){

/*
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
			
			*/
		//}
		
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
	if(!pressed){
		for(trigger in triggers){
			trigger.Pull(note);
		}
	}
	pressed = true;
}

function Release(){
	//color.a = .2;
	pressed = false;
}