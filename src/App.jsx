import { Container, Typography, CssBaseline } from '@mui/material'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" style={{ marginTop: '20px' }}>
          To-Do List
        </Typography>
        <TodoForm />
        <TodoList />
      </Container>
    </>
  )
}

export default App