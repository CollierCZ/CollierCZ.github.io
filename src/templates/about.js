import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/SiteWrapper/SiteWrapper"

export default ({ data }) => {
  const about = data.kenticoCloudItemAbout
  return (
  <Layout>
    <h1>{about.title.value}</h1>
    <div dangerouslySetInnerHTML={{ __html: about.body.value }} />
  </Layout>
)
}

export const query = graphql`
query aboutQuery($slug: String!) {
  kenticoCloudItemAbout(fields: { slug: { eq: $slug } })  {
    system {
      last_modified   
    }
    elements {
      title {
        value
      }
      body {
        value
      }
    }
  }
}
`