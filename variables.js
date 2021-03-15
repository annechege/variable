// key values

const perShed = {
	a: 510,
    b: 308,
    c: 486,
    d: 572
}
// end of key values:

function totalProduction(){
	for(let shed in perShed){
        console.log(`Your production in Shed ${shed.toLocaleUpperCase()} ${perShed[shed]} litres per day `)
    }

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const obj = Object.values(perShed);

    console.log(`The total production is ${obj.reduce(reducer)} litres per day`);

    return obj.reduce(reducer);
}

function incomeOverTime(selling_price, time){
    switch (time) {
        case 'weekly':
            console.log(`Your weekly income will be Ksh ${totalProduction() * 7 * selling_price}`);
            break;

        case 'yearly':
            console.log(`Your yearly income will be Ksh ${totalProduction() * 365 * selling_price}`);
            break;

        // case `monthly`:
        //     console.log(`your monthly income will be ksh ${ totalProduction() *31 * selling_price}`)
    
        default:
            console.log(totalProduction())
            break;
    }
    checkLeapYear(2020, selling_price);
}

function checkLeapYear(year, selling_price){
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    const isLeap = year => new Date(year, 1, 29).getDate() === 29;
    const getDaysInMonth = function(month,year) {
        return new Date(year, month, 0).getDate();
    };

    if(isLeap(year) == true){
        for (let index = 1; index <= monthNames.length; index++) {
             console.log(`Your income for ${monthNames[index]} is ${totalProduction() * getDaysInMonth(index, year) * selling_price}`)
        }
    }else{
        console.log('the year provided is not a leap year.')
    }
}

incomeOverTime(45, 'day');
