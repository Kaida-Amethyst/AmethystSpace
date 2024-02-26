import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Layout from "@/components/layout/Layout"
import Breadcrumb from "@/components/elements/Breadcrumb"
import data from "@/utils/blogData"
import ReactMarkdown from 'react-markdown';
import Prism from 'prismjs';
// import 'prism-themes/themes/prism-nord.css';
import 'prism-themes/themes/prism-darcula.css';
// import 'prism-themes/themes/prism-gruvbox-dark.css';
// import 'prismjs/themes/prism-laserwave.css';
import 'prismjs/components/prism-python';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';


const BlogDetails = ( {content} ) => {

    const renderers = {
        h1: ({ children }) => <h1 className="color-linear mb-30">{children}</h1>,
        h2: ({ children }) => <h2 className="color-linear mb-30">{children}</h2>,
        h3: ({ children }) => <h3 className="color-white mt-50 mb-30">{children}</h3>,
        h4: ({ children }) => <h4 className="color-white mt-40 mb-30">{children}</h4>,
        p: ({ children }) => <p className="text-lg color-gray-500">{children}</p>,
    };

    useEffect(() => {
        Prism.highlightAll();
    }, [content]);


    return (
    <>
    <Layout>
        {<div className="cover-home3">
            <div className="container">
                <div className="row">
                    <div className="col-xl-1" />
                    <div className="col-xl-10 col-lg-12">
                        <div className="pt-30 border-bottom border-gray-800 pb-20">
                            <div className="box-breadcrumbs">
                                <Breadcrumb title="This is Title" />
                            </div>
                        </div>
                        <div className="row mt-50 align-items-end">
                            <div className="col-lg-9 col-md-8">
                                <h2 className="color-linear mb-30"> This is title H2 </h2>
                                <div className="box-author mb-20"><img src="/assets/imgs/page/about/author2.png" alt="Genz" />
                                    <div className="author-info">
                                        <h6 className="color-gray-700"> This is authorTitle</h6><span className="color-gray-700 text-sm mr-30"> This is date</span><span className="color-gray-700 text-sm">3 mins to read</span>
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
                                <div className="content-detail border-gray-800">
                                    <ReactMarkdown remarkPlugins={[[remarkGfm, {singleTilde:true}], [remarkMath]]} rehypePlugins={[rehypeKatex]} components={renderers}>
                                        {content}
                                    </ReactMarkdown>
                                </div>
                                <div className="box-tags">
                                    <Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 hover-up" href="/blog-archive">#Nature</Link>
                                    <Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 hover-up" href="/blog-archive">#Beauty</Link>
                                    <Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 hover-up" href="/blog-archive">#Travel Tips</Link>
                                    <Link className="btn btn-tags bg-gray-850 border-gray-800 hover-up" href="/blog-archive">#House</Link></div>
                                <div className="box-comments border-gray-800">
                                    <h3 className="text-heading-2 color-gray-300">Comments</h3>
                                    <div className="list-comments-single">
                                        <div className="item-comment">
                                            <div className="comment-left">
                                                <div className="box-author mb-20"><img src="/assets/imgs/page/single/author.png" alt="Genz" />
                                                    <div className="author-info">
                                                        <h6 className="color-gray-700">Robert Fox</h6><span className="color-gray-700 text-sm mr-30">August 25, 2023</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment-right">
                                                <div className="text-comment text-xl color-gray-500 bg-gray-850 border-gray-800">White white dreamy drama tically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade.</div>
                                            </div>
                                        </div>
                                        <div className="item-comment">
                                            <div className="comment-left">
                                                <div className="box-author mb-20"><img src="/assets/imgs/page/single/author2.png" alt="Genz" />
                                                    <div className="author-info">
                                                        <h6 className="color-gray-700">Jenny Wilson</h6><span className="color-gray-700 text-sm mr-30">August 25, 2023</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment-right">
                                                <div className="text-comment text-xl color-gray-500 bg-gray-850 border-gray-800">White white dreamy drama tically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade.</div>
                                            </div>
                                        </div>
                                        <div className="item-comment item-comment-sub">
                                            <div className="comment-left">
                                                <div className="box-author mb-20"><img src="/assets/imgs/page/single/author3.png" alt="Genz" />
                                                    <div className="author-info">
                                                        <h6 className="color-gray-700">Eleanor Pena</h6><span className="color-gray-700 text-sm mr-30">August 25, 2023</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment-right">
                                                <div className="text-comment text-xl color-gray-500 bg-gray-850 border-gray-800">White white dreamy drama tically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-form-comments mb-50">
                                    <h4 className="text-heading-4 color-gray-300 mb-40">Leave a comment</h4>
                                    <div className="box-forms">
                                        <form action="#">
                                            <textarea className="form-control bg-gray-850 border-gray-800 bdrd16 color-gray-500" name="comment" rows={5} placeholder="Write a comment" defaultValue={""} />
                                            <div className="row mt-20">
                                                <div className="col-sm-6 mb-20">
                                                    <input className="cb-agree" type="checkbox" />
                                                    <p className="text-sm color-gray-500 pl-25">Save my name, email, and website in this browser for the next time I comment.</p>
                                                </div>
                                                <div className="col-sm-6 text-end">
                                                    <Link className="btn btn-linear" href="#">Post Comment</Link></div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="sidebar">
                                    <div className="box-sidebar bg-gray-850 border-gray-800">
                                        <div className="head-sidebar">
                                            <h5 className="line-bottom">Categories</h5>
                                        </div>
                                        <div className="content-sidebar">
                                            <div className="list-cats">
                                                <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                                    <div className="cat-left">
                                                        <div className="image-cat">
                                                            <Link href="/blog-archive"><img src="/assets/imgs/page/healthy/cat1.png" alt="Genz" /></Link></div>
                                                        <div className="info-cat">
                                                            <Link className="color-gray-500 text-xl" href="/blog-archive">Travel Tips</Link></div>
                                                    </div>
                                                    <div className="cat-right">
                                                        <Link className="btn btn-small text-sm color-gray-500 bg-gray-800" href="/blog-archive">36
                                                            posts</Link></div>
                                                </div>
                                                <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                                    <div className="cat-left">
                                                        <div className="image-cat">
                                                            <Link href="/blog-archive-2"><img src="/assets/imgs/page/healthy/cat2.png" alt="Genz" /></Link></div>
                                                        <div className="info-cat">
                                                            <Link className="color-gray-500 text-xl" href="/blog-archive-2">Technology</Link></div>
                                                    </div>
                                                    <div className="cat-right">
                                                        <Link className="btn btn-small text-sm color-gray-500 bg-gray-800" href="/blog-archive-2">14
                                                            posts</Link></div>
                                                </div>
                                                <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                                    <div className="cat-left">
                                                        <div className="image-cat">
                                                            <Link href="/blog-archive-3"><img src="/assets/imgs/page/healthy/cat3.png" alt="Genz" /></Link></div>
                                                        <div className="info-cat">
                                                            <Link className="color-gray-500 text-xl" href="/blog-archive-3">Business</Link></div>
                                                    </div>
                                                    <div className="cat-right">
                                                        <Link className="btn btn-small text-sm color-gray-500 bg-gray-800" href="/blog-archive-3">87
                                                            posts</Link></div>
                                                </div>
                                                <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                                    <div className="cat-left">
                                                        <div className="image-cat">
                                                            <Link href="/blog-archive-4"><img src="/assets/imgs/page/healthy/cat4.png" alt="Genz" /></Link></div>
                                                        <div className="info-cat">
                                                            <Link className="color-gray-500 text-xl" href="/blog-archive-4">Food</Link></div>
                                                    </div>
                                                    <div className="cat-right">
                                                        <Link className="btn btn-small text-sm color-gray-500 bg-gray-800" href="/blog-archive-4">125
                                                            posts</Link></div>
                                                </div>
                                                <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                                    <div className="cat-left">
                                                        <div className="image-cat">
                                                            <Link href="/blog-archive-5"><img src="/assets/imgs/page/healthy/cat5.png" alt="Genz" /></Link></div>
                                                        <div className="info-cat">
                                                            <Link className="color-gray-500 text-xl" href="/blog-archive-5">Lifestyle</Link></div>
                                                    </div>
                                                    <div className="cat-right">
                                                        <Link className="btn btn-small text-sm color-gray-500 bg-gray-800" href="/blog-archive-5">6
                                                            posts</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-sidebar bg-gray-850 border-gray-800">
                                        <div className="head-sidebar wow animate__animated animate__fadeIn">
                                            <h5 className="line-bottom">Popular Posts</h5>
                                        </div>
                                        <div className="content-sidebar">
                                            <div className="list-posts">
                                                <div className="item-post wow animate__animated animate__fadeIn">
                                                    <div className="image-post">
                                                        <Link href="/single-sidebar"><img src="/assets/imgs/page/homepage1/img-post.jpg" alt="Genz" /></Link></div>
                                                    <div className="info-post border-gray-800">
                                                        <Link href="/single-sidebar">
                                                            <h6 className="color-white">Creating is a privilege but it’s also a gift</h6></Link><span className="color-gray-700">15 mins read</span>
                                                        <ul className="d-inline-block">
                                                            <li className="color-gray-700">15 April 2023</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="item-post wow animate__animated animate__fadeIn">
                                                    <div className="image-post">
                                                        <Link href="/single-sidebar"><img src="/assets/imgs/page/homepage1/img-post2.jpg" alt="Genz" /></Link></div>
                                                    <div className="info-post border-gray-800">
                                                        <Link href="/single-sidebar">
                                                            <h6 className="color-white">Being unique is better than being perfect</h6></Link><span className="color-gray-700">15 mins read</span>
                                                        <ul className="d-inline-block">
                                                            <li className="color-gray-700">15 April 2023</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="item-post wow animate__animated animate__fadeIn">
                                                    <div className="image-post">
                                                        <Link href="/single-sidebar"><img src="/assets/imgs/page/homepage1/img-post3.jpg" alt="Genz" /></Link></div>
                                                    <div className="info-post border-gray-800">
                                                        <Link href="/single-sidebar">
                                                            <h6 className="color-white">Every day, in every city and town across the country</h6></Link><span className="color-gray-700">15 mins read</span>
                                                        <ul className="d-inline-block">
                                                            <li className="color-gray-700">15 April 2023</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="item-post wow animate__animated animate__fadeIn">
                                                    <div className="image-post">
                                                        <Link href="/single-sidebar"><img src="/assets/imgs/page/homepage1/img-post4.jpg" alt="Genz" /></Link></div>
                                                    <div className="info-post border-gray-800">
                                                        <Link href="/single-sidebar">
                                                            <h6 className="color-white">Your voice, your mind, your story, your vision</h6></Link><span className="color-gray-700">15 mins read</span>
                                                        <ul className="d-inline-block">
                                                            <li className="color-gray-700">15 April 2023</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="item-post wow animate__animated animate__fadeIn">
                                                    <div className="image-post">
                                                        <Link href="/single-sidebar"><img src="/assets/imgs/page/homepage1/img-post4.jpg" alt="Genz" /></Link></div>
                                                    <div className="info-post border-gray-800">
                                                        <Link href="/single-sidebar">
                                                            <h6 className="color-white">Your voice, your mind, your story, your vision</h6></Link><span className="color-gray-700">15 mins read</span>
                                                        <ul className="d-inline-block">
                                                            <li className="color-gray-700">15 April 2023</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-sidebar bg-gray-850 border-gray-800">
                                        <div className="head-sidebar wow animate__animated animate__fadeIn">
                                            <h5 className="line-bottom">Last Comment</h5>
                                        </div>
                                        <div className="content-sidebar">
                                            <div className="list-comments">
                                                <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                                    <p className="color-gray-500 mb-20">“ Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner “</p>
                                                    <div className="box-author-small"><img src="/assets/imgs/page/homepage1/author6.png" alt="Genz" />
                                                        <div className="author-info"><span className="d-block color-gray-700 text-sm">Jane Cooper</span><span className="color-gray-700 text-xs">15 April 2023</span></div>
                                                    </div>
                                                </div>
                                                <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                                    <p className="color-gray-500 mb-20">“ Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner “</p>
                                                    <div className="box-author-small"><img src="/assets/imgs/page/homepage1/author7.png" alt="Genz" />
                                                        <div className="author-info"><span className="d-block color-gray-700 text-sm">Katen Doe</span><span className="color-gray-700 text-xs">15 April 2023</span></div>
                                                    </div>
                                                </div>
                                                <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                                    <p className="color-gray-500 mb-20">“ Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner “</p>
                                                    <div className="box-author-small"><img src="/assets/imgs/page/homepage1/author8.png" alt="Genz" />
                                                        <div className="author-info"><span className="d-block color-gray-700 text-sm">Barbara Cartland</span><span className="color-gray-700 text-xs">15 April 2023</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-sidebar bg-gray-850 border-gray-800">
                                        <div className="head-sidebar">
                                            <Link href="/"><img src="/assets/imgs/template/logo.svg" alt="Genz" /></Link>
                                            <h6 className="color-gray-700">Follow us on instagram</h6>
                                        </div>
                                        <div className="content-sidebar">
                                            <div className="row mt-30 mb-10">
                                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                    <Link href="#"><img className="bdrd-8" src="/assets/imgs/page/homepage1/gallery.png" alt="Genz" /></Link></div>
                                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                    <Link href="#"><img className="bdrd-8" src="/assets/imgs/page/homepage1/gallery2.png" alt="Genz" /></Link></div>
                                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                    <Link href="#"><img className="bdrd-8" src="/assets/imgs/page/homepage1/gallery3.png" alt="Genz" /></Link></div>
                                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                    <Link href="#"><img className="bdrd-8" src="/assets/imgs/page/homepage1/gallery4.png" alt="Genz" /></Link></div>
                                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                    <Link href="#"><img className="bdrd-8" src="/assets/imgs/page/homepage1/gallery5.png" alt="Genz" /></Link></div>
                                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                    <Link href="#"><img className="bdrd-8" src="/assets/imgs/page/homepage1/gallery6.png" alt="Genz" /></Link></div>
                                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                    <Link href="#"><img className="bdrd-8" src="/assets/imgs/page/homepage1/gallery7.png" alt="Genz" /></Link></div>
                                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                    <Link href="#"><img className="bdrd-8" src="/assets/imgs/page/homepage1/gallery8.png" alt="Genz" /></Link></div>
                                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                    <Link href="#"><img className="bdrd-8" src="/assets/imgs/page/homepage1/gallery9.png" alt="Genz" /></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-sidebar bg-gray-850 border-gray-800">
                                        <div className="head-sidebar">
                                            <h5 className="line-bottom d-inline-block wow animate__animated animate__fadeIn">Popular Tags</h5>
                                        </div>
                                        <div className="content-sidebar pb-20">
                                            <Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn" href="/blog-archive">Technology</Link>
                                            <Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn" href="/blog-archive">Travel</Link>
                                            <Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn" href="/blog-archive">Interior</Link>
                                            <Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn" href="/blog-archive">Minimal</Link>
                                            <Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn" href="/blog-archive">Plant</Link>
                                            <Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn" href="/blog-archive">Nature</Link>
                                            <Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn" href="/blog-archive">Business</Link>
                                            <Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn" href="/blog-archive">Animal</Link>
                                            <Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn" href="/blog-archive">Healthy</Link>
                                            <Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn" href="/blog-archive">Space</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        }
    </Layout>
    </>
    );
};

export default BlogDetails;

export async function getStaticProps({ params }) {
  const filename = params.slug;

  const path = require('path');
  const fs = require('fs');
  const matter = require('gray-matter');
  const dir = path.join(process.cwd(), 'blogs');
  const filepath = path.join(dir, `${filename}.md`);
  const filecontent = fs.readFileSync(filepath, 'utf8');

  // metadata and content
  const { data, content } = matter(filecontent);

  return {
    props: {
      content,
    }
  };
}

export async function getStaticPaths() {
  const path = require('path');
  const fs = require('fs');

  const dir = path.join(process.cwd(), 'blogs');
  const files = fs.readdirSync(dir);
  const paths = files.map((file) => {
    return {
      params: {
        slug: file.replace('.md', ''),
      },
    };
  });

  return {
    paths,
    fallback: false
  };
}
