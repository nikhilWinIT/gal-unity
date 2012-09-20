

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
	}
	
	function Trigger(){
		var value = targetField.GetValue() + increment;
		targetField.SetValue(value);
	}
}