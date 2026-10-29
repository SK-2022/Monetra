//Transaction
function TransactionItem({
  date,
  details,
  category,
  amount,
}: {
  date: string;
  details: string;
  category: string;
  amount: string;
}) {
  return (
    <div>
      <div>
        <p>{date}</p> <span>{category}</span>
      </div>

      <div>
        <p>{details}</p>
      </div>

      <div>
        <p>{amount}</p>
      </div>
    </div>
  );
}

export default TransactionItem;
