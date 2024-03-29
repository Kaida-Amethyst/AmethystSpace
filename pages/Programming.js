import Head from 'next/head'
import Layout from "@/components/layout/Layout"
import PageHeader1 from "@/components/elements/PageHeader1"
import Pagination from "@/components/elements/Pagination"
import BlogCards2 from "@/components/sections/BlogCards2"

import data from "@/utils/MyAllBlogsData"

export default function Programming() {

    const ProgrammingData = data.filter((item) => item.category === "Programming");
    ProgrammingData .reverse();

    const tags = ProgrammingData.map((item) => item.tags);

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
                                title={'计算机技术 - 编程语言'}
                                des={'学习编程语言，C，C++，Java，Python过程中的知识与趣事'}
                                blogCount={ProgrammingData.length}
                            />
                            <BlogCards2 blogs={ProgrammingData} />
                            <div className="mb-70" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )
}

