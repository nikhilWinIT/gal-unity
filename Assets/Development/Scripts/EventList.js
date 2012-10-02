var list = new List.<String>();
	
var defaults : List.<String>;
var custom : List.<String>;
function Reload(){
	list = new List.<String>();
	events = new List.<String>([
	'None',
	'GameStarted',
	'PlayLessonBeat',
	'CorrectPattern',
	'CorrectNote',
	'WrongPitch',
	'VoidInput',
	'AnyKey',
	'NextLesson',
	'PitchPosition',
	'CompanionBeat'
	]);
	for ( var item in events){
		Add(item);
	}
	for ( var item in custom){
		Add(item);
	}
	/*
	var remove  = new List.<String>();
	for(var i = 0; i<list.Count; i++){
		for(var x = 0; x<events.Count; x++){
			if( list[i] == events[x]){
				remove.Add(list[i]);
			}
		}
	}
	for(var item in remove){
		Remove(item);
	}
	var trim : List.<String> = new List.<String>();
	for ( var item in list){
		trim.Add(item);
	}
	for ( var item in events){
	//	Add(item);
	}
	for ( var item in trim){
		Add(item);
	}
	*/
}
function Remove( event : String){
	for( var i = 0; i< list.Count; i++){
		if( list[i] == event){
			list.RemoveAt(i);	
		}
	}
}
function RemoveCustom( event : String){
	for(var i =0; i< custom.Count; i++){
		if(custom[i] == event){
			custom.RemoveAt(i);
		}
	}
}	
function Add( newEvent : String) {
	for( var event : String in list){
		if( newEvent == event){
			return;
		}
	}
	list.Add(newEvent);
}
function AddCustom( newEvent : String){
	for( var event : String in custom){
		if(newEvent == event){
			return;
		}
	}
	custom.Add(newEvent);
}
/*
function ChangeSize( size : int ) {
		
    var newList: String[] = new String[size];
    for(x = 0; x < size; x++) {
        if(list.length > x) {
            newList[x] = list[x];
        }
    }
    list = newList;
}
function Add( event : String ) {
	var size = list.length + 1;	
    var newList: String[] = new String[size];
    for(x = 0; x < size; x++) {
        if(list.length > x) {
            newList[x] = list[x];
        }
        else if(list.Length == x){
        	newList[x] = event;
        }
    }
    list = newList;
}
*/