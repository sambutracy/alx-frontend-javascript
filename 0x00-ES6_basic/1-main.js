import taskBlock from './1-block-scoped';

console.log(taskBlock(true)); // Should log: [ true, false ]
console.log(taskBlock(false)); // Should log: [ false, true ]
