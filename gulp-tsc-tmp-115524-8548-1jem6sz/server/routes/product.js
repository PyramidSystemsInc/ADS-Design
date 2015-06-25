var express = require('express');
var path = require('path');
var router = express.Router();
router.get('/:productId', function (req, res, next) {
    res.sendFile(path.join(__dirname, "../views/product.html"));
});
module.exports = router;
//# sourceMappingURL=product.js.map