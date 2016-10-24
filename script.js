var name;
var nameInput = $("#name-input")
var noteInput = $("#note-input")
var noteList = $("#note-list")

nameInput.keydown(function(e) {
  if (e.which == 13) {
    name = nameInput.val();	
    getNotesForName(name)
  }	
})

function getNotesForName(name) {
  noteList.html("")	
  onNewListItem(name + "/notes", function(note) {
    var noteDiv = $("<div>" + note + "</div>");
    noteList.append(noteDiv)
  })
}


noteInput.keydown(function(e) {
  if (e.which == 13) {
    console.log("adding itemt to", name + "/notes")
    addListItem(name + "/notes", noteInput.val())
  }
})
