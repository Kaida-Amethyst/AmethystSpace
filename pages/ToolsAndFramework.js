import Head from 'next/head'
import Layout from "@/components/layout/Layout"
import PageHeader1 from "@/components/elements/PageHeader1"
import BlogCards2 from "@/components/sections/BlogCards2"

import data from "@/utils/MyAllBlogsData"

export default function Tools() {

    const ToolsData = data.filter((item) => item.category === "Tools");
    ToolsData .reverse();

    const tags = ToolsData.map((item) => item.tags);

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
                                    title={'计算机技术 - 框架工具'}
                                    des={'计算机世界中好用的框架和工具，奇妙的用法，踩过的坑'}
                                    blogCount={ToolsData.length}
                                />
                                <BlogCards2 blogs={ToolsData} />
                                <div className="mb-70" />
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}

