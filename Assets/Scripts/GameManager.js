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

function Start () {
    playerScript = player.GetComponent(Character);
    messenger = player.GetComponent(Messenger);
    musicManager = gameObject.GetComponent(MusicManager);

    StartGame();
}
function Update () {
	if(playerScript.locked != true){
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
	    if(Input.GetKeyDown('j')){
	    	playerScript.PlaySoundAt(5);
	    }
	    if(Input.GetKeyDown('k')){
	    	playerScript.PlaySoundAt(6);
	    }
	    if(Input.GetKeyDown('l')){
	    	playerScript.PlaySoundAt(7);
	    }
	    if(Input.GetKeyDown(';')){
	    	playerScript.PlaySoundAt(8);
	    }
 	}
    
}

function LockPlayer(){
	playerScript.locked = true;
}

function UnlockPlayer() {
	playerScript.locked = false;
}

function Test() {
	companion.GetComponent(Character).PlaySoundAt(Random.Range(1,8));
}

function StartGame() {
	GameObject.Find('GlobalLight').GetComponent(LightScript).Kill();
    yield WaitForSeconds(playerSpawnSeconds);
	playerScript.Enter();
	musicManager.SetTrack('Introduction');
	yield WaitForSeconds(companionSpawnSeconds);
	musicManager.NextTrack();
	companion.GetComponent(Character).Enter();

}