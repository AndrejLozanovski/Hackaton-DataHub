import Link from "next/link";
import './about.css';
import Breadcrumbs from "@/components/Breadcrumbs";
interface About {
    decs_1: string;
    desc_2: string;
    email: string;
    facebook: string;
    twitter: string;
    instagram: string;
    title: string;
    title_2: string;
    sub_1: string;
    sub_2: string;
    sub_3: string;
    para_1: string;
    para_2: string;
}

async function fetchAboutData(): Promise<About> {
    const response = await fetch(`http://localhost:5002/about_page`)
     return response.json()
}

export default async function AboutPage() {
     const data = await fetchAboutData()
    return <div className="container-fluid">
        <div className="row py-3">
            <div className="col-12 col-md-6">
                <div className="imgContent px-3 py-3">
                    <img src="./assets/images/aboutus/aboutus1.png" alt="image" className="img-fluid" />
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="content px-3 py-3">
                    <h1>{ data.title}</h1>
                    <p className="pt-3 mb-0">{data.decs_1}{data.desc_2}</p>
                    <p>{data.decs_1}{data.desc_2}</p>
                </div>
            </div>
        </div>
        <div className="row bg-lightgray about-border shadow">
            <div className="col-12 col-md-6 align-self-center">
                <div className="content px-3 py-3">
                <p className="pt-3">{data.decs_1}{data.desc_2}</p>
                </div>
            </div>
            <div className="col-12 text-center col-md-6">
                <div className="imgContent px-3 py-3">
                    <img src="./assets/images/aboutus/aboutus2.png" alt="image" className="img-fluid" />
                </div>
            </div>
        </div>
        <div className="row pt-3">
            <div className="col-12 py-3">
                <h3 className="py-2">{data.title_2}</h3>
                <p className="h6 py-2">{data.sub_1}</p>
                <p className="mb-0">{data.para_1}</p>
                <p>{data.para_2}</p>
            </div>
            <div className="col-12">
            <ul className="list-group">
                <li className="list-group-item border-0 ">
                        <span className="badge bg-light badge-pill d-inline-block"></span>
               Email: <Link href={'#'} className="text-decoration-none text-dark"> {data.email} </Link>          
                    </li>
                    <li className="list-group-item border-0">
                        <span className="badge bg-light badge-pill d-inline-block"></span>
               Facebook: <Link href={'#'} className="text-decoration-none text-dark"> {data.facebook} </Link>         
                    </li>
                    <li className="list-group-item border-0">
                        <span className="badge bg-light badge-pill d-inline-block"></span>
               Twitter: <Link href={'#'} className="text-decoration-none text-dark"> {data.twitter} </Link>          
                    </li>
                    <li className="list-group-item border-0">
                        <span className="badge bg-light badge-pill d-inline-block"></span>
               Instagram: <Link href={'#'} className="text-decoration-none text-dark"> {data.instagram} </Link>        
                    </li>
             </ul>
            </div>
            <div className="col-12 pt-5 pb-3">
                <p className="h6">{data.sub_2}</p>
                <p className="mb-0">{data.para_1}</p>
                <p>{data.para_1}</p>
            </div>
            <div className="col-12 py-3">
                <p className="h6">{data.sub_3}</p>
                <p className="mb-0">{data.para_1}</p>
                <p>{data.para_1}</p>
            </div>
        </div>
    </div>
}