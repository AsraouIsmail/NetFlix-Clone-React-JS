import React from 'react'
import './Banner.css';

function Banner() {
    return (
        <header className="banner" style={{backgroundSize: "cover",
        backgroundImage: `url("https://occ-0-2773-778.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABRrQ1odJFEVRrQQRJSobabF6x6YFEmnfVvI1zrD-By4RsRy28kxOLWBWR1PXzqAqInHDG_sRBFi10s704D-vxWcqBCcGKJ4UkRcRTOYoASJWu6yglmsQ_hvgiJChPXXlQcSEqfiaFO33x4VQBVWaf-B0TSRnubjExDLabxgPmCPOdCfUCVRVYZT7aCrM5KKq7tv1XDYhn1ubDUjUWCjpl9LzGIGaTYtYB_UTVWGsRjSW91UM0wtW4v1bCFEGVU6nn3E.jpg")`,
        backgroundPosition: "center center"}}>
            <div className="banner__contents">
                <h1 className="header__title">Title</h1>
                <div className="header__buttons">
                    <button className="header__button">Play</button>
                    <button className="header__button">My List</button>

                </div>

                <h1 className="banner__description">Description</h1>
            </div>
            <div className="banner__fadebBottom">

            </div>

            
        </header>
    )
}

export default Banner;
