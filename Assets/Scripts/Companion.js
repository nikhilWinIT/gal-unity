	class Companion extends Character {
	var owner : Character;
	var player : Character;
	var satisfaction: int;
	var goal : int = 4;
	var nextState : String;
	var states : GameObject;
	var stage : int = 1;
	var phase : int = 1;
	var stateManager : StateManager;
	var patternManager : PatternManager;
	var beat : int;
	var beatLength : float;
	
	function Awake() {
		super.Awake();
		patternManager = gameObject.GetComponent(PatternManager);	
	}
	
	function Sing() {
		super.Sing();
		PlaySound();
	}
	
	function Start() {
		owner = gameObject.GetComponent(Character);
		player = GameObject.Find('Player').GetComponent(Character);
	}
	function Enter() {
		super.Enter();
		gameObject.GetComponent(Waiting).ExitAfterSeconds(10);
	}
	function Update() {
		super.Update();
		
	}
	
	function Success() {
		satisfaction += 1;
		if ( satisfaction > goal ) {
			phase += 1;
			satisfaction = 0;
			NextPattern();
		}
	}
	
	function SetPatternByID(id){
		patternManager.SetPatternByID(id);
	}
	
	function Nod() {
		if(HOTween.IsTweening(body) == false){
			var seq = new Sequence(new SequenceParms());
			seq.Append(HOTween.To(body, .1, "localPosition", new Vector3(0,-.2,0)));
			seq.Append(HOTween.To(body, .2, "localPosition", new Vector3(0,0,0)));
			seq.Play();
		}
	}
	
	function Jump() {
		HOTween.Kill();
		var seq = new Sequence(new SequenceParms());
		seq.Append(HOTween.To(body, .2, "localPosition", new Vector3(0,.5,0)));
		seq.Append(HOTween.To(body, .1, "localPosition", new Vector3(0,0,0)));
		seq.Append(HOTween.To(body, .25, "localPosition", new Vector3(0,.6,0)));
		seq.Append(HOTween.To(body, .15, "localPosition", new Vector3(0,0,0)));
	
		seq.Play();
	}
	
	function Tilt() {
		var seq = new Sequence(new SequenceParms());
		seq.Append(HOTween.To(body, .25, 'rotation', new Vector3(0, 0, 18)));
		seq.Append(HOTween.To(body, .25, 'rotation', new Vector3(0, 0, -25)));
		seq.Append(HOTween.To(body, .25, 'rotation', new Vector3(0, 0, 8)));
		seq.Append(HOTween.To(body, .2, 'rotation', new Vector3(0, 0, 0)));
		seq.Play();
	}
	
	function SetNextState(state) {
		nextState = state;
	}

	function NextPattern() {
		patternManager.Next();
	}
}
