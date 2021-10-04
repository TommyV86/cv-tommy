export const Header = () => {
    return(
        <div>
            <header>
                <div className="d-flex justify-content-center">
                    <h1 className="">CV</h1>
                </div>
                
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="container-fluid">
                        <li className="nav-item">
                            <a className="nav-link" href="/infoPersonnelles">INFORMATIONS PERSONNELLES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/expProfessionnelles">EXPERIENCES PROFESSIONNELLES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/formations">FORMATIONS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/competences">COMPETENCES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/infoComplementaires">INFORMATIONS COMPLEMENTAIRES</a>
                        </li>
                    </div>             
                </nav>
            </header><br/><br/><br/>
        </div>
    )
}