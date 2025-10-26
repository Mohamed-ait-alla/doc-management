'use client';
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AddDocumentPage() {
    // var declarations
    const [documents, setDocuments] = useState<{ id: number; name: string; description: string; file: File | null }[]>([]);
    const [id, setId] = useState(1);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const router = useRouter();

    // load existing documents from localStorage if any
    useEffect(() => {
        const storedDocs = localStorage.getItem("documents");
        if (storedDocs)
        {
            const parsed = JSON.parse(storedDocs);
            setDocuments(parsed);
            const maxId = parsed.length ? Math.max(...parsed.map((d: { id: number; }) => d.id)) : 0;
            setId(maxId + 1);
        }
    }, []);

    // function that handles adding new documents to the array
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        // declare new object
        const newDocument = {
            id,
            name,
            description,
            file,
        };

        // add the new object (document)
        const tmpDocuments = [...documents, newDocument];
        setDocuments(tmpDocuments);  
        
        // save docs to localStorage
        localStorage.setItem("documents", JSON.stringify(tmpDocuments));

        // reset form
        setId(id + 1);
        setName('');
        setDescription('');
        setFile(null);

        // switch to the main page
        router.push("/");
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