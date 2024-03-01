import Link from "next/link"
import Head from 'next/head'
import Layout from "@/components/layout/Layout"

export default function PageContact() {
    return (
        <>
            <Head>
                <title>
                    Genz - Contact
                </title>
            </Head>
            <Layout>
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-10 col-lg-12 m-auto">
                                <div className="text-center mt-70">
                                    <h1 className="color-linear d-inline-block mb-30">Contact Us</h1>
                                    <p className="text-xl color-gray-500">We are AliThemes , a creative and dedicated group of individuals who love web development<br className="d-none d-lg-block" />almost as much as we love our customers. We are passionate team with the mission for<br className="d-none d-lg-block" />achieving the perfection in web design. All designs are made by love with pixel perfect design<br className="d-none d-lg-block" />and excellent coding quality. Speed, security and SEO friendly alway in our mind.</p>
                                </div>
                                <div className="text-center mt-30">
                                    <div className="d-inline-block support text-start">(48) 654-430-309<br />(01) 6532-430-309</div>
                                    <div className="d-inline-block location text-start">contact@genz.com<br />sales@genz.com</div>
                                    <div className="d-inline-block plane text-start">11567 E Broadview Dr<br />Colorado(CO), 80117</div>
                                </div>
                                <div className="form-contact">
                                    <div className="text-center">
                                        <h3 className="color-linear d-inline-block mb-10">Drop Us a Line</h3>
                                        <p className="text-xs color-gray-500">Your email address will not be published. Required fields are marked *</p>
                                    </div>
                                    <div className="row mt-50">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control bg-gray-850 border-gray-800 color-gray-500" type="text" placeholder="Your name *" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control bg-gray-850 border-gray-800 color-gray-500" type="text" placeholder="Email *" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control bg-gray-850 border-gray-800 color-gray-500" type="text" placeholder="Phone number *" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control bg-gray-850 border-gray-800 color-gray-500" type="text" placeholder="Subject *" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea className="form-control bg-gray-850 border-gray-800 color-gray-500" rows={5} placeholder="Message *" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="text-center mb-50"><Link href="#" className="btn btn-linear btn-load-more btn-radius-8 hover-up">
                                                Send Message
                                                <i className="fi-rr-arrow-small-right" /></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
