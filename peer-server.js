var PeerServer = require('peer').PeerServer;
var server = PeerServer({port: 9000, path: '/peerjs'});

//var fs = require('fs');
//var PeerServer = require('peer').PeerServer;
//
//var server = PeerServer({
//    port: 9000,
//    ssl: {
//        key: fs.readFileSync('/path/to/your/ssl/key/here.key'),
//        cert: fs.readFileSync('/path/to/your/ssl/certificate/here.crt')
//    }
//});

