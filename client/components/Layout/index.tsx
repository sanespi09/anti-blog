import { h, FunctionalComponent, Fragment } from 'preact';
import Header from './Header';

interface LayoutProps {
    children: preact.VNode;
}

const Layout: FunctionalComponent<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="max-w-7xl mx-auto">{children}</main>
        </>
    );
};

export default Layout;
