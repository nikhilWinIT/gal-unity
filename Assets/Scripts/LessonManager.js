
class LessonManager extends MonoBehaviour {
	var lessons : Lesson[];
	var index : int = 0;
	var lesson : Lesson;
	
	private var lessonIndex : int;
	
	function Start(){
		SetLesson();
	}
	function UpdateLesson(){
		if( lessonIndex != index) {
			SetLesson();
		}
	}
	function SetLesson(){
		if(lesson) lesson.Stop();
		lessonIndex = index;
		lesson = lessons[lessonIndex];	
		lesson.Initialize();
	}
	function Update(){
		UpdateLesson();
		lesson.CheckForNote();
	}
}