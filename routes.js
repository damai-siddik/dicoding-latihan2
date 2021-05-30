const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (req, h) => {
            // return `Homepage`;

            const {name, location} = req. query;
            return `Hello, ${name} from ${location}`;
        },
    },
    {
        method: '*',
        path: '/',
        handler: (req, h) => {
            return `Halaman tidak dapat diakses dengan method tersebut`;
        },
    },
    {
        method: 'POST',
        path: '/login',
        handler: (req, h) => {
            const {username, password} = req.payload;
            return `Welcome ${username}`;
        }
    },
    {
        method: 'GET',
        path: '/about',
        handler: (req, h) => {
            return `About Page`;
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (req, h) => {
            return `Halaman tidak dapat diakses dengan method tersebut`;
        },
    },
    {
        method: 'GET',
        path:'/hello/{name?}',
        handler: (req, h) => {
            const {name = "stranger"} = req.params;
            const {lang} = req.query;

            if(lang === 'id') {
                return `Hai, ${name}!`;
            }

            return `Hello, ${name}`;
        }
    },
    {
        method: 'POST',
        path: '/user',
        handler: (req, h) => {
            // return h.res('created').code(201);

            return h.res('success')
                .type('text/plain')
                .header('X-custom', 'some-value');
        }
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (req, h) => {
            return `Halaman tidak dapat ditemukan`;
        },
    },
];

module.exports = routes;


/* NOTE
- nilai ‘*’         : route dapat diakses menggunakan seluruh method yang ada pada HTTP
- nilai ‘/{any*}’   : untuk menangani permintaan masuk pada path yang belum Anda tentukan. Ini merupakan salah satu teknik dalam menetapkan routing yang dinamis menggunakan Hapi.

*/