import Page from "./components/page.tsx";
import Topbar from "./components/topbar.tsx";

export default function App() {
  return (
    <Page>
      <Topbar>
        <h3>React example</h3>
        <a href="#">
          <span>Home</span>
        </a>
        <a href="#">
          <span>Pricing</span>
        </a>
        <a href="#">
          <span>Contact</span>
        </a>
      </Topbar>
      <h1>Hello, world</h1>
    </Page>
  );
}
