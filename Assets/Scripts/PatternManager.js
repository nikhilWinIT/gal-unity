class PatternManager extends MonoBehaviour {
	var current : GameObject;
	var patterns : GameObject[];
	var parent : GameObject;
	var index : int = 0;
	var owner : Character;
	var patternNames : String[];
	var startingIndex : int;
	
	function Start() {
		owner = gameObject.GetComponent(Character);
		GetPatterns();		
		SetPattern(patternNames[index]);
		
	}
	
	function SetPatternByID(id) {
		SetPattern(patternNames[id]);
	}
	
	function Next() {
		index += 1;
		if (index >= patterns.Length) index = 0;
		SetPattern(patternNames[index]);

	}
	
	function SetPattern( patternName : String) {
		var pattern = transform.FindChild('Patterns/'+patternName).gameObject;
		Debug.Log(pattern);
		owner.pattern = SerializePattern(pattern);
		owner.notes = SerializeNotes(pattern);
		Debug.Log(pattern.name);
		owner.track = pattern.GetComponent(Pattern).trackName;
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
			result.Push(strArray[i]);
		}
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

