
class SpawnNoteSignTrigger extends SpawnTrigger {

	function Pull(param : String){
		for( var target : GameObject in targets){
			var instance = Instantiate(target, spawnParent.position, spawnParent.rotation);
			var text = instance.GetComponentInChildren(TextMesh);
			Debug.Log(text);
			text.text = param;
			instance.transform.parent = container;
			//instance.GetComponent(Note).SetPitch(param);
		}
	}
}