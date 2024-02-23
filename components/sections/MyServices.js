const MyServices = () => {
    return (
        <>
            <div className="text-center mt-70 mb-50">
                <h2 className="color-linear d-inline-block mb-20 wow animate__animated animate__fadeInUp">博客分享</h2>
                <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">
                    我在我的博客里分享一些有趣的内容，你可以看到：
                </p>
            </div>
            <div className="box-features bg-gray-850 border-gray-800">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-50 wow animate__animated animate__fadeIn" data-wow-delay="0s">
                        <span className="item-icon bg-gray-950 icon-motion" />
                        <h5 className="color-white mb-15">
                            个人成长与感悟
                        </h5>
                        <p className="text-base color-gray-700">
                            我们应该坚持的原则，行事的准则，过往生活的经验教训。
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-50 wow animate__animated animate__fadeIn" data-wow-delay="0.1s">
                        <span className="item-icon bg-gray-950 icon-ui" />
                        <h5 className="color-white mb-15">
                            技术原理
                        </h5>
                        <p className="text-base color-gray-700">
                            我们的编译器，操作系统，AI等等，到底是怎样工作的？
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-50 wow animate__animated animate__fadeIn" data-wow-delay="0.2s">
                        <span className="item-icon bg-gray-950 icon-branding" />
                        <h5 className="color-white mb-15">
                            AI作品
                        </h5>
                        <p className="text-base color-gray-700">
                            通过AI绘画，生成视频和音乐。
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-50 wow animate__animated animate__fadeIn" data-wow-delay="0s">
                        <span className="item-icon bg-gray-950 icon-product" />
                        <h5 className="color-white mb-15">
                            有趣的知识
                        </h5>
                        <p className="text-base color-gray-700">
                            有趣的英语，计算机，数学等等知识。
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-50 wow animate__animated animate__fadeIn" data-wow-delay="0.1s">
                        <span className="item-icon bg-gray-950 icon-key" />
                        <h5 className="color-white mb-15">
                            最佳实践
                        </h5>
                        <p className="text-base color-gray-700">
                            编程语言，工具，框架的巧妙用法。
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-50 wow animate__animated animate__fadeIn" data-wow-delay="0.2s">
                        <span className="item-icon bg-gray-950 icon-social" />
                        <h5 className="color-white mb-15">
                            其它
                        </h5>
                        <p className="text-base color-gray-700">
                            有趣的东西，太多太多。
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default MyServices;
