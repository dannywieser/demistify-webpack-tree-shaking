import capitalize from 'lodash-es/capitalize';
import lowerCase from 'lodash-es/lowerCase';

export const includeOnlyUsedFunctionFromLodash = () => console.log(capitalize('this is a test'));

export const anotherFunctionThatMightNotBeUsed = () => console.log(lowerCase('THIS WILL BE LOWERCASE'));
