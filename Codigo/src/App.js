import { useEffect } from "react"
import * as firebase from "firebase"
import Test from "./components/test"
import "./App.css"
import { CONFIG } from "./config"

function App() {
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(CONFIG)
    }
  }, [])

  return (
    <div className="App">
      <Test />
    </div>
  )
}

export default App
