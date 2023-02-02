import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ loggedIn, children }) => {
    console.log(loggedIn)
    if (!loggedIn) {
      return <Navigate to="/signin" replace />;
    }
  
    return children;
};