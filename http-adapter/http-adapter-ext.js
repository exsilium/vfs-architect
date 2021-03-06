var assert = require("assert");

module.exports = function setup(options, imports, register) {

  assert(options.mount, "option 'mount' is required");

  imports.connect.useMain(require("@pylonide/vfs-http-adapter/restful")(options.mount, imports.vfs));

  register(null, {
    "vfs-rest": {}
  });
}
