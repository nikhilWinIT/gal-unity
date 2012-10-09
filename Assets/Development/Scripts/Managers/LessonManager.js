
class LessonManager extends MonoBehaviour {
	var lessons : Lesson[];
	var lessonsSize : int;
	var lesson : Lesson;
	var breakDuration : float;
	var on : boolean;
	var paused : boolean = false;
	var triggerManager : TriggerManager;
	
	private var lessonIndex : int = 0;
	
	function Start(){
		triggerManager = GameObject.FindObjectOfType(TriggerManager);
		SetLesson(lessonIndex);
	}
	function Restart(){
		lesson.Restart();
	}
	function Pause(){
		lesson.Pause();
		paused = true;
	}
	function Play(){
		lesson.Resume();
		paused = false;
	}
	
	function Next(){
		lessonIndex += 1;
		if(lessonIndex >= lessons.length) lessonIndex = 0;
		SetLesson(lessonIndex);
		if(!paused) lesson.Restart();
		triggerManager.EmitEvent('NextLesson');
	}
	
	function Previous(){
		lessonIndex -= 1;
		if(lessonIndex < 0) lessonIndex = lessons.length - 1;
		SetLesson(lessonIndex);
		if(!paused) lesson.Restart();
	}
	
	function SetLesson( index : int){
		if(lesson) lesson.Stop();
		lesson = lessons[index];	
		lesson.Initialize(triggerManager);
	}
	function SendInput( name : String ){
		lesson.SendInput(name);
	}
	function RegisterNote( param : boolean){
		lesson.RegisterNote(param);	
	}
	function Register( pitch : String){
		lesson.Register(pitch);	
	}
	function Update(){
		if(!paused){
			//UpdateLesson();
			lesson.UpdateLesson();
		}
	}
}