const http require ('http');
const port = process.argv[2]

if (!PORT) {
    console.log('usage: node e01.js <PORT>')
    process.exit(0)
}

const server = htpp.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html")

    if(req.method === 'GET') {
        res.write('<h1> Hello World!</h1>')
    } else if (req.method === 'POST') {
        res.write('Heisenberg')
    }

    res.end()
})

server.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})