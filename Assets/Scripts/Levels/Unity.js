#pragma strict
class Unity extends Level {
	function StartLevel ( game : GameManager) {
		yield WaitForSeconds(game.settings.checkpoints.playerSpawn);
		game.entities.characters.player.Enter();
		game.managers.music.SetTrack('Introduction');
		yield WaitForSeconds(game.settings.checkpoints.companionSpawn);
		game.managers.music.SetTrack('Harmony_1');
		game.entities.characters.companion.Enter();
	}
}