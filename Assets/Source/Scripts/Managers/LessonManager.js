
class LessonManager extends MonoBehaviour {
	var lessons : Lesson[];
	var lessonsSize : int;
	var lesson : Lesson;
	var breakDuration : float;
	var on : boolean;
	var triggerManager : TriggerManager;
	var idleTime : float;
	
	private var lessonIndex : int = 0;
	
	function Start(){
		triggerManager = GameObject.FindObjectOfType(TriggerManager);
		SetLesson(lessonIndex);
	}
	function Restart(){
		lesson.Restart();
		idleTime = Time.time;
		
	}
	function Pause(){
		lesson.Pause();
	}
	function Play(){
		lesson.Resume();
	}
	function Repeat(){
		lesson.Repeat();	
	}
	
	function Next(){
		lessonIndex += 1;
		if(lessonIndex >= lessons.length) lessonIndex = 0;
		SetLesson(lessonIndex);
		lesson.Restart();
		triggerManager.EmitEvent('NextLesson');
	}
	
	function Previous(){
		lessonIndex -= 1;
		if(lessonIndex < 0){
		lessonIndex =0;	
		}
		//if(lessonIndex < 0) lessonIndex = lessons.length - 1;
		SetLesson(lessonIndex);
		lesson.Restart();
	}
	
	function SetLesson( index : int){
		if(lesson) lesson.Stop();
		lesson = lessons[index];	
		lesson.Initialize(triggerManager);
	}
	function Register( pitch : String){
		idleTime = Time.time;
		lesson.Register(pitch);	
	}
	function Update(){
		lesson.UpdateLesson();
	}
}