class PatternManager extends MonoBehaviour {
	var current : GameObject;
	var patterns : GameObject[];
	var parent : GameObject;
	var index : int = 0;
	var owner : Character;
	
	function Start() {
		owner = gameObject.GetComponent(Character);
		GetPatterns();		
		SetPattern(patterns[index]);
		
	}
	
	function SetPatternByID(id) {
		SetPattern(patterns[id]);
	}
	
	function Next() {
		index += 1;
		if (index >= patterns.Length) index = 0;
		SetPattern(patterns[index]);
	}
	
	function SetPattern( pattern : GameObject) {
		owner.pattern = SerializePattern(pattern);
		owner.notes = SerializeNotes(pattern);
	}
	
	function SerializePattern(pattern : GameObject) {
		result = new Array();
		patternScript = pattern.GetComponent(Pattern);
		var strArray : Array = patternScript.patternString.Split('-'[0]);
		for(var i = 0; i < strArray.length; i++ ) {
			result.Push(parseFloat(strArray[i]));
		}
		Debug.Log(result);
		return result;
	}
	function SerializeNotes(pattern : GameObject) {
		var result = new Array();
		patternScript = pattern.GetComponent(Pattern);
		var strArray : Array = patternScript.notesString.Split('-'[0]);
		for(var i = 0; i < strArray.length; i++ ) {
			result.Push(parseFloat(strArray[i]));
		}
		Debug.Log(result);
		return result;
	}
	function GetPatterns(){
		var size : int = 0;
		for(var pattern : Transform in parent.transform) {
			size += 1;
		}
		patterns = new GameObject[size];
		Debug.Log(size);
		var i : int = 0;
		for(var pattern : Transform in parent.transform) {
			patterns[i] = pattern.gameObject;
			i += 1;	
		}
		
	}
}

