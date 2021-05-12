import {Router} from 'express'
import { deletUsuario, getUsuario, getUsuarios, postUsuario, putUsuario } from '../controllers/usuario';

const router = Router();

router.get('/',         getUsuarios)
router.get('/:id',      getUsuario)
router.post('/',        postUsuario)
router.put('/:id',      putUsuario)
router.delete('/:id',   deletUsuario)


export default router;