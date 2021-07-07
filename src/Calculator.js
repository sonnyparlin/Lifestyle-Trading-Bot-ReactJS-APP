
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
      
        switch(reinvestEvery.label) {
          case 'DAILY':
            reinvestbalance=100
          break;
          case 'WEEKLY':
            reinvestbalance=Math.max(originalInvestment * i * 7, 100)
          break;
          case 'MONTHLY':
            reinvestbalance=Math.max(originalInvestment * i * 30, 100)
          break;
          case 'QUARTERLY':
            reinvestbalance=Math.max(originalInvestment * i * 90, 100)
          break
          case 'SIXMONTHS':
            reinvestbalance=Math.max(originalInvestment * i * 182.5,100)
          break;
          case 'YEARLY':
            reinvestbalance=originalInvestment * i * 365
            break
          default:
            reinvestbalance=0
            break;
        }
      
        
        if (reinvestEvery.label !== 'Never' && reinvestEvery.label !== undefined) {

            while (years > 0) {
                //console.log('Year: '+yearCounter)
                years--;
                oginvestment=parseFloat(oginvestment)
                for (let x=0;x<365;x++) {
                    console.log('oginvestment '+parseFloat(oginvestment).toFixed(2))
                    balance += oginvestment * i
                    console.log('Day: '+x+' ' +parseFloat(balance).toFixed(2))
            
                    if (balance < reinvestbalance)
                        continue;
                    else {
                        console.log("we are here")
                        enoughToReinvestCounter++
                        oginvestment += parseFloat(balance)
                        balance = 0
                        console.log(parseFloat(oginvestment).toFixed(2))
                    }
                }
            }
        }
        stmt = `{"investment": "${originalInvestment}",`
        if (reinvestbalance) {
          stmt+= `"strategy": "You chose to reinvest ${reinvestEvery.label} for ${originalYears} years. You reinvested ${enoughToReinvestCounter} times earning you ${money(oginvestment)}.",`
        }
        stmt+=`"balance": "${money(balance)}",`
        
        if (reinvestbalance) {
          stmt+=`"message": "You currently have: $${money(oginvestment)} invested, increasing your balance by $${money(oginvestment * i)} per day. At the end of year ${originalYears +1} you will be paid $${money(oginvestment * i * 365)}",`
        }
        console.log(reinvestEvery.label)
        if (reinvestEvery.label === undefined) {

            const answer = () => {
                balance=0
                for(let x=0;x<originalYears;x++) {
                  console.log(parseFloat(oginvestment).toFixed(2) + '\n')
                  balance += (oginvestment * i) * 365;
                  oginvestment=balance
                }
                return balance
            }
            
            stmt+=`"profit": "$${money(answer())}"}`
        } else if (reinvestEvery.label === 'Never') {
            stmt+=`"profit": "$${money(oginvestment * i * 365)}"}`
        } else
            stmt+=`"profit": "$${money((oginvestment * i * 365) + balance - originalInvestment)}"}`


        return JSON.stringify(stmt)
      }

    const strategy = compound(investment, years, reinvest);
    return JSON.parse(strategy);
}