class Trigger extends MonoBehaviour {
	var eventIndex : int = 0;
	var event : String;
	var events : String[];
	var targetsSize : int = 1;
	var targets : GameObject[] = [];
	var targetsExpand : boolean = true;
	function Awake(){
		events = GameObject.FindObjectOfType(EventList).events;
	}
}