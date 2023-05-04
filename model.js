//mocking a database and associated database model functions
let id = 0;

function getId() {
  return ++id;
}

let db = [
  //   { id: getId(), name: "Captain", weight: 25 },
];

module.exports = {
  findAll() {
    // SELECT * FROM db;
    return db;
  },

  findById(id) {
    // SELECT * FROM db WHERE id = 1;
    const item = db.find((d) => d.id == id);
    return item;
  },

  create({ name, weight }) {
    // INSERT INTO db (id, name, weight) VALUES ('xyz', 'Foo', 10);
    const newItem = { id: getId(), name, weight };
    db.push(newItem);
    return newItem;
  },

  update(id, changes) {
    // UPDATE db SET name = 'Foo', weight = 9 WHERE id = 1;
    const obj = db.find((obj) => obj.id == id);
    if (!obj) return null;

    const updatedObj = { ...obj, ...changes, id };
    db = db.map((d) => (d.id == id ? updatedObj : d));
    return updatedObj;
  },

  delete(id) {
    // DELETE FROM db WHERE id = 1;
    const obj = db.find((obj) => obj.id == id);
    if (!obj) return null;

    db = db.filter((d) => d.id != id);
    return obj;
  },
};
