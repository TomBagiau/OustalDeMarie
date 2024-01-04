import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { Link } from 'react-router-dom';
  import "./Home.css"
   
  export default function Cards() {
    return (
      <div className="flex flex-wrap justify-around items-center mx-auto center">
        <Card className="sm:w-1/2 mt-5 md:w-1/2 lg:w-1/4 xl:w-1/4 my-2 mx-2 mt-10 cart text-white">
          <CardHeader color="blue-gray" className="relative h-72">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-img"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h3" color="blue-gray" className="mb-2">
              Le Gîte
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Link to="/la-maison">
              <Button className="button">Voir plus</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 my-2 mx-2 mt-10 cart text-white">
          <CardHeader color="blue-gray" className="relative h-72">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-img"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h3" color="blue-gray" className="mb-2">
              Les activités
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
          <Link to="/activites">
            <Button className="button">Découvrir</Button>
          </Link>
          </CardFooter>
        </Card>

        <Card className="sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 my-2 mx-2 mt-10 cart text-white">
          <CardHeader color="blue-gray" className="relative h-72">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-img"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h3" color="blue-gray" className="mb-2">
              Réserver
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Link to="/reserver">
              <Button className="button">Réserver</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

    );
  }