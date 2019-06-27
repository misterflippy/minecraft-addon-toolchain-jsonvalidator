const log = require('gulplog');
const jsonlint = require('gulp-jsonlint');

/**
 * @type{IPlugin}
 */

class JSONValidator {
    constructor() {
        this.displayName = "JSONValidator";
        this.sourceTasks = [
            {
                //runs jsonlint
                condition: "**/*.json",
                task: () => jsonlint()
            },
            {
                //reports on any jsonlint errors for this file
                condition: "**/*.json",
                task: () => jsonlint.reporter(file => this.lintReporter(file))
            },
            {
                //causes to wait until after parsing every file to fail if there are errors
                condition: "**/*.json",
                task: () => jsonlint.failAfterError()
            }
        ];
    }

    lintReporter(file) {
        //default reporter uses magenta, which doesn't show up in default powershell, so use a custom reporter here
        //https://github.com/PowerShell/PowerShell/issues/4266
        //log(colors.yellow(`Error in file ${file.path}`))
        //log(colors.red(file.jsonlint.message))
        log.error(`Error in file ${file.path}`);
        log.error(file.jsonlint.message);
    }

    set builder(builder) {
        if (builder._version < 1) {
            throw new Error(
                "JSONValidator support requires using a minecraft-addon-toolchain with at least version 1 or higher"
            );
        }
    }
}


module.exports = JSONValidator;