const crypto = require('crypto')
module.exports.createToken = token => {
  const ary = token.split(".");
  if (ary.length !== 3) {
    return;
  }

  return {
    getExp: () => {
      const [a, b, c] = token.split(".");
      const obj_str = Buffer.from(b, "base64").toString("ascii");
      const data = JSON.parse(obj_str);
      return data.exp;
    },

    verify: key => {
      const hmac = crypto
        .createHmac("SHA256", key)
        .update(ary[0] + "." + ary[1])
        .digest("base64");
      return hmac === ary[2] + "=";
    },
  };
}