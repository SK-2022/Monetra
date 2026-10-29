import SummaryCard from "./components/SummaryCard";
import TransactionItem from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

export default function App() {
  return (
    <>
      <h1>Monetra</h1>
      <p>Month of November</p>
      <SummaryCard title="Balance" amount="$10,000,000" />
      <SummaryCard title="Income" amount="$1,000,000" />
      <SummaryCard title="Expenses" amount="$300,000" />
      <AddTransaction />
      <TransactionItem
        date="2026/11/28"
        details="3 bedroom Apartment in Nerimatakanodai"
        category="Housing"
        amount="$500,000"
      />
      <TransactionItem
        date="2026/11/29"
        details="Golds Gym Kanto Membership"
        category="Health"
        amount="$100"
      />
      <TransactionItem
        date="2026/11/29"
        details="SBD Powerlifting Belt 13mm medium"
        category="Health"
        amount="$300"
      />
    </>
  );
}
