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

  }  catch (error) {
    console.error(error);
    res.status(500).render("500");
  };
}

 