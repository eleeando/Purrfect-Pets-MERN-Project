// import { useEffect } from 'react';
// import '../css/style.css';
// import Myfunction from '../js/Myfunction';
import {Link } from "react-router-dom"
const SideBar = () => {
    // useEffect(() => {
    //     Myfunction(); // Call the function from Myfunction.js
    // }, []);

    return (

        <div>
            <div class="container-fluid">
                <div class="row flex-nowrap">
                    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0  w-100 p-3 "style={{ background: '#be9337' }}>
                        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span class="fs-5 d-none d-sm-inline text-light">Dashboard</span>
                            </a>
                            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li class="nav-item">
                                    <a href="#" class="nav-link align-middle px-0">
                                        <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline "><Link className="text-light" to={'/admin'} >Products</Link></span>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" class="nav-link px-0 align-middle">
                                        <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline text-light"><Link className="text-light" to={'/users'} >Users</Link></span></a>
                                </li>



                            </ul>
                            <hr />
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SideBar;
