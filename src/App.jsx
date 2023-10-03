import { Container, Typography, CssBaseline } from '@mui/material'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Header from './components/Header'
import './App.css'

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" style={{ marginTop: '30px' }}>
          To-Do List
        </Typography>
        <TodoForm />
        <TodoList />
      </Container>
    </>
  )
}

export default App