import System.Enum;

@CustomEditor (KeyToNoteTrigger)
class KeyToNoteTriggerEditor extends TriggerEditor {
	
    function OnInspectorGUI () {
    	var notes = GameObject.FindObjectOfType(NoteList);
    	target.pitchIndex = EditorGUILayout.Popup('pitch', target.pitchIndex, notes.list.ToArray());
    	target.pitch = notes.list[target.pitchIndex];
	   	if(GUI.changed){
	   		EditorUtility.SetDirty(target);
	   	}
   	}
}