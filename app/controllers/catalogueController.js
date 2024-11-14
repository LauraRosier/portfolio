import * as dataMapper from "../data-mapper.js";

export async function renderCataloguePage(req, res) {
  try {
    const coffees = await dataMapper.getThreeCoffees();
  
    res.render("catalogue", {coffees});

  }  catch (error) {
    console.error(error);
    res.status(500).render("500");
  };
    
};

export async function renderAllCoffees(req, res) {
  try {
    const allCoffees = await dataMapper.getAllCoffees();

    res.render('allCoffees', {allCoffees});
    console.log(allCoffees);

  }  catch (error) {
    console.error(error);
    res.status(500).render("500");
  };

}

export async function searchByCategory(req, res) {
  const searchElement = req.query.characteristic;

  const coffeeByCharact = await dataMapper.getCoffeesByCharacteristic(searchElement);

  res.render('categories', {coffeeByCharact});
}

 