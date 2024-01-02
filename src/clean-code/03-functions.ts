(() => {

    // función para obtener información de una película por Id
    function getAllMoviesById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getAllMovieActorsByMovie( movieId: string ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( ActorId: string ) {
        console.log({ ActorId });
    }
    

    interface MovieDataOptions{
        title:string,
        description:string,
        rating:string,
        cast:string[],
    }

    interface ActorData{
        fullName:string,
        birthDate:Date
    }

    // Crear una película
    function createMovie({title, description, rating, cast}:MovieDataOptions ):void {
        console.log({ title, description, rating, cast });
    }

    function checkUserName(fullName:string){
        console.log(fullName);
        return true;        

    }

    // Crea un nuevo actor
    function createActorIfActorNotExists( fullName:string, birthDate:Date ): boolean {
        
        if( checkUserName(fullName) ) return false;

        console.log('Crear actor',birthDate);
        return true

    }

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }):number => {

        if ( isDead )  return  1500;
         
        if ( isSeparated )  return 2500; 
            
        return ( isRetired ) ? 3000 : 4000;

    }

    


})();


