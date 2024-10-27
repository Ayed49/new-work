import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import HomeBanner from "../HomeBanner/HomeBanner";


const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div>
            <HomeBanner></HomeBanner>
            <CategoryList></CategoryList>
            </div>
            
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;