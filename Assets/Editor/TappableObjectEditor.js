
import System.Collections.Generic;

@CustomEditor (TappableObject)
class TappableObjectEditor extends Editor {
	var index : int = 0;
	function Awake(){
	}
    function OnInspectorGUI () {
   		super.OnInspectorGUI(); 
    	if(GUILayout.Button('Play')) target.Activate();
	   	
	   	if(GUI.changed){
	   		EditorUtility.SetDirty(target);
	   	}
    }
}