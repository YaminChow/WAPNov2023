const dns = require('dns');

const domain = 'www.miu.edu';
//IPV4
dns.resolve4(domain, (err, addresses) => {
    if (err) {
        console.error(`Error resolving ${domain}: ${err.message}`);
        return;
    }

    console.log(`IP addresses for ${domain}: ${addresses}`);
});

//IPV6

dns.resolve6(domain, (err6, addresses6) => {
    if (err6) {
        console.error(`Error resolving IPv6 addresses for ${domain}: ${err6.message}`);
    } else {
        console.log(`IPv6 addresses for ${domain}: ${addresses6}`);
    }
});