import { serializeQuestion } from "./question";

describe("Question serializer function", () => {
  it("replaces '&quot;'", () => {
    const res = serializeQuestion("It is always &quot;impossible&quot;");
    expect(res).toEqual('It is always "impossible"');
  });

  it("replaces '&#039;'", () => {
    const res = serializeQuestion("I&#039;m fine. Let&#039;s goooo!!");
    expect(res).toEqual("I'm fine. Let's goooo!!");
  });
});
