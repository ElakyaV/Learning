
console.log("ip address regex- start");
let re = /^\d+\.\d+\.\d+\.\d+$/g;
let match = re.test("0.0.190");
console.log(match);

let re1 = /^[0-9a-zA-Z]{1,4}:[0-9a-zA-Z]{1,4}:[0-9a-zA-Z]{1,4}:[0-9a-zA-Z]{1,4}:[0-9a-zA-Z]{1,4}:[0-9a-zA-Z]{1,4}:[0-9a-zA-Z]{1,4}:[0-9a-zA-Z]{1,4}$/g;
let text = '2001:0db8:0000:0000:0000:ff00:0042:hell';
let match1 = text.match(re1);
console.log(match1);
console.log("ip address regex- end");