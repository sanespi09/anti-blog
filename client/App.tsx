/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { FunctionComponent, h, Fragment } from 'preact';
import { Route } from 'wouter-preact';
import Layout from './components/Layout';
import Home from './pages/Home';
import Post from './pages/Post';

export const App: FunctionComponent<{ data?: { post?: string; posts?: any[] } }> = ({ data }) => {
    return (
        <Layout>
            <>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/post/:id">
                    <Post post={data} />
                </Route>
            </>
        </Layout>
    );
};
