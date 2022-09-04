import http from 'http';
import app from './app.js';
import enableGracefullyShutdown from './utils/shutdown/gracefullyShutdown.js';
interface AddressInfo {
    address: string;
    family: string;
    port: number;
}

void (() => {
    const server = http.createServer(app);
    enableGracefullyShutdown(server);

    server.listen(process.env.APP_PORT, () => {
        const { port } = <AddressInfo>server.address();
        console.log(`Started at port ${port} in ${process.env.NODE_ENV} environment...`);
    });
})();
