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
    console.log(note)
  })
}


noteInput.keydown(function(e) {
  if (e.which == 13) {    
    addListItem(name + "/notes", noteInput.val())
  }
})
