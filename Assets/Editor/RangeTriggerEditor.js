


@CustomEditor (RangeTrigger)
class RangeTriggerEditor extends Editor {
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
	var events : EventList;
	function Awake(){
		events= GameObject.FindObjectOfType(EventList);	
	}	
    function OnInspectorGUI () {
   	 	
	    target.eventOnEnter = EditorGUILayout.TextField('Event on enter: ', target.eventOnEnter);
	    if(GUI.changed){
	   		UpdateEventList();
	   		EditorUtility.SetDirty(target);
	   	}
   	}
   	function UpdateEventList(){
   		for( var i=0; i<events.list.length; i++){
   			if (events.list[i] == target.eventOnEnter) return ;
   		}
   		events.Add(target.eventOnEnter);
 
   	}
}