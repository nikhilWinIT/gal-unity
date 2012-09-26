

class LessonTrigger extends Trigger {
	
	var on : boolean;
	private var lessonManager : LessonManager;	
	
	function Start(){
		lessonManager = GameObject.FindObjectOfType(LessonManager);	
	}	
	function Pull(){
		if(on){
			lessonManager.Play();	
		}
		else {
			lessonManager.Pause();	
		}
	}
}