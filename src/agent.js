class Agent {
    constructor() {
        this.qtable = {};
        this.actionChosen = -1;
    }

    //chooseAct takes in a state and an actionCount
    //actionCount refers to the maximum number of actions that can be executed at state s
    chooseAct(s, actCount, explorationRate) { //choose random action or choose action with best reward -- problem: how many actions are there?
        //if the state has never been visited or we choose to explore then choose a random action
        if( !(this.qtable.hasOwnProperty(s.toString())) ||Math.random() < explorationRate) {
            return this.chooseRandomAction(actCount);
        }

        //pick action which maximises the expected reward
        let maxReward = Number.NEGATIVE_INFINITY;
        let actionNum = -1;

        for(let i = 0;i<actCount; i++) {
            let currentActions = this.qtable[s.toString()]; //stores the current actions that can be performed in the given state s
            if(currentActions[i] > maxReward) {
                actionNum = i;
                maxReward = currentActions[i];
            }

        }
        this.actionChosen = actionNum;
    }

    chooseRandomAction(actCount) {
       this.actionChosen =  Math.floor(Math.random() * actCount);
    }

    maxExpectedReward(state) {
        if(this.qtable[state.toString()] === undefined) {
            this.qtable[state.toString()] = {};
            return 0;
        }
        let actions = this.qtable[state.toString()];
        let maxReward = Number.NEGATIVE_INFINITY;
        for(let i = 0;i<actions.length;i++) {
            if(actions[i] > maxReward) {
                maxReward = actions[i];
            }
        }
        return maxReward;
    }

    updateQtable(action, reward, discountRate, learningRate, rewardNextState) {
        if(this.qtable[this.actionChosen.toString()] === undefined) {
            this.qtable[this.actionChosen.toString()] = {};
            this.qtable[this.actionChosen.toString()][action] = 0
        }
        let qvalue = this.qtable[this.actionChosen.toString()][action];
        let delta_qvalue = reward + discountRate * (rewardNextState) - qvalue;
        this.qtable[this.actionChosen.toString()][action] += learningRate * delta_qvalue ;
    }
}