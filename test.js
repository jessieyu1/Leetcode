const arrayChange = (a) => {
  for (let i = 0; i < a.length; i++) {
    a[i] = 0;
  }
};

const a = [1, 3, 4, 5];

arrayChange(a);

console.log(a);
