import GitLogo from '../assets/image.png'
import Input from '../components/Input';
import {Container} from './styles'
import ItemRepo from '../components/ItemRepo'
import { useState } from 'react';
import Button from '../components/Button'
import {api} from '../services/api'

function App() {

  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([])

  const handleSearchRepo = async () => {

    const {data} = await api.get(`repos/${currentRepo}`) 


    if(data.id){

      const isExist = repos.find(repo => repo.id === data.id)

      if(!isExist){
      setRepos(prev => [...prev, data]);
      setCurrentRepo('')
      return
      }
  }
  alert("Repositório não encontrado")

  }

  const handleRemoveRepo = (id) => {
    setRepos(prev => prev.filter(repo => repo.id !== id));
  }

  return (
    <Container className="App">
      <img src={GitLogo} width={72} height={72} alt='logo github' />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
