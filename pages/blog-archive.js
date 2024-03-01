import Link from "next/link"
import Head from 'next/head'
import Layout from "@/components/layout/Layout"
import PageHeader1 from "@/components/elements/PageHeader1"
import Pagination from "@/components/elements/Pagination"

import data from "@/utils/MyAllBlogsData"
import { useRouter } from "next/router"

export default function Technology() {

    const BlogData = data;
    BlogData .reverse();

    const tags = BlogData.map((item) => item.tags);

    const router = useRouter()
    const page = parseInt(router.query.page) || 1;
    const StartIndex = (page - 1) * 6;
    const EndIndex = page * 6;

    return (
        <>
            <Head>
                <title>计算机技术 - 编程语言</title>
            </Head>
            <Layout>
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <PageHeader1
                                    title={'所有文章'}
                                    des={'本博客所有的文章'}
                                    blogCount={BlogData.length}
                                />
                                <div className="mt-40 mb-50">
                                    <div className="row mt-50 mb-10" data-masonry="{&quot;percentPosition&quot;: true }">
                                        {BlogData .slice(StartIndex, EndIndex).map((item, i) => (
                                            <div className="col-lg-4"  key={i}>
                                                <div className="card-blog-1 border-gray-800 bg-gray-850 hover-up">
                                                    <div className="card-image mb-20">
                                                        <Link className="post-type" href="#" />
                                                        <Link href={`/blog/${item.id}`}>
                                                            <img src={`${item.img}`} alt="Genz" />
                                                        </Link>
                                                    </div>
                                                    <div className="card-info">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                {item.tags.map(tag => (<Link className="color-gray-700 text-sm" href="#">#{tag} </Link>))}
                                                            </div>
                                                            <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                        </div><Link href={`/blog/${item.id}`}>
                                                            <h5 className="color-white mt-10">{item.title}</h5></Link>
                                                        <div className="row align-items-center mt-20">
                                                            <div className="col-7">
                                                                <div className="box-author"><img src="assets/imgs/page/homepage1/author.jpg" alt="Genz" />
                                                                    <div className="author-info">
                                                                        <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2023</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <Pagination />
                                </div>
                                <div className="mb-70" />
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}

