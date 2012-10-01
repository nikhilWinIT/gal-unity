

import System.Collections.Generic;
class ResetTrigger extends Trigger {
	
	
	var enable : boolean = true;
	var componentName : String;
	var targetComponent : Component;
	var componentIndex : int;
	var fieldName : String;
	var targetField;
	var fieldIndex : int;
	var resetValue : int;
	function Start() {
		targetField = targetComponent.GetType().GetField(fieldName);
	}
	
	
	function Pull(param : String){
		//var component = targets[0].GetComponent(targetComponent);
		targetField.SetValue(targetComponent, resetValue);
	}
	
}