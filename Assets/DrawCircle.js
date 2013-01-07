#pragma strict
var radius : float = 1;
var width : float = 1;
var smoothness : int;
var mat : Material;
var c1 : Color;
var c2 : Color;
internal var x : float;
internal var y : float;
internal var p : Vector3;
private var line : LineRenderer;
function Start () {
    line = gameObject.AddComponent(LineRenderer);
    line.material = mat;
}

function Update () {
    line.SetWidth(width, width);
    line.SetVertexCount(smoothness);
    var inc = (Mathf.PI*2)/(smoothness-1);
    line.material.color.a -= .1;
    line.SetColors(c1, c2); 
	for(var i = 0; i<smoothness; i++){
		x = transform.position.x + radius * Mathf.Cos(inc*i);
		y = transform.position.y + radius * Mathf.Sin(inc*i);
		p = Vector3(x, y, 1);
    	line.SetPosition(i, p);
	}

}