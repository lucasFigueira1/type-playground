import './App.css'
import TextContainer from './components/TextContainer'
import { TypingContextProvider } from './context/TypingContext'

function App() {

  return (
    <TypingContextProvider>
      <article>
        <TextContainer />
      </article>
    </TypingContextProvider>
  )
}

export default App
