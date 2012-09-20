
var list = new List.<String>([
	'PlayLessonEvent',
	'CorrectTone',
	'WrongTone'
	]);
function Remove( event : String){
	for( var i = 0; i< list.Count; i++){
		if( list[i] == event){
			list.RemoveAt(i);	
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