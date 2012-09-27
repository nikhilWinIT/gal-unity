import System.Enum;

@CustomEditor (LessonInputTrigger)
class LessonInputTriggerEditor extends TriggerEditor {
	
    function OnInspectorGUI () {
    	var notes = GameObject.FindObjectOfType(NoteList);
    	target.pitchIndex = EditorGUILayout.Popup('pitch', target.pitchIndex, notes.list.ToArray());
	   	if(GUI.changed){
	   		EditorUtility.SetDirty(target);
	   	}
   	}
}