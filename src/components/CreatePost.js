import { connect } from 'react-redux'
import { Col } from './Col'
import { Input } from './Input'
import { Row } from './Row'
import { addPost } from '../actions/post'
import { useForm } from '../hooks/useForm'
import { Button } from './Button'

const CreatePost = (props) => {
  const [formValues, handleInputChange, resetForm] = useForm({
    name: '',
    description: ''
  })
  const { name, description } = formValues

  const createPost = () => {
    if (name === '') {
      return alert('Nombre es requerido')
    }

    props.addPost({ name, description })

    resetForm()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      createPost()
    }
  }

  return (
    <Row>
      <Col>
        <Input
          name='name'
          type='text'
          placeholder='Nombre'
          onChange={handleInputChange}
          value={name}
          onKeyDown={handleKeyDown}
        />
      </Col>

      <Col>
        <Input
          name='description'
          type='text'
          placeholder='Descripción'
          onChange={handleInputChange}
          value={description}
          onKeyDown={handleKeyDown}
        />
      </Col>

      <Col>
        <Button onClick={createPost}>Crear</Button>
      </Col>
    </Row>
  )
}

const mapStateToProps = (state) => {
  return state.postReducer
}

export default connect(mapStateToProps, { addPost })(CreatePost)
