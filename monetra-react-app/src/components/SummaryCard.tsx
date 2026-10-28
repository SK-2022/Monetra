//Create a summary card that I can use to display the Balance, Income and Expenses
function SummaryCard({title, amount} : {title: string; amount : string} ) {
  return (
    <div>
        <h2>{title}</h2>
        <p>{amount}</p>
    </div>
  )
}

export default SummaryCard