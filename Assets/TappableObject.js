class TappableObject extends MonoBehaviour {

	var objects : Component[];
	var aura : GameObject;
	
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
		Instantiate(aura, Vector3(transform.position.x, transform.position.y, transform.position.z + 1), Quaternion.identity);
		for(var object : ActiveNode in objects){
			object.Activate();
		}
	}
}