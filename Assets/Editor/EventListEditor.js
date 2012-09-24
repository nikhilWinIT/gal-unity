@CustomEditor (EventList)
class EventListEditor extends Editor {
    function OnInspectorGUI () {
    	for(var event in target.list){
    	
       		GUILayout.Label(event);
     
       	}
       	if(GUILayout.Button('Reload')){
       		target.Reload();
       	}
    }
}