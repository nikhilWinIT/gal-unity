@CustomEditor (LevelLoader)
class LevelLoaderEditor extends Editor{
	
    function OnInspectorGUI () {
    	target.levelName = EditorGUILayout.TextField('name', target.levelName);
	   	if(GUI.changed){
	   		EditorUtility.SetDirty(target);
	   	}
   	}
}