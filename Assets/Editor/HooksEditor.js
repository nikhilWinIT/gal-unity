@CustomEditor (Hooks)
class HooksEditor extends Editor {
    function OnInspectorGUI () {
    	for(var key in target.hooks.Keys ){
    	
       		var something = EditorGUILayout.FloatField(key, target.hooks[key]);
     
       	}
        if (GUI.changed)
            EditorUtility.SetDirty (target);
    }
}