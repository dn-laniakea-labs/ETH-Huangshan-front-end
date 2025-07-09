"use client";

import { FC, useState } from "react";
import { AccordionItem } from "../AccordionItem";

const estimatorList: number[] = [500, 1000, 1500, 2000, 3000, 4000, 5000, 10000, 20000, 30000, 50000, 100000];

const QAList = [
  {
    q: 'Why are influencer prices on UpIO lower than agencies/in-house?',
    a: 'UpIO offers lower influencer prices by replacing costly manual work with AI. We charge just a 10% AI marketer salary (vs. the industry’s 20–50%), use AI to negotiate fairer rates, and rely on a large influencer pool to keep prices competitive and quality stable.',
  },
  {
    q: 'What if the influencer doesn’t deliver or the content doesn’t meet expectations?',
    a: 'UpIO offers full refunds if influencers miss deadlines, deliver low-quality or fully AI-generated content, or use fake views. You’re protected by a clear, performance-based policy and can cancel anytime if expectations aren’t met.',
  },
  {
    q: 'What payment methods does UpIO receive?',
    a: 'UpIO supports both credit/debit card binding and funds top-up as payment methods. For bank transfers or other alternative options, please contact our support team for assistance.',
  },
  {
    q: 'How is the influencer price calculated?',
    a: 'UpIO automatically sets the optimal price for you—calculated by multiplying the influencer’s estimated lowest CPM (based on their audience value) with the predicted views of their branded content.',
  },
  {
    q: 'Can I negotiate the price with the influencer?',
    a: 'UpIO negotiates the best price for you, so you don’t have to. Some influencers may even offer lower rates than the AI’s suggestion to show their interest and commitment.',
  },
  {
    q: 'When will I be charged?',
    a: 'Influencer campaigns – Make a one-time payment when you confirm an influencer\'s application. The funds are held in escrow and released only after the collaboration is completed. Affiliate campaigns – Pay the AI marketer’s salary only when an affiliate deal is confirmed. Commissions are paid out 30 days after each sale.',
  },
]

export const InfluencerComponent: FC<{}> = () => {
  const [checkedEstimator, setCheckedEstimator] = useState<number>(1500);
  return <main className="bg-gray-950 min-h-lvh px-18">
    <h2 className="text-white text-4xl font-extralight text-center pt-20">Outcome-based pricing</h2>
    <p className="text-gray-400 text-center mt-9">Pay only when a desired outcome is achieved, such as influencer-generated content and an established affiliate.</p>

    <div className="bg-gray-50 rounded-xl mt-10 py-8 px-5">
      <div className="border-b-1 border-b-gray-400 pb-8">
        <h3 className="text-2xl font-bold">Influencer marketing</h3>
        <p className="text-sm text-gray-400">Best for brands looking to elevate awareness and build trust</p>
        <p className="mt-6 font-bold">You pay :</p>
        <ul>
          <li>
            <span>One-time fee to influencers</span>
            <span>(per influencer content)</span>
          </li>
          <li>
            <span>AI marketer salary</span>
            <span>(10% of the deal price)</span>
          </li>
          <li>
            <span>No upfront fees</span>
          </li>
        </ul>
      </div>
      <div className="pt-8">
        <p className="text-md font-semibold">Budget-to-Return Estimator</p>
        <select id="hs-select-label" className="py-3 px-4 pe-9 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" value={checkedEstimator} onChange={({ target: { value } }) => setCheckedEstimator(Number(value))}>
          {estimatorList.map((item, index) => <option key={index + "-" + item} value={item}>{item} USD</option>)}
        </select>
        <div className="flex justify-between w-full mt-3">
          <p>AI marketer salary</p>
          <p>${Math.floor(checkedEstimator * 0.1)} </p>
        </div>
        <div className="flex justify-between w-full mt-3">
          <p>Total</p>
          <p>${Math.floor(checkedEstimator * 1.1)} USD</p>
        </div>
      </div>

      <button className="bg-orange-500 text-white text-center w-full h-10 rounded-xl mt-8">Start for free</button>
    </div>

    <div className="pb-20">
      <h3 className="my-8 text-2xl text-white text-center">Frequent asked questions</h3>
      {QAList.map(({ q, a }) => <AccordionItem key={q} title={q}>
        <span>{a}</span>
      </AccordionItem>)}
    </div>

  </main>;
}
