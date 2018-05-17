import './home.scss';

import React from 'react';

const home = () => (
    <div className="home candor-page">
        <div className="candor-content">
            <div className="candor-title">CandorTransportationCo.LLC</div>
            <div className="candor-paragraph">Candor Transportation is a women owned, full service freight logistics company. When it comes to freight movement and service, we are number one in the industry. Honesty and integrity has been the key to our success.</div>
            <img src="/static/images/banner_mactran.jpg" />
            <div className="candor-paragraph">Every customer is our number one customer. Our goal is to keep your best interests in mind. By keeping the lines of communication open, we can customize our services to fit your needs. One call, we handle it all.</div>
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.8320341775147!2d-81.52153914876061!3d41.421164679159375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88311d0da9837929%3A0x3ff4a7704b353992!2sCandor+Logistics!5e0!3m2!1sen!2sus!4v1526586417164" frameBorder="0" />
        </div>
        <div className="iso-footer">An ISO 9001:2015 Registered Company</div>
    </div>
);

export default home;
