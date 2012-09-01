class Messenger extends MonoBehaviour {
	var other : GameObject;
	
	function Send (message : String, name : String) {
		other.GetComponent(Messenger).Receive(message, name);
	}
	
	function Receive (message: String, name : String) {
		gameObject.SendMessage(message, name);
	}

}
