import { h, FunctionalComponent, Fragment } from 'preact';
import { useEffect, useMemo, useRef, useState } from 'preact/hooks';

interface HeaderProps {}

const Header: FunctionalComponent<HeaderProps> = () => {
    const [showAbout, setShowAbout] = useState(false);
    const aboutRef = useRef<HTMLDivElement>(null);

    const offset = useMemo(() => {
        if (!aboutRef.current) {
            return;
        }
        const middlePx = window.innerWidth / 2;
        const { x } = aboutRef.current.getBoundingClientRect();
        const xOffset = x - middlePx + aboutRef.current.clientWidth / 2;
        return xOffset;
    }, [aboutRef.current]);

    return (
        <header className="h-16 bg-gradient-to-t from-gray-900 via-gray-800 to-gray-700 text-white justify-center flex">
            <div className="max-w-7xl items-center justify-between w-full flex">
                <div className="flex items-center gap-4">
                    <h2>Anti's den</h2>
                    <a href="/">
                        <figure className="text-xl hover:scale-105 transition cursor-pointer text-white w-12 h-12 ml-2 rounded-full overflow-hidden">
                            <img
                                className="object-cover w-full h-full"
                                src="https://eiginamm.sirv.com/antiden/antiden-sm.jpg"
                            />
                        </figure>
                    </a>
                </div>
                <nav className="relative">
                    <div
                        ref={aboutRef}
                        style={
                            showAbout
                                ? {
                                    opacity: 1,
                                    transform: `scale(1) translate(${-offset}px, 300px)`,
                                    visibility: 'visible',
                                }
                                : { transform: 'scale(0.01) translate(0, 0)', opacity: 0, visibility: 'hidden' }
                        }
                        className="rounded-xl w-96 h-96 absolute bg-gray-500 pop-to-center left-6 top-0 transition-all duration-700"
                    ></div>
                    <ul className="text-sm">
                        <li>
                            <a onClick={() => setShowAbout(true)} className=" cursor-pointer hover:text-gray-200">
                                About me
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
