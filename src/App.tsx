import { gql, useQuery } from "@apollo/client"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY)
  console.log(data)

  return (
    <ul>
      {data?.lessons.map(lessons => {
        return <li key={lessons.id}>{lessons.title}</li>
      })}


    </ul>
  )
}

export default App
// https://api-sa-east-1.graphcms.com/v2/cl4q0oxfm2oxi01xsgzy5b979/master