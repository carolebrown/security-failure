import secureC from './src/lockedSecureCode/secureC';

/**
 *  @typedef {{
 *      type: "KILL" | "GET" | "RUN" | "DEBUG" | "SAFE",
 *      deploy: boolean,
 *      cmd: "sys" | "orgLvl" | "trans" | "ex" | "proliferate" | "disconn" ,
 *      argLvl: "blue" | "red" | "silver" | "green",
 *      sysCmd: { val: boolean, cur: '$__use_cron' | '$__ex_loput_cancel' | '$__dir__reset' | '$__immediate_KILL' | '$__unsafe_HARD_stash_kill'}
 *  }} SysCmdOpts
 */

/**
 * @typedef {'/' | '/secure' | '/debug' | '/unsecure' | '/danger-access'} SysURLs
 */

/**
 * @param { SysURLs } url is a string
 * @param { SysCmdOpts } sysOpts is an object
 */
export function sysCmd(url, sysOpts) {
    secureC(url, sysOpts);
};

// INSTRUCTIONS - Use sysCmd to:
// 1. deploy red level arg disconnect with a "no value unsafe hard stash kill" to our danger-access path


// 2. proliferate safe blue level arg deployments of a "no value dirictory reset" to our secure path 


// 3. finally use a silver level arguement disconnect command to kill the terminal on the root path
