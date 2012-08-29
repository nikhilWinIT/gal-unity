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


function Start () {
	mesh = transform.FindChild('Mesh').gameObject;
	text = transform.FindChild('Text').gameObject;

}


function Update () {
	UpdateAttrs();
	UpdateMaterial();
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