

class LessonInputTrigger extends Trigger {
	
	var pitch :  String;
	var pitchIndex : int;
	var notes : NoteList;
	var sounds : SoundManager;
	private var lessons: LessonManager;	
	function Start() {
		lessons = GameObject.FindObjectOfType(LessonManager);
		notes = GameObject.FindObjectOfType(NoteList);
		sounds = GameObject.FindObjectOfType(SoundManager);
	}
	
	function Pull(param : String){
		lessons.SendInput(notes.list[pitchIndex]);
		sounds.Play(notes.list[pitchIndex]);
	}
}