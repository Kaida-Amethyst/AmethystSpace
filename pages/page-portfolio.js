import React from "react"
import Head from "next/head"
import PortfolioFilter from "@/components/elements/PortfolioFilter"
import Layout from "@/components/layout/Layout"
import Testimonial from "@/components/slider/Testimonial"
import Pagination from "@/components/elements/Pagination"
import PartnersLogs from "@/components/sections/PartnersLogs"

const Portfolio = () => {
    return (
        <>
            <Head>
                <title>Genz - Portfolio</title>
            </Head>
            <Layout>
                <div className="cover-home1">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <div className="text-center mt-70 mb-50">
                                    <h2 className="color-linear d-inline-block mb-20 wow animate__animated animate__fadeInUp">展览馆</h2>
                                    <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">
                                        展示一些图像与视频作品。部分图片以后会做成NFT免费送给朋友(≧∇≦)ﾉ
                                        <br/>
                                        页面细节暂未开放（还没做完额）以后会慢慢开放细节页面啦~
                                    </p>
                                </div>
                                <PortfolioFilter col={6} show={4} />
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};
export default Portfolio;
