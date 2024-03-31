import Link from "next/link";
import {useEffect, useState, useRef} from "react"
import Prism from 'prismjs';
import 'prism-themes/themes/prism-gruvbox-dark.css';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';

import {remark} from 'remark';


const SingleContent = ({metadata, content}) => {
    const ref = useRef();
    const updateTagClassNames = (selector, className) => {
        const elementy = ref.current.getElementsByTagName(selector);
        for(const anchor of elementy) {
            anchor.className = className;
        }
    };

    useEffect(() => {
        Prism.highlightAll();
        if (ref.current) {
            updateTagClassNames('h1', 'color-linear mb-30');
            updateTagClassNames('h2', 'color-linear mb-30');
            updateTagClassNames('h3', 'color-white mt-50 mb-30');
            updateTagClassNames('h4', 'color-white mt-40 mb-30');
            updateTagClassNames('p', 'text-xl color-gray-500 mb-20');
            updateTagClassNames('ol', 'list-decimal mb-20 ml-20 text-lg');
            updateTagClassNames('ul', 'list-disc mb-20 ml-20 text-lg');
            updateTagClassNames('pre', 'text-lg bg-gray-850 border-gray-800 p-20 mb-20');
            updateTagClassNames('a', 'color-linear');
        }
    }, [content]);

    return (
        <>
            <div className="content-detail border-gray-800">
                <div ref={ref} dangerouslySetInnerHTML={{__html: content}}></div>
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

