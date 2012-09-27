@CustomEditor (NoteList)
class NoteListEditor extends Editor {
    function OnInspectorGUI () {
    	for(var note in target.list){
    	
       		GUILayout.Label(note);
     
       	}
       	if(GUILayout.Button('Reload')){
       		target.Reload();
	   		EditorUtility.SetDirty(target);
       	}
	   	if(GUI.changed){
	   		EditorUtility.SetDirty(target);
	   	}
    }
}