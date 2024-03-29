

class LessonInputTrigger extends Trigger {
	
	var inputTypes : String[] = ['register','restart', 'next','previous', 'repeat','pause'];
	var inputIndex : int;
	var inputType : String;
	private var lessons: LessonManager;	
	function Start() {
		lessons = GameObject.FindObjectOfType(LessonManager);
		
	}
	
	function Pull(param : String){
		switch(inputType){
			case 'register':
				lessons.Register(param);
				break;
			case 'restart':
				lessons.Restart();
				break;
			case 'next':
				lessons.Next();
				break;
			case 'previous':
				lessons.Previous();
				break;
			case 'repeat':
				lessons.Repeat();
				break;
			case 'pause':
				lessons.Pause();
				break;
		}
	}
}