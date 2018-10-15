import { get } from 'lodash-es';
import { includeOnlyUsedFunctionFromLodash } from 'moduleA';

const anObject = { foo: 'bar' };
console.log(get(anObject, 'foo')); // bar
includeOnlyUsedFunctionFromLodash();
