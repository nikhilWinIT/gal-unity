var player : GameObject;
var companion : GameObject;
var playerScript : Character;
var messenger : Messenger;
var musicManager : MusicManager;
var playerSpawnSeconds: int;
var companionSpawnSeconds : int;
var tutorialStartSeconds : int;
var minRadius : float;
var maxRadius : float;
var minSpeed : float;
var gravity : float;
var speedModifier : float;
var keyboard : GameObject;
var keyManager : KeyManager;
var keymap : Keymap;


function Start () {
    playerScript = player.GetComponent(Character);
    messenger = player.GetComponent(Messenger);
    musicManager = gameObject.GetComponent(MusicManager);
    keyManager = keyboard.GetComponent(KeyManager);
    keymap = gameObject.GetComponent(Keymap);

    StartGame();
}

function OnGUI() {
	var e : Event = Event.current;
	if(e.type == EventType.KeyUp){
		keyManager.DeselectKey(keymap.GetName( e.keyCode.ToString()));
		
	}
	if(Input.anyKeyDown){
		if(e.type == EventType.KeyDown) {
			keyManager.SelectKey(keymap.GetName( e.keyCode.ToString()));
			e.Use();
		}
	}
}

function Update () {
		/*
	    if (Input.GetButtonDown('Jump')){
	        playerScript.PlaySoundAt(Random.Range(1,8));
	       
	    }
	    if (Input.GetButtonUp('Jump')){
	        
	    }
	    
	    if (Input.GetKeyDown('right')){
	    	musicManager.NextTrack();
	    }
	    if (Input.GetKeyDown('left')){
	    	musicManager.PrevTrack();
	    }
	    
	    if(Input.GetKeyDown('up')){
	    	playerScript.NextSound();
	    }
	    if(Input.GetKeyDown('down')){
	    	playerScript.PrevSound();
	    }
	    
	    if(Input.GetKeyDown('a')){
	    	playerScript.PlaySoundAt(1);
	    }
	    if(Input.GetKeyDown('s')){
	    	playerScript.PlaySoundAt(2);
	    }
	    if(Input.GetKeyDown('d')){
	    	playerScript.PlaySoundAt(3);
	    }
	    if(Input.GetKeyDown('f')){
	    	playerScript.PlaySoundAt(4);
	    }
	    // H KEY
	    if(Input.GetKeyDown('h')){
	    	keyManager.SelectKey('A');
	    }
	    if(Input.GetKeyUp('h')){
	    	keyManager.DeselectKey('A');
	    }
	    // J KEY
	    if(Input.GetKeyDown('j')){
	    	keyManager.SelectKey('A');
	    }
	    if(Input.GetKeyUp('j')){
	    	keyManager.DeselectKey('A');
	    }
	    // K KEY
	    if(Input.GetKeyDown('k')){
	    	playerScript.PlaySoundAt(6);
	    }
	    // L KEY
	    if(Input.GetKeyDown('l')){
	    	keyManager.SelectKey('C');

	    }
	    if(Input.GetKeyUp('l')){
	    	keyManager.DeselectKey('C');
	    }
	    // ; KEY
	    if(Input.GetKeyDown(';')){
	    	playerScript.PlaySoundAt(8);
	    }
	    */

    
}

function LockPlayer(){
	playerScript.locked = true;
}

function UnlockPlayer() {
	playerScript.locked = false;
}

function StartGame() {
	GameObject.Find('GlobalLight').GetComponent(LightScript).Kill();
    yield WaitForSeconds(playerSpawnSeconds);
	playerScript.Enter();
	musicManager.SetTrack('Introduction');
	yield WaitForSeconds(companionSpawnSeconds);
	musicManager.SetTrack('Harmony_1');
	companion.GetComponent(Character).Enter();

}