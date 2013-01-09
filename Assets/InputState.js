
class InputState extends MonoBehaviour {
	
	function Update(){	
		if(Input.touches.Length > 0){
			Debug.Log(Input.touches);
//			ProcessTouch();
		}
		else{
	//		ProcessMouse();
		}
	}
}