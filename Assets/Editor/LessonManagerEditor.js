
import System.Collections.Generic;

@CustomEditor (LessonManager)
class LessonManagerEditor extends Editor {

    function OnInspectorGUI () {
    	var x : int = 0;
    	
    	EditorGUILayout.BeginHorizontal();
    		GUILayout.Label('Current Lesson');
    		GUILayout.Label( target.lessonIndex.ToString());
    		//GUILayout.Label( target.lesson.name.ToStr);
    	EditorGUILayout.EndHorizontal();
    	
    	EditorGUILayout.BeginHorizontal();
	    	if(GUILayout.Button('Play')) target.Play();
	    	if(GUILayout.Button('Pause')) target.Pause();
	    	if(GUILayout.Button('Restart')) target.Restart();
    	EditorGUILayout.EndHorizontal();
    	
    	EditorGUILayout.BeginHorizontal();
	    	if(GUILayout.Button('Next')) target.Next();
	    	if(GUILayout.Button('Previous')) target.Previous();
    	EditorGUILayout.EndHorizontal();
    	target.on = EditorGUILayout.Toggle('On', target.on);
        EditorGUILayout.BeginHorizontal();
	 	if (GUILayout.Button("Add"))
	        target.lessonsSize += 1;
	    if (GUILayout.Button('Remove'))
	    	target.lessonsSize -= 1;
        EditorGUILayout.EndHorizontal();
    	if(target.lessonsSize > 0){
	    	if(target.lessons.length != target.lessonsSize) {
			        var newLessons : Lesson[] = new Lesson[target.lessonsSize];
			        for(x = 0; x < target.lessonsSize; x++) {
			            if(target.lessons.length > x) {
			                newLessons[x] = target.lessons[x];
			            }
			        }
			        target.lessons = newLessons;
		    }
	   }
	   
	    for(x = 0; x < target.lessons.length; x++) {
	    	EditorGUILayout.BeginHorizontal ();
	        EditorGUILayout.LabelField((x+1).ToString(), GUILayout.Width(10));
	        target.lessons[x] = EditorGUILayout.ObjectField(target.lessons[x], Lesson, true);
	        EditorGUILayout.EndHorizontal();
	    }
	    target.breakDuration = EditorGUILayout.FloatField('break duration', target.breakDuration);
   	
	   	if(GUI.changed){
	   		EditorUtility.SetDirty(target);
	   	}
    }
}