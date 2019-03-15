import { graphql, StaticQuery } from "gatsby"
import React, { Component } from "react";
import Helmet from "react-helmet";
import urljoin from "url-join";



class SEO extends Component {
  render () {  
  const { articleNode, articlePath } = this.props;
  return (
  <StaticQuery
  query={graphql`
    query {
      kenticoCloudItemHome{
        elements {
          title {
            value
          }
          splash_image {
            assets {
              url
            }
          }
          blog_logo {
            assets {
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
      }
    }
  `}
  render = {data => {
    const siteTitle = data.kenticoCloudItemHome.elements.title.value;
    const title = articleNode ? articleNode.elements.title.value : '';
    const description = articleNode ? articleNode.elements.metadata__description.value : data.kenticoCloudItemHome.elements.metadata__description.value;
    const image = articleNode ? articleNode.elements.teaser.value[0].url : data.kenticoCloudItemHome.elements.splash_image.assets[0].url;
    const blogURL = data.kenticoCloudItemHome.elements.base_url.value;
    const logo = data.kenticoCloudItemHome.elements.blog_logo.assets[0].url;
    const articleURL = articleNode ? urljoin(blogURL, "/articles", articlePath, "/") : null;
    var schemaOrgJSONLD = [
      {
        "@context": "http://schema.org",
        "@type": "WebSite",
        url: blogURL,
        name: title,
        alternateName: ""
      }
    ];
    if (articleNode) {
      schemaOrgJSONLD.push(
        {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": articleURL,
                name: title,
                image
              }
            }
          ]
        },
        {
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          url: blogURL,
          name: title,
          alternateName: "",
          headline: title,
          image: {
            "@type": "ImageObject",
            url: image
          },
          description
        }
      );
    }
    return (
      <Helmet defaultTitle={siteTitle} titleTemplate={"%s | " + siteTitle}
        link={[
          { rel: 'shortcut icon', type: 'image/png', href: `${logo}` }
      ]}
      >
        {/* General tags */}
        <title lang="en">{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />

        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>

        <meta property="og:url" content={articleURL ? articleURL : blogURL} />
        {articleURL ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        {/* no Facebook app
          <meta
            property="fb:app_id"
            content={config.siteFBAppID ? config.siteFBAppID : ""}
          />
        */}

        <meta name="twitter:card" content="summary_large_image" />
         {/* no Twitter creator
          <meta
            name="twitter:creator"
            content={config.userTwitter ? config.userTwitter : ""}
          />
         */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    );
  }
  } />)}
}

export default SEO;