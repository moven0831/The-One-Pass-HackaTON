import * as fs from "fs";
import { Cell, toNano } from "ton-core";
import { Blockchain, OpenedContract, TreasuryContract } from "@ton-community/sandbox";
import HelloWorld from "./Hello-World";
import "@ton-community/test-utils"; // register matchers

describe("HelloWorld tests", () => {
  let blockchain: Blockchain;
  let wallet1: OpenedContract<TreasuryContract>;
  let helloWorldContract: OpenedContract<HelloWorld>;

  beforeEach(async () =>  {
    // prepare HelloWorld's initial code and data cells for deployment
    const helloWorldCode = Cell.fromBoc(fs.readFileSync("build/hello-world.cell"))[0]; // compilation output from tutorial 2
    const initialhelloWorldValue = 17; // no collisions possible since sandbox is a private local instance
    const helloWorld = HelloWorld.createForDeploy(helloWorldCode, initialhelloWorldValue);

    // initialize the blockchain sandbox
    blockchain = await Blockchain.create();
    /* To increase the verbosity of testing */
    // blockchain.verbosity = {
    //   blockchainLogs: true,
    //   vmLogs: "vm_logs_full",
    //   debugLogs: true,
    // }
    wallet1 = await blockchain.treasury("user1");

    // deploy helloWorld
    helloWorldContract = blockchain.openContract(helloWorld);
    await helloWorldContract.sendDeploy(wallet1.getSender());
  }),

  it("should run the first test", async () => {
    // currently empty, will place a test body here soon
  });

  it("should get counter value", async () => {
    const value = await helloWorldContract.getCounter();
    expect(value).toEqual(17n);
  });

  it("should increment the counter value", async () =>  {
    await helloWorldContract.sendIncrement(wallet1.getSender());
    const counterValue = await helloWorldContract.getCounter();
    expect(counterValue).toEqual(18n);
  })

  it("should send ton coin to the contract", async () => {
    console.log("sending 7.123 TON");
    await wallet1.send({
      to: helloWorldContract.address,
      value: toNano("7.123")
    });
  });

  it("should increment the counter value", async () =>  {
    console.log("sending increment message");
    await helloWorldContract.sendIncrement(wallet1.getSender());
  })
});
