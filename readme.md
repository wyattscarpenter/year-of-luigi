# year-of-luigi

> Check if is year of Luigi

## Install

```
$ npm install --save year-of-luigi
```

## Caveat
The Year of Luigi is commonly said to have taken place between February 14, 2013 and March 18, 2014. The precise boundaries are a point of scholarly debate, however. But as of now this module considers any date object between those two dates inclusively (in the current working timezone) to be valid Year of Luigi.

## Usage

```js

const yearOfLuigi = require('year-of-luigi');

yearOfLuigi(2013);
// "probably"

yearOfLuigi(2014);
// "maybe"

yearOfLuigi(2015);
// false

yearOfLuigi(new Date("2013-02-14"));
//true


```
## API

### yearOfLuigi([year])

#### year

Type: `number`  
Default: current year

### yearOfLuigi([date])

#### date

Type: `date`  
Default: `new Date()`

## License

MIT © [haotian Chang](https://github.com/cht8687)

Luigification: MIT © [Wyatt Carpenter](https://github.com/wyattscarpenter)
