import Link from "next/link"
import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import allPortfolio from "@/utils/PortfolioData";


const PortfolioFilter = ({col, show}) => {

    const router = useRouter()
    const page = parseInt(router.query.page) || 1;
    const StartIndex = (page - 1) * 4;
    const EndIndex = page * 4;

    const portfolio = allPortfolio.slice(StartIndex, EndIndex);

    return (
        <>
            <div className="mt-70 mb-50">
                <div className="row">
                    {portfolio.slice(0,show).map(item =>
                        <div className={`col-lg-${col}`} key={item.name}>
                            <div className="project" data-category="web motion">
                                <div className="item-content">
                                    <div className="card-style-1 hover-up mb-30" data-wow-delay=".0s">
                                        <div className="card-image">
                                            <Link className="link-post" href="#"><img src={`${item.img}`} alt="Genz" />
                                                <div className="card-info card-bg-2">
                                                    <div className="info-bottom mb-15">
                                                        <h3 className="color-white mb-10">{item.name}</h3>
                                                        <p className="color-gray-500 text-sm">
                                                            {item.des}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default PortfolioFilter;