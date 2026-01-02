
import { useState } from 'react'
import './App.css'
import Card from './components/card.jsx'

function App() {

  const [Courses,setCourses] = useState([
    {
      imageurl:'https://logos-world.net/wp-content/uploads/2021/10/Python-Symbol.png',
      courseName:'Python programming',
      Description:'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation'
    },
    {
      imageurl:'https://static.vecteezy.com/system/resources/previews/022/424/587/large_2x/java-logo-editorial-free-vector.jpg',
      courseName:'Java programming',
      Description:'Java is a high-level, general-purpose, memory-safe, object-oriented programming language. It is intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need to recompile.'
    },
    {
      imageurl:'https://wallpaperaccess.com/full/9445567.jpg',
      courseName:'MERN',
      Description:'The MERN stack is a widely adopted full-stack development framework that simplifies the creation of modern web applications. Using JavaScript for both the frontend and backend enables developers to efficiently build robust, scalable, and dynamic applications.'
    },
    {
      imageurl:'https://logos-world.net/wp-content/uploads/2021/10/Python-Symbol.png',
      courseName:'React.js',
      Description:'React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js and Remix[a]. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality'
    }
  ])
  return (
    <>
      <div className="container">
        <h2>Courses List</h2>
        <div className="card-container">
          {
            Courses.map((course,index) => {
              return(
                <Card key={index} imageurl={course.imageurl} courseName={course.courseName} Description={course.Description} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
