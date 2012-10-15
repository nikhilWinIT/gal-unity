

import System.Collections.Generic;
class IncrementTrigger extends Trigger {
	
	
	var enable : boolean = true;
	var componentName : String;
	var targetComponent : Component;
	var componentIndex : int;
	var fieldName : String;
	var targetField : System.Reflection.FieldInfo ;
	var fieldIndex : int;
	var increment : int;
	function Start() {
		targetField = targetComponent.GetType().GetField(fieldName);
	}
	
	
	function Pull(param : String){
		//var component = targets[0].GetComponent(targetComponent);
		var targetValue : int = targetField.GetValue(targetComponent);
		var value = targetValue + increment;
		targetField.SetValue(targetComponent, value);
	}
	
}