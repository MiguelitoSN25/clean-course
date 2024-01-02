(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filestoEvalute = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const archivosparaborrar = filestoEvalute.map( file => file.id);

    
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const today = new Date();
    
    // días transcurridos - elapsed time in days
    const dayselapsed: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const numberdirectory = 33;
    
    // primer nombre - first name
    const firstname = 'Fernando';
    
    // primer apellido - last name
    const lastname = 'Herrera';

    // días desde la última modificación - days since modification
    const dayssincemodification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const maximumclassesperstudent = 6;


})();
