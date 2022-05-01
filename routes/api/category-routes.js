// USING ACTIVITY 28 - MINI PROJECT AS A RESOURCE FOR THIS!!

const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// find all categories
// be sure to include its associated Products
// GET REQUEST -> will show all the categories + the product associated with that
router.get('/', async (req, res) => {
  try {
    const categoriesData = await Category.findAll({
      // finding all data on category + the data of product associated with category
      include: [
        {
          model: Product,
        },
      ],
    });
    // 200 - OK
    res.status(200).json(categoriesData);
  } catch (err) {
    // 500 - INTERNAL SERVER ERROR
    res.status(500).json(err);
  }
});

// find one category by its `id` value
// be sure to include its associated Products
// GET REQUEST -> will show the one item based on the id you put in
router.get('/:id', async (req, res) => {
  try {
    const categoriesData = await Category.findByPk(req.params.id, {
      // finding data on category based on the id given + the data of product associated with category
      include: [
        {
          model: Product,
        },
      ],
    });

    if (!categoriesData) {
      // 400 - BAD REQUEST ERROR
      res.status(400).json({ message: 'ERROR! SOMETHING WRONG...' });
      return;
    }

    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new category
router.post('/', async (req, res) => {
  try {
    const categoriesData = await Category.create(req.body);
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a category by its `id` value
// activity 9
router.put('/:id', async (req, res) => {
  try {
    const updatedCategory = await Category.update(
      {
        // all the fields the user can update
        category_name: req.body.category_name,
      },
      {
        // gets an id based in the request
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categoriesData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoriesData) {
      res.status(400).json({ message: 'ERROR! SOMETHING WRONG...' });
      return;
    }

    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
