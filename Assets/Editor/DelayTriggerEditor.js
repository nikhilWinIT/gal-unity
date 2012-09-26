@CustomEditor (DelayTrigger)
class DelayTriggerEditor extends TriggerEditor {
	
    function OnInspectorGUI () {
   	 	target.delay = EditorGUILayout.FloatField('delay', target.delay);
   	 	target.triggers = EditorGUILayout.ObjectField('Trigger group', target.triggers, TriggerGroup, true);
	   	if(GUI.changed){
	   		EditorUtility.SetDirty(target);
	   	}
   	}
}