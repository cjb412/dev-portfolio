import IndexBarButton from "./IndexBarButton"

const IndexBar = () => {
  return (
    <div className='index-bar'>
        <IndexBarButton text="About Me"/>
        <IndexBarButton text="Experience"/>
        <IndexBarButton text="Projects"/>
        <IndexBarButton text="Contact"/>
    </div>
  )
}

export default IndexBar