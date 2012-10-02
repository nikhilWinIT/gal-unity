

class LessonInputTrigger extends Trigger {
	
	private var inputTypes : String[] = ['good', 'bad', 'lastNote'];
	private var inputIndex : int;
	private var inputType : String;
	private var lessons: LessonManager;	
	private var triggers;
	function Start() {
		triggers = GameObject.FindObjectOfType(TriggerManager);
		lessons = GameObject.FindObjectOfType(LessonManager);
	}
	
	function Pull(param : String){
		switch(inputType){
			case 'good':
				lessons.CorrectPitch(param);
				break;
			case 'bad':
				lessons.WrongPitch(param);
				break;
		}
	}
}