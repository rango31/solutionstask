***JSON logic rules***

**Task A**
*There is a due amount AND the purchase was made after January 1st, 2021, AND the shipping country is whether Croatia or Italy.*

```
{
  "and": [
    { "!==": [ { "var": "data.0.amount" }, 0 ] },
    { ">=": [ { "var": "data.0.created_at" }, "2021-01-01T00:00:00Z" ] },
    { "or": [
        { "in": [ "Croatia", { "var": "data.0.address.shipping" } ] },
        { "in": [ "Italy", { "var": "data.0.address.shipping" } ] }
      ]
    }
  ]
}

```

**Task B**
*Same logic as “a” but using some different variable(s) from the purchase data.*

*This rule will only send email if the order status is not cancelled, and delivery fee is not free and payment has been made*

```
{
  "and": [
    { "!==": [ { "var": "data.0.order_status[0].title" }, "cancelled" ] },
    { ">": [ { "var": "data.0.delivery_fee" }, 0 ] },
    { "!==": [ { "var": "data.0.payment" }, null ] }
  ]
}

```


**Task C**
*Create a rule to send internal emails based on 4 custom conditions (for you to choose) where at least 2 of 4 are TRUE*

```
//JSON Logic does not evaluate each condition separately and return an array of results. Instead, it returns a single boolean value after evaluating the entire rule. Also, JSON Logic does not have built-in support for counting the number of true values in a set of conditions. 

//The best way is to : we’re apply each JSON Logic rule to the data separately, incrementing a count for each rule that returns true. Then, we check if the count is greater than or equal to 2.

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


```