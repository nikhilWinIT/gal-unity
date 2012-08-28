class Messenger extends MonoBehaviour {
	var other : GameObject;
	
	function Send (message : String, index : int) {
		other.GetComponent(Messenger).Receive(message, index);
	}
	
	function Receive (message: String, index : int) {
		gameObject.SendMessage(message, index);
	}

}
