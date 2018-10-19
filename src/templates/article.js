import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/SiteWrapper/SiteWrapper";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import MainHeader from "../components/MainHeader/MainHeader";
import MainNav from "../components/MainNav/MainNav";
import BlogLogo from "../components/BlogLogo/BlogLogo";
import Drawer from "../components/Drawer/Drawer";
import Navigation from "../components/Navigation/Navigation";
import MainContent from "../components/MainContent/MainContent";
import ArticleCategory from "../components/ArticleCategory/ArticleCategory";
import ArticleDate from "../components/ArticleDate/ArticleDate";
import ArticleHeader from "../components/ArticleHeader/ArticleHeader";
import ArticleFormatting from "../components/ArticleFormatting/ArticleFormatting";
import ArticleFooter from "../components/ArticleFooter/ArticleFooter";
import AuthorImage from "../components/AuthorImage/AuthorImage";
import AuthorInfo from "../components/AuthorInfo/AuthorInfo";
import ReadNext from "../components/ReadNext/ReadNext";
import ArticleTags from "../components/ArticleTags/ArticleTags";
import Footer from "../components/Footer/Footer";

function parseArticle(article, slug) {
  const result = article;
  if (!result.id) {
    result.id = slug;
  }
  return result;
}

const formatReadNext = value => ({
  path: `/articles/${value.fields.slug}`,
  title: value.elements.title.value,
  cover: value.elements.teaser.value[0].url,
  excerpt: value.elements.metadata__description.value
});

class ArticleTemplate extends React.Component {
  state = {
    menuOpen: false
  };

  handleOnClick = evt => {
    evt.stopPropagation();
    if (this.state.menuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  };

  handleOnClose = evt => {
    evt.stopPropagation();
    this.closeMenu();
  };

  openMenu = () => {
    this.setState({ menuOpen: true });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const { data } = this.props;
    const { slug, next, prev } = this.props.pageContext;
    const nextSlug = next.split("/")[2];
    const prevSlug = prev.split("/")[2];
    const articleNode = this.props.data.article;
    const article = parseArticle(articleNode, slug);
    const className = article.article_class ? article.article_class : "article";
    const config = this.props.data.config.elements;
    const authorData = this.props.data.author.elements;
    const getNextData = () => (nextSlug ? formatReadNext(data.next) : null);
    const getPrevData = () => (prevSlug ? formatReadNext(data.prev) : null);
    const articleAuthor = article.elements.authors.name;

    return (
      <Drawer className="article-template" isOpen={this.state.menuOpen}>
        <Helmet>
          <title>{`${article.elements.title.value} | ${config.title.value}`}</title>
        </Helmet>
        <SEO articlePath={slug} articleNode={articleNode} seoConfig={config} articleSEO />

        <Navigation config={config} onClose={this.handleOnClose} />

        <Layout>
          <MainHeader className="article-header" cover={article.elements.teaser.value[0].url}>
            <MainNav>
              <BlogLogo logo={config.blog_logo.value[0].url} title={config.title.value} />
            </MainNav>
          </MainHeader>
          <MainContent>
            <ArticleFormatting className={className}>
              <ArticleHeader>
                <h1 className="article-title">{article.elements.title.value}</h1>
                <section className="article-meta">
                  <ArticleDate prefix="Published " date={article.elements.publish_date.value} />
                  <ArticleCategory prefix=" in " category={article.fields.category} />
                  <ArticleTags prefix=" on " tags={article.fields.tags} />
                </section>
              </ArticleHeader>

              <section
                className="article-content"
                dangerouslySetInnerHTML={{ __html: articleNode.elements.body.value }}
              />

              <ArticleFooter>
                <AuthorImage author={authorData} />
                <AuthorInfo prefix="/author" author={authorData} />
              </ArticleFooter>
            </ArticleFormatting>
          </MainContent>
          {<ReadNext next={getNextData()} prev={getPrevData()} />}
          
          <Footer
            copyrightYear={article.elements.publish_date.value}
            author={authorData.name.value}
          />
        </Layout>
      </Drawer>
    );
  }
}
  
  export const query = graphql`
  query articleQuery($slug: String!, $nextSlug: String, $prevSlug: String, $articleAuthor: String) {
    config: kenticoCloudItemHome{
      elements {
        title {
          value
        }
        splash_image {
          value {
            url
          }
        }
        blog_logo {
          value {
            url
          }
        }
        metadata__description {
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
    author: kenticoCloudItemAuthor (system: {codename: { eq: $articleAuthor} } ) {
      elements {
        picture {
          value {
            url
          }
        }
        short_bio {
          value
        }
        name {
          value
        }
        url {
          value
        }
      }
    },
    article: kenticoCloudItemArticle(fields: { slug: { eq: $slug } })  {
      fields {
        slug
        tags
        category
      }
      elements {
        title {
          value
        }
        body {
          value
        }
        teaser {
          value {
            url
          }
        }
        authors {
          value
        }
        
        metadata__description {
          value
        }
        publish_date {
          value
        }
      }
    }
    # prev Article data
    prev: kenticoCloudItemArticle(fields: { slug: { eq: $prevSlug } }) {
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
      fields {
        slug
      }
    }
    # next Article data
    next: kenticoCloudItemArticle(fields: { slug: { eq: $nextSlug } }) {
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
      fields {
        slug
      }
    }
  }
`
  
export default ArticleTemplate;