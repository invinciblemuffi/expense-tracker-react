const ExpenseView = (props) => {
  const expData = props.expData;
  return (
    <table className="table table-dark my-4 table-bordered table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Expense Name</th>
          <th scope="col">Expense Amt</th>
          <th scope="col">Expense Date</th>
        </tr>
      </thead>
      <tbody>
        {expData !== [] &&
          expData.map((d, i) => (
            <tr key={Math.random() * i}>
              <th scope="row">{i + 1}</th>
              <td>{d.expName}</td>
              <td>{d.expAmt}</td>
              <td>{d.expDate}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
export default ExpenseView;
