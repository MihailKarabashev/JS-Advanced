function solve(request) {
  let methods = ["GET", "POST", "DELETE", "CONNECT"];
  let version = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  let uri = /[\w||.+||,+||*]/;
  let message = /[^<, >, \, &, ', \s"]/;

  if (!methods.includes(request.method)) {
    throw new Error(`Invalid request header: Invalid Method`);
  } else if (!version.includes(request.version)) {
    throw Error(`Invalid request header: Invalid Version`);
  } else if (request.uri == undefined || !request.uri.match(uri)) {
    throw Error(`Invalid request header: Invalid URI`);
  } else if (
    request.message == undefined ||
    (!request.message.match(message) && request.message !== "")
  ) {
    throw Error(`Invalid request header: Invalid Message`);
  }

  return request;
}
