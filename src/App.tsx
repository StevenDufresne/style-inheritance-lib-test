import { Container } from "./components/container/Container";
import { Child } from "./components/child/Child";
import "./components/base.css";
import "./App.css";

export default function App() {
  return (
    <div className="demo">
      <h2>Inheritency Demo</h2>
      <Container label="Container A" density="low" spacing="large">
        <Child label="A: low density, large spacing" />
        <Container label="Container B">
          <Child label="B: inherits low density, large spacing from Container A" />
          <Container label="Container C" density="high" spacing="xSmall">
            <Child label="C: overrides to high density, xSmall spacing" />
          </Container>
        </Container>
        <Container label="Container D" spacing="xSmall">
          <Child label="D: inherits low density from Container A, inherits xSmall spacing from Container D" />
        </Container>
      </Container>

      <h2>Reset Demo</h2>
      <Container label="Container E" density="low" spacing="xLarge">
        <Child label="E: inherits low density, xLarge spacing from Container E" />
        <Container label="Container F" resetDefaults>
          <Child label="F: resets to default density, medium spacing" />
        </Container>
      </Container>

      <h2>No Parent Defaults Demo</h2>
      <Container label="Container G">
        <Child label="G: no parent → defaults (medium, default)" />
      </Container>

      <h2>No Parent </h2>
      <Child label="H: no parent → child defaults (medium, default)" />
    </div>
  );
}
