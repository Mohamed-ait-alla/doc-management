import Header from "./components/Header";
import Search from "./components/Search";

export default function Home() {
  return (
    <div>
     <Header />

     <div className="body-container">
      <div className="search-container">
        <Search />
      </div>

     </div>
    </div>
  );
}
