import System.Collections.Generic;

class Entities {

	class Characters {
		var player : Character;
		var companion : Character;
	}
	var characters : Characters;

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
	class UIObjects {
		var keyboard : GameObject;
	}
	var lights : LightObjects;
	var characters : CharacterObjects;
	var environment : EnvironmentObjects;
	var ui : UIObjects;
}

private var hooks : Hooks;

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

class Stats {
	var phase : int;
}

var objects : Objects;
var settings : Settings;
var materials : Materials;
var entities : Entities;
var stats : Stats;
var data : Data;
var managers : Managers;
var stage : GameObject;
var levelObject: GameObject;
var level : Level;

function Awake () {

    entities.characters.player	= 	objects.characters.player.GetComponent(Character);
    entities.characters.companion = objects.characters.companion.GetComponent(Character);
    managers.keyboard = objects.ui.keyboard.GetComponent(KeyManager);
    managers.music = gameObject.GetComponent(MusicManager);
    managers.pattern = gameObject.GetComponent(PatternManager);
    managers.sound = gameObject.GetComponent('SoundManager');
    data.keymap = gameObject.GetComponent(Keymap);
    hooks = gameObject.GetComponent(Hooks);
     level = levelObject.GetComponent(Level);
     level.StartLevel();
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
    hooks.UpdateData(this);
}

function LockPlayer(){
	entities.characters.player.Lock();
}
function LockPlayerFor( duration : float ) {
	LockPlayer();
	yield WaitForSeconds(duration);
	UnlockPlayer();
}
function UnlockPlayer() {
	entities.characters.player.Unlock();
}

function StartGame() {
	level.StartLevel();
}