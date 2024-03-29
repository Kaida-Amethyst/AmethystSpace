import Head from 'next/head'
import Layout from "@/components/layout/Layout"
import PageHeader1 from "@/components/elements/PageHeader1"
import BlogCards2 from "@/components/sections/BlogCards2"

import data from "@/utils/MyAllBlogsData"

export default function Technology() {

    const TechData = data.filter((item) => 
        item.category === "Programming" || 
        item.category === "Application" ||
        item.category === "Principle" ||
        item.category === "Tools"
    );
    TechData .reverse();

    const tags = TechData.map((item) => item.tags);

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
                                    title={'计算机技术'}
                                    des={'编程语言，技术原理，工具链，框架，亦或者github上有趣的项目，我在这里分享我在技术世界里的所见所知。'}
                                    blogCount={TechData.length}
                                />
                                <BlogCards2 blogs={TechData } />
                                <div className="mb-70" />
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}

