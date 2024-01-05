import React from 'react'
import { routesForPublic } from './PublicRouter'
import { routesForAuthenticatedOnly } from './PrivateRouter';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const MasterRouter = () => {
    const router = createBrowserRouter([
        ...routesForPublic,
        ...routesForAuthenticatedOnly,
      ]);
    
    return <RouterProvider router={router} />;  
}

export default MasterRouter