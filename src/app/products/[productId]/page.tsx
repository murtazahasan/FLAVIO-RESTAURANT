"use client"
import { useSearchParams } from 'next/navigation';


export default function ProductPage() {
  const [searchParams] = useSearchParams();
  
  // Check if searchParams is undefined
  if (!searchParams) {
    return <div>Error: Unable to retrieve search parameters</div>;
  }

  // Convert searchParams to an object
  const paramsObject: { [key: string]: string } = {};
  for (const param of searchParams.entries()) {
    const [key, value] = param;
    paramsObject[key] = value;
  }

  // Extracting productId from the query parameters
  const { id } = paramsObject || {};

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      {/* Add more product details here */}
    </div>
  );
}
