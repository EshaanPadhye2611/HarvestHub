const FoodItemsTable = () => {
    const foodItems = [
      { food: "Orange", expiry: "Nov. 12, 2024", status: "Expiring Soon" },
      { food: "Apple", expiry: "Jan. 12, 2024", status: "Expired" },
      { food: "Strawberry", expiry: "Jan. 12, 2025", status: "Good" },
      { food: "Mango", expiry: "Jan. 12, 2026", status: "Good" },
    ];
  
    return (
      <div className="bg-white shadow rounded-lg p-4 border border-black">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left p-2 border-b">Food</th>
              <th className="text-left p-2 border-b">Expiry Date</th>
              <th className="text-left p-2 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {foodItems.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="p-2 border-b flex items-center">
                  {/* Image next to food name */}
                  <img src="/diet.png" alt="diet" className="w-6 h-6 mr-2" />
                  {item.food}
                </td>
                <td className="p-2 border-b">{item.expiry}</td>
                <td
                  className={`p-2 border-b ${
                    item.status === "Expired"
                      ? "text-red-600 font-bold"
                      : item.status === "Expiring Soon"
                      ? "text-yellow-600 font-bold"
                      : "text-green-600 font-bold"
                  }`}
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default FoodItemsTable;