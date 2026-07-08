use("sample_mflix");

db.movies.find({
    countries: {$in: ["USA"]},
    year: {$gte: 1950, $lte: 1970}
});

db.movies.find({ 
    genres: { $all: ["Drama", "History" ] }, 
    released: { $gt: ISODate("1970-01-01T00:00:00Z") }
}).count();

db.movies.find({ cast: "Roy L. McCardell"}).count();

db.movies.find({ directors: "Hal Roach"}).count();

db.movies.find({ directors: { $in: ["Hal Roach"] } });

db.movies.find(
    {
        directors: { $in: ["Hal Roach"] }
    },
    {
        title: 1,
        "awards.wins": 1,
        _id: 0
    }
);

db.movies.find(
    {
        year: 1995,           // condition #1
        genres: "Action"      // condition #2 
    },
    { _id: 0, title: 1, year: 1, genres: 1 }   //projection
);

db.movies.find(
    {
        $or: [
            { languages: "French" },
            { languages: "Spanish" }
        ]
    },
    { _id: 0, title: 1, languages: 1 }
);

db.movies.find(
    {
        year: { $gt: 2010 },
        $or: [
            { genres: "Drame" },
            { "imdb.rating": { $gte: 8 } }
        ]
    },
    { _id: 0, title: 1, year: 1, genres: 1, "imdb.rating": 1 }
).limit(10);