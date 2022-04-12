import { useState } from "react"

interface PeopleObj {
  person: {
    age: number
    url: string
    note?: string
    name: string
  }[]
}

function App() {
  const [people, setPeople] = useState<PeopleObj["person"]>([
    {
      name: "Koe",
      age: 32,
      note: "The best player",
      url: "",
    },
    {
      name: "Chloe",
      age: 26,
      note: "The random entry",
      url: "",
    },
  ])

  people.map((person) => {
    return person.age
  })

  return <div>Hello world</div>
}

export default App
