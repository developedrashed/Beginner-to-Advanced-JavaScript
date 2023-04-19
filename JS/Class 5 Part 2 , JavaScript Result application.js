function totalGreade(cgpa){
    
  if( cgpa >= 0 && cgpa < 1 ){
      return 'F';
  }else if( cgpa >= 1 && cgpa < 2 ){
      return 'D';
  }else if( cgpa >= 2 && cgpa < 3 ){
      return 'C';
  }else if( cgpa >= 3 && cgpa < 3.5){
      return 'B';
  }else if( cgpa >= 3.5 && cgpa < 4 ){
      return 'A-'
  }else if( cgpa >= 4 && cgpa < 5 ){
      return 'A';
  }else if( cgpa == 5 ){
      return 'A+';
  }else if( cgpa == 5 ){
      return 'D';
  }
}