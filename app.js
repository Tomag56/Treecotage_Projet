let compteur1Clicks = 0;

// compteur 1
document
  .querySelector('.compteur i.fa-plus')
  .addEventListener('click', () => {
    document.getElementById('compteur1').innerHTML = ++compteur1Clicks;
  });

document
  .querySelector('.compteur i.fa-minus')
  .addEventListener('click', () => {
    document.getElementById('compteur1').innerHTML = --compteur1Clicks;
  });

// compteur 2
let compteur2Plus = document
  .querySelector('.compteurS2 i.fa-plus')
  .addEventListener('click', () => {
    document.getElementById('compteur2').innerHTML = ++compteur1Clicks;
  });

let compteur2Moins = document
  .querySelector('.compteurS2 i.fa-minus')
  .addEventListener('click', () => {
    document.getElementById('compteur2').innerHTML = --compteur1Clicks;
  });

//   Compteur 3

document
  .querySelector('.compteurS3 i.fa-plus')
  .addEventListener('click', () => {
    document.getElementById('compteur3').innerHTML = ++compteur1Clicks;
  });

document
  .querySelector('.compteurS3 i.fa-minus')
  .addEventListener('click', () => {
    document.getElementById('compteur3').innerHTML = --compteur1Clicks;
  });

//   Compteur 4 
document
  .querySelector('.compteurS4 i.fa-plus')
  .addEventListener('click', () => {
    document.getElementById('compteur4').innerHTML = ++compteur1Clicks;
  });

document
  .querySelector('.compteurS4 i.fa-minus')
  .addEventListener('click', () => {
    document.getElementById('compteur4').innerHTML = --compteur1Clicks;
  });