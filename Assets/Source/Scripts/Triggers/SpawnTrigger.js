
class SpawnTrigger extends Trigger {

	var spawnObject : GameObject;
	var spawnParent: Transform;
	var container : Transform;
	var lifetime : float;
	
	function Pull(param : String){
		for( var target : GameObject in targets){
			var instance = Instantiate(target, spawnParent.position, spawnParent.rotation);
			instance.transform.parent = container;
			var duration = lifetime;
			/*if(instance.GetComponentInChildren(Animation)){
				var anim = instance.GetComponentInChildren(Animation);
				duration = anim.clip.length;	
			}
			*/
			if(lifetime != 0){
				DestroyAfter(instance,duration);
			}
		}
	}
	
	function DestroyAfter( instance : GameObject, duration : float){
		yield WaitForSeconds(duration);
		Destroy(instance);	
	}
}