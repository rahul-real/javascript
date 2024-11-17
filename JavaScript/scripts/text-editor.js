function saveFile() {
    var textToSave = document.getElementById("editor").value;
    var blob = new Blob([textToSave], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "text_editor_file.txt");
}

function loadFile(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function(){
        var text = reader.result;
        document.getElementById('editor').value = text;
    };
    reader.readAsText(input.files[0]);
}
