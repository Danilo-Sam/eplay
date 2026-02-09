import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import star_wars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Residente evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror.',
    image: resident,
    infos: ['-10%', 'R$ 250,00'],
    system: 'Windows',
    title: 'Resident Evil 4'
  },
  {
    id: 2,
    category: 'RPG',
    description:
      'Diablo é um jogo eletrônico de RPG de ação desenvolvido pela Blizzard North e publicado pela Blizzard Entertainment.',
    image: diablo,
    infos: ['-15%', 'R$ 290,00'],
    system: 'PS4',
    title: 'Diablo'
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Star Wars é uma franquia de mídia americana criada por George Lucas, que começou com o filme homônimo de 1977.',
    image: star_wars,
    infos: ['-10%', 'R$ 230,00'],
    system: 'PS5',
    title: 'Star Wars'
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'The Legend of Zelda é uma série de jogos eletrônicos de ação-aventura criada por Shigeru Miyamoto e desenvolvida pela Nintendo.',
    image: zelda,
    infos: ['-10%', 'R$ 195,00'],
    system: 'Nintendo Switch',
    title: 'Zelda'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description:
      'The Legend of Zelda é uma série de jogos eletrônicos de ação-aventura criada por Shigeru Miyamoto e desenvolvida pela Nintendo.',
    image: zelda,
    infos: ['-10%', 'R$ 195,00'],
    system: 'Nintendo Switch',
    title: 'Zelda'
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Diablo 4 é o quarto título da série Diablo, desenvolvido pela Blizzard Entertainment.',
    image: diablo,
    infos: ['-10%', 'R$ 195,00'],
    system: 'PS5',
    title: 'Diablo 4'
  },
  {
    id: 7,
    category: 'Ação',
    description:
      'The Legend of Zelda é uma série de jogos eletrônicos de ação-aventura criada por Shigeru Miyamoto e desenvolvida pela Nintendo.',
    image: zelda,
    infos: ['-10%', 'R$ 195,00'],
    system: 'Nintendo Switch',
    title: 'Zelda'
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Diablo 4 é o quarto título da série Diablo, desenvolvido pela Blizzard Entertainment.',
    image: diablo,
    infos: ['-10%', 'R$ 195,00'],
    system: 'PS5',
    title: 'Diablo 4'
  }
]
const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="Ação" background="black" />
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
