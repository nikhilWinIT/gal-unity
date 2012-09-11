#pragma strict
@script ExecuteInEditMode()

var hooks = new Dictionary.<String, float>();
var hookKeys = new List.<String>([	
	'playerPosX',
	'playerPosY',
	'phase'
	]);
function Start () {
	//game = GameObject.Find('Game').GetComponent(GameManager);
	for( var key in hookKeys){
		hooks[key] = 0.0;
	}
}

function OnInspectorGUI () {

}

function UpdateData (game : GameManager) {
	hooks['phase'] = game.stats.phase;
	hooks['playerPosX'] = game.objects.characters.player.transform.position.x;
	hooks['playerPosY'] = game.objects.characters.player.transform.position.y;
}