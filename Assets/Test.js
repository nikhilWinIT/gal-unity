var playerSpeed : int;
internal var amoutToMove : float;
function Start () {
 
}
 
function Update () {
        // amout ot move player
        amoutToMove = playerSpeed * Input.GetAxis("Horizontal") * Time.deltaTime;
        print("amoutToMove: " + amoutToMove);
        //move or translate the player
        transform.Translate(amoutToMove,0 ,0);
        //print(transform.TransformDirection(Vector3(amoutToMove, 0, 0)));
       
}
