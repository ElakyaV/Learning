function checkForCharsInB(arr1, arr2){
	if(arr2.length > arr1.length){
  	return false;
  }
  let count = 0;
  for(let i in arr2){
  	if(arr1.includes(arr2[i])){
    	count++;
    }
  }
  if(count == arr2.length){
  	return true;
  }
  return false;
}

let arr1 = [1, 3, 4, 8, 9, 5, 6];
let arr2 = [1, 6, 8, 4];
console.log(checkForCharsInB(arr1, arr2));

////////////////////////////////////////////////////////////////

let inputValues = ['1', '*', '@']
let outputStrings = []
for (let i = 0, n = inputValues.length; i < n; ++i) {
  outputStrings.push(String(inputValues[i]));
}
console.log(outputStrings);

////////////////////////////////////////////////////////////

function isNil(data){
	if(data == null || data == undefined){
  	return true;
  }
  return false;
}


function createUInt8BufferFromStringBuffer(rawData, length) {
      if(isNil(rawData)) {
        return null;
      }

      if(isNil(length)) {
        length =  rawData.length;
      }

      //if for some reason length is less than rawData.length then simply
      //use rawData.length to create the buffer.
      if(length < rawData.length) {
        length = rawData.length;
      }

      var buffer = new Uint8Array(length);
      //length could be greater than rawData.length, so always loop over the data length.
      for (var i=0, strLen=rawData.length; i<strLen; i++)
      {
        var code = rawData.charCodeAt(i);
        if(code > 255) {
          throw new Error("Encoding error: Input contains element larger than a byte.");
        }
        buffer[i] = code;
      }
      return buffer;
};

function bytesToLongNumber(data, offset) {
      var retVal = new Long(0, null, true);

      if(isNil(data)) {
        throw new Error("Data cannot be null");
      }

      if(data instanceof ArrayBuffer) {
        data = new Uint8Array(data);
      }

      if(isNil(offset)) {
        offset = 0;
      }

      if(data.byteLength === 0) {
        return retVal;
      }

      if(data.byteLength < offset + 4) {
        return retVal;
      }

      // var firstByteToLong   = new Long(byteToNumber(data[offset]), null, true);
      // var secondByteToLong  = new Long(byteToNumber(data[offset + 1]) << 8, null, true);
      // var thirdByteToLong   = new Long(byteToNumber(data[offset + 2]) << 16, null, true);
      // var fourthByteToLong  = new Long(byteToNumber(data[offset + 3]) << 24, null, true);

      //no need to convert to Long coz Uint8 & 255 is still goign to be less than 255.
      var firstByteToLong   = new Long(data[offset], null, true);
      var secondByteToLong  = new Long(data[offset + 1] << 8, null, true);
      var thirdByteToLong   = new Long(data[offset + 2] << 16, null, true);
      var fourthByteToLong  = new Long(data[offset + 3] << 24, null, true);

      retVal = retVal.add(firstByteToLong);
      retVal = retVal.add(secondByteToLong);
      retVal = retVal.add(thirdByteToLong);
      retVal = retVal.add(fourthByteToLong);

      return retVal;
    };

function calculateChecksum(checksum, data, offset, size) {
      if(isNil(data)) {
        throw new Error("Data cannot be null");
      }

      if(isNil(offset)) {
        offset = 0;
      }

      if(isNil(size)) {
        size = data.byteLength - offset;
      }

      //no idea why or who picked this number. But that is what that gets used.
      var initialCRC = new Long(0x12052010, null, true);

      if(data instanceof ArrayBuffer) {
        data = new Uint8Array(data);
      }

      checksum = new Long(checksum, null, true);

      if(size === 0) {
        return checksum.xor(initialCRC).toNumber();
      }

      for(var index =offset; index <= offset + size - 4; index+= 4) {
        var newChecksum = bytesToLongNumber(data, index);
        checksum = checksum.xor(newChecksum);
      }

      if(index < offset + size) {
        // This assumes machine is little endian.
        var mask = [0x10, 0x20, 0x5, 0x12];
        var maskCounter = 0;
        var length = offset + size - index;
        for(var newIndex = 0; newIndex < length; newIndex++) {
          var byte = data[index++];
          mask[newIndex] = byte;
        }
        checksum = checksum.xor(bytesToLongNumber(new Uint8Array(mask), 0));
      }
      return checksum.toNumber();
 };
    
function createChallenge(){
		let naGuid = "";
    let challengeKey = createUInt8BufferFromStringBuffer("elakya");
    /* let salt = createUInt8BufferFromStringBuffer(forge.random.getBytesSync(256));
    
    
    let checksum = calculateChecksum(0, salt);
    console.log(checksum); */
    
    //AWS - Challenge Data.privateKey (AES Key);
    
    let iv = createUInt8BufferFromStringBuffer(forge.random.getBytesSync(16));
    let encrypedChallenge =  encryptData('AES-CBC', challengeKey, realChallengeIV, privateKey, false, false);
    
}

createChallenge();