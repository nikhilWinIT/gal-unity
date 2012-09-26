
var C : String;
var Cs : String;
var D : String;
var Ds : String;
var E : String;
var F : String;
var Fs : String;
var G : String;
var Gs : String;
var A : String;
var As : String;
var B : String;
var Ch : String;
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