const Hapi = require('@hapi/hapi');
const routes = require('./routes');


//SERVER dgn Hapi
const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    server.route(routes);

    await server.start();
    console.log(`Server is running on ${server.info.uri}`);
};

init();