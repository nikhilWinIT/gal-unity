
@CustomEditor (SoundTrigger)
class SoundTriggerEditor extends TriggerEditor{
	//var options : String[] = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B','B#','Ch'];
    function OnInspectorGUI () {
	    target.eventIndex = EditorGUILayout.Popup('Event',target.eventIndex, events.list.ToArray());
	    target.event = events.list[target.eventIndex];
	    target.clip = EditorGUILayout.ObjectField('Clip', target.clip, AudioClip, true);
	   	if(GUI.changed){
	   		EditorUtility.SetDirty(target);
	   	}
    }
}