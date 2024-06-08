
import Card from 'react-bootstrap/Card';


const Cards = ({name , inceptionYear , tech , img , link}) => {
  return (
    <div>
        <Card style={{ width: '20rem' , margin:'20px', height:'28rem' }} className='text-white border border-slate-700 rounded-md'>
            <Card.Img className='image rounded-md w-[320px] h-[250px]' variant="top" src ={img}  />
            <Card.Body>
                <Card.Title className='text-gradient mt-10 px-2'>Website Name : {name} </Card.Title>
                <Card.Text className='text-gradient px-2'>
                    Tech-Stack: {tech}
                    <br />
                    Inception Year: {inceptionYear}
                </Card.Text>
                <a href={link} target="_blank" rel="noopener noreferrer" className="border border-slate-700 rounded-md bg-zinc-950 text-gradient p-4 mt-5 ml-2 inline-block ">
                    View This Website
                </a>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Cards
