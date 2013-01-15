#pragma strict


class SoundSphereBehaviour extends MonoBehaviour {
	var notes : String[];
	var radius : float;
	var col : SphereCollider;
	var collided : boolean;
	function Start(){
		col = gameObject.AddComponent(SphereCollider);
		col.isTrigger = true;
		col.radius = 0; 
	}
	function Update(){
		col.radius = Mathf.Clamp(col.radius + .1, 0, radius); 
		if(col.radius >= radius){
			//GameObject.Destroy(gameObject);	
		}
	}
	
	function SetNotes( _notes : String[]){
		notes = _notes;	
	}
}