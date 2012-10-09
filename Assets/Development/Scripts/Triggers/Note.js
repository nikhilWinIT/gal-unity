var pitch : String;
var colliding : boolean;
var startAnim : AnimationClip;
var loopAnim : AnimationClip;
var hitAnim : AnimationClip;
var missAnim : AnimationClip;
var lessons : LessonManager;
private var wasHit : boolean;
function Start(){
	lessons = GameObject.FindObjectOfType(LessonManager);
	if(!gameObject.GetComponent(Animation)) gameObject.AddComponent(Animation);
	animation.AddClip(startAnim, startAnim.name);
	animation.AddClip(hitAnim, hitAnim.name);
	animation.AddClip(missAnim, missAnim.name);
	animation.CrossFade(startAnim.name);
	animation.CrossFadeQueued(loopAnim.name);
}
function OnTriggerEnter(other){
	Debug.Log(other.tag);
	if(other.gameObject.tag == "Player"){
		colliding = true;
	}
}

function OnTriggerExit(other){
	if(other.gameObject.tag == "Player"){
		colliding = false;
		if(!wasHit){
			Miss();	
		}
	}
}

function CheckPitch(_pitch){
	if( pitch == _pitch){
		Hit(_pitch);	
	}
	else {
	}
}

function Miss(){
	if(missAnim){
		animation.Play(missAnim.name);	
	}
	lessons.RegisterNote(false);
	
}

function Hit( param : String){
	wasHit = true;
		Destroy(this.gameObject);
	if(hitAnim){
		animation.Play(hitAnim.name);
	}
	lessons.RegisterNote(true);
}

function SetPitch( param : String) {
	pitch = param;
}