#pragma downcast
var keys : Hashtable = new Hashtable();

function Start () {

}

function GetChild( name : String) {
	return transform.FindChild( name);
}
function ShowKeys( names : Array ) {
	for ( var name  in names ) {
		GetChild(name).GetComponent(Key).Show();
	}
}

function ShowAll(){
	var keys = gameObject.GetComponentsInChildren(Key);
	for( var key : Key in keys) {
		key.Show();
	}
}

function HideKeys( names : Array ) {
	for ( var name  in names ) {
		GetChild(name).GetComponent(Key).Hide();
	}
}

function HideAll(){

	var keys = gameObject.GetComponentsInChildren(Key);
	for( var key : Key in keys) {
		key.Hide();
	}
}

function SelectKey( name : String) {
	var key = GetChild(name);
	if(key){
		key.GetComponent(Key).Select();
	}
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