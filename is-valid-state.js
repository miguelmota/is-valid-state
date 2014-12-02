(function(){

  function isValidState(v, opts) {
    if (!v) return false;
    opts = opts || {};
    v = v.toString();
    if (opts.caseInsensitive) {
      v = v.toUpperCase();
    }
    var re = /^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/;
    return re.test(v);
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = isValidState;
  } else {
    window.isValidState = isValidState;
  }

})();
