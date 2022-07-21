import { useState, useEffect } from 'react'

import './repositorios.css'

const Repositorios = () => {
  const [repos, setRepos] = useState([])
  const [search, setSearch] = useState('')
  const [filteredRepos, setFilteredRepos] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://api.github.com/users/larissa390/repos')
      const data = await response.json()

      setRepos(data)
    }
    getData()
  }, [])

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    setFilteredRepos(repos.filter(repo => repo.name.includes(search)))
  }, [repos, search])

  return (
    <>
      <p className="titulo"> Outros Projetos no meu Github</p>

      <div className="botao" >
        <input placeholder="Digite um termo" onChange={handleSearch}

        />
      </div>



      <div className="card-container">
        {filteredRepos.map(repo => {
          return (

            <div className="card" key={repo.id}>
              {repo.name}
            </div>

          )
        })}
      </div>

    </>
  )
}

export default Repositorios