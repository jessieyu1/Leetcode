function maxSatisfied(customers, grumpy, minutes) {
  let satisfiedCustomers = 0;
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) {
      satisfiedCustomers += customers[i];
    }
  }
  let bonus = 0;
  for (let i = 0; i < minutes; i++) {
    if (grumpy[i] === 1) {
      bonus += customers[i];
    }
  }
  let max = bonus;

  for (let i = minutes; i < customers.length; i++) {
    if (grumpy[i] === 1) {
      bonus += customers[i];
    }
    if (grumpy[i - minutes] === 1) {
      bonus -= customers[i - minutes];
    }
    max = Math.max(bonus, max);
  }
 
  satisfiedCustomers += max;

  return satisfiedCustomers;
}

module.exports = maxSatisfied;
