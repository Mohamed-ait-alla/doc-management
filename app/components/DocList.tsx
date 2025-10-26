'use client';

import Link from "next/link";
import React from "react";

// Defining types
type Document = {
    id: number;
    name: string;
};

type DocListProps = {
    documents: Document[];
};

// DocList Component
const DocList: React.FC<DocListProps> = ({ documents }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Created Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        documents.map((doc) => (
                            <tr key={doc.id}>
                                <td>{doc.id}</td>
                                <td>{doc.name}</td>
                                <td>2025/10/16</td>
                                <td>
                                    <Link href="#">
                                        View
                                    </Link>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default DocList;