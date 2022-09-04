import { h, FunctionalComponent, Fragment } from 'preact';

interface HomeProps {}

const Home: FunctionalComponent<HomeProps> = () => {
    return (
        <>
            <section className="h-screen w-full mx-auto mt-20 flex justify-center">
                <h1 className="text-white text-2xl title-animate">
                    Welcome to my den, <br /> a place to share my insights in Music and programming
                </h1>
            </section>
        </>
    );
};

export default Home;
