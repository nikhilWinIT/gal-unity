
@CustomEditor (TriggerGroup)
class TriggerGroupEditor extends Editor {
	var eventsList : List.<String>;
	var events : EventList;
	
	var index : int = 0;
	function Awake(){
		events= GameObject.FindObjectOfType(EventList);	
	}
    function OnInspectorGUI () {
    	target.on = EditorGUILayout.Toggle('On', target.on);
	    target.eventIndex = EditorGUILayout.Popup('Event',target.eventIndex, events.list.ToArray());
	    target.event = events.list[target.eventIndex];
	    target.oneShot = EditorGUILayout.Toggle('Trigger once', target.oneShot);	
	   	if(GUI.changed){
	   		EditorUtility.SetDirty(target);
	   	}
    }
}