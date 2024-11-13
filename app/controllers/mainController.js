import * as dataMapper from "../data-mapper.js";

export async function renderHomePage(req, res) {
  try {
    const coffees = await dataMapper.getThreeCoffees();
  
    res.render("home", {coffees});

  }  catch (error) {
    console.error(error);
    res.status(500).render("500");
  };
    
};
