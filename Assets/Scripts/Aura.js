class Aura extends MonoBehaviour {
	var fadeSpeed : float;
	var maxScale: float;
	var duration: float;
	function Start() {
		HOTween.To(transform, duration, 'localScale', new Vector3(maxScale, maxScale,1));
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
