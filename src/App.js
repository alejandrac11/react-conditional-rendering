
import './App.css';
import Attributes from './components/attributes';
import Course from './components/courses';
import Student from './components/students';


function App() {
  return (
    <div className="App">
     <Course CourseName = "Programming 1" /> 
     <br/>
     <br/>
     <Attributes attributeName = "Name" attributeGrade = "Grade" attributeGender = "Gender"/>
     <Student student = {{Name: "Cristian", Grade: 2, Gender: "Male"}}/>
     <Student student = {{Name: "Alejandra", Grade: 5, Gender: "Female"}}/>
     <Student student = {{Name: "José", Grade: 2.8, Gender: "Male"}}/>
     <Student student = {{Name: "Valentina", Grade: 4.5, Gender: "Female"}}/>
     <Student student = {{Name: "Sofía", Grade: 3.1, Gender: "Female"}}/>
     <Student student = {{Name: "Stiven", Grade: 1.5, Gender: "Male"}}/>
     <Student student = {{Name: "Manuela", Grade: 2.9, Gender: "Female"}}/>
     <Student student = {{Name: "Jorge", Grade: 4.3, Gender: "Male"}}/>
    <br/>
    <br/>
     <Course CourseName = "Programming 2" />
     <Attributes attributeName = "Name" attributeGrade = "Grade" attributeGender = "Gender"/>
     <Student student = {{Name: "Carlos", Grade: 4.0, Gender: "Male"}}/>
     <Student student = {{Name: "Oscar", Grade: 3.0, Gender: "Male"}}/>
     <Student student = {{Name: "Helena", Grade: 5.0, Gender: "Female"}}/>
     <Student student = {{Name: "María", Grade: 3.2, Gender: "Female"}}/>
     <Student student = {{Name: "Julio", Grade: 2.1, Gender: "Male"}}/>
     <Student student = {{Name: "Sebastían", Grade: 2.7, Gender: "Male"}}/>
     <br/>
     <br/>
     <Course CourseName = "Programming 3" />
     <Attributes attributeName = "Name" attributeGrade = "Grade" attributeGender = "Gender"/>
     <Student student = {{Name: "Alberto", Grade: 5.0, Gender: "Male"}}/>
     <Student student = {{Name: "Julian", Grade: 1.0, Gender: "Male"}}/>
     <Student student = {{Name: "Lucía", Grade: 3.2, Gender: "Female"}}/>
     <Student student = {{Name: "Lizeth", Grade: 1.0, Gender: "Female"}}/>
     <Student student = {{Name: "Luis", Grade: 1.3, Gender: "Male"}}/>
     <Student student = {{Name: "Juan", Grade: 5.0, Gender: "Male"}}/>

    </div>
  );
}

export default App;
