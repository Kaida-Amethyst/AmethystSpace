import Pagination from "@/components/elements/Pagination"
import { useRouter } from "next/router"
import Link from "next/link"

const Cards = ({ notes }) => {
  const router = useRouter()
  const page = parseInt(router.query.page) || 1;
  const StartIndex = (page - 1) * 6;
  const EndIndex = page * 6;

  return (
    <>
    <div className="mt-50 mb-50">
        <div className="row mt-50 mb-10">
            {notes.slice(StartIndex, EndIndex).map((item, i) => (
                <div className="col-lg-6"  key={i}>
                    <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                        <div className="card-image mb-20">
                            <Link className="post-type" href="#" />
                            <Link href={item.link}>
                                <img src={`${item.img}`} alt="Genz" />
                            </Link>
                        </div>
                        <div className="card-info">
                            <div className="row">
                                <div className="col-7">
                                  {item.tags.map((tag, i) => (
                                      <Link key={i} className="color-gray-700 text-sm" href="#">#{tag} </Link>
                                  ))}
                                </div>
                                <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                            </div><Link href={item.link}>
                                <h4 className="color-white mt-20">{item.title}</h4></Link>
                            <p className="color-gray-500 mt-15">{item.excerpt}</p>
                            <div className="row align-items-center mt-25">
                                <div className="col-7">
                                    <div className="box-author"><img src="assets/imgs/author/author-small-1.png" alt="Genz" />
                                        <div className="author-info">
                                            <h6 className="color-gray-700">Kaida Amethyst</h6><span className="color-gray-700 text-sm">{item.date}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="#"><span>Read more</span></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <Pagination />
    </div>
    </>
  );
};

export default Cards;
