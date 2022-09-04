import render from 'preact-render-to-string';
import { Router as PreactRouter } from 'wouter-preact';
import { App } from '../../../client/App.js';
import staticLocationHook from 'wouter-preact/static-location';
import fs from 'fs';
import { h } from 'preact';

export const htmlRenderer = (url: string, data?: any): string => {
    const preactRender = render(
        <PreactRouter hook={staticLocationHook(url)}>
            <App data={data ?? null} />
        </PreactRouter>
    );

    const html = fs.readFileSync(new URL('../../../client/assets/index.html', import.meta.url));
    let htmlRender = html.toString().replace('<!--ssr-outlet-->', preactRender);
    if (data) {
        htmlRender = htmlRender.replace('[[server-data]]', JSON.stringify(data));
    }

    return htmlRender;
};
