/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function ProductCard(props) {
  const { productData } = props;

  return (
    <div>
      <div className="grid grid-cols-1 gap-8 px-8 pt-16 pb-8 lg:px-16 md:grid-cols-2 lg:grid-cols-3">
        {productData.map((product, index) => (
          <div key={index}>
            <Card className="w-full h-full">
              <CardHeader shadow={false} floated={false} className="h-full">
                <img src={product.image} alt="Apple AirPods" />
              </CardHeader>

              <CardBody>
                <div className="flex items-center justify-between mb-2">
                  <Typography color="blue-gray" className="font-medium">
                    {product.title}
                  </Typography>

                  <Typography color="blue-gray" className="font-medium">
                    {product.price}
                  </Typography>
                </div>

                <Typography variant="small" color="gray" className="font-normal opacity-75">
                  {product.description}
                </Typography>
              </CardBody>

              <CardFooter className="pt-0">
                <Button
                  ripple={false}
                  fullWidth={true}
                  className="text-white bg-blue-500 border-2 border-blue-500 shadow-none hover:scale-110 hover:shadow-none hover:text-blue-500 hover:bg-white">
                  Order Now
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
