import Head from 'next/head'
import Layout from "@/components/layout/Layout"
import PageHeader1 from "@/components/elements/PageHeader1"
import SidebarBottom from "@/components/sections/SidebarBottom"
import data from "@/utils/MyAllBlogsData"
import BlogCards1 from "@/components/sections/BlogCards1"


export default function PagePersonalGrowth() {
    const personalGrowthData = data.filter((item) => item.category === "PersonalGrowth")
    personalGrowthData.reverse()

    return (
    <>
    <Head>
        <title>Personal Growth</title>
    </Head>
    <Layout>
      <div className="cover-home3">
        <div className="container">
          <div className="row">
              <div className="col-xl-1" />
              <div className="col-xl-10 col-lg-12">
                  <PageHeader1
                      title={'个人成长'}
                      des={'Become a better people.'}
                      blogCount={personalGrowthData.length}
                  />
                  <BlogCards1 blogs={personalGrowthData} />
                  <div className="mb-70" />
              </div>
          </div>
        </div>
      </div>
    </Layout>
    </>
    )
}


