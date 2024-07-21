import LoadingAnimation from '../../public/loading.json'
import Lottie from "lottie-react";

function Loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white">
            <Lottie animationData={LoadingAnimation} loop={true}/>
            <span className={'text-2xl font-medium mt-2'}>Creating your travel plan...</span>
        </div>
    );
}

export default Loading;