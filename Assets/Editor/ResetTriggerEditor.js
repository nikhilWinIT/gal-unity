@CustomEditor (ResetTrigger)
class ResetTriggerEditor extends TriggerEditor {
	
    function OnInspectorGUI () {
   	 	super.OnInspectorGUI();
   	 	if(target.targets[0]){	
	   	 	var components = target.targets[0].GetComponents(Component);
	   	 	var componentsStr = new List.<String>();
	   	 	var newComponents = new List.<Component>();
	   	 	for(var component in components){
	   	 		if(component.GetType().Name == "Transform" || component.GetType().Name == "Animation"){
	   	 				
	   	 		}
	   	 		else{
	   	 			newComponents.Add(component);		
	   	 		}	
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
	   	 	var i = 0;
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
	   	 	target.resetValue= EditorGUILayout.IntField('Reset Value', target.resetValue);
	   	 }
	   	if(GUI.changed){
	   		EditorUtility.SetDirty(target);
	   	}
   	}
}