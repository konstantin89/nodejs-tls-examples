# nodejs-tls-examples

## OpenSSL

All keys and certificates are generated using OpenSSL.  
Please install OpenSSL before running the examples.  

[OpenSSL for Windows](https://slproweb.com/products/Win32OpenSSL.html)    
[OpenSSL for Ubuntu](https://ubuntuforums.org/showthread.php?t=2110429)   

To make sure that OpenSSL has been successfully installed, run the following command:  
```
openssl version
```

Example of output:
```
OpenSSL 1.1.1a  20 Nov 2018
```

## Prepare SSL keys and certificates

### Generate server private key
```
openssl genrsa -out ./tls/server-key.pem 4096
```

### Generate server certificate request

In the following step, make sure to set "Common Name" field to the  hostname that you will try to connect to.    
In this example, we are setting it to localhost.   

```
openssl req -new -key ./tls/server-key.pem -out ./tls/server-csr.pem  
```

### Generate server self signed certificate

```
openssl x509 -req -in ./tls/server-csr.pem -signkey ./tls/server-key.pem -out ./tls/server-cert.pem  
```

