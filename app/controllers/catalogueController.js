import * as dataMapper from "../data-mapper.js";

export async function renderCataloguePage(req, res) {
  const coffees = await dataMapper.getThreeCoffee();
  
  res.render("catalogue", {coffees});
    
};

 