'use client';

import { useEffect, useState } from "react";
import Search from "./components/Search";
import DocList from "./components/DocList";

export default function Home() {

  // var declarations
  const [documents, setDocuments] = useState([]);

  // get stored docs on the localStorage
  useEffect(() => {
    const docs = localStorage.getItem("documents");
    if (docs)
    {
      const parsedDocs = JSON.parse(docs);
      setDocuments(parsedDocs);
    }
  }, []);

  // rendering the main page
  return (
    <div>
     <div className="body-container">
      <div className="search-container">
        <Search />
      </div>
      <div className="docs-list-container">
        <h3>Document List</h3>
        <DocList documents={documents} />
      </div>
     </div>
    </div>
  );
}
