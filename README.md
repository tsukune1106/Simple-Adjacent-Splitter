# Welcome to Simple Adjacent Splitter!

This package is used to separate adjacent/similar items to make sure they are not next to each other.
> **Note:** It will only be more accurate if the category of object is given evenly

## Download
You can download `simple-adjacent-splitter` package through `npm`.
```
npm install simple-adjacent-splitter
```

## Function
There are two parenthesis.
```javascript
adjacentSplitter(value: Array<Object>, field: string)
```

## Example
```javascript
var adjacentSplitter = require("simple-adjacent-splitter");

const example = [
	{ category: 'Drink', name: 'Tea' },
	{ category: 'Food', name: 'Pasta' },
	{ category: 'Food', name: 'Soup' },
	{ category: 'Food', name: 'Risotto' },
	{ category: 'Drink', name: 'Coffee' },
	{ category: 'Food', name: 'Steak' },
	{ category: 'Tools', name: 'Screwdriver' }
];

console.log(adjacentSplitter(example, 'category'));
/*
[
  { category: 'Food', name: 'Pasta' },       
  { category: 'Drink', name: 'Tea' },        
  { category: 'Tools', name: 'Screwdriver' },
  { category: 'Food', name: 'Soup' },        
  { category: 'Drink', name: 'Coffee' },     
  { category: 'Food', name: 'Risotto' },     
  { category: 'Food', name: 'Steak' }        
]
*/
```