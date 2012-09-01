
function Play(name : String ) {
	var sound = transform.FindChild(name);
	sound.audio.PlayOneShot(sound.audio.clip);
}