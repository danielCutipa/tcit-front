import { connect } from 'react-redux'
import { Col } from './Col'
import { Input } from './Input'
import { Row } from './Row'
import { Button } from './Button'
import { useForm } from '../hooks/useForm'
import { searchPosts } from '../actions/post'

const FilterPost = (props) => {
  const [formValues, handleInputChange, resetForm] = useForm({
    filter: ''
  })
  const { filter } = formValues

  const filterPosts = () => {
    props.searchPosts(filter)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      filterPosts()
    }
  }

  return (
    <Row style={{ marginBottom: 16 }}>
      <Col>
        <Input
          name='filter'
          type='text'
          placeholder='Filtro de Nombre'
          onChange={handleInputChange}
          value={filter}
          onKeyDown={handleKeyDown}
        />
      </Col>
      <Col>
        <Button onClick={filterPosts}>Buscar</Button>
      </Col>
    </Row>
  )
}

export default connect(null, { searchPosts })(FilterPost)
