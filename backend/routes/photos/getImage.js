const router = require("express").Router();

router.get("/:id", (req, res) => {
  const { gfs } = res.locals;

  gfs.findOne({ _id: req.params.id }, (err, file) => {
    var decodedString = String.fromCharCode.apply(null, new Uint8Array(res));
    if (err) {
      res.status(503).send("Internal server error");
      return;
    }
    if (!file) {
      res.status(404).send("No file attached");
      return;
    }
    if (
      !(file.contentType === "image/jpeg" || file.contentType === "image/png")
    ) {
      res.status(404).send("Requested asset is not an Image");
      return;
    }

    const readstream = gfs.createReadStream({
      _id: req.params.id,
    });

    readstream.on("error", function (err) {
      res.end();
    });
    readstream.pipe(res);
  });
});

module.exports = router;
