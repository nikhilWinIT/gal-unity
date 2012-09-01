#pragma strict

var visible : boolean;
var selected : boolean;
var defaultTransparency : float;
var selectedTransparency : float;
var mesh : GameObject;
var text : GameObject;
var defaultMaterial : Material;
var selectedMaterial : Material;
var selectSpeed : float;
var deselectSpeed : float;
var lerp : float;
var alpha : float;
var index : int;
var game : GameManager;

function Start () {
	
	mesh = transform.FindChild('Mesh').gameObject;
	text = transform.FindChild('Text').gameObject;
	game = gameObject.Find('Game').GetComponent(GameManager);

}


function Update () {
	UpdateAttrs();
	UpdateMaterial();
}

function Select() {
	if(!game.entities.characters.player.locked){
		selected = true;
		audio.PlayOneShot(audio.clip);
		game.objects.characters.companion.SendMessage('OnBeat', name as String);
		game.entities.characters.player.Sing();
	}
}

function Show() {
	visible = true;
}

function Hide() {
	visible = false;
}

function Deselect() {
	selected = false;
}

function UpdateAttrs() {
	if ( visible ) {
		alpha = Mathf.Clamp(alpha + .01, 0, defaultTransparency);
		if ( selected ) {
		
			lerp = Mathf.Clamp01(lerp+selectSpeed);
		}
		else {
			lerp = Mathf.Clamp01(lerp-deselectSpeed);
			
		}
		mesh.renderer.material.Lerp(defaultMaterial, selectedMaterial, lerp);
	}	
	else {
		alpha = Mathf.Clamp(alpha - .01, 0, defaultTransparency);
		
	}
}

function UpdateMaterial() {
	SetAlpha( mesh, alpha);
	SetAlpha( text, alpha);
}

function SetAlpha( object : GameObject, alpha : float ) {
	object.renderer.material.color.a = alpha;
}