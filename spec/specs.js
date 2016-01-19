describe("formatString", function(){
  it("is unformatted string with spaced, punction, and cased characters",function(){
    expect(formatString("Hi! Bob.")).to.equal("hibob");
  });

});

describe("mathString", function(){
it("will take the square root of the lenght of the string",function(){
  expect(mathString("hibob")).to.equal(3);
});
});
