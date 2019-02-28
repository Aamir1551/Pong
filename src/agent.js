class Agent {
    constructor(qtabeleDim) {
        this.game = {};
        this.qtable = {};

        this.explorationRate = 1;
        this.l_r = 0.8;
        this.discountRate = 0.8
    }

    //chooseAct takes in a state and an actionCount
    //actionCount refers to the maximum number of actions that can be executed at state s
    chooseAct(s, actCount) { //choose random action or choose action with best reward -- problem: how many actions are there?
        //if the state has never been visited or we choose to explore then choose a random action
        if( (!this.game.hasOwnProperty(s.toString())) || Math.random() < this.explorationRate) {
            return this.chooseRandomAction(s, actCount);
        }

        //pick action which maximises the reward
        let maxReward = Number.NEGATIVE_INFINITY;
        let actionNum = -1;
        let newState = -1;

        for(let i = 0;i<this.game[s.toString()]; i++) {
            if(this.game[s.toString()][i][2] > maxReward) {
                let params = this.game[s.toString()][i];
                actionNum = i;
                maxReward = params[0];
                newState = params[1];
            }

        }
        return [actionNum, maxReward, newState];
    }

    chooseRandomAction(s, actCount) {
       let actionNum =  Math.floor(Math.random() * actCount);
       let params = this.game[s.toString()][actionNum];
       let maxReward = params[0];
       let newState = params[1];
       return[actionNum, maxReward, newState] ;
    }

    updateQtable(state, action, reward, nxtState) {

    }

    


}