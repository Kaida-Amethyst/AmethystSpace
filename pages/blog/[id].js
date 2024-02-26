import Link from "next/link"
import Head from 'next/head'
import Layout from "@/components/layout/Layout"
import Breadcrumb from "@/components/elements/Breadcrumb"
import SingleContent from "@/components/sections/SingleContent"
import Sidebar2 from "@/components/layout/Sidebar2"
import data from "@/utils/MyAllBlogsData"

export default function BlogPage( {metadata, content} ) {
    
    return (
        <>
        <Head>
            <title>
                Genz - Single post
            </title>
        </Head>
        <Layout>
            <div className="cover-home3">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-1" />
                        <div className="col-xl-10 col-lg-12">
                            <div className="pt-30 border-bottom border-gray-800 pb-20">
                                <div className="box-breadcrumbs">
                                    <Breadcrumb title={metadata.title} />
                                </div>
                            </div>
                            <div className="row mt-50 align-items-end">
                                <div className="col-lg-9 col-md-8">
                                    <h2 className="color-linear mb-30">{metadata.title}</h2>
                                    <div className="box-author mb-20"><img src="assets/imgs/page/about/author2.png" alt="Genz" />
                                        <div className="author-info">
                                            <h6 className="color-gray-700">Kaida Amethyst</h6><span className="color-gray-700 text-sm mr-30">{metadata.date}</span><span className="color-gray-700 text-sm">3 mins to read</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="box-share border-gray-800">
                                        <h6 className="d-inline-block color-gray-500 mr-10">Share</h6>
                                        <Link className="icon-media icon-fb" href="#" />
                                        <Link className="icon-media icon-tw" href="#" />
                                        <Link className="icon-media icon-printest" href="#" />
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-50">
                                <div className="col-lg-8">
                                    <SingleContent metadata={metadata} content={content} />
                                </div>
                                <div className="col-lg-4">
                                    <Sidebar2 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )
}

export async function getStaticProps({ params }) {
    const id = params.id;
    const item = data.find((item) => item.id === parseInt(id));
    const filename = item.filename;

    const path = require('path');
    const fs = require('fs');
    const matter = require('gray-matter');
    const dir = path.join(process.cwd(), 'blogs');
    const filepath = path.join(dir, `${filename}`);
    const filecontent = fs.readFileSync(filepath, 'utf8');

    const { data: frontmatter, content } = matter(filecontent);
    const metadata = item;
    return {
        props: {
            metadata,
            content,
        }
    };
}

export async function getStaticPaths() {
    const paths = data.map((item) => {
        return {
            params: { id: item.id.toString() }
        }
    });

    return {
        paths,
        fallback: false
    };

}
