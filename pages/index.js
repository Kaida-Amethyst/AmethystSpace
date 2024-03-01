import Head from 'next/head'
import Layout from "@/components/layout/Layout"
import Hero from "@/components/sections/Hero"
import RecentPosts4 from "@/components/sections/RecentPosts4"
import PopularCategories from "@/components/sections/PopularCategories"
import MyEditorPicked from "@/components/sections/MyEditorPicked"
import MyRecentPosts from "@/components/sections/MyRecentPosts"
import MyServices from "@/components/sections/MyServices"

export default function Home( ) {
  return (
    <>
      <Head>
        <title>Digital Garden - 紫月的数字花园</title>
      </Head>
      <Layout>
        <Hero />
        <div className="cover-home3">
          <div className="container">
            <div className="row">
              <div className="col-xl-1" />
              <div className="col-xl-10 col-lg-12">
                <MyEditorPicked />
                <MyServices />
                <MyRecentPosts />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
