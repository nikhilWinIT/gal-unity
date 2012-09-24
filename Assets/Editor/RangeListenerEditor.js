


@CustomEditor (RangeListener)
class RangeListenerEditor extends Editor {
	var eventOnExit : String = '';
	var eventOnEnter : String = '';
	var events : EventList;
	
	function Awake(){
		events= GameObject.FindObjectOfType(EventList);	
		eventOnEnter = target.eventOnEnter;
		eventOnExit = target.eventOnExit;
	}	
    function OnInspectorGUI () {
    	target.source = EditorGUILayout.ObjectField('Source', target.source, GameObject, true);
    	if(target.source){
   	 	var components = target.source.GetComponents(Component);
   	 	var componentsStr = new List.<String>();
   	 	var newComponents = new List.<Component>();
   	 	for(var component in components){
   	 		var valid = true;
   	 		for(var name in ['Transform','Animation', 'MeshFilter']){
   	 			if(component.GetType().Name == name) {
   	 				valid = false;
   	 				break;
   	 			}
   	 		}
   	 		if(valid) newComponents.Add(component);
   	 		
   	 	}
   	 	
   	 	for(var component in newComponents){
   	 		componentsStr.Add(component.GetType().Name);	
   	 	}
   	 	if(target.componentIndex >= componentsStr.Count){
   	 		 target.componentIndex = 0;
   	 		 }
   	 	target.componentIndex = EditorGUILayout.Popup('Component', target.componentIndex, componentsStr.ToArray());
   	 	var component = newComponents[target.componentIndex];
   	 	target.targetComponent = component;
   	 	var fields = component.GetType().GetFields();
   	 	var fieldsStr = new List.<String>();
   	 	var newFields = new List.<System.Reflection.FieldInfo>();
   	 	for(var field in fields){
   	 		if(field.FieldType == System.Int32 || field.FieldType == System.Single ){
	   	 		newFields.Add(field);
	   	 	}
 		}
 		for(var field in newFields){
 			fieldsStr.Add(field.Name);	
 		}
 		if(fieldsStr.Count != 0){
	   	 	target.fieldIndex = EditorGUILayout.Popup('Field', target.fieldIndex, fieldsStr.ToArray());	
	   	 	target.fieldName = fieldsStr[target.fieldIndex];
	   	 	target.targetField = newFields[target.fieldIndex];
   	 	}
   	 	else {
   	 		GUILayout.Label('No fields available');
   	 	}
   	 	
    	target.valueMin = EditorGUILayout.FloatField('Min', target.valueMin);
    	target.valueMax = EditorGUILayout.FloatField('Max', target.valueMax);
    	GUILayout.BeginHorizontal();
    		GUILayout.Label('Event on Enter', GUILayout.Width(80));
		    eventOnEnter = EditorGUILayout.TextField(eventOnEnter);
		    if(GUILayout.Button('Save')) UpdateEventList();
	    GUILayout.EndHorizontal();
	    
    	GUILayout.BeginHorizontal();
    		GUILayout.Label('Event on Exit', GUILayout.Width(80));
		    eventOnExit= EditorGUILayout.TextField(eventOnExit);
		    if(GUILayout.Button('Save')) UpdateEventList();
	    GUILayout.EndHorizontal();
	    
	    if(GUI.changed){
	   		EditorUtility.SetDirty(target);
	   	}
	   	}
   	}
   	function OnDestroy(){
   		if(!target){
   			RemoveEvents();
   		}
   	}
   	function UpdateEventList(){
   		RemoveEvents();
   		AddEvents();
   		target.eventOnExit = eventOnExit;
   		target.eventOnEnter = eventOnEnter;
 
   	}
   	function RemoveEvents(){
   		events.RemoveCustom(target.eventOnEnter);
   		events.RemoveCustom(target.eventOnExit);
   	}
   	function AddEvents(){
   		events.AddCustom(eventOnEnter);
   		events.AddCustom(eventOnExit);
   	
   	}
}