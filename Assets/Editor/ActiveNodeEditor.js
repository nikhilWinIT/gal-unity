
import System.Collections.Generic;
@CustomEditor (ActiveNode)
@CanEditMultipleObjects
class ActiveNodeEditor extends Editor {
	function Awake(){
	}
    function OnInspectorGUI () {
   		super.OnInspectorGUI(); 
    	if(GUILayout.Button('Activate')) target.Activate();
	   	
	   	if(GUI.changed){
	   		EditorUtility.SetDirty(target);
	   	}
    }
}