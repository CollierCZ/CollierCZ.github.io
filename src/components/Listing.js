import React from "react"
import ArticleListing from "../components/ArticleListing"
import BlogLogo from "../components/BlogLogo"
import Footer from "../components/Footer";
import Layout from "../layouts/SiteWrapper/SiteWrapper"
import MainHeader from "../components/MainHeader";
import MainNav from "../components/MainNav";
import PageTitle from "../components/PageTitle";
import PageDescription from "../components/PageDescription";
import PaginatedContent from "../components/PaginatedContent";
import SEO from "../components/SEO";
import SocialMediaIcons from "../components/SocialMediaIcons";
import "../layouts/index.css";

const Listing = (info) => {
    const {
        headStyle,
        first,
        group,
        index,
        last,
        pageCount,
        nodes,
        socialUrls
    } = info.info;
    const additionalInfo = info.info.tag ? info.info.tag : info.info.category ? info.info.category : null;
    const additionalDescription = info.info.tag ? `Articles tagged with ${info.info.tag}`: info.info.category ? `Articles in the ${info.info.category} category` : null;

    var next = 0
    var prev = 0
    if (!last) {
      next = index + 1;
    }
    if (!first) {
      prev = index - 1
    }

    return (
        <>
            <SEO />
            <Layout>
              <MainHeader headStyle={headStyle}>
                <MainNav>
                  <BlogLogo />
                  <SocialMediaIcons
                    urls={socialUrls}
                  />
                </MainNav>
                <div className="vertical">
                  <div className="main-header-content inner">
                    <PageTitle text={additionalInfo} />
                    <PageDescription text={additionalDescription} />
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
          </>
        )
}

export default Listing;