import io from 'socket.io-client'

const ENDPOINT = 'http://localhost:3001'
const socket = io(ENDPOINT);

export function load(setNotes) {
  socket.on('loadNotes', (notes) => {
    setNotes(notes);
  })
}

export function sendAddElement(value) {
  socket.emit('addNote', value);
}

export function sendDelElement(index) {
 socket.emit('delNote', index);
}