import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import HomeBanner from "../HomeBanner/HomeBanner";


const Home = () => {
    return (
        <div className="ml-20 mr-20 mt-5">
            <HomeBanner></HomeBanner>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;