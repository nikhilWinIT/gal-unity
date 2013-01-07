class RayCollisionChecker {
	var screenPos : Vector2; 
	var target : Collider;
	var touched : boolean = false;
	function CheckInput(){
		if(Input.touches.Length > 0){
			for(var touch : Touch in Input.touches){
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
		return target;	
	}
	function CheckRay(){
		var hit : RaycastHit; 
		if(Physics.Raycast(Camera.main.ScreenPointToRay(screenPos), hit)){
			target = hit.collider;
	    }	
	}
}