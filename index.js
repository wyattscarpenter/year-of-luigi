'use strict';
module.exports = function (year) {
	year = year || new Date();
	if(year instanceof Date){return new Date("2013-02-14") <= year && year <= new Date("2014-04-18");}
	if(year==2013){return "probably";}
	if(year==2014){return "maybe";}
	return false;
};
