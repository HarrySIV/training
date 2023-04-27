const obj = {};

if (Object.keys(obj).length === 0) {
  for (const a in obj) {
    if (!a) {
      console.log(`${a} does not exist`);
    }
  }
  console.log('hmmm');
}
//random code push cuz why not