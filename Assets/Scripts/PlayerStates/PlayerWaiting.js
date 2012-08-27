class PlayerWaiting extends State {
	function Update() {
		UpdatePosition();
	}	
	function UpdatePosition() {
		owner.radius += owner.accelY;
		owner.radius = Mathf.Clamp(owner.radius, game.minRadius, game.maxRadius);
	    owner.radian -= (owner.speed/100)*owner.direction;
	    owner.targetX = owner.radius*Mathf.Cos(owner.radian);
	    owner.targetY = owner.radius*Mathf.Sin(owner.radian);
	}
}