
import System.Enum;
class InputTrigger extends MonoBehaviour{ 
	var keyIndex : int;	
	var triggers : TriggerGroup;
	var keyCode : String;
	var keyCodes : String[] = System.Enum.GetNames(KeyCode);
	var inputIndex : int;
	var inputType : String;
	var inputTypes : String[] = System.Enum.GetNames(EventType);
	function Awake(){
		keyCode = keyCodes[keyIndex];
		inputType = inputTypes[inputIndex];
	}
	function Pull(){
		Pull('');	
		}	
	function Pull(param : String){
		triggers.Pull();
	}
}