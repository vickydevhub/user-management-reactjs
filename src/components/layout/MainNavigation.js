import {Link} from 'react-router-dom';
function MainNavigation(){
        return (
          
                <nav className="navbar  navbar-dark bg-dark">
                    <div className="container-fluid">  
                    <ul className="navbar-nav " >
                        <li className="nav-item">
                             <Link to='/' className='nav-link'> Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/register' className='nav-link'>Register</Link>
                        </li>
                    
                        <li className="nav-item">
                        <Link to='/login' className='nav-link'>Login</Link>
                        </li>
                    </ul>
                </div>
                 
                </nav>

            
        );
}

export default MainNavigation;