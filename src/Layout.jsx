import { Navigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
// import { useSelector } from 'react-redux';

const Layout = ({ children }) => {

    const location = useLocation();
    const showSidebar = location.pathname !== '/' && location.pathname !== '/signup';

    return (
        <div className="flex">
            {showSidebar && <Sidebar />}
            <div className={`flex-grow ${showSidebar ? '' : ''}`}>
                {children}
            </div>
        </div>
    );
};

const PrivateRoute = ({ children }) => {
    // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    return isAuthenticated ? children : <Navigate to="/" />;
};

export { Layout, PrivateRoute }