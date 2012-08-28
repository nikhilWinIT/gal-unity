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
    if (Input.GetButtonDown('Jump')){
        playerScript.PlaySoundAt(Random.Range(1,8));
        messenger.Send("OnBeat");
       
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
    
    if(Input.GetKeyDown('1')){
    	playerScript.PlaySoundAt(1);
    }
    if(Input.GetKeyDown('2')){
    	playerScript.PlaySoundAt(2);
    }
    if(Input.GetKeyDown('3')){
    	playerScript.PlaySoundAt(3);
    }
    if(Input.GetKeyDown('4')){
    	playerScript.PlaySoundAt(4);
    }
    if(Input.GetKeyDown('5')){
    	playerScript.PlaySoundAt(5);
    }
    if(Input.GetKeyDown('6')){
    	playerScript.PlaySoundAt(6);
    }
    if(Input.GetKeyDown('7')){
    	playerScript.PlaySoundAt(7);
    }
    if(Input.GetKeyDown('8')){
    	playerScript.PlaySoundAt(8);
    }
    
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