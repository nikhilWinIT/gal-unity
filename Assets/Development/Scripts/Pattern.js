#pragma strict
@script ExecuteInEditMode()
var length : int = 1;
var rhythm : float[] = [0.0];
var rhythmExpand : boolean = false;
var melody : String[];
var melodyIndices : int[] = [0];
var options : String[] = ['C','Cs','D','Ds','E','F','Fs','G','Gs','A','As','B','Bs','Ch'];


function Awake () {
	UpdateMelody();
}



function UpdateMelody(){
	Debug.Log("changed");
	UpdateMelodyString();
	
}

function UpdateMelodyString(){
	melody = new String[melodyIndices.length];
	for( var i = 0; i<melodyIndices.length; i++){
		melody[i] = options[melodyIndices[i]];
	}
	
}
