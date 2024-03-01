import Link from "next/link"
import Typewriter from 'typewriter-effect'

const Hero = () => {
    return (
        <>
        <div className="banner banner-home3 bg-gray-850">
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-xl-1" />
                    <div className="col-xl-10 col-lg-12">
                        <div className="row">
                            <div className="col-lg-6 pt-100"><span className="text-sm-bold color-gray-600 wow animate__animated animate__fadeInUp">你好，来访者</span>
                                <h1 className="color-gray-50 mt-20 mb-20 wow animate__animated animate__fadeInUp">I’m
                                    <Typewriter
                                        options={{
                                            wrapperClassName: "typewrite color-linear",
                                            strings: ['紫月星辰', '程序员', '加密货币交易员'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </h1>
                                <div className="row">
                                    <div className="col-lg-9">
                                        <p className="text-base color-gray-600 wow animate__animated animate__fadeInUp">
                                            欢迎来到我的数字花园。我在这里分享技术，人生与见闻。如果你对计算机技术感兴趣，你可以在我的博客里看到有关编程语言的小技巧，或者有趣的应用生态。如果你对币圈感兴趣，
                                            也可以在这里看到我对于交易和币圈的看法。有时，我也会写一写感悟，或者分享一些心得。欢迎留下你的评论。
                                        </p>
                                    </div>
                                </div>
                                <div className="box-subscriber mt-40 mb-50 wow animate__animated animate__fadeInUp">
                                    <div className="inner-subscriber bg-gray-800">
                                        <form className="d-flex" action="#">
                                            <input className="input-sybscriber" type="text" placeholder="Type your email address" />
                                            <button className="btn btn-linear btn-arrow-right">Subscribe<i className="fi-rr-arrow-small-right" /></button>
                                        </form>
                                    </div>
                                </div>
                                <div className="box-socials"><Link className="bg-gray-800 hover-up" href="#"><span className="fb" /></Link><Link className="bg-gray-800 hover-up" href="#"><span className="inst" /></Link><Link className="bg-gray-800 hover-up" href="#"><span className="snap" /></Link><Link className="bg-gray-800 hover-up" href="#"><span className="tw" /></Link></div>
                            </div>
                            <div className="col-lg-6 text-center">
                                <div className="banner-img no-bg">
                                    <div className="banner-1 shape-1"><img src="assets/imgs/author/author-ai-3.jpg" alt="Genz" /></div>
                                    <div className="banner-2 shape-2"><img src="assets/imgs/AI/cute-cat-2.png" alt="Genz" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
};

export default Hero;
