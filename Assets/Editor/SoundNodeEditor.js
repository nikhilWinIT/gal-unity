
import System.Collections.Generic;

@CustomEditor (SoundNode)
class SoundNodeEditor extends Editor {
	var index : int = 0;
	function Awake(){
	}
    function OnInspectorGUI () {
    	target.spawnSphere = EditorGUILayout.Toggle(target.spawnSphere);
    	target.soundClip = EditorGUILayout.ObjectField(target.soundClip, AudioClip, true);
    	var x : int = 0;
    	if(GUILayout.Button('Play')) target.PlayAll();
	   	target.notesExpand = EditorGUILayout.Foldout(target.notesExpand, "Targets");
	   	if(target.notesExpand){
	        EditorGUILayout.BeginHorizontal();
		 	if (GUILayout.Button("Add"))
		        target.notesSize += 1;
		    if (GUILayout.Button('Remove'))
		    	target.notesSize -= 1;
	        EditorGUILayout.EndHorizontal();
	    	if(target.notesSize > 0){
		    	if(target.notes.length != target.notesSize) {
				        var newTargets : String[] = new String[target.notesSize];
				        for(x = 0; x < target.notesSize; x++) {
				            if(target.notes.length > x) {
				                newTargets[x] = target.notes[x];
				            }
				        }
				        target.notes= newTargets;
			    }
		   }
		   
		    for(x = 0; x < target.notes.length; x++) {
		    	EditorGUILayout.BeginHorizontal ();
		        EditorGUILayout.LabelField((x+1).ToString(), GUILayout.Width(10));
		        target.notes[x] = EditorGUILayout.TextField(target.notes[x]);
		        EditorGUILayout.EndHorizontal();
		    }
		}
	   	
	   	if(GUI.changed){
	   		EditorUtility.SetDirty(target);
	   	}
    }
}