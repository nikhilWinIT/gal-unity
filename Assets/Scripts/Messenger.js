class Messenger extends MonoBehaviour {
	var other : GameObject;
	
	function Send (message : String) {
		other.GetComponent(Messenger).Receive(message);
	}
	
	function Receive (message: String) {
		gameObject.SendMessage(message);
	}

}
