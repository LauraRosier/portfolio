import * as dataMapper from "../data-mapper.js";


export function renderFavPage(req, res){
  res.render('fav', {favs: req.session.fav});
}

export async function addFavCoffee(req, res) {
  try {
    const coffeeId = req.params.id;
    
    const favCoffee = await dataMapper.getOneCoffeeById(coffeeId);
    
    const isAlreadyInFav = req.session.fav.some(
      fav => fav.id === favCoffee.id);
        
    
    if(!isAlreadyInFav){
      req.session.fav.push(favCoffee);
    };

    res.redirect("/fav");
  }  catch (error) {
    console.error(error);
    res.status(500).render("500");
  }

}
export function removeFavCoffee(req, res){
  try{
    const coffeeId = Number(req.params.id);
    req.session.fav = req.session.fav.filter(
      fav => fav.id !== coffeeId);
    res.redirect("/fav");

  } catch (error) {
    console.error(error);
    res.status(500).render("500");
  }

}