export const compute = (strand1,strand2) => {
  if (strand1.length!==strand2.length){
  throw new Error('strands must be of equal length');
  } else{
     let difference=0;
     for (let i = 0; i < strand1.length; i++) {
       difference += strand1[i] !== strand2[i] ? 1 : 0;
        }    
  return difference;
  }
};