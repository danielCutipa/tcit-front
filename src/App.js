import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [filter, setFilter] = useState('')
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])

  const searchPosts = () => {
    console.log('search', filter, posts, filteredPosts)
    setFilteredPosts(
      posts.filter((post) =>
        post.name.toLowerCase().includes(filter.toLowerCase())
      )
    )
  }

  const createPost = () => {
    console.log('save', name, description)
    const newList = [...posts, { id: getId(), name, description }]
    setNewList(newList)
    clearForm()
  }

  const deletePost = (id) => {
    console.log('delete', id)
    const result = window.confirm('Are you sure?')
    if (result) {
      const postList = posts.filter((post) => post.id !== id)
      const filteredPostsList = filteredPosts.filter((post) => post.id !== id)
      setPosts(postList)
      setFilteredPosts(filteredPostsList)
    }
  }

  const getId = () => {
    const ids = posts.map((post) => post.id)
    const newId = Math.max(...ids) + 1
    return newId
  }

  const setNewList = (newList) => {
    setPosts(newList)
    setFilteredPosts(newList)
  }

  const clearForm = () => {
    setName('')
    setDescription('')
    setFilter('')
  }

  return (
    <div className='App'>
      <input
        type='text'
        placeholder='Filtro de Nombre'
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      />
      <button onClick={searchPosts}>Buscar</button>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((post) => (
            <tr key={post.id}>
              <td>{post.name}</td>
              <td>{post.description}</td>
              <td>
                <button onClick={() => deletePost(post.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <input
        type='text'
        placeholder='Nombre'
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type='text'
        placeholder='Descripción'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button onClick={createPost}>Crear</button>
    </div>
  )
}

export default App
