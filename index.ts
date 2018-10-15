import get from 'lodash-es/get';
import { includeOnlyUsedFunctionFromLodash } from 'moduleA/exportB'

const anObject = { foo: 'bar' };
console.log(get(anObject, 'foo')); // bar
includeOnlyUsedFunctionFromLodash();
