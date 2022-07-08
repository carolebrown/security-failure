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

export {SysCmdOpts, SysURLs}