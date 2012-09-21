
class SoundTrigger extends Trigger {
	
	var clip : AudioClip;
	
	function Trigger(){
		
		var source = new GameObject();
		source.AddComponent(AudioSource);
		source.audio.PlayOneShot(clip);
		yield WaitForSeconds(clip.length);
		Destroy(source);
	}
}