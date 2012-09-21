
import System.Collections.Generic;

@CustomEditor (Trigger)
class TriggerEditor extends Editor {
	//var options : String[] = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B','B#','Ch'];PatternEditor
/*
	
	var animClip : AnimationClip;
	var hooks : Hooks;
	var propertyName : String;
	//var triggerType : TriggerTypes;
	var valueMin : float;
	var valueMax : float;
	var triggered : boolean;
	var event : String;
	var targets : GameObject[];
	*/
	var eventsList : List.<String>;
	var events : EventList;
	
	var index : int = 0;
	function Awake(){
		events= GameObject.FindObjectOfType(EventList);	
	}
    function OnInspectorGUI () {
    	var x : int = 0;
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
    	/*
	    target.length = EditorGUILayout.IntSlider('Number of Notes', target.length, 1, 10);
	   	target.rhythmExpand = EditorGUILayout.Foldout(target.rhythmExpand, "Notes");
	   	if(target.rhythmExpand){
			EditorGUILayout.BeginHorizontal ();
			GUILayout.Label("#", GUILayout.Width(10));
	        GUILayout.Label("Beat", GUILayout.Width(60));
		    GUILayout.Label("Pitch", GUILayout.Width(50));
		    EditorGUILayout.EndHorizontal();
		    if(target.rhythm.length != target.length) {
		        var newRhythm : float[] = new float[target.length];
		        var newMelody : int[] = new int[target.length];
		        for(x = 0; x < target.length; x++) {
		            if(target.rhythm.length > x) {
		                newRhythm[x] = target.rhythm[x];
		                newMelody[x] = target.melodyIndices[x];
		            }
		        }
		        target.rhythm = newRhythm;
	         	target.melodyIndices = newMelody;
		    }
		    for(x = 0; x < target.rhythm.length; x++) {
		    	EditorGUILayout.BeginHorizontal ();
		        EditorGUILayout.LabelField((x+1).ToString(), GUILayout.Width(10));
		        target.rhythm[x] = EditorGUILayout.FloatField(target.rhythm[x], GUILayout.Width(60));
		        target.melodyIndices[x] = EditorGUILayout.Popup(target.melodyIndices[x], target.options, GUILayout.Width(50));
		        EditorGUILayout.EndHorizontal();
		    }
		    */
		    target.eventIndex = EditorGUILayout.Popup('Event',target.eventIndex, events.list.ToArray());
		    target.event = events.list[target.eventIndex];
	   	
	   	if(GUI.changed){
	   		EditorUtility.SetDirty(target);
	   	}
    }
}