import { RadioGroup, Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useWeb3React } from "@web3-react/core"
import Web3 from "web3";
import { injected } from "../utils/script/connectors"
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


const mintViaMeta = async (web3, sender, mint_num) => {

  const MyContract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
  
  console.log("Contract Info")
  console.log(MyContract)
  console.log(`payWithMetamask(receiver=${CONTRACT_ADDRESS}, sender=${sender}, mint_num=${mint_num})`)

  try {
      const paramsEst = {
        from: sender.toString(), 
        value: 60000000000000000, 
        gas: 30000000
      }
      const block = await web3.eth.getBlock("latest");
      const gasPrice = await web3.eth.getGasPrice(); //這樣嗎 
      // const gasLimit = block.gasLimit/block.transactions.length;
      const gasLimit = await MyContract.methods.mintNFT(mint_num.toString()).estimateGas(paramsEst)
      console.log(`gasPrice = ${gasPrice}`)
      console.log(`gasLimit = ${gasLimit}`)
      const params = {
            from: sender.toString(),
            gas: gasLimit, //那這邊要設多少 對阿
            value: 60000000000000000,
            gasPrice: gasPrice*30,
            maxFeePerGas: gasPrice*35, // 其他都對了嗎  目前參數都對嗎
            maxPriorityFeePerGas: gasPrice*34,
      };
     
      // await MyContract.methods.mintNFT(mint_num.toString()).send(params) //OK?
      console.log('success');
  } catch(e) {
      console.log("payment fail!");
      console.log(e); 
  }
}


export default function Mint() {
  let [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(plans[0]);

  function closeModal() {
    setIsOpen(false);
    mintAGIB(selected.mint);
  }

  function openModal() {
    setIsOpen(true);
  }

  // transaction start here
  const {account, library, activate, deactivate} = useWeb3React()
  
  const mintAGIB = async (mint_num) => {
    try {
      console.log("Activating ...")
      await activate(injected)
      console.log("Library Info")
      console.log(library)
      await mintViaMeta(library, account, mint_num)
      // console.log("Deactivating ...")
      // deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }




  return (
    <>
      <button
        disabled
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
