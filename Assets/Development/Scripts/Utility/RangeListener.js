

import System.Collections.Generic;
class RangeListener extends MonoBehaviour{
	
	
	var source : GameObject;
	var componentName : String;
	var targetComponent : Component;
	var componentIndex : int;
	var fieldName : String;
	var targetField;
	var fieldIndex : int;
	var triggers : TriggerManager;	
	var valueMin : float;
	var valueMax : float;
	var triggered : boolean;
	var eventOnEnter : String;
	var eventOnExit : String;
	var entryTriggers : TriggerGroup;
	var exitTriggers : TriggerGroup;
	function Start() {
		targetField = targetComponent.GetType().GetField(fieldName);
		triggers = GameObject.FindObjectOfType(TriggerManager);
	}
	
	function Update(){
		Check();	
	}	
	
	
	function Check() {
		var _value = targetField.GetValue(targetComponent);
		if(_value >= valueMin && _value < valueMax){
			if(!triggered) Enter();
		}
		else {
			if(triggered) Exit();
		}
	}
	
	function Enter(){
		triggers.EmitEvent(eventOnEnter);
		entryTriggers.Pull();
		Debug.Log('trig');
		triggered = true;
	}
	
	function Exit(){
		exitTriggers.Pull();
		triggers.EmitEvent(eventOnExit);
		EnableTrigger();	
	}
	
	function EnableTrigger(){
		triggered = false;
	}
}