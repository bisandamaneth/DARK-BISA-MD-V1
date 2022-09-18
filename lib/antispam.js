//════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 𝗗𝗔𝗥𝗞 𝗕𝗜𝗦𝗔 𝗠𝗗❤️. 𝗗𝗔𝗥𝗞 𝗕𝗜𝗦𝗔 𝗠𝗗❤️
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//

// Message Filter / Message Cooldowns
const usedCommandRecently = new Set();

const isFiltered = (from) => {
    return !!usedCommandRecently.has(from);
};

const addFilter = (from) => {
    usedCommandRecently.add(from);
    setTimeout(() => {
        return usedCommandRecently.delete(from);
    }, 1500);// 1.5 sec is delay before processing next command;
};
module.exports = {
    msgFilter: {
        isFiltered,
        addFilter
    }};
