
**Start API**
node server.js

example call:  http://localhost:9900/get-pdf?name=neuralink.pdf

**api GET get-pdf**
```
{
"taskId":"api_a36ef75aa021298372494105f1030258a6bf73a3f64dcae61f0e8daa5c2bdd7c/1.0.0",
"input": {
            "path": "/get-pdf?name={name}", 
            "method": "GET", 
            "params": { 
                "name": "neuralink.pdf"
            } 
},
"reward": "15",
"requiredSolutions": 1,
"totalSolutions": 1,
"executionTimeout": 10000
}
```