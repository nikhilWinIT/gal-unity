class PlayerWaiting extends State {
	function Update() {
		UpdatePosition();
	}	
	function UpdatePosition() {
			owner.radius += owner.accelY;
			if (owner.radius < 2) {
				owner.radius = 2;
				}
			else if(owner.radius > 7) {
				owner.radius = 7;
			}	
		    owner.radian -= (owner.speed/100)*owner.direction;
		    owner.targetX = owner.radius*Mathf.Cos(owner.radian);
		    owner.targetY = owner.radius*Mathf.Sin(owner.radian);
	
	}
}