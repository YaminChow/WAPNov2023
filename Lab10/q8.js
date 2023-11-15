const result = (function(exports, module){
    exports = module.exports;
    exports.firstname = 'John';
    module.exports.lastname = 'Smith';
    exports = {
        getFullName: function(){
            console.log('John Smith')
        }
    }
    return module.exports;
}).apply(null, [null, {exports: {}}]);
console.log(result);

const resultbind = (function(exports, module){
    exports = module.exports;
    exports.firstname = 'John';
    module.exports.lastname = 'Smith';
    exports = {
        getFullName: function(){
            console.log('John Smith')
        }
    }
    return module.exports;
}).bind(null, null, {exports: {}})();
console.log(resultbind);

const resultCall = (function(exports, module){
    exports = module.exports;
    exports.firstname = 'John';
    module.exports.lastname = 'Smith';
    exports = {
        getFullName: function(){
            console.log('John Smith')
        }
    }
    return module.exports;
}).call(null, null, {exports: {}});
console.log(resultCall);
