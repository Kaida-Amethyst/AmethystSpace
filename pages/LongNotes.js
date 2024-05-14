import Head from 'next/head'
import Layout from "@/components/layout/Layout"
import PageHeader1 from "@/components/elements/PageHeader1"
import SidebarBottom from "@/components/sections/SidebarBottom"
import longNotesCollection from "@/utils/LongNotesCollection"
import Cards from "@/components/sections/Cards"


export default function LongNotes() {

    return (
    <>
    <Head>
        <title>长篇笔记</title>
    </Head>
    <Layout>
      <div className="cover-home3">
        <div className="container">
          <div className="row">
              <div className="col-xl-1" />
              <div className="col-xl-10 col-lg-12">
                  <PageHeader1
                      title={'长篇笔记'}
                      des={'一些篇幅较长的笔记，这些笔记不太适合作为博客，更加适合作为电子书，因此单独把它们整理到这里。'}
                      blogCount={longNotesCollection.length}
                  />
                  <div className="mb-70" />
                  <Cards notes={longNotesCollection} />
              </div>
          </div>
        </div>
      </div>
    </Layout>
    </>
    )
}


