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
	var sounds : GameObject;
	var soundManager : CompSoundManager;
	var dancingPhase : int;
	
	function Awake() {
		super.Awake();
		patternManager = gameObject.GetComponent(PatternManager);	
		soundManager = sounds.GetComponent(CompSoundManager); 
	}
	
	function Sing() {
		super.Sing();
	}
	
	function Start() {
		owner = gameObject.GetComponent(Character);
		player = GameObject.Find('Player').GetComponent(Character);
	}
	function Enter() {
		super.Enter();
		gameObject.GetComponent(Waiting).ExitAfterSeconds(0);
	}
	function Update() {
		super.Update();
		
	}
	
	function Fail() {
	owner.Tilt();
	soundManager.Play('Wrong');
	}
	function SingAt( key : String){
		soundManager.Play(key);
		Sing();
	}
	
	function Success() {
		soundManager.Play('Right');
		satisfaction += 1;
		if ( satisfaction > goal ) {
			phase += 1;
			satisfaction = 0;
			NextPattern();
		}
	}
	
	function Play( name : String ){
		soundManager.Play(name);
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
		var last = owner.track;
		patternManager.Next();
		if ( last != owner.track){
			game.managers.music.SetTrack(owner.track);
		}
	}
}
