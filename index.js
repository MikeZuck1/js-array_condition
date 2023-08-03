// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML; 

const useTheMethofForLoop = () => {
  let carBrands = ['Opel', 'Mercedes', 'Peugeot', 'Dacia', 'Skoda', 'Toyota']; 
  // Cette boucle for permet de d'itérer dans mon tableau 'carBrands' et la la méthode .length parcours le celui-ci (le tableau)
  for(let x = 0; x < carBrands.length; ++x) {
      // Cette condition vérfie si le tableau 'carBrands' contient un élément 'Dacia' et si le cas, la boucle ignore cet élément (Dacia) et continue à itérer. 
      if(carBrands[x] === 'Dacia') {
          continue; 
      }
      console.log(carBrands[x].toUpperCase());
          // Should print : 
          // OPEL
          // MERCEDES
          // PEUGEOT
          // SKODA
          // TOYOTA
  }
}; 
useTheMethofForLoop(); // call the function 