export default {
  run: () => {
    let start = new Date();
    var result = fabonacci(2);    
    let end = new Date();
    console.log(end.getTime() - start.getTime() );
  }
}

function fabonacci(n) {
      if (n === 0) {
                return 0;
            }
      if (n === 1) {
                return 1;
            }
      return fabonacci(n - 1) + fabonacci(n - 2);
}

