function randomColor() {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
}
/* Ova funkcija generira nasumičnu boju korisnika. 
Broj 16 označava da će taj string biti heksidecimalni broj, a # služi da se dobije boja korisnika */

export default randomColor;
