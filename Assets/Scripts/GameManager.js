import System.Collections.Generic;

class Entities {
	class Lights {
		var player : LightScript;
		var companion : LightScript;
		var global : LightScript;
	}
	
	class Characters {
		var player : Character;
		var companion : Character;
	}
	var characters : Characters;
	var lights : Lights;
}

class Objects {
	class LightObjects {
		var player : GameObject;
		var companion : GameObject;
		var global : GameObject;
	}
	class CharacterObjects {
		var player : GameObject;
		var companion : GameObject;
	}
	class EnvironmentObjects {
		var background : GameObject;
	}
	var lights : LightObjects;
	var characters : CharacterObjects;
	var environment : EnvironmentObjects;
}

class Materials {
	var player : Material;
}

class Managers {
	var keyboard : KeyManager;
	var music : MusicManager;
	var sound : SoundManager;
	var pattern : PatternManager;
}

class Settings {
	class GlobalSettings {
		var minRadius : float;
		var maxRadius : float;
		var minSpeed : float;
		var gravity : float;
		var speedModifier : float;
	}
	class Checkpoints {
		var playerSpawn : int;
		var companionSpawn : int;
		var tutorialStart : int;
	}
	var global : GlobalSettings;
	var checkpoints : Checkpoints;
	
}

class Data {
	var	keymap : Keymap;
}

var objects : Objects;
var materials : Materials;
var managers : Managers;
var settings : Settings;
var entities : Entities;
var data : Data;

function Start () {
	entities.lights.player 		= 	objects.lights.player.GetComponent(LightScript);
	entities.lights.companion 	= 	objects.lights.companion.GetComponent(LightScript);
	entities.lights.global 		= 	objects.lights.global.GetComponent(LightScript);
    entities.characters.player	= 	objects.characters.player.GetComponent(Character);
    entities.characters.companion = objects.characters.companion.GetComponent(Character);
    managers.keyboard = ComponentFrom('Keyboard', KeyManager);
    managers.music = gameObject.GetComponent(MusicManager);
    data.keymap = gameObject.GetComponent(Keymap);
    StartGame();
}

function ComponentFrom( name : String, type){
	return gameObject.Find(name).GetComponent(type);
}

function OnGUI() {
	var e : Event = Event.current;
	if(e.type == EventType.KeyUp){
		managers.keyboard.DeselectKey(data.keymap.GetName( e.keyCode.ToString()));
		
	}
	if(Input.anyKeyDown){
		if(e.type == EventType.KeyDown) {
			managers.keyboard.SelectKey(data.keymap.GetName( e.keyCode.ToString()));
			e.Use();
		}
	}
}

function Update () {
    
}

function LockPlayer(){
	entities.characters.player.locked = true;
}

function UnlockPlayer() {
	entities.characters.player.locked = false;
}

function StartGame() {
	GameObject.Find('GlobalLight').GetComponent(LightScript).Kill();
    yield WaitForSeconds(settings.checkpoints.playerSpawn);
	entities.characters.player.Enter();
	managers.music.SetTrack('Introduction');
	yield WaitForSeconds(settings.checkpoints.companionSpawn);
	managers.music.SetTrack('Harmony_1');
	entities.characters.companion.Enter();

}