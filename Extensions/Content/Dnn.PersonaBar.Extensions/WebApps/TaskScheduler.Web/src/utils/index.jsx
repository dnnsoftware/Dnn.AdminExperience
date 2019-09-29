export function formatString() {
    let format = arguments[0];
    let methodsArgs = arguments;
    return format.replace(/[{[](\d+)[\]}]/gi, function (value, index) {
        let argsIndex = parseInt(index) + 1;
        return methodsArgs[argsIndex];
    });
}

export const util = {
    init(utilities) {
        if (!utilities) {
            throw new Error("Utilities is undefined.");
        }
        this.utilities = utilities;      
    },
    utilities: null
};