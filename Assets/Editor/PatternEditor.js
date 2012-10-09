
@CustomEditor (Pattern)
class PatternEditor extends Editor {
	//var options : String[] = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B','B#','Ch'];
	var index : int = 0;
	var notes : NoteList;
    function OnInspectorGUI () {
    	notes = GameObject.FindObjectOfType(NoteList);
    	var x : int = 0;
    	if(GUILayout.Button('Add note')){
    		target.length += 1;
    	}	
			EditorGUILayout.BeginHorizontal ();
			GUILayout.Label("#", GUILayout.Width(10));
	        GUILayout.Label("Beat", GUILayout.Width(60));
		    GUILayout.Label("Pitch", GUILayout.Width(50));
		    EditorGUILayout.EndHorizontal();
		    if(target.rhythm.length != target.length) {
		        var newRhythm : float[] = new float[target.length];
		        var newMelody : int[] = new int[target.length];
		        for(x = 0; x < target.length; x++) {
		            if(target.rhythm.length > x) {
		                newRhythm[x] = target.rhythm[x];
		                newMelody[x] = target.melodyIndices[x];
		            }
		        }
		        target.rhythm = newRhythm;
	         	target.melodyIndices = newMelody;
		    }
		    for(x = 0; x < target.rhythm.length; x++) {
		    	EditorGUILayout.BeginHorizontal ();
		        EditorGUILayout.LabelField((x+1).ToString(), GUILayout.Width(10));
		        target.rhythm[x] = EditorGUILayout.FloatField(target.rhythm[x], GUILayout.Width(60));
		        target.melodyIndices[x] = EditorGUILayout.Popup(target.melodyIndices[x], notes.list.ToArray(), GUILayout.Width(50));
		        EditorGUILayout.EndHorizontal();
		    }
		    if(GUILayout.Button('Remove note')) target.length -= 1;
	   	if(GUI.changed){
	   		target.UpdateMelody();
	   		EditorUtility.SetDirty(target);
	   	}
    }
    
    function UpdateArrays(){
    	Debug.Log('changed');
    }	
}