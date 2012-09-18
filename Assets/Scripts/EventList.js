
var list: String[];

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