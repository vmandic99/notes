
const noteInput = document.getElementById('noteInput'); // Eingabefeld
const noteList = document.getElementById('noteList'); // Liste für Notizen

function addNote() {
    const noteText = noteInput.value.trim(); // Text aus dem Eingabefeld holen und trimmen (Leerzeichen vorne ende entfernen)
    if (noteText !== '') { // Wenn der Text nicht leer ist
        const li = document.createElement('li'); // Ein neues Listenelement erstellen
        //Listenelement beinhaltet folgenden html code
            li.innerHTML = ` 
            ${noteText}
            <button id="loeschen" onclick="deleteNote(this)">Löschen</button> <!-- Löschen-Button -->
        `;
        noteList.appendChild(li); // Listenelement zur Liste hinzufügen
        noteInput.value = ''; // Eingabefeld leeren
        noteInput.placeholder="Neue Notiz"; //reset falls leere Notiz
    }else{
        noteInput.placeholder="Leere Notiz!"; //falls leere Notiz schreibe das als placeholder
    }
}

function deleteNote(button) {
    const li = button.parentElement; // Das übergeordnete Listenelement des Buttons finden
    noteList.removeChild(li); // Listenelement aus der Liste entfernen
}