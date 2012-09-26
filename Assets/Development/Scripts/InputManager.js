
	private var keyCodes : String[] = System.Enum.GetNames(KeyCode);
	private var triggers : InputTrigger[];

	function Start(){
		triggers = GameObject.FindObjectsOfType(InputTrigger);	
	}
	function OnGUI(){
		var e  = Event.current;
		if(Input.anyKeyDown || e.type == EventType.KeyUp){
			var type = e.type.ToString();
			var name = e.keyCode.ToString();
			for( var trigger in triggers){
				if (type == trigger.inputType && name == trigger.keyCode){
					trigger.Pull();	
				Debug.Log(trigger.keyCode + '::::' + name);
				}
			}	
			e.Use();
			
		}
	}