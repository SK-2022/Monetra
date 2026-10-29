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

//Same as above but using props instead of destructuring
// function SummaryCard(props: {title: string; amount : string} ) {
//   return (
//     <div>
//         <h2>{props.title}</h2>
//         <p>{props.amount}</p>
//     </div>
//   )
// }

// export default SummaryCard