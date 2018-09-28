//import demoRoutes from '../controllers/demo/demoController';
import {get, post, getById, put, _delete} from '../controllers/demo/demoController';
import { runInNewContext } from 'vm';

const router = (app) =>{
    app.route('/demo')
        .get(get)
        .post(post);
    app.route('/demo/:id')
        .get(getById)
        .put(put)
        .delete(_delete);
}
export default router;