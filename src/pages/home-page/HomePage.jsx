import TopCategories from "./top-categories/TopCategories.jsx";
import HomeTitle from "./HomeTitle.jsx";
import Button from "../../components/UI/Button.jsx";
import "./HomePage.css"

const HomePage = () => {
    return (
        <div>
            <div className={"home "}>
                <h1>Build Skills with
                    Online Course</h1>
                <p>We denounce with righteous indignation and dislike men who are so beguiled and demoralized that cannot trouble.</p>
                <Button btnname={'Posts comment'} bgColor={'#FF782D'} border={'border'}/>
            </div>
            <HomeTitle
                title={'Top Categories'}
                subtitle={'Explore our Popular Categories'}
                btnName={'All categories'}/>
            <TopCategories/>
            <HomeTitle
                title={'Featured courses'}
                subtitle={'Explore our Popular Categories'}
                btnName={'All courses'}/>
        </div>
    );
};

export default HomePage;
