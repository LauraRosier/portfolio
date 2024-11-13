import * as dataMapper from "../data-mapper.js";

export async function renderDetailPage(req, res) {
  try {
    const coffeeId = req.params.id;

    const oneCoffee = await dataMapper.getOneCoffeeById(coffeeId);

    if (!oneCoffee) { return res.status(404).render("404"); }
  
    res.render("detail", {oneCoffee});
  }  catch (error) {
    console.error(error);
    res.status(500).render("500");
  }
};