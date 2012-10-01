@CustomEditor (ScrollerEmitter)
class ScrollerEmitterEditor extends Editor {
	
    function OnInspectorGUI () {
    	super.OnInspectorGUI();
    	if(GUILayout.Button('Pause')) target.Pause();
    	if(GUILayout.Button('Play')) target.Play();
	   	if(GUI.changed){
	   		EditorUtility.SetDirty(target);
	   	}
   	}
}