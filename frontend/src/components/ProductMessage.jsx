import Message from "./template/Message";

/**
   {
    "id": "1",
    "name": "Blue Shirt",
    "price": "1500",
    "category": "Shirts",
    "totalSales": "10",
    "src": "https://i.imgur.com/siwnKFG.jpeg"
  },
 */

const ProductMessage = ({ name, price, category, src: imgURL, ...props }) => {
  return (
    <Message className="bg-orange-50 float-left p-4">
      <div className="flex w-80 items-center my-1">
        <img
          src={imgURL}
          alt="Blind People FO"
          className="h-20 w-20 rounded-sm"
        />
        <div className="flex flex-col mx-4">
          <span className="mt-1 font-semibold">{name}</span>
          <span className="mb-2 text-sm text-slate-600">{category}</span>
          <div className="text-sm text-slate-600 font-semibold font-mono">
            <span>Rs. {price}</span>
          </div>
        </div>
      </div>
    </Message>
  );
};

export default ProductMessage;
