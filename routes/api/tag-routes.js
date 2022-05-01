const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
  // find all tags
  // be sure to include its associated Product data
router.get('/', (req, res) => {
try {
  const tagsData = await Tag.findAll({
    include: [{
      model: Product, 
      through: Tag,
      as: 'product_data'
    }],
  });
  res.status(200).json(tagsData);
} catch (err) {
  res.status(500).json(err);
}
});

// find a single tag by its `id`
// be sure to include its associated Product data
router.get('/:id', (req, res) => {
try {
  const tagsData = await Tag.findByPk(req.params.id, {
    include: [{
      model: Product, 
      through: Tag,
      as: 'product_data'
    }],
  });
  
  if (!tagsData) {
    res.status(400).json({ message: 'ERROR! SOMETHING WRONG...' });
    return;
  }

  res.status(200).json(tagsData);
} catch (err) {
  res.status(500).json(err);
}
});

// create a new tag
router.post('/', (req, res) => {
  try {
    const tagsData = await Tag.create(req.body);
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a tag's name by its `id` value
// activity 9
router.put('/:id', (req, res) => {
  try {
    const updatedTag = await Tag.update(
      {
        // all the fields the user can update
        tag_name: req.body.tag_name,
      },
      {
        // gets an id based in the request
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(updatedTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  try {
    const tagsData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    
    if (!tagsData) {
      res.status(400).json({ message: 'ERROR! SOMETHING WRONG...' });
      return;
    }

    res.status(200).json(tagsData); 
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
