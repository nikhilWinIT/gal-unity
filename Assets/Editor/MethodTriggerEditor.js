@CustomEditor (MethodTrigger)
class MethodTriggerEditor extends TriggerEditor {
	
    function OnInspectorGUI () {
   	 	super.OnInspectorGUI();
   	 	if(target.targets[0]){	
	   	 	var components = target.targets[0].GetComponents(Component);
	   	 	var componentsStr = new List.<String>();
	   	 	var newComponents = new List.<Component>();
	   	 	for(var component in components){
	   	 		if(component.GetType().Name == "Transform" || component.GetType().Name == "Animation"){
	   	 				
	   	 		}
	   	 		else{
	   	 			newComponents.Add(component);		
	   	 		}	
	   	 	}
	   	 	
	   	 	for(var component in newComponents){
	   	 		componentsStr.Add(component.GetType().Name);	
	   	 	}
	   	 	if(target.componentIndex >= componentsStr.Count){
	   	 		 target.componentIndex = 0;
	   	 		 }
	   	 	target.componentIndex = EditorGUILayout.Popup('Component', target.componentIndex, componentsStr.ToArray());
	   	 	var component = newComponents[target.componentIndex];
	   	 	target.targetComponent = component;
	   	 	var methods = component.GetType().GetMethods();
	   	 	var methodsStr = new List.<String>();
	   	 	var i = 0;
	   	 	var newMethods = new List.<System.Reflection.MethodInfo>();
	   	 	for(var method in methods){
	   	 		//if(method.MethodType == System.Int32 || method.MethodType == System.Single ){
		   	 		newMethods.Add(method);
		   	 	//}
	 		}
	 		for(var method in newMethods){
	 			methodsStr.Add(method.Name);	
	 		}
	 		if(methodsStr.Count != 0){
		   	 	target.methodIndex = EditorGUILayout.Popup('Method', target.methodIndex, methodsStr.ToArray());	
		   	 	target.methodName = methodsStr[target.methodIndex];
		   	 	target.targetMethod = newMethods[target.methodIndex];
	   	 	}
	   	 	else {
	   	 		GUILayout.Label('No methods available');
	   	 	}
	   	 }
	   	if(GUI.changed){
	   		EditorUtility.SetDirty(target);
	   	}
   	}
}