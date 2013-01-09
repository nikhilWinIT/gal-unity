
import System.Collections.Generic;

@CustomEditor (SoundGroupNode)
class SoundGroupNodeEditor extends Editor {
	var index : int = 0;
	function Awake(){
	}
    function OnInspectorGUI () {
    	var x : int = 0;
    	if(GUILayout.Button('Play')) target.Activate();
    	target.tempo = EditorGUILayout.FloatField(target.tempo);
	   	target.soundsExpand = EditorGUILayout.Foldout(target.soundsExpand, "Targets");
	   	if(target.soundsExpand){
	        EditorGUILayout.BeginHorizontal();
		 	if (GUILayout.Button("Add"))
		        target.soundsSize += 1;
		    if (GUILayout.Button('Remove'))
		    	target.soundsSize -= 1;
	        EditorGUILayout.EndHorizontal();
		    	if(target.soundsSize > 0){
				    	if(target.soundNodes.length != target.soundsSize) {
						        var newTargets : SoundNode[] = new SoundNode[target.soundsSize];
						        for(x = 0; x < target.soundsSize; x++) {
						            if(target.soundNodes.length > x) {
						                newTargets[x] = target.soundNodes[x];
						            }
						        }
						        target.soundNodes = newTargets;
					    }
					}
		   
		    for(x = 0; x < target.soundNodes.length; x++) {
		    	EditorGUILayout.BeginHorizontal ();
		        EditorGUILayout.LabelField((x+1).ToString(), GUILayout.Width(10));
		        target.soundNodes[x] = EditorGUILayout.ObjectField(target.soundNodes[x], SoundNode, true);
		        EditorGUILayout.EndHorizontal();
		    }
		}
	   	
	   	if(GUI.changed){
	   		EditorUtility.SetDirty(target);
	   	}
    }
}