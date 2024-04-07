const jsonLogic = require('json-logic-js');

const rules = [
  { "!==": [ { "var": "delivery_fee" }, 0 ] },
  { "==": [ { "var": "order_status[0].title" }, "open" ] },
  { ">": [ { "var": "amount" }, 1000 ] },
  { "==": [ { "var": "user.is_marketing" }, 0 ] }
];

const data = {
  "delivery_fee": 2,
  "order_status": [{"title": "open"}],
  "amount": 0,
  "user": {"is_marketing": 0}
};

const executeRules = (data, rules, minConditions) => {
  let count = 0;

  for (var i = 0; i < rules.length; i++) {
    if (jsonLogic.apply(rules[i], data)) {
      count++;
    }
  }

  return count >= minConditions
}

console.log(executeRules(data, rules, 2));
