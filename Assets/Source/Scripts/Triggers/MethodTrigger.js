

import System.Collections.Generic;
class MethodTrigger extends Trigger {
	
	
	var enable : boolean = true;
	var componentName : String;
	var targetComponent : Component;
	var componentIndex : int;
	var methodName : String;
	var targetMethod;
	var methodIndex : int;
	var increment : int;
	function Start() {
		targetMethod = targetComponent.GetType().GetMethod(methodName);
	}
	
	
	function Pull(param : String){
		//var component = targets[0].GetComponent(targetComponent);
		//var value = targetField.GetValue(targetComponent) + increment;
		//targetField.SetValue(targetComponent, value);
		Debug.Log(targetComponent);
		//var params = new System.Object[1];
		targetMethod(targetComponent, 'sd' );
	}
	
}