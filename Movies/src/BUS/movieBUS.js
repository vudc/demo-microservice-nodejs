var movieRepos = require('../repository/movieRepos');

exports.GetAllMovie = async () => {
    return await movieRepos.GetAllMovie();
}
exports.AddNew = async (NewMovie) => {
    return await movieRepos.AddNew(NewMovie);
}
exports.GetPremieres = async () =>{
    return await movieRepos.GetPremieres();
}