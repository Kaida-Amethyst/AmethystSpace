import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-1 bg-gray-850 border-gray-800">
                        <div className="row">
                            <div className="col-lg-4 mb-30"><Link className="wow animate__animated animate__fadeInUp" href="/"><img src="/assets/imgs/template/logo.svg" alt="Genz" /></Link>
                                <p className="mb-20 mt-20 text-sm color-gray-500 wow animate__animated animate__fadeInUp">
                                   声明：<br/>
                                   请勿转载本博客中的文章，如果您确实想要转载，请Email联系博主。博主声明此博客中的一切权力。
                                </p>
                                <h6 className="color-white mb-5 wow animate__animated animate__fadeInUp">联系方式</h6>
                                <p className="text-sm color-gray-500 wow animate__animated animate__fadeInUp">
                                    Eamil: ziyue.liu.vm@gmail.com<br />
                                    </p>
                            </div>
                            <div className="col-lg-4 mb-30">
                                <h6 className="text-lg mb-30 color-white wow animate__animated animate__fadeInUp">快速导航</h6>
                                <div className="row">
                                    <div className="col-6">
                                        <ul className="menu-footer">
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">所有文章</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">个人成长</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">生活纪事</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">读书心得</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">AI绘画</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">照片墙</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul className="menu-footer">
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">编程语言</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">框架工具</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">技术原理</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">开源应用</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">关于我</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-30">
                                <h4 className="text-lg mb-30 color-white wow animate__animated animate__fadeInUp">想要联系博主？</h4>
                                <p className="text-base color-gray-500 wow animate__animated animate__fadeInUp">
                                    可以在下方留下您的称呼和Email。
                                </p>
                                <div className="form-newsletters mt-15 wow animate__animated animate__fadeInUp">
                                    <form action="/">
                                        <div className="form-group">
                                            <input className="input-name border-gray-500" type="text" placeholder="Your name" />
                                        </div>
                                        <div className="form-group">
                                            <input className="input-email border-gray-500" type="email" placeholder="Emaill address" />
                                        </div>
                                        <div className="form-group mt-20">
                                            <button className="btn btn-linear hover-up">
                                                联系我
                                                <i className="fi-rr-arrow-small-right" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom border-gray-800">
                            <div className="row">
                                <div className="col-lg-5 text-center text-lg-start">
                                    <p className="text-base color-white wow animate__animated animate__fadeIn">© 2023 Created by<Link className="copyright" href="http://alithemes.com" target="_blank"> AliThemes.com</Link></p>
                                </div>
                                <div className="col-lg-7 text-center text-lg-end">
                                    <div className="box-socials">
                                        <div className="d-inline-block mr-30 wow animate__animated animate__fadeIn" data-wow-delay=".0s"><Link className="icon-socials icon-twitter color-gray-500" href="https://twitter.com">Twitter</Link></div>
                                        <div className="d-inline-block mr-30 wow animate__animated animate__fadeIn" data-wow-delay=".2s"><Link className="icon-socials icon-linked color-gray-500" href="https://www.linkedin.com">LinkedIn</Link></div>
                                        <div className="d-inline-block wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                            <Link className="icon-socials icon-insta color-gray-500" href="https://www.instagram.com">Instagram</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default Footer;
