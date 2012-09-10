#pragma strict


class ToolsWindow extends EditorWindow {

    @MenuItem ("Window/Tools")
    static function ShowWindow () {
        EditorWindow.GetWindow (ToolsWindow);
    }
    function OnGUI () {
        // The actual window code goes here
    }
}