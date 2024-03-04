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
        p: ({ children }) => <p className="text-lg color-gray-500 mb-20">{children}</p>,
        ol: ({ children }) => <ol className="list-disc mb-20 ml-20 text-lg">{children}</ol>,
        ul: ({ children }) => <ul className="list-decimal mb-20 ml-20 text-lg">{children}</ul>,
    };

    useEffect(() => {
        Prism.highlightAll();
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
        </>
    );
};
export default SingleContent;
