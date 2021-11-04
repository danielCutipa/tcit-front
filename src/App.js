import { useEffect } from 'react'
import { Row } from './components/Row'
import { Col } from './components/Col'
import { Container } from './components/Container'
import { Table } from './components/Table'
import { connect } from 'react-redux'
import { getPosts, deletePost } from './actions/post'
import CreatePost from './components/CreatePost'
import FilterPost from './components/FilterPost'

function App(props) {
  const { posts, filteredPosts } = props

  useEffect(() => {
    if (posts.length === 0) {
      props.getPosts()
    }
  }, [])

  const removePost = async (post) => {
    const result = window.confirm(
      `¿Estas seguro de eliminar el post ${post.name}?`
    )
    if (result) {
      props.deletePost(post.id)
    }
  }

  return (
    <Container>
      <FilterPost />

      <Row>
        <Col style={{ width: '70vw' }}>
          <Table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.length === 0 ? (
                <tr>
                  <td>(vacio)</td>
                </tr>
              ) : null}
              {filteredPosts.map((post) => (
                <tr key={post.id}>
                  <td>{post.name}</td>
                  <td>{post.description}</td>
                  <td>
                    <button onClick={() => removePost(post)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      <CreatePost />
    </Container>
  )
}

const mapStateToProps = (state) => {
  return state.postReducer
}

export default connect(mapStateToProps, { getPosts, deletePost })(App)
