import { h, FunctionalComponent, Fragment } from 'preact';

interface MetadataProps {
    metadata: { author: string; date: string };
    className: string;
}

const Metadata: FunctionalComponent<MetadataProps> = ({ metadata, className }) => {
    return (
        <div className={`border-b border-gray-600 pb-3 text-gray-300 flex justify-between ${className}`}>
            <h6 className='text-md'><span className='font-bold'>Author: </span>{metadata.author}</h6>
            <h6 className='text-md'><span className='font-bold'>Date: </span>{metadata.date}</h6>
        </div>
    );
};

export default Metadata;
