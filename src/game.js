export class Character {
  constructor(){
  this.name = "";
  this.type = "";
  this.health = 100;
  this.level = 1;
  this.experience = 0;
  this.strength = 0;
  this.smarts = 0;
  this.attack = 0;
  this.defend = 0;
}

setCharacter(name, characterType){
  this.name = name;
  this.type = characterType;
  if(this.type === "Standard"){
    this.strength = 5;
    this.smarts = 5;
    this.attack = 5;
    this.defend = 5;
  }
  if(this.type === "Heavy"){
    this.strength = 8;
    this.smarts = 2;
    this.attack = 7;
    this.defend = 4;
  }
  if(this.type === "Light"){
    this.strength = 3;
    this.smarts = 9;
    this.attack = 3;
    this.defend = 4;
  }
}


};