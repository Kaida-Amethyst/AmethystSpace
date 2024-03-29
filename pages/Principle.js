import Head from 'next/head'
import Layout from "@/components/layout/Layout"
import PageHeader1 from "@/components/elements/PageHeader1"
import BlogCards2 from "@/components/sections/BlogCards2"

import data from "@/utils/MyAllBlogsData"

export default function Principle() {

    const PrincipleData = data.filter((item) => item.category === "Principle");
    PrincipleData .reverse();

    const tags = PrincipleData.map((item) => item.tags);

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
                                    title={'计算机技术 - 技术原理'}
                                    des={'探究底层技术原理，看看底层世界中发生了哪些有趣的事'}
                                    blogCount={PrincipleData.length}
                                />
                                <BlogCards2 blogs={PrincipleData } />
                                <div className="mb-70" />
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}

