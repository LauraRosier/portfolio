import * as dataMapper from "../data-mapper.js";

export async function renderHomePage(req, res) {
  const coffees = await dataMapper.getThreeCoffee();
  
  res.render("home", {coffees});
    
};
