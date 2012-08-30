#pragma downcast
var keys : Hashtable = new Hashtable();

function Start () {
	ShowKeys(['C','D','E','F','G','A','B','C_high']);
}

function GetChild( name : String) {
	return transform.FindChild( name);
}
function ShowKeys( names : Array ) {
	for ( var name  in names ) {
		GetChild(name).GetComponent(Key).Show();
	}
}



function HideKeys( names : Array ) {
	for ( var name  in names ) {
		GetChild(name).GetComponent(Key).Hide();
	}
}

function SelectKey( name : String) {
	GetChild(name).GetComponent(Key).Select();
}

function SelectKeys( names : Array) {
	for ( var name  in names ) {
		SelectKey(name);
	}
}

function DeselectKey( name : String) {
	GetChild(name).GetComponent(Key).Deselect();
}

function Update () {

}