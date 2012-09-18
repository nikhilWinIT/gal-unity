class Trigger extends MonoBehaviour {
	var eventIndex : int = 0;
	var event : String;
	var events : String[] = ['PlayLessonBeat', 'KeyDownC'];
	var targetsSize : int = 1;
	var targets : GameObject[] = [];
	var targetsExpand : boolean = true;
}