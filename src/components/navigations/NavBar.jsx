import React from 'react';


export const NavBar = ({items,isLogged,setIsLogged}) => {

    const onClickLogin = () => {
        setIsLogged(!isLogged);
        
    }
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {items.map(item => (
                            item.active && (
                            <li className="nav-item" key={item.id}>
                                <a className="nav-link active text-white" aria-current="page" href={item.link}>
                                    {item.name}
                                </a>
                            </li>)
                        ))}
                    </ul>
                    <form className="d-flex" role="search">
                        <div className="text-end">
                            <button
                                type="button"
                                className="btn btn-outline-light me-2"
                                onClick={onClickLogin}
                            >
                               {isLogged ? 'Cerrar Sesion' : 'Login' } 
                            </button>
                            <button type="button" className="btn btn-info">Sign-up</button>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    );


};
