import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'

const Product = () => {
  useParams()
  return (
    <>
      <Hero />
    </>
  )
}

export default Product
