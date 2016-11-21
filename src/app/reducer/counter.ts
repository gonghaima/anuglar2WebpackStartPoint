export const counter = (state:number = 0, action:any) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
            
        case "DECREMENT":
            return state - 1;
            
        default:
            return state;
    }
};
export const textModifier = (state:string ="initial text", action:any) => {
    switch (action.type) {
        case "a":
            return state + action.payload;
            
        case "b":
            return state + "-bbb-";
            
        default:
            return state;
    }
};
