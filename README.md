# minecraft-addon-toolchain-jsonvalidator
JSON validator for [minecraft-addon-toolchain](https://github.com/minecraft-addon-tools/minecraft-addon-toolchain). Validates each json file in the add-on. Build is halted if there are errors.

Currently this only checks for parse errors using jsonlint.

### Installing
```powershell
npm install --save-dev minecraft-addon-toolchain-jsonvalidator
```

### Adding to the toolchain
```javascript
const MinecraftAddonBuilder = require('minecraft-addon-toolchain/v1')
const JSONValidator = require('minecraft-addon-toolchain-jsonvalidator')

const builder = new MinecraftAddonBuilder(<youraddonname>)
builder.addPlugin(new JSONValidator())

module.exports = builder.configureEverythingForMe();
```

### Usage
There is nothing you need to do. Your JSON files will be automatically validated during the build task.
