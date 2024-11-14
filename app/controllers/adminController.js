import * as dataMapper from "../data-mapper.js";

export  function renderAddCoffeePage(req, res){
  res.render('admin');
}

export async function createNewCoffee(req, res) {
  try{
    const formDataCoffee = req.body;
    console.log(formDataCoffee);

    if(
      !formDataCoffee.name || 
      !formDataCoffee.description || 
      !formDataCoffee.reference ||
      !formDataCoffee.origin ||
      !formDataCoffee.price ||
      !formDataCoffee.characteristic ||
      !formDataCoffee.picture ||
      !formDataCoffee.available

    ) {
      return res.status(400).send("Tous les champs sont obligatoires !");
    }
 
    const coffeeInserted = await dataMapper.createCoffee(formDataCoffee);

    res.redirect(`/detail/${coffeeInserted.id}`);

  }catch(error) {
    console.error(error);
    res.status(500).render("500");
  }
}