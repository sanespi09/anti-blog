import { h, FunctionalComponent, Fragment } from 'preact';
import ReactMarkdown from 'react-markdown';
import Metadata from '../../components/Post/Metadata';
import rehypeRaw from 'rehype-raw';

interface PostProps {
    post?: { metadata: any; content: string };
}

const markdownComponents = {
    h1: ({ children }) => <h1 className="text-xl">{children}</h1>,
};

const Post: FunctionalComponent<PostProps> = ({ post }) => {
    return (
        <section className="text-white w-full max-w-2xl mx-auto mt-10">
            <a href="/" className="text-white text-md font-bold hover:scale-125 transition">
                {'< Back'}
            </a>
            <Metadata metadata={post.metadata} className="my-6" />
            <article className='prose prose-h1:text-white w-full prose-h1:text-4xl prose-h3:text-gray-300 prose-h3:text-3xl prose-ul:text-base prose-p:my-6 prose-p:text-base prose-img:mt-10 text-white mx-auto'>
                {post.content ? (
                    <ReactMarkdown rehypePlugins={[rehypeRaw]} components={markdownComponents}>{post.content}</ReactMarkdown>
                ) : (
                    <h1>capo, no funciona</h1>
                )}
            </article>
        </section>
    );
};

export default Post;
