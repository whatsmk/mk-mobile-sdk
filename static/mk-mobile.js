define('MK.appLoader', ['MK'], function(mk){return mk.appLoader})
define('MK.utils', ['MK'], function(mk){return mk.utils})
define('MK.component', ['MK'],function(mk){return mk.component})
define('MK.metaEngine', ['MK'], function(mk){return mk.metaEngine})

define('lodash.merge', ['lodash'], function(lodash){return lodash.merge})
define('lodash.curry', ['lodash'], function(lodash){return lodash.curry})
define('lodash.isequal', ['lodash'], function(lodash){return lodash.isEqual})
define('lodash.isEqual', ['lodash'], function(lodash){return lodash.isEqual})
define('lodash.flow', ['lodash'], function(lodash){return lodash.flow})
define('lodash.throttle', ['lodash'], function(lodash){return lodash.throttle})
define('lodash.debounce', ['lodash'], function(lodash){return lodash.debounce})
define('lodash.memoize', ['lodash'], function(lodash){return lodash.memoize})
define('lodash.keys', ['lodash'], function(lodash){return lodash.keys})
define('lodash.get', ['lodash'], function(lodash){return lodash.get})
define('lodash.set', ['lodash'], function(lodash){return lodash.set})
define('lodash.has', ['lodash'], function(lodash){return lodash.has})
define('lodash.isarray', ['lodash'], function(lodash){return lodash.isArray})
define('lodash.isArray', ['lodash'], function(lodash){return lodash.isArray})
define('lodash.issymbol', ['lodash'], function(lodash){return lodash.isSymbol})
define('lodash.isSymbol', ['lodash'], function(lodash){return lodash.isSymbol})
define('lodash.eq', ['lodash'], function(lodash){return lodash.eq})

require.config({
    paths: {
        'react': __require_base_url__ + 'react.development',
        'react-dom': __require_base_url__ + 'react-dom.development',
        'prop-types': __require_base_url__ + 'prop-types',
        'redux': __require_base_url__ + 'redux',
        'react-redux': __require_base_url__ + 'react-redux',
        "moment": __require_base_url__ + 'moment-with-locales',
        'lodash': __require_base_url__ + 'lodash',
        'immutable': __require_base_url__ + 'immutable',
        'MK': __require_base_url__ + 'mk-mobile-core'
    },
    shim: {
        MK: {
            deps: ['css!'+ __require_base_url__ +'mk-mobile.css']
        }
    },
    map: {
        '*': {
            css: __require_base_url__ + 'css.js'
        }
    },
    waitSeconds:0
})

require(['MK'], function (mk) {
    window.MK = mk
    window['mkReady'] &&  window['mkReady'](mk)
})
