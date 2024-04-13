import Link from "next/link";
import './ComponentsStyle/productAd.css'

export default function ProductAd() {
    return <div className="content-card position-relative bg-light-orange border border-radius shadow">
    <div className="ad">
        <span className='align-self-center spanAd'>AD</span>
     </div>
    <Link href="#" className="row px-5 text-decoration-none">
        <div className="col-9 px-3 py-1">
            <div><img src="../../assets/images/partneri/neptunLogo.png" alt="" className='img-fluid logoImg' />
            </div> 
            <p className="d-none d-md-block text-info mt-2">NutriBullet Pro 900</p>
            <span className='linkmarket d-block d-md-none'>https://wwww.neptun.mk/BLENDERI/NUTRIBULLET-PRO-900W</span>
        </div>
        <div className="col-3 px-3 py-2 d-flex">
            <span className="span-price align-self-center">0000.00 ден. <img src="../../assets/images/icons/Vector.png" alt="" /></span>
        </div>
    </Link>
</div>
}