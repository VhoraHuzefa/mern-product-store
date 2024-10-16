import { Container, SimpleGrid, Text, textDecoration, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product'
import ProductCard from '../components/ProductCard'

const HomePage = () => {
  const { fetchProduct, products } = useProductStore();
  useEffect(() => {
    fetchProduct();
  }, [fetchProduct])
  console.log("Products", products)

  return (
    <Container maxW='container.xl' py={12}>
      <VStack spacing={8}>
        <Text
          fontsize={{ base: "22", sm: "28" }}
          fontweight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r,cyan.400,blue.500)"}
          bgClip={"text"}
        >
          Current Products 🚀 {"   "}
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w={'full'}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500' >
            No Products Found 😥
            <Text as='span' color='blue.500' _hover={{textDecoration: "underline" }}>
              <Link to={"/create"}>
                Create a Product
              </Link>
            </Text>
          </Text>
        )}
      </VStack>
    </Container>
  )
}

export default HomePage
