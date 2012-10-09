

@CustomEditor (SpawnTrailTrigger)
class SpawnTrailTriggerEditor extends TriggerEditor {
	//var options : String[] = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B','B#','Ch'];PatternEditor
/*
	
	var animClip : AnimationClip;
	var hooks : Hooks;
	var propertyName : String;
	//var triggerType : TriggerTypes;
	var valueMin : float;
	var valueMax : float;
	var triggered : boolean;
	var event : String;
	var targets : GameObject[];
	*/
	
    function OnInspectorGUI () {
   	 	super.OnInspectorGUI();
   	 	target.spawnParent = EditorGUILayout.ObjectField('parent', target.spawnParent, Transform, true);
   	 	target.container = EditorGUILayout.ObjectField('container', target.container, Transform,true);
	   	if(GUI.changed){
	   		EditorUtility.SetDirty(target);
	   	}
   	}
}