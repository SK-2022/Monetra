import SummaryCard from "./components/SummaryCard";

export default function App() {
  return (
    <>
      <h1>Monetra</h1>
      <p>Month of November</p>
      <SummaryCard title="Balance" amount="$10,000,000"/>
      <SummaryCard title="Income" amount="$1,000,000" />
      <SummaryCard title="Expenses" amount="$300,000" />
    </>
  );
}
