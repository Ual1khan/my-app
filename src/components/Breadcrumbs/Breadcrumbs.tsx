import React, { useState, useEffect } from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { useLocation } from 'react-router';

export default function CollapsedBreadcrumbs() {
    const {pathname} = useLocation();
    const [breadcrumbs, setBreadcrumbs] = useState<string[]>(['']);
    useEffect(() => {
        const breadArr = pathname.split('/');
        setBreadcrumbs(breadArr);
    },[pathname]) ;
    
    return (
        <Breadcrumbs aria-label="breadcrumb">
            {breadcrumbs.map((bread, index) => (
                breadcrumbs.length - 1 === index ? 
                (bread && 
                <Link key={index} color="textPrimary" href="#">
                    {bread.toUpperCase()}
                </Link>)  : 
                (bread && 
                <Link key={index} color="inherit" href="#">
                    {bread.toUpperCase()}
                </Link>)
                ))}
        </Breadcrumbs>
    );
}
