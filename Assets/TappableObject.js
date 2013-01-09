class TappableObject extends MonoBehaviour {

	var objects : ActiveNode;
	
	private var ray : RayCollisionChecker;
	
	function Start(){
		ray = new RayCollisionChecker();
	}	
	
	function Update(){
		if(Input.GetMouseButtonUp(0)){
			var hit = ray.CheckInput();	
			if(hit.gameObject.GetInstanceID() == gameObject.GetInstanceID()){
				Activate();
			}
		}
	}
	function Activate(){
		objects.Activate();	
	}
}