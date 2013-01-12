#pragma strict


class SoundGroupNode extends ActiveNode {
	var soundNodes : SoundNode[] = new SoundNode[1];
	var soundsSize : int = 1;
	var soundsExpand : boolean;
	var tempo : float;	
	private var startTime : float;
	private var activated : boolean;
	private var sequenceIndex : int;
	
	function Start(){
		sequenceIndex = 0;
		tempo = 1;
	}
	
	function Update () {
		if(activated){
			Check();	
		}
	}
	
	function Activate(){
		sequenceIndex = 0;
		activated = true;	
		startTime = Time.realtimeSinceStartup;
	}
	
	function End(){
		activated = false;	
	}
	
	function Check(){
		if(Time.realtimeSinceStartup - startTime > sequenceIndex*tempo){
			soundNodes[sequenceIndex].PlayAll();	
			sequenceIndex += 1;
			if(sequenceIndex >= soundNodes.length){
				End();	
			}
		}	
	}
}
