@script ExecuteInEditMode()
var targets : GameObject[];
var offsetX : float;
var offsetY : float;
var offsetZ : float;

function Update(){

	var p = transform.position;
	if(targets.length != 0){
		for(var target in targets){
			target.transform.position = Vector3(p.x + offsetX, p.y + offsetY, p.z + offsetZ);
		}
	}
}