import "App.css";
import Header from "components/Header";
import AboutMe from "components/AboutMe";
import Work from "components/Work";
import ContactMe from "components/ContactMe";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutMe />

        <Work />

        <ContactMe />
      </main>
    </div>
  );
}

export default App;
