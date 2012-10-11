
class KeyboardAnimTrigger extends Trigger {
	
	var animClip : AnimationClip;
	private var shiftFactor : float = 1.05946;
	var notes : NoteList; 
	function Start(){
		notes = GameObject.FindObjectOfType(NoteList);
		for(var target : GameObject in targets){
			if(target){
				if(!target.animation){
					target.AddComponent(Animation);
				}	
				target.animation.AddClip(animClip, animClip.name);
			}
		}
	}
	function Pull(){
		Pull('C');	
	}
	function Pull(param : String){
		if(param.length == 0) param = 'C';
		for(var i = 0; i<notes.list.Count; i++){
			if( notes.list[i] == param){
//				targets[i].animation.Stop();
	//			targets[i].animation.Play(animClip.name);
			}	
		}
	}

	
}