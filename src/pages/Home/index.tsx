import React, { useEffect, useState } from 'react'
import { IListing } from '../../interfaces'
import { Header } from '../../components/Header'
import { Listing } from '../../components/Listing'
import { api } from '../../services/api'

const Home: React.FC = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    api.get('/data').then(response => {
      console.log(response, 'teSTET')
      setProducts(response.data)
    })
  }, [])

  // const name = 'Nome do Produto'
  // const id = 'jdge73e73uine'
  // const category = {
  //   id: 'idAqui',
  //   name: 'Categoria',
  // }
  // const images = {
  //   src: 'https://picsum.photos/id/237/200/300',
  //   id: 'cachorrinho',
  // }
  // função para listar os items e renderizar em <Listing />
  const items = [
    {
      name: 'Nome do Produto',
      id: 'jdge73e73uine',
      category: {
        id: 'idAqui',
        name: 'Categoria',
      },
      images: {
        src: 'https://picsum.photos/id/237/200/300',
        id: 'cachorrinho',
      },
    },
  ]

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">{listItems}</div>
      </div>
    </>
  )
}

// const filterItems = (items: IListing[], search: string) => {
//   return setProducts(response.data).filter(item => {
//     console.log(items, 'lista filtrada')
//     return item.category.name.toLowerCase().includes(search.toLowerCase())
//   })
// }

//   return (
//     <>
//       <Header />
//       <body>
//         <div>
//           <input type="text" placeholder="Pesquisar" />
//           {/* <ul>
//             {filterItems(products, name).map(item => (
//               <Listing key={item.id} {...item} />
//             ))}
//           </ul> */}
//           <ul>
//             <li>

//             </li>
//           </ul>
//         </div>
//         <Listing key={id} name={name} category={category} images={images} />
//       </body>
//     </>
//   )
// }

export default Home
