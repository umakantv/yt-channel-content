
import { createServer } from 'http';

const server = createServer((req, res) => {
    console.log(req.method, req.path)
    console.log(req.read())

    // 'readable' may be triggered multiple times as data is buffered in
    req.on('readable', () => {
        let chunk;
        let bytesRead = 0;
        console.log('Stream is readable (new data received in buffer)');
        // Use a loop to make sure we read all currently available data
        while (null !== (chunk = req.read())) {
            console.log(`Read ${chunk.length} bytes of data...`);
            bytesRead += chunk.length;
            res.write(`Read ${bytesRead} bytes of data...\n`)
        }
    });

    req.on('close', () => {
        console.log("Request closed")

        res.end()
    })

})

server.listen(3000);

console.log('Server listening on http://localhost:3000')