import http from 'http';

export default function enableGracefullyShutdown(server: http.Server): void {
    process.on('SIGINT', () => {
        console.info('Got SIGINT (aka ctrl + c - manual shutdown). Graceful shutdown', new Date().toISOString());
        graceFullyShutdown(server);
    });
    process.on('SIGTERM', () => {
        console.warn('Got SIGTERM (docker container stop!!). Graceful shutdown', new Date().toISOString());
        graceFullyShutdown(server);
    });
}

const graceFullyShutdown = (server: http.Server) => {
    server.close((error) => {
        if (error) {
            console.error(error);
            process.exitCode = 1;
        }
        process.exit();
    });
};
