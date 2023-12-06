const http = require("http");
const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("Welcome to our home page");
		return;
	}
	if (req.url === "/about") {
		res.end("This is our short history");
		return;
	}
	res.end(`
    <h1> OOPS</h1>
    <p> The page you looking for doesn't exist</p>
    <a href = "/"> Go back to home page </a>`);
});
server.listen(5000);
