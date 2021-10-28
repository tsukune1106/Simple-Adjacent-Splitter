module.exports = splitAdjacent = (array, field) => {
    // to seperate adjacent data
    // to assume no similar object are next to each other
    // e.g.if options(industry) are: food, food, travel, travel, free, media, media
    // result: food, travel, media, free, food, travel, media, free

    if (!Array.isArray(array)) {
        return 'An array is required';
    }
    if (array.length > 0) {
        // group by field
        let groupBy = array.reduce((arr, item) => {
            arr[item[field]] = [...arr[item[field]] || [], item];
            return arr;
        }, {});
        /*
        Example:
        [
            { category: 'Food', name: 'Pasta' },
            { category: 'Food', name: 'Soup' },
            { category: 'Drink', name: 'Tea' },
            { category: 'Food', name: 'Risotto' },
            { category: 'Drink', name: 'Coffee' },
            { category: 'Food', name: 'Steak' },
            { category: 'Tools', name: 'Screwdriver' }
        ]
        Result:
        {
            Food: [
                { category: 'Food', name: 'Pasta' },
                { category: 'Food', name: 'Soup' },
                { category: 'Food', name: 'Risotto' },
                { category: 'Food', name: 'Steak' }
            ],
            Drink: [
                { category: 'Drink', name: 'Tea' },
                { category: 'Drink', name: 'Coffee' }
            ],
            Tools: [ { category: 'Tools', name: 'Screwdriver' } ]
            ]
        }
        */

        // if there is more than one group by
        if (Object.keys(groupBy).length > 1) {
            // turn groupBy object into array
            groupBy = Object.keys(groupBy).map(key => ({
                name: key,
                size: groupBy[key].length,
                items: groupBy[key]
            }));


            // sort groupBy
            groupBy.sort((a, b) => (a.size > b.size ? -1 : 1));
            const tempArr = [];
            groupBy[0].items.forEach((_, i) => {
                groupBy.forEach(data => {
                    if (data.items[i]) {
                        tempArr.push(data.items[i]);
                    }
                });
            });
            return tempArr;
        }
        else {
            console.log(false)
            return array;
        }
    }
    return null;
}