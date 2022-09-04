import { h } from 'preact';
import { hydrate } from 'preact';
import { App } from './App';

declare global {
    interface Window { __serverData: any }
}

const serverData = JSON.parse(window.__serverData);

if (document) {
    hydrate(<App data={serverData} /> , document.getElementById('root'));
}
