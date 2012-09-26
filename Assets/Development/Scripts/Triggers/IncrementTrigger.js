

import System.Collections.Generic;
class IncrementTrigger extends Trigger {
	
	
	var enable : boolean = true;
	var componentName : String;
	var targetComponent : Component;
	var componentIndex : int;
	var fieldName : String;
	var targetField;
	var fieldIndex : int;
	var increment : int;
	function Start() {
		Debug.Log(fieldName);
		targetField = targetComponent.GetType().GetField(fieldName);
		Debug.Log(targetField.GetValue(targetComponent));
	}
	
	
	function Pull(){
		//var component = targets[0].GetComponent(targetComponent);
		var value = targetField.GetValue(targetComponent) + increment;
		Debug.Log('increment ' + value);
		targetField.SetValue(targetComponent, value);
	}
	
}