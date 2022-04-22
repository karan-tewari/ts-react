import { useState } from "react"
import List from "./components/List"
import "./App.css"

interface PeopleObj {
  person: {
    age: number
    url: string
    note?: string
    name: string
  }[]
}

function App() {
  const [people] = useState<PeopleObj["person"]>([
    {
      name: "Kobe",
      age: 32,
      note: "The best player",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kobe_Bryant_2014.jpg/440px-Kobe_Bryant_2014.jp",
    },
    {
      name: "Shaq ",
      age: 26,
      note: "The random entry",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Shaquille_O%27Neal_October_2017_%28cropped%29.jpg/440px-Shaquille_O%27Neal_October_2017_%28cropped%29.jpg",
    },
  ])
  return (
    <div className="App">
      <h1>List of invitees</h1>
      <List people={people} />
    </div>
  )
}

export default App
