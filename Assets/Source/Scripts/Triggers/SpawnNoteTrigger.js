
class SpawnNoteTrigger extends SpawnTrigger {

	function Pull(param : String){
		for( var target : GameObject in targets){
			var instance = Instantiate(target, spawnParent.position, spawnParent.rotation);
			instance.transform.parent = container;
			instance.GetComponent(Note).SetPitch(param);
		}
	}
}