import React from "react"
// importを追記
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  // queryの取得処理を追加
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulUser {
        nodes {
          id
          name
          age
        }
      }
      allContentfulPost {
        nodes {
          id
          title
        }
      }
      allContentfulPostContentsTextNode{
	    nodes {
		  id
		  contents
		}
	  }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      
      {data.allContentfulPost.nodes.map(({ id, title }) => (
        <h1 key={id}>
          {title}
        </h1>
      ))}

      {data.allContentfulUser.nodes.map(({ id, name, age }) => (
        <h3 key={id}>
          {name}({age}歳)
        </h3>
      ))}
      
      {data.allContentfulPostContentsTextNode.nodes.map(({ id, contents }) => (
        <p>
          {contents}
        </p>
      ))}

      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage