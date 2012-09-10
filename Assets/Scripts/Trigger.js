
enum TriggerTypes { GreaterThan, LessThan , Equal }
var animClip : AnimationClip;
var sourceObject : GameObject;
var componentName : String;
var propertyName : String;
var triggerType : TriggerTypes;
var triggerPoint : float;
var loop : boolean;
var currentValue : float;
var component : MonoBehaviour;

var value : System.Reflection.FieldInfo;
function Start() {
	component = sourceObject.GetComponent(componentName);
	value = component.GetType().GetField(propertyName);
	animation.AddClip(animClip, animClip.name);

}
function Update(){
	currentValue = value.GetValue(component);
	Check();
}

function Check() {
	switch(triggerType) {
		case TriggerTypes.GreaterThan:
			if(currentValue > triggerPoint){
				Debug.Log('triggered');
				enabled = false;
				animation.CrossFade(animClip.name);
			}
			break;

	}
}