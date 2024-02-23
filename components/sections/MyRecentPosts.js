// import data from "@/utils/blogData3"
import data from "@/utils/MyAllBlogsData"
import Pagination from "@/components/elements/Pagination"
import Link from "next/link"

const MyRecentPosts = () => {
  return (
    <>
    <h2 className="color-linear d-inline-block mb-10">近期文章</h2>
    <p className="text-lg color-gray-500">以下是近期的文章</p>
    <div className="mt-40 mb-50">
      <div className="row mt-50 mb-10" data-masonry="{&quot;percentPosition&quot;: true }">
        {data.slice(-6).reverse().map((item, i) => (
          <div className="col-lg-4"  key={i}>
            <div className="card-blog-1 border-gray-800 bg-gray-850 hover-up">
              <div className="card-image mb-20">
                <Link className="post-type" href="#" />
                <Link href={`/blog/${item.id}`}>
                    <img src={`/assets/imgs/page/healthy/${item.img}`} alt="Genz" />
                </Link>
              </div>
              <div className="card-info">
                <div className="row">
                  <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"># Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive"># Lifestyle</Link></div>
                  <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                </div><Link href={`/blog/${item.id}`}>
                  <h5 className="color-white mt-10">{item.title}</h5></Link>
                <div className="row align-items-center mt-20">
                  <div className="col-7">
                    <div className="box-author"><img src="assets/imgs/page/homepage1/author.jpg" alt="Genz" />
                      <div className="author-info">
                          <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2023</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
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
}

export default MyRecentPosts;
