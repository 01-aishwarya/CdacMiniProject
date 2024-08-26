import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from "./components/library/NavigationBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home} from "./components/ui/Home";
import {ViewAllAnimal} from "./components/ui/ViewAllAnimal";
import { SignUp } from './components/ui/SignUp';
import { Login } from './components/ui/Login';
import { AnimalRegistration } from './components/ui/AnimalRegistration';

import { AddAnimalToDatabase } from './components/ui/AddAnimalToDatabase';
import { ViewAnimalFromDatabase } from './components/ui/ViewAnimalFromDatabase';
import { ViewAnimal } from './components/ui/ViewAnimal';
import { EditAnimalToDatabase } from './components/ui/EditAnimalToDatabase';
import { AdminPage } from './components/ui/AdminPage';
import { GetAllUsers } from './components/ui/GetAllUsers';
import { GetAllAnimals } from './components/ui/GetAllAnimals';
import { SeeQuery } from './components/ui/SeeQuery';
import { MunicipalityPage } from './components/ui/MunicipalityPage';
import { ReplyMuni } from './components/ui/ReplyMuni';
import { ReplyToUser } from './components/ui/ReplyToUser';
import { EditAnimal } from './components/ui/EditAnimal';
import { ContactUs } from './components/ui/ContactUs';
import { AboutUs } from './components/ui/AboutUs';
import { AnimalFirstPage } from './components/ui/AnimalFirstPage';


function App() {
  return (

    
    <BrowserRouter>
    <NavigationBar />
    
    <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/view-all-animal" element={<ViewAllAnimal/>}></Route>
     <Route path="/sign-up" element={<SignUp/>}></Route>
     <Route path="/log-in" element={<Login/>}></Route>
     <Route path="/animal-registration/:username" element={<AnimalRegistration/>}></Route>
     <Route path="/admin-page" element={<AdminPage/>}></Route>
     <Route path="/add-animal-to-database" element={<AddAnimalToDatabase/>}></Route>
     <Route path="/edit-animal-to-database" element={<EditAnimalToDatabase/>}></Route>
     <Route path="/add-animal-to-database/view-animal-from-database/:aname" element={<ViewAnimalFromDatabase />}></Route>
     <Route path="/view-an-username" element={<ViewAnimal/>}></Route>
     <Route path="/see-all-users" element={<GetAllUsers/>}></Route>
     <Route path="/see-all-animals" element={<GetAllAnimals/>} ></Route>
     <Route path="/see-all-query" element={<SeeQuery/>}></Route>
     <Route path="/municipality-page" element={<MunicipalityPage/>}></Route>
     <Route path="/muni-form/:username" element={<ReplyMuni/>}></Route>
     <Route path="/result/:username" element={<ReplyToUser/>}></Route>
     <Route path="/add-animal-to-database/view-animal-from-database/:aname/edit-animal-query/:aname" element={<EditAnimal />}></Route>
     <Route path="/contact-us" element={<ContactUs />}></Route>
     <Route path="/about-us" element={<AboutUs />}></Route>
     <Route path="/view" element={<AnimalFirstPage/>}></Route>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
