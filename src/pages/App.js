import GitLogo from '../assets/image.png'
import Input from '../components/Input';
import {Container} from './styles'

function App() {
  return (
    <Container className="App">
      <img src={GitLogo} width={72} height={72} alt='logo github' />
      <Input />
    </Container>
  );
}

export default App;
