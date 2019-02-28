class Agent {
    constructor(qtabeleDim) {
        this.dims = qtabeleDim;
        this.qtable = {};
        this.game = {};
        this.rewards = {};

        this.explorationRate = 1;
        this.l_r = 0.8;
        this.discountRate = 0.8
    }

    //chooseAct takes in a state and an actionCount
    //actionCount refers to the maximum number of actions that can be executed at state s
    chooseAct(s, actCount) { //choose random action or choose action with best reward -- problem: how many actions are there?
        if(this.game[s.toString()].length === 0 || Math.random() < this.explorationRate) {
            this.chooseRandomAction(s, actCount);
        }

        //pick action which maximises the reward
        let maxReward = Number.NEGATIVE_INFINITY;
        let actionNum = -1;
        let newState = -1;

        for(let i = 0;i<this.game[s.toString()]; i++) {
            if(this.game[s.toString()][i][2] > maxReward) {
                let params = this.game[s.toString()][i]
                maxReward = params[2];
                actionNum = params[0];
                newState = params[1];

            }

        }
    }

    chooseRandomAction(s, actCount) {

    }

    getReward(s, action) {}



}