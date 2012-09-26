@CustomEditor (LessonTrigger)
class LessonTriggerEditor extends Editor {
    function OnInspectorGUI () {
    	target.on = EditorGUILayout.Toggle('On', target.on);
	   	if(GUI.changed){
	   		EditorUtility.SetDirty(target);
	   	}
    }
}