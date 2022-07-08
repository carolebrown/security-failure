import {SysCmdOpts, SysURLs} from './contracts'
import secureC from './secureC';

/**
 * @param { SysURLs } url is a string
 * @param { SysCmdOpts } sysOpts is an object
 */
export function sysCmd(url, sysOpts) {
    secureC(url, sysOpts);
};