import React from 'react'
import { useState } from 'react'
import Insert from './Insert'


function Home() {
    const [todos,setTodos]= useState([])
  return (
    <div>
      <h2>To  do List </h2>
      <Insert/>
      {
            todos.length===0 ? 
            <div><h2> No Record </h2></div>
            :
              todos.map(todo =>(
                <div>
                   {todo}
                    </div>
                ))

            }

    </div>
  )
}

export default Home
