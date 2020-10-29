const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM ', (err, customers) => {
            if(err) {
                res.json(err);
            }

        });
    });
};

module.exports = controller;