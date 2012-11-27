
@CustomEditor (NoteSwitchTrigger)
class NoteSwitchTriggerEditor extends TriggerEditor{
	//var options : String[] = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B','B#','Ch'];
    function OnInspectorGUI () {
		var noteList : NoteList;
		noteList = GameObject.FindObjectOfType(NoteList);
		var currentTriggers = target.triggers;
		target.triggers = new TriggerGroup[noteList.list.Count];
		for ( var i = 0; i<target.triggers.length; i++){
			if(i < currentTriggers.length){
				target.triggers[i] = currentTriggers[i];	
				}
		}
		for( i = 0; i<noteList.list.Count; i++){
			EditorGUILayout.BeginHorizontal();
			GUILayout.Label(noteList.list[i]);
			target.triggers[i] = EditorGUILayout.ObjectField(target.triggers[i], TriggerGroup, true);
			EditorGUILayout.EndHorizontal();
		}
	   	if(GUI.changed){
	   		EditorUtility.SetDirty(target);
	   	}
    }
}