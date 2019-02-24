import React from "react"
import { graphql } from "gatsby"
import ArticleListing from "../components/ArticleListing/ArticleListing"
import BlogLogo from "../components/BlogLogo/BlogLogo"
import Drawer from "../components/Drawer/Drawer"
import Footer from "../components/Footer/Footer";
import Layout from "../layouts/SiteWrapper/SiteWrapper"
import MainHeader from "../components/MainHeader/MainHeader";
import MainNav from "../components/MainNav/MainNav";
import PageTitle from "../components/PageTitle/PageTitle";
import PageDescription from "../components/PageDescription/PageDescription";
import PaginatedContent from "../components/PaginatedContent/PaginatedContent";
import SEO from "../components/SEO/SEO";
import SocialMediaIcons from "../components/SocialMediaIcons/SocialMediaIcons";
import SubscribeButton from "../components/SubscribeButton/SubscribeButton";
import "../layouts/index.css";



class IndexTemplate extends React.Component {
  render() {
    const {
      first,
      group,
      index,
      last,
      pageCount
    } = this.props.pageContext;
    var next = 0
    var prev = 0
    if (!last) {
      next = index + 1;
    }
    if (!first) {
      prev = index - 1
    }

    const nodes = this.props.data.articles.edges;
    const config = this.props.data.config.elements;
    const socialUrls = config.socialmedia.value.split(",");

  return (
    <Drawer className="home-template">
        <SEO />
        <Layout>
          <MainHeader>
            <MainNav>
              <BlogLogo />
              <SocialMediaIcons
                urls={socialUrls}
                color="currentColor"
              />
              <SubscribeButton />
            </MainNav>
            <div className="vertical">
              <div className="main-header-content inner">
                <PageTitle />
                <PageDescription />
              </div>
            </div>
          </MainHeader>
          <div>
          <PaginatedContent
                page={index}
                pages={pageCount}
                next={next}
                prev={prev}
              >
            <ArticleListing articleEdges={nodes} index={index} count={group.length} />
            </PaginatedContent>
          </div>
          <Footer author="Aaron Collier" />
        </Layout>
      </Drawer>
    )
  }
}

export const query = graphql`
  query indexQuery {
    config: kenticoCloudItemHome{
      elements {
        title {
          value
        }
        socialmedia {
          value
        }
        base_url {
          value
        }
      }
    },
    articles: allKenticoCloudItemArticle (
        sort: { fields: [fields___date], order: DESC }
      ) {
      edges {
        node {
          fields {
            slug
            tags
            category
            date
          }
          elements {
            metadata__description {
              value
            }
            title {
              value
            }
            teaser {
              value {
                url
              }
            }            
          }
        }
      }
    }
  }
` 

export default IndexTemplate;