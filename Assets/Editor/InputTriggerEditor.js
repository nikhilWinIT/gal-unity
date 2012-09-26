import System.Enum;

@CustomEditor (InputTrigger)
class InputTriggerEditor extends TriggerEditor {
	
    function OnInspectorGUI () {
    	target.keyIndex = EditorGUILayout.Popup('key', target.keyIndex, target.keyCodes);
   	 	target.inputIndex = EditorGUILayout.Popup('type', target.inputIndex, target.inputTypes);
   	 	target.triggers = EditorGUILayout.ObjectField('Trigger group', target.triggers, TriggerGroup, true);
	   	if(GUI.changed){
	   		EditorUtility.SetDirty(target);
	   	}
   	}
}