
import System.Collections.Generic;

@CustomEditor (Trigger)
class TriggerEditor extends Editor {
	var index : int = 0;
	function Awake(){
		events= GameObject.FindObjectOfType(EventList);	
	}
    function OnInspectorGUI () {
    	var x : int = 0;
    	if(GUILayout.Button('Pull')) target.Pull();
	   	target.targetsExpand = EditorGUILayout.Foldout(target.targetsExpand, "Targets");
	   	if(target.targetsExpand){
	        EditorGUILayout.BeginHorizontal();
		 	if (GUILayout.Button("Add"))
		        target.targetsSize += 1;
		    if (GUILayout.Button('Remove'))
		    	target.targetsSize -= 1;
	        EditorGUILayout.EndHorizontal();
	    	if(target.targetsSize > 0){
		    	if(target.targets.length != target.targetsSize) {
				        var newTargets : GameObject[] = new GameObject[target.targetsSize];
				        for(x = 0; x < target.targetsSize; x++) {
				            if(target.targets.length > x) {
				                newTargets[x] = target.targets[x];
				            }
				        }
				        target.targets= newTargets;
			    }
		   }
		   
		    for(x = 0; x < target.targets.length; x++) {
		    	EditorGUILayout.BeginHorizontal ();
		        EditorGUILayout.LabelField((x+1).ToString(), GUILayout.Width(10));
		        target.targets[x] = EditorGUILayout.ObjectField(target.targets[x], GameObject, true);
		        EditorGUILayout.EndHorizontal();
		    }
		}
	   	
	   	if(GUI.changed){
	   		EditorUtility.SetDirty(target);
	   	}
    }
}