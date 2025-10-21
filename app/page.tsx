import Header from "./components/Header";
import Search from "./components/Search";
import DocList from "./components/DocList";

export default function Home() {
  return (
    <div>
     <div className="body-container">
      <div className="search-container">
        <Search />
      </div>
      <div className="docs-list-container">
        <h3>Document List</h3>
        <DocList />
      </div>
     </div>
    </div>
  );
}
