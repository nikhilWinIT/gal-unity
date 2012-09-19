


@CustomEditor (RangeTrigger)
class RangeTriggerEditor extends Editor {
/*
	var hooks : Hooks;
	var triggers : TriggerManager;
	var propertyName : String;
	var valueMin : float;
	var valueMax : float;
	var triggered : boolean;
	*/
	var eventOnExit : String;
	var eventOnEnter : String = '';
	var events : EventList;
	var hooks : Hooks;
	
	function Awake(){
		events= GameObject.FindObjectOfType(EventList);	
		hooks = GameObject.FindObjectOfType(Hooks);
		eventOnEnter = target.eventOnEnter;
	}	
    function OnInspectorGUI () {
    	target.propertyIndex = EditorGUILayout.Popup('Property', target.propertyIndex, hooks.hookKeys.ToArray());
    	target.propertyName = hooks.hookKeys[target.propertyIndex];
    	target.valueMin = EditorGUILayout.FloatField('Min', target.valueMin);
    	target.valueMax = EditorGUILayout.FloatField('Max', target.valueMax);
    	GUILayout.BeginHorizontal();
    		GUILayout.Label('Event on Enter');
		    eventOnEnter = EditorGUILayout.TextField(eventOnEnter);
		    if(GUILayout.Button('Save')) UpdateEventList();
	    GUILayout.EndHorizontal();
	    if(GUI.changed){
	   		EditorUtility.SetDirty(target);
	   	}
   	}
   	function UpdateEventList(){
   		events.Remove(target.eventOnEnter);
   		events.Add(eventOnEnter);
   		target.eventOnEnter = eventOnEnter;
 
   	}
}