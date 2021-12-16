import React from 'react';
import Header from './headermenu';

export default props =>{
    return(
        <div>
            <Header />
            {props.children}
        </div>
    );
};