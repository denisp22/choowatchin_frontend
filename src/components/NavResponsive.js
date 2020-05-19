import React from 'react';
import MediaQuery from 'react-responsive';
import NavDefault from './NavDefault';
import NavMobile from './NavMobile';

function NavResponsive() {
    return (
        <React.Fragment>
            <MediaQuery minDeviceWidth={1224}>
                <NavDefault/>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1224}>
                <NavMobile />
            </MediaQuery>
        </React.Fragment>


    )
}

export default NavResponsive;