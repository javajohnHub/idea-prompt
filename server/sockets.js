module.exports = function (io) {
  io.sockets.on("connection", function (socket) {
    console.log("connected", socket.id);

    socket.on("get cards", () => {
      console.log("get cards");
    });
  });
};
