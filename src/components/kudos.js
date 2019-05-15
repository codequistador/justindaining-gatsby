// TODO Write Testimonials Component
// {
// allContentJson {
//   edges {
//     node {
//       kudos
//     }
//   }
// }
// }
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Kudos = () => {
  const data = useStaticQuery(graphql`
    query KudosQuery {
      allContentJson {
        edges {
          node {
            kudos
          }
        }
      }
    }
  `)

  return (
    <div>
      {data.allContentJson.edges.map(item =>
        item.node.kudos.map((kudo, key) => <div key={key}>{kudo}</div>)
      )}
    </div>
  )
}

export default Kudos
