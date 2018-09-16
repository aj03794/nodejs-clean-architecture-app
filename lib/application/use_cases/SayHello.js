const execute = name => {
  const message = name ? `Hello ${name}` : 'Hello World!'
  return Promise.resolve(message)
}

module.exports = {
  execute
}