import { PostService } from './05-dependency-b';
import { JsonDBService, LocalDataBaseService ,NewJsonDBService} from './05-dependency-c';


// Main
(async () => {
   // const provider = new LocalDataBaseService()
   const newProvider = new NewJsonDBService()
    //const provider = new JsonDBService()
   // const postService = new PostService(provider);
    const NewPostService = new PostService(newProvider);

    const posts = await NewPostService.getPosts();

    console.log({ posts })


})();