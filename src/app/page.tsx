import {Button} from "@/components/ui/button";
import {products} from "@/lib/interfaces";
import {users} from "@/lib/interfaces";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
  return (
    <section className="flex justify-center">
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id}>
              <div className="p-1">
                <Card>
                  <CardHeader>
                    <img
                      alt={product.name}
                      className="border-opacity-1 mb-2 rounded-[18px] border-2 border-gray-300"
                      src={product.image}
                    />
                    <CardTitle>{product.name} </CardTitle>
                    <CardDescription> {product.price} </CardDescription>
                  </CardHeader>
                  <CardContent className="tracking-tight">
                    <p> {product.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className=" mr-3 hover:bg-neutral-200" size="icon">
                      👍
                    </Button>
                    <Button className=" hover:bg-neutral-200" size="icon">
                      👎
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
