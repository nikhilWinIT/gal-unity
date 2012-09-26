class Controls extends MonoBehaviour {
	var keys : KeyManager;
	var keymap : Keymap;
	function Start(){
		keys = GameObject.FindObjectOfType(KeyManager);	
		keymap = GameObject.FindObjectOfType(Keymap);
	}	
	function OnGUI(){
		var e : Event = Event.current;
		if(e.type == EventType.KeyUp){
			keys.DeselectKey(keymap.GetName( e.keyCode.ToString()));
			
		}
		if(Input.anyKeyDown){
			if(e.type == EventType.KeyDown) {
				keys.SelectKey(keymap.GetName( e.keyCode.ToString()));
				e.Use();
			}
		}
	}
}