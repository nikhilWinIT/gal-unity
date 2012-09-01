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
var player : Character;
var index : int;


function Start () {
	player = gameObject.Find('Player').GetComponent(Character);
	mesh = transform.FindChild('Mesh').gameObject;
	text = transform.FindChild('Text').gameObject;

}


function Update () {
	UpdateAttrs();
	UpdateMaterial();
}

function Select() {
	if(!player.locked){
		selected = true;
		audio.PlayOneShot(audio.clip);
		player.messenger.Send("OnBeat", name as String);
		player.Sing();
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