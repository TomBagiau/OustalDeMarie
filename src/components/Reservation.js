import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

export default function Reservation() {

    useEffect(() => { }, []);
      
    return (
        <div>
            <Helmet>
                <script type="text/javascript" src="https://v2.clevacances.com/assets/widget/sdk.js"></script>
            </Helmet>
            <div className="appMountPoint-asideBooking" data-hotel_id="36935" data-room_id="65304" data-source="customer"></div>
        </div>
    )
}
