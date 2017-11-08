class Copado {
  responses = [
    `Server is down.`,
    `Someone is working on this now.`,
    `Current stop: 3d cycle of the hell.`,
    `Can't be done now.`,
    `Bad connection.`,
    `404 ERROR`,
    `500 ERROR`,
    `We are busy now.`,
    `We are in the middle of somehting :(.`,
    `The guy from other side of building is currently doing that.`,
    `Nice attempt, but no.`,
    `Sorry.`,
    `Funny thing, I do not have conciosness, but I can bitch about this action.`,
    `Good idea, but no.`,
    `Opps, something went wrong.`,
    `Shh! I am wathing TV now.`
  ];

  deploy() {
    console.log(this.responses[Math.floor(Math.random()*this.responses.length)]+ ` Try again later.`);
  }
}

let c = new Copado;
c.deploy();
