
var C : String;
var C_sharp : String;
var D : String;
var D_sharp : String;
var E : String;
var F : String;
var F_sharp : String;
var G : String;
var G_sharp : String;
var A : String;
var A_sharp : String;
var B : String;
var C_high : String;
var keymap : Hashtable = new Hashtable();
var keyboard : GameObject;
var keyManager : KeyManager;

function Start () {

	for ( var fi in (GetType().GetFields())){
		if(fi.FieldType == String){
			//properties.Push(fi.name as String);
			var value = this.GetType().GetField(fi.name as String).GetValue(this);
			keymap.Add(value, fi.name);
		}
	}
	//for ( var prop : String in properties) {
		
		//Debug.Log(this.GetType().GetField(prop).GetValue(this));
	//}
}

function GetName( key : String ) {
	return keymap[key];
}