
export default function Calculator(investment, yrs, pckt) {
    if (!investment)
        return
        
    let interest = 0.00466
    let initialInvestment = investment
    let yearlyPocket = pckt
    const reinvest = 0

    if (yearlyPocket === '')
    yearlyPocket = 0.25

    if (yearlyPocket > 1)
    yearlyPocket = 1

    let years = yrs

    let pocket= 0
    let pocketPerYear= 0
    let yearlyStats=[]
    let millionare=false
    let currentTotal = 0

    const money = x => {
    x = Number.parseFloat(x).toFixed(2);
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    };

    const compound = (investment=1000, interest=0.00466, years=5, yearlyPocket = 0.25, reinvest = 365) => {
    let y = 1;
    for (let i = years; i > 0; i--) {

        const yearlyInterestEarned = parseFloat((investment * interest) * 365);
        const dailyInterest = parseFloat(investment * interest)
        const weeklyInterest = parseFloat(((investment * interest) * 365 ) / 52)
        const monthlyInterest = parseFloat(((investment * interest) * 365 ) / 12)
        const quarterlyInterest = parseFloat(((investment * interest) * 365) / 4)
        const sixMonthInterestEarned = parseFloat((investment * interest) * (365/2))
        pocket += yearlyInterestEarned * parseFloat(yearlyPocket)
        let thisYearsPocket=0;
        thisYearsPocket = parseFloat(yearlyInterestEarned) * parseFloat(yearlyPocket)
        if (isNaN(thisYearsPocket))
            thisYearsPocket = Number(0);
        currentTotal = parseFloat(yearlyInterestEarned) - parseFloat(thisYearsPocket)

        if (parseFloat(investment + yearlyInterestEarned) > 1000000) 
        millionare=true
        
        yearlyStats.push(`{
        "Year": "${y++}",
        "Invested": "$${money(investment)}",
        "Daily Interest Earned": "$${money(dailyInterest)}",
        "Weekly Interest Earned": "$${money(weeklyInterest)}",
        "Monthly Interest Earned": "$${money(monthlyInterest)}",
        "Quarterly Interest Earned": "$${money(quarterlyInterest)}",
        "Six months of Interest Earned": "$${money(sixMonthInterestEarned)}", 
        "Yearly Interest Earned": "$${money(yearlyInterestEarned)}", 
        "In your Pocket": "$${money(thisYearsPocket)}",
        "Ready to reinvest": "$${money(yearlyInterestEarned - parseInt(thisYearsPocket))}",
        "Worth to date": "$${money(yearlyInterestEarned - parseInt(thisYearsPocket))}",
        "Millionare": "${millionare}"} ${i===1 ? '':','}`)

        // Re-invest
        investment = parseFloat(yearlyInterestEarned) - parseFloat(thisYearsPocket);
    }
    pocketPerYear = parseFloat(pocket) / parseInt(years)
    return currentTotal;
    };

    const total = compound(initialInvestment, interest, years, yearlyPocket, reinvest);


    let jsonMessage = `{"message": {"Initial investment": "$${parseFloat(initialInvestment)}",
    "Time passed": "${years} years",
    "Average Pocket per year": "$${money(pocketPerYear)}",
    "Total pocket": "$${money(pocket)}", 
    "Total worth": "$${money(total)}",`

    jsonMessage += '"years":['
    jsonMessage += yearlyStats.join('')
    jsonMessage += "]}}"
    //console.log(jsonMessage) //

    return JSON.parse(jsonMessage);
}