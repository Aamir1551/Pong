class Agent {
    constructor() {
        this.qtable = {};
    }

    //chooseAct takes in a state and an actionCount
    //actionCount refers to the maximum number of actions that can be executed at state s
    chooseAct(s, actCount, explorationRate) { //choose random action or choose action with best reward -- problem: how many actions are there?
        //if the state has never been visited or we choose to explore then choose a random action
        if(Math.random() < explorationRate) {
            return Agent.chooseRandomAction(actCount);
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
        return actionNum;
    }

    static chooseRandomAction(actCount) {
       let actionNum =  Math.floor(Math.random() * actCount);
       return actionNum;
    }

    updateQtable(state, action, reward, discountRate, maxNxtReward, learningRate) {
        let qvalue = this.qtable[state.toString()][action];
        let delta_qvalue = reward + discountRate * maxNxtReward - qvalue;
        this.qtable[state.toString()][action] += learningRate * delta_qvalue ;
    }
}