import './App.css'
import { Header } from './Components/Header'
import { Board } from './Components/Board'

function App() {

  return (
    <div className=" flex flex-col items-center bg-[#7945ff]">
      <Header />
      <Board />
      
    </div>
  )
}

export default App
