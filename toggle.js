/**
 * @summary Invert the current value of the ReactiveVar, invalidating the Computations that called `get`.
 * @locus Client
 */
ReactiveVar.prototype.toggle = function () {
  if (typeof this.curValue !== 'boolean')
    // value is not boolean
    throw new Error('Cannot toggle non-boolean value');

  this.curValue = !this.curValue;
  this.dep.changed();
};
