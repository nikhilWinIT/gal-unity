

@CustomEditor (AnimationTrigger)
class AnimationTriggerEditor extends TriggerEditor {
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
    	target.animClip = EditorGUILayout.ObjectField('Clip', target.animClip, AnimationClip, true);
    	target.fadeValue = EditorGUILayout.FloatField('Crossfade', target.fadeValue);
    	target.reverse = EditorGUILayout.Toggle('Reverse animation', target.reverse);
	   	if(GUI.changed){
	   		EditorUtility.SetDirty(target);
	   	}
   	}
}