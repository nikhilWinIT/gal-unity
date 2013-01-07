#pragma strict
var rx : float = 0;
var ry : float = 0;
var rz : float = 0;
function Start () {

}

function Update () {
	transform.Rotate(rx, ry, rz);
}