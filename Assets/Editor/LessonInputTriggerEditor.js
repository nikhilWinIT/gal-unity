import System.Enum;

@CustomEditor (LessonInputTrigger)
class LessonInputTriggerEditor extends TriggerEditor {
	
    function OnInspectorGUI () {
    	target.inputIndex = EditorGUILayout.Popup('type', target.inputIndex, target.inputTypes);
    	target.inputType = target.inputTypes[target.inputIndex];
	   	if(GUI.changed){
	   		EditorUtility.SetDirty(target);
	   	}
   	}
}