import HeaderNavigation from '../Common/HeaderNavigation/HeaderNavigation.jsx';
import Banner from '../Common/Banner/Banner.jsx'
import GetStarted from '../Common/GetStarted/GetStarted.jsx'
import AphixVideo from '../Common/AphixVideo/AphixVideo.jsx'
import OurSolutions from '../Common/OurSolutions/OurSolutions.jsx'
import ColourfullBanner from '../Common/ColourfullBanner/ColourfullBanner.jsx'
import Integrations from '../Common/Integrations/Integrations.jsx'
import Services from '../Common/Services/Services.jsx'
import Statistics from '../Common/Statistics/Statistics.jsx'
import BlogPosts from '../Common/BlogPosts/BlogPosts.jsx'
import Clients from '../Common/Clients/Clients.jsx'
import DemoRequest from '../Common/DemoRequest/DemoRequest.jsx'
import Footer from '../Common/Footer/Footer.jsx'



import classes from './Homepage.module.css'

function Homepage() {
  return (
    <>
    <HeaderNavigation />
    <Banner />
    <GetStarted/>
    <AphixVideo />
    <OurSolutions />
    <ColourfullBanner />
    <Integrations/>
    <Services/>
    <Statistics/>
    <BlogPosts/>
    <Clients/>
    <DemoRequest/>
    <Footer/>
    </>
  );
};

export default Homepage;
