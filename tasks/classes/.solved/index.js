class EUCountry {
    constructor(name, budget) {
        this.name = name;
        this.budget = budget;
    }

    static getMoney (amount) {
        EUCountry.money += amount;
    }

    sendMoneyInEUBudget() {
        if (this.budget > 10) {
            const count = this.budget * 0.1;
            EUCountry.getMoney(count);
            this.budget -= count;
        } else {
            console.log('Sorry, I can\t');
            this.askMoney();
        }
    }

    askMoney() {
        if (this.name === 'Greece') {
            this.budget += 1000000;
            EUCountry.getMoney(-1000000);
        } else {
            const fateLuck = Math.random() > 0.8;
            if (fateLuck) {
                this.budget += 10000;
                EUCountry.getMoney(-10000);
            }
        }
    }
}

EUCountry.money = 1000000000;
