'use client';
import React from "react";

export default function AddDocumentPage() {
    return (
        <div className="add-document-container">
            <h1>Add New Document</h1>
            <form>
                <label>
                    Document Name:
                    <input type="text" name="documentName" required/>
                </label>
                <br/>
                <label>
                    Description:
                    <textarea name="description" rows={10} />
                </label>
                <br/>
                <label>
                    Select Image:
                    <input type="file" name="file" required/>
                </label>
                <br/>
                <button type="submit">Add Document</button>
            </form>
        </div>
    );
}