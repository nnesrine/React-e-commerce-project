// import { useState } from 'react'
import { Container } from '@mui/material';
import './App.css'
import MainContent from './MainContent';

function App() {
  // const [count, setCount] = useState(0)

  return (
    < >
      <div style={{display:"flex", justifyContent:"center", width:"90vw"}}>
        <Container maxWidth="xl"><MainContent></MainContent></Container>
      </div>
    </>
  )
}

export default App
