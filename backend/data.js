const notes = [];

function addElement(addInput) {
  notes.push(addInput);
  console.log(notes);
}

function delElement(index) {
  notes.splice(index, 1);
  console.log(notes); //!!!
}

module.exports = {
  notes,
  addElement,
  delElement,
};
