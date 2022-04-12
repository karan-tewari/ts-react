import React from "react"

interface PeopleObj {
  people: {
    age: number
    url: string
    note?: string
    name: string
  }[]
}

const List: React.FC<PeopleObj> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <img className="List-img" src={person.url} alt="person" />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.note}</p>
        </li>
      )
    })
  }

  return <ul>{renderList()}</ul>
}

export default List
