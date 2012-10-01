
@CustomEditor (PitchPositionTrigger)
class PitchPositionTriggerEditor extends TriggerEditor{
	//var options : String[] = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B','B#','Ch'];
    function OnInspectorGUI () {
		var noteList : NoteList;
		noteList = GameObject.FindObjectOfType(NoteList);
		var currentTargets = target.targets;
		target.targets = new GameObject[noteList.list.Count];
		target.target = EditorGUILayout.ObjectField('target', target.target, GameObject, true);
		for ( var i = 0; i<target.targets.length; i++){
			if(i < currentTargets.length){
				target.targets[i] = currentTargets[i];	
				}
		}
		for( i = 0; i<noteList.list.Count; i++){
			EditorGUILayout.BeginHorizontal();
			GUILayout.Label(noteList.list[i]);
			target.targets[i] = EditorGUILayout.ObjectField(target.targets[i], GameObject, true);
			EditorGUILayout.EndHorizontal();
		}
	   	if(GUI.changed){
	   		EditorUtility.SetDirty(target);
	   	}
    }
}