import express from 'express';
import {
  createProperty,
  getProperties,
  updateProperty,
  deleteProperty,
} from '../controllers/propertyController.js';


const router = express.Router();

router.route('/')
  .get(getProperties)
  .post(createProperty);

router.route('/:id')
  .put( updateProperty)
  .delete( deleteProperty);

export default router;
