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

describe("rectString", function(){
it("will take every 'n' set of words",function(){
  expect(rectString("hibob")).to.equal("hib");
  });
});
