#pragma strict


class SoundSphere {
	
	function SoundSphere(radius : float, clip : AudioClip, notes: String[], position : Vector3){
		var go : GameObject = new GameObject('SoundSphere');	
		go.transform.position = position;
		var col : SphereCollider;
		var behaviour : SoundSphereBehaviour;
		col = go.AddComponent(SphereCollider);
		behaviour = go.AddComponent(SoundSphereBehaviour);
		behaviour.SetNotes(notes);
		col.isTrigger = true;
		col.radius = radius; 
	}
}