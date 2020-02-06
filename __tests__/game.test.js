import { Character } from './../src/game.js';

describe ('Character', () => {
  let standard;

  beforeEach(() => {
    standard = new Character();
  });
  test ('pick character & enter name while statts are added.', () => {
    standard.setCharacter("name", "Standard");
    expect(standard.name).toEqual("userName");
  })



});