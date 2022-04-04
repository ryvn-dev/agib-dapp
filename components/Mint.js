import { RadioGroup, Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import { injected } from "../utils/script/connectors";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../utils/data/contractInfo";

const plans = [
  {
    mint: 1,
    name: "One AGIB Girl",
    ram: "0.05 ETH",
    disk: "AGIB",
  },
  {
    mint: 2,
    name: "Two AGIB Girls",
    ram: "0.09 ETH",
    disk: "AGIB",
  },
];

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function formatFeeHistory(result, includePending, historicalBlocks) {
  let blockNum = Number(result.oldestBlock);
  let index = 0;
  const blocks = [];

  while (blockNum < Number(result.oldestBlock) + historicalBlocks) {
    blocks.push({
      number: blockNum,
      baseFeePerGas: Number(result.baseFeePerGas[index]),
      gasUsedRatio: Number(result.gasUsedRatio[index]),
      priorityFeePerGas: result.reward[index].map((x) => Number(x)),
    });
    blockNum += 1;
    index += 1;
  }

  if (includePending) {
    blocks.push({
      number: "pending",
      baseFeePerGas: Number(result.baseFeePerGas[historicalBlocks]),
      gasUsedRatio: NaN,
      priorityFeePerGas: [],
    });
  }
  return blocks;
}

const mintViaMeta = async (web3, sender, mint_num) => {
  const VALUE = mint_num == 1 ? "50000000000000000" : "90000000000000000";
  const MyContract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

  console.log("Contract Info");
  console.log(MyContract);
  console.log(
    `payWithMetamask(receiver=${CONTRACT_ADDRESS}, sender=${sender}, mint number=${mint_num})`
  );

  try {
    const paramsEst = {
      from: sender.toString(),
      value: VALUE,
      gas: 80000000,
    };

    // OLD METHOD
    // const block = await web3.eth.getBlock("latest");
    // const gasPrice = await web3.eth.getGasPrice();
    // const gasLimit = block.gasLimit/block.transactions.length;

    // param=> block count, , PR
    const historicalBlocks = 4;
    const feeHistory = await web3.eth.getFeeHistory(
      historicalBlocks,
      "pending",
      [10, 50]
    );
    const blocks = formatFeeHistory(feeHistory, false, historicalBlocks);
    console.log(blocks);

    const BASE = blocks[blocks.length - 1].baseFeePerGas;
    // const PRIORITY = blocks[blocks.length - 1].priorityFeePerGas[0]
    const PRIORITY = 2500000000;
    const MAX = parseInt(1.2 * BASE + PRIORITY);

    // console.log(BASE)
    // console.log(PRIORITY)
    // console.log(MAX)
    
    try {
        const gasLimit = await MyContract.methods
        .mintNFTDuringPresale(mint_num.toString())
        .estimateGas(paramsEst);
    } catch (err) {
        alert("Your ETH is not enough!")
        alert(err.message)
    }
    
    const gasLimit = await MyContract.methods
        .mintNFTDuringPresale(mint_num.toString())
        .estimateGas(paramsEst);

    console.log(`gas = ${gasLimit}`)
    
    const params = {
      from: sender.toString(),
      gas: parseInt(gasLimit * 1),
      value: VALUE,
      maxFeePerGas: MAX,
      maxPriorityFeePerGas: PRIORITY,
    };

    console.log("Param Info");
    console.log(params);
    const t1 = await MyContract.methods.totalSupply().call();
    const receipt = await MyContract.methods
      .mintNFTDuringPresale(mint_num.toString())
      .send(params); //OK?
    const t2 = await MyContract.methods.totalSupply().call();

    console.log(`I have minted ${t2 - t1} NFTs`);
    console.log(receipt);
    console.log("Success");
  } catch (err) {
    console.log("Payment Fail!");
    console.log(err);
  }
};

export default function Mint() {
  let [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(plans[0]);

  function closeModal() {
    setIsOpen(false);
    mintAGIB(selected.mint);
  }

  function openModal() {
    syncAGIB();
    setIsOpen(true);
  }

  // transaction start here
  const web3react = useWeb3React();

  const mintAGIB = async (mint_num) => {
    try {
      // console.log("Activating ...")
      // await web3react.activate(injected)
      console.log("Library Info");
      console.log(web3react.library);
      await mintViaMeta(web3react.library, web3react.account, mint_num);
      // console.log("Deactivating ...")
      // deactivate()
    } catch (ex) {
      console.log(ex);
    }
  };

  const syncAGIB = async () => {
    try {
      console.log("Activating ...");
      await web3react.activate(injected);
    } catch (ex) {
      console.log(ex);
      alert("Cannot Connect to Your Wallet!");
    }
  };

  return (
    <>
      <button
        // disabled
        type="button"
        onClick={openModal}
        className="px-4 py-2 w-full text-xl font-bold tracking-widest text-agib-blue border-2 border-agib-blue rounded-md hover:border-agib-pink hover:bg-agib-pink hover:text-white"
      >
        MINT
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  How Many AGIB Girls You Want To Rescue?
                </Dialog.Title>

                <div className="w-full px-4 pb-4 pt-6">
                  <div className="w-full max-w-md mx-auto">
                    <RadioGroup value={selected} onChange={setSelected}>
                      <RadioGroup.Label className="sr-only">
                        Server size
                      </RadioGroup.Label>
                      <div className="space-y-2">
                        {plans.map((plan) => (
                          <RadioGroup.Option
                            key={plan.name}
                            value={plan}
                            className={({ active, checked }) =>
                              `${
                                active
                                  ? "ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60"
                                  : ""
                              }
                            ${
                              checked
                                ? "bg-rose-400 bg-opacity-75 text-white"
                                : "bg-white"
                            }
                              relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <div className="flex items-center justify-between w-full">
                                  <div className="flex items-center">
                                    <div className="text-sm">
                                      <RadioGroup.Label
                                        as="p"
                                        className={`font-medium  ${
                                          checked
                                            ? "text-white"
                                            : "text-gray-900"
                                        }`}
                                      >
                                        {plan.name}
                                      </RadioGroup.Label>
                                      <RadioGroup.Description
                                        as="span"
                                        className={`inline ${
                                          checked
                                            ? "text-sky-100"
                                            : "text-gray-500"
                                        }`}
                                      >
                                        <span>{plan.ram}</span>{" "}
                                        <span aria-hidden="true">&middot;</span>{" "}
                                        <span>{plan.disk}</span>
                                      </RadioGroup.Description>
                                    </div>
                                  </div>
                                  {checked && (
                                    <div className="flex-shrink-0 text-white">
                                      <CheckIcon className="w-6 h-6" />
                                    </div>
                                  )}
                                </div>
                              </>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="mt-4 w-full flex justify-end pr-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Save Them !
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
