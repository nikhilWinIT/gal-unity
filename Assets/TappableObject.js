class TappableObject extends MonoBehaviour {

	var objects : Component[];
	
	private var ray : RayCollisionChecker;
	
	function Start(){
		ray = new RayCollisionChecker();
		objects = gameObject.GetComponentsInChildren(ActiveNode);
	}	
	
	function Update(){
		if(Input.GetMouseButtonDown(0)){
			var hit = ray.CheckInput();	
			if(hit.gameObject.GetInstanceID() == gameObject.GetInstanceID()){
				Activate();
			}
		}
	}
	function Activate(){
		for(var object : ActiveNode in objects){
			object.Activate();
		}
	}
}