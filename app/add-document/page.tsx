'use client';
import React from "react";
import { useState } from "react";

export default function AddDocumentPage() {
    // var declarations
    const [documents, setDocuments] = useState<{ id: number; name: string; description: string; file: File | null }[]>([]);
    const [id, setId] = useState(1);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState<File | null>(null);

    // function that handles adding new documents to the array
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const newDocument = {
            id,
            name,
            description,
            file,
        };

        const tmpDocuments = [...documents, newDocument];
        console.log(tmpDocuments);
        
        // add the new object (document)
        setDocuments(tmpDocuments);

        // reset values
        setId(id + 1);
        setName('');
        setDescription('');
        setFile(null);
    }

    return (
        <div className="add-document-container">
            <h1>Add New Document</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Document Name:
                    <input
                        type="text"
                        name="documentName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <br/>
                <label>
                    Description:
                    <textarea
                        name="description"
                        rows={10}
                        value={description}
                        onChange={(e) => setDescription(e.target.value) }
                    />
                </label>
                <br/>
                <label>
                    Select Image:
                    <input
                        type="file"
                        name="file"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                        required
                    />
                </label>
                <br/>
                <button type="submit">Add Document</button>
            </form>
        </div>
    );
}