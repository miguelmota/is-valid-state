# is-valid-state

Validate U.S. state

# Install

```bash
npm install is-valid-state
```

# Usage

```javascript
var isValidState = require('is-valid-state');

isValidState('CA') // true
isValidState('ca') // false
isValidState('ca', {caseInsensitive: true}) // true
isValidState('FZ') // false
isValidState('AZ') // true
```

# License

MIT
