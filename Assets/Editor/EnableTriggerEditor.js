@CustomEditor (EnableTrigger)
class EnableTriggerEditor extends TriggerEditor {
	
    function OnInspectorGUI () {
   	 	super.OnInspectorGUI();
   	 	target.enable = EditorGUILayout.Toggle('Enable', target.enable);
	   	if(GUI.changed){
	   		EditorUtility.SetDirty(target);
	   	}
   	}
}