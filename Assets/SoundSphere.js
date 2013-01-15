#pragma strict


class SoundSphere {
	
	function SoundSphere(radius : float, clip : AudioClip, notes: String[], position : Vector3){
		var go : GameObject = new GameObject('SoundSphere');	
		go.transform.position = position;
		var behaviour : SoundSphereBehaviour;
		behaviour = go.AddComponent(SoundSphereBehaviour);
		behaviour.SetNotes(notes);
		behaviour.radius = radius;
	}
}