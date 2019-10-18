
function getInventory(req, res) {
    const db = req.app.get("db");

    db.get_inventory()
        .then(inventory => res.status(200).json(inventory))
        .catch(err => {
            res.status(500).json({ errorMessage: "Something malfunctioned" })
            console.log(err)
        })
}

function addToInventory(req, res) {
    const db = req.app.get("db");
    const { name, price, img } = req.body;

    db.create_product([name, price, img])
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).json({ errorMessage: "Something malfunctioned" })
            console.log(err)
        })
}

function deleteFromInventory(req, res) {
    const db = req.app.get("db");
    const { id } = req.params;

    db.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).json({ errorMessage: "Something malfunctioned" })
            console.log(err)
        })
}

function editProduct(req, res) {
    const db = req.app.get("db");
    const { id } = req.params;

    db.edit_product(id)
    .then(() => res.sendStatus(200))
    .catch(err => {
        res.status(500).json({ errorMessage: "Something malfunctioned" })
        console.log(err)
    })
}

module.exports = {
    getInventory,
    addToInventory,
    deleteFromInventory,
    editProduct
}