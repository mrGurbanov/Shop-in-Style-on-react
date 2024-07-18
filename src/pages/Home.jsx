import Container from '../components/Container';
import Hero from '../components/Hero-section';
import ProductGrid from '../components/ProductGrid';
export default function Home() {
    return (
        <>
            <Hero/>
            <Container className='m-auto'>
                <ProductGrid/>
            </Container>
        </>
    )
}