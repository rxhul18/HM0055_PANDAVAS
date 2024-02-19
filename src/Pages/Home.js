import Intro from "../Components/Intro";
import Navbar from "../Components/Navbar";
import StreamSelection from "../Components/StreamSelection";
import Whymd from "../Components/Whymd";
import './SCSS/home.scss';

function Home() {
    return (
        <div className="main-wrapper">
            <Navbar />
            <Intro />
            <StreamSelection />
            <Whymd />
        </div>
    );
}

export default Home;