import Link from "next/link"

function Breadcrumb({title}) {
    return (
        <ul className="breadcrumb">
            <li><Link className="home" href="/">首页</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><span>{title}</span></li>
        </ul>
    );
}
export default Breadcrumb;
