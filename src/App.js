import { Button, Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container"

function App() {
  return (
    <Container className="my-4">
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto">Budgets</h1>
        <Button variant="primary">Add Budget</Button>
        <Button variant="outline-primary">Add Expanse</Button>
      </Stack>
    </Container>
  );
}

export default App;