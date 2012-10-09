
class SpawnTrailTrigger extends SpawnTrigger {
	function Pull(param : String){
		for( var target : GameObject in targets){
			var old = container.gameObject.GetComponentInChildren(TrailRenderer);
			if(old){
				Destroy(old.gameObject);
			}
			var instance = Instantiate(target, spawnParent.position, spawnParent.rotation);
			instance.transform.parent = container;
		}
	}
}