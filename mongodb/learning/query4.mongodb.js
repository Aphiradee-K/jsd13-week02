use("sample_mflix");

db.movies.find({ plot: { $regex: "America", $options: "i" } }).count();

db.movies.find({ plot: {$regex: "street.$", $options: "i"}}).count();

db.movies.find({ plot: {$regex: "street.$", $options: "i"}});