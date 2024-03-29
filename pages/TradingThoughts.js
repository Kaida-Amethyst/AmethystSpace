import Head from 'next/head'
import Layout from "@/components/layout/Layout"
import PageHeader1 from "@/components/elements/PageHeader1"
import SidebarBottom from "@/components/sections/SidebarBottom"
import data from "@/utils/MyAllBlogsData"
import BlogCards1 from "@/components/sections/BlogCards1"

export default function TradingThoughts() {
    const TradingThoughts = data.filter((item) => item.category === "TradingThoughts")
    TradingThoughts .reverse()

    return (
    <>
    <Head>
        <title>交易 - 心得</title>
    </Head>
    <Layout>
      <div className="cover-home3">
        <div className="container">
          <div className="row">
              <div className="col-xl-1" />
              <div className="col-xl-10 col-lg-12">
                  <PageHeader1
                      title={'交易-心得'}
                      des={'分享一些在加密货币交易领域中的一些心得与体会。'}
                      blogCount={TradingThoughts .length}
                  />
                  <BlogCards1 blogs={TradingThoughts } />
                  <div className="mb-70" />
              </div>
          </div>
        </div>
      </div>
    </Layout>
    </>
    )
}
