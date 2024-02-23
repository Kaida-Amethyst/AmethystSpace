
import Link from "next/link"
import { useRouter } from "next/router"

const Pagination = () => {
    
    const router = useRouter()
    const page = parseInt(router.query.page) || 1;
    const prevPage = page > 1 ? page - 1 : 1;
    const nextPage = page + 1;

    return (
        <>
            <nav className="mb-50">
                <ul className="pagination">
                    <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".0s"><Link className="page-link page-prev" href={`?page=${prevPage}`}><i className="fi-rr-arrow-small-left" /></Link></li>
                    <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".1s"><Link className="page-link" href="?page=1">1</Link></li>
                    <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".2s"><Link className="page-link active" href="?page=2">2</Link></li>
                    <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".3s"><Link className="page-link" href="?page=3">3</Link></li>
                    <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                        <Link className="page-link page-next" href={`?page=${nextPage}`}>
                        <i className="fi-rr-arrow-small-right" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

// <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".4s"><Link className="page-link" href="#">...</Link></li>

export default Pagination;
