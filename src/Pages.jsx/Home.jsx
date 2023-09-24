import Banner from "./Homepages/Banner";
import Featuredjobs from "./Homepages/Featuredjobs";
import JobCategory from "./Homepages/JobCategory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <Featuredjobs></Featuredjobs>
            
        </div>
    );
};

export default Home;