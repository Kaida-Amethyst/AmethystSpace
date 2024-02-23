import Link from "next/link"
import Head from 'next/head'
import Layout from "@/components/layout/Layout"
import Pagination from "@/components/elements/Pagination"
import PageHeader1 from "@/components/elements/PageHeader1"
import SidebarBottom from "@/components/sections/SidebarBottom"
// import data from "@/utils/blogData"
import data from "@/utils/MyAllBlogsData"
import { useRouter } from "next/router"

export default function PagePersonalGrowth() {
    
    // Filter data by category, temporary, use category "Application"
    // change back to "Personal Growth" later
    const personalGrowthData = data.filter((item) => item.category === "Application")
    // reverse
    personalGrowthData.reverse()


    // const urlParams = new URLSearchParams(window.location.search);
    // const page = parseInt(urlParams.get('page')) || 1;
    //
    // const StartIndex = (page - 1) * 6;
    // const EndIndex = page * 6;
    const router = useRouter()
    const page = parseInt(router.query.page) || 1;
    const StartIndex = (page - 1) * 6;
    const EndIndex = page * 6;


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
                  />
                  <div className="mt-50 mb-50">
                      <div className="row mt-50 mb-10">
                          {personalGrowthData.slice(StartIndex, EndIndex).map((item, i) => (
                              <div className="col-lg-6"  key={i}>
                                  <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                                      <div className="card-image mb-20">
                                          <Link className="post-type" href="#" />
                                          <Link href={`/blog/${item.id}`}>
                                              <img src={`/assets/imgs/page/healthy/${item.img}`} alt="Genz" />
                                          </Link>
                                      </div>
                                      <div className="card-info">
                                          <div className="row">
                                              <div className="col-7">
                                                  <Link className="color-gray-700 text-sm" href="/blog-archive">#Travel</Link>
                                                  <Link className="color-gray-700 text-sm" href="/blog-archive">#Lifestyle</Link>
                                              </div>
                                              <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                          </div><Link href={`/blog/${item.id}`}>
                                              <h4 className="color-white mt-20">{item.title}</h4></Link>
                                          <p className="color-gray-500 mt-15">{item.excerpt}</p>
                                          <div className="row align-items-center mt-25">
                                              <div className="col-7">
                                                  <div className="box-author"><img src="assets/imgs/page/homepage1/author.jpg" alt="Genz" />
                                                      <div className="author-info">
                                                          <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2023</span>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href={`/blog/${item.id}`}><span>Read more</span></Link></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          ))}
                      </div>
                      <Pagination />
                  </div>
                  <div className="mb-70" />
                  <SidebarBottom />
              </div>
          </div>
        </div>
      </div>
    </Layout>
    </>
    )
}

