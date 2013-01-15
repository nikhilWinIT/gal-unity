class Selector extends MonoBehaviour {

	private var ray : RayCollisionChecker;
	var selected : SoundListener;
	function Start(){
		ray = new RayCollisionChecker();	
		}	
	function Update(){
		if(Input.GetMouseButtonDown(0)){
			var hit = ray.CheckInput();	
			var listener =  hit.gameObject.GetComponent(SoundListener);
			if(listener){
				selected = listener; 	
				Debug.Log('soundlistener selected');	
			}
		}	
	}
}