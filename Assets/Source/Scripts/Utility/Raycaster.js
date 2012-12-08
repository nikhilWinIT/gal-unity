class Raycaster extends MonoBehaviour{
	var target : Collider;	
	var screenPos : Vector2; 
	var touched : boolean;
	var pressed : boolean;
	var onPressTrigger: TriggerGroup;
	var onReleaseTrigger: TriggerGroup;
	function Start(){
		touched = false;
		pressed = false;	
	}
	function Update(){
		if(Input.touches.Length > 0){
			for(var touch : Touch in Input.touches){
				Debug.Log(touch);
				screenPos = touch.position;
				if(touch.phase == TouchPhase.Began) {touched = true;}
				if(touch.phase == TouchPhase.Ended) {touched = false;}
				CheckRay();
			}
				
			
		}
		else{
			if(Input.GetMouseButtonDown(0) || Input.GetMouseButtonUp(0)){
				screenPos = Input.mousePosition;
				touched = Input.GetMouseButtonDown(0);
				CheckRay();
			}
		}
	}
	function CheckRay(){
		var hit : RaycastHit; 
		if(Physics.Raycast(Camera.main.ScreenPointToRay(screenPos), hit)){
	        if(hit.collider.tag == target.tag) {
	        	if(touched){
	        		Press();
	        	}
	        	else{
	        		Release();
	        	}
	        }
	    }	
	    else {
	    	pressed = false;
	    }
		    
	}
	function Press(){
		Debug.Log('pressed');	
		pressed = true;
	}
	function Release(){
		if(pressed){
			Debug.Log('released');	
			onReleaseTrigger.Pull();
			pressed = false;
		}
	}
}