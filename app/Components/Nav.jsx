import logo from './app/media/Logo.png'

const Nav = () => {
    const items=[{
        name:"FEATURES",
        link:"#features"
    },
    {
         name:"devlopers",
        link:"#developers"
    },
    {
         name:"company",
        link:"#company"
    },
    {
         name:"BLOG",
        link:"#blog"
    },
    {
         name:"changelog",
        link:"#changelog"
    }

]

  return (
    <div>
        <Image src={logo}/>
    </div>
  )
}

export default Nav