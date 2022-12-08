import "./App.css";
import Layout from "./components/layout";
import Feed from "./components/feed";
import Panel from "./components/panel";

function App() {
  return (
    <Layout>
      <div className="space-y-3 lg:mx-0">
        <Feed />
      </div>
      <Panel />
    </Layout>
  );
}

export default App;
