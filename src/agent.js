class Agent {
    constructor() {
        this.qtable = {};
        this.actionChosen = -1;
    }

    //chooseAct takes in a state, the maximum number of actions that can be performed at state s and explorationRate
    //choose random action or choose action with best reward
    chooseAct(s, actCount, explorationRate) {
        //if the state has never been visited or we choose to explore then choose a random action
        if( !(this.qtable.hasOwnProperty(s.toString())) || Math.random() < explorationRate) {
            console.log("random action has been performed");
            this.chooseRandomAction(actCount);
            return;
        }

        console.log("smart choice");
        //pick action which maximises the expected reward
        //we will loop over every action then choose the action which gives us the highest expected reward
        let maxReward = Number.NEGATIVE_INFINITY; //this part is being repeated in maxExpectedReward TODO need to refactor
        let actions = this.qtable[s.toString()];

        Object.keys(actions).forEach(function(key) {
            if(actions[key] > maxReward) {
                maxReward = actions[key];
                this.actionChosen = key;  //may need to refactor this part
            }
        });
    }

    chooseRandomAction(actCount) {
       this.actionChosen =  Math.floor(Math.random() * actCount);
    }

    maxExpectedReward(state) {
        //if the qtable does not hold any set of actions for that state, then return 0 (as that state has not been visited_
        if(this.qtable[state.toString()] === undefined) {
            this.qtable[state.toString()] = {};
            return 0;
        }
        let actions = this.qtable[state.toString()]; //get all actions that can be performed at this state
        let maxReward = Number.NEGATIVE_INFINITY;

        Object.keys(actions).forEach(function(key) {
            if(actions[key] > maxReward) {
                maxReward = actions[key]
            }
        });

        return maxReward;
    }

    updateQtable(action, reward, discountRate, learningRate, rewardNextState) {
        if(this.qtable[this.actionChosen.toString()] === undefined) {
            this.qtable[this.actionChosen.toString()] = {};
            this.qtable[this.actionChosen.toString()][action.toString()] = 0
        }
        let qvalue = this.qtable[this.actionChosen.toString()][action.toString()];
        let delta_qvalue = reward + discountRate * (rewardNextState) - qvalue;
        this.qtable[this.actionChosen.toString()][action.toString()] += learningRate * delta_qvalue ;
    }
}