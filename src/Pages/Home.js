import Intro from "../Components/Intro";
import StreamSelection from "../Components/StreamSelection";
import Whymd from "../Components/Whymd";
import './SCSS/home.scss';

function Home() {
    return (
        <div className="main-wrapper">
            <Intro />
            <StreamSelection />
            <Whymd />
        </div>
    );
}

export default Home;