// components/PaymentSubscription.jsx
import React from "react";

const PaymentSubscription = () => {
  // Subscription plans data
  const subscriptionPlans = [
    {
      title: "Basic Plan",
      price: "$299",
      features: ["Up to 50 job postings", "Basic analytics", "Email support"],
    },
    {
      title: "Pro Plan",
      price: "$499",
      features: [
        "Up to 200 job postings",
        "Advanced analytics",
        "Priority support",
      ],
    },
    {
      title: "Enterprise Plan",
      price: "$999",
      features: ["Unlimited job postings", "Custom analytics", "24/7 support"],
    },
  ];

  // Transaction history data
  const transactions = [
    {
      date: "2024-01-15",
      id: "#1",
      amount: "$299",
      type: "subscription",
      status: "completed",
    },
    {
      date: "2024-01-01",
      id: "#2",
      amount: "$499",
      type: "addon",
      status: "completed",
    },
    {
      date: "2023-12-15",
      id: "#3",
      amount: "$299",
      type: "subscription",
      status: "failed",
    },
  ];

  return (
    <>
      {/* Subscription Plans */}
      <div className="bg-white rounded-md shadow-sm p-6 mb-8">
        <h2 className="text-lg font-medium mb-6">Subscription Plans</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subscriptionPlans.map((plan, index) => (
            <div
              key={index}
              className="border rounded-md p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-medium mb-2">{plan.title}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-2xl font-bold">{plan.price}</span>
                <span className="text-sm text-gray-500 ml-1">/month</span>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors">
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-md shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium">Transaction History</h2>
          <button className="bg-black text-white px-4 py-1 rounded text-sm hover:bg-gray-800 transition-colors">
            Manage Pricing
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Date
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Transaction ID
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Amount
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Type
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="py-3 px-4">{transaction.date}</td>
                  <td className="py-3 px-4">{transaction.id}</td>
                  <td className="py-3 px-4">{transaction.amount}</td>
                  <td className="py-3 px-4">{transaction.type}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-block px-2 py-1 text-xs rounded-full ${
                        transaction.status === "completed"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PaymentSubscription;
