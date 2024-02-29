import Link from "next/link";
import { useEffect, useState } from "react"
import Prism from 'prismjs';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeMathjax from 'rehype-mathjax';
import 'prism-themes/themes/prism-gruvbox-dark.css';
// import 'prism-themes/themes/prism-darcula.css';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';


const SingleContent = ( {metadata, content} ) => {

    const renderers = {
        h1: ({ children }) => <h1 className="color-linear mb-30">{children}</h1>,
        h2: ({ children }) => <h2 className="color-linear mb-30">{children}</h2>,
        h3: ({ children }) => <h3 className="color-white mt-50 mb-30">{children}</h3>,
        h4: ({ children }) => <h4 className="color-white mt-40 mb-30">{children}</h4>,
        p: ({ children }) => <p className="text-lg color-gray-500">{children}</p>,
    };

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        Prism.highlightAll();
        setIsClient(true); 
    }, [content]);


    return (
        <>
            <div className="content-detail border-gray-800">
                <ReactMarkdown remarkPlugins={[[remarkGfm, {singleTilde:true}], [remarkMath]]} rehypePlugins={[rehypeKatex]} components={renderers} >
                    {content}
                </ReactMarkdown>
            </div>
            <div className="box-tags">
              {metadata.tags.map((tag, index) => (
                <Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 hover-up" href="#">
                  #{tag}
                </Link>
              ))}
            </div>
            <div className="box-comments border-gray-800">
                <h3 className="text-heading-2 color-gray-300">Comments</h3>
                <div className="list-comments-single">
                    <div className="item-comment">
                        <div className="comment-left">
                            <div className="box-author mb-20">
                                <img src="assets/imgs/page/single/author.png" alt="Genz" />
                                <div className="author-info">
                                    <h6 className="color-gray-700">Robert Fox</h6>
                                    <span className="color-gray-700 text-sm mr-30">August 25, 2023</span>
                                </div>
                            </div>
                        </div>
                        <div className="comment-right">
                            <div className="text-comment text-xl color-gray-500 bg-gray-850 border-gray-800">White white dreamy drama tically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade.</div>
                        </div>
                    </div>
                    <div className="item-comment">
                        <div className="comment-left">
                            <div className="box-author mb-20">
                                <img src="assets/imgs/page/single/author2.png" alt="Genz" />
                                <div className="author-info">
                                    <h6 className="color-gray-700">Jenny Wilson</h6>
                                    <span className="color-gray-700 text-sm mr-30">August 25, 2023</span>
                                </div>
                            </div>
                        </div>
                        <div className="comment-right">
                            <div className="text-comment text-xl color-gray-500 bg-gray-850 border-gray-800">White white dreamy drama tically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade.</div>
                        </div>
                    </div>
                    <div className="item-comment item-comment-sub">
                        <div className="comment-left">
                            <div className="box-author mb-20">
                                <img src="assets/imgs/page/single/author3.png" alt="Genz" />
                                <div className="author-info">
                                    <h6 className="color-gray-700">Eleanor Pena</h6>
                                    <span className="color-gray-700 text-sm mr-30">August 25, 2023</span>
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
                                <Link className="btn btn-linear" href="#">
                                    Post Comment
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
export default SingleContent;
