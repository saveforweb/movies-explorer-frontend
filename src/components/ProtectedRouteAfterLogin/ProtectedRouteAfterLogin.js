import { Navigate } from 'react-router-dom';

export const ProtectedRouteAfterLogin = ({ loggedIn, children }) => {
    if (loggedIn) {
      return <Navigate to="/" replace />;
    }
  
    return children;
};