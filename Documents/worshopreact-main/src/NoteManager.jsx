import React, { useState } from 'react';

const NoteManager = ({ initialNotes }) => {
    const [notes, setNotes] = useState(initialNotes);
    const [newNote, setNewNote] = useState('');

    const addNote = () => {
        const noteValue = parseFloat(newNote);
        if (noteValue >= 0 && noteValue <= 20) {
            setNotes([...notes, noteValue]);
            setNewNote('');
        } else {
            alert('Please enter a note between 0 and 20.');
        }
    };

    const deleteNote = (index) => {
        const updatedNotes = notes.filter((_, i) => i !== index);
        setNotes(updatedNotes);
    };

    const calculateAverage = () => {
        if (notes.length === 0) return 0;
        const total = notes.reduce((acc, note) => acc + note, 0);
        return (total / notes.length).toFixed(2);
    };

    return (
        <div>
            <h2> Notes</h2>
            <input
                type="number"
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Ajouter une nouvelle note"
            />
            <button onClick={addNote}>Ajouter</button>
            <ul>
                {notes.map((note, index) => (
                    <li key={index}>
                        {note} <button onClick={() => deleteNote(index)}>Supprimer</button>
                    </li>
                ))}
            </ul>
            <h3>Moyenne des notes: {calculateAverage()}</h3>
        </div>
    );
};

export default NoteManager;
