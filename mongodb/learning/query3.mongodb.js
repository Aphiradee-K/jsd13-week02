use("sample_mflix");

db.theaters.find({ "location.address.stage": "AL"}).count();

db.theaters.find({ "location.address.city": "La Quinta" }).count();

db.theaters.findOne({ "location.address.city": "La Quinta" });