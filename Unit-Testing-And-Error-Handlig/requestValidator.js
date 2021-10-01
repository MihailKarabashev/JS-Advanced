function solve(request) {
  let methods = ["GET", "POST", "DELETE", "CONNECT"];
  let version = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0 "];
  let uri = /[\w||.+||,+||*]/;
  let message = /[^<, >, \, &, ', "]/;

  if (!methods.includes(request.method.toUpperCase())) {
    throw Error(`Invalid request header: Invalid ${request.method}`);
  } else if (!version.includes(request.version.toUpperCase())) {
    throw Error(`Invalid request header: Invalid ${request.version}`);
  } else if (!request.uri.match(uri)) {
    throw Error(`Invalid request header: Invalid ${request.uri}`);
  } else if (!request.message.match(message)) {
    throw Error(`Invalid request header: Invalid ${request.message}`);
  }

  return request;
}

console.log(
  solve({
    method: "GET",
    uri: "svn.public.catalog",
    version: "HTTP/1.1",
    message: "",
  })
);
