DROP TABLE IF EXISTS "coffee";
CREATE TABLE "coffee" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(60) NOT NULL,
  "description" TEXT NOT NULL,
  "reference" INTEGER NOT NULL UNIQUE,
  "origin" VARCHAR(60) NOT NULL,
  "price" DECIMAL(10, 2) NOT NULL,  
  "characteristic" VARCHAR(60) NOT NULL,
  "picture" VARCHAR(255),
  "available" BOOLEAN DEFAULT TRUE  
);

INSERT INTO "coffee"("name", "description", "reference", "origin", "price", "characteristic", "picture", "available") 
VALUES
('Espresso', 'Café fort et concentré préparé en faisant passer de l''eau chaude à travers du café finement moulu.', 100955890, 'Italie', 20.99, 'Corsé', '/coffees/100955890.png', TRUE),
('Columbian', 'Café moyennement corsé avec une acidité vive et une saveur riche.', 100955894, 'Colombie', 18.75, 'Acide', '/coffees/105589090.png', TRUE),
('Ethiopian Yirgacheffe', 'Réputé pour son arôme floral, son acidité vive et ses notes de saveur citronnée.', 105589090, 'Éthiopie', 22.50, 'Fruité', '/coffees/134009550.png', TRUE),
('Brazilian Santos', 'Café doux et lisse avec un profil de saveur de noisette.', 134009550, 'Brésil', 17.80, 'Doux', '/coffees/256505890.png', TRUE),
('Guatemalan Antigua', 'Café corsé avec des nuances chocolatées et une pointe d''épice.', 256505890, 'Guatemala', 21.25, 'Corsé', '/coffees/295432730.png', TRUE),
('Kenyan AA', 'Café complexe connu pour son acidité rappelant le vin et ses saveurs fruitées.', 295432730, 'Kenya', 23.70, 'Acide', '/coffees/302932754.png', TRUE),
('Sumatra Mandheling', 'Café profond et terreux avec un corps lourd et une faible acidité.', 302932754, 'Indonésie', 19.95, 'Corsé', '/coffees/327302954.png', TRUE),
('Costa Rican Tarrazu', 'Café vif et net avec une finition propre et une acidité vive.', 327302954, 'Costa Rica', 24.50, 'Acide', '/coffees/549549090.png', TRUE),
('Vietnamese Robusta', 'Café audacieux et fort avec une saveur robuste distinctive.', 549549090, 'Vietnam', 16.75, 'Épicé', '/coffees/582954954.png', TRUE),
('Tanzanian Peaberry', 'Acidité vive avec un profil de saveur rappelant le vin et un corps moyen.', 582954954, 'Tanzanie', 26.80, 'Fruité', '/coffees/589100954.png', TRUE),
('Jamaican Blue Mountain', 'Reconnu pour sa saveur douce, son acidité vive et son absence d''amertume.', 589100954, 'Jamaïque', 39.25, 'Doux', '/coffees/650753915.png', TRUE),
('Rwandan Bourbon', 'Café avec des notes florales prononcées, une acidité vive et un corps moyen.', 650753915, 'Rwanda', 21.90, 'Fruité', '/coffees/691550753.png', TRUE),
('Panamanian Geisha', 'Café rare aux arômes floraux complexes, une acidité brillante et un profil de saveur distinctif.', 795501340, 'Panama', 42.00, 'Fruité', '/coffees/705095341.png', TRUE),
('Peruvian Arabica', 'Café équilibré avec des notes de chocolat, une acidité modérée et un corps velouté.', 954589100, 'Pérou', 19.40, 'Chocolaté', '/coffees/753915650.png', FALSE),
('Hawaiian Kona', 'Café rare au goût riche, une acidité douce et des nuances subtiles.', 958090105, 'Hawaï', 55.75, 'Doux', '/coffees/795501340.png', FALSE),
('Nicaraguan Maragogipe', 'Café avec des notes de fruits, une acidité vive et un corps plein.', 691550753, 'Nicaragua', 28.60, 'Fruité', '/coffees/891009545.png', FALSE);