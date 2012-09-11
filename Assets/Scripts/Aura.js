class Aura extends MonoBehaviour {
	var fadeSpeed : float;
	var maxScale: float;
	var duration: float;
	var owner : Character;

	function Start() {
		HOTween.To(transform, duration, 'localScale', new Vector3(maxScale, maxScale,1));
		
	}
	
	function SetOwner( ownerObject : GameObject) {
		owner = ownerObject.GetComponent(Character);
		transform.parent = owner.auraContainer;
		renderer.material.color.a = owner.alpha;

	}
	function Update() {
		
		if (renderer.material.color.a > .01){
			renderer.material.color.a *= 1 - fadeSpeed;
		}
		else {
			Destroy(gameObject);
		}	
		
	}
}
