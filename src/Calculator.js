
export default function Calculator(investment, years, reinvest) {
    if (!investment)
        return

    const money = x => {
        x = Number.parseFloat(x).toFixed(2);
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const compound = (investment, years, reinvestEvery) => {
        const originalInvestment=investment
        let oginvestment = originalInvestment
        const i = 0.00466
        const originalYears = years;
        let reinvestbalance=0
        let stmt;
        let balance=0
        let enoughToReinvestCounter=0
        let final=0;
        let reinvestLABEL='Never'

        reinvestLABEL = reinvestEvery.label
        if (!reinvestLABEL)
          reinvestLABEL = 'Never'
      
        if (reinvestLABEL !== 'Never' && reinvestLABEL !== undefined) {

            while (years > 0) {
                //console.log('Year: '+yearCounter)
                years--;
                oginvestment=parseFloat(oginvestment)
                for (let x=1;x<367;x++) {
                    
                    switch(reinvestLABEL) {
                        case 'DAILY':
                          reinvestbalance=100
                        break;
                        case 'WEEKLY':
                          reinvestbalance=Math.max(oginvestment * i * 7, 100)
                        break;
                        case 'MONTHLY':
                          reinvestbalance=Math.max(oginvestment * i * 30, 100)
                        break;
                        case 'QUARTERLY':
                          reinvestbalance=Math.max(oginvestment * i * 90, 100)
                        break
                        case 'SIXMONTHS':
                          reinvestbalance=Math.max(oginvestment * i * 182.5,100)
                        break;
                        case 'YEARLY':
                          reinvestbalance=oginvestment * i * 365
                          break
                        default:
                          reinvestbalance=oginvestment * i * 365
                          break;
                    }

                    console.log('investment '+money(oginvestment))
                    balance += oginvestment * i
                    console.log('Day: '+x+' ' +money(balance))
                    console.log('reinvestbalance: ' + money(reinvestbalance))
                    if (balance < reinvestbalance)
                        continue;
                    else {
                        console.log("Reinvesting " + parseFloat(balance).toFixed(2))
                        enoughToReinvestCounter++
                        if (reinvestLABEL === 'YEARLY')
                            oginvestment = parseFloat(balance)
                        else
                            oginvestment += parseFloat(balance)

                        balance = 0
                    }
                }
            }
        }

        stmt = `{"investment": "${originalInvestment}",`
        if (reinvestLABEL === 'Never')
          stmt+= `"strategy": "You chose not to reinvest.",`
        else
          stmt+= `"strategy": "You chose to reinvest ${reinvestLABEL.toLowerCase()} for ${originalYears} years. You reinvested ${enoughToReinvestCounter} times earning you $${money(oginvestment)}.",`
        
        if (balance)
          stmt+=`"balance": "${money(balance)}",`
      
        final = oginvestment * i * 365
        
        stmt+=`"message": "You currently have: $${money(oginvestment)} invested, increasing your balance by $${money(oginvestment * i)} per day. `

        if (reinvestLABEL === 'Never')
          stmt+=`At the end of year ${originalYears} you will be paid $${money(final)}",`
        else
          stmt+=`Your reinvestments have added 1 year to your timeline. At the end of year ${originalYears +1} you will be paid $${money(final)}",`          
        
        if (reinvestLABEL === 'Never') {
            stmt+=`"profit": "$${money(oginvestment * i * 365 - originalInvestment)}"}`
        } else
            stmt+=`"profit": "$${money(final + balance - originalInvestment)}"}`


        return JSON.stringify(stmt)
      }

    const strategy = compound(investment, years, reinvest);
    return JSON.parse(strategy);
}