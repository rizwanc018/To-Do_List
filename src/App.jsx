import { Container, Typography } from '@mui/material'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" style={{ marginTop: '20px' }}>
        To-Do List
      </Typography>
      <TodoForm />
      <TodoList />
    </Container>
  )
}

export default App